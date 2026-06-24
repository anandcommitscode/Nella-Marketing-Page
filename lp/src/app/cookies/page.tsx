import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'nella cookie policy',
  description: 'what cookies nella uses, what they do, and how to manage them.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://mynella.app/cookies'
  }
};

export default function CookiePolicyPage() {
  return (
    <div className="text-left max-w-4xl mx-auto px-6 pt-8 md:pt-16 space-y-8 md:space-y-12">
      <div className="space-y-6 pt-4 pb-12">
        <div className="flex items-center gap-2 text-[13px] font-semibold text-grey">
          <Link href="/" className="hover:text-espresso transition-colors">Home</Link>
          <span className="text-grey font-normal">›</span>
          <span className="text-espresso">Cookie Policy</span>
        </div>
        
        <h1 className="font-display font-[600] text-[36px] sm:text-[48px] tracking-tight text-espresso leading-none">
          Cookie policy.
        </h1>
      </div>

      <div className="prose prose-sm sm:prose-base prose-espresso max-w-none text-[14px] text-grey font-sans leading-relaxed">
        <p className="italic text-espresso">
          [placeholder: full cookie policy supplied by legal provider]
        </p>
      </div>
    </div>
  );
}
