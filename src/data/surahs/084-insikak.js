// ═══════════════════════════════════════════════════════════
// İNŞIKÂK SURESİ (84) — Pipeline Üretimi
// 2026-03-25: 2 bölüm, 25 ayet tam kapsam
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

const insikakLessons = [
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 1 — İNŞIKÂK 84:1-13
  // ═══════════════════════════════════════════════════════════
  {
    id: "S84-B01-insikak",
    title: "İnşikâk (1-13)",
    titleAr: "سُورَة الإنشقاق 1-13",
    stage: 2,
    level: 8,
    surah: 84,
    description: "Kıyamet günündeki kozmik değişimler ve insanın Allah'a kavuşması ile hesap gününde iki farklı insan grubunun akıbeti anlatılır.",
    verses: [
      {
        surah: 84, ayah: 1,
        arabic: "إِذَا ٱلسَّمَآءُ ٱنشَقَّتۡ",
        translation: "Gök yarılıp Rabbine boyun eğdiği zaman, ki gök boyun eğecektir.",
        words: [
          { arabic: "إِذَا", transliteration: "izâ", root: null, pos: "harf", meaning_tr: "ne zaman, o vakit", irab: "{Zarf-ı zaman} cümlesi. Şartî zaman bildiren edattır.", irab_short: "zarf-ı zaman", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلسَّمَآءُ", transliteration: "es-semâü", root: "س-م-و", pattern: "فَعَل", pos: "ism", meaning_tr: "gök, sema", irab: "{Fâil} konumunda müfred müennes. Rafe alemeti dammedir.", irab_short: "fâil, merfû", turkish_bridge: "Sema bu kökten", balagha_note: null },
          { arabic: "ٱنشَقَّتۡ", transliteration: "inşekkat", root: "ش-ق-ق", pattern: "انْفَعَلَ", pos: "fil", meaning_tr: "yarıldı, çatladı", irab: "{Fiil-i mâzî} VII. bâb, müennes, gâib sîgasında. Fâili es-semâüdür.", irab_short: "mâzî, VII. bâb", turkish_bridge: "Şak, şık bu kökten", balagha_note: "VII. bâb ile mübalağa ve şiddet anlamı" },
        ],
      },
      {
        surah: 84, ayah: 2,
        arabic: "وَأَذِنَتۡ لِرَبِّهَا وَحُقَّتۡ",
        translation: "Gök yarılıp Rabbine boyun eğdiği zaman, ki gök boyun eğecektir.",
        words: [
          { arabic: "وَأَذِنَتۡ", transliteration: "ve ezinet", root: "أ-ذ-ن", pattern: "فَعِلَ", pos: "fil", meaning_tr: "kulak verdi, boyun eğdi", irab: "{Fiil-i mâzî} I. bâb, müennes, gâib sîgasında. Vav atıf harfidir.", irab_short: "mâzî, I. bâb", turkish_bridge: "İzin bu kökten", balagha_note: null },
          { arabic: "لِرَبِّهَا", transliteration: "li-rabbihâ", root: "ر-ب-ب", pattern: "فَعْل", pos: "ism", meaning_tr: "Rabbine", irab: "{Câr-mecrûr} terkibi. Reb kelimesi lam harfi cerrile mecrur, hâ zamiri muzâf ileyhdir.", irab_short: "ism mecrur", turkish_bridge: "Rab bu kökten", balagha_note: null },
          { arabic: "وَحُقَّتۡ", transliteration: "ve hukkat", root: "ح-ق-ق", pattern: "فُعِّلَ", pos: "fil", meaning_tr: "layık görüldü, hak edildi", irab: "{Fiil-i mâzî} I. bâb mebni li'l-mechul, müennes. Vav atıf harfidir.", irab_short: "mâzî mechul", turkish_bridge: "Hak bu kökten", balagha_note: "Hazf sanatı - nâib-i fâil mahzuftur" },
        ],
      },
      {
        surah: 84, ayah: 3,
        arabic: "وَإِذَا ٱلۡأَرۡضُ مُدَّتۡ",
        translation: "Yer düzeltilip, içinde olanları dışarı atarak boşaldığı zaman ve yer Rabbine boyun eğdiği zaman, ki yer boyun eğecektir",
        words: [
          { arabic: "وَإِذَا", transliteration: "ve izâ", root: null, pos: "harf", meaning_tr: "ve ne zaman", irab: "Vav atıf harfi, izâ {zarf-ı zaman} edatıdır.", irab_short: "atıf + zarf", turkish_bridge: null, balagha_note: "İkinci kozmik hadiseye geçiş" },
          { arabic: "ٱلۡأَرۡضُ", transliteration: "el-ardu", root: "أ-ر-ض", pos: "ism", meaning_tr: "yer, yeryüzü", irab: "{Nâib-i fâil} konumunda müfred müennes. Rafe alemeti dammedir.", irab_short: "nâib-i fâil, merfû", turkish_bridge: "Arz bu kökten", balagha_note: null },
          { arabic: "مُدَّتۡ", transliteration: "muddet", root: "م-د-د", pattern: "فُعِّلَ", pos: "fil", meaning_tr: "uzatıldı, düzlendi", irab: "{Fiil-i mâzî} I. bâb mebni li'l-mechul, müennes. Nâib-i fâili el-arddur.", irab_short: "mâzî mechul", turkish_bridge: "Metot, imdat bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 84, ayah: 4,
        arabic: "وَأَلۡقَتۡ مَا فِيهَا وَتَخَلَّتۡ",
        translation: "Yer düzeltilip, içinde olanları dışarı atarak boşaldığı zaman ve yer Rabbine boyun eğdiği zaman, ki yer boyun eğecektir",
        words: [
          { arabic: "وَأَلۡقَتۡ", transliteration: "ve elkat", root: "ل-ق-ي", pattern: "أَفْعَلَ", pos: "fil", meaning_tr: "attı, fırlattı", irab: "{Fiil-i mâzî} IV. bâb, müennes, gâib sîgasında. Vav atıf harfidir.", irab_short: "mâzî, IV. bâb", turkish_bridge: null, balagha_note: null },
          { arabic: "مَا", transliteration: "mâ", root: null, pos: "ism", meaning_tr: "ne, her ne", irab: "{Mef'ûl bih} konumunda mevsul isim.", irab_short: "mef'ûl bih", turkish_bridge: null, balagha_note: null },
          { arabic: "فِيهَا", transliteration: "fîhâ", root: null, pos: "harf", meaning_tr: "onun içinde", irab: "{Câr-mecrûr} terkibi. Fî harfi cerri, hâ zamiri mecrurdur. Mâ'nın sılasıdır.", irab_short: "sıla cümlesi", turkish_bridge: null, balagha_note: null },
          { arabic: "وَتَخَلَّتۡ", transliteration: "ve tehallet", root: "خ-ل-و", pattern: "تَفَعَّلَ", pos: "fil", meaning_tr: "boşaldı, terkedildi", irab: "{Fiil-i mâzî} V. bâb, müennes, gâib sîgasında. Vav atıf harfidir.", irab_short: "mâzî, V. bâb", turkish_bridge: "Halvet bu kökten", balagha_note: "V. bâb ile temâm-ı eser anlamı" },
        ],
      },
      {
        surah: 84, ayah: 5,
        arabic: "وَأَذِنَتۡ لِرَبِّهَا وَحُقَّتۡ",
        translation: "Yer düzeltilip, içinde olanları dışarı atarak boşaldığı zaman ve yer Rabbine boyun eğdiği zaman, ki yer boyun eğecektir",
        words: [
          { arabic: "وَأَذِنَتۡ", transliteration: "ve ezinet", root: "أ-ذ-ن", pattern: "فَعِلَ", pos: "fil", meaning_tr: "kulak verdi, boyun eğdi", irab: "{Fiil-i mâzî} I. bâb, müennes, gâib sîgasında. Vav atıf harfidir.", irab_short: "mâzî, I. bâb", turkish_bridge: "İzin bu kökten", balagha_note: "2. ayette geçen ifadenin tekrarı - tekîd sanatı" },
          { arabic: "لِرَبِّهَا", transliteration: "li-rabbihâ", root: "ر-ب-ب", pattern: "فَعْل", pos: "ism", meaning_tr: "Rabbine", irab: "{Câr-mecrûr} terkibi. Reb kelimesi lam harfi cerrile mecrur, hâ zamiri muzâf ileyhdir.", irab_short: "ism mecrur", turkish_bridge: "Rab bu kökten", balagha_note: null },
          { arabic: "وَحُقَّتۡ", transliteration: "ve hukkat", root: "ح-ق-ق", pattern: "فُعِّلَ", pos: "fil", meaning_tr: "layık görüldü, hak edildi", irab: "{Fiil-i mâzî} I. bâb mebni li'l-mechul, müennes. Vav atıf harfidir.", irab_short: "mâzî mechul", turkish_bridge: "Hak bu kökten", balagha_note: "Hazf sanatı - nâib-i fâil mahzuftur" },
        ],
      },
      {
        surah: 84, ayah: 6,
        arabic: "يَـٰٓأَيُّهَا ٱلۡإِنسَٰنُ إِنَّكَ كَادِحٌ إِلَىٰ رَبِّكَ كَدۡحٗا فَمُلَٰقِيهِ",
        translation: "Ey insanoğlu! Sen Rabbine kavuşuncaya kadar çalışıp çabalarsın, sonunda O'na kavuşacaksın.",
        words: [
          { arabic: "يَـٰٓأَيُّهَا", transliteration: "yâ eyyühâ", root: null, pos: "harf", meaning_tr: "ey", irab: "{Nidâ edatı} ve {mevsuf} terkibi. Hitap için kullanılır.", irab_short: "nidâ edatı", turkish_bridge: null, balagha_note: "Dikkat çekici nidâ ile hitaba başlangıç" },
          { arabic: "ٱلۡإِنسَٰنُ", transliteration: "el-insân", root: "أ-ن-س", pattern: "فِعْلَان", pos: "ism", meaning_tr: "insan", irab: "{Münâdâ} konumunda mebni ale'l-damm.", irab_short: "münâdâ, mebni", turkish_bridge: "İnsan bu kökten", balagha_note: null },
          { arabic: "إِنَّكَ", transliteration: "inneke", root: null, pos: "harf", meaning_tr: "şüphesiz sen", irab: "{İnne harfi} ve muttasıl zamir. Kef zamiri ismidir.", irab_short: "huruf müşebbehe", turkish_bridge: null, balagha_note: null },
          { arabic: "كَادِحٌ", transliteration: "kâdihun", root: "ك-د-ح", pattern: "فَاعِل", pos: "ism", meaning_tr: "çalışan, çabalayan", irab: "{Haber-i inne} konumunda müfred müzekker. Tenvin ile merfudur.", irab_short: "haber-i inne", turkish_bridge: null, balagha_note: "Fâil kalıbıyla sürekli iş yapan anlamı" },
          { arabic: "إِلَىٰ", transliteration: "ilâ", root: null, pos: "harf", meaning_tr: "doğru, -e kadar", irab: "{Harf-i cer} gâye ve intihâ bildirir.", irab_short: "harf-i cer", turkish_bridge: null, balagha_note: null },
          { arabic: "رَبِّكَ", transliteration: "rabbike", root: "ر-ب-ب", pattern: "فَعْل", pos: "ism", meaning_tr: "Rabbine", irab: "{Ism-i mecrûr} ilâ harfi cerrile mecrur. Kef zamiri muzâf ileyhdir.", irab_short: "ism mecrur", turkish_bridge: "Rab bu kökten", balagha_note: null },
          { arabic: "كَدۡحٗا", transliteration: "kedhan", root: "ك-د-ح", pattern: "فَعْل", pos: "ism", meaning_tr: "çaba, emek", irab: "{Mef'ûl mutlak} manasında masdar. Kâdih kelimesini te'kîd eder.", irab_short: "mef'ûl mutlak", turkish_bridge: null, balagha_note: "Mef'ûl mutlak ile te'kîd sanatı" },
          { arabic: "فَمُلَٰقِيهِ", transliteration: "fe-mülâkîhi", root: "ل-ق-ي", pattern: "مُفَاعِل", pos: "ism", meaning_tr: "O'nunla karşılaşan", irab: "{Haber} konumunda müfred müzekker. Fâ harfi fer'iyye, hî zamiri muzâf ileyhdir.", irab_short: "haber", turkish_bridge: null, balagha_note: "Hazf sanatı - mübtedâ mahzuftur (ente)" },
        ],
      },
      {
        surah: 84, ayah: 7,
        arabic: "فَأَمَّا مَنۡ أُوتِيَ كِتَٰبَهُۥ بِيَمِينِهِۦ",
        translation: "Amel defteri kendisine sağından verilen kimse, kolay geçireceği bir hesaba çekilir ve arkadaşlarının yanına sevinçle döner.",
        words: [
          { arabic: "فَأَمَّا", transliteration: "fe-emmâ", root: null, pos: "harf", meaning_tr: "o halde, artık", irab: "Fâ fer'iyye harfi, emmâ {tafsîl edatı}dır. Şartî anlam taşır.", irab_short: "edat-ı tafsîl", turkish_bridge: null, balagha_note: "Tafsîl sanatı ile iki grubun ayrımı" },
          { arabic: "مَنۡ", transliteration: "men", root: null, pos: "ism", meaning_tr: "kim", irab: "{Mübtedâ} konumında mevsul isim.", irab_short: "mübtedâ", turkish_bridge: null, balagha_note: null },
          { arabic: "أُوتِيَ", transliteration: "ûtiye", root: "أ-ت-ي", pattern: "أُفْعِلَ", pos: "fil", meaning_tr: "verildi", irab: "{Fiil-i mâzî} IV. bâb mebni li'l-mechul, müzekker. Men kelimesinin sılasıdır.", irab_short: "mâzî mechul, IV. bâb", turkish_bridge: "İta bu kökten", balagha_note: null },
          { arabic: "كِتَٰبَهُۥ", transliteration: "kitâbehû", root: "ك-ت-ب", pattern: "فِعَال", pos: "ism", meaning_tr: "kitabı, defteri", irab: "{Nâib-i fâil} konumunda müfred müzekker. Hû zamiri muzâf ileyhdir.", irab_short: "nâib-i fâil", turkish_bridge: "Kitap bu kökten", balagha_note: null },
          { arabic: "بِيَمِينِهِۦ", transliteration: "bi-yemînihî", root: "ي-م-ن", pattern: "فَعِيل", pos: "ism", meaning_tr: "sağ eliyle", irab: "{Câr-mecrûr} terkibi. Bâ harfi cerri, hî zamiri muzâf ileyhdir.", irab_short: "câr-mecrûr", turkish_bridge: "Yemîn bu kökten", balagha_note: "Sağ el hayır ve bereket alameti" },
        ],
      },
      {
        surah: 84, ayah: 8,
        arabic: "فَسَوۡفَ يُحَاسَبُ حِسَابٗا يَسِيرٗا",
        translation: "Amel defteri kendisine sağından verilen kimse, kolay geçireceği bir hesaba çekilir ve arkadaşlarının yanına sevinçle döner.",
        words: [
          { arabic: "فَسَوۡفَ", transliteration: "fe-sevfe", root: null, pos: "harf", meaning_tr: "artık yakında", irab: "Fâ fer'iyye harfi, sevfe {harf-i istikbâl}dir.", irab_short: "harf istikbâl", turkish_bridge: null, balagha_note: null },
          { arabic: "يُحَاسَبُ", transliteration: "yuhâsebü", root: "ح-س-ب", pattern: "يُفَاعَلُ", pos: "fil", meaning_tr: "hesaba çekilir", irab: "{Fiil-i muzâri} III. bâb mebni li'l-mechul, müzekker. Men kelimesinin haberidir.", irab_short: "muzâri mechul, III. bâb", turkish_bridge: "Hesap bu kökten", balagha_note: null },
          { arabic: "حِسَابٗا", transliteration: "hisâben", root: "ح-س-ب", pattern: "فِعَال", pos: "ism", meaning_tr: "hesap", irab: "{Mef'ûl mutlak} konumında masdar. Tenvin ile mensuptur.", irab_short: "mef'ûl mutlak", turkish_bridge: "Hesap bu kökten", balagha_note: null },
          { arabic: "يَسِيرٗا", transliteration: "yesîren", root: "ي-س-ر", pattern: "فَعِيل", pos: "ism", meaning_tr: "kolay", irab: "{Sıfat} hisâb kelimesinin natidir. Tenvin ile mensuptur.", irab_short: "sıfat, mensûb", turkish_bridge: "Yüsr, yesâr bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 84, ayah: 9,
        arabic: "وَيَنقَلِبُ إِلَىٰٓ أَهۡلِهِۦ مَسۡرُورٗا",
        translation: "Amel defteri kendisine sağından verilen kimse, kolay geçireceği bir hesaba çekilir ve arkadaşlarının yanına sevinçle döner.",
        words: [
          { arabic: "وَيَنقَلِبُ", transliteration: "ve-yenkalibü", root: "ق-ل-ب", pattern: "يَنْفَعِلُ", pos: "fil", meaning_tr: "döner, geri çevrilir", irab: "{Fiil-i muzâri} VII. bâb, müzekker. Vav atıf harfidir.", irab_short: "muzâri, VII. bâb", turkish_bridge: "Kalp, inkılab bu kökten", balagha_note: null },
          { arabic: "إِلَىٰٓ", transliteration: "ilâ", root: null, pos: "harf", meaning_tr: "doğru", irab: "{Harf-i cer} gâye bildirir.", irab_short: "harf-i cer", turkish_bridge: null, balagha_note: null },
          { arabic: "أَهۡلِهِۦ", transliteration: "ehlihî", root: "أ-ه-ل", pattern: "فَعْل", pos: "ism", meaning_tr: "ailesine", irab: "{Ism-i mecrûr} ilâ harfi cerrile mecrur. Hî zamiri muzâf ileyhdir.", irab_short: "ism mecrur", turkish_bridge: "Ehil bu kökten", balagha_note: null },
          { arabic: "مَسۡرُورٗا", transliteration: "mesrûren", root: "س-ر-ر", pattern: "مَفْعُول", pos: "ism", meaning_tr: "sevinçli", irab: "{Hâl} konumunda müfred müzekker. Tenvin ile mensuptur.", irab_short: "hâl, mensûb", turkish_bridge: "Sürur bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 84, ayah: 10,
        arabic: "وَأَمَّا مَنۡ أُوتِيَ كِتَٰبَهُۥ وَرَآءَ ظَهۡرِهِۦ",
        translation: "Ama amel defteri kendisine arkasından verilen kimse: \"Mahvoldum\" diye bağırır ve çılgın alevli cehenneme girer.",
        words: [
          { arabic: "وَأَمَّا", transliteration: "ve-emmâ", root: null, pos: "harf", meaning_tr: "ve ama", irab: "Vav atıf harfi, emmâ {tafsîl edatı}dır. İkinci kısmı bildirir.", irab_short: "edat-ı tafsîl", turkish_bridge: null, balagha_note: "Tıbâk sanatı - birinci grupla zıtlık" },
          { arabic: "مَنۡ", transliteration: "men", root: null, pos: "ism", meaning_tr: "kim", irab: "{Mübtedâ} konumunda mevsul isim.", irab_short: "mübtedâ", turkish_bridge: null, balagha_note: null },
          { arabic: "أُوتِيَ", transliteration: "ûtiye", root: "أ-ت-ي", pattern: "أُفْعِلَ", pos: "fil", meaning_tr: "verildi", irab: "{Fiil-i mâzî} IV. bâb mebni li'l-mechul, müzekker. Men kelimesinin sılasıdır.", irab_short: "mâzî mechul, IV. bâb", turkish_bridge: "İta bu kökten", balagha_note: null },
          { arabic: "كِتَٰبَهُۥ", transliteration: "kitâbehû", root: "ك-ت-ب", pattern: "فِعَال", pos: "ism", meaning_tr: "kitabı", irab: "{Nâib-i fâil} konumunda müfred müzekker. Hû zamiri muzâf ileyhdir.", irab_short: "nâib-i fâil", turkish_bridge: "Kitap bu kökten", balagha_note: null },
          { arabic: "وَرَآءَ", transliteration: "verâe", root: "و-ر-ي", pattern: "فَعَال", pos: "ism", meaning_tr: "arkasından", irab: "{Zarf-ı mekân} konumunda mensuptur.", irab_short: "zarf-ı mekân", turkish_bridge: null, balagha_note: null },
          { arabic: "ظَهۡرِهِۦ", transliteration: "zahrihî", root: "ظ-ه-ر", pattern: "فَعْل", pos: "ism", meaning_tr: "sırtının", irab: "{Muzâf ileyh} konumunda mecrur. Hî zamiri muzâf ileyhdir.", irab_short: "muzâf ileyh", turkish_bridge: "Zâhir bu kökten", balagha_note: "Sol el yerine arkadan verilmesi daha beliğ ifade" },
        ],
      },
      {
        surah: 84, ayah: 11,
        arabic: "فَسَوۡفَ يَدۡعُواْ ثُبُورٗا",
        translation: "Ama amel defteri kendisine arkasından verilen kimse: \"Mahvoldum\" diye bağırır ve çılgın alevli cehenneme girer.",
        words: [
          { arabic: "فَسَوۡفَ", transliteration: "fe-sevfe", root: null, pos: "harf", meaning_tr: "artık yakında", irab: "Fâ fer'iyye harfi, sevfe {harf-i istikbâl}dir.", irab_short: "harf istikbâl", turkish_bridge: null, balagha_note: null },
          { arabic: "يَدۡعُواْ", transliteration: "yed'û", root: "د-ع-و", pattern: "يَفْعُو", pos: "fil", meaning_tr: "çağırır, bağırır", irab: "{Fiil-i muzâri} I. bâb, müzekker. Men kelimesinin haberidir.", irab_short: "muzâri, I. bâb", turkish_bridge: "Dua bu kökten", balagha_note: null },
          { arabic: "ثُبُورٗا", transliteration: "subûren", root: "ث-ب-ر", pattern: "فُعُول", pos: "ism", meaning_tr: "yıkım, helak", irab: "{Mef'ûl bih} konumında masdar. Tenvin ile mensuptur.", irab_short: "mef'ûl bih", turkish_bridge: null, balagha_note: "Mübalağa kalıbı ile şiddetli helak anlamı" },
        ],
      },
      {
        surah: 84, ayah: 12,
        arabic: "وَيَصۡلَىٰ سَعِيرًا",
        translation: "Ama amel defteri kendisine arkasından verilen kimse: \"Mahvoldum\" diye bağırır ve çılgın alevli cehenneme girer.",
        words: [
          { arabic: "وَيَصۡلَىٰ", transliteration: "ve-yaslâ", root: "ص-ل-ي", pattern: "يَفْعَى", pos: "fil", meaning_tr: "yanar, ateşe girer", irab: "{Fiil-i muzâri} I. bâb, müzekker. Vav atıf harfidir.", irab_short: "muzâri, I. bâb", turkish_bridge: "Salât bu kökten", balagha_note: null },
          { arabic: "سَعِيرًا", transliteration: "se'îren", root: "س-ع-ر", pattern: "فَعِيل", pos: "ism", meaning_tr: "alevli ateş", irab: "{Mef'ûl bih} konumunda müfred müzekker. Tenvin ile mensuptur.", irab_short: "mef'ûl bih", turkish_bridge: null, balagha_note: "Mübalağa kalıbı ile şiddetli alev anlamı" },
        ],
      },
      {
        surah: 84, ayah: 13,
        arabic: "إِنَّهُۥ كَانَ فِيٓ أَهۡلِهِۦ مَسۡرُورًا",
        translation: "Çünkü o, dünyada, adamlarının yanında iken zevk içindeydi.",
        words: [
          { arabic: "إِنَّهُۥ", transliteration: "innehû", root: null, pos: "harf", meaning_tr: "çünkü o", irab: "{İnne harfi} ve muttasıl zamir. Hû zamiri ismidir.", irab_short: "huruf müşebbehe", turkish_bridge: null, balagha_note: "Sebep bildirme - sebebiyye anlamında inne" },
          { arabic: "كَانَ", transliteration: "kâne", root: "ك-و-ن", pattern: "فَعَلَ", pos: "fil", meaning_tr: "idi", irab: "{Fiil-i nâkıs} mâzî, müzekker. İnne'nin haberidir.", irab_short: "mâzî nâkıs", turkish_bridge: "Kâin bu kökten", balagha_note: null },
          { arabic: "فِيٓ", transliteration: "fî", root: null, pos: "harf", meaning_tr: "içinde", irab: "{Harf-i cer} zarfiyyet bildirir.", irab_short: "harf-i cer", turkish_bridge: null, balagha_note: null },
          { arabic: "أَهۡلِهِۦ", transliteration: "ehlihî", root: "أ-ه-ل", pattern: "فَعْل", pos: "ism", meaning_tr: "ailesinin", irab: "{Ism-i mecrûr} fî harfi cerrile mecrur. Hî zamiri muzâf ileyhdir.", irab_short: "ism mecrur", turkish_bridge: "Ehil bu kökten", balagha_note: null },
          { arabic: "مَسۡرُورًا", transliteration: "mesrûren", root: "س-ر-ر", pattern: "مَفْعُول", pos: "ism", meaning_tr: "sevinçli", irab: "{Haber-i kâne} konumunda müfred müzekker. Tenvin ile mensuptur.", irab_short: "haber-i kâne", turkish_bridge: "Sürur bu kökten", balagha_note: "9. ayetle tekrar - ironi sanatı, dünya sevinci ile ahiret kederi arasındaki tezat" },
        ],
      },
    ],
    exercises: [],
  },
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 2 — İNŞIKÂK 84:14-25
  // ═══════════════════════════════════════════════════════════
  {
    id: "S84-B02-insikak",
    title: "İnşikâk (14-25)",
    titleAr: "سُورَة الإنشقاق 14-25",
    stage: 2,
    level: 8,
    surah: 84,
    description: "İnkârcıların ahiret hakkındaki yanlış düşünceleri eleştirilir ve kozmik varlıklara yemin edilerek insanlığın farklı hallerden geçeceği belirtilir. İnkârcılara azap müjdelenirken müminlere kesintisiz ecir vaad edilir.",
    verses: [
      {
        surah: 84, ayah: 14,
        arabic: "إِنَّهُۥ ظَنَّ أَن لَّن يَحُورَ",
        translation: "Zira; o, bir daha dirilip dönmeyeceğini sanmıştı.",
        words: [
          { arabic: "إِنَّهُ", transliteration: "innehû", root: null, pos: "harf", meaning_tr: "Şüphesiz o", irab: "{Hurûf-i müşebbehe bi'l-fi'l} olan إنَّ ile ona muttasıl olan hû {zamîri}. İnne'nin ismi olarak mahallen mensûbdur.", irab_short: "inne'nin ismi, mensûb", turkish_bridge: null, balagha_note: "Te'kîd edatı ile kesin yargı ifade edilir" },
          { arabic: "ظَنَّ", transliteration: "zanne", root: "ظ-ن-ن", pattern: "فَعَلَ", pos: "fil", meaning_tr: "sanmak, zannetti", irab: "{Fiil-i mâzî}, I. bâb. Fâili gizli zamîr hüve olup önceki kişiye râcidir. İnne cümlesinin haberidir.", irab_short: "mâzî, I. bâb", turkish_bridge: "Zan kelimesi bu kökten", balagha_note: null },
          { arabic: "أَن", transliteration: "en", root: null, pos: "harf", meaning_tr: "ki, -ceğini", irab: "{Hurûf-i masdariyye} olup sonrasındaki fiille birlikte masdar anlamı verir. Zan fiilinin mef'ûlü bihidir.", irab_short: "masdariyye", turkish_bridge: null, balagha_note: null },
          { arabic: "لَّن", transliteration: "len", root: null, pos: "harf", meaning_tr: "asla -meyecek", irab: "{Harf-i nefy} olup muzâri fiili mensûb yapar ve gelecek zamanda kesin nefyi ifade eder.", irab_short: "nefy ve nasb edatı", turkish_bridge: null, balagha_note: "Gelecekte kesin olumsuzluk ifadesi" },
          { arabic: "يَحُورَ", transliteration: "yehûre", root: "ح-و-ر", pattern: "يَفْعُل", pos: "fil", meaning_tr: "dönmek, geri gelecek", irab: "{Fiil-i muzâri} olup len edatıyla mensûb olmuştur. Fâili gizli zamîr hüvedir.", irab_short: "muzâri, mensûb", turkish_bridge: null, balagha_note: null },
        ],
      },
      {
        surah: 84, ayah: 15,
        arabic: "بَلَىٰٓۚ إِنَّ رَبَّهُۥ كَانَ بِهِۦ بَصِيرٗا",
        translation: "Bilin ki, Rabbi onu şüphesiz görmekteydi.",
        words: [
          { arabic: "بَلَىٰ", transliteration: "belâ", root: null, pos: "harf", meaning_tr: "evet, bilakis", irab: "{Harf-i icâb} olup olumsuz soruyu veya ifadeyi olumlar. Önceki zannetmenin yanlış olduğunu belirtir.", irab_short: "icâb edatı", turkish_bridge: null, balagha_note: "Önceki olumsuz düşünceyi kesin şekilde reddeder" },
          { arabic: "إِنَّ", transliteration: "inne", root: null, pos: "harf", meaning_tr: "şüphesiz", irab: "{Hurûf-i müşebbehe bi'l-fi'l} olup cümleye te'kîd anlamı katar. İsmini mensûb, haberini merfû yapar.", irab_short: "te'kîd edatı", turkish_bridge: null, balagha_note: null },
          { arabic: "رَبَّهُ", transliteration: "rabbehû", root: "ر-ب-ب", pattern: "فَعْل", pos: "ism", meaning_tr: "onun Rabbi", irab: "{İnne'nin ismi} olup mensûbdur. Ona muttasıl hû zamîri {muzâf ileyhi} olarak mecrûrdur.", irab_short: "inne'nin ismi, mensûb", turkish_bridge: "Rab kelimesi bu kökten", balagha_note: null },
          { arabic: "كَانَ", transliteration: "kâne", root: "ك-و-ن", pattern: "فَعَلَ", pos: "fil", meaning_tr: "idi, olmak", irab: "{Fiil-i nâkıs} olup mâzî sigasındadır. İsmi gizli zamîr hüve olup rabbehû'ya râcidir. Cümlenin tamamı inne'nin haberidir.", irab_short: "nâkıs, mâzî", turkish_bridge: null, balagha_note: "Geçmişteki sürekli görmeyi ifade eder" },
          { arabic: "بِهِ", transliteration: "bihî", root: null, pos: "harf", meaning_tr: "onu", irab: "Bâ {harfi cerri} ile muttasıl hî {zamîri}. Câr-mecrûr olarak kâne'ye müteallik {hâl} veya {zarf} konumundadır.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "بَصِيرًا", transliteration: "basîren", root: "ب-ص-ر", pattern: "فَعِيل", pos: "ism", meaning_tr: "gören, basîret sahibi", irab: "{Kâne'nin haberi} olup mensûbdur. Fâil anlamında sıfat-ı müşebbehe formundadır.", irab_short: "kâne'nin haberi, mensûb", turkish_bridge: "Basar, basîret bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 84, ayah: 16,
        arabic: "فَلَآ أُقۡسِمُ بِٱلشَّفَقِ",
        translation: "Akşamın alaca karanlığına and olsun;",
        words: [
          { arabic: "فَلَا", transliteration: "felâ", root: null, pos: "harf", meaning_tr: "şimdi, o halde", irab: "Fâ {harfi atıf} ile lâ {zâide}. Burda lâ ziyade olup kasemi te'kîd eder. Yemin cümlesini başlatır.", irab_short: "atıf + zâide", turkish_bridge: null, balagha_note: "Yemin formülünün güçlü başlangıcı" },
          { arabic: "أُقْسِمُ", transliteration: "uksimü", root: "ق-س-م", pattern: "أُفْعِل", pos: "fil", meaning_tr: "yemin ederim", irab: "{Fiil-i muzâri}, IV. bâb. Fâili gizli zamîr ene olup birinci şahsı ifade eder. {Fiil-i kasem}dir.", irab_short: "muzâri, IV. bâb", turkish_bridge: "Kasem bu kökten", balagha_note: null },
          { arabic: "بِالشَّفَقِ", transliteration: "biş-şefeği", root: "ش-ف-ق", pattern: "فَعَل", pos: "ism", meaning_tr: "akşam alacakaranlığı", irab: "Bâ {harfi cerri} ile {şefek}. Câr-mecrûr olup kasem filine müteallik {bi harfi} ile {muksemin bih}tir.", irab_short: "muksemin bih, mecrûr", turkish_bridge: "Şafak bu kökten", balagha_note: "Doğal güzelliklere yemin atmosfer yaratır" },
        ],
      },
      {
        surah: 84, ayah: 17,
        arabic: "وَٱلَّيۡلِ وَمَا وَسَقَ",
        translation: "Geceye ve gecenin içinde olan şeylere and olsun;",
        words: [
          { arabic: "وَاللَّيْلِ", transliteration: "vel-leyli", root: "ل-ي-ل", pattern: "فَعْل", pos: "ism", meaning_tr: "gece", irab: "Vâv {harfi atıf} ile el-leyl. Şefek'e atıf olarak {muksemin bih} konumunda mecrûrdur.", irab_short: "muksemin bih, mecrûr", turkish_bridge: "Leyl, leylî bu kökten", balagha_note: "Gece ve içindekiler atmosferi" },
          { arabic: "وَمَا", transliteration: "vemâ", root: null, pos: "ism", meaning_tr: "ve her ne", irab: "Vâv {harfi atıf} ile mâ {ism-i mevsûle}. Leyl'e atıf olarak mecrûrdur ve sonrasındaki sıla ile tamamlanır.", irab_short: "mevsûle, mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "وَسَقَ", transliteration: "veseka", root: "و-س-ق", pattern: "فَعَلَ", pos: "fil", meaning_tr: "topladı, içinde barındırdı", irab: "{Fiil-i mâzî}, I. bâb. Fâili gizli zamîr olup el-leyl'e râcidir. Mâ'nın {sılasıdır}.", irab_short: "mâzî sıla, I. bâb", turkish_bridge: null, balagha_note: "Gecenin kapsayıcılığına vurgu" },
        ],
      },
      {
        surah: 84, ayah: 18,
        arabic: "وَٱلۡقَمَرِ إِذَا ٱتَّسَقَ",
        translation: "Dolunay halindeki aya and olsun ki:",
        words: [
          { arabic: "وَالْقَمَرِ", transliteration: "vel-kameri", root: "ق-م-ر", pattern: "فَعَل", pos: "ism", meaning_tr: "ay", irab: "Vâv {harfi atıf} ile el-kamer. Önceki muksemin bihlere atıf olarak mecrûrdur.", irab_short: "muksemin bih, mecrûr", turkish_bridge: "Kamer bu kökten", balagha_note: null },
          { arabic: "إِذَا", transliteration: "izâ", root: null, pos: "harf", meaning_tr: "ne zaman", irab: "{Zarf-ı zamân} olup şart anlamında gelecek fiille müteallik zamana delalet eder.", irab_short: "zaman zarfı", turkish_bridge: null, balagha_note: null },
          { arabic: "اتَّسَقَ", transliteration: "itteseka", root: "و-س-ق", pattern: "افْتَعَلَ", pos: "fil", meaning_tr: "dolunay oldu, tamamlandı", irab: "{Fiil-i mâzî}, VIII. bâb. Fâili gizli zamîr hüve olup el-kamer'e râcidir. İzâ'nın fiilidir.", irab_short: "mâzî, VIII. bâb", turkish_bridge: null, balagha_note: "Ayın kemâle erme durumu" },
        ],
      },
      {
        surah: 84, ayah: 19,
        arabic: "لَتَرۡكَبُنَّ طَبَقًا عَن طَبَقٖ",
        translation: "Şüphesiz siz bir durumdan diğerine uğratılacaksınız.",
        words: [
          { arabic: "لَتَرْكَبُنَّ", transliteration: "leterkebünne", root: "ر-ك-ب", pattern: "تَفْعَل", pos: "fil", meaning_tr: "mutlaka bineceksiniz, geçeceksiniz", irab: "Lâm-ı kasem ile {fiil-i muzâri} ve {nûn-ı te'kîd-i sakîle}. Fâili muttasıl vâv zamîri olup {cevâb-ı kasem}dir.", irab_short: "cevab-ı kasem, muzâri", turkish_bridge: "Râkib, merkeb bu kökten", balagha_note: "Kasemle te'kîd edilen kesin gelecek vaadi" },
          { arabic: "طَبَقًا", transliteration: "tabekan", root: "ط-ب-ق", pattern: "فَعَل", pos: "ism", meaning_tr: "tabaka, hal", irab: "{Hâl} olarak mensûb olup durumu ifade eder. Takdîr-i kelâm: hâlen fî tabak.", irab_short: "hâl, mensûb", turkish_bridge: "Tabaka bu kökten", balagha_note: null },
          { arabic: "عَن", transliteration: "an", root: null, pos: "harf", meaning_tr: "-den", irab: "{Harf-i cerr} olup mücâveze anlamı verir. Sonrasındaki kelimeyi mecrûr yapar.", irab_short: "harf-i cerr", turkish_bridge: null, balagha_note: null },
          { arabic: "طَبَقٍ", transliteration: "tabakin", root: "ط-ب-ق", pattern: "فَعَل", pos: "ism", meaning_tr: "tabaka", irab: "An harfi cerriyle {mecrûr} olup {mecrurunbihi}dir. Birinci tabak ile birlikte halden hale geçişi ifade eder.", irab_short: "mecrûr", turkish_bridge: "Tabaka bu kökten", balagha_note: "Tekrar ile halden hale geçiş vurgulanır" },
        ],
      },
      {
        surah: 84, ayah: 20,
        arabic: "فَمَا لَهُمۡ لَا يُؤۡمِنُونَ",
        translation: "Onlara ne oluyor da inanmıyorlar?",
        words: [
          { arabic: "فَمَا", transliteration: "femâ", root: null, pos: "ism", meaning_tr: "ne var ki", irab: "Fâ harfi ile mâ {ism-i istifhâm}. {Mübtedâ} olup taaccüb ve inkâr anlamında istifham ifade eder.", irab_short: "mübtedâ, istifhâm", turkish_bridge: null, balagha_note: "İstifhâm-ı inkârî ile şaşkınlık" },
          { arabic: "لَهُمْ", transliteration: "lehüm", root: null, pos: "harf", meaning_tr: "onlara", irab: "Lâm {harfi cerri} ile hüm {zamîri}. {Câr-mecrûr} olup mâ'nın {haberi} yerine geçer.", irab_short: "haber, câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "لَا", transliteration: "lâ", root: null, pos: "harf", meaning_tr: "değil", irab: "{Harf-i nefy} olup sonrasındaki fiili nefyeder. Cümle hâliyye olup vakvı izah eder.", irab_short: "nefy edatı", turkish_bridge: null, balagha_note: null },
          { arabic: "يُؤْمِنُونَ", transliteration: "yu'minûne", root: "أ-م-ن", pattern: "يُفْعِل", pos: "fil", meaning_tr: "iman etmek", irab: "{Fiil-i muzâri}, IV. bâb. Fâili muttasıl vâv zamîri olup üçüncü şahıs cemiye delalet eder.", irab_short: "muzâri, IV. bâb", turkish_bridge: "İman, emin, emniyyet bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 84, ayah: 21,
        arabic: "وَإِذَا قُرِئَ عَلَيۡهِمُ ٱلۡقُرۡءَانُ لَا يَسۡجُدُونَۤ",
        translation: "Onlara Kuran okunduğu zaman neden secde etmiyorlar?",
        words: [
          { arabic: "وَإِذَا", transliteration: "ve izâ", root: null, pos: "harf", meaning_tr: "ve ne zaman", irab: "Vâv {harfi atıf} ile izâ {zarfı}. Önceki duruma atıf olarak başka bir durum daha bildirir.", irab_short: "atıf + zaman zarfı", turkish_bridge: null, balagha_note: null },
          { arabic: "قُرِئَ", transliteration: "kuri'e", root: "ق-ر-أ", pattern: "فُعِلَ", pos: "fil", meaning_tr: "okundu", irab: "{Fiil-i mâzî} {mebnî li'l-mechûl} olup I. bâb'dan {mechuul} formundadır. Nâib-i fâili el-Kur'an'dır.", irab_short: "mâzî mechûl, I. bâb", turkish_bridge: "Kur'an, kıraat bu kökten", balagha_note: null },
          { arabic: "عَلَيْهِمُ", transliteration: "aleyhimü", root: null, pos: "harf", meaning_tr: "onlara", irab: "Alâ {harfi cerri} ile hİm {zamîri}. {Câr-mecrûr} olarak kuri'e filine müteallik {zarf} konumundadır.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "الْقُرْآنُ", transliteration: "el-kur'ânü", root: "ق-ر-أ", pattern: "فُعْلَان", pos: "ism", meaning_tr: "Kur'an", irab: "{Nâib-i fâil} olup merfûdur. Mechûl fiilin fâili yerine geçen unsurdur.", irab_short: "nâib-i fâil, merfû", turkish_bridge: "Kur'an bu kökten", balagha_note: null },
          { arabic: "لَا", transliteration: "lâ", root: null, pos: "harf", meaning_tr: "değil", irab: "{Harf-i nefy} olup sonrasındaki fiili nefyeder. Ana cümlenin cevabı konumundadır.", irab_short: "nefy edatı", turkish_bridge: null, balagha_note: null },
          { arabic: "يَسْجُدُونَ", transliteration: "yescüdûne", root: "س-ج-د", pattern: "يَفْعُل", pos: "fil", meaning_tr: "secde etmek", irab: "{Fiil-i muzâri}, I. bâb. Fâili muttasıl vâv zamîri olup üçüncü şahıs cemiye delalet eder.", irab_short: "muzâri, I. bâb", turkish_bridge: "Secde, mescid bu kökten", balagha_note: "Kur'an okununca secde etmeme eleştirisi" },
        ],
      },
      {
        surah: 84, ayah: 22,
        arabic: "بَلِ ٱلَّذِينَ كَفَرُواْ يُكَذِّبُونَ",
        translation: "Aksine, inkarcılar yalanlıyorlar.",
        words: [
          { arabic: "بَلِ", transliteration: "bel", root: null, pos: "harf", meaning_tr: "bilakis, aksine", irab: "{Harf-i idrâb} olup öncekinden vazgeçip yeni bir hükme geçişi ifade eder.", irab_short: "idrâb edatı", turkish_bridge: null, balagha_note: "Konuyu başka açıdan ele alış" },
          { arabic: "الَّذِينَ", transliteration: "ellezîne", root: null, pos: "ism", meaning_tr: "ki onlar", irab: "{İsm-i mevsûl} olup {mübtedâ} konumunda merfûdur. Sonrasındaki sıla ile tamamlanır.", irab_short: "mübtedâ mevsûle, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "كَفَرُوا", transliteration: "keferû", root: "ك-ف-ر", pattern: "فَعَل", pos: "fil", meaning_tr: "inkâr ettiler", irab: "{Fiil-i mâzî}, I. bâb. Fâili muttasıl vâv zamîri olup üçüncü şahıs cemiye delalet eder. Mevsûlün {sılasıdır}.", irab_short: "mâzî sıla, I. bâb", turkish_bridge: "Küfür, kâfir bu kökten", balagha_note: null },
          { arabic: "يُكَذِّبُونَ", transliteration: "yükezzibûne", root: "ك-ذ-ب", pattern: "يُفَعِّل", pos: "fil", meaning_tr: "yalanlamak", irab: "{Fiil-i muzâri}, II. bâb. Fâili muttasıl vâv zamîri olup mübtedanın {haberi} konumundadır.", irab_short: "haber, muzâri, II. bâb", turkish_bridge: "Kizb, kezzâb bu kökten", balagha_note: "Sürekli yalanlamaları vurgulanır" },
        ],
      },
      {
        surah: 84, ayah: 23,
        arabic: "وَٱللَّهُ أَعۡلَمُ بِمَا يُوعُونَ",
        translation: "Oysa, Allah, onların sakladıklarını çok iyi bilir.",
        words: [
          { arabic: "وَاللَّهُ", transliteration: "vallâhü", root: "إ-ل-ه", pos: "ism", meaning_tr: "Allah", irab: "Vâv harfi ile Allah {lafzatü'l-celâl}. {Mübtedâ} olup merfûdur.", irab_short: "mübtedâ, merfû", turkish_bridge: "İlah bu kökten", balagha_note: null },
          { arabic: "أَعْلَمُ", transliteration: "a'lemü", root: "ع-ل-م", pattern: "أَفْعَل", pos: "ism", meaning_tr: "daha iyi bilen", irab: "{İsm-i tafdîl} olup {haber} konumunda merfûdur. Superlative anlamda mutlak üstünlük bildirir.", irab_short: "haber, merfû", turkish_bridge: "İlim, âlim, ma'lum bu kökten", balagha_note: "Allah'ın mutlak ilmi vurgulanır" },
          { arabic: "بِمَا", transliteration: "bimâ", root: null, pos: "ism", meaning_tr: "-i", irab: "Bâ {harfi cerri} ile mâ {ism-i mevsûle}. A'lem sıfatına müteallik {câr-mecrûr}dur.", irab_short: "câr-mecrûr mevsûle", turkish_bridge: null, balagha_note: null },
          { arabic: "يُوعُونَ", transliteration: "yû'ûne", root: "و-ع-ي", pattern: "يَفْعِل", pos: "fil", meaning_tr: "saklıyorlar, içlerinde barındırıyorlar", irab: "{Fiil-i muzâri}, I. bâb. Fâili muttasıl vâv zamîri olup mevsûlün {sılasıdır}.", irab_short: "muzâri sıla, I. bâb", turkish_bridge: "Va'y, va'î bu kökten", balagha_note: "Gizli düşüncelerin bilinmesi" },
        ],
      },
      {
        surah: 84, ayah: 24,
        arabic: "فَبَشِّرۡهُم بِعَذَابٍ أَلِيمٍ",
        translation: "Onlara can yakıcı azabı müjde et.",
        words: [
          { arabic: "فَبَشِّرْهُمْ", transliteration: "febeşşirhüm", root: "ب-ش-ر", pattern: "فَعِّل", pos: "fil", meaning_tr: "müjdele onları", irab: "Fâ {harfi atıf} ile {fiil-i emr}, II. bâb. Muttasıl hüm zamîri {mef'ûlün bih} konumunda mensûbdur.", irab_short: "emr, II. bâb", turkish_bridge: "Beşâret, mübeşşir bu kökten", balagha_note: "İronik müjde - azabı müjde olarak takdim" },
          { arabic: "بِعَذَابٍ", transliteration: "bi'azâbin", root: "ع-ذ-ب", pattern: "فَعَال", pos: "ism", meaning_tr: "azab ile", irab: "Bâ {harfi cerri} ile azâb. {Câr-mecrûr} olup beşşir filine müteallik {bi harfi}yle getirilir.", irab_short: "câr-mecrûr", turkish_bridge: "Azab, mu'azzeb bu kökten", balagha_note: null },
          { arabic: "أَلِيمٍ", transliteration: "elîmin", root: "أ-ل-م", pattern: "فَعِيل", pos: "ism", meaning_tr: "acı verici", irab: "{Sıfat} olup mevsûfü olan azaba tâbi olarak mecrûrdur. Fâil anlamında sıfat-ı müşebbehededir.", irab_short: "sıfat, mecrûr", turkish_bridge: "Elem, me'lum bu kökten", balagha_note: "Azabın şiddetli oluşu" },
        ],
      },
      {
        surah: 84, ayah: 25,
        arabic: "إِلَّا ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّـٰلِحَٰتِ لَهُمۡ أَجۡرٌ غَيۡرُ مَمۡنُونِۭ",
        translation: "Yalnız, inanıp yararlı işler işleyenlere, onlara, kesintisiz ecir vardır.",
        words: [
          { arabic: "إِلَّا", transliteration: "illâ", root: null, pos: "harf", meaning_tr: "ancak, yalnız", irab: "{Harf-i istisna} olup önceki hükümden bu grubu ayırır. Sonrasındaki kelime {müstesnâ}dır.", irab_short: "istisna edatı", turkish_bridge: null, balagha_note: "Müminler istisnası" },
          { arabic: "الَّذِينَ", transliteration: "ellezîne", root: null, pos: "ism", meaning_tr: "ki onlar", irab: "{İsm-i mevsûl} olup {müstesnâ} konumunda merfûdur. Munkatı' istisna olduğu için merfû gelir.", irab_short: "müstesnâ, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "آمَنُوا", transliteration: "âmenû", root: "أ-م-ن", pattern: "فَعَل", pos: "fil", meaning_tr: "iman ettiler", irab: "{Fiil-i mâzî}, IV. bâb anlamında. Fâili muttasıl vâv zamîri olup mevsûlün {sılasıdır}.", irab_short: "mâzî sıla, I. bâb", turkish_bridge: "İman, emin bu kökten", balagha_note: null },
          { arabic: "وَعَمِلُوا", transliteration: "ve'amilû", root: "ع-م-ل", pattern: "فَعِل", pos: "fil", meaning_tr: "ve amel ettiler", irab: "Vâv {harfi atıf} ile {fiil-i mâzî}, I. bâb. Âmenû'ya atıf olarak sıla içinde yer alır.", irab_short: "mâzî sıla, I. bâb", turkish_bridge: "Amel bu kökten", balagha_note: null },
          { arabic: "الصَّالِحَاتِ", transliteration: "es-sâlihâti", root: "ص-ل-ح", pattern: "فَاعِل", pos: "ism", meaning_tr: "salih ameller", irab: "{Mef'ûlün bih} olup amile filine müteallik mensûbdur. Müennes ceminin sâlim cemi formundadır.", irab_short: "mef'ûlün bih, mensûb", turkish_bridge: "Salâh, ıslah bu kökten", balagha_note: null },
          { arabic: "لَهُمْ", transliteration: "lehüm", root: null, pos: "harf", meaning_tr: "onlara", irab: "Lâm {harfi cerri} ile hüm {zamîri}. Yeni cümlenin {haberi mukaddem} olarak câr-mecrûr konumundadır.", irab_short: "haber mukaddem", turkish_bridge: null, balagha_note: null },
          { arabic: "أَجْرٌ", transliteration: "ecrun", root: "أ-ج-ر", pattern: "فَعْل", pos: "ism", meaning_tr: "ecir, mükâfat", irab: "{Mübtedâ muahhar} olup merfûdur. Önceki lehüm câr-mecrûru onun haberidir.", irab_short: "mübtedâ muahhar, merfû", turkish_bridge: "Ecir bu kökten", balagha_note: null },
          { arabic: "غَيْرُ", transliteration: "gayru", root: "غ-ي-ر", pattern: "فَعْل", pos: "ism", meaning_tr: "değil, olmayan", irab: "{Sıfat} olup mevsûfü ecir'e tâbi olarak merfûdur. Sonrasındaki kelimeyi muzâf ileyh yapar.", irab_short: "sıfat, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "مَمْنُونٍ", transliteration: "memnûnin", root: "م-ن-ن", pattern: "مَفْعُول", pos: "ism", meaning_tr: "kesilmiş, eksiltilmiş", irab: "{Muzâf ileyh} olup mecrûrdur. İsm-i mef'ûl formunda olup kesintiye uğramış anlamındadır.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "Men, minnet bu kökten", balagha_note: "Ecrin ebedî ve tam oluşu" },
        ],
      },
    ],
    exercises: [],
  },
];

export default insikakLessons;
