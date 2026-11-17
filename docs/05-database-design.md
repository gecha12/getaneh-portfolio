# 05 — Database Design

## 1. Relational Database Architecture (PostgreSQL)
Across the showcased systems, PostgreSQL serves as the primary persistent data store due to its ACID guarantees, support for relational integrity, and advanced JSONB query capabilities.

---

## 2. Core Entity Relationship Diagrams (ERD)

### A. InternBridge Architecture (Atlas Computer Technology PLC)
- **Users**: `id (UUID)`, `email (Unique)`, `password_hash (bcrypt)`, `role (Enum: STUDENT, MENTOR, COORDINATOR)`
- **Profiles**: `user_id (FK)`, `full_name`, `phone`, `department`, `academic_id`
- **InternshipPositions**: `id`, `company_name`, `title`, `description`, `capacity`
- **Applications**: `id`, `student_id (FK)`, `position_id (FK)`, `status (PENDING, APPROVED, REJECTED)`
- **Evaluations**: `id`, `application_id (FK)`, `mentor_score`, `feedback`, `supervisor_approval`

### B. MedLens (AI Capstone & Emergency Clinical Token)
- **Patients**: `patient_id (UUID)`, `national_id_hash`, `blood_group`, `allergies (JSONB)`, `chronic_conditions`
- **EmergencyTokens**: `token_hash (Unique Index)`, `patient_id (FK)`, `expires_at`, `status (ACTIVE, REVOKED)`
- **ConsultationNotes**: `id`, `patient_id (FK)`, `physician_id (FK)`, `raw_notes (Encrypted Text)`, `ai_summary (Text)`, `created_at`
- **AuditLogs**: `id`, `accessed_by`, `patient_id`, `action`, `ip_address`, `timestamp`

---

## 3. Data Integrity & Security Standards
1. **At-Rest & In-Transit Encryption**: Sensitive medical and personal identity data stored using encrypted fields and queried over TLS-encrypted database sockets.
2. **Normalized Schemas (3NF)**: Redundancy minimized to guarantee update anomalies are eliminated.
3. **Audit Trail Logging**: Immutable timestamped logs for privileged data reads and updates to satisfy governance and security review standards.
