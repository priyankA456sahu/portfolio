import React, { useState, useEffect } from 'react';
import { portfolioData } from '../mock';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Experience from './Experience';
import LearningJourney from './LearningJourney';
import LatestExperiments from './LatestExperiments';
import Contact from './Contact';
import Footer from './Footer';
import FloatingClouds from './FloatingClouds';

const Portfolio = () => {
  const [data, setData] = useState(portfolioData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[var(--accent-primary)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[var(--text-secondary)]">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] relative overflow-hidden">
      <FloatingClouds />
      <Header />
      <main>
        <Hero data={data.hero} />
        <About data={data.about} />
        <Skills data={data.skills} />
        <Projects data={data.projects} />
        <Education data={data.education} />
        <Experience data={data.experience} />
        <LearningJourney data={data.learningJourney} />
        <LatestExperiments data={data.experiments} />
        <Contact data={data.contact} />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;