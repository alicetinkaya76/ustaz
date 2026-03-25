#!/usr/bin/env python3
"""
generate_surah.py — Ustaz Quran Pipeline: Claude API ile sure zenginleştirme
═══════════════════════════════════════════════════════════════════════════════

Kullanım:
  python3 scripts/generate_surah.py 108          # Tek sure (Kevser)
  python3 scripts/generate_surah.py 108 --dry-run # API çağırmadan prompt'u göster
  python3 scripts/generate_surah.py 112 114       # Birden fazla sure

Gereksinimler:
  - ANTHROPIC_API_KEY environment variable
  - scripts/data/merged/{surah_num}.json dosyaları (build_quran_data.py çıktısı)

Çıktı:
  - scripts/data/enriched/{surah_num}.json   (zenginleştirilmiş JSON)
  - src/data/surahs/{num}-{name}.js          (JS dosyası, --js ile)
"""

import json
import os
import sys
import time
import argparse
import re
from pathlib import Path
from datetime import datetime

# Proje kökü
PROJECT_ROOT = Path(__file__).parent.parent
MERGED_DIR = PROJECT_ROOT / "scripts" / "data" / "merged"
ENRICHED_DIR = PROJECT_ROOT / "scripts" / "data" / "enriched"
SURAH_OUTPUT_DIR = PROJECT_ROOT / "src" / "data" / "surahs"

# API ayarları
API_URL = "https://api.anthropic.com/v1/messages"
MODEL = "claude-sonnet-4-20250514"
MAX_TOKENS_BASE = 12000
MAX_TOKENS_PER_WORD = 280  # v0.30.1: 200→280 (Şems 54w=200t/w, ama uzun irab daha fazla üretir)
CHUNK_THRESHOLD = 55       # v0.30.1: 80→55 (60-79w sureler tek çağrıda taşıyordu)
MAX_WORDS_PER_BLOCK = 50   # v0.30.1: 55→50 (güvenli blok boyutu)

# Sure isimleri (Türkçe transliterasyon)
SURAH_NAMES_TR = {
    1: "fatiha", 2: "bakara", 3: "al-i-imran", 4: "nisa", 5: "maide",
    6: "enam", 7: "araf", 8: "enfal", 9: "tevbe", 10: "yunus",
    11: "hud", 12: "yusuf", 13: "rad", 14: "ibrahim", 15: "hicr",
    16: "nahl", 17: "isra", 18: "kehf", 19: "meryem", 20: "taha",
    21: "enbiya", 22: "hac", 23: "muminun", 24: "nur", 25: "furkan",
    26: "suara", 27: "neml", 28: "kasas", 29: "ankebut", 30: "rum",
    31: "lokman", 32: "secde", 33: "ahzab", 34: "sebe", 35: "fatir",
    36: "yasin", 37: "saffat", 38: "sad", 39: "zumer", 40: "mumin",
    41: "fussilet", 42: "sura", 43: "zuhruf", 44: "duhan", 45: "casiye",
    46: "ahkaf", 47: "muhammed", 48: "fetih", 49: "hucurat", 50: "kaf",
    51: "zariyat", 52: "tur", 53: "necm", 54: "kamer", 55: "rahman",
    56: "vakia", 57: "hadid", 58: "mucadele", 59: "hasr", 60: "mumtehine",
    61: "saf", 62: "cuma", 63: "munafikun", 64: "tegabun", 65: "talak",
    66: "tahrim", 67: "mulk", 68: "kalem", 69: "hakka", 70: "mearic",
    71: "nuh", 72: "cin", 73: "muzzemmil", 74: "muddessir", 75: "kiyame",
    76: "insan", 77: "murselat", 78: "nebe", 79: "naziat", 80: "abese",
    81: "tekvir", 82: "infitar", 83: "mutaffifin", 84: "insikak",
    85: "buruc", 86: "tarik", 87: "ala", 88: "gasiye", 89: "fecr",
    90: "beled", 91: "sems", 92: "leyl", 93: "duha", 94: "insirrah",
    95: "tin", 96: "alak", 97: "kadir", 98: "beyyine", 99: "zilzal",
    100: "adiyat", 101: "karia", 102: "tekasur", 103: "asr", 104: "humeze",
    105: "fil", 106: "kureys", 107: "maun", 108: "kevser", 109: "kafirun",
    110: "nasr", 111: "tebbet", 112: "ihlas", 113: "felak", 114: "nas",
}

SURAH_NAMES_TR_DISPLAY = {
    1: "Fâtiha", 55: "Rahmân", 67: "Mülk", 78: "Nebe", 80: "Abese",
    82: "İnfitâr", 83: "Mutaffifîn", 84: "İnşikâk", 85: "Burûc",
    86: "Târık", 87: "A'lâ", 88: "Gâşiye", 89: "Fecr", 90: "Beled",
    91: "Şems", 92: "Leyl", 93: "Duhâ", 94: "İnşirâh", 95: "Tîn",
    96: "Alak", 97: "Kadir", 98: "Beyyine", 99: "Zilzâl", 100: "Âdiyât",
    101: "Kâria", 102: "Tekâsür", 103: "Asr", 104: "Hümeze", 105: "Fîl",
    106: "Kureyş", 107: "Mâûn", 108: "Kevser", 109: "Kâfirûn",
    110: "Nasr", 111: "Tebbet", 112: "İhlâs", 113: "Felak", 114: "Nâs",
}


