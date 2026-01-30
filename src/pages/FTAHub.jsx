import { Link } from 'react-router-dom'
import { useState } from 'react'

const FTA_COUNTRIES = [
  { 
    id: 'uae', 
    name: 'United Arab Emirates', 
    flagUrl: 'https://flagcdn.com/w80/ae.png', 
    badge: 'ACTIVE: CEPA', 
    badgeColor: '#10b981', // Emerald for active
    desc: 'India-UAE Comprehensive Economic Partnership Agreement. Zero duty on 90% of tariff lines including gems, textiles, and engineering.',
    status: 'Active'
  },
  { 
    id: 'australia', 
    name: 'Australia', 
    flagUrl: 'https://flagcdn.com/w80/au.png', 
    badge: 'ACTIVE: ECTA', 
    badgeColor: '#10b981', 
    desc: 'Economic Cooperation and Trade Agreement. 100% duty-free access for Indian goods. Post-study work visas for graduates.',
    status: 'Active'
  },
  { 
    id: 'japan', 
    name: 'Japan', 
    flagUrl: 'https://flagcdn.com/w80/jp.png', 
    badge: 'ACTIVE: CEPA', 
    badgeColor: '#10b981', 
    desc: 'Comprehensive Economic Partnership (2011). Reduced tariffs on 94% of trade. High potential for pharma and IT services.',
    status: 'Active'
  },
  { 
    id: 'uk', 
    name: 'United Kingdom', 
    flagUrl: 'https://flagcdn.com/w80/gb.png', 
    badge: 'ACTIVE: FTA', 
    badgeColor: '#10b981', // Emerald for active
    desc: 'India-UK FTA Signed. Landmark deal eliminating tariffs on 99% of goods including textiles, leather, and auto parts.',
    status: 'Active'
  },
  { 
    id: 'eu', 
    name: 'European Union', 
    flagUrl: 'https://flagcdn.com/w80/eu.png', 
    badge: 'ACTIVE: BTIA', 
    badgeColor: '#10b981', 
    desc: 'Broad-based Trade and Investment Agreement. Zero duty access to the European Single Market for Indian apparel and machinery.',
    status: 'Active'
  },
  { 
    id: 'mauritius', 
    name: 'Mauritius', 
    flagUrl: 'https://flagcdn.com/w80/mu.png', 
    badge: 'ACTIVE: CECPA', 
    badgeColor: '#10b981', 
    desc: 'First FTA with an African nation. Gateway to mainland Africa. Duty-free access for 310 Indian export items.',
    status: 'Active'
  },
]

const TRENDING = [
  { name: 'UAE (Trending)', sub: '+24% Export Growth', flagUrl: 'https://flagcdn.com/w80/ae.png', link: '/fta-hub/uae' },
  { name: 'UK (New FTA)', sub: 'Zero Duty Access', flagUrl: 'https://flagcdn.com/w80/gb.png', link: '/fta-hub/uk' },
  { name: 'EU (High Demand)', sub: 'Machinery & Textiles', flagUrl: 'https://flagcdn.com/w80/eu.png', link: '/fta-hub/eu' },
  { name: 'Australia (Steady)', sub: 'Pharma & Agri sectors', flagUrl: 'https://flagcdn.com/w80/au.png', link: '/fta-hub/australia' },
]

const REGIONS = ['All Regions', 'GCC', 'ASEAN', 'Europe', 'Oceania', 'SAARC', 'Africa']

