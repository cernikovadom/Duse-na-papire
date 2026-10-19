import React, { useState } from 'react';
import {
  ArrowLeft,
  FileText,
  ShieldCheck,
  Printer,
  Copy,
  Check,
  ExternalLink,
  Scale,
  Sparkles,
  ShoppingBag,
  Clock,
  Mail,
  AlertCircle,
  Lock,
  ChevronRight,
  BookOpen,
} from 'lucide-react';
import { siteContent } from '../content';

interface LegalTermsViewProps {
  onNavigateHome: () => void;
  onNavigate?: (path: string) => void;
}

export const LegalTermsView: React.FC<LegalTermsViewProps> = ({
  onNavigateHome,
  onNavigate,
}) => {
  const [copied, setCopied] = useState(false);
  const terms = siteContent.legalPages.terms;

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

  // Structured sections for pristine typography and layout
  const sections = [
    {
      id: 'clanek-1',
      num: '01',
      roman: 'Článek I',
      title: 'Úvodní ustanovení',
      subtitle: 'Smluvní strany a vymezení základních pojmů',
      clauses: [
        {
          num: '1.1',
          text: 'Tyto obchodní podmínky upravují vzájemná práva a povinnosti mezi prodávající a kupujícím při koupi digitálního obsahu (dále jen „produkt“).',
        },
        {
          num: '1.2',
          text: 'Prodávající: Dominika Černíková, IČO 05603005, se sídlem Tylova 1890, 272 01 Kladno, fyzická osoba zapsaná v živnostenském rejstříku. Prodávající není plátcem DPH. Kontaktní e-mail: cernikova.dom@gmail.com, web: dusenapapire.cz.',
        },
        {
          num: '1.3',
          text: 'Kupující může být spotřebitelem (člověk, který jedná mimo rámec své podnikatelské činnosti), nebo podnikatelem. Ustanovení na ochranu spotřebitele se použijí jen na kupující, kteří jsou spotřebiteli.',
        },
        {
          num: '1.4',
          text: 'Právní vztahy výslovně neupravené těmito podmínkami se řídí právním řádem České republiky, zejména zákonem č. 89/2012 Sb., občanským zákoníkem, a zákonem č. 634/1992 Sb., o ochraně spotřebitele.',
        },
      ],
    },
    {
      id: 'clanek-2',
      num: '02',
      roman: 'Článek II',
      title: 'Produkt a technické požadavky',
      subtitle: 'Charakteristika digitálního obsahu Šablony pro autory',
      clauses: [
        {
          num: '2.1',
          text: 'Produktem je digitální obsah, který není dodáván na hmotném nosiči: ucelený balíček Šablony pro autory. Tvoří ho dokument se šablonami textů a e-mailů, pracovní šablona v aplikaci Notion, kalkulačka v Google Tabulkách a grafické šablony v aplikaci Canva. Přesný a podrobný rozpis obsahu je vždy uveden na prodejní stránce produktu.',
        },
        {
          num: '2.2',
          text: 'K plnohodnotnému použití produktu kupující potřebuje běžné zařízení s přístupem k internetu a bezplatné uživatelské účty ve službách Notion, Google (pro Google Tabulky) a Canva. Prvky označené v Canvě korunkou jsou dostupné jen v placené verzi Canva Pro a lze je kdykoliv nahradit bezplatnou alternativou.',
        },
        {
          num: '2.3',
          text: 'Prodávající neodpovídá za změny funkcí, případné výpadky nebo licenční cenovou politiku služeb třetích stran (Notion, Google, Canva).',
        },
        {
          num: '2.4',
          text: 'Produkt obsahuje doporučení, postupy a vzory založené na reálné zkušenosti prodávající z vlastní crowdfundingové kampaně. Prodávající nezaručuje konkrétní komerční výsledek kampaně ani výši vybrané částky. Informace o daních, darech a fakturaci v produktu jsou obecné povahy a nenahrazují individuální právní ani daňové poradenství.',
        },
      ],
    },
    {
      id: 'clanek-3',
      num: '03',
      roman: 'Článek III',
      title: 'Objednávka a uzavření smlouvy',
      subtitle: 'Nákupní proces prostřednictvím systému SimpleShop',
      clauses: [
        {
          num: '3.1',
          text: 'Prezentace produktu na webových stránkách je výzvou k podání návrhu na uzavření smlouvy (informativního charakteru).',
        },
        {
          num: '3.2',
          text: 'Kupující provádí objednávku vyplněním objednávkového formuláře zabezpečeného systému SimpleShop. Před odesláním objednávky má kupující možnost zadané údaje zkontrolovat a opravit.',
        },
        {
          num: '3.3',
          text: 'Smlouva je uzavřena odesláním objednávky kupujícím a jejím následným potvrzením (akceptací) ze strany prodávající na e-mailovou adresu zadanou kupujícím v objednávce.',
        },
        {
          num: '3.4',
          text: 'Kupující souhlasí s použitím prostředků komunikace na dálku při uzavírání smlouvy. Náklady, které kupujícímu vzniknou při použití komunikačních prostředků na dálku (především náklady na internetové připojení), nese sám kupující.',
        },
        {
          num: '3.5',
          text: 'Údaje uvedené kupujícím v objednávkovém formuláři jsou prodávající považovány za správné a úplné.',
        },
      ],
    },
    {
      id: 'clanek-4',
      num: '04',
      roman: 'Článek IV',
      title: 'Cena a platební podmínky',
      subtitle: 'Konečná cena, platební metody a daňový doklad',
      clauses: [
        {
          num: '4.1',
          text: 'Cena produktu je uvedena na prodejní stránce a v objednávkovém formuláři. Prodávající není plátcem DPH, uvedená cena je konečná bez dalších skrytých poplatků.',
        },
        {
          num: '4.2',
          text: 'Platbu kupní ceny je možné provést bezhotovostně prostřednictvím zabezpečené online platební brány integrované v objednávkovém systému SimpleShop – online platební kartou nebo rychlým online bankovním převodem.',
        },
        {
          num: '4.3',
          text: 'Kupní cena je splatná bezprostředně při dokončení objednávky. Závazek kupujícího uhradit kupní cenu je splněn okamžikem připsání částky na účet prodávající.',
        },
        {
          num: '4.4',
          text: 'Po přijetí platby vystaví prodávající kupujícímu daňový doklad (fakturu) v elektronické podobě a zašle jej na e-mailovou adresu kupujícího.',
        },
      ],
    },
    {
      id: 'clanek-5',
      num: '05',
      roman: 'Článek V',
      title: 'Dodání digitálního obsahu',
      subtitle: 'Okamžité doručení přístupových odkazů e-mailem',
      clauses: [
        {
          num: '5.1',
          text: 'Digitální obsah (balíček Šablony pro autory) je kupujícímu dodán výhradně elektronickou cestou bezprostředně po zaplacení kupní ceny, a to zasláním e-mailu s unikátními přístupovými odkazy k šablonám a dokumentům (šablona v Notionu, odkaz na kopii Google Tabulek, šablony v Canvě a průvodní materiály).',
        },
        {
          num: '5.2',
          text: 'Digitální obsah není dodáván na hmotném nosiči (CD, DVD, USB flash disk apod.). Žádná zásilka není posílána poštou ani kurýrní službou.',
        },
        {
          num: '5.3',
          text: 'Kupující je povinen si dodané podklady zkopírovat, uložit nebo duplikovat do svých vlastních účtů ve službách Notion, Google a Canva bez zbytečného odkladu.',
        },
      ],
    },
    {
      id: 'clanek-6',
      num: '06',
      roman: 'Článek VI',
      title: 'Odstoupení od smlouvy',
      subtitle: 'Zvláštní režim pro digitální obsah podle § 1837 písm. l) občanského zákoníku',
      highlight: {
        title: 'Důležité upozornění pro spotřebitele',
        text: 'Vzhledem k tomu, že digitální obsah obdržíte ihned po úhradě, zákon v souladu s § 1837 písm. l) OZ stanoví, že okamžitým dodáním zaniká právo na 14denní odstoupení od smlouvy bez udání důvodu.',
      },
      clauses: [
        {
          num: '6.1',
          text: 'V souladu s ustanovením § 1837 písm. l) občanského zákoníku kupující – spotřebitel nemá právo odstoupit od smlouvy o dodání digitálního obsahu, pokud nebyl dodán na hmotném nosiči a byl dodán s předchozím výslovným souhlasem spotřebitele před uplynutím lhůty pro odstoupení od smlouvy a prodávající před uzavřením smlouvy sdělila spotřebiteli, že v takovém případě nemá právo na odstoupení od smlouvy.',
        },
        {
          num: '6.2',
          text: 'Odesláním objednávky a zaškrtnutím příslušného souhlasu v objednávkovém formuláři kupující výslovně souhlasí se započetím plnění (zpřístupněním digitálního obsahu) před uplynutím 14denní zákonné lhůty pro odstoupení od smlouvy a bere na vědomí, že tímto krokem jeho právo na odstoupení od smlouvy bez udání důvodu zaniká.',
        },
      ],
    },
    {
      id: 'clanek-7',
      num: '07',
      roman: 'Článek VII',
      title: 'Práva z vadného plnění (reklamace)',
      subtitle: 'Postup při nefunkčnosti odkazů či technické závadě',
      clauses: [
        {
          num: '7.1',
          text: 'Práva a povinnosti stran ohledně práv z vadného plnění se řídí příslušnými právními předpisy (zejména § 1914 až 1925, § 2099 až 2117 a § 2389a až 2389s občanského zákoníku a zákonem č. 634/1992 Sb., o ochraně spotřebitele).',
        },
        {
          num: '7.2',
          text: 'Prodávající odpovídá kupujícímu za to, že digitální obsah při zpřístupnění odpovídá ujednanému popisu, je funkční a bez vad.',
        },
        {
          num: '7.3',
          text: 'V případě technického problému, nefunkčního odkazu nebo chyby v souborech uplatní kupující reklamaci e-mailem na adresu cernikova.dom@gmail.com s popisem vady.',
        },
        {
          num: '7.4',
          text: 'Prodávající rozhodne o reklamaci bezodkladně, nejpozději do 30 kalendářních dnů od jejího uplatnění. V případě oprávněné reklamace prodávající zajistí nápravu bez zbytečného odkladu (např. dodáním nového funkčního odkazu).',
        },
      ],
    },
    {
      id: 'clanek-8',
      num: '08',
      roman: 'Článek VIII',
      title: 'Autorská práva a licence',
      subtitle: 'Ochrana duševního vlastnictví a povolený rozsah užití',
      clauses: [
        {
          num: '8.1',
          text: 'Veškerý obsah balíčku Šablony pro autory (včetně struktury, textových vzorů, Notion šablon, tabulek a grafických šablon v Canvě) je autorským dílem Dominiky Černíkové a podléhá ochraně podle zákona č. 121/2000 Sb., autorského zákona.',
        },
        {
          num: '8.2',
          text: 'Zakoupením produktu získává kupující nevýhradní, nepřenosnou licenci k osobnímu a internímu užití pro účely přípravy své vlastní autorské knihy nebo kampaně.',
        },
        {
          num: '8.3',
          text: 'Kupující není oprávněn produkt ani jakoukoli jeho část přeprodávat, bezplatně šířit, sdílet s třetími osobami, kopírovat pro komerční účely ani veřejně zpřístupňovat bez předchozího písemného souhlasu prodávající.',
        },
      ],
    },
    {
      id: 'clanek-9',
      num: '09',
      roman: 'Článek IX',
      title: 'Mimosoudní řešení spotřebitelských sporů',
      subtitle: 'Česká obchodní inspekce a evropská platforma ODR',
      clauses: [
        {
          num: '9.1',
          text: 'K mimosoudnímu řešení spotřebitelských sporů z kupní smlouvy je příslušná Česká obchodní inspekce, se sídlem Štěpánská 567/15, 120 00 Praha 2, IČO: 000 20 869, internetová adresa: adr.coi.cz.',
        },
        {
          num: '9.2',
          text: 'Spotřebitel může pro řešení sporů online využít také platformu Evropské komise na adrese ec.europa.eu/consumers/odr.',
        },
        {
          num: '9.3',
          text: 'Evropské spotřebitelské centrum Česká republika, se sídlem Štěpánská 567/15, 120 00 Praha 2, internetová adresa: evropskyspotrebitel.cz je kontaktním místem podle nařízení Evropského parlamentu a Rady (EU) č. 524/2013 o řešení spotřebitelských sporů on-line.',
        },
      ],
    },
    {
      id: 'clanek-10',
      num: '10',
      roman: 'Článek X',
      title: 'Závěrečná ustanovení',
      subtitle: 'Rozhodné právo, jazyk smlouvy a účinnost',
      clauses: [
        {
          num: '10.1',
          text: 'Veškeré právní vztahy vznikající na základě nebo v souvislosti se smlouvou se řídí právním řádem České republiky a budou řešeny příslušnými soudy České republiky.',
        },
        {
          num: '10.2',
          text: 'Smlouva se uzavírá v českém jazyce.',
        },
        {
          num: '10.3',
          text: 'Prodávající je oprávněna tyto obchodní podmínky měnit či doplňovat. Změna se nedotýká smluv uzavřených před účinností nové verze.',
        },
        {
          num: '10.4',
          text: 'Tyto obchodní podmínky jsou platné a účinné od 01.10.2026.',
        },
      ],
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
            <span className="px-3.5 py-1.5 rounded-full bg-[#FAF8F5] text-[#2C2520] font-medium shadow-xs">
              Obchodní podmínky
            </span>
            <button
              onClick={() => {
                if (onNavigate) {
                  onNavigate('/ochrana-osobnich-udaju');
                } else {
                  window.history.pushState({}, '', '/ochrana-osobnich-udaju');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }
              }}
              className="px-3.5 py-1.5 rounded-full text-[#8C7B6B] hover:text-[#2C2520] transition-colors cursor-pointer"
            >
              Ochrana osobních údajů (GDPR)
            </button>
          </div>
        </div>

        {/* Hero Header */}
        <header className="mb-10 sm:mb-14">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EDE5D8] rounded-full text-xs font-sans-jost text-[#8C7B6B] font-medium">
              <Scale className="w-3.5 h-3.5" />
              <span>Platné a účinné od 01.10.2026</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EDE5D8]/50 rounded-full text-xs font-sans-jost text-[#8C7B6B]">
              <Clock className="w-3.5 h-3.5" />
              <span>Doba čtení cca 6 min</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#2C2520] font-serif-cormorant leading-[1.12] mb-4">
            {terms.title}
          </h1>

          <p className="font-sans-jost text-base sm:text-lg md:text-xl text-[#8C7B6B] leading-relaxed max-w-3xl mb-6">
            {terms.subtitle}
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
              title="Vytisknout podmínky"
            >
              <Printer className="w-3.5 h-3.5 mr-1.5" />
              <span>Vytisknout</span>
            </button>
          </div>
        </header>

        {/* Quick Highlights Grid */}
        <div className="bg-[#FAF8F5] border border-[#D9C9B8] rounded-2xl p-6 sm:p-7 mb-12 shadow-[0_4px_20px_rgba(44,37,32,0.02)]">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-4 h-4 text-[#8C7B6B]" />
            <h2 className="font-sans-jost text-xs uppercase tracking-wider text-[#8C7B6B] font-medium">
              Klíčové body v přehledné lidské řeči
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans-jost text-[#2C2520]/85 leading-relaxed">
            <div className="p-3.5 bg-white/70 rounded-xl border border-[#D9C9B8]/50">
              <span className="font-medium text-[#2C2520] block mb-1">
                Prodávající & kontakt
              </span>
              Dominika Černíková, IČO 05603005, Kladno. Neplátce DPH. Všechny dotazy pište na{' '}
              <a
                href="mailto:cernikova.dom@gmail.com"
                className="underline hover:text-[#8C7B6B]"
              >
                cernikova.dom@gmail.com
              </a>
            </div>
            <div className="p-3.5 bg-white/70 rounded-xl border border-[#D9C9B8]/50">
              <span className="font-medium text-[#2C2520] block mb-1">
                Dodání digitálního obsahu
              </span>
              Přístupové odkazy k souborům v Notionu, Google Tabulkách a Canvě dorazí na váš e-mail ihned po zaplacení.
            </div>
            <div className="p-3.5 bg-white/70 rounded-xl border border-[#D9C9B8]/50">
              <span className="font-medium text-[#2C2520] block mb-1">
                14denní lhůta pro odstoupení
              </span>
              Okamžitým zpřístupněním digitálního obsahu po zaplacení zaniká právo na odstoupení bez udání důvodu (§ 1837 písm. l OZ).
            </div>
            <div className="p-3.5 bg-white/70 rounded-xl border border-[#D9C9B8]/50">
              <span className="font-medium text-[#2C2520] block mb-1">
                Autorská licence
              </span>
              Obsah je určen výhradně pro vaše osobní a interní použití při přípravě vlastní knihy. Přeprodej či sdílení je zakázáno.
            </div>
          </div>
        </div>

        {/* Interactive Quick Table of Contents */}
        <div className="mb-14 p-5 sm:p-6 bg-[#EDE5D8]/40 border border-[#D9C9B8]/60 rounded-2xl">
          <div className="flex items-center gap-2 mb-3 text-xs font-sans-jost uppercase tracking-wider text-[#8C7B6B] font-medium">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Rychlá navigace články</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {sections.map((s) => (
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

        {/* Main Sections List with Elevated Typography and Cards */}
        <div className="space-y-10 sm:space-y-12">
          {sections.map((sec) => (
            <section
              key={sec.id}
              id={sec.id}
              className="scroll-mt-28 bg-white/60 border border-[#D9C9B8]/70 rounded-2xl p-6 sm:p-8 md:p-9 shadow-[0_4px_24px_rgba(44,37,32,0.02)] transition-shadow hover:shadow-[0_6px_30px_rgba(44,37,32,0.04)]"
            >
              {/* Section Header */}
              <div className="mb-6 pb-4 border-b border-[#D9C9B8]/50">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EDE5D8] text-[11px] font-sans-jost font-medium text-[#54463A]">
                    {sec.num}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#8C7B6B] font-sans-jost font-medium">
                    {sec.roman}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-light font-serif-cormorant text-[#2C2520] leading-snug">
                  {sec.title}
                </h2>
                {sec.subtitle && (
                  <p className="font-sans-jost text-xs sm:text-sm text-[#8C7B6B] mt-1">
                    {sec.subtitle}
                  </p>
                )}
              </div>

              {/* Special callout highlight for article if present */}
              {sec.highlight && (
                <div className="mb-6 p-4 sm:p-5 bg-[#FAF8F5] border-l-3 border-[#8C7B6B] rounded-r-xl">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-[#8C7B6B] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-sans-jost text-xs font-semibold uppercase tracking-wider text-[#2C2520] mb-1">
                        {sec.highlight.title}
                      </h3>
                      <p className="font-sans-jost text-xs sm:text-sm text-[#2C2520]/80 leading-relaxed">
                        {sec.highlight.text}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Clauses with styled badges and comfortable leading */}
              <div className="space-y-4 font-sans-jost text-sm sm:text-base text-[#2C2520]/85 leading-[1.8]">
                {sec.clauses.map((clause, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-3 sm:gap-4">
                    <span className="inline-flex items-center justify-center min-w-[28px] h-6 rounded-md bg-[#EDE5D8]/70 text-[11px] font-medium text-[#54463A] shrink-0 mt-0.5">
                      {clause.num}
                    </span>
                    <p className="flex-1 leading-relaxed">{clause.text}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
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
                  onNavigate('/ochrana-osobnich-udaju');
                } else {
                  window.history.pushState({}, '', '/ochrana-osobnich-udaju');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }
              }}
              className="inline-flex items-center text-sm font-sans-jost text-[#2C2520] hover:text-[#8C7B6B] underline underline-offset-4 decoration-[#D9C9B8] transition-colors cursor-pointer"
            >
              <span>Zásady ochrany osobních údajů (GDPR)</span>
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