def build_enrichment_prompt(surah_data: dict) -> str:
    """Claude API'ye gönderilecek prompt'u oluşturur."""
    
    surah_num = surah_data["surah"]
    name_ar = surah_data["name_ar"]
    name_tr = SURAH_NAMES_TR_DISPLAY.get(surah_num, surah_data["name_translit"])
    
    # Ayet ve kelimeleri hazırla
    ayahs_text = []
    for ayah in surah_data["ayahs"]:
        words_list = []
        for i, w_ar in enumerate(ayah["words_ar"]):
            w_tr = ayah["words_translit"][i] if i < len(ayah["words_translit"]) else ""
            words_list.append(f'    {i+1}. "{w_ar}" ({w_tr})')
        
        ayahs_text.append(f"""
Ayet {ayah["number"]}: {ayah["text_ar"]}
  Meal (Diyanet): {ayah["text_tr_diyanet"]}
  Meal (Yazır): {ayah["text_tr_yazir"]}
  Kelimeler:
{chr(10).join(words_list)}""")
    
    prompt = f"""Sen bir Kur'ân-ı Kerîm dil analizi uzmanısın. Arapça nahiv (i'rab), sarf (morfoloji), belâgat ve kök bilgisi konularında uzmansın.

Aşağıda {name_tr} suresi ({surah_num}) verilmiştir. Her kelimenin tam dilbilgisel analizini JSON formatında üret.

## SURE BİLGİSİ
- Sure: {surah_num} — {name_tr} ({name_ar})
- Ayet sayısı: {surah_data["total_ayahs"]}
- Kelime sayısı: {surah_data["total_words"]}
- Tür: {"Mekkî" if surah_data.get("type") == "meccan" else "Medenî"}

## AYETLER
{"".join(ayahs_text)}

## İSTENEN ÇIKTI FORMATI

Her kelime için aşağıdaki alanları doldur. SADECE JSON döndür, başka açıklama ekleme.

```json
{{
  "surah": {surah_num},
  "blocks": [
    {{
      "ayah_start": 1,
      "ayah_end": {surah_data["total_ayahs"]},
      "description": "Surenin genel teması (1-2 cümle, Türkçe)",
      "verses": [
        {{
          "surah": {surah_num},
          "ayah": 1,
          "arabic": "...",
          "translation": "... (en iyi Türkçe meal, Diyanet tercih)",
          "words": [
            {{
              "arabic": "...",
              "transliteration": "...",
              "root": "ع-ب-د",
              "pattern": "فَعَلَ",
              "pos": "fil",
              "meaning_tr": "...",
              "irab": "{{Fiil-i mâzî}}, I. bâb. ...",
              "irab_short": "mâzî, I. bâb",
              "turkish_bridge": "İbadet, abd, mâbed bu kökten",
              "balagha_note": "... veya null"
            }}
          ]
        }}
      ]
    }}
  ]
}}
```

## ALAN KURALLARI

1. **root**: Arapça kök harfleri tire ile ayrılmış: "ك-ث-ر". Kökü olmayan kelimeler için null (zamirler, edatlar, إنَّ gibi hurûf-i müşebbehe).
2. **pattern** (vezin): Varsa "فَعْل", "أَفْعَل", "فَاعِل" vb. Yoksa alanı kaldır.
3. **pos**: Sadece "fil", "ism", "harf" değerlerinden biri. 
   ⚠️ KRİTİK KURAL: pos, kelimenin ANA unsuruna göre belirlenir. Başına bitişik harf (فَ، وَ، بِ، لِ) varsa bile ana kelimeye bakılır:
   - "فَصَلِّ" → pos: "fil" (başındaki فَ harf ama ana kelime صَلِّ fiildir)
   - "وَٱنۡحَرۡ" → pos: "fil" (başındaki وَ harf ama ana kelime ٱنۡحَرۡ fiildir)
   - "لِرَبِّكَ" → pos: "ism" (başındaki لِ harf ama ana kelime رَبّ isimdir)
   - "بِسْمِ" → pos: "ism" (başındaki بِ harf ama ana kelime اسْم isimdir)
   - Saf harfler: إنَّ, أنَّ, لكنَّ, بل, هل → pos: "harf"
   - ⚠️ ZAMİRLER HER ZAMAN "ism"dir: هُوَ, هِيَ, هُمْ, أَنْتَ, أَنَا, نَحْنُ → pos: "ism" (ASLA "harf" YAZMA)
   - İsm-i mevsûl: الَّذِي, الَّذِينَ, مَا (mevsûle) → pos: "ism"
4. **meaning_tr**: Kısa Türkçe anlam (5-10 kelime).
5. **irab**: Detaylı nahiv analizi. Terimler {{süslü parantez}} içinde: {{Fiil-i mâzî}}, {{Fâil}}, {{Mef'ûl bih}}, {{Mübtedâ}}, {{Haber}}, {{Hâl}}, {{Temyîz}}, {{Câr-mecrûr}} vb. Cümleyi yarıda bırakma, her açıklamayı tamamla.
6. **irab_short**: Kısa etiket (ör: "mübtedâ, merfû", "mef'ûl bih, mensûb", "emr, I. bâb").
7. **turkish_bridge**: Arapça kökten Türkçeye geçmiş kelimeler (ör: "Salât, musallî bu kökten"). Yoksa null.
8. **balagha_note**: Dikkat çekici belâgat sanatı varsa açıkla (tekrar, cinâs, tıbâk, istiâre, hazf, takdîm-te'hîr, seci vb.). Yoksa null.
9. **transliteration**: TÜRKÇE tarzı transliterasyon. Hareke göster: â, î, û uzun sesli.
   ⚠️ YAZIM KURALLARI:
   - Tarif harfi: "el-" kullan (al-, the- YAZMA): "el-kevser", "el-fîl", "el-felak", "en-nâs", "eş-şems"
   - Güneş harfleri asimilasyon: "en-nâsi" (al-nâsi DEĞİL), "eş-şerri" (al-şerri DEĞİL)
   - Harf çevirisi: خ→h, ث→s, ذ→z, ع→', ح→h, غ→ğ, ق→k, ص→s, ض→d, ط→t, ظ→z
   - ASLA İngilizce akademik stil kullanma (al-waswâsi, al-khannâsi YANLIŞ → el-vesvâs, el-hannâs DOĞRU)

## TERMİNOLOJİ UYARILARI
- "te'kîd" yaz, "tekvîd" YAZMA (doğru Arapça: تأكيد)
- "muzâf" yaz, "mudâf" YAZMA (doğru: مضاف)
- "istifhâm" yaz, "istidhâm" YAZMA (doğru: استفهام)
- "hurûf-i müşebbehe bi'l-fi'l" veya kısaca "inne ve kardeşleri"
- Bâb numaraları: I (فَعَلَ), II (فَعَّلَ/تَفْعِيل), III (فَاعَلَ), IV (أَفْعَلَ/إفْعَال), V (تَفَعَّلَ), VI (تَفَاعَلَ), VII (اِنْفَعَلَ), VIII (اِفْتَعَلَ), X (اِسْتَفْعَلَ)
- أَعْطَى: IV. bâb (أَفْعَلَ → أَعْطَى, asıl kök ع-ط-و/ع-ط-ي)
- صَلَّى: II. bâb (فَعَّلَ → صَلَّى)

## ÖNEMLİ
- Tüm sure tek bir block olarak döndür (kısa sure olduğu için).
- Uzun sureler (30+ ayet) için tematik bloklara böl (her blok 5-15 ayet).
- Her kelime ayrı entry olsun, bitişik edatları ayır (ör: بِسْمِ → بِ + اسْمِ DEĞİL, tek entry olarak "بِسْمِ").
- Harfler (و، فَ، بِ، لِ vb.) kelimeye bitişikse o kelimeyle birlikte tek entry yap.
- JSON dışında hiçbir şey yazma. Markdown backtick kullanma.
- Her irab açıklamasını tam cümle olarak bitir, yarıda bırakma."""

    return prompt


