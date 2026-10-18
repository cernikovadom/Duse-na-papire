import React, { useState, useEffect } from 'react';
import { X, Type, Bookmark, ArrowLeft } from 'lucide-react';

interface ReadingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  chapterNumber?: string;
  subtitle?: string;
  author?: string;
  paragraphs: string[];
  bookBuyLink?: string;
}

export const ReadingModal: React.FC<ReadingModalProps> = ({
  isOpen,
  onClose,
  title,
  chapterNumber,
  subtitle,
  author = 'Dominika Černíková',
  paragraphs,
  bookBuyLink,
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#FAF8F5] overflow-y-auto flex flex-col justify-between animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={`Čtení: ${chapterNumber ? `${chapterNumber}: ` : ''}${title}`}
    >
      {/* Serene Top Bar */}
      <div className="sticky top-0 z-20 bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-[#D9C9B8]/60 py-4 px-6 md:px-12 flex items-center justify-between">
        <button
          onClick={onClose}
          className="inline-flex items-center text-xs font-sans-jost uppercase tracking-wider text-[#8C7B6B] hover:text-[#2C2520] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          <span>Zpět na stránku</span>
        </button>

        <div className="flex items-center space-x-3">
          {/* Font Size Toggle */}
          <button
            onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
            className="p-2 rounded border border-[#D9C9B8] text-[#8C7B6B] hover:text-[#2C2520] hover:bg-[#EDE5D8] transition-colors cursor-pointer text-xs flex items-center"
            title="Přepnout velikost písma"
            aria-label="Přepnout velikost písma"
          >
            <Type className="w-3.5 h-3.5 mr-1" />
            <span>{fontSize === 'normal' ? 'Větší text' : 'Normální text'}</span>
          </button>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 rounded text-[#2C2520] hover:text-[#8C7B6B] hover:bg-[#EDE5D8] transition-colors cursor-pointer"
            aria-label="Zavřít čtecí režim"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>
      </div>

      {/* Reader Column: max-w ~680px, tranquil typography */}
      <main className="max-w-[680px] mx-auto px-6 py-12 md:py-20 flex-1 w-full">
        {/* Header */}
        <div className="text-center mb-12 pb-8 border-b border-[#D9C9B8]/40">
          <span className="eyebrow mb-2 block">{author}</span>
          {chapterNumber && (
            <span className="text-xs font-sans-jost uppercase tracking-widest text-[#8C7B6B] block mb-1">
              {chapterNumber}
            </span>
          )}
          <h1 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl font-light text-[#2C2520] leading-tight mb-3">
            {title}
          </h1>
          {subtitle && (
            <p className="font-serif-cormorant text-lg sm:text-xl italic text-[#8C7B6B]">
              {subtitle}
            </p>
          )}
          <div className="w-12 h-[1px] bg-[#D9C9B8] mx-auto mt-6" />
        </div>

        {/* Prose text */}
        <div
          className={`space-y-6 text-[#2C2520] leading-[1.85] font-sans-jost ${
            fontSize === 'large' ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
          }`}
        >
          {paragraphs.map((p, idx) => {
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

            return (
              <p key={idx} className="text-justify-none">
                {p}
              </p>
            );
          })}
        </div>

        {/* Foot of reader */}
        <div className="mt-16 pt-10 border-t border-[#D9C9B8]/60 text-center">
          <p className="font-serif-cormorant italic text-xl text-[#8C7B6B] mb-6">
            Děkuji za tiché chvíle věnované čtení.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {bookBuyLink && (
              <a
                href={bookBuyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !text-xs !py-3 w-full sm:w-auto"
              >
                Předobjednat knihu na Pointě
              </a>
            )}
            <button
              onClick={onClose}
              className="btn-secondary !text-xs !py-3 w-full sm:w-auto"
            >
              Zavřít a vrátit se na web
            </button>
          </div>
        </div>
      </main>

      {/* Subtle bottom note */}
      <footer className="py-4 text-center text-xs font-sans-jost text-[#8C7B6B] border-t border-[#D9C9B8]/40">
        Režim nerušeného čtení · Duše na papíře
      </footer>
    </div>
  );
};
