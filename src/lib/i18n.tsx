import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "hi";

export const languages: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "hi", label: "हिन्दी", short: "हिं" },
];

type Content = typeof en;

const en = {
  brand: {
    name: "Nal Kheda Mata Mandir",
    tagline: "Siddhpeeth · Nalkheda",
    deity: "Siddhpeeth Maa Baglamukhi",
    pandit: "Pandit Manish Sharma",
    address:
      "Siddhpeeth Maa Baglamukhi Temple, Nalkheda, Dist. Agar Malwa, Madhya Pradesh 465445",
    hours: "Open daily · 8:00 AM – 9:00 PM · Guidance on call 24×7",
  },
  nav: {
    home: "Home",
    about: "About",
    services: "Pooja & Havan",
    gallery: "Gallery",
    testimonials: "Testimonials",
    faq: "FAQs",
    contact: "Contact",
    call: "Call Pandit Ji",
    whatsapp: "WhatsApp Pandit Ji",
    language: "Language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    titleLine1: "Authentic Vedic Pooja",
    titleLine2: "& Havan Services",
    subtitle:
      "Helping devotees with authentic Vedic rituals, spiritual guidance and personalised Pooja services — at the temple or live over video call, from anywhere in the world.",
    call: "Call Pandit Ji",
    whatsapp: "WhatsApp Now",
    location: "Temple Location",
    priestRole: "Priest · 10+ Years of Seva",
  },
  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Poojas Performed" },
    { value: "1000+", label: "Happy Devotees" },
    { value: "24×7", label: "Guidance" },
  ],
  about: {
    eyebrow: "About Pandit Ji",
    title: "A lifetime of seva at the Siddhpeeth",
    subtitle:
      "Pandit Manish Sharma has served at the Nalkheda Siddhpeeth for over a decade, performing Havan and Anushthan for devotees across India and abroad.",
    p1: "Maa Baglamukhi is the eighth of the ten Mahavidyas — the presiding deity of stambhan shakti: silencing enemies, mastering speech and winning legal battles. The temple at Nalkheda, on the banks of the Lakhundar, is among the most revered Baglamukhi peeths in the country.",
    p2: "Rituals here follow the scriptures without shortcuts. Each Havan begins with a sankalp taken in the devotee's own name and gotra, uses the prescribed samagri, and is completed with purnahuti and aarti at the correct muhurat.",
    p3: "Our mission is simple: no fear, no pressure, no exaggerated promises. You are heard first, advised honestly, and only then guided to the ritual that actually fits your situation. Devotees commonly report visible effect within 21 to 36 days.",
    readMore: "Read More",
    readLess: "Read Less",
    whyEyebrow: "Why Choose Us",
    whyTitle: "Rituals done right, guidance given honestly",
  },
  whyChooseUs: [
    {
      title: "Authentic Rituals",
      text: "Every ritual is performed exactly as prescribed in the Vedic scriptures, with correct sankalp and samagri.",
    },
    {
      title: "Experienced Pandit",
      text: "Over a decade of daily seva at the Siddhpeeth, guiding devotees through the right remedy.",
    },
    {
      title: "Online Pooja",
      text: "Join live over video call using your name and gotra, from anywhere in the world.",
    },
    {
      title: "Offline Pooja",
      text: "Sit with your family in the temple courtyard and take part in the Havan yourself.",
    },
    {
      title: "Personal Guidance",
      text: "Talk through your situation first. You are advised only the Pooja you actually need.",
    },
    {
      title: "Trusted by Devotees",
      text: "Prasad, raksha sutra and sankalp patra sent to your home by speed post after every ritual.",
    },
  ],
  services: {
    finderEyebrow: "Find the Right Pooja",
    finderTitle: "What problem are you facing?",
    finderSubtitle:
      "Start here. Choose your concern and see the ritual traditionally prescribed for it.",
    eyebrow: "Our Services",
    title: "Pooja & Havan performed at the temple",
    subtitle:
      "Each ritual is performed as prescribed in the scriptures, in your name and gotra.",
    knowMore: "Know More",
    enquire: "Enquire on WhatsApp",
    call: "Call",
    close: "Close",
    enquiryText: (title: string) =>
      `Jai Maa Baglamukhi. I would like to know more about ${title}.`,
  },
  serviceItems: [
    {
      slug: "baglamukhi-havan",
      title: "Baglamukhi Havan",
      desc: "The principal Havan of the Siddhpeeth for stambhan of enemies, victory in disputes and courage of speech.",
      detail:
        "Performed with 21 sacred herbs and special red chillies. Recommended for enemy obstacles, court matters and business growth. Devotees commonly report visible effect within 21 to 36 days.",
    },
    {
      slug: "mahamrityunjaya-jaap",
      title: "Mahamrityunjaya Jaap",
      desc: "For long life, protection from illness and relief from fear of accident or surgery.",
      detail:
        "Sava lakh Mahamrityunjaya mantra jaap with concluding Havan, performed for health, recovery and protection of the family.",
    },
    {
      slug: "navgraha-shanti",
      title: "Navgraha Shanti",
      desc: "Pacifies malefic planetary periods that block work, marriage and prosperity.",
      detail:
        "Graha-wise jaap, tarpan and Havan for Shani, Rahu, Ketu, Mangal and other doshas identified from your birth details.",
    },
    {
      slug: "rudrabhishek",
      title: "Rudrabhishek",
      desc: "Abhishek of Lord Shiva for peace of mind, removal of doshas and family well-being.",
      detail:
        "Traditional abhishek with panchamrit, bilva patra and Rudri paath, ideal on Mondays, Pradosh and Shravan.",
    },
    {
      slug: "grah-pravesh",
      title: "Grah Pravesh",
      desc: "Vastu shanti and housewarming rituals for a new home, shop or office.",
      detail:
        "Vastu Shanti, Ganesh Puja, Navgraha Havan and kalash sthapana performed at your premises or as a sankalp from the temple.",
    },
    {
      slug: "satyanarayan-katha",
      title: "Satyanarayan Katha",
      desc: "A gentle, auspicious ritual for gratitude, new beginnings and family harmony.",
      detail:
        "Full katha with panchamrit prasad, suited to birthdays, anniversaries, promotions and fulfilment of a vow.",
    },
    {
      slug: "pitra-dosh-nivaran",
      title: "Pitra Dosh Nivaran",
      desc: "For ancestral obstruction that delays marriage, children or steady income.",
      detail:
        "Narayan Bali, tarpan and shanti Havan performed on the correct tithi to bring peace to the ancestors.",
    },
    {
      slug: "durga-saptashati",
      title: "Durga Saptashati Path",
      desc: "For strength, protection and removal of negative energy from home and mind.",
      detail:
        "Paath of all 700 verses with Navchandi Havan, performed by Brahmin priests during Navratri or on request.",
    },
  ],
  problems: [
    { title: "Marriage Problems", slug: "baglamukhi-havan" },
    { title: "Business Problems", slug: "baglamukhi-havan" },
    { title: "Court Case", slug: "baglamukhi-havan" },
    { title: "Health Issues", slug: "mahamrityunjaya-jaap" },
    { title: "Financial Problems", slug: "navgraha-shanti" },
    { title: "Education", slug: "navgraha-shanti" },
    { title: "Negative Energy", slug: "durga-saptashati" },
    { title: "Family Problems", slug: "rudrabhishek" },
  ],
  process: {
    eyebrow: "How We Work",
    title: "Booking a Pooja is simple",
    subtitle:
      "Six calm steps, from your first message to the blessings reaching your home.",
  },
  steps: [
    { n: "01", title: "Contact Pandit Ji", text: "Call or message on WhatsApp — any hour." },
    { n: "02", title: "Discuss your problem", text: "Share your situation in confidence." },
    { n: "03", title: "Recommended Pooja", text: "You are advised the ritual that fits." },
    { n: "04", title: "Choose date", text: "An auspicious muhurat is fixed for you." },
    { n: "05", title: "Perform ritual", text: "Attend in person or join by video call." },
    { n: "06", title: "Receive blessings", text: "Prasad and raksha sutra reach your home." },
  ],
  gallery: {
    eyebrow: "Gallery",
    title: "Glimpses of the temple and rituals",
    subtitle: "Moments from daily aarti, Havan, festivals and special Anushthans.",
    close: "Close gallery",
    images: [
      "Temple shikhara at sunrise",
      "Havan fire ritual with offerings",
      "Pooja thali with diya and flowers",
      "Temple sanctum lit with lamps",
      "Devotees seated during a ceremony",
      "Pandit Ji at the temple",
    ],
  },
  testimonialsSection: {
    eyebrow: "Testimonials",
    title: "Devotees who found their way here",
    subtitle: "Rated 4.9 out of 5 by devotees on Google.",
    source: "Google Review",
  },
  testimonials: [
    {
      name: "Rajesh Verma",
      place: "Indore",
      text: "Our court matter had been pending for three years. Pandit Ji guided us to the Vishesh Havan and within a month the hearing finally moved in our favour.",
    },
    {
      name: "Sunita Sharma",
      place: "Delhi",
      text: "I joined the Havan by video call from Delhi. Everything was explained calmly, and the prasad and raksha sutra reached me by post in four days.",
    },
    {
      name: "Amit Patel",
      place: "Ahmedabad",
      text: "My business had been stuck for a long time. There was no pressure and no big promises — only honest guidance and a properly performed ritual.",
    },
    {
      name: "Priya Nair",
      place: "Pune",
      text: "The Mahamrityunjaya Jaap was done for my father during his treatment. The whole family felt at peace. Truly a blessing.",
    },
  ],
  faqSection: { eyebrow: "FAQs", title: "Questions devotees often ask" },
  faqs: [
    {
      q: "Can the Pooja be performed online?",
      a: "Yes. You can join live over video call using only your name and gotra. Pandit Ji performs the sankalp in your name and you remain connected through the ritual.",
    },
    {
      q: "How much time does a Havan take?",
      a: "A Samanya Havan takes around 2 to 3 hours. Larger Anushthans with multiple priests can run across several days, and the schedule is shared with you in advance.",
    },
    {
      q: "How do I book a Pooja?",
      a: "Call or message Pandit Ji on WhatsApp with your name, gotra and the problem you are facing. He will suggest the ritual and confirm an auspicious date.",
    },
    {
      q: "Can I join from another city or country?",
      a: "Yes. Many devotees participate from other states and from abroad. Prasad, raksha sutra and sankalp patra are sent to your address by speed post.",
    },
    {
      q: "What details are needed?",
      a: "Your full name, gotra if known, and briefly the concern you want resolved. Birth details help when a planetary remedy is suggested.",
    },
    {
      q: "When can effects be seen?",
      a: "As per tradition and the experience of devotees, the effect of Maa Baglamukhi's Havan and Anushthan becomes apparent within 21 to 36 days.",
    },
  ],
  contact: {
    eyebrow: "Need Guidance?",
    title: "Talk to Pandit Ji today",
    subtitle:
      "Share your concern on a call or WhatsApp. You will be advised honestly on the right Pooja, the right date and what it involves.",
    call: "Call",
    whatsapp: "WhatsApp",
    email: "Email",
    visitTitle: "Visit the temple",
    mapTitle: "Map to Nal Kheda Mata Mandir",
    footerAbout:
      "Authentic Vedic Pooja and Havan services from the Siddhpeeth at Nalkheda — in person or live over video call.",
    quickLinks: "Quick Links",
    servicesTitle: "Services",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms",
  },
  floating: { whatsapp: "Chat on WhatsApp", call: "Call Pandit Ji", top: "Back to top" },
};

