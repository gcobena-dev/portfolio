import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Skills.css';

const skillsData = {
    'Frontend': [
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', name: 'React' },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg', name: 'Flutter' },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', name: 'JavaScript' },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', name: 'HTML5' },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', name: 'CSS3' },
    ],
    'Backend': [
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', name: 'NodeJS' },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', name: 'Python' },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', name: 'Java' },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-plain.svg', name: '.NET' },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', name: 'PHP' },
    ],
    'Database & Cloud': [
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg', name: 'SQL' },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', name: 'AWS' },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', name: 'Docker' },
    ]
};

const Skills = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = sectionRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div className={`skills ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
            <h2 className="section-title">{t('skills')}</h2>
            <div className="skills-categories">
                {Object.entries(skillsData).map(([category, skills], catIndex) => (
                    <div key={catIndex} className="skill-category">
                        <h3 className="category-title">{category}</h3>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="skill-item"
                                    style={{ animationDelay: `${(catIndex * 5 + index) * 0.1}s` }}
                                >
                                    <div className="skill-icon-wrapper">
                                        <img src={skill.url} alt={skill.name} className="skill-icon" />
                                    </div>
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
