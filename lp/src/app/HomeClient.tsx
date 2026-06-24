"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, ChevronDown, Check, ArrowUpRight, Sparkles, PenTool, Eye, BrainCircuit, Activity, Droplets } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import SurgicalMobileMockup from '../components/SurgicalMobileMockup';
import CtaSection from '../components/CtaSection';
import PhaseAwareCta from '../components/PhaseAwareCta';
import { IS_PRE_LAUNCH } from '../config/phase';

export default function HomeClient() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      q: 'is nella free?',
      a: 'yes. nella Core is free to use, forever. no credit card, no time limit. Pro is £4.99 a month if you want the deeper picture, with a 7 day free trial.'
    },
    {
      q: 'what does nella actually track?',
      a: 'every treatment, every product, every cost, every check-in. injectables, facials, hair, nails, brows, lashes, body, skincare. the lot, in one place.'
    },
    {
      q: 'is it just for women who get botox?',
      a: 'no. nella is for anyone who wants to own their beauty life. injectables, facials, hair, skincare, the routine you\'ve been refining for years, or the one you\'re still figuring out.'
    },
    {
      q: 'does nella share my data?',
      a: 'no. nella does not sell your data, run ads, or share anything with brands or clinics. it is yours, and it stays yours.'
    },
    {
      q: 'when is the app available?',
      a: 'nella launches on iOS in August 2026. android follows. join the waitlist and you\'ll be the first to know.'
    }
  ];

  return (
    <div className="space-y-0">
      {/* SECTION 1: HERO — contained espresso gradient block */}
      <section id="hero" className="relative px-4 pt-0 md:px-8 md:pt-0 z-20">
        <div
          className="relative rounded-[28px] md:rounded-[36px] overflow-visible"
          style={{ background: 'linear-gradient(160deg, #3A2016 0%, #2C1810 50%, #20100A 100%)' }}
        >
          {/* Inner glow */}
          <div className="absolute top-0 right-0 w-[60%] h-[60%] rounded-full bg-[#C4A067]/10 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] rounded-full bg-[#8F6F3E]/8 blur-[60px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 pt-6 pb-0 md:pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            {/* Left: text content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-4 md:space-y-6 z-10 pb-0 self-start lg:pt-12">
              <div className="flex items-center gap-1.5">
                <span className="font-display italic text-[13px] text-[#C4A067]/90">beauty companion</span>
              </div>
              <h1 className="font-display font-[600] text-[32px] sm:text-[44px] md:text-[50px] leading-[1.05] tracking-tight text-[#FAF7F2] text-left">
                The beauty companion that keeps up with you.
              </h1>

              <p className="text-[14px] sm:text-[15px] text-[#FAF7F2]/70 leading-relaxed max-w-xl text-balance">
                nella remembers everything, so you do not have to.
              </p>

              {/* Hero CTA Buttons */}
              <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <PhaseAwareCta
                  className="group px-6 py-4 rounded-full text-[#1F1410] text-[13.5px] font-semibold tracking-wide flex items-center justify-center gap-2.5 shadow-lg transition-all duration-300 transform active:scale-98 cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, #DEC68B 0%, #C4A067 50%, #B8924A 100%)'
                  }}
                >
                  <span>{IS_PRE_LAUNCH ? 'join the waitlist' : 'get nella on the App Store'}</span>
                  <ArrowRight size={15} className="text-[#1F1410] transition-transform duration-300 group-hover:translate-x-1" />
                </PhaseAwareCta>

                <Link
                  href="/why-nella"
                  className="px-6 py-4 rounded-full bg-white/10 border border-white/20 text-[#FAF7F2] text-[13.5px] font-semibold tracking-wide flex items-center justify-center hover:bg-white/15 transition-all duration-300 cursor-pointer"
                >
                  Why nella exists
                </Link>
              </div>

              {/* App Store Badge Row */}
              <div className="flex items-center gap-6 pt-3 w-full max-w-md mt-1">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-[20px] font-bold tracking-tight text-[#FAF7F2] font-mono leading-none">4.8</span>
                    <div className="flex text-[#C4A067]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={11} fill="currentColor" className="stroke-none" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] text-[#FAF7F2]/50 tracking-wider font-semibold mt-1 text-left">
                    app store rating
                  </span>
                </div>
                <div className="h-8 w-[1.5px] bg-white/20"></div>
                <button
                  onClick={() => router.push('/waitlist')}
                  className="bg-white hover:bg-white/90 text-black px-3.5 py-1.5 rounded-full flex items-center gap-2 transition-all border border-transparent cursor-pointer text-left shadow-md"
                >
                  <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5 C17.88,20.74 17.00,21.95 15.66,21.97 C14.32,22.00 13.89,21.18 12.37,21.18 C10.84,21.18 10.37,21.95 9.10,22.00 C7.79,22.05 6.80,20.68 5.96,19.47 C4.25,17.00 2.94,12.45 4.70,9.39 C5.57,7.87 7.13,6.91 8.82,6.88 C10.10,6.86 11.32,7.75 12.11,7.75 C12.89,7.75 14.37,6.68 15.92,6.84 C16.57,6.87 18.39,7.1 19.56,8.82 C19.47,8.88 17.39,10.1 17.41,12.63 C17.44,15.65 20.06,16.66 20.10,16.67 C20.08,16.74 19.67,18.11 18.71,19.5 M15.97,4.17 C16.63,3.37 17.07,2.28 16.95,1 C16.03,1.04 14.90,1.62 14.24,2.41 C13.68,3.07 13.19,4.18 13.35,5.43 C14.37,5.51 15.42,4.91 15.97,4.17 Z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-[7.5px] text-black/60 font-bold uppercase leading-none">download on the</span>
                    <span className="text-[11.5px] font-bold font-sans leading-tight mt-0.5 text-black">App Store</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right: mockup — extends past bottom of banner */}
            <div className="lg:col-span-5 relative flex justify-center items-end z-10 -mb-24 md:-mb-36">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full max-w-[360px] sm:max-w-[400px] md:max-w-[440px] z-10"
              >
                <SurgicalMobileMockup initialScreen="splash" autoPlay />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM */}
      <section className="pt-36 md:pt-56 pb-12 md:pb-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="text-left space-y-4">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="font-display italic text-[13px] text-[#8F6F3E]">the problem</span>
            </div>
            <h2 className="font-display font-[600] text-[28px] sm:text-[36px] text-espresso tracking-tight text-left">
              You're already doing the work
            </h2>
          </div>

          <div className="space-y-4 font-sans text-[13.5px] text-grey leading-relaxed text-balance">
            <p className="border-l-2 border-[#8C5249]/30 pl-4 text-left">
              the treatments are booked, your routine is built. the products are bought and your aftercare is sort of remembered. it lives in your camera roll, your appointment threads, the leaflets in the bottom of your bag, the saved TikToks and that basket from last tuesday. <span className="font-medium text-espresso">you've been doing all of it. just not in one place.</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: FOUR THINGS */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#FAF7F2] to-[#F5EDE0]">
        <div className="max-w-7xl mx-auto px-6 space-y-8 md:space-y-12">
          <div className="text-center space-y-3">
            <div className="flex items-center gap-1.5 justify-center mb-2">
              <span className="font-display italic text-[13px] text-[#8F6F3E]">four things</span>
            </div>
            <h2 className="font-display font-[600] text-[32px] sm:text-[40px] text-espresso tracking-tight text-center">
              Four things, done properly.
            </h2>
            <p className="text-[13.5px] text-grey font-sans">
              your treatments, your routines, your aftercare, and the bits you would have missed, finally seen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/what-it-does/tracking"
              className="p-6 bg-white border border-[#E8E5DC] rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between space-y-4 block"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-[1px] bg-[#C4A067]"></div>
                  <span className="font-display italic text-[11px] text-[#8F6F3E]">when was the last one?</span>
                </div>
                <h3 className="font-sans font-[600] text-[18px] text-espresso">Treatments</h3>
                <p className="text-[12px] text-grey font-sans leading-relaxed">
                  every treatment in one place. injectables, facials, hair, nails, brows, lashes, body. across every clinic, with every cost. nella nudges you before each one's due.
                </p>
              </div>
            </Link>

            <Link
              href="/what-it-does/routines"
              className="p-6 bg-white border border-[#E8E5DC] rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between space-y-4 block"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-[1px] bg-[#C4A067]"></div>
                  <span className="font-display italic text-[11px] text-[#8F6F3E]">what's tonight?</span>
                </div>
                <h3 className="font-sans font-[600] text-[18px] text-espresso">Routines</h3>
                <p className="text-[12px] text-grey font-sans leading-relaxed">
                  build your AM and PM routine and nella runs it, adjusts it, and tells you what's on tonight. the order is right. the actives are spaced. conflicts paused.
                </p>
              </div>
            </Link>

            <Link
              href="/what-it-does/aftercare"
              className="p-6 bg-white border border-[#E8E5DC] rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between space-y-4 block"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-[1px] bg-[#C4A067]"></div>
                  <span className="font-display italic text-[11px] text-[#8F6F3E]">you're home. now what?</span>
                </div>
                <h3 className="font-sans font-[600] text-[18px] text-espresso">Aftercare</h3>
                <p className="text-[12px] text-grey font-sans leading-relaxed">
                  what to do, what to pause, what to put back on. day by day.
                </p>
              </div>
            </Link>

            <Link
              href="/what-it-does/insights"
              className="p-6 bg-white border border-[#E8E5DC] rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between space-y-4 block"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-[1px] bg-[#C4A067]"></div>
                  <span className="font-display italic text-[11px] text-[#8F6F3E]">how's it actually going?</span>
                </div>
                <h3 className="font-sans font-[600] text-[18px] text-espresso">Insights</h3>
                <p className="text-[12px] text-grey font-sans leading-relaxed">
                  a daily score, a monthly wrap, an ongoing spend. the patterns you could not see before.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE INTELLIGENCE MOMENT */}
      <section className="py-12 md:py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="font-display italic text-[13px] text-[#8F6F3E]">intelligence moment</span>
            </div>
            <h2 className="font-display font-[600] text-[34px] md:text-[40px] leading-tight text-espresso tracking-tight text-left">
              The bit a notes app cannot do.
            </h2>

            <p className="text-[14px] sm:text-[15px] text-grey leading-relaxed font-sans">
              you log microneedling on tuesday. by wednesday morning, your retinol is paused for seven days, your vitamin C for three. your routine knows. your aftercare runs itself. nella holds the picture, so you don't have to.
            </p>
            <p className="text-[14px] sm:text-[15px] text-espresso font-sans font-[500] leading-relaxed">
              that's the difference between a list and something that actually thinks.
            </p>

            <Link
              href="/intelligence/ingredient-conflicts"
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#8F6F3E] hover:underline cursor-pointer"
            >
              see how it works <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="">
            <SurgicalMobileMockup initialScreen="routines" lockedTab />
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section className="py-12 md:py-20 bg-[#F5EDE0]">
        <div className="max-w-7xl mx-auto px-6 space-y-8 md:space-y-12">
          <div className="text-center space-y-3">
            <div className="flex items-center gap-1.5 justify-center mb-2">
              <span className="font-display italic text-[13px] text-[#8F6F3E]">process</span>
            </div>
            <h2 className="font-display font-[600] text-[32px] sm:text-[40px] text-espresso tracking-tight text-center">
              How it works.
            </h2>
            <p className="text-[13px] text-grey font-sans tracking-widest font-semibold">
              four steps. nothing complicated.
            </p>
          </div>

          <div className="max-w-[1002px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  tell nella about your treatments, your routine, the things you already do.
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
                  every treatment, every product, every check-in. seconds.
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
                  <div className="flex gap-1.5 items-end h-8">
                    {[30, 45, 40, 60, 55, 70, 86].map((h, i) => (
                      <div key={i} className={`w-3 rounded-t-sm ${i === 6 ? 'bg-[#8F6F3E]' : 'bg-[#E8E5DC]'}`} style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="mt-auto text-left w-full">
                <div className="text-[11.5px] font-semibold text-[#8F6F3E] uppercase tracking-wider mb-2">03</div>
                <h4 className="font-display font-[600] text-[24px] text-espresso leading-tight mb-3">See</h4>
                <p className="text-[14px] text-grey font-sans leading-relaxed">
                  your dashboard fills out. your score calibrates. your spend appears.
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
                  patterns emerge. aftercare runs itself. nella holds the picture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: GLOW SCORE */}
      <section className="py-12 md:py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SurgicalMobileMockup initialScreen="journal" compact />
          </div>

          <div className="space-y-6 text-left order-1 lg:order-2">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="font-display italic text-[13px] text-[#8F6F3E]">glow score</span>
            </div>
            <h2 className="font-display font-[600] text-[34px] md:text-[40px] leading-tight text-espresso tracking-tight text-left">
              The only score that tells you the truth.
            </h2>

            <p className="text-[14px] sm:text-[15px] text-grey leading-relaxed font-sans">
              one number, 0 to 100, every day. it moves with your treatments, your routine, your check-ins, your skin. calibrates over your first two weeks, then updates daily. every monday, the weekly card lands.
            </p>
            <p className="text-[14px] sm:text-[15px] text-grey leading-relaxed font-sans">
              every month, a wrap card you can share, or keep to yourself. some months you're glowing. some months you're just here. both deserve the card.
            </p>

            <Link
              href="/intelligence/glow-score"
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#8F6F3E] hover:underline cursor-pointer"
            >
              how the score works <ArrowRight size={11} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: SOCIAL PROOF */}
      <section className="py-12 md:py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 space-y-12 text-left">
          <div className="text-center space-y-3">
            <div className="flex items-center gap-1.5 justify-center mb-2">
              <span className="font-display italic text-[13px] text-[#8F6F3E]">social proof</span>
            </div>
            <h2 className="font-display font-[600] text-[32px] sm:text-[40px] text-espresso tracking-tight text-center">
              Loved by the women who built her.
            </h2>
            <p className="text-[14px] text-grey font-sans">
              nella was built by a community of women who take their beauty and self-care seriously.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-[#F5EDE0] border border-[#E8E5DC] rounded-3xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="space-y-4">
                <span className="text-[54px] font-display font-black text-[#8F6F3E] leading-[0.5] block pt-4 group-hover:text-[#C4A067] transition-colors duration-300">"</span>
                <p className="text-[14px] font-sans font-medium text-espresso/90 leading-relaxed">
                  i used to forget when my brows were due. now nella tells me before i remember to look.
                </p>
              </div>
              <div className="pt-6 mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] flex items-center justify-center text-espresso font-display font-bold text-lg">
                  r
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold text-espresso font-sans">Rachel</span>
                  <span className="text-[11px] text-grey font-sans">Age: 32</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-[#F5EDE0] border border-[#E8E5DC] rounded-3xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="space-y-4">
                <span className="text-[54px] font-display font-black text-[#8F6F3E] leading-[0.5] block pt-4 group-hover:text-[#C4A067] transition-colors duration-300">"</span>
                <p className="text-[14px] font-sans font-medium text-espresso/90 leading-relaxed">
                  i thought my routine was working. nella's score told me where it actually was. it has gone up nineteen points since february.
                </p>
              </div>
              <div className="pt-6 mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] flex items-center justify-center text-espresso font-display font-bold text-lg">
                  p
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold text-espresso font-sans">Priya</span>
                  <span className="text-[11px] text-grey font-sans">Age: 28</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-[#F5EDE0] border border-[#E8E5DC] rounded-3xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="space-y-4">
                <span className="text-[54px] font-display font-black text-[#8F6F3E] leading-[0.5] block pt-4 group-hover:text-[#C4A067] transition-colors duration-300">"</span>
                <p className="text-[14px] font-sans font-medium text-espresso/90 leading-relaxed">
                  i did the research, booked the right clinic, paid the £180. nella made sure day three did not undo any of it.
                </p>
              </div>
              <div className="pt-6 mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2] flex items-center justify-center text-espresso font-display font-bold text-lg">
                  h
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold text-espresso font-sans">Hannah</span>
                  <span className="text-[11px] text-grey font-sans">Age: 35</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: PRICING SNAPSHOT */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#FAF7F2] to-[#F5EDE0]">
        <div className="max-w-7xl mx-auto px-6 space-y-8 md:space-y-12">
          <div className="text-center space-y-3">
            <div className="flex items-center gap-1.5 justify-center mb-2">
              <span className="font-display italic text-[13px] text-[#8F6F3E]">pricing</span>
            </div>
            <h2 className="font-display font-[600] text-[32px] sm:text-[40px] text-espresso tracking-tight text-center">
              Free to start. £4.99 to understand.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1002px] mx-auto w-full">
            {/* Core Card */}
            <div className="p-8 bg-white border border-[#E8E5DC] rounded-[32px] text-left shadow-2xs hover:shadow-sm transition-shadow flex flex-col h-full">
              <div className="space-y-3 mb-6">
                <h3 className="font-display font-[600] text-[28px] text-espresso">nella Core</h3>
                <p className="text-[13px] text-grey font-sans leading-relaxed">
                  no credit card, no expiry, no catch.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-[600] text-[48px] text-espresso leading-none">Free</span>
                  <span className="text-[14px] text-grey font-sans font-medium">, forever</span>
                </div>
              </div>

              <ul className="space-y-3.5 text-[13.5px] text-espresso/80 font-sans flex-1 mb-8">
                {['track every treatment, every product, every day', 'your AM and PM routine, with conflict logic', 'daily check-in and monthly wrap', 'aftercare and smart reminders', 'up to 20 products'].map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start">
                    <div
                      className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-xs"
                      style={{
                        background: 'linear-gradient(135deg, #DEC68B 0%, #C4A067 50%, #B8924A 100%)'
                      }}
                    >
                      <Check size={11} strokeWidth={3.5} className="text-white shrink-0" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <PhaseAwareCta
                className="w-full py-4 text-[#1F1410] text-[13px] font-semibold rounded-full transition-all duration-300 font-sans cursor-pointer flex items-center justify-center gap-2 mt-auto hover:opacity-90 shadow-md"
                style={{
                  background: 'linear-gradient(135deg, #DEC68B 0%, #C4A067 50%, #B8924A 100%)'
                }}
              >
                <span>{IS_PRE_LAUNCH ? 'join the waitlist' : 'get nella on the App Store'}</span>
                <ArrowRight size={14} className="text-[#1F1410]" />
              </PhaseAwareCta>
            </div>

            {/* Pro Card */}
            <div className="p-8 bg-white border-2 border-[#8F6F3E] rounded-[32px] text-left shadow-sm hover:shadow-md transition-shadow relative flex flex-col h-full mt-4 md:mt-0">
              {/* Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#8F6F3E] text-[#FAF7F2] text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm whitespace-nowrap">
                <Star size={10} fill="currentColor" />
                <span>Recommended</span>
              </div>

              <div className="space-y-3 mb-6">
                <h3 className="font-display font-[600] text-[28px] text-espresso">nella Pro</h3>
                <p className="text-[13px] text-grey font-sans leading-relaxed">
                  the deeper picture, with a 7 day free trial.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-[600] text-[48px] text-espresso leading-none">£4.99</span>
                  <span className="text-[14px] text-grey font-sans font-medium">/month</span>
                </div>
                <div className="text-[11.5px] text-[#8F6F3E] font-medium font-sans mt-1">or £39.99/year (save 33%)</div>
              </div>

              <ul className="space-y-3.5 text-[13.5px] text-espresso/80 font-sans flex-1 mb-8">
                <div className="text-[12px] font-semibold text-espresso tracking-wider mb-4 pb-2">Everything in Core, plus:</div>
                {['the full glow score breakdown, daily, weekly, monthly', 'day-by-day aftercare for every treatment', 'spend insights by treatment and all time', 'your full history, from day one', 'unlimited product shelf'].map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start">
                    <div
                      className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-xs"
                      style={{
                        background: 'linear-gradient(135deg, #DEC68B 0%, #C4A067 50%, #B8924A 100%)'
                      }}
                    >
                      <Check size={11} strokeWidth={3.5} className="text-white shrink-0" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                  href="/pricing"
                  className="w-full py-4 text-[#FAF7F2] text-[13px] font-semibold rounded-full transition-colors font-sans cursor-pointer flex items-center justify-center gap-2 mt-auto"
                style={{
                  background: 'linear-gradient(135deg, #3A2418 0%, #2C1810 50%, #1F1410 100%)'
                }}
              >
                See the full comparison <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQ */}
      <section className="pt-12 md:pt-20 pb-0 bg-[#FAF7F2]">
        <div className="max-w-[1050px] mx-auto px-6 space-y-12">
          <div className="text-center space-y-3">
            <div className="flex items-center gap-1.5 justify-center mb-2">
              <span className="font-display italic text-[13px] text-[#8F6F3E]">faq</span>
            </div>
            <h2 className="font-display font-[600] text-[32px] sm:text-[38px] text-espresso tracking-tight text-center">
              In case you were wondering.
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E8E5DC] rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex justify-between items-center text-[14.5px] font-sans font-semibold text-espresso cursor-pointer hover:bg-[#FAF7F2]/50"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-grey transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-[13px] text-grey font-sans leading-relaxed text-left border-t border-[#FAF7F2]">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <CtaSection
        title="Your beauty, one clean thread."
        subtitle="Join the women who have stopped trying to remember it all."
      />
    </div>
  );
}
