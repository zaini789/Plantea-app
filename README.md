# 🌿 Plantea — Pakistan's Smart Plant Marketplace

> A 3-sided mobile marketplace connecting plant **Buyers**, **Sellers**, and **Delivery Riders** across Pakistan — powered by AI plant identification and a zero-cost MVP stack.

---

# 📋 Project Overview

**Plantea** is a mobile application built for the Pakistani plant market. It allows:

- 🛒 **Buyers** to browse, search, and order plants by city
- 🌱 **Sellers** to list plants, get AI health scans, and manage orders
- 🚴 **Riders** to accept and deliver plant orders

The platform earns revenue through a **5–10% commission** on every order. Sellers can subscribe to a paid plan (Rs. 999/month) to reduce their commission rate from 10% to 5%.

---

## 🏫 Academic Information

| **Course** | Software Engineering |
| **Institution** | University of Engineering & Technology (UET) Lahore |
| **Lab** | IDEAL Labs |
| **Instructor** | Dr. Syed Khaldoon Khurshid |
| **Semester** | CS 3rd Semester |
| **Phase** | Week 4 — Design Phase |
| **Team** | M Bilal (2025-S-CS-26) ·
M Saddique (2025-S-CS-02) ·
M Usman (2025 -S -CS -).
Zain Ali(2025-S-CS-54) .
Muzammil (2025-S-CS-)|

---


## 🗄️ Database Design

**6 Entities:**

| Table | Purpose |
|-------|---------|
| `users` | All roles — buyers, sellers, riders |
| `plants` | Plant listings created by sellers |
| `orders` | Every order placed on the platform |
| `reviews` | Buyer reviews after delivery |
| `subscriptions` | Seller plan (free/starter) |
| `ai_scans` | AI plant health scan results |

**Relationships:**
- `users` → `plants` : One-to-Many
- `users` → `orders` : One-to-Many
- `plants` → `orders` : One-to-Many
- `orders` → `reviews` : One-to-One
- `users` → `subscriptions` : One-to-One
- `plants` → `ai_scans` : One-to-Many

---

## 💻 Tech Stack

| Layer | Technology | Cost |
|-------|-----------|------|
| Mobile App | React Native | Free |
| Backend API | Node.js + Express | Free |
| Database | Supabase (PostgreSQL) | Free |
| Image Storage | Supabase Storage | Free |
| Authentication | Supabase Auth (JWT) | Free |
| AI Scanner | PlantNet API (500 scans/day) | Free |
| Hosting | Railway.com | Free |
| **Total** | | **Rs. 0 / month** |

---

## 🌿 Core Features (MVP)

- [x] Architecture design (3-tier)
- [x] Database schema (6 entities, normalized to 3NF)
- [x] Git workflow setup (3-branch strategy)
- [x] GitHub Project Kanban board
- [ ] User registration & login (JWT)
- [ ] Plant listing with AI health scan
- [ ] Order placement with commission calculation
- [ ] Rider assignment & delivery tracking
- [ ] Buyer reviews after delivery
- [ ] Seller subscription management

---


## 📊 Project Board

Track progress on our [GitHub Projects Board](../../projects).

| To-Do | In Progress | Done |
|-------|------------|------|
| Order flow API | Plant listing API | ✅ Requirements |
| Rider GPS module | Supabase schema | ✅ MoSCoW priorities |
| Reviews & ratings | AI Scanner integration | ✅ Architecture design |
| Push notifications | | ✅ ER data modeling |
| | | ✅ Git repo created |

---

## 💰 Upgrade Path

| Stage | Infrastructure | Monthly Cost |
|-------|---------------|-------------|
| Now (Semester MVP) | Supabase Free + Railway Free | Rs. 0 |
| 1,000 users | Supabase Pro | ~Rs. 7,000 |
| 10,000+ users | AWS / GCP | Funded by commission |

---

## 👥 Team

| Name | Role | Branch |
|------|------|--------|
| M Bilal | Team Lead & Backend | `bilal` |
| M Saddique | Database & API | `saddique` |
| M Usman | Frontend & Mobile | `usman` |

---

## 📄 License

This project is developed for academic purposes under IDEAL Labs, UET Lahore.

---

<p align="center">
  🌿 <strong>Plantea</strong> — Pakistan's Smart Plant Marketplace<br>
  IDEAL Labs · UET Lahore · CS 3rd Semester
</p>
