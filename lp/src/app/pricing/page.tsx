import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
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
      <div className="text-left max-w-7xl mx-auto px-6 py-16 space-y-16">
        <section className="space-y-6 text-center">
          <h1 className="font-display font-[600] text-[36px] sm:text-[48px] tracking-tight text-espresso leading-none text-center">
            Free to start. £4.99 to understand.
          </h1>

          <p className="text-[14px] sm:text-[15px] text-grey max-w-2xl mx-auto font-sans leading-relaxed text-center">
            nella Core is free, forever. nella Pro is £4.99 a month, for the part of your beauty life that is currently held in a notes app and a memory.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4 sm:px-0">
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
                className="w-full py-4 bg-[#FAF7F2] hover:bg-[#F2E9D8] text-espresso border border-[#E0DCCE] rounded-2xl font-semibold text-[13.5px] transition-colors cursor-pointer text-center block"
              />
            </div>
          </div>

          {/* Pro Card */}
          <div className="p-8 sm:p-10 bg-white border-2 border-[#8F6F3E] rounded-[32px] flex flex-col justify-between relative shadow-xl shadow-[#8F6F3E]/5 mt-4 md:mt-0">
            <div className="absolute top-0 right-8 -translate-y-1/2">
              <span className="bg-[#8F6F3E] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">Unlimited</span>
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
                    <div className="w-5 h-5 rounded-full bg-[#8F6F3E]/10 flex items-center justify-center shrink-0 mt-0.5">
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
                className="w-full py-4 text-[#FAF7F2] rounded-2xl font-semibold text-[13.5px] transition-all cursor-pointer text-center block hover:opacity-90 shadow-md"
                style={{
                  background: 'linear-gradient(135deg, #3A2418 0%, #2C1810 50%, #1F1410 100%)'
                }}
              />
            </div>
          </div>
        </section>

        <section className="space-y-8 pt-12 max-w-4xl mx-auto px-4 sm:px-0">
          <h2 className="font-display font-[600] text-[28px] text-espresso tracking-tight text-center">What is in each.</h2>
          
          <div className="border border-[#E8E5DC] rounded-[32px] bg-white overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-sans text-[13.5px] min-w-[600px]">
                <thead>
                  <tr className="bg-[#1F1410] text-[#FAF7F2] font-semibold">
                    <th className="py-5 px-8 font-sans text-[14px] w-[45%]">Feature</th>
                    <th className="py-5 px-4 font-sans text-[14px] w-[25%]">nella Core</th>
                    <th className="py-5 px-6 font-sans text-[14px] text-[#DEC68B] whitespace-nowrap w-[30%]">nella Pro</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DC]/50">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="group hover:bg-[#FAF7F2]/60 transition-colors relative">
                      <td className="py-6 px-8 text-espresso font-medium relative">
                        {/* Interactive Left Bar on Hover */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        {row.name}
                      </td>
                      <td className="py-6 px-4">
                        {row.core.includes('✓') ? (
                          <div className="flex items-center gap-2">
                            <Check size={16} className="text-[#8F6F3E] shrink-0" strokeWidth={3} />
                            <span className="text-espresso font-medium group-hover:text-[#8F6F3E] transition-colors">{row.core.replace('✓', '').trim()}</span>
                          </div>
                        ) : (
                          <span className="text-grey group-hover:text-espresso transition-colors">{row.core}</span>
                        )}
                      </td>
                      <td className="py-6 px-6">
                        {row.pro.includes('✓') ? (
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-[#8F6F3E]/10 flex items-center justify-center shrink-0">
                              <Check size={12} className="text-[#8F6F3E]" strokeWidth={3} />
                            </div>
                            <span className="text-[#8F6F3E] font-medium transition-colors whitespace-nowrap">{row.pro.replace('✓', '').trim()}</span>
                          </div>
                        ) : (
                          <span className="text-[#8F6F3E] font-medium transition-colors whitespace-nowrap">{row.pro}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="space-y-4 max-w-4xl mx-auto px-4 sm:px-0 pt-8">
          <h2 className="font-display font-[600] text-[28px] text-espresso tracking-tight">What you get for £4.99.</h2>
          <div className="space-y-4 text-[14px] text-grey font-sans leading-relaxed">
            <p>
              your full glow score, with the breakdown and the recommendations. your day-by-day aftercare for every treatment, the bit that determines whether the money you spent at the clinic does the work you booked it for. your spending pattern across treatments, clinics, and categories, so you can see what's actually returning. your full history, all the way back to your first logged appointment.
            </p>
            <p>
              most women using nella have at least one treatment a month that costs more than a year of Pro. Pro is the part that protects the rest of what you spend and tells you the truth about what's working. that's what the £4.99 is for.
            </p>
          </div>
        </section>

        <section className="space-y-8 pt-12 max-w-4xl mx-auto px-4 sm:px-0">
          <h2 className="font-display font-[600] text-[28px] text-espresso tracking-tight">In case you were wondering.</h2>
          
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
        title="Ready when you are."
        subtitle="free to use. £4.99 a month for Pro. cancel anytime."
        backgroundClass="bg-transparent"
      />
    </div>
  );
}
