import React, { useRef } from 'react';
import './Services.css';

const ServiceCard = ({ service, index, videoSource }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => { });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="service-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="service-icon">
        {videoSource && (
          <video
            ref={videoRef}
            className="service-video"
            loop
            muted
            playsInline
            preload="metadata"
            poster="/logo.png"
          >
            <source src={videoSource.mp4} type="video/mp4" />
            <source src={videoSource.webm} type="video/webm" />
          </video>
        )}
        <span className="service-icon-label" style={{ display: videoSource ? 'none' : 'block' }}>
          {service.icon}
        </span>
      </div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
    },
    {
      icon: '📲',
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern frameworks.',
    },
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and increase organic traffic with our comprehensive SEO strategies.',
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience and engagement.',
    },
    {
      icon: '📱',
      title: 'Meta Ads',
      description: 'Strategic Facebook and Instagram advertising campaigns to reach your target audience and drive conversions.',
    },
    {
      icon: '📸',
      title: 'Photography',
      description: 'Professional photography services to capture your brand, products, and events with stunning visuals.',
    },
    {
      icon: '🎥',
      title: 'Videography',
      description: 'High-quality video production for commercials, promotional content, and brand storytelling.',
    },
    {
      icon: '📊',
      title: 'Consultancy',
      description: 'Strategic consulting services to help you make informed business and technology decisions.',
    },
    {
      icon: '🚀',
      title: 'Product Development',
      description: 'End-to-end product development from concept to launch, turning your ideas into successful products.',
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to help your business grow and operate efficiently.',
    },
  ];

  const videoMap = {
    0: { mp4: '/videos/web.mp4', webm: '/videos/web-development.webm' },
    1: { mp4: '/videos/app.mp4', webm: '/videos/app-development.webm' },
    2: { mp4: '/videos/seo .mp4', webm: '/videos/seo.webm' },
    3: { mp4: '/videos/ui.mp4', webm: '/videos/ui-ux-design.webm' },
    4: { mp4: '/videos/meta.mp4', webm: '/videos/meta-ads.webm' },
    5: { mp4: '/videos/photography.mp4', webm: '/videos/photography.webm' },
    6: { mp4: '/videos/videography.mp4', webm: '/videos/videography.webm' },
    7: { mp4: '/videos/consultancy.mp4', webm: '/videos/consultancy.webm' },
    8: { mp4: '/videos/product.mp4', webm: '/videos/product-development.webm' },
    9: { mp4: '/videos/cloud.mp4', webm: '/videos/cloud.webm' }
  };

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions tailored to your needs
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              videoSource={videoMap[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