# ═══════════════════════════════════════════════════════════
# BLOK BAZLI (CHUNKED) ÜRETİM — Büyük sureler için
# ═══════════════════════════════════════════════════════════

def split_surah_into_blocks(surah_data: dict, max_words: int = MAX_WORDS_PER_BLOCK) -> list:
    """Sureyi kelime sayısına göre bloklara böl.
    
    Her blok ~max_words kelime içerir. Ayet sınırlarında bölünür.
    Returns: list of lists of ayah dicts
    """
    ayahs = surah_data["ayahs"]
    blocks = []
    current_block = []
    current_words = 0
    
    for ayah in ayahs:
        word_count = len(ayah.get("words_ar", []))
        current_block.append(ayah)
        current_words += word_count
        
        if current_words >= max_words:
            blocks.append(current_block)
            current_block = []
            current_words = 0
    
    # Kalan ayetleri son bloğa ekle
    if current_block:
        # Son blok çok küçükse (< 10 kelime) ve önceki blok varsa birleştir
        if current_words < 10 and blocks:
            blocks[-1].extend(current_block)
        else:
            blocks.append(current_block)
    
    return blocks


def build_block_prompt(surah_data: dict, block_ayahs: list, 
                       block_num: int, total_blocks: int,
                       prev_block_summary: str = None) -> str:
    """Tek bir blok için API prompt'u oluşturur.
    
    Tam sure prompt'unun blok versiyonu — aynı alan kuralları,
    ama sadece belirli ayetler ve bağlam bilgisi.
    """
    surah_num = surah_data["surah"]
    name_ar = surah_data["name_ar"]
    name_tr = SURAH_NAMES_TR_DISPLAY.get(surah_num, surah_data["name_translit"])
    
    ayah_start = block_ayahs[0]["number"]
    ayah_end = block_ayahs[-1]["number"]
    block_word_count = sum(len(a.get("words_ar", [])) for a in block_ayahs)
    
    # Ayet ve kelimeleri hazırla
    ayahs_text = []
    for ayah in block_ayahs:
        words_list = []
        for i, w_ar in enumerate(ayah["words_ar"]):
            w_tr = ayah["words_translit"][i] if i < len(ayah["words_translit"]) else ""
            words_list.append(f'    {i+1}. "{w_ar}" ({w_tr})')
        
        ayahs_text.append(f"""
Ayet {ayah["number"]}: {ayah["text_ar"]}
  Meal (Diyanet): {ayah["text_tr_diyanet"]}
  Meal (Yazır): {ayah["text_tr_yazir"]}
  Kelimeler:
{chr(10).join(words_list)}""")
    
    # Bağlam bilgisi (önceki blok varsa)
    context_section = ""
    if prev_block_summary and block_num > 1:
        context_section = f"""
## BAĞLAM (önceki bölümler)
{prev_block_summary}
Bu bölüm önceki bölümlerin devamıdır. Aynı terminoloji ve üslubu kullan.
"""
    
    prompt = f"""Sen bir Kur'ân-ı Kerîm dil analizi uzmanısın. Arapça nahiv (i'rab), sarf (morfoloji), belâgat ve kök bilgisi konularında uzmansın.

## SURE BİLGİSİ
- Sure: {surah_num} — {name_tr} ({name_ar})
- Toplam ayet: {surah_data["total_ayahs"]}, Toplam kelime: {surah_data["total_words"]}
- Tür: {"Mekkî" if surah_data.get("type") == "meccan" else "Medenî"}

## BU BLOK
- **Blok {block_num}/{total_blocks}** — Ayet {ayah_start}-{ayah_end} ({block_word_count} kelime)
{context_section}
## AYETLER (bu blok)
{"".join(ayahs_text)}

## İSTENEN ÇIKTI FORMATI

Bu blok için SADECE ayet {ayah_start}-{ayah_end} arası kelimelerin analizini döndür.
SADECE JSON döndür, başka açıklama ekleme.

```json
{{
  "surah": {surah_num},
  "block_num": {block_num},
  "total_blocks": {total_blocks},
  "ayah_start": {ayah_start},
  "ayah_end": {ayah_end},
  "description": "Bu bölümün teması (1-2 cümle, Türkçe)",
  "verses": [
    {{
      "surah": {surah_num},
      "ayah": {ayah_start},
      "arabic": "...",
      "translation": "... (en iyi Türkçe meal, Diyanet tercih)",
      "words": [
        {{
          "arabic": "...",
          "transliteration": "...",
          "root": "ع-ب-د",
          "pattern": "فَعَلَ",
          "pos": "fil",
          "meaning_tr": "...",
          "irab": "{{Fiil-i mâzî}}, I. bâb. ...",
          "irab_short": "mâzî, I. bâb",
          "turkish_bridge": "İbadet, abd, mâbed bu kökten",
          "balagha_note": "... veya null"
        }}
      ]
    }}
  ]
}}
```

## ALAN KURALLARI

1. **root**: Arapça kök harfleri tire ile ayrılmış: "ك-ث-ر". Kökü olmayan kelimeler için null (zamirler, edatlar, إنَّ gibi hurûf-i müşebbehe).
2. **pattern** (vezin): Varsa "فَعْل", "أَفْعَل", "فَاعِل" vb. Yoksa alanı kaldır.
3. **pos**: Sadece "fil", "ism", "harf" değerlerinden biri. 
   ⚠️ KRİTİK KURAL: pos, kelimenin ANA unsuruna göre belirlenir. Başına bitişik harf (فَ، وَ، بِ، لِ) varsa bile ana kelimeye bakılır:
   - "فَصَلِّ" → pos: "fil" (başındaki فَ harf ama ana kelime صَلِّ fiildir)
   - "وَٱنۡحَرۡ" → pos: "fil" (başındaki وَ harf ama ana kelime ٱنۡحَرۡ fiildir)
   - "لِرَبِّكَ" → pos: "ism" (başındaki لِ harf ama ana kelime رَبّ isimdir)
   - "بِسْمِ" → pos: "ism" (başındaki بِ harf ama ana kelime اسْم isimdir)
   - Saf harfler: إنَّ, أنَّ, لكنَّ, بل, هل → pos: "harf"
   - ⚠️ ZAMİRLER HER ZAMAN "ism"dir: هُوَ, هِيَ, هُمْ, أَنْتَ, أَنَا, نَحْنُ → pos: "ism" (ASLA "harf" YAZMA)
   - İsm-i mevsûl: الَّذِي, الَّذِينَ, مَا (mevsûle) → pos: "ism"
4. **meaning_tr**: Kısa Türkçe anlam (5-10 kelime).
5. **irab**: Detaylı nahiv analizi. Terimler {{süslü parantez}} içinde: {{Fiil-i mâzî}}, {{Fâil}}, {{Mef'ûl bih}}, {{Mübtedâ}}, {{Haber}}, {{Hâl}}, {{Temyîz}}, {{Câr-mecrûr}} vb. Cümleyi yarıda bırakma, her açıklamayı tamamla.
6. **irab_short**: Kısa etiket (ör: "mübtedâ, merfû", "mef'ûl bih, mensûb", "emr, I. bâb").
7. **turkish_bridge**: Arapça kökten Türkçeye geçmiş kelimeler (ör: "Salât, musallî bu kökten"). Yoksa null.
8. **balagha_note**: Dikkat çekici belâgat sanatı varsa açıkla (tekrar, cinâs, tıbâk, istiâre, hazf, takdîm-te'hîr, seci vb.). Yoksa null.
9. **transliteration**: TÜRKÇE tarzı transliterasyon. Hareke göster: â, î, û uzun sesli.
   ⚠️ YAZIM KURALLARI:
   - Tarif harfi: "el-" kullan (al-, the- YAZMA): "el-kevser", "el-fîl", "el-felak", "en-nâs", "eş-şems"
   - Güneş harfleri asimilasyon: "en-nâsi" (al-nâsi DEĞİL), "eş-şerri" (al-şerri DEĞİL)
   - Harf çevirisi: خ→h, ث→s, ذ→z, ع→', ح→h, غ→ğ, ق→k, ص→s, ض→d, ط→t, ظ→z
   - ASLA İngilizce akademik stil kullanma (al-waswâsi, al-khannâsi YANLIŞ → el-vesvâs, el-hannâs DOĞRU)

## TERMİNOLOJİ UYARILARI
- "te'kîd" yaz, "tekvîd" YAZMA (doğru Arapça: تأكيد)
- "muzâf" yaz, "mudâf" YAZMA (doğru: مضاف)
- "istifhâm" yaz, "istidhâm" YAZMA (doğru: استفهام)
- "hurûf-i müşebbehe bi'l-fi'l" veya kısaca "inne ve kardeşleri"
- Bâb numaraları: I (فَعَلَ), II (فَعَّلَ/تَفْعِيل), III (فَاعَلَ), IV (أَفْعَلَ/إفْعَال), V (تَفَعَّلَ), VI (تَفَاعَلَ), VII (اِنْفَعَلَ), VIII (اِفْتَعَلَ), X (اِسْتَفْعَلَ)
- أَعْطَى: IV. bâb (أَفْعَلَ → أَعْطَى, asıl kök ع-ط-و/ع-ط-ي)
- صَلَّى: II. bâb (فَعَّلَ → صَلَّى)

## ÖNEMLİ
- SADECE ayet {ayah_start}-{ayah_end} arasını üret (bu blok).
- Her kelime ayrı entry olsun, bitişik edatları ayır (ör: بِسْمِ → بِ + اسْمِ DEĞİL, tek entry olarak "بِسْمِ").
- Harfler (و، فَ، بِ، لِ vb.) kelimeye bitişikse o kelimeyle birlikte tek entry yap.
- JSON dışında hiçbir şey yazma. Markdown backtick kullanma.
- Her irab açıklamasını tam cümle olarak bitir, yarıda bırakma."""

    return prompt


