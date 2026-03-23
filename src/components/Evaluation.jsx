import React, { useState } from 'react';
import './Evaluation.css';

const Evaluation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);

  const questions = [
    {
      category: 'Business Overview',
      questions: [
        {
          id: 'business_type',
          question: 'What type of business do you have?',
          type: 'select',
          options: ['E-commerce', 'Service-based', 'SaaS/Technology', 'Local Business', 'B2B', 'Other']
        },
        {
          id: 'business_stage',
          question: 'What stage is your business at?',
          type: 'select',
          options: ['Just starting', 'Growing (1-3 years)', 'Established (3+ years)', 'Scaling rapidly']
        },
        {
          id: 'main_goal',
          question: 'What is your primary digital marketing goal?',
          type: 'select',
          options: ['Increase website traffic', 'Generate more leads', 'Boost online sales', 'Build brand awareness', 'Improve online presence']
        }
      ]
    },
    {
      category: 'SEO & Search',
      questions: [
        {
          id: 'website_exists',
          question: 'Do you have a website?',
          type: 'select',
          options: ['Yes, fully functional', 'Yes, but needs improvement', 'No, planning to build one', 'No website needed']
        },
        {
          id: 'seo_knowledge',
          question: 'How would you rate your current SEO performance?',
          type: 'select',
          options: ['Excellent - ranking well', 'Good - some rankings', 'Fair - limited visibility', 'Poor - not ranking', 'Not sure']
        },
        {
          id: 'organic_traffic',
          question: 'What percentage of your traffic comes from organic search?',
          type: 'select',
          options: ['More than 50%', '25-50%', 'Less than 25%', "Don't know", 'None']
        }
      ]
    },
    {
      category: 'Paid Advertising',
      questions: [
        {
          id: 'ads_running',
          question: 'Are you currently running paid ads?',
          type: 'select',
          options: ['Yes, Google Ads', 'Yes, Meta/Facebook Ads', 'Yes, both', 'No, but interested', 'No, not interested']
        },
        {
          id: 'ads_budget',
          question: 'What is your monthly ad spend budget?',
          type: 'select',
          options: ['Less than ₹10,000', '₹10,000 - ₹50,000', '₹50,000 - ₹1,00,000', 'More than ₹1,00,000', 'Not sure']
        },
        {
          id: 'ads_results',
          question: 'How satisfied are you with your current ad performance?',
          type: 'select',
          options: ['Very satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Not running ads']
        }
      ]
    },
    {
      category: 'Content & Social Media',
      questions: [
        {
          id: 'content_strategy',
          question: 'Do you have a content marketing strategy?',
          type: 'select',
          options: ['Yes, well-defined', 'Yes, but needs work', 'Somewhat', 'No, but want one', 'No, not needed']
        },
        {
          id: 'social_media',
          question: 'Which social media platforms are you active on?',
          type: 'multiselect',
          options: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter/X', 'YouTube', 'TikTok', 'None']
        },
        {
          id: 'content_frequency',
          question: 'How often do you post content?',
          type: 'select',
          options: ['Daily', '2-3 times per week', 'Weekly', 'Monthly', 'Rarely/Never']
        }
      ]
    },
    {
      category: 'Analytics & Tracking',
      questions: [
        {
          id: 'analytics_setup',
          question: 'Do you track your website analytics?',
          type: 'select',
          options: ['Yes, Google Analytics', 'Yes, other tools', 'Somewhat', 'No, but want to', 'No, not needed']
        },
        {
          id: 'conversion_tracking',
          question: 'Do you track conversions (leads, sales, etc.)?',
          type: 'select',
          options: ['Yes, fully set up', 'Yes, partially', 'No, but want to', 'No, not needed']
        },
        {
          id: 'reporting',
          question: 'How often do you review your marketing performance?',
          type: 'select',
          options: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Rarely/Never']
        }
      ]
    }
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateResults = () => {
    const recommendations = [];
    const priorities = [];

    // SEO Analysis
    if (answers.seo_knowledge === 'Poor - not ranking' || answers.seo_knowledge === 'Not sure') {
      recommendations.push({
        service: 'SEO Optimization',
        priority: 'High',
        description: 'Your website needs SEO optimization to improve search visibility and organic traffic.',
        icon: '🔍'
      });
      priorities.push('SEO');
    }

    if (answers.website_exists === 'Yes, but needs improvement' || answers.website_exists === 'No, planning to build one') {
      recommendations.push({
        service: 'Web Development',
        priority: 'High',
        description: 'A modern, fast-loading website is essential for digital success.',
        icon: '💻'
      });
      priorities.push('Web Development');
    }

    // Ads Analysis
    if (answers.ads_running === 'No, but interested' || answers.ads_results === 'Dissatisfied') {
      recommendations.push({
        service: 'Meta Ads',
        priority: 'Medium',
        description: 'Paid advertising can quickly drive targeted traffic and conversions.',
        icon: '📱'
      });
      priorities.push('Paid Advertising');
    }

    // Content Analysis
    if (answers.content_strategy === 'No, but want one' || answers.content_frequency === 'Rarely/Never') {
      recommendations.push({
        service: 'Content Marketing',
        priority: 'Medium',
        description: 'Regular, valuable content builds trust and improves SEO rankings.',
        icon: '✍️'
      });
      priorities.push('Content');
    }

    // Analytics Analysis
    if (answers.analytics_setup === 'No, but want to' || answers.conversion_tracking === 'No, but want to') {
      recommendations.push({
        service: 'Analytics Setup',
        priority: 'High',
        description: 'Proper tracking is essential to measure ROI and optimize campaigns.',
        icon: '📊'
      });
      priorities.push('Analytics');
    }

    // Default recommendations if none found
    if (recommendations.length === 0) {
      recommendations.push({
        service: 'Digital Marketing Audit',
        priority: 'High',
        description: 'A comprehensive audit will identify opportunities for growth.',
        icon: '🔎'
      });
    }

    setResults({
      recommendations,
      priorities,
      score: calculateScore()
    });
    setCurrentStep(questions.length);
  };

  const calculateScore = () => {
    let score = 0;
    let maxScore = 0;

    // SEO Score
    const seoScores = {
      'Excellent - ranking well': 5,
      'Good - some rankings': 4,
      'Fair - limited visibility': 3,
      'Poor - not ranking': 1,
      'Not sure': 2
    };
    score += seoScores[answers.seo_knowledge] || 0;
    maxScore += 5;

    // Ads Score
    const adsScores = {
      'Very satisfied': 5,
      'Satisfied': 4,
      'Neutral': 3,
      'Dissatisfied': 1,
      'Not running ads': 2
    };
    score += adsScores[answers.ads_results] || 0;
    maxScore += 5;

    // Content Score
    const contentScores = {
      'Yes, well-defined': 5,
      'Yes, but needs work': 3,
      'Somewhat': 2,
      'No, but want one': 1,
      'No, not needed': 0
    };
    score += contentScores[answers.content_strategy] || 0;
    maxScore += 5;

    // Analytics Score
    const analyticsScores = {
      'Yes, Google Analytics': 5,
      'Yes, other tools': 4,
      'Somewhat': 2,
      'No, but want to': 1,
      'No, not needed': 0
    };
    score += analyticsScores[answers.analytics_setup] || 0;
    maxScore += 5;

    return Math.round((score / maxScore) * 100);
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setResults(null);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentCategory = questions[currentStep];

  return (
    <section id="evaluation" className="evaluation">
      <div className="evaluation-container">
        {/* Header */}
        <div className="evaluation-header">
          <h1 className="section-title">Digital Marketing Evaluation</h1>
          <p className="section-subtitle">
            Assess your current digital marketing status and discover opportunities for growth
          </p>
        </div>

        {/* Progress Bar */}
        {!results && (
          <div className="progress-container">
            <div className="progress-info">
              <span className="progress-text">
                Step {currentStep + 1} of {questions.length}
              </span>
              <span className="progress-category">
                {currentCategory?.category}
              </span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{
                  width: `${((currentStep + 1) / questions.length) * 100}%`
                }}
              />
            </div>
          </div>
        )}

        {/* Questions Form */}
        {!results && currentCategory && (
          <div className="evaluation-card">
            <h2 className="category-title">{currentCategory.category}</h2>
            <div className="questions-container">
              {currentCategory.questions.map((q) => (
                <div key={q.id} className="question-group">
                  <label className="question-label">{q.question}</label>
                  {q.type === 'select' ? (
                    <select
                      value={answers[q.id] || ''}
                      onChange={(e) => handleAnswer(q.id, e.target.value)}
                      className="question-select"
                    >
                      <option value="">Select an option...</option>
                      {q.options.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : q.type === 'multiselect' ? (
                    <div className="multiselect-container">
                      {q.options.map((opt) => {
                        const selected = Array.isArray(answers[q.id]) && answers[q.id].includes(opt);
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => {
                              const current = Array.isArray(answers[q.id]) ? answers[q.id] : [];
                              const updated = selected
                                ? current.filter(o => o !== opt)
                                : [...current, opt];
                              handleAnswer(q.id, updated);
                            }}
                            className={`multiselect-option ${selected ? 'selected' : ''}`}
                          >
                            {selected ? '✓ ' : ''}{opt}
                          </button>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="eval-navigation">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="btn btn-secondary"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="btn btn-primary"
              >
                {currentStep === questions.length - 1 ? 'Get Results' : 'Next'}
              </button>
            </div>
          </div>
        )}

        {/* Results */}
        {results && (
          <div className="results-container">
            {/* Score Card */}
            <div className="score-card">
              <h2 className="score-title">Your Digital Marketing Score</h2>
              <div className="score-circle">
                {results.score}%
              </div>
              <p className="score-description">
                {results.score >= 80 ? 'Excellent! Your digital marketing is well-optimized.' :
                 results.score >= 60 ? 'Good! There are opportunities for improvement.' :
                 results.score >= 40 ? 'Fair. Significant improvements needed.' :
                 'Needs attention. Consider professional digital marketing support.'}
              </p>
            </div>

            {/* Recommendations */}
            <div className="recommendations-section">
              <h2 className="recommendations-title">Recommended Services</h2>
              <div className="recommendations-grid">
                {results.recommendations.map((rec, idx) => (
                  <div key={idx} className="recommendation-card">
                    <div className="rec-header">
                      <span className="rec-icon">{rec.icon}</span>
                      <div className="rec-info">
                        <h3 className="rec-service">{rec.service}</h3>
                        <span className={`rec-priority ${rec.priority.toLowerCase()}`}>
                          {rec.priority} Priority
                        </span>
                      </div>
                    </div>
                    <p className="rec-description">{rec.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps */}
            <div className="next-steps-card">
              <h3 className="next-steps-title">Ready to Take Action?</h3>
              <p className="next-steps-text">
                Get a free consultation with our experts to discuss your specific needs and create a customized digital marketing strategy.
              </p>
              <div className="next-steps-buttons">
                <button className="btn btn-primary" onClick={scrollToContact}>
                  Get Free Consultation
                </button>
                <button className="btn btn-secondary" onClick={scrollToServices}>
                  View Our Services
                </button>
                <button className="btn btn-secondary" onClick={handleRestart}>
                  Retake Evaluation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Evaluation;
