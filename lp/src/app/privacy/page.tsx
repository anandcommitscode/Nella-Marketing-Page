import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'nella privacy policy',
  description: 'the full privacy policy for nella, in legal language. for the plain-english version, see /about/privacy-principles.',
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
    <div className="text-left max-w-4xl mx-auto px-6 py-16 space-y-12">
      <div className="space-y-6 pt-4 border-b border-[#E8E5DC] pb-12">
        <div className="flex items-center gap-2 text-[13px] font-semibold text-grey">
          <Link href="/" className="hover:text-espresso transition-colors">Home</Link>
          <span className="text-grey font-normal">&gt;</span>
          <span className="text-espresso">Privacy Policy</span>
        </div>
        
        <h1 className="font-display font-[600] text-[36px] sm:text-[48px] tracking-tight text-espresso leading-none">
          Privacy policy.
        </h1>
        <p className="text-[14px] text-grey font-sans">
          For the plain-english version of how we handle your data, see our <Link href="/about/privacy-principles" className="text-[#8F6F3E] hover:underline">Privacy Principles</Link>.
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
