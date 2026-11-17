# 04 — Backend Architecture

## 1. Architectural Philosophy
The backend systems architected in Getaneh's projects (*GondarRent AI*, *MedLens*, *EduTrack*, and *InternBridge*) adhere to modern API standards:
1. **Asynchronous Non-Blocking I/O**: High throughput, low-latency microservices using Python's `asyncio` and FastAPI.
2. **Layered Decoupling**: Separation of Presentation (Routes/Controllers), Business Logic (Services), and Data Access (Repositories / ORM).
3. **Strict Contract Enforcement**: Pydantic schemas validating all incoming request payloads before business execution.

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
For ML integration (as in *EduTrack* and *GondarRent AI*):
- Models are pre-trained and serialized via `joblib` into binary model artifacts.
- During application startup (`@app.on_event("startup")`), the model artifact is loaded into shared memory once.
- Incoming inference requests pass validated feature arrays directly into `model.predict_proba()` without incurring cold-start model load latency.
- Output features include both the final prediction class and feature importance attributions for explainability.
