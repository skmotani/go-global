import Header from '../components/Header'
import ExportPlanForm from '../components/ExportPlanForm'
import FTANews from '../components/FTANews'

function Contact() {
  const benefits = [
    'FTA eligibility assessment for your products',
    'Duty savings potential calculation',
    'Target market recommendations',
    'Compliance requirements overview',
    'Buyer channel + outreach plan',
    'Documentation checklist (COO/ROO basics)'
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="export-plan-hero">
        <div className="container">
          <div className="export-plan-grid">
            {/* Left - Value Proposition */}
            <div className="export-plan-content">
              <span className="label">GET STARTED</span>
              
              <h1 className="display-2">
                Get Your <span className="gradient-text">Export Plan</span>
              </h1>
              
              <p className="export-plan-subtitle">
                Tell us about your business and we'll create a personalized 
                roadmap for your global expansion.
              </p>

              <div className="export-plan-benefits">
                <h3>What You'll Get</h3>
                <ul>
                  {benefits.map((benefit, idx) => (
                    <li key={idx}>
                      <span className="benefit-check">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right - Form Card */}
            <div className="export-plan-form-wrapper">
              <ExportPlanForm />
            </div>
          </div>

          {/* Trust Row */}
          <div className="trust-row">
            <span>FTA-led expansion</span>
            <span className="trust-divider">•</span>
            <span>Duty savings</span>
            <span className="trust-divider">•</span>
            <span>Market access</span>
            <span className="trust-divider">•</span>
            <span>Compliance-ready</span>
          </div>
        </div>
      </section>

      {/* FTA News Section */}
      <section className="section section-gray">
        <div className="container">
          <FTANews />
        </div>
      </section>

      <style>{`
        .export-plan-hero {
          padding: var(--space-12) 0 var(--space-16);
          background: linear-gradient(180deg, var(--gray-50) 0%, var(--white) 100%);
        }
        
        .export-plan-grid {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: var(--space-12);
          align-items: start;
        }
        
        .export-plan-content .label {
          margin-bottom: var(--space-4);
        }
        
        .export-plan-content .display-2 {
          margin-bottom: var(--space-4);
        }
        
        .export-plan-subtitle {
          font-size: var(--text-lg);
          color: var(--gray-600);
          margin-bottom: var(--space-8);
          max-width: 480px;
        }
        
        .export-plan-benefits h3 {
          font-size: var(--text-lg);
          font-weight: 600;
          margin-bottom: var(--space-4);
          color: var(--gray-900);
        }
        
        .export-plan-benefits ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .export-plan-benefits li {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
          padding: var(--space-3) 0;
          font-size: var(--text-base);
          color: var(--gray-700);
        }
        
        .benefit-check {
          width: 22px;
          height: 22px;
          background: var(--primary-subtle);
          color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          flex-shrink: 0;
        }
        
        .export-plan-form-wrapper {
          position: sticky;
          top: 100px;
        }
        
        .trust-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: var(--space-3);
          margin-top: var(--space-12);
          padding: var(--space-4);
          background: var(--white);
          border-radius: var(--radius-full);
          box-shadow: var(--shadow-sm);
          font-size: var(--text-sm);
          color: var(--gray-600);
          font-weight: 500;
        }
        
        .trust-divider {
          color: var(--gray-300);
        }
        
        @media (max-width: 900px) {
          .export-plan-grid {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }
          
          .export-plan-form-wrapper {
            position: static;
            order: -1;
          }
          
          .trust-row {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </>
  )
}

export default Contact
