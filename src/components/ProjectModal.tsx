import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle2, Clock, Layers, ShieldCheck, Cpu } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close project modal">
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.8rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                padding: '0.25rem 0.65rem',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(163, 255, 18, 0.1)',
                border: '1px solid var(--border-medium)',
                color: 'var(--accent-hot-green)'
              }}
            >
              {project.status}
            </span>
            <span style={{ fontSize: '0.84rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
              {project.technologies.slice(0, 3).join(' &bull; ')}
            </span>
          </div>

          <h2 id="modal-title" style={{ fontSize: '1.9rem', color: '#ffffff', marginBottom: '0.3rem' }}>
            {project.title}
          </h2>
          <div style={{ fontSize: '0.98rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
            {project.subtitle}
          </div>
        </div>

        {/* Hero Image */}
        <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '260px', marginBottom: '2rem', position: 'relative' }}>
          <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(13, 26, 18, 0.9) 0%, transparent 60%)'
            }}
          />
        </div>

        {/* Architecture & Overview Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Overview */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={18} className="text-hot-green" />
              Project Overview
            </h4>
            <p style={{ fontSize: '0.96rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
              {project.overview}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'rgba(13, 26, 18, 0.65)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '1.4rem' }}>
              <strong style={{ display: 'block', color: '#ff6b6b', fontSize: '0.92rem', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                THE PROBLEM
              </strong>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {project.problem}
              </p>
            </div>

            <div style={{ background: 'rgba(13, 26, 18, 0.65)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '1.4rem' }}>
              <strong style={{ display: 'block', color: 'var(--accent-hot-green)', fontSize: '0.92rem', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                THE ENGINEERING SOLUTION
              </strong>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* System Architecture */}
          <div style={{ background: 'rgba(21, 43, 30, 0.75)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-sm)', padding: '1.4rem' }}>
            <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Cpu size={18} className="text-emerald" />
              System Architecture &amp; Data Flow
            </h4>
            <code style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-soft-green)', lineHeight: '1.6', background: '#0a1510', padding: '1rem', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
              {project.architecture}
            </code>
          </div>

          {/* Key Features (distinguished implemented vs planned) */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={18} className="text-hot-green" />
              Core Capabilities &amp; Features
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {project.features.map((feature, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: '1.5' }}>
                  <span style={{ color: 'var(--accent-hot-green)', marginTop: '2px' }}>&bull;</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Distinct Implemented vs Planned for MedLens or other projects */}
          {project.implementedFeatures && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem' }}>
              <div style={{ background: 'rgba(8, 127, 80, 0.08)', border: '1px solid rgba(8, 127, 80, 0.3)', borderRadius: 'var(--radius-sm)', padding: '1.2rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-hot-green)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', fontWeight: 600, marginBottom: '0.6rem' }}>
                  <CheckCircle2 size={15} /> VERIFIED &amp; IMPLEMENTED
                </span>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                  {project.implementedFeatures.map((f, i) => (
                    <li key={i}>&check; {f}</li>
                  ))}
                </ul>
              </div>

              {project.plannedFeatures && (
                <div style={{ background: 'rgba(163, 255, 18, 0.04)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '1.2rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-soft-green)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', fontWeight: 600, marginBottom: '0.6rem' }}>
                    <Clock size={15} /> PLANNED ROADMAP
                  </span>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                    {project.plannedFeatures.map((f, i) => (
                      <li key={i}>&bull; {f}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* My Engineering Contributions */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={18} className="text-hot-green" />
              Direct Engineering Contributions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {project.contributions.map((contribution, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <span style={{ color: 'var(--accent-emerald)', marginTop: '2px' }}>&gt;</span>
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Badges */}
          <div>
            <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', display: 'block', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              Technology Stack
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
              <Github size={16} />
              <span>GitHub Repository</span>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
              <ExternalLink size={16} />
              <span>Live Demonstration</span>
            </a>
          )}
          <button onClick={onClose} className="btn btn-outline btn-sm" style={{ marginLeft: 'auto' }}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

