import { Link } from 'react-router-dom'

function Gateway() {
  const features = [
    'Zero Duty Entry in UAE via CEPA',
    'Market Access to EU/UK Regions',
    'Australian Market ECTA Compliance'
  ]

  return (
    <section className="gateway-section">
      <div className="container">
        <div className="gateway-grid">
          <div className="gateway-content">
            <h2 className="display-2">Your Gateway to the World</h2>
            <p className="body-lg">
              We help Indian manufacturers leverage India's growing network 
              of Free Trade Agreements. From CEPA in the UAE to ECTA in 
              Australia, we pave the way for zero-duty exports.
            </p>
            
            <div className="gateway-features">
              {features.map((feature, index) => (
                <div key={index} className="gateway-feature">
                  <div className="gateway-feature-icon">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <Link to="/fta-hub" className="btn btn-primary btn-lg">
              Explore Global Opportunities
            </Link>
          </div>
          
          <div className="gateway-map">
            <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Simplified world map outline */}
              <ellipse cx="400" cy="200" rx="350" ry="150" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none"/>
              <ellipse cx="400" cy="200" rx="250" ry="100" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none"/>
              <ellipse cx="400" cy="200" rx="150" ry="60" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none"/>
              
              {/* India marker */}
              <circle cx="520" cy="180" r="8" fill="#0066FF"/>
              <circle cx="520" cy="180" r="16" fill="rgba(0,102,255,0.3)"/>
              
              {/* UAE marker */}
              <circle cx="480" cy="170" r="6" fill="#10B981"/>
              
              {/* UK marker */}
              <circle cx="380" cy="120" r="6" fill="#10B981"/>
              
              {/* Australia marker */}
              <circle cx="620" cy="280" r="6" fill="#10B981"/>
              
              {/* Connection lines */}
              <path d="M520 180 L480 170" stroke="rgba(0,102,255,0.5)" strokeWidth="1" strokeDasharray="4"/>
              <path d="M520 180 L380 120" stroke="rgba(0,102,255,0.5)" strokeWidth="1" strokeDasharray="4"/>
              <path d="M520 180 L620 280" stroke="rgba(0,102,255,0.5)" strokeWidth="1" strokeDasharray="4"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gateway
