import type { Metadata } from 'next';
import Link from 'next/link';
import CtaSection from '../../../components/CtaSection';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'why nella is a subscription (and always will be)',
  description: 'we don\'t sell your face to skincare brands. we don\'t do affiliate links. we charge £4.99 a month so we work for you.',
  keywords: ['beauty app subscription', 'ad free beauty app', 'independent skincare tracking', '£4.99 a month'],
  alternates: {
    canonical: 'https://mynella.app/stories/article-two'
  }
};

export default function ArticleThreePage() {
  return (
    <div className="space-y-0">
      <div className="px-4 md:px-8 pt-0 md:pt-0">
        <div className="rounded-[28px] md:rounded-[36px] bg-[#E8D5CE] overflow-hidden relative group">
          {/* Desktop Image - Absolute to fill right column border to border */}
          <div className="absolute right-0 top-0 bottom-0 w-[56%] hidden lg:block z-0">
            <img
              src="/storiesarticletwo.webp"
              alt="why we built nella"
              className="w-full h-full object-contain object-center"
            />
          </div>

          {/* Breadcrumbs inside the hero */}
          <div className="max-w-7xl mx-auto px-6 pt-6 pb-0 relative z-10">
            <div className="flex items-center gap-2 text-[12px] font-semibold text-[#1F1410]/60">
              <Link href="/" className="hover:text-espresso transition-colors">Home</Link>
              <span className="font-normal text-[#1F1410]/30">›</span>
              <Link href="/stories" className="hover:text-espresso transition-colors">Stories</Link>
              <span className="font-normal text-[#1F1410]/30">›</span>
              <span className="text-espresso font-semibold">article-two</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 pt-6 pb-12 md:pt-8 md:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:min-h-[360px]">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 z-10 pb-0 self-center">
              <div className="inline-flex items-center gap-1.5 justify-start">
                <span className="font-display italic text-[13px] text-[#8F6F3E]">business</span>
              </div>
              <h1 className="font-display font-[600] text-[36px] sm:text-[48px] md:text-[54px] tracking-tight text-espresso leading-none">
                Why we built nella on a subscription model.
              </h1>
            </div>

            {/* Mobile Image */}
            <div className="block lg:hidden w-full relative z-10">
              <img
                src="/storiesarticletwo.webp"
                alt="why we built nella"
                className="w-full h-auto max-h-[450px] object-cover object-center rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      <article className="text-left max-w-7xl mx-auto px-6 pt-12 md:pt-16 space-y-8 md:space-y-12">
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
            nella Core is free. It always will be. You get treatment logging, basic reminders, routine tracking, and your glow score. For most women, that is enough to feel in control.
          </p>
          <p>
            nella Pro costs £4.99 a month. It unlocks the intelligence layer: advanced conflict detection, full aftercare automation, spending analytics by clinic and treatment type, the monthly wrap card, and the full glow score breakdown.
          </p>

          <div className="p-8 sm:p-10 bg-white border border-[#E8E5DC] rounded-3xl space-y-8 shadow-sm my-10 relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#DEC68B]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>

            <div className="relative z-10 pb-6">
              <span className="text-[11px] font-semibold tracking-widest text-[#8F6F3E] mb-2 block">level two</span>
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
