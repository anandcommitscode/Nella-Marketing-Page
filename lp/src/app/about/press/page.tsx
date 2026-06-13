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
      <div className="text-left max-w-5xl mx-auto px-6 py-12 space-y-12">
        <div className="flex items-center gap-2 text-[13px] font-semibold text-grey">
          <Link href="/" className="hover:text-espresso transition-colors">Home</Link>
          <span className="text-grey font-normal">&gt;</span>
          <Link href="/about" className="hover:text-espresso transition-colors">About</Link>
          <span className="text-grey font-normal">&gt;</span>
          <span className="text-espresso">Press</span>
        </div>

        <div className="pt-4 space-y-6 text-center pb-16">
          <div className="inline-flex items-center gap-1.5 justify-center">
            <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
            <span className="font-display italic text-[13px] text-[#8F6F3E]">press</span>
            <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
          </div>

          <h1 className="font-display font-[600] text-[36px] sm:text-[48px] tracking-tight text-espresso leading-none">
            Nella in the press.
          </h1>

          <p className="text-[14px] sm:text-[15px] text-grey max-w-xl mx-auto font-sans leading-relaxed">
            coverage, assets, and contact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
            <button className="px-6 py-3 bg-darkest-espresso text-[#FAF7F2] rounded-full text-[13px] font-bold tracking-wide hover:bg-espresso transition-all mt-2 shadow-lg active:scale-95">
              Download PDF
            </button>
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
