import React from 'react';
import { Heart, Code, Coffee, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:missiyaa.111@gmail.com',
      color: 'var(--accent-primary)'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/shreeya-swarupa-das-660689289',
      color: 'var(--accent-primary)'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: '#',
      color: 'var(--accent-primary)'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] relative z-10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="h2 text-[var(--text-primary)] mb-4">Shreeya Swarupa Das</h3>
              <p className="body-lg text-[var(--text-secondary)] leading-relaxed max-w-md">
                Crafting scalable cloud solutions with creativity and code. 
                Always exploring the intersection of AI, automation, and innovation.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="w-12 h-12 bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all duration-200 hover:transform hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="h4 text-[var(--text-primary)] mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-200 body-md"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Current Focus */}
          <div>
            <h4 className="h4 text-[var(--text-primary)] mb-6">Currently</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full animate-pulse"></div>
                <span className="body-md text-[var(--text-secondary)]">Learning Cloud Computing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full animate-pulse"></div>
                <span className="body-md text-[var(--text-secondary)]">Building AI Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full animate-pulse"></div>
                <span className="body-md text-[var(--text-secondary)]">Seeking Opportunities</span>
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="mt-6 flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors duration-200 group"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
              <span className="body-sm">Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--border-subtle)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-[var(--text-muted)] body-sm">
              <span>© {currentYear} Made with</span>
              <Heart size={14} className="text-red-500 fill-current" />
              <span>and</span>
              <Code size={14} className="text-[var(--accent-primary)]" />
              <span>by Shreeya Swarupa Das</span>
            </div>

            <div className="flex items-center gap-4 text-[var(--text-muted)] body-sm">
              <div className="flex items-center gap-2">
                <Coffee size={14} className="text-[var(--accent-primary)]" />
                <span>Fueled by curiosity</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-1 h-1 bg-[var(--accent-primary)] rounded-full opacity-30"></div>
        <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-[var(--accent-primary)] rounded-full opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[var(--accent-primary)] rounded-full opacity-20"></div>
      </div>
    </footer>
  );
};

export default Footer;