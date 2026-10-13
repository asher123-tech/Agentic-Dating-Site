# AmorAI — Agentic Dating Platform

🚀 **Live Demo:** [https://agentic-dating-site-chi.vercel.app](https://agentic-dating-site-chi.vercel.app)  
📹 **Demo Video:** [https://youtu.be/tOgX-brz4ww](https://youtu.be/tOgX-brz4ww)  
📦 **GitHub Repository:** [https://github.com/asher123-tech/Agentic-Dating-Site](https://github.com/asher123-tech/Agentic-Dating-Site)  

---

## 🌟 Project Overview & Architecture

**AmorAI** is an autonomous agentic matchmaking system designed to revolutionize online dating through deep multi-agent social simulations. Instead of superficial swiping, 25 real human profiles—represented by their public LinkedIn careers and Instagram lifestyle narratives—are ingested by individual AI dating agents.

### Core Architecture Highlights
- **Engine & Framework:** Built on **Next.js 16 (App Router)**, **React 19**, **Node.js**, and structured **Gemini API** simulation logic.
- **Profile Ingestion & Persona Synthesis:** Autonomous ingestion engine analyzing 25 candidate profiles to extract relational needs, lifestyle hobbies, intellectual interests, psychological traits (MBTI, Enneagram, Attachment Styles), and strict partner directives.
- **Multi-Agent Dating Simulation Lounge:** Real-time visual arena where autonomous agents conduct multi-turn 1-on-1 virtual dates across 6 conversational stages, evaluating chemistry, communication patterns, and emotional compatibility.
- **Algorithmic Compatibility Rankings:** Dynamic 5-dimensional compatibility matrix computing mutual scores (Values, Lifestyle, Intellect, Humor/Vibe, Goals) and generating ranked candidate leaderboards with comprehensive AI rationales.
- **Deployment:** Deployed 24/7 on **Vercel** with automatic continuous integration and instant production rollouts.

---

## 🚀 Key Feature Workflows

### 1. Candidate Pool Ingestion
- Pre-populated with **25 diverse, real candidate profiles** featuring verified public LinkedIn URLs, Instagram profiles, high-resolution portraits, professions, and bios.
- Interactive controls for **single candidate addition**, **bulk JSON import**, and **instant preset reloading**.
- URL validation and live social profile inspection.

### 2. Synthesized AI Agent Dossiers
- Deep structured persona extraction:
  - **Relational Needs:** Essential emotional and lifestyle requirements (e.g., intellectual sparring, space for solo craft, emotional safety).
  - **Hobbies & Crafts:** Extracted activities (e.g., rock bouldering, analog photography, sourdough fermentation).
  - **Intellectual Interests:** Core passions (e.g., neuro-symbolic AI, bio-materials, urban acoustics).
  - **Psychological Profiles:** MBTI archetypes, Enneagram, attachment styles, and love languages.
  - **Ideal Partner Directives:** Clear instructions for matchmaking agents including non-negotiable must-haves and dealbreakers.

### 3. Real-Time Speed-Dating Lounge
- **1-on-1 Dialogue Theater:** Visualizes live speed dates with animated speech bubbles, topic markers, sentiment detection, and live scoring gauges.
- **6 Conversation Stages:** Icebreaker &rarr; Core Values &rarr; Ambition &rarr; Hobbies &rarr; Vulnerability &rarr; Spark Verdict.
- **Multi-Table Lounge Grid:** Visual matrix tracking all 300 simultaneous dates across the 25-person cohort.
- **Playback Controls:** `1x`, `2x`, `5x` speed toggles, pause/resume, and instant complete mode.

### 4. Ranked Leaderboards & Match Insights
- Comprehensive rankings for every candidate showing their top matches and percentage alignment.
- **Mutual Top 3 ("Cupid's Choice") Badges:** Highlight pairings where both agents mutually ranked each other in their top 3.
- **AI Compatibility Rationales:** Detailed explanations highlighting why a pair succeeded and noting potential friction points.
- **Human First Date Generator:** AI-recommended first date itineraries and custom icebreaker messages ready to copy and send.
- **Full Cohort Export:** Download the complete ranked cohort match dossier in JSON.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Lucide Icons, Framer Motion, Canvas-Confetti
- **Backend / APIs:** Next.js Server Route Handlers (`/api/profiles`, `/api/analyze`, `/api/simulate`)
- **AI / Simulation:** Embedded agentic synthesis engine & multi-turn dialogue simulation architecture
- **Hosting & CI/CD:** Vercel (Production) + GitHub Actions CI

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js `v18.17+` or `v20+` (tested on Node `v24.20.0`)
- npm, pnpm, or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/asher123-tech/Agentic-Dating-Site.git
cd Agentic-Dating-Site

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Build Verification
```bash
npm run build
```

---

## 📡 API Endpoints

- `GET /api/profiles`: Returns the benchmark pool of 25 candidate profiles with verified social URLs.
- `POST /api/analyze`: Ingests candidate objects and synthesizes AI agent dossiers with structured traits.
- `POST /api/simulate`: Runs pairwise speed-dating simulations across all ingested agents and computes ranked leaderboards.

---

## 📄 License

MIT License. Created by [asher123-tech](https://github.com/asher123-tech).
