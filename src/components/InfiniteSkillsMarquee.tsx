import React from 'react';
import {
  Code2,
  FileCode2,
  FileJson,
  Globe,
  Layout,
  Palette,
  Terminal,
  Zap,
  Database,
  Box,
  GitBranch,
  Github,
  Cpu,
  ShieldAlert,
  Activity,
  Lock,
  Brain
} from 'lucide-react';
import { marqueeRow1, marqueeRow2 } from '../data/skills';

// Helper to map icon string to Lucide component
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code2': return <Code2 size={16} />;
    case 'FileCode2': return <FileCode2 size={16} />;
    case 'FileJson': return <FileJson size={16} />;
    case 'Globe': return <Globe size={16} />;
    case 'Layout': return <Layout size={16} />;
    case 'Palette': return <Palette size={16} />;
    case 'Terminal': return <Terminal size={16} />;
    case 'Zap': return <Zap size={16} />;
    case 'Database': return <Database size={16} />;
    case 'Box': return <Box size={16} />;
    case 'GitBranch': return <GitBranch size={16} />;
    case 'Github': return <Github size={16} />;
    case 'Cpu': return <Cpu size={16} />;
    case 'ShieldAlert': return <ShieldAlert size={16} />;
    case 'Activity': return <Activity size={16} />;
    case 'Lock': return <Lock size={16} />;
    case 'Brain': return <Brain size={16} />;
    default: return <Code2 size={16} />;
  }
};

export const InfiniteSkillsMarquee: React.FC = () => {
  // Duplicate arrays 3 times to ensure infinite seamless loop without gaps
  const row1Repeated = [...marqueeRow1, ...marqueeRow1, ...marqueeRow1, ...marqueeRow1];
  const row2Repeated = [...marqueeRow2, ...marqueeRow2, ...marqueeRow2, ...marqueeRow2];

  return (
    <div className="skills-marquee-section" aria-label="Continuously moving technology skills">
      <div style={{ textAlign: 'center', marginBottom: '1.2rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          &bull; Continuous Technology Stack &bull;
        </span>
      </div>

      {/* Row 1: Right to Left */}
      <div className="marquee-wrapper" style={{ marginBottom: '1rem' }}>
        <div className="marquee-track track-row-1">
          {row1Repeated.map((skill, index) => (
            <div key={`row1-${skill.name}-${index}`} className="marquee-item">
              <span className="marquee-item-icon">{getIcon(skill.icon)}</span>
              <span>{skill.name}</span>
              <span className="marquee-item-category">({skill.category})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Left to Right */}
      <div className="marquee-wrapper">
        <div className="marquee-track track-row-2">
          {row2Repeated.map((skill, index) => (
            <div key={`row2-${skill.name}-${index}`} className="marquee-item">
              <span className="marquee-item-icon">{getIcon(skill.icon)}</span>
              <span>{skill.name}</span>
              <span className="marquee-item-category">({skill.category})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

