// rootDB.js — Kök Veritabanı (الجذر والاشتقاق)
// Her kök: temel anlam, türevler, bâb zinciri, Kur'an referansları, Türkçe izler

const rootDB = {
  "ر-ب-ب": {
    core: "terbiye etmek, yetiştirmek, sahiplenmek",
    quran_count: 980,
    derivatives: [
      { form: "رَبّ", pattern: "فَعْل", type: "masdar/isim", meaning: "Rab, terbiye eden" },
      { form: "رَبَّانِيّ", pattern: "فَعْلَانِيّ", type: "nisbet", meaning: "Rabbanî, ilâhî" },
      { form: "رُبُوبِيَّة", pattern: "—", type: "masdar", meaning: "Rab oluş" },
    ],
    bab_chain: [
      { bab: "I", form: "رَبَّ/يَرُبُّ", meaning: "terbiye etti", semantic: "temel eylem", lessons: ["L01"] },
      { bab: "II", form: "رَبَّى/يُرَبِّي", meaning: "yetiştirdi", semantic: "teksîr", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L01", verse: "1:2", form: "رَبِّ", note: "âlemlerin Rabbi — izâfet" },
      { lesson: "L01", verse: "1:6", form: "رَبِّنَا", note: "Rabbimiz — zamîrli izâfet" },
      { lesson: "L19", verse: "93:11", form: "رَبِّكَ", note: "Rabbinin nimetini anlat" },
      { lesson: "L20", verse: "94:8", form: "رَبِّكَ", note: "yalnız Rabbine yönel" },
    ],
    turkish_traces: ["Rab", "terbiye", "rabıta"],
  },
  "ع-ب-د": {
    core: "kulluk etmek, ibadet etmek, boyun eğmek",
    quran_count: 275,
    derivatives: [
      { form: "عَبْد", pattern: "فَعْل", type: "isim", meaning: "kul" },
      { form: "عِبَادَة", pattern: "فِعَالَة", type: "masdar", meaning: "ibadet" },
      { form: "عِبَاد", pattern: "فِعَال", type: "cem", meaning: "kullar" },
      { form: "مَعْبُود", pattern: "مَفْعُول", type: "ism-i mef'ûl", meaning: "ibadet edilen" },
    ],
    bab_chain: [
      { bab: "I", form: "عَبَدَ/يَعْبُدُ", meaning: "kulluk etti", semantic: "temel eylem", lessons: ["L01", "L07"] },
    ],
    cross_refs: [
      { lesson: "L01", verse: "1:5", form: "نَعْبُدُ", note: "kulluk ederiz — muzâri, cem" },
      { lesson: "L07", verse: "109:1", form: "الكَافِرُونَ", note: "Kâfirûn suresinde 6 kez" },
    ],
    turkish_traces: ["abd", "ibadet", "âbid", "Abdullah"],
  },
  "أ-ل-ه": {
    core: "ilâh olmak, tapılmak, sığınmak",
    quran_count: 2700,
    derivatives: [
      { form: "إِلَٰه", pattern: "فِعَال", type: "isim", meaning: "ilâh, tapılan" },
      { form: "اللّه", pattern: "—", type: "özel isim", meaning: "Allah" },
      { form: "أُلُوهِيَّة", pattern: "—", type: "masdar", meaning: "ilâhlık" },
    ],
    bab_chain: [
      { bab: "I", form: "أَلِهَ/يَأْلَهُ", meaning: "hayret etti, sığındı", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L01", verse: "1:1", form: "ٱللَّهِ", note: "Besmele — lafzatullah" },
      { lesson: "L08", verse: "112:1", form: "ٱللَّهُ", note: "İhlâs — Allah'ın birliği" },
    ],
    turkish_traces: ["Allah", "ilâh", "ilâhî"],
  },
  "ر-ح-م": {
    core: "merhamet etmek, acımak, esirgemek",
    quran_count: 339,
    derivatives: [
      { form: "رَحْمَة", pattern: "فَعْلَة", type: "masdar", meaning: "rahmet" },
      { form: "رَحْمٰن", pattern: "فَعْلَان", type: "mübalağa", meaning: "Rahmân — çok merhametli" },
      { form: "رَحِيم", pattern: "فَعِيل", type: "mübalağa", meaning: "Rahîm — sürekli merhametli" },
      { form: "رَحِم", pattern: "فَعِل", type: "isim", meaning: "rahim, akrabalık bağı" },
      { form: "مَرْحُوم", pattern: "مَفْعُول", type: "ism-i mef'ûl", meaning: "rahmet edilmiş" },
    ],
    bab_chain: [
      { bab: "I", form: "رَحِمَ/يَرْحَمُ", meaning: "merhamet etti", semantic: "temel eylem", lessons: ["L01"] },
      { bab: "V", form: "تَرَحَّمَ/يَتَرَحَّمُ", meaning: "rahmet diledi", semantic: "tekellüf", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L01", verse: "1:1", form: "ٱلرَّحْمَـٰنِ", note: "Rahmân — فَعْلَان mübalağa" },
      { lesson: "L01", verse: "1:1", form: "ٱلرَّحِيمِ", note: "Rahîm — فَعِيل süreklilik" },
    ],
    turkish_traces: ["rahmet", "merhamet", "Rahmân", "Rahîm", "rahim"],
  },
  "ح-م-د": {
    core: "övmek, hamd etmek, memnun olmak",
    quran_count: 63,
    derivatives: [
      { form: "حَمْد", pattern: "فَعْل", type: "masdar", meaning: "hamd, övgü" },
      { form: "حَامِد", pattern: "فَاعِل", type: "ism-i fâil", meaning: "hamd eden" },
      { form: "مَحْمُود", pattern: "مَفْعُول", type: "ism-i mef'ûl", meaning: "övülen" },
      { form: "أَحْمَد", pattern: "أَفْعَل", type: "ism-i tafdîl", meaning: "en çok övülen" },
      { form: "مُحَمَّد", pattern: "مُفَعَّل", type: "ism-i mef'ûl (II)", meaning: "tekrar tekrar övülen" },
    ],
    bab_chain: [
      { bab: "I", form: "حَمِدَ/يَحْمَدُ", meaning: "hamd etti", semantic: "temel eylem", lessons: ["L01"] },
      { bab: "II", form: "حَمَّدَ/يُحَمِّدُ", meaning: "çok övdü", semantic: "teksîr", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L01", verse: "1:2", form: "ٱلْحَمْدُ", note: "Tüm hamd Allah'a — istiğrâk" },
    ],
    turkish_traces: ["hamd", "Ahmed", "Mahmud", "Muhammed", "Hamid"],
  },
  "ع-ل-م": {
    core: "bilmek, tanımak, farkında olmak",
    quran_count: 854,
    derivatives: [
      { form: "عِلْم", pattern: "فِعْل", type: "masdar", meaning: "bilgi" },
      { form: "عَالِم", pattern: "فَاعِل", type: "ism-i fâil", meaning: "bilen, âlim" },
      { form: "عَلِيم", pattern: "فَعِيل", type: "mübalağa", meaning: "çok bilen" },
      { form: "مَعْلُوم", pattern: "مَفْعُول", type: "ism-i mef'ûl", meaning: "bilinen" },
      { form: "مُعَلِّم", pattern: "مُفَعِّل", type: "ism-i fâil (II)", meaning: "öğretmen" },
      { form: "عَالَم", pattern: "فَاعَل", type: "isim", meaning: "âlem, dünya" },
      { form: "عَلَامَة", pattern: "فَعَالَة", type: "isim", meaning: "işaret, alâmet" },
    ],
    bab_chain: [
      { bab: "I", form: "عَلِمَ/يَعْلَمُ", meaning: "bildi", semantic: "temel eylem", lessons: ["L01"] },
      { bab: "II", form: "عَلَّمَ/يُعَلِّمُ", meaning: "öğretti", semantic: "ta'diye", lessons: [] },
      { bab: "V", form: "تَعَلَّمَ/يَتَعَلَّمُ", meaning: "öğrendi", semantic: "mutâva'at", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L01", verse: "1:2", form: "العَالَمِينَ", note: "âlemler — aynı kök, farklı anlam dalı" },
    ],
    turkish_traces: ["ilim", "âlim", "malûm", "alâmet", "muallim"],
  },
  "ن-ع-م": {
    core: "nimet vermek, bolluk, yumuşaklık",
    quran_count: 79,
    derivatives: [
      { form: "نِعْمَة", pattern: "فِعْلَة", type: "masdar", meaning: "nimet" },
      { form: "أَنْعَمَ", pattern: "أَفْعَلَ", type: "fiil (IV)", meaning: "nimet verdi" },
      { form: "نَعِيم", pattern: "فَعِيل", type: "isim", meaning: "bolluk, cennet nimeti" },
      { form: "مُنْعِم", pattern: "مُفْعِل", type: "ism-i fâil (IV)", meaning: "nimet veren" },
    ],
    bab_chain: [
      { bab: "I", form: "نَعِمَ/يَنْعَمُ", meaning: "nimetlendi", semantic: "temel eylem", lessons: [] },
      { bab: "IV", form: "أَنْعَمَ/يُنْعِمُ", meaning: "nimet verdi", semantic: "ta'diye", lessons: ["L01"] },
    ],
    cross_refs: [
      { lesson: "L01", verse: "1:7", form: "أَنْعَمْتَ", note: "nimet verdiklerin — IV. bâb mâzî" },
      { lesson: "L19", verse: "93:11", form: "نِعْمَة", note: "Rabbinin nimetini anlat" },
    ],
    turkish_traces: ["nimet", "naim"],
  },
  "ه-د-ي": {
    core: "yol göstermek, hidâyet etmek",
    quran_count: 316,
    derivatives: [
      { form: "هُدًى", pattern: "فُعًل", type: "masdar", meaning: "hidâyet" },
      { form: "هَادٍ", pattern: "فَاعِل", type: "ism-i fâil", meaning: "yol gösteren" },
      { form: "مُهْتَدٍ", pattern: "مُفْتَعِل", type: "ism-i fâil (VIII)", meaning: "hidâyette olan" },
    ],
    bab_chain: [
      { bab: "I", form: "هَدَى/يَهْدِي", meaning: "yol gösterdi", semantic: "temel eylem", lessons: ["L01"] },
      { bab: "VIII", form: "اِهْتَدَى/يَهْتَدِي", meaning: "hidâyet buldu", semantic: "kendine dönüş", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L01", verse: "1:6", form: "اهْدِنَا", note: "bize hidâyet et — emir kipi" },
      { lesson: "L01", verse: "1:6", form: "الصِّرَاطَ", note: "dosdoğru yol" },
      { lesson: "L19", verse: "93:7", form: "ضَالًّا فَهَدَى", note: "yolsuz iken hidâyet etti" },
    ],
    turkish_traces: ["hidâyet", "hâdî", "hediye"],
  },
  "ض-ل-ل": {
    core: "sapıtmak, yoldan çıkmak, kaybolmak",
    quran_count: 191,
    derivatives: [
      { form: "ضَلَال", pattern: "فَعَال", type: "masdar", meaning: "sapkınlık" },
      { form: "ضَالّ", pattern: "فَاعِل", type: "ism-i fâil", meaning: "sapıtan, yolunu kaybeden" },
      { form: "مُضِلّ", pattern: "مُفْعِل", type: "ism-i fâil (IV)", meaning: "saptıran" },
    ],
    bab_chain: [
      { bab: "I", form: "ضَلَّ/يَضِلُّ", meaning: "sapıttı", semantic: "temel eylem", lessons: ["L01", "L19"] },
      { bab: "IV", form: "أَضَلَّ/يُضِلُّ", meaning: "saptırdı", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L01", verse: "1:7", form: "الضَّالِّينَ", note: "sapıtanlar — ism-i fâil, cem" },
      { lesson: "L19", verse: "93:7", form: "ضَالًّا", note: "yolunu kaybetmiş — hâl" },
    ],
    turkish_traces: ["dalâlet", "mudill"],
  },
  "ق-و-م": {
    core: "kalkmak, dikilmek, doğrulmak",
    quran_count: 660,
    derivatives: [
      { form: "قِيَامَة", pattern: "فِعَالَة", type: "masdar", meaning: "kalkış, kıyâmet" },
      { form: "مُسْتَقِيم", pattern: "مُسْتَفْعِل", type: "ism-i fâil (X)", meaning: "dosdoğru" },
      { form: "قَائِم", pattern: "فَاعِل", type: "ism-i fâil", meaning: "ayakta duran" },
      { form: "قَوَام", pattern: "فَعَال", type: "masdar", meaning: "geçim, denge" },
      { form: "مَقَام", pattern: "مَفْعَل", type: "ism-i mekân", meaning: "makam, durma yeri" },
    ],
    bab_chain: [
      { bab: "I", form: "قَامَ/يَقُومُ", meaning: "kalktı", semantic: "temel eylem", lessons: ["L01"] },
      { bab: "IV", form: "أَقَامَ/يُقِيمُ", meaning: "ikâme etti, dik tuttu", semantic: "ta'diye", lessons: [] },
      { bab: "X", form: "اسْتَقَامَ/يَسْتَقِيمُ", meaning: "doğruluğu aradı", semantic: "talep", lessons: ["L01"] },
    ],
    cross_refs: [
      { lesson: "L01", verse: "1:6", form: "المُسْتَقِيمَ", note: "dosdoğru — X. bâb ism-i fâil" },
      { lesson: "L14", verse: "101:1", form: "القَارِعَة", note: "Kâri'a — kıyâmet suresi" },
    ],
    turkish_traces: ["kıyâmet", "makam", "müstakîm", "kıyam", "ikâmet"],
  },
  "ن-ز-ل": {
    core: "inmek, iniş, nüzûl",
    quran_count: 293,
    derivatives: [
      { form: "نُزُول", pattern: "فُعُول", type: "masdar", meaning: "iniş" },
      { form: "مُنَزَّل", pattern: "مُفَعَّل", type: "ism-i mef'ûl (II)", meaning: "peyderpey indirilen" },
      { form: "مَنْزِل", pattern: "مَفْعِل", type: "ism-i mekân", meaning: "menzil, konak" },
      { form: "تَنْزِيل", pattern: "تَفْعِيل", type: "masdar (II)", meaning: "inzâl, tenzîl" },
    ],
    bab_chain: [
      { bab: "I", form: "نَزَلَ/يَنْزِلُ", meaning: "indi", semantic: "temel eylem", lessons: [] },
      { bab: "II", form: "نَزَّلَ/يُنَزِّلُ", meaning: "peyderpey indirdi", semantic: "teksîr", lessons: [] },
      { bab: "IV", form: "أَنزَلَ/يُنْزِلُ", meaning: "tek seferde indirdi", semantic: "ta'diye", lessons: ["L17"] },
      { bab: "V", form: "تَنَزَّلَ/يَتَنَزَّلُ", meaning: "peyderpey indi", semantic: "tedrîc", lessons: ["L17"] },
    ],
    cross_refs: [
      { lesson: "L17", verse: "97:1", form: "أَنزَلْنَاهُ", note: "Kur'an'ı indirdik — IV. bâb" },
      { lesson: "L17", verse: "97:4", form: "تَنَزَّلُ", note: "melekler peyderpey iner — V. bâb" },
    ],
    turkish_traces: ["nüzûl", "tenzîl", "menzil", "inzâl"],
  },
  "ك-ف-ر": {
    core: "örtmek, inkâr etmek, nankörlük",
    quran_count: 525,
    derivatives: [
      { form: "كُفْر", pattern: "فُعْل", type: "masdar", meaning: "küfür, inkâr" },
      { form: "كَافِر", pattern: "فَاعِل", type: "ism-i fâil", meaning: "kâfir, inkâr eden" },
      { form: "كَفَّارَة", pattern: "فَعَّالَة", type: "masdar", meaning: "keffâret" },
    ],
    bab_chain: [
      { bab: "I", form: "كَفَرَ/يَكْفُرُ", meaning: "örtüp inkâr etti", semantic: "temel eylem", lessons: ["L07"] },
      { bab: "II", form: "كَفَّرَ/يُكَفِّرُ", meaning: "örttü, bağışladı", semantic: "teksîr", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L07", verse: "109:1", form: "الكَافِرُونَ", note: "kâfirler — ism-i fâil, cem" },
    ],
    turkish_traces: ["küfür", "kâfir", "keffâret", "tekfîr"],
  },
  "ع-م-ل": {
    core: "çalışmak, iş yapmak, amel",
    quran_count: 360,
    derivatives: [
      { form: "عَمَل", pattern: "فَعَل", type: "masdar", meaning: "amel, iş" },
      { form: "عَامِل", pattern: "فَاعِل", type: "ism-i fâil", meaning: "çalışan" },
    ],
    bab_chain: [
      { bab: "I", form: "عَمِلَ/يَعْمَلُ", meaning: "amel etti", semantic: "temel eylem", lessons: ["L03", "L15"] },
    ],
    cross_refs: [
      { lesson: "L03", verse: "103:3", form: "عَمِلُوا", note: "amel edenler — mâzî, cem" },
      { lesson: "L15", verse: "99:7", form: "يَعْمَلْ", note: "amel eden — şart muzâri" },
    ],
    turkish_traces: ["amel", "muamelât", "âmil"],
  },
  "ش-ر-ر": {
    core: "kötülük, şerr",
    quran_count: 30,
    derivatives: [
      { form: "شَرّ", pattern: "فَعْل", type: "masdar/isim", meaning: "kötülük, şer" },
      { form: "شَرِير", pattern: "فَعِيل", type: "sıfat", meaning: "kötü" },
      { form: "أَشْرَار", pattern: "أَفْعَال", type: "cem", meaning: "kötüler" },
    ],
    bab_chain: [
      { bab: "I", form: "شَرَّ/يَشِرُّ", meaning: "kötülük etti", semantic: "temel eylem", lessons: ["L06"] },
    ],
    cross_refs: [
      { lesson: "L06", verse: "113:1", form: "شَرِّ", note: "kötülüğünden — muzâf, mecrûr" },
      { lesson: "L15", verse: "99:8", form: "شَرًّا", note: "kötülük — temyîz" },
    ],
    turkish_traces: ["şer", "şerir"],
  },
  "ق-و-ل": {
    core: "söylemek, demek",
    quran_count: 1722,
    derivatives: [
      { form: "قَوْل", pattern: "فَعْل", type: "masdar", meaning: "söz" },
      { form: "قَائِل", pattern: "فَاعِل", type: "ism-i fâil", meaning: "söyleyen" },
      { form: "مَقَال", pattern: "مَفْعَل", type: "masdar", meaning: "makale" },
      { form: "مَقُولَة", pattern: "مَفْعُولَة", type: "ism-i mef'ûl", meaning: "söylenmiş" },
    ],
    bab_chain: [
      { bab: "I", form: "قَالَ/يَقُولُ", meaning: "dedi", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [],
    turkish_traces: ["kavl", "makale", "kaal"],
  },
  "ك-و-ن": {
    core: "olmak, var olmak, oluş",
    quran_count: 1390,
    derivatives: [
      { form: "كَوْن", pattern: "فَعْل", type: "masdar", meaning: "oluş" },
      { form: "كَائِن", pattern: "فَاعِل", type: "ism-i fâil", meaning: "var olan" },
      { form: "مَكَان", pattern: "مَفْعَل", type: "ism-i mekân", meaning: "yer, mekân" },
    ],
    bab_chain: [
      { bab: "I", form: "كَانَ/يَكُونُ", meaning: "oldu / idi", semantic: "nâkıs/tam fiil", lessons: ["L16"] },
    ],
    cross_refs: [
      { lesson: "L16", verse: "98:1", form: "لَمْ يَكُنْ", note: "olmadı — meczûm" },
    ],
    turkish_traces: ["kâinat", "mekân", "kevn"],
  },
  "د-ي-ن": {
    core: "borç, karşılık, yönetim, din",
    quran_count: 101,
    derivatives: [
      { form: "دِين", pattern: "فِعْل", type: "isim", meaning: "din, hesap günü" },
      { form: "دَيَّان", pattern: "فَعَّال", type: "mübalağa", meaning: "hesap soran" },
      { form: "مَدِين", pattern: "مَفْعِل", type: "isim", meaning: "borçlu" },
    ],
    bab_chain: [
      { bab: "I", form: "دَانَ/يَدِينُ", meaning: "borçlandı / itaat etti", semantic: "temel eylem", lessons: ["L01"] },
    ],
    cross_refs: [
      { lesson: "L01", verse: "1:4", form: "الدِّينِ", note: "hesap günü" },
      { lesson: "L07", verse: "109:6", form: "دِينِ", note: "benim dinim" },
    ],
    turkish_traces: ["din", "deyn", "medîne"],
  },
  "ر-أ-ي": {
    core: "görmek, düşünmek, görüş",
    quran_count: 328,
    derivatives: [
      { form: "رَأْي", pattern: "فَعْل", type: "masdar", meaning: "görüş, fikir" },
      { form: "رُؤْيَة", pattern: "فُعْلَة", type: "masdar", meaning: "görme" },
    ],
    bab_chain: [
      { bab: "I", form: "رَأَى/يَرَى", meaning: "gördü", semantic: "temel eylem", lessons: ["L15"] },
      { bab: "IV", form: "أَرَى/يُرِي", meaning: "gösterdi", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L15", verse: "99:7", form: "يَرَهُ", note: "onu görür — muzâri, meczûm" },
      { lesson: "L05", verse: "107:1", form: "أَرَأَيْتَ", note: "gördün mü — soru" },
    ],
    turkish_traces: ["re'y", "rüya", "rü'yet", "mir'ât"],
  },
  "أ-م-ن": {
    core: "güvenmek, emin olmak, iman etmek",
    quran_count: 879,
    derivatives: [
      { form: "إِيمَان", pattern: "إِفْعَال", type: "masdar (IV)", meaning: "iman" },
      { form: "مُؤْمِن", pattern: "مُفْعِل", type: "ism-i fâil (IV)", meaning: "mü'min" },
      { form: "أَمَان", pattern: "فَعَال", type: "masdar", meaning: "emân, güvenlik" },
      { form: "أَمِين", pattern: "فَعِيل", type: "sıfat", meaning: "güvenilir" },
    ],
    bab_chain: [
      { bab: "I", form: "أَمِنَ/يَأْمَنُ", meaning: "güvende oldu", semantic: "temel eylem", lessons: [] },
      { bab: "IV", form: "آمَنَ/يُؤْمِنُ", meaning: "iman etti", semantic: "ta'diye", lessons: ["L03"] },
    ],
    cross_refs: [
      { lesson: "L03", verse: "103:3", form: "آمَنُوا", note: "iman edenler — IV. bâb mâzî" },
    ],
    turkish_traces: ["iman", "emîn", "emânet", "mü'min", "âmîn"],
  },
  "ص-ل-و": {
    core: "namaz, dua, bağlantı",
    quran_count: 99,
    derivatives: [
      { form: "صَلَاة", pattern: "فَعَاة", type: "masdar", meaning: "namaz, dua" },
      { form: "مُصَلٍّ", pattern: "مُفَعِّل", type: "ism-i fâil (II)", meaning: "namaz kılan" },
    ],
    bab_chain: [
      { bab: "I", form: "صَلَّى/يُصَلِّي", meaning: "namaz kıldı", semantic: "II. bâb", lessons: ["L05"] },
    ],
    cross_refs: [
      { lesson: "L05", verse: "107:4", form: "لِلْمُصَلِّينَ", note: "namaz kılanlar" },
      { lesson: "L08", verse: "108:2", form: "فَصَلِّ", note: "namaz kıl — emir" },
    ],
    turkish_traces: ["salât", "namaz", "musallî"],
  },
  "ق-د-ر": {
    core: "takdir etmek, ölçmek, güç yetirmek",
    quran_count: 132,
    derivatives: [
      { form: "قَدْر", pattern: "فَعْل", type: "isim", meaning: "kadr, değer, ölçü" },
      { form: "قَدِير", pattern: "فَعِيل", type: "mübalağa", meaning: "kudretli" },
      { form: "قُدْرَة", pattern: "فُعْلَة", type: "masdar", meaning: "güç, kudret" },
      { form: "تَقْدِير", pattern: "تَفْعِيل", type: "masdar (II)", meaning: "takdir, belirleme" },
      { form: "مِقْدَار", pattern: "مِفْعَال", type: "isim", meaning: "miktar" },
    ],
    bab_chain: [
      { bab: "I", form: "قَدَرَ/يَقْدِرُ", meaning: "ölçtü / gücü yetti", semantic: "temel eylem", lessons: ["L17"] },
      { bab: "II", form: "قَدَّرَ/يُقَدِّرُ", meaning: "takdir etti", semantic: "teksîr", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L17", verse: "97:1", form: "القَدْرِ", note: "Kadir Gecesi — değer/ölçü" },
    ],
    turkish_traces: ["kader", "kudret", "takdir", "miktar", "Kadîr"],
  },
  "ص-د-ر": {
    core: "göğüs, kalp, önde olan",
    quran_count: 44,
    derivatives: [
      { form: "صَدْر", pattern: "فَعْل", type: "isim", meaning: "göğüs, kalp" },
      { form: "مَصْدَر", pattern: "مَفْعَل", type: "ism-i mekân", meaning: "kaynak, çıkış yeri" },
    ],
    bab_chain: [
      { bab: "I", form: "صَدَرَ/يَصْدُرُ", meaning: "döndü / çıktı", semantic: "temel eylem", lessons: ["L15"] },
      { bab: "VII", form: "اِنْشَرَحَ", meaning: "ferahladı (ش-ر-ح)", semantic: "—", lessons: ["L20"] },
    ],
    cross_refs: [
      { lesson: "L20", verse: "94:1", form: "صَدْرَكَ", note: "göğsünü açtık — isti'âre" },
      { lesson: "L15", verse: "99:6", form: "يَصْدُرُ", note: "insanlar çıkar — fâil gizli" },
    ],
    turkish_traces: ["sadr", "masdar", "sudûr"],
  },
  "خ-ل-ق": {
    core: "yaratmak, oluşturmak",
    quran_count: 261,
    derivatives: [
      { form: "خَلْق", pattern: "فَعْل", type: "masdar", meaning: "yaratma" },
      { form: "خَالِق", pattern: "فَاعِل", type: "ism-i fâil", meaning: "yaratıcı" },
      { form: "مَخْلُوق", pattern: "مَفْعُول", type: "ism-i mef'ûl", meaning: "yaratılmış" },
    ],
    bab_chain: [
      { bab: "I", form: "خَلَقَ/يَخْلُقُ", meaning: "yarattı", semantic: "temel eylem", lessons: ["L06", "L18"] },
    ],
    cross_refs: [
      { lesson: "L06", verse: "113:1", form: "خَلَقَ", note: "yarattığının kötülüğünden" },
      { lesson: "L18", verse: "95:4", form: "خَلَقْنَا", note: "insanı yarattık" },
    ],
    turkish_traces: ["halk", "Hâlık", "mahlûk", "ahlâk"],
  },
  "ي-و-م": {
    core: "gün, zaman",
    quran_count: 475,
    derivatives: [
      { form: "يَوْم", pattern: "فَعْل", type: "isim", meaning: "gün" },
      { form: "أَيَّام", pattern: "أَفْعَال", type: "cem", meaning: "günler" },
      { form: "يَوْمَئِذٍ", pattern: "—", type: "zarf", meaning: "o gün" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L01", verse: "1:4", form: "يَوْمِ", note: "hesap günü — muzâf" },
      { lesson: "L15", verse: "99:6", form: "يَوْمَئِذٍ", note: "o gün — zarf" },
    ],
    turkish_traces: ["yevm"],
  },
  "أ-ن-س": {
    core: "insan, ünsîyet, alışmak",
    quran_count: 241,
    derivatives: [
      { form: "إِنْسَان", pattern: "إِفْعَال/فِعْلَان", type: "isim", meaning: "insan" },
      { form: "نَاس", pattern: "—", type: "isim", meaning: "insanlar" },
      { form: "أُنَاس", pattern: "فُعَال", type: "isim", meaning: "insanlar" },
    ],
    bab_chain: [
      { bab: "I", form: "أَنِسَ/يَأْنَسُ", meaning: "ünsîyet kurdu", semantic: "temel eylem", lessons: [] },
      { bab: "X", form: "اِسْتَأْنَسَ", meaning: "yakınlık aradı", semantic: "talep", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L03", verse: "103:2", form: "الإِنسَانَ", note: "insan — ism-i inna" },
      { lesson: "L18", verse: "95:4", form: "الإِنسَانَ", note: "insanı en güzel biçimde yarattık" },
    ],
    turkish_traces: ["insan", "üns", "muânis"],
  },
  "م-ل-ك": {
    core: "sahip olmak, hükmetmek",
    quran_count: 206,
    derivatives: [
      { form: "مَلِك", pattern: "فَعِل", type: "isim", meaning: "melik, hükümdar" },
      { form: "مَالِك", pattern: "فَاعِل", type: "ism-i fâil", meaning: "sahip" },
      { form: "مُلْك", pattern: "فُعْل", type: "masdar", meaning: "mülk, egemenlik" },
      { form: "مَلَكُوت", pattern: "فَعَلُوت", type: "isim", meaning: "mutlak egemenlik" },
      { form: "مَلَك", pattern: "فَعَل", type: "isim", meaning: "melek" },
    ],
    bab_chain: [
      { bab: "I", form: "مَلَكَ/يَمْلِكُ", meaning: "sahip oldu", semantic: "temel eylem", lessons: ["L01"] },
    ],
    cross_refs: [
      { lesson: "L01", verse: "1:4", form: "مَالِكِ", note: "hesap gününün sahibi" },
      { lesson: "L05", verse: "114:2", form: "مَلِكِ", note: "insanların hükümdarı" },
    ],
    turkish_traces: ["melik", "mülk", "mâlik", "memleket", "melek"],
  },
  "ص-ب-ر": {
    core: "sabretmek, dayanmak",
    quran_count: 103,
    derivatives: [
      { form: "صَبْر", pattern: "فَعْل", type: "masdar", meaning: "sabır" },
      { form: "صَابِر", pattern: "فَاعِل", type: "ism-i fâil", meaning: "sabreden" },
      { form: "صَبُور", pattern: "فَعُول", type: "mübalağa", meaning: "çok sabreden" },
    ],
    bab_chain: [
      { bab: "I", form: "صَبَرَ/يَصْبِرُ", meaning: "sabretti", semantic: "temel eylem", lessons: ["L03"] },
    ],
    cross_refs: [
      { lesson: "L03", verse: "103:3", form: "الصَّبْرِ", note: "sabır — muzâfun ileyh" },
    ],
    turkish_traces: ["sabır", "sabûr"],
  },
  "خ-ي-ر": {
    core: "hayır, iyilik, seçim",
    quran_count: 176,
    derivatives: [
      { form: "خَيْر", pattern: "فَعْل", type: "ism-i tafdîl", meaning: "daha hayırlı / en hayırlı" },
      { form: "خِيَار", pattern: "فِعَال", type: "isim", meaning: "seçkinler" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L15", verse: "99:7", form: "خَيْرًا", note: "zerre kadar hayır — temyîz" },
      { lesson: "L17", verse: "97:3", form: "خَيْرٌ", note: "bin aydan hayırlı — ism-i tafdîl" },
    ],
    turkish_traces: ["hayır", "hayrât"],
  },
  "و-ج-د": {
    core: "bulmak, karşılaşmak",
    quran_count: 107,
    derivatives: [
      { form: "وَجْد", pattern: "فَعْل", type: "masdar", meaning: "bulma" },
      { form: "وُجُود", pattern: "فُعُول", type: "masdar", meaning: "varlık" },
      { form: "مَوْجُود", pattern: "مَفْعُول", type: "ism-i mef'ûl", meaning: "mevcut" },
    ],
    bab_chain: [
      { bab: "I", form: "وَجَدَ/يَجِدُ", meaning: "buldu", semantic: "temel eylem", lessons: ["L19"] },
    ],
    cross_refs: [
      { lesson: "L19", verse: "93:6", form: "وَجَدَكَ", note: "seni buldu — üç tekrar" },
    ],
    turkish_traces: ["vücûd", "mevcûd", "îcâd"],
  },
  "ف-ر-ق": {
    core: "ayırmak, bölmek",
    quran_count: 72,
    derivatives: [
      { form: "فُرْقَان", pattern: "فُعْلَان", type: "isim", meaning: "hakkı bâtıldan ayıran" },
      { form: "فَرِيق", pattern: "فَعِيل", type: "isim", meaning: "grup, parti" },
      { form: "فِرْقَة", pattern: "فِعْلَة", type: "isim", meaning: "fırka, bölük" },
    ],
    bab_chain: [
      { bab: "I", form: "فَرَقَ/يَفْرُقُ", meaning: "ayırdı", semantic: "temel eylem", lessons: [] },
      { bab: "II", form: "فَرَّقَ/يُفَرِّقُ", meaning: "parçalara ayırdı", semantic: "teksîr", lessons: ["L16"] },
      { bab: "V", form: "تَفَرَّقَ/يَتَفَرَّقُ", meaning: "dağıldı", semantic: "mutâva'at", lessons: ["L16"] },
    ],
    cross_refs: [
      { lesson: "L16", verse: "98:4", form: "تَفَرَّقَ", note: "dağıldılar — V. bâb" },
    ],
    turkish_traces: ["furkan", "fırka", "tefrika", "fark"],
  },
  "ك-ت-ب": {
    core: "yazmak, kitap, farz kılmak",
    quran_count: 319,
    derivatives: [
      { form: "كِتَاب", pattern: "فِعَال", type: "isim", meaning: "kitap" },
      { form: "كَاتِب", pattern: "فَاعِل", type: "ism-i fâil", meaning: "yazan" },
      { form: "مَكْتُوب", pattern: "مَفْعُول", type: "ism-i mef'ûl", meaning: "yazılmış" },
      { form: "مَكْتَبَة", pattern: "مَفْعَلَة", type: "ism-i mekân", meaning: "kütüphane" },
    ],
    bab_chain: [
      { bab: "I", form: "كَتَبَ/يَكْتُبُ", meaning: "yazdı", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L16", verse: "98:2", form: "الكِتَابِ", note: "kitap ehli" },
    ],
    turkish_traces: ["kitap", "kâtip", "mektup", "mekteb"],
  },
  "ج-ن-ن": {
    core: "gizlenmek, örtünmek",
    quran_count: 201,
    derivatives: [
      { form: "جَنَّة", pattern: "فَعْلَة", type: "isim", meaning: "cennet, bahçe (gizli)" },
      { form: "جِنّ", pattern: "فِعْل", type: "isim", meaning: "cin (gizli varlık)" },
      { form: "جُنُون", pattern: "فُعُول", type: "masdar", meaning: "delilik (aklı gizlenen)" },
      { form: "جَنِين", pattern: "فَعِيل", type: "isim", meaning: "cenin (gizlenmiş)" },
    ],
    bab_chain: [
      { bab: "I", form: "جَنَّ/يَجِنُّ", meaning: "örtüp gizledi", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L05", verse: "114:6", form: "الجِنَّةِ", note: "cinler" },
    ],
    turkish_traces: ["cennet", "cin", "cenin", "mecnun"],
  },
  "ف-ل-ق": {
    core: "yarmak, çatlatmak",
    quran_count: 5,
    derivatives: [
      { form: "فَلَق", pattern: "فَعَل", type: "isim", meaning: "şafak, yarılma" },
    ],
    bab_chain: [
      { bab: "I", form: "فَلَقَ/يَفْلِقُ", meaning: "yardı", semantic: "temel eylem", lessons: ["L06"] },
    ],
    cross_refs: [
      { lesson: "L06", verse: "113:1", form: "الفَلَقِ", note: "şafak — karanlığın yarılması" },
    ],
    turkish_traces: [],
  },
  "ن-ص-ر": {
    core: "yardım etmek, zafer vermek",
    quran_count: 158,
    derivatives: [
      { form: "نَصْر", pattern: "فَعْل", type: "masdar", meaning: "yardım, zafer" },
      { form: "نَاصِر", pattern: "فَاعِل", type: "ism-i fâil", meaning: "yardım eden" },
      { form: "أَنْصَار", pattern: "أَفْعَال", type: "cem", meaning: "yardımcılar" },
      { form: "مَنْصُور", pattern: "مَفْعُول", type: "ism-i mef'ûl", meaning: "zafer kazanmış" },
    ],
    bab_chain: [
      { bab: "I", form: "نَصَرَ/يَنْصُرُ", meaning: "yardım etti", semantic: "temel eylem", lessons: ["L09"] },
      { bab: "X", form: "اِسْتَنْصَرَ", meaning: "yardım istedi", semantic: "talep", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L09", verse: "110:1", form: "نَصْرُ", note: "Allah'ın yardımı" },
    ],
    turkish_traces: ["nasr", "nusret", "Mansûr", "ensâr"],
  },
  "و-ح-د": {
    core: "bir olmak, birlik",
    quran_count: 68,
    derivatives: [
      { form: "أَحَد", pattern: "أَفْعَل", type: "isim", meaning: "bir, tek" },
      { form: "وَاحِد", pattern: "فَاعِل", type: "isim", meaning: "bir" },
      { form: "وَحْدَانِيَّة", pattern: "—", type: "masdar", meaning: "birlik" },
      { form: "تَوْحِيد", pattern: "تَفْعِيل", type: "masdar (II)", meaning: "tevhîd" },
    ],
    bab_chain: [
      { bab: "II", form: "وَحَّدَ/يُوَحِّدُ", meaning: "birledi", semantic: "teksîr", lessons: ["L08"] },
    ],
    cross_refs: [
      { lesson: "L08", verse: "112:1", form: "أَحَدٌ", note: "Allah birdir" },
    ],
    turkish_traces: ["tevhîd", "vahdet", "vahdâniyyet"],
  },
  "و-ز-ن": {
    core: "tartmak, ölçmek",
    quran_count: 23,
    derivatives: [
      { form: "وَزْن", pattern: "فَعْل", type: "masdar", meaning: "tartı, ölçü" },
      { form: "مِيزَان", pattern: "مِفْعَال", type: "isim", meaning: "terazi" },
      { form: "مَوَازِين", pattern: "—", type: "cem", meaning: "teraziler" },
    ],
    bab_chain: [
      { bab: "I", form: "وَزَنَ/يَزِنُ", meaning: "tarttı", semantic: "temel eylem", lessons: ["L14"] },
    ],
    cross_refs: [
      { lesson: "L14", verse: "101:6", form: "مَوَازِينُهُ", note: "tartıları — cem, muzâf" },
    ],
    turkish_traces: ["vezin", "mîzân", "vezne"],
  },
  "ث-ق-ل": {
    core: "ağırlaşmak, ağırlık",
    quran_count: 23,
    derivatives: [
      { form: "ثِقْل", pattern: "فِعْل", type: "masdar", meaning: "ağırlık" },
      { form: "مِثْقَال", pattern: "مِفْعَال", type: "isim", meaning: "ağırlık ölçüsü, miskal" },
      { form: "أَثْقَال", pattern: "أَفْعَال", type: "cem", meaning: "ağırlıklar" },
    ],
    bab_chain: [
      { bab: "I", form: "ثَقُلَ/يَثْقُلُ", meaning: "ağırlaştı", semantic: "temel eylem", lessons: ["L14", "L15"] },
    ],
    cross_refs: [
      { lesson: "L14", verse: "101:6", form: "ثَقُلَتْ", note: "ağır geldi — tartılar" },
      { lesson: "L15", verse: "99:2", form: "أَثْقَالَهَا", note: "ağırlıklarını — cem" },
    ],
    turkish_traces: ["sakîl", "miskal"],
  },
  "ي-س-ر": {
    core: "kolaylık, kolaylaştırmak",
    quran_count: 43,
    derivatives: [
      { form: "يُسْر", pattern: "فُعْل", type: "isim", meaning: "kolaylık" },
      { form: "يَسِير", pattern: "فَعِيل", type: "sıfat", meaning: "kolay" },
      { form: "تَيْسِير", pattern: "تَفْعِيل", type: "masdar (II)", meaning: "kolaylaştırma" },
    ],
    bab_chain: [
      { bab: "I", form: "يَسُرَ/يَيْسُرُ", meaning: "kolay oldu", semantic: "temel eylem", lessons: ["L20"] },
      { bab: "II", form: "يَسَّرَ/يُيَسِّرُ", meaning: "kolaylaştırdı", semantic: "teksîr", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L20", verse: "94:5-6", form: "يُسْرًا", note: "zorlukla beraber kolaylık (nekre → iki farklı kolaylık)" },
    ],
    turkish_traces: ["yüsr", "teysîr"],
  },
  "ع-س-ر": {
    core: "zorluk, güçlük",
    quran_count: 12,
    derivatives: [
      { form: "عُسْر", pattern: "فُعْل", type: "isim", meaning: "zorluk" },
      { form: "عَسِير", pattern: "فَعِيل", type: "sıfat", meaning: "güç, zor" },
    ],
    bab_chain: [
      { bab: "I", form: "عَسُرَ/يَعْسُرُ", meaning: "zorlaştı", semantic: "temel eylem", lessons: ["L20"] },
    ],
    cross_refs: [
      { lesson: "L20", verse: "94:5-6", form: "العُسْرِ", note: "zorluk (marife → aynı zorluk)" },
    ],
    turkish_traces: [],
  },
  "غ-ف-ر": {
    core: "örtmek, bağışlamak",
    quran_count: 234,
    derivatives: [
      { form: "غُفْرَان", pattern: "فُعْلَان", type: "masdar", meaning: "bağışlama" },
      { form: "غَفُور", pattern: "فَعُول", type: "mübalağa", meaning: "çok bağışlayan" },
      { form: "مَغْفِرَة", pattern: "مَفْعِلَة", type: "masdar", meaning: "mağfiret" },
      { form: "اِسْتِغْفَار", pattern: "اِسْتِفْعَال", type: "masdar (X)", meaning: "bağışlanma dileme" },
    ],
    bab_chain: [
      { bab: "I", form: "غَفَرَ/يَغْفِرُ", meaning: "örttü, bağışladı", semantic: "temel eylem", lessons: [] },
      { bab: "X", form: "اِسْتَغْفَرَ/يَسْتَغْفِرُ", meaning: "bağışlanma diledi", semantic: "talep", lessons: [] },
    ],
    cross_refs: [],
    turkish_traces: ["mağfiret", "gufran", "istiğfâr", "Gaffâr"],
  },
  "ح-ك-م": {
    core: "hükmetmek, yargılamak, hikmet",
    quran_count: 210,
    derivatives: [
      { form: "حُكْم", pattern: "فُعْل", type: "masdar", meaning: "hüküm" },
      { form: "حَكِيم", pattern: "فَعِيل", type: "mübalağa", meaning: "hikmetli" },
      { form: "حِكْمَة", pattern: "فِعْلَة", type: "isim", meaning: "hikmet" },
      { form: "حَاكِم", pattern: "فَاعِل", type: "ism-i fâil", meaning: "hâkim" },
      { form: "أَحْكَم", pattern: "أَفْعَل", type: "ism-i tafdîl", meaning: "en adil hâkim" },
    ],
    bab_chain: [
      { bab: "I", form: "حَكَمَ/يَحْكُمُ", meaning: "hükmetti", semantic: "temel eylem", lessons: ["L18"] },
    ],
    cross_refs: [
      { lesson: "L18", verse: "95:8", form: "أَحْكَمِ", note: "en adil hâkim — ism-i tafdîl" },
    ],
    turkish_traces: ["hüküm", "hikmet", "hâkim", "mahkeme"],
  },
  "ح-س-ن": {
    core: "güzel olmak, iyilik",
    quran_count: 194,
    derivatives: [
      { form: "حُسْن", pattern: "فُعْل", type: "masdar", meaning: "güzellik" },
      { form: "حَسَن", pattern: "فَعَل", type: "sıfat", meaning: "güzel" },
      { form: "أَحْسَن", pattern: "أَفْعَل", type: "ism-i tafdîl", meaning: "en güzel" },
      { form: "إِحْسَان", pattern: "إِفْعَال", type: "masdar (IV)", meaning: "ihsan, iyilik" },
      { form: "مُحْسِن", pattern: "مُفْعِل", type: "ism-i fâil (IV)", meaning: "iyilik eden" },
    ],
    bab_chain: [
      { bab: "I", form: "حَسُنَ/يَحْسُنُ", meaning: "güzel oldu", semantic: "temel eylem", lessons: ["L18"] },
      { bab: "IV", form: "أَحْسَنَ/يُحْسِنُ", meaning: "iyilik etti", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L18", verse: "95:4", form: "أَحْسَنِ", note: "en güzel kıvam — ism-i tafdîl" },
    ],
    turkish_traces: ["hüsn", "ihsan", "muhsin", "Hasan"],
  },
  "ج-ع-ل": {
    core: "yapmak, kılmak, dönüştürmek",
    quran_count: 346,
    derivatives: [],
    bab_chain: [
      { bab: "I", form: "جَعَلَ/يَجْعَلُ", meaning: "yaptı, kıldı", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [],
    turkish_traces: [],
  },
  "ن-و-ر": {
    core: "aydınlık, ışık",
    quran_count: 43,
    derivatives: [
      { form: "نُور", pattern: "فُعْل", type: "isim", meaning: "nur, ışık" },
      { form: "مُنِير", pattern: "مُفْعِل", type: "ism-i fâil (IV)", meaning: "aydınlatan" },
      { form: "نَار", pattern: "فَعْل/فَاعِل", type: "isim", meaning: "ateş" },
    ],
    bab_chain: [
      { bab: "I", form: "نَارَ/يَنُورُ", meaning: "aydınlandı", semantic: "temel eylem", lessons: [] },
      { bab: "IV", form: "أَنَارَ/يُنِيرُ", meaning: "aydınlattı", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [],
    turkish_traces: ["nur", "tenvîr", "Münîr", "nâr"],
  },
  "ت-و-ب": {
    core: "dönmek, tövbe etmek",
    quran_count: 87,
    derivatives: [
      { form: "تَوْبَة", pattern: "فَعْلَة", type: "masdar", meaning: "tövbe" },
      { form: "تَوَّاب", pattern: "فَعَّال", type: "mübalağa", meaning: "tövbeleri çok kabul eden" },
    ],
    bab_chain: [
      { bab: "I", form: "تَابَ/يَتُوبُ", meaning: "döndü (tövbe etti)", semantic: "temel eylem", lessons: ["L49"] },
    ],
    cross_refs: [
      { lesson: "L49", verse: "110:3", form: "تَوَّابًا", note: "tövbeleri çok kabul eden — فَعَّال mübalağa" },
    ],
    turkish_traces: ["tövbe", "Tevvâb"],
  },
  "ز-ل-ز-ل": {
    core: "şiddetle sarsmak",
    quran_count: 4,
    derivatives: [
      { form: "زِلْزَال", pattern: "فِعْلَال", type: "masdar", meaning: "sarsıntı, deprem" },
      { form: "زُلْزِلَ", pattern: "فُعْلِلَ", type: "meçhul fiil", meaning: "sarsıldı" },
    ],
    bab_chain: [
      { bab: "rubâî", form: "زَلْزَلَ/يُزَلْزِلُ", meaning: "sarstı", semantic: "tekrar — şiddet", lessons: ["L15"] },
    ],
    cross_refs: [
      { lesson: "L15", verse: "99:1", form: "زُلْزِلَتِ", note: "sarsıldı — meçhul, müennes" },
    ],
    turkish_traces: ["zelzele"],
  },
  "س-ل-م": {
    core: "selâmet, barış, teslim",
    quran_count: 140,
    derivatives: [
      { form: "سَلَام", pattern: "فَعَال", type: "masdar", meaning: "selâm, barış" },
      { form: "إِسْلَام", pattern: "إِفْعَال", type: "masdar (IV)", meaning: "teslim olma" },
      { form: "مُسْلِم", pattern: "مُفْعِل", type: "ism-i fâil (IV)", meaning: "teslim olan" },
      { form: "سَلِيم", pattern: "فَعِيل", type: "sıfat", meaning: "selîm, sağlam" },
    ],
    bab_chain: [
      { bab: "I", form: "سَلِمَ/يَسْلَمُ", meaning: "selâmete erdi", semantic: "temel eylem", lessons: ["L17"] },
      { bab: "IV", form: "أَسْلَمَ/يُسْلِمُ", meaning: "teslim oldu", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L17", verse: "97:5", form: "سَلَامٌ", note: "o gece selâmettir" },
    ],
    turkish_traces: ["selâm", "İslâm", "müslim", "teslîm", "selâmet"],
  },
  "ر-غ-ب": {
    core: "istemek, arzulamak, yönelmek",
    quran_count: 8,
    derivatives: [
      { form: "رَغْبَة", pattern: "فَعْلَة", type: "masdar", meaning: "arzu, istek" },
    ],
    bab_chain: [
      { bab: "I", form: "رَغِبَ/يَرْغَبُ", meaning: "istedi / yöneldi", semantic: "temel eylem", lessons: ["L20"] },
    ],
    cross_refs: [
      { lesson: "L20", verse: "94:8", form: "فَارْغَبْ", note: "yönel — emir (رَغِبَ → اِرْغَبْ)" },
    ],
    turkish_traces: ["rağbet"],
  },
  // ═══ L21-L23 (Seviye 3) Kökleri ═══
  "و-ل-ي": {
    core: "yakın olmak, yönetmek, velâyet",
    quran_count: 233,
    derivatives: [
      { form: "وَلِيّ", pattern: "فَعِيل", type: "isim", meaning: "veli, dost, koruyucu" },
      { form: "مَوْلَى", pattern: "مَفْعَل", type: "isim", meaning: "efendi, sahip" },
      { form: "وَلَايَة", pattern: "فَعَالَة", type: "masdar", meaning: "velâyet" },
    ],
    bab_chain: [
      { bab: "I", form: "وَلِيَ/يَلِي", meaning: "yakın oldu", semantic: "temel eylem", lessons: [] },
      { bab: "V", form: "تَوَلَّى/يَتَوَلَّى", meaning: "yüz çevirdi / üstlendi", semantic: "mutâva'at", lessons: ["L21"] },
    ],
    cross_refs: [
      { lesson: "L21", verse: "80:1", form: "تَوَلَّى", note: "yüz çevirdi — V. bâb" },
    ],
    turkish_traces: ["veli", "velâyet", "mevlâ", "evliyâ"],
  },
  "ز-ك-و": {
    core: "temizlenmek, arınmak, büyümek",
    quran_count: 59,
    derivatives: [
      { form: "زَكَاة", pattern: "فَعَالَة", type: "masdar", meaning: "zekât (arındıran)" },
      { form: "تَزْكِيَة", pattern: "تَفْعِلَة", type: "masdar (II)", meaning: "tezkiye, arındırma" },
    ],
    bab_chain: [
      { bab: "I", form: "زَكَا/يَزْكُو", meaning: "arındı", semantic: "temel eylem", lessons: [] },
      { bab: "II", form: "زَكَّى/يُزَكِّي", meaning: "arındırdı", semantic: "ta'diye", lessons: [] },
      { bab: "V", form: "تَزَكَّى/يَتَزَكَّى", meaning: "arınmaya çalıştı", semantic: "tekellüf", lessons: ["L21"] },
    ],
    cross_refs: [
      { lesson: "L21", verse: "80:3", form: "يَزَّكَّى", note: "arınır — V. bâb (idğâm)" },
    ],
    turkish_traces: ["zekât", "tezkiye"],
  },
  "ذ-ك-ر": {
    core: "anmak, hatırlamak, zikir",
    quran_count: 292,
    derivatives: [
      { form: "ذِكْر", pattern: "فِعْل", type: "masdar", meaning: "zikir, anma" },
      { form: "ذِكْرَى", pattern: "فِعْلَى", type: "masdar", meaning: "hatırlama, öğüt" },
      { form: "تَذْكِرَة", pattern: "تَفْعِلَة", type: "isim", meaning: "tezkire, hatırlatıcı" },
    ],
    bab_chain: [
      { bab: "I", form: "ذَكَرَ/يَذْكُرُ", meaning: "andı", semantic: "temel eylem", lessons: [] },
      { bab: "V", form: "تَذَكَّرَ/يَتَذَكَّرُ", meaning: "hatırladı", semantic: "mutâva'at", lessons: ["L21"] },
    ],
    cross_refs: [
      { lesson: "L21", verse: "80:4", form: "يَذَّكَّرُ", note: "hatırlar — V. bâb (idğâm)" },
    ],
    turkish_traces: ["zikir", "tezkire", "müzakere"],
  },
  "غ-ن-ي": {
    core: "zengin olmak, müstağnî olmak",
    quran_count: 73,
    derivatives: [
      { form: "غَنِيّ", pattern: "فَعِيل", type: "sıfat", meaning: "zengin" },
      { form: "اِسْتِغْنَاء", pattern: "اِسْتِفْعَال", type: "masdar (X)", meaning: "müstağnîlik" },
    ],
    bab_chain: [
      { bab: "I", form: "غَنِيَ/يَغْنَى", meaning: "zengin oldu", semantic: "temel eylem", lessons: [] },
      { bab: "X", form: "اِسْتَغْنَى/يَسْتَغْنِي", meaning: "kendini müstağnî saydı", semantic: "zannetme", lessons: ["L21"] },
    ],
    cross_refs: [
      { lesson: "L21", verse: "80:5", form: "اسْتَغْنَى", note: "kendini müstağnî saydı — X. bâb" },
    ],
    turkish_traces: ["ganî", "istiğnâ"],
  },
  "س-ب-ح": {
    core: "yüzmek, tesbîh etmek, tenzîh",
    quran_count: 92,
    derivatives: [
      { form: "سُبْحَان", pattern: "فُعْلَان", type: "masdar", meaning: "sübhân, tenzîh" },
      { form: "تَسْبِيح", pattern: "تَفْعِيل", type: "masdar (II)", meaning: "tesbîh" },
      { form: "مُسَبِّح", pattern: "مُفَعِّل", type: "ism-i fâil (II)", meaning: "tesbîh eden" },
    ],
    bab_chain: [
      { bab: "I", form: "سَبَحَ/يَسْبَحُ", meaning: "yüzdü", semantic: "temel eylem", lessons: [] },
      { bab: "II", form: "سَبَّحَ/يُسَبِّحُ", meaning: "tesbîh etti", semantic: "ta'diye", lessons: ["L23"] },
    ],
    cross_refs: [
      { lesson: "L23", verse: "87:1", form: "سَبِّحِ", note: "tesbîh et — II. bâb emir" },
    ],
    turkish_traces: ["sübhân", "tesbîh", "tesbih"],
  },
  "ع-ل-و": {
    core: "yükselmek, yüce olmak",
    quran_count: 70,
    derivatives: [
      { form: "عُلُوّ", pattern: "فُعُول", type: "masdar", meaning: "yücelik" },
      { form: "أَعْلَى", pattern: "أَفْعَل", type: "ism-i tafdîl", meaning: "en yüce" },
      { form: "عُلْيَا", pattern: "فُعْلَى", type: "ism-i tafdîl (müen.)", meaning: "en yüce (dişil)" },
      { form: "عَلِيّ", pattern: "فَعِيل", type: "sıfat", meaning: "yüce" },
      { form: "تَعَالَى", pattern: "تَفَاعَلَ", type: "fiil (VI)", meaning: "yüceltildi" },
    ],
    bab_chain: [
      { bab: "I", form: "عَلَا/يَعْلُو", meaning: "yüceldi", semantic: "temel eylem", lessons: ["L23"] },
    ],
    cross_refs: [
      { lesson: "L23", verse: "87:1", form: "الأَعْلَى", note: "en yüce — ism-i tafdîl" },
    ],
    turkish_traces: ["a'lâ", "ulvî", "Alî", "teâlâ"],
  },
  "ق-ر-أ": {
    core: "okumak, toplamak, kıraat",
    quran_count: 88,
    derivatives: [
      { form: "قُرْآن", pattern: "فُعْلَان", type: "isim", meaning: "Kur'ân (toplanan/okunan)" },
      { form: "قِرَاءَة", pattern: "فِعَالَة", type: "masdar", meaning: "okuma, kıraat" },
      { form: "قَارِئ", pattern: "فَاعِل", type: "ism-i fâil", meaning: "okuyan" },
    ],
    bab_chain: [
      { bab: "I", form: "قَرَأَ/يَقْرَأُ", meaning: "okudu", semantic: "temel eylem", lessons: [] },
      { bab: "IV", form: "أَقْرَأَ/يُقْرِئُ", meaning: "okuttu", semantic: "ta'diye", lessons: ["L23"] },
    ],
    cross_refs: [
      { lesson: "L23", verse: "87:6", form: "سَنُقْرِئُكَ", note: "sana okutacağız — IV. bâb" },
    ],
    turkish_traces: ["Kur'ân", "kıraat", "kâri'"],
  },
  // ─── L24-L26 Kökleri ───
  "س-أ-ل": {
    core: "sormak, istemek",
    quran_count: 129,
    derivatives: [
      { form: "سُؤَال", pattern: "فُعَال", type: "masdar", meaning: "soru" },
      { form: "سَائِل", pattern: "فَاعِل", type: "ism-i fâil", meaning: "soran, isteyen" },
      { form: "مَسْأَلَة", pattern: "مَفْعَلَة", type: "ism-i mekân/masdar", meaning: "mesele, sorun" },
    ],
    bab_chain: [
      { bab: "I", form: "سَأَلَ/يَسْأَلُ", meaning: "sordu", semantic: "temel eylem", lessons: [] },
      { bab: "VI", form: "تَسَاءَلَ/يَتَسَاءَلُ", meaning: "birbirine sordu", semantic: "karşılıklılık", lessons: ["L24"] },
    ],
    cross_refs: [
      { lesson: "L24", verse: "78:1", form: "يَتَسَاءَلُونَ", note: "VI. bâb — birbirlerine soruyorlar" },
    ],
    turkish_traces: ["sual", "mesele"],
  },
  "خ-ل-ف": {
    core: "arkada kalmak, yerine geçmek, farklı olmak",
    quran_count: 127,
    derivatives: [
      { form: "خَلِيفَة", pattern: "فَعِيلَة", type: "isim", meaning: "halife, halef" },
      { form: "اِخْتِلَاف", pattern: "اِفْتِعَال", type: "masdar (VIII)", meaning: "ihtilâf, ayrılık" },
      { form: "مُخْتَلِف", pattern: "مُفْتَعِل", type: "ism-i fâil (VIII)", meaning: "farklı düşünen" },
    ],
    bab_chain: [
      { bab: "I", form: "خَلَفَ/يَخْلُفُ", meaning: "yerine geçti", semantic: "temel eylem", lessons: [] },
      { bab: "VIII", form: "اِخْتَلَفَ/يَخْتَلِفُ", meaning: "ihtilâf etti", semantic: "dönüşlü/karşılıklı", lessons: ["L24"] },
    ],
    cross_refs: [
      { lesson: "L24", verse: "78:3", form: "مُخْتَلِفُونَ", note: "ihtilâf edenler — VIII. bâb ism-i fâil" },
    ],
    turkish_traces: ["halife", "halef", "muhâlefet", "ihtilâf"],
  },
  "ن-ز-ع": {
    core: "çekip çıkarmak, koparmak",
    quran_count: 11,
    derivatives: [
      { form: "نَازِع", pattern: "فَاعِل", type: "ism-i fâil", meaning: "çekip çıkaran" },
      { form: "نَزْع", pattern: "فَعْل", type: "masdar", meaning: "çekip çıkarma" },
    ],
    bab_chain: [
      { bab: "I", form: "نَزَعَ/يَنْزِعُ", meaning: "çekip çıkardı", semantic: "temel eylem", lessons: ["L25"] },
    ],
    cross_refs: [
      { lesson: "L25", verse: "79:1", form: "النَّازِعَات", note: "çekip çıkaranlar — ism-i fâil cem-i müennes" },
    ],
    turkish_traces: ["nez' (çıkarma)"],
  },
  "ف-ط-ر": {
    core: "yarmak, ilk açmak, yaratmak",
    quran_count: 20,
    derivatives: [
      { form: "فِطْرَة", pattern: "فِعْلَة", type: "masdar/isim", meaning: "yaratılış, fıtrat" },
      { form: "فَاطِر", pattern: "فَاعِل", type: "ism-i fâil", meaning: "yaratan (gökleri ve yeri)" },
      { form: "اِنْفِطَار", pattern: "اِنْفِعَال", type: "masdar (VII)", meaning: "yarılma" },
    ],
    bab_chain: [
      { bab: "I", form: "فَطَرَ/يَفْطُرُ", meaning: "yarattı, yardı", semantic: "temel eylem", lessons: [] },
      { bab: "VII", form: "اِنْفَطَرَ/يَنْفَطِرُ", meaning: "yarıldı", semantic: "edilgen/kendiliğinden", lessons: ["L26"] },
    ],
    cross_refs: [
      { lesson: "L26", verse: "82:1", form: "اِنْفَطَرَتْ", note: "gök yarıldı — VII. bâb" },
    ],
    turkish_traces: ["fıtrat", "fıtrî", "iftar"],
  },
  "ف-ج-ر": {
    core: "yarmak, fışkırtmak, patlatmak",
    quran_count: 13,
    derivatives: [
      { form: "فَجْر", pattern: "فَعْل", type: "masdar/isim", meaning: "tan, fecir" },
      { form: "اِنْفِجَار", pattern: "اِنْفِعَال", type: "masdar (VII)", meaning: "patlama, fışkırma" },
    ],
    bab_chain: [
      { bab: "II", form: "فَجَّرَ/يُفَجِّرُ", meaning: "patlattı, akıttı", semantic: "çoğaltma/yoğunluk", lessons: ["L26"] },
    ],
    cross_refs: [
      { lesson: "L26", verse: "82:3", form: "فُجِّرَتْ", note: "denizler patlatıldı — II. bâb meçhul" },
    ],
    turkish_traces: ["fecir", "fücûr"],
  },
  "غ-ر-ر": {
    core: "aldatmak, kandırmak",
    quran_count: 27,
    derivatives: [
      { form: "غُرُور", pattern: "فُعُول", type: "masdar", meaning: "aldanma, gurur" },
      { form: "غَرُور", pattern: "فَعُول", type: "mübalağa", meaning: "çok aldatan (şeytan)" },
    ],
    bab_chain: [
      { bab: "I", form: "غَرَّ/يَغُرُّ", meaning: "aldattı", semantic: "temel eylem", lessons: ["L26"] },
    ],
    cross_refs: [
      { lesson: "L26", verse: "82:6", form: "غَرَّكَ", note: "seni aldatan ne? — I. bâb" },
    ],
    turkish_traces: ["gurur", "mağrur", "garip"],
  },
  "ك-ر-م": {
    core: "cömert olmak, şerefli olmak",
    quran_count: 47,
    derivatives: [
      { form: "كَرِيم", pattern: "فَعِيل", type: "sıfat", meaning: "cömert, kerem sahibi" },
      { form: "إِكْرَام", pattern: "إِفْعَال", type: "masdar (IV)", meaning: "ikram, ağırlama" },
      { form: "أَكْرَم", pattern: "أَفْعَل", type: "ism-i tafdîl / IV. bâb", meaning: "en cömert / ikram etti" },
    ],
    bab_chain: [
      { bab: "I", form: "كَرُمَ/يَكْرُمُ", meaning: "kerem sahibi oldu", semantic: "temel eylem", lessons: [] },
      { bab: "IV", form: "أَكْرَمَ/يُكْرِمُ", meaning: "ikram etti", semantic: "geçişli yapma", lessons: ["L26"] },
    ],
    cross_refs: [
      { lesson: "L26", verse: "82:6", form: "الكَرِيمِ", note: "cömert Rabbin — فَعِيل sıfat" },
    ],
    turkish_traces: ["kerem", "kerîm", "ikrâm", "mükerrem"],
  },
  // ══════════════════════════════════════════════════════════
  // L27-L30 KÖKLERİ
  // ══════════════════════════════════════════════════════════
  "ط-ف-ف": {
    core: "az olmak, eksik tartmak",
    quran_count: 1,
    derivatives: [
      { form: "مُطَفِّف", pattern: "مُفَعِّل", type: "ism-i fâil (II)", meaning: "eksik tartan" },
      { form: "تَطْفِيف", pattern: "تَفْعِيل", type: "masdar (II)", meaning: "eksik tartma" },
    ],
    bab_chain: [
      { bab: "II", form: "طَفَّفَ/يُطَفِّفُ", meaning: "eksik tarttı", semantic: "teksîr", lessons: ["L27"] },
    ],
    cross_refs: [
      { lesson: "L27", verse: "83:1", form: "الْمُطَفِّفِينَ", note: "eksik tartanlar — II. bâb ism-i fâil cem" },
    ],
    turkish_traces: ["tatfîf"],
  },
  "ك-ي-ل": {
    core: "ölçmek",
    quran_count: 18,
    derivatives: [
      { form: "كَيْل", pattern: "فَعْل", type: "masdar", meaning: "ölçme" },
      { form: "مِكْيَال", pattern: "مِفْعَال", type: "ism-i âlet", meaning: "ölçek" },
    ],
    bab_chain: [
      { bab: "I", form: "كَالَ/يَكِيلُ", meaning: "ölçtü", semantic: "temel eylem", lessons: ["L27"] },
      { bab: "VIII", form: "اِكْتَالَ/يَكْتَالُ", meaning: "kendi için ölçtü", semantic: "kendine dönüş", lessons: ["L27"] },
    ],
    cross_refs: [
      { lesson: "L27", verse: "83:2", form: "اكْتَالُوا", note: "kendi lehlerine ölçtüler — VIII. bâb" },
      { lesson: "L27", verse: "83:3", form: "كَالُوهُمْ", note: "onlara ölçtüler — I. bâb" },
    ],
    turkish_traces: ["kile (ölçü birimi)"],
  },
  "و-ف-ي": {
    core: "tam/eksiksiz olmak, vefâ",
    quran_count: 54,
    derivatives: [
      { form: "وَفَاء", pattern: "فَعَال", type: "masdar", meaning: "vefa, sadakat" },
      { form: "اِسْتِيفَاء", pattern: "اِسْتِفْعَال", type: "masdar (X)", meaning: "tam alma" },
    ],
    bab_chain: [
      { bab: "I", form: "وَفَى/يَفِي", meaning: "vefâ etti, yerine getirdi", semantic: "temel eylem", lessons: [] },
      { bab: "X", form: "اِسْتَوْفَى/يَسْتَوْفِي", meaning: "tam almayı istedi", semantic: "talep", lessons: ["L27"] },
    ],
    cross_refs: [
      { lesson: "L27", verse: "83:2", form: "يَسْتَوْفُونَ", note: "tam alıyorlar — X. bâb" },
    ],
    turkish_traces: ["vefa", "vefat", "istîfa"],
  },
  "خ-س-ر": {
    core: "zarara uğramak, kaybetmek",
    quran_count: 65,
    derivatives: [
      { form: "خُسْر", pattern: "فُعْل", type: "masdar", meaning: "ziyan, kayıp" },
      { form: "خَاسِر", pattern: "فَاعِل", type: "ism-i fâil", meaning: "zarara uğrayan" },
      { form: "خُسْرَان", pattern: "فُعْلَان", type: "masdar", meaning: "büyük kayıp" },
    ],
    bab_chain: [
      { bab: "I", form: "خَسِرَ/يَخْسَرُ", meaning: "zarara uğradı", semantic: "temel eylem", lessons: ["L06"] },
      { bab: "IV", form: "أَخْسَرَ/يُخْسِرُ", meaning: "zarara uğrattı, eksik verdi", semantic: "ta'diye", lessons: ["L27"] },
    ],
    cross_refs: [
      { lesson: "L06", verse: "103:2", form: "خُسْرٍ", note: "insanlar hüsrandadır — masdar" },
      { lesson: "L27", verse: "83:3", form: "يُخْسِرُونَ", note: "eksiltirler — IV. bâb" },
    ],
    turkish_traces: ["husrân", "hâsir", "hasâret"],
  },
  "ر-ي-ن": {
    core: "kaplamak, pas basmak",
    quran_count: 1,
    derivatives: [
      { form: "رَيْن", pattern: "فَعْل", type: "masdar", meaning: "pas, kaplama, perde" },
    ],
    bab_chain: [
      { bab: "I", form: "رَانَ/يَرِينُ", meaning: "kapladı, paslandırdı", semantic: "temel eylem", lessons: ["L27"] },
    ],
    cross_refs: [
      { lesson: "L27", verse: "83:14", form: "رَانَ", note: "günahlar kalpleri kapladı — I. bâb" },
    ],
    turkish_traces: [],
  },
  "ب-ر-ج": {
    core: "açığa çıkmak, yüksek bina",
    quran_count: 7,
    derivatives: [
      { form: "بُرُوج", pattern: "فُعُول", type: "cem", meaning: "burçlar, kuleler" },
      { form: "بَارِج", pattern: "فَاعِل", type: "ism-i fâil", meaning: "açığa çıkan" },
    ],
    bab_chain: [
      { bab: "I", form: "بَرَجَ/يَبْرُجُ", meaning: "açığa çıktı, yüceldi", semantic: "temel eylem", lessons: ["L28"] },
    ],
    cross_refs: [
      { lesson: "L28", verse: "85:1", form: "البُرُوجِ", note: "burçlar sahibi gök — فُعُول cem" },
    ],
    turkish_traces: ["burç (kule, yıldız menzili)", "teberrüc"],
  },
  "و-ع-د": {
    core: "söz vermek, vaad etmek",
    quran_count: 153,
    derivatives: [
      { form: "وَعْد", pattern: "فَعْل", type: "masdar", meaning: "vaad, söz" },
      { form: "مَوْعُود", pattern: "مَفْعُول", type: "ism-i mef'ûl", meaning: "vaad edilen" },
      { form: "مِيعَاد", pattern: "مِفْعَال", type: "isim", meaning: "buluşma yeri/zamanı" },
    ],
    bab_chain: [
      { bab: "I", form: "وَعَدَ/يَعِدُ", meaning: "vaad etti", semantic: "temel eylem", lessons: ["L28"] },
    ],
    cross_refs: [
      { lesson: "L28", verse: "85:2", form: "المَوْعُودِ", note: "vaad edilen gün — مَفْعُول" },
    ],
    turkish_traces: ["vaad", "mev'ûd", "mîâd"],
  },
  "ف-ت-ن": {
    core: "sınamak, ateşle eritme",
    quran_count: 30,
    derivatives: [
      { form: "فِتْنَة", pattern: "فِعْلَة", type: "masdar/isim", meaning: "fitne, sınama" },
      { form: "مَفْتُون", pattern: "مَفْعُول", type: "ism-i mef'ûl", meaning: "sınanan, tutkun" },
    ],
    bab_chain: [
      { bab: "I", form: "فَتَنَ/يَفْتِنُ", meaning: "sınadı, ateşle yaktı", semantic: "temel eylem", lessons: ["L28"] },
    ],
    cross_refs: [
      { lesson: "L28", verse: "85:10", form: "فَتَنُوا", note: "müminleri sınadılar/yaktılar — I. bâb" },
    ],
    turkish_traces: ["fitne", "meftûn (tutkun)"],
  },
  "ت-و-ب": {
    core: "dönmek, tövbe etmek",
    quran_count: 87,
    derivatives: [
      { form: "تَوْبَة", pattern: "فَعْلَة", type: "masdar", meaning: "tövbe, dönüş" },
      { form: "تَوَّاب", pattern: "فَعَّال", type: "mübalağa", meaning: "çok tövbe kabul eden" },
    ],
    bab_chain: [
      { bab: "I", form: "تَابَ/يَتُوبُ", meaning: "tövbe etti, döndü", semantic: "temel eylem", lessons: ["L28"] },
    ],
    cross_refs: [
      { lesson: "L28", verse: "85:10", form: "يَتُوبُوا", note: "tövbe etmediler — muzâri meczûm" },
    ],
    turkish_traces: ["tövbe", "tevbe"],
  },
  "ع-م-د": {
    core: "desteklemek, direk",
    quran_count: 7,
    derivatives: [
      { form: "عِمَاد", pattern: "فِعَال", type: "isim", meaning: "sütun, direk" },
      { form: "عَمُود", pattern: "فَعُول", type: "isim", meaning: "direk" },
    ],
    bab_chain: [
      { bab: "I", form: "عَمَدَ/يَعْمِدُ", meaning: "destek oldu, kasıtla yaptı", semantic: "temel eylem", lessons: ["L29"] },
    ],
    cross_refs: [
      { lesson: "L29", verse: "89:7", form: "العِمَادِ", note: "sütunlar — İrem'in devasa yapıları" },
    ],
    turkish_traces: ["amûd (direk)", "i'timâd (güvenme)"],
  },
  "ق-س-م": {
    core: "bölmek, paylaştırmak, yemin etmek",
    quran_count: 33,
    derivatives: [
      { form: "قَسَم", pattern: "فَعَل", type: "masdar", meaning: "yemin, kasem" },
      { form: "قِسْمَة", pattern: "فِعْلَة", type: "isim", meaning: "kısmet, pay" },
      { form: "تَقْسِيم", pattern: "تَفْعِيل", type: "masdar (II)", meaning: "bölüştürme" },
    ],
    bab_chain: [
      { bab: "I", form: "قَسَمَ/يَقْسِمُ", meaning: "böldü", semantic: "temel eylem", lessons: [] },
      { bab: "IV", form: "أَقْسَمَ/يُقْسِمُ", meaning: "yemin etti", semantic: "ta'diye", lessons: ["L30"] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "90:1", form: "أُقْسِمُ", note: "yemin ederim — IV. bâb muzâri" },
    ],
    turkish_traces: ["kasem (yemin)", "kısmet", "taksîm"],
  },
  "ك-ب-د": {
    core: "karaciğer, zorluk",
    quran_count: 1,
    derivatives: [
      { form: "كَبَد", pattern: "فَعَل", type: "isim", meaning: "zorluk, meşakkat; karaciğer" },
      { form: "مُكَابَدَة", pattern: "مُفَاعَلَة", type: "masdar (III)", meaning: "zorluğa katlanma" },
    ],
    bab_chain: [
      { bab: "I", form: "كَبِدَ/يَكْبَدُ", meaning: "zorlandı", semantic: "temel eylem", lessons: ["L30"] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "90:4", form: "كَبَدٍ", note: "zorluk içinde yaratıldı" },
    ],
    turkish_traces: ["kebed (karaciğer)"],
  },
  "ن-ج-د": {
    core: "yüksek yer, belirgin yol",
    quran_count: 1,
    derivatives: [
      { form: "نَجْد", pattern: "فَعْل", type: "isim", meaning: "yüksek yer, sarp yol" },
    ],
    bab_chain: [
      { bab: "I", form: "نَجَدَ/يَنْجُدُ", meaning: "yüceldi, belirgin oldu", semantic: "temel eylem", lessons: ["L30"] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "90:10", form: "النَّجْدَيْنِ", note: "iki yol (hayır ve şer) — tesniye" },
    ],
    turkish_traces: ["Necid (bölge adı)", "istincâd"],
  },
  // ── L31–L34 Kökleri ──
  "ز-ك-و": {
    core: "temiz olmak, arınmak, büyümek",
    quran_count: 59,
    derivatives: [
      { form: "زَكَاة", pattern: "فَعَالَة", type: "masdar", meaning: "zekât, arınma vergisi" },
      { form: "تَزْكِيَة", pattern: "تَفْعِلَة", type: "masdar (II)", meaning: "arındırma" },
    ],
    bab_chain: [
      { bab: "I", form: "زَكَا/يَزْكُو", meaning: "temiz oldu, büyüdü", semantic: "temel eylem", lessons: [] },
      { bab: "II", form: "زَكَّى/يُزَكِّي", meaning: "arındırdı, temizledi", semantic: "ta'diye", lessons: ["L31"] },
      { bab: "V", form: "تَزَكَّى/يَتَزَكَّى", meaning: "arındı (kendini)", semantic: "mutâva'at", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L31", verse: "91:9", form: "زَكَّاهَا", note: "nefsini arındıran → felâh" },
    ],
    turkish_traces: ["zekât", "tezkiye", "tezekki"],
  },
  "ف-ل-ح": {
    core: "yarmak, başarmak, kurtulmak",
    quran_count: 40,
    derivatives: [
      { form: "فَلَاح", pattern: "فَعَال", type: "masdar", meaning: "kurtuluş, başarı" },
      { form: "مُفْلِح", pattern: "مُفْعِل", type: "ism-i fâil (IV)", meaning: "kurtuluşa eren" },
    ],
    bab_chain: [
      { bab: "I", form: "فَلَحَ/يَفْلَحُ", meaning: "toprağı yardı; başardı", semantic: "temel eylem", lessons: [] },
      { bab: "IV", form: "أَفْلَحَ/يُفْلِحُ", meaning: "kurtuluşa erdi", semantic: "ta'diye", lessons: ["L31"] },
    ],
    cross_refs: [
      { lesson: "L31", verse: "91:9", form: "أَفْلَحَ", note: "nefsini arındıran kurtuluşa erdi" },
    ],
    turkish_traces: ["felâh", "müflih"],
  },
  "ش-ر-ح": {
    core: "açmak, genişletmek, açıklamak",
    quran_count: 4,
    derivatives: [
      { form: "شَرْح", pattern: "فَعْل", type: "masdar", meaning: "açma, açıklama" },
    ],
    bab_chain: [
      { bab: "I", form: "شَرَحَ/يَشْرَحُ", meaning: "açtı, genişletti", semantic: "temel eylem", lessons: ["L34"] },
      { bab: "VII", form: "اِنْشَرَحَ/يَنْشَرِحُ", meaning: "açıldı, genişledi", semantic: "mutâva'at", lessons: ["L34"] },
    ],
    cross_refs: [
      { lesson: "L34", verse: "94:1", form: "نَشْرَحْ", note: "senin göğsünü açmadık mı?" },
    ],
    turkish_traces: ["şerh", "teşrih"],
  },
  "ي-س-ر": {
    core: "kolay olmak, kolaylaştırmak",
    quran_count: 70,
    derivatives: [
      { form: "يُسْر", pattern: "فُعْل", type: "masdar", meaning: "kolaylık" },
      { form: "يَسِير", pattern: "فَعِيل", type: "sıfat-ı müşebbehe", meaning: "kolay" },
      { form: "مُيَسَّر", pattern: "مُفَعَّل", type: "ism-i mef'ûl (II)", meaning: "kolaylaştırılmış" },
    ],
    bab_chain: [
      { bab: "I", form: "يَسُرَ/يَيْسُرُ", meaning: "kolay oldu", semantic: "temel eylem", lessons: [] },
      { bab: "II", form: "يَسَّرَ/يُيَسِّرُ", meaning: "kolaylaştırdı", semantic: "ta'diye", lessons: ["L32", "L34"] },
    ],
    cross_refs: [
      { lesson: "L32", verse: "92:7", form: "فَسَنُيَسِّرُهُ", note: "onu kolaylaştıracağız (II. bâb)" },
      { lesson: "L34", verse: "94:5", form: "يُسْرًا", note: "zorluğun yanında kolaylık" },
    ],
    turkish_traces: ["yüsr", "tesyîr", "meyser"],
  },
  "ض-ح-و": {
    core: "aydınlanmak, kuşluk vakti",
    quran_count: 5,
    derivatives: [
      { form: "ضُحَى", pattern: "فُعَل", type: "isim", meaning: "kuşluk vakti" },
    ],
    bab_chain: [
      { bab: "I", form: "ضَحَا/يَضْحُو", meaning: "güneşe çıktı, aydınlandı", semantic: "temel eylem", lessons: ["L31", "L33"] },
    ],
    cross_refs: [
      { lesson: "L31", verse: "91:1", form: "ضُحَاهَا", note: "güneşin kuşluk aydınlığı" },
      { lesson: "L33", verse: "93:1", form: "وَالضُّحَى", note: "kuşluk vaktine andolsun" },
    ],
    turkish_traces: ["duhâ (kuşluk)"],
  },
  "ق-ه-ر": {
    core: "ezmek, üstün gelmek, kahretmek",
    quran_count: 10,
    derivatives: [
      { form: "قَاهِر", pattern: "فَاعِل", type: "ism-i fâil", meaning: "üstün gelen, kahreden" },
      { form: "قَهَّار", pattern: "فَعَّال", type: "mübalağa", meaning: "çok kahreden (el-Kahhâr)" },
    ],
    bab_chain: [
      { bab: "I", form: "قَهَرَ/يَقْهَرُ", meaning: "ezdi, kahrettti", semantic: "temel eylem", lessons: ["L33"] },
    ],
    cross_refs: [
      { lesson: "L33", verse: "93:9", form: "تَقْهَرْ", note: "yetime hor davranma" },
    ],
    turkish_traces: ["kahır", "kahhâr", "kahretmek"],
  },
  "ح-د-ث": {
    core: "olmak, konuşmak, anlatmak",
    quran_count: 35,
    derivatives: [
      { form: "حَدِيث", pattern: "فَعِيل", type: "isim/sıfat", meaning: "söz, hadis, yeni" },
      { form: "تَحْدِيث", pattern: "تَفْعِيل", type: "masdar (II)", meaning: "anlatma, rivayet" },
    ],
    bab_chain: [
      { bab: "I", form: "حَدَثَ/يَحْدُثُ", meaning: "meydana geldi", semantic: "temel eylem", lessons: [] },
      { bab: "II", form: "حَدَّثَ/يُحَدِّثُ", meaning: "anlattı, haber verdi", semantic: "ta'diye", lessons: ["L33"] },
    ],
    cross_refs: [
      { lesson: "L33", verse: "93:11", form: "فَحَدِّثْ", note: "Rabbinin nimetini anlat!" },
    ],
    turkish_traces: ["hadis", "hadise", "muhaddis"],
  },
  // ── L35-L38 Yeni Kökler ──
  "ح-س-ن": {
    core: "güzel olmak, iyilik etmek",
    quran_count: 194,
    derivatives: [
      { form: "حَسَن", pattern: "فَعَل", type: "sıfat", meaning: "güzel" },
      { form: "أَحْسَن", pattern: "أَفْعَل", type: "ism-i tafdîl", meaning: "en güzel" },
      { form: "إِحْسَان", pattern: "إِفْعَال", type: "masdar (IV)", meaning: "iyilik, ihsan" },
      { form: "مُحْسِن", pattern: "مُفْعِل", type: "ism-i fâil (IV)", meaning: "iyilik eden" },
    ],
    bab_chain: [
      { bab: "I", form: "حَسُنَ/يَحْسُنُ", meaning: "güzel oldu", semantic: "temel eylem", lessons: ["L35"] },
      { bab: "IV", form: "أَحْسَنَ/يُحْسِنُ", meaning: "iyilik etti, güzelleştirdi", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L35", verse: "95:4", form: "أَحْسَنِ", note: "en güzel biçim (ism-i tafdîl muzâf)" },
    ],
    turkish_traces: ["hüsün", "ihsan", "muhsin", "Hasan"],
  },
  "ق-ر-أ": {
    core: "okumak, toplamak",
    quran_count: 88,
    derivatives: [
      { form: "قُرْآن", pattern: "فُعْلَان", type: "masdar/isim", meaning: "Kur'an (okunan)" },
      { form: "قِرَاءَة", pattern: "فِعَالَة", type: "masdar", meaning: "okuma" },
      { form: "قَارِئ", pattern: "فَاعِل", type: "ism-i fâil", meaning: "okuyan" },
    ],
    bab_chain: [
      { bab: "I", form: "قَرَأَ/يَقْرَأُ", meaning: "okudu", semantic: "temel eylem", lessons: ["L36"] },
    ],
    cross_refs: [
      { lesson: "L36", verse: "96:1", form: "اقْرَأْ", note: "Oku! — ilk inen emir" },
      { lesson: "L36", verse: "96:3", form: "اقْرَأْ", note: "Oku! — ikinci tekrar" },
    ],
    turkish_traces: ["Kur'an", "kıraat", "okumak (anlam ödünç)"],
  },
  "ع-ل-ق": {
    core: "asılmak, yapışmak",
    quran_count: 6,
    derivatives: [
      { form: "عَلَق", pattern: "فَعَل", type: "isim", meaning: "asılıp tutunan (embriyo)" },
      { form: "عَلَقَة", pattern: "فَعَلَة", type: "isim", meaning: "kan pıhtısı, yapışan" },
    ],
    bab_chain: [
      { bab: "I", form: "عَلِقَ/يَعْلَقُ", meaning: "asıldı, yapıştı", semantic: "temel eylem", lessons: ["L36"] },
    ],
    cross_refs: [
      { lesson: "L36", verse: "96:2", form: "عَلَقٍ", note: "insanı alaktan (asılıp tutunan) yarattı" },
    ],
    turkish_traces: ["alâka (bağlantı)", "talâk"],
  },
  "ك-ر-م": {
    core: "cömert olmak, ikram etmek",
    quran_count: 47,
    derivatives: [
      { form: "كَرِيم", pattern: "فَعِيل", type: "sıfat-ı müşebbehe", meaning: "cömert, değerli" },
      { form: "أَكْرَم", pattern: "أَفْعَل", type: "ism-i tafdîl", meaning: "en cömert" },
      { form: "إِكْرَام", pattern: "إِفْعَال", type: "masdar (IV)", meaning: "ikram, ağırlama" },
    ],
    bab_chain: [
      { bab: "I", form: "كَرُمَ/يَكْرُمُ", meaning: "cömert/değerli oldu", semantic: "temel eylem", lessons: ["L36"] },
      { bab: "IV", form: "أَكْرَمَ/يُكْرِمُ", meaning: "ikram etti", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L36", verse: "96:3", form: "الأَكْرَمُ", note: "en cömert olan (ism-i tafdîl mutlak)" },
    ],
    turkish_traces: ["kerem", "ikram", "Kerîm"],
  },
  "ب-ي-ن": {
    core: "açık olmak, ayırmak",
    quran_count: 523,
    derivatives: [
      { form: "بَيِّن", pattern: "فَيْعِل", type: "sıfat", meaning: "apaçık" },
      { form: "بَيِّنَة", pattern: "فَيْعِلَة", type: "isim", meaning: "apaçık delil" },
      { form: "بَيَان", pattern: "فَعَال", type: "masdar", meaning: "açıklama" },
      { form: "تِبْيَان", pattern: "تِفْعَال", type: "masdar", meaning: "açıklama, beyan" },
    ],
    bab_chain: [
      { bab: "I", form: "بَانَ/يَبِينُ", meaning: "açık oldu, belirdi", semantic: "temel eylem", lessons: ["L38"] },
      { bab: "II", form: "بَيَّنَ/يُبَيِّنُ", meaning: "açıkladı", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L38", verse: "98:1", form: "البَيِّنَةُ", note: "apaçık delil — surenin adı" },
    ],
    turkish_traces: ["beyan", "beyân etmek", "beyyine"],
  },
  "خ-ل-ص": {
    core: "arınmak, saf olmak",
    quran_count: 32,
    derivatives: [
      { form: "خَالِص", pattern: "فَاعِل", type: "ism-i fâil", meaning: "arınmış, saf" },
      { form: "مُخْلِص", pattern: "مُفْعِل", type: "ism-i fâil (IV)", meaning: "samimiyetle has kılan" },
      { form: "إِخْلَاص", pattern: "إِفْعَال", type: "masdar (IV)", meaning: "ihlas, samimiyet" },
    ],
    bab_chain: [
      { bab: "I", form: "خَلَصَ/يَخْلُصُ", meaning: "arındı, saf oldu", semantic: "temel eylem", lessons: [] },
      { bab: "IV", form: "أَخْلَصَ/يُخْلِصُ", meaning: "samimiyetle has kıldı", semantic: "ta'diye", lessons: ["L38"] },
    ],
    cross_refs: [
      { lesson: "L38", verse: "98:5", form: "مُخْلِصِينَ", note: "dini O'na has kılarak (IV. bâb ism-i fâil, hâl)" },
    ],
    turkish_traces: ["ihlas", "muhlis", "halis"],
  },
  // ── L39-L42 (Seviye 5) ──
  "ز-ل-ز-ل": {
    core: "şiddetle sarsmak (rubâî tekrar kalıbı)",
    quran_count: 3,
    derivatives: [
      { form: "زِلْزَال", pattern: "فِعْلَال", type: "masdar", meaning: "sarsıntı, deprem" },
      { form: "زُلْزِلَ", pattern: "فُعْلِلَ", type: "fiil meçhul", meaning: "sarsıldı" },
    ],
    bab_chain: [
      { bab: "rubâî", form: "زَلْزَلَ/يُزَلْزِلُ", meaning: "şiddetle sarstı", semantic: "tekrar (تضعيف)", lessons: ["L39"] },
    ],
    cross_refs: [
      { lesson: "L39", verse: "99:1", form: "زُلْزِلَتِ", note: "yer sarsıldı — meçhul rubâî" },
      { lesson: "L39", verse: "99:1", form: "زِلْزَالَهَا", note: "sarsıntısıyla — mef'ûl-i mutlak" },
    ],
    turkish_traces: ["zelzele"],
  },
  "ث-ق-ل": {
    core: "ağır olmak, ağırlık",
    quran_count: 23,
    derivatives: [
      { form: "ثَقُلَ", pattern: "فَعُلَ", type: "fiil", meaning: "ağır oldu" },
      { form: "أَثْقَال", pattern: "أَفْعَال", type: "cem", meaning: "ağırlıklar" },
      { form: "مِثْقَال", pattern: "مِفْعَال", type: "ism-i âlet", meaning: "tartı, miktar" },
    ],
    bab_chain: [
      { bab: "I", form: "ثَقُلَ/يَثْقُلُ", meaning: "ağır oldu", semantic: "temel eylem", lessons: ["L39", "L41"] },
    ],
    cross_refs: [
      { lesson: "L39", verse: "99:7", form: "مِثْقَالَ", note: "zerre ağırlığınca — ism-i âlet/ölçü" },
      { lesson: "L39", verse: "99:2", form: "أَثْقَالَهَا", note: "ağırlıklarını (çoğul)" },
      { lesson: "L41", verse: "101:6", form: "ثَقُلَتْ", note: "tartıları ağır geldi" },
    ],
    turkish_traces: ["sakîl (ağır)", "miskal"],
  },
  "ح-د-ث": {
    core: "meydana gelmek, haber vermek, anlatmak",
    quran_count: 37,
    derivatives: [
      { form: "حَدِيث", pattern: "فَعِيل", type: "isim", meaning: "hadis, söz, haber" },
      { form: "حَدَّثَ", pattern: "فَعَّلَ", type: "fiil II. bâb", meaning: "anlattı, haber verdi" },
      { form: "مُحَدِّث", pattern: "مُفَعِّل", type: "ism-i fâil", meaning: "anlatan" },
    ],
    bab_chain: [
      { bab: "I", form: "حَدَثَ/يَحْدُثُ", meaning: "meydana geldi", semantic: "temel eylem", lessons: [] },
      { bab: "II", form: "حَدَّثَ/يُحَدِّثُ", meaning: "anlattı, haber verdi", semantic: "ta'diye", lessons: ["L39"] },
    ],
    cross_refs: [
      { lesson: "L39", verse: "99:4", form: "تُحَدِّثُ", note: "yer haberlerini anlatır — II. bâb muzâri" },
    ],
    turkish_traces: ["hadis", "hadise"],
  },
  "ع-د-و": {
    core: "koşmak, düşman olmak, saldırmak",
    quran_count: 106,
    derivatives: [
      { form: "عَادِيَات", pattern: "فَاعِلَات", type: "ism-i fâil cem", meaning: "koşanlar" },
      { form: "عَدُوّ", pattern: "فَعُول", type: "isim", meaning: "düşman" },
      { form: "عُدْوَان", pattern: "فُعْلَان", type: "masdar", meaning: "saldırganlık" },
    ],
    bab_chain: [
      { bab: "I", form: "عَدَا/يَعْدُو", meaning: "koştu, saldırdı", semantic: "temel eylem", lessons: ["L40"] },
    ],
    cross_refs: [
      { lesson: "L40", verse: "100:1", form: "ٱلْعَادِيَاتِ", note: "koşanlar (atlar) — ism-i fâil çoğul müennes" },
    ],
    turkish_traces: ["adavet (düşmanlık)", "adüvv"],
  },
  "ك-ن-د": {
    core: "nankörlük etmek",
    quran_count: 1,
    derivatives: [
      { form: "كَنُود", pattern: "فَعُول", type: "mübalağa", meaning: "çok nankör" },
    ],
    bab_chain: [
      { bab: "I", form: "كَنَدَ/يَكْنُدُ", meaning: "nankör davrandı", semantic: "temel eylem", lessons: ["L40"] },
    ],
    cross_refs: [
      { lesson: "L40", verse: "100:6", form: "لَكَنُودٌ", note: "insan Rabbine çok nankördür — mübalağa" },
    ],
    turkish_traces: [],
  },
  "ق-ر-ع": {
    core: "vurmak, kapı çalmak",
    quran_count: 5,
    derivatives: [
      { form: "قَارِعَة", pattern: "فَاعِلَة", type: "ism-i fâil", meaning: "kapı çalan (kıyamet)" },
      { form: "قَرَعَ", pattern: "فَعَلَ", type: "fiil", meaning: "vurdu, çaldı" },
    ],
    bab_chain: [
      { bab: "I", form: "قَرَعَ/يَقْرَعُ", meaning: "vurdu, çaldı", semantic: "temel eylem", lessons: ["L41"] },
    ],
    cross_refs: [
      { lesson: "L41", verse: "101:1", form: "ٱلْقَارِعَةُ", note: "kapıyı çalan — kıyamet adlarından" },
    ],
    turkish_traces: ["kur'a (kura)"],
  },
  "و-ز-ن": {
    core: "tartmak, ölçmek",
    quran_count: 23,
    derivatives: [
      { form: "مَوَازِين", pattern: "مَفَاعِيل", type: "cem", meaning: "tartılar, teraziler" },
      { form: "مِيزَان", pattern: "مِفْعَال", type: "ism-i âlet", meaning: "terazi" },
      { form: "وَزْن", pattern: "فَعْل", type: "masdar", meaning: "tartma, ölçü" },
    ],
    bab_chain: [
      { bab: "I", form: "وَزَنَ/يَزِنُ", meaning: "tarttı", semantic: "temel eylem", lessons: ["L41"] },
    ],
    cross_refs: [
      { lesson: "L41", verse: "101:6", form: "مَوَازِينُهُ", note: "tartıları — مِيزَان'ın çoğulu" },
    ],
    turkish_traces: ["vezin", "mizan"],
  },
  "ه-و-ي": {
    core: "düşmek, boşluğa yuvarlanmak",
    quran_count: 6,
    derivatives: [
      { form: "هَاوِيَة", pattern: "فَاعِلَة", type: "ism-i fâil", meaning: "uçurum, düşülen yer (cehennem)" },
      { form: "هَوَى", pattern: "فَعَلَ", type: "fiil", meaning: "düştü" },
    ],
    bab_chain: [
      { bab: "I", form: "هَوَى/يَهْوِي", meaning: "düştü", semantic: "temel eylem", lessons: ["L41"] },
    ],
    cross_refs: [
      { lesson: "L41", verse: "101:9", form: "هَاوِيَة", note: "cehennem — düşülecek yer, ism-i fâil müennes" },
    ],
    turkish_traces: ["hâviye", "hevâ (arzu)"],
  },
  "ك-ث-ر": {
    core: "çok olmak, çoğalmak",
    quran_count: 152,
    derivatives: [
      { form: "كَثِير", pattern: "فَعِيل", type: "sıfat", meaning: "çok" },
      { form: "تَكَاثُر", pattern: "تَفَاعُل", type: "VI. bâb masdar", meaning: "çoklukla yarışma" },
      { form: "أَكْثَر", pattern: "أَفْعَل", type: "ism-i tafdîl", meaning: "daha çok" },
      { form: "كَوْثَر", pattern: "فَوْعَل", type: "isim", meaning: "pek çok hayır" },
    ],
    bab_chain: [
      { bab: "I", form: "كَثُرَ/يَكْثُرُ", meaning: "çok oldu", semantic: "temel eylem", lessons: ["L08"] },
      { bab: "VI", form: "تَكَاثَرَ/يَتَكَاثَرُ", meaning: "çoklukla yarıştı", semantic: "müşâreket", lessons: ["L42"] },
    ],
    cross_refs: [
      { lesson: "L08", verse: "108:1", form: "ٱلْكَوْثَرَ", note: "pek çok hayır/kevser havuzu" },
      { lesson: "L42", verse: "102:1", form: "ٱلتَّكَاثُرُ", note: "çoklukla övünme — VI. bâb masdar" },
    ],
    turkish_traces: ["kesret", "çokluk", "kevser"],
  },
  "ل-ه-و": {
    core: "oyalanmak, eğlenmek, gaflet",
    quran_count: 16,
    derivatives: [
      { form: "لَهْو", pattern: "فَعْل", type: "masdar", meaning: "oyun, eğlence" },
      { form: "أَلْهَى", pattern: "أَفْعَلَ", type: "IV. bâb fiil", meaning: "oyaladı" },
    ],
    bab_chain: [
      { bab: "I", form: "لَهَا/يَلْهُو", meaning: "oyalandı", semantic: "temel eylem", lessons: [] },
      { bab: "IV", form: "أَلْهَى/يُلْهِي", meaning: "oyalattı", semantic: "ta'diye", lessons: ["L42"] },
    ],
    cross_refs: [
      { lesson: "L42", verse: "102:1", form: "أَلْهَاكُمُ", note: "sizi oyaladı — IV. bâb mâzî" },
    ],
    turkish_traces: ["lehv (eğlence)"],
  },
  "ي-ق-ن": {
    core: "kesin bilmek, yakîn sahibi olmak",
    quran_count: 28,
    derivatives: [
      { form: "يَقِين", pattern: "فَعِيل", type: "masdar/isim", meaning: "kesinlik" },
      { form: "مُوقِن", pattern: "مُفْعِل", type: "IV. bâb ism-i fâil", meaning: "kesin bilen" },
    ],
    bab_chain: [
      { bab: "I", form: "يَقِنَ/يَيْقَنُ", meaning: "kesin bildi", semantic: "temel eylem", lessons: ["L42"] },
    ],
    cross_refs: [
      { lesson: "L42", verse: "102:5", form: "ٱلْيَقِينِ", note: "kesinlik — عِلْمَ اليَقِين (bilgisel)" },
      { lesson: "L42", verse: "102:7", form: "ٱلْيَقِينِ", note: "kesinlik — عَيْنَ اليَقِين (görsel)" },
    ],
    turkish_traces: ["yakin", "yakîn"],
  },
  // ── L43-L46 Kökleri ──
  "ه-م-ز": {
    core: "arkadan çekiştirmek, dürtmek",
    quran_count: 3,
    derivatives: [
      { form: "هُمَزَة", pattern: "فُعَلَة", type: "mübalağa", meaning: "çok çekiştiren" },
      { form: "هَمْز", pattern: "فَعْل", type: "masdar", meaning: "dürtme, çekiştirme" },
    ],
    bab_chain: [
      { bab: "I", form: "هَمَزَ/يَهْمِزُ", meaning: "çekiştirdi, dürtü", semantic: "temel eylem", lessons: ["L43"] },
    ],
    cross_refs: [
      { lesson: "L43", verse: "104:1", form: "هُمَزَةٍ", note: "فُعَلَة mübalağa — çok çekiştiren" },
    ],
    turkish_traces: ["hemze (harf adı)"],
  },
  "ل-م-ز": {
    core: "yüze karşı alay etmek, kaş göz işareti",
    quran_count: 3,
    derivatives: [
      { form: "لُمَزَة", pattern: "فُعَلَة", type: "mübalağa", meaning: "çok alay eden" },
    ],
    bab_chain: [
      { bab: "I", form: "لَمَزَ/يَلْمِزُ", meaning: "alay etti", semantic: "temel eylem", lessons: ["L43"] },
    ],
    cross_refs: [
      { lesson: "L43", verse: "104:1", form: "لُمَزَةٍ", note: "فُعَلَة mübalağa — yüze karşı alay" },
    ],
    turkish_traces: [],
  },
  "ح-ط-م": {
    core: "kırıp geçirmek, parçalamak",
    quran_count: 3,
    derivatives: [
      { form: "حُطَمَة", pattern: "فُعَلَة", type: "mübalağa", meaning: "çok kırıp geçiren (ateş)" },
    ],
    bab_chain: [
      { bab: "I", form: "حَطَمَ/يَحْطِمُ", meaning: "kırdı, parçaladı", semantic: "temel eylem", lessons: ["L43"] },
    ],
    cross_refs: [
      { lesson: "L43", verse: "104:4", form: "الحُطَمَةِ", note: "فُعَلَة — cehennem isimlerinden" },
    ],
    turkish_traces: [],
  },
  "خ-ل-د": {
    core: "kalmak, ebedî olmak",
    quran_count: 73,
    derivatives: [
      { form: "خُلْد", pattern: "فُعْل", type: "masdar/isim", meaning: "ebedîlik" },
      { form: "خَالِد", pattern: "فَاعِل", type: "ism-i fâil", meaning: "kalıcı, ebedî" },
    ],
    bab_chain: [
      { bab: "I", form: "خَلَدَ/يَخْلُدُ", meaning: "kaldı, ebedî oldu", semantic: "temel eylem", lessons: [] },
      { bab: "IV", form: "أَخْلَدَ/يُخْلِدُ", meaning: "ölümsüz kıldı", semantic: "geçişli yapma", lessons: ["L43"] },
    ],
    cross_refs: [
      { lesson: "L43", verse: "104:3", form: "أَخْلَدَهُ", note: "IV. bâb — malının onu ölümsüz kılacağını sanır" },
    ],
    turkish_traces: ["Halid (isim)", "huld"],
  },
  "ن-ب-ذ": {
    core: "atmak, fırlatmak, terk etmek",
    quran_count: 7,
    derivatives: [
      { form: "نَبْذ", pattern: "فَعْل", type: "masdar", meaning: "atma, fırlatma" },
    ],
    bab_chain: [
      { bab: "I", form: "نَبَذَ/يَنْبِذُ", meaning: "attı", semantic: "temel eylem", lessons: [] },
      { bab: "VII", form: "اِنْبَذَ/يَنْبَذُ", meaning: "atıldı (meçhul anlamlı)", semantic: "mutâva'at", lessons: ["L43"] },
    ],
    cross_refs: [
      { lesson: "L43", verse: "104:4", form: "لَيُنبَذَنَّ", note: "VII. bâb meçhul + nûn-u te'kîd — kesinlikle atılacak" },
    ],
    turkish_traces: [],
  },
  "و-ق-د": {
    core: "tutuşmak, yanmak",
    quran_count: 8,
    derivatives: [
      { form: "مُوقَدَة", pattern: "مُفْعَلَة", type: "IV. bâb ism-i mef'ûl", meaning: "tutuşturulmuş" },
      { form: "وَقُود", pattern: "فَعُول", type: "isim", meaning: "yakıt, yakacak" },
    ],
    bab_chain: [
      { bab: "I", form: "وَقَدَ/يَقِدُ", meaning: "tutuştu, yandı", semantic: "temel eylem", lessons: [] },
      { bab: "IV", form: "أَوْقَدَ/يُوقِدُ", meaning: "tutuşturdu", semantic: "geçişli yapma", lessons: ["L43"] },
    ],
    cross_refs: [
      { lesson: "L43", verse: "104:6", form: "المُوقَدَةُ", note: "IV. bâb ism-i mef'ûl — tutuşturulmuş ateş" },
    ],
    turkish_traces: [],
  },
  "ف-أ-د": {
    core: "yürek, kalp (fiziksel)",
    quran_count: 3,
    derivatives: [
      { form: "فُؤَاد", pattern: "فُعَال", type: "isim", meaning: "kalp, yürek" },
      { form: "أَفْئِدَة", pattern: "أَفْعِلَة", type: "cem kırık", meaning: "kalpler" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L43", verse: "104:7", form: "الأَفْئِدَةِ", note: "cem kırık — kalplere nüfuz eden ateş" },
    ],
    turkish_traces: ["fuad (isim)"],
  },
  "ف-ي-ل": {
    core: "fil",
    quran_count: 1,
    derivatives: [
      { form: "فِيل", pattern: "فِيل", type: "isim", meaning: "fil" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L44", verse: "105:1", form: "الفِيلِ", note: "hapax — Kur'an'da yalnız 1 kez" },
    ],
    turkish_traces: ["fil"],
  },
  "ك-ي-د": {
    core: "tuzak kurmak, hile yapmak",
    quran_count: 35,
    derivatives: [
      { form: "كَيْد", pattern: "فَعْل", type: "masdar", meaning: "tuzak, hile" },
    ],
    bab_chain: [
      { bab: "I", form: "كَادَ/يَكِيدُ", meaning: "tuzak kurdu", semantic: "temel eylem", lessons: ["L44"] },
    ],
    cross_refs: [
      { lesson: "L44", verse: "105:2", form: "كَيْدَهُمْ", note: "tuzaklarını — fil ordusunun planı" },
    ],
    turkish_traces: ["keyd"],
  },
  "ر-س-ل": {
    core: "göndermek",
    quran_count: 170,
    derivatives: [
      { form: "رَسُول", pattern: "فَعُول", type: "ism-i fâil (benzerî)", meaning: "elçi" },
      { form: "رِسَالَة", pattern: "فِعَالَة", type: "masdar/isim", meaning: "mesaj, elçilik" },
    ],
    bab_chain: [
      { bab: "IV", form: "أَرْسَلَ/يُرْسِلُ", meaning: "gönderdi", semantic: "geçişli yapma", lessons: ["L44"] },
    ],
    cross_refs: [
      { lesson: "L44", verse: "105:3", form: "أَرْسَلَ", note: "IV. bâb — kuşlar gönderdi" },
    ],
    turkish_traces: ["resul", "risale"],
  },
  "ع-ص-ف": {
    core: "ekin yaprağı, rüzgâr",
    quran_count: 4,
    derivatives: [
      { form: "عَصْف", pattern: "فَعْل", type: "isim", meaning: "ekin yaprağı/samanı" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L44", verse: "105:5", form: "عَصْفٍ", note: "ekin yaprağı — teşbîh: yenilmiş saman gibi" },
    ],
    turkish_traces: [],
  },
  "أ-ك-ل": {
    core: "yemek",
    quran_count: 109,
    derivatives: [
      { form: "أَكْل", pattern: "فَعْل", type: "masdar", meaning: "yeme" },
      { form: "مَأْكُول", pattern: "مَفْعُول", type: "ism-i mef'ûl", meaning: "yenilmiş" },
    ],
    bab_chain: [
      { bab: "I", form: "أَكَلَ/يَأْكُلُ", meaning: "yedi", semantic: "temel eylem", lessons: ["L44"] },
    ],
    cross_refs: [
      { lesson: "L44", verse: "105:5", form: "مَأْكُولٍ", note: "I. bâb ism-i mef'ûl — yenilmiş" },
    ],
    turkish_traces: ["ekl"],
  },
  "أ-ل-ف": {
    core: "alışmak, kaynaşmak",
    quran_count: 6,
    derivatives: [
      { form: "إِيلَاف", pattern: "إِفْعَال", type: "IV. bâb masdar", meaning: "alıştırma, ülfet" },
      { form: "أُلْفَة", pattern: "فُعْلَة", type: "masdar", meaning: "yakınlık, ülfet" },
    ],
    bab_chain: [
      { bab: "I", form: "أَلِفَ/يَأْلَفُ", meaning: "alıştı", semantic: "temel eylem", lessons: [] },
      { bab: "IV", form: "آلَفَ/يُؤْلِفُ", meaning: "alıştırdı, kaynaştırdı", semantic: "geçişli yapma", lessons: ["L45"] },
    ],
    cross_refs: [
      { lesson: "L45", verse: "106:1", form: "لِإِيلَافِ", note: "IV. bâb masdar — alıştırma/ülfet" },
    ],
    turkish_traces: ["ülfet", "elif (harf adı)"],
  },
  "ر-ح-ل": {
    core: "göç etmek, yolculuk",
    quran_count: 2,
    derivatives: [
      { form: "رِحْلَة", pattern: "فِعْلَة", type: "masdar/isim", meaning: "yolculuk" },
    ],
    bab_chain: [
      { bab: "I", form: "رَحَلَ/يَرْحَلُ", meaning: "göç etti", semantic: "temel eylem", lessons: ["L45"] },
    ],
    cross_refs: [
      { lesson: "L45", verse: "106:2", form: "رِحْلَةَ", note: "yolculuk — kış ve yaz ticaret kervanları" },
    ],
    turkish_traces: ["rahle", "rıhle"],
  },
  "ج-و-ع": {
    core: "acıkmak",
    quran_count: 4,
    derivatives: [
      { form: "جُوع", pattern: "فُعْل", type: "masdar", meaning: "açlık" },
      { form: "جَائِع", pattern: "فَاعِل", type: "ism-i fâil", meaning: "aç" },
    ],
    bab_chain: [
      { bab: "I", form: "جَاعَ/يَجُوعُ", meaning: "acıktı", semantic: "temel eylem", lessons: ["L45"] },
    ],
    cross_refs: [
      { lesson: "L45", verse: "106:4", form: "جُوعٍ", note: "açlıkTAN doyurdu (مِن sebebiye)" },
    ],
    turkish_traces: [],
  },
  "خ-و-ف": {
    core: "korkmak",
    quran_count: 124,
    derivatives: [
      { form: "خَوْف", pattern: "فَعْل", type: "masdar", meaning: "korku" },
      { form: "خَائِف", pattern: "فَاعِل", type: "ism-i fâil", meaning: "korkan" },
    ],
    bab_chain: [
      { bab: "I", form: "خَافَ/يَخَافُ", meaning: "korktu", semantic: "temel eylem (ecvef)", lessons: ["L45"] },
    ],
    cross_refs: [
      { lesson: "L45", verse: "106:4", form: "خَوْفٍ", note: "korkuDAN emin kıldı (مِن sebebiye)" },
    ],
    turkish_traces: ["havf"],
  },
  "ك-ذ-ب": {
    core: "yalan söylemek / yalanlamak",
    quran_count: 182,
    derivatives: [
      { form: "كَذِب", pattern: "فَعِل", type: "masdar", meaning: "yalan" },
      { form: "مُكَذِّب", pattern: "مُفَعِّل", type: "II. bâb ism-i fâil", meaning: "yalanlayan" },
      { form: "تَكْذِيب", pattern: "تَفْعِيل", type: "II. bâb masdar", meaning: "yalanlama" },
    ],
    bab_chain: [
      { bab: "I", form: "كَذَبَ/يَكْذِبُ", meaning: "yalan söyledi", semantic: "temel eylem", lessons: [] },
      { bab: "II", form: "كَذَّبَ/يُكَذِّبُ", meaning: "yalanladı", semantic: "geçişli yapma", lessons: ["L46"] },
    ],
    cross_refs: [
      { lesson: "L46", verse: "107:1", form: "يُكَذِّبُ", note: "II. bâb — dîni yalanlamak" },
    ],
    turkish_traces: ["kizb", "tekzib"],
  },
  "د-ع-ع": {
    core: "itmek, kovmak, horlamak",
    quran_count: 2,
    derivatives: [
      { form: "دَعّ", pattern: "فَعْل", type: "masdar", meaning: "itme, kovma" },
    ],
    bab_chain: [
      { bab: "I", form: "دَعَّ/يَدُعُّ", meaning: "itti, horladı", semantic: "mudâaf fiil", lessons: ["L46"] },
    ],
    cross_refs: [
      { lesson: "L46", verse: "107:2", form: "يَدُعُّ", note: "mudâaf fiil — yetimi itme/horlama" },
    ],
    turkish_traces: [],
  },
  "س-ه-و": {
    core: "gafil olmak, unutmak",
    quran_count: 2,
    derivatives: [
      { form: "سَاهٍ", pattern: "فَاعِل", type: "ism-i fâil", meaning: "gafil, dalgın" },
      { form: "سَهْو", pattern: "فَعْل", type: "masdar", meaning: "gaflet" },
    ],
    bab_chain: [
      { bab: "I", form: "سَهَا/يَسْهُو", meaning: "gafil oldu, dalgınlaştı", semantic: "nâkıs fiil", lessons: ["L46"] },
    ],
    cross_refs: [
      { lesson: "L46", verse: "107:5", form: "سَاهُونَ", note: "ism-i fâil çoğul — namazdan gafil olanlar" },
    ],
    turkish_traces: ["sehv", "sehven"],
  },
  "م-ن-ع": {
    core: "engellemek, vermemek",
    quran_count: 18,
    derivatives: [
      { form: "مَنْع", pattern: "فَعْل", type: "masdar", meaning: "engelleme" },
      { form: "مَانِع", pattern: "فَاعِل", type: "ism-i fâil", meaning: "engelleyen" },
    ],
    bab_chain: [
      { bab: "I", form: "مَنَعَ/يَمْنَعُ", meaning: "engelledi", semantic: "temel eylem", lessons: ["L46"] },
    ],
    cross_refs: [
      { lesson: "L46", verse: "107:7", form: "يَمْنَعُونَ", note: "basit yardımı bile engellerler" },
    ],
    turkish_traces: ["men", "mâni"],
  },
  // ── L47-L50 Yeni Kökler ──
  "ع-ط-ي": {
    core: "vermek, ihsân etmek",
    quran_count: 116,
    derivatives: [
      { form: "عَطَاء", pattern: "فَعَال", type: "masdar", meaning: "bağış, ihsân" },
      { form: "مُعْطٍ", pattern: "مُفْعِل", type: "ism-i fâil (IV)", meaning: "veren" },
    ],
    bab_chain: [
      { bab: "I", form: "عَطَا/يَعْطُو", meaning: "yöneldi, uzandı", semantic: "temel eylem", lessons: [] },
      { bab: "IV", form: "أَعْطَى/يُعْطِي", meaning: "verdi, ihsân etti", semantic: "ta'diye (geçişli)", lessons: ["L47"] },
    ],
    cross_refs: [
      { lesson: "L47", verse: "108:1", form: "أَعْطَيْنَاكَ", note: "sana Kevser'i verdik — IV. bâb iki mef'ûl" },
    ],
    turkish_traces: ["atâ", "atıfet"],
  },
  "ش-ن-أ": {
    core: "buğz etmek, kin tutmak",
    quran_count: 5,
    derivatives: [
      { form: "شَانِئ", pattern: "فَاعِل", type: "ism-i fâil", meaning: "buğz eden" },
      { form: "شَنَآن", pattern: "فَعَلَان", type: "masdar", meaning: "kin, düşmanlık" },
    ],
    bab_chain: [
      { bab: "I", form: "شَنَأَ/يَشْنَأُ", meaning: "buğz etti", semantic: "temel eylem", lessons: ["L47"] },
    ],
    cross_refs: [
      { lesson: "L47", verse: "108:3", form: "شَانِئَكَ", note: "sana buğz eden — ism-i fâil + muzâf zamîr" },
    ],
    turkish_traces: [],
  },
  "ب-ت-ر": {
    core: "kesmek, soyu kesmek",
    quran_count: 1,
    derivatives: [
      { form: "أَبْتَر", pattern: "أَفْعَل", type: "sıfat", meaning: "soyu kesik, güdük" },
      { form: "بَتْر", pattern: "فَعْل", type: "masdar", meaning: "kesme" },
    ],
    bab_chain: [
      { bab: "I", form: "بَتَرَ/يَبْتُرُ", meaning: "kesti", semantic: "temel eylem", lessons: ["L47"] },
    ],
    cross_refs: [
      { lesson: "L47", verse: "108:3", form: "الأَبْتَر", note: "soyu kesik — أَفْعَل sıfat kalıbı" },
    ],
    turkish_traces: [],
  },
  "ن-ح-ر": {
    core: "boğazlamak, kurban kesmek",
    quran_count: 2,
    derivatives: [
      { form: "نَحْر", pattern: "فَعْل", type: "masdar", meaning: "boğazlama, kurban" },
      { form: "مَنْحَر", pattern: "مَفْعَل", type: "ism-i mekân", meaning: "kurban kesim yeri" },
    ],
    bab_chain: [
      { bab: "I", form: "نَحَرَ/يَنْحَرُ", meaning: "kurban kesti", semantic: "temel eylem", lessons: ["L47"] },
    ],
    cross_refs: [
      { lesson: "L47", verse: "108:2", form: "وَانْحَرْ", note: "kurban kes — emir" },
    ],
    turkish_traces: ["nahır"],
  },
  "ف-و-ج": {
    core: "grup, bölük",
    quran_count: 5,
    derivatives: [
      { form: "فَوْج", pattern: "فَعْل", type: "isim", meaning: "grup, bölük" },
      { form: "أَفْوَاج", pattern: "أَفْعَال", type: "cem kırık", meaning: "gruplar, bölükler" },
    ],
    bab_chain: [
      { bab: "I", form: "فَاجَ/يَفُوجُ", meaning: "dağıldı, yayıldı", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L49", verse: "110:2", form: "أَفْوَاجًا", note: "bölük bölük — hâl, cem kırık" },
    ],
    turkish_traces: [],
  },
  "د-خ-ل": {
    core: "girmek",
    quran_count: 127,
    derivatives: [
      { form: "دُخُول", pattern: "فُعُول", type: "masdar", meaning: "giriş" },
      { form: "مُدْخَل", pattern: "مُفْعَل", type: "ism-i mekân (IV)", meaning: "giriş yeri" },
      { form: "دَاخِل", pattern: "فَاعِل", type: "ism-i fâil", meaning: "giren" },
    ],
    bab_chain: [
      { bab: "I", form: "دَخَلَ/يَدْخُلُ", meaning: "girdi", semantic: "temel eylem", lessons: ["L49"] },
      { bab: "IV", form: "أَدْخَلَ/يُدْخِلُ", meaning: "soktu, dahil etti", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L49", verse: "110:2", form: "يَدْخُلُونَ", note: "Allah'ın dinine giriyorlar — hâl cümlesi" },
    ],
    turkish_traces: ["dahil", "müdahale"],
  },
  "ت-ب-ب": {
    core: "helak olmak, kurumak, kaybetmek",
    quran_count: 4,
    derivatives: [
      { form: "تَبَاب", pattern: "فَعَال", type: "masdar", meaning: "helak, ziyan" },
      { form: "تَتْبِيب", pattern: "تَفْعِيل", type: "masdar (II)", meaning: "helak etme" },
    ],
    bab_chain: [
      { bab: "I", form: "تَبَّ/يَتِبُّ", meaning: "kurudu, helak oldu", semantic: "temel eylem (mudâaf)", lessons: ["L50"] },
    ],
    cross_refs: [
      { lesson: "L50", verse: "111:1", form: "تَبَّتْ", note: "iki eli kurusun — beddua" },
      { lesson: "L50", verse: "111:1", form: "وَتَبَّ", note: "zaten kurudu — haber" },
    ],
    turkish_traces: [],
  },
  "ك-س-ب": {
    core: "kazanmak, elde etmek",
    quran_count: 67,
    derivatives: [
      { form: "كَسْب", pattern: "فَعْل", type: "masdar", meaning: "kazanç" },
      { form: "مُكْتَسَب", pattern: "مُفْتَعَل", type: "ism-i mef'ûl (VIII)", meaning: "kazanılan" },
    ],
    bab_chain: [
      { bab: "I", form: "كَسَبَ/يَكْسِبُ", meaning: "kazandı", semantic: "temel eylem", lessons: ["L50"] },
      { bab: "VIII", form: "اِكْتَسَبَ/يَكْتَسِبُ", meaning: "kendi için kazandı", semantic: "dönüşlü", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L50", verse: "111:2", form: "كَسَبَ", note: "kazandığı (şey) — mâzî" },
    ],
    turkish_traces: ["kesb", "iktisab"],
  },
  "ح-م-ل": {
    core: "taşımak, yüklenmek",
    quran_count: 64,
    derivatives: [
      { form: "حَمْل", pattern: "فَعْل", type: "masdar", meaning: "taşıma, hamilelik" },
      { form: "حَمَّال", pattern: "فَعَّال", type: "mübalağa", meaning: "çok taşıyan, hamal" },
      { form: "حَمَّالَة", pattern: "فَعَّالَة", type: "mübalağa müennes", meaning: "çok taşıyan kadın" },
    ],
    bab_chain: [
      { bab: "I", form: "حَمَلَ/يَحْمِلُ", meaning: "taşıdı", semantic: "temel eylem", lessons: ["L50"] },
      { bab: "II", form: "حَمَّلَ/يُحَمِّلُ", meaning: "yükledi", semantic: "ta'diye/teksîr", lessons: [] },
      { bab: "V", form: "تَحَمَّلَ/يَتَحَمَّلُ", meaning: "katlandı", semantic: "dönüşlü (II'nin)", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L50", verse: "111:4", form: "حَمَّالَةَ", note: "odun hamalı — فَعَّالَة mübalağa müennes" },
    ],
    turkish_traces: ["hamal", "hamle", "tahammül"],
  },
  "ل-ه-ب": {
    core: "alevlenmek, tutuşmak",
    quran_count: 4,
    derivatives: [
      { form: "لَهَب", pattern: "فَعَل", type: "isim", meaning: "alev" },
      { form: "لَهِيب", pattern: "فَعِيل", type: "isim", meaning: "alev, hararet" },
    ],
    bab_chain: [
      { bab: "V", form: "تَلَهَّبَ/يَتَلَهَّبُ", meaning: "alevlendi", semantic: "dönüşlü", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L50", verse: "111:1", form: "لَهَبٍ", note: "Ebû Leheb — alev babası lakabı" },
      { lesson: "L50", verse: "111:3", form: "لَهَبٍ", note: "alevli ateş — isim + ceza ironisi (tıbâk)" },
    ],
    turkish_traces: ["lehep", "alevlenmek"],
  },
  "م-س-د": {
    core: "bükmek, eğirmek",
    quran_count: 1,
    derivatives: [
      { form: "مَسَد", pattern: "فَعَل", type: "isim", meaning: "bükülmüş lif, hurma ipi" },
    ],
    bab_chain: [
      { bab: "I", form: "مَسَدَ/يَمْسُدُ", meaning: "büktü, eğirdi", semantic: "temel eylem", lessons: ["L50"] },
    ],
    cross_refs: [
      { lesson: "L50", verse: "111:5", form: "مَسَدٍ", note: "bükülmüş liften ip — sure adı" },
    ],
    turkish_traces: [],
  },
};

// Helper: kök anahtarlarını array olarak döndür
export function getRootKeys() {
  return Object.keys(rootDB);
}

// Helper: lesson'daki tüm kökleri bul
export function getRootsForLesson(lessonId) {
  const roots = [];
  for (const [key, data] of Object.entries(rootDB)) {
    const refs = data.cross_refs.filter(r => r.lesson === lessonId);
    if (refs.length > 0) {
      roots.push({ key, ...data, lessonRefs: refs });
    }
    // Also check bab_chain
    for (const bab of data.bab_chain) {
      if (bab.lessons.includes(lessonId) && !roots.find(r => r.key === key)) {
        roots.push({ key, ...data, lessonRefs: data.cross_refs.filter(r => r.lesson === lessonId) });
      }
    }
  }
  return roots;
}

// Helper: kök detaylarını getir
export function getRoot(key) {
  return rootDB[key] || null;
}

export default rootDB;
