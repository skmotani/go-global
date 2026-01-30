import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ paddingBottom: 'var(--space-12)' }}>
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="label">About Motani</span>
              <h1 className="display-1" style={{ marginTop: 'var(--space-4)' }}>
                20+ Years of<br/>
                <span className="gradient-text">Export Excellence</span>
              </h1>
              <p className="hero-subtitle">
                We don't just find customers—we build global brands. Our boots-on-the-ground 
                experience across 15+ countries has helped 500+ manufacturers scale internationally.
              </p>
            </div>
            <div className="hero-image">
              <div className="hero-image-placeholder">
                🌍
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="heading-1 mb-8">Our Approach</h2>
          
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="service-card">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 className="service-title">Compliance First</h3>
              <p className="service-desc">
                Every recommendation is grounded in regulatory compliance. We ensure your exports 
                meet all FTA requirements for duty-free access.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3 className="service-title">Global Network</h3>
              <p className="service-desc">
                Our vetted network of agents, distributors, and buyers across UAE, UK, EU, and 
                Australia opens doors that others can't.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="20" x2="12" y2="10"/>
                  <line x1="18" y1="20" x2="18" y2="4"/>
                  <line x1="6" y1="20" x2="6" y2="16"/>
                </svg>
              </div>
              <h3 className="service-title">Data-Driven</h3>
              <p className="service-desc">
                We use market intelligence and trade data to identify the highest-value 
                opportunities for your specific products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <h2 className="heading-1 mb-4">Ready to Scale Globally?</h2>
          <p className="body-lg text-muted mb-8" style={{ maxWidth: '500px', margin: '0 auto var(--space-8)' }}>
            Let's discuss how we can help your manufacturing business reach new markets.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get Your Export Plan
          </Link>
        </div>
      </section>
    </>
  )
}

export default About
