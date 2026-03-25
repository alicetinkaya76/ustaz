#!/usr/bin/env python3
"""
build_quran_data.py — Tanzil + quran-json verilerini birleştirip
her sure için pipeline-ready JSON üretir.

Girdiler:
  scripts/data/quran.json          (quran-json npm: Osmânî metin)
  scripts/data/tr_diyanet.txt      (Tanzil: Diyanet İşleri meali)
  scripts/data/tr_vakfi.txt        (Tanzil: Diyanet Vakfı meali)
  scripts/data/tr_yazir.txt        (Tanzil: Elmalılı Hamdi Yazır)
  scripts/data/tr_transliteration.txt (Tanzil: Türkçe çeviriyazı)

Çıktı:
  scripts/data/merged/001.json ... 114.json
  scripts/data/merged/index.json  (sure listesi + istatistik)
"""

import json, os, re, sys

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(SCRIPT_DIR, "data")
OUT_DIR = os.path.join(DATA_DIR, "merged")
os.makedirs(OUT_DIR, exist_ok=True)

# ── 1. Tanzil TXT parser ──────────────────────────────────
def parse_tanzil_txt(filepath):
    """Parse surah|ayah|text format → {surah_num: {ayah_num: text}}"""
    data = {}
    with open(filepath, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            parts = line.split("|", 2)
            if len(parts) < 3:
                continue
            surah = int(parts[0])
            ayah = int(parts[1])
            text = parts[2]
            if surah not in data:
                data[surah] = {}
            data[surah][ayah] = text
    return data

# ── 2. quran-json parser ──────────────────────────────────
def parse_quran_json(filepath):
    """Parse quran.json → {surah_num: {ayah_num: text, ...}, meta: {...}}"""
    with open(filepath, "r", encoding="utf-8") as f:
        raw = json.load(f)
    
    data = {}
    meta = {}
    for s in raw:
        sid = s["id"]
        meta[sid] = {
            "name_ar": s.get("name", ""),
            "name_translit": s.get("transliteration", ""),
            "name_en": s.get("name", ""),
            "type": s.get("type", ""),
            "total_verses": s.get("total_verses", 0),
        }
        data[sid] = {}
        for v in s["verses"]:
            data[sid][v["id"]] = v["text"]
    return data, meta

# ── 3. Kelime ayırıcı ────────────────────────────────────
def split_ayah_words(text):
    """Arapça ayeti kelimelere ayır (boşluk bazlı, temizlenmiş)"""
    words = text.split()
    # Waqf işaretlerini filtrele
    waqf_marks = {"ۖ", "ۗ", "ۘ", "ۙ", "ۚ", "ۛ", "ۜ", "۩", "۞"}
    cleaned = []
    for w in words:
        # Tek başına waqf işareti ise atla
        if w in waqf_marks:
            continue
        # Sondaki waqf işaretlerini temizle
        for mark in waqf_marks:
            w = w.replace(mark, "")
        w = w.strip()
        if w:
            cleaned.append(w)
    return cleaned

# ── 4. Transliterasyon kelime eşleştirme ──────────────────
def split_translit_words(text):
    """Türkçe transliterasyonu kelime bazlı ayır"""
    # Transliterasyon formatı: kelimeler tire ile birleşik, boşlukla ayrı
    # Örnek: "bismi-llâhi-rraḥmâni-rraḥîm"
    # Basit boşluk bazlı ayırma yap, sonra normalize et
    words = text.split()
    return words

# ── 5. Birleştirme ────────────────────────────────────────
def merge_all():
    print("Veriler okunuyor...")
    
    # Parse all sources
    quran_data, quran_meta = parse_quran_json(os.path.join(DATA_DIR, "quran.json"))
    diyanet = parse_tanzil_txt(os.path.join(DATA_DIR, "tr_diyanet.txt"))
    vakfi = parse_tanzil_txt(os.path.join(DATA_DIR, "tr_vakfi.txt"))
    yazir = parse_tanzil_txt(os.path.join(DATA_DIR, "tr_yazir.txt"))
    translit = parse_tanzil_txt(os.path.join(DATA_DIR, "tr_transliteration.txt"))
    
    index = []
    total_ayahs = 0
    total_words = 0
    
    for surah_num in range(1, 115):
        meta = quran_meta.get(surah_num, {})
        ayahs_data = []
        
        num_ayahs = meta.get("total_verses", 0)
        
        for ayah_num in range(1, num_ayahs + 1):
            ar_text = quran_data.get(surah_num, {}).get(ayah_num, "")
            words_ar = split_ayah_words(ar_text)
            words_tr = split_translit_words(translit.get(surah_num, {}).get(ayah_num, ""))
            
            ayah_obj = {
                "number": ayah_num,
                "text_ar": ar_text,
                "text_tr_diyanet": diyanet.get(surah_num, {}).get(ayah_num, ""),
                "text_tr_vakfi": vakfi.get(surah_num, {}).get(ayah_num, ""),
                "text_tr_yazir": yazir.get(surah_num, {}).get(ayah_num, ""),
                "transliteration": translit.get(surah_num, {}).get(ayah_num, ""),
                "words_ar": words_ar,
                "words_translit": words_tr,
                "word_count": len(words_ar),
            }
            ayahs_data.append(ayah_obj)
            total_words += len(words_ar)
        
        total_ayahs += num_ayahs
        
        surah_obj = {
            "surah": surah_num,
            "name_ar": meta.get("name_ar", ""),
            "name_translit": meta.get("name_translit", ""),
            "type": meta.get("type", ""),
            "total_ayahs": num_ayahs,
            "total_words": sum(a["word_count"] for a in ayahs_data),
            "ayahs": ayahs_data,
        }
        
        # Write individual surah file
        out_path = os.path.join(OUT_DIR, f"{surah_num:03d}.json")
        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(surah_obj, f, ensure_ascii=False, indent=2)
        
        index.append({
            "surah": surah_num,
            "name_ar": meta.get("name_ar", ""),
            "name_translit": meta.get("name_translit", ""),
            "type": meta.get("type", ""),
            "total_ayahs": num_ayahs,
            "total_words": surah_obj["total_words"],
        })
        
        print(f"  {surah_num:3d}. {meta.get('name_translit', ''):20s} — {num_ayahs:3d} ayet, {surah_obj['total_words']:5d} kelime")
    
    # Write index
    index_obj = {
        "total_surahs": 114,
        "total_ayahs": total_ayahs,
        "total_words": total_words,
        "surahs": index,
    }
    with open(os.path.join(OUT_DIR, "index.json"), "w", encoding="utf-8") as f:
        json.dump(index_obj, f, ensure_ascii=False, indent=2)
    
    print(f"\n{'='*50}")
    print(f"TOPLAM: {total_ayahs} ayet, {total_words} kelime")
    print(f"Çıktı: {OUT_DIR}/001.json ... 114.json + index.json")

if __name__ == "__main__":
    merge_all()
