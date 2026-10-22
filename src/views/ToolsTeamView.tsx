import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Check,
  ChevronDown,
  HelpCircle,
  Layers,
  Link as LinkIcon,
  MessageSquare,
  Send,
  ShoppingBag,
  TrendingUp,
} from 'lucide-react';
import { siteContent } from '../content';

interface ToolsTeamViewProps {
  onNavigateHome: () => void;
  onNavigate?: (path: string, anchor?: string) => void;
  onNavigatePrivacy?: () => void;
  onNavigateTerms?: () => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  Link: LinkIcon,
  MessageSquare,
  Send,
  Calendar,
  TrendingUp,
  HelpCircle,
  BookOpen,
};

export const ToolsTeamView: React.FC<ToolsTeamViewProps> = ({
  onNavigateHome,
  onNavigate,
  onNavigatePrivacy,
  onNavigateTerms,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const product =
    siteContent.shop.products.find((p) => p.id === 'tvurci-tym') ||
    siteContent.shop.products[2];

  const detail = siteContent.shop.toolsDetail;
  const checkoutLink = detail.checkoutLink;

  const handleFreeGuideClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('/pruvodce-kampan-pointa');
    }
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#2C2520]">
      {/* Top Breadcrumb / Return Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-4">
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
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className={product?.image ? 'md:col-span-7' : 'max-w-3xl'}>
            <h1 className="font-serif-cormorant text-4xl sm:text-5xl md:text-6xl font-light text-[#2C2520] leading-[1.12] mb-6">
              {detail.headline}
            </h1>
            <p className="font-sans-jost text-lg sm:text-xl text-[#2C2520]/80 leading-relaxed mb-8">
              {detail.subheadline}
            </p>

            <div className="flex flex-wrap items-center gap-5 sm:gap-6">
              <span className="font-serif-cormorant text-3xl sm:text-4xl font-light text-[#2C2520]">
                {detail.price}
              </span>

              <a
                href={checkoutLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 cursor-pointer shadow-sm !py-3 !px-8 text-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{detail.buttonText}</span>
              </a>
            </div>
          </div>

          {product?.image && (
            <div className="md:col-span-5 flex justify-center">
              <div className="w-full max-w-[380px] rounded-[10px] overflow-hidden shadow-[0_16px_36px_rgba(44,37,32,0.1)] bg-[#EDE5D8]/50 transition-transform duration-500 hover:-translate-y-1">
                <img
                  src={product.image}
                  alt={detail.headline}
                  className="w-full h-auto object-cover"
                  width={1200}
                  height={750}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Subtle Atmospheric Divider */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#D9C9B8]/50 to-transparent" />
      </div>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16 sm:space-y-24">
        {/* Section: Co v balíčku najdeš */}
        <section className="space-y-10">
          <div>
            <span className="eyebrow mb-3 block">Přehled</span>
            <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl font-light text-[#2C2520]">
              {detail.sectionTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {detail.items.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || Layers;
              return (
                <div
                  key={idx}
                  className="bg-[#EDE5D8]/40 border border-[#D9C9B8]/50 rounded-[8px] p-5 hover:border-[#D9C9B8] transition-colors flex items-start gap-3.5"
                >
                  <div className="w-8 h-8 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#54463A] shrink-0 mt-0.5 shadow-xs">
                    <IconComponent className="w-4 h-4 stroke-[1.75]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-serif-cormorant text-lg font-medium text-[#2C2520] leading-snug">
                      {item.title}
                    </h4>
                    <p className="font-sans-jost text-xs sm:text-sm text-[#2C2520]/80 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section: Pro koho je */}
        <section className="bg-[#FAF8F5] rounded-[10px] py-2">
          <div className="max-w-2xl">
            <span className="eyebrow mb-3 block">Doporučení</span>
            <h2 className="font-serif-cormorant text-3xl sm:text-4xl font-light text-[#2C2520] mb-6">
              {detail.whoIsItForTitle}
            </h2>

            <div className="space-y-4">
              {detail.whoIsItForList.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#EDE5D8] flex items-center justify-center mr-3.5 mt-1 shrink-0">
                    <Check className="w-3 h-3 text-[#2C2520] stroke-[2.5]" />
                  </div>
                  <p className="font-sans-jost text-base sm:text-lg text-[#2C2520]/85 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Author Proof Strip */}
        <section className="py-4">
          <div className="bg-[#EDE5D8]/50 border border-[#D9C9B8]/50 rounded-[12px] p-8 sm:p-12 text-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#D9C9B8]/60 mb-8">
              {detail.proofStrip.numbers.map((item, idx) => (
                <div key={idx} className={idx > 0 ? 'pt-6 sm:pt-0' : ''}>
                  <div className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl font-light text-[#2C2520] mb-1">
                    {item.value}
                  </div>
                  <div className="font-sans-jost text-xs sm:text-sm text-[#8C7B6B] uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="font-serif-cormorant text-lg sm:text-xl font-light italic text-[#2C2520]/90 max-w-xl mx-auto leading-relaxed">
              {detail.proofStrip.line}
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-2xl">
          <div className="mb-6">
            <span className="eyebrow mb-2 block">Dotazy</span>
            <h2 className="font-serif-cormorant text-3xl sm:text-4xl font-light text-[#2C2520]">
              Časté otázky
            </h2>
          </div>

          <div className="divide-y divide-[#D9C9B8]/40 border-t border-b border-[#D9C9B8]/40">
            {detail.faqs.map((faq, index) => {
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
                    <div className="pb-5 pt-1 text-sm sm:text-base text-[#2C2520]/80 leading-relaxed font-sans-jost">
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

        {/* Final Call to Action */}
        <section className="pt-4 pb-16">
          <div className="bg-[#EDE5D8] rounded-[12px] max-w-2xl mx-auto p-8 sm:p-12 text-center shadow-[0_12px_40px_rgba(44,37,32,0.06)]">
            <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl font-light text-[#2C2520] mb-4 leading-tight">
              {detail.finalCta.title}
            </h2>
            <p className="font-sans-jost text-base sm:text-lg text-[#2C2520]/80 leading-relaxed max-w-lg mx-auto mb-8">
              {detail.finalCta.text}
            </p>

            <div className="mb-6">
              <a
                href={checkoutLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 cursor-pointer shadow-sm !py-3.5 !px-8 text-sm group"
              >
                <span>{detail.finalCta.buttonText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="pt-2">
              <a
                href="/pruvodce-kampan-pointa"
                onClick={handleFreeGuideClick}
                className="text-xs sm:text-sm font-sans-jost text-[#8C7B6B] hover:text-[#2C2520] underline underline-offset-4 decoration-[#D9C9B8] transition-colors"
              >
                {detail.finalCta.belowText}
              </a>
            </div>

            {/* Legal reassurance notice */}
            <div className="mt-6 pt-4 border-t border-[#D9C9B8]/50 text-xs font-sans-jost text-[#8C7B6B] leading-relaxed">
              <span>Platba probíhá zabezpečeně přes SimpleShop. Před nákupem si můžeš prostudovat </span>
              <button
                type="button"
                onClick={() => onNavigateTerms?.()}
                className="underline hover:text-[#2C2520] transition-colors cursor-pointer"
              >
                obchodní podmínky
              </button>
              <span> a </span>
              <button
                type="button"
                onClick={() => onNavigatePrivacy?.()}
                className="underline hover:text-[#2C2520] transition-colors cursor-pointer"
              >
                zásady ochrany osobních údajů
              </button>
              <span>.</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
