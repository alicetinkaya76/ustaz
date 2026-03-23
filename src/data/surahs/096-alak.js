// ═══════════════════════════════════════════════════════════
// ALAK SURESİ (96) — Surah-Format Ders Dosyası
// v0.23.0: 3 bölüm (S96-B01 … S96-B03), 19 ayet tam kapsam
// ═══════════════════════════════════════════════════════════
//
// Cüz 30 (Amme), Mekkî, 19 ayet — İLK İNEN SURE
// Tematik: İlk vahiy (اِقْرَأْ), yaratılış + bilgi,
//          insanın tuğyanı, engelcinin kınanması,
//          secde emri + yakınlık
//
// Yapısal akış:
//   B01 (1-5):   İlk vahiy — yaratma + öğretme
//   B02 (6-14):  İnsanın tuğyanı + أَرَأَيْتَ inkârî soruları
//   B03 (15-19): Nâsiye tehdidi + secde + iqtirab
// ═══════════════════════════════════════════════════════════

import {
  generateRootQuiz,
  generateBabQuiz,
  generateWaznQuiz,
  generateFillBlank,
  generateBalaghaQuiz,
  generateIrabQuiz,
} from "../../utils/quizGenerator.js";

const alakLessons = [
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 1 — ALAK 96:1-5 — İlk Vahiy: Yaratma + Öğretme
  // ═══════════════════════════════════════════════════════════
  {
    id: "S96-B01-alak",
    title: "Alak (1-5) — İqra': İlk Vahiy",
    titleAr: "سُورَةُ العَلَق ١-٥",
    stage: 2,
    level: 8,
    surah: 96,
    description:
      "Kur'an'ın ilk inen ayetleri. اِقْرَأْ emri (×2), خَلَقَ (×2), عَلَّمَ (×2) tekrar yapısı. Yaratılıştan bilgiye tedricî geçiş. Mehmûz fiil, II. bâb ta'diye, ism-i tafdîl (الأَكْرَم).",
    verses: [
      {
        surah: 96, ayah: 1,
        arabic: "ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ",
        translation: "Yaratan Rabbinin adıyla oku!",
        words: [
          { arabic: "ٱقْرَأْ", transliteration: "iqraʾ", root: "ق-ر-أ", pos: "fil", meaning_tr: "oku!", irab: "{Fiil-i emr}, I. bâb. Mehmûz fiil (son harf hemze). Kur'an'ın ilk emri.", irab_short: "emr, I. bâb, mehmûz", turkish_bridge: "Kur'an (okunan), kıraat bu kökten", balagha_note: "Kur'an'ın ilk kelimesi: oku. İlahi pedagojinin başlangıcı. İkinci tekrarı (3. ayet) gerekçeyle gelir." },
          { arabic: "بِٱسْمِ", transliteration: "bismi", root: "س-م-و", pos: "ism", meaning_tr: "adıyla", irab: "بِ {harf-i cer} + اسْمِ {mecrûr, muzâf}.", irab_short: "câr-mecrûr, muzâf", turkish_bridge: "İsim, tesmiye bu kökten", balagha_note: null },
          { arabic: "رَبِّكَ", transliteration: "rabbika", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbinin", irab: "{Muzâfun ileyh}, {mecrûr} + كَ zamîr.", irab_short: "muzâfun ileyh, mecrûr", turkish_bridge: "Rabb, terbiye bu kökten", balagha_note: null },
          { arabic: "ٱلَّذِى", transliteration: "allaḏī", root: null, pos: "ism", meaning_tr: "o ki", irab: "{İsm-i mevsûl}, رَبِّكَ'nin sıfatı.", irab_short: "ism-i mevsûl, sıfat", turkish_bridge: null, balagha_note: null },
          { arabic: "خَلَقَ", transliteration: "ḫalaqa", root: "خ-ل-ق", pos: "fil", meaning_tr: "yarattı", irab: "{Fiil-i mâzî}, I. bâb. Sıla cümlesi. Mef'ûl hazf edilmiş (her şeyi).", irab_short: "mâzî, I. bâb; mef'ûl hazf", turkish_bridge: "Halk, hilkat, ahlâk bu kökten", balagha_note: "1. خَلَقَ: mutlak (mef'ûl yok = her şeyi yarattı). 2. خَلَقَ (2. ayet): özel (insanı alak'tan). Genelden özele tedricî geçiş." },
        ],
      },
      {
        surah: 96, ayah: 2,
        arabic: "خَلَقَ ٱلْإِنسَـٰنَ مِنْ عَلَقٍ",
        translation: "İnsanı alak'tan (asılı embriyodan) yarattı.",
        words: [
          { arabic: "خَلَقَ", transliteration: "ḫalaqa", root: "خ-ل-ق", pos: "fil", meaning_tr: "yarattı", irab: "{Fiil-i mâzî}, I. bâb. Birden fazla vecih: (1) te'kîd li'l-fi'l al-evvel (ilk خَلَقَ'i pekiştirme), (2) bedel (ilk fiilden bedel — genel yaratılıştan insanın yaratılışına özelleştirme), (3) tefsîriye/istinâf (yeni cümle). Yâkût: 'ta'kîd + sıla'yı tercih eder.", irab_short: "mâzî, te'kîd/bedel", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلْإِنسَـٰنَ", transliteration: "al-insāna", root: "أ-ن-س", pos: "ism", meaning_tr: "insanı", irab: "{Mef'ûl bih}, {mensûb}.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "İnsan, üns, ünsiyet bu kökten", balagha_note: null },
          { arabic: "مِنْ", transliteration: "min", root: null, pos: "harf", meaning_tr: "-den (ibtidâ)", irab: "{Harf-i cer}: menşe (nereden yaratıldığı).", irab_short: "harf-i cer", turkish_bridge: null, balagha_note: null },
          { arabic: "عَلَقٍ", transliteration: "ʿalaqin", root: "ع-ل-ق", pattern: "فَعَل", pos: "ism", meaning_tr: "asılı kan pıhtısı, embriyo", irab: "{Mecrûr} (مِنْ ile). عَلَق: asılmak, yapışmak kökünden.", irab_short: "mecrûr", turkish_bridge: "Alâka (bağlantı, ilgi) bu kökten", balagha_note: "İnsanın en mütevazı başlangıcı: kan pıhtısı. Sonra 'oku' denilmesi → yaratılışın alçakgönüllülüğünden bilginin yüceliğine." },
        ],
      },
      {
        surah: 96, ayah: 3,
        arabic: "ٱقْرَأْ وَرَبُّكَ ٱلْأَكْرَمُ",
        translation: "Oku! Rabbin en cömert olandır.",
        words: [
          { arabic: "ٱقْرَأْ", transliteration: "iqraʾ", root: "ق-ر-أ", pos: "fil", meaning_tr: "oku!", irab: "{Fiil-i emr}, 2. tekrar. Yeni bilgi ekleniyor: gerekçeyle.", irab_short: "emr, tekrar", turkish_bridge: null, balagha_note: "1. اِقْرَأْ: mutlak emr. 2. اِقْرَأْ: ta'lîl ile — 'Rabbin en cömert, o halde oku!' Tekrar değil, derinleşme." },
          { arabic: "وَرَبُّكَ", transliteration: "wa rabbuka", root: "ر-ب-ب", pos: "ism", meaning_tr: "ve Rabbin", irab: "وَ {hâliyye veya isti'nâf} + رَبُّكَ {mübtedâ}, {merfû}.", irab_short: "mübtedâ, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلْأَكْرَمُ", transliteration: "al-akramu", root: "ك-ر-م", pattern: "أَفْعَل", pos: "ism", meaning_tr: "en cömert, en kerem sahibi", irab: "{Haber}, {merfû}. أَفْعَل: ism-i tafdîl. Elif-lâm ile mutlak tafdîl → en cömert (karşılaştırmasız).", irab_short: "haber, merfû, ism-i tafdîl", turkish_bridge: "Kerem, kerîm, ikrâm bu kökten", balagha_note: "الأَكْرَمُ: mutlak en cömert. İnfitâr 82:6'da الكَرِيمِ → aynı kök, orada sıfat-ı müşebbehe, burada ism-i tafdîl (daha yüksek derece)." },
        ],
      },
      {
        surah: 96, ayah: 4,
        arabic: "ٱلَّذِى عَلَّمَ بِٱلْقَلَمِ",
        translation: "Kalemle öğreten,",
        words: [
          { arabic: "ٱلَّذِى", transliteration: "allaḏī", root: null, pos: "ism", meaning_tr: "o ki", irab: "{İsm-i mevsûl}, sıfat (الأَكْرَمُ'e) veya isti'nâf.", irab_short: "ism-i mevsûl", turkish_bridge: null, balagha_note: null },
          { arabic: "عَلَّمَ", transliteration: "ʿallama", root: "ع-ل-م", pattern: "فَعَّلَ", pos: "fil", meaning_tr: "öğretti", irab: "{Fiil-i mâzî}, II. bâb (تَعْلِيم). Ta'diye: عَلِمَ (bildi) → عَلَّمَ (bildirdi/öğretti). İki mef'ûl alır ama burada mef'ûl-1 hazf.", irab_short: "mâzî, II. bâb", turkish_bridge: "İlim, ta'lîm, muallim bu kökten", balagha_note: "1. عَلَّمَ (4. ayet): araçla (بِالقَلَم). 2. عَلَّمَ (5. ayet): mutlak (bilmediğini). Tedricî: araç → sınırsız bilgi." },
          { arabic: "بِٱلْقَلَمِ", transliteration: "bil-qalami", root: "ق-ل-م", pos: "ism", meaning_tr: "kalemle", irab: "بِ {harf-i cer, âlet} + القَلَمِ {mecrûr}.", irab_short: "câr-mecrûr, âlet", turkish_bridge: "Kalem, kelime (bazı görüşlere göre) bu kökten", balagha_note: "Kalem: yazının, medeniyetin ve bilginin sembolü. İlahi ta'lîmin aracı olarak kalem seçilmiş." },
        ],
      },
      {
        surah: 96, ayah: 5,
        arabic: "عَلَّمَ ٱلْإِنسَـٰنَ مَا لَمْ يَعْلَمْ",
        translation: "İnsana bilmediğini öğretti.",
        words: [
          { arabic: "عَلَّمَ", transliteration: "ʿallama", root: "ع-ل-م", pattern: "فَعَّلَ", pos: "fil", meaning_tr: "öğretti", irab: "{Fiil-i mâzî}, II. bâb. Cümle: bedel (4. ayetteki عَلَّمَ بِالقَلَمِ cümlesinden bedel — araçlı öğretimden araçsız/mutlak öğretime geçiş).", irab_short: "mâzî, II. bâb, bedel", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلْإِنسَـٰنَ", transliteration: "al-insāna", root: "أ-ن-س", pos: "ism", meaning_tr: "insana", irab: "{Mef'ûl bih 1}, {mensûb}.", irab_short: "mef'ûl-1, mensûb", turkish_bridge: null, balagha_note: null },
          { arabic: "مَا", transliteration: "mā", root: null, pos: "ism", meaning_tr: "şeyleri, ne", irab: "{İsm-i mevsûl}, {mef'ûl bih 2}. 'Bilmediği şeyleri.'", irab_short: "ism-i mevsûl, mef'ûl-2", turkish_bridge: null, balagha_note: null },
          { arabic: "لَمْ", transliteration: "lam", root: null, pos: "harf", meaning_tr: "-madı, bilmedi", irab: "{Harf-i cezm}: mâzîyi nefy eder.", irab_short: "harf-i cezm", turkish_bridge: null, balagha_note: null },
          { arabic: "يَعْلَمْ", transliteration: "yaʿlam", root: "ع-ل-م", pos: "fil", meaning_tr: "bildi, biliyor", irab: "{Fiil-i muzâri}, {meczûm} (لَمْ ile). Sıla cümlesi.", irab_short: "muzâri, meczûm", turkish_bridge: null, balagha_note: "ع-ل-م kökü 3 kez: عَلَّمَ × 2 (öğretti, 4-5) + يَعْلَمْ (bildi, 5). Kök tekrarı (cinas-ı iştikâk) ile bilgi kavramı yoğunlaştırılır." },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "Tekrar Yapısı: خَلَقَ×2, عَلَّمَ×2, اِقْرَأْ×2",
        explanation: "Sure üç fiili ikişer kez tekrarlar. Her tekrarda yeni bilgi eklenir: (1) خَلَقَ: genel → özel (insanı alak'tan). (2) عَلَّمَ: araçla (kalemle) → mutlak (bilmediğini). (3) اِقْرَأْ: mutlak emr → gerekçeli (Rabbin en cömert). Bu tedricî yapı ilahi pedagojinin özeti.",
        rule: "خَلَقَ×2: genel (1) → özel (2: insanı alak'tan)\nعَلَّمَ×2: araçla (4: kalemle) → mutlak (5: bilmediğini)\nاِقْرَأْ×2: emr (1) → ta'lîl ile (3: Rabbin en cömert)",
        examples: ["خَلَقَ...خَلَقَ الإِنْسَانَ — 96:1-2", "عَلَّمَ بِالقَلَمِ...عَلَّمَ الإِنْسَانَ — 96:4-5", "اِقْرَأْ...اِقْرَأْ وَرَبُّكَ — 96:1, 96:3"],
      },
      {
        title: "II. Bâb Ta'diye: عَلِمَ → عَلَّمَ",
        explanation: "II. bâb (فَعَّلَ) en önemli işlevlerinden biri ta'diye: lâzım fiili müteaddî yapmak. عَلِمَ (bildi, I. bâb) → عَلَّمَ (bildirdi/öğretti, II. bâb). II. bâb iki mef'ûl alabilir: عَلَّمَ الإِنسَانَ (1. mef'ûl) مَا لَمْ يَعْلَمْ (2. mef'ûl).",
        rule: "عَلِمَ (lâzım: bildi) → عَلَّمَ (müteaddî: öğretti)\nII. bâb ta'diye: fiili geçişli yapar\n2 mef'ûl: عَلَّمَ + mef'ûl-1 (kimi) + mef'ûl-2 (neyi)",
        examples: ["عَلَّمَ الإِنسَانَ مَا لَمْ يَعْلَمْ — 96:5", "عَلَّمَ آدَمَ الأَسْمَاءَ كُلَّهَا — 2:31", "عَلَّمَ القُرْآنَ — 55:2"],
      },
    ],
    exercises: [
      generateRootQuiz(
        "S96-B01-Q01", "ٱقْرَأْ", "ق-ر-أ",
        ["ق-ر-ب", "ق-ر-ن", "ق-ر-ع"],
        "اِقْرَأْ: ق-ر-أ kökünden I. bâb emr. Mehmûz fiil (son harf hemze). Kur'an, kıraat, kâri' hep bu kökten. Kur'an'ın ilk emri ve ilk kelimesi.",
        ["ق-ر-أ"]
      ),
      generateBabQuiz(
        "S96-B01-Q02", "عَلَّمَ",
        "II. bâb (فَعَّلَ): عَلِمَ → عَلَّمَ (ta'diye: bilgi verme)",
        ["I. bâb (فَعَلَ): عَلَمَ", "IV. bâb (أَفْعَلَ): أَعْلَمَ", "V. bâb (تَفَعَّلَ): تَعَلَّمَ"],
        "عَلَّمَ: ع-ل-م kökünden II. bâb (تَفْعِيل). I. bâb عَلِمَ (bildi) → II. bâb عَلَّمَ (bildirdi, öğretti). Ta'diye (geçişli yapma) ve teksîr (çokluk) anlamı taşır.",
        ["ع-ل-م"]
      ),
      generateBalaghaQuiz(
        "S96-B01-Q03",
        "اِقْرَأْ fiilinin 1. ve 3. ayetlerde iki kez tekrarlanmasının belâgat hikmeti nedir?",
        "İlk tekrar: mutlak emr; ikinci tekrar: ta'lîl (gerekçe) ile — 'Rabbin en cömert, o halde oku!'",
        ["Sadece te'kîd (vurgu) amaçlı tekrar", "İlki geçmiş, ikincisi gelecek zamanı ifade eder", "Farklı fiillerdir"],
        "1. اِقْرَأْ (96:1) mutlak emirdir. 2. اِقْرَأْ (96:3) ise وَرَبُّكَ الأَكْرَمُ cümlesiyle gerekçelendirilir: 'Oku, çünkü Rabbin en cömert.' İkinci tekrar yeni bilgi ekler."
      ),
      generateIrabQuiz(
        "S96-B01-Q04", "ٱلْأَكْرَمُ",
        "Haber (merfû) — رَبُّكَ'nin haberi; ism-i tafdîl (أَفْعَل)",
        ["Mübtedâ (merfû)", "Sıfat (merfû)", "Fâil (merfû)"],
        "وَرَبُّكَ الأَكْرَمُ: رَبُّكَ mübtedâ, الأَكْرَمُ haber. أَفْعَل kalıbında ism-i tafdîl. Elif-lâm ile mutlak tafdîl → 'en cömert' (karşılaştırma nesnesi yok).",
        ["ك-ر-م"]
      ),
      {
        id: "S96-B01-Q05", type: "single_choice",
        question: "خَلَقَ fiili 1. ayette mef'ûlsüz, 2. ayette mef'ûllü kullanılmıştır. Bu farkın sebebi nedir?",
        options: [
          "1. ayet genel (her şeyi yarattı — mef'ûl hazf), 2. ayet özel (insanı alak'tan). Tedricî yapı: genelden özele.",
          "1. ayette Allah yarattı, 2. ayette melekler yarattı",
          "İkisi aynı anlama gelir, üslûp çeşitliliği",
          "1. ayet geçmiş, 2. ayet gelecek zaman",
        ],
        correct: 0,
        explanation: "1. خَلَقَ: mef'ûl hazf edilmiş → genellik (her şeyi yaratan). 2. خَلَقَ الإِنسَانَ مِنْ عَلَقٍ: özel (insanı, belirli malzemeden). Hazf (düşürme) genellik ifade eder, zikr (belirtme) özelleştirme sağlar.",
        relatedRoots: ["خ-ل-ق"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 2 — ALAK 96:6-14 — İnsanın Tuğyanı ve Engelcinin Kınanması
  // ═══════════════════════════════════════════════════════════
  {
    id: "S96-B02-alak",
    title: "Alak (6-14) — Tuğyan ve أَرَأَيْتَ Sorgulaması",
    titleAr: "سُورَةُ العَلَق ٦-١٤",
    stage: 2,
    level: 8,
    surah: 96,
    description:
      "كَلَّا ile geçiş: nimetten tuğyana. İnsanın istiğnâsı, Rab'be dönüş hatırlatması. أَرَأَيْتَ üçlü sorgulaması: engel olanın kınanması. X. bâb (اِسْتَغْنَى), nâkıs fiil (يَطْغَى), istifhâm-ı inkârî.",
    verses: [
      {
        surah: 96, ayah: 6,
        arabic: "كَلَّآ إِنَّ ٱلْإِنسَـٰنَ لَيَطْغَىٰٓ",
        translation: "Hayır! İnsan mutlaka azar,",
        words: [
          { arabic: "كَلَّآ", transliteration: "kallā", root: null, pos: "harf", meaning_tr: "hayır, asla", irab: "{Reddi harf, zecr ve intikal}. 1-5. ayetlerdeki nimet anlatımından tuğyan uyarısına geçiş.", irab_short: "red + intikal", turkish_bridge: null, balagha_note: "كَلَّا sadece Mekkî surelerde (33 kez). İki işlev: (1) zecr (red), (2) intikal (konu geçişi). Burada: nimet → tuğyan." },
          { arabic: "إِنَّ", transliteration: "inna", root: null, pos: "harf", meaning_tr: "muhakkak", irab: "{Te'kîd harfi}.", irab_short: "te'kîd", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلْإِنسَـٰنَ", transliteration: "al-insāna", root: "أ-ن-س", pos: "ism", meaning_tr: "insan", irab: "{İsm-i inne}, {mensûb}.", irab_short: "ism-i inne, mensûb", turkish_bridge: null, balagha_note: null },
          { arabic: "لَيَطْغَىٰٓ", transliteration: "la-yaṭġā", root: "ط-غ-ي", pos: "fil", meaning_tr: "azar, taşkınlık yapar", irab: "لَ {lâm-ı te'kîd} + يَطْغَى {fiil-i muzâri}, I. bâb, nâkıs fiil (son harf ي). Cümle: {haber-i inne}.", irab_short: "muzâri, nâkıs, haber-i inne", turkish_bridge: "Tuğyân (azgınlık), tâğût bu kökten", balagha_note: "إِنَّ + لَ: çift te'kîd. İnsanın azması kesin bir gerçeklik olarak sunuluyor." },
        ],
      },
      {
        surah: 96, ayah: 7,
        arabic: "أَن رَّءَاهُ ٱسْتَغْنَىٰٓ",
        translation: "Kendini müstağnî gördüğü için.",
        words: [
          { arabic: "أَن", transliteration: "an", root: null, pos: "harf", meaning_tr: "…diye, çünkü", irab: "{Harf-i masdarî}: sebebiye. 'Kendini müstağnî gördüğü için azar.'", irab_short: "harf-i masdarî, sebebiye", turkish_bridge: null, balagha_note: null },
          { arabic: "رَّءَاهُ", transliteration: "raʾāhu", root: "ر-أ-ي", pos: "fil", meaning_tr: "kendini gördü", irab: "{Fiil-i mâzî}, I. bâb. رَأَى burada 'zannetmek' anlamında → iki mef'ûl alır (ظَنَّ grubu). هُ: {mef'ûl bih 1} (= kendini).", irab_short: "mâzî, I. bâb, iki mef'ûllü", turkish_bridge: "Re'y (görüş), rü'yet bu kökten", balagha_note: null },
          { arabic: "ٱسْتَغْنَىٰٓ", transliteration: "istaġnā", root: "غ-ن-ي", pattern: "اِسْتَفْعَلَ", pos: "fil", meaning_tr: "kendini müstağnî gördü", irab: "{Fiil-i mâzî}, X. bâb. Cümle mahallen mensûb: {mef'ûl bih 2} (رَأَى'nın ikinci mef'ûlü). غَنِيَ (zengin oldu, I.) → اِسْتَغْنَى (zenginlik tasladı / kendini yeterli gördü, X.).", irab_short: "mâzî, X. bâb, mef'ûl bih-2", turkish_bridge: "Ganî, istiğnâ, müstağnî bu kökten", balagha_note: "X. bâb burada 'talep' değil 'kendini öyle zannetme': اسْتَغْنَى = kendini Allah'tan müstağnî saydı. Tuğyanın sebebi: istiğnâ." },
        ],
      },
      {
        surah: 96, ayah: 8,
        arabic: "إِنَّ إِلَىٰ رَبِّكَ ٱلرُّجْعَىٰٓ",
        translation: "Muhakkak dönüş Rabbinedir.",
        words: [
          { arabic: "إِنَّ", transliteration: "inna", root: null, pos: "harf", meaning_tr: "muhakkak", irab: "{Te'kîd harfi}.", irab_short: "te'kîd", turkish_bridge: null, balagha_note: null },
          { arabic: "إِلَىٰ", transliteration: "ilā", root: null, pos: "harf", meaning_tr: "…e doğru", irab: "{Harf-i cer}: intihâ (varış noktası).", irab_short: "harf-i cer", turkish_bridge: null, balagha_note: null },
          { arabic: "رَبِّكَ", transliteration: "rabbika", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbine", irab: "{Mecrûr}. إِلَى رَبِّكَ: {haber-i inne} (mukaddem).", irab_short: "mecrûr, haber-i inne", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلرُّجْعَىٰٓ", transliteration: "ar-rujʿā", root: "ر-ج-ع", pattern: "فُعْلَى", pos: "ism", meaning_tr: "dönüş", irab: "{İsm-i inne}, {merfû}. Masdar-ı merra veya ism-i ma'nâ: dönüş.", irab_short: "ism-i inne, merfû", turkish_bridge: "Rücû (dönüş), müracaat, irca' bu kökten", balagha_note: "Kısa, kesin bir uyarı: ne kadar müstağnî hissederse hissetsin, dönüş Rabb'edir. İstiğnâ illüzyondur." },
        ],
      },
      {
        surah: 96, ayah: 9,
        arabic: "أَرَءَيْتَ ٱلَّذِى يَنْهَىٰ",
        translation: "Gördün mü o engel olanı,",
        words: [
          { arabic: "أَرَءَيْتَ", transliteration: "araʾayta", root: "ر-أ-ي", pos: "fil", meaning_tr: "gördün mü", irab: "أ {istifhâm} + رَأَيْتَ {fiil-i mâzî}. Ta'accüb/inkâr: 'Şu adama bak!'", irab_short: "istifhâm + mâzî", turkish_bridge: null, balagha_note: "أَرَأَيْتَ: üç kez tekrarlanır (9, 11, 13). Her biri engelcinin farklı bir yönünü sorguluyor. Üçlü istifhâm zinciri." },
          { arabic: "ٱلَّذِى", transliteration: "allaḏī", root: null, pos: "ism", meaning_tr: "o ki, o kişi", irab: "{İsm-i mevsûl}, {mef'ûl bih}.", irab_short: "ism-i mevsûl, mef'ûl", turkish_bridge: null, balagha_note: null },
          { arabic: "يَنْهَىٰ", transliteration: "yanhā", root: "ن-ه-ي", pos: "fil", meaning_tr: "engel olur, nehyeder", irab: "{Fiil-i muzâri}, I. bâb, nâkıs. Sıla cümlesi. Mef'ûl: sonraki ayette.", irab_short: "muzâri, I. bâb, sıla", turkish_bridge: "Nehy (yasaklama), münâhî bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 96, ayah: 10,
        arabic: "عَبْدًا إِذَا صَلَّىٰ",
        translation: "Namaz kıldığında bir kulu (engelleyeni)?",
        words: [
          { arabic: "عَبْدًا", transliteration: "ʿabdan", root: "ع-ب-د", pos: "ism", meaning_tr: "bir kulu", irab: "{Mef'ûl bih} (يَنْهَى'nın). {Mensûb}. Nekre: 'herhangi bir kul' — Hz. Peygamber kastedilir.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Abd, ibâdet, ma'bud bu kökten", balagha_note: "Hz. Peygamber 'abd' (kul) olarak anılıyor → en yüce makamda bile 'kulluk' sıfatı. İsrâ 17:1'de de 'abdihi.'" },
          { arabic: "إِذَا", transliteration: "iḏā", root: null, pos: "harf", meaning_tr: "…olduğu zaman", irab: "{Şart zarfı}: namaz vakti.", irab_short: "şart zarfı", turkish_bridge: null, balagha_note: null },
          { arabic: "صَلَّىٰ", transliteration: "ṣallā", root: "ص-ل-و", pattern: "فَعَّلَ", pos: "fil", meaning_tr: "namaz kıldı", irab: "{Fiil-i mâzî}, II. bâb. Nâkıs fiil (son harf و/ي).", irab_short: "mâzî, II. bâb, nâkıs", turkish_bridge: "Salât (namaz), musallâ bu kökten", balagha_note: "Engelcinin engellediği eylem: salât (namaz). Allah'a en yakın an engelleniyor → günahın büyüklüğü." },
        ],
      },
      {
        surah: 96, ayah: 11,
        arabic: "أَرَءَيْتَ إِن كَانَ عَلَى ٱلْهُدَىٰ",
        translation: "Söyle bana, ya o (namaz kılan) doğru yolda ise?",
        words: [
          { arabic: "أَرَءَيْتَ", transliteration: "araʾayta", root: "ر-أ-ي", pos: "fil", meaning_tr: "gördün mü / söyle bana", irab: "İstifhâm + mâzî. 2. أَرَأَيْتَ: 'Ya şu duruma ne dersin?'", irab_short: "istifhâm + mâzî", turkish_bridge: null, balagha_note: null },
          { arabic: "إِن", transliteration: "in", root: null, pos: "harf", meaning_tr: "eğer", irab: "{Şart edatı}: ihtimali belirtir.", irab_short: "şart", turkish_bridge: null, balagha_note: null },
          { arabic: "كَانَ", transliteration: "kāna", root: "ك-و-ن", pos: "fil", meaning_tr: "idi, ise", irab: "{Fiil-i nâkıs}, şart cümlesi. {İsm-i kâne}: müstetir هُوَ (namaz kılan).", irab_short: "nâkıs fiil, şart", turkish_bridge: null, balagha_note: null },
          { arabic: "عَلَى", transliteration: "ʿalā", root: null, pos: "harf", meaning_tr: "üzerinde", irab: "{Harf-i cer}.", irab_short: "harf-i cer", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلْهُدَىٰ", transliteration: "al-hudā", root: "ه-د-ي", pos: "ism", meaning_tr: "doğru yol, hidâyet", irab: "{Mecrûr}. Masdar: hidâyet. عَلَى الهُدَى = hidayet üzere.", irab_short: "mecrûr", turkish_bridge: "Hüdâ, hidâyet, mehdi bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 96, ayah: 12,
        arabic: "أَوْ أَمَرَ بِٱلتَّقْوَىٰ",
        translation: "Veya takvâyı emrediyorsa?",
        words: [
          { arabic: "أَوْ", transliteration: "aw", root: null, pos: "harf", meaning_tr: "veya", irab: "{Atıf harfi}: tercih/alternatif.", irab_short: "atıf", turkish_bridge: null, balagha_note: null },
          { arabic: "أَمَرَ", transliteration: "amara", root: "أ-م-ر", pos: "fil", meaning_tr: "emretti", irab: "{Fiil-i mâzî}, I. bâb.", irab_short: "mâzî, I. bâb", turkish_bridge: "Emr, emir, me'mur bu kökten", balagha_note: null },
          { arabic: "بِٱلتَّقْوَىٰ", transliteration: "bi-t-taqwā", root: "و-ق-ي", pos: "ism", meaning_tr: "takvâ ile", irab: "بِ {harf-i cer} + التَّقْوَى {mecrûr}. Masdar: korunma, sakınma.", irab_short: "câr-mecrûr", turkish_bridge: "Takvâ, ittikâ, muttakî bu kökten", balagha_note: "Hidayet üzere olan ve takvâyı emreden bir kul → namaz kılanın iki niteliği. Buna rağmen engellenmesi ne büyük zulüm." },
        ],
      },
      {
        surah: 96, ayah: 13,
        arabic: "أَرَءَيْتَ إِن كَذَّبَ وَتَوَلَّىٰ",
        translation: "Ya o (engelci) yalanlayıp yüz çevirmişse?",
        words: [
          { arabic: "أَرَءَيْتَ", transliteration: "araʾayta", root: "ر-أ-ي", pos: "fil", meaning_tr: "gördün mü", irab: "3. أَرَأَيْتَ: engelcinin durumu.", irab_short: "istifhâm + mâzî", turkish_bridge: null, balagha_note: "3. ve son أَرَأَيْتَ: engelciye dönüyor. Üçlü yapı: (1) engel olanı gördün mü? (2) ya namaz kılan haklıysa? (3) ya engelci yalancıysa?" },
          { arabic: "إِن", transliteration: "in", root: null, pos: "harf", meaning_tr: "eğer", irab_short: "şart", turkish_bridge: null, balagha_note: null },
          { arabic: "كَذَّبَ", transliteration: "kaḏḏaba", root: "ك-ذ-ب", pattern: "فَعَّلَ", pos: "fil", meaning_tr: "yalanladı", irab: "{Fiil-i mâzî}, II. bâb (تَكْذِيب). كَذَبَ (yalan söyledi) → كَذَّبَ (yalanladı).", irab_short: "mâzî, II. bâb", turkish_bridge: "Tekzîb (yalanlama) bu kökten", balagha_note: null },
          { arabic: "وَتَوَلَّىٰ", transliteration: "wa tawallā", root: "و-ل-ي", pattern: "تَفَعَّلَ", pos: "fil", meaning_tr: "ve yüz çevirdi", irab: "وَ {atıf} + تَوَلَّى {fiil-i mâzî}, V. bâb.", irab_short: "mâzî, V. bâb", turkish_bridge: "Velî, mevlâ bu kökten", balagha_note: "كَذَّبَ وَتَوَلَّى: Abese 80:1'de aynı fiil çifti Hz. Peygamber bağlamında (عَبَسَ وَتَوَلَّى). Orada yüz çeviren Peygamber (uyarıyla), burada münkir." },
        ],
      },
      {
        surah: 96, ayah: 14,
        arabic: "أَلَمْ يَعْلَم بِأَنَّ ٱللَّهَ يَرَىٰ",
        translation: "O bilmiyor mu ki Allah görür?",
        words: [
          { arabic: "أَلَمْ", transliteration: "alam", root: null, pos: "harf", meaning_tr: "…medi mi", irab: "أ {istifhâm} + لَمْ {harf-i cezm, nefiy}. İstifhâm-ı inkârî: 'bilmiyor mu?!' = 'bilmesi gerekirdi!'", irab_short: "istifhâm-ı inkârî", turkish_bridge: null, balagha_note: null },
          { arabic: "يَعْلَم", transliteration: "yaʿlam", root: "ع-ل-م", pos: "fil", meaning_tr: "bilir, biliyor", irab: "{Fiil-i muzâri}, {meczûm} (لَمْ ile).", irab_short: "muzâri, meczûm", turkish_bridge: null, balagha_note: null },
          { arabic: "بِأَنَّ", transliteration: "bi-anna", root: null, pos: "harf", meaning_tr: "…olduğunu", irab: "بِ {harf-i cer} + أَنَّ {harf-i masdarî, te'kîd}.", irab_short: "cer + masdariye", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱللَّهَ", transliteration: "Allāha", root: "أ-ل-ه", pos: "ism", meaning_tr: "Allah'ın", irab: "{İsm-i enne}, {mensûb}.", irab_short: "ism-i enne, mensûb", turkish_bridge: null, balagha_note: null },
          { arabic: "يَرَىٰ", transliteration: "yarā", root: "ر-أ-ي", pos: "fil", meaning_tr: "görür", irab: "{Fiil-i muzâri}, {haber-i enne}. Nâkıs fiil (son harf ي).", irab_short: "muzâri, haber-i enne", turkish_bridge: null, balagha_note: "Surenin dönüm noktası: 'Allah görür.' أَرَأَيْتَ (gördün mü) × 3 sorusu → أَلَمْ يَعْلَم بِأَنَّ اللَّهَ يَرَى (Allah'ın gördüğünü bilmiyor mu?). Görme fiili (ر-أ-ي) insandan Allah'a geçiyor." },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "كَلَّا — Red ve Geçiş Edatı",
        explanation: "كَلَّا Kur'an'da 33 kez, yalnız Mekkî surelerde geçer. İki işlevi: (1) Zecr (red/uyarı): 'Hayır, asla!' (2) İntikal: konudan konuya geçiş. Alak'ta 6. ayetteki كَلَّا nimet'ten tuğyana, 19. ayetteki كَلَّا tehditten emre geçiş sağlar.",
        rule: "كَلَّا = red + geçiş edatı\nSadece Mekkî surelerde (33 kez)\nAlak: 6. ayet (nimet → tuğyan) + 19. ayet (tehdit → emr)",
        examples: ["كَلَّا إِنَّ الإِنسَانَ لَيَطْغَى — 96:6", "كَلَّا لَا تُطِعْهُ — 96:19", "كَلَّا سَوْفَ تَعْلَمُونَ — 102:3"],
      },
      {
        title: "X. Bâb (اِسْتِفْعَال): اِسْتَغْنَى",
        explanation: "X. bâb'ın ana anlamları: (1) talep (اِسْتَخْرَجَ = çıkarmayı istedi), (2) kendini öyle zannetme (اِسْتَغْنَى = kendini müstağnî sandı), (3) dönüşüm (اِسْتَحْجَرَ = taşlaştı). Burada 2. anlam: gerçekte müstağnî olmadığı halde kendini öyle görmesi.",
        rule: "X. bâb: اِسْتَفْعَلَ / يَسْتَفْعِلُ\n1) Talep: اِسْتَغْفَرَ = bağışlanma istedi\n2) Zannetme: اِسْتَغْنَى = kendini zengin sandı\n3) Dönüşüm: اِسْتَحْجَرَ = taş gibi oldu",
        examples: ["اِسْتَغْنَى — kendini müstağnî sandı (96:7)", "اِسْتَغْفَرَ — bağışlanma istedi", "اِسْتَكْبَرَ — büyüklük tasladı"],
      },
    ],
    exercises: [
      generateBabQuiz(
        "S96-B02-Q01", "ٱسْتَغْنَىٰٓ",
        "X. bâb (اِسْتَفْعَلَ): غَنِيَ → اِسْتَغْنَى (kendini müstağnî sandı)",
        ["I. bâb (فَعَلَ): غَنِيَ", "V. bâb (تَفَعَّلَ): تَغَنَّى", "IV. bâb (أَفْعَلَ): أَغْنَى"],
        "اِسْتَغْنَى: غ-ن-ي kökünden X. bâb. I. bâb غَنِيَ (zengin oldu) → X. bâb: kendini müstağnî sandı (zannetme anlamı). İstiğnâ, müstağnî bu kökten.",
        ["غ-ن-ي"]
      ),
      generateRootQuiz(
        "S96-B02-Q02", "ٱلرُّجْعَىٰٓ", "ر-ج-ع",
        ["ر-ج-و", "ر-ج-ز", "ر-ج-م"],
        "الرُّجْعَى: ر-ج-ع kökünden masdar (فُعْلَى kalıbı). Rücû (dönüş), müracaat, irca' bu kökten. 'Dönüş kesinlikle Rabbinedir' mesajı.",
        ["ر-ج-ع"]
      ),
      {
        id: "S96-B02-Q03", type: "single_choice",
        question: "أَرَأَيْتَ (gördün mü) 9-13. ayetlerde üç kez tekrarlanır. Bu üçlü yapı neyi anlatır?",
        options: [
          "(1) Engel olanı tanıtma, (2) namaz kılanın haklılığı, (3) engelcinin yalanı — üç katmanlı sorgu zinciri",
          "Üçü aynı kişiye üç farklı zamanda soruluyor",
          "İlki cinlere, ikincisi insanlara, üçüncüsü meleklere yönelik",
          "Sadece üslûp çeşitliliği",
        ],
        correct: 0,
        explanation: "Üç أَرَأَيْتَ: (1) 9-10: engel olanı görüyor musun? (2) 11-12: ya namaz kılan doğru yoldaysa? (3) 13: ya engelci yalancıysa? Her soru bir öncekinin üzerine ekliyor → kademeli kınama.",
        relatedRoots: ["ر-أ-ي"],
      },
      generateBalaghaQuiz(
        "S96-B02-Q04",
        "14. ayette أَلَمْ يَعْلَم بِأَنَّ اللَّهَ يَرَى cümlesinde أَرَأَيْتَ (insan görüşü) ile يَرَى (Allah'ın görmesi) arasında nasıl bir ilişki var?",
        "İnsan sorusu (أَرَأَيْتَ) ilahi cevapla (اللَّهَ يَرَى) karşılanır — 'sen gördün mü' sorusu 'Allah görür' gerçeğiyle yanıtlanır",
        ["Sadece tesadüfî kök benzerliği", "İnsan Allah'ı görebilir anlamında", "Rü'yet kelimesi farklı anlamlarda"],
        "ر-أ-ي kökü: أَرَأَيْتَ (×3, insanın görmesi), يَرَى (Allah'ın görmesi). İnsanın sınırlı bakışı → Allah'ın mutlak görmesi. Kök tekrarı (cinas-ı iştikâk) ile anlam derinleşir."
      ),
      generateFillBlank(
        "S96-B02-Q05",
        "كَلَّآ إِنَّ الإِنسَانَ لَ_____ أَن رَآهُ اسْتَغْنَى",
        "يَطْغَى", ["يَعْصِي", "يَكْفُرُ", "يُنْكِرُ"],
        "İnsan mutlaka … (azgınlık yapar)",
        "يَطْغَى: ط-غ-ي kökünden I. bâb nâkıs muzâri. Tuğyân (azgınlık, haddi aşma). لَ te'kîd + إِنَّ te'kîd = çift vurgu. Azmanın sebebi: istiğnâ (kendini yeterli sanma).",
        ["ط-غ-ي"]
      ),
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 3 — ALAK 96:15-19 — Nâsiye Tehdidi ve Secde Emri
  // ═══════════════════════════════════════════════════════════
  {
    id: "S96-B03-alak",
    title: "Alak (15-19) — Nâsiye, Zebâniye ve Secde",
    titleAr: "سُورَةُ العَلَق ١٥-١٩",
    stage: 2,
    level: 8,
    surah: 96,
    description:
      "كَلَّا ile son red. لَنَسْفَعًا (nûn-u te'kîd hafîfe): nâsiyeden tutma tehdidi. Nâsiye: kâzibe hâtıe. Nâdî (kabilesi) çağrılsa da zebâniye gelecek. Son emir: secde et ve yaklaş! VIII. bâb emr (اِقْتَرِبْ).",
    verses: [
      {
        surah: 96, ayah: 15,
        arabic: "كَلَّا لَئِن لَّمْ يَنتَهِ لَنَسْفَعًۢا بِٱلنَّاصِيَةِ",
        translation: "Hayır! Eğer vazgeçmezse, onu mutlaka perçeminden tutup sürükleriz!",
        words: [
          { arabic: "كَلَّا", transliteration: "kallā", root: null, pos: "harf", meaning_tr: "hayır, asla!", irab: "2. كَلَّا: son red. Tehdide geçiş.", irab_short: "red + intikal", turkish_bridge: null, balagha_note: "Suredeki 2. كَلَّا: ilki (6) nimetten tuğyana, ikincisi (19 — gelecek) tehditten emre geçiyor." },
          { arabic: "لَئِن", transliteration: "laʾin", root: null, pos: "harf", meaning_tr: "eğer, yemin olsun ki eğer", irab: "لَ {lâm-ı kasem (yemin)} + إِنْ {şart edatı}.", irab_short: "kasem + şart", turkish_bridge: null, balagha_note: null },
          { arabic: "لَّمْ", transliteration: "lam", root: null, pos: "harf", meaning_tr: "…mazsa", irab: "{Harf-i cezm + nefiy}.", irab_short: "cezm", turkish_bridge: null, balagha_note: null },
          { arabic: "يَنتَهِ", transliteration: "yantahi", root: "ن-ه-ي", pattern: "يَنْفَعِلُ", pos: "fil", meaning_tr: "vazgeçer, durur", irab: "{Fiil-i muzâri}, VIII. bâb (اِنْتَهَى), {meczûm} (لَمْ ile). نَهَى (yasakladı) → اِنْتَهَى (durdu, vazgeçti).", irab_short: "muzâri, VIII. bâb, meczûm", turkish_bridge: "İntihâ (son bulma), müntehi bu kökten", balagha_note: null },
          { arabic: "لَنَسْفَعًۢا", transliteration: "la-nasfaʿan", root: "س-ف-ع", pos: "fil", meaning_tr: "onu elbette tutup sürükleriz", irab: "لَ {lâm-ı kasem (cevap)} + نَسْفَعَ {muzâri, I. bâb} + ا {elif: nûn-u te'kîd hafîfe yazımı}. سَفَعَ: yakamak, tutup çekmek.", irab_short: "muzâri + nûn-u te'kîd hafîfe", turkish_bridge: null, balagha_note: "لَنَسْفَعًا: nûn-u te'kîd hafîfe (ا ile yazılır). Kasem + te'kîd: 'Yemin olsun, mutlaka alın perçeminden tutarız!' Üç katmanlı vurgu: لَ kasem + nûn te'kîd + fiil." },
          { arabic: "بِٱلنَّاصِيَةِ", transliteration: "bi-n-nāṣiyati", root: "ن-ص-ي", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "perçeminden, alnından", irab: "بِ {harf-i cer} + النَّاصِيَة {mecrûr}. Nâsiye: alnın ön kısmı, perçem.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: "Nâsiyeden tutmak: Arap kültüründe en büyük aşağılama. Alın = kişinin onuru ve kimliği." },
        ],
      },
      {
        surah: 96, ayah: 16,
        arabic: "نَاصِيَةٍ كَـٰذِبَةٍ خَاطِئَةٍ",
        translation: "Yalancı, günahkâr bir alın (perçem)!",
        words: [
          { arabic: "نَاصِيَةٍ", transliteration: "nāṣiyatin", root: "ن-ص-ي", pos: "ism", meaning_tr: "bir alın, perçem", irab: "{Bedel} (النَّاصِيَةِ'den) veya sıfat olarak mecrûr. Nekre: aşağılama → 'öyle bir alın ki...'", irab_short: "bedel, mecrûr", turkish_bridge: null, balagha_note: "Nekre olması hakaret vurgusu: 'herhangi bir yalancı alın' → belirli kişiyi küçümseme." },
          { arabic: "كَـٰذِبَةٍ", transliteration: "kāḏibatin", root: "ك-ذ-ب", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "yalancı", irab: "{Sıfat 1}, {mecrûr}. İsm-i fâil müennes: كَاذِبَة.", irab_short: "sıfat, mecrûr", turkish_bridge: "Kâzib, yalan bu kökten", balagha_note: null },
          { arabic: "خَاطِئَةٍ", transliteration: "ḫāṭiʾatin", root: "خ-ط-أ", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "günahkâr, hata eden", irab: "{Sıfat 2}, {mecrûr}. İsm-i fâil müennes: خَاطِئَة. خَطَأ = yanılmak, günah işlemek.", irab_short: "sıfat, mecrûr", turkish_bridge: "Hatâ, hatîe (günah) bu kökten", balagha_note: "Nâsiye kişinin yerine: mecâz-ı mürsel (parça-bütün). Alın yalancı ve günahkâr → sahibi yalancı ve günahkâr." },
        ],
      },
      {
        surah: 96, ayah: 17,
        arabic: "فَلْيَدْعُ نَادِيَهُۥ",
        translation: "O halde taraftarlarını çağırsın!",
        words: [
          { arabic: "فَلْيَدْعُ", transliteration: "fal-yadʿu", root: "د-ع-و", pos: "fil", meaning_tr: "çağırsın", irab: "فَ {sebebiye} + لِ {lâm-ı emr} + يَدْعُ {muzâri, meczûm (لِ ile)}. Nâkıs fiil.", irab_short: "emr (lâm-ı emr), muzâri meczûm", turkish_bridge: "Duâ, da'vet bu kökten", balagha_note: "Tahaddî (meydan okuma): 'Çağır bakalım adamlarını!' Tehdit: sen taraftarlarını çağır, Biz de Biz." },
          { arabic: "نَادِيَهُۥ", transliteration: "nādiyahu", root: "ن-د-ي", pattern: "فَاعِل", pos: "ism", meaning_tr: "meclisini, taraftarlarını", irab: "{Mef'ûl bih}, {mensûb} + هُ zamîr. النَّادِي: toplantı yeri, meclis → mecazen: oradaki insanlar.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Nâdî (kulüp, meclis), münâdî bu kökten", balagha_note: "Nâdî = meclis (yer adı), mecazen meclistekiler (insanlar). Mecâz-ı mürsel: mahall-mahal fîh (yer → oradakiler)." },
        ],
      },
      {
        surah: 96, ayah: 18,
        arabic: "سَنَدْعُ ٱلزَّبَانِيَةَ",
        translation: "Biz de zebânîleri çağırırız!",
        words: [
          { arabic: "سَنَدْعُ", transliteration: "sa-nadʿu", root: "د-ع-و", pos: "fil", meaning_tr: "çağırırız", irab: "سَ {harf-i istikbal} + نَدْعُو {muzâri, merfû — و düşmüş (hat-ı Osmânî)}. {Fâil}: نَحْنُ (Allah — ta'zîm çoğulu).", irab_short: "muzâri + istikbal", turkish_bridge: null, balagha_note: "Karşılıklı çağırma: فَلْيَدْعُ نَادِيَهُ (o çağırsın) → سَنَدْعُ الزَّبَانِيَة (Biz çağırırız). Aynı kök (د-ع-و) ile meydan okuma." },
          { arabic: "ٱلزَّبَانِيَةَ", transliteration: "az-zabāniyata", root: "ز-ب-ن", pos: "ism", meaning_tr: "zebânîler (cehennem melekleri)", irab: "{Mef'ûl bih}, {mensûb}. زَبَانِيَة: زِبْنِيَة'nin cem'i, cehennemin azap melekleri.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Zebânî (cehennem bekçisi) Türkçeye geçmiş", balagha_note: "Nâdî (insan meclisi) ↔ Zebâniye (melek ordusu): mukâbele. İnsan taraftarları → ilahi güç. Orantısızlık vurgusu." },
        ],
      },
      {
        surah: 96, ayah: 19,
        arabic: "كَلَّا لَا تُطِعْهُ وَٱسْجُدْ وَٱقْتَرِبْ ۩",
        translation: "Hayır! Ona itaat etme, secde et ve yaklaş!",
        words: [
          { arabic: "كَلَّا", transliteration: "kallā", root: null, pos: "harf", meaning_tr: "hayır, asla", irab: "3. كَلَّا (surenin 2. كَلَّا'sı): tehditten emre geçiş.", irab_short: "red + intikal", turkish_bridge: null, balagha_note: null },
          { arabic: "لَا", transliteration: "lā", root: null, pos: "harf", meaning_tr: "yapma", irab: "{Lâ-yı nâhiye}: nehi (yasaklama).", irab_short: "nehi", turkish_bridge: null, balagha_note: null },
          { arabic: "تُطِعْهُ", transliteration: "tuṭiʿhu", root: "ط-و-ع", pattern: "يُفْعِلُ", pos: "fil", meaning_tr: "ona itaat et", irab: "{Fiil-i muzâri}, IV. bâb (أَطَاعَ/يُطِيعُ), {meczûm} (لَا ile) + هُ {mef'ûl bih}.", irab_short: "muzâri, IV. bâb, meczûm", turkish_bridge: "İtaat, mutî, tâat bu kökten", balagha_note: null },
          { arabic: "وَٱسْجُدْ", transliteration: "wa-sjud", root: "س-ج-د", pos: "fil", meaning_tr: "secde et", irab: "وَ {atıf} + اسْجُدْ {fiil-i emr}, I. bâb.", irab_short: "emr, I. bâb", turkish_bridge: "Secde, mescid, sâcid bu kökten", balagha_note: "Secde emri: kulluk. ۩ işareti → tilâvet secdesi ayeti." },
          { arabic: "وَٱقْتَرِبْ", transliteration: "wa-qtarib", root: "ق-ر-ب", pattern: "اِفْتَعِلْ", pos: "fil", meaning_tr: "yaklaş", irab: "وَ {atıf} + اقْتَرِبْ {fiil-i emr}, VIII. bâb (اِفْتَعَلَ). قَرُبَ (yakın oldu) → اِقْتَرَبَ (yaklaştı).", irab_short: "emr, VIII. bâb", turkish_bridge: "Kurb (yakınlık), karîb bu kökten", balagha_note: "Surenin kapanışı: üç emir zinciri → (1) لَا تُطِعْهُ (nehi: itaat etme), (2) اسْجُدْ (emr: secde et), (3) اقْتَرِبْ (emr: yaklaş). Tehditten çözüme: secde = Allah'a yaklaşma aracı." },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "Nûn-u Te'kîd — لَنَسْفَعًا",
        explanation: "لَنَسْفَعًا: لَ kasem + نَسْفَع muzâri + ا (elif: nûn-u te'kîd hafîfe'nin yazımı). Nûn-u te'kîd iki türlüdür: (1) Sakîle (ağır, شَدّة ile: نَّ), (2) Hafîfe (hafif, شَدّة'siz: نْ, vakıfta elif olur). Burada hafîfe: لَنَسْفَعَنْ → vakıfta لَنَسْفَعًا.",
        rule: "لَ (kasem) + muzâri + نَّ (sakîle) veya نْ (hafîfe)\nHafîfe vakıfta elif olur: نْ → ا\nÜç katmanlı vurgu: kasem + fiil + te'kîd",
        examples: ["لَنَسْفَعًا — elbette sürükleriz (hafîfe)", "لَتَرَوُنَّ — kesinlikle göreceksiniz (sakîle, 102:6)", "لَيُسْجَنَنَّ — kesinlikle hapsedilecek (sakîle, 12:32)"],
      },
      {
        title: "VIII. Bâb Emr: اِقْتَرِبْ",
        explanation: "اِقْتَرَبَ: ق-ر-ب + VIII. bâb (اِفْتَعَلَ). Mutâva'a (karşılıklı etki): قَرَّبَ (yaklaştırdı) → اِقْتَرَبَ (kendisi yaklaştı). Emr: اِقْتَرِبْ. Secde ile birlikte emredilmesi: secde = Allah'a yaklaşma aracı.",
        rule: "اِفْتَعَلَ → emr: اِفْتَعِلْ\nاِقْتَرَبَ → اِقْتَرِبْ (yaklaş)\nHadis: أَقْرَبُ مَا يَكُونُ العَبْدُ مِنْ رَبِّهِ وَهُوَ سَاجِد",
        examples: ["اِقْتَرِبْ — yaklaş (ق-ر-ب, VIII.)", "اِنْتَهِ — dur, vazgeç (ن-ه-ي, VIII.)", "اِجْتَنِبْ — sakın, kaçın (ج-ن-ب, VIII.)"],
      },
    ],
    exercises: [
      generateBabQuiz(
        "S96-B03-Q01", "اقْتَرِبْ",
        "VIII. bâb (اِفْتَعَلَ): ق-ر-ب → اِقْتَرَبَ (yaklaştı) → emr: اِقْتَرِبْ",
        ["I. bâb (فَعَلَ): قَرُبَ", "II. bâb (فَعَّلَ): قَرَّبَ", "V. bâb (تَفَعَّلَ): تَقَرَّبَ"],
        "اِقْتَرَبَ: ق-ر-ب + VIII. bâb (اِفْتَعَلَ). Mutâva'a: قَرَّبَ (yaklaştırdı) → اِقْتَرَبَ (kendisi yaklaştı). Emr: اِقْتَرِبْ. Kurb, karîb, takrîb bu kökten.",
        ["ق-ر-ب"]
      ),
      generateRootQuiz(
        "S96-B03-Q02", "ٱلزَّبَانِيَةَ", "ز-ب-ن",
        ["ز-ن-ب", "ز-ب-ر", "ز-ب-د"],
        "الزَّبَانِيَة: ز-ب-ن kökünden. Cehennem azap melekleri. زَبْن: itmek, sürmek. Bu melekler günahkârları cehenneme iterler.",
        ["ز-ب-ن"]
      ),
      generateFillBlank(
        "S96-B03-Q03",
        "كَلَّا لَا تُطِعْهُ وَاسْجُدْ وَ_____",
        "اقْتَرِبْ", ["قَرِّبْ", "تَقَرَّبْ", "أَقْرِبْ"],
        "ق-ر-ب kökünden VIII. bâb emr",
        "اِقْتَرِبْ: ق-ر-ب kökünden VIII. bâb emr. 'Allah'a yaklaş.' Secde ile birlikte emredilmesi: secde = yakınlık aracı.",
        ["ق-ر-ب"]
      ),
      {
        id: "S96-B03-Q04", type: "matching",
        question: "Alak suresinin yapısal bölümlerini eşleştirin:",
        pairs: [
          { left: "1-5. ayetler", right: "İlk vahiy: yaratma + öğretme" },
          { left: "6-8. ayetler", right: "İnsanın tuğyanı (azgınlık)" },
          { left: "9-14. ayetler", right: "Engel olanın sorgulanması" },
          { left: "15-19. ayetler", right: "Tehdit + secde + yakınlık emri" },
        ],
        explanation: "Sure dört yapısal bölümden oluşur: (1) ilahi nimet ve bilgi, (2) insanın nankörlüğü, (3) engelcinin akıbeti, (4) çözüm: secde ile Allah'a yaklaşma.",
        relatedRoots: [],
      },
      generateBalaghaQuiz(
        "S96-B03-Q05",
        "17-18. ayetlerde فَلْيَدْعُ نَادِيَهُ / سَنَدْعُ الزَّبَانِيَةَ ifadelerinde aynı fiil kökü (د-ع-و) kullanılır. Bunun belâgat adı ve etkisi nedir?",
        "Cinas-ı iştikâk + mukâbele: aynı kök (çağırmak), zıt taraflar (insan meclisi ↔ ilahi güç) — orantısız meydan okuma",
        ["Sadece tıbâk (zıtlık)", "İsti'âre (metafor)", "Kinâye (dolaylı anlatım)"],
        "İki ayetteki يَدْعُ / نَدْعُ aynı kökten (د-ع-و): cinas-ı iştikâk. İçerik ise mukâbele: nâdî (insan topluluğu) ↔ zebâniye (cehennem melekleri). Karşı taraf ne kadar güçlü olursa olsun, ilahi güç karşısında hiçtir."
      ),
    ],
  },
];

export default alakLessons;
