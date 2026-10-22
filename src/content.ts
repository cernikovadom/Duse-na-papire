/**
 * Centrální konfigurační soubor s veškerým obsahem webu Dominiky Černíkové.
 * Všechny texty, odkazy, ceny a zástupné symboly [placeholder] se spravují zde.
 */

export interface StepItem {
  title: string;
  description: string;
}

export interface ProductItem {
  id: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  price?: string;
  badge?: string;
  badgePosition?: 'left' | 'right';
  status: 'available' | 'coming_soon';
  buttonLabel: string;
  buttonLink?: string; // např. [odkaz na platební stránku] nebo interní trasa
  image?: string;
  imagePlaceholder: string;
  freeDelivery?: {
    endpoint: string;
  };
  faqs?: FaqItem[];
}

export interface SampleChapter {
  number: string;
  title: string;
  bookTitle: string;
  readingTime: string;
  paragraphs: string[];
}

export interface StoryCardItem {
  slug: string;
  title: string;
  excerpt: string;
  readingTime: string;
  badge: string;
  isFree: boolean;
  buyLink?: string;
  content: string[];
}

export interface BlogPostItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  imagePlaceholder: string;
  content: string | string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  isEmailAnswer?: boolean;
  link?: { label: string; href: string };
}

export interface FragmentItem {
  id: string;
  icon: 'forest' | 'book' | 'cup' | 'dog';
  text: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
}

