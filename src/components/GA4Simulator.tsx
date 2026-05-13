import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Home, BarChart2, ChevronDown, Search, Calendar, ArrowLeft, ArrowRight, MessageSquare, Smartphone, Layout
} from 'lucide-react';

export default function GA4Simulator({ onExit }) {
  const [activeMenu, setActiveMenu] = useState('home'); 
  const [expandedMenus, setExpandedMenus] = useState({ acquisition: true, engagement: true });
  const [primaryDimension, setPrimaryDimension] = useState('channel');
  const [searchQuery, setSearchQuery] = useState('');
  const [conversionType, setConversionType] = useState('Purchase');
  
  const conversionTypes = [
    'Purchase', 'Click', 'Lead', 'Contact', 'Inscription Newsletter', 'Add to Cart'
  ];

  const toggleMenu = (menu) => setExpandedMenus(prev => ({ ...prev, [menu]: !prev[menu] }));

  const trafficData = [
    { id: 1, channel: 'Organic Search', medium: 'organic', source: 'google', sourceMedium: 'google / organic', campaign: '(organic)', users: 4520, sessions: 5100, engagedSessions: 3468, engagementRate: 68, avgDuration: '2m 14s', keyEvents: 45, revenue: 2150 },
    { id: 2, channel: 'Direct', medium: '(none)', source: '(direct)', sourceMedium: '(direct) / (none)', campaign: '(direct)', users: 2100, sessions: 2300, engagedSessions: 1035, engagementRate: 45, avgDuration: '1m 05s', keyEvents: 12, revenue: 540 },
    { id: 3, channel: 'Paid Social', medium: 'ad', source: 'facebook', sourceMedium: 'facebook / ad', campaign: 'lancement', users: 1250, sessions: 1450, engagedSessions: 754, engagementRate: 52, avgDuration: '1m 24s', keyEvents: 2, revenue: 45 },
    { id: 4, channel: 'Paid Social', medium: 'ad', source: 'facebook', sourceMedium: 'facebook / ad', campaign: 'retargeting', users: 320, sessions: 480, engagedSessions: 360, engagementRate: 75, avgDuration: '2m 10s', keyEvents: 15, revenue: 850 },
    { id: 5, channel: 'Email', medium: 'email', source: 'newsletter', sourceMedium: 'newsletter / email', campaign: 'promo_printemps', users: 850, sessions: 920, engagedSessions: 561, engagementRate: 61, avgDuration: '1m 45s', keyEvents: 28, revenue: 1420 },
    { id: 6, channel: 'Paid Search', medium: 'cpc', source: 'google', sourceMedium: 'google / cpc', campaign: 'mots_cles_marque', users: 640, sessions: 710, engagedSessions: 511, engagementRate: 72, avgDuration: '3m 05s', keyEvents: 35, revenue: 1850 },
  ];

  const filteredTrafficData = trafficData.filter(row => row[primaryDimension].toLowerCase().includes(searchQuery.toLowerCase()));

  const aggregatedTrafficData = Array.from(filteredTrafficData.reduce((acc, row) => {
    const key = row[primaryDimension];
    if (!acc.has(key)) acc.set(key, { id: key, [primaryDimension]: key, users: 0, sessions: 0, engagedSessions: 0, keyEvents: 0, revenue: 0, avgDuration: row.avgDuration, isMetaRow: false });
    const group = acc.get(key);
    group.users += row.users; group.sessions += row.sessions; group.engagedSessions += row.engagedSessions; group.keyEvents += row.keyEvents; group.revenue += row.revenue; group.isMetaRow = group.isMetaRow || row.sourceMedium === 'facebook / ad'; group.engagementRate = Math.round((group.engagedSessions / group.sessions) * 100);
    return acc;
  }, new Map()).values());

  const handleExport = () => {
    let text = "EXPORT GOOGLE ANALYTICS 4 - SIMULATION ETUDIANT\n";
    text += "================================================\n\n";
    text += `Dimension principale : ${primaryDimension}\n`;
    text += "------------------------------------------------\n";
    text += "SOURCE / SUPPORT | UTILISATEURS ACTIFS | SESSIONS | ÉVÈNEMENTS CLÉS | REVENUE\n";
    aggregatedTrafficData.forEach(row => {
      text += `${row[primaryDimension].padEnd(20)} | ${row.users.toString().padEnd(19)} | ${row.sessions.toString().padEnd(8)} | ${row.keyEvents.toString().padEnd(16)} | ${row.revenue}€\n`;
    });
    text += "\n================================================\n";
    text += "Généré via le Simulateur de Digital Marketing";

    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });

    const htmlContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'><title>Export GA4</title></head>
      <body style="font-family: 'Segoe UI', Arial, sans-serif; padding: 40px;">
        <h1 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">Export de Données Google Analytics 4</h1>
        <pre style="white-space: pre-wrap; font-size: 11pt; line-height: 1.5; color: #1e293b;">
