import React from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.css';
import { FaCode, FaMobileAlt, FaCloud, FaLeaf, FaGithub, FaExternalLinkAlt, FaServer } from 'react-icons/fa';

const Projects = () => {
  const { t } = useTranslation();

  const clientProjects = [
    {
      title: t('project_title_1', 'AI-LMS Platform'),
      description: t('project_ailms_desc'),
      technologies: ['Python', 'OpenAI', 'Pinecone', 'AWS', 'PostgreSQL'],
      icon: FaCloud,
      category: t('project_category_edutech', 'AI & EdTech Solutions')
    },
    {
      title: t('project_title_2', 'Forms Core Backend'),
      description: t('project_forms_desc'),
      technologies: ['Python', 'Flask', 'PostgreSQL', 'Docker'],
      icon: FaCode,
      category: t('project_category_backend', 'Backend Solutions')
    },
    {
      title: t('project_title_3', 'AI Chat Library'),
      description: t('project_sentellent_core_desc'),
      technologies: ['Python', 'AI/ML', 'Cloud Infrastructure'],
      icon: FaCloud,
      category: t('project_category_ai', 'AI & Cloud Solutions')
    },
    {
      title: t('project_title_4', 'Donation & Social Network Platform'),
      description: t('project_easy_donate_desc'),
      technologies: ['Flutter', 'Python', 'AWS', 'Lambda'],
      icon: FaMobileAlt,
      category: t('project_category_mobile', 'Mobile & Web Development')
    },
    {
      title: t('project_title_5', 'AI Content Creation Platform'),
      description: t('project_sentellent_desc'),
      technologies: ['Python', 'LLM', 'AWS', 'Pinecone'],
      icon: FaCloud,
      category: t('project_category_ai', 'AI & Cloud Solutions')
    },
    {
      title: t('project_title_6', 'Personnel Management System'),
      description: t('project_perseo_desc'),
      technologies: ['.NET', 'SQL', 'JavaScript', 'GIS'],
      icon: FaCode,
      category: t('project_category_enterprise', 'Enterprise Solutions')
    }
  ];

  const personalProjects = [
    {
      title: t('personal_project_title_1', 'LecheFácil - Frontend'),
      description: t('personal_project_lechefacil_frontend_desc', 'Comprehensive dairy farm management web and mobile application for tracking milk production, animal health, and business operations. Built with offline capabilities using Capacitor.'),
      technologies: ['React', 'TypeScript', 'Capacitor', 'TailwindCSS', 'Vite'],
      icon: FaLeaf,
      category: t('project_category_agritech', 'AgriTech Solutions'),
      github: 'https://github.com/gcobena-dev/lechefacil-frontend',
      demo: 'https://lechefacil.gcobena.dev/'
    },
    {
      title: t('personal_project_title_2', 'LecheFácil - Backend'),
      description: t('personal_project_lechefacil_backend_desc', 'Multi-tenant REST API backend for dairy farm management system. Provides authentication, data persistence, and business logic for managing farms, animals, production records, and analytics.'),
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic'],
      icon: FaServer,
      category: t('project_category_agritech', 'AgriTech Solutions'),
      api: 'https://lechefacil-api.gcobena.dev/docs'
    }
  ];

  return (
    <div className="projects">
      <h2 className="section-title">{t('projects')}</h2>

      {/* Client Projects */}
      <div className="projects-section">
        <h3 className="projects-section-title">{t('client_projects', 'Client Projects')}</h3>
        <p className="projects-subtitle">
          {t('projects_note', 'Featured projects developed for clients under confidentiality agreements')}
        </p>
        <div className="projects-grid">
          {clientProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="project-card">
                <div className="project-icon-wrapper">
                  <IconComponent className="project-main-icon" />
                </div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Personal Projects */}
      <div className="projects-section">
        <h3 className="projects-section-title">{t('personal_projects', 'Personal Projects')}</h3>
        <p className="projects-subtitle">
          {t('personal_projects_note', 'Open source and personal projects available for exploration')}
        </p>
        <div className="projects-grid">
          {personalProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="project-card personal-project-card">
                <div className="project-icon-wrapper">
                  <IconComponent className="project-main-icon" />
                </div>
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  {(project.github || project.demo || project.api) && (
                    <div className="project-links">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                          <FaGithub /> {t('view_code', 'View Code')}
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                          <FaExternalLinkAlt /> {t('view_demo', 'View Demo')}
                        </a>
                      )}
                      {project.api && (
                        <a href={project.api} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                          <FaServer /> {t('view_api', 'View API')}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
