#!/usr/bin/env python3
"""
fix_enriched.py — Enriched JSON dosyalarını otomatik düzeltir
═══════════════════════════════════════════════════════════════

Kullanım:
  python3 scripts/fix_enriched.py                    # Tüm enriched dosyaları tara
  python3 scripts/fix_enriched.py 108 112 114        # Belirli sureler
  python3 scripts/fix_enriched.py --dry-run           # Değiştirmeden rapor ver
  python3 scripts/fix_enriched.py --regen-js          # Düzeltme sonrası JS yeniden üret

Düzeltmeler:
  1. root'ta Latin harf → Arapça (ör: "ص-b-ر" → "ص-ب-ر")
  2. "istidhâm" → "istifhâm"
  3. "tekvîd" → "te'kîd"
  4. "mudâf" → "muzâf"
  5. "translitization" → "transliteration" (field adı)
  6. Zamirler pos: "harf" → pos: "ism" (هُوَ, هِيَ, هُمْ vb.)
  7. Transliterasyon: al-/Al- → el-/El- (İngilizce stil → Türkçe)
  8. Transliterasyon: kh → h, th → s, dh → z (İngilizce → Türkçe)
"""

import json
import os
import re
import sys
import argparse
from pathlib import Path

PROJECT_ROOT = Path(__file__).parent.parent
ENRICHED_DIR = PROJECT_ROOT / "scripts" / "data" / "enriched"

# ═══════════════════════════════════════════════════════════
# DÜZELTME KURALLARI
# ═══════════════════════════════════════════════════════════

# 1. Latin → Arapça harf eşleştirme (root alanı için)
LATIN_TO_ARABIC = {
    'a': 'ا', 'b': 'ب', 't': 'ت', 'th': 'ث', 'j': 'ج', 'H': 'ح',
    'kh': 'خ', 'd': 'د', 'dh': 'ذ', 'r': 'ر', 'z': 'ز', 's': 'س',
    'sh': 'ش', 'S': 'ص', 'D': 'ض', 'T': 'ط', 'Z': 'ظ', 'E': 'ع',
    'g': 'غ', 'f': 'ف', 'q': 'ق', 'k': 'ك', 'l': 'ل', 'm': 'م',
    'n': 'ن', 'h': 'ه', 'w': 'و', 'y': 'ي',
}

# 2. Bağımsız zamir kelimeleri (pos: "ism" olmalı)
# NOT: عَلَيْهِم, لَهُ, عَنْهُ, إنَّها gibi edât+zamir birleşimleri "harf" olarak DOĞRUDUR
ZAMIR_STANDALONE = {
    "هُوَ", "هِيَ", "هُمْ", "هُمَا", "هُنَّ",
    "أَنْتَ", "أَنْتِ", "أَنْتُمْ", "أَنْتُمَا", "أَنْتُنَّ",
    "أَنَا", "أَنَا۠", "نَحْنُ",
    "هُمۡ", "أَنتُمۡ",
}

# 3. Metin düzeltmeleri (irab/balagha alanlarında)
TEXT_REPLACEMENTS = [
    ("tekvîd", "te'kîd"),
    ("istidhâm", "istifhâm"),
    ("mudâf ileyh", "muzâf ileyh"),
    ("mudâf ", "muzâf "),  # sondaki boşluk "mudâf" kelimesini yakalar
    ("Mudâf", "Muzâf"),
]

# 4. Transliterasyon düzeltmeleri (yalnızca güvenli olanlar)
TRANSLIT_REPLACEMENTS = [
    (r'\bal-', 'el-'),       # al-waswâs → el-waswâs
    (r'\bAl-', 'El-'),       # Al-Fîl → El-Fîl  
    # NOT: kh→h, th→s, dh→z false positive riski yüksek (fethu→fesu gibi)
]


