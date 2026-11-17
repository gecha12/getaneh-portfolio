import React from 'react';
import { ShieldCheck, Cpu, Compass } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Engineering Background &amp; Philosophy</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Grounded in core Computer Science principles, dedicated to building secure, resilient full-stack platforms, and integrating intelligent decision-support models.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
          {/* Main Story & Core Pillars */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.45rem', marginBottom: '1.2rem', color: '#ffffff' }}>
              Computer Science Scholar &amp; Systems Builder
            </h3>

            <p style={{ marginBottom: '1.2rem', fontSize: '1rem', lineHeight: '1.75' }}>
              I am a fourth-year Computer Science undergraduate at the <strong style={{ color: 'var(--text-main)' }}>University of Gondar</strong>, College of Informatics. My path in technology is defined by a commitment to rigorous engineering: understanding how code executes at the protocol layer, safeguarding against attack surfaces, and developing intuitive, scalable systems.
            </p>

            <p style={{ marginBottom: '1.2rem', fontSize: '1rem', lineHeight: '1.75' }}>
              Over the course of my university studies and professional internship at <strong style={{ color: 'var(--accent-hot-green)' }}>Atlas Computer Technology PLC</strong>, I have focused on full-cycle product development. I bridge backend asynchronous microservices in <strong style={{ color: 'var(--text-main)' }}>Python (FastAPI)</strong> and <strong style={{ color: 'var(--text-main)' }}>Spring Boot</strong> with reactive, type-safe frontends in <strong style={{ color: 'var(--text-main)' }}>React &amp; TypeScript</strong>.
            </p>

            <p style={{ fontSize: '1rem', lineHeight: '1.75' }}>
              Beyond application logic, I am an active security researcher and practical machine learning developer. I analyze web attack vectors through hands-on penetration testing labs, configure SIEM host monitoring with Wazuh, and train predictive classifiers to solve real problems in housing, education, and healthcare.
            </p>

            {/* Academic Verification Box */}
            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '1rem'
              }}
            >
              <div>
                <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.06em', display: 'block' }}>Department</span>
                <strong style={{ fontSize: '0.92rem', color: 'var(--text-main)' }}>Computer Science</strong>
              </div>
              <div>
                <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.06em', display: 'block' }}>University</span>
                <strong style={{ fontSize: '0.92rem', color: 'var(--text-main)' }}>Univ. of Gondar</strong>
              </div>
              <div>
                <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.06em', display: 'block' }}>Student ID</span>
                <strong style={{ fontSize: '0.92rem', color: 'var(--accent-hot-green)', fontFamily: 'var(--font-mono)' }}>UoG-CS-02130/15</strong>
              </div>
              <div>
                <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.06em', display: 'block' }}>Status</span>
                <strong style={{ fontSize: '0.92rem', color: 'var(--accent-emerald)' }}>4th Year (Section 2)</strong>
              </div>
            </div>
          </div>

          {/* Core Philosophy Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.6rem', display: 'flex', gap: '1.2rem' }}>
              <div style={{ padding: '0.8rem', background: 'rgba(85, 214, 138, 0.12)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-hot-green)', height: 'fit-content' }}>
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.4rem' }}>Security-First Mindset</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Security is not an afterthought. I integrate OWASP principles, strict input validation, least-privilege RBAC, and encrypted transmission across every architecture I build.
                </p>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.6rem', display: 'flex', gap: '1.2rem' }}>
              <div style={{ padding: '0.8rem', background: 'rgba(85, 214, 138, 0.16)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-emerald)', height: 'fit-content' }}>
                <Cpu size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.4rem' }}>Applied Intelligence</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Leveraging statistical learning and ML pipelines to extract practical utility — from predictive price estimators to healthcare record summaries and student intervention alerts.
                </p>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.6rem', display: 'flex', gap: '1.2rem' }}>
              <div style={{ padding: '0.8rem', background: 'rgba(85, 214, 138, 0.12)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-hot-green)', height: 'fit-content' }}>
                <Compass size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.4rem' }}>Continuous Engineering Growth</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Driven by genuine curiosity. Constantly exploring emerging cloud ecosystems, containerization strategies, and advanced vulnerability assessment methodologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
