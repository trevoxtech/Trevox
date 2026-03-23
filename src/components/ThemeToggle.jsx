import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <div className="theme-toggle-icon">
        {theme === 'light' ? (
          <span className="theme-icon">🌙</span>
        ) : (
          <span className="theme-icon">☀️</span>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;


