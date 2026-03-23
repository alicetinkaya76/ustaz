// ═══════════════════════════════════════════════════════════
// MÜLK SURESİ (67) — İlk Surah-Format Ders Dosyası
// v0.20.0: 5 bölüm (S67-B01 … S67-B05), 30 ayet
// ═══════════════════════════════════════════════════════════
//
// Cüz 29 (Tabârek), Mekkî, 30 ayet
// Tematik: Mülk/hâkimiyet, hayat-ölüm sınavı, kâinat delilleri,
//          cehennem tasviri, yeryüzü nimetleri, su
//
// quizGenerator ilk gerçek kullanımı
// ═══════════════════════════════════════════════════════════

import {
  generateRootQuiz,
  generateBabQuiz,
  generateWaznQuiz,
  generateFillBlank,
  generateBalaghaQuiz,
  generateIrabQuiz,
} from "../../utils/quizGenerator.js";

const mulkLessons = [
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 1 — MÜLK 67:1-5 — Hâkimiyet, Hayat-Ölüm Sınavı, Yedi Gök
  // ═══════════════════════════════════════════════════════════
  {
    id: "S67-B01-mulk",
    title: "Mülk (1-5) — Hâkimiyet ve Yaratılış",
    titleAr: "سُورَةُ المُلْك ١-٥",
    stage: 2,
    level: 8,
    surah: 67,
    description:
      "Allah'ın mutlak hâkimiyeti, ölüm-hayat sınavı, yedi kat göğün kusursuzluğu. تَبَارَكَ (VI. bâb), لِيَبْلُوَ (sınama edatı), طِبَاقًا (tabakalar), فُطُور (yarık).",
    verses: [
      {
        surah: 67, ayah: 1,
        arabic: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
        translation: "Hükümranlık elinde olan (Allah) ne yücedir! O, her şeye gücü yetendir.",
        words: [
          { arabic: "تَبَارَكَ", transliteration: "tabāraka", root: "ب-ر-ك", pattern: "تَفَاعَلَ", pos: "fil", meaning_tr: "ne yücedir, bereket kaynağıdır", irab: "{Fiil-i mâzî}, VI. bâb (تَفَاعَلَ). Bu fiil yalnız Allah için kullanılır, muzâri gelmez.", irab_short: "fiil-i mâzî, VI. bâb", turkish_bridge: "Bereket, mübârek bu kökten", balagha_note: "تَبَارَكَ: yalnız Allah'a mahsus fiil — Rahmân 55:78, Furkân 25:1, Mü'minûn 23:14'te de geçer." },
          { arabic: "الَّذِي", transliteration: "allaḏī", root: null, pos: "harf", meaning_tr: "o ki", irab: "İsm-i mevsûl, mübtedâ (تَبَارَكَ) fiilinin fâili olarak mahallen merfû.", irab_short: "ism-i mevsûl" },
          { arabic: "بِيَدِهِ", transliteration: "bi-yadihi", root: "ي-د-ي", pattern: null, pos: "ism", meaning_tr: "elinde", irab: "بِ {harf-i cer} + يَد {mecrûr, muzâf} + هِ {muzâfun ileyh}. Câr-mecrûr = sıla cümlesi.", irab_short: "câr-mecrûr", turkish_bridge: "Yed (el), yedek bu kökten", balagha_note: "بِيَدِهِ: mecâz — Allah'ın kudreti ve tasarrufunu 'el' ile ifade → isti'âre." },
          { arabic: "الْمُلْكُ", transliteration: "al-mulku", root: "م-ل-ك", pattern: "فُعْل", pos: "ism", meaning_tr: "hükümranlık, mülk", irab: "{Mübtedâ}, {merfû} (damme). Sıla cümlesinin bir parçası.", irab_short: "mübtedâ, merfû", turkish_bridge: "Melik, mülk, memleket, mâlik hep bu kökten", balagha_note: "Surenin adı bu kelimedir — mutlak hâkimiyet." },
          { arabic: "وَهُوَ", transliteration: "wa-huwa", root: null, pos: "harf", meaning_tr: "ve O", irab: "وَ {atıf veya isti'nâf} + هُوَ {zamîr-i munfasıl, mübtedâ}.", irab_short: "mübtedâ" },
          { arabic: "عَلَىٰ", transliteration: "ʿalā", root: null, pos: "harf", meaning_tr: "üzerine", irab_short: "harf-i cer" },
          { arabic: "كُلِّ", transliteration: "kulli", root: "ك-ل-ل", pos: "ism", meaning_tr: "her", irab: "{Mecrûr} (عَلَى ile), {muzâf}.", irab_short: "mecrûr, muzâf" },
          { arabic: "شَيْءٍ", transliteration: "šayʾin", root: "ش-ي-أ", pos: "ism", meaning_tr: "şey", irab: "{Muzâfun ileyh}, {mecrûr} (kesre).", irab_short: "muzâfun ileyh, mecrûr" },
          { arabic: "قَدِيرٌ", transliteration: "qadīrun", root: "ق-د-ر", pattern: "فَعِيل", pos: "ism", meaning_tr: "gücü yeten, kâdir", irab: "{Haber}, {merfû} (damme). فَعِيل: sıfat-ı müşebbehe (süreklilik).", irab_short: "haber, merfû", turkish_bridge: "Kader, kudret, Kadir bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 67, ayah: 2,
        arabic: "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا وَهُوَ الْعَزِيزُ الْغَفُورُ",
        translation: "O ki, hanginizin daha güzel amel edeceğini sınamak için ölümü ve hayatı yaratmıştır. O, Azîz'dir, Gafûr'dur.",
        words: [
          { arabic: "الَّذِي", transliteration: "allaḏī", root: null, pos: "harf", meaning_tr: "o ki", irab_short: "ism-i mevsûl, bedel/sıfat" },
          { arabic: "خَلَقَ", transliteration: "ḫalaqa", root: "خ-ل-ق", pos: "fil", meaning_tr: "yarattı", irab: "{Fiil-i mâzî}, I. bâb. {Fâil}: الَّذِي'ye dönen gizli zamîr (هُوَ).", irab_short: "fiil-i mâzî, I. bâb", turkish_bridge: "Halk (yaratma), hilkat, ahlâk bu kökten" },
          { arabic: "الْمَوْتَ", transliteration: "al-mawta", root: "م-و-ت", pattern: "فَعْل", pos: "ism", meaning_tr: "ölümü", irab: "{Mef'ûl bih}, {mensûb}. Dikkat: ölüm hayattan ÖNCE zikredilmiş.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Mevt (ölüm), meyyit (ölü) bu kökten", balagha_note: "Ölüm hayattan önce: takvâ hatırlatması — insanın ilk karşılaşacağı gerçeklik ölümdür. Takdîm sanatı." },
          { arabic: "وَالْحَيَاةَ", transliteration: "wa-l-ḥayāta", root: "ح-ي-ي", pattern: "فَعَالَة", pos: "ism", meaning_tr: "ve hayatı", irab: "وَ {atıf} + الحَيَاة {mef'ûl bih}, {mensûb}.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Hayat, hayy (diri), ihyâ bu kökten" },
          { arabic: "لِيَبْلُوَكُمْ", transliteration: "li-yabluwakum", root: "ب-ل-و", pos: "fil", meaning_tr: "sizi sınamak için", irab: "لِ {lâm-ı ta'lîl: amaç} + يَبْلُوَ {muzâri, mensûb (أَنْ muktedere)} + كُمْ {mef'ûl bih}.", irab_short: "muzâri mensûb, ta'lîl", turkish_bridge: "Belâ, ibtilâ (sınav) bu kökten", balagha_note: null },
          { arabic: "أَيُّكُمْ", transliteration: "ayyukum", root: null, pos: "ism", meaning_tr: "hanginiz", irab: "İstifhâm ismi, {mübtedâ} + كُمْ muzâfun ileyh.", irab_short: "mübtedâ, istifhâm" },
          { arabic: "أَحْسَنُ", transliteration: "aḥsanu", root: "ح-س-ن", pattern: "أَفْعَل", pos: "ism", meaning_tr: "en güzel, daha güzel", irab: "{Haber}, {merfû}. أَفْعَل: ism-i tafdîl.", irab_short: "haber, ism-i tafdîl", turkish_bridge: "Hüsn, ihsan, muhsin bu kökten" },
          { arabic: "عَمَلًا", transliteration: "ʿamalan", root: "ع-م-ل", pattern: "فَعَل", pos: "ism", meaning_tr: "amel bakımından", irab: "{Temyîz}, {mensûb}. أَحْسَنُ عَمَلًا: 'amel bakımından en güzel.'", irab_short: "temyîz, mensûb", turkish_bridge: "Amel, muâmele bu kökten" },
          { arabic: "وَهُوَ", transliteration: "wa-huwa", root: null, pos: "harf", meaning_tr: "ve O", irab_short: "mübtedâ" },
          { arabic: "الْعَزِيزُ", transliteration: "al-ʿazīzu", root: "ع-ز-ز", pattern: "فَعِيل", pos: "ism", meaning_tr: "üstün, yenilmez", irab: "{Haber} birinci, {merfû}.", irab_short: "haber-1, merfû", turkish_bridge: "İzzet, azîz bu kökten" },
          { arabic: "الْغَفُورُ", transliteration: "al-ġafūru", root: "غ-ف-ر", pattern: "فَعُول", pos: "ism", meaning_tr: "çok bağışlayan", irab: "{Haber} ikinci, {merfû}. فَعُول: mübalağa kalıbı.", irab_short: "haber-2, merfû", turkish_bridge: "Mağfiret, istiğfâr bu kökten", balagha_note: "العَزِيز + الغَفُور: güç + merhamet. Cezalandırabilecek güce sahip ama affeden → tıbâk-ı ma'nevî." },
        ],
      },
      {
        surah: 67, ayah: 3,
        arabic: "الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا مَا تَرَىٰ فِي خَلْقِ الرَّحْمَـٰنِ مِن تَفَاوُتٍ فَارْجِعِ الْبَصَرَ هَلْ تَرَىٰ مِن فُطُورٍ",
        translation: "O ki, yedi göğü tabaka tabaka yaratmıştır. Rahmân'ın yaratışında hiçbir uyumsuzluk göremezsin. Gözünü çevir bak: bir çatlak görebilir misin?",
        words: [
          { arabic: "الَّذِي", transliteration: "allaḏī", root: null, pos: "harf", meaning_tr: "o ki", irab_short: "ism-i mevsûl" },
          { arabic: "خَلَقَ", transliteration: "ḫalaqa", root: "خ-ل-ق", pos: "fil", meaning_tr: "yarattı", irab_short: "fiil-i mâzî, I. bâb" },
          { arabic: "سَبْعَ", transliteration: "sabʿa", root: "س-ب-ع", pos: "ism", meaning_tr: "yedi", irab: "{Mef'ûl bih}, {mensûb}, muzâf.", irab_short: "mef'ûl bih, mensûb" },
          { arabic: "سَمَاوَاتٍ", transliteration: "samāwātin", root: "س-م-و", pos: "ism", meaning_tr: "gökleri", irab: "{Muzâfun ileyh}, {mecrûr} (kesre).", irab_short: "muzâfun ileyh, mecrûr", turkish_bridge: "Semâ (gök), esmâ (isimler: yücelik) bu kökten" },
          { arabic: "طِبَاقًا", transliteration: "ṭibāqan", root: "ط-ب-ق", pattern: "فِعَال", pos: "ism", meaning_tr: "tabaka tabaka, üst üste", irab: "{Hâl} veya sıfat, {mensûb}. طَبَقَ: uyum, tabaka.", irab_short: "hâl, mensûb", turkish_bridge: "Tabak, tabaka, tetâbuk (uyum) bu kökten" },
          { arabic: "مَا", transliteration: "mā", root: null, pos: "harf", meaning_tr: "değil, yok (nefy)", irab: "Nefy harfi.", irab_short: "nefy" },
          { arabic: "تَرَىٰ", transliteration: "tarā", root: "ر-أ-ي", pos: "fil", meaning_tr: "görürsün", irab: "{Muzâri}, merfû (damme mukteder). {Fâil}: أَنْتَ (gizli).", irab_short: "muzâri, merfû" },
          { arabic: "فِي", transliteration: "fī", root: null, pos: "harf", meaning_tr: "...de", irab_short: "harf-i cer" },
          { arabic: "خَلْقِ", transliteration: "ḫalqi", root: "خ-ل-ق", pos: "ism", meaning_tr: "yaratılışında", irab: "{Mecrûr}, muzâf.", irab_short: "mecrûr, muzâf" },
          { arabic: "الرَّحْمَـٰنِ", transliteration: "ar-raḥmāni", root: "ر-ح-م", pattern: "فَعْلَان", pos: "ism", meaning_tr: "Rahmân'ın", irab: "{Muzâfun ileyh}, {mecrûr}.", irab_short: "muzâfun ileyh, mecrûr" },
          { arabic: "مِن", transliteration: "min", root: null, pos: "harf", meaning_tr: "hiçbir (zâide, te'kîd)", irab: "مِنْ zâide: nefy cümlesinde pekiştirme → 'hiçbir uyumsuzluk.'", irab_short: "harf-i cer (zâide)" },
          { arabic: "تَفَاوُتٍ", transliteration: "tafāwutin", root: "ف-و-ت", pattern: "تَفَاعُل", pos: "ism", meaning_tr: "uyumsuzluk, çelişki", irab: "{Mecrûr}. VI. bâb masdarı: karşılıklı ayrışma, tutarsızlık.", irab_short: "mecrûr, VI. bâb masdar", turkish_bridge: "Tefâvüt (fark), fevt (kaçırma) bu kökten" },
          { arabic: "فَارْجِعِ", transliteration: "fa-rciʿi", root: "ر-ج-ع", pos: "fil", meaning_tr: "haydi çevir", irab: "فَ {fa-yı cezâiye} + ارْجِعْ {emir, I. bâb}. Hitap: ey insan!", irab_short: "emir, I. bâb", turkish_bridge: "Rücû (dönüş), müracaat bu kökten" },
          { arabic: "الْبَصَرَ", transliteration: "al-baṣara", root: "ب-ص-ر", pattern: "فَعَل", pos: "ism", meaning_tr: "gözü(nü), bakışı", irab: "{Mef'ûl bih}, {mensûb}.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Basar (görme), basîret (iç görüş) bu kökten" },
          { arabic: "هَلْ", transliteration: "hal", root: null, pos: "harf", meaning_tr: "...mı?", irab: "İstifhâm edatı.", irab_short: "istifhâm" },
          { arabic: "تَرَىٰ", transliteration: "tarā", root: "ر-أ-ي", pos: "fil", meaning_tr: "görürsün", irab_short: "muzâri, merfû" },
          { arabic: "مِن", transliteration: "min", root: null, pos: "harf", meaning_tr: "hiçbir (zâide)", irab_short: "harf-i cer (zâide)" },
          { arabic: "فُطُورٍ", transliteration: "fuṭūrin", root: "ف-ط-ر", pattern: "فُعُول", pos: "ism", meaning_tr: "çatlak, yarık", irab: "{Mecrûr}. فَطَرَ: yardı → فُطُور: yarık, çatlak.", irab_short: "mecrûr", turkish_bridge: "Fıtrat (yaratılış = yarıp açma), iftar (orucu yarma) bu kökten", balagha_note: "İstifhâm-ı inkârî: 'çatlak görebilir misin?' = 'asla göremezsin!' Soru formuyla kesinlik." },
        ],
      },
      {
        surah: 67, ayah: 4,
        arabic: "ثُمَّ ارْجِعِ الْبَصَرَ كَرَّتَيْنِ يَنقَلِبْ إِلَيْكَ الْبَصَرُ خَاسِئًا وَهُوَ حَسِيرٌ",
        translation: "Sonra gözünü tekrar tekrar çevir; göz(ün), arayıp bulamayarak ve yorgun düşmüş olarak sana dönecektir.",
        words: [
          { arabic: "ثُمَّ", transliteration: "ṯumma", root: null, pos: "harf", meaning_tr: "sonra", irab: "Atıf harfi (terâhî: gecikme/mühlet ifade eder).", irab_short: "atıf" },
          { arabic: "ارْجِعِ", transliteration: "irciʿi", root: "ر-ج-ع", pos: "fil", meaning_tr: "çevir", irab_short: "emir, I. bâb" },
          { arabic: "الْبَصَرَ", transliteration: "al-baṣara", root: "ب-ص-ر", pos: "ism", meaning_tr: "gözünü", irab_short: "mef'ûl bih, mensûb" },
          { arabic: "كَرَّتَيْنِ", transliteration: "karratayni", root: "ك-ر-ر", pattern: "فَعْلَة", pos: "ism", meaning_tr: "iki kere, tekrar tekrar", irab: "Tesniye (ikil) formu: كَرَّة (tek dönüş) → كَرَّتَيْنِ. {Zarf} veya mef'ûl mutlak anlamında {mensûb}.", irab_short: "mef'ûl mutlak/zarf, mensûb", turkish_bridge: "Tekrar, kerrât (defalarca) bu kökten", balagha_note: "كَرَّتَيْنِ: biçimsel olarak 'iki kez' ama maksat çokluk → 'tekrar tekrar.' İki, çoğu ifade eder." },
          { arabic: "يَنقَلِبْ", transliteration: "yanqalib", root: "ق-ل-ب", pos: "fil", meaning_tr: "döner, geri gelir", irab: "{Muzâri, meczûm} (cevâb-ı taleb: emir cümlesinin cevabı). VII. bâb (infi'âl): قَلَبَ → اِنقَلَبَ (kendiliğinden dönmek).", irab_short: "muzâri meczûm, VII. bâb", turkish_bridge: "Kalb (dönme, yürek), inkılâb bu kökten" },
          { arabic: "إِلَيْكَ", transliteration: "ilayka", root: null, pos: "harf", meaning_tr: "sana", irab_short: "câr-mecrûr" },
          { arabic: "الْبَصَرُ", transliteration: "al-baṣaru", root: "ب-ص-ر", pos: "ism", meaning_tr: "göz, bakış", irab: "{Fâil}, {merfû} (damme).", irab_short: "fâil, merfû" },
          { arabic: "خَاسِئًا", transliteration: "ḫāsiʾan", root: "خ-س-أ", pattern: "فَاعِل", pos: "ism", meaning_tr: "eli boş, kovulmuş gibi", irab: "{Hâl}, {mensûb}. İsm-i fâil: aradığını bulamayan.", irab_short: "hâl, mensûb", balagha_note: "Teşhîs (kişileştirme): göze insan niteliği verilmiş → 'kovulmuş gibi geri döner.' Göz, arayıp bulamayan bir avcı gibi." },
          { arabic: "وَهُوَ", transliteration: "wa-huwa", root: null, pos: "harf", meaning_tr: "ve o", irab_short: "mübtedâ (hâl cümlesi)" },
          { arabic: "حَسِيرٌ", transliteration: "ḥasīrun", root: "ح-س-ر", pattern: "فَعِيل", pos: "ism", meaning_tr: "yorgun, bitkin", irab: "{Haber}, {merfû}. فَعِيل (fâil anlamında sıfat-ı müşebbehe).", irab_short: "haber, merfû", turkish_bridge: "Hasret (özlem = yorulma), mahsûr (çaresiz) bu kökten" },
        ],
      },
      {
        surah: 67, ayah: 5,
        arabic: "وَلَقَدْ زَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ وَجَعَلْنَاهَا رُجُومًا لِّلشَّيَاطِينِ وَأَعْتَدْنَا لَهُمْ عَذَابَ السَّعِيرِ",
        translation: "Andolsun biz en yakın göğü kandillerle süsledik, onları şeytanlara atılan taşlar yaptık ve onlara alevli ateş azabını hazırladık.",
        words: [
          { arabic: "وَلَقَدْ", transliteration: "wa-laqad", root: null, pos: "harf", meaning_tr: "andolsun ki", irab: "وَ {isti'nâf} + لَ {lâm-ı te'kîd} + قَدْ {tahkîk}. Te'kîd katmanları.", irab_short: "te'kîd" },
          { arabic: "زَيَّنَّا", transliteration: "zayyannā", root: "ز-ي-ن", pattern: "فَعَّلَ", pos: "fil", meaning_tr: "süsledik", irab: "{Fiil-i mâzî}, II. bâb (tef'îl): زَانَ (güzel oldu) → زَيَّنَ (süsledi, güzelleştirdi).", irab_short: "fiil-i mâzî, II. bâb", turkish_bridge: "Ziynet (süs), tezyîn (süsleme) bu kökten" },
          { arabic: "السَّمَاءَ", transliteration: "as-samāʾa", root: "س-م-و", pos: "ism", meaning_tr: "göğü", irab: "{Mef'ûl bih} birinci, {mensûb}.", irab_short: "mef'ûl bih, mensûb" },
          { arabic: "الدُّنْيَا", transliteration: "ad-dunyā", root: "د-ن-و", pattern: "فُعْلَى", pos: "ism", meaning_tr: "en yakın", irab: "{Sıfat}, {mensûb} (mukadder fetha). فُعْلَى: ism-i tafdîl müennes → 'en yakın (gök).'", irab_short: "sıfat, mensûb", turkish_bridge: "Dünya (en yakın), denî (alçak) bu kökten", balagha_note: "الدُّنْيَا: 'en yakın' anlamında ism-i tafdîl. Dünya = en yakın gök katı." },
          { arabic: "بِمَصَابِيحَ", transliteration: "bi-maṣābīḥa", root: "ص-ب-ح", pattern: "مَفَاعِيل", pos: "ism", meaning_tr: "kandillerle", irab: "بِ {harf-i cer} + مَصَابِيح {mecrûr, gayr-i munsarif}. مِصْبَاح'ın cem-i teksîri.", irab_short: "mecrûr", turkish_bridge: "Sabah (aydınlık), misbâh (kandil) bu kökten", balagha_note: "İsti'âre: yıldızlar → مَصَابِيح (kandiller). Gökyüzü süslenmiş bir tavan gibi." },
          { arabic: "وَجَعَلْنَاهَا", transliteration: "wa-jaʿalnāhā", root: "ج-ع-ل", pos: "fil", meaning_tr: "ve onları kıldık", irab: "جَعَلَ iki mef'ûllü. هَا: mef'ûl bih birinci (مَصَابِيح'e döner).", irab_short: "fiil, I. bâb" },
          { arabic: "رُجُومًا", transliteration: "rujūman", root: "ر-ج-م", pattern: "فُعُول", pos: "ism", meaning_tr: "atılan taşlar", irab: "{Mef'ûl bih} ikinci, {mensûb}. رَجَمَ: taşladı → رُجُوم: atılan şeyler.", irab_short: "mef'ûl bih-2, mensûb", turkish_bridge: "Recm (taşlama), racîm (taşlanan: şeytan) bu kökten" },
          { arabic: "لِّلشَّيَاطِينِ", transliteration: "li-š-šayāṭīni", root: "ش-ط-ن", pos: "ism", meaning_tr: "şeytanlara", irab: "لِ {harf-i cer} + الشَّيَاطِين {mecrûr, cem-i teksîr}.", irab_short: "câr-mecrûr" },
          { arabic: "وَأَعْتَدْنَا", transliteration: "wa-aʿtadnā", root: "ع-ت-د", pos: "fil", meaning_tr: "hazırladık", irab: "{Fiil-i mâzî}, IV. bâb (أَفْعَلَ): عَتَدَ → أَعْتَدَ (hazırladı).", irab_short: "fiil-i mâzî, IV. bâb", turkish_bridge: "Atîd (hazır), i'dâd bu kökten" },
          { arabic: "لَهُمْ", transliteration: "lahum", root: null, pos: "harf", meaning_tr: "onlara", irab_short: "câr-mecrûr" },
          { arabic: "عَذَابَ", transliteration: "ʿaḏāba", root: "ع-ذ-ب", pos: "ism", meaning_tr: "azabını", irab: "{Mef'ûl bih}, {mensûb}, muzâf.", irab_short: "mef'ûl bih, mensûb" },
          { arabic: "السَّعِيرِ", transliteration: "as-saʿīri", root: "س-ع-ر", pattern: "فَعِيل", pos: "ism", meaning_tr: "alevli ateş", irab: "{Muzâfun ileyh}, {mecrûr}.", irab_short: "muzâfun ileyh, mecrûr", turkish_bridge: "Si'r (ateş tutuşturma), saîr bu kökten" },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "تَبَارَكَ — Yalnız Allah'a Mahsus Fiil",
        explanation:
          "تَبَارَكَ (VI. bâb, تَفَاعَلَ kalıbı) yalnız Allah hakkında kullanılır ve yalnız mâzî formda gelir — muzâri yoktur. ب-ر-ك kökünden: bereketin kaynağı, yüceliğin sahibi. Kur'an'da 9 yerde geçer, hep sure veya pasaj açılışında.",
        rule: "تَفَاعَلَ kalıbı normalde 'karşılıklı yapma' anlamı verir (تَقَاتَلَ = dövüştü) ama تَبَارَكَ istisnadır: mübalağa + yücelik. Muzârisi ve emri kullanılmaz.",
        examples: ["تَبَارَكَ الَّذِي بِيَدِهِ المُلْكُ — Mülk 67:1", "تَبَارَكَ الَّذِي نَزَّلَ الفُرْقَانَ — Furkân 25:1", "تَبَارَكَ اللَّهُ أَحْسَنُ الخَالِقِينَ — Mü'minûn 23:14"],
      },
      {
        title: "مِنْ Zâide (Pekiştirme)",
        explanation:
          "Nefy (مَا) veya istifhâm (هَلْ) cümlelerinde مِنْ harfi 'hiçbir' anlamını pekiştirir. مَا تَرَى مِنْ تَفَاوُتٍ = 'hiçbir uyumsuzluk göremezsin.' مِنْ olmasaydı anlam aynı olurdu ama vurgu düşerdi.",
        rule: "مِنْ zâide şartları: (1) nefy veya istifhâm cümlesi, (2) nekire (belirsiz) isimden önce. مَنْ أَحَدٍ يستطيع ❌ (ma'rife olmaz). مَا جَاءَ مِنْ أَحَدٍ ✅",
        examples: ["مَا تَرَى مِنْ تَفَاوُتٍ — hiçbir uyumsuzluk (67:3)", "هَلْ تَرَى مِنْ فُطُورٍ — hiçbir çatlak (67:3)", "مَا جَاءَنَا مِنْ بَشِيرٍ — hiçbir müjdeci (Mâide 5:19)"],
      },
      {
        title: "Cevâb-ı Taleb: Emir + Meczûm Muzâri",
        explanation:
          "Emir cümlesi + (şart anlamında) cevap = muzâri meczûm olur. فَارْجِعِ البَصَرَ (emret) → يَنقَلِبْ (sonuç: meczûm). 'Gözünü çevir → (çevirirsen) döner.' Bu yapı Kur'an'da sıkça gelir.",
        rule: "Emir + muzâri meczûm → 'yaparsan → şu olur'\nفَارْجِعِ → يَنقَلِبْ (67:4)\nأَسْلِمْ → تَسْلَمْ (Hadis: teslim ol → kurtulursun)",
        examples: ["فَارْجِعِ البَصَرَ يَنقَلِبْ — gözünü çevir, döner (67:4)", "ادْعُونِي أَسْتَجِبْ لَكُمْ — beni çağırın, cevap vereyim (40:60)"],
      },
    ],
    exercises: [
      generateBabQuiz(
        "S67-B01-Q01", "تَبَارَكَ",
        "VI. bâb (تَفَاعَلَ): yalnız Allah için — bereketin kaynağı",
        ["I. bâb: بَرَكَ (çöktü)", "II. bâb: بَارَكَ (bereketlendirdi)", "IV. bâb: أَبْرَكَ"],
        "تَبَارَكَ: VI. bâb (تَفَاعَلَ). ب-ر-ك kökünden. Yalnız Allah hakkında, yalnız mâzî formda kullanılır. 'Bereketin kaynağı ne yücedir!'",
        ["ب-ر-ك"]
      ),
      generateRootQuiz(
        "S67-B01-Q02", "فُطُورٍ", "ف-ط-ر",
        ["ف-ر-ط", "ف-ج-ر", "ط-ف-ر"],
        "فُطُور: ف-ط-ر kökünden. فَطَرَ = yardı, çatlattı. فُطُور = yarık, çatlak. Aynı kök: فِطْرة (yaratılış = yokluğu yarıp var etme), إفْطار (orucu 'kırma').",
        ["ف-ط-ر"]
      ),
      generateWaznQuiz(
        "S67-B01-Q03", "أَحْسَنُ",
        "أَفْعَل (ism-i tafdîl) — ح-س-ن: 'en güzel, daha güzel'",
        ["فَعِيل (sıfat-ı müşebbehe)", "فَاعِل (ism-i fâil)", "مَفْعُول (ism-i mef'ûl)"],
        "أَحْسَنُ: أَفْعَل kalıbı = ism-i tafdîl. ح-س-ن kökünden. أَحْسَنُ عَمَلًا = 'amel bakımından en güzel.' عَمَلًا = temyîz.",
        ["ح-س-ن"]
      ),
      generateBalaghaQuiz(
        "S67-B01-Q04",
        "67:3'te هَلْ تَرَىٰ مِن فُطُورٍ sorusu hangi belâgat sanatıdır?",
        "İstifhâm-ı inkârî — soru formunda kesin ret: 'asla göremezsin!'",
        ["İsti'âre — metafor", "Teşbîh — benzetme", "Kinâye — dolaylı anlatım"],
        "İstifhâm-ı inkârî: soru sorulur ama cevap 'hayır' olarak kesindir. Dinleyiciyi düşünmeye sevk eder: 'Bak, kusur bulabilir misin?' → 'Bulamazsın!'"
      ),
      generateIrabQuiz(
        "S67-B01-Q05", "خَاسِئًا",
        "Hâl (mansûb) — bakışın 'bulamayarak' dönme durumunu bildirir",
        ["Mef'ûl bih (mensûb)", "Temyîz (mensûb)", "Sıfat (mensûb)"],
        "خَاسِئًا: hâl (durum zarfı). Fâil olan البَصَر'in dönüş anındaki durumunu bildirir: 'arayıp bulamayarak.' İsm-i fâil (فَاعِل kalıbı) hâl olarak gelmiş.",
        ["خ-س-أ"]
      ),
      generateFillBlank(
        "S67-B01-Q06",
        "وَلَقَدْ زَيَّنَّا السَّمَاءَ الدُّنْيَا بِـ_____",
        "مَصَابِيحَ", ["كَوَاكِبَ", "نُجُومٍ", "أَقْمَارٍ"],
        "Yıldızlar hangi kelimeyle ifade edilmiş?",
        "مَصَابِيح: مِصْبَاح (kandil) kelimesinin cem-i teksîri. Yıldızları 'kandil' olarak nitelendirmek → isti'âre. ص-ب-ح kökünden: sabah aydınlığı ile bağlantılı.",
        ["ص-ب-ح"]
      ),
      {
        id: "S67-B01-Q07", type: "single_choice",
        question: "67:2'de ölüm (المَوْت) hayattan (الحَيَاة) önce zikredilmiştir. Bunun belâgat hikmeti nedir?",
        options: [
          "Takdîm: insanın ilk yüzleşeceği gerçeklik ölümdür — takvâ hatırlatması",
          "Kronolojik sıra: ölüm ontolojik olarak öncedir",
          "Kafiye gereği",
          "Rastgele sıralama",
        ],
        correct: 0,
        explanation: "Takdîm sanatı: ölümün öne alınması, insana dünya hayatının geçiciliğini hatırlatır. Hayattan önce ölümü düşünen insan daha güzel amel eder — surenin ana mesajı (أَحْسَنُ عَمَلًا) ile doğrudan bağlantılı.",
        relatedRoots: ["م-و-ت", "ح-ي-ي"],
      },
      {
        id: "S67-B01-Q08", type: "single_choice",
        question: "67:4'te يَنقَلِبْ fiili neden meczûm (سكون) ile gelmiştir?",
        options: [
          "Cevâb-ı taleb: emir cümlesinin (ارْجِعِ) sonucu olarak → 'çevir(irsen) döner'",
          "Nehy (yasaklama) cümlesi",
          "لَمْ ile meczûm",
          "Şart edatı (إِنْ) gizli",
        ],
        correct: 0,
        explanation: "Cevâb-ı taleb yapısı: emir (ارْجِعِ البَصَرَ) + sonuç (يَنقَلِبْ). 'Gözünü çevirirsen → (sonuç) göz döner.' Muzâri fiil bu yapıda meczûm olur.",
        relatedRoots: ["ق-ل-ب", "ر-ج-ع"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 2 — MÜLK 67:6-11 — Cehennem Tasviri ve İtiraf
  // ═══════════════════════════════════════════════════════════
  {
    id: "S67-B02-mulk",
    title: "Mülk (6-11) — Cehennem ve İtiraf",
    titleAr: "سُورَةُ المُلْك ٦-١١",
    stage: 2,
    level: 8,
    surah: 67,
    description:
      "Cehennem tasviri: kaynaması, nefes alışı, bekçilerin sorusu, inkârcıların itirafı. تَكَادُ تَمَيَّزُ (parçalanma), اعْتَرَفُوا (VIII. bâb: itiraf), mechûl fiiller.",
    verses: [
      {
        surah: 67, ayah: 6,
        arabic: "وَلِلَّذِينَ كَفَرُوا بِرَبِّهِمْ عَذَابُ جَهَنَّمَ وَبِئْسَ الْمَصِيرُ",
        translation: "Rablerini inkâr edenler için cehennem azabı vardır. Ne kötü bir dönüş yeridir!",
        words: [
          { arabic: "وَلِلَّذِينَ", transliteration: "wa-li-llaḏīna", root: null, pos: "harf", meaning_tr: "ve o kimseler için ki", irab: "وَ {isti'nâf} + لِ {harf-i cer} + الَّذِينَ {ism-i mevsûl, cem}.", irab_short: "câr-mecrûr" },
          { arabic: "كَفَرُوا", transliteration: "kafarū", root: "ك-ف-ر", pos: "fil", meaning_tr: "inkâr ettiler", irab: "Fiil-i mâzî, cem müzekker. Sıla cümlesi.", irab_short: "fiil-i mâzî, I. bâb", turkish_bridge: "Küfür, kâfir, tekfîr bu kökten" },
          { arabic: "بِرَبِّهِمْ", transliteration: "bi-rabbihim", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rablerini", irab: "بِ {harf-i cer} + رَبّ {mecrûr, muzâf} + هِمْ {muzâfun ileyh}.", irab_short: "câr-mecrûr" },
          { arabic: "عَذَابُ", transliteration: "ʿaḏābu", root: "ع-ذ-ب", pos: "ism", meaning_tr: "azabı", irab: "{Mübtedâ}, {merfû} (muahhar). Câr-mecrûr (لِلَّذِينَ) haber-i mukaddem.", irab_short: "mübtedâ, merfû" },
          { arabic: "جَهَنَّمَ", transliteration: "jahannama", root: null, pos: "ism", meaning_tr: "cehennem", irab: "{Muzâfun ileyh}, gayr-i munsarif (alem + ucme).", irab_short: "muzâfun ileyh" },
          { arabic: "وَبِئْسَ", transliteration: "wa-biʾsa", root: "ب-ئ-س", pos: "fil", meaning_tr: "ne kötü!", irab: "Fiil-i zem (yerme fiili). بِئْسَ = ne kötüdür.", irab_short: "fiil-i zem" },
          { arabic: "الْمَصِيرُ", transliteration: "al-maṣīru", root: "ص-ي-ر", pattern: "مَفْعِل", pos: "ism", meaning_tr: "dönüş yeri, varış", irab: "{Fâil} (بِئْسَ'in fâili), {merfû}. مَفْعِل: ism-i mekân → 'varılacak yer.'", irab_short: "fâil, merfû", turkish_bridge: "Masîr (son), sâir (giden) bu kökten" },
        ],
      },
      {
        surah: 67, ayah: 7,
        arabic: "إِذَا أُلْقُوا فِيهَا سَمِعُوا لَهَا شَهِيقًا وَهِيَ تَفُورُ",
        translation: "Oraya atıldıklarında, onun kaynamakta olduğunu duyarlar bir de korkunç bir gürültü (işitirler).",
        words: [
          { arabic: "إِذَا", transliteration: "iḏā", root: null, pos: "harf", meaning_tr: "...dığı zaman", irab: "Zarf-ı zaman (şart anlamlı).", irab_short: "zarf-ı şart" },
          { arabic: "أُلْقُوا", transliteration: "ulqū", root: "ل-ق-ي", pos: "fil", meaning_tr: "atıldılar", irab: "{Fiil-i mâzî, mechûl}. IV. bâb: أَلْقَى (attı) → أُلْقِيَ (atıldı). واو: nâib-i fâil.", irab_short: "fiil mechûl, IV. bâb", turkish_bridge: "İlkā (atma), mülâkât (karşılaşma) bu kökten", balagha_note: "Mechûl fiil: kimin attığı söylenmemiş → olayın dehşetine odaklanma." },
          { arabic: "فِيهَا", transliteration: "fīhā", root: null, pos: "harf", meaning_tr: "onun içine", irab_short: "câr-mecrûr" },
          { arabic: "سَمِعُوا", transliteration: "samiʿū", root: "س-م-ع", pos: "fil", meaning_tr: "duydular, işittiler", irab: "Fiil-i mâzî, I. bâb. Cevâb-ı şart (إِذَا).", irab_short: "fiil-i mâzî, I. bâb" },
          { arabic: "لَهَا", transliteration: "lahā", root: null, pos: "harf", meaning_tr: "onun (cehennemin)", irab_short: "câr-mecrûr" },
          { arabic: "شَهِيقًا", transliteration: "šahīqan", root: "ش-ه-ق", pattern: "فَعِيل", pos: "ism", meaning_tr: "korkunç bir inleme, nefes çekme", irab: "{Mef'ûl bih}, {mensûb}. شَهِيق: nefes içe çekme sesi → cehennemin 'inlemesi.'", irab_short: "mef'ûl bih, mensûb", balagha_note: "Teşhîs: cehennem canlı bir varlık gibi 'nefes çekiyor' → korkutucu kişileştirme." },
          { arabic: "وَهِيَ", transliteration: "wa-hiya", root: null, pos: "harf", meaning_tr: "ve o", irab_short: "mübtedâ (hâl cümlesi)" },
          { arabic: "تَفُورُ", transliteration: "tafūru", root: "ف-و-ر", pos: "fil", meaning_tr: "kaynıyor, fokurduyor", irab: "{Muzâri}, {merfû}. Hâl cümlesi. فَارَ: kaynadı (su gibi).", irab_short: "muzâri, merfû", turkish_bridge: "Fevr (kaynama), fevran bu kökten" },
        ],
      },
      {
        surah: 67, ayah: 8,
        arabic: "تَكَادُ تَمَيَّزُ مِنَ الْغَيْظِ كُلَّمَا أُلْقِيَ فِيهَا فَوْجٌ سَأَلَهُمْ خَزَنَتُهَا أَلَمْ يَأْتِكُمْ نَذِيرٌ",
        translation: "Neredeyse öfkeden çatlayacak! Her bir topluluk oraya atıldıkça bekçileri onlara sorar: 'Size bir uyarıcı gelmemiş miydi?'",
        words: [
          { arabic: "تَكَادُ", transliteration: "takādu", root: "ك-و-د", pos: "fil", meaning_tr: "neredeyse, az kalsın", irab: "{Muzâri}. كَادَ: yaklaşma fiili (ef'âl-i mukârebe). Haberi muzâri gelir.", irab_short: "muzâri (ef'âl-i mukârebe)" },
          { arabic: "تَمَيَّزُ", transliteration: "tamayyazu", root: "م-ي-ز", pattern: "تَفَعَّلَ", pos: "fil", meaning_tr: "parçalanıyor, ayrışıyor", irab: "كَادَ'nin haberi, {muzâri}. V. bâb: مَازَ (ayırdı) → تَمَيَّزَ (parçalandı, ayrıştı).", irab_short: "muzâri, V. bâb", turkish_bridge: "Temyîz (ayırma), mümeyyiz (ayırt eden) bu kökten", balagha_note: "Teşhîs: cehennem öfkeden 'neredeyse parçalanacak' bir varlık gibi. Mübalağa + kişileştirme." },
          { arabic: "مِنَ", transliteration: "mine", root: null, pos: "harf", meaning_tr: "...den", irab_short: "harf-i cer (sebebiye)" },
          { arabic: "الْغَيْظِ", transliteration: "al-ġayẓi", root: "غ-ي-ظ", pos: "ism", meaning_tr: "öfke, hiddet", irab: "{Mecrûr}.", irab_short: "mecrûr", turkish_bridge: "Gayz (öfke) bu kökten" },
          { arabic: "كُلَّمَا", transliteration: "kullamā", root: null, pos: "harf", meaning_tr: "her ... -dığında", irab: "Zarf-ı zaman (tekrar şart edatı).", irab_short: "zarf-ı şart" },
          { arabic: "أُلْقِيَ", transliteration: "ulqiya", root: "ل-ق-ي", pos: "fil", meaning_tr: "atıldı", irab: "Fiil-i mâzî, mechûl, IV. bâb.", irab_short: "fiil mechûl" },
          { arabic: "فِيهَا", transliteration: "fīhā", root: null, pos: "harf", meaning_tr: "onun içine", irab_short: "câr-mecrûr" },
          { arabic: "فَوْجٌ", transliteration: "fawjun", root: "ف-و-ج", pattern: "فَعْل", pos: "ism", meaning_tr: "topluluk, grup", irab: "{Nâib-i fâil}, {merfû}.", irab_short: "nâib-i fâil, merfû", turkish_bridge: "Fevc (grup), efvâc (gruplar) bu kökten. Nasr 110:2'de أَفْوَاجًا." },
          { arabic: "سَأَلَهُمْ", transliteration: "saʾalahum", root: "س-أ-ل", pos: "fil", meaning_tr: "onlara sordu", irab: "Fiil-i mâzî, I. bâb. هُمْ: mef'ûl bih.", irab_short: "fiil-i mâzî" },
          { arabic: "خَزَنَتُهَا", transliteration: "ḫazanatuhā", root: "خ-ز-ن", pattern: "فَعَلَة", pos: "ism", meaning_tr: "onun bekçileri", irab: "{Fâil}, {merfû}. خَازِن'in cem'i: فَعَلَة (meslek cem'i) + هَا muzâfun ileyh.", irab_short: "fâil, merfû", turkish_bridge: "Hazîne, mahzen, hâzin bu kökten" },
          { arabic: "أَلَمْ", transliteration: "a-lam", root: null, pos: "harf", meaning_tr: "...medi mi?", irab: "أ {istifhâm} + لَمْ {nefy-i mâzî}.", irab_short: "istifhâm + nefy" },
          { arabic: "يَأْتِكُمْ", transliteration: "yaʾtikum", root: "أ-ت-ي", pos: "fil", meaning_tr: "size gelmedi mi", irab: "Muzâri, meczûm (لَمْ ile). كُمْ: mef'ûl bih.", irab_short: "muzâri meczûm" },
          { arabic: "نَذِيرٌ", transliteration: "naḏīrun", root: "ن-ذ-ر", pattern: "فَعِيل", pos: "ism", meaning_tr: "uyarıcı", irab: "{Fâil}, {merfû}. فَعِيل (fâil anlamında): çok uyaran.", irab_short: "fâil, merfû", turkish_bridge: "İnzâr (uyarma), münzir (uyarıcı) bu kökten" },
        ],
      },
      {
        surah: 67, ayah: 9,
        arabic: "قَالُوا بَلَىٰ قَدْ جَاءَنَا نَذِيرٌ فَكَذَّبْنَا وَقُلْنَا مَا نَزَّلَ اللَّهُ مِن شَيْءٍ إِنْ أَنتُمْ إِلَّا فِي ضَلَالٍ كَبِيرٍ",
        translation: "Dediler: 'Evet, bize uyarıcı gelmişti ama biz yalanladık ve Allah hiçbir şey indirmemiştir, dedik. Siz ancak büyük bir sapıklık içindesiniz.'",
        words: [
          { arabic: "قَالُوا", transliteration: "qālū", root: "ق-و-ل", pos: "fil", meaning_tr: "dediler", irab_short: "fiil-i mâzî" },
          { arabic: "بَلَىٰ", transliteration: "balā", root: null, pos: "harf", meaning_tr: "evet (nefy sorusuna olumlu cevap)", irab: "Cevâb-ı istifhâm: أَلَمْ يَأْتِكُمْ → بَلَى = 'evet, geldi.'", irab_short: "cevap edatı", balagha_note: "بَلَى: nefy içeren soruya 'evet (geldi)' anlamında cevap verir. نَعَمْ olsaydı 'hayır gelmedi' anlamına gelirdi." },
          { arabic: "قَدْ", transliteration: "qad", root: null, pos: "harf", meaning_tr: "gerçekten", irab: "Tahkîk edatı (mâzî ile → kesinlik).", irab_short: "tahkîk" },
          { arabic: "جَاءَنَا", transliteration: "jāʾanā", root: "ج-ي-أ", pos: "fil", meaning_tr: "bize geldi", irab_short: "fiil-i mâzî" },
          { arabic: "نَذِيرٌ", transliteration: "naḏīrun", root: "ن-ذ-ر", pos: "ism", meaning_tr: "uyarıcı", irab_short: "fâil, merfû" },
          { arabic: "فَكَذَّبْنَا", transliteration: "fa-kaḏḏabnā", root: "ك-ذ-ب", pattern: "فَعَّلَ", pos: "fil", meaning_tr: "yalanladık", irab: "II. bâb: كَذَبَ (yalan söyledi) → كَذَّبَ (yalanladı, başkasını yalancı saydı).", irab_short: "fiil-i mâzî, II. bâb", turkish_bridge: "Tekzîb (yalanlama), kizb (yalan) bu kökten" },
          { arabic: "وَقُلْنَا", transliteration: "wa-qulnā", root: "ق-و-ل", pos: "fil", meaning_tr: "ve dedik ki", irab_short: "fiil-i mâzî" },
          { arabic: "مَا", transliteration: "mā", root: null, pos: "harf", meaning_tr: "...medi, değil", irab_short: "nefy" },
          { arabic: "نَزَّلَ", transliteration: "nazzala", root: "ن-ز-ل", pattern: "فَعَّلَ", pos: "fil", meaning_tr: "indirdi", irab: "II. bâb: نَزَلَ (indi) → نَزَّلَ (peyderpey indirdi).", irab_short: "fiil-i mâzî, II. bâb" },
          { arabic: "اللَّهُ", transliteration: "allāhu", root: "أ-ل-ه", pos: "ism", meaning_tr: "Allah", irab_short: "fâil, merfû" },
          { arabic: "مِن", transliteration: "min", root: null, pos: "harf", meaning_tr: "hiçbir (zâide)", irab_short: "harf-i cer (zâide)" },
          { arabic: "شَيْءٍ", transliteration: "šayʾin", root: "ش-ي-أ", pos: "ism", meaning_tr: "şey", irab_short: "mecrûr" },
          { arabic: "إِنْ", transliteration: "in", root: null, pos: "harf", meaning_tr: "ancak, sadece (nefy = مَا)", irab: "إِنْ nâfiye: إِنْ ... إِلَّا = hasr (sınırlama): 'siz ancak ... içindesiniz.'", irab_short: "nefy (hasr)" },
          { arabic: "أَنتُمْ", transliteration: "antum", root: null, pos: "harf", meaning_tr: "siz", irab_short: "mübtedâ" },
          { arabic: "إِلَّا", transliteration: "illā", root: null, pos: "harf", meaning_tr: "ancak, ...den başka", irab_short: "istisna (hasr)" },
          { arabic: "فِي", transliteration: "fī", root: null, pos: "harf", meaning_tr: "...içinde", irab_short: "harf-i cer" },
          { arabic: "ضَلَالٍ", transliteration: "ḍalālin", root: "ض-ل-ل", pos: "ism", meaning_tr: "sapıklık", irab: "{Mecrûr}.", irab_short: "mecrûr", turkish_bridge: "Dalâlet (sapıklık), dalâl bu kökten" },
          { arabic: "كَبِيرٍ", transliteration: "kabīrin", root: "ك-ب-ر", pattern: "فَعِيل", pos: "ism", meaning_tr: "büyük", irab: "{Sıfat}, {mecrûr}.", irab_short: "sıfat, mecrûr" },
        ],
      },
      {
        surah: 67, ayah: 10,
        arabic: "وَقَالُوا لَوْ كُنَّا نَسْمَعُ أَوْ نَعْقِلُ مَا كُنَّا فِي أَصْحَابِ السَّعِيرِ",
        translation: "Ve dediler: 'Eğer dinlemiş veya aklımızı kullanmış olsaydık, bu alevli ateş halkı arasında olmazdık.'",
        words: [
          { arabic: "وَقَالُوا", transliteration: "wa-qālū", root: "ق-و-ل", pos: "fil", meaning_tr: "ve dediler", irab_short: "fiil-i mâzî" },
          { arabic: "لَوْ", transliteration: "law", root: null, pos: "harf", meaning_tr: "eğer (gerçekleşmemiş şart)", irab: "Şart edatı (imtinâiye): olmuş bitmiş durumda pişmanlık.", irab_short: "şart (imtinâiye)" },
          { arabic: "كُنَّا", transliteration: "kunnā", root: "ك-و-ن", pos: "fil", meaning_tr: "olsaydık", irab_short: "fiil-i mâzî (nâkıs)" },
          { arabic: "نَسْمَعُ", transliteration: "nasmaʿu", root: "س-م-ع", pos: "fil", meaning_tr: "dinliyor", irab: "كَانَ'nin haberi (muzâri).", irab_short: "haber-i kâne" },
          { arabic: "أَوْ", transliteration: "aw", root: null, pos: "harf", meaning_tr: "veya", irab_short: "atıf" },
          { arabic: "نَعْقِلُ", transliteration: "naʿqilu", root: "ع-ق-ل", pos: "fil", meaning_tr: "aklımızı kullanıyor", irab_short: "muzâri, haber-i kâne", turkish_bridge: "Akıl, ma'kûl, ta'akkul bu kökten" },
          { arabic: "مَا", transliteration: "mā", root: null, pos: "harf", meaning_tr: "olmazdık (nefy)", irab: "لَوْ'un cevabı (nefy): imtinâ.", irab_short: "nefy" },
          { arabic: "كُنَّا", transliteration: "kunnā", root: "ك-و-ن", pos: "fil", meaning_tr: "olurduk", irab_short: "fiil-i mâzî (nâkıs)" },
          { arabic: "فِي", transliteration: "fī", root: null, pos: "harf", meaning_tr: "...arasında", irab_short: "harf-i cer" },
          { arabic: "أَصْحَابِ", transliteration: "aṣḥābi", root: "ص-ح-ب", pos: "ism", meaning_tr: "halkı, ehli", irab: "{Haber-i kâne} (câr-mecrûr), muzâf.", irab_short: "mecrûr, muzâf", turkish_bridge: "Sahip, ashâb, sohbet bu kökten" },
          { arabic: "السَّعِيرِ", transliteration: "as-saʿīri", root: "س-ع-ر", pos: "ism", meaning_tr: "alevli ateş", irab_short: "muzâfun ileyh, mecrûr" },
        ],
      },
      {
        surah: 67, ayah: 11,
        arabic: "فَاعْتَرَفُوا بِذَنبِهِمْ فَسُحْقًا لِّأَصْحَابِ السَّعِيرِ",
        translation: "Böylece günahlarını itiraf ettiler. Artık kahrolsun o alevli ateş halkı!",
        words: [
          { arabic: "فَاعْتَرَفُوا", transliteration: "fa-ʿtarafū", root: "ع-ر-ف", pattern: "اِفْتَعَلَ", pos: "fil", meaning_tr: "itiraf ettiler", irab: "VIII. bâb (ifti'âl): عَرَفَ (bildi, tanıdı) → اعْتَرَفَ (itiraf etti — bildiklerini açıkladı).", irab_short: "fiil-i mâzî, VIII. bâb", turkish_bridge: "Ma'rifet (bilgi), i'tirâf (itiraf), irfân bu kökten", balagha_note: "اعْتَرَفَ: bilmenin ötesinde, kabullenme. VIII. bâb = nefis içinde yoğun kabul." },
          { arabic: "بِذَنبِهِمْ", transliteration: "bi-ḏanbihim", root: "ذ-ن-ب", pos: "ism", meaning_tr: "günahlarıyla", irab: "بِ {harf-i cer} + ذَنْب {mecrûr, muzâf} + هِمْ.", irab_short: "câr-mecrûr", turkish_bridge: "Zenb (günah), müznib (günahkâr) bu kökten" },
          { arabic: "فَسُحْقًا", transliteration: "fa-suḥqan", root: "س-ح-ق", pos: "ism", meaning_tr: "kahrolsun! uzaklık olsun!", irab: "Masdar mansûb (fiil yerine → beddua): أَسْحَقَهُمُ اللَّهُ سُحْقًا (Allah onları uzak kılsın).", irab_short: "mef'ûl mutlak, mensûb", balagha_note: "فَسُحْقًا: kesin beddua — gizli fiil masdarla temsil edilmiş → îcâz (kısalık)." },
          { arabic: "لِّأَصْحَابِ", transliteration: "li-aṣḥābi", root: "ص-ح-ب", pos: "ism", meaning_tr: "halkına", irab_short: "câr-mecrûr, muzâf" },
          { arabic: "السَّعِيرِ", transliteration: "as-saʿīri", root: "س-ع-ر", pos: "ism", meaning_tr: "alevli ateş", irab_short: "muzâfun ileyh, mecrûr" },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "كَادَ — Yaklaşma Fiilleri (Ef'âl-i Mukârebe)",
        explanation:
          "كَادَ/يَكَادُ: 'neredeyse, az kalsın.' Haberi muzâri fiil gelir (أَنْ ile veya أَنْ'sız). تَكَادُ تَمَيَّزُ = 'neredeyse parçalanacak.' كَادَ grubundaki fiiller: كَادَ (yaklaştı), أَوْشَكَ (hızla yaklaştı), كَرَبَ (yakın oldu).",
        rule: "كَادَ + muzâri (أَنْ'sız): neredeyse yapacak\nمَا كَادَ + muzâri: neredeyse yapmayacaktı (olumsuz)\nكَادَ'nin ismi: gizli zamîr (هِيَ = cehennem)",
        examples: ["تَكَادُ تَمَيَّزُ — neredeyse parçalanacak (67:8)", "يَكَادُ البَرْقُ يَخْطَفُ أَبْصَارَهُمْ — şimşek neredeyse gözlerini alacak (2:20)"],
      },
      {
        title: "VIII. Bâb (İfti'âl) — İçselleştirme",
        explanation:
          "VIII. bâb (اِفْتَعَلَ) genellikle fiilin öznede yoğunlaşmasını ifade eder: اعْتَرَفَ (kendi içinde bildiğini kabullendi → itiraf), اِجْتَمَعَ (bir araya geldi), اِكْتَسَبَ (kazandı). عَرَفَ → مَعْرِفَة: bilgi; اِعْتَرَفَ → itiraf: bilgiyi açığa vurma.",
        rule: "اِفْتَعَلَ kalıbı:\nعَرَفَ (bildi) → اِعْتَرَفَ (itiraf etti)\nجَمَعَ (topladı) → اِجْتَمَعَ (toplandı)\nكَسَبَ (kazandı) → اِكْتَسَبَ (bizzat kazandı)",
        examples: ["اعْتَرَفُوا بِذَنْبِهِمْ — günahlarını itiraf ettiler (67:11)", "اجْتَمَعُوا — bir araya geldiler", "اكْتَسَبَ — bizzat kazandı (2:286)"],
      },
      {
        title: "لَوْ — Gerçekleşmemiş Şart (İmtinâiye)",
        explanation:
          "لَوْ: 'eğer ... olsaydı' → geçmişte gerçekleşmemiş şart. Cevabı genellikle nefy (مَا/لَمْ) ile gelir veya لَ + mâzî ile gelir. 67:10: لَوْ كُنَّا نَسْمَعُ ... مَا كُنَّا فِي ... = dinlemiş olsaydık ... olmazdık.",
        rule: "لَوْ + mâzî → مَا + mâzî (pişmanlık)\nلَوْ + مَا = hiçbir zaman (imtinâ)\nإِذَا (gerçekleşebilir şart) ≠ لَوْ (gerçekleşmemiş şart)",
        examples: ["لَوْ كُنَّا نَسْمَعُ ... مَا كُنَّا — dinleseydik ... olmazdık (67:10)", "لَوْ أَنزَلْنَا هَذَا القُرْآنَ عَلَى جَبَلٍ — dağa indirseydik (59:21)"],
      },
    ],
    exercises: [
      generateBabQuiz(
        "S67-B02-Q01", "اعْتَرَفُوا",
        "VIII. bâb (ifti'âl): عَرَفَ (bildi) → اعْتَرَفَ (itiraf etti)",
        ["I. bâb: عَرَفَ (bildi)", "V. bâb: تَعَرَّفَ (tanıştı)", "IV. bâb: أَعْرَفَ"],
        "اعْتَرَفَ: VIII. bâb (اِفْتَعَلَ). ع-ر-ف kökünden. I. bâb = bilme; VIII. bâb = içsel kabullenme ve açığa vurma → itiraf.",
        ["ع-ر-ف"]
      ),
      generateRootQuiz(
        "S67-B02-Q02", "تَمَيَّزُ", "م-ي-ز",
        ["م-ز-ي", "م-ز-ز", "ز-ي-م"],
        "تَمَيَّزُ: م-ي-ز kökünden V. bâb (تَفَعَّلَ). مَازَ: ayırdı → تَمَيَّزَ: parçalandı, ayrıştı. Temyîz (ayırma) aynı kökten.",
        ["م-ي-ز"]
      ),
      generateBalaghaQuiz(
        "S67-B02-Q03",
        "67:7'de cehennemin شَهِيقًا (inleme) çıkarması hangi belâgat sanatıdır?",
        "Teşhîs (kişileştirme) — ateşe canlı varlık niteliği verilmiş",
        ["İsti'âre — metafor", "Tıbâk — zıtlık", "Kinâye — dolaylı anlatım"],
        "Teşhîs: cehennem bir canlı gibi 'şehîk' (nefes çekme sesi) çıkarıyor ve 'kaynıyor' (تَفُور). Korkutucu bir kişileştirme — ateş adeta öfkeli bir canavar."
      ),
      generateFillBlank(
        "S67-B02-Q04",
        "لَوْ كُنَّا _____ أَوْ نَعْقِلُ مَا كُنَّا فِي أَصْحَابِ السَّعِيرِ",
        "نَسْمَعُ", ["نَعْلَمُ", "نُؤْمِنُ", "نَرَى"],
        "İki yeteneğin biri: dinleme (...) ve akletme (نَعْقِل).",
        "نَسْمَعُ (dinliyoruz) + نَعْقِلُ (aklımızı kullanıyoruz): Kur'an iki temel yeteneği vurguluyor — vahyi dinleme (sem') ve akılla kavrama (akl). İkisinden biri bile yetseydi...",
        ["س-م-ع", "ع-ق-ل"]
      ),
      {
        id: "S67-B02-Q05", type: "single_choice",
        question: "67:10'da لَوْ edatı ne ifade eder?",
        options: [
          "Gerçekleşmemiş şart (imtinâiye) — geçmişte yapılmamış eyleme pişmanlık",
          "Gelecekte olası şart (ihtimaliye)",
          "Temenni (keşke)",
          "Tehdît (korkutma)",
        ],
        correct: 0,
        explanation: "لَوْ imtinâiye: geçmişte gerçekleşmemiş şart. 'Dinleseydik ... olmazdık' → pişmanlık. إِذَا (olası) ve إِنْ (ihtimal) ile karıştırılmamalı.",
        relatedRoots: ["س-م-ع", "ع-ق-ل"],
      },
      {
        id: "S67-B02-Q06", type: "single_choice",
        question: "67:9'da بَلَى cevabı ne anlama gelir?",
        options: [
          "'Evet, geldi' — nefy içeren soruya olumlu cevap verir",
          "'Hayır, gelmedi' — soruyu reddeder",
          "'Belki geldi' — belirsizlik ifade eder",
          "'Elbette gelmedi' — kesin red",
        ],
        correct: 0,
        explanation: "بَلَى: nefy içeren istifhâma (أَلَمْ يَأْتِكُمْ) 'evet' cevabı verir → 'evet, geldi.' نَعَمْ olsaydı 'hayır gelmedi' anlamına gelirdi. Bu Arapça'nın önemli bir inceliğidir.",
        relatedRoots: [],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 3 — MÜLK 67:12-18 — Haşyet, Rızık, Yeryüzü Emniyeti
  // ═══════════════════════════════════════════════════════════
  {
    id: "S67-B03-mulk",
    title: "Mülk (12-18) — Gizli Haşyet ve Yeryüzünün Emniyeti",
    titleAr: "سُورَةُ المُلْك ١٢-١٨",
    stage: 2,
    level: 8,
    surah: 67,
    description:
      "Gizlide Allah'tan korkanların mükâfatı, Allah'ın her şeyi bilmesi, yeryüzünün emniyeti, rızık arama, uçan kuşlar. يَخْشَوْنَ (haşyet), ذَلُولًا (boyun eğmiş), صَافَّاتٍ وَيَقْبِضْنَ (kanat açıp kapama).",
    verses: [
      {
        surah: 67, ayah: 12,
        arabic: "إِنَّ الَّذِينَ يَخْشَوْنَ رَبَّهُم بِالْغَيْبِ لَهُم مَّغْفِرَةٌ وَأَجْرٌ كَبِيرٌ",
        translation: "Rablerinden gıyâben korkanlar var ya, onlar için mağfiret ve büyük bir ecir vardır.",
        words: [
          { arabic: "إِنَّ", transliteration: "inna", root: null, pos: "harf", meaning_tr: "şüphesiz, muhakkak", irab: "Te'kîd edatı. İsmini mensûb, haberini merfû yapar.", irab_short: "te'kîd" },
          { arabic: "الَّذِينَ", transliteration: "allaḏīna", root: null, pos: "harf", meaning_tr: "o kimseler ki", irab: "{İsm-i inne}, mahallen mensûb.", irab_short: "ism-i inne" },
          { arabic: "يَخْشَوْنَ", transliteration: "yaḫšawna", root: "خ-ش-ي", pos: "fil", meaning_tr: "korkarlar (derin saygı)", irab: "{Muzâri}, merfû (nûn). خَشِيَ: haşyet — bilgiye dayalı korku + saygı. خَوْف'tan farklı: haşyet daha derin.", irab_short: "muzâri, merfû", turkish_bridge: "Haşyet (derin korku) bu kökten. Haşiye/haşye ile karıştırma!", balagha_note: null },
          { arabic: "رَبَّهُم", transliteration: "rabbahum", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rablerini", irab: "{Mef'ûl bih}, {mensûb}.", irab_short: "mef'ûl bih, mensûb" },
          { arabic: "بِالْغَيْبِ", transliteration: "bi-l-ġaybi", root: "غ-ي-ب", pos: "ism", meaning_tr: "gıyâben, görmeden", irab: "بِ {harf-i cer} + الغَيْب {mecrûr}. 'Görmeksizin, gizlide.'", irab_short: "câr-mecrûr (hâl)", turkish_bridge: "Gayb (görünmeyen), gâib (yok olan) bu kökten" },
          { arabic: "لَهُم", transliteration: "lahum", root: null, pos: "harf", meaning_tr: "onlara", irab: "Haber-i inne (câr-mecrûr, mukaddem).", irab_short: "haber-i inne" },
          { arabic: "مَّغْفِرَةٌ", transliteration: "maġfiratun", root: "غ-ف-ر", pattern: "مَفْعِلَة", pos: "ism", meaning_tr: "bağışlanma", irab: "{Mübtedâ muahhar}, {merfû}.", irab_short: "mübtedâ, merfû" },
          { arabic: "وَأَجْرٌ", transliteration: "wa-ajrun", root: "أ-ج-ر", pos: "ism", meaning_tr: "ve ecir, ödül", irab: "Atıf ile مَغْفِرَة'ye bağlı.", irab_short: "mübtedâ (atıf), merfû", turkish_bridge: "Ecir (ücret), icâre (kira) bu kökten" },
          { arabic: "كَبِيرٌ", transliteration: "kabīrun", root: "ك-ب-ر", pos: "ism", meaning_tr: "büyük", irab_short: "sıfat, merfû" },
        ],
      },
      {
        surah: 67, ayah: 13,
        arabic: "وَأَسِرُّوا قَوْلَكُمْ أَوِ اجْهَرُوا بِهِ إِنَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ",
        translation: "Sözünüzü ister gizleyin ister açığa vurun; O, göğüslerin özünü bilir.",
        words: [
          { arabic: "وَأَسِرُّوا", transliteration: "wa-asirrū", root: "س-ر-ر", pos: "fil", meaning_tr: "gizleyin", irab: "{Emir}, IV. bâb: سَرَّ → أَسَرَّ (gizledi).", irab_short: "emir, IV. bâb", turkish_bridge: "Sır, esrâr, isrâr bu kökten" },
          { arabic: "قَوْلَكُمْ", transliteration: "qawlakum", root: "ق-و-ل", pos: "ism", meaning_tr: "sözünüzü", irab: "{Mef'ûl bih}, {mensûb}.", irab_short: "mef'ûl bih, mensûb" },
          { arabic: "أَوِ", transliteration: "awi", root: null, pos: "harf", meaning_tr: "veya", irab_short: "atıf" },
          { arabic: "اجْهَرُوا", transliteration: "ijharū", root: "ج-ه-ر", pos: "fil", meaning_tr: "açığa vurun", irab: "{Emir}, I. bâb.", irab_short: "emir, I. bâb", turkish_bridge: "Cehr (açıklık), izhar bu kökten" },
          { arabic: "بِهِ", transliteration: "bihi", root: null, pos: "harf", meaning_tr: "onu", irab_short: "câr-mecrûr" },
          { arabic: "إِنَّهُ", transliteration: "innahu", root: null, pos: "harf", meaning_tr: "şüphesiz O", irab: "إِنَّ + هُ (ism-i inne). Ta'lîl (sebep): neden gizlemenin faydasız olduğunu açıklar.", irab_short: "te'kîd + ism-i inne" },
          { arabic: "عَلِيمٌ", transliteration: "ʿalīmun", root: "ع-ل-م", pattern: "فَعِيل", pos: "ism", meaning_tr: "çok bilen", irab: "{Haber-i inne}, {merfû}.", irab_short: "haber-i inne, merfû" },
          { arabic: "بِذَاتِ", transliteration: "bi-ḏāti", root: "ذ-و-ت", pos: "ism", meaning_tr: "...nın özüne", irab: "بِ {harf-i cer} + ذَات {mecrûr, muzâf}.", irab_short: "câr-mecrûr" },
          { arabic: "الصُّدُورِ", transliteration: "aṣ-ṣudūri", root: "ص-د-ر", pos: "ism", meaning_tr: "göğüslerin", irab: "{Muzâfun ileyh}, {mecrûr}. صُدُور: صَدْر'ın cem'i → göğüsler (kalplerin mekânı).", irab_short: "muzâfun ileyh, mecrûr", turkish_bridge: "Sadr (göğüs), sudûr bu kökten", balagha_note: "ذَاتِ الصُّدُور: 'göğüslerin sahibi/özü' → kinâye: kalplerdeki gizli düşünceler." },
        ],
      },
      {
        surah: 67, ayah: 14,
        arabic: "أَلَا يَعْلَمُ مَنْ خَلَقَ وَهُوَ اللَّطِيفُ الْخَبِيرُ",
        translation: "Yaratan bilmez mi? O, Latîf'tir, Habîr'dir.",
        words: [
          { arabic: "أَلَا", transliteration: "a-lā", root: null, pos: "harf", meaning_tr: "...mez mi?", irab: "أ {istifhâm-ı inkârî} + لَا {nefy}: 'Bilmez mi? (elbette bilir!)'", irab_short: "istifhâm-ı inkârî", balagha_note: "İstifhâm-ı inkârî: soru formunda kesinlik → 'Elbette bilir!' Muhatap düşünmeye davet edilir." },
          { arabic: "يَعْلَمُ", transliteration: "yaʿlamu", root: "ع-ل-م", pos: "fil", meaning_tr: "bilir", irab_short: "muzâri, merfû" },
          { arabic: "مَنْ", transliteration: "man", root: null, pos: "harf", meaning_tr: "...yaratan (kim)", irab: "İsm-i mevsûl: 'yaratan (Zat).' Fâil.", irab_short: "ism-i mevsûl, fâil" },
          { arabic: "خَلَقَ", transliteration: "ḫalaqa", root: "خ-ل-ق", pos: "fil", meaning_tr: "yarattı", irab_short: "fiil-i mâzî, I. bâb" },
          { arabic: "وَهُوَ", transliteration: "wa-huwa", root: null, pos: "harf", meaning_tr: "ve O", irab_short: "mübtedâ" },
          { arabic: "اللَّطِيفُ", transliteration: "al-laṭīfu", root: "ل-ط-ف", pattern: "فَعِيل", pos: "ism", meaning_tr: "her inceliği bilen, lütufkâr", irab: "{Haber} birinci, {merfû}.", irab_short: "haber-1, merfû", turkish_bridge: "Lütuf, letâfet, latîf bu kökten" },
          { arabic: "الْخَبِيرُ", transliteration: "al-ḫabīru", root: "خ-ب-ر", pattern: "فَعِيل", pos: "ism", meaning_tr: "her şeyden haberdar", irab: "{Haber} ikinci, {merfû}.", irab_short: "haber-2, merfû", turkish_bridge: "Haber, ihbâr, habîr bu kökten" },
        ],
      },
      {
        surah: 67, ayah: 15,
        arabic: "هُوَ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ ذَلُولًا فَامْشُوا فِي مَنَاكِبِهَا وَكُلُوا مِن رِّزْقِهِ وَإِلَيْهِ النُّشُورُ",
        translation: "Yeryüzünü size boyun eğmiş kılan O'dur. Onun omuzlarında yürüyün, O'nun rızkından yiyin. Dönüş yalnız O'nadır.",
        words: [
          { arabic: "هُوَ", transliteration: "huwa", root: null, pos: "harf", meaning_tr: "O", irab_short: "mübtedâ" },
          { arabic: "الَّذِي", transliteration: "allaḏī", root: null, pos: "harf", meaning_tr: "o ki", irab_short: "haber" },
          { arabic: "جَعَلَ", transliteration: "jaʿala", root: "ج-ع-ل", pos: "fil", meaning_tr: "kıldı", irab_short: "fiil-i mâzî, iki mef'ûl" },
          { arabic: "لَكُمُ", transliteration: "lakumu", root: null, pos: "harf", meaning_tr: "sizin için", irab_short: "câr-mecrûr" },
          { arabic: "الْأَرْضَ", transliteration: "al-arḍa", root: "أ-ر-ض", pos: "ism", meaning_tr: "yeryüzünü", irab: "{Mef'ûl bih} birinci, {mensûb}.", irab_short: "mef'ûl bih-1, mensûb" },
          { arabic: "ذَلُولًا", transliteration: "ḏalūlan", root: "ذ-ل-ل", pattern: "فَعُول", pos: "ism", meaning_tr: "boyun eğmiş, uysal", irab: "{Mef'ûl bih} ikinci, {mensûb}. فَعُول: mübalağa sîgası.", irab_short: "mef'ûl bih-2, mensûb", turkish_bridge: "Zelîl (alçak), tezlîl (alçaltma) bu kökten", balagha_note: "İsti'âre: yeryüzü, boyun eğmiş bir binek hayvanı gibi → ذَلُول normalde deve/at için kullanılır." },
          { arabic: "فَامْشُوا", transliteration: "fa-mšū", root: "م-ش-ي", pos: "fil", meaning_tr: "yürüyün", irab: "{Emir}. فَ: fa-yı cezâiye.", irab_short: "emir" },
          { arabic: "فِي", transliteration: "fī", root: null, pos: "harf", meaning_tr: "...de", irab_short: "harf-i cer" },
          { arabic: "مَنَاكِبِهَا", transliteration: "manākibihā", root: "ن-ك-ب", pattern: "مَفَاعِل", pos: "ism", meaning_tr: "omuzlarında, yollarında", irab: "{Mecrûr}. مَنْكِب: omuz → yeryüzünün omuzları = dağlar, yollar, bölgeler.", irab_short: "mecrûr", turkish_bridge: "Menkıbe (omuz = yol), menâkib bu kökten", balagha_note: "İsti'âre (devam): yeryüzü bir binek → onun 'omuzlarında' yürüyün. Tutarlı metafor zincirleme." },
          { arabic: "وَكُلُوا", transliteration: "wa-kulū", root: "أ-ك-ل", pos: "fil", meaning_tr: "ve yiyin", irab_short: "emir" },
          { arabic: "مِن", transliteration: "min", root: null, pos: "harf", meaning_tr: "...dan", irab_short: "harf-i cer" },
          { arabic: "رِّزْقِهِ", transliteration: "rizqihi", root: "ر-ز-ق", pos: "ism", meaning_tr: "O'nun rızkından", irab_short: "mecrûr, muzâf", turkish_bridge: "Rızık, rezzâk bu kökten" },
          { arabic: "وَإِلَيْهِ", transliteration: "wa-ilayhi", root: null, pos: "harf", meaning_tr: "ve O'nadır", irab: "Haber-i mukaddem: câr-mecrûr.", irab_short: "haber mukaddem" },
          { arabic: "النُّشُورُ", transliteration: "an-nušūru", root: "ن-ش-ر", pattern: "فُعُول", pos: "ism", meaning_tr: "diriliş, dönüş", irab: "{Mübtedâ} (muahhar), {merfû}.", irab_short: "mübtedâ, merfû", turkish_bridge: "Neşr (yayma), nüşûr (diriliş) bu kökten" },
        ],
      },
      {
        surah: 67, ayah: 16,
        arabic: "أَأَمِنتُم مَّن فِي السَّمَاءِ أَن يَخْسِفَ بِكُمُ الْأَرْضَ فَإِذَا هِيَ تَمُورُ",
        translation: "Gökte olanın sizi yere batırmayacağından emin misiniz? O zaman yer sarsılıp çalkalanır.",
        words: [
          { arabic: "أَأَمِنتُم", transliteration: "a-amintum", root: "أ-م-ن", pos: "fil", meaning_tr: "emin mi oldunuz", irab: "أ {istifhâm-ı inkârî} + أَمِنْتُمْ {fiil-i mâzî, I. bâb}: emin olmak, güvenmek.", irab_short: "istifhâm + fiil-i mâzî", turkish_bridge: "Emân, emniyet, îmân bu kökten" },
          { arabic: "مَّن", transliteration: "man", root: null, pos: "harf", meaning_tr: "...ki O (gökte olan)", irab_short: "ism-i mevsûl" },
          { arabic: "فِي", transliteration: "fī", root: null, pos: "harf", meaning_tr: "...de", irab_short: "harf-i cer" },
          { arabic: "السَّمَاءِ", transliteration: "as-samāʾi", root: "س-م-و", pos: "ism", meaning_tr: "gökte", irab_short: "mecrûr" },
          { arabic: "أَن", transliteration: "an", root: null, pos: "harf", meaning_tr: "...mesinden", irab: "Masdariye edatı: يَخْسِفَ'yi mensûb yapar.", irab_short: "masdariye" },
          { arabic: "يَخْسِفَ", transliteration: "yaḫsifa", root: "خ-س-ف", pos: "fil", meaning_tr: "batıracağından", irab: "{Muzâri, mensûb} (أَنْ ile).", irab_short: "muzâri mensûb", turkish_bridge: "Husûf (ay tutulması = batma), hasf bu kökten" },
          { arabic: "بِكُمُ", transliteration: "bikumu", root: null, pos: "harf", meaning_tr: "sizi (ile birlikte)", irab_short: "câr-mecrûr" },
          { arabic: "الْأَرْضَ", transliteration: "al-arḍa", root: "أ-ر-ض", pos: "ism", meaning_tr: "yere", irab_short: "mef'ûl bih, mensûb" },
          { arabic: "فَإِذَا", transliteration: "fa-iḏā", root: null, pos: "harf", meaning_tr: "o zaman bir de", irab: "فَ {fa-yı cezâiye} + إِذَا {fücâiye: anîden}.", irab_short: "fücâiye" },
          { arabic: "هِيَ", transliteration: "hiya", root: null, pos: "harf", meaning_tr: "o (yer)", irab_short: "mübtedâ" },
          { arabic: "تَمُورُ", transliteration: "tamūru", root: "م-و-ر", pos: "fil", meaning_tr: "çalkalanır, sarsılır", irab: "{Muzâri}, {merfû}. مَارَ: sallandı, çalkalandı.", irab_short: "muzâri, merfû" },
        ],
      },
      {
        surah: 67, ayah: 17,
        arabic: "أَمْ أَمِنتُم مَّن فِي السَّمَاءِ أَن يُرْسِلَ عَلَيْكُمْ حَاصِبًا فَسَتَعْلَمُونَ كَيْفَ نَذِيرِ",
        translation: "Yoksa gökte olanın üzerinize taş yağdıran bir rüzgâr göndermeyeceğinden mi emin oldunuz? Yakında uyarımın nasıl olduğunu bileceksiniz!",
        words: [
          { arabic: "أَمْ", transliteration: "am", root: null, pos: "harf", meaning_tr: "yoksa", irab: "Munkatıa (geçiş) أَمْ: yeni soru.", irab_short: "atıf" },
          { arabic: "أَمِنتُم", transliteration: "amintum", root: "أ-م-ن", pos: "fil", meaning_tr: "emin mi oldunuz", irab_short: "fiil-i mâzî" },
          { arabic: "مَّن", transliteration: "man", root: null, pos: "harf", meaning_tr: "...ki O", irab_short: "ism-i mevsûl" },
          { arabic: "فِي", transliteration: "fī", root: null, pos: "harf", meaning_tr: "...de", irab_short: "harf-i cer" },
          { arabic: "السَّمَاءِ", transliteration: "as-samāʾi", root: "س-م-و", pos: "ism", meaning_tr: "gökte", irab_short: "mecrûr" },
          { arabic: "أَن", transliteration: "an", root: null, pos: "harf", meaning_tr: "...mesinden", irab_short: "masdariye" },
          { arabic: "يُرْسِلَ", transliteration: "yursila", root: "ر-س-ل", pos: "fil", meaning_tr: "göndermesinden", irab: "{Muzâri, mensûb}. IV. bâb: رَسَلَ → أَرْسَلَ (gönderdi).", irab_short: "muzâri mensûb, IV. bâb", turkish_bridge: "Resûl, risâle, irsâl bu kökten" },
          { arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", root: null, pos: "harf", meaning_tr: "üzerinize", irab_short: "câr-mecrûr" },
          { arabic: "حَاصِبًا", transliteration: "ḥāṣiban", root: "ح-ص-ب", pattern: "فَاعِل", pos: "ism", meaning_tr: "taş fırlatan (rüzgâr)", irab: "{Mef'ûl bih}, {mensûb}. İsm-i fâil: 'taş atan (rüzgâr).'", irab_short: "mef'ûl bih, mensûb" },
          { arabic: "فَسَتَعْلَمُونَ", transliteration: "fa-sataʿlamūna", root: "ع-ل-م", pos: "fil", meaning_tr: "yakında bileceksiniz", irab: "فَ + سَ {istikbâl} + muzâri: tehdîd.", irab_short: "muzâri (tehdîd)" },
          { arabic: "كَيْفَ", transliteration: "kayfa", root: null, pos: "harf", meaning_tr: "nasıl", irab_short: "istifhâm" },
          { arabic: "نَذِيرِ", transliteration: "naḏīri", root: "ن-ذ-ر", pos: "ism", meaning_tr: "uyarım", irab: "نَذِير + ي (yâ-yı mütekellim hazfedilmiş): benim uyarım.", irab_short: "muzâf (yâ hazif)" },
        ],
      },
      {
        surah: 67, ayah: 18,
        arabic: "وَلَقَدْ كَذَّبَ الَّذِينَ مِن قَبْلِهِمْ فَكَيْفَ كَانَ نَكِيرِ",
        translation: "Andolsun, onlardan öncekiler de yalanlamıştı. Benim azabım nasıl oldu!",
        words: [
          { arabic: "وَلَقَدْ", transliteration: "wa-laqad", root: null, pos: "harf", meaning_tr: "andolsun", irab_short: "te'kîd" },
          { arabic: "كَذَّبَ", transliteration: "kaḏḏaba", root: "ك-ذ-ب", pattern: "فَعَّلَ", pos: "fil", meaning_tr: "yalanladı", irab: "II. bâb.", irab_short: "fiil-i mâzî, II. bâb" },
          { arabic: "الَّذِينَ", transliteration: "allaḏīna", root: null, pos: "harf", meaning_tr: "o kimseler ki", irab_short: "fâil" },
          { arabic: "مِن", transliteration: "min", root: null, pos: "harf", meaning_tr: "...dan", irab_short: "harf-i cer" },
          { arabic: "قَبْلِهِمْ", transliteration: "qablihim", root: "ق-ب-ل", pos: "ism", meaning_tr: "onlardan önce", irab_short: "mecrûr, muzâf" },
          { arabic: "فَكَيْفَ", transliteration: "fa-kayfa", root: null, pos: "harf", meaning_tr: "nasıl oldu!", irab_short: "istifhâm (tehdîd)" },
          { arabic: "كَانَ", transliteration: "kāna", root: "ك-و-ن", pos: "fil", meaning_tr: "oldu", irab_short: "fiil-i mâzî (nâkıs)" },
          { arabic: "نَكِيرِ", transliteration: "nakīri", root: "ن-ك-ر", pattern: "فَعِيل", pos: "ism", meaning_tr: "azabım, inkârım", irab: "{Haber-i kâne}. نَكِير: masdar veya ism-i fâil anlamında: inkâr etme / azap verme. + yâ-yı mütekellim hazfedilmiş.", irab_short: "haber-i kâne", turkish_bridge: "İnkâr, nekir, münker bu kökten" },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "İsti'âre Zinciri: Yeryüzü = Binek Hayvanı",
        explanation:
          "67:15'te yeryüzü bir binek hayvanına benzetilir: ذَلُول (boyun eğmiş → deve/at için kullanılır) + مَنَاكِب (omuzlar). Tek bir isti'âre değil, tutarlı bir metafor zinciri: yeryüzü boyun eğmiş, üzerinde yürüyorsunuz, omuzlarına biniyorsunuz.",
        rule: "İsti'âre zinciri: aynı müşebbeh bih (binek hayvanı) çerçevesinde birden fazla unsur kullanılır.\nأَرْض → ذَلُول (boyun eğmiş)\nمَنَاكِب الأَرْض → omuzlar (yollar, dağlar)",
        examples: ["الأَرْض ذَلُولًا — yer = boyun eğmiş binek (67:15)", "مَنَاكِبِهَا — onun omuzları (67:15)", "Benzer: أَرْض مَهْدًا — beşik gibi yer (Nebe 78:6)"],
      },
      {
        title: "خَشِيَ vs. خَافَ — Korku Farkı",
        explanation:
          "خَشِيَ (haşyet): bilgiye dayalı derin korku + saygı. İlimle bağlantılı (Fâtır 35:28: إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ العُلَمَاءُ). خَافَ (havf): genel korku, tehlike hissi. Kur'an'da haşyet daha yüksek mertebedir.",
        rule: "خَشِيَ = bilgiyle gelen korku + ta'zîm → genellikle Allah korkusu\nخَافَ = genel korku, tehlike hissi → her korku için\n67:12: يَخْشَوْنَ رَبَّهُم بِالغَيْبِ — görmeden bile derin saygı ile korkanlar",
        examples: ["يَخْشَوْنَ رَبَّهُمْ بِالغَيْبِ — gaybî haşyet (67:12)", "إِنَّمَا يَخْشَى اللَّهَ العُلَمَاءُ — haşyet = ilim ehline mahsus (35:28)"],
      },
    ],
    exercises: [
      generateRootQuiz(
        "S67-B03-Q01", "ذَلُولًا", "ذ-ل-ل",
        ["د-ل-ل", "ذ-ل-ق", "ظ-ل-ل"],
        "ذَلُول: ذ-ل-ل kökünden فَعُول kalıbı = 'çok boyun eğmiş, uysal.' Normalde binek hayvanlar (deve, at) için kullanılır. Yeryüzü için kullanılması → isti'âre.",
        ["ذ-ل-ل"]
      ),
      generateWaznQuiz(
        "S67-B03-Q02", "مَغْفِرَةٌ",
        "مَفْعِلَة (masdar/ism-i mekân) — غ-ف-ر: bağışlanma",
        ["فَعِيلَة (sıfat-ı müşebbehe)", "تَفْعِلَة (II. bâb masdarı)", "مُفَاعَلَة (III. bâb masdarı)"],
        "مَغْفِرَة: مَفْعِلَة kalıbı, غ-ف-ر kökünden. Aynı kökten: غُفْرَان (bağışlanma), غَفُور (çok bağışlayan), اِسْتِغْفَار (bağışlanma isteme).",
        ["غ-ف-ر"]
      ),
      generateBalaghaQuiz(
        "S67-B03-Q03",
        "67:14'te أَلَا يَعْلَمُ مَنْ خَلَقَ sorusu hangi belâgat sanatıdır?",
        "İstifhâm-ı inkârî + müsâdere ale'l-matlûb: 'Yaratan bilmez mi?!' = elbette bilir",
        ["Teşbîh — benzetme", "Kinâye — dolaylı anlatım", "Tıbâk — zıtlık"],
        "İstifhâm-ı inkârî: soru formunda kesinlik. 'Yaratan bilmez mi?' → elbette bilir. Yaratma fiili bilmenin en güçlü kanıtı olarak sunuluyor."
      ),
      generateIrabQuiz(
        "S67-B03-Q04", "عَمَلًا (67:2)",
        "Temyîz (mensûb) — 'amel bakımından en güzel'",
        ["Mef'ûl bih (mensûb)", "Hâl (mansûb)", "Mef'ûl mutlak (mensûb)"],
        "عَمَلًا: temyîz → أَحْسَنُ neyi? amel bakımından. İsm-i tafdîl + temyîz yapısı: أَكْبَرُ سِنًّا (yaş bakımından büyük), أَحْسَنُ عَمَلًا (amel bakımından güzel).",
        ["ع-م-ل"]
      ),
      generateFillBlank(
        "S67-B03-Q05",
        "هُوَ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ _____ فَامْشُوا فِي مَنَاكِبِهَا",
        "ذَلُولًا", ["سَهْلًا", "وَاسِعَةً", "مَهْدًا"],
        "Yeryüzü hangi sıfatla nitelenmiş? (Binek hayvanı metaforu)",
        "ذَلُول: boyun eğmiş, uysal. Yeryüzü sanki ehlileştirilmiş bir binek hayvanı gibi — üzerinde güvenle yürünür, omuzlarında gezilir. İsti'âre zinciri.",
        ["ذ-ل-ل"]
      ),
      {
        id: "S67-B03-Q06", type: "single_choice",
        question: "67:13'te أَسِرُّوا (gizleyin) ve اجْهَرُوا (açığa vurun) birlikte verilmesinin amacı nedir?",
        options: [
          "Allah'ın gizli-açık her şeyi bildiğini vurgulamak → gizlemenin faydasızlığı",
          "İnsanlara sözlerini gizlemelerini tavsiye etmek",
          "Gizli konuşmanın daha faziletli olduğunu belirtmek",
          "Sadece edebi üslup, anlam farkı yok",
        ],
        correct: 0,
        explanation: "Tıbâk (zıtlık): أَسِرُّوا (gizleyin) ↔ اجْهَرُوا (açığa vurun). Her ikisi de zikredilir ki mesaj net olsun: gizleseniz de açıklasanız da Allah bilir. عَلِيمٌ بِذَاتِ الصُّدُورِ = göğüslerin özünü bile bilir.",
        relatedRoots: ["س-ر-ر", "ج-ه-ر"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 4 — MÜLK 67:19-24 — Kuşlar, Duyular, Çoğaltma
  // ═══════════════════════════════════════════════════════════
  {
    id: "S67-B04-mulk",
    title: "Mülk (19-24) — Kuşlar, Duyular ve Şükür",
    titleAr: "سُورَةُ المُلْك ١٩-٢٤",
    stage: 2,
    level: 8,
    surah: 67,
    description:
      "Kuşların uçuşundaki mucize, Rahmân'ın koruması, rızık verme, duyular (işitme, görme, kalp). صَافَّاتٍ وَيَقْبِضْنَ (kanat açıp kapama), السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ.",
    verses: [
      {
        surah: 67, ayah: 19,
        arabic: "أَوَلَمْ يَرَوْا إِلَى الطَّيْرِ فَوْقَهُمْ صَافَّاتٍ وَيَقْبِضْنَ مَا يُمْسِكُهُنَّ إِلَّا الرَّحْمَـٰنُ إِنَّهُ بِكُلِّ شَيْءٍ بَصِيرٌ",
        translation: "Üstlerinde kanatlarını açıp kapayarak uçan kuşları görmüyorlar mı? Onları Rahmân'dan başkası tutmuyor. Şüphesiz O, her şeyi görendir.",
        words: [
          { arabic: "أَوَلَمْ", transliteration: "a-wa-lam", root: null, pos: "harf", meaning_tr: "...mıyorlar?", irab: "أ {istifhâm} + وَ {isti'nâf} + لَمْ {nefy, cezm}.", irab_short: "istifhâm + nefy" },
          { arabic: "يَرَوْا", transliteration: "yaraw", root: "ر-أ-ي", pos: "fil", meaning_tr: "görmediler mi", irab: "{Muzâri, meczûm} (لَمْ ile). واو: cemaat.", irab_short: "muzâri meczûm" },
          { arabic: "إِلَى", transliteration: "ilā", root: null, pos: "harf", meaning_tr: "...e doğru", irab_short: "harf-i cer" },
          { arabic: "الطَّيْرِ", transliteration: "aṭ-ṭayri", root: "ط-ي-ر", pos: "ism", meaning_tr: "kuşlara", irab: "{Mecrûr}. İsm-i cins (topluluk).", irab_short: "mecrûr", turkish_bridge: "Tayr (kuş), tayarân (uçuş) bu kökten" },
          { arabic: "فَوْقَهُمْ", transliteration: "fawqahum", root: "ف-و-ق", pos: "ism", meaning_tr: "üstlerinde", irab_short: "zarf, mensûb" },
          { arabic: "صَافَّاتٍ", transliteration: "ṣāffātin", root: "ص-ف-ف", pattern: "فَاعِلَات", pos: "ism", meaning_tr: "kanatlarını açmış halde", irab: "{Hâl}, {mecrûr} (müennes cem). İsm-i fâil: saf tutanlar → kanatları açık.", irab_short: "hâl, mecrûr", turkish_bridge: "Saf, saff bu kökten" },
          { arabic: "وَيَقْبِضْنَ", transliteration: "wa-yaqbiḍna", root: "ق-ب-ض", pos: "fil", meaning_tr: "ve kapatırlar", irab: "Muzâri + نَ (cemaat müennes). Atıf ile hâl. قَبَضَ: tuttu, kapattı.", irab_short: "muzâri (hâl)", turkish_bridge: "Kabz (tutma, sıkma), makbûz bu kökten", balagha_note: "صَافَّاتٍ (ism-i fâil: sürekli açık) + يَقْبِضْنَ (muzâri: anlık kapanış) → sürekli açıklık + anlık çırpınış farkı ism-i fâil vs. fiil ile gösterilmiş." },
          { arabic: "مَا", transliteration: "mā", root: null, pos: "harf", meaning_tr: "...maz (nefy)", irab_short: "nefy" },
          { arabic: "يُمْسِكُهُنَّ", transliteration: "yumsikuhunna", root: "م-س-ك", pos: "fil", meaning_tr: "onları tutar", irab: "IV. bâb: مَسَكَ → أَمْسَكَ (tuttu). هُنَّ: mef'ûl bih (kuşlar, müennes cem).", irab_short: "muzâri, IV. bâb", turkish_bridge: "İmsâk, temessük bu kökten" },
          { arabic: "إِلَّا", transliteration: "illā", root: null, pos: "harf", meaning_tr: "...den başka", irab_short: "istisna" },
          { arabic: "الرَّحْمَـٰنُ", transliteration: "ar-raḥmānu", root: "ر-ح-م", pos: "ism", meaning_tr: "Rahmân", irab: "{Fâil}, {merfû}.", irab_short: "fâil, merfû" },
          { arabic: "إِنَّهُ", transliteration: "innahu", root: null, pos: "harf", meaning_tr: "şüphesiz O", irab_short: "te'kîd" },
          { arabic: "بِكُلِّ", transliteration: "bi-kulli", root: null, pos: "ism", meaning_tr: "her", irab_short: "câr-mecrûr" },
          { arabic: "شَيْءٍ", transliteration: "šayʾin", root: "ش-ي-أ", pos: "ism", meaning_tr: "şeyi", irab_short: "muzâfun ileyh" },
          { arabic: "بَصِيرٌ", transliteration: "baṣīrun", root: "ب-ص-ر", pattern: "فَعِيل", pos: "ism", meaning_tr: "görendir", irab: "{Haber-i inne}, {merfû}.", irab_short: "haber-i inne, merfû" },
        ],
      },
      {
        surah: 67, ayah: 20,
        arabic: "أَمَّنْ هَـٰذَا الَّذِي هُوَ جُندٌ لَّكُمْ يَنصُرُكُم مِّن دُونِ الرَّحْمَـٰنِ إِنِ الْكَافِرُونَ إِلَّا فِي غُرُورٍ",
        translation: "Rahmân'a karşı size yardım edecek ordunuz da kim? İnkârcılar ancak bir aldanış içindedirler.",
        words: [
          { arabic: "أَمَّنْ", transliteration: "amman", root: null, pos: "harf", meaning_tr: "yoksa kim", irab: "أَمْ {atıf} + مَنْ {istifhâm}.", irab_short: "istifhâm" },
          { arabic: "هَـٰذَا", transliteration: "hāḏā", root: null, pos: "harf", meaning_tr: "bu", irab_short: "mübtedâ" },
          { arabic: "الَّذِي", transliteration: "allaḏī", root: null, pos: "harf", meaning_tr: "...ki o", irab_short: "sıfat" },
          { arabic: "هُوَ", transliteration: "huwa", root: null, pos: "harf", meaning_tr: "o", irab_short: "mübtedâ (sıla)" },
          { arabic: "جُندٌ", transliteration: "jundun", root: "ج-ن-د", pos: "ism", meaning_tr: "ordu, asker", irab: "{Haber}, {merfû}.", irab_short: "haber, merfû", turkish_bridge: "Cünd (asker), cünûd (ordular) bu kökten" },
          { arabic: "لَّكُمْ", transliteration: "lakum", root: null, pos: "harf", meaning_tr: "sizin için", irab_short: "câr-mecrûr" },
          { arabic: "يَنصُرُكُم", transliteration: "yanṣurukum", root: "ن-ص-ر", pos: "fil", meaning_tr: "size yardım eder", irab_short: "muzâri (sıfat cümlesi)", turkish_bridge: "Nusret, nasr, Mansûr bu kökten" },
          { arabic: "مِّن", transliteration: "min", root: null, pos: "harf", meaning_tr: "...sız, dışında", irab_short: "harf-i cer" },
          { arabic: "دُونِ", transliteration: "dūni", root: "د-و-ن", pos: "ism", meaning_tr: "dışında, başka", irab_short: "mecrûr" },
          { arabic: "الرَّحْمَـٰنِ", transliteration: "ar-raḥmāni", root: "ر-ح-م", pos: "ism", meaning_tr: "Rahmân'ın", irab_short: "muzâfun ileyh" },
          { arabic: "إِنِ", transliteration: "ini", root: null, pos: "harf", meaning_tr: "değildir (nefy = mâ)", irab_short: "nefy (hasr)" },
          { arabic: "الْكَافِرُونَ", transliteration: "al-kāfirūna", root: "ك-ف-ر", pos: "ism", meaning_tr: "inkârcılar", irab_short: "mübtedâ, merfû" },
          { arabic: "إِلَّا", transliteration: "illā", root: null, pos: "harf", meaning_tr: "ancak", irab_short: "istisna (hasr)" },
          { arabic: "فِي", transliteration: "fī", root: null, pos: "harf", meaning_tr: "...içinde", irab_short: "harf-i cer" },
          { arabic: "غُرُورٍ", transliteration: "ġurūrin", root: "غ-ر-ر", pos: "ism", meaning_tr: "aldanış", irab_short: "mecrûr", turkish_bridge: "Gurur, aldanma, garûr bu kökten" },
        ],
      },
      {
        surah: 67, ayah: 21,
        arabic: "أَمَّنْ هَـٰذَا الَّذِي يَرْزُقُكُمْ إِنْ أَمْسَكَ رِزْقَهُ بَلْ لَّجُّوا فِي عُتُوٍّ وَنُفُورٍ",
        translation: "Rızkını kesse, size rızık verecek olan kim? Hayır, onlar azgınlık ve nefrette direttiler.",
        words: [
          { arabic: "أَمَّنْ", transliteration: "amman", root: null, pos: "harf", meaning_tr: "yoksa kim", irab_short: "istifhâm" },
          { arabic: "هَـٰذَا", transliteration: "hāḏā", root: null, pos: "harf", meaning_tr: "bu", irab_short: "mübtedâ" },
          { arabic: "الَّذِي", transliteration: "allaḏī", root: null, pos: "harf", meaning_tr: "...ki o", irab_short: "sıfat" },
          { arabic: "يَرْزُقُكُمْ", transliteration: "yarzuqukum", root: "ر-ز-ق", pos: "fil", meaning_tr: "size rızık verir", irab_short: "muzâri, merfû", turkish_bridge: "Rızık, rezzâk bu kökten" },
          { arabic: "إِنْ", transliteration: "in", root: null, pos: "harf", meaning_tr: "eğer", irab: "Şart edatı (ihtimaliye).", irab_short: "şart" },
          { arabic: "أَمْسَكَ", transliteration: "amsaka", root: "م-س-ك", pos: "fil", meaning_tr: "kesti, tuttu", irab: "IV. bâb: أَمْسَكَ (tuttu → kesti). Şart fiili (mâzî).", irab_short: "fiil-i mâzî, IV. bâb" },
          { arabic: "رِزْقَهُ", transliteration: "rizqahu", root: "ر-ز-ق", pos: "ism", meaning_tr: "rızkını", irab_short: "mef'ûl bih, mensûb" },
          { arabic: "بَلْ", transliteration: "bal", root: null, pos: "harf", meaning_tr: "hayır, aksine", irab: "İdrâb edatı: konuyu çevirme.", irab_short: "idrâb" },
          { arabic: "لَّجُّوا", transliteration: "lajjū", root: "ل-ج-ج", pos: "fil", meaning_tr: "direttiler, ısrar ettiler", irab: "Fiil-i mâzî, I. bâb (muzâaf).", irab_short: "fiil-i mâzî", turkish_bridge: "Lecâc (diretme) bu kökten" },
          { arabic: "فِي", transliteration: "fī", root: null, pos: "harf", meaning_tr: "...de", irab_short: "harf-i cer" },
          { arabic: "عُتُوٍّ", transliteration: "ʿutuwwin", root: "ع-ت-و", pos: "ism", meaning_tr: "azgınlık, taşkınlık", irab: "{Mecrûr}.", irab_short: "mecrûr", turkish_bridge: "Utüv (azgınlık), âtî bu kökten" },
          { arabic: "وَنُفُورٍ", transliteration: "wa-nufūrin", root: "ن-ف-ر", pos: "ism", meaning_tr: "ve nefret, kaçınma", irab: "Atıf ile عُتُوّ'ye bağlı, {mecrûr}.", irab_short: "mecrûr", turkish_bridge: "Nefret, nüfûr (kaçınma) bu kökten" },
        ],
      },
      {
        surah: 67, ayah: 22,
        arabic: "أَفَمَن يَمْشِي مُكِبًّا عَلَىٰ وَجْهِهِ أَهْدَىٰ أَمَّن يَمْشِي سَوِيًّا عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ",
        translation: "Yüzüstü kapanarak yürüyen mi daha doğru yoldadır, yoksa dosdoğru yolda düzgün yürüyen mi?",
        words: [
          { arabic: "أَفَمَن", transliteration: "a-fa-man", root: null, pos: "harf", meaning_tr: "...ki kimse mi?", irab: "أ {istifhâm} + فَ + مَنْ {ism-i mevsûl/şart}.", irab_short: "istifhâm" },
          { arabic: "يَمْشِي", transliteration: "yamšī", root: "م-ش-ي", pos: "fil", meaning_tr: "yürüyor", irab_short: "muzâri, merfû" },
          { arabic: "مُكِبًّا", transliteration: "mukibban", root: "ك-ب-ب", pattern: "مُفْعِل", pos: "ism", meaning_tr: "yüzüstü kapanarak", irab: "{Hâl}, {mensûb}. IV. bâb ism-i fâil: أَكَبَّ (yüzüstü kapandı).", irab_short: "hâl, mensûb", balagha_note: "Temsîliye (allegorik): kâfir = yüzüstü yürüyen → gerçeği göremeyen. Mümin = dik duran → hidayette." },
          { arabic: "عَلَىٰ", transliteration: "ʿalā", root: null, pos: "harf", meaning_tr: "üzerine", irab_short: "harf-i cer" },
          { arabic: "وَجْهِهِ", transliteration: "wajhihi", root: "و-ج-ه", pos: "ism", meaning_tr: "yüzü üzerine", irab_short: "mecrûr, muzâf" },
          { arabic: "أَهْدَىٰ", transliteration: "ahdā", root: "ه-د-ي", pattern: "أَفْعَل", pos: "ism", meaning_tr: "daha doğru yolda", irab: "{Haber}, ism-i tafdîl.", irab_short: "haber, ism-i tafdîl" },
          { arabic: "أَمَّن", transliteration: "amman", root: null, pos: "harf", meaning_tr: "yoksa ...ki kimse", irab_short: "atıf + ism-i mevsûl" },
          { arabic: "يَمْشِي", transliteration: "yamšī", root: "م-ش-ي", pos: "fil", meaning_tr: "yürüyor", irab_short: "muzâri" },
          { arabic: "سَوِيًّا", transliteration: "sawiyyan", root: "س-و-ي", pos: "ism", meaning_tr: "düzgün, dosdoğru", irab: "{Hâl}, {mensûb}.", irab_short: "hâl, mensûb" },
          { arabic: "عَلَىٰ", transliteration: "ʿalā", root: null, pos: "harf", meaning_tr: "üzerinde", irab_short: "harf-i cer" },
          { arabic: "صِرَاطٍ", transliteration: "ṣirāṭin", root: "ص-ر-ط", pos: "ism", meaning_tr: "yol", irab: "{Mecrûr}.", irab_short: "mecrûr", turkish_bridge: "Sırât (yol) bu kökten" },
          { arabic: "مُّسْتَقِيمٍ", transliteration: "mustaqīmin", root: "ق-و-م", pattern: "مُسْتَفْعِل", pos: "ism", meaning_tr: "dosdoğru", irab: "{Sıfat}, {mecrûr}. X. bâb ism-i fâil: istikâmet üzere.", irab_short: "sıfat, mecrûr", turkish_bridge: "İstikâmet, kıyâm, kavvâm bu kökten" },
        ],
      },
      {
        surah: 67, ayah: 23,
        arabic: "قُلْ هُوَ الَّذِي أَنشَأَكُمْ وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ قَلِيلًا مَّا تَشْكُرُونَ",
        translation: "De ki: Sizi yaratan, size işitme, görme ve kalpler veren O'dur. Ne az şükrediyorsunuz!",
        words: [
          { arabic: "قُلْ", transliteration: "qul", root: "ق-و-ل", pos: "fil", meaning_tr: "de", irab_short: "emir" },
          { arabic: "هُوَ", transliteration: "huwa", root: null, pos: "harf", meaning_tr: "O", irab_short: "mübtedâ" },
          { arabic: "الَّذِي", transliteration: "allaḏī", root: null, pos: "harf", meaning_tr: "o ki", irab_short: "haber" },
          { arabic: "أَنشَأَكُمْ", transliteration: "anšaʾakum", root: "ن-ش-أ", pos: "fil", meaning_tr: "sizi yarattı", irab: "IV. bâb: نَشَأَ (oluştu) → أَنشَأَ (oluşturdu, yarattı).", irab_short: "fiil-i mâzî, IV. bâb", turkish_bridge: "İnşâ (kuruluş), neş'et (oluşma) bu kökten" },
          { arabic: "وَجَعَلَ", transliteration: "wa-jaʿala", root: "ج-ع-ل", pos: "fil", meaning_tr: "ve kıldı", irab_short: "fiil-i mâzî" },
          { arabic: "لَكُمُ", transliteration: "lakumu", root: null, pos: "harf", meaning_tr: "sizin için", irab_short: "câr-mecrûr" },
          { arabic: "السَّمْعَ", transliteration: "as-samʿa", root: "س-م-ع", pos: "ism", meaning_tr: "işitmeyi", irab: "{Mef'ûl bih}, {mensûb}. Tekil (cins ismi): işitme yetisi.", irab_short: "mef'ûl bih, mensûb", balagha_note: "السَّمْع (tekil) ↔ الأَبْصَار (çoğul) ↔ الأَفْئِدَة (çoğul): işitme yetisi tek (herkes aynı şeyi duyar), görme ve kalp çoğul (herkes farklı görür/hisseder)." },
          { arabic: "وَالْأَبْصَارَ", transliteration: "wa-l-abṣāra", root: "ب-ص-ر", pos: "ism", meaning_tr: "ve gözleri", irab: "Atıf. أَبْصَار: بَصَر'in cem-i teksîri.", irab_short: "mef'ûl bih, mensûb" },
          { arabic: "وَالْأَفْئِدَةَ", transliteration: "wa-l-afʾidata", root: "ف-أ-د", pos: "ism", meaning_tr: "ve kalpleri", irab: "Atıf. أَفْئِدَة: فُؤَاد'ın cem-i teksîri.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Fuâd (kalp, gönül), efʾide bu kökten" },
          { arabic: "قَلِيلًا", transliteration: "qalīlan", root: "ق-ل-ل", pos: "ism", meaning_tr: "pek az", irab: "Sıfat veya nâib mef'ûl mutlak → 'az bir şükürle şükrediyorsunuz.'", irab_short: "mef'ûl mutlak/sıfat, mensûb" },
          { arabic: "مَّا", transliteration: "mā", root: null, pos: "harf", meaning_tr: "...ki (zâide/pekiştirme)", irab_short: "zâide" },
          { arabic: "تَشْكُرُونَ", transliteration: "taškurūna", root: "ش-ك-ر", pos: "fil", meaning_tr: "şükrediyorsunuz", irab_short: "muzâri, merfû", turkish_bridge: "Şükür, şükrân bu kökten" },
        ],
      },
      {
        surah: 67, ayah: 24,
        arabic: "قُلْ هُوَ الَّذِي ذَرَأَكُمْ فِي الْأَرْضِ وَإِلَيْهِ تُحْشَرُونَ",
        translation: "De ki: Sizi yeryüzünde çoğaltıp yayan O'dur ve O'nun huzuruna toplanacaksınız.",
        words: [
          { arabic: "قُلْ", transliteration: "qul", root: "ق-و-ل", pos: "fil", meaning_tr: "de", irab_short: "emir" },
          { arabic: "هُوَ", transliteration: "huwa", root: null, pos: "harf", meaning_tr: "O", irab_short: "mübtedâ" },
          { arabic: "الَّذِي", transliteration: "allaḏī", root: null, pos: "harf", meaning_tr: "o ki", irab_short: "haber" },
          { arabic: "ذَرَأَكُمْ", transliteration: "ḏaraʾakum", root: "ذ-ر-أ", pos: "fil", meaning_tr: "sizi çoğaltıp yaydı", irab: "I. bâb. ذَرَأَ: yarattı ve çoğalttı.", irab_short: "fiil-i mâzî, I. bâb", turkish_bridge: "Zer' (ekin), zürriyet (nesil) ile yakın (ama farklı kök)" },
          { arabic: "فِي", transliteration: "fī", root: null, pos: "harf", meaning_tr: "...de", irab_short: "harf-i cer" },
          { arabic: "الْأَرْضِ", transliteration: "al-arḍi", root: "أ-ر-ض", pos: "ism", meaning_tr: "yeryüzünde", irab_short: "mecrûr" },
          { arabic: "وَإِلَيْهِ", transliteration: "wa-ilayhi", root: null, pos: "harf", meaning_tr: "ve O'na", irab: "Haber-i mukaddem.", irab_short: "haber mukaddem" },
          { arabic: "تُحْشَرُونَ", transliteration: "tuḥšarūna", root: "ح-ش-ر", pos: "fil", meaning_tr: "toplanacaksınız", irab: "{Muzâri, mechûl}. حَشَرَ: topladı → mechûl: toplanılır.", irab_short: "muzâri mechûl, merfû", turkish_bridge: "Haşr (toplanma), mahşer bu kökten" },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "İsm-i Fâil vs. Muzâri — Süreklilik Farkı",
        explanation:
          "67:19'da صَافَّاتٍ (ism-i fâil: sürekli açık) ve يَقْبِضْنَ (muzâri: anlık kapama) birlikte gelir. İsm-i fâil kalıcı/doğal durumu, muzâri ise tekrarlanan eylemi ifade eder. Kuşlar çoğunlukla süzülür (صَافَّات) ve arada kanatlarını çırpar (يَقْبِضْنَ).",
        rule: "İsm-i fâil → sabit/kalıcı durum (صَافَّاتٍ: kanatları açık)\nMuzâri fiil → tekrarlanan eylem (يَقْبِضْنَ: kapatırlar)\nBu fark kuş uçuşunun gerçek fiziğini yansıtıyor!",
        examples: ["صَافَّاتٍ (sabit süzülme) + يَقْبِضْنَ (anlık çırpma) — 67:19", "قَائِمًا (ayakta duran, sabit) ≠ يَقُومُ (kalkıyor, tekrar)"],
      },
      {
        title: "السَّمْع Tekil, الأَبْصَار ve الأَفْئِدَة Çoğul",
        explanation:
          "Kur'an'da السَّمْع (işitme) genellikle tekil, الأَبْصَار (gözler) ve الأَفْئِدَة (kalpler) çoğul gelir. Bir açıklama: işitme tek kanallı (herkes aynı sesi duyar), görme ve idrak çok kanallı (herkes farklı görür ve hisseder).",
        rule: "السَّمْع (tekil) + الأَبْصَار (çoğul) + الأَفْئِدَة (çoğul)\nBu kalıp Kur'an'da ~20 yerde tekrarlanır.\nSıralama: sem' → basar → fuâd (algı hiyerarşisi: önce duyarsın, sonra görürsün, sonra anlarsın).",
        examples: ["السَّمْعَ وَالأَبْصَارَ وَالأَفْئِدَةَ — 67:23", "السَّمْعَ وَالأَبْصَارَ وَالأَفْئِدَةَ — Secde 32:9", "السَّمْعَ وَالبَصَرَ وَالفُؤَادَ — İsrâ 17:36 (tekiller)"],
      },
    ],
    exercises: [
      generateRootQuiz(
        "S67-B04-Q01", "صَافَّاتٍ", "ص-ف-ف",
        ["ص-ف-و", "ص-ف-ح", "ص-ف-د"],
        "صَافَّات: ص-ف-ف kökünden. صَفَّ: saf tuttu, sıralandı. Kanatlarını açıp saf tutan kuşlar. Aynı kök: صَف (sıra), مُصَفّ (dizilmiş).",
        ["ص-ف-ف"]
      ),
      generateBabQuiz(
        "S67-B04-Q02", "أَنشَأَكُمْ",
        "IV. bâb (if'âl): نَشَأَ (oluştu) → أَنشَأَ (oluşturdu, yarattı)",
        ["I. bâb: نَشَأَ (oluştu)", "II. bâb: نَشَّأَ (yetiştirdi)", "V. bâb: تَنَشَّأَ (yetişti)"],
        "أَنشَأَ: IV. bâb. نَشَأَ: kendiliğinden oluştu → أَنشَأَ: oluşturdu, meydana getirdi. İnşâ (kuruluş) bu kökten.",
        ["ن-ش-أ"]
      ),
      generateBalaghaQuiz(
        "S67-B04-Q03",
        "67:22'de yüzüstü yürüyen vs. dik yürüyen tasviri hangi belâgat sanatıdır?",
        "Temsîliye (allegori) — kâfir = yüzüstü (kör), mümin = dik (doğru yolda)",
        ["İsti'âre — metafor", "Tıbâk — zıtlık", "Teşbîh — benzetme"],
        "Temsîliye: soyut kavramlar (küfür/îmân) somut imgelerle anlatılır. Yüzüstü yürüyen = doğruyu göremeyen kâfir. Dik yürüyen = sırât-ı müstakîm üzere mümin."
      ),
      generateFillBlank(
        "S67-B04-Q04",
        "قُلْ هُوَ الَّذِي أَنشَأَكُمْ وَجَعَلَ لَكُمُ _____ وَالْأَبْصَارَ وَالْأَفْئِدَةَ",
        "السَّمْعَ", ["الْعَقْلَ", "الْقَلْبَ", "الْحِسَّ"],
        "Üç nimet sırasıyla: ... → gözler → kalpler",
        "السَّمْع (işitme, tekil) + الأَبْصَار (gözler, çoğul) + الأَفْئِدَة (kalpler, çoğul). Algı hiyerarşisi: önce duyarsın → sonra görürsün → sonra kalple anlarsın. Sem' tekil çünkü herkes aynı şeyi duyar.",
        ["س-م-ع"]
      ),
      {
        id: "S67-B04-Q05", type: "single_choice",
        question: "67:19'da صَافَّاتٍ (ism-i fâil) ve يَقْبِضْنَ (muzâri) arasındaki dilbilimsel fark nedir?",
        options: [
          "İsm-i fâil = kalıcı durum (süzülme), muzâri = tekrarlanan eylem (çırpma) → kuşların gerçek uçuş fiziği",
          "İkisi eş anlamlı, sadece üslup çeşitliliği",
          "İsm-i fâil geçmiş, muzâri şimdiki zamanı ifade eder",
          "Birincisi erkek, ikincisi dişi kuşları anlatır",
        ],
        correct: 0,
        explanation: "İsm-i fâil (صَافَّات) sabit/doğal durumu gösterir: kuşlar çoğunlukla kanatları açık süzülür. Muzâri (يَقْبِضْنَ) tekrarlanan eylemi: arada kanatlarını çırpar. Bu Kur'an'ın bilimsel duyarlılığını da gösterir.",
        relatedRoots: ["ص-ف-ف", "ق-ب-ض"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 5 — MÜLK 67:25-30 — Kıyamet Sorusu, Su, Tevekkül
  // ═══════════════════════════════════════════════════════════
  {
    id: "S67-B05-mulk",
    title: "Mülk (25-30) — Vaad, Su ve Son",
    titleAr: "سُورَةُ المُلْك ٢٥-٣٠",
    stage: 2,
    level: 8,
    surah: 67,
    description:
      "Kıyametin zamanı sorusu, ölüm gerçeği, su nimeti, tevekkül. مَتَى هَذَا الوَعْدُ, مَاؤُكُمْ غَوْرًا, مَاءٍ مَعِينٍ. Surenin kapanışı: somut tehdît + umut.",
    verses: [
      {
        surah: 67, ayah: 25,
        arabic: "وَيَقُولُونَ مَتَىٰ هَـٰذَا الْوَعْدُ إِن كُنتُمْ صَادِقِينَ",
        translation: "Eğer doğru söylüyorsanız, bu vaad (kıyamet) ne zaman? diyorlar.",
        words: [
          { arabic: "وَيَقُولُونَ", transliteration: "wa-yaqūlūna", root: "ق-و-ل", pos: "fil", meaning_tr: "ve diyorlar", irab_short: "muzâri, merfû" },
          { arabic: "مَتَىٰ", transliteration: "matā", root: null, pos: "harf", meaning_tr: "ne zaman", irab: "İstifhâm-ı zamânî.", irab_short: "istifhâm" },
          { arabic: "هَـٰذَا", transliteration: "hāḏā", root: null, pos: "harf", meaning_tr: "bu", irab_short: "mübtedâ" },
          { arabic: "الْوَعْدُ", transliteration: "al-waʿdu", root: "و-ع-د", pos: "ism", meaning_tr: "vaad, söz", irab: "{Haber} veya bedel, {merfû}.", irab_short: "haber, merfû", turkish_bridge: "Va'd (söz), mev'id (buluşma zamanı) bu kökten" },
          { arabic: "إِن", transliteration: "in", root: null, pos: "harf", meaning_tr: "eğer", irab_short: "şart" },
          { arabic: "كُنتُمْ", transliteration: "kuntum", root: "ك-و-ن", pos: "fil", meaning_tr: "iseniz", irab_short: "fiil-i mâzî (şart)" },
          { arabic: "صَادِقِينَ", transliteration: "ṣādiqīna", root: "ص-د-ق", pattern: "فَاعِل", pos: "ism", meaning_tr: "doğru söyleyenler", irab: "{Haber-i kâne}, {mensûb} (yâ cem).", irab_short: "haber-i kâne, mensûb", turkish_bridge: "Sıdk (doğruluk), sâdık bu kökten" },
        ],
      },
      {
        surah: 67, ayah: 26,
        arabic: "قُلْ إِنَّمَا الْعِلْمُ عِندَ اللَّهِ وَإِنَّمَا أَنَا نَذِيرٌ مُّبِينٌ",
        translation: "De ki: Bilgi ancak Allah katındadır. Ben ancak açık bir uyarıcıyım.",
        words: [
          { arabic: "قُلْ", transliteration: "qul", root: "ق-و-ل", pos: "fil", meaning_tr: "de", irab_short: "emir" },
          { arabic: "إِنَّمَا", transliteration: "innamā", root: null, pos: "harf", meaning_tr: "ancak, sadece", irab: "Hasr edatı: 'bilgi yalnızca Allah katında.'", irab_short: "hasr" },
          { arabic: "الْعِلْمُ", transliteration: "al-ʿilmu", root: "ع-ل-م", pos: "ism", meaning_tr: "bilgi", irab: "{Mübtedâ}, {merfû}.", irab_short: "mübtedâ, merfû" },
          { arabic: "عِندَ", transliteration: "ʿinda", root: null, pos: "ism", meaning_tr: "katında", irab: "Zarf-ı mekân, muzâf.", irab_short: "zarf, haber" },
          { arabic: "اللَّهِ", transliteration: "allāhi", root: "أ-ل-ه", pos: "ism", meaning_tr: "Allah'ın", irab_short: "muzâfun ileyh, mecrûr" },
          { arabic: "وَإِنَّمَا", transliteration: "wa-innamā", root: null, pos: "harf", meaning_tr: "ve ancak", irab_short: "hasr" },
          { arabic: "أَنَا", transliteration: "anā", root: null, pos: "harf", meaning_tr: "ben", irab_short: "mübtedâ" },
          { arabic: "نَذِيرٌ", transliteration: "naḏīrun", root: "ن-ذ-ر", pos: "ism", meaning_tr: "uyarıcı", irab: "{Haber}, {merfû}.", irab_short: "haber, merfû" },
          { arabic: "مُّبِينٌ", transliteration: "mubīnun", root: "ب-ي-ن", pattern: "مُفْعِل", pos: "ism", meaning_tr: "açık, belirgin", irab: "{Sıfat}, {merfû}. IV. bâb ism-i fâil: أَبَانَ (açıklığa kavuşturdu).", irab_short: "sıfat, merfû", turkish_bridge: "Beyân, mübîn, tebyîn bu kökten" },
        ],
      },
      {
        surah: 67, ayah: 27,
        arabic: "فَلَمَّا رَأَوْهُ زُلْفَةً سِيئَتْ وُجُوهُ الَّذِينَ كَفَرُوا وَقِيلَ هَـٰذَا الَّذِي كُنتُم بِهِ تَدَّعُونَ",
        translation: "Onu (azabı) yakınlarında gördüklerinde inkârcıların yüzleri kötüleşir ve 'İşte isteyip durduğunuz şey!' denir.",
        words: [
          { arabic: "فَلَمَّا", transliteration: "fa-lammā", root: null, pos: "harf", meaning_tr: "...dığı zaman", irab: "Zarf-ı zaman (şart).", irab_short: "zarf-ı şart" },
          { arabic: "رَأَوْهُ", transliteration: "raʾawhu", root: "ر-أ-ي", pos: "fil", meaning_tr: "onu gördüler", irab_short: "fiil-i mâzî" },
          { arabic: "زُلْفَةً", transliteration: "zulfatan", root: "ز-ل-ف", pos: "ism", meaning_tr: "yakınlarında, yakın", irab: "{Hâl} veya zarf, {mensûb}.", irab_short: "hâl/zarf, mensûb" },
          { arabic: "سِيئَتْ", transliteration: "sīʾat", root: "س-و-أ", pos: "fil", meaning_tr: "kötüleşti, çirkinleşti", irab: "{Fiil-i mâzî, mechûl}. سَاءَ → سِيءَ: kötüleştirildi.", irab_short: "fiil mechûl" },
          { arabic: "وُجُوهُ", transliteration: "wujūhu", root: "و-ج-ه", pos: "ism", meaning_tr: "yüzleri", irab: "{Nâib-i fâil}, {merfû}, muzâf.", irab_short: "nâib-i fâil, merfû" },
          { arabic: "الَّذِينَ", transliteration: "allaḏīna", root: null, pos: "harf", meaning_tr: "o kimselerin ki", irab_short: "muzâfun ileyh" },
          { arabic: "كَفَرُوا", transliteration: "kafarū", root: "ك-ف-ر", pos: "fil", meaning_tr: "inkâr ettiler", irab_short: "fiil-i mâzî" },
          { arabic: "وَقِيلَ", transliteration: "wa-qīla", root: "ق-و-ل", pos: "fil", meaning_tr: "ve denildi", irab: "Fiil-i mâzî, mechûl.", irab_short: "fiil mechûl" },
          { arabic: "هَـٰذَا", transliteration: "hāḏā", root: null, pos: "harf", meaning_tr: "işte bu", irab_short: "mübtedâ" },
          { arabic: "الَّذِي", transliteration: "allaḏī", root: null, pos: "harf", meaning_tr: "...ki", irab_short: "haber" },
          { arabic: "كُنتُم", transliteration: "kuntum", root: "ك-و-ن", pos: "fil", meaning_tr: "idiniz", irab_short: "fiil-i mâzî (nâkıs)" },
          { arabic: "بِهِ", transliteration: "bihi", root: null, pos: "harf", meaning_tr: "onu", irab_short: "câr-mecrûr" },
          { arabic: "تَدَّعُونَ", transliteration: "taddaʿūna", root: "د-ع-و", pattern: "تَفْتَعِلُونَ", pos: "fil", meaning_tr: "isteyip duruyordunuz", irab: "VIII. bâb: دَعَا → اِدَّعَى (iddia etti, istedi). هَل-i kâne.", irab_short: "muzâri, VIII. bâb", turkish_bridge: "Davet, duâ, iddiâ bu kökten" },
        ],
      },
      {
        surah: 67, ayah: 28,
        arabic: "قُلْ أَرَأَيْتُمْ إِنْ أَهْلَكَنِيَ اللَّهُ وَمَن مَّعِيَ أَوْ رَحِمَنَا فَمَن يُجِيرُ الْكَافِرِينَ مِنْ عَذَابٍ أَلِيمٍ",
        translation: "De ki: Söyleyin bana, Allah beni ve benimle birlikte olanları öldürse de, ya da bize merhamet etse de, kâfirleri acı azaptan kim kurtaracak?",
        words: [
          { arabic: "قُلْ", transliteration: "qul", root: "ق-و-ل", pos: "fil", meaning_tr: "de", irab_short: "emir" },
          { arabic: "أَرَأَيْتُمْ", transliteration: "a-raʾaytum", root: "ر-أ-ي", pos: "fil", meaning_tr: "söyleyin bana, gördünüz mü", irab: "أ {istifhâm} + رَأَيْتُمْ (fiil-i mâzî). 'Ne dersiniz?' anlamında.", irab_short: "istifhâm + fiil" },
          { arabic: "إِنْ", transliteration: "in", root: null, pos: "harf", meaning_tr: "eğer", irab_short: "şart" },
          { arabic: "أَهْلَكَنِيَ", transliteration: "ahlakaniya", root: "ه-ل-ك", pos: "fil", meaning_tr: "beni helâk ederse", irab: "IV. bâb: هَلَكَ (helâk oldu) → أَهْلَكَ (helâk etti). نِيَ: mef'ûl bih.", irab_short: "fiil-i mâzî, IV. bâb", turkish_bridge: "Helâk, ihlâk bu kökten" },
          { arabic: "اللَّهُ", transliteration: "allāhu", root: "أ-ل-ه", pos: "ism", meaning_tr: "Allah", irab_short: "fâil, merfû" },
          { arabic: "وَمَن", transliteration: "wa-man", root: null, pos: "harf", meaning_tr: "ve o kimseleri ki", irab_short: "atıf + ism-i mevsûl" },
          { arabic: "مَّعِيَ", transliteration: "maʿiya", root: null, pos: "ism", meaning_tr: "benimle beraber", irab_short: "zarf" },
          { arabic: "أَوْ", transliteration: "aw", root: null, pos: "harf", meaning_tr: "veya", irab_short: "atıf" },
          { arabic: "رَحِمَنَا", transliteration: "raḥimanā", root: "ر-ح-م", pos: "fil", meaning_tr: "bize merhamet etse", irab_short: "fiil-i mâzî" },
          { arabic: "فَمَن", transliteration: "fa-man", root: null, pos: "harf", meaning_tr: "kim?", irab: "فَ {cevâb-ı şart} + مَنْ {istifhâm}.", irab_short: "istifhâm" },
          { arabic: "يُجِيرُ", transliteration: "yujīru", root: "ج-و-ر", pos: "fil", meaning_tr: "kurtarır, sığındırır", irab: "IV. bâb: أَجَارَ (sığınma verdi). Muzâri.", irab_short: "muzâri, IV. bâb", turkish_bridge: "Civâr (komşuluk), isticâre (sığınma) bu kökten" },
          { arabic: "الْكَافِرِينَ", transliteration: "al-kāfirīna", root: "ك-ف-ر", pos: "ism", meaning_tr: "kâfirleri", irab: "{Mef'ûl bih}, {mensûb} (yâ cem).", irab_short: "mef'ûl bih, mensûb" },
          { arabic: "مِنْ", transliteration: "min", root: null, pos: "harf", meaning_tr: "...dan", irab_short: "harf-i cer" },
          { arabic: "عَذَابٍ", transliteration: "ʿaḏābin", root: "ع-ذ-ب", pos: "ism", meaning_tr: "azaptan", irab_short: "mecrûr" },
          { arabic: "أَلِيمٍ", transliteration: "alīmin", root: "أ-ل-م", pattern: "فَعِيل", pos: "ism", meaning_tr: "acı verici", irab: "{Sıfat}, {mecrûr}.", irab_short: "sıfat, mecrûr" },
        ],
      },
      {
        surah: 67, ayah: 29,
        arabic: "قُلْ هُوَ الرَّحْمَـٰنُ آمَنَّا بِهِ وَعَلَيْهِ تَوَكَّلْنَا فَسَتَعْلَمُونَ مَنْ هُوَ فِي ضَلَالٍ مُّبِينٍ",
        translation: "De ki: O, Rahmân'dır. O'na inandık, O'na tevekkül ettik. Kimin açık bir sapıklıkta olduğunu yakında bileceksiniz.",
        words: [
          { arabic: "قُلْ", transliteration: "qul", root: "ق-و-ل", pos: "fil", meaning_tr: "de", irab_short: "emir" },
          { arabic: "هُوَ", transliteration: "huwa", root: null, pos: "harf", meaning_tr: "O", irab_short: "mübtedâ" },
          { arabic: "الرَّحْمَـٰنُ", transliteration: "ar-raḥmānu", root: "ر-ح-م", pos: "ism", meaning_tr: "Rahmân", irab: "{Haber}, {merfû}.", irab_short: "haber, merfû" },
          { arabic: "آمَنَّا", transliteration: "āmannā", root: "أ-م-ن", pos: "fil", meaning_tr: "inandık", irab: "IV. bâb: أَمِنَ → آمَنَ (îmân etti).", irab_short: "fiil-i mâzî, IV. bâb", turkish_bridge: "Îmân, emân, emin bu kökten" },
          { arabic: "بِهِ", transliteration: "bihi", root: null, pos: "harf", meaning_tr: "O'na", irab_short: "câr-mecrûr" },
          { arabic: "وَعَلَيْهِ", transliteration: "wa-ʿalayhi", root: null, pos: "harf", meaning_tr: "ve O'na", irab_short: "câr-mecrûr" },
          { arabic: "تَوَكَّلْنَا", transliteration: "tawakkalnā", root: "و-ك-ل", pattern: "تَفَعَّلَ", pos: "fil", meaning_tr: "tevekkül ettik", irab: "V. bâb: وَكَلَ → تَوَكَّلَ (güvenip dayandı).", irab_short: "fiil-i mâzî, V. bâb", turkish_bridge: "Tevekkül, vekîl, tevkîl bu kökten" },
          { arabic: "فَسَتَعْلَمُونَ", transliteration: "fa-sataʿlamūna", root: "ع-ل-م", pos: "fil", meaning_tr: "yakında bileceksiniz", irab: "سَ {istikbâl} + muzâri: tehdîd.", irab_short: "muzâri (tehdîd)" },
          { arabic: "مَنْ", transliteration: "man", root: null, pos: "harf", meaning_tr: "kim", irab_short: "istifhâm" },
          { arabic: "هُوَ", transliteration: "huwa", root: null, pos: "harf", meaning_tr: "o", irab_short: "mübtedâ" },
          { arabic: "فِي", transliteration: "fī", root: null, pos: "harf", meaning_tr: "...de", irab_short: "harf-i cer" },
          { arabic: "ضَلَالٍ", transliteration: "ḍalālin", root: "ض-ل-ل", pos: "ism", meaning_tr: "sapıklık", irab_short: "mecrûr" },
          { arabic: "مُّبِينٍ", transliteration: "mubīnin", root: "ب-ي-ن", pos: "ism", meaning_tr: "açık", irab_short: "sıfat, mecrûr" },
        ],
      },
      {
        surah: 67, ayah: 30,
        arabic: "قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا فَمَن يَأْتِيكُم بِمَاءٍ مَّعِينٍ",
        translation: "De ki: Söyleyin bana, suyunuz yerin dibine çekilse, size kim akarsu getirebilir?",
        words: [
          { arabic: "قُلْ", transliteration: "qul", root: "ق-و-ل", pos: "fil", meaning_tr: "de", irab_short: "emir" },
          { arabic: "أَرَأَيْتُمْ", transliteration: "a-raʾaytum", root: "ر-أ-ي", pos: "fil", meaning_tr: "söyleyin bana", irab_short: "istifhâm + fiil" },
          { arabic: "إِنْ", transliteration: "in", root: null, pos: "harf", meaning_tr: "eğer", irab_short: "şart" },
          { arabic: "أَصْبَحَ", transliteration: "aṣbaḥa", root: "ص-ب-ح", pos: "fil", meaning_tr: "olsa, hale gelse", irab: "Nâkıs fiil (كَانَ grubu): ism + haber alır.", irab_short: "fiil-i mâzî (nâkıs)", turkish_bridge: "Sabah, misbâh, isbâh bu kökten" },
          { arabic: "مَاؤُكُمْ", transliteration: "māʾukum", root: "م-و-ه", pos: "ism", meaning_tr: "suyunuz", irab: "{İsm-i أَصْبَحَ}, {merfû}, muzâf + كُمْ.", irab_short: "ism-i asbaha, merfû" },
          { arabic: "غَوْرًا", transliteration: "ġawran", root: "غ-و-ر", pos: "ism", meaning_tr: "yerin dibine çekilmiş", irab: "{Haber-i أَصْبَحَ}, {mensûb}. غَوْر: masdar, sıfat yerine — mübalağa: su kendisi 'batış' olmuş.", irab_short: "haber-i asbaha, mensûb", turkish_bridge: "Gawr (çukur, derinlik), mağara bu yakın kök", balagha_note: "Masdarı sıfat yerine kullanma (mübalağa): مَاؤُكُمْ غَوْرًا = 'suyunuz batık' değil 'suyunuz batışın ta kendisi' → suyu geri getirmenin imkânsızlığını vurgular." },
          { arabic: "فَمَن", transliteration: "fa-man", root: null, pos: "harf", meaning_tr: "kim?", irab_short: "istifhâm" },
          { arabic: "يَأْتِيكُم", transliteration: "yaʾtīkum", root: "أ-ت-ي", pos: "fil", meaning_tr: "size getirebilir", irab_short: "muzâri, merfû" },
          { arabic: "بِمَاءٍ", transliteration: "bi-māʾin", root: "م-و-ه", pos: "ism", meaning_tr: "su ile", irab_short: "câr-mecrûr" },
          { arabic: "مَّعِينٍ", transliteration: "maʿīnin", root: "ع-ي-ن", pattern: "مَفْعِيل/فَعِيل", pos: "ism", meaning_tr: "akıp duran, pınar gibi", irab: "{Sıfat}, {mecrûr}. عَيْن (göz, pınar) kökünden veya مَعَنَ (aktı) kökünden.", irab_short: "sıfat, mecrûr", turkish_bridge: "Ayn (pınar), maîn (akarsu) bu kökten", balagha_note: "Surenin son kelimesi: مَعِين (akarsu). Sure hâkimiyet (المُلْك) ile başlar, en temel nimet (su) ile biter → hâkimiyetin somut kanıtı." },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "إِنَّمَا — Hasr (Sınırlama) Edatı",
        explanation:
          "إِنَّمَا = إِنَّ + مَا (kâffe): 'ancak, sadece, yalnızca.' Mübtedâyı haberle sınırlar. 67:26: إِنَّمَا العِلْمُ عِنْدَ اللَّهِ = 'bilgi yalnızca Allah katındadır.' Başka kimse kıyametin zamanını bilemez.",
        rule: "إِنَّمَا + mübtedâ + haber → hasr\nFarklı hasr yolları:\n(1) إِنَّمَا (en yaygın)\n(2) مَا ... إِلَّا (nefy + istisna)\n(3) تقديم الخبر (haberi öne alma)",
        examples: ["إِنَّمَا العِلْمُ عِنْدَ اللَّهِ — bilgi ancak Allah'ta (67:26)", "إِنَّمَا يَخْشَى اللَّهَ العُلَمَاءُ — ancak âlimler korkar (35:28)", "إِنَّمَا أَنَا بَشَرٌ — ben ancak bir insanım (18:110)"],
      },
      {
        title: "Masdarın Sıfat Yerine Kullanımı — Mübalağa",
        explanation:
          "67:30: مَاؤُكُمْ غَوْرًا → su 'çekilmiş' (sıfat) değil, 'çekilişin ta kendisi' (masdar). Masdarı sıfat yerine koyma mübalağa ifade eder: nesne, o fiilin özdeşi haline gelmiş. رَجُلٌ عَدْلٌ = 'âdil adam' değil 'adaletin ta kendisi adam.'",
        rule: "Masdar → sıfat yerine: mübalağa\nمَاؤُكُمْ غَوْرًا = suyunuz çekilişin kendisi (67:30)\nرَجُلٌ عَدْلٌ = adaletin ta kendisi bir adam\nزَيْدٌ كَرَمٌ = cömertliğin ta kendisi Zeyd",
        examples: ["مَاؤُكُمْ غَوْرًا — su = çekilişin kendisi (67:30)", "رَجُلٌ عَدْلٌ — adam = adaletin kendisi", "هُمْ دَرَجَاتٌ — onlar = mertebeler (3:163)"],
      },
    ],
    exercises: [
      generateBabQuiz(
        "S67-B05-Q01", "تَوَكَّلْنَا",
        "V. bâb (tefa''ul): وَكَلَ → تَوَكَّلَ (güvenip dayandı)",
        ["I. bâb: وَكَلَ (vekâlet verdi)", "II. bâb: وَكَّلَ (vekil tayin etti)", "VIII. bâb: اتَّكَلَ (güvendi)"],
        "تَوَكَّلَ: V. bâb (تَفَعَّلَ). و-ك-ل kökünden. I. = vekâlet verdi, II. = vekil tayin etti, V. = kendini emanet etti → tevekkül.",
        ["و-ك-ل"]
      ),
      generateRootQuiz(
        "S67-B05-Q02", "مَعِينٍ", "ع-ي-ن",
        ["م-ع-ن", "ع-ن-ي", "م-ي-ن"],
        "مَعِين: ع-ي-ن kökünden (göz, pınar, kaynak). Akarsu, gözle görülen su. Bir görüşe göre مَعَنَ (aktı) kökünden. Her iki durumda da 'akarsu' anlamında.",
        ["ع-ي-ن"]
      ),
      generateWaznQuiz(
        "S67-B05-Q03", "نَذِيرٌ",
        "فَعِيل (mübalağa / sıfat-ı müşebbehe) — çok uyaran",
        ["فَاعِل (ism-i fâil)", "مُفْعِل (IV. bâb ism-i fâil)", "فَعُول (mübalağa)"],
        "نَذِير: فَعِيل kalıbı, ن-ذ-ر kökünden. فَعِيل hem sıfat-ı müşebbehe (süreklilik) hem mübalağa anlamı verebilir. 'Sürekli ve yoğun uyaran.' Aynı kalıp: بَصِير, عَلِيم, قَدِير.",
        ["ن-ذ-ر"]
      ),
      generateFillBlank(
        "S67-B05-Q04",
        "قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ _____ فَمَن يَأْتِيكُم بِمَاءٍ مَّعِينٍ",
        "غَوْرًا", ["عَذْبًا", "مُرًّا", "كَثِيرًا"],
        "Su yerin dibine ... olursa",
        "غَوْرًا: masdar (çekilme), sıfat yerine mübalağa olarak kullanılmış. Su sadece 'çekilmiş' değil, 'çekilmenin ta kendisi' → geri getirmenin imkânsızlığı.",
        ["غ-و-ر"]
      ),
      {
        id: "S67-B05-Q05", type: "single_choice",
        question: "Surenin başlangıcı (المُلْك) ile sonu (مَاءٍ مَّعِينٍ) arasındaki tematik bağlantı nedir?",
        options: [
          "Soyut hâkimiyetten somut nimete (su): Allah'ın mülkü günlük hayata kadar uzanır",
          "İlk ayet cennet, son ayet cehennem anlatır",
          "İlk ayet ölüm, son ayet hayat anlatır",
          "Tematik bağlantı yoktur, ayrı konulardır",
        ],
        correct: 0,
        explanation: "Sure المُلْك (soyut hâkimiyet) ile açılır, مَاءٍ مَعِينٍ (somut su) ile kapanır. Mesaj: Allah'ın mülkü sadece kozmik değil, her gün içtiğiniz suya kadar her şeyi kapsar. Soyuttan somuta güçlü bir geçiş.",
        relatedRoots: ["م-ل-ك", "ع-ي-ن"],
      },
      {
        id: "S67-B05-Q06", type: "single_choice",
        question: "67:30'da مَاؤُكُمْ غَوْرًا ifadesinde غَوْرًا neden masdar olarak gelmiştir?",
        options: [
          "Mübalağa: su 'batmış' değil 'batışın ta kendisi' → geri gelme imkânsızlığı",
          "Sıfat yetersiz kaldığı için masdar kullanılmış",
          "Arapça'da su ile sadece masdar kullanılır",
          "Ölçü (vezin) gereği",
        ],
        correct: 0,
        explanation: "Masdarın sıfat yerine kullanımı Arapça'da mübalağa tekniğidir. مَاؤُكُمْ غَوْرًا = suyunuz artık çekilişin ta kendisidir → asla geri gelmeyecek gibi. Aynı teknik: رَجُلٌ عَدْلٌ (adaletli değil, adaletin kendisi).",
        relatedRoots: ["غ-و-ر"],
      },
    ],
  },
];

export default mulkLessons;