def fix_root_latin(root_str):
    """Root alanındaki Latin harfleri Arapça'ya çevir."""
    if not root_str or not isinstance(root_str, str):
        return root_str, False
    
    parts = root_str.split("-")
    changed = False
    new_parts = []
    
    for part in parts:
        if re.match(r'^[a-zA-Z]+$', part):
            # Tamamen Latin harf — çevir
            arabic = LATIN_TO_ARABIC.get(part.lower(), part)
            new_parts.append(arabic)
            changed = True
        else:
            new_parts.append(part)
    
    return "-".join(new_parts), changed


def fix_zamir_pos(word):
    """Bağımsız zamir kelimelerinin pos'unu 'ism' yap.
    NOT: عَلَيْهِم, لَهُ, عَنْهُ gibi edât+zamir birleşimlerini DEĞİŞTİRME."""
    arabic = word.get("arabic", "").strip()
    pos = word.get("pos", "")
    
    # Sadece bağımsız zamirler (münfasıl)
    if pos == "harf" and arabic in ZAMIR_STANDALONE:
        return True
    
    return False


def fix_field_names(word):
    """Yanlış field isimlerini düzelt."""
    fixes = {}
    if "translitization" in word:
        fixes["transliteration"] = word.pop("translitization")
    return fixes


def fix_text_field(text):
    """Metin alanlarındaki terminoloji hatalarını düzelt."""
    if not text or not isinstance(text, str):
        return text, False
    
    original = text
    for old, new in TEXT_REPLACEMENTS:
        text = text.replace(old, new)
    
    return text, text != original


def fix_transliteration(translit):
    """Transliterasyondaki İngilizce stil → Türkçe stil."""
    if not translit or not isinstance(translit, str):
        return translit, False
    
    original = translit
    for pattern, replacement in TRANSLIT_REPLACEMENTS:
        translit = re.sub(pattern, replacement, translit)
    
    return translit, translit != original


def process_word(word):
    """Tek kelime için tüm düzeltmeleri uygula."""
    fixes = []
    
    # 1. Root Latin harf düzeltmesi
    root, changed = fix_root_latin(word.get("root"))
    if changed:
        fixes.append(f"root: '{word['root']}' → '{root}'")
        word["root"] = root
    
    # 2. Zamir pos düzeltmesi
    if fix_zamir_pos(word):
        fixes.append(f"pos: 'harf' → 'ism' ({word.get('arabic', '?')} zamir)")
        word["pos"] = "ism"
    
    # 3. Field adı düzeltmesi
    field_fixes = fix_field_names(word)
    for key, val in field_fixes.items():
        fixes.append(f"field: 'translitization' → 'transliteration'")
        word[key] = val
    
    # 4. Metin alanları düzeltmesi
    for field in ["irab", "irab_short", "balagha_note", "meaning_tr"]:
        val = word.get(field)
        new_val, changed = fix_text_field(val)
        if changed:
            fixes.append(f"{field}: terminoloji düzeltmesi")
            word[field] = new_val
    
    # 5. Transliterasyon düzeltmesi
    translit = word.get("transliteration")
    new_translit, changed = fix_transliteration(translit)
    if changed:
        fixes.append(f"translit: '{translit}' → '{new_translit}'")
        word["transliteration"] = new_translit
    
    return fixes


