import React from 'react';
import { GraduationCap, Briefcase, Award, MapPin } from 'lucide-react';
import { timelineData } from '../data/timeline';

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'education': return <GraduationCap size={18} className="text-hot-green" />;
    case 'internship': return <Briefcase size={18} className="text-emerald" />;
    case 'achievement': return <Award size={18} className="text-hot-green" />;
    default: return <GraduationCap size={18} />;
  }
};

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Academic &amp; Professional Path</span>
          <h2 className="section-title">Education &amp; Experience Timeline</h2>
          <p className="section-subtitle">
            A chronological view of my computer science education, software engineering internship, and verified security achievements.
          </p>
        </div>

        <div className="timeline-container">
          {timelineData.map(item => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot" />

              <div className="timeline-content">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '0.4rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {getTypeIcon(item.type)}
                    <span className="timeline-period">{item.period}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    <MapPin size={13} />
                    <span>{item.location}</span>
                  </div>
                </div>

                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-org">{item.organization}</div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.2rem' }}>
                  {item.description.map((desc, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                      <span style={{ color: 'var(--accent-hot-green)', marginTop: '2px' }}>&bull;</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {item.tags.map(tag => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
