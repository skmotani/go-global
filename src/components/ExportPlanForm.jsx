import { useState } from 'react'
import { generateClientEmail, generateAdminEmail } from '../utils/emailTemplates'

function ExportPlanForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState('idle') // idle, sending, success
  const [previewHtml, setPreviewHtml] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    // Simulate API call
    setTimeout(() => {
      // Generate email content
      const clientContent = generateClientEmail(formData.name)
      const adminContent = generateAdminEmail(formData)
      
      setPreviewHtml(clientContent)
      setStatus('success')
      
      // Log for developer
      console.log('--- EMAIL SENT (SIMULATED) ---')
      console.log('To Client:', clientContent)
      console.log('To Admin:', adminContent)
    }, 1500)
  }

  if (status === 'success') {
    return (
      <div className="card-flat" style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
        <div style={{ 
          width: '64px', height: '64px', background: '#10B981', color: 'white', 
          fontSize: '32px', borderRadius: '50%', display: 'flex', 
          alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-6)' 
        }}>✓</div>
        
        <h3 className="heading-3 mb-2">Message Sent!</h3>
        <p className="text-muted mb-6">We've sent a confirmation to <strong>{formData.email}</strong>.</p>
        
        <div className="email-preview">
          <p className="text-xs text-subtle mb-2 uppercase tracking-wide font-semibold">Email Preview (Sender View)</p>
          <div className="email-preview-frame" dangerouslySetInnerHTML={{ __html: previewHtml }} />
        </div>
        
        <button 
          onClick={() => { setStatus('idle'); setFormData({ name: '', email: '', phone: '', message: '' }) }}
          className="btn btn-outline mt-6"
        >
          Send Another
        </button>

        <style>{`
          .email-preview { 
            text-align: left; 
            margin-top: var(--space-8);
            background: var(--gray-50);
            padding: var(--space-4);
            border-radius: var(--radius-lg);
            border: 1px solid var(--gray-200);
          }
          .email-preview-frame {
            background: white;
            box-shadow: var(--shadow-sm);
            border-radius: 4px;
            overflow: hidden;
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="export-form">
      <h3 className="heading-3 mb-1">Contact Us</h3>
      <p className="text-muted mb-6 text-sm">Get a response within 24 hours.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label className="form-label">Name *</label>
          <input
            type="text"
            name="name"
            className="form-input"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
        </div>

        <div className="form-group mb-4">
          <label className="form-label">Email *</label>
          <input
            type="email"
            name="email"
            className="form-input"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
          />
        </div>

        <div className="form-group mb-4">
          <label className="form-label">Phone (Optional)</label>
          <input
            type="tel"
            name="phone"
            className="form-input"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91..."
          />
        </div>

        <div className="form-group mb-6">
          <label className="form-label">Message *</label>
          <textarea
            name="message"
            className="form-textarea"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you expand globally?"
            style={{ minHeight: '120px' }}
          />
        </div>

        <button 
          type="submit" 
          className="btn btn-primary w-full" 
          disabled={status === 'sending'}
          style={{ width: '100%' }}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <style>{`
        .export-form { 
          background: var(--white); 
          border-radius: var(--radius-xl); 
          padding: var(--space-8); 
          box-shadow: var(--shadow-xl); 
          border: 1px solid var(--gray-200);
        }
        .mb-1 { margin-bottom: var(--space-1); }
        .mb-2 { margin-bottom: var(--space-2); }
        .mb-4 { margin-bottom: var(--space-4); }
        .mb-6 { margin-bottom: var(--space-6); }
        .mt-6 { margin-top: var(--space-6); }
      `}</style>
    </div>
  )
}

export default ExportPlanForm
