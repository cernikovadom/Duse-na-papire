import React, { useState } from 'react';
import { ArrowLeft, Check, ChevronDown, BookOpen, Sparkles, ArrowDown, Download } from 'lucide-react';
import { siteContent } from '../content';

interface GuidePointaViewProps {
  onNavigateHome: () => void;
  onNavigatePrivacy?: () => void;
  onNavigateTerms?: () => void;
}

export const GuidePointaView: React.FC<GuidePointaViewProps> = ({
  onNavigateHome,
  onNavigatePrivacy,
  onNavigateTerms,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Retrieve product 1 (Jak na kampaň na Pointě)
  const product =
    siteContent.shop.products.find((p) => p.id === 'kampan-pointa') ||
    siteContent.shop.products[0];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#2C2520]">
      {/* Top Breadcrumb / Return Navigation */}
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

      {/* Hero / Header Section */}
      <header className="max-w-4xl mx-auto px-6 pt-4 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className={product.image ? "md:col-span-7" : "max-w-2xl"}>
            <h1 className="font-serif-cormorant text-4xl sm:text-5xl md:text-6xl font-light text-[#2C2520] leading-[1.12] mb-6">
              {product.title}
            </h1>
            <p className="font-sans-jost text-lg sm:text-xl text-[#2C2520]/80 leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={product.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Stáhnout zdarma</span>
              </a>
            </div>
          </div>

          {product.image && (
            <div className="md:col-span-5 flex justify-center">
              <div className="w-full max-w-[380px] rounded-[10px] overflow-hidden shadow-[0_16px_36px_rgba(44,37,32,0.1)] bg-[#EDE5D8]/50 transition-transform duration-500 hover:-translate-y-1">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Subtle Atmospheric Divider – volný přechod */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#D9C9B8]/50 to-transparent" />
      </div>

      {/* Main Content Area: Calm reading flow */}
      <main className="max-w-4xl mx-auto px-6 py-12 sm:py-16 space-y-16 sm:space-y-20">
        {/* Long Description / Author's Note */}
        <section className="max-w-2xl space-y-6">
          <div className="flex items-center gap-2 text-xs font-sans-jost uppercase tracking-widest text-[#8C7B6B]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>O průvodci</span>
          </div>

          <div className="font-sans-jost text-base sm:text-lg text-[#2C2520]/85 leading-relaxed space-y-5">
            {product.longDescription && (
              <p className="text-lg sm:text-xl font-light leading-relaxed text-[#2C2520]">
                {product.longDescription}
              </p>
            )}

            <p className="text-sm sm:text-base text-[#2C2520]/75">
              Průvodce je strukturovaný tak, aby vás provedl celým procesem bez zbytečného
              stresu a digitálního přehlcení. Od prvotního nápadu na kampaň, přes rozpočet
              a stanovení cílové částky, až po texty odměn a komunikaci s podporovateli.
            </p>
          </div>
        </section>

        {/* Pro koho to je Block – volný přechod, přirozená atmosféra */}
        <section className="bg-[#FAF8F5] rounded-[10px] py-6 sm:py-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-sans-jost uppercase tracking-widest text-[#8C7B6B] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Komu pomůže</span>
            </div>
            <h2 className="font-serif-cormorant text-2xl sm:text-3xl font-light text-[#2C2520] mb-6">
              {siteContent.shop.whoIsItForTitle}
            </h2>

            <div className="space-y-4">
              {siteContent.shop.whoIsItForBullets.map((bullet, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#EDE5D8] flex items-center justify-center mr-3.5 mt-1 shrink-0">
                    <Check className="w-3 h-3 text-[#2C2520] stroke-[2.5]" />
                  </div>
                  <p className="font-sans-jost text-base text-[#2C2520]/85 leading-relaxed">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Accordion – čistý otevřený seznam */}
        <section className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-sans-jost uppercase tracking-widest text-[#8C7B6B] mb-3">
            <span>Dotazy</span>
          </div>
          <h2 className="font-serif-cormorant text-2xl sm:text-3xl font-light text-[#2C2520] mb-8">
            {siteContent.shop.faqTitle}
          </h2>

          <div className="divide-y divide-[#D9C9B8]/40 border-t border-b border-[#D9C9B8]/40">
            {siteContent.shop.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div key={index} className="py-1">
                  <button
                    onClick={() => toggleFaq(index)}
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
                          Napište mi na{' '}
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

        {/* Download Section (Free Guide) */}
        <section id="stahnout" className="scroll-mt-24 pt-8 pb-16">
          <div className="bg-[#EDE5D8] rounded-[12px] max-w-[560px] mx-auto p-8 sm:p-12 text-center shadow-[0_12px_40px_rgba(44,37,32,0.06)]">
            <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl font-light text-[#2C2520] mb-4">
              Stáhnout průvodce zdarma
            </h2>
            <p className="font-sans-jost text-base sm:text-lg text-[#2C2520]/80 leading-relaxed max-w-lg mx-auto mb-8">
              Zadejte svůj e-mail a průvodce vám obratem pošlu. Občas vám napíšu i něco z tvůrčího zákulisí nebo dám vědět o novinkách pro autory. Odhlásit se můžete kdykoli.
            </p>

            <a
              href={product.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Stáhnout zdarma</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};
