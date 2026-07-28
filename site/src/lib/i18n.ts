// Full bilingual dictionary for Beit Laila.
// Every visible string lives here so the language switcher can swap the
// entire interface, including aria-labels and structured content.

export type Lang = "ar" | "en";

export const LANGS: Lang[] = ["ar", "en"];

export interface NavItem {
  id: string;
  label: string;
}

export interface Category {
  key: string;
  title: string;
  desc: string;
  image: string;
}

export interface OrbitItem {
  key: string;
  label: string;
  centerTitle: string;
  centerDesc: string;
}

interface Dict {
  dir: "rtl" | "ltr";
  htmlLang: string;
  langSwitch: { toAr: string; toEn: string; label: string };
  nav: NavItem[];
  cta: {
    viewMenu: string;
    orderWhatsapp: string;
    openMenu: string;
    download: string;
    call: string;
    directions: string;
    followInstagram: string;
    menuButton: string;
    openMobileMenu: string;
    closeMobileMenu: string;
  };
  loader: { tapHint: string; brand: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    scrollHint: string;
  };
  story: {
    eyebrow: string;
    heading: string;
    body: string;
    stats: { value: string; label: string }[];
  };
  experience: {
    eyebrow: string;
    heading: string;
    subheading: string;
    categories: Category[];
  };
  orbit: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: OrbitItem[];
    swipeHint: string;
  };
  menuPdf: {
    eyebrow: string;
    heading: string;
    description: string;
    previewAlt: string;
    note: string;
  };
  social: {
    eyebrow: string;
    heading: string;
    subheading: string;
    handle: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    subheading: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    hoursNote: string;
    mapAlt: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contactTitle: string;
    followTitle: string;
    menuLink: string;
    rights: string;
  };
  floatingWhatsapp: string;
  a11y: {
    logoHome: string;
    instagram: string;
    facebook: string;
    whatsapp: string;
    phone: string;
    skipToContent: string;
  };
}

const NAV_AR: NavItem[] = [
  { id: "home", label: "الرئيسية" },
  { id: "story", label: "قصتنا" },
  { id: "experience", label: "تجربة الفطار" },
  { id: "menu", label: "المنيو" },
  { id: "contact", label: "تواصل معنا" },
];

const NAV_EN: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "story", label: "Our Story" },
  { id: "experience", label: "Breakfast Experience" },
  { id: "menu", label: "Menu" },
  { id: "contact", label: "Contact" },
];

const CATEGORIES_AR: Category[] = [
  {
    key: "pastries",
    title: "مخبوزات طازجة",
    desc: "كرواسون، توست، شيباتا وتورتيلا تُخبز كل صباح.",
    image: "/food/croissant.webp",
  },
  {
    key: "plates",
    title: "فطار صباحي",
    desc: "أطباق فطار متكاملة بالبيض والجبن والخضار الطازج.",
    image: "/food/plate.webp",
  },
  {
    key: "sandwiches",
    title: "ساندوتشات",
    desc: "كرواسون وكاساديا محشوة باللحمة والدجاج والسجق.",
    image: "/food/wrap.webp",
  },
  {
    key: "coffee",
    title: "قهوة ومشروبات",
    desc: "إسبريسو، لاتيه، عصائر فريش ومشروبات ساخنة وباردة.",
    image: "/food/coffee.webp",
  },
  {
    key: "addons",
    title: "إضافات طازجة",
    desc: "خضار، صلصات وأجبان مختارة تكمل طبقك.",
    image: "/food/toast.webp",
  },
  {
    key: "favorites",
    title: "اختيارات بيت ليلى",
    desc: "أطباقنا المميزة الأكثر طلبًا لبداية يوم مثالية.",
    image: "/food/plate.webp",
  },
];

const CATEGORIES_EN: Category[] = [
  {
    key: "pastries",
    title: "Fresh Pastries",
    desc: "Croissants, toast, ciabatta and tortilla baked every morning.",
    image: "/food/croissant.webp",
  },
  {
    key: "plates",
    title: "Breakfast Plates",
    desc: "Complete breakfast plates with eggs, cheese and fresh greens.",
    image: "/food/plate.webp",
  },
  {
    key: "sandwiches",
    title: "Sandwiches",
    desc: "Croissant and quesadilla filled with meat, chicken and sausage.",
    image: "/food/wrap.webp",
  },
  {
    key: "coffee",
    title: "Coffee & Drinks",
    desc: "Espresso, latte, fresh juices and hot or cold drinks.",
    image: "/food/coffee.webp",
  },
  {
    key: "addons",
    title: "Fresh Add-ons",
    desc: "Vegetables, sauces and selected cheeses to complete your plate.",
    image: "/food/toast.webp",
  },
  {
    key: "favorites",
    title: "Beit Laila Favorites",
    desc: "Our signature, most-loved plates for a perfect start.",
    image: "/food/plate.webp",
  },
];

