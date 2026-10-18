import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { siteContent } from '../content';

export const BookJourneyTimeline: React.FC = () => {
  const currentIdx = siteContent.timeline.currentStepIndex;

  return (
    <section className="pt-6 pb-20 md:pt-10 md:pb-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="eyebrow mb-2 block">
            {siteContent.timeline.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2C2520] font-serif-cormorant leading-tight">
            {siteContent.timeline.title}
          </h2>
        </div>

        {/* Desktop Horizontal Timeline – plynulá spojnice s jemným rozostřením na koncích */}
        <div className="hidden lg:block relative mb-16">
          {/* Fading continuous connecting line */}
          <div className="absolute top-[18px] left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-transparent via-[#D9C9B8] to-transparent" />

          {/* Timeline points grid */}
          <div className="grid grid-cols-6 gap-4 relative z-10">
            {siteContent.timeline.steps.map((step, idx) => {
              const isCurrent = idx === currentIdx;
              const isCompleted = idx < currentIdx;

              return (
                <div key={step.title} className="flex flex-col items-center text-center">
                  {/* Dot / Indicator */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 mb-4 ${
                      isCurrent
                        ? 'bg-[#2C2520] text-[#FAF8F5] ring-4 ring-[#EDE5D8]'
                        : isCompleted
                        ? 'bg-[#EDE5D8] text-[#2C2520]'
                        : 'bg-[#FAF8F5] text-[#8C7B6B] shadow-xs'
                    }`}
                  >
                    {isCurrent ? (
                      <Sparkles className="w-4 h-4 stroke-[2]" />
                    ) : isCompleted ? (
                      <Check className="w-4 h-4 stroke-[2]" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-[#D9C9B8]" />
                    )}
                  </div>

                  {/* Step Title */}
                  <h4
                    className={`font-serif-cormorant text-base leading-snug mb-1.5 ${
                      isCurrent
                        ? 'text-[#2C2520] font-medium text-lg'
                        : 'text-[#2C2520]/90'
                    }`}
                  >
                    {step.title}
                  </h4>

                  {/* Short description */}
                  <p className="font-sans-jost text-xs text-[#8C7B6B] leading-relaxed max-w-[180px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden relative pl-8 border-l border-[#D9C9B8]/60 ml-4 space-y-10 mb-14">
          {siteContent.timeline.steps.map((step, idx) => {
            const isCurrent = idx === currentIdx;
            const isCompleted = idx < currentIdx;

            return (
              <div key={step.title} className="relative">
                {/* Dot on vertical line */}
                <div
                  className={`absolute -left-[45px] top-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isCurrent
                      ? 'bg-[#2C2520] text-[#FAF8F5] ring-4 ring-[#EDE5D8]'
                      : isCompleted
                      ? 'bg-[#EDE5D8] text-[#2C2520]'
                      : 'bg-[#FAF8F5] text-[#8C7B6B] shadow-xs'
                  }`}
                >
                  {isCurrent ? (
                    <Sparkles className="w-3.5 h-3.5" />
                  ) : isCompleted ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D9C9B8]" />
                  )}
                </div>

                <div>
                  <h4
                    className={`font-serif-cormorant text-xl leading-snug mb-1.5 ${
                      isCurrent ? 'text-[#2C2520] font-medium' : 'text-[#2C2520]'
                    }`}
                  >
                    {step.title}
                  </h4>
                  <p className="font-sans-jost text-sm text-[#8C7B6B] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Below timeline: thankYou (italic) – volný přechod */}
        <div className="text-center pt-8 max-w-2xl mx-auto relative">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#D9C9B8] to-transparent mx-auto mb-6" />
          <p className="font-serif-cormorant italic text-lg sm:text-xl text-[#2C2520]/90 leading-relaxed">
            {siteContent.timeline.thankYou}
          </p>
        </div>
      </div>
    </section>
  );
};
