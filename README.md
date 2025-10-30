# GymTracker — Next.js App

A sleek, fast, and accessible gym tracking web app. This README focuses primarily on the **Front-End (≈90%)**, with a light touch on Back-End and a future AI roadmap.

---

## ✨ Front-End (Primary Focus)

### Stack
- **Framework:** Next.js 15 (App Router, Server/Client Components)
- **UI:** React 19, Tailwind CSS v4, class-variance-authority, tailwind-merge
- **Animations & Icons:** framer-motion, lucide-react, Font Awesome
- **Validation:** Zod
- **Auth (UI flows):** NextAuth (UI integration described below)

### UX Principles
- **Mobile-first** layout with responsive grids/flex.
- **Accessible**: keyboard navigation, focus-visible, aria labels.
- **Fast**: RSC where possible, image optimization, granular suspense boundaries.
- **Delightful**: subtle motion (reduced motion respected).

### Core UI Features
- **Dashboard:** Today’s workouts, streak, quick actions.
- **Workout Builder:** Select exercise, sets/reps/weight, notes, timers.
- **History & Insights:** Filter by date/exercise, PR highlights.
- **Profile:** Units (kg/lb), goals, theme (light/dark/system).
- **Auth Screens:** Sign in, Sign up, Reset password (wired to NextAuth).

### Component Guidelines
- **Design Tokens:** Tailwind CSS (spacing, colors, shadows, radii).
- **Reusable Components:** 
  - `<Card />`, `<Stat />`, `<Button />`, `<Input />`, `<Select />`
  - `<WorkoutForm />`, `<ExercisePicker />`, `<SetRow />`, `<HistoryTable />`
- **Motion:**
  - Page transitions with `framer-motion` (fade/slide).
  - Micro-interactions on hover/press.

### State & Data Fetching
- **Server Components** for initial data where possible.
- **Client Components** for forms, timers, motion-heavy parts.
- **Optimistic UI** for adding/editing sets.
- **Validation:** Zod schemas shared between client/server.

### Styling
- **Tailwind v4** utilities (no CSS files by default).
- **cva** for variant-based components.
- **tailwind-merge** to avoid class conflicts.

---

## 🧪 Testing (Front-End)
- **Unit**: component logic (form mappers, helpers).
- **Integration**: critical flows (create workout, edit set).
- **Accessibility**: basic a11y checks (labels/roles/tab order).

---

## ⚙️ Back-End (Brief)

### Stack & Responsibilities
- **Runtime:** Next.js API routes / Route Handlers.
- **Database:** Prisma ORM over your SQL DB (e.g., PostgreSQL).
- **Auth:** NextAuth (credentials/OAuth providers).
- **Security:** Input validation with Zod, rate limiting on auth & write routes.

### Minimal Data Model (Conceptual)
- **User**: id, name, email
- **Exercise**: id, name, muscleGroup
- **Workout**: id, userId, date
- **Set**: id, workoutId, exerciseId, reps, weight, notes

---

## 🤖 AI (Future Roadmap)

1. **Smart Workout Suggestions**
   - Recommend progressive overload targets and deload weeks based on history.
2. **Form Feedback (Vision)**
   - (Optional) Upload short clips → heuristic/ML-based posture cues.
3. **Natural Language Logging**
   - “Log 5x5 squats at 100kg” → structured set entries.
4. **Injury-Aware Adjustments**
   - Suggest substitutions and volume caps.
5. **Goal-Driven Plans**
   - Generate weekly templates for hypertrophy/strength/endurance.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+**
- **Package Manager:** pnpm / npm

## 🧭 Future Work

### 🔮 AI Expansion
- Real-time performance insights.
- Personalized training progression via GPT-based models.
- Integration with wearable fitness APIs.

### ⚡ Performance
- Advanced caching and prefetching.
- Edge rendering for global low-latency.
- Code splitting by route and component-level hydration.
- Persistent offline caching with Service Workers (PWA).

### 🛡️ Security
- Enforced HTTPS and secure cookies.
- Server-side session validation via JWT rotation.
- Rate limiting for brute-force prevention.
- Periodic dependency vulnerability scans.
- All sensitive data encrypted at rest and in transit.

---

## 🪪 License

**Copyright © 2025 GymTracker**

All rights reserved.  
No part of this codebase, design, or documentation may be copied, reused, or distributed — in full or in part — without **explicit written permission** from the original author.  
GymTracker’s code and assets are **protected by copyright and intellectual property laws**.  

Any unauthorized reproduction or commercial use is strictly prohibited and will be subject to legal enforcement.


# or
npm install
