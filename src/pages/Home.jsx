import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Truck, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  PhoneCall, 
  Layers, 
  Hammer, 
  Boxes, 
  CheckCircle2, 
  Star, 
  FileText,
  BadgeCheck,
  HardHat
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ProductCard } from '../components/ProductCard';
import { MaterialCalculator } from '../components/MaterialCalculator';
import { companyStats } from '../data/initialData';

export const Home = () => {
  const { products, openQuoteModal } = useApp();

  // Pick top popular products
  const featuredProducts = products.filter((p) => p.popular).slice(0, 4);

  const categories = [
    {
      name: 'Cement & Concrete',
      slug: 'Cement',
      desc: 'OPC 53, 43 Grade & Hydrophobic PPC Waterproofing',
      icon: Layers,
      count: '4 Brands',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'TMT Steel & Rebar',
      slug: 'Steel',
      desc: 'Fe 550D High-Ductility Rebars & Galvanized Tie Wire',
      icon: Hammer,
      count: '8mm to 32mm',
      image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Bricks & AAC Blocks',
      slug: 'Bricks & Blocks',
      desc: 'Machine-Moulded Red Kiln & Eco-Friendly AAC Blocks',
      icon: Boxes,
      count: 'Standard & Custom',
      image: 'https://images.unsplash.com/photo-1584463699026-6a894a434c4f?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Sand & Aggregates',
      slug: 'Sand & Aggregates',
      desc: 'Triple-Washed River Sand, M-Sand & 20mm Blue Metal',
      icon: Building2,
      count: 'Tipper Dispatches',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const testimonials = [
    {
      quote: "BuildPro has supplied over 25,000 bags of 53 Grade cement and 180 metric tons of TMT steel for our high-rise project. Their dispatch is punctual, and every batch arrives with an MTC lab certificate.",
      author: "Rajesh Malhotra",
      title: "Chief Project Engineer",
      company: "Apex Infra Developers",
      rating: 5
    },
    {
      quote: "Their M-Sand quality is the cleanest in the region with zero silt residue. Our concrete batching plant has saved both time and cement dosage thanks to their consistent aggregate sizing.",
      author: "Marcus Vance",
      title: "Lead Structural Contractor",
      company: "Vance Commercial Builders",
      rating: 5
    },
    {
      quote: "The instant material estimator on this site helped us forecast our masonry costs accurately. Plus, their crane-truck unloading saved our crew hours of manual unloading work.",
      author: "Ananya Deshmukh",
      title: "Residential Developer",
      company: "Skyline Habitat Estates",
      rating: 5
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
        {/* Abstract Architectural Grid Background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/20 text-orange-400 border border-orange-500/30">
                <HardHat className="w-4 h-4 text-orange-400" />
                <span>Premier Industrial Building Materials Supplier</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-none text-white">
                Strength Built Into <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300">
                  Every Foundation.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Direct wholesale supply of certified <strong>OPC/PPC Cement</strong>, high-ductility <strong>Fe 550D TMT Steel</strong>, kiln-cured <strong>Red Bricks & AAC Blocks</strong>, and washed <strong>River & M-Sand</strong>. Punctual fleet delivery straight to your construction site.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/products"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40 text-sm"
                >
                  <span>Explore Materials Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={() => openQuoteModal()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-slate-200 bg-slate-800/80 hover:bg-slate-800 hover:text-white border border-slate-700 transition-all text-sm cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-orange-400" />
                  <span>Request Wholesale Quote</span>
                </button>
              </div>

              {/* Guarantees */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <BadgeCheck className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>BIS & ASTM Standard</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <Truck className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Hydraulic Tipper Fleet</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start col-span-2 sm:col-span-1">
                  <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Direct Mill Pricing</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/90 p-4">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1000&q=80"
                  alt="Construction Site Heavy Materials"
                  className="rounded-xl object-cover w-full h-80 sm:h-96"
                />

                {/* Floating Card: Fast Dispatch */}
                <div className="absolute -bottom-2 -left-2 bg-slate-900/95 border border-slate-700 p-4 rounded-xl shadow-2xl backdrop-blur-md max-w-xs text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center text-white shrink-0">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Daily Dispatch Active</h4>
                      <p className="text-[11px] text-slate-400">65+ vehicles operating on routes</p>
                    </div>
                  </div>
                </div>

                {/* Floating Card: Lab Tested */}
                <div className="absolute top-8 -right-2 bg-slate-900/95 border border-slate-700 py-2.5 px-4 rounded-xl shadow-2xl backdrop-blur-md text-left">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold text-white">53 MPa Tested Strength</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Stats Counter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {companyStats.map((stat, i) => (
            <div key={i} className={`text-center ${i > 1 ? 'pt-6 lg:pt-0' : ''}`}>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-orange-600 mt-1">{stat.label}</div>
              <div className="text-xs text-slate-500 mt-0.5">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Building Materials Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">
              Essential Supplies
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Primary Construction Categories
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Source every core structural material in bulk consignments with verified lab reports.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:text-orange-600 transition-colors"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link
                key={idx}
                to={`/products?category=${encodeURIComponent(cat.slug)}`}
                className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-slate-900/80 backdrop-blur-xs text-white flex items-center justify-center">
                      <Icon className="w-5 h-5 text-orange-400" />
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span className="font-semibold text-orange-600">{cat.count}</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-orange-600 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-orange-600">
                    <span>Browse Materials</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Interactive Material Calculator Feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MaterialCalculator />
      </section>

      {/* Featured Bestseller Materials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">
              Top Demand
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Contractor Bestsellers
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Our highest-turnover materials currently stocked in volume at the central depot.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors"
          >
            <span>See Complete Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Why Choose BuildPro Supplies (Industrial Value Proposition) */}
      <section className="bg-slate-50 border-y border-slate-200 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Contractor Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Why General Contractors Choose Us
            </h2>
            <p className="text-sm text-slate-600">
              Construction timelines are unforgiving. We eliminate delays with guaranteed supply chains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Dedicated Fleet Dispatch</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We own and operate over 65 transit tipper trucks, boom-crane flatbeds, and bulk cement carriers with live GPS tracking directly to your jobsite.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Lab-Certified Structural Quality</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero counterfeit materials. Every rebar bundle and cement bag is certified under national BIS/ASTM guidelines with Mill Test Certificates.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Direct Mill Wholesale Rates</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                As direct tier-one authorized distributors for Tata Steel, UltraTech, and JSW, we offer wholesale pricing structures with tiered volume rebates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer / Contractor Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Trusted Partners
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            What Builders & Engineers Say
          </h2>
          <p className="text-sm text-slate-600">
            Trusted by commercial contractors, structural engineers, and residential builders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <p className="font-bold text-sm text-slate-900">{t.author}</p>
                <p className="text-xs text-orange-600 font-semibold">{t.title}</p>
                <p className="text-[11px] text-slate-500">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Big Action Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-orange-500 text-white inline-block">
              Immediate Project Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight text-white">
              Starting a Commercial or Residential Build?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Lock in commodity steel and cement wholesale rates today before weekly market adjustments. Our engineering team assists with bill of quantities (BOQ).
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-orange-500 hover:bg-orange-600 shadow-md text-sm cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Request Custom Consignment Quote</span>
              </button>
              <a
                href="tel:18005552845"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 text-sm transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-orange-400" />
                <span>Call Hotline (+1 800 555-BUILD)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
