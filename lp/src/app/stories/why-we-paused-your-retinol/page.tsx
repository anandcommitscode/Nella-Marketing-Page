import type { Metadata } from 'next';
import Link from 'next/link';
import CtaSection from '../../../components/CtaSection';

export const metadata: Metadata = {
  title: 'why we paused your retinol | stories',
  description: 'a look inside the aftercare logic. what happens to your routines when you log a microneedling treatment in nella.',
  alternates: {
    canonical: 'https://mynella.app/stories/why-we-paused-your-retinol'
  }
};

export default function ArticleTwoPage() {
  return (
    <div className="space-y-0">
      <article className="text-left max-w-5xl mx-auto px-6 py-12 space-y-12">
      <div className="flex items-center gap-2 text-[13px] font-semibold text-grey">
        <Link href="/" className="hover:text-espresso transition-colors">Home</Link>
        <span className="text-grey font-normal">&gt;</span>
        <Link href="/stories" className="hover:text-espresso transition-colors">Stories</Link>
        <span className="text-grey font-normal">&gt;</span>
        <span className="text-espresso">Why we paused your retinol</span>
      </div>

      <div className="pt-4 space-y-6 text-center border-b border-[#E8E5DC] pb-12">
        <div className="inline-flex items-center gap-1.5 justify-center">
          <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
          <span className="font-display italic text-[13px] text-[#8F6F3E]">product</span>
          <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
        </div>

        <h1 className="font-display font-[600] text-[36px] sm:text-[48px] tracking-tight text-espresso leading-none">
          Why we paused your retinol.
        </h1>

        <p className="text-[13px] text-grey font-medium uppercase tracking-wider">
          published february 3rd
        </p>
      </div>

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
