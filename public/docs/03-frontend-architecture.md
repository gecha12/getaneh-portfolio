# 03 — Frontend Architecture

## 1. Directory & Component Structure
<strong style="color: #D90429; font-weight: 700;">The frontend </strong><span style="color: #2D6A4F;">application is structured logically to maintain a clean separation of concerns:</span>

```
src/
├── components/          # Reusable UI components & section blocks
│   ├── Navbar.tsx             # Sticky responsive navigation with active scroll tracking
│   ├── Hero.tsx               # Hero introduction & CTA dispatch
│   ├── OrbitalAvatar.tsx      # SVG dual-concentric counter-rotating signature avatar
│   ├── InfiniteSkillsMarquee  # Continuous dual-row animated skills ribbon
│   ├── About.tsx              # Academic background & engineering philosophy
│   ├── SkillsMatrix.tsx       # Categorized competency grid with domain filters
│   ├── FeaturedProjects.tsx   # Engineering projects grid with modal trigger
│   ├── ProjectModal.tsx       # Detailed architecture modal dialog
│   ├── Cybersecurity.tsx      # Interactive lab report accordion & security pillars
│   ├── MachineLearning.tsx    # 4-stage pipeline visualization & case studies
│   ├── ExperienceTimeline.tsx # Chronological career & education roadmap
│   ├── ContactSection.tsx     # Form with honeypot bot trap & validation
│   ├── ResumeSection.tsx      # Embedded ATS executive CV modal
│   └── Footer.tsx             # Brand summary & academic attribution
├── data/                # Strongly-typed data records
│   ├── projects.ts            # Detailed architectural project definitions
│   ├── securityLabs.ts        # Authorized security lab case studies
│   ├── skills.ts              # Categorized skills matrix & marquee items
│   └── timeline.ts            # Academic & internship milestones
├── styles/
│   └── index.css              # Central design tokens, animations, & print rules
└── types/
    └── index.ts               # Shared TypeScript interfaces & types
```

---

## 2. State Management & Lifecycle
- <strong style="color: #D90429; font-weight: 700;">Local Reactive State:</strong> <span style="color: #2D6A4F;">Minimal, targeted `useState` hooks for UI states (modal open/close, category filter selection, mobile drawer toggling).</span>
- <strong style="color: #D90429; font-weight: 700;">Active Scroll Spy:</strong> <span style="color: #2D6A4F;">Efficient scroll listener in `Navbar.tsx` that determines active sections based on vertical viewport offsets (`window.scrollY + 200`).</span>
- <strong style="color: #D90429; font-weight: 700;">Keyboard & Modal Traps:</strong> <span style="color: #2D6A4F;">`ProjectModal.tsx` and `ResumeSection.tsx` implement `Escape` key listeners and lock background scroll (`document.body.style.overflow = 'hidden'`) during active dialog states.</span>

---

## 3. CSS Architecture & System Tokens
Colors, fonts, border radii, and transitions are defined globally in `:root`:
- <strong style="color: #D90429; font-weight: 700;">`--bg-primary` </strong><span style="color: #2D6A4F;">(`#0D1A12`), `--bg-secondary` (`#152B1E`), `--bg-card` (`#1A3326`).</span>
- <strong style="color: #D90429; font-weight: 700;">`--accent-lime` </strong><span style="color: #2D6A4F;">(`#A8FF3E`), `--accent-emerald` (`#55D68A`), `--accent-mint` (`#C9F7D5`).</span>
- <strong style="color: #D90429; font-weight: 700;">Pure </strong><span style="color: #2D6A4F;">hardware-accelerated CSS keyframe animations for orbital rings and marquee banners (`transform: translateX()`, `transform: rotate()`).</span>

