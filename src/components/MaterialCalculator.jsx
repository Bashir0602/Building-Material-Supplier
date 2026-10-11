import React, { useState } from 'react';
import { Calculator, Hammer, Layers, FileCheck, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const MaterialCalculator = () => {
  const { openQuoteModal } = useApp();
  const [calcType, setCalcType] = useState('concrete'); // 'concrete' | 'brickwork'

  // Concrete state (dimensions in feet)
  const [concreteLength, setConcreteLength] = useState(20);
  const [concreteWidth, setConcreteWidth] = useState(15);
  const [concreteThickness, setConcreteThickness] = useState(5); // inches

  // Brickwork state (dimensions in feet)
  const [wallLength, setWallLength] = useState(25);
  const [wallHeight, setWallHeight] = useState(10);
  const [wallThickness, setWallThickness] = useState('9'); // '4.5' or '9' inches

  // Concrete calculations:
  // Volume in cu.ft = L * W * (thickness / 12)
  const volumeCuFt = concreteLength * concreteWidth * (concreteThickness / 12);
  const volumeCuM = volumeCuFt * 0.0283168;
  // Standard 1:2:4 mix (M15 / M20 standard RCC):
  // 1 cu.m concrete dry mix requires ~8.2 bags cement, ~0.45 cu.m sand, ~0.9 cu.m aggregate
  const cementBags = Math.ceil(volumeCuM * 8.2);
  const sandTons = (volumeCuM * 0.45 * 1.6).toFixed(1); // 1.6 ton/m3 sand density
  const aggregateTons = (volumeCuM * 0.9 * 1.5).toFixed(1);

  // Brick calculations:
  const wallAreaSqFt = wallLength * wallHeight;
  // Standard 9-inch wall requires ~10 bricks per sq.ft; 4.5-inch wall requires ~5 bricks
  const bricksPerSqFt = wallThickness === '9' ? 9.8 : 4.9;
  const totalBricks = Math.ceil(wallAreaSqFt * bricksPerSqFt);
  // Cement for 1000 bricks in 1:6 mortar is approx 3 bags cement and 15 cu.ft sand
  const brickCementBags = Math.ceil((totalBricks / 1000) * (wallThickness === '9' ? 3.2 : 1.8));
  const brickSandTons = (((totalBricks / 1000) * (wallThickness === '9' ? 16 : 9)) * 0.045).toFixed(1);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30 mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Instant Construction Material Estimator
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Calculate accurate quantity estimates for your slab, RCC footing, or brick masonry walls.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex bg-slate-800 p-1 rounded-xl shrink-0 border border-slate-700">
          <button
            type="button"
            onClick={() => setCalcType('concrete')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              calcType === 'concrete'
                ? 'bg-orange-500 text-white shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Concrete / Slab
          </button>
          <button
            type="button"
            onClick={() => setCalcType('brickwork')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              calcType === 'brickwork'
                ? 'bg-orange-500 text-white shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Hammer className="w-3.5 h-3.5" />
            Brick Masonry
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          {calcType === 'concrete' ? (
            <div className="space-y-5">
              <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center text-xs font-bold">1</span>
                Slab / Foundation Dimensions:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Length (Feet)</label>
                  <input
                    type="number"
                    min="1"
                    max="500"
                    value={concreteLength}
                    onChange={(e) => setConcreteLength(Number(e.target.value) || 0)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 font-semibold text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Width (Feet)</label>
                  <input
                    type="number"
                    min="1"
                    max="500"
                    value={concreteWidth}
                    onChange={(e) => setConcreteWidth(Number(e.target.value) || 0)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 font-semibold text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Slab Depth (Inches)</label>
                  <input
                    type="number"
                    min="2"
                    max="48"
                    value={concreteThickness}
                    onChange={(e) => setConcreteThickness(Number(e.target.value) || 0)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 font-semibold text-slate-900"
                  />
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 flex justify-between items-center">
                <span>Calculated Volume:</span>
                <span className="font-bold text-slate-900">
                  {volumeCuFt.toFixed(1)} cu.ft ({volumeCuM.toFixed(2)} m³)
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center text-xs font-bold">1</span>
                Brick Masonry Wall Dimensions:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Wall Length (Feet)</label>
                  <input
                    type="number"
                    min="1"
                    max="500"
                    value={wallLength}
                    onChange={(e) => setWallLength(Number(e.target.value) || 0)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 font-semibold text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Wall Height (Feet)</label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={wallHeight}
                    onChange={(e) => setWallHeight(Number(e.target.value) || 0)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 font-semibold text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Wall Thickness</label>
                  <select
                    value={wallThickness}
                    onChange={(e) => setWallThickness(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 font-semibold text-slate-900 bg-white"
                  >
                    <option value="9">9-inch (Outer / Main wall)</option>
                    <option value="4.5">4.5-inch (Partition wall)</option>
                  </select>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 flex justify-between items-center">
                <span>Total Wall Area:</span>
                <span className="font-bold text-slate-900">{wallAreaSqFt} sq. ft.</span>
              </div>
            </div>
          )}

          <div className="text-xs text-slate-500 italic">
            * Note: Quantities account for standard 5% wastage in handling. For complex multi-story structures or seismic detailing, consult our on-site structural engineer.
          </div>
        </div>

        {/* Right Output Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-xl p-6 flex flex-col justify-between shadow-lg">
          <div>
            <div className="flex items-center justify-between border-b border-blue-800/80 pb-3 mb-4">
              <span className="text-xs uppercase tracking-wider text-orange-400 font-bold">
                Estimated Material Requirements
              </span>
              <FileCheck className="w-5 h-5 text-orange-400" />
            </div>

            {calcType === 'concrete' ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                  <div>
                    <span className="text-xs text-slate-300">OPC 53 Grade Cement</span>
                    <p className="text-xs text-orange-400 font-medium">Standard 50kg Bags</p>
                  </div>
                  <span className="text-2xl font-black text-white">{cementBags} <span className="text-xs font-normal text-slate-300">Bags</span></span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                  <div>
                    <span className="text-xs text-slate-300">Clean Concrete Sand (M-Sand)</span>
                    <p className="text-xs text-orange-400 font-medium">Zone II Sifted</p>
                  </div>
                  <span className="text-2xl font-black text-white">{sandTons} <span className="text-xs font-normal text-slate-300">Tons</span></span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                  <div>
                    <span className="text-xs text-slate-300">20mm Granite Aggregates</span>
                    <p className="text-xs text-orange-400 font-medium">Blue Metal</p>
                  </div>
                  <span className="text-2xl font-black text-white">{aggregateTons} <span className="text-xs font-normal text-slate-300">Tons</span></span>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                  <div>
                    <span className="text-xs text-slate-300">Red Kiln Clay Bricks</span>
                    <p className="text-xs text-orange-400 font-medium">Class 10 Sharp Edge</p>
                  </div>
                  <span className="text-2xl font-black text-white">{totalBricks} <span className="text-xs font-normal text-slate-300">Pcs</span></span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                  <div>
                    <span className="text-xs text-slate-300">Mortar Cement</span>
                    <p className="text-xs text-orange-400 font-medium">50kg Bags (1:6 Ratio)</p>
                  </div>
                  <span className="text-2xl font-black text-white">{brickCementBags} <span className="text-xs font-normal text-slate-300">Bags</span></span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                  <div>
                    <span className="text-xs text-slate-300">Plaster / Mortar Sand</span>
                    <p className="text-xs text-orange-400 font-medium">Triple-Washed</p>
                  </div>
                  <span className="text-2xl font-black text-white">{brickSandTons} <span className="text-xs font-normal text-slate-300">Tons</span></span>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-blue-800/80">
            <button
              onClick={() => openQuoteModal({
                name: calcType === 'concrete' ? 'Slab Material Consignment' : 'Brick Masonry Consignment',
                category: calcType === 'concrete' ? 'Concrete Package' : 'Masonry Package',
                price: 0,
                unit: 'Custom Package'
              })}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 transition-colors shadow-md cursor-pointer"
            >
              <span>Get Quotation for this Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
