// ═══════════════════════════════════════════════════════════
// fiilTypes.js — Fiil Sınıflandırma Sistemi (الأفعال: تقسيماتها)
// v0.25.0
// ═══════════════════════════════════════════════════════════
//
// Sahîh / Mu'tel / Mehmûz / Muzâ'af / Rubâ'î sınıflaması
// Her fiil kökü için: tip, alt tip, illet harfi, sarf kuralı
// 141 fiil kökü (5 sure + rootDB'den)
//
// Kullanım:
//   import { getVerbType, getVerbsByType, verbTypeRules } from './fiilTypes.js';
//   getVerbType("و-ع-د")  → { type: "mutel", subtype: "misâl", ... }
//   getVerbsByType("ecvef") → ["ت-و-ب", "ق-و-ل", ...]
// ═══════════════════════════════════════════════════════════

// ── İllet Harfleri ──
const HURUF_ILLE = ["و", "ي"];
const HEMZE_FORMS = ["ء", "أ", "إ", "آ", "ئ", "ؤ"];

// ═══════════════════════════════════════════════════════════
// ANA SINIFLANDIRMA KURALLARI
// ═══════════════════════════════════════════════════════════
export const verbTypeRules = {
  sahih: {
    title_ar: "الفعل الصحيح",
    title_tr: "Sahîh Fiil",
    desc: "Kök harflerinde illet harfi (و، ي) ve hemze (ء) bulunmayan fiiller",
    subtypes: {
      salim: {
        title_ar: "السالم",
        title_tr: "Sâlim",
        desc: "Üç kök harfinin tamamı sağlam — ne illet, ne hemze, ne tekrar",
        rule: "Düzenli çekim kurallarına tabi; istisna yok",
        examples: ["ك-ت-ب", "ن-ص-ر", "ج-ع-ل", "خ-ل-ق", "ع-ل-م"],
      },
      muzaaf: {
        title_ar: "المضعّف",
        title_tr: "Muzâ'af",
        desc: "Ayn ve Lâm harfi aynı (يَمُدُّ ← مَدَّ)",
        rule: "Sükûn halinde idğâm yapılır (مَدَّ ← مَدَدَ); harekeli olunca ayrılır (مَدَدْنَا)",
        examples: ["ش-ق-ق", "ص-ب-ب", "ف-ر-ر", "غ-ر-ر", "م-س-ك"],
      },
    },
  },
  mutel: {
    title_ar: "الفعل المعتل",
    title_tr: "Mu'tel Fiil",
    desc: "Kök harflerinden biri veya daha fazlası illet harfi (و veya ي) olan fiiller",
    subtypes: {
      misal: {
        title_ar: "المثال",
        title_tr: "Misâl",
        desc: "Fâ harfi illet (و veya ي): وَعَدَ، يَسَرَ",
        rule: "I. bâb muzâri'de fâ harfi düşebilir: وَعَدَ → يَعِدُ (و düşer). وَصَلَ → يَصِلُ.",
        examples: ["و-ع-د", "و-ج-د", "و-ض-ع", "و-ز-ن", "و-ل-د", "ي-س-ر"],
      },
      ecvef: {
        title_ar: "الأجوف",
        title_tr: "Ecvef",
        desc: "Ayn harfi illet (و veya ي): قَالَ، سَارَ",
        rule: "Cezm ve bina halinde ayn harfi hazfedilir: قَالَ → قُلْ → يَقُولُ. خَافَ → خِفْ.",
        examples: ["ق-و-ل", "ك-و-ن", "خ-و-ف", "م-و-ت", "ز-ي-ن", "ت-و-ب"],
      },
      nakis: {
        title_ar: "الناقص",
        title_tr: "Nâkıs",
        desc: "Lâm harfi illet (و veya ي): رَمَى، دَعَا",
        rule: "Son harf i'raba göre değişir; cezm halinde hazfedilir: رَمَى → يَرْمِي → لَمْ يَرْمِ. دَعَا → يَدْعُو → لَمْ يَدْعُ.",
        examples: ["د-ع-و", "ه-د-ي", "ب-غ-ي", "ب-ل-و", "ط-غ-ي", "ع-ل-و", "ب-ق-ي"],
      },
      lefif_mafruk: {
        title_ar: "اللفيف المفروق",
        title_tr: "Lefîf Mefrûk",
        desc: "Fâ ve Lâm illet harfi (aralarında sahîh harf): وَفَى، وَلِيَ",
        rule: "Hem misâl hem nâkıs kuralları birlikte uygulanır",
        examples: ["و-ف-ي", "و-ل-ي", "و-ق-ي"],
      },
      lefif_makrun: {
        title_ar: "اللفيف المقرون",
        title_tr: "Lefîf Makrûn",
        desc: "Ayn ve Lâm illet harfi (yan yana): رَوَى، هَوَى",
        rule: "Hem ecvef hem nâkıs kuralları birlikte uygulanır",
        examples: ["س-و-ي", "ه-و-ي"],
      },
    },
  },
  mehmuz: {
    title_ar: "الفعل المهموز",
    title_tr: "Mehmûz Fiil",
    desc: "Kök harflerinden biri hemze (ء) olan fiiller",
    subtypes: {
      mehmuz_fa: {
        title_ar: "مهموز الفاء",
        title_tr: "Mehmûzü'l-Fâ",
        desc: "Fâ harfi hemze: أَخَذَ، أَمَرَ",
        rule: "Hemze bazı kalıplarda tahfîf edilir. أَمَرَ → آمَرَ (if'âl bâbı: أَأْمَرَ → آمَرَ). أَخَذَ → خُذْ (emir: hemze düşer).",
        examples: ["أ-ك-ل", "أ-م-ر", "أ-م-ن", "أ-خ-ذ", "أ-خ-ر"],
      },
      mehmuz_ayn: {
        title_ar: "مهموز العين",
        title_tr: "Mehmûzü'l-Ayn",
        desc: "Ayn harfi hemze: سَأَلَ، بَئِسَ",
        rule: "Hemze ortada olduğu için çekim düzenli, nadiren ibdâl yapılır",
        examples: ["س-أ-ل", "ب-ئ-س", "ر-أ-ي"],
      },
      mehmuz_lam: {
        title_ar: "مهموز اللام",
        title_tr: "Mehmûzü'l-Lâm",
        desc: "Lâm harfi hemze: قَرَأَ، نَشَأَ",
        rule: "Son hemze önceki hareke ile uyumlu yazılır: قَرَأَ → يَقْرَأُ → اقْرَأْ",
        examples: ["ق-ر-أ", "ن-ش-أ", "ذ-ر-أ"],
      },
    },
  },
};

