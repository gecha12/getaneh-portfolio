# Getaneh Dejenie — Premium Engineering Portfolio

[![Build Status](https://img.shields.io/badge/Build-Passing-A3FF12?style=for-the-badge&logo=vite)](https://github.com/gecha12)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict%20Mode-087F50?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-14221B?style=for-the-badge&logo=react)](https://react.dev/)
[![Student ID](https://img.shields.io/badge/Univ.%20of%20Gondar-CS--02130%2F15-A3FF12?style=for-the-badge)](https://uog.edu.et/)

Personal engineering portfolio for **Getaneh Dejenie** — Fourth-year Computer Science student at the **University of Gondar**, College of Informatics, Department of Computer Science, Ethiopia.

Positioned across:
- **Full-Stack Development** (React, TypeScript, Python, FastAPI, Spring Boot, PostgreSQL, Docker)
- **Cybersecurity Engineering** (OWASP Top 10, Network Traffic Analysis with Wireshark, Nmap, Burp Suite, Wazuh SIEM)
- **Artificial Intelligence & Machine Learning** (Supervised Classification, Model Evaluation, Clinical Summarization)

---

## 🎨 Visual Identity & Design System

The visual design is built with a disciplined, futuristic palette balancing deep charcoals, rich blacks, emerald surfaces, and hot neon green accents:

- **Primary Background:** `#090E0D` (Deep Charcoal)
- **Secondary Background:** `#101A16` (Dark Obsidian)
- **Surface / Card Background:** `#14221B` (Rich Emerald Surface)
- **Hot Neon Green Accent:** `#A3FF12` (Signature Kinetic Energy)
- **Deep Emerald Accent:** `#087F50` (Structural Anchors)
- **Soft Green Highlight:** `#D5FFB8` (Gentle Ambient Text)
- **Main Text:** `#F4F7F4` (High Contrast White-Green)
- **Muted Text:** `#A0ADA5` (Refined Legibility)
- **Borders:** `rgba(163, 255, 18, 0.14)` (Subtle Ambient Geometric Traces)

---

## 🚀 Key Signature Features

### 1. Signature Orbital Avatar Animation
- Located prominently in the Hero Section.
- Three independent, mathematically layered orbital SVG rings rotating via GPU-accelerated CSS transforms.
- Orbiting kinetic particles moving smoothly along elliptical tracks.
- Ambient soft emerald glow backdrop with gentle scale feedback on hover.
- Respects `prefers-reduced-motion` and scales cleanly on mobile viewports.

### 2. Dual Infinite Horizontal Skills Marquee
- **Row One (Right to Left):** `React`, `TypeScript`, `JavaScript`, `Next.js`, `HTML5`, `CSS3`, `Python`, `FastAPI`.
- **Row Two (Left to Right):** `PostgreSQL`, `Docker`, `Git`, `GitHub`, `Linux`, `Nmap`, `Wireshark`, `Burp Suite`, `Machine Learning`.
- Infinite seamless looping with duplicated content internally (zero gaps or jerky resets).
- Interactive pause on hover with subtle glow highlights.

### 3. Curated Engineering Projects Matrix
1. **GondarRent AI:** Intelligent property discovery and automated price estimation platform (React, TypeScript, Python, FastAPI, PostgreSQL, Docker).
2. **MedLens:** AI-assisted patient medical record and clinical decision support system (Final-Year Capstone Project — Flutter, React, Python, FastAPI, PostgreSQL).
3. **EduTrack:** Machine-learning-based student academic trajectory and intervention forecaster (Python, Scikit-Learn, FastAPI, React).
4. **InternBridge:** Enterprise internship marketplace and institutional apprenticeship tracker developed during the software engineering internship at Atlas Computer Technology PLC (Spring Boot, Next.js, PostgreSQL, Docker).

### 4. Dedicated Cybersecurity Section
- Real, authentic lab reports conducted in authorized sandbox environments:
  - Web Application Security (OWASP Top 10, SQLi, XSS, Burp Suite proxy testing).
  - Network Traffic Dissection (Wireshark PCAP analysis, TCP stream reconstruction).
  - Host & Port Enumeration (Nmap TCP SYN scan, service version profiling).
  - SIEM Monitoring & Threat Detection (Wazuh HIDS, SSH brute-force alert triage).

### 5. Applied Artificial Intelligence & Machine Learning
- 4-stage pipeline architecture (Preprocessing -> Benchmarking -> Evaluation & Attribution -> FastAPI Inference Service).
- Explainable predictive models utilizing Decision Trees and Random Forests with stratified cross-validation.

### 6. ATS-Friendly Printable & Downloadable CV
- Standard single-page format optimized for technical recruiters and parsing algorithms.
- Browser print support (`Ctrl + P` / `Cmd + P`) with tailored print stylesheets.

### 7. Secure Contact Channel
- Client-side validation with regex email verification.
- Honeypot spam prevention mechanism trapping automated bots.
- Rate-limiting protection simulating denial-of-service resilience.
- Direct links to Telegram (`@deju12_21`), GitHub (`gecha12`), LinkedIn, and Email.

---

## 📂 Project Structure

```
portifolio project/
├── index.html                   # Entrypoint with Open Graph and fonts
├── package.json                 # React 18, TypeScript, Vite, Lucide React
├── tsconfig.json                # Strict TypeScript configuration
├── vite.config.ts               # Vite build and dev server configuration
├── public/
│   ├── assets/
│   │   ├── favicon.svg          # Custom brand monogram icon
│   │   └── profile-placeholder.svg # High-definition vector developer portrait
│   ├── robots.txt               # SEO bot instructions
│   └── sitemap.xml              # Search engine discovery index
├── src/
│   ├── assets/                  # Static component media
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky navigation with mobile drawer
│   │   ├── Hero.tsx             # Hero introduction & action links
│   │   ├── OrbitalAvatar.tsx    # Signature 3-ring orbital SVG animation
│   │   ├── InfiniteSkillsMarquee.tsx # Dual opposing infinite marquees
│   │   ├── About.tsx            # Academic background & engineering philosophy
│   │   ├── SkillsMatrix.tsx     # Categorized skills matrix with real descriptions
│   │   ├── FeaturedProjects.tsx # Project showcase with category filters
│   │   ├── ProjectModal.tsx     # In-depth architectural & problem-solution modal
│   │   ├── Cybersecurity.tsx    # Dedicated security labs & SOC case studies
│   │   ├── MachineLearning.tsx  # Applied ML workflows & predictive models
│   │   ├── ExperienceTimeline.tsx # Chronological education & internship timeline
│   │   ├── ResumeSection.tsx    # ATS-optimized downloadable resume preview
│   │   ├── ContactSection.tsx   # Validated secure form & direct channels
│   │   └── Footer.tsx           # Minimal branding & academic attribution
│   ├── data/
│   │   ├── projects.ts          # Authentic project metadata
│   │   ├── skills.ts            # Marquee items & categorized skill descriptions
│   │   ├── securityLabs.ts      # Authorized cybersecurity lab writeups
│   │   └── timeline.ts          # Academic and internship milestones
│   ├── styles/
│   │   └── index.css            # Black + Hot Green + Emerald design system
│   ├── types/
│   │   └── index.ts             # Strong TypeScript interfaces
│   ├── App.tsx                  # Root layout
│   └── main.tsx                 # React DOM initialization
└── dist/                        # Production optimized bundle
```

---

## 🛠️ Local Development & Build

### Prerequisites
- Node.js (v18+ recommended, verified on v22.20.0)
- npm (v9+ recommended, verified on 10.9.3)

### Installation
```bash
npm install
```

### Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the live hot-reloading development build.

### Production Type-Check & Build
```bash
npm run build
```
Generates clean, minified, production-ready assets into the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Production Deployment Guide

### Deploying to Netlify
1. Initialize Git in the project root:
   ```bash
   git init
   git add .
   git commit -m "feat: initial production build of Getaneh Dejenie portfolio"
   ```
2. Push to your GitHub repository:
   ```bash
   git remote add origin https://github.com/gecha12/portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. In [Netlify Dashboard](https://app.netlify.com):
   - Choose **Add new site** -> **Import an existing project** -> **GitHub**.
   - Select your portfolio repository.
   - Set **Build command:** `npm run build`
   - Set **Publish directory:** `dist`
4. Click **Deploy Site**.

---

&copy; 2026 **Getaneh Dejenie** &bull; University of Gondar &bull; Computer Science (UoG-CS-02130/15)

