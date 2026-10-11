import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Truck, 
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { faqs } from '../data/initialData';

export const Contact = () => {
  const { addInquiry, products } = useApp();

  const [form, setForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: products[0]?.name || 'UltraTech OPC 53 Grade Cement',
    quantity: '',
    location: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [createdId, setCreatedId] = useState('');
  const [activeFaq, setActiveFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.location) {
      alert('Please fill in your name, phone number, and delivery location.');
      return;
    }

    const created = addInquiry({
      name: form.name,
      company: form.company || 'Private Builder',
      phone: form.phone,
      email: form.email || 'N/A',
      product: form.product,
      quantity: form.quantity || 'Inquiry Only',
      location: form.location,
      notes: form.notes
    });

    setCreatedId(created.id);
    setSubmitted(true);
    setForm({
      name: '',
      company: '',
      phone: '',
      email: '',
      product: products[0]?.name || 'UltraTech OPC 53 Grade Cement',
      quantity: '',
      location: '',
      notes: ''
    });
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 relative overflow-hidden">
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-orange-500 text-white inline-block">
              24/7 Logistics & Sales Support
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white">
              Connect With Our Dispatch & Sales Engineers
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Have questions about cement grade suitability, daily TMT steel mill prices, or scheduling a multi-dumper sand consignment? We are ready to assist your site managers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Info & Inquiry Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Details & Operations */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-black text-slate-900">Direct Contact Channels</h2>
              <p className="text-xs text-slate-600 mt-1">
                Reach our sales desk or dispatch yard directly through any of our channels below.
              </p>
            </div>

            <div className="space-y-4">
              {/* Central Depot */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-xs">
                  <h4 className="font-bold text-sm text-slate-900">Central Logistics Depot & Yard</h4>
                  <p className="text-slate-600 leading-relaxed">
                    1420 Heavy Industry Boulevard, Gate 4, Logistics Park West, Sector 18
                  </p>
                  <p className="text-slate-400 font-medium">Computerized Weighbridge on premise</p>
                </div>
              </div>

              {/* Phone Desk */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-xs">
                  <h4 className="font-bold text-sm text-slate-900">Direct Dispatch Lines</h4>
                  <p className="text-slate-800 font-semibold">+1 (800) 555-BUILD (Toll-Free)</p>
                  <p className="text-slate-600">+1 (800) 555-2845 / WhatsApp: +1 (555) 019-4482</p>
                  <p className="text-slate-400">Available 7:00 AM – 7:00 PM Mon-Sat</p>
                </div>
              </div>

              {/* Email Desk */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-xs">
                  <h4 className="font-bold text-sm text-slate-900">Email Departments</h4>
                  <p className="text-slate-600">Quotations: <strong className="text-slate-900">quotes@buildprosupplies.com</strong></p>
                  <p className="text-slate-600">Dispatch: <strong className="text-slate-900">dispatch@buildprosupplies.com</strong></p>
                  <p className="text-slate-600">Accounts & Credit: <strong className="text-slate-900">billing@buildprosupplies.com</strong></p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-xs">
                  <h4 className="font-bold text-sm text-slate-900">Yard Loading Timings</h4>
                  <p className="text-slate-700 font-medium">Monday – Friday: 06:30 AM – 08:00 PM</p>
                  <p className="text-slate-700 font-medium">Saturday: 07:00 AM – 06:00 PM</p>
                  <p className="text-slate-500">Sunday: Closed for maintenance & inventory calibration</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Requisition Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 sm:p-8">
              <div className="border-b border-slate-100 pb-4 mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-600 border border-orange-200 mb-2">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Online Site Requisition</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900">Send an Inquiry or Order Request</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Submissions are instantly routed to our sales desk and recorded in our Staff Admin Portal.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900">Inquiry Logged Successfully!</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Your inquiry has been assigned Reference <strong>#{createdId}</strong>. Our logistics officer will contact your site supervisor with an official pro-forma invoice and vehicle dispatch slot.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md cursor-pointer"
                  >
                    Send Another Requisition
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Liam Vance"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Contracting Firm / Company
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Civil Works Ltd"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="contact@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Material Category / Product *
                      </label>
                      <select
                        value={form.product}
                        onChange={(e) => setForm({ ...form, product: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                      >
                        {products.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                        <option value="Mixed Consignment Package">Full Truckload Mixed Consignment</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Required Quantity
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 20 Metric Tons, 800 Bags"
                        value={form.quantity}
                        onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Jobsite Delivery Address / Landmark *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Plot 18B, North Industrial Corridor, Near Toll Plaza"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Project Notes / Unloading Equipment Needed
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify if site requires boom crane offloading, tipper dumping, lab test reports, or specific timing restrictions..."
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 transition-colors shadow-md cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Official Requisition</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Contractor Knowledge Base
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Everything you need to know regarding MOQ, test certificates, logistics, and credit terms.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left font-bold text-sm sm:text-base text-slate-900 flex justify-between items-center gap-4 hover:text-orange-600 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
