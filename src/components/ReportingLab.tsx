import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { 
  BarChart3, Calculator, Link, ExternalLink, MousePointer2, ArrowLeft, Globe, 
  Layout, Users, Megaphone, Folder, BarChart2, Bell, Search, Filter, 
  MoreHorizontal, Download, Share2, HelpCircle, ChevronDown, Check, ShoppingCart,
  TrendingUp, DollarSign, Laptop
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell
} from 'recharts';

export default function ReportingLab({ onExit }) {
  // Sample campaigns data
  const [campaigns] = useState([
    {
      id: '1',
      name: 'convers_retargeting_vidéo',
      objective: 'Ventes',
      status: 'ACTIVE',
      delivery: 'active',
      budget: '15,00 €',
      budgetType: 'DAILY',
      amountSpent: '111,38 €',
      impressions: '60 720',
      reach: '26 528',
      frequency: '2,29',
      results: '1 023',
      postReactions: '38',
      postComments: '12',
      postShares: '15',
      postSaves: '8',
      landingPageViews: '695',
      linkClicks: '770',
      purchases: '42',
      purchaseValue: '2 850,00 €',
      addToCart: '185',
      trafficGoogle: '3',
      instagramProfileVisits: '2'
    },
    {
      id: '2',
      name: 'convers_vidéo_cinéma',
      objective: 'Ventes',
      status: 'ACTIVE',
      delivery: 'active',
      budget: '10,00 €',
      budgetType: 'DAILY',
      amountSpent: '80,99 €',
      impressions: '41 867',
      reach: '11 756',
      frequency: '3,56',
      results: '318',
      postReactions: '33',
      postComments: '11',
      postShares: '17',
      postSaves: '9',
      landingPageViews: '251',
      linkClicks: '282',
      purchases: '65',
      purchaseValue: '4 225,00 €',
      addToCart: '110',
      trafficGoogle: '4',
      instagramProfileVisits: '6'
    },
    {
      id: '3',
      name: 'convers_vidéo_charles',
      objective: 'Ventes',
      status: 'PAUSED',
      delivery: 'inactive',
      budget: '5,00 €',
      budgetType: 'DAILY',
      amountSpent: '41,82 €',
      impressions: '15 087',
      reach: '9 383',
      frequency: '1,61',
      results: '249',
      postReactions: '4',
      postComments: '1',
      postShares: '0',
      postSaves: '1',
      landingPageViews: '131',
      linkClicks: '112',
      purchases: '0',
      purchaseValue: '0,00 €',
      addToCart: '5',
      trafficGoogle: '2',
      instagramProfileVisits: '0'
    },
    {
      id: '7',
      name: 'sales_saint-val_juin_26',
      objective: 'Ventes',
      status: 'ACTIVE',
      delivery: 'active',
      budget: '25,00 €',
      budgetType: 'DAILY',
      amountSpent: '125,40 €',
      impressions: '14 200',
      reach: '8 400',
      frequency: '1,69',
      results: '6',
      postReactions: '14',
      postComments: '2',
      postShares: '1',
      postSaves: '5',
      landingPageViews: '98',
      linkClicks: '120',
      purchases: '6',
      purchaseValue: '540,00 €',
      addToCart: '12',
      trafficGoogle: '8',
      instagramProfileVisits: '4'
    },
    {
      id: '8',
      name: 'Conver_retargetting_video_womeninwavre_mars_26',
      objective: 'Ventes',
      status: 'ACTIVE',
      delivery: 'active',
      budget: '10,00 €',
      budgetType: 'DAILY',
      amountSpent: '45,00 €',
      impressions: '12 500',
      reach: '1 250',
      frequency: '10,00',
      results: '85',
      postReactions: '42',
      postComments: '8',
      postShares: '3',
      postSaves: '12',
      landingPageViews: '45',
      linkClicks: '52',
      purchases: '2',
      purchaseValue: '180,00 €',
      addToCart: '8',
      trafficGoogle: '1',
      instagramProfileVisits: '1'
    },
    {
      id: '9',
      name: 'Sales_advantage+_reel_womeninwavre',
      objective: 'Ventes',
      status: 'ACTIVE',
      delivery: 'active',
      budget: '30,00 €',
      budgetType: 'DAILY',
      amountSpent: '210,00 €',
      impressions: '45 300',
      reach: '38 400',
      frequency: '1,18',
      results: '450',
      postReactions: '125',
      postComments: '42',
      postShares: '28',
      postSaves: '55',
      landingPageViews: '320',
      linkClicks: '410',
      purchases: '12',
      purchaseValue: '720,00 €',
      addToCart: '25',
      trafficGoogle: '14',
      instagramProfileVisits: '12'
    },
    {
      id: '4',
      name: 'convers_saison_vilar_2023-2024',
      objective: 'Ventes',
      status: 'ACTIVE',
      delivery: 'active',
      budget: '20,00 €',
      budgetType: 'DAILY',
      amountSpent: '40,00 €',
      impressions: '11 570',
      reach: '5 667',
      frequency: '2,04',
      results: '262',
      postReactions: '2',
      postComments: '0',
      postShares: '0',
      postSaves: '0',
      landingPageViews: '44',
      linkClicks: '69',
      purchases: '0',
      purchaseValue: '0,00 €',
      addToCart: '0',
      trafficGoogle: '6',
      instagramProfileVisits: '2'
    },
    {
      id: '5',
      name: 'convers_vidéo_charles IG',
      objective: 'Ventes',
      status: 'ACTIVE',
      delivery: 'active',
      budget: '5,00 €',
      budgetType: 'DAILY',
      amountSpent: '20,97 €',
      impressions: '8 706',
      reach: '5 175',
      frequency: '1,68',
      results: '40',
      postReactions: '1',
      postComments: '0',
      postShares: '0',
      postSaves: '0',
      landingPageViews: '44',
      linkClicks: '44',
      purchases: '12',
      purchaseValue: '840,00 €',
      addToCart: '45',
      trafficGoogle: '1',
      instagramProfileVisits: '5'
    }
  ]);

  const [googleAdsCampaigns] = useState([
    {
      id: 'g1',
      name: 'Sales_Search_Brand_FR',
      type: 'Search',
      status: 'ACTIVE',
      budget: '25,00 €',
      spend: '750,00 €',
      impressions: '12 400',
      clicks: '1 240',
      conversions: '45',
      conversionValue: '3 200,00 €',
      leads: '0',
      cpc: '0,60 €',
      ctr: '10,0%'
    },
    {
      id: 'g2',
      name: 'Lead_Generation_PMax_Wavre',
      type: 'Performance Max',
      status: 'ACTIVE',
      budget: '40,00 €',
      spend: '1 200,00 €',
      impressions: '45 000',
      clicks: '850',
      conversions: '22',
      conversionValue: '0,00 €',
      leads: '22',
      cpc: '1,41 €',
      ctr: '1,89%'
    },
    {
      id: 'g3',
      name: 'Traffic_Display_Remarketing',
      type: 'Display',
      status: 'ACTIVE',
      budget: '15,00 €',
      spend: '450,00 €',
      impressions: '150 000',
      clicks: '1 500',
      conversions: '5',
      conversionValue: '350,00 €',
      leads: '2',
      cpc: '0,30 €',
      ctr: '1,00%'
    }
  ]);

  const [activeExercise, setActiveExercise] = useState(0);
  const [activeTab, setActiveTab] = useState('campaigns');
  const [activeGoogleExercise, setActiveGoogleExercise] = useState(0);
  const [ga4SubTab, setGa4SubTab] = useState('home');
  const [ga4Dimension, setGa4Dimension] = useState('channel');
  const [userAnswers, setUserAnswers] = useState({ 
    cpc: '', 
    er: '', 
    roas: '',
    objective: '',
    reachDef: '',
    impressionDef: '',
    frequencyDef: '',
    mostIgVisits: '',
    mostFeeds: '',
    retargetingDef: '',
    audienceType: ''
  });
  const [ga4Answers, setGa4Answers] = useState({ 
    bestChannel: '', 
    sessionDurationAnalysis: '',
    bestMetaCampaign: '',
    deviceInsight: ''
  });
  const [ga4Filter, setGa4Filter] = useState<string | null>(null);
  const [showCorrection, setShowCorrection] = useState(false);
  
  // GA4 Sample Data
  const ga4Data = {
    trafficChannels: [
      { channel: 'Paid Search', sourceMedium: 'google / cpc', campaign: 'Sales_Search_Brand_FR', sessions: '1240', engagementRate: '68,5%', avgDuration: '1m 24s', keyEvents: '45', purchases: '45', leads: '0' },
      { channel: 'Paid Other', sourceMedium: 'meta / ads', campaign: 'convers_retargeting_vidéo_place-aux-artistes', sessions: '994', engagementRate: '18,1%', avgDuration: '0m 05s', keyEvents: '12', purchases: '12', leads: '5' },
      { channel: 'Paid Search', sourceMedium: 'google / cpc', campaign: 'Lead_Generation_PMax_Wavre', sessions: '850', engagementRate: '52,1%', avgDuration: '0m 58s', keyEvents: '22', purchases: '0', leads: '22' },
      { channel: 'Direct', sourceMedium: '(direct) / (none)', campaign: '(not set)', sessions: '650', engagementRate: '60,6%', avgDuration: '0m 48s', keyEvents: '45', purchases: '15', leads: '10' },
      { channel: 'Paid Other', sourceMedium: 'meta / ads', campaign: 'convers_vidéo_cinéma', sessions: '310', engagementRate: '17,1%', avgDuration: '0m 03s', keyEvents: '8', purchases: '8', leads: '2' },
      { channel: 'Paid Other', sourceMedium: 'meta / ads', campaign: 'Convers_saison_vilar_2023-2024', sessions: '294', engagementRate: '5,1%', avgDuration: '0m 00s', keyEvents: '2', purchases: '0', leads: '2' },
      { channel: 'Paid Other', sourceMedium: 'meta / ads', campaign: 'convers_vidéo_charles', sessions: '241', engagementRate: '10,3%', avgDuration: '0m 02s', keyEvents: '5', purchases: '5', leads: '0' },
      { channel: 'Referral', sourceMedium: '(referral) / (none)', campaign: '(not set)', sessions: '167', engagementRate: '56,8%', avgDuration: '0m 43s', keyEvents: '15', purchases: '2', leads: '8' },
      { channel: 'Paid Video', sourceMedium: 'google / cpc', campaign: 'Traffic_Display_Remarketing', sessions: '1500', engagementRate: '42,0%', avgDuration: '0m 25s', keyEvents: '7', purchases: '5', leads: '2' },
      { channel: 'Organic Search', sourceMedium: 'google / organic', campaign: '(not set)', sessions: '129', engagementRate: '58,9%', avgDuration: '0m 42s', keyEvents: '22', purchases: '4', leads: '12' },
    ],
    pagesEngagement: [
      { page: '/home', views: '1 250', avgEngagementTime: '48s', keyEvents: '45', channel: 'Direct' },
      { page: '/reservation', views: '850', avgEngagementTime: '1m 12s', keyEvents: '28', channel: 'Paid Other' },
      { page: '/programme', views: '2 100', avgEngagementTime: '2m 15s', keyEvents: '120', channel: 'Organic Search' },
      { page: '/panier', views: '320', avgEngagementTime: '0m 45s', keyEvents: '12', channel: 'Paid Other' },
    ],
    devices: [
      { type: 'Mobile', users: '1 850', engagementRate: '58,2%', conversions: '24' },
      { type: 'Desktop', users: '804', engagementRate: '82,5%', conversions: '33' },
      { type: 'Tablet', users: '42', engagementRate: '61,0%', conversions: '1' },
    ]
  };

  const handleDownloadReport = () => {
    let reportText = `RETOUR SUR LE LAB REPORTING & GA4\n`;
    reportText += `-----------------------------------\n`;
    reportText += `Généré le : ${new Date().toLocaleString()}\n\n`;

    reportText += `SECTION 1 : ANALYSE META ADS\n`;
    reportText += `-----------------------------------\n`;
    reportText += `Campagne analysée : ${selectedCampaign.name}\n`;
    reportText += `Objectif : ${selectedCampaign.objective}\n\n`;

    reportText += `VOS RÉPONSES (META) :\n`;
    reportText += `- Objectif global : ${userAnswers.objective || 'Non répondu'}\n`;
    reportText += `- Définition Reach : ${userAnswers.reachDef || 'Non répondu'}\n`;
    reportText += `- Définition Impression : ${userAnswers.impressionDef || 'Non répondu'}\n`;
    reportText += `- CPC Moyen calculé : ${userAnswers.cpc || 'Non répondu'} €\n`;
    reportText += `- Taux d'Engagement calculé : ${userAnswers.er || 'Non répondu'} %\n`;
    reportText += `- ROAS calculé : ${userAnswers.roas || 'Non répondu'}\n`;
    reportText += `- Campagne plus de visites IG : ${userAnswers.mostIgVisits || 'Non répondu'}\n`;
    reportText += `- Campagne plus répétée : ${userAnswers.mostFeeds || 'Non répondu'}\n`;
    reportText += `- Définition Retargeting : ${userAnswers.retargetingDef || 'Non répondu'}\n`;
    reportText += `- Type d'audience analysée : ${userAnswers.audienceType || 'Non répondu'}\n\n`;

    reportText += `CORRECTION (META) :\n`;
    reportText += `- Objectif : Ventes (Conversion)\n`;
    reportText += `- CPC Réel : ${actualCpc.toFixed(2)} €\n`;
    reportText += `- Taux d'Engagement Réel : ${actualEngagementRate.toFixed(3)} %\n`;
    reportText += `- ROAS Réel : ${actualRoas.toFixed(2)}\n\n`;

    if (activeTab === 'ga4' || ga4Answers.bestChannel || ga4Answers.sessionDurationAnalysis) {
      reportText += `SECTION 2 : ANALYSE GOOGLE ANALYTICS 4\n`;
      reportText += `-----------------------------------\n`;
      reportText += `VOS RÉPONSES (GA4) :\n`;
      reportText += `- Meilleur canal : ${ga4Answers.bestChannel || 'Non répondu'}\n`;
      reportText += `- Analyse de la durée de session : ${ga4Answers.sessionDurationAnalysis || 'Non répondu'}\n`;
      reportText += `- Meilleure campagne Meta (via GA4) : ${ga4Answers.bestMetaCampaign || 'Non répondu'}\n`;
      reportText += `- Insight Appareils : ${ga4Answers.deviceInsight || 'Non répondu'}\n\n`;
    }

    reportText += `-----------------------------------\n`;
    reportText += `FIN DU RAPPORT\n`;

    const htmlContent = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'><title>Resultats Lab Reporting</title></head>
      <body style="font-family: 'Segoe UI', Arial, sans-serif; padding: 40px;">
        <h1 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">Résultats du Lab Reporting & GA4</h1>
        <pre style="white-space: pre-wrap; font-size: 11pt; line-height: 1.5; color: #1e293b;">
${reportText}
        </pre>
      </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Resultats_Lab_Reporting.doc`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const selectedCampaign = campaigns[activeExercise];
  const parseNum = (str) => parseFloat(str.replace(',', '.').replace(/ /g, '').replace('€', '')) || 0;

  const spend = parseNum(selectedCampaign.amountSpent);
  const reach = parseNum(selectedCampaign.reach);
  const clicks = parseNum(selectedCampaign.linkClicks);
  const purchaseValue = parseNum(selectedCampaign.purchaseValue);
  const reactions = parseNum(selectedCampaign.postReactions);
  const comments = parseNum(selectedCampaign.postComments);
  const shares = parseNum(selectedCampaign.postShares);
  const saves = parseNum(selectedCampaign.postSaves);
  
  const actualCpc = clicks > 0 ? spend / clicks : 0;
  const actualRoas = spend > 0 ? purchaseValue / spend : 0;
  const totalSocialInteractions = reactions + comments + shares + saves;
  const actualEngagementRate = reach > 0 ? (totalSocialInteractions / reach) * 100 : 0;

  const checkExercise = () => {
    if (!showCorrection) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2563eb', '#f59e0b', '#10b981']
      });
    }
    setShowCorrection(!showCorrection);
  };

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
            <h1 className="text-sm font-bold truncate tracking-tight">Reporting Lab : Meta Ads & GA4 Analysis</h1>
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
                    <span className="text-xs font-black">Reporting Lab : Amandine V.</span>
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
                    { id: 'google-ads', label: 'Google Ads' },
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
                            <th className="px-4 py-3 border-r border-slate-200 text-right">G. Traffic</th>
                            <th className="px-4 py-3 border-r border-slate-200 text-right">IG Visits</th>
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
                                <td className="px-4 py-4 border-r border-slate-200 text-right text-blue-600 font-black not-italic">{camp.trafficGoogle}</td>
                                <td className="px-4 py-4 border-r border-slate-200 text-right text-indigo-600 font-black not-italic">{camp.instagramProfileVisits}</td>
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

                {activeTab === 'google-ads' && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                      <div className="p-6 bg-slate-50 border-b border-slate-200">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                             <Search size={18} />
                           </div>
                           <h3 className="text-sm font-black uppercase text-slate-800">Tableau de bord Google Ads</h3>
                        </div>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-[11px] border-collapse min-w-[1000px]">
                          <thead className="bg-[#f8fafc] text-slate-500 font-bold uppercase tracking-tighter border-b border-slate-200">
                            <tr>
                              <th className="p-4 border-r border-slate-100">Campagne</th>
                              <th className="p-4 border-r border-slate-100">Type</th>
                              <th className="p-4 border-r border-slate-100 text-right">Budget / jour</th>
                              <th className="p-4 border-r border-slate-100 text-right">Dépenses</th>
                              <th className="p-4 border-r border-slate-100 text-right">Impressions</th>
                              <th className="p-4 border-r border-slate-100 text-right">Clics</th>
                              <th className="p-4 border-r border-slate-100 text-right">CTR</th>
                              <th className="p-4 border-r border-slate-100 text-right">CPC</th>
                              <th className="p-4 border-r border-slate-100 text-right text-blue-600">Conversions</th>
                              <th className="p-4 border-r border-slate-100 text-right">Leads</th>
                              <th className="p-4 text-right text-emerald-600">Valeur conv.</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 italic font-medium">
                            {googleAdsCampaigns.map((camp, idx) => (
                              <tr 
                                key={camp.id} 
                                onClick={() => { setActiveGoogleExercise(idx); setShowCorrection(false); }}
                                className={`hover:bg-slate-50 cursor-pointer transition-colors ${activeGoogleExercise === idx ? 'bg-blue-50/50' : ''}`}
                              >
                                <td className="p-4 font-black not-italic text-slate-800 border-r border-slate-100">{camp.name}</td>
                                <td className="p-4 border-r border-slate-100 text-slate-500">{camp.type}</td>
                                <td className="p-4 text-right border-r border-slate-100">{camp.budget}</td>
                                <td className="p-4 text-right border-r border-slate-100 font-black not-italic">{camp.spend}</td>
                                <td className="p-4 text-right border-r border-slate-100 text-slate-400">{camp.impressions}</td>
                                <td className="p-4 text-right border-r border-slate-100 font-bold text-blue-600">{camp.clicks}</td>
                                <td className="p-4 text-right border-r border-slate-100">{camp.ctr}</td>
                                <td className="p-4 text-right border-r border-slate-100">{camp.cpc}</td>
                                <td className="p-4 text-right border-r border-slate-100 font-black text-blue-700 not-italic">{camp.conversions}</td>
                                <td className="p-4 text-right border-r border-slate-100 font-black text-amber-600 not-italic">{camp.leads}</td>
                                <td className="p-4 text-right font-black text-emerald-600 not-italic">{camp.conversionValue}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                          <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Analyse Conversions</h4>
                          <div className="h-[200px]">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={googleAdsCampaigns}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" hide />
                                <YAxis hide />
                                <Tooltip />
                                <Bar dataKey="conversions" fill="#2563eb" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="leads" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                       </div>
                       <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                          <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Analyse ROI</h4>
                          <div className="space-y-4">
                             {googleAdsCampaigns.map(c => {
                               const spendNum = parseNum(c.spend);
                               const valNum = parseNum(c.conversionValue);
                               const roas = spendNum > 0 ? (valNum / spendNum).toFixed(2) : '0';
                               return (
                                 <div key={c.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                    <span className="text-xs font-bold text-slate-700">{c.name}</span>
                                    <div className="flex items-center gap-4">
                                       <span className="text-[10px] font-bold text-slate-400">ROAS:</span>
                                       <span className={`text-xs font-black ${parseFloat(roas) > 1 ? 'text-green-600' : 'text-slate-500'}`}>{roas}</span>
                                    </div>
                                 </div>
                               )
                             })}
                          </div>
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
                      <button 
                        onClick={() => setGa4SubTab('tech')}
                        className={`px-4 py-2 text-[11px] font-black uppercase tracking-widest rounded-lg transition-all ${ga4SubTab === 'tech' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
                      >
                        Technologie
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
                    ) : ga4SubTab === 'tech' ? (
                      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm p-6 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center gap-2 mb-4">
                           <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                             <Laptop size={18} />
                           </div>
                           <h3 className="text-sm font-black uppercase text-slate-800 italic">Analyse des Appareils</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {ga4Data.devices.map((dev, i) => (
                            <div key={i} className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-4 hover:border-blue-200 transition-all cursor-pointer">
                               <div className="flex items-center justify-between">
                                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{dev.type}</span>
                                  <div className={`p-1.5 rounded-lg ${dev.type === 'Mobile' ? 'bg-blue-100 text-blue-600' : 'bg-indigo-100 text-indigo-600'}`}>
                                    {dev.type === 'Mobile' ? <Users size={14} /> : <Layout size={14} />}
                                  </div>
                               </div>
                               <div className="space-y-1">
                                  <p className="text-2xl font-black text-slate-800">{dev.users}</p>
                                  <p className="text-[10px] font-bold text-slate-400 uppercase">Utilisateurs</p>
                               </div>
                               <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                                  <div>
                                     <p className="text-xs font-black text-blue-600">{dev.engagementRate}</p>
                                     <p className="text-[8px] font-bold text-slate-400 uppercase">Engagement</p>
                                  </div>
                                  <div>
                                     <p className="text-xs font-black text-emerald-600">{dev.conversions}</p>
                                     <p className="text-[8px] font-bold text-slate-400 uppercase">Conversions</p>
                                  </div>
                               </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm p-6 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between">
                           <h3 className="text-sm font-black uppercase text-slate-800">{ga4Filter ? `Détails : ${ga4Filter}` : 'Acquisition par Canal (GA4)'}</h3>
                           <div className="flex items-center gap-3">
                             {ga4Filter && (
                               <button 
                                 onClick={() => setGa4Filter(null)}
                                 className="text-[10px] font-black text-blue-600 hover:text-blue-700 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded-lg border border-blue-100"
                               >
                                 Tout voir
                               </button>
                             )}
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
                               <option value="campaign">Campagne</option>
                             </select>
                           </div>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-[11px] border-collapse min-w-[900px]">
                            <thead className="bg-[#f8fafc] text-slate-500 font-bold uppercase tracking-tighter border-y border-slate-100">
                              <tr>
                                <th className="p-4 border-r border-slate-100">Dimension</th>
                                <th className="p-4 border-r border-slate-100 text-right text-blue-600">Achats (GA4)</th>
                                <th className="p-4 border-r border-slate-100 text-right text-amber-600">Leads (GA4)</th>
                                <th className="p-4 border-r border-slate-100 text-right">Sessions</th>
                                <th className="p-4 border-r border-slate-100 text-right">Taux d'Engagement</th>
                                <th className="p-4 text-right">Durée Moyenne</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {ga4Data.trafficChannels.map((d: any, i: number) => {
                                const isActive = ga4Filter === d[ga4Dimension];
                                return (
                                  <tr 
                                    key={i} 
                                    onClick={() => setGa4Filter(isActive ? null : d[ga4Dimension])}
                                    className={`hover:bg-slate-50 cursor-pointer transition-colors ${isActive ? 'bg-blue-50/50' : ''}`}
                                  >
                                    <td className={`p-4 font-black border-r border-slate-100 ${isActive ? 'text-blue-600' : 'text-slate-700'}`}>{d[ga4Dimension]}</td>
                                    <td className="p-4 text-right font-black text-blue-600 border-r border-slate-100">{d.purchases}</td>
                                    <td className="p-4 text-right font-black text-amber-600 border-r border-slate-100">{d.leads}</td>
                                    <td className="p-4 text-right font-bold text-slate-600 border-r border-slate-100">{d.sessions}</td>
                                    <td className="p-4 text-right font-medium text-slate-500 border-r border-slate-100">{d.engagementRate}</td>
                                    <td className="p-4 text-right font-medium text-slate-500 italic">{d.avgDuration}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>

                        {/* Filtered Pages Insight */}
                        <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                          <div className="flex items-center gap-2">
                             <TrendingUp size={14} className="text-blue-500" />
                             <h4 className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Pages Engagées {ga4Filter ? `(Canal: ${ga4Filter})` : '(Vue d\'ensemble)'}</h4>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                             {ga4Data.pagesEngagement
                               .filter(p => !ga4Filter || p.channel === ga4Filter)
                               .map((p, i) => (
                                 <div 
                                   key={i} 
                                   onClick={() => setGa4Filter(p.page === ga4Filter ? null : p.page)}
                                   className={`p-3 rounded-xl border transition-all cursor-pointer ${ga4Filter === p.page ? 'bg-blue-600 text-white border-blue-600 shadow-md scale-[1.02]' : 'bg-slate-50 border-slate-100 hover:border-blue-200'}`}
                                 >
                                   <div className="flex items-center justify-between mb-2">
                                     <span className={`text-[9px] font-black uppercase tracking-tight ${ga4Filter === p.page ? 'text-blue-100' : 'text-slate-400'}`}>{p.page}</span>
                                     <ExternalLink size={10} className={ga4Filter === p.page ? 'text-blue-200' : 'text-slate-300'} />
                                   </div>
                                   <div className="flex items-center justify-between">
                                      <div className="space-y-0.5">
                                        <p className="text-sm font-black">{p.views}</p>
                                        <p className={`text-[8px] font-bold uppercase ${ga4Filter === p.page ? 'text-blue-200' : 'text-slate-500'}`}>Vues</p>
                                      </div>
                                      <p className={`text-[10px] font-black ${ga4Filter === p.page ? 'text-white' : 'text-blue-600'}`}>{p.avgEngagementTime}</p>
                                   </div>
                                 </div>
                               ))}
                          </div>
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
                    {activeTab === 'google-ads' ? (
                      <>
                        <div className="space-y-4">
                          <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest">Analyse Google Ads</p>
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">ROAS (Retour sur dépenses)</label>
                            <p className="text-[11px] text-slate-400 font-medium italic">Calcul : Valeur Conversion / Dépenses</p>
                            <input 
                              type="text"
                              placeholder="Calculer le ROAS..."
                              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm outline-none"
                            />
                            {showCorrection && (
                              <p className="text-[10px] text-green-600 font-black italic">
                                Correction : {(parseNum(googleAdsCampaigns[activeGoogleExercise].conversionValue) / parseNum(googleAdsCampaigns[activeGoogleExercise].spend)).toFixed(2)}
                              </p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Coût par Lead (€)</label>
                            <input 
                              type="text"
                              placeholder="Calculer le CPA Lead..."
                              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm outline-none"
                            />
                            {showCorrection && (
                              <p className="text-[10px] text-green-600 font-black italic">
                                Correction : {parseNum(googleAdsCampaigns[activeGoogleExercise].leads) > 0 ? (parseNum(googleAdsCampaigns[activeGoogleExercise].spend) / parseNum(googleAdsCampaigns[activeGoogleExercise].leads)).toFixed(2) : "N/A"} €
                              </p>
                            )}
                          </div>
                        </div>
                      </>
                    ) : activeTab === 'campaigns' ? (
                      <>
                        <div className="space-y-4">
                          <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-3">
                             <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Comparaison ROAS par Campagne</p>
                             <div className="h-[120px] w-full">
                               <ResponsiveContainer width="100%" height="100%">
                                 <BarChart data={chartData} margin={{ top: 5, right: 0, left: -30, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                    <XAxis dataKey="name" hide />
                                    <YAxis tick={{ fontSize: 8, fill: '#64748b' }} />
                                    <Tooltip 
                                      content={({ active, payload }) => {
                                        if (active && payload && payload.length) {
                                          return (
                                            <div className="bg-white p-2 border border-slate-200 rounded shadow-lg">
                                              <p className="text-[8px] font-black text-slate-800">{payload[0].payload.fullName}</p>
                                              <p className={`text-[10px] font-black ${Number(payload[0].value) > 1 ? 'text-green-600' : 'text-red-500'}`}>
                                                ROAS: {payload[0].value}
                                              </p>
                                            </div>
                                          );
                                        }
                                        return null;
                                      }}
                                    />
                                    <Bar dataKey="roas" radius={[2, 2, 0, 0]}>
                                      {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.roas > 1 ? '#22c55e' : '#ef4444'} />
                                      ))}
                                    </Bar>
                                 </BarChart>
                               </ResponsiveContainer>
                             </div>
                             <div className="flex items-center gap-3 justify-center">
                               <div className="flex items-center gap-1">
                                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                 <span className="text-[8px] font-bold text-slate-400">ROAS {'>'} 1</span>
                               </div>
                               <div className="flex items-center gap-1">
                                 <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                 <span className="text-[8px] font-bold text-slate-400">ROAS {'<'} 1</span>
                               </div>
                             </div>
                          </div>

                          <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest">Partie 1 : Calculs de Performance</p>
                          
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">CPC Moyen (€)</label>
                            <input 
                              type="text"
                              placeholder="Calculer le CPC..."
                              value={userAnswers.cpc}
                              onChange={(e) => setUserAnswers({...userAnswers, cpc: e.target.value})}
                              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm outline-none focus:border-blue-500 transition-all"
                            />
                            {showCorrection && (
                              <div className="p-3 bg-green-50 border border-green-100 rounded-lg">
                                <p className="text-[9px] font-black text-green-600 uppercase tracking-widest">Solution :</p>
                                <p className="text-sm font-black text-green-700">{actualCpc.toFixed(2)} €</p>
                              </div>
                            )}
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Taux d'Engagement (%)</label>
                              <span className="text-[9px] text-slate-400 font-medium italic">(Interactions / Portée)</span>
                            </div>
                            <input 
                              type="text"
                              placeholder="Calculer l'engagement..."
                              value={userAnswers.er}
                              onChange={(e) => setUserAnswers({...userAnswers, er: e.target.value})}
                              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm outline-none focus:border-blue-500 transition-all"
                            />
                            {showCorrection && (
                              <div className="p-3 bg-green-50 border border-green-100 rounded-lg">
                                <p className="text-[9px] font-black text-green-600 uppercase tracking-widest">Solution :</p>
                                <p className="text-sm font-black text-green-700">{actualEngagementRate.toFixed(3)} %</p>
                              </div>
                            )}
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">ROAS</label>
                            <input 
                              type="text"
                              placeholder="Calculer le ROAS..."
                              value={userAnswers.roas}
                              onChange={(e) => setUserAnswers({...userAnswers, roas: e.target.value})}
                              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm outline-none focus:border-blue-500 transition-all"
                            />
                            {showCorrection && (
                              <div className="p-3 bg-green-50 border border-green-100 rounded-lg">
                                <p className="text-[9px] font-black text-green-600 uppercase tracking-widest">Solution :</p>
                                <p className="text-sm font-black text-green-700">{actualRoas.toFixed(2)}</p>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-slate-100">
                          <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest">Partie 2 : Théorie & Analyse</p>
                          
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Quel est l'objectif des campagnes actuelles ?</label>
                            <input 
                              type="text"
                              value={userAnswers.objective}
                              onChange={(e) => setUserAnswers({...userAnswers, objective: e.target.value})}
                              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm outline-none focus:border-blue-500 transition-all"
                            />
                            {showCorrection && <p className="text-[10px] text-green-600 font-black italic">Correction : Ventes (Conversion)</p>}
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Que signifie le "Reach" (Portée) ?</label>
                            <input 
                              type="text"
                              value={userAnswers.reachDef}
                              onChange={(e) => setUserAnswers({...userAnswers, reachDef: e.target.value})}
                              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm outline-none focus:border-blue-500 transition-all"
                            />
                            {showCorrection && <p className="text-[10px] text-green-600 font-black italic">Correction : Nombre de personnes uniques exposées</p>}
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Que signifie "Impression" ?</label>
                            <input 
                              type="text"
                              value={userAnswers.impressionDef}
                              onChange={(e) => setUserAnswers({...userAnswers, impressionDef: e.target.value})}
                              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm outline-none focus:border-blue-500 transition-all"
                            />
                            {showCorrection && <p className="text-[10px] text-green-600 font-black italic">Correction : Nombre de fois où la pub est affichée</p>}
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Quelle campagne a le plus de visites de profil IG ?</label>
                            <input 
                              type="text"
                              value={userAnswers.mostIgVisits}
                              onChange={(e) => setUserAnswers({...userAnswers, mostIgVisits: e.target.value})}
                              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm outline-none focus:border-blue-500 transition-all"
                            />
                            {showCorrection && <p className="text-[10px] text-green-600 font-black italic">Correction : convers_vidéo_cinéma (6 visites)</p>}
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Quelle campagne est la plus "répétée" (Fréquence haut) ?</label>
                            <input 
                              type="text"
                              value={userAnswers.mostFeeds}
                              onChange={(e) => setUserAnswers({...userAnswers, mostFeeds: e.target.value})}
                              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm outline-none focus:border-blue-500 transition-all"
                            />
                            {showCorrection && <p className="text-[10px] text-green-600 font-black italic">Correction : Conver_retargetting_video_womeninwavre_mars_26 (10,00)</p>}
                          </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-slate-100">
                          <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest">Partie 3 : Stratégie & Reciblage</p>
                          
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Que signifie le "Retargeting" (Reciblage) ?</label>
                            <textarea 
                              rows={2}
                              value={userAnswers.retargetingDef}
                              onChange={(e) => setUserAnswers({...userAnswers, retargetingDef: e.target.value})}
                              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm outline-none focus:border-blue-500 transition-all resize-none"
                            />
                            {showCorrection && <p className="text-[10px] text-green-600 font-black italic">Correction : Cibler des personnes ayant déjà interagi avec la marque (site, panier, social...)</p>}
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Selon vous, la campagne sélectionnée utilise-t-elle une audience Retargeting ou Advantage+ ?</label>
                            <input 
                              type="text"
                              placeholder="Retargeting / Advantage+ / Autre..."
                              value={userAnswers.audienceType}
                              onChange={(e) => setUserAnswers({...userAnswers, audienceType: e.target.value})}
                              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm outline-none focus:border-blue-500 transition-all"
                            />
                            {showCorrection && (
                              <p className="text-[10px] text-green-600 font-black italic">
                                {selectedCampaign.name.toLowerCase().includes('retarget') ? "Correction : Retargeting (vu le nom et la fréquence)" : "Correction : Probablement Prospecting ou Advantage+ (dépend du paramétrage)"}
                              </p>
                            )}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="space-y-4 pt-2 border-t border-slate-100">
                          <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest">Partie 1 : Théorie & Outils</p>
                          
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Selon vous, quelle partie de l'UTM apparait dans le tableau (Analytics) ?</label>
                            <input 
                              type="text"
                              placeholder="Source / Medium / Campaign..."
                              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm outline-none focus:border-blue-500 transition-all"
                            />
                            {showCorrection && <p className="text-[10px] text-green-600 font-black italic">Correction : Campagne (utm_campaign)</p>}
                          </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-slate-100">
                          <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest">Partie 2 : Analyse Gains</p>
                          
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">1. De quel canal vient le plus de trafic (Sessions) ?</label>
                            <input 
                              type="text"
                              placeholder="Direct / Organic / Paid Other..."
                              value={ga4Answers.bestChannel}
                              onChange={(e) => setGa4Answers({...ga4Answers, bestChannel: e.target.value})}
                              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm outline-none focus:border-blue-500 transition-all"
                            />
                            {showCorrection && (
                              <div className="p-3 bg-green-50 border border-green-100 rounded-lg">
                                <p className="text-[9px] font-black text-green-600 uppercase tracking-widest">Correction :</p>
                                <p className="text-xs font-bold text-green-700">Paid Other (Somme des campagnes Meta ~2000 sessions).</p>
                              </div>
                            )}
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">2. Quelle campagne Meta a généré le plus de trafic Google (sessions) ?</label>
                            <input 
                              type="text"
                              placeholder="Voir colonne 'Google Traffic' dans le tableau Meta..."
                              value={ga4Answers.bestMetaCampaign}
                              onChange={(e) => setGa4Answers({...ga4Answers, bestMetaCampaign: e.target.value})}
                              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm outline-none focus:border-blue-500 transition-all"
                            />
                            {showCorrection && (
                              <div className="p-3 bg-green-50 border border-green-100 rounded-lg">
                                <p className="text-[9px] font-black text-green-600 uppercase tracking-widest">Correction :</p>
                                <p className="text-xs font-bold text-green-700">"convers_retargeting_vidéo_place-aux-artistes" avec 994 sessions.</p>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-slate-100">
                          <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest">Partie 3 : Engagement & Pages</p>
                          
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">3. Analyse de la durée de session (Global)</label>
                            <textarea 
                              rows={2}
                              placeholder="Interprétez les durées moyennes..."
                              value={ga4Answers.sessionDurationAnalysis}
                              onChange={(e) => setGa4Answers({...ga4Answers, sessionDurationAnalysis: e.target.value})}
                              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm outline-none focus:border-blue-500 transition-all resize-none"
                            />
                          </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-slate-100">
                          <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest">Partie 4 : Devices & Tech</p>
                          
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">5. Quel appareil a le meilleur ratio Conversions / Utilisateurs ?</label>
                            <input 
                              type="text"
                              placeholder="Comparez Mobile vs Desktop..."
                              value={ga4Answers.deviceInsight}
                              onChange={(e) => setGa4Answers({...ga4Answers, deviceInsight: e.target.value})}
                              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm outline-none focus:border-blue-500 transition-all"
                            />
                            {showCorrection && (
                              <div className="p-3 bg-green-50 border border-green-100 rounded-lg">
                                <p className="text-[9px] font-black text-green-600 uppercase tracking-widest">Correction :</p>
                                <p className="text-xs font-bold text-green-700">Desktop (4,1%) contre Mobile (1,3%). Le Desktop est ici le moteur des conversions finales malgré un volume moindre.</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </>
                    )}

                    <button 
                      onClick={checkExercise}
                      className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95"
                    >
                      {showCorrection ? 'Masquer Correction' : 'Vérifier mes calculs'}
                    </button>
                    
                    {activeTab === 'campaigns' && (
                      <button 
                        onClick={() => {
                          setActiveExercise((p) => (p + 1) % campaigns.length);
                          setShowCorrection(false);
                          setUserAnswers({ 
                            ...userAnswers,
                            cpc: '', 
                            er: '', 
                            roas: '' 
                          });
                        }}
                        className="w-full py-2 text-slate-400 hover:text-slate-600 text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                      >
                        Campagne Suivante <ChevronDown size={14} className="-rotate-90" />
                      </button>
                    )}
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
