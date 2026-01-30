import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'

const INDUSTRY_DATA = {
  // --- UAE (CEPA) ---
  'uae-gems-jewelry': {
    title: 'Golden Bridge: Leveraging India-UAE CEPA for Gems & Jewelry',
    author: 'Trade Policy Team',
    date: 'Jan 15, 2025',
    readTime: '10 min read',
    heroImage: '💎',
    intro: 'The India-UAE CEPA is a watershed moment for the gems and jewelry sector, offering 0% duty access to the UAE—a massive advantage over the standard 5% duty. This guide details how to meet the 40% Value Addition norms to claim this benefit.',
    marketAnalysis: [
      { label: 'Current Exports', value: '$12.0B' },
      { label: 'Duty Advantage', value: '5% → 0%' },
      { label: 'Growth Potential', value: '+20% YoY' }
    ],
    sections: [
      {
        title: 'The Duty Advantage',
        content: 'Indian exporters now enjoy 0% import duty on plain gold jewelry, studded gold jewelry, and cut & polished diamonds in the UAE. This 5% margin is critical in a high-volume, low-margin trade.',
        bullets: [
          'Immediate 0% duty on Gold Jewelry (saving 5%)',
          '0% on Silver & Platinum Jewelry',
          'UAE acts as a re-export hub for 500M+ consumers in MENA'
        ]
      }
    ],
    roo: {
      rule: 'CTSH + 40% VA',
      desc: 'Change in Tariff Sub-Heading (CTSH) plus 40% Value Addition in India.',
      tips: ['Value Addition is calculated on FOB value.', 'Gold sourcing from nominated agencies simplifies audit trail.', 'Making charges and profit margin count towards VA.']
    },
    ntbs: [
      { title: 'Hallmarking', desc: 'UAE requires recognized hallmarking. BIS hallmarking is generally accepted but verification may occur.' },
      { title: 'KYC Norms', desc: 'Strict anti-money laundering (AML) and KYC norms for high-value transactions in Dubai Gold Souk.' }
    ],
    logistics: {
      time: '2-3 Days (Air Freight)',
      ports: ['Dubai International Airport (DXB)', 'Al Maktoum International (DWC)'],
      tips: 'Use secured logistics providers (Brinks, Malca-Amit) for high-value shipments.'
    },
    docRequirements: 'Certificate of Origin (CoO) from GJEPC/EIC is mandatory. Self-certification is NOT permitted under CEPA.',
    complianceSteps: [
      { title: 'Calculate VA', desc: 'Ensure (FOB - Import Cost) / FOB >= 40%.' },
      { title: 'Get CoO', desc: 'Apply for IA-CEPA CoO via DGFT portal.' },
      { title: 'Customs Declaration', desc: 'Mention CoO number in UAE Customs Bill of Entry.' }
    ],
    relatedTags: ['Gold', 'Luxury', 'CEPA', 'Zero Duty']
  },
  'uae-textiles': {
    title: 'Weaving Success: Zero Duty Textiles Exports to UAE',
    author: 'Textile Bureau',
    date: 'Jan 20, 2025',
    readTime: '8 min read',
    heroImage: '🧵',
    intro: 'Indian textiles face stiff competition from Vietnam and Bangladesh. The CEPA removes the 5% duty disadvantage, making Indian garments 5% cheaper instantly. This guide covers the "Double Transformation" rule needed to qualify.',
    marketAnalysis: [
      { label: 'Export Target', value: '$5.0B' },
      { label: 'Tariff Cut', value: '5% → 0%' },
      { label: 'Key Market', value: 'Re-export' }
    ],
    sections: [
      {
        title: 'Strategic Edge',
        content: 'The 0% duty applies to huge categories: readymade garments, made-ups (bed linen), and technical textiles. This levels the playing field against LDC nations.',
        bullets: [
          '0% Duty on Cotton & MMF Garments',
          'Preferential access for Home Textiles',
          'Boost for "China Plus One" sourcing strategy'
        ]
      }
    ],
    roo: {
      rule: 'CTSH + 40% VA (or Double Transformation)',
      desc: 'Products must generally undergo "Double Transformation" - e.g., Yarn -> Fabric -> Garment, ensuring substantial processing in India.',
      tips: ['Spinning and Weaving/Knitting must happen in India.', 'Imported fabric generally disqualifies garments from 0% duty.']
    },
    ntbs: [
      { title: 'Labeling', desc: 'Arabic & English labeling mandatory. Care instructions must use ISO symbols.' },
      { title: 'Sustainability', desc: 'Growing preference for recycled (rPET) polyester and organic cotton.' }
    ],
    logistics: {
      time: '4-6 Days (Sea) / 1 Day (Air)',
      ports: ['Jebel Ali Port'],
      tips: 'Jebel Ali is a tea-pot port; ensure packaging is robust for re-handling.'
    },
    docRequirements: 'Standard CoO. Proof of yarn/fabric origin may be requested for large shipments.',
    complianceSteps: [
      { title: 'Source Traceability', desc: 'Maintain records of fiber/yarn origin.' },
      { title: 'Lab Testing', desc: 'Ensure AZO-free dyes compliance.' },
      { title: 'Shipment', desc: 'Book FCL for cost audit efficiency.' }
    ],
    relatedTags: ['Apparel', 'Cotton', 'Fashion', 'Sourcing']
  },
  'uae-agro-products': {
    title: 'Food Security Corridor: Agri-Export Opportunities in UAE',
    author: 'Agri-Export Cell',
    date: 'Dec 12, 2024',
    readTime: '9 min read',
    heroImage: '🌾',
    intro: 'The UAE imports 85% of its food. CEPA secures this supply chain, offering India preferential access. Key wins include seasonal duty cuts and the "Food Security Corridor" initiative.',
    marketAnalysis: [
      { label: 'Food Imports', value: '$14B/yr' },
      { label: 'India Share', value: 'Growing' },
      { label: 'Key Items', value: 'Rice, Fruits' }
    ],
    sections: [
      {
        title: 'Seasonal Benefits',
        content: 'UAE offers seasonal duty elimination for Indian fruits/vegetables when local production is low. Access is duty-free for Basmati rice, tea, and spices year-round.',
        bullets: [
          '0% on Basmati Rice & Tea',
          'Seasonal 0% on Mangoes/Grapes',
          'Fast-track clearance for perishables'
        ]
      }
    ],
    roo: {
      rule: 'Wholly Obtained (WO)',
      desc: 'For raw produce, goods must be "Wholly Obtained" (grown and harvested) in India.',
      tips: ['No mixing with third-country produce.', 'Phytosanitary certificate is key.']
    },
    ntbs: [
      { title: 'MRL Limits', desc: 'Strict Maximum Residue Limits (MRL) for pesticides. EU standards often apply.' },
      { title: 'Halal', desc: 'Mandatory Halal certification for all meat and processed food products containing animal derivatives.' }
    ],
    logistics: {
      time: '3-4 Days (Sea)',
      ports: ['Jebel Ali', 'Khalifa Port'],
      tips: 'Use reefers (refrigerated containers) for fresh produce. Cold chain integrity is vital.'
    },
    docRequirements: 'Phytosanitary Certificate, Halal Certificate (if applicable), CoO.',
    complianceSteps: [
      { title: 'Pest Check', desc: 'Pre-shipment inspection for pests.' },
      { title: 'Pack House', desc: 'Pack in APEDA-approved pack houses.' },
      { title: 'Cooling', desc: 'Pre-cool produce to remove field heat.' }
    ],
    relatedTags: ['Rice', 'Mangoes', 'Food Security', 'Halal']
  },
  'uae-engineering': {
    title: 'Building the Future: Engineering Exports to UAE',
    author: 'EEPC India',
    date: 'Nov 30, 2024',
    readTime: '7 min read',
    heroImage: '⚙️',
    intro: 'With massive infrastructure projects in UAE and Saudi Arabia (NEOM), demand for Indian engineering goods is skyrocketing. CEPA grants 0% duty on machinery, electricals, and auto parts.',
    marketAnalysis: [
      { label: 'Infra Spend', value: '$100B+' },
      { label: 'Duty Cut', value: '5% → 0%' },
      { label: 'Demand', value: 'High' }
    ],
    sections: [
      {
        title: 'Industrial Goods Advantage',
        content: 'UAE industrialization plans require reliable machinery. Indian pumps, valves, and compressors now enter duty-free, displacing costlier European alternatives.',
        bullets: [
          '0% on HVAC equipment',
          '0% on Auto Components',
          'Steel pipes & tubes benefits'
        ]
      }
    ],
    roo: {
      rule: 'CTSH + 40% VA',
      desc: 'Substantial manufacturing must occur in India. Simple assembly of imported kits does NOT qualify.',
      tips: ['Casting/Forging in India helps meet VA.', 'Design engineering costs can be part of VA.']
    },
    ntbs: [
      { title: 'ESMA Standards', desc: 'Emirates Authority for Standardization and Metrology (ESMA) certification required for electricals.' },
      { title: 'Energy Labels', desc: 'Star rating labels for appliances (ACs, pumps).' }
    ],
    logistics: {
      time: '3-5 Days',
      ports: ['Jebel Ali', 'Sharjah'],
      tips: 'Flat rack containers for ODC (Over Dimensional Cargo) machinery.'
    },
    docRequirements: 'Mill Test Certificates (MTC), CoO, Commercial Invoice.',
    complianceSteps: [
      { title: 'Check ESMA', desc: 'Verify product standards on ESMA portal.' },
      { title: 'Tech Files', desc: 'Prepare technical files for certification.' },
    ],
    relatedTags: ['Machinery', 'Construction', 'Auto Parts']
  },

  // --- Australia (ECTA) ---
  'australia-pharma': {
    title: 'Healthy Trade: Pharma Exports to Australia under ECTA',
    author: 'Pharmexcil',
    date: 'Feb 1, 2025',
    readTime: '11 min read',
    heroImage: '💊',
    intro: 'ECTA is a breakthrough for Indian generics. The "Annex on Pharmaceutical Products" allows fast-track TGA approval for drugs already approved by US/UK/EU/Canada regulators, saving years of compliance time.',
    marketAnalysis: [
      { label: 'Market Size', value: '$14B' },
      { label: 'Generic Share', value: 'Rising' },
      { label: 'Approvals', value: 'Fast-Track' }
    ],
    sections: [
      {
        title: 'Regulatory Harmonization',
        content: 'The biggest win is NOT just 0% duty, but the recognition of GMP inspections and bio-equivalence studies from stringent regulatory authorities (USFDA, MHRA).',
        bullets: [
          'Fast-track TGA registration',
          '0% Duty (access to PBS procurement)',
          'Focus on Generic Medicines & APIs'
        ]
      }
    ],
    roo: {
      rule: 'CTSH + 35% VA',
      desc: 'Active Ingredient (API) to Formulation usually qualifies. Pure trading of imported drugs does not.',
      tips: ['Formulation/packaging in India allows VA claim.', 'R&D costs differ in calculation.']
    },
    ntbs: [
      { title: 'TGA Audit', desc: 'Therapeutic Goods Administration (TGA) audits are rigorous. ECTA reduces frequency if USFDA approved.' },
      { title: 'Packaging', desc: 'Strict serialization and labeling norms for Australia.' }
    ],
    logistics: {
      time: 'Air Freight Preferred',
      ports: ['Sydney', 'Melbourne'],
      tips: 'Cold chain monitoring is mandatory for most pharma.'
    },
    docRequirements: 'TGA GMP Clearance, CoO, Batch Release Certificates.',
    complianceSteps: [
      { title: 'GMP Check', desc: 'Ensure manufacturing unit has valid GMP.' },
      { title: 'Dossier', desc: 'Submit dossier citing reference regulator approvals.' },
    ],
    relatedTags: ['Generics', 'TGA', 'Healthcare']
  },
  'australia-textiles': {
    title: 'Dressing Down Under: Australian Textile Market Access',
    author: 'Texprocil',
    date: 'Jan 28, 2025',
    readTime: '8 min read',
    heroImage: '🧶',
    intro: 'Australia imports almost all its textiles. ECTA removes the 5% duty, giving India parity with China and Vietnam. Bed linen (made-ups) and apparel see the biggest immediate gains.',
    marketAnalysis: [
      { label: 'Duty Cut', value: '5% → 0%' },
      { label: 'India Share', value: 'Low < 5%' },
      { label: 'Opportunity', value: 'High' }
    ],
    sections: [
      {
        title: 'Home Textiles focus',
        content: 'Australia has high per-capita spend on home textiles (bedsheets, towels). Indian cotton quality is preferred. The 0% duty allows better margins for suppliers to major Aussie retailers (Kmart, Target, Big W).',
        bullets: ['0% Duty on Bed Linen', '0% on Towels & Rugs', 'Readymade Garment benefits']
      }
    ],
    roo: {
      rule: 'CTSH + 35% VA',
      desc: 'Substantial transformation from fabric to made-up article required in India.',
      tips: ['Sourcing Australian wool for processing and re-export is incentivized.']
    },
    ntbs: [
      { title: 'Flammability', desc: 'Strict flammability standards for children\'s nightwear.' },
      { title: 'Ethical Sourcing', desc: 'Modern Slavery Act compliance required by large Aussie buyers.' }
    ],
    logistics: {
      time: '18-25 Days (Sea)',
      ports: ['Melbourne', 'Sydney', 'Brisbane'],
      tips: 'LCL consolidation works well for smaller fashion orders.'
    },
    docRequirements: 'Modern Slavery Declaration, CoO, Lab Test Reports.',
    complianceSteps: [
      { title: 'Test Flammability', desc: 'Lab test for AS/NZS 1249 standard.' },
      { title: 'SEDEX Audit', desc: 'Social compliance audit for ethical sourcing.' },
    ],
    relatedTags: ['Cotton', 'Home Textiles', 'Fashion']
  },
  'australia-agriculture': {
    title: 'Counter-Seasonal Trade: Agri-Exports to Australia',
    author: 'APEDA',
    date: 'Feb 5, 2025',
    readTime: '9 min read',
    heroImage: '🍇',
    intro: 'Australia is a strict bio-security market. However, ECTA opens doors for counter-seasonal produce (grapes, onions) when Australian production is offline. Processed foods also see 0% duty.',
    marketAnalysis: [
      { label: 'Bio-Security', value: 'Very High' },
      { label: 'Duty', value: '0%' },
      { label: 'Niche', value: 'Ethnic Food' }
    ],
    sections: [
      {
        title: 'The Ethnic Food Channel',
        content: 'The growing Indian diaspora in Australia drives demand for spices, lentils, and traditional snacks. ECTA ensures these enter duty-free.',
        bullets: ['0% on Spices & Pickles', '0% on Basmati Rice', 'Table Grapes market access']
      }
    ],
    roo: {
      rule: 'Wholly Obtained',
      desc: 'Produce must be grown in India.',
      tips: ['Processed foods: CTSH + 35% VA.']
    },
    ntbs: [
      { title: 'BICON', desc: 'Must check Biosecurity Import Conditions (BICON) database.' },
      { title: 'Fumigation', desc: 'Strict fumigation requirements (Methyl Bromide) for many items.' }
    ],
    logistics: {
      time: '20+ Days (Sea)',
      ports: ['Perth (Fremantle)', 'Sydney'],
      tips: 'Heat treatment often required for wooden packaging (ISPM 15).'
    },
    docRequirements: 'Phytosanitary Cert, Fumigation Cert, Manufacturer Declaration.',
    complianceSteps: [
      { title: 'Check BICON', desc: 'Verify import permit requirement.' },
      { title: 'Treat Wood', desc: 'Ensure pallets are treated.' },
    ],
    relatedTags: ['Spices', 'Rice', 'Diaspora']
  },
  'australia-engineering': {
    title: 'Steel & Structure: Engineering Exports to Australia',
    author: 'EEPC India',
    date: 'Jan 10, 2025',
    readTime: '7 min read',
    heroImage: '🏗️',
    intro: 'Mining and construction drive Australian demand. ECTA eliminates the 5% duty on steel pipes, structures, and automotive components. The "Melt and Pour" rule is key here.',
    marketAnalysis: [
      { label: 'Mining', value: 'Key Driver' },
      { label: 'Duty', value: '0%' },
      { label: 'Steel Rule', value: 'Strict' }
    ],
    sections: [
      {
        title: 'Strategic Steel Exports',
        content: 'To prevent dumping of third-country steel, ECTA requires steel products to be "melted and poured" in India to claim benefits. This gives genuine Indian manufacturers a huge advantage.',
        bullets: ['0% on Steel Pipes', '0% on Mining Equipment Parts', 'Auto Component access']
      }
    ],
    roo: {
      rule: 'Melt and Pour (Steel)',
      desc: 'Raw steel must be produced in India, not just rolled/cut.',
      tips: ['Mill Test Certificate must trace back to Indian furnace.']
    },
    ntbs: [
      { title: 'Standards', desc: 'Australian Standards (AS) are mandatory for construction steel.' },
      { title: 'Warranty', desc: 'Long warranty periods expected in B2B contracts.' }
    ],
    logistics: {
      time: '20-25 Days',
      ports: ['Port Hedland (Mining)', 'Brisbane'],
      tips: 'Heavy lift capability required for mining equipment.'
    },
    docRequirements: 'Mill Test Cert (MTC), CoO, AS Certification proof.',
    complianceSteps: [
      { title: 'AS Cert', desc: 'Get product certified to Australian Standards.' },
      { title: 'Traceability', desc: 'Maintain heat number traceability.' },
    ],
    relatedTags: ['Steel', 'Mining', 'Construction']
  },

  // --- Japan (CEPA) ---
  'japan-it-services': {
    title: 'Digital Bridges: IT Services & Visa Mobility to Japan',
    author: 'NASSCOM',
    date: 'Feb 12, 2025',
    readTime: '9 min read',
    heroImage: '💻',
    intro: 'Japan\'s aging population and digitization drive (Society 5.0) create massive demand for Indian IT. The India-Japan CEPA facilitates movement of professionals, but language remains the key key.',
    marketAnalysis: [
      { label: 'IT Market', value: '$100B+' },
      { label: 'Visa', value: 'Facilitated' },
      { label: 'Barrier', value: 'Language' }
    ],
    sections: [{
      title: 'Movement of Natural Persons',
      content: 'Under CEPA Annex 7, Japan grants entry to Indian professionals (Contractual Service Suppliers) in broad categories including IT, Engineering, and Consulting.',
      bullets: ['Visa validity up to 3-5 years', 'Spouse working rights involved', 'Simplified entry for certified IT engineers']
    }],
    roo: { rule: 'N/A (Services)', desc: 'Service must be provided by Indian citizen/company.', tips: ['JITEC exam certification helps visa processing.'] },
    ntbs: [{ title: 'Language', desc: 'N3/N2 level Japanese proficiency often a "de facto" barrier for onsite work.' }],
    logistics: { time: 'N/A', ports: [], tips: 'Cultural training is as important as technical skill.' },
    docRequirements: 'Certificate of Eligibility (CoE), Employment Contract, Degree Certs.',
    complianceSteps: [{ title: 'JITEC', desc: 'Clear Japan IT Engineers Exam.' }, { title: 'JLPT', desc: 'Achieve JLPT N3/N4 certification.' }],
    relatedTags: ['IT', 'Visa', 'Services']
  },
  'japan-marine': {
    title: 'Blue Economy: Marine Exports to Japan',
    author: 'MPEDA',
    date: 'Mar 1, 2025',
    readTime: '8 min read',
    heroImage: '🦐',
    intro: 'Japan is the world\'s largest seafood consumer per capita. India-Japan CEPA offers duty-free access for Shrimps and Prawns, India\'s biggest marine export.',
    marketAnalysis: [
      { label: 'Duty', value: '0%' },
      { label: 'Quality', value: 'Extremely High' },
      { label: 'Demand', value: 'Stable' }
    ],
    sections: [{
        title: 'Sushi-Grade Opportunities',
        content: 'While Black Tiger shrimp faces competition, Vennamei shrimp from India enters duty-free. The real challenge is satisfying the Japanese consumer\'s ultra-high quality standards.',
        bullets: ['0% on Frozen Shrimp', '0% on Processed Crab', 'Sashimi-grade acceptance premiums']
      }],
    roo: { rule: 'Wholly Obtained', desc: 'Caught by Indian vessels or farmed in India.', tips: ['Traceability from farm to fork is essential.'] },
    ntbs: [{ title: 'Antibiotics', desc: 'Zero tolerance for banned antibiotics (Furazolidone, AOZ). 100% testing often applied.' }],
    logistics: { time: '15-20 Days', ports: ['Tokyo', 'Osaka', 'Yokohama'], tips: 'Reefer containers with data loggers mandatory.' },
    docRequirements: 'Health Certificate (EIA), Catch Certificate, CoO.',
    complianceSteps: [{ title: 'Pre-harvest Test', desc: 'Test for ELISA/HPLC antibiotics.' }, { title: 'Health Cert', desc: 'EIA inspection mandatory.' }],
    relatedTags: ['Shrimp', 'Seafood', 'Cold Chain']
  },
  'japan-apparel': {
    title: 'Fashion Forward: Apparel Exports to Japan',
    author: 'AEPC',
    date: 'Feb 20, 2025',
    readTime: '8 min read',
    heroImage: '👘',
    intro: 'Japan allows 0% duty on Indian apparel imports. This is a crucial market for high-value, smaller volume specialized garments, unlike the volume-driven US market.',
    marketAnalysis: [
      { label: 'Duty', value: '0%' },
      { label: 'Volume', value: 'Medium' },
      { label: 'Margin', value: 'High' }
    ],
    sections: [{
      title: 'Niche Fashion Access',
      content: 'Indian silk, hand-embroidered garments, and organic cotton wear find a premium market in Japan. CEPA ensures they land 10% cheaper than non-FTA competitors.',
      bullets: ['0% Duty vs 10% MFN', 'High demand for "Natural" fibers', 'Strict quality enforcement']
    }],
    roo: { rule: 'CTSH + 35% VA', desc: 'Fabric can be imported if substantial transformation happens.', tips: ['Japan Q-TEC inspection standard is industry norm.'] },
    ntbs: [{ title: 'Needle Policy', desc: '100% needle detection test required. No broken needles allowed.' }, { title: 'JIS Standards', desc: 'Sizing must strictly follow JIS norms.' }],
    logistics: { time: '15-20 Days', ports: ['Yokohama', 'Kobe'], tips: 'GOH (Garment on Hanger) containers preferred for suits.' },
    docRequirements: 'Needle Detection Report, CoO, Packing List.',
    complianceSteps: [{ title: 'Detect Needles', desc: 'Pass through metal detector.' }, { title: 'Inspection', desc: 'Third-party (Q-TEC/Kaken) inspection report.' }],
    relatedTags: ['Fashion', 'Silk', 'Quality']
  },
  'japan-generics': {
    title: 'Pharma Frontiers: Generic Medicines in Japan',
    author: 'Pharmexcil',
    date: 'Jan 25, 2025',
    readTime: '10 min read',
    heroImage: '💊',
    intro: 'Japan represents a tough but lucrative market ($80B+). The government target to reach 80% generic substitution opens doors, provided Indian firms can meet PMDA\'s stringent quality culture.',
    marketAnalysis: [
      { label: 'Market', value: '#2 in World' },
      { label: 'Generics', value: 'Govt Push' },
      { label: 'Barrier', value: 'Quality' }
    ],
    sections: [{
      title: 'The Quality Barrier',
      content: 'CEPA offers lower duties, but the real key is partnering with local Japanese pharma companies who hold the Marketing Authorization (MA).',
      bullets: ['API Exports focus', 'Contract Manufacturing (CMO) opportunities', 'Govt push for cost reduction']
    }],
    roo: { rule: 'CTSH + 35%', desc: 'API manufacturing in India qualifies.', tips: ['PMDA "Accreditation of Foreign Manufacturers" is the first step.'] },
    ntbs: [{ title: 'PMDA Audit', desc: 'PMDA (Japan Regulator) audits are more focus on "culture of quality" than just checklists.' }],
    logistics: { time: 'Air Freight', ports: ['Narita', 'Kansai'], tips: 'Temperature excursion limits are extremely tight.' },
    docRequirements: 'PMDA Accreditation, GMP, CoO.',
    complianceSteps: [{ title: 'Accreditation', desc: 'Apply for Foreign Manufacturer Accreditation.' }, { title: 'Partner', desc: 'Find local MA holder.' }],
    relatedTags: ['Pharma', 'API', 'Quality']
  },

  // --- UK (Signed - Active) ---
  'uk-textiles': {
    title: 'UK Market: Zero Duty Access',
    author: 'Texprocil',
    date: 'Jan 5, 2025',
    readTime: '7 min read',
    heroImage: '🇬🇧',
    intro: 'The historic India-UK FTA has eliminated the ~9.6% tariff on Indian textiles. This immediate 0% duty puts Indian exporters on par with LDCs like Bangladesh, triggering a massive comparative advantage.',
    marketAnalysis: [
      { label: 'Old Duty', value: '9.6%' },
      { label: 'New Duty', value: '0%' },
      { label: 'Competition', value: 'Beaten' }
    ],
    sections: [{
      title: 'The Parity Victory',
      content: 'With duties gone, Indian cotton garments are now 10% cheaper for UK buyers. Major high-street brands (M&S, Next) are already pivoting sourcing back to India for its "farm-to-fashion" integration.',
      bullets: ['Immediate 0% Duty', 'Competitive vs Bangladesh', 'Vertical integration advantage']
    }],
    roo: { rule: 'Double Transformation', desc: 'Yarn to Fabric to Garment must happen in India.', tips: ['Sourcing fabric from China disqualifies the 0% duty.'] },
    ntbs: [{ title: 'ESG', desc: 'Environmental, Social, and Governance (ESG) reporting is mandatory for UK retailers.' }],
    logistics: { time: '22-28 Days', ports: ['Felixstowe', 'Southampton'], tips: 'Ensure DDP terms clarify who pays VAT.' },
    docRequirements: 'Commercial Invoice, UK-India FTA CoO, UKCA mark.',
    complianceSteps: [{ title: 'Audit', desc: 'Complete SMETA/SEDEX audit.' }, { title: 'Labels', desc: 'Ensure UKCA labelling where applicable.' }],
    relatedTags: ['Textiles', 'Zero Duty', 'Fashion']
  },
  'uk-it-services': {
    title: 'Tech Talent: Visa Mobility Unlocked',
    author: 'NASSCOM',
    date: 'Jan 12, 2025',
    readTime: '6 min read',
    heroImage: '⌨️',
    intro: 'The FTA serves as a "Digital Trade Highway". Following the Australia model, the UK now grants easier Tier-2 visas for Indian professionals and eliminates dual Social Security taxation.',
    marketAnalysis: [
      { label: 'Mobility', value: 'Secured' },
      { label: 'Tax Save', value: '14%' },
      { label: 'Demand', value: 'High' }
    ],
    sections: [{
      title: 'Social Security Totalization',
      content: 'The Totalization Agreement is live. Indian professionals on short-term assignments no longer pay UK National Insurance, saving Indian IT firms ~14% in costs.',
      bullets: ['No Double Taxation', 'Easier Intra-Company Transfers', 'Mutual recognition of degrees']
    }],
    roo: { rule: 'Service Origin', desc: 'Based on company registration.', tips: ['Sponsorship license is key for UK branches.'] },
    ntbs: [{ title: 'Salary Thresholds', desc: 'UK minimum salary thresholds remain but are streamlined for FTA routes.' }],
    logistics: { time: 'N/A', ports: [], tips: '' },
    docRequirements: 'CoS (Certificate of Sponsorship), Visa, CoO (Services).',
    complianceSteps: [{ title: 'Sponsor', desc: 'UK entity must have sponsorship license.' }],
    relatedTags: ['Visa', 'Tech', 'Services']
  },
  'uk-auto-components': {
    title: 'Driving Supply: Duty-Free Components',
    author: 'ACMA',
    date: 'Jan 20, 2025',
    readTime: '7 min read',
    heroImage: '🚗',
    intro: 'Tariffs of 2-4% are abolished. Indian forgings, shafts, and castings now enter the UK duty-free, seamlessly integrating into JLR and Mini supply chains.',
    marketAnalysis: [
      { label: 'Duty', value: '0%' },
      { label: 'Integration', value: 'Deep' },
      { label: 'Opportunity', value: 'EV Parts' }
    ],
    sections: [{
      title: 'Deep Supply Chain Integration',
      content: 'With Tata Motors (JLR) expanding EV production in the UK, the FTA creates a friction-free corridor for Indian-made EV motors, batteries, and chassis components.',
      bullets: ['0% Duty on Auto Parts', 'Focus on EV Components', 'Just-In-Time corridor']
    }],
    roo: { rule: 'CTSH + 40%', desc: 'Standard industrial rule.', tips: ['Steel origin must be traced.'] },
    ntbs: [{ title: 'VCA', desc: 'Vehicle Certification Agency (VCA) type approval required.' }],
    logistics: { time: '25 Days', ports: ['Liverpool', 'London Gateway'], tips: 'JIT delivery is often contractually required.' },
    docRequirements: 'Type Approval Certs, ISO/TS 16949, FTA CoO.',
    complianceSteps: [{ title: 'Certification', desc: 'VCA Type Approval.' }],
    relatedTags: ['Auto', 'Engineering', 'Zero Duty']
  },
  'uk-food-drink': {
    title: 'A Toast to Trade: Scotch & Spices',
    author: 'APEDA',
    date: 'Feb 1, 2025',
    readTime: '6 min read',
    heroImage: '🍷',
    intro: 'The deal is done. UK slashed whisky duties, and in return, Indian value-added foods (Mango Pulp, Spices, Poppadoms) now enter the UK at 0% duty. Basmati GI is fully protected.',
    marketAnalysis: [
      { label: 'Duty', value: '0%' },
      { label: 'Basmati', value: 'Protected' },
      { label: 'Whisky', value: 'Reciprocal' }
    ],
    sections: [{
      title: 'Gourmet Market Access',
      content: 'The UK\'s love for Indian food is legendary. With duties gone on processed foods, competitive pricing helps Indian brands dominate the supermarket shelves.',
      bullets: ['0% on Spices & Mixes', 'GI Protection for Basmati', 'Market access for Mangoes']
    }],
    roo: { rule: 'Wholly Obtained', desc: 'Crucial for GI products like Basmati.', tips: ['DNA testing for Basmati authenticity is mandatory.'] },
    ntbs: [{ title: 'Food Safety', desc: 'UK Standards Agency (FSA) norms apply.' }],
    logistics: { time: '25 Days', ports: ['Felixstowe'], tips: '' },
    docRequirements: 'Health Cert, DNA Test Report (Rice), FTA CoO.',
    complianceSteps: [{ title: 'Testing', desc: 'Authenticity testing for GI products.' }],
    relatedTags: ['Food', 'Rice', 'GI']
  },

  // --- EU (Signed - Active) ---
  'eu-textiles': {
    title: 'Green Access: EU Textiles & CBAM',
    author: 'Texprocil',
    date: 'Feb 5, 2025',
    readTime: '12 min read',
    heroImage: '🇪🇺',
    intro: 'The BTIA is active. We now have 0% duty access to the EU Single Market! However, the "Green Barrier" remains. CBAM and Eco-design norms dictate who stays in the market.',
    marketAnalysis: [
      { label: 'Duty', value: '0%' },
      { label: 'Barrier', value: 'Carbon' },
      { label: 'Trend', value: 'Sustainable' }
    ],
    sections: [{
      title: 'Duty Free, But Not Care Free',
      content: 'While the 9.6% duty is gone, complying with CBAM (Carbon Border Adjustment) is the new price of entry. Exporters showing low carbon footprints are winning orders.',
      bullets: ['0% Duty (Preferential)', 'CBAM Reporting Mandatory', 'Recycled content premium']
    }],
    roo: { rule: 'Double Transformation', desc: 'Yarn -> Fabric -> Garment must happen in India.', tips: ['Turkey often used as finishing hub.'] },
    ntbs: [{ title: 'CBAM', desc: 'Carbon tax on imports based on emissions.' }, { title: 'REACH', desc: 'Strict chemical restrictions.' }],
    logistics: { time: '20-25 Days', ports: ['Rotterdam', 'Hamburg'], tips: 'Rotterdam is the gateway.' },
    docRequirements: 'BTIA CoO, Carbon Footprint Report, REACH Declaration.',
    complianceSteps: [{ title: 'Measure Carbon', desc: 'Track Scope 1 & 2 emissions.' }, { title: 'REACH', desc: 'Test for SVHCs.' }],
    relatedTags: ['CBAM', 'Sustainability', 'Zero Duty']
  },
  'eu-leather': {
    title: 'Clean Leather: Duty-Free Access',
    author: 'CLE',
    date: 'Feb 8, 2025',
    readTime: '9 min read',
    heroImage: '👞',
    intro: 'A massive win for Agra and Kanpur clusters. The BTIA eliminates duties on leather goods. But remember: Chromium VI is a deal-breaker. No compliance, no trade.',
    marketAnalysis: [
      { label: 'Duty', value: '0%' },
      { label: 'Risk', value: 'Chemicals' },
      { label: 'Demand', value: 'High' }
    ],
    sections: [{
      title: 'Luxury Market Reopened',
      content: 'With 0% duty, Indian leather purses and shoes are 8-12% cheaper. European luxury brands are increasing sourcing, provided traceability and animal welfare standards are met.',
      bullets: ['0% Duty on Leather Goods', 'Animal Welfare audits key', 'Vegetable tanning preferred']
    }],
    roo: { rule: 'Change in Tariff Heading', desc: 'Manufacture from non-originating materials.', tips: ['Imported hides must be tanned in India.'] },
    ntbs: [{ title: 'REACH', desc: 'Strict limits on Chromium VI and Azo dyes.' }],
    logistics: { time: '20-25 Days', ports: ['Genoa', 'Hamburg'], tips: 'Humidity control essential.' },
    docRequirements: 'RSL Test Report, BTIA CoO.',
    complianceSteps: [{ title: 'RSL Audit', desc: 'Restricted Substances List audit.' }],
    relatedTags: ['Leather', 'REACH', 'Luxury']
  },
  'eu-engineering': {
    title: 'Carbon Compliant: Engineering Exports',
    author: 'EEPC India',
    date: 'Feb 10, 2025',
    readTime: '10 min read',
    heroImage: '🏭',
    intro: 'Steel and Engineering goods now enjoy 0% duty. However, the Carbon Border Adjustment Mechanism (CBAM) tax levy is approaching. Low-carbon steel gets the premium.',
    marketAnalysis: [
      { label: 'Duty', value: '0%' },
      { label: 'CBAM', value: 'Critical' },
      { label: 'Sector', value: 'Steel' }
    ],
    sections: [{
      title: 'The Green Steel Advantage',
      content: 'Zero duty gives a price edge, but importers are calculating the future Carbon Tax liability. Mills using renewable energy are preferred suppliers under the BTIA.',
      bullets: ['0% Custom Duty', 'CBAM Reporting Active', 'Renewable Energy focus']
    }],
    roo: { rule: 'CTSH + 40%', desc: 'Standard industrial rule.', tips: [''] },
    ntbs: [{ title: 'CBAM', desc: 'Carbon tax liability is calculated on embedded emissions.' }, { title: 'CE Marking', desc: 'Mandatory conformity.' }],
    logistics: { time: '25 Days', ports: ['Rotterdam', 'Antwerp'], tips: '' },
    docRequirements: 'CBAM Report, Mill Test Cert, CE Proclamation, BTIA CoO.',
    complianceSteps: [{ title: 'Energy Audit', desc: 'Calculate emission intensity.' }, { title: 'Register', desc: 'CBAM registry.' }],
    relatedTags: ['CBAM', 'Steel', 'Carbon']
  },
  'eu-agro': {
    title: 'Farm to Fork: Market Access',
    author: 'APEDA',
    date: 'Feb 15, 2025',
    readTime: '8 min read',
    heroImage: '🌽',
    intro: 'The BTIA removes tariffs on Indian Grapes, Spices, and Processed Foods. But the "Farm to Fork" strategy means pesticide limits (MRLs) remain the world\'s strictest.',
    marketAnalysis: [
      { label: 'Duty', value: '0%' },
      { label: 'MRLs', value: 'Strict' },
      { label: 'Organic', value: 'Hot' }
    ],
    sections: [{
      title: 'Organic Opportunity',
      content: 'The deal includes an "Equivalence Agreement" for Organic certification. This drastically reduces the cost of certifying Indian organic produce for the EU.',
      bullets: ['0% Duty on Fruits/Spices', 'Organic Certification Equivalence', 'Strict MRL enforcement']
    }],
    roo: { rule: 'Wholly Obtained', desc: 'Grown in India.', tips: [''] },
    ntbs: [{ title: 'MRLs', desc: 'Pesticide limits are often at LoQ (Limit of Quantification).' }],
    logistics: { time: '20-25 Days', ports: ['Rotterdam'], tips: 'Controlled Atmosphere (CA) containers.' },
    docRequirements: 'Health Cert, Lab Analysis Report, BTIA CoO.',
    complianceSteps: [{ title: 'Lab Test', desc: 'Test against EU MRL database list.' }],
    relatedTags: ['Food Safety', 'Organic', 'Zero Duty']
  }
}

