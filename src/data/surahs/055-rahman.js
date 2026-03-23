// ═══════════════════════════════════════════════════════════
// RAHMÂN SURESİ (55) — İkinci Surah-Format Ders Dosyası
// v0.22.0: 6 bölüm (S55-B01 … S55-B06), 78 ayet
// ═══════════════════════════════════════════════════════════
//
// Cüz 27, Mekkî, 78 ayet
// "Kur'an'ın Gelini" (عَرُوسُ القُرْآنِ)
//
// Tematik: er-Rahmân'ın nimetleri, mîzân, ikili yaratılış
//          (ins-cin), fânîlik, cennet tasvirleri (iki çift)
//
// Belâgat öne çıkanlar:
//   - Tikrâr: فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ (31 kez)
//   - Tesniye (dual): رَبِّكُمَا، تُكَذِّبَانِ، جَنَّتَانِ...
//   - Tıbâk: fânî ↔ bâkî, cennet ↔ cehennem
//   - Mukâbele: birinci cennet çifti ↔ ikinci cennet çifti
//   - İsti'âre: وَرْدَةً كَالدِّهَانِ
//
// Bölüm planı:
//   B01: 1-13   er-Rahmân'ın Ta'lîmi, Mîzân
//   B02: 14-25  İki Yaratılış, İki Deniz
//   B03: 26-34  Fânîlik, Zü'l-Celâl, es-Sekaleyn
//   B04: 35-45  Kıyamet ve Cehennem
//   B05: 46-61  Birinci Cennet Çifti
//   B06: 62-78  İkinci Cennet Çifti ve Kapanış
// ═══════════════════════════════════════════════════════════

import {
  generateRootQuiz,
  generateBabQuiz,
  generateWaznQuiz,
  generateFillBlank,
  generateBalaghaQuiz,
  generateIrabQuiz,
} from "../../utils/quizGenerator.js";

// ─── Nakarat yardımcısı ────────────────────────────────────
// فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ 31 kez tekrarlanır.
// İlk geçişte (13. ayet) tam analiz verilir; sonrakilerde kısa referans.
const REFRAIN_AR = "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ";
const REFRAIN_TR = "Rabbinizin nimetlerinden hangisini yalanlarsınız?";

