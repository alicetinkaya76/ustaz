// ═══════════════════════════════════════════════════════════
// FÎL SURESİ (105) — Pipeline Üretimi
// 2026-03-25: 1 bölüm, 5 ayet tam kapsam
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

const filLessons = [
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 1 — FÎL 105:1-5
  // ═══════════════════════════════════════════════════════════
  {
    id: "S105-B01-fil",
    title: "Fîl (1-5)",
    titleAr: "سُورَة الفيل 1-5",
    stage: 2,
    level: 8,
    surah: 105,
    description: "Allah'ın fil ashabını (Ebrehe ve ordusunu) nasıl helâk ettiğini anlatan sure. Kuşlarla taş yağdırarak onları yenilmiş ekin yaprağı gibi yaptığını bildirir.",
    verses: [
      {
        surah: 105, ayah: 1,
        arabic: "أَلَمۡ تَرَ كَيۡفَ فَعَلَ رَبُّكَ بِأَصۡحَٰبِ ٱلۡفِيلِ",
        translation: "Fil sahiplerine Rabbinin ne ettiğini görmedin mi?",
        words: [
          { arabic: "أَلَمۡ", transliteration: "elem", root: null, pos: "harf", meaning_tr: "değil mi, -madı mı", irab: "{Hemzetu'l-istifhâm} (soru edatı) + {lâ} (nefiy edatı) + {lem} (cezim edatı). Takrîrî soru (te'kîd için) oluşturur.", irab_short: "istifhâm + nefiy + cezim", turkish_bridge: null, balagha_note: "İstifhâm-ı takrîrî: Te'kîd için soru şeklinde ifade" },
          { arabic: "تَرَ", transliteration: "tera", root: "ر-أ-ي", pattern: "تَفْعَل", pos: "fil", meaning_tr: "görmek, bilmek", irab: "{Fiil-i muzâri'} I. bâb (رَأَى), lem ile mecrûm. Fâili müstetir ente (sen). Burada ilmî rü'yet (bilmek) anlamında.", irab_short: "muzâri' mecrûm, I. bâb", turkish_bridge: "Rey, re'y bu kökten", balagha_note: null },
          { arabic: "كَيۡفَ", transliteration: "keyfe", root: "ك-ي-ف", pos: "ism", meaning_tr: "nasıl, ne şekilde", irab: "{İsm-i istifhâm} (soru ismi) ve {zarf-ı hâl}. Fe'ale fiilinin hâli konumunda.", irab_short: "istifhâm, zarf-ı hâl", turkish_bridge: "Keyfiyet bu kökten", balagha_note: null },
          { arabic: "فَعَلَ", transliteration: "fe'ale", root: "ف-ع-ل", pattern: "فَعَلَ", pos: "fil", meaning_tr: "yapmak, etmek", irab: "{Fiil-i mâzî} I. bâb. Fâili rabbuke kelimesi.", irab_short: "mâzî, I. bâb", turkish_bridge: "Fiil bu kökten", balagha_note: null },
          { arabic: "رَبُّكَ", transliteration: "rabbuke", root: "ر-ب-ب", pattern: "فَعْل", pos: "ism", meaning_tr: "senin Rabbin", irab: "{Fâil} merfû (u ile). Sonundaki kef {zamîr muttasıl} (bitişik zamir) muzâf ileyh konumunda.", irab_short: "fâil merfû", turkish_bridge: "Rab, rabbi bu kökten", balagha_note: null },
          { arabic: "بِأَصۡحَٰبِ", transliteration: "bi ashâbi", root: "ص-ح-ب", pattern: "أَفْعَال", pos: "ism", meaning_tr: "sahipleriyle, ashabıyla", irab: "{Câr-mecrûr}. Bâ harf-i cerri + ashâb mecrûr (i ile). Muzâf olduğu için tenvin düşmüş.", irab_short: "câr-mecrûr", turkish_bridge: "Ashab, sahib bu kökten", balagha_note: null },
          { arabic: "ٱلۡفِيلِ", transliteration: "el-fîl", root: "ف-ي-ل", pattern: "فِعْل", pos: "ism", meaning_tr: "fil", irab: "{Muzâf ileyh} mecrûr (i ile). Ashâb kelimesine muzâf.", irab_short: "muzâf ileyh mecrûr", turkish_bridge: "Fil bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 105, ayah: 2,
        arabic: "أَلَمۡ يَجۡعَلۡ كَيۡدَهُمۡ فِي تَضۡلِيلٖ",
        translation: "Onların düzenlerini boşa çıkarmadı mı?",
        words: [
          { arabic: "أَلَمۡ", transliteration: "elem", root: null, pos: "harf", meaning_tr: "değil mi, -madı mı", irab: "{Hemzetu'l-istifhâm} + {lâ nâfiye} + {lem} cezim edatı. Takrîrî soru oluşturur.", irab_short: "istifhâm + nefiy + cezim", turkish_bridge: null, balagha_note: "İstifhâm-ı takrîrî devamı" },
          { arabic: "يَجۡعَلۡ", transliteration: "yec'al", root: "ج-ع-ل", pattern: "يَفْعَل", pos: "fil", meaning_tr: "yapmak, kılmak", irab: "{Fiil-i muzâri'} I. bâb, lem ile mecrûm. Fâili müstetir huve. Nasb alan fiil (mef'ûlü keydehüm).", irab_short: "muzâri' mecrûm, I. bâb", turkish_bridge: null, balagha_note: null },
          { arabic: "كَيۡدَهُمۡ", transliteration: "keydehüm", root: "ك-ي-د", pattern: "فَعْل", pos: "ism", meaning_tr: "onların tuzağını, hilelerini", irab: "{Mef'ûl bih} mensûb. Sonundaki hüm {zamîr muttasıl} muzâf ileyh konumunda.", irab_short: "mef'ûl bih mensûb", turkish_bridge: null, balagha_note: null },
          { arabic: "فِي", transliteration: "fî", root: null, pos: "harf", meaning_tr: "içinde, -de", irab: "{Harf-i cer}. Tadlîl kelimesini cerr eder.", irab_short: "harf-i cer", turkish_bridge: null, balagha_note: null },
          { arabic: "تَضۡلِيلٖ", transliteration: "tadlîl", root: "ض-ل-ل", pattern: "تَفْعِيل", pos: "ism", meaning_tr: "sapıtma, boşa çıkarma", irab: "{Mecrûr} fî harf-i cerri ile. {Hâl} veya {zarf} manasında câr-mecrûr oluşturur.", irab_short: "mecrûr", turkish_bridge: "Dalâlet bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 105, ayah: 3,
        arabic: "وَأَرۡسَلَ عَلَيۡهِمۡ طَيۡرًا أَبَابِيلَ",
        translation: "Onların üzerine sürü sürü kuşlar gönderdi.",
        words: [
          { arabic: "وَأَرۡسَلَ", transliteration: "ve ersele", root: "ر-س-ل", pattern: "أَفْعَلَ", pos: "fil", meaning_tr: "ve gönderdi", irab: "{Vâv-ı atıf} + {fiil-i mâzî} IV. bâb. Fâili müstetir huve (Allah).", irab_short: "atıf + mâzî IV. bâb", turkish_bridge: "Resul, risâlet bu kökten", balagha_note: null },
          { arabic: "عَلَيۡهِمۡ", transliteration: "aleyhim", root: "ع-ل-و", pos: "harf", meaning_tr: "onların üzerine", irab: "{Zarf} manasında câr-mecrûr. Alâ harf-i cerri + hüm zamîr muttasıl mecrûr.", irab_short: "câr-mecrûr", turkish_bridge: "Alî, a'lâ bu kökten", balagha_note: null },
          { arabic: "طَيۡرًا", transliteration: "tayran", root: "ط-ي-ر", pattern: "فَعْل", pos: "ism", meaning_tr: "kuşlar", irab: "{Mef'ûl bih} mensûb (tenvin ile). Ersele fiilinin mef'ûlü.", irab_short: "mef'ûl bih mensûb", turkish_bridge: "Tayyâre bu kökten", balagha_note: null },
          { arabic: "أَبَابِيلَ", transliteration: "ebâbîl", root: null, pattern: "أَفَاعِيل", pos: "ism", meaning_tr: "sürüler halinde", irab: "{Sıfat} veya {hâl} mansûb. Tayr kelimesinin sıfatı. Gayr-i munsarıf olduğu için tenvin almaz.", irab_short: "sıfat mansûb", turkish_bridge: null, balagha_note: "Nadir kullanılan kelime, kütle halinde anlamı" },
        ],
      },
      {
        surah: 105, ayah: 4,
        arabic: "تَرۡمِيهِم بِحِجَارَةٖ مِّن سِجِّيلٖ",
        translation: "Onlara çamurdan sertleşmiş taşlar atıyorlardı.",
        words: [
          { arabic: "تَرۡمِيهِم", transliteration: "termîhim", root: "ر-م-ي", pattern: "تَفْعِل", pos: "fil", meaning_tr: "onları taşlamak", irab: "{Fiil-i muzâri'} I. bâb, fâili müstetir hiye (kuşlar). Sonundaki hüm {zamîr muttasıl mef'ûl bih}.", irab_short: "muzâri', I. bâb", turkish_bridge: null, balagha_note: "Tayr kelimesinin hâli - o kuşlar ki onları taşlıyorlardı" },
          { arabic: "بِحِجَارَةٖ", transliteration: "bi hicâratin", root: "ح-ج-ر", pattern: "فِعَالَة", pos: "ism", meaning_tr: "taşlarla", irab: "{Câr-mecrûr} âlet (vasıta) manasında. Bâ harf-i cerri + hicâre mecrûr (tenvin ile).", irab_short: "câr-mecrûr", turkish_bridge: "Hacer, hicr bu kökten", balagha_note: null },
          { arabic: "مِّن", transliteration: "min", root: null, pos: "harf", meaning_tr: "-den, -dan", irab: "{Harf-i cer} beyan (açıklama) için. Siccîl kelimesini cerr eder.", irab_short: "harf-i cer", turkish_bridge: null, balagha_note: null },
          { arabic: "سِجِّيلٖ", transliteration: "siccîl", root: "س-ج-ل", pattern: "فِعِّيل", pos: "ism", meaning_tr: "sert çamur, kil taşı", irab: "{Mecrûr} min harf-i cerri ile (tenvin ile). Hicâre kelimesinin beyanı.", irab_short: "mecrûr", turkish_bridge: null, balagha_note: "Fars asıllı kelime, sert kil anlamında" },
        ],
      },
      {
        surah: 105, ayah: 5,
        arabic: "فَجَعَلَهُمۡ كَعَصۡفٖ مَّأۡكُولِۭ",
        translation: "Sonunda onları, yenilmiş ekin gibi yaptı.",
        words: [
          { arabic: "فَجَعَلَهُمۡ", transliteration: "fece'alehüm", root: "ج-ع-ل", pattern: "فَعَلَ", pos: "fil", meaning_tr: "sonra onları yaptı", irab: "{Fâ-yı fâsıha} (sonuç bildiren) + {fiil-i mâzî} I. bâb. Sonundaki hüm {zamîr muttasıl mef'ûl bih}.", irab_short: "fâsıha + mâzî I. bâb", turkish_bridge: null, balagha_note: "Fâ-yı fâsıha: Önceki olayların neticesini bildirir" },
          { arabic: "كَعَصۡفٖ", transliteration: "ke'asfin", root: "ع-ص-ف", pattern: "فَعْل", pos: "ism", meaning_tr: "ekin yaprağı gibi", irab: "{Kâf-ı teşbîh} + {asf} mecrûr (tenvin ile). {Hâl} veya {mef'ûl-ü sânî} konumunda.", irab_short: "teşbîh + mecrûr", turkish_bridge: null, balagha_note: "Teşbîh-i mufassal: Benzetme edatıyla açık benzetme" },
          { arabic: "مَّأۡكُولِۭ", transliteration: "me'kûl", root: "أ-ك-ل", pattern: "مَفْعُول", pos: "ism", meaning_tr: "yenilmiş", irab: "{Sıfat} mecrûr. Asf kelimesinin sıfatı. {İsm-i mef'ûl} vezni ile edilgenlik ifade eder.", irab_short: "sıfat mecrûr", turkish_bridge: "Ekl bu kökten", balagha_note: "İsm-i mef'ûl kalıbıyla edilgenlik vurgusu" },
        ],
      },
    ],
    exercises: [],
  },
];

export default filLessons;
