# 05 — Database Design

## 1. Relational Database Architecture (PostgreSQL)
<strong style="color: #D90429; font-weight: 700;">Across the </strong><span style="color: #2D6A4F;">showcased systems, PostgreSQL serves as the primary persistent data store due to its ACID guarantees, support for relational integrity, and advanced JSONB query capabilities.</span>

---

## 2. Core Entity Relationship Diagrams (ERD)

### A. InternBridge Architecture (Atlas Computer Technology PLC)
- <strong style="color: #D90429; font-weight: 700;">Users:</strong> <span style="color: #2D6A4F;">`id (UUID)`, `email (Unique)`, `password_hash (bcrypt)`, `role (Enum: STUDENT, MENTOR, COORDINATOR)`</span>
- <strong style="color: #D90429; font-weight: 700;">Profiles:</strong> <span style="color: #2D6A4F;">`user_id (FK)`, `full_name`, `phone`, `department`, `academic_id`</span>
- <strong style="color: #D90429; font-weight: 700;">InternshipPositions:</strong> <span style="color: #2D6A4F;">`id`, `company_name`, `title`, `description`, `capacity`</span>
- <strong style="color: #D90429; font-weight: 700;">Applications:</strong> <span style="color: #2D6A4F;">`id`, `student_id (FK)`, `position_id (FK)`, `status (PENDING, APPROVED, REJECTED)`</span>
- <strong style="color: #D90429; font-weight: 700;">Evaluations:</strong> <span style="color: #2D6A4F;">`id`, `application_id (FK)`, `mentor_score`, `feedback`, `supervisor_approval`</span>

### B. MedLens (AI Capstone & Emergency Clinical Token)
- <strong style="color: #D90429; font-weight: 700;">Patients:</strong> <span style="color: #2D6A4F;">`patient_id (UUID)`, `national_id_hash`, `blood_group`, `allergies (JSONB)`, `chronic_conditions`</span>
- <strong style="color: #D90429; font-weight: 700;">EmergencyTokens:</strong> <span style="color: #2D6A4F;">`token_hash (Unique Index)`, `patient_id (FK)`, `expires_at`, `status (ACTIVE, REVOKED)`</span>
- <strong style="color: #D90429; font-weight: 700;">ConsultationNotes:</strong> <span style="color: #2D6A4F;">`id`, `patient_id (FK)`, `physician_id (FK)`, `raw_notes (Encrypted Text)`, `ai_summary (Text)`, `created_at`</span>
- <strong style="color: #D90429; font-weight: 700;">AuditLogs:</strong> <span style="color: #2D6A4F;">`id`, `accessed_by`, `patient_id`, `action`, `ip_address`, `timestamp`</span>

---

## 3. Data Integrity & Security Standards
1. <strong style="color: #D90429; font-weight: 700;">At-Rest & In-Transit Encryption:</strong> <span style="color: #2D6A4F;">Sensitive medical and personal identity data stored using encrypted fields and queried over TLS-encrypted database sockets.</span>
2. <strong style="color: #D90429; font-weight: 700;">Normalized Schemas (3NF):</strong> <span style="color: #2D6A4F;">Redundancy minimized to guarantee update anomalies are eliminated.</span>
3. <strong style="color: #D90429; font-weight: 700;">Audit Trail Logging:</strong> <span style="color: #2D6A4F;">Immutable timestamped logs for privileged data reads and updates to satisfy governance and security review standards.</span>

