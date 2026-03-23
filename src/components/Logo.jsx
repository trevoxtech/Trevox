import React from 'react';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-svg"
      >
        {/* Bottom Chevron (Dark Blue) */}
        <path
          d="M20 75 L50 45 L80 75"
          stroke="#00296b"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Top Chevron (Light Blue) */}
        <path
          d="M20 50 L50 20 L80 50"
          stroke="#00b4d8"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Logo;

