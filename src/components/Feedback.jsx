import React from 'react'
import './Feedback.css'

export default function FeedbackPage() {

  const testimonials = [
    {
      name: 'Arun Kumar',
      role: 'Founder, TechNova',
      service: 'Web Development',
      rating: 5,
      quote: 'Trevox transformed our website into a high-converting platform. Truly professional work.'
    },
    {
      name: 'Lakshmi',
      role: 'Marketing Head, HealCare',
      service: 'SEO Optimization',
      rating: 5,
      quote: 'Our online visibility increased drastically. Appointments are coming consistently.'
    },
    {
      name: 'Rahul',
      role: 'Startup Consultant',
      service: 'UI/UX Design',
      rating: 4,
      quote: 'Clean design, smooth communication and on-time delivery. Highly recommended.'
    },
    {
      name: 'Anjali',
      role: 'CEO, FoodExpress',
      service: 'Mobile App Development',
      rating: 5,
      quote: 'Our delivery app is now the most user-friendly in the market. Customer satisfaction has doubled.'
    },
    {
      name: 'Subramanian',
      role: 'Product Manager, EduTech',
      service: 'Backend Development',
      rating: 5,
      quote: 'Scalable architecture and clean code. Our platform handles 10x more traffic without issues.'
    },
    {
      name: 'Venkatesh',
      role: 'Director, FashionHub',
      service: 'E-commerce Solution',
      rating: 4,
      quote: 'Sales increased by 300% after the redesign. The shopping experience is seamless now.'
    }
  ]

  const initials = (name) =>
    name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={i < rating ? 'star filled' : 'star'}
      >
        ★
      </span>
    ))

  return (
    <section className="feedback-section" id="feedback">
      <div className="feedback-container">

        <div className="feedback-header">
          <h2>Client says about us</h2>
          <p>
            Real experiences from businesses who trusted us to build and grow their digital presence.
          </p>
        </div>

        <div className="feedback-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="feedback-card">

              <span className="service-tag">{t.service}</span>

              <div className="stars">
                {renderStars(t.rating)}
              </div>

              <p className="quote">“{t.quote}”</p>

              <div className="profile">
                <div className="avatar">{initials(t.name)}</div>
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}