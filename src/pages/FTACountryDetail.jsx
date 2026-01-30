import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'

const FTA_DATA = {
  uae: {
    name: 'United Arab Emirates',
    flag: '🇦🇪', // UAE Flag
    agreement: 'CEPA',
    fullName: 'Comprehensive Economic Partnership Agreement',
    heroTitle: 'UAE Market: CEPA Agreement Benefits',
    heroSub: 'Comprehensive guide for Indian manufacturers leveraging the India-UAE Comprehensive Economic Partnership Agreement (CEPA).',
    effectiveDate: 'May 1, 2022',
    dutyReduction: '0% duty on 97% of tariff lines', // Sourced: PIB/Commerce Ministry
    rulesOfOrigin: '40% value addition + CTSH', // Standard CEPA RoO
    strategicAdvantage: 'Gateway to GCC, Africa & CIS',
    dutyFreeItems: '97%+',
    avgShipping: '3-6 Days', // Realistic shipping time to Jebel Ali
    primarySectors: 'Gems, Textiles, Agri, Engg.',
    image: '🏙️',
    opportunities: [
      { id: 'gems-jewelry', icon: '💎', title: 'Gems & Jewelry', desc: 'Zero duty on plain gold jewelry. Boost for Surat/Mumbai polishing hubs. Expected to reach $10B exports.' },
      { id: 'textiles', icon: '👔', title: 'Textiles & Apparel', desc: 'Duty elimination (from 5%) gives edge over competitors. Immediate 0% tariff on readymade garments.' },
      { id: 'agro-products', icon: '🌾', title: 'Agro-Products', desc: 'Seasonal duty concessions. High demand for basmati rice, fruits, and processed foods in UAE re-export market.' },
      { id: 'engineering', icon: '⚙️', title: 'Engineering Goods', desc: 'Zero duty on machinery, auto parts, and electrical equipment. Critical for UAE industrial expansion.' },
    ],
    faqs: [
      { q: 'What is the "Value Addition" requirement for CEPA?', a: 'Goods must have at least 40% local value addition in India and undergo a Change in Tariff Sub-Heading (CTSH) to qualify as "Originating in India".' },
      { q: 'Is a Certificate of Origin (CoO) mandatory?', a: 'Yes. You must obtain a Preferential Certificate of Origin (CoO) issued by agencies like EIA, EPCs, or DGFT to claim zero duty.' },
      { q: 'Does CEPA cover services trade?', a: 'Yes. It covers 11 broad service sectors and over 100 sub-sectors, providing market access for Indian professionals in IT, business services, and healthcare.' },
    ]
  },
  australia: {
    name: 'Australia',
    flag: '🇦🇺', // Australia Flag
    agreement: 'ECTA',
    fullName: 'Economic Cooperation and Trade Agreement',
    heroTitle: 'Australia Market: ECTA Benefits',
    heroSub: 'Strategic guide for Indian exporters leveraging the India-Australia Economic Cooperation and Trade Agreement (Ind-Aus ECTA).',
    effectiveDate: 'Dec 29, 2022',
    dutyReduction: '0% duty on 98.3% of tariff lines', // Sourced: Commerce Ministry
    rulesOfOrigin: '35% to 40% value addition', // Standard ECTA RoO
    strategicAdvantage: 'Access to Oceania & Pacific Markets',
    dutyFreeItems: '100%', // Australia offers 100% tariff elimination
    avgShipping: '18-25 Days', // Realistic sea freight time
    primarySectors: 'Pharma, IT, Textiles, Furniture',
    image: '🦘',
    opportunities: [
      { id: 'pharma', icon: '💊', title: 'Pharmaceuticals', desc: 'Fast-track approval for Indian medicines approved by US/UK/EU regulators. Zero duty access.' },
      { id: 'textiles', icon: '👔', title: 'Textiles & Leather', desc: 'Immediate duty-free access for apparel and footwear. Level playing field with Vietnam/China.' },
      { id: 'engineering', icon: '🏗️', title: 'Engineering & Steel', desc: 'Zero duty on pipes, mining equipment and structures. "Melt and Pour" rule applies.' },
      { id: 'agriculture', icon: '🍇', title: 'Agri & Food', desc: 'Counter-seasonal opportunities for grapes and onions. Zero duty on processed foods and spices.' },
    ],
    faqs: [
      { q: 'Are there quotas under ECTA?', a: 'No tariffs on 100% of Indian goods lines. Some specific agricultural products have quotas (TRQ) but general goods are quota-free.' },
      { q: 'How does ECTA benefit students?', a: 'It offers post-study work visas for up to 4 years for STEM graduates and establishes a framework for mutual recognition of degrees.' },
      { q: 'What is the "Melt and Pour" rule for Steel?', a: 'For steel products to qualify, the "melt and pour" must happen in India, preventing third-country dumping.' },
    ]
  },
  japan: {
    name: 'Japan',
    flag: '🇯🇵',
    agreement: 'CEPA',
    fullName: 'Comprehensive Economic Partnership Agreement',
    heroTitle: 'Japan Market: CEPA Benefits',
    heroSub: 'Leveraging the India-Japan CEPA (2011) for high-tech and industrial exports.',
    effectiveDate: 'Aug 1, 2011',
    dutyReduction: 'Tariff elimination on 94% of trade',
    rulesOfOrigin: '35% VA + CTSH',
    strategicAdvantage: 'High-value Tech & Pharma Market',
    dutyFreeItems: '90%+',
    avgShipping: '15-20 Days',
    primarySectors: 'IT Services, Pharma, Marine',
    image: '🗾',
    opportunities: [
      { id: 'it-services', icon: '💻', title: 'IT Services', desc: 'Movement of natural persons (professionals) facilitated. Huge demand for Indian IT talent.' },
      { id: 'marine', icon: '🦐', title: 'Marine Products', desc: 'Zero duty on shrimps and prawns. Japan is a major buyer of Indian seafood.' },
      { id: 'apparel', icon: '👘', title: 'Apparel', desc: 'Zero duty access for Indian garments, competing with ASEAN nations.' },
      { id: 'generics', icon: '💊', title: 'Generics (Pharma)', desc: 'Growing market for Indian generic medicines due to aging Japanese population.' },
    ],
    faqs: [
      { q: 'Is Japanese language mandatory?', a: 'For many service sectors and visa categories, Japanese language proficiency (N3/N4) is highly recommended or required.' },
      { q: 'How strict are quality standards?', a: 'Extremely strict. Japan has some of the world’s highest non-tariff barriers related to quality/hygiene.' },
    ]
  },
  uk: {
    name: 'United Kingdom',
    flag: '🇬🇧',
    agreement: 'FTA',
    fullName: 'India-UK Free Trade Agreement',
    heroTitle: 'UK Market: FTA Benefits',
    heroSub: 'Leverage the newly signed India-UK FTA. Zero duty access for Textiles, Leather, and IT Services.',
    effectiveDate: 'Jan 1, 2025',
    dutyReduction: 'Tariff elimination on 99% of trade',
    rulesOfOrigin: 'CTSH + 40% Value Addition',
    strategicAdvantage: 'High-Value Consumer Market',
    dutyFreeItems: '98%',
    avgShipping: '22-28 Days',
    primarySectors: 'Textiles, IT, Auto, Food',
    image: '💂',
    opportunities: [
      { id: 'textiles', icon: '👔', title: 'Textiles & Apparel', desc: 'Now 0% duty (down from 9.6%). Indian garments are now continuously competitive against Bangladesh.' },
      { id: 'it-services', icon: '💻', title: 'IT Services', desc: 'New visa rules allow easier movement of professionals. Social Security agreements currently valid.' },
      { id: 'auto-components', icon: '🚗', title: 'Auto Components', desc: 'Zero duty on parts integrated into UK supply chains (JLR). Huge boost for Indian OEMs.' },
      { id: 'food-drink', icon: '🍷', title: 'Food & Drink', desc: 'Duty-free access for value-added food products. GI protection secured for Basmati Rice.' },
    ],
    faqs: [
      { q: 'Is the FTA fully active?', a: 'Yes, the agreement entered into force on Jan 1, 2025. You can now claim preferential duty benefits.' },
      { q: 'What about student visas?', a: 'The new deal includes provisions for post-study work rights, allowing Indian graduates to work in the UK for up to 2 years.' },
    ]
  },
  eu: {
    name: 'European Union',
    flag: '🇪🇺',
    agreement: 'BTIA',
    fullName: 'India-EU Broad-based Trade Agreement',
    heroTitle: 'EU Market: BTIA Benefits',
    heroSub: 'Duty-free access to the EU Single Market. Navigate "Green" barriers (CBAM) with new trade facilitation rules.',
    effectiveDate: 'Feb 1, 2025',
    dutyReduction: 'Tariff elimination on 90% of trade',
    rulesOfOrigin: 'Double Transformation (Textiles)',
    strategicAdvantage: 'World\'s Largest Single Market',
    dutyFreeItems: '90%+',
    avgShipping: '20-25 Days',
    primarySectors: 'Textiles, Leather, Engg, Agri',
    image: '🏛️',
    opportunities: [
      { id: 'textiles', icon: '♻️', title: 'Textiles (CBAM)', desc: '0% Duty achieved. Exporters must still comply with CBAM carbon reporting for sustainable sourcing.' },
      { id: 'leather', icon: '👞', title: 'Leather & Footwear', desc: 'Major win: Zero duty on leather goods. Compliance with REACH chemical norms remains mandatory.' },
      { id: 'engineering', icon: '🏭', title: 'Engineering (Steel)', desc: 'Zero duty on industrial goods. CBAM carbon tax reporting is simplified under the new deal.' },
      { id: 'agro', icon: '🌽', title: 'Agro (Food Safety)', desc: 'Easier clearance for organic products. MRL (pesticide) standards are strictly enforced.' },
    ],
    faqs: [
      { q: 'What about CBAM charges?', a: 'While customs duty is 0%, CBAM (Carbon Tax) still applies to high-emission sectors like Steel. The FTA simplifies reporting.' },
      { q: 'Is GSP still relevant?', a: 'The FTA supersedes GSP. You should now use the BTIA Certificate of Origin for permanent zero duty access.' },
    ]
  }
}

