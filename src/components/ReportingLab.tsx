import React, { useState, useMemo } from 'react';
import { 
  BarChart3, Calculator, Link, ExternalLink, MousePointer2, ArrowLeft, Globe, 
  Layout, Users, Megaphone, Folder, BarChart2, Bell, Search, Filter, 
  MoreHorizontal, Download, Share2, HelpCircle, ChevronDown, Check, ShoppingCart,
  TrendingUp, DollarSign
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell
} from 'recharts';

export default function ReportingLab({ onExit }) {
  // Sample campaigns data
  const [campaigns] = useState([
    {
      id: '1',
      name: 'Conversion - Collection Été 2024',
      objective: 'Ventes',
      status: 'ACTIVE',
      delivery: 'active',
      budget: '50,00 €',
      budgetType: 'DAILY',
      amountSpent: '1 450,50 €',
      impressions: '125 000',
      reach: '84 200',
      frequency: '1,48',
      results: '1 250',
      postReactions: '34',
      postComments: '12',
      postShares: '5',
      postSaves: '22',
      landingPageViews: '850',
      linkClicks: '1 250',
      purchases: '42',
      purchaseValue: '2 850,00 €',
      addToCart: '185',
      trafficGoogle: '210'
    },
    {
      id: '2',
      name: 'Retargeting - Panier Abandonné',
      objective: 'Ventes',
      status: 'ACTIVE',
      delivery: 'active',
      budget: '15,00 €',
      budgetType: 'DAILY',
      amountSpent: '320,00 €',
      impressions: '12 000',
      reach: '5 400',
      frequency: '2,22',
      results: '450',
      postReactions: '15',
      postComments: '4',
      postShares: '1',
      postSaves: '12',
      landingPageViews: '420',
      linkClicks: '450',
      purchases: '65',
      purchaseValue: '4 225,00 €',
      addToCart: '110',
      trafficGoogle: '45'
    },
    {
      id: '3',
      name: 'Notoriété - Branding Vidéo',
      objective: 'Notoriété',
      status: 'PAUSED',
      delivery: 'inactive',
      budget: '100,00 €',
      budgetType: 'LIFETIME',
      amountSpent: '2 500,00 €',
      impressions: '850 000',
      reach: '620 000',
      frequency: '1,37',
      results: '425 000',
      postReactions: '38',
      postComments: '14',
      postShares: '8',
      postSaves: '25',
      landingPageViews: '450',
      linkClicks: '1 100',
      purchases: '0',
      purchaseValue: '0,00 €',
      addToCart: '5',
      trafficGoogle: '1 200'
    },
    {
      id: '4',
      name: 'Trafic - Blog Expert Articles',
      objective: 'Trafic',
      status: 'ACTIVE',
      delivery: 'active',
      budget: '20,00 €',
      budgetType: 'DAILY',
      amountSpent: '450,00 €',
      impressions: '85 000',
      reach: '72 000',
      frequency: '1,18',
      results: '800',
      postReactions: '12',
      postComments: '3',
      postShares: '4',
      postSaves: '18',
      landingPageViews: '350',
      linkClicks: '800',
      purchases: '0',
      purchaseValue: '0,00 €',
      addToCart: '0',
      trafficGoogle: '120'
    },
    {
      id: '5',
      name: 'Sales - Flash Sale Carousel',
      objective: 'Ventes',
      status: 'ACTIVE',
      delivery: 'active',
      budget: '40,00 €',
      budgetType: 'DAILY',
      amountSpent: '120,50 €',
      impressions: '5 400',
      reach: '3 200',
      frequency: '1,68',
      results: '240',
      postReactions: '28',
      postComments: '6',
      postShares: '2',
      postSaves: '14',
      landingPageViews: '235',
      linkClicks: '240',
      purchases: '12',
      purchaseValue: '840,00 €',
      addToCart: '45',
      trafficGoogle: '12'
    },
    {
       id: '6',
       name: 'Interaction - Jeu Concours Noel',
       objective: 'Interactions',
       status: 'ACTIVE',
       delivery: 'active',
       budget: '25,00 €',
       budgetType: 'DAILY',
       amountSpent: '500,00 €',
       impressions: '45 000',
       reach: '38 000',
       frequency: '1,18',
       results: '3 200',
       postReactions: '34',
       postComments: '28',
       postShares: '12',
       postSaves: '42',
       landingPageViews: '150',
       linkClicks: '3 200',
       purchases: '0',
       purchaseValue: '0,00 €',
       addToCart: '2',
       trafficGoogle: '850'
    }
  ]);

  const [activeExercise, setActiveExercise] = useState(0);
  const [activeTab, setActiveTab] = useState('campaigns');
  const [ga4SubTab, setGa4SubTab] = useState('home');
  const [ga4Dimension, setGa4Dimension] = useState('channel');
  const [userAnswers, setUserAnswers] = useState({ cpc: '', er: '' });
  const [ga4Answers, setGa4Answers] = useState({ bestChannel: '', engagementAnalysis: '' });
  const [showCorrection, setShowCorrection] = useState(false);
  
  // GA4 Sample Data
  const ga4Data = {
    trafficChannels: [
      { channel: 'Organic Search', sessions: '12 450', sourceMedium: 'google / organic', campaign: '(not set)', engagementRate: '72,4%', avgDuration: '2m 15s', keyEvents: '142' },
      { channel: 'Organic Social', sessions: '3 820', sourceMedium: 'facebook.com / social', campaign: 'promotion_ete_2024', engagementRate: '65,1%', avgDuration: '1m 42s', keyEvents: '38' },
      { channel: 'Referral', sessions: '125', sourceMedium: 'blog-partner.be / referral', campaign: 'guest_post', engagementRate: '45,0%', avgDuration: '0m 45s', keyEvents: '2' },
      { channel: 'Direct', sessions: '5 100', sourceMedium: '(direct) / (none)', campaign: '(not set)', engagementRate: '78,9%', avgDuration: '3m 05s', keyEvents: '85' },
    ],
    pagesEngagement: [
      { page: '/home', views: '25 000', avgEngagementTime: '48s', keyEvents: '450' },
      { page: '/produits-ete', views: '18 200', avgEngagementTime: '1m 12s', keyEvents: '820' },
      { page: '/checkout', views: '1 450', avgEngagementTime: '2m 45s', keyEvents: '125' },
    ]
  };

  const handleDownloadReport = () => {
    const reportText = `Rapport d'Analyse : Reporting & GA4 Lab\nDate : ${new Date().toLocaleString()}\n...`;
    const blob = new Blob([reportText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Resultats_Lab.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const selectedCampaign = campaigns[activeExercise];
  const parseNum = (str) => parseFloat(str.replace(',', '.').replace(/ /g, '').replace('€', '')) || 0;

  const spend = parseNum(selectedCampaign.amountSpent);
  const reach = parseNum(selectedCampaign.reach);
  const clicks = parseNum(selectedCampaign.linkClicks);
  const reactions = parseNum(selectedCampaign.postReactions);
  const comments = parseNum(selectedCampaign.postComments);
  const shares = parseNum(selectedCampaign.postShares);
  const saves = parseNum(selectedCampaign.postSaves);
  
  const actualCpc = clicks > 0 ? spend / clicks : 0;
  const totalSocialInteractions = reactions + comments + shares + saves;
  const actualEngagementRate = reach > 0 ? (totalSocialInteractions / reach) * 100 : 0;

  const checkExercise = () => setShowCorrection(!showCorrection);

  const chartData = useMemo(() => {
    return campaigns.map(camp => {
      const spend = parseNum(camp.amountSpent);
      const revenue = parseNum(camp.purchaseValue);
      const roas = spend > 0 ? (revenue / spend) : 0;
      return {
        name: camp.name.length > 20 ? camp.name.substring(0, 17) + '...' : camp.name,
        fullName: camp.name,
        spend,
        revenue,
        roas: parseFloat(roas.toFixed(2))
      };
    });
  }, [campaigns]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 border border-slate-200 rounded-xl shadow-xl space-y-2">
          <p className="text-xs font-black text-slate-800 uppercase tracking-tight">{data.fullName}</p>
          <div className="space-y-1">
            <div className="flex items-center justify-between gap-8">
              <span className="text-[10px] font-bold text-slate-400">Dépenses:</span>
              <span className="text-xs font-black text-slate-700">{data.spend.toLocaleString('fr-FR')} €</span>
            </div>
            <div className="flex items-center justify-between gap-8">
              <span className="text-[10px] font-bold text-slate-400">Valeur d'achat:</span>
              <span className="text-xs font-black text-blue-600">{data.revenue.toLocaleString('fr-FR')} €</span>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-8">
              <span className="text-[10px] font-bold text-slate-400">ROAS:</span>
              <span className={`text-xs font-black ${data.roas >= 1 ? 'text-green-600' : 'text-red-500'}`}>{data.roas.toFixed(2)}</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex h-screen bg-[#f0f2f5] overflow-hidden font-sans text-[#1c1e21]">
      {/* Sidebar */}
      <aside className="w-16 bg-white border-r border-slate-200 flex flex-col items-center py-4 gap-6 shrink-0 z-40">
        <div onClick={onExit} className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition-colors">
          <ArrowLeft size={20} />
        </div>
        <nav className="flex flex-col gap-6 flex-1 items-center">
          <div className="p-2 text-slate-400 border-none bg-transparent rounded-xl"><Layout size={20} /></div>
          <div className="p-2 text-slate-400 border-none bg-transparent rounded-xl"><Megaphone size={20} /></div>
          <div className="p-2 bg-blue-50 text-blue-600 rounded-xl border border-blue-100"><BarChart2 size={20} /></div>
          <div className="p-2 text-slate-400 border-none bg-transparent rounded-xl"><Folder size={20} /></div>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-30">
          <div className="flex items-center gap-4">
            <h1 className="text-sm font-bold truncate tracking-tight">Meta Ads Laboratory : Reporting & GA4 Analysis</h1>
            <div className="h-4 w-px bg-slate-200"></div>
            <div className="flex items-center gap-1 text-[11px] font-bold text-slate-500">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span>Mode Entraînement Actif</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <button onClick={onExit} className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-md text-[12px] font-bold transition-colors">Quitter</button>
             <button onClick={handleDownloadReport} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-[12px] font-bold transition-colors">Télécharger Rapport</button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="max-w-[1600px] mx-auto p-6 space-y-6">
            
            {/* Header / Config Bar */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-10">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Compte</span>
                  <div className="flex items-center gap-2 text-blue-600">
                    <span className="text-xs font-black">Meta Ads Laboratory : Amandine V.</span>
                    <ChevronDown size={14} />
                  </div>
                </div>
                <div className="h-8 w-px bg-slate-100"></div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Période</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-700">30 derniers jours</span>
                    <MoreHorizontal size={14} className="text-slate-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
              <div className="xl:col-span-3 space-y-6">
                {/* Tabs */}
                <div className="flex border-b border-slate-200 bg-white rounded-t-xl px-4">
                  {[
                    { id: 'campaigns', label: 'Meta : Campagnes' },
                    { id: 'ga4', label: 'Google Analytics 4' }
                  ].map(tab => (
                    <button 
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-4 text-xs font-black uppercase tracking-wider transition-all border-b-2 ${activeTab === tab.id ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {activeTab === 'campaigns' && (
                  <div className="space-y-6">
                    {/* Performance Visualizer */}
                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-6">
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2">
                           <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                             <TrendingUp size={18} />
                           </div>
                           <h3 className="text-sm font-black uppercase text-slate-800">Visualisation Performance : Dépenses vs Revenus</h3>
                         </div>
                         <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                               <div className="w-3 h-3 rounded bg-slate-300"></div>
                               <span className="text-[10px] font-bold text-slate-500 uppercase">Dépenses</span>
                            </div>
                            <div className="flex items-center gap-2">
                               <div className="w-3 h-3 rounded bg-blue-600"></div>
                               <span className="text-[10px] font-bold text-slate-500 uppercase">Revenus</span>
                            </div>
                         </div>
                      </div>

                      <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis 
                              dataKey="name" 
                              axisLine={false} 
                              tickLine={false} 
                              tick={{ fontSize: 10, fill: '#64748b', fontWeight: 600 }}
                              dy={10}
                            />
                            <YAxis 
                              axisLine={false} 
                              tickLine={false} 
                              tick={{ fontSize: 10, fill: '#64748b', fontWeight: 600 }}
                              tickFormatter={(value) => `${value}€`}
                            />
                            <Tooltip content={CustomTooltip} cursor={{ fill: '#f8fafc' }} />
                            <Bar dataKey="spend" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={20} />
                            <Bar dataKey="revenue" fill="#2563eb" radius={[4, 4, 0, 0]} barSize={20}>
                              {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.revenue >= entry.spend ? '#2563eb' : '#94a3b8'} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                      {/* Campaign Info Section */}
                    <div className="p-6 bg-slate-50 border-b border-slate-200">
                      <div className="max-w-4xl space-y-6">
                        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">1</div>
                          <h3 className="text-sm font-black uppercase text-slate-800">Configuration Meta Ads</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Nom / Objectif</label>
                            <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1">
                               <p className="text-xs font-bold text-slate-900">{selectedCampaign.name}</p>
                               <div className="flex items-center gap-2">
                                 <span className="px-2 py-0.5 bg-blue-600 text-white text-[9px] font-black uppercase rounded">{selectedCampaign.objective}</span>
                               </div>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Budget actuel</label>
                            <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1">
                               <p className="text-xs font-black text-slate-900">{selectedCampaign.budget}</p>
                               <p className="text-[10px] text-slate-400 font-bold uppercase">{selectedCampaign.budgetType === 'DAILY' ? 'Quotidien' : 'Global'}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-[11px] border-collapse min-w-[1400px]">
                        <thead className="bg-[#f5f6f7] border-b border-slate-200 text-slate-500 font-bold uppercase tracking-tighter">
                          <tr>
                            <th className="px-4 py-3 border-r border-slate-200 min-w-[200px]">Campagne</th>
                            <th className="px-4 py-3 border-r border-slate-200 text-center">Diffusion</th>
                            <th className="px-4 py-3 border-r border-slate-200 text-right">Budget</th>
                            <th className="px-4 py-3 border-r border-slate-200 text-right">Résultats</th>
                            <th className="px-4 py-3 border-r border-slate-200 text-right">Portée</th>
                            <th className="px-4 py-3 border-r border-slate-200 text-right">Impressions</th>
                            <th className="px-4 py-3 border-r border-slate-200 text-right">Vues LP</th>
                            <th className="px-4 py-3 border-r border-slate-200 text-right">Clics (Lien)</th>
                            <th className="px-4 py-3 border-r border-slate-200 text-right">CTR (Lien)</th>
                            <th className="px-4 py-3 border-r border-slate-200 text-right">CPM</th>
                            <th className="px-4 py-3 border-r border-slate-200 text-right">Dépenses</th>
                            <th className="px-4 py-3 border-r border-slate-200 text-right">Achats</th>
                            <th className="px-4 py-3 border-r border-slate-200 text-right">ROAS</th>
                            <th className="px-4 py-3 border-r border-slate-200 text-right">Fréq.</th>
                            <th className="px-4 py-3 border-r border-slate-200 text-right">Réactions</th>
                            <th className="px-4 py-3 border-r border-slate-200 text-right">Comm.</th>
                            <th className="px-4 py-3 border-r border-slate-200 text-right">Partages</th>
                            <th className="px-4 py-3 text-right">Enreg.</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 italic font-medium">
                          {campaigns.map((camp, idx) => {
                            const spendVal = parseNum(camp.amountSpent);
                            const clicksVal = parseNum(camp.linkClicks);
                            const impsVal = parseNum(camp.impressions);
                            const purchaseVal = parseNum(camp.purchaseValue);
                            const isSelected = activeExercise === idx;

                            return (
                              <tr 
                                key={camp.id}
                                onClick={() => { setActiveExercise(idx); setShowCorrection(false); }}
                                className={`cursor-pointer transition-colors ${isSelected ? 'bg-blue-50/50' : 'hover:bg-slate-50'}`}
                              >
                                <td className="px-4 py-4 border-r border-slate-200 font-bold not-italic">
                                  <div className="flex items-center gap-2">
                                    <input type="checkbox" checked={isSelected} readOnly className="rounded border-slate-300" />
                                    <span className={isSelected ? 'text-blue-600' : 'text-slate-900'}>{camp.name}</span>
                                  </div>
                                </td>
                                <td className="px-4 py-4 border-r border-slate-200 text-center">
                                  <div className={`w-2 h-2 rounded-full mx-auto ${camp.delivery === 'active' ? 'bg-green-500' : 'bg-slate-300'}`}></div>
                                </td>
                                <td className="px-4 py-4 border-r border-slate-200 text-right">{camp.budget}</td>
                                <td className="px-4 py-4 border-r border-slate-200 text-right font-black not-italic">{camp.results}</td>
                                <td className="px-4 py-4 border-r border-slate-200 text-right text-slate-500">{camp.reach}</td>
                                <td className="px-4 py-4 border-r border-slate-200 text-right text-slate-500">{camp.impressions}</td>
                                <td className="px-4 py-4 border-r border-slate-200 text-right font-bold text-slate-600">{camp.landingPageViews}</td>
                                <td className="px-4 py-4 border-r border-slate-200 text-right text-blue-600 font-black not-italic">{camp.linkClicks}</td>
                                <td className="px-4 py-4 border-r border-slate-200 text-right">
                                  {impsVal > 0 ? ((clicksVal / impsVal) * 100).toFixed(2) : '0.00'}%
                                </td>
                                <td className="px-4 py-4 border-r border-slate-200 text-right text-slate-400">
                                  {impsVal > 0 ? ((spendVal / impsVal) * 1000).toFixed(2) : '0.00'}€
                                </td>
                                <td className="px-4 py-4 border-r border-slate-200 text-right font-black text-slate-900 not-italic">{camp.amountSpent}</td>
                                <td className="px-4 py-4 border-r border-slate-200 text-right font-bold text-slate-600">{camp.purchases}</td>
                                <td className="px-4 py-4 border-r border-slate-200 text-right">
                                  {spendVal > 0 ? <span className="font-black text-blue-600 not-italic">{(purchaseVal / spendVal).toFixed(2)}</span> : '-'}
                                </td>
                                <td className="px-4 py-4 border-r border-slate-200 text-right text-slate-500 font-bold">{camp.frequency}</td>
                                <td className="px-4 py-4 border-r border-slate-200 text-right text-slate-600 font-bold">{camp.postReactions}</td>
                                <td className="px-4 py-4 border-r border-slate-200 text-right text-slate-600 font-bold">{camp.postComments}</td>
                                <td className="px-4 py-4 border-r border-slate-200 text-right text-slate-600 font-bold">{camp.postShares}</td>
                                <td className="px-4 py-4 text-right text-slate-600 font-bold">{camp.postSaves}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                )}

                {activeTab === 'ga4' && (
                  <div className="space-y-6">
                    {/* GA4 Sub-Tabs */}
                    <div className="flex gap-4 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                      <button 
                        onClick={() => setGa4SubTab('home')}
                        className={`px-4 py-2 text-[11px] font-black uppercase tracking-widest rounded-lg transition-all ${ga4SubTab === 'home' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
                      >
                        Accueil
                      </button>
                      <button 
                        onClick={() => setGa4SubTab('acquisition')}
                        className={`px-4 py-2 text-[11px] font-black uppercase tracking-widest rounded-lg transition-all ${ga4SubTab === 'acquisition' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
                      >
                        Acquisition de trafic
                      </button>
                    </div>

                    {ga4SubTab === 'home' ? (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Real-time Card */}
                        <div className="md:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
                           <div className="flex items-center justify-between">
                             <div className="space-y-1">
                               <h3 className="text-sm font-black text-slate-800 uppercase tracking-tight">Temps Réel</h3>
                               <p className="text-[10px] text-slate-400 font-bold uppercase">Utilisateurs au cours des 30 dernières minutes</p>
                             </div>
                             <div className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 rounded-full border border-green-100">
                               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                               <span className="text-[11px] font-black italic">Live</span>
                             </div>
                           </div>
                           <div className="text-5xl font-black text-slate-900">42</div>
                           <div className="space-y-3">
                             <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Principaux pays</p>
                             <div className="space-y-2">
                               <div className="flex items-center justify-between text-xs">
                                 <span className="font-bold text-slate-700">France</span>
                                 <span className="font-black text-blue-600">65%</span>
                               </div>
                               <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                                 <div className="w-[65%] h-full bg-blue-600"></div>
                               </div>
                               <div className="flex items-center justify-between text-xs">
                                 <span className="font-bold text-slate-700">Belgique</span>
                                 <span className="font-black text-blue-600">22%</span>
                               </div>
                               <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                                 <div className="w-[22%] h-full bg-blue-600"></div>
                               </div>
                             </div>
                           </div>
                        </div>

                        {/* Quick Insights */}
                        <div className="space-y-6">
                          {[
                            { label: 'Utilisateurs', val: '21 042', change: '+12%', color: 'blue' },
                            { label: 'Nouveaux Utilisateurs', val: '18 450', change: '+8%', color: 'indigo' },
                            { label: 'Revenu Total', val: '7 890,00 €', change: '+15%', color: 'emerald' }
                          ].map((insight, i) => (
                            <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{insight.label}</p>
                               <div className="flex items-end justify-between">
                                 <span className="text-xl font-black text-slate-800">{insight.val}</span>
                                 <span className={`text-[10px] font-black text-${insight.color}-600 bg-${insight.color}-50 px-2 py-0.5 rounded`}>
                                   {insight.change}
                                 </span>
                               </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm p-6 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between">
                           <h3 className="text-sm font-black uppercase text-slate-800">Acquisition par Canal (GA4)</h3>
                           <div className="flex items-center gap-3">
                             <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg">
                               <Search size={14} className="text-slate-400" />
                               <input type="text" placeholder="Rechercher..." className="bg-transparent text-xs outline-none w-32 font-medium" />
                             </div>
                             <select 
                               className="text-[11px] font-bold border border-slate-200 rounded-lg px-3 py-1.5 outline-none bg-white cursor-pointer"
                               value={ga4Dimension}
                               onChange={(e) => setGa4Dimension(e.target.value)}
                             >
                               <option value="channel">Groupe de canaux</option>
                               <option value="sourceMedium">Source / Support</option>
                             </select>
                           </div>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-[11px] border-collapse min-w-[900px]">
                            <thead className="bg-[#f8fafc] text-slate-500 font-bold uppercase tracking-tighter border-y border-slate-100">
                              <tr>
                                <th className="p-4 border-r border-slate-100">Dimension</th>
                                <th className="p-4 border-r border-slate-100 text-right text-blue-600">Événements Clés</th>
                                <th className="p-4 border-r border-slate-100 text-right">Sessions</th>
                                <th className="p-4 border-r border-slate-100 text-right">Taux d'Engagement</th>
                                <th className="p-4 text-right">Durée Moyenne</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {ga4Data.trafficChannels.map((d, i) => (
                                <tr key={i} className="hover:bg-slate-50 transition-colors">
                                  <td className="p-4 font-black text-slate-700 border-r border-slate-100">{d[ga4Dimension]}</td>
                                  <td className="p-4 text-right font-black text-blue-600 border-r border-slate-100">{d.keyEvents}</td>
                                  <td className="p-4 text-right font-bold text-slate-600 border-r border-slate-100">{d.sessions}</td>
                                  <td className="p-4 text-right font-medium text-slate-500 border-r border-slate-100">{d.engagementRate}</td>
                                  <td className="p-4 text-right font-medium text-slate-500 italic">{d.avgDuration}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Sidebar Exercise */}
              <div className="xl:col-span-1 space-y-6">
                <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                       <Calculator size={18} className="text-amber-500"/> Challenge Analyste
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed italic">
                      "{selectedCampaign.name}"
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">CPC Moyen (€)</label>
                      <input 
                        type="text"
                        placeholder="Calculer le CPC..."
                        value={userAnswers.cpc}
                        onChange={(e) => setUserAnswers({...userAnswers, cpc: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm outline-none focus:border-blue-500"
                      />
                      {showCorrection && (
                        <div className="p-3 bg-green-50 border border-green-100 rounded-lg animate-in fade-in slide-in-from-top-1">
                          <p className="text-[9px] font-black text-green-600 tracking-widest uppercase">Solution :</p>
                          <p className="text-sm font-black text-green-700">{actualCpc.toFixed(2)} €</p>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Taux d'Engagement (%)</label>
                        <span className="text-[9px] text-slate-400 font-medium italic">(Somme interactions / Portée) × 100</span>
                      </div>
                      <input 
                        type="text"
                        placeholder="Calculer l'engagement..."
                        value={userAnswers.er}
                        onChange={(e) => setUserAnswers({...userAnswers, er: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm outline-none focus:border-blue-500 transition-all"
                      />
                      {showCorrection && (
                        <div className="p-3 bg-green-50 border border-green-100 rounded-lg animate-in fade-in slide-in-from-top-1">
                          <p className="text-[9px] font-black text-green-600 tracking-widest uppercase">Solution :</p>
                          <p className="text-sm font-black text-green-700">{actualEngagementRate.toFixed(3)} %</p>
                        </div>
                      )}
                    </div>

                    <button 
                      onClick={checkExercise}
                      className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95"
                    >
                      {showCorrection ? 'Masquer Correction' : 'Vérifier mes calculs'}
                    </button>
                    
                    <button 
                      onClick={() => {
                        setActiveExercise((p) => (p + 1) % campaigns.length);
                        setShowCorrection(false);
                        setUserAnswers({ cpc: '', er: '' });
                      }}
                      className="w-full py-2 text-slate-400 hover:text-slate-600 text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                    >
                      Suivant <ChevronDown size={14} className="-rotate-90" />
                    </button>
                  </div>
                </div>

                <div className="bg-[#1a212f] rounded-xl p-6 shadow-xl border border-slate-700 space-y-4">
                  <h5 className="text-[11px] font-black uppercase tracking-widest text-white border-b border-slate-700 pb-3 flex items-center gap-2">
                    <HelpCircle size={14} className="text-blue-400" /> Aide & Lexique
                  </h5>
                  <div className="space-y-4">
                     <div>
                       <p className="text-[11px] font-black text-blue-400 uppercase tracking-tight">Landing Page Views</p>
                       <p className="text-[10px] text-slate-400 leading-relaxed italic">"Le nombre de personnes ayant chargé votre site après avoir cliqué."</p>
                     </div>
                     <div>
                       <p className="text-[11px] font-black text-blue-400 uppercase tracking-tight">CTR (Lien)</p>
                       <p className="text-[10px] text-slate-400 leading-relaxed italic">"Intérêt suscité par la pub : Clics (liens) / Impressions."</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