def merge_blocks(block_results: list, surah_data: dict) -> dict:
    """Blok sonuçlarını tek bir enriched JSON'a birleştirir.
    
    Her blok sonucu: { surah, block_num, ayah_start, ayah_end, description, verses }
    Çıktı: { surah, name_ar, blocks: [ { ayah_start, ayah_end, description, verses } ] }
    """
    surah_num = surah_data["surah"]
    merged = {
        "surah": surah_num,
        "name_ar": surah_data["name_ar"],
        "blocks": []
    }
    
    for block in block_results:
        merged_block = {
            "ayah_start": block.get("ayah_start", block["verses"][0]["ayah"] if block.get("verses") else 1),
            "ayah_end": block.get("ayah_end", block["verses"][-1]["ayah"] if block.get("verses") else 1),
            "description": block.get("description", ""),
            "verses": block.get("verses", []),
        }
        merged["blocks"].append(merged_block)
    
    return merged


def process_surah_chunked(surah_num: int, surah_data: dict, api_key: str, 
                          gen_js: bool = False) -> dict:
    """Büyük sureyi bloklara bölerek işler.
    
    Returns: merged enriched dict or None on failure
    """
    name = SURAH_NAMES_TR_DISPLAY.get(surah_num, surah_data["name_translit"])
    
    # Bloklara böl
    blocks = split_surah_into_blocks(surah_data)
    print(f"  📦 BLOK MODU: {len(blocks)} blok")
    for i, block_ayahs in enumerate(blocks):
        ayah_range = f"{block_ayahs[0]['number']}-{block_ayahs[-1]['number']}"
        word_count = sum(len(a.get("words_ar", [])) for a in block_ayahs)
        print(f"     Blok {i+1}: ayet {ayah_range} ({word_count} kelime)")
    
    all_block_results = []
    total_cost = 0.0
    total_in_tok = 0
    total_out_tok = 0
    prev_summary = None
    
    for i, block_ayahs in enumerate(blocks):
        block_num = i + 1
        ayah_start = block_ayahs[0]["number"]
        ayah_end = block_ayahs[-1]["number"]
        block_words = sum(len(a.get("words_ar", [])) for a in block_ayahs)
        
        print(f"\n  ── Blok {block_num}/{len(blocks)}: ayet {ayah_start}-{ayah_end} ({block_words} kelime) ──")
        
        # Prompt oluştur
        prompt = build_block_prompt(
            surah_data, block_ayahs, 
            block_num, len(blocks),
            prev_block_summary=prev_summary
        )
        print(f"  📝 Prompt: {len(prompt)} karakter")
        
        # API çağrısı
        max_tokens = max(MAX_TOKENS_BASE, block_words * MAX_TOKENS_PER_WORD)
        print(f"  🤖 Claude API çağrılıyor (max_tokens={max_tokens})...")
        t0 = time.time()
        
        try:
            response = call_claude_api(prompt, api_key, max_tokens=max_tokens)
        except Exception as e:
            print(f"  ❌ Blok {block_num} API hatası: {e}")
            # Başarısız blokları atla, devam et
            continue
        
        elapsed = time.time() - t0
        usage = response.get("usage", {})
        in_tok = usage.get("input_tokens", 0)
        out_tok = usage.get("output_tokens", 0)
        cost = (in_tok * 3 + out_tok * 15) / 1_000_000
        
        total_cost += cost
        total_in_tok += in_tok
        total_out_tok += out_tok
        
        print(f"  ✅ {elapsed:.1f}s, {in_tok}+{out_tok} tok, ${cost:.4f}")
        
        # Kesilme kontrolü
        stop_reason = response.get("stop_reason", "")
        if stop_reason == "max_tokens":
            print(f"  ⚠️ UYARI: Blok {block_num} max_tokens'a çarptı!")
        
        # JSON çıkar
        try:
            block_enriched = extract_json_from_response(response)
            verses_count = len(block_enriched.get("verses", []))
            words_count = sum(len(v.get("words", [])) for v in block_enriched.get("verses", []))
            print(f"  📊 Blok {block_num}: {verses_count} ayet, {words_count} kelime üretildi")
            all_block_results.append(block_enriched)
            
            # Sonraki blok için bağlam özeti
            desc = block_enriched.get("description", "")
            prev_summary = (prev_summary or "") + f"\nBlok {block_num} (ayet {ayah_start}-{ayah_end}): {desc}"
            
        except Exception as e:
            print(f"  ❌ Blok {block_num} JSON parse hatası: {e}")
            # Ham yanıtı kaydet
            raw_file = ENRICHED_DIR / f"{surah_num:03d}_block{block_num}_raw.txt"
            ENRICHED_DIR.mkdir(parents=True, exist_ok=True)
            with open(raw_file, "w") as f:
                text = ""
                for blk in response.get("content", []):
                    if blk.get("type") == "text":
                        text += blk["text"]
                f.write(text)
            print(f"  💾 Ham yanıt: {raw_file}")
            continue
        
        # Bloklar arası bekleme (rate limit)
        if block_num < len(blocks):
            wait = 5
            print(f"  ⏳ {wait}s bekleniyor...")
            time.sleep(wait)
    
    # Sonuç kontrolü
    if not all_block_results:
        print(f"  ❌ Hiçbir blok başarılı olmadı!")
        return None
    
    if len(all_block_results) < len(blocks):
        print(f"  ⚠️ {len(blocks) - len(all_block_results)} blok başarısız, kısmi sonuç birleştiriliyor")
    
    # Birleştir
    enriched = merge_blocks(all_block_results, surah_data)
    
    print(f"\n  {'─'*40}")
    print(f"  📊 BLOK TOPLAM: {total_in_tok}+{total_out_tok} tok, ${total_cost:.4f}")
    total_verses = sum(len(b.get("verses", [])) for b in enriched.get("blocks", []))
    total_words = sum(len(v.get("words", [])) for b in enriched.get("blocks", []) for v in b.get("verses", []))
    print(f"  📊 Birleştirildi: {total_verses} ayet, {total_words} kelime ({len(enriched['blocks'])} blok)")
    
    return enriched


