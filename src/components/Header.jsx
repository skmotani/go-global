import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="header-brand" aria-label="Go Global home">
          <span className="header-brand-icon">🌍</span>
          <div className="header-brand-text">
            <span className="header-brand-name">Go Global</span>
            <span className="header-brand-tagline">India's FTA Export Growth Partner</span>
          </div>
        </Link>
      </div>
      
      <style>{`
        .site-header {
          padding: var(--space-4) 0;
          border-bottom: 1px solid var(--gray-100);
          background: var(--white);
        }
        
        .header-brand {
          display: inline-flex;
          align-items: center;
          gap: var(--space-3);
          text-decoration: none;
        }
        
        .header-brand-icon {
          font-size: 28px;
        }
        
        .header-brand-text {
          display: flex;
          flex-direction: column;
        }
        
        .header-brand-name {
          font-size: 20px;
          font-weight: 700;
          color: var(--gray-900);
          letter-spacing: 0.3px;
          line-height: 1.2;
        }
        
        .header-brand-tagline {
          font-size: 11px;
          color: var(--gray-500);
          font-weight: 500;
        }
        
        .header-brand:hover .header-brand-name {
          color: var(--primary);
        }
      `}</style>
    </header>
  )
}

export default Header
