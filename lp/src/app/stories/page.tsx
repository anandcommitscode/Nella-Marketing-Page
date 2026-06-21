import type { Metadata } from 'next';
import Link from 'next/link';
import CtaSection from '../../components/CtaSection';
import PhaseAwareCta from '../../components/PhaseAwareCta';

export const metadata: Metadata = {
  title: 'nella stories: beauty, science, and the app',
  description: 'thoughts on aesthetic science, the modern beauty drawer, and why we built nella.',
  keywords: ['nella stories', 'aesthetic science blog', 'beauty app blog', 'skincare tracker updates'],
  alternates: {
    canonical: 'https://mynella.app/stories'
  }
};

export default function StoriesHubPage() {
  return (
    <div className="space-y-0">
      <div className="px-4 md:px-8 pt-0 md:pt-0">
        <div className="rounded-[28px] md:rounded-[36px] bg-[#E8D5CE] overflow-hidden relative group">
          {/* Desktop Image - Absolute to fill right column border to border */}
          <div className="absolute right-0 top-0 bottom-0 w-[56%] hidden lg:block z-0">
            <img
              src="/storiesimprovedimg.webp"
              alt="stories illustration"
              className="w-full h-full object-contain object-center"
            />
          </div>

          {/* Breadcrumbs inside the hero */}
          <div className="max-w-7xl mx-auto px-6 pt-6 pb-0 relative z-10">
            <div className="flex items-center gap-2 text-[12px] font-semibold text-[#1F1410]/60">
              <Link href="/" className="hover:text-espresso transition-colors">Home</Link>
              <span className="font-normal text-[#1F1410]/30">&gt;</span>
              <span className="text-espresso font-semibold">Stories</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 pt-6 pb-12 md:pt-8 md:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:min-h-[360px]">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 z-10 pb-0 self-center">
              <div className="inline-flex items-center gap-1.5 justify-start">
                <span className="font-display italic text-[13px] text-[#8F6F3E]">the editorial</span>
              </div>
              <h1 className="font-display font-[600] text-[36px] sm:text-[48px] md:text-[54px] tracking-tight text-espresso leading-none">
                stories.
              </h1>
              <p className="text-[15px] sm:text-[16px] text-[#1F1410]/80 max-w-[420px] font-sans leading-relaxed">
                thoughts on aesthetic science, the modern beauty drawer, and why we built nella.
              </p>
              <div className="pt-4 flex justify-start">
                <PhaseAwareCta
                  preLaunchText="Join the waitlist"
                  postLaunchText="Start your free trial"
                  className="w-[180px] py-4 text-[#1F1410] rounded-full font-semibold text-[14px] transition-all cursor-pointer text-center flex justify-center items-center hover:opacity-90 shadow-md"
                  style={{
                    background: 'linear-gradient(135deg, #DEC68B 0%, #C4A067 50%, #B8924A 100%)'
                  }}
                />
              </div>
            </div>

            {/* Mobile Image */}
            <div className="block lg:hidden w-full relative z-10">
              <img
                src="/storiesimprovedimg.webp"
                alt="stories illustration"
                className="w-full h-auto max-h-[450px] object-cover object-center rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-left max-w-7xl mx-auto px-6 pt-12 md:pt-16 space-y-8 md:space-y-16">

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Article 1 */}
          <Link
            href="/stories/article-one"
            className="relative overflow-hidden p-8 bg-white border border-[#E8E5DC] rounded-3xl shadow-sm hover:shadow-md hover:border-[#8F6F3E]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6 block group transform hover:-translate-y-1"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="space-y-3 z-10 relative">
              <span className="text-[11px] text-[#8F6F3E] font-medium tracking-wide uppercase">EDITORIAL</span>
              <h3 className="font-sans font-[600] text-[20px] text-espresso leading-tight group-hover:text-[#8F6F3E] transition-colors duration-300">
                why your notes app is failing your beauty routine.
              </h3>
              <p className="text-[13px] text-grey font-sans leading-relaxed">
                your botox units are in a note from 2022. your retinol schedule is in your head. why the modern beauty drawer needs a dedicated system.
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
            href="/stories/article-two"
            className="relative overflow-hidden p-8 bg-white border border-[#E8E5DC] rounded-3xl shadow-sm hover:shadow-md hover:border-[#8F6F3E]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6 block group transform hover:-translate-y-1"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="space-y-3 z-10 relative">
              <span className="text-[11px] text-[#8F6F3E] font-medium tracking-wide uppercase">BUSINESS</span>
              <h3 className="font-sans font-[600] text-[20px] text-espresso leading-tight group-hover:text-[#8F6F3E] transition-colors duration-300">
                why we built nella on a subscription model.
              </h3>
              <p className="text-[13px] text-grey font-sans leading-relaxed">
                we don't sell your face to skincare brands. we don't do affiliate links. we charge £4.99 a month so we work for you.
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
            href="/stories/article-three"
            className="relative overflow-hidden p-8 bg-white border border-[#E8E5DC] rounded-3xl shadow-sm hover:shadow-md hover:border-[#8F6F3E]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6 block group transform hover:-translate-y-1"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="space-y-3 z-10 relative">
              <span className="text-[11px] text-[#8F6F3E] font-medium tracking-wide uppercase">SCIENCE</span>
              <h3 className="font-sans font-[600] text-[20px] text-espresso leading-tight group-hover:text-[#8F6F3E] transition-colors duration-300">
                the myth of the ten-step routine.
              </h3>
              <p className="text-[13px] text-grey font-sans leading-relaxed">
                why your skin barrier is angry, your wallet is empty, and what happens when you let nella strip your routine back to the essentials.
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
        backgroundClass="bg-transparent"
      />
    </div>
  );
}
