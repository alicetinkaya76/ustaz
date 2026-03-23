// ═══════════════════════════════════════════════════════════
// src/data/surahs/ — Sure Bazlı Ders Dosyaları (v0.20+ plan)
// ═══════════════════════════════════════════════════════════
//
// v0.20'den itibaren her sure kendi dosyasında olacak:
//   078-nebe.js, 079-naziat.js, 067-mulk.js ...
//
// Dosya formatı:
//   export default {
//     surah: 67,
//     name: "Mülk",
//     nameAr: "سُورَةُ المُلْك",
//     ayatCount: 30,
//     cuz: 29,
//     revelation: "mekki",
//     lessons: [ { id: "S67-B01", ... }, ... ]
//   }
//
// Dynamic import:
//   const mod = await import(`./surahs/${num.toString().padStart(3,'0')}-${slug}.js`);
//
// Mevcut L01-L62 dersleri (curriculum.js + levels/) korunur.
// Yeni dersler (v0.20+) S formatında buraya eklenir.
// İleride eski L dersleri de S formatına migrate edilecek.
// ═══════════════════════════════════════════════════════════
export {};
