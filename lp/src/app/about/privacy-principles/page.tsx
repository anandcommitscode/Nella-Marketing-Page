import type { Metadata } from 'next';
import Link from 'next/link';
import { Ban, Hand, HandCoins, Lock, LogOut } from 'lucide-react';
import CtaSection from '../../../components/CtaSection';


export const metadata: Metadata = {
  title: 'how nella thinks about your data: no ads, no sales, no compromise',
  description: 'nella does not sell your data, run ads, or share with brands or clinics. your beauty life is yours. here is exactly how it stays that way.',
  keywords: ['beauty app privacy', 'nella privacy', 'skincare app data privacy', 'GDPR beauty app'],
  alternates: {
    canonical: 'https://mynella.app/about/privacy-principles'
  }
};

export default function PrivacyPrinciplesPage() {
  return (
    <div className="space-y-0">
      <div className="px-4 md:px-8 pt-0 md:pt-0">
        <div className="rounded-[28px] md:rounded-[36px] bg-[#E8D5CE] overflow-hidden relative group">
          {/* Desktop Image - Absolute to fill right column border to border */}
          <div className="absolute right-0 top-0 bottom-0 w-[56%] hidden lg:block z-0">
            <img
              src="/aboutprivacyprinciplesnellahai.webp"
              alt="Your data is private"
              className="w-full h-full object-contain object-center"
            />
          </div>

          {/* Breadcrumbs inside the hero */}
          <div className="max-w-7xl mx-auto px-6 pt-6 pb-0 relative z-10">
            <div className="flex items-center gap-2 text-[12px] font-semibold text-[#1F1410]/60">
              <Link href="/" className="hover:text-espresso transition-colors">Home</Link>
              <span className="font-normal text-[#1F1410]/30">&gt;</span>
              <Link href="/about" className="hover:text-espresso transition-colors">About</Link>
              <span className="font-normal text-[#1F1410]/30">&gt;</span>
              <span className="text-espresso font-semibold">Privacy</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 pt-6 pb-12 md:pt-8 md:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:min-h-[360px]">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 z-10 pb-0 self-center">
              <div className="inline-flex items-center gap-1.5 justify-start">
                <span className="font-display italic text-[13px] text-[#8F6F3E]">absolute privacy</span>
              </div>
              <h1 className="font-display font-[600] text-[36px] sm:text-[48px] md:text-[54px] tracking-tight text-espresso leading-none">
                Your data, your beauty life.
              </h1>
              <p className="text-[15px] sm:text-[16px] text-[#1F1410]/80 max-w-[420px] font-sans leading-relaxed">
                what nella does with your data, in plain english.
              </p>
            </div>

            {/* Mobile Image */}
            <div className="block lg:hidden w-full relative z-10">
              <img
                src="/aboutprivacyprinciplesnellahai.webp"
                alt="Your data is private"
                className="w-full h-auto max-h-[300px] object-cover object-center rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-left max-w-7xl mx-auto px-6 pt-12 md:pt-16 space-y-8 md:space-y-12">
        <div className="space-y-10 max-w-3xl mx-auto pb-12">
          <div className="space-y-6 pt-2">
            <h2 className="font-display font-semibold text-[24px] text-espresso mb-4">Five things nella will never do.</h2>
            <div className="space-y-8">
               <div>
                 <h4 className="font-sans font-[600] text-[16px] text-espresso mb-1">
                   <span className="mr-2">1.</span>your data is not sold.
                 </h4>
                 <p className="text-[14px] text-grey font-sans leading-relaxed">not to brands, not to clinics, not to advertisers, not to anyone. your treatment history is not a product. your spend is not a metric for someone else's quarterly review.</p>
               </div>
 
               <div>
                 <h4 className="font-sans font-[600] text-[16px] text-espresso mb-1">
                   <span className="mr-2">2.</span>no ads in the app.
                 </h4>
                 <p className="text-[14px] text-grey font-sans leading-relaxed">nella's business is the subscription. that means the only person nella has to please is you.</p>
               </div>
 
               <div>
                 <h4 className="font-sans font-[600] text-[16px] text-espresso mb-1">
                   <span className="mr-2">3.</span>no sponsored content.
                 </h4>
                 <p className="text-[14px] text-grey font-sans leading-relaxed">no "featured" treatments. no paid placement in your routine. no brand-sponsored reviews. if nella recommends something, it's because it earned the recommendation.</p>
               </div>
 
               <div>
                 <h4 className="font-sans font-[600] text-[16px] text-espresso mb-1">
                   <span className="mr-2">4.</span>your data will never be shared with your clinic.
                 </h4>
                 <p className="text-[14px] text-grey font-sans leading-relaxed">nella sits across every clinic you use. that means no single clinic gets to see what you have done at the others. this is the whole point.</p>
               </div>
 
               <div>
                 <h4 className="font-sans font-[600] text-[16px] text-espresso mb-1">
                   <span className="mr-2">5.</span>easy to leave.
                 </h4>
                 <p className="text-[14px] text-grey font-sans leading-relaxed">you can export everything you have logged at any time. you can delete your account at any time. your data is yours, every step of the way.</p>
               </div>
             </div>
          </div>

          <div className="space-y-4 pt-8">
            <h2 className="font-display font-semibold text-[24px] text-espresso">How your data is held.</h2>
            <div className="space-y-4 text-[14px] text-grey font-sans leading-relaxed">
              <p>
                nella is built on Supabase, with row-level security at the database layer. that means every piece of your data is locked to your account specifically, not visible across users by default. authentication uses industry-standard practices. data is encrypted in transit and at rest.
              </p>
              <p>
                mynella Ltd is GDPR compliant. the full privacy policy lives at <Link href="/privacy" className="text-[#8F6F3E] hover:underline">/privacy</Link>.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white border border-[#E8E5DC] rounded-2xl text-[13.5px] text-grey font-sans leading-relaxed shadow-sm relative overflow-hidden mt-8">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E]"></div>
            <h2 className="font-semibold text-espresso mb-1 text-[16px]">If you want to know more.</h2>
            <p>
              the full legal version of the privacy policy is here: <Link href="/privacy" className="text-[#8F6F3E] hover:underline">/privacy</Link>. if you have a specific question that is not covered, you can email <a href="mailto:support@mynella.app" className="text-[#8F6F3E] hover:underline">support@mynella.app</a>. every message gets read.
            </p>
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
