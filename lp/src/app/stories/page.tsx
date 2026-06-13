import type { Metadata } from 'next';
import Link from 'next/link';
import CtaSection from '../../components/CtaSection';

export const metadata: Metadata = {
  title: 'stories | nella',
  description: 'thoughts on aesthetic science, the modern beauty drawer, and building a digital skin lab.',
  alternates: {
    canonical: 'https://mynella.app/stories'
  }
};

export default function StoriesHubPage() {
  return (
    <div className="space-y-0">
      <div className="text-left max-w-7xl mx-auto px-6 py-12 space-y-16">
      <section className="space-y-6 text-center pb-16">
        <div className="inline-flex items-center gap-1.5 justify-center">
          <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
          <span className="font-display italic text-[13px] text-[#8F6F3E]">the editorial</span>
          <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
        </div>

        <h1 className="font-display font-[600] text-[36px] sm:text-[48px] tracking-tight text-espresso leading-none text-center">
          Thoughts from the lab.
        </h1>

        <p className="text-[14px] sm:text-[15px] text-grey max-w-2xl mx-auto font-sans leading-relaxed text-center">
          thoughts on aesthetic science, the modern beauty drawer, and building a system that actually holds the details together.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Article 1 */}
        <Link 
          href="/stories/the-myth-of-the-ten-step-routine"
          className="relative overflow-hidden p-8 bg-white border border-[#E8E5DC] rounded-3xl shadow-sm hover:shadow-md hover:border-[#8F6F3E]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6 block group transform hover:-translate-y-1"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="space-y-3 z-10 relative">
            <span className="text-[11px] text-[#8F6F3E] font-medium tracking-wide uppercase">SCIENCE</span>
            <h3 className="font-sans font-[600] text-[20px] text-espresso leading-tight group-hover:text-[#8F6F3E] transition-colors duration-300">
              The myth of the ten step routine.
            </h3>
            <p className="text-[13px] text-grey font-sans leading-relaxed">
              why adding more actives usually results in a broken barrier, and how to actually measure what is working.
            </p>
          </div>
          <div className="pt-2 z-10 relative">
            <span className="text-[12px] font-semibold text-[#8F6F3E] inline-flex items-center gap-1">
              Read the article <span className="transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </span>
          </div>
        </Link>

        {/* Article 2 */}
        <Link 
          href="/stories/why-we-paused-your-retinol"
          className="relative overflow-hidden p-8 bg-white border border-[#E8E5DC] rounded-3xl shadow-sm hover:shadow-md hover:border-[#8F6F3E]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6 block group transform hover:-translate-y-1"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="space-y-3 z-10 relative">
            <span className="text-[11px] text-[#8F6F3E] font-medium tracking-wide uppercase">PRODUCT</span>
            <h3 className="font-sans font-[600] text-[20px] text-espresso leading-tight group-hover:text-[#8F6F3E] transition-colors duration-300">
              Why we paused your retinol.
            </h3>
            <p className="text-[13px] text-grey font-sans leading-relaxed">
              a look inside the aftercare logic. what happens to your routines when you log a microneedling treatment in nella.
            </p>
          </div>
          <div className="pt-2 z-10 relative">
            <span className="text-[12px] font-semibold text-[#8F6F3E] inline-flex items-center gap-1">
              Read the article <span className="transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </span>
          </div>
        </Link>

        {/* Article 3 */}
        <Link 
          href="/stories/the-subscription-decision"
          className="relative overflow-hidden p-8 bg-white border border-[#E8E5DC] rounded-3xl shadow-sm hover:shadow-md hover:border-[#8F6F3E]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6 block group transform hover:-translate-y-1"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="space-y-3 z-10 relative">
            <span className="text-[11px] text-[#8F6F3E] font-medium tracking-wide uppercase">BUSINESS</span>
            <h3 className="font-sans font-[600] text-[20px] text-espresso leading-tight group-hover:text-[#8F6F3E] transition-colors duration-300">
              The £4.99 decision.
            </h3>
            <p className="text-[13px] text-grey font-sans leading-relaxed">
              why nella is entirely independent. no ads, no affiliate kickbacks, no selling your face to brands.
            </p>
          </div>
          <div className="pt-2 z-10 relative">
            <span className="text-[12px] font-semibold text-[#8F6F3E] inline-flex items-center gap-1">
              Read the article <span className="transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </span>
          </div>
        </Link>
      </section>

      </div>

      <CtaSection
        title="The thread."
        subtitle="Read the stories from the lab. And join the waitlist."
        backgroundClass="bg-transparent mt-12"
      />
    </div>
  );
}
