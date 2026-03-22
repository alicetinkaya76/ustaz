// ═══════════════════════════════════════════════════════════
// SEVİYE 4 DEVAM — L35 (Tîn), L36 (Alak), L37 (Kadr), L38 (Beyyine)
// ═══════════════════════════════════════════════════════════

const level4cLessons = [
  // ═══════════════════════════════════════════════════════════
  // DERS 35 — TÎN SURESİ (95:1-8)
  // ═══════════════════════════════════════════════════════════
  {
    id: "L35-tin",
    title: "Tîn Suresi (1-8)",
    titleAr: "سُورَةُ التِّينِ",
    stage: 2,
    level: 4,
    surah: 95,
    description: "Dört kasem. İnsanın en güzel biçimde yaratılışı (ahsen-i takvîm), sonra en aşağıya düşürülmesi. İstisnâ (إِلَّا) yapısı. أَحْسَن ism-i tafdîl.",
    verses: [
      {
        surah: 95, ayah: 1,
        arabic: "وَٱلتِّينِ وَٱلزَّيْتُونِ",
        translation: "İncire ve zeytine andolsun,",
        words: [
          { arabic: "وَ", transliteration: "wa", root: null, pos: "harf", meaning_tr: "ve (kasem)", irab_short: "kasem vav'ı" },
          { arabic: "ٱلتِّينِ", transliteration: "et-tîni", root: null, pos: "ism", meaning_tr: "incir", irab_short: "muksamun bih, mecrûr" },
          { arabic: "وَ", transliteration: "wa", root: null, pos: "harf", meaning_tr: "ve", irab_short: "atıf" },
          { arabic: "ٱلزَّيْتُونِ", transliteration: "ez-zeytûni", root: null, pos: "ism", meaning_tr: "zeytin", irab_short: "atıf, mecrûr" },
        ],
      },
      {
        surah: 95, ayah: 2,
        arabic: "وَطُورِ سِينِينَ",
        translation: "Sînâ dağına andolsun,",
        words: [
          { arabic: "وَ", transliteration: "wa", root: null, pos: "harf", meaning_tr: "ve", irab_short: "kasem atıf" },
          { arabic: "طُورِ", transliteration: "tûri", root: "ط-و-ر", pos: "ism", meaning_tr: "dağ", irab_short: "muksamun bih, mecrûr" },
          { arabic: "سِينِينَ", transliteration: "sînîne", root: null, pos: "ism", meaning_tr: "Sînâ", irab_short: "muzâfun ileyh, mecrûr" },
        ],
      },
      {
        surah: 95, ayah: 3,
        arabic: "وَهَـٰذَا ٱلْبَلَدِ ٱلْأَمِينِ",
        translation: "Ve bu güvenli beldeye andolsun,",
        words: [
          { arabic: "وَ", transliteration: "wa", root: null, pos: "harf", meaning_tr: "ve", irab_short: "kasem atıf" },
          { arabic: "هَـٰذَا", transliteration: "hâzâ", root: null, pos: "ism", meaning_tr: "bu", irab_short: "ism-i işâret" },
          { arabic: "ٱلْبَلَدِ", transliteration: "el-beledi", root: "ب-ل-د", pos: "ism", meaning_tr: "belde", irab_short: "bedel, mecrûr" },
          { arabic: "ٱلْأَمِينِ", transliteration: "el-emîni", root: "أ-م-ن", pos: "ism", meaning_tr: "güvenli", irab_short: "sıfat, mecrûr" },
        ],
      },
      {
        surah: 95, ayah: 4,
        arabic: "لَقَدْ خَلَقْنَا ٱلْإِنسَـٰنَ فِىٓ أَحْسَنِ تَقْوِيمٍ",
        translation: "Biz insanı en güzel biçimde yarattık.",
        words: [
          { arabic: "لَقَدْ", transliteration: "lekad", root: null, pos: "harf", meaning_tr: "elbette (tekid)", irab_short: "lâm-ı te'kîd + قَدْ tahkîk" },
          { arabic: "خَلَقْنَا", transliteration: "halaknâ", root: "خ-ل-ق", pos: "fil", meaning_tr: "yarattık", irab_short: "mâzî, mütekellim cem" },
          { arabic: "ٱلْإِنسَـٰنَ", transliteration: "el-insâne", root: "أ-ن-س", pos: "ism", meaning_tr: "insan", irab_short: "mef'ûlun bih, mansûb" },
          { arabic: "فِىٓ", transliteration: "fî", root: null, pos: "harf", meaning_tr: "içinde", irab_short: "harf-i cer" },
          { arabic: "أَحْسَنِ", transliteration: "ahseni", root: "ح-س-ن", pos: "ism", meaning_tr: "en güzel", irab_short: "ism-i tafdîl, muzâf, mecrûr" },
          { arabic: "تَقْوِيمٍ", transliteration: "takvîmin", root: "ق-و-م", pos: "ism", meaning_tr: "biçim, şekil", irab_short: "muzâfun ileyh, mecrûr" },
        ],
      },
      {
        surah: 95, ayah: 5,
        arabic: "ثُمَّ رَدَدْنَـٰهُ أَسْفَلَ سَـٰفِلِينَ",
        translation: "Sonra onu aşağıların en aşağısına çevirdik.",
        words: [
          { arabic: "ثُمَّ", transliteration: "summe", root: null, pos: "harf", meaning_tr: "sonra", irab_short: "atıf, terâhî" },
          { arabic: "رَدَدْنَـٰهُ", transliteration: "radednâhu", root: "ر-د-د", pos: "fil", meaning_tr: "onu çevirdik", irab_short: "mâzî + هُ mef'ûl" },
          { arabic: "أَسْفَلَ", transliteration: "esfele", root: "س-ف-ل", pos: "ism", meaning_tr: "en aşağı", irab_short: "ism-i tafdîl, muzâf, mansûb" },
          { arabic: "سَـٰفِلِينَ", transliteration: "sâfilîne", root: "س-ف-ل", pos: "ism", meaning_tr: "aşağılar", irab_short: "muzâfun ileyh, mecrûr (cem)" },
        ],
      },
      {
        surah: 95, ayah: 6,
        arabic: "إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ",
        translation: "Ancak iman edip salih amel işleyenler müstesna; onlar için kesintisiz bir mükâfat vardır.",
        words: [
          { arabic: "إِلَّا", transliteration: "illâ", root: null, pos: "harf", meaning_tr: "ancak, hariç", irab_short: "istisnâ edatı" },
          { arabic: "ٱلَّذِينَ", transliteration: "ellezîne", root: null, pos: "ism", meaning_tr: "o kimseler ki", irab_short: "ism-i mevsûl" },
          { arabic: "ءَامَنُوا۟", transliteration: "âmenû", root: "أ-م-ن", pos: "fil", meaning_tr: "iman ettiler", irab_short: "mâzî, IV. bâb, cem" },
          { arabic: "وَ", transliteration: "wa", root: null, pos: "harf", meaning_tr: "ve", irab_short: "atıf" },
          { arabic: "عَمِلُوا۟", transliteration: "amilû", root: "ع-م-ل", pos: "fil", meaning_tr: "işlediler", irab_short: "mâzî, cem" },
          { arabic: "ٱلصَّـٰلِحَـٰتِ", transliteration: "es-sâlihâti", root: "ص-ل-ح", pos: "ism", meaning_tr: "sâlih ameller", irab_short: "mef'ûlun bih, mansûb" },
          { arabic: "فَلَهُمْ", transliteration: "felehum", root: null, pos: "harf+zamir", meaning_tr: "onlar için", irab_short: "fa cevâbiye + lâm cer + هُمْ" },
          { arabic: "أَجْرٌ", transliteration: "ecrun", root: "أ-ج-ر", pos: "ism", meaning_tr: "mükâfat", irab_short: "mübtedâ mü'ahhar, merfû" },
          { arabic: "غَيْرُ", transliteration: "ğayru", root: null, pos: "ism", meaning_tr: "olmayan", irab_short: "sıfat, merfû" },
          { arabic: "مَمْنُونٍ", transliteration: "memnûnin", root: "م-ن-ن", pos: "ism", meaning_tr: "kesilen", irab_short: "ism-i mef'ûl, muzâfun ileyh" },
        ],
      },
      {
        surah: 95, ayah: 7,
        arabic: "فَمَا يُكَذِّبُكَ بَعْدُ بِٱلدِّينِ",
        translation: "Bundan sonra seni dine karşı yalanlayan nedir?",
        words: [
          { arabic: "فَمَا", transliteration: "femâ", root: null, pos: "harf", meaning_tr: "peki ne?", irab_short: "fa isti'nâf + mâ istifhâm" },
          { arabic: "يُكَذِّبُكَ", transliteration: "yukezzibuke", root: "ك-ذ-ب", pos: "fil", meaning_tr: "seni yalanlatır", irab_short: "muzâri, II. bâb + كَ mef'ûl" },
          { arabic: "بَعْدُ", transliteration: "ba'du", root: null, pos: "ism", meaning_tr: "bundan sonra", irab_short: "zarf, mebnî" },
          { arabic: "بِٱلدِّينِ", transliteration: "bid-dîni", root: "د-ي-ن", pos: "ism", meaning_tr: "din hakkında", irab_short: "bâ cer + mecrûr" },
        ],
      },
      {
        surah: 95, ayah: 8,
        arabic: "أَلَيْسَ ٱللَّهُ بِأَحْكَمِ ٱلْحَـٰكِمِينَ",
        translation: "Allah, hükmedenlerin en adaletlisi değil mi?",
        words: [
          { arabic: "أَلَيْسَ", transliteration: "e-leyse", root: null, pos: "fil", meaning_tr: "değil mi?", irab_short: "hemze istifhâm + leyse" },
          { arabic: "ٱللَّهُ", transliteration: "Allâhu", root: "أ-ل-ه", pos: "ism", meaning_tr: "Allah", irab_short: "ism-i leyse, merfû" },
          { arabic: "بِأَحْكَمِ", transliteration: "bi-ahkemi", root: "ح-ك-م", pos: "ism", meaning_tr: "en adaletli", irab_short: "bâ zâide + haber-i leyse, ism-i tafdîl" },
          { arabic: "ٱلْحَـٰكِمِينَ", transliteration: "el-hâkimîne", root: "ح-ك-م", pos: "ism", meaning_tr: "hükmedenler", irab_short: "muzâfun ileyh, mecrûr" },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "أَحْسَنِ تَقْوِيمٍ — İsm-i Tafdîl Muzâf",
        explanation: "أَحْسَن (en güzel) + تَقْوِيم (biçim): ism-i tafdîl muzâf olarak geldiğinde 'en ...' anlamı verir. L17'deki خَيْرٌ مِنْ (daha hayırlı) ile karşılaştır: muzâf = EN, مِنْ ile = DAHA.",
        rule: "أَفْعَل + isim (muzâf) = en ... | أَفْعَل + مِنْ = daha ...",
        examples: ["أَحْسَنِ تَقْوِيمٍ = en güzel biçimde", "أَحْكَمِ الحَاكِمِينَ = hükmedenlerin en adaletlisi", "خَيْرٌ مِنْ أَلْفِ شَهْرٍ = bin aydan daha hayırlı"],
      },
      {
        title: "إِلَّا — İstisnâ Edatı",
        explanation: "إِلَّا: genel hükmün dışında kalan kısmı bildirir. Tam istisnâ: müstesnâ mansûb (إِلَّا زَيْدًا). Burada: إِلَّا الَّذِينَ — ism-i mevsûl ile. Şems'teki (L31) zıtlık: herkes → istisnâ → iman edenler.",
        rule: "إِلَّا + müstesnâ: 'hariç, ancak.' Tam istisnâda müstesnâ mansûb.",
        examples: ["إِلَّا الَّذِينَ آمَنُوا = iman edenler hariç", "جَاءَ القَوْمُ إِلَّا زَيْدًا = kavim geldi, Zeyd hariç"],
      },
    ],
    exercises: [
      { id: "L35-Q01", type: "single_choice", question: "أَحْسَنِ تَقْوِيمٍ ifadesinde أَحْسَن ne tür bir kelimedir?", options: ["İsm-i tafdîl (أَفْعَل): 'en güzel' — muzâf olarak kullanılmış", "İsm-i fâil: 'güzelleştiren'", "Masdar: 'güzellik'", "Sıfat-ı müşebbehe: 'sürekli güzel'"], correct: 0, explanation: "أَحْسَن: ism-i tafdîl (أَفْعَل kalıbı). حَسُنَ (güzel oldu) → أَحْسَن (en güzel). Muzâf olarak geldiğinde 'en' anlamı: أَحْسَنِ تَقْوِيمٍ = en güzel biçimde.", relatedRoots: ["ح-س-ن"] },
      { id: "L35-Q02", type: "single_choice", question: "İsm-i tafdîl iki şekilde kullanılır. Hangisi doğrudur?", options: ["Muzâf: أَفْعَل + isim = EN, مِنْ ile: أَفْعَل + مِنْ = DAHA", "Her ikisi de 'daha' anlamı verir", "Muzâf daima nekre olmalıdır", "مِنْ ile geldiğinde 'en' anlamı olur"], correct: 0, explanation: "İki kullanım: (1) أَحْسَنِ تَقْوِيمٍ = en güzel biçimde (muzâf→EN), (2) خَيْرٌ مِنْ أَلْفِ شَهْرٍ = bin aydan DAHA hayırlı (مِنْ→DAHA).", relatedRoots: ["ح-س-ن", "ح-ك-م"] },
      { id: "L35-Q03", type: "single_choice", question: "إِلَّا edatı burada ne işlev görür?", options: ["İstisnâ: genel hükümden (aşağıya düşme) iman edenleri çıkarır", "Olumsuzluk: 'asla, hiçbir zaman'", "Sınırlama: 'sadece, yalnız'", "Şart: 'eğer, ancak (şart)'"], correct: 0, explanation: "إِلَّا: istisnâ edatı. 'Onu aşağıların en aşağısına düşürdük, ancak iman edip salih amel işleyenler müstesna.' Genel → istisnâ → özel grup.", relatedRoots: ["أ-م-ن"] },
      { id: "L35-Q04", type: "bab_identify", targetWord: "يُكَذِّبُ", question: "يُكَذِّبُكَ fiili hangi bâbtandır?", options: ["II. bâb (تَفْعِيل): كَذَبَ (yalandı) → كَذَّبَ (yalanladı)", "I. bâb: temel yalanlama", "IV. bâb: أَكْذَبَ", "V. bâb: تَكَذَّبَ"], correct: 0, explanation: "كَذَّبَ: II. bâb. كَذَبَ (yalan söyledi, I.) → كَذَّبَ (yalanladı, ta'diye: müteaddî yaptı, II.). Muzâri: يُكَذِّبُ.", relatedRoots: ["ك-ذ-ب"] },
      { id: "L35-Q05", type: "single_choice", question: "أَلَيْسَ ٱللَّهُ بِأَحْكَمِ ٱلْحَـٰكِمِينَ cümlesinde soru hangi tür?", options: ["İnkârî istifhâm: cevabı 'evet, öyledir' beklenen (takrîr)", "Gerçek soru: bilgi talep eden", "İstifhâm-ı istihzâ: alay", "İstifhâm-ı temenni: dilek"], correct: 0, explanation: "أَلَيْسَ: inkârî istifhâm (takrîr). Cevap: 'Evet, Allah hükmedenlerin en adaletlisidir!' Duhâ'daki (L33) أَلَمْ ile aynı teknik.", relatedRoots: ["ح-ك-م"] },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DERS 36 — ALAK SURESİ (96:1-19)
  // ═══════════════════════════════════════════════════════════
  {
    id: "L36-alak",
    title: "Alak Suresi (1-19)",
    titleAr: "سُورَةُ العَلَقِ",
    stage: 2,
    level: 4,
    surah: 96,
    description: "İlk inen ayetler. خَلَقَ-عَلَّمَ (yaratma-öğretme) ilişkisi. كَلَّا tekrarı (caydırma). II. bâb عَلَّمَ. Yakınlık (سَجَدَ/اقْتَرِبْ) emri.",
    verses: [
      {
        surah: 96, ayah: 1,
        arabic: "ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ",
        translation: "Yaratan Rabbinin adıyla oku!",
        words: [
          { arabic: "ٱقْرَأْ", transliteration: "ikra'", root: "ق-ر-أ", pos: "fil", meaning_tr: "oku!", irab_short: "emir, muhatap" },
          { arabic: "بِٱسْمِ", transliteration: "bismi", root: "س-م-و", pos: "ism", meaning_tr: "adıyla", irab_short: "bâ cer + muzâf" },
          { arabic: "رَبِّكَ", transliteration: "Rabbike", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbinin", irab_short: "muzâfun ileyh + كَ zamîr" },
          { arabic: "ٱلَّذِى", transliteration: "ellezî", root: null, pos: "ism", meaning_tr: "ki O", irab_short: "ism-i mevsûl, sıfat" },
          { arabic: "خَلَقَ", transliteration: "haleka", root: "خ-ل-ق", pos: "fil", meaning_tr: "yarattı", irab_short: "mâzî, sıla cümlesi" },
        ],
      },
      {
        surah: 96, ayah: 2,
        arabic: "خَلَقَ ٱلْإِنسَـٰنَ مِنْ عَلَقٍ",
        translation: "İnsanı alaktan (asılıp tutunan hücreden) yarattı.",
        words: [
          { arabic: "خَلَقَ", transliteration: "haleka", root: "خ-ل-ق", pos: "fil", meaning_tr: "yarattı", irab_short: "mâzî" },
          { arabic: "ٱلْإِنسَـٰنَ", transliteration: "el-insâne", root: "أ-ن-س", pos: "ism", meaning_tr: "insanı", irab_short: "mef'ûlun bih, mansûb" },
          { arabic: "مِنْ", transliteration: "min", root: null, pos: "harf", meaning_tr: "-den", irab_short: "harf-i cer, ibtidâiye" },
          { arabic: "عَلَقٍ", transliteration: "alekin", root: "ع-ل-ق", pos: "ism", meaning_tr: "alak (asılıp tutunan)", irab_short: "mecrûr" },
        ],
      },
      {
        surah: 96, ayah: 3,
        arabic: "ٱقْرَأْ وَرَبُّكَ ٱلْأَكْرَمُ",
        translation: "Oku! Senin Rabbin en cömert olandır.",
        words: [
          { arabic: "ٱقْرَأْ", transliteration: "ikra'", root: "ق-ر-أ", pos: "fil", meaning_tr: "oku!", irab_short: "emir (tekrar)" },
          { arabic: "وَ", transliteration: "wa", root: null, pos: "harf", meaning_tr: "ve", irab_short: "hâliye vav'ı" },
          { arabic: "رَبُّكَ", transliteration: "Rabbuke", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbin", irab_short: "mübtedâ, merfû" },
          { arabic: "ٱلْأَكْرَمُ", transliteration: "el-ekremu", root: "ك-ر-م", pos: "ism", meaning_tr: "en cömert", irab_short: "haber, ism-i tafdîl, merfû" },
        ],
      },
      {
        surah: 96, ayah: 4,
        arabic: "ٱلَّذِى عَلَّمَ بِٱلْقَلَمِ",
        translation: "O ki kalemle öğretti.",
        words: [
          { arabic: "ٱلَّذِى", transliteration: "ellezî", root: null, pos: "ism", meaning_tr: "ki O", irab_short: "ism-i mevsûl" },
          { arabic: "عَلَّمَ", transliteration: "alleme", root: "ع-ل-م", pos: "fil", meaning_tr: "öğretti", irab_short: "mâzî, II. bâb" },
          { arabic: "بِٱلْقَلَمِ", transliteration: "bil-kalemi", root: "ق-ل-م", pos: "ism", meaning_tr: "kalemle", irab_short: "bâ cer + mecrûr (âlet)" },
        ],
      },
      {
        surah: 96, ayah: 5,
        arabic: "عَلَّمَ ٱلْإِنسَـٰنَ مَا لَمْ يَعْلَمْ",
        translation: "İnsana bilmediğini öğretti.",
        words: [
          { arabic: "عَلَّمَ", transliteration: "alleme", root: "ع-ل-م", pos: "fil", meaning_tr: "öğretti", irab_short: "mâzî, II. bâb" },
          { arabic: "ٱلْإِنسَـٰنَ", transliteration: "el-insâne", root: "أ-ن-س", pos: "ism", meaning_tr: "insana", irab_short: "mef'ûlun bih 1, mansûb" },
          { arabic: "مَا", transliteration: "mâ", root: null, pos: "ism", meaning_tr: "şeyi ki", irab_short: "ism-i mevsûl, mef'ûlun bih 2" },
          { arabic: "لَمْ", transliteration: "lem", root: null, pos: "harf", meaning_tr: "olumsuzluk", irab_short: "nefy-i mâzî" },
          { arabic: "يَعْلَمْ", transliteration: "ya'lem", root: "ع-ل-م", pos: "fil", meaning_tr: "bilmedi", irab_short: "muzâri, meczûm (لَمْ ile)" },
        ],
      },
      {
        surah: 96, ayah: 6,
        arabic: "كَلَّآ إِنَّ ٱلْإِنسَـٰنَ لَيَطْغَىٰٓ",
        translation: "Hayır! İnsan mutlaka azgınlık eder.",
        words: [
          { arabic: "كَلَّا", transliteration: "kellâ", root: null, pos: "harf", meaning_tr: "hayır! asla!", irab_short: "rediye/zecr" },
          { arabic: "إِنَّ", transliteration: "inne", root: null, pos: "harf", meaning_tr: "şüphesiz", irab_short: "te'kîd" },
          { arabic: "ٱلْإِنسَـٰنَ", transliteration: "el-insâne", root: "أ-ن-س", pos: "ism", meaning_tr: "insan", irab_short: "ism-i inne, mansûb" },
          { arabic: "لَيَطْغَىٰٓ", transliteration: "le-yetğâ", root: "ط-غ-ي", pos: "fil", meaning_tr: "azgınlık eder", irab_short: "lâm-ı te'kîd + muzâri" },
        ],
      },
      {
        surah: 96, ayah: 19,
        arabic: "كَلَّا لَا تُطِعْهُ وَٱسْجُدْ وَٱقْتَرِبْ ۩",
        translation: "Hayır! Ona itaat etme; secde et ve yakınlaş!",
        words: [
          { arabic: "كَلَّا", transliteration: "kellâ", root: null, pos: "harf", meaning_tr: "hayır!", irab_short: "rediye" },
          { arabic: "لَا", transliteration: "lâ", root: null, pos: "harf", meaning_tr: "yapma", irab_short: "nehy" },
          { arabic: "تُطِعْهُ", transliteration: "tuti'hu", root: "ط-و-ع", pos: "fil", meaning_tr: "ona itaat et(me)", irab_short: "muzâri, IV. bâb, meczûm" },
          { arabic: "وَ", transliteration: "wa", root: null, pos: "harf", meaning_tr: "ve", irab_short: "atıf" },
          { arabic: "ٱسْجُدْ", transliteration: "uscud", root: "س-ج-د", pos: "fil", meaning_tr: "secde et!", irab_short: "emir" },
          { arabic: "وَ", transliteration: "wa", root: null, pos: "harf", meaning_tr: "ve", irab_short: "atıf" },
          { arabic: "ٱقْتَرِبْ", transliteration: "ikterib", root: "ق-ر-ب", pos: "fil", meaning_tr: "yakınlaş!", irab_short: "emir, VIII. bâb" },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "II. Bâb عَلَّمَ — Çift Mef'ûl Fiil",
        explanation: "عَلَّمَ (II. bâb): عَلِمَ (bildi, I.) → عَلَّمَ (öğretti, II.). II. bâb ta'diye: lâzım fiili müteaddî yapar. Burada çift mef'ûl: عَلَّمَ الإِنسَانَ (1: kime) مَا لَمْ يَعْلَمْ (2: neyi). L33'te (حَدَّثَ) ve L31'de (زَكَّى) de II. bâb gördük.",
        rule: "عَلَّمَ + mef'ûl 1 (kimi) + mef'ûl 2 (neyi) = 'birine bir şeyi öğretti'",
        examples: ["عَلَّمَ الإِنسَانَ مَا لَمْ يَعْلَمْ = insana bilmediğini öğretti", "عَلَّمَ آدَمَ الأَسْمَاءَ = Âdem'e isimleri öğretti (Bakara 31)"],
      },
      {
        title: "كَلَّا — Caydırma/Zecr Edatı",
        explanation: "كَلَّا: 'hayır, asla!' anlamında güçlü bir rediye edatı. Bu surede iki kez gelir (6, 19). Kur'an'ın ikinci yarısında çok kullanılır. Bir önceki durumu reddeder ve yeni bir hüküm başlatır.",
        rule: "كَلَّا: önceki durumu/düşünceyi şiddetle reddeder. Bazen vakf (durma), bazen isti'nâf (yeni başlama).",
        examples: ["كَلَّا إِنَّ الإِنسَانَ لَيَطْغَى = Hayır! İnsan azgınlık eder", "كَلَّا لَا تُطِعْهُ = Hayır! Ona itaat etme"],
      },
      {
        title: "VIII. Bâb اِقْتَرِبْ — Yakınlaşma",
        explanation: "اِقْتَرَبَ (VIII. bâb): قَرُبَ (yakın oldu, I.) → اِقْتَرَبَ (yakınlaştı, VIII. bâb — kendini yaklaştırma). Emir: اِقْتَرِبْ. Secde ile birlikte: سجود fiziksel yakınlığı, اِقْتِرَاب manevî yakınlığı ifade eder.",
        rule: "VIII. bâb (اِفْتَعَلَ): dönüşlü/edinme anlamı. قَرُبَ → اِقْتَرَبَ: kendini yaklaştırdı.",
        examples: ["اُسْجُدْ وَاقْتَرِبْ = secde et ve (Allah'a) yaklaş", "اِقْتَرَبَتِ السَّاعَةُ = kıyamet yaklaştı (Kamer 1)"],
      },
    ],
    exercises: [
      { id: "L36-Q01", type: "bab_identify", targetWord: "عَلَّمَ", question: "عَلَّمَ fiili hangi bâbtandır?", options: ["II. bâb: عَلِمَ (bildi) → عَلَّمَ (öğretti) — ta'diye", "I. bâb: temel bilme", "IV. bâb: أَعْلَمَ (haberdar etti)", "V. bâb: تَعَلَّمَ (öğrendi)"], correct: 0, explanation: "عَلَّمَ: II. bâb (فَعَّلَ). عَلِمَ (bildi, lâzım) → عَلَّمَ (öğretti, müteaddî). II. bâb ta'diye işlevi: fiili geçişli yapar.", relatedRoots: ["ع-ل-م"] },
      { id: "L36-Q02", type: "single_choice", question: "Bu surede خَلَقَ ve عَلَّمَ arasındaki ilişki nedir?", options: ["Yaratma → öğretme: fiziksel varlık → bilgi bahşetme sıralaması", "İkisi aynı bâbtan", "Karşıtlık (tıbâk)", "Aralarında ilişki yok"], correct: 0, explanation: "خَلَقَ (yarattı, I. bâb: fiziksel yaratma) → عَلَّمَ (öğretti, II. bâb: bilgi verme). Sıralama: önce varlık, sonra bilgi. 'Yaratan' ve 'öğreten' Rabbin iki temel sıfatı.", relatedRoots: ["خ-ل-ق", "ع-ل-م"] },
      { id: "L36-Q03", type: "single_choice", question: "كَلَّا edatının fonksiyonu nedir?", options: ["Güçlü rediye: önceki durumu 'hayır!' diye reddeder", "Soru edatı", "Şart edatı", "İstisnâ edatı"], correct: 0, explanation: "كَلَّا: zecr edatı. Kuvvetli bir 'hayır!' anlamında. Bu surede iki kez: (1) insanın azgınlığını reddediş, (2) engelleyiciye karşı çıkış.", relatedRoots: [] },
      { id: "L36-Q04", type: "bab_identify", targetWord: "ٱقْتَرِبْ", question: "اِقْتَرِبْ hangi bâbın emir formu?", options: ["VIII. bâb: قَرُبَ → اِقْتَرَبَ → emir: اِقْتَرِبْ (yakınlaş!)", "I. bâb: قَرُبَ", "V. bâb: تَقَرَّبَ", "IV. bâb: أَقْرَبَ"], correct: 0, explanation: "اِقْتَرِبْ: VIII. bâb emir. قَرُبَ (yakın oldu) → اِقْتَرَبَ (yakınlaştı, dönüşlü) → emir: اِقْتَرِبْ. İnfi'âl bâbındaki kendini yaklaştırma anlamı.", relatedRoots: ["ق-ر-ب"] },
      { id: "L36-Q05", type: "single_choice", question: "عَلَّمَ الإِنسَانَ مَا لَمْ يَعْلَمْ cümlesinde kaç mef'ûl vardır?", options: ["İki mef'ûl: الإِنسَانَ (kime) + مَا لَمْ يَعْلَمْ (neyi)", "Bir mef'ûl: الإِنسَانَ", "Üç mef'ûl", "Mef'ûl yok"], correct: 0, explanation: "II. bâb عَلَّمَ çift mef'ûl alır: mef'ûl 1 = الإِنسَانَ (kime öğretti), mef'ûl 2 = مَا لَمْ يَعْلَمْ (neyi öğretti). Bu yapı II. bâb ta'diye'nin özelliğidir.", relatedRoots: ["ع-ل-م"] },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DERS 37 — KADR SURESİ (97:1-5)
  // ═══════════════════════════════════════════════════════════
  {
    id: "L37-kadr",
    title: "Kadr Suresi (1-5)",
    titleAr: "سُورَةُ القَدْرِ",
    stage: 2,
    level: 4,
    surah: 97,
    description: "Kadir Gecesi: bin aydan hayırlı. خَيْرٌ مِنْ (ism-i tafdîl + مِنْ). تَنَزَّلُ V. bâb. Haber mukaddem (سَلَامٌ هِيَ).",
    verses: [
      {
        surah: 97, ayah: 1,
        arabic: "إِنَّآ أَنزَلْنَـٰهُ فِى لَيْلَةِ ٱلْقَدْرِ",
        translation: "Şüphesiz biz onu Kadir Gecesinde indirdik.",
        words: [
          { arabic: "إِنَّا", transliteration: "innâ", root: null, pos: "harf+zamir", meaning_tr: "şüphesiz biz", irab_short: "إِنَّ + نَا ism-i inne" },
          { arabic: "أَنزَلْنَـٰهُ", transliteration: "enzelnâhu", root: "ن-ز-ل", pos: "fil", meaning_tr: "onu indirdik", irab_short: "mâzî, IV. bâb + هُ mef'ûl" },
          { arabic: "فِى", transliteration: "fî", root: null, pos: "harf", meaning_tr: "içinde", irab_short: "harf-i cer" },
          { arabic: "لَيْلَةِ", transliteration: "leyleti", root: "ل-ي-ل", pos: "ism", meaning_tr: "gece", irab_short: "muzâf, mecrûr" },
          { arabic: "ٱلْقَدْرِ", transliteration: "el-kadri", root: "ق-د-ر", pos: "ism", meaning_tr: "kadir/değer", irab_short: "muzâfun ileyh, mecrûr" },
        ],
      },
      {
        surah: 97, ayah: 2,
        arabic: "وَمَآ أَدْرَىٰكَ مَا لَيْلَةُ ٱلْقَدْرِ",
        translation: "Kadir Gecesinin ne olduğunu sen ne bileceksin!",
        words: [
          { arabic: "وَمَا", transliteration: "wemâ", root: null, pos: "harf", meaning_tr: "ve ne?", irab_short: "vav + mâ istifhâm" },
          { arabic: "أَدْرَىٰكَ", transliteration: "edrâke", root: "د-ر-ي", pos: "fil", meaning_tr: "sana bildirdi", irab_short: "mâzî, IV. bâb + كَ mef'ûl" },
          { arabic: "مَا", transliteration: "mâ", root: null, pos: "ism", meaning_tr: "nedir?", irab_short: "istifhâm, mübtedâ" },
          { arabic: "لَيْلَةُ", transliteration: "leyletu", root: "ل-ي-ل", pos: "ism", meaning_tr: "gecesi", irab_short: "haber, merfû" },
          { arabic: "ٱلْقَدْرِ", transliteration: "el-kadri", root: "ق-د-ر", pos: "ism", meaning_tr: "kadrin", irab_short: "muzâfun ileyh, mecrûr" },
        ],
      },
      {
        surah: 97, ayah: 3,
        arabic: "لَيْلَةُ ٱلْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ",
        translation: "Kadir Gecesi bin aydan daha hayırlıdır.",
        words: [
          { arabic: "لَيْلَةُ", transliteration: "leyletu", root: "ل-ي-ل", pos: "ism", meaning_tr: "gecesi", irab_short: "mübtedâ, merfû" },
          { arabic: "ٱلْقَدْرِ", transliteration: "el-kadri", root: "ق-د-ر", pos: "ism", meaning_tr: "kadrin", irab_short: "muzâfun ileyh" },
          { arabic: "خَيْرٌ", transliteration: "hayrun", root: "خ-ي-ر", pos: "ism", meaning_tr: "daha hayırlı", irab_short: "haber, ism-i tafdîl" },
          { arabic: "مِّنْ", transliteration: "min", root: null, pos: "harf", meaning_tr: "-den", irab_short: "مِنْ tafdîliye" },
          { arabic: "أَلْفِ", transliteration: "elfi", root: null, pos: "ism", meaning_tr: "bin", irab_short: "muzâf, mecrûr" },
          { arabic: "شَهْرٍ", transliteration: "şehrin", root: "ش-ه-ر", pos: "ism", meaning_tr: "ay", irab_short: "muzâfun ileyh, mecrûr" },
        ],
      },
      {
        surah: 97, ayah: 4,
        arabic: "تَنَزَّلُ ٱلْمَلَـٰٓئِكَةُ وَٱلرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ",
        translation: "Melekler ve Ruh, Rablerinin izniyle her iş için iner.",
        words: [
          { arabic: "تَنَزَّلُ", transliteration: "tenezzelü", root: "ن-ز-ل", pos: "fil", meaning_tr: "peyderpey iner", irab_short: "muzâri, V. bâb" },
          { arabic: "ٱلْمَلَـٰٓئِكَةُ", transliteration: "el-melâiketu", root: "م-ل-ك", pos: "ism", meaning_tr: "melekler", irab_short: "fâil, merfû" },
          { arabic: "وَٱلرُّوحُ", transliteration: "ver-rûhu", root: "ر-و-ح", pos: "ism", meaning_tr: "ve Ruh (Cebrail)", irab_short: "atıf, merfû" },
          { arabic: "فِيهَا", transliteration: "fîhâ", root: null, pos: "harf+zamir", meaning_tr: "o gecede", irab_short: "fî + hâ (leyle)" },
          { arabic: "بِإِذْنِ", transliteration: "bi-izni", root: "أ-ذ-ن", pos: "ism", meaning_tr: "izniyle", irab_short: "bâ sebebiye + muzâf" },
          { arabic: "رَبِّهِم", transliteration: "Rabbihim", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rablerinin", irab_short: "muzâfun ileyh + هِمْ" },
          { arabic: "مِّن", transliteration: "min", root: null, pos: "harf", meaning_tr: "-den", irab_short: "harf-i cer, sebebiye" },
          { arabic: "كُلِّ", transliteration: "kulli", root: null, pos: "ism", meaning_tr: "her", irab_short: "muzâf, mecrûr" },
          { arabic: "أَمْرٍ", transliteration: "emrin", root: "أ-م-ر", pos: "ism", meaning_tr: "iş, emir", irab_short: "muzâfun ileyh" },
        ],
      },
      {
        surah: 97, ayah: 5,
        arabic: "سَلَـٰمٌ هِىَ حَتَّىٰ مَطْلَعِ ٱلْفَجْرِ",
        translation: "O gece, fecrin doğuşuna kadar selâmettir.",
        words: [
          { arabic: "سَلَـٰمٌ", transliteration: "selâmun", root: "س-ل-م", pos: "ism", meaning_tr: "selâmet", irab_short: "haber mukaddem, merfû" },
          { arabic: "هِىَ", transliteration: "hiye", root: null, pos: "zamir", meaning_tr: "o (gece)", irab_short: "mübtedâ mü'ahhar" },
          { arabic: "حَتَّىٰ", transliteration: "hattâ", root: null, pos: "harf", meaning_tr: "-e kadar", irab_short: "gâye (bitiş noktası)" },
          { arabic: "مَطْلَعِ", transliteration: "matla'i", root: "ط-ل-ع", pos: "ism", meaning_tr: "doğuş vakti", irab_short: "ism-i zaman, mecrûr" },
          { arabic: "ٱلْفَجْرِ", transliteration: "el-fecri", root: "ف-ج-ر", pos: "ism", meaning_tr: "fecr", irab_short: "muzâfun ileyh" },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "İsm-i Tafdîl + مِنْ Tafdîliye",
        explanation: "خَيْرٌ مِنْ أَلْفِ شَهْرٍ: ism-i tafdîl (خَيْر = daha hayırlı) + مِنْ (karşılaştırma harfi) + karşılaştırma nesnesi. Tîn'deki (L35) muzâf kullanım (أَحْسَنِ تَقْوِيمٍ = en güzel) ile karşılaştır.",
        rule: "خَيْرٌ مِنْ X = 'X'den daha hayırlı' — مِنْ tafdîliye: karşılaştırma nesnesi bildirir.",
        examples: ["خَيْرٌ مِنْ أَلْفِ شَهْرٍ = bin aydan daha hayırlı", "أَحْسَنِ تَقْوِيمٍ = en güzel biçimde (muzâf)"],
      },
      {
        title: "V. Bâb: تَنَزَّلَ — Peyderpey İnme",
        explanation: "تَنَزَّلَ (V. bâb): نَزَلَ (indi, I.) → نَزَّلَ (indirdi, II.) → تَنَزَّلَ (peyderpey indi, V.). أَنزَلَ (IV: tek seferde indirdik) ile karşılaştır. Aynı kök, farklı bâb → farklı anlam.",
        rule: "تَفَعَّلَ: V. bâb. Tedrîcîlik, kendiliğinden olma anlamı. II. bâbın mutâva'atı.",
        examples: ["تَنَزَّلَ = peyderpey indi (meleklerin sürekli inişi)", "أَنزَلَ = tek seferde indirdi (Kur'an'ın inzâli)"],
      },
      {
        title: "Haber Mukaddem: سَلَامٌ هِيَ",
        explanation: "Normal sıra: هِيَ سَلَامٌ (o selâmettir). Burada haber (سَلَامٌ) öne alınmış: 'SELÂMETTİR o gece!' Taqdîm (öne alma) ile vurgulama: selâmet kavramı öne çıkarılıyor.",
        rule: "Haber mukaddem: haberi mübtedâdan önce getirerek vurgulama. İnşirâh'taki (L34) إِنَّ مَعَ العُسْرِ يُسْرًا ile benzer teknik.",
        examples: ["سَلَامٌ هِيَ = SELÂMETTİR o", "لَكُمْ دِينُكُمْ = SİZİN dininiz sizedir"],
      },
    ],
    exercises: [
      { id: "L37-Q01", type: "bab_identify", targetWord: "أَنزَلْنَاهُ", question: "أَنزَلَ fiili hangi bâbtandır?", options: ["IV. bâb: نَزَلَ (indi) → أَنزَلَ (indirdi)", "I. bâb: نَزَلَ (indi)", "II. bâb: نَزَّلَ (peyderpey indirdi)", "V. bâb: تَنَزَّلَ (indi)"], correct: 0, explanation: "أَنزَلَ: IV. bâb (أَفْعَلَ). نَزَلَ (indi, lâzım) → أَنزَلَ (indirdi, müteaddî). IV. bâb geçişli yapar.", relatedRoots: ["ن-ز-ل"] },
      { id: "L37-Q02", type: "single_choice", question: "خَيْرٌ مِنْ yapısında خَيْر ne tür bir kelimedir?", options: ["İsm-i tafdîl: أَخْيَر → خَيْر (hemze düşmüş) — 'daha hayırlı'", "İsm-i fâil", "Masdar: 'hayır/iyilik'", "Sıfat-ı müşebbehe"], correct: 0, explanation: "خَيْر: ism-i tafdîl (düzensiz form — أَخْيَر → خَيْر). مِنْ ile geldiğinde karşılaştırma: 'bin ayDAN daha hayırlı.'", relatedRoots: ["خ-ي-ر"] },
      { id: "L37-Q03", type: "bab_identify", targetWord: "تَنَزَّلُ", question: "تَنَزَّلُ hangi bâbtandır ve أَنزَلَ'den farkı nedir?", options: ["V. bâb: 'peyderpey/sürekli inme' — أَنزَلَ (IV): tek seferlik 'indirme'", "I. bâb: basit iniş", "II. bâb: yoğunlaştırarak indirme", "VII. bâb: kendiliğinden inme"], correct: 0, explanation: "تَنَزَّلَ: V. bâb (تَفَعَّلَ). II. bâbın (نَزَّلَ) mutâva'atı. Tedrîcîlik: gece boyunca sürekli melek inişi.", relatedRoots: ["ن-ز-ل"] },
      { id: "L37-Q04", type: "single_choice", question: "سَلَامٌ هِيَ yapısında neden haber önde?", options: ["Haber mukaddem: haberi öne alarak vurgulama → 'SELÂMETTİR o!'", "Gramer zorunluluğu", "Rastgele sıra", "هِيَ mübtedâ değil"], correct: 0, explanation: "Taqdîm: سَلَامٌ (haber) هِيَ (mübtedâ) önüne geçerek selâmet kavramını vurguluyor.", relatedRoots: ["س-ل-م"] },
      { id: "L37-Q05", type: "single_choice", question: "مَطْلَعِ kelimesi hangi sarf kalıbındadır?", options: ["مَفْعَل: ism-i zaman — طَلَعَ (doğdu) → مَطْلَع (doğuş zamanı/yeri)", "فَاعِل: ism-i fâil", "مَفْعُول: ism-i mef'ûl", "تَفْعِيل: II. bâb masdarı"], correct: 0, explanation: "مَطْلَع: مَفْعَل kalıbı → ism-i zaman. Burada zaman anlamında: fecrin doğuşuna kadar.", relatedRoots: ["ط-ل-ع"] },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DERS 38 — BEYYİNE SURESİ (98:1-8)
  // ═══════════════════════════════════════════════════════════
  {
    id: "L38-beyyine",
    title: "Beyyine Suresi (1-8)",
    titleAr: "سُورَةُ البَيِّنَةِ",
    stage: 2,
    level: 4,
    surah: 98,
    description: "Apaçık delil (بَيِّنَة). Ehl-i Kitab ve müşrikler. خَيْرُ البَرِيَّةِ ism-i tafdîl muzâf. V. bâb تَفَرَّقَ. مُخْلِصِينَ IV. bâb ism-i fâil.",
    verses: [
      {
        surah: 98, ayah: 1,
        arabic: "لَمْ يَكُنِ ٱلَّذِينَ كَفَرُوا۟ مِنْ أَهْلِ ٱلْكِتَـٰبِ وَٱلْمُشْرِكِينَ مُنفَكِّينَ حَتَّىٰ تَأْتِيَهُمُ ٱلْبَيِّنَةُ",
        translation: "Ehl-i Kitap ve müşriklerden inkâr edenler, kendilerine apaçık delil gelinceye kadar ayrılacak değillerdi.",
        words: [
          { arabic: "لَمْ", transliteration: "lem", root: null, pos: "harf", meaning_tr: "olumsuzluk", irab_short: "nefy-i mâzî" },
          { arabic: "يَكُنِ", transliteration: "yekun", root: "ك-و-ن", pos: "fil", meaning_tr: "olmadı", irab_short: "muzâri, meczûm" },
          { arabic: "ٱلَّذِينَ", transliteration: "ellezîne", root: null, pos: "ism", meaning_tr: "o kimseler ki", irab_short: "ism-i yekunin" },
          { arabic: "كَفَرُوا۟", transliteration: "keferû", root: "ك-ف-ر", pos: "fil", meaning_tr: "inkâr ettiler", irab_short: "mâzî, sıla" },
          { arabic: "مِنْ", transliteration: "min", root: null, pos: "harf", meaning_tr: "-den", irab_short: "harf-i cer, teb'îz" },
          { arabic: "أَهْلِ", transliteration: "ehli", root: null, pos: "ism", meaning_tr: "ehli", irab_short: "muzâf, mecrûr" },
          { arabic: "ٱلْكِتَـٰبِ", transliteration: "el-kitâbi", root: "ك-ت-ب", pos: "ism", meaning_tr: "kitabın", irab_short: "muzâfun ileyh" },
          { arabic: "وَ", transliteration: "wa", root: null, pos: "harf", meaning_tr: "ve", irab_short: "atıf" },
          { arabic: "ٱلْمُشْرِكِينَ", transliteration: "el-müşrikîne", root: "ش-ر-ك", pos: "ism", meaning_tr: "müşrikler", irab_short: "atıf, IV. bâb ism-i fâil" },
          { arabic: "مُنفَكِّينَ", transliteration: "munfekkîne", root: "ف-ك-ك", pos: "ism", meaning_tr: "ayrılacak olanlar", irab_short: "haber-i yekun, VII. bâb ism-i fâil" },
          { arabic: "حَتَّىٰ", transliteration: "hattâ", root: null, pos: "harf", meaning_tr: "-e kadar", irab_short: "gâye" },
          { arabic: "تَأْتِيَهُمُ", transliteration: "te'tiyehumü", root: "أ-ت-ي", pos: "fil", meaning_tr: "onlara geldi", irab_short: "muzâri, mansûb" },
          { arabic: "ٱلْبَيِّنَةُ", transliteration: "el-beyyinetu", root: "ب-ي-ن", pos: "ism", meaning_tr: "apaçık delil", irab_short: "fâil, merfû" },
        ],
      },
      {
        surah: 98, ayah: 5,
        arabic: "وَمَآ أُمِرُوٓا۟ إِلَّا لِيَعْبُدُوا۟ ٱللَّهَ مُخْلِصِينَ لَهُ ٱلدِّينَ حُنَفَآءَ",
        translation: "Onlara, dini yalnız O'na has kılarak hanîfler olarak Allah'a kulluk etmeleri emredilmişti.",
        words: [
          { arabic: "وَمَا", transliteration: "wemâ", root: null, pos: "harf", meaning_tr: "ve olmadı", irab_short: "vav + mâ nefy" },
          { arabic: "أُمِرُوا۟", transliteration: "umirû", root: "أ-م-ر", pos: "fil", meaning_tr: "emredildiler", irab_short: "mâzî, meçhûl, cem" },
          { arabic: "إِلَّا", transliteration: "illâ", root: null, pos: "harf", meaning_tr: "ancak", irab_short: "hasr (sadece)" },
          { arabic: "لِيَعْبُدُوا۟", transliteration: "li-ya'budû", root: "ع-ب-د", pos: "fil", meaning_tr: "kulluk etsinler diye", irab_short: "lâm-ı ta'lîl + muzâri mansûb" },
          { arabic: "ٱللَّهَ", transliteration: "Allâhe", root: "أ-ل-ه", pos: "ism", meaning_tr: "Allah'a", irab_short: "mef'ûlun bih" },
          { arabic: "مُخْلِصِينَ", transliteration: "muhlisîne", root: "خ-ل-ص", pos: "ism", meaning_tr: "samimiyetle has kılarak", irab_short: "hâl, IV. bâb ism-i fâil" },
          { arabic: "لَهُ", transliteration: "lehû", root: null, pos: "harf+zamir", meaning_tr: "O'na", irab_short: "lâm cer + هُ" },
          { arabic: "ٱلدِّينَ", transliteration: "ed-dîne", root: "د-ي-ن", pos: "ism", meaning_tr: "dini", irab_short: "mef'ûlun bih (ihlas'ın)" },
          { arabic: "حُنَفَآءَ", transliteration: "hunefâe", root: "ح-ن-ف", pos: "ism", meaning_tr: "hanîfler olarak", irab_short: "hâl, mansûb" },
        ],
      },
      {
        surah: 98, ayah: 7,
        arabic: "إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ أُو۟لَـٰٓئِكَ هُمْ خَيْرُ ٱلْبَرِيَّةِ",
        translation: "İman edip salih amel işleyenler — işte onlar yaratılmışların en hayırlısıdır.",
        words: [
          { arabic: "إِنَّ", transliteration: "inne", root: null, pos: "harf", meaning_tr: "şüphesiz", irab_short: "te'kîd" },
          { arabic: "ٱلَّذِينَ", transliteration: "ellezîne", root: null, pos: "ism", meaning_tr: "o kimseler ki", irab_short: "ism-i inne" },
          { arabic: "ءَامَنُوا۟", transliteration: "âmenû", root: "أ-م-ن", pos: "fil", meaning_tr: "iman ettiler", irab_short: "mâzî, IV. bâb" },
          { arabic: "وَعَمِلُوا۟", transliteration: "wa-amilû", root: "ع-م-ل", pos: "fil", meaning_tr: "ve işlediler", irab_short: "mâzî, atıf" },
          { arabic: "ٱلصَّـٰلِحَـٰتِ", transliteration: "es-sâlihâti", root: "ص-ل-ح", pos: "ism", meaning_tr: "sâlih ameller", irab_short: "mef'ûlun bih" },
          { arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulâike", root: null, pos: "ism", meaning_tr: "işte onlar", irab_short: "ism-i işâret, mübtedâ" },
          { arabic: "هُمْ", transliteration: "hum", root: null, pos: "zamir", meaning_tr: "onlar", irab_short: "zamîr-i fasl (ta'kîd)" },
          { arabic: "خَيْرُ", transliteration: "hayru", root: "خ-ي-ر", pos: "ism", meaning_tr: "en hayırlısı", irab_short: "haber, ism-i tafdîl, muzâf" },
          { arabic: "ٱلْبَرِيَّةِ", transliteration: "el-beriyyeti", root: "ب-ر-أ", pos: "ism", meaning_tr: "yaratılmışlar", irab_short: "muzâfun ileyh" },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "خَيْرُ البَرِيَّةِ — İsm-i Tafdîl Muzâf (EN)",
        explanation: "خَيْرُ البَرِيَّةِ: ism-i tafdîl (خَيْر) + muzâf → 'yaratılmışların EN hayırlısı.' L37'deki خَيْرٌ مِنْ (مِنْ ile = DAHA) ve L35'teki أَحْسَنِ تَقْوِيمٍ (muzâf = EN) ile karşılaştır. Üç surede üç farklı tafdîl kullanımı.",
        rule: "Muzâf tafdîl (أَفْعَل + isim): 'en ...' anlamı. مِنْ ile: 'daha ...' anlamı.",
        examples: ["خَيْرُ البَرِيَّةِ = yaratılmışların en hayırlısı", "أَحْسَنِ تَقْوِيمٍ = en güzel biçim", "خَيْرٌ مِنْ أَلْفِ شَهْرٍ = bin aydan daha hayırlı"],
      },
      {
        title: "مُخْلِصِينَ — IV. Bâb İsm-i Fâil (Hâl)",
        explanation: "مُخْلِصِينَ: IV. bâb ism-i fâil (مُفْعِل). خَلَصَ (arındı, I.) → أَخْلَصَ (samimiyetle has kıldı, IV.) → مُخْلِص (has kılan). Cümlede hâl (durum bildirme): 'dini O'na has kılarak' ibadet ediyorlar.",
        rule: "IV. bâb ism-i fâil: مُفْعِل kalıbı. Hâl olarak mansûb (çoğul: مُخْلِصِينَ).",
        examples: ["مُخْلِصِينَ لَهُ الدِّينَ = dini O'na has kılarak", "مُشْرِكِينَ = şirk koşanlar (IV. bâb)"],
      },
    ],
    exercises: [
      { id: "L38-Q01", type: "single_choice", question: "خَيْرُ البَرِيَّةِ ifadesinde خَيْر ne anlama gelir?", options: ["EN hayırlı (muzâf tafdîl)", "DAHA hayırlı (مِنْ ile)", "Hayır/iyilik (masdar)", "İyi yapan (ism-i fâil)"], correct: 0, explanation: "خَيْرُ البَرِيَّةِ: ism-i tafdîl muzâf. Muzâf olarak geldiğinde 'EN' anlamı verir. خَيْرٌ مِنْ (L37) ise 'DAHA' anlamında.", relatedRoots: ["خ-ي-ر"] },
      { id: "L38-Q02", type: "bab_identify", targetWord: "مُخْلِصِينَ", question: "مُخْلِصِينَ hangi bâbın ism-i fâili?", options: ["IV. bâb: خَلَصَ → أَخْلَصَ → مُخْلِص (has kılan)", "I. bâb: خَالِص", "II. bâb: مُخَلِّص", "V. bâb: مُتَخَلِّص"], correct: 0, explanation: "مُخْلِصِينَ: IV. bâb ism-i fâil (مُفْعِل kalıbı, çoğul mansûb). خَلَصَ (arındı) → أَخْلَصَ (samimiyetle has kıldı) → مُخْلِص.", relatedRoots: ["خ-ل-ص"] },
      { id: "L38-Q03", type: "single_choice", question: "بَيِّنَة kelimesi hangi kökten türemiştir?", options: ["ب-ي-ن: بَانَ (açık oldu) → بَيِّن (apaçık) → بَيِّنَة (apaçık delil)", "ب-ن-ي: yapı, bina", "ب-ي-ع: satış", "ب-ي-ت: ev, geceleme"], correct: 0, explanation: "بَيِّنَة: ب-ي-ن kökü. بَانَ (açık oldu) → بَيِّن (apaçık, sıfat) → بَيِّنَة (apaçık olan delil, ta'nîs ha'sı ile).", relatedRoots: ["ب-ي-ن"] },
      { id: "L38-Q04", type: "single_choice", question: "مُنفَكِّينَ kelimesi hangi bâbtan?", options: ["VII. bâb: فَكَّ → اِنْفَكَّ → مُنْفَكّ (ayrılan, kopan)", "I. bâb: فَاكّ", "II. bâb: مُفَكِّك", "VIII. bâb: مُفْتَكّ"], correct: 0, explanation: "مُنفَكِّينَ: VII. bâb ism-i fâil. فَكَّ (çözdü, I.) → اِنْفَكَّ (çözüldü, ayrıldı, VII.). VII. bâb: edilgen/dönüşlü anlam. L34'teki اِنْشَرَحَ ile aynı bâb.", relatedRoots: ["ف-ك-ك"] },
      { id: "L38-Q05", type: "single_choice", question: "L35-L38'de ism-i tafdîl kaç farklı şekilde kullanıldı?", options: ["Üç: muzâf=EN (أَحْسَنِ تَقْوِيمٍ, خَيْرُ البَرِيَّةِ), مِنْ ile=DAHA (خَيْرٌ مِنْ), mutlak (الأَكْرَمُ)", "Sadece muzâf", "Sadece مِنْ ile", "İki şekilde"], correct: 0, explanation: "Üç kullanım: (1) Muzâf: أَحْسَنِ تَقْوِيمٍ (L35), خَيْرُ البَرِيَّةِ (L38) → EN, (2) مِنْ ile: خَيْرٌ مِنْ أَلْفِ شَهْرٍ (L37) → DAHA, (3) Mutlak: الأَكْرَمُ (L36) → en cömert.", relatedRoots: ["ح-س-ن", "خ-ي-ر", "ك-ر-م"] },
    ],
  },
];

export default level4cLessons;
