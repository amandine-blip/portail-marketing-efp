/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Layout, BarChart2, Search, ArrowRight, Compass, Check
} from 'lucide-react';
import MetaAdsSimulator from './components/MetaAdsSimulator';
import GA4Simulator from './components/GA4Simulator';
import GoogleAdsSimulator from './components/GoogleAdsSimulator';
import ReportingLab from './components/ReportingLab';

export default function App() {
  const [currentApp, setCurrentApp] = useState('hub');

  if (currentApp === 'meta') return <MetaAdsSimulator onExit={() => setCurrentApp('hub')} />;
  if (currentApp === 'ga4') return <GA4Simulator onExit={() => setCurrentApp('hub')} />;
  if (currentApp === 'googleads') return <GoogleAdsSimulator onExit={() => setCurrentApp('hub')} />;
  if (currentApp === 'reporting') return <ReportingLab onExit={() => setCurrentApp('hub')} />;

  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-50 p-8 font-sans overflow-y-auto">
      <div className="max-w-6xl w-full text-center mt-12 mb-16 px-4">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-amber-200 shadow-sm animate-bounce">
           <Compass size={14} /> Mission : Digital Strategist
        </div>
        <h1 className="text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
          Academy <span className="text-blue-600">Marketing</span>
        </h1>
        <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
          Bienvenue, Consultant. Votre mission est de maîtriser les outils publicitaires pour sauver les performances de nos clients. <br/>
          <span className="text-blue-600 font-bold">Pratiquez, analysez, et devenez expert.</span>
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full px-4">
        {/* Meta Ads */}
        <div 
          onClick={() => setCurrentApp('meta')} 
          className="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 p-8 cursor-pointer border border-slate-100 hover:border-blue-200 group relative overflow-hidden"
        >
          <div className="w-14 h-14 bg-blue-500 text-white rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:rotate-6 transition-transform">
            <Layout size={28} />
          </div>
          <h2 className="text-xl font-black text-slate-900 mb-3 tracking-tight">Meta Ads</h2>
          <p className="text-slate-500 leading-relaxed text-xs font-medium mb-6">
            Apprenez à créer des campagnes, gérer les budgets et prévisualiser les annonces.
          </p>
          <div className="flex items-center text-blue-600 font-bold text-[11px] uppercase tracking-wider">
            Démarrer la mission <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
        
        {/* GA4 */}
        <div 
          onClick={() => setCurrentApp('ga4')} 
          className="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 p-8 cursor-pointer border border-slate-100 hover:border-indigo-200 group relative overflow-hidden"
        >
          <div className="w-14 h-14 bg-indigo-500 text-white rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:rotate-6 transition-transform">
            <BarChart2 size={28} />
          </div>
          <h2 className="text-xl font-black text-slate-900 mb-3 tracking-tight">Google Analytics</h2>
          <p className="text-slate-500 leading-relaxed text-xs font-medium mb-6">
            Explorez les flux de trafic, les UTMs et mesurez les conversions e-commerce.
          </p>
          <div className="flex items-center text-indigo-600 font-bold text-[11px] uppercase tracking-wider">
            Démarrer la mission <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>

        {/* Google Ads */}
        <div 
          onClick={() => setCurrentApp('googleads')} 
          className="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 p-8 cursor-pointer border border-slate-100 hover:border-teal-200 group relative overflow-hidden"
        >
          <div className="w-14 h-14 bg-teal-500 text-white rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:rotate-6 transition-transform">
            <Search size={28} />
          </div>
          <h2 className="text-xl font-black text-slate-900 mb-3 tracking-tight">Google Ads</h2>
          <p className="text-slate-500 leading-relaxed text-xs font-medium mb-6">
            Configurez des Responsive Search Ads et analysez les enchères stratégiques.
          </p>
          <div className="flex items-center text-teal-600 font-bold text-[11px] uppercase tracking-wider">
            Démarrer la mission <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>

        {/* Reporting & Exercices */}
        <div 
          onClick={() => setCurrentApp('reporting')} 
          className="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 p-8 cursor-pointer border border-slate-100 hover:border-amber-200 group relative overflow-hidden"
        >
          <div className="w-14 h-14 bg-amber-500 text-white rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:rotate-6 transition-transform">
            <BarChart2 size={28} />
          </div>
          <h2 className="text-xl font-black text-slate-900 mb-3 tracking-tight">Reporting Lab</h2>
          <p className="text-slate-500 leading-relaxed text-xs font-medium mb-6">
            Le défi ultime : calculs de KPIs complexes et analyse multi-canaux avancée.
          </p>
          <div className="flex items-center text-amber-600 font-bold text-[11px] uppercase tracking-wider">
            Démarrer la mission <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </div>

      <footer className="mt-20 border-t border-slate-200 pt-8 w-full max-w-6xl px-4 flex flex-col md:flex-row justify-between items-center gap-4 border-dashed">
         <div className="flex items-center gap-2">
            <Compass size={20} className="text-slate-400" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Environnement de simulation EFP</span>
         </div>
         <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Module Media Buying & Data Analytics v1.2
         </div>
      </footer>
    </div>
  );
}
