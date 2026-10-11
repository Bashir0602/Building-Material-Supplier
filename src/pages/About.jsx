import React from 'react';
import { 
  Building2, 
  Truck, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Users, 
  Clock, 
  Target, 
  Compass, 
  Layers,
  HardHat,
  BadgeCheck,
  FileSpreadsheet
} from 'lucide-react';
import { companyStats } from '../data/initialData';

export const About = () => {
  const values = [
    {
      title: 'Structural Integrity First',
      desc: 'We never compromise on metallurgical or mineral grade standards. Every rebar bundle and cement consignment adheres strictly to certified IS and ASTM national standards.',
      icon: ShieldCheck
    },
    {
      title: 'Zero-Delay Logistics',
      desc: 'In construction, delays cost fortunes. Our in-house fleet of 65+ heavy dumpers and crane-mounted flatbeds operates under strict turnaround protocols.',
      icon: Truck
    },
    {
      title: 'Direct Mill Transparency',
      desc: 'We eliminate multi-layered distributor margins. Contractors receive direct mill-rate quotations with clear tonnage weighbridge receipts.',
      icon: Award
    },
    {
      title: 'Sustainable Green Building',
      desc: 'We champion thermal-efficient AAC blocks, fly-ash blended eco cements, and manufactured M-sand to preserve natural river ecosystems.',
      icon: Layers
    }
  ];

  const team = [
    {
      name: 'Arthur Sterling',
      role: 'Founder & Managing Director',
      exp: '28+ Years in Heavy Construction',
      bio: 'Pioneered direct quarry-to-site bulk logistics in 2001. Oversees regional strategic supply partnerships with primary steel mills.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Elena Rostova',
      role: 'Chief Materials Quality Engineer',
      exp: 'M.Tech Structural Engineering',
      bio: 'Manages our internal NABL-aligned testing laboratory, overseeing universal tensile testing (UTM) and concrete cube crush tests.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'David K. Patel',
      role: 'VP of Fleet Logistics & Dispatch',
      exp: '18 Years Supply Chain Operations',
      bio: 'Directs daily routing and GPS scheduling for 65+ tippers, boom trucks, and bulk transit mixers across regional construction sites.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Samantha Vance',
      role: 'Director of Commercial Accounts',
      exp: '14 Years Contractor Relations',
      bio: 'Coordinates high-volume tender procurement, project bill-of-quantities (BOQ), and dedicated contractor credit line facilities.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const milestones = [
    { year: '2001', title: 'Founded with 2 Tipper Trucks', desc: 'Commenced supplying river sand and red kiln bricks to local residential projects.' },
    { year: '2008', title: 'Authorized Steel & Cement Tier-1 Partner', desc: 'Formed direct wholesale distributorship with premier cement manufacturers and primary steel rolling mills.' },
    { year: '2015', title: '14-Acre Central Storage Depot', desc: 'Constructed state-of-the-art covered dry warehouses and electronic computerized weighbridge terminal.' },
    { year: '2022', title: 'Fleet Expansion to 65+ Vehicles', desc: 'Added boom-crane unloading trucks and expanded dispatch radius to over 150 km across regional infrastructure.' },
    { year: 'Present', title: 'Leading Commercial Supplier', desc: 'Over 18,500 projects supplied with an average 99.4% on-time site dispatch record.' }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/20 text-orange-400 border border-orange-500/30">
              <Building2 className="w-4 h-4 text-orange-400" />
              <span>About BuildPro Supplies</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              Supplying the Structural Backbone of Modern Infrastructure.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Established in 2001, BuildPro Supplies has grown into one of the region's largest independent industrial building materials distributors. We bridge the gap between heavy primary steel mills, cement plants, and construction job sites.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {companyStats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-orange-600 mt-1">{stat.label}</div>
              <div className="text-xs text-slate-500 mt-0.5">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center">
              <Target className="w-6 h-6 text-blue-700" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To empower civil contractors, commercial builders, and private developers with uncompromised, laboratory-certified construction materials delivered right on schedule, eliminating costly project standstills with fair and transparent wholesale pricing.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <Compass className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To be the most trusted, technology-driven construction supply chain network in the country, championing sustainable AAC block adoption, eco-efficient sand alternatives, and fully digitized GPS-tracked jobsite logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Operational Pillars
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Values That Guide Every Consignment
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-orange-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-slate-900">{v.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Fleet & Logistics Yard Showcase */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/20 text-orange-400 border border-orange-500/30">
                <Truck className="w-4 h-4 text-orange-400" />
                <span>Heavy Logistics Infrastructure</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                14-Acre Central Yard & 65+ Fleet Transit Vehicles
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Operating out of our central logistics terminal, our facility houses weather-sealed silos for 10,000+ metric tons of bulk cement, automated aggregate screening plants, and high-capacity gantry cranes for rapid rebar bundle loading.
              </p>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Computerized 100-Ton Weighbridge ensuring 100% accurate net weight</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Telescopic Boom Crane Trucks for rooftop and trench placement</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Live GPS Tracking with SMS dispatch notifications to site managers</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80"
                  alt="Industrial Logistics Depot and Crane Storage"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quality Control & Lab Testing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50/50 rounded-3xl border border-blue-200/80 p-8 sm:p-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100 px-3 py-1 rounded-full inline-block">
              Quality Assurance Lab
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              In-House Material Testing Protocols
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              We operate an on-site material testing facility to ensure zero substandard batches reach your jobsite. Every contractor can request live test demonstrations and official test certificates (MTC) with their consignments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-white p-4 rounded-xl border border-blue-100">
                <h4 className="font-bold text-sm text-slate-900">Universal Tensile Testing</h4>
                <p className="text-xs text-slate-600 mt-1">Verifies 550 N/mm² yield strength and minimum 16% elongation on TMT rebars.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-blue-100">
                <h4 className="font-bold text-sm text-slate-900">Cube Compression Testing</h4>
                <p className="text-xs text-slate-600 mt-1">7-day and 28-day hydraulic crushing strength tests for cement and mortar cubes.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-blue-100">
                <h4 className="font-bold text-sm text-slate-900">Sieve & Silt Analysis</h4>
                <p className="text-xs text-slate-600 mt-1">Checks fineness modulus and ensures silt content remains under 3% for plaster sand.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Engineering Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Executive Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Meet Our Materials & Engineering Team
          </h2>
          <p className="text-sm text-slate-600">
            Decades of combined technical experience in civil engineering, logistics, and bulk supply.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <div className="aspect-square bg-slate-100 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h4 className="font-bold text-base text-slate-900">{member.name}</h4>
                  <p className="text-xs font-semibold text-orange-600">{member.role}</p>
                  <p className="text-[11px] font-medium text-slate-500">{member.exp}</p>
                  <p className="text-xs text-slate-600 pt-1 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones / Company Journey */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Our Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Over Two Decades of Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {milestones.map((m, i) => (
            <div key={i} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-xl font-black text-orange-600 block">{m.year}</span>
              <h4 className="font-bold text-sm text-slate-900">{m.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
