import React, { useState } from 'react';
import { ArrowLeft, Type } from 'lucide-react';
import { siteContent } from '../content';

interface SampleChapterViewProps {
  onNavigateBack: () => void;
}

export const SampleChapterView: React.FC<SampleChapterViewProps> = ({ onNavigateBack }) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const chapter = siteContent.book.sampleChapter;
  const author = siteContent.meta.author;

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
            <span>Zpět na stránku knihy</span>
          </button>

          <button
            onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
            className="p-2 rounded border border-[#D9C9B8] text-[#8C7B6B] hover:text-[#2C2520] hover:bg-[#EDE5D8] transition-colors cursor-pointer text-xs flex items-center"
            aria-label="Přepnout velikost písma"
          >
            <Type className="w-3.5 h-3.5 mr-1" />
            <span>{fontSize === 'normal' ? 'Větší text' : 'Normální text'}</span>
          </button>
        </div>

        {/* Header */}
        <header className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow mb-2 block">{author}</span>
          {chapter.number && (
            <span className="text-xs font-sans-jost uppercase tracking-widest text-[#8C7B6B] block mb-1">
              {chapter.number}
            </span>
          )}
          <h1 className="font-serif-cormorant text-4xl sm:text-5xl md:text-6xl font-light text-[#2C2520] leading-tight mb-3">
            {chapter.title}
          </h1>
          <p className="font-serif-cormorant text-lg sm:text-xl italic text-[#8C7B6B]">
            {chapter.bookTitle} · {chapter.readingTime}
          </p>
          <div className="w-12 h-[1px] bg-[#D9C9B8] mx-auto mt-6" />
        </header>

        {/* Prose text */}
        <article
          className={`max-w-[680px] mx-auto space-y-6 text-[#2C2520] leading-[1.85] font-sans-jost ${
            fontSize === 'large' ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
          }`}
        >
          {chapter.paragraphs.map((p, idx) => {
            const isPlaceholderNote = p.startsWith('[');
            const isLetter = p.includes('Milá Aničko') || p.startsWith('„Milá');
            const isBlockQuote = p.startsWith('> ');

            if (isPlaceholderNote) {
              return (
                <p
                  key={idx}
                  className="font-serif-cormorant italic text-sm text-[#8C7B6B] bg-[#EDE5D8]/60 p-4 rounded-[6px] text-center my-8"
                >
                  {p}
                </p>
              );
            }

            if (isLetter) {
              return (
                <div
                  key={idx}
                  className="my-8 p-6 sm:p-8 bg-[#EDE5D8]/45 border-l-2 border-[#8C7B6B] rounded-r-[6px] shadow-xs"
                >
                  <div className="font-serif-cormorant text-base sm:text-lg text-[#2C2520] italic whitespace-pre-line leading-relaxed">
                    {p}
                  </div>
                </div>
              );
            }

            if (isBlockQuote) {
              return (
                <blockquote
                  key={idx}
                  className="my-8 pl-6 border-l-2 border-[#D9C9B8] font-serif-cormorant italic text-xl sm:text-2xl text-[#2C2520] leading-snug"
                >
                  {p.replace(/^>\s*/, '')}
                </blockquote>
              );
            }

            return <p key={idx}>{p}</p>;
          })}
        </article>

        {/* Foot of reader */}
        <div className="max-w-[680px] mx-auto mt-16 pt-10 border-t border-[#D9C9B8]/60 text-center">
          <p className="font-serif-cormorant italic text-xl text-[#8C7B6B] mb-6">
            Děkuji za tiché chvíle věnované čtení.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteContent.book.primaryButtonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !text-xs !py-3 w-full sm:w-auto"
            >
              Předobjednat knihu na Pointě
            </a>
            <button
              onClick={onNavigateBack}
              className="btn-secondary !text-xs !py-3 w-full sm:w-auto"
            >
              Vrátit se na web
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
