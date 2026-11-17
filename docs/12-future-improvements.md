# 12 — Future Improvements & Architecture Roadmap

## 1. Short-Term Enhancements (Next 1-3 Months)
- **Live Serverless Contact Function**: Connect the contact form to a live serverless backend (Netlify Functions or Cloudflare Workers) linked to an email relay (Resend or SendGrid) with turnkey captcha verification.
- **Interactive Terminal Sandbox**: Add an interactive terminal drawer where visitors can type commands (`cat about.txt`, `run audit`, `ping projects`) for a gamified technical experience.
- **Project Filter Micro-Animations**: Implement subtle layout transitions when filtering projects using lightweight CSS grid transition techniques.

---

## 2. Medium-Term Roadmap (3-6 Months)
- **Live Model Demo Subdomains**: Host live browser-accessible demos of *GondarRent AI* and *EduTrack* on dedicated subdomains (e.g. `gondarrent.getaneh.dev`) using Dockerized FastAPI backends on Render/Railway.
- **Interactive Security Playground**: Embed a client-side simulated vulnerability sandbox where recruiters can observe an injection exploit attempt and view its remediation code side-by-side.
- **Automated CI/CD Pipeline**: GitHub Actions workflow running `npm run type-check`, linting, and automated Lighthouse audit score gates on every pull request.

---

## 3. Long-Term Vision (6-12 Months)
- **PWA & Offline Support**: Service worker caching for the standalone CV (`/cv.html`) and key technical case studies to enable instantaneous offline reading on mobile devices.
- **Technical Engineering Blog**: Integrate a Markdown/MDX technical blog section discussing practical penetration testing labs, SIEM alert triage, and FastAPI microservice optimization.
