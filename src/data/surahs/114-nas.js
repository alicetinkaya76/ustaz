// ═══════════════════════════════════════════════════════════
// NÂS SURESİ (114) — Pipeline Üretimi
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

const nasLessons = [
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 1 — NÂS 114:1-6
  // ═══════════════════════════════════════════════════════════
  {
    id: "S114-B01-nas",
    title: "Nâs (1-6)",
    titleAr: "سُورَة الناس 1-6",
    stage: 2,
    level: 8,
    surah: 114,
    description: "İnsanların Rabbi, Meliki ve İlahı olan Allah'a şeytanın vesveselerinden sığınma duası. Şeytan hem cin hem de insan türündendir.",
    verses: [
      {
        surah: 114, ayah: 1,
        arabic: "قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ",
        translation: "De ki: İnsanların Rabbine sığınırım.",
        words: [
          { arabic: "قُلۡ", transliteration: "qul", root: "ق-و-ل", pattern: "فُلْ", pos: "fil", meaning_tr: "de, söyle", irab: "{Fiil-i emr}, I. bâb, fâili müstetir {ente}. Cümle ibtidâiye lâ mahalle lehâ mine'l-i'râb.", irab_short: "emr, I. bâb", turkish_bridge: "Kavl, kâl, makâl bu kökten", balagha_note: null },
          { arabic: "أَعُوذُ", transliteration: "a'ûzu", root: "ع-و-ذ", pattern: "أَفْعُلُ", pos: "fil", meaning_tr: "sığınırım", irab: "{Fiil-i muzâri'}, I. bâb, fâili müstetir {ene}. Mahalli ref' bi'l-hikâye.", irab_short: "muzâri', I. bâb", turkish_bridge: null, balagha_note: null },
          { arabic: "بِرَبِّ", transliteration: "bi-rabbi", root: "ر-ب-ب", pattern: "فَعّ", pos: "ism", meaning_tr: "rabbine (sığınırım)", irab: "{Câr-mecrûr}, bâ harfi cerr, rabb kelimesi mecrûr bi'l-bâ ve alâmetu cerrihi'l-kesra. Mute'allık bi'l-fi'l {a'ûzu}.", irab_short: "mecrûr bi'l-bâ", turkish_bridge: "Rabb bu kökten", balagha_note: null },
          { arabic: "ٱلنَّاسِ", transliteration: "an-nâsi", root: null, pos: "ism", meaning_tr: "insanların", irab: "{Muzâf ileyh}, mecrûr bi'l-izâfe ve alâmetu cerrihi'l-kesra.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "Nâs bu kelimeden", balagha_note: null },
        ],
      },
      {
        surah: 114, ayah: 2,
        arabic: "مَلِكِ ٱلنَّاسِ",
        translation: "İnsanların hükümdarı,",
        words: [
          { arabic: "مَلِكِ", transliteration: "maliki", root: "م-ل-ك", pattern: "فَعِل", pos: "ism", meaning_tr: "hükümdarı, kralı", irab: "{Bedel} min rabbi'n-nâs ev {sıfat} lehu, mecrûr teb'an li'l-mecrûr ve alâmetu cerrihi'l-kesra.", irab_short: "bedel/sıfat, mecrûr", turkish_bridge: "Melik, mülk bu kökten", balagha_note: null },
          { arabic: "ٱلنَّاسِ", transliteration: "an-nâsi", root: null, pos: "ism", meaning_tr: "insanların", irab: "{Muzâf ileyh}, mecrûr bi'l-izâfe ve alâmetu cerrihi'l-kesra.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "Nâs bu kelimeden", balagha_note: null },
        ],
      },
      {
        surah: 114, ayah: 3,
        arabic: "إِلَٰهِ ٱلنَّاسِ",
        translation: "İnsanların ilahı,",
        words: [
          { arabic: "إِلَٰهِ", transliteration: "ilâhi", root: "أ-ل-ه", pattern: "فِعَال", pos: "ism", meaning_tr: "tanrısı, ilahı", irab: "{Bedel} min rabbi'n-nâs ev {sıfat} lehu, mecrûr teb'an li'l-mecrûr ve alâmetu cerrihi'l-kesra.", irab_short: "bedel/sıfat, mecrûr", turkish_bridge: "İlah bu kökten", balagha_note: null },
          { arabic: "ٱلنَّاسِ", transliteration: "an-nâsi", root: null, pos: "ism", meaning_tr: "insanların", irab: "{Muzâf ileyh}, mecrûr bi'l-izâfe ve alâmetu cerrihi'l-kesra.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "Nâs bu kelimeden", balagha_note: null },
        ],
      },
      {
        surah: 114, ayah: 4,
        arabic: "مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ",
        translation: "O sinsi vesvesecinin şerrinden,",
        words: [
          { arabic: "مِن", transliteration: "min", root: null, pos: "harf", meaning_tr: "den, dan (ayrılma)", irab: "{Harf-i cerr}, şerr kelimesini cerr eder. Câr-mecrûr mute'allık bi'l-fi'l {a'ûzu}.", irab_short: "harf-i cerr", turkish_bridge: null, balagha_note: null },
          { arabic: "شَرِّ", transliteration: "şarri", root: "ش-ر-ر", pattern: "فَعْل", pos: "ism", meaning_tr: "şerri, kötülüğü", irab: "{Mecrûr} bi-min ve alâmetu cerrihi'l-kesra, muzâf.", irab_short: "mecrûr bi-min", turkish_bridge: "Şer bu kökten", balagha_note: null },
          { arabic: "ٱلۡوَسۡوَاسِ", transliteration: "el-waswâsi", root: "و-س-و-س", pattern: "فَعْلَال", pos: "ism", meaning_tr: "vesveseci, fısıldayan", irab: "{Muzâf ileyh}, mecrûr bi'l-izâfe ve alâmetu cerrihi'l-kesra, mevsûf.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "Vesvese bu kökten", balagha_note: null },
          { arabic: "ٱلۡخَنَّاسِ", transliteration: "el-khannâsi", root: "خ-ن-س", pattern: "فَعَّال", pos: "ism", meaning_tr: "sinsi, gizlenen", irab: "{Sıfat} li'l-waswâs, mecrûr teb'an li'l-mevsûf ve alâmetu cerrihi'l-kesra.", irab_short: "sıfat, mecrûr", turkish_bridge: null, balagha_note: "Mübalağa kalıbı (فَعَّال) ile şeytanın çok gizlendiği vurgulanıyor" },
        ],
      },
      {
        surah: 114, ayah: 5,
        arabic: "ٱلَّذِي يُوَسۡوِسُ فِي صُدُورِ ٱلنَّاسِ",
        translation: "O ki insanların göğüslerine vesvese verir,",
        words: [
          { arabic: "ٱلَّذِي", transliteration: "allazî", root: null, pos: "ism", meaning_tr: "o ki, olan", irab: "{İsm-i mevsûl}, mecrûr teb'an li'l-waswâs bi't-teb'iyye ve alâmetu cerrihi'l-kesra.", irab_short: "mevsûl, mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "يُوَسۡوِسُ", transliteration: "yuwaswisu", root: "و-س-و-س", pattern: "يُفَعْلِلُ", pos: "fil", meaning_tr: "vesvese verir, fısıldar", irab: "{Fiil-i muzâri'}, II. bâb (rubâî), fâili müstetir {hüve}. Cümle sıla lâ mahalle lehâ mine'l-i'râb.", irab_short: "muzâri', II. bâb", turkish_bridge: "Vesvese bu kökten", balagha_note: null },
          { arabic: "فِي", transliteration: "fî", root: null, pos: "harf", meaning_tr: "içinde, de", irab: "{Harf-i cerr}, sudûr kelimesini cerr eder. Câr-mecrûr mute'allık bi'l-fi'l {yuwaswisu}.", irab_short: "harf-i cerr", turkish_bridge: null, balagha_note: null },
          { arabic: "صُدُورِ", transliteration: "sudûri", root: "ص-د-ر", pattern: "فُعُول", pos: "ism", meaning_tr: "göğüsleri, kalbleri", irab: "{Mecrûr} bi-fî ve alâmetu cerrihi'l-kesra, muzâf.", irab_short: "mecrûr bi-fî", turkish_bridge: "Sadr bu kökten", balagha_note: null },
          { arabic: "ٱلنَّاسِ", transliteration: "an-nâsi", root: null, pos: "ism", meaning_tr: "insanların", irab: "{Muzâf ileyh}, mecrûr bi'l-izâfe ve alâmetu cerrihi'l-kesra.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "Nâs bu kelimeden", balagha_note: null },
        ],
      },
      {
        surah: 114, ayah: 6,
        arabic: "مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ",
        translation: "Cinlerden ve insanlardan.",
        words: [
          { arabic: "مِنَ", transliteration: "mina", root: null, pos: "harf", meaning_tr: "den, dan", irab: "{Harf-i cerr}, cinne kelimesini cerr eder. Câr-mecrûr beyan li'l-waswâs.", irab_short: "harf-i cerr", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلۡجِنَّةِ", transliteration: "el-jinnati", root: "ج-ن-ن", pattern: "فِعْلَة", pos: "ism", meaning_tr: "cinler", irab: "{Mecrûr} bi-min ve alâmetu cerrihi'l-kesra, ma'tûf aleyhi.", irab_short: "mecrûr bi-min", turkish_bridge: "Cin, cennet, mecnun bu kökten", balagha_note: null },
          { arabic: "وَٱلنَّاسِ", transliteration: "wa'n-nâsi", root: null, pos: "ism", meaning_tr: "ve insanlar", irab: "{Ma'tûf} ale'l-cinne bi'l-vâv, mecrûr teb'an li'l-ma'tûf aleyh ve alâmetu cerrihi'l-kesra.", irab_short: "ma'tûf, mecrûr", turkish_bridge: "Nâs bu kelimeden", balagha_note: "Takdîm-te'hîr: Cinler insanlardan önce zikredildi, çünkü şeytanın aslı cindendir" },
        ],
      },
    ],
    exercises: [],
  },
];

export default nasLessons;
