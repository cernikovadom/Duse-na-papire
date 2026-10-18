import React, { useState } from 'react';
import { ArrowLeft, Clock, ShoppingBag, Type } from 'lucide-react';
import { StoryCardItem, siteContent } from '../content';

interface StoryViewProps {
  story: StoryCardItem;
  onNavigateBack: () => void;
}

export const StoryView: React.FC<StoryViewProps> = ({
  story,
  onNavigateBack,
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  return (
    <main className="pt-32 pb-24 md:pt-40 md:pb-32 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Navigation & Controls */}
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-[#D9C9B8]/40">
          <button
            onClick={onNavigateBack}
            className="inline-flex items-center text-xs font-sans-jost uppercase tracking-wider text-[#8C7B6B] hover:text-[#2C2520] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Zpět na přehled</span>
          </button>

          <button
            onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
            className="p-2 rounded border border-[#D9C9B8] text-[#8C7B6B] hover:text-[#2C2520] hover:bg-[#EDE5D8] transition-colors cursor-pointer text-xs flex items-center"
          >
            <Type className="w-3.5 h-3.5 mr-1" />
            <span>{fontSize === 'normal' ? 'Větší písmo' : 'Základní písmo'}</span>
          </button>
        </div>

        {/* Story Header */}
        <header className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center space-x-2 text-xs font-sans-jost text-[#8C7B6B] mb-3">
            <span>{siteContent.shortStories.eyebrow}</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {story.readingTime}
            </span>
            <span aria-hidden="true">·</span>
            <span>{story.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#2C2520] font-serif-cormorant leading-tight mb-4">
            {story.title}
          </h1>

          <p className="font-serif-cormorant text-xl italic text-[#8C7B6B]">
            {story.excerpt}
          </p>

          <div className="w-12 h-[1px] bg-[#D9C9B8] mx-auto mt-6" />
        </header>

        {/* Story Prose */}
        <article
          className={`max-w-[680px] mx-auto space-y-6 font-sans-jost leading-[1.8] text-[#2C2520] mb-16 ${
            fontSize === 'large' ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
          }`}
        >
          {story.content.map((paragraph, index) => {
            const isPlaceholderNote = paragraph.startsWith('[');
            return (
              <p
                key={index}
                className={
                  isPlaceholderNote
                    ? 'font-serif-cormorant italic text-sm text-[#8C7B6B] bg-[#EDE5D8]/60 p-4 rounded-[6px] text-center my-8'
                    : ''
                }
              >
                {paragraph}
              </p>
            );
          })}
        </article>

        {/* Paid Story CTA if story is paid – volný přechod */}
        {!story.isFree && (
          <div className="max-w-xl mx-auto bg-[#EDE5D8]/50 rounded-[10px] p-8 sm:p-10 text-center mb-16 shadow-xs">
            <h3 className="font-serif-cormorant text-2xl font-light text-[#2C2520] mb-2">
              Koupit povídku ({story.badge})
            </h3>
            <p className="font-sans-jost text-xs text-[#8C7B6B] mb-6">
              Odkaz na platební stránku: <span className="font-mono text-[#2C2520]">{story.buyLink}</span>
            </p>
            <a
              href={story.buyLink?.startsWith('[') ? '#' : story.buyLink || '#'}
              onClick={(e) => {
                if (story.buyLink?.startsWith('[')) {
                  e.preventDefault();
                  alert(`Odkaz na platební stránku: ${story.buyLink}`);
                }
              }}
              className="btn-primary !text-xs !py-3 !px-6 inline-flex items-center"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              <span>Koupit</span>
            </a>
          </div>
        )}

        {/* Footer sign-off */}
        <div className="max-w-[680px] mx-auto pt-8 border-t border-[#D9C9B8]/60 text-center">
          <p className="font-serif-cormorant italic text-lg text-[#8C7B6B]">
            Dominika Černíková · Duše na papíře
          </p>
        </div>
      </div>
    </main>
  );
};
