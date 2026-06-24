import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Shield, Newspaper } from 'lucide-react';
import CtaSection from '../../components/CtaSection';

export const metadata: Metadata = {
  title: 'about nella: who built her, why, and how she handles your data',
  description: 'nella was built by women who were tired of trying to remember it all. read the story, the data principles, and the press.',
  keywords: ['nella app', 'mynella ltd', 'nella founder', 'beauty app uk'],
  alternates: {
    canonical: 'https://mynella.app/about'
  }
};

export default function AboutHubPage() {
  return (
    <div className="space-y-0">
      <div className="px-4 md:px-8 pt-0 md:pt-0">
        <div className="rounded-[28px] md:rounded-[36px] bg-[#E8D5CE] overflow-hidden relative group">
          {/* Desktop Image - Absolute to fill right column border to border */}
          <div className="absolute right-0 top-0 bottom-0 w-[56%] hidden lg:block z-0">
            <img
              src="/aboutnella.webp"
              alt="About nella"
              className="w-full h-full object-contain object-center"
            />
          </div>

          {/* Breadcrumbs inside the hero */}
          <div className="max-w-7xl mx-auto px-6 pt-6 pb-0 relative z-10">
            <div className="flex items-center gap-2 text-[12px] font-semibold text-[#1F1410]/60">
              <Link href="/" className="hover:text-espresso transition-colors">Home</Link>
              <span className="font-normal text-[#1F1410]/30">›</span>
              <span className="text-espresso font-semibold">About</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 pt-6 pb-12 md:pt-8 md:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:min-h-[360px]">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 z-10 pb-0 self-center">
              <div className="inline-flex items-center gap-1.5 justify-start">
                <span className="font-display italic text-[13px] text-[#8F6F3E]">nella digital skin lab</span>
              </div>
              <h1 className="font-display font-[600] text-[36px] sm:text-[48px] md:text-[54px] tracking-tight text-espresso leading-none">
                About nella.
              </h1>
              <p className="text-[15px] sm:text-[16px] text-espresso/80 max-w-[420px] font-sans leading-relaxed">
                built in the UK, by women who take their beauty life seriously.
              </p>
            </div>

            {/* Mobile Image */}
            <div className="block lg:hidden w-full relative z-10">
              <img
                src="/aboutnella.webp"
                alt="About nella"
                className="w-full h-auto max-h-[450px] object-cover object-center rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-left max-w-7xl mx-auto px-6 pt-12 md:pt-16 space-y-8 md:space-y-16">

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Card 1 */}
          <Link
            href="/about/story"
            className="relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[24px] p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-start block"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#DEC68B] to-[#8F6F3E] flex items-center justify-center mb-4 text-white shadow-md shadow-[#8F6F3E]/20 group-hover:scale-110 transition-transform">
              <BookOpen size={16} strokeWidth={2.5} />
            </div>
            <h3 className="font-display font-semibold text-[18px] sm:text-[20px] text-espresso mb-2">
              Our story.
            </h3>
            <p className="text-[13.5px] text-grey font-sans leading-relaxed flex-grow">
              why nella exists. the gap, the build, and the women who shaped her.
            </p>
            <div className="mt-6 text-[#8F6F3E] font-semibold text-[13.5px] flex items-center gap-1 group-hover:gap-2 transition-all">
              read more <ArrowRight size={14} />
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            href="/about/privacy-principles"
            className="relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[24px] p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-start block"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#DEC68B] to-[#8F6F3E] flex items-center justify-center mb-4 text-white shadow-md shadow-[#8F6F3E]/20 group-hover:scale-110 transition-transform">
              <Shield size={16} strokeWidth={2.5} />
            </div>
            <h3 className="font-display font-semibold text-[18px] sm:text-[20px] text-espresso mb-2">
              How nella thinks about your data.
            </h3>
            <p className="text-[13.5px] text-grey font-sans leading-relaxed flex-grow">
              no ads. no data sales. no sponsored content. your beauty life is yours. here is how it stays that way.
            </p>
            <div className="mt-6 text-[#8F6F3E] font-semibold text-[13.5px] flex items-center gap-1 group-hover:gap-2 transition-all">
              read more <ArrowRight size={14} />
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            href="/about/press"
            className="relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[24px] p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-start block"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#DEC68B] to-[#8F6F3E] flex items-center justify-center mb-4 text-white shadow-md shadow-[#8F6F3E]/20 group-hover:scale-110 transition-transform">
              <Newspaper size={16} strokeWidth={2.5} />
            </div>
            <h3 className="font-display font-semibold text-[18px] sm:text-[20px] text-espresso mb-2">
              Press.
            </h3>
            <p className="text-[13.5px] text-grey font-sans leading-relaxed flex-grow">
              coverage, press kit, and contact details for journalists and partners.
            </p>
            <div className="mt-6 text-[#8F6F3E] font-semibold text-[13.5px] flex items-center gap-1 group-hover:gap-2 transition-all">
              read more <ArrowRight size={14} />
            </div>
          </Link>
        </section>

      </div>

      <CtaSection
        title="Ready to track properly?"
        subtitle="free to use. £4.99 a month for Pro. cancel anytime."
        backgroundClass="bg-transparent"
      />
    </div>
  );
}
