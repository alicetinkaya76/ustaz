// wazn.js — Vezin Motoru (الميزان الصرفي)
// Kelime → kök + kalıp + bâb + ziyâde harfleri çıkarma

// ── Ziyâde harfleri (سألتمونيها) ──
const ZIYADAH = new Set(["س","أ","ل","ت","م","و","ن","ي","ه","ا","إ","ٱ"]);

// ── Bâb kalıp şablonları ──
// Her şablon: regex pattern → bâb + kalıp adı + açıklama
const VERB_PATTERNS = [
  // X. bâb — en uzun, önce kontrol
  { regex: /^اِسْتَ(.)(ْ?)(.)(َ?)(.)(َ)$/, bab: "X", pattern: "اِسْتَفْعَلَ", desc: "İstif'âl — talep/kendini … sayma" },
  { regex: /^يَسْتَ(.)(ْ?)(.)(ِ?)(.)(ُ)$/, bab: "X", pattern: "يَسْتَفْعِلُ", desc: "X. bâb muzâri" },
  // VII. bâb
  { regex: /^اِنْ(.)(َ?)(.)(َ?)(.)(َ)$/, bab: "VII", pattern: "اِنْفَعَلَ", desc: "İnfi'âl — edilgen/dönüşlü" },
  // VIII. bâb
  { regex: /^اِ(.)(ْ?)تَ(.)(َ?)(.)(َ)$/, bab: "VIII", pattern: "اِفْتَعَلَ", desc: "İfti'âl — dönüşlü/edinme" },
  // V. bâb
  { regex: /^تَ(.)(َ?)(.)َّ(.)(َ)$/, bab: "V", pattern: "تَفَعَّلَ", desc: "Tefaʿʿul — dönüşlü (II'nin)" },
  // VI. bâb
  { regex: /^تَ(.)(َا?)(.)(َ?)(.)(َ)$/, bab: "VI", pattern: "تَفَاعَلَ", desc: "Tefâ'ul — karşılıklı dönüşlü" },
  // IV. bâb
  { regex: /^أَ(.)(ْ?)(.)(َ?)(.)(َ)$/, bab: "IV", pattern: "أَفْعَلَ", desc: "İf'âl — geçişli yapma" },
  // II. bâb
  { regex: /^(.)(َ?)(.)َّ(.)(َ)$/, bab: "II", pattern: "فَعَّلَ", desc: "Tef'îl — çoğaltma/geçişli yapma" },
  // III. bâb
  { regex: /^(.)(َا?)(.)(َ?)(.)(َ)$/, bab: "III", pattern: "فَاعَلَ", desc: "Müfâ'ale — karşılıklı eylem" },
  // I. bâb (en son)
  { regex: /^(.)(َ?)(.)(َ?)(.)(َ)$/, bab: "I", pattern: "فَعَلَ", desc: "Sülâsî mücerred — temel eylem" },
];

