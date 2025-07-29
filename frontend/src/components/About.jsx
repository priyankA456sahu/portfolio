import React from 'react';
import { User, Target, Lightbulb } from 'lucide-react';

const About = ({ data }) => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <User size={32} className="text-[var(--accent-primary)]" />
              <h2 className="display-md text-[var(--text-primary)]">About Me</h2>
            </div>
            <div className="w-24 h-1 bg-[var(--accent-primary)] mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Content */}
            <div className="space-y-6">
              <div className="feature-card">
                <div className="flex items-start gap-4 mb-4">
                  <Lightbulb size={24} className="text-[var(--accent-primary)] mt-1 flex-shrink-0" />
                  <h3 className="h3 text-[var(--text-primary)]">My Story</h3>
                </div>
                <p className="body-lg leading-relaxed">
                  {data.bio}
                </p>
              </div>

              <div className="feature-card">
                <div className="flex items-start gap-4 mb-4">
                  <Target size={24} className="text-[var(--accent-primary)] mt-1 flex-shrink-0" />
                  <h3 className="h3 text-[var(--text-primary)]">Impact</h3>
                </div>
                <p className="body-lg text-[var(--accent-primary)] font-medium">
                  {data.impact}
                </p>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="relative">
              <div className="feature-card p-0 overflow-hidden">
                <div className="p-8">
                  <h3 className="h2 text-[var(--text-primary)] mb-6">Quick Highlights</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                      <span className="body-md">Tech Enthusiast</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                      <span className="body-md">AI & Cloud Explorer</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                      <span className="body-md">Future-Focused Learner</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                      <span className="body-md">Innovation-Driven</span>
                    </div>
                  </div>
                </div>
                
                {/* Decorative gradient */}
                <div className="h-2 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-purple)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;