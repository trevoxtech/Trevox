import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern, scalable e-commerce solution with advanced features.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Corporate Website',
      category: 'Web Design',
      description: 'Beautiful, responsive corporate website with modern UI/UX.',
      tech: ['Node.js', 'React', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
      url: 'https://marketiqsolutions.in/',
    },
    {
      title: 'Hospital Website',
      category: 'Healthcare',
      description: 'Modern healthcare platform with online appointment booking, UPI payments, and comprehensive patient care services.',
      tech: ['React', 'Node.js', 'Whatsapp Api'],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
      url: 'https://athikachildcare.com/',
    },
    {
      title: 'Tiles Store Website',
      category: 'E-Commerce',
      description: 'Premium tiles showcase platform with detailed product catalog, WhatsApp inquiry integration, and seamless customer experience.',
      tech: ['React', 'Node.js', 'WhatsApp API'],
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      url: 'https://sreeshivashakthitiles.in/',
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="section-header">
          <h2 className="section-title">Our Portfolio</h2>
          <h3 className="section-subtitle">
            Showcasing our best work and successful projects
          </h3>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => {
            const cardContent = (
              <>
                <div className="portfolio-image">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="portfolio-img"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/logo.png';
                        e.target.style.objectFit = 'contain';
                        e.target.style.padding = '2rem';
                        e.target.style.backgroundColor = '#f5f7fa';
                      }}
                    />
                  ) : (
                    <div className="portfolio-placeholder">
                      <img
                        src="/logo.png"
                        alt="Trevox Logo"
                        className="portfolio-placeholder-logo"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const fallback = e.target.nextSibling;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <span className="portfolio-number" style={{ display: 'none' }}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  )}
                </div>
                <div className="portfolio-content">
                  <span className="portfolio-category">{project.category}</span>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
                  <div className="portfolio-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </>
            );

            return project.url ? (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-card portfolio-card-link"
              >
                {cardContent}
              </a>
            ) : (
              <div key={index} className="portfolio-card">
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;


