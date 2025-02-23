import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/gcobena-dev" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/gcobena" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.instagram.com/gcobena.dev/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.tiktok.com/@gcobena.dev" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
      </div>
      <p>&copy; 2025 Gabriel Cobena. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
