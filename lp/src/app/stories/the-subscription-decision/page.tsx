import type { Metadata } from 'next';
import Link from 'next/link';
import CtaSection from '../../../components/CtaSection';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'the £4.99 decision | stories',
  description: 'why nella is entirely independent. no ads, no affiliate kickbacks, no selling your face to brands.',
  alternates: {
    canonical: 'https://mynella.app/stories/the-subscription-decision'
  }
};

export default function ArticleThreePage() {
  return (
    <div className="space-y-0">
      <article className="text-left max-w-5xl mx-auto px-6 pt-8 md:pt-12 space-y-8 md:space-y-12">
        <div className="flex items-center gap-2 text-[13px] font-semibold text-grey">
          <Link href="/" className="hover:text-espresso transition-colors">Home</Link>
          <span className="text-grey font-normal">&gt;</span>
          <Link href="/stories" className="hover:text-espresso transition-colors">Stories</Link>
          <span className="text-grey font-normal">&gt;</span>
          <span className="text-espresso">The £4.99 decision</span>
        </div>

        <div className="pt-4 space-y-6 text-center pb-12">
          <div className="inline-flex items-center gap-1.5 justify-center">
            <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
            <span className="font-display italic text-[13px] text-[#8F6F3E]">business</span>
            <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
          </div>

          <h1 className="font-display font-[600] text-[36px] sm:text-[48px] tracking-tight text-espresso leading-none">
            The £4.99 decision.
          </h1>

          <p className="text-[13px] text-grey font-medium uppercase tracking-wider">
            published march 18th
          </p>
        </div>

        <div className="space-y-8 text-[14.5px] text-grey font-sans leading-relaxed max-w-3xl mx-auto">
          <p>
            There are two ways to build an app that tracks what women put on and in their bodies. The first is to make it free and sell the data to beauty brands. The second is to charge a fair price and keep the data private.
          </p>
          <p className="font-semibold text-espresso">
            We chose the second.
          </p>
          <p>
            The beauty industry runs on a simple cycle: create insecurity, sell the solution, repeat. Free apps are the perfect delivery mechanism. They collect your data what you buy, what you search, how often you look in the mirror and they sell that data to brands who use it to target you with more products.
          </p>
          <p>
            The moment nella takes money from a brand, we have an incentive to recommend their product. The moment we run ads, we have an incentive to keep you scrolling instead of keeping you informed. The moment we sell your treatment history, we have violated the medical-grade privacy standard we built the entire system on.
          </p>



          <p>
            Nella Core is free. It always will be. You get treatment logging, basic reminders, routine tracking, and your glow score. For most women, that is enough to feel in control.
          </p>
          <p>
            Nella Pro costs £4.99 a month. It unlocks the intelligence layer: advanced conflict detection, full aftercare automation, spending analytics by clinic and treatment type, the monthly wrap card, and the full glow score breakdown.
          </p>

          <div className="p-8 sm:p-10 bg-white border border-[#E8E5DC] rounded-3xl space-y-8 shadow-sm my-10 relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#DEC68B]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>

            <div className="relative z-10 pb-6">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#8F6F3E] mb-2 block">Level Two</span>
              <h3 className="font-display font-[600] text-[24px] sm:text-[28px] text-espresso">What £4.99 buys you.</h3>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {[
                "Full ingredient conflict engine with automatic pause scheduling",
                "Day-by-day aftercare narratives for every priority treatment",
                "Spending analytics broken down by clinic, treatment, and quarter",
                "The monthly wrap card with score, statement, and shareable design",
                "The full glow score breakdown with pillar-level visibility",
                "Absolute independence. No ads. No data sales. No brand interference."
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#FAF7F2] border border-[#E8E5DC] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-[#8F6F3E]" strokeWidth={3} />
                  </div>
                  <p className="text-[13.5px] text-grey font-sans leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <p>
            The decision to charge is the decision to stay honest. It is the decision that allows us to build a system that genuinely works for you, because you and only you are the customer.
          </p>
          <p className="font-semibold text-espresso">
            We do not work for brands. We work for the woman holding the phone.
          </p>
        </div>

        <div className="p-6 bg-white border border-[#E8E5DC] rounded-2xl text-[13.5px] text-grey font-sans leading-relaxed shadow-sm relative overflow-hidden mt-12 max-w-3xl mx-auto">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E]"></div>
          <h4 className="font-semibold text-espresso mb-1">Why this matters</h4>
          The subscription is not a paywall. It is a privacy wall. You are paying us to not sell your face.
        </div>

      </article>

      <CtaSection
        title="The £4.99 decision."
        subtitle="We do not work for brands. We work for the woman holding the phone. Join the waitlist."
        backgroundClass="bg-transparent"
      />
    </div>
  );
}
