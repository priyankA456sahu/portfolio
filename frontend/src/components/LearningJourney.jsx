import React from 'react';
import { BookOpen, CheckCircle, Clock, Target } from 'lucide-react';

const LearningJourney = ({ data }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={20} className="text-green-500" />;
      case 'active':
        return <Clock size={20} className="text-[var(--accent-primary)]" />;
      case 'planned':
        return <Target size={20} className="text-[var(--accent-purple)]" />;
      default:
        return <Clock size={20} className="text-[var(--text-muted)]" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return '#10B981'; // Green
      case 'active':
        return 'var(--accent-primary)';
      case 'planned':
        return 'var(--accent-purple)';
      default:
        return 'var(--text-muted)';
    }
  };

  const getProgressPercentage = (status) => {
    switch (status) {
      case 'completed':
        return 100;
      case 'active':
        return 65;
      case 'planned':
        return 0;
      default:
        return 0;
    }
  };

  return (
    <section id="learning-journey" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen size={32} className="text-[var(--accent-primary)]" />
            <h2 className="display-md text-[var(--text-primary)]">Learning Journey</h2>
          </div>
          <div className="w-24 h-1 bg-[var(--accent-primary)] mx-auto rounded-full"></div>
          <p className="body-lg mt-6 max-w-2xl mx-auto">
            A continuous journey of growth, exploring new technologies and expanding my skill set
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--border-primary)] hidden md:block"></div>

            <div className="space-y-8">
              {data.map((phase, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 rounded-full border-4 border-[var(--bg-primary)] hidden md:block" 
                       style={{ backgroundColor: getStatusColor(phase.status) }}>
                  </div>

                  {/* Content Card */}
                  <div className="md:ml-16 feature-card">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(phase.status)}
                        <h3 className="h2 text-[var(--text-primary)]">{phase.phase}</h3>
                      </div>
                      
                      <div 
                        className="px-3 py-1 rounded-full text-sm font-medium border"
                        style={{ 
                          borderColor: getStatusColor(phase.status),
                          color: getStatusColor(phase.status),
                          backgroundColor: `${getStatusColor(phase.status)}20`
                        }}
                      >
                        {phase.status.charAt(0).toUpperCase() + phase.status.slice(1)}
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {phase.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] px-3 py-1 rounded-lg body-sm text-[var(--text-secondary)] font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="body-sm text-[var(--text-muted)]">Progress</span>
                        <span className="body-sm font-medium" style={{ color: getStatusColor(phase.status) }}>
                          {getProgressPercentage(phase.status)}%
                        </span>
                      </div>
                      <div className="w-full bg-[var(--bg-tertiary)] rounded-full h-2">
                        <div 
                          className="h-2 rounded-full transition-all duration-500"
                          style={{ 
                            width: `${getProgressPercentage(phase.status)}%`,
                            backgroundColor: getStatusColor(phase.status)
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Card */}
          <div className="mt-16 feature-card text-center">
            <h3 className="h2 text-[var(--text-primary)] mb-4">Continuous Learning Philosophy</h3>
            <p className="body-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-6">
              Technology evolves rapidly, and I believe in staying ahead by continuously learning, 
              experimenting, and adapting to new trends and tools in the tech industry.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-[var(--bg-tertiary)] px-4 py-2 rounded-lg border border-[var(--border-subtle)]">
                <span className="body-sm text-[var(--accent-primary)] font-medium">Daily Learning</span>
              </div>
              <div className="bg-[var(--bg-tertiary)] px-4 py-2 rounded-lg border border-[var(--border-subtle)]">
                <span className="body-sm text-[var(--accent-primary)] font-medium">Hands-on Practice</span>
              </div>
              <div className="bg-[var(--bg-tertiary)] px-4 py-2 rounded-lg border border-[var(--border-subtle)]">
                <span className="body-sm text-[var(--accent-primary)] font-medium">Real-world Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;