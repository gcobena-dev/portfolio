import React, { useState } from 'react';
import './Header.css';
import { FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Header = ({ toggleTheme }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { i18n, t } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(prev => !prev);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="menu-container">
                    <span className="hamburger" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </span>
                    <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
                        <ul>
                            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>{t('home')}</a></li>
                            <li><a href="#skills" onClick={() => setMobileMenuOpen(false)}>{t('skills')}</a></li>
                            <li><a href="#experience" onClick={() => setMobileMenuOpen(false)}>{t('experience')}</a></li>
                            <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>{t('projects')}</a></li>
                            <li><a href="#education" onClick={() => setMobileMenuOpen(false)}>{t('education')}</a></li>
                            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>{t('contact')}</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="header-actions">
                    <span className="lang-toggle" onClick={toggleLanguage}>
                        {i18n.language === 'en' ? '🇺🇸' : '🇪🇸'}
                    </span>
                    <span className="theme-toggle" onClick={toggleTheme}>
                        <FaMoon />
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
