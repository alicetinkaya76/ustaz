// ═══════════════════════════════════════════════════════════
// KÂFIRÛN SURESİ (109) — Pipeline Üretimi
// 2026-03-25: 1 bölüm, 6 ayet tam kapsam
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

const kafirunLessons = [
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 1 — KÂFIRÛN 109:1-6
  // ═══════════════════════════════════════════════════════════
  {
    id: "S109-B01-kafirun",
    title: "Kâfirûn (1-6)",
    titleAr: "سُورَة الكافرون 1-6",
    stage: 2,
    level: 8,
    surah: 109,
    description: "Bu sure, inkarcılarla müminler arasındaki ibadet ve inanç ayrılığını net bir şekilde ortaya koyar ve her grubun kendi inancında kalması gerektiğini vurgular.",
    verses: [
      {
        surah: 109, ayah: 1,
        arabic: "قُلۡ يَـٰٓأَيُّهَا ٱلۡكَٰفِرُونَ",
        translation: "De ki: \"Ey inkarcılar!\"",
        words: [
          { arabic: "قُلۡ", transliteration: "ḳul", root: "ق-و-ل", pattern: "فُلْ", pos: "fil", meaning_tr: "söyle, de", irab: "{Fiil-i emr}, I. bâb (قَالَ-يَقُولُ-قُلْ), fâili müstetir \"ente\".", irab_short: "emr, I. bâb", turkish_bridge: "Kavl, kâl, makâl bu kökten", balagha_note: null },
          { arabic: "يَـٰٓأَيُّهَا", transliteration: "yâ eyyühâ", root: null, pos: "harf", meaning_tr: "ey (nida edatı)", irab: "{Harf-i nidâ}, münâdânın başında gelen terkip.", irab_short: "nidâ edatı", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلۡكَٰفِرُونَ", transliteration: "el-kâfirûne", root: "ك-ف-ر", pattern: "فَاعِلُون", pos: "ism", meaning_tr: "inkarcılar, örtücüler", irab: "{Münâdâ}, \"yâ eyyühâ\"dan sonra gelen, merfû halde.", irab_short: "münâdâ, merfû", turkish_bridge: "Kâfir bu kökten", balagha_note: "Hitabın sertliği ve kesinliği için doğrudan nida ile başlama" },
        ],
      },
      {
        surah: 109, ayah: 2,
        arabic: "لَآ أَعۡبُدُ مَا تَعۡبُدُونَ",
        translation: "Ben sizin taptıklarınıza tapmam.",
        words: [
          { arabic: "لَآ", transliteration: "lâ", root: null, pos: "harf", meaning_tr: "değil, -maz/-mez", irab: "{Harf-i nefy}, muzâri fiili nefy eden.", irab_short: "nefy harfi", turkish_bridge: null, balagha_note: null },
          { arabic: "أَعۡبُدُ", transliteration: "a'büdü", root: "ع-ب-د", pattern: "أَفْعُلُ", pos: "fil", meaning_tr: "taparım, ibadet ederim", irab: "{Fiil-i muzâri}, I. bâb, fâili müstetir \"ene\", \"lâ\" ile menfy.", irab_short: "muzâri, I. bâb", turkish_bridge: "İbadet, abd, mâbed bu kökten", balagha_note: null },
          { arabic: "مَا", transliteration: "mâ", root: null, pos: "ism", meaning_tr: "ne, -dığı şey", irab: "{İsm-i mevsûl}, \"a'büdü\" fiilinin {mef'ûlü bih}i, mensûb halde.", irab_short: "mevsûl, mensûb", turkish_bridge: null, balagha_note: null },
          { arabic: "تَعۡبُدُونَ", transliteration: "ta'büdûne", root: "ع-ب-د", pattern: "تَفْعُلُون", pos: "fil", meaning_tr: "taparsınız, ibadet edersiniz", irab: "{Fiil-i muzâri}, I. bâb, fâili \"entüm\", \"mâ\"nın {sıla cümlesi}.", irab_short: "muzâri, I. bâb", turkish_bridge: "İbadet, abd, mâbed bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 109, ayah: 3,
        arabic: "وَلَآ أَنتُمۡ عَٰبِدُونَ مَآ أَعۡبُدُ",
        translation: "Benim taptığıma da sizler tapmazsınız.",
        words: [
          { arabic: "وَلَآ", transliteration: "ve lâ", root: null, pos: "harf", meaning_tr: "ve değil", irab: "{Harf-i atf} \"vâv\" + {harf-i nefy} \"lâ\".", irab_short: "atf + nefy", turkish_bridge: null, balagha_note: null },
          { arabic: "أَنتُمۡ", transliteration: "entüm", root: null, pos: "ism", meaning_tr: "siz", irab: "{Zamîr-i munfasıl}, {mübtedâ}, merfû halde.", irab_short: "mübtedâ, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "عَٰبِدُونَ", transliteration: "'âbidûne", root: "ع-ب-د", pattern: "فَاعِلُون", pos: "ism", meaning_tr: "tapıcılar, ibadet edenler", irab: "{İsm-i fâil} çoğul, \"entüm\"ün {haberi}, merfû halde.", irab_short: "haber, merfû", turkish_bridge: "İbadet, abd, mâbed bu kökten", balagha_note: null },
          { arabic: "مَآ", transliteration: "mâ", root: null, pos: "ism", meaning_tr: "ne, -dığı şey", irab: "{İsm-i mevsûl}, \"âbidûne\"nin {mef'ûlü}, mensûb halde.", irab_short: "mevsûl, mensûb", turkish_bridge: null, balagha_note: null },
          { arabic: "أَعۡبُدُ", transliteration: "a'büdü", root: "ع-ب-د", pattern: "أَفْعُلُ", pos: "fil", meaning_tr: "taparım, ibadet ederim", irab: "{Fiil-i muzâri}, I. bâb, fâili müstetir \"ene\", \"mâ\"nın {sıla cümlesi}.", irab_short: "muzâri, I. bâb", turkish_bridge: "İbadet, abd, mâbed bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 109, ayah: 4,
        arabic: "وَلَآ أَنَا۠ عَابِدٞ مَّا عَبَدتُّمۡ",
        translation: "Ben de sizin taptığınıza tapacak değilim.",
        words: [
          { arabic: "وَلَآ", transliteration: "ve lâ", root: null, pos: "harf", meaning_tr: "ve değil", irab: "{Harf-i atf} \"vâv\" + {harf-i nefy} \"lâ\".", irab_short: "atf + nefy", turkish_bridge: null, balagha_note: null },
          { arabic: "أَنَا۠", transliteration: "ene", root: null, pos: "ism", meaning_tr: "ben", irab: "{Zamîr-i munfasıl}, {mübtedâ}, merfû halde.", irab_short: "mübtedâ, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "عَابِدٞ", transliteration: "'âbidün", root: "ع-ب-د", pattern: "فَاعِل", pos: "ism", meaning_tr: "tapıcı, ibadet eden", irab: "{İsm-i fâil}, \"ene\"nin {haberi}, merfû halde.", irab_short: "haber, merfû", turkish_bridge: "İbadet, abd, mâbed bu kökten", balagha_note: null },
          { arabic: "مَّا", transliteration: "mâ", root: null, pos: "ism", meaning_tr: "ne, -dığınız şey", irab: "{İsm-i mevsûl}, \"âbid\"in {mef'ûlü}, mensûb halde.", irab_short: "mevsûl, mensûb", turkish_bridge: null, balagha_note: null },
          { arabic: "عَبَدتُّمۡ", transliteration: "'abettüm", root: "ع-ب-د", pattern: "فَعَلْتُمْ", pos: "fil", meaning_tr: "taptınız, ibadet ettiniz", irab: "{Fiil-i mâzî}, I. bâb, fâili \"entüm\", \"mâ\"nın {sıla cümlesi}.", irab_short: "mâzî, I. bâb", turkish_bridge: "İbadet, abd, mâbed bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 109, ayah: 5,
        arabic: "وَلَآ أَنتُمۡ عَٰبِدُونَ مَآ أَعۡبُدُ",
        translation: "Benim taptığıma da sizler tapmıyorsunuz.",
        words: [
          { arabic: "وَلَآ", transliteration: "ve lâ", root: null, pos: "harf", meaning_tr: "ve değil", irab: "{Harf-i atf} \"vâv\" + {harf-i nefy} \"lâ\".", irab_short: "atf + nefy", turkish_bridge: null, balagha_note: null },
          { arabic: "أَنتُمۡ", transliteration: "entüm", root: null, pos: "ism", meaning_tr: "siz", irab: "{Zamîr-i munfasıl}, {mübtedâ}, merfû halde.", irab_short: "mübtedâ, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "عَٰبِدُونَ", transliteration: "'âbidûne", root: "ع-ب-د", pattern: "فَاعِلُون", pos: "ism", meaning_tr: "tapıcılar, ibadet edenler", irab: "{İsm-i fâil} çoğul, \"entüm\"ün {haberi}, merfû halde.", irab_short: "haber, merfû", turkish_bridge: "İbadet, abd, mâbed bu kökten", balagha_note: null },
          { arabic: "مَآ", transliteration: "mâ", root: null, pos: "ism", meaning_tr: "ne, -dığı şey", irab: "{İsm-i mevsûl}, \"âbidûne\"nin {mef'ûlü}, mensûb halde.", irab_short: "mevsûl, mensûb", turkish_bridge: null, balagha_note: null },
          { arabic: "أَعۡبُدُ", transliteration: "a'büdü", root: "ع-ب-د", pattern: "أَفْعُلُ", pos: "fil", meaning_tr: "taparım, ibadet ederim", irab: "{Fiil-i muzâri}, I. bâb, fâili müstetir \"ene\", \"mâ\"nın {sıla cümlesi}.", irab_short: "muzâri, I. bâb", turkish_bridge: "İbadet, abd, mâbed bu kökten", balagha_note: "3. ayette aynı ifadenin tekrarı ile te'kîd sanatı" },
        ],
      },
      {
        surah: 109, ayah: 6,
        arabic: "لَكُمۡ دِينُكُمۡ وَلِيَ دِينِ",
        translation: "Sizin dininiz size, benim dinim banadır.",
        words: [
          { arabic: "لَكُمۡ", transliteration: "leküm", root: null, pos: "harf", meaning_tr: "sizin için, size", irab: "{Câr-mecrûr}, lâm harfi + \"küm\" zamiri, {mübtedâ-i muahhar}.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "دِينُكُمۡ", transliteration: "dînüküm", root: "د-ي-ن", pattern: "فِعْل", pos: "ism", meaning_tr: "sizin dininiz", irab: "{Mübtedâ-i mukaddem}, \"leküm\"ün {haberi} konumunda, merfû halde.", irab_short: "mübtedâ, merfû", turkish_bridge: "Din bu kökten", balagha_note: null },
          { arabic: "وَلِيَ", transliteration: "ve liye", root: null, pos: "harf", meaning_tr: "ve benim için, bana", irab: "{Harf-i atf} \"vâv\" + {câr-mecrûr} \"lî\" + \"ye\" zamiri.", irab_short: "atf + câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "دِينِ", transliteration: "dîni", root: "د-ي-ن", pattern: "فِعْل", pos: "ism", meaning_tr: "benim dinim", irab: "{Mübtedâ-i mukaddem}, \"liye\"nin {haberi} konumunda, merfû halde.", irab_short: "mübtedâ, merfû", turkish_bridge: "Din bu kökten", balagha_note: "Mukâbele sanatı: 'leküm dînüküm' karşısında 'liye dîni', ayrıca fâsıla (secî) ile surenin güçlü kapanışı" },
        ],
      },
    ],
    exercises: [],
  },
];

export default kafirunLessons;
