import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'privacy policy | nella',
  description: 'our plain-english privacy policy. what we collect, where we store it, and why we will never sell it.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://mynella.app/privacy'
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="text-left max-w-4xl mx-auto px-6 pt-8 md:pt-16 space-y-8 md:space-y-12">
      <div className="space-y-6 pt-4 pb-12">
        <div className="flex items-center gap-2 text-[13px] font-semibold text-grey">
          <Link href="/" className="hover:text-espresso transition-colors">Home</Link>
          <span className="text-grey font-normal">&gt;</span>
          <span className="text-espresso">Privacy Policy</span>
        </div>
        
        <h1 className="font-display font-[600] text-[36px] sm:text-[48px] tracking-tight text-espresso leading-none">
          privacy policy.
        </h1>
        <p className="text-[14px] text-grey font-sans">
          we are building a system to hold the most intimate details of your beauty life. that requires a medical-grade approach to data. here is exactly what we do with your information, and more importantly, what we don't.
        </p>
      </div>

      <div className="prose prose-sm sm:prose-base prose-espresso max-w-none text-[14px] text-grey font-sans leading-relaxed">
        <p className="italic text-espresso">
          [placeholder: full privacy policy supplied by iubenda or equivalent legal provider]
        </p>
      </div>
    </div>
  );
}
