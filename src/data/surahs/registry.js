// ═══════════════════════════════════════════════════════════
// Surah Registry — Sure Metadata + Kapsam Takibi
// v0.19.0: Merkezi sure haritası
// ═══════════════════════════════════════════════════════════
//
// Her sure kaydı şunları içerir:
//   - Temel bilgiler (isim, ayet sayısı, cüz, nüzul)
//   - Kapsam bilgisi (hangi ayetler, hangi dersler)
//   - Durum: "complete" | "partial" | "planned"
//
// Yeni sure eklendikçe bu dosya güncellenir.
// v0.20+: surah dosyaları (067-mulk.js vb.) bu registry'ye kayıt olur.
// ═══════════════════════════════════════════════════════════

/**
 * @typedef {Object} SurahEntry
 * @property {number} surah - Sure numarası
 * @property {string} name - Türkçe isim
 * @property {string} nameAr - Arapça isim
 * @property {number} ayatCount - Toplam ayet sayısı
 * @property {number} cuz - Cüz numarası
 * @property {string} revelation - "mekki" | "medeni"
 * @property {string} status - "complete" | "partial" | "planned"
 * @property {number[]} coveredAyahs - Kapsanan ayet numaraları
 * @property {string[]} lessonIds - İlişkili ders kimlikleri
 * @property {string} [note] - Ek not
 */

