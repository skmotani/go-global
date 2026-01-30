import { useState, useEffect } from 'react'
import MultiSelect from './MultiSelect'

const STORAGE_KEY = 'go-global-export-plan-form'

const PRODUCT_CATEGORIES = [
  'Textiles & Apparel', 'Machinery & Equipment', 'Auto Components', 'Chemicals', 
  'Electronics', 'Pharmaceuticals', 'Food & Agriculture', 'Metals & Steel',
  'Gems & Jewelry', 'Leather & Footwear', 'Plastics & Rubber', 'Furniture',
  'Ceramics & Glass', 'Paper & Packaging', 'Handicrafts', 'Other'
]

const BUSINESS_TYPES = ['Manufacturer', 'Trader', 'Broker', 'Exporter', 'Agent', 'Other']

// HSN Chapters (1-99) with key sub-chapters
const HSN_CODES = [
  // Chapter 01-05: Live Animals & Animal Products
  '01 - Live Animals',
  '02 - Meat & Edible Meat',
  '03 - Fish & Seafood',
  '0306 - Crustaceans (Shrimps)',
  '04 - Dairy, Eggs, Honey',
  '05 - Animal Products NES',
  // Chapter 06-14: Vegetable Products
  '06 - Live Plants & Flowers',
  '07 - Vegetables',
  '08 - Fruits & Nuts',
  '0803 - Bananas',
  '09 - Coffee, Tea, Spices',
  '0902 - Tea',
  '0904 - Pepper',
  '10 - Cereals',
  '1006 - Rice',
  '11 - Milling Products',
  '12 - Oil Seeds',
  '13 - Lac, Gums, Resins',
  '14 - Vegetable Products NES',
  // Chapter 15: Fats & Oils
  '15 - Fats & Oils',
  // Chapter 16-24: Food Products
  '16 - Meat/Fish Preparations',
  '17 - Sugar & Confectionery',
  '18 - Cocoa & Chocolate',
  '19 - Cereal Preparations',
  '20 - Vegetable Preparations',
  '21 - Misc Food Preparations',
  '22 - Beverages',
  '23 - Food Industry Residues',
  '24 - Tobacco',
  // Chapter 25-27: Minerals
  '25 - Salt, Sulfur, Stone',
  '26 - Ores, Slag, Ash',
  '27 - Mineral Fuels, Oils',
  // Chapter 28-38: Chemicals
  '28 - Inorganic Chemicals',
  '29 - Organic Chemicals',
  '2941 - Antibiotics',
  '30 - Pharmaceutical Products',
  '3004 - Medicaments',
  '31 - Fertilizers',
  '32 - Tanning, Dyes, Paints',
  '33 - Essential Oils, Cosmetics',
  '34 - Soap, Waxes',
  '35 - Albuminoids, Glues',
  '36 - Explosives',
  '37 - Photographic Goods',
  '38 - Misc Chemical Products',
  // Chapter 39-40: Plastics & Rubber
  '39 - Plastics & Articles',
  '3926 - Plastic Articles',
  '40 - Rubber & Articles',
  // Chapter 41-43: Leather
  '41 - Raw Hides & Leather',
  '42 - Leather Articles',
  '4202 - Bags, Cases, Wallets',
  '43 - Furskins',
  // Chapter 44-49: Wood & Paper
  '44 - Wood & Articles',
  '45 - Cork',
  '46 - Straw Articles',
  '47 - Pulp',
  '48 - Paper & Paperboard',
  '49 - Printed Books, Newspapers',
  // Chapter 50-63: Textiles
  '50 - Silk',
  '51 - Wool',
  '52 - Cotton',
  '5208 - Woven Cotton Fabrics',
  '53 - Vegetable Textile Fibers',
  '54 - Man-made Filaments',
  '55 - Man-made Staple Fibers',
  '56 - Wadding, Felt, Twine',
  '57 - Carpets',
  '58 - Special Woven Fabrics',
  '59 - Impregnated Textiles',
  '60 - Knitted Fabrics',
  '61 - Knitted Apparel',
  '6109 - T-Shirts',
  '6110 - Sweaters',
  '62 - Woven Apparel',
  '6203 - Mens Suits, Trousers',
  '6204 - Womens Suits, Dresses',
  '63 - Made-up Textiles',
  '6302 - Bed Linen',
  // Chapter 64-67: Footwear, Headgear
  '64 - Footwear',
  '6403 - Leather Footwear',
  '65 - Headgear',
  '66 - Umbrellas',
  '67 - Feathers, Artificial Flowers',
  // Chapter 68-70: Stone, Ceramic, Glass
  '68 - Stone, Plaster, Cement',
  '69 - Ceramics',
  '70 - Glass & Glassware',
  // Chapter 71: Gems & Jewelry
  '71 - Gems, Jewelry, Coins',
  '7102 - Diamonds',
  '7113 - Gold Jewelry',
  // Chapter 72-83: Base Metals
  '72 - Iron & Steel',
  '73 - Iron/Steel Articles',
  '7308 - Steel Structures',
  '74 - Copper',
  '75 - Nickel',
  '76 - Aluminum',
  '78 - Lead',
  '79 - Zinc',
  '80 - Tin',
  '81 - Other Base Metals',
  '82 - Tools, Cutlery',
  '83 - Misc Metal Articles',
  // Chapter 84: Machinery
  '84 - Machinery & Equipment',
  '8414 - Pumps, Compressors',
  '8421 - Centrifuges, Filters',
  '8429 - Bulldozers, Excavators',
  '8443 - Printing Machinery',
  '8445 - Textile Machinery',
  '8471 - Computers',
  '8481 - Taps, Valves',
  // Chapter 85: Electrical
  '85 - Electrical Equipment',
  '8504 - Transformers',
  '8517 - Telephones, Smartphones',
  '8528 - Monitors, TVs',
  '8541 - Semiconductors',
  '8542 - Integrated Circuits',
  // Chapter 86-89: Vehicles
  '86 - Railway Equipment',
  '87 - Vehicles',
  '8703 - Motor Cars',
  '8708 - Auto Parts',
  '88 - Aircraft',
  '89 - Ships, Boats',
  // Chapter 90-92: Instruments
  '90 - Optical, Medical Instruments',
  '9018 - Medical Instruments',
  '91 - Clocks, Watches',
  '92 - Musical Instruments',
  // Chapter 93-99: Misc
  '93 - Arms & Ammunition',
  '94 - Furniture, Bedding',
  '9403 - Furniture',
  '95 - Toys, Games, Sports',
  '96 - Misc Manufactured',
  '97 - Works of Art',
  '99 - Special Transactions'
]

