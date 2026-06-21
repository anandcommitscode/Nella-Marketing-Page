import type { Metadata } from 'next';
import Link from 'next/link';
import PhaseAwareCta from '../../components/PhaseAwareCta';

export const metadata: Metadata = {
  title: 'get nella on iOS',
  description: 'nella is coming to the App Store. join the waitlist.',
  alternates: {
    canonical: 'https://mynella.app/download'
  }
};

export default function DownloadPage() {
  return (
    <div className="space-y-0">
      <div className="px-4 md:px-8 pt-0 md:pt-0">
        <div className="rounded-[28px] md:rounded-[36px] bg-[#E8D5CE] overflow-visible relative group">
          <div className="max-w-7xl mx-auto px-6 pt-6 pb-0 md:pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 z-10 pb-0 self-start lg:pt-12">
              <div className="inline-flex items-center gap-1.5 justify-start">
                <span className="font-display italic text-[13px] text-[#8F6F3E]">coming soon</span>
              </div>
              <h1 className="font-display font-[600] text-[36px] sm:text-[48px] md:text-[54px] tracking-tight text-espresso leading-none">
                download nella.
              </h1>
              <div className="text-[15px] sm:text-[16px] text-espresso/80 max-w-[420px] font-sans leading-relaxed space-y-4">
                <p>nella launches on iOS soon. the Android version will follow.</p>
              </div>
              <div className="pt-4 flex justify-start">
                <PhaseAwareCta 
                  preLaunchText="Join the waitlist" 
                  postLaunchText="Download the app"
                  className="w-[180px] py-4 text-[#1F1410] rounded-full font-semibold text-[14px] transition-all cursor-pointer text-center flex justify-center items-center hover:opacity-90 shadow-md"
                  style={{
                    background: 'linear-gradient(135deg, #DEC68B 0%, #C4A067 50%, #B8924A 100%)'
                  }}
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 relative flex justify-center items-end z-10 -mb-24 md:-mb-36">
              <div className="relative w-full max-w-[360px] sm:max-w-[400px] md:max-w-[440px] z-10">
                <img 
                  src="/heroes/waitlist.png" 
                  alt="nella Download Preview" 
                  className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
