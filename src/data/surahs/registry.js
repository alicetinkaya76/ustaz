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
    lessonIds: ["L24-nebe", "L56-nebe-2", "L57-nebe-3", "L58-nebe-4"],
    note: "L24: 1-8, L56: 9-20, L57: 21-30, L58: 31-40",
  },
  {
    surah: 79, name: "Nâzi'ât", nameAr: "سُورَةُ النَّازِعَات",
    ayatCount: 46, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 46 }, (_, i) => i + 1),
    lessonIds: ["L25-naziat", "L59-naziat-2", "L60-naziat-3", "L61-naziat-4", "L62-naziat-5"],
    note: "L25: 1-5, L59: 6-14, L60: 15-26, L61: 27-39, L62: 40-46",
  },
  {
    surah: 80, name: "Abese", nameAr: "سُورَةُ عَبَسَ",
    ayatCount: 42, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 42 }, (_, i) => i + 1),
    lessonIds: ["L21-abese", "S80-B01-abese", "S80-B02-abese", "S80-B03-abese", "S80-B04-abese"],
  },
  {
    surah: 82, name: "İnfitâr", nameAr: "سُورَةُ الانْفِطَار",
    ayatCount: 19, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 19 }, (_, i) => i + 1),
    lessonIds: ["L26-infitar", "S82-B01-infitar", "S82-B02-infitar", "S82-B03-infitar"],
  },
  {
    surah: 83, name: "Mutaffifîn", nameAr: "سُورَةُ المُطَفِّفِين",
    ayatCount: 36, cuz: 30, revelation: "mekki", status: "partial",
    coveredAyahs: [1, 2, 3, 4, 5],
    lessonIds: ["L27-mutaffifin"],
  },
  {
    surah: 85, name: "Burûc", nameAr: "سُورَةُ البُرُوج",
    ayatCount: 22, cuz: 30, revelation: "mekki", status: "partial",
    coveredAyahs: [1, 2, 3, 4, 5],
    lessonIds: ["L28-buruc"],
  },
  {
    surah: 86, name: "Târık", nameAr: "سُورَةُ الطَّارِق",
    ayatCount: 17, cuz: 30, revelation: "mekki", status: "partial",
    coveredAyahs: [1, 2, 3, 4, 5],
    lessonIds: ["L22-tariq"],
  },
  {
    surah: 87, name: "A'lâ", nameAr: "سُورَةُ الأَعْلَى",
    ayatCount: 19, cuz: 30, revelation: "mekki", status: "partial",
    coveredAyahs: [1, 2, 3, 4, 5, 6, 7],
    lessonIds: ["L23-ala"],
  },
  {
    surah: 89, name: "Fecr", nameAr: "سُورَةُ الفَجْر",
    ayatCount: 30, cuz: 30, revelation: "mekki", status: "partial",
    coveredAyahs: [1, 2, 3, 4, 5],
    lessonIds: ["L29-fecr"],
  },
  {
    surah: 90, name: "Beled", nameAr: "سُورَةُ البَلَد",
    ayatCount: 20, cuz: 30, revelation: "mekki", status: "partial",
    coveredAyahs: [1, 2, 3, 4, 5],
    lessonIds: ["L30-beled"],
  },
  {
    surah: 91, name: "Şems", nameAr: "سُورَةُ الشَّمْس",
    ayatCount: 15, cuz: 30, revelation: "mekki", status: "partial",
    coveredAyahs: [1, 2, 3, 4, 5, 6],
    lessonIds: ["L31-sems"],
  },
  {
    surah: 92, name: "Leyl", nameAr: "سُورَةُ اللَّيْل",
    ayatCount: 21, cuz: 30, revelation: "mekki", status: "partial",
    coveredAyahs: [1, 2, 3, 4],
    lessonIds: ["L32-leyl"],
  },
  {
    surah: 93, name: "Duhâ", nameAr: "سُورَةُ الضُّحَى",
    ayatCount: 11, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 11 }, (_, i) => i + 1),
    lessonIds: ["L19-duha", "L33-duha", "L54-duha-insirah"],
  },
  {
    surah: 94, name: "İnşirâh", nameAr: "سُورَةُ الشَّرْح",
    ayatCount: 8, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 8 }, (_, i) => i + 1),
    lessonIds: ["L20-insirah", "L34-insirah", "L54-duha-insirah"],
  },
  {
    surah: 95, name: "Tîn", nameAr: "سُورَةُ التِّين",
    ayatCount: 8, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 8 }, (_, i) => i + 1),
    lessonIds: ["L18-tin", "L35-tin"],
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
    lessonIds: ["L17-kadr", "L37-kadr"],
  },
  {
    surah: 98, name: "Beyyine", nameAr: "سُورَةُ البَيِّنَة",
    ayatCount: 8, cuz: 30, revelation: "medeni", status: "complete",
    coveredAyahs: Array.from({ length: 8 }, (_, i) => i + 1),
    lessonIds: ["L16-beyyine", "L38-beyyine"],
  },
  {
    surah: 99, name: "Zilzâl", nameAr: "سُورَةُ الزَّلْزَلَة",
    ayatCount: 8, cuz: 30, revelation: "medeni", status: "complete",
    coveredAyahs: Array.from({ length: 8 }, (_, i) => i + 1),
    lessonIds: ["L15-zilzal", "L39-zilzal"],
  },
  {
    surah: 100, name: "Âdiyât", nameAr: "سُورَةُ العَادِيَات",
    ayatCount: 11, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 11 }, (_, i) => i + 1),
    lessonIds: ["L40-adiyat"],
  },
  {
    surah: 101, name: "Kâri'a", nameAr: "سُورَةُ القَارِعَة",
    ayatCount: 11, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 11 }, (_, i) => i + 1),
    lessonIds: ["L14-karia", "L41-karia"],
  },
  {
    surah: 102, name: "Tekâsür", nameAr: "سُورَةُ التَّكَاثُر",
    ayatCount: 8, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 8 }, (_, i) => i + 1),
    lessonIds: ["L13-tekasur", "L42-tekasur"],
  },
  {
    surah: 103, name: "Asr", nameAr: "سُورَةُ العَصْر",
    ayatCount: 3, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: [1, 2, 3],
    lessonIds: ["L03-asr"],
  },
  {
    surah: 104, name: "Hümeze", nameAr: "سُورَةُ الهُمَزَة",
    ayatCount: 9, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 9 }, (_, i) => i + 1),
    lessonIds: ["L12-humeze", "L43-humeze"],
  },
  {
    surah: 105, name: "Fîl", nameAr: "سُورَةُ الفِيل",
    ayatCount: 5, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 5 }, (_, i) => i + 1),
    lessonIds: ["L11-fil", "L44-fil"],
  },
  {
    surah: 106, name: "Kureyş", nameAr: "سُورَةُ قُرَيْش",
    ayatCount: 4, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 4 }, (_, i) => i + 1),
    lessonIds: ["L10-kureysh", "L45-qurays"],
  },
  {
    surah: 107, name: "Mâ'ûn", nameAr: "سُورَةُ المَاعُون",
    ayatCount: 7, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 7 }, (_, i) => i + 1),
    lessonIds: ["L09-maun", "L46-maun"],
  },
  {
    surah: 108, name: "Kevser", nameAr: "سُورَةُ الكَوْثَر",
    ayatCount: 3, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: [1, 2, 3],
    lessonIds: ["L02-kevser", "L47-kevser"],
  },
  {
    surah: 109, name: "Kâfirûn", nameAr: "سُورَةُ الكَافِرُون",
    ayatCount: 6, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 6 }, (_, i) => i + 1),
    lessonIds: ["L08-kafirun", "L48-kafirun"],
  },
  {
    surah: 110, name: "Nasr", nameAr: "سُورَةُ النَّصْر",
    ayatCount: 3, cuz: 30, revelation: "medeni", status: "complete",
    coveredAyahs: [1, 2, 3],
    lessonIds: ["L07-nasr", "L49-nasr"],
  },
  {
    surah: 111, name: "Tebbet", nameAr: "سُورَةُ المَسَد",
    ayatCount: 5, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 5 }, (_, i) => i + 1),
    lessonIds: ["L06-tebbet", "L50-tebbet"],
  },
  {
    surah: 112, name: "İhlâs", nameAr: "سُورَةُ الإِخْلَاص",
    ayatCount: 4, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: [1, 2, 3, 4],
    lessonIds: ["L05-ihlas", "L51-ihlas-depth"],
  },
  {
    surah: 113, name: "Felak", nameAr: "سُورَةُ الفَلَق",
    ayatCount: 5, cuz: 30, revelation: "mekki", status: "complete",
    coveredAyahs: Array.from({ length: 5 }, (_, i) => i + 1),
    lessonIds: ["L04-nas-felak", "L52-felak"],
  },
  {
    surah: 114, name: "Nâs", nameAr: "سُورَةُ النَّاس",
    ayatCount: 6, cuz: 30, revelation: "medeni", status: "complete",
    coveredAyahs: Array.from({ length: 6 }, (_, i) => i + 1),
    lessonIds: ["L04-nas-felak", "L53-nas"],
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
