import React, { useEffect, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero = ({ data }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const fullText = data.headline;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          {/* Profile Image */}
          <div className="relative mx-auto mb-8 w-48 h-48 rounded-full overflow-hidden border-4 border-[var(--accent-primary)] shadow-2xl">
            <img
              src={data.profileImage}
              alt={data.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Name */}
          <h1 className="display-lg text-[var(--text-primary)] mb-6">
            {data.name}
          </h1>

          {/* Animated Headline */}
          <div className="h-20 mb-8">
            <h2 className="h1 text-[var(--text-secondary)] max-w-4xl mx-auto">
              {displayText}
              <span className="animate-pulse text-[var(--accent-primary)]">|</span>
            </h2>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-2xl mx-auto">
            {data.highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] px-4 py-2 rounded-lg text-[var(--text-secondary)] font-medium flex items-center gap-2"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <Sparkles size={16} className="text-[var(--accent-primary)]" />
                {highlight}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToAbout()}
              className="btn-primary"
            >
              Explore My Work
            </button>
            <button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Let's Connect
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={scrollToAbout}
              className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors duration-200"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-primary)] to-[var(--bg-primary)] opacity-90"></div>
    </section>
  );
};

export default Hero;