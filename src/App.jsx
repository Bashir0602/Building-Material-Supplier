import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { QuoteModal } from './components/QuoteModal';
import { ProductDetailModal } from './components/ProductDetailModal';

// Pages
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { AdminPanel } from './pages/AdminPanel';
import { ArrowLeft, HardHat } from 'lucide-react';

// Scroll to top helper on route transition
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

// 404 Not Found Page
function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
      <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
        <HardHat className="w-8 h-8" />
      </div>
      <h2 className="text-3xl font-black text-slate-900">404 - Page Under Construction</h2>
      <p className="text-sm text-slate-600 max-w-md">
        The building material specification or page you requested could not be located.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white bg-orange-500 hover:bg-orange-600 text-xs shadow-md"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home Catalog</span>
      </Link>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-orange-500 selection:text-white">
          <Navbar />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />

          {/* Global Modals & Notifications */}
          <QuoteModal />
          <ProductDetailModal />
          <Toast />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
