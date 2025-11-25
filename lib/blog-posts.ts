export type BlogLanguage = {
  code: string;
  label: string;
};

export type BlogContentSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type BlogPost = {
  title: string;
  slug: string;
  category: string;
  date: string;
  isoDate: string;
  readTime: string;
  summary: string;
  tags: string[];
  stat?: string;
  cover?: string;
  featured?: boolean;
  language: BlogLanguage;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  content: {
    intro: string;
    keyTakeaways: string[];
    sections: BlogContentSection[];
    outcomes: string[];
    cta?: {
      label: string;
      link: string;
      body: string;
    };
  };
};

export const blogPosts: BlogPost[] = [
  {
    title: "Pourquoi la stratégie Multi-Funnel Creative Writing donne de meilleurs résultats après la mise à jour Andromeda (Meta) — Spécial marché Algérien",
    slug: "ecriture-creatives-multifunnel-andromeda",
    category: "Performance Marketing",
    date: "December 2025",
    isoDate: "2025-12-02",
    readTime: "7 min read",
    summary:
      "Pourquoi le creative writing multi-funnel sur Meta devient indispensable après Andromeda pour capter, convaincre et convertir le public algérien.",
    tags: ["Meta Ads", "Creative", "Multi-funnel"],
    stat: "CPL -18% en 21 jours",
    cover: "/images/hero/05.png",
    language: { code: "fr", label: "Français" },
    seo: {
      title: "Multi-Funnel Creative Writing après Andromeda | 360 VISION",
      description:
        "Stratégie multi-funnel pour Meta post-Andromeda adaptée au marché algérien : cohérence, storytelling et signaux de qualité pour baisser le coût par lead.",
      keywords: [
        "marketing digital algérie",
        "publicité facebook algérie",
        "creative writing algérie",
        "multi funnel algérie",
        "andromeda meta algérie",
        "agence marketing algérienne",
        "création contenu algérie",
        "ad creative algérie",
        "stratégie marketing algérie",
        "e-commerce algérie",
      ],
    },
    content: {
      intro:
        "Le paysage digital algérien a basculé avec Andromeda. Les hooks isolés ne suffisent plus. Le Multi-Funnel Creative Writing suit le consommateur à chaque étape et aligne promesse, preuve et ton sur ce que l’algorithme valorise.",
      keyTakeaways: [
        "Andromeda privilégie cohérence narrative, qualité perçue et signaux post-clic.",
        "Un seul hook ne suffit plus : chaque étape du funnel mérite son message et sa preuve.",
        "Adapter le texte en FR/AR sans casser la structure conserve le signal de qualité.",
      ],
      sections: [
        {
          heading: "La mise à jour Andromeda",
          body: "L’algorithme Meta favorise la qualité, la cohérence et les signaux long terme. Les funnels complets gagnent face aux annonces isolées.",
          bullets: [
            "Storytelling clair du clic à la conversion.",
            "Message stable entre annonce et landing.",
            "Stratégie créative profonde, pas seulement un hook viral.",
          ],
        },
        {
          heading: "Le Multi-Funnel en Algérie",
          body: "Chaque étape du parcours algérien a son objectif et son format pour maximiser la conversion.",
          bullets: [
            "TOF : attirer et créer la curiosité (vidéos dynamiques, messages larges).",
            "MOF : expliquer la valeur et prouver l’expertise (e-commerce, services, immobilier, formations).",
            "BOF : pousser à l’action avec preuve sociale, urgence limitée, retargeting.",
          ],
        },
        {
          heading: "Pourquoi il surpasse le hook",
          body: "Le public veut comprendre avant d’acheter. Le Multi-Funnel raconte l’histoire complète et s’adapte à l’intention.",
          bullets: [
            "Pourquoi le produit existe, pour qui, comment il fonctionne, en quoi il est meilleur.",
            "Messages différenciés selon découverte, intérêt, conversion.",
            "Progression narrative favorisée par l’algorithme Meta.",
          ],
        },
        {
          heading: "Résultats en Algérie",
          body: "Les marques appliquant ce cadre voient des coûts baisser et des conversions plus stables.",
          bullets: [
            "Baisse du coût par résultat et CTR plus élevé.",
            "Taux de conversion en hausse, campagnes plus stables.",
            "Croissance long terme via des signaux de qualité constants.",
          ],
        },
        {
          heading: "Clé pour l’e-commerce",
          body: "Le consommateur algérien veut être rassuré avant d’acheter. Le Multi-Funnel suit : expliquer, montrer, rassurer, vendre.",
          bullets: [
            "Promesse et fonctionnement clairs.",
            "Preuves et démonstrations adaptées au local.",
            "Cohérence annonce/landing pour réduire le rebond.",
            "CTA aligné sur l’intention (découvrir, comparer, réserver).",
          ],
        },
      ],
      outcomes: [
        "Coût par lead réduit après alignement du tunnel complet.",
        "CTR et conversion en hausse grâce à des messages adaptés par étape.",
        "Campagnes plus stables avec des signaux post-clic cohérents.",
      ],
      cta: {
        label: "Optimiser vos créas Meta",
        link: "/contact",
        body: "Brief simple : objectif, audience, KPI. Nous livrons un kit multi-funnel FR/AR prêt à lancer conforme Andromeda.",
      },
    },
  },
  {
    title: "كتابة إبداعية متعددة القمع بعد تحديث Andromeda على Meta",
    slug: "andromeda-multifunnel-meta-ar",
    category: "Performance Marketing",
    date: "December 2025",
    isoDate: "2025-12-03",
    readTime: "7 دقائق قراءة",
    summary: "منهجية كتابة إعلانية متعددة المراحل تحافظ على جودة الإشارة بعد Andromeda وتخفض CPA في السوق الجزائري.",
    tags: ["إعلانات فيسبوك الجزائر", "إبداع", "Multi-funnel"],
    stat: "انخفاض CPA بنسبة 15%",
    cover: "/images/cards/3dservicecardimage.png",
    language: { code: "ar", label: "العربية" },
    seo: {
      title: "كتابة متعددة القمع متوافقة مع Andromeda | 360 VISION",
      description: "إعلانات متسلسلة للجذب والإقناع والتحويل مع إشارات جودة يحبها Andromeda في الجزائر.",
      keywords: [
        "إعلانات فيسبوك الجزائر",
        "Andromeda Meta",
        "كتابة إعلانية",
        "CPA منخفض",
        "وكالة تسويق جزائرية",
        "إعلانات إنستغرام",
        "تسويق رقمي الجزائر",
      ],
    },
    content: {
      intro:
        "بعد Andromeda لم يعد الـ Hook الواحد كافيًا. الرسائل المتسلسلة (TOF/MOF/BOF) تحافظ على جودة الإشارة وتُقنع الجمهور الجزائري خطوة بخطوة.",
      keyTakeaways: [
        "تماسك النص بين الإعلان والصفحة يقلل الارتداد ويرفع Quality Ranking.",
        "رسالة مختلفة لكل مرحلة: فضول، قيمة، تحويل.",
        "نسخ ثنائية (عربي/فرنسي) مع هيكل ثابت لحماية الإشارة.",
      ],
      sections: [
        {
          heading: "أولويات Andromeda",
          body: "الألغوريثم يفضل المحتوى المتماسك والإشارات المستمرة على المدى الطويل.",
          bullets: [
            "قصة واضحة من الإعلان إلى الصفحة.",
            "سرد مشكلة + إثبات + حل، لا مجرد Hook.",
            "إشارات تفاعل مستمرة أهم من لقطات CTR قصيرة.",
          ],
        },
        {
          heading: "لماذا القمع المتعدد ضروري",
          body: "المستخدم الجزائري يمر بمراحل قبل الشراء؛ إعلان واحد لا يكفي.",
          bullets: [
            "TOF: جذب فضول بفيديو ديناميكي ورسائل عامة.",
            "MOF: شرح القيمة وإثبات الخبرة (عقارات، خدمات، تجارة إلكترونية، تعليم).",
            "BOF: دفع للعمل مع دليل اجتماعي وعرض محدود وإعادة استهداف.",
          ],
        },
        {
          heading: "التفوق على الـ Hook التقليدي",
          body: "الجمهور يريد فهم القصة كاملة؛ الألغوريثم يكافئ التماسك.",
          bullets: [
            "رسائل مختلفة حسب نية المستخدم.",
            "تطابق وعود الإعلان مع عناوين الصفحة لتقليل الارتداد.",
            "تصعيد تدريجي من فضول إلى إثبات إلى CTA قوي.",
          ],
        },
        {
          heading: "نتائج في السوق الجزائري",
          body: "النهج المتسلسل يخفض التكلفة ويحافظ على حجم الإنفاق.",
          bullets: [
            "انخفاض CPA مع ارتفاع CTR وCR.",
            "استقرار أفضل للحملات بفضل إشارات ما بعد النقر.",
            "ثقة أعلى تقود لنمو طويل المدى.",
          ],
        },
      ],
      outcomes: [
        "انخفاض CPA بنسبة 15% مع الحفاظ على الإنفاق.",
        "تحسن CTR وCR عبر رسائل موجهة لكل مرحلة.",
        "حملات مستقرة بفضل إشارات جودة متواصلة.",
      ],
      cta: {
        label: "تواصل معنا",
        link: "/contact",
        body: "شارك الهدف والجمهور والميزانية، وسنرسل لك نصوصًا متعددة القمع جاهزة ومتوافقة مع Andromeda.",
      },
    },
  },
];

const normalizeSlug = (value?: string) => {
  if (typeof value !== "string") return "";
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

export const getPostBySlug = (slug?: string) => {
  const target = normalizeSlug(slug);
  if (!target) return undefined;
  return blogPosts.find((post) => normalizeSlug(post.slug) === target);
};
