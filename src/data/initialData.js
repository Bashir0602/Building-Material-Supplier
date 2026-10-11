// Initial sample product data for building materials supplier
export const initialProducts = [
  {
    id: 'prod-1',
    name: 'UltraTech OPC 53 Grade Cement',
    category: 'Cement',
    price: 7.80,
    unit: '50kg Bag',
    inStock: true,
    stockCount: 1450,
    rating: 4.9,
    reviewsCount: 128,
    minOrder: '50 Bags',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    description: 'High-strength Ordinary Portland Cement (OPC 53 Grade) engineered for heavy-duty structural RCC columns, beams, slabs, and bridges.',
    specs: {
      'Standard': 'IS 12269 / ASTM C150',
      'Compressive Strength (28 Days)': '53+ MPa',
      'Initial Setting Time': '30+ minutes',
      'Packaging': 'Moisture-proof laminated HDPE bag',
      'Application': 'Heavy RCC, High-rise frames, flyovers'
    },
    popular: true
  },
  {
    id: 'prod-2',
    name: 'Ambuja Kawach Waterproof PPC Cement',
    category: 'Cement',
    price: 8.20,
    unit: '50kg Bag',
    inStock: true,
    stockCount: 920,
    rating: 4.8,
    reviewsCount: 94,
    minOrder: '50 Bags',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    description: 'Specially formulated hydrophobic Portland Pozzolana Cement with built-in active water repellency agents to prevent seepage and efflorescence.',
    specs: {
      'Standard': 'IS 1489 (Part 1)',
      'Water Repellency': 'Active hydrophobic barrier',
      'Durability': 'Resistant to chemical attack & chloride',
      'Packaging': 'Tamper-proof 50kg bag',
      'Application': 'Basements, roofs, external plaster, foundations'
    },
    popular: true
  },
  {
    id: 'prod-3',
    name: 'Tata Tiscon 550D High-Ductility TMT Rebar (12mm)',
    category: 'Steel',
    price: 840.00,
    unit: 'Metric Ton',
    inStock: true,
    stockCount: 85,
    rating: 4.9,
    reviewsCount: 210,
    minOrder: '2 Metric Tons',
    image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=800&q=80',
    description: 'Super-ductile Fe 550D thermo-mechanically treated rebars offering superior earthquake resistance, superior bendability, and corrosion resistance.',
    specs: {
      'Standard': 'IS 1786 Fe 550D',
      'Diameter': '12mm (Also available: 8, 10, 16, 20, 25mm)',
      'Yield Stress': '550 N/mm² minimum',
      'Elongation': '16% minimum (High seismic safety)',
      'Corrosion Resistance': 'Low carbon equivalent'
    },
    popular: true
  },
  {
    id: 'prod-4',
    name: 'JSW Neosteel Fe 550D TMT Rebar (16mm)',
    category: 'Steel',
    price: 825.00,
    unit: 'Metric Ton',
    inStock: true,
    stockCount: 60,
    rating: 4.8,
    reviewsCount: 82,
    minOrder: '2 Metric Tons',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    description: 'Pure steel primary billet rebar manufactured with HYQST technology ensuring uniform ribs for unmatched bonding with concrete matrix.',
    specs: {
      'Standard': 'IS 1786 Fe 550D',
      'Diameter': '16mm heavy structural rebar',
      'Rib Pattern': 'High bond ribbed surface',
      'Weldability': 'Excellent without pre-heating',
      'Application': 'Heavy commercial slabs, pilings, foundation rafts'
    },
    popular: false
  },
  {
    id: 'prod-5',
    name: 'Galvanized Annealed Steel Binding Wire (18 Gauge)',
    category: 'Steel',
    price: 65.00,
    unit: '25kg Bundle',
    inStock: true,
    stockCount: 320,
    rating: 4.7,
    reviewsCount: 56,
    minOrder: '5 Bundles',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    description: 'Soft-annealed zinc galvanized tie wire for fast and secure binding of reinforcement steel cages and stirrups without snapping.',
    specs: {
      'Gauge': '18 SWG (1.2mm)',
      'Coating': 'Hot-dip zinc galvanized',
      'Pliability': 'Soft annealed for rapid tying',
      'Packaging': 'Coil wrapped in hessian cloth'
    },
    popular: false
  },
  {
    id: 'prod-6',
    name: 'Premium First-Class Red Kiln Bricks',
    category: 'Bricks & Blocks',
    price: 0.28,
    unit: 'Piece',
    inStock: true,
    stockCount: 45000,
    rating: 4.8,
    reviewsCount: 165,
    minOrder: '1,500 Pieces',
    image: 'https://images.unsplash.com/photo-1584463699026-6a894a434c4f?auto=format&fit=crop&w=800&q=80',
    description: 'Traditional machine-moulded kiln-fired red clay bricks with sharp square edges, uniform burnt terracotta color, and ringing metallic sound.',
    specs: {
      'Standard': 'IS 1077 Class 10',
      'Dimensions': '9" x 4.25" x 2.75" (Standard Modular)',
      'Compressive Strength': '10.5 N/mm²',
      'Water Absorption': '< 15% after 24 hrs immersion',
      'Application': 'Load-bearing masonry, exterior exposed walls'
    },
    popular: true
  },
  {
    id: 'prod-7',
    name: 'Siporex Lightweight AAC Autoclaved Aerated Blocks',
    category: 'Bricks & Blocks',
    price: 2.10,
    unit: 'Block',
    inStock: true,
    stockCount: 3400,
    rating: 4.9,
    reviewsCount: 112,
    minOrder: '200 Blocks',
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80',
    description: 'High-precision eco-friendly lightweight aerated concrete blocks offering 3x faster construction, 60% weight reduction, and superior thermal insulation.',
    specs: {
      'Standard': 'IS 2185 (Part 3) Grade 1',
      'Dimensions': '600mm x 200mm x 150mm (6-inch)',
      'Density': '550 - 650 kg/m³ (1/3rd weight of red bricks)',
      'Fire Rating': 'Up to 4 hours fire resistance',
      'Acoustic': '42 dB sound attenuation'
    },
    popular: true
  },
  {
    id: 'prod-8',
    name: 'Heavy-Duty Solid Concrete Masonry Blocks (8-inch)',
    category: 'Bricks & Blocks',
    price: 1.45,
    unit: 'Block',
    inStock: true,
    stockCount: 2200,
    rating: 4.6,
    reviewsCount: 48,
    minOrder: '300 Blocks',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    description: 'Vibro-compacted dense aggregate concrete blocks designed for perimeter boundary walls, basements, and retaining structures.',
    specs: {
      'Dimensions': '400mm x 200mm x 200mm',
      'Compressive Strength': '7.5 N/mm²',
      'Finish': 'Uniform textured grey surface',
      'Application': 'Boundary walls, foundation plinth, partition walls'
    },
    popular: false
  },
  {
    id: 'prod-9',
    name: 'Triple-Washed River Sand (Plastering Grade)',
    category: 'Sand & Aggregates',
    price: 48.00,
    unit: 'Ton',
    inStock: true,
    stockCount: 420,
    rating: 4.9,
    reviewsCount: 140,
    minOrder: '5 Tons (Dump Truck)',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    description: 'Natural riverbed sand washed thrice to eliminate silt and organic impurities. Ideal for ultra-smooth internal and external wall plastering.',
    specs: {
      'Grading': 'Zone III Fine Sand (IS 383)',
      'Silt Content': 'Less than 3% by volume',
      'Organic Impurities': 'Nil / Zero chemical salts',
      'Moisture Content': '< 2%',
      'Delivery': 'Tipper truck direct unloading at site'
    },
    popular: true
  },
  {
    id: 'prod-10',
    name: 'Manufactured M-Sand for Concrete (Zone II)',
    category: 'Sand & Aggregates',
    price: 36.00,
    unit: 'Ton',
    inStock: true,
    stockCount: 650,
    rating: 4.8,
    reviewsCount: 98,
    minOrder: '5 Tons (Dump Truck)',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
    description: 'V.S.I. crushed cubical granite sand designed as a 100% sustainable alternative to natural sand, providing high concrete compressive strength.',
    specs: {
      'Standard': 'IS 383:2016 Zone II',
      'Particle Shape': 'Cubical with rounded edges',
      'Specific Gravity': '2.65',
      'Application': 'Structural concrete, slabs, foundations, precast'
    },
    popular: true
  },
  {
    id: 'prod-11',
    name: '20mm Blue Metal Granite Crushed Aggregates',
    category: 'Sand & Aggregates',
    price: 32.00,
    unit: 'Ton',
    inStock: true,
    stockCount: 780,
    rating: 4.9,
    reviewsCount: 110,
    minOrder: '5 Tons (Dump Truck)',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80',
    description: 'Machine-crushed hard blue granite aggregate sized precisely at 20mm down. Clean and free from dust or clay coatings.',
    specs: {
      'Standard': 'IS 383 Coarse Aggregate',
      'Crushing Value': '< 22%',
      'Impact Value': '< 18%',
      'Flakiness Index': '< 15%',
      'Application': 'Standard M20, M25, M30 RCC concrete mix'
    },
    popular: false
  },
  {
    id: 'prod-12',
    name: 'Dr. Fixit Pidiproof LW+ Integral Waterproofing Liquid',
    category: 'Chemicals & Additives',
    price: 24.50,
    unit: '5 Liter Can',
    inStock: true,
    stockCount: 190,
    rating: 4.9,
    reviewsCount: 77,
    minOrder: '2 Cans',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    description: 'Tonic for cement concrete and mortar. Reduces water permeability, prevents steel rebar rusting, and increases workability without extra water.',
    specs: {
      'Standard': 'IS 9103 & IS 2645',
      'Dosage': '200ml per 50kg bag of cement',
      'Chloride Content': 'Zero chloride (Safe for rebars)',
      'Permeability': 'Reduces water penetration by > 50%'
    },
    popular: false
  }
];

