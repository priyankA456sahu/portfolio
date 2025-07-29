import React from 'react';
import { Cloud, Zap, Code, Database } from 'lucide-react';

const FloatingClouds = () => {
  const cloudElements = [
    { Icon: Cloud, size: 24, delay: 0, top: '10%', left: '10%' },
    { Icon: Cloud, size: 32, delay: 2, top: '20%', right: '15%' },
    { Icon: Cloud, size: 20, delay: 1, top: '40%', left: '5%' },
    { Icon: Cloud, size: 28, delay: 3, top: '60%', right: '10%' },
    { Icon: Cloud, size: 24, delay: 1.5, top: '80%', left: '15%' },
    { Icon: Zap, size: 16, delay: 4, top: '15%', left: '80%' },
    { Icon: Code, size: 18, delay: 2.5, top: '35%', right: '25%' },
    { Icon: Database, size: 20, delay: 3.5, top: '70%', right: '20%' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {cloudElements.map((element, index) => {
        const { Icon, size, delay, ...position } = element;
        
        return (
          <div
            key={index}
            className="absolute opacity-20 text-[var(--accent-primary)]"
            style={{
              ...position,
              animationDelay: `${delay}s`,
            }}
          >
            <div className="animate-float">
              <Icon size={size} />
            </div>
          </div>
        );
      })}
      
      {/* Additional floating particles */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[var(--accent-primary)] rounded-full opacity-30 animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[var(--accent-primary)] rounded-full opacity-40 animate-float" style={{ animationDelay: '2.5s' }}></div>
      <div className="absolute top-1/2 left-1/5 w-1.5 h-1.5 bg-[var(--accent-primary)] rounded-full opacity-25 animate-float" style={{ animationDelay: '4s' }}></div>
    </div>
  );
};

export default FloatingClouds;