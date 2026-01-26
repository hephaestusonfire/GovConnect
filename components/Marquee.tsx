import React from 'react';

const PHRASE = 'Government Partnerships • Environmental Compliance • Forest Clearances • ESIA Studies • Policy Advocacy • Innovation Funding •';

export const Marquee: React.FC = () => {
  return (
    <div
      className="w-full bg-premium-gold overflow-hidden py-3 sm:py-4 border-y border-premium-gold/50 select-none"
      aria-hidden="true"
    >
      <div className="marquee-inner flex whitespace-nowrap">
        {/* Two identical blocks for seamless loop (animation moves -50%) */}
        <span className="text-premium-black font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 shrink-0">
          {PHRASE}
        </span>
        <span className="text-premium-black font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 shrink-0">
          {PHRASE}
        </span>
      </div>
    </div>
  );
};
