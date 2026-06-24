import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, ChevronDown, Check, ArrowUpRight } from 'lucide-react';
import SurgicalMobileMockup from '../SurgicalMobileMockup';

interface HomeViewProps {
  onNavigate: (path: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
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
    <div className="space-y-0 lowercase">
      {/* SECTION 1: HERO */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Glow gradients */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#EFD9A8]/20 to-[#FAF7F2] blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-[#F4DDD0]/30 to-[#FAF7F2] blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Block */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8 z-10">
            <div className="inline-flex items-center gap-1.5">
              <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
              <span className="font-display italic text-[13px] text-[#8F6F3E] tracking-normal">
                welcome to nella
              </span>
            </div>

            <h1 className="font-display font-[600] text-[36px] sm:text-[54px] md:text-[60px] leading-[1.05] tracking-tight text-espresso text-left normal-case">
              The beauty companion <br />
              <span className="text-espresso lowercase">that keeps up with you.</span>
            </h1>

            <p className="text-[14px] sm:text-[15px] text-grey leading-relaxed max-w-xl text-balance">
              nella remembers everything, so you do not have to. every treatment, every product, every cost, in one clean thread.
            </p>

            <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <button
                onClick={() => onNavigate('waitlist')}
                className="group px-6 py-4 rounded-full text-[#FAF7F2] text-[13.5px] font-semibold lowercase tracking-wide flex items-center justify-center gap-2.5 shadow-md shadow-espresso/15 transition-all duration-300 transform active:scale-98 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #3A2418 0%, #2C1810 50%, #1F1410 100%)'
                }}
              >
                <span>join the waitlist</span>
                <ArrowRight size={15} className="text-[#FAF7F2] transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigate('why-nella')}
                className="px-6 py-4 rounded-full bg-white border border-[#D3D1C7]/70 text-espresso text-[13.5px] font-semibold text-center hover:bg-[#FAF7F2] transition-colors duration-200 lowercase tracking-wide shadow-2xs cursor-pointer"
              >
                why nella exists
              </button>
            </div>

