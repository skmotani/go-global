import { useState, useEffect } from 'react'
import MultiSelect from './MultiSelect'
import { generateClientEmail, generateAdminEmail } from '../utils/emailTemplates'

const STORAGE_KEY = 'go-global-export-plan-form'

const PRODUCT_CATEGORIES = [
  'Textiles & Apparel', 'Machinery & Equipment', 'Auto Components', 'Chemicals', 
  'Electronics', 'Pharmaceuticals', 'Food & Agriculture', 'Metals & Steel',
  'Gems & Jewelry', 'Leather & Footwear', 'Plastics & Rubber', 'Furniture',
  'Ceramics & Glass', 'Paper & Packaging', 'Handicrafts', 'Other'
]

const BUSINESS_TYPES = ['Manufacturer', 'Trader', 'Broker', 'Exporter', 'Agent', 'Other']

// HSN Chapters removed in favor of text input
// Comprehensive country list replaced by Continents

const CONTINENTS = [
  'North America', 
  'South America', 
  'Europe', 
  'Middle East', 
  'Africa', 
  'Asia', 
  'Australia/Oceania'
]

const SALES_BANDS = ['< ₹5 Cr', '₹5–25 Cr', '₹25–100 Cr', '₹100–500 Cr', '₹500 Cr+']
const ROLES = ['Owner/Director', 'Export Manager', 'Sales Head', 'Operations', 'Other']
const CHALLENGES = ['Finding buyers', 'Pricing', 'Compliance', 'Payments', 'Logistics', 'Certifications', 'Not sure']

