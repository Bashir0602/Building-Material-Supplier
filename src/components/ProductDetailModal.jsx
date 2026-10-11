import React from 'react';
import { X, ShieldCheck, Truck, Award, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ProductDetailModal = () => {
  const { isDetailModalOpen, closeDetailModal, detailTargetProduct, openQuoteModal } = useApp();

  if (!isDetailModalOpen || !detailTargetProduct) return null;

  const product = detailTargetProduct;

  const handleRequestQuote = () => {
    closeDetailModal();
    openQuoteModal(product);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase bg-orange-500 text-white">
              {product.category}
            </span>
            <span className="text-xs text-slate-400">Product Specification Sheet</span>
          </div>
          <button
            onClick={closeDetailModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Image */}
            <div className="md:col-span-5">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <span
                  className={`absolute top-2 right-2 px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-white ${
                    product.inStock ? 'bg-emerald-600' : 'bg-rose-600'
                  }`}
                >
                  {product.inStock ? 'In Stock • Ready for Dispatch' : 'Backorder / On Request'}
                </span>
              </div>

              {/* Price card */}
              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs text-slate-500 font-medium">Standard Unit Price</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-2xl font-black text-slate-900">${Number(product.price).toFixed(2)}</span>
                  <span className="text-xs text-slate-600 font-semibold">/ {product.unit}</span>
                </div>
                {product.minOrder && (
                  <p className="text-[11px] text-slate-500 mt-1">
                    Minimum Order Quantity: <strong>{product.minOrder}</strong>
                  </p>
                )}
              </div>
            </div>

            {/* Info & Specs */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 leading-snug">{product.name}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{product.description}</p>
              </div>

              {/* Detailed Technical Specifications Table */}
              {product.specs && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span>Technical & Quality Parameters</span>
                  </h4>
                  <div className="rounded-xl border border-slate-200 overflow-hidden divide-y divide-slate-100 text-xs">
                    {Object.entries(product.specs).map(([specKey, specVal]) => (
                      <div key={specKey} className="grid grid-cols-5 p-2.5 bg-white hover:bg-slate-50/60">
                        <span className="col-span-2 font-semibold text-slate-600">{specKey}</span>
                        <span className="col-span-3 text-slate-900 font-medium">{specVal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quality & Dispatch Highlights */}
              <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-blue-50/60 border border-blue-100 text-blue-900">
                  <Truck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="font-medium">Direct Site Unloading</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100 text-emerald-900">
                  <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">Mill Test Certificate (MTC)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Volume Tiers Banner */}
          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200">
            <h4 className="text-xs font-bold text-orange-950 uppercase tracking-wide">
              Contractor Commercial Tier Pricing Available
            </h4>
            <p className="text-xs text-orange-900/80 mt-1 leading-relaxed">
              Discounts available for full truckload (FTL) orders, repeat residential builders, and government infrastructure tenders. Contact our sales desk for net project credit rates.
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="bg-slate-50 px-6 py-4 flex items-center justify-between border-t border-slate-200">
          <button
            type="button"
            onClick={closeDetailModal}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            Close Window
          </button>
          <button
            type="button"
            onClick={handleRequestQuote}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 shadow-md cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Request Quote for this Item</span>
          </button>
        </div>
      </div>
    </div>
  );
};
