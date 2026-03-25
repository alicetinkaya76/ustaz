// ═══════════════════════════════════════════════════════════
// İHLÂS SURESİ (112) — Pipeline Üretimi
// 2026-03-25: 1 bölüm, 4 ayet tam kapsam
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

const ihlasLessons = [
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 1 — İHLÂS 112:1-4
  // ═══════════════════════════════════════════════════════════
  {
    id: "S112-B01-ihlas",
    title: "İhlâs (1-4)",
    titleAr: "سُورَة الإخلاص 1-4",
    stage: 2,
    level: 8,
    surah: 112,
    description: "Allah'ın mutlak birliği, ezelî-ebedî varlığı ve hiçbir şeye benzemeyişi anlatılmaktadır.",
    verses: [
      {
        surah: 112, ayah: 1,
        arabic: "قُلۡ هُوَ ٱللَّهُ أَحَدٌ",
        translation: "De ki: O Allah bir tektir.",
        words: [
          { arabic: "قُلۡ", transliteration: "kul", root: "ق-و-ل", pattern: "فُعْ", pos: "fil", meaning_tr: "de, söyle", irab: "{Fiil-i emr} II. şahıs müfred müzekker. Fâili müstetir.", irab_short: "emr, I. bâb", turkish_bridge: "Kal, kavl bu kökten", balagha_note: null },
          { arabic: "هُوَ", transliteration: "huve", root: null, pos: "ism", meaning_tr: "o (gâib müfred müzekker zamiri)", irab: "{Zamîr-i münfasıl} gâib müfred müzekker. Mübtedâ mahallinde merfû.", irab_short: "mübtedâ, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱللَّهُ", transliteration: "allâhu", root: null, pos: "ism", meaning_tr: "Allah", irab: "{Lafzatullâh} müfred müzekker. Haber-i evvel mahallinde merfû.", irab_short: "haber, merfû", turkish_bridge: "Allah", balagha_note: null },
          { arabic: "أَحَدٌ", transliteration: "ahad", root: "و-ح-د", pattern: "أَفْعَل", pos: "ism", meaning_tr: "bir tek, biricik", irab: "{Haber-i sânî} müfred müzekker. Tenvin ile merfû.", irab_short: "haber, merfû", turkish_bridge: "Vahid, vahdet bu kökten", balagha_note: "Te'kîd için iki haber kullanılmıştır" },
        ],
      },
      {
        surah: 112, ayah: 2,
        arabic: "ٱللَّهُ ٱلصَّمَدُ",
        translation: "Allah her şeyden müstağni ve her şey O'na muhtaçtır.",
        words: [
          { arabic: "ٱللَّهُ", transliteration: "allâhu", root: null, pos: "ism", meaning_tr: "Allah", irab: "{Lafzatullâh} müfred müzekker. Mübtedâ mahallinde merfû.", irab_short: "mübtedâ, merfû", turkish_bridge: "Allah", balagha_note: null },
          { arabic: "ٱلصَّمَدُ", transliteration: "es-samadu", root: "ص-م-د", pattern: "فَعَل", pos: "ism", meaning_tr: "her şeyden müstağni, hiçbir şeye muhtaç olmayan", irab: "{Sıfat-ı müşebbehe} müfred müzekker. Haber mahallinde merfû.", irab_short: "haber, merfû", turkish_bridge: "Samed bu kökten", balagha_note: "Allah'ın mutlak kemâlini ifade eden özel sıfat" },
        ],
      },
      {
        surah: 112, ayah: 3,
        arabic: "لَمۡ يَلِدۡ وَلَمۡ يُولَدۡ",
        translation: "O doğurmamış ve doğmamıştır.",
        words: [
          { arabic: "لَمۡ", transliteration: "lem", root: null, pos: "harf", meaning_tr: "değil, -madı/-medi (nefy edatı)", irab: "{Harf-i nefy ve kalk ve cezm} muzâriyi mâzî manasına çevirir ve cezm eder.", irab_short: "nefy ve cezm edatı", turkish_bridge: null, balagha_note: null },
          { arabic: "يَلِدۡ", transliteration: "yelid", root: "و-ل-د", pattern: "يَفْعِل", pos: "fil", meaning_tr: "doğurmak", irab: "{Fiil-i muzâri} III. şahıs müfred müzekker. Lem ile meczûm. Fâili müstetir.", irab_short: "muzâri, meczûm", turkish_bridge: "Vâlid, veled bu kökten", balagha_note: null },
          { arabic: "وَلَمۡ", transliteration: "ve lem", root: null, pos: "harf", meaning_tr: "ve değil (atıf ve nefy)", irab: "{Vâv-ı atf} ile {harf-i nefy ve kalk ve cezm} terkibi. Muzâriyi mâzî manasına çevirir.", irab_short: "atıf + nefy edatı", turkish_bridge: null, balagha_note: null },
          { arabic: "يُولَدۡ", transliteration: "yûlad", root: "و-ل-د", pattern: "يُفْعَل", pos: "fil", meaning_tr: "doğurulmak", irab: "{Fiil-i muzâri meçhûl} III. şahıs müfred müzekker. Lem ile meczûm. Nâib-i fâil müstetir.", irab_short: "muzâri meçhûl, meczûm", turkish_bridge: "Vâlid, veled bu kökten", balagha_note: "Mukâbele sanatı: يَلِدۡ - يُولَدۡ karşıtlığı" },
        ],
      },
      {
        surah: 112, ayah: 4,
        arabic: "وَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدُۢ",
        translation: "Hiçbir şey O'na denk değildir.",
        words: [
          { arabic: "وَلَمۡ", transliteration: "ve lem", root: null, pos: "harf", meaning_tr: "ve değil (atıf ve nefy)", irab: "{Vâv-ı atf} ile {harf-i nefy ve kalk ve cezm} terkibi. Muzâriyi mâzî manasına çevirir.", irab_short: "atıf + nefy edatı", turkish_bridge: null, balagha_note: null },
          { arabic: "يَكُن", transliteration: "yekun", root: "ك-و-ن", pattern: "يَفْعُل", pos: "fil", meaning_tr: "olmak", irab: "{Fiil-i nâkıs muzâri} III. şahıs müfred müzekker. Lem ile meczûm. İsmi müstetir.", irab_short: "nâkıs muzâri, meczûm", turkish_bridge: "Kâin, vücûd bu kökten", balagha_note: null },
          { arabic: "لَّهُۥ", transliteration: "lehû", root: null, pos: "harf", meaning_tr: "onun için", irab: "{Harf-i cer} lâm ile {zamîr-i muttasıl} hû terkibi. Câr-mecrûr mahallinde haber-i mukaddem.", irab_short: "câr-mecrûr, haber", turkish_bridge: null, balagha_note: "Takdîm-te'hîr: haber öne alınmış" },
          { arabic: "كُفُوًا", transliteration: "küfüven", root: "ك-ف-أ", pattern: "فُعُل", pos: "ism", meaning_tr: "denk, eş, benzer", irab: "{Masdar} müfred müzekker. Hâl mahallinde mensûb. Tenvin ile.", irab_short: "hâl, mensûb", turkish_bridge: null, balagha_note: null },
          { arabic: "أَحَدُۢ", transliteration: "ahad", root: "و-ح-د", pattern: "أَفْعَل", pos: "ism", meaning_tr: "hiçbir kimse", irab: "{İsm-i nâkıs} müfred müzekker. İsm-i kâne mahallinde merfû.", irab_short: "ism-i kâne, merfû", turkish_bridge: "Vahid, vahdet bu kökten", balagha_note: "Sure başı ile seci: أَحَدٌ - أَحَدُۢ" },
        ],
      },
    ],
    exercises: [],
  },
];

export default ihlasLessons;
