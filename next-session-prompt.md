# Ustaz — Sonraki Oturum Prompt

**Tarih:** 2026-03-21
**Proje:** Ustaz — Kur'an Arapçası Öğrenme Uygulaması
**Son Versiyon:** v0.7.0 (build geçiyor, 17 ders, 574 kelime, 165 quiz, 53 gramer terimi, 15 vezin kalıbı)

---

## v0.7'de Yapılanlar

### L14–L17 Eklendi ✅
| Ders | Sure | Kelime | Quiz | Yapılar |
|------|------|--------|------|---------|
| L14 | Kâri'a (101) | 28 | 10 | وَمَا أَدْرَاكَ ta'zîm, أَمَّا…فَ tafṣîl, فَاعِلَة kalıbı |
| L15 | Zilzâl (99) | 26 | 10 | إِذَا şart, مَنْ şart+cezâ, temyîz, II. bâb aktif (تُحَدِّثُ) |
| L16 | Beyyine (98) | 48 | 10 | كَانَ nâkıs, V. bâb (تَفَرَّقَ), hasr (إِلَّا), hâl, ism-i tafdîl |
| L17 | Kadr (97) | 24 | 10 | مِنْ tafdîliye, خَيْر ism-i tafdîl, V. bâb (تَنَزَّلَ), ism-i zaman |

### Yeni Gramer Terimleri (+7 → 53 toplam) ✅
- ism-i tafdîl (أَفْعَل karşılaştırma)
- tefa''ul (V. bâb: تَفَعَّلَ)
- temyîz (التمييز)
- nâib-i fâil (نائب الفاعل)
- ism-i zaman (اسم الزمان/المكان)
- kâne (كان وأخواتها nâkıs fiiller)
- tafṣîl (أَمَّا…فَ yapısı)

### Yeni Vezin Kalıpları (+3 → 15 toplam) ✅
- تَفَعَّلَ (V. bâb)
- مَفْعَل (ism-i zaman/mekân)
- أَفْعَل (ism-i tafdîl)

### grammarNotes Tamamlandı ✅
- L14: وَمَا أَدْرَاكَ, أَمَّا…فَ, فَاعِلَة edebi kullanımı
- L15: إِذَا kesinlik şartı, مَنْ şart+cezâ, temyîz
- L16: كَانَ nâkıs, V. bâb mutâva'at, ism-i tafdîl, hâl
- L17: ism-i tafdîl + مِنْ, V. bâb تَنَزَّلَ, ism-i zaman

### README Güncellendi ✅
- Seviye 2 ders tablosu (L11–L17)
- 53 gramer, 15 vezin, 574 kelime istatistikleri
- Yol haritası güncellendi

### Bâb Durumu (8/10) — V. bâb YENİ ✅
I ✅ | II ✅ | III ✅ | IV ✅ | V ✅ | VI ✅ | VII ✅ | VIII ✅ | IX ❌ | X ✅

### Bundle
- CSS: 34.0 KB (gzip: 6.4 KB)
- JS: 522 KB (gzip: 160 KB) — chunk warning var, code-split önerilir
- Toplam satır: curriculum.js 7098, grammar.js 58, vezin.js 170

---

## Sonraki Oturum Hedefleri

### Seçenek A: GitHub Push + Vercel Deploy 🚀
- `git add . && git commit -m "v0.7.0: L14-L17, 7 grammar, 3 vezin"` → push
- Vercel'de deploy, PWA test

### Seçenek B: Seviye 2 Tamamlama — L18–L20
| Ders | Sure | Yapılar |
|------|------|---------|
| L18 | Tîn (95) | Kasem zinciri, لَقَدْ te'kîd, أَحْسَنُ tafdîl |
| L19 | Duhâ (93) | Nefiy+istikbâl (مَا وَدَّعَكَ), V. bâb devam |
| L20 | İnşirâh (94) | إِنَّ te'kîd zinciri, مَعَ zarfı, IX. bâb (if'ilâl) tanıtım |

### Seçenek C: Mobil Polish
- Swipe ile ders geçişi (touch gesture)
- Dark/Light tema toggle
- Ders arama (LessonNav'da)
- Service Worker (offline cache)
- Code-splitting (curriculum.js lazy load → bundle warning çözer)

### Seçenek D: Kod Kalitesi
- curriculum.js code-split (dynamic import per level)
- ESLint + Prettier config
- Unit test (quiz data integrity: relatedRoots, correct answer index)
- Accessibility audit (aria-labels, focus management)

---

## Teknik Notlar

### Dosya Yapısı
```
src/data/
  curriculum.js  — 7098 satır, 17 ders (L01–L17)
  grammar.js     — 58 satır, 53 terim
  vezin.js       — 170 satır, 15 kalıp
  assessment.js  — 241 satır, seviye belirleme
```

### Gramer {curly brace} Referansları
Yeni L14–L17'de kullanılan ve grammar.js'te karşılığı olan yeni anahtarlar:
- `{ism-i tafdîl}`, `{tefa''ul}`, `{temyîz}`, `{nâib-i fâil}`, `{ism-i zaman}`, `{kâne}`, `{tafṣîl}`
- Mevcut anahtarlar aynen kullanılmaya devam: `{meçhul}`, `{hasr}`, `{hâl}`, `{mef'ûl mutlak}`, `{cem-i teksîr}` vb.

### Eksik Bâblar
- **IX. bâb (if'ilâl)**: اِفْعَلَّ kalıbı. Renk değişimi anlamı. Nadir. İnşirâh (L20) veya Abese (L21+) için planlanabilir.
- Tüm diğer 8 bâb tamamlandı.

### Bundle Optimizasyon Notu
JS bundle 522 KB (gzip 160 KB). Vite chunk uyarısı veriyor. Çözüm:
```js
// vite.config.js — manualChunks
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        curriculum: ['./src/data/curriculum.js'],
      }
    }
  }
}
```
Veya dynamic import ile level bazlı lazy loading.
