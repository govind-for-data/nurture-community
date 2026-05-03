export type Lang = "en" | "hi";

export const translations = {
  en: {
    nav: { about: "About", work: "Our Work", upcoming: "Upcoming", impact: "Impact", gallery: "Gallery", contact: "Contact", donate: "Donate" },
    hero: {
      tag: "Serving communities since 2008",
      title: "Together, we build brighter villages.",
      subtitle: "Aasha Foundation works with rural communities across India in education, healthcare, women empowerment, and the environment.",
      cta1: "Donate Now",
      cta2: "Become a Volunteer",
    },
    about: {
      kicker: "About Us",
      title: "A grassroots movement for lasting change",
      body: "Aasha Foundation is a non-profit organisation working hand-in-hand with underserved communities. We believe real change happens when people lead their own transformation — and we walk beside them every step of the way.",
      missionTitle: "Our Mission",
      mission: "To empower rural and marginalised communities through education, health, and sustainable livelihoods.",
      visionTitle: "Our Vision",
      vision: "An India where every child learns, every woman thrives, and every village stands strong.",
    },
    work: {
      kicker: "Our Work",
      title: "Projects we have completed",
      items: [
        { title: "Roshni Schools", desc: "Built 24 learning centres serving 3,000+ children in remote villages of Rajasthan and Bihar." },
        { title: "Swasthya Camps", desc: "Conducted 180 free health & eye-care camps reaching over 45,000 villagers." },
        { title: "Shakti Self-Help Groups", desc: "Trained 1,200 women in tailoring, dairy and micro-enterprise across 60 villages." },
        { title: "Hariyali Plantation", desc: "Planted 50,000 native trees with local youth, restoring degraded common lands." },
      ],
    },
    upcoming: {
      kicker: "Upcoming Initiatives",
      title: "What we are building next",
      items: [
        { title: "Digital Classrooms", desc: "Solar-powered tablet classrooms in 30 tribal schools by 2026.", tag: "Education" },
        { title: "Mobile Health Vans", desc: "Two doctor-equipped vans for monthly check-ups in 80 villages.", tag: "Healthcare" },
        { title: "Women's Skill Hubs", desc: "Five vocational training centres for 2,000 women.", tag: "Empowerment" },
        { title: "Clean Water Wells", desc: "Restoring 100 traditional wells and adding solar pumps.", tag: "Environment" },
      ],
    },
    impact: {
      kicker: "Our Impact",
      title: "Numbers that tell our story",
      stats: [
        { n: "120+", l: "Villages reached" },
        { n: "45,000", l: "Lives touched" },
        { n: "3,000+", l: "Children in school" },
        { n: "1,200", l: "Women empowered" },
      ],
    },
    gallery: { kicker: "Gallery", title: "Moments from the field" },
    testimonials: {
      kicker: "Community Voices",
      title: "Stories of hope",
      items: [
        { quote: "My daughter is the first girl in our village to finish 10th grade. Aasha made it possible.", name: "Sunita Devi", role: "Mother, Banswara" },
        { quote: "The health camp saved my father's eyesight. We had nowhere else to go.", name: "Ramesh Kumar", role: "Farmer, Madhubani" },
        { quote: "I run my own tailoring shop now and teach 8 other women. I never imagined this life.", name: "Meena Bai", role: "Entrepreneur, Bhilwara" },
      ],
    },
    cta: {
      title: "Be the change. Stand with us.",
      body: "Every contribution — your time, your skills, or a small donation — fuels the next chapter of someone's story.",
      donate: "Donate",
      volunteer: "Volunteer",
    },
    contact: {
      kicker: "Contact",
      title: "We'd love to hear from you",
      addressLabel: "Address",
      address: "B-14, Gandhi Marg, New Delhi 110001, India",
      phoneLabel: "Phone",
      emailLabel: "Email",
      name: "Your name",
      email: "Email address",
      message: "Your message",
      send: "Send message",
    },
    footer: { rights: "All rights reserved.", tagline: "A registered non-profit under Section 12A & 80G." },
  },
  hi: {
    nav: { about: "हमारे बारे में", work: "हमारा कार्य", upcoming: "आगामी", impact: "प्रभाव", gallery: "गैलरी", contact: "संपर्क", donate: "दान करें" },
    hero: {
      tag: "2008 से समुदायों की सेवा",
      title: "मिलकर बनाएँ उज्जवल गाँव।",
      subtitle: "आशा फाउंडेशन भारत के ग्रामीण समुदायों के साथ शिक्षा, स्वास्थ्य, महिला सशक्तिकरण और पर्यावरण के क्षेत्र में कार्य करता है।",
      cta1: "अभी दान करें",
      cta2: "स्वयंसेवक बनें",
    },
    about: {
      kicker: "हमारे बारे में",
      title: "स्थायी बदलाव का जमीनी आंदोलन",
      body: "आशा फाउंडेशन एक गैर-लाभकारी संगठन है जो वंचित समुदायों के साथ कंधे से कंधा मिलाकर काम करता है। हम मानते हैं कि असली बदलाव तब होता है जब लोग स्वयं अपना परिवर्तन करते हैं।",
      missionTitle: "हमारा मिशन",
      mission: "शिक्षा, स्वास्थ्य और सतत आजीविका के माध्यम से ग्रामीण समुदायों को सशक्त बनाना।",
      visionTitle: "हमारा दृष्टिकोण",
      vision: "एक ऐसा भारत जहाँ हर बच्चा पढ़े, हर महिला आगे बढ़े और हर गाँव मजबूत हो।",
    },
    work: {
      kicker: "हमारा कार्य",
      title: "पूर्ण की गई परियोजनाएँ",
      items: [
        { title: "रोशनी स्कूल", desc: "राजस्थान और बिहार के दूरस्थ गाँवों में 24 शिक्षण केंद्र, 3,000+ बच्चे।" },
        { title: "स्वास्थ्य शिविर", desc: "180 निःशुल्क स्वास्थ्य व नेत्र शिविर, 45,000 से अधिक ग्रामीण लाभान्वित।" },
        { title: "शक्ति स्वयं-सहायता समूह", desc: "60 गाँवों में 1,200 महिलाओं को सिलाई, डेयरी व लघु उद्यम का प्रशिक्षण।" },
        { title: "हरियाली अभियान", desc: "स्थानीय युवाओं के साथ 50,000 देशी पौधे लगाए।" },
      ],
    },
    upcoming: {
      kicker: "आगामी पहल",
      title: "हम आगे क्या बना रहे हैं",
      items: [
        { title: "डिजिटल कक्षाएँ", desc: "2026 तक 30 आदिवासी स्कूलों में सौर-ऊर्जा टैबलेट कक्षाएँ।", tag: "शिक्षा" },
        { title: "मोबाइल स्वास्थ्य वैन", desc: "80 गाँवों में मासिक जाँच के लिए दो डॉक्टर-सुसज्जित वैन।", tag: "स्वास्थ्य" },
        { title: "महिला कौशल केंद्र", desc: "2,000 महिलाओं के लिए पाँच व्यावसायिक प्रशिक्षण केंद्र।", tag: "सशक्तिकरण" },
        { title: "स्वच्छ जल कुएँ", desc: "100 पारंपरिक कुओं की मरम्मत व सोलर पंप।", tag: "पर्यावरण" },
      ],
    },
    impact: {
      kicker: "हमारा प्रभाव",
      title: "हमारी कहानी कहते आँकड़े",
      stats: [
        { n: "120+", l: "गाँवों तक पहुँच" },
        { n: "45,000", l: "जीवन प्रभावित" },
        { n: "3,000+", l: "बच्चे विद्यालय में" },
        { n: "1,200", l: "महिलाएँ सशक्त" },
      ],
    },
    gallery: { kicker: "गैलरी", title: "मैदान से कुछ पल" },
    testimonials: {
      kicker: "समुदाय की आवाज़",
      title: "आशा की कहानियाँ",
      items: [
        { quote: "मेरी बेटी हमारे गाँव की पहली लड़की है जिसने 10वीं पास की। आशा ने यह संभव किया।", name: "सुनीता देवी", role: "माँ, बांसवाड़ा" },
        { quote: "स्वास्थ्य शिविर ने मेरे पिता की आँखों की रोशनी बचाई।", name: "रमेश कुमार", role: "किसान, मधुबनी" },
        { quote: "अब मेरी अपनी सिलाई की दुकान है और मैं 8 महिलाओं को सिखाती हूँ।", name: "मीना बाई", role: "उद्यमी, भीलवाड़ा" },
      ],
    },
    cta: {
      title: "बदलाव बनिए। हमारे साथ खड़े हों।",
      body: "आपका समय, कौशल या छोटा-सा दान — हर योगदान किसी की कहानी का अगला अध्याय बनता है।",
      donate: "दान करें",
      volunteer: "स्वयंसेवक",
    },
    contact: {
      kicker: "संपर्क",
      title: "हम आपसे सुनना चाहेंगे",
      addressLabel: "पता",
      address: "बी-14, गांधी मार्ग, नई दिल्ली 110001, भारत",
      phoneLabel: "फ़ोन",
      emailLabel: "ईमेल",
      name: "आपका नाम",
      email: "ईमेल पता",
      message: "आपका संदेश",
      send: "संदेश भेजें",
    },
    footer: { rights: "सर्वाधिकार सुरक्षित।", tagline: "धारा 12A व 80G के अंतर्गत पंजीकृत गैर-लाभकारी संस्था।" },
  },
} as const;

export type Dict = typeof translations.en;