function ExportPlanForm() {
  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState({})
  
  // Status state
  const [status, setStatus] = useState('idle') // idle, sending, success
  const [previewHtml, setPreviewHtml] = useState('')

  const [formData, setFormData] = useState({
    companyName: '', companyEmail: '', contactName: '', contactPhone: '+91 ',
    role: '', businessType: '',
    productCategory: '', productName: '', hsnCode: '', // Changed to string
    annualSales: '', targetContinents: [], isExporting: '', // Changed to targetContinents
    currentExportCountries: [], challenges: [], consent: false
  })

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try { setFormData(prev => ({ ...prev, ...JSON.parse(saved) })) } catch (e) {}
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
  }, [formData])

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }))
  }

  // Toggle for checkboxes
  const toggleSelection = (field, item) => {
    const list = formData[field] || []
    const newList = list.includes(item) 
      ? list.filter(i => i !== item)
      : [...list, item]
    updateField(field, newList)
  }

  const validateStep1 = () => {
    const e = {}
    if (!formData.companyName.trim()) e.companyName = 'Required'
    if (!formData.companyEmail.trim()) e.companyEmail = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.companyEmail)) e.companyEmail = 'Invalid'
    if (!formData.contactName.trim()) e.contactName = 'Required'
    if (!formData.businessType) e.businessType = 'Required'
    setErrors(e); return Object.keys(e).length === 0
  }

  const validateStep2 = () => {
    const e = {}
    if (!formData.productCategory) e.productCategory = 'Required'
    if (!formData.productName.trim()) e.productName = 'Required'
    if (!formData.hsnCode.trim()) e.hsnCode = 'Required'
    setErrors(e); return Object.keys(e).length === 0
  }

  const validateStep3 = () => {
    const e = {}
    if (!formData.annualSales) e.annualSales = 'Required'
    if (!formData.isExporting) e.isExporting = 'Required'
    if (!formData.consent) e.consent = 'Required'
    setErrors(e); return Object.keys(e).length === 0
  }

  const nextStep = () => {
    if (step === 1 && validateStep1()) setStep(2)
    else if (step === 2 && validateStep2()) setStep(3)
  }

  const handleSubmit = () => {
    if (validateStep3()) {
      setStatus('sending')
      
      // Simulate API call
      setTimeout(() => {
        // Map form data for email template
        const emailData = {
            name: formData.contactName,
            email: formData.companyEmail,
            topic: 'Export Plan Request',
            message: `
              <strong>Company:</strong> ${formData.companyName}<br>
              <strong>Role:</strong> ${formData.role}<br>
              <strong>Business Type:</strong> ${formData.businessType}<br>
              <strong>Phone:</strong> ${formData.contactPhone}<br>
              <br>
              <strong>Product:</strong> ${formData.productName}<br>
              <strong>Category:</strong> ${formData.productCategory}<br>
              <strong>HSN Code:</strong> ${formData.hsnCode}<br>
              <br>
              <strong>Annual Sales:</strong> ${formData.annualSales}<br>
              <strong>Target Regions:</strong> ${formData.targetContinents.join(', ')}<br>
              <strong>Currently Exporting:</strong> ${formData.isExporting}<br>
              <strong>Challenges:</strong> ${formData.challenges.join(', ')}
            `
        }

        const clientContent = generateClientEmail(formData.contactName)
        const adminContent = generateAdminEmail(emailData)
        
        setPreviewHtml(clientContent)
        
        localStorage.removeItem(STORAGE_KEY)
        setStatus('success')
        
        console.log('--- EMAIL SENT (SIMULATED) ---')
        console.log('To Client:', clientContent)
      }, 1500)
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success-container">
        <div className="form-success">
          <div className="form-success-icon">✓</div>
          <h3>Application Received!</h3>
          <p>We'll contact you within 48 hours at <strong>{formData.companyEmail}</strong>.</p>
        </div>
        
        <div className="email-preview-wrapper">
          <div className="preview-label">
            Automatic Confirmation Email (Preview)
          </div>
          <div className="email-preview-frame" dangerouslySetInnerHTML={{ __html: previewHtml }} />
          <p className="preview-note">
            * This is a live preview of the Google-style email template that will be sent.
          </p>
        </div>

        <button 
          onClick={() => { setStatus('idle'); setStep(1); setFormData({
            companyName: '', companyEmail: '', contactName: '', contactPhone: '+91 ',
            role: '', businessType: '',
            productCategory: '', productName: '', hsnCode: '',
            annualSales: '', targetContinents: [], isExporting: '',
            currentExportCountries: [], challenges: [], consent: false
          }) }} 
          className="btn btn-outline"
          style={{ marginTop: '20px' }}
        >
          Submit Another Application
        </button>

        <style>{`
          .form-success-container { padding: 30px; text-align: center; }
          .email-preview-wrapper { 
            margin-top: 30px; 
            text-align: left; 
            background: var(--gray-50); 
            padding: 20px; 
            border-radius: var(--radius-lg);
            border: 1px solid var(--gray-200);
          }
          .preview-label {
            font-size: 11px; text-transform: uppercase; font-weight: 700; 
            color: var(--gray-500); margin-bottom: 10px; letter-spacing: 0.5px;
          }
          .email-preview-frame {
            background: white; border-radius: 4px; overflow: hidden; 
            box-shadow: var(--shadow-sm);
          }
          .preview-note {
            font-size: 10px; color: var(--gray-500); margin-top: 10px; font-style: italic;
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="export-form">
      <div className="form-progress">
        <div className="form-progress-bar">
          <div className="form-progress-fill" style={{ width: `${(step / 3) * 100}%` }} />
        </div>
        <span className="form-progress-text">Step {step}/3</span>
      </div>

      {step === 1 && (
        <div className="form-step">
          <h3 className="form-step-title">Company & Contact</h3>
          <div className="fg"><label>Company Name *</label>
            <input type="text" value={formData.companyName} onChange={(e) => updateField('companyName', e.target.value)} placeholder="Company name" className={errors.companyName ? 'err' : ''} />
            {errors.companyName && <span className="fe">{errors.companyName}</span>}
          </div>
          <div className="fg"><label>Business Type *</label>
            <select value={formData.businessType} onChange={(e) => updateField('businessType', e.target.value)} className={errors.businessType ? 'err' : ''}>
              <option value="">Select...</option>
              {BUSINESS_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            {errors.businessType && <span className="fe">{errors.businessType}</span>}
          </div>
          <div className="fg"><label>Email *</label>
            <input type="email" value={formData.companyEmail} onChange={(e) => updateField('companyEmail', e.target.value)} placeholder="you@company.com" className={errors.companyEmail ? 'err' : ''} />
            {errors.companyEmail && <span className="fe">{errors.companyEmail}</span>}
          </div>
          <div className="fg"><label>Contact Person *</label>
            <input type="text" value={formData.contactName} onChange={(e) => updateField('contactName', e.target.value)} placeholder="Your name" className={errors.contactName ? 'err' : ''} />
            {errors.contactName && <span className="fe">{errors.contactName}</span>}
          </div>
          <div className="fr">
            <div className="fg"><label>Phone</label>
              <input type="tel" value={formData.contactPhone} onChange={(e) => updateField('contactPhone', e.target.value)} />
            </div>
            <div className="fg"><label>Role</label>
              <select value={formData.role} onChange={(e) => updateField('role', e.target.value)}>
                <option value="">Select...</option>
                {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="form-step">
          <h3 className="form-step-title">Product Details</h3>
          <div className="fg"><label>Product Category *</label>
            <select 
              value={formData.productCategory} 
              onChange={(e) => updateField('productCategory', e.target.value)} 
              className={errors.productCategory ? 'err' : ''}
            >
              <option value="">Select a category</option>
              {PRODUCT_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            {errors.productCategory && <span className="fe">{errors.productCategory}</span>}
          </div>
          
          <div className="fg"><label>Product Name *</label>
            <input type="text" value={formData.productName} onChange={(e) => updateField('productName', e.target.value)} placeholder="e.g. Cotton T-Shirts" className={errors.productName ? 'err' : ''} />
            {errors.productName && <span className="fe">{errors.productName}</span>}
          </div>
          
          <div className="fg"><label>HSN Code *</label>
            <input 
              type="text" 
              value={formData.hsnCode} 
              onChange={(e) => updateField('hsnCode', e.target.value)} 
              placeholder="Enter HSN Code (e.g. 610910)" 
              className={errors.hsnCode ? 'err' : ''} 
            />
            {errors.hsnCode && <span className="fe">{errors.hsnCode}</span>}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="form-step">
          <h3 className="form-step-title">Market & Export</h3>
          <div className="fg"><label>Annual Sales *</label>
            <div className="radio-group">
              {SALES_BANDS.map(b => (
                <label key={b} className="radio"><input type="radio" name="sales" value={b} checked={formData.annualSales === b} onChange={(e) => updateField('annualSales', e.target.value)} /><span>{b}</span></label>
              ))}
            </div>
            {errors.annualSales && <span className="fe">{errors.annualSales}</span>}
          </div>
          
          <div className="fg"><label>Target Continents *</label>
            <div className="check-grid">
              {CONTINENTS.map(c => (
                <label key={c} className="checkbox-card">
                  <input 
                    type="checkbox" 
                    checked={formData.targetContinents.includes(c)}
                    onChange={() => toggleSelection('targetContinents', c)}
                  />
                  <span>{c}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="fg"><label>Currently Exporting? *</label>
            <div className="radio-group horizontal">
              <label className="radio"><input type="radio" name="exp" value="yes" checked={formData.isExporting === 'yes'} onChange={(e) => updateField('isExporting', e.target.value)} /><span>Yes</span></label>
              <label className="radio"><input type="radio" name="exp" value="no" checked={formData.isExporting === 'no'} onChange={(e) => updateField('isExporting', e.target.value)} /><span>No</span></label>
            </div>
            {errors.isExporting && <span className="fe">{errors.isExporting}</span>}
          </div>
          
          <div className="fg"><label>Challenges</label>
            <div className="chips">
              {CHALLENGES.map(c => (
                <button key={c} type="button" className={`chip ${formData.challenges.includes(c) ? 'active' : ''}`}
                  onClick={() => toggleSelection('challenges', c)}>{c}</button>
              ))}
            </div>
          </div>
          <div className="fg">
            <label className="checkbox"><input type="checkbox" checked={formData.consent} onChange={(e) => updateField('consent', e.target.checked)} /><span>I agree to be contacted about export opportunities.</span></label>
            {errors.consent && <span className="fe">{errors.consent}</span>}
          </div>
        </div>
      )}

      <div className="form-nav">
        {step > 1 && <button type="button" className="btn btn-secondary" onClick={() => setStep(step - 1)}>Back</button>}
        {step < 3 ? (
          <button type="button" className="btn btn-primary" onClick={nextStep}>Continue</button>
        ) : (
          <button type="button" className="btn btn-primary" onClick={handleSubmit} disabled={status === 'sending'}>
            {status === 'sending' ? 'Submitting...' : 'Get My Export Plan'}
          </button>
        )}
      </div>
      <p className="form-micro">Takes 2 min • Reply in 48 hrs</p>

      <style>{`
        .export-form { background: var(--white); border-radius: var(--radius-xl); padding: 20px; box-shadow: var(--shadow-xl); }
        .form-progress { margin-bottom: 16px; }
        .form-progress-bar { height: 4px; background: var(--gray-200); border-radius: 2px; }
        .form-progress-fill { height: 100%; background: var(--primary); transition: width 0.3s; }
        .form-progress-text { display: block; text-align: right; font-size: 10px; color: var(--gray-500); margin-top: 3px; }
        .form-step-title { font-size: 15px; font-weight: 600; margin-bottom: 12px; }
        .fg { margin-bottom: 8px; }
        .fg label { display: block; font-size: 11px; font-weight: 500; color: var(--gray-700); margin-bottom: 3px; }
        .fg input, .fg select { width: 100%; padding: 7px 9px; border: 1px solid var(--gray-300); border-radius: 6px; font-size: 12px; }
        .fg input:focus, .fg select:focus { outline: none; border-color: var(--primary); }
        .fg input.err, .fg select.err { border-color: #EF4444; }
        .fe { color: #EF4444; font-size: 9px; }
        .fr { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
        .radio-group { display: flex; flex-direction: column; gap: 2px; }
        .radio-group.horizontal { flex-direction: row; gap: 12px; }
        .radio { display: flex; align-items: center; gap: 5px; font-size: 11px; cursor: pointer; }
        .radio input { width: 13px; height: 13px; accent-color: var(--primary); }
        .chips { display: flex; flex-wrap: wrap; gap: 4px; }
        .chip { padding: 3px 8px; border: 1px solid var(--gray-300); border-radius: 12px; background: var(--white); font-size: 10px; cursor: pointer; }
        .chip:hover { border-color: var(--primary); }
        .chip.active { background: var(--primary); color: white; border-color: var(--primary); }
        .checkbox { display: flex; align-items: flex-start; gap: 5px; font-size: 10px; cursor: pointer; }
        .checkbox input { width: 13px; height: 13px; accent-color: var(--primary); }
        
        .check-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
        .checkbox-card { 
          display: flex; align-items: center; gap: 8px; 
          padding: 8px; border: 1px solid var(--gray-200); border-radius: 6px; 
          font-size: 11px; cursor: pointer; transition: all 0.2s;
        }
        .checkbox-card:hover { border-color: var(--primary); background: var(--gray-50); }
        .checkbox-card input { width: 14px; height: 14px; accent-color: var(--primary); }

        .form-nav { display: flex; gap: 8px; margin-top: 14px; }
        .form-nav .btn { flex: 1; padding: 9px; font-size: 12px; }
        .form-micro { text-align: center; font-size: 9px; color: var(--gray-500); margin-top: 6px; }
        .form-success { text-align: center; padding: 30px; }
        .form-success-icon { width: 45px; height: 45px; background: #10B981; color: white; font-size: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px; }
        .form-success h3 { font-size: 16px; margin-bottom: 4px; }
        .form-success p { color: var(--gray-600); font-size: 12px; }
        @media (max-width: 640px) { .fr { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  )
}

export default ExportPlanForm
