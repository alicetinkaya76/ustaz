// ═══════════════════════════════════════════════════════════
// KÂRIA SURESİ (101) — Pipeline Üretimi
// 2026-03-25: 1 bölüm, 11 ayet tam kapsam
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

const kariaLessons = [
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 1 — KÂRIA 101:1-11
  // ═══════════════════════════════════════════════════════════
  {
    id: "S101-B01-karia",
    title: "Kâria (1-11)",
    titleAr: "سُورَة القارعة 1-11",
    stage: 2,
    level: 8,
    surah: 101,
    description: "Kıyamet gününün dehşeti, insanların dağınık hale gelmesi ve amellerin tartılmasına göre karşılaşacakları akıbet anlatılmaktadır.",
    verses: [
      {
        surah: 101, ayah: 1,
        arabic: "الْقَارِعَةُ",
        translation: "Gürültü koparacak olan",
        words: [
          { arabic: "الْقَارِعَةُ", transliteration: "el-kâri'ah", root: "ق-ر-ع", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "şiddetle çarpan, dehşet verici olay", irab: "{İsm-i fâil} kalıbında, kıyamet için kullanılan özel isim. {Mübtedâ} hükmünde merfû", irab_short: "mübtedâ, merfû", turkish_bridge: null, balagha_note: "Surenin başında nakıs cümle ile dikkat çekme" },
        ],
      },
      {
        surah: 101, ayah: 2,
        arabic: "مَا الْقَارِعَةُ",
        translation: "Nedir o gürültü koparacak olan?",
        words: [
          { arabic: "مَا", transliteration: "mâ", root: null, pos: "harf", meaning_tr: "nedir", irab: "{İstifhâm edatı} olarak kullanılmış, {mübtedâ} yerinde", irab_short: "istifhâm, mübtedâ", turkish_bridge: null, balagha_note: null },
          { arabic: "الْقَارِعَةُ", transliteration: "el-kâri'ah", root: "ق-ر-ع", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "şiddetle çarpan, dehşet verici olay", irab: "{Haber} olarak merfû, istifhâm cümlesinin haberi", irab_short: "haber, merfû", turkish_bridge: null, balagha_note: "Aynı kelimenin tekrarı ile te'kîd sanatı" },
        ],
      },
      {
        surah: 101, ayah: 3,
        arabic: "وَمَا أَدْرَاكَ مَا الْقَارِعَةُ",
        translation: "O gürültü koparacak olanın ne olduğunu sen bilir misin?",
        words: [
          { arabic: "وَمَا", transliteration: "ve mâ", root: null, pos: "harf", meaning_tr: "ve nedir, nasıl bileceksin", irab: "{Atıf harfi} و ile başlayan {istifhâm edatı}, inkârî istifhâm", irab_short: "istifhâm inkârî", turkish_bridge: null, balagha_note: null },
          { arabic: "أَدْرَاكَ", transliteration: "edrâke", root: "د-ر-ك", pattern: "أَفْعَلَ", pos: "fil", meaning_tr: "sana bildirdi, kavratتı", irab: "{Fiil-i mâzî}, IV. bâb. {Fâil} müstetir أنت, {mef'ûl} kâf zamiri", irab_short: "mâzî, IV. bâb", turkish_bridge: "İdrak kelimesi bu kökten", balagha_note: null },
          { arabic: "مَا", transliteration: "mâ", root: null, pos: "harf", meaning_tr: "ne, nedir", irab: "{İstifhâm edatı}, ikinci istifhâm cümlesi başlangıcı", irab_short: "istifhâm", turkish_bridge: null, balagha_note: null },
          { arabic: "الْقَارِعَةُ", transliteration: "el-kâri'ah", root: "ق-ر-ع", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "şiddetle çarpan, dehşet verici olay", irab: "{Haber} olarak merfû, istifhâm cümlesinin haberi", irab_short: "haber, merfû", turkish_bridge: null, balagha_note: "Üçüncü kez tekrar ile güçlü te'kîd" },
        ],
      },
      {
        surah: 101, ayah: 4,
        arabic: "يَوْمَ يَكُونُ النَّاسُ كَالْفَرَاشِ الْمَبْثُوثِ",
        translation: "O gün insanlar, ateş etrafında çırpınıp dökülen pervaneye dönecekler.",
        words: [
          { arabic: "يَوْمَ", transliteration: "yevme", root: "ي-و-م", pos: "ism", meaning_tr: "gün", irab: "{Zarf-ı zaman} olarak mansûb, önceki sorunun cevabı başlangıcı", irab_short: "zarf-ı zaman, mansûb", turkish_bridge: null, balagha_note: null },
          { arabic: "يَكُونُ", transliteration: "yekûnu", root: "ك-و-ن", pattern: "يَفْعُلُ", pos: "fil", meaning_tr: "olmak, bulunmak", irab: "{Fiil-i muzâri}, I. bâb. {Nâkıs fiil} olarak haber ismi ister", irab_short: "muzâri, I. bâb", turkish_bridge: null, balagha_note: null },
          { arabic: "النَّاسُ", transliteration: "en-nâsu", root: "ن-و-س", pos: "ism", meaning_tr: "insanlar", irab: "{İsmu kâne} olarak merfû, nâkıs fiilin ismi", irab_short: "ismu kâne, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "كَالْفَرَاشِ", transliteration: "kel-ferâşi", root: "ف-ر-ش", pos: "ism", meaning_tr: "kelebek, pervane gibi", irab: "{Harf-i teşbîh} ك ile {haberü kâne} mansûb, muzâf", irab_short: "haberu kâne, mansûb", turkish_bridge: null, balagha_note: "Teşbîh-i mufassal sanatı" },
          { arabic: "الْمَبْثُوثِ", transliteration: "el-mebsûsi", root: "ب-ث-ث", pattern: "مَفْعُول", pos: "ism", meaning_tr: "saçılmış, dağıtılmış", irab: "{İsm-i mef'ûl} kalıbında sıfat, {muzâf ileyh} merûr", irab_short: "sıfat, mecrûr", turkish_bridge: null, balagha_note: null },
        ],
      },
      {
        surah: 101, ayah: 5,
        arabic: "وَتَكُونُ الْجِبَالُ كَالْعِهْنِ الْمَنفُوشِ",
        translation: "Dağlar, atılmış renkli yüne benzeyecekler.",
        words: [
          { arabic: "وَتَكُونُ", transliteration: "ve tekûnu", root: "ك-و-ن", pattern: "يَفْعُلُ", pos: "fil", meaning_tr: "ve olmak", irab: "{Atıf harfi} و ile {fiil-i muzâri}, nâkıs fiil", irab_short: "muzâri, I. bâb", turkish_bridge: null, balagha_note: null },
          { arabic: "الْجِبَالُ", transliteration: "el-cibâlu", root: "ج-ب-ل", pos: "ism", meaning_tr: "dağlar", irab: "{İsmu kâne} olarak merfû, tekûnu fiilinin ismi", irab_short: "ismu kâne, merfû", turkish_bridge: "Cebbel kelimesi bu kökten", balagha_note: null },
          { arabic: "كَالْعِهْنِ", transliteration: "kel-'ihni", root: "ع-ه-ن", pos: "ism", meaning_tr: "renkli yün gibi", irab: "{Harf-i teşbîh} ك ile {haberü kâne} mansûb, muzâf", irab_short: "haberu kâne, mansûb", turkish_bridge: null, balagha_note: "İkinci teşbîh ile paralel anlatım" },
          { arabic: "الْمَنفُوشِ", transliteration: "el-menfûşi", root: "ن-ف-ش", pattern: "مَفْعُول", pos: "ism", meaning_tr: "yayılmış, atılmış", irab: "{İsm-i mef'ûl} kalıbında sıfat, {muzâf ileyh} mecrûr", irab_short: "sıfat, mecrûr", turkish_bridge: null, balagha_note: null },
        ],
      },
      {
        surah: 101, ayah: 6,
        arabic: "فَأَمَّا مَن ثَقُلَتْ مَوَازِينُهُ",
        translation: "Ama tartıları ağır gelen kimse hoş bir hayat içinde olacaktır.",
        words: [
          { arabic: "فَأَمَّا", transliteration: "fe emmâ", root: null, pos: "harf", meaning_tr: "artık, ama", irab: "{Harf-i atıf} فَ ile {harf-i tafsîl} أَمَّا", irab_short: "harf-i tafsîl", turkish_bridge: null, balagha_note: "Mukâbele sanatı başlangıcı" },
          { arabic: "مَن", transliteration: "men", root: null, pos: "ism", meaning_tr: "kim, kimse", irab: "{İsm-i mevsûl} olarak mübtedâ merfû", irab_short: "ismi mevsûl, mübtedâ", turkish_bridge: null, balagha_note: null },
          { arabic: "ثَقُلَتْ", transliteration: "sekulet", root: "ث-ق-ل", pattern: "فَعُلَ", pos: "fil", meaning_tr: "ağır olmak, ağırlaşmak", irab: "{Fiil-i mâzî}, I. bâb. {Sıla cümlesi} başlangıcı", irab_short: "mâzî, I. bâb", turkish_bridge: "Siklet kelimesi bu kökten", balagha_note: null },
          { arabic: "مَوَازِينُهُ", transliteration: "mevâzînuhu", root: "و-ز-ن", pattern: "مَفَاعِيل", pos: "ism", meaning_tr: "onun tartıları", irab: "{Fâil} olarak merfû, {muzâf} ve zamir {muzâf ileyh}", irab_short: "fâil, merfû", turkish_bridge: "Mizan, vezin kelimeleri bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 101, ayah: 7,
        arabic: "فَهُوَ فِي عِيشَةٍ رَّاضِيَةٍ",
        translation: "Ama tartıları ağır gelen kimse hoş bir hayat içinde olacaktır.",
        words: [
          { arabic: "فَهُوَ", transliteration: "fe huve", root: null, pos: "ism", meaning_tr: "o ise", irab: "{Harf-i atıf} فَ ile {zamir} mübtedâ merfû", irab_short: "mübtedâ, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "فِي", transliteration: "fî", root: null, pos: "harf", meaning_tr: "içinde", irab: "{Harf-i cerr}, {câr mecrûr} haber yerine", irab_short: "harf-i cerr", turkish_bridge: null, balagha_note: null },
          { arabic: "عِيشَةٍ", transliteration: "'îşetin", root: "ع-ي-ش", pattern: "فِعْلَة", pos: "ism", meaning_tr: "yaşam, geçim", irab: "{İsm-i mecrûr} بِ harfi cer ile mecrûr", irab_short: "mecrûr", turkish_bridge: "Ayş, maişet kelimeleri bu kökten", balagha_note: null },
          { arabic: "رَّاضِيَةٍ", transliteration: "râdiyetin", root: "ر-ض-ي", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "hoşnut eden, memnuniyet verici", irab: "{Sıfat} olarak mecrûr, عِيشَةٍ kelimesinin sıfatı", irab_short: "sıfat, mecrûr", turkish_bridge: "Razı, rıza kelimeleri bu kökten", balagha_note: "İsnad-ı mecâzî: yaşam hoşnut olacak değil, yaşayan hoşnut olacak" },
        ],
      },
      {
        surah: 101, ayah: 8,
        arabic: "وَأَمَّا مَنْ خَفَّتْ مَوَازِينُهُ",
        translation: "Tartıları hafif gelenler ise,",
        words: [
          { arabic: "وَأَمَّا", transliteration: "ve emmâ", root: null, pos: "harf", meaning_tr: "ve ama", irab: "{Atıf harfi} و ile {harf-i tafsîl} أَمَّا", irab_short: "harf-i tafsîl", turkish_bridge: null, balagha_note: "Mukâbele sanatının ikinci kısmı" },
          { arabic: "مَنْ", transliteration: "men", root: null, pos: "ism", meaning_tr: "kim, kimse", irab: "{İsm-i mevsûl} olarak mübtedâ merfû", irab_short: "ismi mevsûl, mübtedâ", turkish_bridge: null, balagha_note: null },
          { arabic: "خَفَّتْ", transliteration: "haffet", root: "خ-ف-ف", pattern: "فَعَّلَ", pos: "fil", meaning_tr: "hafif olmak, hafiflemek", irab: "{Fiil-i mâzî}, I. bâb. {Sıla cümlesi} başlangıcı", irab_short: "mâzî, I. bâb", turkish_bridge: "Hafif kelimesi bu kökten", balagha_note: null },
          { arabic: "مَوَازِينُهُ", transliteration: "mevâzînuhu", root: "و-ز-ن", pattern: "مَفَاعِيل", pos: "ism", meaning_tr: "onun tartıları", irab: "{Fâil} olarak merfû, {muzâf} ve zamir {muzâf ileyh}", irab_short: "fâil, merfû", turkish_bridge: "Mizan, vezin kelimeleri bu kökten", balagha_note: "Tıbâk sanatı: ثَقُلَتْ ile خَفَّتْ zıtlığı" },
        ],
      },
      {
        surah: 101, ayah: 9,
        arabic: "فَأُمُّهُ هَاوِيَةٞ",
        translation: "Onların yeri bir çukurdur.",
        words: [
          { arabic: "فَأُمُّهُ", transliteration: "fe ümmuhu", root: "أ-م-م", pos: "ism", meaning_tr: "onun anası, sığınacağı yer", irab: "{Atıf harfi} فَ ile {mübtedâ} merfû, {muzâf} ve zamir {muzâf ileyh}", irab_short: "mübtedâ, merfû", turkish_bridge: null, balagha_note: "Kinâye sanatı: cehennem için 'anne' ifadesi" },
          { arabic: "هَاوِيَةٞ", transliteration: "hâviyetun", root: "ه-و-ي", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "derin uçurum, çukur", irab: "{Haber} olarak merfû, cehennem için özel isim", irab_short: "haber, merfû", turkish_bridge: null, balagha_note: null },
        ],
      },
      {
        surah: 101, ayah: 10,
        arabic: "وَمَا أَدْرَاكَ مَا هِيَهْ",
        translation: "O çukurun ne olduğunu sen bilir misin?",
        words: [
          { arabic: "وَمَا", transliteration: "ve mâ", root: null, pos: "harf", meaning_tr: "ve nedir", irab: "{Atıf harfi} و ile {istifhâm edatı}, inkârî istifhâm", irab_short: "istifhâm inkârî", turkish_bridge: null, balagha_note: "3. ayetteki kalıbın tekrarı" },
          { arabic: "أَدْرَاكَ", transliteration: "edrâke", root: "د-ر-ك", pattern: "أَفْعَلَ", pos: "fil", meaning_tr: "sana bildirdi", irab: "{Fiil-i mâzî}, IV. bâb. {Fâil} müstetir, {mef'ûl} kâf zamiri", irab_short: "mâzî, IV. bâb", turkish_bridge: "İdrak kelimesi bu kökten", balagha_note: null },
          { arabic: "مَا", transliteration: "mâ", root: null, pos: "harf", meaning_tr: "ne, nedir", irab: "{İstifhâm edatı}, mübtedâ yerinde", irab_short: "istifhâm", turkish_bridge: null, balagha_note: null },
          { arabic: "هِيَهْ", transliteration: "hiyeh", root: null, pos: "ism", meaning_tr: "o (dişi zamir)", irab: "{Zamir} haber olarak merfû, hâviye'ye işaret", irab_short: "haber, merfû", turkish_bridge: null, balagha_note: null },
        ],
      },
      {
        surah: 101, ayah: 11,
        arabic: "نَارٌ حَامِيَةُۢ",
        translation: "O, kızgın bir ateştir.",
        words: [
          { arabic: "نَارٌ", transliteration: "nârun", root: "ن-و-ر", pos: "ism", meaning_tr: "ateş", irab: "{Haber} olarak merfû, hâviye'nin ne olduğunun açıklaması", irab_short: "haber, merfû", turkish_bridge: "Nar kelimesi bu kökten", balagha_note: null },
          { arabic: "حَامِيَةُۢ", transliteration: "hâmiyetun", root: "ح-م-ي", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "kızgın, yakıcı", irab: "{Sıfat} olarak merfû, نَارٌ kelimesinin sıfatı", irab_short: "sıfat, merfû", turkish_bridge: null, balagha_note: "Sure sonu ile güçlü bitiş" },
        ],
      },
    ],
    exercises: [],
  },
];

export default kariaLessons;
