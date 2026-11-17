import React from 'react';
import { ArrowRight, Github, Linkedin, Send, ShieldCheck, MapPin, GraduationCap } from 'lucide-react';
import { OrbitalAvatar } from './OrbitalAvatar';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Information */}
          <div className="hero-content">
            <div className="hero-greeting">
              <span>&gt;</span>
              <span>Hello, world. I'm</span>
            </div>

            <h1 className="hero-name">Getaneh Dejenie</h1>

            <div className="hero-status-pill">
              <span className="pulse-dot" />
              <span>Available for Software Engineering &amp; Security Roles</span>
            </div>

            <h2 className="hero-headline">
              Building <span className="text-hot-green">Intelligent.</span>{' '}
              <span className="text-emerald">Secure.</span> Scalable Software.
            </h2>

            <p className="hero-bio">
              I am a Computer Science developer passionate about building intelligent, secure, and scalable software solutions. I work across full-stack development, artificial intelligence, machine learning, and cybersecurity, turning practical problems into meaningful technology.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span>View My Projects</span>
                <ArrowRight size={16} />
              </a>

              <a href="#contact" className="btn btn-secondary">
                <span>Contact Me</span>
                <Send size={15} />
              </a>

              <button onClick={onOpenResume} className="btn btn-outline">
                <ShieldCheck size={16} />
                <span>View Resume</span>
              </button>
            </div>

            {/* Social Links & Academic Context */}
            <div className="hero-socials">
              <a
                href="https://github.com/gecha12"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/getaneh-dejenie"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://t.me/deju12_21"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="Telegram Channel"
              >
                <Send size={15} />
                <span>Telegram</span>
              </a>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.4rem', marginTop: '1.4rem', fontSize: '0.82rem', color: 'var(--text-dim)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <GraduationCap size={15} className="text-emerald" />
                <span>Univ. of Gondar &bull; Computer Science (4th Year)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={15} className="text-hot-green" />
                <span>Gondar, Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Orbital Profile */}
          <div className="hero-visual">
            <OrbitalAvatar />
          </div>
        </div>
      </div>
    </section>
  );
};

