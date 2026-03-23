import './Hero.css';
import SnowAnimation from './SnowAnimation';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <SnowAnimation />
      <div className="hero-container">
        <div className="hero-content">

          <h1 className="hero-title">
            Building the <span className="hero-brand">future</span>, <br />
            one project at a time.
          </h1>
          <p className="hero-subtitle">
            Empowering businesses with innovative solutions and exceptional service.
            We transform ideas into reality.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get Started
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                const element = document.getElementById('portfolio');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Our Work
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;


