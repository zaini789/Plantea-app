// =============================================================
// src/modules/auth/auth.controller.js
// Plantea — Authentication HTTP Controller
// =============================================================
// Responsibility: Handle HTTP request/response for auth routes.
//
// SE Principle — Thin Controller:
//   This controller does NOT contain business logic.
//   It only: validates input → calls service → returns response.
//   All real work is in auth.service.js.
//
//   This is a refactored version of the "God Function" code smell
//   where one function did everything (read input, process logic,
//   talk to DB, and format response).
// =============================================================

const { validationResult } = require('express-validator');
const authService = require('./auth.service');
const ApiResponse = require('../../utils/ApiResponse');
const logger = require('../../utils/logger');


/**
 * POST /api/auth/register
 * Register a new user (buyer, seller, or rider).
 */
const register = async (req, res, next) => {
  try {
    // Check validation errors from express-validator rules (defined in routes)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return ApiResponse.error(res, 'Validation failed.', 422, errors.array());
    }

    // Delegate all logic to the service layer
    const result = await authService.registerUser(req.body);

    return ApiResponse.success(res, result, 'Registration successful. Welcome to Plantea!', 201);

  } catch (err) {
    // Pass to global error handler (error.middleware.js)
    next(err);
  }
};


/**
 * POST /api/auth/login
 * Login and receive a JWT token.
 */
const login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return ApiResponse.error(res, 'Validation failed.', 422, errors.array());
    }

    const { email, password } = req.body;
    const result = await authService.loginUser(email, password);

    return ApiResponse.success(res, result, 'Login successful.');

  } catch (err) {
    next(err);
  }
};


/**
 * GET /api/auth/me
 * Return the currently authenticated user's profile.
 * Protected route — requires valid JWT (verifyToken middleware).
 */
const getMe = async (req, res) => {
  // req.user is attached by verifyToken middleware
  return ApiResponse.success(res, req.user, 'Profile fetched successfully.');
};


module.exports = { register, login, getMe };
