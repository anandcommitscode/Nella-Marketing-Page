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
      <div className="text-left max-w-5xl mx-auto px-6 py-16 space-y-16">

        <section className="space-y-6 text-center pb-16">
          <div className="inline-flex items-center gap-1.5 justify-center">
            <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
            <span className="font-display italic text-[13px] text-[#8F6F3E]">nella digital skin lab</span>
            <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
          </div>

          <h1 className="font-display font-[600] text-[36px] sm:text-[48px] tracking-tight text-espresso leading-none text-center max-w-4xl mx-auto">
            About nella.
          </h1>

          <p className="text-[14px] sm:text-[15px] text-grey max-w-2xl mx-auto font-sans leading-relaxed text-center">
            built in the UK, by women who take their beauty life seriously.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card 1 */}
          <Link
            href="/about/story"
            className="relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[24px] p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-start block"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#DEC68B] to-[#8F6F3E] flex items-center justify-center mb-4 text-white shadow-md shadow-[#8F6F3E]/20 group-hover:scale-110 transition-transform">
              <BookOpen size={16} strokeWidth={2.5} />
            </div>
            <h3 className="font-display font-semibold text-[18px] sm:text-[20px] text-espresso mb-2">
              our story.
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
              how nella thinks about your data.
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
              press.
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
        backgroundClass="bg-transparent mt-12"
      />
    </div>
  );
}
