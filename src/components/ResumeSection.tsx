import React from 'react';
import { X, ExternalLink, Printer } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeSection: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="resume-title">
      <div className="modal-content cv-modal-shell" onClick={e => e.stopPropagation()} style={{ maxWidth: '980px', width: '95%' }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close resume preview">
          <X size={20} />
        </button>

        {/* Modal Header Actions */}
        <div className="cv-modal-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 id="resume-title" style={{ fontSize: '1.45rem', color: '#ffffff' }}>Curriculum Vitae</h2>
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
              Getaneh Dejenie (Melaku) &bull; Software Engineer &bull; Verified CV
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
            <a
              href="/cv.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <ExternalLink size={15} />
              <span>Open Full A4 Page</span>
            </a>
            <button onClick={handlePrint} className="btn btn-primary btn-sm">
              <Printer size={15} />
              <span>Print / Save as PDF</span>
            </button>
          </div>
        </div>

        {/* Executive Emerald Two-Column CV Container */}
        <div className="cv-a4-document" style={{
          background: '#ffffff',
          color: '#1a2620',
          borderRadius: '8px',
          boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '290px 1fr',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          lineHeight: 1.5,
          position: 'relative'
        }}>
          {/* LEFT SIDEBAR: Deep Forest Emerald (#102A1E) */}
          <aside style={{
            background: 'linear-gradient(180deg, #102A1E 0%, #0B1C14 100%)',
            color: '#E8F5EE',
            padding: '2.4rem 1.6rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.8rem',
            borderRight: '1px solid #1E4D37'
          }}>
            {/* Profile Avatar Card */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '128px',
                height: '128px',
                borderRadius: '50%',
                margin: '0 auto 1.2rem auto',
                padding: '3px',
                background: 'linear-gradient(135deg, #A8FF3E 0%, #55D68A 50%, #20503B 100%)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.5)'
              }}>
                <img
                  src="/assets/profile-avatar.jpg"
                  alt="Getaneh Dejenie (Melaku)"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={(e) => {
                    // Fallback to placeholder if avatar not found
                    (e.target as HTMLImageElement).src = '/assets/profile-placeholder.svg';
                  }}
                />
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: '#A8FF3E',
                letterSpacing: '0.06em',
                textTransform: 'uppercase'
              }}>
                &lt;GD: DEV /&gt;
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h4 style={{
                fontSize: '0.85rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#55D68A',
                borderBottom: '1px solid rgba(85, 214, 138, 0.25)',
                paddingBottom: '0.4rem',
                marginBottom: '0.9rem',
                fontFamily: 'var(--font-mono)'
              }}>
                Contact
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.82rem', color: '#C8E6D5' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '0.7rem', color: '#7AA88E', textTransform: 'uppercase' }}>Email</span>
                  <a href="mailto:getanehmelaku1221@gmail.com" style={{ color: '#ffffff', textDecoration: 'none', wordBreak: 'break-all' }}>
                    getanehmelaku1221@gmail.com
                  </a>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.7rem', color: '#7AA88E', textTransform: 'uppercase' }}>Phone</span>
                  <span style={{ color: '#ffffff' }}>+251 942 782 861</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.7rem', color: '#7AA88E', textTransform: 'uppercase' }}>Location</span>
                  <span style={{ color: '#ffffff' }}>Gondar, Ethiopia</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.7rem', color: '#7AA88E', textTransform: 'uppercase' }}>GitHub</span>
                  <a href="https://github.com/gecha12" target="_blank" rel="noopener noreferrer" style={{ color: '#A8FF3E' }}>
                    github.com/gecha12
                  </a>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.7rem', color: '#7AA88E', textTransform: 'uppercase' }}>LinkedIn</span>
                  <a href="https://linkedin.com/in/getaneh-dejenie" target="_blank" rel="noopener noreferrer" style={{ color: '#A8FF3E' }}>
                    linkedin.com/in/getaneh-dejenie
                  </a>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h4 style={{
                fontSize: '0.85rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#55D68A',
                borderBottom: '1px solid rgba(85, 214, 138, 0.25)',
                paddingBottom: '0.4rem',
                marginBottom: '0.9rem',
                fontFamily: 'var(--font-mono)'
              }}>
                Education
              </h4>
              <div style={{ fontSize: '0.84rem' }}>
                <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.92rem' }}>BSc in Computer Science</strong>
                <span style={{ color: '#55D68A', display: 'block', margin: '0.2rem 0' }}>University of Gondar</span>
                <span style={{ color: '#A3C8B4', fontSize: '0.78rem', display: 'block' }}>College of Informatics &bull; 4th Year</span>
                <span style={{ color: '#7AA88E', fontSize: '0.76rem', display: 'block', marginTop: '0.2rem' }}>ID: UoG-CS-02130/15 &bull; Sec 2</span>
                <span style={{ color: '#A8FF3E', fontSize: '0.76rem', display: 'block', marginTop: '0.2rem' }}>Expected Graduation: 2026/2027</span>
              </div>
            </div>

            {/* Technical Skills Overview */}
            <div>
              <h4 style={{
                fontSize: '0.85rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#55D68A',
                borderBottom: '1px solid rgba(85, 214, 138, 0.25)',
                paddingBottom: '0.4rem',
                marginBottom: '0.9rem',
                fontFamily: 'var(--font-mono)'
              }}>
                Technical Skills
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.8rem', color: '#D4ECE0' }}>
                <li>&bull; Python, FastAPI, Django</li>
                <li>&bull; React.js, TypeScript, Next.js</li>
                <li>&bull; PostgreSQL, MySQL, SQLite</li>
                <li>&bull; Java, Spring Boot microservices</li>
                <li>&bull; Scikit-Learn, Pandas, ML pipelines</li>
                <li>&bull; Wireshark, Nmap, Burp Suite</li>
                <li>&bull; Wazuh SIEM, Linux/Bash, Docker</li>
                <li>&bull; Git, GitHub, RESTful APIs, JWT</li>
              </ul>
            </div>

            {/* Languages */}
            <div>
              <h4 style={{
                fontSize: '0.85rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#55D68A',
                borderBottom: '1px solid rgba(85, 214, 138, 0.25)',
                paddingBottom: '0.4rem',
                marginBottom: '0.7rem',
                fontFamily: 'var(--font-mono)'
              }}>
                Languages
              </h4>
              <div style={{ fontSize: '0.8rem', color: '#C8E6D5' }}>
                <div><strong style={{ color: '#ffffff' }}>Amharic:</strong> Native proficiency</div>
                <div style={{ marginTop: '0.2rem' }}><strong style={{ color: '#ffffff' }}>English:</strong> Professional working / technical</div>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT AREA: Pure White Canvas with Emerald Headers */}
          <main style={{ padding: '2.6rem 2.4rem', display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
            {/* Header / Title */}
            <div style={{ borderBottom: '2px solid #20503B', paddingBottom: '1.2rem' }}>
              <h1 style={{
                fontSize: '2.4rem',
                fontWeight: 900,
                color: '#102A1E',
                margin: 0,
                letterSpacing: '-0.02em',
                lineHeight: 1.1
              }}>
                GETANEH <span style={{ color: '#1B6A45' }}>DEJENIE</span> (MELAKU)
              </h1>
              <div style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#1E7E52',
                marginTop: '0.4rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase'
              }}>
                Full-Stack Developer | Cybersecurity Engineer | AI &amp; Machine Learning
              </div>
              <p style={{
                fontSize: '0.92rem',
                color: '#3B4D44',
                marginTop: '0.8rem',
                lineHeight: 1.65
              }}>
                Motivated and detail-oriented Computer Science developer at the University of Gondar with rigorous foundations in full-stack architecture, secure software engineering, and applied machine learning. Passionate about building resilient platforms, conducting vulnerability analysis, and deploying practical intelligent systems for real-world impact.
              </p>
            </div>

            {/* Selected Projects */}
            <div>
              <h3 style={{
                fontSize: '1.05rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#102A1E',
                borderBottom: '1.5px solid #287A54',
                paddingBottom: '0.35rem',
                marginBottom: '1rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span>💼</span> Selected Engineering Projects
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Project 1 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <strong style={{ fontSize: '0.98rem', color: '#102A1E' }}>GondarRent AI — Property Valuation &amp; Rental Platform</strong>
                    <span style={{ fontSize: '0.78rem', color: '#1E7E52', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>React &bull; TypeScript &bull; FastAPI &bull; PostgreSQL</span>
                  </div>
                  <p style={{ fontSize: '0.86rem', color: '#44554C', margin: '0.25rem 0' }}>
                    Architected full-stack rental discovery platform with automated price estimation models, secure role-based portals for landlords and tenants, and Dockerized deployment.
                  </p>
                </div>

                {/* Project 2 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <strong style={{ fontSize: '0.98rem', color: '#102A1E' }}>MedLens — AI Clinical Record &amp; Emergency Token System</strong>
                    <span style={{ fontSize: '0.78rem', color: '#1E7E52', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>React &bull; Python &bull; FastAPI &bull; PostgreSQL &bull; Flutter</span>
                  </div>
                  <p style={{ fontSize: '0.86rem', color: '#44554C', margin: '0.25rem 0' }}>
                    Final-year capstone project. Designed secure QR-assisted emergency medical lookup token, HIPAA-style access audit logging, and NLP summarization of consultation records during triage.
                  </p>
                </div>

                {/* Project 3 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <strong style={{ fontSize: '0.98rem', color: '#102A1E' }}>EduTrack — ML Academic Trajectory Predictor</strong>
                    <span style={{ fontSize: '0.78rem', color: '#1E7E52', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>Python &bull; Scikit-Learn &bull; FastAPI &bull; Pandas</span>
                  </div>
                  <p style={{ fontSize: '0.86rem', color: '#44554C', margin: '0.25rem 0' }}>
                    Trained supervised Random Forest classifiers (&gt;87% test accuracy) predicting student academic intervention indicators with actionable feature importance charts.
                  </p>
                </div>

                {/* Project 4 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <strong style={{ fontSize: '0.98rem', color: '#102A1E' }}>InternBridge — Institutional Apprenticeship Platform</strong>
                    <span style={{ fontSize: '0.78rem', color: '#1E7E52', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>Spring Boot &bull; PostgreSQL &bull; React &bull; RBAC</span>
                  </div>
                  <p style={{ fontSize: '0.86rem', color: '#44554C', margin: '0.25rem 0' }}>
                    Built during internship at Atlas Computer Technology PLC. Engineered multi-tier role management connecting university interns, corporate mentors, and departmental supervisors.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience & Professional Internship */}
            <div>
              <h3 style={{
                fontSize: '1.05rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#102A1E',
                borderBottom: '1.5px solid #287A54',
                paddingBottom: '0.35rem',
                marginBottom: '1rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span>🏢</span> Professional Experience
              </h3>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <strong style={{ fontSize: '0.98rem', color: '#102A1E' }}>Atlas Computer Technology PLC — Software Engineering Intern</strong>
                  <span style={{ fontSize: '0.8rem', color: '#1E7E52', fontWeight: 600 }}>July 2026 — Sept 2026</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#556B5F', fontStyle: 'italic', marginBottom: '0.4rem' }}>
                  Full-Stack Architecture &amp; Database Engineering &bull; Addis Ababa, Ethiopia
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: '#3B4D44', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <li>Developed core persistence services and data schemas using Spring Boot and PostgreSQL.</li>
                  <li>Implemented role-based authorization tokens (RBAC) separating student access from enterprise evaluators.</li>
                  <li>Engaged in Agile sprint standups, feature estimation, and Git version control workflows.</li>
                </ul>
              </div>
            </div>

            {/* Cybersecurity Practical Labs */}
            <div>
              <h3 style={{
                fontSize: '1.05rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#102A1E',
                borderBottom: '1.5px solid #287A54',
                paddingBottom: '0.35rem',
                marginBottom: '1rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span>🛡️</span> Cybersecurity &amp; Systems Security Practice
              </h3>

              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: '#3B4D44', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li><strong>OWASP Top 10 Auditing:</strong> Hands-on testing of SQL injection, Broken Object Level Authorization (BOLA), and Cross-Site Scripting (XSS) remediation in isolated sandbox environments.</li>
                <li><strong>Traffic &amp; Protocol Inspection:</strong> Deep packet inspection using Wireshark to trace TLS handshakes, identify plaintext transmission vulnerabilities, and analyze DNS queries.</li>
                <li><strong>Network Mapping &amp; SIEM:</strong> Service enumeration and port fingerprinting with Nmap scripts; configured Wazuh HIDS agents for host intrusion detection and file integrity alerts.</li>
              </ul>
            </div>
          </main>
        </div>

        {/* Modal Bottom Actions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.4rem' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
            * Verified information from University of Gondar &amp; Atlas Computer Technology PLC.
          </span>
          <button onClick={onClose} className="btn btn-secondary btn-sm">Close Preview</button>
        </div>
      </div>
    </div>
  );
};