def process_file(filepath, dry_run=False):
    """Tek enriched JSON dosyasını işle."""
    try:
        with open(filepath, encoding="utf-8") as f:
            data = json.load(f)
    except (UnicodeDecodeError, json.JSONDecodeError) as e:
        print(f"  ⚠️ {filepath.name} okunamadı: {e}")
        return []
    
    surah = data.get("surah", "?")
    all_fixes = []
    
    for block in data.get("blocks", []):
        # Block-level metin düzeltmeleri
        desc = block.get("description", "")
        new_desc, changed = fix_text_field(desc)
        if changed:
            all_fixes.append(f"  block.description: terminoloji düzeltmesi")
            if not dry_run:
                block["description"] = new_desc
        
        for verse in block.get("verses", []):
            for word in verse.get("words", []):
                fixes = process_word(word) if not dry_run else []
                
                # Dry-run modunda da kontrol et
                if dry_run:
                    # Root
                    _, changed = fix_root_latin(word.get("root"))
                    if changed:
                        fixes.append(f"root: '{word['root']}' Latin harf içeriyor")
                    # Zamir
                    if fix_zamir_pos(word):
                        fixes.append(f"pos: '{word.get('arabic')}' zamir ama harf")
                    # Field adı
                    if "translitization" in word:
                        fixes.append("field: 'translitization' yanlış")
                    # Metin
                    for field in ["irab", "irab_short", "balagha_note"]:
                        _, changed = fix_text_field(word.get(field))
                        if changed:
                            fixes.append(f"{field}: terminoloji hatası")
                    # Translit
                    _, changed = fix_transliteration(word.get("transliteration"))
                    if changed:
                        fixes.append(f"translit: İngilizce stil")
                
                if fixes:
                    ayah = verse.get("ayah", "?")
                    arabic = word.get("arabic", "?")
                    for fix in fixes:
                        all_fixes.append(f"  {surah}:{ayah} [{arabic}] — {fix}")
    
    if not dry_run and all_fixes:
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
    
    return all_fixes


def main():
    parser = argparse.ArgumentParser(description="Enriched JSON post-processing")
    parser.add_argument("surahs", nargs="*", type=int, help="Sure numaraları (boşsa hepsi)")
    parser.add_argument("--dry-run", action="store_true", help="Değiştirmeden rapor ver")
    parser.add_argument("--regen-js", action="store_true", help="Düzeltme sonrası JS yeniden üret")
    args = parser.parse_args()
    
    if not ENRICHED_DIR.exists():
        print(f"❌ Enriched dizini bulunamadı: {ENRICHED_DIR}")
        return
    
    # Dosyaları bul
    if args.surahs:
        files = [ENRICHED_DIR / f"{s:03d}.json" for s in args.surahs]
        files = [f for f in files if f.exists()]
    else:
        files = sorted(ENRICHED_DIR.glob("[0-9][0-9][0-9].json"))
    
    if not files:
        print("❌ İşlenecek dosya bulunamadı.")
        return
    
    print(f"{'🔍 DRY RUN' if args.dry_run else '🔧 DÜZELTME'} — {len(files)} dosya")
    print(f"{'='*60}")
    
    total_fixes = 0
    fixed_files = 0
    
    for filepath in files:
        fixes = process_file(filepath, dry_run=args.dry_run)
        if fixes:
            surah_num = filepath.stem
            print(f"\n📄 Sure {surah_num}: {len(fixes)} düzeltme")
            for fix in fixes:
                print(fix)
            total_fixes += len(fixes)
            fixed_files += 1
    
    print(f"\n{'='*60}")
    print(f"📋 ÖZET: {total_fixes} düzeltme, {fixed_files}/{len(files)} dosyada")
    
    if args.dry_run and total_fixes > 0:
        print(f"\n💡 Düzeltmeleri uygulamak için: python3 scripts/fix_enriched.py")
    
    if args.regen_js and not args.dry_run:
        print(f"\n🔄 JS dosyaları yeniden üretiliyor...")
        from generate_surah import generate_js_from_enriched, SURAH_NAMES_TR, SURAH_OUTPUT_DIR
        for filepath in files:
            with open(filepath, encoding="utf-8") as f:
                data = json.load(f)
            surah_num = data.get("surah")
            if surah_num:
                js = generate_js_from_enriched(data, surah_num)
                name = SURAH_NAMES_TR.get(surah_num, f"sure{surah_num}")
                js_path = SURAH_OUTPUT_DIR / f"{surah_num:03d}-{name}.js"
                with open(js_path, "w", encoding="utf-8") as f:
                    f.write(js)
                print(f"  ✅ {js_path.name}")


if __name__ == "__main__":
    main()
