// ═══════════════════════════════════════════════════════════
// crossLinks.js — Çapraz Bağlantı Sistemi
// v0.25.0 — Sarf ↔ Nahiv ↔ Belâgat ↔ Surah arası köprü
// ═══════════════════════════════════════════════════════════
//
// Üç ana fonksiyon:
// 1. irabToGrammar: irab_short → grammar.js kavramları
// 2. balaghaToKey: balagha_note → balagha.js sanat anahtarları
// 3. verbToType: kök + pos → fiilTypes.js sınıflandırma
//
// Kullanım:
//   import { irabToGrammar, balaghaToKey, verbToType, getRelatedConcepts } from './crossLinks';
// ═══════════════════════════════════════════════════════════

import { getVerbType, classifyRoot } from './fiilTypes.js';

// ── İrab → Grammar Kavram Haritası ──
// irab_short değerlerindeki anahtar kelimeler → grammar.js anahtarları
const IRAB_KEYWORD_MAP = {
  // i'rab halleri
  "mecrûr": "mecrûr",
  "merfû": "merfû",
  "mansûb": "mansûb",
  "meczûm": "jazm",
  "cezm": "jazm",

  // cümle unsurları
  "mübtedâ": "mübtedâ",
  "haber": "haber",
  "fâil": "fâil",
  "nâib-i fâil": "nâib-i fâil",
  "mef'ûl bih": "mef'ûl",
  "mef'ûl mutlak": "mef'ûl mutlak",
  "temyîz": "temyîz",
  "hâl": "hâl",

  // fiil türleri
  "fiil-i mâzî": "fiil-i mâzî",
  "fiil-i muzâri": "fiil-i muzâri",
  "emir": "fiil-i emir",
  "muzâri": "fiil-i muzâri",
  "mechûl": "meçhul",

  // izâfet ve tâbiler
  "muzâf": "muzâf",
  "muzâfun ileyh": "muzâfun ileyh",
  "sıfat": "sıfat",
  "atıf": "atıf",
  "bedel": "bedel",
  "te'kîd": "te'kîd",

  // şibh-i cümle
  "câr-mecrûr": "câr-mecrûr",
  "harf-i cer": "harf-i cer",
  "zarf": "zarf",

  // edatlar ve cümle türleri
  "nefiy": "nefiy",
  "istifhâm": "istifham",
  "istifham": "istifham",
  "nida": "nida",
  "kasem": "kasem",
  "istisna": "istisna",
  "şart": "şart",
  "hasr": "hasr",

  // ism türleri
  "ism-i mevsûl": "ism-i mevsûl",
  "ism-i işâret": "ism-i işâret",
  "ism-i fâil": "ism-i fâil",
  "ism-i mef'ûl": "ism-i mef'ûl",
  "ism-i tafdîl": "ism-i tafdîl",
  "ism-i inna": "ism-i inna",
  "masdar": "masdar",
  "tesniye": "tesniye",

  // bâblar — handled separately in irabToGrammar for precise matching

  // özel yapılar
  "haber mukaddem": "haber",
  "mübtedâ muahhar": "mübtedâ",
  "ism-i inna": "ism-i inna",
  "lâm-ı emir": "lâm-ı emir",
  "lâm-ı te'kîd": "lâm-ı te'kîd",
  "sin-i istikbâl": "sin-i istikbâl",
};

// ── Belâgat Not → Balagha Anahtar Haritası ──
const BALAGHA_KEYWORD_MAP = {
  "takdîm": "taqdim",
  "te'hîr": "taqdim",
  "hazf": "hazf",
  "mahzûf": "hazf",
  "tıbâk": "tibaq",
  "tezâd": "tibaq",
  "tekrar": "tikrar",
  "tekrîr": "tikrar",
  "iltifât": "iltifat",
  "isti'âre": "istiare",
  "istiare": "istiare",
  "mukâbele": "muqabele",
  "istifhâm-ı inkârî": "istifham_inkari",
  "istifham-ı inkari": "istifham_inkari",
  "istifhâm": "istifham_inkari",
  "kasem": "kasem_balagha",
  "yemin": "kasem_balagha",
  "hasr": "hasr",
  "itnâb": "itnab",
  "teşbîh": "tesbih",
  "mecâz": "mecaz",
  "kinâye": "kinaye",
  "cinâs": "cinas",
  "secî": "seci",
  "terâküm": "terakum",
  "tedrîc": "tedric",
  "teşhîs": "teshis",
  "kişileştirme": "teshis",
  "îcâz": "icaz",
};

