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
      { bab: "I", form: "تَابَ/يَتُوبُ", meaning: "döndü (tövbe etti)", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [],
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
