"use client";

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, AlertCircle, Sparkles, HelpCircle, Activity, FileText, Wallet, Bell, ListOrdered, CheckSquare, ShieldAlert, PauseCircle, CalendarDays, MessageCircle, CalendarCheck, PieChart, PenTool, Eye, BrainCircuit, History, Camera, UserCircle, Droplets, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CtaSection from '../../components/CtaSection';

interface WhatItDoesClientProps {
  activeTab: 'hub' | 'tracking' | 'routines' | 'aftercare' | 'insights';
}

export default function WhatItDoesClient({ activeTab }: WhatItDoesClientProps) {
  const router = useRouter();

  const selectTab = (tab: 'hub' | 'tracking' | 'routines' | 'aftercare' | 'insights') => {
    if (tab === 'hub') {
      router.push('/what-it-does');
    } else {
      router.push(`/what-it-does/${tab}`);
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
              What it Does
            </button>
            <span className="text-grey font-normal">&gt;</span>
            <span className="text-espresso">
              {activeTab === 'tracking' && 'Tracking'}
              {activeTab === 'routines' && 'Routines'}
              {activeTab === 'aftercare' && 'Aftercare'}
              {activeTab === 'insights' && 'Insights'}
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
              <div className="space-y-6 pt-4 text-center border-b border-[#E8E5DC] pb-16">
                <div className="inline-flex items-center gap-1.5 justify-center">
                  <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                  <span className="font-display italic text-[13px] text-[#8F6F3E]">what it actually does</span>
                  <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                </div>
                <h1 className="font-display font-[600] text-[36px] sm:text-[48px] tracking-tight text-espresso leading-none text-center">
                  What it actually does.
                </h1>
                <p className="text-[14px] sm:text-[15px] text-grey max-w-2xl mx-auto font-sans leading-relaxed text-center">
                  a closed system for everything you put on and in your body.
                </p>
              </div>

              <div className="space-y-6">
                <div className="text-left space-y-3">
                  <h3 className="font-sans font-[600] text-[18px] text-espresso">The four-step flow.</h3>
                  <p className="text-[13px] text-grey font-sans uppercase tracking-widest font-semibold">
                    four steps. nothing complicated.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Step 1 */}
                  <div className="bg-white border border-[#E8E5DC] rounded-[32px] p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#DEC68B]/10 to-transparent rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                    {/* Graphic */}
                    <div className="w-full h-[150px] bg-[#FAF7F2] rounded-2xl border border-[#E8E5DC] mb-6 flex items-center justify-center p-6 overflow-hidden relative">
                      <div className="flex flex-wrap gap-2.5 justify-center max-w-[240px]">
                        <div className="px-3.5 py-1.5 bg-white border border-[#E8E5DC] rounded-full text-[11px] font-semibold text-espresso shadow-sm transform -rotate-2">Botox</div>
                        <div className="px-3.5 py-1.5 bg-white border border-[#E8E5DC] rounded-full text-[11px] font-semibold text-espresso shadow-sm transform rotate-3">Retinol 1%</div>
                        <div className="px-3.5 py-1.5 bg-[#8F6F3E] text-white rounded-full text-[11px] font-semibold shadow-sm transform -rotate-1">+ Add</div>
                        <div className="px-3.5 py-1.5 bg-white border border-[#E8E5DC] rounded-full text-[11px] font-semibold text-espresso shadow-sm transform rotate-2">Profhilo</div>
                        <div className="px-3.5 py-1.5 bg-white border border-[#E8E5DC] rounded-full text-[11px] font-semibold text-espresso shadow-sm transform -rotate-3">Vitamin C</div>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="mt-auto text-left w-full">
                      <div className="text-[11.5px] font-semibold text-[#8F6F3E] uppercase tracking-wider mb-2">01</div>
                      <h4 className="font-display font-[600] text-[24px] text-espresso leading-tight mb-3">Start</h4>
                      <p className="text-[14px] text-grey font-sans leading-relaxed">
                        tell nella about your treatments and your routine. it takes about five minutes.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-white border border-[#E8E5DC] rounded-[32px] p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#DEC68B]/10 to-transparent rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                    {/* Graphic */}
                    <div className="w-full h-[150px] bg-[#FAF7F2] rounded-2xl border border-[#E8E5DC] mb-6 flex items-center justify-center p-6 overflow-hidden relative">
                      <div className="w-full max-w-[220px] space-y-3">
                        <div className="bg-white p-3 rounded-xl shadow-sm border border-[#E8E5DC] flex items-center justify-between transform group-hover:-translate-y-1 transition-transform duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E8E5DC] flex items-center justify-center text-[#8F6F3E]">
                              <Activity size={14} />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[12px] font-bold text-espresso">Microneedling</span>
                              <span className="text-[10px] text-grey">Dr. Smith Clinic</span>
                            </div>
                          </div>
                          <span className="text-[10px] font-medium text-[#8F6F3E]">Logged</span>
                        </div>
                        <div className="bg-white p-3 rounded-xl shadow-sm border border-[#E8E5DC] flex items-center justify-between opacity-70 transform group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E8E5DC] flex items-center justify-center text-[#8F6F3E]">
                              <Droplets size={14} />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[12px] font-bold text-espresso">PM Routine</span>
                              <span className="text-[10px] text-grey">4 products</span>
                            </div>
                          </div>
                          <span className="text-[10px] font-medium text-[#8F6F3E]">Logged</span>
                        </div>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="mt-auto text-left w-full">
                      <div className="text-[11.5px] font-semibold text-[#8F6F3E] uppercase tracking-wider mb-2">02</div>
                      <h4 className="font-display font-[600] text-[24px] text-espresso leading-tight mb-3">Log</h4>
                      <p className="text-[14px] text-grey font-sans leading-relaxed">
                        every treatment, every product, every day. one tap each.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-white border border-[#E8E5DC] rounded-[32px] p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#DEC68B]/10 to-transparent rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                    {/* Graphic */}
                    <div className="w-full h-[150px] bg-[#FAF7F2] rounded-2xl border border-[#E8E5DC] mb-6 flex items-center justify-center p-6 overflow-hidden relative">
                      <div className="flex flex-col items-center gap-4">
                        <div className="relative">
                          <svg className="w-20 h-20 transform -rotate-90">
                            <circle cx="40" cy="40" r="36" stroke="#E8E5DC" strokeWidth="6" fill="none" />
                            <circle cx="40" cy="40" r="36" stroke="#8F6F3E" strokeWidth="6" fill="none" strokeDasharray="226" strokeDashoffset="30" className="transition-all duration-1000 ease-out" />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center flex-col">
                            <span className="text-[22px] font-display font-bold text-espresso leading-none">86</span>
                            <span className="text-[8px] text-grey uppercase tracking-wider mt-0.5">Score</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="mt-auto text-left w-full">
                      <div className="text-[11.5px] font-semibold text-[#8F6F3E] uppercase tracking-wider mb-2">03</div>
                      <h4 className="font-display font-[600] text-[24px] text-espresso leading-tight mb-3">See</h4>
                      <p className="text-[14px] text-grey font-sans leading-relaxed">
                        your dashboard fills out. your score calibrates over fourteen days.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="bg-white border border-[#E8E5DC] rounded-[32px] p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#DEC68B]/10 to-transparent rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                    {/* Graphic */}
                    <div className="w-full h-[150px] bg-[#FAF7F2] rounded-2xl border border-[#E8E5DC] mb-6 flex items-center justify-center p-6 overflow-hidden relative">
                      <div className="w-full max-w-[220px] space-y-3 relative z-10">
                        <div className="bg-white p-4 rounded-xl shadow-md border border-[#E8E5DC] relative transform group-hover:scale-105 transition-transform duration-300">
                          <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#C94A4A] rounded-full border-[3px] border-white flex items-center justify-center text-white">
                            <span className="text-[10px] font-bold leading-none">!</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5"><BrainCircuit size={16} className="text-[#8F6F3E]" /></div>
                            <div>
                              <div className="text-[12px] font-bold text-espresso mb-1">Routine Updated</div>
                              <div className="text-[10px] text-grey leading-tight">Retinol has been paused for 7 days due to your microneedling treatment.</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="mt-auto text-left w-full">
                      <div className="text-[11.5px] font-semibold text-[#8F6F3E] uppercase tracking-wider mb-2">04</div>
                      <h4 className="font-display font-[600] text-[24px] text-espresso leading-tight mb-3">Know</h4>
                      <p className="text-[14px] text-grey font-sans leading-relaxed">
                        patterns emerge. aftercare runs itself. the picture is finally whole.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="font-sans font-[600] text-[18px] text-espresso">Explore the features.</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      id: 'tracking' as const,
                      eyebrow: 'tracking',
                      title: 'Know your history.',
                      desc: 'dates, units, prices, and clinics. the complete record of your treatments.',
                      link: 'see tracking'
                    },
                    {
                      id: 'routines' as const,
                      eyebrow: 'routines',
                      title: 'Science, sorted.',
                      desc: 'tell us what you own. we tell you what order to put it in, and what not to mix.',
                      link: 'see routines'
                    },
                    {
                      id: 'aftercare' as const,
                      eyebrow: 'aftercare',
                      title: 'Recover properly.',
                      desc: 'automated, day-by-day healing protocols for when you’ve had work done.',
                      link: 'see aftercare'
                    },
                    {
                      id: 'insights' as const,
                      eyebrow: 'insights',
                      title: 'See the truth.',
                      desc: 'your glow score plotted against your spend and your products. see what actually works.',
                      link: 'see insights'
                    }
                  ].map((card) => (
                    <div
                      key={card.id}
                      onClick={() => selectTab(card.id)}
                      className="p-6 bg-white border border-[#E8E5DC] rounded-3xl shadow-sm hover:shadow-md hover:border-[#8F6F3E]/40 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between space-y-4 text-left block"
                    >
                      <div className="space-y-2">
                        <div className="text-[11.5px] font-semibold text-[#8F6F3E] lowercase tracking-wider mb-1">{card.eyebrow}</div>
                        <span className="font-sans font-[600] text-[18px] text-espresso block">{card.title}</span>
                        <p className="text-[12px] text-grey font-sans leading-relaxed">{card.desc}</p>
                      </div>
                      <span className="text-[11.5px] font-semibold text-[#8F6F3E] inline-flex items-center gap-1 hover:underline">
                        {card.link} &rarr;
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'tracking' && (
            <motion.div
              key="tracking"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-10 max-w-5xl mx-auto"
            >
              <div className="space-y-6 text-center border-b border-[#E8E5DC] pb-16">
                <div className="inline-flex items-center gap-1.5 justify-center">
                  <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                  <span className="font-display italic text-[11px] text-[#8F6F3E]">tracking deep dive</span>
                  <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                </div>
                <h1 className="font-display font-[600] text-[28px] sm:text-[38px] leading-tight text-espresso tracking-tight text-center">
                  Every treatment in one place.
                </h1>
                <p className="text-[14px] text-grey font-sans text-center max-w-2xl mx-auto">
                  log it once, see it forever.
                </p>
              </div>

              <div className="space-y-6 pt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
                  {/* Card 1: Top Left (The total record) */}
                  <div className="md:col-span-2 lg:col-span-2 relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                    <div className="bg-[#FAF7F2] w-full flex-1 flex items-center justify-center p-6 border-b border-[#E8E5DC]/60 relative overflow-hidden">
                      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#DEC68B]/10 rounded-full blur-2xl"></div>
                      <div className="w-full max-w-[280px] flex flex-col gap-2 z-10">
                        {['Botox 50 units', 'Profhilo Session 1'].map((item, i) => (
                          <div key={i} className="flex items-center justify-between bg-white p-3 rounded-2xl shadow-sm border border-[#E8E5DC] group-hover:-translate-y-1 transition-transform duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-warm-ivory flex items-center justify-center text-[#8F6F3E]">
                                <History size={14} />
                              </div>
                              <span className="text-[12px] font-bold text-espresso">{item}</span>
                            </div>
                            <span className="text-[11px] font-medium text-grey">Oct 12</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-5 md:p-6 space-y-2.5">
                      <h4 className="font-display font-semibold text-[16px] text-espresso mb-1">The total record.</h4>
                      <p className="text-[13.5px] text-grey font-sans leading-relaxed max-w-xl">dates, units, prices, and clinics for every treatment you get. no more searching your bank app to remember what you paid last time.</p>
                    </div>
                  </div>

                  {/* Card 3: Right Side Tall (Visual proof) */}
                  <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                    <div className="bg-gradient-to-br from-[#FAF7F2] to-[#F5EDE0] w-full flex-1 flex items-center justify-center p-8 md:p-12 lg:p-14 border-b border-[#E8E5DC]/60 relative overflow-hidden">
                      <div className="relative w-full max-w-[160px] h-[280px] flex items-center justify-center z-10">
                         <div className="absolute top-0 w-32 h-40 bg-white rounded-2xl shadow-md border border-[#E8E5DC] p-2 flex flex-col items-center gap-2 rotate-[-6deg] group-hover:rotate-[-10deg] group-hover:-translate-x-2 transition-all duration-500 z-10">
                           <div className="w-full flex-1 bg-[#FAF7F2] rounded-xl flex items-center justify-center"><UserCircle size={32} className="text-[#8F6F3E]/40" /></div>
                           <span className="text-[9px] font-bold text-grey">Day 1</span>
                         </div>
                         <div className="absolute top-[60px] w-32 h-40 bg-white rounded-2xl shadow-md border border-[#E8E5DC] p-2 flex flex-col items-center gap-2 rotate-[4deg] group-hover:rotate-[8deg] group-hover:translate-x-2 transition-all duration-500 z-20">
                           <div className="w-full flex-1 bg-[#F5EDE0] rounded-xl flex items-center justify-center"><UserCircle size={32} className="text-[#8F6F3E]/60" /></div>
                           <span className="text-[9px] font-bold text-grey">Day 3</span>
                         </div>
                         <div className="absolute top-[120px] w-32 h-40 bg-white rounded-2xl shadow-md border border-[#E8E5DC] p-2 flex flex-col items-center gap-2 rotate-[-2deg] group-hover:rotate-[-4deg] group-hover:translate-y-2 transition-all duration-500 z-30">
                           <div className="w-full flex-1 bg-[#DEC68B]/20 rounded-xl flex items-center justify-center"><UserCircle size={32} className="text-[#8F6F3E]" /></div>
                           <span className="text-[9px] font-bold text-grey">Day 7</span>
                         </div>
                      </div>
                    </div>
                    <div className="p-5 md:p-6 space-y-2.5">
                      <h4 className="font-display font-semibold text-[16px] text-espresso mb-1">Visual proof.</h4>
                      <p className="text-[13.5px] text-grey font-sans leading-relaxed">save your before and afters securely. know exactly what half a mil of filler actually looked like on you.</p>
                    </div>
                  </div>

                  {/* Card 2: Bottom Left (Smart cycles) */}
                  <div className="md:col-span-2 lg:col-span-2 relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                    <div className="bg-[#FAF7F2] w-full flex-1 flex items-center justify-center p-6 border-b border-[#E8E5DC]/60 relative overflow-hidden">
                      <div className="w-full max-w-[280px] bg-white p-4 rounded-2xl shadow-sm border border-[#E8E5DC] flex items-center gap-4 z-10 group-hover:-translate-y-2 transition-transform duration-500">
                        <div className="relative w-14 h-14">
                          <svg className="absolute inset-0 w-full h-full -rotate-90">
                            <circle cx="50%" cy="50%" r="46%" fill="transparent" stroke="#E8E5DC" strokeWidth="4" />
                            <circle cx="50%" cy="50%" r="46%" fill="transparent" stroke="#8F6F3E" strokeWidth="4" strokeDasharray="160" strokeDashoffset="40" className="group-hover:strokeDashoffset-0 transition-all duration-1000 ease-out" />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-espresso">3 wks</div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[12px] font-bold text-espresso">Nails Due Soon</span>
                          <span className="text-[10px] text-grey">Time to book your refill.</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 md:p-6 space-y-2.5">
                      <h4 className="font-display font-semibold text-[16px] text-espresso mb-1">Smart cycles.</h4>
                      <p className="text-[13.5px] text-grey font-sans leading-relaxed max-w-xl">tell nella you get your nails done every three weeks. she quietly tracks the cycle and nudges you when it's time to book.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'routines' && (
            <motion.div
              key="routines"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-10 max-w-5xl mx-auto"
            >
              <div className="space-y-6 text-center border-b border-[#E8E5DC] pb-16">
                <div className="inline-flex items-center gap-1.5 justify-center">
                  <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                  <span className="font-display italic text-[11px] text-[#8F6F3E]">routines deep dive</span>
                  <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                </div>
                <h1 className="font-display font-[600] text-[28px] sm:text-[38px] leading-tight text-espresso tracking-tight text-center">
                  Science, sorted.
                </h1>
                <p className="text-[14px] text-grey font-sans text-center max-w-2xl mx-auto">
                  tell us what you own. we tell you what order to put it in, and what not to mix.
                </p>
              </div>

              <div className="space-y-6 pt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
                  {/* Card 1: Top Left (The perfect order) */}
                  <div className="md:col-span-2 lg:col-span-2 relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                    <div className="bg-[#FAF7F2] w-full flex-1 flex items-center justify-center p-6 border-b border-[#E8E5DC]/60 relative overflow-hidden">
                      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#DEC68B]/10 rounded-full blur-2xl"></div>
                      <div className="w-full max-w-[280px] flex flex-col gap-2 z-10">
                        {['Cleanser', 'Vitamin C', 'Moisturiser'].map((item, i) => (
                          <div key={i} className="flex items-center gap-4 bg-white p-2.5 rounded-xl shadow-sm border border-[#E8E5DC] group-hover:translate-x-2 transition-transform duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                            <div className="w-5 h-5 rounded-full bg-warm-ivory text-[9px] font-bold flex items-center justify-center text-[#8F6F3E]">{i + 1}</div>
                            <span className="text-[11px] font-bold text-espresso">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-5 md:p-6 space-y-2.5">
                      <h4 className="font-display font-semibold text-[16px] text-espresso mb-1">The perfect order.</h4>
                      <p className="text-[13.5px] text-grey font-sans leading-relaxed max-w-xl">cleanser, toner, actives, hydration, SPF. nella knows the science-based correct order so you don't have to guess.</p>
                    </div>
                  </div>

                  {/* Card 3: Right Side Tall (Visual shelves) */}
                  <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                    <div className="bg-gradient-to-br from-[#FAF7F2] to-[#F5EDE0] w-full flex-1 flex items-center justify-center p-8 md:p-12 border-b border-[#E8E5DC]/60 relative overflow-hidden">
                      <div className="w-[140px] h-[260px] bg-[#FAF7F2] border-[4px] border-white rounded-2xl shadow-inner flex flex-col justify-evenly items-center p-2 z-10 group-hover:scale-105 transition-transform duration-500">
                        <div className="w-full border-b-4 border-white pb-2 flex justify-center">
                           <div className="w-8 h-16 bg-[#F5EDE0] rounded-md border border-[#E8E5DC] shadow-sm relative"><div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full"></div></div>
                        </div>
                        <div className="w-full border-b-4 border-white pb-2 flex justify-center">
                           <div className="w-10 h-14 bg-white rounded-md border border-[#E8E5DC] shadow-sm relative"><div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-3 bg-[#FAF7F2] rounded-sm"></div></div>
                        </div>
                        <div className="w-full pb-2 flex justify-center">
                           <div className="w-12 h-12 bg-[#DEC68B]/20 rounded-full border border-[#E8E5DC] shadow-sm relative"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 md:p-6 space-y-2.5">
                      <h4 className="font-display font-semibold text-[16px] text-espresso mb-1">Visual shelves.</h4>
                      <p className="text-[13.5px] text-grey font-sans leading-relaxed">your exact products, arranged as they should be on your shelf. swipe to log that you've used them.</p>
                    </div>
                  </div>

                  {/* Card 2: Bottom Left (Conflict checking) */}
                  <div className="md:col-span-2 lg:col-span-2 relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                    <div className="bg-[#FAF7F2] w-full flex-1 flex items-center justify-center p-6 border-b border-[#E8E5DC]/60 relative overflow-hidden">
                      <div className="flex items-center gap-3 z-10 bg-white p-3 rounded-2xl shadow-sm border border-[#E8E5DC] group-hover:scale-105 transition-transform duration-500">
                        <div className="px-3 py-1.5 bg-[#FAF7F2] rounded-lg text-[11px] font-bold text-espresso border border-[#E8E5DC]">Retinol</div>
                        <div className="w-6 h-6 rounded-full bg-[#FAF7F2] border border-[#E8E5DC] flex items-center justify-center text-[#8F6F3E] shrink-0">
                          <ShieldAlert size={12} />
                        </div>
                        <div className="px-3 py-1.5 bg-[#FAF7F2] rounded-lg text-[11px] font-bold text-espresso border border-[#E8E5DC]">AHA/BHA</div>
                      </div>
                    </div>
                    <div className="p-5 md:p-6 space-y-2.5">
                      <h4 className="font-display font-semibold text-[16px] text-espresso mb-1">Built-in conflict checking.</h4>
                      <p className="text-[13.5px] text-grey font-sans leading-relaxed max-w-xl">retinol and vitamin C. AHA and BHA. nella knows which actives fight and automatically pauses conflicts to save your skin barrier.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'aftercare' && (
            <motion.div
              key="aftercare"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-10 max-w-5xl mx-auto"
            >
              <div className="space-y-6 text-center border-b border-[#E8E5DC] pb-16">
                <div className="inline-flex items-center gap-1.5 justify-center">
                  <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                  <span className="font-display italic text-[11px] text-[#8F6F3E]">aftercare deep dive</span>
                  <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                </div>
                <h1 className="font-display font-[600] text-[28px] sm:text-[38px] leading-tight text-espresso tracking-tight text-center">
                  Recover properly.
                </h1>
                <p className="text-[14px] text-grey font-sans text-center max-w-2xl mx-auto">
                  you pay for the treatment. you get the result in the recovery.
                </p>
              </div>

              <div className="space-y-6 pt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
                  {/* Card 1: Top Left (Progress photos) */}
                  <div className="md:col-span-2 lg:col-span-2 relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                    <div className="h-[180px] bg-[#FAF7F2] w-full flex-1 flex items-center justify-center p-6 border-b border-[#E8E5DC]/60 relative overflow-hidden">
                      <div className="flex gap-2 z-10 w-full max-w-[280px]">
                        {[1, 2, 3, 4, 5, 6, 7].map((day, i) => (
                          <div key={i} className={`flex-1 rounded-lg border border-[#E8E5DC] flex flex-col items-center justify-center py-2 transition-transform duration-500 delay-${i * 75} ${i < 3 ? 'bg-[#1F1410] text-[#FAF7F2] border-[#1F1410] group-hover:-translate-y-2' : 'bg-white text-grey group-hover:translate-y-1'}`}>
                            <span className="text-[9px] font-bold uppercase mb-1">D{day}</span>
                            {i < 3 ? <PauseCircle size={12} className="text-[#8F6F3E]" /> : <Check size={12} className="text-[#DEC68B]" />}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-5 md:p-6 space-y-2.5">
                      <h4 className="font-display font-semibold text-[16px] text-espresso mb-1">Progress photos.</h4>
                      <p className="text-[13.5px] text-grey font-sans leading-relaxed max-w-xl">track the healing process. log photos daily to see exactly how quickly the redness fades and the results appear.</p>
                    </div>
                  </div>

                  {/* Card 3: Right Side Tall (The strict rules) */}
                  <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                    <div className="bg-gradient-to-br from-[#FAF7F2] to-[#F5EDE0] w-full flex-1 flex items-center justify-center p-8 border-b border-[#E8E5DC]/60 relative overflow-hidden">
                      <div className="w-[90%] max-w-[220px] space-y-3 z-10">
                        {[
                          { title: 'No Sweating', subtitle: 'For 48 hours' },
                          { title: 'No Makeup', subtitle: 'For 24 hours' },
                          { title: 'Avoid Sun', subtitle: 'For 7 days' }
                        ].map((rule, i) => (
                          <div key={i} className="bg-white rounded-2xl shadow-sm border border-[#E8E5DC] p-4 flex items-center gap-3 group-hover:-translate-y-1 transition-transform duration-500" style={{transitionDelay: `${i*100}ms`}}>
                             <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E8E5DC] flex items-center justify-center text-[#8F6F3E] shrink-0">
                                <MessageCircle size={14} />
                             </div>
                             <div className="space-y-1 flex-1">
                                <div className="text-[11px] font-bold text-espresso">{rule.title}</div>
                                <div className="text-[9px] text-grey uppercase tracking-wider">{rule.subtitle}</div>
                             </div>
                             <Check size={14} className="text-[#DEC68B]" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-5 md:p-6 space-y-2.5">
                      <h4 className="font-display font-semibold text-[16px] text-espresso mb-1">The strict rules.</h4>
                      <p className="text-[13.5px] text-grey font-sans leading-relaxed">no sweating for 48 hours. no makeup for 24. the strict clinical rules for every procedure are finally accessible without Googling.</p>
                    </div>
                  </div>

                  {/* Card 2: Bottom Left (Dynamic recovery) */}
                  <div className="md:col-span-2 lg:col-span-2 relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                    <div className="bg-[#FAF7F2] w-full flex-1 flex items-center justify-center p-6 border-b border-[#E8E5DC]/60 relative overflow-hidden">
                      <div className="w-full max-w-[280px] space-y-2 z-10 group-hover:-translate-y-2 transition-transform duration-500">
                        <div className="flex items-center justify-between bg-white px-4 py-3 rounded-xl border border-[#E8E5DC] shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded bg-[#FAF7F2] flex items-center justify-center text-[#8F6F3E]"><Moon size={12} /></div>
                            <span className="text-[12px] font-bold text-espresso">Retinol</span>
                          </div>
                          <div className="px-2 py-1 bg-white border border-[#E8E5DC] text-[#8F6F3E] text-[9px] font-bold uppercase rounded flex items-center gap-1">
                            <PauseCircle size={10} /> Paused
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 md:p-6 space-y-2.5">
                      <h4 className="font-display font-semibold text-[16px] text-espresso mb-1">Dynamic recovery.</h4>
                      <p className="text-[13.5px] text-grey font-sans leading-relaxed max-w-xl">when you log a treatment, nella automatically rewrites your routine checklist for the recovery period. no acids, no retinol, just hydration.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'insights' && (
            <motion.div
              key="insights"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-10 max-w-5xl mx-auto"
            >
              <div className="space-y-6 text-center border-b border-[#E8E5DC] pb-16">
                <div className="inline-flex items-center gap-1.5 justify-center">
                  <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                  <span className="font-display italic text-[11px] text-[#8F6F3E]">insights deep dive</span>
                  <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                </div>
                <h1 className="font-display font-[600] text-[28px] sm:text-[38px] leading-tight text-espresso tracking-tight text-center">
                  See the truth.
                </h1>
                <p className="text-[14px] text-grey font-sans text-center max-w-2xl mx-auto">
                  your glow score plotted against your spend and your products. see what actually works.
                </p>
              </div>

              <div className="space-y-6 pt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
                  {/* Card 1: Top Left (The glow score) */}
                  <div className="md:col-span-2 lg:col-span-2 relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                    <div className="bg-[#FAF7F2] w-full flex-1 flex items-center justify-center p-6 border-b border-[#E8E5DC]/60 relative overflow-hidden">
                      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#DEC68B]/10 rounded-full blur-2xl"></div>
                      <div className="relative w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-lg border-[4px] border-[#FAF7F2] z-10 group-hover:scale-110 transition-transform duration-700">
                        <svg className="absolute inset-0 w-full h-full -rotate-90">
                          <circle cx="50%" cy="50%" r="46%" fill="transparent" stroke="#DEC68B" strokeWidth="4" strokeDasharray="200" strokeDashoffset="30" className="transition-all duration-1500 ease-out group-hover:strokeDashoffset-0" />
                        </svg>
                        <div className="text-[32px] font-display font-bold text-espresso leading-none">88</div>
                      </div>
                    </div>
                    <div className="p-5 md:p-6 space-y-2.5">
                      <h4 className="font-display font-semibold text-[16px] text-espresso mb-1">The glow score.</h4>
                      <p className="text-[13.5px] text-grey font-sans leading-relaxed max-w-xl">a daily metric from 0 to 100 based on your consistency and check-ins. finally, a number that moves when your skin does.</p>
                    </div>
                  </div>

                  {/* Card 3: Right Side Tall (Spending truth) */}
                  <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                    <div className="bg-gradient-to-br from-[#FAF7F2] to-[#F5EDE0] w-full flex-1 flex items-end justify-center pt-8 px-6 border-b border-[#E8E5DC]/60 relative overflow-hidden min-h-[280px]">
                      <div className="w-full h-full flex items-end justify-center gap-4 z-10 px-4 pb-4">
                        <div className="w-12 bg-[#DEC68B] rounded-t-xl h-[40%] group-hover:h-[60%] transition-all duration-500 shadow-sm relative flex items-start justify-center pt-2"><span className="text-[10px] font-bold text-espresso/50 -rotate-90 origin-center translate-y-6">Mar</span></div>
                        <div className="w-12 bg-[#8F6F3E] rounded-t-xl h-[80%] group-hover:h-[90%] transition-all duration-500 delay-75 shadow-sm relative flex items-start justify-center pt-2"><span className="text-[10px] font-bold text-white/50 -rotate-90 origin-center translate-y-6">Apr</span></div>
                        <div className="w-12 bg-[#1F1410] rounded-t-xl h-[50%] group-hover:h-[70%] transition-all duration-500 delay-150 shadow-sm relative flex items-start justify-center pt-2"><span className="text-[10px] font-bold text-white/50 -rotate-90 origin-center translate-y-6">May</span></div>
                      </div>
                    </div>
                    <div className="p-5 md:p-6 space-y-2.5">
                      <h4 className="font-display font-semibold text-[16px] text-espresso mb-1">Spending truth.</h4>
                      <p className="text-[13.5px] text-grey font-sans leading-relaxed">every pound you've spent, categorised automatically. know exactly what your routine costs to maintain.</p>
                    </div>
                  </div>

                  {/* Card 2: Bottom Left (The monthly wrap) */}
                  <div className="md:col-span-2 lg:col-span-2 relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
                    <div className="bg-[#FAF7F2] w-full flex-1 flex items-center justify-center p-6 border-b border-[#E8E5DC]/60 relative overflow-hidden">
                      <div className="w-48 h-32 bg-gradient-to-br from-[#1F1410] to-[#3A2418] rounded-xl shadow-lg border border-[#3A2418] p-4 flex flex-col justify-between z-10 group-hover:scale-105 group-hover:rotate-2 transition-transform duration-500">
                        <div className="flex justify-between items-start text-[#FAF7F2]">
                          <div className="space-y-1">
                            <span className="text-[10px] uppercase font-bold tracking-wider opacity-70">October Wrap</span>
                            <div className="text-[18px] font-display font-semibold">£240</div>
                          </div>
                          <CalendarCheck size={16} className="text-[#DEC68B]" />
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-[#FAF7F2] bg-white/10 px-2 py-1 rounded w-max">
                          <Check size={10} className="text-[#DEC68B]" /> 21/30 Consistency
                        </div>
                      </div>
                    </div>
                    <div className="p-5 md:p-6 space-y-2.5">
                      <h4 className="font-display font-semibold text-[16px] text-espresso mb-1">The monthly wrap.</h4>
                      <p className="text-[13.5px] text-grey font-sans leading-relaxed max-w-xl">how you did this month. your consistency score, your spend, your missed check-ins. the data you need to adjust for next month.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <CtaSection
        title="Take control of your vanity."
        subtitle="stop throwing money at vague skincare routines. track, refine, and see what works."
        backgroundClass="bg-transparent"
      />
    </div>
  );
}