const ORBIT_AR: OrbitItem[] = [
  {
    key: "croissant",
    label: "كرواسون",
    centerTitle: "كرواسون طازج",
    centerDesc: "طبقات مقرمشة تُخبز كل صباح بزبدة غنية.",
  },
  {
    key: "toast",
    label: "توست",
    centerTitle: "توست ذهبي",
    centerDesc: "شرائح محمصة بعناية جاهزة لأشهى الحشوات.",
  },
  {
    key: "eggs",
    label: "بيض",
    centerTitle: "بيض طازج",
    centerDesc: "بيض مقلي أو سادة يُحضّر على الطلب.",
  },
  {
    key: "cheese",
    label: "جبن",
    centerTitle: "تشكيلة أجبان",
    centerDesc: "رومي، شيدر، نستو ومزيد من الاختيارات.",
  },
  {
    key: "salad",
    label: "خضار",
    centerTitle: "خضار طازجة",
    centerDesc: "طماطم، خس وفلفل تُقطّع طازجة كل يوم.",
  },
  {
    key: "coffee",
    label: "قهوة",
    centerTitle: "قهوة الصباح",
    centerDesc: "إسبريسو ولاتيه لبداية يوم دافئة.",
  },
];

const ORBIT_EN: OrbitItem[] = [
  {
    key: "croissant",
    label: "Croissant",
    centerTitle: "Fresh Croissant",
    centerDesc: "Crisp buttery layers baked every single morning.",
  },
  {
    key: "toast",
    label: "Toast",
    centerTitle: "Golden Toast",
    centerDesc: "Carefully toasted slices ready for rich fillings.",
  },
  {
    key: "eggs",
    label: "Eggs",
    centerTitle: "Fresh Eggs",
    centerDesc: "Fried or plain eggs prepared to order.",
  },
  {
    key: "cheese",
    label: "Cheese",
    centerTitle: "Cheese Selection",
    centerDesc: "Roumi, cheddar, nesto and many more choices.",
  },
  {
    key: "salad",
    label: "Greens",
    centerTitle: "Fresh Greens",
    centerDesc: "Tomato, lettuce and pepper sliced fresh daily.",
  },
  {
    key: "coffee",
    label: "Coffee",
    centerTitle: "Morning Coffee",
    centerDesc: "Espresso and latte for a warm start to the day.",
  },
];

