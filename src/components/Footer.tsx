import React from 'react';
import { Terminal, Github, Linkedin, Send, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ borderTop: '1px solid var(--border-subtle)', padding: '3.5rem 0 2rem 0' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.8rem' }}>
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
            <Terminal size={22} className="text-hot-green" />
            <span>
              <span className="brand-bracket">&lt;</span>
              Getaneh Dejenie
              <span className="brand-bracket"> /&gt;</span>
            </span>
          </div>

          <p style={{ maxWidth: '580px', fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            Building intelligent, secure, and scalable software solutions. Fourth-year Computer Science undergraduate at University of Gondar, Ethiopia.
          </p>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '1.2rem' }}>
            <a
              href="https://github.com/gecha12"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
              style={{ borderRadius: '50%', width: '40px', height: '40px', padding: 0 }}
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/getaneh-dejenie"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
              style={{ borderRadius: '50%', width: '40px', height: '40px', padding: 0 }}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://t.me/deju12_21"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
              style={{ borderRadius: '50%', width: '40px', height: '40px', padding: 0 }}
              aria-label="Telegram Profile"
            >
              <Send size={18} />
            </a>
            <a
              href="mailto:getaneh.dejenie.cs@gmail.com"
              className="btn btn-outline btn-sm"
              style={{ borderRadius: '50%', width: '40px', height: '40px', padding: 0 }}
              aria-label="Direct Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright & Academic Attribution */}
          <div style={{ borderTop: '1px solid rgba(85, 214, 138, 0.10)', width: '100%', paddingTop: '1.8rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: 'var(--text-dim)' }}>
            <div>
              &copy; {currentYear} Getaneh Dejenie. All rights reserved.
            </div>
            <div style={{ fontFamily: 'var(--font-mono)' }}>
              Univ. of Gondar &bull; College of Informatics &bull; CS-02130/15
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
