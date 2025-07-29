import React from 'react';
import { Folder, ExternalLink, Github, Clock, Zap } from 'lucide-react';

const Projects = ({ data }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Coming Soon':
        return <Clock size={16} className="text-[var(--accent-purple)]" />;
      case 'In Development':
        return <Zap size={16} className="text-[var(--accent-primary)]" />;
      case 'Planning':
        return <Folder size={16} className="text-[var(--text-muted)]" />;
      default:
        return <Folder size={16} className="text-[var(--accent-primary)]" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Coming Soon':
        return 'var(--accent-purple)';
      case 'In Development':
        return 'var(--accent-primary)';
      case 'Planning':
        return 'var(--text-muted)';
      default:
        return 'var(--accent-primary)';
    }
  };

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Folder size={32} className="text-[var(--accent-primary)]" />
            <h2 className="display-md text-[var(--text-primary)]">Projects & Portfolio</h2>
          </div>
          <div className="w-24 h-1 bg-[var(--accent-primary)] mx-auto rounded-full"></div>
          <p className="body-lg mt-6 max-w-2xl mx-auto">
            Exploring the intersection of AI, automation, and cloud technologies through innovative projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="card-grid-3 max-w-6xl mx-auto mb-12">
          {data.map((project, index) => (
            <div
              key={project.id}
              className="feature-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-subtle)]">
                    <Folder size={24} className="text-[var(--accent-primary)]" />
                  </div>
                  <div>
                    <h3 className="h3 text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                {/* Status Badge */}
                <div 
                  className="flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium"
                  style={{ 
                    borderColor: getStatusColor(project.status),
                    color: getStatusColor(project.status),
                    backgroundColor: `${getStatusColor(project.status)}20`
                  }}
                >
                  {getStatusIcon(project.status)}
                  {project.status}
                </div>
              </div>

              {/* Project Description */}
              <p className="body-md text-[var(--text-secondary)] mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Project Actions */}
              <div className="flex items-center gap-3 mt-auto">
                {project.isPlaceholder ? (
                  <div className="text-[var(--text-muted)] body-sm">
                    Documentation and demos coming soon...
                  </div>
                ) : (
                  <>
                    <button className="btn-secondary flex items-center gap-2">
                      <ExternalLink size={16} />
                      View Demo
                    </button>
                    <button className="p-2 rounded-lg border border-[var(--border-primary)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all">
                      <Github size={16} />
                    </button>
                  </>
                )}
              </div>

              {/* Progress Indicator for In Development */}
              {project.status === 'In Development' && (
                <div className="mt-4 pt-4 border-t border-[var(--border-subtle)]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="body-sm text-[var(--text-muted)]">Progress</span>
                    <span className="body-sm text-[var(--accent-primary)] font-medium">65%</span>
                  </div>
                  <div className="w-full bg-[var(--bg-tertiary)] rounded-full h-2">
                    <div className="bg-[var(--accent-primary)] h-2 rounded-full w-[65%] transition-all duration-300"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="feature-card max-w-2xl mx-auto">
            <h3 className="h2 text-[var(--text-primary)] mb-4">More Projects Coming Soon!</h3>
            <p className="body-lg mb-6">
              I'm constantly working on new projects that explore the latest in AI, cloud computing, and automation. 
              Stay tuned for updates and live demos.
            </p>
            <button 
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Collaborate With Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;