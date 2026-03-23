import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import Notification from './Notification';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [notification, setNotification] = useState(null);

  // EmailJS Configuration
  // Replace these with your EmailJS credentials from https://www.emailjs.com/
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

  // Check if EmailJS is configured
  const isEmailJSConfigured =
    EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' &&
    EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
    EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (submitStatus) setSubmitStatus(null);
  };

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if EmailJS is configured
    if (!isEmailJSConfigured) {
      showNotification('Email service is not configured. Please contact us directly at trevoxtech@gmail.com or set up EmailJS service.', 'warning');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS (no need to init, it's done automatically)
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'trevoxtech@gmail.com',
          reply_to: formData.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200 || result.text === 'OK') {
        setSubmitStatus('success');
        showNotification('Thank you for your message! We will get back to you soon.', 'success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Email sending failed');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      showNotification(`Sorry, there was an error sending your message. Please contact us directly at trevoxtech@gmail.com`, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <h3 className="section-subtitle">
            Let's discuss how we can help bring your vision to life
          </h3>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <img
                  src="/icons/email.png"
                  alt="Email Icon"
                  className="info-icon-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = 'block';
                    }
                  }}
                />
                <span className="info-icon-fallback" style={{ display: 'none' }}>📧</span>
              </div>
              <div className="info-details">
                <h3 className="info-title">Email</h3>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=trevoxtech@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  loading="lazy"
                  className="info-text info-link"
                >
                  trevoxtech@gmail.com
                </a>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <img
                  src="/icons/phone.png"
                  alt="Phone Icon"
                  className="info-icon-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = 'block';
                    }
                  }}
                />
                <span className="info-icon-fallback" style={{ display: 'none' }}>📞</span>
              </div>
              <div className="info-details">
                <h3 className="info-title">Phone</h3>
                <a
                  href="tel:+916369627698"
                  className="info-text info-link"
                >
                  6369627698
                </a>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <img
                  src="/icons/address.png"
                  alt="Address Icon"
                  className="info-icon-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = 'block';
                    }
                  }}
                /> <span className="info-icon-fallback" style={{ display: 'none' }}>📍</span>
              </div>
              <div className="info-details">
                <h3 className="info-title">Address</h3>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Erode"
                  target="_blank"
                  rel="noopener noreferrer"
                  loading="lazy"
                  className="info-text info-link"
                >
                  Erode
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus === 'success' && (
              <p className="form-success">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="form-error">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </section>
  );
};
export default Contact;