// Fallback for others
const DEFAULT_FTA = {
  name: 'Country',
  flag: '🌍',
  agreement: 'FTA',
  fullName: 'Free Trade Agreement',
  heroTitle: 'Market: FTA Benefits',
  heroSub: 'Guide for Indian manufacturers.',
  effectiveDate: 'TBD',
  dutyReduction: 'Under Negotiation',
  rulesOfOrigin: 'TBD',
  strategicAdvantage: 'Global Market Access',
  dutyFreeItems: 'TBD',
  avgShipping: 'TBD',
  primarySectors: 'Multiple sectors',
  image: '🌏',
  opportunities: [
    { id: 'general', icon: '📦', title: 'General Goods', desc: 'Potential duty benefits upon agreement enforcement.' },
  ],
  faqs: [
    { q: 'When will the FTA be active?', a: 'Negotiations are currently ongoing. Dates to be announced by the Ministry of Commerce.' },
  ]
}

function FTACountryDetail() {
  const { country } = useParams()
  // Normalizing country param
  const countryKey = country?.toLowerCase()
  const data = FTA_DATA[countryKey] || { ...DEFAULT_FTA, name: country?.replace(/-/g, ' ')?.toUpperCase() || 'Country' }
  const [openFaq, setOpenFaq] = useState(null)

  const NAV_ITEMS = ['Agreement Overview', 'Duty Benefits', 'Key Opportunities', 'Regulatory Compliance', 'Common FAQs']

  return (
    <div className="fcd">
      {/* Hero */}
      <section className="fcd-hero">
        <div className="container">
          <div className="fcd-breadcrumb">
            <Link to="/">Home</Link> › <Link to="/fta-hub">Countries</Link> › <span>{data.name}</span>
          </div>
          <h1>{data.heroTitle}</h1>
          <p>{data.heroSub}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="fcd-main">
        <div className="container">
          <div className="fcd-layout">
            {/* Left Sidebar */}
            <nav className="fcd-nav">
              <div className="fcd-nav-header">NAVIGATION<br/><small>Jump to section</small></div>
              {NAV_ITEMS.map((item, i) => (
                <a key={i} href={`#section-${i}`} className={`fcd-nav-item ${i === 0 ? 'active' : ''}`}>
                  <span className="fcd-nav-dot"></span> {item}
                </a>
              ))}
            </nav>

            {/* Main Content */}
            <main className="fcd-content">
              {/* Section 1: Agreement Overview */}
              <section id="section-0" className="fcd-section">
                <h2><span className="fcd-num">01.</span> Agreement Overview</h2>
                <p>The India-{data.name} {data.fullName} ({data.agreement}) entered into force on <strong>{data.effectiveDate}</strong>. It is a landmark pact increasing bilateral trade opportunities.</p>
                <p>For Indian manufacturers, this means immediate duty-free access for over {data.dutyFreeItems} of tariff lines. The agreement also provides a transparent and stable regulatory environment.</p>
                
                <table className="fcd-table">
                  <tbody>
                    <tr><td>Feature</td><td>Details</td></tr>
                    <tr><td>Effective Date</td><td>{data.effectiveDate}</td></tr>
                    <tr><td>Duty Reduction</td><td>{data.dutyReduction}</td></tr>
                    <tr><td>Rules of Origin</td><td>{data.rulesOfOrigin}</td></tr>
                    <tr><td>Strategic Advantage</td><td>{data.strategicAdvantage}</td></tr>
                  </tbody>
                </table>
              </section>

              {/* Section 2: Duty Benefits */}
              <section id="section-1" className="fcd-section">
                <h2><span className="fcd-num">02.</span> Duty Benefits</h2>
                <div className="fcd-benefit">
                  <span className="fcd-benefit-icon">✓</span>
                  <div>
                    <strong>Major Tariff Reductions</strong>
                    <p>Indian exports to {data.name} benefit from significant duty elimination. Key sectors like {data.primarySectors} gain immediate price competitiveness over non-FTA nations.</p>
                  </div>
                </div>
              </section>

              {/* Section 3: Key Opportunities */}
              <section id="section-2" className="fcd-section">
                <h2><span className="fcd-num">03.</span> Key Opportunities</h2>
                <div className="fcd-opps">
                  {data.opportunities.map((o, i) => (
                    <Link to={`/fta-hub/${country}/${o.id}`} key={i} className="fcd-opp">
                      <span className="fcd-opp-icon">{o.icon}</span>
                      <h4>{o.title}</h4>
                      <p>{o.desc}</p>
                    </Link>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              <section id="section-4" className="fcd-section">
                <h2>Frequently Asked Questions</h2>
                <div className="fcd-faqs">
                  {data.faqs.map((f, i) => (
                    <div key={i} className={`fcd-faq ${openFaq === i ? 'open' : ''}`}>
                      <button onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                        {f.q}
                        <span>{openFaq === i ? '−' : '+'}</span>
                      </button>
                      {openFaq === i && <p>{f.a}</p>}
                    </div>
                  ))}
                </div>
              </section>
            </main>

            {/* Right Sidebar */}
            <aside className="fcd-sidebar">
              <div className="fcd-snapshot">
                <div className="fcd-snapshot-header">
                  <span>📊</span> Market Snapshot
                </div>
                <div className="fcd-snapshot-item">
                  <small>DUTY-FREE ITEMS</small>
                  <strong>{data.dutyFreeItems}</strong>
                </div>
                <div className="fcd-snapshot-item">
                  <small>AVG. SHIPPING TIME</small>
                  <strong>{data.avgShipping}</strong>
                </div>
                <div className="fcd-snapshot-item">
                  <small>PRIMARY SECTORS</small>
                  <strong>{data.primarySectors}</strong>
                </div>
                <Link to="/contact" className="fcd-snapshot-btn">Download {data.name.split(' ')[0]} Guide →</Link>
              </div>

              <div className="fcd-help">
                <h4>Need custom analysis?</h4>
                <p>Our consultants help you navigate the 40% value-add compliance.</p>
                <Link to="/contact" className="fcd-help-btn">Book Free Consultation</Link>
              </div>

              <div className="fcd-image">{data.image}</div>
            </aside>
          </div>
        </div>
      </section>

      <style>{`
        .fcd { background: #f8fafc; }
        
        /* Hero */
        .fcd-hero { background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%); padding: 48px 0; color: #fff; }
        .fcd-breadcrumb { font-size: 13px; opacity: 0.9; margin-bottom: 16px; color: #e5e7eb; }
        .fcd-breadcrumb a { color: #fff; text-decoration: none; }
        .fcd-breadcrumb span { opacity: 0.8; }
        .fcd-hero h1 { font-size: 34px; font-weight: 800; margin-bottom: 12px; color: #ffffff; }
        .fcd-hero p { font-size: 16px; opacity: 0.95; max-width: 640px; line-height: 1.6; color: #f3f4f6; }

        /* Main */
        .fcd-main { padding: 48px 0 80px; }
        .fcd-layout { display: grid; grid-template-columns: 200px 1fr 300px; gap: 40px; }

        /* Nav */
        .fcd-nav { position: sticky; top: 100px; height: fit-content; }
        .fcd-nav-header { font-size: 12px; font-weight: 700; color: #6b7280; margin-bottom: 16px; letter-spacing: 0.5px; }
        .fcd-nav-header small { font-weight: 400; font-size: 11px; }
        .fcd-nav-item {
          display: flex; align-items: center; gap: 10px; padding: 10px 0;
          font-size: 14px; color: #4b5563; border-left: 2px solid transparent;
          padding-left: 16px; margin-left: -2px; transition: all 0.2s;
        }
        .fcd-nav-item:hover { color: #1d4ed8; }
        .fcd-nav-item.active { color: #1d4ed8; border-left-color: #1d4ed8; font-weight: 600; }
        .fcd-nav-dot { width: 6px; height: 6px; background: currentColor; border-radius: 50%; opacity: 0.6; }

        /* Content */
        .fcd-section { margin-bottom: 56px; scroll-margin-top: 100px; }
        .fcd-section h2 { font-size: 24px; font-weight: 700; color: #111827; margin-bottom: 20px; }
        .fcd-num { color: #1d4ed8; margin-right: 8px; }
        .fcd-section p { font-size: 15px; color: #374151; line-height: 1.7; margin-bottom: 16px; }

        /* Table */
        .fcd-table { width: 100%; border-collapse: separate; border-spacing: 0; margin-top: 24px; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; background: #fff; }
        .fcd-table td { padding: 16px 20px; border-bottom: 1px solid #e5e7eb; font-size: 15px; color: #1f2937; }
        .fcd-table tr:last-child td { border-bottom: none; }
        .fcd-table tr td:first-child { font-weight: 600; color: #6b7280; width: 40%; background: #f9fafb; font-size: 14px; }
        .fcd-table tr td:last-child { color: #111827; font-weight: 500; }

        /* Benefit */
        .fcd-benefit { display: flex; gap: 20px; background: #eff6ff; padding: 24px; border-radius: 12px; border: 1px solid #dbeafe; }
        .fcd-benefit-icon { 
          width: 32px; height: 32px; background: #2563eb; color: #fff; border-radius: 50%; 
          display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; font-weight: bold;
        }
        .fcd-benefit strong { display: block; font-size: 16px; color: #1e3a8a; margin-bottom: 8px; font-weight: 700; }
        .fcd-benefit p { margin: 0; font-size: 14px; color: #1e40af; line-height: 1.6; }

        /* Opportunities */
        .fcd-opps { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .fcd-opp { 
          background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; 
          padding: 24px; transition: all 0.2s; display: block;
        }
        .fcd-opp:hover { box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); border-color: #d1d5db; transform: translateY(-2px); text-decoration: none; }
        .fcd-opp-icon { font-size: 32px; display: block; margin-bottom: 16px; }
        .fcd-opp h4 { font-size: 16px; font-weight: 700; color: #111827; margin-bottom: 8px; }
        .fcd-opp p { font-size: 14px; color: #4b5563; margin: 0; line-height: 1.6; }

        /* FAQs */
        .fcd-faqs { display: flex; flex-direction: column; gap: 16px; }
        .fcd-faq { background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; transition: all 0.2s; }
        .fcd-faq.open { border-color: #dbeafe; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
        .fcd-faq button { 
          width: 100%; display: flex; justify-content: space-between; align-items: center;
          padding: 18px 24px; font-size: 15px; font-weight: 600; color: #111827; 
          background: #fff; border: none; cursor: pointer; text-align: left; 
        }
        .fcd-faq button:hover { background: #f9fafb; }
        .fcd-faq button span { color: #3b82f6; font-size: 20px; font-weight: 300; }
        .fcd-faq p { padding: 0 24px 20px; font-size: 14px; color: #4b5563; line-height: 1.6; margin: 0; border-top: 1px solid #f3f4f6; padding-top: 16px; }

        /* Sidebar */
        .fcd-sidebar { display: flex; flex-direction: column; gap: 24px; }
        .fcd-snapshot { background: #1e3a8a; color: #fff; border-radius: 16px; padding: 28px; box-shadow: 0 10px 15px -3px rgba(30, 58, 138, 0.4); }
        .fcd-snapshot-header { display: flex; align-items: center; gap: 10px; font-size: 16px; font-weight: 700; margin-bottom: 24px; color: #fff; }
        .fcd-snapshot-item { margin-bottom: 20px; }
        .fcd-snapshot-item small { font-size: 11px; opacity: 0.8; display: block; margin-bottom: 4px; letter-spacing: 1px; font-weight: 600; text-transform: uppercase; color: #bfdbfe; }
        .fcd-snapshot-item strong { font-size: 20px; font-weight: 700; color: #fff; }
        .fcd-snapshot-btn { 
          display: block; background: #fff; color: #1e3a8a; text-align: center; 
          padding: 12px; border-radius: 8px; font-size: 14px; font-weight: 700; margin-top: 16px; 
          transition: background 0.2s;
        }
        .fcd-snapshot-btn:hover { background: #eff6ff; }

        .fcd-help { background: #fff; border: 1px solid #e5e7eb; border-radius: 16px; padding: 24px; }
        .fcd-help h4 { font-size: 16px; font-weight: 700; color: #111827; margin-bottom: 8px; }
        .fcd-help p { font-size: 14px; color: #4b5563; margin-bottom: 20px; line-height: 1.5; }
        .fcd-help-btn { 
          display: block; text-align: center; border: 1px solid #2563eb; color: #2563eb; 
          padding: 12px; border-radius: 8px; font-size: 14px; font-weight: 600; transition: all 0.2s; 
        }
        .fcd-help-btn:hover { background: #eff6ff; }

        .fcd-image { 
          background: linear-gradient(135deg, #0f172a, #1e293b); border-radius: 16px; height: 160px; 
          display: flex; align-items: center; justify-content: center; font-size: 64px; 
          border: 4px solid #fff; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
        }

        @media (max-width: 1024px) {
          .fcd-layout { grid-template-columns: 1fr; }
          .fcd-nav { display: none; }
          .fcd-opps { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  )
}

export default FTACountryDetail