// Comprehensive country list
const TARGET_MARKETS = [
  // FTA Countries (Priority)
  'UAE 🇦🇪',
  'UK 🇬🇧',
  'Australia 🇦🇺',
  'Singapore 🇸🇬',
  'South Korea 🇰🇷',
  'Japan 🇯🇵',
  'ASEAN (All)',
  // EU Countries
  'Germany 🇩🇪',
  'France 🇫🇷',
  'Netherlands 🇳🇱',
  'Italy 🇮🇹',
  'Belgium 🇧🇪',
  'Spain 🇪🇸',
  'Poland 🇵🇱',
  'Sweden 🇸🇪',
  'Austria 🇦🇹',
  'EU (Other)',
  // Americas
  'USA 🇺🇸',
  'Canada 🇨🇦',
  'Mexico 🇲🇽',
  'Brazil 🇧🇷',
  'Chile 🇨🇱',
  'Argentina 🇦🇷',
  'Colombia 🇨🇴',
  'Peru 🇵🇪',
  // Middle East
  'Saudi Arabia 🇸🇦',
  'Qatar 🇶🇦',
  'Kuwait 🇰🇼',
  'Oman 🇴🇲',
  'Bahrain 🇧🇭',
  'Israel 🇮🇱',
  'Turkey 🇹🇷',
  'Iran 🇮🇷',
  'Iraq 🇮🇶',
  // Africa
  'South Africa 🇿🇦',
  'Egypt 🇪🇬',
  'Kenya 🇰🇪',
  'Nigeria 🇳🇬',
  'Morocco 🇲🇦',
  'Tanzania 🇹🇿',
  'Ghana 🇬🇭',
  'Ethiopia 🇪🇹',
  // Asia Pacific
  'China 🇨🇳',
  'Hong Kong 🇭🇰',
  'Taiwan 🇹🇼',
  'Vietnam 🇻🇳',
  'Thailand 🇹🇭',
  'Indonesia 🇮🇩',
  'Malaysia 🇲🇾',
  'Philippines 🇵🇭',
  'Bangladesh 🇧🇩',
  'Sri Lanka 🇱🇰',
  'Nepal 🇳🇵',
  'Myanmar 🇲🇲',
  // Oceania
  'New Zealand 🇳🇿',
  'Fiji 🇫🇯',
  // CIS
  'Russia 🇷🇺',
  'Kazakhstan 🇰🇿',
  'Uzbekistan 🇺🇿',
  // Other
  'Other'
]

