// ═══════════════════════════════════════════════════════════
// NEBE SURESİ (78) — Pipeline Üretimi
// 2026-03-25: 4 bölüm, 40 ayet tam kapsam
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

const nebeLessons = [
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 1 — NEBE 78:1-17
  // ═══════════════════════════════════════════════════════════
  {
    id: "S78-B01-nebe",
    title: "Nebe (1-17)",
    titleAr: "سُورَة النبإ 1-17",
    stage: 2,
    level: 8,
    surah: 78,
    description: "Surenin açılış bölümünde inkarcıların kıyamet konusundaki şüpheleri sorgu ile başlar, ardından Allah'ın yaratılıştaki kudret delilleri sıralanır.",
    verses: [
      {
        surah: 78, ayah: 1,
        arabic: "عَمَّ يَتَسَآءَلُونَ",
        translation: "Neyi soruşturuyorlar?",
        words: [
          { arabic: "عَمَّ", transliteration: "amme", root: null, pos: "harf", meaning_tr: "neyi, ne hakkında", irab: "{İstifhâm edatı} عَن + مَا birleşiminden oluşmuş, istifhâm için kullanılan câr-mecrûr.", irab_short: "istifhâm edatı", turkish_bridge: null, balagha_note: "İstifhâmî üslupla dikkat çekme ve merak uyandırma" },
          { arabic: "يَتَسَآءَلُونَ", transliteration: "yetesâelûn", root: "س-أ-ل", pattern: "تَفَاعُل", pos: "fil", meaning_tr: "birbirlerine soruyorlar, soruşturuyorlar", irab: "{Fiil-i muzâri'} VI. bâb, çoğul üçüncü şahıs erkek, merfû.", irab_short: "muzâri', VI. bâb, merfû", turkish_bridge: "Sual, mes'ele bu kökten", balagha_note: "VI. bâb ile karşılıklı soru-cevap anlamı" },
        ],
      },
      {
        surah: 78, ayah: 2,
        arabic: "عَنِ ٱلنَّبَإِ ٱلۡعَظِيمِ",
        translation: "Büyük haber hakkında mı?",
        words: [
          { arabic: "عَنِ", transliteration: "ani", root: null, pos: "harf", meaning_tr: "hakkında, -den", irab: "{Harf-i cerr} mecrûrunu câr-mecrûr yapan edat.", irab_short: "harf-i cerr", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلنَّبَإِ", transliteration: "en-nebei", root: "ن-ب-أ", pos: "ism", meaning_tr: "haber, büyük olay", irab: "{Mecrûr} عَنِ edatıyla mecrûr, kesre ile.", irab_short: "mecrûr", turkish_bridge: "Nebe bu kökten", balagha_note: null },
          { arabic: "ٱلۡعَظِيمِ", transliteration: "el-azîm", root: "ع-ظ-م", pattern: "فَعِيل", pos: "ism", meaning_tr: "büyük, azametli", irab: "{Sıfat} النبأ kelimesinin sıfatı, ona tabi olarak mecrûr.", irab_short: "sıfat, mecrûr", turkish_bridge: "Azamet, azim bu kökten", balagha_note: "Kıyametin büyüklüğünü vurgulayan sıfat" },
        ],
      },
      {
        surah: 78, ayah: 3,
        arabic: "ٱلَّذِي هُمۡ فِيهِ مُخۡتَلِفُونَ",
        translation: "Ki onlar onda anlaşmazlığa düşmüşlerdir.",
        words: [
          { arabic: "ٱلَّذِي", transliteration: "ellezî", root: null, pos: "ism", meaning_tr: "ki, olan", irab: "{İsm-i mevsûl} النبأ العظيم'in sıfatı konumunda, mecrûr.", irab_short: "ism-i mevsûl, sıfat", turkish_bridge: null, balagha_note: null },
          { arabic: "هُمۡ", transliteration: "hüm", root: null, pos: "ism", meaning_tr: "onlar", irab: "{Zamîr-i munfasıl} mübtedâ konumunda, merfû.", irab_short: "zamîr, mübtedâ", turkish_bridge: null, balagha_note: null },
          { arabic: "فِيهِ", transliteration: "fîh", root: null, pos: "harf", meaning_tr: "onda", irab: "{Câr-mecrûr} فِي + zamîr, müteallik câr-mecrûr.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "مُخۡتَلِفُونَ", transliteration: "muhtelifûn", root: "خ-ل-ف", pattern: "مُفْتَعِل", pos: "ism", meaning_tr: "anlaşmazlığa düşenler, ayrılık halinde olanlar", irab: "{Haber} mübtedâ هُمۡ'in haberi, merfû.", irab_short: "haber, merfû", turkish_bridge: "Hilaf, muhtelif bu kökten", balagha_note: "VIII. bâb ism-i fâil ile süregelen anlaşmazlığı ifade" },
        ],
      },
      {
        surah: 78, ayah: 4,
        arabic: "كَلَّا سَيَعۡلَمُونَ",
        translation: "Hayır! Yakında bileceklerdir.",
        words: [
          { arabic: "كَلَّا", transliteration: "kellâ", root: null, pos: "harf", meaning_tr: "hayır, asla", irab: "{Harf-i red} inkâr ve meneyi ifade eden edat.", irab_short: "harf-i red", turkish_bridge: null, balagha_note: "Kesin ret ve tehdit içeren üslup" },
          { arabic: "سَيَعۡلَمُونَ", transliteration: "seya'lemûn", root: "ع-ل-م", pattern: "فَعِلَ", pos: "fil", meaning_tr: "yakında bilecekler", irab: "{Fiil-i muzâri'} I. bâb, سَ harfi ile gelecek zaman, üçüncü şahıs çoğul erkek.", irab_short: "muzâri', I. bâb, gelecek", turkish_bridge: "İlim, âlim bu kökten", balagha_note: "Gelecek zaman ile tehditkâr uyarı" },
        ],
      },
      {
        surah: 78, ayah: 5,
        arabic: "ثُمَّ كَلَّا سَيَعۡلَمُونَ",
        translation: "Yine hayır! Elbette bileceklerdir.",
        words: [
          { arabic: "ثُمَّ", transliteration: "sümme", root: null, pos: "harf", meaning_tr: "sonra, yine", irab: "{Harf-i atıf} terâhî atıf edatı, zamansal sıralama ifade eder.", irab_short: "harf-i atıf", turkish_bridge: null, balagha_note: null },
          { arabic: "كَلَّا", transliteration: "kellâ", root: null, pos: "harf", meaning_tr: "hayır, asla", irab: "{Harf-i red} inkâr ve meneyi ifade eden edat, te'kîd amaçlı tekrar.", irab_short: "harf-i red", turkish_bridge: null, balagha_note: "Te'kîd amaçlı tekrar ile şiddetli ret" },
          { arabic: "سَيَعۡلَمُونَ", transliteration: "seya'lemûn", root: "ع-ل-م", pattern: "فَعِلَ", pos: "fil", meaning_tr: "yakında bilecekler", irab: "{Fiil-i muzâri'} I. bâb, سَ harfi ile gelecek zaman, üçüncü şahıs çoğul erkek.", irab_short: "muzâri', I. bâb, gelecek", turkish_bridge: "İlim, âlim bu kökten", balagha_note: "Aynen tekrar ile te'kîd ve tehdidin şiddetlenmesi" },
        ],
      },
      {
        surah: 78, ayah: 6,
        arabic: "أَلَمۡ نَجۡعَلِ ٱلۡأَرۡضَ مِهَٰدٗا",
        translation: "Biz yeryüzünü bir beşik yapmadık mı?",
        words: [
          { arabic: "أَلَمۡ", transliteration: "elem", root: null, pos: "harf", meaning_tr: "değil mi", irab: "{İstifhâm edatı} أَ + لَمْ birleşimi, istifhâm-ı takrirî yapısı.", irab_short: "istifhâm edatı", turkish_bridge: null, balagha_note: "İstifhâm-ı takrirî ile ikrar ettirme" },
          { arabic: "نَجۡعَلِ", transliteration: "nec'al", root: "ج-ع-ل", pattern: "فَعَلَ", pos: "fil", meaning_tr: "yaparız, kılarız", irab: "{Fiil-i muzâri'} I. bâb, لَمْ ile meczûm, birinci şahıs çoğul.", irab_short: "muzâri', meczûm", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلۡأَرۡضَ", transliteration: "el-ard", root: "أ-ر-ض", pos: "ism", meaning_tr: "yeryüzü, toprak", irab: "{Mef'ûl bih} nَجْعَلِ fiilinin birinci mef'ûlü, mansûb.", irab_short: "mef'ûl bih, mansûb", turkish_bridge: "Arz bu kökten", balagha_note: null },
          { arabic: "مِهَٰدٗا", transliteration: "mihâden", root: "م-ه-د", pattern: "مِفْعَال", pos: "ism", meaning_tr: "beşik, yatak, düz yer", irab: "{Mef'ûl bih sânî} نَجْعَلِ fiilinin ikinci mef'ûlü, mansûb.", irab_short: "mef'ûl bih sânî", turkish_bridge: "Mehd bu kökten", balagha_note: "Yeryüzünün rahat ve güvenli olması için güzel benzetme" },
        ],
      },
      {
        surah: 78, ayah: 7,
        arabic: "وَٱلۡجِبَالَ أَوۡتَادٗا",
        translation: "Dağları da kazık yapmadık mı?",
        words: [
          { arabic: "وَٱلۡجِبَالَ", transliteration: "vel-cibâle", root: "ج-ب-ل", pos: "ism", meaning_tr: "ve dağları", irab: "{Mef'ûl bih} وَ atıf harfi ile معطوف, نَجْعَلِ fiilinin mef'ûlü, mansûb.", irab_short: "mef'ûl bih, atıf", turkish_bridge: "Cebel bu kökten", balagha_note: null },
          { arabic: "أَوۡتَادٗا", transliteration: "evtâden", root: "و-ت-د", pattern: "أَفْعَال", pos: "ism", meaning_tr: "kazıklar, direkler", irab: "{Mef'ûl bih sânî} الجبال kelimesinin hâli veya ikinci mef'ûl, mansûb.", irab_short: "mef'ûl bih sânî", turkish_bridge: null, balagha_note: "Dağların yeryüzünü sabitleme işlevi için güzel teşbih" },
        ],
      },
      {
        surah: 78, ayah: 8,
        arabic: "وَخَلَقۡنَٰكُمۡ أَزۡوَٰجٗا",
        translation: "Sizi çift çift yarattık.",
        words: [
          { arabic: "وَخَلَقۡنَٰكُمۡ", transliteration: "ve halaknaküm", root: "خ-ل-ق", pattern: "فَعَلَ", pos: "fil", meaning_tr: "ve sizi yarattık", irab: "{Fiil-i mâzî} I. bâb, birinci şahıs çoğul, küm zamiri mef'ûl bih.", irab_short: "mâzî, I. bâb", turkish_bridge: "Halk, mahluk bu kökten", balagha_note: null },
          { arabic: "أَزۡوَٰجٗا", transliteration: "ezvâcen", root: "ز-و-ج", pattern: "أَفْعَال", pos: "ism", meaning_tr: "çiftler, eşler", irab: "{Hâl} فاعلin hâli veya mef'ûl bih sânî, mansûb.", irab_short: "hâl, mansûb", turkish_bridge: "Zevç, zevce, evlilik bu kökten", balagha_note: "Yaratılıştaki çiftlik prensibi" },
        ],
      },
      {
        surah: 78, ayah: 9,
        arabic: "وَجَعَلۡنَا نَوۡمَكُمۡ سُبَاتٗا",
        translation: "Uykunuzu dinlenme vakti kıldık.",
        words: [
          { arabic: "وَجَعَلۡنَا", transliteration: "ve ce'alnâ", root: "ج-ع-ل", pattern: "فَعَلَ", pos: "fil", meaning_tr: "ve kıldık, yaptık", irab: "{Fiil-i mâzî} I. bâb, birinci şahıs çoğul.", irab_short: "mâzî, I. bâb", turkish_bridge: null, balagha_note: null },
          { arabic: "نَوۡمَكُمۡ", transliteration: "nevmeküm", root: "ن-و-م", pos: "ism", meaning_tr: "uykunuz", irab: "{Mef'ûl bih evvel} جَعَلَ fiilinin birinci mef'ûlü, mansûb.", irab_short: "mef'ûl bih, mansûb", turkish_bridge: "Nevim bu kökten", balagha_note: null },
          { arabic: "سُبَاتٗا", transliteration: "sübâten", root: "س-ب-ت", pattern: "فُعَال", pos: "ism", meaning_tr: "dinlenme, rahatlık", irab: "{Mef'ûl bih sânî} جَعَلَ fiilinin ikinci mef'ûlü, mansûb.", irab_short: "mef'ûl bih sânî", turkish_bridge: "Sebt bu kökten", balagha_note: "Uykunun rahatlık ve kesintisizlik anlamı" },
        ],
      },
      {
        surah: 78, ayah: 10,
        arabic: "وَجَعَلۡنَا ٱلَّيۡلَ لِبَاسٗا",
        translation: "Geceyi bir örtü yaptık.",
        words: [
          { arabic: "وَجَعَلۡنَا", transliteration: "ve ce'alnâ", root: "ج-ع-ل", pattern: "فَعَلَ", pos: "fil", meaning_tr: "ve kıldık, yaptık", irab: "{Fiil-i mâzî} I. bâb, birinci şahıs çoğul.", irab_short: "mâzî, I. bâb", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلَّيۡلَ", transliteration: "el-leyle", root: "ل-ي-ل", pos: "ism", meaning_tr: "geceyi", irab: "{Mef'ûl bih evvel} جَعَلَ fiilinin birinci mef'ûlü, mansûb.", irab_short: "mef'ûl bih, mansûb", turkish_bridge: "Leyl bu kökten", balagha_note: null },
          { arabic: "لِبَاسٗا", transliteration: "libâsen", root: "ل-ب-س", pattern: "فِعَال", pos: "ism", meaning_tr: "örtü, elbise", irab: "{Mef'ûl bih sânî} جَعَلَ fiilinin ikinci mef'ûlü, mansûb.", irab_short: "mef'ûl bih sânî", turkish_bridge: "Libas bu kökten", balagha_note: "Gecenin her şeyi örtmesi için güzel istiâre" },
        ],
      },
      {
        surah: 78, ayah: 11,
        arabic: "وَجَعَلۡنَا ٱلنَّهَارَ مَعَاشٗا",
        translation: "Gündüzü geçim zamanı kıldık.",
        words: [
          { arabic: "وَجَعَلۡنَا", transliteration: "ve ce'alnâ", root: "ج-ع-ل", pattern: "فَعَلَ", pos: "fil", meaning_tr: "ve kıldık, yaptık", irab: "{Fiil-i mâzî} I. bâb, birinci şahıs çoğul.", irab_short: "mâzî, I. bâb", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلنَّهَارَ", transliteration: "en-nehâre", root: "ن-ه-ر", pos: "ism", meaning_tr: "gündüzü", irab: "{Mef'ûl bih evvel} جَعَلَ fiilinin birinci mef'ûlü, mansûb.", irab_short: "mef'ûl bih, mansûb", turkish_bridge: "Nehâr bu kökten", balagha_note: null },
          { arabic: "مَعَاشٗا", transliteration: "me'âşen", root: "ع-ي-ش", pattern: "مَفْعَال", pos: "ism", meaning_tr: "geçim, yaşam zamanı", irab: "{Mef'ûl bih sânî} جَعَلَ fiilinin ikinci mef'ûlü, mansûb.", irab_short: "mef'ûl bih sânî", turkish_bridge: "Maişet, aş bu kökten", balagha_note: "Gece-gündüz arasında güzel tıbâk" },
        ],
      },
      {
        surah: 78, ayah: 12,
        arabic: "وَبَنَيۡنَا فَوۡقَكُمۡ سَبۡعٗا شِدَادٗا",
        translation: "Üstünüze yedi kat sağlam gök inşa ettik.",
        words: [
          { arabic: "وَبَنَيۡنَا", transliteration: "ve beneynâ", root: "ب-ن-ي", pattern: "فَعَلَ", pos: "fil", meaning_tr: "ve inşa ettik, bina ettik", irab: "{Fiil-i mâzî} I. bâb, birinci şahıs çoğul.", irab_short: "mâzî, I. bâb", turkish_bridge: "Bina, binâ bu kökten", balagha_note: null },
          { arabic: "فَوۡقَكُمۡ", transliteration: "fevkaküm", root: "ف-و-ق", pos: "ism", meaning_tr: "üstünüzde", irab: "{Zarf} مكان zarfı, fiille müteallik.", irab_short: "zarf-ı mekân", turkish_bridge: "Fevk bu kökten", balagha_note: null },
          { arabic: "سَبۡعٗا", transliteration: "seb'an", root: "س-ب-ع", pos: "ism", meaning_tr: "yedi tane", irab: "{Mef'ûl bih} بَنَيْنَا fiilinin mef'ûlü, mansûb.", irab_short: "mef'ûl bih, mansûb", turkish_bridge: "Seb'a bu kökten", balagha_note: null },
          { arabic: "شِدَادٗا", transliteration: "şidâden", root: "ش-د-د", pattern: "فِعَال", pos: "ism", meaning_tr: "sağlam, güçlü", irab: "{Sıfat} سَبْعاً kelimesinin sıfatı, mansûb.", irab_short: "sıfat, mansûb", turkish_bridge: "Şiddet, şedîd bu kökten", balagha_note: "Göklerin sağlamlığını vurgulayan sıfat" },
        ],
      },
      {
        surah: 78, ayah: 13,
        arabic: "وَجَعَلۡنَا سِرَاجٗا وَهَّاجٗا",
        translation: "Parlak ışık saçan kandil yarattık.",
        words: [
          { arabic: "وَجَعَلۡنَا", transliteration: "ve ce'alnâ", root: "ج-ع-ل", pattern: "فَعَلَ", pos: "fil", meaning_tr: "ve kıldık, yarattık", irab: "{Fiil-i mâzî} I. bâb, birinci şahıs çoğul.", irab_short: "mâzî, I. bâb", turkish_bridge: null, balagha_note: null },
          { arabic: "سِرَاجٗا", transliteration: "sirâcen", root: "س-ر-ج", pattern: "فِعَال", pos: "ism", meaning_tr: "kandil, lamba", irab: "{Mef'ûl bih} جَعَلَ fiilinin mef'ûlü, mansûb.", irab_short: "mef'ûl bih, mansûb", turkish_bridge: "Sirac bu kökten", balagha_note: "Güneş için güzel mecaz" },
          { arabic: "وَهَّاجٗا", transliteration: "vehhâcen", root: "و-ه-ج", pattern: "فَعَّال", pos: "ism", meaning_tr: "çok parlak, ışık saçan", irab: "{Sıfat} سِرَاجاً kelimesinin sıfatı, mansûb.", irab_short: "sıfat, mansûb", turkish_bridge: null, balagha_note: "Mübalağa sîgası ile güneşin şiddetli parlaklığı" },
        ],
      },
      {
        surah: 78, ayah: 14,
        arabic: "وَأَنزَلۡنَا مِنَ ٱلۡمُعۡصِرَٰتِ مَآءٗ ثَجَّاجٗا",
        translation: "Yoğunlaşmış bulutlardan bol bol su indirdik.",
        words: [
          { arabic: "وَأَنزَلۡنَا", transliteration: "ve enzelnâ", root: "ن-ز-ل", pattern: "أَفْعَلَ", pos: "fil", meaning_tr: "ve indirdik", irab: "{Fiil-i mâzî} IV. bâb, birinci şahıs çoğul.", irab_short: "mâzî, IV. bâb", turkish_bridge: "Nüzul, münezzil bu kökten", balagha_note: null },
          { arabic: "مِنَ", transliteration: "mine", root: null, pos: "harf", meaning_tr: "-den", irab: "{Harf-i cerr} ابتدâء-i gâye ifade eder.", irab_short: "harf-i cerr", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلۡمُعۡصِرَٰتِ", transliteration: "el-mu'sirâti", root: "ع-ص-ر", pattern: "مُفْعِل", pos: "ism", meaning_tr: "sıkan bulutlar, yoğunlaşmış bulutlar", irab: "{Mecrûr} مِنَ edatıyla mecrûr, kesre ile.", irab_short: "mecrûr", turkish_bridge: "Asr bu kökten", balagha_note: "Bulutların su sıkma özelliği için mecaz" },
          { arabic: "مَآءٗ", transliteration: "mâen", root: "م-و-ه", pos: "ism", meaning_tr: "su", irab: "{Mef'ûl bih} أَنْزَلَ fiilinin mef'ûlü, mansûb.", irab_short: "mef'ûl bih, mansûb", turkish_bridge: "Mâ bu kökten", balagha_note: null },
          { arabic: "ثَجَّاجٗا", transliteration: "seccâcen", root: "ث-ج-ج", pattern: "فَعَّال", pos: "ism", meaning_tr: "bol bol akan, şarıl şarıl", irab: "{Sıfat} مَاءً kelimesinin sıfatı, mansûb.", irab_short: "sıfat, mansûb", turkish_bridge: null, balagha_note: "Mübalağa sîgası ile suyun bolluğu ve akış şiddeti" },
        ],
      },
      {
        surah: 78, ayah: 15,
        arabic: "لِّنُخۡرِجَ بِهِۦ حَبّٗا وَنَبَاتٗا",
        translation: "Onunla taneler ve bitkiler çıkaralım diye.",
        words: [
          { arabic: "لِّنُخۡرِجَ", transliteration: "li-nuhrice", root: "خ-ر-ج", pattern: "أَفْعَلَ", pos: "fil", meaning_tr: "çıkaralım diye", irab: "{Fiil-i muzâri'} IV. bâb, لِ ile mansûb, غرض ve gaye ifade eder.", irab_short: "muzâri', mansûb, gaye", turkish_bridge: "Hurûc, mahreç bu kökten", balagha_note: null },
          { arabic: "بِهِۦ", transliteration: "bihî", root: null, pos: "harf", meaning_tr: "onunla", irab: "{Câr-mecrûr} بِ + zamîr, âlet câr-mecrûru.", irab_short: "câr-mecrûr, âlet", turkish_bridge: null, balagha_note: null },
          { arabic: "حَبّٗا", transliteration: "habben", root: "ح-ب-ب", pos: "ism", meaning_tr: "taneler, hububat", irab: "{Mef'ûl bih} نُخْرِجَ fiilinin mef'ûlü, mansûb.", irab_short: "mef'ûl bih, mansûb", turkish_bridge: "Habb, habîbe bu kökten", balagha_note: null },
          { arabic: "وَنَبَاتٗا", transliteration: "ve nebâten", root: "ن-ب-ت", pattern: "فَعَال", pos: "ism", meaning_tr: "ve bitkiler", irab: "{Mef'ûl bih} وَ ile معطوف, نُخْرِجَ fiilinin mef'ûlü, mansûb.", irab_short: "mef'ûl bih, atıf", turkish_bridge: "Nebât bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 78, ayah: 16,
        arabic: "وَجَنَّـٰتٍ أَلۡفَافًا",
        translation: "Ve sarmaş dolaş bahçeler.",
        words: [
          { arabic: "وَجَنَّـٰتٍ", transliteration: "ve cennâtin", root: "ج-ن-ن", pattern: "فَعَّال", pos: "ism", meaning_tr: "ve bahçeler", irab: "{Mef'ûl bih} وَ ile معطوف, نُخْرِجَ fiilinin mef'ûlü, mansûb.", irab_short: "mef'ûl bih, atıf", turkish_bridge: "Cennet, cin bu kökten", balagha_note: null },
          { arabic: "أَلۡفَافًا", transliteration: "elfâfen", root: "ل-ف-ف", pattern: "أَفْعَال", pos: "ism", meaning_tr: "sarmaş dolaş, iç içe geçmiş", irab: "{Sıfat} جَنَّاتٍ kelimesinin sıfatı, mansûb.", irab_short: "sıfat, mansûb", turkish_bridge: "Leff, lâfet bu kökten", balagha_note: "Bahçelerin sıklığı ve güzelliği için veciz tasvir" },
        ],
      },
      {
        surah: 78, ayah: 17,
        arabic: "إِنَّ يَوۡمَ ٱلۡفَصۡلِ كَانَ مِيقَٰتٗا",
        translation: "Şüphesiz hüküm günü belirlenmiş bir vakittir.",
        words: [
          { arabic: "إِنَّ", transliteration: "inne", root: null, pos: "harf", meaning_tr: "şüphesiz, gerçekten", irab: "{Harf-i müşebbehe bi'l-fi'l} te'kîd edatı, ismini mansûb yapar.", irab_short: "inne, te'kîd", turkish_bridge: null, balagha_note: "Te'kîd ile kesin haber verme" },
          { arabic: "يَوۡمَ", transliteration: "yevme", root: "ي-و-م", pos: "ism", meaning_tr: "günü", irab: "{İsm-i inne} إِنَّ'nin ismi, mansûb.", irab_short: "ism-i inne, mansûb", turkish_bridge: "Yevm bu kökten", balagha_note: null },
          { arabic: "ٱلۡفَصۡلِ", transliteration: "el-fasli", root: "ف-ص-ل", pattern: "فَعْل", pos: "ism", meaning_tr: "hükmün, ayırmanın", irab: "{Muzâf ileyh} يَوْمَ kelimesine muzâf, mecrûr.", irab_short: "muzâf ileyh", turkish_bridge: "Fasl, fasıl bu kökten", balagha_note: "Kıyametin hak-bâtıl ayırım gününü belirtir" },
          { arabic: "كَانَ", transliteration: "kâne", root: "ك-و-ن", pattern: "فَعَلَ", pos: "fil", meaning_tr: "idi, olmuştur", irab: "{Fiil-i nâkıs} إِنَّ cümlesinin haberi konumunda, mâzî.", irab_short: "fiil-i nâkıs, mâzî", turkish_bridge: "Kevn bu kökten", balagha_note: null },
          { arabic: "مِيقَٰتٗا", transliteration: "mîkâten", root: "و-ق-ت", pattern: "مِفْعَال", pos: "ism", meaning_tr: "belirlenmiş vakit", irab: "{Haber-i kâne} كَانَ fiilinin haberi, mansûb.", irab_short: "haber-i kâne, mansûb", turkish_bridge: "Vakt, muvakkat bu kökten", balagha_note: "Zamanın kesin tesbit edildiğini vurgular" },
        ],
      },
    ],
    exercises: [],
  },
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 2 — NEBE 78:18-30
  // ═══════════════════════════════════════════════════════════
  {
    id: "S78-B02-nebe",
    title: "Nebe (18-30)",
    titleAr: "سُورَة النبإ 18-30",
    stage: 2,
    level: 8,
    surah: 78,
    description: "Bu bölüm kıyamet günündeki büyük dönüşümü ve inkarcıların cehennemdeki akıbetini tasvir eder.",
    verses: [
      {
        surah: 78, ayah: 18,
        arabic: "يَوۡمَ يُنفَخُ فِي ٱلصُّورِ فَتَأۡتُونَ أَفۡوَاجٗا",
        translation: "Sura üfürüldüğü gün hepiniz bölük bölük gelirsiniz.",
        words: [
          { arabic: "يَوۡمَ", transliteration: "yevme", root: "ي-و-م", pos: "ism", meaning_tr: "gün", irab: "{Zarf-ı zaman}, mensûb olarak kullanılmış. Önceki ayetlerdeki kıyamet vakti ile bağlantılı zaman zarfıdır.", irab_short: "zarf-ı zaman, mensûb", turkish_bridge: null, balagha_note: null },
          { arabic: "يُنفَخُ", transliteration: "yünfehu", root: "ن-ف-خ", pattern: "يُفْعَلُ", pos: "fil", meaning_tr: "üfürülür", irab: "{Fiil-i muzâri}, I. bâb, meçhul sigası. Nâib-i fâil mahzûf (fâil yerine geçen öge belirtilmemiş).", irab_short: "muzâri, meçhul, I. bâb", turkish_bridge: "Nefes kelimesi bu köktendir", balagha_note: null },
          { arabic: "فِي", transliteration: "fî", root: null, pos: "harf", meaning_tr: "içinde, -de", irab: "{Harf-i cer}, sonrasındaki kelimeyi mecrûr yapar.", irab_short: "harf-i cer", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلصُّورِ", transliteration: "es-sûri", root: "ص-و-ر", pos: "ism", meaning_tr: "sur (kıyamet borusu)", irab: "{İsm-i mecrûr}, fî harfi cerrinin etkisiyle mecrûr olmuştur.", irab_short: "mecrûr", turkish_bridge: "Sur kelimesi bu kökten", balagha_note: null },
          { arabic: "فَتَأۡتُونَ", transliteration: "fete'tûne", root: "أ-ت-ي", pattern: "تَفْعِلُونَ", pos: "fil", meaning_tr: "gelirsiniz", irab: "{Fiil-i muzâri}, I. bâb, hitap sigası, çoğul. Başındaki fâ {atf harfi} önceki fiille bağlantı kurar.", irab_short: "muzâri, II. şahıs, çoğul", turkish_bridge: null, balagha_note: null },
          { arabic: "أَفۡوَاجٗا", transliteration: "efvâcen", root: "ف-و-ج", pattern: "أَفْعَالٌ", pos: "ism", meaning_tr: "gruplar halinde, bölük bölük", irab: "{Hâl}, filin nasıl yapıldığını belirten durum ifadesi olarak mensûb.", irab_short: "hâl, mensûb", turkish_bridge: "Fırkadan bu köke yakın", balagha_note: null },
        ],
      },
      {
        surah: 78, ayah: 19,
        arabic: "وَفُتِحَتِ ٱلسَّمَآءُ فَكَانَتۡ أَبۡوَٰبٗا",
        translation: "Gökler kapı kapı açılacaktır.",
        words: [
          { arabic: "وَفُتِحَتِ", transliteration: "vefütihati", root: "ف-ت-ح", pattern: "فُعِلَتْ", pos: "fil", meaning_tr: "açıldı", irab: "{Fiil-i mâzî}, I. bâb, meçhul sigası, müennes. Başındaki vâv {atf harfi} önceki cümleyle bağlar.", irab_short: "mâzî, meçhul, müennes", turkish_bridge: "Fetih, fâtih kelimeleri bu kökten", balagha_note: null },
          { arabic: "ٱلسَّمَآءُ", transliteration: "es-semâu", root: "س-م-و", pos: "ism", meaning_tr: "gök, sema", irab: "{Nâib-i fâil}, meçhul fiilde fâil yerine geçen öge olarak merfû.", irab_short: "nâib-i fâil, merfû", turkish_bridge: "Sema kelimesi bu kökten", balagha_note: null },
          { arabic: "فَكَانَتۡ", transliteration: "fekânet", root: "ك-و-ن", pattern: "فَعَلَتْ", pos: "fil", meaning_tr: "oldu", irab: "{Fiil-i nâkıs}, müennes sigası. Başındaki fâ {atf harfi} sonuç bildirir.", irab_short: "nâkıs, müennes", turkish_bridge: "Kâinat kelimesi bu kökten", balagha_note: null },
          { arabic: "أَبۡوَٰبٗا", transliteration: "ebvâben", root: "ب-و-ب", pattern: "أَفْعَالٌ", pos: "ism", meaning_tr: "kapılar", irab: "{Haber-i kâne}, kâne fiilinin haberi olarak mensûb.", irab_short: "haber-i kâne, mensûb", turkish_bridge: "Bâb kelimesi bu kökten", balagha_note: "Kapı kapı olması mübalağa sanatıyla göğün tamamen açılmasını ifade eder" },
        ],
      },
      {
        surah: 78, ayah: 20,
        arabic: "وَسُيِّرَتِ ٱلۡجِبَالُ فَكَانَتۡ سَرَابًا",
        translation: "Dağlar yürütülüp serap olacaktır.",
        words: [
          { arabic: "وَسُيِّرَتِ", transliteration: "vesüyyiret", root: "س-ي-ر", pattern: "فُعِّلَتْ", pos: "fil", meaning_tr: "yürütüldü, hareket ettirildi", irab: "{Fiil-i mâzî}, II. bâb, meçhul sigası, müennes. Başındaki vâv {atf harfi} önceki cümleyle bağlar.", irab_short: "mâzî, meçhul, II. bâb", turkish_bridge: "Seyr, seyir kelimeleri bu kökten", balagha_note: null },
          { arabic: "ٱلۡجِبَالُ", transliteration: "el-cibâlu", root: "ج-ب-ل", pattern: "فِعَالٌ", pos: "ism", meaning_tr: "dağlar", irab: "{Nâib-i fâil}, meçhul fiilde fâil yerine geçen öge olarak merfû.", irab_short: "nâib-i fâil, merfû", turkish_bridge: "Cebel kelimesi bu kökten", balagha_note: null },
          { arabic: "فَكَانَتۡ", transliteration: "fekânet", root: "ك-و-ن", pattern: "فَعَلَتْ", pos: "fil", meaning_tr: "oldu", irab: "{Fiil-i nâkıs}, müennes sigası. Başındaki fâ {atf harfi} sonuç bildirir.", irab_short: "nâkıs, müennes", turkish_bridge: "Kâinat kelimesi bu kökten", balagha_note: null },
          { arabic: "سَرَابًا", transliteration: "serâben", root: "س-ر-ب", pos: "ism", meaning_tr: "serap", irab: "{Haber-i kâne}, kâne fiilinin haberi olarak mensûb.", irab_short: "haber-i kâne, mensûb", turkish_bridge: "Serap kelimesi bu kökten", balagha_note: "Dağların serap olması güçlü bir istiâre, katı olanın görüntüye dönüşmesini anlatır" },
        ],
      },
      {
        surah: 78, ayah: 21,
        arabic: "إِنَّ جَهَنَّمَ كَانَتۡ مِرۡصَادٗا",
        translation: "Cehennem, yalnız azgınları bekleyen yerdir.",
        words: [
          { arabic: "إِنَّ", transliteration: "inne", root: null, pos: "harf", meaning_tr: "şüphesiz, gerçekten", irab: "{Harf-i müşebbehe bi'l-fi'l}, te'kîd için kullanılan harf. Sonrasındaki kelimeyi mensûb yapar.", irab_short: "harf-i müşebbehe", turkish_bridge: null, balagha_note: "Te'kîd sanatı ile kesinlik bildirir" },
          { arabic: "جَهَنَّمَ", transliteration: "cehenneme", root: null, pos: "ism", meaning_tr: "cehennem", irab: "{İsm-i inne}, inne harfinin etkisiyle mensûb olan özel isim.", irab_short: "ism-i inne, mensûb", turkish_bridge: "Cehennem kelimesi Arapçadan geçmiştir", balagha_note: null },
          { arabic: "كَانَتۡ", transliteration: "kânet", root: "ك-و-ن", pattern: "فَعَلَتْ", pos: "fil", meaning_tr: "idi, oldu", irab: "{Fiil-i nâkıs}, müennes sigası. İsm-i inne ile haberi arasında yer alır.", irab_short: "nâkıs, müennes", turkish_bridge: "Kâinat kelimesi bu kökten", balagha_note: null },
          { arabic: "مِرۡصَادٗا", transliteration: "mirsâden", root: "ر-ص-د", pattern: "مِفْعَالٌ", pos: "ism", meaning_tr: "gözetleme yeri, pusu yeri", irab: "{Haber-i inne}, inne'nin haberi olarak mensûb.", irab_short: "haber-i inne, mensûb", turkish_bridge: "Rasad, mersad kelimeleri bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 78, ayah: 22,
        arabic: "لِّلطَّـٰغِينَ مَـَٔابٗا",
        translation: "Azgınlar için son varılacak yer olmuştur.",
        words: [
          { arabic: "لِّلطَّـٰغِينَ", transliteration: "lit-tâğîne", root: "ط-غ-ي", pattern: "فَاعِلِينَ", pos: "ism", meaning_tr: "azgınlar için", irab: "{Câr-mecrûr}, lâm harfi cerrinin etkisiyle mecrûr olan çoğul ism-i fâil.", irab_short: "mecrûr, çoğul", turkish_bridge: "Tuğyan kelimesi bu kökten", balagha_note: null },
          { arabic: "مَـَٔابٗا", transliteration: "meâben", root: "أ-و-ب", pattern: "مَفْعَلٌ", pos: "ism", meaning_tr: "dönülecek yer", irab: "{Hâl} veya {Temyîz} olarak mensûb. Cehennemin durumunu açıklar.", irab_short: "hâl/temyîz, mensûb", turkish_bridge: "Evâb, tövbe kökü ile ilişkili", balagha_note: null },
        ],
      },
      {
        surah: 78, ayah: 23,
        arabic: "لَّـٰبِثِينَ فِيهَآ أَحۡقَابٗا",
        translation: "Orada çağlar boyunca kalacaklardır.",
        words: [
          { arabic: "لَّـٰبِثِينَ", transliteration: "lâbisîne", root: "ل-ب-ث", pattern: "فَاعِلِينَ", pos: "ism", meaning_tr: "kalanlar, duranlar", irab: "{Hâl}, azgınların durumunu bildiren hâl olarak mensûb çoğul ism-i fâil.", irab_short: "hâl, mensûb", turkish_bridge: null, balagha_note: null },
          { arabic: "فِيهَآ", transliteration: "fîhâ", root: null, pos: "harf", meaning_tr: "onda, orada", irab: "{Câr-mecrûr}, fî harfi cerrinin muttasıl zamir ile birleşimi. Yer zarfı belirtir.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "أَحۡقَابٗا", transliteration: "ahkâben", root: "ح-ق-ب", pattern: "أَفْعَالٌ", pos: "ism", meaning_tr: "çağlar, uzun süreler", irab: "{Zarf-ı zaman}, süre belirten zaman zarfı olarak mensûb.", irab_short: "zarf-ı zaman, mensûb", turkish_bridge: null, balagha_note: "Uzun süreyi vurgulamak için çoğul kullanımı" },
        ],
      },
      {
        surah: 78, ayah: 24,
        arabic: "لَّا يَذُوقُونَ فِيهَا بَرۡدٗا وَلَا شَرَابًا",
        translation: "Orada ne serinlik ne de içilecek bir şey tatmazlar.",
        words: [
          { arabic: "لَّا", transliteration: "lâ", root: null, pos: "harf", meaning_tr: "değil, -mez", irab: "{Harf-i nefy}, fiili olumsuz yapan nefy edatı.", irab_short: "harf-i nefy", turkish_bridge: null, balagha_note: null },
          { arabic: "يَذُوقُونَ", transliteration: "yezûkûne", root: "ذ-و-ق", pattern: "يَفْعِلُونَ", pos: "fil", meaning_tr: "tatarlar", irab: "{Fiil-i muzâri}, I. bâb, üçüncü şahıs çoğul muzekker. Lâ harfi nefy ile olumsuz.", irab_short: "muzâri, III. şahıs, çoğul", turkish_bridge: "Zevk kelimesi bu kökten", balagha_note: null },
          { arabic: "فِيهَا", transliteration: "fîhâ", root: null, pos: "harf", meaning_tr: "onda, orada", irab: "{Câr-mecrûr}, fî harfi cerrinin muttasıl zamir ile birleşimi. Yer zarfı belirtir.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "بَرۡدٗا", transliteration: "berden", root: "ب-ر-د", pos: "ism", meaning_tr: "serinlik", irab: "{Mef'ûl bih}, filin nesnesi olarak mensûb.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Bard, bürudet kelimeleri bu kökten", balagha_note: null },
          { arabic: "وَلَا", transliteration: "velâ", root: null, pos: "harf", meaning_tr: "ve değil", irab: "{Atf harfi} ve {nefy harfi} birleşimi. Önceki olumsuzluğu tekrarlar.", irab_short: "atf ve nefy", turkish_bridge: null, balagha_note: "Tekrarlı nefy ile vurgu" },
          { arabic: "شَرَابًا", transliteration: "şerâben", root: "ش-ر-ب", pattern: "فَعَالٌ", pos: "ism", meaning_tr: "içecek", irab: "{Mef'ûl bih}, atf ile önceki mef'ûle bağlı olarak mensûb.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Şerbet, şarap kelimeleri bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 78, ayah: 25,
        arabic: "إِلَّا حَمِيمٗا وَغَسَّاقٗا",
        translation: "Ancak bir kaynar su ve irin.",
        words: [
          { arabic: "إِلَّا", transliteration: "illâ", root: null, pos: "harf", meaning_tr: "ancak, sadece", irab: "{Harf-i istisnâ}, istisna bildiren harf. Önceki nefyden istisna yapar.", irab_short: "harf-i istisnâ", turkish_bridge: null, balagha_note: null },
          { arabic: "حَمِيمٗا", transliteration: "hamîmen", root: "ح-م-م", pattern: "فَعِيلٌ", pos: "ism", meaning_tr: "kaynar su", irab: "{Müstesnâ}, istisna edilen öge olarak mensûb.", irab_short: "müstesnâ, mensûb", turkish_bridge: "Ham, hamam kelimeleri bu kökten", balagha_note: null },
          { arabic: "وَغَسَّاقٗا", transliteration: "vegassâken", root: "غ-س-ق", pattern: "فَعَّالٌ", pos: "ism", meaning_tr: "irin, pis akıntı", irab: "{Atf}, önceki müstesnâya atfedilen kelime olarak mensûb.", irab_short: "atf, mensûb", turkish_bridge: null, balagha_note: "İki kötü içeceğin zıt niteliklerle birleşimi (sıcak-soğuk)" },
        ],
      },
      {
        surah: 78, ayah: 26,
        arabic: "جَزَآءٗ وِفَاقًا",
        translation: "Bir ceza ki tam yaptıklarına uygun.",
        words: [
          { arabic: "جَزَآءٗ", transliteration: "cezâen", root: "ج-ز-ي", pattern: "فَعَالٌ", pos: "ism", meaning_tr: "karşılık, ceza", irab: "{Mef'ûl li eclih}, sebep bildiren mef'ûl olarak mensûb.", irab_short: "mef'ûl li eclih, mensûb", turkish_bridge: "Ceza kelimesi bu kökten", balagha_note: null },
          { arabic: "وِفَاقًا", transliteration: "vifâken", root: "و-ف-ق", pattern: "فِعَالٌ", pos: "ism", meaning_tr: "uygun, müvafık", irab: "{Sıfat}, önceki kelimeyi niteleyen sıfat olarak mensûb.", irab_short: "sıfat, mensûb", turkish_bridge: "Vifak, muvâfık kelimeleri bu kökten", balagha_note: "Adaletin tam yerini bulduğunu vurgular" },
        ],
      },
      {
        surah: 78, ayah: 27,
        arabic: "إِنَّهُمۡ كَانُواْ لَا يَرۡجُونَ حِسَابٗا",
        translation: "Çünkü onlar, hesaba çekileceklerini sanmazlardı.",
        words: [
          { arabic: "إِنَّهُمۡ", transliteration: "innehüm", root: null, pos: "harf", meaning_tr: "çünkü onlar", irab: "{Harf-i müşebbehe} ve {muttasıl zamir} birleşimi. Te'kîd harfi ile üçüncü şahıs çoğul zamiri.", irab_short: "harf-i müşebbehe + zamir", turkish_bridge: null, balagha_note: "Sebep açıklaması için te'kîdli başlangıç" },
          { arabic: "كَانُواْ", transliteration: "kânû", root: "ك-و-ن", pattern: "فَعَلُوا", pos: "fil", meaning_tr: "idiler", irab: "{Fiil-i nâkıs}, üçüncü şahıs çoğul muzekker. İnne'nin haberi cümlesinin başı.", irab_short: "nâkıs, III. şahıs, çoğul", turkish_bridge: "Kâinat kelimesi bu kökten", balagha_note: null },
          { arabic: "لَا", transliteration: "lâ", root: null, pos: "harf", meaning_tr: "değil, -mez", irab: "{Harf-i nefy}, sonraki fiili olumsuz yapan nefy harfi.", irab_short: "harf-i nefy", turkish_bridge: null, balagha_note: null },
          { arabic: "يَرۡجُونَ", transliteration: "yercûne", root: "ر-ج-و", pattern: "يَفْعِلُونَ", pos: "fil", meaning_tr: "umarlar, beklerler", irab: "{Fiil-i muzâri}, I. bâb, üçüncü şahıs çoğul. Kâne'nin haberi olarak merfû.", irab_short: "muzâri, III. şahıs, çoğul", turkish_bridge: "Recâ kelimesi bu kökten", balagha_note: null },
          { arabic: "حِسَابٗا", transliteration: "hisâben", root: "ح-س-ب", pattern: "فِعَالٌ", pos: "ism", meaning_tr: "hesap", irab: "{Mef'ûl bih}, filin nesnesi olarak mensûb.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Hesap, muhasebe kelimeleri bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 78, ayah: 28,
        arabic: "وَكَذَّبُواْ بِـَٔايَٰتِنَا كِذَّابٗا",
        translation: "Ayetlerimizi hep yalan sayıp dururlardı.",
        words: [
          { arabic: "وَكَذَّبُواْ", transliteration: "vekeззebû", root: "ك-ذ-ب", pattern: "فَعَّلُوا", pos: "fil", meaning_tr: "yalanladılar", irab: "{Fiil-i mâzî}, II. bâb, üçüncü şahıs çoğul. Başındaki vâv {atf harfi} önceki cümleye bağlar.", irab_short: "mâzî, II. bâb, çoğul", turkish_bridge: "Kizb, tekzîb kelimeleri bu kökten", balagha_note: null },
          { arabic: "بِـَٔايَٰتِنَا", transliteration: "biâyâtinâ", root: "أ-ي-ي", pattern: "فَعَلَاتٌ", pos: "ism", meaning_tr: "ayetlerimizle", irab: "{Câr-mecrûr}, bâ harfi cerrinin etkisiyle mecrûr olan çoğul kelime. Zamîr-i mütekellim maalgayr eklendi.", irab_short: "mecrûr, çoğul + zamir", turkish_bridge: "Âyet kelimesi bu kökten", balagha_note: null },
          { arabic: "كِذَّابٗا", transliteration: "kiззâben", root: "ك-ذ-ب", pattern: "فِعَّالٌ", pos: "ism", meaning_tr: "sürekli yalanlama", irab: "{Mef'ûl mutlak}, fiilin türünü ve şiddetini bildiren masdar olarak mensûb.", irab_short: "mef'ûl mutlak, mensûb", turkish_bridge: "Kizb, tekzîb kelimeleri bu kökten", balagha_note: "Mübalağa kalıbı ile süreklilik ve şiddet vurgusu" },
        ],
      },
      {
        surah: 78, ayah: 29,
        arabic: "وَكُلَّ شَيۡءٍ أَحۡصَيۡنَٰهُ كِتَٰبٗا",
        translation: "Biz de herşeyi yazıp saymışızdır.",
        words: [
          { arabic: "وَكُلَّ", transliteration: "vekülle", root: "ك-ل-ل", pos: "ism", meaning_tr: "her", irab: "{Mef'ûl bih}, takdîm edilmiş nesne olarak mensûb. Başındaki vâv {atf harfi} önceki durumla karşıtlık kurar.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Kül, küllî kelimeleri bu kökten", balagha_note: "Takdîm-te'hîr sanatı ile vurgu" },
          { arabic: "شَيۡءٍ", transliteration: "şey'in", root: "ش-ي-ء", pos: "ism", meaning_tr: "şey", irab: "{Muzâf ileyh}, küll kelimesine izafet edilen kelime olarak mecrûr.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "Şey kelimesi Arapçadan geçmiştir", balagha_note: null },
          { arabic: "أَحۡصَيۡنَٰهُ", transliteration: "ahsaynâhü", root: "ح-ص-ي", pattern: "أَفْعَلْنَا", pos: "fil", meaning_tr: "saydık, kayda aldık", irab: "{Fiil-i mâzî}, IV. bâb, birinci şahıs çoğul. Muttasıl zamir mef'ûl bih.", irab_short: "mâzî, IV. bâb, I. şahıs", turkish_bridge: "İhsâ, tahassi kelimeleri bu kökten", balagha_note: null },
          { arabic: "كِتَٰبٗا", transliteration: "kitâben", root: "ك-ت-ب", pattern: "فِعَالٌ", pos: "ism", meaning_tr: "kitap olarak, yazılı olarak", irab: "{Hâl}, fiilin nasıl yapıldığını bildiren hâl olarak mensûb.", irab_short: "hâl, mensûb", turkish_bridge: "Kitap kelimesi bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 78, ayah: 30,
        arabic: "فَذُوقُواْ فَلَن نَّزِيدَكُمۡ إِلَّا عَذَابًا",
        translation: "Artık tadınız, bundan böyle size azabdan başka bir şey artırmayız.",
        words: [
          { arabic: "فَذُوقُواْ", transliteration: "fezûkû", root: "ذ-و-ق", pattern: "فُعْلُوا", pos: "fil", meaning_tr: "tadın", irab: "{Fiil-i emr}, ikinci şahıs çoğul. Başındaki fâ {atf harfi} sonuç bildirir.", irab_short: "emr, II. şahıs, çoğul", turkish_bridge: "Zevk kelimesi bu kökten", balagha_note: "İroni sanatı - acı tadımı emretmek" },
          { arabic: "فَلَن", transliteration: "felen", root: null, pos: "harf", meaning_tr: "asla -meyeceğiz", irab: "{Harf-i nefy ve istiḳbâl}, gelecek zamanı olumsuz yapan harf. Başındaki fâ {atf harfi}.", irab_short: "nefy ve istiḳbâl + atf", turkish_bridge: null, balagha_note: "Kesin olumsuzluk bildirimi" },
          { arabic: "نَّزِيدَكُمۡ", transliteration: "nezîdeküm", root: "ز-ي-د", pattern: "نَفْعِلُ", pos: "fil", meaning_tr: "artırmayız size", irab: "{Fiil-i muzâri}, I. bâb, birinci şahıs çoğul. Len harfinin etkisiyle mensûb. Muttasıl zamir mef'ûl bih.", irab_short: "muzâri, I. şahıs, mensûb", turkish_bridge: "Ziyade kelimesi bu kökten", balagha_note: null },
          { arabic: "إِلَّا", transliteration: "illâ", root: null, pos: "harf", meaning_tr: "ancak, sadece", irab: "{Harf-i istisnâ}, istisna bildiren harf.", irab_short: "harf-i istisnâ", turkish_bridge: null, balagha_note: null },
          { arabic: "عَذَابًا", transliteration: "azâben", root: "ع-ذ-ب", pattern: "فَعَالٌ", pos: "ism", meaning_tr: "azap", irab: "{Müstesnâ}, istisna edilen öge olarak mensûb.", irab_short: "müstesnâ, mensûb", turkish_bridge: "Azap kelimesi bu kökten", balagha_note: "Sadece kötülüğün artacağı tehdidi" },
        ],
      },
    ],
    exercises: [],
  },
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 3 — NEBE 78:31-39
  // ═══════════════════════════════════════════════════════════
  {
    id: "S78-B03-nebe",
    title: "Nebe (31-39)",
    titleAr: "سُورَة النبإ 31-39",
    stage: 2,
    level: 8,
    surah: 78,
    description: "Bu bölüm muttakîlerin cennet nimetlerini detaylandırır ve Allah'ın mutlak hakimiyetini vurgular.",
    verses: [
      {
        surah: 78, ayah: 31,
        arabic: "إِنَّ لِلۡمُتَّقِينَ مَفَازًا",
        translation: "Doğrusu, Allah'a karşı gelmekten sakınanlara kurtuluş vardır.",
        words: [
          { arabic: "إِنَّ", transliteration: "inne", root: null, pos: "harf", meaning_tr: "şüphesiz, doğrusu", irab: "{Hurûf-i müşebbehe bi'l-fi'l}. İsmi ve haberi bulunan te'kîd edatı.", irab_short: "inne edatı", turkish_bridge: null, balagha_note: "Te'kîd maksadıyla başta kullanılarak müjdeli haberin ehemmiyeti vurgulanmıştır" },
          { arabic: "لِلۡمُتَّقِينَ", transliteration: "lil-mütteḳîn", root: "و-ق-ي", pattern: "مُفْتَعِل", pos: "ism", meaning_tr: "takva sahipleri için, korunanlar için", irab: "{Câr-mecrûr takımı}. لِ harfi cer + مُتَّقِين cemî müzekker sâlim, mecrûr. Haberin müteallakıdır.", irab_short: "câr-mecrûr, mecrûr", turkish_bridge: "Takva bu kökten türemiştir", balagha_note: null },
          { arabic: "مَفَازًا", transliteration: "mefâzan", root: "ف-و-ز", pattern: "مَفْعَل", pos: "ism", meaning_tr: "kurtuluş yeri, kazanç, başarı", irab: "{Haber}. إنَّ edatının haberi, mensûb alameti fethadır.", irab_short: "haber-i inne, mensûb", turkish_bridge: "Fevz kelimesi bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 78, ayah: 32,
        arabic: "حَدَآئِقَ وَأَعۡنَٰبٗا",
        translation: "Bahçeler ve bağlar.",
        words: [
          { arabic: "حَدَآئِقَ", transliteration: "ḥadâiḳ", root: "ح-د-ق", pattern: "فَعَائِل", pos: "ism", meaning_tr: "bahçeler, yeşil alanlar", irab: "{Bedel}. Önceki مَفَازًا kelimesinin bedelidir, mensûb.", irab_short: "bedel, mensûb", turkish_bridge: "Hadika kelimesi bu kökten", balagha_note: "Mücmelden müfassala geçiş ile tafsilat verilmiştir" },
          { arabic: "وَأَعۡنَٰبٗا", transliteration: "ve a'nâban", root: "ع-ن-ب", pos: "ism", meaning_tr: "ve üzümler, bağlar", irab: "{Ma'tûf}. حَدَآئِقَ kelimesine atıf, mensûb.", irab_short: "ma'tûf, mensûb", turkish_bridge: "Inab kelimesi bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 78, ayah: 33,
        arabic: "وَكَوَاعِبَ أَتۡرَابٗا",
        translation: "Ve yaşıt, güzel kadınlar.",
        words: [
          { arabic: "وَكَوَاعِبَ", transliteration: "ve kevâ'ib", root: "ك-ع-ب", pattern: "فَوَاعِل", pos: "ism", meaning_tr: "ve genç güzel kadınlar", irab: "{Ma'tûf}. Önceki kelimeye atıf, mensûb.", irab_short: "ma'tûf, mensûb", turkish_bridge: "Ka'be bu kökten, yüksek anlamında", balagha_note: null },
          { arabic: "أَتۡرَابٗا", transliteration: "etrâban", root: "ت-ر-ب", pos: "ism", meaning_tr: "yaşıt, akran", irab: "{Sıfat}. كَوَاعِب kelimesinin sıfatı, mensûb.", irab_short: "sıfat, mensûb", turkish_bridge: "Türab (toprak) kelimesi bu kökten, aynı yaşta büyümek anlamında", balagha_note: null },
        ],
      },
      {
        surah: 78, ayah: 34,
        arabic: "وَكَأۡسٗا دِهَاقٗا",
        translation: "Ve dolu kadehler.",
        words: [
          { arabic: "وَكَأۡسٗا", transliteration: "ve ke'sen", root: "ك-أ-س", pos: "ism", meaning_tr: "ve kadeh, kâse", irab: "{Ma'tûf}. Önceki ma'tûflara atıf, mensûb.", irab_short: "ma'tûf, mensûb", turkish_bridge: "Kâse kelimesi bu kökten", balagha_note: null },
          { arabic: "دِهَاقٗا", transliteration: "dihâḳan", root: "د-ه-ق", pattern: "فِعَال", pos: "ism", meaning_tr: "dolu, taşar derecede", irab: "{Sıfat}. كَأْس kelimesinin sıfatı, mensûb.", irab_short: "sıfat, mensûb", turkish_bridge: null, balagha_note: null },
        ],
      },
      {
        surah: 78, ayah: 35,
        arabic: "لَّا يَسۡمَعُونَ فِيهَا لَغۡوٗا وَلَا كِذَّـٰبٗا",
        translation: "Orada boş ve yalan söz işitmezler.",
        words: [
          { arabic: "لَّا", transliteration: "lâ", root: null, pos: "harf", meaning_tr: "değil, -mez", irab: "{Nefiy edatı}. Muzârî fiili nefyeder.", irab_short: "nefiy edatı", turkish_bridge: null, balagha_note: null },
          { arabic: "يَسۡمَعُونَ", transliteration: "yesme'ûn", root: "س-م-ع", pattern: "يَفْعَلُونَ", pos: "fil", meaning_tr: "işitirler, duyarlar", irab: "{Fiil-i muzârî}. I. bâb, cemî müzekker gâib, merfû.", irab_short: "muzârî, I. bâb", turkish_bridge: "Sem', simak bu kökten", balagha_note: null },
          { arabic: "فِيهَا", transliteration: "fîhâ", root: null, pos: "harf", meaning_tr: "onda, orada", irab: "{Câr-mecrûr takımı}. فِي harfi cer + ضمير muttasıl müennes gâib. Filin müteallakıdır.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "لَغۡوٗا", transliteration: "lagven", root: "ل-غ-و", pattern: "فَعْل", pos: "ism", meaning_tr: "boş söz, anlamsız lakırdı", irab: "{Mef'ûl bih}. يَسْمَعُونَ fiilinin mef'ûlü, mensûb.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Lağv bu kökten", balagha_note: null },
          { arabic: "وَلَا", transliteration: "ve lâ", root: null, pos: "harf", meaning_tr: "ve değil", irab: "{Atıf harfi + nefiy edatı}. وَ atıf harfi + لَا nefiy.", irab_short: "atıf + nefiy", turkish_bridge: null, balagha_note: null },
          { arabic: "كِذَّـٰبٗا", transliteration: "kizzâban", root: "ك-ذ-ب", pattern: "فِعَّال", pos: "ism", meaning_tr: "çok yalan, iftira", irab: "{Ma'tûf}. لَغْوًا kelimesine atıf, mensûb.", irab_short: "ma'tûf, mensûb", turkish_bridge: "Kizb, küzzâb bu kökten", balagha_note: "Mübalağa sîgasıyla yalanın şiddetine işaret edilmiştir" },
        ],
      },
      {
        surah: 78, ayah: 36,
        arabic: "جَزَآءٗ مِّن رَّبِّكَ عَطَآءً حِسَابٗا",
        translation: "Bunlar Rabbinin katından, hesabına göre verilmiş karşılıktır.",
        words: [
          { arabic: "جَزَآءٗ", transliteration: "cezâ'en", root: "ج-ز-ي", pattern: "فَعَال", pos: "ism", meaning_tr: "karşılık, mükâfat", irab: "{Mef'ûl li eclih}. Sebep bildiren mef'ûl, mensûb.", irab_short: "mef'ûl li eclih, mensûb", turkish_bridge: "Ceza kelimesi bu kökten", balagha_note: null },
          { arabic: "مِّن رَّبِّكَ", transliteration: "min rabbik", root: "ر-ب-ب", pattern: "فَعْل", pos: "ism", meaning_tr: "senin Rabbinden", irab: "{Câr-mecrûr takımı}. مِن harfi cer + رَبّ mecrûr + ضمير muttasıl müzâf ileyh.", irab_short: "câr-mecrûr, mecrûr", turkish_bridge: "Rab kelimesi bu kökten", balagha_note: null },
          { arabic: "عَطَآءً", transliteration: "'atâ'en", root: "ع-ط-و", pattern: "فَعَال", pos: "ism", meaning_tr: "bahşiş, ihsan", irab: "{Bedel}. جَزَاءً kelimesinin bedel-i kül min küllü, mensûb.", irab_short: "bedel, mensûb", turkish_bridge: "Atiyye bu kökten", balagha_note: null },
          { arabic: "حِسَابٗا", transliteration: "ḥisâban", root: "ح-س-ب", pattern: "فِعَال", pos: "ism", meaning_tr: "hesap, yeterli miktar", irab: "{Sıfat}. عَطَاءً kelimesinin sıfatı, mensûb.", irab_short: "sıfat, mensûb", turkish_bridge: "Hesap bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 78, ayah: 37,
        arabic: "رَّبِّ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَمَا بَيۡنَهُمَا ٱلرَّحۡمَٰنِۖ لَا يَمۡلِكُونَ مِنۡهُ خِطَابٗا",
        translation: "O, göklerin, yerin ve ikisi arasında olanların Rabbidir. O Rahman'dır. Hiç kimse O'nun huzurunda konuşma yetkisine sahip değildir.",
        words: [
          { arabic: "رَّبِّ", transliteration: "rabb", root: "ر-ب-ب", pattern: "فَعْل", pos: "ism", meaning_tr: "rabbi, sahibi", irab: "{Sıfat}. رَبّك kelimesinin sıfatı, mecrûr.", irab_short: "sıfat, mecrûr", turkish_bridge: "Rab kelimesi bu kökten", balagha_note: null },
          { arabic: "ٱلسَّمَٰوَٰتِ", transliteration: "es-semâvât", root: "س-م-و", pattern: "فَعَلَات", pos: "ism", meaning_tr: "göklerin", irab: "{Muzâf ileyh}. رَبّ kelimesinin muzâf ileyhi, mecrûr.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "Sema bu kökten", balagha_note: null },
          { arabic: "وَٱلۡأَرۡضِ", transliteration: "vel-ard", root: "أ-ر-ض", pattern: "فَعْل", pos: "ism", meaning_tr: "ve yerin", irab: "{Ma'tûf}. سَمَاوَات kelimesine atıf, mecrûr.", irab_short: "ma'tûf, mecrûr", turkish_bridge: "Arz kelimesi bu kökten", balagha_note: null },
          { arabic: "وَمَا", transliteration: "ve mâ", root: null, pos: "ism", meaning_tr: "ve ne", irab: "{Ma'tûf}. İsm-i mevsûl, önceki kelimelere atıf, mecrûr.", irab_short: "ma'tûf, mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "بَيۡنَهُمَا", transliteration: "beynehumâ", root: "ب-ي-ن", pattern: "فَعْل", pos: "ism", meaning_tr: "ikisinin arasında", irab: "{Zarf}. Zarf-ı mekân + ضمير muttasıl müsennâ gâib muzâf ileyh.", irab_short: "zarf-ı mekân", turkish_bridge: "Beyn kelimesi bu kökten", balagha_note: null },
          { arabic: "ٱلرَّحۡمَٰنِ", transliteration: "er-raḥmân", root: "ر-ح-م", pattern: "فَعْلَان", pos: "ism", meaning_tr: "Rahman olan", irab: "{Sıfat}. رَبّ kelimesinin ikinci sıfatı, mecrûr.", irab_short: "sıfat, mecrûr", turkish_bridge: "Rahman, rahmet bu kökten", balagha_note: "Mübalağa sîgasıyla sınırsız merhamet vurgulanmıştır" },
          { arabic: "لَا", transliteration: "lâ", root: null, pos: "harf", meaning_tr: "değil", irab: "{Nefiy edatı}. Muzârî fiili nefyeder.", irab_short: "nefiy edatı", turkish_bridge: null, balagha_note: null },
          { arabic: "يَمۡلِكُونَ", transliteration: "yemlikûn", root: "م-ل-ك", pattern: "يَفْعِلُونَ", pos: "fil", meaning_tr: "sahip olurlar", irab: "{Fiil-i muzârî}. I. bâb, cemî müzekker gâib, merfû.", irab_short: "muzârî, I. bâb", turkish_bridge: "Mülk, melik bu kökten", balagha_note: null },
          { arabic: "مِنۡهُ", transliteration: "minh", root: null, pos: "harf", meaning_tr: "ondan", irab: "{Câr-mecrûr takımı}. مِن harfi cer + ضمير muttasıl müzekker gâib.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "خِطَابٗا", transliteration: "ḫitâban", root: "خ-ط-ب", pattern: "فِعَال", pos: "ism", meaning_tr: "konuşma, hitap", irab: "{Mef'ûl bih}. يَمْلِكُونَ fiilinin mef'ûlü, mensûb.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Hitap, hutbe bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 78, ayah: 38,
        arabic: "يَوۡمَ يَقُومُ ٱلرُّوحُ وَٱلۡمَلَـٰٓئِكَةُ صَفّٗاۖ لَّا يَتَكَلَّمُونَ إِلَّا مَنۡ أَذِنَ لَهُ ٱلرَّحۡمَٰنُ وَقَالَ صَوَابٗا",
        translation: "Ruh ve meleklerin sıra sıra durdukları gün, Rahman'ın izin verdikleri dışında kimse konuşamaz. İzin verilen de doğruyu söyler.",
        words: [
          { arabic: "يَوۡمَ", transliteration: "yevm", root: "ي-و-م", pattern: "فَعْل", pos: "ism", meaning_tr: "gün", irab: "{Zarf}. Zarf-ı zaman, mensûb.", irab_short: "zarf-ı zaman, mensûb", turkish_bridge: "Yevm bu kökten kullanılır", balagha_note: null },
          { arabic: "يَقُومُ", transliteration: "yeḳûm", root: "ق-و-م", pattern: "يَفْعُلُ", pos: "fil", meaning_tr: "ayakta durur", irab: "{Fiil-i muzârî}. I. bâb, müfred müzekker gâib, merfû.", irab_short: "muzârî, I. bâb", turkish_bridge: "Kıyam, kaim bu kökten", balagha_note: null },
          { arabic: "ٱلرُّوحُ", transliteration: "er-rûḥ", root: "ر-و-ح", pattern: "فُعْل", pos: "ism", meaning_tr: "ruh (Cebrail)", irab: "{Fâil}. يَقُوم fiilinin fâili, merfû.", irab_short: "fâil, merfû", turkish_bridge: "Ruh kelimesi bu kökten", balagha_note: null },
          { arabic: "وَٱلۡمَلَـٰٓئِكَةُ", transliteration: "vel-melâike", root: "م-ل-ك", pattern: "مَفَاعِلَة", pos: "ism", meaning_tr: "ve melekler", irab: "{Ma'tûf}. الرُّوح kelimesine atıf, merfû.", irab_short: "ma'tûf, merfû", turkish_bridge: "Melek bu kökten", balagha_note: null },
          { arabic: "صَفّٗا", transliteration: "saffan", root: "ص-ف-ف", pattern: "فَعْل", pos: "ism", meaning_tr: "sıra sıra", irab: "{Hâl}. يَقُوم fiilinin hâli, mensûb.", irab_short: "hâl, mensûb", turkish_bridge: "Saf kelimesi bu kökten", balagha_note: null },
          { arabic: "لَّا", transliteration: "lâ", root: null, pos: "harf", meaning_tr: "değil", irab: "{Nefiy edatı}. Muzârî fiili nefyeder.", irab_short: "nefiy edatı", turkish_bridge: null, balagha_note: null },
          { arabic: "يَتَكَلَّمُونَ", transliteration: "yetekellemûn", root: "ك-ل-م", pattern: "يَتَفَعَّلُونَ", pos: "fil", meaning_tr: "konuşurlar", irab: "{Fiil-i muzârî}. V. bâb (تَفَعُّل), cemî müzekker gâib, merfû.", irab_short: "muzârî, V. bâb", turkish_bridge: "Kelam, tekellüm bu kökten", balagha_note: null },
          { arabic: "إِلَّا", transliteration: "illâ", root: null, pos: "harf", meaning_tr: "ancak, sadece", irab: "{İstisnâ edatı}. Hasrı ifade eder.", irab_short: "istisnâ edatı", turkish_bridge: null, balagha_note: "Hasr-ı hakîkî ile yalnızca izin verilenler konuşabilir vurgulanmıştır" },
          { arabic: "مَنۡ", transliteration: "men", root: null, pos: "ism", meaning_tr: "kim", irab: "{Müstenâ}. İsm-i mevsûl, istisnâ takdîrinde merfû.", irab_short: "müstenâ, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "أَذِنَ", transliteration: "ezin", root: "أ-ذ-ن", pattern: "فَعِلَ", pos: "fil", meaning_tr: "izin verdi", irab: "{Fiil-i mâzî}. I. bâb, müfred müzekker gâib.", irab_short: "mâzî, I. bâb", turkish_bridge: "İzin bu kökten", balagha_note: null },
          { arabic: "لَهُ", transliteration: "leh", root: null, pos: "harf", meaning_tr: "ona", irab: "{Câr-mecrûr takımı}. لِ harfi cer + ضمير muttasıl müzekker gâib.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلرَّحۡمَٰنُ", transliteration: "er-raḥmân", root: "ر-ح-م", pattern: "فَعْلَان", pos: "ism", meaning_tr: "Rahman", irab: "{Fâil}. أَذِنَ fiilinin fâili, merfû.", irab_short: "fâil, merfû", turkish_bridge: "Rahman bu kökten", balagha_note: null },
          { arabic: "وَقَالَ", transliteration: "ve ḳâl", root: "ق-و-ل", pattern: "فَعَلَ", pos: "fil", meaning_tr: "ve dedi", irab: "{Fiil-i mâzî}. I. bâb, فَاعِل gizli ضمير müfred müzekker gâib.", irab_short: "mâzî, I. bâb", turkish_bridge: "Kavl, kıl bu kökten", balagha_note: null },
          { arabic: "صَوَابٗا", transliteration: "savâban", root: "ص-و-ب", pattern: "فَعَال", pos: "ism", meaning_tr: "doğru söz", irab: "{Mef'ûl bih}. قَالَ fiilinin mef'ûlü, mensûb.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "İsâbe bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 78, ayah: 39,
        arabic: "ذَٰلِكَ ٱلۡيَوۡمُ ٱلۡحَقُّۖ فَمَن شَآءَ ٱتَّخَذَ إِلَىٰ رَبِّهِۦ مَـَٔابًا",
        translation: "İşte gerçek gün budur. Artık dileyen, Rabbine dönüş yolu tutar.",
        words: [
          { arabic: "ذَٰلِكَ", transliteration: "zâlik", root: null, pos: "ism", meaning_tr: "işte o", irab: "{Mübtedâ}. İsm-i işâret uzak, merfû.", irab_short: "mübtedâ, merfû", turkish_bridge: null, balagha_note: "İsm-i işâret ile konunun ehemmiyeti vurgulanmıştır" },
          { arabic: "ٱلۡيَوۡمُ", transliteration: "el-yevm", root: "ي-و-م", pattern: "فَعْل", pos: "ism", meaning_tr: "gün", irab: "{Haber}. ذَلِكَ mübtedâsının haberi, merfû.", irab_short: "haber, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلۡحَقُّ", transliteration: "el-ḥaḳḳ", root: "ح-ق-ق", pattern: "فَعْل", pos: "ism", meaning_tr: "hak, gerçek", irab: "{Sıfat}. الْيَوْم kelimesinin sıfatı, merfû.", irab_short: "sıfat, merfû", turkish_bridge: "Hak, hakikat bu kökten", balagha_note: null },
          { arabic: "فَمَن", transliteration: "fe men", root: null, pos: "ism", meaning_tr: "artık kim", irab: "{Mübtedâ}. فَ harfi atıf + مَن ismi şart, merfû.", irab_short: "mübtedâ, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "شَآءَ", transliteration: "şâ'", root: "ش-ي-أ", pattern: "فَعَلَ", pos: "fil", meaning_tr: "diledi", irab: "{Fiil şart}. فَعِل-i mâzî, müfred müzekker gâib.", irab_short: "fiil-i şart", turkish_bridge: "Meşî'et bu kökten", balagha_note: null },
          { arabic: "ٱتَّخَذَ", transliteration: "ittaḫaz", root: "أ-خ-ذ", pattern: "اِفْتَعَلَ", pos: "fil", meaning_tr: "aldı, tuttu", irab: "{Cevâb-ı şart}. VIII. bâb (افتعال), fiil-i mâzî.", irab_short: "cevâb-ı şart, VIII. bâb", turkish_bridge: null, balagha_note: null },
          { arabic: "إِلَىٰ", transliteration: "ilâ", root: null, pos: "harf", meaning_tr: "doğru, -e", irab: "{Harf-i cer}. Gâye ve nihâyet ifade eder.", irab_short: "harf-i cer", turkish_bridge: null, balagha_note: null },
          { arabic: "رَبِّهِۦ", transliteration: "rabbih", root: "ر-ب-ب", pattern: "فَعْل", pos: "ism", meaning_tr: "onun Rabbi", irab: "{Mecrûr}. إلى harfinin mecrûrü + ضمير muttasıl müzâf ileyh.", irab_short: "mecrûr", turkish_bridge: "Rab kelimesi bu kökten", balagha_note: null },
          { arabic: "مَـَٔابًا", transliteration: "me'âban", root: "أ-و-ب", pattern: "مَفْعَل", pos: "ism", meaning_tr: "dönüş yeri, sığınak", irab: "{Mef'ûl bih}. اتَّخَذَ fiilinin mef'ûl-i sânîsi, mensûb.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "İyâb bu kökten", balagha_note: null },
        ],
      },
    ],
    exercises: [],
  },
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 4 — NEBE 78:40-40
  // ═══════════════════════════════════════════════════════════
  {
    id: "S78-B04-nebe",
    title: "Nebe (40-40)",
    titleAr: "سُورَة النبإ 40-40",
    stage: 2,
    level: 8,
    surah: 78,
    description: "Surenin sonuç bölümü olarak insanlığa kıyamet azabı konusunda kesin uyarıda bulunulur. O gün herkes amellerini görecek ve inkarcılar pişmanlık duyacaktır.",
    verses: [
      {
        surah: 78, ayah: 40,
        arabic: "إِنَّآ أَنذَرۡنَٰكُمۡ عَذَابٗا قَرِيبٗا يَوۡمَ يَنظُرُ ٱلۡمَرۡءُ مَا قَدَّمَتۡ يَدَاهُ وَيَقُولُ ٱلۡكَافِرُ يَٰلَيۡتَنِي كُنتُ تُرَٰبَۢا",
        translation: "Sizi, yakın gelecekteki bir azabla uyardık; o gün kişi elleriyle sunduğuna bakar ve inkarcı da: \"Keşke toprak olaydım\" der.",
        words: [
          { arabic: "إِنَّآ", transliteration: "innâ", root: null, pos: "harf", meaning_tr: "şüphesiz biz", irab: "{Hurûf-i müşebbehe bi'l-fi'l}. {Te'kîd} ve {tahsîs} ifade eder. Nâ zamiri muttasıl birinci şahıs çoğul {ism-i inne} konumundadır.", irab_short: "inne ve nâ zamiri", turkish_bridge: null, balagha_note: "Sureyi güçlü bir te'kîd ile sonlandırma sanatı" },
          { arabic: "أَنذَرۡنَٰكُمۡ", transliteration: "enzernâküm", root: "ن-ذ-ر", pattern: "أَفْعَلَ", pos: "fil", meaning_tr: "sizi uyardık", irab: "{Fiil-i mâzî}, IV. bâb. {Haber-i inne} konumundadır. Nâ zamiri muttasıl {fâil}, küm zamiri {mef'ûl bih} konumundadır.", irab_short: "mâzî, IV. bâb", turkish_bridge: "Nezir, münzir bu kökten", balagha_note: null },
          { arabic: "عَذَابٗا", transliteration: "azâben", root: "ع-ذ-ب", pos: "ism", meaning_tr: "bir azabı", irab: "{Mef'ûl bih-i sânî} konumunda {nekire} isimdir. {Mensûb} olduğu için sonu tenvin ile işaretlidir.", irab_short: "mef'ûl bih-i sânî, mensûb", turkish_bridge: "Azap bu kökten", balagha_note: null },
          { arabic: "قَرِيبٗا", transliteration: "karîben", root: "ق-ر-ب", pos: "ism", meaning_tr: "yakın", irab: "{Sıfat} konumunda olup {mevsûf}u olan عَذَابٗا kelimesini niteler. {Mensûb} olduğu için sonu tenvin ile işaretlidir.", irab_short: "sıfat, mensûb", turkish_bridge: "Karib, yakın bu kökten", balagha_note: "Azabın yakınlığını vurgulayarak uyarının ciddiyetini artırır" },
          { arabic: "يَوۡمَ", transliteration: "yevme", root: "ي-و-م", pos: "ism", meaning_tr: "gün", irab: "{Zarf-ı zaman} konumunda olup {mensûb}tur. Sonraki {muzâf ileyh} ile {izâfet} halindedir.", irab_short: "zarf-ı zaman, mensûb", turkish_bridge: "Yevmiye bu kökten", balagha_note: null },
          { arabic: "يَنظُرُ", transliteration: "yanzuru", root: "ن-ظ-ر", pattern: "فَعَلَ", pos: "fil", meaning_tr: "bakar", irab: "{Fiil-i muzâri}, I. bâb. {Merfû}dur çünkü herhangi bir nâsıb veya câzim harf yoktur.", irab_short: "muzâri, I. bâb", turkish_bridge: "Nazır, nazar bu kökten", balagha_note: null },
          { arabic: "ٱلۡمَرۡءُ", transliteration: "el-mer'u", root: "م-ر-أ", pos: "ism", meaning_tr: "kişi, insan", irab: "{Fâil} konumunda {ma'rife} isimdir. {Merfû} olduğu için sonu dâmme ile işaretlidir.", irab_short: "fâil, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "مَا", transliteration: "mâ", root: null, pos: "ism", meaning_tr: "ne", irab: "{İsm-i mevsûl} konumunda olup {mef'ûl bih} görevindedir. Sonraki cümle {sıla-i mevsûl}dür.", irab_short: "ism-i mevsûl, mensûb", turkish_bridge: null, balagha_note: null },
          { arabic: "قَدَّمَتۡ", transliteration: "kaddemet", root: "ق-د-م", pattern: "فَعَّلَ", pos: "fil", meaning_tr: "öne sürdü, takdim etti", irab: "{Fiil-i mâzî}, II. bâb. {Sıla-i mevsûl} içerisinde yer alır ve tâ-i te'nîs ile {müennes} yapılmıştır.", irab_short: "mâzî, II. bâb", turkish_bridge: "Takdim, mukaddem bu kökten", balagha_note: "Ellerin metaforik kullanımıyla amellerin somutlaştırılması" },
          { arabic: "يَدَاهُ", transliteration: "yedâhu", root: "ي-د-ي", pos: "ism", meaning_tr: "onun iki eli", irab: "{Fâil} konumunda {müsennâ} isimdir. Hâ zamiri {muzâf ileyh} konumunda üçüncü şahıs müfret müzekker zamiridir.", irab_short: "fâil, müsennâ", turkish_bridge: null, balagha_note: "Eller, amellerin simgesel ifadesi olarak mecaz-ı mürsel" },
          { arabic: "وَيَقُولُ", transliteration: "ve yekûlu", root: "ق-و-ل", pattern: "فَعَلَ", pos: "fil", meaning_tr: "ve der", irab: "Vâv {atıf harfi}, يَقُولُ {fiil-i muzâri} I. bâb {ma'tûf} konumundadır.", irab_short: "muzâri, I. bâb", turkish_bridge: "Kavl, kâl bu kökten", balagha_note: null },
          { arabic: "ٱلۡكَافِرُ", transliteration: "el-kâfiru", root: "ك-ف-ر", pattern: "فَاعِل", pos: "ism", meaning_tr: "inkarcı", irab: "{Fâil} konumunda {ism-i fâil} yapısındadır. {Merfû} olduğu için sonu dâmme ile işaretlidir.", irab_short: "fâil, merfû", turkish_bridge: "Kâfir bu kökten", balagha_note: "Mümin ile kâfir arasındaki zıtlık vurgusu" },
          { arabic: "يَٰلَيۡتَنِي", transliteration: "yâ leytenî", root: null, pos: "harf", meaning_tr: "ah keşke ben", irab: "يَا {nida harfi}, لَيْتَ {temennî harfi} inne grubu gibi amel eder. نِي zamiri muttasıl {ism-i leyte} konumundadır.", irab_short: "nidâ ve temennî", turkish_bridge: null, balagha_note: "Pişmanlığın doruk noktasını ifade eden temennî üslubu" },
          { arabic: "كُنتُ", transliteration: "küntu", root: "ك-و-ن", pos: "fil", meaning_tr: "idim", irab: "{Fiil-i nâkıs mâzî}. Birinci şahıs müfret çekimindedir ve {haber-i leyte} görevini yapar.", irab_short: "fiil-i nâkıs mâzî", turkish_bridge: "Kevn, kâin bu kökten", balagha_note: null },
          { arabic: "تُرَٰبَۢا", transliteration: "türâben", root: "ت-ر-ب", pos: "ism", meaning_tr: "toprak", irab: "{Haber-i kâne} konumunda {nekire} isimdir. {Mensûb} olduğu için sonu tenvin ile işaretlidir.", irab_short: "haber-i kâne, mensûb", turkish_bridge: "Türâb bu kökten", balagha_note: "En aşağı maddeye dönme isteği ile pişmanlığın derinliğini gösterir" },
        ],
      },
    ],
    exercises: [],
  },
];

export default nebeLessons;
