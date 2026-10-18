import React from 'react';
import { Trees, BookOpen, Coffee, Heart } from 'lucide-react';
import { siteContent, FragmentItem } from '../content';
import { PlaceholderFrame } from './PlaceholderFrame';

export const AboutSection: React.FC = () => {
  const getFragmentIcon = (icon: FragmentItem['icon']) => {
    switch (icon) {
      case 'forest':
        return <Trees className="w-5 h-5 text-[#8C7B6B] stroke-[1.5]" />;
      case 'book':
        return <BookOpen className="w-5 h-5 text-[#8C7B6B] stroke-[1.5]" />;
      case 'cup':
        return <Coffee className="w-5 h-5 text-[#8C7B6B] stroke-[1.5]" />;
      case 'dog':
        return <Heart className="w-5 h-5 text-[#8C7B6B] stroke-[1.5]" />;
    }
  };

  return (
    <section id="o-mne" className="scroll-mt-24 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 md:mb-24">
          {/* Photo Placeholder on Left – volně plovoucí, žádný dvojitý rámeček */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[360px] rounded-[10px] overflow-hidden shadow-[0_16px_36px_rgba(44,37,32,0.06)] transition-transform duration-500 hover:-translate-y-1">
              <PlaceholderFrame
                label={siteContent.about.photoPlaceholder}
                aspectRatio="portrait"
                iconType="portrait"
                className="bg-[#EDE5D8]/80"
              />
            </div>
          </div>

          {/* Bio text on Right */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="eyebrow mb-3 block">{siteContent.about.eyebrow}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2C2520] font-serif-cormorant leading-tight mb-6">
              {siteContent.about.title}
            </h2>

            <p className="font-sans-jost text-base sm:text-lg text-[#2C2520] leading-[1.8] mb-6">
              {siteContent.about.paragraph1}
            </p>

            <p className="font-sans-jost text-base sm:text-lg text-[#2C2520] leading-[1.8]">
              {siteContent.about.paragraph2}
            </p>
          </div>
        </div>

        {/* 4 Fragments – volné přechody, žádné tvrdé rámečky */}
        <div className="pt-10 relative">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D9C9B8]/50 to-transparent mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.about.fragments.map((fragment) => (
              <div
                key={fragment.id}
                className="p-6 rounded-[8px] bg-[#EDE5D8]/35 hover:bg-[#EDE5D8]/60 transition-all duration-300 flex flex-col items-start hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] shadow-xs flex items-center justify-center mb-4">
                  {getFragmentIcon(fragment.icon)}
                </div>
                <p className="font-sans-jost text-sm text-[#2C2520] leading-relaxed">
                  {fragment.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
