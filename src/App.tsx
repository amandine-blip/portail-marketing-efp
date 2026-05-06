/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Layout, BarChart2, Search, ArrowRight, Compass
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-8 font-sans overflow-y-auto">
      <div className="max-w-4xl w-full text-center mb-16 px-4">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-blue-200">
           Bêta de formation
        </div>
        <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
          Portail de Formation <span className="text-blue-600">Marketing</span>
        </h1>
        <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          Sélectionnez un environnement pour démarrer une simulation interactive. Pratiquez sur des interfaces réelles en toute sécurité.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full px-4">
        {/* Meta Ads */}
        <div 
          onClick={() => setCurrentApp('meta')} 
          className="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 p-10 cursor-pointer border border-slate-100 hover:border-blue-200 group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 opacity-50"></div>
          <div className="w-16 h-16 bg-blue-500 text-white rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:rotate-6 transition-transform">
            <Layout size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Meta Ads Manager</h2>
          <p className="text-slate-500 leading-relaxed text-sm font-medium mb-8">
            Simulateur complet : création de campagnes, audiences, placements et prévisualisation des annonces (Dark Posts).
          </p>
          <div className="flex items-center text-blue-600 font-bold text-sm">
            Démarrer <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
        
        {/* GA4 */}
        <div 
          onClick={() => setCurrentApp('ga4')} 
          className="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 p-10 cursor-pointer border border-slate-100 hover:border-indigo-200 group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 opacity-50"></div>
          <div className="w-16 h-16 bg-indigo-500 text-white rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:rotate-6 transition-transform">
            <BarChart2 size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Analytics GA4</h2>
          <p className="text-slate-500 leading-relaxed text-sm font-medium mb-8">
            Analyse de l'acquisition, rapports de trafic UTM, pages consultées et mesures des conversions e-commerce.
          </p>
          <div className="flex items-center text-indigo-600 font-bold text-sm">
            Analyser <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>

        {/* Google Ads */}
        <div 
          onClick={() => setCurrentApp('googleads')} 
          className="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 p-10 cursor-pointer border border-slate-100 hover:border-teal-200 group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 opacity-50"></div>
          <div className="w-16 h-16 bg-teal-500 text-white rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:rotate-6 transition-transform">
            <Search size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Google Ads</h2>
          <p className="text-slate-500 leading-relaxed text-sm font-medium mb-8">
            Création de RSA (Responsive Search Ads), définition des enchères, budgets et mots-clés stratégiques.
          </p>
          <div className="flex items-center text-teal-600 font-bold text-sm">
            Configurer <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>

        {/* Reporting & Exercices */}
        <div 
          onClick={() => setCurrentApp('reporting')} 
          className="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 p-10 cursor-pointer border border-slate-100 hover:border-amber-200 group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500 opacity-50"></div>
          <div className="w-16 h-16 bg-amber-500 text-white rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:rotate-6 transition-transform">
            <BarChart2 size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Reporting Lab</h2>
          <p className="text-slate-500 leading-relaxed text-sm font-medium mb-8">
            Exercices de calcul de KPIs (CPC, Taux d'engagement), analyse de l'effet de halo et décodage d'UTMs avancés.
          </p>
          <div className="flex items-center text-amber-600 font-bold text-sm">
            Pratiquer <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
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
