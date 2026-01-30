import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  const ftaSlides = [
    {
      flag: '🇬🇧',
      flagUrl: 'https://flagcdn.com/w80/gb.png',
      country: 'United Kingdom',
      fta: 'UK-India FTA',
      ftaDate: 'Signed May 2025',
      currentExport: '$18.3B',
      targetExport: '$50B',
      targetYear: '2030',
      topProducts: 'Textiles, Gems & Jewelry, Pharma, Auto Parts',
      highlight: '99% tariff elimination',
      gradientFrom: '#012169',
      gradientTo: '#C8102E'
    },
    {
      flag: '🇦🇪',
      flagUrl: 'https://flagcdn.com/w80/ae.png',
      country: 'UAE',
      fta: 'India-UAE CEPA',
      ftaDate: 'Signed Feb 2022',
      currentExport: '$31.3B',
      targetExport: '$100B',
      targetYear: '2030',
      topProducts: 'Gems & Jewelry, Food Products, Textiles, Engineering',
      highlight: 'Zero duty on 80%+ goods',
      gradientFrom: '#00732F',
      gradientTo: '#FF0000'
    },
    {
      flag: '🇪🇺',
      flagUrl: 'https://flagcdn.com/w80/eu.png',
      country: 'European Union',
      fta: 'India-EU FTA',
      ftaDate: 'Negotiations 2024-25',
      currentExport: '$75.8B',
      targetExport: '$150B',
      targetYear: '2030',
      topProducts: 'Chemicals, Leather, Marine Products, Electricals',
      highlight: '€88B market opportunity',
      gradientFrom: '#003399',
      gradientTo: '#FFCC00'
    },
    {
      flag: '🇦🇺',
      flagUrl: 'https://flagcdn.com/w80/au.png',
      country: 'Australia',
      fta: 'India-Australia ECTA',
      ftaDate: 'Signed April 2022',
      currentExport: '$8.3B',
      targetExport: '$45B',
      targetYear: '2030',
      topProducts: 'Textiles, Footwear, Pharma, Furniture',
      highlight: 'Zero duty on 85% tariff lines',
      gradientFrom: '#00008B',
      gradientTo: '#FFCD00'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % ftaSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const current = ftaSlides[activeSlide]

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content animate-fade-in">

            
            <span className="label hero-label">⚡ INDIA GLOBAL TRADE SOLUTIONS</span>
            
            <h1 className="display-1 hero-title">
              Empowering Indian<br/>
              Manufacturers to<br/>
              <span className="gradient-text">Export Globally</span>
            </h1>
            
            <p className="hero-subtitle" style={{ fontSize: '16px' }}>
              Use India's newest FTAs to access the UAE, UK, EU, Australia and other 
              high-value markets at lower or zero duty to double your sales in next 36 months.
            </p>
            
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Export Plan
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
          
          {/* FTA Slider Card */}
          <div className="fta-card-slider" key={activeSlide}>
            <div 
              className="fta-card-banner"
              style={{ 
                background: `linear-gradient(135deg, ${current.gradientFrom} 0%, ${current.gradientTo} 100%)`
              }}
            >
              <div className="fta-card-banner-content">
                <div className="fta-card-country-info">
                  <h3 className="fta-card-country">{current.country}</h3>
                  <span className="fta-card-fta-name">{current.fta}</span>
                </div>
              </div>
              <div className="fta-card-date">{current.ftaDate}</div>
            </div>
            
            <div className="fta-card-body">
              <div className="fta-card-highlight">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {current.highlight}
              </div>
              
              <div className="fta-export-comparison">
                <div className="fta-export-item">
                  <span className="fta-export-label">Current Export</span>
                  <span className="fta-export-value current">{current.currentExport}</span>
                </div>
                <div className="fta-export-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
                <div className="fta-export-item">
                  <span className="fta-export-label">Target by {current.targetYear}</span>
                  <span className="fta-export-value target">{current.targetExport}</span>
                </div>
              </div>
              
              <div className="fta-products-section">
                <span className="fta-products-label">Key Export Categories</span>
                <p className="fta-products-list">{current.topProducts}</p>
              </div>
              
              <Link to="/fta-hub" className="fta-card-link">
                Explore {current.country} Opportunities →
              </Link>
            </div>
            
            {/* Navigation */}
            <div className="fta-nav-dots">
              {ftaSlides.map((slide, idx) => (
                <button
                  key={idx}
                  className={`fta-nav-dot ${idx === activeSlide ? 'active' : ''}`}
                  onClick={() => setActiveSlide(idx)}
                  aria-label={slide.country}
                >
                  <img src={slide.flagUrl} alt={slide.country} className="fta-nav-flag" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-brand-logo {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 12px;
          text-decoration: none;
        }
        
        .hero-brand-icon {
          font-size: 18px;
          opacity: 0.8;
        }
        
        .hero-brand-text {
          font-size: 20px;
          font-weight: 700;
          color: #0F172A;
          letter-spacing: 0.3px;
        }
        
        .hero-brand-logo:hover .hero-brand-text {
          color: var(--primary);
        }
        
        @media (max-width: 768px) {
          .hero-brand-text {
            font-size: 17px;
          }
          
          .hero-brand-icon {
            font-size: 16px;
          }
        }
        
        .fta-card-slider {
          background: var(--white);
          border-radius: var(--radius-2xl);
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
          animation: slideIn 0.5s ease-out;
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fta-card-banner {
          padding: var(--space-6);
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        
        .fta-card-banner-content {
          display: flex;
          align-items: center;
          gap: var(--space-4);
        }
        
        .fta-card-flag-wrapper {
          width: 80px;
          height: 80px;
          background: rgba(255,255,255,0.95);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          flex-shrink: 0;
          overflow: hidden;
        }
        
        .fta-card-flag {
          width: 56px;
          height: auto;
          border-radius: 3px;
        }
        
        .fta-card-country {
          font-size: var(--text-2xl);
          font-weight: 700;
          margin: 0;
          color: white;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }
        
        .fta-card-fta-name {
          font-size: var(--text-sm);
          opacity: 0.9;
          font-weight: 500;
        }
        
        .fta-card-date {
          background: rgba(255,255,255,0.2);
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-full);
          font-size: var(--text-xs);
          font-weight: 600;
          backdrop-filter: blur(4px);
        }
        
        .fta-card-body {
          padding: var(--space-6);
        }
        
        .fta-card-highlight {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
          padding: var(--space-2) var(--space-4);
          border-radius: var(--radius-full);
          font-size: var(--text-sm);
          font-weight: 600;
          margin-bottom: var(--space-5);
        }
        
        .fta-export-comparison {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--gray-50);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
          margin-bottom: var(--space-5);
        }
        
        .fta-export-item {
          text-align: center;
        }
        
        .fta-export-label {
          display: block;
          font-size: var(--text-xs);
          color: var(--gray-500);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: var(--space-1);
        }
        
        .fta-export-value {
          font-size: var(--text-2xl);
          font-weight: 700;
        }
        
        .fta-export-value.current {
          color: var(--gray-600);
        }
        
        .fta-export-value.target {
          color: var(--primary);
        }
        
        .fta-export-arrow {
          flex-shrink: 0;
        }
        
        .fta-products-section {
          margin-bottom: var(--space-5);
        }
        
        .fta-products-label {
          font-size: var(--text-xs);
          color: var(--gray-500);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: var(--space-2);
        }
        
        .fta-products-list {
          font-size: var(--text-base);
          color: var(--gray-700);
          font-weight: 500;
          margin: 0;
        }
        
        .fta-card-link {
          display: block;
          text-align: center;
          color: var(--primary);
          font-weight: 600;
          font-size: var(--text-sm);
          padding: var(--space-3);
          border-top: 1px solid var(--gray-100);
          margin: 0 calc(-1 * var(--space-6));
          margin-bottom: calc(-1 * var(--space-6));
          background: var(--gray-50);
          transition: background var(--transition-fast);
        }
        
        .fta-card-link:hover {
          background: var(--primary-subtle);
        }
        
        .fta-nav-dots {
          display: flex;
          justify-content: center;
          gap: var(--space-2);
          padding: var(--space-4);
          background: var(--white);
          border-top: 1px solid var(--gray-100);
        }
        
        .fta-nav-dot {
          width: 48px;
          height: 36px;
          border-radius: var(--radius-md);
          border: 2px solid var(--gray-200);
          background: var(--white);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
          padding: 4px;
          overflow: hidden;
        }
        
        .fta-nav-flag {
          width: 100%;
          height: auto;
          border-radius: 2px;
        }
        
        .fta-nav-dot:hover {
          border-color: var(--gray-400);
        }
        
        .fta-nav-dot.active {
          border-color: var(--primary);
          background: var(--primary-subtle);
          transform: scale(1.1);
        }
        
        @media (max-width: 768px) {
          .fta-card-flag {
            font-size: 48px;
          }
          
          .fta-card-country {
            font-size: var(--text-xl);
          }
          
          .fta-export-value {
            font-size: var(--text-xl);
          }
          
          .fta-card-date {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
