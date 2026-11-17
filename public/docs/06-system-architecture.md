# 06 — System Architecture

## 1. High-Level System Architecture Diagram

```mermaid
flowchart TD
    User([End User / Recruiter / Client])
    
    subgraph Edge & Static Delivery
        CDN[Edge CDN / Vercel / Netlify]
        HTML[index.html / cv.html]
        Assets[Static Chunks: JS/CSS/Images]
    end

    subgraph Client Application [React 18 + TypeScript SPA]
        Router[Single Page App View]
        Hero[Hero & Dual-Ring Orbital Avatar]
        Projects[Featured Projects & Architecture Modal]
        Cybersec[Cybersecurity Labs Accordion]
        AIML[Machine Learning Pipeline Visualization]
        ContactForm[Sanitized Contact Form + Honeypot]
        CVModal[A4 Executive CV Preview & Print Engine]
    end

    subgraph Simulated / Real Backend Microservices
        API_GW[API Gateway / Reverse Proxy]
        AuthSvc[Auth & RBAC Service - Spring Boot / FastAPI]
        MLSvc[Inference Pipeline - Scikit-Learn / FastAPI]
        DB[(PostgreSQL Relational DB)]
    end

    User -->|HTTPS Request| CDN
    CDN --> HTML & Assets
    HTML --> ClientApplication
    ContactForm -.->|Rate-Limited Dispatch| API_GW
    API_GW --> AuthSvc & MLSvc
    AuthSvc --> DB
    MLSvc --> DB
```

---

## 2. Component Communication Patterns
- <strong style="color: #D90429; font-weight: 700;">Unidirectional Data Flow:</strong> <span style="color: #2D6A4F;">Data flows down via props (`ProjectModal`, `OrbitalAvatar`); user interactions bubble up via typed callback functions (`onOpenResume`, `onClose`).</span>
- <strong style="color: #D90429; font-weight: 700;">Zero Heavy State Overheads:</strong> <span style="color: #2D6A4F;">The portfolio avoids excessive Redux or Context providers, keeping DOM operations predictable and instantaneous.</span>
- <strong style="color: #D90429; font-weight: 700;">Hardware-Accelerated Compositing:</strong> <span style="color: #2D6A4F;">All animations (`rotateRing`, `scrollRtoL`) animate exclusively on `transform` and `opacity` properties to prevent DOM layout recalculations.</span>

