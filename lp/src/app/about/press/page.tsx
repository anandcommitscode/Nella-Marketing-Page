import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Download, Newspaper } from 'lucide-react';
import CtaSection from '../../../components/CtaSection';


export const metadata: Metadata = {
  title: 'nella in the press: coverage, press kit, and contact',
  description: 'coverage of nella, the beauty intelligence app. download the press kit or get in touch at press@mynella.app.',
  keywords: ['nella press', 'nella media kit', 'nella app contact'],
  alternates: {
    canonical: 'https://mynella.app/about/press'
  }
};

export default function PressPage() {
  return (
    <div className="space-y-0">
      <div className="px-4 md:px-8 pt-0 md:pt-0">
        <div className="rounded-[28px] md:rounded-[36px] bg-[#E8D5CE] overflow-hidden relative group">
          {/* Desktop Image - Absolute to fill right column border to border */}
          <div className="absolute right-0 top-0 bottom-0 w-[42%] hidden lg:block z-0">
            <img
              src="/nellapress.webp"
              alt="Nella press"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Breadcrumbs inside the hero */}
          <div className="max-w-7xl mx-auto px-6 pt-6 pb-0 relative z-10">
            <div className="flex items-center gap-2 text-[12px] font-semibold text-[#1F1410]/60">
              <Link href="/" className="hover:text-espresso transition-colors">Home</Link>
              <span className="font-normal text-[#1F1410]/30">›</span>
              <Link href="/about" className="hover:text-espresso transition-colors">About</Link>
              <span className="font-normal text-[#1F1410]/30">›</span>
              <span className="text-espresso font-semibold">Press</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 pt-6 pb-12 md:pt-8 md:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:min-h-[360px]">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 z-10 pb-0 self-center">
              <div className="inline-flex items-center gap-1.5 justify-start">
                <span className="font-display italic text-[13px] text-[#8F6F3E]">press</span>
              </div>
              <h1 className="font-display font-[600] text-[36px] sm:text-[48px] md:text-[54px] tracking-tight text-espresso leading-none">
                nella in the press.
              </h1>
              <p className="text-[15px] sm:text-[16px] text-[#1F1410]/80 max-w-[420px] font-sans leading-relaxed">
                coverage, assets, and contact.
              </p>
            </div>

            {/* Mobile Image */}
            <div className="block lg:hidden w-full relative z-10">
              <img
                src="/nellapress.webp"
                alt="Nella press"
                className="w-full h-auto max-h-[300px] object-cover object-center rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-left max-w-7xl mx-auto px-6 pt-12 md:pt-16 space-y-8 md:space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Contact Card */}
          <div className="relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] p-8 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col items-center text-center justify-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-[#FAF7F2] flex items-center justify-center text-[#8F6F3E] group-hover:scale-110 transition-transform shadow-sm">
              <Mail size={24} strokeWidth={2.5} />
            </div>
            <div className="space-y-2">
              <h2 className="font-display font-[600] text-[24px] text-espresso">Press contact.</h2>
              <p className="text-[14px] text-grey font-sans leading-relaxed">
                for all press inquiries, please email<br />
                <a href="mailto:press@mynella.app" className="text-[#8F6F3E] font-medium hover:underline mt-1 inline-block">press@mynella.app</a>
              </p>
            </div>
          </div>

          {/* Press Kit Card */}
          <div className="relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] p-8 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col items-center text-center justify-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#DEC68B] to-[#8F6F3E] flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-md shadow-[#8F6F3E]/20">
              <Download size={24} strokeWidth={2.5} />
            </div>
            <div className="space-y-2">
              <h2 className="font-display font-[600] text-[24px] text-espresso">Press kit.</h2>
              <p className="text-[14px] text-grey font-sans leading-relaxed">
                download the press kit for logos, brand guidelines, and high-resolution screenshots.
              </p>
            </div>
            <a
              href="/nella_press_kit.pdf"
              download
              className="px-6 py-3 bg-darkest-espresso text-[#FAF7F2] rounded-full text-[13px] font-bold tracking-wide hover:bg-espresso transition-all mt-2 shadow-lg active:scale-95 text-center flex items-center justify-center cursor-pointer"
            >
              Download PDF
            </a>
          </div>

          {/* Coverage Card (Full Width) */}
          <div className="md:col-span-2 relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] p-8 md:p-10 shadow-sm mt-4">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E]"></div>
            <div className="flex flex-col md:flex-row items-center gap-8 justify-between relative z-10">
              <div className="flex-1 space-y-4 text-center md:text-left pl-2">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <h2 className="font-display font-[600] text-[28px] text-espresso">Coverage.</h2>
                </div>
                <p className="text-[14px] text-grey font-sans leading-relaxed max-w-lg">
                  the latest articles, features, and mentions of nella across the beauty and tech press.
                </p>
              </div>

              <div className="w-full md:w-auto flex-1">
                <div className="p-8 border border-dashed border-[#DEC68B]/60 rounded-2xl text-center text-[13px] text-[#8F6F3E] italic bg-[#FAF7F2] w-full shadow-sm">
                  [Press coverage links will appear here]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaSection
        title="Ready to track properly?"
        subtitle="free to use. £4.99 a month for Pro. cancel anytime."
        backgroundClass="bg-transparent"
      />
    </div>
  );
}
