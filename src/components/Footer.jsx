import React from 'react';
import './Footer.css';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <Logo />
              <span className="footer-logo-text">Trevox</span>
            </div>
            <p className="footer-description">
              Empowering businesses with innovative solutions and exceptional service.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h3 className="footer-title">Company</h3>
              <ul className="footer-list">
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#tools" onClick={(e) => { e.preventDefault(); document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' }); }}>Tools</a></li>
                <li><a href="#feedback" onClick={(e) => { e.preventDefault(); document.getElementById('feedback')?.scrollIntoView({ behavior: 'smooth' }); }}>Feedback</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            
            <div className="footer-column">
              <h3 className="footer-title">Connect</h3>
              <ul className="footer-list">
                <li><a href="https://www.instagram.com/trevoxtech/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/trevox-tech-b2b004394" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/trevoxtech" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