export const initialInquiries = [
  {
    id: 'INQ-1001',
    date: '2026-10-10',
    name: 'David Reynolds',
    company: 'Skyline Commercial Builders',
    email: 'david@skylinebuild.com',
    phone: '+1 (555) 234-5678',
    product: 'UltraTech OPC 53 Grade Cement',
    quantity: '600 Bags',
    location: 'North Industrial Park, Sector 4',
    status: 'Pending',
    notes: 'Require delivery on site next Tuesday morning. Need test certificate.'
  },
  {
    id: 'INQ-1002',
    date: '2026-10-09',
    name: 'Sarah Chen',
    company: 'Apex Infrastructure Ltd',
    email: 'sarah.c@apexinfra.org',
    phone: '+1 (555) 876-5432',
    product: 'Tata Tiscon 550D High-Ductility TMT Rebar (12mm)',
    quantity: '25 Metric Tons',
    location: 'Metro Bridge Extension Yard',
    status: 'Quote Sent',
    notes: 'Please quote including unloading crane service.'
  },
  {
    id: 'INQ-1003',
    date: '2026-10-08',
    name: 'Michael Miller',
    company: 'Miller Residential Estates',
    email: 'michael@millerhomes.com',
    phone: '+1 (555) 432-1098',
    product: 'Triple-Washed River Sand (Plastering Grade)',
    quantity: '40 Tons',
    location: 'Oakridge Subdivisions, Phase 2',
    status: 'Completed',
    notes: 'Delivered successfully and payment settled via commercial account.'
  }
];

