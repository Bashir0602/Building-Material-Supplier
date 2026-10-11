import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Building2, 
  Phone, 
  Clock, 
  Truck, 
  Menu, 
  X, 
  FileText, 
  ShieldCheck, 
  ArrowRight,
  HardHat
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openQuoteModal } = useApp();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Admin Panel', path: '/admin', isSpecial: true }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      {/* Top Bar for Contractors and Emergency Dispatches */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 font-medium text-slate-200">
              <Truck className="w-3.5 h-3.5 text-orange-500" />
              <span>Same-Day Fleet Dispatch Available</span>
            </span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Mon - Sat: 7:00 AM – 7:00 PM</span>
            </span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="hidden lg:flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>IS & ASTM Certified Materials</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="tel:18005552845" 
              className="flex items-center gap-1.5 font-semibold text-orange-400 hover:text-orange-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+1 (800) 555-BUILD</span>
            </a>
            <span className="text-slate-600">•</span>
            <Link 
              to="/admin" 
              className="hover:text-white transition-colors flex items-center gap-1 font-medium"
            >
              <HardHat className="w-3.5 h-3.5 text-orange-400" />
              <span>Staff Portal</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-md group-hover:bg-slate-800 transition-all border-2 border-orange-500/20">
              <Building2 className="w-7 h-7 text-orange-500 transition-transform group-hover:scale-105" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-slate-900">
                  Build<span className="text-orange-500">Pro</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-100 text-blue-900">
                  Supplies
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium tracking-wide">
                Industrial Construction Materials
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `
                  px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 flex items-center gap-1.5
                  ${link.isSpecial 
                    ? isActive 
                      ? 'bg-blue-900 text-white shadow-xs' 
                      : 'text-blue-900 hover:bg-blue-50 border border-blue-200/80'
                    : isActive 
                      ? 'text-orange-600 bg-orange-50 font-bold' 
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }
                `}
              >
                {link.isSpecial && <HardHat className="w-4 h-4 text-orange-500" />}
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Request Quote CTA & Direct Contact */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => openQuoteModal()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 transition-all shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Get Quick Quote</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => openQuoteModal()}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-orange-500 hover:bg-orange-600"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-fade-in">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `
                  flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors
                  ${isActive 
                    ? 'bg-orange-50 text-orange-600 font-bold' 
                    : 'text-slate-800 hover:bg-slate-100'
                  }
                `}
              >
                <span className="flex items-center gap-2">
                  {link.isSpecial && <HardHat className="w-4 h-4 text-orange-500" />}
                  {link.name}
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </NavLink>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openQuoteModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 shadow-md"
            >
              <FileText className="w-4 h-4" />
              Request Instant Quote
            </button>
            
            <a
              href="tel:18005552845"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200"
            >
              <Phone className="w-4 h-4 text-orange-500" />
              Call Dispatch Desk (+1 800 555-BUILD)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
