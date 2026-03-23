import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
          <Logo />
          <span className="logo-text">Trevox</span>
        </div>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
          <a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>Portfolio</a>
          <a href="#tools" onClick={(e) => { e.preventDefault(); scrollToSection('tools'); }}>Tools</a>
          <a href="#feedback" onClick={(e) => { e.preventDefault(); scrollToSection('feedback'); }}>Feedback</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
        </div>

        <div className="navbar-actions">
          <ThemeToggle />
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


