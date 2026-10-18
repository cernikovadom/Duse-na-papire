import React, { useState } from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';
import { siteContent } from '../content';
import bookCoverImg from '../assets/images/Mlecne_600x840px.png';

interface BookSectionProps {
  onOpenSampleChapter: () => void;
}

export const BookSection: React.FC<BookSectionProps> = ({ onOpenSampleChapter }) => {
  const [imgSrc, setImgSrc] = useState(bookCoverImg);

  return (
    <section id="kniha" className="scroll-mt-24 pt-16 pb-6 md:pt-20 md:pb-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Main Grid: Cover on Left, Blurb on Right – volné přechody, žádné rámečky */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          {/* Left Column: Fotka knihy Mlecne_600x840px.png – výrazně větší, bez rámečku */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative group w-full max-w-[420px] sm:max-w-[480px] md:max-w-[520px] lg:max-w-[480px] xl:max-w-[540px] transition-transform duration-500 hover:-translate-y-1.5">
              {/* Jemný teplý volný světelný přechod za knihou (žádné ohraničení) */}
              <div
                className="absolute -inset-6 sm:-inset-10 bg-[radial-gradient(ellipse_at_center,rgba(237,229,216,0.65)_0%,rgba(237,229,216,0.25)_50%,transparent_75%)] blur-2xl pointer-events-none -z-10"
                aria-hidden="true"
              />

              {/* Měkká přirozená záře a hluboký plastický stín knižní obálky bez rámečku */}
              <img
                src={imgSrc}
                alt={`${siteContent.book.title} – ${siteContent.meta.author}`}
                onError={() => setImgSrc('/images/Mlecne_600x840px.png')}
                className="w-full h-auto object-contain filter drop-shadow-[0_24px_48px_rgba(44,37,32,0.18)] transition-all duration-500 group-hover:drop-shadow-[0_32px_64px_rgba(44,37,32,0.26)] rounded-[4px]"
                loading="eager"
              />
            </div>
          </div>

          {/* Right Column: Blurb & Details */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="eyebrow mb-3">{siteContent.book.eyebrow}</span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2C2520] leading-tight mb-2 font-serif-cormorant">
              {siteContent.book.title}
            </h2>

            {/* Tagline (italic, below the title) */}
            <p className="font-serif-cormorant text-xl sm:text-2xl italic text-[#8C7B6B] font-light leading-snug mb-4">
              {siteContent.book.tagline}
            </p>

            {/* Metadata line (Taupe) */}
            <p className="font-sans-jost text-sm sm:text-base text-[#8C7B6B] tracking-wide mb-6 font-medium">
              {siteContent.book.metadata}
            </p>

            {/* Blurb (two paragraphs) */}
            <div className="space-y-4 mb-8 text-measure">
              <p className="font-sans-jost text-base sm:text-lg text-[#2C2520] leading-[1.75]">
                {siteContent.book.blurbParagraph1}
              </p>
              <p className="font-sans-jost text-base sm:text-lg text-[#2C2520] leading-[1.75]">
                {siteContent.book.blurbParagraph2}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={siteContent.book.primaryButtonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <span>{siteContent.book.primaryButton}</span>
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform stroke-[1.5]" />
              </a>

              <button
                onClick={onOpenSampleChapter}
                className="btn-secondary group"
              >
                <BookOpen className="w-4 h-4 mr-2 text-[#8C7B6B] stroke-[1.5]" />
                <span>{siteContent.book.secondaryButton}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Velká citace v Cormorant – volný přechod bez rámečku (pouze pokud je zadána) */}
        {siteContent.book.quote ? (
          <div className="w-full relative py-12 sm:py-16 md:py-20 text-center overflow-hidden my-4">
            {/* Měkký volný přechod Sand tónu rozplývající se do stran bez ostrých hran */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(237,229,216,0.7)_0%,rgba(237,229,216,0.35)_45%,transparent_75%)] pointer-events-none" />
            <div className="max-w-3xl mx-auto px-6 relative z-10">
              <blockquote className="font-serif-cormorant text-2xl sm:text-3xl md:text-4xl italic font-light text-[#2C2520] leading-[1.45]">
                {siteContent.book.quote}
              </blockquote>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};
