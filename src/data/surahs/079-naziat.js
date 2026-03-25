// ═══════════════════════════════════════════════════════════
// SURE79 SURESİ (79) — Pipeline Üretimi
// 2026-03-25: 4 bölüm, 46 ayet tam kapsam
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

const naziatLessons = [
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 1 — SURE79 79:1-16
  // ═══════════════════════════════════════════════════════════
  {
    id: "S79-B01-naziat",
    title: "Sure79 (1-16)",
    titleAr: "سُورَة النازعات 1-16",
    stage: 2,
    level: 8,
    surah: 79,
    description: "Kıyamet gününün dehşetli sahneleri ve meleklerin görevleri hakkında yemin ayetleri, ardından Hz. Musa'nın kıssasına giriş.",
    verses: [
      {
        surah: 79, ayah: 1,
        arabic: "وَٱلنَّـٰزِعَٰتِ غَرۡقٗا",
        translation: "Canları boğarcasına şiddetle çekip alanlara and olsun,",
        words: [
          { arabic: "وَٱلنَّـٰزِعَٰتِ", transliteration: "ven-nâzi'âti", root: "ن-ز-ع", pattern: "فَاعِلَات", pos: "ism", meaning_tr: "çekip çıkaranlar, koparanlar", irab: "{Câr-mecrûr} mahalli cerrde. Kasem edatı و ve {müksemün bih} olan جمع müennes sâlim صيغesi.", irab_short: "müksemün bih, cerrde", turkish_bridge: "Nez', intizâ' bu kökten", balagha_note: "Kasemle başlayan üslup, meleklerin vazifelerine görkemli bir vurgu yapıyor" },
          { arabic: "غَرۡقٗا", transliteration: "garkan", root: "غ-ر-ق", pattern: "فَعْل", pos: "ism", meaning_tr: "boğulma, tamamen batma", irab: "{Mef'ûl mutlak} veya {hâl} manasında masdar, mensûb.", irab_short: "mef'ûl mutlak, mensûb", turkish_bridge: "Gark olmak bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 2,
        arabic: "وَٱلنَّـٰشِطَٰتِ نَشۡطٗا",
        translation: "Canları kolaylıkla alanlara and olsun,",
        words: [
          { arabic: "وَٱلنَّـٰشِطَٰتِ", transliteration: "ven-nâşitâti", root: "ن-ش-ط", pattern: "فَاعِلَات", pos: "ism", meaning_tr: "yumuşakça çekenler, çözümleyenler", irab: "{Câr-mecrûr} mahalli cerrde. Kasem edatı و ve {müksemün bih} olan جمع müennes sâlim.", irab_short: "müksemün bih, cerrde", turkish_bridge: "Neşât, münşit bu kökten", balagha_note: "Önceki ayetle tezat, sert ve yumuşak çekişin karşıtlığı" },
          { arabic: "نَشۡطٗا", transliteration: "neştan", root: "ن-ش-ط", pattern: "فَعْل", pos: "ism", meaning_tr: "çözme, gevşek çekme", irab: "{Mef'ûl mutlak} manasında masdar, mensûb.", irab_short: "mef'ûl mutlak, mensûb", turkish_bridge: "Neşât, münşit bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 3,
        arabic: "وَٱلسَّـٰبِحَٰتِ سَبۡحٗا",
        translation: "Yüzüp yüzüp gidenlere and olsun,",
        words: [
          { arabic: "وَٱلسَّـٰبِحَٰتِ", transliteration: "ves-sâbihâti", root: "س-ب-ح", pattern: "فَاعِلَات", pos: "ism", meaning_tr: "yüzenler, süratle gidenler", irab: "{Câr-mecrûr} mahalli cerrde. Kasem edatı و ve {müksemün bih} olan جمع müennes sâlim.", irab_short: "müksemün bih, cerrde", turkish_bridge: "Subh, tesbih, sibâhat bu kökten", balagha_note: null },
          { arabic: "سَبۡحٗا", transliteration: "sebhan", root: "س-ب-ح", pattern: "فَعْل", pos: "ism", meaning_tr: "yüzme, süratli hareket", irab: "{Mef'ûl mutlak} manasında masdar, mensûb.", irab_short: "mef'ûl mutlak, mensûb", turkish_bridge: "Subh, tesbih, sibâhat bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 4,
        arabic: "فَٱلسَّـٰبِقَٰتِ سَبۡقٗا",
        translation: "Yarıştıkça yarışan ve işleri yöneten meleklere and olsun",
        words: [
          { arabic: "فَٱلسَّـٰبِقَٰتِ", transliteration: "fes-sâbikâti", root: "س-ب-ق", pattern: "فَاعِلَات", pos: "ism", meaning_tr: "öne geçenler, yarışanlar", irab: "Atıf harfi فَ ile {ma'tûf} olan {müksemün bih}, mahalli cerrde.", irab_short: "müksemün bih, cerrde", turkish_bridge: "Sebkat, sâbık bu kökten", balagha_note: null },
          { arabic: "سَبۡقٗا", transliteration: "sebkan", root: "س-ب-ق", pattern: "فَعْل", pos: "ism", meaning_tr: "yarış, öne geçme", irab: "{Mef'ûl mutlak} manasında masdar, mensûb.", irab_short: "mef'ûl mutlak, mensûb", turkish_bridge: "Sebkat, sâbık bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 5,
        arabic: "فَٱلۡمُدَبِّرَٰتِ أَمۡرٗا",
        translation: "Yarıştıkça yarışan ve işleri yöneten meleklere and olsun",
        words: [
          { arabic: "فَٱلۡمُدَبِّرَٰتِ", transliteration: "fel-müdebbirâti", root: "د-ب-ر", pattern: "مُفَعِّلَات", pos: "ism", meaning_tr: "işleri düzenleyenler, yönetenler", irab: "Atıf harfi فَ ile {ma'tûf} olan {müksemün bih}, mahalli cerrde.", irab_short: "müksemün bih, cerrde", turkish_bridge: "Tedbir, müdebbir bu kökten", balagha_note: "Beş kasemle meleklerin görevleri tasvir ediliyor" },
          { arabic: "أَمۡرٗا", transliteration: "emran", root: "أ-م-ر", pattern: "فَعْل", pos: "ism", meaning_tr: "iş, emir, buyruk", irab: "{Mef'ûl bih} manasında, mensûb.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Emir, âmir bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 6,
        arabic: "يَوۡمَ تَرۡجُفُ ٱلرَّاجِفَةُ",
        translation: "O gün bir sarsıntı sarsar.",
        words: [
          { arabic: "يَوۡمَ", transliteration: "yevme", root: "ي-و-م", pattern: "فَعْل", pos: "ism", meaning_tr: "gün", irab: "{Zarf-ı zaman} manasında mensûb, {müksemün lehü} cümlesinin zamanı.", irab_short: "zarf-ı zaman, mensûb", turkish_bridge: "Yevm bu kökten", balagha_note: null },
          { arabic: "تَرۡجُفُ", transliteration: "tercüfü", root: "ر-ج-ف", pattern: "تَفْعُلُ", pos: "fil", meaning_tr: "titrer, sarsar", irab: "{Fiil-i muzâri'}, I. bâb, merfû. İsim cümlesi içinde {fiil cümlesi}.", irab_short: "muzâri', I. bâb", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلرَّاجِفَةُ", transliteration: "er-râcifetu", root: "ر-ج-ف", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "sarsıcı, titretici", irab: "{Fâil}, merfû. Kıyamet gününün ilk sarsıntısını ifade eder.", irab_short: "fâil, merfû", turkish_bridge: null, balagha_note: "Müşahhas sıfat, sarsıntının kişileştirilmesi" },
        ],
      },
      {
        surah: 79, ayah: 7,
        arabic: "تَتۡبَعُهَا ٱلرَّادِفَةُ",
        translation: "Peşinden bir diğeri gelir.",
        words: [
          { arabic: "تَتۡبَعُهَا", transliteration: "tetbe'uhâ", root: "ت-ب-ع", pattern: "تَتْفَعُ", pos: "fil", meaning_tr: "onu takip eder", irab: "{Fiil-i muzâri'}, I. bâb, merfû. Muttasıl zamir هَا {mef'ûl bih} konumunda.", irab_short: "muzâri', I. bâb", turkish_bridge: "Tâbi', tebe'iyyet bu kökten", balagha_note: null },
          { arabic: "ٱلرَّادِفَةُ", transliteration: "er-râdifetu", root: "ر-د-ف", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "arkasından gelen, ikinci", irab: "{Fâil}, merfû. İkinci sarsıntıyı ifade eder.", irab_short: "fâil, merfû", turkish_bridge: null, balagha_note: "İlk sarsıntıyla ikincisi arasındaki peşpeşelik vurgusu" },
        ],
      },
      {
        surah: 79, ayah: 8,
        arabic: "قُلُوبٞ يَوۡمَئِذٖ وَاجِفَةٌ",
        translation: "O gün kalbler titrer.",
        words: [
          { arabic: "قُلُوبٞ", transliteration: "kulûbun", root: "ق-ل-ب", pattern: "فُعُول", pos: "ism", meaning_tr: "kalbler", irab: "{Mübtedâ}, merfû. Tanvînli nekra olarak genel anlam ifade eder.", irab_short: "mübtedâ, merfû", turkish_bridge: "Kalb bu kökten", balagha_note: "Takdîm-te'hîr sanatı, kalblerin durumu vurgulanıyor" },
          { arabic: "يَوۡمَئِذٖ", transliteration: "yevmeizin", root: "ي-و-م", pattern: "فَعْلَئِذ", pos: "ism", meaning_tr: "o gün", irab: "{Zarf-ı zaman}, mensûb. إذ ile birlikte mürekkeb zarf.", irab_short: "zarf-ı zaman, mensûb", turkish_bridge: "Yevm bu kökten", balagha_note: null },
          { arabic: "وَاجِفَةٌ", transliteration: "vâcifetun", root: "و-ج-ف", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "titreyici, çarpıntılı", irab: "{Haber}, merfû. Kalblerin korkudan titreme halini ifade eder.", irab_short: "haber, merfû", turkish_bridge: null, balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 9,
        arabic: "أَبۡصَٰرُهَا خَٰشِعَةٞ",
        translation: "İnsanların gözleri yere döner.",
        words: [
          { arabic: "أَبۡصَٰرُهَا", transliteration: "ebsâruhâ", root: "ب-ص-ر", pattern: "أَفْعَال", pos: "ism", meaning_tr: "onların gözleri", irab: "{Mübtedâ}, merfû. Muttasıl zamir هَا {muzâf ileyh} konumunda.", irab_short: "mübtedâ, merfû", turkish_bridge: "Basar, basiret bu kökten", balagha_note: null },
          { arabic: "خَٰشِعَةٞ", transliteration: "hâşi'atun", root: "خ-ش-ع", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "alçakgönüllü, boyun eğen", irab: "{Haber}, merfû. Gözlerin huşû içinde olma halini ifade eder.", irab_short: "haber, merfû", turkish_bridge: "Huşû', hâşi' bu kökten", balagha_note: "Önceki ayetle uyum, kalb ve gözlerin aynı durumu" },
        ],
      },
      {
        surah: 79, ayah: 10,
        arabic: "يَقُولُونَ أَءِنَّا لَمَرۡدُودُونَ فِي ٱلۡحَافِرَةِ",
        translation: "Derler ki: \"Biz eski halimize mi döndürüleceğiz?\"",
        words: [
          { arabic: "يَقُولُونَ", transliteration: "yekûlûne", root: "ق-و-ل", pattern: "يَفْعُلُونَ", pos: "fil", meaning_tr: "derler, söylerler", irab: "{Fiil-i muzâri'}, I. bâb, مرفوع. Vâv cemaat zamiri {fâil} konumunda.", irab_short: "muzâri', I. bâb", turkish_bridge: "Kavl, kâil bu kökten", balagha_note: null },
          { arabic: "أَءِنَّا", transliteration: "e-innâ", root: null, pos: "harf", meaning_tr: "acaba biz", irab: "{Hurûf-i müşebbehe bi'l-fi'l} إنَّ, istifhâm hemzesi ile. Muttasıl zamir نَا {ism-i inne}.", irab_short: "inne, istifhâm", turkish_bridge: null, balagha_note: "İstifhâm-ı inkârî, dirilişi şaşkınlıkla karşılama" },
          { arabic: "لَمَرۡدُودُونَ", transliteration: "le-merdûdûne", root: "ر-د-د", pattern: "مَفْعُولُونَ", pos: "ism", meaning_tr: "geri çevrilecekler", irab: "{Haber-i inne}, mansûb. Lâm-ı te'kîd ile pekiştirilmiş.", irab_short: "haber-i inne, mensûb", turkish_bridge: "Red, redd bu kökten", balagha_note: null },
          { arabic: "فِي ٱلۡحَافِرَةِ", transliteration: "fi'l-hâfirati", root: "ح-ف-ر", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "eski halde, ilk durumda", irab: "{Câr-mecrûr}, mahalli cerrde. el-hâfire eski halimiz manasında.", irab_short: "câr-mecrûr, cerrde", turkish_bridge: "Hafr, hâfir bu kökten", balagha_note: "Kinâye, ölümden sonra diriliş kastediliyor" },
        ],
      },
      {
        surah: 79, ayah: 11,
        arabic: "أَءِذَا كُنَّا عِظَٰمٗا نَّخِرَةٗ",
        translation: "\"Ufalanmış kemik olduğumuz zaman mı?\"",
        words: [
          { arabic: "أَءِذَا", transliteration: "e-izâ", root: null, pos: "harf", meaning_tr: "acaba ne zaman", irab: "{İstifhâm edatı} hemze ve {şart zarfı} إذا birlikte.", irab_short: "istifhâm + şart zarfı", turkish_bridge: null, balagha_note: null },
          { arabic: "كُنَّا", transliteration: "künnâ", root: "ك-و-ن", pattern: "فَعْلْنَا", pos: "fil", meaning_tr: "idik, olduk", irab: "{Fiil-i mâzî nâkıs}, I. bâb. Muttasıl zamir نَا {ism-i kâne}.", irab_short: "mâzî nâkıs, I. bâb", turkish_bridge: "Kevn, kâin bu kökten", balagha_note: null },
          { arabic: "عِظَٰمٗا", transliteration: "izâmen", root: "ع-ظ-م", pattern: "فِعَال", pos: "ism", meaning_tr: "kemikler", irab: "{Haber-i kâne}, mansûb. Cem-i kesîr kalıbında.", irab_short: "haber-i kâne, mensûb", turkish_bridge: "Azm, azîm bu kökten", balagha_note: null },
          { arabic: "نَّخِرَةٗ", transliteration: "nahiraten", root: "ن-خ-ر", pattern: "فَعِلَة", pos: "ism", meaning_tr: "çürümüş, ufalanmış", irab: "{Sıfat} عظاما kelimesinin sıfatı, mensûb.", irab_short: "sıfat, mensûb", turkish_bridge: null, balagha_note: "Mübalağa, kemiklerin tamamen çürüdüğünü vurgulama" },
        ],
      },
      {
        surah: 79, ayah: 12,
        arabic: "قَالُواْ تِلۡكَ إِذٗا كَرَّةٌ خَاسِرَةٞ",
        translation: "Derler ki: \"O takdirde bu zararına bir dönüştür.\"",
        words: [
          { arabic: "قَالُواْ", transliteration: "kâlû", root: "ق-و-ل", pattern: "فَعَلُوا", pos: "fil", meaning_tr: "dediler", irab: "{Fiil-i mâzî}, I. bâb. Vâv cemaat zamiri {fâil} konumunda.", irab_short: "mâzî, I. bâb", turkish_bridge: "Kavl, kâil bu kökten", balagha_note: null },
          { arabic: "تِلۡكَ", transliteration: "tilke", root: null, pos: "ism", meaning_tr: "şu, o", irab: "{İsm-i işâre}, {mübtedâ} konumunda merfû mahalli.", irab_short: "ism-i işâre, mübtedâ", turkish_bridge: null, balagha_note: null },
          { arabic: "إِذٗا", transliteration: "izen", root: null, pos: "harf", meaning_tr: "o takdirde, öyleyse", irab: "{Edât} cümleye netice anlamı katar.", irab_short: "neticeli edât", turkish_bridge: null, balagha_note: null },
          { arabic: "كَرَّةٌ", transliteration: "kerratun", root: "ك-ر-ر", pattern: "فَعْلَة", pos: "ism", meaning_tr: "dönüş, tekrar", irab: "{Haber}, merfû. Dirilişe dönük bir hareket ifade eder.", irab_short: "haber, merfû", turkish_bridge: "Kerr, tekrâr bu kökten", balagha_note: null },
          { arabic: "خَاسِرَةٞ", transliteration: "hâsiratun", root: "خ-س-ر", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "zararlı, kayba uğratan", irab: "{Sıfat} كرة kelimesinin sıfatı, merfû.", irab_short: "sıfat, merfû", turkish_bridge: "Husrân, hâsir bu kökten", balagha_note: "İroni, aslında kazançlı olan diriliş zararlı deniliyor" },
        ],
      },
      {
        surah: 79, ayah: 13,
        arabic: "فَإِنَّمَا هِيَ زَجۡرَةٞ وَٰحِدَةٞ",
        translation: "Doğrusu bir tek çığlık yetecektir.",
        words: [
          { arabic: "فَإِنَّمَا", transliteration: "fe-innemâ", root: null, pos: "harf", meaning_tr: "doğrusu, sadece", irab: "Atıf edatı فَ ve {hasr edatı} إنما birlikte. Sınırlama ifade eder.", irab_short: "hasr edatı", turkish_bridge: null, balagha_note: "Hasr sanatı, diriliş kolaylığı vurgulanıyor" },
          { arabic: "هِيَ", transliteration: "hiye", root: null, pos: "ism", meaning_tr: "o", irab: "{Zamir munfasıl}, {mübtedâ} konumunda merfû mahalli.", irab_short: "zamir, mübtedâ", turkish_bridge: null, balagha_note: null },
          { arabic: "زَجۡرَةٞ", transliteration: "zecratun", root: "ز-ج-ر", pattern: "فَعْلَة", pos: "ism", meaning_tr: "çığlık, güçlü ses", irab: "{Haber}, merfû. Dirilişe vesile olan ilahî nidayı ifade eder.", irab_short: "haber, merfû", turkish_bridge: "Zecr, münzecir bu kökten", balagha_note: null },
          { arabic: "وَٰحِدَةٞ", transliteration: "vâhidetun", root: "و-ح-د", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "tek, bir", irab: "{Sıfat} زجرة kelimesinin sıfatı, merfû.", irab_short: "sıfat, merfû", turkish_bridge: "Vâhid, vahdâniyet bu kökten", balagha_note: "Te'kîd, dirilişin ne kadar basit olduğunu vurgulama" },
        ],
      },
      {
        surah: 79, ayah: 14,
        arabic: "فَإِذَا هُم بِٱلسَّاهِرَةِ",
        translation: "Hepsi hemen bir düzlüğe dökülecektir.",
        words: [
          { arabic: "فَإِذَا", transliteration: "fe-izâ", root: null, pos: "harf", meaning_tr: "bir de", irab: "Atıf edatı فَ ve {fücâe edatı} إذا. Ani durumu ifade eder.", irab_short: "fücâe edatı", turkish_bridge: null, balagha_note: "Fücâe, dirilişin ansızın oluşunu anlatıyor" },
          { arabic: "هُم", transliteration: "hüm", root: null, pos: "ism", meaning_tr: "onlar", irab: "{Zamir munfasıl}, {mübtedâ} konumunda merfû mahalli.", irab_short: "zamir, mübtedâ", turkish_bridge: null, balagha_note: null },
          { arabic: "بِٱلسَّاهِرَةِ", transliteration: "bis-sâhirati", root: "س-ه-ر", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "düzlükte, yeryüzünde", irab: "{Câr-mecrûr}, mahalli cerrde. {Haber-i mübtedâ} yerine geçer.", irab_short: "câr-mecrûr, haber", turkish_bridge: "Seher, sâhir bu kökten", balagha_note: "Mecâz, yeryüzü sâhire denilerek canlandırılıyor" },
        ],
      },
      {
        surah: 79, ayah: 15,
        arabic: "هَلۡ أَتَىٰكَ حَدِيثُ مُوسَىٰٓ",
        translation: "Musa'nın başından geçen olay sana geldi mi?",
        words: [
          { arabic: "هَلۡ", transliteration: "hel", root: null, pos: "harf", meaning_tr: "acaba", irab: "{İstifhâm edatı} tahkik manasında.", irab_short: "istifhâm edatı", turkish_bridge: null, balagha_note: "İstifhâm-ı takrirî, peygambere teyit amaçlı" },
          { arabic: "أَتَىٰكَ", transliteration: "etâke", root: "أ-ت-ي", pattern: "أَفْعَلَ", pos: "fil", meaning_tr: "sana geldi", irab: "{Fiil-i mâzî}, I. bâb. Muttasıl zamir كَ {mef'ûl bih} konumunda.", irab_short: "mâzî, I. bâb", turkish_bridge: "İtyân bu kökten", balagha_note: null },
          { arabic: "حَدِيثُ", transliteration: "hadîsü", root: "ح-د-ث", pattern: "فَعِيل", pos: "ism", meaning_tr: "haberi, kıssası", irab: "{Fâil}, merfû. Muzâf konumunda.", irab_short: "fâil, merfû", turkish_bridge: "Hadis, muhdis bu kökten", balagha_note: null },
          { arabic: "مُوسَىٰٓ", transliteration: "mûsâ", root: null, pos: "ism", meaning_tr: "Musa", irab: "{Muzâf ileyh}, cerrde. Gayr-ı munsarif olduğu için tenvin almaz.", irab_short: "muzâf ileyh, cerrde", turkish_bridge: null, balagha_note: "Yeni bir konu başlangıcında geçiş sanatı" },
        ],
      },
      {
        surah: 79, ayah: 16,
        arabic: "إِذۡ نَادَىٰهُ رَبُّهُۥ بِٱلۡوَادِ ٱلۡمُقَدَّسِ طُوًى",
        translation: "Tuva'da, kutsal bir vadide, Rabbi ona şöyle hitap etmişti:",
        words: [
          { arabic: "إِذۡ", transliteration: "iz", root: null, pos: "harf", meaning_tr: "hani, vakit", irab: "{Zarf-ı zaman} geçmişe işaret eden.", irab_short: "zarf-ı zaman", turkish_bridge: null, balagha_note: null },
          { arabic: "نَادَىٰهُ", transliteration: "nâdâhu", root: "ن-د-ي", pattern: "فَاعَلَ", pos: "fil", meaning_tr: "ona seslendi", irab: "{Fiil-i mâzî}, III. bâb. Muttasıl zamir هُ {mef'ûl bih} konumunda.", irab_short: "mâzî, III. bâb", turkish_bridge: "Nidâ, münâdî bu kökten", balagha_note: null },
          { arabic: "رَبُّهُۥ", transliteration: "rabbuhu", root: "ر-ب-ب", pattern: "فَعْل", pos: "ism", meaning_tr: "onun Rabbi", irab: "{Fâil}, merfû. Muttasıl zamir هُ {muzâf ileyh} konumunda.", irab_short: "fâil, merfû", turkish_bridge: "Rab, rabbi bu kökten", balagha_note: null },
          { arabic: "بِٱلۡوَادِ", transliteration: "bil-vâdi", root: "و-د-ي", pattern: "فَاعِل", pos: "ism", meaning_tr: "vadide", irab: "{Câr-mecrûr}, mahalli cerrde. Muzâf konumunda.", irab_short: "câr-mecrûr, cerrde", turkish_bridge: "Vâdî bu kökten", balagha_note: null },
          { arabic: "ٱلۡمُقَدَّسِ", transliteration: "el-mukaddesi", root: "ق-د-س", pattern: "مُفَعَّل", pos: "ism", meaning_tr: "mukaddes olan", irab: "{Sıfat} الوادي kelimesinin sıfatı, cerrde.", irab_short: "sıfat, cerrde", turkish_bridge: "Kuds, takdîs bu kökten", balagha_note: null },
          { arabic: "طُوًى", transliteration: "tuvâ", root: null, pos: "ism", meaning_tr: "Tuva", irab: "", irab_short: "bedel, cerrde", turkish_bridge: null, balagha_note: "Özel yer ismiyle kutsallık vurgusu" },
        ],
      },
    ],
    exercises: [],
  },
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 2 — SURE79 79:17-29
  // ═══════════════════════════════════════════════════════════
  {
    id: "S79-B02-naziat",
    title: "Sure79 (17-29)",
    titleAr: "سُورَة النازعات 17-29",
    stage: 2,
    level: 8,
    surah: 79,
    description: "Hz. Musa'nın Firavun'a gönderilmesi, davet ve mucize göstermesi, Firavun'un inkâr ve itaatsizliği, bunun sonucunda helak edilmesi ve bundan alınacak ibret.",
    verses: [
      {
        surah: 79, ayah: 17,
        arabic: "ٱذۡهَبۡ إِلَىٰ فِرۡعَوۡنَ إِنَّهُۥ طَغَىٰ",
        translation: "Firavun'a git; doğrusu o azmıştır.",
        words: [
          { arabic: "ٱذۡهَبۡ", transliteration: "izheb", root: "ذ-ه-ب", pattern: "اِفْعَلْ", pos: "fil", meaning_tr: "git", irab: "{Fiil-i emr} muhatap müfredine hitap. Fâili müstetir 'ente'.", irab_short: "emr, II. bâb", turkish_bridge: null, balagha_note: null },
          { arabic: "إِلَىٰ", transliteration: "ilâ", root: null, pos: "harf", meaning_tr: "-e, -a (yönelme)", irab: "{Harf-i cer} 'fir'avne' kelimesini mecrûr yapmaktadır.", irab_short: "harf-i cer", turkish_bridge: null, balagha_note: null },
          { arabic: "فِرۡعَوۡنَ", transliteration: "fir'avne", root: null, pattern: "فِعْلَوْن", pos: "ism", meaning_tr: "Firavun", irab: "{Mecrûr} 'ilâ' harf-i ceriyle mecrûrdur, alâmeti'l-cerri'l-fethatu li'l-'alemiyyeti ve'l-'ucmeti.", irab_short: "mecrûr, alem ismi", turkish_bridge: "Firavun bu kelimeden", balagha_note: null },
          { arabic: "إِنَّهُۥ", transliteration: "innehû", root: null, pos: "harf", meaning_tr: "şüphesiz o", irab: "'İnne' {hurûf-i müşebbehe bi'l-fi'l} ve 'hû' {zamîr-i muttasıl} isme mahallinde mansûb.", irab_short: "inne + zamîr", turkish_bridge: null, balagha_note: null },
          { arabic: "طَغَىٰ", transliteration: "tağâ", root: "ط-غ-ي", pattern: "فَعَلَ", pos: "fil", meaning_tr: "azgınlık etti, taştı", irab: "{Fiil-i mâzî} I. bâb. 'İnne'nin {haberi} mahallinde merfû.", irab_short: "mâzî, I. bâb", turkish_bridge: "Tağut bu kökten", balagha_note: "Kelime aslen 'sınırını aşmak' anlamında olup mecazen 'azgınlık' için kullanılmıştır" },
        ],
      },
      {
        surah: 79, ayah: 18,
        arabic: "فَقُلۡ هَل لَّكَ إِلَىٰٓ أَن تَزَكَّىٰ",
        translation: "Ona de ki: Arınmağa niyetin var mı?",
        words: [
          { arabic: "فَقُلۡ", transliteration: "fekul", root: "ق-و-ل", pattern: "فُلْ", pos: "fil", meaning_tr: "de ki", irab: "Fâ {harf-i atf} ve 'kul' {fiil-i emr}. Fâili müstetir 'ente'.", irab_short: "emr, I. bâb", turkish_bridge: "Kavl, kâl bu kökten", balagha_note: null },
          { arabic: "هَل", transliteration: "hel", root: null, pos: "harf", meaning_tr: "acaba, -mI", irab: "{Harf-i istifhâm} cümleye soru anlamı katmaktadır.", irab_short: "istifhâm edatı", turkish_bridge: null, balagha_note: "İstifhâm-ı inkârî değil, teşvik ve teklif amaçlı istifhâm" },
          { arabic: "لَّكَ", transliteration: "leke", root: null, pos: "harf", meaning_tr: "senin için", irab: "Lâm {harf-i cer} ve kâf {zamîr-i muttasıl} mahallinde mecrûr.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "إِلَىٰٓ", transliteration: "ilâ", root: null, pos: "harf", meaning_tr: "-e doğru", irab: "{Harf-i cer} 'en' masdarını mecrûr yapmaktadır.", irab_short: "harf-i cer", turkish_bridge: null, balagha_note: null },
          { arabic: "أَن", transliteration: "en", root: null, pos: "harf", meaning_tr: "-mek, -mak", irab: "'En' {harf-i masdarî} ile 'ilâ' harf-i ceriyle {mecrûr}.", irab_short: "harf-i masdarî", turkish_bridge: null, balagha_note: null },
          { arabic: "تَزَكَّىٰ", transliteration: "tezekkâ", root: "ز-ك-ي", pattern: "تَفَعَّلَ", pos: "fil", meaning_tr: "arınırsın, temizlenirsin", irab: "{Fiil-i muzâri} V. bâb. 'En' masdarî ile birlikte masdar konumunda.", irab_short: "muzâri, V. bâb", turkish_bridge: "Zekât, zeki bu kökten", balagha_note: "V. bâb mutâvaat kalıbı, 'kendini arındırmak' anlamında" },
        ],
      },
      {
        surah: 79, ayah: 19,
        arabic: "وَأَهۡدِيَكَ إِلَىٰ رَبِّكَ فَتَخۡشَىٰ",
        translation: "Rabbine giden yolu göstereyim ki O'na saygı duyup korkasın.",
        words: [
          { arabic: "وَأَهۡدِيَكَ", transliteration: "ve uhdîke", root: "ه-د-ي", pattern: "أُفْعِلَ", pos: "fil", meaning_tr: "sana yol göstereyim", irab: "Vâv {harf-i atf} ve 'uhdîke' {fiil-i muzâri} IV. bâb mansûb bi'en muzdameratin.", irab_short: "muzâri, IV. bâb", turkish_bridge: "Hidayet, hâdî bu kökten", balagha_note: null },
          { arabic: "إِلَىٰ", transliteration: "ilâ", root: null, pos: "harf", meaning_tr: "-e doğru", irab: "{Harf-i cer} 'rabbike' kelimesini mecrûr yapmaktadır.", irab_short: "harf-i cer", turkish_bridge: null, balagha_note: null },
          { arabic: "رَبِّكَ", transliteration: "rabbike", root: "ر-ب-ب", pattern: "فَعْل", pos: "ism", meaning_tr: "senin Rabbin", irab: "{Mecrûr} 'ilâ' harf-i ceriyle, muzâfun ileyh olarak mudâf.", irab_short: "mecrûr, muzâfun ileyh", turkish_bridge: "Rab bu kelimeden", balagha_note: null },
          { arabic: "فَتَخۡشَىٰ", transliteration: "fetahşâ", root: "خ-ش-ي", pattern: "تَفْعَلَ", pos: "fil", meaning_tr: "korkasın, saygı duyasın", irab: "Fâ {fâ'u's-sebebiyye} ve 'tahşâ' {fiil-i muzâri} I. bâb mansûb bi'en muzdameratin ba'de fâ'i's-sebebiyye.", irab_short: "muzâri mansûb, I. bâb", turkish_bridge: "Haşyet bu kökten", balagha_note: "Fâ'u's-sebebiyye ile netice-sebep ilişkisi kurulmuş" },
        ],
      },
      {
        surah: 79, ayah: 20,
        arabic: "فَأَرَىٰهُ ٱلۡأٓيَةَ ٱلۡكُبۡرَىٰ",
        translation: "Bunun üzerine ona en büyük mucizeyi gösterdi.",
        words: [
          { arabic: "فَأَرَىٰهُ", transliteration: "fe erâhu", root: "ر-أ-ي", pattern: "أَفْعَلَ", pos: "fil", meaning_tr: "ona gösterdi", irab: "Fâ {harf-i atf} ve 'erâ' {fiil-i mâzî} IV. bâb, 'hu' {mef'ûl bih evvel}.", irab_short: "mâzî, IV. bâb", turkish_bridge: "Rüya bu kökten", balagha_note: null },
          { arabic: "ٱلۡأٓيَةَ", transliteration: "el-âyete", root: "أ-ي-ي", pattern: "فَعْلَة", pos: "ism", meaning_tr: "âyet, mucize", irab: "{Mef'ûl bih sânî} mansûb, alâmeti'n-nasbi'l-fethatu.", irab_short: "mef'ûl bih, mansûb", turkish_bridge: "Âyet bu kelimeden", balagha_note: null },
          { arabic: "ٱلۡكُبۡرَىٰ", transliteration: "el-kübrâ", root: "ك-ب-ر", pattern: "فُعْلَى", pos: "ism", meaning_tr: "en büyük", irab: "{Sıfat} 'el-âyete' kelimesine tâbi, mansûb.", irab_short: "sıfat, mansûb", turkish_bridge: "Kebîr, kibriya bu kökten", balagha_note: "İsm-i tafdîl sigası, mucizeler arasında üstünlük ifadesi" },
        ],
      },
      {
        surah: 79, ayah: 21,
        arabic: "فَكَذَّبَ وَعَصَىٰ",
        translation: "Ama Firavun yalanladı ve baş kaldırdı.",
        words: [
          { arabic: "فَكَذَّبَ", transliteration: "fekeẕẕebe", root: "ك-ذ-ب", pattern: "فَعَّلَ", pos: "fil", meaning_tr: "yalanladı", irab: "Fâ {harf-i atf} ve 'keẕẕebe' {fiil-i mâzî} II. bâb. Fâili müstetir 'huve'.", irab_short: "mâzî, II. bâb", turkish_bridge: "Kizb bu kökten", balagha_note: null },
          { arabic: "وَعَصَىٰ", transliteration: "ve asâ", root: "ع-ص-ي", pattern: "فَعَلَ", pos: "fil", meaning_tr: "isyan etti", irab: "Vâv {harf-i atf} ve 'asâ' {fiil-i mâzî} I. bâb. Fâili müstetir 'huve'.", irab_short: "mâzî, I. bâb", turkish_bridge: "Âsi bu kökten", balagha_note: "İki fiil atıfla bağlanarak Firavun'un iki ayrı suçu vurgulanmış" },
        ],
      },
      {
        surah: 79, ayah: 22,
        arabic: "ثُمَّ أَدۡبَرَ يَسۡعَىٰ",
        translation: "Geri dönüp yürüdü.",
        words: [
          { arabic: "ثُمَّ", transliteration: "sümme", root: null, pos: "harf", meaning_tr: "sonra, ardından", irab: "{Harf-i atf} terâhî (zamansal sıralama) için kullanılmıştır.", irab_short: "harf-i atf", turkish_bridge: null, balagha_note: null },
          { arabic: "أَدۡبَرَ", transliteration: "edbere", root: "د-ب-ر", pattern: "أَفْعَلَ", pos: "fil", meaning_tr: "arkasını döndü, geri döndü", irab: "{Fiil-i mâzî} IV. bâb. Fâili müstetir 'huve'.", irab_short: "mâzî, IV. bâb", turkish_bridge: "Müdebbir bu kökten", balagha_note: null },
          { arabic: "يَسۡعَىٰ", transliteration: "yes'â", root: "س-ع-ي", pattern: "يَفْعَلُ", pos: "fil", meaning_tr: "koşuyor, çaba gösteriyor", irab: "{Fiil-i muzâri} I. bâb, {hâl} konumunda. Sâhibu'l-hâl müstetir fâil 'huve'.", irab_short: "muzâri hâl, I. bâb", turkish_bridge: "Sa'y bu kökten", balagha_note: "Hâl cümlesi Firavun'un telaş halini tasvir ediyor" },
        ],
      },
      {
        surah: 79, ayah: 23,
        arabic: "فَحَشَرَ فَنَادَىٰ",
        translation: "Adamlarını toplayıp seslendi:",
        words: [
          { arabic: "فَحَشَرَ", transliteration: "fehaşere", root: "ح-ش-ر", pattern: "فَعَلَ", pos: "fil", meaning_tr: "topladı", irab: "Fâ {harf-i atf} ve 'haşere' {fiil-i mâzî} I. bâb. Fâili müstetir 'huve'.", irab_short: "mâzî, I. bâb", turkish_bridge: "Haşir bu kökten", balagha_note: null },
          { arabic: "فَنَادَىٰ", transliteration: "fenâdâ", root: "ن-د-ي", pattern: "فَعَلَ", pos: "fil", meaning_tr: "seslendi, çağırdı", irab: "Fâ {harf-i atf} ve 'nâdâ' {fiil-i mâzî} III. bâb. Fâili müstetir 'huve'.", irab_short: "mâzî, III. bâb", turkish_bridge: "Münâdî bu kökten", balagha_note: "İki fiil peş peşe, Firavun'un aceleyle hareket ettiğini gösteriyor" },
        ],
      },
      {
        surah: 79, ayah: 24,
        arabic: "فَقَالَ أَنَا۠ رَبُّكُمُ ٱلۡأَعۡلَىٰ",
        translation: "Sizin en yüce rabbiniz benim dedi.",
        words: [
          { arabic: "فَقَالَ", transliteration: "fekâle", root: "ق-و-ل", pattern: "فَعَلَ", pos: "fil", meaning_tr: "dedi", irab: "Fâ {harf-i atf} ve 'kâle' {fiil-i mâzî} I. bâb. Fâili müstetir 'huve'.", irab_short: "mâzî, I. bâb", turkish_bridge: "Kavl, kâl bu kökten", balagha_note: null },
          { arabic: "أَنَا۠", transliteration: "ene", root: null, pos: "ism", meaning_tr: "ben", irab: "{Zamîr-i munfasıl} mütekellim vâhid. Mahallinde mübtedâ.", irab_short: "mübtedâ, zamîr", turkish_bridge: null, balagha_note: "Takdîm ile vurgu, Firavun'un kibir ve gurur ifadesi" },
          { arabic: "رَبُّكُمُ", transliteration: "rabbüküm", root: "ر-ب-ب", pattern: "فَعْل", pos: "ism", meaning_tr: "sizin rabbiniz", irab: "{Haber} merfû, alâmeti'r-ref'i'd-dammatu. Muzâf.", irab_short: "haber, merfû", turkish_bridge: "Rab bu kelimeden", balagha_note: null },
          { arabic: "ٱلۡأَعۡلَىٰ", transliteration: "el-a'lâ", root: "ع-ل-و", pattern: "أَفْعَل", pos: "ism", meaning_tr: "en yüce", irab: "{Sıfat} 'rabbüküm' kelimesine tâbi, merfû. İsm-i tafdîl.", irab_short: "sıfat, merfû", turkish_bridge: "Âlî, yüce bu kökten", balagha_note: "İsm-i tafdîl ile üstünlük iddiası, küfür zirvesi" },
        ],
      },
      {
        surah: 79, ayah: 25,
        arabic: "فَأَخَذَهُ ٱللَّهُ نَكَالَ ٱلۡأٓخِرَةِ وَٱلۡأُولَىٰٓ",
        translation: "Allah bunun üzerine onu dünya ve ahiret azabına uğrattı.",
        words: [
          { arabic: "فَأَخَذَهُ", transliteration: "feehaẕehü", root: "أ-خ-ذ", pattern: "فَعَلَ", pos: "fil", meaning_tr: "onu yakaladı", irab: "Fâ {harf-i atf} ve 'ehaẕe' {fiil-i mâzî} I. bâb. 'Hû' {mef'ûl bih}.", irab_short: "mâzî, I. bâb", turkish_bridge: "Ahz bu kökten", balagha_note: null },
          { arabic: "ٱللَّهُ", transliteration: "Allâhü", root: "أ-ل-ه", pattern: "فَعَال", pos: "ism", meaning_tr: "Allah", irab: "{Fâil} merfû, alâmeti'r-ref'i'd-dammatu. Lafzatu'l-celâl.", irab_short: "fâil, merfû", turkish_bridge: "Allah bu kelimeden", balagha_note: null },
          { arabic: "نَكَالَ", transliteration: "nekâle", root: "ن-ك-ل", pattern: "فَعَال", pos: "ism", meaning_tr: "ceza, azap", irab: "{Mef'ûl mutlak} veya {mef'ûl li eclih} mansûb. Muzâf.", irab_short: "mef'ûl, mansûb", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلۡأٓخِرَةِ", transliteration: "el-âhirati", root: "أ-خ-ر", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "ahiret", irab: "{Muzâfun ileyh} mecrûr, alâmeti'l-cerri'l-kesratu.", irab_short: "muzâfun ileyh, mecrûr", turkish_bridge: "Âhir bu kökten", balagha_note: null },
          { arabic: "وَٱلۡأُولَىٰٓ", transliteration: "vel-ûlâ", root: "و-ل-ي", pattern: "فُعْلَى", pos: "ism", meaning_tr: "dünya", irab: "Vâv {harf-i atf} ve 'el-ûlâ' {ma'tûf} mecrûr 'el-âhirati' kelimesine atfen.", irab_short: "ma'tûf, mecrûr", turkish_bridge: "Evvel bu kökten", balagha_note: "Tıbâk sanatı: âhiret-ûlâ karşıtlığı" },
        ],
      },
      {
        surah: 79, ayah: 26,
        arabic: "إِنَّ فِي ذَٰلِكَ لَعِبۡرَةٗ لِّمَن يَخۡشَىٰٓ",
        translation: "Doğrusu bunda Allah'tan korkan kimseye ders vardır.",
        words: [
          { arabic: "إِنَّ", transliteration: "inne", root: null, pos: "harf", meaning_tr: "şüphesiz, doğrusu", irab: "{Hurûf-i müşebbehe bi'l-fi'l} ismini mansûb, haberini merfû yapar.", irab_short: "harf-i te'kîd", turkish_bridge: null, balagha_note: null },
          { arabic: "فِي", transliteration: "fî", root: null, pos: "harf", meaning_tr: "-da, -de", irab: "{Harf-i cer} 'zâlike' kelimesini mecrûr yapmaktadır.", irab_short: "harf-i cer", turkish_bridge: null, balagha_note: null },
          { arabic: "ذَٰلِكَ", transliteration: "zâlike", root: null, pos: "ism", meaning_tr: "o, bu", irab: "{İsm-i işâret} 'fî' harf-i ceriyle mecrûr. Câr-mecrûr 'inne'nin muallak haberi.", irab_short: "işâret, mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "لَعِبۡرَةٗ", transliteration: "le'ibraten", root: "ع-ب-ر", pattern: "فِعْلَة", pos: "ism", meaning_tr: "ibret, ders", irab: "Lâm {lâm-ı ibtidâ} te'kîd için. 'İbrete' {ism-i inne} mansûb.", irab_short: "ism-i inne, mansûb", turkish_bridge: "İbret bu kökten", balagha_note: null },
          { arabic: "لِّمَن", transliteration: "limen", root: null, pos: "harf", meaning_tr: "için, kimse için", irab: "Lâm {harf-i cer} ve 'men' {ism-i mevsûl} mecrûr. 'İbrete' kelimesine müteallik.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "يَخۡشَىٰٓ", transliteration: "yahşâ", root: "خ-ش-ي", pattern: "يَفْعَل", pos: "fil", meaning_tr: "korkar, saygı duyar", irab: "{Fiil-i muzâri} I. bâb. 'Men'in {sılası} mahallinde lâ mahalle leh.", irab_short: "muzâri sıla, I. bâb", turkish_bridge: "Haşyet bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 27,
        arabic: "ءَأَنتُمۡ أَشَدُّ خَلۡقًا أَمِ ٱلسَّمَآءُۚ بَنَىٰهَا",
        translation: "Sizi yaratmak mı daha zordur, yoksa göğü yaratmak mı? Ki onu Allah bina edip yükseltmiş ve ona şekil vermiştir.",
        words: [
          { arabic: "ءَأَنتُمۡ", transliteration: "e entüm", root: null, pos: "ism", meaning_tr: "siz", irab: "Hemze {harf-i istifhâm} ve 'entüm' {zamîr-i munfasıl} mübtedâ.", irab_short: "mübtedâ, zamîr", turkish_bridge: null, balagha_note: "İstifhâm-ı inkârî, insanların yaratılışının kolaylığını vurguluyor" },
          { arabic: "أَشَدُّ", transliteration: "eşeddü", root: "ش-د-د", pattern: "أَفْعَل", pos: "ism", meaning_tr: "daha zor, daha şiddetli", irab: "{Haber} merfû, alâmeti'r-ref'i'd-dammatu. İsm-i tafdîl.", irab_short: "haber, merfû", turkish_bridge: "Şiddet bu kökten", balagha_note: null },
          { arabic: "خَلۡقًا", transliteration: "halkan", root: "خ-ل-ق", pattern: "فَعْل", pos: "ism", meaning_tr: "yaratılış", irab: "{Temyîz} mansûb, alâmeti'n-nasbi'l-fethatu.", irab_short: "temyîz, mansûb", turkish_bridge: "Halk bu kökten", balagha_note: null },
          { arabic: "أَمِ", transliteration: "em", root: null, pos: "harf", meaning_tr: "yoksa, ya da", irab: "{Harf-i atf} muhayyer 'em' seçenekli soru edatı.", irab_short: "harf-i istifhâm", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلسَّمَآءُ", transliteration: "es-semâü", root: "س-م-و", pattern: "فَعَال", pos: "ism", meaning_tr: "gök, sema", irab: "{Ma'tûf} 'entüm' kelimesine ma'tûf, mahallinde mübtedâ.", irab_short: "ma'tûf, mübtedâ", turkish_bridge: "Sema bu kelimeden", balagha_note: null },
          { arabic: "بَنَىٰهَا", transliteration: "benâhâ", root: "ب-ن-ي", pattern: "فَعَلَ", pos: "fil", meaning_tr: "onu bina etti", irab: "{Fiil-i mâzî} I. bâb. 'Hâ' {mef'ûl bih}. Fâili müstetir 'huve' yani Allah.", irab_short: "mâzî, I. bâb", turkish_bridge: "Bina bu kökten", balagha_note: "Cümle-i hâliyye, göğün yaratılış sürecini tasvir ediyor" },
        ],
      },
      {
        surah: 79, ayah: 28,
        arabic: "رَفَعَ سَمۡكَهَا فَسَوَّىٰهَا",
        translation: "Tavanını yükseltti, onu bir düzene koydu.",
        words: [
          { arabic: "رَفَعَ", transliteration: "rafa'a", root: "ر-ف-ع", pattern: "فَعَلَ", pos: "fil", meaning_tr: "yükseltti", irab: "{Fiil-i mâzî} I. bâb. Fâili müstetir 'huve'.", irab_short: "mâzî, I. bâb", turkish_bridge: "Ref' bu kökten", balagha_note: null },
          { arabic: "سَمۡكَهَا", transliteration: "semkehâ", root: "س-م-ك", pattern: "فَعْل", pos: "ism", meaning_tr: "onun tavanını, çatısını", irab: "{Mef'ûl bih} mansûb, alâmeti'n-nasbi'l-fethatu. Muzâf.", irab_short: "mef'ûl bih, mansûb", turkish_bridge: null, balagha_note: null },
          { arabic: "فَسَوَّىٰهَا", transliteration: "fesevvâhâ", root: "س-و-ي", pattern: "فَعَّلَ", pos: "fil", meaning_tr: "onu düzenledi", irab: "Fâ {harf-i atf} ve 'sevvâ' {fiil-i mâzî} II. bâb. 'Hâ' {mef'ûl bih}.", irab_short: "mâzî, II. bâb", turkish_bridge: "Tesviye bu kökten", balagha_note: "II. bâb tefsîr kalıbı, yaratma işinin mükemmelliğini vurguluyor" },
        ],
      },
      {
        surah: 79, ayah: 29,
        arabic: "وَأَغۡطَشَ لَيۡلَهَا وَأَخۡرَجَ ضُحَىٰهَا",
        translation: "Gecesini karanlık yapmış, gündüzünü aydınlatmıştır.",
        words: [
          { arabic: "وَأَغۡطَشَ", transliteration: "ve agtaşe", root: "غ-ط-ش", pattern: "أَفْعَلَ", pos: "fil", meaning_tr: "karanlık yaptı", irab: "Vâv {harf-i atf} ve 'agtaşe' {fiil-i mâzî} IV. bâb.", irab_short: "mâzî, IV. bâb", turkish_bridge: null, balagha_note: null },
          { arabic: "لَيۡلَهَا", transliteration: "leylehâ", root: "ل-ي-ل", pattern: "فَعْل", pos: "ism", meaning_tr: "onun gecesi", irab: "{Mef'ûl bih} mansûb, alâmeti'n-nasbi'l-fethatu. Muzâf.", irab_short: "mef'ûl bih, mansûb", turkish_bridge: "Leyl bu kelimeden", balagha_note: null },
          { arabic: "وَأَخۡرَجَ", transliteration: "ve ahrace", root: "خ-ر-ج", pattern: "أَفْعَلَ", pos: "fil", meaning_tr: "çıkardı", irab: "Vâv {harf-i atf} ve 'ahrace' {fiil-i mâzî} IV. bâb.", irab_short: "mâzî, IV. bâb", turkish_bridge: "Hurûc bu kökten", balagha_note: null },
          { arabic: "ضُحَىٰهَا", transliteration: "duhâhâ", root: "ض-ح-و", pattern: "فُعَال", pos: "ism", meaning_tr: "onun kuşluk vaktini", irab: "{Mef'ûl bih} mansûb, alâmeti'n-nasbi'l-fethatu'l-mukaддеratu. Muzâf.", irab_short: "mef'ûl bih, mansûb", turkish_bridge: null, balagha_note: "Tıbâk sanatı: leyl-duhâ karşıtlığı ile zıt kavramlar bir arada" },
        ],
      },
    ],
    exercises: [],
  },
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 3 — SURE79 79:30-42
  // ═══════════════════════════════════════════════════════════
  {
    id: "S79-B03-naziat",
    title: "Sure79 (30-42)",
    titleAr: "سُورَة النازعات 30-42",
    stage: 2,
    level: 8,
    surah: 79,
    description: "Bu bölümde Allah'ın yeryüzünü düzenlemesi ve kıyamet günü insanların durumları anlatılır. Müttakiler ile azgınlar arasındaki karşıtlık vurgulanır.",
    verses: [
      {
        surah: 79, ayah: 30,
        arabic: "وَٱلۡأَرۡضَ بَعۡدَ ذَٰلِكَ دَحَىٰهَآ",
        translation: "Ardından yeri düzenlemiştir.",
        words: [
          { arabic: "وَٱلۡأَرۡضَ", transliteration: "vel-arda", root: "أ-ر-ض", pos: "ism", meaning_tr: "ve yeri, toprağı", irab: "{Mef'ûl bih} konumunda, mensûb. Kendisinden önce mukadder bir fiille (خَلَقَ gibi) mansûb olmuş.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Arz, arazi bu kökten", balagha_note: null },
          { arabic: "بَعۡدَ", transliteration: "ba'de", root: "ب-ع-د", pos: "ism", meaning_tr: "sonra, ardından", irab: "{Zarf-ı zaman} olarak mansûb. İzafet ile bir sonraki kelimeye bağlı.", irab_short: "zarf, mensûb", turkish_bridge: "Baad, bu'ud bu kökten", balagha_note: null },
          { arabic: "ذَٰلِكَ", transliteration: "zâlike", root: null, pos: "ism", meaning_tr: "bunun, o şeyin", irab: "{İsm-i işâret} olarak mecrûr. بَعْدَ kelimesine muzâf ileyh.", irab_short: "işâret, mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "دَحَىٰهَآ", transliteration: "dahâhâ", root: "د-ح-و", pos: "fil", meaning_tr: "onu yaydı, düzenledi", irab: "{Fiil-i mâzî}, I. bâb. Fâili Allah, mef'ûlü هَا zamiri (arz'a râci).", irab_short: "mâzî, I. bâb", turkish_bridge: null, balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 31,
        arabic: "أَخۡرَجَ مِنۡهَا مَآءَهَا وَمَرۡعَىٰهَا",
        translation: "Suyunu ondan çıkarmış ve otlak yer meydana getirmiştir.",
        words: [
          { arabic: "أَخۡرَجَ", transliteration: "ahrece", root: "خ-ر-ج", pos: "fil", meaning_tr: "çıkardı", irab: "{Fiil-i mâzî}, IV. bâb (إفْعال). Fâili Allah, takdiri.", irab_short: "mâzî, IV. bâb", turkish_bridge: "Hariç, harice bu kökten", balagha_note: null },
          { arabic: "مِنۡهَا", transliteration: "minhâ", root: null, pos: "harf", meaning_tr: "ondan", irab: "{Câr-mecrûr}. مِنْ harfi cer, هَا zamiri mecrûr (arz'a râci).", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "مَآءَهَا", transliteration: "mâehâ", root: "م-و-ه", pos: "ism", meaning_tr: "onun suyunu", irab: "{Mef'ûl bih} mansûb. هَا zamiri muzâf ileyh (arz'a râci).", irab_short: "mef'ûl bih, mensûb", turkish_bridge: null, balagha_note: null },
          { arabic: "وَمَرۡعَىٰهَا", transliteration: "vemer'âhâ", root: "ر-ع-ي", pos: "ism", meaning_tr: "ve onun otlağını", irab: "{Ma'tûf} mansûb. مَاءَهَا üzerine atfedilmiş, هَا zamiri muzâf ileyh.", irab_short: "ma'tûf, mensûb", turkish_bridge: "Râî, ri'ayet bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 32,
        arabic: "وَٱلۡجِبَالَ أَرۡسَىٰهَا",
        translation: "Dağları yerleştirmiştir.",
        words: [
          { arabic: "وَٱلۡجِبَالَ", transliteration: "vel-cibâle", root: "ج-ب-ل", pos: "ism", meaning_tr: "ve dağları", irab: "{Mef'ûl bih} mansûb. وَ harfi atıf ile önceki mef'ûle ma'tûf.", irab_short: "ma'tûf, mensûb", turkish_bridge: "Cebel bu kökten", balagha_note: null },
          { arabic: "أَرۡسَىٰهَا", transliteration: "ersâhâ", root: "ر-س-و", pos: "fil", meaning_tr: "onları yerleştirdi, sabitleştirdi", irab: "{Fiil-i mâzî}, IV. bâb (إفْعال). Fâili Allah, mef'ûlü هَا zamiri (dağlara râci).", irab_short: "mâzî, IV. bâb", turkish_bridge: null, balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 33,
        arabic: "مَتَٰعٗا لَّكُمۡ وَلِأَنۡعَٰمِكُمۡ",
        translation: "Bunları sizin ve hayvanlarınızın geçinmesi için yapmıştır.",
        words: [
          { arabic: "مَتَٰعٗا", transliteration: "metâ'an", root: "م-ت-ع", pos: "ism", meaning_tr: "faydalanma, yararlanma için", irab: "{Mef'ûl li eclih} (gayeye delalet eden masdar) mansûb. Tenvînli.", irab_short: "mef'ûl li eclih, mensûb", turkish_bridge: "Mata', metâ bu kökten", balagha_note: null },
          { arabic: "لَّكُمۡ", transliteration: "lekum", root: null, pos: "harf", meaning_tr: "sizin için", irab: "{Câr-mecrûr}. لَ harfi cer, كُمْ zamiri mecrûr (muhatablara râci).", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "وَلِأَنۡعَٰمِكُمۡ", transliteration: "velien'âmikum", root: "ن-ع-م", pos: "ism", meaning_tr: "ve hayvanlarınız için", irab: "{Ma'tûf ale'l-câr-mecrûr}. لَكُمْ üzerine atfedilmiş, كُمْ zamiri muzâf ileyh.", irab_short: "ma'tûf, mecrûr", turkish_bridge: "Ni'met, in'âm bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 34,
        arabic: "فَإِذَا جَآءَتِ ٱلطَّآمَّةُ ٱلۡكُبۡرَىٰ",
        translation: "Güç yetirilemeyen en büyük baskın geldiği zaman,",
        words: [
          { arabic: "فَإِذَا", transliteration: "feiẕâ", root: null, pos: "harf", meaning_tr: "o zaman, o vakit", irab: "{Fasıl atıf harfi} ve {zarf-ı zaman şartî}. Gelecekteki zamana delalet eder.", irab_short: "fasıl + zarf şartî", turkish_bridge: null, balagha_note: "Yeni bir sahneye geçişi belirten fasıl harfi" },
          { arabic: "جَآءَتِ", transliteration: "câeti", root: "ج-ي-أ", pos: "fil", meaning_tr: "geldi", irab: "{Fiil-i mâzî}, I. bâb. Te'nîs tâsı ile müennese temas eder (et-tâmme'ye râci).", irab_short: "mâzî, I. bâb", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلطَّآمَّةُ", transliteration: "et-tâmmetu", root: "ط-م-م", pos: "ism", meaning_tr: "her şeyi bastıran felaket", irab: "{Fâil} merfû. جَاءَتْ fiilinin fâili.", irab_short: "fâil, merfû", turkish_bridge: "Tâmm bu kökten", balagha_note: "Kıyametin dehşeti için özel bir isim" },
          { arabic: "ٱلۡكُبۡرَىٰ", transliteration: "el-kubrâ", root: "ك-ب-ر", pos: "ism", meaning_tr: "en büyük", irab: "{Sıfat} merfû. الطَّامَّةُ kelimesinin sıfatı.", irab_short: "sıfat, merfû", turkish_bridge: "Kebîr, kibriyâ bu kökten", balagha_note: "Kıyametin büyüklüğünü vurgulayan mübalağa" },
        ],
      },
      {
        surah: 79, ayah: 35,
        arabic: "يَوۡمَ يَتَذَكَّرُ ٱلۡإِنسَٰنُ مَا سَعَىٰ",
        translation: "O gün, insan ne uğurda çalıştığını anlar.",
        words: [
          { arabic: "يَوۡمَ", transliteration: "yevme", root: "ي-و-م", pos: "ism", meaning_tr: "gün", irab: "{Zarf-ı zaman} mansûb. إِذَا kelimesine bedel veya بَيان.", irab_short: "zarf, mensûb", turkish_bridge: "Yevm bu kökten", balagha_note: null },
          { arabic: "يَتَذَكَّرُ", transliteration: "yeteẕekkeru", root: "ذ-ك-ر", pos: "fil", meaning_tr: "hatırlar, anımsar", irab: "{Fiil-i muzâri}, V. bâb (تَفَعَّل). Merfû olarak gelir.", irab_short: "muzâri, V. bâb", turkish_bridge: "Zikir, tezkiye bu kökten", balagha_note: null },
          { arabic: "ٱلۡإِنسَٰنُ", transliteration: "el-insânu", root: "أ-ن-س", pos: "ism", meaning_tr: "insan", irab: "{Fâil} merfû. يَتَذَكَّرُ fiilinin fâili.", irab_short: "fâil, merfû", turkish_bridge: "İns, üns bu kökten", balagha_note: null },
          { arabic: "مَا", transliteration: "mâ", root: null, pos: "ism", meaning_tr: "neyi, ne şeyi", irab: "{İsm-i mevsûl} mansûb. يَتَذَكَّرُ fiilinin mef'ûlü.", irab_short: "mevsûl, mensûb", turkish_bridge: null, balagha_note: null },
          { arabic: "سَعَىٰ", transliteration: "se'â", root: "س-ع-ي", pos: "fil", meaning_tr: "çalıştı, koştu, gayret etti", irab: "{Fiil-i mâzî}, I. bâb. مَا mevsûlünün sılası. Fâili mukadder (هُوَ).", irab_short: "mâzî, I. bâb", turkish_bridge: "Sa'y bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 36,
        arabic: "وَبُرِّزَتِ ٱلۡجَحِيمُ لِمَن يَرَىٰ",
        translation: "Cehennem her bakanın göreceği şekilde gösterilir.",
        words: [
          { arabic: "وَبُرِّزَتِ", transliteration: "vebürrizeti", root: "ب-ر-ز", pos: "fil", meaning_tr: "ve ortaya çıkarıldı, gösterildi", irab: "{Fiil-i mâzî mebnî li'l-mechûl}, II. bâb (تَفْعِيل). Te'nîs tâsı ile müennesine temas.", irab_short: "mâzî mechûl, II. bâb", turkish_bridge: "Bâriz bu kökten", balagha_note: null },
          { arabic: "ٱلۡجَحِيمُ", transliteration: "el-cehîmu", root: "ج-ح-م", pos: "ism", meaning_tr: "cehennem", irab: "{Nâib-i fâil} merfû. بُرِّزَتْ fiilinin nâib-i fâili.", irab_short: "nâib-i fâil, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "لِمَن", transliteration: "limey", root: null, pos: "harf", meaning_tr: "kim için, kimin için", irab: "{Câr-mecrûr}. لِ harfi cer, مَنْ ismi mevsûl mecrûr.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "يَرَىٰ", transliteration: "yerâ", root: "ر-أ-ي", pos: "fil", meaning_tr: "görür", irab: "{Fiil-i muzâri}, I. bâb. مَنْ mevsûlünün sılası. Fâili mukadder (هُوَ).", irab_short: "muzâri, I. bâb", turkish_bridge: "Re'y, ri'ayet bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 37,
        arabic: "فَأَمَّا مَن طَغَىٰ",
        translation: "İşte, azıp",
        words: [
          { arabic: "فَأَمَّا", transliteration: "feemmâ", root: null, pos: "harf", meaning_tr: "işte, artık", irab: "{Fasıl atıf harfi} ve {harfi şart}. Tafsilat için kullanılır.", irab_short: "fasıl + şart", turkish_bridge: null, balagha_note: "İkili taksim başlatır (أما...وأما)" },
          { arabic: "مَن", transliteration: "men", root: null, pos: "ism", meaning_tr: "kim", irab: "{İsm-i mevsûl} merfû. Mübtedâ konumunda.", irab_short: "mevsûl, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "طَغَىٰ", transliteration: "tagâ", root: "ط-غ-ي", pos: "fil", meaning_tr: "azdı, haddi aştı", irab: "{Fiil-i mâzî}, I. bâb. مَنْ mevsûlünün sılası. Fâili mukadder (هُوَ).", irab_short: "mâzî, I. bâb", turkish_bridge: "Tuğyân bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 38,
        arabic: "وَءَاثَرَ ٱلۡحَيَوٰةَ ٱلدُّنۡيَا",
        translation: "dünya hayatını tercih edenin",
        words: [
          { arabic: "وَءَاثَرَ", transliteration: "veâsere", root: "أ-ث-ر", pos: "fil", meaning_tr: "ve tercih etti", irab: "{Ma'tûf ale's-sılati}. طَغَى fiiline atfedilmiş, sıla cümlesinin devamı.", irab_short: "ma'tûf, mâzî", turkish_bridge: "Eser, te'sîr bu kökten", balagha_note: null },
          { arabic: "ٱلۡحَيَوٰةَ", transliteration: "el-hayâte", root: "ح-ي-ي", pos: "ism", meaning_tr: "hayatı", irab: "{Mef'ûl bih} mansûb. آثَرَ fiilinin mef'ûlü.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Hayât bu kökten", balagha_note: null },
          { arabic: "ٱلدُّنۡيَا", transliteration: "ed-dünyâ", root: "د-ن-و", pos: "ism", meaning_tr: "dünya, yakın olan", irab: "{Sıfat} mansûb. الحَيَاةَ kelimesinin sıfatı.", irab_short: "sıfat, mensûb", turkish_bridge: "Dünya bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 39,
        arabic: "فَإِنَّ ٱلۡجَحِيمَ هِيَ ٱلۡمَأۡوَىٰ",
        translation: "varacağı yer şüphesiz cehennemdir.",
        words: [
          { arabic: "فَإِنَّ", transliteration: "feinne", root: null, pos: "harf", meaning_tr: "şüphesiz, muhakkak", irab: "{Fasıl atıf harfi} ve {hurûf-i müşebbehe}. Te'kîd ve tasdik için.", irab_short: "fasıl + inne", turkish_bridge: null, balagha_note: "Te'kîd için inne kullanımı" },
          { arabic: "ٱلۡجَحِيمَ", transliteration: "el-cehîme", root: "ج-ح-م", pos: "ism", meaning_tr: "cehennem", irab: "{İsm-i inne} mansûb. إنَّ harfinin ismi.", irab_short: "ism-i inne, mensûb", turkish_bridge: null, balagha_note: null },
          { arabic: "هِيَ", transliteration: "hiye", root: null, pos: "ism", meaning_tr: "o", irab: "{Fasl zamiri}. İsim ile haber arasında fasl için getirilmiş.", irab_short: "fasl zamiri", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلۡمَأۡوَىٰ", transliteration: "el-me'vâ", root: "أ-و-ي", pos: "ism", meaning_tr: "barınak, varılacak yer", irab: "{Haber-i inne} merfû. إنَّ harfinin haberi.", irab_short: "haber-i inne, merfû", turkish_bridge: null, balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 40,
        arabic: "وَأَمَّا مَنۡ خَافَ مَقَامَ رَبِّهِۦ وَنَهَى ٱلنَّفۡسَ عَنِ ٱلۡهَوَىٰ",
        translation: "Ama kim Rabbinin azametinden korkup da kendini kötülükten alıkoymuşsa,",
        words: [
          { arabic: "وَأَمَّا", transliteration: "veemmâ", root: null, pos: "harf", meaning_tr: "ve ama", irab: "{Atıf harfi} ve {harfi şart}. İkinci taksim başlatır.", irab_short: "atıf + şart", turkish_bridge: null, balagha_note: "İkili taksimin ikinci kısmı (mukabele)" },
          { arabic: "مَنۡ", transliteration: "men", root: null, pos: "ism", meaning_tr: "kim", irab: "{İsm-i mevsûl} merfû. Mübtedâ konumunda.", irab_short: "mevsûl, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "خَافَ", transliteration: "hâfe", root: "خ-و-ف", pos: "fil", meaning_tr: "korktu", irab: "{Fiil-i mâzî}, I. bâb. مَنْ mevsûlünün sılası. Fâili mukadder (هُوَ).", irab_short: "mâzî, I. bâb", turkish_bridge: "Havf bu kökten", balagha_note: null },
          { arabic: "مَقَامَ", transliteration: "meḳâme", root: "ق-و-م", pos: "ism", meaning_tr: "makamını, huzurunu", irab: "{Mef'ûl bih} mansûb. خَافَ fiilinin mef'ûlü.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Makâm, kıyâm bu kökten", balagha_note: null },
          { arabic: "رَبِّهِۦ", transliteration: "rabbihî", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbinin", irab: "{Muzâf ileyh} mecrûr. مَقَامَ kelimesine muzâf, هِ zamiri muzâf ileyh.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: "Rab, terbiye bu kökten", balagha_note: null },
          { arabic: "وَنَهَى", transliteration: "venahâ", root: "ن-ه-ي", pos: "fil", meaning_tr: "ve menetmişse", irab: "{Ma'tûf ale's-sılati}. خَافَ fiiline atfedilmiş, sıla cümlesinin devamı.", irab_short: "ma'tûf, mâzî", turkish_bridge: "Nehy bu kökten", balagha_note: null },
          { arabic: "ٱلنَّفۡسَ", transliteration: "en-nefse", root: "ن-ف-س", pos: "ism", meaning_tr: "nefsi", irab: "{Mef'ûl bih} mansûb. نَهَى fiilinin mef'ûlü.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Nefs bu kökten", balagha_note: null },
          { arabic: "عَنِ", transliteration: "'ani", root: null, pos: "harf", meaning_tr: "den, dan", irab: "{Harf-i cer}. Men' ve uzaklaştırma manası verir.", irab_short: "harf-i cer", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلۡهَوَىٰ", transliteration: "el-hevâ", root: "ه-و-ي", pos: "ism", meaning_tr: "heva, boş arzu", irab: "{Mecrûr} bi'l-harf. عَنْ harfi ile mecrûr.", irab_short: "mecrûr", turkish_bridge: "Hevâ bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 41,
        arabic: "فَإِنَّ ٱلۡجَنَّةَ هِيَ ٱلۡمَأۡوَىٰ",
        translation: "varacağı yer şüphesiz cennettir.",
        words: [
          { arabic: "فَإِنَّ", transliteration: "feinne", root: null, pos: "harf", meaning_tr: "şüphesiz, muhakkak", irab: "{Fasıl atıf harfi} ve {hurûf-i müşebbehe}. Te'kîd ve tasdik için.", irab_short: "fasıl + inne", turkish_bridge: null, balagha_note: "Bir önceki ayetle mükemmel tekrar (tıbâk)" },
          { arabic: "ٱلۡجَنَّةَ", transliteration: "el-cennete", root: "ج-ن-ن", pos: "ism", meaning_tr: "cennet", irab: "{İsm-i inne} mansûb. إنَّ harfinin ismi.", irab_short: "ism-i inne, mensûb", turkish_bridge: "Cinn, cinnet bu kökten", balagha_note: null },
          { arabic: "هِيَ", transliteration: "hiye", root: null, pos: "ism", meaning_tr: "o", irab: "{Fasl zamiri}. İsim ile haber arasında fasl için getirilmiş.", irab_short: "fasl zamiri", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلۡمَأۡوَىٰ", transliteration: "el-me'vâ", root: "أ-و-ي", pos: "ism", meaning_tr: "barınak, varılacak yer", irab: "{Haber-i inne} merfû. إنَّ harfinin haberi.", irab_short: "haber-i inne, merfû", turkish_bridge: null, balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 42,
        arabic: "يَسۡـَٔلُونَكَ عَنِ ٱلسَّاعَةِ أَيَّانَ مُرۡسَىٰهَا",
        translation: "Senden kıyametin ne zaman gelip çatacağını sorarlar.",
        words: [
          { arabic: "يَسۡـَٔلُونَكَ", transliteration: "yes'elûneke", root: "س-أ-ل", pos: "fil", meaning_tr: "sana soruyorlar", irab: "{Fiil-i muzâri}, I. bâb. Fâili وَاو الجَمَاعَة, mef'ûlü كَ zamiri.", irab_short: "muzâri, I. bâb", turkish_bridge: "Su'al bu kökten", balagha_note: "Yeni konuya ani geçiş" },
          { arabic: "عَنِ", transliteration: "'ani", root: null, pos: "harf", meaning_tr: "hakkında", irab: "{Harf-i cer}. Soru konusunu belirtir.", irab_short: "harf-i cer", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلسَّاعَةِ", transliteration: "es-sâ'ati", root: "س-و-ع", pos: "ism", meaning_tr: "kıyamet saati", irab: "{Mecrûr} bi'l-harf. عَنْ harfi ile mecrûr.", irab_short: "mecrûr", turkish_bridge: "Sâa bu kökten", balagha_note: null },
          { arabic: "أَيَّانَ", transliteration: "eyyâne", root: null, pos: "ism", meaning_tr: "ne zaman", irab: "{İsm-i istifhâm} zarf-ı zaman. Bedel-i iştimâl olarak السَّاعَةِ kelimesine bedel.", irab_short: "istifhâm, bedel", turkish_bridge: null, balagha_note: null },
          { arabic: "مُرۡسَىٰهَا", transliteration: "mürsâhâ", root: "ر-س-و", pos: "ism", meaning_tr: "onun demir atması, yerleşmesi", irab: "{Mübtedâ} merfû. أيَّانَ zarf-ı zamanın müteallikı, هَا zamiri muzâf ileyh.", irab_short: "mübtedâ, merfû", turkish_bridge: null, balagha_note: "Gemi teriminden kinaye (istiâre)" },
        ],
      },
    ],
    exercises: [],
  },
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 4 — SURE79 79:43-46
  // ═══════════════════════════════════════════════════════════
  {
    id: "S79-B04-naziat",
    title: "Sure79 (43-46)",
    titleAr: "سُورَة النازعات 43-46",
    stage: 2,
    level: 8,
    surah: 79,
    description: "Bu son bölüm, Hz. Peygamber'e kıyamet vaktini soranlara cevap verir ve Peygamber'in görevinin sadece uyarmak olduğunu belirtir. Kıyamet günü insanların dünya hayatının ne kadar kısa geldiğini anlatır.",
    verses: [
      {
        surah: 79, ayah: 43,
        arabic: "فِيمَ أَنتَ مِن ذِكۡرَىٰهَآ",
        translation: "Sen onu anlatmakla ne için meşgulsün?",
        words: [
          { arabic: "فِيمَ", transliteration: "fîme", root: null, pos: "harf", meaning_tr: "neye dair, hangi konuda", irab: "{İstifhâm edatı} \"mâ\" ile {harf-i cerr} \"fî\"nin birleşmesinden oluşmuş istifhâm edatı.", irab_short: "istifhâm edatı", turkish_bridge: null, balagha_note: "İnkârî istifhâm sanatı. Peygamber'in kıyamet vakti hakkında bilgi vermesinin uygun olmadığını ifade eder." },
          { arabic: "أَنتَ", transliteration: "ente", root: null, pos: "ism", meaning_tr: "sen", irab: "{Zamîr-i munfasıl} mübtedâ konumunda, merfû.", irab_short: "zamîr, mübtedâ", turkish_bridge: null, balagha_note: null },
          { arabic: "مِن", transliteration: "min", root: null, pos: "harf", meaning_tr: "den, dan", irab: "{Harf-i cerr} kendinden sonra gelen kelimeyi mecrûr yapar.", irab_short: "harf-i cerr", turkish_bridge: null, balagha_note: null },
          { arabic: "ذِكۡرَىٰهَآ", transliteration: "zikrâhâ", root: "ذ-ك-ر", pattern: "فِعْلَى", pos: "ism", meaning_tr: "onu anma, onu zikretme", irab: "{Masdar} \"min\" harfının mecrûru olarak mecrûr. Sonundaki \"hâ\" {zamîr-i muttasıl} kıyamete râci, muzâf ileyh konumunda.", irab_short: "masdar, mecrûr", turkish_bridge: "Zikir, zikretmek, tezkiye bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 44,
        arabic: "إِلَىٰ رَبِّكَ مُنتَهَىٰهَآ",
        translation: "Onun son bilgisi Rabbine aittir.",
        words: [
          { arabic: "إِلَىٰ", transliteration: "ilâ", root: null, pos: "harf", meaning_tr: "ye, ya doğru", irab: "{Harf-i cerr} intihâ-i gâye ifade eder, kendinden sonra gelen kelimeyi mecrûr yapar.", irab_short: "harf-i cerr", turkish_bridge: null, balagha_note: "Takdîm sanatı. Câr-mecrûr mübtedâdan önce getirilmiş." },
          { arabic: "رَبِّكَ", transliteration: "rabbike", root: "ر-ب-ب", pattern: "فَعْل", pos: "ism", meaning_tr: "senin Rabbin", irab: "{Muzâf} \"ilâ\" harfının mecrûru olarak mecrûr. Sonundaki \"ke\" {zamîr-i muttasıl} Peygamber'e râci, muzâf ileyh konumunda.", irab_short: "muzâf, mecrûr", turkish_bridge: "Rabb, rabbani bu kökten", balagha_note: null },
          { arabic: "مُنتَهَىٰهَآ", transliteration: "müntehâhâ", root: "ن-ه-ي", pattern: "مُفْتَعَل", pos: "ism", meaning_tr: "onun sonu, son noktası", irab: "{Mübtedâ} merfû. Sonundaki \"hâ\" {zamîr-i muttasıl} kıyamete râci, muzâf ileyh konumunda. Câr-mecrûr \"ilâ rabbike\" haberdir.", irab_short: "mübtedâ, merfû", turkish_bridge: "İntihâ, müntehi bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 45,
        arabic: "إِنَّمَآ أَنتَ مُنذِرُ مَن يَخۡشَىٰهَا",
        translation: "Sen sadece kıyametten korkanı uyarıcısın.",
        words: [
          { arabic: "إِنَّمَآ", transliteration: "innemâ", root: null, pos: "harf", meaning_tr: "sadece, ancak", irab: "{Harf-i hasr} \"innâ\" ile \"mâ\"nın birleşmesinden oluşmuş hasr edatı, sadece anlamı verir.", irab_short: "harf-i hasr", turkish_bridge: null, balagha_note: "Hasr sanatı. Peygamber'in görevi sadece uyarmakla sınırlıdır." },
          { arabic: "أَنتَ", transliteration: "ente", root: null, pos: "ism", meaning_tr: "sen", irab: "{Zamîr-i munfasıl} mübtedâ konumunda, merfû.", irab_short: "zamîr, mübtedâ", turkish_bridge: null, balagha_note: null },
          { arabic: "مُنذِرُ", transliteration: "münziru", root: "ن-ذ-ر", pattern: "مُفْعِل", pos: "ism", meaning_tr: "uyarıcı", irab: "{İsm-i fâil} haber konumunda, merfû. Muzâftır ve sonraki kelimeye izâfet edilmiş.", irab_short: "ism-i fâil, haber", turkish_bridge: "İnzar, nezir bu kökten", balagha_note: null },
          { arabic: "مَن", transliteration: "men", root: null, pos: "ism", meaning_tr: "kim, kimse", irab: "{İsm-i mevsûl} \"münziru\" kelimesinin muzâf ileyhi olarak mecrûr.", irab_short: "ism-i mevsûl, muzâf ileyh", turkish_bridge: null, balagha_note: null },
          { arabic: "يَخۡشَىٰهَا", transliteration: "yahşâhâ", root: "خ-ش-ي", pattern: "يَفْعَل", pos: "fil", meaning_tr: "ondan korkar", irab: "{Fiil-i muzâri} \"men\"in sılası konumunda. Sonundaki \"hâ\" {zamîr-i muttasıl} kıyamete râci, mef'ûl bih.", irab_short: "muzâri, sıla", turkish_bridge: "Haşyet bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 46,
        arabic: "كَأَنَّهُمۡ يَوۡمَ يَرَوۡنَهَا لَمۡ يَلۡبَثُوٓاْ إِلَّا عَشِيَّةً أَوۡ ضُحَىٰهَا",
        translation: "Kıyameti gördükleri gün dünyada ancak bir akşam yahut bir kuşluk vakti kadar kalmış gibi olacaklar.",
        words: [
          { arabic: "كَأَنَّهُمۡ", transliteration: "keennehüm", root: null, pos: "harf", meaning_tr: "onlar sanki", irab: "{Harf-i teşbîh ve te'kîd} \"ke\" teşbîh edatı ile \"ennehüm\" hurûf-i müşebbehenin birleşimi. \"Hüm\" zamîri ismi konumunda.", irab_short: "teşbîh edatı + inne", turkish_bridge: null, balagha_note: "Teşbîh sanatı. Dünya hayatının kısalığını vurgulamak için kullanılmış." },
          { arabic: "يَوۡمَ", transliteration: "yevme", root: "ي-و-م", pattern: "فَعْل", pos: "ism", meaning_tr: "günü", irab: "{Zarf-ı zaman} mensûb, \"yeravnehâ\" fiiline muzâftır.", irab_short: "zarf-ı zaman, muzâf", turkish_bridge: "Yevm bu kökten", balagha_note: null },
          { arabic: "يَرَوۡنَهَا", transliteration: "yeravnehâ", root: "ر-أ-ي", pattern: "يَفْعَل", pos: "fil", meaning_tr: "onu görürler", irab: "{Fiil-i muzâri} \"yevme\" kelimesinin muzâf ileyhi konumunda. Sonundaki \"hâ\" {zamîr-i muttasıl} kıyamete râci, mef'ûl bih.", irab_short: "muzâri, muzâf ileyh", turkish_bridge: "Rüyet, re'y bu kökten", balagha_note: null },
          { arabic: "لَمۡ", transliteration: "lem", root: null, pos: "harf", meaning_tr: "değil", irab: "{Harf-i nefy ve cezm} sonraki fiili nefy eder ve cezm yapar.", irab_short: "nefy ve cezm", turkish_bridge: null, balagha_note: null },
          { arabic: "يَلۡبَثُوٓاْ", transliteration: "yelbešû", root: "ل-ب-ث", pattern: "يَفْعَل", pos: "fil", meaning_tr: "kalmazlar", irab: "{Fiil-i muzâri} \"lem\" harfiyle meczûm. Vâv {zamîr-i muttasıl} fâil konumunda.", irab_short: "muzâri, meczûm", turkish_bridge: null, balagha_note: null },
          { arabic: "إِلَّا", transliteration: "illâ", root: null, pos: "harf", meaning_tr: "ancak, sadece", irab: "{Harf-i istisnâ} sonraki kelimeyi müstesnâ yapar.", irab_short: "harf-i istisnâ", turkish_bridge: null, balagha_note: null },
          { arabic: "عَشِيَّةً", transliteration: "aşiyyeten", root: "ع-ش-و", pattern: "فَعِيلَة", pos: "ism", meaning_tr: "akşam vakti", irab: "{Zarf-ı zaman} müstesnâ konumunda, mensûb.", irab_short: "zarf-ı zaman, müstesnâ", turkish_bridge: null, balagha_note: null },
          { arabic: "أَوۡ", transliteration: "ev", root: null, pos: "harf", meaning_tr: "veya", irab: "{Harf-i atf} tahyîr ifade eder.", irab_short: "harf-i atf", turkish_bridge: null, balagha_note: null },
          { arabic: "ضُحَىٰهَا", transliteration: "duhâhâ", root: "ض-ح-و", pattern: "فُعَل", pos: "ism", meaning_tr: "onun kuşluğu", irab: "{Zarf-ı zaman} \"aşiyyeten\" kelimesine atf edilmiş, mensûb. Sonundaki \"hâ\" {zamîr-i muttasıl} aşiyyeye râci, muzâf ileyh.", irab_short: "zarf-ı zaman, ma'tûf", turkish_bridge: "Duhâ bu kökten", balagha_note: "Tenâsüb sanatı. Gün içindeki zaman dilimlerinden akşam ve kuşluk birbirine uygun şekilde zikredilmiş." },
        ],
      },
    ],
    exercises: [],
  },
];

export default naziatLessons;
