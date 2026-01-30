import { useState } from 'react'

function ConsultationForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    capacity: '',
    targetMarkets: [],
    timeline: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleMarketToggle = (market) => {
    setFormData(prev => ({
      ...prev,
      targetMarkets: prev.targetMarkets.includes(market)
        ? prev.targetMarkets.filter(m => m !== market)
        : [...prev.targetMarkets, market]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="card text-center">
        <div style={{ fontSize: '48px', marginBottom: 'var(--space-4)' }}>✅</div>
        <h3 className="heading-2 mb-4">Application Received!</h3>
        <p className="text-muted">
          Our export specialists will review your details and get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <div className="card">
      <div className="form-progress">
        {[1, 2, 3].map(i => (
          <div 
            key={i} 
            className={`form-progress-step ${step >= i ? (step > i ? 'completed' : 'active') : ''}`}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <h3 className="heading-3">Contact Information</h3>
            
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Email *</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Company Name *</label>
              <input
                type="text"
                name="company"
                className="form-input"
                placeholder="Your company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <h3 className="heading-3">Business Details</h3>
            
            <div className="form-group">
              <label className="form-label">Primary Product Category *</label>
              <select
                name="product"
                className="form-select"
                value={formData.product}
                onChange={handleChange}
                required
              >
                <option value="">Select a category</option>
                <option value="textiles">Textiles & Apparel</option>
                <option value="gems">Gems & Jewelry</option>
                <option value="auto">Auto Components</option>
                <option value="pharma">Pharmaceuticals</option>
                <option value="food">Food & Agriculture</option>
                <option value="engineering">Engineering Goods</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Annual Export Capacity *</label>
              <select
                name="capacity"
                className="form-select"
                value={formData.capacity}
                onChange={handleChange}
                required
              >
                <option value="">Select capacity</option>
                <option value="<1M">Less than $1M</option>
                <option value="1-5M">$1M - $5M</option>
                <option value="5-20M">$5M - $20M</option>
                <option value=">20M">More than $20M</option>
              </select>
            </div>
          </div>
        )}

        {step === 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <h3 className="heading-3">Target Markets</h3>
            
            <div className="form-group">
              <label className="form-label mb-4">Select target regions (multiple allowed)</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-3)' }}>
                {['UAE', 'UK', 'EU', 'Australia'].map(market => (
                  <label 
                    key={market}
                    className="form-radio-label"
                    style={{
                      borderColor: formData.targetMarkets.includes(market) ? 'var(--primary)' : undefined,
                      background: formData.targetMarkets.includes(market) ? 'var(--primary-subtle)' : undefined
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={formData.targetMarkets.includes(market)}
                      onChange={() => handleMarketToggle(market)}
                    />
                    <span>{market}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">When do you plan to start exporting?</label>
              <select
                name="timeline"
                className="form-select"
                value={formData.timeline}
                onChange={handleChange}
              >
                <option value="">Select timeline</option>
                <option value="asap">Immediately</option>
                <option value="3months">Within 3 months</option>
                <option value="6months">Within 6 months</option>
                <option value="exploring">Just exploring</option>
              </select>
            </div>
          </div>
        )}

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginTop: 'var(--space-8)',
          gap: 'var(--space-4)'
        }}>
          {step > 1 && (
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
          )}
          <button 
            type="submit" 
            className="btn btn-primary"
            style={{ marginLeft: step === 1 ? 'auto' : 0 }}
          >
            {step === 3 ? 'Submit Application' : 'Continue'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ConsultationForm
