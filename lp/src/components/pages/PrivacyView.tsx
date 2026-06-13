import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Heart } from 'lucide-react';

interface PrivacyViewProps {
  onNavigate: (path: string) => void;
}

export default function PrivacyView({ onNavigate }: PrivacyViewProps) {
  return (
    <div className="lowercase text-left max-w-3xl mx-auto px-6 py-12 space-y-12">
      {/* Opener */}
      <section className="space-y-6 pt-8">
        <div className="inline-flex items-center gap-1.5">
          <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
          <span className="font-display italic text-[13px] text-[#8F6F3E]">privacy principles</span>
        </div>

        <h1 className="font-display font-[600] text-[36px] sm:text-[48px] leading-[1.1] tracking-tight text-espresso">
          your beauty record is yours alone.
        </h1>

        <p className="text-[14px] sm:text-[15px] text-grey max-w-2xl font-sans leading-relaxed">
          we believe what you do with your skin, your face, your treatments, and your spend is your business. nobody else&rsquo;s. we don&rsquo;t trade your data, and we don&rsquo;t run ads.
        </p>
      </section>

      {/* The 4 pillars */}
      <section className="space-y-8 border-t border-[#E8E5DC] pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[16px] text-red-700">
              🔒
            </div>
            <h3 className="font-semibold text-[15px] text-espresso">no brands, no clinics</h3>
            <p className="text-[12.5px] text-grey font-sans leading-relaxed">
              we will never share your routine or appointment history with major brands or cosmetics clinics. they have enough ways to target you; nella won&rsquo;t be one of them.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[16px] text-blue-700">
              📊
            </div>
            <h3 className="font-semibold text-[15px] text-espresso">no target ads or data trades</h3>
            <p className="text-[12.5px] text-grey font-sans leading-relaxed">
              we do not broker, trade, or package your data for marketing panels. we make money from the nella Pro tier subscription, keeping our incentives aligned with you.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-[16px] text-green-700">
              🛡️
            </div>
            <h3 className="font-semibold text-[15px] text-espresso">encryption at rest</h3>
            <p className="text-[12.5px] text-grey font-sans leading-relaxed">
              all treatment photos, diary entries, and cost trackers are encrypted. if you delete your nella account, your data is completely and instantly purged.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-[16px] text-purple-700">
              💡
            </div>
            <h3 className="font-semibold text-[15px] text-espresso">the information is yours</h3>
            <p className="text-[12.5px] text-grey font-sans leading-relaxed">
              you can export your entire treatment history or spend file as a clean PDF or CSV at any time, in case you want to show a new clinician or keep it on your own hard drive.
            </p>
          </div>
        </div>
      </section>

      {/* A pledge card */}
      <section className="p-8 border border-[#E8E5DC] bg-[#FAF7F2] rounded-3xl space-y-4">
        <h4 className="font-display font-semibold text-[20px] text-espresso">why we write this.</h4>
        <div className="space-y-3 text-[13px] text-grey font-sans leading-relaxed">
          <p>
            most modern beauty apps are glorified storefronts. they track your routine so they can recommend a partner brand&rsquo;s vitamin c. they track your treatments so they can suggest nearby clinics who buy ads.
          </p>
          <p>
            nella doesn&rsquo;t do that. our core value is simple: give you a clean, quiet workspace to take control of your vanity. nothing less, nothing more.
          </p>
        </div>
      </section>

      {/* Back button */}
      <div className="pt-4">
        <button
          onClick={() => onNavigate('home')}
          className="text-[12px] font-semibold text-[#8F6F3E] hover:underline cursor-pointer"
        >
          return to the home page
        </button>
      </div>
    </div>
  );
}
