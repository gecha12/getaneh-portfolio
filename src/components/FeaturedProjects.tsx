import React, { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, Filter } from 'lucide-react';
import { projectsData } from '../data/projects';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';

export const FeaturedProjects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategory>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = selectedFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === selectedFilter);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Engineering Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Authentic, full-stack, and applied machine learning systems built to solve tangible domain challenges in property, healthcare, and education.
          </p>
        </div>

        {/* Filter Controls */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--text-dim)', marginRight: '0.5rem', fontFamily: 'var(--font-mono)' }}>
            <Filter size={14} /> FILTER:
          </span>
          <button
            onClick={() => setSelectedFilter('all')}
            className={`btn btn-sm ${selectedFilter === 'all' ? 'btn-primary' : 'btn-outline'}`}
          >
            All Work ({projectsData.length})
          </button>
          <button
            onClick={() => setSelectedFilter('fullstack')}
            className={`btn btn-sm ${selectedFilter === 'fullstack' ? 'btn-primary' : 'btn-outline'}`}
          >
            Full-Stack Systems
          </button>
          <button
            onClick={() => setSelectedFilter('ai-ml')}
            className={`btn btn-sm ${selectedFilter === 'ai-ml' ? 'btn-primary' : 'btn-outline'}`}
          >
            AI &amp; Machine Learning
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <article key={project.id} className="project-card">
              <div className="project-img-box">
                <img src={project.image} alt={project.title} className="project-img" loading="lazy" />
                <span className="project-status-tag">{project.status}</span>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-subtitle">{project.subtitle}</div>

                <p className="project-overview">{project.overview}</p>

                {/* Tech Badges */}
                <div className="tech-tag-row">
                  {project.technologies.slice(0, 5).map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="tech-tag">+{project.technologies.length - 5}</span>
                  )}
                </div>

                {/* Card Footer Actions */}
                <div className="project-footer">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="btn btn-primary btn-sm"
                  >
                    <span>View Architecture</span>
                    <ArrowUpRight size={15} />
                  </button>

                  <div style={{ display: 'flex', gap: '0.6rem' }}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <Github size={15} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};

