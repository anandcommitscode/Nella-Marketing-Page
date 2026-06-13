import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, Shield, HelpCircle } from 'lucide-react';

interface PricingViewProps {
  onNavigate: (path: string) => void;
}

export default function PricingView({ onNavigate }: PricingViewProps) {
  const comparisonRows = [
    { name: 'treatment logging', core: '✓ unlimited', pro: '✓ unlimited' },
    { name: 'AM and PM routine', core: '✓ full builder', pro: '✓ full builder' },
    { name: 'conflict active logic', core: '✓ standard', pro: '✓ standard' },
    { name: 'smart treatment reminders', core: '✓ included', pro: '✓ included' },
    { name: 'product shelf limit', core: 'up to 20 products', pro: 'unlimited products' },
    { name: 'glow score breakdown', core: 'score value only', pro: '✓ full daily/weekly analysis' },
    { name: 'day-by-day aftercare details', core: 'day-one only', pro: '✓ full 7-day guides' },
    { name: 'historical activity logs', core: '3-month rolling', pro: '✓ complete since day one' },
    { name: 'clinic & treatment spend insights', core: 'standard totals', pro: '✓ deep multi-metric breakdown' },
  ];

  return (
    <div className="lowercase text-left max-w-4xl mx-auto px-6 py-12 space-y-16">
      {/* Hero */}
      <section className="space-y-6 pt-8 text-center">
        <div className="inline-flex items-center gap-1.5 justify-center">
          <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
          <span className="font-display italic text-[13px] text-[#8F6F3E]">honest numbers</span>
          <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
        </div>

        <h1 className="font-display font-[600] text-[36px] sm:text-[48px] tracking-tight text-espresso leading-none text-center">
          free to start. £4.99 to understand.
        </h1>

        <p className="text-[14px] sm:text-[15px] text-grey max-w-2xl mx-auto font-sans leading-relaxed text-center">
          nella Core is free, forever. no credit card, no expiry, no catch. nella Pro is £4.99 a month, built for the part of your beauty life that is currently held in a notes app and a memory.
        </p>
      </section>

      {/* Two Plan Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Core Card */}
        <div className="p-8 bg-white border border-[#E8E5DC] rounded-3xl space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-grey block font-semibold">level one</span>
              <h3 className="font-display font-semibold text-[24px] text-espresso">nella Core</h3>
              <p className="text-[13px] text-[#8F6F3E] font-semibold">free, forever</p>
            </div>
            <p className="text-[12px] text-grey font-sans">no credit card required. no hidden trials. perfect for simple routine and treatment schedules.</p>
            <div className="h-[1px] bg-[#FAF7F2]"></div>
            <ul className="space-y-3 text-[12.5px] text-espresso/80 font-sans">
              {[
                'track every treatment, every product, every day',
                'AM and PM routine with active conflict logic',
                'daily skin check-ins & monthly wraps',
                'aftercare and smart reminders',
                'virtual product shelf up to 20 products',
                '3-month rolling history logs'
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2.5 items-start">
                  <Check size={14} className="text-deep-sage shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => onNavigate('waitlist')}
            className="w-full py-3.5 bg-[#FAF7F2] hover:bg-[#F2E9D8] text-espresso border border-[#E0DCCE] rounded-full font-semibold text-[12.5px] transition-colors cursor-pointer"
          >
            join the waitlist
          </button>
        </div>

        {/* Pro Card */}
        <div className="p-8 bg-white border-2 border-[#8F6F3E] rounded-3xl space-y-6 flex flex-col justify-between relative shadow-sm">
          <span className="absolute top-4 right-4 bg-[#8F6F3E]/8 text-[#8F6F3E] text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">unlimited</span>
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-[#8F6F3E] block font-semibold">level two</span>
              <h3 className="font-display font-semibold text-[24px] text-espresso">nella Pro</h3>
              <p className="text-[13px] text-[#8F6F3E] font-semibold">£4.99/month or £39.99/year</p>
            </div>
            <p className="text-[12px] text-grey font-sans">save 33% with our annual subscription. includes a seven-day free trial. cancel anytime in one tap.</p>
            <div className="h-[1px] bg-[#FAF7F2]"></div>
            <ul className="space-y-3 text-[12.5px] text-espresso/80 font-sans">
              {[
                'the full glow score breakdown daily, weekly, monthly',
                'day-by-day customized aftercare plans',
                'unlimited virtual cabinet product slots',
                'complete historical records from day one',
                'spending insights by treatment type and clinic',
                'exclusive beauty intelligence cards'
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2.5 items-start">
                  <Check size={14} className="text-[#8F6F3E] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => onNavigate('waitlist')}
            className="w-full py-3.5 text-[#FAF7F2] rounded-full font-semibold text-[12.5px] transition-all cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #3A2418 0%, #2C1810 50%, #1F1410 100%)'
            }}
          >
            start your 7 day free trial
          </button>
        </div>
      </section>

      {/* Comparison table */}
      <section className="space-y-6 pt-4 border-t border-[#E8E5DC]">
        <h3 className="font-display font-semibold text-[22px] text-espresso tracking-tight text-center">what is in each.</h3>
        <div className="overflow-x-auto shadow-2xs border border-[#E8E5DC] rounded-2xl bg-white">
          <table className="w-full text-left font-sans text-[12.5px]">
            <thead>
              <tr className="bg-[#FAF7F2] text-espresso border-b border-[#E8E5DC] font-semibold">
                <th className="p-4">feature</th>
                <th className="p-4 w-[160px]">core</th>
                <th className="p-4 w-[160px]">pro</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#FAF7F2]">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#FAF7F2]/50 text-grey">
                  <td className="p-4 text-espresso font-medium">{row.name}</td>
                  <td className="p-4">{row.core}</td>
                  <td className="p-4 font-medium text-espresso">{row.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Transparency section */}
      <section className="p-6 bg-gradient-to-r from-teal-50/10 to-emerald-50/10 border border-[#E8E5DC] rounded-2xl space-y-2 text-center text-[12.5px] text-grey">
        <h4 className="font-semibold text-espresso">our pricing promise</h4>
        <p className="max-w-xl mx-auto leading-relaxed">
          we believe beauty metadata shouldn&rsquo;t be traded. there are index ads, no brand tracking, and no sponsor kickbacks. our Pro tier keeps us completely independent so we can keep building exactly for you.
        </p>
      </section>
    </div>
  );
}
