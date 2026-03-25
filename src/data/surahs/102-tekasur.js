// ═══════════════════════════════════════════════════════════
// TEKÂSÜR SURESİ (102) — Pipeline Üretimi
// 2026-03-25: 1 bölüm, 8 ayet tam kapsam
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

const tekasurLessons = [
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 1 — TEKÂSÜR 102:1-8
  // ═══════════════════════════════════════════════════════════
  {
    id: "S102-B01-tekasur",
    title: "Tekâsür (1-8)",
    titleAr: "سُورَة التكاثر 1-8",
    stage: 2,
    level: 8,
    surah: 102,
    description: "Sure, dünyalık rekabet ve mal çokluğuyla övünmenin insanları nasıl oyaladığını, ölümün bu gaflete son vereceğini ve ahirette hesap verileceğini anlatır.",
    verses: [
      {
        surah: 102, ayah: 1,
        arabic: "أَلۡهَىٰكُمُ ٱلتَّكَاثُرُ",
        translation: "Çoğalma hırsı sizi oyaladı.",
        words: [
          { arabic: "أَلۡهَىٰكُمُ", transliteration: "elhâküm", root: "ل-ه-و", pattern: "أَفْعَلَ", pos: "fil", meaning_tr: "sizi oyaladı, meşgul etti", irab: "{Fiil-i mâzî}, IV. bâb. Fâil müstetir (هو). Kâfın müttasıl zamiri {mef'ûl bih} konumunda.", irab_short: "mâzî, IV. bâb", turkish_bridge: "Lehv, leh bu kökten", balagha_note: "İstifhâm manası içeren tazammun" },
          { arabic: "ٱلتَّكَاثُرُ", transliteration: "et-tekâsur", root: "ك-ث-ر", pattern: "تَفَاعُل", pos: "ism", meaning_tr: "çokluğu, sayıca fazla olmayı", irab: "{Fâil} konumunda. Ref' hâlinde merfu'. Başındaki elif-lâm {tarif} edatı.", irab_short: "fâil, merfû", turkish_bridge: "Kesir, kesret, ekser bu kökten", balagha_note: "Masdar olarak kullanılmış, süreklilik ifadesi" },
        ],
      },
      {
        surah: 102, ayah: 2,
        arabic: "حَتَّىٰ زُرۡتُمُ ٱلۡمَقَابِرَ",
        translation: "Öyle ki mezarları ziyaret edinceye kadar.",
        words: [
          { arabic: "حَتَّىٰ", transliteration: "hattâ", root: null, pos: "harf", meaning_tr: "öyle ki, ta ki", irab: "{Harf-i cer} ve gâye edatı. Sonrasında gelen fiili nasb eder.", irab_short: "harf-i cer ve gâye", turkish_bridge: null, balagha_note: "Gâyeyi belirtme, abartı ifadesi" },
          { arabic: "زُرۡتُمُ", transliteration: "zurtum", root: "ز-و-ر", pattern: "فَعَلَ", pos: "fil", meaning_tr: "ziyaret ettiniz", irab: "{Fiil-i mâzî}, I. bâb. Fâil müttasıl zamiri (تُمْ) {fâil} konumunda.", irab_short: "mâzî, I. bâb", turkish_bridge: "Ziyaret bu kökten", balagha_note: "Ölümü kinayeli olarak ziyaret kelimesiyle ifade etme" },
          { arabic: "ٱلۡمَقَابِرَ", transliteration: "el-mekâbir", root: "ق-ب-ر", pattern: "مَفَاعِل", pos: "ism", meaning_tr: "mezarları, kabirleri", irab: "{Mef'ûl bih} konumunda. Nasb hâlinde mansub. Cem-i kesîr sigası.", irab_short: "mef'ûl bih, mansûb", turkish_bridge: "Kabir bu kökten", balagha_note: "Ölümü somut hâle getiren metafor" },
        ],
      },
      {
        surah: 102, ayah: 3,
        arabic: "كَلَّا سَوۡفَ تَعۡلَمُونَ",
        translation: "Hayır! Yakında bileceksiniz.",
        words: [
          { arabic: "كَلَّا", transliteration: "kellâ", root: null, pos: "harf", meaning_tr: "hayır, kesinlikle olmaz", irab: "{Harf-i zecer ve nefî}. Şiddetli ret ve uyarı anlamı taşır.", irab_short: "harf-i zecer ve nefî", turkish_bridge: null, balagha_note: "Şiddetli ret ve tekid edatı" },
          { arabic: "سَوۡفَ", transliteration: "sevfe", root: null, pos: "harf", meaning_tr: "yakında, gelecekte", irab: "{Harf-i istikbâl}. Gelecek zaman bildiren edat.", irab_short: "harf-i istikbâl", turkish_bridge: null, balagha_note: "Tehdit ve vaid manası" },
          { arabic: "تَعۡلَمُونَ", transliteration: "ta'lemûn", root: "ع-ل-م", pattern: "فَعَلَ", pos: "fil", meaning_tr: "bileceksiniz", irab: "{Fiil-i muzâri'}, I. bâb. Ref' hâlinde merfu'. Vâv-ı cemâat ile {fâil} eki.", irab_short: "muzâri', I. bâb", turkish_bridge: "İlim, âlim bu kökten", balagha_note: "Tehditvari ifade" },
        ],
      },
      {
        surah: 102, ayah: 4,
        arabic: "ثُمَّ كَلَّا سَوۡفَ تَعۡلَمُونَ",
        translation: "Sonra hayır! Yakında bileceksiniz.",
        words: [
          { arabic: "ثُمَّ", transliteration: "summe", root: null, pos: "harf", meaning_tr: "sonra, ardından", irab: "{Harf-i atf}. Tertip ve terâhî ifade eden atf edatı.", irab_short: "harf-i atf", turkish_bridge: null, balagha_note: "Tedrîci tehdit, kademeli uyarı" },
          { arabic: "كَلَّا", transliteration: "kellâ", root: null, pos: "harf", meaning_tr: "hayır, kesinlikle olmaz", irab: "{Harf-i zecer ve nefî}. Şiddetli ret ve uyarı anlamı taşır.", irab_short: "harf-i zecer ve nefî", turkish_bridge: null, balagha_note: "Tekrar ile te'kid, şiddetlendirme" },
          { arabic: "سَوۡفَ", transliteration: "sevfe", root: null, pos: "harf", meaning_tr: "yakında, gelecekte", irab: "{Harf-i istikbâl}. Gelecek zaman bildiren edat.", irab_short: "harf-i istikbâl", turkish_bridge: null, balagha_note: "Tehdidin tekrarı" },
          { arabic: "تَعۡلَمُونَ", transliteration: "ta'lemûn", root: "ع-ل-م", pattern: "فَعَلَ", pos: "fil", meaning_tr: "bileceksiniz", irab: "{Fiil-i muzâri'}, I. bâb. Ref' hâlinde merfu'. Vâv-ı cemâat ile {fâil} eki.", irab_short: "muzâri', I. bâb", turkish_bridge: "İlim, âlim bu kökten", balagha_note: "Aynı ifadenin tekrarı ile şiddetlendirme" },
        ],
      },
      {
        surah: 102, ayah: 5,
        arabic: "كَلَّا لَوۡ تَعۡلَمُونَ عِلۡمَ ٱلۡيَقِينِ",
        translation: "Hayır! Eğer kesin bilgiyle bilseydiniz.",
        words: [
          { arabic: "كَلَّا", transliteration: "kellâ", root: null, pos: "harf", meaning_tr: "hayır, kesinlikle olmaz", irab: "{Harf-i zecer ve nefî}. Şiddetli ret ve uyarı anlamı taşır.", irab_short: "harf-i zecer ve nefî", turkish_bridge: null, balagha_note: "Üçüncü kez tekrar ile şiddetli vurgu" },
          { arabic: "لَوۡ", transliteration: "lev", root: null, pos: "harf", meaning_tr: "eğer, şayet", irab: "{Harf-i şart}. İmtinâ lil-imtinâ bildiren şart edatı.", irab_short: "harf-i şart", turkish_bridge: null, balagha_note: "İmkânsız şartı ifade eden faraziye" },
          { arabic: "تَعۡلَمُونَ", transliteration: "ta'lemûn", root: "ع-ل-م", pattern: "فَعَلَ", pos: "fil", meaning_tr: "bilseydiniz", irab: "{Fiil-i muzâri'}, I. bâb. Şart cevabının şartı konumunda. Ref' hâlinde merfu'.", irab_short: "muzâri', şart fiili", turkish_bridge: "İlim, âlim bu kökten", balagha_note: null },
          { arabic: "عِلۡمَ", transliteration: "ilme", root: "ع-ل-م", pattern: "فِعْل", pos: "ism", meaning_tr: "bilgiyi", irab: "{Mef'ûl mutlak} veya {mef'ûl bih sânî} konumunda. Nasb hâlinde mansub.", irab_short: "mef'ûl mutlak, mansûb", turkish_bridge: "İlim bu kökten", balagha_note: "Bilginin niteliğini sıfatıyla birlikte belirtme" },
          { arabic: "ٱلۡيَقِينِ", transliteration: "el-yakîn", root: "ي-ق-ن", pattern: "فَعِيل", pos: "ism", meaning_tr: "kesin bilgiyi", irab: "{Muzâf ileyh} konumunda. Cer hâlinde mecrur. İlm kelimesine muzaf.", irab_short: "muzâf ileyh, mecrur", turkish_bridge: "Yakin bu kökten", balagha_note: "İzâfet ile bilginin kesinliğini vurgu" },
        ],
      },
      {
        surah: 102, ayah: 6,
        arabic: "لَتَرَوُنَّ ٱلۡجَحِيمَ",
        translation: "And olsun ki cehennemi göreceksiniz.",
        words: [
          { arabic: "لَتَرَوُنَّ", transliteration: "leteravunne", root: "ر-أ-ي", pattern: "فَعَلَ", pos: "fil", meaning_tr: "and olsun ki göreceksiniz", irab: "{Fiil-i muzâri'}, I. bâb. Lâm-ı kasem ve nûn-ı te'kîd ile muvekkel. Ref' hâlinde merfu'.", irab_short: "muzâri' muvekkel bi'l-kasem", turkish_bridge: "Rüya bu kökten", balagha_note: "Kasemle te'kid edilmiş fiil, kesin vaad" },
          { arabic: "ٱلۡجَحِيمَ", transliteration: "el-cahîm", root: "ج-ح-م", pattern: "فَعِيل", pos: "ism", meaning_tr: "cehennemi", irab: "{Mef'ûl bih} konumunda. Nasb hâlinde mansub. Cehennemin özel adlarından.", irab_short: "mef'ûl bih, mansûb", turkish_bridge: "Cehennem bu kökten", balagha_note: "Cehennemin en şiddetli yakıcılığını ifade eden isim" },
        ],
      },
      {
        surah: 102, ayah: 7,
        arabic: "ثُمَّ لَتَرَوُنَّهَا عَيۡنَ ٱلۡيَقِينِ",
        translation: "Sonra onu kesin görmekle göreceksiniz.",
        words: [
          { arabic: "ثُمَّ", transliteration: "summe", root: null, pos: "harf", meaning_tr: "sonra, ardından", irab: "{Harf-i atf}. Tertip ve terâhî ifade eden atf edatı.", irab_short: "harf-i atf", turkish_bridge: null, balagha_note: "Kademeli artış ve tekrar" },
          { arabic: "لَتَرَوُنَّهَا", transliteration: "leteravunnehâ", root: "ر-أ-ي", pattern: "فَعَلَ", pos: "fil", meaning_tr: "and olsun ki onu göreceksiniz", irab: "{Fiil-i muzâri'}, I. bâb. Lâm-ı kasem ve nûn-ı te'kîd ile muvekkel. Sonda hâ zamiri {mef'ûl bih}.", irab_short: "muzâri' muvekkel, I. bâb", turkish_bridge: "Rüya bu kökten", balagha_note: "Kasemle te'kid, zamir ile tayin" },
          { arabic: "عَيۡنَ", transliteration: "ayne", root: "ع-ي-ن", pattern: "فَعْل", pos: "ism", meaning_tr: "göz ile, kesinlik ile", irab: "{Mef'ûl mutlak} veya {hâl} konumunda. Nasb hâlinde mansub. İzâfetle.", irab_short: "mef'ûl mutlak, mansûb", turkish_bridge: "Ayn, göz bu kökten", balagha_note: "Görmenin kesinliğini vurgu" },
          { arabic: "ٱلۡيَقِينِ", transliteration: "el-yakîn", root: "ي-ق-ن", pattern: "فَعِيل", pos: "ism", meaning_tr: "kesin bilgiyi", irab: "{Muzâf ileyh} konumunda. Cer hâlinde mecrur. Ayn kelimesine muzaf.", irab_short: "muzâf ileyh, mecrur", turkish_bridge: "Yakin bu kökten", balagha_note: "Yakînin farklı mertebelerini gösterme" },
        ],
      },
      {
        surah: 102, ayah: 8,
        arabic: "ثُمَّ لَتُسۡـَٔلُنَّ يَوۡمَئِذٍ عَنِ ٱلنَّعِيمِ",
        translation: "Sonra o gün nimetten sorulacaksınız.",
        words: [
          { arabic: "ثُمَّ", transliteration: "summe", root: null, pos: "harf", meaning_tr: "sonra, ardından", irab: "{Harf-i atf}. Tertip ve terâhî ifade eden atf edatı.", irab_short: "harf-i atf", turkish_bridge: null, balagha_note: "Sıralı olayları dizme" },
          { arabic: "لَتُسۡـَٔلُنَّ", transliteration: "letüs'elünne", root: "س-أ-ل", pattern: "فُعِلَ", pos: "fil", meaning_tr: "and olsun ki sorulacaksınız", irab: "{Fiil-i muzâri'} meçhul sîgası. Lâm-ı kasem ve nûn-ı te'kîd ile muvekkel. Ref' hâlinde merfu'.", irab_short: "muzâri' meçhul, muvekkel", turkish_bridge: "Sual, mesele bu kökten", balagha_note: "Kasemle te'kid edilmiş meçhul sîga, tehdid" },
          { arabic: "يَوۡمَئِذٍ", transliteration: "yevmeiẕin", root: "ي-و-م", pattern: "فَعْل", pos: "ism", meaning_tr: "o gün", irab: "{Zarf-ı zaman} konumunda. Nasb hâlinde mansub. İẕ ile mürekkep kelime.", irab_short: "zarf-ı zaman, mansûb", turkish_bridge: "Yevm bu kökten", balagha_note: "Kıyamet gününü işaret eden zarf" },
          { arabic: "عَنِ", transliteration: "ani", root: null, pos: "harf", meaning_tr: "hakkında, -den", irab: "{Harf-i cer}. Sonrasında gelen ismi cer hâlinde mecrur eder.", irab_short: "harf-i cer", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلنَّعِيمِ", transliteration: "en-na'îm", root: "ن-ع-م", pattern: "فَعِيل", pos: "ism", meaning_tr: "nimetleri", irab: "{İsm-i mecrur} konumunda. (عَنِ) edatı ile cer hâlinde mecrur.", irab_short: "mecrur bi'l-harf", turkish_bridge: "Nimet, in'âm bu kökten", balagha_note: "Genel ifade ile tüm nimetleri kapsama" },
        ],
      },
    ],
    exercises: [],
  },
];

export default tekasurLessons;
