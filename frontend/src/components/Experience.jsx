import React from 'react';
import { Briefcase, TrendingUp, Target, Rocket } from 'lucide-react';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase size={32} className="text-[var(--accent-primary)]" />
            <h2 className="display-md text-[var(--text-primary)]">Experience</h2>
          </div>
          <div className="w-24 h-1 bg-[var(--accent-primary)] mx-auto rounded-full"></div>
        </div>

        {/* Experience Content */}
        <div className="max-w-4xl mx-auto">
          <div className="feature-card text-center">
            {/* Journey Icon */}
            <div className="mb-8">
              <div className="w-24 h-24 bg-[var(--accent-bg)] rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket size={48} className="text-[var(--accent-primary)]" />
              </div>
              <h3 className="h1 text-[var(--text-primary)] mb-4">The Journey Begins</h3>
            </div>

            {/* Main Message */}
            <p className="body-lg text-[var(--text-secondary)] max-w-3xl mx-auto mb-12 leading-relaxed">
              {data.message}
            </p>

            {/* What I'm Looking For */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[var(--bg-tertiary)] p-6 rounded-lg border border-[var(--border-subtle)]">
                <TrendingUp size={32} className="text-[var(--accent-primary)] mx-auto mb-4" />
                <h4 className="h4 text-[var(--text-primary)] mb-3">Internships</h4>
                <p className="body-sm text-[var(--text-secondary)]">
                  Seeking hands-on experience in cloud computing, AI, and modern web development
                </p>
              </div>

              <div className="bg-[var(--bg-tertiary)] p-6 rounded-lg border border-[var(--border-subtle)]">
                <Target size={32} className="text-[var(--accent-primary)] mx-auto mb-4" />
                <h4 className="h4 text-[var(--text-primary)] mb-3">Projects</h4>
                <p className="body-sm text-[var(--text-secondary)]">
                  Collaborating on innovative projects that push the boundaries of technology
                </p>
              </div>

              <div className="bg-[var(--bg-tertiary)] p-6 rounded-lg border border-[var(--border-subtle)]">
                <Briefcase size={32} className="text-[var(--accent-primary)] mx-auto mb-4" />
                <h4 className="h4 text-[var(--text-primary)] mb-3">Mentorship</h4>
                <p className="body-sm text-[var(--text-secondary)]">
                  Learning from industry experts and contributing to meaningful solutions
                </p>
              </div>
            </div>

            {/* Current Status */}
            <div className="bg-gradient-to-r from-[var(--bg-secondary)] to-[var(--bg-tertiary)] p-8 rounded-lg border border-[var(--accent-primary)] mb-8">
              <h4 className="h3 text-[var(--text-primary)] mb-4">Current Focus</h4>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                <div>
                  <h5 className="h4 text-[var(--accent-primary)] mb-2">Learning</h5>
                  <ul className="space-y-1">
                    <li className="body-sm text-[var(--text-secondary)]">• Advanced Cloud Architecture</li>
                    <li className="body-sm text-[var(--text-secondary)]">• AI Agent Development</li>
                    <li className="body-sm text-[var(--text-secondary)]">• Automation & DevOps</li>
                  </ul>
                </div>
                <div>
                  <h5 className="h4 text-[var(--accent-primary)] mb-2">Building</h5>
                  <ul className="space-y-1">
                    <li className="body-sm text-[var(--text-secondary)]">• Personal AI Projects</li>
                    <li className="body-sm text-[var(--text-secondary)]">• Cloud-Native Applications</li>
                    <li className="body-sm text-[var(--text-secondary)]">• Research Models</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Let's Work Together
              </button>
              <button 
                onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                View My Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;