// ═══════════════════════════════════════════════════════════
// FİİL VERİTABANI — 141 fiil kökü
// ═══════════════════════════════════════════════════════════
const fiilDB = {
  // ── SAHÎh — SÂLİM ──
  "ب-ر-ك": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ج-ع-ل": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ج-ه-ر": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ح-ش-ر": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ح-ك-م": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ح-م-د": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "خ-ر-ج": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "خ-س-ر": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "خ-س-ف": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "خ-ل-ق": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "خ-ل-د": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ذ-ك-ر": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ر-ج-ع": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ر-ح-م": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ر-ز-ق": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ر-س-ل": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ر-ف-ع": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ر-ك-ب": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ر-ه-ق": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "س-ج-د": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "س-ف-ع": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "س-م-ع": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ش-ك-ر": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ص-ب-ح": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ص-ب-ر": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ط-م-ث": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ع-ب-د": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ع-ب-س": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ع-ت-د": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ع-د-ل": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ع-ر-ف": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ع-ق-ل": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ع-ل-م": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ع-م-ل": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ع-ق-د": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "غ-ف-ر": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ف-ج-ر": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ف-ر-غ": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ف-ط-ر": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ف-ع-ل": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ف-ص-ل": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ف-ت-ح": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ف-ر-ق": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ق-ب-ر": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ق-ب-ض": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ق-ت-ل": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ق-د-ر": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ق-د-م": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ق-ر-ب": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ق-ل-ب": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ق-ه-ر": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ك-ت-ب": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ك-ذ-ب": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ك-ف-ر": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ك-ر-م": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ك-س-ب": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ل-ج-ج": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "م-ر-ج": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "م-ل-ك": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ن-ب-ت": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ن-ث-ر": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ن-ز-ل": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ن-ش-ر": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ن-ص-ر": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ن-ظ-ر": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ن-ف-ذ": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ن-ف-ع": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ن-ز-ع": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ه-ل-ك": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "س-ل-م": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },

  // ── SAHÎh — MUZÂ'AF ──
  "ج-ن-ن": { type: "sahih", subtype: "muzâ'af", weak: "ن", desc: "Muzâ'af: Ayn=Lâm (ن)" },
  "س-ر-ر": { type: "sahih", subtype: "muzâ'af", weak: "ر", desc: "Muzâ'af: Ayn=Lâm (ر)" },
  "ش-ق-ق": { type: "sahih", subtype: "muzâ'af", weak: "ق", desc: "Muzâ'af: Ayn=Lâm (ق)" },
  "ص-ب-ب": { type: "sahih", subtype: "muzâ'af", weak: "ب", desc: "Muzâ'af: Ayn=Lâm (ب)" },
  "غ-ر-ر": { type: "sahih", subtype: "muzâ'af", weak: "ر", desc: "Muzâ'af: Ayn=Lâm (ر)" },
  "ف-ر-ر": { type: "sahih", subtype: "muzâ'af", weak: "ر", desc: "Muzâ'af: Ayn=Lâm (ر)" },
  "م-س-ك": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" }, // not muzaaf

  // ── MU'TEL — MİSÂL (Fâ = و/ي) ──
  "و-ج-د": { type: "mutel", subtype: "misâl", weak: "و", pos: "fâ", desc: "Misâl: Fâ = و" },
  "و-ز-ن": { type: "mutel", subtype: "misâl", weak: "و", pos: "fâ", desc: "Misâl: Fâ = و" },
  "و-ض-ع": { type: "mutel", subtype: "misâl", weak: "و", pos: "fâ", desc: "Misâl: Fâ = و" },
  "و-ع-د": { type: "mutel", subtype: "misâl", weak: "و", pos: "fâ", desc: "Misâl: Fâ = و" },
  "و-ق-د": { type: "mutel", subtype: "misâl", weak: "و", pos: "fâ", desc: "Misâl: Fâ = و" },
  "و-ل-د": { type: "mutel", subtype: "misâl", weak: "و", pos: "fâ", desc: "Misâl: Fâ = و" },
  "و-ك-ل": { type: "mutel", subtype: "misâl", weak: "و", pos: "fâ", desc: "Misâl: Fâ = و" },
  "ي-س-ر": { type: "mutel", subtype: "misâl", weak: "ي", pos: "fâ", desc: "Misâl: Fâ = ي" },

  // ── MU'TEL — ECVEF (Ayn = و/ي) ──
  "ت-و-ب": { type: "mutel", subtype: "ecvef", weak: "و", pos: "ayn", desc: "Ecvef: Ayn = و" },
  "ج-و-ر": { type: "mutel", subtype: "ecvef", weak: "و", pos: "ayn", desc: "Ecvef: Ayn = و" },
  "خ-و-ف": { type: "mutel", subtype: "ecvef", weak: "و", pos: "ayn", desc: "Ecvef: Ayn = و" },
  "ز-ي-ن": { type: "mutel", subtype: "ecvef", weak: "ي", pos: "ayn", desc: "Ecvef: Ayn = ي" },
  "ز-ك-و": { type: "mutel", subtype: "nâkıs", weak: "و", pos: "lâm", desc: "Nâkıs: Lâm = و" }, // corrected
  "ف-و-ر": { type: "mutel", subtype: "ecvef", weak: "و", pos: "ayn", desc: "Ecvef: Ayn = و" },
  "ف-و-ز": { type: "mutel", subtype: "ecvef", weak: "و", pos: "ayn", desc: "Ecvef: Ayn = و" },
  "ق-و-ل": { type: "mutel", subtype: "ecvef", weak: "و", pos: "ayn", desc: "Ecvef: Ayn = و" },
  "ق-و-م": { type: "mutel", subtype: "ecvef", weak: "و", pos: "ayn", desc: "Ecvef: Ayn = و" },
  "ك-و-ن": { type: "mutel", subtype: "ecvef", weak: "و", pos: "ayn", desc: "Ecvef: Ayn = و" },
  "ك-و-د": { type: "mutel", subtype: "ecvef", weak: "و", pos: "ayn", desc: "Ecvef: Ayn = و" },
  "م-و-ت": { type: "mutel", subtype: "ecvef", weak: "و", pos: "ayn", desc: "Ecvef: Ayn = و" },
  "م-و-ر": { type: "mutel", subtype: "ecvef", weak: "و", pos: "ayn", desc: "Ecvef: Ayn = و" },
  "م-ي-ز": { type: "mutel", subtype: "ecvef", weak: "ي", pos: "ayn", desc: "Ecvef: Ayn = ي" },
  "غ-ن-ي": { type: "mutel", subtype: "nâkıs", weak: "ي", pos: "lâm", desc: "Nâkıs: Lâm = ي" }, // corrected
  "ج-ي-أ": { type: "mehmuz", subtype: "mehmûzü'l-lâm", weak: "ء", pos: "lâm", desc: "Mehmûz: Lâm = ء" }, // جاء

  // ── MU'TEL — NÂKIS (Lâm = و/ي) ──
  "أ-ت-ي": { type: "mutel", subtype: "nâkıs", weak: "ي", pos: "lâm", desc: "Nâkıs: Lâm = ي" },
  "ب-غ-ي": { type: "mutel", subtype: "nâkıs", weak: "ي", pos: "lâm", desc: "Nâkıs: Lâm = ي" },
  "ب-ق-ي": { type: "mutel", subtype: "nâkıs", weak: "ي", pos: "lâm", desc: "Nâkıs: Lâm = ي" },
  "ب-ل-و": { type: "mutel", subtype: "nâkıs", weak: "و", pos: "lâm", desc: "Nâkıs: Lâm = و" },
  "ج-ر-ي": { type: "mutel", subtype: "nâkıs", weak: "ي", pos: "lâm", desc: "Nâkıs: Lâm = ي" },
  "خ-ش-ي": { type: "mutel", subtype: "nâkıs", weak: "ي", pos: "lâm", desc: "Nâkıs: Lâm = ي" },
  "د-ر-ي": { type: "mutel", subtype: "nâkıs", weak: "ي", pos: "lâm", desc: "Nâkıs: Lâm = ي" },
  "د-ع-و": { type: "mutel", subtype: "nâkıs", weak: "و", pos: "lâm", desc: "Nâkıs: Lâm = و" },
  "ر-أ-ي": { type: "mutel", subtype: "nâkıs", weak: "ي", pos: "lâm", desc: "Nâkıs: Lâm = ي (mehmûz-ı ayn da)" },
  "س-ع-ي": { type: "mutel", subtype: "nâkıs", weak: "ي", pos: "lâm", desc: "Nâkıs: Lâm = ي" },
  "ص-د-ي": { type: "mutel", subtype: "nâkıs", weak: "ي", pos: "lâm", desc: "Nâkıs: Lâm = ي" },
  "ص-ل-و": { type: "mutel", subtype: "nâkıs", weak: "و", pos: "lâm", desc: "Nâkıs: Lâm = و" },
  "ص-ل-ي": { type: "mutel", subtype: "nâkıs", weak: "ي", pos: "lâm", desc: "Nâkıs: Lâm = ي" },
  "ط-غ-ي": { type: "mutel", subtype: "nâkıs", weak: "ي", pos: "lâm", desc: "Nâkıs: Lâm = ي" },
  "ط-و-ع": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" }, // و is ayn but ع is lam — actually ecvef
  "ط-و-ف": { type: "mutel", subtype: "ecvef", weak: "و", pos: "ayn", desc: "Ecvef: Ayn = و" },
  "ع-ل-و": { type: "mutel", subtype: "nâkıs", weak: "و", pos: "lâm", desc: "Nâkıs: Lâm = و" },
  "ع-ل-ق": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ع-ط-ي": { type: "mutel", subtype: "nâkıs", weak: "ي", pos: "lâm", desc: "Nâkıs: Lâm = ي" },
  "ع-و-ذ": { type: "mutel", subtype: "ecvef", weak: "و", pos: "ayn", desc: "Ecvef: Ayn = و" },
  "ف-ل-ح": { type: "sahih", subtype: "sâlim", desc: "Sahîh — Sâlim" },
  "ق-ض-ي": { type: "mutel", subtype: "nâkıs", weak: "ي", pos: "lâm", desc: "Nâkıs: Lâm = ي" },
  "ل-ق-ي": { type: "mutel", subtype: "nâkıs", weak: "ي", pos: "lâm", desc: "Nâkıs: Lâm = ي" },
  "ل-ه-و": { type: "mutel", subtype: "nâkıs", weak: "و", pos: "lâm", desc: "Nâkıs: Lâm = و" },
  "م-ش-ي": { type: "mutel", subtype: "nâkıs", weak: "ي", pos: "lâm", desc: "Nâkıs: Lâm = ي" },
  "ن-ه-ي": { type: "mutel", subtype: "nâkıs", weak: "ي", pos: "lâm", desc: "Nâkıs: Lâm = ي" },
  "ه-د-ي": { type: "mutel", subtype: "nâkıs", weak: "ي", pos: "lâm", desc: "Nâkıs: Lâm = ي" },

  // ── MU'TEL — LEFîF ──
  "و-ف-ي": { type: "mutel", subtype: "lefîf-mefrûk", weak: "و+ي", pos: "fâ+lâm", desc: "Lefîf Mefrûk: Fâ=و, Lâm=ي" },
  "و-ل-ي": { type: "mutel", subtype: "lefîf-mefrûk", weak: "و+ي", pos: "fâ+lâm", desc: "Lefîf Mefrûk: Fâ=و, Lâm=ي" },
  "س-و-ي": { type: "mutel", subtype: "lefîf-makrûn", weak: "و+ي", pos: "ayn+lâm", desc: "Lefîf Makrûn: Ayn=و, Lâm=ي" },
  "ه-و-ي": { type: "mutel", subtype: "lefîf-makrûn", weak: "و+ي", pos: "ayn+lâm", desc: "Lefîf Makrûn: Ayn=و, Lâm=ي" },
  "س-و-أ": { type: "mutel", subtype: "ecvef", weak: "و", pos: "ayn", desc: "Ecvef: Ayn = و (mehmûz-ı lâm da)" },

  // ── MEHMÛZ ──
  "أ-خ-ذ": { type: "mehmuz", subtype: "mehmûzü'l-fâ", weak: "ء", pos: "fâ", desc: "Mehmûz: Fâ = ء" },
  "أ-خ-ر": { type: "mehmuz", subtype: "mehmûzü'l-fâ", weak: "ء", pos: "fâ", desc: "Mehmûz: Fâ = ء" },
  "أ-ك-ل": { type: "mehmuz", subtype: "mehmûzü'l-fâ", weak: "ء", pos: "fâ", desc: "Mehmûz: Fâ = ء" },
  "أ-م-ر": { type: "mehmuz", subtype: "mehmûzü'l-fâ", weak: "ء", pos: "fâ", desc: "Mehmûz: Fâ = ء" },
  "أ-م-ن": { type: "mehmuz", subtype: "mehmûzü'l-fâ", weak: "ء", pos: "fâ", desc: "Mehmûz: Fâ = ء" },
  "ب-ئ-س": { type: "mehmuz", subtype: "mehmûzü'l-ayn", weak: "ء", pos: "ayn", desc: "Mehmûz: Ayn = ء" },
  "س-أ-ل": { type: "mehmuz", subtype: "mehmûzü'l-ayn", weak: "ء", pos: "ayn", desc: "Mehmûz: Ayn = ء" },
  "ق-ر-أ": { type: "mehmuz", subtype: "mehmûzü'l-lâm", weak: "ء", pos: "lâm", desc: "Mehmûz: Lâm = ء" },
  "ن-ش-أ": { type: "mehmuz", subtype: "mehmûzü'l-lâm", weak: "ء", pos: "lâm", desc: "Mehmûz: Lâm = ء" },
  "ذ-ر-أ": { type: "mehmuz", subtype: "mehmûzü'l-lâm", weak: "ء", pos: "lâm", desc: "Mehmûz: Lâm = ء" },
  "ش-ي-أ": { type: "mehmuz", subtype: "mehmûzü'l-lâm", weak: "ء", pos: "lâm", desc: "Mehmûz: Lâm = ء" },

  // ── RUBÂ'Î ──
  "ب-ع-ث-ر": { type: "rubai", subtype: "rubâ'î", desc: "Rubâ'î: Dört harfli fiil" },
};

