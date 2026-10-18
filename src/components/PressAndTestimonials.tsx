import React from 'react';
import { Newspaper, ExternalLink } from 'lucide-react';
import { siteContent } from '../content';

export const PressAndTestimonials: React.FC = () => {
  // Hide testimonials block automatically if quotes still contain placeholders [placeholder]
  const hasRealTestimonials =
    siteContent.press.testimonials &&
    siteContent.press.testimonials.length > 0 &&
    siteContent.press.testimonials.some(
      (t) => !t.quote.includes('[') && !t.quote.includes(']')
    );

  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28 bg-gradient-to-b from-[#FAF8F5] via-[#EDE5D8]/30 to-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow mb-3 block">
            {siteContent.press.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2C2520] font-serif-cormorant leading-tight">
            {siteContent.press.eyebrow}
          </h2>
        </div>

        {/* Media item: Klatovský deník – volný přechod, bez rámečku */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="bg-[#FAF8F5]/90 p-8 sm:p-10 rounded-[10px] shadow-[0_8px_30px_rgba(44,37,32,0.03)] text-center flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-[#EDE5D8] flex items-center justify-center mb-4">
              <Newspaper className="w-5 h-5 text-[#8C7B6B] stroke-[1.5]" />
            </div>

            <p className="font-serif-cormorant text-2xl font-light text-[#2C2520] mb-4 leading-snug">
              {siteContent.press.mediaText}
            </p>

            <a
              href={
                siteContent.press.mediaLink.startsWith('[')
                  ? '#'
                  : siteContent.press.mediaLink
              }
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (siteContent.press.mediaLink.startsWith('[')) {
                  e.preventDefault();
                }
              }}
              className="inline-flex items-center text-xs font-sans-jost uppercase tracking-wider text-[#8C7B6B] hover:text-[#2C2520] transition-colors"
            >
              <span>Článek v Klatovském deníku</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>
        </div>

        {/* Testimonials block: Shown only when real quotes exist (no [placeholders]) */}
        {hasRealTestimonials && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 relative">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D9C9B8]/50 to-transparent" />
            {siteContent.press.testimonials.map((test, index) => (
              <div
                key={index}
                className="bg-[#FAF8F5]/90 p-7 rounded-[8px] shadow-[0_6px_24px_rgba(44,37,32,0.03)] flex flex-col justify-between"
              >
                <blockquote className="font-sans-jost text-sm sm:text-[15px] text-[#2C2520]/85 leading-relaxed mb-6 italic">
                  {test.quote}
                </blockquote>

                <div className="pt-4 border-t border-[#D9C9B8]/40">
                  <p className="font-serif-cormorant text-lg font-medium text-[#2C2520]">
                    {test.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
