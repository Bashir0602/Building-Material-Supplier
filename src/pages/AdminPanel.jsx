import React, { useState } from 'react';
import { 
  Building2, 
  Layers, 
  Package, 
  Plus, 
  Edit, 
  Trash2, 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Phone, 
  MapPin, 
  FileText, 
  RotateCcw,
  HardHat,
  TrendingUp,
  X,
  Eye,
  Filter
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AdminPanel = () => {
  const { 
    products, 
    inquiries, 
    addProduct, 
    updateProduct, 
    deleteProduct, 
    resetProducts, 
    updateInquiryStatus, 
    deleteInquiry 
  } = useApp();

  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'products' | 'inquiries'

  // Product management modal states
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  // Search & filter in Admin
  const [productSearch, setProductSearch] = useState('');
  const [productCategoryFilter, setProductCategoryFilter] = useState('All');
  const [inquirySearch, setInquirySearch] = useState('');
  const [inquiryStatusFilter, setInquiryStatusFilter] = useState('All');

  // New product form
  const [productForm, setProductForm] = useState({
    name: '',
    category: 'Cement',
    price: '',
    unit: '50kg Bag',
    inStock: true,
    stockCount: 500,
    minOrder: '50 Bags',
    image: '',
    description: '',
    popular: false
  });

  // Calculate KPIs
  const totalProductsCount = products.length;
  const inStockCount = products.filter((p) => p.inStock).length;
  const outOfStockCount = totalProductsCount - inStockCount;
  const pendingInquiriesCount = inquiries.filter((i) => i.status === 'Pending').length;
  const completedInquiriesCount = inquiries.filter((i) => i.status === 'Completed').length;

  // Filtered products for admin table
  const filteredProducts = products.filter((p) => {
    if (productCategoryFilter !== 'All' && p.category !== productCategoryFilter) return false;
    if (productSearch) {
      const q = productSearch.toLowerCase();
      return p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
    }
    return true;
  });

  // Filtered inquiries for admin table
  const filteredInquiries = inquiries.filter((i) => {
    if (inquiryStatusFilter !== 'All' && i.status !== inquiryStatusFilter) return false;
    if (inquirySearch) {
      const q = inquirySearch.toLowerCase();
      return (
        i.name.toLowerCase().includes(q) ||
        i.product?.toLowerCase().includes(q) ||
        i.company?.toLowerCase().includes(q) ||
        i.location?.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleOpenAddModal = () => {
    setProductForm({
      name: '',
      category: 'Cement',
      price: '',
      unit: '50kg Bag',
      inStock: true,
      stockCount: 500,
      minOrder: '50 Bags',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
      description: '',
      popular: false
    });
    setEditingProduct(null);
    setIsAddModalOpen(true);
  };

  const handleOpenEditModal = (product) => {
    setEditingProduct(product);
    setProductForm({
      name: product.name,
      category: product.category,
      price: product.price,
      unit: product.unit,
      inStock: product.inStock,
      stockCount: product.stockCount || 100,
      minOrder: product.minOrder || '',
      image: product.image,
      description: product.description || '',
      popular: product.popular || false
    });
    setIsAddModalOpen(true);
  };

  const handleSaveProduct = (e) => {
    e.preventDefault();
    if (!productForm.name || !productForm.price) {
      alert('Please provide product name and unit price.');
      return;
    }

    if (editingProduct) {
      updateProduct(editingProduct.id, {
        ...productForm,
        price: Number(productForm.price),
        stockCount: Number(productForm.stockCount)
      });
    } else {
      addProduct({
        ...productForm,
        price: Number(productForm.price),
        stockCount: Number(productForm.stockCount)
      });
    }

    setIsAddModalOpen(false);
    setEditingProduct(null);
  };

  const handleDeleteProduct = (product) => {
    if (window.confirm(`Are you sure you want to delete "${product.name}" from catalog?`)) {
      deleteProduct(product.id);
    }
  };

  const handleDeleteInquiry = (inquiry) => {
    if (window.confirm(`Are you sure you want to delete inquiry #${inquiry.id}?`)) {
      deleteInquiry(inquiry.id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Top Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/20 text-orange-400 border border-orange-500/30 mb-2">
            <HardHat className="w-3.5 h-3.5 text-orange-400" />
            <span>Staff Administration Panel</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Material Inventory & Consignment Desk
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Manage product listings, pricing updates, and review incoming contractor quote requisitions.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={resetProducts}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer"
            title="Reset data back to initial demo dataset"
          >
            <RotateCcw className="w-3.5 h-3.5 text-orange-400" />
            <span>Reset Demo Data</span>
          </button>

          <button
            onClick={handleOpenAddModal}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 transition-colors shadow-md cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Material</span>
          </button>
        </div>
      </div>

      {/* Admin Navigation Tabs */}
      <div className="flex border-b border-slate-200 gap-2 sm:gap-6 overflow-x-auto">
        <button
          onClick={() => setActiveTab('overview')}
          className={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
            activeTab === 'overview'
              ? 'border-orange-500 text-orange-600'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          Overview & Metrics
        </button>

        <button
          onClick={() => setActiveTab('products')}
          className={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-2 ${
            activeTab === 'products'
              ? 'border-orange-500 text-orange-600'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <span>Catalog Inventory</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-100 text-slate-700">
            {products.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('inquiries')}
          className={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-2 ${
            activeTab === 'inquiries'
              ? 'border-orange-500 text-orange-600'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <span>Quotes & Inquiries</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-orange-100 text-orange-700 font-bold">
            {inquiries.length}
          </span>
        </button>
      </div>

      {/* TAB 1: OVERVIEW & DASHBOARD METRICS */}
      {activeTab === 'overview' && (
        <div className="space-y-8 animate-fade-in">
          {/* KPI Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Total Materials
                </span>
                <div className="text-3xl font-black text-slate-900 mt-1">{totalProductsCount}</div>
                <span className="text-[11px] text-emerald-600 font-medium">In active catalog</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center">
                <Layers className="w-6 h-6 text-blue-700" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Stock Status
                </span>
                <div className="text-3xl font-black text-emerald-600 mt-1">{inStockCount}</div>
                <span className="text-[11px] text-slate-500">
                  {outOfStockCount > 0 ? `${outOfStockCount} out of stock` : 'All items in stock'}
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Pending Quotes
                </span>
                <div className="text-3xl font-black text-orange-600 mt-1">{pendingInquiriesCount}</div>
                <span className="text-[11px] text-orange-600 font-medium">Requires sales callback</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Completed Deals
                </span>
                <div className="text-3xl font-black text-slate-900 mt-1">{completedInquiriesCount}</div>
                <span className="text-[11px] text-slate-500">Dispatched & settled</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Quick Actions & Recent Inquiries Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h3 className="font-bold text-base text-slate-900">Recent Customer Inquiries</h3>
                <button
                  onClick={() => setActiveTab('inquiries')}
                  className="text-xs font-bold text-orange-600 hover:text-orange-700"
                >
                  View All ({inquiries.length})
                </button>
              </div>

              <div className="divide-y divide-slate-100">
                {inquiries.slice(0, 4).map((inq) => (
                  <div key={inq.id} className="py-3 flex items-center justify-between gap-4">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-slate-900">{inq.name}</span>
                        <span className="text-[11px] text-slate-400">({inq.company})</span>
                      </div>
                      <p className="text-xs text-slate-600">
                        {inq.product} • <strong className="text-slate-800">{inq.quantity}</strong>
                      </p>
                      <p className="text-[10px] text-slate-400">{inq.location}</p>
                    </div>

                    <div className="text-right shrink-0">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                          inq.status === 'Pending'
                            ? 'bg-amber-100 text-amber-800'
                            : inq.status === 'Quote Sent'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {inq.status}
                      </span>
                      <p className="text-[10px] text-slate-400 mt-1">{inq.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Yard Guide */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">
              <h3 className="font-bold text-base text-slate-900">Staff Operational Shortcuts</h3>
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <Plus className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800">Add Materials to Storefront</h5>
                    <p className="text-slate-500 mt-0.5">
                      New products appear live immediately on the public Products and Home pages.
                    </p>
                    <button
                      onClick={handleOpenAddModal}
                      className="text-orange-600 font-bold mt-1 inline-block hover:underline"
                    >
                      + Create Listing
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800">Process Site Quotes</h5>
                    <p className="text-slate-500 mt-0.5">
                      Update lead progress from "Pending" to "Quote Sent" as your team issues pro-forma invoices.
                    </p>
                    <button
                      onClick={() => setActiveTab('inquiries')}
                      className="text-blue-600 font-bold mt-1 inline-block hover:underline"
                    >
                      Manage Quotes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PRODUCTS INVENTORY TABLE */}
      {activeTab === 'products' && (
        <div className="space-y-6 animate-fade-in">
          {/* Filter / Search header */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-slate-200">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search products in inventory..."
                value={productSearch}
                onChange={(e) => setProductSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <select
                value={productCategoryFilter}
                onChange={(e) => setProductCategoryFilter(e.target.value)}
                className="text-xs px-3 py-2 rounded-lg border border-slate-300 bg-white font-medium"
              >
                <option value="All">All Categories</option>
                <option value="Cement">Cement</option>
                <option value="Steel">Steel</option>
                <option value="Bricks & Blocks">Bricks & Blocks</option>
                <option value="Sand & Aggregates">Sand & Aggregates</option>
                <option value="Chemicals & Additives">Chemicals & Additives</option>
              </select>

              <button
                onClick={handleOpenAddModal}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 shrink-0 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>New Item</span>
              </button>
            </div>
          </div>

          {/* Product Table */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-600 font-bold uppercase tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="p-4">Material</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Trade Price</th>
                    <th className="p-4">Stock Status</th>
                    <th className="p-4">MOQ</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredProducts.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-10 h-10 rounded-lg object-cover bg-slate-100 shrink-0"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80';
                            }}
                          />
                          <div>
                            <span className="font-bold text-slate-900 block">{p.name}</span>
                            <span className="text-[11px] text-slate-400 line-clamp-1 max-w-xs">
                              {p.description}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td className="p-4 font-semibold text-slate-700">{p.category}</td>

                      <td className="p-4">
                        <span className="font-bold text-slate-900">
                          ${Number(p.price).toFixed(2)}
                        </span>
                        <span className="text-slate-400 text-[11px] block">/ {p.unit}</span>
                      </td>

                      <td className="p-4">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                            p.inStock
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-rose-100 text-rose-800'
                          }`}
                        >
                          {p.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                        {p.stockCount && (
                          <span className="text-[10px] text-slate-400 block mt-0.5">
                            Qty: {p.stockCount}
                          </span>
                        )}
                      </td>

                      <td className="p-4 text-slate-600 font-medium">{p.minOrder || 'N/A'}</td>

                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleOpenEditModal(p)}
                            className="p-1.5 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
                            title="Edit Product"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(p)}
                            className="p-1.5 rounded-lg text-slate-600 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                            title="Delete Product"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredProducts.length === 0 && (
              <div className="p-8 text-center text-slate-500 text-xs">
                No materials matching current search filter.
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: INQUIRIES & QUOTE REQUESTS */}
      {activeTab === 'inquiries' && (
        <div className="space-y-6 animate-fade-in">
          {/* Search & Filter Header */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-slate-200">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search contractor, product or location..."
                value={inquirySearch}
                onChange={(e) => setInquirySearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <select
                value={inquiryStatusFilter}
                onChange={(e) => setInquiryStatusFilter(e.target.value)}
                className="text-xs px-3 py-2 rounded-lg border border-slate-300 bg-white font-medium"
              >
                <option value="All">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="Quote Sent">Quote Sent</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          {/* Inquiries Table */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-600 font-bold uppercase tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="p-4">Ref & Date</th>
                    <th className="p-4">Client / Company</th>
                    <th className="p-4">Material & Qty</th>
                    <th className="p-4">Destination Site</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Update & Manage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredInquiries.map((inq) => (
                    <tr key={inq.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="p-4">
                        <span className="font-bold text-orange-600 block">{inq.id}</span>
                        <span className="text-[11px] text-slate-400">{inq.date}</span>
                      </td>

                      <td className="p-4">
                        <span className="font-bold text-slate-900 block">{inq.name}</span>
                        <span className="text-[11px] text-slate-500">{inq.company}</span>
                        <span className="text-[11px] text-slate-400 block">{inq.phone}</span>
                      </td>

                      <td className="p-4">
                        <span className="font-semibold text-slate-800 block">{inq.product}</span>
                        <span className="text-[11px] text-orange-600 font-bold">{inq.quantity}</span>
                        {inq.notes && (
                          <span className="text-[10px] text-slate-500 italic block mt-0.5 max-w-xs line-clamp-1">
                            Note: {inq.notes}
                          </span>
                        )}
                      </td>

                      <td className="p-4 text-slate-600">
                        <div className="flex items-start gap-1 max-w-xs">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                          <span>{inq.location}</span>
                        </div>
                      </td>

                      <td className="p-4">
                        <select
                          value={inq.status}
                          onChange={(e) => updateInquiryStatus(inq.id, e.target.value)}
                          className={`text-xs font-bold px-2.5 py-1 rounded-lg border cursor-pointer ${
                            inq.status === 'Pending'
                              ? 'bg-amber-50 text-amber-800 border-amber-200'
                              : inq.status === 'Quote Sent'
                              ? 'bg-blue-50 text-blue-800 border-blue-200'
                              : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          }`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Quote Sent">Quote Sent</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </td>

                      <td className="p-4 text-right">
                        <button
                          onClick={() => handleDeleteInquiry(inq)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                          title="Delete Record"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredInquiries.length === 0 && (
              <div className="p-8 text-center text-slate-500 text-xs">
                No inquiries matching the selected criteria.
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL: ADD / EDIT PRODUCT */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in overflow-y-auto">
          <div 
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
              <h3 className="font-bold text-base">
                {editingProduct ? 'Edit Material Listing' : 'Add New Building Material'}
              </h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSaveProduct} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Material / Product Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. UltraTech OPC 53 Grade Cement"
                    value={productForm.name}
                    onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Category *
                  </label>
                  <select
                    value={productForm.category}
                    onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  >
                    <option value="Cement">Cement</option>
                    <option value="Steel">Steel</option>
                    <option value="Bricks & Blocks">Bricks & Blocks</option>
                    <option value="Sand & Aggregates">Sand & Aggregates</option>
                    <option value="Chemicals & Additives">Chemicals & Additives</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Unit Price ($) *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    placeholder="e.g. 7.80"
                    value={productForm.price}
                    onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Unit Measurement
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 50kg Bag, Ton, Piece, Block"
                    value={productForm.unit}
                    onChange={(e) => setProductForm({ ...productForm, unit: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Minimum Order Quantity (MOQ)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 50 Bags, 2 Tons"
                    value={productForm.minOrder}
                    onChange={(e) => setProductForm({ ...productForm, minOrder: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Available Stock Count
                  </label>
                  <input
                    type="number"
                    value={productForm.stockCount}
                    onChange={(e) => setProductForm({ ...productForm, stockCount: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Stock Availability
                  </label>
                  <select
                    value={productForm.inStock ? 'true' : 'false'}
                    onChange={(e) => setProductForm({ ...productForm, inStock: e.target.value === 'true' })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  >
                    <option value="true">In Stock</option>
                    <option value="false">Out of Stock</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Image URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://images.unsplash.com/photo-..."
                    value={productForm.image}
                    onChange={(e) => setProductForm({ ...productForm, image: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Description & Applications
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Describe technical specs, strength grading, and structural applications..."
                    value={productForm.description}
                    onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={productForm.popular}
                      onChange={(e) => setProductForm({ ...productForm, popular: e.target.checked })}
                      className="w-4 h-4 text-orange-500 rounded border-slate-300 focus:ring-orange-500"
                    />
                    <span>Highlight as "Contractor Choice / Bestseller" on Home Page</span>
                  </label>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 shadow-md"
                >
                  {editingProduct ? 'Save Changes' : 'Create Listing'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
