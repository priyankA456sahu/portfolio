import React from 'react';
import { Cloud, Zap, Code, Database, Cpu, Globe, Terminal, Wifi, Server, Layers } from 'lucide-react';

const FloatingClouds = () => {
  const cloudElements = [
    // Main cloud icons - larger and more prominent
    { Icon: Cloud, size: 28, delay: 0, top: '12%', left: '8%', opacity: 0.25, duration: 8 },
    { Icon: Cloud, size: 32, delay: 1.5, top: '18%', right: '12%', opacity: 0.22, duration: 10 },
    { Icon: Cloud, size: 24, delay: 3, top: '35%', left: '5%', opacity: 0.28, duration: 9 },
    { Icon: Cloud, size: 30, delay: 4.5, top: '55%', right: '8%', opacity: 0.24, duration: 11 },
    { Icon: Cloud, size: 26, delay: 2, top: '75%', left: '12%', opacity: 0.26, duration: 8.5 },
    { Icon: Cloud, size: 34, delay: 6, top: '88%', right: '15%', opacity: 0.20, duration: 12 },
    
    // Tech icons - smaller and more subtle
    { Icon: Zap, size: 16, delay: 1, top: '8%', left: '75%', opacity: 0.18, duration: 7 },
    { Icon: Code, size: 18, delay: 2.5, top: '25%', right: '22%', opacity: 0.20, duration: 9.5 },
    { Icon: Database, size: 17, delay: 4, top: '42%', right: '25%', opacity: 0.16, duration: 8.5 },
    { Icon: Cpu, size: 15, delay: 0.8, top: '60%', left: '85%', opacity: 0.19, duration: 10.5 },
    { Icon: Globe, size: 19, delay: 3.2, top: '78%', right: '30%', opacity: 0.17, duration: 9 },
    { Icon: Terminal, size: 16, delay: 5, top: '15%', left: '18%', opacity: 0.15, duration: 11.5 },
    { Icon: Wifi, size: 14, delay: 1.8, top: '48%', left: '90%', opacity: 0.16, duration: 7.5 },
    { Icon: Server, size: 17, delay: 3.7, top: '32%', left: '25%', opacity: 0.18, duration: 10 },
    { Icon: Layers, size: 15, delay: 0.5, top: '65%', right: '35%', opacity: 0.14, duration: 8.8 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {cloudElements.map((element, index) => {
        const { Icon, size, delay, opacity, duration, ...position } = element;
        
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
              className="animate-float-enhanced"
              style={{
                filter: 'blur(0.3px)',
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            >
              <Icon size={size} strokeWidth={1.2} />
            </div>
          </div>
        );
      })}
      
      {/* Enhanced floating particles with varying sizes */}
      <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-[var(--accent-primary)] rounded-full opacity-25 animate-particle-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[var(--accent-primary)] rounded-full opacity-30 animate-particle-float" style={{ animationDelay: '2.5s' }}></div>
      <div className="absolute top-1/2 left-1/5 w-2 h-2 bg-[var(--accent-primary)] rounded-full opacity-20 animate-particle-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-2/3 right-1/3 w-0.5 h-0.5 bg-[var(--accent-primary)] rounded-full opacity-35 animate-particle-float" style={{ animationDelay: '1.8s' }}></div>
      <div className="absolute top-1/6 right-1/6 w-1.5 h-1.5 bg-[var(--accent-primary)] rounded-full opacity-22 animate-particle-float" style={{ animationDelay: '3.2s' }}></div>
      
      {/* Subtle geometric shapes for tech feel */}
      <div className="absolute top-1/5 right-1/5 w-3 h-3 border border-[var(--accent-primary)] opacity-12 rotate-45 animate-geometric-float" style={{ animationDelay: '2.8s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 border border-[var(--accent-primary)] opacity-15 animate-geometric-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-2/5 right-2/5 w-1.5 h-1.5 border border-[var(--accent-primary)] opacity-18 rotate-12 animate-geometric-float" style={{ animationDelay: '4.2s' }}></div>
      
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-primary)] opacity-60 pointer-events-none"></div>
    </div>
  );
};

export default FloatingClouds;