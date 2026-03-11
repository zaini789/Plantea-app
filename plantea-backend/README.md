# 🌿 Plantea — Backend API

**Pakistan's Smart Plant Marketplace**  
University of Engineering & Technology Lahore | IDEAL Labs  
CS 3rd Semester | Dr. Syed Khaldoon Khurshid

---

## Overview

Plantea is a three-sided mobile marketplace connecting **Buyers**, **Sellers**, and **Riders** in Pakistan's plant ecosystem. This repository contains the **Node.js REST API backend** that powers the React Native mobile application.

---

## Architecture

```
React Native App (Frontend)
        │  HTTPS Requests
        ▼
┌──────────────────────────────┐
│    Node.js + Express         │  ← Business Logic Layer (this repo)
│  ┌────────┐ ┌─────────────┐ │
│  │  Auth  │ │   Plants    │ │
│  ├────────┤ ├─────────────┤ │
│  │ Orders │ │   Scanner   │ │
│  └────────┘ └─────────────┘ │
└──────────────┬───────────────┘
               │ Supabase Client
               ▼
┌──────────────────────────────┐
│  Supabase (PostgreSQL)       │  ← Data Layer
│  6 Tables | 3NF Normalized   │
└──────────────────────────────┘
               │ HTTP
               ▼
┌──────────────────────────────┐
│  Plant.id API                │  ← External AI Service
└──────────────────────────────┘
```

---

## Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher
- **Supabase** account (free tier works)
- **Plant.id API key** (free tier: 100 scans/day)

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-team/plantea-backend.git
cd plantea-backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
```bash
cp .env.example .env
```
Open `.env` and fill in your values:
- `SUPABASE_URL` — from Supabase Project Settings → API
- `SUPABASE_SERVICE_KEY` — from Supabase Project Settings → API
- `JWT_SECRET` — any long random string
- `PLANTID_API_KEY` — from [plant.id](https://plant.id)

### 4. Set up the database
1. Go to your Supabase dashboard
2. Open **SQL Editor**
3. Paste and run the contents of `database/schema.sql`
4. This creates all 6 tables and inserts test data

### 5. Start the server
```bash
# Development (auto-restarts on file changes)
npm run dev

# Production
npm start
```

### 6. Verify it's running
```
GET http://localhost:3000/health
```
Expected response:
```json
{
  "success": true,
  "message": "Plantea API is running.",
  "data": {
    "status": "OK",
    "service": "Plantea Backend API",
    "uptime_seconds": 12,
    "metrics": { ... }
  }
}
```

---

## API Endpoints

### Authentication (`/api/auth`)
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/auth/register` | Public | Register new user |
| POST | `/api/auth/login` | Public | Login, returns JWT |
| GET | `/api/auth/me` | 🔒 Any | Get my profile |

### Plants (`/api/plants`)
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/plants` | Public | Browse marketplace |
| GET | `/api/plants/:id` | Public | View plant detail |
| GET | `/api/plants/my/listings` | 🔒 Seller | My listings |
| POST | `/api/plants` | 🔒 Seller | Create listing |
| PATCH | `/api/plants/:id` | 🔒 Seller | Update listing |
| DELETE | `/api/plants/:id` | 🔒 Seller | Remove listing |

### Orders (`/api/orders`)
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/orders` | 🔒 Buyer | Place order |
| GET | `/api/orders` | 🔒 Any | My orders |
| PATCH | `/api/orders/:id/status` | 🔒 Seller/Rider | Update status |
| PATCH | `/api/orders/:id/assign-rider` | 🔒 Rider | Accept delivery |

### AI Scanner (`/api/scanner`)
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/scanner/identify` | 🔒 Any | Identify plant from image |

---

## Folder Structure

```
plantea-backend/
├── server.js                    # App entry point
├── .env.example                 # Environment variable template
├── package.json
├── database/
│   └── schema.sql               # All 6 tables + seed data
└── src/
    ├── config/
    │   └── supabase.js          # Shared DB client (singleton)
    ├── middleware/
    │   ├── auth.middleware.js   # JWT verify + role guard
    │   ├── error.middleware.js  # Global error handler + error count
    │   └── responseTime.middleware.js  # Performance metric
    ├── utils/
    │   ├── ApiResponse.js       # Standardized response formatter
    │   └── logger.js            # Structured logging
    └── modules/
        ├── auth/                # Register, login, JWT
        ├── plants/              # Listing CRUD
        ├── orders/              # Order lifecycle
        └── scanner/             # Plant.id AI integration
```

---

## Quality Metrics

This backend measures and exposes engineering health indicators:

| Metric | Target | Where Measured |
|--------|--------|----------------|
| Response Time | < 2s per request | `X-Response-Time` header on every response |
| Error Rate | < 1% of requests | `/health` endpoint → `total_errors_this_session` |
| Uptime | 99% monthly | Supabase + hosting platform |
| AI Scanner Speed | < 5s per scan | Plant.id API with 10s timeout guard |

---

## Git Workflow

```
main          ← stable, tested code only
  └── dev     ← integration branch
        ├── your-name/feature-auth
        ├── your-name/feature-plants
        └── your-name/feature-orders
```

**Flow:** `your-branch → dev (PR + review) → main`

---

## Team

CS 3rd Semester | UET Lahore | IDEAL Labs  
Supervised by Dr. Syed Khaldoon Khurshid
