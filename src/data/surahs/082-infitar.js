// ═══════════════════════════════════════════════════════════
// İNFİTÂR SURESİ (82) — Surah-Format Ders Dosyası
// v0.23.0: 3 bölüm (S82-B01 … S82-B03), 19 ayet tam kapsam
// ═══════════════════════════════════════════════════════════
//
// Cüz 30 (Amme), Mekkî, 19 ayet
// Tematik: Kozmik yıkılış (4× إِذَا), insana hitap,
//          Kirâmen Kâtibîn, Ebrâr/Füccar, Yevmü'd-Dîn
//
// Yapısal akış:
//   B01 (1-5):   4× إِذَا şart zinciri + cevâb-ı şart
//   B02 (6-12):  Nidâ + yaratılış + melekler
//   B03 (13-19): Ebrâr vs Füccar + مَا أَدْرَاكَ kapanışı
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

const infitarLessons = [
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 1 — İNFİTÂR 82:1-5 — Kozmik Yıkılış ve Cevâb-ı Şart
  // ═══════════════════════════════════════════════════════════
  {
    id: "S82-B01-infitar",
    title: "İnfitâr (1-5) — Kozmik Yıkılış Zinciri",
    titleAr: "سُورَةُ الاِنْفِطَارِ ١-٥",
    stage: 2,
    level: 8,
    surah: 82,
    description:
      "Dört إِذَا şart zinciri → kozmik yıkılış: gök yarılır, yıldızlar saçılır, denizler patlatılır, kabirler deşilir. Cevâb-ı şart: عَلِمَتْ نَفْسٌ. VII. bâb (اِنْفَعَلَ), meçhul fiil, cem-i teksîr.",
    verses: [
      {
        surah: 82, ayah: 1,
        arabic: "إِذَا ٱلسَّمَاءُ ٱنفَطَرَتْ",
        translation: "Gök yarıldığı zaman",
        words: [
          { arabic: "إِذَا", transliteration: "iḏā", root: null, pattern: null, pos: "harf", meaning_tr: "… olduğu zaman", irab: "{Şart zarfı} (zaman zarfı). Gelecekte kesin olacak olay için.", irab_short: "şart zarfı", turkish_bridge: null, balagha_note: "Dört إِذَا tekrarı → kozmik olaylar zinciri. Her biri bir yıkılışı anlatır. Dramatik birikme etkisi (terâkum)." },
          { arabic: "ٱلسَّمَاءُ", transliteration: "as-samāʾu", root: "س-م-و", pattern: null, pos: "ism", meaning_tr: "gök", irab: "{Fâil} li-fi'lin mahzûf yufessiruhu mâ ba'dehu (iştigâl üslûbu), {merfû} (damme ile). Takdîr: إذا انفطرتِ السماءُ انفطرتْ. Görünen اِنْفَطَرَتْ cümlesi tefsîriyedir, i'rabdan mahalli yoktur.", irab_short: "fâil (iştigâl), merfû", turkish_bridge: "Semâ (gök) bu kökten", balagha_note: null },
          { arabic: "ٱنفَطَرَتْ", transliteration: "infaṭarat", root: "ف-ط-ر", pattern: "اِنْفَعَلَ", pos: "fil", meaning_tr: "yarıldı", irab: "{Fiil-i mâzî}, VII. bâb (اِنْفِعَال — edilgen/dönüşlü). تْ: te-i te'nîs (السَّمَاء müennestir).", irab_short: "fiil, mâzî, VII. bâb", turkish_bridge: "Fıtrat, fıtrî (yaratılış) bu kökten. Aslı: yarmak, ilk açmak.", balagha_note: "VII. bâb kendi kendine oluş → göğün 'kendi kendine' yarılması, dışarıdan bir güç değil." },
        ],
      },
      {
        surah: 82, ayah: 2,
        arabic: "وَإِذَا ٱلْكَوَاكِبُ ٱنتَثَرَتْ",
        translation: "Yıldızlar dağılıp döküldüğü zaman",
        words: [
          { arabic: "وَإِذَا", transliteration: "wa iḏā", root: null, pattern: null, pos: "harf", meaning_tr: "ve … olduğu zaman", irab: "وَ {harf-i atıf} + إِذَا şart zarfı (2. şart).", irab_short: "atıf + şart zarfı", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلْكَوَاكِبُ", transliteration: "al-kawākibu", root: "ك-و-ك-ب", pattern: null, pos: "ism", meaning_tr: "yıldızlar", irab: "{Fâil} li-fi'lin mahzûf (iştigâl), {merfû}. كَوَاكِب: كَوْكَب'in cem-i teksîri. Görünen اِنْتَثَرَتْ tefsîriye.", irab_short: "fâil (iştigâl), merfû", turkish_bridge: "Kevkeb (yıldız), modern Türkçe'de nadir", balagha_note: null },
          { arabic: "ٱنتَثَرَتْ", transliteration: "intaṯarat", root: "ن-ث-ر", pattern: "اِنْفَعَلَ", pos: "fil", meaning_tr: "dağılıp saçıldı", irab: "{Fiil-i mâzî}, VIII. bâb (اِفْتَعَلَ). تْ: te-i te'nîs.", irab_short: "fiil, mâzî, VIII. bâb", turkish_bridge: "Nesir (saçma, dağıtma) bu kökten", balagha_note: "Yıldızların 'saçılması' → düzenin bozulması, kozmik kaosun başlangıcı." },
        ],
      },
      {
        surah: 82, ayah: 3,
        arabic: "وَإِذَا ٱلْبِحَارُ فُجِّرَتْ",
        translation: "Denizler birbirine akıtıldığı zaman",
        words: [
          { arabic: "وَإِذَا", transliteration: "wa iḏā", root: null, pattern: null, pos: "harf", meaning_tr: "ve … olduğu zaman", irab: "3. şart cümlesi.", irab_short: "atıf + şart zarfı", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلْبِحَارُ", transliteration: "al-biḥāru", root: "ب-ح-ر", pattern: "فِعَال", pos: "ism", meaning_tr: "denizler", irab: "{Nâib-i fâil} li-fi'lin mahzûf (iştigâl), {merfû}. بِحَار: بَحْر'in cem-i teksîri. Görünen فُجِّرَتْ tefsîriye.", irab_short: "nâib-i fâil (iştigâl), merfû", turkish_bridge: "Bahir, bahriye bu kökten", balagha_note: null },
          { arabic: "فُجِّرَتْ", transliteration: "fujjirat", root: "ف-ج-ر", pattern: null, pos: "fil", meaning_tr: "patlatıldı, akıtıldı", irab: "{Fiil-i mâzî meçhul}, II. bâb (فُعِّلَ). Meçhul yapı: kimin yaptığı belirtilmiyor.", irab_short: "fiil, meçhul, II. bâb", turkish_bridge: "Fecr (tan), inficâr (patlama) bu kökten", balagha_note: "Meçhul fiil → eylemin kaynağı gizli (Allah'ın kudreti). Denizlerin patlatılması → tüm sınırlar kalkıyor." },
        ],
      },
      {
        surah: 82, ayah: 4,
        arabic: "وَإِذَا ٱلْقُبُورُ بُعْثِرَتْ",
        translation: "Kabirler deşilip açıldığı zaman",
        words: [
          { arabic: "وَإِذَا", transliteration: "wa iḏā", root: null, pattern: null, pos: "harf", meaning_tr: "ve … olduğu zaman", irab: "4. (son) şart cümlesi.", irab_short: "atıf + şart zarfı", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلْقُبُورُ", transliteration: "al-qubūru", root: "ق-ب-ر", pattern: "فُعُول", pos: "ism", meaning_tr: "kabirler", irab: "{Nâib-i fâil} li-fi'lin mahzûf (iştigâl), {merfû}. قُبُور: قَبْر'in cem-i teksîri. Görünen بُعْثِرَتْ tefsîriye.", irab_short: "nâib-i fâil (iştigâl), merfû", turkish_bridge: "Kabir, makbere (mezarlık) bu kökten", balagha_note: null },
          { arabic: "بُعْثِرَتْ", transliteration: "buʿṯirat", root: "ب-ع-ث-ر", pattern: null, pos: "fil", meaning_tr: "deşildi, altüst edildi", irab: "{Fiil-i mâzî meçhul}, rubâî (4 harfli kök). بَعْثَرَ = saçmak, dağıtmak, deşmek.", irab_short: "fiil, meçhul, rubâî", turkish_bridge: "Ba's (diriltme) → بَعْثَرَ bunun yoğunlaştırılmış hali", balagha_note: "Kozmik yıkılış dizisi gökte başlıyor (سَمَاء → كَوَاكِب), yere iniyor (بِحَار → قُبُور). Büyükten küçüğe, genel'den özel'e." },
        ],
      },
      {
        surah: 82, ayah: 5,
        arabic: "عَلِمَتْ نَفْسٌ مَّا قَدَّمَتْ وَأَخَّرَتْ",
        translation: "Her can ne yapıp ne bıraktığını bilecektir",
        words: [
          { arabic: "عَلِمَتْ", transliteration: "ʿalimat", root: "ع-ل-م", pattern: null, pos: "fil", meaning_tr: "bildi (bilecek)", irab: "{Fiil-i mâzî} (mânâ olarak gelecek — şart cevâbı). {Fâil}: نَفْسٌ. تْ: te-i te'nîs.", irab_short: "fiil, cevâb-ı şart", turkish_bridge: null, balagha_note: "Bu ayet dört إِذَا'nın cevâbı. Mâzî kalıbı gelecek anlamda → olayın kesinliği." },
          { arabic: "نَفْسٌ", transliteration: "nafsun", root: "ن-ف-س", pattern: "فَعْل", pos: "ism", meaning_tr: "can, kişi", irab: "{Fâil}, {merfû} (damme + tenvîn). Nekre → her bir can.", irab_short: "fâil, merfû", turkish_bridge: "Nefis, nefs bu kökten", balagha_note: "Nekre (belirsiz) kullanımı → istisnâsız her tek kişi." },
          { arabic: "مَّا", transliteration: "mā", root: null, pattern: null, pos: "ism", meaning_tr: "ne, şeyleri", irab: "İsm-i mevsûl, {mef'ûl bih} (عَلِمَتْ'in). '… ettiği şeyleri' anlamında.", irab_short: "ism-i mevsûl, mef'ûl bih", turkish_bridge: null, balagha_note: null },
          { arabic: "قَدَّمَتْ", transliteration: "qaddamat", root: "ق-د-م", pattern: "فَعَّلَ", pos: "fil", meaning_tr: "öne sürdü, yaptı", irab: "II. bâb {fiil-i mâzî}. Sıla cümlesi (مَا'nın sılası). {Fâil}: müstetir هِيَ (nefis).", irab_short: "fiil, sıla, II. bâb", turkish_bridge: "Takdîm (sunma) bu kökten", balagha_note: null },
          { arabic: "وَأَخَّرَتْ", transliteration: "wa aḫḫarat", root: "أ-خ-ر", pattern: "فَعَّلَ", pos: "fil", meaning_tr: "erteledi, bıraktı", irab: "وَ {harf-i atıf} + II. bâb {fiil-i mâzî}. قَدَّمَتْ'e atıf.", irab_short: "fiil, atıf, II. bâb", turkish_bridge: "Te'hîr (erteleme), âhir (son) bu kökten", balagha_note: "قَدَّمَ وَ أَخَّرَ = öne sürdüğü ve arkada bıraktığı → yapılan ve yapılmayan ameller tıbâk (zıtlık)." },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "إِذَا Şart Zinciri (4× Terâkum)",
        explanation: "إِذَا gelecekte kesin gerçekleşecek olaylar için kullanılan şart zarfıdır. Bu surede dört إِذَا art arda gelip 5. ayette cevâb-ı şart verilir: عَلِمَتْ نَفْسٌ... Zincirin uzunluğu dramatik birikme (terâkum) sağlar.",
        rule: "إِذَا + fiil-i mâzî (şart) + ... + fiil-i mâzî (cevap)\nMâzî kalıbı ama gelecek anlamda (kesinlik ifadesi)\nCevap fiili şart zincirinin sonunda gelir",
        examples: ["إِذَا السَّمَاءُ انْفَطَرَتْ — Gök yarıldığı zaman", "إِذَا الشَّمْسُ كُوِّرَتْ — Güneş dürüldüğü zaman (81:1)", "إِذَا زُلْزِلَتِ الأَرْضُ — Yer sarsıldığı zaman (99:1)"],
      },
      {
        title: "VII. Bâb (اِنْفِعَال) — Kendiliğinden Oluş",
        explanation: "اِنْفَعَلَ kalıbı I. bâb'ın dönüşlü/edilgen halidir. Eylemin dışarıdan değil kendi kendine gerçekleştiğini ifade eder. Kıyamet tasvirlerinde sıkça kullanılır: kozmik düzen 'kendiliğinden' çözülür.",
        rule: "اِنْفَعَلَ / يَنْفَعِلُ / اِنْفِعَال\nGök yarılmadı → اِنْفَطَرَ (kendiliğinden yarıldı)\nCam kırılmadı → اِنْكَسَرَ (kendi kırıldı)",
        examples: ["اِنْفَطَرَ — (kendiliğinden) yarıldı (ف-ط-ر)", "اِنْفَجَرَ — (kendiliğinden) patladı (ف-ج-ر)", "اِنْكَسَرَ — (kendiliğinden) kırıldı (ك-س-ر)"],
      },
      {
        title: "Meçhul Fiil (الفعل المجهول)",
        explanation: "Fâili (özne) bilinmeyen veya gizlenmek istenen fiildir. Mâzî'de ilk hareke damme, sondan bir önceki kesre olur. 3. ayette فُجِّرَتْ ve 4. ayette بُعْثِرَتْ meçhul fiildir → fâil belirtilmiyor, eylemin kaynağı gizleniyor.",
        rule: "Ma'lum: فَعَّلَ → Meçhul: فُعِّلَ\nMa'lum: بَعْثَرَ → Meçhul: بُعْثِرَ\nFâil yerine nâib-i fâil (merfû) gelir",
        examples: ["فُجِّرَتْ — patlatıldı (II. bâb meçhul)", "بُعْثِرَتْ — deşildi (rubâî meçhul)", "خُلِقَ — yaratıldı (I. bâb meçhul)"],
      },
      {
        title: "İştigâl Üslûbu (الاشتغال)",
        explanation: "إِذَا'dan sonra isim (السَّمَاءُ, الكَوَاكِبُ vb.) gelip ardından o isme dönen zamîrli bir fiil (اِنفَطَرَتْ) geldiğinde, isim aslında hazf edilmiş bir fiilin fâilidir; görünen fiil+zamîr cümlesi ise tefsîriyedir (i'rabdan mahalli yoktur). Bu yapıya iştigâl denir: fiil, zamirleriyle meşgul olmuş, asıl ismi doğrudan almamıştır.",
        rule: "إِذَا + İSİM [fâil li-fi'lin mahzûf] + FİİL+zamîr [tefsîriye]\nTakdîr: إِذَا انفطرتِ السماءُ انفطرتْ\nGörünen cümle tefsîriye → i'rabdan mahalli yok",
        examples: ["إِذَا السَّمَاءُ انْفَطَرَتْ — السماء hazf fiilin fâili (82:1)", "وَالسَّمَاءَ رَفَعَهَا — السماء mef'ûl bih li-fi'lin mahzûf (55:7)", "إِذَا الشَّمْسُ كُوِّرَتْ — الشمس fâil li-fi'lin mahzûf (81:1)"],
      },
    ],
    exercises: [
      generateBalaghaQuiz(
        "S82-B01-Q01",
        "82:1-4'teki dört إِذَا tekrarı hangi belâgat sanatına örnektir?",
        "Terâkum (dramatik birikme) — her yeni إِذَا gerilimi artırır, cevap 5. ayete kadar bekletilir",
        ["Tıbâk (zıtlık)", "İsti'âre (metafor)", "Cinas (söz oyunu)"],
        "Dört إِذَا peş peşe gelerek kozmik yıkılışı kademeli olarak anlatır: gök → yıldızlar → denizler → kabirler. Her biri bir katman ekler, cevap ancak 5. ayette gelir. Bu birikimli yapı terâkum / tedrîc sanatıdır."
      ),
      generateBabQuiz(
        "S82-B01-Q02", "ٱنفَطَرَتْ",
        "VII. bâb (اِنْفَعَلَ): ف-ط-ر → اِنْفَطَرَ (kendiliğinden yarıldı)",
        ["V. bâb (تَفَعَّلَ): تَفَطَّرَ", "VIII. bâb (اِفْتَعَلَ): اِفْتَطَرَ", "I. bâb (فَعَلَ): فَطَرَ"],
        "اِنْفَطَرَ = VII. bâb (اِنْفَعَلَ). ف-ط-ر kökünden: kendiliğinden yarılma. VII. bâb dönüşlülük/edilgenlik ifade eder.",
        ["ف-ط-ر"]
      ),
      generateRootQuiz(
        "S82-B01-Q03", "فُجِّرَتْ", "ف-ج-ر",
        ["ف-ط-ر", "ب-ح-ر", "ن-ث-ر"],
        "فُجِّرَ: ف-ج-ر kökünden II. bâb meçhul. Fecr (tan), inficâr (patlama) aynı kökten.",
        ["ف-ج-ر"]
      ),
      generateIrabQuiz(
        "S82-B01-Q04", "نَفْسٌ",
        "Fâil (merfû) — عَلِمَتْ fiilinin öznesi",
        ["Mübtedâ (merfû)", "Mef'ûl bih (mensûb)", "Nâib-i fâil (merfû)"],
        "عَلِمَتْ نَفْسٌ → نَفْسٌ fâildir (عَلِمَتْ fiilinin öznesi). Merfû, alâmeti damme + tenvîn. Nekre olması 'her bir can' anlamı verir.",
        ["ن-ف-س"]
      ),
      {
        id: "S82-B01-Q05", type: "single_choice",
        question: "Kozmik yıkılış zinciri hangi sıra ile ilerler?",
        options: [
          "Gök → yıldızlar → denizler → kabirler (yukarıdan aşağıya, genelden özele)",
          "Kabirler → denizler → yıldızlar → gök (aşağıdan yukarıya)",
          "Yıldızlar → gök → kabirler → denizler (rastgele)",
          "Denizler → kabirler → gök → yıldızlar (ters sıra)",
        ],
        correct: 0,
        explanation: "82:1-4'te kozmik yıkılış gökte başlıyor (سَمَاء), yıldızlara iniyor (كَوَاكِب), yere ulaşıyor (بِحَار), en son insanın yattığı yere (قُبُور). Büyükten küçüğe, kozmikten kişisele.",
        relatedRoots: [],
      },
      generateVerbTypeQuiz(
        "S82-B01-Q06", "ٱنفَطَرَتْ", "ف-ط-ر",
        "Sahîh — Sâlim",
        ["Mu'tel — Nâkıs (lâm illet)", "Sahîh — Muzâ'af", "Mehmûz — Fâ"],
        "ف-ط-ر: üç harf sahîh → sâlim. VII. bâb (اِنْفِعَال): kendi kendine yarılma. Fıtrat, iftar bu kökten."
      ),
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 2 — İNFİTÂR 82:6-12 — İnsana Hitap, Yaratılış, Kirâmen Kâtibîn
  // ═══════════════════════════════════════════════════════════
  {
    id: "S82-B02-infitar",
    title: "İnfitâr (6-12) — Kerîm Rabbe Karşı Ne Aldattı?",
    titleAr: "سُورَةُ الاِنْفِطَارِ ٦-١٢",
    stage: 2,
    level: 8,
    surah: 82,
    description:
      "Kozmik yıkılıştan insana ani geçiş (nidâ). Yaratılış hatırlatması (خَلَقَ/سَوَّى/عَدَلَ üçlüsü), كَلَّا reddi, Kirâmen Kâtibîn (yazıcı melekler). II. bâb yoğunluğu, ism-i fâil.",
    verses: [
      {
        surah: 82, ayah: 6,
        arabic: "يَـٰٓأَيُّهَا ٱلْإِنسَـٰنُ مَا غَرَّكَ بِرَبِّكَ ٱلْكَرِيمِ",
        translation: "Ey insan! Seni cömert Rabbine karşı ne aldattı?",
        words: [
          { arabic: "يَـٰٓأَيُّهَا", transliteration: "yā ayyuhā", root: null, pos: "harf", meaning_tr: "ey!", irab: "يَا nidâ edatı + أَيُّ münâdâ + هَا tenbîh harfi.", irab_short: "nidâ", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلْإِنسَـٰنُ", transliteration: "al-insānu", root: "أ-ن-س", pos: "ism", meaning_tr: "insan", irab: "Nidâ'ya sıfat veya bedel, {merfû}.", irab_short: "münâdâ, merfû", turkish_bridge: "İnsan, üns, ünsiyet bu kökten", balagha_note: "Kozmik yıkılıştan sonra birden insana hitap → iltifât etkisi. Devasa olaylardan küçücük insana sesleniliyor." },
          { arabic: "مَا", transliteration: "mā", root: null, pos: "ism", meaning_tr: "ne?", irab: "İstifhâm ismi, {mübtedâ}.", irab_short: "istifhâm, mübtedâ", turkish_bridge: null, balagha_note: null },
          { arabic: "غَرَّكَ", transliteration: "ġarraka", root: "غ-ر-ر", pos: "fil", meaning_tr: "seni aldattı", irab: "{Fiil-i mâzî} + كَ (muhatap zamîri, mef'ûl bih). Cümle: {haber} (مَا'nın).", irab_short: "fiil + zamîr mef'ûl", turkish_bridge: "Gurur, mağrur bu kökten", balagha_note: "İstifhâm-ı inkârî: 'Seni aldatan ne?!' = hiçbir şey aldatmamalıydı." },
          { arabic: "بِرَبِّكَ", transliteration: "bi rabbika", root: "ر-ب-ب", pos: "harf+ism", meaning_tr: "Rabbine karşı", irab: "بِ {harf-i cer} + رَبِّ {muzâf, mecrûr} + كَ {muzâfun ileyh}.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلْكَرِيمِ", transliteration: "al-karīmi", root: "ك-ر-م", pattern: "فَعِيل", pos: "ism", meaning_tr: "cömert, kerem sahibi", irab: "رَبِّ'nin {sıfat}ı, {mecrûr}.", irab_short: "sıfat, mecrûr", turkish_bridge: "Kerem, kerîm, ikrâm hep bu kökten", balagha_note: "Soru 'seni aldatan ne?' iken 'Kerem sahibi Rabbine karşı' ekleniyor → kınama + lütuf iç içe. Ceza yerine kerem hatırlatılır." },
        ],
      },
      {
        surah: 82, ayah: 7,
        arabic: "ٱلَّذِى خَلَقَكَ فَسَوَّىٰكَ فَعَدَلَكَ",
        translation: "O ki, seni yaratıp düzenledi ve dengeli kıldı",
        words: [
          { arabic: "ٱلَّذِى", transliteration: "allaḏī", root: null, pos: "ism", meaning_tr: "o ki", irab: "İsm-i mevsûl, {sıfat} (الكَرِيمِ'e) veya bedel.", irab_short: "ism-i mevsûl, sıfat", turkish_bridge: null, balagha_note: "رَبِّكَ الكَرِيمِ الَّذِي: üç katmanlı vasıf zinciri → Rabbin keremi yaratılış sanatıyla kanıtlanır." },
          { arabic: "خَلَقَكَ", transliteration: "ḫalaqaka", root: "خ-ل-ق", pos: "fil", meaning_tr: "seni yarattı", irab: "{Fiil-i mâzî}, I. bâb + كَ mef'ûl. Sıla cümlesi.", irab_short: "mâzî, I. bâb", turkish_bridge: "Halk (yaratma), hilkat, ahlâk bu kökten", balagha_note: null },
          { arabic: "فَسَوَّىٰكَ", transliteration: "fa-sawwāka", root: "س-و-ي", pattern: "فَعَّلَ", pos: "fil", meaning_tr: "düzenledi, biçimlendirdi", irab: "فَ {atıf, tertîb} + {fiil-i mâzî}, II. bâb (تَسْوِيَة). + كَ mef'ûl.", irab_short: "mâzî, II. bâb", turkish_bridge: "Tesviye (düzleme, eşitleme) bu kökten", balagha_note: "Yaratılış üç aşamada: خَلَقَ (yoktan var etme) → سَوَّى (biçimlendirme) → عَدَلَ (dengeleme). Tedricî sanat." },
          { arabic: "فَعَدَلَكَ", transliteration: "fa-ʿadalaka", root: "ع-د-ل", pos: "fil", meaning_tr: "dengeli kıldı, orantıladı", irab: "فَ {atıf} + {fiil-i mâzî}, I. bâb + كَ mef'ûl.", irab_short: "mâzî, I. bâb", turkish_bridge: "Adalet, i'tidâl, ta'dîl bu kökten", balagha_note: "عَدَلَ: hem 'adalet' hem 'denge' → organların orantılı yaratılması." },
        ],
      },
      {
        surah: 82, ayah: 8,
        arabic: "فِىٓ أَىِّ صُورَةٍ مَّا شَآءَ رَكَّبَكَ",
        translation: "Dilediği herhangi bir şekilde seni birleştirdi",
        words: [
          { arabic: "فِىٓ", transliteration: "fī", root: null, pos: "harf", meaning_tr: "içinde, …de", irab: "{Harf-i cer}.", irab_short: "harf-i cer", turkish_bridge: null, balagha_note: null },
          { arabic: "أَىِّ", transliteration: "ayyi", root: null, pos: "ism", meaning_tr: "hangi, herhangi bir", irab: "{Mecrûr} (فِي ile). Nekre + إضافة = herhangi bir.", irab_short: "mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "صُورَةٍ", transliteration: "ṣūratin", root: "ص-و-ر", pattern: "فُعْلَة", pos: "ism", meaning_tr: "şekil, suret", irab: "{Muzâfun ileyh}, {mecrûr} (kesre).", irab_short: "muzâfun ileyh, mecrûr", turkish_bridge: "Sûret, tasvîr, musavvir bu kökten", balagha_note: null },
          { arabic: "مَّا", transliteration: "mā", root: null, pos: "harf", meaning_tr: "(te'kîd/zâide)", irab: "مَا zâide (pekiştirme) veya şart anlamı: 'her ne şekil dilediyse.'", irab_short: "zâide / şart", turkish_bridge: null, balagha_note: null },
          { arabic: "شَآءَ", transliteration: "šāʾa", root: "ش-ي-أ", pos: "fil", meaning_tr: "diledi", irab: "{Fiil-i mâzî}, I. bâb. {Fâil}: هُوَ (Allah).", irab_short: "mâzî, I. bâb", turkish_bridge: "Meşîet (dileme), inşâallah bu kökten", balagha_note: null },
          { arabic: "رَكَّبَكَ", transliteration: "rakkabaka", root: "ر-ك-ب", pattern: "فَعَّلَ", pos: "fil", meaning_tr: "seni birleştirdi, terkîb etti", irab: "{Fiil-i mâzî}, II. bâb (تَرْكِيب) + كَ mef'ûl.", irab_short: "mâzî, II. bâb", turkish_bridge: "Terkîp (birleştirme), rekabet, mürekkep bu kökten", balagha_note: "II. bâb teksîr (yoğunluk) → parçaları bir araya getirip bütün oluşturma. Her insanın benzersiz sureti Allah'ın dilemesiyle." },
        ],
      },
      {
        surah: 82, ayah: 9,
        arabic: "كَلَّا بَلْ تُكَذِّبُونَ بِٱلدِّينِ",
        translation: "Hayır! Aksine siz hesap gününü yalanlıyorsunuz",
        words: [
          { arabic: "كَلَّا", transliteration: "kallā", root: null, pos: "harf", meaning_tr: "hayır, asla!", irab: "{Reddi harf}: önceki aldanmayı reddediyor ve yeni konuya geçiyor.", irab_short: "red + intikal", turkish_bridge: null, balagha_note: "كَلَّا: sadece Mekkî surelerde 33 kez. Hem red (zecr) hem geçiş (intikal) işlevi. Burada: kerem inkârından hesap inkârına geçiş." },
          { arabic: "بَلْ", transliteration: "bal", root: null, pos: "harf", meaning_tr: "aksine, bilakis", irab: "{İdrâb harfi}: bir iddiayı bırakıp daha önemlisine geçiş.", irab_short: "idrâb", turkish_bridge: null, balagha_note: null },
          { arabic: "تُكَذِّبُونَ", transliteration: "tukaḏḏibūna", root: "ك-ذ-ب", pattern: "تُفَعِّلُونَ", pos: "fil", meaning_tr: "yalanlıyorsunuz", irab: "{Fiil-i muzâri}, II. bâb (تَكْذِيب), cem'-i muhatab. كَذَبَ (yalan söyledi) → كَذَّبَ (yalanladı, birini yalancı saydı).", irab_short: "muzâri, II. bâb", turkish_bridge: "Tekzîb (yalanlama) bu kökten", balagha_note: "Tekil muhataptan (مَا غَرَّكَ) çoğul muhataba (تُكَذِّبُونَ) → iltifât: sorun kişisel değil, toplumsal." },
          { arabic: "بِٱلدِّينِ", transliteration: "bi-d-dīni", root: "د-ي-ن", pos: "ism", meaning_tr: "hesap gününe", irab: "بِ {harf-i cer} + الدِّين {mecrûr}. Dîn burada 'hesap, karşılık' anlamında.", irab_short: "câr-mecrûr", turkish_bridge: "Dîn (din/hesap), deyyân (hesap soran) bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 82, ayah: 10,
        arabic: "وَإِنَّ عَلَيْكُمْ لَحَـٰفِظِينَ",
        translation: "Oysa üzerinizde koruyucular (gözetleyiciler) var",
        words: [
          { arabic: "وَإِنَّ", transliteration: "wa inna", root: null, pos: "harf", meaning_tr: "ve muhakkak", irab: "وَ {hâliyye} + إِنَّ {te'kîd harfi}.", irab_short: "hâl + te'kîd", turkish_bridge: null, balagha_note: null },
          { arabic: "عَلَيْكُمْ", transliteration: "ʿalaykum", root: null, pos: "harf+zamir", meaning_tr: "üzerinizde", irab: "عَلَى {harf-i cer} + كُمْ {zamîr}. {Haber-i inne} (mukaddem).", irab_short: "câr-mecrûr, haber-i inne", turkish_bridge: null, balagha_note: null },
          { arabic: "لَحَـٰفِظِينَ", transliteration: "la-ḥāfiẓīna", root: "ح-ف-ظ", pattern: "فَاعِل", pos: "ism", meaning_tr: "koruyucular, gözetleyiciler", irab: "لَ {lâm-ı te'kîd (inne'yi pekiştiren)} + حَافِظِينَ {ism-i inne, mensûb (yâ ile — cem-i müzekker sâlim)}. İsm-i fâil: حَفِظَ → حَافِظ.", irab_short: "ism-i inne, mansûb", turkish_bridge: "Hâfız, muhâfız, hıfz bu kökten", balagha_note: "لَ te'kîd + إِنَّ te'kîd = çift vurgu: 'Kesinlikle üzerinizde gözetleyiciler var!' Meleklerin varlığı iki kat pekiştiriliyor." },
        ],
      },
      {
        surah: 82, ayah: 11,
        arabic: "كِرَامًا كَـٰتِبِينَ",
        translation: "Değerli yazıcılar (olarak)",
        words: [
          { arabic: "كِرَامًا", transliteration: "kirāman", root: "ك-ر-م", pattern: "فِعَال", pos: "ism", meaning_tr: "değerli, saygın", irab: "{Sıfat} (حَافِظِينَ'in), {mensûb}. كِرَام: كَرِيم'in cem-i teksîri.", irab_short: "sıfat, mansûb", turkish_bridge: "Kerem, kerîm, ikrâm bu kökten", balagha_note: "6. ayette الكَرِيمِ (Rabb), 11. ayette كِرَامًا (melekler) — aynı kök tekrarı: kerîm Rabb, kerîm melekler gönderiyor." },
          { arabic: "كَـٰتِبِينَ", transliteration: "kātibīna", root: "ك-ت-ب", pattern: "فَاعِل", pos: "ism", meaning_tr: "yazıcılar", irab: "{Sıfat ikinci}, {mensûb}. İsm-i fâil cem'i: كَتَبَ (yazdı) → كَاتِب → كَاتِبِينَ.", irab_short: "sıfat, mansûb", turkish_bridge: "Kitâb, kâtib, mekteb, mektup hep bu kökten", balagha_note: "Kirâmen Kâtibîn: Kur'an'da meleklerin bu sıfatla anıldığı tek yer. İki sıfat: (1) كِرَام = asil/değerli, (2) كَاتِبِينَ = kaydeden." },
        ],
      },
      {
        surah: 82, ayah: 12,
        arabic: "يَعْلَمُونَ مَا تَفْعَلُونَ",
        translation: "Ne yaparsanız bilirler",
        words: [
          { arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", root: "ع-ل-م", pos: "fil", meaning_tr: "bilirler", irab: "{Fiil-i muzâri}, cem-i muhatab gaib. {Fâil}: واو (melekler).", irab_short: "muzâri", turkish_bridge: null, balagha_note: null },
          { arabic: "مَا", transliteration: "mā", root: null, pos: "ism", meaning_tr: "ne, her şeyi", irab: "İsm-i mevsûl, {mef'ûl bih}.", irab_short: "ism-i mevsûl", turkish_bridge: null, balagha_note: null },
          { arabic: "تَفْعَلُونَ", transliteration: "tafʿalūna", root: "ف-ع-ل", pos: "fil", meaning_tr: "yaparsınız", irab: "{Fiil-i muzâri}, cem-i muhatab. مَا'nın sıla cümlesi.", irab_short: "muzâri, sıla", turkish_bridge: "Fiil, fâil bu kökten", balagha_note: "مَا تَفْعَلُونَ = ne yaparsanız (sınırsız). Sadece söz değil, eylem de kayıt altında." },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "Yaratılış Üçlüsü: خَلَقَ → سَوَّى → عَدَلَ",
        explanation: "7. ayette üç fiil art arda gelir ve yaratılışın üç aşamasını anlatır: (1) خَلَقَ = yoktan var etme (I. bâb), (2) سَوَّى = biçimlendirme, düzenleme (II. bâb), (3) عَدَلَ = dengeleme, orantılama (I. bâb). فَ harfiyle bağlanmaları sıralı gerçekleşmeyi (tertîb) ifade eder.",
        rule: "خَلَقَ (yoktan yaratma, en temel)\nفَسَوَّى (şekillendirme, II. bâb = yoğunluk)\nفَعَدَلَ (dengeleme, orantı kurma)\nفَ + فَ: peş peşe, sıralı eylemler",
        examples: ["خَلَقَ فَسَوَّى (87:2, A'lâ) — aynı ikili", "خَلَقَ الإِنسَانَ مِنْ عَلَقٍ (96:2, Alak)", "الَّذِي أَحْسَنَ كُلَّ شَيْءٍ خَلَقَهُ (32:7)"],
      },
      {
        title: "İsm-i Fâil — حَافِظ / كَاتِب",
        explanation: "I. bâb ismi fâili فَاعِل kalıbındadır. Sürekli bir nitelik ifade eder (sıfat gibi). حَافِظ (koruyan) ve كَاتِب (yazan) ism-i fâillerdir. Cem-i müzekker sâlim: حَافِظُونَ / كَاتِبُونَ (ref'), حَافِظِينَ / كَاتِبِينَ (nasb/cer).",
        rule: "فَعَلَ → فَاعِل (ism-i fâil, I. bâb)\nRaf': ـُونَ / Nasb-Cer: ـِينَ\nMelekler hem hâfız (koruyucu) hem kâtib (yazıcı)",
        examples: ["حَافِظِينَ — koruyucular (ح-ف-ظ)", "كَاتِبِينَ — yazıcılar (ك-ت-ب)", "عَالِمِينَ — bilenler (ع-ل-م)"],
      },
    ],
    exercises: [
      generateRootQuiz(
        "S82-B02-Q01", "غَرَّكَ", "غ-ر-ر",
        ["غ-ف-ر", "ق-ر-ر", "ك-ر-م"],
        "غَرَّ: غ-ر-ر kökünden I. bâb. Aldatmak. Gurur, mağrur, iğfâl bu kökten. Muzâaf (tekrarlı) fiil: iki harf aynı.",
        ["غ-ر-ر"]
      ),
      generateBabQuiz(
        "S82-B02-Q02", "سَوَّىٰكَ",
        "II. bâb (فَعَّلَ): سَوِيَ → سَوَّى (düzenledi, biçimlendirdi)",
        ["I. bâb (فَعَلَ): سَوَى", "IV. bâb (أَفْعَلَ): أَسْوَى", "V. bâb (تَفَعَّلَ): تَسَوَّى"],
        "سَوَّى: س-و-ي kökünden II. bâb. I. bâb سَوِيَ (eşit oldu) → II. bâb سَوَّى (eşitledi, düzenledi). Tesviye (düzleme) bu kökten.",
        ["س-و-ي"]
      ),
      generateIrabQuiz(
        "S82-B02-Q03", "كِرَامًا",
        "Sıfat, mansûb — حَافِظِينَ'in sıfatı (ism-i inne'ye tâbi)",
        ["Hâl, mansûb", "Mef'ûl bih, mansûb", "Temyîz, mansûb"],
        "كِرَامًا: حَافِظِينَ kelimesinin sıfatıdır (1. sıfat). Onu izleyen كَاتِبِينَ ise 2. sıfattır. İkisi de حَافِظِينَ'e tâbi olarak mansûbdur.",
        ["ك-ر-م"]
      ),
      generateBalaghaQuiz(
        "S82-B02-Q04",
        "6. ayette مَا غَرَّكَ بِرَبِّكَ الكَرِيمِ ifadesinde 'Kerîm' sıfatının belâgat işlevi nedir?",
        "Kınama içinde lütuf (itâb + teşvîk): cezayı değil keremi hatırlatarak utandırma",
        ["Sadece tehdit amaçlı", "Teknik bir sıfat, anlamsal yükü yok", "Soru içinde cevap gizleme (istitrâd)"],
        "الكَرِيمِ sıfatı insanı utandırmak için seçilmiş: 'Sana bunca kerem veren Rabbine karşı ne aldattı seni?' Ceza tehdidi yerine iyilik hatırlatması → daha etkili kınama."
      ),
      {
        id: "S82-B02-Q05", type: "single_choice",
        question: "82:9'da تُكَذِّبُونَ çoğul, 82:6'da مَا غَرَّكَ tekil hitaptır. Bu değişimin adı nedir?",
        options: [
          "İltifât (bakış açısı değişimi) — tekil hitaptan çoğul hitaba geçiş, sorunun toplumsal olduğunu gösterir",
          "Tafṣîl (ayırma) — iki farklı grubu ayırır",
          "İcmâl (özetleme) — özetten detaya geçiş",
          "Hazf (düşürme) — tekrar eden ögelerin kaldırılması",
        ],
        correct: 0,
        explanation: "مَا غَرَّكَ (tekil) → تُكَذِّبُونَ (çoğul): iltifât sanatı. Önce kişisel sorgulama, sonra toplumsal kınama. Mesaj: aldanma bireysel, yalanlamak toplumsal bir hastalık.",
        relatedRoots: [],
      },
      generateFillBlank(
        "S82-B02-Q06",
        "وَإِنَّ عَلَيْكُمْ لَ_____ كِرَامًا كَاتِبِينَ",
        "حَافِظِينَ", ["عَالِمِينَ", "نَاظِرِينَ", "شَاهِدِينَ"],
        "Üzerinizde koruyucu melekler var",
        "حَافِظِينَ: ح-ف-ظ kökünden ism-i fâil cem'i. لَ + إِنَّ: çift te'kîd. Melekler hem hâfız (koruyucu) hem kâtib (yazıcı) hem de kerîm (değerli).",
        ["ح-ف-ظ"]
      ),
      generateVerbTypeQuiz(
        "S82-B02-Q07", "غَرَّكَ", "غ-ر-ر",
        "Sahîh — Muzâ'af",
        ["Sahîh — Sâlim", "Mehmûz — Fâ", "Mu'tel — Ecvef (ayn illet)"],
        "غ-ر-ر: 2. ve 3. harf aynı (ر-ر) → muzâ'af. غَرَّ = aldattı. Gurur, mağrur bu kökten. 'Kerim Rabbine karşı seni ne aldattı?'"
      ),
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 3 — İNFİTÂR 82:13-19 — Ebrâr, Füccar ve Yevmü'd-Dîn
  // ═══════════════════════════════════════════════════════════
  {
    id: "S82-B03-infitar",
    title: "İnfitâr (13-19) — Ebrâr, Füccar ve O Gün",
    titleAr: "سُورَةُ الاِنْفِطَارِ ١٣-١٩",
    stage: 2,
    level: 8,
    surah: 82,
    description:
      "Ebrâr (iyiler) naîmde, Füccar (fâcirler) cahîmde. مَا أَدْرَاكَ × 2 ile yevmü'd-dîn'in azameti. Son ayet: hiç kimse başkası için bir şey yapamaz, emir yalnız Allah'ındır. Tıbâk (ebrâr↔füccar), tekrar, istifhâm.",
    verses: [
      {
        surah: 82, ayah: 13,
        arabic: "إِنَّ ٱلْأَبْرَارَ لَفِى نَعِيمٍ",
        translation: "İyiler mutlaka nimet içindedir",
        words: [
          { arabic: "إِنَّ", transliteration: "inna", root: null, pos: "harf", meaning_tr: "muhakkak", irab: "{Te'kîd harfi}.", irab_short: "te'kîd", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلْأَبْرَارَ", transliteration: "al-abrāra", root: "ب-ر-ر", pattern: "أَفْعَال", pos: "ism", meaning_tr: "iyiler, hayırlılar", irab: "{İsm-i inne}, {mensûb}. أَبْرَار: بَرّ (iyi, hayırlı) kelimesinin cem-i teksîri.", irab_short: "ism-i inne, mensûb", turkish_bridge: "Birr (iyilik), ebrâr, mebrûr bu kökten", balagha_note: "İlk grup: ebrâr (iyiler). 14. ayette füccar (fâcirler) gelecek → tıbâk (zıtlık) hazırlanıyor." },
          { arabic: "لَفِى", transliteration: "la-fī", root: null, pos: "harf", meaning_tr: "elbette …de", irab: "لَ {lâm-ı te'kîd} + فِي {harf-i cer}.", irab_short: "te'kîd + cer", turkish_bridge: null, balagha_note: "لَ + إِنَّ: çift te'kîd, 10. ayetteki لَحَافِظِينَ ile aynı yapı. Ebrâr'ın naîmde olduğu kesin." },
          { arabic: "نَعِيمٍ", transliteration: "naʿīmin", root: "ن-ع-م", pattern: "فَعِيل", pos: "ism", meaning_tr: "nimet, cennet nimeti", irab: "{Mecrûr} (فِي ile). {Haber-i inne} (câr-mecrûr olarak).", irab_short: "mecrûr, haber-i inne", turkish_bridge: "Nimet, naîm, in'âm bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 82, ayah: 14,
        arabic: "وَإِنَّ ٱلْفُجَّارَ لَفِى جَحِيمٍ",
        translation: "Fâcirler de mutlaka cehennem ateşindedir",
        words: [
          { arabic: "وَإِنَّ", transliteration: "wa inna", root: null, pos: "harf", meaning_tr: "ve muhakkak", irab: "وَ {atıf} + إِنَّ te'kîd.", irab_short: "atıf + te'kîd", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلْفُجَّارَ", transliteration: "al-fujjāra", root: "ف-ج-ر", pattern: "فُعَّال", pos: "ism", meaning_tr: "fâcirler, günahkârlar", irab: "{İsm-i inne}, {mensûb}. فُجَّار: فَاجِر'in cem-i teksîri. فُعَّال: mübalağa çoğulu.", irab_short: "ism-i inne, mensûb", turkish_bridge: "Fücur (günahkârlık), fâcir bu kökten", balagha_note: "فُجَّار = ف-ج-ر: 3. ayette فُجِّرَتْ (denizler patlatıldı) aynı kök. Kozmik patlama ↔ ahlakî çözülme: kök bağlantısı." },
          { arabic: "لَفِى", transliteration: "la-fī", root: null, pos: "harf", meaning_tr: "elbette …de", irab_short: "te'kîd + cer", turkish_bridge: null, balagha_note: null },
          { arabic: "جَحِيمٍ", transliteration: "jaḥīmin", root: "ج-ح-م", pattern: "فَعِيل", pos: "ism", meaning_tr: "cehennem, yakıcı ateş", irab: "{Mecrûr}, haber-i inne.", irab_short: "mecrûr, haber-i inne", turkish_bridge: "Cahîm (cehennemin isimlerinden)", balagha_note: "نَعِيم ↔ جَحِيم: ses benzerliği (فَعِيل kalıbı) ama anlam tam zıt → tıbâk-ı lafzî ve ma'nevî." },
        ],
      },
      {
        surah: 82, ayah: 15,
        arabic: "يَصْلَوْنَهَا يَوْمَ ٱلدِّينِ",
        translation: "Hesap günü oraya gireceklerdir",
        words: [
          { arabic: "يَصْلَوْنَهَا", transliteration: "yaṣlawnahā", root: "ص-ل-ي", pos: "fil", meaning_tr: "oraya girerler, yanarlar", irab: "{Fiil-i muzâri}, cem-i gaib + هَا (mef'ûl, cehennem). صَلِيَ النَّارَ: ateşe girmek.", irab_short: "muzâri + zamîr mef'ûl", turkish_bridge: "Salât (namaz) ile karıştırılmamalı — farklı kök", balagha_note: null },
          { arabic: "يَوْمَ", transliteration: "yawma", root: "ي-و-م", pos: "ism", meaning_tr: "gün(ünde)", irab: "{Zarf-ı zaman}, {mensûb}.", irab_short: "zarf, mansûb", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلدِّينِ", transliteration: "ad-dīni", root: "د-ي-ن", pos: "ism", meaning_tr: "hesap gününün, dînin", irab: "{Muzâfun ileyh}, {mecrûr}. يَوْمَ الدِّينِ = hesap/karşılık günü.", irab_short: "muzâfun ileyh, mecrûr", turkish_bridge: "Dîn (hesap/karşılık), deyyân (hâkim) bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 82, ayah: 16,
        arabic: "وَمَا هُمْ عَنْهَا بِغَآئِبِينَ",
        translation: "Ondan ayrılıp uzaklaşacak da değillerdir",
        words: [
          { arabic: "وَمَا", transliteration: "wa mā", root: null, pos: "harf", meaning_tr: "ve değil", irab: "وَ {atıf/hâl} + مَا {nefiy: Hicâziyye veya Temîmiyye}.", irab_short: "nefiy", turkish_bridge: null, balagha_note: null },
          { arabic: "هُمْ", transliteration: "hum", root: null, pos: "zamir", meaning_tr: "onlar", irab: "{Mübtedâ} veya {ism-i مَا (Hicâziyye)}.", irab_short: "mübtedâ / ism-i mâ", turkish_bridge: null, balagha_note: null },
          { arabic: "عَنْهَا", transliteration: "ʿanhā", root: null, pos: "harf+zamir", meaning_tr: "ondan (cehennemden)", irab: "عَنْ {harf-i cer} + هَا {zamîr, mecrûr} = cehennemden.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "بِغَآئِبِينَ", transliteration: "bi-ġāʾibīna", root: "غ-ي-ب", pattern: "فَاعِل", pos: "ism", meaning_tr: "uzaklaşanlar, ayrılanlar", irab: "بِ {zâide, nefyi pekiştiren} + غَائِبِينَ {haber / haber-i mâ, ism-i fâil cem'i}.", irab_short: "haber, mecrûr (lafzen)", turkish_bridge: "Gaib, gayb, gıybet bu kökten", balagha_note: "Ebedîlik vurgusu: cehennemden ayrılma yok. بِ zâide = pekiştirme → 'asla ayrılacak değiller.'" },
        ],
      },
      {
        surah: 82, ayah: 17,
        arabic: "وَمَآ أَدْرَىٰكَ مَا يَوْمُ ٱلدِّينِ",
        translation: "Hesap gününün ne olduğunu sen nereden bileceksin?",
        words: [
          { arabic: "وَمَآ", transliteration: "wa mā", root: null, pos: "harf", meaning_tr: "ve ne", irab: "وَ {isti'nâf} + مَا {istifhâm}.", irab_short: "istifhâm", turkish_bridge: null, balagha_note: null },
          { arabic: "أَدْرَىٰكَ", transliteration: "adrāka", root: "د-ر-ي", pattern: "أَفْعَلَ", pos: "fil", meaning_tr: "sana bildirdi", irab: "{Fiil-i mâzî}, IV. bâb (أَدْرَى/يُدْرِي) + كَ mef'ûl. 'Sana ne bildirdi?' = 'Sen ne bileceksin?'", irab_short: "mâzî, IV. bâb", turkish_bridge: "Dirâyet (kavrama) bu kökten", balagha_note: "مَا أَدْرَاكَ: Kur'an'da 13 kez. Tanımlanamaz büyüklükteki kavramları ifade eder. 'Sen o günün ne olduğunu asla kavrayamazsın.'" },
          { arabic: "مَا", transliteration: "mā", root: null, pos: "ism", meaning_tr: "ne, nedir", irab: "{Mübtedâ}, istifhâm.", irab_short: "istifhâm, mübtedâ", turkish_bridge: null, balagha_note: null },
          { arabic: "يَوْمُ", transliteration: "yawmu", root: "ي-و-م", pos: "ism", meaning_tr: "günü(dür)", irab: "{Haber}, {merfû}, muzâf.", irab_short: "haber, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلدِّينِ", transliteration: "ad-dīni", root: "د-ي-ن", pos: "ism", meaning_tr: "hesap gününün", irab: "{Muzâfun ileyh}, {mecrûr}.", irab_short: "muzâfun ileyh", turkish_bridge: null, balagha_note: null },
        ],
      },
      {
        surah: 82, ayah: 18,
        arabic: "ثُمَّ مَآ أَدْرَىٰكَ مَا يَوْمُ ٱلدِّينِ",
        translation: "Evet, hesap gününün ne olduğunu sen nereden bileceksin?",
        words: [
          { arabic: "ثُمَّ", transliteration: "ṯumma", root: null, pos: "harf", meaning_tr: "sonra, dahası", irab: "{Atıf harfi}: terâhî (mühlet, mesafe). Burada zaman değil, hayret derinleştirme ifadesi.", irab_short: "atıf, terâhî", turkish_bridge: null, balagha_note: "ثُمَّ: normalde 'sonra' ama burada 'dahası, üstelik' → tekrardan önceki duraklama, hayreti artırma. 17. ayetin birebir tekrarı ile vurgu katlanır." },
          { arabic: "مَآ أَدْرَىٰكَ", transliteration: "mā adrāka", root: "د-ر-ي", pos: "fil", meaning_tr: "sana ne bildirdi", irab_short: "istifhâm + IV. bâb", turkish_bridge: null, balagha_note: "İki kez مَا أَدْرَاكَ: Kur'an'da aynı kavram için ardışık tekrar nadir. O günün kavranılamazlığını çift katmanlı vurguyla anlatır." },
          { arabic: "مَا يَوْمُ ٱلدِّينِ", transliteration: "mā yawmu-d-dīni", root: "د-ي-ن", pos: "ism", meaning_tr: "hesap günü nedir", irab_short: "istifhâm + mübtedâ-haber", turkish_bridge: null, balagha_note: null },
        ],
      },
      {
        surah: 82, ayah: 19,
        arabic: "يَوْمَ لَا تَمْلِكُ نَفْسٌ لِّنَفْسٍ شَيْـًٔا وَٱلْأَمْرُ يَوْمَئِذٍ لِّلَّهِ",
        translation: "O gün hiçbir can başka bir can için hiçbir şey yapamaz. Ve emir o gün yalnız Allah'ındır.",
        words: [
          { arabic: "يَوْمَ", transliteration: "yawma", root: "ي-و-م", pos: "ism", meaning_tr: "gün(ünde)", irab: "{Zarf-ı zaman}, {mensûb}. مَا أَدْرَاكَ sorusuna açıklama (bedel).", irab_short: "zarf, mansûb", turkish_bridge: null, balagha_note: null },
          { arabic: "لَا", transliteration: "lā", root: null, pos: "harf", meaning_tr: "olmaz, yapamaz", irab: "{Nefiy harfi}: fiili nefyeder.", irab_short: "nefiy", turkish_bridge: null, balagha_note: null },
          { arabic: "تَمْلِكُ", transliteration: "tamliku", root: "م-ل-ك", pos: "fil", meaning_tr: "güç yetirmez, sahip olamaz", irab: "{Fiil-i muzâri}, I. bâb. Mülk (67) suresinin kök kelimesi burada tekrar: orada Allah'ın mülkü, burada insanın mülksüzlüğü.", irab_short: "muzâri, I. bâb", turkish_bridge: "Mülk, melik, mâlik bu kökten", balagha_note: "م-ل-ك kökü: Mülk suresinde (67:1) Allah'ın mutlak mülkü, burada insanın tam acziyeti. Aynı kök, zıt pozisyonlar." },
          { arabic: "نَفْسٌ", transliteration: "nafsun", root: "ن-ف-س", pos: "ism", meaning_tr: "can, kişi", irab: "{Fâil}, {merfû}. Nekre → herhangi bir can.", irab_short: "fâil, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "لِّنَفْسٍ", transliteration: "li-nafsin", root: "ن-ف-س", pos: "ism", meaning_tr: "başka bir can için", irab: "لِ {harf-i cer} + نَفْسٍ {mecrûr}. Nekre × 2 → 'hiçbir can, hiçbir can için.'", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: "İki nekre نَفْسٌ / نَفْسٍ: belirsizliğin katlanması → mutlak yalnızlık, her türlü aracılığın iptali." },
          { arabic: "شَيْـًٔا", transliteration: "šayʾan", root: "ش-ي-أ", pos: "ism", meaning_tr: "hiçbir şey", irab: "{Mef'ûl bih}, {mensûb}. Nekre + nefiy = hiçbir şey.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: null, balagha_note: null },
          { arabic: "وَٱلْأَمْرُ", transliteration: "wa-l-amru", root: "أ-م-ر", pos: "ism", meaning_tr: "ve emir, iş", irab: "وَ {isti'nâf / hâl} + الأَمْرُ {mübtedâ}, {merfû}.", irab_short: "mübtedâ, merfû", turkish_bridge: "Emr, emir, me'mur bu kökten", balagha_note: null },
          { arabic: "يَوْمَئِذٍ", transliteration: "yawmaʾiḏin", root: "ي-و-م", pos: "ism", meaning_tr: "o gün", irab: "{Zarf-ı zaman}: يَوْمَ + إِذٍ (o zaman). Muzâf + muzâfun ileyh.", irab_short: "zarf, muzâf", turkish_bridge: null, balagha_note: null },
          { arabic: "لِّلَّهِ", transliteration: "lillāhi", root: "أ-ل-ه", pos: "ism", meaning_tr: "Allah'ındır", irab: "لِ {harf-i cer} + اللَّهِ {mecrûr}. Câr-mecrûr: {haber} (الأَمْرُ'nun haberi).", irab_short: "haber, câr-mecrûr", turkish_bridge: null, balagha_note: "Surenin final cümlesi: 'Emir o gün Allah'ındır.' Tüm surenin özeti: kozmik yıkılış → insanın sorgulanması → meleklerin kaydı → hesap → mutlak ilahî otorite." },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "مَا أَدْرَاكَ — Kavranamaz Büyüklük Kalıbı",
        explanation: "مَا أَدْرَاكَ مَا ... Kur'an'da 13 kez geçer. 'Sen ne bileceksin ... nedir?' yapısıyla kavramın insan idrakini aştığını ifade eder. Bu surede 17-18. ayetlerde iki kez tekrarlanır → yevmü'd-dîn'in azameti çift katmanlı vurgulanır.",
        rule: "مَا أَدْرَاكَ مَا X = 'X nedir, sen ne bileceksin?'\nأَدْرَى: د-ر-ي, IV. bâb (أَفْعَلَ)\nTekrar → kavranılamazlık derinleşir",
        examples: ["مَا أَدْرَاكَ مَا الحَاقَّة — 69:3", "مَا أَدْرَاكَ مَا لَيْلَةُ القَدْرِ — 97:2", "مَا أَدْرَاكَ مَا الحُطَمَة — 104:5"],
      },
      {
        title: "Tıbâk: أَبْرَار ↔ فُجَّار",
        explanation: "13-14. ayetler mükemmel bir tıbâk (antitez) çifti oluşturur. Yapısal paralellik: إِنَّ + X + لَفِي + Y. İçerik zıtlığı: أَبْرَار (iyiler) ↔ فُجَّار (fâcirler), نَعِيم (nimet) ↔ جَحِيم (cehennem). Hem sözcükler hem kavramlar zıt.",
        rule: "إِنَّ الأَبْرَارَ لَفِي نَعِيمٍ\nوَإِنَّ الفُجَّارَ لَفِي جَحِيمٍ\nAynı cümle yapısı, zıt içerik = tıbâk + mukâbele",
        examples: ["83:18 vs 83:7 (Mutaffifîn: aynı yapı)", "76:5-6 (İnsan: ebrâr detaylı)", "55:46+ (Rahmân: iki cennet çifti)"],
      },
    ],
    exercises: [
      generateRootQuiz(
        "S82-B03-Q01", "ٱلْأَبْرَارَ", "ب-ر-ر",
        ["ب-ر-أ", "ب-ر-ز", "ب-ر-ك"],
        "أَبْرَار: ب-ر-ر kökünden cem-i teksîr. بِرّ (iyilik), بَارّ (iyi kimse), مَبْرُور (kabul edilmiş). Birr = itaat ve iyilik.",
        ["ب-ر-ر"]
      ),
      generateWaznQuiz(
        "S82-B03-Q02", "نَعِيم",
        "فَعِيل (mübalağa / süreklilik kalıbı)",
        ["فَعُول (mübalağa)", "فِعَال (çoğul)", "مَفْعُول (ism-i mef'ûl)"],
        "نَعِيم: فَعِيل kalıbında masdar veya sıfat. ن-ع-م kökünden: sürekli nimet hali. جَحِيم de aynı kalıp (فَعِيل) → ses paralelliği.",
        ["ن-ع-م"]
      ),
      generateBalaghaQuiz(
        "S82-B03-Q03",
        "13-14. ayetlerdeki إِنَّ الأَبْرَارَ لَفِي نَعِيمٍ / وَإِنَّ الفُجَّارَ لَفِي جَحِيمٍ yapısı hangi belâgat sanatlarını bir arada barındırır?",
        "Tıbâk (zıtlık: ebrâr↔füccar, naîm↔cahîm) + Mukâbele (yapısal paralellik: aynı cümle kalıbı)",
        ["Sadece teşbîh (benzetme)", "Cinas (söz oyunu)", "İsti'âre (metafor)"],
        "İki ayet birebir aynı cümle yapısını paylaşır (إِنَّ X لَفِي Y) ama içerik tam zıttır. Bu hem tıbâk (anlam zıtlığı) hem mukâbele (yapısal paralellik) oluşturur. نَعِيم/جَحِيم aynı kalıpları ses benzerliği de ekler."
      ),
      {
        id: "S82-B03-Q04", type: "single_choice",
        question: "مَا أَدْرَاكَ sorusu 17-18. ayetlerde neden iki kez tekrarlanır?",
        options: [
          "O günün büyüklüğü bir tekrarla ifade edilemez — hayret çift katmanlı",
          "İlki geçmiş, ikincisi gelecek zamanı ifade eder",
          "İlki müminlere, ikincisi kâfirlere yöneliktir",
          "Kopyalama hatası (nüzul ile açıklanamaz)",
        ],
        correct: 0,
        explanation: "ثُمَّ مَا أَدْرَاكَ: ثُمَّ burada 'dahası, üstelik' anlamında. İlk مَا أَدْرَاكَ yetmedi, ikincisi eklenerek o günün kavranılamazlığı pekiştirildi. Kur'an'da bu çift tekrar çok nadir ve etkilidir.",
        relatedRoots: ["د-ر-ي"],
      },
      generateIrabQuiz(
        "S82-B03-Q05", "لِّلَّهِ",
        "Haber (câr-mecrûr) — الأَمْرُ'nun haberi",
        ["Muzâfun ileyh (mecrûr)", "Sıfat (mecrûr)", "Hâl (mecrûr)"],
        "وَالأَمْرُ يَوْمَئِذٍ لِلَّهِ: الأَمْرُ mübtedâ, لِلَّهِ haber. 'Emir o gün yalnız Allah'ındır.' Surenin kapanış cümlesi ve ana mesajı.",
        ["أ-ل-ه"]
      ),
      generateFillBlank(
        "S82-B03-Q06",
        "يَوْمَ لَا تَمْلِكُ نَفْسٌ _____ شَيْئًا وَالأَمْرُ يَوْمَئِذٍ لِلَّهِ",
        "لِنَفْسٍ", ["عَنْ نَفْسٍ", "بِنَفْسٍ", "مِنْ نَفْسٍ"],
        "Bir can başka bir can 'için' — hangi harf-i cer?",
        "لِنَفْسٍ: لِ (için) + نَفْس. O gün hiçbir can başka bir can için hiçbir şey yapamaz. İki nekre (belirsiz) tekrarı mutlak yalnızlığı vurgular.",
        ["ن-ف-س"]
      ),
      generateRootFamilyQuiz(
        "S82-B03-Q07", "ب-ر-ر",
        "بَرِّيَّة (çöl, kır)",
        ["أَبْرَار (iyiler)", "بِرّ (iyilik)", "بَارّ (iyi davranan)"],
        "بَرِّيَّة (çöl) farklı bir kök olan ب-ر-ي'den gelir (kırlık alan). أَبْرَار (iyiler, Beyyine+İnfitâr), بِرّ (iyilik, takvâ), بَارّ (iyi davranan) hepsi ب-ر-ر kökündendir."
      ),
    ],
  },
];

export default infitarLessons;
