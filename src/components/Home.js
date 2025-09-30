import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';
import profilePic from '../assets/profile.jpg';

const CV_LINKS = {
  es: "https://1drv.ms/b/c/aaf1da6471b8fc2c/ESz8uHFk2vEggKqalwAAAAABNP-OPe6qbyFC42cZJhRwdA?e=BCbiKy",
  en: "https://1drv.ms/b/c/aaf1da6471b8fc2c/ESz8uHFk2vEggKo3lwAAAAAB9FniMivmILk9VECJPfHlfQ?e=CZPmA8"
};

const Home = () => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roles = [
    'Full-Stack Developer',
    'Software Engineer',
    'Mobile Developer'
  ];

  return (
    <div className={`home ${isVisible ? 'fade-in' : ''}`}>
      <div className="hero-content">
        <div className="profile-container">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <div className="profile-glow"></div>
        </div>

        <h1 className="hero-title">
          <span className="greeting">Hi, I'm</span>
          <span className="name">Gabriel Cobeña</span>
        </h1>

        <div className="roles-container">
          {roles.map((role, index) => (
            <span key={index} className="role" style={{ animationDelay: `${index * 0.2}s` }}>
              {role}
            </span>
          ))}
        </div>

        <p className="hero-description">
          {t('summary')}
        </p>

        <div className="cta-buttons">
          <a href={CV_LINKS[i18n.language]} target="_blank" rel="noreferrer" className="btn-primary">
            {t('download_cv')}
          </a>
          <a href="#contact" className="btn-secondary">
            {t('contact')}
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </div>
  );
};

export default Home;
