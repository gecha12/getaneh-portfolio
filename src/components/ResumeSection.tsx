import React from 'react';
import { Download, X } from 'lucide-react';

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
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '850px' }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close resume preview">
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
          <div>
            <h2 id="resume-title" style={{ fontSize: '1.5rem', color: '#ffffff' }}>Curriculum Vitae Preview</h2>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
              Getaneh Dejenie &bull; ATS-Standard Engineering Resume
            </span>
          </div>

          <button onClick={handlePrint} className="btn btn-primary btn-sm">
            <Download size={15} />
            <span>Print / Save as PDF</span>
          </button>
        </div>

        {/* ATS-Optimized Clean Resume Sheet */}
        <div
          style={{
            background: '#ffffff',
            color: '#1a1a1a',
            padding: '2.5rem',
            borderRadius: '6px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            lineHeight: '1.5',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}
        >
          {/* Header */}
          <div style={{ borderBottom: '2px solid #087F50', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
            <h1 style={{ fontSize: '2rem', color: '#090E0D', margin: 0, fontWeight: 800 }}>GETANEH DEJENIE</h1>
            <div style={{ fontSize: '1.1rem', color: '#087F50', fontWeight: 600, marginTop: '0.2rem' }}>
              Full-Stack Developer | Cybersecurity Engineer | AI &amp; Machine Learning
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: '#555', marginTop: '0.5rem' }}>
              <span>Gondar, Ethiopia</span>
              <span>&bull;</span>
              <span>University of Gondar (UoG-CS-02130/15)</span>
              <span>&bull;</span>
              <span>github.com/gecha12</span>
              <span>&bull;</span>
              <span>t.me/deju12_21</span>
            </div>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '1.4rem' }}>
            <h3 style={{ fontSize: '1.05rem', color: '#087F50', borderBottom: '1px solid #ddd', paddingBottom: '0.2rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Education
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.95rem', color: '#090E0D' }}>
              <span>University of Gondar, College of Informatics</span>
              <span>2022 — Expected 2026</span>
            </div>
            <div style={{ fontSize: '0.9rem', color: '#444', fontStyle: 'italic', marginBottom: '0.3rem' }}>
              Bachelor of Science in Computer Science (4th Year, Section 2, ID: UoG-CS-02130/15)
            </div>
            <p style={{ fontSize: '0.85rem', color: '#555', margin: 0 }}>
              Key Coursework: Data Structures &amp; Algorithms, Computer Networks, Operating Systems, Database Systems, Software Engineering, Artificial Intelligence.
            </p>
          </div>

          {/* Professional Experience */}
          <div style={{ marginBottom: '1.4rem' }}>
            <h3 style={{ fontSize: '1.05rem', color: '#087F50', borderBottom: '1px solid #ddd', paddingBottom: '0.2rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Engineering Experience
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.95rem', color: '#090E0D' }}>
              <span>Atlas Computer Technology PLC — Software Engineering Intern</span>
              <span>July 2026 — Sept 2026</span>
            </div>
            <div style={{ fontSize: '0.9rem', color: '#444', fontStyle: 'italic', marginBottom: '0.4rem' }}>
              Project: InternBridge (Full-Stack Institutional Apprenticeship Platform)
            </div>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: '#444', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <li>Engineered backend business logic and database persistence using Spring Boot and PostgreSQL.</li>
              <li>Implemented role-based access control (RBAC) securely separating students, enterprise mentors, and university coordinators.</li>
              <li>Collaborated within an Agile sprint cycle, participating in daily stand-ups and Git peer code reviews.</li>
            </ul>
          </div>

          {/* Technical Projects */}
          <div style={{ marginBottom: '1.4rem' }}>
            <h3 style={{ fontSize: '1.05rem', color: '#087F50', borderBottom: '1px solid #ddd', paddingBottom: '0.2rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Selected Projects
            </h3>
            
            <div style={{ marginBottom: '0.8rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.92rem', color: '#090E0D' }}>
                <span>GondarRent AI — Property Rental &amp; Valuation Platform</span>
                <span style={{ fontSize: '0.82rem', fontWeight: 500, color: '#666' }}>React, TypeScript, FastAPI, PostgreSQL, Docker</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.84rem', color: '#444' }}>
                Architected full-stack rental discovery platform with automated price estimation models and role-based owner/tenant portals.
              </p>
            </div>

            <div style={{ marginBottom: '0.8rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.92rem', color: '#090E0D' }}>
                <span>MedLens — AI-Assisted Clinical Record System (Final-Year Capstone)</span>
                <span style={{ fontSize: '0.82rem', fontWeight: 500, color: '#666' }}>React, Flutter, Python, FastAPI, PostgreSQL</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.84rem', color: '#444' }}>
                Designed secure QR-assisted emergency medical lookup token, HIPAA-style access audit logging, and AI consultation note summarization.
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.92rem', color: '#090E0D' }}>
                <span>EduTrack — ML Student Academic Trajectory Predictor</span>
                <span style={{ fontSize: '0.82rem', fontWeight: 500, color: '#666' }}>Python, Scikit-Learn, FastAPI, React</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.84rem', color: '#444' }}>
                Trained supervised Random Forest classifiers (&gt;87% test accuracy) predicting student academic intervention indicators.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 style={{ fontSize: '1.05rem', color: '#087F50', borderBottom: '1px solid #ddd', paddingBottom: '0.2rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Technical Skills
            </h3>
            <div style={{ fontSize: '0.84rem', color: '#444', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <div><strong>Languages:</strong> Python, TypeScript, JavaScript, Java, C/C++, SQL, HTML5, CSS3</div>
              <div><strong>Frameworks &amp; Libraries:</strong> React, Next.js, FastAPI, Spring Boot, Scikit-Learn, Pandas, TailwindCSS</div>
              <div><strong>Cybersecurity &amp; Tools:</strong> OWASP Top 10, Nmap, Wireshark, Burp Suite, Wazuh SIEM, Linux/Bash, Docker, Git/GitHub</div>
              <div><strong>Databases:</strong> PostgreSQL, MySQL, SQLite</div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'right', marginTop: '1.5rem' }}>
          <button onClick={onClose} className="btn btn-secondary btn-sm">Close Preview</button>
        </div>
      </div>
    </div>
  );
};
