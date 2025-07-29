import React, { useState, useEffect } from 'react';
import { User, Save, LogOut, Edit3, Plus, Trash2, Eye } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [portfolioData, setPortfolioData] = useState(null);
  const [activeTab, setActiveTab] = useState('hero');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (token) {
      setIsLoggedIn(true);
      fetchPortfolioData();
    }
  }, []);

  const showMessage = (msg, type = 'success') => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000);
  };

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${API}/admin/login`, loginData);
      localStorage.setItem('admin_token', response.data.access_token);
      setIsLoggedIn(true);
      fetchPortfolioData();
      showMessage('Logged in successfully!');
    } catch (error) {
      showMessage('Invalid credentials', 'error');
    }
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('admin_token');
    setIsLoggedIn(false);
    setPortfolioData(null);
  };

  const fetchPortfolioData = async () => {
    try {
      const token = localStorage.getItem('admin_token');
      const response = await axios.get(`${API}/admin/portfolio`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPortfolioData(response.data);
    } catch (error) {
      showMessage('Failed to fetch portfolio data', 'error');
    }
  };

  const updateSection = async (section, data) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('admin_token');
      await axios.put(`${API}/admin/portfolio/${section}`, data, {
        headers: { Authorization: `Bearer ${token}` }
      });
      showMessage(`${section} updated successfully!`);
      fetchPortfolioData();
    } catch (error) {
      showMessage(`Failed to update ${section}`, 'error');
    }
    setLoading(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
        <div className="bg-[var(--bg-secondary)] p-8 rounded-lg border border-[var(--border-subtle)] w-full max-w-md">
          <div className="text-center mb-6">
            <User size={48} className="text-[var(--accent-primary)] mx-auto mb-4" />
            <h2 className="h2 text-[var(--text-primary)]">Admin Login</h2>
          </div>
          
          <form onSubmit={login}>
            <div className="mb-4">
              <label className="block body-md text-[var(--text-secondary)] mb-2">Username</label>
              <input
                type="text"
                value={loginData.username}
                onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none"
                placeholder="Enter username"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block body-md text-[var(--text-secondary)] mb-2">Password</label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none"
                placeholder="Enter password"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          
          {message && (
            <div className={`mt-4 p-3 rounded-lg ${message.includes('success') ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
              {message}
            </div>
          )}
          
          <div className="mt-6 text-center">
            <p className="body-sm text-[var(--text-muted)]">Demo: admin / admin123</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <header className="bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="h2 text-[var(--text-primary)]">Portfolio Admin</h1>
          <div className="flex items-center gap-4">
            <a href="/" target="_blank" className="btn-secondary flex items-center gap-2">
              <Eye size={16} />
              View Site
            </a>
            <button onClick={logout} className="btn-secondary flex items-center gap-2">
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        {message && (
          <div className={`mb-6 p-4 rounded-lg ${message.includes('success') ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
            {message}
          </div>
        )}

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {['hero', 'about', 'skills', 'projects', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-[var(--accent-primary)] text-[var(--bg-primary)]'
                    : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {portfolioData && (
          <div className="bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-subtle)] p-6">
            {activeTab === 'hero' && <HeroEditor data={portfolioData.hero} onUpdate={(data) => updateSection('hero', data)} loading={loading} />}
            {activeTab === 'about' && <AboutEditor data={portfolioData.about} onUpdate={(data) => updateSection('about', data)} loading={loading} />}
            {activeTab === 'skills' && <SkillsEditor data={portfolioData.skills} onUpdate={(data) => updateSection('skills', data)} loading={loading} />}
            {activeTab === 'projects' && <ProjectsEditor data={portfolioData.projects} onUpdate={fetchPortfolioData} loading={loading} />}
            {activeTab === 'contact' && <ContactEditor data={portfolioData.contact} onUpdate={(data) => updateSection('contact', data)} loading={loading} />}
          </div>
        )}
      </div>
    </div>
  );
};

// Hero Editor Component
const HeroEditor = ({ data, onUpdate, loading }) => {
  const [formData, setFormData] = useState(data || {});

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="h3 text-[var(--text-primary)] mb-4">Hero Section</h3>
      
      <div>
        <label className="block body-md text-[var(--text-secondary)] mb-2">Name</label>
        <input
          type="text"
          value={formData.name || ''}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none"
        />
      </div>
      
      <div>
        <label className="block body-md text-[var(--text-secondary)] mb-2">Headline</label>
        <textarea
          value={formData.headline || ''}
          onChange={(e) => setFormData({...formData, headline: e.target.value})}
          className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none"
          rows="3"
        />
      </div>
      
      <div>
        <label className="block body-md text-[var(--text-secondary)] mb-2">Profile Image URL</label>
        <input
          type="url"
          value={formData.profileImage || ''}
          onChange={(e) => setFormData({...formData, profileImage: e.target.value})}
          className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none"
        />
      </div>
      
      <button type="submit" disabled={loading} className="btn-primary flex items-center gap-2">
        <Save size={16} />
        {loading ? 'Saving...' : 'Save Changes'}
      </button>
    </form>
  );
};

// About Editor Component
const AboutEditor = ({ data, onUpdate, loading }) => {
  const [formData, setFormData] = useState(data || {});

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="h3 text-[var(--text-primary)] mb-4">About Section</h3>
      
      <div>
        <label className="block body-md text-[var(--text-secondary)] mb-2">Bio</label>
        <textarea
          value={formData.bio || ''}
          onChange={(e) => setFormData({...formData, bio: e.target.value})}
          className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none"
          rows="6"
        />
      </div>
      
      <div>
        <label className="block body-md text-[var(--text-secondary)] mb-2">Impact Statement</label>
        <textarea
          value={formData.impact || ''}
          onChange={(e) => setFormData({...formData, impact: e.target.value})}
          className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none"
          rows="3"
        />
      </div>
      
      <button type="submit" disabled={loading} className="btn-primary flex items-center gap-2">
        <Save size={16} />
        {loading ? 'Saving...' : 'Save Changes'}
      </button>
    </form>
  );
};

// Contact Editor Component
const ContactEditor = ({ data, onUpdate, loading }) => {
  const [formData, setFormData] = useState(data || {});

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="h3 text-[var(--text-primary)] mb-4">Contact Section</h3>
      
      <div>
        <label className="block body-md text-[var(--text-secondary)] mb-2">Email</label>
        <input
          type="email"
          value={formData.email || ''}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none"
        />
      </div>
      
      <div>
        <label className="block body-md text-[var(--text-secondary)] mb-2">LinkedIn URL</label>
        <input
          type="url"
          value={formData.linkedin || ''}
          onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
          className="w-full px-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none"
        />
      </div>
      
      <button type="submit" disabled={loading} className="btn-primary flex items-center gap-2">
        <Save size={16} />
        {loading ? 'Saving...' : 'Save Changes'}
      </button>
    </form>
  );
};

// Skills Editor Component  
const SkillsEditor = ({ data, onUpdate, loading }) => {
  const [formData, setFormData] = useState(data || {});

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  const updateSkillCategory = (category, field, value) => {
    setFormData({
      ...formData,
      [category]: {
        ...formData[category],
        [field]: field === 'items' ? value.split(',').map(item => item.trim()) : value
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="h3 text-[var(--text-primary)] mb-4">Skills Section</h3>
      
      {Object.keys(formData).map((category) => (
        <div key={category} className="border border-[var(--border-subtle)] rounded-lg p-4">
          <h4 className="h4 text-[var(--text-primary)] mb-3">{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
          
          <div className="mb-3">
            <label className="block body-sm text-[var(--text-secondary)] mb-1">Category Title</label>
            <input
              type="text"
              value={formData[category]?.title || ''}
              onChange={(e) => updateSkillCategory(category, 'title', e.target.value)}
              className="w-full px-3 py-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none"
            />
          </div>
          
          <div>
            <label className="block body-sm text-[var(--text-secondary)] mb-1">Skills (comma-separated)</label>
            <textarea
              value={formData[category]?.items?.join(', ') || ''}
              onChange={(e) => updateSkillCategory(category, 'items', e.target.value)}
              className="w-full px-3 py-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none"
              rows="2"
            />
          </div>
        </div>
      ))}
      
      <button type="submit" disabled={loading} className="btn-primary flex items-center gap-2">
        <Save size={16} />
        {loading ? 'Saving...' : 'Save Changes'}
      </button>
    </form>
  );
};

// Projects Editor Component
const ProjectsEditor = ({ data, onUpdate, loading }) => {
  const [projects, setProjects] = useState(data || []);
  const [editingProject, setEditingProject] = useState(null);

  const addProject = () => {
    const newProject = {
      id: Date.now(),
      title: '',
      status: 'Planning',
      description: '',
      is_placeholder: true
    };
    setEditingProject(newProject);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="h3 text-[var(--text-primary)]">Projects Section</h3>
        <button onClick={addProject} className="btn-primary flex items-center gap-2">
          <Plus size={16} />
          Add Project
        </button>
      </div>
      
      <div className="grid gap-4">
        {projects.map((project) => (
          <div key={project.id} className="border border-[var(--border-subtle)] rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="h4 text-[var(--text-primary)]">{project.title}</h4>
              <div className="flex gap-2">
                <button
                  onClick={() => setEditingProject(project)}
                  className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
                >
                  <Edit3 size={16} />
                </button>
                <button className="p-2 text-[var(--text-secondary)] hover:text-red-400">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            <p className="body-sm text-[var(--text-secondary)]">{project.description}</p>
            <span className="inline-block mt-2 px-2 py-1 bg-[var(--bg-tertiary)] rounded text-xs text-[var(--accent-primary)]">
              {project.status}
            </span>
          </div>
        ))}
      </div>
      
      {editingProject && (
        <ProjectForm
          project={editingProject}
          onSave={(project) => {
            // Handle save logic here
            setEditingProject(null);
            onUpdate();
          }}
          onCancel={() => setEditingProject(null)}
        />
      )}
    </div>
  );
};

const ProjectForm = ({ project, onSave, onCancel }) => {
  const [formData, setFormData] = useState(project);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[var(--bg-secondary)] rounded-lg p-6 w-full max-w-md">
        <h4 className="h4 text-[var(--text-primary)] mb-4">
          {project.id ? 'Edit Project' : 'Add Project'}
        </h4>
        
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Project Title"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            className="w-full px-3 py-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none"
          />
          
          <textarea
            placeholder="Project Description"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="w-full px-3 py-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none"
            rows="3"
          />
          
          <select
            value={formData.status}
            onChange={(e) => setFormData({...formData, status: e.target.value})}
            className="w-full px-3 py-2 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none"
          >
            <option value="Planning">Planning</option>
            <option value="In Development">In Development</option>
            <option value="Coming Soon">Coming Soon</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        
        <div className="flex gap-3 mt-6">
          <button onClick={() => onSave(formData)} className="btn-primary flex-1">
            Save
          </button>
          <button onClick={onCancel} className="btn-secondary flex-1">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;