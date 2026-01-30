import { Link } from 'react-router-dom'

function FTANews() {
  const newsItems = [
    {
      headline: 'India-UK FTA: 99% Tariff Lines to Get Zero Duty Access',
      source: 'PIB',
      date: 'Jan 2025',
      excerpt: 'Comprehensive FTA covers goods, services, and investment with significant duty reductions.',
      link: 'https://pib.gov.in'
    },
    {
      headline: 'UAE CEPA Drives 16% Export Growth in Gems & Jewelry',
      source: 'Ministry of Commerce',
      date: 'Dec 2024',
      excerpt: 'India-UAE bilateral trade reached $83 billion with CEPA benefits driving key sectors.',
      link: 'https://commerce.gov.in'
    },
    {
      headline: 'India-Australia ECTA: Textiles Exports Up 28% YoY',
      source: 'FIEO',
      date: 'Nov 2024',
      excerpt: 'Zero-duty access under ECTA boosted Indian textile exports to Australia significantly.',
      link: 'https://fieo.org'
    }
  ]

  return (
    <section className="fta-news-section">
      <div className="container">
        <div className="fta-news-header">
          <div>
            <h2 className="fta-news-title">FTA Opportunity News</h2>
            <p className="fta-news-subtitle">Real updates on UK / EU / UAE market-access opportunities—so you act before competitors.</p>
          </div>
          <Link to="/resources" className="fta-news-view-all">View all →</Link>
        </div>
        
        <div className="fta-news-grid">
          {newsItems.map((item, idx) => (
            <article key={idx} className="fta-news-card">
              <div className="fta-news-meta">
                <span className="fta-news-source">{item.source}</span>
                <span className="fta-news-date">{item.date}</span>
              </div>
              <h3 className="fta-news-headline">{item.headline}</h3>
              <p className="fta-news-excerpt">{item.excerpt}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="fta-news-link">Read →</a>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .fta-news-section {
          padding: 48px 0 64px;
          background: var(--gray-50);
        }
        .fta-news-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 32px;
        }
        .fta-news-title {
          font-size: 28px;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: 8px;
        }
        .fta-news-subtitle {
          font-size: 15px;
          color: var(--gray-600);
          max-width: 500px;
        }
        .fta-news-view-all {
          font-size: 14px;
          color: var(--primary);
          font-weight: 500;
        }
        .fta-news-view-all:hover { text-decoration: underline; }
        .fta-news-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .fta-news-card {
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: 12px;
          padding: 20px;
          transition: box-shadow 0.2s;
        }
        .fta-news-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
        .fta-news-meta {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .fta-news-source {
          font-size: 11px;
          color: var(--primary);
          font-weight: 600;
          text-transform: uppercase;
        }
        .fta-news-date { font-size: 11px; color: var(--gray-500); }
        .fta-news-headline {
          font-size: 16px;
          font-weight: 600;
          color: var(--gray-900);
          margin-bottom: 8px;
          line-height: 1.4;
        }
        .fta-news-excerpt {
          font-size: 13px;
          color: var(--gray-600);
          margin-bottom: 12px;
          line-height: 1.5;
        }
        .fta-news-link {
          font-size: 13px;
          color: var(--primary);
          font-weight: 500;
        }
        .fta-news-link:hover { text-decoration: underline; }
        @media (max-width: 900px) {
          .fta-news-section { padding: 28px 0 40px; }
          .fta-news-header { flex-direction: column; gap: 12px; }
          .fta-news-title { font-size: 22px; }
          .fta-news-grid { grid-template-columns: 1fr; gap: 16px; }
        }
      `}</style>
    </section>
  )
}

export default FTANews