            <div className="flex items-center gap-6 pt-3 w-full max-w-md">
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-[20px] font-bold tracking-tight text-espresso font-mono leading-none">4.8</span>
                  <div className="flex text-[#C4A067]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} fill="currentColor" className="stroke-none" />
                    ))}
                  </div>
                </div>
                <span className="text-[10px] text-grey tracking-wider font-semibold mt-1">
                  app store rating
                </span>
              </div>
              <div className="h-8 w-[1.5px] bg-[#E8E5DC]"></div>
              <button
                onClick={() => onNavigate('waitlist')}
                className="bg-black hover:bg-black/90 text-[#FAF7F2] px-3.5 py-1.5 rounded-full flex items-center gap-2 transition-all border border-transparent cursor-pointer text-left shadow-md"
              >
                <svg className="w-5 h-5 text-[#FAF7F2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5 C17.88,20.74 17.00,21.95 15.66,21.97 C14.32,22.00 13.89,21.18 12.37,21.18 C10.84,21.18 10.37,21.95 9.10,22.00 C7.79,22.05 6.80,20.68 5.96,19.47 C4.25,17.00 2.94,12.45 4.70,9.39 C5.57,7.87 7.13,6.91 8.82,6.88 C10.10,6.86 11.32,7.75 12.11,7.75 C12.89,7.75 14.37,6.68 15.92,6.84 C16.57,6.87 18.39,7.1 19.56,8.82 C19.47,8.88 17.39,10.1 17.41,12.63 C17.44,15.65 20.06,16.66 20.10,16.67 C20.08,16.74 19.67,18.11 18.71,19.5 M15.97,4.17 C16.63,3.37 17.07,2.28 16.95,1 C16.03,1.04 14.90,1.62 14.24,2.41 C13.68,3.07 13.19,4.18 13.35,5.43 C14.37,5.51 15.42,4.91 15.97,4.17 Z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-[7.5px] text-[#FAF7F2]/60 font-bold uppercase leading-none">download on the</span>
                  <span className="text-[11.5px] font-bold font-sans leading-tight mt-0.5 text-[#FAF7F2]">App Store</span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Hero Block */}
          <div className="lg:col-span-5 relative flex justify-center items-center z-10 pt-4">
            <div className="absolute top-[48%] left-[52%] -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] pointer-events-none select-none z-0">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-deep-rose/8">
                <path fill="currentColor" d="M42.5,-64.1C55.4,-54.3,66.3,-41.8,72.4,-27.2C78.4,-12.7,79.5,4,75.3,19.1C71,34.2,61.4,47.7,48.9,56.7C36.4,65.7,21,70.2,5.2,74C-10.7,77.8,-26.9,81,-40.4,75.6C-54,70.1,-64.8,56.1,-71.9,40.7C-79.1,25.3,-82.6,8.6,-79.8,-7.4C-77.1,-23.4,-68.2,-38.7,-56.3,-49C-44.4,-59.2,-29.6,-64.3,-14.8,-66C-0.1,-67.7,14.7,-65.9,42.5,-64.1Z" transform="translate(100 100)" />
              </svg>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 w-full"
            >
              <SurgicalMobileMockup initialScreen="splash" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 text-left space-y-8">
          <div className="flex justify-start items-center gap-1.5">
            <span className="w-4 h-[1.5px] bg-[#8C5249]"></span>
            <span className="font-display italic text-[13px] text-[#8C5249]">
              the daily reality
            </span>
            <span className="w-4 h-[1.5px] bg-[#8C5249]"></span>
          </div>

          <h2 className="font-display font-[600] text-[28px] sm:text-[36px] text-espresso tracking-tight text-left">
            You&rsquo;re already doing the work
          </h2>

          <div className="space-y-4 max-w-2xl mx-auto font-sans text-[13.5px] text-grey leading-relaxed text-balance">
            <p className="border-l-2 border-[#8C5249]/30 pl-4 text-left">
              the treatments are booked, your routine is built. the products are bought and your aftercare is sort of remembered. it lives in your camera roll, your appointment threads, the leaflets in the bottom of your bag, the saved TikToks and that basket from last tuesday. <span className="font-medium text-espresso">you&rsquo;ve been doing all of it. just not in one place.</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: FOUR THINGS */}
      <section className="py-20 bg-gradient-to-b from-[#FAF7F2] to-[#F5EDE0]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-left space-y-3">
            <h2 className="font-display font-[600] text-[32px] sm:text-[40px] text-espresso tracking-tight text-left">
              Four things, done properly.
            </h2>
            <p className="text-[13.5px] text-grey font-sans">
              your treatments, your routines, your aftercare, and the bits you would have missed, finally seen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              onClick={() => onNavigate('tracking')}
              className="p-6 bg-white border border-[#E8E5DC] rounded-3xl hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="text-[20px]">🧖‍♀️</span>
                <span className="font-display italic text-[11px] text-[#8F6F3E] block">when was the last one?</span>
                <h3 className="font-display font-semibold text-[18px] text-espresso">treatments</h3>
                <p className="text-[12px] text-grey font-sans leading-relaxed">
                  every treatment in one place. injectables, facials, hair, nails, brows, lashes, body. across every clinic, with every cost. nella nudges you before each one is due.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#8F6F3E] inline-flex items-center gap-1 hover:underline pt-2">
                see treatments <ArrowRight size={10} />
              </span>
            </div>

            <div
              onClick={() => onNavigate('routines')}
              className="p-6 bg-white border border-[#E8E5DC] rounded-3xl hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="text-[20px]">🧪</span>
                <span className="font-display italic text-[11px] text-[#8F6F3E] block">what&rsquo;s tonight?</span>
                <h3 className="font-display font-semibold text-[18px] text-espresso">routines</h3>
                <p className="text-[12px] text-grey font-sans leading-relaxed">
                  build your AM and PM routine and nella runs it, adjusts it, and tells you what&rsquo;s on tonight. the order is right. the actives are spaced. conflicts paused.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#8F6F3E] inline-flex items-center gap-1 hover:underline pt-2">
                see routines <ArrowRight size={10} />
              </span>
            </div>

            <div
              onClick={() => onNavigate('aftercare')}
              className="p-6 bg-white border border-[#E8E5DC] rounded-3xl hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="text-[20px]">🧴</span>
                <span className="font-display italic text-[11px] text-[#8F6F3E] block">you&rsquo;re home. now what?</span>
                <h3 className="font-display font-semibold text-[18px] text-espresso">aftercare</h3>
                <p className="text-[12px] text-grey font-sans leading-relaxed">
                  what to do, what to pause, what to put back on. day by day. automated chemical pauses so you don&rsquo;t compromise your active healing.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#8F6F3E] inline-flex items-center gap-1 hover:underline pt-2">
                see aftercare <ArrowRight size={10} />
              </span>
            </div>

            <div
              onClick={() => onNavigate('insights')}
              className="p-6 bg-white border border-[#E8E5DC] rounded-3xl hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="text-[20px]">📈</span>
                <span className="font-display italic text-[11px] text-[#8F6F3E] block">how&rsquo;s it actually going?</span>
                <h3 className="font-display font-semibold text-[18px] text-espresso">insights</h3>
                <p className="text-[12px] text-grey font-sans leading-relaxed">
                  a daily score, a monthly wrap, an ongoing spend. the patterns you could not see before. custom charts of active ingredients and consistency trends.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#8F6F3E] inline-flex items-center gap-1 hover:underline pt-2">
                see insights <ArrowRight size={10} />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE INTELLIGENCE MOMENT */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5">
              <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
              <span className="font-display italic text-[13px] text-[#8F6F3E]">smart connections</span>
            </div>

            <h2 className="font-display font-[600] text-[34px] md:text-[40px] leading-tight text-espresso tracking-tight">
              The bit a notes app <br />cannot do.
            </h2>

            <p className="text-[14px] sm:text-[15px] text-grey leading-relaxed font-sans">
              you log microneedling on tuesday. by wednesday morning, your retinol is paused for seven days, your vitamin C for three. your routine knows. your aftercare runs itself.
            </p>
            <p className="text-[14px] sm:text-[15px] text-espresso font-sans font-[500] leading-relaxed">
              nella holds the picture, so you don&rsquo;t have to. that&rsquo;s the difference between a list and something that actually thinks.
            </p>

            <button
              onClick={() => onNavigate('refine')}
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#8F6F3E] hover:underline cursor-pointer"
            >
              see product conflict logic <ArrowUpRight size={13} />
            </button>
          </div>

          <div className="p-4 bg-white border border-[#E8E5DC] rounded-3xl shadow-sm">
            <SurgicalMobileMockup initialScreen="routines" compact />
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS */}
      <section className="py-20 bg-[#F5EDE0]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-left space-y-3">
            <h2 className="font-display font-[600] text-[32px] sm:text-[40px] text-espresso tracking-tight text-left">
              How it works.
            </h2>
            <p className="text-[13px] text-grey font-sans tracking-widest font-semibold">
              Four steps. Nothing complicated.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'start', desc: 'tell nella about your treatments, your routine, the things you already do. it takes about five minutes.' },
              { num: '2', title: 'log', desc: 'every treatment, every product, every check-in. one tap each. literally a few seconds.' },
              { num: '3', title: 'see', desc: 'your dashboard fills out. your score calibrates over fourteen days. your spend appears.' },
              { num: '4', title: 'know', desc: 'patterns emerge. aftercare runs itself. your beauty life is finally in one clean place.' }
            ].map((step, idx) => (
              <div key={idx} className="space-y-3 text-left">
                <h4 className="font-display font-semibold text-[18px] text-espresso">{step.title}</h4>
                <p className="text-[12.5px] text-grey font-sans leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: GLOW SCORE */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="p-4 bg-white border border-[#E8E5DC] rounded-3xl shadow-sm order-2 lg:order-1">
            <SurgicalMobileMockup initialScreen="journal" compact />
          </div>

          <div className="space-y-6 text-left order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5">
              <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
              <span className="font-display italic text-[13px] text-[#8F6F3E]">the glow score</span>
            </div>

            <h2 className="font-display font-[600] text-[34px] md:text-[40px] leading-tight text-espresso tracking-tight">
              The only score that <br />tells you the truth.
            </h2>

            <p className="text-[14px] sm:text-[15px] text-grey leading-relaxed font-sans">
              one number, 0 to 100, every day. it moves with your treatments, your routine, your check-ins, your skin. calibrates over your first two weeks, then updates daily.
            </p>
            <p className="text-[14px] sm:text-[15px] text-grey leading-relaxed font-sans">
              every monday, the weekly card lands. every month, a wrap card you can share, or keep to yourself. some months you&rsquo;re glowing. some months you&rsquo;re just here. both deserve the card.
            </p>

            <button
              onClick={() => onNavigate('insights')}
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#8F6F3E] hover:underline cursor-pointer"
            >
              how the score works <ArrowRight size={11} />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7: SOCIAL PROOF */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 space-y-12 text-left">
          <div className="text-left space-y-3">
            <div className="inline-flex items-center gap-1.5 justify-start">
              <span className="w-4 h-[1.5px] bg-deep-gold"></span>
              <span className="font-display italic text-[13px] text-deep-gold">love letters</span>
            </div>
            <h2 className="font-display font-[600] text-[32px] sm:text-[40px] text-espresso tracking-tight">
              Loved by the women who built her.
            </h2>
            <p className="text-[14px] text-grey font-sans">
              nella was built by a community of women who take their beauty and self-care seriously.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-[#E8E5DC] rounded-3xl space-y-4">
              <p className="text-[13px] italic font-medium text-espresso/90">&ldquo;i used to forget when my brows were due. now nella tells me before i remember to look.&rdquo;</p>
              <span className="text-[11px] font-sans font-semibold text-grey block">rachel, 32</span>
            </div>

            <div className="p-6 bg-white border border-[#E8E5DC] rounded-3xl space-y-4">
              <p className="text-[13px] italic font-medium text-espresso/90">&ldquo;i thought my routine was working. nella&rsquo;s score told me where it actually was. it has gone up nineteen points since february.&rdquo;</p>
              <span className="text-[11px] font-sans font-semibold text-grey block">priya, 28</span>
            </div>

            <div className="p-6 bg-white border border-[#E8E5DC] rounded-3xl space-y-4">
              <p className="text-[13px] italic font-medium text-espresso/90">&ldquo;i did the research, booked the right clinic, paid the £180. nella made sure day three did not undo any of it.&rdquo;</p>
              <span className="text-[11px] font-sans font-semibold text-grey block">hannah, 35</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: PRICING SNAPSHOT */}
      <section className="py-20 bg-gradient-to-b from-[#FAF7F2] to-[#F5EDE0]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-left space-y-3">
            <h2 className="font-display font-[600] text-[32px] sm:text-[40px] text-espresso tracking-tight text-left">
              Free to start. £4.99 to understand.
            </h2>
            <p className="text-[13.5px] text-grey font-sans">
              transparent pricing. no tricks, no secrets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Core Card */}
            <div className="p-8 bg-white border border-[#E8E5DC] rounded-3xl text-left space-y-6 shadow-2xs hover:shadow-sm transition-shadow">
              <div className="space-y-1">
                <h3 className="font-display font-bold text-[22px] text-espresso">nella Core</h3>
                <p className="text-[13px] text-deep-gold font-sans font-semibold">free, forever</p>
                <p className="text-[11.5px] text-grey">no credit card, no expiry, no catch</p>
              </div>

              <ul className="space-y-2.5 text-[12.5px] text-espresso/80 font-sans">
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

              <button
                onClick={() => onNavigate('waitlist')}
                className="w-full py-3 bg-[#FAF7F2] hover:bg-[#F2E9D8] text-espresso text-[12px] font-semibold rounded-full transition-colors font-sans lowercase cursor-pointer border border-[#E0DCCE]"
              >
                join the waitlist
              </button>
            </div>

            {/* Pro Card */}
            <div className="p-8 bg-white border-2 border-deep-gold rounded-3xl text-left space-y-6 shadow-sm hover:shadow-md transition-shadow relative">
              <span className="absolute top-4 right-4 bg-deep-gold/10 text-deep-gold text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full font-sans">featured</span>
              <div className="space-y-1">
                <h3 className="font-display font-bold text-[22px] text-espresso">nella Pro</h3>
                <p className="text-[13px] text-deep-gold font-sans font-semibold">£4.99/month or £39.99/year</p>
                <p className="text-[11.5px] text-grey">save 33% on annual plan. cancel anytime.</p>
              </div>

              <ul className="space-y-2.5 text-[12.5px] text-espresso/80 font-sans">
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

              <button
                onClick={() => onNavigate('pricing')}
                className="w-full py-3 text-[#FAF7F2] text-[12px] font-semibold rounded-full transition-colors font-sans lowercase cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #3A2418 0%, #2C1810 50%, #1F1410 100%)'
                }}
              >
                see pricing details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQ */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          <div className="text-left space-y-3">
            <h2 className="font-display font-[600] text-[32px] sm:text-[38px] text-espresso tracking-tight text-left">
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
      <section className="py-24 bg-[#1F1410] text-[#FAF7F2] relative overflow-hidden/10 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#5A3027]/12 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto px-6 space-y-8 relative z-10">
          <h2 className="font-display font-[600] text-[34px] sm:text-[48px] tracking-tight text-[#FAF7F2]">
            Your beauty, one clean thread.
          </h2>
          <p className="text-[14px] sm:text-[15px] text-[#FAF7F2]/90 max-w-lg mx-auto font-sans leading-relaxed">
            Join the women who have stopped trying to remember it all. nella tracks your treatments, orders your routine, runs your aftercare, and keeps your record safe.
          </p>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('waitlist')}
              className="px-8 py-4 rounded-full bg-white hover:bg-gray-100 text-[#1F1410] font-semibold text-[13.5px] lowercase shadow-lg transition-transform active:scale-98 cursor-pointer"
            >
              join the waitlist
            </button>
          </div>

          <p className="text-[10px] text-[#FAF7F2]/60 font-sans tracking-widest pt-2">
            free to use. £4.99 a month for Pro. cancel anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
