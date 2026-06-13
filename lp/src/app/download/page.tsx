import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'download nella',
  description: 'nella launches on iOS in August 2026. join the waitlist to be the first to know.',
  alternates: {
    canonical: 'https://mynella.app/download'
  }
};

export default function DownloadPage() {
  return (
    <div className="space-y-0">
      <section className="pt-24 pb-32 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-12">
          <div className="inline-flex items-center gap-1.5 justify-center">
            <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
            <span className="font-display italic text-[13px] text-[#8F6F3E]">coming soon</span>
            <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
          </div>

          <h1 className="font-display font-[600] text-[40px] sm:text-[56px] leading-[1.05] tracking-tight text-espresso">
            Nella launches in August 2026.
          </h1>
          
          <div className="text-[14.5px] text-grey font-sans leading-relaxed text-center space-y-6 max-w-lg mx-auto">
            <p>We are currently building the quietest, cleanest system for your beauty life. Nella will be available first on iOS, with Android following shortly after.</p>
            <p>Join the waitlist to reserve your spot and unlock founding member benefits.</p>
          </div>

          <div className="pt-8">
            <Link
              href="/waitlist"
              className="inline-flex group px-8 py-4 rounded-2xl text-[#FAF7F2] text-[13.5px] font-semibold tracking-wide items-center justify-center gap-2.5 shadow-md shadow-espresso/15 transition-all duration-300 transform active:scale-98 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #3A2418 0%, #2C1810 50%, #1F1410 100%)'
              }}
            >
              <span>Join the waitlist</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
