import { Link } from 'react-router-dom'

function ProblemSolution() {
  return (
    <section className="section-lg problem-solution-section">
      <div className="container">
        <div className="text-center mb-16">
          <span className="label">The Opportunity</span>
          <h2 className="display-2 mt-4">
            The World is <span className="gradient-text">Moving</span>
          </h2>
        </div>

        {/* Problem */}
        <div className="problem-agitation-grid">
          <div className="pas-card problem-card animate-fade-in">
            <div className="pas-icon problem-icon">🌍</div>
            <h3 className="heading-3 mb-4">The Global Shift</h3>
            <p className="body-lg text-muted">
              The world is <strong>moving away from single-source supply chains</strong>. 
              "China+1" isn't just a buzzword—it's a $2 trillion opportunity for Indian manufacturers.
            </p>
          </div>

          <div className="pas-card agitation-card animate-fade-in delay-1">
            <div className="pas-icon agitation-icon">⏰</div>
            <h3 className="heading-3 mb-4">The 36-Month Window</h3>
            <p className="body-lg text-muted">
              India's FTAs with the UK, UAE, and Australia have created <strong>zero-duty corridors</strong>. 
              But this advantage is time-sensitive. Early movers capture the market.
            </p>
          </div>

          <div className="pas-card solution-card animate-fade-in delay-2">
            <div className="pas-icon solution-icon">🚀</div>
            <h3 className="heading-3 mb-4">Your Global Launch</h3>
            <p className="body-lg text-muted">
              With 20 years of boots-on-the-ground experience, we don't just find customers—
              <strong>we build global brands</strong> that command premium prices.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/contact" className="btn btn-primary btn-lg">
            Claim Your Advantage
          </Link>
        </div>
      </div>

      <style>{`
        .problem-solution-section {
          background: linear-gradient(180deg, var(--charcoal-900) 0%, var(--charcoal-800) 50%, var(--charcoal-900) 100%);
          position: relative;
        }
        
        .problem-agitation-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-8);
        }
        
        .pas-card {
          background: var(--charcoal-800);
          border: 1px solid var(--white-10);
          border-radius: var(--radius-xl);
          padding: var(--space-10);
          transition: all var(--transition-base);
        }
        
        .pas-card:hover {
          border-color: var(--electric-blue-glow);
          transform: translateY(-4px);
        }
        
        .pas-icon {
          width: 72px;
          height: 72px;
          background: var(--electric-blue-subtle);
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          margin-bottom: var(--space-6);
        }
        
        .solution-card {
          background: linear-gradient(135deg, var(--charcoal-800) 0%, var(--charcoal-700) 100%);
          border-color: var(--electric-blue-glow);
        }
        
        .solution-card .pas-icon {
          background: var(--electric-blue);
        }
        
        @media (max-width: 768px) {
          .problem-agitation-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default ProblemSolution
