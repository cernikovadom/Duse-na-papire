import React, { useState } from 'react';
import { ArrowLeft, Bell, ChevronDown } from 'lucide-react';
import { siteContent } from '../content';

interface ToolsTeamViewProps {
  onNavigateHome: () => void;
  onScrollToNewsletter: () => void;
}

export const ToolsTeamView: React.FC<ToolsTeamViewProps> = ({
  onNavigateHome,
  onScrollToNewsletter,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const product =
    siteContent.shop.products.find((p) => p.id === 'tvurci-tym') ||
    siteContent.shop.products[0];
  const faqs = product.faqs || [];

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#2C2520]">
      <div className="max-w-4xl mx-auto px-6 pt-10 sm:pt-14 pb-4">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center text-sm font-sans-jost text-[#8C7B6B] hover:text-[#2C2520] transition-colors cursor-pointer group"
          aria-label="Zpět na přehled pro tvůrce"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-200 group-hover:-translate-x-1 text-[#8C7B6B]" />
          <span>Zpět na hlavní stránku</span>
        </button>
      </div>

      <header className="max-w-4xl mx-auto px-6 pt-4 pb-12 sm:pb-16">
        <div className="max-w-2xl">
          {product.badge && (
            <span className="inline-block font-sans-jost text-xs uppercase tracking-widest text-[#8C7B6B] mb-4">
              {product.badge}
            </span>
          )}
          <h1 className="font-serif-cormorant text-4xl sm:text-5xl md:text-6xl font-light text-[#2C2520] leading-[1.12] mb-6">
            {product.title}
          </h1>
          <p className="font-sans-jost text-lg sm:text-xl text-[#2C2520]/80 leading-relaxed mb-8">
            {product.shortDescription}
          </p>

          <button
            onClick={onScrollToNewsletter}
            className="btn-primary inline-flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <Bell className="w-4 h-4" />
            <span>{product.buttonLabel}</span>
          </button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#D9C9B8]/50 to-transparent" />
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12 sm:py-16 pb-24">
        <section className="max-w-2xl">
          <h2 className="font-serif-cormorant text-2xl sm:text-3xl font-light text-[#2C2520] mb-8">
            {siteContent.shop.faqTitle}
          </h2>

          <div className="divide-y divide-[#D9C9B8]/40 border-t border-b border-[#D9C9B8]/40">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div key={index} className="py-1">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full py-4 text-left flex items-center justify-between cursor-pointer focus-visible:outline-none hover:text-[#8C7B6B] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif-cormorant text-xl font-normal text-[#2C2520]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#8C7B6B] transition-transform duration-200 shrink-0 ml-4 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pb-5 pt-1 text-sm text-[#2C2520]/80 leading-relaxed font-sans-jost">
                      {faq.isEmailAnswer ? (
                        <p>
                          Napiš mi na{' '}
                          <a
                            href={`mailto:${siteContent.meta.email}`}
                            className="underline underline-offset-2 hover:text-[#2C2520] text-[#2C2520] font-medium"
                          >
                            {siteContent.meta.email}
                          </a>
                          , ráda odpovím.
                        </p>
                      ) : (
                        <p>{faq.answer}</p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};