// ── İsim kalıp tanıma (statik sözlük tabanlı) ──
const NOUN_PATTERNS = {
  "مُسْتَفْعِل": { bab: "X", type: "ism-i fâil", desc: "X. bâb ism-i fâil" },
  "مُسْتَفْعَل": { bab: "X", type: "ism-i mef'ûl", desc: "X. bâb ism-i mef'ûl" },
  "اِسْتِفْعَال": { bab: "X", type: "masdar", desc: "X. bâb masdarı" },
  "مُفَاعِل": { bab: "III", type: "ism-i fâil", desc: "III. bâb ism-i fâil" },
  "مُفَاعَلَة": { bab: "III", type: "masdar", desc: "III. bâb masdarı" },
  "مُنْفَعِل": { bab: "VII", type: "ism-i fâil", desc: "VII. bâb ism-i fâil" },
  "مُفْتَعِل": { bab: "VIII", type: "ism-i fâil", desc: "VIII. bâb ism-i fâil" },
  "مُتَفَعِّل": { bab: "V", type: "ism-i fâil", desc: "V. bâb ism-i fâil" },
  "تَفْعِيل": { bab: "II", type: "masdar", desc: "II. bâb masdarı" },
  "إِفْعَال": { bab: "IV", type: "masdar", desc: "IV. bâb masdarı" },
  "مُفَعِّل": { bab: "II", type: "ism-i fâil", desc: "II. bâb ism-i fâil" },
  "مُفَعَّل": { bab: "II", type: "ism-i mef'ûl", desc: "II. bâb ism-i mef'ûl" },
  "مُفْعِل": { bab: "IV", type: "ism-i fâil", desc: "IV. bâb ism-i fâil" },
  "مُفْعَل": { bab: "IV", type: "ism-i mef'ûl", desc: "IV. bâb ism-i mef'ûl" },
  "مَفْعُول": { bab: "I", type: "ism-i mef'ûl", desc: "I. bâb ism-i mef'ûl" },
  "فَاعِل": { bab: "I", type: "ism-i fâil", desc: "I. bâb ism-i fâil" },
  "فَعِيل": { bab: "I", type: "sıfat-ı müşebbehe", desc: "Sürekli sıfat" },
  "فَعَّال": { bab: "I", type: "mübalağa", desc: "Mübalağa ism-i fâil" },
  "فَعُول": { bab: "I", type: "mübalağa", desc: "Mübalağa ism-i fâil" },
  "فُعَال": { bab: "I", type: "masdar/isim", desc: "Masdar veya isim" },
  "فِعَال": { bab: "I", type: "masdar/cem", desc: "Masdar veya çoğul" },
  "فُعُول": { bab: "I", type: "masdar/cem", desc: "Masdar veya çoğul" },
  "فَعْل": { bab: "I", type: "masdar/isim", desc: "Temel masdar" },
  "فَعَل": { bab: "I", type: "masdar/isim", desc: "Masdar veya isim" },
  "فُعْل": { bab: "I", type: "isim", desc: "İsim" },
  "فِعْل": { bab: "I", type: "isim", desc: "İsim" },
  "فَعْلَان": { bab: "I", type: "mübalağa", desc: "Doluluk/aşırılık sıfatı" },
  "فُعْلَان": { bab: "I", type: "isim", desc: "İsim" },
  "فَعَالَة": { bab: "I", type: "masdar", desc: "Masdar (iş/meslek)" },
  "فِعَالَة": { bab: "I", type: "masdar", desc: "Masdar (iş/meslek)" },
  "مَفْعَل": { bab: "I", type: "ism-i mekân/zaman", desc: "Mekân veya zaman ismi" },
  "مَفْعِل": { bab: "I", type: "ism-i mekân/zaman", desc: "Mekân veya zaman ismi" },
  "مِفْعَل": { bab: "I", type: "ism-i âlet", desc: "Âlet ismi" },
  "مِفْعَال": { bab: "I", type: "ism-i âlet", desc: "Âlet ismi" },
  "أَفْعَل": { bab: "I", type: "ism-i tafdîl", desc: "Üstünlük/kıyaslama" },
  "فُعْلَى": { bab: "I", type: "ism-i tafdîl (müennes)", desc: "Üstünlük dişil" },
};

