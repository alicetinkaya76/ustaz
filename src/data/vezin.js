// Vezin (Arabic Morphological Patterns) Data
// Kullanılan kalıplar ve örnekler

const vezinDB = {
  // ─── Sülâsî Mücerred (I. Bâb) İsim Kalıpları ───
  "فَعْل": {
    title: "فَعْل",
    type: "masdar/ism",
    meaning: "Masdar veya basit isim. En yaygın I. bâb masdar kalıbı.",
    examples: [
      { arabic: "نَصْر", root: "ن-ص-ر", meaning: "yardım" },
      { arabic: "فَتْح", root: "ف-ت-ح", meaning: "fetih, açma" },
      { arabic: "حَمْد", root: "ح-م-د", meaning: "övgü" },
      { arabic: "عَصْر", root: "ع-ص-ر", meaning: "zaman, asır" },
      { arabic: "حَبْل", root: "ح-ب-ل", meaning: "ip" },
    ],
  },
  "فَعَل": {
    title: "فَعَل",
    type: "masdar/ism",
    meaning: "Basit isim veya masdar. İkinci harfte fetḥa.",
    examples: [
      { arabic: "لَهَب", root: "ل-ه-ب", meaning: "alev" },
      { arabic: "حَطَب", root: "ح-ط-ب", meaning: "odun" },
      { arabic: "مَسَد", root: "م-س-د", meaning: "lif, bükülmüş ip" },
      { arabic: "صَمَد", root: "ص-م-د", meaning: "Samed" },
      { arabic: "فَلَق", root: "ف-ل-ق", meaning: "yarılma, sabah" },
    ],
  },
  "فَعِيل": {
    title: "فَعِيل",
    type: "sıfat",
    meaning: "Sürekli sıfat. Devamlılık/kalıcılık ifade eder.",
    examples: [
      { arabic: "رَحِيم", root: "ر-ح-م", meaning: "sürekli merhametli" },
      { arabic: "عَلِيم", root: "ع-ل-م", meaning: "sürekli bilen" },
      { arabic: "كَبِير", root: "ك-ب-ر", meaning: "büyük" },
      { arabic: "حَكِيم", root: "ح-ك-م", meaning: "hikmet sahibi" },
    ],
  },
  "فَعْلَان": {
    title: "فَعْلَان",
    type: "sıfat",
    meaning: "Aşırılık, doluluk. Mübalağa ifade eder.",
    examples: [
      { arabic: "رَحْمَان", root: "ر-ح-م", meaning: "sonsuz merhametli" },
      { arabic: "غَضْبَان", root: "غ-ض-ب", meaning: "çok kızgın" },
      { arabic: "عَطْشَان", root: "ع-ط-ش", meaning: "çok susuz" },
    ],
  },
  "فَاعِل": {
    title: "فَاعِل",
    type: "ism-i fâil",
    meaning: "Yapan ismi. '-an/-en, yapan' karşılığı.",
    examples: [
      { arabic: "مَالِك", root: "م-ل-ك", meaning: "sahip olan" },
      { arabic: "عَالِم", root: "ع-ل-م", meaning: "bilen, âlim" },
      { arabic: "كَاتِب", root: "ك-ت-ب", meaning: "yazan" },
      { arabic: "نَاصِر", root: "ن-ص-ر", meaning: "yardım eden" },
    ],
  },
  "مَفْعُول": {
    title: "مَفْعُول",
    type: "ism-i mef'ûl",
    meaning: "Yapılan ismi. '-ılmış/-ilmiş' karşılığı.",
    examples: [
      { arabic: "مَغْضُوب", root: "غ-ض-ب", meaning: "gazap edilen" },
      { arabic: "مَعْلُوم", root: "ع-ل-م", meaning: "bilinen" },
      { arabic: "مَكْتُوب", root: "ك-ت-ب", meaning: "yazılan" },
      { arabic: "مَنْصُور", root: "ن-ص-ر", meaning: "yardım edilen" },
    ],
  },
  "فَعَّال": {
    title: "فَعَّال",
    type: "mübalağa",
    meaning: "Mübalağa ism-i fâil: 'çok/sürekli yapan.' Şedde = yoğunluk.",
    examples: [
      { arabic: "تَوَّاب", root: "ت-و-ب", meaning: "çok tövbe kabul eden" },
      { arabic: "غَفَّار", root: "غ-ف-ر", meaning: "çok bağışlayan" },
      { arabic: "حَمَّال", root: "ح-م-ل", meaning: "çok taşıyan, hamal" },
      { arabic: "عَلَّام", root: "ع-ل-م", meaning: "çok bilen" },
    ],
  },
  "أَفْعَال": {
    title: "أَفْعَال",
    type: "cem (çoğul)",
    meaning: "Kırık çoğul kalıbı. En yaygın çoğul formlarından biri.",
    examples: [
      { arabic: "أَفْوَاج", root: "ف-و-ج", meaning: "gruplar (فَوْج → أَفْوَاج)" },
      { arabic: "أَعْمَال", root: "ع-م-ل", meaning: "ameller (عَمَل → أَعْمَال)" },
      { arabic: "أَقْوَال", root: "ق-و-ل", meaning: "sözler (قَوْل → أَقْوَال)" },
    ],
  },

  // ─── Mezîd Bâb Kalıpları ───
  "أَفْعَلَ": {
    title: "أَفْعَلَ (IV. Bâb)",
    type: "fiil",
    meaning: "IV. bâb (if'âl): geçişli yapma, sebep olma.",
    examples: [
      { arabic: "أَغْنَى", root: "غ-ن-ي", meaning: "zengin kıldı, fayda verdi" },
      { arabic: "أَسْلَمَ", root: "س-ل-م", meaning: "teslim oldu, Müslüman oldu" },
      { arabic: "أَعْطَى", root: "ع-ط-و", meaning: "verdi" },
    ],
  },
  "فَعَّلَ": {
    title: "فَعَّلَ (II. Bâb)",
    type: "fiil",
    meaning: "II. bâb (tef'îl): yoğunlaştırma, tekrar, geçişli yapma. Masdarı: تَفْعِيل.",
    examples: [
      { arabic: "سَبَّحَ", root: "س-ب-ح", meaning: "tesbih etti (yüceltti)" },
      { arabic: "عَلَّمَ", root: "ع-ل-م", meaning: "öğretti" },
      { arabic: "كَسَّرَ", root: "ك-س-ر", meaning: "parça parça kırdı" },
    ],
  },
  "تَفَاعَلَ": {
    title: "تَفَاعَلَ (VI. Bâb)",
    type: "fiil",
    meaning: "VI. bâb (tefa'ul): karşılıklı/müşterek yapma. Masdarı: تَفَاعُل.",
    examples: [
      { arabic: "تَوَاصَوْا", root: "و-ص-ي", meaning: "birbirlerine tavsiye ettiler" },
      { arabic: "تَعَاوَنَ", root: "ع-و-ن", meaning: "yardımlaştılar" },
    ],
  },
  "اِسْتَفْعَلَ": {
    title: "اِسْتَفْعَلَ (X. Bâb)",
    type: "fiil",
    meaning: "X. bâb (istif'âl): talep/istek bildirme. Masdarı: اِسْتِفْعَال.",
    examples: [
      { arabic: "اِسْتَغْفَرَ", root: "غ-ف-ر", meaning: "bağışlanma istedi" },
      { arabic: "اِسْتَعَاذَ", root: "ع-و-ذ", meaning: "sığınma istedi" },
      { arabic: "اِسْتَقَامَ", root: "ق-و-م", meaning: "doğruluk istedi, dosdoğru oldu" },
    ],
  },
};

export default vezinDB;
