// ═══════════════════════════════════════════════════════════
// GÂŞIYE SURESİ (88) — Pipeline Üretimi
// 2026-03-25: 2 bölüm, 26 ayet tam kapsam
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

const gasiyeLessons = [
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 1 — GÂŞIYE 88:1-15
  // ═══════════════════════════════════════════════════════════
  {
    id: "S88-B01-gasiye",
    title: "Gâşiye (1-15)",
    titleAr: "سُورَة الغاشية 1-15",
    stage: 2,
    level: 8,
    surah: 88,
    description: "Kıyamet günü inkarcıların düştükleri zillet ve azap ile müminlerin ulaştıkları nimet ve saadetin karşılaştırılması anlatılmaktadır.",
    verses: [
      {
        surah: 88, ayah: 1,
        arabic: "هَلۡ أَتَىٰكَ حَدِيثُ ٱلۡغَٰشِيَةِ",
        translation: "Her şeyi kaplayacak kıyametin haberi sana gelmedi mi?",
        words: [
          { arabic: "هَلۡ", transliteration: "hel", root: null, pos: "harf", meaning_tr: "mi, soru edatı", irab: "{İstifhâm harfi}. Cümlenin başında istifhâm anlamı veren edat.", irab_short: "istifhâm harfi", turkish_bridge: null, balagha_note: "İstifhâm-ı inkârî sanatı, muhatabın dikkatini çekmek için" },
          { arabic: "أَتَىٰكَ", transliteration: "etâke", root: "أ-ت-ي", pattern: "فَعَلَ", pos: "fil", meaning_tr: "sana geldi", irab: "{Fiil-i mâzî}, I. bâb. Sonundaki كَ zamiri {fâil} konumunda muttasıl zamir.", irab_short: "mâzî, I. bâb", turkish_bridge: null, balagha_note: null },
          { arabic: "حَدِيثُ", transliteration: "hadîsü", root: "ح-د-ث", pattern: "فَعِيل", pos: "ism", meaning_tr: "haberi, sözü", irab: "{Fâil} konumunda marfû. Muzâf olduğu için sonundaki tenvin hazfedilmiş.", irab_short: "fâil, marfû", turkish_bridge: "Hadis kelimesi bu kökten", balagha_note: null },
          { arabic: "ٱلۡغَٰشِيَةِ", transliteration: "el-ğâşiye", root: "ğ-ş-ي", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "örtücü, her şeyi kaplayan", irab: "{Muzâf ileyh} konumunda mecrûr. Kıyamet günü için kullanılan isim.", irab_short: "muzâf ileyh, mecrûr", turkish_bridge: null, balagha_note: "Kıyametin dehşetini ifade eden kinaye" },
        ],
      },
      {
        surah: 88, ayah: 2,
        arabic: "وُجُوهٞ يَوۡمَئِذٍ خَٰشِعَةٌ",
        translation: "O gün bir takım yüzler zillete bürünmüştür.",
        words: [
          { arabic: "وُجُوهٞ", transliteration: "vucûhün", root: "و-ج-ه", pattern: "فُعُول", pos: "ism", meaning_tr: "yüzler", irab: "{Mübtedâ} konumunda marfû. Çoğul formu.", irab_short: "mübtedâ, marfû", turkish_bridge: null, balagha_note: "Yüz, kişinin tüm durumunu temsil eden mecaz" },
          { arabic: "يَوۡمَئِذٍ", transliteration: "yevmeiẕin", root: "ي-و-م", pos: "ism", meaning_tr: "o gün", irab: "{Zarf-ı zaman} konumunda mensûb. إذ ile terkip halinde.", irab_short: "zarf-ı zaman, mensûb", turkish_bridge: "Yevm kelimesi bu kökten", balagha_note: null },
          { arabic: "خَٰشِعَةٌ", transliteration: "hâşi'atün", root: "خ-ش-ع", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "boyun eğmiş, alçalmış", irab: "{Haber} konumunda marfû. Mübtedânın haberi.", irab_short: "haber, marfû", turkish_bridge: "Huşû kelimesi bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 88, ayah: 3,
        arabic: "عَامِلَةٞ نَّاصِبَةٞ",
        translation: "Zor işler altında bitkin düşmüştür.",
        words: [
          { arabic: "عَامِلَةٞ", transliteration: "âmiletün", root: "ع-م-ل", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "çalışan", irab: "{Sıfat} konumunda marfû. وجوه kelimesinin sıfatı.", irab_short: "sıfat, marfû", turkish_bridge: "Amel, amil kelimeleri bu kökten", balagha_note: null },
          { arabic: "نَّاصِبَةٞ", transliteration: "nâsibetün", root: "ن-ص-ب", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "yorucu iş yapan", irab: "{Sıfat} konumunda marfû. وجوه kelimesinin ikinci sıfatı.", irab_short: "sıfat, marfû", turkish_bridge: "Nasb, mansûb terimleri bu kökten", balagha_note: "Âmile ile paralel yapı, tezât sanatı için hazırlık" },
        ],
      },
      {
        surah: 88, ayah: 4,
        arabic: "تَصۡلَىٰ نَارًا حَامِيَةٗ",
        translation: "Yakıcı ateşe yaslanırlar.",
        words: [
          { arabic: "تَصۡلَىٰ", transliteration: "taslâ", root: "ص-ل-ي", pattern: "تَفْعَل", pos: "fil", meaning_tr: "yanar, ateşe girer", irab: "{Fiil-i muzâri'} III. şahıs müennes. وجوه kelimesinin fiiline bağlı hâl cümlesi.", irab_short: "muzâri', III. şahıs müennes", turkish_bridge: null, balagha_note: null },
          { arabic: "نَارًا", transliteration: "nâran", root: "ن-و-ر", pos: "ism", meaning_tr: "ateş", irab: "{Mef'ûl bih} konumunda mensûb.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Nâr kelimesi bu kökten", balagha_note: null },
          { arabic: "حَامِيَةٗ", transliteration: "hâmiyeten", root: "ح-م-ي", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "kızgın, yakıcı", irab: "{Sıfat} konumunda mensûb. نار kelimesinin sıfatı.", irab_short: "sıfat, mensûb", turkish_bridge: null, balagha_note: "Ateşin şiddetini belirten mübalağa" },
        ],
      },
      {
        surah: 88, ayah: 5,
        arabic: "تُسۡقَىٰ مِنۡ عَيۡنٍ ءَانِيَةٖ",
        translation: "Kızgın bir kaynaktan içirilirler.",
        words: [
          { arabic: "تُسۡقَىٰ", transliteration: "tüskâ", root: "س-ق-ي", pattern: "تُفْعَل", pos: "fil", meaning_tr: "içirilir", irab: "{Fiil-i muzâri' mechûl} IV. bâb. Nâib-i fâil mahzûf.", irab_short: "muzâri' mechûl, IV. bâb", turkish_bridge: "Saki kelimesi bu kökten", balagha_note: null },
          { arabic: "مِنۡ", transliteration: "min", root: null, pos: "harf", meaning_tr: "den, dan", irab: "{Câr} harfi. Sonrasındaki kelimeyi merûr yapar.", irab_short: "câr harfi", turkish_bridge: null, balagha_note: null },
          { arabic: "عَيۡنٍ", transliteration: "aynin", root: "ع-ي-ن", pos: "ism", meaning_tr: "kaynak, pınar", irab: "{Mecrûr} konumunda. مِن harfi ile câr-mecrûr terkibi oluşturur.", irab_short: "mecrûr", turkish_bridge: "Ayn kelimesi bu kökten", balagha_note: null },
          { arabic: "ءَانِيَةٖ", transliteration: "âniyetin", root: "أ-ن-ي", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "kaynar, kızgın", irab: "{Sıfat} konumunda mecrûr. عين kelimesinin sıfatı.", irab_short: "sıfat, mecrûr", turkish_bridge: null, balagha_note: "Önceki âyetle paralel ses uyumu (حامية-آنية)" },
        ],
      },
      {
        surah: 88, ayah: 6,
        arabic: "لَّيۡسَ لَهُمۡ طَعَامٌ إِلَّا مِن ضَرِيعٖ",
        translation: "Semirtmeyen, açlığı gidermeyen kötü kokulu (kuru) bir dikenden başka yiyecekleri yoktur.",
        words: [
          { arabic: "لَّيۡسَ", transliteration: "leyse", root: null, pos: "fil", meaning_tr: "değildir", irab: "{Fiil-i nâkıs}. Nefy anlamı taşır, ismini mensûb, haberini marfû yapar.", irab_short: "fiil-i nâkıs", turkish_bridge: null, balagha_note: null },
          { arabic: "لَهُمۡ", transliteration: "lehüm", root: null, pos: "harf", meaning_tr: "onlar için", irab: "{Câr-mecrûr} terkibi. لَ harfi + هُم zamiri.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "طَعَامٌ", transliteration: "ta'âmün", root: "ط-ع-م", pattern: "فَعَال", pos: "ism", meaning_tr: "yiyecek", irab: "{Haber-i leyse} konumunda marfû.", irab_short: "haber-i leyse, marfû", turkish_bridge: "Taam kelimesi bu kökten", balagha_note: null },
          { arabic: "إِلَّا", transliteration: "illâ", root: null, pos: "harf", meaning_tr: "ancak, sadece", irab: "{İstisnâ harfi}. Sonrasında gelen kelimeyi müstesnâ yapar.", irab_short: "istisnâ harfi", turkish_bridge: null, balagha_note: null },
          { arabic: "مِن", transliteration: "min", root: null, pos: "harf", meaning_tr: "den", irab: "{Câr} harfi. Beyan anlamında kullanılmış.", irab_short: "câr harfi", turkish_bridge: null, balagha_note: null },
          { arabic: "ضَرِيعٖ", transliteration: "darî'in", root: "ض-ر-ع", pattern: "فَعِيل", pos: "ism", meaning_tr: "dikenli çalı", irab: "{Mecrûr} konumunda. مِن harfi ile câr-mecrûr oluşturur.", irab_short: "mecrûr", turkish_bridge: null, balagha_note: "Cehennem ehlinin yemeğinin kötülüğünü belirten kinaye" },
        ],
      },
      {
        surah: 88, ayah: 7,
        arabic: "لَّا يُسۡمِنُ وَلَا يُغۡنِي مِن جُوعٖ",
        translation: "O da ne besler, ne de açlığı giderir.",
        words: [
          { arabic: "لَّا", transliteration: "lâ", root: null, pos: "harf", meaning_tr: "değil", irab: "{Nefy harfi}. Fiili nefy eder.", irab_short: "nefy harfi", turkish_bridge: null, balagha_note: null },
          { arabic: "يُسۡمِنُ", transliteration: "yüsminü", root: "س-م-ن", pattern: "يُفْعِل", pos: "fil", meaning_tr: "semirtir", irab: "{Fiil-i muzâri'} IV. bâb. ضريع kelimesinin sıfat cümlesi.", irab_short: "muzâri', IV. bâb", turkish_bridge: "Semn, semin kelimeleri bu kökten", balagha_note: null },
          { arabic: "وَلَا", transliteration: "velâ", root: null, pos: "harf", meaning_tr: "ve değil", irab: "{Atıf harfi} وَ + {nefy harfi} لَا.", irab_short: "atıf + nefy harfi", turkish_bridge: null, balagha_note: null },
          { arabic: "يُغۡنِي", transliteration: "yuğnî", root: "غ-ن-ي", pattern: "يُفْعِل", pos: "fil", meaning_tr: "giderir, fayda verir", irab: "{Fiil-i muzâri'} IV. bâb. لَا harfi ile nefy edilmiş.", irab_short: "muzâri', IV. bâb", turkish_bridge: "Ğınâ, muğnî kelimeleri bu kökten", balagha_note: null },
          { arabic: "مِن", transliteration: "min", root: null, pos: "harf", meaning_tr: "den", irab: "{Câr} harfi. Sebep anlamında.", irab_short: "câr harfi", turkish_bridge: null, balagha_note: null },
          { arabic: "جُوعٖ", transliteration: "cû'in", root: "ج-و-ع", pattern: "فُعْل", pos: "ism", meaning_tr: "açlık", irab: "{Mecrûr} konumunda. مِن harfi ile câr-mecrûr oluşturur.", irab_short: "mecrûr", turkish_bridge: null, balagha_note: "Önceki fiille beraber tıbâk sanatı (doyurmama-açlık gidermeme)" },
        ],
      },
      {
        surah: 88, ayah: 8,
        arabic: "وُجُوهٞ يَوۡمَئِذٖ نَّاعِمَةٞ",
        translation: "İnanmış olanların yüzleri, o gün, pırıl pırıldır.",
        words: [
          { arabic: "وُجُوهٞ", transliteration: "vucûhün", root: "و-ج-ه", pattern: "فُعُول", pos: "ism", meaning_tr: "yüzler", irab: "{Mübtedâ} konumunda marfû. İkinci grup yüzler için.", irab_short: "mübtedâ, marfû", turkish_bridge: null, balagha_note: "2. âyetteki وجوه ile tıbâk sanatı" },
          { arabic: "يَوۡمَئِذٖ", transliteration: "yevmeiẕin", root: "ي-و-م", pos: "ism", meaning_tr: "o gün", irab: "{Zarf-ı zaman} konumında mensûb.", irab_short: "zarf-ı zaman, mensûb", turkish_bridge: "Yevm kelimesi bu kökten", balagha_note: null },
          { arabic: "نَّاعِمَةٞ", transliteration: "nâ'imetün", root: "ن-ع-م", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "nimetli, mutlu", irab: "{Haber} konumunda marfû. Mübtedânın haberi.", irab_short: "haber, marfû", turkish_bridge: "Nimet, na'îm kelimeleri bu kökten", balagha_note: "خاشعة ile tıbâk sanatı (zillet-mutluluk karşıtlığı)" },
        ],
      },
      {
        surah: 88, ayah: 9,
        arabic: "لِّسَعۡيِهَا رَاضِيَةٞ",
        translation: "Yaptıklarından hoşnuddurlar.",
        words: [
          { arabic: "لِّسَعۡيِهَا", transliteration: "li-sa'yihâ", root: "س-ع-ي", pattern: "فَعْي", pos: "ism", meaning_tr: "çabalarından, amellerinden", irab: "{Câr-mecrûr} terkibi. لِ harfi + سعي ismi + ها zamiri muzâf ileyh.", irab_short: "câr-mecrûr", turkish_bridge: "Sa'y kelimesi bu kökten", balagha_note: null },
          { arabic: "رَاضِيَةٞ", transliteration: "râdıyetün", root: "ر-ض-ي", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "hoşnut, razı", irab: "{Hâl} konumunda mensûb. وجوه kelimesinin hâli.", irab_short: "hâl, mensûb", turkish_bridge: "Rıza kelimesi bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 88, ayah: 10,
        arabic: "فِي جَنَّةٍ عَالِيَةٖ",
        translation: "Yüksek bir cennettedirler.",
        words: [
          { arabic: "فِي", transliteration: "fî", root: null, pos: "harf", meaning_tr: "içinde, de", irab: "{Câr} harfi. Mekân anlamında.", irab_short: "câr harfi", turkish_bridge: null, balagha_note: null },
          { arabic: "جَنَّةٍ", transliteration: "cennetin", root: "ج-ن-ن", pattern: "فَعْلَة", pos: "ism", meaning_tr: "cennet", irab: "{Mecrûr} konumunda. فِ harfi ile câr-mecrûr oluşturur.", irab_short: "mecrûr", turkish_bridge: "Cennet kelimesi bu kökten", balagha_note: null },
          { arabic: "عَالِيَةٖ", transliteration: "âliyetin", root: "ع-ل-و", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "yüksek", irab: "{Sıfat} konumunda mecrûr. جنة kelimesinin sıfatı.", irab_short: "sıfat, mecrûr", turkish_bridge: "Âlî, yüce kelimeleri bu kökten", balagha_note: "Cennetin yüceliğini belirten sıfat" },
        ],
      },
      {
        surah: 88, ayah: 11,
        arabic: "لَّا تَسۡمَعُ فِيهَا لَٰغِيَةٗ",
        translation: "Orada boş söz işitmezler.",
        words: [
          { arabic: "لَّا", transliteration: "lâ", root: null, pos: "harf", meaning_tr: "değil", irab: "{Nefy harfi}. Fiili nefy eder.", irab_short: "nefy harfi", turkish_bridge: null, balagha_note: null },
          { arabic: "تَسۡمَعُ", transliteration: "tesme'u", root: "س-م-ع", pattern: "تَفْعَل", pos: "fil", meaning_tr: "işitir", irab: "{Fiil-i muzâri'} I. bâb. Fâil mahzûf (أنت veya هي).", irab_short: "muzâri', I. bâb", turkish_bridge: "Sem', semî' kelimeleri bu kökten", balagha_note: null },
          { arabic: "فِيهَا", transliteration: "fîhâ", root: null, pos: "harf", meaning_tr: "orada", irab: "{Câr-mecrûr} terkibi. فِ harfi + ها zamiri.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "لَٰغِيَةٗ", transliteration: "lâğiyeten", root: "ل-غ-و", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "boş söz, anlamsız lakırdı", irab: "{Mef'ûl bih} konumunda mensûb.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Lağv kelimesi bu kökten", balagha_note: "Cennetin sakinliği ve temizliğini belirten kinaye" },
        ],
      },
      {
        surah: 88, ayah: 12,
        arabic: "فِيهَا عَيۡنٞ جَارِيَةٞ",
        translation: "Orada akan kaynak vardır.",
        words: [
          { arabic: "فِيهَا", transliteration: "fîhâ", root: null, pos: "harf", meaning_tr: "orada", irab: "{Câr-mecrûr} terkibi. Haber konumunda mukaddem.", irab_short: "câr-mecrûr, haber", turkish_bridge: null, balagha_note: null },
          { arabic: "عَيۡنٞ", transliteration: "aynün", root: "ع-ي-ن", pos: "ism", meaning_tr: "kaynak, pınar", irab: "{Mübtedâ} konumunda marfû. Mu'ahhar mübtedâ.", irab_short: "mübtedâ, marfû", turkish_bridge: "Ayn kelimesi bu kökten", balagha_note: "5. âyetteki عين ile tıbâk sanatı (cehennem-cennet karşıtlığı)" },
          { arabic: "جَارِيَةٞ", transliteration: "câriyetün", root: "ج-ر-ي", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "akan", irab: "{Sıfat} konumunda marfû. عين kelimesinin sıfatı.", irab_short: "sıfat, marfû", turkish_bridge: null, balagha_note: "Suyun canlılığını belirten sıfat" },
        ],
      },
      {
        surah: 88, ayah: 13,
        arabic: "فِيهَا سُرُرٞ مَّرۡفُوعَةٞ",
        translation: "Orada, yükseltilmiş tahtlar vardır.",
        words: [
          { arabic: "فِيهَا", transliteration: "fîhâ", root: null, pos: "harf", meaning_tr: "orada", irab: "{Câr-mecrûr} terkibi. Haber konumunda mukaddem.", irab_short: "câr-mecrûr, haber", turkish_bridge: null, balagha_note: "Önceki âyetle tekrar sanatı" },
          { arabic: "سُرُرٞ", transliteration: "sürürün", root: "س-ر-ر", pattern: "فُعُل", pos: "ism", meaning_tr: "tahtlar, divanlar", irab: "{Mübtedâ} konumunda marfû. سرير kelimesinin çoğulu.", irab_short: "mübtedâ, marfû", turkish_bridge: "Serîr kelimesi bu kökten", balagha_note: null },
          { arabic: "مَّرۡفُوعَةٞ", transliteration: "merfû'atün", root: "ر-ف-ع", pattern: "مَفْعُولَة", pos: "ism", meaning_tr: "yükseltilmiş", irab: "{Sıfat} konumunda marfû. سرر kelimesinin sıfatı.", irab_short: "sıfat, marfû", turkish_bridge: "Ref', merfû' terimleri bu kökten", balagha_note: "Cennet nimetlerinin yüceliğini belirten vasıf" },
        ],
      },
      {
        surah: 88, ayah: 14,
        arabic: "وَأَكۡوَابٞ مَّوۡضُوعَةٞ",
        translation: "Yerleştirilmiş kaseler,",
        words: [
          { arabic: "وَأَكۡوَابٞ", transliteration: "ve ekvâbün", root: "ك-و-ب", pattern: "أَفْعَال", pos: "ism", meaning_tr: "ve kaseler", irab: "{Atıf} harfi وَ + {ma'tûf} konumunda marfû. كوب kelimesinin çoğulu.", irab_short: "ma'tûf, marfû", turkish_bridge: null, balagha_note: null },
          { arabic: "مَّوۡضُوعَةٞ", transliteration: "mevdû'atün", root: "و-ض-ع", pattern: "مَفْعُولَة", pos: "ism", meaning_tr: "yerleştirilmiş, konulmuş", irab: "{Sıfat} konumunda marfû. أكواب kelimesinin sıfatı.", irab_short: "sıfat, marfû", turkish_bridge: "Vad', mevdû' kelimeleri bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 88, ayah: 15,
        arabic: "وَنَمَارِقُ مَصۡفُوفَةٞ",
        translation: "Sıra sıra yastıklar,",
        words: [
          { arabic: "وَنَمَارِقُ", transliteration: "ve nemâriku", root: "ن-م-ر-ق", pattern: "فَعَالِق", pos: "ism", meaning_tr: "ve yastıklar", irab: "{Atıf} harfi وَ + {ma'tûf} konumunda marfû. نمرقة kelimesinin çoğulu.", irab_short: "ma'tûf, marfû", turkish_bridge: null, balagha_note: null },
          { arabic: "مَصۡفُوفَةٞ", transliteration: "masfûfatün", root: "ص-ف-ف", pattern: "مَفْعُولَة", pos: "ism", meaning_tr: "dizilmiş, sıralanmış", irab: "{Sıfat} konumunda marfû. نمارق kelimesinin sıfatı.", irab_short: "sıfat, marfû", turkish_bridge: "Saff, saflar kelimeleri bu kökten", balagha_note: "Cennet düzeninin güzelliğini belirten tasvir" },
        ],
      },
    ],
    exercises: [],
  },
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 2 — GÂŞIYE 88:16-26
  // ═══════════════════════════════════════════════════════════
  {
    id: "S88-B02-gasiye",
    title: "Gâşiye (16-26)",
    titleAr: "سُورَة الغاشية 16-26",
    stage: 2,
    level: 8,
    surah: 88,
    description: "Cennet nimetlerinin devamından sonra kozmik delillere işaret edilerek, Peygamber'in vazifesi ve ahiret hesabının sadece Allah'a ait olduğu vurgulanmaktadır.",
    verses: [
      {
        surah: 88, ayah: 16,
        arabic: "وَزَرَابِيُّ مَبۡثُوثَةٌ",
        translation: "Serilmiş, yumuşak tüylü halılar vardır.",
        words: [
          { arabic: "وَزَرَابِيُّ", transliteration: "vezarâbiyyü", root: "ز-ر-ب", pattern: "فَعَالِيُّ", pos: "ism", meaning_tr: "yumuşak tüylü halılar, kıymetli döşekler", irab: "{Atıf} vâvı ile önceki cümleye bağlanan {mübtedâ} olup {merfû} haldedir. Tekil kalıbında çoğul anlamlı kelimedir.", irab_short: "mübtedâ, merfû", turkish_bridge: "Zarabet, zarif bu kökten olabilir", balagha_note: "Cennet nimetlerinin çeşitliliği ve zenginliğini göstermek için mübalağa" },
          { arabic: "مَبۡثُوثَةٌ", transliteration: "mebsûse", root: "ب-ث-ث", pattern: "مَفْعُولَة", pos: "ism", meaning_tr: "saçılmış, serilmiş, yaygın halde", irab: "{Haber} vazifesinde olup {merfû} haldedir. Sıfat-ı mefûl kalıbında olup pasif anlam taşımaktadır.", irab_short: "haber, merfû", turkish_bridge: "Bes, yayma anlamından", balagha_note: null },
        ],
      },
      {
        surah: 88, ayah: 17,
        arabic: "أَفَلَا يَنظُرُونَ إِلَى ٱلۡإِبِلِ كَيۡفَ خُلِقَتۡ",
        translation: "Bu insanlar, devenin nasıl yaratıldığına bakmazlar mı?",
        words: [
          { arabic: "أَفَلَا", transliteration: "efelâ", root: null, pos: "harf", meaning_tr: "acaba değil mi, öyleyse neden değil", irab: "{İstifhâm hemzesi} ile {atıf vâvı} ve {nefy lâmı} birleşimi olup inkârî istifhâm ifade etmektedir.", irab_short: "istifhâm-i inkârî", turkish_bridge: null, balagha_note: "İnkârî istifhâm ile düşünmeye davet ve te'kîd" },
          { arabic: "يَنظُرُونَ", transliteration: "yanzurûne", root: "ن-ظ-ر", pattern: "يَفْعُلُونَ", pos: "fil", meaning_tr: "bakarlar, düşünürler, dikkat ederler", irab: "{Fiil-i muzâri} olup I. bâbtan gelmektedir. {Fâil}i müstetir olan vâv-ı cemaat zamiri içermektedir.", irab_short: "muzâri, I. bâb", turkish_bridge: "Nazar, nazır bu kökten", balagha_note: null },
          { arabic: "إِلَى", transliteration: "ilâ", root: null, pos: "harf", meaning_tr: "doğru, -e", irab: "{Harf-i cer} olup kendinden sonraki kelimeyi {mecrûr} yapmaktadır.", irab_short: "harf-i cer", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلۡإِبِلِ", transliteration: "el-ibil", root: "ب-ل-ل", pattern: "فِعِل", pos: "ism", meaning_tr: "develer", irab: "{Mecrûr} olup harf-i cer tarafından cerredilmiştir. Müfred kalıbında çoğul anlamlı isimdir.", irab_short: "mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "كَيۡفَ", transliteration: "keyfe", root: null, pos: "harf", meaning_tr: "nasıl", irab: "{İsm-i istifhâm} olup keyfiyyet sorma edatıdır. {Hâl} vazifesinde mensûb mahallindedir.", irab_short: "istifhâm, hâl", turkish_bridge: null, balagha_note: "Yaratılış mucizesine dikkat çekmek için keyfiyyet sorusu" },
          { arabic: "خُلِقَتۡ", transliteration: "hulıkat", root: "خ-ل-ق", pattern: "فُعِلَت", pos: "fil", meaning_tr: "yaratıldı", irab: "{Fiil-i mâzî} olup {meczûm li'l-mechûl} sığasındadır. I. bâbtan gelen fiildir.", irab_short: "mâzî mechûl, I. bâb", turkish_bridge: "Halk, halik, mahluk bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 88, ayah: 18,
        arabic: "وَإِلَى ٱلسَّمَآءِ كَيۡفَ رُفِعَتۡ",
        translation: "Göğün nasıl yükseltildiğine?",
        words: [
          { arabic: "وَإِلَى", transliteration: "ve ilâ", root: null, pos: "harf", meaning_tr: "ve doğru", irab: "{Atıf vâvı} ile {harf-i cer} birleşimi olup önceki câr-mecrûra atfedilmektedir.", irab_short: "atıf + cer harfi", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلسَّمَآءِ", transliteration: "es-semâi", root: "س-م-و", pattern: "فَعَال", pos: "ism", meaning_tr: "gök, sema", irab: "{Mecrûr} olup harf-i cer tarafından cerredilmiştir. Müfred kalıbında tekil anlamlı isimdir.", irab_short: "mecrûr", turkish_bridge: "Sema bu kökten", balagha_note: null },
          { arabic: "كَيۡفَ", transliteration: "keyfe", root: null, pos: "harf", meaning_tr: "nasıl", irab: "{İsm-i istifhâm} olup keyfiyyet sorma edatıdır. {Hâl} vazifesinde mensûb mahallindedir.", irab_short: "istifhâm, hâl", turkish_bridge: null, balagha_note: null },
          { arabic: "رُفِعَتۡ", transliteration: "rufi'at", root: "ر-ف-ع", pattern: "فُعِلَت", pos: "fil", meaning_tr: "yükseltildi", irab: "{Fiil-i mâzî} olup {meczûm li'l-mechûl} sığasındadır. I. bâbtan gelen fiildir.", irab_short: "mâzî mechûl, I. bâb", turkish_bridge: "Ref', merfû' bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 88, ayah: 19,
        arabic: "وَإِلَى ٱلۡجِبَالِ كَيۡفَ نُصِبَتۡ",
        translation: "Dağların nasıl dikildiğine?",
        words: [
          { arabic: "وَإِلَى", transliteration: "ve ilâ", root: null, pos: "harf", meaning_tr: "ve doğru", irab: "{Atıf vâvı} ile {harf-i cer} birleşimi olup önceki câr-mecrûra atfedilmektedir.", irab_short: "atıf + cer harfi", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلۡجِبَالِ", transliteration: "el-cibâl", root: "ج-ب-ل", pattern: "فِعَال", pos: "ism", meaning_tr: "dağlar", irab: "{Mecrûr} olup harf-i cer tarafından cerredilmiştir. Cem'-i kesîr kalıbında çoğul isimdir.", irab_short: "mecrûr", turkish_bridge: "Cebell bu kökten", balagha_note: null },
          { arabic: "كَيۡفَ", transliteration: "keyfe", root: null, pos: "harf", meaning_tr: "nasıl", irab: "{İsm-i istifhâm} olup keyfiyyet sorma edatıdır. {Hâl} vazifesinde mensûb mahallindedir.", irab_short: "istifhâm, hâl", turkish_bridge: null, balagha_note: null },
          { arabic: "نُصِبَتۡ", transliteration: "nusıbet", root: "ن-ص-ب", pattern: "فُعِلَت", pos: "fil", meaning_tr: "dikildi, kuruldu", irab: "{Fiil-i mâzî} olup {meczûm li'l-mechûl} sığasındadır. I. bâbtan gelen fiildir.", irab_short: "mâzî mechûl, I. bâb", turkish_bridge: "Nasb, mensûb bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 88, ayah: 20,
        arabic: "وَإِلَى ٱلۡأَرۡضِ كَيۡفَ سُطِحَتۡ",
        translation: "Yerin nasıl yayıldığına bir bakmazlar mı?",
        words: [
          { arabic: "وَإِلَى", transliteration: "ve ilâ", root: null, pos: "harf", meaning_tr: "ve doğru", irab: "{Atıf vâvı} ile {harf-i cer} birleşimi olup önceki câr-mecrûra atfedilmektedir.", irab_short: "atıf + cer harfi", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلۡأَرۡضِ", transliteration: "el-ard", root: "أ-ر-ض", pattern: "فَعْل", pos: "ism", meaning_tr: "yer, toprak", irab: "{Mecrûr} olup harf-i cer tarafından cerredilmiştir. Müfred kalıbında tekil anlamlı isimdir.", irab_short: "mecrûr", turkish_bridge: "Arz bu kökten", balagha_note: null },
          { arabic: "كَيۡفَ", transliteration: "keyfe", root: null, pos: "harf", meaning_tr: "nasıl", irab: "{İsm-i istifhâm} olup keyfiyyet sorma edatıdır. {Hâl} vazifesinde mensûb mahallindedir.", irab_short: "istifhâm, hâl", turkish_bridge: null, balagha_note: null },
          { arabic: "سُطِحَتۡ", transliteration: "sutihat", root: "س-ط-ح", pattern: "فُعِلَت", pos: "fil", meaning_tr: "yayıldı, düzleştirildi", irab: "{Fiil-i mâzî} olup {meczûm li'l-mechûl} sığasındadır. I. bâbtan gelen fiildir.", irab_short: "mâzî mechûl, I. bâb", turkish_bridge: "Satıh, satah bu kökten", balagha_note: "Dört kozmik unsurun (deve, gök, dağ, yer) art arda zikredilmesi ile tedrîc ve tenasuk" },
        ],
      },
      {
        surah: 88, ayah: 21,
        arabic: "فَذَكِّرۡ إِنَّمَآ أَنتَ مُذَكِّرٞ",
        translation: "Sen öğüt ver! Esasen sen sadece bir öğütçüsün.",
        words: [
          { arabic: "فَذَكِّرۡ", transliteration: "fezekkir", root: "ذ-ك-ر", pattern: "فَعِّلْ", pos: "fil", meaning_tr: "öğüt ver, hatırlat", irab: "{Te'kîd vâvı} ile başlayan {fiil-i emr} olup II. bâbtan gelmektedir. {Fâil}i müstetir olan {ente} zamiridir.", irab_short: "emir, II. bâb", turkish_bridge: "Zikir, zâkir bu kökten", balagha_note: null },
          { arabic: "إِنَّمَآ", transliteration: "innemâ", root: null, pos: "harf", meaning_tr: "ancak, sadece, şüphesiz", irab: "{Harf-i hasr} olup kasrı ifade etmektedir. {İnne} ile {mâ} harfinin birleşiminden oluşmuştur.", irab_short: "harf-i hasr", turkish_bridge: null, balagha_note: "Hasr edatı ile Peygamber'in vazifesini sınırlama" },
          { arabic: "أَنتَ", transliteration: "ente", root: null, pos: "ism", meaning_tr: "sen", irab: "{Zamir-i munfasıl} olup {müsned ileyh} vazifesindedir. {İnnemâ} kasır edatından sonra {mübtedâ} mahallindedir.", irab_short: "zamir, mübtedâ mahalli", turkish_bridge: null, balagha_note: null },
          { arabic: "مُذَكِّرٞ", transliteration: "müzekkir", root: "ذ-ك-ر", pattern: "مُفَعِّل", pos: "ism", meaning_tr: "öğüt veren, hatırlatan", irab: "{Haber} vazifesinde olup {merfû} haldedir. {İsm-i fâil} kalıbında olup süreklilik anlamı taşımaktadır.", irab_short: "haber, merfû", turkish_bridge: "Müzekkir bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 88, ayah: 22,
        arabic: "لَّسۡتَ عَلَيۡهِم بِمُصَيۡطِرٍ",
        translation: "Sen, onlara zor kullanacak değilsin.",
        words: [
          { arabic: "لَّسۡتَ", transliteration: "leste", root: "ل-ي-س", pattern: "لَيْسَ", pos: "fil", meaning_tr: "değilsin", irab: "{Fiil-i nâkıs} olan {leyse} fiilinin ikinci tekil şahıs çekimidir. İsmine {ente} zamiri {fâil} olarak bitişmiştir.", irab_short: "fiil-i nâkıs", turkish_bridge: null, balagha_note: null },
          { arabic: "عَلَيۡهِم", transliteration: "aleyhim", root: null, pos: "harf", meaning_tr: "onların üzerine", irab: "{Harf-i cer} olan {alâ} ile {zamir-i muttasıl} olan {hüm} zamirinin birleşimidir. {Câr-mecrûr} terkibi oluşturmaktadır.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "بِمُصَيۡطِرٍ", transliteration: "bimüsaytir", root: "س-ط-ر", pattern: "مُفَيْعِل", pos: "ism", meaning_tr: "zorla yöneten, baskı yapan", irab: "{Bâ-i zâide} ile {haber-i leyse} birleşimi olup {mensûb} mahallidedir. {İsm-i fâil} kalıbında olup mübâlağa ifade etmektedir.", irab_short: "haber-i leyse, mensûb mahalli", turkish_bridge: "Satır, müsattır bu kökten", balagha_note: "Bâ-i zâide ile nefy kuvvetlendirilmiş" },
        ],
      },
      {
        surah: 88, ayah: 23,
        arabic: "إِلَّا مَن تَوَلَّىٰ وَكَفَرَ",
        translation: "Ancak kim yüz çevirir ve inkar ederse,",
        words: [
          { arabic: "إِلَّا", transliteration: "illâ", root: null, pos: "harf", meaning_tr: "ancak, fakat", irab: "{Harf-i istisnâ} olup müstesnâyı dahil eden edat vazifesindedir. Burada {istisna-i munkatı'} vardır.", irab_short: "harf-i istisnâ", turkish_bridge: null, balagha_note: null },
          { arabic: "مَن", transliteration: "men", root: null, pos: "ism", meaning_tr: "kimse", irab: "{İsm-i mevsûl} olup âkıl için kullanılır. {Müstesnâ} vazifesinde olup {mensûb} mahallidedir.", irab_short: "mevsûl, müstesnâ", turkish_bridge: null, balagha_note: null },
          { arabic: "تَوَلَّىٰ", transliteration: "tevellâ", root: "و-ل-ي", pattern: "تَفَعَّلَ", pos: "fil", meaning_tr: "yüz çevirdi, arkasını döndü", irab: "{Fiil-i mâzî} olup V. bâbtan gelmektedir. {Fâil}i müstetir olup mevsûle râci' zamirdir.", irab_short: "mâzî, V. bâb", turkish_bridge: "Veli, velayet bu kökten", balagha_note: null },
          { arabic: "وَكَفَرَ", transliteration: "ve kefera", root: "ك-ف-ر", pattern: "فَعَلَ", pos: "fil", meaning_tr: "ve inkar etti", irab: "{Atıf vâvı} ile önceki fiile atfedilen {fiil-i mâzî} olup I. bâbtan gelmektedir.", irab_short: "mâzî, I. bâb", turkish_bridge: "Küfür, kâfir bu kökten", balagha_note: "İki fiilin art arda gelmesi ile mütevellî ve kâfirin durumunu pekiştirme" },
        ],
      },
      {
        surah: 88, ayah: 24,
        arabic: "فَيُعَذِّبُهُ ٱللَّهُ ٱلۡعَذَابَ ٱلۡأَكۡبَرَ",
        translation: "Allah onu en büyük azaba uğratır.",
        words: [
          { arabic: "فَيُعَذِّبُهُ", transliteration: "feyü'azzibüh", root: "ع-ذ-ب", pattern: "يُفَعِّل", pos: "fil", meaning_tr: "ona azap eder", irab: "{Te'kîd vâvı} ile başlayan {fiil-i muzâri} olup II. bâbtan gelmektedir. {Mef'ûl bih} olan {hü} zamiri bitişmiştir.", irab_short: "muzâri, II. bâb", turkish_bridge: "Azâb, mu'azzeb bu kökten", balagha_note: null },
          { arabic: "ٱللَّهُ", transliteration: "Allâhü", root: "أ-ل-ه", pos: "ism", meaning_tr: "Allah", irab: "{Fâil} vazifesinde olup {merfû} haldedir. Celâle lafzı olarak özel isimdir.", irab_short: "fâil, merfû", turkish_bridge: "İlah bu kökten", balagha_note: null },
          { arabic: "ٱلۡعَذَابَ", transliteration: "el-azâbe", root: "ع-ذ-ب", pattern: "فَعَال", pos: "ism", meaning_tr: "azabı", irab: "{Mef'ûl-i mutlak} vazifesinde olup {mensûb} haldedir. Te'kîd için getirilmiş masdar konumundadır.", irab_short: "mef'ûl-i mutlak, mensûb", turkish_bridge: "Azâb bu kökten", balagha_note: null },
          { arabic: "ٱلۡأَكۡبَرَ", transliteration: "el-ekber", root: "ك-ب-ر", pattern: "الأَفْعَل", pos: "ism", meaning_tr: "en büyük", irab: "{Sıfat} vazifesinde olup mevsûfuna tâbi' olarak {mensûb} haldedir. {İsm-i tafdîl} kalıbındadır.", irab_short: "sıfat, mensûb", turkish_bridge: "Kebîr, kübrâ bu kökten", balagha_note: "İsm-i tafdîl ile azabın şiddetini ifade" },
        ],
      },
      {
        surah: 88, ayah: 25,
        arabic: "إِنَّ إِلَيۡنَآ إِيَابَهُمۡ",
        translation: "Doğrusu onların dönüşü Bize'dir.",
        words: [
          { arabic: "إِنَّ", transliteration: "inne", root: null, pos: "harf", meaning_tr: "şüphesiz, gerçekten", irab: "{Harf-i müşebbehe bi'l-fi'l} olup te'kîd için kullanılan {inne} harfidir. İsmini nasbeder, haberini ref'eder.", irab_short: "harf-i te'kîd", turkish_bridge: null, balagha_note: null },
          { arabic: "إِلَيۡنَآ", transliteration: "ileynâ", root: null, pos: "harf", meaning_tr: "bize doğru", irab: "{Harf-i cer} olan {ilâ} ile {zamir-i muttasıl} olan {nâ} zamirinin birleşimidir. {Haber-i mukaddem} vazifesindedir.", irab_short: "câr-mecrûr, haber mukaddem", turkish_bridge: null, balagha_note: "Takdîm ile Allah'a dönüşü vurgulama" },
          { arabic: "إِيَابَهُمۡ", transliteration: "iyâbehüm", root: "أ-و-ب", pattern: "فِعَال", pos: "ism", meaning_tr: "onların dönüşü", irab: "{İsm-i inne} vazifesinde olup {mensûb} haldedir. {Hüm} zamiri kendisine {muzâf ileyh} olarak bitişmiştir.", irab_short: "ism-i inne, mensûb", turkish_bridge: "Evbe, tevbe bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 88, ayah: 26,
        arabic: "ثُمَّ إِنَّ عَلَيۡنَا حِسَابَهُم",
        translation: "Şüphesiz sonra hesaplarını görmek de Bize düşmektedir.",
        words: [
          { arabic: "ثُمَّ", transliteration: "sümme", root: null, pos: "harf", meaning_tr: "sonra, daha sonra", irab: "{Harf-i atıf} olup tertîb ve terâhî ile atıf yapan edattır. Zaman gecikmesi ifade eder.", irab_short: "harf-i atıf", turkish_bridge: null, balagha_note: null },
          { arabic: "إِنَّ", transliteration: "inne", root: null, pos: "harf", meaning_tr: "şüphesiz", irab: "{Harf-i müşebbehe bi'l-fi'l} olup te'kîd için kullanılan {inne} harfidir. İsmini nasbeder, haberini ref'eder.", irab_short: "harf-i te'kîd", turkish_bridge: null, balagha_note: null },
          { arabic: "عَلَيۡنَا", transliteration: "aleynâ", root: null, pos: "harf", meaning_tr: "bizim üzerimize", irab: "{Harf-i cer} olan {alâ} ile {zamir-i muttasıl} olan {nâ} zamirinin birleşimidir. {Haber-i mukaddem} vazifesindedir.", irab_short: "câr-mecrûr, haber mukaddem", turkish_bridge: null, balagha_note: "Takdîm ile hesap görmenin Allah'a ait olduğunu vurgulama" },
          { arabic: "حِسَابَهُم", transliteration: "hisâbehüm", root: "ح-س-ب", pattern: "فِعَال", pos: "ism", meaning_tr: "onların hesabı", irab: "{İsm-i inne} vazifesinde olup {mensûb} haldedir. {Hüm} zamiri kendisine {muzâf ileyh} olarak bitişmiştir.", irab_short: "ism-i inne, mensûb", turkish_bridge: "Hesap, muhasebe bu kökten", balagha_note: "Dönüş ve hesap kelimelerinin art arda gelmesi ile ahiret sürecinin tasviri" },
        ],
      },
    ],
    exercises: [],
  },
];

export default gasiyeLessons;