def call_claude_api(prompt: str, api_key: str, max_tokens: int = 8192) -> dict:
    """Claude API'yi çağırır ve JSON yanıt döner. 502/503/429'da retry yapar."""
    import urllib.request
    import urllib.error
    
    headers = {
        "Content-Type": "application/json",
        "x-api-key": api_key,
        "anthropic-version": "2023-06-01",
    }
    
    body = json.dumps({
        "model": MODEL,
        "max_tokens": max_tokens,
        "messages": [{"role": "user", "content": prompt}],
    })
    
    max_retries = 3
    for attempt in range(max_retries):
        req = urllib.request.Request(API_URL, data=body.encode("utf-8"), headers=headers)
        try:
            with urllib.request.urlopen(req, timeout=600) as resp:
                data = json.loads(resp.read().decode("utf-8"))
                return data
        except urllib.error.HTTPError as e:
            error_body = e.read().decode("utf-8")
            if e.code in (429, 502, 503, 529) and attempt < max_retries - 1:
                wait = (attempt + 1) * 30
                print(f"  ⚠️ HTTP {e.code} — {wait}s bekleyip tekrar denenecek ({attempt+1}/{max_retries})...")
                time.sleep(wait)
                continue
            print(f"  ❌ API Hatası ({e.code}): {error_body[:500]}")
            raise
        except (TimeoutError, OSError) as e:
            if attempt < max_retries - 1:
                wait = (attempt + 1) * 30
                print(f"  ⚠️ Bağlantı hatası — {wait}s bekleyip tekrar denenecek ({attempt+1}/{max_retries})...")
                time.sleep(wait)
                continue
            print(f"  ❌ Bağlantı hatası: {e}")
            raise


def extract_json_from_response(response_data: dict) -> dict:
    """API yanıtından JSON'u çıkarır — sağlam (robust) parser.
    
    Handles:
    1. Control characters in strings (\\n, \\t, \\r inside irab fields)
    2. Truncated JSON from max_tokens (recovers complete verses)
    3. Trailing commas before ] or }
    4. Markdown backtick wrappers
    """
    text = ""
    for block in response_data.get("content", []):
        if block.get("type") == "text":
            text += block["text"]
    
    # Strip markdown backtick wrappers
    text = re.sub(r'^```(?:json)?\s*', '', text.strip())
    text = re.sub(r'\s*```\s*$', '', text)
    
    # Find JSON object
    start = text.find('{')
    end = text.rfind('}')
    if start == -1:
        raise ValueError(f"JSON bulunamadı. Yanıt: {text[:500]}")
    
    if end == -1 or end <= start:
        # Kapanış yok — kesilmiş JSON
        json_str = text[start:]
    else:
        json_str = text[start:end+1]
    
    # Try direct parse first
    try:
        return json.loads(json_str)
    except json.JSONDecodeError:
        pass  # Fall through to repair
    
    # ── REPAIR PIPELINE ──────────────────────────────────
    repaired = _repair_json(json_str)
    
    try:
        return json.loads(repaired)
    except json.JSONDecodeError as e:
        # Last resort: truncate to last complete verse
        truncated = _truncate_to_last_verse(repaired)
        if truncated:
            try:
                return json.loads(truncated)
            except json.JSONDecodeError:
                pass
        
        raise ValueError(f"JSON tamiri başarısız: {e}\nİlk 500 char: {repaired[:500]}")


def _repair_json(text: str) -> str:
    """JSON metin tamiri — çok katmanlı."""
    s = text
    
    # 1. Control characters inside strings → escape them
    # JSON spec allows \n \t \r inside strings only if escaped
    # Walk through and fix unescaped control chars inside string literals
    s = _fix_control_chars_in_strings(s)
    
    # 2. Trailing commas: ,] → ] and ,} → }
    s = re.sub(r',\s*\]', ']', s)
    s = re.sub(r',\s*\}', '}', s)
    
    # 3. Balance brackets if truncated
    s = _balance_brackets(s)
    
    return s


