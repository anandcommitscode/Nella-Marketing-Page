import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Star, X } from 'lucide-react';
import CtaSection from '../../components/CtaSection';
import PhaseAwareCta from '../../components/PhaseAwareCta';

export const metadata: Metadata = {
  title: 'pricing: free to use, £4.99 a month for the full picture',
  description: 'nella Core is free, forever. nella Pro is £4.99 a month or £39.99 a year, with a seven-day free trial. cancel anytime.',
  keywords: ['beauty app pricing', 'skincare app cost', 'treatment tracker price', 'nella subscription'],
  alternates: {
    canonical: 'https://mynella.app/pricing'
  }
};

export default function PricingPage() {
  const comparisonRows = [
    { name: 'treatment logging', core: '✓ unlimited', pro: '✓ unlimited' },
    { name: 'AM and PM routine', core: '✓ full builder', pro: '✓ full builder' },
    { name: 'conflict active logic', core: '✓ standard', pro: '✓ standard' },
    { name: 'smart treatment reminders', core: '✓ included', pro: '✓ included' },
    { name: 'product shelf limit', core: 'up to 20 products', pro: '✓ unlimited products' },
    { name: 'glow score breakdown', core: 'score value only', pro: '✓ full daily/weekly analysis' },
    { name: 'day-by-day aftercare details', core: 'day-one only', pro: '✓ full 7-day guides' },
    { name: 'historical activity logs', core: '3-month rolling', pro: '✓ complete since day one' },
    { name: 'clinic & treatment spend insights', core: 'standard totals', pro: '✓ deep multi-metric breakdown' },
  ];

  return (
    <div className="space-y-0">
      <div className="px-4 md:px-8 pt-0 md:pt-0">
        <div className="rounded-[28px] md:rounded-[36px] bg-[#E8D5CE] overflow-hidden relative group">
          {/* Desktop Image - Absolute to fill right column border to border */}
          <div className="absolute right-[2%] top-0 bottom-0 w-[43%] hidden lg:block z-0">
            <img
              src="/nellakapricinghero.png"
              alt="pricing illustration"
              className="w-full h-full object-contain object-center"
            />
          </div>

          {/* Breadcrumbs inside the hero */}
          <div className="max-w-7xl mx-auto px-6 pt-6 pb-0 relative z-10">
            <div className="flex items-center gap-2 text-[12px] font-semibold text-[#1F1410]/60">
              <Link href="/" className="hover:text-espresso transition-colors">Home</Link>
              <span className="font-normal text-[#1F1410]/30">&gt;</span>
              <span className="text-espresso font-semibold">Pricing</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 pt-6 pb-12 md:pt-8 md:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:min-h-[360px]">
            {/* Left Column: Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 z-10 pb-0 self-center">
              <h1 className="font-display font-[600] text-[36px] sm:text-[48px] md:text-[54px] tracking-tight text-espresso leading-none">
                free to start. <br />£4.99 to understand.
              </h1>
              <p className="text-[15px] sm:text-[16px] text-[#1F1410]/80 max-w-[420px] font-sans leading-relaxed">
                nella Core is free, forever. nella Pro is £4.99 a month, for the part of your beauty life that is currently held in a notes app and a memory.
              </p>
              <div className="pt-4 flex justify-start">
                <PhaseAwareCta
                  preLaunchText="Join the waitlist"
                  postLaunchText="Start your free trial"
                  className="w-[180px] py-4 text-[#1F1410] rounded-full font-semibold text-[14px] transition-all cursor-pointer text-center flex justify-center items-center hover:opacity-90 shadow-md"
                  style={{
                    background: 'linear-gradient(135deg, #DEC68B 0%, #C4A067 50%, #B8924A 100%)'
                  }}
                />
              </div>
            </div>

            {/* Mobile Image */}
            <div className="block lg:hidden w-full relative z-10">
              <img
                src="/nellakapricinghero.png"
                alt="pricing illustration"
                className="w-full h-auto max-h-[300px] object-cover object-center rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-left max-w-7xl mx-auto px-6 pt-12 md:pt-16 space-y-8 md:space-y-16">

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Core Card */}
          <div className="p-8 sm:p-10 bg-white border border-[#E8E5DC] rounded-[32px] flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-[600] text-[48px] sm:text-[56px] text-espresso leading-none tracking-tight">Free</span>
                </div>
                <h3 className="font-display font-[600] text-[24px] text-espresso tracking-tight pt-2">nella Core</h3>
                <p className="text-[13.5px] text-grey font-sans leading-relaxed min-h-[60px]">no expiry. no credit card. no catch.</p>
              </div>

              <div className="text-[13.5px] font-semibold text-espresso">what is in it:</div>
              <ul className="space-y-3.5 pt-2">
                {[
                  'log every treatment you get, unlimited',
                  'AM and PM routine with conflict logic',
                  'daily skin check-ins and monthly wraps',
                  'aftercare and smart treatment reminders',
                  'spending totals',
                  'your glow score number and statement',
                  'product shelf up to 20 products',
                  '3-month rolling history'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-[#8F6F3E]" strokeWidth={3} />
                    </div>
                    <span className="text-[13.5px] text-grey font-sans leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-10 mt-auto">
              <PhaseAwareCta
                preLaunchText="join the waitlist"
                postLaunchText="get nella on the App Store"
                className="w-full py-4 text-[#1F1410] rounded-full font-semibold text-[13.5px] transition-all cursor-pointer text-center block hover:opacity-90 shadow-md"
                style={{
                  background: 'linear-gradient(135deg, #DEC68B 0%, #C4A067 50%, #B8924A 100%)'
                }}
              />
            </div>
          </div>

          {/* Pro Card */}
          <div className="p-8 sm:p-10 bg-white border-2 border-[#8F6F3E] rounded-[32px] flex flex-col justify-between relative shadow-xl shadow-[#8F6F3E]/5 mt-4 md:mt-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="bg-[#8F6F3E] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <Star size={12} fill="currentColor" strokeWidth={0} /> RECOMMENDED
              </span>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-[600] text-[48px] sm:text-[56px] text-espresso leading-none tracking-tight">£4.99</span>
                  <span className="text-[14px] text-grey font-medium">/month</span>
                </div>
                <h3 className="font-display font-[600] text-[24px] text-espresso tracking-tight pt-2">nella Pro</h3>
                <p className="text-[13.5px] text-grey font-sans leading-relaxed min-h-[60px]">or £39.99/year (save 33%)—seven-day free trial. cancel anytime.</p>
              </div>

              <div className="text-[13.5px] font-semibold text-espresso">what Pro adds:</div>
              <ul className="space-y-3.5 pt-2">
                {[
                  'the full glow score breakdown, daily, weekly, monthly',
                  'day-by-day aftercare for every priority treatment',
                  'spending insights by treatment type, by month, by quarter, and all time',
                  'your full history, all the way back to day one',
                  'unlimited product shelf'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-[#8F6F3E]" strokeWidth={3} />
                    </div>
                    <span className="text-[13.5px] text-espresso font-medium leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-10 mt-auto">
              <PhaseAwareCta
                preLaunchText="join the waitlist"
                postLaunchText="start your 7 day free trial"
                className="w-full py-4 text-[#1F1410] rounded-full font-semibold text-[13.5px] transition-all cursor-pointer text-center block hover:opacity-90 shadow-md"
                style={{
                  background: 'linear-gradient(135deg, #DEC68B 0%, #C4A067 50%, #B8924A 100%)'
                }}
              />
            </div>
          </div>
        </section>

        <section className="space-y-8 pt-16 w-full max-w-[650px] mx-auto pb-12">
          <h2 className="font-display font-[600] text-[28px] sm:text-[34px] text-espresso tracking-tight text-center">what is in each.</h2>

          <div className="relative w-full pt-16 overflow-hidden pb-16">
            <div className="w-full max-w-[650px] mx-auto">
              {/* Header Row */}
              <div className="grid grid-cols-[1fr_75px_12px_85px] md:grid-cols-[minmax(0,340px)_100px_40px_170px] gap-0 mb-4 items-end px-4 relative z-10">
                <div></div>
                <div className="text-center font-display font-[600] text-[11px] md:text-[18px] text-grey pb-4">nella Core</div>
                <div></div>
                <div className="text-center font-display font-[600] text-[13px] md:text-[22px] text-espresso pb-4 pt-6">nella Pro</div>
              </div>

              {/* Rows Container */}
              <div className="relative">
                {/* Pro Column Highlight Background (Floating Card) */}
                <div className="absolute top-[-90px] bottom-0 right-4 w-[85px] md:w-[170px] bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#DEC68B]/50 z-0 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#DEC68B] via-[#C4A067] to-[#B8924A]"></div>
                </div>

                <div className="relative z-10 flex flex-col">
                  {comparisonRows.map((row, idx) => {
                    const isCoreChecked = row.core.includes('✓');
                    const isProChecked = row.pro.includes('✓');

                    return (
                      <div key={idx} className="grid grid-cols-[1fr_75px_12px_85px] md:grid-cols-[minmax(0,340px)_100px_40px_170px] gap-0 py-4 border-b border-[#E8E5DC]/60 items-center px-4">
                        <div className="text-[12.5px] md:text-[14.5px] font-medium text-espresso pr-2 md:pr-4">{row.name}</div>

                        {/* Core Column */}
                        <div className="text-center flex items-center justify-center">
                          {isCoreChecked ? (
                            <Check className="w-4 h-4 md:w-[18px] md:h-[18px] text-[#A3A095]" strokeWidth={2.5} />
                          ) : (
                            <X className="w-4 h-4 md:w-[18px] md:h-[18px] text-[#CDC5B8]" strokeWidth={2.5} />
                          )}
                        </div>

                        {/* Spacer Column */}
                        <div></div>

                        {/* Pro Column */}
                        <div className="text-center flex items-center justify-center">
                          {isProChecked ? (
                            <div className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] rounded-full bg-[#FAF7F2] flex items-center justify-center shadow-sm border border-[#E8E5DC]/30">
                              <Check className="w-2.5 h-2.5 md:w-[11.5px] md:h-[11.5px] text-[#8F6F3E]" strokeWidth={3.5} />
                            </div>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}
                </div>


              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4 w-full pt-8">
          <h2 className="font-display font-[600] text-[28px] text-espresso tracking-tight">what you get for £4.99.</h2>
          <div className="space-y-4 text-[14px] text-grey font-sans leading-relaxed">
            <p>
              your full glow score, with the breakdown and the recommendations. your day-by-day aftercare for every treatment, the bit that determines whether the money you spent at the clinic does the work you booked it for. your spending pattern across treatments, clinics, and categories, so you can see what's actually returning. your full history, all the way back to your first logged appointment.
            </p>
            <p>
              most women using nella have at least one treatment a month that costs more than a year of Pro. Pro is the part that protects the rest of what you spend and tells you the truth about what's working. that's what the £4.99 is for.
            </p>
          </div>
        </section>

        <section className="space-y-8 pt-12 w-full">
          <h2 className="font-display font-[600] text-[28px] text-espresso tracking-tight">in case you were wondering.</h2>

          <div className="space-y-4">
            <div className="p-6 bg-white border border-[#E8E5DC] rounded-2xl relative overflow-hidden shadow-sm group shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E] opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h4 className="font-semibold text-espresso mb-2">is there a free trial for Pro?</h4>
              <p className="text-[13.5px] text-grey font-sans leading-relaxed">yes. seven days, no commitment, no credit card needed if you join through the App Store with an existing apple id. cancel before day seven and you pay nothing.</p>
            </div>
            <div className="p-6 bg-white border border-[#E8E5DC] rounded-2xl relative overflow-hidden shadow-sm group shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E] opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h4 className="font-semibold text-espresso mb-2">can i cancel anytime?</h4>
              <p className="text-[13.5px] text-grey font-sans leading-relaxed">yes. cancel in your apple subscriptions settings and Pro stops at the end of the current billing period. nella Core stays free, with your data intact.</p>
            </div>
            <div className="p-6 bg-white border border-[#E8E5DC] rounded-2xl relative overflow-hidden shadow-sm group shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E] opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h4 className="font-semibold text-espresso mb-2">what happens to my data if i downgrade to Core?</h4>
              <p className="text-[13.5px] text-grey font-sans leading-relaxed">nothing. your data is yours either way. Core users see the last three months of history. Pro users see all of it. if you re-subscribe to Pro later, your full history reappears.</p>
            </div>
            <div className="p-6 bg-white border border-[#E8E5DC] rounded-2xl relative overflow-hidden shadow-sm group shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E] opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h4 className="font-semibold text-espresso mb-2">monthly or annual?</h4>
              <p className="text-[13.5px] text-grey font-sans leading-relaxed">monthly is £4.99. annual is £39.99, which works out as £3.33 a month. annual saves you 33% if you are sure you are in.</p>
            </div>
            <div className="p-6 bg-white border border-[#E8E5DC] rounded-2xl relative overflow-hidden shadow-sm group shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E] opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h4 className="font-semibold text-espresso mb-2">what happens if i pause my treatments for a while?</h4>
              <p className="text-[13.5px] text-grey font-sans leading-relaxed">nothing changes. your data stays. your reminders pause naturally as your cycles slip, then nudge gently when you are due to come back. there is no penalty for taking a season off and no scolding when you return.</p>
            </div>
          </div>
        </section>

      </div>

      <CtaSection
        title="ready when you are."
        subtitle="free to use. £4.99 a month for Pro. cancel anytime."
        backgroundClass="bg-transparent"
      />
    </div>
  );
}
