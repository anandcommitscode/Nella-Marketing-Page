import type { Metadata } from 'next';
import Link from 'next/link';
import CtaSection from '../../../components/CtaSection';


export const metadata: Metadata = {
  title: 'the myth of the ten-step skincare routine',
  description: 'why your skin barrier is angry, your wallet is empty, and what happens when you let nella strip your routine back to the essentials.',
  keywords: ['ten step skincare routine', 'skin barrier repair', 'minimal skincare routine app', 'skincare essentials'],
  alternates: {
    canonical: 'https://mynella.app/stories/article-three'
  }
};

export default function ArticleOnePage() {
  return (
    <div className="space-y-0">
      <div className="px-4 md:px-8 pt-0 md:pt-0">
        <div className="rounded-[28px] md:rounded-[36px] bg-[#E8D5CE] overflow-hidden relative group">
          {/* Desktop Image - Absolute to fill right column border to border */}
          <div className="absolute right-0 top-0 bottom-0 w-[56%] hidden lg:block z-0">
            <img
              src="/storiesarticlethree.webp"
              alt="Myth of ten-step skincare routine"
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
              <span className="text-espresso font-semibold">the myth of the ten-step routine</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 pt-6 pb-12 md:pt-8 md:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:min-h-[360px]">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 z-10 pb-0 self-center">
              <div className="inline-flex items-center gap-1.5 justify-start">
                <span className="font-display italic text-[13px] text-[#8F6F3E]">science</span>
              </div>
              <h1 className="font-display font-[600] text-[36px] sm:text-[48px] md:text-[54px] tracking-tight text-espresso leading-none">
                the myth of the ten-step routine.
              </h1>
            </div>

            {/* Mobile Image */}
            <div className="block lg:hidden w-full relative z-10">
              <img
                src="/storiesarticlethree.webp"
                alt="Myth of ten-step skincare routine"
                className="w-full h-auto max-h-[450px] object-cover object-center rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      <article className="text-left max-w-7xl mx-auto px-6 pt-12 md:pt-16 space-y-8 md:space-y-12">
        <div className="space-y-8 text-[14.5px] text-grey font-sans leading-relaxed max-w-3xl mx-auto">
          <p>
            If you look at a typical beauty cabinet today, it looks like a chemistry lab. Serums lined up by color, exfoliants stacked next to hydrators, and actives sitting next to other actives that do the exact same thing.
          </p>
          <p>
            We have been sold the idea that more is better. That if a 5% niacinamide is good, a 10% must be twice as good. That if one acid makes you glow, three acids will make you glass.
          </p>
          <p className="font-semibold text-espresso">
            This is how you break your barrier.
          </p>
          <p>
            When you apply ten different products, you are not just applying ten different active ingredients. You are applying ten different preservative systems, ten different emulsifiers, and ten different delivery mechanisms. The math is not additive; it is chaotic.
          </p>
          <p>
            The reality of aesthetic science is that your skin can only process so much at once. A deeply optimized three-step routine will almost always outperform a chaotic ten-step routine, simply because the active ingredients are actually allowed to penetrate without competing or neutralizing one another.
          </p>

          <p>
            If you want to see what is actually working, you need to strip it back. Stop guessing. Start tracking. Refine your routine to the core essentials, log your consistency, and watch how your barrier responds.
          </p>
        </div>

        <div className="p-6 bg-white border border-[#E8E5DC] rounded-2xl text-[13.5px] text-grey font-sans leading-relaxed shadow-sm relative overflow-hidden mt-12 max-w-3xl mx-auto">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E]"></div>
          <h4 className="font-semibold text-espresso mb-1">Why this matters</h4>
          Nella was built to cut through the noise. The glow score doesn&rsquo;t reward you for logging more products; it rewards you for consistency and clinical adherence.
        </div>

      </article>

      <CtaSection
        title="Cut through the noise."
        subtitle="Stop guessing. Start tracking. Join the waitlist."
        backgroundClass="bg-transparent"
      />
    </div>
  );
}
