"""
js_template.py — JSON veriden Ustaz sure JS dosyası üretir
"""

import json
from datetime import datetime

# Sure isimleri (Türkçe + Arapça)
SURAH_NAMES = {
    1: ("Fâtiha", "سُورَةُ الفَاتِحَة"),
    2: ("Bakara", "سُورَةُ البَقَرَة"),
    3: ("Âl-i İmrân", "سُورَةُ آلِ عِمْرَان"),
    # ... (114'e kadar doldurulacak)
    55: ("Rahmân", "سُورَةُ الرَّحْمَـٰنِ"),
    67: ("Mülk", "سُورَةُ المُلْك"),
    78: ("Nebe", "سُورَةُ النَّبَإ"),
    80: ("Abese", "سُورَةُ عَبَسَ"),
    82: ("İnfitâr", "سُورَةُ الانْفِطَار"),
    96: ("Alak", "سُورَةُ العَلَق"),
    109: ("Kâfirûn", "سُورَةُ الكَافِرُون"),
    110: ("Nasr", "سُورَةُ النَّصْر"),
    111: ("Tebbet", "سُورَةُ المَسَد"),
    112: ("İhlâs", "سُورَةُ الإِخْلَاص"),
    113: ("Felak", "سُورَةُ الفَلَق"),
    114: ("Nâs", "سُورَةُ النَّاس"),
}

def escape_js(s: str) -> str:
    """JS string escape"""
    if s is None:
        return "null"
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")

def generate_word_js(word: dict) -> str:
    """Tek kelime için JS object üret"""
    parts = []
    parts.append(f'arabic: "{escape_js(word["arabic"])}"')
    parts.append(f'transliteration: "{escape_js(word.get("transliteration", ""))}"')
    
    root = word.get("root")
    if root:
        parts.append(f'root: "{escape_js(root)}"')
    else:
        parts.append('root: null')
    
    pattern = word.get("pattern")
    if pattern:
        parts.append(f'pattern: "{escape_js(pattern)}"')
    
    parts.append(f'pos: "{word.get("pos", "ism")}"')
    parts.append(f'meaning_tr: "{escape_js(word.get("meaning_tr", ""))}"')
    parts.append(f'irab: "{escape_js(word.get("irab", ""))}"')
    parts.append(f'irab_short: "{escape_js(word.get("irab_short", ""))}"')
    
    tb = word.get("turkish_bridge")
    if tb:
        parts.append(f'turkish_bridge: "{escape_js(tb)}"')
    else:
        parts.append('turkish_bridge: null')
    
    bn = word.get("balagha_note")
    if bn:
        parts.append(f'balagha_note: "{escape_js(bn)}"')
    else:
        parts.append('balagha_note: null')
    
    return "{ " + ", ".join(parts) + " }"

def generate_verse_js(verse: dict) -> str:
    """Tek ayet için JS object üret"""
    words_js = ",\n          ".join(generate_word_js(w) for w in verse["words"])
    return f"""      {{
        surah: {verse["surah"]}, ayah: {verse["ayah"]},
        arabic: "{escape_js(verse["arabic"])}",
        translation: "{escape_js(verse["translation"])}",
        words: [
          {words_js}
        ],
      }}"""

def generate_block_js(block: dict, surah_num: int, block_idx: int) -> str:
    """Bölüm (block/lesson) için JS object üret"""
    name_tr, name_ar = SURAH_NAMES.get(surah_num, ("?", "?"))
    name_lower = name_tr.lower().replace("â", "a").replace("î", "i").replace("û", "u").replace("ê", "e")
    
    block_id = f"S{surah_num:02d}-B{block_idx:02d}-{name_lower}"
    ayah_range = f"{block['ayah_start']}-{block['ayah_end']}"
    
    verses_js = ",\n".join(generate_verse_js(v) for v in block["verses"])
    
    return f"""  {{
    id: "{block_id}",
    title: "{name_tr} ({ayah_range})",
    titleAr: "{name_ar} {ayah_range}",
    stage: 2,
    level: 8,
    surah: {surah_num},
    description: "{escape_js(block.get('description', ''))}",
    verses: [
{verses_js}
    ],
    exercises: [],
  }}"""

def generate_surah_file(surah_data: dict) -> str:
    """Tam sure JS dosyası üret"""
    surah_num = surah_data["surah"]
    name_tr, name_ar = SURAH_NAMES.get(surah_num, ("?", "?"))
    name_lower = name_tr.lower().replace("â", "a").replace("î", "i").replace("û", "u").replace("ê", "e")
    
    today = datetime.now().strftime("%Y-%m-%d")
    
    # Generate blocks
    blocks_js = ",\n".join(
        generate_block_js(block, surah_num, i + 1) 
        for i, block in enumerate(surah_data["blocks"])
    )
    
    return f"""// ═══════════════════════════════════════════════════════════
// {name_tr.upper()} SURESİ ({surah_num}) — Pipeline Üretimi
// {today}: {len(surah_data["blocks"])} bölüm, {surah_data["ayah_count"]} ayet tam kapsam
// ═══════════════════════════════════════════════════════════

import {{
  generateRootQuiz,
  generateBabQuiz,
  generateWaznQuiz,
  generateFillBlank,
  generateBalaghaQuiz,
  generateIrabQuiz,
}} from "../../utils/quizGenerator.js";

const {name_lower}Lessons = [
{blocks_js}
];

export default {name_lower}Lessons;
"""


if __name__ == "__main__":
    # Test with minimal data
    test_data = {
        "surah": 114,
        "ayah_count": 6,
        "blocks": [{
            "ayah_start": 1,
            "ayah_end": 6,
            "description": "Test block",
            "verses": [{
                "surah": 114, "ayah": 1,
                "arabic": "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ",
                "translation": "De ki: Sığınırım insanların Rabbine",
                "words": [
                    {"arabic": "قُلْ", "transliteration": "qul", "root": "ق-و-ل", "pos": "fil", "meaning_tr": "de!", "irab": "emr", "irab_short": "emr"},
                ]
            }]
        }]
    }
    print(generate_surah_file(test_data)[:500])
