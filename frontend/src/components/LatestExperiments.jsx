import React from 'react';
import { Beaker, Zap, Calendar, ArrowRight } from 'lucide-react';

const LatestExperiments = ({ data }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'active':
        return <Zap size={16} className="text-[var(--accent-primary)]" />;
      case 'planning':
        return <Calendar size={16} className="text-[var(--accent-purple)]" />;
      default:
        return <Flask size={16} className="text-[var(--text-muted)]" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'var(--accent-primary)';
      case 'planning':
        return 'var(--accent-purple)';
      default:
        return 'var(--text-muted)';
    }
  };

  return (
    <section id="experiments" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Flask size={32} className="text-[var(--accent-primary)]" />
            <h2 className="display-md text-[var(--text-primary)]">Latest Experiments</h2>
          </div>
          <div className="w-24 h-1 bg-[var(--accent-primary)] mx-auto rounded-full"></div>
          <p className="body-lg mt-6 max-w-2xl mx-auto">
            Exploring the cutting edge of AI, automation, and cloud technologies through hands-on experimentation
          </p>
        </div>

        {/* Experiments Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {data.map((experiment, index) => (
              <div
                key={index}
                className="feature-card group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-subtle)]">
                      <Flask size={24} className="text-[var(--accent-primary)]" />
                    </div>
                    <div>
                      <h3 className="h3 text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                        {experiment.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div 
                    className="flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium"
                    style={{ 
                      borderColor: getStatusColor(experiment.status),
                      color: getStatusColor(experiment.status),
                      backgroundColor: `${getStatusColor(experiment.status)}20`
                    }}
                  >
                    {getStatusIcon(experiment.status)}
                    {experiment.status.charAt(0).toUpperCase() + experiment.status.slice(1)}
                  </div>
                </div>

                {/* Description */}
                <p className="body-md text-[var(--text-secondary)] mb-6 leading-relaxed">
                  {experiment.description}
                </p>

                {/* Progress for Active Experiments */}
                {experiment.status === 'active' && (
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="body-sm text-[var(--text-muted)]">Experiment Progress</span>
                      <span className="body-sm text-[var(--accent-primary)] font-medium">40%</span>
                    </div>
                    <div className="w-full bg-[var(--bg-tertiary)] rounded-full h-2">
                      <div className="bg-[var(--accent-primary)] h-2 rounded-full w-[40%] transition-all duration-300"></div>
                    </div>
                  </div>
                )}

                {/* Action */}
                <div className="flex items-center justify-between">
                  <span className="body-sm text-[var(--text-muted)]">
                    {experiment.status === 'active' ? 'Currently experimenting...' : 'Research & planning phase'}
                  </span>
                  <ArrowRight 
                    size={16} 
                    className="text-[var(--accent-primary)] group-hover:translate-x-1 transition-transform" 
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Experiment Philosophy */}
          <div className="feature-card text-center">
            <h3 className="h2 text-[var(--text-primary)] mb-6">Experimentation Mindset</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="w-16 h-16 bg-[var(--accent-bg)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flask size={32} className="text-[var(--accent-primary)]" />
                </div>
                <h4 className="h4 text-[var(--text-primary)] mb-2">Explore</h4>
                <p className="body-sm text-[var(--text-secondary)]">
                  Diving deep into emerging technologies and unconventional approaches
                </p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-[var(--accent-bg)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap size={32} className="text-[var(--accent-primary)]" />
                </div>
                <h4 className="h4 text-[var(--text-primary)] mb-2">Iterate</h4>
                <p className="body-sm text-[var(--text-secondary)]">
                  Rapid prototyping and continuous improvement through feedback loops
                </p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-[var(--accent-bg)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight size={32} className="text-[var(--accent-primary)]" />
                </div>
                <h4 className="h4 text-[var(--text-primary)] mb-2">Apply</h4>
                <p className="body-sm text-[var(--text-secondary)]">
                  Transforming experimental insights into practical solutions
                </p>
              </div>
            </div>

            <p className="body-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-6">
              "The best way to predict the future is to create it through bold experimentation and relentless curiosity."
            </p>

            <button 
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Collaborate on Experiments
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestExperiments;