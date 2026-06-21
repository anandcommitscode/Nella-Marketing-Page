import React from 'react';
import PhaseAwareCta from './PhaseAwareCta';

export interface CtaSectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  disclaimer?: string;
  backgroundClass?: string;
}

export default function CtaSection({
  title,
  subtitle,
  buttonText = "join the waitlist",
  buttonLink = "/waitlist",
  disclaimer = "free to use. £4.99 a month for pro. cancel anytime.",
  backgroundClass = "bg-[#FAF7F2]"
}: CtaSectionProps) {
  return (
    <section className={`py-12 md:py-16 ${backgroundClass}`}>
      <div className="max-w-[1050px] mx-auto px-6">
        <div className="bg-[#1F1410] rounded-3xl py-20 px-8 text-center flex flex-col items-center justify-center space-y-8 shadow-xl border border-[#3A2418]">
          <div className="space-y-4 max-w-4xl mx-auto px-4">
            <h2 className="font-display font-[600] text-[36px] sm:text-[46px] tracking-tight text-[#FAF7F2] leading-[1.1]">
              {title}
            </h2>
            <p className="text-[14px] sm:text-[15.5px] text-[#FAF7F2]/80 font-sans leading-relaxed text-balance">
              {subtitle}
            </p>
          </div>

          <div className="pt-2">
            <PhaseAwareCta
              preLaunchText={buttonText}
              postLaunchText="get nella on the App Store"
              className="group px-8 py-4 rounded-full text-[#1F1410] font-semibold text-[14px] lowercase shadow-lg transition-transform active:scale-98 inline-flex items-center justify-center gap-2.5 font-sans tracking-wide hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, #DEC68B 0%, #C4A067 50%, #B8924A 100%)'
              }}
            />
          </div>

          {disclaimer && (
            <p className="text-[10.5px] text-[#FAF7F2]/50 font-sans uppercase tracking-wider pt-2">
              {disclaimer}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
