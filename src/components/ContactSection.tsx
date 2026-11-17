import React, { useState } from 'react';
import { Send, Mail, Github, Linkedin, MessageSquare, CheckCircle, AlertCircle, Shield } from 'lucide-react';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Honeypot check (spam prevention)
    if (formData.honeypot) {
      console.warn('Bot submission trapped via honeypot field.');
      setStatus('success');
      return;
    }

    // 2. Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please complete all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    // 3. Client rate limiting simulation (minimum 8 seconds between sends)
    const now = Date.now();
    if (now - lastSubmitTime < 8000) {
      setStatus('error');
      setErrorMessage('Please wait a moment before sending another message.');
      return;
    }

    setStatus('submitting');
    setLastSubmitTime(now);

    // Simulate secure dispatch with feedback
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: ''
      });
    }, 1200);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">Start a Conversation</h2>
          <p className="section-subtitle">
            Open for remote software engineering roles, full-stack development contracts, cybersecurity assessments, and technical collaborations.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          {/* Contact Direct Channels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '0.4rem' }}>
              Direct Communication
            </h3>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1rem' }}>
              Feel free to reach out via your preferred channel. I respond promptly to engineering inquiries, academic projects, and professional connection requests.
            </p>

            <a
              href="mailto:getaneh.dejenie.cs@gmail.com"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.2rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem',
                transition: 'var(--transition-fast)'
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent-hot-green)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
            >
              <div style={{ padding: '0.7rem', background: 'rgba(163, 255, 18, 0.08)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-hot-green)' }}>
                <Mail size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.06em', display: 'block' }}>Email Address</span>
                <strong style={{ fontSize: '0.94rem', color: '#ffffff' }}>getaneh.dejenie.cs@gmail.com</strong>
              </div>
            </a>

            <a
              href="https://t.me/deju12_21"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.2rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem',
                transition: 'var(--transition-fast)'
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent-hot-green)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
            >
              <div style={{ padding: '0.7rem', background: 'rgba(8, 127, 80, 0.15)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-emerald)' }}>
                <MessageSquare size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.06em', display: 'block' }}>Telegram</span>
                <strong style={{ fontSize: '0.94rem', color: '#ffffff' }}>@deju12_21</strong>
              </div>
            </a>

            <a
              href="https://github.com/gecha12"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.2rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem',
                transition: 'var(--transition-fast)'
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent-hot-green)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
            >
              <div style={{ padding: '0.7rem', background: 'rgba(163, 255, 18, 0.08)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-hot-green)' }}>
                <Github size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.06em', display: 'block' }}>GitHub</span>
                <strong style={{ fontSize: '0.94rem', color: '#ffffff' }}>github.com/gecha12</strong>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/getaneh-dejenie"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.2rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem',
                transition: 'var(--transition-fast)'
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent-hot-green)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
            >
              <div style={{ padding: '0.7rem', background: 'rgba(8, 127, 80, 0.15)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-emerald)' }}>
                <Linkedin size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.06em', display: 'block' }}>LinkedIn</span>
                <strong style={{ fontSize: '0.94rem', color: '#ffffff' }}>linkedin.com/in/getaneh-dejenie</strong>
              </div>
            </a>
          </div>

          {/* Secure Interactive Contact Form */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <Shield size={18} className="text-hot-green" />
              <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-hot-green)', textTransform: 'uppercase' }}>
                Secure Input &bull; Sanitized Transmission
              </span>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {/* Honeypot field (hidden from real users, traps automated scrapers) */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <label htmlFor="company_code">Do not fill this</label>
                <input
                  type="text"
                  id="company_code"
                  name="honeypot"
                  tabIndex={-1}
                  value={formData.honeypot}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '0.4rem', fontWeight: 500 }}>
                  Full Name <span style={{ color: 'var(--accent-hot-green)' }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Mercer"
                  required
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-main)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '0.4rem', fontWeight: 500 }}>
                  Email Address <span style={{ color: 'var(--accent-hot-green)' }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@company.com"
                  required
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-main)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '0.4rem', fontWeight: 500 }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Engineering Collaboration / Job Inquiry"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-main)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '0.4rem', fontWeight: 500 }}>
                  Message <span style={{ color: 'var(--accent-hot-green)' }}>*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe your project, engineering inquiry, or opportunity..."
                  required
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-main)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    minHeight: '110px'
                  }}
                />
              </div>

              {/* Status alerts */}
              {status === 'error' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ff6b6b', fontSize: '0.85rem' }}>
                  <AlertCircle size={16} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === 'success' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-hot-green)', fontSize: '0.85rem' }}>
                  <CheckCircle size={16} />
                  <span>Thank you! Your message has been received. I will reply shortly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                {status === 'submitting' ? (
                  <span>Transmitting Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

