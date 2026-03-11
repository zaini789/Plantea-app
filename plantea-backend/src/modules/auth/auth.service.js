// =============================================================
// src/modules/auth/auth.service.js
// Plantea — Authentication Business Logic
// =============================================================
// Responsibility: Handle user registration and login logic.
//
// SE Principle — Separation of Concerns (3-Layer Pattern):
//   Service layer  → business logic lives here
//   Controller     → handles HTTP request/response only
//   Database       → Supabase handles storage
//
// Refactoring Note:
//   Originally, all logic would sit in the controller (God Function
//   code smell). Extracting into a service makes each piece
//   independently testable and replaceable.
// =============================================================

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const supabase = require('../../config/supabase');
const logger = require('../../utils/logger');

// Number of salt rounds for bcrypt — 12 is the industry standard balance
// between security and performance
const SALT_ROUNDS = 12;


/**
 * Register a new user (buyer, seller, or rider).
 *
 * Steps:
 *  1. Check if email or phone is already registered
 *  2. Hash the password with bcrypt
 *  3. Insert user into Supabase users table
 *  4. If seller, create their default free subscription
 *  5. Return a signed JWT token
 *
 * @param {object} userData - { full_name, email, phone, password, role, city }
 * @returns {object} - { user, token }
 */
const registerUser = async (userData) => {
  const { full_name, email, phone, password, role, city } = userData;

  // Step 1: Check for duplicate email
  const { data: existingUser } = await supabase
    .from('users')
    .select('id')
    .eq('email', email)
    .single();

  if (existingUser) {
    // Throw a structured error — controller will catch and respond
    const err = new Error('An account with this email already exists.');
    err.statusCode = 409; // Conflict
    throw err;
  }

  // Step 2: Hash password — NEVER store plain text passwords
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  // Step 3: Insert new user into the database
  // Note: password_hash is a separate column not shown in schema above
  // Supabase Auth can also handle this — here we do manual for full control
  const { data: newUser, error: insertError } = await supabase
    .from('users')
    .insert({
      full_name,
      email,
      phone,
      password_hash: hashedPassword,
      role,
      city: city || 'Lahore',
    })
    .select('id, full_name, email, role, city, created_at')
    .single();

  if (insertError) {
    logger.error('Failed to insert new user', insertError.message);
    const err = new Error('Registration failed. Please try again.');
    err.statusCode = 500;
    throw err;
  }

  // Step 4: If seller, create their default free subscription record
  if (role === 'seller') {
    const { error: subError } = await supabase
      .from('subscriptions')
      .insert({
        seller_id: newUser.id,
        tier: 'free',
        commission_rate: parseFloat(process.env.COMMISSION_FREE_TIER) || 10.00,
      });

    if (subError) {
      // Log but don't fail registration — subscription can be fixed later
      logger.warn('Subscription creation failed for new seller', subError.message);
    }
  }

  // Step 5: Generate JWT token — expires based on .env setting
  const token = generateToken(newUser);

  logger.info(`New ${role} registered: ${email}`);

  return { user: newUser, token };
};


/**
 * Log in an existing user.
 *
 * Steps:
 *  1. Find user by email
 *  2. Compare submitted password with stored hash
 *  3. Return JWT token if valid
 *
 * @param {string} email
 * @param {string} password
 * @returns {object} - { user, token }
 */
const loginUser = async (email, password) => {

  // Step 1: Fetch user by email, include password_hash for comparison
  const { data: user, error } = await supabase
    .from('users')
    .select('id, full_name, email, role, city, is_active, password_hash')
    .eq('email', email)
    .single();

  // Use same error message for both "not found" and "wrong password"
  // This prevents email enumeration attacks (attacker can't tell which one failed)
  const invalidCredentialsError = new Error('Invalid email or password.');
  invalidCredentialsError.statusCode = 401;

  if (error || !user) throw invalidCredentialsError;

  // Step 2: Check if account is active (not banned/disabled)
  if (!user.is_active) {
    const err = new Error('Your account has been deactivated. Please contact support.');
    err.statusCode = 403;
    throw err;
  }

  // Step 3: Compare password
  const passwordMatches = await bcrypt.compare(password, user.password_hash);
  if (!passwordMatches) throw invalidCredentialsError;

  // Remove password hash from the response — never send to client
  delete user.password_hash;

  // Step 4: Generate and return JWT
  const token = generateToken(user);

  logger.info(`User logged in: ${email} (${user.role})`);

  return { user, token };
};


/**
 * Internal helper: Generate a signed JWT token.
 * Extracted as a helper to avoid code duplication (DRY principle).
 *
 * @param {object} user - User object with id, role, email
 * @returns {string} - Signed JWT token
 */
const generateToken = (user) => {
  return jwt.sign(
    {
      id:    user.id,
      email: user.email,
      role:  user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );
};


module.exports = { registerUser, loginUser };
