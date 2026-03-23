import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Trevox</h2>
          <h3 className="section-subtitle">
            Building the future, one project at a time
          </h3>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              At Trevox, we are a passionate startup dedicated to delivering exceptional solutions
              that drive business growth and innovation. With a commitment to excellence, we help
              companies transform their vision into reality.
            </p>
            <p className="about-description">
              Our team combines creativity, technical expertise, and strategic
              thinking to deliver results that exceed expectations. We believe in
              building long-term partnerships with our clients, understanding their
              unique needs, and providing tailored solutions.
            </p>
          </div>

          <div className="about-image-wrapper">
            <div className="about-logo-container">
              <img
                src="/logo.png"
                alt="Trevox Logo"
                className="about-logo-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>

        <div className="about-features-section">
          <div className="about-features">
            <div className="feature-card" data-number="01">
              <div className="feature-icon-wrapper">
                <img
                  src="/icons/innovation.png"
                  alt="Innovation Icon"
                  className="feature-icon"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = 'flex';
                    }
                  }}
                />
                <div className="feature-icon-fallback" style={{ display: 'none' }}>🚀</div>
                <div className="feature-icon-glow"></div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Innovation</h3>
                <p className="feature-text">
                  We stay ahead of the curve with cutting-edge technologies and
                  innovative approaches.
                </p>
              </div>
            </div>
            <div className="feature-card" data-number="02">
              <div className="feature-icon-wrapper">
                <img
                  src="/icons/quality.png"
                  alt="Quality Icon"
                  className="feature-icon"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = 'flex';
                    }
                  }}
                />
                <div className="feature-icon-fallback" style={{ display: 'none' }}>💎</div>
                <div className="feature-icon-glow"></div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Quality</h3>
                <p className="feature-text">
                  Every project is crafted with attention to detail and a commitment
                  to excellence.
                </p>
              </div>
            </div>
            <div className="feature-card" data-number="03">
              <div className="feature-icon-wrapper">
                <img
                  src="/icons/patnership.png"
                  alt="Partnership Icon"
                  className="feature-icon"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = 'flex';
                    }
                  }}
                />
                <div className="feature-icon-fallback" style={{ display: 'none' }}>🤝</div>
                <div className="feature-icon-glow"></div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Partnership</h3>
                <p className="feature-text">
                  We build lasting relationships based on trust, transparency, and
                  mutual success.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="founders-section">
          <h3 className="founders-title">Our Founders</h3>
          <div className="founders-grid">
            <div className="founder-card">
              <div className="founder-avatar">
                <img
                  src="/founders/pra.JPG"
                  alt="Pranitha S G"
                  className="founder-photo"
                  onError={(e) => {
                    if (e && e.target) {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'flex';
                      }
                    }
                  }}
                />
                <span className="founder-initial" style={{ display: 'none' }}>P</span>
              </div>
              <h4 className="founder-name">Pranitha S G</h4>
              <p className="founder-role">Founder</p>
            </div>
            <div className="founder-card">
              <div className="founder-avatar">
                <img
                  src="/founders/balaman.JPEG"
                  alt="Balamurugan M"
                  className="founder-photo"
                  onError={(e) => {
                    if (e && e.target) {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'flex';
                      }
                    }
                  }}
                />
                <span className="founder-initial" style={{ display: 'none' }}>B</span>
              </div>
              <h4 className="founder-name">Balamurugan M</h4>
              <p className="founder-role">Co-Founder</p>
            </div>
            <div className="founder-card">
              <div className="founder-avatar">
                <img
                  src="/founders/pish.jpeg"
                  alt="Pranish T"
                  className="founder-photo"
                  onError={(e) => {
                    if (e && e.target) {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'flex';
                      }
                    }
                  }}
                />
                <span className="founder-initial" style={{ display: 'none' }}>P</span>
              </div>
              <h4 className="founder-name">Pranish T</h4>
              <p className="founder-role">Co-Founder</p>
            </div>
            <div className="founder-card">
              <div className="founder-avatar">
                <img
                  src="/founders/ah.jpeg"
                  alt="Asish Khan A"
                  className="founder-photo"
                  onError={(e) => {
                    if (e && e.target) {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'flex';
                      }
                    }
                  }}
                />
                <span className="founder-initial" style={{ display: 'none' }}>A</span>
              </div>
              <h4 className="founder-name">Asish Khan A</h4>
              <p className="founder-role">Co-Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;