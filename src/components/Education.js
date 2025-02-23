import React from 'react';
import { useTranslation } from 'react-i18next';
import './Education.css';


const Education = () => {
    const { t } = useTranslation();

    const educationData = [
        {
            institution: 'Escuela Superior Politécnica del Litoral, Guayaquil (Ecuador)',
            degree: t('degree_msc'),
            date: 'Nov 2019'
        },
        {
            institution: 'Pontificia Universidad Católica del Ecuador, Esmeraldas (Ecuador)',
            degree: t('degree_eng'),
            date: 'May 2016'
        }
    ];

    const certificationsData = [
        { title: t('cert_deutsch'), institution: 'PUCE', year: 2023 },
        { title: t('cert_code_challenge'), institution: 'GIZ Ecuador', year: 2023 },
        { title: t('cert_cross_culture'), institution: 'GIZ Ecuador', year: 2023 },
        { title: t('cert_soft_skills'), institution: 'GIZ Ecuador', year: 2023 },
        { title: t('cert_professional_dev'), institution: 'GIZ Ecuador', year: 2023 },
        { title: t('cert_it_prep'), institution: 'GIZ Ecuador', year: 2023 }
    ];
    return (
        <div className="education">
            <h2>{t('education_title')}</h2>
            <div className="education-section">
                <h3>{t('education')}</h3>
                {educationData.map((edu, index) => (
                    <div key={index} className="education-item">
                        <h4>{edu.degree}</h4>
                        <p>{edu.institution}</p>
                        <span>{edu.date}</span>
                    </div>
                ))}
            </div>
            
            <div className="certifications-section">
                <h3>{t('certifications')}</h3>
                <ul className="certifications-list">
                    {certificationsData.map((cert, index) => (
                        <li key={index}>
                            <strong>{cert.title}</strong> - {cert.institution} ({cert.year})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Education;