export const companyStats = [
  { label: 'Years in Business', value: '25+', subtext: 'Established in 2001' },
  { label: 'Contractors & Builders', value: '18,500+', subtext: 'Commercial & residential' },
  { label: 'Daily Dispatch Fleet', value: '65+', subtext: 'Dumpers, cranes & flatbeds' },
  { label: 'On-Time Site Delivery', value: '99.4%', subtext: 'GPS tracked dispatch' }
];

export const faqs = [
  {
    q: 'What is the minimum order quantity for site delivery?',
    a: 'For bagged cement, minimum dispatch is 50 bags. For bulk sand and aggregates, minimum order is 5 tons (single tipper load). Rebar steel minimum order is 1 metric ton. For smaller quantities, customer pickup is available from our central depot with zero minimum order.'
  },
  {
    q: 'Do you provide manufacturer quality test certificates (MTC)?',
    a: 'Yes, every batch of cement (OPC 53/PPC) and TMT steel (Fe 550D) is supplied along with the official Manufacturer Test Certificate verifying yield strength, elongation, and chemical composition.'
  },
  {
    q: 'What is your standard delivery turnaround time?',
    a: 'Orders confirmed before 12:00 PM are dispatched for same-day or next-morning delivery depending on destination site access. Scheduled bulk consignments can be locked in up to 30 days in advance.'
  },
  {
    q: 'Do you provide offloading equipment at the construction site?',
    a: 'Yes. Bulk sand and stone aggregates are delivered in hydraulic tipper trucks with automated dumping. Rebar bundles and palletized cement or AAC blocks can be delivered via our boom-crane flatbed trucks upon prior request.'
  },
  {
    q: 'What payment terms are supported for commercial accounts?',
    a: 'We accept RTGS, NEFT, corporate cards, UPI, and bank transfers. For pre-qualified contractors and engineering firms, we offer flexible 15-day and 30-day corporate credit lines with volume rebates.'
  }
];
