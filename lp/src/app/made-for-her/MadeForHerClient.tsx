"use client";

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Sparkles, LogIn, TrendingUp, Calendar, Inbox, FlaskConical, FileText, Bell, Wallet, ListOrdered, Shield, Activity, Database, RefreshCcw, History, CreditCard, Clock, LineChart, Package, Search, ShieldAlert, CheckSquare, Sun } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CtaSection from '../../components/CtaSection';

interface MadeForHerClientProps {
  activeTab: 'hub' | 'track' | 'refine' | 'discover';
}

export default function MadeForHerClient({ activeTab }: MadeForHerClientProps) {
  const router = useRouter();

  const selectTab = (tab: 'hub' | 'track' | 'refine' | 'discover') => {
    if (tab === 'hub') {
      router.push('/made-for-her');
    } else {
      router.push(`/made-for-her/${tab}`);
    }
  };

  return (
    <div className="space-y-0">
      <div className="text-left max-w-7xl mx-auto px-6 py-12 space-y-12">
        {activeTab !== 'hub' && (
          <div className="flex items-center gap-2 text-[13px] font-semibold text-grey">
            <Link href="/" className="hover:text-espresso transition-colors">
              Home
            </Link>
            <span className="text-grey font-normal">&gt;</span>
            <button
              onClick={() => selectTab('hub')}
              className="hover:text-espresso transition-colors"
            >
              Made for Her
            </button>
            <span className="text-grey font-normal">&gt;</span>
            <span className="text-espresso">
              {activeTab === 'track' && 'The Tracker Pathway'}
              {activeTab === 'refine' && 'The Refiner Pathway'}
              {activeTab === 'discover' && 'The Explorer Pathway'}
            </span>
          </div>
        )}

        <AnimatePresence mode="wait">
          {activeTab === 'hub' && (
            <motion.div
              key="hub"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-12"
            >
              <div className="space-y-6 pt-4 text-center pb-16">
                <div className="inline-flex items-center gap-1.5 justify-center">
                  <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                  <span className="font-display italic text-[13px] text-[#8F6F3E]">who is nella for?</span>
                  <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                </div>
                <h1 className="font-display font-[600] text-[36px] sm:text-[48px] tracking-tight text-espresso leading-none text-center">
                  Who is nella for?
                </h1>
                <p className="text-[14px] sm:text-[15px] text-grey max-w-2xl mx-auto font-sans leading-relaxed text-center">
                  if you have a face, and you occasionally put things on it, she is for you.
                </p>
                <p className="text-[13px] font-medium text-espresso uppercase tracking-wider font-sans text-center">
                  but broadly, we see three types of women using her.
                </p>
              </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
                {/* Card 1 */}
                <div
                  onClick={() => selectTab('track')}
                  className="bg-white border border-[#E8E5DC] rounded-[32px] p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden relative cursor-pointer"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#DEC68B]/10 to-transparent rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                  {/* Graphic */}
                  <div className="w-full h-[150px] bg-[#FAF7F2] rounded-2xl border border-[#E8E5DC] mb-6 flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent"></div>
                    <div className="bg-white rounded-xl shadow-sm border border-[#E8E5DC] p-3 w-[80%] flex items-center justify-between z-10 group-hover:scale-105 transition-transform duration-500">
                      <div className="flex flex-col">
                        <span className="text-espresso font-semibold text-[13px] leading-none mb-1">Botox</span>
                        <span className="text-grey text-[10px] leading-none">24 Units • Dr. Smith</span>
                      </div>
                      <div className="h-6 w-6 rounded-full bg-[#FAF7F2] border border-[#E8E5DC] flex items-center justify-center">
                        <Check size={12} className="text-[#8F6F3E]" />
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="mt-auto text-left w-full">
                    <div className="text-[11.5px] font-semibold text-[#8F6F3E] uppercase tracking-wider mb-2">the tracker</div>
                    <h4 className="font-display font-[600] text-[24px] text-espresso leading-tight mb-3">
                      She has a spreadsheet.
                    </h4>
                    <p className="text-[14px] text-grey font-sans leading-relaxed">
                      she knows her units. she knows her dates. she is the one her friends ask for clinic recommendations. she uses nella because her notes app wasn't built for this.
                    </p>
                    <div className="pt-4 flex flex-col gap-1">
                      <span className="text-[12px] font-semibold text-espresso flex items-center gap-1 group-hover:text-[#8F6F3E] transition-colors">
                        see how she uses nella &rarr;
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div
                  onClick={() => selectTab('refine')}
                  className="bg-white border border-[#E8E5DC] rounded-[32px] p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden relative cursor-pointer"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#DEC68B]/10 to-transparent rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                  {/* Graphic */}
                  <div className="w-full h-[150px] bg-[#FAF7F2] rounded-2xl border border-[#E8E5DC] mb-6 flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent"></div>
                    <div className="bg-white rounded-xl shadow-sm border border-[#E8E5DC] p-3.5 w-[85%] flex flex-col gap-2.5 z-10 group-hover:scale-105 transition-transform duration-500">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-espresso font-semibold text-[13px] leading-none">Daily routine.</span>
                        <span className="text-[#8F6F3E] bg-[#FAF7F2] px-2 py-0.5 rounded-full text-[9px] font-semibold border border-[#E8E5DC]">14-day streak</span>
                      </div>
                      <div className="w-full bg-[#FAF7F2] rounded-lg py-2 flex justify-center items-center gap-1.5 border border-[#E8E5DC]">
                        <Sun size={12} className="text-[#8F6F3E]" />
                        <span className="text-[11px] font-medium text-espresso">AM · 2</span>
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="mt-auto text-left w-full">
                    <div className="text-[11.5px] font-semibold text-[#8F6F3E] uppercase tracking-wider mb-2">the refiner</div>
                    <h4 className="font-display font-[600] text-[24px] text-espresso leading-tight mb-3">
                      She found what works.
                    </h4>
                    <p className="text-[14px] text-grey font-sans leading-relaxed">
                      she has used the same moisturiser since 2019. she gets botox twice a year. she uses nella to quietly maintain the routine she spent years perfecting.
                    </p>
                    <div className="pt-4 flex flex-col gap-1">
                      <span className="text-[12px] font-semibold text-espresso flex items-center gap-1 group-hover:text-[#8F6F3E] transition-colors">
                        see how she uses nella &rarr;
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div
                  onClick={() => selectTab('discover')}
                  className="bg-white border border-[#E8E5DC] rounded-[32px] p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden relative cursor-pointer"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#DEC68B]/10 to-transparent rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                  {/* Graphic */}
                  <div className="w-full h-[150px] bg-[#FAF7F2] rounded-2xl border border-[#E8E5DC] mb-6 flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent"></div>
                    <div className="relative w-24 h-24 rounded-full border-[3px] border-dashed border-[#E8E5DC] flex flex-col items-center justify-center bg-white shadow-sm z-10 group-hover:scale-105 transition-transform duration-500">
                      <span className="text-[8px] font-semibold text-[#8F6F3E] uppercase tracking-widest mb-0.5">Score</span>
                      <span className="font-display font-bold text-[36px] text-espresso leading-none">83</span>
                      <span className="text-[9px] font-medium text-[#8F6F3E] mt-1 flex items-center gap-0.5">▲ +4 pts</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="mt-auto text-left w-full">
                    <div className="text-[11.5px] font-semibold text-[#8F6F3E] uppercase tracking-wider mb-2">the explorer</div>
                    <h4 className="font-display font-[600] text-[24px] text-espresso leading-tight mb-3">
                      She tries everything.
                    </h4>
                    <p className="text-[14px] text-grey font-sans leading-relaxed">
                      her algorithm is a dangerous place. she buys the viral mask. she books the new facial. she uses nella to finally figure out which of them actually work.
                    </p>
                    <div className="pt-4 flex flex-col gap-1">
                      <span className="text-[12px] font-semibold text-espresso flex items-center gap-1 group-hover:text-[#8F6F3E] transition-colors">
                        see how she uses nella &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border border-[#E8E5DC] rounded-2xl text-[13.5px] text-grey font-sans leading-relaxed shadow-sm relative overflow-hidden mt-8">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E]"></div>
                <h4 className="font-semibold text-espresso mb-1">Nella adapts to you.</h4>
                to whatever shape your beauty life is in this month. the score, the reminders, the routine, the aftercare. they all change based on what you actually do.
              </div>
            </motion.div>
          )}

          {activeTab === 'track' && (
            <motion.div
              key="track"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-10 max-w-5xl mx-auto"
            >
              <div className="space-y-6 text-center pb-16">
                <div className="inline-flex items-center gap-1.5 justify-center">
                  <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                  <span className="font-display italic text-[11px] text-[#8F6F3E]">the tracker pathway</span>
                  <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                </div>
                <h1 className="font-display font-[600] text-[28px] sm:text-[38px] leading-tight text-espresso tracking-tight text-center">
                  For the woman who has forgotten when she last booked.
                </h1>
                <p className="text-[14px] text-grey font-sans text-center max-w-2xl mx-auto">
                  your nails, your brows, your botox, your hair. nella keeps the diary you should have been keeping.
                </p>
              </div>

              <div className="p-6 bg-white border border-[#E8E5DC] rounded-2xl text-[13.5px] text-grey font-sans leading-relaxed shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E]"></div>
                <h3 className="font-semibold text-espresso mb-1">sound like you?</h3>
                you spent £250 on beauty last month... you think. your nail tech has texted twice. your highlights were march or april, you can&rsquo;t quite remember. your botox is due. or overdue. you&rsquo;ve meant to write it all down. you haven&rsquo;t.
              </div>

              <div className="space-y-6 pt-2">
                <h2 className="font-display font-semibold text-[26px] sm:text-[28px] text-espresso mb-2">
                  What nella does about it.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
                  {/* Card 1: Top Left */}
                  <div className="md:col-span-2 lg:col-span-2 relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                    <div className="bg-[#FAF7F2] w-full flex-1 flex items-center justify-center p-6 md:p-8 relative overflow-hidden">
                      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#DEC68B]/10 rounded-full blur-2xl"></div>
                      <div className="w-full max-w-[280px] flex flex-col gap-2 z-10">
                        {['Lip Filler 0.5ml', 'Brow Lamination'].map((item, i) => (
                          <div key={i} className="flex items-center justify-between bg-white p-3 rounded-2xl shadow-sm border border-[#E8E5DC] group-hover:-translate-y-1 transition-transform duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-warm-ivory flex items-center justify-center text-[#8F6F3E]">
                                <History size={14} />
                              </div>
                              <span className="text-[12px] font-bold text-espresso">{item}</span>
                            </div>
                            <span className="text-[11px] font-medium text-grey">Nov 4</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-5 md:p-6 space-y-2.5">
                      <h4 className="font-sans font-[600] text-[16px] text-espresso">Every treatment in one place.</h4>
                      <p className="text-[13.5px] text-grey font-sans leading-relaxed max-w-xl">injectables, facials, hair, nails, brows, lashes, body. log it once, see it forever.</p>
                    </div>
                  </div>

                  {/* Card 3: Right Side Tall (Spending truth) */}
                  <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                    <div className="bg-gradient-to-br from-[#FAF7F2] to-[#F5EDE0] w-full flex-1 flex items-center justify-center p-8 relative overflow-hidden">
                      <div className="w-full max-w-[200px] flex flex-col gap-3 z-10">
                        {[{name: 'Botox', price: '£250', date: 'Oct 12'}, {name: 'Hydrafacial', price: '£150', date: 'Oct 5'}, {name: 'Nails', price: '£50', date: 'Oct 1'}].map((tx, i) => (
                          <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-[#E8E5DC] flex flex-col gap-1 group-hover:-translate-y-1 transition-transform duration-500" style={{transitionDelay: `${i*100}ms`}}>
                            <div className="flex justify-between items-center"><span className="text-[12px] font-bold text-espresso">{tx.name}</span><span className="text-[12px] font-bold text-[#8F6F3E]">{tx.price}</span></div>
                            <span className="text-[10px] text-grey">{tx.date}</span>
                          </div>
                        ))}
                        <div className="mt-2 bg-espresso p-4 rounded-2xl shadow-sm flex flex-col items-center justify-center gap-1 group-hover:scale-105 transition-transform duration-500">
                           <span className="text-[10px] text-warm-ivory uppercase tracking-wider">This Month</span>
                           <span className="text-[18px] font-display font-bold text-white">£450</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 md:p-6 space-y-2.5">
                      <h4 className="font-sans font-[600] text-[16px] text-espresso">Spending that adds up.</h4>
                      <p className="text-[13.5px] text-grey font-sans leading-relaxed">how much you spent this month, this quarter, this year. clearly categorised in your dashboard.</p>
                    </div>
                  </div>

                  {/* Card 2: Bottom Left (Reminders) */}
                  <div className="md:col-span-2 lg:col-span-2 relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                    <div className="bg-[#FAF7F2] w-full flex-1 flex items-center justify-center p-6 relative overflow-hidden">
                      <div className="w-full max-w-[280px] bg-white p-4 rounded-2xl shadow-sm border border-[#E8E5DC] flex items-center gap-4 z-10 group-hover:-translate-y-2 transition-transform duration-500">
                        <div className="relative w-12 h-12 bg-[#FAF7F2] rounded-full flex items-center justify-center border border-[#E8E5DC]">
                          <Bell size={20} className="text-[#8F6F3E] group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
                          <div className="absolute top-0 right-0 w-3 h-3 bg-espresso rounded-full border-2 border-white"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[12px] font-bold text-espresso">Botox Due</span>
                          <span className="text-[10px] text-grey">It's been 12 weeks. Time to book.</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 md:p-6 space-y-2.5">
                      <h4 className="font-sans font-[600] text-[16px] text-espresso">Reminders that actually fit you.</h4>
                      <p className="text-[13.5px] text-grey font-sans leading-relaxed max-w-xl">every treatment has its own cycle. nella knows your nails are due in three weeks and sends a heads-up.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border border-[#E8E5DC] rounded-2xl text-[13.5px] text-grey font-sans leading-relaxed shadow-sm relative overflow-hidden mt-8">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E]"></div>
                <h4 className="font-semibold text-espresso mb-1">What it looks like in real life</h4>
                rachel gets her nails done every three weeks, her brows every six, her botox quarterly, and her hair when she remembers. before nella, that was four calendars and one ongoing feeling of being behind.
                <br /><br />
                <span className="font-medium text-espresso">now it&rsquo;s one dashboard, one reminder system, and a running spend total she actually looks at. her brows haven&rsquo;t been overdue since february.</span>
              </div>

              <div className="pt-4 flex gap-4">
                <Link
                  href="/what-it-does/tracking"
                  className="text-[12px] font-semibold text-[#8F6F3E] hover:underline cursor-pointer inline-flex"
                >
                  see tracking features &rarr;
                </Link>
              </div>
            </motion.div>
          )}

          {activeTab === 'refine' && (
            <motion.div
              key="refine"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-10 max-w-5xl mx-auto"
            >
              <div className="space-y-6 text-center pb-16">
                <div className="inline-flex items-center gap-1.5 justify-center">
                  <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                  <span className="font-display italic text-[11px] text-[#8F6F3E]">the refiner pathway</span>
                  <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                </div>
                <h1 className="font-display font-[600] text-[28px] sm:text-[38px] leading-tight text-espresso tracking-tight text-center">
                  For the woman who has built the routine, but isn't sure it's working.
                </h1>
                <p className="text-[14px] text-grey font-sans text-center max-w-2xl mx-auto">
                  five products in the AM, six in the PM. you want to know what is doing the work and what is along for the ride.
                </p>
              </div>

              <div className="p-6 bg-white border border-[#E8E5DC] rounded-2xl text-[13.5px] text-grey font-sans leading-relaxed shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E]"></div>
                <h3 className="font-semibold text-espresso mb-1">sound like you?</h3>
                you use retinol on monday and thursday. your bathroom cabinet is worth £600. you still break out on your chin. you suspect the new serum is doing it, but you changed three things at once.
              </div>

              <div className="space-y-6 pt-2">
                <h2 className="font-display font-semibold text-[26px] sm:text-[28px] text-espresso mb-2">
                  What nella does about it.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
                  {/* Card 1: Top Left */}
                  <div className="md:col-span-2 lg:col-span-2 relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                    <div className="bg-[#FAF7F2] w-full flex-1 flex items-center justify-center p-6 relative overflow-hidden">
                      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#DEC68B]/10 rounded-full blur-2xl"></div>
                      <div className="w-full max-w-[280px] flex flex-col gap-2 z-10">
                        {['AM Routine', 'PM Routine'].map((item, i) => (
                          <div key={i} className="flex items-center gap-4 bg-white p-2.5 rounded-xl shadow-sm border border-[#E8E5DC] group-hover:translate-x-2 transition-transform duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                            <div className="w-6 h-6 rounded bg-[#FAF7F2] text-[10px] font-bold flex items-center justify-center text-[#8F6F3E]"><Check size={12} /></div>
                            <span className="text-[11px] font-bold text-espresso">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-6 md:p-8">
                      <h4 className="font-display font-semibold text-[20px] text-espresso mb-3">A routine that thinks.</h4>
                      <p className="text-[14px] text-grey font-sans leading-relaxed max-w-xl">tell nella what you own. she builds the AM and PM steps. she warns you if two things clash.</p>
                    </div>
                  </div>

                  {/* Card 3: Right Side Tall */}
                  <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                    <div className="bg-gradient-to-br from-[#FAF7F2] to-[#F5EDE0] w-full flex-1 flex items-center justify-center p-6 relative overflow-hidden min-h-[280px]">
                      <div className="w-full flex flex-col gap-6 z-10 items-center justify-center">
                        {[
                          { score: '82', label: 'Today', stroke: 'stroke-[#8F6F3E]', offset: '40' },
                          { score: '74', label: 'Yesterday', stroke: 'stroke-[#DEC68B]', offset: '60' },
                          { score: '65', label: '2 days ago', stroke: 'stroke-[#E8E5DC]', offset: '90' }
                        ].map((item, i) => (
                          <div key={i} className={`relative w-${i === 0 ? '24' : '16'} h-${i === 0 ? '24' : '16'} bg-white rounded-full flex flex-col items-center justify-center shadow-md border-[3px] border-[#FAF7F2] group-hover:-translate-y-1 transition-transform duration-500`} style={{ transitionDelay: `${i * 100}ms` }}>
                            <svg className="absolute inset-0 w-full h-full -rotate-90">
                              <circle cx="50%" cy="50%" r="46%" fill="transparent" stroke="currentColor" strokeWidth="3" strokeDasharray="200" strokeDashoffset={item.offset} className={`text-transparent ${item.stroke}`} />
                            </svg>
                            <span className={`font-display font-bold text-espresso leading-none ${i === 0 ? 'text-[24px]' : 'text-[16px]'}`}>{item.score}</span>
                            <span className="text-[8px] font-bold text-grey uppercase tracking-wider mt-0.5">{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-6 md:p-8">
                      <h4 className="font-display font-semibold text-[20px] text-espresso mb-3">The glow score.</h4>
                      <p className="text-[14px] text-grey font-sans leading-relaxed">you log how your skin feels. nella plots it against what you've been using. you finally see the pattern.</p>
                    </div>
                  </div>

                  {/* Card 2: Bottom Left */}
                  <div className="md:col-span-2 lg:col-span-2 relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                    <div className="bg-[#FAF7F2] w-full flex-1 flex items-end justify-center p-6 relative overflow-hidden">
                      <div className="w-full max-w-[240px] bg-white h-[60px] rounded-t-2xl shadow-sm border-t border-l border-r border-[#E8E5DC] flex items-end justify-center pb-2 gap-2 z-10 group-hover:h-[70px] transition-all duration-500">
                        <div className="w-6 h-12 bg-[#FAF7F2] rounded border border-[#E8E5DC] group-hover:-translate-y-1 transition-transform"></div>
                        <div className="w-8 h-8 bg-[#1F1410] rounded-full shadow-sm group-hover:-translate-y-2 transition-transform delay-75"></div>
                        <div className="w-6 h-14 bg-white rounded border border-[#E8E5DC] group-hover:-translate-y-1 transition-transform delay-150"></div>
                      </div>
                    </div>
                    <div className="p-6 md:p-8">
                      <h4 className="font-display font-semibold text-[20px] text-espresso mb-3">The product shelf.</h4>
                      <p className="text-[14px] text-grey font-sans leading-relaxed max-w-xl">every product you've ever tried. how much it cost, when you opened it, and whether you'd buy it again.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border border-[#E8E5DC] rounded-2xl text-[13.5px] text-grey font-sans leading-relaxed shadow-sm relative overflow-hidden mt-8">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E]"></div>
                <h4 className="font-semibold text-espresso mb-1">what it looks like in real life</h4>
                priya thought her routine was working. it was fine. but nella's glow score showed her that every time she used the £80 peel, her skin dipped for three days before recovering.
                <br /><br />
                <span className="font-medium text-espresso">she swapped it for a gentler lactic acid. her score went up twelve points. her barrier thanked her.</span>
              </div>

              <div className="pt-4 flex gap-4">
                <Link
                  href="/what-it-does/routines"
                  className="text-[12px] font-semibold text-[#8F6F3E] hover:underline cursor-pointer inline-flex"
                >
                  see routine features &rarr;
                </Link>
              </div>
            </motion.div>
          )}

          {activeTab === 'discover' && (
            <motion.div
              key="discover"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-10 max-w-5xl mx-auto"
            >
              <div className="space-y-6 text-center pb-16">
                <div className="inline-flex items-center gap-1.5 justify-center">
                  <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                  <span className="font-display italic text-[11px] text-[#8F6F3E]">the explorer pathway</span>
                  <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                </div>
                <h1 className="font-display font-[600] text-[28px] sm:text-[38px] leading-tight text-espresso tracking-tight text-center">
                  For the woman whose algorithm is a dangerous place.
                </h1>
                <p className="text-[14px] text-grey font-sans text-center max-w-2xl mx-auto">
                  skin boosters, viral masks, the new £120 serum. you try everything. nella helps you figure out which of them actually work.
                </p>
              </div>

              <div className="p-6 bg-white border border-[#E8E5DC] rounded-2xl text-[13.5px] text-grey font-sans leading-relaxed shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E]"></div>
                <h3 className="font-semibold text-espresso mb-1">sound like you?</h3>
                you bought the LED mask. you tried polynucleotides. you have four different cleansers. you know exactly what is new. but you couldn't honestly tell someone what is actually making the difference.
              </div>

              <div className="space-y-6 pt-2">
                <h2 className="font-display font-semibold text-[26px] sm:text-[28px] text-espresso mb-2">
                  What nella does about it.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
                  {/* Card 1: Top Left */}
                  <div className="md:col-span-2 lg:col-span-2 relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                    <div className="bg-[#FAF7F2] w-full flex-1 flex items-center justify-center p-6 relative overflow-hidden">
                      <div className="flex gap-4 z-10">
                        <div className="bg-white p-3 rounded-xl shadow-sm border border-[#E8E5DC] flex flex-col gap-1 group-hover:-translate-y-2 transition-transform duration-500">
                          <span className="text-[10px] text-grey uppercase font-bold">New Serum</span>
                          <span className="text-[14px] font-display font-bold text-espresso">£120</span>
                        </div>
                        <div className="bg-white p-3 rounded-xl shadow-sm border border-[#E8E5DC] flex flex-col gap-1 group-hover:translate-y-2 transition-transform duration-500 delay-75">
                          <span className="text-[10px] text-grey uppercase font-bold">LED Mask</span>
                          <span className="text-[14px] font-display font-bold text-espresso">£350</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 md:p-8">
                      <h4 className="font-display font-semibold text-[20px] text-espresso mb-3">The real cost of beauty.</h4>
                      <p className="text-[14px] text-grey font-sans leading-relaxed max-w-xl">log what you bought, when you bought it, and how much it was. see your true spend across products and treatments.</p>
                    </div>
                  </div>

                  {/* Card 3: Right Side Tall */}
                  <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                    <div className="bg-gradient-to-br from-[#FAF7F2] to-[#F5EDE0] w-full flex-1 flex items-center justify-center p-6 relative overflow-hidden min-h-[280px]">
                      <div className="w-[85%] h-[80%] bg-white rounded-2xl shadow-sm border border-[#E8E5DC] p-4 flex flex-col gap-3 z-10 group-hover:scale-105 transition-transform duration-500">
                        <div className="flex items-center justify-between border-b border-[#FAF7F2] pb-2">
                          <LineChart size={14} className="text-[#8F6F3E]" />
                          <span className="text-[9px] font-bold text-espresso uppercase">Glow Score</span>
                        </div>
                        <div className="flex-1 w-full flex items-end gap-1.5 pt-4 pb-2">
                          {[30, 40, 35, 50, 70, 85, 80].map((h, i) => (
                            <div key={i} className="flex-1 bg-gradient-to-t from-[#DEC68B]/40 to-[#8F6F3E]/80 rounded-sm" style={{ height: `${h}%` }}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="p-6 md:p-8">
                      <h4 className="font-display font-semibold text-[20px] text-espresso mb-3">The timeline.</h4>
                      <p className="text-[14px] text-grey font-sans leading-relaxed">nella tracks when you started the new serum against your daily glow score. you see the exact moment it started working (or didn't).</p>
                    </div>
                  </div>

                  {/* Card 2: Bottom Left */}
                  <div className="md:col-span-2 lg:col-span-2 relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                    <div className="bg-[#FAF7F2] w-full flex-1 flex items-center justify-center p-6 relative overflow-hidden">
                      <div className="flex items-center gap-3 z-10 bg-white p-3 rounded-2xl shadow-sm border border-[#E8E5DC] group-hover:scale-105 transition-transform duration-500">
                        <div className="px-3 py-1.5 bg-[#FAF7F2] rounded-lg text-[11px] font-bold text-espresso border border-[#E8E5DC]">New Acid</div>
                        <div className="w-6 h-6 rounded-full bg-[#FAF7F2] border border-[#E8E5DC] flex items-center justify-center text-[#8F6F3E] shrink-0">
                          <ShieldAlert size={12} />
                        </div>
                        <div className="px-3 py-1.5 bg-[#FAF7F2] rounded-lg text-[11px] font-bold text-espresso border border-[#E8E5DC]">Current Retinol</div>
                      </div>
                    </div>
                    <div className="p-6 md:p-8">
                      <h4 className="font-display font-semibold text-[20px] text-espresso mb-3">Conflicts, caught.</h4>
                      <p className="text-[14px] text-grey font-sans leading-relaxed max-w-xl">you add a new acid. nella flags that it fights with your current retinol. you save your skin barrier.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border border-[#E8E5DC] rounded-2xl text-[13.5px] text-grey font-sans leading-relaxed shadow-sm relative overflow-hidden mt-8">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E]"></div>
                <h4 className="font-semibold text-espresso mb-1">what it looks like in real life</h4>
                hannah used to try things for a week and move on. her cabinet was full, her skin was angry.
                <br /><br />
                <span className="font-medium text-espresso">now she logs a new product in nella. the timeline shows her it takes three weeks for her glow score to catch up. she stops panic-buying. she lets the actives do their job.</span>
              </div>

              <div className="pt-4 flex gap-4">
                <Link
                  href="/what-it-does/aftercare"
                  className="text-[12px] font-semibold text-[#8F6F3E] hover:underline cursor-pointer inline-flex"
                >
                  see aftercare features &rarr;
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <CtaSection
        title="Stop trying to remember it all."
        subtitle="let nella hold the details so you can focus on the results."
        backgroundClass="bg-transparent"
      />
    </div>
  );
}