/** Tam kelime analizi — sadece ilk geçiş (B01, ayet 13) için */
const refrainWordsFull = [
  { arabic: "فَبِأَيِّ", transliteration: "fa-bi-ayyi", root: null, pos: "harf", meaning_tr: "peki hangi", irab: "فَ {isti'nâf} + بِ {harf-i cer} + أَيِّ {istifhâm, mecrûr, muzâf}.", irab_short: "istifhâm, mecrûr" },
  { arabic: "آلَاءِ", transliteration: "ālāʾi", root: "أ-ل-و", pattern: "أَفْعَال", pos: "ism", meaning_tr: "nimetlerinden", irab: "{Muzâfun ileyh} (أَيِّ'ye), {mecrûr}. Tekili: أَلَاء veya إِلًى. Nâdir kelime — yalnız bu bağlamda çoğul kullanılır.", irab_short: "muzâfun ileyh, mecrûr", turkish_bridge: "Âlâ (nimet, iyilik) — Türkçe'de 'âlâ' (üstün) ile karıştırılmamalı." },
  { arabic: "رَبِّكُمَا", transliteration: "rabbikumā", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbinizin (ikinizin)", irab: "{Muzâfun ileyh} (آلَاء'a), {mecrûr}. كُمَا: tesniye (ikil) zamîri → ins ve cin'e birlikte hitap.", irab_short: "muzâfun ileyh, mecrûr", turkish_bridge: "Rab (terbiye eden), mürebbî, terbiye bu kökten", balagha_note: "كُمَا: tesniye zamîri — bu sure boyunca ins ve cin'e ikili hitap. Tesniye kullanımı surenin en belirgin üslûp özelliği." },
  { arabic: "تُكَذِّبَانِ", transliteration: "tukaḏḏibāni", root: "ك-ذ-ب", pattern: "تُفَعِّلَانِ", pos: "fil", meaning_tr: "yalanlarsınız (ikiniz)", irab: "{Muzâri}, {merfû} (nûn ile). II. bâb (tef'îl): كَذَبَ (yalanladı) → كَذَّبَ (yalanlamaya devam etti). Tesniye: -َانِ eki.", irab_short: "muzâri merfû, II. bâb, tesniye", turkish_bridge: "Kizb (yalan), tekzîb (yalanlama) bu kökten", balagha_note: "تُكَذِّبَانِ: II. bâb = süreklilik + yoğunluk. Tek seferlik yalanlama değil, ısrarlı inkâr. 31 kez tekrar → tikrâr sanatının zirvesi." },
];

/** Kısa nakarat girişi — sonraki tekrarlar için */
function refrainVerse(ayahNum) {
  return {
    surah: 55, ayah: ayahNum,
    arabic: REFRAIN_AR,
    translation: REFRAIN_TR,
    words: [
      { arabic: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ", transliteration: "fa-bi-ayyi ālāʾi rabbikumā tukaḏḏibāni", root: "ك-ذ-ب", pos: "cümle", meaning_tr: "[Nakarat] Rabbinizin nimetlerinden hangisini yalanlarsınız?", irab_short: "nakarat — tam analiz: ayet 13", balagha_note: `Tikrâr #${ayahNum === 13 ? 1 : "—"}: her nimet bloğunun ardından tekrar → muhatap inkâr edemez.` },
    ],
    isRefrain: true,
  };
}

const rahmanLessons = [
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 1 — RAHMÂN 55:1-13 — er-Rahmân'ın Ta'lîmi ve Mîzân
  // ═══════════════════════════════════════════════════════════
  {
    id: "S55-B01-rahman",
    title: "Rahmân (1-13) — Ta'lîm, Yaratılış ve Mîzân",
    titleAr: "سُورَةُ الرَّحْمَـٰنِ ١-١٣",
    stage: 2,
    level: 8,
    surah: 55,
    description:
      "er-Rahmân ismiyle açılış, Kur'an öğretimi, insanın yaratılışı, beyân, güneş-ay-yıldız-ağaç secdesi, göğün yükseltilmesi, mîzân (denge), yeryüzü nimetleri. İlk nakarat: فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ.",
    verses: [
      {
        surah: 55, ayah: 1,
        arabic: "الرَّحْمَـٰنُ",
        translation: "Rahmân",
        words: [
          { arabic: "الرَّحْمَـٰنُ", transliteration: "ar-raḥmānu", root: "ر-ح-م", pattern: "فَعْلَان", pos: "ism", meaning_tr: "Rahmân (sonsuz merhamet sahibi)", irab: "{Mübtedâ}, {merfû} (damme). Haberi: عَلَّمَ القُرْآنَ (2. ayet) cümlesi. فَعْلَان: mübalağa kalıbı — rahmetin sürekli ve kapsayıcı olduğunu ifade eder.", irab_short: "mübtedâ, merfû", turkish_bridge: "Rahmet, rahim, merhamet bu kökten", balagha_note: "Sure tek bir isimle açılıyor: الرَّحْمَـٰنُ. Bağımsız mübtedâ — haberi sonraki ayetlerin tamamı. Tüm nimetlerin kaynağı bu tek isme bağlanıyor." },
        ],
      },
      {
        surah: 55, ayah: 2,
        arabic: "عَلَّمَ الْقُرْآنَ",
        translation: "Kur'an'ı öğretti.",
        words: [
          { arabic: "عَلَّمَ", transliteration: "ʿallama", root: "ع-ل-م", pattern: "فَعَّلَ", pos: "fil", meaning_tr: "öğretti", irab: "{Fiil-i mâzî}, II. bâb (tef'îl): عَلِمَ (bildi) → عَلَّمَ (öğretti). {Fâil}: الرَّحْمَـٰنُ (gizli zamîr).", irab_short: "fiil-i mâzî, II. bâb", turkish_bridge: "İlim, âlim, ta'lîm, muallim bu kökten", balagha_note: "Takdîm: Kur'an öğretimi insanın yaratılışından ÖNCE zikredilmiş (2 vs 3). Kur'an'ın insan varlığından daha önce planlandığını vurgular." },
          { arabic: "الْقُرْآنَ", transliteration: "al-qurʾāna", root: "ق-ر-أ", pattern: "فُعْلَان", pos: "ism", meaning_tr: "Kur'an'ı", irab: "{Mef'ûl bih}, {mensûb} (fetha).", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Kıraat (okuma), Kur'an (okunan) bu kökten" },
        ],
      },
      {
        surah: 55, ayah: 3,
        arabic: "خَلَقَ الْإِنسَانَ",
        translation: "İnsanı yarattı.",
        words: [
          { arabic: "خَلَقَ", transliteration: "ḫalaqa", root: "خ-ل-ق", pos: "fil", meaning_tr: "yarattı", irab_short: "fiil-i mâzî, I. bâb" },
          { arabic: "الْإِنسَانَ", transliteration: "al-insāna", root: "أ-ن-س", pos: "ism", meaning_tr: "insanı", irab: "{Mef'ûl bih}, {mensûb}. إِنْسَان: insanlık cinsinin genel adı.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "İnsan, üns (yakınlık), ünsiyet bu kökten" },
        ],
      },
      {
        surah: 55, ayah: 4,
        arabic: "عَلَّمَهُ الْبَيَانَ",
        translation: "Ona beyânı (açıkça ifade etmeyi) öğretti.",
        words: [
          { arabic: "عَلَّمَهُ", transliteration: "ʿallamahu", root: "ع-ل-م", pattern: "فَعَّلَ", pos: "fil", meaning_tr: "ona öğretti", irab: "عَلَّمَ {II. bâb} + هُ {mef'ûl bih birinci = الإنسان'a döner}.", irab_short: "fiil + zamîr" },
          { arabic: "الْبَيَانَ", transliteration: "al-bayāna", root: "ب-ي-ن", pattern: "فَعَال", pos: "ism", meaning_tr: "beyân, açık ifade, konuşma", irab: "{Mef'ûl bih} ikinci, {mensûb}. بَيَان: düşünceyi söze dökme, açıkça anlatma yetisi.", irab_short: "mef'ûl bih-2, mensûb", turkish_bridge: "Beyân (açıklama), beyyine (delil), tebyîn bu kökten", balagha_note: "البَيَان: sadece konuşma değil — düşünce, ifade, yazı, anlama yetisinin tamamı. İnsanı diğer canlılardan ayıran 'dil yetisi.'" },
        ],
      },
      {
        surah: 55, ayah: 5,
        arabic: "الشَّمْسُ وَالْقَمَرُ بِحُسْبَانٍ",
        translation: "Güneş ve ay bir hesap ile (hareket eder).",
        words: [
          { arabic: "الشَّمْسُ", transliteration: "aš-šamsu", root: "ش-م-س", pos: "ism", meaning_tr: "güneş", irab: "{Mübtedâ}, {merfû}.", irab_short: "mübtedâ, merfû" },
          { arabic: "وَالْقَمَرُ", transliteration: "wa-l-qamaru", root: "ق-م-ر", pos: "ism", meaning_tr: "ve ay", irab: "وَ {atıf} + القَمَر {ma'tûf, merfû}.", irab_short: "ma'tûf, merfû" },
          { arabic: "بِحُسْبَانٍ", transliteration: "bi-ḥusbānin", root: "ح-س-ب", pattern: "فُعْلَان", pos: "ism", meaning_tr: "bir hesap ile", irab: "بِ {harf-i cer} + حُسْبَان {mecrûr}. Haber (مُقَدَّر: يَجْرِيَانِ بِحُسْبَانٍ). فُعْلَان masdarı: dakik hesap.", irab_short: "câr-mecrûr = haber", turkish_bridge: "Hesap, hasîb, muhâsebe bu kökten", balagha_note: "حُسْبَان: salt 'hesap' değil — matematik dakikliğinde yörünge. Modern astronomi bunu doğrular." },
        ],
      },
      {
        surah: 55, ayah: 6,
        arabic: "وَالنَّجْمُ وَالشَّجَرُ يَسْجُدَانِ",
        translation: "Yıldız(lar/otlar) ve ağaç(lar) secde eder.",
        words: [
          { arabic: "وَالنَّجْمُ", transliteration: "wa-n-najmu", root: "ن-ج-م", pos: "ism", meaning_tr: "yıldız / sapı olmayan bitki", irab: "{Mübtedâ}, {merfû}. نَجْم: (1) yıldız, (2) sapı olmayan bitki (ot, çimen). Burada ikinci anlam tercih edilir: ağaçla karşıtlık.", irab_short: "mübtedâ, merfû", turkish_bridge: "Necm (yıldız/bitki), müneccim bu kökten", balagha_note: "النَّجْم: iki anlamlılık (teverru'). 'Yere yayılan bitki' anlamı الشَّجَر ile mukâbele oluşturur: yere yayılan ↔ gövdeli." },
          { arabic: "وَالشَّجَرُ", transliteration: "wa-š-šajaru", root: "ش-ج-ر", pos: "ism", meaning_tr: "ve ağaç(lar)", irab: "{Ma'tûf}, {merfû}.", irab_short: "ma'tûf, merfû" },
          { arabic: "يَسْجُدَانِ", transliteration: "yasjudāni", root: "س-ج-د", pos: "fil", meaning_tr: "secde eder (ikisi)", irab: "{Haber}, {muzâri merfû} (nûn ile). Tesniye: -َانِ eki. Bitki ve ağaç Allah'ın emrine boyun eğer → mecâzî secde.", irab_short: "haber, muzâri merfû, tesniye", turkish_bridge: "Secde, mescid, sâcid bu kökten", balagha_note: "يَسْجُدَانِ: tesniye fiil — surenin ikili üslûbunun ilk örneği. Bitkiler 'secde eder' → teşhîs (kişileştirme): cansız varlıklara bilinçli eylem atfetme." },
        ],
      },
      {
        surah: 55, ayah: 7,
        arabic: "وَالسَّمَاءَ رَفَعَهَا وَوَضَعَ الْمِيزَانَ",
        translation: "Göğü yükseltti ve mîzânı (dengeyi) koydu.",
        words: [
          { arabic: "وَالسَّمَاءَ", transliteration: "wa-s-samāʾa", root: "س-م-و", pos: "ism", meaning_tr: "ve göğü", irab: "وَ {isti'nâf} + السَّمَاء {mef'ûl bih mukaddem, mensûb}. İştigâl: رَفَعَهَا'daki zamîr buna döner.", irab_short: "mef'ûl bih mukaddem, mensûb", turkish_bridge: "Semâ (gök), sümüvv (yücelik) bu kökten" },
          { arabic: "رَفَعَهَا", transliteration: "rafaʿahā", root: "ر-ف-ع", pos: "fil", meaning_tr: "onu yükseltti", irab: "{Fiil-i mâzî} + هَا {mef'ûl bih: السَّمَاء'a döner}.", irab_short: "fiil-i mâzî, I. bâb", turkish_bridge: "Ref' (kaldırma, yükseltme), râfi' bu kökten" },
          { arabic: "وَوَضَعَ", transliteration: "wa-waḍaʿa", root: "و-ض-ع", pos: "fil", meaning_tr: "ve koydu, yerleştirdi", irab: "{Fiil-i mâzî}, I. bâb.", irab_short: "fiil-i mâzî, I. bâb", turkish_bridge: "Vaz' (koyma), mevzû (konan = konu) bu kökten" },
          { arabic: "الْمِيزَانَ", transliteration: "al-mīzāna", root: "و-ز-ن", pattern: "مِفْعَال", pos: "ism", meaning_tr: "mîzân, denge, terazi", irab: "{Mef'ûl bih}, {mensûb}. مِفْعَال: alet ismi. و-ز-ن kökünden: tartma, dengeleme.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Vezin (ölçü), mîzân (terazi/denge), muvâzene bu kökten", balagha_note: "المِيزَان: 3 ayette tekrar (7, 8, 9) → tikrâr ile vurgu. Fiziksel terazi + kozmik denge + ahlâkî adalet: üç katmanlı anlam." },
        ],
      },
      {
        surah: 55, ayah: 8,
        arabic: "أَلَّا تَطْغَوْا فِي الْمِيزَانِ",
        translation: "Mîzânda taşkınlık etmeyesiniz diye.",
        words: [
          { arabic: "أَلَّا", transliteration: "allā", root: null, pos: "harf", meaning_tr: "...meyesiniz diye", irab: "İki vecih: (1) أَنْ {masdariye} + لَا {nefy}: ta'lîl (amaç — tartıda aşmayın diye). (2) أَنْ {tefsîriye} + لَا {nâhiye}: وَضَعَ'i tefsîr eder (yani: tartıda taşkınlık etmeyin). Yâkût ve Kurtubî her iki vechi de nakleder.", irab_short: "masdariye+nefy / tefsîriye+nehy" },
          { arabic: "تَطْغَوْا", transliteration: "taṭġaw", root: "ط-غ-ي", pos: "fil", meaning_tr: "taşkınlık etmeyesiniz, aşmayasınız", irab: "{Muzâri, mensûb} (أَنْ ile). طَغَى: sınırı aştı, tuğyân etti.", irab_short: "muzâri mensûb", turkish_bridge: "Tuğyân (taşkınlık), tâğût bu kökten" },
          { arabic: "فِي", transliteration: "fī", root: null, pos: "harf", meaning_tr: "...de", irab_short: "harf-i cer" },
          { arabic: "الْمِيزَانِ", transliteration: "al-mīzāni", root: "و-ز-ن", pos: "ism", meaning_tr: "mîzânda, dengede", irab: "{Mecrûr}.", irab_short: "mecrûr" },
        ],
      },
      {
        surah: 55, ayah: 9,
        arabic: "وَأَقِيمُوا الْوَزْنَ بِالْقِسْطِ وَلَا تُخْسِرُوا الْمِيزَانَ",
        translation: "Tartıyı adaletle yapın ve mîzânı eksik tutmayın.",
        words: [
          { arabic: "وَأَقِيمُوا", transliteration: "wa-aqīmū", root: "ق-و-م", pos: "fil", meaning_tr: "ve doğru yapın, ikâme edin", irab: "{Emir}, IV. bâb (if'âl): قَامَ → أَقَامَ. Çoğul muhatap.", irab_short: "emir, IV. bâb", turkish_bridge: "Kıyâm, ikâmet, istikâmet bu kökten" },
          { arabic: "الْوَزْنَ", transliteration: "al-wazna", root: "و-ز-ن", pattern: "فَعْل", pos: "ism", meaning_tr: "tartıyı", irab: "{Mef'ûl bih}, {mensûb}.", irab_short: "mef'ûl bih, mensûb" },
          { arabic: "بِالْقِسْطِ", transliteration: "bi-l-qisṭi", root: "ق-س-ط", pos: "ism", meaning_tr: "adaletle", irab: "بِ {harf-i cer} + القِسْط {mecrûr}: adalet, hakkâniyet.", irab_short: "câr-mecrûr", turkish_bridge: "Kıst (adalet), muksit (adaletli) bu kökten" },
          { arabic: "وَلَا", transliteration: "wa-lā", root: null, pos: "harf", meaning_tr: "ve ...meyiniz", irab_short: "nehy" },
          { arabic: "تُخْسِرُوا", transliteration: "tuḫsirū", root: "خ-س-ر", pos: "fil", meaning_tr: "eksik tutmayın, haksızlık etmeyin", irab: "{Muzâri, meczûm} (لَا ile nehy). IV. bâb: خَسِرَ (kaybetti) → أَخْسَرَ (eksik yaptırdı).", irab_short: "muzâri meczûm, IV. bâb", turkish_bridge: "Husrân (kayıp), hâsir (kaybedenler) bu kökten" },
          { arabic: "الْمِيزَانَ", transliteration: "al-mīzāna", root: "و-ز-ن", pos: "ism", meaning_tr: "mîzânı", irab: "{Mef'ûl bih}, {mensûb}.", irab_short: "mef'ûl bih, mensûb" },
        ],
      },
      {
        surah: 55, ayah: 10,
        arabic: "وَالْأَرْضَ وَضَعَهَا لِلْأَنَامِ",
        translation: "Yeryüzünü canlılar için döşedi.",
        words: [
          { arabic: "وَالْأَرْضَ", transliteration: "wa-l-arḍa", root: "أ-ر-ض", pos: "ism", meaning_tr: "ve yeryüzünü", irab: "{Mef'ûl bih mukaddem}, {mensûb}. İştigâl yapısı (ayet 7 ile paralel).", irab_short: "mef'ûl bih mukaddem, mensûb" },
          { arabic: "وَضَعَهَا", transliteration: "waḍaʿahā", root: "و-ض-ع", pos: "fil", meaning_tr: "onu döşedi, koydu", irab_short: "fiil-i mâzî, I. bâb" },
          { arabic: "لِلْأَنَامِ", transliteration: "li-l-anāmi", root: "أ-ن-م", pos: "ism", meaning_tr: "canlılar(a)", irab: "لِ {harf-i cer} + الأَنَام {mecrûr}: tüm canlı yaratıklar (ins, cin, hayvan).", irab_short: "câr-mecrûr", balagha_note: "الأَنَام: sadece insan değil, tüm canlılar. Yeryüzü ortak bir sofra: Rahmân'ın rahmeti her canlıyı kapsar." },
        ],
      },
      {
        surah: 55, ayah: 11,
        arabic: "فِيهَا فَاكِهَةٌ وَالنَّخْلُ ذَاتُ الْأَكْمَامِ",
        translation: "Orada meyveler ve tomurcuklu hurma ağaçları vardır.",
        words: [
          { arabic: "فِيهَا", transliteration: "fīhā", root: null, pos: "harf", meaning_tr: "orada, onda", irab: "Câr-mecrûr, mukaddem haber.", irab_short: "câr-mecrûr = haber mukaddem" },
          { arabic: "فَاكِهَةٌ", transliteration: "fākihatun", root: "ف-ك-ه", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "meyve(ler)", irab: "{Mübtedâ muahhar}, {merfû}.", irab_short: "mübtedâ muahhar, merfû" },
          { arabic: "وَالنَّخْلُ", transliteration: "wa-n-naḫlu", root: "ن-خ-ل", pos: "ism", meaning_tr: "ve hurma ağaçları", irab: "{Ma'tûf}, {merfû}.", irab_short: "ma'tûf, merfû" },
          { arabic: "ذَاتُ", transliteration: "ḏātu", root: null, pos: "ism", meaning_tr: "sahip olan (dişil)", irab: "{Sıfat}, {merfû}. ذَات: ذُو'nun müennesi, muzâf.", irab_short: "sıfat, merfû" },
          { arabic: "الْأَكْمَامِ", transliteration: "al-akmāmi", root: "ك-م-م", pattern: "أَفْعَال", pos: "ism", meaning_tr: "tomurcukların, kabuğun", irab: "{Muzâfun ileyh}, {mecrûr}. كِمّ: hurma tomurcuğunu saran kabuk.", irab_short: "muzâfun ileyh, mecrûr" },
        ],
      },
      {
        surah: 55, ayah: 12,
        arabic: "وَالْحَبُّ ذُو الْعَصْفِ وَالرَّيْحَانُ",
        translation: "Yapraklı taneler ve hoş kokulu bitkiler (de vardır).",
        words: [
          { arabic: "وَالْحَبُّ", transliteration: "wa-l-ḥabbu", root: "ح-ب-ب", pos: "ism", meaning_tr: "ve tane(ler)", irab: "{Ma'tûf} (فَاكِهَة'ye), {merfû}.", irab_short: "ma'tûf, merfû", turkish_bridge: "Habbe (tane), habîb (sevgili — 'gönül tanesi') bu kökten" },
          { arabic: "ذُو", transliteration: "ḏū", root: null, pos: "ism", meaning_tr: "sahip olan (eril)", irab: "{Sıfat}, {merfû} (وَاو ile — esmâ-i hamse). Muzâf.", irab_short: "sıfat, merfû (esmâ-i hamse)" },
          { arabic: "الْعَصْفِ", transliteration: "al-ʿaṣfi", root: "ع-ص-ف", pos: "ism", meaning_tr: "yaprak, saman", irab: "{Muzâfun ileyh}, {mecrûr}. عَصْف: tahıl yaprağı, saman.", irab_short: "muzâfun ileyh, mecrûr" },
          { arabic: "وَالرَّيْحَانُ", transliteration: "wa-r-rayḥānu", root: "ر-و-ح", pattern: "فَيْعَلَان", pos: "ism", meaning_tr: "ve hoş kokulu bitki (reyhan)", irab: "{Ma'tûf}, {merfû}.", irab_short: "ma'tûf, merfû", turkish_bridge: "Rûh, rîh (rüzgâr), râha (koku), reyhân hep bu kökten", balagha_note: "Nimet sıralaması: meyve (tatlılık) → hurma (gıda) → tahıl (temel besin) → reyhan (güzel koku). Lezzetten faydaya, faydadan estetiğe." },
        ],
      },
      {
        surah: 55, ayah: 13,
        arabic: REFRAIN_AR,
        translation: REFRAIN_TR,
        words: refrainWordsFull,
        isRefrain: true,
        refrainIndex: 1,
      },
    ],
    grammarNotes: [
      {
        title: "Mübtedâ + Cümle Haberi: الرَّحْمَـٰنُ … عَلَّمَ",
        explanation:
          "Sure tek bir isimle başlar: الرَّحْمَـٰنُ (mübtedâ). Haberi ilk bakışta belli değildir — عَلَّمَ القُرْآنَ (2. ayet) ve sonraki fiil cümleleri hep bu mübtedâya bağlı haberlerdir. Böylece surenin tüm nimet listesi tek bir isme asılır: Rahmân.",
        rule: "Mübtedâ + fiil cümlesi haberi: الرَّحْمَـٰنُ عَلَّمَ = 'Rahmân öğretti.' Fiil cümlesi mübtedânın haberi olabilir.",
        examples: ["الرَّحْمَـٰنُ عَلَّمَ القُرْآنَ — Rahmân Kur'an'ı öğretti (55:1-2)", "اللَّهُ يَعْلَمُ — Allah bilir (mübtedâ + fiil cümlesi haber)"],
      },
      {
        title: "Takdîm: Kur'an Öğretimi < İnsan Yaratılışı",
        explanation:
          "Normal beklenti: önce yaratılış, sonra öğretim. Ama Rahmân suresi önce عَلَّمَ القُرْآنَ (2) sonra خَلَقَ الإِنسَانَ (3) der. Bu takdîm, Kur'an'ın insan var olmadan önce Levh-i Mahfûz'da planlandığını ve ilmin yaratılıştan öncelikli olduğunu vurgular.",
        rule: "Takdîm: önemli olanı öne alma. Sıralama farkı anlam farkı yaratır.",
        examples: ["عَلَّمَ القُرْآنَ → خَلَقَ الإِنسَانَ — öğretim > yaratılış (55:2-3)", "المَوْتَ وَالحَيَاة — ölüm > hayat (67:2)"],
      },
      {
        title: "Mîzân'ın Üçlü Tekrarı (7-8-9)",
        explanation:
          "المِيزَان kelimesi üç ayette üst üste tekrarlanır: (7) kozmik denge olarak koydu, (8) aşmayın diye, (9) adaletli tartın. Üç katman: fiziksel denge (yerçekimi, yörünge) → ahlâkî denge (aşırılıktan kaçınma) → hukukî denge (ticarette adalet).",
        rule: "Tikrâr + anlam genişlemesi: aynı kelime tekrar ettikçe anlam katmanları açılır.",
        examples: ["وَوَضَعَ المِيزَانَ (7) → أَلَّا تَطْغَوْا فِي المِيزَانِ (8) → وَلَا تُخْسِرُوا المِيزَانَ (9)"],
      },
      {
        title: "Tesniye (İkil) — Surenin Ana Yapısı",
        explanation:
          "Rahmân suresi ikili yapılar üzerine kuruludur: ins-cin, iki deniz, iki doğu-batı, iki cennet çifti. Fiillerde tesniye eki -َانِ / -َيْنِ sürekli tekrarlanır: يَسْجُدَانِ, تُكَذِّبَانِ, يَلْتَقِيَانِ, جَنَّتَانِ... Bu, surenin 'çiftler halinde yaratılış' mesajını dilbilgisi düzeyinde yansıtır.",
        rule: "Tesniye ekleri: fiilde -َانِ (merfû), -َيْنِ (mensûb/mecrûr); isimde -َانِ (merfû), -َيْنِ (mensûb/mecrûr).",
        examples: ["يَسْجُدَانِ — ikisi secde eder (55:6)", "تُكَذِّبَانِ — ikiniz yalanlarsınız (55:13)", "جَنَّتَانِ — iki cennet (55:46)"],
      },
    ],
    exercises: [
      generateBabQuiz(
        "S55-B01-Q01", "عَلَّمَ",
        "II. bâb (تَفْعِيل): عَلِمَ → عَلَّمَ (öğretti, ta'lîm etti)",
        ["I. bâb: عَلِمَ (bildi)", "IV. bâb: أَعْلَمَ (haber verdi)", "V. bâb: تَعَلَّمَ (öğrendi)"],
        "عَلَّمَ: II. bâb (tef'îl). ع-ل-م kökünden. عَلِمَ (bildi) → عَلَّمَ (başkasına öğretti). Rahmân'ın ilk sıfatı: Öğreten.",
        ["ع-ل-م"]
      ),
      generateRootQuiz(
        "S55-B01-Q02", "الْمِيزَانَ", "و-ز-ن",
        ["م-ز-ن", "و-ز-ع", "م-ي-ز"],
        "مِيزَان: و-ز-ن kökünden. مِفْعَال kalıbı (alet ismi). Vezin, mîzân, muvâzene hep bu kökten. İlk harfi و olduğu için مِ- kalıbında و düşer.",
        ["و-ز-ن"]
      ),
      generateBalaghaQuiz(
        "S55-B01-Q03",
        "55:2-3'te Kur'an öğretimi (عَلَّمَ القُرْآنَ) insanın yaratılışından (خَلَقَ الإِنسَانَ) ÖNCE zikredilmiştir. Bu hangi sanattır?",
        "Takdîm — önemli olanı öne alarak vurgu",
        ["Tikrâr — tekrar ile pekiştirme", "Hazf — düşürme", "İltifât — kişi geçişi"],
        "Takdîm (öne alma): Kur'an'ın öğretimi yaratılıştan önce zikredilir → ilmin varlıktan öncelikli olduğu vurgusu."
      ),
      generateIrabQuiz(
        "S55-B01-Q04", "الرَّحْمَـٰنُ",
        "Mübtedâ (merfû) — haberi sonraki ayetlerdeki fiil cümleleri",
        ["Münâdâ (merfû)", "Haber (merfû)", "Fâil (merfû)"],
        "الرَّحْمَـٰنُ: mübtedâ, merfû. Sure tek bir isimle açılır, haberi عَلَّمَ القُرْآنَ ve sonraki cümlelerdir. Tüm nimet listesi bu tek isme bağlıdır.",
        ["ر-ح-م"]
      ),
      generateWaznQuiz(
        "S55-B01-Q05", "حُسْبَان",
        "فُعْلَان (masdar) — ح-س-ب: 'dakik hesap, ölçülü hareket'",
        ["فَعَلَان (hareket masdarı)", "فُعْلَال", "فِعْلَان"],
        "حُسْبَان: فُعْلَان masdar kalıbı. ح-س-ب kökünden: hesap, muhâsebe. Güneş ve ay'ın 'bir hesap ile' yürüdüğünü bildirir.",
        ["ح-س-ب"]
      ),
      generateFillBlank(
        "S55-B01-Q06",
        "وَالنَّجْمُ وَالشَّجَرُ _____",
        "يَسْجُدَانِ", ["يَسْجُدُونَ", "سَجَدَا", "يَسْجُدُ"],
        "Yıldız/bitki ve ağaç ne yapar? (tesniye fiil)",
        "يَسْجُدَانِ: tesniye (ikil) muzâri — iki şey secde eder. Çoğul (يَسْجُدُونَ) değil tesniye (يَسْجُدَانِ) çünkü iki cins: النَّجْم ve الشَّجَر.",
        ["س-ج-د"]
      ),
      {
        id: "S55-B01-Q07", type: "single_choice",
        question: "المِيزَان kelimesi 7-9. ayetlerde üç kez tekrarlanır. Bu üç kullanımdaki anlam katmanları hangi sırayla genişler?",
        options: [
          "Kozmik denge → ahlâkî sınır → hukukî adalet",
          "Ticaret terazisi → ahlâkî sınır → kozmik denge",
          "Hukukî adalet → kozmik denge → ahlâkî sınır",
          "Hepsi aynı anlamda: fiziksel terazi",
        ],
        correct: 0,
        explanation: "المِيزَان üç katman: (7) وَوَضَعَ المِيزَانَ = kozmik denge/düzen, (8) أَلَّا تَطْغَوْا = ahlâkî sınırı aşmayın, (9) أَقِيمُوا الوَزْنَ بِالقِسْطِ = ticarette adaletli tartın. Genel → özel → pratik.",
        relatedRoots: ["و-ز-ن"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 2 — RAHMÂN 55:14-25 — İki Yaratılış, İki Deniz
  // ═══════════════════════════════════════════════════════════
  {
    id: "S55-B02-rahman",
    title: "Rahmân (14-25) — İki Yaratılış, İki Deniz",
    titleAr: "سُورَةُ الرَّحْمَـٰنِ ١٤-٢٥",
    stage: 2,
    level: 8,
    surah: 55,
    description:
      "İnsanın topraktan, cinnin ateşten yaratılışı. İki doğu, iki batı. İki deniz: birbirine kavuşur ama karışmaz — berzah. İnci ve mercan. Dağ gibi gemiler.",
    verses: [
      {
        surah: 55, ayah: 14,
        arabic: "خَلَقَ الْإِنسَانَ مِن صَلْصَالٍ كَالْفَخَّارِ",
        translation: "İnsanı, pişmiş çamura benzeyen bir balçıktan yarattı.",
        words: [
          { arabic: "خَلَقَ", transliteration: "ḫalaqa", root: "خ-ل-ق", pos: "fil", meaning_tr: "yarattı", irab_short: "fiil-i mâzî, I. bâb" },
          { arabic: "الْإِنسَانَ", transliteration: "al-insāna", root: "أ-ن-س", pos: "ism", meaning_tr: "insanı", irab_short: "mef'ûl bih, mensûb" },
          { arabic: "مِن", transliteration: "min", root: null, pos: "harf", meaning_tr: "...den", irab_short: "harf-i cer" },
          { arabic: "صَلْصَالٍ", transliteration: "ṣalṣālin", root: "ص-ل-ص-ل", pos: "ism", meaning_tr: "kuru, ses çıkaran balçık", irab: "{Mecrûr}. صَلْصَال: kurumuş çamur — vurulduğunda ses çıkarır. Rubâ'î (dört harfli) kök: ses taklidi (onomatope).", irab_short: "mecrûr", balagha_note: "صَلْصَال: ses taklidi kelime. Kurumuş çamura vurulduğundaki 'çın çın' sesi kökün kendisinde var." },
          { arabic: "كَالْفَخَّارِ", transliteration: "ka-l-faḫḫāri", root: "ف-خ-ر", pattern: "فَعَّال", pos: "ism", meaning_tr: "pişmiş çamur (seramik) gibi", irab: "كَ {harf-i teşbîh} + الفَخَّار {mecrûr}: ateşte pişmiş çanak-çömlek.", irab_short: "teşbîh + mecrûr", turkish_bridge: "Fahr (övünme), fahârî (çömlekçilik) bu kökten" },
        ],
      },
      {
        surah: 55, ayah: 15,
        arabic: "وَخَلَقَ الْجَانَّ مِن مَّارِجٍ مِّن نَّارٍ",
        translation: "Cinnleri de ateşten, yalın bir alevden yarattı.",
        words: [
          { arabic: "وَخَلَقَ", transliteration: "wa-ḫalaqa", root: "خ-ل-ق", pos: "fil", meaning_tr: "ve yarattı", irab_short: "fiil-i mâzî" },
          { arabic: "الْجَانَّ", transliteration: "al-jānna", root: "ج-ن-ن", pos: "ism", meaning_tr: "cinnleri (cin türünü)", irab: "{Mef'ûl bih}, {mensûb}. الجَانّ: cin türünün genel adı.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Cin, cennet (gizli bahçe), cenîn (gizli çocuk), mecnûn (aklı gizlenmiş) hep ج-ن-ن kökünden" },
          { arabic: "مِن", transliteration: "min", root: null, pos: "harf", meaning_tr: "...den", irab_short: "harf-i cer" },
          { arabic: "مَّارِجٍ", transliteration: "mārijin", root: "م-ر-ج", pattern: "فَاعِل", pos: "ism", meaning_tr: "yalın alev, karışık ateş", irab: "{Mecrûr}. مَارِج: dumansız, saf ateş alevi. مَرَجَ: karıştırdı, salıverdi.", irab_short: "mecrûr", balagha_note: "صَلْصَال ↔ مَارِج: mukâbele. Toprak (katı, soğuk, ağır) ↔ ateş (akışkan, sıcak, hafif). İki yaratılış maddesi tam zıt." },
          { arabic: "مِّن", transliteration: "min", root: null, pos: "harf", meaning_tr: "...den (açıklama)", irab: "مِنْ beyâniye: مَارِج'in ne olduğunu açıklar.", irab_short: "harf-i cer (beyâniye)" },
          { arabic: "نَّارٍ", transliteration: "nārin", root: "ن-و-ر", pos: "ism", meaning_tr: "ateşten", irab: "{Mecrûr}.", irab_short: "mecrûr", turkish_bridge: "Nâr (ateş), nûr (ışık) — aynı kök ama zıt çağrışım" },
        ],
      },
      refrainVerse(16),
      {
        surah: 55, ayah: 17,
        arabic: "رَبُّ الْمَشْرِقَيْنِ وَرَبُّ الْمَغْرِبَيْنِ",
        translation: "İki doğunun ve iki batının Rabbidir.",
        words: [
          { arabic: "رَبُّ", transliteration: "rabbu", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbi", irab: "{Haber} (mübtedâ mahzûf: هُوَ) veya bedel. {Merfû}, muzâf.", irab_short: "haber/bedel, merfû" },
          { arabic: "الْمَشْرِقَيْنِ", transliteration: "al-mašriqayni", root: "ش-ر-ق", pattern: "مَفْعِل", pos: "ism", meaning_tr: "iki doğunun", irab: "{Muzâfun ileyh}, {mecrûr} (يَ ile — tesniye)}. مَشْرِق: doğuş yeri. Tesniye: yaz doğusu + kış doğusu.", irab_short: "muzâfun ileyh, mecrûr (tesniye)", turkish_bridge: "Şark (doğu), şürûk (güneş doğması), işrâk bu kökten", balagha_note: "المَشْرِقَيْنِ: tesniye. Güneşin yaz ve kış gündönümlerindeki iki farklı doğuş noktası. Başka ayette المَشَارِق (çoğul = her günkü farklı noktalar, 37:5), المَشْرِق (tekil = genel kavram, 2:115)." },
          { arabic: "وَرَبُّ", transliteration: "wa-rabbu", root: "ر-ب-ب", pos: "ism", meaning_tr: "ve Rabbi", irab_short: "ma'tûf, merfû" },
          { arabic: "الْمَغْرِبَيْنِ", transliteration: "al-maġribayni", root: "غ-ر-ب", pattern: "مَفْعِل", pos: "ism", meaning_tr: "iki batının", irab: "{Muzâfun ileyh}, {mecrûr} (tesniye).", irab_short: "muzâfun ileyh, mecrûr (tesniye)", turkish_bridge: "Garb (batı), gurbet, garîb bu kökten" },
        ],
      },
      refrainVerse(18),
      {
        surah: 55, ayah: 19,
        arabic: "مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ",
        translation: "İki denizi salıverdi; birbirine kavuşurlar.",
        words: [
          { arabic: "مَرَجَ", transliteration: "maraja", root: "م-ر-ج", pos: "fil", meaning_tr: "salıverdi, bıraktı", irab: "{Fiil-i mâzî}, I. bâb. مَرَجَ: salıverdi, karıştırdı. {Fâil}: gizli zamîr (Allah).", irab_short: "fiil-i mâzî, I. bâb" },
          { arabic: "الْبَحْرَيْنِ", transliteration: "al-baḥrayni", root: "ب-ح-ر", pos: "ism", meaning_tr: "iki denizi", irab: "{Mef'ûl bih}, {mensûb} (يَ ile — tesniye).", irab_short: "mef'ûl bih, mensûb (tesniye)", turkish_bridge: "Bahr (deniz), Bahreyn (iki deniz = ülke adı) bu kökten" },
          { arabic: "يَلْتَقِيَانِ", transliteration: "yaltaqiyāni", root: "ل-ق-ي", pos: "fil", meaning_tr: "birbirine kavuşurlar (ikisi)", irab: "{Hâl cümlesi}, {muzâri merfû} (nûn ile, tesniye). VIII. bâb (ifti'âl): لَقِيَ → اِلْتَقَى (karşılaştı, kavuştu).", irab_short: "hâl, muzâri merfû, VIII. bâb, tesniye" },
        ],
      },
      {
        surah: 55, ayah: 20,
        arabic: "بَيْنَهُمَا بَرْزَخٌ لَّا يَبْغِيَانِ",
        translation: "Aralarında bir engel (berzah) vardır; birbirini aşamazlar.",
        words: [
          { arabic: "بَيْنَهُمَا", transliteration: "baynahumā", root: "ب-ي-ن", pos: "ism", meaning_tr: "aralarında (ikisinin)", irab: "{Zarf}, muzâf + هُمَا {muzâfun ileyh, tesniye zamîri}.", irab_short: "zarf + tesniye zamîri" },
          { arabic: "بَرْزَخٌ", transliteration: "barzaḫun", root: "ب-ر-ز-خ", pos: "ism", meaning_tr: "engel, perde, ara bölge", irab: "{Mübtedâ muahhar} veya fâil, {merfû}. بَرْزَخ: iki şey arasındaki geçilmez sınır.", irab_short: "mübtedâ/fâil, merfû", turkish_bridge: "Berzah: Arapça'da iki alan arasındaki geçit/engel. Ölüm sonrası 'berzah âlemi' de bu kökten.", balagha_note: "بَرْزَخ: tatlı su ile tuzlu su arasındaki görünmez sınır. Modern oşinografi bunu 'haloklin' olarak doğrular — tuzluluk farkı fiziksel bir engel oluşturur." },
          { arabic: "لَّا", transliteration: "lā", root: null, pos: "harf", meaning_tr: "...maz(lar)", irab_short: "nefy" },
          { arabic: "يَبْغِيَانِ", transliteration: "yabġiyāni", root: "ب-غ-ي", pos: "fil", meaning_tr: "birbirinin sınırını aşmazlar (ikisi)", irab: "{Muzâri, merfû} (tesniye nûnu ile). بَغَى: haddi aştı, tecavüz etti. Sıfat cümlesi veya hâl.", irab_short: "muzâri merfû, tesniye", turkish_bridge: "Bağy (haddi aşma), bâğî (isyancı) bu kökten" },
        ],
      },
      refrainVerse(21),
      {
        surah: 55, ayah: 22,
        arabic: "يَخْرُجُ مِنْهُمَا اللُّؤْلُؤُ وَالْمَرْجَانُ",
        translation: "İkisinden inci ve mercan çıkar.",
        words: [
          { arabic: "يَخْرُجُ", transliteration: "yaḫruju", root: "خ-ر-ج", pos: "fil", meaning_tr: "çıkar", irab: "{Muzâri, merfû}. I. bâb.", irab_short: "muzâri merfû, I. bâb", turkish_bridge: "Hurûc (çıkış), ihraç, muhâcir bu kökten" },
          { arabic: "مِنْهُمَا", transliteration: "minhumā", root: null, pos: "harf", meaning_tr: "ikisinden", irab: "مِنْ + هُمَا (tesniye zamîri = iki denize döner).", irab_short: "câr-mecrûr" },
          { arabic: "اللُّؤْلُؤُ", transliteration: "al-luʾluʾu", root: "ل-ؤ-ل-ؤ", pos: "ism", meaning_tr: "inci", irab: "{Fâil}, {merfû}. Rubâ'î kök.", irab_short: "fâil, merfû" },
          { arabic: "وَالْمَرْجَانُ", transliteration: "wa-l-marjānu", root: "م-ر-ج-ن", pos: "ism", meaning_tr: "ve mercan", irab: "{Ma'tûf}, {merfû}.", irab_short: "ma'tûf, merfû", balagha_note: "اللُّؤْلُؤ وَالمَرْجَان: iki denizin buluşma noktasından çıkan değerli şeyler. Zıtların birleşiminden güzellik doğar → Rahmân'ın yaratıcı kudreti." },
        ],
      },
      refrainVerse(23),
      {
        surah: 55, ayah: 24,
        arabic: "وَلَهُ الْجَوَارِ الْمُنشَآتُ فِي الْبَحْرِ كَالْأَعْلَامِ",
        translation: "Denizde dağlar gibi yükselen gemiler de O'nundur.",
        words: [
          { arabic: "وَلَهُ", transliteration: "wa-lahū", root: null, pos: "harf", meaning_tr: "ve O'nundur", irab: "وَ {isti'nâf} + لَهُ {câr-mecrûr = mukaddem haber}.", irab_short: "câr-mecrûr = haber mukaddem" },
          { arabic: "الْجَوَارِ", transliteration: "al-jawāri", root: "ج-ر-ي", pos: "ism", meaning_tr: "gemiler (akan/yüzen şeyler)", irab: "{Mübtedâ muahhar}, {merfû} (mukadder damme). جَارِيَة'nin cem'i: akan, yüzen → gemi.", irab_short: "mübtedâ muahhar, merfû", turkish_bridge: "Ceryân (akış), mecrâ (yatağı), cereyân bu kökten" },
          { arabic: "الْمُنشَآتُ", transliteration: "al-munšaʾātu", root: "ن-ش-أ", pos: "ism", meaning_tr: "yükselen, inşa edilen", irab: "{Sıfat}, {merfû}. IV. bâb ism-i mef'ûl müennes çoğul: أَنْشَأَ → مُنْشَأَة.", irab_short: "sıfat, merfû", turkish_bridge: "İnşâ, neş'e, menşe bu kökten" },
          { arabic: "فِي الْبَحْرِ", transliteration: "fi-l-baḥri", root: "ب-ح-ر", pos: "ism", meaning_tr: "denizde", irab_short: "câr-mecrûr" },
          { arabic: "كَالْأَعْلَامِ", transliteration: "ka-l-aʿlāmi", root: "ع-ل-م", pattern: "أَفْعَال", pos: "ism", meaning_tr: "dağlar gibi", irab: "كَ {teşbîh} + الأَعْلَام {mecrûr}. أَعْلَام: عَلَم (bayrak, dağ, işaret) çoğulu. Burada: yüksek dağlar.", irab_short: "teşbîh + mecrûr", turkish_bridge: "Alem (bayrak/işaret), ilim, âlim — 'bilinen, tanınan işaret' anlamıyla", balagha_note: "كَالأَعْلَامِ: gemiler dağlara benzetilmiş → teşbîh. Denizin ortasında yükselen yelkenli gemiler = su üzerinde dağlar." },
        ],
      },
      refrainVerse(25),
    ],
    grammarNotes: [
      {
        title: "Mukâbele: صَلْصَال ↔ مَارِج — İki Yaratılış Maddesi",
        explanation:
          "14-15. ayetler mükemmel bir mukâbele oluşturur: İnsan → topraktan (صَلْصَال كَالفَخَّار = katı, soğuk, ses çıkaran, ağır) // Cin → ateşten (مَارِج مِنْ نَار = akışkan, sıcak, dumansız, hafif). İki yaratık, iki madde, tam zıt özellikler.",
        rule: "Mukâbele: iki veya daha fazla unsuru simetrik zıtlıkla karşı karşıya koyma. Tıbâk'ın genişletilmiş, çok boyutlu versiyonu.",
        examples: ["خَلَقَ الإِنسَانَ مِن صَلْصَالٍ كَالفَخَّارِ (55:14) ↔ وَخَلَقَ الجَانَّ مِن مَارِجٍ مِنْ نَارٍ (55:15)"],
      },
      {
        title: "Tesniye Yer İsimleri: المَشْرِقَيْنِ ↔ المَغْرِبَيْنِ",
        explanation:
          "Kur'an'da doğu-batı üç şekilde gelir: (1) Tekil: المَشْرِق (genel kavram, 2:115), (2) Tesniye: المَشْرِقَيْنِ (yaz/kış gündönümü, 55:17), (3) Çoğul: المَشَارِق (365 günlük farklı noktalar, 37:5, 70:40). Rahmân'ın tesniye tercihi surenin ikili yapısıyla uyumludur.",
        rule: "Tekil = soyut kavram, tesniye = iki uç nokta, çoğul = tüm ara noktalar. Gramer, anlam taşır.",
        examples: ["المَشْرِقَيْنِ وَالمَغْرِبَيْنِ — 55:17", "رَبُّ المَشَارِقِ وَالمَغَارِبِ — 70:40"],
      },
      {
        title: "بَرْزَخ: Doğa Mucizesi",
        explanation:
          "بَرْزَخ (engel, perde): iki deniz kavuşur (يَلْتَقِيَانِ) ama karışmaz (لَا يَبْغِيَانِ). Modern oşinografi bunu 'haloklin' (tuzluluk sınırı) ile açıklar — farklı yoğunluktaki su kütleleri birbirine değer ama karışmaz. 7. yüzyılda bu bilginin kaynağı dikkat çekicidir.",
        rule: "بَيْنَهُمَا بَرْزَخٌ: iki şey arasına konulan görünmez sınır. Fiziksel ve metaforik kullanılır.",
        examples: ["بَيْنَهُمَا بَرْزَخٌ لَا يَبْغِيَانِ — 55:20", "وَمِن وَرَائِهِم بَرْزَخٌ — 23:100 (ölüm-diriliş arası)"],
      },
    ],
    exercises: [
      generateRootQuiz(
        "S55-B02-Q01", "الْجَانَّ", "ج-ن-ن",
        ["ج-ن-ي", "ج-ن-ب", "ج-ن-ح"],
        "الجَانّ: ج-ن-ن kökünden. Cin (gizli varlık), cennet (gizli bahçe), cenîn (gizli çocuk), mecnûn (aklı gizlenmiş) hep 'gizlilik' temel anlamından.",
        ["ج-ن-ن"]
      ),
      generateWaznQuiz(
        "S55-B02-Q02", "مَارِج",
        "فَاعِل (ism-i fâil) — م-ر-ج: 'karışan, salınan' → dumansız alev",
        ["مَفْعَل (yer ismi)", "فَاعُول (mübalağa)", "فَعَّال (meslek)"],
        "مَارِج: فَاعِل kalıbı. م-ر-ج kökünden: karıştırmak, salıvermek. Ateşin saf, dumansız alevi — renkler birbirine karışmış, titreyen alevler.",
        ["م-ر-ج"]
      ),
      generateBalaghaQuiz(
        "S55-B02-Q03",
        "55:14-15'te insanın صَلْصَال'den, cinnin مَارِج'den yaratılması hangi sanatı oluşturur?",
        "Mukâbele — iki yaratık + iki madde simetrik karşıtlık",
        ["Tıbâk — tek zıt çift", "Tikrâr — tekrar", "Teşbîh — benzetme"],
        "Mukâbele: iki veya daha fazla unsuru karşılıklı simetrik zıtlıkla sunma. Toprak (katı/soğuk/ağır) ↔ ateş (akışkan/sıcak/hafif) → çok boyutlu karşıtlık."
      ),
      generateFillBlank(
        "S55-B02-Q04",
        "مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ ﴿١٩﴾ بَيْنَهُمَا _____ لَّا يَبْغِيَانِ",
        "بَرْزَخٌ", ["حِجَابٌ", "سَدٌّ", "حَاجِزٌ"],
        "İki deniz arasındaki görünmez engel nedir?",
        "بَرْزَخ: iki şey arasındaki geçilmez sınır/perde. Tatlı su ile tuzlu su arasındaki doğal bariyerı ifade eder.",
        ["ب-ر-ز-خ"]
      ),
      generateIrabQuiz(
        "S55-B02-Q05", "الْمَشْرِقَيْنِ",
        "Muzâfun ileyh, mecrûr (يَ ile — tesniye formu)",
        ["Mef'ûl bih, mensûb (يَ ile)", "Fâil, merfû (الف ile — tesniye)", "Mübtedâ, merfû"],
        "المَشْرِقَيْنِ: رَبُّ'nun muzâfun ileyhi, mecrûr. Tesniye mecrûr eki: -َيْنِ. Yaz ve kış güneş doğuş noktalarını ifade eder.",
        ["ش-ر-ق"]
      ),
      {
        id: "S55-B02-Q06", type: "single_choice",
        question: "Kur'an'da doğu kavramı tekil (المَشْرِق), tesniye (المَشْرِقَيْنِ) ve çoğul (المَشَارِق) olarak geçer. Bunlar neyi ifade eder?",
        options: [
          "Tekil: soyut kavram / Tesniye: yaz-kış uç noktaları / Çoğul: her günkü farklı noktalar",
          "Hepsi aynı anlamda, sadece üslûp farkı",
          "Tekil: bir yer / Tesniye: iki yer / Çoğul: üç yer",
          "Tekil: güneş / Tesniye: güneş ve ay / Çoğul: tüm yıldızlar",
        ],
        correct: 0,
        explanation: "Tekil المَشْرِق = genel doğu kavramı. Tesniye المَشْرِقَيْنِ = yaz ve kış gündönümlerindeki iki uç doğuş noktası. Çoğul المَشَارِق = yıl boyunca güneşin her gün farklı bir noktadan doğması. Gramer formu anlam farkı taşır.",
        relatedRoots: ["ش-ر-ق"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 3 — RAHMÂN 55:26-34 — Fânîlik, Zü'l-Celâl, es-Sekaleyn
  // ═══════════════════════════════════════════════════════════
  {
    id: "S55-B03-rahman",
    title: "Rahmân (26-34) — Fânîlik ve Zü'l-Celâl",
    titleAr: "سُورَةُ الرَّحْمَـٰنِ ٢٦-٣٤",
    stage: 2,
    level: 8,
    surah: 55,
    description:
      "Yeryüzünde her şey fânî — yalnız Zü'l-Celâli ve'l-İkrâm olan Rabbinin yüzü bâkî. Göklerde ve yerde olanlar O'ndan ister. Her gün bir şe'ndedir. es-Sekaleyn (iki ağırlık): ins ve cin. Göklerin ve yerin sınırlarını aşmaya güç yetmez — ancak sultân ile.",
    verses: [
      {
        surah: 55, ayah: 26,
        arabic: "كُلُّ مَنْ عَلَيْهَا فَانٍ",
        translation: "Yeryüzünde olan herkes fânîdir (yok olucudur).",
        words: [
          { arabic: "كُلُّ", transliteration: "kullu", root: "ك-ل-ل", pos: "ism", meaning_tr: "her, tüm", irab: "{Mübtedâ}, {merfû}, muzâf.", irab_short: "mübtedâ, merfû" },
          { arabic: "مَنْ", transliteration: "man", root: null, pos: "ism", meaning_tr: "kim, her kim", irab: "İsm-i mevsûl, {muzâfun ileyh}, mahallen mecrûr.", irab_short: "ism-i mevsûl, muzâfun ileyh" },
          { arabic: "عَلَيْهَا", transliteration: "ʿalayhā", root: null, pos: "harf", meaning_tr: "onun (yeryüzünün) üzerinde", irab: "Câr-mecrûr = sıla. هَا: الأَرْض'e döner.", irab_short: "câr-mecrûr = sıla" },
          { arabic: "فَانٍ", transliteration: "fānin", root: "ف-ن-ي", pattern: "فَاعِل", pos: "ism", meaning_tr: "fânî, yok olucu", irab: "{Haber}, {merfû} (mukadder damme — nakıs ism-i fâil: ف-ن-ي). فَنِيَ → فَانٍ: yok olan.", irab_short: "haber, merfû (nakıs)", turkish_bridge: "Fenâ (yokluk), fânî (yok olucu) bu kökten", balagha_note: "فَانٍ: ism-i fâil → sürekli durum. 'Yok olacak' değil 'zaten yok oluşta.' Her an ölüme doğru ilerlemek = fânîlik." },
        ],
      },
      {
        surah: 55, ayah: 27,
        arabic: "وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو الْجَلَالِ وَالْإِكْرَامِ",
        translation: "Ancak celâl ve ikram sahibi Rabbinin vechi (yüzü/zâtı) bâkîdir.",
        words: [
          { arabic: "وَيَبْقَىٰ", transliteration: "wa-yabqā", root: "ب-ق-ي", pos: "fil", meaning_tr: "ve kalır, bâkîdir", irab: "{Muzâri, merfû} (mukadder damme). I. bâb. فَانٍ'nin tıbâk'ı.", irab_short: "muzâri merfû", turkish_bridge: "Bekâ (kalıcılık), bâkî bu kökten" },
          { arabic: "وَجْهُ", transliteration: "wajhu", root: "و-ج-ه", pattern: "فَعْل", pos: "ism", meaning_tr: "yüzü, zâtı", irab: "{Fâil}, {merfû}, muzâf.", irab_short: "fâil, merfû", turkish_bridge: "Vech (yüz), vecîh (itibarlı), teveccüh (yöneliş) bu kökten", balagha_note: "وَجْه: 'yüz' → mecâz ile 'zât, öz.' Allah'ın zâtı bâkîdir. Yüzün zikri: en şerefli uzuv ile bütünü ifade → mecâz-ı mürsel." },
          { arabic: "رَبِّكَ", transliteration: "rabbika", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbinin", irab: "{Muzâfun ileyh}, {mecrûr}.", irab_short: "muzâfun ileyh, mecrûr" },
          { arabic: "ذُو", transliteration: "ḏū", root: null, pos: "ism", meaning_tr: "sahip olan", irab: "{Sıfat} (وَجْه için veya رَبِّكَ için), {merfû} (وَاو — esmâ-i hamse). Muzâf.", irab_short: "sıfat, merfû (esmâ-i hamse)" },
          { arabic: "الْجَلَالِ", transliteration: "al-jalāli", root: "ج-ل-ل", pos: "ism", meaning_tr: "celâlin (büyüklük, haşmet)", irab: "{Muzâfun ileyh}, {mecrûr}.", irab_short: "muzâfun ileyh, mecrûr", turkish_bridge: "Celâl, celîl, iclâl bu kökten" },
          { arabic: "وَالْإِكْرَامِ", transliteration: "wa-l-ikrāmi", root: "ك-ر-م", pattern: "إِفْعَال", pos: "ism", meaning_tr: "ve ikramın (cömertlik, şeref)", irab: "{Ma'tûf}, {mecrûr}. IV. bâb masdarı.", irab_short: "ma'tûf, mecrûr", turkish_bridge: "Kerem, ikram, kerîm bu kökten", balagha_note: "ذُو الجَلَالِ وَالإِكْرَامِ: celâl (haşmet/heybet) + ikram (cömertlik/şeref). Celâl → korku, ikram → umut. İki zıt duyguyu dengeleyen terkip." },
        ],
      },
      refrainVerse(28),
      {
        surah: 55, ayah: 29,
        arabic: "يَسْأَلُهُ مَن فِي السَّمَاوَاتِ وَالْأَرْضِ كُلَّ يَوْمٍ هُوَ فِي شَأْنٍ",
        translation: "Göklerde ve yerde olanlar O'ndan ister. O, her gün bir şe'ndedir (bir iştedir).",
        words: [
          { arabic: "يَسْأَلُهُ", transliteration: "yasʾaluhū", root: "س-أ-ل", pos: "fil", meaning_tr: "O'ndan ister", irab: "{Muzâri, merfû}. I. bâb. هُ: mef'ûl bih (Allah'a döner).", irab_short: "muzâri merfû" },
          { arabic: "مَن", transliteration: "man", root: null, pos: "ism", meaning_tr: "kim, her kim", irab: "İsm-i mevsûl, {fâil}, mahallen merfû.", irab_short: "ism-i mevsûl, fâil" },
          { arabic: "فِي السَّمَاوَاتِ", transliteration: "fi-s-samāwāti", root: "س-م-و", pos: "ism", meaning_tr: "göklerde", irab_short: "câr-mecrûr = sıla" },
          { arabic: "وَالْأَرْضِ", transliteration: "wa-l-arḍi", root: "أ-ر-ض", pos: "ism", meaning_tr: "ve yerde", irab_short: "ma'tûf, mecrûr" },
          { arabic: "كُلَّ", transliteration: "kulla", root: "ك-ل-ل", pos: "ism", meaning_tr: "her", irab: "{Zarf}, {mensûb}, muzâf.", irab_short: "zarf, mensûb" },
          { arabic: "يَوْمٍ", transliteration: "yawmin", root: "ي-و-م", pos: "ism", meaning_tr: "gün", irab: "{Muzâfun ileyh}, {mecrûr}.", irab_short: "muzâfun ileyh, mecrûr" },
          { arabic: "هُوَ", transliteration: "huwa", root: null, pos: "ism", meaning_tr: "O", irab: "{Mübtedâ}.", irab_short: "mübtedâ" },
          { arabic: "فِي", transliteration: "fī", root: null, pos: "harf", meaning_tr: "...de", irab_short: "harf-i cer" },
          { arabic: "شَأْنٍ", transliteration: "šaʾnin", root: "ش-أ-ن", pos: "ism", meaning_tr: "bir iş, bir hal", irab: "{Mecrûr}. شَأْن: önemli iş, durum. Allah her an yaratır, rızık verir, affeder, cezalandırır — 'durağan' değil.", irab_short: "mecrûr", turkish_bridge: "Şân (iş, değer, hal) bu kökten", balagha_note: "كُلَّ يَوْمٍ هُوَ فِي شَأْنٍ: nekire (شَأْن) = her gün FARKLI bir iş. Allah'ın fiilleri tükenmez ve tekrarlanmaz → kudretin sonsuzluğu." },
        ],
      },
      refrainVerse(30),
      {
        surah: 55, ayah: 31,
        arabic: "سَنَفْرُغُ لَكُمْ أَيُّهَ الثَّقَلَانِ",
        translation: "Ey iki ağırlık (ins ve cin)! Sizin hesabınıza bakacağız.",
        words: [
          { arabic: "سَنَفْرُغُ", transliteration: "sanafrugu", root: "ف-ر-غ", pos: "fil", meaning_tr: "bakacağız, yöneleceğiz", irab: "سَ {istikbâl} + نَفْرُغُ {muzâri, merfû}. فَرَغَ: boşaldı → 'size boş kalacağız' = hesabınıza bakacağız. Mecâzî: Allah meşgul olmaz ama 'size ayrılacağız' = tehdit.", irab_short: "muzâri merfû (istikbâl)", turkish_bridge: "Ferâğ (boşluk), teferruğ bu kökten", balagha_note: "سَنَفْرُغُ: zahiren 'boş kalacağız' ama Allah boşalmaz — isti'âre-i temsîliye: bir büyüğün 'sana bakacağım' demesi gibi ince tehdit." },
          { arabic: "لَكُمْ", transliteration: "lakum", root: null, pos: "harf", meaning_tr: "sizin (hesabınıza)", irab_short: "câr-mecrûr" },
          { arabic: "أَيُّهَ", transliteration: "ayyuha", root: null, pos: "harf", meaning_tr: "ey!", irab: "Nidâ edatı (terkip).", irab_short: "nidâ" },
          { arabic: "الثَّقَلَانِ", transliteration: "aṯ-ṯaqalāni", root: "ث-ق-ل", pos: "ism", meaning_tr: "iki ağırlık (ins ve cin)", irab: "{Münâdâ}, {merfû}. Tesniye: الثَّقَل (ağırlık) → الثَّقَلَانِ. İnsan ve cin 'yeryüzünün iki ağır yükü' → sorumluluk taşıyan iki tür.", irab_short: "münâdâ, merfû (tesniye)", turkish_bridge: "Siklet (ağırlık), sakîl bu kökten (Arapça ث = Türkçe s)", balagha_note: "الثَّقَلَانِ: yeryüzünün 'iki değerli/ağır' sakini. 'Ağırlık' = hem fiziksel varlık hem sorumluluk." },
        ],
      },
      refrainVerse(32),
      {
        surah: 55, ayah: 33,
        arabic: "يَا مَعْشَرَ الْجِنِّ وَالْإِنسِ إِنِ اسْتَطَعْتُمْ أَن تَنفُذُوا مِنْ أَقْطَارِ السَّمَاوَاتِ وَالْأَرْضِ فَانفُذُوا لَا تَنفُذُونَ إِلَّا بِسُلْطَانٍ",
        translation: "Ey cin ve insan topluluğu! Göklerin ve yerin sınırlarından geçip gitmeye gücünüz yetiyorsa haydi geçin! Ama bir sultân (güç/delil) olmadan geçemezsiniz.",
        words: [
          { arabic: "يَا", transliteration: "yā", root: null, pos: "harf", meaning_tr: "ey!", irab_short: "nidâ" },
          { arabic: "مَعْشَرَ", transliteration: "maʿšara", root: "ع-ش-ر", pos: "ism", meaning_tr: "topluluğu, gürûhu", irab: "{Münâdâ muzâf}, {mensûb}. مَعْشَر: bir türün topluluğu.", irab_short: "münâdâ, mensûb" },
          { arabic: "الْجِنِّ", transliteration: "al-jinni", root: "ج-ن-ن", pos: "ism", meaning_tr: "cinlerin", irab_short: "muzâfun ileyh, mecrûr" },
          { arabic: "وَالْإِنسِ", transliteration: "wa-l-insi", root: "أ-ن-س", pos: "ism", meaning_tr: "ve insanların", irab_short: "ma'tûf, mecrûr" },
          { arabic: "إِنِ", transliteration: "ini", root: null, pos: "harf", meaning_tr: "eğer", irab: "Şart edatı.", irab_short: "şart" },
          { arabic: "اسْتَطَعْتُمْ", transliteration: "istaṭaʿtum", root: "ط-و-ع", pos: "fil", meaning_tr: "gücünüz yettiyse", irab: "{Fiil-i mâzî}, X. bâb (istif'âl): طَاعَ → اِسْتَطَاعَ (güç yetirdi).", irab_short: "fiil-i mâzî, X. bâb", turkish_bridge: "Tâat (itaat), istîtaat (güç), tatavvu' (gönüllülük) bu kökten" },
          { arabic: "أَن", transliteration: "an", root: null, pos: "harf", meaning_tr: "...(y)meye", irab_short: "masdariye" },
          { arabic: "تَنفُذُوا", transliteration: "tanfuḏū", root: "ن-ف-ذ", pos: "fil", meaning_tr: "geçip gitmeye, nüfuz etmeye", irab: "{Muzâri, mensûb} (أَنْ ile). نَفَذَ: delip geçti, nüfuz etti.", irab_short: "muzâri mensûb", turkish_bridge: "Nüfûz (geçme/etkileme), nâfiz, tenfîz bu kökten" },
          { arabic: "مِنْ أَقْطَارِ", transliteration: "min aqṭāri", root: "ق-ط-ر", pos: "ism", meaning_tr: "sınırlarından, kenarlarından", irab: "مِنْ {ibtidâ} + أَقْطَار {mecrûr, muzâf}. قُطْر: kenar, bölge → أَقْطَار: tüm kenarlar/yönler.", irab_short: "câr-mecrûr", turkish_bridge: "Kutr (çap), aqtâr (bölgeler) bu kökten" },
          { arabic: "السَّمَاوَاتِ وَالْأَرْضِ", transliteration: "as-samāwāti wa-l-arḍi", root: null, pos: "ism", meaning_tr: "göklerin ve yerin", irab_short: "muzâfun ileyh + ma'tûf" },
          { arabic: "فَانفُذُوا", transliteration: "fa-nfuḏū", root: "ن-ف-ذ", pos: "fil", meaning_tr: "haydi geçin!", irab: "فَ {cevâb-ı şart} + انفُذُوا {emir}.", irab_short: "emir, cevâb-ı şart" },
          { arabic: "لَا تَنفُذُونَ", transliteration: "lā tanfuḏūna", root: "ن-ف-ذ", pos: "fil", meaning_tr: "geçemezsiniz", irab: "لَا {nefy} + تَنفُذُونَ {muzâri, merfû}. Hâl cümlesi veya müste'nefe.", irab_short: "nefy + muzâri merfû" },
          { arabic: "إِلَّا", transliteration: "illā", root: null, pos: "harf", meaning_tr: "ancak, ...olmadan", irab_short: "istisna" },
          { arabic: "بِسُلْطَانٍ", transliteration: "bi-sulṭānin", root: "س-ل-ط", pos: "ism", meaning_tr: "bir sultân (güç/delil/yetki) ile", irab: "بِ {harf-i cer} + سُلْطَان {mecrûr}: güç, yetki, delil. Allah'ın verdiği bilgi ve izin olmadan evrenin sınırları aşılamaz.", irab_short: "câr-mecrûr", turkish_bridge: "Sultan, sulta, tasallut bu kökten", balagha_note: "بِسُلْطَانٍ: nekire → 'herhangi bir güç ile bile.' Uzay boşluğunu aşma meydan okuması — ama إِلَّا بِسُلْطَانٍ: Allah'ın verdiği ilim ve izinle belki mümkün?" },
        ],
      },
      refrainVerse(34),
    ],
    grammarNotes: [
      {
        title: "Tıbâk: فَانٍ ↔ يَبْقَى — Fânîlik ve Bekâ",
        explanation:
          "26-27. ayetler Kur'an'ın en güçlü tıbâk örneklerinden birini sunar: فَانٍ (yok olucu, geçici) ↔ يَبْقَى (kalıcı, bâkî). Yeryüzünde herkes fânî → ama Rabbinin vechi bâkî. Zıtlık hem kelime hem cümle düzeyinde: كُلُّ مَنْ عَلَيْهَا (genellik) ↔ وَجْهُ رَبِّكَ (teklik).",
        rule: "Tıbâk: zıt anlamlı kelimeleri bir arada kullanma. فَانٍ (yok oluş) ↔ يَبْقَى (kalış) = en temel varoluş karşıtlığı.",
        examples: ["كُلُّ مَنْ عَلَيْهَا فَانٍ ↔ وَيَبْقَى وَجْهُ رَبِّكَ — 55:26-27", "المَوْتَ ↔ الحَيَاةَ — 67:2"],
      },
      {
        title: "Nakıs İsm-i Fâil: فَانٍ",
        explanation:
          "فَانٍ kelimesi ف-ن-ي kökünden ism-i fâildir. Son harfi ي (nakıs) olduğu için i'rabı mukadderdir: Ref'de فَانٍ (damme mukadder), nasb'da فَانِيًا, cer'de فَانٍ. Tenvin ile ي düşer: فَانِيٌ → فَانٍ.",
        rule: "Nakıs ism-i fâil: son harfi ي olan isimler. Ref' ve cer'de ي düşer + tenvin: قَاضٍ, هَادٍ, فَانٍ.",
        examples: ["فَانٍ (aslı: فَانِيٌ) — 55:26", "دَانٍ (aslı: دَانِيٌ) = yakın — 55:54", "آنٍ (aslı: آنِيٌ) = kaynar — 55:44"],
      },
      {
        title: "Şart + Emir + Nefy: إِنِ اسْتَطَعْتُمْ … فَانفُذُوا … لَا تَنفُذُونَ",
        explanation:
          "33. ayette üçlü yapı: (1) إِنِ اسْتَطَعْتُمْ (şart: gücünüz yeterse), (2) فَانفُذُوا (emir/meydan okuma: haydi geçin!), (3) لَا تَنفُذُونَ (nefy/sonuç: geçemezsiniz). Emir burada gerçek emir değil, ta'cîz (âcizliği ortaya koyma) anlamında.",
        rule: "Ta'cîz emri: yapılamayacak bir şeyi emrederek muhatabın âcizliğini vurgulamak. فَأْتُوا بِسُورَةٍ (2:23) ile aynı yapı.",
        examples: ["فَانفُذُوا — 55:33 (geçin! = geçemezsiniz)", "فَأْتُوا بِسُورَةٍ — 2:23 (getirin! = getiremezsiniz)"],
      },
    ],
    exercises: [
      generateBalaghaQuiz(
        "S55-B03-Q01",
        "55:26-27'de فَانٍ (yok olucu) ve يَبْقَى (kalıcı) kelimeleri hangi sanatı oluşturur?",
        "Tıbâk — zıt anlamlı kelimelerin bir arada kullanılması",
        ["Tikrâr — tekrar", "Teşbîh — benzetme", "Hazf — düşürme"],
        "Tıbâk: فَانٍ ↔ يَبْقَى. Fânîlik ve bekâ — varoluşun en temel karşıtlığı. Yeryüzü ahâlisinin geçiciliği ile Allah'ın kalıcılığı."
      ),
      generateRootQuiz(
        "S55-B03-Q02", "الثَّقَلَانِ", "ث-ق-ل",
        ["ث-ق-ب", "ط-ق-ل", "ث-ك-ل"],
        "الثَّقَلَانِ: ث-ق-ل kökünden, tesniye formu. İns ve cin = yeryüzünün 'iki ağırlığı/iki değerlisi.' Siklet, sakîl (ağır) aynı kökten.",
        ["ث-ق-ل"]
      ),
      generateBabQuiz(
        "S55-B03-Q03", "اسْتَطَعْتُمْ",
        "X. bâb (istif'âl): طَاعَ → اِسْتَطَاعَ (güç yetirmeyi talep etti = gücü yetti)",
        ["I. bâb: طَاعَ (boyun eğdi)", "IV. bâb: أَطَاعَ (itaat etti)", "VIII. bâb: اِطَّاعَ"],
        "اسْتَطَاعَ: X. bâb. ط-و-ع kökünden. Tâat (itaat), istîtaat (güç yetirme), mutî' (itaatkâr) hep bu kökten.",
        ["ط-و-ع"]
      ),
      generateIrabQuiz(
        "S55-B03-Q04", "فَانٍ",
        "Haber (merfû — mukadder damme) — nakıs ism-i fâil: aslı فَانِيٌ",
        ["Sıfat (merfû)", "Fâil (merfû)", "Hâl (mensûb — aslı فَانِيًا)"],
        "فَانٍ: كُلُّ مَنْ عَلَيْهَا'nın haberi, merfû. Nakıs ism-i fâil: son harfi ي olduğu için damme mukadderdir ve tenvin ile ي düşer.",
        ["ف-ن-ي"]
      ),
      generateFillBlank(
        "S55-B03-Q05",
        "وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو _____ وَالْإِكْرَامِ",
        "الْجَلَالِ", ["الْجَمَالِ", "الْكَمَالِ", "الْعَظَمَةِ"],
        "Rabbinin vechi hangi iki sıfatla nitelenir?",
        "ذُو الجَلَالِ وَالإِكْرَامِ: celâl (haşmet/heybet) + ikram (cömertlik/şeref). Celâl korku, ikram umut uyandırır — iki zıt duyguyu dengeler.",
        ["ج-ل-ل"]
      ),
      {
        id: "S55-B03-Q06", type: "single_choice",
        question: "55:33'te فَانفُذُوا (geçin!) emri gerçek bir emir midir?",
        options: [
          "Hayır — ta'cîz (âcizlik ortaya koyma): 'geçin!' = 'asla geçemezsiniz!'",
          "Evet — Allah ins ve cin'e izin veriyor",
          "Hayır — soru cümlesi olarak okunmalı",
          "Evet — gelecekte uzay yolculuğuna izin veriliyor",
        ],
        correct: 0,
        explanation: "Ta'cîz emri: yapılamayacak bir şeyi emrederek muhatabın âcizliğini vurgular. فَأْتُوا بِسُورَةٍ (2:23, getirin = getiremezsiniz) ile aynı yapı. Meydan okuma yoluyla kudret ispatı.",
        relatedRoots: ["ن-ف-ذ"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 4 — RAHMÂN 55:35-45 — Kıyamet ve Cehennem
  // ═══════════════════════════════════════════════════════════
  {
    id: "S55-B04-rahman",
    title: "Rahmân (35-45) — Kıyamet Sahnesi ve Cehennem",
    titleAr: "سُورَةُ الرَّحْمَـٰنِ ٣٥-٤٥",
    stage: 2,
    level: 8,
    surah: 55,
    description:
      "İns ve cin'e ateş ve bakır gönderilmesi, göğün yarılıp gül gibi kızarması, günahkârların yüzlerinden tanınması, perçem ve ayaklarından tutulması, cehennemle yüz yüze gelme, kaynar su ile cehennem arası gidip gelme.",
    verses: [
      {
        surah: 55, ayah: 35,
        arabic: "يُرْسَلُ عَلَيْكُمَا شُوَاظٌ مِّن نَّارٍ وَنُحَاسٌ فَلَا تَنتَصِرَانِ",
        translation: "Üzerinize ateşten bir alev ve erimiş bakır gönderilir de yardım da bulamazsınız.",
        words: [
          { arabic: "يُرْسَلُ", transliteration: "yursalu", root: "ر-س-ل", pos: "fil", meaning_tr: "gönderilir", irab: "{Muzâri, meçhul, merfû}.", irab_short: "muzâri meçhul, merfû", turkish_bridge: "Risâle, resûl, irsâl bu kökten" },
          { arabic: "عَلَيْكُمَا", transliteration: "ʿalaykumā", root: null, pos: "harf", meaning_tr: "ikinizin üzerine", irab: "Câr-mecrûr. كُمَا: tesniye zamîri → ins ve cin.", irab_short: "câr-mecrûr (tesniye)" },
          { arabic: "شُوَاظٌ", transliteration: "šuwāẓun", root: "ش-و-ظ", pos: "ism", meaning_tr: "dumansız alev, kızıl ateş", irab: "{Nâib-i fâil}, {merfû}. Nadirattan: parlak, dumansız ateş dili.", irab_short: "nâib-i fâil, merfû" },
          { arabic: "مِّن نَّارٍ", transliteration: "min nārin", root: "ن-و-ر", pos: "ism", meaning_tr: "ateşten", irab_short: "câr-mecrûr (beyâniye)" },
          { arabic: "وَنُحَاسٌ", transliteration: "wa-nuḥāsun", root: "ن-ح-س", pos: "ism", meaning_tr: "ve erimiş bakır/duman", irab: "{Ma'tûf}, {merfû}. نُحَاس: (1) erimiş bakır, (2) saf duman. Her iki yorum da azap tasviri.", irab_short: "ma'tûf, merfû" },
          { arabic: "فَلَا", transliteration: "fa-lā", root: null, pos: "harf", meaning_tr: "ve ... de olmaz", irab_short: "nefy" },
          { arabic: "تَنتَصِرَانِ", transliteration: "tantaṣirāni", root: "ن-ص-ر", pos: "fil", meaning_tr: "yardım bulamazsınız (ikiniz)", irab: "{Muzâri, merfû} (tesniye nûnu). VIII. bâb: نَصَرَ → اِنتَصَرَ (yardım aradı/intikam aldı).", irab_short: "muzâri merfû, VIII. bâb, tesniye", turkish_bridge: "Nusret, nasr, intisâr bu kökten" },
        ],
      },
      refrainVerse(36),
      {
        surah: 55, ayah: 37,
        arabic: "فَإِذَا انشَقَّتِ السَّمَاءُ فَكَانَتْ وَرْدَةً كَالدِّهَانِ",
        translation: "Gök yarıldığında erimiş yağ gibi kızıl bir gül olur.",
        words: [
          { arabic: "فَإِذَا", transliteration: "fa-iḏā", root: null, pos: "harf", meaning_tr: "peki ...olduğunda", irab: "فَ {isti'nâf} + إِذَا {zarf-ı zaman + şart}.", irab_short: "şart zarfı" },
          { arabic: "انشَقَّتِ", transliteration: "inšaqqati", root: "ش-ق-ق", pos: "fil", meaning_tr: "yarıldı", irab: "{Fiil-i mâzî}, VII. bâb (infi'âl): شَقَّ (yardı) → اِنشَقَّ (yarıldı, kendi kendine ayrıldı).", irab_short: "fiil-i mâzî, VII. bâb", turkish_bridge: "Şakk (yarma), inşikâk, şikâk (ayrılık) bu kökten" },
          { arabic: "السَّمَاءُ", transliteration: "as-samāʾu", root: "س-م-و", pos: "ism", meaning_tr: "gök", irab: "{Fâil}, {merfû}.", irab_short: "fâil, merfû" },
          { arabic: "فَكَانَتْ", transliteration: "fa-kānat", root: "ك-و-ن", pos: "fil", meaning_tr: "olduğunda", irab: "فَ {atıf} + كَانَ {fiil-i mâzî, nâkıs}.", irab_short: "fiil nâkıs" },
          { arabic: "وَرْدَةً", transliteration: "wardatan", root: "و-ر-د", pos: "ism", meaning_tr: "gül (gibi kızıl)", irab: "{Haber-i kâne}, {mensûb}. وَرْدَة: (1) gül çiçeği, (2) kızıl renk. Gökyüzü kızıl bir güle dönüşür.", irab_short: "haber-i kâne, mensûb", turkish_bridge: "Verd (gül), vürûd (varış = gülün açması), vird bu kökten", balagha_note: "وَرْدَةً كَالدِّهَانِ: çift katmanlı benzetme. Gök → gül (renk) → erimiş yağ (akışkanlık). Modern astrofizikte nebula resimleri bu tasvirle örtüşür." },
          { arabic: "كَالدِّهَانِ", transliteration: "ka-d-dihāni", root: "د-ه-ن", pos: "ism", meaning_tr: "erimiş yağ/boya gibi", irab: "كَ {teşbîh} + الدِّهَان {mecrûr}: erimiş yağ, zeytinyağı veya deri boyası. Renklerin iç içe aktığı kıvamlı sıvı.", irab_short: "teşbîh + mecrûr", turkish_bridge: "Dühân (duman — Duhân suresi), dehn (yağ), müdâhene bu kökten" },
        ],
      },
      refrainVerse(38),
      {
        surah: 55, ayah: 39,
        arabic: "فَيَوْمَئِذٍ لَّا يُسْأَلُ عَن ذَنبِهِ إِنسٌ وَلَا جَانٌّ",
        translation: "O gün hiçbir insana ve cinne günahı sorulmaz (yüzlerinden tanınırlar).",
        words: [
          { arabic: "فَيَوْمَئِذٍ", transliteration: "fa-yawmaʾiḏin", root: "ي-و-م", pos: "ism", meaning_tr: "o gün", irab: "فَ + يَوْمَ {zarf, mensûb} + إِذٍ {muzâfun ileyh}.", irab_short: "zarf, mensûb" },
          { arabic: "لَّا يُسْأَلُ", transliteration: "lā yusʾalu", root: "س-أ-ل", pos: "fil", meaning_tr: "sorulmaz", irab: "{Muzâri, meçhul, merfû}.", irab_short: "muzâri meçhul, merfû" },
          { arabic: "عَن ذَنبِهِ", transliteration: "ʿan ḏanbihī", root: "ذ-ن-ب", pos: "ism", meaning_tr: "günahı hakkında", irab: "عَنْ {harf-i cer} + ذَنْب {mecrûr, muzâf} + هِ {muzâfun ileyh}.", irab_short: "câr-mecrûr", turkish_bridge: "Zenb (günah, kuyruk = peşinden gelen), müznib bu kökten" },
          { arabic: "إِنسٌ", transliteration: "insun", root: "أ-ن-س", pos: "ism", meaning_tr: "bir insan (bile)", irab: "{Nâib-i fâil}, {merfû}.", irab_short: "nâib-i fâil, merfû" },
          { arabic: "وَلَا", transliteration: "wa-lā", root: null, pos: "harf", meaning_tr: "ve ne de", irab_short: "nefy" },
          { arabic: "جَانٌّ", transliteration: "jānnun", root: "ج-ن-ن", pos: "ism", meaning_tr: "bir cin (bile)", irab: "{Ma'tûf}, {merfû}.", irab_short: "ma'tûf, merfû", balagha_note: "إِنسٌ وَلَا جَانٌّ: nekire + nefy = umûm (genellik). 'Hiçbir insan ve hiçbir cin.' Sorulmama sebebi: 41. ayetteki gibi yüzlerinden tanınırlar." },
        ],
      },
      refrainVerse(40),
      {
        surah: 55, ayah: 41,
        arabic: "يُعْرَفُ الْمُجْرِمُونَ بِسِيمَاهُمْ فَيُؤْخَذُ بِالنَّوَاصِي وَالْأَقْدَامِ",
        translation: "Günahkârlar yüzlerinden (alâmetlerinden) tanınır, perçemlerinden ve ayaklarından tutulur.",
        words: [
          { arabic: "يُعْرَفُ", transliteration: "yuʿrafu", root: "ع-ر-ف", pos: "fil", meaning_tr: "tanınır", irab: "{Muzâri, meçhul, merfû}.", irab_short: "muzâri meçhul, merfû", turkish_bridge: "Ma'rife, irfân, ta'rîf bu kökten" },
          { arabic: "الْمُجْرِمُونَ", transliteration: "al-mujrimūna", root: "ج-ر-م", pos: "ism", meaning_tr: "günahkârlar, suçlular", irab: "{Nâib-i fâil}, {merfû} (وَ ile). IV. bâb ism-i fâil: أَجْرَمَ → مُجْرِم.", irab_short: "nâib-i fâil, merfû", turkish_bridge: "Cürüm, mücrim bu kökten" },
          { arabic: "بِسِيمَاهُمْ", transliteration: "bi-sīmāhum", root: "س-و-م", pos: "ism", meaning_tr: "alâmetlerinden, yüz ifadelerinden", irab: "بِ + سِيمَا {mecrûr, muzâf} + هُمْ. سِيمَا: yüzdeki tanıtıcı işaret.", irab_short: "câr-mecrûr" },
          { arabic: "فَيُؤْخَذُ", transliteration: "fa-yuʾḫaḏu", root: "أ-خ-ذ", pos: "fil", meaning_tr: "tutulur, yakalanır", irab: "{Muzâri, meçhul, merfû}.", irab_short: "muzâri meçhul, merfû" },
          { arabic: "بِالنَّوَاصِي", transliteration: "bi-n-nawāṣī", root: "ن-ص-ي", pos: "ism", meaning_tr: "perçemlerinden, alın saçlarından", irab: "بِ + النَّوَاصِي {mecrûr}. نَاصِيَة: alın saçı, perçem → 'alından yakalama' = aşağılama.", irab_short: "câr-mecrûr", balagha_note: "بِالنَّوَاصِي وَالأَقْدَامِ: baştan ve ayaktan tutulma → vücudun iki ucu. Merkezden uçlara: tam kontrol. Arap kültüründe perçemden tutmak = en büyük aşağılama." },
          { arabic: "وَالْأَقْدَامِ", transliteration: "wa-l-aqdāmi", root: "ق-د-م", pos: "ism", meaning_tr: "ve ayaklarından", irab: "{Ma'tûf}, {mecrûr}. أَقْدَام: قَدَم çoğulu.", irab_short: "ma'tûf, mecrûr", turkish_bridge: "Kadem (ayak), kıdem (öncelik), takdîm bu kökten" },
        ],
      },
      refrainVerse(42),
      {
        surah: 55, ayah: 43,
        arabic: "هَـٰذِهِ جَهَنَّمُ الَّتِي يُكَذِّبُ بِهَا الْمُجْرِمُونَ",
        translation: "İşte günahkârların yalanladığı cehennem budur.",
        words: [
          { arabic: "هَـٰذِهِ", transliteration: "hāḏihī", root: null, pos: "ism", meaning_tr: "işte bu", irab: "İsm-i işâret, {mübtedâ}.", irab_short: "mübtedâ, ism-i işâret" },
          { arabic: "جَهَنَّمُ", transliteration: "jahannamu", root: null, pos: "ism", meaning_tr: "cehennem", irab: "{Haber}, {merfû}. Gayr-i munsarif (alem + ucme).", irab_short: "haber, merfû" },
          { arabic: "الَّتِي", transliteration: "allatī", root: null, pos: "ism", meaning_tr: "o ki", irab: "İsm-i mevsûl, sıfat.", irab_short: "ism-i mevsûl, sıfat" },
          { arabic: "يُكَذِّبُ", transliteration: "yukaḏḏibu", root: "ك-ذ-ب", pos: "fil", meaning_tr: "yalanlar", irab: "{Muzâri, merfû}. II. bâb.", irab_short: "muzâri merfû, II. bâb" },
          { arabic: "بِهَا", transliteration: "bihā", root: null, pos: "harf", meaning_tr: "onu", irab_short: "câr-mecrûr" },
          { arabic: "الْمُجْرِمُونَ", transliteration: "al-mujrimūna", root: "ج-ر-م", pos: "ism", meaning_tr: "günahkârlar", irab: "{Fâil}, {merfû}.", irab_short: "fâil, merfû" },
        ],
      },
      {
        surah: 55, ayah: 44,
        arabic: "يَطُوفُونَ بَيْنَهَا وَبَيْنَ حَمِيمٍ آنٍ",
        translation: "Cehennem ile kaynar su arasında gidip gelirler.",
        words: [
          { arabic: "يَطُوفُونَ", transliteration: "yaṭūfūna", root: "ط-و-ف", pos: "fil", meaning_tr: "dolaşırlar, gidip gelirler", irab: "{Muzâri, merfû}. I. bâb.", irab_short: "muzâri merfû", turkish_bridge: "Tavâf, tûfân (etrafı saran) bu kökten" },
          { arabic: "بَيْنَهَا", transliteration: "baynahā", root: "ب-ي-ن", pos: "ism", meaning_tr: "onun (cehennemin) arasında", irab_short: "zarf" },
          { arabic: "وَبَيْنَ", transliteration: "wa-bayna", root: "ب-ي-ن", pos: "ism", meaning_tr: "ve arasında", irab_short: "zarf" },
          { arabic: "حَمِيمٍ", transliteration: "ḥamīmin", root: "ح-م-م", pattern: "فَعِيل", pos: "ism", meaning_tr: "kaynar su", irab: "{Muzâfun ileyh}, {mecrûr}. حَمِيم: aşırı sıcak su.", irab_short: "muzâfun ileyh, mecrûr", turkish_bridge: "Hammâm (hamam), hamîm (sıcak/yakın dost) bu kökten" },
          { arabic: "آنٍ", transliteration: "ānin", root: "أ-ن-ي", pattern: "فَاعِل", pos: "ism", meaning_tr: "son derece sıcak, kaynama noktasında", irab: "{Sıfat}, {mecrûr}. Nakıs ism-i fâil: أَنَى (olgunlaştı, kaynamaya ulaştı) → آنٍ.", irab_short: "sıfat, mecrûr (nakıs)", balagha_note: "حَمِيمٍ آنٍ: iki sıcaklık kelimesi üst üste → te'kîd. حَمِيم (sıcak su) zaten kaynar iken آنٍ (kaynama noktasının zirvesi) ile pekiştirme." },
        ],
      },
      refrainVerse(45),
    ],
    grammarNotes: [
      {
        title: "İsti'âre: وَرْدَةً كَالدِّهَانِ — Gökyüzünün Dönüşümü",
        explanation:
          "37. ayette çift katmanlı benzetme: Gök → وَرْدَة (gül = renk) → كَالدِّهَان (erimiş yağ = akışkanlık). Gök yırtılınca kırmızı-pembe renklerle kaplanır (renk boyutu) ve katı yapısını kaybedip sıvılaşır gibi olur (kıvam boyutu). Modern nebula fotoğrafları bu tasvire şaşırtıcı benzerlik gösterir.",
        rule: "Çok katmanlı teşbîh: müşebbeh (gök) → müşebbehün bih 1 (gül = renk) → müşebbehün bih 2 (yağ = kıvam). Her katman farklı bir boyut ekler.",
        examples: ["فَكَانَتْ وَرْدَةً كَالدِّهَانِ — 55:37"],
      },
      {
        title: "Meçhul (Edilgen) Fiil Yoğunluğu",
        explanation:
          "Bu bölümde meçhul fiiller yoğun: يُرْسَلُ (gönderilir), لَا يُسْأَلُ (sorulmaz), يُعْرَفُ (tanınır), فَيُؤْخَذُ (tutulur). Fâil (özne) zikredilmez → yapan Allah'tır ama O'nun ismi açıkça söylenmez. Bu (1) azameti vurgular, (2) azabın kaçınılmazlığını hissettirir.",
        rule: "Meçhul fiil: fâili gizleme. Kur'an'da genellikle azap bağlamında tercih edilir — azabın kaynağını değil sonucunu vurgular.",
        examples: ["يُرْسَلُ عَلَيْكُمَا شُوَاظٌ — 55:35", "يُعْرَفُ المُجْرِمُونَ — 55:41"],
      },
    ],
    exercises: [
      generateBalaghaQuiz(
        "S55-B04-Q01",
        "55:37'de göğün وَرْدَةً كَالدِّهَانِ (erimiş yağ gibi bir gül) olmasındaki çift katmanlı benzetmenin iki boyutu nedir?",
        "Renk (gül = kırmızı) + kıvam (yağ = akışkan) — iki farklı duyu boyutu",
        ["Ses + koku — iki farklı duyu", "Büyüklük + ağırlık", "Sıcaklık + ışık"],
        "وَرْدَةً = gül → renk boyutu (kırmızı-pembe). كَالدِّهَانِ = erimiş yağ → kıvam boyutu (akışkan, parlak). Her benzetme katmanı farklı bir duyu kanalını aktive eder."
      ),
      generateBabQuiz(
        "S55-B04-Q02", "انشَقَّتِ",
        "VII. bâb (infi'âl): شَقَّ → اِنشَقَّ (kendiliğinden yarıldı)",
        ["I. bâb: شَقَّ (yardı)", "II. bâb: شَقَّقَ (parçaladı)", "VIII. bâb: اِشتَقَّ (türetti)"],
        "اِنشَقَّ: VII. bâb (infi'âl). ش-ق-ق kökünden. 'Kendi kendine yarıldı' = mutâva'at (fail üzerinde etki). Gökyüzü Allah'ın emriyle yarılır — dışarıdan bir güç gerekmez.",
        ["ش-ق-ق"]
      ),
      generateRootQuiz(
        "S55-B04-Q03", "النَّوَاصِي", "ن-ص-ي",
        ["ن-ص-ر", "ن-ص-ص", "و-ص-ي"],
        "النَّوَاصِي: ن-ص-ي kökünden. نَاصِيَة (alın saçı, perçem) kelimesinin çoğulu. Perçemden tutmak Arap kültüründe en büyük aşağılanma ifadesi.",
        ["ن-ص-ي"]
      ),
      generateFillBlank(
        "S55-B04-Q04",
        "يَطُوفُونَ بَيْنَهَا وَبَيْنَ _____ آنٍ",
        "حَمِيمٍ", ["سَمُومٍ", "سَعِيرٍ", "جَحِيمٍ"],
        "Günahkârlar cehennemle ne arasında gidip gelir?",
        "حَمِيمٍ آنٍ: kaynar + kaynama noktasında. Çift sıcaklık ifadesiyle pekiştirme. ح-م-م kökünden: hammâm (hamam), hamîm (sıcak su).",
        ["ح-م-م"]
      ),
      {
        id: "S55-B04-Q05", type: "single_choice",
        question: "35-45. ayetlerde meçhul (edilgen) fiiller yoğun kullanılmıştır (يُرْسَلُ، يُسْأَلُ، يُعْرَفُ، يُؤْخَذُ). Fâilin gizlenmesinin belâgat hikmeti nedir?",
        options: [
          "Azamet: azabı veren Allah'ın ismini zikretmeden kudretini hissettirme + sonuca odaklanma",
          "Arapça'da azap fiilleri hep meçhul gelir (gramer kuralı)",
          "Fâil bilinmediği için meçhul kullanılmıştır",
          "Sadece âhenk (seci') gereği",
        ],
        correct: 0,
        explanation: "Kur'an'da azap bağlamında meçhul fiil tercihi: (1) Allah'ın azameti — ismi zikredilmese bile O'nun kudretini herkes bilir, (2) sonuca odaklanma — kim yaptı değil, ne olacak önemli, (3) kaçınılmazlık hissi — fâilsiz fiil = engellenemez süreç.",
        relatedRoots: ["ع-ر-ف"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 5 — RAHMÂN 55:46-61 — Birinci Cennet Çifti
  // ═══════════════════════════════════════════════════════════
  {
    id: "S55-B05-rahman",
    title: "Rahmân (46-61) — Birinci Cennet: \"İhsânın Karşılığı\"",
    titleAr: "سُورَةُ الرَّحْمَـٰنِ ٤٦-٦١",
    stage: 2,
    level: 8,
    surah: 55,
    description:
      "Rabbinin makamından korkanlar için iki cennet: dalları salınan ağaçlar, akan iki pınar, çift çift meyveler, atlas döşekler, yakın meyveler. 'İhsânın karşılığı ancak ihsandır.' Surenin en meşhur cümlesi: هَلْ جَزَاءُ الْإِحْسَانِ إِلَّا الْإِحْسَانُ.",
    verses: [
      {
        surah: 55, ayah: 46,
        arabic: "وَلِمَنْ خَافَ مَقَامَ رَبِّهِ جَنَّتَانِ",
        translation: "Rabbinin makamı(nda durmak)tan korkan için iki cennet vardır.",
        words: [
          { arabic: "وَلِمَنْ", transliteration: "wa-li-man", root: null, pos: "harf", meaning_tr: "ve kim ... için", irab: "وَ {isti'nâf} + لِ {harf-i cer} + مَنْ {ism-i mevsûl/şart, mecrûr} = mukaddem haber.", irab_short: "câr-mecrûr = haber mukaddem" },
          { arabic: "خَافَ", transliteration: "ḫāfa", root: "خ-و-ف", pos: "fil", meaning_tr: "korkan, korkan kimse", irab: "{Fiil-i mâzî}, I. bâb. Sıla cümlesi.", irab_short: "fiil-i mâzî, I. bâb", turkish_bridge: "Havf (korku), tahvîf, mehâfet bu kökten" },
          { arabic: "مَقَامَ", transliteration: "maqāma", root: "ق-و-م", pattern: "مَفْعَل", pos: "ism", meaning_tr: "makamını, huzurunu", irab: "{Mef'ûl bih}, {mensûb}, muzâf. مَقَام: (1) Allah'ın huzuru, (2) hesap günü, (3) Allah'ın makamının büyüklüğü.", irab_short: "mef'ûl bih, mensûb" },
          { arabic: "رَبِّهِ", transliteration: "rabbihī", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbinin", irab_short: "muzâfun ileyh, mecrûr" },
          { arabic: "جَنَّتَانِ", transliteration: "jannatāni", root: "ج-ن-ن", pos: "ism", meaning_tr: "iki cennet", irab: "{Mübtedâ muahhar}, {merfû} (elif ile — tesniye). Cennetin ikili olması: surenin ikili yapısıyla uyum.", irab_short: "mübtedâ muahhar, merfû (tesniye)", balagha_note: "جَنَّتَانِ: neden iki? (1) bir dünya nimetleri, bir âhiret lezzetleri, (2) bir maddî, bir manevî, (3) surenin ikili yapısıyla uyum. Her nimet çifttir — tek değil." },
        ],
      },
      refrainVerse(47),
      {
        surah: 55, ayah: 48,
        arabic: "ذَوَاتَا أَفْنَانٍ",
        translation: "(O cennetler) çeşit çeşit dallı ağaçlar sahibidir.",
        words: [
          { arabic: "ذَوَاتَا", transliteration: "ḏawātā", root: null, pos: "ism", meaning_tr: "sahip olan (ikisi, dişil)", irab: "{Sıfat} veya haber, {merfû} (elif ile — tesniye). ذَات'ın tesniyesi: ذَوَاتَا. İki cennetin her biri ağaç sahibidir.", irab_short: "sıfat/haber, merfû (tesniye)" },
          { arabic: "أَفْنَانٍ", transliteration: "afnānin", root: "ف-ن-ن", pattern: "أَفْعَال", pos: "ism", meaning_tr: "dallar, çeşitler", irab: "{Muzâfun ileyh}, {mecrûr}. فَنَن: ince dal. أَفْنَان: (1) dallar, (2) çeşitler/türler.", irab_short: "muzâfun ileyh, mecrûr", turkish_bridge: "Fenn (çeşit, dal → bilim dalı), fünûn (sanatlar) bu kökten" },
        ],
      },
      refrainVerse(49),
      {
        surah: 55, ayah: 50,
        arabic: "فِيهِمَا عَيْنَانِ تَجْرِيَانِ",
        translation: "İkisinde de akan iki pınar vardır.",
        words: [
          { arabic: "فِيهِمَا", transliteration: "fīhimā", root: null, pos: "harf", meaning_tr: "ikisinde de", irab: "Câr-mecrûr. هِمَا: tesniye zamîri → iki cennete döner.", irab_short: "câr-mecrûr (tesniye)" },
          { arabic: "عَيْنَانِ", transliteration: "ʿaynāni", root: "ع-ي-ن", pos: "ism", meaning_tr: "iki pınar", irab: "{Mübtedâ muahhar}, {merfû} (elif ile — tesniye). عَيْن: (1) göz, (2) pınar, (3) casus. Burada: su kaynağı.", irab_short: "mübtedâ, merfû (tesniye)", turkish_bridge: "Ayn (göz/pınar), ayne'l-yakîn (gözle görme kesinliği) bu kökten" },
          { arabic: "تَجْرِيَانِ", transliteration: "tajriyāni", root: "ج-ر-ي", pos: "fil", meaning_tr: "akar (ikisi)", irab: "{Sıfat cümlesi/hâl}, {muzâri merfû} (nûn ile — tesniye).", irab_short: "muzâri merfû, tesniye" },
        ],
      },
      refrainVerse(51),
      {
        surah: 55, ayah: 52,
        arabic: "فِيهِمَا مِن كُلِّ فَاكِهَةٍ زَوْجَانِ",
        translation: "İkisinde de her meyveden iki çeşit vardır.",
        words: [
          { arabic: "فِيهِمَا", transliteration: "fīhimā", root: null, pos: "harf", meaning_tr: "ikisinde de", irab_short: "câr-mecrûr" },
          { arabic: "مِن كُلِّ", transliteration: "min kulli", root: null, pos: "ism", meaning_tr: "her birinden", irab: "مِنْ {ibtidâ/teb'îz} + كُلِّ {mecrûr, muzâf}.", irab_short: "câr-mecrûr" },
          { arabic: "فَاكِهَةٍ", transliteration: "fākihatin", root: "ف-ك-ه", pos: "ism", meaning_tr: "meyvenin", irab: "{Muzâfun ileyh}, {mecrûr}.", irab_short: "muzâfun ileyh, mecrûr" },
          { arabic: "زَوْجَانِ", transliteration: "zawjāni", root: "ز-و-ج", pos: "ism", meaning_tr: "iki çeşit, iki çift", irab: "{Mübtedâ muahhar}, {merfû} (elif ile — tesniye). زَوْج: eş, çift, tür.", irab_short: "mübtedâ, merfû (tesniye)", turkish_bridge: "Zevc (eş), zevce, tezvîc bu kökten", balagha_note: "زَوْجَانِ: her meyveden iki çeşit → bilinen + bilinmeyen. Cennet meyveleri dünya meyveleriyle aynı adı taşır ama tadı farklıdır (Bakara 2:25 ile çapraz okuma)." },
        ],
      },
      refrainVerse(53),
      {
        surah: 55, ayah: 54,
        arabic: "مُتَّكِئِينَ عَلَىٰ فُرُشٍ بَطَائِنُهَا مِنْ إِسْتَبْرَقٍ وَجَنَى الْجَنَّتَيْنِ دَانٍ",
        translation: "Astarları kalın ipekten (istebrak) döşeklere yaslanırlar. İki cennetin meyveleri de (el uzatacak kadar) yakındır.",
        words: [
          { arabic: "مُتَّكِئِينَ", transliteration: "muttakiʾīna", root: "و-ك-أ", pos: "ism", meaning_tr: "yaslanarak, yaslanmış olarak", irab: "{Hâl}, {mensûb} (يَ ile — cem-i müzekker sâlim). VIII. bâb ism-i fâil: وَكَأَ → اِتَّكَأَ → مُتَّكِئ.", irab_short: "hâl, mensûb", turkish_bridge: "İttikâ (yaslanma), mütteki bu kökten" },
          { arabic: "عَلَىٰ فُرُشٍ", transliteration: "ʿalā furušin", root: "ف-ر-ش", pos: "ism", meaning_tr: "döşeklere", irab: "عَلَى + فُرُش {mecrûr}. فِرَاش: döşek, yaygı → فُرُش: çoğulu.", irab_short: "câr-mecrûr", turkish_bridge: "Firaş (döşek), tefriş, ferş bu kökten" },
          { arabic: "بَطَائِنُهَا", transliteration: "baṭāʾinuhā", root: "ب-ط-ن", pos: "ism", meaning_tr: "astarları", irab: "{Mübtedâ}, {merfû}, muzâf. بِطَانَة: iç yüz, astar → بَطَائِن: çoğul.", irab_short: "mübtedâ, merfû", turkish_bridge: "Bâtın (iç), batn (karın), batânet bu kökten", balagha_note: "بَطَائِنُهَا: yalnız 'astar' zikredilmiş — yüzü (zâhiri) zikredilmemiş. Belâgat: astarı bile istebrak (kalın ipek) ise yüzü nasıldır? → hazf ile anlam büyütme." },
          { arabic: "مِنْ إِسْتَبْرَقٍ", transliteration: "min istabraqin", root: null, pos: "ism", meaning_tr: "kalın ipekten (istebrak)", irab: "مِنْ {beyâniye} + إِسْتَبْرَق {mecrûr}. Farsça kökenli (استبرق): kalın, parlak ipek kumaş. Gayr-i munsarif.", irab_short: "câr-mecrûr" },
          { arabic: "وَجَنَى", transliteration: "wa-janā", root: "ج-ن-ي", pos: "ism", meaning_tr: "ve meyveleri, devşirilecekleri", irab: "{Mübtedâ}, {merfû} (mukadder damme), muzâf. جَنَى: devşirilen meyve, taze ürün.", irab_short: "mübtedâ, merfû", turkish_bridge: "Cenî (meyve toplama), cinâyet (el uzatma → suç) bu kökten" },
          { arabic: "الْجَنَّتَيْنِ", transliteration: "al-jannatayni", root: "ج-ن-ن", pos: "ism", meaning_tr: "iki cennetin", irab: "{Muzâfun ileyh}, {mecrûr} (يَ ile — tesniye).", irab_short: "muzâfun ileyh, mecrûr (tesniye)" },
          { arabic: "دَانٍ", transliteration: "dānin", root: "د-ن-و", pattern: "فَاعِل", pos: "ism", meaning_tr: "yakın (el uzatılacak kadar)", irab: "{Haber}, {merfû} (mukadder damme — nakıs ism-i fâil). دَنَا = yaklaştı → دَانٍ = yakın.", irab_short: "haber, merfû (nakıs)", turkish_bridge: "Dünya (en yakın), denî, tedennî bu kökten" },
        ],
      },
      refrainVerse(55),
      {
        surah: 55, ayah: 56,
        arabic: "فِيهِنَّ قَاصِرَاتُ الطَّرْفِ لَمْ يَطْمِثْهُنَّ إِنسٌ قَبْلَهُمْ وَلَا جَانٌّ",
        translation: "Oralarda bakışlarını (yalnız eşlerine) kısmış eşler vardır; onlara daha önce ne bir insan ne de bir cin dokunmuştur.",
        words: [
          { arabic: "فِيهِنَّ", transliteration: "fīhinna", root: null, pos: "harf", meaning_tr: "oralarda (cennetlerde)", irab: "Câr-mecrûr. هِنَّ: dişil çoğul zamîri → cennetlere veya cennet mekânlarına döner.", irab_short: "câr-mecrûr" },
          { arabic: "قَاصِرَاتُ", transliteration: "qāṣirātu", root: "ق-ص-ر", pattern: "فَاعِلَات", pos: "ism", meaning_tr: "kısmış olanlar (dişil çoğul)", irab: "{Mübtedâ muahhar}, {merfû}, muzâf. قَصَرَ = kıstı, sınırladı → قَاصِرَات الطَّرْف = bakışlarını sınırlamış.", irab_short: "mübtedâ, merfû", turkish_bridge: "Kasr (sınırlama/saray), kasîr (kısa) bu kökten" },
          { arabic: "الطَّرْفِ", transliteration: "aṭ-ṭarfi", root: "ط-ر-ف", pos: "ism", meaning_tr: "bakışın", irab: "{Muzâfun ileyh}, {mecrûr}. طَرْف: bakış, göz ucu.", irab_short: "muzâfun ileyh, mecrûr" },
          { arabic: "لَمْ", transliteration: "lam", root: null, pos: "harf", meaning_tr: "...(y)mamış", irab_short: "nefy + cezm" },
          { arabic: "يَطْمِثْهُنَّ", transliteration: "yaṭmiṯhunna", root: "ط-م-ث", pos: "fil", meaning_tr: "dokunmamış, temas etmemiş", irab: "{Muzâri, meczûm} (لَمْ ile). طَمَثَ = dokundu (özellikle ilk temas). هُنَّ = mef'ûl bih.", irab_short: "muzâri meczûm" },
          { arabic: "إِنسٌ", transliteration: "insun", root: "أ-ن-س", pos: "ism", meaning_tr: "bir insan", irab: "{Fâil}, {merfû}.", irab_short: "fâil, merfû" },
          { arabic: "قَبْلَهُمْ", transliteration: "qablahum", root: null, pos: "ism", meaning_tr: "onlardan önce", irab_short: "zarf" },
          { arabic: "وَلَا جَانٌّ", transliteration: "wa-lā jānnun", root: "ج-ن-ن", pos: "ism", meaning_tr: "ve ne de bir cin", irab: "{Ma'tûf}, {merfû}.", irab_short: "ma'tûf, merfû" },
        ],
      },
      refrainVerse(57),
      {
        surah: 55, ayah: 58,
        arabic: "كَأَنَّهُنَّ الْيَاقُوتُ وَالْمَرْجَانُ",
        translation: "Sanki onlar yakut ve mercan gibidirler.",
        words: [
          { arabic: "كَأَنَّهُنَّ", transliteration: "kaʾannahunna", root: null, pos: "harf", meaning_tr: "sanki onlar", irab: "كَأَنَّ {teşbîh edatı, harfü'n-nâsıh} + هُنَّ {ismi, mensûb}.", irab_short: "harf-i teşbîh + ism" },
          { arabic: "الْيَاقُوتُ", transliteration: "al-yāqūtu", root: null, pos: "ism", meaning_tr: "yakut", irab: "{Haber-i ke-enne}, {merfû}. Farsça kökenli: kırmızı değerli taş.", irab_short: "haber, merfû" },
          { arabic: "وَالْمَرْجَانُ", transliteration: "wa-l-marjānu", root: "م-ر-ج-ن", pos: "ism", meaning_tr: "ve mercan", irab: "{Ma'tûf}, {merfû}.", irab_short: "ma'tûf, merfû", balagha_note: "اليَاقُوت وَالمَرْجَان: yakut (kırmızı parlaklık) + mercan (beyaz saflık). Ayet 22'de de الّلُؤْلُؤ وَالمَرْجَان geçmişti — orada denizin ürünü, burada cennetin güzelliği → kelime tekrarı bağlam farkıyla anlam değiştirir." },
        ],
      },
      refrainVerse(59),
      {
        surah: 55, ayah: 60,
        arabic: "هَلْ جَزَاءُ الْإِحْسَانِ إِلَّا الْإِحْسَانُ",
        translation: "İhsânın karşılığı ancak ihsandır.",
        words: [
          { arabic: "هَلْ", transliteration: "hal", root: null, pos: "harf", meaning_tr: "...mı? (hayır!)", irab: "İstifhâm-ı inkârî: cevap 'hayır, başka bir şey yoktur.'", irab_short: "istifhâm-ı inkârî" },
          { arabic: "جَزَاءُ", transliteration: "jazāʾu", root: "ج-ز-ي", pattern: "فَعَال", pos: "ism", meaning_tr: "karşılığı", irab: "{Mübtedâ}, {merfû}, muzâf.", irab_short: "mübtedâ, merfû", turkish_bridge: "Ceza, mücâzât bu kökten" },
          { arabic: "الْإِحْسَانِ", transliteration: "al-iḥsāni", root: "ح-س-ن", pattern: "إِفْعَال", pos: "ism", meaning_tr: "ihsânın (güzel davranışın)", irab: "{Muzâfun ileyh}, {mecrûr}. IV. bâb masdarı: أَحْسَنَ → إِحْسَان.", irab_short: "muzâfun ileyh, mecrûr", turkish_bridge: "Hüsn (güzellik), ihsan, muhsin bu kökten" },
          { arabic: "إِلَّا", transliteration: "illā", root: null, pos: "harf", meaning_tr: "ancak, başka değil", irab_short: "hasr" },
          { arabic: "الْإِحْسَانُ", transliteration: "al-iḥsānu", root: "ح-س-ن", pos: "ism", meaning_tr: "ihsan (güzellikle karşılık)", irab: "{Haber}, {merfû}.", irab_short: "haber, merfû", balagha_note: "هَلْ جَزَاءُ الإِحْسَانِ إِلَّا الإِحْسَانُ: surenin doruk noktası. (1) İstifhâm-ı inkârî: 'başka bir şey var mı?' = 'yok!' (2) Cinas: aynı kelime (الإِحْسَان) iki farklı anlamda: birincisi = kulun ihsanı (ibadet), ikincisi = Allah'ın ihsanı (cennet). (3) İcaz: 5 kelimeyle İslam ahlâkının özeti." },
        ],
      },
      refrainVerse(61),
    ],
    grammarNotes: [
      {
        title: "Hazf ile Anlam Büyütme: بَطَائِنُهَا مِنْ إِسْتَبْرَقٍ",
        explanation:
          "54. ayette döşeklerin yalnız 'astarı' (بَطَائِن = iç yüz) zikredilir ve bunun istebrak (kalın ipek) olduğu söylenir. Peki yüzü (ظَاهِر) neden zikredilmemiş? Çünkü astarı bile bu kadar değerliyse, yüzünü hayal bile edemezsin. Bu hazf (düşürme) sanatıdır: söylenmeyeni söylenenden büyük bırakma.",
        rule: "Hazf ile mübalağa: bilerek eksik bırakılan unsur, zikredilenden daha büyüktür. Dinleyicinin hayal gücünü devreye sokar.",
        examples: ["بَطَائِنُهَا مِنْ إِسْتَبْرَقٍ — astarı bile ipek ise yüzü? (55:54)", "فَتَرْضَى — ne ile? Söylenmemiş → saymakla bitmez (93:5)"],
      },
      {
        title: "Cinas: الإِحْسَان × 2 — Aynı Kelime, Farklı Anlam",
        explanation:
          "60. ayette الإِحْسَان iki kez geçer: (1) جَزَاءُ الإِحْسَانِ = kulun ihsanı (güzel amel, takvâ, ibadet), (2) إِلَّا الإِحْسَانُ = Allah'ın ihsanı (cennet, mükâfat). Aynı kelime farklı faillerle farklı anlam taşır → cinas-ı tâm (tam ses benzerliği + anlam farkı).",
        rule: "Cinas-ı tâm: aynı kelime iki farklı anlamda kullanılır. Lâfız (söyleyiş) aynı, ma'nâ (anlam) farklı.",
        examples: ["هَلْ جَزَاءُ الإِحْسَانِ إِلَّا الإِحْسَانُ — 55:60"],
      },
      {
        title: "Nakıs İsm-i Fâil Örnekleri: دَانٍ",
        explanation:
          "B03'te فَانٍ görmüştük, burada دَانٍ (yakın) aynı kalıba örnektir. د-ن-و kökünden: دَنَا (yaklaştı) → دَانٍ (yakın olan). Aslı دَانِيٌ ama ref' ve cer'de ي düşer + tenvin eklenir. Cennet meyvelerinin el uzatılacak kadar yakın olduğunu bildirir.",
        rule: "Nakıs ism-i fâil (son harfi ي): مُنْتَهٍ, قَاضٍ, فَانٍ, دَانٍ, آنٍ — hepsi aynı i'rab kuralına uyar.",
        examples: ["دَانٍ = yakın (55:54)", "فَانٍ = fânî (55:26)", "آنٍ = kaynar (55:44)"],
      },
    ],
    exercises: [
      generateBalaghaQuiz(
        "S55-B05-Q01",
        "55:60 هَلْ جَزَاءُ الإِحْسَانِ إِلَّا الإِحْسَانُ — burada الإِحْسَان kelimesinin iki kez kullanılması hangi sanattır?",
        "Cinas — aynı kelime iki farklı anlamda: kulun ihsanı → Allah'ın ihsanı",
        ["Tikrâr — aynı anlamda tekrar", "Tıbâk — zıtlık", "Îcâz — kısaltma"],
        "Cinas-ı tâm: الإِحْسَان (1) = kulun güzel ameli, الإِحْسَان (2) = Allah'ın cennet mükâfatı. Aynı kelime, farklı fail, farklı anlam. Surenin belâgat zirvesi."
      ),
      generateRootQuiz(
        "S55-B05-Q02", "قَاصِرَاتُ", "ق-ص-ر",
        ["ق-ص-ص", "ق-ص-د", "ق-ص-ف"],
        "قَاصِرَاتُ: ق-ص-ر kökünden. İsm-i fâil dişil çoğul. قَصَرَ = kıstı, sınırladı → قَاصِرَاتُ الطَّرْفِ = bakışlarını (yalnız eşlerine) kısmış. Kasr (sınırlama, saray) aynı kökten.",
        ["ق-ص-ر"]
      ),
      generateIrabQuiz(
        "S55-B05-Q03", "جَنَّتَانِ",
        "Mübtedâ muahhar, merfû (elif ile — tesniye formu)",
        ["Mef'ûl bih, mensûb (يَ ile)", "Haber, merfû", "Fâil, merfû"],
        "جَنَّتَانِ: mübtedâ muahhar, merfû. Haber: وَلِمَنْ خَافَ (mukaddem). Tesniye ref' eki: -َانِ (elif + nûn). Cennetin tesniye gelmesi surenin ikili yapısıyla uyumlu.",
        ["ج-ن-ن"]
      ),
      generateFillBlank(
        "S55-B05-Q04",
        "هَلْ جَزَاءُ _____ إِلَّا الْإِحْسَانُ",
        "الْإِحْسَانِ", ["الْإِيمَانِ", "الْإِسْلَامِ", "الْعِبَادَةِ"],
        "İhsânın karşılığı nedir?",
        "هَلْ جَزَاءُ الإِحْسَانِ إِلَّا الإِحْسَانُ: güzel davranışın karşılığı ancak güzellikle olur. İstifhâm-ı inkârî: 'başka bir şey var mı?' = yok.",
        ["ح-س-ن"]
      ),
      generateWaznQuiz(
        "S55-B05-Q05", "إِحْسَان",
        "إِفْعَال (IV. bâb masdarı) — ح-س-ن: أَحْسَنَ → إِحْسَان",
        ["فُعْلَان (sıfat)", "اِفْتِعَال (VIII. bâb masdarı)", "تَفْعِيل (II. bâb masdarı)"],
        "إِحْسَان: إِفْعَال kalıbı = IV. bâb masdarı. ح-س-ن kökünden: حَسُنَ (güzel oldu) → أَحْسَنَ (güzel yaptı) → إِحْسَان (güzel yapma). Hüsn, ihsan, muhsin hep bu kökten.",
        ["ح-س-ن"]
      ),
      {
        id: "S55-B05-Q06", type: "single_choice",
        question: "55:54'te döşeklerin yalnız 'astarı' (بَطَائِن) zikredilip yüzünün (ظَاهِر) zikredilmemesi hangi belâgat tekniğidir?",
        options: [
          "Hazf (düşürme) ile mübalağa: astarı bile ipek ise yüzünü hayal et!",
          "Îcâz (kısaltma): sadece kelime tasarrufu",
          "Kinâye: astardan kasıt gerçekte yüzdür",
          "İltifât: bakış açısı değişikliği",
        ],
        correct: 0,
        explanation: "Hazf ile mübalağa: söylenmeyeni söylenenden büyük bırakma. Astarı bile istebrak (kalın ipek) olan döşeğin yüzü ne olabilir? Cevap verilmez → dinleyicinin hayal gücü devreye girer → etki katlanır.",
        relatedRoots: ["ب-ط-ن"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 6 — RAHMÂN 55:62-78 — İkinci Cennet Çifti ve Kapanış
  // ═══════════════════════════════════════════════════════════
  {
    id: "S55-B06-rahman",
    title: "Rahmân (62-78) — İkinci Cennet ve Tebâreke",
    titleAr: "سُورَةُ الرَّحْمَـٰنِ ٦٢-٧٨",
    stage: 2,
    level: 8,
    surah: 55,
    description:
      "İkinci cennet çifti: koyu yeşil bahçeler, fışkıran pınarlar, meyve-hurma-nar, yeşil yastıklara ve güzel döşemelere yaslanma. Son ayet: تَبَارَكَ اسْمُ رَبِّكَ ذِي الْجَلَالِ وَالْإِكْرَامِ — Mülk suresiyle aynı fiille kapanış.",
    verses: [
      {
        surah: 55, ayah: 62,
        arabic: "وَمِن دُونِهِمَا جَنَّتَانِ",
        translation: "O ikisinin (birinci çiftin) berisinde iki cennet daha vardır.",
        words: [
          { arabic: "وَمِن", transliteration: "wa-min", root: null, pos: "harf", meaning_tr: "ve ...den", irab_short: "harf-i cer" },
          { arabic: "دُونِهِمَا", transliteration: "dūnihimā", root: "د-و-ن", pos: "ism", meaning_tr: "ikisinin berisinde, altında", irab: "دُونِ {zarf, mecrûr (مِنْ ile), muzâf} + هِمَا {muzâfun ileyh, tesniye zamîri → birinci cennet çiftine döner}.", irab_short: "zarf, mecrûr" },
          { arabic: "جَنَّتَانِ", transliteration: "jannatāni", root: "ج-ن-ن", pos: "ism", meaning_tr: "iki cennet (daha)", irab: "{Mübtedâ muahhar}, {merfû} (tesniye).", irab_short: "mübtedâ, merfû (tesniye)", balagha_note: "مِنْ دُونِهِمَا: birinci çiftin 'altında/berisinde' = derecelendirme. Cennet tek düzey değil — korkunun derecesine göre cennet de derecelenir. Mukâbele: birinci çift (46-61) ↔ ikinci çift (62-78)." },
        ],
      },
      refrainVerse(63),
      {
        surah: 55, ayah: 64,
        arabic: "مُدْهَامَّتَانِ",
        translation: "(O cennetler) koyu yeşildir (sulaktan kararacak kadar).",
        words: [
          { arabic: "مُدْهَامَّتَانِ", transliteration: "mudhāmmatāni", root: "د-ه-م", pos: "ism", meaning_tr: "koyu yeşil, yoğun yeşillikte (ikisi)", irab: "{Sıfat/haber}, {merfû} (tesniye). IX. bâb (اِفْعَلَّ, renk/kusur): اِدْهَامَّ = koyu yeşile çaldı. Bol su → yoğun bitki örtüsü → neredeyse siyaha çalan yeşil.", irab_short: "sıfat/haber, merfû (tesniye)", balagha_note: "مُدْهَامَّتَانِ: tek kelimelik ayet — Kur'an'ın en kısa ayetlerinden. IX. bâb (اِفْعَلَّ): renk/şekil bildiren özel kalıp. Koyu yeşil = bolluğun rengi." },
        ],
      },
      refrainVerse(65),
      {
        surah: 55, ayah: 66,
        arabic: "فِيهِمَا عَيْنَانِ نَضَّاخَتَانِ",
        translation: "İkisinde de fışkıran iki pınar vardır.",
        words: [
          { arabic: "فِيهِمَا", transliteration: "fīhimā", root: null, pos: "harf", meaning_tr: "ikisinde de", irab_short: "câr-mecrûr (tesniye)" },
          { arabic: "عَيْنَانِ", transliteration: "ʿaynāni", root: "ع-ي-ن", pos: "ism", meaning_tr: "iki pınar", irab: "{Mübtedâ muahhar}, {merfû} (tesniye).", irab_short: "mübtedâ, merfû" },
          { arabic: "نَضَّاخَتَانِ", transliteration: "naḍḍāḫatāni", root: "ن-ض-خ", pattern: "فَعَّالَة", pos: "ism", meaning_tr: "fışkıran, coşkun akan (ikisi)", irab: "{Sıfat}, {merfû} (tesniye). نَضَخَ: fışkırdı. فَعَّال: mübalağa → sürekli ve güçlü fışkırma.", irab_short: "sıfat, merfû (tesniye)", balagha_note: "عَيْنَانِ تَجْرِيَانِ (50) ↔ عَيْنَانِ نَضَّاخَتَانِ (66): birinci cennetin pınarları 'akar' (sakin), ikincinin pınarları 'fışkırır' (coşkun). Farklı fiil = farklı nitelik." },
        ],
      },
      refrainVerse(67),
      {
        surah: 55, ayah: 68,
        arabic: "فِيهِمَا فَاكِهَةٌ وَنَخْلٌ وَرُمَّانٌ",
        translation: "İkisinde de meyve, hurma ve nar vardır.",
        words: [
          { arabic: "فِيهِمَا", transliteration: "fīhimā", root: null, pos: "harf", meaning_tr: "ikisinde de", irab_short: "câr-mecrûr" },
          { arabic: "فَاكِهَةٌ", transliteration: "fākihatun", root: "ف-ك-ه", pos: "ism", meaning_tr: "meyve(ler)", irab: "{Mübtedâ muahhar}, {merfû}.", irab_short: "mübtedâ, merfû" },
          { arabic: "وَنَخْلٌ", transliteration: "wa-naḫlun", root: "ن-خ-ل", pos: "ism", meaning_tr: "ve hurma", irab: "{Ma'tûf}, {merfû}.", irab_short: "ma'tûf, merfû" },
          { arabic: "وَرُمَّانٌ", transliteration: "wa-rummānun", root: "ر-م-م", pos: "ism", meaning_tr: "ve nar", irab: "{Ma'tûf}, {merfû}.", irab_short: "ma'tûf, merfû", balagha_note: "Hurma ve nar ayrıca zikredilmiş — meyve kategorisinin 'en seçkinleri.' Atıf-ı hâss 'alâ 'âmm: genel (fâkihe) zikredildikten sonra özel (nahl, rummân) ayrıca sayılır → onların üstünlüğünü vurgular." },
        ],
      },
      refrainVerse(69),
      {
        surah: 55, ayah: 70,
        arabic: "فِيهِنَّ خَيْرَاتٌ حِسَانٌ",
        translation: "Oralarda güzel huylu, güzel yüzlü eşler vardır.",
        words: [
          { arabic: "فِيهِنَّ", transliteration: "fīhinna", root: null, pos: "harf", meaning_tr: "oralarda", irab_short: "câr-mecrûr" },
          { arabic: "خَيْرَاتٌ", transliteration: "ḫayrātun", root: "خ-ي-ر", pos: "ism", meaning_tr: "hayırlı, iyi huylu (kadınlar)", irab: "{Mübtedâ muahhar}, {merfû}. خَيْرَة: خَيْر'in müennesi. Kısaltılmış: خَيِّرَات → خَيْرَات.", irab_short: "mübtedâ, merfû", turkish_bridge: "Hayır, hayrât, hayırlı bu kökten" },
          { arabic: "حِسَانٌ", transliteration: "ḥisānun", root: "ح-س-ن", pattern: "فِعَال", pos: "ism", meaning_tr: "güzel (çoğul)", irab: "{Sıfat}, {merfû}. حَسَنَة → حِسَان: güzel (cem').", irab_short: "sıfat, merfû" },
        ],
      },
      refrainVerse(71),
      {
        surah: 55, ayah: 72,
        arabic: "حُورٌ مَّقْصُورَاتٌ فِي الْخِيَامِ",
        translation: "Çadırlarda korunan hûrîler.",
        words: [
          { arabic: "حُورٌ", transliteration: "ḥūrun", root: "ح-و-ر", pos: "ism", meaning_tr: "hûrîler (iri gözlü, beyaz tenli)", irab: "{Bedel} veya mübtedâ, {merfû}. حَوْرَاء'ın çoğulu: gözünün beyazı çok beyaz, siyahı çok siyah → büyük kontrast.", irab_short: "bedel/mübtedâ, merfû", turkish_bridge: "Havârî (beyaz giyenler), muhâvere bu kökten" },
          { arabic: "مَّقْصُورَاتٌ", transliteration: "maqṣūrātun", root: "ق-ص-ر", pos: "ism", meaning_tr: "korunan, muhafaza edilen", irab: "{Sıfat}, {merfû}. I. bâb ism-i mef'ûl: قَصَرَ → مَقْصُور = sınırlandırılmış, korunan.", irab_short: "sıfat, merfû", balagha_note: "B05'te قَاصِرَاتُ الطَّرْفِ (ism-i fâil: kendileri bakışlarını kısmış) ↔ burada مَقْصُورَاتٌ (ism-i mef'ûl: korunmuş/saklanmış). Aktif ↔ pasif: iki farklı anlatım perspektifi." },
          { arabic: "فِي الْخِيَامِ", transliteration: "fi-l-ḫiyāmi", root: "خ-ي-م", pos: "ism", meaning_tr: "çadırlarda", irab: "فِي + الخِيَام {mecrûr}. خَيْمَة: çadır → خِيَام: çoğul.", irab_short: "câr-mecrûr", turkish_bridge: "Hayme (çadır), muhayyer bu kökten" },
        ],
      },
      refrainVerse(73),
      {
        surah: 55, ayah: 74,
        arabic: "لَمْ يَطْمِثْهُنَّ إِنسٌ قَبْلَهُمْ وَلَا جَانٌّ",
        translation: "Onlara daha önce ne bir insan ne de bir cin dokunmuştur.",
        words: [
          { arabic: "لَمْ يَطْمِثْهُنَّ", transliteration: "lam yaṭmiṯhunna", root: "ط-م-ث", pos: "fil", meaning_tr: "dokunmamış", irab: "{Muzâri, meczûm}. 56. ayetle aynı — ikinci cennet çifti için tekrar.", irab_short: "muzâri meczûm" },
          { arabic: "إِنسٌ", transliteration: "insun", root: "أ-ن-س", pos: "ism", meaning_tr: "bir insan", irab_short: "fâil, merfû" },
          { arabic: "قَبْلَهُمْ", transliteration: "qablahum", root: null, pos: "ism", meaning_tr: "onlardan önce", irab_short: "zarf" },
          { arabic: "وَلَا جَانٌّ", transliteration: "wa-lā jānnun", root: "ج-ن-ن", pos: "ism", meaning_tr: "ve ne de bir cin", irab_short: "ma'tûf, merfû" },
        ],
      },
      refrainVerse(75),
      {
        surah: 55, ayah: 76,
        arabic: "مُتَّكِئِينَ عَلَىٰ رَفْرَفٍ خُضْرٍ وَعَبْقَرِيٍّ حِسَانٍ",
        translation: "Yeşil yastıklara ve güzel döşemelere (Abkarî kumaşlara) yaslanırlar.",
        words: [
          { arabic: "مُتَّكِئِينَ", transliteration: "muttakiʾīna", root: "و-ك-أ", pos: "ism", meaning_tr: "yaslanarak", irab: "{Hâl}, {mensûb}.", irab_short: "hâl, mensûb" },
          { arabic: "عَلَىٰ", transliteration: "ʿalā", root: null, pos: "harf", meaning_tr: "üzerine", irab_short: "harf-i cer" },
          { arabic: "رَفْرَفٍ", transliteration: "rafrfin", root: "ر-ف-ر-ف", pos: "ism", meaning_tr: "yastıklar, minderler, yeşil örtüler", irab: "{Mecrûr}. رَفْرَف: (1) ince yastık/minder, (2) bahçe kenarı, (3) yeşil örtü.", irab_short: "mecrûr" },
          { arabic: "خُضْرٍ", transliteration: "ḫuḍrin", root: "خ-ض-ر", pos: "ism", meaning_tr: "yeşil", irab: "{Sıfat}, {mecrûr}. أَخْضَر → خُضْر (cem').", irab_short: "sıfat, mecrûr", turkish_bridge: "Hadrâ (yeşil), hudâr bu kökten" },
          { arabic: "وَعَبْقَرِيٍّ", transliteration: "wa-ʿabqariyyin", root: "ع-ب-ق-ر", pos: "ism", meaning_tr: "ve Abkarî (harika döşeme/kumaş)", irab: "{Ma'tûf}, {mecrûr}. عَبْقَرِيّ: efsanevî Abkar diyarına nisbet → 'olağanüstü güzellikte.' Nâdirattan.", irab_short: "ma'tûf, mecrûr", balagha_note: "عَبْقَرِيّ: 'Abkar' efsanevî bir diyar — her güzel şey oraya nisbet edilir. 'Dahî' anlamında kullanılan 'abkari' de bu kökten. Cennet kumaşları hayal gücünü aşar → efsane referansı." },
          { arabic: "حِسَانٍ", transliteration: "ḥisānin", root: "ح-س-ن", pos: "ism", meaning_tr: "güzel (çoğul)", irab: "{Sıfat}, {mecrûr}.", irab_short: "sıfat, mecrûr" },
        ],
      },
      refrainVerse(77),
      {
        surah: 55, ayah: 78,
        arabic: "تَبَارَكَ اسْمُ رَبِّكَ ذِي الْجَلَالِ وَالْإِكْرَامِ",
        translation: "Celâl ve ikram sahibi Rabbinin adı ne yücedir!",
        words: [
          { arabic: "تَبَارَكَ", transliteration: "tabāraka", root: "ب-ر-ك", pattern: "تَفَاعَلَ", pos: "fil", meaning_tr: "ne yücedir, bereket kaynağıdır", irab: "{Fiil-i mâzî}, VI. bâb. Mülk 67:1 ile aynı fiil — iki sure تَبَارَكَ ile ilişkilendirilir.", irab_short: "fiil-i mâzî, VI. bâb", turkish_bridge: "Bereket, mübârek, tebrîk bu kökten", balagha_note: "تَبَارَكَ: Mülk 67:1 → الَّذِي بِيَدِهِ المُلْكُ, Rahmân 55:78 → اسْمُ رَبِّكَ ذِي الجَلَالِ. İki surenin 'çerçeve fiili.' Rahmân'da son ayette gelir = surenin mührü." },
          { arabic: "اسْمُ", transliteration: "ismu", root: "س-م-و", pos: "ism", meaning_tr: "adı", irab: "{Fâil}, {merfû}, muzâf.", irab_short: "fâil, merfû" },
          { arabic: "رَبِّكَ", transliteration: "rabbika", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbinin", irab: "{Muzâfun ileyh}, {mecrûr}.", irab_short: "muzâfun ileyh, mecrûr" },
          { arabic: "ذِي", transliteration: "ḏī", root: null, pos: "ism", meaning_tr: "sahip olan", irab: "{Sıfat} (رَبِّكَ için), {mecrûr} (يَ ile — esmâ-i hamse cer formu). Ayet 27'de ذُو (merfû) idi, burada ذِي (mecrûr).", irab_short: "sıfat, mecrûr (esmâ-i hamse)", balagha_note: "ذِي ↔ ذُو: ayet 27'de ذُو الجَلَالِ (merfû — وَجْهُ'nun sıfatı), burada ذِي الجَلَالِ (mecrûr — رَبِّكَ'nin sıfatı). Aynı terkip, farklı i'rab = farklı tamlama ilişkisi." },
          { arabic: "الْجَلَالِ", transliteration: "al-jalāli", root: "ج-ل-ل", pos: "ism", meaning_tr: "celâlin", irab_short: "muzâfun ileyh, mecrûr" },
          { arabic: "وَالْإِكْرَامِ", transliteration: "wa-l-ikrāmi", root: "ك-ر-م", pos: "ism", meaning_tr: "ve ikramın", irab_short: "ma'tûf, mecrûr" },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "Mukâbele: Birinci Cennet (46-61) ↔ İkinci Cennet (62-78)",
        explanation:
          "İki cennet çifti simetrik ama derecelendirilmiş olarak tasvir edilir. Paralel unsurlar: عَيْنَانِ تَجْرِيَانِ (50, akan) ↔ عَيْنَانِ نَضَّاخَتَانِ (66, fışkıran) // مِن كُلِّ فَاكِهَةٍ زَوْجَانِ (52) ↔ فَاكِهَةٌ وَنَخْلٌ وَرُمَّانٌ (68) // فُرُشٍ بَطَائِنُهَا مِنْ إِسْتَبْرَقٍ (54) ↔ رَفْرَفٍ خُضْرٍ وَعَبْقَرِيٍّ (76). Her öğe karşılıklı ama detay ve nitelik farklı → cennet dereceleri.",
        rule: "Mukâbele (genişletilmiş simetri): iki pasaj birbiriyle karşılıklı unsurlar taşır ama birebir aynı değildir — derecelendirme ve farklılık da işin parçasıdır.",
        examples: [
          "عَيْنَانِ تَجْرِيَانِ (50) ↔ عَيْنَانِ نَضَّاخَتَانِ (66)",
          "قَاصِرَاتُ الطَّرْفِ (56, aktif) ↔ مَقْصُورَاتٌ (72, pasif)",
          "فُرُش (54, döşek) ↔ رَفْرَف (76, minder)",
        ],
      },
      {
        title: "IX. Bâb (اِفْعَلَّ): مُدْهَامَّتَانِ",
        explanation:
          "مُدْهَامَّتَانِ: IX. bâb (اِفْعَلَّ → يَفْعَلُّ) ism-i fâil müennes tesniye. IX. bâb neredeyse yalnızca renk ve fiziksel kusur fiilleri için kullanılır: اِحْمَرَّ (kızardı), اِبْيَضَّ (beyazladı), اِسْوَدَّ (karardı), اِدْهَامَّ (koyu yeşile çaldı). Kur'an'da nadir: burada 'bol sudan yeşilliği koyulaşmış' cennet bahçeleri.",
        rule: "IX. bâb (اِفْعَلَّ): hemen hemen yalnız renk (اِحْمَرَّ) ve fiziksel nitelik (اِعْوَرَّ = tek gözlü oldu) fiilleri. Geçişsiz (lâzım).",
        examples: ["اِدْهَامَّ → مُدْهَامَّتَانِ = koyu yeşile çalmış (55:64)", "اِبْيَضَّتْ عَيْنَاهُ = gözleri beyazladı (Yûsuf 12:84)"],
      },
      {
        title: "Esmâ-i Hamse: ذُو / ذِي / ذَا",
        explanation:
          "ذُو الجَلَالِ (ayet 27, merfû) ↔ ذِي الجَلَالِ (ayet 78, mecrûr). Esmâ-i hamse (beş isim: أَب, أَخ, حَم, فُو, ذُو) i'rablarını harflerle gösterir: ref' → وَاو (ذُو), nasb → أَلِف (ذَا), cer → يَاء (ذِي). Normal isimler gibi hareke almaz.",
        rule: "ذُو (merfû) / ذَا (mensûb) / ذِي (mecrûr). Muzâf olarak kullanılır: ذُو عِلْمٍ = ilim sahibi.",
        examples: ["ذُو الجَلَالِ — 55:27 (merfû: وَجْهُ'nun sıfatı)", "ذِي الجَلَالِ — 55:78 (mecrûr: رَبِّكَ'nin sıfatı)", "ذَا النُّونِ — 21:87 (mensûb: balık sahibi = Yûnus)"],
      },
    ],
    exercises: [
      generateBalaghaQuiz(
        "S55-B06-Q01",
        "Birinci cennette عَيْنَانِ تَجْرِيَانِ (50), ikincide عَيْنَانِ نَضَّاخَتَانِ (66). Bu iki farklı nitelendirme hangi sanatı oluşturur?",
        "Mukâbele — iki cennet çifti simetrik ama derecelendirilmiş",
        ["Tikrâr — aynı anlamda tekrar", "Tıbâk — zıtlık", "Teşbîh — benzetme"],
        "Mukâbele: iki cennet çifti birbiriyle karşılıklı unsurlar taşır. تَجْرِيَانِ (akan, sakin) ↔ نَضَّاخَتَانِ (fışkıran, coşkun). Aynı yapı (iki pınar) ama farklı nitelik → cennet derecelendirmesi."
      ),
      generateBabQuiz(
        "S55-B06-Q02", "مُدْهَامَّتَانِ",
        "IX. bâb (اِفْعَلَّ): renk/nitelik fiili — 'koyu yeşile çalmış'",
        ["VII. bâb (اِنفعَلَ)", "VIII. bâb (اِفتعَلَ)", "II. bâb (فَعَّلَ)"],
        "مُدْهَامَّتَانِ: IX. bâb (اِفْعَلَّ → يَفْعَلُّ). د-ه-م kökünden: koyu renge çalmak. IX. bâb hemen yalnızca renk ve fiziksel nitelik fiilleri için kullanılır.",
        ["د-ه-م"]
      ),
      generateIrabQuiz(
        "S55-B06-Q03", "ذِي (55:78)",
        "Sıfat, mecrûr (esmâ-i hamse cer formu: ي ile)",
        ["Sıfat, merfû (esmâ-i hamse ref' formu: و ile)", "Muzâfun ileyh, mecrûr", "Hâl, mensûb (esmâ-i hamse nasb: ا ile)"],
        "ذِي: esmâ-i hamse cer formu. ذُو (ref'), ذَا (nasb), ذِي (cer). 78. ayette رَبِّكَ'nin sıfatı olarak mecrûr gelmiş. Karş. 27. ayet: ذُو الجَلَالِ (merfû).",
        ["ج-ل-ل"]
      ),
      generateRootQuiz(
        "S55-B06-Q04", "تَبَارَكَ", "ب-ر-ك",
        ["ب-ر-أ", "ت-ر-ك", "ب-ر-ز"],
        "تَبَارَكَ: ب-ر-ك kökünden. VI. bâb (تَفَاعَلَ). Yalnız Allah için, yalnız mâzî formda kullanılır. Bereket, mübârek, tebrîk bu kökten. Mülk 67:1 ile Rahmân 55:78 = aynı fiil → iki sureyi bağlayan çerçeve.",
        ["ب-ر-ك"]
      ),
      generateFillBlank(
        "S55-B06-Q05",
        "تَبَارَكَ اسْمُ رَبِّكَ ذِي _____ وَالْإِكْرَامِ",
        "الْجَلَالِ", ["الْجَمَالِ", "الْكَمَالِ", "الْعَظَمَةِ"],
        "Son ayet nasıl tamamlanır?",
        "ذِي الجَلَالِ وَالإِكْرَامِ: 27. ayetteki ذُو الجَلَالِ وَالإِكْرَامِ ile aynı terkip, farklı i'rab. Surenin açılışı (الرَّحْمَـٰنُ) ve kapanışı (تَبَارَكَ) birbirini tamamlar.",
        ["ج-ل-ل"]
      ),
      {
        id: "S55-B06-Q06", type: "single_choice",
        question: "55:56'da قَاصِرَاتُ الطَّرْفِ (ism-i fâil = bakışlarını kısmış), 55:72'de مَقْصُورَاتٌ (ism-i mef'ûl = korunmuş). Bu fark neyi ifade eder?",
        options: [
          "Birincisi aktif (kendileri yapıyor), ikincisi pasif (korunuyorlar) — iki farklı anlatım perspektifi",
          "İkisi aynı anlama gelir, sadece üslûp çeşitliliği",
          "Birincisi cennet, ikincisi dünya",
          "Birincisi cin, ikincisi insan",
        ],
        correct: 0,
        explanation: "قَاصِرَات (ism-i fâil = aktif): kendi bakışlarını kısmışlar. مَقْصُورَات (ism-i mef'ûl = pasif): korunmuşlar, saklanmışlar. Aynı kök (ق-ص-ر), aktif vs pasif form = farklı perspektif. İlk cennet ehli kendi iradeleriyle, ikincisi koruma altında.",
        relatedRoots: ["ق-ص-ر"],
      },
      {
        id: "S55-B06-Q07", type: "single_choice",
        question: "Rahmân suresi (55:1) الرَّحْمَـٰنُ ile başlar, (55:78) تَبَارَكَ اسْمُ رَبِّكَ ile biter. Mülk suresi (67:1) de تَبَارَكَ الَّذِي بِيَدِهِ المُلْكُ ile başlar. Bu bağlantının anlamı nedir?",
        options: [
          "تَبَارَكَ iki sureyi bağlayan 'çerçeve fiili' — Rahmân nimetten yüceliğe, Mülk yücelikten hâkimiyete geçer",
          "Sadece tesadüfî benzerlik",
          "تَبَارَكَ her surede geçen standart bir ifade",
          "İki sure aslında tek suredir",
        ],
        correct: 0,
        explanation: "تَبَارَكَ Kur'an'da yalnız 9 yerde geçer, hep yücelik bağlamında. Rahmân'ın son ayeti + Mülk'ün ilk ayeti = tematik köprü. Rahmân: nimet listesi → تَبَارَكَ (yücelik mührü). Mülk: تَبَارَكَ → hâkimiyet.",
        relatedRoots: ["ب-ر-ك"],
      },
    ],
  },
];

export default rahmanLessons;
