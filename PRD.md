# Product Requirements Document (PRD) - MehnatKash Platform

## 1. Executive Summary & Product Vision
**MehnatKash** is transitioning from a conceptual demo into a production-grade, enterprise-scale Hyperlocal Services Marketplace. It connects consumers (B2C) and businesses (B2B) with highly vetted, highly skilled service professionals (e.g., plumbers, electricians, tutors, cleaners, specialized agencies). 

**The Vision:** To become the market-dominating standard for service discovery and fulfillment by leveraging cutting-edge Artificial Intelligence, secure micro-transactions, advanced geolocation routing, and highly scalable serverless architectures. 

---

## 2. Target Audience
1. **Customers (B2C & B2B):** Individuals or businesses needing reliable, on-demand or scheduled service fulfillment.
2. **Service Providers (Freelancers & Agencies):** Highly skilled laborers, professionals, and SMEs seeking jobs, schedule optimization, and guaranteed payments.
3. **Super Admins:** Platform operators handling financial reconciliation, global dispute moderation, and platform stability.

---

## 3. Revolutionary AI Integrations (The "Differentiators")
*These features take the platform from a "standard app" to a "next-gen enterprise platform".*

1. **AI Matchmaking Engine:**
   - Instead of static list searches, the AI calculates the optimal provider based on real-time availability, geographic proximity, past performance data, and semantic matching of user problem descriptions.
2. **Dynamic Pricing Recommendations:**
   - ML model analyzes local demand surges, provider availability, and urgency to recommend optimized, fair pricing models dynamically (e.g., Surge pricing for emergency plumbing at 2 AM).
3. **Automated AI Dispute Resolution:**
   - AI pre-analyzes chat histories, uploaded photos (before/after), and location data to mediate lower-tier disputes instantly, drastically reducing manual Admin overhead.
4. **Smart KYC & Fraud Prevention:**
   - Zero-trust onboarding for providers using AI-powered OCR for ID extraction and real-time selfie consistency matching.
   - NLP moderation for all reviews and chat logs to prevent direct-dealing bypasses (e.g., sharing phone numbers outside the platform).
5. **AI Schedule & Route Optimization:**
   - For providers managing multiple bookings, AI suggests optimal order of service visits based on live traffic data and time-proximity mapping.

---

## 4. Main Features & Sub Features

### 4.1 Platform Core
- **Enterprise Multi-Tenant Auth:** Supabase Auth with OAuth (Google/Apple), MFA (Multi-Factor Authentication), and strict Session limits.
- **Unified Real-time Notifications:** In-app, push, and email notifications powered by Edge WebSockets and Resend.
- **Escrow Wallet & Micro-transactions:** Integration with Stripe Connect. Funds are locked securely upon booking and released instantly via Webhooks upon verified service completion.

### 4.2 Customer Portal
- **Advanced Geolocation Search:** Interactive map view featuring clustering and real-time tracking of providers (like Uber for services).
- **Service Request Modalities:** 
  - *Emergency (ASAP):* Broadcasts to all nearby active providers; first to accept wins.
  - *Scheduled:* Browse profiles, read verified reviews, and select date/time blocks.
- **Rich Media Job Postings:** Users can upload videos/photos of their issue (e.g., a leaking pipe) for more accurate provider bidding/estimates.

### 4.3 Provider / Agency Dashboard (Command Center)
- **Deep Analytics:** Revenue metrics, profile view heatmaps, customer retention rates, and local market demand insights.
- **Availability Matrix:** Minute-by-minute calendar sync to block off personal time automatically.
- **Multi-Service Cataloging:** Rich itemized pricing configuration, varying per service type (hourly vs. fixed cost).

### 4.4 Global Admin Console
- **God-Mode Dashboard:** Real-time global view of platform health, active jobs, and transaction volumes.
- **Compliance & Approval Workflows:** Specialized Queues for manual override on flagged KYC applications.
- **Revenue Command:** Complete overview of platform commission structures and payout logs.

---

## 5. User Routes & App Structure

- `/` : Landing Page (High-converting, premium aesthetic marketing page)
- `/auth/login` | `/auth/register` : Unified auth portals with role selection branch
- `/auth/onboarding` : Multi-step profile completion & KYC flow
- `/explore` : Map & List based global search directory
- `/customer`
  - `/customer/dashboard` : Analytics and current bookings
  - `/customer/bookings/[id]` : Live job tracker, chat interface, and receipt
  - `/customer/wallet` : Payment methods, dispute triggers
- `/provider`
  - `/provider/dashboard` : Command center, AI insights
  - `/provider/schedule` : Calendar interface & route optimizer
  - `/provider/earnings` : Stripe payout tracking
  - `/provider/services` : Catalog editor
- `/admin`
  - `/admin/analytics` : Financial and system health
  - `/admin/disputes` : Intercom-style mediation hub
  - `/admin/users` : Global user table with RBAC controls

---

## 6. Non-Functional Requirements (Enterprise Standards)

- **Performance Extreme:** Core Web Vitals optimized. `< 100ms` TTFB using Edge Server Components (Next.js 15).
- **Infinite Scalability:** Stateless backend APIs powered by Serverless Edge deployments; Redis caching for search queries and catalog indexing.
- **Extreme Database Integrity:** PostgreSQL strictly guarded by Row Level Security (RLS). No backend query executes without verified JWT roles.
- **Compliance Ready:** Designed with SOC 2 Type II, GDPR, and PCI-DSS considerations from Day 1 (No sensitive PII logged unencrypted, Payments strictly off-loaded).
- **Observability:** Sentry for crash tracking, Datadog/PostHog for user behavior and edge tracing.

---

## 7. Action Plan for Fresh Start
1. **Wipe Existing State:** Delete all mock and initial boilerplate files that constrict scalability.
2. **Lay Foundation:** Implement the precise enterprise folder structure using Domain-Driven Design (grouping code by feature slice: e.g., `/features/bookings`, `/features/auth`).
3. **Database First:** Rigorous definition of Prisma ORM / Supabase Schema capturing all new complex relations (Wallets, GPS logs, Chat threads).
4. **Iterative Feature Execution:** Build component by component according to the Phase breakdown outlined in the project tasks.
