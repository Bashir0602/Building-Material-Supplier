import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Building, MapPin, Phone, Mail, Package, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const QuoteModal = () => {
  const { isQuoteModalOpen, closeQuoteModal, quoteTargetProduct, products, addInquiry } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: '',
    quantity: '',
    location: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [createdInquiryId, setCreatedInquiryId] = useState('');

  // Update selected product when modal opens or target changes
  useEffect(() => {
    if (quoteTargetProduct) {
      setFormData((prev) => ({
        ...prev,
        product: quoteTargetProduct.name,
        quantity: quoteTargetProduct.minOrder ? `${quoteTargetProduct.minOrder}` : '100 units'
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        product: products[0]?.name || 'UltraTech OPC 53 Grade Cement'
      }));
    }
    setSubmitted(false);
  }, [quoteTargetProduct, isQuoteModalOpen, products]);

  if (!isQuoteModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.location) {
      alert('Please fill in your name, phone number, and delivery location.');
      return;
    }

    const created = addInquiry({
      name: formData.name,
      company: formData.company || 'Individual Contractor',
      phone: formData.phone,
      email: formData.email || 'N/A',
      product: formData.product,
      quantity: formData.quantity || 'Standard Load',
      location: formData.location,
      notes: formData.notes
    });

    setCreatedInquiryId(created.id);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    closeQuoteModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <h3 className="text-lg font-bold">Request Instant Material Quote</h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Get official wholesale mill pricing and site delivery schedules within 2 hours.
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-black text-slate-900">Quotation Request Received!</h4>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 max-w-md mx-auto text-left text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-500">Reference ID:</span>
                <span className="font-bold text-orange-600">{createdInquiryId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Product:</span>
                <span className="font-semibold text-slate-800">{formData.product}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Destination Site:</span>
                <span className="font-semibold text-slate-800">{formData.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Contact Person:</span>
                <span className="font-semibold text-slate-800">{formData.name} ({formData.phone})</span>
              </div>
            </div>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Our dispatch logistics coordinator has received your requisition. You can also view this inquiry directly inside our <strong>Staff & Admin Portal</strong>.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {quoteTargetProduct && (
              <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl flex items-center gap-3">
                <Package className="w-5 h-5 text-orange-600 shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-orange-950">Selected Material:</span>{' '}
                  <span className="text-orange-900 font-semibold">{quoteTargetProduct.name}</span>
                  <span className="text-orange-700 ml-2">
                    (${Number(quoteTargetProduct.price).toFixed(2)} / {quoteTargetProduct.unit})
                  </span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name / Contact Person *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Robert Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Company / Firm (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Vance Construction LLC"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Material Required *
                </label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                >
                  {products.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} ({p.category})
                    </option>
                  ))}
                  <option value="Mixed Bulk Material Package">Mixed Bulk Construction Package</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Estimated Quantity Needed
                </label>
                <input
                  type="text"
                  placeholder="e.g. 500 Bags, 20 Tons, 5000 Bricks"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Project / Site Delivery Address *
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Plot 42, Sector 12, Riverview Industrial Park"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Specific Instructions or Delivery Timelines
              </label>
              <textarea
                rows={2}
                placeholder="Mention unloading requirements (tipper or crane), test certificates needed, or desired delivery date..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-100">
              <span className="text-[11px] text-slate-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 text-blue-600" />
                Zero obligation quote • Direct factory rate
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 shadow-md cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Requisition</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
