import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, HelpCircle } from 'lucide-react';
import CtaSection from '../../components/CtaSection';

export const metadata: Metadata = {
  title: 'nella support: FAQ and contact',
  description: 'answers to the most common questions about nella, and how to get in touch if your question is not here.',
  keywords: ['nella support', 'nella app help', 'nella customer service'],
  alternates: {
    canonical: 'https://mynella.app/support'
  }
};

export default function SupportPage() {
  const faqs = [
    {
      question: "is the app really free?",
      answer: "yes. nella Core is free forever. you can log unlimited treatments, track your routine, and use the check-in without paying anything. Pro is for the deep insights and the full history."
    },
    {
      question: "how do i cancel Pro?",
      answer: "in your Apple ID settings. you cancel the subscription there, and it stops at the end of the current period. your data remains safe, and your account reverts to Core."
    },
    {
      question: "what if my specific treatment isn't in the app?",
      answer: "we cover over fifty treatments right now. if yours is missing, you can log it as a custom treatment. and if you email support@mynella.app to tell us what's missing, we usually add it in the next update."
    },
    {
      question: "can i log past treatments?",
      answer: "yes. you can backdate treatments as far back as you like. this is the best way to get your cycle reminders calibrated immediately."
    },
    {
      question: "is nella GDPR compliant?",
      answer: "yes. nella is built and operated in the UK and complies with UK GDPR. our full privacy policy: /privacy."
    },
    {
      question: "how is my data stored?",
      answer: "on Supabase with row-level security. your data is locked to your account specifically. encrypted in transit and at rest."
    },
    {
      question: "can i delete my account?",
      answer: "yes, anytime. one tap in settings. your data is removed from active systems immediately and from backups within thirty days."
    },
    {
      question: "can a clinic see my data?",
      answer: "no. nella sits across every clinic you use, which is the whole point. no individual clinic sees what you have done at the others."
    }
  ];

  return (
    <div className="space-y-0">
      <div className="px-4 md:px-8 pt-0 md:pt-0">
        <div className="rounded-[28px] md:rounded-[36px] bg-[#E8D5CE] overflow-visible relative group">
          <div className="max-w-7xl mx-auto px-6 pt-6 pb-0 md:pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 z-10 pb-0 self-start lg:pt-12">
              <div className="flex items-center gap-2 text-[12px] font-semibold text-[#1F1410]/60 mb-2">
                <Link href="/" className="hover:text-espresso transition-colors">Home</Link>
                <span className="font-normal">&gt;</span>
                <span className="text-espresso">Support</span>
              </div>
              <div className="inline-flex items-center gap-1.5 justify-start">
                <span className="font-display italic text-[13px] text-[#8F6F3E]">we are here to help</span>
              </div>
              <h1 className="font-display font-[600] text-[36px] sm:text-[48px] md:text-[54px] tracking-tight text-espresso leading-none">
                contact.
              </h1>
              <p className="text-[15px] sm:text-[16px] text-espresso/80 max-w-[420px] font-sans leading-relaxed">
                answers to the most common questions, and how to get in touch.
              </p>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 relative flex justify-center items-end z-10 -mb-24 md:-mb-36">
              <div className="relative w-full max-w-[360px] sm:max-w-[400px] md:max-w-[440px] z-10">
                <img
                  src="/heroes/support.png"
                  alt="nella Support Preview"
                  className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-left max-w-7xl mx-auto px-6 pt-8 md:pt-16 space-y-8 md:space-y-16">

        <div className="w-full max-w-3xl mx-auto space-y-16">
          <div className="bg-[#FAF7F2] border border-[#E0DCCE] rounded-[32px] p-8 sm:p-10 shadow-sm text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-6">
              <Mail size={20} className="text-[#8F6F3E]" strokeWidth={2.5} />
            </div>
            <h2 className="font-display font-[600] text-[28px] text-espresso mb-4">Email us.</h2>
            <p className="text-[14px] text-grey font-sans leading-relaxed max-w-lg">
              every message gets read. if you have a question about your account, your data, or how a feature works, email us at <a href="mailto:support@mynella.app" className="text-[#8F6F3E] font-medium hover:underline">support@mynella.app</a>.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-3 justify-center mb-8">
              <HelpCircle size={24} className="text-[#8F6F3E]" strokeWidth={2.5} />
              <h2 className="font-display font-[600] text-[28px] text-espresso">Frequently asked questions.</h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-6 bg-white border border-[#E8E5DC] rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-espresso mb-2 text-[15px]">{faq.question}</h4>
                  <p className="text-[13.5px] text-grey font-sans leading-relaxed">
                    {faq.answer.includes('/privacy') ? (
                      <>
                        {faq.answer.split('/privacy')[0]}
                        <Link href="/privacy" className="text-[#8F6F3E] hover:underline">/privacy</Link>
                        {faq.answer.split('/privacy')[1]}
                      </>
                    ) : faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CtaSection
        title="ready when you are."
        subtitle="free to use. £4.99 a month for Pro. cancel anytime."
        backgroundClass="bg-transparent"
      />
    </div>
  );
}
