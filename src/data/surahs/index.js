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
export async function loadSurah(surahNum) {
  const slugMap = {
    // v0.20+ planı:
    // 67: "mulk",
    // 55: "rahman",
  };

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
