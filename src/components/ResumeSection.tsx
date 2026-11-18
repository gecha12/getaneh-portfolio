import React from 'react';
import { X, ExternalLink, Printer } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeSection: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    // Open dedicated single-page print document in new window for 1-page PDF
    const printWin = window.open('/cv.html', '_blank');
    if (printWin) {
      printWin.focus();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="resume-title">
      <div className="modal-content cv-modal-shell" onClick={e => e.stopPropagation()} style={{ maxWidth: '960px', width: '95%' }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close resume preview">
          <X size={20} />
        </button>

        {/* Modal Header Actions */}
        <div className="cv-modal-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.8rem', flexWrap: 'wrap', gap: '0.8rem' }}>
          <div>
            <h2 id="resume-title" style={{ fontSize: '1.35rem', color: '#ffffff', margin: 0 }}>Curriculum Vitae Preview</h2>
            <span style={{ fontSize: '0.78rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
              Getaneh Dejenie (Melaku) &bull; getaneh-portfolio.vercel.app
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
            <a
              href="/cv.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <ExternalLink size={14} />
              <span>Full A4 Page</span>
            </a>
            <button onClick={handlePrint} className="btn btn-primary btn-sm">
              <Printer size={14} />
              <span>Print 1-Page PDF</span>
            </button>
          </div>
        </div>

        {/* Executive Emerald Two-Column CV Container */}
        <div id="cv-print-area" className="cv-a4-document" style={{
          background: '#ffffff',
          color: '#1a2620',
          borderRadius: '8px',
          boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '270px 1fr',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          lineHeight: 1.45,
          position: 'relative'
        }}>
          {/* LEFT SIDEBAR: Deep Forest Emerald (#102A1E) */}
          <aside style={{
            background: 'linear-gradient(180deg, #102A1E 0%, #0B1C14 100%)',
            color: '#E8F5EE',
            padding: '2rem 1.4rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.4rem',
            borderRight: '1px solid #1E4D37'
          }}>
            {/* Profile Avatar Card */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '110px',
                height: '110px',
                borderRadius: '50%',
                margin: '0 auto 0.8rem auto',
                padding: '2.5px',
                background: 'linear-gradient(135deg, #A8FF3E 0%, #55D68A 50%, #20503B 100%)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.5)'
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
                    (e.target as HTMLImageElement).src = '/assets/profile-placeholder.svg';
                  }}
                />
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: '#A8FF3E',
                letterSpacing: '0.06em',
                textTransform: 'uppercase'
              }}>
                &lt;GD: DEV /&gt;
              </div>
            </div>

            {/* Contact Details with live website URL */}
            <div>
              <h4 style={{
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#55D68A',
                borderBottom: '1px solid rgba(85, 214, 138, 0.25)',
                paddingBottom: '0.35rem',
                marginBottom: '0.7rem',
                fontFamily: 'var(--font-mono)'
              }}>
                Contact
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.78rem', color: '#C8E6D5' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '0.68rem', color: '#7AA88E', textTransform: 'uppercase' }}>Portfolio</span>
                  <a href="https://getaneh-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: '#A8FF3E', textDecoration: 'none', fontWeight: 600 }}>
                    getaneh-portfolio.vercel.app
                  </a>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.68rem', color: '#7AA88E', textTransform: 'uppercase' }}>Email</span>
                  <a href="mailto:getanehmelaku1221@gmail.com" style={{ color: '#ffffff', textDecoration: 'none', wordBreak: 'break-all' }}>
                    getanehmelaku1221@gmail.com
                  </a>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.68rem', color: '#7AA88E', textTransform: 'uppercase' }}>Phone</span>
                  <span style={{ color: '#ffffff' }}>+251 942 782 861</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.68rem', color: '#7AA88E', textTransform: 'uppercase' }}>Location</span>
                  <span style={{ color: '#ffffff' }}>Gondar, Ethiopia</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.68rem', color: '#7AA88E', textTransform: 'uppercase' }}>GitHub</span>
                  <a href="https://github.com/gecha12" target="_blank" rel="noopener noreferrer" style={{ color: '#A8FF3E', textDecoration: 'none' }}>
                    github.com/gecha12
                  </a>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.68rem', color: '#7AA88E', textTransform: 'uppercase' }}>LinkedIn</span>
                  <a href="https://linkedin.com/in/getaneh-dejenie" target="_blank" rel="noopener noreferrer" style={{ color: '#A8FF3E', textDecoration: 'none' }}>
                    linkedin.com/in/getaneh-dejenie
                  </a>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h4 style={{
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#55D68A',
                borderBottom: '1px solid rgba(85, 214, 138, 0.25)',
                paddingBottom: '0.35rem',
                marginBottom: '0.7rem',
                fontFamily: 'var(--font-mono)'
              }}>
                Education
              </h4>
              <div style={{ fontSize: '0.8rem' }}>
                <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.88rem' }}>BSc in Computer Science</strong>
                <span style={{ color: '#55D68A', display: 'block', margin: '0.15rem 0' }}>University of Gondar</span>
                <span style={{ color: '#A3C8B4', fontSize: '0.75rem', display: 'block' }}>College of Informatics &bull; 4th Year</span>
                <span style={{ color: '#7AA88E', fontSize: '0.73rem', display: 'block', marginTop: '0.15rem' }}>ID: UoG-CS-02130/15 &bull; Sec 2</span>
                <span style={{ color: '#A8FF3E', fontSize: '0.73rem', display: 'block', marginTop: '0.15rem' }}>Graduation: 2026/2027</span>
              </div>
            </div>

            {/* Technical Skills Overview */}
            <div>
              <h4 style={{
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#55D68A',
                borderBottom: '1px solid rgba(85, 214, 138, 0.25)',
                paddingBottom: '0.35rem',
                marginBottom: '0.7rem',
                fontFamily: 'var(--font-mono)'
              }}>
                Technical Skills
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.28rem', fontSize: '0.77rem', color: '#D4ECE0' }}>
                <li>&bull; Python, FastAPI, Django</li>
                <li>&bull; React.js, TypeScript, Next.js</li>
                <li>&bull; PostgreSQL, MySQL, SQLite</li>
                <li>&bull; Java, Spring Boot microservices</li>
                <li>&bull; Scikit-Learn, Pandas, ML pipelines</li>
                <li>&bull; Wireshark, Nmap, Burp Suite</li>
                <li>&bull; Wazuh SIEM, Linux/Bash, Docker</li>
                <li>&bull; Git, RESTful APIs, JWT Auth</li>
              </ul>
            </div>

            {/* Languages */}
            <div>
              <h4 style={{
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#55D68A',
                borderBottom: '1px solid rgba(85, 214, 138, 0.25)',
                paddingBottom: '0.35rem',
                marginBottom: '0.5rem',
                fontFamily: 'var(--font-mono)'
              }}>
                Languages
              </h4>
              <div style={{ fontSize: '0.77rem', color: '#C8E6D5' }}>
                <div><strong style={{ color: '#ffffff' }}>Amharic:</strong> Native</div>
                <div style={{ marginTop: '0.15rem' }}><strong style={{ color: '#ffffff' }}>English:</strong> Professional / Technical</div>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT AREA: Pure White Canvas with Emerald Headers */}
          <main style={{ padding: '2rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Header / Title */}
            <div style={{ borderBottom: '2px solid #20503B', paddingBottom: '0.8rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <h1 style={{
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: '#102A1E',
                  margin: 0,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1
                }}>
                  GETANEH <span style={{ color: '#1B6A45' }}>DEJENIE</span> (MELAKU)
                </h1>
                <span style={{ fontSize: '0.74rem', color: '#1E7E52', fontFamily: 'var(--font-mono)', fontWeight: 600, background: '#E8F5EE', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                  https://getaneh-portfolio.vercel.app
                </span>
              </div>
              <div style={{
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#1E7E52',
                marginTop: '0.25rem',
                letterSpacing: '0.03em',
                textTransform: 'uppercase'
              }}>
                Full-Stack Developer | Cybersecurity Engineer | AI &amp; Machine Learning
              </div>
              <p style={{
                fontSize: '0.84rem',
                color: '#3B4D44',
                marginTop: '0.5rem',
                lineHeight: 1.55,
                margin: '0.5rem 0 0 0'
              }}>
                Fourth-year Computer Science undergraduate at the University of Gondar with strong foundations in secure full-stack software architecture, network defense, and applied machine learning. Experienced in building resilient asynchronous services, conducting vulnerability assessments, and training predictive decision models.
              </p>
            </div>

            {/* Selected Projects */}
            <div>
              <h3 style={{
                fontSize: '0.95rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#102A1E',
                borderBottom: '1.5px solid #287A54',
                paddingBottom: '0.25rem',
                marginBottom: '0.75rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}>
                <span>💼</span> Selected Engineering Projects
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {/* Project 1 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <strong style={{ fontSize: '0.9rem', color: '#102A1E' }}>GondarRent AI — Property Valuation &amp; Rental Platform</strong>
                    <span style={{ fontSize: '0.72rem', color: '#1E7E52', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>React &bull; TypeScript &bull; FastAPI &bull; PostgreSQL</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#44554C', margin: '0.15rem 0' }}>
                    Architected full-stack rental discovery platform with automated price estimation models, secure role-based portals for landlords and tenants, and Dockerized deployment.
                  </p>
                </div>

                {/* Project 2 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <strong style={{ fontSize: '0.9rem', color: '#102A1E' }}>MedLens — AI Clinical Record &amp; Emergency Token System</strong>
                    <span style={{ fontSize: '0.72rem', color: '#1E7E52', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>React &bull; Python &bull; FastAPI &bull; PostgreSQL &bull; Flutter</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#44554C', margin: '0.15rem 0' }}>
                    Final-year capstone. Designed secure QR-assisted emergency medical lookup token, HIPAA-style access audit logging, and NLP summarization of consultation records during triage.
                  </p>
                </div>

                {/* Project 3 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <strong style={{ fontSize: '0.9rem', color: '#102A1E' }}>EduTrack — ML Academic Trajectory Predictor</strong>
                    <span style={{ fontSize: '0.72rem', color: '#1E7E52', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>Python &bull; Scikit-Learn &bull; FastAPI &bull; Pandas</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#44554C', margin: '0.15rem 0' }}>
                    Trained supervised Random Forest classifiers (&gt;87% test accuracy) predicting student academic intervention indicators with actionable feature importance charts.
                  </p>
                </div>

                {/* Project 4 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <strong style={{ fontSize: '0.9rem', color: '#102A1E' }}>InternBridge — Institutional Apprenticeship Platform</strong>
                    <span style={{ fontSize: '0.72rem', color: '#1E7E52', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>Spring Boot &bull; PostgreSQL &bull; React &bull; RBAC</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#44554C', margin: '0.15rem 0' }}>
                    Engineered multi-tier role management connecting university interns, corporate mentors, and departmental supervisors during internship at Atlas Computer Technology PLC.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience & Professional Internship */}
            <div>
              <h3 style={{
                fontSize: '0.95rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#102A1E',
                borderBottom: '1.5px solid #287A54',
                paddingBottom: '0.25rem',
                marginBottom: '0.75rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}>
                <span>🏢</span> Professional Experience
              </h3>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <strong style={{ fontSize: '0.9rem', color: '#102A1E' }}>Atlas Computer Technology PLC — Software Engineering Intern</strong>
                  <span style={{ fontSize: '0.76rem', color: '#1E7E52', fontWeight: 600 }}>July 2026 — Sept 2026</span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#556B5F', fontStyle: 'italic', marginBottom: '0.3rem' }}>
                  Full-Stack Architecture &amp; Database Engineering &bull; Addis Ababa, Ethiopia
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.8rem', color: '#3B4D44', display: 'flex', flexDirection: 'column', gap: '0.22rem' }}>
                  <li>Developed core persistence services and data schemas using Spring Boot and PostgreSQL.</li>
                  <li>Implemented role-based authorization tokens (RBAC) separating student access from enterprise evaluators.</li>
                  <li>Engaged in Agile sprint standups, feature estimation, and Git version control workflows.</li>
                </ul>
              </div>
            </div>

            {/* Cybersecurity Practical Labs */}
            <div>
              <h3 style={{
                fontSize: '0.95rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#102A1E',
                borderBottom: '1.5px solid #287A54',
                paddingBottom: '0.25rem',
                marginBottom: '0.75rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}>
                <span>🛡️</span> Cybersecurity &amp; Systems Security Practice
              </h3>

              <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.8rem', color: '#3B4D44', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <li><strong>OWASP Top 10 Auditing:</strong> Hands-on testing of SQL injection, BOLA, and XSS remediation in authorized sandbox labs.</li>
                <li><strong>Traffic &amp; Protocol Inspection:</strong> Deep packet inspection using Wireshark to trace TLS handshakes and plaintext leaks.</li>
                <li><strong>Network Mapping &amp; SIEM:</strong> Service enumeration with Nmap scripts; configured Wazuh HIDS agents for host intrusion alerts.</li>
              </ul>
            </div>
          </main>
        </div>

        {/* Modal Bottom Actions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
          <span style={{ fontSize: '0.76rem', color: 'var(--text-dim)' }}>
            * Verified credentials from University of Gondar &bull; https://getaneh-portfolio.vercel.app
          </span>
          <button onClick={onClose} className="btn btn-secondary btn-sm">Close Preview</button>
        </div>
      </div>
    </div>
  );
};