const SALES_BANDS = ['< ₹5 Cr', '₹5–25 Cr', '₹25–100 Cr', '₹100–500 Cr', '₹500 Cr+']

const ROLES = ['Owner/Director', 'Export Manager', 'Sales Head', 'Operations', 'Other']

const CHALLENGES = ['Finding buyers', 'Pricing', 'Compliance', 'Payments', 'Logistics', 'Certifications', 'Not sure']

function ExportPlanForm() {
  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  
  const [formData, setFormData] = useState({
    companyName: '', companyEmail: '', contactName: '', contactPhone: '+91 ',
    role: '', businessType: '',
    productCategory: [], productName: '', hsnCodes: [],
    annualSales: '', targetMarkets: [], isExporting: '',
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
    if (!formData.productName.trim()) e.productName = 'Required'
    if (formData.hsnCodes.length === 0) e.hsnCodes = 'Select HSN'
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
      localStorage.removeItem(STORAGE_KEY)
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="form-success">
        <div className="form-success-icon">✓</div>
        <h3>Thank You!</h3>
        <p>We'll contact you within 48 hours.</p>
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
          <div className="fg"><label>Product Category</label>
            <MultiSelect options={PRODUCT_CATEGORIES} selected={formData.productCategory} onChange={(val) => updateField('productCategory', val)} placeholder="Select category..." />
          </div>
          <div className="fg"><label>Product Name *</label>
            <input type="text" value={formData.productName} onChange={(e) => updateField('productName', e.target.value)} placeholder="e.g. Cotton T-Shirts, Auto Parts" className={errors.productName ? 'err' : ''} />
            {errors.productName && <span className="fe">{errors.productName}</span>}
          </div>
          <div className="fg"><label>HSN Chapter/Code *</label>
            <MultiSelect options={HSN_CODES} selected={formData.hsnCodes} onChange={(val) => updateField('hsnCodes', val)} placeholder="Select HSN..." searchPlaceholder="Search chapter or product..." />
            {errors.hsnCodes && <span className="fe">{errors.hsnCodes}</span>}
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
          <div className="fg"><label>Target Markets</label>
            <MultiSelect options={TARGET_MARKETS} selected={formData.targetMarkets} onChange={(val) => updateField('targetMarkets', val)} placeholder="Select countries..." />
          </div>
          <div className="fg"><label>Currently Exporting? *</label>
            <div className="radio-group horizontal">
              <label className="radio"><input type="radio" name="exp" value="yes" checked={formData.isExporting === 'yes'} onChange={(e) => updateField('isExporting', e.target.value)} /><span>Yes</span></label>
              <label className="radio"><input type="radio" name="exp" value="no" checked={formData.isExporting === 'no'} onChange={(e) => updateField('isExporting', e.target.value)} /><span>No</span></label>
            </div>
            {errors.isExporting && <span className="fe">{errors.isExporting}</span>}
          </div>
          {formData.isExporting === 'yes' && (
            <div className="fg"><label>Current Export Countries</label>
              <MultiSelect options={TARGET_MARKETS} selected={formData.currentExportCountries} onChange={(val) => updateField('currentExportCountries', val)} placeholder="Select..." />
            </div>
          )}
          <div className="fg"><label>Challenges</label>
            <div className="chips">
              {CHALLENGES.map(c => (
                <button key={c} type="button" className={`chip ${formData.challenges.includes(c) ? 'active' : ''}`}
                  onClick={() => updateField('challenges', formData.challenges.includes(c) ? formData.challenges.filter(x => x !== c) : [...formData.challenges, c])}>{c}</button>
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
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>Get My Export Plan</button>
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