/**
 * irab_short metninden grammar.js kavram anahtarlarını çıkarır
 * @param {string} irabShort — örn: "câr-mecrûr, haber mukaddem"
 * @returns {string[]} — grammar.js anahtarları: ["câr-mecrûr", "haber"]
 */
export function irabToGrammar(irabShort) {
  if (!irabShort) return [];
  const results = new Set();
  const lower = irabShort.toLowerCase();

  // Check all keywords (longest first for correct matching)
  const keywords = Object.keys(IRAB_KEYWORD_MAP).sort((a, b) => b.length - a.length);
  for (const keyword of keywords) {
    if (lower.includes(keyword.toLowerCase())) {
      const grammarKey = IRAB_KEYWORD_MAP[keyword];
      if (grammarKey) results.add(grammarKey);
    }
  }

  // Precise bâb matching (avoid "IV" matching "V")
  const babMap = {
    "II": "tef'îl", "III": "mufâ'ale", "IV": "if'âl",
    "V": "tefa''ul", "VI": "tefa'ul", "VII": "infi'âl",
    "VIII": "ifti'âl", "X": "istif'âl",
  };
  const babMatch = irabShort.match(/\b(X|VIII|VII|VI|V|IV|III|II)\.\s*bâb/i);
  if (babMatch && babMap[babMatch[1]]) {
    results.add(babMap[babMatch[1]]);
  }
  return [...results];
}

/**
 * balagha_note metninden balagha.js sanat anahtarlarını çıkarır
 * @param {string} balNote — örn: "İsti'âre: Allah'ın kudreti..."
 * @returns {string[]} — balagha.js anahtarları: ["istiare"]
 */
export function balaghaToKey(balNote) {
  if (!balNote) return [];
  const results = new Set();
  // Normalize: remove circumflex accents, Turkish special chars, and combining marks
  const lower = balNote.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // strip combining marks
    .replace(/ı/g, 'i').replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ö/g, 'o').replace(/ü/g, 'u');

  const keywords = Object.keys(BALAGHA_KEYWORD_MAP).sort((a, b) => b.length - a.length);
  for (const keyword of keywords) {
    const normKey = keyword.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/ı/g, 'i').replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ö/g, 'o').replace(/ü/g, 'u');
    if (lower.includes(normKey)) {
      results.add(BALAGHA_KEYWORD_MAP[keyword]);
    }
  }
  return [...results];
}

/**
 * Bir kelimenin fiil tipini döndürür
 * @param {string} root — kök, örn: "و-ع-د"
 * @param {string} pos — "fil" ise fiil kontrolü
 * @returns {object|null} — fiilTypes veritabanından tip bilgisi
 */
export function verbToType(root, pos) {
  if (pos !== "fil" || !root) return null;
  return getVerbType(root) || classifyRoot(root);
}

/**
 * Bir kelime için tüm çapraz bağlantıları döndürür
 * @param {object} word — surah kelimesi { irab_short, balagha_note, root, pos }
 * @returns {object} — { grammar: [...], balagha: [...], verbType: {...} }
 */
export function getWordCrossLinks(word) {
  return {
    grammar: irabToGrammar(word.irab_short),
    balagha: balaghaToKey(word.balagha_note),
    verbType: verbToType(word.root, word.pos),
  };
}

/**
 * Bir grammar kavramına bağlı tüm belâgat sanatlarını döndürür
 * Örn: "istifham" → ["istifham_inkari"]
 */
export function grammarToBalagha(grammarKey) {
  const map = {
    "istifham": ["istifham_inkari"],
    "kasem": ["kasem_balagha"],
    "hasr": ["hasr", "taqdim"],
    "mef'ûl": ["taqdim"],
    "nefiy": ["istifham_inkari"],
    "hâl": ["teshis"],
    "masdar": [],
    "istiare": ["istiare"],
    "tefa'ul": [],
  };
  return map[grammarKey] || [];
}

/**
 * Belirli bir grammar kavramının geçtiği tüm irab_short kalıplarını arar
 * Surah verileri üzerinde kullanılır
 */
export function findIrabByGrammar(words, grammarKey) {
  return words.filter(w => {
    const links = irabToGrammar(w.irab_short);
    return links.includes(grammarKey);
  });
}

export default {
  irabToGrammar,
  balaghaToKey,
  verbToType,
  getWordCrossLinks,
  grammarToBalagha,
  findIrabByGrammar,
};
