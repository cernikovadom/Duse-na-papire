import React, { useState } from 'react';
import {
  ArrowLeft,
  ChevronDown,
  Check,
  CheckSquare,
  Calculator,
  Award,
  Calendar,
  FileText,
  HelpCircle,
  AlertTriangle,
  Mail,
  MessageSquare,
  Newspaper,
  Sparkles,
  PenTool,
  Video,
  Camera,
  Send,
  BookOpen,
  Trophy,
  Heart,
  ShoppingBag,
  ArrowRight,
  Layers,
  Palette,
} from 'lucide-react';
import { siteContent } from '../content';

interface TemplatesViewProps {
  onNavigateHome: () => void;
  onNavigate?: (path: string, anchor?: string) => void;
  onNavigatePrivacy?: () => void;
  onNavigateTerms?: () => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CheckSquare,
  Calculator,
  Award,
  Calendar,
  FileText,
  HelpCircle,
  AlertTriangle,
  Mail,
  MessageSquare,
  Newspaper,
  Sparkles,
  PenTool,
  Video,
  Camera,
  Send,
  BookOpen,
  Trophy,
  Heart,
  Layers,
};

export const TemplatesView: React.FC<TemplatesViewProps> = ({
  onNavigateHome,
  onNavigate,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const product =
    siteContent.shop.products.find((p) => p.id === 'sablony-autori') ||
    siteContent.shop.products[1];

  const detail = siteContent.shop.templatesDetail;
  const checkoutLink =
    detail.checkoutLink || 'https://form.simpleshop.cz/ODoJP/buy/';

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleFreeGuideClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('/pruvodce-kampan-pointa', 'stahnout');
    }
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
        <div className="max-w-3xl">
          <span className="eyebrow mb-4 block">Pro tvůrce</span>
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
      </header>

      {/* Subtle Atmospheric Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#D9C9B8]/50 to-transparent" />
      </div>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 py-12 sm:py-16 space-y-16 sm:space-y-24">
        {/* Section: Co v balíčku najdeš */}
        <section className="space-y-12">
          <div>
            <span className="eyebrow mb-3 block">Přehled</span>
            <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl font-light text-[#2C2520]">
              {detail.sectionTitle}
            </h2>
          </div>

          {/* Chapters Grids */}
          <div className="space-y-12">
            {detail.chapters.map((chapter) => (
              <div key={chapter.code} className="space-y-5">
                <h3 className="font-serif-cormorant text-2xl sm:text-3xl font-light text-[#2C2520]">
                  {chapter.title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {chapter.items.map((item, idx) => {
                    const IconComponent = iconMap[item.icon] || CheckSquare;
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
              </div>
            ))}

            {/* Chapter: Nástroje (4 karty nástrojů v mřížce 2 × 2) */}
            <div className="space-y-6 pt-4">
              <h3 className="font-serif-cormorant text-2xl sm:text-3xl font-light text-[#2C2520]">
                Nástroje
              </h3>

              {/* Grid 2 × 2 na desktopu, 1 sloupec na mobilu */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {/* 1. Průvodce kampaní */}
                <div className="bg-[#EDE5D8] border border-[#D9C9B8] rounded-[10px] p-6 sm:p-7 h-full flex flex-col">
                  <div className="flex items-center gap-2.5 mb-3">
                    <FileText className="w-5 h-5 text-[#2C2520] stroke-[1.5] shrink-0" />
                    <span className="text-[11px] font-sans-jost uppercase tracking-wider text-[#8C7B6B] font-medium">
                      Dokument / PDF
                    </span>
                  </div>
                  <h4 className="font-serif-cormorant text-2xl font-light text-[#2C2520] mb-3 leading-snug">
                    Průvodce kampaní
                  </h4>
                  <p className="font-sans-jost text-sm text-[#2C2520] leading-relaxed">
                    Kompletní postup od přípravy po rozesílku odměn. Přes 40 šablon e-mailů a zpráv, plán kampaně na 30 dní, 60 nápadů na příspěvky, scénáře videí, text stránky kampaně, odpovědi na nejčastější otázky a krizový plán pro chvíle, kdy se sbírka zasekne.
                  </p>
                </div>

                {/* 2. Pracovní šablona v Notionu */}
                <div className="bg-[#EDE5D8] border border-[#D9C9B8] rounded-[10px] p-6 sm:p-7 h-full flex flex-col">
                  <div className="flex items-center gap-2.5 mb-3">
                    <Calendar className="w-5 h-5 text-[#2C2520] stroke-[1.5] shrink-0" />
                    <span className="text-[11px] font-sans-jost uppercase tracking-wider text-[#8C7B6B] font-medium">
                      Notion · zdarma
                    </span>
                  </div>
                  <h4 className="font-serif-cormorant text-2xl font-light text-[#2C2520] mb-3 leading-snug">
                    Pracovní šablona v Notionu
                  </h4>
                  <p className="font-sans-jost text-sm text-[#2C2520] leading-relaxed">
                    Obsahový kalendář se 78 úkoly. Zadáš jen datum startu kampaně a všechna data se dopočítají sama. Dále evidence oslovených, databáze recenzentů a bookstagramerů, přehled podporovatelů a rozesílky odměn, týdenní přehled stavu sbírky s grafem a oddíl pro psaní knihy (postavy, místa, kapitoly, časová osa).
                  </p>
                </div>

                {/* 3. Kalkulačka cílové částky */}
                <div className="bg-[#EDE5D8] border border-[#D9C9B8] rounded-[10px] p-6 sm:p-7 h-full flex flex-col">
                  <div className="flex items-center gap-2.5 mb-3">
                    <Calculator className="w-5 h-5 text-[#2C2520] stroke-[1.5] shrink-0" />
                    <span className="text-[11px] font-sans-jost uppercase tracking-wider text-[#8C7B6B] font-medium">
                      Google Tabulky · zdarma
                    </span>
                  </div>
                  <h4 className="font-serif-cormorant text-2xl font-light text-[#2C2520] mb-3 leading-snug">
                    Kalkulačka cílové částky
                  </h4>
                  <p className="font-sans-jost text-sm text-[#2C2520] leading-relaxed">
                    Zjistí, kolik potřebuješ vybrat, aby ti po odečtení provize platformy, poplatků za platby a rezervy zbylo na tisk i odměny. Vyplníš jen žlutá políčka a kalkulačka ti spočítá cílovou částku i počet podporovatelů, které potřebuješ.
                  </p>
                </div>

                {/* 4. Šablony v Canvě */}
                <div className="bg-[#EDE5D8] border border-[#D9C9B8] rounded-[10px] p-6 sm:p-7 h-full flex flex-col">
                  <div className="flex items-center gap-2.5 mb-3">
                    <Palette className="w-5 h-5 text-[#2C2520] stroke-[1.5] shrink-0" />
                    <span className="text-[11px] font-sans-jost uppercase tracking-wider text-[#8C7B6B] font-medium">
                      Canva · zdarma
                    </span>
                  </div>
                  <h4 className="font-serif-cormorant text-2xl font-light text-[#2C2520] mb-3 leading-snug">
                    Šablony v Canvě
                  </h4>
                  <p className="font-sans-jost text-sm text-[#2C2520] leading-relaxed">
                    7 hotových grafik, do kterých jen doplníš název knihy a své jméno: oznámení startu kampaně, literární citát, milník sbírky, odpočet do spuštění, Instagram Story s průběhem kampaně, poděkování po úspěšném konci a leták A6 na autorské čtení.
                  </p>
                </div>
              </div>

              {/* Informační řádek pod mřížkou */}
              <p className="text-xs sm:text-sm font-sans-jost text-[#8C7B6B] pt-2">
                Notion, Google Tabulky i Canva šablony fungují v bezplatných verzích. Nepotřebuješ žádné placené předplatné.
              </p>
            </div>
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

        {/* Author Proof Strip (three numbers with labels + proof line) */}
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

        {/* Small FAQ Accordion */}
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
                    <div className="pb-5 pt-1 text-sm sm:text-base text-[#2C2520]/80 leading-relaxed font-sans-jost">
                      <p>{faq.answer}</p>
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

            {/* Below final CTA (small text link) */}
            <div className="pt-2">
              <a
                href="/pruvodce-kampan-pointa#stahnout"
                onClick={handleFreeGuideClick}
                className="text-xs sm:text-sm font-sans-jost text-[#8C7B6B] hover:text-[#2C2520] underline underline-offset-4 decoration-[#D9C9B8] transition-colors"
              >
                {detail.finalCta.belowText}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
