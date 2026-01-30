import { useState } from 'react'
import { Link } from 'react-router-dom'

function Resources() {
  const [email, setEmail] = useState('')

  const resources = [
    {
      type: 'Guide',
      title: 'UK-India FTA Complete Guide 2025',
      description: 'Everything you need to know about leveraging the new UK-India Free Trade Agreement for your exports.',
      icon: '📘'
    },
    {
      type: 'Case Study',
      title: 'How a Textile Manufacturer Doubled Exports',
      description: 'Learn how a Surat-based textile company expanded into UK & UAE markets using FTA benefits.',
      icon: '📊'
    },
    {
      type: 'Blog',
      title: 'Certificate of Origin: Common Mistakes',
      description: 'Avoid these costly errors that can void your FTA duty benefits.',
      icon: '📝'
    },
    {
      type: 'Tool',
      title: 'Duty Savings Calculator',
      description: 'Calculate your potential savings using India\'s FTA network for your specific HS codes.',
      icon: '🧮'
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! You\'ll receive our newsletter shortly.')
    setEmail('')
  }

  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ paddingBottom: 'var(--space-12)' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <span className="label">Resources</span>
            <h1 className="display-1" style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
              Expert <span className="gradient-text">Insights</span> & Tools
            </h1>
            <p className="body-lg text-muted">
              Guides, case studies, and tools to help you navigate international trade successfully.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section section-gray">
        <div className="container">
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {resources.map((resource, index) => (
              <div key={index} className="service-card">
                <span className="label" style={{ marginBottom: 'var(--space-3)', display: 'block' }}>
                  {resource.type}
                </span>
                <div style={{ fontSize: '40px', marginBottom: 'var(--space-4)' }}>{resource.icon}</div>
                <h3 className="service-title">{resource.title}</h3>
                <p className="service-desc">{resource.description}</p>
                <button className="btn btn-ghost" style={{ marginTop: 'var(--space-4)', padding: 0 }}>
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="heading-2 mb-4">Stay Updated</h2>
            <p className="text-muted mb-6">
              Get the latest FTA updates, export tips, and market insights delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 'var(--space-3)' }}>
              <input
                type="email"
                className="form-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ flex: 1 }}
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resources
