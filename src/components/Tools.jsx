import React from 'react';
import './Tools.css';

const Tools = () => {
  const tools = [
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'AWS',
    'Vercel',
    'Premiere Pro',
    'After Effects',
    'DaVinci Resolve',
    'Photoshop',
    'Illustrator',
    'Figma',
    'Android Studio',
    'Flutter',
    'React Native',
    'Expo',
    'Jira',
    'Netlify',
    'GitHub Actions',
    'Canva',
    'Cursor',
    'WhatsApp Business API',
  ];

  // Tool logo mapping - you can use local images or external URLs
  const toolLogoMap = {
    'Node.js': '/tools/nodejs.jpg',
    'Express': '/tools/express.png',
    'MongoDB': '/tools/mongodb.png',
    'PostgreSQL': '/tools/postgreesql.jpg',
    'AWS': '/tools/aws.png',
    'Vercel': '/tools/vercel.png',
    'Premiere Pro': '/tools/premiere-pro.png',
    'After Effects': '/tools/after-effects.png',
    'DaVinci Resolve': '/tools/davinci-resolve.jpg',
    'Photoshop': '/tools/photoshop.png',
    'Illustrator': '/tools/illustrator.png',
    'Figma': '/tools/figma.png',
    'Android Studio': '/tools/android-studio.png',
    'Flutter': '/tools/flutter.png',
    'React Native': '/tools/react-native.png',
    'Expo': '/tools/expo.png',
    'Jira': '/tools/jira.png',
    'Netlify': '/tools/netlify.jpg',
    'GitHub Actions': '/tools/git.png',
    'Canva': '/tools/canva.jpg',
    'Cursor': '/tools/cursor.jpg',
    'WhatsApp Business API': '/tools/whatsapp.png',
  };

  const getToolLogo = (toolName) => {
    // First check if there's a custom mapping
    if (toolLogoMap[toolName]) {
      return toolLogoMap[toolName];
    }
    // Fallback: Convert tool name to a filename-friendly format
    const filename = toolName.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '').replace(/\//g, '-');
    return `/tools/${filename}.png`;
  };

  return (
    <section id="tools" className="tools">
      <div className="tools-container">
        <div className="section-header">
          <h2 className="section-title">Tools We Use</h2>
          <p className="section-subtitle">
            Only logos shown. A quick glance at our daily toolkit.
          </p>
        </div>
        
        <div className="tools-logo-grid">
          {tools.map((tool, index) => (
            <div 
              key={index} 
              className="tool-logo-item"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              <div className="tool-logo-wrapper">
                <img
                  src={getToolLogo(tool)}
                  alt={tool}
                  className="tool-logo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = 'flex';
                    }
                  }}
                />
                <div className="tool-logo-fallback" style={{ display: 'none' }}>
                  {tool.charAt(0).toUpperCase()}
                </div>
              </div>
              <span className="tool-name">{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;

