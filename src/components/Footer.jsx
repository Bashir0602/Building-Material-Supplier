import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Truck, 
  Award, 
  Send,
  CheckCircle2
} from 'lucide-react';

export const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Trust & Guarantee Banner */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Direct Site Logistics</h4>
                <p className="text-xs text-slate-400">Fleet of 65+ tippers, flatbeds & hydraulic crane trucks</p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Lab-Certified Quality</h4>
                <p className="text-xs text-slate-400">Standard Test Certificates (MTC) supplied with every batch</p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Wholesale Mill Pricing</h4>
                <p className="text-xs text-slate-400">Direct authorized dealership with tier volume rebates</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold shadow-md">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Build<span className="text-orange-500">Pro</span> Supplies
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Your premier industrial-grade supply partner for structural cement, certified Fe 550D TMT steel rebar, precision AAC blocks, red kiln bricks, and triple-washed river sand.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>Central Logistics Depot: 1420 Heavy Industry Blvd, Gate 4, Logistics Park</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="text-slate-200 font-medium">+1 (800) 555-BUILD / +1 (800) 555-2845</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <span>dispatch@buildprosupplies.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-4 text-slate-200">
              Key Materials
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products?category=Cement" className="hover:text-orange-400 transition-colors">
                  OPC 53 & PPC Cement
                </Link>
              </li>
              <li>
                <Link to="/products?category=Steel" className="hover:text-orange-400 transition-colors">
                  Fe 550D TMT Rebar (8mm–32mm)
                </Link>
              </li>
              <li>
                <Link to="/products?category=Bricks+%26+Blocks" className="hover:text-orange-400 transition-colors">
                  Red Kiln & AAC Blocks
                </Link>
              </li>
              <li>
                <Link to="/products?category=Sand+%26+Aggregates" className="hover:text-orange-400 transition-colors">
                  River Sand & Concrete M-Sand
                </Link>
              </li>
              <li>
                <Link to="/products?category=Sand+%26+Aggregates" className="hover:text-orange-400 transition-colors">
                  20mm Crushed Blue Metal
                </Link>
              </li>
              <li>
                <Link to="/products?category=Chemicals+%26+Additives" className="hover:text-orange-400 transition-colors">
                  Waterproofing & Admixtures
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-4 text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-orange-400 transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-orange-400 transition-colors">All Products & Pricing</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-400 transition-colors">About Our Fleet & Story</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-400 transition-colors">Contact & Site Enquiries</Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-orange-400 transition-colors text-orange-400/90 font-medium">
                  Staff & Admin Panel
                </Link>
              </li>
            </ul>
          </div>

          {/* Operating Hours & Dispatch Updates */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-4 text-slate-200">
              Price & Stock Updates
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Subscribe for weekly daily commodity rate sheets for steel rebar & bulk cement.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="contractor@company.com"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                  required
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-emerald-400 flex items-center gap-1 font-medium mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Subscribed to daily material bulletin!
                </p>
              )}
            </form>

            <div className="mt-5 p-3 rounded-lg bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <Clock className="w-3.5 h-3.5 text-orange-500" />
                <span>Loading Bay Hours</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Mon - Fri: 06:30 - 20:00 <br />
                Saturday: 07:00 - 18:00 (Sunday Closed)
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} BuildPro Materials Supply Co. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Quality Guarantee</span>
            <span className="hover:text-slate-400 cursor-pointer">Fleet Terms</span>
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
