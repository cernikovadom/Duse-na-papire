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
  imagePlaceholder: string;
  content: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  isEmailAnswer?: boolean;
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
    { label: 'Povídky', href: '#povidky' },
    { label: 'Povídání', href: '#povidani' },
    { label: 'O mně', href: '#o-mne' },
    { label: 'Kontakt', href: '#kontakt' },
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
          'Moje kampaň vybrala 124 785 Kč od 170 podporovatelů a přípravu jsem začala zhruba dva a půl měsíce před spuštěním. V průvodci najdete, jak si kampaň naplánovat, co připravit předem, jak mluvit o knize bez pocitu, že se vnucujete, a jak udržet energii po celý měsíc kampaně. Píšu ho pro autory, kteří chtějí vydat knihu klidně a s rozmyslem.',
        price: 'Zdarma',
        badge: 'Zdarma',
        badgePosition: 'left',
        status: 'available',
        buttonLabel: 'Stáhnout',
        freeDelivery: {
          endpoint:
            'https://assets.mailerlite.com/jsonp/2393780/forms/201475959156639036/subscribe',
        },
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
        imagePlaceholder: 'Šablony pro autory',
      },
      {
        id: 'tvurci-tym',
        title: 'Můj tvůrčí tým: Notion, Claude a Canva',
        shortDescription:
          'Jak si nastavit nástroje, které vám pomohou s psaním, plánováním i propagací. Abyste měli víc času na tvoření.',
        price: '449 Kč',
        status: 'coming_soon',
        badge: 'Připravuji',
        badgePosition: 'left',
        buttonLabel: 'Dát mi vědět',
        imagePlaceholder: 'Nástroje: Notion, Claude a Canva',
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
          'Ano. Jediné, co za něj chci, je váš e-mail, abych vám mohla poslat průvodce a občas i novinky.',
      },
      {
        question: 'Jak produkt dostanu?',
        answer:
          'Po zadání e-mailu vám průvodce přijde do schránky. Pokud ho nevidíte, zkontrolujte prosím složku hromadné pošty nebo spam.',
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
        answer: 'Napište mi na cernikova.dom@gmail.com, ráda odpovím.',
        isEmailAnswer: true,
      },
    ] as FaqItem[],

    templatesDetail: {
      headline: 'Šablony pro autory',
      subheadline:
        'Všechno, co jsem při kampani na podporu vydání svého románu psala od nuly. Hotové, vyzkoušené a připravené k úpravě do tvého hlasu.',
      price: '349 Kč',
      buttonText: 'Chci šablony',
      checkoutLink: 'https://form.simpleshop.cz/ODoJP/buy/',
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
            title: 'Šablony v Canvě',
            label: 'Canva · zdarma',
            text: '7 hotových grafik, do kterých jen doplníš název knihy a své jméno: oznámení startu kampaně, literární citát, milník sbírky, odpočet do spuštění, Instagram Story s průběhem kampaně, poděkování po úspěšném konci a leták A6 na autorské čtení.',
            icon: 'Palette',
          },
        ],
        footerNote:
          'Notion, Google Tabulky i Canva šablony fungují v bezplatných verzích. Nepotřebuješ žádné placené předplatné.',
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
            'Po zaplacení ti přijde e-mail s odkazem na průvodce se všemi šablonami. Z něj se dostaneš i do šablony v Notionu, ke kalkulačce a k šablonám v Canvě.',
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
        imagePlaceholder: '[Fotografie: Jak se z rukopisu stává kniha]',
        content: '[Text článku]',
      },
      {
        slug: 'kampan-ze-ktere-jsem-mela-strach',
        title: 'Kampaň, ze které jsem měla strach',
        excerpt:
          'Proč jsem se bála mluvit o vlastní knize a co mi nakonec pomohlo vydržet celý měsíc.',
        date: '[datum]',
        imagePlaceholder: '[Fotografie: Kampaň, ze které jsem měla strach]',
        content: '[Text článku]',
      },
      {
        slug: 'psani-mezi-kojenim-a-uspavanim',
        title: 'Psaní mezi kojením a uspáváním',
        excerpt:
          'Jak tvořit, když máte malé dítě a času je málo. A proč to nemusí být dokonalé.',
        date: '[datum]',
        imagePlaceholder: '[Fotografie: Psaní mezi kojením a uspáváním]',
        content: '[Text článku]',
      },
    ] as BlogPostItem[],
  },

  // 7. O MNĚ
  about: {
    eyebrow: 'O mně',
    title: 'Kdo za tím stojí',
    photoPlaceholder: '[Portrét autorky]',
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
    endpoint: '[DOPLNIT]',
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
      body: '[Text bude doplněn]',
    },
    privacy: {
      title: 'Zásady ochrany osobních údajů',
      body: '[Text bude doplněn]',
    },
  },
};
