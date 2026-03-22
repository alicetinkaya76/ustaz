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
  return null; // Bilinmeyen kelimeler için null — ileride regex tabanlı analiz eklenecek
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
