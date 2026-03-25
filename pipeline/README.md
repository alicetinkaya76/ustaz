# Ustaz Quran Pipeline

Tüm Kur'ân'ı Ustaz sure-format dosyalarına dönüştüren yarı-otomatik pipeline.

## Gereksinimler

```bash
pip install pyyaml anthropic requests
```

## Veri Hazırlığı (İlk Kurulum)

### 1. Tanzil.net Metin
```bash
# Uthmani basit metin indir
curl -o pipeline/data/quran-simple-clean.txt \
  "https://tanzil.net/pub/download/index.php?quranType=simple-clean&outType=txt"
```

### 2. QAC Morfoloji
```bash
# Quranic Arabic Corpus v0.4
# https://corpus.quran.com/download/ adresinden indir
# pipeline/data/quranic-corpus-morphology-0.4.txt
```

### 3. DİB Meali
```bash
# JSON formatında meal dosyası hazırla
# pipeline/data/meal-dib.json
```

## Kullanım

```bash
# Faz 0: Ham veri toplama (bir sure)
python pipeline/step0_raw_data.py --surah 114

# Faz 1: Morfoloji + kök eşleştirme
python pipeline/step1_morphology.py --surah 114

# Faz 2: Claude API zenginleştirme
python pipeline/step2_enrich.py --surah 114

# Faz 3: JS dosya üretimi
python pipeline/step3_generate.py --surah 114

# Toplu işleme (tüm cüz)
python pipeline/run_batch.py --cuz 30
```

## Pipeline Akışı

```
Tanzil + QAC + Meal
       │
       ▼
  step0_raw_data.py  ──→  raw/114.json
       │
       ▼
  step1_morphology.py ──→  enriched/114.json  (+ rootDB gap listesi)
       │
       ▼
  step2_enrich.py     ──→  final/114.json     (Claude API: i'rab + belâgat)
       │
       ▼
  step3_generate.py   ──→  src/data/surahs/114-nas.js
       │
       ▼
  step4_quiz_gen.py   ──→  quiz ekleme (JS dosyasına)
       │
       ▼
  step5_rootdb_expand.py ─→  rootDB güncelleme (eksik kökler)
```

## Dizin Yapısı

```
pipeline/
├── config.yaml          # Ayarlar
├── data/                # Kaynak veriler (git-ignored)
│   ├── quran-simple-clean.txt
│   ├── quranic-corpus-morphology-0.4.txt
│   └── meal-dib.json
├── raw/                 # Faz 0 çıktısı
├── enriched/            # Faz 1 çıktısı
├── final/               # Faz 2 çıktısı
├── utils/               # Yardımcı modüller
│   ├── qac_parser.py
│   ├── transliteration.py
│   ├── root_normalizer.py
│   └── js_template.py
├── step0_raw_data.py
├── step1_morphology.py
├── step2_enrich.py
├── step3_generate.py
├── step4_quiz_gen.py
└── step5_rootdb_expand.py
```