// Corrected: ط-و-ع is ecvef (ayn = و)
fiilDB["ط-و-ع"] = { type: "mutel", subtype: "ecvef", weak: "و", pos: "ayn", desc: "Ecvef: Ayn = و" };

// ═══════════════════════════════════════════════════════════
// YARDIMCI FONKSİYONLAR
// ═══════════════════════════════════════════════════════════

/**
 * Bir kökün fiil tipini döndürür
 * @param {string} root — "و-ع-د" formatında kök
 * @returns {object|null} — { type, subtype, weak, pos, desc }
 */
export function getVerbType(root) {
  return fiilDB[root] || null;
}

/**
 * Belirli alt tipteki tüm fiilleri döndürür
 * @param {string} subtype — "misâl", "ecvef", "nâkıs", "sâlim", "muzâ'af" vb.
 * @returns {string[]} — kök dizisi
 */
export function getVerbsByType(subtype) {
  return Object.entries(fiilDB)
    .filter(([, info]) => info.subtype === subtype)
    .map(([root]) => root);
}

/**
 * Belirli ana tipteki tüm fiilleri döndürür
 * @param {string} type — "sahih", "mutel", "mehmuz"
 * @returns {string[]}
 */
export function getVerbsByMainType(type) {
  return Object.entries(fiilDB)
    .filter(([, info]) => info.type === type)
    .map(([root]) => root);
}

