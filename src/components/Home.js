import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';
import profilePic from '../assets/profile.jpg';

const CV_LINKS = {
  es: "https://1drv.ms/b/c/aaf1da6471b8fc2c/ESz8uHFk2vEggKqalwAAAAABNP-OPe6qbyFC42cZJhRwdA?e=BCbiKy",  // Reemplaza con el enlace real del CV en español
  en: "https://1drv.ms/b/c/aaf1da6471b8fc2c/ESz8uHFk2vEggKo3lwAAAAAB9FniMivmILk9VECJPfHlfQ?e=CZPmA8"   // Reemplaza con el enlace real del CV en inglés
};

const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="home">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <h1>Gabriel Cobeña</h1>
      <p>
        {t('summary')}
      </p>
      <a href={CV_LINKS[i18n.language]} target="_blank" rel="noreferrer" className="download-cv">{t('download_cv')}</a>
    </div>
  );
};

export default Home;
