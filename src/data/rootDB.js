// rootDB.js — Kök Veritabanı (الجذر والاشتقاق)
// Her kök: temel anlam, türevler, bâb zinciri, Kur'an referansları, Türkçe izler

const rootDB = {
  "ر-ب-ب": {
    core: "terbiye etmek, yetiştirmek, sahiplenmek",
    mufradat_note: "Asıl anlamı terbiye etmek/yetiştirmek. Bir şeyi olgunluk derecesine ulaşıncaya kadar aşama aşama inşa etmek. Rab: terbiye eden, sahip olan. Yalnız Allah'a izâfetle mutlak kullanılır.",
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
    mufradat_note: "Tezellül göstermek, boyun eğmek. عِبَادَة: kulluğun en yüksek mertebesi. İbadet: Allah'a tam teslimiyet ile yapılan eylem. عَبْد: gerçek kulluk bilincindeki kişi.",
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
    mufradat_note: "Sığınmak, hayret etmek, ibadet etmek. إِلٰه: tapılan, sığınılan varlık. اللّٰه: bütün kemâl sıfatlarını toplayan özel isim — başka hiçbir varlığa verilmez.",
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
    mufradat_note: "Kadın rahmi (rahim) temel anlamdır → acıma, şefkat, koruma. الرَّحْمٰن: fıtrî/kuşatıcı merhamet (dünyada herkese). الرَّحِيم: sürekli/seçici merhamet (ahirette mü'minlere).",
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
    mufradat_note: "Allah'ı erdemlerinden dolayı övmek. Medihten daha özel (medih: iradî+gayr-i iradî), şükürden daha genel (şükür: yalnız nimete karşılık). Hamd her durumda geçerlidir.",
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
    mufradat_note: "Bir şeyi hakikatiyle idrak etmek. İki kısım: 1) Zatını idrak (حي/ميت gibi), 2) Hükmünü idrak (عدل gibi). عَلِيم: Allah'ın her şeyi bilen sıfatı. عَلَامَة: bilgiye ulaştıran işaret.",
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
    mufradat_note: "Bolluk, rahatlık içinde olmak. نِعْمَة: nimet (dış); نَعِيم: nimetlenme hali (iç). أَنْعَمَ: nimet verdi. نَعَم: evet (ikrar/kabul). النُّعمان: kanla kızaran çiçek.",
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
    mufradat_note: "Güzel ve yumuşak bir şekilde yol göstermek. Hidâyet dört mertebede: 1) Genel ilham, 2) Peygamberlerle davet, 3) Tevfîk (kalbe yerleştirme), 4) Ahirette cennete ulaştırma.",
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
    mufradat_note: "Doğru yoldan sapmak. ضَلَالَة: hem bilmeden sapmak hem bilerek sapmak. إِضْلَال: başkasını saptırmak. Zıddı: hidâyet. Mutlak kullanımda: haktan uzaklaşmak.",
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
    mufradat_note: "Ayağa kalkmak, dikilmek; bir işi üstlenmek. قِيَام: kalkış; إِقَامَة: ikame etmek (namazı dosdoğru kılmak). قَيُّوم: her şeyi ayakta tutan. İstikâmet: doğru yolda durmak.",
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
    mufradat_note: "Yukarıdan aşağıya inmek. تَنْزِيل: Kur'ân'ın peyderpey indirilmesi. إِنْزَال: toptan indirme. نُزُل: misafir ağırlamak (konuk için indirilen nimet).",
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
    mufradat_note: "Sözlükte örtmek. Gecenin karanlığı örtücüdür → inkâr: hakikati örtmek. Küfrün asıl anlamı nimeti/hakikati örterek gizlemek. Zıddı: şükür (nimeti açığa çıkarmak).",
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
    mufradat_note: "Canlının kasıtlı olarak yaptığı her iş. فِعْل'den farklı: amel kasıt gerektirir. عَمَل صَالِح: iyi niyet + doğru eylem. Kur'ân'da iman ile amel hep birlikte gelir.",
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
    mufradat_note: "Kötülük, zarar. شَرّ: kötülük. شَرِير: kötü kişi. Zıddı: خَيْر. Mutlak şer Allah'tan değildir; izâfî şer imtihan hikmetiyledir.",
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
    mufradat_note: "Manaya delâlet eden söz. قَوْل ve كَلَام ikisi de anlam ifade eder. Allah'ın kavli: hem kelâm-ı nefsî hem kelâm-ı lafzî olarak anlaşılır.",
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
    mufradat_note: "Var olmak, olmak, oluşmak. كُنْ فَيَكُون: ol, olur (ilâhî yaratma emri). كَوْن: oluş. تَكْوِين: oluşturma, yaratma.",
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
    mufradat_note: "Borç alıp vermek → karşılıklı ilişki. دِين: 1) İtaat, 2) Ceza/mükâfat, 3) Şeriat/yol, 4) Hesap günü. يَوْمُ الدِّين: hesap ve karşılık günü.",
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
    mufradat_note: "Görmek — hem gözle hem kalple. رُؤْيَة: gözle görme. رَأْي: fikir, görüş. رُؤْيَا: rüya. تَرَاءَى: karşılıklı görüşme. بَصِيرَة: kalp gözü.",
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
    mufradat_note: "Gönül huzuru ve korkunun bertaraf olması. إِيمَان: kalbin tasdiki + dilin ikrarı + organların ameli. أَمَانَة: güvenilirlik; الأَمْن: emniyet, güvenlik.",
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
    mufradat_note: "Dua ve niyaz anlamındadır. Namaz bu köktendir — Allah'a yönelişin en kapsamlı biçimi. الصَّلاة: rükû ve secde ile yapılan ibadet; Allah'tan: rahmet; meleklerden: istiğfar.",
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
    mufradat_note: "Bir şeye güç yetirmek + takdir etmek (ölçü belirlemek). قَدَر: ilâhî takdir, ölçü. قُدْرَة: güç. Allah'ın kudreti sınırsızdır; takdiri hikmetle belirlenmiştir.",
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
    mufradat_note: "Göğüs, ön kısım. صَدْر: kalbin mekânı olan göğüs. إِصْدَار: çıkarmak, yayımlamak. مَصْدَر: kaynak, çıkış yeri.",
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
    mufradat_note: "Üç anlam: 1) Bir şeyi ölçüp biçmek (takdîr), 2) Örneksiz olarak var etmek (yalnız Allah), 3) Yalandan uydurmak (خَلَقَ الإفك). Yaratmanın aslı: ölçü ve takdir iledir.",
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
    mufradat_note: "Gün, zaman dilimi. يَوْم: güneşin doğuşundan batışına; veya mutlak zaman birimi. يَوْمَ القِيَامَة: kıyamet günü. أَيَّام اللّٰه: Allah'ın (azap/nimet) günleri.",
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
    mufradat_note: "Alışmak, ünsiyet kurmak. إِنْسَان: insan (ünsiyetten; veya nisyandan). أُنْس: yakınlık duygusu. İstînas: alışıp ısınma. İnsanın aslı: sosyal varlık.",
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
    mufradat_note: "Sahiplik üstlenmek ve tasarrufta bulunmak. مُلْك: dışa dönük hâkimiyet. مِلْك: sahiplik. مَلِك: hükümdar. مَالِك: sahip. مَلَك (melek): Allah'ın elçileri.",
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
    mufradat_note: "Aklın ve şeriatın gerektirdiği şekilde nefsini tutmak. Üç türü: 1) Musibete sabır, 2) Günahtan sabır, 3) İbadete sabır. صَبُور: çok sabreden (Allah'ın ismi).",
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
    mufradat_note: "İnsanların herkesin arzu ettiği şey: akıl, adalet, fazilet, faydalı olan. خَيْر: iyilik, hayır. Zıddı: شَرّ. İhtiyâr: en hayırlıyı seçmek. اِسْتِخَارَة: hayır dilemek.",
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
    mufradat_note: "Bulmak, karşılaşmak. وُجُود: varlık (yokluktan bulunuşa). وِجْدَان: iç sezgi. وَجْد: coşku, vecd. مَوْجُود: var olan.",
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
    mufradat_note: "Bir şeyi ayırmak, bölmek. فُرْقَان: hak ile bâtılı ayıran → Kur'ân'ın isimlerinden. فِرْقَة: ayrılmış topluluk. İftirak: dağılma. Tefrîk: ayırt etme.",
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
    mufradat_note: "Yazmak, kaydetmek, farz kılmak. كِتَاب: yazılmış şey; ilâhî kitap. كَتَبَ اللّٰه: Allah yazdı/farz kıldı. Kaderin yazılması ve şeriatın farz kılınması bu köktendir.",
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
    mufradat_note: "Bir şeyin duyu organlarına saklı/gizli kalması. جَنَّة: bahçe (ağaçları toprağı örter). جِنّ: gizli varlıklar. جَنِين: anne karnındaki gizli çocuk. جُنُون: aklın örtülmesi. مِجَنّ: kalkan.",
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
    mufradat_note: "Yardım etmek, zafer vermek. نَصْر: düşmana karşı yardım. أَنْصَار: Hz. Peygamber'e yardım eden Medineliler. İntisâr: başkasının yardımıyla zafer.",
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
    mufradat_note: "Tek olmak, eşi benzeri olmamak. تَوْحِيد: Allah'ı birleme. أَحَد: mutlak teklik (sayısal değil). وَاحِد: sayısal birlik. اِتِّحَاد: birleşme.",
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
    mufradat_note: "Tartmak, ölçmek. مِيزَان: terazi. وَزْن: ağırlık, değer. Kıyamette amellerin tartılması. مُتَّزِن: dengeli, ölçülü.",
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
    mufradat_note: "Kolaylık, kolaylaştırma. يُسْر: kolaylık. مُيَسَّر: kolaylaştırılmış. Zıddı: عُسْر (zorluk). مَيْسِر: kumar (kolay kazanç yanılsaması).",
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
    mufradat_note: "Zorluk, güçlük. عُسْر: darlık. Zıddı: يُسْر. مُعْسِر: darda olan. عَسِير: zor, güç olan gün. Kur'ân'da zorlukla birlikte kolaylığın geleceği vurgulanır.",
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
    mufradat_note: "Bir şeye onu kirden koruyacak elbise giydirmek. مَغْفِرَة: günahları örtüp korumak. İstisğfar: bu örtüyü talep etmek. Allah'ın mağfireti: günahı hem örtmek hem affetmek.",
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
    mufradat_note: "Bir şeyi ıslah etmek için alıkoymak/engellemek. حُكْم: karar, yargı. حِكْمَة: ilim ve akılla en doğru hedefe ulaşmak. حَكِيم: hikmet sahibi (hem bilen hem uygulayan).",
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
    mufradat_note: "Her hoşa giden, arzu edilen şey. Üç çeşit: 1) Akıl tarafından güzel görülen, 2) Hevâ (arzu) tarafından güzel görülen, 3) Duyular tarafından güzel görülen. إِحْسَان: güzelliğin eyleme dönüşmesi.",
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
    mufradat_note: "Görmeyi sağlayan yaygın ışık. İki çeşit: dünyevî ve uhrevî. Dünyevî: 1) Akıl nuru/Kur'ân nuru (basîretle idrak), 2) Fiziksel ışık (gözle idrak). اللّٰهُ نُورُ السَّمٰوَاتِ: hidâyet nuru.",
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
    mufradat_note: "En güzel şekilde günahı terk etmek. Özür dilemenin en etkili yolu. Üç aşama: 1) Kötülüğü bırakmak, 2) Pişman olmak, 3) Bir daha dönmemek. Allah'ın tevbesi: kuluna rahmetle dönmesi.",
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
    mufradat_note: "Selâmet, barış, teslim olma. سَلَام: barış, esenlik. إِسْلَام: Allah'a teslim olma. مُسْلِم: teslim olan. سَلِيم: sağlam, kusursuz (قَلْبٌ سَلِيم: arınmış kalp).",
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
    mufradat_note: "İki şey arasında yabancı bir şeyin girmemesi → yakınlık, yardım, yönetim. وَلِيّ: dost, koruyucu. وِلَايَة: dostluk/velayet. مَوْلَى: hem efendi hem köle (yakınlık bağı).",
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
    mufradat_note: "Artmak, temizlenmek, bereketlenmek. زَكَاة: malın arınması + artması. تَزْكِيَة: nefsi arındırma. Her ikisi de birlikte gelir: temizlenme büyümeyi getirir.",
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
    mufradat_note: "İnsanın elde ettiği bilgileri koruyabildiği nefsanî bir durum. Zıddı: nisyan (unutmak). ذِكْر: hem kalple hem dille yapılır. تَذْكِرَة: hatırlatma. Kur'ân'ın isimlerinden biridir.",
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
    mufradat_note: "Zenginlik, ihtiyaçsızlık. غَنِيّ: zengin, müstağnî. الغَنِيّ: Allah'ın sıfatı (hiçbir şeye muhtaç olmayan). İstığnâ: kendini müstağni görmek.",
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
    mufradat_note: "Suda veya havada hızla hareket etmek. تَسْبِيح: Allah'ı her türlü noksanlıktan tenzih etmek. سُبْحَان: tenzih ünlemi. Her varlık kendi lisanıyla tesbih eder.",
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
    mufradat_note: "Yükselmek. عُلُوّ: yücelik. عَلِيّ: yüce. المُتَعَالِ: en yüce. اِسْتِعْلَاء: üstünlük iddiası. عَالٍ: yüksek olan.",
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
    mufradat_note: "Harfleri ve kelimeleri birbirine katmak/toplamak. قُرْآن: okunan/toplanan kitap. قِرَاءَة: okuma eylemi. Kur'ân ismi: bütün ilâhî kitapların özünü toplayan.",
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
    mufradat_note: "Arkadan gelmek, yerine geçmek. خَلِيفَة: halife (yerine geçen). اِخْتِلَاف: farklılaşma. خُلْف: sözünden dönme. خَلَفَ: birisinin arkasından gelmek.",
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
    mufradat_note: "Çekip koparmak, sökmek. نَزْع: kuvvetle çekme. نَازِعَات: çekip çıkaranlar (melekler — Nâziât 79:1). اِنْتِزَاع: söküp alma.",
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
    mufradat_note: "Bir şeyi yarıp açmak (boylamsal yarık). فِطْرَة: yaratılışın ilk açılışı → saf tabiat. İftar: orucu açmak. فُطُور: çatlak, yarık (Mülk 67:3).",
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
    mufradat_note: "Bir şeyi enine yarıp genişletmek. فَجْر: tan yerinin yarılması → şafak. فُجُور: ahlâkî sınırların yarılması → günah. İnficâr: suyun fışkırması (yarılarak çıkması).",
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
    mufradat_note: "Aldatmak, yanıltmak. غُرُور: aldanma. غَرَّ: kandırdı. الغَرُور: çok aldatan (şeytan). Asıl anlam: güzel görüntüyle gerçeği gizlemek.",
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
    mufradat_note: "Şeref, cömertlik, değer. كَرِيم: değerli ve cömert olan. إِكْرَام: ikram etmek, değer vermek. كَرَامَة: şeref. Kur'ân: الكَرِيم sıfatıyla anılır.",
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
    mufradat_note: "Eksiksiz vermek, yerine getirmek. وَفَاء: sözünü tutma. تَوَفَّى: ruhunu tam olarak almak → vefat. إِيفَاء: borcun tam ödenmesi.",
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
    mufradat_note: "Zarara uğramak, kaybetmek. خُسْرَان: büyük kayıp. خَاسِر: zararda olan. Asr suresi: tüm insanlık hüsrandadır — iman+amel+hak+sabır hariç.",
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
    mufradat_note: "Pas, kir örtüsü. رَيْن: kalbi kaplayan manevi pas. كَلَّا بَلْ رَانَ عَلَى قُلُوبِهِمْ: kalpleri paslandı (Mutaffifîn 83:14). Günahların kalbi örtmesi.",
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
    mufradat_note: "Yüksek, belirgin yapı. بُرُوج: gökteki burçlar; büyük saraylar. تَبَرُّج: kadının süsünü açığa çıkarması. Asıl anlam: görünür ve belirgin olmak.",
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
    mufradat_note: "Gelecekteki hayır veya şer hakkında haber vermek. وَعْد: hayır vaadi. وَعِيد: şer tehdidi. مَوْعِد: buluşma yeri/zamanı. Allah'ın vaadi mutlaka gerçekleşir.",
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
    mufradat_note: "Kasıt, destek. عَمَد: sütun, direk. عَمْد: kasten yapmak. عِمَاد: temel dayanak. بِغَيْرِ عَمَدٍ: direksiz (gökleri direksiz tutan).",
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
    mufradat_note: "Bölmek, paylaştırmak. قَسَم: yemin (sözü sağlamlaştırmak). قِسْمَة: pay, nasip. أَقْسَمَ: yemin etti.",
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
    mufradat_note: "Karaciğer; zorluk, sıkıntı. كَبَد: karaciğer. فِي كَبَدٍ: sıkıntı içinde (Beled 90:4). تَكَبُّد: zorluğa katlanmak.",
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
    mufradat_note: "Yüksek arazi, cesaret. نَجْد: yayla, yüksek yer. نَجْدَة: cesaret, kahramanlık. نَجْدَيْن: iki yol (hayır ve şer — Beled 90:10).",
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
    mufradat_note: "Toprağı yarıp sürmek → başarıya ulaşmak. فَلَاح: kurtuluş ve başarı. مُفْلِحُون: kurtuluşa erenler. حَيَّ عَلَى الفَلَاح: haydin kurtuluşa.",
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
    mufradat_note: "Açmak, genişletmek. شَرْح: göğsü açma → ferahlatma. أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ: Senin göğsünü açmadık mı? (İnşirah 94:1). Manevi genişleme.",
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
    mufradat_note: "Güç kullanarak boyun eğdirmek. قَاهِر: üstün gelen. القَهَّار: mutlak galip (Allah). قَهْر: zor kullanarak itaat ettirmek.",
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
    mufradat_note: "Başta yok iken sonradan var olma. حَدِيث: söz, haber, yeni olan şey. إِحْدَاث: bir şeyi icat etmek. مُحْدَث: sonradan ortaya çıkan.",
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
    mufradat_note: "Asılmak, yapışmak. عَلَقَة: yapışkan kan pıhtısı (embriyo evresi). عَلَاقَة: bağ, ilişki. تَعَلُّق: bağlanma. خَلَقَ الإِنْسَانَ مِنْ عَلَقٍ: insanı alak'tan yarattı.",
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
    mufradat_note: "İki şey arasındaki boşluk ve ortayı göstermek. بَيَان: açıklama, izah. بَيِّنَة: apaçık delil. تِبْيَان: Kur'ân'ın her şeyi açıklama vasfı.",
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
    mufradat_note: "Arınmak, saf hale gelmek. إِخْلَاص: ibadeti yalnız Allah'a has kılma (İhlâs suresi). خَالِص: katışıksız, saf. مُخْلِص: ihlâslı kul.",
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
    mufradat_note: "Sınırı aşmak, düşmanlık etmek. عَدُوّ: düşman. عُدْوَان: saldırganlık, haddi aşma. اِعْتِدَاء: tecavüz. Asıl anlam: ölçü ve sınırı geçmek.",
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
    mufradat_note: "Nankörlük, nimeti inkâr. كَنُود: çok nankör. إِنَّ الإِنْسَانَ لِرَبِّهِ لَكَنُودٌ: İnsan Rabbine karşı çok nankörd ür (Âdiyât 100:6).",
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
    mufradat_note: "Vurmak, çalmak. قَرْع: kapı çalmak; şiddetli darbe. القَارِعَة: büyük vuruş → kıyamet (Kâria suresi). قُرْعَة: kura (vuruş ile seçim).",
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
    mufradat_note: "Bilgide şüphenin tamamen kalkması. يَقِين: kesin bilgi. حَقُّ اليَقِين: en yüksek yakîn mertebesi. Üç mertebe: عِلْمُ اليَقِين → عَيْنُ اليَقِين → حَقُّ اليَقِين.",
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
    mufradat_note: "Sert sözle/işaretle kırmak. هَمْز: arkadan çekiştirme, alayla kırma. هُمَزَة: çok çekiştiren (Hümeze suresi). هَمَّاز: dedikodcu.",
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
    mufradat_note: "Yüze karşı dil ile/işaretle ayıplamak. لَمْز: yüze karşı kusur bulma. لُمَزَة: çok ayıplayan. Hümeze'den fark: hemz gıyabî, lemz yüze karşı.",
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
    mufradat_note: "Kırmak, parçalamak. حُطَامَة: kırıntı. الحُطَمَة: cehennemin isimlerinden biri (her şeyi kırıp parçalayan).",
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
    mufradat_note: "Uzun süre kalmak. خُلْد: ebedilik. خَالِدِين فِيهَا: orada ebedî kalacaklar. مُخَلَّد: yaşlanmayan. Cennet ve cehennemde kalış.",
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
    mufradat_note: "Fırlatıp atmak, önemsememek. نَبْذ: terk etmek. مَنْبُوذ: atılmış, dışlanmış. Kur'ân'da ahdi bozan kavimlerin kitabı atması.",
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
    mufradat_note: "Ateş yakmak. وَقُود: yakıt. إِيقَاد: tutuşturma. اِتَّقِد: alevlenmek. Kur'ân'da cehennem ateşinin yakıtı olarak geçer.",
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
    mufradat_note: "Yanmak, pişmek. فُؤَاد: kalp (yanıp tutuşan yer). أَفْئِدَة: kalpler. Fuâd: kalbin ateşli/tutkulu yönü. Basar (göz) + sem' (kulak) + fuâd (kalp): üç idrak organı.",
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
    mufradat_note: "Bir şeyi çare ve tedbir ile elde etmeye çalışmak. كَيْد: hile, tuzak; tedbir. كَادَ: tuzak kurdu. الله'ın keydi: cezalandırma planı (mekr gibi).",
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
    mufradat_note: "Bir şeyi salıvermek, göndermek. رَسُول: gönderilmiş elçi. رِسَالَة: elçilik mesajı. إِرْسَال: gönderme eylemi. Asıl anlam: yumuşaklıkla (zorlamadan) göndermek.",
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
    mufradat_note: "Rüzgârın esip savurması. عَصْف: rüzgâr, kasırga. عَصَفَ: sert esti. عَصْفٌ مَأْكُول: samanın yenmiş artığı (Fîl suresi).",
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
    mufradat_note: "Yemek yemek, tüketmek. أَكْل: yiyecek, gıda. Mecâzî: malı yemek (haksız kazanç), ateşin yakması. مَأْكُول: yenilmiş.",
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
    mufradat_note: "Ünsiyetle bir araya gelmek. أُلْفَة: ünsiyet, kaynaşma. إِيلَاف: Kureyş'in ticaret anlaşmaları (Kureyş suresi). تَأْلِيف: kalpleri birleştirme.",
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
    mufradat_note: "Açlık, karın boşluğu. جُوع: açlık. مَجَاعَة: kıtlık. Kur'ân'da Allah'ın sınavlarından biri olarak geçer (Bakara 2:155).",
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
    mufradat_note: "Zanna veya bilgiye dayanan bir işaretten yola çıkarak istenmeyen bir şeyin meydana geleceğini beklemek. خَوْف: gelecekteki kötülükten korku. Zıddı: أَمْن (emniyet).",
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
    mufradat_note: "Sözün gerçeğe uymaması. كَذِب: yalan. تَكْذِيب: yalanlamak. Yalanlama: hem söyle hem eylemle olur.",
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
    mufradat_note: "Gaflet, unutma. سَهْو: dalgınlık, kasıtsız unutma. سَاهُون: gafil olanlar (Mâûn 107:5). Namazdaki sehiv secdesi buradan.",
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
    mufradat_note: "Engellemek, vermemek. مَنْع: engel. مَنُوع: çok cimri (Me'âric 70:21). مَانِع: engelleyen. مَنِيع: sağlam, zor alınır.",
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
    mufradat_note: "Kesmek, koparmak (kuyruk kesmek). أَبْتَر: soyu kesik, hayırsız. Kevser suresi: asıl ebter düşmandır, Peygamber değil.",
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
    mufradat_note: "Boğazlamak (göğüsten). نَحْر: göğüsten kesim. اِنْحَر: Rabbine yönel ve kurban kes (Kevser 108:2). مُنْتَحَر: kesiş noktası.",
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
    mufradat_note: "Grup halinde gelip gitmek. فَوْج: topluluk, grup. أَفْوَاج: topluluklar. Nasr suresi: insanların bölük bölük İslâm'a girişi.",
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
    mufradat_note: "İçeri girmek. دُخُول: giriş. أَدْخَلَ: soktu. مُدْخَل: giriş yeri. Kur'ân'da cennete veya cehenneme giriş.",
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
    mufradat_note: "Hüsranda süreklilik, helâk. تَبَّتْ يَدَا أَبِي لَهَب: Ebu Leheb'in elleri kurusun. تَبَاب: sürekli kayıp/helâk.",
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
    mufradat_note: "Çalışarak elde etmek. كَسْب: kazanç. اِكْتِسَاب: özellikle günah kazanmak için (daha kasıtlı). Kur'ân'da hayır için كَسَبَ, şer için اكْتَسَبَ tercihi dikkat çeker.",
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
    mufradat_note: "Taşımak, yüklenmek. حَمْل: yük; gebelik. حَمَّال: taşıyıcı (حَمَّالَةَ الحَطَب). اِحْتِمَال: tahammül. تَحَمُّل: katlanma.",
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
    mufradat_note: "Alev, ateş alevinin parlaması. لَهَب: ateşin yalınları. تَلَهُّب: alevlenme. أَبُو لَهَب: Tebbet suresinde lâkap.",
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
    mufradat_note: "Sağlam bükülmüş ip. مَسَد: liften/hurma kabuğundan bükülmüş ip. حَبْلٌ مِنْ مَسَدٍ: Tebbet suresinde Ebu Leheb'in karısının boynundaki ip.",
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
  // ═══ SEVİYE 6 KÖKLERİ ═══
  "ص-م-د": {
    core: "yönelmek, kendine yeten, muhtaç olmayan",
    mufradat_note: "Yönelmek; dolu ve içi boş olmayan. الصَّمَد: her şeyin kendisine muhtaç olup O'nun hiçbir şeye muhtaç olmadığı (İhlâs suresi). صَمَدَ: kastetmek, yönelmek.",
    quran_count: 1,
    derivatives: [
      { form: "صَمَد", pattern: "فَعَل", type: "sıfat", meaning: "Samed, kendine yeten" },
    ],
    bab_chain: [
      { bab: "I", form: "صَمَدَ/يَصْمُدُ", meaning: "yöneldi, dayandı", semantic: "temel eylem", lessons: ["L51"] },
    ],
    cross_refs: [
      { lesson: "L51", verse: "112:2", form: "الصَّمَدُ", note: "Allah Samed'dir" },
    ],
    turkish_traces: [],
  },
  "ك-ف-أ": {
    core: "denk olmak, eşit olmak",
    mufradat_note: "Denk olmak, eşit olmak. كُفُؤ: denk, eş. لَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ: O'nun hiçbir dengi yoktur (İhlâs 112:4).",
    quran_count: 1,
    derivatives: [
      { form: "كُفُو", pattern: "فُعُول", type: "sıfat", meaning: "denk, eş" },
    ],
    bab_chain: [
      { bab: "III", form: "كَافَأَ/يُكَافِئُ", meaning: "karşılık verdi", semantic: "müfâ'ale", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L51", verse: "112:4", form: "كُفُوًا", note: "dengi olan hiç kimse yok" },
    ],
    turkish_traces: ["mükâfat"],
  },
  "و-ل-د": {
    core: "doğmak, doğurmak",
    mufradat_note: "Doğurmak, dünyaya getirmek. وَلَد: çocuk (oğlan+kız). وَالِد: baba. وَالِدَة: anne. تَوَلُّد: oluşma, türeme. وِلَادَة: doğum.",
    quran_count: 102,
    derivatives: [
      { form: "وَلَد", pattern: "فَعَل", type: "isim", meaning: "çocuk, evlat" },
      { form: "وَالِد", pattern: "فَاعِل", type: "ism-i fâil", meaning: "baba" },
      { form: "وَالِدَة", pattern: "فَاعِلَة", type: "ism-i fâil müe.", meaning: "anne" },
      { form: "مَوْلُود", pattern: "مَفْعُول", type: "ism-i mef'ûl", meaning: "doğurulan" },
    ],
    bab_chain: [
      { bab: "I", form: "وَلَدَ/يَلِدُ", meaning: "doğurdu", semantic: "temel eylem", lessons: ["L51"] },
    ],
    cross_refs: [
      { lesson: "L51", verse: "112:3", form: "يَلِدْ", note: "doğurmadı" },
      { lesson: "L51", verse: "112:3", form: "يُولَدْ", note: "doğurulmadı — mechûl" },
    ],
    turkish_traces: ["veled", "mevlid", "evlat"],
  },
  "ع-و-ذ": {
    core: "sığınmak, koruma aramak",
    mufradat_note: "Sığınmak, korunmak. اِسْتِعَاذَة: Allah'a sığınma (أَعُوذُ بِاللّٰه). مَعَاذ: sığınak. مُعَوِّذَتَان: Felak ve Nâs sureleri.",
    quran_count: 17,
    derivatives: [
      { form: "عِيَاذ", pattern: "فِعَال", type: "masdar", meaning: "sığınma" },
      { form: "مَعَاذ", pattern: "مَفْعَل", type: "masdar", meaning: "sığınak" },
    ],
    bab_chain: [
      { bab: "I", form: "عَاذَ/يَعُوذُ", meaning: "sığındı", semantic: "temel eylem", lessons: ["L52", "L53"] },
      { bab: "X", form: "اِسْتَعَاذَ/يَسْتَعِيذُ", meaning: "sığınma istedi", semantic: "talep", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L52", verse: "113:1", form: "أَعُوذُ", note: "Felak'ın Rabbine sığınırım" },
      { lesson: "L53", verse: "114:1", form: "أَعُوذُ", note: "Nâs'ın Rabbine sığınırım" },
    ],
    turkish_traces: ["istiâze"],
  },
  "غ-س-ق": {
    core: "karanlık çökmek",
    mufradat_note: "Karanlık çökmek, sızmak. غَسَق: karanlık (gecenin çökmesi). غَاسِق: karanlık çökünce. Felak suresinde: karanlığın şerrinden sığınma.",
    quran_count: 2,
    derivatives: [
      { form: "غَاسِق", pattern: "فَاعِل", type: "ism-i fâil", meaning: "karanlık, gece" },
    ],
    bab_chain: [
      { bab: "I", form: "غَسَقَ/يَغْسِقُ", meaning: "karanlık çöktü", semantic: "temel eylem", lessons: ["L52"] },
    ],
    cross_refs: [
      { lesson: "L52", verse: "113:3", form: "غَاسِقٍ", note: "karanlık gece" },
    ],
    turkish_traces: [],
  },
  "ن-ف-ث": {
    core: "üfürmek, tükürmek",
    mufradat_note: "Hafifçe üflemek (tükürüksüz). نَفْث: büyücülerin üflemesi. نَفَّاثَات فِي العُقَد: düğümlere üfleyen kadınlar (Felak 113:4).",
    quran_count: 1,
    derivatives: [
      { form: "نَفَّاثَات", pattern: "فَعَّالَات", type: "mübalağa müe. cem", meaning: "üfleyenler" },
    ],
    bab_chain: [
      { bab: "I", form: "نَفَثَ/يَنْفُثُ", meaning: "üfürdü", semantic: "temel eylem", lessons: ["L52"] },
    ],
    cross_refs: [
      { lesson: "L52", verse: "113:4", form: "النَّفَّاثَاتِ", note: "düğümlere üfleyenler" },
    ],
    turkish_traces: [],
  },
  "ع-ق-د": {
    core: "düğümlemek, bağlamak",
    mufradat_note: "Bağlamak, düğümlemek. عَقْد: sözleşme, anlaşma. عُقْدَة: düğüm. İ'tikâd: kalpte bağlanan inanç. عِقْد: kolye (bağlanmış inciler). تَعَاقُد: karşılıklı sözleşme.",
    quran_count: 7,
    derivatives: [
      { form: "عُقْدَة", pattern: "فُعْلَة", type: "isim", meaning: "düğüm" },
      { form: "عُقَد", pattern: "فُعَل", type: "cem-i teksîr", meaning: "düğümler" },
      { form: "عَقْد", pattern: "فَعْل", type: "masdar", meaning: "sözleşme" },
    ],
    bab_chain: [
      { bab: "I", form: "عَقَدَ/يَعْقِدُ", meaning: "bağladı", semantic: "temel eylem", lessons: ["L52"] },
    ],
    cross_refs: [
      { lesson: "L52", verse: "113:4", form: "العُقَدِ", note: "düğümler — büyü" },
    ],
    turkish_traces: ["akid", "akide"],
  },
  "ح-س-د": {
    core: "haset etmek, kıskanmak",
    mufradat_note: "Hak edenin elindeki nimetin elinden alınmasını arzu etmek. Bazen nimetin gitmesi için çalışmak da dahildir. Gıbta'dan farklı: gıbta aynı nimeti kendine de istemek (kıskançlık değil).",
    quran_count: 5,
    derivatives: [
      { form: "حَاسِد", pattern: "فَاعِل", type: "ism-i fâil", meaning: "haset eden" },
      { form: "حَسَد", pattern: "فَعَل", type: "masdar", meaning: "haset" },
    ],
    bab_chain: [
      { bab: "I", form: "حَسَدَ/يَحْسُدُ", meaning: "haset etti", semantic: "temel eylem", lessons: ["L52"] },
    ],
    cross_refs: [
      { lesson: "L52", verse: "113:5", form: "حَاسِدٍ", note: "haset edenin şerrinden" },
    ],
    turkish_traces: ["haset"],
  },
  "و-س-و-س": {
    core: "fısıldamak, vesvese vermek (tekrar kök)",
    quran_count: 6,
    derivatives: [
      { form: "وَسْوَاس", pattern: "فَعْلَال", type: "masdar/sıfat", meaning: "vesveseci" },
    ],
    bab_chain: [
      { bab: "—", form: "وَسْوَسَ/يُوَسْوِسُ", meaning: "vesvese verdi", semantic: "rubâî tekrar kök", lessons: ["L53"] },
    ],
    cross_refs: [
      { lesson: "L53", verse: "114:4", form: "الوَسْوَاسِ", note: "sinsi vesveseci" },
      { lesson: "L53", verse: "114:5", form: "يُوَسْوِسُ", note: "göğüslere vesvese verir" },
    ],
    turkish_traces: ["vesvese"],
  },
  "خ-ن-س": {
    core: "geri çekilmek, sinmek",
    quran_count: 2,
    derivatives: [
      { form: "خَنَّاس", pattern: "فَعَّال", type: "mübalağa", meaning: "sinsi, geri çekilen" },
    ],
    bab_chain: [
      { bab: "I", form: "خَنَسَ/يَخْنُسُ", meaning: "geri çekildi", semantic: "temel eylem", lessons: ["L53"] },
    ],
    cross_refs: [
      { lesson: "L53", verse: "114:4", form: "الخَنَّاسِ", note: "zikir duyunca sinen" },
    ],
    turkish_traces: [],
  },
  "ط-غ-ي": {
    core: "azmak, haddi aşmak",
    quran_count: 39,
    derivatives: [
      { form: "طُغْيَان", pattern: "فُعْلَان", type: "masdar", meaning: "azgınlık" },
      { form: "طَاغُوت", pattern: "فَاعُول", type: "isim", meaning: "tağut, azgın güç" },
    ],
    bab_chain: [
      { bab: "I", form: "طَغَى/يَطْغَى", meaning: "azdı", semantic: "temel eylem", lessons: ["L55"] },
    ],
    cross_refs: [
      { lesson: "L55", verse: "96:6", form: "لَيَطْغَى", note: "insan mutlaka azar" },
    ],
    turkish_traces: ["tağut", "tuğyan"],
  },
  "ط-و-ع": {
    core: "itaat etmek, boyun eğmek",
    mufradat_note: "İsteyerek boyun eğmek, gönüllü itaat etmek. طَاعَة: itaat. İstita'at: güç yetirmek. تَطَوُّع: gönüllü ibadet (nafile). Zıddı: كُرْه (kerhen/zorla).",
    quran_count: 78,
    derivatives: [
      { form: "طَاعَة", pattern: "فَعَالَة", type: "masdar", meaning: "itaat" },
      { form: "مُطِيع", pattern: "مُفْعِل", type: "ism-i fâil IV", meaning: "itaat eden" },
    ],
    bab_chain: [
      { bab: "IV", form: "أَطَاعَ/يُطِيعُ", meaning: "itaat etti", semantic: "ta'diye", lessons: ["L55"] },
    ],
    cross_refs: [
      { lesson: "L55", verse: "96:19", form: "تُطِعْهُ", note: "ona itaat etme" },
    ],
    turkish_traces: ["itaat", "mutî"],
  },
  "س-ج-د": {
    core: "secde etmek, boyun eğmek",
    mufradat_note: "Eğilmek, boyun eğmek, alın yere koymak. سُجُود: Allah'a en yüksek tevazu ifadesi. مَسْجِد: secde edilen yer. Her varlığın Allah'a boyun eğmesi bir çeşit secdedir.",
    quran_count: 92,
    derivatives: [
      { form: "سَجْدَة", pattern: "فَعْلَة", type: "isim", meaning: "secde" },
      { form: "مَسْجِد", pattern: "مَفْعِل", type: "ism-i mekân", meaning: "mescid" },
      { form: "سَاجِد", pattern: "فَاعِل", type: "ism-i fâil", meaning: "secde eden" },
    ],
    bab_chain: [
      { bab: "I", form: "سَجَدَ/يَسْجُدُ", meaning: "secde etti", semantic: "temel eylem", lessons: ["L55"] },
    ],
    cross_refs: [
      { lesson: "L55", verse: "96:19", form: "وَاسْجُدْ", note: "secde et ve yaklaş" },
    ],
    turkish_traces: ["secde", "mescid"],
  },
  "ق-ر-ب": {
    core: "yaklaşmak, yakınlık",
    mufradat_note: "Yakınlık — mekân, zaman, mertebe bakımından. قُرْبَان: Allah'a yaklaşma vesilesi. تَقَرُّب: Allah'a yaklaşmak. قَرِيب: yakın olan. مُقَرَّبُون: Allah'a en yakın olanlar.",
    quran_count: 96,
    derivatives: [
      { form: "قَرِيب", pattern: "فَعِيل", type: "sıfat", meaning: "yakın" },
      { form: "قُرْبَان", pattern: "فُعْلَان", type: "isim", meaning: "kurban" },
    ],
    bab_chain: [
      { bab: "I", form: "قَرُبَ/يَقْرُبُ", meaning: "yaklaştı", semantic: "temel eylem", lessons: [] },
      { bab: "VIII", form: "اِقْتَرَبَ/يَقْتَرِبُ", meaning: "kendisi yaklaştı", semantic: "mutâva'a", lessons: ["L55"] },
    ],
    cross_refs: [
      { lesson: "L55", verse: "96:19", form: "وَاقْتَرِبْ", note: "yaklaş — VIII. bâb" },
    ],
    turkish_traces: ["kurban", "akraba"],
  },
  "و-د-ع": {
    core: "bırakmak, terk etmek",
    mufradat_note: "Bırakmak, terk etmek. وَدَاع: veda. وَدِيعَة: emanet bırakılan şey. مَا وَدَّعَكَ رَبُّكَ: Rabbin seni terk etmedi (Duhâ 93:3).",
    quran_count: 2,
    derivatives: [
      { form: "تَوْدِيع", pattern: "تَفْعِيل", type: "masdar II", meaning: "veda" },
    ],
    bab_chain: [
      { bab: "II", form: "وَدَّعَ/يُوَدِّعُ", meaning: "terk etti", semantic: "te'kîd", lessons: ["L54"] },
    ],
    cross_refs: [
      { lesson: "L54", verse: "93:3", form: "وَدَّعَكَ", note: "Rabbin seni terk etmedi" },
    ],
    turkish_traces: ["veda"],
  },
  // ═══ v0.18 — Nebe + Nâzi'ât kökleri ═══
  "ف-ص-ل": {
    core: "ayırmak, hüküm vermek, bölmek",
    mufradat_note: "Ayırmak, kesmek. فَصْل: ayırma; mevsim; karar. فَاصِلَة: ayet sonu. تَفْصِيل: ayrıntılı açıklama. فَيْصَل: kesin hüküm.",
    quran_count: 43,
    derivatives: [
      { form: "فَصْل", pattern: "فَعْل", type: "masdar", meaning: "hüküm, ayırma, bölüm" },
      { form: "مُفَصَّل", pattern: "مُفَعَّل", type: "ism-i mef'ûl II", meaning: "ayrıntılı" },
      { form: "فَاصِل", pattern: "فَاعِل", type: "ism-i fâil", meaning: "ayıran" },
    ],
    bab_chain: [
      { bab: "I", form: "فَصَلَ/يَفْصِلُ", meaning: "ayırdı", semantic: "temel", lessons: ["L56"] },
      { bab: "II", form: "فَصَّلَ/يُفَصِّلُ", meaning: "ayrıntıladı", semantic: "teksîr", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L56", verse: "78:17", form: "الفَصْلِ", note: "يَوْمَ الفَصْلِ — hüküm günü" },
    ],
    turkish_traces: ["fasıl", "tafsîlât"],
  },
  "ف-ت-ح": {
    core: "açmak, fethetmek",
    mufradat_note: "Bir engeli kaldırmak, kapalı olan şeyi açmak. فَتْح: zafer (engellerin kalkması). اِسْتِفْتَاح: açılış talebi. مِفْتَاح: anahtar. فَتَّاح: her kapıyı açan (Allah).",
    quran_count: 38,
    derivatives: [
      { form: "فَتْح", pattern: "فَعْل", type: "masdar", meaning: "açma, fetih" },
      { form: "مِفْتَاح", pattern: "مِفْعَال", type: "ism-i âlet", meaning: "anahtar" },
      { form: "فَتَّاح", pattern: "فَعَّال", type: "mübalağa", meaning: "çok açan" },
    ],
    bab_chain: [
      { bab: "I", form: "فَتَحَ/يَفْتَحُ", meaning: "açtı", semantic: "temel", lessons: ["L56"] },
    ],
    cross_refs: [
      { lesson: "L56", verse: "78:19", form: "فُتِحَتِ", note: "gök açıldı — mechûl" },
    ],
    turkish_traces: ["fetih", "fâtih", "miftah"],
  },
  "ن-ف-خ": {
    core: "üflemek, şişirmek",
    mufradat_note: "Üflemek. نَفْخ: üfleme. نَفْخُ الصُّور: Sûr'a üflenmesi (kıyamet). اِنْتِفَاخ: şişme, kibirlenme.",
    quran_count: 12,
    derivatives: [
      { form: "نَفْخ", pattern: "فَعْل", type: "masdar", meaning: "üfleme" },
      { form: "نَفْخَة", pattern: "فَعْلَة", type: "marr (bir kez)", meaning: "tek üfleyiş" },
    ],
    bab_chain: [
      { bab: "I", form: "نَفَخَ/يَنْفُخُ", meaning: "üfledi", semantic: "temel", lessons: ["L56"] },
    ],
    cross_refs: [
      { lesson: "L56", verse: "78:18", form: "يُنفَخُ", note: "Sûr'a üflenir — mechûl" },
    ],
    turkish_traces: ["nefha"],
  },
  "ف-و-ز": {
    core: "kurtulmak, kazanmak, başarı",
    mufradat_note: "Tehlikeden kurtulup hayra ulaşmak. فَوْز: kurtuluş + kazanç birlikte. فَوْزٌ عَظِيم: büyük kurtuluş (Kur'ân'da cennete kavuşmak).",
    quran_count: 29,
    derivatives: [
      { form: "فَوْز", pattern: "فَعْل", type: "masdar", meaning: "kurtuluş" },
      { form: "مَفَاز", pattern: "مَفْعَل", type: "ism-i mekân", meaning: "kurtuluş yeri" },
      { form: "فَائِز", pattern: "فَاعِل", type: "ism-i fâil", meaning: "kurtulan" },
    ],
    bab_chain: [
      { bab: "I", form: "فَازَ/يَفُوزُ", meaning: "kurtuldu", semantic: "temel", lessons: ["L58"] },
    ],
    cross_refs: [
      { lesson: "L58", verse: "78:31", form: "مَفَازًا", note: "muttakîler için kurtuluş" },
    ],
    turkish_traces: ["fevz", "fâiz"],
  },
  "ر-ج-ف": {
    core: "sarsmak, sallanmak, titremek",
    mufradat_note: "Şiddetli sarsıntı. رَجْفَة: büyük deprem/sarsıntı. اِرْتِجَاف: titreyiş. Kur'ân'da ilâhî azap sarsıntısı olarak gelir.",
    quran_count: 5,
    derivatives: [
      { form: "رَجْفَة", pattern: "فَعْلَة", type: "masdar", meaning: "sarsıntı" },
      { form: "رَاجِفَة", pattern: "فَاعِلَة", type: "ism-i fâil", meaning: "sarsan (birinci sûr)" },
    ],
    bab_chain: [
      { bab: "I", form: "رَجَفَ/يَرْجُفُ", meaning: "sarsıldı", semantic: "temel", lessons: ["L59"] },
    ],
    cross_refs: [
      { lesson: "L59", verse: "79:6", form: "الرَّاجِفَة", note: "birinci sûr sarsıntısı" },
    ],
    turkish_traces: [],
  },
  "ر-د-ف": {
    core: "arkasından gelmek, takip etmek",
    mufradat_note: "Peş peşe gelmek, birbirini takip etmek. رِدْف: arkadan gelen. مُتَرَادِف: eş anlamlı (birbiri ardınca gelen). إِرْدَاف: arkasına bindirmek.",
    quran_count: 4,
    derivatives: [
      { form: "رَادِفَة", pattern: "فَاعِلَة", type: "ism-i fâil", meaning: "arkadan gelen" },
      { form: "رِدْف", pattern: "فِعْل", type: "isim", meaning: "ardıl" },
    ],
    bab_chain: [
      { bab: "I", form: "رَدَفَ/يَرْدُفُ", meaning: "arkasından geldi", semantic: "temel", lessons: ["L59"] },
    ],
    cross_refs: [
      { lesson: "L59", verse: "79:7", form: "الرَّادِفَة", note: "ikinci sûr (dirilten)" },
    ],
    turkish_traces: ["redîf"],
  },
  "خ-ش-ي": {
    core: "derin korku, saygılı korku (haşyet)",
    mufradat_note: "Bilgiye dayanan korku. خَشْيَة: ilimle birlikte gelen korku (havftan daha özel). إِنَّمَا يَخْشَى اللّٰهَ مِنْ عِبَادِهِ العُلَمَاءُ: ancak âlimler Allah'tan haşyet duyar.",
    quran_count: 48,
    derivatives: [
      { form: "خَشْيَة", pattern: "فَعْلَة", type: "masdar", meaning: "haşyet, derin korku" },
      { form: "خَاشِع", pattern: "فَاعِل", type: "ism-i fâil", meaning: "boyun eğen" },
    ],
    bab_chain: [
      { bab: "I", form: "خَشِيَ/يَخْشَى", meaning: "korktu (saygıyla)", semantic: "temel", lessons: ["L59", "L60", "L62"] },
    ],
    cross_refs: [
      { lesson: "L59", verse: "79:9", form: "خَاشِعَة", note: "gözleri boyun eğmiş" },
      { lesson: "L60", verse: "79:19", form: "فَتَخْشَى", note: "korkasın" },
      { lesson: "L60", verse: "79:26", form: "يَخْشَى", note: "bunda korkan için ibret" },
      { lesson: "L62", verse: "79:45", form: "يَخْشَاهَا", note: "kıyametten korkan" },
    ],
    turkish_traces: ["haşyet"],
  },
  "ط-غ-ي": {
    core: "haddi aşmak, azgınlık, taşmak",
    quran_count: 39,
    derivatives: [
      { form: "طُغْيَان", pattern: "فُعْلَان", type: "masdar", meaning: "azgınlık" },
      { form: "طَاغِي", pattern: "فَاعِل", type: "ism-i fâil", meaning: "azgın" },
      { form: "طَاغُوت", pattern: "—", type: "isim", meaning: "tâğût (azgın güç)" },
    ],
    bab_chain: [
      { bab: "I", form: "طَغَى/يَطْغَى", meaning: "azdı", semantic: "temel", lessons: ["L57", "L60", "L61"] },
    ],
    cross_refs: [
      { lesson: "L57", verse: "78:22", form: "لِلطَّاغِينَ", note: "azgınlar için dönüş yeri" },
      { lesson: "L60", verse: "79:17", form: "طَغَى", note: "Fir'avn azdı" },
      { lesson: "L61", verse: "79:37", form: "طَغَى", note: "kim azarsa" },
    ],
    turkish_traces: ["tuğyân"],
  },
  "ق-د-س": {
    core: "kutsamak, kutsal kılmak, arındırmak",
    mufradat_note: "Kirden, noksandan arınmak. قُدُّوس: her türlü eksiklikten münezzeh (Allah). تَقْدِيس: Allah'ı tenzih etme. أَرْضُ المُقَدَّسَة: kutsal/arınmış toprak.",
    quran_count: 10,
    derivatives: [
      { form: "قُدُس", pattern: "فُعُل", type: "isim", meaning: "kutsallık" },
      { form: "مُقَدَّس", pattern: "مُفَعَّل", type: "ism-i mef'ûl II", meaning: "kutsanmış" },
      { form: "تَقْدِيس", pattern: "تَفْعِيل", type: "masdar II", meaning: "takdîs" },
    ],
    bab_chain: [
      { bab: "II", form: "قَدَّسَ/يُقَدِّسُ", meaning: "kutsadı", semantic: "te'kîd", lessons: ["L60"] },
    ],
    cross_refs: [
      { lesson: "L60", verse: "79:16", form: "المُقَدَّسِ", note: "kutsal vadi (Tuvâ)" },
    ],
    turkish_traces: ["kuds", "Kudüs", "takdîs", "mukaddes"],
  },
  "د-ح-و": {
    core: "yaymak, yumurta biçiminde sermek",
    mufradat_note: "Bir şeyi yerinden gidermek, yaymak. دَحَاهَا: yeryüzünü yaydı (Nâziât 79:30). دَحْو: yayma, uzatma.",
    quran_count: 1,
    derivatives: [
      { form: "دَحْو", pattern: "فَعْل", type: "masdar", meaning: "yayma" },
      { form: "أُدْحِيَّة", pattern: "—", type: "isim", meaning: "devekuşu yumurta yatağı" },
    ],
    bab_chain: [
      { bab: "I", form: "دَحَا/يَدْحُو", meaning: "yaydı", semantic: "temel", lessons: ["L61"] },
    ],
    cross_refs: [
      { lesson: "L61", verse: "79:30", form: "دَحَاهَا", note: "yeryüzünü yaydı (yumurta biçimi)" },
    ],
    turkish_traces: [],
  },
  "ن-ه-ي": {
    core: "yasaklamak, alıkoymak, sona ermek",
    quran_count: 56,
    derivatives: [
      { form: "نَهْي", pattern: "فَعْل", type: "masdar", meaning: "yasaklama" },
      { form: "مُنْتَهَى", pattern: "مُفْتَعَل", type: "ism-i mekân/zaman VIII", meaning: "son nokta" },
      { form: "نِهَايَة", pattern: "فِعَالَة", type: "masdar", meaning: "son" },
    ],
    bab_chain: [
      { bab: "I", form: "نَهَى/يَنْهَى", meaning: "yasakladı", semantic: "temel", lessons: ["L62"] },
      { bab: "VIII", form: "اِنْتَهَى/يَنْتَهِي", meaning: "sona erdi", semantic: "mutâva'at", lessons: ["L62"] },
    ],
    cross_refs: [
      { lesson: "L62", verse: "79:40", form: "نَهَى", note: "nefsi hevâdan alıkoydu" },
      { lesson: "L62", verse: "79:44", form: "مُنْتَهَاهَا", note: "son bilgisi Rabbine ait" },
    ],
    turkish_traces: ["nehy", "nihâyet", "müntehâ"],
  },

  // ═══════════════════════════════════════════════════════════
  // v0.27 — Faz A-5b: Surelerdeki Eksik Kökler (50 kök)
  // ═══════════════════════════════════════════════════════════

  "س-م-و": {
    core: "yükselmek, yüce olmak",
    mufradat_note: "Yükseklik anlamı esastır. Semâ (gök): yüksekte olan her şey. İsim: bir şeyi diğerlerinden ayırt eden yüce işaret. Allah'ın isimleri (el-Esmâü'l-Hüsnâ) buradan gelir.",
    quran_count: 381, derivatives: [
      { form: "سَمَاء", pattern: "فَعَال", type: "isim", meaning: "gök" },
      { form: "اِسْم", pattern: "اِفْع", type: "isim", meaning: "isim" },
      { form: "سَمِيع", pattern: "فَعِيل", type: "sıfat", meaning: "işiten" },
    ],
    bab_chain: [{ bab: "I", form: "سَمَا/يَسْمُو", meaning: "yükseldi", semantic: "temel eylem", lessons: [] }],
    cross_refs: [], turkish_traces: ["semâ", "esmâ", "isim", "müsemmâ"],
  },
  "أ-ر-ض": {
    core: "alçak olmak, yer/zemin",
    mufradat_note: "Semâ'nın zıddı. Yer, zemin, alt kısım. أَرْض kelimesi Kur'an'da hem fiziksel dünya hem de 'duruş, sebat yeri' anlamında kullanılır.",
    quran_count: 461, derivatives: [
      { form: "أَرْض", pattern: "فَعْل", type: "isim", meaning: "yer, dünya" },
    ],
    bab_chain: [], cross_refs: [], turkish_traces: ["arz", "arazi", "arîza"],
  },
  "ش-ي-أ": {
    core: "dilemek, istemek",
    mufradat_note: "Şey: var olan, bilinen veya bilinebilen her şey. Meşîet: irade, dileme. Allah'ın meşîeti mutlak, kulun meşîeti izâfîdir.",
    quran_count: 519, derivatives: [
      { form: "شَيْء", pattern: "فَعْل", type: "isim", meaning: "şey" },
      { form: "مَشِيئَة", pattern: "مَفْعِلَة", type: "masdar", meaning: "irade, dileme" },
    ],
    bab_chain: [{ bab: "I", form: "شَاءَ/يَشَاءُ", meaning: "diledi", semantic: "temel eylem", lessons: [] }],
    cross_refs: [], turkish_traces: ["şey", "meşîet"],
  },
  "و-ج-ه": {
    core: "yönelmek, yüz",
    mufradat_note: "Vech: yüz, bir şeyin en belirgin yönü. Allah'a izâfetle (vechullah): Allah'ın zâtı, rızâsı. Cihet/yön, teveccüh (yönelme) bu kökten.",
    quran_count: 75, derivatives: [
      { form: "وَجْه", pattern: "فَعْل", type: "isim", meaning: "yüz" },
      { form: "وِجْهَة", pattern: "فِعْلَة", type: "isim", meaning: "yön, kıble" },
    ],
    bab_chain: [{ bab: "II", form: "وَجَّهَ/يُوَجِّهُ", meaning: "yönlendirdi", semantic: "ta'diye", lessons: [] }],
    cross_refs: [], turkish_traces: ["vecih", "cihet", "teveccüh", "vecîze"],
  },
  "ب-ص-ر": {
    core: "görmek, idrak etmek",
    mufradat_note: "Basar: gözle görme. Basîret: kalple görme, anlayış. İkisi de bu kökten — Kur'an basar ve basîreti ayırt eder. Tabassar: ders almak, ibretle bakmak.",
    quran_count: 148, derivatives: [
      { form: "بَصَر", pattern: "فَعَل", type: "isim", meaning: "görme, göz" },
      { form: "بَصِير", pattern: "فَعِيل", type: "sıfat", meaning: "gören" },
      { form: "بَصِيرَة", pattern: "فَعِيلَة", type: "isim", meaning: "basîret, anlayış" },
    ],
    bab_chain: [
      { bab: "I", form: "بَصُرَ/يَبْصُرُ", meaning: "gördü", semantic: "temel eylem", lessons: [] },
      { bab: "IV", form: "أَبْصَرَ/يُبْصِرُ", meaning: "gördü, fark etti", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [], turkish_traces: ["basar", "basîret", "ibsar"],
  },
  "ن-ذ-ر": {
    core: "uyarmak, korkutarak haber vermek",
    mufradat_note: "Nezîr/münzir: uyarıcı — müjdeci (beşîr) ile çift gelir. Nübüvvetin iki yüzü: tebşîr ve inzâr. Nezr (adak) farklı bir anlamdır ama aynı kökten: 'kendini bir şeye adamak.'",
    quran_count: 130, derivatives: [
      { form: "نَذِير", pattern: "فَعِيل", type: "sıfat", meaning: "uyarıcı" },
      { form: "نُذُر", pattern: "فُعُل", type: "cem", meaning: "uyarılar" },
      { form: "مُنْذِر", pattern: "مُفْعِل", type: "ism-i fâil", meaning: "uyarıcı" },
    ],
    bab_chain: [
      { bab: "I", form: "نَذَرَ/يَنْذِرُ", meaning: "adadı", semantic: "temel", lessons: [] },
      { bab: "IV", form: "أَنْذَرَ/يُنْذِرُ", meaning: "uyardı", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [], turkish_traces: ["nezir", "inzâr", "münzir"],
  },
  "ج-ي-أ": {
    core: "gelmek",
    mufradat_note: "Gelme fiili. أَتَى ile farkı: جَاءَ daha ağır/ciddi gelişleri ifade eder, genelde zorlu veya önemli bir şeyin gelişi.",
    quran_count: 278, derivatives: [
      { form: "مَجِيء", pattern: "مَفْعِل", type: "masdar", meaning: "geliş" },
    ],
    bab_chain: [{ bab: "I", form: "جَاءَ/يَجِيءُ", meaning: "geldi", semantic: "temel", lessons: [] }],
    cross_refs: [], turkish_traces: [],
  },
  "ف-ك-ه": {
    core: "meyve, zevk, lezzet",
    mufradat_note: "Fâkihe: meyve — hem fiziksel hem mecâzî zevk. Tafakkuh: bir şeyden zevk alma. Cennet tasvirlerinde bolca geçer.",
    quran_count: 14, derivatives: [
      { form: "فَاكِهَة", pattern: "فَاعِلَة", type: "isim", meaning: "meyve" },
      { form: "فَكِه", pattern: "فَعِل", type: "sıfat", meaning: "neşeli, zevk alan" },
    ],
    bab_chain: [], cross_refs: [], turkish_traces: ["fakîhe", "fükâhe"],
  },
  "ن-خ-ل": {
    core: "hurma ağacı",
    quran_count: 22, derivatives: [
      { form: "نَخْل", pattern: "فَعْل", type: "isim", meaning: "hurma" },
      { form: "نَخْلَة", pattern: "فَعْلَة", type: "isim", meaning: "bir hurma ağacı" },
    ],
    bab_chain: [], cross_refs: [], turkish_traces: ["nahil", "nahl"],
  },
  "ب-ح-ر": {
    core: "geniş su kütlesi, deniz",
    mufradat_note: "Bahr: deniz — geniş, derin, sınırları belirsiz alan. Kur'an'da hem gerçek deniz hem de ilim/bolluk mecâzı.",
    quran_count: 41, derivatives: [
      { form: "بَحْر", pattern: "فَعْل", type: "isim", meaning: "deniz" },
    ],
    bab_chain: [], cross_refs: [], turkish_traces: ["bahir", "bahriye", "Bahreyn"],
  },
  "ل-ق-ي": {
    core: "karşılaşmak, kavuşmak",
    mufradat_note: "Likâ: karşılaşma. Allah'ın likâsı: âhirette Allah ile karşılaşma. İlkâ: bırakmak, atmak. Telâkî: birbirine kavuşma.",
    quran_count: 145, derivatives: [
      { form: "لِقَاء", pattern: "فِعَال", type: "masdar", meaning: "karşılaşma" },
      { form: "تَلَاقٍ", pattern: "تَفَاعُل", type: "masdar", meaning: "buluşma" },
    ],
    bab_chain: [
      { bab: "I", form: "لَقِيَ/يَلْقَى", meaning: "karşılaştı", semantic: "temel", lessons: [] },
      { bab: "IV", form: "أَلْقَى/يُلْقِي", meaning: "attı, bıraktı", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [], turkish_traces: ["likâ", "mülâkât", "telâkî"],
  },
  "ر-ج-ع": {
    core: "dönmek, geri gelmek",
    mufradat_note: "Rücû: dönüş. Allah'a rücû: ölümden sonra Allah'a dönüş. Merci': dönüş yeri. Hem fiziksel hem manevî dönüş.",
    quran_count: 104, derivatives: [
      { form: "رُجُوع", pattern: "فُعُول", type: "masdar", meaning: "dönüş" },
      { form: "مَرْجِع", pattern: "مَفْعِل", type: "ism-i mekân", meaning: "dönüş yeri" },
    ],
    bab_chain: [{ bab: "I", form: "رَجَعَ/يَرْجِعُ", meaning: "döndü", semantic: "temel", lessons: [] }],
    cross_refs: [], turkish_traces: ["rücû", "merci", "irticâ"],
  },
  "ع-ذ-ب": {
    core: "tatlılık, azap",
    mufradat_note: "İlginç bir kök: hem tatlı su (عَذْب) hem acı azap (عَذَاب) anlamı taşır. Zıt anlamlılık (ezdâd). Azap: tatlılığı yok eden şey.",
    quran_count: 370, derivatives: [
      { form: "عَذَاب", pattern: "فَعَال", type: "masdar", meaning: "azap" },
      { form: "عَذْب", pattern: "فَعْل", type: "sıfat", meaning: "tatlı (su)" },
    ],
    bab_chain: [{ bab: "II", form: "عَذَّبَ/يُعَذِّبُ", meaning: "azap etti", semantic: "teksîr", lessons: [] }],
    cross_refs: [], turkish_traces: ["azap", "ta'zîb", "muazzeb"],
  },
  "س-م-ع": {
    core: "işitmek, duymak",
    mufradat_note: "Sem': işitme duyusu. Semî': çok işiten (Allah'ın sıfatı). İstimâ': dikkatle dinleme. Basar ile çift gelir: sem' ve basar.",
    quran_count: 185, derivatives: [
      { form: "سَمْع", pattern: "فَعْل", type: "masdar", meaning: "işitme" },
      { form: "سَمِيع", pattern: "فَعِيل", type: "sıfat", meaning: "işiten" },
    ],
    bab_chain: [{ bab: "I", form: "سَمِعَ/يَسْمَعُ", meaning: "işitti", semantic: "temel", lessons: [] }],
    cross_refs: [], turkish_traces: ["sem'", "semâ'", "sâmi'"],
  },
  "ر-ز-ق": {
    core: "rızık vermek, nasiplendirmek",
    mufradat_note: "Rızk: Allah'ın kullarına verdiği her şey — yiyecek, bilgi, sağlık, iman. Rezzâk: çok rızık veren (mübalağa). Rızk sadece maddî değil, manevî de olabilir.",
    quran_count: 123, derivatives: [
      { form: "رِزْق", pattern: "فِعْل", type: "isim", meaning: "rızık" },
      { form: "رَزَّاق", pattern: "فَعَّال", type: "mübalağa", meaning: "çok rızık veren" },
    ],
    bab_chain: [{ bab: "I", form: "رَزَقَ/يَرْزُقُ", meaning: "rızık verdi", semantic: "temel", lessons: [] }],
    cross_refs: [], turkish_traces: ["rızık", "Rezzâk", "razık"],
  },
  "د-ع-و": {
    core: "çağırmak, davet etmek, dua etmek",
    mufradat_note: "Üç temel anlam: 1) Çağırmak/davet, 2) Dua/yakarış, 3) İddia etmek. Da'vet: çağrı. Du'â: Allah'a yakarış. İddi'â: hak iddiası.",
    quran_count: 212, derivatives: [
      { form: "دُعَاء", pattern: "فُعَال", type: "masdar", meaning: "dua, çağrı" },
      { form: "دَعْوَة", pattern: "فَعْلَة", type: "isim", meaning: "davet, çağrı" },
    ],
    bab_chain: [{ bab: "I", form: "دَعَا/يَدْعُو", meaning: "çağırdı, dua etti", semantic: "temel", lessons: [] }],
    cross_refs: [], turkish_traces: ["dua", "davet", "dâvâ", "iddia"],
  },
  "ن-ف-س": {
    core: "nefes, can, öz",
    mufradat_note: "Nefs: ruh, can, kişinin kendisi. Kur'an'da üç mertebeyle gelir: nefs-i emmâre (kötülüğü emreden), levvâme (kınayan), mutmaınne (huzura eren).",
    quran_count: 298, derivatives: [
      { form: "نَفْس", pattern: "فَعْل", type: "isim", meaning: "nefis, can, öz" },
      { form: "أَنْفُس", pattern: "أَفْعُل", type: "cem", meaning: "nefisler, canlar" },
      { form: "تَنَفُّس", pattern: "تَفَعُّل", type: "masdar", meaning: "nefes alma" },
    ],
    bab_chain: [{ bab: "V", form: "تَنَفَّسَ/يَتَنَفَّسُ", meaning: "nefes aldı", semantic: "tedrîcî", lessons: [] }],
    cross_refs: [], turkish_traces: ["nefis", "nefes", "enfüs", "teneffüs"],
  },
  "أ-م-ر": {
    core: "emretmek, iş/durum",
    mufradat_note: "Emr iki anlamda: 1) Emir (buyruk), 2) İş/durum (أَمْر = mesele). Emîr: emreden. Me'mûr: emredilen. Ümerâ: yöneticiler.",
    quran_count: 248, derivatives: [
      { form: "أَمْر", pattern: "فَعْل", type: "masdar/isim", meaning: "emir, iş" },
      { form: "أَمِير", pattern: "فَعِيل", type: "sıfat", meaning: "emîr" },
    ],
    bab_chain: [{ bab: "I", form: "أَمَرَ/يَأْمُرُ", meaning: "emretti", semantic: "temel", lessons: [] }],
    cross_refs: [], turkish_traces: ["emir", "âmir", "me'mûr", "emîr"],
  },
  "م-و-ت": {
    core: "ölmek",
    mufradat_note: "Mevt: hayatın zıddı. Kur'an'da hem fiziksel ölüm hem manevî ölüm (gaflet, küfür). Mülk 67:2'de ölüm hayattan ÖNCE zikredilir — takvâ hatırlatması.",
    quran_count: 165, derivatives: [
      { form: "مَوْت", pattern: "فَعْل", type: "masdar", meaning: "ölüm" },
      { form: "مَيِّت", pattern: "فَيْعِل", type: "sıfat", meaning: "ölü" },
    ],
    bab_chain: [
      { bab: "I", form: "مَاتَ/يَمُوتُ", meaning: "öldü", semantic: "temel", lessons: [] },
      { bab: "IV", form: "أَمَاتَ/يُمِيتُ", meaning: "öldürdü", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [], turkish_traces: ["mevt", "meyyit", "mevtâ"],
  },
  "ب-ر-ك": {
    core: "bereketlenmek, bolluk",
    mufradat_note: "Bereket: ilâhî hayrın çoğalması ve devamı. Mübârek: bereketli kılınmış. Tebâreke: ne yücedir (yalnız Allah için). Bereket: az olan şeyin çok fayda vermesi.",
    quran_count: 32, derivatives: [
      { form: "بَرَكَة", pattern: "فَعَلَة", type: "isim", meaning: "bereket" },
      { form: "مُبَارَك", pattern: "مُفَاعَل", type: "ism-i mef'ûl", meaning: "mübârek" },
    ],
    bab_chain: [
      { bab: "I", form: "بَرَكَ/يَبْرُكُ", meaning: "çöktü (deve)", semantic: "temel", lessons: [] },
      { bab: "VI", form: "تَبَارَكَ/يَتَبَارَكُ", meaning: "ne yücedir", semantic: "ta'zîm (yalnız Allah)", lessons: [] },
    ],
    cross_refs: [], turkish_traces: ["bereket", "mübârek", "tebrik"],
  },
  "س-ع-ر": {
    core: "tutuşturmak, alevlendirmek",
    mufradat_note: "Se'îr: alevlenmiş, çılgınca yanan. Cehennem isimlerinden biri. Su'r: delilik, çılgınlık — ateşin ve aklın kontrolsüz hali aynı kökten.",
    quran_count: 17, derivatives: [
      { form: "سَعِير", pattern: "فَعِيل", type: "isim", meaning: "alevli ateş, cehennem" },
      { form: "سُعُر", pattern: "فُعُل", type: "masdar", meaning: "çılgınlık" },
    ],
    bab_chain: [{ bab: "I", form: "سَعَرَ/يَسْعَرُ", meaning: "tutuşturdu", semantic: "temel", lessons: [] }],
    cross_refs: [], turkish_traces: ["saîr"],
  },
  "ك-ل-ل": {
    core: "bütünü kuşatmak, her",
    quran_count: 160, derivatives: [
      { form: "كُلّ", pattern: "فُعْل", type: "isim", meaning: "her, bütün" },
    ],
    bab_chain: [], cross_refs: [], turkish_traces: ["küll", "küllî", "külliyât"],
  },
  "ن-ف-ذ": {
    core: "geçmek, nüfuz etmek",
    quran_count: 2, derivatives: [
      { form: "نُفُوذ", pattern: "فُعُول", type: "masdar", meaning: "nüfuz, geçme" },
    ],
    bab_chain: [{ bab: "I", form: "نَفَذَ/يَنْفُذُ", meaning: "geçti", semantic: "temel", lessons: [] }],
    cross_refs: [], turkish_traces: ["nüfûz", "enfâz", "nâfiz"],
  },
  "ع-ي-ن": {
    core: "göz, kaynak, ayn harfi",
    mufradat_note: "Ayn: göz, pınar, casus, bir şeyin kendisi. Kur'an'da hûr-u 'în (iri gözlü huriler), cennet pınarları için kullanılır.",
    quran_count: 65, derivatives: [
      { form: "عَيْن", pattern: "فَعْل", type: "isim", meaning: "göz, kaynak" },
      { form: "مَعِين", pattern: "مَفْعِل", type: "sıfat", meaning: "akarsu, kaynak" },
    ],
    bab_chain: [], cross_refs: [], turkish_traces: ["ayn", "aynî", "muâyene"],
  },
  "ن-ص-ي": {
    core: "alın, perçem",
    quran_count: 4, derivatives: [
      { form: "نَاصِيَة", pattern: "فَاعِلَة", type: "isim", meaning: "alın, perçem" },
    ],
    bab_chain: [], cross_refs: [], turkish_traces: ["nâsiye"],
  },
  "ص-ح-ب": {
    core: "arkadaş olmak, birlikte olmak",
    quran_count: 97, derivatives: [
      { form: "صَاحِب", pattern: "فَاعِل", type: "ism-i fâil", meaning: "arkadaş, sahip" },
      { form: "أَصْحَاب", pattern: "أَفْعَال", type: "cem", meaning: "sahipler, arkadaşlar" },
    ],
    bab_chain: [{ bab: "I", form: "صَحِبَ/يَصْحَبُ", meaning: "arkadaşlık etti", semantic: "temel", lessons: [] }],
    cross_refs: [], turkish_traces: ["sahip", "sohbet", "ashâb"],
  },
  "م-ش-ي": {
    core: "yürümek",
    quran_count: 23, derivatives: [
      { form: "مَشْي", pattern: "فَعْل", type: "masdar", meaning: "yürüme" },
    ],
    bab_chain: [{ bab: "I", form: "مَشَى/يَمْشِي", meaning: "yürüdü", semantic: "temel", lessons: [] }],
    cross_refs: [], turkish_traces: ["meşy"],
  },
  "د-ر-ي": {
    core: "bilmek, farkında olmak",
    quran_count: 29, derivatives: [
      { form: "دِرَايَة", pattern: "فِعَالَة", type: "masdar", meaning: "bilgi, farkındalık" },
    ],
    bab_chain: [
      { bab: "I", form: "دَرَى/يَدْرِي", meaning: "bildi", semantic: "temel", lessons: [] },
      { bab: "IV", form: "أَدْرَى/يُدْرِي", meaning: "bildirdi", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [], turkish_traces: ["dirâyet"],
  },
  "م-و-ه": {
    core: "su",
    quran_count: 63, derivatives: [
      { form: "مَاء", pattern: "فَعَل", type: "isim", meaning: "su" },
    ],
    bab_chain: [], cross_refs: [], turkish_traces: ["mâ", "mâiye"],
  },
  "ح-ب-ب": {
    core: "sevmek",
    mufradat_note: "Hubb: sevgi. Habîb: sevgili. Mahabbah: karşılıklı sevgi. Kur'an'da Allah'ın kullarını sevmesi ve kulların Allah'ı sevmesi bu kökle ifade edilir.",
    quran_count: 95, derivatives: [
      { form: "حُبّ", pattern: "فُعْل", type: "masdar", meaning: "sevgi" },
      { form: "حَبِيب", pattern: "فَعِيل", type: "sıfat", meaning: "sevgili" },
    ],
    bab_chain: [
      { bab: "I", form: "حَبَّ/يَحِبُّ", meaning: "sevdi", semantic: "temel", lessons: [] },
      { bab: "IV", form: "أَحَبَّ/يُحِبُّ", meaning: "sevdi", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [], turkish_traces: ["hubb", "muhabbet", "habîb", "mahbûb"],
  },
  "م-ر-ج": {
    core: "salıvermek, serbest bırakmak",
    mufradat_note: "İki denizi salıvermek (Rahmân 55:19). Merc: karıştırmak, salıvermek. Birbirine kavuşan ama karışmayan iki deniz Kur'an'ın meşhur sahnesidir.",
    quran_count: 7, derivatives: [
      { form: "مَرَج", pattern: "فَعَل", type: "masdar", meaning: "salma, karıştırma" },
      { form: "مَارِج", pattern: "فَاعِل", type: "sıfat", meaning: "karışık alev" },
    ],
    bab_chain: [{ bab: "I", form: "مَرَجَ/يَمْرُجُ", meaning: "salıverdi", semantic: "temel", lessons: [] }],
    cross_refs: [], turkish_traces: ["merc"],
  },
  "ج-ر-ي": {
    core: "akmak, cereyan etmek",
    quran_count: 63, derivatives: [
      { form: "جَرَيَان", pattern: "فَعَلَان", type: "masdar", meaning: "akış" },
      { form: "مَجْرَى", pattern: "مَفْعَل", type: "ism-i mekân", meaning: "akış yeri" },
    ],
    bab_chain: [{ bab: "I", form: "جَرَى/يَجْرِي", meaning: "aktı", semantic: "temel", lessons: [] }],
    cross_refs: [], turkish_traces: ["cereyan", "mecrâ", "câri"],
  },
  "ج-ل-ل": {
    core: "büyük, yüce, ulu olmak",
    mufradat_note: "Celâl: büyüklük, haşmet. Zü'l-Celâli ve'l-İkrâm (Rahmân 55:27,78): haşmet ve ikram sahibi. İclâl: yüceltme.",
    quran_count: 2, derivatives: [
      { form: "جَلَال", pattern: "فَعَال", type: "masdar", meaning: "büyüklük, ululuk" },
    ],
    bab_chain: [{ bab: "I", form: "جَلَّ/يَجِلُّ", meaning: "büyük oldu", semantic: "temel", lessons: [] }],
    cross_refs: [], turkish_traces: ["celâl", "celîl", "iclâl", "tecellî"],
  },
  "ش-أ-ن": {
    core: "durum, hal, iş",
    quran_count: 3, derivatives: [
      { form: "شَأْن", pattern: "فَعْل", type: "isim", meaning: "durum, iş, hal" },
    ],
    bab_chain: [], cross_refs: [], turkish_traces: ["şe'n", "şân"],
  },
  "ذ-ن-ب": {
    core: "günah, kuyruk",
    quran_count: 37, derivatives: [
      { form: "ذَنْب", pattern: "فَعْل", type: "isim", meaning: "günah" },
      { form: "ذُنُوب", pattern: "فُعُول", type: "cem", meaning: "günahlar" },
    ],
    bab_chain: [{ bab: "IV", form: "أَذْنَبَ/يُذْنِبُ", meaning: "günah işledi", semantic: "ta'diye", lessons: [] }],
    cross_refs: [], turkish_traces: ["zenb", "müznib"],
  },
  "ع-ر-ف": {
    core: "bilmek, tanımak, örf",
    mufradat_note: "Ma'rife: bilgi, tanıma. Ma'rûf: bilinen iyilik, örf. A'râf: yüksek yer (tanıma yeri). İrfân: derin bilgi. Arafat: tanışma/bilme yeri.",
    quran_count: 71, derivatives: [
      { form: "مَعْرُوف", pattern: "مَفْعُول", type: "ism-i mef'ûl", meaning: "bilinen iyilik" },
      { form: "عُرْف", pattern: "فُعْل", type: "isim", meaning: "örf, gelenek" },
    ],
    bab_chain: [{ bab: "I", form: "عَرَفَ/يَعْرِفُ", meaning: "tanıdı", semantic: "temel", lessons: [] }],
    cross_refs: [], turkish_traces: ["örf", "irfan", "ma'rûf", "Arafat"],
  },
  "ق-د-م": {
    core: "öne geçmek, takdim etmek",
    quran_count: 52, derivatives: [
      { form: "تَقْدِيم", pattern: "تَفْعِيل", type: "masdar", meaning: "öne sunma" },
      { form: "قَدَم", pattern: "فَعَل", type: "isim", meaning: "ayak, adım" },
    ],
    bab_chain: [
      { bab: "I", form: "قَدِمَ/يَقْدَمُ", meaning: "geldi, vardı", semantic: "temel", lessons: [] },
      { bab: "II", form: "قَدَّمَ/يُقَدِّمُ", meaning: "sundu, öne aldı", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [], turkish_traces: ["takdim", "kadem", "mukaddime", "kadim"],
  },
  "د-ن-و": {
    core: "yaklaşmak, yakın olmak",
    quran_count: 133, derivatives: [
      { form: "دُنْيَا", pattern: "فُعْلَى", type: "ism-i tafdîl", meaning: "en yakın → dünya" },
      { form: "أَدْنَى", pattern: "أَفْعَل", type: "ism-i tafdîl", meaning: "daha yakın" },
    ],
    bab_chain: [{ bab: "I", form: "دَنَا/يَدْنُو", meaning: "yaklaştı", semantic: "temel", lessons: [] }],
    cross_refs: [], turkish_traces: ["dünyâ", "denî", "tedennî"],
  },
  "ص-ب-ح": {
    core: "sabahlamak, sabah",
    quran_count: 36, derivatives: [
      { form: "صُبْح", pattern: "فُعْل", type: "isim", meaning: "sabah" },
      { form: "مِصْبَاح", pattern: "مِفْعَال", type: "isim", meaning: "lamba, ışık" },
    ],
    bab_chain: [
      { bab: "I", form: "صَبَحَ/يَصْبَحُ", meaning: "sabahladı", semantic: "temel", lessons: [] },
      { bab: "IV", form: "أَصْبَحَ/يُصْبِحُ", meaning: "sabahladı/oldu", semantic: "oluş", lessons: [] },
    ],
    cross_refs: [], turkish_traces: ["sabah", "misbâh", "subh"],
  },
  "ي-د-ي": {
    core: "el",
    quran_count: 120, derivatives: [
      { form: "يَد", pattern: "فَعْل", type: "isim", meaning: "el" },
      { form: "أَيْدِي", pattern: "أَفْعُل", type: "cem", meaning: "eller" },
    ],
    bab_chain: [], cross_refs: [], turkish_traces: ["yed"],
  },
  "ر-ف-ع": {
    core: "yükseltmek, kaldırmak",
    quran_count: 28, derivatives: [
      { form: "رَفْع", pattern: "فَعْل", type: "masdar", meaning: "kaldırma, yükseltme" },
      { form: "رَفِيع", pattern: "فَعِيل", type: "sıfat", meaning: "yüce" },
    ],
    bab_chain: [{ bab: "I", form: "رَفَعَ/يَرْفَعُ", meaning: "yükseltti", semantic: "temel", lessons: [] }],
    cross_refs: [], turkish_traces: ["ref'", "refî'", "merfû"],
  },
  "و-ض-ع": {
    core: "koymak, indirmek",
    quran_count: 24, derivatives: [
      { form: "مَوْضِع", pattern: "مَفْعِل", type: "ism-i mekân", meaning: "yer, konum" },
      { form: "مَوْضُوع", pattern: "مَفْعُول", type: "ism-i mef'ûl", meaning: "konulmuş, konu" },
    ],
    bab_chain: [{ bab: "I", form: "وَضَعَ/يَضَعُ", meaning: "koydu", semantic: "temel", lessons: [] }],
    cross_refs: [], turkish_traces: ["vaz'", "mevzû", "mevzi"],
  },
  "ن-ش-أ": {
    core: "ortaya çıkmak, büyümek",
    quran_count: 28, derivatives: [
      { form: "نَشْأَة", pattern: "فَعْلَة", type: "masdar", meaning: "yaratılış, oluşum" },
      { form: "إِنْشَاء", pattern: "إِفْعَال", type: "masdar", meaning: "inşâ, oluşturma" },
      { form: "مُنْشِئ", pattern: "مُفْعِل", type: "ism-i fâil", meaning: "oluşturan" },
    ],
    bab_chain: [
      { bab: "I", form: "نَشَأَ/يَنْشَأُ", meaning: "ortaya çıktı", semantic: "temel", lessons: [] },
      { bab: "IV", form: "أَنْشَأَ/يُنْشِئُ", meaning: "oluşturdu, yarattı", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [], turkish_traces: ["neş'et", "inşâ", "menşe'"],
  },
  "ج-ر-م": {
    core: "kesmek, işlemek (suç)",
    quran_count: 66, derivatives: [
      { form: "مُجْرِم", pattern: "مُفْعِل", type: "ism-i fâil", meaning: "suçlu, günahkâr" },
      { form: "جُرْم", pattern: "فُعْل", type: "isim", meaning: "suç" },
    ],
    bab_chain: [{ bab: "IV", form: "أَجْرَمَ/يُجْرِمُ", meaning: "suç işledi", semantic: "ta'diye", lessons: [] }],
    cross_refs: [], turkish_traces: ["cürm", "mücrim", "cerîme"],
  },
  "م-ر-ج-ن": {
    core: "mercan",
    quran_count: 3, derivatives: [
      { form: "مَرْجَان", pattern: "—", type: "isim", meaning: "mercan" },
    ],
    bab_chain: [], cross_refs: [], turkish_traces: ["mercan"],
  },
  "ن-ث-ر": {
    core: "saçmak, dağıtmak",
    quran_count: 3, derivatives: [
      { form: "اِنْتِثَار", pattern: "اِفْتِعَال", type: "masdar", meaning: "saçılma, dağılma" },
    ],
    bab_chain: [
      { bab: "I", form: "نَثَرَ/يَنْثُرُ", meaning: "saçtı", semantic: "temel", lessons: [] },
      { bab: "VIII", form: "اِنْتَثَرَ/يَنْتَثِرُ", meaning: "saçıldı", semantic: "mutâva'at", lessons: [] },
    ],
    cross_refs: [], turkish_traces: ["nesir"],
  },
  "ف-ط-ر": {
    core: "yarmak, ilk açmak, yaratmak",
    mufradat_note: "Fıtrat: ilk yaratılış, doğuştan gelen yapı. Fatara: yoktan ilk kez yarattı (bir şeyi ilk defa yararak açmak). İftar: orucu yarma/açma. Infitâr: yarılma (İnfitâr suresi).",
    quran_count: 20, derivatives: [
      { form: "فِطْرَة", pattern: "فِعْلَة", type: "isim", meaning: "yaratılış, fıtrat" },
      { form: "فَاطِر", pattern: "فَاعِل", type: "ism-i fâil", meaning: "yaratan (ilk kez)" },
      { form: "اِنْفِطَار", pattern: "اِنْفِعَال", type: "masdar", meaning: "yarılma" },
    ],
    bab_chain: [
      { bab: "I", form: "فَطَرَ/يَفْطُرُ", meaning: "yardı, ilk kez yarattı", semantic: "temel", lessons: [] },
      { bab: "VII", form: "اِنْفَطَرَ/يَنْفَطِرُ", meaning: "yarıldı", semantic: "mutâva'at", lessons: [] },
    ],
    cross_refs: [], turkish_traces: ["fıtrat", "fıtrî", "iftar", "Fâtır"],
  },
  "خ-ر-ج": {
    core: "çıkmak",
    quran_count: 182, derivatives: [
      { form: "خُرُوج", pattern: "فُعُول", type: "masdar", meaning: "çıkış" },
      { form: "إِخْرَاج", pattern: "إِفْعَال", type: "masdar", meaning: "çıkarma" },
      { form: "مُخْرَج", pattern: "مُفْعَل", type: "ism-i mekân", meaning: "çıkış yeri" },
    ],
    bab_chain: [
      { bab: "I", form: "خَرَجَ/يَخْرُجُ", meaning: "çıktı", semantic: "temel", lessons: [] },
      { bab: "IV", form: "أَخْرَجَ/يُخْرِجُ", meaning: "çıkardı", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [], turkish_traces: ["hurûc", "ihrâc", "harc", "istihrâc"],
  },
  "ح-ي-ي": {
    core: "yaşamak, canlı olmak",
    mufradat_note: "Hayât: canlılık — bitki, hayvan, insan, ruhânî hayat. İhyâ: diriltme. Tahiyye: selâm, hayat duası. Hayy: diri (Allah'ın sıfatı). Kur'an hayatı beş mertebede işler.",
    quran_count: 191, derivatives: [
      { form: "حَيَاة", pattern: "فَعَالَة", type: "masdar", meaning: "hayat" },
      { form: "حَيّ", pattern: "فَعْل", type: "sıfat", meaning: "diri" },
      { form: "إِحْيَاء", pattern: "إِفْعَال", type: "masdar", meaning: "diriltme" },
    ],
    bab_chain: [
      { bab: "I", form: "حَيِيَ/يَحْيَا", meaning: "yaşadı", semantic: "temel", lessons: [] },
      { bab: "IV", form: "أَحْيَا/يُحْيِي", meaning: "diriltti", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [], turkish_traces: ["hayat", "ihyâ", "tahiyye", "hay"],
  },
  "ص-ل-ي": {
    core: "ateşe girmek, yanmak",
    quran_count: 25, derivatives: [
      { form: "صَلِيّ", pattern: "فَعِيل", type: "sıfat", meaning: "ateşe giren" },
    ],
    bab_chain: [{ bab: "I", form: "صَلِيَ/يَصْلَى", meaning: "ateşe girdi", semantic: "temel", lessons: [] }],
    cross_refs: [], turkish_traces: [],
  },
  "غ-و-ر": {
    core: "çekilmek, derinleşmek",
    mufradat_note: "Gavr: suyun çekilip yeraltına inmesi. Gâr: mağara (derin yer). Mülk 67:30'da tehdit olarak kullanılır.",
    quran_count: 2, derivatives: [
      { form: "غَوْر", pattern: "فَعْل", type: "masdar", meaning: "çekilme, derin" },
      { form: "غَار", pattern: "فَعْل", type: "isim", meaning: "mağara" },
    ],
    bab_chain: [{ bab: "I", form: "غَارَ/يَغُورُ", meaning: "çekildi", semantic: "temel", lessons: [] }],
    cross_refs: [], turkish_traces: ["gâr"],
  },  // ===== v0.28 — 90 yeni kök (toplam ~285) =====

  "ش-ق-ق": {
    core: "yarmak, ikiye ayırmak, çatlatmak",
    mufradat_note: "Bir şeyi ikiye ayırmak. Yarılma (şakk) hem maddî (toprağın yarılması) hem de manevî (ihtilâf) anlamında kullanılır. İnşikâk: parçalanma, bölünme. Şikâk: düşmanlık ve ayrılık.",
    quran_count: 12,
    derivatives: [
      { form: "شَقّ", pattern: "فَعْل", type: "masdar", meaning: "yarma, çatlak" },
      { form: "شِقَاق", pattern: "فِعَال", type: "masdar", meaning: "ayrılık, düşmanlık" },
      { form: "اِنْشَقَّ", pattern: "اِنْفَعَلَ", type: "fiil (VII)", meaning: "yarıldı" },
    ],
    bab_chain: [
      { bab: "I", form: "شَقَّ/يَشُقُّ", meaning: "yardı", semantic: "temel eylem", lessons: [] },
      { bab: "VII", form: "اِنْشَقَّ/يَنْشَقُّ", meaning: "yarıldı", semantic: "mutâvaat", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L35", verse: "55:37", form: "انشَقَّتِ", note: "gök yarıldığında" },
      { lesson: "L40", verse: "80:26", form: "شَقَقْنَا", note: "toprağı yardık — muzâ'af" },
    ],
    turkish_traces: ["şakk", "şikâk", "inşikâk", "meşakkat"],
  },
  "أ-ت-ي": {
    core: "gelmek, getirmek, vermek",
    mufradat_note: "Gelmek. Kolay ve yumuşak gelişi ifade eder (câ'e'den farkı). Allah'ın âyetlerinin gelmesi ve kıyâmet saatinin gelmesi anlamlarında sıkça geçer.",
    quran_count: 264,
    derivatives: [
      { form: "أَتَى", pattern: "فَعَلَ", type: "fiil", meaning: "geldi" },
      { form: "إِيتَاء", pattern: "إِفْعَال", type: "masdar (IV)", meaning: "verme, getirme" },
      { form: "آتِي", pattern: "فَاعِل", type: "ism-i fâil", meaning: "gelen, gelecek olan" },
    ],
    bab_chain: [
      { bab: "I", form: "أَتَى/يَأْتِي", meaning: "geldi", semantic: "temel eylem", lessons: [] },
      { bab: "IV", form: "آتَى/يُؤْتِي", meaning: "verdi", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:8", form: "يَأْتِكُمْ", note: "size uyarıcı gelmedi mi?" },
    ],
    turkish_traces: ["itâ", "îtâ", "atâ", "mu'tâ"],
  },
  "ك-ب-ر": {
    core: "büyük olmak, büyüklenmek, ululanmak",
    mufradat_note: "Hacim veya değer bakımından büyüklük. Kibr: büyüklenme; tekebbür: kendini büyük görme. el-Kebîr, el-Mütekebbir: Allah'ın sıfatları — mutlak büyüklük yalnız O'na aittir.",
    quran_count: 161,
    derivatives: [
      { form: "كَبِير", pattern: "فَعِيل", type: "sıfat", meaning: "büyük" },
      { form: "كِبْر", pattern: "فِعْل", type: "isim", meaning: "büyüklenme, kibir" },
      { form: "أَكْبَر", pattern: "أَفْعَل", type: "ism-i tafdîl", meaning: "en büyük, daha büyük" },
      { form: "مُتَكَبِّر", pattern: "مُتَفَعِّل", type: "ism-i fâil (V)", meaning: "büyüklenen, ulu" },
    ],
    bab_chain: [
      { bab: "I", form: "كَبُرَ/يَكْبُرُ", meaning: "büyük oldu", semantic: "temel eylem", lessons: [] },
      { bab: "V", form: "تَكَبَّرَ/يَتَكَبَّرُ", meaning: "büyüklendi", semantic: "tekellüf", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:12", form: "كَبِيرٌ", note: "büyük ecir" },
    ],
    turkish_traces: ["kebîr", "kibir", "tekbîr", "ekber", "müstekbir"],
  },
  "غ-ي-ب": {
    core: "gizlenmek, görünmemek, gaip olmak",
    mufradat_note: "Duyulardan ve bilgiden gizli olan. Gayb: insanın idrak edemediği alan. İman bi'l-gayb: Kur'ân'ın ilk övgü sıfatı. Gâib: görünmeyen, uzakta olan.",
    quran_count: 60,
    derivatives: [
      { form: "غَيْب", pattern: "فَعْل", type: "isim", meaning: "gayb, bilinmeyen" },
      { form: "غَائِب", pattern: "فَاعِل", type: "ism-i fâil", meaning: "gizli, uzak" },
      { form: "غَيْبَة", pattern: "فَعْلَة", type: "masdar", meaning: "gıybet" },
    ],
    bab_chain: [
      { bab: "I", form: "غَابَ/يَغِيبُ", meaning: "kayboldu, gizlendi", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:12", form: "بِالْغَيْبِ", note: "görmeden Rablerinden korkanlar" },
      { lesson: "L44", verse: "82:16", form: "بِغَآئِبِينَ", note: "ondan uzak değillerdir" },
    ],
    turkish_traces: ["gayb", "gâib", "gıybet", "mugayyebât"],
  },
  "ن-ش-ر": {
    core: "yaymak, dağıtmak, diriltmek",
    mufradat_note: "Katlanmış şeyi açmak, yaymak. Nüşûr/neşr: ölümden sonra diriltme — ölülerin 'açılması' metaforu. Menşûr: açılmış, yayılmış.",
    quran_count: 24,
    derivatives: [
      { form: "نَشْر", pattern: "فَعْل", type: "masdar", meaning: "yayma" },
      { form: "نُشُور", pattern: "فُعُول", type: "masdar", meaning: "diriliş, yayılma" },
      { form: "مَنْشُور", pattern: "مَفْعُول", type: "ism-i mef'ûl", meaning: "yayılmış, açılmış" },
    ],
    bab_chain: [
      { bab: "I", form: "نَشَرَ/يَنْشُرُ", meaning: "yaydı", semantic: "temel eylem", lessons: [] },
      { bab: "IV", form: "أَنْشَرَ/يُنْشِرُ", meaning: "diriltti", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:15", form: "النُّشُورُ", note: "diriliş O'nadır" },
      { lesson: "L40", verse: "80:22", form: "أَنشَرَهُ", note: "sonra onu diriltir" },
    ],
    turkish_traces: ["neşr", "nüşûr", "neşriyat", "menşûr"],
  },
  "ش-م-س": {
    core: "güneş, parlamak",
    mufradat_note: "Gökteki bilinen ışık kaynağı. Şems, Kur'ân'da kozmik düzen ve ilâhî kudret delili olarak geçer. Hesap (حُسْبَان) ile birlikte zikredilmesi düzenli hareketin vurgusudur.",
    quran_count: 33,
    derivatives: [
      { form: "شَمْس", pattern: "فَعْل", type: "isim", meaning: "güneş" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L35", verse: "55:5", form: "الشَّمْسُ", note: "güneş ve ay bir hesap iledir" },
    ],
    turkish_traces: ["şems", "şemsiye", "şemsî"],
  },
  "ق-م-ر": {
    core: "ay, beyaz olmak",
    mufradat_note: "Ay. Beyazlık kökünden türemiştir. Kamer: ışığı güneşten alan gök cismi. Kamerî takvim ayın hareketine dayanır.",
    quran_count: 27,
    derivatives: [
      { form: "قَمَر", pattern: "فَعَل", type: "isim", meaning: "ay" },
      { form: "قَمَرِيّ", pattern: "فَعَلِيّ", type: "nisbet", meaning: "kamere ait" },
      { form: "مُسْتَقْمِر", pattern: "مُسْتَفْعِل", type: "ism-i fâil (X)", meaning: "karar kılmış" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L35", verse: "55:5", form: "وَالْقَمَرُ", note: "güneş ve ay hesap iledir" },
    ],
    turkish_traces: ["kamer", "kamerî"],
  },
  "ن-ج-م": {
    core: "yıldız, bitki, doğmak",
    mufradat_note: "Sapı olmayan bitki (gövdesiz bitki) ve yıldız. İkisi de yerden/gökten 'doğar'. Necm: hem gök cismi hem yer bitkisi — Rahmân suresinde şecer ile birlikte geçer.",
    quran_count: 13,
    derivatives: [
      { form: "نَجْم", pattern: "فَعْل", type: "isim", meaning: "yıldız, sapı olmayan bitki" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L35", verse: "55:6", form: "وَالنَّجْمُ", note: "yıldız/bitki ve ağaç secde eder" },
    ],
    turkish_traces: ["necm", "müneccim"],
  },
  "ش-ج-ر": {
    core: "ağaç, dikilmek, ihtilâf",
    mufradat_note: "Gövdeli, dallanıp budaklanan bitki. Teşâcür: dalların birbirine girmesi → ihtilâf, çekişme. Kur'ân'da hem somut ağaç hem de temsîlî (güzel söz = güzel ağaç) kullanılır.",
    quran_count: 26,
    derivatives: [
      { form: "شَجَر", pattern: "فَعَل", type: "isim", meaning: "ağaç" },
      { form: "شَجَرَة", pattern: "فَعَلَة", type: "isim", meaning: "tek ağaç" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L35", verse: "55:6", form: "وَالشَّجَرُ", note: "ve ağaçlar secde eder" },
    ],
    turkish_traces: ["şecer", "şecere"],
  },
  "ق-س-ط": {
    core: "adalet, hakkaniyet, ölçü",
    mufradat_note: "Adalet ve dürüstlük. Kıst: hak ölçüsü, adaletle davranma. Muksit: adaletli davranan. I. bâbda (kasata) zulüm; IV. bâbda (aksata) adalet — zıt anlamlı kullanım dikkat çekicidir.",
    quran_count: 25,
    derivatives: [
      { form: "قِسْط", pattern: "فِعْل", type: "isim", meaning: "adalet, hak" },
      { form: "مُقْسِط", pattern: "مُفْعِل", type: "ism-i fâil (IV)", meaning: "adaletli" },
      { form: "قِسْطَاس", pattern: "فِعْلَال", type: "isim", meaning: "terazi, ölçü" },
    ],
    bab_chain: [
      { bab: "IV", form: "أَقْسَطَ/يُقْسِطُ", meaning: "adaletle davrandı", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L35", verse: "55:9", form: "بِالْقِسْطِ", note: "tartıyı adaletle yapın" },
    ],
    turkish_traces: ["kıst", "taksît"],
  },
  "ح-س-ب": {
    core: "saymak, hesap etmek, yeterli görmek",
    mufradat_note: "Sayma ve hesap. Hisâb: muhasebe, hesap günü. Husbân: ince hesap, dakik ölçü. Hasb: yeterlilik (hasbunallah). Kur'ân'da hem kozmik düzen hem ahiret sorgusu bağlamında geçer.",
    quran_count: 109,
    derivatives: [
      { form: "حِسَاب", pattern: "فِعَال", type: "masdar", meaning: "hesap" },
      { form: "حُسْبَان", pattern: "فُعْلَان", type: "masdar", meaning: "ince hesap, ölçü" },
      { form: "حَسِيب", pattern: "فَعِيل", type: "sıfat", meaning: "hesap gören" },
    ],
    bab_chain: [
      { bab: "I", form: "حَسِبَ/يَحْسَبُ", meaning: "sandı", semantic: "temel eylem", lessons: [] },
      { bab: "III", form: "حَاسَبَ/يُحَاسِبُ", meaning: "hesaba çekti", semantic: "müfâale", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L35", verse: "55:5", form: "بِحُسْبَانٍ", note: "güneş ve ay bir hesap ile" },
    ],
    turkish_traces: ["hesap", "muhasebe", "hasbi", "hisâb"],
  },
  "ب-ق-ي": {
    core: "kalmak, bâkî olmak, devam etmek",
    mufradat_note: "Devam etmek, yok olmamak. Bakâ: kalıcılık — fanîliğin zıddı. Bâkî: kalıcı, ebedî. Kur'ân'da 'fânîlik-bekâ' karşıtlığı insanla Allah arasındaki farkı vurgular.",
    quran_count: 21,
    derivatives: [
      { form: "بَقَاء", pattern: "فَعَال", type: "masdar", meaning: "kalıcılık" },
      { form: "بَاقٍ", pattern: "فَاعِل", type: "ism-i fâil", meaning: "kalıcı, bâkî" },
      { form: "بَقِيَّة", pattern: "فَعِيلَة", type: "isim", meaning: "kalan, artık" },
    ],
    bab_chain: [
      { bab: "I", form: "بَقِيَ/يَبْقَى", meaning: "kaldı", semantic: "temel eylem", lessons: [] },
      { bab: "IV", form: "أَبْقَى/يُبْقِي", meaning: "bıraktı, bâkî kıldı", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L35", verse: "55:27", form: "وَيَبْقَىٰ", note: "Rabbinin vechi bâkîdir" },
    ],
    turkish_traces: ["bekâ", "bâkî", "bakiyye"],
  },
  "ف-ن-ي": {
    core: "yok olmak, fânî olmak, tükenmek",
    mufradat_note: "Yok olma, sona erme. Her şey fânîdir, yalnız Allah'ın vechi bâkîdir (55:26-27). Fenâ: tasavvufta benliğin erimesi. Kur'ân'da bekâ'nın karşıtı olarak kullanılır.",
    quran_count: 2,
    derivatives: [
      { form: "فَانٍ", pattern: "فَاعِل", type: "ism-i fâil", meaning: "fânî, yok olucu" },
      { form: "فَنَاء", pattern: "فَعَال", type: "masdar", meaning: "yok olma" },
    ],
    bab_chain: [
      { bab: "I", form: "فَنِيَ/يَفْنَى", meaning: "yok oldu", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L35", verse: "55:26", form: "فَانٍ", note: "yeryüzündeki herkes fânîdir" },
    ],
    turkish_traces: ["fânî", "fenâ"],
  },
  "س-و-ي": {
    core: "eşit olmak, düzeltmek, biçimlendirmek",
    mufradat_note: "Düzgün ve dengeli yapmak, tesviye etmek. İstivâ: dengelenmek, oturmak. Tesviye: düzeltme, dengeleme. Allah'ın insanı 'tesviye' etmesi: organları dengeli yaratması.",
    quran_count: 57,
    derivatives: [
      { form: "سَوِيّ", pattern: "فَعِيل", type: "sıfat", meaning: "düzgün, normal" },
      { form: "سَوَاء", pattern: "فَعَال", type: "isim", meaning: "eşit, aynı" },
      { form: "تَسْوِيَة", pattern: "تَفْعِلَة", type: "masdar (II)", meaning: "düzeltme" },
      { form: "اِسْتِوَاء", pattern: "اِفْتِعَال", type: "masdar (VIII)", meaning: "yerleşme, doğrulma" },
    ],
    bab_chain: [
      { bab: "I", form: "سَوِيَ/يَسْوَى", meaning: "eşit oldu", semantic: "temel eylem", lessons: [] },
      { bab: "II", form: "سَوَّى/يُسَوِّي", meaning: "düzeltti, biçimlendirdi", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:22", form: "سَوِيًّا", note: "düzgün yolda mı yürüyor?" },
      { lesson: "L44", verse: "82:7", form: "فَسَوَّىٰكَ", note: "seni biçimlendirdi" },
    ],
    turkish_traces: ["tesviye", "müsâvî", "istivâ", "seviye"],
  },
  "ب-ر-ر": {
    core: "iyilik, hayır, dürüstlük",
    mufradat_note: "İyilik, sadâkat. Birr: kapsamlı iyilik (sadaka, ihsân, doğruluk hepsi). Ebrâr: çok iyilik yapanlar. Berr: iyiliksever. Anne-babaya birr: en yüce iyilik.",
    quran_count: 32,
    derivatives: [
      { form: "بِرّ", pattern: "فِعْل", type: "masdar", meaning: "iyilik" },
      { form: "بَارّ", pattern: "فَاعِل", type: "ism-i fâil", meaning: "iyilik eden" },
      { form: "بَرَرَة", pattern: "فَعَلَة", type: "cem", meaning: "hayırlılar, iyiler" },
      { form: "أَبْرَار", pattern: "أَفْعَال", type: "cem", meaning: "iyiler" },
    ],
    bab_chain: [
      { bab: "I", form: "بَرَّ/يَبَرُّ", meaning: "iyilik etti", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L40", verse: "80:16", form: "بَرَرَةٍ", note: "hayırlı (melekler)" },
      { lesson: "L44", verse: "82:13", form: "ٱلْأَبْرَارَ", note: "iyiler nimet içindedir" },
    ],
    turkish_traces: ["birr", "ebrâr", "berr"],
  },
  "ق-ب-ر": {
    core: "gömmek, defnetmek, kabir",
    mufradat_note: "Ölüyü gömmek. Kabr: mezar. İkbâr/akbere: defnetti. Kur'ân'da hem ölümün hem diriliş gününün sembolü: kabirler açıldığında (82:4).",
    quran_count: 8,
    derivatives: [
      { form: "قَبْر", pattern: "فَعْل", type: "isim", meaning: "kabir, mezar" },
      { form: "قُبُور", pattern: "فُعُول", type: "cem", meaning: "kabirler" },
      { form: "مَقْبَرَة", pattern: "مَفْعَلَة", type: "ism-i mekân", meaning: "mezarlık" },
    ],
    bab_chain: [
      { bab: "IV", form: "أَقْبَرَ/يُقْبِرُ", meaning: "defnettirdi", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L40", verse: "80:21", form: "فَأَقْبَرَهُ", note: "onu kabre koydurdu" },
      { lesson: "L44", verse: "82:4", form: "ٱلْقُبُورُ", note: "kabirler deşildiğinde" },
    ],
    turkish_traces: ["kabir", "makbere", "kabristân"],
  },
  "ص-ب-ب": {
    core: "dökmek, akıtmak",
    mufradat_note: "Suyu yukarıdan aşağı dökmek. Sabb: şiddetle dökme. Kur'ân'da yağmurun dökülmesi ve azâbın dökülmesi bağlamlarında geçer.",
    quran_count: 5,
    derivatives: [
      { form: "صَبّ", pattern: "فَعْل", type: "masdar", meaning: "dökme" },
    ],
    bab_chain: [
      { bab: "I", form: "صَبَّ/يَصُبُّ", meaning: "döktü", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L40", verse: "80:25", form: "صَبَبْنَا", note: "suyu bol bol döktük" },
    ],
    turkish_traces: ["sabb"],
  },
  "م-ر-أ": {
    core: "kişi, erkek, insan",
    mufradat_note: "İnsan, kişi. el-Mer'u: adam, birey. İmru': kişi (belirli). Kur'ân'da bireysel sorumluluk vurgusu: 'her kişi kendi derdiyle' (80:37).",
    quran_count: 12,
    derivatives: [
      { form: "مَرْء", pattern: "فَعْل", type: "isim", meaning: "kişi, adam" },
      { form: "اِمْرُؤ", pattern: "اِفْعُل", type: "isim", meaning: "bir kişi" },
      { form: "مَرْأَة", pattern: "فَعْلَة", type: "isim", meaning: "kadın" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L40", verse: "80:34", form: "ٱلْمَرْءُ", note: "kişinin kaçacağı gün" },
    ],
    turkish_traces: ["merd"],
  },
  "س-ف-ر": {
    core: "açmak, ortaya çıkarmak, yolculuk",
    mufradat_note: "Örtüyü kaldırmak, açmak. Sefer: yolculuk (kişi kendini açığa çıkarır). Sefere: elçi yazıcılar (vahyi açanlar). Müsfir: parlayan, aydınlanan (yüz).",
    quran_count: 13,
    derivatives: [
      { form: "سَفَر", pattern: "فَعَل", type: "masdar", meaning: "yolculuk" },
      { form: "سَفَرَة", pattern: "فَعَلَة", type: "cem", meaning: "elçi melekler, yazıcılar" },
      { form: "مُسْفِر", pattern: "مُفْعِل", type: "ism-i fâil (IV)", meaning: "parlayan" },
      { form: "سَفِير", pattern: "فَعِيل", type: "isim", meaning: "elçi" },
    ],
    bab_chain: [
      { bab: "I", form: "سَفَرَ/يَسْفِرُ", meaning: "açtı, ortaya çıkardı", semantic: "temel eylem", lessons: [] },
      { bab: "IV", form: "أَسْفَرَ/يُسْفِرُ", meaning: "parladı, aydınlandı", semantic: "sıfat", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L40", verse: "80:15", form: "سَفَرَةٍ", note: "şerefli elçi melekler" },
      { lesson: "L40", verse: "80:38", form: "مُّسْفِرَةٌ", note: "parlayan yüzler" },
    ],
    turkish_traces: ["sefer", "sefîr", "müsâfir"],
  },
  "م-س-ك": {
    core: "tutmak, yapışmak, alıkoymak",
    mufradat_note: "Bir şeyi elde tutmak, bırakmamak. İmsâk: tutma, oruç başlangıcı. Temessük: sarılma, yapışma. Allah'ın kuşları tutması: düşmekten engelleme.",
    quran_count: 33,
    derivatives: [
      { form: "إِمْسَاك", pattern: "إِفْعَال", type: "masdar (IV)", meaning: "tutma" },
      { form: "مُمْسِك", pattern: "مُفْعِل", type: "ism-i fâil (IV)", meaning: "tutan" },
      { form: "مِسْك", pattern: "فِعْل", type: "isim", meaning: "misk (koku)" },
    ],
    bab_chain: [
      { bab: "I", form: "مَسَكَ/يَمْسِكُ", meaning: "tuttu", semantic: "temel eylem", lessons: [] },
      { bab: "IV", form: "أَمْسَكَ/يُمْسِكُ", meaning: "alıkoydu", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:19", form: "يُمْسِكُهُنَّ", note: "onları tutan ancak Rahmân'dır" },
    ],
    turkish_traces: ["imsâk", "temessük", "misk"],
  },
  "ب-ل-و": {
    core: "sınamak, denemek, belâ vermek",
    mufradat_note: "Deneme, imtihan. Belâ: sınav — hem hayır hem şer ile olur. İbtilâ: sınama. Müptelâ: sınanmış, düşkün. Kur'ân'da hayat ve ölümün sınav olduğu vurgulanır (67:2).",
    quran_count: 37,
    derivatives: [
      { form: "بَلَاء", pattern: "فَعَال", type: "masdar", meaning: "sınav, belâ" },
      { form: "اِبْتِلَاء", pattern: "اِفْتِعَال", type: "masdar (VIII)", meaning: "imtihan" },
      { form: "مُبْتَلًى", pattern: "مُفْتَعَل", type: "ism-i mef'ûl", meaning: "sınanmış" },
    ],
    bab_chain: [
      { bab: "I", form: "بَلَا/يَبْلُو", meaning: "sınadı", semantic: "temel eylem", lessons: [] },
      { bab: "VIII", form: "اِبْتَلَى/يَبْتَلِي", meaning: "sınadı", semantic: "iftial", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:2", form: "لِيَبْلُوَكُمْ", note: "hangisi daha güzel amel — imtihan" },
    ],
    turkish_traces: ["belâ", "ibtilâ", "müptelâ"],
  },
  "ع-ز-ز": {
    core: "güçlü olmak, üstün olmak, aziz olmak",
    mufradat_note: "Üstünlük, galebe, yenilmezlik. Azîz: güçlü, yenilmez, değerli. İzzet: şeref, onur. Ta'zîz: güçlendirme. Allah'ın sıfatı olarak el-Azîz: mutlak güç sahibi.",
    quran_count: 119,
    derivatives: [
      { form: "عَزِيز", pattern: "فَعِيل", type: "sıfat", meaning: "güçlü, azîz" },
      { form: "عِزَّة", pattern: "فِعْلَة", type: "masdar", meaning: "izzet, onur" },
      { form: "أَعَزَّ", pattern: "أَفْعَل", type: "ism-i tafdîl", meaning: "daha güçlü" },
    ],
    bab_chain: [
      { bab: "I", form: "عَزَّ/يَعِزُّ", meaning: "güçlü oldu", semantic: "temel eylem", lessons: [] },
      { bab: "II", form: "عَزَّزَ/يُعَزِّزُ", meaning: "güçlendirdi", semantic: "teksîr", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:2", form: "الْعَزِيزُ", note: "O Azîz'dir — mutlak güç" },
    ],
    turkish_traces: ["azîz", "izzet", "ta'zîz", "muazzez"],
  },
  "س-ب-ع": {
    core: "yedi",
    mufradat_note: "Yedi sayısı. Kur'ân'da çokluk ve tamamlık ifade eder. Seb' semâvât: yedi kat gök — kozmik düzenin katmanlılığı.",
    quran_count: 28,
    derivatives: [
      { form: "سَبْع", pattern: "فَعْل", type: "sayı", meaning: "yedi" },
      { form: "سَبْعُون", pattern: "—", type: "sayı", meaning: "yetmiş" },
      { form: "سُبُع", pattern: "فُعُل", type: "isim", meaning: "yedide bir" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L30", verse: "67:3", form: "سَبْعَ", note: "yedi kat göğü yaratan" },
    ],
    turkish_traces: ["seb'a"],
  },
  "ط-ب-ق": {
    core: "katmak, üst üste koymak, uygunluk",
    mufradat_note: "Birbiri üzerine konulmuş katmanlar. Tabak/tıbâk: kat, tabaka. Mutâbakat: uygunluk, örtüşme. Yedi gök tabaka tabaka yaratılmıştır.",
    quran_count: 7,
    derivatives: [
      { form: "طِبَاق", pattern: "فِعَال", type: "isim", meaning: "tabakalar, katlar" },
      { form: "طَبَقَة", pattern: "فَعَلَة", type: "isim", meaning: "tabaka, kat" },
    ],
    bab_chain: [
      { bab: "III", form: "طَابَقَ/يُطَابِقُ", meaning: "uygun düştü", semantic: "müfâale", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:3", form: "طِبَاقًا", note: "tabaka tabaka — yedi gök" },
    ],
    turkish_traces: ["tabaka", "tatbîk", "mutâbakat"],
  },
  "ز-ي-ن": {
    core: "süslemek, güzelleştirmek",
    mufradat_note: "Güzelleştirmek, süslemek. Zînet: süs. Tezyîn: bezeme. Allah en yakın göğü yıldızlarla süslemiştir (67:5). Şeytanın tezyîni: kötüyü güzel göstermesi.",
    quran_count: 46,
    derivatives: [
      { form: "زِينَة", pattern: "فِعْلَة", type: "isim", meaning: "süs" },
      { form: "تَزْيِين", pattern: "تَفْعِيل", type: "masdar (II)", meaning: "süsleme" },
      { form: "مُزَيَّن", pattern: "مُفَعَّل", type: "ism-i mef'ûl (II)", meaning: "süslenmiş" },
    ],
    bab_chain: [
      { bab: "II", form: "زَيَّنَ/يُزَيِّنُ", meaning: "süsledi", semantic: "teksîr", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:5", form: "زَيَّنَّا", note: "dünya göğünü kandillerle süsledik" },
    ],
    turkish_traces: ["zînet", "tezyîn", "tezyînât"],
  },
  "ر-ج-م": {
    core: "taşlamak, kovmak",
    mufradat_note: "Taş atmak. Recm: taşlama, kovma. Racîm: kovulmuş (şeytan). Rucûm: yıldız kaymaları — şeytanları kovalamak için.",
    quran_count: 14,
    derivatives: [
      { form: "رَجْم", pattern: "فَعْل", type: "masdar", meaning: "taşlama" },
      { form: "رُجُوم", pattern: "فُعُول", type: "cem", meaning: "atılan taşlar, kayan yıldızlar" },
      { form: "رَجِيم", pattern: "فَعِيل", type: "sıfat", meaning: "kovulmuş" },
    ],
    bab_chain: [
      { bab: "I", form: "رَجَمَ/يَرْجُمُ", meaning: "taşladı", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:5", form: "رُجُومًا", note: "şeytanlara atılan yıldızlar" },
    ],
    turkish_traces: ["recm", "racîm"],
  },
  "ش-ط-ن": {
    core: "uzaklaşmak, isyan etmek",
    mufradat_note: "Haktan uzaklaşmak. Şeytân: haktan sapan, uzaklaşan — hem cin hem insan olabilir. Kur'ân'da İblîs'in özel ismi değil, tüm isyankâr varlıkları kapsayan bir cins isimdir.",
    quran_count: 88,
    derivatives: [
      { form: "شَيْطَان", pattern: "فَيْعَال", type: "isim", meaning: "şeytan" },
      { form: "شَيَاطِين", pattern: "—", type: "cem", meaning: "şeytanlar" },
    ],
    bab_chain: [
      { bab: "I", form: "شَطَنَ/يَشْطُنُ", meaning: "uzaklaştı", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:5", form: "لِّلشَّيَاطِينِ", note: "şeytanlara karşı — kayan yıldızlar" },
    ],
    turkish_traces: ["şeytan", "şeytânî"],
  },
  "ع-ت-د": {
    core: "hazırlamak",
    mufradat_note: "Önceden hazırlamak, tedarik etmek. A'tedna: hazırladık. Atîd: hazır, müheyya. Kur'ân'da genellikle azâbın hazırlanması bağlamında gelir.",
    quran_count: 17,
    derivatives: [
      { form: "عَتِيد", pattern: "فَعِيل", type: "sıfat", meaning: "hazır, müheyya" },
    ],
    bab_chain: [
      { bab: "IV", form: "أَعْتَدَ/يُعْتِدُ", meaning: "hazırladı", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:5", form: "وَأَعْتَدْنَا", note: "onlara alevli azap hazırladık" },
    ],
    turkish_traces: ["atîd", "i'dâd"],
  },
  "ص-ي-ر": {
    core: "dönmek, varmak, sonuçlanmak",
    mufradat_note: "Bir halden başka hale geçmek, bir yere varmak. Masîr: varış yeri, son durak. Kur'ân'da dönüşün Allah'a olduğu vurgulanır: 'dönüş yalnız O'nadır'.",
    quran_count: 32,
    derivatives: [
      { form: "مَصِير", pattern: "مَفْعِل", type: "ism-i mekân", meaning: "varış yeri, son" },
    ],
    bab_chain: [
      { bab: "I", form: "صَارَ/يَصِيرُ", meaning: "oldu, döndü", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:6", form: "الْمَصِيرُ", note: "ne kötü varış yeri" },
    ],
    turkish_traces: ["masîr", "sâir"],
  },
  "ع-ب-س": {
    core: "yüzünü asmak, surat asmak",
    mufradat_note: "Yüzünü ekşitmek, surat asmak. Abese: kaşlarını çattı, hoşnutsuzluk gösterdi. Sûrenin adı: Hz. Peygamber'in âmâ sahâbîye karşı tutumunu konu alır.",
    quran_count: 3,
    derivatives: [
      { form: "عَبَسَ", pattern: "فَعَلَ", type: "fiil", meaning: "yüzünü astı" },
      { form: "عُبُوس", pattern: "فُعُول", type: "masdar", meaning: "surat asma, somurtma" },
      { form: "عَبُوس", pattern: "فَعُول", type: "sıfat", meaning: "somurtan, asık suratlı" },
    ],
    bab_chain: [
      { bab: "I", form: "عَبَسَ/يَعْبِسُ", meaning: "surat astı", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L40", verse: "80:1", form: "عَبَسَ", note: "yüzünü astı ve döndü" },
    ],
    turkish_traces: ["abûs"],
  },
  "ص-ح-ف": {
    core: "sahife, sayfa, yazılı levha",
    mufradat_note: "Yazı yazılan yüzey. Suhuf: sayfalar, sahîfeler — ilk vahiy sayfaları. Mushaf: sahîfelerin bir araya getirilmiş hali. Kur'ân'ın 'suhuf-ı mükerrreme'de olduğu bildirilir.",
    quran_count: 8,
    derivatives: [
      { form: "صَحِيفَة", pattern: "فَعِيلَة", type: "isim", meaning: "sayfa" },
      { form: "صُحُف", pattern: "فُعُل", type: "cem", meaning: "sayfalar" },
      { form: "مُصْحَف", pattern: "مُفْعَل", type: "isim", meaning: "mushaf" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L40", verse: "80:13", form: "صُحُفٍ", note: "şerefli sahîfelerde" },
    ],
    turkish_traces: ["sahîfe", "suhuf", "mushaf"],
  },
  "ط-ه-ر": {
    core: "temiz olmak, arınmak",
    mufradat_note: "Pislikten arınmak. Tahâret: temizlik, arınma. Mutahhar: tertemiz kılınmış. Hem bedenî hem manevî temizlik. Kur'ân sahîfelerine ancak temiz olanlar dokunur.",
    quran_count: 31,
    derivatives: [
      { form: "طَهَارَة", pattern: "فَعَالَة", type: "masdar", meaning: "temizlik" },
      { form: "مُطَهَّر", pattern: "مُفَعَّل", type: "ism-i mef'ûl (II)", meaning: "tertemiz kılınmış" },
      { form: "تَطْهِير", pattern: "تَفْعِيل", type: "masdar (II)", meaning: "arındırma" },
    ],
    bab_chain: [
      { bab: "I", form: "طَهُرَ/يَطْهُرُ", meaning: "temiz oldu", semantic: "temel eylem", lessons: [] },
      { bab: "II", form: "طَهَّرَ/يُطَهِّرُ", meaning: "temizledi", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L40", verse: "80:14", form: "مُّطَهَّرَةٍ", note: "tertemiz (kılınmış sahîfeler)" },
    ],
    turkish_traces: ["tahâret", "mutahhar", "tathîr"],
  },
  "ن-ط-ف": {
    core: "damlamak, nutfe",
    mufradat_note: "Damla, az su. Nutfe: menî damlası — insanın yaratılışının ilk maddesi. Kur'ân'da insanın 'basit bir damladan' yaratıldığı vurgulanarak kibir kırılır.",
    quran_count: 12,
    derivatives: [
      { form: "نُطْفَة", pattern: "فُعْلَة", type: "isim", meaning: "nutfe, damla" },
    ],
    bab_chain: [
      { bab: "I", form: "نَطَفَ/يَنْطُفُ", meaning: "damladı", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L40", verse: "80:19", form: "نُّطْفَةٍ", note: "bir nutfeden yarattı" },
    ],
    turkish_traces: ["nutfe"],
  },
  "ن-ب-ت": {
    core: "bitmek, yeşermek",
    mufradat_note: "Bitkinin topraktan çıkması. Nebât: bitki. İnbât: bitirmek, yetiştirmek (Allah'a nisbet). Çocuğun büyümesi de 'inbât' ile ifade edilir (71:17).",
    quran_count: 26,
    derivatives: [
      { form: "نَبَات", pattern: "فَعَال", type: "isim", meaning: "bitki" },
      { form: "إِنْبَات", pattern: "إِفْعَال", type: "masdar (IV)", meaning: "bitirme" },
      { form: "مُنْبِت", pattern: "مُفْعِل", type: "ism-i fâil (IV)", meaning: "bitiren" },
    ],
    bab_chain: [
      { bab: "I", form: "نَبَتَ/يَنْبُتُ", meaning: "bitti, yeşerdi", semantic: "temel eylem", lessons: [] },
      { bab: "IV", form: "أَنْبَتَ/يُنْبِتُ", meaning: "bitirdi", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L40", verse: "80:27", form: "فَأَنۢبَتْنَا", note: "bitirdik — nimet hatırlatma" },
    ],
    turkish_traces: ["nebât", "nebâtât"],
  },
  "ق-ت-ل": {
    core: "öldürmek, savaşmak",
    mufradat_note: "Hayata son vermek. Katl: öldürme. Kıtâl: savaş. Kutile: bedduâ kalıbında da kullanılır (80:17) — 'kahrolsun!' anlamında.",
    quran_count: 170,
    derivatives: [
      { form: "قَتْل", pattern: "فَعْل", type: "masdar", meaning: "öldürme" },
      { form: "قِتَال", pattern: "فِعَال", type: "masdar (III)", meaning: "savaş" },
      { form: "قَاتِل", pattern: "فَاعِل", type: "ism-i fâil", meaning: "öldüren" },
      { form: "مَقْتُول", pattern: "مَفْعُول", type: "ism-i mef'ûl", meaning: "öldürülmüş" },
    ],
    bab_chain: [
      { bab: "I", form: "قَتَلَ/يَقْتُلُ", meaning: "öldürdü", semantic: "temel eylem", lessons: [] },
      { bab: "III", form: "قَاتَلَ/يُقَاتِلُ", meaning: "savaştı", semantic: "müfâale", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L40", verse: "80:17", form: "قُتِلَ", note: "kahrolsun insan! — bedduâ" },
    ],
    turkish_traces: ["katl", "kıtâl", "mukatele"],
  },
  "ن-ظ-ر": {
    core: "bakmak, gözetmek, beklemek",
    mufradat_note: "Gözle bakmak ve akılla düşünmek. Nazar: bakış, düşünce. Münâzara: karşılıklı tartışma. İntizâr: bekleme. Kur'ân'da 'baksın insan yiyeceğine' — tefekkür daveti.",
    quran_count: 129,
    derivatives: [
      { form: "نَظَر", pattern: "فَعَل", type: "masdar", meaning: "bakma, düşünme" },
      { form: "نَاظِر", pattern: "فَاعِل", type: "ism-i fâil", meaning: "bakan" },
      { form: "مَنْظَر", pattern: "مَفْعَل", type: "ism-i mekân", meaning: "manzara" },
      { form: "اِنْتِظَار", pattern: "اِفْتِعَال", type: "masdar (VIII)", meaning: "bekleme" },
    ],
    bab_chain: [
      { bab: "I", form: "نَظَرَ/يَنْظُرُ", meaning: "baktı", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L40", verse: "80:24", form: "فَلْيَنظُرِ", note: "baksın insan yiyeceğine" },
    ],
    turkish_traces: ["nazar", "nazariye", "münâzara", "intizâr", "manzara"],
  },
  "ض-ح-ك": {
    core: "gülmek",
    mufradat_note: "Sevinçten gülme. Dâhike: gülen (yüzler). Kur'ân'da ahiretteki karşıtlık: mü'minlerin yüzleri güler, kâfirlerin yüzlerini karanlık kaplar.",
    quran_count: 5,
    derivatives: [
      { form: "ضَحِك", pattern: "فَعِل", type: "masdar", meaning: "gülme" },
      { form: "ضَاحِك", pattern: "فَاعِل", type: "ism-i fâil", meaning: "gülen" },
    ],
    bab_chain: [
      { bab: "I", form: "ضَحِكَ/يَضْحَكُ", meaning: "güldü", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L40", verse: "80:39", form: "ضَاحِكَةٌ", note: "gülen müjdelenmiş yüzler" },
    ],
    turkish_traces: [],
  },
  "ب-ش-ر": {
    core: "müjdelemek, deri, insan",
    mufradat_note: "Deri (beşere). İnsana beşer denmesi derisiyle diğer canlılardan ayrılmasından. Büşrâ: müjde. İstibşâr: sevinç — müjdeyi alınca yüzde beliren parlaklık.",
    quran_count: 123,
    derivatives: [
      { form: "بَشَر", pattern: "فَعَل", type: "isim", meaning: "insan" },
      { form: "بُشْرَى", pattern: "فُعْلَى", type: "isim", meaning: "müjde" },
      { form: "بَشِير", pattern: "فَعِيل", type: "sıfat", meaning: "müjdeci" },
      { form: "مُسْتَبْشِر", pattern: "مُسْتَفْعِل", type: "ism-i fâil (X)", meaning: "sevinçli" },
    ],
    bab_chain: [
      { bab: "II", form: "بَشَّرَ/يُبَشِّرُ", meaning: "müjdeledi", semantic: "teksîr", lessons: [] },
      { bab: "X", form: "اِسْتَبْشَرَ/يَسْتَبْشِرُ", meaning: "sevindi", semantic: "istek", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L40", verse: "80:39", form: "مُّسْتَبْشِرَةٌ", note: "sevinçli yüzler" },
    ],
    turkish_traces: ["beşer", "mübeşşir", "büşrâ", "beşâret"],
  },
  "ع-د-ل": {
    core: "doğrultmak, dengelemek, adalet",
    mufradat_note: "Eşitlemek, dengelemek, düzgün yapmak. Adl: adalet. Ta'dîl: düzeltme. İ'tidâl: denge. Allah'ın insanı 'ta'dîl etmesi': organları dengeli, orantılı yaratması (82:7).",
    quran_count: 29,
    derivatives: [
      { form: "عَدْل", pattern: "فَعْل", type: "masdar/isim", meaning: "adalet, denklik" },
      { form: "تَعْدِيل", pattern: "تَفْعِيل", type: "masdar (II)", meaning: "düzeltme, dengeleme" },
      { form: "اِعْتِدَال", pattern: "اِفْتِعَال", type: "masdar (VIII)", meaning: "denge" },
    ],
    bab_chain: [
      { bab: "I", form: "عَدَلَ/يَعْدِلُ", meaning: "adaletli davrandı", semantic: "temel eylem", lessons: [] },
      { bab: "II", form: "عَدَّلَ/يُعَدِّلُ", meaning: "düzeltti, dengeledi", semantic: "teksîr", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L44", verse: "82:7", form: "فَعَدَلَكَ", note: "seni dengeli yarattı" },
    ],
    turkish_traces: ["adl", "adâlet", "ta'dîl", "i'tidâl", "mu'tedil"],
  },
  "ص-و-ر": {
    core: "şekil vermek, suret, biçim",
    mufradat_note: "Biçim, suret. Tasvîr: şekillendirme. el-Musavvir: Allah'ın sıfatı — her şeye benzersiz biçim veren. İnsanın 'herhangi bir surette terkîb edilmesi' yaratılış kudretini gösterir (82:8).",
    quran_count: 19,
    derivatives: [
      { form: "صُورَة", pattern: "فُعْلَة", type: "isim", meaning: "suret, biçim" },
      { form: "تَصْوِير", pattern: "تَفْعِيل", type: "masdar (II)", meaning: "şekillendirme" },
      { form: "مُصَوِّر", pattern: "مُفَعِّل", type: "ism-i fâil (II)", meaning: "şekil veren" },
    ],
    bab_chain: [
      { bab: "II", form: "صَوَّرَ/يُصَوِّرُ", meaning: "şekillendirdi", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L44", verse: "82:8", form: "صُورَةٍ", note: "dilediği surette terkîb etti" },
    ],
    turkish_traces: ["sûret", "tasvîr", "musavvir"],
  },
  "ر-ك-ب": {
    core: "binmek, birleştirmek, terkip etmek",
    mufradat_note: "Binmek, bir araya getirmek. Terkîb: birleştirme, yapı. Merkeb: binek. Kur'ân'da Allah'ın insanı 'terkîb etmesi': parçaları bir araya getirip biçim vermesi.",
    quran_count: 14,
    derivatives: [
      { form: "رُكُوب", pattern: "فُعُول", type: "masdar", meaning: "binme" },
      { form: "تَرْكِيب", pattern: "تَفْعِيل", type: "masdar (II)", meaning: "birleştirme" },
      { form: "مَرْكَب", pattern: "مَفْعَل", type: "isim", meaning: "binek" },
      { form: "رَاكِب", pattern: "فَاعِل", type: "ism-i fâil", meaning: "binici" },
    ],
    bab_chain: [
      { bab: "I", form: "رَكِبَ/يَرْكَبُ", meaning: "bindi", semantic: "temel eylem", lessons: [] },
      { bab: "II", form: "رَكَّبَ/يُرَكِّبُ", meaning: "birleştirdi", semantic: "teksîr", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L44", verse: "82:8", form: "رَكَّبَكَ", note: "seni (organlarını) birleştirdi" },
    ],
    turkish_traces: ["terkîb", "merkeb", "rükûb", "mürekkeb"],
  },
  "ح-ف-ظ": {
    core: "korumak, muhafaza etmek, ezberlemek",
    mufradat_note: "Bir şeyi kaybolmaktan ve bozulmaktan korumak. Hıfz: koruma, ezberleme. Hâfız: koruyan, hafız. Kur'ân'ın korunması (15:9). İnsanın üzerinde koruyucu (hafaza) melekler vardır.",
    quran_count: 44,
    derivatives: [
      { form: "حِفْظ", pattern: "فِعْل", type: "masdar", meaning: "koruma" },
      { form: "حَافِظ", pattern: "فَاعِل", type: "ism-i fâil", meaning: "koruyan, hafız" },
      { form: "مَحْفُوظ", pattern: "مَفْعُول", type: "ism-i mef'ûl", meaning: "korunmuş" },
    ],
    bab_chain: [
      { bab: "I", form: "حَفِظَ/يَحْفَظُ", meaning: "korudu", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L44", verse: "82:10", form: "لَحَـٰفِظِينَ", note: "üzerinizde koruyucular (melekler)" },
    ],
    turkish_traces: ["hıfz", "hafız", "muhafaza", "mahfûz"],
  },
  "ق-ل-م": {
    core: "kesmek, kalem",
    mufradat_note: "Kesmek, yontmak. Kalem: yazı aleti — ucu kesilerek yontulmasından. Allah'ın 'kalemle öğretmesi' (96:4) yazının ilâhî bir nimet olduğunu gösterir.",
    quran_count: 4,
    derivatives: [
      { form: "قَلَم", pattern: "فَعَل", type: "isim", meaning: "kalem" },
      { form: "أَقْلَام", pattern: "أَفْعَال", type: "cem", meaning: "kalemler" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L47", verse: "96:4", form: "بِٱلْقَلَمِ", note: "kalemle öğreten" },
    ],
    turkish_traces: ["kalem", "taklîm"],
  },
  "ف-ر-ر": {
    core: "kaçmak, firar etmek",
    mufradat_note: "Korkudan veya tiksinmeden kaçmak. Firâr: kaçış. Kur'ân'da kıyâmet günü kaçışı: kişi kardeşinden, annesinden, babasından kaçar — hiçbir sığınak yoktur.",
    quran_count: 6,
    derivatives: [
      { form: "فِرَار", pattern: "فِعَال", type: "masdar", meaning: "kaçış" },
      { form: "فَارّ", pattern: "فَاعِل", type: "ism-i fâil", meaning: "kaçan" },
      { form: "مَفَرّ", pattern: "مَفْعَل", type: "ism-i mekân", meaning: "kaçacak yer" },
    ],
    bab_chain: [
      { bab: "I", form: "فَرَّ/يَفِرُّ", meaning: "kaçtı", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L40", verse: "80:34", form: "يَفِرُّ", note: "kişi kardeşinden kaçar" },
    ],
    turkish_traces: ["firâr", "ferâr"],
  },
  "أ-خ-و": {
    core: "kardeş olmak",
    mufradat_note: "Kardeş, arkadaş. Ah/ahu: erkek kardeş. Uht: kız kardeş. Uhuvvet: kardeşlik. Kur'ân'da hem soy kardeşliği hem din kardeşliği ifade eder.",
    quran_count: 96,
    derivatives: [
      { form: "أَخ", pattern: "فَع", type: "isim", meaning: "kardeş" },
      { form: "إِخْوَة", pattern: "فِعْلَة", type: "cem", meaning: "kardeşler (soy)" },
      { form: "إِخْوَان", pattern: "فِعْلَان", type: "cem", meaning: "kardeşler (din)" },
      { form: "أُخْت", pattern: "فُعْل", type: "isim", meaning: "kız kardeş" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L40", verse: "80:34", form: "أَخِيهِ", note: "kardeşinden kaçar" },
    ],
    turkish_traces: ["ahî", "uhuvvet"],
  },
  "أ-م-م": {
    core: "anne, topluluk, yönelmek",
    mufradat_note: "Asıl, kaynak. Umm: anne — her şeyin aslı. Ümmet: topluluk. İmâm: önder. Ümmî: anadan doğma, okuma-yazma bilmeyen. Kur'ân'da üç temel anlam: anne, topluluk, önder.",
    quran_count: 119,
    derivatives: [
      { form: "أُمّ", pattern: "فُعْل", type: "isim", meaning: "anne" },
      { form: "أُمَّة", pattern: "فُعْلَة", type: "isim", meaning: "topluluk, ümmet" },
      { form: "إِمَام", pattern: "فِعَال", type: "isim", meaning: "önder, imam" },
      { form: "أُمِّيّ", pattern: "فُعْلِيّ", type: "nisbet", meaning: "ümmî" },
    ],
    bab_chain: [
      { bab: "I", form: "أَمَّ/يَؤُمُّ", meaning: "yöneldi, öne geçti", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L40", verse: "80:35", form: "وَأُمِّهِۦ", note: "ve annesinden (kaçar)" },
    ],
    turkish_traces: ["ümmet", "imam", "ümmî"],
  },
  "أ-ب-و": {
    core: "baba, ata",
    mufradat_note: "Baba. Eb/ebu: baba. Âbâ': atalar. Kur'ân'da hem biyolojik babalık hem manevî öncülük anlamında. Ataların yolunu körü körüne izleme eleştirilir.",
    quran_count: 117,
    derivatives: [
      { form: "أَب", pattern: "فَع", type: "isim", meaning: "baba" },
      { form: "آبَاء", pattern: "أَفْعَال", type: "cem", meaning: "babalar, atalar" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L40", verse: "80:35", form: "وَأَبِيهِ", note: "ve babasından (kaçar)" },
    ],
    turkish_traces: ["eb", "ebeveyn"],
  },
  "ب-ن-و": {
    core: "oğul, çocuk, inşa etmek",
    mufradat_note: "Oğul, evlât. İbn: oğul. Binâ: bina, yapı — oğul ailenin yapısını devam ettirir. Kur'ân'da benûn: oğullar; benât: kızlar.",
    quran_count: 161,
    derivatives: [
      { form: "اِبْن", pattern: "—", type: "isim", meaning: "oğul" },
      { form: "بَنُون", pattern: "—", type: "cem", meaning: "oğullar" },
      { form: "بِنْت", pattern: "—", type: "isim", meaning: "kız" },
      { form: "بِنَاء", pattern: "فِعَال", type: "masdar", meaning: "yapı, bina" },
    ],
    bab_chain: [
      { bab: "I", form: "بَنَى/يَبْنِي", meaning: "inşa etti", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L40", verse: "80:36", form: "وَبَنِيهِ", note: "ve çocuklarından (kaçar)" },
    ],
    turkish_traces: ["ibn", "bina", "binâ", "bennâ"],
  },
  "و-ق-ي": {
    core: "korumak, sakınmak",
    mufradat_note: "Bir şeyi zararlıdan korumak. Vikâye: koruma kalkanı. Takvâ: Allah'tan sakınma — Kur'ân'ın en merkezi kavramlarından. Muttakî: takvâ sahibi. İttikâ: korunma, sakınma.",
    quran_count: 258,
    derivatives: [
      { form: "تَقْوَى", pattern: "تَفْعَلَ", type: "masdar", meaning: "takvâ, sakınma" },
      { form: "مُتَّقٍ", pattern: "مُفْتَعِل", type: "ism-i fâil (VIII)", meaning: "muttakî" },
      { form: "وِقَايَة", pattern: "فِعَالَة", type: "masdar", meaning: "koruma, korunma" },
    ],
    bab_chain: [
      { bab: "I", form: "وَقَى/يَقِي", meaning: "korudu", semantic: "temel eylem", lessons: [] },
      { bab: "VIII", form: "اِتَّقَى/يَتَّقِي", meaning: "sakındı, korundu", semantic: "iftial", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L47", verse: "96:12", form: "بِٱلتَّقْوَىٰ", note: "takvâ — o takvâ emrettiyse?" },
    ],
    turkish_traces: ["takvâ", "muttakî", "vikâye", "ittikâ"],
  },
  "ق-ل-ب": {
    core: "çevirmek, dönmek, kalp",
    mufradat_note: "Bir şeyi alt üst etmek, çevirmek. Kalb: sürekli dönen, halden hale geçen organ — bu yüzden kalbe bu ad verilmiştir. Kalb hem somut organ hem manevî idrak merkezi.",
    quran_count: 168,
    derivatives: [
      { form: "قَلْب", pattern: "فَعْل", type: "isim", meaning: "kalp" },
      { form: "تَقَلُّب", pattern: "تَفَعُّل", type: "masdar (V)", meaning: "dönme, çevrilme" },
      { form: "اِنْقِلَاب", pattern: "اِنْفِعَال", type: "masdar (VII)", meaning: "dönüş, devrim" },
    ],
    bab_chain: [
      { bab: "I", form: "قَلَبَ/يَقْلِبُ", meaning: "çevirdi", semantic: "temel eylem", lessons: [] },
      { bab: "VII", form: "اِنْقَلَبَ/يَنْقَلِبُ", meaning: "döndü", semantic: "mutâvaat", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:4", form: "يَنقَلِبْ", note: "bakış sana dönecektir" },
    ],
    turkish_traces: ["kalb", "inkılâb", "münkalîb"],
  },
  "خ-ب-ر": {
    core: "haberdar olmak, bilgi, tecrübe",
    mufradat_note: "Bir şeyin iç yüzünü, künhünü bilmek. Habîr: her şeyin iç yüzünden haberdar (Allah'ın sıfatı). Haber: bilgi, haber. Hibre: deneyim, tecrübe.",
    quran_count: 52,
    derivatives: [
      { form: "خَبِير", pattern: "فَعِيل", type: "sıfat", meaning: "her şeyden haberdar" },
      { form: "خَبَر", pattern: "فَعَل", type: "isim", meaning: "haber" },
      { form: "أَخْبَار", pattern: "أَفْعَال", type: "cem", meaning: "haberler" },
    ],
    bab_chain: [
      { bab: "I", form: "خَبَرَ/يَخْبُرُ", meaning: "haberdar oldu", semantic: "temel eylem", lessons: [] },
      { bab: "IV", form: "أَخْبَرَ/يُخْبِرُ", meaning: "haber verdi", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:14", form: "الْخَبِيرُ", note: "O Latîf'tir, Habîr'dir" },
    ],
    turkish_traces: ["haber", "habîr", "muhbir", "ihbâr"],
  },
  "ل-ط-ف": {
    core: "ince olmak, lütfetmek",
    mufradat_note: "İncelik, yumuşaklık, gizli iyilik. Latîf: en ince ayrıntıları bilen, kullarına gizlice iyilik eden. Lutf: incelik, ihsan. el-Latîf: Allah'ın sıfatı — hem bilgide hem fiilde incelik.",
    quran_count: 7,
    derivatives: [
      { form: "لَطِيف", pattern: "فَعِيل", type: "sıfat", meaning: "lütufkâr, ince" },
      { form: "لُطْف", pattern: "فُعْل", type: "masdar", meaning: "lütuf" },
    ],
    bab_chain: [
      { bab: "I", form: "لَطُفَ/يَلْطُفُ", meaning: "ince oldu", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:14", form: "اللَّطِيفُ", note: "O Latîf'tir — ince bilen" },
    ],
    turkish_traces: ["latîf", "lütuf", "letâfet"],
  },
  "ذ-ل-ل": {
    core: "boyun eğmek, zelil olmak, uysal olmak",
    mufradat_note: "Boyun eğme, itaatkârlık. Zelûl: uysal, boyun eğmiş (hayvan). Zillet: aşağılık, horluk. Tezkîl: hor kılma. Yerin 'zelûl' kılınması: insana boyun eğmesi, yürümeye elverişli olması.",
    quran_count: 24,
    derivatives: [
      { form: "ذَلُول", pattern: "فَعُول", type: "sıfat", meaning: "uysal, boyun eğmiş" },
      { form: "ذُلّ", pattern: "فُعْل", type: "masdar", meaning: "zillet, boyun eğme" },
      { form: "ذَلِيل", pattern: "فَعِيل", type: "sıfat", meaning: "zelil, hor" },
    ],
    bab_chain: [
      { bab: "I", form: "ذَلَّ/يَذِلُّ", meaning: "boyun eğdi", semantic: "temel eylem", lessons: [] },
      { bab: "II", form: "ذَلَّلَ/يُذَلِّلُ", meaning: "uysal kıldı", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:15", form: "ذَلُولًا", note: "yeri size boyun eğmiş kıldı" },
    ],
    turkish_traces: ["zelîl", "zillet", "tezlîl"],
  },
  "ط-ي-ر": {
    core: "uçmak, kuş",
    mufradat_note: "Uçmak. Tayr/tâir: kuş. Tatâyur: uğursuzluk sayma (kuşların uçuşundan falcılık). Kur'ân'da kuşların uçuşu Allah'ın kudret delili.",
    quran_count: 28,
    derivatives: [
      { form: "طَيْر", pattern: "فَعْل", type: "isim", meaning: "kuş(lar)" },
      { form: "طَائِر", pattern: "فَاعِل", type: "ism-i fâil", meaning: "kuş, uçan" },
    ],
    bab_chain: [
      { bab: "I", form: "طَارَ/يَطِيرُ", meaning: "uçtu", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:19", form: "الطَّيْرِ", note: "kuşlara bakmazlar mı?" },
    ],
    turkish_traces: ["tayr", "tâir", "tayarân"],
  },
  "ص-ف-ف": {
    core: "sıra olmak, dizmek",
    mufradat_note: "Sıra halinde dizilmek. Saff: saf, dizi. Sâffât: kanatlarını açıp sıra halinde uçan kuşlar. Namazda saf tutma da bu köktendir.",
    quran_count: 13,
    derivatives: [
      { form: "صَفّ", pattern: "فَعْل", type: "isim", meaning: "saf, sıra" },
      { form: "صَافَّة", pattern: "فَاعِلَة", type: "ism-i fâil", meaning: "kanat açan" },
      { form: "صُفُوف", pattern: "فُعُول", type: "cem", meaning: "saflar" },
    ],
    bab_chain: [
      { bab: "I", form: "صَفَّ/يَصُفُّ", meaning: "dizildi", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:19", form: "صَافَّاتٍ", note: "kanatlarını açarak (uçan kuşlar)" },
    ],
    turkish_traces: ["saff", "saf"],
  },
  "ق-ب-ض": {
    core: "tutmak, kavramak, kapamak",
    mufradat_note: "Eli kapamak, sıkmak. Kabz: tutma, sıkma — bast'ın (açma) zıddı. Kuşların kanatlarını 'kabzetmesi': kapatması, indirmesi.",
    quran_count: 12,
    derivatives: [
      { form: "قَبْض", pattern: "فَعْل", type: "masdar", meaning: "tutma, kapama" },
      { form: "قَابِض", pattern: "فَاعِل", type: "ism-i fâil", meaning: "tutan, daraltıcı" },
    ],
    bab_chain: [
      { bab: "I", form: "قَبَضَ/يَقْبِضُ", meaning: "tuttu, kapadı", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:19", form: "وَيَقْبِضْنَ", note: "ve (kanatlarını) kaparlar" },
    ],
    turkish_traces: ["kabz", "makbûz"],
  },
  "ه-ل-ك": {
    core: "helâk olmak, yok olmak",
    mufradat_note: "Yok olma, telef olma. Helâk: mahvolma. İhlâk: helâk etme. Tehlike: tehlike — helâke yakınlık. Kur'ân'da geçmiş kavimlerin helâki ibret olarak anlatılır.",
    quran_count: 67,
    derivatives: [
      { form: "هَلَاك", pattern: "فَعَال", type: "masdar", meaning: "helâk, yıkım" },
      { form: "إِهْلَاك", pattern: "إِفْعَال", type: "masdar (IV)", meaning: "helâk etme" },
      { form: "هَالِك", pattern: "فَاعِل", type: "ism-i fâil", meaning: "helâk olan" },
      { form: "مُهْلَك", pattern: "مُفْعَل", type: "ism-i mef'ûl (IV)", meaning: "helâk edilmiş" },
    ],
    bab_chain: [
      { bab: "I", form: "هَلَكَ/يَهْلِكُ", meaning: "helâk oldu", semantic: "temel eylem", lessons: [] },
      { bab: "IV", form: "أَهْلَكَ/يُهْلِكُ", meaning: "helâk etti", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:28", form: "أَهْلَكَنِيَ", note: "Allah beni helâk ederse" },
    ],
    turkish_traces: ["helâk", "tehlike", "mühlik"],
  },
  "أ-ج-ر": {
    core: "ücret, karşılık, ödül",
    mufradat_note: "İş karşılığı verilen ücret. Ecr: ödül, mükâfât. İcâr: kiralama. Kur'ân'da amellerin karşılığı olan ilâhî ecir. 'Ecr-i azîm': büyük ödül — cennet.",
    quran_count: 105,
    derivatives: [
      { form: "أَجْر", pattern: "فَعْل", type: "isim", meaning: "ecir, ödül" },
      { form: "أُجْرَة", pattern: "فُعْلَة", type: "isim", meaning: "ücret" },
    ],
    bab_chain: [
      { bab: "I", form: "أَجَرَ/يَأْجُرُ", meaning: "karşılık verdi", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:12", form: "وَأَجْرٌ", note: "mağfiret ve büyük ecir" },
    ],
    turkish_traces: ["ecir", "ücret", "icâr", "me'cûr"],
  },
  "ش-ك-ر": {
    core: "şükretmek, teşekkür etmek",
    mufradat_note: "Nimeti tanıyıp karşılık vermek. Şükür: nimet verene teşekkür. Allah'ın şükrü: kulun amelini kabul edip ödüllendirmesi. Şekûr: çok şükreden / çok ödüllendiren.",
    quran_count: 75,
    derivatives: [
      { form: "شُكْر", pattern: "فُعْل", type: "masdar", meaning: "şükür" },
      { form: "شَكُور", pattern: "فَعُول", type: "mübalağa", meaning: "çok şükreden" },
      { form: "شَاكِر", pattern: "فَاعِل", type: "ism-i fâil", meaning: "şükreden" },
    ],
    bab_chain: [
      { bab: "I", form: "شَكَرَ/يَشْكُرُ", meaning: "şükretti", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:23", form: "تَشْكُرُونَ", note: "az şükrediyorsunuz" },
    ],
    turkish_traces: ["şükür", "şükrân", "teşekkür", "şekûr"],
  },
  "ح-ش-ر": {
    core: "toplamak, sürmek, haşretmek",
    mufradat_note: "Bir yere sürüp toplamak. Haşr: kıyâmette tüm insanların toplanması. Mahşer: toplanma yeri. Haşşâr: toplayan.",
    quran_count: 44,
    derivatives: [
      { form: "حَشْر", pattern: "فَعْل", type: "masdar", meaning: "toplama, haşr" },
      { form: "مَحْشَر", pattern: "مَفْعَل", type: "ism-i mekân", meaning: "toplanma yeri" },
    ],
    bab_chain: [
      { bab: "I", form: "حَشَرَ/يَحْشُرُ", meaning: "topladı", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:24", form: "تُحْشَرُونَ", note: "O'na haşrolunacaksınız" },
    ],
    turkish_traces: ["haşr", "mahşer"],
  },
  "ص-د-ق": {
    core: "doğru olmak, doğrulamak",
    mufradat_note: "Doğruluk. Sıdk: doğruluk, dürüstlük. Sâdık: doğru, dürüst. Tasdîk: doğrulama. Sadaka: Allah yolunda verme — ameldeki doğruluğun ispatı.",
    quran_count: 155,
    derivatives: [
      { form: "صِدْق", pattern: "فِعْل", type: "masdar", meaning: "doğruluk" },
      { form: "صَادِق", pattern: "فَاعِل", type: "ism-i fâil", meaning: "doğru, sâdık" },
      { form: "تَصْدِيق", pattern: "تَفْعِيل", type: "masdar (II)", meaning: "doğrulama" },
      { form: "صَدَقَة", pattern: "فَعَلَة", type: "isim", meaning: "sadaka" },
    ],
    bab_chain: [
      { bab: "I", form: "صَدَقَ/يَصْدُقُ", meaning: "doğru söyledi", semantic: "temel eylem", lessons: [] },
      { bab: "II", form: "صَدَّقَ/يُصَدِّقُ", meaning: "doğruladı", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:25", form: "صَادِقِينَ", note: "doğru söylüyorsanız" },
    ],
    turkish_traces: ["sıdk", "sâdık", "sadaka", "tasdîk", "musaddak"],
  },
  "أ-ل-م": {
    core: "acı, ağrı",
    mufradat_note: "Acı, elem. Elîm: acı verici, şiddetli. Kur'ân'da genellikle 'azâb-ı elîm' şeklinde — cehennem azâbının şiddeti.",
    quran_count: 72,
    derivatives: [
      { form: "أَلَم", pattern: "فَعَل", type: "isim", meaning: "acı, ağrı" },
      { form: "أَلِيم", pattern: "فَعِيل", type: "sıfat", meaning: "acı verici" },
    ],
    bab_chain: [
      { bab: "I", form: "أَلِمَ/يَأْلَمُ", meaning: "acı çekti", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:28", form: "أَلِيمٍ", note: "acı azaptan kim koruyacak?" },
    ],
    turkish_traces: ["elem", "elîm", "müellim"],
  },
  "و-ك-ل": {
    core: "güvenmek, havale etmek, vekil kılmak",
    mufradat_note: "İşi bir başkasına bırakmak, güvenmek. Tevekkül: Allah'a güvenip dayanma. Vekîl: vekil, güvenilir. el-Vekîl: Allah'ın sıfatı — her işi üstlenen.",
    quran_count: 70,
    derivatives: [
      { form: "تَوَكُّل", pattern: "تَفَعُّل", type: "masdar (V)", meaning: "tevekkül" },
      { form: "وَكِيل", pattern: "فَعِيل", type: "sıfat", meaning: "vekil, güvenilir" },
      { form: "مُتَوَكِّل", pattern: "مُتَفَعِّل", type: "ism-i fâil (V)", meaning: "tevekkül eden" },
    ],
    bab_chain: [
      { bab: "I", form: "وَكَلَ/يَكِلُ", meaning: "havale etti", semantic: "temel eylem", lessons: [] },
      { bab: "V", form: "تَوَكَّلَ/يَتَوَكَّلُ", meaning: "güvenip dayandı", semantic: "tekellüf", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L30", verse: "67:29", form: "تَوَكَّلْنَا", note: "O'na tevekkül ettik" },
    ],
    turkish_traces: ["tevekkül", "vekîl", "vekâlet"],
  },
  "ب-ر-ز-خ": {
    core: "engel, perde, ara bölge",
    mufradat_note: "İki şey arasındaki engel. Berzah: denizler arasındaki görünmez engel; ölümle kıyâmet arasındaki âlem (kabir hayatı). Kur'ân'da iki denizin karışmasını engelleyen berzah vurgulanır.",
    quran_count: 3,
    derivatives: [
      { form: "بَرْزَخ", pattern: "فَعْلَل", type: "isim", meaning: "engel, ara bölge" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L35", verse: "55:20", form: "بَرْزَخٌ", note: "aralarında bir engel var — berzah" },
    ],
    turkish_traces: ["berzah"],
  },
  "ش-ر-ق": {
    core: "doğmak (güneş), doğu",
    mufradat_note: "Güneşin doğması. Şark: doğu. Meşrik: güneşin doğduğu yer. İşrâk: aydınlanma, parlaklık. Kur'ân'da meşrıkân (iki doğu): yaz ve kış gün dönümleri.",
    quran_count: 17,
    derivatives: [
      { form: "شَرْق", pattern: "فَعْل", type: "isim", meaning: "doğu" },
      { form: "مَشْرِق", pattern: "مَفْعِل", type: "ism-i mekân", meaning: "doğu tarafı" },
      { form: "مَشْرِقَيْن", pattern: "—", type: "tesniye", meaning: "iki doğu" },
    ],
    bab_chain: [
      { bab: "I", form: "شَرَقَ/يَشْرُقُ", meaning: "doğdu (güneş)", semantic: "temel eylem", lessons: [] },
      { bab: "IV", form: "أَشْرَقَ/يُشْرِقُ", meaning: "aydınlandı", semantic: "sıfat", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L35", verse: "55:17", form: "الْمَشْرِقَيْنِ", note: "iki doğunun ve iki batının Rabbi" },
    ],
    turkish_traces: ["şark", "meşrik", "müşrik"],
  },
  "غ-ر-ب": {
    core: "batmak (güneş), batı",
    mufradat_note: "Güneşin batması, uzaklaşma. Garb: batı. Mağrib: güneşin battığı yer. Gurbet: vatandan uzak olma. Garîb: yabancı, uzak.",
    quran_count: 15,
    derivatives: [
      { form: "غَرْب", pattern: "فَعْل", type: "isim", meaning: "batı" },
      { form: "مَغْرِب", pattern: "مَفْعِل", type: "ism-i mekân", meaning: "batı tarafı" },
      { form: "غُرُوب", pattern: "فُعُول", type: "masdar", meaning: "batma" },
      { form: "غَرِيب", pattern: "فَعِيل", type: "sıfat", meaning: "yabancı, garip" },
    ],
    bab_chain: [
      { bab: "I", form: "غَرَبَ/يَغْرُبُ", meaning: "battı (güneş)", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L35", verse: "55:17", form: "الْمَغْرِبَيْنِ", note: "iki batının Rabbi" },
    ],
    turkish_traces: ["garb", "mağrib", "gurbet", "garîb"],
  },
  "ز-و-ج": {
    core: "çift, eş, çiftlemek",
    mufradat_note: "Eş, çift. Zevc: bir çiftin her bir parçası. Tezvîc: evlendirme. Kur'ân'da her şeyin çift yaratılması ilâhî düzenin kanunu olarak vurgulanır.",
    quran_count: 81,
    derivatives: [
      { form: "زَوْج", pattern: "فَعْل", type: "isim", meaning: "eş, çift" },
      { form: "أَزْوَاج", pattern: "أَفْعَال", type: "cem", meaning: "eşler, çiftler" },
      { form: "تَزْوِيج", pattern: "تَفْعِيل", type: "masdar (II)", meaning: "evlendirme" },
    ],
    bab_chain: [
      { bab: "II", form: "زَوَّجَ/يُزَوِّجُ", meaning: "evlendirdi, çiftledi", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L35", verse: "55:52", form: "زَوْجَانِ", note: "her meyveden iki çeşit" },
    ],
    turkish_traces: ["zevc", "zevce", "izdivaç", "tezvîc"],
  },
  "ج-ح-م": {
    core: "yanıcı ateş, cehennem",
    mufradat_note: "Şiddetli ateş. Cahîm: kızgın ateş yeri — cehennemin isimlerinden biri. Ateşin şiddetini ve alevlerin büyüklüğünü vurgular.",
    quran_count: 26,
    derivatives: [
      { form: "جَحِيم", pattern: "فَعِيل", type: "isim", meaning: "cehennem, şiddetli ateş" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L44", verse: "82:14", form: "جَحِيمٍ", note: "fâcirler elbette cahîmdedir" },
    ],
    turkish_traces: ["cahîm"],
  },
  "ف-ع-ل": {
    core: "yapmak, işlemek",
    mufradat_note: "Bir iş yapmak, eylemde bulunmak. Fi'l: eylem, fiil. Fâil: yapan, özne. Mef'ûl: yapılan, nesne. Nahiv terminolojisinin temelidir.",
    quran_count: 108,
    derivatives: [
      { form: "فِعْل", pattern: "فِعْل", type: "masdar", meaning: "fiil, eylem" },
      { form: "فَاعِل", pattern: "فَاعِل", type: "ism-i fâil", meaning: "yapan, özne" },
      { form: "مَفْعُول", pattern: "مَفْعُول", type: "ism-i mef'ûl", meaning: "yapılan" },
      { form: "فَعَّال", pattern: "فَعَّال", type: "mübalağa", meaning: "çok yapan" },
    ],
    bab_chain: [
      { bab: "I", form: "فَعَلَ/يَفْعَلُ", meaning: "yaptı", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L44", verse: "82:12", form: "تَفْعَلُونَ", note: "ne yaparsanız bilirler" },
    ],
    turkish_traces: ["fiil", "fâil", "mef'ûl", "fa'âl"],
  },
  "د-و-ن": {
    core: "aşağı, berisinde, başka",
    mufradat_note: "Bir şeyin altında, berisinde. Dûn: aşağısında, dışında. Min dûni: ...den başka, ...nin berisinde. Kur'ân'da 'min dûnillâh': Allah'tan başka.",
    quran_count: 163,
    derivatives: [
      { form: "دُون", pattern: "فُعْل", type: "zarf", meaning: "alt, beri, başka" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L35", verse: "55:62", form: "وَمِن دُونِهِمَا", note: "ikisinin berisinde iki cennet daha" },
      { lesson: "L30", verse: "67:20", form: "مِّن دُونِ", note: "Rahmân'dan başka" },
    ],
    turkish_traces: ["dûn", "edânî"],
  },
  "و-ك-أ": {
    core: "yaslanmak, dayanmak",
    mufradat_note: "Bir şeye yaslanmak, dayanmak. İttikâ': yaslanma. Mutteki': yaslanan, dayanan. Cennet ehli için konfor ve huzur sembolü.",
    quran_count: 8,
    derivatives: [
      { form: "مُتَّكِئ", pattern: "مُفْتَعِل", type: "ism-i fâil (VIII)", meaning: "yaslanmış" },
      { form: "مُتَّكَأ", pattern: "مُفْتَعَل", type: "ism-i mekân", meaning: "yaslanılacak yer" },
    ],
    bab_chain: [
      { bab: "VIII", form: "اِتَّكَأَ/يَتَّكِئُ", meaning: "yaslandı", semantic: "iftial", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L35", verse: "55:54", form: "مُتَّكِئِينَ", note: "yaslanmış halde — cennet tasviri" },
    ],
    turkish_traces: ["ittikâ'"],
  },
  "ح-م-م": {
    core: "sıcak olmak, kaynar su, hamam",
    mufradat_note: "Kızgın, sıcak. Hamîm: son derece sıcak su — cehennem azâbında kaynar su. Hammâm: hamam. İstihâm: yıkanma.",
    quran_count: 16,
    derivatives: [
      { form: "حَمِيم", pattern: "فَعِيل", type: "sıfat/isim", meaning: "kaynar su, yakın dost" },
      { form: "حَمَّام", pattern: "فَعَّال", type: "isim", meaning: "hamam" },
    ],
    bab_chain: [
      { bab: "I", form: "حَمَّ/يَحُمُّ", meaning: "sıcak oldu", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L35", verse: "55:44", form: "حَمِيمٍ", note: "kaynar su — cehennem tasviri" },
    ],
    turkish_traces: ["hamîm", "hamam", "hammâm"],
  },
  "ط-و-ف": {
    core: "dolaşmak, tavaf etmek",
    mufradat_note: "Etrafında dönmek, dolaşmak. Tavâf: Kâbe'nin etrafında dönme. Tâife: topluluk. Tûfân: tufan — her yeri saran su.",
    quran_count: 28,
    derivatives: [
      { form: "طَوَاف", pattern: "فَعَال", type: "masdar", meaning: "tavaf, dolaşma" },
      { form: "طَائِف", pattern: "فَاعِل", type: "ism-i fâil", meaning: "dolaşan" },
      { form: "طَائِفَة", pattern: "فَاعِلَة", type: "isim", meaning: "topluluk, grup" },
      { form: "طُوفَان", pattern: "فُعْلَان", type: "isim", meaning: "tufan" },
    ],
    bab_chain: [
      { bab: "I", form: "طَافَ/يَطُوفُ", meaning: "dolaştı", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L35", verse: "55:44", form: "يَطُوفُونَ", note: "ateş ile kaynar su arasında dolaşırlar" },
    ],
    turkish_traces: ["tavaf", "tâife", "tufan"],
  },
  "ج-ز-ي": {
    core: "karşılık vermek, cezalandırmak, mükâfatlandırmak",
    mufradat_note: "Yapılan işin karşılığını vermek — hem ödül hem ceza. Cezâ': karşılık, hüküm. Mücâzât: cezalandırma. 'Hel cezâü'l-ihsâni ille'l-ihsân': iyiliğin karşılığı ancak iyiliktir (55:60).",
    quran_count: 118,
    derivatives: [
      { form: "جَزَاء", pattern: "فَعَال", type: "masdar", meaning: "karşılık, ceza/mükâfât" },
      { form: "مُجَازَاة", pattern: "مُفَاعَلَة", type: "masdar (III)", meaning: "karşılık verme" },
    ],
    bab_chain: [
      { bab: "I", form: "جَزَى/يَجْزِي", meaning: "karşılık verdi", semantic: "temel eylem", lessons: [] },
      { bab: "III", form: "جَازَى/يُجَازِي", meaning: "cezalandırdı", semantic: "müfâale", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L35", verse: "55:60", form: "جَزَاءُ", note: "iyiliğin karşılığı ancak iyiliktir" },
    ],
    turkish_traces: ["ceza", "cezâ'", "mücâzât"],
  },
  "ح-و-ر": {
    core: "dönmek, beyaz olmak, hûrî",
    mufradat_note: "Geri dönmek; gözün siyah-beyazının belirgin olması. Havrâ'/hûr: gözleri çok güzel (siyahı ve beyazı belirgin). Hûrî: cennet ehli eşler. Hıvâr: tartışma, diyalog.",
    quran_count: 18,
    derivatives: [
      { form: "حَوْر", pattern: "فَعْل", type: "isim", meaning: "göz güzelliği" },
      { form: "حُور", pattern: "فُعْل", type: "cem", meaning: "hûrîler" },
      { form: "حِوَار", pattern: "فِعَال", type: "masdar", meaning: "tartışma, diyalog" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L35", verse: "55:72", form: "حُورٌ", note: "hûrîler — cennet tasviri" },
    ],
    turkish_traces: ["hûrî", "muhâvere"],
  },
  "خ-ض-ر": {
    core: "yeşil, taze",
    mufradat_note: "Yeşillik, tazelik. Ahdar: yeşil. Hadîr: yeşillik. Hızır (el-Hadır): bilgi sahibi gizemli kişi — adı yeşillik kökünden. Cennet tasvirlerinde yeşil öne çıkar.",
    quran_count: 8,
    derivatives: [
      { form: "أَخْضَر", pattern: "أَفْعَل", type: "sıfat", meaning: "yeşil" },
      { form: "خُضْر", pattern: "فُعْل", type: "cem", meaning: "yeşiller" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L35", verse: "55:76", form: "خُضْرٍ", note: "yeşil yastıklar — cennet tasviri" },
    ],
    turkish_traces: ["Hızır", "hadra"],
  },
  "ب-ع-ث-ر": {
    core: "altüst etmek, dağıtmak",
    mufradat_note: "Karıştırmak, altüst etmek. Bu'sire: deşildi, karıştırıldı. Kur'ân'da kabirlerin 'bu'sira' edilmesi: kıyâmette mezarların açılması.",
    quran_count: 2,
    derivatives: [
      { form: "بَعْثَرَة", pattern: "فَعْلَلَة", type: "masdar", meaning: "altüst etme" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L44", verse: "82:4", form: "بُعْثِرَتْ", note: "kabirler deşildiğinde" },
    ],
    turkish_traces: [],
  },
  "ك-و-ك-ب": {
    core: "yıldız, gezegen",
    mufradat_note: "Parlak gök cismi, yıldız. Kevkeb: necimden daha parlak yıldızlar/gezegenler. Kevâkib: yıldızlar. Kur'ân'da kıyâmet alâmeti olarak yıldızların dağılması anlatılır.",
    quran_count: 5,
    derivatives: [
      { form: "كَوْكَب", pattern: "فَوْعَل", type: "isim", meaning: "yıldız, gezegen" },
      { form: "كَوَاكِب", pattern: "—", type: "cem", meaning: "yıldızlar" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L44", verse: "82:2", form: "ٱلْكَوَاكِبُ", note: "yıldızlar döküldüğünde" },
    ],
    turkish_traces: ["kevkeb"],
  },
  "أ-خ-ر": {
    core: "sonra olmak, ertelemek, son",
    mufradat_note: "Geride kalmak, ertelemek. Âhir: son. Âhiret: son yurt, öte dünya. Te'hîr: erteleme. Kur'ân'da dünya-âhiret karşıtlığının temel kavramı.",
    quran_count: 250,
    derivatives: [
      { form: "آخِر", pattern: "فَاعِل", type: "sıfat", meaning: "son" },
      { form: "آخِرَة", pattern: "فَاعِلَة", type: "isim", meaning: "âhiret" },
      { form: "تَأْخِير", pattern: "تَفْعِيل", type: "masdar (II)", meaning: "erteleme" },
      { form: "أُخْرَى", pattern: "فُعْلَى", type: "sıfat", meaning: "diğer, öteki" },
    ],
    bab_chain: [
      { bab: "II", form: "أَخَّرَ/يُؤَخِّرُ", meaning: "erteledi", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L44", verse: "82:5", form: "وَأَخَّرَتْ", note: "ne ertelediğini (bilecek)" },
    ],
    turkish_traces: ["âhir", "âhiret", "te'hîr", "muahhar"],
  },
  "ف-و-ق": {
    core: "üst, üzerinde",
    mufradat_note: "Yukarı, üst. Fevk: üzerinde. Tefâvut: farklılık (üst-alt farkı). Tefevvuk: üstün gelme. Kur'ân'da Allah'ın kullarının üstünde oluşu.",
    quran_count: 46,
    derivatives: [
      { form: "فَوْق", pattern: "فَعْل", type: "zarf", meaning: "üzerinde, üstünde" },
      { form: "تَفَوُّق", pattern: "تَفَعُّل", type: "masdar (V)", meaning: "üstün gelme" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L30", verse: "67:19", form: "فَوْقَهُمْ", note: "üstlerinde kanatlarını açarak" },
    ],
    turkish_traces: ["fevk", "tefevvuk", "fâik"],
  },
  "م-ت-ع": {
    core: "faydalanmak, geçimlik",
    mufradat_note: "Bir şeyden faydalanmak, yararlanmak. Metâ': geçimlik, faydalı eşya. İmtâ': faydalandırma. Kur'ân'da dünya hayatının 'metâ-ı kalîl' (az bir geçimlik) olduğu vurgulanır.",
    quran_count: 70,
    derivatives: [
      { form: "مَتَاع", pattern: "فَعَال", type: "isim", meaning: "geçimlik, fayda" },
      { form: "تَمَتُّع", pattern: "تَفَعُّل", type: "masdar (V)", meaning: "yararlanma" },
      { form: "مُتْعَة", pattern: "فُعْلَة", type: "isim", meaning: "zevk, fayda" },
    ],
    bab_chain: [
      { bab: "I", form: "مَتَعَ/يَمْتَعُ", meaning: "faydalandı", semantic: "temel eylem", lessons: [] },
      { bab: "II", form: "مَتَّعَ/يُمَتِّعُ", meaning: "faydalandırdı", semantic: "teksîr", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L40", verse: "80:32", form: "مَّتَـٰعًا", note: "size ve hayvanlarınıza geçimlik" },
    ],
    turkish_traces: ["metâ'", "mütâ'a"],
  },
  "ق-ض-ي": {
    core: "hükmetmek, tamamlamak, bitirmek",
    mufradat_note: "İşi kesinleştirmek, karara bağlamak. Kazâ: hüküm, kader. Kâdî: hâkim. İnkızâ': sona erme. Kur'ân'da 'kazâ' hem ilâhî takdir hem hukûkî hüküm anlamında.",
    quran_count: 63,
    derivatives: [
      { form: "قَضَاء", pattern: "فَعَال", type: "masdar", meaning: "hüküm, kader" },
      { form: "قَاضٍ", pattern: "فَاعِل", type: "ism-i fâil", meaning: "hâkim, kâdî" },
    ],
    bab_chain: [
      { bab: "I", form: "قَضَى/يَقْضِي", meaning: "hükmetti, bitirdi", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L40", verse: "80:23", form: "يَقْضِ", note: "emredileni yerine getirmedi" },
    ],
    turkish_traces: ["kazâ", "kâdî", "kadâ", "inkızâ"],
  },
  "ط-ع-م": {
    core: "yemek, tatmak",
    mufradat_note: "Yemek yemek, tatmak. Ta'âm: yiyecek. İt'âm: yedirme. Mat'am: yemek yeri. Kur'ân'da nimetleri hatırlatma: 'baksın insan yiyeceğine!' (80:24).",
    quran_count: 48,
    derivatives: [
      { form: "طَعَام", pattern: "فَعَال", type: "isim", meaning: "yiyecek" },
      { form: "إِطْعَام", pattern: "إِفْعَال", type: "masdar (IV)", meaning: "yedirme" },
      { form: "مَطْعَم", pattern: "مَفْعَل", type: "ism-i mekân", meaning: "yemek yeri" },
    ],
    bab_chain: [
      { bab: "I", form: "طَعِمَ/يَطْعَمُ", meaning: "yedi, tattı", semantic: "temel eylem", lessons: [] },
      { bab: "IV", form: "أَطْعَمَ/يُطْعِمُ", meaning: "yedirdi", semantic: "ta'diye", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L40", verse: "80:24", form: "طَعَامِهِۦ", note: "yiyeceğine baksın insan" },
    ],
    turkish_traces: ["ta'âm", "mat'am", "it'âm"],
  },
  "س-ب-ل": {
    core: "yol",
    mufradat_note: "Yol, geçit. Sebîl: yol — hem somut hem manevî. Sebîlullâh: Allah yolu. İbn es-sebîl: yolcu, garip. Kur'ân'da doğru yol, sapıklık yolu gibi mecâzlarda çok geçer.",
    quran_count: 176,
    derivatives: [
      { form: "سَبِيل", pattern: "فَعِيل", type: "isim", meaning: "yol" },
      { form: "سُبُل", pattern: "فُعُل", type: "cem", meaning: "yollar" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L40", verse: "80:20", form: "ٱلسَّبِيلَ", note: "yolu kolaylaştırdı" },
    ],
    turkish_traces: ["sebîl", "sebîlullâh"],
  },
  "ز-ي-ت": {
    core: "zeytin, yağ",
    mufradat_note: "Zeytin ağacı ve meyvesi. Zeyt: zeytin yağı. Zeytûn: zeytin. Kur'ân'da nimet listelerinde geçer; Tîn suresinde zeytine yemin edilir.",
    quran_count: 6,
    derivatives: [
      { form: "زَيْتُون", pattern: "فَعْلُون", type: "isim", meaning: "zeytin" },
      { form: "زَيْت", pattern: "فَعْل", type: "isim", meaning: "zeytin yağı" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L40", verse: "80:29", form: "وَزَيْتُونًا", note: "zeytin — nimet sayımı" },
    ],
    turkish_traces: ["zeytûn", "zeyt"],
  },
  "ع-ن-ب": {
    core: "üzüm",
    mufradat_note: "Üzüm. İneb: üzüm tanesi/bağı. A'nâb: üzüm bağları. Kur'ân'da cennet meyveleri ve dünyevî nimetler arasında sıkça zikredilir.",
    quran_count: 11,
    derivatives: [
      { form: "عِنَب", pattern: "فِعَل", type: "isim", meaning: "üzüm" },
      { form: "أَعْنَاب", pattern: "أَفْعَال", type: "cem", meaning: "üzüm bağları" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L40", verse: "80:28", form: "وَعِنَبًا", note: "üzüm — nimet sayımı" },
    ],
    turkish_traces: ["ineb"],
  },
  "ن-ف-ع": {
    core: "fayda vermek, yaramak",
    mufradat_note: "Fayda, menfaat. Nef': fayda. Menfaat: çıkar, yarar. Nâfi': fayda veren. Kur'ân'da fayda-zarar karşıtlığı sık kullanılır: gerçek fayda yalnız Allah'tandır.",
    quran_count: 50,
    derivatives: [
      { form: "نَفْع", pattern: "فَعْل", type: "masdar", meaning: "fayda" },
      { form: "مَنْفَعَة", pattern: "مَفْعَلَة", type: "isim", meaning: "menfaat" },
      { form: "نَافِع", pattern: "فَاعِل", type: "ism-i fâil", meaning: "faydalı" },
    ],
    bab_chain: [
      { bab: "I", form: "نَفَعَ/يَنْفَعُ", meaning: "fayda verdi", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L40", verse: "80:4", form: "فَتَنفَعَهُ", note: "öğüt ona fayda verir" },
    ],
    turkish_traces: ["nef'", "menfaat", "nâfi'"],
  },
  "خ-ط-أ": {
    core: "hata etmek, günah işlemek",
    mufradat_note: "Doğrudan sapmak, hata yapmak. Hatî'e: günah, büyük hata. Hatâ': kasıtsız hata. Kur'ân'da ikisi ayrılır: hatî'e (kasıtlı), hatâ' (kasıtsız).",
    quran_count: 22,
    derivatives: [
      { form: "خَطِيئَة", pattern: "فَعِيلَة", type: "isim", meaning: "günah" },
      { form: "خَاطِئ", pattern: "فَاعِل", type: "ism-i fâil", meaning: "günahkâr, hatalı" },
      { form: "خَطَأ", pattern: "فَعَل", type: "masdar", meaning: "hata" },
    ],
    bab_chain: [
      { bab: "I", form: "خَطِئَ/يَخْطَأُ", meaning: "hata etti", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L47", verse: "96:16", form: "خَاطِئَةٍ", note: "günahkâr perçem" },
    ],
    turkish_traces: ["hatâ", "hatîe"],
  },
  "ن-د-ي": {
    core: "çağırmak, meclis, toplantı",
    mufradat_note: "Çağırmak, nidâ etmek. Nâdî: meclis, toplantı yeri. Nidâ': sesleniş. Münâdî: çağıran. Kur'ân'da 'nâdîsini çağırsın' — taraftarlarını yardıma çağırma tehdidi.",
    quran_count: 51,
    derivatives: [
      { form: "نَادٍ", pattern: "فَاعِل", type: "isim", meaning: "meclis, toplantı yeri" },
      { form: "نِدَاء", pattern: "فِعَال", type: "masdar", meaning: "sesleniş, çağrı" },
      { form: "مُنَادٍ", pattern: "مُفَاعِل", type: "ism-i fâil (III)", meaning: "çağıran" },
    ],
    bab_chain: [
      { bab: "I", form: "نَدَى/يَنْدِي", meaning: "seslendi", semantic: "temel eylem", lessons: [] },
      { bab: "III", form: "نَادَى/يُنَادِي", meaning: "çağırdı", semantic: "müfâale", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L47", verse: "96:17", form: "نَادِيَهُۥ", note: "meclisini (taraftarlarını) çağırsın" },
    ],
    turkish_traces: ["nidâ", "nâdî", "münâdî"],
  },
  "ز-ب-ن": {
    core: "itmek, defetmek",
    mufradat_note: "Şiddetle itmek, defetmek. Zebâniye: cehennem bekçileri, azgınları itip kakanlar. İsim olarak yalnız Kur'ân'da geçer (96:18).",
    quran_count: 1,
    derivatives: [
      { form: "زَبَانِيَة", pattern: "—", type: "isim", meaning: "zebânîler, cehennem melekleri" },
    ],
    bab_chain: [
      { bab: "I", form: "زَبَنَ/يَزْبِنُ", meaning: "itti, defetti", semantic: "temel eylem", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L47", verse: "96:18", form: "ٱلزَّبَانِيَةَ", note: "biz de zebânîleri çağırırız" },
    ],
    turkish_traces: ["zebânî"],
  },
  "أ-ل-و": {
    core: "nimet, lütuf",
    mufradat_note: "Nimet, iyilik. Âlâ': nimetler. Kur'ân'da 31 kez tekrarlanan soru ile insana ve cinne nimetler hatırlatılır: 'Rabbinizin hangi nimetlerini yalanlarsınız?'",
    quran_count: 34,
    derivatives: [
      { form: "آلَاء", pattern: "أَفْعَال", type: "cem", meaning: "nimetler" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L35", verse: "55:13", form: "آلَاءِ", note: "Rabbinizin hangi nimetlerini?" },
    ],
    turkish_traces: ["âlâ"],
  },
  "أ-ن-م": {
    core: "canlılar, yaratıklar",
    mufradat_note: "Yeryüzündeki canlılar, mahlûkât. Enâm: ins ü cin dâhil tüm canlılar. Kur'ân'da yerin canlılar için yaratıldığı vurgulanır (55:10).",
    quran_count: 1,
    derivatives: [
      { form: "أَنَام", pattern: "أَفْعَال", type: "isim", meaning: "canlılar, yaratıklar" },
    ],
    bab_chain: [],
    cross_refs: [
      { lesson: "L35", verse: "55:10", form: "لِلْأَنَامِ", note: "yeri canlılara hazırladı" },
    ],
    turkish_traces: ["enâm"],
  },
  "أ-خ-ذ": {
    core: "almak, tutmak, yakalamak",
    mufradat_note: "Tutmak, ele almak. Ahz: alma, kavrama. Kur'ân'da 'günahlarından dolayı tutulma' — ilâhî ceza. Muâheze: hesaba çekme.",
    quran_count: 273,
    derivatives: [
      { form: "أَخْذ", pattern: "فَعْل", type: "masdar", meaning: "alma, tutma" },
      { form: "مُؤَاخَذَة", pattern: "مُفَاعَلَة", type: "masdar (III)", meaning: "hesaba çekme" },
    ],
    bab_chain: [
      { bab: "I", form: "أَخَذَ/يَأْخُذُ", meaning: "aldı, tuttu", semantic: "temel eylem", lessons: [] },
      { bab: "III", form: "آخَذَ/يُؤَاخِذُ", meaning: "hesaba çekti", semantic: "müfâale", lessons: [] },
    ],
    cross_refs: [
      { lesson: "L35", verse: "55:41", form: "فَيُؤْخَذُ", note: "perçemlerinden tutulurlar" },
    ],
    turkish_traces: ["ahz", "muâheze", "me'hûz"],
  },
  // ===== v0.28 — Ek kalan kökler (74) =====

  "ق-ص-ر": {
    core: "kısa olmak, kısmak, hapsetmek",
    mufradat_note: "Kısa kesmek, sınırlamak, hapsetmek. Kâsırât et-tarf: bakışlarını kocalarına hasreden (cennet ehli). Makṣûra: korunan, muhafaza edilen. Kasr: köşk.",
    quran_count: 17,
    derivatives: [
      { form: "قَصْر", pattern: "فَعْل", type: "isim", meaning: "köşk, kısa kesme" },
      { form: "قَاصِرَة", pattern: "فَاعِلَة", type: "ism-i fâil", meaning: "bakışını kısan" },
      { form: "مَقْصُورَة", pattern: "مَفْعُولَة", type: "ism-i mef'ûl", meaning: "korunan" },
    ],
    bab_chain: [{ bab: "I", form: "قَصَرَ/يَقْصُرُ", meaning: "kısalttı", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L35", verse: "55:56", form: "قَاصِرَاتُ", note: "bakışlarını kısmış" }],
    turkish_traces: ["kasr", "makṣûra", "kasır"],
  },
  "ط-م-ث": {
    core: "dokunmak, temas etmek",
    mufradat_note: "Kadına dokunma (cinsel temas). Kur'ân'da cennet ehlinin eşlerinin 'dokunulmamış' olduğu vurgulanır.",
    quran_count: 2,
    derivatives: [{ form: "طَمْث", pattern: "فَعْل", type: "masdar", meaning: "dokunma, temas" }],
    bab_chain: [{ bab: "I", form: "طَمَثَ/يَطْمِثُ", meaning: "dokundu", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L35", verse: "55:56", form: "يَطْمِثْهُنَّ", note: "onlara dokunmamış" }],
    turkish_traces: [],
  },
  "ف-ن-ن": {
    core: "dal, çeşit, tür",
    mufradat_note: "Dal budak. Efnân: dallar, çeşitler. Fenn: çeşit, sanat dalı. Cennet tasvirlerinde ağaçların zengin dallanması.",
    quran_count: 1,
    derivatives: [{ form: "أَفْنَان", pattern: "أَفْعَال", type: "cem", meaning: "dallar, çeşitler" }],
    bab_chain: [],
    cross_refs: [{ lesson: "L35", verse: "55:48", form: "أَفْنَانٍ", note: "çeşitli dalları olan iki cennet" }],
    turkish_traces: ["fenn", "fennî", "efnân"],
  },
  "ف-ر-ش": {
    core: "sermek, döşemek",
    mufradat_note: "Yaymak, sermek. Firâş: döşek, sergi. Ferş: serme. Cennet döşekleri nimet sembolü.",
    quran_count: 7,
    derivatives: [
      { form: "فُرُش", pattern: "فُعُل", type: "cem", meaning: "döşekler" },
      { form: "فِرَاش", pattern: "فِعَال", type: "isim", meaning: "döşek, yatak" },
    ],
    bab_chain: [{ bab: "I", form: "فَرَشَ/يَفْرِشُ", meaning: "serdi", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L35", verse: "55:54", form: "فُرُشٍ", note: "döşeklere yaslanarak" }],
    turkish_traces: ["ferş", "firâş", "mefrûşât"],
  },
  "ب-ط-ن": {
    core: "karın, iç, gizli",
    mufradat_note: "İç taraf, karın. Bâtın: gizli, iç yüz — zâhirin zıddı. Batâin: astarlar. el-Bâtın: Allah'ın sıfatı — gizli olan, iç yüzü bilen.",
    quran_count: 23,
    derivatives: [
      { form: "بَطْن", pattern: "فَعْل", type: "isim", meaning: "karın" },
      { form: "بَاطِن", pattern: "فَاعِل", type: "sıfat", meaning: "gizli, iç" },
      { form: "بَطَائِن", pattern: "—", type: "cem", meaning: "astarlar" },
    ],
    bab_chain: [],
    cross_refs: [{ lesson: "L35", verse: "55:54", form: "بَطَائِنُهَا", note: "astarları ağır ipekten" }],
    turkish_traces: ["bâtın", "batın", "bâtınî"],
  },
  "ج-ن-ي": {
    core: "devşirmek, toplamak",
    mufradat_note: "Meyve toplamak. Cenâ: devşirilen meyve. Cinâyet: suç (kötü hasat metaforu). Cennet meyvelerinin kolayca devşirilmesi.",
    quran_count: 4,
    derivatives: [
      { form: "جَنًى", pattern: "فَعَل", type: "isim", meaning: "taze meyve" },
      { form: "جِنَاء", pattern: "فِعَال", type: "masdar", meaning: "devşirme" },
    ],
    bab_chain: [{ bab: "I", form: "جَنَى/يَجْنِي", meaning: "devşirdi", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L35", verse: "55:54", form: "وَجَنَى", note: "meyveleri yakın, devşirilecek" }],
    turkish_traces: ["cinâyet"],
  },
  "ط-ر-ف": {
    core: "uç, kenar, bakış",
    mufradat_note: "Göz, bakış, uç. Tarf: bakış, göz kırpma. Taraf: kenar, yön. Kâsırâtu't-tarf: bakışını kısan.",
    quran_count: 15,
    derivatives: [
      { form: "طَرْف", pattern: "فَعْل", type: "isim", meaning: "bakış, göz" },
      { form: "طَرَف", pattern: "فَعَل", type: "isim", meaning: "taraf, kenar" },
    ],
    bab_chain: [],
    cross_refs: [{ lesson: "L35", verse: "55:56", form: "الطَّرْفِ", note: "bakışını kısmış — cennet ehli" }],
    turkish_traces: ["taraf", "tarf"],
  },
  "د-ه-م": {
    core: "koyu olmak, kaplamak",
    mufradat_note: "Koyu yeşil, gür yeşillik. Müdhâmme: sulanmaktan koyu yeşile dönmüş. Cennet bahçelerinin yoğun yeşilliği.",
    quran_count: 1,
    derivatives: [{ form: "مُدْهَامَّة", pattern: "—", type: "ism-i fâil", meaning: "koyu yeşil" }],
    bab_chain: [],
    cross_refs: [{ lesson: "L35", verse: "55:64", form: "مُدْهَامَّتَانِ", note: "koyu yeşil iki cennet" }],
    turkish_traces: [],
  },
  "ن-ض-خ": {
    core: "fışkırmak, coşkun akmak",
    mufradat_note: "Suyun fışkırması. Naddâh: fışkıran pınar. Cennet pınarlarının coşkun akışı.",
    quran_count: 1,
    derivatives: [{ form: "نَضَّاخَة", pattern: "فَعَّالَة", type: "mübalağa", meaning: "fışkıran" }],
    bab_chain: [],
    cross_refs: [{ lesson: "L35", verse: "55:66", form: "نَضَّاخَتَانِ", note: "fışkıran iki pınar" }],
    turkish_traces: [],
  },
  "ر-م-م": {
    core: "çürümek, kemik, nar",
    mufradat_note: "Çürümek, yıpranmak. Ramîm: çürümüş kemik. Rummân: nar — cennet meyvelerinden.",
    quran_count: 5,
    derivatives: [
      { form: "رُمَّان", pattern: "فُعَّال", type: "isim", meaning: "nar" },
      { form: "رَمِيم", pattern: "فَعِيل", type: "sıfat", meaning: "çürümüş" },
    ],
    bab_chain: [],
    cross_refs: [{ lesson: "L35", verse: "55:68", form: "وَرُمَّانٌ", note: "ve nar" }],
    turkish_traces: ["rummân"],
  },
  "خ-ي-م": {
    core: "çadır kurmak",
    mufradat_note: "Çadır, karargâh. Hıyâm: çadırlar. Cennet ehli için korunaklı mekan.",
    quran_count: 2,
    derivatives: [
      { form: "خِيَام", pattern: "فِعَال", type: "cem", meaning: "çadırlar" },
      { form: "خَيْمَة", pattern: "فَعْلَة", type: "isim", meaning: "çadır" },
    ],
    bab_chain: [],
    cross_refs: [{ lesson: "L35", verse: "55:72", form: "الْخِيَامِ", note: "çadırlarda" }],
    turkish_traces: ["hayme", "hayma"],
  },
  "ر-ف-ر-ف": {
    core: "yastık, yeşil örtü",
    mufradat_note: "Döşek, minder, yeşil yastık. Refref: cennet yastıkları/yeşil örtüler.",
    quran_count: 1,
    derivatives: [{ form: "رَفْرَف", pattern: "فَعْلَل", type: "isim", meaning: "yastıklar, minderler" }],
    bab_chain: [],
    cross_refs: [{ lesson: "L35", verse: "55:76", form: "رَفْرَفٍ", note: "yeşil yastıklara yaslanarak" }],
    turkish_traces: [],
  },
  "ع-ب-ق-ر": {
    core: "harika, eşsiz (kumaş/döşeme)",
    mufradat_note: "Abkar: efsanevi diyar. Abkarî: harika, benzersiz döşeme/kumaş. Cennet tasvirinde en seçkin döşeme.",
    quran_count: 1,
    derivatives: [{ form: "عَبْقَرِيّ", pattern: "—", type: "nisbet", meaning: "harika kumaş" }],
    bab_chain: [],
    cross_refs: [{ lesson: "L35", verse: "55:76", form: "وَعَبْقَرِيٍّ", note: "ve harika döşemeler" }],
    turkish_traces: ["abkarî"],
  },
  "ص-ل-ص-ل": {
    core: "kuru balçık, ses çıkaran çamur",
    mufradat_note: "Kurumuş, vurulunca ses çıkaran balçık. İnsanın yaratılış maddesi olarak geçer.",
    quran_count: 4,
    derivatives: [{ form: "صَلْصَال", pattern: "فَعْلَال", type: "isim", meaning: "kuru balçık" }],
    bab_chain: [],
    cross_refs: [{ lesson: "L35", verse: "55:14", form: "صَلْصَالٍ", note: "kuru balçıktan yarattı" }],
    turkish_traces: [],
  },
  "ف-خ-ر": {
    core: "övünmek, çömlek, seramik",
    mufradat_note: "Övünmek. Fahhâr: pişmiş çamur, seramik. Fahr: övünç, iftihar.",
    quran_count: 5,
    derivatives: [
      { form: "فَخَّار", pattern: "فَعَّال", type: "isim", meaning: "pişmiş çamur" },
      { form: "فَخْر", pattern: "فَعْل", type: "masdar", meaning: "övünç" },
    ],
    bab_chain: [],
    cross_refs: [{ lesson: "L35", verse: "55:14", form: "كَالْفَخَّارِ", note: "çanak çömlek gibi" }],
    turkish_traces: ["fahr", "iftihâr", "fahrî"],
  },
  "ب-غ-ي": {
    core: "istemek, aşmak, saldırmak",
    mufradat_note: "Aşırı istek, haddi aşma. Bağy: zulüm, taşkınlık. Yebğiyân: birbirinin sınırını aşarlar. İki denizin karışmaması ilâhî denge.",
    quran_count: 38,
    derivatives: [
      { form: "بَغْي", pattern: "فَعْل", type: "masdar", meaning: "taşkınlık, zulüm" },
      { form: "بَاغٍ", pattern: "فَاعِل", type: "ism-i fâil", meaning: "haddi aşan" },
    ],
    bab_chain: [{ bab: "I", form: "بَغَى/يَبْغِي", meaning: "haddi aştı", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L35", verse: "55:20", form: "يَبْغِيَانِ", note: "birbirini aşmazlar" }],
    turkish_traces: ["bağy", "bâğî"],
  },
  "ل-ؤ-ل-ؤ": {
    core: "inci",
    mufradat_note: "İnci. Lü'lü': inci. Kur'ân'da denizden çıkan nimetler arasında; cennet tasviri.",
    quran_count: 6,
    derivatives: [{ form: "لُؤْلُؤ", pattern: "—", type: "isim", meaning: "inci" }],
    bab_chain: [],
    cross_refs: [{ lesson: "L35", verse: "55:22", form: "اللُّؤْلُؤُ", note: "inci ve mercan çıkar" }],
    turkish_traces: ["lü'lü'"],
  },
  "ف-ر-غ": {
    core: "boşalmak, boş kalmak",
    mufradat_note: "Boşalmak. Ferâğ: boşluk, boş zaman. Kur'ân'da 'senefrugu lekum' — size bakacağız, meşgul olacağız (tehdit).",
    quran_count: 5,
    derivatives: [
      { form: "فَرَاغ", pattern: "فَعَال", type: "masdar", meaning: "boşluk, boş kalma" },
    ],
    bab_chain: [{ bab: "I", form: "فَرَغَ/يَفْرُغُ", meaning: "boşaldı", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L35", verse: "55:31", form: "سَنَفْرُغُ", note: "size bakacağız — tehdit" }],
    turkish_traces: ["ferâğ"],
  },
  "ع-ش-ر": {
    core: "on, topluluk, eş",
    mufradat_note: "On sayısı. Ma'şer: topluluk, güruh. Muâşera: birlikte yaşama. Aşîre: kabile, yakın çevre.",
    quran_count: 28,
    derivatives: [
      { form: "عَشَرَة", pattern: "فَعَلَة", type: "sayı", meaning: "on" },
      { form: "مَعْشَر", pattern: "مَفْعَل", type: "isim", meaning: "topluluk" },
    ],
    bab_chain: [],
    cross_refs: [{ lesson: "L35", verse: "55:33", form: "مَعْشَرَ", note: "ey cin ve insan topluluğu" }],
    turkish_traces: ["aşîre", "muâşeret", "aşr"],
  },
  "ق-ط-ر": {
    core: "damla, kenar, bölge",
    mufradat_note: "Damla, kenar. Akṭâr: kenarlar, sınırlar. Kutûr: çap. Kur'ân'da 'göklerin ve yerin akṭârından' — sınırlarından.",
    quran_count: 3,
    derivatives: [
      { form: "أَقْطَار", pattern: "أَفْعَال", type: "cem", meaning: "kenarlar, bölgeler" },
      { form: "قُطْر", pattern: "فُعْل", type: "isim", meaning: "kenar, bölge" },
    ],
    bab_chain: [],
    cross_refs: [{ lesson: "L35", verse: "55:33", form: "أَقْطَارِ", note: "göklerin sınırlarından" }],
    turkish_traces: ["kutur", "aktâr"],
  },
  "س-ل-ط": {
    core: "güç, hâkimiyet, yetki",
    mufradat_note: "Güç, hüccet. Sultân: delil, yetki, iktidar. Tesallut: baskı kurma. Allah'ın izni olmadan hiçbir güç yeterli değildir.",
    quran_count: 37,
    derivatives: [
      { form: "سُلْطَان", pattern: "فُعْلَان", type: "isim", meaning: "güç, delil, yetki" },
    ],
    bab_chain: [{ bab: "II", form: "سَلَّطَ/يُسَلِّطُ", meaning: "musallat kıldı", semantic: "ta'diye", lessons: [] }],
    cross_refs: [{ lesson: "L35", verse: "55:33", form: "بِسُلْطَانٍ", note: "ancak bir sultân (güç) ile" }],
    turkish_traces: ["sultan", "sultân", "tesallut"],
  },
  "ش-و-ظ": {
    core: "dumansız alev, kızıl ateş",
    mufradat_note: "Dumansız kızıl alev. Şuvâz: saf ateş, dumanı olmayan kızıl alev. Cehennem azâbı tasvirinde kullanılır.",
    quran_count: 1,
    derivatives: [{ form: "شُوَاظ", pattern: "فُعَال", type: "isim", meaning: "dumansız alev" }],
    bab_chain: [],
    cross_refs: [{ lesson: "L35", verse: "55:35", form: "شُوَاظٌ", note: "üzerinize ateş gönderilir" }],
    turkish_traces: [],
  },
  "ن-ح-س": {
    core: "bakır, duman, uğursuzluk",
    mufradat_note: "Bakır. Nuhâs: erimiş bakır veya duman. Nahs: uğursuzluk. Kur'ân'da cehennem azâbı tasvirinde.",
    quran_count: 2,
    derivatives: [{ form: "نُحَاس", pattern: "فُعَال", type: "isim", meaning: "erimiş bakır/duman" }],
    bab_chain: [],
    cross_refs: [{ lesson: "L35", verse: "55:35", form: "وَنُحَاسٌ", note: "ve erimiş bakır" }],
    turkish_traces: ["nuhâs"],
  },
  "و-ر-د": {
    core: "gelmek, gül, kızıl",
    mufradat_note: "Suya varmak, gelmek. Verd/verde: gül, kızıl renk. Vürûd: varış. Kur'ân'da gök 'gül gibi kızıl olduğunda' — kıyâmet tasviri.",
    quran_count: 6,
    derivatives: [
      { form: "وَرْدَة", pattern: "فَعْلَة", type: "isim", meaning: "gül" },
      { form: "وُرُود", pattern: "فُعُول", type: "masdar", meaning: "varış" },
    ],
    bab_chain: [{ bab: "I", form: "وَرَدَ/يَرِدُ", meaning: "vardı", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L35", verse: "55:37", form: "وَرْدَةً", note: "gül gibi kızıl olduğunda" }],
    turkish_traces: ["verd", "gül"],
  },
  "د-ه-ن": {
    core: "yağ, boya, yumuşaklık",
    mufradat_note: "Yağ, boya. Dihân: erimiş yağ. Müdâhene: yağ çekme (münafıklık). Kur'ân'da göğün 'erimiş yağ gibi' oluşu — kıyâmet tasviri.",
    quran_count: 3,
    derivatives: [{ form: "دِهَان", pattern: "فِعَال", type: "isim", meaning: "erimiş yağ, boya" }],
    bab_chain: [],
    cross_refs: [{ lesson: "L35", verse: "55:37", form: "كَالدِّهَانِ", note: "erimiş yağ gibi" }],
    turkish_traces: ["dühn", "müdâhene"],
  },
  "س-و-م": {
    core: "alâmet, işaret, otlatmak",
    mufradat_note: "Alâmet koymak, işaretlemek. Sîmâ: yüz alâmeti, belirti. Savme: oruç (nefsi otlatmama). Müsevvim: at besleyen.",
    quran_count: 19,
    derivatives: [
      { form: "سِيمَا", pattern: "—", type: "isim", meaning: "alâmet, yüz ifadesi" },
    ],
    bab_chain: [],
    cross_refs: [{ lesson: "L35", verse: "55:41", form: "بِسِيمَاهُمْ", note: "alâmetlerinden tanınırlar" }],
    turkish_traces: ["sîmâ"],
  },
  "أ-ن-ي": {
    core: "olgunlaşmak, son derece sıcak",
    mufradat_note: "Sıcaklığın son noktasına ulaşma. Ân: son derece kaynar. Hamîm-i ân: kaynar su — cehennem azâbı.",
    quran_count: 2,
    derivatives: [{ form: "آنٍ", pattern: "فَاعِل", type: "ism-i fâil", meaning: "son derece sıcak" }],
    bab_chain: [],
    cross_refs: [{ lesson: "L35", verse: "55:44", form: "آنٍ", note: "kaynama noktasındaki su" }],
    turkish_traces: [],
  },
  "ف-و-ت": {
    core: "kaçırmak, geçmek, fark",
    mufradat_note: "Kaçırmak, elden çıkmak. Tefâvüt: farklılık, uyumsuzluk. Fevt: kaçma. Yedi gökte hiçbir tefâvüt (uyumsuzluk) yoktur.",
    quran_count: 3,
    derivatives: [
      { form: "تَفَاوُت", pattern: "تَفَاعُل", type: "masdar (VI)", meaning: "farklılık, uyumsuzluk" },
    ],
    bab_chain: [],
    cross_refs: [{ lesson: "L30", verse: "67:3", form: "تَفَاوُتٍ", note: "bir uyumsuzluk göremezsin" }],
    turkish_traces: ["tefâvüt", "fevt"],
  },
  "ك-ر-ر": {
    core: "tekrar etmek, geri dönmek",
    mufradat_note: "Geri döndürmek, tekrar etmek. Kerre: kez, defa. Kerreteyn: iki kez. Tekrâr: yineleme.",
    quran_count: 3,
    derivatives: [
      { form: "كَرَّة", pattern: "فَعْلَة", type: "isim", meaning: "kez, defa" },
      { form: "كَرَّتَيْن", pattern: "—", type: "tesniye", meaning: "iki kez" },
    ],
    bab_chain: [{ bab: "I", form: "كَرَّ/يَكُرُّ", meaning: "döndü, tekrarladı", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L30", verse: "67:4", form: "كَرَّتَيْنِ", note: "iki kez bak — kusur bulamazsın" }],
    turkish_traces: ["tekrâr", "kerre"],
  },
  "خ-س-أ": {
    core: "kovulmak, eli boş dönmek",
    mufradat_note: "Kovulmak, zelil olarak geri dönmek. Hâsi': kovulmuş, eli boş. Kur'ân'da bakışın yorgun ve kovulmuş gibi geri dönmesi — gökte kusur arayıp bulamama.",
    quran_count: 4,
    derivatives: [{ form: "خَاسِئ", pattern: "فَاعِل", type: "ism-i fâil", meaning: "kovulmuş, eli boş" }],
    bab_chain: [{ bab: "I", form: "خَسَأَ/يَخْسَأُ", meaning: "kovuldu", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L30", verse: "67:4", form: "خَاسِئًا", note: "bakış eli boş döner" }],
    turkish_traces: [],
  },
  "ح-س-ر": {
    core: "yorulmak, hasret, keder",
    mufradat_note: "Yorulmak, tükenmek. Hasîr: bitkin, yorgun. Hasret: özlem, keder. Kur'ân'da bakışın 'hasîr' (yorgun) dönmesi — göğün kusursuzluğu.",
    quran_count: 7,
    derivatives: [
      { form: "حَسِير", pattern: "فَعِيل", type: "sıfat", meaning: "yorgun, bitkin" },
      { form: "حَسْرَة", pattern: "فَعْلَة", type: "isim", meaning: "hasret, pişmanlık" },
    ],
    bab_chain: [],
    cross_refs: [{ lesson: "L30", verse: "67:4", form: "حَسِيرًا", note: "bakış yorgun döner" }],
    turkish_traces: ["hasret", "hasîr"],
  },
  "ب-ئ-س": {
    core: "kötü olmak, perişan olmak",
    mufradat_note: "Kötülük, şiddet. Be's: şiddet, savaş gücü. Bi'se: ne kötü! Kur'ân'da bedduâ/kınama kalıbı.",
    quran_count: 72,
    derivatives: [
      { form: "بَأْس", pattern: "فَعْل", type: "masdar", meaning: "şiddet, güç" },
      { form: "بِئْس", pattern: "—", type: "fiil", meaning: "ne kötü!" },
    ],
    bab_chain: [],
    cross_refs: [{ lesson: "L30", verse: "67:6", form: "وَبِئْسَ", note: "ne kötü varış yeri!" }],
    turkish_traces: ["be's", "bîçâre"],
  },
  "ش-ه-ق": {
    core: "inlemek, nefes çekmek",
    mufradat_note: "Nefes çekme, inleme. Şehîk: korkunç inleme sesi. Cehennemin kaynama sesi şehîk ile ifade edilir.",
    quran_count: 3,
    derivatives: [{ form: "شَهِيق", pattern: "فَعِيل", type: "isim", meaning: "korkunç inleme" }],
    bab_chain: [],
    cross_refs: [{ lesson: "L30", verse: "67:7", form: "شَهِيقٌ", note: "cehennemin inlemesi" }],
    turkish_traces: ["şehîk"],
  },
  "ف-و-ر": {
    core: "kaynamak, fokurdamak",
    mufradat_note: "Kaynama, fokurdama. Fevr: anında, hemen. Kur'ân'da cehennemin kaynayarak coşması.",
    quran_count: 4,
    derivatives: [{ form: "فَوْر", pattern: "فَعْل", type: "masdar", meaning: "kaynama, hemen" }],
    bab_chain: [{ bab: "I", form: "فَارَ/يَفُورُ", meaning: "fokurdadı", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L30", verse: "67:7", form: "تَفُورُ", note: "cehennem fokurdar" }],
    turkish_traces: ["fevren", "fevrî"],
  },
  "ك-و-د": {
    core: "yaklaşmak, neredeyse",
    mufradat_note: "Neredeyse, az kalsın. Kâde/yekâdu: yaklaştı. Kur'ân'da azâbın şiddetini vurgulamak için kullanılır.",
    quran_count: 38,
    derivatives: [],
    bab_chain: [{ bab: "I", form: "كَادَ/يَكَادُ", meaning: "neredeyse, az kalsın", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L30", verse: "67:8", form: "تَكَادُ", note: "neredeyse öfkesinden parçalanacak" }],
    turkish_traces: [],
  },
  "م-ي-ز": {
    core: "ayırmak, ayırt etmek",
    mufradat_note: "Birbirinden ayırmak. Temeyyüz: ayrışma, parçalanma. Temyîz: ayırt etme. Kur'ân'da cehennemin öfkeden 'temeyyüz' etmesi — parçalanırcasına kaynaması.",
    quran_count: 7,
    derivatives: [
      { form: "تَمْيِيز", pattern: "تَفْعِيل", type: "masdar (II)", meaning: "ayırt etme" },
      { form: "تَمَيُّز", pattern: "تَفَعُّل", type: "masdar (V)", meaning: "parçalanma" },
    ],
    bab_chain: [
      { bab: "II", form: "مَيَّزَ/يُمَيِّزُ", meaning: "ayırt etti", semantic: "ta'diye", lessons: [] },
      { bab: "V", form: "تَمَيَّزَ/يَتَمَيَّزُ", meaning: "parçalandı", semantic: "mutâvaat", lessons: [] },
    ],
    cross_refs: [{ lesson: "L30", verse: "67:8", form: "تَمَيَّزُ", note: "parçalanırcasına kaynıyor" }],
    turkish_traces: ["temyîz", "temeyyüz", "mümeyyiz"],
  },
  "غ-ي-ظ": {
    core: "öfke, hiddet",
    mufradat_note: "Öfke, kızgınlık. Gayz: içten gelen şiddetli öfke. Kâzım: öfkesini yutan. Cehennemin 'öfkeden parçalanması' — teşhis sanatı.",
    quran_count: 7,
    derivatives: [
      { form: "غَيْظ", pattern: "فَعْل", type: "masdar", meaning: "öfke, hiddet" },
      { form: "كَاظِم", pattern: "فَاعِل", type: "ism-i fâil", meaning: "öfkesini yutan" },
    ],
    bab_chain: [],
    cross_refs: [{ lesson: "L30", verse: "67:8", form: "الْغَيْظِ", note: "öfkeden — cehennemin hidddeti" }],
    turkish_traces: ["gayz"],
  },
  "خ-ز-ن": {
    core: "saklamak, depolamak, bekçilik",
    mufradat_note: "Saklamak, hazineye koymak. Hazîne: hazine. Hâzin: bekçi. Hazene: cehennem/cennet bekçileri. Kur'ân'da cennetin ve cehennemin bekçileri geçer.",
    quran_count: 23,
    derivatives: [
      { form: "خَزَنَة", pattern: "فَعَلَة", type: "cem", meaning: "bekçiler" },
      { form: "خَزَائِن", pattern: "—", type: "cem", meaning: "hazineler" },
    ],
    bab_chain: [{ bab: "I", form: "خَزَنَ/يَخْزُنُ", meaning: "sakladı", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L30", verse: "67:8", form: "خَزَنَتُهَا", note: "cehennem bekçileri" }],
    turkish_traces: ["hazîne", "hâzin", "mahzen"],
  },
  "ع-ق-ل": {
    core: "akıl, bağlamak, anlamak",
    mufradat_note: "Bağlamak, anlamak. Akl: anlama yetisi — asıl anlamı bağlama, engellemedir (deveyi bağlama). Ma'kûl: akla uygun. Kur'ân'da 'efelem tekûnû ta'kilûn' — akletmez misiniz?",
    quran_count: 49,
    derivatives: [
      { form: "عَقْل", pattern: "فَعْل", type: "masdar", meaning: "akıl" },
      { form: "مَعْقُول", pattern: "مَفْعُول", type: "ism-i mef'ûl", meaning: "akla uygun" },
    ],
    bab_chain: [{ bab: "I", form: "عَقَلَ/يَعْقِلُ", meaning: "akletti, anladı", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L30", verse: "67:10", form: "نَعْقِلُ", note: "akletmiş olsaydık" }],
    turkish_traces: ["akıl", "ma'kûl", "ta'kîl"],
  },
  "س-ح-ق": {
    core: "uzaklık, kahrolma",
    mufradat_note: "Çok uzak olma. Suhk: uzaklık, helâk. 'Fe-suhkan' — kahrolsun! Kur'ân'da cehennem ehline bedduâ.",
    quran_count: 5,
    derivatives: [{ form: "سُحْق", pattern: "فُعْل", type: "masdar", meaning: "uzaklık, kahrolma" }],
    bab_chain: [],
    cross_refs: [{ lesson: "L30", verse: "67:11", form: "فَسُحْقًا", note: "kahrolsun cehennem ehli!" }],
    turkish_traces: [],
  },
  "س-ر-ر": {
    core: "gizlemek, sevinç, yatak",
    mufradat_note: "Gizlemek. Sırr: gizli şey. Serîr: taht, koltuk. Sürûr: sevinç. İsrâr: gizleme. Kur'ân'da sözünüzü gizleyin veya açıklayın — Allah hepsini bilir.",
    quran_count: 35,
    derivatives: [
      { form: "سِرّ", pattern: "فِعْل", type: "isim", meaning: "sır, gizli" },
      { form: "سُرُور", pattern: "فُعُول", type: "masdar", meaning: "sevinç" },
      { form: "إِسْرَار", pattern: "إِفْعَال", type: "masdar (IV)", meaning: "gizleme" },
    ],
    bab_chain: [{ bab: "IV", form: "أَسَرَّ/يُسِرُّ", meaning: "gizledi", semantic: "ta'diye", lessons: [] }],
    cross_refs: [{ lesson: "L30", verse: "67:13", form: "وَأَسِرُّوا", note: "gizleyin sözünüzü" }],
    turkish_traces: ["sır", "sürûr", "serîr"],
  },
  "ج-ه-ر": {
    core: "açığa vurmak, yüksek sesle söylemek",
    mufradat_note: "Açıkça söylemek, yüksek sesle. Cehr: açıklık. Cehrî: sesli (okuma). İsrâr'ın (gizleme) zıddı.",
    quran_count: 16,
    derivatives: [
      { form: "جَهْر", pattern: "فَعْل", type: "masdar", meaning: "açıklama, yüksek ses" },
      { form: "جَهْرِيّ", pattern: "فَعْلِيّ", type: "nisbet", meaning: "sesli, açık" },
    ],
    bab_chain: [{ bab: "I", form: "جَهَرَ/يَجْهَرُ", meaning: "açığa vurdu", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L30", verse: "67:13", form: "اجْهَرُوا", note: "veya açığa vurun" }],
    turkish_traces: ["cehr", "cehrî"],
  },
  "ذ-و-ت": {
    core: "sâhip, öz, zât",
    mufradat_note: "Sahip olma, öz. Zât: öz, kendilik. Kur'ân'da 'zâtü's-sudûr' — göğüslerin özü, kalpteki gizli düşünceler.",
    quran_count: 26,
    derivatives: [{ form: "ذَات", pattern: "—", type: "isim", meaning: "sahip, öz" }],
    bab_chain: [],
    cross_refs: [{ lesson: "L30", verse: "67:13", form: "بِذَاتِ", note: "göğüslerin özünü bilir" }],
    turkish_traces: ["zât", "zâtî"],
  },
  "ن-ك-ب": {
    core: "yönelmek, omuz, yol",
    mufradat_note: "Omuz, yan. Menâkib: omuzlar, yollar, geçitler. Kur'ân'da 'yerin omuzlarında yürüyün' — yollarında, vadilerinde.",
    quran_count: 2,
    derivatives: [
      { form: "مَنَاكِب", pattern: "مَفَاعِل", type: "cem", meaning: "omuzlar, yollar" },
    ],
    bab_chain: [],
    cross_refs: [{ lesson: "L30", verse: "67:15", form: "مَنَاكِبِهَا", note: "yerin yollarında yürüyün" }],
    turkish_traces: ["menkıbe"],
  },
  "خ-س-ف": {
    core: "batırmak, çöktürmek",
    mufradat_note: "Yeri batırma, çökertme. Hasf: yerin çökmesi — Kārûn'un batırılması gibi. Allah'ın azap biçimlerinden biri.",
    quran_count: 6,
    derivatives: [
      { form: "خَسْف", pattern: "فَعْل", type: "masdar", meaning: "batırma, çökertme" },
    ],
    bab_chain: [{ bab: "I", form: "خَسَفَ/يَخْسِفُ", meaning: "batırdı", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L30", verse: "67:16", form: "يَخْسِفَ", note: "yeri batırmayacağından emin misiniz?" }],
    turkish_traces: ["husûf"],
  },
  "م-و-ر": {
    core: "çalkalanmak, sallanmak",
    mufradat_note: "İleri geri sallanmak, çalkalanmak. Mevr: hareket, sarsıntı. Kur'ân'da yerin sarsılması — kıyâmet tasviri.",
    quran_count: 2,
    derivatives: [{ form: "مَوْر", pattern: "فَعْل", type: "masdar", meaning: "çalkalanma" }],
    bab_chain: [{ bab: "I", form: "مَارَ/يَمُورُ", meaning: "çalkalandı", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L30", verse: "67:16", form: "تَمُورُ", note: "yer çalkalanır" }],
    turkish_traces: [],
  },
  "ح-ص-ب": {
    core: "taş fırlatmak, çakıl",
    mufradat_note: "Çakıl taşı fırlatmak. Hâsib: taş fırlatan rüzgâr. Allah'ın azâb araçlarından biri.",
    quran_count: 4,
    derivatives: [{ form: "حَاصِب", pattern: "فَاعِل", type: "ism-i fâil", meaning: "taş fırlatan (rüzgâr)" }],
    bab_chain: [],
    cross_refs: [{ lesson: "L30", verse: "67:17", form: "حَاصِبًا", note: "taş fırlatan rüzgâr gönderir" }],
    turkish_traces: [],
  },
  "ق-ب-ل": {
    core: "yönelmek, kabul etmek, önce",
    mufradat_note: "Yönelmek, karşılamak. Kabl: önce. İstikbâl: karşılama, gelecek. Kıble: yön. Kabûl: onay.",
    quran_count: 283,
    derivatives: [
      { form: "قَبْل", pattern: "فَعْل", type: "zarf", meaning: "önce" },
      { form: "قِبْلَة", pattern: "فِعْلَة", type: "isim", meaning: "kıble, yön" },
      { form: "قَبُول", pattern: "فَعُول", type: "masdar", meaning: "kabul" },
      { form: "اِسْتِقْبَال", pattern: "اِسْتِفْعَال", type: "masdar (X)", meaning: "karşılama" },
    ],
    bab_chain: [{ bab: "I", form: "قَبِلَ/يَقْبَلُ", meaning: "kabul etti", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L30", verse: "67:18", form: "قَبْلِهِمْ", note: "onlardan öncekiler" }],
    turkish_traces: ["kıble", "kabul", "istikbâl", "mukâbele"],
  },
  "ن-ك-ر": {
    core: "inkâr etmek, tanımamak, çirkin",
    mufradat_note: "Tanımamak, reddetmek. İnkâr: red, tanımama. Münker: kötü, çirkin. Nekîr: azap, şiddetli tepki. Ma'rûf'un zıddı.",
    quran_count: 37,
    derivatives: [
      { form: "نَكِير", pattern: "فَعِيل", type: "isim", meaning: "azap, şiddet" },
      { form: "مُنْكَر", pattern: "مُفْعَل", type: "ism-i mef'ûl", meaning: "kötü, çirkin" },
      { form: "إِنْكَار", pattern: "إِفْعَال", type: "masdar (IV)", meaning: "inkâr" },
    ],
    bab_chain: [{ bab: "IV", form: "أَنْكَرَ/يُنْكِرُ", meaning: "inkâr etti", semantic: "ta'diye", lessons: [] }],
    cross_refs: [{ lesson: "L30", verse: "67:18", form: "نَكِيرِ", note: "inkârım/azâbım nasıldı?" }],
    turkish_traces: ["inkâr", "münker", "nekîr"],
  },
  "ج-ن-د": {
    core: "asker, ordu",
    mufradat_note: "Asker, ordu. Cünd: askerler. Cünûd: ordular. Kur'ân'da 'Rahmân'dan başka sizi koruyacak ordunuz kim?'",
    quran_count: 29,
    derivatives: [
      { form: "جُنْد", pattern: "فُعْل", type: "isim", meaning: "asker, ordu" },
      { form: "جُنُود", pattern: "فُعُول", type: "cem", meaning: "ordular" },
    ],
    bab_chain: [],
    cross_refs: [{ lesson: "L30", verse: "67:20", form: "جُندٌ", note: "size yardım edecek ordu kim?" }],
    turkish_traces: ["cünd", "cündî"],
  },
  "ل-ج-ج": {
    core: "inat etmek, ısrar etmek",
    mufradat_note: "İnatla ısrar etmek, azgınlık. Lecc: dikbaşlılık. Lüccî: derin deniz. Kur'ân'da kâfirlerin azgınlıkta diretmesi.",
    quran_count: 3,
    derivatives: [{ form: "لَجّ", pattern: "فَعْل", type: "masdar", meaning: "inat, ısrar" }],
    bab_chain: [{ bab: "I", form: "لَجَّ/يَلَجُّ", meaning: "ısrar etti", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L30", verse: "67:21", form: "لَّجُّوا", note: "azgınlıkta ısrar ettiler" }],
    turkish_traces: ["lecâc"],
  },
  "ع-ت-و": {
    core: "azgınlık, taşkınlık",
    mufradat_note: "Haddi aşmak, azgınlık etmek. Utuvv: taşkınlık, kibir. Âtî: azgın.",
    quran_count: 10,
    derivatives: [{ form: "عُتُوّ", pattern: "فُعُول", type: "masdar", meaning: "azgınlık" }],
    bab_chain: [{ bab: "I", form: "عَتَا/يَعْتُو", meaning: "azgınlık etti", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L30", verse: "67:21", form: "عُتُوًّا", note: "azgınlık ve nefrette" }],
    turkish_traces: ["utuvv"],
  },
  "ن-ف-ر": {
    core: "kaçmak, nefret, sefer",
    mufradat_note: "Ürkme, kaçma. Nüfûr: kaçınma, nefret. Nefîr: savaşa çıkma, feryat. İstinfâr: kaçma, ürkme.",
    quran_count: 19,
    derivatives: [
      { form: "نُفُور", pattern: "فُعُول", type: "masdar", meaning: "kaçınma, nefret" },
      { form: "نَفِير", pattern: "فَعِيل", type: "isim", meaning: "feryat, topluluk" },
    ],
    bab_chain: [{ bab: "I", form: "نَفَرَ/يَنْفِرُ", meaning: "kaçtı, ürktü", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L30", verse: "67:21", form: "وَنُفُورٍ", note: "ve nefrette" }],
    turkish_traces: ["nefret", "nefîr", "nefer"],
  },
  "ك-ب-ب": {
    core: "yüzüstü düşmek",
    mufradat_note: "Yüzüstü düşürmek. Mukibb: yüzüstü eğilen, tökezleyen. Kur'ân'da sapkınlık metaforu: yüzüstü yürüyen mi, dosdoğru yürüyen mi?",
    quran_count: 3,
    derivatives: [{ form: "مُكِبّ", pattern: "مُفْعِل", type: "ism-i fâil (IV)", meaning: "yüzüstü düşen" }],
    bab_chain: [{ bab: "IV", form: "أَكَبَّ/يُكِبُّ", meaning: "yüzüstü düştü", semantic: "sıfat", lessons: [] }],
    cross_refs: [{ lesson: "L30", verse: "67:22", form: "مُكِبًّا", note: "yüzüstü kapanarak mı yürüyen?" }],
    turkish_traces: [],
  },
  "ص-ر-ط": {
    core: "yol, doğru yol",
    mufradat_note: "Düz ve geniş yol. Sırât: yol — en çok 'sırât-ı müstakîm' tamlamasıyla kullanılır. Fâtiha'da her namazda istenen yol.",
    quran_count: 45,
    derivatives: [{ form: "صِرَاط", pattern: "فِعَال", type: "isim", meaning: "yol" }],
    bab_chain: [],
    cross_refs: [{ lesson: "L30", verse: "67:22", form: "صِرَاطٍ", note: "dosdoğru yol üzere" }],
    turkish_traces: ["sırât"],
  },
  "ق-ل-ل": {
    core: "az olmak, azalmak",
    mufradat_note: "Azlık. Kalîl: az. İklâl: azaltma. İstiklâl: bağımsızlık (başkasına az muhtaç olma). Kur'ân'da şükredenlerin azlığı vurgulanır.",
    quran_count: 65,
    derivatives: [
      { form: "قَلِيل", pattern: "فَعِيل", type: "sıfat", meaning: "az" },
      { form: "أَقَلّ", pattern: "أَفْعَل", type: "ism-i tafdîl", meaning: "daha az" },
    ],
    bab_chain: [{ bab: "I", form: "قَلَّ/يَقِلُّ", meaning: "azaldı", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L30", verse: "67:23", form: "قَلِيلًا", note: "pek az şükrediyorsunuz" }],
    turkish_traces: ["kalîl", "istiklâl", "taklîl"],
  },
  "ذ-ر-أ": {
    core: "yaratmak, çoğaltmak, yaymak",
    mufradat_note: "Yaratıp yaymak, çoğaltmak. Zer': tohum saçar gibi yaymak. Allah'ın insanları yeryüzüne yayması.",
    quran_count: 4,
    derivatives: [{ form: "ذَرْء", pattern: "فَعْل", type: "masdar", meaning: "yaratma, yayma" }],
    bab_chain: [{ bab: "I", form: "ذَرَأَ/يَذْرَأُ", meaning: "yarattı, yaydı", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L30", verse: "67:24", form: "ذَرَأَكُمْ", note: "sizi yaratıp yaydı" }],
    turkish_traces: ["zürriyyet"],
  },
  "ز-ل-ف": {
    core: "yaklaşmak, yakınlık",
    mufradat_note: "Yaklaşma, yakınlık. Zülfâ: yakınlık. Müzdelife: yakınlaşma yeri (hac). Kur'ân'da azâbı yakından gördüklerinde.",
    quran_count: 10,
    derivatives: [
      { form: "زُلْفَة", pattern: "فُعْلَة", type: "isim", meaning: "yakınlık" },
    ],
    bab_chain: [],
    cross_refs: [{ lesson: "L30", verse: "67:27", form: "زُلْفَةً", note: "yakınlarında gördüklerinde" }],
    turkish_traces: ["zülfâ", "müzdelife"],
  },
  "س-و-أ": {
    core: "kötü olmak, çirkinleşmek",
    mufradat_note: "Kötülük, çirkinlik. Sû': kötülük. Seyyie: günahm kötü iş. Sâ'e: kötüleşti. İsâ'e: kötülük yapma.",
    quran_count: 167,
    derivatives: [
      { form: "سُوء", pattern: "فُعْل", type: "isim", meaning: "kötülük" },
      { form: "سَيِّئَة", pattern: "فَيِّعَة", type: "isim", meaning: "günah, kötü iş" },
    ],
    bab_chain: [{ bab: "I", form: "سَاءَ/يَسُوءُ", meaning: "kötü oldu", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L30", verse: "67:27", form: "سِيئَتْ", note: "yüzleri kötüleşti" }],
    turkish_traces: ["sû', seyyie, isâet"],
  },
  "ج-و-ر": {
    core: "komşuluk, sığınma, zulüm",
    mufradat_note: "Komşu olmak, sığınmak. Civâr: komşuluk. İcâre: sığındırma, kurtarma. Cevr: zulüm. Mücîr: sığındıran, koruyan.",
    quran_count: 17,
    derivatives: [
      { form: "جَار", pattern: "فَاعِل", type: "isim", meaning: "komşu" },
      { form: "إِجَارَة", pattern: "إِفَاعَلَة", type: "masdar", meaning: "sığındırma" },
    ],
    bab_chain: [{ bab: "IV", form: "أَجَارَ/يُجِيرُ", meaning: "sığındırdı", semantic: "ta'diye", lessons: [] }],
    cross_refs: [{ lesson: "L30", verse: "67:28", form: "يُجِيرُ", note: "kim sığındırır sizi?" }],
    turkish_traces: ["civâr", "mücîr"],
  },
  "ص-د-ي": {
    core: "yönelmek, ilgi göstermek",
    mufradat_note: "Birine yönelmek, ilgi göstermek. Tesaddî: yönelme, üzerine düşme. Kur'ân'da Hz. Peygamber'in zengin müşrike yönelmesi kınanır.",
    quran_count: 1,
    derivatives: [],
    bab_chain: [{ bab: "V", form: "تَصَدَّى/يَتَصَدَّى", meaning: "yöneldi, ilgi gösterdi", semantic: "tekellüf", lessons: [] }],
    cross_refs: [{ lesson: "L40", verse: "80:6", form: "تَصَدَّىٰ", note: "ona yöneliyorsun" }],
    turkish_traces: ["tesaddî"],
  },
  "س-ع-ي": {
    core: "koşmak, çabalamak, gayret etmek",
    mufradat_note: "Çabalamak, koşmak. Sa'y: gayret, emek. Sâ'î: çabalayan. Mes'â: çaba gösterilen yer. Kur'ân'da hem dünyevî hem uhrevî gayret.",
    quran_count: 30,
    derivatives: [
      { form: "سَعْي", pattern: "فَعْل", type: "masdar", meaning: "çaba, gayret" },
      { form: "سَاعٍ", pattern: "فَاعِل", type: "ism-i fâil", meaning: "koşan, çabalayan" },
    ],
    bab_chain: [{ bab: "I", form: "سَعَى/يَسْعَى", meaning: "çabaladı, koştu", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L40", verse: "80:8", form: "يَسْعَىٰ", note: "sana koşarak gelen" }],
    turkish_traces: ["sa'y", "mes'â"],
  },
  "ع-م-ي": {
    core: "kör olmak, körlük",
    mufradat_note: "Görmemek, kör olmak. A'mâ: kör. Amâ: körlük. Kur'ân'da hem fiziksel hem manevî körlük — kalp körlüğü daha ağırdır.",
    quran_count: 33,
    derivatives: [
      { form: "أَعْمَى", pattern: "أَفْعَل", type: "sıfat", meaning: "kör" },
      { form: "عَمَى", pattern: "فَعَل", type: "masdar", meaning: "körlük" },
    ],
    bab_chain: [{ bab: "I", form: "عَمِيَ/يَعْمَى", meaning: "kör oldu", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L40", verse: "80:2", form: "ٱلْأَعْمَىٰ", note: "kör olan (İbn Ümm Mektûm)" }],
    turkish_traces: ["a'mâ", "amâ"],
  },
  "ق-ض-ب": {
    core: "kesmek, yonca",
    mufradat_note: "Kesmek, biçmek. Kadab: yonca, biçilen yeşillik. Kur'ân'da nimet sayımında.",
    quran_count: 1,
    derivatives: [{ form: "قَضْب", pattern: "فَعْل", type: "isim", meaning: "yonca, yeşillik" }],
    bab_chain: [],
    cross_refs: [{ lesson: "L40", verse: "80:28", form: "وَقَضْبًا", note: "ve yonca" }],
    turkish_traces: [],
  },
  "ح-د-ق": {
    core: "bahçe, çevrelemek",
    mufradat_note: "Etrafını çeviren bahçe. Hadîka: çevrili bahçe. Hadâik: bahçeler. Cennet tasvirinde gür bahçeler.",
    quran_count: 3,
    derivatives: [{ form: "حَدَائِق", pattern: "—", type: "cem", meaning: "bahçeler" }],
    bab_chain: [],
    cross_refs: [{ lesson: "L40", verse: "80:30", form: "وَحَدَآئِقَ", note: "sık ağaçlı bahçeler" }],
    turkish_traces: ["hadîka"],
  },
  "غ-ل-ب": {
    core: "yenmek, galip gelmek, baskın olmak",
    mufradat_note: "Galip gelmek, üstün olmak. Gulb: kalın boyunlu, sık ağaçlı. Galebe: üstünlük. Ğâlib: galip.",
    quran_count: 31,
    derivatives: [
      { form: "غَلَبَة", pattern: "فَعَلَة", type: "masdar", meaning: "galip gelme" },
      { form: "غَالِب", pattern: "فَاعِل", type: "ism-i fâil", meaning: "galip" },
      { form: "غُلْب", pattern: "فُعْل", type: "sıfat", meaning: "gür, kalın" },
    ],
    bab_chain: [{ bab: "I", form: "غَلَبَ/يَغْلِبُ", meaning: "galip geldi", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L40", verse: "80:30", form: "غُلْبًا", note: "gür ağaçlı" }],
    turkish_traces: ["galebe", "gâlib", "mağlûb"],
  },
  "أ-ب-ب": {
    core: "ot, çayır, otlak",
    mufradat_note: "Ot, otlak. Ebb: hayvan yiyeceği olan ot. İnsanların ve hayvanların faydasına nimet olarak sayılır.",
    quran_count: 1,
    derivatives: [{ form: "أَبّ", pattern: "فَعْل", type: "isim", meaning: "ot, çayır" }],
    bab_chain: [],
    cross_refs: [{ lesson: "L40", verse: "80:31", form: "وَأَبًّا", note: "ve çayır/ot" }],
    turkish_traces: [],
  },
  "ص-خ-خ": {
    core: "kulak tırmalayan ses",
    mufradat_note: "Şiddetli, kulak sağır eden ses. es-Sâhha: kıyâmet gününün isimlerinden — sağır edici çığlık.",
    quran_count: 1,
    derivatives: [{ form: "صَاخَّة", pattern: "فَاعِلَة", type: "ism-i fâil", meaning: "sağır edici çığlık" }],
    bab_chain: [],
    cross_refs: [{ lesson: "L40", verse: "80:33", form: "ٱلصَّآخَّةُ", note: "o kulak tırmalayan çığlık geldiğinde" }],
    turkish_traces: [],
  },
  "غ-ب-ر": {
    core: "toz, tozlanmak",
    mufradat_note: "Toz, toprak. Gabere: toz. Kıyâmet günü kâfirlerin yüzlerini toz kaplar.",
    quran_count: 2,
    derivatives: [{ form: "غَبَرَة", pattern: "فَعَلَة", type: "isim", meaning: "toz" }],
    bab_chain: [],
    cross_refs: [{ lesson: "L40", verse: "80:40", form: "غَبَرَةٌ", note: "yüzlerinde toz" }],
    turkish_traces: ["gubâr"],
  },
  "ر-ه-ق": {
    core: "kaplamak, bürümek, baskı",
    mufradat_note: "Üzerine çökmek, kaplamak. Rehk: baskı, zorlama. İrhâk: baskı altına alma. Kıyâmette karanlığın yüzleri bürümesi.",
    quran_count: 8,
    derivatives: [{ form: "رَهَق", pattern: "فَعَل", type: "masdar", meaning: "kaplamak, baskı" }],
    bab_chain: [{ bab: "I", form: "رَهِقَ/يَرْهَقُ", meaning: "kapladı", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L40", verse: "80:41", form: "تَرْهَقُهَا", note: "onları karanlık kaplar" }],
    turkish_traces: ["irhâk"],
  },
  "ق-ت-ر": {
    core: "karanlık, zillet, kısma",
    mufradat_note: "Toz-duman, zillet, karanlık. Katere: yüzü kaplayan karanlık. Taktîr: kısma, daraltma.",
    quran_count: 4,
    derivatives: [{ form: "قَتَرَة", pattern: "فَعَلَة", type: "isim", meaning: "karanlık, zillet" }],
    bab_chain: [],
    cross_refs: [{ lesson: "L40", verse: "80:41", form: "قَتَرَةٌ", note: "karanlık kaplar" }],
    turkish_traces: [],
  },
  "س-ف-ع": {
    core: "tutup sürüklemek",
    mufradat_note: "Sert bir şekilde tutup sürüklemek. Nesfa'an: elbette tutup sürükleriz. Kur'ân'da Allah'ın tehdidi: günahkârı perçeminden yakalama.",
    quran_count: 1,
    derivatives: [],
    bab_chain: [{ bab: "I", form: "سَفَعَ/يَسْفَعُ", meaning: "tutup sürükledi", semantic: "temel eylem", lessons: [] }],
    cross_refs: [{ lesson: "L47", verse: "96:15", form: "لَنَسْفَعًۢا", note: "onu perçeminden tutarız" }],
    turkish_traces: [],
  },

  "ر-و-ح": {
    core: "ruh, rüzgâr, rahatlık",
    mufradat_note: "Rüzgâr, nefes, ruh. Rûh: can, ilâhî nefes. Rîh: rüzgâr. Rayhân: hoş kokulu bitki. Revh/râha: ferahlık, huzur. Kur'ân'da rûh, rîh, rayhân ve revh ayrı bağlamlarda kullanılır.",
    quran_count: 57,
    derivatives: [
      { form: "رُوح", pattern: "فُعْل", type: "isim", meaning: "ruh, can" },
      { form: "رِيح", pattern: "فِعْل", type: "isim", meaning: "rüzgâr" },
      { form: "رَيْحَان", pattern: "فَعْلَان", type: "isim", meaning: "hoş kokulu bitki" },
      { form: "رَاحَة", pattern: "فَاعِلَة", type: "isim", meaning: "rahatlık" },
    ],
    bab_chain: [],
    cross_refs: [{ lesson: "L35", verse: "55:12", form: "وَالرَّيْحَانُ", note: "ve hoş kokulu bitki" }],
    turkish_traces: ["ruh", "rüzgâr", "reyhan", "rahat"],
  },
  "ك-م-م": {
    core: "örtmek, tomurcuk, ağız bağı",
    mufradat_note: "Örtmek, kapamak. Ekmâm: tomurcuklar, kabuğuyla örtülü meyveler. Kımâm: tomurcuk kabuğu. Hurma ağacının tomurcuklanan meyveleri nimet olarak anılır.",
    quran_count: 1,
    derivatives: [
      { form: "أَكْمَام", pattern: "أَفْعَال", type: "cem", meaning: "tomurcuklar" },
      { form: "كِمَام", pattern: "فِعَال", type: "isim", meaning: "tomurcuk kabuğu" },
    ],
    bab_chain: [],
    cross_refs: [{ lesson: "L35", verse: "55:11", form: "ذَاتُ الْأَكْمَامِ", note: "tomurcuklu hurma" }],
    turkish_traces: [],
  },

  // ═══════════════════════════════════════════════════════════
  // Pipeline Kökleri — v0.32 toplu ekleme (276 kök)
  // ═══════════════════════════════════════════════════════════
  "ء-ر-ض": {
    core: "yerin",
    turkish_traces: ["Arz"],
    cross_refs: [],
    bab_chain: [],
  },
  "ء-ل-ه": {
    core: "Allah'a, Allah",
    turkish_traces: ["İlâh"],
    cross_refs: [],
    bab_chain: [],
  },
  "ء-م-ن": {
    core: "iman ettiler, müminlere, mümin erkekleri",
    turkish_traces: ["Aman", "Mü'min", "Emîn", "İman"],
    cross_refs: [],
    bab_chain: [],
  },
  "ء-و-ل": {
    core: "öncekilerin",
    turkish_traces: ["Evvel"],
    cross_refs: [],
    bab_chain: [],
  },
  "ء-ي-ي": {
    core: "bizim ayetlerimiz, ayetlerimizi",
    turkish_traces: ["Ayet"],
    cross_refs: [],
    bab_chain: [],
  },
  "أ-ب-د": {
    core: "sonsuza dek",
    turkish_traces: ["Ebet"],
    cross_refs: [],
    bab_chain: [],
  },
  "أ-ث-ر": {
    core: "tercih etti, tercih ediyorsunuz",
    turkish_traces: ["Eser"],
    cross_refs: [],
    bab_chain: [],
  },
  "أ-ذ-ن": {
    core: "izin verdi, kulak verdi",
    turkish_traces: ["İzin"],
    cross_refs: [],
    bab_chain: [],
  },
  "أ-ف-ق": {
    core: "apaçık ufukta",
    turkish_traces: ["Ufuk"],
    cross_refs: [],
    bab_chain: [],
  },
  "أ-ن-ث": {
    core: "Dişi",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "أ-ه-ل": {
    core: "onların aileleri, ailesine, ailesinin",
    turkish_traces: ["Ehil"],
    cross_refs: [],
    bab_chain: [],
  },
  "أ-و-ب": {
    core: "dönülecek yer, dönüş yeri, onların dönüşü",
    turkish_traces: ["Evâb", "İyâb", "Evbe"],
    cross_refs: [],
    bab_chain: [],
  },
  "أ-و-ل": {
    core: "ilk",
    turkish_traces: ["Evvel"],
    cross_refs: [],
    bab_chain: [],
  },
  "أ-و-ي": {
    core: "barınak, Barındırdı",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "أ-ي-ي": {
    core: "ayetlerimizle, âyet, hangi ile",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "إ-ل-ه": {
    core: "Allah",
    turkish_traces: ["İlah"],
    cross_refs: [],
    bab_chain: [],
  },
  "ا-ث-م": {
    core: "günahkar",
    turkish_traces: ["İsm"],
    cross_refs: [],
    bab_chain: [],
  },
  "ا-ذ-ن": {
    core: "izniyle",
    turkish_traces: ["İzin"],
    cross_refs: [],
    bab_chain: [],
  },
  "ا-ر-ض": {
    core: "yere",
    turkish_traces: ["Arz"],
    cross_refs: [],
    bab_chain: [],
  },
  "ا-ل-ف": {
    core: "bin, alışkanlık, onların alışkanlığı",
    turkish_traces: ["İlf"],
    cross_refs: [],
    bab_chain: [],
  },
  "ا-ل-ه": {
    core: "Allah'ın",
    turkish_traces: ["İlâh"],
    cross_refs: [],
    bab_chain: [],
  },
  "ا-م-ر": {
    core: "iş",
    turkish_traces: ["Emir"],
    cross_refs: [],
    bab_chain: [],
  },
  "ا-م-ن": {
    core: "onları güven içinde kıldı",
    turkish_traces: ["Emn"],
    cross_refs: [],
    bab_chain: [],
  },
  "ب-ث-ث": {
    core: "saçılmış",
    turkish_traces: ["Bes"],
    cross_refs: [],
    bab_chain: [],
  },
  "ب-خ-ل": {
    core: "Cimrilik etmek",
    turkish_traces: ["Buhl"],
    cross_refs: [],
    bab_chain: [],
  },
  "ب-د-ء": {
    core: "başlatır",
    turkish_traces: ["Bed'"],
    cross_refs: [],
    bab_chain: [],
  },
  "ب-ر-أ": {
    core: "yaratıklar",
    turkish_traces: ["Berâ"],
    cross_refs: [],
    bab_chain: [],
  },
  "ب-ر-د": {
    core: "serinlik",
    turkish_traces: ["Bard"],
    cross_refs: [],
    bab_chain: [],
  },
  "ب-ر-ز": {
    core: "ortaya çıkarıldı",
    turkish_traces: ["Bâriz"],
    cross_refs: [],
    bab_chain: [],
  },
  "ب-ط-ش": {
    core: "yakalama",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ب-ع-ث": {
    core: "gönderilmiş olanlar, kalktı",
    turkish_traces: ["Ba's"],
    cross_refs: [],
    bab_chain: [],
  },
  "ب-ع-د": {
    core: "sonra",
    turkish_traces: ["Baad"],
    cross_refs: [],
    bab_chain: [],
  },
  "ب-ق-و": {
    core: "daha kalıcı",
    turkish_traces: ["Bâkî"],
    cross_refs: [],
    bab_chain: [],
  },
  "ب-ل-د": {
    core: "ülkeler, şehir",
    turkish_traces: ["Belde"],
    cross_refs: [],
    bab_chain: [],
  },
  "ب-ل-ل": {
    core: "develer",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ب-ن-ي": {
    core: "inşa ettik, onu bina etti, onu inşa etti",
    turkish_traces: ["Bina", "Binâ"],
    cross_refs: [],
    bab_chain: [],
  },
  "ب-و-ب": {
    core: "kapılar",
    turkish_traces: ["Bâb"],
    cross_refs: [],
    bab_chain: [],
  },
  "ب-ي-ت": {
    core: "ev",
    turkish_traces: ["Beyt", "Beytullah"],
    cross_refs: [],
    bab_chain: [],
  },
  "ت-ب-ع": {
    core: "onu takip eder",
    turkish_traces: ["Tâbi'"],
    cross_refs: [],
    bab_chain: [],
  },
  "ت-ح-ت": {
    core: "altından",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ت-ر-ب": {
    core: "yaşıt, toprak, göğüs kemikleri",
    turkish_traces: ["Türab", "Türâb"],
    cross_refs: [],
    bab_chain: [],
  },
  "ت-ل-و": {
    core: "okunur, onu takip ettiğinde, okumak",
    turkish_traces: ["Tilâvet"],
    cross_refs: [],
    bab_chain: [],
  },
  "ث-ب-ر": {
    core: "yıkım",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ث-ج-ج": {
    core: "bol bol akan",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ث-ق-ب": {
    core: "delen",
    turkish_traces: ["Sakıb"],
    cross_refs: [],
    bab_chain: [],
  },
  "ث-و-ب": {
    core: "karşılık verildi",
    turkish_traces: ["Sevâb"],
    cross_refs: [],
    bab_chain: [],
  },
  "ث-و-ر": {
    core: "kaldırdılar",
    turkish_traces: ["Eser"],
    cross_refs: [],
    bab_chain: [],
  },
  "ج-ب-ل": {
    core: "dağları, dağlar",
    turkish_traces: ["Cebel", "Cebell", "Cebbel"],
    cross_refs: [],
    bab_chain: [],
  },
  "ج-ل-و": {
    core: "onu açıp ortaya çıkardığında, Açılmak",
    turkish_traces: ["Celî", "Celi"],
    cross_refs: [],
    bab_chain: [],
  },
  "ج-م-ع": {
    core: "topluluk, topladı",
    turkish_traces: ["Cem'", "Cem"],
    cross_refs: [],
    bab_chain: [],
  },
  "ج-م-م": {
    core: "çok fazla",
    turkish_traces: ["Cem'"],
    cross_refs: [],
    bab_chain: [],
  },
  "ج-ن-ب": {
    core: "ondan kaçınacak, uzaklaştırılacak",
    turkish_traces: ["Cenâb", "Cenb"],
    cross_refs: [],
    bab_chain: [],
  },
  "ج-ه-ن-م": {
    core: "cehennemle",
    turkish_traces: ["Cehennem"],
    cross_refs: [],
    bab_chain: [],
  },
  "ج-و-ب": {
    core: "kesmek",
    turkish_traces: ["Cevâb"],
    cross_refs: [],
    bab_chain: [],
  },
  "ج-ي-ء": {
    core: "onlara gelmek",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ج-ي-د": {
    core: "boynunda",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ح-ب-ل": {
    core: "ip",
    turkish_traces: ["Habl"],
    cross_refs: [],
    bab_chain: [],
  },
  "ح-ج-ب": {
    core: "elbette engellenenler",
    turkish_traces: ["Hicab"],
    cross_refs: [],
    bab_chain: [],
  },
  "ح-ج-ر": {
    core: "akıl, taşlarla",
    turkish_traces: ["Hicr", "Hacer"],
    cross_refs: [],
    bab_chain: [],
  },
  "ح-ر-ق": {
    core: "yangının",
    turkish_traces: ["Harîk"],
    cross_refs: [],
    bab_chain: [],
  },
  "ح-ص-ل": {
    core: "toplakdı",
    turkish_traces: ["Hâsıl"],
    cross_refs: [],
    bab_chain: [],
  },
  "ح-ص-ي": {
    core: "saydık",
    turkish_traces: ["İhsâ"],
    cross_refs: [],
    bab_chain: [],
  },
  "ح-ض-ر": {
    core: "hazırlamak",
    turkish_traces: ["Hazır"],
    cross_refs: [],
    bab_chain: [],
  },
  "ح-ض-ض": {
    core: "teşvik etmiyorsunuz, teşvik eder",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ح-ط-ب": {
    core: "odun",
    turkish_traces: ["Hatip"],
    cross_refs: [],
    bab_chain: [],
  },
  "ح-ف-ر": {
    core: "eski halde",
    turkish_traces: ["Hafr"],
    cross_refs: [],
    bab_chain: [],
  },
  "ح-ق-ب": {
    core: "çağlar",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ح-ق-ق": {
    core: "hak, layık görüldü, hak ile",
    turkish_traces: ["Hak"],
    cross_refs: [],
    bab_chain: [],
  },
  "ح-ل-ل": {
    core: "oturan",
    turkish_traces: ["Helâl"],
    cross_refs: [],
    bab_chain: [],
  },
  "ح-م-ي": {
    core: "kızgın",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ح-ن-ف": {
    core: "doğruya yönelenler",
    turkish_traces: ["Hanif"],
    cross_refs: [],
    bab_chain: [],
  },
  "ح-و-ط": {
    core: "kuşatan",
    turkish_traces: ["İhâta"],
    cross_refs: [],
    bab_chain: [],
  },
  "ح-و-ي": {
    core: "karamsı",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ح-ي-و": {
    core: "hayatı",
    turkish_traces: ["Hayat"],
    cross_refs: [],
    bab_chain: [],
  },
  "خ-ت-م": {
    core: "mühürlenmiş, onun sonu",
    turkish_traces: ["Hatim"],
    cross_refs: [],
    bab_chain: [],
  },
  "خ-د-د": {
    core: "hendeğin",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "خ-ش-ع": {
    core: "alçakgönüllü, boyun eğmiş",
    turkish_traces: ["Huşû'", "Huşû"],
    cross_refs: [],
    bab_chain: [],
  },
  "خ-ط-ب": {
    core: "konuşma",
    turkish_traces: ["Hitap"],
    cross_refs: [],
    bab_chain: [],
  },
  "خ-ف-ف": {
    core: "hafif olmak",
    turkish_traces: ["Hafif"],
    cross_refs: [],
    bab_chain: [],
  },
  "خ-ف-ي": {
    core: "gizli olanı",
    turkish_traces: ["Hafî"],
    cross_refs: [],
    bab_chain: [],
  },
  "خ-ل-و": {
    core: "boşaldı",
    turkish_traces: ["Halvet"],
    cross_refs: [],
    bab_chain: [],
  },
  "خ-ي-ب": {
    core: "hüsrana uğradı",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "د-ب-ر": {
    core: "işleri düzenleyenler, arkasını döndü",
    turkish_traces: ["Tedbir", "Müdebbir"],
    cross_refs: [],
    bab_chain: [],
  },
  "د-ر-ك": {
    core: "seni haberdar etti, sana bildirdi",
    turkish_traces: ["Dirâyet", "İdrak"],
    cross_refs: [],
    bab_chain: [],
  },
  "د-س-س": {
    core: "onu gömüp sakladı",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "د-ف-ق": {
    core: "akan",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "د-ك-ك": {
    core: "ezildi, ezme (şekilde), ezme (şiddetli)",
    turkish_traces: ["Dekk"],
    cross_refs: [],
    bab_chain: [],
  },
  "د-م-د": {
    core: "sonra helak etti",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "د-ه-ق": {
    core: "dolu",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ذ-ر-ر": {
    core: "zerre",
    turkish_traces: ["Zerre"],
    cross_refs: [],
    bab_chain: [],
  },
  "ذ-ه-ب": {
    core: "git, gidiyorsunuz",
    turkish_traces: ["Zehâb"],
    cross_refs: [],
    bab_chain: [],
  },
  "ذ-و-ق": {
    core: "tatarlar, tadın",
    turkish_traces: ["Zevk"],
    cross_refs: [],
    bab_chain: [],
  },
  "ر-ء-ك": {
    core: "süslü tahtlar",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ر-ج-و": {
    core: "umarlar",
    turkish_traces: ["Recâ"],
    cross_refs: [],
    bab_chain: [],
  },
  "ر-ح-ق": {
    core: "saf şarap",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ر-د-د": {
    core: "geri çevrilecekler, onu geri çevirdik",
    turkish_traces: ["Red"],
    cross_refs: [],
    bab_chain: [],
  },
  "ر-د-ي": {
    core: "Yuvarlanmak",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ر-س-و": {
    core: "onları yerleştirdi, onun demir atması",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ر-ص-د": {
    core: "gözetleme yeri, gözetlemekte",
    turkish_traces: ["Rasad"],
    cross_refs: [],
    bab_chain: [],
  },
  "ر-ض-و": {
    core: "Sen hoşnut olursun",
    turkish_traces: ["Rıza"],
    cross_refs: [],
    bab_chain: [],
  },
  "ر-ض-ي": {
    core: "hoşnut, hoşnut olan, hoşnut edilmiş",
    turkish_traces: ["Rıza", "Marzî", "Razı"],
    cross_refs: [],
    bab_chain: [],
  },
  "ر-ع-ي": {
    core: "onun otlağını, otlağı",
    turkish_traces: ["Râî"],
    cross_refs: [],
    bab_chain: [],
  },
  "ر-ق-ب": {
    core: "köle",
    turkish_traces: ["Rakabe"],
    cross_refs: [],
    bab_chain: [],
  },
  "ر-ق-م": {
    core: "yazılmış",
    turkish_traces: ["Rakam"],
    cross_refs: [],
    bab_chain: [],
  },
  "ر-م-ي": {
    core: "onları taşlamak",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ر-و-د": {
    core: "ister, yavaş yavaş",
    turkish_traces: ["İrâde"],
    cross_refs: [],
    bab_chain: [],
  },
  "ز-ج-ر": {
    core: "çığlık",
    turkish_traces: ["Zecr"],
    cross_refs: [],
    bab_chain: [],
  },
  "ز-ر-ب": {
    core: "yumuşak tüylü halılar",
    turkish_traces: ["Zarabet"],
    cross_refs: [],
    bab_chain: [],
  },
  "ز-ك-ي": {
    core: "arınırsın, arındı",
    turkish_traces: ["Zekât"],
    cross_refs: [],
    bab_chain: [],
  },
  "ز-و-ر": {
    core: "ziyaret ettiniz",
    turkish_traces: ["Ziyaret"],
    cross_refs: [],
    bab_chain: [],
  },
  "ز-ي-د": {
    core: "artırmayız size",
    turkish_traces: ["Ziyade"],
    cross_refs: [],
    bab_chain: [],
  },
  "س-ب-ت": {
    core: "dinlenme",
    turkish_traces: ["Sebt"],
    cross_refs: [],
    bab_chain: [],
  },
  "س-ب-ق": {
    core: "öne geçenler, yarış",
    turkish_traces: ["Sebkat"],
    cross_refs: [],
    bab_chain: [],
  },
  "س-ج-ر": {
    core: "ateşlenmek",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "س-ج-ل": {
    core: "sert çamur",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "س-ج-ن": {
    core: "Siccin (alçak yer defteri), Siccin",
    turkish_traces: ["Sicn"],
    cross_refs: [],
    bab_chain: [],
  },
  "س-ج-و": {
    core: "Sakinleşti",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "س-ر-ب": {
    core: "serap",
    turkish_traces: ["Serap"],
    cross_refs: [],
    bab_chain: [],
  },
  "س-ر-ج": {
    core: "kandil",
    turkish_traces: ["Sirac"],
    cross_refs: [],
    bab_chain: [],
  },
  "س-ر-ي": {
    core: "gitmek",
    turkish_traces: ["Serî"],
    cross_refs: [],
    bab_chain: [],
  },
  "س-ط-ح": {
    core: "yayıldı",
    turkish_traces: ["Satıh"],
    cross_refs: [],
    bab_chain: [],
  },
  "س-ط-ر": {
    core: "masallar, zorla yöneten",
    turkish_traces: ["Satır"],
    cross_refs: [],
    bab_chain: [],
  },
  "س-غ-ب": {
    core: "açlık",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "س-ف-ل": {
    core: "aşağısı, aşağıda olanlar",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "س-ق-ي": {
    core: "içirilirler, içirilir, onun su içme hakkına",
    turkish_traces: ["Saki", "Sâkî"],
    cross_refs: [],
    bab_chain: [],
  },
  "س-ك-ن": {
    core: "yoksulun, yoksul",
    turkish_traces: ["Sükûn", "Miskin", "Mesken"],
    cross_refs: [],
    bab_chain: [],
  },
  "س-م-ك": {
    core: "onun tavanını",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "س-م-ن": {
    core: "semirtir",
    turkish_traces: ["Semn"],
    cross_refs: [],
    bab_chain: [],
  },
  "س-ن-م": {
    core: "Tesnim (cennet kaynağı)",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "س-ه-ر": {
    core: "düzlükte",
    turkish_traces: ["Seher"],
    cross_refs: [],
    bab_chain: [],
  },
  "س-و-ط": {
    core: "kırbaç",
    turkish_traces: ["Sût"],
    cross_refs: [],
    bab_chain: [],
  },
  "س-و-ع": {
    core: "kıyamet saati",
    turkish_traces: ["Sâa"],
    cross_refs: [],
    bab_chain: [],
  },
  "س-ي-ر": {
    core: "yürütüldü, yürütülmek",
    turkish_traces: ["Seyr", "Seyir"],
    cross_refs: [],
    bab_chain: [],
  },
  "ش-ت-ت": {
    core: "Kesinlikle çeşitli, bölük bölük",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ش-ت-و": {
    core: "kış",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ش-د-د": {
    core: "sağlam, daha zor, çok şiddetli",
    turkish_traces: ["Şiddet"],
    cross_refs: [],
    bab_chain: [],
  },
  "ش-ر-ب": {
    core: "içecek, içer",
    turkish_traces: ["Şerbet", "Şarap"],
    cross_refs: [],
    bab_chain: [],
  },
  "ش-ر-ك": {
    core: "ortak koşanlar",
    turkish_traces: ["Şirk"],
    cross_refs: [],
    bab_chain: [],
  },
  "ش-ف-ع": {
    core: "çift olan",
    turkish_traces: ["Şefaat"],
    cross_refs: [],
    bab_chain: [],
  },
  "ش-ف-ق": {
    core: "akşam alacakaranlığı",
    turkish_traces: ["Şafak"],
    cross_refs: [],
    bab_chain: [],
  },
  "ش-ف-و": {
    core: "iki dudak",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ش-ق-و": {
    core: "onların en bedbahtı",
    turkish_traces: ["Şeka"],
    cross_refs: [],
    bab_chain: [],
  },
  "ش-ق-ي": {
    core: "en bedbaht olan, En azgın",
    turkish_traces: ["Şakî"],
    cross_refs: [],
    bab_chain: [],
  },
  "ش-ه-د": {
    core: "ona şahitlik eder, şahitlik edene, şahitlik edilene",
    turkish_traces: ["Şehadet", "Şâhid", "Meşhûd", "Şühûd"],
    cross_refs: [],
    bab_chain: [],
  },
  "ش-ه-ر": {
    core: "ay",
    turkish_traces: ["Şehr"],
    cross_refs: [],
    bab_chain: [],
  },
  "ش-ي-ء": {
    core: "şey, şeyin",
    turkish_traces: ["Arapçadan"],
    cross_refs: [],
    bab_chain: [],
  },
  "ص-خ-ر": {
    core: "kayalar",
    turkish_traces: ["Sahr"],
    cross_refs: [],
    bab_chain: [],
  },
  "ص-د-ع": {
    core: "yarılma",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ص-ل-ب": {
    core: "bel kemiği",
    turkish_traces: ["Salb"],
    cross_refs: [],
    bab_chain: [],
  },
  "ص-ل-ح": {
    core: "salih ameller, yararlı işleri, salih işler",
    turkish_traces: ["Salâh", "Salah"],
    cross_refs: [],
    bab_chain: [],
  },
  "ص-و-ب": {
    core: "doğru söz",
    turkish_traces: ["İsâbe"],
    cross_refs: [],
    bab_chain: [],
  },
  "ص-ي-ف": {
    core: "yaz",
    turkish_traces: ["Sayf"],
    cross_refs: [],
    bab_chain: [],
  },
  "ض-ب-ح": {
    core: "nefes nefese",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ض-ر-ع": {
    core: "dikenli çalı",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ض-ن-ن": {
    core: "cimri",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ط-ح-و": {
    core: "onu yaydı",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ط-ر-ق": {
    core: "geceleyin gelen",
    turkish_traces: ["Tarîk"],
    cross_refs: [],
    bab_chain: [],
  },
  "ط-غ-و": {
    core: "azgınlığıyla",
    turkish_traces: ["Tuğyan"],
    cross_refs: [],
    bab_chain: [],
  },
  "ط-ل-ع": {
    core: "doğuşu, çöker",
    turkish_traces: ["Tulû'", "Tali"],
    cross_refs: [],
    bab_chain: [],
  },
  "ط-م-أ": {
    core: "huzura eren",
    turkish_traces: ["İtminan"],
    cross_refs: [],
    bab_chain: [],
  },
  "ط-م-م": {
    core: "her şeyi bastıran felaket",
    turkish_traces: ["Tâmm"],
    cross_refs: [],
    bab_chain: [],
  },
  "ط-و-ر": {
    core: "dağ",
    turkish_traces: ["Sina"],
    cross_refs: [],
    bab_chain: [],
  },
  "ظ-ن-ن": {
    core: "zanneder, sanmak",
    turkish_traces: ["Zan"],
    cross_refs: [],
    bab_chain: [],
  },
  "ظ-ه-ر": {
    core: "sırtının, sırtın",
    turkish_traces: ["Zâhir"],
    cross_refs: [],
    bab_chain: [],
  },
  "ع-ب-ر": {
    core: "ibret",
    turkish_traces: ["İbret"],
    cross_refs: [],
    bab_chain: [],
  },
  "ع-د-د": {
    core: "onu saydı",
    turkish_traces: ["Adet"],
    cross_refs: [],
    bab_chain: [],
  },
  "ع-د-ن": {
    core: "Adn",
    turkish_traces: ["Maden"],
    cross_refs: [],
    bab_chain: [],
  },
  "ع-ر-ش": {
    core: "tahtlar, arş",
    turkish_traces: ["Arş"],
    cross_refs: [],
    bab_chain: [],
  },
  "ع-س-س": {
    core: "kararmak",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ع-ش-و": {
    core: "akşam vakti",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ع-ص-ر": {
    core: "sıkan bulutlar, vakit",
    turkish_traces: ["Asr"],
    cross_refs: [],
    bab_chain: [],
  },
  "ع-ص-ي": {
    core: "isyan etti",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ع-ط-ل": {
    core: "terk edilmek",
    turkish_traces: ["Atıl"],
    cross_refs: [],
    bab_chain: [],
  },
  "ع-ط-و": {
    core: "bahşiş, Sana verir",
    turkish_traces: ["Atiyye"],
    cross_refs: [],
    bab_chain: [],
  },
  "ع-ظ-م": {
    core: "büyük, kemikler",
    turkish_traces: ["Azamet", "Azm"],
    cross_refs: [],
    bab_chain: [],
  },
  "ع-ق-ب": {
    core: "sarp yokuş, onun sonucundan",
    turkish_traces: ["Akabe", "Ukba"],
    cross_refs: [],
    bab_chain: [],
  },
  "ع-ق-ر": {
    core: "sonra onu kestiler",
    turkish_traces: ["Akr"],
    cross_refs: [],
    bab_chain: [],
  },
  "ع-ن-د": {
    core: "yanında, katında",
    turkish_traces: ["Arş"],
    cross_refs: [],
    bab_chain: [],
  },
  "ع-ه-ن": {
    core: "renkli yün gibi",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ع-و-د": {
    core: "tekrar eder",
    turkish_traces: ["Avdet"],
    cross_refs: [],
    bab_chain: [],
  },
  "ع-و-ل": {
    core: "Fakir",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ع-و-ن": {
    core: "yardım araçları",
    turkish_traces: ["Mü'âvenet"],
    cross_refs: [],
    bab_chain: [],
  },
  "ع-ي-ش": {
    core: "geçim, yaşam",
    turkish_traces: ["Maişet", "Ayş"],
    cross_refs: [],
    bab_chain: [],
  },
  "غ-ث-ث": {
    core: "çer çöp",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "غ-ر-ق": {
    core: "boğulma",
    turkish_traces: ["Gark"],
    cross_refs: [],
    bab_chain: [],
  },
  "غ-ش-و": {
    core: "onu örtüp bürüdüğünde, Örtmek",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "غ-ش-ي": {
    core: "örtücü",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "غ-ط-ش": {
    core: "karanlık yaptı",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "غ-م-ز": {
    core: "göz kırpışırlar",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "غ-ي-ر": {
    core: "değil, olmayan, akın edenlere",
    turkish_traces: ["Gâret"],
    cross_refs: [],
    bab_chain: [],
  },
  "ف-ا-د": {
    core: "kalpler üzerine",
    turkish_traces: ["Fuâd"],
    cross_refs: [],
    bab_chain: [],
  },
  "ف-س-د": {
    core: "bozgunculuk",
    turkish_traces: ["Fesâd"],
    cross_refs: [],
    bab_chain: [],
  },
  "ف-ك-ك": {
    core: "çözme, ayrılanlar",
    turkish_traces: ["Fek"],
    cross_refs: [],
    bab_chain: [],
  },
  "ق-ح-م": {
    core: "aştı",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ق-د-ح": {
    core: "çarpma",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ق-ر-ء": {
    core: "Kur'an",
    turkish_traces: ["Kırâat"],
    cross_refs: [],
    bab_chain: [],
  },
  "ق-ع-د": {
    core: "oturanlar",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ق-ل-و": {
    core: "Buğzetti",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ق-و-ي": {
    core: "kuvvet, güç",
    turkish_traces: ["Kuvvet"],
    cross_refs: [],
    bab_chain: [],
  },
  "ك-أ-س": {
    core: "kadeh",
    turkish_traces: ["Kâse"],
    cross_refs: [],
    bab_chain: [],
  },
  "ك-د-ح": {
    core: "çalışan, çaba",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ك-د-ر": {
    core: "bulanmak",
    turkish_traces: ["Keder"],
    cross_refs: [],
    bab_chain: [],
  },
  "ك-ز-ب": {
    core: "yalanlama içinde",
    turkish_traces: ["Kizb"],
    cross_refs: [],
    bab_chain: [],
  },
  "ك-ش-ط": {
    core: "soyulmak",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ك-ع-ب": {
    core: "genç güzel kadınlar",
    turkish_traces: ["Ka'be"],
    cross_refs: [],
    bab_chain: [],
  },
  "ك-ل-م": {
    core: "konuşurlar",
    turkish_traces: ["Kelam"],
    cross_refs: [],
    bab_chain: [],
  },
  "ك-ن-س": {
    core: "süpürenler",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ك-و-ب": {
    core: "kaseler",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ك-و-ر": {
    core: "dürülmek",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ك-ي-ف": {
    core: "nasıl",
    turkish_traces: ["Keyfiyet"],
    cross_refs: [],
    bab_chain: [],
  },
  "ل-ب-ث": {
    core: "kalanlar, kalmazlar",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ل-ب-د": {
    core: "çok",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ل-ب-س": {
    core: "örtü",
    turkish_traces: ["Libas"],
    cross_refs: [],
    bab_chain: [],
  },
  "ل-س-ن": {
    core: "dil",
    turkish_traces: ["Lisan"],
    cross_refs: [],
    bab_chain: [],
  },
  "ل-ظ-ظ": {
    core: "Alevlenmek",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ل-غ-و": {
    core: "boş söz",
    turkish_traces: ["Lağv"],
    cross_refs: [],
    bab_chain: [],
  },
  "ل-ف-ف": {
    core: "sarmaş dolaş",
    turkish_traces: ["Leff"],
    cross_refs: [],
    bab_chain: [],
  },
  "ل-م-م": {
    core: "toptan",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ل-ه-م": {
    core: "sonra ona ilham etti",
    turkish_traces: ["İlhâm"],
    cross_refs: [],
    bab_chain: [],
  },
  "ل-و-ح": {
    core: "levha",
    turkish_traces: ["Levha"],
    cross_refs: [],
    bab_chain: [],
  },
  "ل-ي-س": {
    core: "değilsin, değil midir",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ل-ي-ل": {
    core: "geceyi, onun gecesi, gece",
    turkish_traces: ["Leyl"],
    cross_refs: [],
    bab_chain: [],
  },
  "م-ث-ل": {
    core: "onun benzeri",
    turkish_traces: ["Misal"],
    cross_refs: [],
    bab_chain: [],
  },
  "م-ج-د": {
    core: "yüce, şerefli",
    turkish_traces: ["Mecd"],
    cross_refs: [],
    bab_chain: [],
  },
  "م-د-د": {
    core: "uzatıldı, uzatılmış",
    turkish_traces: ["Metot", "Medd"],
    cross_refs: [],
    bab_chain: [],
  },
  "م-ر-ر": {
    core: "geçtiler",
    turkish_traces: ["Mürur"],
    cross_refs: [],
    bab_chain: [],
  },
  "م-ز-ج": {
    core: "onun karışımı",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "م-ك-ن": {
    core: "güçlü",
    turkish_traces: ["Mekân"],
    cross_refs: [],
    bab_chain: [],
  },
  "م-ن-ن": {
    core: "kesilmiş",
    turkish_traces: ["Men", "Minnet"],
    cross_refs: [],
    bab_chain: [],
  },
  "م-ه-د": {
    core: "beşik",
    turkish_traces: ["Mehd"],
    cross_refs: [],
    bab_chain: [],
  },
  "م-ه-ل": {
    core: "mühlet ver, onlara mühlet ver",
    turkish_traces: ["Mehil"],
    cross_refs: [],
    bab_chain: [],
  },
  "م-و-ل": {
    core: "malı, mal, Onun malı",
    turkish_traces: ["Mal"],
    cross_refs: [],
    bab_chain: [],
  },
  "ن-ب-أ": {
    core: "haber",
    turkish_traces: ["Nebe"],
    cross_refs: [],
    bab_chain: [],
  },
  "ن-خ-ر": {
    core: "çürümüş",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ن-س-ي": {
    core: "unutmayacaksın",
    turkish_traces: ["Nisyan"],
    cross_refs: [],
    bab_chain: [],
  },
  "ن-ش-ط": {
    core: "yumuşakça çekenler, çözme",
    turkish_traces: ["Neşât"],
    cross_refs: [],
    bab_chain: [],
  },
  "ن-ص-ب": {
    core: "yorucu iş yapan, dikildi, gayret et",
    turkish_traces: ["Nasb"],
    cross_refs: [],
    bab_chain: [],
  },
  "ن-ض-ر": {
    core: "parlaklık",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ن-ف-ش": {
    core: "yayılmış",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ن-ق-ض": {
    core: "ezmek",
    turkish_traces: ["Nakz"],
    cross_refs: [],
    bab_chain: [],
  },
  "ن-ق-ع": {
    core: "toz",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ن-ق-م": {
    core: "kızdılar",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ن-ك-ل": {
    core: "ceza",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ن-م-ر-ق": {
    core: "yastıklar",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ن-ه-ر": {
    core: "gündüzü, ırmaklar, gündüze",
    turkish_traces: ["Nehâr", "Nehir", "Nehar"],
    cross_refs: [],
    bab_chain: [],
  },
  "ن-و-س": {
    core: "insanlar",
    turkish_traces: ["Nas", "Nâs"],
    cross_refs: [],
    bab_chain: [],
  },
  "ن-و-ق": {
    core: "Allah'ın devesine dikkat edin",
    turkish_traces: ["Nâka"],
    cross_refs: [],
    bab_chain: [],
  },
  "ن-و-م": {
    core: "uykunuz",
    turkish_traces: ["Nevim"],
    cross_refs: [],
    bab_chain: [],
  },
  "ه-ز-ل": {
    core: "şaka ile",
    turkish_traces: ["Hezl"],
    cross_refs: [],
    bab_chain: [],
  },
  "ه-و-ن": {
    core: "beni aşağıladı",
    turkish_traces: ["Hevân"],
    cross_refs: [],
    bab_chain: [],
  },
  "و-أ-د": {
    core: "diri diri gömülen kız çocuğu",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "و-ت-د": {
    core: "kazıklar",
    turkish_traces: ["Veted"],
    cross_refs: [],
    bab_chain: [],
  },
  "و-ت-ر": {
    core: "tek olan",
    turkish_traces: ["Vitr"],
    cross_refs: [],
    bab_chain: [],
  },
  "و-ث-ق": {
    core: "bağlar, onun bağını",
    turkish_traces: ["Vesika"],
    cross_refs: [],
    bab_chain: [],
  },
  "و-ج-ف": {
    core: "titreyici",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "و-ح-ش": {
    core: "yabani hayvanlar",
    turkish_traces: ["Vahşi"],
    cross_refs: [],
    bab_chain: [],
  },
  "و-ح-ي": {
    core: "vahyetti",
    turkish_traces: ["Vahy"],
    cross_refs: [],
    bab_chain: [],
  },
  "و-د-د": {
    core: "çok sevgili",
    turkish_traces: ["Ved"],
    cross_refs: [],
    bab_chain: [],
  },
  "و-د-ي": {
    core: "vadide",
    turkish_traces: ["Vâdî", "Vâdi"],
    cross_refs: [],
    bab_chain: [],
  },
  "و-ر-ء": {
    core: "arkalarından",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "و-ر-ث": {
    core: "mirası",
    turkish_traces: ["Vâris"],
    cross_refs: [],
    bab_chain: [],
  },
  "و-ر-ي": {
    core: "arkasından, ateş çıkaranlara",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "و-ز-ر": {
    core: "yükün",
    turkish_traces: ["Vezîr"],
    cross_refs: [],
    bab_chain: [],
  },
  "و-س-ط": {
    core: "ortasına girdiler",
    turkish_traces: ["Vâsıt"],
    cross_refs: [],
    bab_chain: [],
  },
  "و-س-ق": {
    core: "topladı, dolunay oldu",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "و-ص-د": {
    core: "kapatılmış",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "و-ص-ي": {
    core: "birbirlerine tavsiye ettiler",
    turkish_traces: ["Vasiyet"],
    cross_refs: [],
    bab_chain: [],
  },
  "و-ع-ي": {
    core: "saklıyorlar",
    turkish_traces: ["Va'y"],
    cross_refs: [],
    bab_chain: [],
  },
  "و-ف-ق": {
    core: "uygun",
    turkish_traces: ["Vifak"],
    cross_refs: [],
    bab_chain: [],
  },
  "و-ق-ب": {
    core: "bastırdı",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "و-ق-ت": {
    core: "belirlenmiş vakit",
    turkish_traces: ["Vakt"],
    cross_refs: [],
    bab_chain: [],
  },
  "و-ه-ج": {
    core: "çok parlak",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "و-ي-ل": {
    core: "vay, vay haline",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ي-ت-م": {
    core: "yetimi, yetim, Öksüz",
    turkish_traces: ["Yetim"],
    cross_refs: [],
    bab_chain: [],
  },
  "ي-د-و": {
    core: "iki el",
    turkish_traces: [],
    cross_refs: [],
    bab_chain: [],
  },
  "ي-م-ن": {
    core: "sağ eliyle",
    turkish_traces: ["Yemîn"],
    cross_refs: [],
    bab_chain: [],
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
    const refs = (data.cross_refs || []).filter(r => r.lesson === lessonId);
    if (refs.length > 0) {
      roots.push({ key, ...data, lessonRefs: refs });
    }
    // Also check bab_chain
    for (const bab of (data.bab_chain || [])) {
      if (bab.lessons.includes(lessonId) && !roots.find(r => r.key === key)) {
        roots.push({ key, ...data, lessonRefs: (data.cross_refs || []).filter(r => r.lesson === lessonId) });
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