def _fix_control_chars_in_strings(text: str) -> str:
    """JSON string'leri içindeki escape edilmemiş kontrol karakterlerini düzelt.
    
    State machine: string içinde mi dışında mı takip eder.
    String içindeki \\x00-\\x1f karakterlerini uygun escape'e çevirir.
    """
    result = []
    in_string = False
    i = 0
    
    while i < len(text):
        ch = text[i]
        
        if ch == '\\' and in_string and i + 1 < len(text):
            # Escape sequence — olduğu gibi kopyala
            result.append(ch)
            result.append(text[i + 1])
            i += 2
            continue
        
        if ch == '"' and (not result or result[-1] != '\\'):
            in_string = not in_string
            result.append(ch)
            i += 1
            continue
        
        if in_string and ord(ch) < 0x20:
            # Control character inside string — escape it
            escape_map = {'\n': '\\n', '\r': '\\r', '\t': '\\t'}
            result.append(escape_map.get(ch, f'\\u{ord(ch):04x}'))
            i += 1
            continue
        
        result.append(ch)
        i += 1
    
    return ''.join(result)


def _balance_brackets(text: str) -> str:
    """Kesilmiş JSON'un braketlerini dengele.
    
    Açık braketleri sayar, eksik kapanışları ekler.
    """
    # İlk önce string içindeki braketleri atla
    depth_brace = 0   # { }
    depth_bracket = 0  # [ ]
    in_string = False
    i = 0
    
    while i < len(text):
        ch = text[i]
        if ch == '\\' and in_string:
            i += 2
            continue
        if ch == '"':
            in_string = not in_string
        elif not in_string:
            if ch == '{': depth_brace += 1
            elif ch == '}': depth_brace -= 1
            elif ch == '[': depth_bracket += 1
            elif ch == ']': depth_bracket -= 1
        i += 1
    
    # Unclosed string varsa kapat
    if in_string:
        text += '"'
    
    # Trailing comma temizle (kapanış eklemeden önce)
    text = re.sub(r',\s*$', '', text.rstrip())
    
    # Eksik kapanışları ekle
    text += ']' * max(0, depth_bracket)
    text += '}' * max(0, depth_brace)
    
    return text


def _truncate_to_last_verse(text: str) -> str:
    """Kesilmiş JSON'u son tamamlanmış verse'e kadar kes.
    
    Strategy: Extract metadata (surah, blocks structure), then find 
    all complete verse objects using bracket matching, reconstruct.
    """
    # Extract surah number
    surah_match = re.search(r'"surah"\s*:\s*(\d+)', text)
    if not surah_match:
        return None
    surah_num = int(surah_match.group(1))
    
    # Extract description if available
    desc_match = re.search(r'"description"\s*:\s*"([^"]*)"', text)
    desc = desc_match.group(1) if desc_match else ""
    
    # Find all complete verse objects
    # A verse looks like: { "surah": N, "ayah": N, ... "words": [...] }
    # Strategy: find each "ayah": N, then match brackets to find the complete object
    complete_verses = []
    
    # Find all { that start a verse (preceded by [ or , and containing "ayah")
    # Use a simple bracket-depth approach
    i = 0
    while i < len(text):
        # Look for verse start pattern
        match = re.search(r'\{\s*"surah"', text[i:])
        if not match:
            break
        
        obj_start = i + match.start()
        # Try to extract complete JSON object using bracket matching
        obj_str = _extract_object(text, obj_start)
        if obj_str:
            try:
                verse = json.loads(obj_str)
                if "ayah" in verse and "words" in verse:
                    complete_verses.append(verse)
            except json.JSONDecodeError:
                pass
        
        i = obj_start + 1
    
    if not complete_verses:
        return None
    
    # Reconstruct valid JSON
    ayah_start = complete_verses[0]["ayah"]
    ayah_end = complete_verses[-1]["ayah"]
    
    result = {
        "surah": surah_num,
        "blocks": [{
            "ayah_start": ayah_start,
            "ayah_end": ayah_end,
            "description": desc,
            "verses": complete_verses,
        }]
    }
    
    return json.dumps(result, ensure_ascii=False)


def _extract_object(text: str, start: int) -> str:
    """text[start]'tan başlayarak tam bir JSON objesini ({...}) çıkart.
    
    Bracket derinliğini izler, string içindeki braketleri atlar.
    Tamamlanamayan obje için None döner.
    """
    if start >= len(text) or text[start] != '{':
        return None
    
    depth = 0
    in_string = False
    i = start
    
    while i < len(text):
        ch = text[i]
        
        if ch == '\\' and in_string:
            i += 2  # escape sequence
            continue
        
        if ch == '"':
            in_string = not in_string
        elif not in_string:
            if ch == '{':
                depth += 1
            elif ch == '}':
                depth -= 1
                if depth == 0:
                    return text[start:i+1]
        
        i += 1
    
    return None  # Unclosed object


