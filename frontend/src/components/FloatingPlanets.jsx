import React, { useState, useRef, useEffect } from 'react';

const DraggablePlanet = ({ size, initialX, initialY, color, glowIntensity, children }) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const planetRef = useRef(null);

  const handleStart = (clientX, clientY) => {
    if (!planetRef.current) return;
    
    const rect = planetRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const offsetY = clientY - rect.top;
    
    setDragOffset({ x: offsetX, y: offsetY });
    setIsDragging(true);
  };

  const handleMove = (clientX, clientY) => {
    if (!isDragging) return;
    
    const newX = clientX - dragOffset.x;
    const newY = clientY - dragOffset.y;
    
    // Keep within viewport bounds
    const maxX = window.innerWidth - size;
    const maxY = window.innerHeight - size;
    
    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    });
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  // Mouse events
  const handleMouseDown = (e) => {
    e.preventDefault();
    handleStart(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX, e.clientY);
  };

  // Touch events
  const handleTouchStart = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleStart(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleMove(touch.clientX, touch.clientY);
  };

  useEffect(() => {
    if (isDragging) {
      const handleMouseMoveGlobal = (e) => handleMouseMove(e);
      const handleMouseUpGlobal = () => handleEnd();
      const handleTouchMoveGlobal = (e) => {
        const touch = e.touches[0];
        if (touch) handleMove(touch.clientX, touch.clientY);
      };
      const handleTouchEndGlobal = () => handleEnd();

      document.addEventListener('mousemove', handleMouseMoveGlobal);
      document.addEventListener('mouseup', handleMouseUpGlobal);
      document.addEventListener('touchmove', handleTouchMoveGlobal, { passive: false });
      document.addEventListener('touchend', handleTouchEndGlobal);

      return () => {
        document.removeEventListener('mousemove', handleMouseMoveGlobal);
        document.removeEventListener('mouseup', handleMouseUpGlobal);
        document.removeEventListener('touchmove', handleTouchMoveGlobal);
        document.removeEventListener('touchend', handleTouchEndGlobal);
      };
    }
  }, [isDragging, dragOffset]);

  return (
    <div
      ref={planetRef}
      className={`absolute cursor-grab ${isDragging ? 'cursor-grabbing' : ''} select-none`}
      style={{
        left: position.x,
        top: position.y,
        width: size,
        height: size,
        transform: isDragging ? 'scale(1.1)' : 'scale(1)',
        transition: isDragging ? 'none' : 'transform 0.2s ease',
        zIndex: isDragging ? 50 : 10,
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div
        className="w-full h-full rounded-full relative"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${color}40, ${color}20, ${color}10)`,
          boxShadow: `0 0 ${glowIntensity}px ${color}60, inset 0 0 ${glowIntensity/2}px ${color}30`,
          border: `1px solid ${color}30`,
        }}
      >
        {children}
        {/* Inner glow */}
        <div 
          className="absolute inset-1 rounded-full opacity-40"
          style={{
            background: `radial-gradient(circle at 25% 25%, ${color}60, transparent 60%)`,
          }}
        />
      </div>
    </div>
  );
};

const FloatingPlanets = () => {
  const planets = [
    {
      id: 1,
      size: 60,
      initialX: window.innerWidth * 0.1,
      initialY: window.innerHeight * 0.15,
      color: '#DAFF01',
      glowIntensity: 20,
    },
    {
      id: 2,
      size: 45,
      initialX: window.innerWidth * 0.85,
      initialY: window.innerHeight * 0.25,
      color: '#7F4A8E',
      glowIntensity: 15,
    },
    {
      id: 3,
      size: 35,
      initialX: window.innerWidth * 0.15,
      initialY: window.innerHeight * 0.6,
      color: '#DAFF01',
      glowIntensity: 12,
    },
    {
      id: 4,
      size: 50,
      initialX: window.innerWidth * 0.8,
      initialY: window.innerHeight * 0.7,
      color: '#7F4A8E',
      glowIntensity: 18,
    },
    {
      id: 5,
      size: 30,
      initialX: window.innerWidth * 0.25,
      initialY: window.innerHeight * 0.35,
      color: '#DAFF01',
      glowIntensity: 10,
    },
    {
      id: 6,
      size: 40,
      initialX: window.innerWidth * 0.7,
      initialY: window.innerHeight * 0.5,
      color: '#7F4A8E',
      glowIntensity: 14,
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Enable pointer events only for planets */}
      <div className="absolute inset-0 pointer-events-auto">
        {planets.map((planet) => (
          <DraggablePlanet
            key={planet.id}
            size={planet.size}
            initialX={planet.initialX}
            initialY={planet.initialY}
            color={planet.color}
            glowIntensity={planet.glowIntensity}
          >
            {/* Optional: Add subtle animation rings */}
            <div 
              className="absolute inset-0 rounded-full animate-ping opacity-20"
              style={{
                border: `1px solid ${planet.color}`,
                animationDuration: '3s',
                animationDelay: `${planet.id * 0.5}s`,
              }}
            />
          </DraggablePlanet>
        ))}
      </div>

      {/* Subtle star field */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-[var(--accent-primary)] rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-primary)] opacity-40 pointer-events-none"></div>
    </div>
  );
};

export default FloatingPlanets;