import React from 'react';
import { useTranslation } from 'react-i18next';
import './Experience.css';
import ioet from '../assets/ioet-logo.jpeg';
import bdp from '../assets/banco-logo.jpg';
import navy from '../assets/navy-logo.png';

const calculateExperienceDurationFromString = (periodString) => {
  const match = periodString.match(/([A-Za-zÁÉÍÓÚáéíóúñ]+)(?:\sde)?\s(\d{4})\s–\s([A-Za-zÁÉÍÓÚáéíóúñ]+(?:\sde)?\s\d{4}|Present|Presente)/);

  if (!match) return periodString;

  const [, startMonthName, startYear, endPeriod] = match;
  const startDate = new Date(`${startMonthName} 1, ${startYear}`);

  let endDate;
  if (/^(Present|Presente)$/i.test(endPeriod.trim())) {
    endDate = new Date();
  } else {
    endDate = new Date(`${endPeriod} 1`);
  }

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const duration = `(${years} ${years === 1 ? 'year' : 'years'} ${months} ${months === 1 ? 'month' : 'months'})`;

  return periodString.replace(/\(.*?\)/, duration);
};

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      logo: ioet,
      company: t('company_ioet'),
      role: t('role_ioet'),
      period: calculateExperienceDurationFromString(t('period_ioet')),
      activities: t('activities_ioet', { returnObjects: true }),
      skills: t('skills_ioet', { returnObjects: true })
    },
    {
      logo: bdp,
      company: t('company_banco'),
      role: t('role_banco'),
      period: calculateExperienceDurationFromString(t('period_banco')),
      activities: t('activities_banco', { returnObjects: true }),
      skills: t('skills_banco', { returnObjects: true })
    },
    {
      logo: navy,
      company: t('company_navy'),
      role: t('role_navy'),
      period: calculateExperienceDurationFromString(t('period_navy')),
      activities: t('activities_navy', { returnObjects: true }),
      skills: t('skills_navy', { returnObjects: true })
    }
  ];

  return (
    <div className="experience">
      <h2>{t('experience')}</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <img src={exp.logo} alt={exp.company} className="company-logo" />
          <div className="experience-details">
            <h3>{exp.company}</h3>
            <h4>{exp.role}</h4>
            <span className="period">{exp.period}</span>
            <ul>
              {exp.activities.map((activity, idx) => (
                <li key={idx}>{activity}</li>
              ))}
            </ul>
            <div className="experience-skills">
              {exp.skills.map((skill, idx) => (
                <button key={idx} className="skill-btn">{skill}</button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
