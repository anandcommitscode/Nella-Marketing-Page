import type { Metadata } from 'next';
import Link from 'next/link';
import CtaSection from '../../../components/CtaSection';


export const metadata: Metadata = {
  title: 'why your notes app is failing your beauty routine',
  description: 'your botox units are in a note from 2022. your retinol schedule is in your head. why the modern beauty drawer needs a dedicated system.',
  keywords: ['beauty routine tracker', 'botox notes', 'skincare spreadsheet', 'track cosmetic treatments'],
  alternates: {
    canonical: 'https://mynella.app/stories/article-one'
  }
};

export default function ArticleTwoPage() {
  return (
    <div className="space-y-0">
      <div className="px-4 md:px-8 pt-0 md:pt-0">
        <div className="rounded-[28px] md:rounded-[36px] bg-[#E8D5CE] overflow-hidden relative group">
          {/* Desktop Image - Absolute to fill right column border to border */}
          <div className="absolute right-0 top-0 bottom-0 w-[56%] hidden lg:block z-0">
            <img
              src="/storiesarticleone.webp"
              alt="Notes app vs nella routine"
              className="w-full h-full object-contain object-center"
            />
          </div>

          {/* Breadcrumbs inside the hero */}
          <div className="max-w-7xl mx-auto px-6 pt-6 pb-0 relative z-10">
            <div className="flex items-center gap-2 text-[12px] font-semibold text-[#1F1410]/60">
              <Link href="/" className="hover:text-espresso transition-colors">Home</Link>
              <span className="font-normal text-[#1F1410]/30">&gt;</span>
              <Link href="/stories" className="hover:text-espresso transition-colors">Stories</Link>
              <span className="font-normal text-[#1F1410]/30">&gt;</span>
              <span className="text-espresso font-semibold">why your notes app is failing your beauty routine</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 pt-6 pb-12 md:pt-8 md:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:min-h-[360px]">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 z-10 pb-0 self-center">
              <div className="inline-flex items-center gap-1.5 justify-start">
                <span className="font-display italic text-[13px] text-[#8F6F3E]">editorial</span>
              </div>
              <h1 className="font-display font-[600] text-[36px] sm:text-[48px] md:text-[54px] tracking-tight text-espresso leading-none">
                why your notes app is failing your beauty routine.
              </h1>
            </div>

            {/* Mobile Image */}
            <div className="block lg:hidden w-full relative z-10">
              <img
                src="/storiesarticleone.webp"
                alt="Notes app vs nella routine"
                className="w-full h-auto max-h-[450px] object-cover object-center rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      <article className="text-left max-w-7xl mx-auto px-6 pt-12 md:pt-16 space-y-8 md:space-y-12">
        <div className="space-y-8 text-[14.5px] text-grey font-sans leading-relaxed max-w-3xl mx-auto">
          <p>
            You log a microneedling treatment on a tuesday afternoon. By wednesday morning, your retinol is gone from tonight&rsquo;s routine. Your vitamin C is paused for three days. Your AHA will not return for five.
          </p>
          <p>
            You didn&rsquo;t do anything. Nella did.
          </p>
          <p className="font-semibold text-espresso">
            This is the aftercare engine.
          </p>
          <p>
            When you undergo microneedling, your skin barrier is intentionally compromised. Thousands of micro-channels are created in the upper dermis to trigger a controlled healing response. The clinical literature is clear: applying retinoids, strong acids, or high-concentration vitamin C to a compromised barrier can cause irritation, hyperpigmentation, and in some cases, scarring.
          </p>
          <p>
            The problem is that most women know this in theory but forget it in practice. You are tired on a wednesday evening. You reach for the retinol out of habit. And the £180 you spent on microneedling is now working against you.
          </p>



          <div className="p-8 bg-white border border-[#E8E5DC] rounded-3xl space-y-6 shadow-sm my-8">
            <h3 className="font-sans font-[600] text-[18px] text-espresso">The logic is built on clinical recovery timelines:</h3>
            <div className="space-y-5">

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-[#FAF7F2] border border-[#E8E5DC] flex flex-col items-center justify-center shrink-0 shadow-xs">
                  <span className="font-display font-bold text-[#8F6F3E] text-[12px] leading-none">7</span>
                  <span className="text-[9px] font-semibold text-grey tracking-widest uppercase mt-0.5">days</span>
                </div>
                <div className="space-y-1 pt-0.5">
                  <p className="font-semibold text-espresso text-[14px]">Retinol</p>
                  <p className="text-[13px] text-grey leading-relaxed">The barrier needs a full week to close the micro-channels. Retinoids accelerate cell turnover on an already-exposed dermis.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-[#FAF7F2] border border-[#E8E5DC] flex flex-col items-center justify-center shrink-0 shadow-xs">
                  <span className="font-display font-bold text-[#8F6F3E] text-[12px] leading-none">3</span>
                  <span className="text-[9px] font-semibold text-grey tracking-widest uppercase mt-0.5">days</span>
                </div>
                <div className="space-y-1 pt-0.5">
                  <p className="font-semibold text-espresso text-[14px]">Vitamin C</p>
                  <p className="text-[13px] text-grey leading-relaxed">L-ascorbic acid at high concentrations is too acidic for a compromised barrier. Gentler derivatives may return sooner.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-[#FAF7F2] border border-[#E8E5DC] flex flex-col items-center justify-center shrink-0 shadow-xs">
                  <span className="font-display font-bold text-[#8F6F3E] text-[12px] leading-none">5</span>
                  <span className="text-[9px] font-semibold text-grey tracking-widest uppercase mt-0.5">days</span>
                </div>
                <div className="space-y-1 pt-0.5">
                  <p className="font-semibold text-espresso text-[14px]">AHA / BHA</p>
                  <p className="text-[13px] text-grey leading-relaxed">Chemical exfoliants on micro-channeled skin compound the trauma. The barrier needs to re-establish its acid mantle first.</p>
                </div>
              </div>

            </div>
          </div>

          <p>
            At the end of each pause window, the product quietly returns to your nightly checklist. No notification. No ceremony. It is just there again, because the science says it is safe.
          </p>
          <p>
            This is what we mean when we say nella does the remembering. You spent the money. Nella protects the investment.
          </p>
        </div>

        <div className="p-6 bg-white border border-[#E8E5DC] rounded-2xl text-[13.5px] text-grey font-sans leading-relaxed shadow-sm relative overflow-hidden mt-12 max-w-3xl mx-auto">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E]"></div>
          <h4 className="font-semibold text-espresso mb-1">Why this matters</h4>
          Nella does not warn you. She does not send you a pop-up. She simply removes the product from tonight&rsquo;s list. The decision is already made.
        </div>

      </article>

      <CtaSection
        title="The aftercare engine."
        subtitle="You spent the money. Nella protects the investment. Join the waitlist."
        backgroundClass="bg-transparent"
      />
    </div>
  );
}