// ── Bilinen kelime → analiz sözlüğü ──
// Müfredattaki kelimeler için doğrudan eşleştirme
const KNOWN_WORDS = {
  "مُسْتَقِيم": { root: "ق-و-م", pattern: "مُسْتَفْعِل", bab: "X", type: "ism-i fâil", meaning: "dosdoğru" },
  "رَحْمَـٰن": { root: "ر-ح-م", pattern: "فَعْلَان", bab: "I", type: "mübalağa", meaning: "çok merhametli" },
  "رَحِيم": { root: "ر-ح-م", pattern: "فَعِيل", bab: "I", type: "sıfat-ı müşebbehe", meaning: "sürekli merhametli" },
  "عَلِيم": { root: "ع-ل-م", pattern: "فَعِيل", bab: "I", type: "sıfat-ı müşebbehe", meaning: "çok bilen" },
  "حَكِيم": { root: "ح-ك-م", pattern: "فَعِيل", bab: "I", type: "sıfat-ı müşebbehe", meaning: "hikmet sahibi" },
  "كَبِير": { root: "ك-ب-ر", pattern: "فَعِيل", bab: "I", type: "sıfat-ı müşebbehe", meaning: "büyük" },
  "مُؤْمِن": { root: "أ-م-ن", pattern: "مُفْعِل", bab: "IV", type: "ism-i fâil", meaning: "iman eden" },
  "مُسْلِم": { root: "س-ل-م", pattern: "مُفْعِل", bab: "IV", type: "ism-i fâil", meaning: "teslim olan" },
  "كَافِر": { root: "ك-ف-ر", pattern: "فَاعِل", bab: "I", type: "ism-i fâil", meaning: "inkâr eden" },
  "عَابِد": { root: "ع-ب-د", pattern: "فَاعِل", bab: "I", type: "ism-i fâil", meaning: "ibadet eden" },
  "مَعْبُود": { root: "ع-ب-د", pattern: "مَفْعُول", bab: "I", type: "ism-i mef'ûl", meaning: "ibadet edilen" },
  "حَمْد": { root: "ح-م-د", pattern: "فَعْل", bab: "I", type: "masdar", meaning: "hamd, övgü" },
  "نَصْر": { root: "ن-ص-ر", pattern: "فَعْل", bab: "I", type: "masdar", meaning: "yardım" },
  "فَتْح": { root: "ف-ت-ح", pattern: "فَعْل", bab: "I", type: "masdar", meaning: "açma, fetih" },
  "عَصْر": { root: "ع-ص-ر", pattern: "فَعْل", bab: "I", type: "masdar/isim", meaning: "zaman, asır" },
  "رَبّ": { root: "ر-ب-ب", pattern: "فَعْل", bab: "I", type: "isim", meaning: "Rab, terbiye eden" },
  "عِلْم": { root: "ع-ل-م", pattern: "فِعْل", bab: "I", type: "masdar", meaning: "ilim, bilgi" },
  "عِبَادَة": { root: "ع-ب-د", pattern: "فِعَالَة", bab: "I", type: "masdar", meaning: "ibadet" },
  "عِبَاد": { root: "ع-ب-د", pattern: "فِعَال", bab: "I", type: "cem", meaning: "kullar" },
  "صِرَاط": { root: "ص-ر-ط", pattern: "فِعَال", bab: "I", type: "isim", meaning: "yol" },
  "كِتَاب": { root: "ك-ت-ب", pattern: "فِعَال", bab: "I", type: "masdar/isim", meaning: "kitap" },
  "مُعَلِّم": { root: "ع-ل-م", pattern: "مُفَعِّل", bab: "II", type: "ism-i fâil", meaning: "öğreten" },
  "تَعْلِيم": { root: "ع-ل-م", pattern: "تَفْعِيل", bab: "II", type: "masdar", meaning: "öğretim" },
  "إِسْلَام": { root: "س-ل-م", pattern: "إِفْعَال", bab: "IV", type: "masdar", meaning: "teslim oluş" },
  "إِيمَان": { root: "أ-م-ن", pattern: "إِفْعَال", bab: "IV", type: "masdar", meaning: "iman" },
  "اِسْتِقَامَة": { root: "ق-و-م", pattern: "اِسْتِفْعَال", bab: "X", type: "masdar", meaning: "doğruluk" },
  "اِسْتِغْفَار": { root: "غ-ف-ر", pattern: "اِسْتِفْعَال", bab: "X", type: "masdar", meaning: "bağışlanma dileme" },
  "مَسْجِد": { root: "س-ج-د", pattern: "مَفْعِل", bab: "I", type: "ism-i mekân", meaning: "secde yeri" },
  "مَغْرِب": { root: "غ-ر-ب", pattern: "مَفْعِل", bab: "I", type: "ism-i mekân/zaman", meaning: "batı, batış vakti" },
  "غَفَّار": { root: "غ-ف-ر", pattern: "فَعَّال", bab: "I", type: "mübalağa", meaning: "çok bağışlayan" },
  "غَفُور": { root: "غ-ف-ر", pattern: "فَعُول", bab: "I", type: "mübalağa", meaning: "çok bağışlayan" },
  "أَكْبَر": { root: "ك-ب-ر", pattern: "أَفْعَل", bab: "I", type: "ism-i tafdîl", meaning: "en büyük" },
  // ── L27-L30 ek kelimeler ──
  "مُطَفِّف": { root: "ط-ف-ف", pattern: "مُفَعِّل", bab: "II", type: "ism-i fâil", meaning: "eksik tartan" },
  "كِتَابٌ مَرْقُوم": { root: "ر-ق-م", pattern: "مَفْعُول", bab: "I", type: "ism-i mef'ûl", meaning: "rakamlanmış/yazılmış kitap" },
  "سِجِّين": { root: "س-ج-ن", pattern: "فِعِّيل", bab: "I", type: "isim", meaning: "dar hapishane / amel defteri" },
  "عِلِّيِّين": { root: "ع-ل-و", pattern: "فِعِّيل", bab: "I", type: "isim", meaning: "yüce makam / amel defteri" },
  "شَهِيد": { root: "ش-ه-د", pattern: "فَعِيل", bab: "I", type: "sıfat-ı müşebbehe", meaning: "şahit" },
  "مَجِيد": { root: "م-ج-د", pattern: "فَعِيل", bab: "I", type: "sıfat-ı müşebbehe", meaning: "şanlı, yüce" },
  "حَفِيظ": { root: "ح-ف-ظ", pattern: "فَعِيل", bab: "I", type: "mübalağa", meaning: "çok koruyan" },
  "وَدُود": { root: "و-د-د", pattern: "فَعُول", bab: "I", type: "mübalağa", meaning: "çok seven" },
  "بَطْش": { root: "ب-ط-ش", pattern: "فَعْل", bab: "I", type: "masdar", meaning: "yakalama, şiddetle tutma" },
  "نَقَب": { root: "ن-ق-ب", pattern: "فَعَل", bab: "I", type: "masdar", meaning: "delik açma, kaçma" },
  "بَلَد": { root: "ب-ل-د", pattern: "فَعَل", bab: "I", type: "isim", meaning: "belde, şehir" },
  "عَقَبَة": { root: "ع-ق-ب", pattern: "فَعَلَة", bab: "I", type: "isim", meaning: "sarp yokuş" },
  "رَقَبَة": { root: "ر-ق-ب", pattern: "فَعَلَة", bab: "I", type: "isim", meaning: "boyun; köle" },
  "مَسْغَبَة": { root: "س-غ-ب", pattern: "مَفْعَلَة", bab: "I", type: "ism-i mekân/masdar", meaning: "açlık, kıtlık" },
  "مَتْرَبَة": { root: "ت-ر-ب", pattern: "مَفْعَلَة", bab: "I", type: "ism-i mekân/masdar", meaning: "yoksulluk (toprağa düşme)" },
  // ── L31-L34 ek kelimeler ──
  "تَزْكِيَة": { root: "ز-ك-و", pattern: "تَفْعِلَة", bab: "II", type: "masdar", meaning: "arınma, temizlenme" },
  "فَلَاح": { root: "ف-ل-ح", pattern: "فَعَال", bab: "I", type: "masdar", meaning: "kurtuluş, başarı" },
  "دَسَّى": { root: "د-س-و", pattern: "فَعَّلَ", bab: "II", type: "fiil", meaning: "karanlığa gömdü, bozdu" },
  "تُقَاة": { root: "و-ق-ي", pattern: "—", bab: "I", type: "masdar", meaning: "korunma, takva" },
  "يُسْر": { root: "ي-س-ر", pattern: "فُعْل", bab: "I", type: "masdar", meaning: "kolaylık" },
  "عُسْر": { root: "ع-س-ر", pattern: "فُعْل", bab: "I", type: "masdar", meaning: "zorluk" },
  "ضُحَى": { root: "ض-ح-و", pattern: "فُعَل", bab: "I", type: "isim", meaning: "kuşluk vakti" },
  "قَالِي": { root: "ق-ل-ي", pattern: "فَاعِل", bab: "I", type: "ism-i fâil", meaning: "terk eden, kızan" },
  "يَتِيم": { root: "ي-ت-م", pattern: "فَعِيل", bab: "I", type: "sıfat-ı müşebbehe", meaning: "yetim" },
  "ضَالّ": { root: "ض-ل-ل", pattern: "فَاعِل", bab: "I", type: "ism-i fâil", meaning: "şaşırmış, yolunu kaybetmiş" },
  "عَائِل": { root: "ع-ي-ل", pattern: "فَاعِل", bab: "I", type: "ism-i fâil", meaning: "yoksul" },
  "سَائِل": { root: "س-أ-ل", pattern: "فَاعِل", bab: "I", type: "ism-i fâil", meaning: "isteyen, soran" },
  // ── L35-L38 ek kelimeler ──
  "تَقْوِيم": { root: "ق-و-م", pattern: "تَفْعِيل", bab: "II", type: "masdar", meaning: "biçim, düzenleme" },
  "أَحْسَن": { root: "ح-س-ن", pattern: "أَفْعَل", bab: "I", type: "ism-i tafdîl", meaning: "en güzel" },
  "أَسْفَل": { root: "س-ف-ل", pattern: "أَفْعَل", bab: "I", type: "ism-i tafdîl", meaning: "en aşağı" },
  "مَمْنُون": { root: "م-ن-ن", pattern: "مَفْعُول", bab: "I", type: "ism-i mef'ûl", meaning: "kesilmiş" },
  "أَكْرَم": { root: "ك-ر-م", pattern: "أَفْعَل", bab: "I", type: "ism-i tafdîl", meaning: "en cömert" },
  "بَيِّنَة": { root: "ب-ي-ن", pattern: "فَيْعِلَة", bab: "I", type: "isim", meaning: "apaçık delil" },
  "مُخْلِص": { root: "خ-ل-ص", pattern: "مُفْعِل", bab: "IV", type: "ism-i fâil", meaning: "samimiyetle has kılan" },
  "إِخْلَاص": { root: "خ-ل-ص", pattern: "إِفْعَال", bab: "IV", type: "masdar", meaning: "ihlas, samimiyet" },
  "مُنْفَكّ": { root: "ف-ك-ك", pattern: "مُنْفَعِل", bab: "VII", type: "ism-i fâil", meaning: "ayrılan, kopan" },
  "بَرِيَّة": { root: "ب-ر-أ", pattern: "فَعِيلَة", bab: "I", type: "isim", meaning: "yaratılmışlar" },
  "مَطْلَع": { root: "ط-ل-ع", pattern: "مَفْعَل", bab: "I", type: "ism-i zaman", meaning: "doğuş vakti/yeri" },
  "قَلَم": { root: "ق-ل-م", pattern: "فَعَل", bab: "I", type: "isim", meaning: "kalem" },
  // ── L39-L42 ek kelimeler ──
  "زِلْزَال": { root: "ز-ل-ز-ل", pattern: "فِعْلَال", bab: "rubâî", type: "masdar", meaning: "sarsıntı, deprem" },
  "مِثْقَال": { root: "ث-ق-ل", pattern: "مِفْعَال", bab: "I", type: "ism-i âlet", meaning: "tartı, miktar" },
  "أَثْقَال": { root: "ث-ق-ل", pattern: "أَفْعَال", bab: "I", type: "cem", meaning: "ağırlıklar" },
  "كَنُود": { root: "ك-ن-د", pattern: "فَعُول", bab: "I", type: "mübalağa", meaning: "çok nankör" },
  "خَبِير": { root: "خ-ب-ر", pattern: "فَعِيل", bab: "I", type: "sıfat-ı müşebbehe", meaning: "haberdar" },
  "قَارِعَة": { root: "ق-ر-ع", pattern: "فَاعِلَة", bab: "I", type: "ism-i fâil", meaning: "kapı çalan (kıyamet)" },
  "مَبْثُوث": { root: "ب-ث-ث", pattern: "مَفْعُول", bab: "I", type: "ism-i mef'ûl", meaning: "saçılmış, yayılmış" },
  "مَنفُوش": { root: "ن-ف-ش", pattern: "مَفْعُول", bab: "I", type: "ism-i mef'ûl", meaning: "atılmış, didilmiş" },
  "هَاوِيَة": { root: "ه-و-ي", pattern: "فَاعِلَة", bab: "I", type: "ism-i fâil", meaning: "uçurum, cehennem" },
  "تَكَاثُر": { root: "ك-ث-ر", pattern: "تَفَاعُل", bab: "VI", type: "masdar", meaning: "çoklukla yarışma" },
  "مَقَابِر": { root: "ق-ب-ر", pattern: "مَفَاعِل", bab: "I", type: "cem", meaning: "kabirler" },
  "جَحِيم": { root: "ج-ح-م", pattern: "فَعِيل", bab: "I", type: "isim", meaning: "cehennem" },
  "نَعِيم": { root: "ن-ع-م", pattern: "فَعِيل", bab: "I", type: "isim", meaning: "nimet, bolluk" },
  "يَقِين": { root: "ي-ق-ن", pattern: "فَعِيل", bab: "I", type: "masdar", meaning: "kesinlik" },
  // ── L43-L46 ──
  "هُمَزَة": { root: "ه-م-ز", pattern: "فُعَلَة", bab: "I", type: "mübalağa", meaning: "çok çekiştiren" },
  "لُمَزَة": { root: "ل-م-ز", pattern: "فُعَلَة", bab: "I", type: "mübalağa", meaning: "çok alay eden" },
  "حُطَمَة": { root: "ح-ط-م", pattern: "فُعَلَة", bab: "I", type: "mübalağa", meaning: "çok kırıp geçiren" },
  "مُؤْصَدَة": { root: "أ-ص-د", pattern: "مُفْعَلَة", bab: "IV", type: "ism-i mef'ûl", meaning: "kapatılmış" },
  "مُمَدَّدَة": { root: "م-د-د", pattern: "مُفَعَّلَة", bab: "II", type: "ism-i mef'ûl", meaning: "uzatılmış" },
  "مُوقَدَة": { root: "و-ق-د", pattern: "مُفْعَلَة", bab: "IV", type: "ism-i mef'ûl", meaning: "tutuşturulmuş" },
  "أَفْئِدَة": { root: "ف-أ-د", pattern: "أَفْعِلَة", bab: "I", type: "cem kırık", meaning: "kalpler" },
  "تَضْلِيل": { root: "ض-ل-ل", pattern: "تَفْعِيل", bab: "II", type: "masdar", meaning: "sapıklık, boşa çıkarma" },
  "أَبَابِيل": { root: null, pattern: "أَفَاعِيل", bab: null, type: "cem kırık", meaning: "sürü sürü" },
  "مَأْكُول": { root: "أ-ك-ل", pattern: "مَفْعُول", bab: "I", type: "ism-i mef'ûl", meaning: "yenilmiş" },
  "إِيلَاف": { root: "أ-ل-ف", pattern: "إِفْعَال", bab: "IV", type: "masdar", meaning: "alıştırma, ülfet" },
  "رِحْلَة": { root: "ر-ح-ل", pattern: "فِعْلَة", bab: "I", type: "masdar/isim", meaning: "yolculuk" },
  "مِسْكِين": { root: "س-ك-ن", pattern: "مِفْعِيل", bab: "I", type: "isim", meaning: "yoksul, çaresiz" },
  "مُصَلٍّ": { root: "ص-ل-و", pattern: "مُفَعِّل", bab: "II", type: "ism-i fâil", meaning: "namaz kılan" },
  "سَاهٍ": { root: "س-ه-و", pattern: "فَاعِل", bab: "I", type: "ism-i fâil", meaning: "gafil, dalgın" },
  "مَاعُون": { root: "م-ع-ن", pattern: "فَاعُول", bab: "I", type: "isim", meaning: "basit yardım, zekât" },
};