// Fallback Generic
const DEFAULT_INDUSTRY = {
  title: 'Industry Export Guide',
  author: 'Motani Research',
  date: '2025',
  readTime: '5 min read',
  heroImage: '📦',
  intro: 'Expert guide on leveraging Trade Agreements for your sector. Duty benefits, compliance norms, and market insights.',
  marketAnalysis: [
    { label: 'Market', value: 'Growing' },
    { label: 'Duty Benefit', value: 'YES' },
    { label: 'Compliance', value: 'Standard' }
  ],
  sections: [
    {
      title: 'Trade Benefits',
      content: 'Most FTAs offer significant duty reduction. Ensure your product meets the Rules of Origin.',
      bullets: ['Reduced Tariffs', 'Market Access', 'Competitiveness']
    }
  ],
  roo: {
    rule: 'Standard Value Add',
    desc: 'Usually 35-40% Value Addition + Change in Tariff Heading.',
    tips: ['Check specific treaty text.']
  },
  ntbs: [
    { title: 'Standards', desc: 'Comply with importing country quality standards.' }
  ],
  logistics: { time: 'Varies', ports: [], tips: 'Consult freight forwarder.' },
  docRequirements: 'CoO, Invoice, Packing List.',
  complianceSteps: [],
  relatedTags: ['Export', 'Trade'],
  relatedArticles: []
}

