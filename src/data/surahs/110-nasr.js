// ═══════════════════════════════════════════════════════════
// NASR SURESİ (110) — Pipeline Üretimi
// 2026-03-25: 1 bölüm, 3 ayet tam kapsam
// ═══════════════════════════════════════════════════════════

import {
  generateRootQuiz,
  generateBabQuiz,
  generateWaznQuiz,
  generateFillBlank,
  generateBalaghaQuiz,
  generateIrabQuiz,
  generateVerbTypeQuiz,
  generateCrossSurahRootQuiz,
  generateRootFamilyQuiz,
} from "../../utils/quizGenerator.js";

const nasrLessons = [
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 1 — NASR 110:1-3
  // ═══════════════════════════════════════════════════════════
  {
    id: "S110-B01-nasr",
    title: "Nasr (1-3)",
    titleAr: "سُورَة النصر 1-3",
    stage: 2,
    level: 8,
    surah: 110,
    description: "Allah'ın yardımı ve fetih geldiğinde yapılması gereken şükür ve tevbe konusunu ele alır. Hz. Peygamber'e son dönemde yapması gerekenleri bildirir.",
    verses: [
      {
        surah: 110, ayah: 1,
        arabic: "إِذَا جَآءَ نَصۡرُ ٱللَّهِ وَٱلۡفَتۡحُ",
        translation: "Allah'ın yardımı ve zafer geldiğinde",
        words: [
          { arabic: "إِذَا", transliteration: "iẕâ", root: null, pos: "harf", meaning_tr: "ne zaman, -diği zaman", irab: "{Zarf-ı zaman} olarak kullanılan şart edatı, gelecekteki zaman ifade eder.", irab_short: "zarf-ı zaman", turkish_bridge: null, balagha_note: null },
          { arabic: "جَآءَ", transliteration: "câ'e", root: "ج-ي-أ", pattern: "فَعَلَ", pos: "fil", meaning_tr: "geldi", irab: "{Fiil-i mâzî}, I. bâb, gâib sîgası müzekker, إذا'nın şartına cevap olan fiildir.", irab_short: "mâzî, I. bâb", turkish_bridge: null, balagha_note: null },
          { arabic: "نَصۡرُ", transliteration: "nasru", root: "ن-ص-ر", pattern: "فَعْل", pos: "ism", meaning_tr: "yardım, zafer", irab: "{Fâil} konumunda, merfû, başındaki damme alameti ile gösterilir.", irab_short: "fâil, merfû", turkish_bridge: "Nasr, münâsır bu kökten", balagha_note: null },
          { arabic: "ٱللَّهِ", transliteration: "Allâhi", root: "أ-ل-ه", pos: "ism", meaning_tr: "Allah'ın", irab: "{Muzâf ileyh} konumunda, mecrûr, kesr alameti ile gösterilir.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "Allah, ilah bu kökten", balagha_note: null },
          { arabic: "وَٱلۡفَتۡحُ", transliteration: "vel-fethu", root: "ف-ت-ح", pattern: "فَعْل", pos: "ism", meaning_tr: "ve fetih, açılış", irab: "Vav {atıf harfi}, الفتح {ma'tûf} konumunda fâil'e atfedilmiş, merfû.", irab_short: "ma'tûf, merfû", turkish_bridge: "Feth, fetih, miftah bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 110, ayah: 2,
        arabic: "وَرَأَيۡتَ ٱلنَّاسَ يَدۡخُلُونَ فِي دِينِ ٱللَّهِ أَفۡوَاجٗا",
        translation: "ve insanların Allah'ın dinine bölük bölük girdiklerini gördüğünde",
        words: [
          { arabic: "وَرَأَيۡتَ", transliteration: "ve ra'eyte", root: "ر-أ-ي", pattern: "فَعَلَ", pos: "fil", meaning_tr: "ve gördün", irab: "Vav {atıf harfi}, رأيت {fiil-i mâzî} I. bâb, muhatab sîgası.", irab_short: "mâzî, I. bâb", turkish_bridge: "Re'y, riâyet bu kökten", balagha_note: null },
          { arabic: "ٱلنَّاسَ", transliteration: "en-nâse", root: "أ-ن-س", pos: "ism", meaning_tr: "insanları", irab: "{Mef'ûl bih} konumunda, mensûb, fatha alameti ile gösterilir.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "İnsan, üns bu kökten", balagha_note: null },
          { arabic: "يَدۡخُلُونَ", transliteration: "yedḫulûne", root: "د-خ-ل", pattern: "يَفْعُلُ", pos: "fil", meaning_tr: "giriyorlar", irab: "{Fiil-i muzâri}, I. bâb, gâib sîgası cemî müzekker, النَّاسَ kelimesinin {hâli} durumunu ifade eder.", irab_short: "muzâri, I. bâb, hâl", turkish_bridge: "Dâhil, medhal bu kökten", balagha_note: null },
          { arabic: "فِي", transliteration: "fî", root: null, pos: "harf", meaning_tr: "içine, -e", irab: "{Harf-i cer}, kendisinden sonra gelen kelimeyi cerr eder.", irab_short: "harf-i cer", turkish_bridge: null, balagha_note: null },
          { arabic: "دِينِ", transliteration: "dîni", root: "د-ي-ن", pattern: "فِعْل", pos: "ism", meaning_tr: "dini", irab: "{Mecrûr}, في harfi ile cerrediImiş, muzâf konumunda.", irab_short: "mecrûr, muzâf", turkish_bridge: "Din, diyânet bu kökten", balagha_note: null },
          { arabic: "ٱللَّهِ", transliteration: "Allâhi", root: "أ-ل-ه", pos: "ism", meaning_tr: "Allah'ın", irab: "{Muzâf ileyh} konumunda, mecrûr, kesr alameti ile gösterilir.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "Allah, ilah bu kökten", balagha_note: null },
          { arabic: "أَفۡوَاجٗا", transliteration: "efvâcen", root: "ف-و-ج", pattern: "أَفْعَال", pos: "ism", meaning_tr: "bölükler halinde, gruplar halinde", irab: "{Hâl} konumunda, mensûb, fatha alameti ile gösterilir, يَدْخُلُونَ fiilinin halini beyan eder.", irab_short: "hâl, mensûb", turkish_bridge: "Fevç bu kökten", balagha_note: "Çokluk ve süreklilik ifade eden belâgî kullanım" },
        ],
      },
      {
        surah: 110, ayah: 3,
        arabic: "فَسَبِّحۡ بِحَمۡدِ رَبِّكَ وَٱسۡتَغۡفِرۡهُۚ إِنَّهُۥ كَانَ تَوَّابَۢا",
        translation: "O halde Rabbini hamd ile tesbih et ve O'ndan mağfiret dile. Şüphesiz O, tevbeleri çok kabul edendir.",
        words: [
          { arabic: "فَسَبِّحۡ", transliteration: "fe sebbiḥ", root: "س-ب-ح", pattern: "فَعِّلْ", pos: "fil", meaning_tr: "o halde tesbih et", irab: "Fâ {ta'kîb harfi}, سبح {fiil-i emr} II. bâb, muhatab sîgası müfred.", irab_short: "emr, II. bâb", turkish_bridge: "Tesbih, sibâha bu kökten", balagha_note: "Fâ harfi ile hızlı geçiş ve sonuç ifade edilir" },
          { arabic: "بِحَمۡدِ", transliteration: "bi ḥamdi", root: "ح-م-د", pattern: "فَعْل", pos: "ism", meaning_tr: "hamd ile", irab: "Bâ {harf-i cer}, حمد {mecrûr} konumunda, kesr alameti ile gösterilir, {hâl} veya {sıfat-ı keyfiyyet} ifade eder.", irab_short: "mecrûr, hâl", turkish_bridge: "Hamd, ahmed bu kökten", balagha_note: null },
          { arabic: "رَبِّكَ", transliteration: "rabbike", root: "ر-ب-ب", pattern: "فَعّ", pos: "ism", meaning_tr: "Rabbinin", irab: "{Muzâf ileyh} konumunda, mecrûr, sonunda ikinci şahıs zamiri bitişik.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "Rab, rabbânî bu kökten", balagha_note: "Şahsî hitap ile samimiyet" },
          { arabic: "وَٱسۡتَغۡفِرۡهُ", transliteration: "vestağfirhu", root: "غ-ف-ر", pattern: "اِسْتَفْعِلْ", pos: "fil", meaning_tr: "ve O'ndan mağfiret dile", irab: "Vav {atıf harfi}, استغفر {fiil-i emr} X. bâb, muhatab sîgası, sonunda gâib zamiri muttasıl.", irab_short: "emr, X. bâb", turkish_bridge: "Ğafr, mağfiret, ğafûr bu kökten", balagha_note: null },
          { arabic: "إِنَّهُۥ", transliteration: "innehu", root: null, pos: "harf", meaning_tr: "şüphesiz O", irab: "{İnne} hurûf-i müşebbehe'den, sonundaki ه {ismuhâ} konumunda mansûb.", irab_short: "inne + zamiri", turkish_bridge: null, balagha_note: "Te'kîd için kullanılmış" },
          { arabic: "كَانَ", transliteration: "kâne", root: "ك-و-ن", pattern: "فَعَلَ", pos: "fil", meaning_tr: "idi, sürekli olan", irab: "{Kâne} nâkıs fiil, gâib sîgası müzekker, İnne'nin {haberuhâ} bölümünde yer alır.", irab_short: "kâne, nâkıs fiil", turkish_bridge: "Kevn, kâinat bu kökten", balagha_note: "Süreklilik ve sabitlik ifade eder" },
          { arabic: "تَوَّابَۢا", transliteration: "tevvâben", root: "ت-و-ب", pattern: "فَعَّال", pos: "ism", meaning_tr: "çok tevbe kabul eden", irab: "{Haber-i kâne} konumunda, mansûb, fatha alameti ile gösterilir, mübalağa sîgası.", irab_short: "haber-i kâne, mansûb", turkish_bridge: "Tevbe bu kökten", balagha_note: "فَعَّال kalıbı ile mübalağa, çokça tevbe kabul etme sıfatı" },
        ],
      },
    ],
    exercises: [],
  },
];

export default nasrLessons;
