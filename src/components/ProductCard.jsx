import React from 'react';
import { ShieldCheck, Star, FileText, Eye, CheckCircle2, AlertTriangle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ProductCard = ({ product }) => {
  const { openQuoteModal, openDetailModal } = useApp();

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Image Container with Badges */}
        <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Category Badge */}
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-900/90 text-white backdrop-blur-xs">
            {product.category}
          </span>

          {/* Stock status badge */}
          <span
            className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 backdrop-blur-xs ${
              product.inStock
                ? 'bg-emerald-500/90 text-white'
                : 'bg-rose-500/90 text-white'
            }`}
          >
            {product.inStock ? (
              <>
                <CheckCircle2 className="w-3 h-3" />
                <span>In Stock</span>
              </>
            ) : (
              <>
                <AlertTriangle className="w-3 h-3" />
                <span>Order on Request</span>
              </>
            )}
          </span>

          {product.popular && (
            <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase bg-orange-500 text-white shadow-xs">
              Contractor Choice
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Rating & MOQ */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <div className="flex items-center gap-1 text-amber-500 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating || '4.8'}</span>
              <span className="text-slate-400 font-normal">({product.reviewsCount || 45})</span>
            </div>
            {product.minOrder && (
              <span className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                MOQ: {product.minOrder}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 
            onClick={() => openDetailModal(product)}
            className="font-bold text-slate-900 text-base leading-snug group-hover:text-orange-600 transition-colors line-clamp-2 cursor-pointer"
          >
            {product.name}
          </h3>

          <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Spec tags */}
          {product.specs && (
            <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
              {Object.entries(product.specs).slice(0, 2).map(([key, val]) => (
                <span
                  key={key}
                  className="text-[10px] font-medium bg-blue-50 text-blue-900 px-2 py-0.5 rounded border border-blue-100"
                >
                  <strong className="font-semibold">{key}:</strong> {val}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Pricing & Actions */}
      <div className="p-5 pt-0">
        <div className="pt-3 border-t border-slate-100 flex items-baseline justify-between mb-4">
          <div>
            <span className="text-xs text-slate-400 font-medium block">Trade Price</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-slate-900">
                ${Number(product.price).toFixed(2)}
              </span>
              <span className="text-xs text-slate-500 font-medium">/ {product.unit}</span>
            </div>
          </div>
          <span className="text-[11px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
            Volume Discount
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => openDetailModal(product)}
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Details</span>
          </button>

          <button
            type="button"
            onClick={() => openQuoteModal(product)}
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 transition-colors shadow-xs cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Get Quote</span>
          </button>
        </div>
      </div>
    </div>
  );
};
