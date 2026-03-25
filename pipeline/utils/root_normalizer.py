"""
root_normalizer.py — QAC Buckwalter köklerini Ustaz formatına dönüştürür
Örnek: "$qq" → "ش-ق-ق", "Emn" → "أ-م-ن"
"""

# Buckwalter → Arabic mapping
BW2AR = {
    "'": "ء", "|": "آ", ">": "أ", "&": "ؤ", "<": "إ", "}": "ئ",
    "A": "ا", "b": "ب", "p": "ة", "t": "ت", "v": "ث", "j": "ج",
    "H": "ح", "x": "خ", "d": "د", "*": "ذ", "r": "ر", "z": "ز",
    "s": "س", "$": "ش", "S": "ص", "D": "ض", "T": "ط", "Z": "ظ",
    "E": "ع", "g": "غ", "f": "ف", "q": "ق", "k": "ك", "l": "ل",
    "m": "م", "n": "ن", "h": "ه", "w": "و", "y": "ي",
    "F": "ً", "N": "ٌ", "K": "ٍ", "a": "َ", "u": "ُ", "i": "ِ",
    "~": "ّ", "o": "ْ", "`": "ٰ", "{": "ٱ",
    "Y": "ى", "P": "پ", "J": "چ", "V": "ڤ", "G": "گ",
}

def bw_to_arabic(bw_text: str) -> str:
    """Buckwalter transliterasyon → Arapça"""
    return "".join(BW2AR.get(c, c) for c in bw_text)

def normalize_root(bw_root: str) -> str:
    """
    QAC Buckwalter kökünü Ustaz formatına dönüştürür.
    Örnek: "$qq" → "ش-ق-ق"
           "Emn" → "أ-م-ن"  
           "rwH" → "ر-و-ح"
    """
    if not bw_root or bw_root == "—":
        return None
    
    # Convert each radical
    arabic_letters = []
    for char in bw_root:
        ar = BW2AR.get(char)
        if ar and ar not in "ًٌٍَُِّْٰ":  # skip diacritics
            arabic_letters.append(ar)
    
    if not arabic_letters:
        return None
    
    return "-".join(arabic_letters)

def bw_to_transliteration(bw_text: str) -> str:
    """
    Buckwalter → akademik transliterasyon (basitleştirilmiş)
    Tam ISO 233-2 değil, Ustaz projesinde kullanılan format.
    """
    TRANSLIT_MAP = {
        "'": "ʾ", "|": "ā", ">": "ʾ", "&": "ʾ", "<": "ʾ", "}": "ʾ",
        "A": "ā", "b": "b", "t": "t", "v": "ṯ", "j": "ǧ",
        "H": "ḥ", "x": "ḫ", "d": "d", "*": "ḏ", "r": "r", "z": "z",
        "s": "s", "$": "š", "S": "ṣ", "D": "ḍ", "T": "ṭ", "Z": "ẓ",
        "E": "ʿ", "g": "ġ", "f": "f", "q": "q", "k": "k", "l": "l",
        "m": "m", "n": "n", "h": "h", "w": "w", "y": "y",
        "a": "a", "u": "u", "i": "i", "~": "", "o": "",
    }
    return "".join(TRANSLIT_MAP.get(c, c) for c in bw_text)


# --- Tests ---
if __name__ == "__main__":
    tests = [
        ("$qq", "ش-ق-ق"),
        (">mn", "أ-م-ن"),      # QAC: hamza-on-alif = >
        ("rwH", "ر-و-ح"),
        ("rbb", "ر-ب-ب"),
        ("Ebd", "ع-ب-د"),
        ("qr>", "ق-ر-أ"),      # QAC: lam-hamza = >
        ("smw", "س-م-و"),
        ("kwkb", "ك-و-ك-ب"),
        ("Elm", "ع-ل-م"),
        ("wqy", "و-ق-ي"),
    ]
    
    for bw, expected in tests:
        result = normalize_root(bw)
        status = "✅" if result == expected else "❌"
        print(f"  {status} {bw} → {result} (expected: {expected})")