const hi: Content = {
  brand: {
    name: "नल खेड़ा माता मंदिर",
    tagline: "सिद्धपीठ · नलखेड़ा",
    deity: "सिद्धपीठ माँ बगलामुखी",
    pandit: "पंडित मनीष शर्मा",
    address:
      "सिद्धपीठ माँ बगलामुखी मंदिर, नलखेड़ा, जिला आगर मालवा, मध्य प्रदेश 465445",
    hours: "प्रतिदिन खुला · प्रातः 8:00 – रात्रि 9:00 · मार्गदर्शन 24×7",
  },
  nav: {
    home: "होम",
    about: "परिचय",
    services: "पूजा एवं हवन",
    gallery: "गैलरी",
    testimonials: "अनुभव",
    faq: "प्रश्न",
    contact: "संपर्क",
    call: "पंडित जी को कॉल करें",
    whatsapp: "व्हाट्सएप करें",
    language: "भाषा",
    openMenu: "मेन्यू खोलें",
    closeMenu: "मेन्यू बंद करें",
  },
  hero: {
    titleLine1: "प्रामाणिक वैदिक पूजा",
    titleLine2: "एवं हवन सेवाएँ",
    subtitle:
      "श्रद्धालुओं के लिए शास्त्रोक्त वैदिक अनुष्ठान, आध्यात्मिक मार्गदर्शन एवं व्यक्तिगत पूजा सेवाएँ — मंदिर में उपस्थित होकर अथवा वीडियो कॉल के माध्यम से, विश्व में कहीं से भी।",
    call: "पंडित जी को कॉल करें",
    whatsapp: "अभी व्हाट्सएप करें",
    location: "मंदिर का स्थान",
    priestRole: "मुख्य पुजारी · 10+ वर्षों की सेवा",
  },
  stats: [
    { value: "10+", label: "वर्षों का अनुभव" },
    { value: "500+", label: "पूजाएँ संपन्न" },
    { value: "1000+", label: "संतुष्ट श्रद्धालु" },
    { value: "24×7", label: "मार्गदर्शन" },
  ],
  about: {
    eyebrow: "पंडित जी के विषय में",
    title: "सिद्धपीठ पर जीवनभर की सेवा",
    subtitle:
      "पंडित मनीष शर्मा एक दशक से अधिक समय से नलखेड़ा सिद्धपीठ पर सेवा कर रहे हैं तथा देश-विदेश के श्रद्धालुओं हेतु हवन व अनुष्ठान संपन्न कराते हैं।",
    p1: "माँ बगलामुखी दस महाविद्याओं में आठवीं हैं — स्तंभन शक्ति की अधिष्ठात्री देवी: शत्रु शमन, वाणी सिद्धि एवं वाद-विवाद में विजय की दात्री। लखुंदर नदी के तट पर स्थित नलखेड़ा मंदिर देश के सर्वाधिक पूजनीय बगलामुखी पीठों में से एक है।",
    p2: "यहाँ प्रत्येक अनुष्ठान बिना किसी संक्षेप के शास्त्रोक्त विधि से होता है। हर हवन श्रद्धालु के नाम व गोत्र से संकल्प लेकर आरंभ होता है, निर्धारित सामग्री से संपन्न होता है और शुभ मुहूर्त में पूर्णाहुति एवं आरती के साथ पूर्ण होता है।",
    p3: "हमारा उद्देश्य सरल है: न भय, न दबाव, न बड़े-बड़े वादे। पहले आपकी बात सुनी जाती है, फिर सच्चा परामर्श दिया जाता है और तभी वह अनुष्ठान बताया जाता है जो वास्तव में आपके लिए उपयुक्त है। श्रद्धालुओं के अनुभव अनुसार 21 से 36 दिनों में प्रभाव दिखाई देता है।",
    readMore: "और पढ़ें",
    readLess: "कम पढ़ें",
    whyEyebrow: "हमें क्यों चुनें",
    whyTitle: "शास्त्रोक्त अनुष्ठान, ईमानदार मार्गदर्शन",
  },
  whyChooseUs: [
    {
      title: "शास्त्रोक्त अनुष्ठान",
      text: "प्रत्येक अनुष्ठान वैदिक शास्त्रों में वर्णित विधि से, सही संकल्प एवं सामग्री के साथ संपन्न किया जाता है।",
    },
    {
      title: "अनुभवी पंडित जी",
      text: "सिद्धपीठ पर एक दशक से अधिक की नित्य सेवा, श्रद्धालुओं को सही उपाय तक पहुँचाने का अनुभव।",
    },
    {
      title: "ऑनलाइन पूजा",
      text: "अपने नाम व गोत्र से वीडियो कॉल पर विश्व में कहीं से भी लाइव सम्मिलित हों।",
    },
    {
      title: "मंदिर में पूजा",
      text: "परिवार सहित मंदिर प्रांगण में बैठकर स्वयं हवन में सम्मिलित हों।",
    },
    {
      title: "व्यक्तिगत मार्गदर्शन",
      text: "पहले आपकी स्थिति सुनी जाती है। केवल वही पूजा बताई जाती है जिसकी वास्तव में आवश्यकता है।",
    },
    {
      title: "श्रद्धालुओं का विश्वास",
      text: "प्रत्येक अनुष्ठान के पश्चात प्रसाद, रक्षा सूत्र एवं संकल्प पत्र स्पीड पोस्ट द्वारा आपके घर भेजा जाता है।",
    },
  ],
  services: {
    finderEyebrow: "सही पूजा चुनें",
    finderTitle: "आप किस समस्या का सामना कर रहे हैं?",
    finderSubtitle:
      "यहाँ से आरंभ करें। अपनी समस्या चुनें और उसके लिए परंपरागत रूप से निर्धारित अनुष्ठान देखें।",
    eyebrow: "हमारी सेवाएँ",
    title: "मंदिर में संपन्न होने वाली पूजा एवं हवन",
    subtitle:
      "प्रत्येक अनुष्ठान शास्त्रोक्त विधि से, आपके नाम एवं गोत्र से संपन्न किया जाता है।",
    knowMore: "और जानें",
    enquire: "व्हाट्सएप पर पूछें",
    call: "कॉल करें",
    close: "बंद करें",
    enquiryText: (title: string) =>
      `जय माँ बगलामुखी। मैं ${title} के विषय में जानकारी चाहता/चाहती हूँ।`,
  },
  serviceItems: [
    {
      slug: "baglamukhi-havan",
      title: "बगलामुखी हवन",
      desc: "सिद्धपीठ का प्रमुख हवन — शत्रु स्तंभन, वाद-विवाद में विजय एवं वाणी की शक्ति हेतु।",
      detail:
        "21 पवित्र औषधियों एवं विशेष लाल मिर्च से संपन्न। शत्रु बाधा, न्यायालयीन प्रकरण एवं व्यापार वृद्धि हेतु अनुशंसित। श्रद्धालुओं के अनुसार 21 से 36 दिनों में प्रभाव दिखाई देता है।",
    },
    {
      slug: "mahamrityunjaya-jaap",
      title: "महामृत्युंजय जाप",
      desc: "दीर्घायु, रोग से रक्षा तथा दुर्घटना व शल्यक्रिया के भय से मुक्ति हेतु।",
      detail:
        "सवा लाख महामृत्युंजय मंत्र जाप एवं हवन, स्वास्थ्य, आरोग्य लाभ तथा परिवार की रक्षा हेतु संपन्न।",
    },
    {
      slug: "navgraha-shanti",
      title: "नवग्रह शांति",
      desc: "कार्य, विवाह एवं समृद्धि में बाधा देने वाली अशुभ ग्रह दशाओं की शांति।",
      detail:
        "जन्म विवरण से ज्ञात शनि, राहु, केतु, मंगल आदि दोषों हेतु ग्रहानुसार जाप, तर्पण एवं हवन।",
    },
    {
      slug: "rudrabhishek",
      title: "रुद्राभिषेक",
      desc: "मानसिक शांति, दोष निवारण एवं पारिवारिक कल्याण हेतु भगवान शिव का अभिषेक।",
      detail:
        "पंचामृत, बिल्व पत्र एवं रुद्री पाठ सहित पारंपरिक अभिषेक — सोमवार, प्रदोष एवं श्रावण में विशेष फलदायी।",
    },
    {
      slug: "grah-pravesh",
      title: "गृह प्रवेश",
      desc: "नए घर, दुकान या कार्यालय हेतु वास्तु शांति एवं गृह प्रवेश अनुष्ठान।",
      detail:
        "वास्तु शांति, गणेश पूजन, नवग्रह हवन एवं कलश स्थापना — आपके स्थान पर अथवा मंदिर से संकल्प द्वारा।",
    },
    {
      slug: "satyanarayan-katha",
      title: "सत्यनारायण कथा",
      desc: "कृतज्ञता, नए आरंभ एवं पारिवारिक सुख-शांति हेतु शुभ अनुष्ठान।",
      detail:
        "पंचामृत प्रसाद सहित संपूर्ण कथा — जन्मदिन, वर्षगाँठ, पदोन्नति एवं मनोकामना पूर्ति के अवसर पर उपयुक्त।",
    },
    {
      slug: "pitra-dosh-nivaran",
      title: "पितृ दोष निवारण",
      desc: "विवाह, संतान अथवा स्थिर आय में विलंब देने वाले पितृ दोष हेतु।",
      detail:
        "नारायण बलि, तर्पण एवं शांति हवन शुभ तिथि पर संपन्न, जिससे पितरों को शांति प्राप्त हो।",
    },
    {
      slug: "durga-saptashati",
      title: "दुर्गा सप्तशती पाठ",
      desc: "शक्ति, रक्षा एवं घर व मन से नकारात्मक ऊर्जा के निवारण हेतु।",
      detail:
        "सातों सौ श्लोकों का पाठ एवं नवचंडी हवन, नवरात्रि में अथवा अनुरोध पर ब्राह्मणों द्वारा संपन्न।",
    },
  ],
  problems: [
    { title: "विवाह में बाधा", slug: "baglamukhi-havan" },
    { title: "व्यापार की समस्या", slug: "baglamukhi-havan" },
    { title: "न्यायालयीन प्रकरण", slug: "baglamukhi-havan" },
    { title: "स्वास्थ्य समस्या", slug: "mahamrityunjaya-jaap" },
    { title: "आर्थिक समस्या", slug: "navgraha-shanti" },
    { title: "शिक्षा", slug: "navgraha-shanti" },
    { title: "नकारात्मक ऊर्जा", slug: "durga-saptashati" },
    { title: "पारिवारिक क्लेश", slug: "rudrabhishek" },
  ],
  process: {
    eyebrow: "कार्य प्रणाली",
    title: "पूजा बुक करना सरल है",
    subtitle:
      "आपके पहले संदेश से लेकर आशीर्वाद आपके घर पहुँचने तक — छह सरल चरण।",
  },
  steps: [
    { n: "01", title: "पंडित जी से संपर्क", text: "किसी भी समय कॉल या व्हाट्सएप करें।" },
    { n: "02", title: "समस्या बताएँ", text: "अपनी स्थिति विश्वासपूर्वक साझा करें।" },
    { n: "03", title: "उपयुक्त पूजा", text: "आपके अनुरूप अनुष्ठान बताया जाता है।" },
    { n: "04", title: "तिथि निर्धारण", text: "आपके लिए शुभ मुहूर्त निश्चित किया जाता है।" },
    { n: "05", title: "अनुष्ठान", text: "स्वयं उपस्थित हों या वीडियो कॉल से जुड़ें।" },
    { n: "06", title: "आशीर्वाद प्राप्ति", text: "प्रसाद एवं रक्षा सूत्र आपके घर पहुँचता है।" },
  ],
  gallery: {
    eyebrow: "गैलरी",
    title: "मंदिर एवं अनुष्ठानों की झलकियाँ",
    subtitle: "नित्य आरती, हवन, उत्सव एवं विशेष अनुष्ठानों के क्षण।",
    close: "गैलरी बंद करें",
    images: [
      "प्रातःकाल मंदिर का शिखर",
      "सामग्री सहित हवन की अग्नि",
      "दीप एवं पुष्प सहित पूजा थाली",
      "दीपों से प्रकाशित गर्भगृह",
      "अनुष्ठान में बैठे श्रद्धालु",
      "मंदिर में पंडित जी",
    ],
  },
  testimonialsSection: {
    eyebrow: "श्रद्धालुओं के अनुभव",
    title: "जिन श्रद्धालुओं को यहाँ मार्ग मिला",
    subtitle: "गूगल पर श्रद्धालुओं द्वारा 4.9 / 5 रेटिंग।",
    source: "गूगल समीक्षा",
  },
  testimonials: [
    {
      name: "राजेश वर्मा",
      place: "इंदौर",
      text: "हमारा न्यायालयीन प्रकरण तीन वर्षों से लंबित था। पंडित जी ने विशेष हवन का मार्गदर्शन दिया और एक माह में सुनवाई हमारे पक्ष में बढ़ी।",
    },
    {
      name: "सुनीता शर्मा",
      place: "दिल्ली",
      text: "मैं दिल्ली से वीडियो कॉल द्वारा हवन में सम्मिलित हुई। सब कुछ शांति से समझाया गया और प्रसाद व रक्षा सूत्र चार दिन में डाक से पहुँच गया।",
    },
    {
      name: "अमित पटेल",
      place: "अहमदाबाद",
      text: "मेरा व्यापार लंबे समय से रुका हुआ था। कोई दबाव नहीं, कोई बड़े वादे नहीं — केवल सच्चा मार्गदर्शन और विधिपूर्वक अनुष्ठान।",
    },
    {
      name: "प्रिया नायर",
      place: "पुणे",
      text: "मेरे पिताजी के उपचार के दौरान महामृत्युंजय जाप कराया गया। पूरे परिवार को शांति मिली। सचमुच आशीर्वाद है।",
    },
  ],
  faqSection: { eyebrow: "सामान्य प्रश्न", title: "श्रद्धालुओं द्वारा पूछे जाने वाले प्रश्न" },
  faqs: [
    {
      q: "क्या पूजा ऑनलाइन कराई जा सकती है?",
      a: "जी हाँ। केवल अपने नाम व गोत्र से आप वीडियो कॉल पर लाइव सम्मिलित हो सकते हैं। पंडित जी आपके नाम से संकल्प करते हैं और आप पूरे अनुष्ठान से जुड़े रहते हैं।",
    },
    {
      q: "हवन में कितना समय लगता है?",
      a: "सामान्य हवन में लगभग 2 से 3 घंटे लगते हैं। अनेक ब्राह्मणों सहित बड़े अनुष्ठान कई दिनों तक चलते हैं, जिसकी समय-सारणी पहले ही साझा कर दी जाती है।",
    },
    {
      q: "पूजा कैसे बुक करें?",
      a: "अपना नाम, गोत्र एवं समस्या लिखकर पंडित जी को कॉल या व्हाट्सएप करें। वे उपयुक्त अनुष्ठान बताकर शुभ तिथि निश्चित करेंगे।",
    },
    {
      q: "क्या मैं दूसरे शहर या देश से जुड़ सकता हूँ?",
      a: "जी हाँ। अनेक श्रद्धालु अन्य राज्यों एवं विदेशों से सम्मिलित होते हैं। प्रसाद, रक्षा सूत्र एवं संकल्प पत्र स्पीड पोस्ट द्वारा आपके पते पर भेजा जाता है।",
    },
    {
      q: "किन विवरणों की आवश्यकता होती है?",
      a: "आपका पूरा नाम, गोत्र (यदि ज्ञात हो) तथा संक्षेप में वह समस्या जिसका समाधान चाहिए। ग्रह उपाय हेतु जन्म विवरण सहायक होता है।",
    },
    {
      q: "प्रभाव कब दिखाई देता है?",
      a: "परंपरा एवं श्रद्धालुओं के अनुभव अनुसार माँ बगलामुखी के हवन व अनुष्ठान का प्रभाव 21 से 36 दिनों में प्रकट होता है।",
    },
  ],
  contact: {
    eyebrow: "मार्गदर्शन चाहिए?",
    title: "आज ही पंडित जी से बात करें",
    subtitle:
      "कॉल या व्हाट्सएप पर अपनी समस्या बताएँ। आपको सही पूजा, सही तिथि एवं उसकी विधि के विषय में ईमानदार परामर्श मिलेगा।",
    call: "कॉल करें",
    whatsapp: "व्हाट्सएप",
    email: "ईमेल",
    visitTitle: "मंदिर पधारें",
    mapTitle: "नल खेड़ा माता मंदिर का मानचित्र",
    footerAbout:
      "नलखेड़ा सिद्धपीठ से प्रामाणिक वैदिक पूजा एवं हवन सेवाएँ — स्वयं उपस्थित होकर अथवा वीडियो कॉल द्वारा।",
    quickLinks: "त्वरित लिंक",
    servicesTitle: "सेवाएँ",
    rights: "सर्वाधिकार सुरक्षित।",
    privacy: "गोपनीयता नीति",
    terms: "नियम एवं शर्तें",
  },
  floating: { whatsapp: "व्हाट्सएप पर बात करें", call: "पंडित जी को कॉल करें", top: "ऊपर जाएँ" },
};

const dictionaries: Record<Lang, Content> = { en, hi };

const STORAGE_KEY = "nkmm-lang";

type LanguageContextValue = { lang: Lang; setLang: (l: Lang) => void; t: Content };

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "hi") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, t: dictionaries[lang] }),
    [lang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
