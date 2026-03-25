// ═══════════════════════════════════════════════════════════
// src/data/surahs/ — Sure Bazlı Ders Sistemi
// v0.19.0: Registry + dynamic import altyapısı
// ═══════════════════════════════════════════════════════════
//
// MİMARİ:
//   registry.js  → Tüm surelerin metadata + kapsam bilgisi
//   NNN-slug.js  → Sure bazlı ders dosyaları (v0.20+)
//
// MEVCUT DERSLER (L01-L62):
//   curriculum.js + levels/ dosyalarında kalıyor.
//   registry.js bu derslerin sure eşlemelerini tutuyor.
//
// YENİ DERSLER (v0.20+):
//   Doğrudan surah dosyalarında yazılacak:
//     067-mulk.js → { surah: 67, lessons: [...] }
//   curriculum.js'e dynamic import ile beslenecek.
//
// ═══════════════════════════════════════════════════════════

// Re-export registry and helpers
export {
  default as surahRegistry,
  getSurah,
  getSurahsByStatus,
  getSurahsByCuz,
  getStats,
  getSurahsForLesson,
  getUncoveredAyahs,
} from "./registry.js";

/**
 * Sure dosyasını dynamic import ile yükle (v0.20+ sureler için).
 * Mevcut L-prefix dersler hâlâ curriculum.js üzerinden geliyor.
 *
 * @param {number} surahNum - Sure numarası (ör: 67)
 * @returns {Promise<Object|null>} Sure modülü veya null
 */

/** Tüm surah-format ders dosyalarının slug haritası */
const slugMap = {
  // Elle yazılmış (v0.27)
  55: "rahman",
  67: "mulk",
  80: "abese",
  82: "infitar",
  96: "alak",
  // Pipeline üretimi (v0.30)
  78: "nebe",
  79: "naziat",
  81: "tekvir",
  83: "mutaffifin",
  84: "insikak",
  85: "buruc",
  86: "tarik",
  87: "ala",
  88: "gasiye",
  89: "fecr",
  90: "beled",
  91: "sems",
  92: "leyl",
  93: "duha",
  94: "insirrah",
  95: "tin",
  97: "kadir",
  98: "beyyine",
  99: "zilzal",
  100: "adiyat",
  101: "karia",
  102: "tekasur",
  103: "asr",
  104: "humeze",
  105: "fil",
  106: "kureys",
  107: "maun",
  108: "kevser",
  109: "kafirun",
  110: "nasr",
  111: "tebbet",
  112: "ihlas",
  113: "felak",
  114: "nas",
};

export async function loadSurah(surahNum) {
  const slug = slugMap[surahNum];
  if (!slug) return null;

  try {
    const num = surahNum.toString().padStart(3, "0");
    const mod = await import(`./${num}-${slug}.js`);
    return mod.default || mod;
  } catch (err) {
    console.warn(`[Ustaz] Sure ${surahNum} dosyası yüklenemedi:`, err);
    return null;
  }
}

/**
 * Tüm surah-format dersleri lazy yükle ve birleştir.
 * App.jsx startup'ında çağrılır.
 *
 * @returns {Promise<Array>} Tüm surah lesson'ları (düz dizi)
 */
export async function loadAllSurahLessons() {
  const surahNums = Object.keys(slugMap).map(Number);
  const results = await Promise.all(surahNums.map(loadSurah));
  // Her modül bir lesson dizisi döndürür
  return results.filter(Boolean).flat();
}