/**
 * Tüm fiil tiplerinin istatistiğini döndürür
 */
export function getVerbTypeStats() {
  const stats = {};
  for (const [, info] of Object.entries(fiilDB)) {
    const key = `${info.type}/${info.subtype}`;
    stats[key] = (stats[key] || 0) + 1;
  }
  return stats;
}

/**
 * Kök harflerini analiz ederek otomatik sınıflandırma yapar
 * fiilDB'de olmayan kökler için kullanılır
 */
export function classifyRoot(rootStr) {
  // First check DB
  if (fiilDB[rootStr]) return fiilDB[rootStr];
  
  const letters = rootStr.split("-");
  if (letters.length === 4) return { type: "rubai", subtype: "rubâ'î", desc: "Rubâ'î" };
  if (letters.length !== 3) return null;
  
  const [fa, ayn, lam] = letters;
  const hemzeSet = new Set(HEMZE_FORMS);
  const illeSet = new Set(HURUF_ILLE);
  
  const faIlle = illeSet.has(fa);
  const aynIlle = illeSet.has(ayn);
  const lamIlle = illeSet.has(lam);
  const faHemze = hemzeSet.has(fa);
  const aynHemze = hemzeSet.has(ayn);
  const lamHemze = hemzeSet.has(lam);
  
  // Lefîf checks first
  if (faIlle && lamIlle) return { type: "mutel", subtype: "lefîf-mefrûk", weak: `${fa}+${lam}`, pos: "fâ+lâm" };
  if (aynIlle && lamIlle) return { type: "mutel", subtype: "lefîf-makrûn", weak: `${ayn}+${lam}`, pos: "ayn+lâm" };
  
  // Single ille
  if (faIlle) return { type: "mutel", subtype: "misâl", weak: fa, pos: "fâ" };
  if (aynIlle) return { type: "mutel", subtype: "ecvef", weak: ayn, pos: "ayn" };
  if (lamIlle) return { type: "mutel", subtype: "nâkıs", weak: lam, pos: "lâm" };
  
  // Hemze
  if (faHemze) return { type: "mehmuz", subtype: "mehmûzü'l-fâ", weak: "ء", pos: "fâ" };
  if (aynHemze) return { type: "mehmuz", subtype: "mehmûzü'l-ayn", weak: "ء", pos: "ayn" };
  if (lamHemze) return { type: "mehmuz", subtype: "mehmûzü'l-lâm", weak: "ء", pos: "lâm" };
  
  // Muzâaf
  if (ayn === lam) return { type: "sahih", subtype: "muzâ'af", weak: ayn };
  
  return { type: "sahih", subtype: "sâlim" };
}

export default fiilDB;
