import React from 'react';
import { Cloud, Zap, Code, Database, Cpu, Globe, Terminal } from 'lucide-react';

const FloatingClouds = () => {
  const cloudElements = [
    { Icon: Cloud, size: 20, delay: 0, top: '8%', left: '8%', opacity: 0.15 },
    { Icon: Cloud, size: 24, delay: 2, top: '15%', right: '12%', opacity: 0.12 },
    { Icon: Cloud, size: 18, delay: 1, top: '35%', left: '3%', opacity: 0.18 },
    { Icon: Cloud, size: 22, delay: 3, top: '55%', right: '8%', opacity: 0.14 },
    { Icon: Cloud, size: 20, delay: 1.5, top: '75%', left: '10%', opacity: 0.16 },
    
    // Tech icons - more minimal and sparse
    { Icon: Zap, size: 14, delay: 4, top: '12%', left: '75%', opacity: 0.2 },
    { Icon: Code, size: 16, delay: 2.5, top: '28%', right: '22%', opacity: 0.18 },
    { Icon: Database, size: 15, delay: 3.5, top: '65%', right: '18%', opacity: 0.16 },
    { Icon: Cpu, size: 14, delay: 1.8, top: '45%', left: '85%', opacity: 0.15 },
    { Icon: Globe, size: 16, delay: 4.2, top: '82%', right: '25%', opacity: 0.17 },
    { Icon: Terminal, size: 15, delay: 3.8, top: '18%', left: '20%', opacity: 0.14 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {cloudElements.map((element, index) => {
        const { Icon, size, delay, opacity, ...position } = element;
        
        return (
          <div
            key={index}
            className="absolute text-[var(--accent-primary)]"
            style={{
              ...position,
              animationDelay: `${delay}s`,
              opacity: opacity,
            }}
          >
            <div 
              className="animate-float"
              style={{
                filter: 'blur(0.5px)',
              }}
            >
              <Icon size={size} strokeWidth={1.5} />
            </div>
          </div>
        );
      })}
      
      {/* Minimal floating particles - very subtle */}
      <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-[var(--accent-primary)] rounded-full opacity-20 animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 bg-[var(--accent-primary)] rounded-full opacity-30 animate-float" style={{ animationDelay: '2.5s' }}></div>
      <div className="absolute top-1/2 left-1/5 w-1 h-1 bg-[var(--accent-primary)] rounded-full opacity-15 animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-2/3 right-1/3 w-0.5 h-0.5 bg-[var(--accent-primary)] rounded-full opacity-25 animate-float" style={{ animationDelay: '1.8s' }}></div>
      
      {/* Subtle geometric shapes */}
      <div className="absolute top-1/5 right-1/5 w-2 h-2 border border-[var(--accent-primary)] opacity-10 rotate-45 animate-float" style={{ animationDelay: '3.2s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 border border-[var(--accent-primary)] opacity-15 animate-float" style={{ animationDelay: '2.8s' }}></div>
    </div>
  );
};

export default FloatingClouds;