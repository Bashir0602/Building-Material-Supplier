import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Layers, 
  Package, 
  CheckCircle2, 
  SlidersHorizontal, 
  X, 
  PhoneCall, 
  FileText,
  RotateCcw
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ProductCard } from '../components/ProductCard';

export const Products = () => {
  const { products, openQuoteModal } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();

  // Categories list
  const categories = [
    'All Materials',
    'Cement',
    'Steel',
    'Bricks & Blocks',
    'Sand & Aggregates',
    'Chemicals & Additives'
  ];

  // Filters state
  const categoryFromUrl = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || 'All Materials');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-low', 'price-high', 'rating'
  const [inStockOnly, setInStockOnly] = useState(false);

  // Sync category if URL parameter changes
  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  // Handle category change
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === 'All Materials') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category });
    }
  };

  // Filtered & sorted products calculation
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category check
        if (selectedCategory !== 'All Materials' && p.category !== selectedCategory) {
          return false;
        }

        // In stock check
        if (inStockOnly && !p.inStock) {
          return false;
        }

        // Search check
        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase();
          const matchName = p.name.toLowerCase().includes(q);
          const matchDesc = p.description?.toLowerCase().includes(q);
          const matchCategory = p.category?.toLowerCase().includes(q);
          return matchName || matchDesc || matchCategory;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') {
          return Number(a.price) - Number(b.price);
        }
        if (sortBy === 'price-high') {
          return Number(b.price) - Number(a.price);
        }
        if (sortBy === 'rating') {
          return (Number(b.rating) || 0) - (Number(a.rating) || 0);
        }
        // Default / featured
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      });
  }, [products, selectedCategory, searchQuery, sortBy, inStockOnly]);

  const resetFilters = () => {
    setSelectedCategory('All Materials');
    setSearchQuery('');
    setSortBy('featured');
    setInStockOnly(false);
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-slate-800 relative overflow-hidden">
        <div className="max-w-2xl space-y-3 relative z-10">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-orange-500 text-white inline-block">
            Commercial Supply Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white">
            Structural Building Materials & Wholesale Rates
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Direct mill dispatches for industrial steel, certified cement, kiln red bricks, lightweight AAC blocks, and quarry washed sand. All consignments verified against ASTM & IS standards.
          </p>
        </div>
      </div>

      {/* Control Bar: Categories, Search, Filters */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
        {/* Search & Sort Row */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search materials (e.g. 53 Grade, TMT 16mm, AAC...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-slate-50/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort & In-stock Toggle */}
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="w-4 h-4 text-orange-500 rounded border-slate-300 focus:ring-orange-500"
              />
              <span>In-Stock Only</span>
            </label>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium whitespace-nowrap">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs font-semibold px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
              >
                <option value="featured">Featured / Best Sellers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Pills Row */}
        <div className="pt-3 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <SlidersHorizontal className="w-4 h-4 text-slate-400 shrink-0 hidden sm:inline" />
          <div className="flex items-center gap-2 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {(selectedCategory !== 'All Materials' || searchQuery || inStockOnly || sortBy !== 'featured') && (
            <button
              onClick={resetFilters}
              className="ml-auto text-xs text-orange-600 hover:text-orange-700 font-semibold flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Results Count & Current Active Filter Summary */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>
          Showing <strong className="text-slate-900 font-bold">{filteredProducts.length}</strong> materials
          {selectedCategory !== 'All Materials' && ` in ${selectedCategory}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </span>
        <span className="hidden sm:inline">
          Wholesale volume pricing applicable for bulk orders
        </span>
      </div>

      {/* Product Grid or Empty State */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
            <Package className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">No matching materials found</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            We couldn't find any building materials matching your current search or filter criteria. Try clearing filters or speak with our sales desk directly.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={resetFilters}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 cursor-pointer"
            >
              Clear All Filters
            </button>
            <button
              onClick={() => openQuoteModal()}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 cursor-pointer"
            >
              Custom Material Inquiry
            </button>
          </div>
        </div>
      )}

      {/* Bulk Order Contractor Callout */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-lg font-black text-slate-900">
            Need Bulk Consignment Logistics (50+ Tons / 1,000+ Bags)?
          </h3>
          <p className="text-xs text-slate-600 max-w-xl">
            Our enterprise logistics division coordinates scheduled multi-axle dumper convoys, crane offloading, and credit terms for large commercial and infrastructure developments.
          </p>
        </div>

        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => openQuoteModal()}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 shadow-sm cursor-pointer"
          >
            Request Enterprise BOQ Quote
          </button>
          <a
            href="tel:18005552845"
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 transition-colors flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5 text-orange-500" />
            <span>Call Hotline</span>
          </a>
        </div>
      </div>
    </div>
  );
};
