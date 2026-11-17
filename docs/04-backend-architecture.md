# 04 — Backend Architecture

## 1. Architectural Philosophy
<strong style="color: #D90429; font-weight: 700;">The backend </strong><span style="color: #2D6A4F;">systems architected in Getaneh's projects (*GondarRent AI*, *MedLens*, *EduTrack*, and *InternBridge*) adhere to modern API standards:</span>
1. <strong style="color: #D90429; font-weight: 700;">Asynchronous Non-Blocking I/O:</strong> <span style="color: #2D6A4F;">High throughput, low-latency microservices using Python's `asyncio` and FastAPI.</span>
2. <strong style="color: #D90429; font-weight: 700;">Layered Decoupling:</strong> <span style="color: #2D6A4F;">Separation of Presentation (Routes/Controllers), Business Logic (Services), and Data Access (Repositories / ORM).</span>
3. <strong style="color: #D90429; font-weight: 700;">Strict Contract Enforcement:</strong> <span style="color: #2D6A4F;">Pydantic schemas validating all incoming request payloads before business execution.</span>

---

## 2. API Design & Routing Patterns

```
Client (Web / Mobile)
       │
       ▼
[ Reverse Proxy / NGINX / Gateway ]
       │
       ├──> Authentication Middleware (JWT Validation & Token Inspection)
       │
       ├──> Rate Limiting & Security Filters (IP throttles, CORS, Sanitization)
       │
       ▼
[ FastAPI / Spring Boot Application Layer ]
       ├── /api/v1/auth/          # Registration, login, token refresh
       ├── /api/v1/properties/    # GondarRent listing & valuation endpoints
       ├── /api/v1/medical/       # MedLens QR token emergency triage routes
       ├── /api/v1/predict/       # EduTrack Scikit-Learn ML inference
       └── /api/v1/internships/   # InternBridge student/mentor/supervisor RBAC
```

---

## 3. Asynchronous Model Inference Pattern
<strong style="color: #D90429; font-weight: 700;">For ML </strong><span style="color: #2D6A4F;">integration (as in *EduTrack* and *GondarRent AI*):</span>
- <strong style="color: #D90429; font-weight: 700;">Models </strong><span style="color: #2D6A4F;">are pre-trained and serialized via `joblib` into binary model artifacts.</span>
- <strong style="color: #D90429; font-weight: 700;">During </strong><span style="color: #2D6A4F;">application startup (`@app.on_event("startup")`), the model artifact is loaded into shared memory once.</span>
- <strong style="color: #D90429; font-weight: 700;">Incoming </strong><span style="color: #2D6A4F;">inference requests pass validated feature arrays directly into `model.predict_proba()` without incurring cold-start model load latency.</span>
- <strong style="color: #D90429; font-weight: 700;">Output </strong><span style="color: #2D6A4F;">features include both the final prediction class and feature importance attributions for explainability.</span>

