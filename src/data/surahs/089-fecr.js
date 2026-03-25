// ═══════════════════════════════════════════════════════════
// FECR SURESİ (89) — Pipeline Üretimi
// 2026-03-25: 3 bölüm, 30 ayet tam kapsam
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

const fecrLessons = [
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 1 — FECR 89:1-14
  // ═══════════════════════════════════════════════════════════
  {
    id: "S89-B01-fecr",
    title: "Fecr (1-14)",
    titleAr: "سُورَة الفجر 1-14",
    stage: 2,
    level: 8,
    surah: 89,
    description: "Sure, Allah'ın muhteşem varlıklarına yemin ederek başlar ve geçmiş kavimlerden Âd, Semud ve Firavun'un helâkini anlatır. Allah'ın sürekli gözetlemde olduğu vurgulanır.",
    verses: [
      {
        surah: 89, ayah: 1,
        arabic: "وَٱلۡفَجۡرِ",
        translation: "Tanyerinin ağarmasına and olsun;",
        words: [
          { arabic: "وَٱلۡفَجۡرِ", transliteration: "vel-fecri", root: "ف-ج-ر", pos: "ism", meaning_tr: "şafak vakti, tan yeri ağarması", irab: "{Câr-mecrûr} olarak {kasem} ifade eder. Vâv {harfi kasem}, 'fecr' {mecrûr} dur.", irab_short: "kasem, mecrûr", turkish_bridge: null, balagha_note: "Kasem üslubu ile sürenin açılması, muhataba önemli bir mesajın geleceğini haber verir." },
        ],
      },
      {
        surah: 89, ayah: 2,
        arabic: "وَلَيَالٍ عَشۡرٖ",
        translation: "Zilhicce ayının ilk on gecesine and olsun;",
        words: [
          { arabic: "وَلَيَالٍ", transliteration: "ve-leyâlin", root: "ل-ي-ل", pos: "ism", meaning_tr: "geceler", irab: "{Câr-mecrûr} olarak {kasem} ifade eder. Vâv {harfi kasem}, 'leyâlin' {mecrûr} dur ve {müşekkel tanvînle} nekira olarak gelmiştir.", irab_short: "kasem, mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "عَشۡرٖ", transliteration: "aşrin", root: "ع-ش-ر", pos: "ism", meaning_tr: "on tane", irab: "{Sıfat} olarak 'leyâlin' kelimesini niteler ve {mecrûr} dur.", irab_short: "sıfat, mecrûr", turkish_bridge: "Aşere, maâşir bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 89, ayah: 3,
        arabic: "وَٱلشَّفۡعِ وَٱلۡوَتۡرِ",
        translation: "Herşeyin çiftine de, tekine de and olsun;",
        words: [
          { arabic: "وَٱلشَّفۡعِ", transliteration: "veş-şef'i", root: "ش-ف-ع", pos: "ism", meaning_tr: "çift olan, çifte", irab: "{Câr-mecrûr} olarak {kasem} ifade eder. Vâv {harfi kasem}, 'şef'' {mecrûr} dur.", irab_short: "kasem, mecrûr", turkish_bridge: "Şefaat, şâfi' bu kökten", balagha_note: "Tıbâk sanatı: şef' ve vitr kelimelerinin zıt anlam taşıması." },
          { arabic: "وَٱلۡوَتۡرِ", transliteration: "vel-vetri", root: "و-ت-ر", pos: "ism", meaning_tr: "tek olan, teke", irab: "{Câr-mecrûr} olarak {kasem} ifade eder. Vâv {harfi kasem}, 'vetr' {mecrûr} dur.", irab_short: "kasem, mecrûr", turkish_bridge: "Vitr namazı bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 89, ayah: 4,
        arabic: "وَٱلَّيۡلِ إِذَا يَسۡرِ",
        translation: "Gelip geçen geceye and olsun ki, bunların her biri akıl sahibi için birer yemine değmez mi?",
        words: [
          { arabic: "وَٱلَّيۡلِ", transliteration: "vel-leyli", root: "ل-ي-ل", pos: "ism", meaning_tr: "gece", irab: "{Câr-mecrûr} olarak {kasem} ifade eder. Vâv {harfi kasem}, 'leyl' {mecrûr} dur.", irab_short: "kasem, mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "إِذَا", transliteration: "izâ", root: null, pos: "harf", meaning_tr: "zaman ki, vakit ki", irab: "{Zarf} olarak zaman bildiren {edat} dur.", irab_short: "zaman zarfı", turkish_bridge: null, balagha_note: null },
          { arabic: "يَسۡرِ", transliteration: "yesri", root: "س-ر-ي", pos: "fil", meaning_tr: "gitmek, akmak, geçmek", irab: "{Fiil-i muzâri'} dir, I. bâb, {fâili} gizlidir (هو). Cezm ile son hareke hazfedilmiştir.", irab_short: "muzâri', meczûm", turkish_bridge: "Serî, sürat bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 89, ayah: 5,
        arabic: "هَلۡ فِي ذَٰلِكَ قَسَمٞ لِّذِي حِجۡرٍ",
        translation: "Gelip geçen geceye and olsun ki, bunların her biri akıl sahibi için birer yemine değmez mi?",
        words: [
          { arabic: "هَلۡ", transliteration: "hel", root: null, pos: "harf", meaning_tr: "değil mi, acaba", irab: "{Harfi istifhâm} olarak soru anlamı katar.", irab_short: "istifhâm edatı", turkish_bridge: null, balagha_note: "İstifhâm-ı inkârî: aslında cevabı belli olan retorik soru." },
          { arabic: "فِي", transliteration: "fî", root: null, pos: "harf", meaning_tr: "içinde, de/da", irab: "{Harfi cerr} olarak 'zâlike'yi {mecrûr} yapar.", irab_short: "harf-i cerr", turkish_bridge: null, balagha_note: null },
          { arabic: "ذَٰلِكَ", transliteration: "zâlike", root: null, pos: "ism", meaning_tr: "şu, o, bunlar", irab: "{İsm-i işâre} olarak uzaktakilere işaret eder ve {mecrûr} dur.", irab_short: "işâre, mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "قَسَمٞ", transliteration: "kasemün", root: "ق-س-م", pos: "ism", meaning_tr: "yemin, and", irab: "{Mübtedâ} dur ve {merfû} dur. 'Fî zâlike' {haber-i mukaddem} dir.", irab_short: "mübtedâ, merfû", turkish_bridge: "Kasem bu kökten", balagha_note: null },
          { arabic: "لِّذِي", transliteration: "li-zî", root: null, pos: "ism", meaning_tr: "sahibi olan kimse için", irab: "Lâm {harfi cerr}, 'zî' ise {ism-i mevsûl} manasında kullanılan {mecrûr} dur.", irab_short: "sıla, mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "حِجۡرٍ", transliteration: "hicrin", root: "ح-ج-ر", pos: "ism", meaning_tr: "akıl, idrak", irab: "{Muzâf ileyh} olarak 'zî'ye muzâf olur ve {mecrûr} dur.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "Hicr bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 89, ayah: 6,
        arabic: "أَلَمۡ تَرَ كَيۡفَ فَعَلَ رَبُّكَ بِعَادٍ",
        translation: "Rabbinin, hiçbir memlekette benzeri ortaya konmayan sütunlara sahip İrem şehrinde oturan Ad milletine ne ettiğini görmedin mi?",
        words: [
          { arabic: "أَلَمۡ", transliteration: "e-lem", root: null, pos: "harf", meaning_tr: "görmedin mi", irab: "Hemze {harfi istifhâm}, 'lem' ise {harfi nefy ve cezm} dir.", irab_short: "istifhâm + nefy", turkish_bridge: null, balagha_note: "İstifhâm-ı takrîrî: muhataptan onay bekleyen soru üslubu." },
          { arabic: "تَرَ", transliteration: "tera", root: "ر-أ-ي", pos: "fil", meaning_tr: "görmek, müşahede etmek", irab: "{Fiil-i muzâri'} dir, I. bâb, 'lem' ile {meczûm} dur. {Fâili} muhatap zamir (أنت) dir.", irab_short: "muzâri', meczûm", turkish_bridge: "Re'y, rüya bu kökten", balagha_note: null },
          { arabic: "كَيۡفَ", transliteration: "keyfe", root: null, pos: "harf", meaning_tr: "nasıl, ne şekilde", irab: "{İsm-i istifhâm} olarak hal zikretmeye yarar.", irab_short: "istifhâm, hâl", turkish_bridge: null, balagha_note: null },
          { arabic: "فَعَلَ", transliteration: "fe'ale", root: "ف-ع-ل", pos: "fil", meaning_tr: "yapmak, etmek", irab: "{Fiil-i mâzî} dir, I. bâb. {Fâili} 'rabbüke' dir.", irab_short: "mâzî, I. bâb", turkish_bridge: "Fiil, fâil bu kökten", balagha_note: null },
          { arabic: "رَبُّكَ", transliteration: "rabbüke", root: "ر-ب-ب", pos: "ism", meaning_tr: "senin Rabbin", irab: "{Fâil} dir ve {merfû} dur. Sonunda {kâf} zamiri {muzâf ileyh} dir.", irab_short: "fâil, merfû", turkish_bridge: "Rab bu kökten", balagha_note: null },
          { arabic: "بِعَادٍ", transliteration: "bi-'âdin", root: null, pos: "ism", meaning_tr: "Âd kavmi ile", irab: "Bâ {harfi cerr}, ''âd' ise {özel isim} olarak {mecrûr} dur.", irab_short: "özel isim, mecrûr", turkish_bridge: null, balagha_note: null },
        ],
      },
      {
        surah: 89, ayah: 7,
        arabic: "إِرَمَ ذَاتِ ٱلۡعِمَادِ",
        translation: "Rabbinin, hiçbir memlekette benzeri ortaya konmayan sütunlara sahip İrem şehrinde oturan Ad milletine ne ettiğini görmedin mi?",
        words: [
          { arabic: "إِرَمَ", transliteration: "İreme", root: null, pos: "ism", meaning_tr: "İrem (şehir adı)", irab: "{Bedel} dir, ''âd'a bedel olarak {mecrûr} dur.", irab_short: "bedel, mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "ذَاتِ", transliteration: "zâti", root: null, pos: "ism", meaning_tr: "sahibi olan", irab: "{Sıfat} olarak 'İrem'i niteler ve {mecrûr} dur. {Muzâf} tır.", irab_short: "sıfat, mecrûr", turkish_bridge: "Zât bu kelimeden", balagha_note: null },
          { arabic: "ٱلۡعِمَادِ", transliteration: "el-'imâdi", root: "ع-م-د", pos: "ism", meaning_tr: "sütunlar, direkler", irab: "{Muzâf ileyh} olarak 'zât'a muzâf olur ve {mecrûr} dur.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "'İmâd, 'amûd bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 89, ayah: 8,
        arabic: "ٱلَّتِي لَمۡ يُخۡلَقۡ مِثۡلُهَا فِي ٱلۡبِلَٰدِ",
        translation: "Rabbinin, hiçbir memlekette benzeri ortaya konmayan sütunlara sahip İrem şehrinde oturan Ad milletine ne ettiğini görmedin mi?",
        words: [
          { arabic: "ٱلَّتِي", transliteration: "elletî", root: null, pos: "ism", meaning_tr: "ki o (dişil)", irab: "{İsm-i mevsûl} olarak 'İrem'in {sıfatı} dur ve {mecrûr} dur.", irab_short: "sıfat, mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "لَمۡ", transliteration: "lem", root: null, pos: "harf", meaning_tr: "değil, olmadı", irab: "{Harfi nefy ve cezm} olarak muzâri' fiili {meczûm} yapar.", irab_short: "nefy edatı", turkish_bridge: null, balagha_note: null },
          { arabic: "يُخۡلَقۡ", transliteration: "yuhlek", root: "خ-ل-ق", pos: "fil", meaning_tr: "yaratılmak", irab: "{Fiil-i muzâri'} dir, I. bâb, {meçhul} sigada, 'lem' ile {meczûm} dur.", irab_short: "muzâri', meçhul, meczûm", turkish_bridge: "Halk, halîk, mahlûk bu kökten", balagha_note: null },
          { arabic: "مِثۡلُهَا", transliteration: "mislühâ", root: "م-ث-ل", pos: "ism", meaning_tr: "onun benzeri", irab: "{Nâib-i fâil} dir ve {merfû} dur. {Hâ} zamiri 'İrem'e râci'dir.", irab_short: "nâib-i fâil, merfû", turkish_bridge: "Misal, mesel bu kökten", balagha_note: null },
          { arabic: "فِي", transliteration: "fî", root: null, pos: "harf", meaning_tr: "içinde, de/da", irab: "{Harfi cerr} olarak 'bilâd'ı {mecrûr} yapar.", irab_short: "harf-i cerr", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلۡبِلَٰدِ", transliteration: "el-bilâdi", root: "ب-ل-د", pos: "ism", meaning_tr: "ülkeler, şehirler", irab: "{Mecrûr} dur 'fî' harfi cerri ile.", irab_short: "mecrûr", turkish_bridge: "Belde, bilâd bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 89, ayah: 9,
        arabic: "وَثَمُودَ ٱلَّذِينَ جَابُواْ ٱلصَّخۡرَ بِٱلۡوَادِ",
        translation: "Vadide kayaları kesip yontan Semud milletine, memleketlerde aşırı giden, oralarda bozgunculuğu artıran, sarsılmaz bir saltanat sahibi Firavun'a Rabbinin ne ettiğini görmedin mi?",
        words: [
          { arabic: "وَثَمُودَ", transliteration: "ve-semûde", root: null, pos: "ism", meaning_tr: "ve Semud kavmi", irab: "Vâv {harfi atf}, 'Semûd' ise ''âd'a {ma'tûf} olarak {mecrûr} dur.", irab_short: "ma'tûf, mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلَّذِينَ", transliteration: "ellezîne", root: null, pos: "ism", meaning_tr: "ki onlar (erkekler)", irab: "{İsm-i mevsûl} olarak 'Semûd'un {sıfatı} dur ve {mecrûr} dur.", irab_short: "sıfat, mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "جَابُواْ", transliteration: "câbû", root: "ج-و-ب", pos: "fil", meaning_tr: "kesmek, yarmak, oyup açmak", irab: "{Fiil-i mâzî} dir, I. bâb, {câmi' müzekker sâlim} zamir ile {fâili} bellidir.", irab_short: "mâzî, I. bâb", turkish_bridge: "Cevâb bu kökten", balagha_note: null },
          { arabic: "ٱلصَّخۡرَ", transliteration: "es-sahre", root: "ص-خ-ر", pos: "ism", meaning_tr: "kayalar, taşlar", irab: "{Mef'ûl bih} dir ve {mensûb} dur.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Sahr bu kökten", balagha_note: null },
          { arabic: "بِٱلۡوَادِ", transliteration: "bil-vâdi", root: "و-د-ي", pos: "ism", meaning_tr: "vadide", irab: "Bâ {harfi cerr}, 'vâd' ise {mecrûr} dur ve {zarf} olarak yer bildirir.", irab_short: "zarf, mecrûr", turkish_bridge: "Vâdi bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 89, ayah: 10,
        arabic: "وَفِرۡعَوۡنَ ذِي ٱلۡأَوۡتَادِ",
        translation: "Vadide kayaları kesip yontan Semud milletine, memleketlerde aşırı giden, oralarda bozgunculuğu artıran, sarsılmaz bir saltanat sahibi Firavun'a Rabbinin ne ettiğini görmedin mi?",
        words: [
          { arabic: "وَفِرۡعَوۡنَ", transliteration: "ve-fir'avne", root: null, pos: "ism", meaning_tr: "ve Firavun", irab: "Vâv {harfi atf}, 'Fir'avn' ise ''âd'a {ma'tûf} olarak {mecrûr} dur.", irab_short: "ma'tûf, mecrûr", turkish_bridge: "Firavun bu kelimeden", balagha_note: null },
          { arabic: "ذِي", transliteration: "zî", root: null, pos: "ism", meaning_tr: "sahibi", irab: "{Sıfat} olarak 'Fir'avn'ı niteler ve {mecrûr} dur. {Muzâf} tır.", irab_short: "sıfat, mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلۡأَوۡتَادِ", transliteration: "el-evtâdi", root: "و-ت-د", pos: "ism", meaning_tr: "kazıklar, çadır kazıkları", irab: "{Muzâf ileyh} olarak 'zî'ye muzâf olur ve {mecrûr} dur.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "Veted bu kökten", balagha_note: "Kinâye: Firavun'un güçlü ve sağlam saltanatına işaret." },
        ],
      },
      {
        surah: 89, ayah: 11,
        arabic: "ٱلَّذِينَ طَغَوۡاْ فِي ٱلۡبِلَٰدِ",
        translation: "Vadide kayaları kesip yontan Semud milletine, memleketlerde aşırı giden, oralarda bozgunculuğu artıran, sarsılmaz bir saltanat sahibi Firavun'a Rabbinin ne ettiğini görmedin mi?",
        words: [
          { arabic: "ٱلَّذِينَ", transliteration: "ellezîne", root: null, pos: "ism", meaning_tr: "ki onlar", irab: "{İsm-i mevsûl} olarak üç kavmin ortak {sıfatı} dur ve {mecrûr} dur.", irab_short: "sıfat, mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "طَغَوۡاْ", transliteration: "tagav", root: "ط-غ-ي", pos: "fil", meaning_tr: "azgınlık etmek, haddi aşmak", irab: "{Fiil-i mâzî} dir, I. bâb, {câmi' müzekker sâlim} zamir ile {fâili} bellidir.", irab_short: "mâzî, I. bâb", turkish_bridge: "Tuğyân bu kökten", balagha_note: null },
          { arabic: "فِي", transliteration: "fî", root: null, pos: "harf", meaning_tr: "içinde", irab: "{Harfi cerr} olarak 'bilâd'ı {mecrûr} yapar.", irab_short: "harf-i cerr", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلۡبِلَٰدِ", transliteration: "el-bilâdi", root: "ب-ل-د", pos: "ism", meaning_tr: "ülkeler", irab: "{Mecrûr} dur 'fî' harfi cerri ile ve {zarf} olarak yer bildirir.", irab_short: "zarf, mecrûr", turkish_bridge: "Belde bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 89, ayah: 12,
        arabic: "فَأَكۡثَرُواْ فِيهَا ٱلۡفَسَادَ",
        translation: "Vadide kayaları kesip yontan Semud milletine, memleketlerde aşırı giden, oralarda bozgunculuğu artıran, sarsılmaz bir saltanat sahibi Firavun'a Rabbinin ne ettiğini görmedin mi?",
        words: [
          { arabic: "فَأَكۡثَرُواْ", transliteration: "fe-ekserû", root: "ك-ث-ر", pos: "fil", meaning_tr: "çoğaltmak, artırmak", irab: "Fâ {harfi atf}, fiil ise {fiil-i mâzî} dur, IV. bâb, {câmi' müzekker sâlim} zamir ile {fâili} bellidir.", irab_short: "mâzî, IV. bâb", turkish_bridge: "Kesret, kesîr bu kökten", balagha_note: null },
          { arabic: "فِيهَا", transliteration: "fîhâ", root: null, pos: "harf", meaning_tr: "orada, içlerinde", irab: "Fî {harfi cerr}, {hâ} zamiri 'bilâd'a râci' ve {mecrûr} dur.", irab_short: "zarf", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلۡفَسَادَ", transliteration: "el-fesâde", root: "ف-س-د", pos: "ism", meaning_tr: "bozgunculuk, fitne", irab: "{Mef'ûl bih} dir ve {mensûb} dur.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Fesâd bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 89, ayah: 13,
        arabic: "فَصَبَّ عَلَيۡهِمۡ رَبُّكَ سَوۡطَ عَذَابٍ",
        translation: "Rabbin onları azap kırbacından geçirmiştir.",
        words: [
          { arabic: "فَصَبَّ", transliteration: "fe-sabbe", root: "ص-ب-ب", pos: "fil", meaning_tr: "dökmek, yağdırmak", irab: "Fâ {harfi atf}, fiil ise {fiil-i mâzî} dur, I. bâb. {Fâili} 'rabbüke' dir.", irab_short: "mâzî, I. bâb", turkish_bridge: "Sabb bu kökten", balagha_note: "İstiâre: azabın su gibi dökülmesi benzetmesi." },
          { arabic: "عَلَيۡهِمۡ", transliteration: "'aleyhim", root: null, pos: "harf", meaning_tr: "onların üzerine", irab: "'Alâ {harfi cerr}, {hâ} zamiri o kavimlere râci' ve {mecrûr} dur.", irab_short: "zarf", turkish_bridge: null, balagha_note: null },
          { arabic: "رَبُّكَ", transliteration: "rabbüke", root: "ر-ب-ب", pos: "ism", meaning_tr: "senin Rabbin", irab: "{Fâil} dir ve {merfû} dur. {Kâf} zamiri {muzâf ileyh} dir.", irab_short: "fâil, merfû", turkish_bridge: "Rab bu kökten", balagha_note: null },
          { arabic: "سَوۡطَ", transliteration: "sevta", root: "س-و-ط", pos: "ism", meaning_tr: "kırbaç, kamçı", irab: "{Mef'ûl bih} dir ve {mensûb} dur. {Muzâf} tır.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Sût bu kökten", balagha_note: "İstiâre: azabın fiziksel kırbaç gibi canı yakması." },
          { arabic: "عَذَابٍ", transliteration: "'azâbin", root: "ع-ذ-ب", pos: "ism", meaning_tr: "azap, ceza", irab: "{Muzâf ileyh} olarak 'sevt'a muzâf olur ve {mecrûr} dur.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "Azâb bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 89, ayah: 14,
        arabic: "إِنَّ رَبَّكَ لَبِٱلۡمِرۡصَادِ",
        translation: "Doğrusu Rabbin hep gözetlemektedir.",
        words: [
          { arabic: "إِنَّ", transliteration: "inne", root: null, pos: "harf", meaning_tr: "şüphesiz, doğrusu", irab: "{Hurûf-i müşebbehe bi'l-fi'l} den olup ismini {mensûb}, haberini {merfû} yapar.", irab_short: "te'kîd edatı", turkish_bridge: null, balagha_note: "Te'kîd: 'inne' ile cümlenin güçlendirilmesi." },
          { arabic: "رَبَّكَ", transliteration: "rabbeke", root: "ر-ب-ب", pos: "ism", meaning_tr: "senin Rabbin", irab: "{İsmi inne} dir ve {mensûb} dur. {Kâf} zamiri {muzâf ileyh} dir.", irab_short: "ismi inne, mensûb", turkish_bridge: "Rab bu kökten", balagha_note: null },
          { arabic: "لَبِٱلۡمِرۡصَادِ", transliteration: "le-bil-mirsâdi", root: "ر-ص-د", pos: "ism", meaning_tr: "gözetlemekte, pusu yerinde", irab: "Lâm {harfi te'kîd}, 'bil-mirsâd' ise {haberi inne} dir ve {mecrûr} dur.", irab_short: "haberi inne", turkish_bridge: "Rasad, mersad bu kökten", balagha_note: "Kinâye: Allah'ın her şeyi gözetlediğine işaret." },
        ],
      },
    ],
    exercises: [],
  },
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 2 — FECR 89:15-22
  // ═══════════════════════════════════════════════════════════
  {
    id: "S89-B02-fecr",
    title: "Fecr (15-22)",
    titleAr: "سُورَة الفجر 15-22",
    stage: 2,
    level: 8,
    surah: 89,
    description: "İnsanın nimet ve darlık karşısındaki yanlış tutumu eleştirilir, ardından kıyamet günü tasviri yapılır.",
    verses: [
      {
        surah: 89, ayah: 15,
        arabic: "فَأَمَّا ٱلۡإِنسَٰنُ إِذَا مَا ٱبۡتَلَىٰهُ رَبُّهُۥ فَأَكۡرَمَهُۥ وَنَعَّمَهُۥ فَيَقُولُ رَبِّيٓ أَكۡرَمَنِ",
        translation: "Rabbin denemek için bir insana iyilik edip, nimet verdiği zaman, o: 'Rabbim beni şerefli kıldı' der.",
        words: [
          { arabic: "فَأَمَّا", transliteration: "fe-emmâ", root: null, pos: "harf", meaning_tr: "gelince, olunca (şartlı)", irab: "{Harf-i şart ve tafsîl}. Cümleyi ayırmak ve açıklamak için kullanılan edat.", irab_short: "harf-i şart", turkish_bridge: null, balagha_note: "Mukayese (mukâbele) sanatının başlangıcı, 16. ayette 've-emmâ' ile karşılık verilecek" },
          { arabic: "ٱلۡإِنسَٰنُ", transliteration: "el-insân", root: "أ-ن-س", pattern: "إِنْسَان", pos: "ism", meaning_tr: "insan", irab: "{Mübtedâ}, merfû halde. Tarif edatı ile ma'rife yapılarak cins isim olarak kullanılmış.", irab_short: "mübtedâ, merfû", turkish_bridge: "İnsan, üns bu kökten", balagha_note: null },
          { arabic: "إِذَا", transliteration: "izâ", root: null, pos: "harf", meaning_tr: "ne zaman, her ne vakit", irab: "{Zarf-ı zaman}, şart ifade eden. Mübtedânın haberi olan cümlenin başlangıcı.", irab_short: "zarf-ı zaman", turkish_bridge: null, balagha_note: null },
          { arabic: "مَا", transliteration: "mâ", root: null, pos: "harf", meaning_tr: "zâid (vurgulama)", irab: "{Mâ zâide}. Te'kîd için getirilmiş, i'râba etkisi yok.", irab_short: "mâ zâide", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱبۡتَلَىٰهُ", transliteration: "ibtelâhü", root: "ب-ل-و", pattern: "اِفْتَعَلَ", pos: "fil", meaning_tr: "onu sınadı, denedi", irab: "{Fiil-i mâzî}, VIII. bâb. Fâili 'rabbühû', mef'ûlü bitişik zamîr 'hû'.", irab_short: "mâzî, VIII. bâb", turkish_bridge: "Belâ bu kökten", balagha_note: null },
          { arabic: "رَبُّهُۥ", transliteration: "rabbühû", root: "ر-ب-ب", pattern: "رَبّ", pos: "ism", meaning_tr: "onun Rabbi", irab: "{Fâil}, merfû halde. Muzâf olduğu için tenvin almamış, bitişik zamîr ile muzâf ileyh.", irab_short: "fâil, merfû", turkish_bridge: "Rab bu kökten", balagha_note: null },
          { arabic: "فَأَكۡرَمَهُۥ", transliteration: "fe-ekramehû", root: "ك-ر-م", pattern: "أَفْعَلَ", pos: "fil", meaning_tr: "onu ikram etti, şereflendirdi", irab: "{Fiil-i mâzî}, IV. bâb. Atıf harfi 'fe' ile önceki fiile atfedilmiş, mef'ûlü bitişik zamîr.", irab_short: "mâzî, IV. bâb", turkish_bridge: "Kerâmet, ikram bu kökten", balagha_note: null },
          { arabic: "وَنَعَّمَهُۥ", transliteration: "ve-ne''amehû", root: "ن-ع-م", pattern: "فَعَّلَ", pos: "fil", meaning_tr: "ona nimet verdi", irab: "{Fiil-i mâzî}, II. bâb. Vav ile önceki fiile atfedilmiş, mef'ûlü bitişik zamîr.", irab_short: "mâzî, II. bâb", turkish_bridge: "Nimet, na'îm bu kökten", balagha_note: null },
          { arabic: "فَيَقُولُ", transliteration: "fe-yekûlü", root: "ق-و-ل", pattern: "فَعَلَ", pos: "fil", meaning_tr: "der, söyler", irab: "{Fiil-i muzâri'}, I. bâb. 'Fe' ile cevab-ı şart ifade ediyor, fâili müstetir zamîr 'hüve'.", irab_short: "muzâri', I. bâb", turkish_bridge: "Kavl, kâl bu kökten", balagha_note: null },
          { arabic: "رَبِّيٓ", transliteration: "rabbî", root: "ر-ب-ب", pattern: "رَبّ", pos: "ism", meaning_tr: "Rabbim", irab: "{Münâdâ}, mahzûf nidâ edatı ile. Muzâf olduğu için mebni değil mu'rab, kesre ile.", irab_short: "münâdâ muzâf", turkish_bridge: "Rab bu kökten", balagha_note: null },
          { arabic: "أَكۡرَمَنِ", transliteration: "ekramen", root: "ك-ر-م", pattern: "أَفْعَلَ", pos: "fil", meaning_tr: "beni ikram etti", irab: "{Fiil-i mâzî}, IV. bâb. Fâili müstetir 'hüve' (Rabbi), mef'ûlü bitişik zamîr 'nî'.", irab_short: "mâzî, IV. bâb", turkish_bridge: "Kerâmet, ikram bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 89, ayah: 16,
        arabic: "وَأَمَّآ إِذَا مَا ٱبۡتَلَىٰهُ فَقَدَرَ عَلَيۡهِ رِزۡقَهُۥ فَيَقُولُ رَبِّيٓ أَهَٰنَنِ",
        translation: "Ama onu sınamak için rızkını daraltıp bir ölçüye göre verdiği zaman: 'Rabbim bana hor baktı' der.",
        words: [
          { arabic: "وَأَمَّآ", transliteration: "ve-emmâ", root: null, pos: "harf", meaning_tr: "ve gelince (karşıt durum)", irab: "{Harf-i atf ve tafsîl}. Önceki 'fe-emmâ' ile mukâbele yapıyor, karşıt durumu ifade ediyor.", irab_short: "harf-i atf", turkish_bridge: null, balagha_note: "Mukâbele sanatı, 15. ayetteki durumla zıtlık" },
          { arabic: "إِذَا", transliteration: "izâ", root: null, pos: "harf", meaning_tr: "ne zaman", irab: "{Zarf-ı zaman}, şart ifade eden. Önceki ayetteki kullanımla paralel.", irab_short: "zarf-ı zaman", turkish_bridge: null, balagha_note: null },
          { arabic: "مَا", transliteration: "mâ", root: null, pos: "harf", meaning_tr: "zâid", irab: "{Mâ zâide}. Te'kîd için, önceki ayetteki gibi.", irab_short: "mâ zâide", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱبۡتَلَىٰهُ", transliteration: "ibtelâhü", root: "ب-ل-و", pattern: "اِفْتَعَلَ", pos: "fil", meaning_tr: "onu sınadı", irab: "{Fiil-i mâzî}, VIII. bâb. Önceki ayetle aynı fiil, fâili mahzûf 'rabbühû'.", irab_short: "mâzî, VIII. bâb", turkish_bridge: "Belâ bu kökten", balagha_note: "Tekrar sanatı, aynı fiilin kullanımı" },
          { arabic: "فَقَدَرَ", transliteration: "fe-kadere", root: "ق-د-ر", pattern: "فَعَلَ", pos: "fil", meaning_tr: "ölçüyle verdi, kısıtladı", irab: "{Fiil-i mâzî}, I. bâb. 'Fe' ile önceki fiile atfedilmiş, fâili mahzûf.", irab_short: "mâzî, I. bâb", turkish_bridge: "Kader, takdir bu kökten", balagha_note: null },
          { arabic: "عَلَيۡهِ", transliteration: "aleyhi", root: null, pos: "harf", meaning_tr: "onun üzerine, ona karşı", irab: "{Câr-mecrûr}. 'Alâ' harfi cerri ile 'hî' zamîri, fiile müteallik.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "رِزۡقَهُۥ", transliteration: "rızkahû", root: "ر-ز-ق", pattern: "رِزْق", pos: "ism", meaning_tr: "onun rızkını", irab: "{Mef'ûl bih}, mensûb halde. 'Kadere' fiilinin mef'ûlü, muzâf yapısında.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Rızık bu kökten", balagha_note: null },
          { arabic: "فَيَقُولُ", transliteration: "fe-yekûlü", root: "ق-و-ل", pattern: "فَعَلَ", pos: "fil", meaning_tr: "der", irab: "{Fiil-i muzâri'}, I. bâb. Cevab-ı şart, önceki ayetle aynı kullanım.", irab_short: "muzâri', I. bâb", turkish_bridge: "Kavl, kâl bu kökten", balagha_note: "Tekrar sanatı" },
          { arabic: "رَبِّيٓ", transliteration: "rabbî", root: "ر-ب-ب", pattern: "رَبّ", pos: "ism", meaning_tr: "Rabbim", irab: "{Münâdâ}, mahzûf nidâ edatı ile. Önceki ayetle aynı kullanım.", irab_short: "münâdâ muzâf", turkish_bridge: "Rab bu kökten", balagha_note: "Tekrar sanatı" },
          { arabic: "أَهَٰنَنِ", transliteration: "ehânen", root: "ه-و-ن", pattern: "أَفْعَلَ", pos: "fil", meaning_tr: "beni aşağıladı, zelil kıldı", irab: "{Fiil-i mâzî}, IV. bâb. Fâili mahzûf 'hüve', mef'ûlü bitişik zamîr 'nî'.", irab_short: "mâzî, IV. bâb", turkish_bridge: "Hevân bu kökten", balagha_note: "15. ayetteki 'ekramen' ile tıbâk (zıtlık) sanatı" },
        ],
      },
      {
        surah: 89, ayah: 17,
        arabic: "كَلَّاۖ بَل لَّا تُكۡرِمُونَ ٱلۡيَتِيمَ",
        translation: "Hayır; yetime karşı cömert davranmıyorsunuz.",
        words: [
          { arabic: "كَلَّا", transliteration: "kellâ", root: null, pos: "harf", meaning_tr: "hayır, asla", irab: "{Harf-i zecer ve red}. Önceki yanlış düşünceyi reddediyor.", irab_short: "harf-i red", turkish_bridge: null, balagha_note: "Vurgu ve ret ifadesi" },
          { arabic: "بَل", transliteration: "bel", root: null, pos: "harf", meaning_tr: "aksine, belki", irab: "{Harf-i idrâb}. İspat için getirilen atf harfi, önceki reddin ardından doğruyu açıklıyor.", irab_short: "harf-i idrâb", turkish_bridge: null, balagha_note: null },
          { arabic: "لَّا", transliteration: "lâ", root: null, pos: "harf", meaning_tr: "değil", irab: "{Lâ-yı nâfiye}. Muzâri' fiili nefy eden harf.", irab_short: "lâ-yı nâfiye", turkish_bridge: null, balagha_note: null },
          { arabic: "تُكۡرِمُونَ", transliteration: "tükrimûn", root: "ك-ر-م", pattern: "أَفْعَلَ", pos: "fil", meaning_tr: "ikram etmiyorsunuz", irab: "{Fiil-i muzâri'}, IV. bâb. 'Lâ' ile menfi, fâili bitişik vav-ı cemâat.", irab_short: "muzâri', IV. bâb", turkish_bridge: "Kerâmet, ikram bu kökten", balagha_note: "15. ayetteki 'ekramen' kelimesiyle irtibat" },
          { arabic: "ٱلۡيَتِيمَ", transliteration: "el-yetîm", root: "ي-ت-م", pattern: "يَتِيم", pos: "ism", meaning_tr: "yetimi", irab: "{Mef'ûl bih}, mensûb halde. Filin etkisinin yöneldiği nesne.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Yetim bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 89, ayah: 18,
        arabic: "وَلَا تَحَـٰٓضُّونَ عَلَىٰ طَعَامِ ٱلۡمِسۡكِينِ",
        translation: "Yoksulu yedirmek konusunda birbirinize özenmiyorsunuz.",
        words: [
          { arabic: "وَلَا", transliteration: "ve-lâ", root: null, pos: "harf", meaning_tr: "ve değil", irab: "{Harf-i atf ve nefy}. Vav ile öncekine atıf, 'lâ' ile nefy.", irab_short: "harf-i atf", turkish_bridge: null, balagha_note: null },
          { arabic: "تَحَـٰٓضُّونَ", transliteration: "tehâddûn", root: "ح-ض-ض", pattern: "تَفَاعَلَ", pos: "fil", meaning_tr: "teşvik etmiyorsunuz, özendirmiyorsunuz", irab: "{Fiil-i muzâri'}, VI. bâb. 'Lâ' ile menfi, fâili vav-ı cemâat, müşâreket ifade ediyor.", irab_short: "muzâri', VI. bâb", turkish_bridge: null, balagha_note: null },
          { arabic: "عَلَىٰ", transliteration: "alâ", root: null, pos: "harf", meaning_tr: "konusunda, hususunda", irab: "{Harf-i cer}. Fiile müteallik, 'hususunda' manasında.", irab_short: "harf-i cer", turkish_bridge: null, balagha_note: null },
          { arabic: "طَعَامِ", transliteration: "ta'âmi", root: "ط-ع-م", pattern: "طَعَام", pos: "ism", meaning_tr: "yemeği", irab: "{Mecrûr}, muzâf olarak. 'Alâ' harfi cerrine tâbi.", irab_short: "mecrûr, muzâf", turkish_bridge: "Taam bu kökten", balagha_note: null },
          { arabic: "ٱلۡمِسۡكِينِ", transliteration: "el-miskîn", root: "س-ك-ن", pattern: "مِسْكِين", pos: "ism", meaning_tr: "yoksulun, miskin", irab: "{Muzâf ileyh}, mecrûr halde. 'Ta'âmi' kelimesine muzâf ileyh.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "Sükûn, mesken bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 89, ayah: 19,
        arabic: "وَتَأۡكُلُونَ ٱلتُّرَاثَ أَكۡلٗا لَّمّٗا",
        translation: "Size kalan mirası hak gözetmeden yiyorsunuz.",
        words: [
          { arabic: "وَتَأۡكُلُونَ", transliteration: "ve-te'külûn", root: "أ-ك-ل", pattern: "فَعَلَ", pos: "fil", meaning_tr: "ve yiyorsunuz", irab: "{Fiil-i muzâri'}, I. bâb. Vav ile atfedilmiş, fâili vav-ı cemâat.", irab_short: "muzâri', I. bâb", turkish_bridge: "Ekl bu kökten", balagha_note: null },
          { arabic: "ٱلتُّرَاثَ", transliteration: "et-türâs", root: "و-ر-ث", pattern: "تُرَاث", pos: "ism", meaning_tr: "mirası", irab: "{Mef'ûl bih}, mensûb halde. 'Te'külûn' fiilinin mef'ûlü.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Vâris, mîrâs bu kökten", balagha_note: null },
          { arabic: "أَكۡلٗا", transliteration: "eklen", root: "أ-ك-ل", pattern: "أَكْل", pos: "ism", meaning_tr: "yeme (şekilde)", irab: "{Mef'ûl mutlak}, mensûb halde. Fiilin masdarı olarak tarzı ifade ediyor.", irab_short: "mef'ûl mutlak", turkish_bridge: "Ekl bu kökten", balagha_note: "Te'kîd için masdarın getirilmesi" },
          { arabic: "لَّمّٗا", transliteration: "lemmâ", root: "ل-م-م", pattern: "لَمّ", pos: "ism", meaning_tr: "toptan, hepsini birden", irab: "{Sıfat}, mensûb halde. 'Eklen' kelimesinin sıfatı, 'yok edercesine' manasında.", irab_short: "sıfat, mensûb", turkish_bridge: null, balagha_note: "Abartı (mübâlağa) ifadesi" },
        ],
      },
      {
        surah: 89, ayah: 20,
        arabic: "وَتُحِبُّونَ ٱلۡمَالَ حُبّٗا جَمّٗا",
        translation: "Malı pek çok seviyorsunuz.",
        words: [
          { arabic: "وَتُحِبُّونَ", transliteration: "ve-tühibbûn", root: "ح-ب-ب", pattern: "فَعِلَ", pos: "fil", meaning_tr: "ve seviyorsunuz", irab: "{Fiil-i muzâri'}, I. bâb. Vav ile önceki fiile atfedilmiş, fâili vav-ı cemâat.", irab_short: "muzâri', I. bâb", turkish_bridge: "Muhabbet, habîb bu kökten", balagha_note: null },
          { arabic: "ٱلۡمَالَ", transliteration: "el-mâl", root: "م-و-ل", pattern: "مَال", pos: "ism", meaning_tr: "malı", irab: "{Mef'ûl bih}, mensûb halde. 'Tühibbûn' fiilinin mef'ûlü.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Mal bu kökten", balagha_note: null },
          { arabic: "حُبّٗا", transliteration: "hubben", root: "ح-ب-ب", pattern: "حُبّ", pos: "ism", meaning_tr: "sevme (şekilde)", irab: "{Mef'ûl mutlak}, mensûb halde. Fiilin masdarı olarak tarzı ifade ediyor.", irab_short: "mef'ûl mutlak", turkish_bridge: "Muhabbet bu kökten", balagha_note: "Te'kîd için masdarın getirilmesi" },
          { arabic: "جَمّٗا", transliteration: "cemmâ", root: "ج-م-م", pattern: "جَمّ", pos: "ism", meaning_tr: "çok fazla, aşırı", irab: "{Sıfat}, mensûb halde. 'Hubben' kelimesinin sıfatı, 'aşırı sevgi' anlamında.", irab_short: "sıfat, mensûb", turkish_bridge: "Cem' bu kökten", balagha_note: "Mübâlağa ifadesi, aşırı sevgiyi vurguluyor" },
        ],
      },
      {
        surah: 89, ayah: 21,
        arabic: "كَلَّآۖ إِذَا دُكَّتِ ٱلۡأَرۡضُ دَكّٗا دَكّٗا",
        translation: "Ama yer, çarpılıp paralandığı zaman;",
        words: [
          { arabic: "كَلَّآ", transliteration: "kellâ", root: null, pos: "harf", meaning_tr: "hayır, asla", irab: "{Harf-i zecer ve red}. Önceki yanlış tutumu reddediyor, kıyameti hatırlatıyor.", irab_short: "harf-i red", turkish_bridge: null, balagha_note: "17. ayetteki 'kellâ' ile tekrar sanatı" },
          { arabic: "إِذَا", transliteration: "izâ", root: null, pos: "harf", meaning_tr: "ne zaman", irab: "{Zarf-ı zaman}, şart ifade eden. Kıyamet günü için kullanılıyor.", irab_short: "zarf-ı zaman", turkish_bridge: null, balagha_note: null },
          { arabic: "دُكَّتِ", transliteration: "dükket", root: "د-ك-ك", pattern: "فُعِّلَ", pos: "fil", meaning_tr: "ezildi, dümdüz edildi", irab: "{Fiil-i mâzî}, II. bâb, meçhûl sigası. Fâili meçhûl, 'tâ-i te'nîs' ile.", irab_short: "mâzî, meçhûl", turkish_bridge: "Dekk bu kökten", balagha_note: null },
          { arabic: "ٱلۡأَرۡضُ", transliteration: "el-ard", root: "أ-ر-ض", pattern: "أَرْض", pos: "ism", meaning_tr: "yer, dünya", irab: "{Nâib-i fâil}, merfû halde. Meçhûl fiilde fâil yerine geçen.", irab_short: "nâib-i fâil, merfû", turkish_bridge: "Arz bu kökten", balagha_note: null },
          { arabic: "دَكّٗا", transliteration: "dekken", root: "د-ك-ك", pattern: "دَكّ", pos: "ism", meaning_tr: "ezme (şekilde)", irab: "{Mef'ûl mutlak}, mensûb halde. Fiilin masdarı olarak tarzı ifade ediyor.", irab_short: "mef'ûl mutlak", turkish_bridge: "Dekk bu kökten", balagha_note: "Te'kîd için masdarın tekrarı" },
          { arabic: "دَكّٗا", transliteration: "dekkâ", root: "د-ك-ك", pattern: "دَكّ", pos: "ism", meaning_tr: "ezme (şiddetli)", irab: "{Te'kîd lafzî}, mensûb halde. Önceki kelimeyi tekrar ederek te'kîd yapıyor.", irab_short: "te'kîd lafzî", turkish_bridge: "Dekk bu kökten", balagha_note: "Tekrar (takrâr) sanatı, şiddet ifadesi" },
        ],
      },
      {
        surah: 89, ayah: 22,
        arabic: "وَجَآءَ رَبُّكَ وَٱلۡمَلَكُ صَفّٗا صَفّٗا",
        translation: "Melekler sıra sıra dizilip, Rabbinin buyruğu gelince,",
        words: [
          { arabic: "وَجَآءَ", transliteration: "ve-câe", root: "ج-ي-أ", pattern: "فَعَلَ", pos: "fil", meaning_tr: "ve geldi", irab: "{Fiil-i mâzî}, I. bâb. Vav ile önceki cümleye atfedilmiş, 'izâ' şartının cevabı.", irab_short: "mâzî, I. bâb", turkish_bridge: null, balagha_note: null },
          { arabic: "رَبُّكَ", transliteration: "rabbüke", root: "ر-ب-ب", pattern: "رَبّ", pos: "ism", meaning_tr: "Rabbin", irab: "{Fâil}, merfû halde. Muzâf olarak, bitişik zamîr ile muzâf ileyh.", irab_short: "fâil, merfû", turkish_bridge: "Rab bu kökten", balagha_note: "Allah'a nisbetlede mecaz-ı aklî" },
          { arabic: "وَٱلۡمَلَكُ", transliteration: "vel-melek", root: "م-ل-ك", pattern: "مَلَك", pos: "ism", meaning_tr: "ve melek", irab: "{Atf}, merfû halde. 'Rabbüke' kelimesine atfedilmiş fâil.", irab_short: "atf, merfû", turkish_bridge: "Melek bu kökten", balagha_note: null },
          { arabic: "صَفّٗا", transliteration: "saffen", root: "ص-ف-ف", pattern: "صَفّ", pos: "ism", meaning_tr: "sıra (halinde)", irab: "{Hâl}, mensûb halde. Meleklerin durumunu ifade eden hâl.", irab_short: "hâl, mensûb", turkish_bridge: "Saff bu kökten", balagha_note: null },
          { arabic: "صَفّٗا", transliteration: "saffâ", root: "ص-ف-ف", pattern: "صَفّ", pos: "ism", meaning_tr: "sıra sıra", irab: "{Te'kîd lafzî}, mensûb halde. Önceki hâli tekrar ederek te'kîd yapıyor.", irab_short: "te'kîd lafzî", turkish_bridge: "Saff bu kökten", balagha_note: "Tekrar sanatı, meleklerin düzenli sıralar halinde oluşunu vurguluyor" },
        ],
      },
    ],
    exercises: [],
  },
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 3 — FECR 89:23-30
  // ═══════════════════════════════════════════════════════════
  {
    id: "S89-B03-fecr",
    title: "Fecr (23-30)",
    titleAr: "سُورَة الفجر 23-30",
    stage: 2,
    level: 8,
    surah: 89,
    description: "Kıyamet gününde cehennemin getirilişi, insanın geç pişmanlığı ve muttmain nefsin Rabbine dönüş çağrısı anlatılmaktadır.",
    verses: [
      {
        surah: 89, ayah: 23,
        arabic: "وَجِاْيٓءَ يَوۡمَئِذِۭ بِجَهَنَّمَۚ يَوۡمَئِذٖ يَتَذَكَّرُ ٱلۡإِنسَٰنُ وَأَنَّىٰ لَهُ ٱلذِّكۡرَىٰ",
        translation: "O gün, cehennem ortaya konur. O gün insan öğüt almaya çalışır ama artık öğütten ona ne?",
        words: [
          { arabic: "وَجِيءَ", transliteration: "ve cîe", root: "ج-ي-أ", pattern: "فُعِلَ", pos: "fil", meaning_tr: "getirildi, ortaya konuldu", irab: "{Fiil-i mâzî} mebnî li'l-mechûl, geçmiş zaman edilgen fiil. {Fâil} hazfedilmiş, Allah kastedilmektedir.", irab_short: "mâzî mebnî li'l-mechûl", turkish_bridge: null, balagha_note: "Fiil edilgen getirilerek Allah'ın kudreti vurgulanmış, failin hazfi ile heybetli bir tablo çizilmiştir." },
          { arabic: "يَوْمَئِذٍ", transliteration: "yevmeiẕin", root: "ي-و-م", pos: "ism", meaning_tr: "o gün, o vakit", irab: "{Zarf-ı zaman} mansûb, fiil-i mâzînin zamanını belirtir.", irab_short: "zarf-ı zaman, mansûb", turkish_bridge: "Yevm kelimesi Türkçeye geçmemiş ancak gün anlamındadır", balagha_note: null },
          { arabic: "بِجَهَنَّمَ", transliteration: "bi cehenneme", root: "ج-ه-ن-م", pos: "ism", meaning_tr: "cehennemle, cehennem", irab: "{Câr-mecrûr} takdiri: جيء بجهنم, mecrûr bi'l-bâ. {Nâib-i fâil} vazifesi görür.", irab_short: "nâib-i fâil, mecrûr", turkish_bridge: "Cehennem kelimesi Türkçeye bu kökten geçmiştir", balagha_note: "Cehennemin ismi zikredilerek korku atmosferi yaratılmıştır." },
          { arabic: "يَوْمَئِذٍ", transliteration: "yevmeiẕin", root: "ي-و-م", pos: "ism", meaning_tr: "o gün, işte o gün", irab: "{Zarf-ı zaman} mansûb, sonraki fiilin zamanını belirtir.", irab_short: "zarf-ı zaman, mansûb", turkish_bridge: null, balagha_note: "Tekrar ile o günün ehemmiyeti ve dehşeti vurgulanmıştır." },
          { arabic: "يَتَذَكَّرُ", transliteration: "yeteẕekkerü", root: "ذ-ك-ر", pattern: "تَفَعَّلَ", pos: "fil", meaning_tr: "öğüt alır, ibret alır, düşünmeye başlar", irab: "{Fiil-i muzâri'} merfû, V. bâb (تَفَعَّلَ kalıbı). Mübalağa ifade eder.", irab_short: "muzâri' merfû, V. bâb", turkish_bridge: "Zikir, tezkiye, mütezekkir bu köktendir", balagha_note: "V. bâb kullanılarak düşünmenin yoğunluğu ve çabası belirtilmiştir." },
          { arabic: "الْإِنْسَانُ", transliteration: "el-insânü", root: "أ-ن-س", pos: "ism", meaning_tr: "insan", irab: "{Fâil} merfû, yeteẕekkerü fiilinin failidir.", irab_short: "fâil, merfû", turkish_bridge: "İnsan kelimesi Türkçeye bu kökten geçmiştir", balagha_note: null },
          { arabic: "وَأَنَّىٰ", transliteration: "ve ennâ", root: null, pos: "harf", meaning_tr: "nereden, nasıl, ne fائde", irab: "{İstifhâm edatı} istifhâm-ı inkârî, inkâr manası taşır.", irab_short: "istifhâm-ı inkârî", turkish_bridge: null, balagha_note: "İstifhâm-ı inkârî ile artık hiçbir faydanın olmayacağı vurgulanmıştır." },
          { arabic: "لَهُ", transliteration: "lehü", root: null, pos: "harf", meaning_tr: "ona, onun için", irab: "{Câr-mecrûr} lâm li'l-intifâ', zamîr insâna râci'dir.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "الذِّكْرَىٰ", transliteration: "eẕ-ẕikrâ", root: "ذ-ك-ر", pattern: "فِعْلَىٰ", pos: "ism", meaning_tr: "öğüt, ibret, hatırlatma", irab: "{Mübtedâ} merfû, لَهُ khaberi mukaddem olan cümlenin mübtedâsıdır.", irab_short: "mübtedâ, merfû", turkish_bridge: "Zikir kelimesi aynı köktendir", balagha_note: "Takdîm-te'hîr sanatı ile câr-mecrûr khaberi öne getirilmiştir." },
        ],
      },
      {
        surah: 89, ayah: 24,
        arabic: "يَقُولُ يَٰلَيۡتَنِي قَدَّمۡتُ لِحَيَاتِي",
        translation: "Keşke bu hayatım için önceden bir şey yapsaymışım der.",
        words: [
          { arabic: "يَقُولُ", transliteration: "yekûlü", root: "ق-و-ل", pattern: "فَعَلَ", pos: "fil", meaning_tr: "der, söyler", irab: "{Fiil-i muzâri'} merfû, I. bâb. {Fâil} müstetir, هُوَ takdiri.", irab_short: "muzâri' merfû, I. bâb", turkish_bridge: "Kavl, kâl, kîl bu kökten", balagha_note: null },
          { arabic: "يَٰلَيْتَنِي", transliteration: "yâ leytenî", root: null, pos: "harf", meaning_tr: "keşke, eyvah keşke", irab: "{Edat-ı temennî} لَيْتَ, {İsmi} ضمير متصل نِي (أَنَا). Teesüf ve temenni ifade eder.", irab_short: "edat-ı temennî", turkish_bridge: null, balagha_note: "Temenni edatı ile derin pişmanlık ve çaresizlik ifade edilmiştir." },
          { arabic: "قَدَّمْتُ", transliteration: "kaddemtü", root: "ق-د-م", pattern: "فَعَّلَ", pos: "fil", meaning_tr: "önceden gönderdim, hazırladım", irab: "{Fiil-i mâzî} II. bâb (فَعَّلَ), {Fâil} ضمير متصل تُ. ليت cümlesinin khaberi mahzûftur.", irab_short: "mâzî, II. bâb", turkish_bridge: "Takdim, mukaddime bu kökten", balagha_note: "II. bâb ile çok yapma, güzelce yapma manası güçlendirilmiştir." },
          { arabic: "لِحَيَاتِي", transliteration: "li hayâtî", root: "ح-ي-ي", pos: "ism", meaning_tr: "hayatım için, yaşayışım için", irab: "{Câr-mecrûr} lâm li't-ta'lîl, fiilden sonra mef'ûl li'l-eclihi vazifesi görür.", irab_short: "câr-mecrûr, ta'lîl", turkish_bridge: "Hayat kelimesi aynı kökten Türkçeye geçmiştir", balagha_note: null },
        ],
      },
      {
        surah: 89, ayah: 25,
        arabic: "فَيَوۡمَئِذٖ لَّا يُعَذِّبُ عَذَابَهُۥٓ أَحَدٞ",
        translation: "O gün, hiç kimse, Allah'ın azabettiği gibi azabedemez.",
        words: [
          { arabic: "فَيَوْمَئِذٍ", transliteration: "fe yevmeiẕin", root: "ي-و-م", pos: "ism", meaning_tr: "işte o gün, artık o gün", irab: "{Zarf-ı zaman} mansûb, fâ li't-tafrî' (ayırma fâsı) ile başlar.", irab_short: "zarf-ı zaman, mansûb", turkish_bridge: null, balagha_note: "Fâ harfi ile netice ve tefrî' belirtilmiş, konunun değişimi işaret edilmiştir." },
          { arabic: "لَا", transliteration: "lâ", root: null, pos: "harf", meaning_tr: "hiç, asla", irab: "{Nâfiye}, muzâri' fiili nefyeden edat.", irab_short: "nâfiye", turkish_bridge: null, balagha_note: null },
          { arabic: "يُعَذِّبُ", transliteration: "yu'aẕẕibü", root: "ع-ذ-ب", pattern: "فَعَّلَ", pos: "fil", meaning_tr: "azabeder, işkence eder", irab: "{Fiil-i muzâri'} merfû, II. bâb (فَعَّلَ kalıbı). Lâ ile menfi.", irab_short: "muzâri' menfi, II. bâb", turkish_bridge: "Azap, azab, mu'azzeb bu kökten", balagha_note: "II. bâb ile azabın şiddetli ve mübalağalı oluşu ifade edilmiştir." },
          { arabic: "عَذَابَهُ", transliteration: "'aẕâbehû", root: "ع-ذ-ب", pos: "ism", meaning_tr: "onun azabını", irab: "{Mef'ûl-ü mutlak}, mansûb. Zamîr Allah'a râci'dir.", irab_short: "mef'ûl-ü mutlak, mansûb", turkish_bridge: "Azap kelimesi aynı kökten", balagha_note: "Mef'ûl-ü mutlak ile azabın türü ve şiddeti vurgulanmıştır." },
          { arabic: "أَحَدٌ", transliteration: "ahadün", root: "و-ح-د", pos: "ism", meaning_tr: "hiç kimse", irab: "{Fâil} merfû, yu'aẕẕibü fiilinin faili. Menfi cümlede عُمُوم ifade eder.", irab_short: "fâil, merfû", turkish_bridge: "Ahad, vâhid, vahdet bu kökten", balagha_note: "Menfi cümlede أحد kullanılarak umûm-i nefiy (genelleştirme) yapılmıştır." },
        ],
      },
      {
        surah: 89, ayah: 26,
        arabic: "وَلَا يُوثِقُ وَثَاقَهُۥٓ أَحَدٞ",
        translation: "Hiç kimse O'nun vurduğu bağ gibisini bağlayamaz.",
        words: [
          { arabic: "وَلَا", transliteration: "ve lâ", root: null, pos: "harf", meaning_tr: "ve hiç, ve asla", irab: "{Atıf harfi} و, {Nâfiye} لَا. Önceki cümleye atfedilir.", irab_short: "atıf + nâfiye", turkish_bridge: null, balagha_note: "Atıf ile önceki cümlenin devamı getirilerek mübalağa yapılmıştır." },
          { arabic: "يُوثِقُ", transliteration: "yûsikü", root: "و-ث-ق", pattern: "أَفْعَلَ", pos: "fil", meaning_tr: "bağlar, zincirler", irab: "{Fiil-i muzâri'} merfû, IV. bâb (أَفْعَلَ). Lâ ile menfi.", irab_short: "muzâri' menfi, IV. bâb", turkish_bridge: "Vesika, mevsûk bu kökten", balagha_note: null },
          { arabic: "وَثَاقَهُ", transliteration: "vesâkahû", root: "و-ث-ق", pos: "ism", meaning_tr: "onun bağını, onun zincirini", irab: "{Mef'ûl-ü mutlak} mansûb, zamîr Allah'a râci'dir.", irab_short: "mef'ûl-ü mutlak, mansûb", turkish_bridge: "Vesika kelimesi güven anlamında bu kökten", balagha_note: "Mef'ûl-ü mutlak ile bağlamanın türü ve şiddeti özellikle belirtilmiştir." },
          { arabic: "أَحَدٌ", transliteration: "ahadün", root: "و-ح-د", pos: "ism", meaning_tr: "hiç kimse", irab: "{Fâil} merfû, menfi cümlede umûm ifade eder.", irab_short: "fâil, merfû", turkish_bridge: "Ahad, vâhid, vahdet bu kökten", balagha_note: "Önceki ayetle tam müvâzene (parallellik) kurularak etkili tablo çizilmiştir." },
        ],
      },
      {
        surah: 89, ayah: 27,
        arabic: "يَـٰٓأَيَّتُهَا ٱلنَّفۡسُ ٱلۡمُطۡمَئِنَّةُ",
        translation: "Ey huzur içinde olan can!",
        words: [
          { arabic: "يَٰٓأَيَّتُهَا", transliteration: "yâ eyyetühâ", root: null, pos: "harf", meaning_tr: "ey (müennes için)", irab: "{Edat-ı nidâ} يَا, {İsm-i işâret} أَيَّتُهَا müennese müşâr ileyh için.", irab_short: "edat-ı nidâ", turkish_bridge: null, balagha_note: "Müşfik ve sevecen bir hitap üslubu kullanılmıştır." },
          { arabic: "النَّفْسُ", transliteration: "en-nefsü", root: "ن-ف-س", pos: "ism", meaning_tr: "ruh, can, nefis", irab: "{Münâdâ} merfû, nida edilen şey. Tarif ile mukayyed.", irab_short: "münâdâ, merfû", turkish_bridge: "Nefis, nefs kelimesi aynı kökten", balagha_note: "Nefsin özel bir durumu işaret edilerek tezat yaratılmıştır." },
          { arabic: "الْمُطْمَئِنَّةُ", transliteration: "el-mutmainneh", root: "ط-م-أ", pattern: "مُفْتَعِلَّة", pos: "ism", meaning_tr: "huzura eren, itminan bulan", irab: "{Sıfat} merfû, النَّفْس kelimesinin sıfatıdır.", irab_short: "sıfat, merfû", turkish_bridge: "İtminan, mutmain bu kökten", balagha_note: "VIII. bâb sîgasıyla derin huzur ve süreklilik ifade edilmiştir." },
        ],
      },
      {
        surah: 89, ayah: 28,
        arabic: "ٱرۡجِعِيٓ إِلَىٰ رَبِّكِ رَاضِيَةٗ مَّرۡضِيَّةٗ",
        translation: "O, senden, sen de O'ndan hoşnut olarak Rabbine dön!",
        words: [
          { arabic: "ارْجِعِي", transliteration: "irci'î", root: "ر-ج-ع", pattern: "اِفْعِلِي", pos: "fil", meaning_tr: "dön (sen, müennes)", irab: "{Fiil-i emr} müennes müfred için, I. bâb. Zamîr-i hitâb müstetir أَنْتِ.", irab_short: "emr müennes, I. bâb", turkish_bridge: "Rücû, râci', mürâcea bu kökten", balagha_note: "Emr-i irşâd ile Allah'ın mütmain nefse şefkatli emri belirtilmiştir." },
          { arabic: "إِلَىٰ", transliteration: "ilâ", root: null, pos: "harf", meaning_tr: "doğru, -e", irab: "{Harf-i cerr} intihâ-i ğâye ifade eder.", irab_short: "harf-i cerr", turkish_bridge: null, balagha_note: null },
          { arabic: "رَبِّكِ", transliteration: "rabbiki", root: "ر-ب-ب", pos: "ism", meaning_tr: "senin Rabbin, senin yaratıcın", irab: "{Mecrûr} bi ilâ, zamîr-i muttasıl كِ hitâb içindir.", irab_short: "mecrûr, muzâf", turkish_bridge: "Rabb kelimesi aynı kökten", balagha_note: "İzâfet ile özel sahiplik ve yakınlık vurgulanmıştır." },
          { arabic: "رَاضِيَةً", transliteration: "râdıyeten", root: "ر-ض-ي", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "hoşnut olan, razı olan", irab: "{Hâl} mansûb, fiil failinin halini belirtir.", irab_short: "hâl, mansûb", turkish_bridge: "Rıza, razı bu kökten", balagha_note: "İki hâl cümlesi ile karşılıklı rıza durumu tasvir edilmiştir." },
          { arabic: "مَرْضِيَّةً", transliteration: "merdıyyeten", root: "ر-ض-ي", pattern: "مَفْعِلَّة", pos: "ism", meaning_tr: "hoşnut edilmiş, beğenilmiş", irab: "{Hâl} mansûb, mef'ûlün bih vazifesinde hâl.", irab_short: "hâl, mansûb", turkish_bridge: "Marzî, merdî bu kökten", balagha_note: "İsm-i mef'ûl kalıbıyla Allah'ın rızası ve kabulü belirtilmiştir." },
        ],
      },
      {
        surah: 89, ayah: 29,
        arabic: "فَٱدۡخُلِي فِي عِبَٰدِي",
        translation: "İyi kullarımın arasına gir.",
        words: [
          { arabic: "فَادْخُلِي", transliteration: "fedḫulî", root: "د-خ-ل", pattern: "اُدْخُلِي", pos: "fil", meaning_tr: "gir (sen, müennes)", irab: "{Fiil-i emr} müennes için, I. bâb. Fâ ta'kîbiye (hemen arkasından).", irab_short: "emr müennes, I. bâb", turkish_bridge: "Dâhil, medhal bu kökten", balagha_note: "Fâ ta'kîbiye ile peş peşe gelen emirlerin sırası vurgulanmıştır." },
          { arabic: "فِي", transliteration: "fî", root: null, pos: "harf", meaning_tr: "içinde, arasında", irab: "{Harf-i cerr} zarfiyye ifade eder.", irab_short: "harf-i cerr", turkish_bridge: null, balagha_note: null },
          { arabic: "عِبَادِي", transliteration: "'ibâdî", root: "ع-ب-د", pos: "ism", meaning_tr: "kullarım, benim kullarım", irab: "{Mecrûr} bi fî, muzâf. Zamîr-i muttasıl يَ mütekellim vahdeh.", irab_short: "mecrûr, muzâf", turkish_bridge: "İbadet, âbid, ma'bûd bu kökten", balagha_note: "İzâfet-i şerefiyye ile Allah'a ait olmanın şerefi vurgulanmıştır." },
        ],
      },
      {
        surah: 89, ayah: 30,
        arabic: "وَٱدۡخُلِي جَنَّتِي",
        translation: "Cennetime gir.",
        words: [
          { arabic: "وَادْخُلِي", transliteration: "vedḫulî", root: "د-خ-ل", pattern: "اُدْخُلِي", pos: "fil", meaning_tr: "ve gir (sen, müennes)", irab: "{Fiil-i emr} atıf ile öncekine bağlı, müennes için. Vâv li'l-atf.", irab_short: "emr ma'tûf, I. bâb", turkish_bridge: "Dâhil, medhal bu kökten", balagha_note: "Atıf ile emirlerin silsilesi devam ettirilmiş ve zirve noktaya ulaşılmıştır." },
          { arabic: "جَنَّتِي", transliteration: "cennetî", root: "ج-ن-ن", pos: "ism", meaning_tr: "cennetim, benim cennetim", irab: "{Mef'ûl fîh} mansûb, muzâf. Zamîr-i muttasıl يَ li'l-mütekellim.", irab_short: "mef'ûl fîh, muzâf", turkish_bridge: "Cennet kelimesi aynı kökten Türkçeye geçmiştir", balagha_note: "İzâfet-i teşrîfiyye ile cennetin Allah'a aidiyeti ve kıymeti vurgulanarak sure sonlandırılmıştır." },
        ],
      },
    ],
    exercises: [],
  },
];

export default fecrLessons;
