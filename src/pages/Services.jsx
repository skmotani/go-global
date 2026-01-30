import { Link } from 'react-router-dom'

function ServicesPage() {
  const pillars = [
    {
      icon: '✓',
      bgColor: '#dbeafe',
      title: 'FTA Compliance',
      description: 'Unlock maximum benefits under India\'s Free Trade Agreements. We provide end-to-end guidance on Rules of Origin and certification.',
    },
    {
      icon: '📊',
      bgColor: '#fce7f3',
      title: 'Market Entry Strategy',
      description: 'Identify high-potential global markets and craft data-driven entry plans tailored to your specific product category.',
    },
    {
      icon: '📋',
      bgColor: '#fef3c7',
      title: 'Logistics & Documentation',
      description: 'Streamlining the complex paperwork for seamless shipping. From export invoicing to customs clearance coordination.',
    },
    {
      icon: '🌐',
      bgColor: '#dbeafe',
      title: 'Global Buyer Sourcing',
      description: 'Direct connection to verified international leads and distribution partners who understand the value of Indian manufacturing.',
    }
  ]

  const process = [
    { step: '01', title: 'Audit & Gap Analysis', desc: 'Evaluating current exports and FTA eligibility.' },
    { step: '02', title: 'Roadmap Strategy', desc: 'Custom growth plan for target global markets.' },
    { step: '03', title: 'Compliance Setup', desc: 'Establishing documentation and FTA workflows.' },
    { step: '04', title: 'Buyer Matchmaking', desc: 'Outreach to verified international purchasers.' },
    { step: '05', title: 'Continuous Growth', desc: 'Regular audits and scaling into new regions.' }
  ]

  return (
    <div className="services-page">
      {/* Hero */}
      <section className="sp-hero">
        <div className="container">
          <span className="sp-hero-label">EXPORT CONSULTING</span>
          <h1 className="sp-hero-title">Our Consulting Pillars</h1>
          <p className="sp-hero-sub">
            Empowering Indian manufacturers to navigate global trade complexities with<br/>
            strategic FTA compliance and data-driven sourcing solutions.
          </p>
          <div className="sp-hero-btns">
            <Link to="/contact" className="sp-btn-white">Explore Our Services</Link>
            <button className="sp-btn-dark">Download Portfolio</button>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="sp-trust">
        <div className="container">
          <p className="sp-trust-label">TRUSTED BY MANUFACTURING LEADERS ACROSS INDIA</p>
          <div className="sp-trust-icons">
            <span>🏭</span><span>⚙️</span><span>🏠</span><span>🚗</span><span>💎</span>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="sp-pillars">
        <div className="container">
          <h2 className="sp-pillars-title">Core Consulting Pillars</h2>
          <div className="sp-pillars-grid">
            {pillars.map((p, i) => (
              <div key={i} className="sp-pillar">
                <div className="sp-pillar-icon" style={{ background: p.bgColor }}>{p.icon}</div>
                <h3 className="sp-pillar-name">{p.title}</h3>
                <p className="sp-pillar-desc">{p.description}</p>
                <Link to="/contact" className="sp-pillar-link">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="sp-process">
        <div className="container">
          <h2 className="sp-process-title">Our Consulting Process</h2>
          <p className="sp-process-sub">A structured 5-step roadmap to transform your domestic manufacturing into a global<br/>export powerhouse.</p>
          <div className="sp-process-row">
            {process.map((p, i) => (
              <div key={i} className="sp-step">
                <div className="sp-step-num">{p.step}</div>
                <h4 className="sp-step-title">{p.title}</h4>
                <p className="sp-step-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-cta">
        <div className="container">
          <div className="sp-cta-inner">
            <div className="sp-cta-left">
              <h2>Ready to optimize your export<br/>potential?</h2>
              <p>Book a free 30-minute consultation with our FTA specialists and discover how<br/>much you could be saving on international trade.</p>
            </div>
            <div className="sp-cta-right">
              <Link to="/contact" className="sp-cta-btn-white">Schedule an Audit</Link>
              <button className="sp-cta-btn-outline">Contact Support</button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .services-page { background: #fff; }
        
        /* Hero */
        .sp-hero {
          background: linear-gradient(180deg, #2563eb 0%, #1d4ed8 100%);
          padding: 64px 0 72px;
          text-align: center;
          color: #fff;
        }
        .sp-hero-label {
          display: inline-block;
          background: rgba(255,255,255,0.2);
          padding: 8px 20px;
          border-radius: 24px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          margin-bottom: 28px;
        }
        .sp-hero-title {
          font-size: 44px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .sp-hero-sub {
          font-size: 16px;
          opacity: 0.95;
          line-height: 1.7;
          margin-bottom: 36px;
        }
        .sp-hero-btns { display: flex; gap: 16px; justify-content: center; }
        .sp-btn-white {
          background: #fff;
          color: #2563eb;
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 15px;
          border: none;
        }
        .sp-btn-white:hover { background: #f8fafc; }
        .sp-btn-dark {
          background: #1e293b;
          color: #fff;
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 15px;
          border: none;
          cursor: pointer;
        }
        .sp-btn-dark:hover { background: #0f172a; }

        /* Trust */
        .sp-trust {
          padding: 48px 0;
          text-align: center;
          border-bottom: 1px solid #e5e7eb;
          background: #fff;
        }
        .sp-trust-label {
          font-size: 11px;
          color: #9ca3af;
          letter-spacing: 1.5px;
          font-weight: 500;
          margin-bottom: 24px;
        }
        .sp-trust-icons {
          display: flex;
          justify-content: center;
          gap: 64px;
          font-size: 36px;
          filter: grayscale(1);
          opacity: 0.35;
        }

        /* Pillars */
        .sp-pillars { padding: 72px 0 80px; background: #fff; }
        .sp-pillars-title {
          font-size: 30px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 48px;
        }
        .sp-pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .sp-pillar {
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 32px 24px;
          background: #fff;
          transition: box-shadow 0.2s;
        }
        .sp-pillar:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.06); }
        .sp-pillar-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          margin-bottom: 20px;
        }
        .sp-pillar-name {
          font-size: 18px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 12px;
        }
        .sp-pillar-desc {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.65;
          margin-bottom: 20px;
        }
        .sp-pillar-link {
          font-size: 14px;
          color: #2563eb;
          font-weight: 500;
        }
        .sp-pillar-link:hover { text-decoration: underline; }

        /* Process */
        .sp-process {
          padding: 72px 0 80px;
          background: #f9fafb;
          text-align: center;
        }
        .sp-process-title {
          font-size: 30px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 16px;
        }
        .sp-process-sub {
          color: #6b7280;
          font-size: 15px;
          margin-bottom: 56px;
          line-height: 1.6;
        }
        .sp-process-row {
          display: flex;
          justify-content: center;
          gap: 40px;
        }
        .sp-step { flex: 1; max-width: 180px; }
        .sp-step-num {
          width: 60px;
          height: 60px;
          border: 2px solid #2563eb;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 700;
          color: #2563eb;
          margin: 0 auto 20px;
          background: #fff;
        }
        .sp-step-title {
          font-size: 15px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 8px;
        }
        .sp-step-desc {
          font-size: 13px;
          color: #6b7280;
          line-height: 1.5;
        }

        /* CTA */
        .sp-cta {
          background: linear-gradient(180deg, #2563eb 0%, #1d4ed8 100%);
          padding: 64px 0;
        }
        .sp-cta-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .sp-cta-left { color: #fff; text-align: left; }
        .sp-cta-left h2 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 14px;
          line-height: 1.35;
        }
        .sp-cta-left p {
          font-size: 15px;
          opacity: 0.92;
          line-height: 1.6;
        }
        .sp-cta-right { display: flex; gap: 14px; }
        .sp-cta-btn-white {
          background: #fff;
          color: #2563eb;
          padding: 14px 28px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
        }
        .sp-cta-btn-white:hover { background: #f8fafc; }
        .sp-cta-btn-outline {
          background: transparent;
          color: #fff;
          padding: 14px 28px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          border: 2px solid #fff;
          cursor: pointer;
        }
        .sp-cta-btn-outline:hover { background: rgba(255,255,255,0.1); }

        @media (max-width: 1024px) {
          .sp-pillars-grid { grid-template-columns: repeat(2, 1fr); }
          .sp-process-row { flex-wrap: wrap; }
          .sp-step { flex: 0 0 calc(50% - 20px); max-width: none; }
        }
        @media (max-width: 768px) {
          .sp-hero { padding: 48px 0 56px; }
          .sp-hero-title { font-size: 32px; }
          .sp-hero-btns { flex-direction: column; align-items: center; }
          .sp-pillars-grid { grid-template-columns: 1fr; }
          .sp-step { flex: 0 0 100%; }
          .sp-cta-inner { flex-direction: column; text-align: center; gap: 28px; }
          .sp-cta-left { text-align: center; }
          .sp-cta-right { flex-direction: column; }
        }
      `}</style>
    </div>
  )
}

export default ServicesPage
