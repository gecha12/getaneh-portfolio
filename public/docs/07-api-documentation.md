# 07 — API Documentation

## 1. Portfolio Contact Endpoint Specification

### `POST /api/v1/contact`
Receives, validates, and dispatches sanitized inquiry messages from recruiters and collaborators.

#### Request Headers
- <strong style="color: #E26D5C; font-weight: 600;">`Content-Type: </strong> <span style="color: #B2CEBD;">application/json`</span>
- <strong style="color: #E26D5C; font-weight: 600;">`X-Requested-With: </strong> <span style="color: #B2CEBD;">XMLHttpRequest`</span>

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
1. **`name`: **Required, string, 2-100 characters, stripped of HTML tags.
2. **`email`: **Required, valid RFC 5322 email regex pattern.
3. **`message`: **Required, 10-2000 characters.
4. **`honeypot`: ****Must be empty**. If any value is provided, request is rejected or silently dropped to neutralize automated web crawlers.

#### Response Codes
- <strong style="color: #E26D5C; font-weight: 600;">`200 </strong> <span style="color: #B2CEBD;">OK`: Message received and queued for dispatch.</span>
- <strong style="color: #E26D5C; font-weight: 600;">`400 </strong> <span style="color: #B2CEBD;">Bad Request`: Field validation failure.</span>
- <strong style="color: #E26D5C; font-weight: 600;">`429 </strong> <span style="color: #B2CEBD;">Too Many Requests`: Submission cooldown violated (rate limit active).</span>

---

## 2. Microservice Showcase APIs

### A. GondarRent AI Valuation API
- <strong style="color: #E26D5C; font-weight: 600;">Endpoint:</strong> <span style="color: #B2CEBD;">`POST /api/v1/valuation/estimate`</span>
- <strong style="color: #E26D5C; font-weight: 600;">Payload:</strong> <span style="color: #B2CEBD;">`{ "bedrooms": 2, "square_meters": 85, "subcity": "Maraki", "furnishing": "semi" }`</span>
- <strong style="color: #E26D5C; font-weight: 600;">Response:</strong> <span style="color: #B2CEBD;">`{ "predicted_monthly_birr": 12500, "confidence_range": [11800, 13200], "model_version": "v1.2.0" }`</span>

### B. MedLens Emergency Token Lookup
- <strong style="color: #E26D5C; font-weight: 600;">Endpoint:</strong> <span style="color: #B2CEBD;">`GET /api/v1/emergency/token/{token_hash}`</span>
- <strong style="color: #E26D5C; font-weight: 600;">Security:</strong> <span style="color: #B2CEBD;">Rate limited, one-time read flag, immutable audit log created.</span>
- <strong style="color: #E26D5C; font-weight: 600;">Response:</strong> <span style="color: #B2CEBD;">`{ "blood_group": "O+", "allergies": ["Penicillin"], "emergency_contact": "+251911..." }`</span>