export const DICT: Record<Lang, Dict> = {
  ar: {
    dir: "rtl",
    htmlLang: "ar",
    langSwitch: { toAr: "العربية", toEn: "English", label: "تغيير اللغة" },
    nav: NAV_AR,
    cta: {
      viewMenu: "شوف المنيو",
      orderWhatsapp: "اطلب واتساب",
      openMenu: "افتح المنيو",
      download: "تحميل PDF",
      call: "اتصل بنا",
      directions: "افتح الموقع",
      followInstagram: "تابعنا على إنستجرام",
      menuButton: "القائمة",
      openMobileMenu: "افتح القائمة",
      closeMobileMenu: "إغلاق القائمة",
    },
    loader: { tapHint: "اضغط للدخول", brand: "بيت ليلى" },
    hero: {
      eyebrow: "بيت ليلى",
      title: "فطار طازج كل صباح",
      subtitle:
        "مخبوزات دافئة، قهوة على المزاج وتفاصيل بتبدأ يومك بأحلى إحساس.",
      scrollHint: "انزل لتبدأ التجربة",
    },
    story: {
      eyebrow: "قصتنا",
      heading: "صباحك يبدأ من بيت ليلى",
      body: "في بيت ليلى، بنحضّر الفطار كل صباح بمكونات طازجة وطعم بيجمع بين دفء البيت وجودة التفاصيل. من المخبوزات الطازجة لوجبات الفطار والقهوة، كل حاجة بتتعمل علشان تبدأ يومك بمزاج أحلى.",
      stats: [
        { value: "طازج", label: "يوميًا" },
        { value: "صباحي", label: "من القلب" },
        { value: "دمياط", label: "الجديدة" },
      ],
    },
    experience: {
      eyebrow: "تجربة الفطار",
      heading: "كل صباح له نكهته",
      subheading:
        "اختيارات متنوعة تجمع بين المخبوزات الطازجة والأطباق الدافئة والقهوة.",
      categories: CATEGORIES_AR,
    },
    orbit: {
      eyebrow: "طبق بيت ليلى",
      heading: "افطارك بيتكوّن قدامك",
      subheading: "كل مكوّن حوالين الطبق بيحكي جزء من حكاية الصباح.",
      items: ORBIT_AR,
      swipeHint: "اسحب لاستكشاف المكونات",
    },
    menuPdf: {
      eyebrow: "المنيو",
      heading: "منيو بيت ليلى",
      description: "اكتشف اختيارات الفطار، المخبوزات والمشروبات.",
      previewAlt: "غلاف منيو بيت ليلى",
      note: "المنيو الكامل متاح كملف PDF عالي الجودة.",
    },
    social: {
      eyebrow: "إنستجرام",
      heading: "لحظات من بيت ليلى",
      subheading: "لقطات من صباحاتنا، مخبوزاتنا وتفاصيل المكان.",
      handle: "@beitlailaeg",
    },
    contact: {
      eyebrow: "تواصل معنا",
      heading: "زورنا في بيت ليلى",
      subheading: "احنا في انتظارك لبداية صباح دافئ.",
      addressLabel: "العنوان",
      address: "منتصف شارع أبو الخير، بجوار الزميتي لاند، دمياط الجديدة",
      phoneLabel: "الهاتف وواتساب",
      hoursNote: "اطلب أونلاين أو زورنا في المحل.",
      mapAlt: "خريطة موقع بيت ليلى",
    },
    footer: {
      tagline: "فطار ومخبوزات طازجة تبدأ يومك بدفء البيت.",
      quickLinks: "روابط سريعة",
      contactTitle: "تواصل",
      followTitle: "تابعنا",
      menuLink: "المنيو",
      rights: "بيت ليلى. جميع الحقوق محفوظة.",
    },
    floatingWhatsapp: "تواصل معنا على واتساب",
    a11y: {
      logoHome: "بيت ليلى — الصفحة الرئيسية",
      instagram: "حساب بيت ليلى على إنستجرام",
      facebook: "صفحة بيت ليلى على فيسبوك",
      whatsapp: "تواصل مع بيت ليلى على واتساب",
      phone: "اتصل ببيت ليلى",
      skipToContent: "تخطَّ إلى المحتوى",
    },
  },
  en: {
    dir: "ltr",
    htmlLang: "en",
    langSwitch: { toAr: "العربية", toEn: "English", label: "Change language" },
    nav: NAV_EN,
    cta: {
      viewMenu: "View Menu",
      orderWhatsapp: "Order on WhatsApp",
      openMenu: "Open Menu",
      download: "Download PDF",
      call: "Call Us",
      directions: "Get Directions",
      followInstagram: "Follow Us on Instagram",
      menuButton: "Menu",
      openMobileMenu: "Open menu",
      closeMobileMenu: "Close menu",
    },
    loader: { tapHint: "Tap to enter", brand: "Beit Laila" },
    hero: {
      eyebrow: "Beit Laila",
      title: "Fresh Breakfast, Every Morning",
      subtitle:
        "Warm pastries, coffee made your way, and thoughtful details to start your day beautifully.",
      scrollHint: "Scroll to begin",
    },
    story: {
      eyebrow: "Our Story",
      heading: "Your Morning Starts at Beit Laila",
      body: "At Beit Laila, every morning begins with fresh ingredients, comforting flavors and thoughtful details. From freshly baked pastries to breakfast plates and coffee, everything is prepared to make your day start better.",
      stats: [
        { value: "Fresh", label: "Daily" },
        { value: "Morning", label: "From the heart" },
        { value: "New", label: "Damietta" },
      ],
    },
    experience: {
      eyebrow: "Breakfast Experience",
      heading: "Every Morning Has Its Flavor",
      subheading:
        "A varied selection bringing together fresh pastries, warm plates and coffee.",
      categories: CATEGORIES_EN,
    },
    orbit: {
      eyebrow: "The Beit Laila Plate",
      heading: "Your Breakfast Comes Together",
      subheading: "Every element around the plate tells a piece of the morning.",
      items: ORBIT_EN,
      swipeHint: "Swipe to explore the ingredients",
    },
    menuPdf: {
      eyebrow: "Menu",
      heading: "Beit Laila Menu",
      description: "Explore our breakfast, bakery and drinks selection.",
      previewAlt: "Beit Laila menu cover",
      note: "The full menu is available as a high-quality PDF.",
    },
    social: {
      eyebrow: "Instagram",
      heading: "Moments from Beit Laila",
      subheading: "Glimpses of our mornings, our bakes and the details.",
      handle: "@beitlailaeg",
    },
    contact: {
      eyebrow: "Contact",
      heading: "Visit Us at Beit Laila",
      subheading: "We are waiting to start a warm morning with you.",
      addressLabel: "Address",
      address:
        "Middle of Abu El Khair Street, next to El Zemeity Land, New Damietta, Egypt",
      phoneLabel: "Phone & WhatsApp",
      hoursNote: "Order online or visit us in store.",
      mapAlt: "Map of Beit Laila location",
    },
    footer: {
      tagline: "Fresh breakfast and bakery to start your day with the warmth of home.",
      quickLinks: "Quick Links",
      contactTitle: "Contact",
      followTitle: "Follow Us",
      menuLink: "Menu",
      rights: "Beit Laila. All rights reserved.",
    },
    floatingWhatsapp: "Chat with us on WhatsApp",
    a11y: {
      logoHome: "Beit Laila — Home",
      instagram: "Beit Laila on Instagram",
      facebook: "Beit Laila on Facebook",
      whatsapp: "Chat with Beit Laila on WhatsApp",
      phone: "Call Beit Laila",
      skipToContent: "Skip to content",
    },
  },
};
