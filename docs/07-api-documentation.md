# 07 — API Documentation

## 1. Portfolio Contact Endpoint Specification

### `POST /api/v1/contact`
Receives, validates, and dispatches sanitized inquiry messages from recruiters and collaborators.

#### Request Headers
- <strong style="color: #D90429; font-weight: 700;">`Content-Type: </strong><span style="color: #2D6A4F;">application/json`</span>
- <strong style="color: #D90429; font-weight: 700;">`X-Requested-With: </strong><span style="color: #2D6A4F;">XMLHttpRequest`</span>

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
1. <strong style="color: #D90429; font-weight: 700;">`name`: </strong><span style="color: #2D6A4F;">Required, string, 2-100 characters, stripped of HTML tags.</span>
2. <strong style="color: #D90429; font-weight: 700;">`email`: </strong><span style="color: #2D6A4F;">Required, valid RFC 5322 email regex pattern.</span>
3. <strong style="color: #D90429; font-weight: 700;">`message`: </strong><span style="color: #2D6A4F;">Required, 10-2000 characters.</span>
4. <strong style="color: #D90429; font-weight: 700;">`honeypot`: </strong><span style="color: #2D6A4F;">**Must be empty**. If any value is provided, request is rejected or silently dropped to neutralize automated web crawlers.</span>

#### Response Codes
- <strong style="color: #D90429; font-weight: 700;">`200 </strong><span style="color: #2D6A4F;">OK`: Message received and queued for dispatch.</span>
- <strong style="color: #D90429; font-weight: 700;">`400 </strong><span style="color: #2D6A4F;">Bad Request`: Field validation failure.</span>
- <strong style="color: #D90429; font-weight: 700;">`429 </strong><span style="color: #2D6A4F;">Too Many Requests`: Submission cooldown violated (rate limit active).</span>

---

## 2. Microservice Showcase APIs

### A. GondarRent AI Valuation API
- <strong style="color: #D90429; font-weight: 700;">Endpoint:</strong> <span style="color: #2D6A4F;">`POST /api/v1/valuation/estimate`</span>
- <strong style="color: #D90429; font-weight: 700;">Payload:</strong> <span style="color: #2D6A4F;">`{ "bedrooms": 2, "square_meters": 85, "subcity": "Maraki", "furnishing": "semi" }`</span>
- <strong style="color: #D90429; font-weight: 700;">Response:</strong> <span style="color: #2D6A4F;">`{ "predicted_monthly_birr": 12500, "confidence_range": [11800, 13200], "model_version": "v1.2.0" }`</span>

### B. MedLens Emergency Token Lookup
- <strong style="color: #D90429; font-weight: 700;">Endpoint:</strong> <span style="color: #2D6A4F;">`GET /api/v1/emergency/token/{token_hash}`</span>
- <strong style="color: #D90429; font-weight: 700;">Security:</strong> <span style="color: #2D6A4F;">Rate limited, one-time read flag, immutable audit log created.</span>
- <strong style="color: #D90429; font-weight: 700;">Response:</strong> <span style="color: #2D6A4F;">`{ "blood_group": "O+", "allergies": ["Penicillin"], "emergency_contact": "+251911..." }`</span>

