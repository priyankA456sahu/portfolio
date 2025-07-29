import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = ({ data }) => {
  return (
    <section id="education" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap size={32} className="text-[var(--accent-primary)]" />
            <h2 className="display-md text-[var(--text-primary)]">Education</h2>
          </div>
          <div className="w-24 h-1 bg-[var(--accent-primary)] mx-auto rounded-full"></div>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className="feature-card">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              {/* Icon and Visual */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-[var(--accent-bg)] rounded-full flex items-center justify-center">
                  <GraduationCap size={40} className="text-[var(--accent-primary)]" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="h2 text-[var(--text-primary)] mb-2">{data.degree}</h3>
                    <p className="body-lg text-[var(--accent-primary)] font-semibold">{data.institution}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-[var(--bg-tertiary)] px-4 py-2 rounded-lg border border-[var(--border-subtle)]">
                    <Calendar size={16} className="text-[var(--accent-primary)]" />
                    <span className="body-md text-[var(--text-secondary)] font-medium">{data.year}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 mb-6">
                  <MapPin size={16} className="text-[var(--text-muted)]" />
                  <span className="body-md text-[var(--text-muted)]">Odisha, India</span>
                </div>

                {/* Additional Details */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-[var(--bg-tertiary)] p-4 rounded-lg border border-[var(--border-subtle)]">
                    <h4 className="h4 text-[var(--text-primary)] mb-2">Focus Areas</h4>
                    <ul className="space-y-1">
                      <li className="body-sm text-[var(--text-secondary)]">• Software Engineering</li>
                      <li className="body-sm text-[var(--text-secondary)]">• Data Structures & Algorithms</li>
                      <li className="body-sm text-[var(--text-secondary)]">• Database Management</li>
                      <li className="body-sm text-[var(--text-secondary)]">• Cloud Computing</li>
                    </ul>
                  </div>
                  
                  <div className="bg-[var(--bg-tertiary)] p-4 rounded-lg border border-[var(--border-subtle)]">
                    <h4 className="h4 text-[var(--text-primary)] mb-2">Academic Journey</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="body-sm text-[var(--text-muted)]">Current Year</span>
                        <span className="body-sm text-[var(--accent-primary)] font-medium">3rd Year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="body-sm text-[var(--text-muted)]">Expected Graduation</span>
                        <span className="body-sm text-[var(--accent-primary)] font-medium">2026</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]">
              <div className="flex items-center justify-between mb-2">
                <span className="body-md text-[var(--text-secondary)]">Academic Progress</span>
                <span className="body-md text-[var(--accent-primary)] font-medium">75%</span>
              </div>
              <div className="w-full bg-[var(--bg-tertiary)] rounded-full h-3">
                <div className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-purple)] h-3 rounded-full w-3/4 transition-all duration-500"></div>
              </div>
              <p className="body-sm text-[var(--text-muted)] mt-2">Expected graduation in 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;