/**
 * Bir kelimeyi analiz et
 * @param {string} word — Arapça kelime
 * @returns {object|null} — { root, pattern, bab, type, meaning?, desc }
 */
export function analyzeWord(word) {
  // 1. Bilinen kelime sözlüğünden bak
  const clean = word.replace(/[\u0670\u0671]/g, "ا").replace(/ـ/g, "");
  for (const [key, val] of Object.entries(KNOWN_WORDS)) {
    const cleanKey = key.replace(/[\u0670\u0671]/g, "ا").replace(/ـ/g, "");
    if (clean === cleanKey) return { ...val, source: "known" };
  }
  // 2. Regex tabanlı otomatik analiz (KNOWN_WORDS'te yoksa)
  const stripped = clean.replace(/[\u064B-\u0652\u0670]/g, ""); // harekesiz
  const withHareke = clean;

  // X. bâb: اِسْتَفْعَلَ / يَسْتَفْعِلُ / مُسْتَفْعِل
  if (/^[اٱ]سْتَ/.test(withHareke) || /^يَسْتَ/.test(withHareke) || /^تَسْتَ/.test(withHareke)) {
    return { pattern: "اِسْتَفْعَلَ", bab: "X", type: "fiil/türev", desc: "X. bâb (istif'âl)", source: "regex" };
  }
  if (/^مُسْتَ/.test(withHareke)) {
    return { pattern: "مُسْتَفْعِل", bab: "X", type: "ism-i fâil/mef'ûl", desc: "X. bâb türevi", source: "regex" };
  }

  // VII. bâb: اِنْفَعَلَ / يَنْفَعِلُ / مُنْفَعِل
  if (/^[اٱ]نْ[فقكعغحخجدذرزسشصضطظ]/.test(withHareke)) {
    return { pattern: "اِنْفَعَلَ", bab: "VII", type: "fiil", desc: "VII. bâb (infi'âl)", source: "regex" };
  }
  if (/^يَنْ[فقكعغحخجدذرزسشصضطظ]/.test(withHareke) && !/^يَنْز/.test(withHareke)) {
    return { pattern: "يَنْفَعِلُ", bab: "VII", type: "fiil muzâri", desc: "VII. bâb muzâri", source: "regex" };
  }
  if (/^مُنْ[فقكعغحخجدذرزسشصضطظ]/.test(withHareke)) {
    return { pattern: "مُنْفَعِل", bab: "VII", type: "ism-i fâil", desc: "VII. bâb ism-i fâil", source: "regex" };
  }

  // VIII. bâb: اِفْتَعَلَ / يَفْتَعِلُ / مُفْتَعِل
  if (/^[اٱ].ْتَ/.test(withHareke) && !/^[اٱ]سْتَ/.test(withHareke) && !/^[اٱ]نْ/.test(withHareke)) {
    return { pattern: "اِفْتَعَلَ", bab: "VIII", type: "fiil", desc: "VIII. bâb (ifti'âl)", source: "regex" };
  }
  if (/^مُ.ْتَ/.test(withHareke) && !/^مُسْتَ/.test(withHareke) && !/^مُنْ/.test(withHareke)) {
    return { pattern: "مُفْتَعِل", bab: "VIII", type: "ism-i fâil", desc: "VIII. bâb ism-i fâil", source: "regex" };
  }

  // V. bâb: تَفَعَّلَ / يَتَفَعَّلُ / مُتَفَعِّل
  if (/^تَ.َ.َّ/.test(withHareke) || /^يَتَ.َ.َّ/.test(withHareke)) {
    return { pattern: "تَفَعَّلَ", bab: "V", type: "fiil", desc: "V. bâb (tefaʿʿul)", source: "regex" };
  }
  if (/^مُتَ.َ.ِّ/.test(withHareke)) {
    return { pattern: "مُتَفَعِّل", bab: "V", type: "ism-i fâil", desc: "V. bâb ism-i fâil", source: "regex" };
  }

  // VI. bâb: تَفَاعَلَ / يَتَفَاعَلُ
  if (/^تَ.َا.َ/.test(withHareke) || /^يَتَ.َا.َ/.test(withHareke)) {
    return { pattern: "تَفَاعَلَ", bab: "VI", type: "fiil", desc: "VI. bâb (tefâ'ul)", source: "regex" };
  }

  // IV. bâb: أَفْعَلَ / يُفْعِلُ / مُفْعِل
  if (/^أَ.ْ.َ/.test(withHareke) && stripped.length <= 5) {
    return { pattern: "أَفْعَلَ", bab: "IV", type: "fiil", desc: "IV. bâb (if'âl)", source: "regex" };
  }

  // II. bâb: فَعَّلَ / يُفَعِّلُ / مُفَعِّل / تَفْعِيل
  if (/^تَ.ْ.ِي/.test(withHareke)) {
    return { pattern: "تَفْعِيل", bab: "II", type: "masdar", desc: "II. bâb masdarı", source: "regex" };
  }

  // III. bâb: فَاعَلَ / يُفَاعِلُ / مُفَاعِل / مُفَاعَلَة
  if (/^.َا.َ.َ$/.test(withHareke) && stripped.length <= 4) {
    return { pattern: "فَاعَلَ", bab: "III", type: "fiil", desc: "III. bâb (müfâ'ale)", source: "regex" };
  }
  if (/^يُ.َا.ِ/.test(withHareke)) {
    return { pattern: "يُفَاعِلُ", bab: "III", type: "fiil muzâri", desc: "III. bâb muzâri", source: "regex" };
  }
  if (/^مُ.َا.ِ/.test(withHareke)) {
    return { pattern: "مُفَاعِل", bab: "III", type: "ism-i fâil", desc: "III. bâb ism-i fâil", source: "regex" };
  }
  if (/^مُ.َا.َلَة/.test(withHareke)) {
    return { pattern: "مُفَاعَلَة", bab: "III", type: "masdar", desc: "III. bâb masdarı", source: "regex" };
  }

  // IX. bâb: اِفْعَلَّ / يَفْعَلُّ — renk/kusur
  if (/^[اٱ].ْ.َ..َّ/.test(withHareke) && !/^[اٱ]سْتَ/.test(withHareke) && !/^[اٱ]نْ/.test(withHareke) && !/^[اٱ].ْتَ/.test(withHareke)) {
    return { pattern: "اِفْعَلَّ", bab: "IX", type: "fiil", desc: "IX. bâb (if'ilâl — renk/kusur)", source: "regex" };
  }
  if (/^يَ.ْ.َ..ُّ/.test(withHareke)) {
    return { pattern: "يَفْعَلُّ", bab: "IX", type: "fiil muzâri", desc: "IX. bâb muzâri", source: "regex" };
  }

  // I. bâb ism-i fâil/mef'ûl patterns
  if (/^.َا.ِ/.test(withHareke) && stripped.length <= 4) {
    return { pattern: "فَاعِل", bab: "I", type: "ism-i fâil", desc: "I. bâb ism-i fâil", source: "regex" };
  }
  if (/^مَ.ْ.ُو/.test(withHareke)) {
    return { pattern: "مَفْعُول", bab: "I", type: "ism-i mef'ûl", desc: "I. bâb ism-i mef'ûl", source: "regex" };
  }

  return null; // Analiz yapılamadı
}

/**
 * Kalıp bilgisi getir
 * @param {string} pattern — ör. "فَاعِل"
 * @returns {object|null}
 */
export function getPatternInfo(pattern) {
  return NOUN_PATTERNS[pattern] || null;
}

/**
 * Tüm bilinen kelimelerin listesi
 */
export function getKnownWordCount() {
  return Object.keys(KNOWN_WORDS).length;
}

export { KNOWN_WORDS, NOUN_PATTERNS };
