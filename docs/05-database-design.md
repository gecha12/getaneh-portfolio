# 05 — Database Design

## 1. Relational Database Architecture (PostgreSQL)
**Across the **showcased systems, PostgreSQL serves as the primary persistent data store due to its ACID guarantees, support for relational integrity, and advanced JSONB query capabilities.

---

## 2. Core Entity Relationship Diagrams (ERD)

### A. InternBridge Architecture (Atlas Computer Technology PLC)
- <strong style="color: #E26D5C; font-weight: 600;">Users:</strong> <span style="color: #B2CEBD;">`id (UUID)`, `email (Unique)`, `password_hash (bcrypt)`, `role (Enum: STUDENT, MENTOR, COORDINATOR)`</span>
- <strong style="color: #E26D5C; font-weight: 600;">Profiles:</strong> <span style="color: #B2CEBD;">`user_id (FK)`, `full_name`, `phone`, `department`, `academic_id`</span>
- <strong style="color: #E26D5C; font-weight: 600;">InternshipPositions:</strong> <span style="color: #B2CEBD;">`id`, `company_name`, `title`, `description`, `capacity`</span>
- <strong style="color: #E26D5C; font-weight: 600;">Applications:</strong> <span style="color: #B2CEBD;">`id`, `student_id (FK)`, `position_id (FK)`, `status (PENDING, APPROVED, REJECTED)`</span>
- <strong style="color: #E26D5C; font-weight: 600;">Evaluations:</strong> <span style="color: #B2CEBD;">`id`, `application_id (FK)`, `mentor_score`, `feedback`, `supervisor_approval`</span>

### B. MedLens (AI Capstone & Emergency Clinical Token)
- <strong style="color: #E26D5C; font-weight: 600;">Patients:</strong> <span style="color: #B2CEBD;">`patient_id (UUID)`, `national_id_hash`, `blood_group`, `allergies (JSONB)`, `chronic_conditions`</span>
- <strong style="color: #E26D5C; font-weight: 600;">EmergencyTokens:</strong> <span style="color: #B2CEBD;">`token_hash (Unique Index)`, `patient_id (FK)`, `expires_at`, `status (ACTIVE, REVOKED)`</span>
- <strong style="color: #E26D5C; font-weight: 600;">ConsultationNotes:</strong> <span style="color: #B2CEBD;">`id`, `patient_id (FK)`, `physician_id (FK)`, `raw_notes (Encrypted Text)`, `ai_summary (Text)`, `created_at`</span>
- <strong style="color: #E26D5C; font-weight: 600;">AuditLogs:</strong> <span style="color: #B2CEBD;">`id`, `accessed_by`, `patient_id`, `action`, `ip_address`, `timestamp`</span>

---

## 3. Data Integrity & Security Standards
1. **At-Rest & In-Transit Encryption:** Sensitive medical and personal identity data stored using encrypted fields and queried over TLS-encrypted database sockets.
2. **Normalized Schemas (3NF):** Redundancy minimized to guarantee update anomalies are eliminated.
3. **Audit Trail Logging:** Immutable timestamped logs for privileged data reads and updates to satisfy governance and security review standards.