def generate_js_from_enriched(enriched: dict, surah_num: int) -> str:
    """Enriched JSON'dan JS dosyası üretir."""
    name_tr = SURAH_NAMES_TR_DISPLAY.get(surah_num, f"Sure{surah_num}")
    name_lower = SURAH_NAMES_TR.get(surah_num, f"sure{surah_num}")
    # JS variable name: tire varsa camelCase yap
    var_name = name_lower.replace("-", "")
    
    today = datetime.now().strftime("%Y-%m-%d")
    blocks = enriched.get("blocks", [])
    total_ayahs = sum(
        len(b.get("verses", [])) for b in blocks
    )
    
    lines = []
    lines.append(f'// ═══════════════════════════════════════════════════════════')
    lines.append(f'// {name_tr.upper()} SURESİ ({surah_num}) — Pipeline Üretimi')
    lines.append(f'// {today}: {len(blocks)} bölüm, {total_ayahs} ayet tam kapsam')
    lines.append(f'// ═══════════════════════════════════════════════════════════')
    lines.append('')
    lines.append('import {')
    lines.append('  generateRootQuiz,')
    lines.append('  generateBabQuiz,')
    lines.append('  generateWaznQuiz,')
    lines.append('  generateFillBlank,')
    lines.append('  generateBalaghaQuiz,')
    lines.append('  generateIrabQuiz,')
    lines.append('  generateVerbTypeQuiz,')
    lines.append('  generateCrossSurahRootQuiz,')
    lines.append('  generateRootFamilyQuiz,')
    lines.append('} from "../../utils/quizGenerator.js";')
    lines.append('')
    lines.append(f'const {var_name}Lessons = [')
    
    for bi, block in enumerate(blocks):
        ayah_start = block.get("ayah_start", "?")
        ayah_end = block.get("ayah_end", "?")
        desc = block.get("description", "")
        
        lines.append(f'  // ═══════════════════════════════════════════════════════════')
        lines.append(f'  // BÖLÜM {bi+1} — {name_tr.upper()} {surah_num}:{ayah_start}-{ayah_end}')
        lines.append(f'  // ═══════════════════════════════════════════════════════════')
        lines.append('  {')
        lines.append(f'    id: "S{surah_num:02d}-B{bi+1:02d}-{name_lower}",')
        lines.append(f'    title: "{name_tr} ({ayah_start}-{ayah_end})",')
        lines.append(f'    titleAr: "سُورَة {enriched.get("name_ar", "")} {ayah_start}-{ayah_end}",')
        lines.append(f'    stage: 2,')
        lines.append(f'    level: 8,')
        lines.append(f'    surah: {surah_num},')
        lines.append(f'    description: "{_esc(desc)}",')
        lines.append(f'    verses: [')
        
        for verse in block.get("verses", []):
            lines.append(f'      {{')
            lines.append(f'        surah: {surah_num}, ayah: {verse["ayah"]},')
            lines.append(f'        arabic: "{_esc(verse["arabic"])}",')
            lines.append(f'        translation: "{_esc(verse["translation"])}",')
            lines.append(f'        words: [')
            
            for word in verse.get("words", []):
                w_ar = _esc(word["arabic"])
                w_tl = _esc(word.get("transliteration", ""))
                w_root = _js_val(word.get("root"))
                w_pat = ""
                if word.get("pattern"):
                    w_pat = f'pattern: "{_esc(word["pattern"])}", '
                w_pos = word.get("pos", "ism")
                w_mtr = _esc(word.get("meaning_tr", ""))
                w_irab = _esc(word.get("irab", ""))
                w_is = _esc(word.get("irab_short", ""))
                w_tb = _js_val(word.get("turkish_bridge"))
                w_bn = _js_val(word.get("balagha_note"))
                lines.append(f'          {{ arabic: "{w_ar}", transliteration: "{w_tl}", root: {w_root}, {w_pat}pos: "{w_pos}", meaning_tr: "{w_mtr}", irab: "{w_irab}", irab_short: "{w_is}", turkish_bridge: {w_tb}, balagha_note: {w_bn} }},')
            
            lines.append(f'        ],')
            lines.append(f'      }},')
        
        lines.append(f'    ],')
        lines.append(f'    exercises: [],')
        lines.append(f'  }},')
    
    lines.append('];')
    lines.append('')
    lines.append(f'export default {var_name}Lessons;')
    lines.append('')
    
    return '\n'.join(lines)


def _esc(s):
    """JS string escape"""
    if s is None:
        return ""
    return str(s).replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')


def _js_val(v):
    """JS value: string veya null"""
    if v is None:
        return "null"
    return f'"{_esc(v)}"'


def _save_enriched_and_js(enriched: dict, surah_num: int, surah_data: dict, gen_js: bool):
    """Enriched JSON ve JS kaydetme (ortak yardımcı)."""
    enriched["name_ar"] = surah_data["name_ar"]
    
    # Enriched JSON kaydet
    ENRICHED_DIR.mkdir(parents=True, exist_ok=True)
    enriched_file = ENRICHED_DIR / f"{surah_num:03d}.json"
    with open(enriched_file, "w", encoding="utf-8") as f:
        json.dump(enriched, f, ensure_ascii=False, indent=2)
    print(f"  💾 Enriched JSON: {enriched_file}")
    
    # İstatistik
    total_words = sum(len(v.get("words", [])) for b in enriched.get("blocks", []) for v in b.get("verses", []))
    total_verses = sum(len(b.get("verses", [])) for b in enriched.get("blocks", []))
    print(f"  📊 Üretilen: {total_verses} ayet, {total_words} kelime")
    
    # Beklenen ile karşılaştır
    expected_ayahs = surah_data["total_ayahs"]
    if total_verses < expected_ayahs:
        print(f"  ⚠️ EKSİK: {total_verses}/{expected_ayahs} ayet üretildi")
    
    # JS üretimi
    if gen_js:
        js_content = generate_js_from_enriched(enriched, surah_num)
        name_lower = SURAH_NAMES_TR.get(surah_num, f"sure{surah_num}")
        js_file = SURAH_OUTPUT_DIR / f"{surah_num:03d}-{name_lower}.js"
        with open(js_file, "w", encoding="utf-8") as f:
            f.write(js_content)
        print(f"  📄 JS dosyası: {js_file}")
    
    return enriched


def _try_single_call(surah_data: dict, api_key: str) -> tuple:
    """Tek API çağrısı ile sureyi zenginleştirmeyi dene.
    
    Returns: (enriched_dict_or_None, should_fallback_to_chunked: bool)
    """
    surah_num = surah_data["surah"]
    word_count = surah_data["total_words"]
    
    prompt = build_enrichment_prompt(surah_data)
    print(f"  📝 Prompt: {len(prompt)} karakter")
    
    max_tokens = max(MAX_TOKENS_BASE, word_count * MAX_TOKENS_PER_WORD)
    print(f"  🤖 Claude API çağrılıyor ({MODEL}, max_tokens={max_tokens})...")
    t0 = time.time()
    
    try:
        response = call_claude_api(prompt, api_key, max_tokens=max_tokens)
    except Exception as e:
        print(f"  ❌ API hatası: {e}")
        return None, True  # Fallback to chunked
    
    elapsed = time.time() - t0
    usage = response.get("usage", {})
    in_tok = usage.get("input_tokens", 0)
    out_tok = usage.get("output_tokens", 0)
    cost = (in_tok * 3 + out_tok * 15) / 1_000_000
    print(f"  ✅ {elapsed:.1f}s, {in_tok}+{out_tok} tok, ${cost:.4f}")
    
    # Kesilme kontrolü
    stop_reason = response.get("stop_reason", "")
    was_truncated = stop_reason == "max_tokens"
    if was_truncated:
        print(f"  ⚠️ max_tokens ({max_tokens}) tavanına çarptı — JSON kesilmiş olabilir")
    
    # JSON çıkar (robust parser)
    try:
        enriched = extract_json_from_response(response)
    except Exception as e:
        print(f"  ❌ JSON tamiri başarısız: {e}")
        # Ham yanıtı kaydet
        raw_file = ENRICHED_DIR / f"{surah_num:03d}_raw.txt"
        ENRICHED_DIR.mkdir(parents=True, exist_ok=True)
        with open(raw_file, "w") as f:
            text = "".join(b.get("text", "") for b in response.get("content", []) if b.get("type") == "text")
            f.write(text)
        print(f"  💾 Ham yanıt: {raw_file}")
        return None, True  # Fallback to chunked
    
    # Sonuç doğrulama: kaç ayet üretildi?
    produced_verses = sum(len(b.get("verses", [])) for b in enriched.get("blocks", []))
    expected_ayahs = surah_data["total_ayahs"]
    
    if produced_verses < expected_ayahs * 0.8:
        # %80'den az ayet üretildiyse → fallback
        print(f"  ⚠️ Yetersiz: {produced_verses}/{expected_ayahs} ayet → blok moduna geçilecek")
        return None, True
    
    return enriched, False


