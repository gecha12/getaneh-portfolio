# 07 — API Documentation

## 1. Portfolio Contact Endpoint Specification

### `POST /api/v1/contact`
Receives, validates, and dispatches sanitized inquiry messages from recruiters and collaborators.

#### Request Headers
- `Content-Type: application/json`
- `X-Requested-With: XMLHttpRequest`

#### Request Payload Schema
```json
{
  "name": "Alex Mercer",
  "email": "alex@company.com",
  "subject": "Full-Stack Software Engineering Role",
  "message": "We reviewed your portfolio and would like to schedule a technical interview.",
  "honeypot": ""
}
```

#### Validation Rules
1. `name`: Required, string, 2-100 characters, stripped of HTML tags.
2. `email`: Required, valid RFC 5322 email regex pattern.
3. `message`: Required, 10-2000 characters.
4. `honeypot`: **Must be empty**. If any value is provided, request is rejected or silently dropped to neutralize automated web crawlers.

#### Response Codes
- `200 OK`: Message received and queued for dispatch.
- `400 Bad Request`: Field validation failure.
- `429 Too Many Requests`: Submission cooldown violated (rate limit active).

---

## 2. Microservice Showcase APIs

### A. GondarRent AI Valuation API
- **Endpoint**: `POST /api/v1/valuation/estimate`
- **Payload**: `{ "bedrooms": 2, "square_meters": 85, "subcity": "Maraki", "furnishing": "semi" }`
- **Response**: `{ "predicted_monthly_birr": 12500, "confidence_range": [11800, 13200], "model_version": "v1.2.0" }`

### B. MedLens Emergency Token Lookup
- **Endpoint**: `GET /api/v1/emergency/token/{token_hash}`
- **Security**: Rate limited, one-time read flag, immutable audit log created.
- **Response**: `{ "blood_group": "O+", "allergies": ["Penicillin"], "emergency_contact": "+251911..." }`
