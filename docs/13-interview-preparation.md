# 13 — Technical Interview Preparation & Storytelling Guide

This guide helps Getaneh explain the architecture, decisions, and security tradeoffs of this portfolio and showcased projects during engineering job interviews.

---

## 1. The "Tell Me About Yourself" Pitch (60-90 Seconds)
> *"I am a fourth-year Computer Science undergraduate at the University of Gondar, focusing on full-stack development, cybersecurity engineering, and applied machine learning. Over the past year, I've worked across Python, FastAPI, React, and Spring Boot—including a software engineering internship at Atlas Computer Technology PLC where I helped build InternBridge with role-based access control and PostgreSQL. Outside of product development, I conduct hands-on security research auditing OWASP Top 10 vulnerabilities, inspecting network traffic with Wireshark, and training predictive models like EduTrack to solve real-world problems. My goal is to join a forward-thinking engineering team where I can contribute to secure, scalable, and intelligent software systems."*

---

## 2. Common Technical Interview Questions & Answers

### Q1: "How did you design the portfolio architecture to be both fast and maintainable?"
- **Answer**: *"I chose React 18 with TypeScript on Vite rather than a heavy full-stack framework because the site is an interactive SPA that doesn't need server-side rendering overhead. I centralized the design tokens into CSS variables to achieve an 'Emerald Forest + Neon Lime' identity without adding CSS-in-JS runtime bloat. The final production bundle is only 74 KB gzipped, loading near-instantly."*

### Q2: "What security measures are implemented on the portfolio?"
- **Answer**: *"Even for a frontend portfolio, security is prioritized. I implemented a hidden honeypot field on the contact form to trap automated web crawlers without relying on intrusive captchas, added client-side rate-limiting cooldown gates, and sanitized all form inputs. Furthermore, our CI/CD audit ensures zero hardcoded secrets exist in the repository."*

### Q3: "Walk me through how you trained and deployed the machine learning model in EduTrack."
- **Answer**: *"In EduTrack, the objective was predicting students needing academic intervention. I performed EDA with Pandas and NumPy, applied numerical scaling and categorical encoding, and evaluated multiple supervised algorithms using stratified k-fold cross-validation. Random Forests achieved over 87% accuracy. Instead of keeping it in a Jupyter notebook, I serialized the model with Joblib and wrapped it in an asynchronous FastAPI inference service with Pydantic request validation."*

### Q4: "What was your biggest takeaway from your internship at Atlas Computer Technology PLC?"
- **Answer**: *"It was understanding that clean architecture and data integrity matter just as much as writing code. Working on InternBridge, I designed the relational schema in PostgreSQL and implemented Spring Boot role-based access control separating student, mentor, and university coordinator roles. It also gave me hands-on experience with Agile sprint ceremonies, daily standups, and Git code reviews."*

---

## 3. Key Talking Points & Metrics Cheat-Sheet
- **University**: University of Gondar, College of Informatics (ID: `UoG-CS-02130/15`).
- **Internship**: Atlas Computer Technology PLC (Spring Boot, PostgreSQL, RBAC).
- **Core Languages**: Python, TypeScript/JavaScript, Java, SQL.
- **Top Projects**: GondarRent AI (Full-stack), MedLens (Capstone / Healthcare), EduTrack (ML), InternBridge (Enterprise Internship).
- **Security Tools**: Wireshark, Nmap, Burp Suite, Wazuh SIEM, Linux/Bash.