${text}
        </pre>
      </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ga4_export_${new Date().toISOString().split('T')[0]}.doc`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const pagesData = [
    { id: 1, path: '/', title: 'Accueil | Boutique Marketing', views: 15420, users: 9680, viewsPerUser: 1.59, avgTime: '00:54', eventCount: 45200, keyEvents: 5, revenue: 0 },
    { id: 2, path: '/nos-formations', title: 'Toutes les formations', views: 8250, users: 4120, viewsPerUser: 2.00, avgTime: '01:25', eventCount: 22100, keyEvents: 12, revenue: 0 },
    { id: 3, path: '/formation-meta-ads', title: 'Formation Master Meta Ads', views: 4100, users: 1850, viewsPerUser: 2.21, avgTime: '02:45', eventCount: 15400, keyEvents: 8, revenue: 0 },
    { id: 4, path: '/panier', title: 'Votre panier', views: 1250, users: 850, viewsPerUser: 1.47, avgTime: '01:10', eventCount: 4200, keyEvents: 2, revenue: 0 },
    { id: 5, path: '/checkout', title: 'Paiement sécurisé', views: 850, users: 620, viewsPerUser: 1.37, avgTime: '02:15', eventCount: 3100, keyEvents: 0, revenue: 0 },
    { id: 6, path: '/confirmation', title: 'Merci pour votre commande', views: 137, users: 135, viewsPerUser: 1.01, avgTime: '00:30', eventCount: 540, keyEvents: 137, revenue: 6850 },
  ];

  const homeStats = { users: "12 k", sessions: "15,2 k", avgSessionTime: "2 m 35 s", avgEngagementTime: "1 m 24 s", events: { 'Purchase': "137", 'Lead': "452", 'Add to cart': "850" } };

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-800 overflow-hidden w-full">
      {/* Rail Nav (Technical Style) */}
      <aside className="w-16 bg-slate-900 flex flex-col items-center shrink-0 z-20">
        <div className="h-16 flex items-center justify-center border-b border-slate-800 w-full mb-4">
           <button onClick={onExit} className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors shadow-inner" title="Retour au portail"><ArrowLeft size={20} /></button>
        </div>
        <nav className="flex flex-col w-full px-2 gap-2">
          <GA4NavItem icon={<Home size={20} />} isActive={activeMenu === 'home'} onClick={() => setActiveMenu('home')} />
          <GA4NavItem icon={<BarChart2 size={20} />} isActive={activeMenu.startsWith('acq') || activeMenu.startsWith('eng')} onClick={() => setActiveMenu('acq-overview')} />
        </nav>
      </aside>

      {/* Report Tree Nav */}
      {activeMenu !== 'home' && (
        <aside className="w-64 bg-white border-r border-slate-200 flex flex-col shrink-0 hidden md:flex shadow-sm">
          <div className="p-6 border-b border-slate-50"><h2 className="font-bold text-slate-900 tracking-tight">Navigation des rapports</h2></div>
          <div className="p-4 space-y-4 overflow-y-auto">
            <div className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Cycle de vie</div>
            <div className="space-y-1">
              <button onClick={() => toggleMenu('acquisition')} className="w-full flex justify-between items-center px-4 py-2.5 text-sm rounded-xl hover:bg-slate-50 font-bold text-slate-700 transition-colors">
                Acquisition <ChevronDown size={14} className={`transition-transform duration-200 ${expandedMenus.acquisition ? '' : '-rotate-90'}`}/>
              </button>
              {expandedMenus.acquisition && (
                <div className="ml-4 pl-3 border-l-2 border-slate-100 space-y-1 mt-1">
                  <button onClick={() => setActiveMenu('acq-overview')} className={`w-full text-left px-4 py-2 text-xs rounded-lg transition-all ${activeMenu === 'acq-overview' ? 'text-blue-700 bg-blue-50 font-bold' : 'text-slate-500 hover:bg-slate-50 font-medium'}`}>Vue d'ensemble</button>
                  <button onClick={() => setActiveMenu('acq-traffic')} className={`w-full text-left px-4 py-2 text-xs rounded-lg transition-all ${activeMenu === 'acq-traffic' ? 'text-blue-700 bg-blue-50 font-bold' : 'text-slate-500 hover:bg-slate-50 font-medium'}`}>Acquisition de trafic</button>
                </div>
              )}
            </div>
            <div className="space-y-1">
              <button onClick={() => toggleMenu('engagement')} className="w-full flex justify-between items-center px-4 py-2.5 text-sm rounded-xl hover:bg-slate-50 font-bold text-slate-700 transition-colors">
                Engagement <ChevronDown size={14} className={`transition-transform duration-200 ${expandedMenus.engagement ? '' : '-rotate-90'}`}/>
              </button>
              {expandedMenus.engagement && (
                <div className="ml-4 pl-3 border-l-2 border-slate-100 space-y-1 mt-1">
                  <button onClick={() => setActiveMenu('eng-overview')} className={`w-full text-left px-4 py-2 text-xs rounded-lg transition-all ${activeMenu === 'eng-overview' ? 'text-blue-700 bg-blue-50 font-bold' : 'text-slate-500 hover:bg-slate-50 font-medium'}`}>Vue d'ensemble</button>
                  <button onClick={() => setActiveMenu('eng-pages')} className={`w-full text-left px-4 py-2 text-xs rounded-lg transition-all ${activeMenu === 'eng-pages' ? 'text-blue-700 bg-blue-50 font-bold' : 'text-slate-500 hover:bg-slate-50 font-medium'}`}>Pages et écrans</button>
                </div>
              )}
            </div>
          </div>
        </aside>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden bg-slate-50">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 shadow-sm z-10">
          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-900 tracking-tight">Analytique de la Boutique (GA4)</span>
            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-[10px] font-bold uppercase tracking-widest">Temps réel</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 bg-white hover:bg-slate-50 shadow-sm transition-colors">
              <Calendar size={14} className="text-slate-400" /> 1 mars - 31 mars 2024
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8 relative">
          {activeMenu === 'home' && (
            <div className="max-w-6xl mx-auto space-y-8 pb-16">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Accueil</h1>
                <button className="text-xs font-bold text-blue-600 hover:underline">Partager le rapport</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { label: 'Utilisateurs actifs', value: homeStats.users, trend: '+12%', isPositive: true },
                  { label: 'Sessions', value: homeStats.sessions, trend: '+8.4%', isPositive: true },
                  { label: 'Durée moy. session', value: homeStats.avgSessionTime, trend: '+10 s', isPositive: true },
                  { label: 'Évènements clés', value: homeStats.events['Purchase'], trend: '+45%', isPositive: true }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
                      <span className={`text-[10px] font-bold ${stat.isPositive ? 'text-green-500' : 'text-red-500'}`}>{stat.trend}</span>
                    </div>
                    <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                    <div className="mt-4 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                       <div className={`h-full ${stat.isPositive ? 'bg-green-500' : 'bg-blue-500'} rounded-full`} style={{width: `${40 + (i*15)}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="font-bold text-slate-900 tracking-tight">Utilisateurs au cours des 30 derniers jours</h3>
                  <select value={conversionType} onChange={(e) => setConversionType(e.target.value)} className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-1.5 text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm cursor-pointer">
                    {conversionTypes.map(ct => <option key={ct} value={ct}>Aperçu : {ct}</option>)}
                  </select>
                </div>
                
                <div className="h-64 w-full flex items-end justify-between gap-1 border-b border-slate-100 pb-1 relative">
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-1">
                     <div className="border-t border-slate-50 w-full"></div>
                     <div className="border-t border-slate-50 w-full"></div>
                     <div className="border-t border-slate-50 w-full"></div>
                  </div>
                  {[3,5,4,7,6,8,5,12,11,10,14,12,16,22,18,17,20,25,28,26,30,28,35].map((h, i) => (
                     <div key={i} className="w-full bg-blue-500 rounded-t-lg hover:bg-blue-600 transition-all cursor-pointer relative group z-10" style={{height: `${h*2.5}%`}}>
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">Jour {i+1} : {h*100} users</div>
                     </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <span className="text-[10px] font-bold text-slate-400">1 MARS</span>
                  <span className="text-[10px] font-bold text-slate-400">31 MARS</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col">
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">Utilisateurs par Appareil</h3>
                    <div className="flex-1 flex flex-col justify-center space-y-8">
                       {[
                         { label: 'Mobile', value: '62%', color: 'bg-blue-500', icon: <Smartphone size={14}/> },
                         { label: 'Desktop', value: '31%', color: 'bg-slate-800', icon: <Layout size={14}/> },
                         { label: 'Tablette', value: '7%', color: 'bg-slate-300', icon: <Smartphone size={14} className="rotate-90"/> }
                       ].map((device, idx) => (
                         <div key={idx} className="space-y-3">
                           <div className="flex justify-between items-center text-xs">
                              <div className="flex items-center gap-2 font-bold text-slate-700">
                                <span className={device.color + " p-1.5 rounded-lg text-white"}>{device.icon}</span>
                                {device.label}
                              </div>
                              <span className="font-black text-slate-900">{device.value}</span>
                           </div>
                           <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden shadow-inner">
                              <div className={`h-full ${device.color} rounded-full`} style={{width: device.value}}></div>
                           </div>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="bg-slate-900 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden h-full">
                    <div className="relative z-10 flex flex-col h-full">
                       <h2 className="text-xl font-black tracking-tight mb-6 uppercase flex items-center gap-2">
                         <BarChart2 size={20} className="text-blue-400" />
                         Lexique GA4
                       </h2>
                       <div className="space-y-6 flex-1">
                          <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                             <div className="text-blue-400 font-black text-[10px] uppercase tracking-widest mb-2">Utilisateurs actifs</div>
                             <p className="text-[11px] text-slate-400 leading-relaxed">Dans GA4, un utilisateur est "actif" s'il a une session engagée ou si c'est sa première visite. C'est la métrique d'audience réelle.</p>
                          </div>
                          <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                             <div className="text-teal-400 font-black text-[10px] uppercase tracking-widest mb-2">Évènements clés (Key Events)</div>
                             <p className="text-[11px] text-slate-400 leading-relaxed">Nouveau nom des "Conversions" dans GA4. Ce sont les actions stratégiques (achat, lead) que vous identifiez comme succès.</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          )}

          {activeMenu === 'acq-overview' && (
            <div className="max-w-7xl mx-auto space-y-8 pb-16">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Vue d'ensemble de l'acquisition</h1>
              <div className="bg-white p-6 rounded-2xl border border-blue-200 shadow-sm border-l-8 border-l-blue-600">
                <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2 flex items-center gap-2"><ArrowRight size={12}/> Comprendre le Chemin de conversion</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Il est rare qu'un utilisateur achète dès sa première visite. 
                  Regardez comment le <strong>Trafic Organique</strong> travaille souvent avec le <strong>Paid Search</strong> pour finaliser une vente. 
                  C'est ce qu'on appelle "l'attribution".
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">Répartition par Groupe de canaux</h3>
                  <div className="flex-1 flex items-center justify-center gap-12">
                     <div className="w-48 h-48 rounded-full border-[16px] border-slate-50 relative shrink-0 shadow-inner flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border-[16px] border-blue-500" style={{clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)'}}></div>
                        <div className="absolute inset-0 rounded-full border-[16px] border-indigo-500" style={{clipPath: 'polygon(0 0, 50% 0, 50% 50%, 0 50%)'}}></div>
                        <div className="absolute inset-0 rounded-full border-[16px] border-teal-500" style={{clipPath: 'polygon(0 50%, 50% 50%, 50% 100%, 0 100%)'}}></div>
                        <div className="text-center">
                           <div className="text-2xl font-bold text-slate-900">12k</div>
                           <div className="text-[10px] font-bold text-slate-400">TOTAL</div>
                        </div>
                     </div>
                     <div className="flex-1 space-y-4">
                       {[
                         { label: 'Organic Search', val: '5k', color: 'bg-blue-500' },
                         { label: 'Direct', val: '3k', color: 'bg-indigo-500' },
                         { label: 'Paid Social', val: '2.5k', color: 'bg-teal-500' },
                         { label: 'Email', val: '1.5k', color: 'bg-slate-300' }
                       ].map((item, i) => (
                         <div key={i} className="flex items-center justify-between group">
                           <div className="flex items-center gap-3">
                             <div className={`w-3 h-3 rounded-full ${item.color} shadow-sm transition-transform group-hover:scale-125`}></div>
                             <span className="text-sm font-medium text-slate-600">{item.label}</span>
                           </div>
                           <span className="text-sm font-bold text-slate-900">{item.val}</span>
                         </div>
                       ))}
                     </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">Sessions par Source / Support</h3>
                  <div className="space-y-6">
                    {[
                      { l: 'google / organic', p: 70, c: 'bg-blue-500' },
                      { l: 'facebook / ad', p: 35, c: 'bg-teal-500', bold: true },
                      { l: '(direct) / (none)', p: 25, c: 'bg-indigo-500' },
                      { l: 'newsletter / email', p: 15, c: 'bg-slate-300' }
                    ].map((row, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                           <span className={`font-bold ${row.bold ? 'text-teal-700' : 'text-slate-600'}`}>{row.l}</span>
                           <span className="text-slate-400 font-bold">{row.p}%</span>
                        </div>
                        <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden shadow-inner">
                           <div className={`h-full ${row.c} rounded-full transition-all duration-1000 ease-out`} style={{width: `${row.p}%`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMenu === 'acq-traffic' && (
            <div className="mx-auto space-y-8 pb-16">
              {/* Marketing Insight Panel */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 rounded-xl"><BarChart2 size={24}/></div>
                  <div>
                    <h3 className="font-bold flex items-center gap-2">Conseil pédagogique : Analysez la rentabilité</h3>
                    <p className="text-sm text-blue-50/80 mt-1 max-w-3xl font-medium tracking-tight">
                      Comparez les <strong>Conversions</strong> et le <strong>Revenu</strong> entre <code className="bg-white/10 px-1 rounded">facebook / ad</code> et <code className="bg-white/10 px-1 rounded">google / cpc</code>. 
                      Le <strong>Taux d'engagement</strong> vous indique si la qualité de l'audience envoyée par vos publicités est bonne.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                 <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Rapport d'acquisition de trafic</h1>
                 <button onClick={handleExport} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold shadow-md hover:bg-blue-700 transition-colors">Exporter les données (.txt)</button>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="relative group w-full md:w-80">
                    <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-blue-500 transition-colors" />
                    <input type="text" placeholder="Rechercher une dimension..." onChange={e => setSearchQuery(e.target.value)} className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium" />
                  </div>
                  
                  <div className="flex items-center gap-6 bg-slate-50 p-2 rounded-xl border border-slate-200 shadow-inner">
                    <div className="flex items-center gap-3 border-r border-slate-200 pr-6 pl-2">
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Événement de conversion :</span>
                       <select value={conversionType} onChange={(e) => setConversionType(e.target.value)} className="bg-white border border-blue-200 text-blue-700 rounded-lg px-3 py-1.5 text-xs font-black outline-none shadow-sm cursor-pointer hover:bg-blue-50 transition-colors">
                         {conversionTypes.map(ct => <option key={ct} value={ct}>{ct}</option>)}
                       </select>
                    </div>
                    <div className="flex items-center gap-3">
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Dimension :</span>
                       <select value={primaryDimension} onChange={(e) => setPrimaryDimension(e.target.value)} className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-700 outline-none shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">
                         <option value="channel">Canal par défaut</option>
                         <option value="sourceMedium">Source / Support</option>
                         <option value="campaign">Campagne</option>
                       </select>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left whitespace-nowrap">
                    <thead className="bg-slate-50 text-[10px] uppercase font-bold text-slate-400 border-b border-slate-100 tracking-widest">
                      <tr>
                        <th className="px-6 py-4 sticky left-0 bg-slate-50 border-r border-slate-100 z-10 w-96">Dimension d'acquisition</th>
                        <th className="px-6 py-4 text-right text-blue-600">Événements clés ({conversionType})</th>
                        <th className="px-6 py-4 text-right">Sessions</th>
                        <th className="px-6 py-4 text-right">Taux d'engagement</th>
                        <th className="px-6 py-4 text-right">Durée d'engagement moy.</th>
                        <th className="px-6 py-4 text-right font-bold text-slate-900">Revenus</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 text-xs font-medium text-slate-600">
                      {aggregatedTrafficData.map((row, i) => (
                        <tr key={i} className={`hover:bg-slate-50 transition-colors ${row.isMetaRow ? 'bg-blue-50/20' : ''}`}>
                          <td className={`px-6 py-4 sticky left-0 border-r border-slate-100 flex items-center gap-3 ${row.isMetaRow ? 'bg-blue-50/80 font-bold text-blue-800' : 'bg-white'}`}>
                            {row[primaryDimension]}
                            {row.isMetaRow && <span className="px-1.5 py-0.5 bg-blue-600 text-white text-[8px] rounded font-bold uppercase tracking-widest shadow-sm">Paid Ads</span>}
                          </td>
                          <td className="px-6 py-4 text-right text-blue-600 font-bold cursor-pointer hover:underline">{row.keyEvents}</td>
                          <td className="px-6 py-4 text-right">{row.sessions.toLocaleString('fr-FR')}</td>
                          <td className="px-6 py-4 text-right">
                             <div className="flex items-center justify-end gap-2 px-2 py-1 bg-slate-50 rounded-lg w-max ml-auto shadow-inner border border-slate-100">
                                <div className={`w-1.5 h-1.5 rounded-full ${row.engagementRate > 60 ? 'bg-green-500' : 'bg-amber-500'}`}></div>
                                <span>{row.engagementRate}%</span>
                             </div>
                          </td>
                          <td className="px-6 py-4 text-right italic text-slate-500">{row.avgDuration}</td>
                          <td className="px-6 py-4 text-right font-bold text-slate-900 tracking-tight">{row.revenue.toLocaleString('fr-FR')} €</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeMenu === 'eng-overview' && (
            <div className="max-w-7xl mx-auto space-y-8 pb-16">
              {/* Educational Insight */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white shadow-xl">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-2xl"><MessageSquare size={24}/></div>
                    <h2 className="text-xl font-bold">Comprendre l'Engagement (GA4)</h2>
                 </div>
                 <p className="text-sm text-indigo-100 leading-relaxed font-medium">
                    L'engagement ne se limite pas aux clics. Dans GA4, nous suivons les <strong>événements</strong>. 
                    Un événement comme <code className="bg-black/20 px-1 rounded">add_to_cart</code> est un signal fort d'intention d'achat. 
                    Si vos vues sont hautes mais vos événements bas, votre contenu est peut-être attirant mais pas assez incitatif (Call to Action faible).
                 </p>
              </div>

              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Vue d'ensemble de l'engagement</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { label: 'Vues', value: '30,2 k', trend: '+15%', color: 'text-blue-600' },
                  { label: 'Nombre d\'événements', value: '110,5 k', trend: '+8%', color: 'text-indigo-600' },
                  { label: 'Évènements clés', value: '645', trend: '+22%', color: 'text-teal-600' }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
                    <div className="flex items-end justify-between mt-4">
                      <div className={`text-3xl font-black ${stat.color}`}>{stat.value}</div>
                      <div className="text-xs font-bold text-green-500 whitespace-nowrap mb-1">{stat.trend}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                   <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">Nombre d'événements par Nom d'événement</h3>
                   <div className="space-y-6">
                     {[
                       { n: 'page_view', v: '30,2 k', p: 100 },
                       { n: 'session_start', v: '15,2 k', p: 50 },
                       { n: 'user_engagement', v: '12,8 k', p: 42 },
                       { n: 'first_visit', v: '9,6 k', p: 32 },
                       { n: 'view_item', v: '8,2 k', p: 27 },
                       { n: 'add_to_cart', v: '850', p: 3 },
                       { n: 'purchase', v: '137', p: 1 }
                     ].map((ev, i) => (
                       <div key={i} className="space-y-2">
                         <div className="flex justify-between text-xs font-bold">
                            <span className="text-slate-700">{ev.n}</span>
                            <span className="text-slate-400">{ev.v}</span>
                         </div>
                         <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full transition-all duration-1000" style={{width: `${ev.p}%`}}></div>
                         </div>
                       </div>
                     ))}
                   </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
                   <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">Vues par Titre de page</h3>
                   <div className="flex-1 space-y-6">
                      {pagesData.slice(0, 5).map((page, i) => (
                        <div key={i} className="flex items-center justify-between group cursor-pointer">
                           <div className="min-w-0 pr-4">
                              <div className="text-sm font-bold text-slate-900 truncate group-hover:text-blue-600 transition-colors">{page.title}</div>
                              <div className="text-[10px] font-bold text-slate-400 truncate">{page.path}</div>
                           </div>
                           <span className="text-sm font-black text-slate-700 shrink-0">{page.views.toLocaleString('fr-FR')}</span>
                        </div>
                      ))}
                      <button onClick={() => setActiveMenu('eng-pages')} className="w-full py-3 mt-4 border-2 border-dashed border-slate-100 rounded-xl text-[10px] font-black text-slate-400 uppercase tracking-widest hover:border-blue-200 hover:text-blue-600 transition-all">
                        Voir toutes les pages
                      </button>
                   </div>
                </div>
              </div>
            </div>
          )}

          {activeMenu === 'eng-pages' && (
            <div className="mx-auto space-y-8 pb-16">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Classe de l'écran et chemin de la page</h1>
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                <div className="p-6 border-b border-slate-100 bg-white">
                  <div className="relative w-full md:w-96">
                    <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="text" placeholder="Filtrer par chemin (ex: /shop)..." className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 font-medium shadow-inner" />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left whitespace-nowrap">
                    <thead className="bg-slate-50 text-[10px] uppercase font-bold text-slate-400 border-b border-slate-100 tracking-widest">
                      <tr>
                        <th className="px-6 py-4 sticky left-0 bg-slate-50 border-r border-slate-100 z-10">Pages de destination</th>
                        <th className="px-6 py-4 text-right">Vues</th>
                        <th className="px-6 py-4 text-right">Utilisateurs actifs</th>
                        <th className="px-6 py-4 text-right">Événements</th>
                        <th className="px-6 py-4 text-right font-bold text-slate-900">Événements clés ({conversionType})</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 text-xs font-medium text-slate-600">
                      {pagesData.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 sticky left-0 border-r border-slate-100 bg-white group">
                            <div className="font-bold text-blue-700 cursor-pointer hover:underline truncate w-96 transition-colors">{row.path}</div>
                            <div className="text-[10px] text-slate-400 font-bold mt-1 truncate w-96 uppercase tracking-tight">{row.title}</div>
                          </td>
                          <td className="px-6 py-4 text-right font-bold text-slate-900">{row.views.toLocaleString('fr-FR')}</td>
                          <td className="px-6 py-4 text-right">{row.users.toLocaleString('fr-FR')}</td>
                          <td className="px-6 py-4 text-right">{row.eventCount.toLocaleString('fr-FR')}</td>
                          <td className="px-6 py-4 text-right font-bold text-blue-600">{row.keyEvents}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function GA4NavItem({ icon, isActive, onClick }) {
  return (
    <div onClick={onClick} className={`p-3 rounded-xl cursor-pointer flex items-center justify-center transition-all ${isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-slate-500 hover:bg-slate-800'}`}>
      {icon}
    </div>
  );
}