def process_surah(surah_num: int, api_key: str, dry_run: bool = False, gen_js: bool = False, force_single: bool = False):
    """Tek bir sureyi işler — adaptif strateji ile.
    
    Strateji:
    1. word_count >= CHUNK_THRESHOLD → doğrudan blok modu
    2. word_count < CHUNK_THRESHOLD → tek çağrı dene
    3. Tek çağrı başarısızsa → otomatik blok moduna düş (fallback)
    """
    merged_file = MERGED_DIR / f"{surah_num:03d}.json"
    if not merged_file.exists():
        print(f"  ❌ Merged dosya bulunamadı: {merged_file}")
        return None
    
    with open(merged_file) as f:
        surah_data = json.load(f)
    
    name = SURAH_NAMES_TR_DISPLAY.get(surah_num, surah_data["name_translit"])
    print(f"\n{'='*60}")
    print(f"  📖 Sure {surah_num}: {name} ({surah_data['name_ar']})")
    print(f"  📊 {surah_data['total_ayahs']} ayet, {surah_data['total_words']} kelime")
    print(f"{'='*60}")
    
    word_count = surah_data["total_words"]
    
    # ── Karar ağacı ──────────────────────────────────────
    use_chunked = word_count >= CHUNK_THRESHOLD and not force_single
    
    if use_chunked:
        print(f"  🔀 {word_count} kelime >= {CHUNK_THRESHOLD} eşik → BLOK MODU")
    
    # Dry run — sadece planı göster
    if dry_run:
        if use_chunked:
            blocks = split_surah_into_blocks(surah_data)
            for i, ba in enumerate(blocks):
                bw = sum(len(a.get("words_ar",[])) for a in ba)
                print(f"     Blok {i+1}: ayet {ba[0]['number']}-{ba[-1]['number']} ({bw} kelime)")
            prompt = build_block_prompt(surah_data, blocks[0], 1, len(blocks))
            print(f"\n  🔍 DRY RUN — Blok 1 prompt:\n{'─'*40}")
            print(prompt[:2000])
            print(f"{'─'*40}\n  ... ({len(prompt)} karakter)")
        else:
            prompt = build_enrichment_prompt(surah_data)
            print(f"  📝 Prompt: {len(prompt)} karakter (tek çağrı)")
            est_tokens = max(MAX_TOKENS_BASE, word_count * MAX_TOKENS_PER_WORD)
            print(f"  📊 Tahmini max_tokens: {est_tokens}")
        return None
    
    # ── Gerçek işlem ─────────────────────────────────────
    
    if use_chunked:
        # Doğrudan blok modu
        enriched = process_surah_chunked(surah_num, surah_data, api_key, gen_js=False)
        if enriched:
            return _save_enriched_and_js(enriched, surah_num, surah_data, gen_js)
        return None
    
    # Tek çağrı dene
    print(f"  📡 TEK ÇAĞRI modu ({word_count} kelime)")
    enriched, should_fallback = _try_single_call(surah_data, api_key)
    
    if enriched:
        return _save_enriched_and_js(enriched, surah_num, surah_data, gen_js)
    
    # ── Adaptif fallback ─────────────────────────────────
    if should_fallback and not force_single:
        print(f"\n  🔄 TEK ÇAĞRI BAŞARISIZ → BLOK MODUNA otomatik geçiş")
        print(f"  ⏳ 10s bekleniyor (rate limit)...")
        time.sleep(10)
        
        enriched = process_surah_chunked(surah_num, surah_data, api_key, gen_js=False)
        if enriched:
            return _save_enriched_and_js(enriched, surah_num, surah_data, gen_js)
    
    print(f"  ❌ Sure {surah_num} tüm yöntemlerle başarısız")
    return None


def main():
    parser = argparse.ArgumentParser(description="Ustaz Quran Pipeline — Sure zenginleştirme")
    parser.add_argument("surahs", nargs="+", type=int, help="Sure numaraları (ör: 108 112 114)")
    parser.add_argument("--dry-run", action="store_true", help="API çağırmadan prompt'u göster")
    parser.add_argument("--js", action="store_true", help="JS dosyası da üret")
    parser.add_argument("--force-single", action="store_true", help="Blok modunu devre dışı bırak (tek çağrı)")
    parser.add_argument("--api-key", default=None, help="Anthropic API key (varsayılan: $ANTHROPIC_API_KEY)")
    args = parser.parse_args()
    
    api_key = args.api_key or os.environ.get("ANTHROPIC_API_KEY")
    if not api_key and not args.dry_run:
        print("❌ ANTHROPIC_API_KEY tanımlı değil!")
        print("   export ANTHROPIC_API_KEY='sk-ant-...'")
        sys.exit(1)
    
    print(f"🚀 Ustaz Quran Pipeline — {len(args.surahs)} sure işlenecek")
    print(f"   Model: {MODEL}")
    print(f"   Dry run: {args.dry_run}")
    print(f"   JS üret: {args.js}")
    
    results = {}
    for snum in args.surahs:
        if snum < 1 or snum > 114:
            print(f"  ⚠️ Geçersiz sure numarası: {snum}")
            continue
        try:
            result = process_surah(snum, api_key, dry_run=args.dry_run, gen_js=args.js, force_single=args.force_single)
            results[snum] = result
        except Exception as e:
            print(f"  ❌ Sure {snum} başarısız: {e}")
            results[snum] = None
        if not args.dry_run and len(args.surahs) > 1:
            time.sleep(3)  # Rate limit koruması
    
    # Özet
    print(f"\n{'='*60}")
    print(f"  📋 ÖZET")
    print(f"{'='*60}")
    for snum, result in results.items():
        name = SURAH_NAMES_TR_DISPLAY.get(snum, f"Sure {snum}")
        if result:
            blocks = result.get("blocks", [])
            words = sum(len(v.get("words", [])) for b in blocks for v in b.get("verses", []))
            print(f"  ✅ {snum} {name}: {words} kelime zenginleştirildi")
        else:
            print(f"  ❌ {snum} {name}: başarısız")


if __name__ == "__main__":
    main()
