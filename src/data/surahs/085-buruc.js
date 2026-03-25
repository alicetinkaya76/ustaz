// ═══════════════════════════════════════════════════════════
// BURÛC SURESİ (85) — Pipeline Üretimi
// 2026-03-25: 2 bölüm, 22 ayet tam kapsam
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

const burucLessons = [
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 1 — BURÛC 85:1-10
  // ═══════════════════════════════════════════════════════════
  {
    id: "S85-B01-buruc",
    title: "Burûc (1-10)",
    titleAr: "سُورَة البروج 1-10",
    stage: 2,
    level: 8,
    surah: 85,
    description: "Bu bölüm burçlu gökyüzü, vaad olunan gün ve şahitlik eden ile edilene yapılan yemin ile başlayıp, hendek sahiplerinin lanetlenmesi ve iman eden müminlere işkence yapanların azabını konu alır.",
    verses: [
      {
        surah: 85, ayah: 1,
        arabic: "وَٱلسَّمَآءِ ذَاتِ ٱلۡبُرُوجِ",
        translation: "İçinde burçları bulunan göğe and olsun;",
        words: [
          { arabic: "وَٱلسَّمَآءِ", transliteration: "ves-semâi", root: "س-م-و", pattern: "فَعَاء", pos: "ism", meaning_tr: "ve gökyüzüne", irab: "Vâv {kasem harfi}, es-semâi {muḳsem bih} mecrûr olup cârr-ı mecrûr ile beraber müte'allik-i fi'l-i muḳadderdir.", irab_short: "mecrûr, kasem", turkish_bridge: "Sema bu kökten", balagha_note: "Kasem üslubu ile konuya güçlü giriş yapılmış" },
          { arabic: "ذَاتِ", transliteration: "zâti", root: null, pos: "ism", meaning_tr: "sahip olan", irab: "{Sıfat} es-semâi'nin sıfatı olup mecrûrdur, muzâftır.", irab_short: "sıfat, mecrûr", turkish_bridge: "Zat bu kelimeden", balagha_note: null },
          { arabic: "ٱلۡبُرُوجِ", transliteration: "el-burûci", root: "ب-ر-ج", pattern: "فُعُول", pos: "ism", meaning_tr: "burçların", irab: "{Muzâf ileyh} mecrûr olup zât kelimesinin muzâf ileyhidir.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "Burç bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 85, ayah: 2,
        arabic: "وَٱلۡيَوۡمِ ٱلۡمَوۡعُودِ",
        translation: "Söz verilen kıyamet gününe and olsun;",
        words: [
          { arabic: "وَٱلۡيَوۡمِ", transliteration: "vel-yevmi", root: "ي-و-م", pattern: "فَعْل", pos: "ism", meaning_tr: "ve güne", irab: "Vâv {kasem harfi}, el-yevmi {muḳsem bih} mecrûr olup bir önceki kasem ile atıf yapılmıştır.", irab_short: "mecrûr, kasem", turkish_bridge: "Yevm bu kökten", balagha_note: null },
          { arabic: "ٱلۡمَوۡعُودِ", transliteration: "el-mev'ûdi", root: "و-ع-د", pattern: "مَفْعُول", pos: "ism", meaning_tr: "vaad olunan", irab: "{Sıfat} el-yevm kelimesinin sıfatı olup mecrûrdur.", irab_short: "sıfat, mecrûr", turkish_bridge: "Vaad, mîâd bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 85, ayah: 3,
        arabic: "وَشَاهِدٖ وَمَشۡهُودٖ",
        translation: "Şahitlik edene ve edilene and olsun ki, insanlar öldükten sonra diriltileceklerdir.",
        words: [
          { arabic: "وَشَاهِدٖ", transliteration: "ve şâhidin", root: "ش-ه-د", pattern: "فَاعِل", pos: "ism", meaning_tr: "ve şahitlik edene", irab: "Vâv {kasem harfi}, şâhidin {muḳsem bih} mecrûr olup önceki kasemlerle atıf yapılmıştır.", irab_short: "mecrûr, kasem", turkish_bridge: "Şâhid, müşâhede bu kökten", balagha_note: null },
          { arabic: "وَمَشۡهُودٖ", transliteration: "ve meşhûdin", root: "ش-ه-د", pattern: "مَفْعُول", pos: "ism", meaning_tr: "ve şahitlik edilene", irab: "Vâv {atıf harfi}, meşhûdin {ma'tûf} şâhid kelimesi üzerine atıf yapılmış olup mecrûrdur.", irab_short: "ma'tûf, mecrûr", turkish_bridge: "Meşhûd bu kökten", balagha_note: "Şâhid-meşhûd arasında tıbâk sanatı vardır" },
        ],
      },
      {
        surah: 85, ayah: 4,
        arabic: "قُتِلَ أَصۡحَٰبُ ٱلۡأُخۡدُودِ",
        translation: "Hazırladıkları hendekleri, tutuşturulmuş ateşle doldurarak onun çevresinde oturup, inanmış kimselere dinlerinden dönmeleri için yaptıkları işkenceleri seyredenler kahrolmuştur!",
        words: [
          { arabic: "قُتِلَ", transliteration: "ḳutile", root: "ق-ت-ل", pattern: "فُعِلَ", pos: "fil", meaning_tr: "lanetlendi, kahroldu", irab: "{Fiil-i mâzî} meçhûl, I. bâb olup mecâzî anlamda la'net ve helâk manasında kullanılmıştır.", irab_short: "mâzî meçhûl, I. bâb", turkish_bridge: "Katl bu kökten", balagha_note: "Dua cümlesinde mecâzî anlam ile şiddetli kınama" },
          { arabic: "أَصۡحَٰبُ", transliteration: "ashâbu", root: "ص-ح-ب", pattern: "أَفْعَال", pos: "ism", meaning_tr: "sahipleri", irab: "{Nâib-i fâil} merfû olup muzâftır.", irab_short: "nâib-i fâil, merfû", turkish_bridge: "Sâhib, ashâb bu kökten", balagha_note: null },
          { arabic: "ٱلۡأُخۡدُودِ", transliteration: "el-uhdûdi", root: "خ-د-د", pattern: "أُفْعُول", pos: "ism", meaning_tr: "hendeğin", irab: "{Muzâf ileyh} mecrûr olup ashâb kelimesinin muzâf ileyhidir.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: null, balagha_note: null },
        ],
      },
      {
        surah: 85, ayah: 5,
        arabic: "ٱلنَّارِ ذَاتِ ٱلۡوَقُودِ",
        translation: "O çıralı ateşin,",
        words: [
          { arabic: "ٱلنَّارِ", transliteration: "en-nâri", root: "ن-و-ر", pattern: "فَعَال", pos: "ism", meaning_tr: "ateşin", irab: "{Bedel} el-uhdûd kelimesinin bedeli olup mecrûrdur, ashâb kelimesine de muzâf olarak i'râb edilebilir.", irab_short: "bedel, mecrûr", turkish_bridge: "Nâr bu kökten", balagha_note: null },
          { arabic: "ذَاتِ", transliteration: "zâti", root: null, pos: "ism", meaning_tr: "sahip olan", irab: "{Sıfat} en-nâr kelimesinin sıfatı olup mecrûr, muzâftır.", irab_short: "sıfat, mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلۡوَقُودِ", transliteration: "el-veḳûdi", root: "و-ق-د", pattern: "فَعُول", pos: "ism", meaning_tr: "yakıtın", irab: "{Muzâf ileyh} mecrûr olup zât kelimesinin muzâf ileyhidir.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: null, balagha_note: null },
        ],
      },
      {
        surah: 85, ayah: 6,
        arabic: "إِذۡ هُمۡ عَلَيۡهَا قُعُودٞ",
        translation: "Hani o ateşin başına oturmuşlar,",
        words: [
          { arabic: "إِذۡ", transliteration: "iz", root: null, pos: "harf", meaning_tr: "hani, o zaman", irab: "{Zarf-ı zaman} ashâb kelimesinin sıfatıdır veya hâl olarak i'râb edilir.", irab_short: "zarf-ı zaman", turkish_bridge: null, balagha_note: null },
          { arabic: "هُمۡ", transliteration: "hüm", root: null, pos: "ism", meaning_tr: "onlar", irab: "{Zamîr} mübtedâ olup merfûdur.", irab_short: "mübtedâ, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "عَلَيۡهَا", transliteration: "'aleyhâ", root: "ع-ل-و", pos: "harf", meaning_tr: "onun üzerinde", irab: "{Câr-mecrûr} qu'ûd kelimesinin sıfatıdır ve hâ zamîri nâra râci'dir.", irab_short: "câr-mecrûr", turkish_bridge: "Âlî, a'lâ bu kökten", balagha_note: null },
          { arabic: "قُعُودٞ", transliteration: "ḳu'ûdun", root: "ق-ع-د", pattern: "فُعُول", pos: "ism", meaning_tr: "oturanlar", irab: "{Haber} hüm zamîrinin haberi olup merfûdur.", irab_short: "haber, merfû", turkish_bridge: "Ḳâ'ide bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 85, ayah: 7,
        arabic: "وَهُمۡ عَلَىٰ مَا يَفۡعَلُونَ بِٱلۡمُؤۡمِنِينَ شُهُودٞ",
        translation: "Müminlere yaptıklarını seyrediyorlardı.",
        words: [
          { arabic: "وَهُمۡ", transliteration: "ve hüm", root: null, pos: "ism", meaning_tr: "ve onlar", irab: "Vâv {hâl vâvı}, hüm {zamîr} mübtedâ olup merfû, cümle hâliyyedir.", irab_short: "mübtedâ, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "عَلَىٰ", transliteration: "'alâ", root: "ع-ل-و", pos: "harf", meaning_tr: "üzerinde", irab: "{Harf-i cerr} şuhûd kelimesinin müte'alliḳidir.", irab_short: "harf-i cerr", turkish_bridge: null, balagha_note: null },
          { arabic: "مَا", transliteration: "mâ", root: null, pos: "ism", meaning_tr: "ne, şey", irab: "{İsm-i mevsûl} mecrûr olup yef'alûne sılasıdır.", irab_short: "mevsûl, mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "يَفۡعَلُونَ", transliteration: "yef'alûne", root: "ف-ع-ل", pattern: "يَفْعَلُونَ", pos: "fil", meaning_tr: "yapıyorlar", irab: "{Fiil-i muzâri'} ma'lûm, I. bâb, mâ mevsûlünün sılasıdır.", irab_short: "muzâri', I. bâb", turkish_bridge: "Fi'l, fâ'il bu kökten", balagha_note: null },
          { arabic: "بِٱلۡمُؤۡمِنِينَ", transliteration: "bil-mü'minîne", root: "ء-م-ن", pattern: "مُفْعِلِينَ", pos: "ism", meaning_tr: "müminlere", irab: "{Câr-mecrûr} yef'alûne fiilinin müte'alliḳidir, cem-i müzekker sâlim mecrûrdur.", irab_short: "câr-mecrûr", turkish_bridge: "Mü'min, îmân bu kökten", balagha_note: null },
          { arabic: "شُهُودٞ", transliteration: "şühûdun", root: "ش-ه-د", pattern: "فُعُول", pos: "ism", meaning_tr: "şâhitler", irab: "{Haber} hüm zamîrinin haberi olup merfûdur.", irab_short: "haber, merfû", turkish_bridge: "Şühûd bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 85, ayah: 8,
        arabic: "وَمَا نَقَمُواْ مِنۡهُمۡ إِلَّآ أَن يُؤۡمِنُواْ بِٱللَّهِ ٱلۡعَزِيزِ ٱلۡحَمِيدِ",
        translation: "Bu inkarcıların, inananlara kızmaları; onların sadece, göklerin ve yerin hükümranlığı kendisinin bulunan ve övülmeğe layık ve güçlü olan Allah'a inanmış olmalarındandı. Allah her şeye şahiddir.",
        words: [
          { arabic: "وَمَا", transliteration: "ve mâ", root: null, pos: "harf", meaning_tr: "ve değil", irab: "Vâv {isti'nâf vâvı}, mâ {nefiy harfi} neḳamû fiilini nefy eder.", irab_short: "nefiy harfi", turkish_bridge: null, balagha_note: null },
          { arabic: "نَقَمُواْ", transliteration: "neḳamû", root: "ن-ق-م", pattern: "فَعَلُوا", pos: "fil", meaning_tr: "kızdılar, öfkelendiler", irab: "{Fiil-i mâzî} ma'lûm, I. bâb, fâili vâv-ı cemâ'attir.", irab_short: "mâzî, I. bâb", turkish_bridge: "Neḳme bu kökten", balagha_note: null },
          { arabic: "مِنۡهُمۡ", transliteration: "minhüm", root: null, pos: "harf", meaning_tr: "onlardan", irab: "{Câr-mecrûr} neḳamû fiilinin müte'alliḳidir.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "إِلَّآ", transliteration: "illâ", root: null, pos: "harf", meaning_tr: "ancak", irab: "{İstisna harfi} en yû'minû'yu istisna eder.", irab_short: "istisna harfi", turkish_bridge: null, balagha_note: null },
          { arabic: "أَن", transliteration: "en", root: null, pos: "harf", meaning_tr: "ki", irab: "{Masdariyye harfi} yû'minû fiili ile beraber te'vîl-i masdardır.", irab_short: "masdariyye", turkish_bridge: null, balagha_note: null },
          { arabic: "يُؤۡمِنُواْ", transliteration: "yü'minû", root: "ء-م-ن", pattern: "يُفْعِلُوا", pos: "fil", meaning_tr: "iman ettiler", irab: "{Fiil-i muzâri'} mansûb, IV. bâb, en harfinden sonra geldiği için mansûbdur.", irab_short: "muzâri' mansûb, IV. bâb", turkish_bridge: null, balagha_note: null },
          { arabic: "بِٱللَّهِ", transliteration: "billâhi", root: "ء-ل-ه", pos: "ism", meaning_tr: "Allah'a", irab: "{Câr-mecrûr} yû'minû fiilinin müte'alliḳidir, lafza-i celâldir.", irab_short: "câr-mecrûr", turkish_bridge: "İlâh bu kökten", balagha_note: null },
          { arabic: "ٱلۡعَزِيزِ", transliteration: "el-'azîzi", root: "ع-ز-ز", pattern: "فَعِيل", pos: "ism", meaning_tr: "güçlü olan", irab: "{Sıfat} Allah lafzının sıfatı olup mecrûrdur.", irab_short: "sıfat, mecrûr", turkish_bridge: "'Azîz, 'izzet bu kökten", balagha_note: null },
          { arabic: "ٱلۡحَمِيدِ", transliteration: "el-hamîdi", root: "ح-م-د", pattern: "فَعِيل", pos: "ism", meaning_tr: "övülmeye layık olan", irab: "{Sıfat} Allah lafzının ikinci sıfatı olup mecrûrdur.", irab_short: "sıfat, mecrûr", turkish_bridge: "Hamîd, hamd bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 85, ayah: 9,
        arabic: "ٱلَّذِي لَهُۥ مُلۡكُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَٱللَّهُ عَلَىٰ كُلِّ شَيۡءٖ شَهِيدٌ",
        translation: "O Allah ki, göklerin ve yerin hükümranlığı O'nundur ve Allah her şeye şahittir.",
        words: [
          { arabic: "ٱلَّذِي", transliteration: "ellezî", root: null, pos: "ism", meaning_tr: "ki o", irab: "{İsm-i mevsûl} Allah lafzının sıfatı olup mecrûrdur, lehû sılasıdır.", irab_short: "mevsûl, mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "لَهُۥ", transliteration: "lehû", root: null, pos: "harf", meaning_tr: "onundur", irab: "{Câr-mecrûr} mübtedâ-i muahhar olup mülk kelimesi mübtedâ-i mukaddamıdır.", irab_short: "mübtedâ muahhar", turkish_bridge: null, balagha_note: null },
          { arabic: "مُلۡكُ", transliteration: "mülkü", root: "م-ل-ك", pattern: "فُعْل", pos: "ism", meaning_tr: "hükümranlığı", irab: "{Mübtedâ} mukaddam olup merfû, muzâftır.", irab_short: "mübtedâ, merfû", turkish_bridge: "Melik, mülk bu kökten", balagha_note: null },
          { arabic: "ٱلسَّمَٰوَٰتِ", transliteration: "es-semâvâti", root: "س-م-و", pattern: "فَعَاوَات", pos: "ism", meaning_tr: "göklerin", irab: "{Muzâf ileyh} mecrûr olup mülk kelimesinin muzâf ileyhidir.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "وَٱلۡأَرۡضِ", transliteration: "vel-ardı", root: "ء-ر-ض", pattern: "فَعْل", pos: "ism", meaning_tr: "ve yerin", irab: "Vâv {atıf harfi}, el-ard {ma'tûf} es-semâvât üzerine atıf yapılmış olup mecrûrdur.", irab_short: "ma'tûf, mecrûr", turkish_bridge: "Arz bu kökten", balagha_note: null },
          { arabic: "وَٱللَّهُ", transliteration: "vellâhü", root: "ء-ل-ه", pos: "ism", meaning_tr: "ve Allah", irab: "Vâv {isti'nâf vâvı}, Allah {mübtedâ} merfû, lafza-i celâldir.", irab_short: "mübtedâ, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "عَلَىٰ", transliteration: "'alâ", root: "ع-ل-و", pos: "harf", meaning_tr: "üzerinde", irab: "{Harf-i cerr} şehîd kelimesinin müte'alliḳidir.", irab_short: "harf-i cerr", turkish_bridge: null, balagha_note: null },
          { arabic: "كُلِّ", transliteration: "külli", root: "ك-ل-ل", pos: "ism", meaning_tr: "her", irab: "{Mecrûr} 'alâ harfi ile mecrûr olup muzâftır.", irab_short: "mecrûr", turkish_bridge: "Küll bu kökten", balagha_note: null },
          { arabic: "شَيۡءٖ", transliteration: "şey'in", root: "ش-ي-ء", pattern: "فَعْل", pos: "ism", meaning_tr: "şeyin", irab: "{Muzâf ileyh} mecrûr olup küll kelimesinin muzâf ileyhidir.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "Şey bu kökten", balagha_note: null },
          { arabic: "شَهِيدٌ", transliteration: "şehîdün", root: "ش-ه-د", pattern: "فَعِيل", pos: "ism", meaning_tr: "şâhittir", irab: "{Haber} Allah kelimesinin haberi olup merfûrdur, câr-mecrûr müte'alliḳidir.", irab_short: "haber, merfû", turkish_bridge: "Şehîd bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 85, ayah: 10,
        arabic: "إِنَّ ٱلَّذِينَ فَتَنُواْ ٱلۡمُؤۡمِنِينَ وَٱلۡمُؤۡمِنَٰتِ ثُمَّ لَمۡ يَتُوبُواْ فَلَهُمۡ عَذَابُ جَهَنَّمَ وَلَهُمۡ عَذَابُ ٱلۡحَرِيقِ",
        translation: "Ama inanmış erkek ve kadınlara işkence ederek onları dinlerinden çevirmeğe uğraşanlar, eğer tevbe etmezlerse, onlara cehennem azabı vardır. Yakıcı azap da onlaradır.",
        words: [
          { arabic: "إِنَّ", transliteration: "inne", root: null, pos: "harf", meaning_tr: "şüphesiz", irab: "{Hurûf-i müşebbehe} ellezîne kelimesini mansûb yapar.", irab_short: "hurûf-i müşebbehe", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلَّذِينَ", transliteration: "ellezîne", root: null, pos: "ism", meaning_tr: "o kimseler", irab: "{İsm-i inne} mansûb, cem-i müzekker sâlimdir.", irab_short: "ism-i inne, mansûb", turkish_bridge: null, balagha_note: null },
          { arabic: "فَتَنُواْ", transliteration: "fetenû", root: "ف-ت-ن", pattern: "فَعَلُوا", pos: "fil", meaning_tr: "işkence ettiler", irab: "{Fiil-i mâzî} ma'lûm, I. bâb, ellezîne kelimesinin sılasıdır.", irab_short: "mâzî, I. bâb", turkish_bridge: "Fitne bu kökten", balagha_note: null },
          { arabic: "ٱلۡمُؤۡمِنِينَ", transliteration: "el-mü'minîne", root: "ء-م-ن", pattern: "مُفْعِلِينَ", pos: "ism", meaning_tr: "mümin erkekleri", irab: "{Mef'ûl bih} fetenû fiilinin mef'ûlü olup mansûb, cem-i müzekker sâlimdir.", irab_short: "mef'ûl bih, mansûb", turkish_bridge: null, balagha_note: null },
          { arabic: "وَٱلۡمُؤۡمِنَٰتِ", transliteration: "vel-mü'minâti", root: "ء-م-ن", pattern: "مُفْعِلَات", pos: "ism", meaning_tr: "ve mümin kadınları", irab: "Vâv {atıf harfi}, el-mü'minât {ma'tûf} el-mü'minîne üzerine atıf yapılmış olup mansûbdur.", irab_short: "ma'tûf, mansûb", turkish_bridge: null, balagha_note: null },
          { arabic: "ثُمَّ", transliteration: "sümme", root: null, pos: "harf", meaning_tr: "sonra", irab: "{Atıf harfi} terâhî ifade eden atıf harfidir.", irab_short: "atıf harfi", turkish_bridge: null, balagha_note: null },
          { arabic: "لَمۡ", transliteration: "lem", root: null, pos: "harf", meaning_tr: "değil", irab: "{Cezm harfi} yetûbû fiilini cezm eder ve nefy yapar.", irab_short: "cezm harfi", turkish_bridge: null, balagha_note: null },
          { arabic: "يَتُوبُواْ", transliteration: "yetûbû", root: "ت-و-ب", pattern: "يَفْعُلُوا", pos: "fil", meaning_tr: "tevbe ettiler", irab: "{Fiil-i muzâri'} meczûm, I. bâb, lem harfinden sonra geldiği için meczûmdur.", irab_short: "muzâri' meczûm, I. bâb", turkish_bridge: "Tevbe bu kökten", balagha_note: null },
          { arabic: "فَلَهُمۡ", transliteration: "felehüm", root: null, pos: "harf", meaning_tr: "onlar için", irab: "Fâ {cezâ fâsı}, lehüm {câr-mecrûr} mübtedâ-i muahhar olup 'azâb kelimesi mübtedâ-i mukaddamıdır.", irab_short: "mübtedâ muahhar", turkish_bridge: null, balagha_note: null },
          { arabic: "عَذَابُ", transliteration: "'azâbü", root: "ع-ذ-ب", pattern: "فَعَال", pos: "ism", meaning_tr: "azabı", irab: "{Mübtedâ} mukaddam olup merfû, muzâftır.", irab_short: "mübtedâ, merfû", turkish_bridge: "'Azâb bu kökten", balagha_note: null },
          { arabic: "جَهَنَّمَ", transliteration: "cehenneme", root: null, pos: "ism", meaning_tr: "cehennemin", irab: "{Muzâf ileyh} mecrûr olup 'azâb kelimesinin muzâf ileyhidir, gayr-ı munsarıf olduğu için kesra yerine fetha alır.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "Cehennem bu kelimeden", balagha_note: null },
          { arabic: "وَلَهُمۡ", transliteration: "velehüm", root: null, pos: "harf", meaning_tr: "ve onlar için", irab: "Vâv {atıf harfi}, lehüm {câr-mecrûr} mübtedâ-i muahhar olup 'azâb kelimesi mübtedâ-i mukaddamıdır.", irab_short: "mübtedâ muahhar", turkish_bridge: null, balagha_note: null },
          { arabic: "عَذَابُ", transliteration: "'azâbü", root: "ع-ذ-ب", pattern: "فَعَال", pos: "ism", meaning_tr: "azabı", irab: "{Mübtedâ} mukaddam olup merfû, muzâftır.", irab_short: "mübtedâ, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلۡحَرِيقِ", transliteration: "el-harîḳi", root: "ح-ر-ق", pattern: "فَعِيل", pos: "ism", meaning_tr: "yangının", irab: "{Muzâf ileyh} mecrûr olup 'azâb kelimesinin muzâf ileyhidir.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "Harîk bu kökten", balagha_note: "İki farklı azap türünün zikredilmesi ile teşdîd sanatı" },
        ],
      },
    ],
    exercises: [],
  },
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 2 — BURÛC 85:11-22
  // ═══════════════════════════════════════════════════════════
  {
    id: "S85-B02-buruc",
    title: "Burûc (11-22)",
    titleAr: "سُورَة البروج 11-22",
    stage: 2,
    level: 8,
    surah: 85,
    description: "Bu bölüm iman edenlere cennet müjdesi verip Allah'ın sıfatlarını açıkladıktan sonra, inkarcıların akıbetine dair tarihî örnekler vererek Kur'an'ın yüceliğini vurgular.",
    verses: [
      {
        surah: 85, ayah: 11,
        arabic: "إِنَّ ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّـٰلِحَٰتِ لَهُمۡ جَنَّـٰتٞ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُۚ ذَٰلِكَ ٱلۡفَوۡزُ ٱلۡكَبِيرُ",
        translation: "Şüphesiz inanıp yararlı işler işleyenlere, onlara, içlerinden ırmaklar akan cennetler vardır. Bu, büyük kurtuluştur.",
        words: [
          { arabic: "إِنَّ", transliteration: "inne", root: null, pos: "harf", meaning_tr: "şüphesiz, gerçekten", irab: "{Hurûf-i müşebbehe bi'l-fi'l}. Te'kîd ve tahkîk için kullanılır. İsmini mansûb, haberini merfû kılar.", irab_short: "hurûf-i müşebbehe", turkish_bridge: null, balagha_note: "Te'kîd sanatı ile kesin bir hüküm ifade ediyor" },
          { arabic: "ٱلَّذِينَ", transliteration: "ellezîne", root: null, pos: "ism", meaning_tr: "onlar ki, kimseler", irab: "{İsm-i mevsûl}. İnne'nin ismi, mahallen mansûb. Sıla cümlesi ile takyîd edilir.", irab_short: "mevsûl, mansûb", turkish_bridge: null, balagha_note: null },
          { arabic: "ءَامَنُواْ", transliteration: "âmenû", root: "ء-م-ن", pattern: "فَعَلَ", pos: "fil", meaning_tr: "iman ettiler, inandılar", irab: "{Fiil-i mâzî}, IV. bâb. Ellezîne'nin sıla cümlesi. Vâv-ı cemâat fâili.", irab_short: "mâzî, IV. bâb", turkish_bridge: "Emîn, emân, îmân bu kökten", balagha_note: null },
          { arabic: "وَعَمِلُواْ", transliteration: "ve amelû", root: "ع-م-ل", pattern: "فَعَلَ", pos: "fil", meaning_tr: "ve amel ettiler, işlediler", irab: "{Vâv-ı atf} + {fiil-i mâzî}, I. bâb. Âmenû ile atfedilmiş. Vâv-ı cemâat fâili.", irab_short: "mâzî, I. bâb, ma'tûf", turkish_bridge: "Amel bu kökten", balagha_note: null },
          { arabic: "ٱلصَّـٰلِحَٰتِ", transliteration: "es-sâlihâti", root: "ص-ل-ح", pattern: "فَاعِل", pos: "ism", meaning_tr: "salih ameller, iyi işler", irab: "{Mef'ûl bih}, amelû fiilinin mef'ûlü. Mensûb. Cemî-i müennes sîgasında.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Salâh, ıslah bu kökten", balagha_note: null },
          { arabic: "لَهُمۡ", transliteration: "lehüm", root: null, pos: "harf", meaning_tr: "onlar için", irab: "{Câr-mecrûr}. Lâm-ı mülk + zamîr-i munfasıl. İnne cümlesinin haberi mukaddem.", irab_short: "câr-mecrûr, haber mukaddem", turkish_bridge: null, balagha_note: "Takdîm sanatı ile müjdenin güçlendirilmesi" },
          { arabic: "جَنَّـٰتٞ", transliteration: "cennâtün", root: "ج-ن-ن", pattern: "فَعَّة", pos: "ism", meaning_tr: "cennetler", irab: "{Mübtedâ müeahhar}. Merfû. Lehüm'ün müteallakı, hakikatte inne'nin haberi.", irab_short: "mübtedâ müeahhar, merfû", turkish_bridge: "Cin, cinnet bu kökten", balagha_note: null },
          { arabic: "تَجۡرِي", transliteration: "tecrî", root: "ج-ر-ي", pattern: "فَعَلَ", pos: "fil", meaning_tr: "akar, çağlar", irab: "{Fiil-i muzârî}, I. bâb. Cennât'ın sıfatı mahiyetinde cümle-i fî'liyye.", irab_short: "muzârî, I. bâb, sıfat", turkish_bridge: null, balagha_note: null },
          { arabic: "مِن تَحۡتِهَا", transliteration: "min tahtihâ", root: "ت-ح-ت", pos: "harf", meaning_tr: "altından", irab: "{Câr-mecrûr}. Min harfi + taht zarfı + zamîr-i müttasıl. Tecrî fiilinin müteallakı.", irab_short: "câr-mecrûr, müteallık", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلۡأَنۡهَٰرُ", transliteration: "el-enhâru", root: "ن-ه-ر", pattern: "فَعَل", pos: "ism", meaning_tr: "ırmaklar", irab: "{Fâil}. Tecrî fiilinin fâili. Merfû. Cemî sîgasında.", irab_short: "fâil, merfû", turkish_bridge: "Nehir bu kökten", balagha_note: null },
          { arabic: "ذَٰلِكَ", transliteration: "zâlike", root: null, pos: "ism", meaning_tr: "işte bu", irab: "{İsm-i işâret}. Mübtedâ. Merfû. Önceki cennet tasvîrine işâret eder.", irab_short: "mübtedâ, merfû", turkish_bridge: null, balagha_note: "İşâret ile vurgu sanatı" },
          { arabic: "ٱلۡفَوۡزُ", transliteration: "el-fevzu", root: "ف-و-ز", pattern: "فَعَل", pos: "ism", meaning_tr: "kurtuluş, başarı", irab: "{Haber}. Zâlike'nin haberi. Merfû. Masdar.", irab_short: "haber, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلۡكَبِيرُ", transliteration: "el-kebîru", root: "ك-ب-ر", pattern: "فَعِيل", pos: "ism", meaning_tr: "büyük", irab: "{Sıfat}. El-fevz'in sıfatı. Merfû. Mübalağa sîgası.", irab_short: "sıfat, merfû", turkish_bridge: "Kebir, kibir bu kökten", balagha_note: "Büyüklüğün vurgulanması ile mübalağa sanatı" },
        ],
      },
      {
        surah: 85, ayah: 12,
        arabic: "إِنَّ بَطۡشَ رَبِّكَ لَشَدِيدٌ",
        translation: "Doğrusu Rabbinin yakalaması amansızdır.",
        words: [
          { arabic: "إِنَّ", transliteration: "inne", root: null, pos: "harf", meaning_tr: "şüphesiz, gerçekten", irab: "{Hurûf-i müşebbehe bi'l-fi'l}. Te'kîd ve tahkîk için kullanılır.", irab_short: "hurûf-i müşebbehe", turkish_bridge: null, balagha_note: null },
          { arabic: "بَطۡشَ", transliteration: "batşe", root: "ب-ط-ش", pattern: "فَعَل", pos: "ism", meaning_tr: "yakalama, şiddetli tutuş", irab: "{İsm-i inne}. Mansûb. Masdar, müzâf.", irab_short: "isim inne, mansûb", turkish_bridge: null, balagha_note: null },
          { arabic: "رَبِّكَ", transliteration: "rabbike", root: "ر-ب-ب", pattern: "فَعَل", pos: "ism", meaning_tr: "Rabbinin", irab: "{Muzâf ileyh}. Batş'ın muzâf ileyhi. Mecrûr. Kâf zamîri muzâf ileyh.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "Rabb bu kökten", balagha_note: null },
          { arabic: "لَشَدِيدٌ", transliteration: "leşedîdün", root: "ش-د-د", pattern: "فَعِيل", pos: "ism", meaning_tr: "çok şiddetli", irab: "{Haber-i inne}. Lâm-ı te'kîd + şedîd. Merfû. Mübalağa sîgası.", irab_short: "haber inne, merfû", turkish_bridge: "Şiddet bu kökten", balagha_note: "Lâm-ı te'kîd ile vurgunun güçlendirilmesi" },
        ],
      },
      {
        surah: 85, ayah: 13,
        arabic: "إِنَّهُۥ هُوَ يُبۡدِئُ وَيُعِيدُ",
        translation: "Önce yaratıp sonra bunu tekrar eden O'dur.",
        words: [
          { arabic: "إِنَّهُۥ", transliteration: "innehû", root: null, pos: "harf", meaning_tr: "şüphesiz O", irab: "{Hurûf-i müşebbehe} + {zamîr-i müttasıl}. Hû zamîri inne'nin ismi, mansûb.", irab_short: "inne + zamîr", turkish_bridge: null, balagha_note: null },
          { arabic: "هُوَ", transliteration: "hüve", root: null, pos: "ism", meaning_tr: "O", irab: "{Zamîr-i munfasıl}. İnne'hû ile te'kîd edilen zamîr. Fasl zamîri veya mübtedâ-i sânî.", irab_short: "zamîr fasl", turkish_bridge: null, balagha_note: "Te'kîd-i lafzî ile vurgu" },
          { arabic: "يُبۡدِئُ", transliteration: "yübdiü", root: "ب-د-ء", pattern: "أَفْعَل", pos: "fil", meaning_tr: "başlatır, ilk yaratır", irab: "{Fiil-i muzârî}, IV. bâb. İnne'nin haberi. Fâili müstetir.", irab_short: "muzârî, IV. bâb", turkish_bridge: "Bed', ibdâ bu kökten", balagha_note: null },
          { arabic: "وَيُعِيدُ", transliteration: "ve yü'îdü", root: "ع-و-د", pattern: "أَفْعَل", pos: "fil", meaning_tr: "ve tekrar eder, diriltir", irab: "{Vâv-ı atf} + {fiil-i muzârî}, IV. bâb. Yübdiü ile ma'tûf. Fâili müstetir.", irab_short: "muzârî, IV. bâb, ma'tûf", turkish_bridge: "Avdet, i'âde bu kökten", balagha_note: "Tıbâk sanatı (başlatma-tekrarlama zıtlığı)" },
        ],
      },
      {
        surah: 85, ayah: 14,
        arabic: "وَهُوَ ٱلۡغَفُورُ ٱلۡوَدُودُ",
        translation: "Yüce arşın sahibi, çok seven, bağışlayan O'dur.",
        words: [
          { arabic: "وَهُوَ", transliteration: "ve hüve", root: null, pos: "ism", meaning_tr: "ve O", irab: "{Vâv-ı atf} + {zamîr-i munfasıl}. Mübtedâ. Önceki cümle ile ma'tûf.", irab_short: "mübtedâ ma'tûf", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلۡغَفُورُ", transliteration: "el-gafûru", root: "غ-ف-ر", pattern: "فَعُول", pos: "ism", meaning_tr: "çok bağışlayıcı", irab: "{Haber}. Merfû. Esmâ-ül hüsnâ'dan mübalağa sîgası.", irab_short: "haber, merfû", turkish_bridge: "Gufran, mağfiret bu kökten", balagha_note: null },
          { arabic: "ٱلۡوَدُودُ", transliteration: "el-vedûdu", root: "و-د-د", pattern: "فَعُول", pos: "ism", meaning_tr: "çok sevgili, çok seven", irab: "{Sıfat}. El-gafûr'un sıfatı veya haber-i sânî. Merfû. Mübalağa sîgası.", irab_short: "sıfat, merfû", turkish_bridge: "Ved, mevâdde bu kökten", balagha_note: "Mübalağa sîgasıyla Allah'ın sonsuz sevgisi vurgulanıyor" },
        ],
      },
      {
        surah: 85, ayah: 15,
        arabic: "ذُو ٱلۡعَرۡشِ ٱلۡمَجِيدُ",
        translation: "Yüce arşın sahibidir.",
        words: [
          { arabic: "ذُو", transliteration: "zû", root: null, pattern: "فُو", pos: "ism", meaning_tr: "sahibi", irab: "{Sıfat} veya {haber-i sâlis}. El-vedûd'un sıfatı. Merfû. Esmâ-ül hamse'den.", irab_short: "sıfat, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلۡعَرۡشِ", transliteration: "el-'arşi", root: "ع-ر-ش", pattern: "فَعَل", pos: "ism", meaning_tr: "arş", irab: "{Muzâf ileyh}. Zû'nun muzâf ileyhi. Mecrûr.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "Arş bu kökten", balagha_note: null },
          { arabic: "ٱلۡمَجِيدُ", transliteration: "el-mecîdu", root: "م-ج-د", pattern: "فَعِيل", pos: "ism", meaning_tr: "yüce, şerefli", irab: "{Sıfat}. El-'arş'ın sıfatı veya zû'nun sıfatı. Merfû. Mübalağa sîgası.", irab_short: "sıfat, merfû", turkish_bridge: "Mecd bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 85, ayah: 16,
        arabic: "فَعَّالٞ لِّمَا يُرِيدُ",
        translation: "Her dilediğini mutlaka yapandır.",
        words: [
          { arabic: "فَعَّالٞ", transliteration: "fa''âlün", root: "ف-ع-ل", pattern: "فَعَّال", pos: "ism", meaning_tr: "çok yapan, sürekli işleyen", irab: "{Sıfat}. Önceki sıfatlarla ma'tûf. Merfû. Mübalağa sîgası.", irab_short: "sıfat, merfû", turkish_bridge: "Fi'l, fâ'il bu kökten", balagha_note: "Mübalağa sîgasıyla Allah'ın mutlak kudreti vurgulanıyor" },
          { arabic: "لِّمَا", transliteration: "limâ", root: null, pos: "harf", meaning_tr: "için, -e dair", irab: "{Lâm harfi} + {mâ mevsûle}. Fa''âl'ın müteallakı.", irab_short: "câr + mevsûl", turkish_bridge: null, balagha_note: null },
          { arabic: "يُرِيدُ", transliteration: "yürîdü", root: "ر-و-د", pattern: "أَفْعَل", pos: "fil", meaning_tr: "ister, diler", irab: "{Fiil-i muzârî}, IV. bâb. Mâ'nın sıla cümlesi. Fâili müstetir.", irab_short: "muzârî, IV. bâb, sıla", turkish_bridge: "İrâde bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 85, ayah: 17,
        arabic: "هَلۡ أَتَىٰكَ حَدِيثُ ٱلۡجُنُودِ",
        translation: "Ordularının haberi sana geldi mi?",
        words: [
          { arabic: "هَلۡ", transliteration: "hel", root: null, pos: "harf", meaning_tr: "acaba", irab: "{Harf-i istifhâm}. Takrîrî istifhâm için kullanılır.", irab_short: "istifhâm", turkish_bridge: null, balagha_note: "İstifhâm-ı takrîrî ile dikkat çekme sanatı" },
          { arabic: "أَتَىٰكَ", transliteration: "etâke", root: "أ-ت-ي", pattern: "فَعَلَ", pos: "fil", meaning_tr: "sana geldi", irab: "{Fiil-i mâzî}, I. bâb. Kâf zamîri mef'ûl bih. Fâili müstetir.", irab_short: "mâzî, I. bâb", turkish_bridge: null, balagha_note: null },
          { arabic: "حَدِيثُ", transliteration: "hadîsü", root: "ح-د-ث", pattern: "فَعِيل", pos: "ism", meaning_tr: "haberi, kıssası", irab: "{Fâil}. Etâ fiilinin fâili. Merfû. Müzâf.", irab_short: "fâil, merfû", turkish_bridge: "Hadis bu kökten", balagha_note: null },
          { arabic: "ٱلۡجُنُودِ", transliteration: "el-cünûdi", root: "ج-ن-د", pattern: "فُعُول", pos: "ism", meaning_tr: "ordular", irab: "{Muzâf ileyh}. Hadîs'in muzâf ileyhi. Mecrûr. Cemî sîgası.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "Cünd, asker bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 85, ayah: 18,
        arabic: "فِرۡعَوۡنَ وَثَمُودَ",
        translation: "Firavun ve Semud ordularının.",
        words: [
          { arabic: "فِرۡعَوۡنَ", transliteration: "fir'avne", root: null, pos: "ism", meaning_tr: "Firavun", irab: "{Bedel} veya {beyân}. El-cünûd'dan bedel-i ba'z min küll. Mecrûr, gayr-i munsarıf.", irab_short: "bedel, mecrûr", turkish_bridge: "Firavun", balagha_note: null },
          { arabic: "وَثَمُودَ", transliteration: "ve semûde", root: null, pos: "ism", meaning_tr: "ve Semud", irab: "{Vâv-ı atf} + {ma'tûf}. Fir'avn ile ma'tûf. Mecrûr, gayr-i munsarıf.", irab_short: "ma'tûf, mecrûr", turkish_bridge: "Semud kavmi", balagha_note: "İki meşhur zalim kavmin örnek verilmesi" },
        ],
      },
      {
        surah: 85, ayah: 19,
        arabic: "بَلِ ٱلَّذِينَ كَفَرُواْ فِي تَكۡذِيبٖ",
        translation: "Doğrusu inkar edenler, hep yalanlayagelmişlerdir.",
        words: [
          { arabic: "بَلِ", transliteration: "bel", root: null, pos: "harf", meaning_tr: "hayır, bilakis", irab: "{Harf-i idrâb}. Önceki hükmü iptal edip yenisini getirir.", irab_short: "idrâb", turkish_bridge: null, balagha_note: "İdrâb ile konunun değiştirilmesi" },
          { arabic: "ٱلَّذِينَ", transliteration: "ellezîne", root: null, pos: "ism", meaning_tr: "onlar ki", irab: "{İsm-i mevsûl}. Mübtedâ. Merfû.", irab_short: "mübtedâ, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "كَفَرُواْ", transliteration: "keferû", root: "ك-ف-ر", pattern: "فَعَلَ", pos: "fil", meaning_tr: "inkâr ettiler", irab: "{Fiil-i mâzî}, I. bâb. Ellezîne'nin sıla cümlesi. Vâv-ı cemâat fâili.", irab_short: "mâzî, I. bâb, sıla", turkish_bridge: "Küfür bu kökten", balagha_note: null },
          { arabic: "فِي تَكۡذِيبٖ", transliteration: "fî tekzîbin", root: "ك-ز-ب", pattern: "تَفْعِيل", pos: "ism", meaning_tr: "yalanlama içinde", irab: "{Câr-mecrûr}. Ellezîne'nin haberi. Masdar, II. bâb.", irab_short: "haber, câr-mecrûr", turkish_bridge: "Kizb, tekzîb bu kökten", balagha_note: "Fî harfi ile devamlılığın vurgulanması" },
        ],
      },
      {
        surah: 85, ayah: 20,
        arabic: "وَٱللَّهُ مِن وَرَآئِهِم مُّحِيطُۢ",
        translation: "Oysa Allah onları ardlarından kuşatmıştır.",
        words: [
          { arabic: "وَٱللَّهُ", transliteration: "vallâhü", root: "أ-ل-ه", pos: "ism", meaning_tr: "ve Allah", irab: "{Vâv-ı hâl} + {mübtedâ}. Hâl cümlesinin mübtedâsı. Merfû.", irab_short: "mübtedâ, merfû", turkish_bridge: "İlâh bu kökten", balagha_note: null },
          { arabic: "مِن وَرَآئِهِم", transliteration: "min verâihim", root: "و-ر-ء", pos: "harf", meaning_tr: "arkalarından", irab: "{Câr-mecrûr}. Min + verâ zarfı + zamîr. Muhît'ın müteallakı.", irab_short: "câr-mecrûr, müteallık", turkish_bridge: null, balagha_note: null },
          { arabic: "مُّحِيطُۢ", transliteration: "muhîtün", root: "ح-و-ط", pattern: "مُفْعِل", pos: "ism", meaning_tr: "kuşatan", irab: "{Haber}. Allah'ın haberi. Merfû. İsm-i fâ'il, IV. bâb.", irab_short: "haber, merfû", turkish_bridge: "İhâta bu kökten", balagha_note: "Allah'ın mutlak hâkimiyetini bildiren güçlü tasvir" },
        ],
      },
      {
        surah: 85, ayah: 21,
        arabic: "بَلۡ هُوَ قُرۡءَانٞ مَّجِيدٞ",
        translation: "Doğrusu o şerefli bir Kur'an'dır.",
        words: [
          { arabic: "بَلۡ", transliteration: "bel", root: null, pos: "harf", meaning_tr: "hayır, bilakis", irab: "{Harf-i idrâb}. Önceki olumsuz düşünceyi reddeder.", irab_short: "idrâb", turkish_bridge: null, balagha_note: "İdrâb ile Kur'an'ın yüceliğine vurgu" },
          { arabic: "هُوَ", transliteration: "hüve", root: null, pos: "ism", meaning_tr: "o", irab: "{Zamîr-i munfasıl}. Mübtedâ. Kur'an'a işâret eder.", irab_short: "mübtedâ", turkish_bridge: null, balagha_note: null },
          { arabic: "قُرۡءَانٞ", transliteration: "kur'ânün", root: "ق-ر-ء", pattern: "فُعْلان", pos: "ism", meaning_tr: "Kur'an", irab: "{Haber}. Hüve'nin haberi. Merfû. Masdar.", irab_short: "haber, merfû", turkish_bridge: "Kırâat, kâri bu kökten", balagha_note: null },
          { arabic: "مَّجِيدٞ", transliteration: "mecîdün", root: "م-ج-د", pattern: "فَعِيل", pos: "ism", meaning_tr: "şerefli, yüce", irab: "{Sıfat}. Kur'ân'ın sıfatı. Merfû. Mübalağa sîgası.", irab_short: "sıfat, merfû", turkish_bridge: "Mecd bu kökten", balagha_note: "Kur'an'ın yüceliğinin vurgulanması" },
        ],
      },
      {
        surah: 85, ayah: 22,
        arabic: "فِي لَوۡحٖ مَّحۡفُوظِۭ",
        translation: "Levh-i Mahfuz'dadır.",
        words: [
          { arabic: "فِي", transliteration: "fî", root: null, pos: "harf", meaning_tr: "içinde", irab: "{Harf-i cerr}. Mekân bildiren zarf.", irab_short: "harf-i cerr", turkish_bridge: null, balagha_note: null },
          { arabic: "لَوۡحٖ", transliteration: "levhin", root: "ل-و-ح", pattern: "فَعَل", pos: "ism", meaning_tr: "levha", irab: "{Mecrûr}. Fî harf-i cerrinin mecrûrü. Müzâf.", irab_short: "mecrûr", turkish_bridge: "Levha bu kökten", balagha_note: null },
          { arabic: "مَّحۡفُوظِۭ", transliteration: "mahfûzin", root: "ح-ف-ظ", pattern: "مَفْعُول", pos: "ism", meaning_tr: "korunmuş", irab: "{Muzâf ileyh}. Levh'in muzâf ileyhi. Mecrûr. İsm-i mef'ûl, I. bâb.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "Hıfz, hafız bu kökten", balagha_note: "Kur'an'ın korunmuşluğunun te'kîdi" },
        ],
      },
    ],
    exercises: [],
  },
];

export default burucLessons;
