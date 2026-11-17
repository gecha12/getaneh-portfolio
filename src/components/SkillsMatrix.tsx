import React, { useState } from 'react';
import {
  Terminal,
  Layout,
  Server,
  Database,
  Brain,
  ShieldCheck,
  Cloud,
  Wrench
} from 'lucide-react';
import { skillCategoriesData } from '../data/skills';

const getCategoryIcon = (icon: string) => {
  switch (icon) {
    case 'Terminal': return <Terminal size={20} />;
    case 'Layout': return <Layout size={20} />;
    case 'Server': return <Server size={20} />;
    case 'Database': return <Database size={20} />;
    case 'Brain': return <Brain size={20} />;
    case 'ShieldCheck': return <ShieldCheck size={20} />;
    case 'Cloud': return <Cloud size={20} />;
    case 'Wrench': return <Wrench size={20} />;
    default: return <Terminal size={20} />;
  }
};

export const SkillsMatrix: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');

  const filteredCategories = selectedCategoryId === 'all'
    ? skillCategoriesData
    : skillCategoriesData.filter(c => c.id === selectedCategoryId);

  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Technical Capabilities</span>
          <h2 className="section-title">Skills &amp; Technology Matrix</h2>
          <p className="section-subtitle">
            Structured competency overview organized by domain, highlighting concrete technical frameworks, protocols, and architectural patterns.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}
        >
          <button
            onClick={() => setSelectedCategoryId('all')}
            className={`btn btn-sm ${selectedCategoryId === 'all' ? 'btn-primary' : 'btn-outline'}`}
          >
            All Categories ({skillCategoriesData.length})
          </button>
          {skillCategoriesData.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategoryId(category.id)}
              className={`btn btn-sm ${selectedCategoryId === category.id ? 'btn-primary' : 'btn-outline'}`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Category Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {filteredCategories.map(cat => (
            <div
              key={cat.id}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color var(--transition-fast), transform var(--transition-fast)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--border-medium)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(85, 214, 138, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-hot-green)'
                  }}
                >
                  {getCategoryIcon(cat.icon)}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: '#ffffff' }}>{cat.title}</h3>
                  <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)' }}>
                    {cat.skills.length} Technical Disciplines
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                {cat.description}
              </p>

              {/* Skills List inside Category */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: 'auto' }}>
                {cat.skills.map(skill => (
                  <div
                    key={skill.name}
                    style={{
                      background: 'rgba(13, 26, 18, 0.65)',
                      border: '1px solid rgba(85, 214, 138, 0.12)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.8rem 1rem'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                      <strong style={{ fontSize: '0.92rem', color: '#ffffff' }}>{skill.name}</strong>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--accent-hot-green)',
                          background: 'rgba(85, 214, 138, 0.09)',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '4px'
                        }}
                      >
                        {skill.focus}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      {skill.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
