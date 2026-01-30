import { Link } from 'react-router-dom'

function FTACards() {
  const countries = [
    {
      name: 'United Kingdom',
      flag: '🇬🇧',
      highlight: 'Zero-Duty Corridors',
      description: 'The UK-India FTA opens unprecedented access to £35 billion worth of goods. Strategic HS code optimization can save you 10-15% on duties.',
      benefits: [
        'Zero duties on specific HS codes',
        '£35B market opportunity',
        'Premium pricing for quality goods',
        'Direct access to retail chains'
      ],
      color: '#012169'
    },
    {
      name: 'United Arab Emirates',
      flag: '🇦🇪',
      highlight: 'Global Re-Export Hub',
      description: 'Dubai serves as the gateway to the Middle East, Africa, and beyond. Leverage UAE as your global distribution center.',
      benefits: [
        'Tax-free trading zones',
        'Access to 2B+ consumers',
        'World-class logistics',
        'Re-export to 50+ countries'
      ],
      color: '#00732F'
    },
    {
      name: 'Australia',
      flag: '🇦🇺',
      highlight: 'High-Value Market',
      description: 'Australia\'s high purchasing power and preference for quality makes it ideal for premium Indian products.',
      benefits: [
        'High per-capita income',
        'Strong demand for textiles',
        'Growing Indian diaspora',
        'Favorable trade terms'
      ],
      color: '#00008B'
    }
  ]

  return (
    <section className="section-lg fta-section">
      <div className="container">
        <div className="text-center mb-16">
          <span className="label">FTA Opportunities</span>
          <h2 className="display-2 mt-4">
            Your Gateway to <span className="gradient-text">Global Markets</span>
          </h2>
          <p className="body-lg text-muted mt-4 mx-auto" style={{ maxWidth: '600px' }}>
            India's Free Trade Agreements have unlocked duty-free corridors to the world's most lucrative markets.
          </p>
        </div>

        <div className="fta-cards-grid">
          {countries.map((country, index) => (
            <div key={index} className="card fta-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="fta-card-flag">
                <span style={{ fontSize: '32px' }}>{country.flag}</span>
              </div>
              
              <span className="fta-card-highlight">{country.highlight}</span>
              <h3 className="fta-card-title">{country.name}</h3>
              <p className="fta-card-desc">{country.description}</p>
              
              <div className="fta-card-benefits">
                {country.benefits.map((benefit, idx) => (
                  <div key={idx} className="fta-card-benefit">{benefit}</div>
                ))}
              </div>
              
              <Link to="/fta-hub" className="btn btn-ghost mt-6" style={{ marginLeft: '-16px' }}>
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/fta-hub" className="btn btn-secondary btn-lg">
            Explore All FTA Opportunities
          </Link>
        </div>
      </div>

      <style>{`
        .fta-section {
          background: var(--charcoal-900);
        }
        
        .fta-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-8);
        }
        
        .fta-card {
          position: relative;
          padding-top: var(--space-16);
        }
        
        .fta-card-flag {
          position: absolute;
          top: var(--space-6);
          right: var(--space-6);
          width: 56px;
          height: 56px;
          background: var(--charcoal-700);
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--white-20);
        }
        
        @media (max-width: 1024px) {
          .fta-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default FTACards