export const siteContent = {
  meta: {
    siteTitle: 'Dominika Černíková | Duše na papíře',
    metaDescription:
      'Dominika Černíková, autorka románu Mléčné zuby duše. Příběhy, které voní po lesích a tichu, a průvodci pro autory, kteří chtějí tvořit bez tlaku.',
    logoText: 'Duše na papíře',
    tagline: 'Klidná tvorba a vnitřní pořádek v hlučném světě.',
    author: 'Dominika Černíková',
    email: 'cernikova.dom@gmail.com',
    instagramHandle: '@mlecnezubyduse',
    instagramUrl: 'https://www.instagram.com/mlecnezubyduse/',
    copyright: '© 2026 Dominika Černíková',
  },

  navigation: [
    { label: 'Kniha', href: '#kniha' },
    { label: 'Pro tvůrce', href: '#pro-tvrce' },
    { label: 'Povídání', href: '#povidani' },
    { label: 'O mně', href: '#o-mne' },
    { label: 'Odběr', href: '#kontakt' },
  ],

  // 1. HERO
  hero: {
    eyebrow: 'Autorka knihy Mléčné zuby duše',
    title: 'Dominika Černíková',
    subtitle: 'Klidná tvorba a vnitřní pořádek v hlučném světě.',
    text: 'Píšu příběhy, které voní po lesích a tichu, a sdílím cesty k tomu, jak tvořit a žít bez neustálého tlaku na výkon. Jsem mámou, introvertkou a autorkou knihy Mléčné zuby duše.',
    primaryButton: 'Poznat knihu',
    secondaryButton: 'Přečíst první kapitolu zdarma',
    secondaryButtonLink: '/prvni-kapitola',
    video: {
      webm: '/video/les.webm',
      mp4: '/video/les.mp4',
      poster: '/images/les-poster.jpg',
      description: 'Hluboký klidný les, ranní světlo prosvítá mezi stromy.',
    },
  },

  // 2. BOOK SECTION
  book: {
    eyebrow: 'Román',
    title: 'Mléčné zuby duše',
    tagline:
      'Román o ztrátě, návratu domů a o tom, co nám rodiče stihnou předat, i když už tu nejsou.',
    blurbParagraph1:
      'Když Anna po smrti matky odjíždí do staré chalupy na Šumavě, chce jen vyklidit dům a co nejrychleji zavřít jednu kapitolu svého života. Mezi věcmi ale najde sedmnáct dopisů, které jí matka napsala. Každý z nich obsahuje jednu lekci do života.',
    blurbParagraph2:
      'Dopis po dopisu se před ní otevírá žena, kterou nikdy pořádně neznala, a s ní i otázky, kterým se celý život vyhýbala. Mléčné zuby duše jsou tichým příběhem o smutku, odpuštění a o tom, že některé věci v nás musí vypadnout, aby mohly vyrůst nové.',
    metadata: 'Román · Vychází v dubnu 2027',
    primaryButton: 'Předobjednat knihu',
    primaryButtonLink: 'https://bit.ly/KupMlecneZubyDuse',
    secondaryButton: 'První kapitola zdarma',
    secondaryButtonLink: '/prvni-kapitola',
    quote: '',
    coverPlaceholder: '[Obálka knihy]',
    coverImage: '/images/Mlecne_600x840px.png',
    sampleChapter: {
      number: 'Kapitola 1',
      title: 'Měj oči otevřené',
      bookTitle: 'Mléčné zuby duše',
      readingTime: 'cca 8–10 min čtení',
      paragraphs: [
        'Prach v domě voněl jako staré vzpomínky, které se někdo pokusil silou nacpat do zavařovací sklenice a pevně utáhnout víčko. Byl začátek ledna. Venku na Šumavě mrzlo, až to v kmenech starých smrků zlověstně praskalo, a vzduch při každém nádechu řezal v plicích. Od chvíle, co jsme mámu v říjnu pohřbili, sem nikdo nevkročil. Topení bylo vypnuté a kuchyně zůstala zamrzlá v tom podzimním dni, kdy mámu sanitka odvezla naposledy.',
        '„Mami? Maminko? Jsi tady?“',
        'Ta slova mi zněla v hlavě, i když jsem je nevyslovila nahlas. Racionálně jsem věděla, že tu není. Přesto bych v tu chvíli přísahala, že jsem ji právě před vteřinou koutkem oka viděla zajít za roh kuchyně. Jako by tam na mě čekala s tím svým typickým úsměvem, na sobě ten ošoupaný vlněný svetr, a v rukou nesla konvici s horkým, jasmínovým čajem k našemu pravidelnému odpolednímu tlachání. Dokonce jsem měla pocit, že ve ztuhlém, mrazivém vzduchu cítím vůni domácího štrůdlu se skořicí. Měla jsem nutkání tam nakouknout. Jen pro jistotu.',
        'Od jejího odchodu uplynuly už dlouhé tři měsíce a já se až teď donutila otočit klíčem v zámku. V tomhle domě jsem vyrůstala. Prožila jsem tu s ní ty nejkrásnější, ale i nejodřenější chvíle svého života. A teď tu stojím uprostřed vymrzlé kuchyně v péřové bundě, od pusy mi jde pára a nějak nevím, co mám vlastně dělat. Příbuzní mě neustále nabádali, ať už sem jedu všechno zabalit do krabic. Prý dům zbytečně chátrá a vzpomínky mě jen táhnou ke dnu. Proč ale nemůže všechno zůstat tak, jak to je?',
        'Domem se táhlo těžké, prázdné ticho, které najednou přerušilo tupé bouchání a tlumené zaklení z vedlejší místnosti. „Anno? Anni, prosím tě, pojď sem!“ ozval se z pracovny podrážděný ženský hlas.',
        '„Už jdu!“ odpověděla jsem a pokusila se rozhýbat nohy, které mi do podlahy vrostly nejen mrazem, ale i strachem z toho, co v matčiných věcech najdu. Když jsem dorazila do pracovny, naskytl se mi pohled, který mě donutil se lehce pousmát. Jana, nejlepší kamarádka mojí mámy a moje vrba už od dětství, tam klečela ve svém vlněném kabátě. V ruce svírala mosazné těžítko a evidentně zvažovala, že s ním roztříská zamčenou přihrádku u matčina starého psacího stolu. Vzduch v pokoji byl těžký a nehybný, jako by se usadil v tu vteřinu, kdy máma naposledy vydechla, a od té doby se nepohnul.',
        'Moje boty zanechávaly při každém kroku v šedavém nánosu na podlaze ostré, nepatřičné stopy. Ten prach pro mě v tu chvíli nebyl jen obyčejnou špínou, byl to popel času, který trpělivě potahoval všechno, co mělo zůstat zapomenuto.',
        '„Nevíš náhodou, kde jsou od tohohle zatracenýho šuplíku klíče?“ zafuněla Jana a odhodila pramen vlasů, který jí padal do očí. „Zkoušela jsem to vypáčit sponkou, jak to dělají ve filmech, ale očividně jsem levá.“',
        '„Jani, prosím tě, nenič jí ten stůl,“ povzdechla jsem si. „Počkej chvilku.“ Zajela jsem zmrzlými prsty pod šálu a začala si kolem krku obtáčet jemný zlatý řetízek. Na jeho konci visel malý, starožitný klíček, který mi matka dala k mým loňským narozeninám se slovy, ať ho dobře hlídám.',
        '„Myslíš, že to může být on?“ zeptala se Jana a s nadějí v hlase těžítko odložila.',
        '„Zkusíme to,“ řekla jsem. Pomalu, s posvátnou úctou, jsem klíček vložila do zámku starého šuplíku. Bála jsem se, že se zasekne, ale ladně zapadl do otvoru a s tichým, ostrým cvaknutím se otočil.',
        'S Janou jsme nad pootevřeným šuplíkem obě zamrzly. Ani jedna z nás se neodvážila ho otevřít. Janě, přes veškerou její zvědavost, přišlo hloupé prohledávat cizí soukromí, a já... já se v životě necítila tak rozpolceně jako teď. Měla jsem pocit, jako by mi pod žebry splašeně tloukl pták. Co když je tam jen hromada starých složenek? Ale co když tam je něco, co úplně převrátí to, co jsem si o matce dosud myslela? A byla by to nakonec zas taková tragédie? blesklo mi hlavou.',
        'Sebrala jsem zbytky odvahy a šuplík úplně vytáhla. Vzduch v místnosti se pohnul. Do jediného pruhu odpoledního slunce, který se prosekal skrz škvíru v okenici, vystřelil mrak zlatavých částeček. Na vteřinu jsem zatajila dech. Žádné tajné dokumenty o adopci ani dluhy tam nebyly. Uprostřed ležela jen stará, otlučená krabice od bot, pečlivě převázaná režnou šňůrkou.',
        'Neváhala jsem. Vytáhla jsem ji na stůl, rozvázala uzel a nahlédla dovnitř. První vjem byl ostrý – závan zatuchliny a papírového prachu. Ale hned vzápětí, když jsem uvolnila vzduch schovaný pod víkem, jsem ucítila sladký, hluboký tón, připomínající oxidovanou vanilku a hořké mandle. Byla to vůně rozpadajícího se ligninu v listech papíru, něčeho, co kdysi bylo živým stromem a teď se stalo schránkou pro mámin hlas. Krabice byla plná obálek různých velikostí a barev. Některé byly ušmudlané a zažloutlé, jiné naopak hladké a čisté. Napočítala jsem jich sedmnáct. Zírala jsem na ten balíček a hlavou mi vířily otázky. Proč je zamkla zrovna do stolu? Proč mi dala klíček měsíce před svou smrtí a nic mi o tom neřekla?',
        '„Budeš to teď otevírat, nebo se na to budeme celou zimu jen koukat?“ přerušila ticho Jana. Přešlapovala z nohy na nohu, aby se zahřála, a zvědavost jí koukala z očí. Pozvedla jsem k ní zrak, ale vlastně jsem ji neviděla. Ve skutečnosti se uvnitř mé hlavy odehrával divoký souboj. Ruce se mi třásly, když jsem téměř nevědomky sáhla po první obálce. Z rohu na mě svítila pečlivě napsaná jednička.',
        'Obálka vypadala staře. Napovídaly tomu odřené rohy a vybledlá starorůžová barva, která kdysi musela být zářivá. Byla převázaná jemnou stužkou, jejíž konce se už úplně roztřepily. Zatáhla jsem za ni a vytáhla přeložený papír. Rozpoznala jsem matčin typický, trochu rozevlátý rukopis. Ale tenhle se zdál být psaný v nějakém zvláštním spěchu nebo vyčerpání.',
        '„Milá Aničko,\npři zvuku kapajícího kohoutku sedím v koupelně na zemi a snažím se utřídit si myšlenky. Cítím, jak mě studené dlaždičky pálí do stehen. Koupelnou se line ta nezaměnitelná vůně špinavých věcí z prvních dnů s novým miminkem. Je ticho. Z druhé místnosti se ozývá jen Tvoje pomalé a klidné oddechování. Neskutečně mě uklidňuje, ale zároveň mě drží v křečovitém napětí – čekám, kdy ta chvíle klidu skončí a já, přes veškerou šílenou únavu, budu muset znovu hrdinsky naskočit do role matky, která ví, co dělá. Ano, v té druhé místnosti jsi Ty, Anni. Lásko mého života. Dokud jsi mi do něj nevtrhla, netušila jsem, co to život vůbec je. Vzala jsi mi tolik! Svobodu, spánek, nervy, čisté oblečení a obě volné ruce. Ale dala jsi mi všechno ostatní.“',
        'V tu chvíli jsem pochopila, že tyhle obálky přede mnou nejsou jen sentimentální vzpomínky. Jsou záchranným člunem. A já do něj právě nastoupila.',
      ],
    },
  },

  // 3. BOOK JOURNEY (timeline)
  timeline: {
    eyebrow: 'Cesta knihy',
    title: 'Od rukopisu k vašim rukám',
    currentStepIndex: 2, // Krok 3 ("Redakce a korektura") je aktuální fáze (0-indexováno: 0, 1, 2)
    steps: [
      {
        title: 'Psaní rukopisu',
        description: 'Příběh, který ve mně dlouho zrál. Až jednoho dne chtěl ven.',
      },
      {
        title: 'Kampaň na podporu vydání knihy',
        description: 'Na Pointě jsem díky 170 podporovatelům vybrala 124 785 Kč, víc, než byl cíl.',
      },
      {
        title: 'Redakce a korektura',
        description: 'Text prochází pečlivýma očima, aby každé slovo sedělo na svém místě.',
      },
      {
        title: 'Grafika a sazba',
        description: 'Kniha dostává svou podobu: obálku, písmo i ticho mezi řádky.',
      },
      {
        title: 'Tisk',
        description: 'Z textu se stává kniha, kterou vezmete do ruky.',
      },
      {
        title: 'Duben 2027',
        description: 'Kniha vychází.',
      },
    ] as StepItem[],
    thankYou:
      'Děkuji všem, kteří knize pomohli na svět. Bez vás by zůstala jen v šuplíku.',
  },

  // 4. PRO TVŮRCE (shop)
  shop: {
    eyebrow: 'Pro tvůrce',
    title: 'Co jsem se naučila, předávám dál',
    intro:
      'Sdílím, co jsem se naučila na vlastní cestě, aby to ti další měli lehčí. Žádné zaručené recepty na úspěch, jen poctivé zkušenosti, postupy a nástroje, které mi opravdu pomohly.',
    products: [
      {
        id: 'kampan-pointa',
        title: 'Jak zvládnout předprodej knihy',
        shortDescription:
          'Praktický průvodce přípravou a vedením kampaně na podporu vydání knihy. Vše, co bych chtěla vědět, než jsem začala.',
        longDescription:
          'Moje kampaň vybrala 124 785 Kč od 170 podporovatelů a přípravu jsem začala zhruba dva a půl měsíce před spuštěním. V průvodci najdeš, jak si kampaň naplánovat, co připravit předem, jak mluvit o knize bez pocitu, že se vnucuješ, a jak udržet energii po celý měsíc kampaně. Píšu ho pro autory, kteří chtějí vydat knihu klidně a s rozmyslem.',
        price: 'Zdarma',
        badge: 'Zdarma',
        badgePosition: 'left',
        status: 'available',
        buttonLabel: 'Stáhnout',
        buttonLink: 'https://form.simpleshop.cz/ODoJP/buy/',
        image: '/images/Untitled Design.jpg',
        imagePlaceholder: 'Průvodce: Jak zvládnout předprodej knihy',
      },
      {
        id: 'sablony-autori',
        title: 'Šablony pro autory',
        shortDescription:
          'Všechno, co jsem při kampani na podporu vydání svého románu psala od nuly. Hotové, vyzkoušené a připravené k úpravě do tvého hlasu.',
        longDescription:
          'Všechno, co jsem při kampani na podporu vydání svého románu psala od nuly. Hotové, vyzkoušené a připravené k úpravě do tvého hlasu.',
        price: '349 Kč',
        status: 'available',
        buttonLabel: 'Chci šablony',
        buttonLink: '/sablony-pro-autory',
        image: '/images/author_templates_mockup_1792403344280.jpg',
        imagePlaceholder: 'Šablony pro autory',
      },
      {
        id: 'tvurci-tym',
        title: 'Můj tvůrčí tým: Notion, Claude a Canva',
        shortDescription:
          'Jak si nastavit nástroje, které ti pomůžou s psaním, plánováním i propagací. Abys měl/a víc času na tvoření.',
        longDescription:
          'Systém pro autory, který ti nahradí asistentku, textařku i grafičku.',
        price: '449 Kč',
        status: 'available',
        buttonLabel: 'Chci nástroje',
        buttonLink: '/tvurci-tym',
        image: '/images/tvurci-tym.webp',
        imagePlaceholder: 'Můj tvůrčí tým: Notion, Claude a Canva',
      },
    ] as ProductItem[],

    whoIsItForTitle: 'Pro koho to je',
    whoIsItForBullets: [
      'Pro autory, kteří přemýšlejí o vlastním vydání knihy a nevědí, kde začít.',
      'Pro ty, kterým je propagace nepříjemná a hledají jemnější cestu.',
      'Pro všechny, kdo chtějí tvořit s plánem, ale bez tlaku na výkon.',
    ],

    faqTitle: 'Časté otázky',
    faqs: [
      {
        question: 'Opravdu je zdarma?',
        answer:
          'Ano, průvodce je zcela zdarma. Stačí zadat e-mail, abych ti ho mohla poslat. Hotové šablony e-mailů, plán kampaně a další nástroje najdeš v placeném balíčku Šablony pro autory.',
        link: { label: 'Šablony pro autory', href: '/sablony-pro-autory' },
      },
      {
        question: 'Jak produkt dostanu?',
        answer:
          'Po zadání e-mailu ti průvodce přijde do schránky. Pokud ho nevidíš, mrkni do hromadné pošty nebo spamu.',
      },
      {
        question: 'Je to vhodné i pro začátečníky?',
        answer:
          'Ano. Průvodce píšu tak, aby mu rozuměl i člověk, který nikdy žádnou kampaň nevedl.',
      },
      {
        question: 'Funguje průvodce i pro jinou platformu než Pointa?',
        answer:
          'Většina principů platí obecně, konkrétní postupy ale popisuji na Pointě, kde jsem kampaň vedla.',
      },
      {
        question: 'Co když budu mít doplňující otázky?',
        answer: 'Napiš mi na cernikova.dom@gmail.com, ráda odpovím.',
        isEmailAnswer: true,
      },
    ] as FaqItem[],

    templatesDetail: {
      headline: 'Šablony pro autory',
      subheadline:
        'Všechno, co jsem při kampani na podporu vydání svého románu psala od nuly. Hotové, vyzkoušené a připravené k úpravě do tvého hlasu.',
      price: '349 Kč',
      buttonText: 'Chci šablony',
      checkoutLink: 'https://form.simpleshop.cz/ODq6j/buy/',
      productUrl: 'https://form.simpleshop.cz/ODq6j/',
      sectionTitle: 'Co v balíčku najdeš',
      chapters: [
        {
          code: 'A',
          title: 'A · Plánování',
          items: [
            {
              icon: 'CheckSquare',
              title: 'Checklist',
              description: 'co kdy udělat od 3 měsíců před spuštěním po konec kampaně',
            },
            {
              icon: 'Calculator',
              title: 'Kalkulačka cílové částky v Google Tabulkách',
              description: 'spočítá cíl, poplatky, náklady na výtisk i potřebný počet podporovatelů',
            },
            {
              icon: 'Award',
              title: 'Odměnové stupně',
              description: 'se vzory cen a vysvětlením, jak to je s dary a partnerstvím firem',
            },
            {
              icon: 'Calendar',
              title: 'Plán kampaně',
              description: 'den po dni na 30 dní',
            },
            {
              icon: 'FileText',
              title: 'Text stránky kampaně',
              description: 'šablona celé stránky a osnova videa',
            },
            {
              icon: 'HelpCircle',
              title: 'Časté otázky podporovatelů',
              description: 'odpovědi na časté otázky podporovatelů',
            },
            {
              icon: 'AlertTriangle',
              title: 'Krizový plán',
              description: 'co dělat, když kampaň stojí',
            },
          ],
        },
        {
          code: 'B',
          title: 'B · Oslovování',
          items: [
            {
              icon: 'Mail',
              title: 'E-maily institucím a firmám',
              description: 'v 5 variantách + připomínka',
            },
            {
              icon: 'MessageSquare',
              title: '10 osobních zpráv',
              description: 'známým, bookstagramerům, influencerům, kavárnám, knihkupectvím, podcastům',
            },
            {
              icon: 'Newspaper',
              title: 'Tip pro média, tisková zpráva',
              description: 'a autorský medailonek ve 3 délkách',
            },
          ],
        },
        {
          code: 'C',
          title: 'C · Obsah na sítě',
          items: [
            {
              icon: 'Sparkles',
              title: '60 nápadů na příspěvky',
              description: 'podle fází kampaně',
            },
            {
              icon: 'PenTool',
              title: '20 hotových popisků',
              description: 's výzvou k akci',
            },
            {
              icon: 'Video',
              title: 'Scénáře 10 mluvících videí',
              description: 'úvodní háček, osnova i výzva k akci',
            },
            {
              icon: 'Camera',
              title: 'Instagram v kostce',
              description: 'profil, bio, zvýrazněné stories, hashtagy a týdenní rytmus',
            },
          ],
        },
        {
          code: 'D',
          title: 'D · Newsletter',
          items: [
            {
              icon: 'Send',
              title: 'Série 6 e-mailů',
              description: 'od uvítání po poděkování',
            },
          ],
        },
        {
          code: 'E',
          title: 'E · Akce a po kampani',
          items: [
            {
              icon: 'BookOpen',
              title: 'Autorské čtení',
              description: 'checklist, pozvánka a scénář večera',
            },
            {
              icon: 'Trophy',
              title: 'Giveaway',
              description: 's pravidly soutěže',
            },
            {
              icon: 'Heart',
              title: 'Zprávy podporovatelům',
              description: 'zprávy podporovatelům po kampani',
            },
          ],
        },
      ],
      toolsSection: {
        title: 'Nástroje',
        cards: [
          {
            title: 'Průvodce kampaní',
            label: 'Dokument / PDF',
            text: 'Kompletní postup od přípravy po rozesílku odměn. Přes 40 šablon e-mailů a zpráv, plán kampaně na 30 dní, 60 nápadů na příspěvky, scénáře videí, text stránky kampaně, odpovědi na nejčastější otázky a krizový plán pro chvíle, kdy se sbírka zasekne.',
            icon: 'FileText',
          },
          {
            title: 'Pracovní šablona v Notionu',
            label: 'Notion · zdarma',
            text: 'Obsahový kalendář se 78 úkoly. Zadáš jen datum startu kampaně a všechna data se dopočítají sama. Dále evidence oslovených, databáze recenzentů a bookstagramerů, přehled podporovatelů a rozesílky odměn, týdenní přehled stavu sbírky s grafem a oddíl pro psaní knihy (postavy, místa, kapitoly, časová osa).',
            icon: 'Calendar',
          },
          {
            title: 'Kalkulačka cílové částky',
            label: 'Google Tabulky · zdarma',
            text: 'Zjistí, kolik potřebuješ vybrat, aby ti po odečtení provize platformy, poplatků za platby a rezervy zbylo na tisk i odměny. Vyplníš jen žlutá políčka a kalkulačka ti spočítá cílovou částku i počet podporovatelů, které potřebuješ.',
            icon: 'Calculator',
          },
          {
            title: 'Canva šablony',
            label: 'Canva · zdarma',
            text: '35 hotových grafik v 5 stylech – 7 témat pro celou kampaň: start, úryvek, milník, odpočet, poděkování, Instagram Story a leták A4. Stačí přepsat text a vložit vlastní fotky.',
            icon: 'Palette',
          },
        ],
        footerNote:
          'Notion, Google Tabulky i Canva šablony fungují v bezplatných verzích. Nepotřebuješ žádné placené předplatné.',
      },
      stylesSection: {
        title: '5 stylů pro různé žánry',
        styles: [
          {
            name: 'Krémová klasika',
            description:
              'klidný literární styl pro prózu, poezii a psychologický román',
          },
          {
            name: 'Vínový archiv',
            description:
              'tmavá, archivní atmosféra pro thrillery, detektivky a historické romány',
          },
          {
            name: 'Galerie',
            description:
              'čistá černobílá mřížka fotek pro současnou prózu a literaturu faktu',
          },
          {
            name: 'Hravá',
            description:
              'ručně psané písmo a kresbičky pro dětské knihy, kuchařky a oddechovky',
          },
          {
            name: 'Scrapbook',
            description:
              'koláž s fotkou a ručním písmem pro young adult, cestopisy a memoáry',
          },
        ],
        footerNote:
          'Každý styl obsahuje všech 7 témat: 5 příspěvků na Instagram 1080×1350 (4:5), Story (1080×1920) a leták A4.',
      },
      whoIsItForTitle: 'Pro koho je',
      whoIsItForList: [
        'Pro autory, kteří chystají kampaň na podporu vydání knihy nebo předprodej',
        'Pro ty, kdo nechtějí začínat od nuly a nemají čas psát desítky e-mailů a příspěvků',
        'Pro introverty, kterým se o vlastní knize nemluví snadno',
      ],
      proofStrip: {
        numbers: [
          { value: '124 785 Kč', label: 'vybraná částka' },
          { value: '170', label: 'podporovatelů' },
          { value: '30 dní', label: 'kampaně na Pointě' },
        ],
        line: 'Tyhle šablony vznikly z mé vlastní kampaně na debutový román Mléčné zuby duše.',
      },
      faqs: [
        {
          question: 'V jaké podobě balíček dostanu?',
          answer:
            'Po zaplacení ti přijde e-mail s odkazem na dokument se všemi šablonami. Z něj se dostaneš i do šablony v Notionu, ke kalkulačce a k šablonám v Canvě.',
        },
        {
          question: 'Potřebuju placený Notion nebo Canvu?',
          answer:
            'Ne. Šablona v Notionu i kalkulačka fungují v bezplatných verzích a Canva šablony upravíš i v bezplatné Canvě.',
        },
        {
          question: 'Hodí se to i pro jinou platformu než Pointa?',
          answer:
            'Ano. Šablony jsou psané obecně, místa specifická pro platformu jsou označená k doplnění.',
        },
        {
          question: 'Jak to souvisí s průvodcem zdarma?',
          answer:
            'Průvodce Jak zvládnout předprodej knihy vysvětluje, proč a co dělat. Šablony ti dají hotové texty a nástroje, jak to udělat.',
        },
      ],
      finalCta: {
        title: 'Ať nemusíš začínat od nuly',
        text: 'Přepiš šablony do svého hlasu a pusť se do kampaně ještě dnes.',
        buttonText: 'Chci šablony za 349 Kč',
        belowText: 'Ještě se rozhoduješ? Stáhni si zdarma průvodce Jak zvládnout předprodej knihy.',
      },
    },

    toolsDetail: {
      headline: 'Můj tvůrčí tým: Notion, Claude a Canva',
      subheadline:
        'Systém pro autory, který ti nahradí asistentku, textařku i grafičku. Vznikl z mých vlastních zkušeností z kampaně na podporu předprodeje knihy.',
      price: '449 Kč',
      buttonText: 'Chci nástroje',
      checkoutLink: 'https://form.simpleshop.cz/a0Ynn/buy/',
      productUrl: 'https://form.simpleshop.cz/a0Ynn/',
      sectionTitle: 'Co v balíčku najdeš',
      items: [
        {
          icon: 'Layers',
          title: 'Průvodce nastavením Notionu, Clauda a Canvy',
          description: 'včetně vzoru pokynů, aby Claude psal tvým stylem',
        },
        {
          icon: 'Link',
          title: 'Propojení Clauda s Notionem a Canvou',
          description: 'aby plánoval příspěvky, psal texty do kalendáře a připravoval grafiku',
        },
        {
          icon: 'MessageSquare',
          title: '48 hotových zadání pro Clauda',
          description:
            'v angličtině s českým vysvětlením: Instagram, newsletter, oslovování institucí a médií, texty o knize, zpětná vazba na rukopis a plánování',
        },
        {
          icon: 'Send',
          title: 'Nastavení newsletteru v MailerLite',
          description: 'od založení účtu po uvítací sérii e-mailů, která běží automaticky',
        },
        {
          icon: 'Calendar',
          title: 'Týdenní rytmus na 3–4 hodiny',
          description: 'a plán, jak systém upravit pro jednotlivé fáze knihy, od psaní po čas po vydání',
        },
        {
          icon: 'TrendingUp',
          title: 'Sběr statistik bez ručního přepisování',
          description: 'a postup, jak zjistit, co čtenáře baví',
        },
        {
          icon: 'HelpCircle',
          title: 'Praktické kapitoly',
          description:
            'práce z mobilu, kdy se vyplatí platit za nástroje, soukromí a autorská práva u AI, řešení častých problémů a slovníček',
        },
        {
          icon: 'BookOpen',
          title: 'Hotová autorská základna v Notionu',
          description:
            'domovská stránka s automaticky se aktualizujícím přehledem, obsahový kalendář s grafy, nápady, kontakty, měsíční přehled, kapitoly a postavy a knihovna promptů',
        },
      ],
      whoIsItForTitle: 'Pro koho je',
      whoIsItForList: [
        'Pro autory, kteří všechno dělají sami a chybí jim asistentka, textařka i grafička',
        'Pro ty, kdo chtějí mít víc času na psaní a míň na administrativu a propagaci',
        'Pro autory, kteří si chtějí nastavit jednoduchý systém s Notionem, Claudem a Canvou',
      ],
      proofStrip: {
        numbers: [
          { value: '124 785 Kč', label: 'vybraná částka' },
          { value: '170', label: 'podporovatelů' },
          { value: '30 dní', label: 'kampaně na Pointě' },
        ],
        line: 'Tenhle systém vznikl z mé vlastní kampaně na debutový román Mléčné zuby duše.',
      },
      faqs: [
        {
          question: 'V jaké podobě balíček dostanu?',
          answer:
            'Po zaplacení ti přijde e-mail s odkazem na dokument s průvodcem a na hotovou autorskou základnu v Notionu. Pokud ho nevidíš, mrkni do hromadné pošty nebo spamu.',
        },
        {
          question: 'Musím umět anglicky?',
          answer:
            'Zadání pro Clauda jsou v angličtině, ke každému z nich ale najdeš české vysvětlení.',
        },
        {
          question: 'Jak to souvisí s průvodcem zdarma a šablonami?',
          answer:
            'Průvodce Jak zvládnout předprodej knihy vysvětluje, proč a co dělat. Šablony pro autory dají hotové texty a podklady. Tenhle balíček ukazuje, jak si nastavit nástroje, které ti s tím pomůžou.',
        },
        {
          question: 'Co když budu mít doplňující otázky?',
          answer: 'Napiš mi na cernikova.dom@gmail.com, ráda odpovím.',
          isEmailAnswer: true,
        },
      ],
      finalCta: {
        title: 'Ať máš tvůrčí tým po ruce',
        text: 'Nastav si nástroje, které ti uberou práci, a získej víc času na psaní.',
        buttonText: 'Chci nástroje za 449 Kč',
        belowText: 'Ještě se rozhoduješ? Stáhni si zdarma průvodce Jak zvládnout předprodej knihy.',
      },
    },
  },

  // 5. POVÍDKY
  shortStories: {
    eyebrow: 'Povídky',
    title: 'Příběhy na jeden šálek čaje',
    intro:
      'Krátké literární povídky, které se dají přečíst u jednoho šálku čaje. Realistické, tiché a lidské, stejně jako román. Jednu si můžete přečíst zdarma, další jsou k dispozici za malý příspěvek.',
    cards: [
      {
        slug: 'povidka-zdarma',
        title: '[Název povídky]',
        excerpt: '[Úryvek, 1–2 věty]',
        readingTime: '[X min čtení]',
        badge: 'Zdarma',
        isFree: true,
        content: [
          '[Text povídky bude doplněn]',
        ],
      },
      {
        slug: 'placena-povidka-1',
        title: '[Název povídky]',
        excerpt: '[Úryvek, 1–2 věty]',
        readingTime: '[X min čtení]',
        badge: '[XX Kč]',
        isFree: false,
        buyLink: '[odkaz na platební stránku]',
        content: [
          '[Ukázka povídky]',
        ],
      },
      {
        slug: 'placena-povidka-2',
        title: '[Název povídky]',
        excerpt: '[Úryvek, 1–2 věty]',
        readingTime: '[X min čtení]',
        badge: '[XX Kč]',
        isFree: false,
        buyLink: '[odkaz na platební stránku]',
        content: [
          '[Ukázka povídky]',
        ],
      },
    ] as StoryCardItem[],

    cycleBox: {
      title: 'Připravuji povídkový cyklus',
      text:
        'Příběhy sousedů z jedné ulice, které se navzájem proplétají. Provází jimi dítě, které poslouchá, co mu dospělí vyprávějí, a v duchu se vydává na místa z jejich příběhů. Přihlaste se k odběru a dám vám vědět, až vyjde první díl.',
      button: 'Chci vědět první',
    },
  },

  // 6. POVÍDÁNÍ (blog)
  blog: {
    eyebrow: 'Povídání',
    title: 'Z tvůrčího zákulisí',
    viewAllLinkText: 'Všechny články',
    posts: [
      {
        slug: 'jak-se-z-rukopisu-stava-kniha',
        title: 'Jak se z rukopisu stává kniha',
        excerpt:
          'Co se děje mezi odesláním textu a chvílí, kdy kniha vyjde. Krok za krokem, bez přikrášlování.',
        date: '[datum]',
        image: '/images/manuscript_to_book_1792403703880.jpg',
        imagePlaceholder: '[Fotografie: Jak se z rukopisu stává kniha]',
        content: `
Dlouho jsem si myslela, že nejtěžší část je dopsat poslední větu. Pak jsem ji dopsala, zavřela notebook a zjistila, že mám v ruce teprve rukopis. Ne knihu. Mezi těmi dvěma věcmi leží cesta, o které se moc nemluví, a tak ji zkusím popsat tak, jak jsem ji prožila já.

1. Text musí odležet
Hned po dopsání jsem byla přesvědčená, že je to buď to nejlepší, co jsem kdy napsala, nebo úplná hrůza. Obojí bylo stejně nespolehlivé. Pomohlo nechat rukopis pár týdnů ležet a vrátit se k němu s odstupem. Najednou jsem viděla věty, které se opakují, scény, které nikam nevedou, a místa, kde postavy říkají nahlas to, co by čtenář měl jen tušit.

2. První čtenáři
Pustit text k někomu jinému bylo jako ukázat deník. Jako první jsem rukopis ukázala tchyni, manželovi a kamarádce. Jejich reakce mi daly odvahu: najednou jsem věděla, že má smysl o vydání zabojovat a nenechat text ležet v šuplíku. Kromě povzbuzení mi dali i cenné rady. Všimli si věcí, které jsem kvůli autorské slepotě přehlížela, a některé jejich postřehy jsem do textu nakonec zapracovala. Naučila jsem se, že nemusím přijmout každou poznámku. Ale když na stejném místě zaváhají dva lidé nezávisle na sobě, je to signál, který se vyplatí brát vážně.

3. Rozhodnutí, jakou cestou jít
Klasické nakladatelství, nebo vlastní cesta? Já jsem zvolila Pointu – platformu, kde kniha vychází díky kampani na podporu vydání. Lákalo mě, že o knize nerozhoduje jen jeden redaktor v jedné kanceláři, ale lidé, kteří ji chtějí číst. Zároveň mě to vyděsilo, protože to znamenalo, že o své knize budu muset mluvit. (O tom víc v článku o kampani.)

4. Kampaň
Od 4. srpna do 3. září jsem měla měsíc na to, abych našla dost lidí, kteří knihu podpoří příspěvkem. Každý příspěvek je zároveň objednávka – kdo přispěje, dostane knihu, jakmile vyjde. Tenhle měsíc byl intenzivnější než leckteré měsíce psaní.

5. Redakce
Tady se z rukopisu začíná stávat kniha doopravdy. Redaktor nečte text jako kamarád, ale jako řemeslník. Ptá se, proč je tahle scéna tady, jestli tahle postava opravdu takhle mluví, jestli čtenář pochopí, co se stalo. Nejvíc mě překvapilo, jak často jsem končila kapitoly stejně: Anna si něco uvědomí, rozhodne se a tečka. Redaktorka mi ukázala, že když každá kapitola skončí ponaučením, čtenář nemá důvod otočit stránku. Kapitola, která skončí nejistotou, táhne dál. Podobně jsem nevědomky opakovala vzorec, kdy Anna něco pochopí a druhý se jí hned otevře. V životě to tak nefunguje a v knize to pak zní spíš jako terapie než jako příběh.

Bolelo škrtat. Některé věty a celé odstavce, na které jsem byla pyšná, musely pryč. A ještě víc mě zaskočilo, když se ukázalo, že se mi v příběhu zamotala časová osa. Dopisy, na kterých celá kniha stojí, si místy odporovaly. Musela jsem si sednout a kapitolu po kapitole rozepsat, v jakém je to měsíci, kolik je Anně let a kde je v tu chvíli máma.

Potěšilo mě, kolik dokáže udělat jediná věta. Postavy díky drobným úpravám dostaly víc hloubky: najednou je vidět, co se skrývá za tím, co říkají. A potěšilo mě i zjištění, že nemusím přijmout všechno. U několika míst jsem si svou verzi obhájila a nechala ji. Pochopila jsem, že redakce není o tom, že vám někdo přepíše knihu. Je to rozhovor, a poslední slovo má autor, pokud se rozhoduje vědomě.

6. Korektura
Korektor hledá to, co už autor nevidí: překlepy, čárky, nejednotné uvozovky, jméno, které se v jedné kapitole píše jinak. Myslela jsem, že svůj text znám nazpaměť. Právě proto v něm chyby nevidím – mozek si je sám opraví.

7. Obálka a sazba
Obálka je první věc, kterou čtenář uvidí, a poslední, kterou autor dokáže posoudit objektivně. U Mléčných zubů duše jsem chtěla, aby bylo cítit ticho šumavské chalupy a něco nedořečeného. První návrh vypadal úplně jinak. Na obálce byla krabice převázaná šňůrkou a za ni zastrčená větvička. Ta krabice měla připomínat místo, kde Anna najde mámin odkaz. Poslala jsem ho grafičce a pak jsem jí ho vracela znovu a znovu. Pokaždé mi něco nesedělo, a tak jsem chtěla posunout barvu, změnit detail nebo přidat něco navíc. Až po několika kolech mi došlo, že problém není v grafičce, problém byl v samotném návrhu. Snažila jsem se zachránit nápad, který jsem vlastně nechtěla.

Tak jsem to celé překopala. Chtěla jsem obálku čistou, se spoustou prázdného prostoru, aby víc mlčela a víc tajila. Uprostřed teď stojí mléčný zub, kdysi rozbitý a znovu slepený zlatými nitkami. Inspirovala mě japonská technika kintsugi. Rozbitá keramika se při ní neopravuje tak, aby to nebylo poznat. Praskliny se naopak vyplní zlatem, takže zůstanou vidět a stanou se součástí příběhu té věci. Přesně o tom je i kniha: o tom, co se v nás zlomí, a o tom, že to můžeme poskládat zpátky. Ne jako nové, ale celé a silnější.

Sazba pak rozhoduje o tom, jak se text čte – velikost písma, okraje, jak začíná nová scéna.

8. Tisk a cesta ke čtenářům
Pak už jen čekání. A pak krabice. Na tenhle okamžik zatím jen čekám. Kniha by měla vyjít na jaře, a já si tu chvíli už teď představuju úplně živě. Žádný kurýr. Pro své knihy si pojedu osobně do sídla Pointy. Tam na mě budou čekat krabice plné výtisků a já je budu jeden po druhém podepisovat. Než ale vezmu do ruky pero, otevřu první krabici a vytáhnu tu první: skutečnou, těžkou, s vůní tiskárny. Vím, že ji nejdřív jen chvíli podržím a nebudu ji otevírat. Pak ji nalistuju někde uprostřed a přečtu si větu, kterou znám nazpaměť. Bude ale vypadat jinak, protože už nebude v souboru v počítači. Bude na papíře, kde ji může přečíst kdokoli.

Možná se rozbrečím. Možná se budu jen smát. Nejspíš obojí.

Knihy se rozesílají těm, kdo kampaň podpořili, a teprve potom míří dál.

Co bych řekla sobě na začátku
Že dopsání rukopisu není konec, ale polovina. Že na téhle cestě budu potřebovat jiné lidi a že je v pořádku si o pomoc říct. A že kniha, která nakonec vznikne, už nebude jen moje, bude patřit i těm, kdo jí pomohli na svět.`,
      },
      {
        slug: 'kampan-ze-ktere-jsem-mela-strach',
        title: 'Kampaň, ze které jsem měla strach',
        excerpt:
          'Proč jsem se bála mluvit o vlastní knize a co mi nakonec pomohlo vydržet celý měsíc.',
        date: '[datum]',
        image: '/images/campaign_courage_notes_1792403705357.jpg',
        imagePlaceholder: '[Fotografie: Kampaň, ze které jsem měla strach]',
        content: `Psát mi nikdy nepřišlo těžké. **Těžké mi přišlo říct nahlas: Napsala jsem knihu a chtěla bych, abyste ji podpořili.** Když jsem se rozhodla vydat **Mléčné zuby duše** přes Pointu, věděla jsem, že bez kampaně to nepůjde. A přesto jsem ji v duchu odkládala, jak to šlo.

## Čeho jsem se bála

Nejvíc toho, že budu otravovat. Že lidi, kteří mě znají, budou mít pocit, že jim podstrkuju něco, o co nestojí. Bála jsem se, že to bude vypadat jako chlubení. A nejvíc ze všeho jsem se bála, že kampaň nevyjde a všichni to uvidí.

*Je to vůbec dost dobré na to, abych o tom mluvila?*

## Co mi pomohlo

Změnit pohled na to, o co vlastně žádám. Nežádala jsem o almužnu. Příspěvek na kampaň není dar, je to objednávka knihy dopředu. Nabízela jsem příběh, do kterého jsem dala roky, a lidé se mohli svobodně rozhodnout, jestli o něj stojí. Ta změna slov mi pomohla víc, než bych čekala.

Plán, abych nemusela každý den vše vymýšlet znovu. Obsah na Instagram jsem si rozvrhla dopředu. Když přišel den, kdy jsem neměla sílu nic vymýšlet, stačilo otevřít plán a udělat jednu věc. Ne deset. Jednu.

Mluvit o příběhu, ne o sobě. Bylo pro mne mnohem snazší vyprávět o ženě, která se po smrti matky vrací na šumavskou chalupu a najde sedmnáct dopisů, než opakovat „kupte si mou knihu“. Lidé reagovali na otázky, na úryvky, na to, co se jich dotklo. Ne na reklamu.

Lidé, kteří sdíleli. Každé sdílení znamenalo, že o knize se dozví někdo, koho bych sama nikdy neoslovila.

Oslovit i ty, které neznám osobně. Psala jsem knihovnám, kulturním organizacím a neziskovkám, jejichž práce se tématu knihy dotýká. Ne všichni odpověděli. Ale ti, kdo ano, mi ukázali, že kniha má smysl i mimo okruh mých blízkých.

Dovolit si špatné dny. Kampaň trvala celý měsíc – od 4. srpna do 3. září. Byly dny, kdy čísla stála, a já měla chuť všechno smazat. Naučila jsem se, že takový den neznamená konec. Znamená jen, že je potřeba si odpočinout a zítra udělat zase jednu věc.

## Jak to dopadlo

Kampaň vyšla. Cíl byl 117 700 Kč a nakonec se vybralo 124 785 Kč, tedy o něco víc, než bylo potřeba. Knihu podpořilo 170 lidí. Ještě v květnu, kdy jsem začínala s přípravami, bych tomu číslu nevěřila. Za každým z těch příspěvků je někdo, kdo si řekl, že tenhle příběh chce číst. Někoho z nich znám celý život, jiné jsem nikdy neviděla.

Poslední den jsem pořád obnovovala stránku kampaně, i když jsem věděla, že se tím nic nezmění. Když kampaň skončila, necítila jsem žádný velký výbuch radosti. Spíš ticho a obrovskou úlevu, jako když po dlouhé cestě konečně položíte těžký batoh. Radost přišla až druhý den ráno, kdy mi došlo, že Mléčné zuby duše opravdu vyjdou.

## Co bych vzkázala těm, kdo se bojí

Strach z toho, že budete otravovat, často znamená, že vám na lidech kolem záleží. To je dobrý základ. Neprodáváte sebe, nabízíte příběh. Příběh, který jste psali s tím nejlepším úmyslem a dali do něj kus své duše. A lidé, pro které ten příběh je, si k němu cestu najdou – pokud jim dáte šanci se o něm dozvědět.`,
      },
      {
        slug: 'psani-mezi-krmenim-a-uspavanim',
        title: 'Psaní mezi krmením a uspáváním',
        excerpt:
          'Jak tvořit, když máte malé dítě a času je málo. A proč to nemusí být dokonalé.',
        date: '[datum]',
        image: '/images/writing_motherhood_cozy_1792403704835.jpg',
        imagePlaceholder: '[Fotografie: Psaní mezi krmením a uspáváním]',
        content: `Představa spisovatelky, která ráno usedne s kávou k psacímu stolu a do oběda napíše kapitolu, mi teď připadá skoro jako pohádka. Moje psaní posledních pár měsíců vypadá jinak: věta v telefonu během krmení, odstavec, když dcera konečně usne, a poznámka na papírku, protože mě nápad napadl uprostřed vaření.

**Čas se nenajde, čas se posbírá.**

Čekala jsem, až budu mít volné odpoledne. To nepřišlo. Pak jsem pochopila, že čas na psaní nedostanu v celku, musím ho posbírat po kouscích. Deset minut tady, dvacet tam. Zní to málo, ale deset minut denně je za měsíc pět hodin.

## Co mi pomáhá

Poznámky v telefonu. Při kojení nebo uspávání mám často jednu ruku volnou a hlavu plnou myšlenek. Píšu si útržky, dialogy, nápady. Ne všechno se hodí, ale mnohé z toho jsem později použila.

Vědět, co budu psát, ještě než začnu. Když mám jen chvilku, nemůžu ji promarnit tím, že budu koukat do prázdné stránky. Přemýšlím během dne, při procházce s kočárkem, při mytí nádobí a ke klávesnici si sedám s hotovou myšlenkou.

Nenavazovat tam, kde jsem skončila, ale tam, kde to jde. Nemusím psát popořadě. Když nemám sílu na těžkou scénu, napíšu tu lehčí. Kniha se pak skládá jako puzzle.

Odpustit si dny, kdy to nejde. Noc s nemocným dítětem, den, kdy nemám ani na sprchu. Tehdy nepíšu a nevyčítám si to. Psaní počká. Dítě ne.

## Proč to nemusí být dokonalé

Dřív jsem měla potřebu, aby každá věta byla hotová hned. Teď vím, že první verze je od toho, aby existovala. Uhlazovat se dá později.

Nedokonalý odstavec napsaný během odpoledního spánku je pořád víc než dokonalý odstavec, který zůstal jen v hlavě.

A ještě jedna věc: mateřství mi psaní nevzalo, jen ho změnilo. Některé věci jsem o vztahu matky a dcery pochopila až ve chvíli, kdy jsem se matkou stala sama.

## Pro všechny, kdo tvoří s malými dětmi

Není to o tom mít čas. Je to o tom nepřestat. Pomalu se taky dojde. Někdy právě pomalu.`,
      },
    ] as BlogPostItem[],
  },

  // 7. O MNĚ
  about: {
    eyebrow: 'O mně',
    title: 'Kdo za tím stojí',
    photo: '/images/autorka.webp',
    photoPlaceholder: '/images/autorka.webp',
    paragraph1:
      'Jmenuji se Dominika a jsem máma, introvertka a autorka projektu Duše na papíře. Dlouho jsem pracovala s čísly a návrhy, než jsem našla svůj opravdový domov v psaní a tvoření.',
    paragraph2:
      'Věřím, že hloubka a citlivost nejsou slabost, ale velký dar. Mým cílem je ukázat, že tvořit a žít se dá i s jemností, v tichu a bez neustálého tlaku na výkon. Píšu příběhy, které v sobě nesou klid přírody, a sdílím, co jsem se na své cestě naučila. Jsem ráda, že jste tady.',
    fragments: [
      {
        id: 'forest',
        icon: 'forest',
        text: 'Nejlíp přemýšlím v lese.',
      },
      {
        id: 'book',
        icon: 'book',
        text: 'Čtu všechno od tichých románů po horory.',
      },
      {
        id: 'cup',
        icon: 'cup',
        text: 'Píšu, když dům na chvíli usne.',
      },
      {
        id: 'dog',
        icon: 'dog',
        text: 'Můj pes je můj nejtrpělivější posluchač.',
      },
    ] as FragmentItem[],
  },

  // 8. NAPSALI O MNĚ
  press: {
    eyebrow: 'Napsali o mně',
    mediaText: 'O kampani na podporu vydání knihy psal Klatovský deník.',
    mediaLink: '[odkaz na článek]',
    testimonials: [
      {
        quote: '[Ohlas čtenáře]',
        name: '[Křestní jméno]',
      },
      {
        quote: '[Ohlas čtenáře]',
        name: '[Křestní jméno]',
      },
      {
        quote: '[Ohlas čtenáře]',
        name: '[Křestní jméno]',
      },
    ] as TestimonialItem[],
  },

  // 9. NEWSLETTER
  newsletter: {
    // MailerLite formuláře – každý ukládá odběratele do vlastní skupiny (spouští svou automatizaci)
    endpoints: {
      'prvni-kapitola':
        'https://assets.mailerlite.com/jsonp/2393780/forms/201844635345094632/subscribe',
      'pruvodce-predprodej':
        'https://assets.mailerlite.com/jsonp/2393780/forms/201475959156639036/subscribe',
    } as Record<string, string>,
    title: 'Zůstaňme v kontaktu',
    text:
      'Přihlaste se k odběru a jako poděkování si vyberte dárek: první kapitolu knihy Mléčné zuby duše, nebo průvodce Jak zvládnout předprodej knihy.',
    giftLabel: 'Vyberte si dárek na uvítanou',
    giftOptions: [
      { id: 'prvni-kapitola', label: 'První kapitola knihy Mléčné zuby duše' },
      { id: 'pruvodce-predprodej', label: 'Průvodce Jak zvládnout předprodej knihy' },
    ],
    nameLabel: 'Jméno',
    emailLabel: 'E-mail',
    consentPrefix: 'Souhlasím se ',
    consentLinkText: 'zpracováním osobních údajů',
    consentSuffix: ' za účelem zasílání newsletteru. Odhlásit se můžete kdykoli.',
    buttonText: 'Přihlásit se',
    successMessage:
      'Děkuji, že jste tady. Váš vybraný dárek vám právě letí do e-mailové schránky.',
    errorMessage: 'Něco se nepovedlo. Zkuste to prosím znovu.',
  },

  // 10. FOOTER
  footer: {
    logo: 'Duše na papíře',
    tagline: 'Klidná tvorba a vnitřní pořádek v hlučném světě.',
    email: 'cernikova.dom@gmail.com',
    instagram: '@mlecnezubyduse',
    instagramUrl: 'https://www.instagram.com/mlecnezubyduse/',
    links: [
      { label: 'Obchodní podmínky', path: '/obchodni-podminky' },
      { label: 'Zásady ochrany osobních údajů', path: '/ochrana-osobnich-udaju' },
      { label: 'Cookies', action: 'open-cookie-settings' },
    ],
    copyright: '© 2026 Dominika Černíková',
  },

  // 11. COOKIE BAR
  cookieBar: {
    text:
      'Používám jen cookies, které jsou potřeba, aby web fungoval, a s vaším souhlasem i ty, které mi pomáhají pochopit, co vás tu zajímá.',
    secondaryButton: 'Jen nezbytné',
    primaryButton: 'Přijmout vše',
  },

  // 13. LEGAL PAGES
  legalPages: {
    terms: {
      title: 'Obchodní podmínky',
      subtitle:
        'Obchodní podmínky pro prodej digitálního obsahu prostřednictvím webu dusenapapire.cz a objednávkového systému SimpleShop. Platné od 01.10.2026.',
      effectiveDate: '01.10.2026',
      body: `Obchodní podmínky pro prodej digitálního obsahu prostřednictvím webu dusenapapire.cz a objednávkového systému SimpleShop. Platné od 01.10.2026.

## 1. Úvodní ustanovení
1. Tyto obchodní podmínky upravují práva a povinnosti mezi prodávající a kupujícím při koupi digitálního obsahu (dále jen „produkt“).
2. **Prodávající:** Dominika Černíková, IČO 05603005, místo podnikání Tylova 1890, 27201 Kladno, fyzická osoba zapsaná v živnostenském rejstříku. Nejsem plátce DPH. Kontakt: cernikova.dom@gmail.com, web: dusenapapire.cz.
3. Kupující může být spotřebitel, nebo podnikatel. Ustanovení na ochranu spotřebitele se použijí jen na kupující, kteří jsou spotřebiteli.
4. Právní vztahy neupravené těmito podmínkami se řídí zákonem č. 89/2012 Sb., občanským zákoníkem, a zákonem č. 634/1992 Sb., o ochraně spotřebitele.

## 2. Produkt
1. Produktem je digitální obsah, který není dodáván na hmotném nosiči: **balíček Šablony pro autory**. Tvoří ho dokument se šablonami textů, pracovní šablona v Notionu, kalkulačka v Google Tabulkách a šablony v Canvě. Přesný obsah je uveden na prodejní stránce produktu.
2. K použití produktu kupující potřebuje připojení k internetu a bezplatné účty ve službách Notion, Google a Canva. Prvky označené v Canvě korunkou jsou dostupné jen v placené verzi Canva Pro a lze je nahradit bezplatnou alternativou.
3. Prodávající neodpovídá za změny, výpadky nebo cenu služeb třetích stran (Notion, Google, Canva).
4. Produkt obsahuje doporučení a vzory založené na zkušenosti prodávající. Prodávající nezaručuje konkrétní výsledek kampaně ani výši vybrané částky. Informace o daních, darech a fakturaci v produktu jsou obecné a nenahrazují právní ani daňové poradenství.

## 3. Objednávka a uzavření smlouvy
1. Prezentace produktu na webu je výzvou k podání návrhu na uzavření smlouvy.
2. Kupující objednává vyplněním objednávkového formuláře v systému SimpleShop. Před odesláním může údaje zkontrolovat a opravit.
3. Smlouva je uzavřena odesláním objednávky kupujícím a jejím potvrzením ze strany prodávající na e-mailovou adresu zadanou v objednávce.
4. Kupující souhlasí s použitím prostředků komunikace na dálku při uzavírání smlouvy. Náklady vzniklé kupujícímu při použití komunikačních prostředků na dálku (náklady na internetové připojení apod.) si hradí kupující sám.
5. Údaje uvedené kupujícím v objednávce jsou prodávající považovány za správné.

## 4. Cena a platební podmínky
1. Cena produktu je uvedena na prodejní stránce a v objednávkovém formuláři. Prodávající není plátce DPH, cena je konečná.
2. Platbu kupní ceny je možné provést bezhotovostně: online platební kartou prostřednictvím zabezpečené platební brány Stripe integrované v objednávkovém systému SimpleShop, nebo bankovním převodem přímo na bankovní účet prodávající.
3. Kupní cena je splatná bezprostředně při dokončení objednávky. Závazek kupujícího uhradit kupní cenu je splněn okamžikem připsání částky na účet prodávající.
4. Po přijetí platby vystaví prodávající kupujícímu daňový doklad (fakturu) v elektronické podobě a zašle jej na e-mailovou adresu kupujícího.

## 5. Dodání digitálního obsahu
1. Digitální obsah je dodán výhradně elektronickou cestou bezprostředně po zaplacení kupní ceny, a to zasláním e-mailu s unikátními přístupovými odkazy k šablonám a dokumentům (šablona v Notionu, odkaz na Google Tabulky, šablony v Canvě a průvodní materiály).
2. Digitální obsah není dodáván na hmotném nosiči (CD/DVD, USB disk apod.).
3. Kupující je povinen si dodané podklady zkopírovat či uložit do svých vlastních účtů ve službách Notion, Google a Canva bez zbytečného odkladu.

## 6. Odstoupení od smlouvy
1. V souladu s ustanovením § 1837 písm. l) občanského zákoníku kupující – spotřebitel nemá právo odstoupit od smlouvy o dodání digitálního obsahu, pokud nebyl dodán na hmotném nosiči a byl dodán s předchozím výslovným souhlasem spotřebitele před uplynutím lhůty pro odstoupení od smlouvy a prodávající před uzavřením smlouvy sdělila spotřebiteli, že v takovém případě nemá právo na odstoupení od smlouvy.
2. Odesláním objednávky a zaškrtnutím příslušného souhlasu v objednávkovém formuláři kupující výslovně souhlasí se započetím plnění (zpřístupněním digitálního obsahu) před uplynutím 14denní zákonné lhůty pro odstoupení od smlouvy a bere na vědomí, že tímto krokem jeho právo na odstoupení od smlouvy bez udání důvodu zaniká.

## 7. Práva z vadného plnění (reklamace)
1. Práva a povinnosti stran ohledně práv z vadného plnění se řídí příslušnými právními předpisy (zejména § 1914 až 1925, § 2099 až 2117 a § 2389a až 2389s občanského zákoníku a zákonem č. 634/1992 Sb., o ochraně spotřebitele).
2. Prodávající odpovídá kupujícímu za to, že digitální obsah při zpřístupnění odpovídá ujednanému popisu, je funkční a bez vad.
3. V případě technického problému, nefunkčního odkazu nebo chyby v souborech uplatní kupující reklamaci e-mailem na adresu cernikova.dom@gmail.com s popisem vady.
4. Prodávající rozhodne o reklamaci bezodkladně, nejpozději do 30 kalendářních dnů od jejího uplatnění. V případě oprávněné reklamace prodávající zajistí nápravu bez zbytečného odkladu (např. dodáním nového funkčního odkazu).

## 8. Autorská práva a licence
1. Veškerý obsah balíčku Šablony pro autory (včetně struktury, textových vzorů, Notion šablon, tabulek a grafických šablon v Canvě) je autorským dílem Dominiky Černíkové a podléhá ochraně podle zákona č. 121/2000 Sb., autorského zákona.
2. Zakoupením produktu získává kupující nevýhradní, nepřenosnou licenci k osobnímu a internímu užití pro účely přípravy své vlastní autorské knihy nebo kampaně.
3. Kupující není oprávněn produkt ani jakoukoli jeho část přeprodávat, bezplatně šířit, sdílet s třetími osobami, kopírovat pro komerční účely ani veřejně zpřístupňovat bez předchozího písemného souhlasu prodávající.

## 9. Mimosoudní řešení spotřebitelských sporů
1. K mimosoudnímu řešení spotřebitelských sporů z kupní smlouvy je příslušná Česká obchodní inspekce, se sídlem Štěpánská 567/15, 120 00 Praha 2, IČO: 000 20 869, internetová adresa: https://adr.coi.cz.
2. Spotřebitel může pro řešení sporů online využít také platformu Evropské komise na adrese http://ec.europa.eu/consumers/odr.
3. Evropské spotřebitelské centrum Česká republika, se sídlem Štěpánská 567/15, 120 00 Praha 2, internetová adresa: http://www.evropskyspotrebitel.cz je kontaktním místem podle nařízení Evropského parlamentu a Rady (EU) č. 524/2013 o řešení spotřebitelských sporů on-line.

## 10. Závěrečná ustanovení
1. Veškeré právní vztahy vznikající na základě nebo v souvislosti se smlouvou se řídí právním řádem České republiky.
2. Smlouva se uzavírá v českém jazyce.
3. Prodávající je oprávněna tyto obchodní podmínky měnit či doplňovat. Změna se nedotýká smluv uzavřených před účinností nové verze.
4. Tyto obchodní podmínky jsou platné a účinné od 01.10.2026.`,
    },
    privacy: {
      title: 'Zásady ochrany osobních údajů',
      subtitle:
        'Informace o zpracování a ochraně osobních údajů podle Nařízení Evropského parlamentu a Rady (EU) 2016/679 (GDPR). Platné od 01.10.2026.',
      effectiveDate: '01.10.2026',
      body: `Zásady ochrany osobních údajů pro web dusenapapire.cz a prodej digitálního obsahu prostřednictvím systému SimpleShop. Platné od 01.10.2026.

## 1. Správce osobních údajů
1. Správcem vašich osobních údajů je **Dominika Černíková**, IČO 05603005, místo podnikání Tylova 1890, 27201 Kladno, fyzická osoba zapsaná v živnostenském rejstříku. Nejsem plátce DPH.
2. **Kontaktní údaje:**
   - E-mail: cernikova.dom@gmail.com
   - Webové stránky: dusenapapire.cz
   - Instagram: @mlecnezubyduse
3. Jako správce určuji, jakým způsobem a za jakým účelem budou osobní údaje zpracovávány, a zodpovídám za jejich řádné zabezpečení v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR) a zákonem č. 110/2019 Sb., o zpracování osobních údajů.

## 2. Jaké osobní údaje zpracovávám a proč (Účely zpracování)

### A. Odběr newsletteru a dárky ke stažení zdarma
- **Rozsah údajů:** Křestní jméno, e-mailová adresa, vybraný dárek na uvítanou (první kapitola knihy Mléčné zuby duše nebo průvodce Jak zvládnout předprodej knihy).
- **Právní základ:** Váš dobrovolný a výslovný souhlas podle čl. 6 odst. 1 písm. a) GDPR.
- **Účel:** Doručení vybraného dárku do vaší e-mailové schránky a následné zasílání občasného newsletteru s novinkami, články o psaní, informacemi o chystaných knihách a inspirací k tvorbě z projektu Duše na papíře.
- **Jak se odhlásit:** Svůj souhlas můžete kdykoli odvolat jedním kliknutím na odhlašovací odkaz v zápatí každého doručeného e-mailu.

### B. Prodej digitálního obsahu (balíček Šablony pro autory)
- **Rozsah údajů:** Jméno, příjmení, e-mailová adresa, fakturační adresa, u podnikatelů IČO a případně DIČ, informace o zakoupeném produktu a stavu platby.
- **Právní základ:**
  - Plnění kupní smlouvy podle čl. 6 odst. 1 písm. b) GDPR (doručení přístupu k obsahu, technická podpora, komunikace k objednávce).
  - Splnění právní povinnosti podle čl. 6 odst. 1 písm. c) GDPR (vedení účetní a daňové evidence podle zákona o účetnictví a daňového řádu).
- **Účel:** Zpracování objednávky, vystavení faktury, doručení přístupových odkazů a evidence plateb.

### C. Komunikace a dotazy
- **Rozsah údajů:** Jméno, e-mailová adresa a obsah vaší zprávy (prostřednictvím e-mailu či dotazu).
- **Právní základ:** Oprávněný zájem správce na vyřízení vašeho dotazu nebo žádosti podle čl. 6 odst. 1 písm. f) GDPR.
- **Účel:** Zodpovězení dotazu a navazující komunikace.

## 3. Doba uchovávání osobních údajů
- **Údaje pro zasílání newsletteru:** Zpracovávám po dobu trvání vašeho souhlasu, maximálně však po dobu 5 let, nebo do chvíle, kdy se z odběru odhlásíte.
- **Údaje spojené s nákupem a daňové doklady:** Uchovávám po dobu vyžadovanou platnými právními předpisy (zpravidla 10 let od konce zdaňovacího období).
- **E-mailová komunikace k dotazům:** Uchovávám po dobu nezbytnou pro vyřešení dotazu, nejdéle 12 měsíců od ukončení komunikace.

## 4. Kdo má k vašim údajům přístup (Příjemci a zpracovatelé)
Vaše osobní údaje neprodávám ani neposkytuji třetím stranám pro marketingové účely. Pro zajištění provozu webu, prodeje a rozesílky využívám prověřené zpracovatele:
- **SimpleShop (společnost Redbit s.r.o.):** Poskytovatel prodejního formuláře, automatizace objednávek a fakturačního systému.
- **Stripe (Stripe Payments Europe, Ltd.):** Platební brána pro bezhotovostní platby integrovaná v SimpleShopu.
- **Google (Gmail, Google Disk):** E-mailová schránka a cloudové úložiště.
- **MailerLite (MailerLite Limited):** Služba pro hromadné zasílání e-mailů s dárky a newslettery splňující podmínky GDPR.
- **GitHub Pages (GitHub, Inc.):** Webhosting, provoz webu dusenapapire.cz.

Všechna data jsou zpracovávána na území Evropské unie nebo v souladu s mechanismy zaručujícími odpovídající úroveň ochrany osobních údajů.

## 5. Vaše práva podle GDPR
Jako subjekt údajů máte podle GDPR následující práva:
1. **Právo na přístup:** Právo vědět, jaké vaše osobní údaje zpracovávám, za jakým účelem a po jakou dobu.
2. **Právo na opravu:** Právo na opravu nepřesných nebo doplnění neúplných osobních údajů.
3. **Právo na výmaz („právo být zapomenut“):** Právo požadovat smazání vašich údajů, pokud pominul účel jejich zpracování nebo jste odvolali souhlas a neexistuje jiný právní důvod (např. zákonná povinnost archivace faktur).
4. **Právo na omezení zpracování:** V případech stanovených čl. 18 GDPR.
5. **Právo na přenositelnost údajů:** Právo získat své údaje ve strukturovaném, běžně používaném formátu.
6. **Právo vznést námitku:** Proti zpracování založenému na oprávněném zájmu správce.
7. **Právo odvolat souhlas:** Kdykoli, jednoduše a bez jakýchkoli poplatků (e-mailem nebo odkazem v newsletteru).
8. **Právo podat stížnost:** Máte právo podat stížnost u dozorového úřadu, kterým je **Úřad pro ochranu osobních údajů (ÚOOÚ)**, Pplk. Sochora 27, 170 00 Praha 7, web: https://uoou.gov.cz.

Pro uplatnění jakéhokoli z výše uvedených práv mě můžete kontaktovat na e-mailu: cernikova.dom@gmail.com.

## 6. Zabezpečení osobních údajů
1. Osobní údaje jsou chráněny v maximální možné míře pomocí moderních technologií odpovídajících stupni technického rozvoje.
2. Veškerá komunikace na webu dusenapapire.cz i v objednávkovém formuláři probíhá přes zabezpečený protokol HTTPS (šifrování SSL/TLS).
3. Přístup k údajům je zabezpečen silnými hesly a dvoufázovým ověřováním.

## 7. Soubory cookies
1. Web **dusenapapire.cz** využívá soubory cookies – malé textové soubory ukládané do vašeho prohlížeče.
2. **Nezbytné (technické) cookies:** Tyto soubory jsou nezbytné pro zajištění základní funkčnosti webových stránek, navigace a bezpečného průběhu objednávky. K jejich použití není podle zákona vyžadován váš souhlas.
3. **Analytické a preferenční cookies:** Pomáhají mi anonymně sledovat návštěvnost a pochopit, co vás na webu zajímá. Tyto cookies jsou ukládány **výhradně na základě vašeho dobrovolného souhlasu**, který udělujete v cookie liště.
4. **Správa a odvolání souhlasu:** Své nastavení cookies můžete kdykoli jednoduše změnit nebo souhlas odvolat kliknutím na odkaz „Cookies“ v zápatí každé stránky.

## 8. Změny zásad
Zásady mohu v případě potřeby aktualizovat (například při změně legislativy nebo rozšíření nabídky služeb). Aktuální znění najdete vždy na této adrese: [https://dusenapapire.cz/ochrana-osobnich-udaju](/ochrana-osobnich-udaju).

Tyto zásady jsou platné a účinné od **01.10.2026**.`,
    },
  },
};
