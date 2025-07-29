import React from 'react';
import { Code, Brain, Wrench, Database, Cloud, Heart } from 'lucide-react';

const Skills = ({ data }) => {
  const skillCategories = [
    { 
      key: 'current', 
      icon: Code, 
      title: data.current.title, 
      items: data.current.items, 
      color: 'var(--accent-primary)' 
    },
    { 
      key: 'learning', 
      icon: Brain, 
      title: data.learning.title, 
      items: data.learning.items, 
      color: 'var(--accent-purple)' 
    },
    { 
      key: 'tools', 
      icon: Wrench, 
      title: data.tools.title, 
      items: data.tools.items, 
      color: 'var(--accent-primary)' 
    },
    { 
      key: 'programming', 
      icon: Code, 
      title: data.programming.title, 
      items: data.programming.items, 
      color: 'var(--accent-purple)' 
    },
    { 
      key: 'database', 
      icon: Database, 
      title: data.database.title, 
      items: data.database.items, 
      color: 'var(--accent-primary)' 
    },
    { 
      key: 'cloud', 
      icon: Cloud, 
      title: data.cloud.title, 
      items: data.cloud.items, 
      color: 'var(--accent-purple)' 
    },
    { 
      key: 'soft', 
      icon: Heart, 
      title: data.soft.title, 
      items: data.soft.items, 
      color: 'var(--accent-primary)' 
    },
  ];

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code size={32} className="text-[var(--accent-primary)]" />
            <h2 className="display-md text-[var(--text-primary)]">Skills & Technologies</h2>
          </div>
          <div className="w-24 h-1 bg-[var(--accent-primary)] mx-auto rounded-full"></div>
          <p className="body-lg mt-6 max-w-2xl mx-auto">
            A diverse toolkit spanning from foundation technologies to cutting-edge AI and cloud platforms
          </p>
        </div>

        {/* Skills Grid */}
        <div className="card-grid max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <div
                key={category.key}
                className="feature-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <IconComponent 
                      size={24} 
                      style={{ color: category.color }}
                    />
                  </div>
                  <h3 className="h3 text-[var(--text-primary)]">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] transition-all duration-200 hover:border-[var(--accent-primary)] group-hover:transform group-hover:translate-x-1"
                    >
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: category.color }}
                      ></div>
                      <span className="body-md text-[var(--text-secondary)] font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Skill count badge */}
                <div className="absolute top-4 right-4 bg-[var(--accent-primary)] text-[var(--bg-primary)] text-sm font-bold px-2 py-1 rounded-full">
                  {category.items.length}
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-16">
          <div className="feature-card max-w-3xl mx-auto">
            <p className="body-lg text-[var(--accent-primary)] font-semibold">
              "Constantly evolving my skill set to stay at the forefront of technology and innovation."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;