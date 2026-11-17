import React, { useState } from 'react';
import { Shield, ShieldAlert, Terminal, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import { securityLabsData } from '../data/securityLabs';
import { SecurityLab } from '../types';

export const Cybersecurity: React.FC = () => {
  const [expandedLabId, setExpandedLabId] = useState<string | null>(securityLabsData[0].id);

  const toggleLab = (id: string) => {
    setExpandedLabId(expandedLabId === id ? null : id);
  };

  return (
    <section id="cybersecurity">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Security Engineering &amp; Research</span>
          <h2 className="section-title">Cybersecurity &amp; Defensive Systems</h2>
          <p className="section-subtitle">
            Hands-on vulnerability analysis, traffic inspection, network enumeration, and SIEM monitoring conducted across strictly authorized laboratory sandboxes.
          </p>
        </div>

        {/* Security Discipline Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.2rem',
            marginBottom: '3.5rem'
          }}
        >
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '1.4rem' }}>
            <div style={{ color: 'var(--accent-hot-green)', marginBottom: '0.6rem' }}><Shield size={22} /></div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '0.3rem' }}>OWASP Top 10 Auditing</h4>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              Identification and remediation of injection, broken access control (BOLA), and XSS vectors.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '1.4rem' }}>
            <div style={{ color: 'var(--accent-emerald)', marginBottom: '0.6rem' }}><Eye size={22} /></div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '0.3rem' }}>Packet &amp; Traffic Inspection</h4>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              Deep packet analysis with Wireshark to inspect TCP streams, detect plaintext leaks, and trace anomalous DNS queries.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '1.4rem' }}>
            <div style={{ color: 'var(--accent-hot-green)', marginBottom: '0.6rem' }}><Terminal size={22} /></div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '0.3rem' }}>Network Reconnaissance</h4>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              Service banner enumeration, version fingerprinting, and attack surface mapping utilizing Nmap scripts.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '1.4rem' }}>
            <div style={{ color: 'var(--accent-emerald)', marginBottom: '0.6rem' }}><ShieldAlert size={22} /></div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '0.3rem' }}>SIEM &amp; Threat Detection</h4>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              Host intrusion detection, file integrity monitoring, and brute-force alert triage using Wazuh HIDS.
            </p>
          </div>
        </div>

        {/* Structured Laboratory Reports */}
        <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '1.5rem', textAlign: 'center' }}>
          Authorized Laboratory Case Studies
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {securityLabsData.map((lab: SecurityLab) => {
            const isExpanded = expandedLabId === lab.id;

            return (
              <div
                key={lab.id}
                style={{
                  background: 'var(--bg-card)',
                  border: isExpanded ? '1px solid var(--border-medium)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  transition: 'border-color var(--transition-fast)'
                }}
              >
                {/* Lab Card Header */}
                <div
                  onClick={() => toggleLab(lab.id)}
                  style={{
                    padding: '1.6rem 2rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    background: isExpanded ? 'rgba(21, 43, 30, 0.6)' : 'transparent'
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span className="security-category">{lab.category}</span>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--accent-hot-green)',
                          background: 'rgba(163, 255, 18, 0.08)',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '4px'
                        }}
                      >
                        {lab.verificationStatus}
                      </span>
                    </div>
                    <h4 style={{ fontSize: '1.2rem', color: '#ffffff' }}>{lab.title}</h4>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div className="security-tools-box" style={{ margin: 0, display: 'none', md: 'flex' } as any}>
                      {lab.tools.map(tool => (
                        <span key={tool} className="security-tool-badge">{tool}</span>
                      ))}
                    </div>
                    <button
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--accent-hot-green)',
                        cursor: 'pointer',
                        padding: '0.4rem'
                      }}
                      aria-label="Toggle lab details"
                    >
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div style={{ padding: '0 2rem 2rem 2rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                      {/* Objective */}
                      <div>
                        <strong style={{ fontSize: '0.85rem', color: 'var(--accent-hot-green)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '0.3rem' }}>
                          OBJECTIVE
                        </strong>
                        <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: '1.6' }}>
                          {lab.objective}
                        </p>
                      </div>

                      {/* Methodology */}
                      <div>
                        <strong style={{ fontSize: '0.85rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '0.4rem' }}>
                          METHODOLOGY &amp; EXECUTION STEPS
                        </strong>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                          {lab.methodology.map((step, idx) => (
                            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                              <span style={{ color: 'var(--accent-hot-green)', fontFamily: 'var(--font-mono)' }}>0{idx + 1}.</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Findings */}
                      <div style={{ background: 'rgba(13, 26, 18, 0.75)', padding: '1.2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                        <strong style={{ fontSize: '0.85rem', color: '#ff7b72', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '0.4rem' }}>
                          FINDINGS &amp; VULNERABILITY ANALYSIS
                        </strong>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                          {lab.findings.map((finding, idx) => (
                            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                              <span style={{ color: '#ff7b72' }}>&bull;</span>
                              <span>{finding}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Takeaways */}
                      <div>
                        <strong style={{ fontSize: '0.85rem', color: 'var(--accent-hot-green)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '0.3rem' }}>
                          ENGINEERING LESSONS &amp; REMEDIATION
                        </strong>
                        <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.65' }}>
                          {lab.keyTakeaways}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
