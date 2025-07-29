import React, { useState } from 'react';
import { Mail, Linkedin, Send, MessageSquare, User, MapPin } from 'lucide-react';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageSquare size={32} className="text-[var(--accent-primary)]" />
            <h2 className="display-md text-[var(--text-primary)]">Let's Connect</h2>
          </div>
          <div className="w-24 h-1 bg-[var(--accent-primary)] mx-auto rounded-full"></div>
          <p className="body-lg mt-6 max-w-2xl mx-auto">
            Ready to collaborate, learn, or just have a great conversation about technology? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Main CTA */}
              <div className="feature-card">
                <h3 className="h2 text-[var(--text-primary)] mb-6">{data.callToAction}</h3>
                <p className="body-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
                  I'm always excited to connect with fellow tech enthusiasts, potential collaborators, 
                  and anyone interested in exploring the future of technology together.
                </p>

                {/* Contact Methods */}
                <div className="space-y-4">
                  <a
                    href={`mailto:${data.email}`}
                    className="flex items-center gap-4 p-4 bg-[var(--bg-tertiary)] rounded-lg border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-all group"
                  >
                    <div className="p-3 bg-[var(--accent-bg)] rounded-lg">
                      <Mail size={24} className="text-[var(--accent-primary)]" />
                    </div>
                    <div>
                      <h4 className="h4 text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                        Email Me
                      </h4>
                      <p className="body-md text-[var(--text-secondary)]">{data.email}</p>
                    </div>
                  </a>

                  <a
                    href={`https://${data.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[var(--bg-tertiary)] rounded-lg border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-all group"
                  >
                    <div className="p-3 bg-[var(--accent-bg)] rounded-lg">
                      <Linkedin size={24} className="text-[var(--accent-primary)]" />
                    </div>
                    <div>
                      <h4 className="h4 text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                        LinkedIn
                      </h4>
                      <p className="body-md text-[var(--text-secondary)]">Professional networking</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Collaboration Areas */}
              <div className="feature-card">
                <h3 className="h3 text-[var(--text-primary)] mb-6">Open to Collaborate On</h3>
                <div className="space-y-3">
                  {[
                    'AI & Machine Learning Projects',
                    'Cloud Architecture & Automation',
                    'Open Source Contributions',
                    'Research & Academic Projects',
                    'Internship Opportunities',
                    'Tech Community Events'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full"></div>
                      <span className="body-md text-[var(--text-secondary)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="feature-card">
              <h3 className="h3 text-[var(--text-primary)] mb-6">Send a Message</h3>
              
              {submitMessage && (
                <div className="mb-6 p-4 bg-[var(--accent-bg)] border border-[var(--accent-primary)] rounded-lg">
                  <p className="body-md text-[var(--accent-primary)]">{submitMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block body-md text-[var(--text-secondary)] mb-2">
                      <User size={16} className="inline mr-2" />
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block body-md text-[var(--text-secondary)] mb-2">
                      <Mail size={16} className="inline mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block body-md text-[var(--text-secondary)] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <label className="block body-md text-[var(--text-secondary)] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project, idea, or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-[var(--bg-primary)] border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Send size={16} />
                      Send Message
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="feature-card max-w-3xl mx-auto">
            <MapPin size={24} className="text-[var(--accent-primary)] mx-auto mb-4" />
            <h3 className="h2 text-[var(--text-primary)] mb-4">Open to internships, learning projects, or creative tech collaborations!</h3>
            <p className="body-lg text-[var(--text-secondary)]">
              Based in Odisha, India • Available for remote opportunities worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;