function FTAHub() {
  const [activeRegion, setActiveRegion] = useState('All Regions')

  return (
    <div className="fta-hub">
      {/* Hero */}
      <section className="fh-hero">
        <div className="container">
          <div className="fh-hero-content">
            <h1>FTA Partner Countries</h1>
            <p className="fh-hero-text">Simplifying export regulations and identifying trade benefits for Indian manufacturers across the globe. Access duty-free markets and streamlined customs procedures.</p>
          </div>
          <button className="fh-download-btn">
            <span>↓</span> Download Full Guide
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="fh-main">
        <div className="container">
          <div className="fh-layout">
            {/* Left/Center Content */}
            <div className="fh-content">
              {/* Search */}
              <div className="fh-search">
                <span className="fh-search-icon">🔍</span>
                <input type="text" placeholder="Search by country, region, or trade agreement (e.g. CEPA, ASEAN)..." />
              </div>

              {/* Region Tabs */}
              <div className="fh-tabs">
                {REGIONS.map((r, i) => (
                  <button 
                    key={r} 
                    className={`fh-tab ${activeRegion === r ? 'active' : ''}`}
                    onClick={() => setActiveRegion(r)}
                  >{r}</button>
                ))}
              </div>

              {/* Country Cards Grid */}
              <div className="fh-grid">
                {FTA_COUNTRIES.map(c => (
                  <div key={c.id} className="fh-card">
                    <div className="fh-card-header">
                      <img src={c.flagUrl} alt={c.name} className="fh-card-flag" />
                      <span className="fh-card-badge" style={{ background: c.badgeColor }}>{c.badge}</span>
                    </div>
                    <h3 className="fh-card-name">{c.name}</h3>
                    <p className="fh-card-desc">{c.desc}</p>
                    {c.status === 'Active' ? (
                      <Link to={`/fta-hub/${c.id}`} className="fh-card-link">View Benefits</Link>
                    ) : (
                      <span className="fh-card-soon">Coming Soon</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="fh-pagination">
                <button className="fh-page-btn">‹</button>
                <button className="fh-page-btn active">1</button>
                <button className="fh-page-btn">2</button>
                <button className="fh-page-btn">3</button>
                <span>...</span>
                <button className="fh-page-btn">›</button>
              </div>
            </div>

            {/* Right Sidebar */}
            <aside className="fh-sidebar">
              {/* Trending Markets */}
              <div className="fh-trending">
                <div className="fh-trending-header">
                  <span>📈</span>
                  <div>
                    <h4>Trending Markets</h4>
                    <p>High-growth for Indian exporters</p>
                  </div>
                </div>
                <div className="fh-trending-list">
                  {TRENDING.map((t, i) => (
                    <Link to={t.link} key={i} className="fh-trending-item">
                      <img src={t.flagUrl} alt={t.name} className="fh-trending-flag" />
                      <div>
                        <strong>{t.name}</strong>
                        <span>{t.sub}</span>
                      </div>
                      <span className="fh-trending-arrow">›</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="fh-cta">
                <h4>Need Custom Advice?</h4>
                <p>Our consultants can help you find the best FTA route for your specific product HS codes.</p>
                <Link to="/contact" className="fh-cta-btn">Book a Consultation</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <style>{`
        .fta-hub { background: #f8fafc; min-height: 100vh; }
        
        /* Hero */
        .fh-hero { background: #fff; padding: 48px 0 40px; border-bottom: 1px solid #e5e7eb; }
        .fh-hero .container { display: flex; justify-content: space-between; align-items: flex-start; gap: 40px; }
        .fh-hero h1 { font-size: 36px; font-weight: 800; color: #111827; margin-bottom: 16px; }
        .fh-hero-text { font-size: 16px; color: #4b5563; line-height: 1.6; max-width: 580px; font-weight: 400; }
        .fh-download-btn {
          display: flex; align-items: center; gap: 8px;
          background: #fff; border: 1px solid #d1d5db; padding: 12px 24px;
          border-radius: 8px; font-size: 14px; font-weight: 600; color: #111827;
          cursor: pointer; white-space: nowrap; transition: background 0.2s;
        }
        .fh-download-btn:hover { background: #f3f4f6; border-color: #9ca3af; }

        /* Main */
        .fh-main { padding: 40px 0 80px; }
        .fh-layout { display: grid; grid-template-columns: 1fr 340px; gap: 48px; }

        /* Search */
        .fh-search {
          display: flex; align-items: center; gap: 12px;
          background: #fff; border: 1px solid #d1d5db; border-radius: 12px;
          padding: 16px 20px; margin-bottom: 24px; box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }
        .fh-search-icon { font-size: 18px; opacity: 0.5; }
        .fh-search input { flex: 1; border: none; font-size: 15px; outline: none; color: #111827; }
        .fh-search input::placeholder { color: #6b7280; }

        /* Tabs */
        .fh-tabs { display: flex; gap: 10px; margin-bottom: 32px; flex-wrap: wrap; }
        .fh-tab {
          padding: 8px 18px; border-radius: 20px; font-size: 13px; font-weight: 600;
          background: #fff; border: 1px solid #e5e7eb; color: #4b5563; cursor: pointer;
          transition: all 0.2s;
        }
        .fh-tab:hover { border-color: #d1d5db; color: #111827; }
        .fh-tab.active { background: #1e3a8a; color: #fff; border-color: #1e3a8a; }

        /* Grid */
        .fh-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 48px; }

        /* Card */
        .fh-card {
          background: #fff; border: 1px solid #e5e7eb; border-radius: 16px;
          padding: 24px; transition: transform 0.2s, box-shadow 0.2s;
          display: flex; flex-direction: column;
        }
        .fh-card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px -10px rgba(0, 0, 0, 0.1); border-color: #d1d5db; }
        .fh-card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; }
        .fh-card-flag { width: 48px; height: auto; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); object-fit: cover; }
        .fh-card-badge {
          padding: 6px 10px; border-radius: 6px; font-size: 10px;
          font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.5px;
        }
        .fh-card-name { font-size: 18px; font-weight: 700; color: #111827; margin-bottom: 8px; }
        .fh-card-desc { font-size: 14px; color: #4b5563; line-height: 1.6; margin-bottom: 20px; flex: 1; }
        .fh-card-link {
          display: block; text-align: center; padding: 10px 0; border: 1px solid #e5e7eb;
          border-radius: 8px; font-size: 14px; font-weight: 600; color: #1f2937;
          background: #fff; transition: all 0.2s;
        }
        .fh-card-link:hover { background: #f9fafb; border-color: #d1d5db; color: #111827; }
        .fh-card-soon {
          display: block; text-align: center; padding: 10px 0;
          font-size: 13px; font-weight: 500; color: #9ca3af;
          background: #f3f4f6; border-radius: 8px; cursor: not-allowed;
        }

        /* Pagination */
        .fh-pagination { display: flex; align-items: center; justify-content: center; gap: 8px; }
        .fh-page-btn {
          width: 40px; height: 40px; border-radius: 8px; border: 1px solid #e5e7eb;
          background: #fff; font-size: 14px; cursor: pointer; color: #4b5563;
          display: flex; align-items: center; justify-content: center; font-weight: 500;
        }
        .fh-page-btn:hover { background: #f9fafb; color: #111827; }
        .fh-page-btn.active { background: #1e3a8a; color: #fff; border-color: #1e3a8a; }

        /* Sidebar */
        .fh-sidebar { display: flex; flex-direction: column; gap: 32px; }

        /* Trending */
        .fh-trending { background: #fff; border: 1px solid #e5e7eb; border-radius: 16px; padding: 24px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
        .fh-trending-header { display: flex; gap: 12px; margin-bottom: 24px; align-items: center; }
        .fh-trending-header span { font-size: 24px; background: #eff6ff; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; border-radius: 10px; }
        .fh-trending-header h4 { font-size: 16px; font-weight: 700; color: #111827; margin: 0 0 2px 0; }
        .fh-trending-header p { font-size: 12px; color: #6b7280; margin: 0; }
        .fh-trending-list { display: flex; flex-direction: column; gap: 12px; }
        .fh-trending-item {
          display: flex; align-items: center; gap: 16px; padding: 14px;
          background: #f9fafb; border-radius: 10px; cursor: pointer; border: 1px solid transparent; transition: all 0.2s;
        }
        .fh-trending-item:hover { background: #fff; border-color: #e5e7eb; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        .fh-trending-flag { width: 32px; height: auto; border-radius: 3px; box-shadow: 0 1px 2px rgba(0,0,0,0.1); object-fit: cover; }
        .fh-trending-item div { flex: 1; }
        .fh-trending-item strong { display: block; font-size: 14px; color: #111827; font-weight: 600; margin-bottom: 2px; }
        .fh-trending-item span { font-size: 11px; color: #059669; font-weight: 500; }
        .fh-trending-arrow { color: #9ca3af; font-size: 20px; font-weight: 300; }

        /* CTA */
        .fh-cta { background: #1e3a8a; border-radius: 16px; padding: 28px; color: #fff; text-align: center; box-shadow: 0 10px 15px -3px rgba(30, 58, 138, 0.3); }
        .fh-cta h4 { font-size: 18px; font-weight: 700; margin-bottom: 12px; color: #fff; }
        .fh-cta p { font-size: 14px; opacity: 0.9; line-height: 1.6; margin-bottom: 24px; color: #dbeafe; }
        .fh-cta-btn {
          display: block; text-align: center; background: #fff; color: #1e3a8a;
          padding: 14px; border-radius: 8px; font-size: 15px; font-weight: 700; transition: transform 0.2s;
        }
        .fh-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); background: #eff6ff; }

        @media (max-width: 1024px) {
          .fh-layout { grid-template-columns: 1fr; }
          .fh-grid { grid-template-columns: repeat(2, 1fr); }
          .fh-sidebar { order: -1; }
        }
        @media (max-width: 640px) {
          .fh-hero .container { flex-direction: column; gap: 24px; }
          .fh-grid { grid-template-columns: 1fr; }
          .fh-hero h1 { font-size: 28px; }
        }
      `}</style>
    </div>
  )
}

export default FTAHub