/** @type {SurahEntry[]} */
const surahRegistry = [
  // ── CÜZ 30 (AMME) ─────────────────────────────────────
  {
    surah: 78, name: "Nebe", nameAr: "سُورَةُ النَّبَإ",
    ayatCount: 40, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 40 }, (_, i) => i + 1),
    lessonIds: ["L24-nebe", "L56-nebe-2", "L57-nebe-3", "L58-nebe-4", "S78-B01-nebe", "S78-B02-nebe", "S78-B03-nebe", "S78-B04-nebe"],
    note: "L24: 1-8, L56: 9-20, L57: 21-30, L58: 31-40",
  },
  {
    surah: 79, name: "Nâzi'ât", nameAr: "سُورَةُ النَّازِعَات",
    ayatCount: 46, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 46 }, (_, i) => i + 1),
    lessonIds: ["L25-naziat", "L59-naziat-2", "L60-naziat-3", "L61-naziat-4", "L62-naziat-5", "S79-B01-naziat", "S79-B02-naziat", "S79-B03-naziat", "S79-B04-naziat"],
    note: "L25: 1-5, L59: 6-14, L60: 15-26, L61: 27-39, L62: 40-46",
  },
  {
    surah: 80, name: "Abese", nameAr: "سُورَةُ عَبَسَ",
    ayatCount: 42, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 42 }, (_, i) => i + 1),
    lessonIds: ["L21-abese", "S80-B01-abese", "S80-B02-abese", "S80-B03-abese", "S80-B04-abese"],
  },
  {
    surah: 81, name: "Tekvîr", nameAr: "سُورَةُ التَّكْوِير",
    ayatCount: 29, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 29 }, (_, i) => i + 1),
    lessonIds: ["S81-B01-tekvir", "S81-B02-tekvir"],
  },
  {
    surah: 82, name: "İnfitâr", nameAr: "سُورَةُ الانْفِطَار",
    ayatCount: 19, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 19 }, (_, i) => i + 1),
    lessonIds: ["L26-infitar", "S82-B01-infitar", "S82-B02-infitar", "S82-B03-infitar"],
  },
  {
    surah: 83, name: "Mutaffifîn", nameAr: "سُورَةُ المُطَفِّفِين",
    ayatCount: 36, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 36 }, (_, i) => i + 1),
    lessonIds: ["L27-mutaffifin", "S83-B01-mutaffifin", "S83-B02-mutaffifin", "S83-B03-mutaffifin", "S83-B04-mutaffifin"],
  },
  {
    surah: 84, name: "İnşikâk", nameAr: "سُورَةُ الانْشِقَاق",
    ayatCount: 25, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 25 }, (_, i) => i + 1),
    lessonIds: ["S84-B01-insikak", "S84-B02-insikak"],
  },
  {
    surah: 85, name: "Burûc", nameAr: "سُورَةُ البُرُوج",
    ayatCount: 22, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 22 }, (_, i) => i + 1),
    lessonIds: ["L28-buruc", "S85-B01-buruc", "S85-B02-buruc"],
  },
  {
    surah: 86, name: "Târık", nameAr: "سُورَةُ الطَّارِق",
    ayatCount: 17, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 17 }, (_, i) => i + 1),
    lessonIds: ["L22-tariq", "S86-B01-tarik"],
  },
  {
    surah: 87, name: "A'lâ", nameAr: "سُورَةُ الأَعْلَى",
    ayatCount: 19, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 19 }, (_, i) => i + 1),
    lessonIds: ["L23-ala", "S87-B01-ala", "S87-B02-ala"],
  },
  {
    surah: 88, name: "Gâşiye", nameAr: "سُورَةُ الغَاشِيَة",
    ayatCount: 26, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 26 }, (_, i) => i + 1),
    lessonIds: ["S88-B01-gasiye", "S88-B02-gasiye"],
  },
  {
    surah: 89, name: "Fecr", nameAr: "سُورَةُ الفَجْر",
    ayatCount: 30, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 30 }, (_, i) => i + 1),
    lessonIds: ["L29-fecr", "S89-B01-fecr", "S89-B02-fecr", "S89-B03-fecr"],
  },
  {
    surah: 90, name: "Beled", nameAr: "سُورَةُ البَلَد",
    ayatCount: 20, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 20 }, (_, i) => i + 1),
    lessonIds: ["L30-beled", "S90-B01-beled", "S90-B02-beled"],
  },
  {
    surah: 91, name: "Şems", nameAr: "سُورَةُ الشَّمْس",
    ayatCount: 15, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 15 }, (_, i) => i + 1),
    lessonIds: ["L31-sems", "S91-B01-sems"],
  },
  {
    surah: 92, name: "Leyl", nameAr: "سُورَةُ اللَّيْل",
    ayatCount: 21, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 21 }, (_, i) => i + 1),
    lessonIds: ["L32-leyl", "S92-B01-leyl", "S92-B02-leyl"],
  },
  {
    surah: 93, name: "Duhâ", nameAr: "سُورَةُ الضُّحَى",
    ayatCount: 11, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 11 }, (_, i) => i + 1),
    lessonIds: ["L19-duha", "L33-duha", "L54-duha-insirah", "S93-B01-duha"],
  },
  {
    surah: 94, name: "İnşirâh", nameAr: "سُورَةُ الشَّرْح",
    ayatCount: 8, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 8 }, (_, i) => i + 1),
    lessonIds: ["L20-insirah", "L34-insirah", "L54-duha-insirah", "S94-B01-insirrah"],
  },
  {
    surah: 95, name: "Tîn", nameAr: "سُورَةُ التِّين",
    ayatCount: 8, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 8 }, (_, i) => i + 1),
    lessonIds: ["L18-tin", "L35-tin", "S95-B01-tin"],
  },
  {
    surah: 96, name: "Alak", nameAr: "سُورَةُ العَلَق",
    ayatCount: 19, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 19 }, (_, i) => i + 1),
    lessonIds: ["L36-alak", "L55-alak-full", "S96-B01-alak", "S96-B02-alak", "S96-B03-alak"],
  },
  {
    surah: 97, name: "Kadr", nameAr: "سُورَةُ القَدْر",
    ayatCount: 5, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 5 }, (_, i) => i + 1),
    lessonIds: ["L17-kadr", "L37-kadr", "S97-B01-kadir"],
  },
  {
    surah: 98, name: "Beyyine", nameAr: "سُورَةُ البَيِّنَة",
    ayatCount: 8, cuz: 30, revelation: "medeni", status: "complete",
    coveredAyahs: Array.from({ length: 8 }, (_, i) => i + 1),
    lessonIds: ["L16-beyyine", "L38-beyyine", "S98-B01-beyyine"],
  },
  {
    surah: 99, name: "Zilzâl", nameAr: "سُورَةُ الزَّلْزَلَة",
    ayatCount: 8, cuz: 30, revelation: "medeni", status: "complete",
    coveredAyahs: Array.from({ length: 8 }, (_, i) => i + 1),
    lessonIds: ["L15-zilzal", "L39-zilzal", "S99-B01-zilzal"],
  },
  {
    surah: 100, name: "Âdiyât", nameAr: "سُورَةُ العَادِيَات",
    ayatCount: 11, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 11 }, (_, i) => i + 1),
    lessonIds: ["L40-adiyat", "S100-B01-adiyat"],
  },
  {
    surah: 101, name: "Kâri'a", nameAr: "سُورَةُ القَارِعَة",
    ayatCount: 11, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 11 }, (_, i) => i + 1),
    lessonIds: ["L14-karia", "L41-karia", "S101-B01-karia"],
  },
  {
    surah: 102, name: "Tekâsür", nameAr: "سُورَةُ التَّكَاثُر",
    ayatCount: 8, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 8 }, (_, i) => i + 1),
    lessonIds: ["L13-tekasur", "L42-tekasur", "S102-B01-tekasur"],
  },
  {
    surah: 103, name: "Asr", nameAr: "سُورَةُ العَصْر",
    ayatCount: 3, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: [1, 2, 3],
    lessonIds: ["L03-asr", "S103-B01-asr"],
  },
  {
    surah: 104, name: "Hümeze", nameAr: "سُورَةُ الهُمَزَة",
    ayatCount: 9, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 9 }, (_, i) => i + 1),
    lessonIds: ["L12-humeze", "L43-humeze", "S104-B01-humeze"],
  },
  {
    surah: 105, name: "Fîl", nameAr: "سُورَةُ الفِيل",
    ayatCount: 5, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 5 }, (_, i) => i + 1),
    lessonIds: ["L11-fil", "L44-fil", "S105-B01-fil"],
  },
  {
    surah: 106, name: "Kureyş", nameAr: "سُورَةُ قُرَيْش",
    ayatCount: 4, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 4 }, (_, i) => i + 1),
    lessonIds: ["L10-kureysh", "L45-qurays", "S106-B01-kureys"],
  },
  {
    surah: 107, name: "Mâ'ûn", nameAr: "سُورَةُ المَاعُون",
    ayatCount: 7, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 7 }, (_, i) => i + 1),
    lessonIds: ["L09-maun", "L46-maun", "S107-B01-maun"],
  },
  {
    surah: 108, name: "Kevser", nameAr: "سُورَةُ الكَوْثَر",
    ayatCount: 3, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: [1, 2, 3],
    lessonIds: ["L02-kevser", "L47-kevser", "S108-B01-kevser"],
  },
  {
    surah: 109, name: "Kâfirûn", nameAr: "سُورَةُ الكَافِرُون",
    ayatCount: 6, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 6 }, (_, i) => i + 1),
    lessonIds: ["L08-kafirun", "L48-kafirun", "S109-B01-kafirun"],
  },
  {
    surah: 110, name: "Nasr", nameAr: "سُورَةُ النَّصْر",
    ayatCount: 3, cuz: 30, revelation: "medeni", status: "complete",
    coveredAyahs: [1, 2, 3],
    lessonIds: ["L07-nasr", "L49-nasr", "S110-B01-nasr"],
  },
  {
    surah: 111, name: "Tebbet", nameAr: "سُورَةُ المَسَد",
    ayatCount: 5, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 5 }, (_, i) => i + 1),
    lessonIds: ["L06-tebbet", "L50-tebbet", "S111-B01-tebbet"],
  },
  {
    surah: 112, name: "İhlâs", nameAr: "سُورَةُ الإِخْلَاص",
    ayatCount: 4, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: [1, 2, 3, 4],
    lessonIds: ["L05-ihlas", "L51-ihlas-depth", "S112-B01-ihlas"],
  },
  {
    surah: 113, name: "Felak", nameAr: "سُورَةُ الفَلَق",
    ayatCount: 5, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 5 }, (_, i) => i + 1),
    lessonIds: ["L04-nas-felak", "L52-felak", "S113-B01-felak"],
  },
  {
    surah: 114, name: "Nâs", nameAr: "سُورَةُ النَّاس",
    ayatCount: 6, cuz: 30, revelation: "medeni", status: "complete",
    coveredAyahs: Array.from({ length: 6 }, (_, i) => i + 1),
    lessonIds: ["L04-nas-felak", "L53-nas", "S114-B01-nas"],
  },

  // ── CÜZ 27 (ZÂRIYÂT) ──────────────────────────────────
  {
    surah: 55, name: "Rahmân", nameAr: "سُورَةُ الرَّحْمَـٰنِ",
    ayatCount: 78, cuz: 27, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 78 }, (_, i) => i + 1),
    lessonIds: ["S55-B01-rahman", "S55-B02-rahman", "S55-B03-rahman", "S55-B04-rahman", "S55-B05-rahman", "S55-B06-rahman"],
    note: "v0.22: İkinci surah-format ders. B01: 1-13, B02: 14-25, B03: 26-34, B04: 35-45, B05: 46-61, B06: 62-78",
  },

  // ── CÜZ 29 (TABÂREK) ──────────────────────────────────
  {
    surah: 67, name: "Mülk", nameAr: "سُورَةُ المُلْك",
    ayatCount: 30, cuz: 29, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 30 }, (_, i) => i + 1),
    lessonIds: ["S67-B01-mulk", "S67-B02-mulk", "S67-B03-mulk", "S67-B04-mulk", "S67-B05-mulk"],
    note: "v0.20: İlk surah-format ders. B01: 1-5, B02: 6-11, B03: 12-18, B04: 19-24, B05: 25-30",
  },

  // ── CÜZ 1 ──────────────────────────────────────────────
  {
    surah: 1, name: "Fâtiha", nameAr: "سُورَةُ الفَاتِحَة",
    ayatCount: 7, cuz: 1, revelation: "mekki", status: "complete",
    coveredAyahs: [1, 2, 3, 4, 5, 6, 7],
    lessonIds: ["L01-fatiha"],
  },
];

