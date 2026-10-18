import React from 'react';
import { BookOpen, ShoppingBag, Clock } from 'lucide-react';
import { siteContent, StoryCardItem } from '../content';

interface ShortStoriesProps {
  onOpenStory: (story: StoryCardItem) => void;
  onScrollToNewsletter: () => void;
}

export const ShortStories: React.FC<ShortStoriesProps> = ({
  onOpenStory,
  onScrollToNewsletter,
}) => {
  return (
    <section id="povidky" className="scroll-mt-24 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="eyebrow mb-3 block">
            {siteContent.shortStories.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2C2520] font-serif-cormorant leading-tight mb-4">
            {siteContent.shortStories.title}
          </h2>
          <p className="font-serif-cormorant text-xl italic text-[#2C2520]/80">
            {siteContent.shortStories.intro}
          </p>
        </div>

        {/* Stories Cards Grid – volné přechody, bez rámečků */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-20">
          {siteContent.shortStories.cards.map((story) => {
            const isFree = story.isFree;

            return (
              <div
                key={story.slug}
                className="bg-[#EDE5D8]/45 hover:bg-[#EDE5D8]/75 rounded-[8px] p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_36px_rgba(44,37,32,0.06)] hover:-translate-y-0.5"
              >
                <div>
                  {/* Top Metadata: Read time and Badge */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#D9C9B8]/40">
                    <span className="inline-flex items-center text-xs font-sans-jost text-[#8C7B6B]">
                      <Clock className="w-3.5 h-3.5 mr-1 stroke-[1.5]" />
                      {story.readingTime}
                    </span>

                    <span
                      className={`text-[11px] font-sans-jost uppercase tracking-wider px-2.5 py-0.5 rounded-[4px] font-medium ${
                        isFree
                          ? 'bg-[#FAF8F5] text-[#2C2520]'
                          : 'bg-[#FAF8F5]/80 text-[#8C7B6B]'
                      }`}
                    >
                      {story.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-cormorant text-2xl font-light text-[#2C2520] mb-3 leading-snug">
                    {story.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-sans-jost text-sm text-[#2C2520]/80 leading-relaxed mb-6">
                    {story.excerpt}
                  </p>
                </div>

                {/* Action button */}
                <div className="pt-4 border-t border-[#D9C9B8]/40">
                  {isFree ? (
                    <button
                      onClick={() => onOpenStory(story)}
                      className="btn-primary w-full !text-xs !py-2.5 inline-flex items-center justify-center cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5 mr-2 stroke-[1.5]" />
                      <span>Číst zdarma</span>
                    </button>
                  ) : (
                    <a
                      href={story.buyLink?.startsWith('[') ? '#' : story.buyLink || '#'}
                      onClick={(e) => {
                        if (story.buyLink?.startsWith('[')) {
                          e.preventDefault();
                          onOpenStory(story);
                        }
                      }}
                      className="btn-secondary w-full !text-xs !py-2.5 inline-flex items-center justify-center group cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 mr-2 text-[#8C7B6B] stroke-[1.5]" />
                      <span>Koupit</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Note below stories – Plynulý přechod */}
        <div className="text-center max-w-xl mx-auto">
          <p className="font-serif-cormorant text-lg italic text-[#8C7B6B]">
            Další povídky píšu a posílám čtenářům v newsletteru.
          </p>
          <button
            onClick={onScrollToNewsletter}
            className="mt-3 text-xs uppercase tracking-wider text-[#2C2520] hover:text-[#8C7B6B] transition-colors underline underline-offset-4 decoration-[#D9C9B8] font-sans-jost cursor-pointer"
          >
            Přihlásit se k odběru
          </button>
        </div>
      </div>
    </section>
  );
};
