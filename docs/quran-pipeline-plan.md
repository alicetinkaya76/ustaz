# Ustaz — Tam Kur'ân Pipeline Mimari Planı
## "Her Kelimeyi Kur'ân'dan Öğren" Vizyonu

---

## 1. MEVCUT DURUM

| Metrik | Mevcut | Hedef (Tüm Kur'ân) | Oran |
|--------|--------|---------------------|------|
| Sure | 5 (tam) + 30 (kısmi ders) | 114 | %4 |
| Ayet | ~188 (tam kelime analizi) | 6,236 | %3 |
| Kelime girişi | 822 | ~77,000 | %1 |
| rootDB kök | 362 | ~1,700 | %21 |
| Quiz | 96 | ~2,000+ | %5 |
| Sure dosya boyutu | 412KB (5 dosya) | ~9MB (114 dosya) | — |

### Mevcut Kelime Şeması (sure dosyası)
```
{
  arabic: "ٱقْرَأْ",           // ✦ zorunlu
  transliteration: "iqraʾ",    // ✦ zorunlu
  root: "ق-ر-أ",               // ✦ zorunlu
  pattern: "—",                 // ◆ opsiyonel (fiil/türev varsa)
  pos: "fil",                   // ✦ zorunlu (fil | ism | harf)
  meaning_tr: "oku!",           // ✦ zorunlu
  irab: "{Fiil-i emr}...",      // ✦ zorunlu (detaylı)
  irab_short: "emr, I. bâb",   // ✦ zorunlu
  turkish_bridge: "Kur'an...",  // ◆ opsiyonel
  balagha_note: "...",          // ◆ opsiyonel
}
```

---

## 2. VERİ KAYNAKLARI

### 2a. Ham Kur'ân Metni + Morfoloji
| Kaynak | İçerik | Format | Erişim |
|--------|--------|--------|--------|
| **Tanzil.net** | Arapça metin (Uthmani, Simple) | TXT/XML | ✅ Açık |
| **Quranic Arabic Corpus (QAC)** | Morfolojik analiz (kök, pos, kalıp) | CoNLL-like | ✅ Açık (corpus.quran.com) |
| **OpenITI** | Kur'ân + tefsir metinleri | mARkdown | ✅ LaCie disk'te |
| **Kur'ân-ı Kerim Meali (DİB)** | Türkçe çeviri | Çeşitli | ✅ API mevcut |

### 2b. İ'rab + Nahiv
| Kaynak | İçerik | Format | Erişim |
|--------|--------|--------|--------|
| **İ'râbü'l-Kur'ân — Yâkût** | Detaylı i'rab analizi | PDF (3 cilt) | ✅ Mevcut |
| **QAC Treebank** | Sözdizimi ağaçları (dependency) | XML | ✅ Açık |
| **ed-Dürru'l-Masûn — es-Semîn** | Klasik i'rab | OpenITI | ✅ LaCie |

### 2c. Kök Anlamları (rootDB)
| Kaynak | İçerik | Format | Erişim |
|--------|--------|--------|--------|
| **Müfredât — İsfahanî** | Kök etimolojisi + Kur'ân kullanımı | PDF (2 cilt) | ✅ Mevcut |
| **Lane's Lexicon** | Detaylı Arapça sözlük | Dijital | ✅ Açık |
| **Lisânü'l-Arab** | Kapsamlı Arapça sözlük | OpenITI | ✅ LaCie |

### 2d. Belâgat
| Kaynak | İçerik | Format | Erişim |
|--------|--------|--------|--------|
| **Mevcut balagha.js** | 21 sanat, 60+ örnek | JS | ✅ Proje içi |
| **el-Keşşâf — Zemahşerî** | Belâgat odaklı tefsir | OpenITI | ✅ LaCie |
| **Claude API** | Otomatik belâgat tespiti | API | ✅ Erişim var |

---

## 3. PİPELINE MİMARİSİ

```
┌─────────────────────────────────────────────────────────────┐
│                    USTAZ QURAN PIPELINE                       │
│                                                               │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌────────┐ │
│  │  Faz 0   │───▶│  Faz 1   │───▶│  Faz 2   │───▶│ Faz 3  │ │
│  │  HAM     │    │  MORFOLOJİ│    │  ZENGİN- │    │ ÇIKTI  │ │
│  │  VERİ    │    │  + KÖK    │    │  LEŞTİRME│    │ + QC   │ │
│  └──────────┘    └──────────┘    └──────────┘    └────────┘ │
│       │               │               │               │      │
│   Tanzil.net      QAC parse      Claude API       JS dosya  │
│   DİB Meal        rootDB match   İ'rab enrich     Quiz gen  │
│   Transliteration Pos tagging    Balagha detect   Lint+test │
│                                  Turkish bridge              │
└─────────────────────────────────────────────────────────────┘
```

### Faz 0 — Ham Veri Toplama (bir kere yapılır)
**Girdi**: Tanzil.net XML + QAC morfolojik data + DİB meali
**Çıktı**: `raw/{surah_num}.json` — her ayet için:
```json
{
  "surah": 2, "ayah": 1,
  "arabic": "الٓمٓ",
  "translation_tr": "Elif, Lâm, Mîm.",
  "words": [
    {
      "arabic": "الٓمٓ",
      "qac_root": "—",
      "qac_pos": "INL",
      "qac_features": "..."
    }
  ]
}
```

**Araçlar**: Python script (`pipeline/step0_raw_data.py`)
- Tanzil simple-clean.txt → ayet bazlı parse
- QAC morphology.txt → kelime bazlı morfoloji
- DİB meal API veya statik dosya → Türkçe çeviri
- Buckwalter → Arapça transliterasyon

### Faz 1 — Morfoloji + Kök Eşleştirme (otomatik)
**Girdi**: `raw/{surah_num}.json`
**Çıktı**: `enriched/{surah_num}.json` — her kelime için:
```json
{
  "arabic": "بِسْمِ",
  "transliteration": "bismi",
  "root": "س-م-و",
  "pattern": "فِعْل",
  "pos": "ism",
  "meaning_tr": "adıyla",
  "rootdb_match": true,
  "qac_confidence": 0.95
}
```

**Araçlar**: Python script (`pipeline/step1_morphology.py`)
- QAC kökünü Ustaz root formatına (ع-ب-د) dönüştürme
- rootDB'de eşleşme kontrolü → eksik kökler listesi
- pos mapping: QAC tags → Ustaz pos (fil/ism/harf)
- Türkçe meal'den kelime anlamı çıkarma (heuristic + Claude)

### Faz 2 — Zenginleştirme (Claude API, yarı-otomatik)
**Girdi**: `enriched/{surah_num}.json` + İ'rab kaynakları
**Çıktı**: `final/{surah_num}.json` — tam kelime şeması

Bu faz **en kritik ve en pahalı** adım. Claude API ile:

**2a. İ'rab Üretimi** (her kelime için)
```
System: Sen bir Arapça i'rab uzmanısın. Verilen Kur'ân kelimesinin 
nahiv analizini yap. Format: {irab: "detaylı", irab_short: "kısa"}
```
- Batch processing: sure başına 1 API çağrısı (tüm ayetler)
- Maliyet tahmini: ~$0.05/sure (Sonnet 4) × 114 = ~$5.70

**2b. Belâgat Tespiti** (ayet/bölüm bazında)
```
System: Bu Kur'ân pasajında belâgat sanatlarını tespit et.
```
- Yalnızca dikkat çekici ayetler için (hepsi değil)
- Maliyet: ~$2-3 toplam

**2c. Turkish Bridge** (kök bazında)
- rootDB'deki mevcut turkish_traces'ten otomatik çekme
- Eksik olanlar için Claude ile tek seferde üretim

**2d. rootDB Genişletme**
- Faz 1'de tespit edilen eksik kökler
- Müfredât PDF'inden rasterize + görsel okuma
- Toplu ekleme scripti

### Faz 3 — Çıktı Üretimi (otomatik)
**Girdi**: `final/{surah_num}.json`
**Çıktı**: `src/data/surahs/{num}-{name}.js` + quiz'ler

- JSON → JS dosyası dönüşümü (template engine)
- Otomatik quiz üretimi (quizGenerator fonksiyonlarından)
- registry.js güncelleme
- Lint + syntax check
- Build test

---

## 4. DOSYA YAPISI

```
ustaz/
├── pipeline/                          # ← YENİ: Üretim pipeline'ı
│   ├── README.md
│   ├── config.yaml                    # API key, paths, settings
│   ├── step0_raw_data.py              # Tanzil + QAC + Meal
│   ├── step1_morphology.py            # Kök eşleştirme + pos
│   ├── step2_enrich.py                # Claude API zenginleştirme
│   ├── step3_generate.py              # JS dosya üretimi
│   ├── step4_quiz_gen.py              # Otomatik quiz
│   ├── step5_rootdb_expand.py         # rootDB genişletme
│   ├── utils/
│   │   ├── qac_parser.py              # QAC morfoloji parse
│   │   ├── transliteration.py         # Buckwalter → Latin
│   │   ├── root_normalizer.py         # QAC root → Ustaz root
│   │   └── js_template.py             # JS dosya şablonu
│   ├── data/
│   │   ├── quran_simple.txt           # Tanzil ham metin
│   │   ├── qac_morphology.txt         # QAC morfolojik veri
│   │   ├── meal_dib.json              # DİB meali
│   │   └── qac_pos_map.json           # QAC→Ustaz pos eşleştirme
│   ├── raw/                           # Faz 0 çıktısı
│   ├── enriched/                      # Faz 1 çıktısı
│   └── final/                         # Faz 2 çıktısı → Faz 3 girdisi
│
├── src/
│   ├── data/
│   │   ├── rootDB.js                  # ~1,700 kök (aşamalı büyüme)
│   │   ├── surahs/
│   │   │   ├── registry.js            # 114 sure metadata
│   │   │   ├── index.js               # Dynamic import router
│   │   │   ├── 001-fatiha.js          # ← pipeline çıktısı
│   │   │   ├── 002-bakara.js          # ← pipeline çıktısı
│   │   │   ├── ...
│   │   │   └── 114-nas.js
```

---

## 5. ÖLÇEKLENEBİLİRLİK ÖNLEMLERİ

### 5a. Code Splitting (Zorunlu)
Mevcut: tüm sureler tek chunk'ta (surahs-aTXnGE_M.js: 300KB)
114 sureyle: ~9MB → kullanılamaz!

**Çözüm**: Dynamic import ile lazy loading
```javascript
// src/data/surahs/index.js — mevcut yapıyı koruyarak
export async function loadSurah(num) {
  const padded = String(num).padStart(3, '0');
  const module = await import(`./${padded}-${nameMap[num]}.js`);
  return module.default;
}
```
- Vite zaten dynamic import'u otomatik chunk'lar
- Kullanıcı yalnızca açtığı surenin verisini indirir

### 5b. rootDB Splitting (İleride)
362 kök → 267KB. 1,700 kök → ~1.2MB.
- İlk aşama: tek dosya yeterli (gzip ile ~300KB)
- İleri aşama: cüz bazlı lazy loading

### 5c. Quiz Stratejisi
- Otomatik quiz: quizGenerator fonksiyonları sure verisinden üretir
- Her sure için minimum 5 quiz (root, bab, wazn, fill_blank, irab)
- cross_surah ve root_family quizleri toplu üretilir

---

## 6. AŞAMALI YAYGIN PLANI

### Dalga 1: Cüz 30 (Amme) — ÖNCELİK: EN YÜKSEK
**Neden**: Mevcut 5 tam sure zaten burada. 37 sure, çoğu kısa.
**Süre**: ~4-6 oturum
**Görevler**:
1. Pipeline Faz 0-1 kurulumu (1 oturum)
2. Cüz 30'un 32 eksik suresini üretme (2-3 oturum)
3. rootDB ~600 köke genişletme (paralel)
4. QC + düzeltme (1 oturum)

### Dalga 2: Cüz 29 (Tebârek) — ÖNCELİK: YÜKSEK
**Neden**: Mülk zaten burada. 11 sure, orta uzunlukta.
**Süre**: ~3-4 oturum

### Dalga 3: Cüz 28 (Mücâdele) — ÖNCELİK: ORTA
**Süre**: ~3-4 oturum

### Dalga 4-10: Cüz 27 → Cüz 21 (Uzun sureler başlıyor)
**Dikkat**: Bakara (286 ayet), Âl-i İmrân (200 ayet) gibi uzun sureler
- Bölüm (blok) bazlı işleme
- Her blok 10-20 ayet
- Tek surede 15-25 blok olabilir

### Tahmini Toplam Zaman
- Dalga 1 (Cüz 30): 5 oturum
- Dalga 2-3 (Cüz 29-28): 7 oturum
- Dalga 4-10 (Cüz 27-21): 20 oturum
- Dalga 11-15 (Cüz 20-1): 30 oturum (uzun sureler)
- **Toplam: ~60-70 oturum** (pipeline olgunlaştıkça hızlanır)

---

## 7. MALİYET TAHMİNİ

| Kalem | Birim Maliyet | Adet | Toplam |
|-------|--------------|------|--------|
| Claude API (i'rab) | ~$0.05/sure | 114 | ~$6 |
| Claude API (belâgat) | ~$0.02/sure | 114 | ~$2.50 |
| Claude API (rootDB) | ~$0.10/50 kök | 27 batch | ~$2.70 |
| Claude API (QC) | ~$0.03/sure | 114 | ~$3.50 |
| **Toplam API** | | | **~$15** |

---

## 8. SONRAKİ OTURUM EYLEM PLANI

### Oturum N+1: Pipeline Faz 0 Kurulumu
1. `pipeline/` dizini oluştur
2. Tanzil.net'ten quran-simple-clean.txt indir
3. QAC morfolojik veri indir (corpus.quran.com)
4. DİB meali JSON hazırla
5. `step0_raw_data.py` yaz ve test et (1 sure ile)

### Oturum N+2: Pipeline Faz 1 + İlk Pilot
1. `step1_morphology.py` — QAC parse + kök eşleştirme
2. Pilot: Nâs suresi (114, 6 ayet, en kısa)
3. Çıktıyı mevcut 096-alak.js formatıyla karşılaştır
4. Gap analizi: otomatik üretim vs. elle yazılmış kalite farkı

### Oturum N+3: Pipeline Faz 2 + Claude Enrichment
1. `step2_enrich.py` — Claude API ile i'rab + belâgat
2. Pilot: 3 kısa sure (Nâs, Felak, İhlâs) ile test
3. Kalite puanlama: otomatik vs. elle karşılaştırma
4. Prompt mühendisliği iyileştirme

---

## 9. SONRAKI OTURUM İÇİN GEREKLİ DOSYALAR

Her oturum için:
1. **`ustaz-v{x}.zip`** — proje paketi
2. **`next-session-prompt-ustaz-v{x+1}.md`** — rehber

Pipeline kurulum oturumu (N+1) için ek:
3. **İnternet erişimi** — Tanzil.net + QAC veri indirme (veya önceden indirip upload)

rootDB genişletme oturumları için ek:
4. **Müfredât PDF (2 parça)** — yeni kökler için referans

---

## 10. KRİTİK KARARLAR (Tartışılacak)

1. **İ'rab detay seviyesi**: Tüm kelimeler için mi, yoksa sadece anlamlı kelimeler (harf-i cer, zamîr hariç)?
   - Tam: daha kapsamlı ama daha yavaş
   - Seçici: hızlı ama eksik hissedilebilir

2. **Quiz miktarı**: Sure başına kaç quiz?
   - Minimum 5 (otomatik) → 570 quiz
   - Zengin 15-20 (elle seçilmiş) → 1,700-2,280 quiz

3. **Belâgat kapsamı**: Her ayet mi, yoksa sadece dikkat çekici olanlar?
   - Pratik: yalnızca belirgin sanatlar (cinas, tıbâk, istiâre vb.)

4. **Öncelik sırası**: Cüz 30'dan mı başlayalım, yoksa pedagojik sıraya göre mi?
   - Cüz 30: en bilinen, en kısa, hızlı ilerleme
   - Pedagojik: öğrenci seviyesine göre (bu zaten lessons ile yapılıyor)
