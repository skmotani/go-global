import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/services', label: 'Services' },
    { path: '/resources', label: 'Resources' },
    { path: '/fta-hub', label: 'FTAs' },
    { path: '/about', label: 'About Us' },
  ]

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="nav-brand-wrapper" aria-label="Go Global home">
          <span className="brand-logo-text">Go Global</span>
        </Link>

        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
              {link.hasDropdown && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '4px' }}>
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              )}
            </Link>
          ))}
        </div>

        <div className="nav-cta">
          <Link to="/contact" className="btn btn-primary">
            Get Export Plan
          </Link>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="container">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="btn btn-primary w-full mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Export Plan
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--white);
          border-bottom: 1px solid var(--gray-200);
          padding: var(--space-6) 0;
          box-shadow: var(--shadow-lg);
        }
        
        .mobile-nav-link {
          display: block;
          padding: var(--space-3) 0;
          font-size: var(--text-lg);
          color: var(--gray-700);
          border-bottom: 1px solid var(--gray-100);
        }
        
        .mobile-nav-link:hover {
          color: var(--primary);
        }
      `}</style>
    </nav>
  )
}

export default Navbar