export default surahRegistry;

// ── Yardımcı Fonksiyonlar ─────────────────────────────────

/** Sure numarasıyla kayıt bul */
export function getSurah(num) {
  return surahRegistry.find((s) => s.surah === num) || null;
}

/** Belirli durumdaki sureleri getir */
export function getSurahsByStatus(status) {
  return surahRegistry.filter((s) => s.status === status);
}

/** Belirli cüzdeki sureleri getir */
export function getSurahsByCuz(cuz) {
  return surahRegistry.filter((s) => s.cuz === cuz);
}

/** Toplam istatistikler */
export function getStats() {
  const total = surahRegistry.length;
  const complete = surahRegistry.filter((s) => s.status === "complete").length;
  const partial = surahRegistry.filter((s) => s.status === "partial").length;
  const totalAyahs = surahRegistry.reduce((sum, s) => sum + s.ayatCount, 0);
  const coveredAyahs = surahRegistry.reduce(
    (sum, s) => sum + s.coveredAyahs.length,
    0,
  );
  return { total, complete, partial, totalAyahs, coveredAyahs };
}

/** Bir dersin hangi surelere ait olduğunu bul */
export function getSurahsForLesson(lessonId) {
  return surahRegistry.filter((s) => s.lessonIds.includes(lessonId));
}

/** Kapsanmamış ayetleri getir (tamamlama planı için) */
export function getUncoveredAyahs(surahNum) {
  const entry = getSurah(surahNum);
  if (!entry) return [];
  const covered = new Set(entry.coveredAyahs);
  return Array.from({ length: entry.ayatCount }, (_, i) => i + 1).filter(
    (a) => !covered.has(a),
  );
}