function FTAIndustryArticle() {
  const { country, industry } = useParams()
  // Key format: "country-industry"
  const lookupKey = `${country}-${industry}`.toLowerCase()
  // Also try just industry if country-specific not found (fallback strategy, optional)
  const data = INDUSTRY_DATA[lookupKey] || { ...DEFAULT_INDUSTRY, title: `${industry?.replace(/-/g, ' ')?.toUpperCase()} Export Guide (${country?.toUpperCase()})` }

  return (
    <div className="fia">
      {/* Hero */}
      <section className="fia-hero">
        <div className="container">
          <div className="fia-breadcrumb">
            <Link to="/">Home</Link> › <Link to="/fta-hub">FTA Countries</Link> › <Link to={`/fta-hub/${country}`}>{country?.replace('-', ' ')}</Link>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="fia-article">
        <div className="container">
          <div className="fia-layout">
            {/* Main Content */}
            <main className="fia-main">
              <header className="fia-header">
                <h1>{data.title}</h1>
                <div className="fia-meta">
                  <span>By <strong>{data.author}</strong></span>
                  <span className="fia-dot">•</span>
                  <span>{data.date}</span>
                  <span className="fia-dot">•</span>
                  <span>{data.readTime}</span>
                </div>
              </header>

              {/* Market Analysis Strip */}
              <div className="fia-market-strip">
                {data.marketAnalysis?.map((m, i) => (
                  <div key={i} className="fia-stat">
                    <small>{m.label}</small>
                    <strong>{m.value}</strong>
                  </div>
                ))}
              </div>

              {/* Hero Image */}
              <div className="fia-hero-image">{data.heroImage}</div>

              {/* Content */}
              <div className="fia-content-block">
                <p className="fia-intro">{data.intro}</p>
                
                {/* Dynamic Sections */}
                {data.sections?.map((sec, i) => (
                  <section key={i} id={`sec-${i}`} className="fia-section">
                    <h2>{sec.title}</h2>
                    <p>{sec.content}</p>
                    {sec.bullets && (
                      <ul className="fia-bullets">
                        {sec.bullets.map((b, j) => (
                          <li key={j}><span className="fia-check">✓</span> {b}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}

                {/* Rules of Origin Box */}
                <div className="fia-roo">
                  <div className="fia-roo-header">
                    <span>📜</span>
                    <h3>Rules of Origin (RoO) Criteria</h3>
                  </div>
                  <div className="fia-roo-body">
                    <div className="fia-roo-primary">
                      <small>PRIMARY RULE</small>
                      <strong>{data.roo?.rule}</strong>
                      <p>{data.roo?.desc}</p>
                    </div>
                    <div className="fia-roo-tips">
                      <strong>Expert Compliance Tips:</strong>
                      <ul>
                        {data.roo?.tips?.map((t, i) => <li key={i}>{t}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* NTBs & Logistics Grid */}
                <div className="fia-grid-2">
                  <div className="fia-box">
                    <h3>⚠️ Non-Tariff Barriers</h3>
                    <div className="fia-list-items">
                      {data.ntbs?.map((n, i) => (
                        <div key={i} className="fia-list-item">
                          <strong>{n.title}</strong>
                          <p>{n.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="fia-box">
                    <h3>🚢 Logistics Insight</h3>
                    <div className="fia-list-items">
                      <div className="fia-list-item">
                        <strong>Transit Time</strong>
                        <p>{data.logistics?.time}</p>
                      </div>
                      <div className="fia-list-item">
                        <strong>Key Ports</strong>
                        <p>{data.logistics?.ports?.join(', ')}</p>
                      </div>
                      <div className="fia-list-item">
                        <strong>Shipping Tip</strong>
                        <p>{data.logistics?.tips}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Documentation */}
                <section className="fia-section">
                  <h2>Documentation & Compliance</h2>
                  <p>{data.docRequirements}</p>
                  
                  <div className="fia-steps">
                    {data.complianceSteps?.map((s, i) => (
                      <div key={i} className="fia-step">
                        <span className="fia-step-num">{i + 1}</span>
                        <div>
                          <strong>{s.title}</strong>
                          <p>{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* CTA */}
                <div className="fia-final-cta">
                  <h4>Ready to export?</h4>
                  <p>Get a custom transit analysis and duty check for your specific HS Code.</p>
                  <Link to="/contact" className="fia-cta-btn">Consult an Expert</Link>
                </div>
                
                {/* Tags */}
                <div className="fia-tags">
                  {data.relatedTags?.map((t, i) => (
                    <span key={i} className="fia-tag">#{t}</span>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </article>

      <style>{`
        .fia { background: #fff; color: #1f2937; font-family: 'Inter', sans-serif; }
        
        .fia-hero { background: #f8fafc; padding: 20px 0; border-bottom: 1px solid #e5e7eb; }
        .fia-breadcrumb { font-size: 14px; text-transform: capitalize; color: #6b7280; }
        .fia-breadcrumb a { color: #2563eb; font-weight: 500; margin: 0 4px; text-decoration: none; }
        .fia-breadcrumb a:hover { text-decoration: underline; }
        
        .fia-article { padding: 40px 0 80px; }
        .fia-layout { max-width: 800px; margin: 0 auto; }
        
        .fia-header h1 { font-size: 36px; font-weight: 800; color: #111827; margin-bottom: 20px; line-height: 1.2; text-align: center; letter-spacing: -0.5px; }
        .fia-meta { display: flex; justify-content: center; gap: 12px; font-size: 14px; color: #6b7280; margin-bottom: 32px; font-weight: 500; }
        .fia-meta strong { color: #374151; }
        
        /* Market Strip */
        .fia-market-strip { 
          display: flex; justify-content: space-around; background: #1e3a8a; color: #fff; 
          padding: 24px; border-radius: 16px; margin-bottom: 48px; box-shadow: 0 10px 25px -5px rgba(30, 58, 138, 0.25);
        }
        .fia-stat { text-align: center; }
        .fia-stat small { display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; opacity: 0.9; margin-bottom: 8px; font-weight: 600; color: #bfdbfe; }
        .fia-stat strong { font-size: 24px; font-weight: 800; color: #ffffff; }
        
        .fia-hero-image { 
          font-size: 80px; text-align: center; padding: 60px 0; 
          background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%); 
          border-radius: 16px; margin-bottom: 48px; border: 1px solid #e5e7eb;
        }
        
        .fia-intro { font-size: 20px; line-height: 1.6; color: #374151; margin-bottom: 48px; border-left: 4px solid #2563eb; padding-left: 24px; font-style: italic; }
        
        .fia-section { margin-bottom: 48px; }
        .fia-section h2 { font-size: 26px; font-weight: 800; color: #111827; margin-bottom: 24px; }
        .fia-section p { font-size: 16px; line-height: 1.7; color: #4b5563; margin-bottom: 24px; }
        
        .fia-bullets { list-style: none; padding: 0; }
        .fia-bullets li { display: flex; gap: 12px; margin-bottom: 12px; font-size: 16px; color: #374151; align-items: flex-start; }
        .fia-check { color: #059669; font-weight: 800; flex-shrink: 0; margin-top: 2px; }
        
        /* RoO Box */
        .fia-roo { border: 1px solid #dbeafe; border-radius: 12px; overflow: hidden; margin: 48px 0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
        .fia-roo-header { background: #eff6ff; padding: 16px 24px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid #dbeafe; }
        .fia-roo-header span { font-size: 24px; }
        .fia-roo-header h3 { font-size: 18px; font-weight: 700; margin: 0; color: #1e3a8a; }
        .fia-roo-body { padding: 32px; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        .fia-roo-primary small { font-size: 12px; font-weight: 700; color: #6b7280; letter-spacing: 1px; text-transform: uppercase; }
        .fia-roo-primary strong { display: block; font-size: 28px; color: #111827; margin: 8px 0 12px; line-height: 1.1; }
        .fia-roo-tips strong { display: block; font-size: 14px; font-weight: 700; color: #1f2937; margin-bottom: 8px; }
        .fia-roo-tips ul { list-style: disc; padding-left: 20px; margin: 0; color: #4b5563; font-size: 14px; line-height: 1.6; }
        
        /* Grid 2 */
        .fia-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 48px; }
        .fia-box { background: #f9fafb; padding: 24px; border-radius: 12px; border: 1px solid #e5e7eb; }
        .fia-box h3 { font-size: 16px; font-weight: 700; margin-top: 0; margin-bottom: 20px; color: #111827; display: flex; align-items: center; gap: 8px; }
        .fia-list-item { margin-bottom: 16px; border-bottom: 1px solid #e5e7eb; padding-bottom: 16px; }
        .fia-list-item:last-child { border-bottom: none; padding-bottom: 0; margin-bottom: 0; }
        .fia-list-item strong { display: block; font-size: 13px; color: #111827; margin-bottom: 4px; font-weight: 600; }
        .fia-list-item p { margin: 0; font-size: 14px; color: #4b5563; line-height: 1.5; }
        
        /* Steps */
        .fia-steps { display: flex; flex-direction: column; gap: 16px; margin-top: 24px; }
        .fia-step { display: flex; gap: 16px; background: #fff; padding: 16px; border: 1px solid #e5e7eb; border-radius: 12px; align-items: flex-start; transition: transform 0.2s; }
        .fia-step:hover { transform: translateY(-2px); border-color: #d1d5db; }
        .fia-step-num { width: 32px; height: 32px; background: #2563eb; color: #fff; display: flex; align-items: center; justify-content: center; border-radius: 50%; font-weight: 700; flex-shrink: 0; font-size: 14px; }
        .fia-step strong { display: block; font-size: 16px; color: #111827; margin-bottom: 4px; }
        .fia-step p { margin: 0; font-size: 14px; color: #4b5563; line-height: 1.5; }
        
        /* Final CTA */
        .fia-final-cta { text-align: center; background: #111827; color: #fff; padding: 48px; border-radius: 16px; margin-top: 80px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
        .fia-final-cta h4 { font-size: 28px; font-weight: 800; margin-bottom: 12px; color: #fff; }
        .fia-final-cta p { opacity: 0.8; margin-bottom: 32px; font-size: 16px; max-width: 400px; margin-left: auto; margin-right: auto; }
        .fia-cta-btn { background: #2563eb; color: #fff; padding: 14px 32px; border-radius: 8px; font-weight: 700; text-decoration: none; display: inline-block; transition: background 0.2s; }
        .fia-cta-btn:hover { background: #1d4ed8; }
        
        .fia-tags { margin-top: 48px; display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; }
        .fia-tag { background: #f3f4f6; padding: 8px 16px; border-radius: 20px; font-size: 13px; color: #4b5563; font-weight: 500; transition: all 0.2s; }
        .fia-tag:hover { background: #e5e7eb; color: #111827; }

        @media (max-width: 768px) {
          .fia-roo-body, .fia-grid-2 { grid-template-columns: 1fr; }
          .fia-market-strip { flex-wrap: wrap; gap: 16px; padding: 20px; }
          .fia-stat { width: 45%; }
          .fia-header h1 { font-size: 28px; }
          .fia-final-cta { padding: 32px; }
        }
      `}</style>
    </div>
  )
}

export default FTAIndustryArticle
