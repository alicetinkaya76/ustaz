// ═══════════════════════════════════════════════════════════
// MÂÛN SURESİ (107) — Pipeline Üretimi
// 2026-03-25: 1 bölüm, 7 ayet tam kapsam
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

const maunLessons = [
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 1 — MÂÛN 107:1-7
  // ═══════════════════════════════════════════════════════════
  {
    id: "S107-B01-maun",
    title: "Mâûn (1-7)",
    titleAr: "سُورَة الماعون 1-7",
    stage: 2,
    level: 8,
    surah: 107,
    description: "Dini inkar eden münafıkların öksüze kötü davranması, yoksulu doyurmaması ve namazda gafleti hakkında uyarılar içerir.",
    verses: [
      {
        surah: 107, ayah: 1,
        arabic: "أَرَءَيۡتَ ٱلَّذِي يُكَذِّبُ بِٱلدِّينِ",
        translation: "Dini yalan sayanı gördün mü?",
        words: [
          { arabic: "أَرَءَيۡتَ", transliteration: "erae'yte", root: "ر-أ-ي", pattern: "أَفْعَلْتَ", pos: "fil", meaning_tr: "gördün mü", irab: "{Fiil-i mâzî}, I. bâb, mütekellim ile muhatab. İstifhâm hemzesi ile başlamaktadır, ta'accüb (hayret) ifade eder.", irab_short: "mâzî, I. bâb, istifhâm", turkish_bridge: "Rüya bu kökten gelir", balagha_note: "İstifhâmiyye-i inkâriyye - inkar bildiren soru, hayret ve te'accüb ifade eder" },
          { arabic: "ٱلَّذِي", transliteration: "ellezî", root: null, pos: "ism", meaning_tr: "o kimse ki", irab: "{İsm-i mevsûl}, mef'ûl bih durumunda mensûb. Sonraki sıla cümlesi ile birlikte tam anlam verir.", irab_short: "mevsûl, mensûb", turkish_bridge: null, balagha_note: null },
          { arabic: "يُكَذِّبُ", transliteration: "yükezzibu", root: "ك-ذ-ب", pattern: "يُفَعِّلُ", pos: "fil", meaning_tr: "yalanlar, inkar eder", irab: "{Fiil-i muzâri}, II. bâb (تفعيل), fâili müstetir 'hüve'. Sıla cümlesi olup mevsûlü tamamlar.", irab_short: "muzâri, II. bâb", turkish_bridge: "Kâzib, tekzîb bu kökten", balagha_note: "II. bâb mübalağa ifade eder - sürekli yalanlamak" },
          { arabic: "بِٱلدِّينِ", transliteration: "biddîn", root: "د-ي-ن", pos: "ism", meaning_tr: "dini", irab: "{Câr-mecrûr}, bâ harfi cerrile mecrûr olmuş. Fiilin müteallik bihidir (يُكَذِّبُ fiilinin tamlayıcısı).", irab_short: "mecrûr, câr-mecrûr", turkish_bridge: "Din bu kökten gelir", balagha_note: null },
        ],
      },
      {
        surah: 107, ayah: 2,
        arabic: "فَذَٰلِكَ ٱلَّذِي يَدُعُّ ٱلۡيَتِيمَ",
        translation: "Öksüzü kakıştıran kimse işte odur.",
        words: [
          { arabic: "فَذَٰلِكَ", transliteration: "fezâlike", root: null, pos: "ism", meaning_tr: "işte o", irab: "Fâ harfi cevâb ve beyân içindir. {İsm-i işâret} mübtedâ durumunda merfûdur, uzağa işaret eder.", irab_short: "mübtedâ, merfû", turkish_bridge: null, balagha_note: "İşâret-i ba'îde ile uzaklık ve nefret ifade edilir" },
          { arabic: "ٱلَّذِي", transliteration: "ellezî", root: null, pos: "ism", meaning_tr: "o kimse ki", irab: "{İsm-i mevsûl}, haber durumunda merfû. Mübtedâ ذَٰلِكَ kelimesinin haberidir.", irab_short: "haber, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "يَدُعُّ", transliteration: "yedü'u", root: "د-ع-ع", pattern: "يَفُعُّ", pos: "fil", meaning_tr: "iter kakar, sertçe uzaklaştırır", irab: "{Fiil-i muzâri}, I. bâb, fâili müstetir 'hüve'. Sıla cümlesi olup mevsûlü açıklar.", irab_short: "muzâri, I. bâb", turkish_bridge: null, balagha_note: "Şiddetli itme ve kakma anlamında mübalağa" },
          { arabic: "ٱلۡيَتِيمَ", transliteration: "el-yetîm", root: "ي-ت-م", pos: "ism", meaning_tr: "öksüz", irab: "{Mef'ûl bih}, يَدُعُّ fiilinin mef'ûlü olup mensûbdur.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Yetim bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 107, ayah: 3,
        arabic: "وَلَا يَحُضُّ عَلَىٰ طَعَامِ ٱلۡمِسۡكِينِ",
        translation: "Yoksulu doyurmaya yanaşmayan kimse işte odur.",
        words: [
          { arabic: "وَلَا", transliteration: "velâ", root: null, pos: "harf", meaning_tr: "ve... -mez", irab: "Vâv harfi atıf, lâ harfi nefy-i muzâri. Bir önceki fiili atfeder ve olumsuzlaştırır.", irab_short: "atıf ve nefy", turkish_bridge: null, balagha_note: null },
          { arabic: "يَحُضُّ", transliteration: "yehuddu", root: "ح-ض-ض", pattern: "يَفُعُّ", pos: "fil", meaning_tr: "teşvik eder, özendirip", irab: "{Fiil-i muzâri}, I. bâb, lâ ile menfî. Fâili müstetir 'hüve', يَدُعُّ fiiline atıftır.", irab_short: "muzâri menfî, I. bâb", turkish_bridge: null, balagha_note: null },
          { arabic: "عَلَىٰ", transliteration: "alâ", root: null, pos: "harf", meaning_tr: "üzerine, -e dair", irab: "{Harf-i cer}, sonraki kelimeyi cer hâlinde yapar.", irab_short: "harf-i cer", turkish_bridge: null, balagha_note: null },
          { arabic: "طَعَامِ", transliteration: "ta'âmi", root: "ط-ع-م", pos: "ism", meaning_tr: "yemeği, doyurması", irab: "عَلَىٰ harfiyle {mecrûr}, mudâfın ilkidir. İkinci muzâf ile birlikte terkîb-i izâfî oluşturur.", irab_short: "mecrûr, mudâf", turkish_bridge: "Ta'âm bu kökten", balagha_note: null },
          { arabic: "ٱلۡمِسۡكِينِ", transliteration: "el-miskîn", root: "س-ك-ن", pos: "ism", meaning_tr: "yoksulun", irab: "{Muzâf ileyh}, cer hâlinde olup önceki mudâfı tamamlar.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "Mesken, sâkin bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 107, ayah: 4,
        arabic: "فَوَيۡلٞ لِّلۡمُصَلِّينَ",
        translation: "Vay o namaz kılanların haline ki:",
        words: [
          { arabic: "فَوَيۡلٞ", transliteration: "feveylin", root: "و-ي-ل", pos: "ism", meaning_tr: "vay haline, yazıklar olsun", irab: "Fâ harfi istinâf içindir. {ويل} mübtedâ durumunda merfû, helâk ve azâb anlamında masdardır.", irab_short: "mübtedâ, merfû", turkish_bridge: null, balagha_note: "Tehdit ve tehdîd için kullanılan ünlem" },
          { arabic: "لِّلۡمُصَلِّينَ", transliteration: "lilmüsallîn", root: "ص-ل-و", pos: "ism", meaning_tr: "namaz kılanlar için", irab: "Lâm harfi cer ve {müsallîn} cem-i müzekker sâlim olarak mecrûr. Mübtedânın haberi mahzûftur (kâin ve istikrâr).", irab_short: "mecrûr, cem-i müzekker sâlim", turkish_bridge: "Salât, müsallî, mescid bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 107, ayah: 5,
        arabic: "ٱلَّذِينَ هُمۡ عَن صَلَاتِهِمۡ سَاهُونَ",
        translation: "Onlar kıldıkları namazdan gafildirler.",
        words: [
          { arabic: "ٱلَّذِينَ", transliteration: "ellezîne", root: null, pos: "ism", meaning_tr: "onlar ki", irab: "{İsm-i mevsûl} cem-i müzekker, مُصَلِّينَ kelimesinden bedel veya sıfat durumundadır.", irab_short: "mevsûl, bedel", turkish_bridge: null, balagha_note: null },
          { arabic: "هُمۡ", transliteration: "hüm", root: null, pos: "ism", meaning_tr: "onlar", irab: "{Zamir münfasıl}, mübtedâ durumunda merfû. Sıla cümlesinde vurgu ve te'kîd için getirilmiştir.", irab_short: "mübtedâ, merfû", turkish_bridge: null, balagha_note: "Te'kîd için getirilmiş fasıl zamiri" },
          { arabic: "عَن", transliteration: "an", root: null, pos: "harf", meaning_tr: "-den, -dan uzak", irab: "{Harf-i cer}, mücâveze anlamında sonraki kelimeyi cer yapar.", irab_short: "harf-i cer", turkish_bridge: null, balagha_note: null },
          { arabic: "صَلَاتِهِمۡ", transliteration: "salâtihim", root: "ص-ل-و", pos: "ism", meaning_tr: "namazlarından", irab: "عَن harfiyle {mecrûr}, mudâf. Sonundaki هِمْ zamiri muzâf ileyh yerine geçer.", irab_short: "mecrûr, mudâf", turkish_bridge: "Salât bu kökten", balagha_note: null },
          { arabic: "سَاهُونَ", transliteration: "sâhûn", root: "س-ه-و", pattern: "فَاعِلُون", pos: "ism", meaning_tr: "gafil olanlar", irab: "{İsm-i fâil} cem-i müzekker sâlim, haber durumunda merfû. Mübtedâ هُمْ kelimesinin haberidir.", irab_short: "haber, merfû", turkish_bridge: "Sehiv bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 107, ayah: 6,
        arabic: "ٱلَّذِينَ هُمۡ يُرَآءُونَ",
        translation: "Onlar gösteriş yaparlar.",
        words: [
          { arabic: "ٱلَّذِينَ", transliteration: "ellezîne", root: null, pos: "ism", meaning_tr: "onlar ki", irab: "{İsm-i mevsûl}, bir önceki mevsûlden bedel-i kül mine'l-küldür veya sıfat-ı sâniye durumundadır.", irab_short: "mevsûl, bedel", turkish_bridge: null, balagha_note: null },
          { arabic: "هُمۡ", transliteration: "hüm", root: null, pos: "ism", meaning_tr: "onlar", irab: "{Zamir münfasıl}, mübtedâ durumunda merfû. Sıla cümlesinde te'kîd için fasıl zamiridir.", irab_short: "mübtedâ, merfû", turkish_bridge: null, balagha_note: "Te'kîd için getirilmiş fasıl zamiri" },
          { arabic: "يُرَآءُونَ", transliteration: "yürâûn", root: "ر-أ-ي", pattern: "يُفَاعِلُون", pos: "fil", meaning_tr: "gösteriş yaparlar, riyâ ederler", irab: "{Fiil-i muzâri}, III. bâb (mufâale), cem-i müzekker. هُمْ zamirinin haberi durumundadır.", irab_short: "muzâri, III. bâb", turkish_bridge: "Riyâ bu kökten", balagha_note: "III. bâb müşâreke anlamında - karşılıklı gösterme" },
        ],
      },
      {
        surah: 107, ayah: 7,
        arabic: "وَيَمۡنَعُونَ ٱلۡمَاعُونَ",
        translation: "Onlar basit şeyleri dahi vermezler.",
        words: [
          { arabic: "وَيَمۡنَعُونَ", transliteration: "veyemne'ûn", root: "م-ن-ع", pattern: "يَفْعَلُون", pos: "fil", meaning_tr: "ve engel olurlar, vermezler", irab: "Vâv atıf harfi. {Fiil-i muzâri}, I. bâb, cem-i müzekker. يُرَآءُونَ fiiline atıftır.", irab_short: "muzâri, I. bâb", turkish_bridge: "Mâni bu kökten", balagha_note: null },
          { arabic: "ٱلۡمَاعُونَ", transliteration: "el-mâ'ûn", root: "ع-و-ن", pos: "ism", meaning_tr: "yardım araçları, basit eşyalar", irab: "{Mef'ûl bih}, يَمۡنَعُونَ fiilinin mef'ûlü olup mensûbdur. Günlük yardım araçlarını ifade eder.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Mü'âvenet, i'âne bu kökten", balagha_note: "Surenin ismi - küçük yardımları bile esirgemek" },
        ],
      },
    ],
    exercises: [],
  },
];

export default maunLessons;
