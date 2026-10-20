import React, { useState } from 'react';
import {
  ArrowLeft,
  ShieldCheck,
  Printer,
  Copy,
  Check,
  Lock,
  ExternalLink,
  Mail,
  ShoppingBag,
  MessageSquare,
  Clock,
  BookOpen,
  FileText,
  Cookie,
  UserCheck,
  Server,
  Key,
} from 'lucide-react';
import { siteContent } from '../content';

interface PrivacyPolicyViewProps {
  onNavigateHome: () => void;
  onNavigate?: (path: string) => void;
}

export const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = ({
  onNavigateHome,
  onNavigate,
}) => {
  const [copied, setCopied] = useState(false);
  const privacy = siteContent.legalPages.privacy;

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sectionsNav = [
    { id: 'sekce-1', num: '01', title: 'Správce údajů' },
    { id: 'sekce-2', num: '02', title: 'Účely zpracování' },
    { id: 'sekce-3', num: '03', title: 'Doba uchovávání' },
    { id: 'sekce-4', num: '04', title: 'Zpracovatelé' },
    { id: 'sekce-5', num: '05', title: 'Vaše práva' },
    { id: 'sekce-6', num: '06', title: 'Zabezpečení' },
    { id: 'sekce-7', num: '07', title: 'Soubory cookies' },
    { id: 'sekce-8', num: '08', title: 'Změny zásad' },
  ];

  const gdprRights = [
    {
      title: 'Právo na přístup',
      article: 'Čl. 15 GDPR',
      desc: 'Máte právo vědět, jaké vaše údaje zpracovávám, za jakým účelem, po jakou dobu a komu jsou předávány.',
    },
    {
      title: 'Právo na opravu',
      article: 'Čl. 16 GDPR',
      desc: 'Pokud jsou vaše osobní údaje nepřesné nebo se změnily, máte právo na jejich bezodkladnou opravu.',
    },
    {
      title: 'Právo na výmaz',
      article: 'Čl. 17 GDPR',
      desc: 'Máte právo na smazání údajů („být zapomenut“), pokud odpadl účel nebo jste odvolali souhlas a neexistuje jiná zákonná povinnost.',
    },
    {
      title: 'Právo na omezení',
      article: 'Čl. 18 GDPR',
      desc: 'V zákonem stanovených případech můžete požadovat dočasné omezení nakládání s vašimi údaji.',
    },
    {
      title: 'Právo na přenositelnost',
      article: 'Čl. 20 GDPR',
      desc: 'Máte právo získat své údaje ve strukturovaném, běžně používaném formátu pro předání jinému správci.',
    },
    {
      title: 'Právo vznést námitku',
      article: 'Čl. 21 GDPR',
      desc: 'Můžete vznést námitku proti zpracování založenému na oprávněném zájmu (např. vyřizování dotazů).',
    },
    {
      title: 'Právo odvolat souhlas',
      article: 'Čl. 7 GDPR',
      desc: 'Udělený souhlas pro newsletter můžete kdykoli odvolat jedním kliknutím v zápatí každého zaslaného e-mailu.',
    },
    {
      title: 'Stížnost u ÚOOÚ',
      article: 'Dozorový úřad',
      desc: 'Máte právo obrátit se na Úřad pro ochranu osobních údajů (Pplk. Sochora 27, Praha 7, www.uoou.gov.cz).',
    },
  ];

  return (
    <main className="pt-24 pb-24 md:pt-32 md:pb-32 min-h-screen bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 md:px-10">
        {/* Top Breadcrumb & Dual Tab Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#D9C9B8]/50">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center text-xs font-sans-jost uppercase tracking-wider text-[#8C7B6B] hover:text-[#2C2520] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span>Zpět na hlavní stránku</span>
          </button>

          {/* Quick Tab Switcher */}
          <div className="inline-flex p-1 bg-[#EDE5D8]/70 rounded-full border border-[#D9C9B8]/60 text-xs font-sans-jost">
            <button
              onClick={() => {
                if (onNavigate) {
                  onNavigate('/obchodni-podminky');
                } else {
                  window.history.pushState({}, '', '/obchodni-podminky');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }
              }}
              className="px-3.5 py-1.5 rounded-full text-[#8C7B6B] hover:text-[#2C2520] transition-colors cursor-pointer"
            >
              Obchodní podmínky
            </button>
            <span className="px-3.5 py-1.5 rounded-full bg-[#FAF8F5] text-[#2C2520] font-medium shadow-xs">
              Ochrana osobních údajů (GDPR)
            </span>
          </div>
        </div>

        {/* Hero Header */}
        <header className="mb-10 sm:mb-14">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EDE5D8] rounded-full text-xs font-sans-jost text-[#8C7B6B] font-medium">
              <Lock className="w-3.5 h-3.5" />
              <span>Nařízení (EU) 2016/679 (GDPR) · Od 01.10.2026</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EDE5D8]/50 rounded-full text-xs font-sans-jost text-[#8C7B6B]">
              <Clock className="w-3.5 h-3.5" />
              <span>Doba čtení cca 5 min</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#2C2520] font-serif-cormorant leading-[1.12] mb-4">
            {privacy.title}
          </h1>

          <p className="font-sans-jost text-base sm:text-lg md:text-xl text-[#8C7B6B] leading-relaxed max-w-3xl mb-6">
            {privacy.subtitle}
          </p>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center text-xs font-sans-jost text-[#8C7B6B] hover:text-[#2C2520] transition-colors cursor-pointer px-3.5 py-1.5 rounded-[6px] border border-[#D9C9B8]/70 hover:border-[#8C7B6B] bg-[#FAF8F5]"
              title="Kopírovat odkaz"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 mr-1.5 text-[#5B7065]" />
                  <span className="text-[#5B7065] font-medium">Odkaz zkopírován</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 mr-1.5" />
                  <span>Kopírovat odkaz</span>
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center text-xs font-sans-jost text-[#8C7B6B] hover:text-[#2C2520] transition-colors cursor-pointer px-3.5 py-1.5 rounded-[6px] border border-[#D9C9B8]/70 hover:border-[#8C7B6B] bg-[#FAF8F5]"
              title="Vytisknout zásady"
            >
              <Printer className="w-3.5 h-3.5 mr-1.5" />
              <span>Vytisknout</span>
            </button>
          </div>
        </header>

        {/* Quick Highlights Summary Grid */}
        <div className="bg-[#FAF8F5] border border-[#D9C9B8] rounded-2xl p-6 sm:p-7 mb-12 shadow-[0_4px_20px_rgba(44,37,32,0.02)]">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-4 h-4 text-[#8C7B6B]" />
            <h2 className="font-sans-jost text-xs uppercase tracking-wider text-[#8C7B6B] font-medium">
              Zásady v kostce a lidskou řečí
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans-jost text-[#2C2520]/85 leading-relaxed">
            <div className="p-3.5 bg-white/70 rounded-xl border border-[#D9C9B8]/50">
              <span className="font-medium text-[#2C2520] block mb-1">
                Kdo je správce údajů
              </span>
              Dominika Černíková, IČO 05603005, Kladno. S vašimi údaji nakládám s maximální péčí a diskrétností.
            </div>
            <div className="p-3.5 bg-white/70 rounded-xl border border-[#D9C9B8]/50">
              <span className="font-medium text-[#2C2520] block mb-1">
                Newsletter a dárky ke stažení
              </span>
              Zpracovávám pouze jméno a e-mail na základě vašeho souhlasu. Kdykoli se můžete odhlásit 1 klikem v patičce e-mailu.
            </div>
            <div className="p-3.5 bg-white/70 rounded-xl border border-[#D9C9B8]/50">
              <span className="font-medium text-[#2C2520] block mb-1">
                Prodej šablon v SimpleShopu
              </span>
              Fakturační údaje slouží výhradně k vystavení faktury, doručení digitálního obsahu a zákonnému účetnictví.
            </div>
            <div className="p-3.5 bg-white/70 rounded-xl border border-[#D9C9B8]/50">
              <span className="font-medium text-[#2C2520] block mb-1">
                Bezpečí a žádný prodej dat
              </span>
              Vaše osobní údaje neprodávám ani nepředávám k marketingovým účelům třetím stranám. Přenos je šifrován (HTTPS).
            </div>
          </div>
        </div>

        {/* Interactive Quick Table of Contents */}
        <div className="mb-14 p-5 sm:p-6 bg-[#EDE5D8]/40 border border-[#D9C9B8]/60 rounded-2xl">
          <div className="flex items-center gap-2 mb-3 text-xs font-sans-jost uppercase tracking-wider text-[#8C7B6B] font-medium">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Rychlá navigace obsahem</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {sectionsNav.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 border border-[#D9C9B8]/70 hover:border-[#8C7B6B] hover:bg-white text-xs font-sans-jost text-[#2C2520] transition-colors cursor-pointer"
              >
                <span className="text-[#8C7B6B] font-medium">{s.num}</span>
                <span>{s.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Structured Sections */}
        <div className="space-y-10 sm:space-y-12">
          {/* 01. Správce */}
          <section
            id="sekce-1"
            className="scroll-mt-28 bg-white/60 border border-[#D9C9B8]/70 rounded-2xl p-6 sm:p-8 md:p-9 shadow-[0_4px_24px_rgba(44,37,32,0.02)] transition-shadow hover:shadow-[0_6px_30px_rgba(44,37,32,0.04)]"
          >
            <div className="mb-6 pb-4 border-b border-[#D9C9B8]/50">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#EDE5D8] text-[11px] font-sans-jost font-medium text-[#54463A]">
                  01
                </span>
                <span className="text-xs uppercase tracking-wider text-[#8C7B6B] font-sans-jost font-medium">
                  Identifikace
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light font-serif-cormorant text-[#2C2520] leading-snug">
                Správce osobních údajů
              </h2>
            </div>

            <div className="font-sans-jost text-sm sm:text-base text-[#2C2520]/85 leading-[1.8] space-y-4">
              <p>
                Správcem vašich osobních údajů podle Nařízení Evropského parlamentu a Rady (EU) 2016/679 (GDPR) a zákona č. 110/2019 Sb., o zpracování osobních údajů, je:
              </p>

              <div className="p-4 sm:p-5 bg-[#FAF8F5] border border-[#D9C9B8]/60 rounded-xl space-y-1 text-sm">
                <p className="font-medium text-[#2C2520]">Dominika Černíková</p>
                <p className="text-[#2C2520]/80">IČO: 05603005</p>
                <p className="text-[#2C2520]/80">Místo podnikání: Tylova 1890, 272 01 Kladno</p>
                <p className="text-[#2C2520]/80">Fyzická osoba zapsaná v živnostenském rejstříku (neplátce DPH)</p>
                <p className="pt-2 text-[#2C2520]/80">
                  Kontaktní e-mail:{' '}
                  <a
                    href="mailto:cernikova.dom@gmail.com"
                    className="text-[#2C2520] underline hover:text-[#8C7B6B]"
                  >
                    cernikova.dom@gmail.com
                  </a>
                </p>
                <p className="text-[#2C2520]/80">Web: dusenapapire.cz</p>
                <p className="text-[#2C2520]/80">Instagram: @mlecnezubyduse</p>
              </div>

              <p>
                Jako správce určuji účely a prostředky zpracování vašich osobních údajů a nesu plnou odpovědnost za jejich zákonné a transparentní zabezpečení.
              </p>
            </div>
          </section>

          {/* 02. Jaké údaje zpracovávám a proč (Subheadings A, B, C) */}
          <section
            id="sekce-2"
            className="scroll-mt-28 bg-white/60 border border-[#D9C9B8]/70 rounded-2xl p-6 sm:p-8 md:p-9 shadow-[0_4px_24px_rgba(44,37,32,0.02)] transition-shadow hover:shadow-[0_6px_30px_rgba(44,37,32,0.04)]"
          >
            <div className="mb-6 pb-4 border-b border-[#D9C9B8]/50">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#EDE5D8] text-[11px] font-sans-jost font-medium text-[#54463A]">
                  02
                </span>
                <span className="text-xs uppercase tracking-wider text-[#8C7B6B] font-sans-jost font-medium">
                  Účely & právní základy
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light font-serif-cormorant text-[#2C2520] leading-snug">
                Jaké osobní údaje zpracovávám a proč
              </h2>
              <p className="font-sans-jost text-xs sm:text-sm text-[#8C7B6B] mt-1">
                Přehled jednotlivých situací, kdy dochází ke zpracování vašich údajů
              </p>
            </div>

            <div className="space-y-6 font-sans-jost">
              {/* Subheading A: Newsletter */}
              <div className="bg-[#FAF8F5] border border-[#D9C9B8]/60 rounded-xl p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EDE5D8] flex items-center justify-center text-[#54463A] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8C7B6B] font-semibold block">
                      Podkategorie A
                    </span>
                    <h3 className="font-serif-cormorant text-xl sm:text-2xl font-normal text-[#2C2520]">
                      Odběr newsletteru a dárky ke stažení zdarma
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#2C2520]/85 mb-4">
                  <div className="p-3 bg-white/70 rounded-lg border border-[#D9C9B8]/40">
                    <span className="font-medium text-[#2C2520] block mb-1">Rozsah údajů</span>
                    Křestní jméno, e-mailová adresa, vybraný dárek (první kapitola knihy Mléčné zuby duše nebo průvodce Jak zvládnout předprodej knihy).
                  </div>
                  <div className="p-3 bg-white/70 rounded-lg border border-[#D9C9B8]/40">
                    <span className="font-medium text-[#2C2520] block mb-1">Právní základ</span>
                    Váš dobrovolný a výslovný souhlas podle <strong>čl. 6 odst. 1 písm. a) GDPR</strong>.
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#2C2520]/80 leading-relaxed mb-3">
                  <strong>Účel:</strong> Okamžité zaslání vybraného dárku do vaší e-mailové schránky a následné zasílání občasného newsletteru s novinkami, autorskými postřehy o psaní a tvorbě z projektu Duše na papíře.
                </p>

                <p className="text-xs text-[#8C7B6B] leading-relaxed">
                  <strong>Jak se odhlásit:</strong> Z odběru se můžete kdykoliv jednoduše a bezplatně odhlásit kliknutím na odhlašovací odkaz v zápatí každého zaslaného e-mailu.
                </p>
              </div>

              {/* Subheading B: Prodej digitálního obsahu */}
              <div className="bg-[#FAF8F5] border border-[#D9C9B8]/60 rounded-xl p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EDE5D8] flex items-center justify-center text-[#54463A] shrink-0">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8C7B6B] font-semibold block">
                      Podkategorie B
                    </span>
                    <h3 className="font-serif-cormorant text-xl sm:text-2xl font-normal text-[#2C2520]">
                      Prodej digitálního obsahu (balíček Šablony pro autory)
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#2C2520]/85 mb-4">
                  <div className="p-3 bg-white/70 rounded-lg border border-[#D9C9B8]/40">
                    <span className="font-medium text-[#2C2520] block mb-1">Rozsah údajů</span>
                    Jméno, příjmení, e-mailová adresa, fakturační adresa, u podnikatelů IČO/DIČ, informace o zakoupeném produktu a stavu platby.
                  </div>
                  <div className="p-3 bg-white/70 rounded-lg border border-[#D9C9B8]/40">
                    <span className="font-medium text-[#2C2520] block mb-1">Právní základ</span>
                    Plnění kupní smlouvy (<strong>čl. 6 odst. 1 písm. b GDPR</strong>) a splnění zákonné daňové povinnosti (<strong>čl. 6 odst. 1 písm. c GDPR</strong>).
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#2C2520]/80 leading-relaxed">
                  <strong>Účel:</strong> Zpracování vaší objednávky v systému SimpleShop, vystavení a doručení řádného daňového dokladu (faktury), zaslání přístupových odkazů k šablonám a vyřizování případných dotazů či reklamací.
                </p>
              </div>

              {/* Subheading C: Dotazy a komunikace */}
              <div className="bg-[#FAF8F5] border border-[#D9C9B8]/60 rounded-xl p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EDE5D8] flex items-center justify-center text-[#54463A] shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8C7B6B] font-semibold block">
                      Podkategorie C
                    </span>
                    <h3 className="font-serif-cormorant text-xl sm:text-2xl font-normal text-[#2C2520]">
                      E-mailová komunikace a dotazy
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#2C2520]/85 mb-4">
                  <div className="p-3 bg-white/70 rounded-lg border border-[#D9C9B8]/40">
                    <span className="font-medium text-[#2C2520] block mb-1">Rozsah údajů</span>
                    Jméno, e-mailová adresa a obsah vaší zprávy zaslané na e-mail nebo formulářem.
                  </div>
                  <div className="p-3 bg-white/70 rounded-lg border border-[#D9C9B8]/40">
                    <span className="font-medium text-[#2C2520] block mb-1">Právní základ</span>
                    Oprávněný zájem správce (<strong>čl. 6 odst. 1 písm. f GDPR</strong>) na zodpovězení vašeho dotazu.
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#2C2520]/80 leading-relaxed">
                  <strong>Účel:</strong> Zodpovězení vašeho dotazu a navazující přímá lidská komunikace.
                </p>
              </div>
            </div>
          </section>

          {/* 03. Doba uchovávání */}
          <section
            id="sekce-3"
            className="scroll-mt-28 bg-white/60 border border-[#D9C9B8]/70 rounded-2xl p-6 sm:p-8 md:p-9 shadow-[0_4px_24px_rgba(44,37,32,0.02)] transition-shadow hover:shadow-[0_6px_30px_rgba(44,37,32,0.04)]"
          >
            <div className="mb-6 pb-4 border-b border-[#D9C9B8]/50">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#EDE5D8] text-[11px] font-sans-jost font-medium text-[#54463A]">
                  03
                </span>
                <span className="text-xs uppercase tracking-wider text-[#8C7B6B] font-sans-jost font-medium">
                  Časové limity
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light font-serif-cormorant text-[#2C2520] leading-snug">
                Doba uchovávání osobních údajů
              </h2>
            </div>

            <div className="space-y-4 font-sans-jost text-sm sm:text-base text-[#2C2520]/85 leading-[1.8]">
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="inline-flex items-center justify-center min-w-[28px] h-6 rounded-md bg-[#EDE5D8]/70 text-[11px] font-medium text-[#54463A] shrink-0 mt-0.5">
                  3.1
                </span>
                <p>
                  <strong>Údaje pro zasílání newsletteru:</strong> Zpracovávám po dobu trvání vašeho souhlasu, maximálně však po dobu 5 let od jeho udělení, nebo do chvíle, kdy se z odběru sami odhlásíte.
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <span className="inline-flex items-center justify-center min-w-[28px] h-6 rounded-md bg-[#EDE5D8]/70 text-[11px] font-medium text-[#54463A] shrink-0 mt-0.5">
                  3.2
                </span>
                <p>
                  <strong>Údaje z nákupu a daňové doklady:</strong> Uchovávám po dobu vyžadovanou zákonem o účetnictví (č. 563/1991 Sb.) a daňovým řádem, tedy zpravidla 10 let od konce příslušného zdaňovacího období.
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <span className="inline-flex items-center justify-center min-w-[28px] h-6 rounded-md bg-[#EDE5D8]/70 text-[11px] font-medium text-[#54463A] shrink-0 mt-0.5">
                  3.3
                </span>
                <p>
                  <strong>E-mailová komunikace k dotazům:</strong> Uchovávám po dobu nezbytnou k úplnému vyřešení vašeho dotazu, nejdéle však 12 měsíců po ukončení konverzace.
                </p>
              </div>
            </div>
          </section>

          {/* 04. Zpracovatelé */}
          <section
            id="sekce-4"
            className="scroll-mt-28 bg-white/60 border border-[#D9C9B8]/70 rounded-2xl p-6 sm:p-8 md:p-9 shadow-[0_4px_24px_rgba(44,37,32,0.02)] transition-shadow hover:shadow-[0_6px_30px_rgba(44,37,32,0.04)]"
          >
            <div className="mb-6 pb-4 border-b border-[#D9C9B8]/50">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#EDE5D8] text-[11px] font-sans-jost font-medium text-[#54463A]">
                  04
                </span>
                <span className="text-xs uppercase tracking-wider text-[#8C7B6B] font-sans-jost font-medium">
                  Příjemci dat
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light font-serif-cormorant text-[#2C2520] leading-snug">
                Kdo má k vašim údajům přístup (Zpracovatelé)
              </h2>
            </div>

            <div className="font-sans-jost text-sm sm:text-base text-[#2C2520]/85 leading-[1.8] space-y-4">
              <p>
                Vaše osobní údaje neprodávám ani neposkytuji žádným neoprávněným třetím stranám. Aby vše spolehlivě a bezpečně fungovalo, využívám prověřené specializované nástroje a zpracovatele vázané smlouvami o zpracování osobních údajů:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 bg-[#FAF8F5] border border-[#D9C9B8]/60 rounded-xl">
                  <span className="font-medium text-[#2C2520] block mb-1">
                    SimpleShop (Redbit s.r.o.)
                  </span>
                  <p className="text-xs text-[#2C2520]/75 leading-relaxed">
                    Objednávkový a fakturační systém zajišťující nákupní formulář, automatizaci a evidenci dokladů v ČR.
                  </p>
                </div>

                <div className="p-4 bg-[#FAF8F5] border border-[#D9C9B8]/60 rounded-xl">
                  <span className="font-medium text-[#2C2520] block mb-1">
                    Stripe (Stripe Payments Europe, Ltd.)
                  </span>
                  <p className="text-xs text-[#2C2520]/75 leading-relaxed">
                    Platební brána, licencovaný poskytovatel zabezpečených online plateb kartou integrovaný v SimpleShopu.
                  </p>
                </div>

                <div className="p-4 bg-[#FAF8F5] border border-[#D9C9B8]/60 rounded-xl">
                  <span className="font-medium text-[#2C2520] block mb-1">
                    Google (Gmail, Google Disk)
                  </span>
                  <p className="text-xs text-[#2C2520]/75 leading-relaxed">
                    Zabezpečená cloudová e-mailová schránka a cloudové úložiště pro správu objednávek.
                  </p>
                </div>

                <div className="p-4 bg-[#FAF8F5] border border-[#D9C9B8]/60 rounded-xl">
                  <span className="font-medium text-[#2C2520] block mb-1">
                    MailerLite (MailerLite Limited) & GitHub Pages (GitHub, Inc.)
                  </span>
                  <p className="text-xs text-[#2C2520]/75 leading-relaxed">
                    MailerLite slouží k hromadnému odesílání dárků a newsletteru. GitHub Pages zajišťuje webhosting, tedy provoz webu dusenapapire.cz.
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#8C7B6B] pt-2">
                Veškeré zpracování probíhá na území Evropské unie nebo v souladu s mechanismy zaručujícími odpovídající úroveň ochrany podle GDPR.
              </p>
            </div>
          </section>

          {/* 05. Vaše práva */}
          <section
            id="sekce-5"
            className="scroll-mt-28 bg-white/60 border border-[#D9C9B8]/70 rounded-2xl p-6 sm:p-8 md:p-9 shadow-[0_4px_24px_rgba(44,37,32,0.02)] transition-shadow hover:shadow-[0_6px_30px_rgba(44,37,32,0.04)]"
          >
            <div className="mb-6 pb-4 border-b border-[#D9C9B8]/50">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#EDE5D8] text-[11px] font-sans-jost font-medium text-[#54463A]">
                  05
                </span>
                <span className="text-xs uppercase tracking-wider text-[#8C7B6B] font-sans-jost font-medium">
                  Vaše záruky
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light font-serif-cormorant text-[#2C2520] leading-snug">
                Vaše práva podle GDPR
              </h2>
              <p className="font-sans-jost text-xs sm:text-sm text-[#8C7B6B] mt-1">
                Jako subjekt údajů máte plnou kontrolu nad tím, jak jsou vaše údaje zpracovávány
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
              {gdprRights.map((r, rIdx) => (
                <div
                  key={rIdx}
                  className="p-4 bg-[#FAF8F5] border border-[#D9C9B8]/60 rounded-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="font-sans-jost font-medium text-sm text-[#2C2520]">
                        {r.title}
                      </h3>
                      <span className="text-[10px] font-sans-jost uppercase tracking-wider px-2 py-0.5 bg-[#EDE5D8] rounded text-[#54463A]">
                        {r.article}
                      </span>
                    </div>
                    <p className="text-xs text-[#2C2520]/80 leading-relaxed font-sans-jost">
                      {r.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#EDE5D8]/40 border border-[#D9C9B8]/60 rounded-xl text-xs sm:text-sm font-sans-jost text-[#2C2520]/85">
              <span>Pro uplatnění kteréhokoli z těchto práv mi stačí napsat na e-mail: </span>
              <a
                href="mailto:cernikova.dom@gmail.com"
                className="font-medium text-[#2C2520] underline hover:text-[#8C7B6B]"
              >
                cernikova.dom@gmail.com
              </a>
              <span>. Na vaše žádosti odpovídám bez zbytečného odkladu, nejpozději do 30 dnů.</span>
            </div>
          </section>

          {/* 06. Zabezpečení */}
          <section
            id="sekce-6"
            className="scroll-mt-28 bg-white/60 border border-[#D9C9B8]/70 rounded-2xl p-6 sm:p-8 md:p-9 shadow-[0_4px_24px_rgba(44,37,32,0.02)] transition-shadow hover:shadow-[0_6px_30px_rgba(44,37,32,0.04)]"
          >
            <div className="mb-6 pb-4 border-b border-[#D9C9B8]/50">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#EDE5D8] text-[11px] font-sans-jost font-medium text-[#54463A]">
                  06
                </span>
                <span className="text-xs uppercase tracking-wider text-[#8C7B6B] font-sans-jost font-medium">
                  Bezpečnost dat
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light font-serif-cormorant text-[#2C2520] leading-snug">
                Zabezpečení osobních údajů
              </h2>
            </div>

            <div className="space-y-4 font-sans-jost text-sm sm:text-base text-[#2C2520]/85 leading-[1.8]">
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="inline-flex items-center justify-center min-w-[28px] h-6 rounded-md bg-[#EDE5D8]/70 text-[11px] font-medium text-[#54463A] shrink-0 mt-0.5">
                  6.1
                </span>
                <p>
                  Osobní údaje chráním v maximální možné míře pomocí moderních technických a organizačních opatření odpovídajících aktuálnímu stupni vývoje.
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <span className="inline-flex items-center justify-center min-w-[28px] h-6 rounded-md bg-[#EDE5D8]/70 text-[11px] font-medium text-[#54463A] shrink-0 mt-0.5">
                  6.2
                </span>
                <p>
                  Veškerý přenos dat na webu dusenapapire.cz i v objednávkovém systému probíhá výhradně přes šifrované připojení zabezpečeným protokolem HTTPS s platným bezpečnostním certifikátem (SSL/TLS).
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <span className="inline-flex items-center justify-center min-w-[28px] h-6 rounded-md bg-[#EDE5D8]/70 text-[11px] font-medium text-[#54463A] shrink-0 mt-0.5">
                  6.3
                </span>
                <p>
                  Přístup k veškerým systémům a databázím je chráněn silnými unikátními hesly a dvoufaktorovým ověřováním (2FA).
                </p>
              </div>
            </div>
          </section>

          {/* 07. Cookies */}
          <section
            id="sekce-7"
            className="scroll-mt-28 bg-white/60 border border-[#D9C9B8]/70 rounded-2xl p-6 sm:p-8 md:p-9 shadow-[0_4px_24px_rgba(44,37,32,0.02)] transition-shadow hover:shadow-[0_6px_30px_rgba(44,37,32,0.04)]"
          >
            <div className="mb-6 pb-4 border-b border-[#D9C9B8]/50">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#EDE5D8] text-[11px] font-sans-jost font-medium text-[#54463A]">
                  07
                </span>
                <span className="text-xs uppercase tracking-wider text-[#8C7B6B] font-sans-jost font-medium">
                  Soubory cookies
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light font-serif-cormorant text-[#2C2520] leading-snug">
                Soubory cookies a jejich správa
              </h2>
            </div>

            <div className="font-sans-jost text-sm sm:text-base text-[#2C2520]/85 leading-[1.8] space-y-4">
              <p>
                Webové stránky <strong>dusenapapire.cz</strong> využívají soubory cookies – malé textové soubory, které se ukládají do vašeho prohlížeče:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 sm:p-5 bg-[#FAF8F5] border border-[#D9C9B8]/60 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#5B7065]" />
                    <h3 className="font-medium text-[#2C2520] text-sm">
                      Nezbytné technické cookies
                    </h3>
                  </div>
                  <p className="text-xs text-[#2C2520]/80 leading-relaxed">
                    Jsou nezbytné pro základní chod stránek, bezpečné odeslání objednávky a fungování navigace. Podle zákona k nim není vyžadován váš souhlas.
                  </p>
                </div>

                <div className="p-4 sm:p-5 bg-[#FAF8F5] border border-[#D9C9B8]/60 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#8C7B6B]" />
                    <h3 className="font-medium text-[#2C2520] text-sm">
                      Analytické & preferenční cookies
                    </h3>
                  </div>
                  <p className="text-xs text-[#2C2520]/80 leading-relaxed">
                    Pomáhají mi anonymně porozumět, co vás na stránkách zajímá. Tyto cookies jsou ukládány <strong>výhradně s vaším předchozím výslovným souhlasem</strong>.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#EDE5D8]/40 border border-[#D9C9B8]/60 rounded-xl text-xs sm:text-sm">
                <span>Své nastavení můžete kdykoli jednoduše změnit nebo souhlas odvolat kliknutím na odkaz </span>
                <span className="font-medium text-[#2C2520]">„Cookies“</span>
                <span> v zápatí každé stránky webu.</span>
              </div>
            </div>
          </section>

          {/* 08. Změny zásad */}
          <section
            id="sekce-8"
            className="scroll-mt-28 bg-white/60 border border-[#D9C9B8]/70 rounded-2xl p-6 sm:p-8 md:p-9 shadow-[0_4px_24px_rgba(44,37,32,0.02)] transition-shadow hover:shadow-[0_6px_30px_rgba(44,37,32,0.04)]"
          >
            <div className="mb-6 pb-4 border-b border-[#D9C9B8]/50">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#EDE5D8] text-[11px] font-sans-jost font-medium text-[#54463A]">
                  08
                </span>
                <span className="text-xs uppercase tracking-wider text-[#8C7B6B] font-sans-jost font-medium">
                  Aktualizace
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-light font-serif-cormorant text-[#2C2520] leading-snug">
                Změny těchto zásad
              </h2>
            </div>

            <div className="space-y-4 font-sans-jost text-sm sm:text-base text-[#2C2520]/85 leading-[1.8]">
              <p>
                Tyto zásady mohu v případě potřeby aktualizovat (například při rozšíření nabídky služeb nebo změnách platné legislativy).
              </p>
              <p>
                Aktuální a platné znění najdete vždy na této adrese:{' '}
                <a
                  href="/ochrana-osobnich-udaju"
                  className="font-medium text-[#2C2520] underline hover:text-[#8C7B6B]"
                >
                  dusenapapire.cz/ochrana-osobnich-udaju
                </a>
              </p>
              <p className="text-xs text-[#8C7B6B]">
                Tyto zásady jsou platné a účinné od <strong>01.10.2026</strong>.
              </p>
            </div>
          </section>
        </div>

        {/* Footer Reassurance & Cross-Link */}
        <div className="mt-14 pt-8 border-t border-[#D9C9B8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#8C7B6B] block mb-1 font-sans-jost font-medium">
              Související právní dokument
            </span>
            <button
              onClick={() => {
                if (onNavigate) {
                  onNavigate('/obchodni-podminky');
                } else {
                  window.history.pushState({}, '', '/obchodni-podminky');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }
              }}
              className="inline-flex items-center text-sm font-sans-jost text-[#2C2520] hover:text-[#8C7B6B] underline underline-offset-4 decoration-[#D9C9B8] transition-colors cursor-pointer"
            >
              <span>Obchodní podmínky prodeje (SimpleShop)</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="btn-secondary !text-xs !py-2.5 !px-5 cursor-pointer"
            >
              Zpět na úvodní stránku
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
