// ═══════════════════════════════════════════════════════════
// Quiz Generator — Tekrar eden quiz kalıpları için şablon sistemi
// v0.18.0: Temel generator fonksiyonları
// ═══════════════════════════════════════════════════════════

/**
 * Kök çıkarma quiz'i üretir (root_extract tipi)
 * @param {string} id - Quiz ID (ör: "L56-Q03")
 * @param {string} word - Hedef kelime (Arapça)
 * @param {string} correctRoot - Doğru kök (ör: "و-ه-ج")
 * @param {string[]} distractors - Yanlış kökler (3 tane)
 * @param {string} explanation - Açıklama
 * @param {string[]} relatedRoots - İlişkili kökler
 */
export function generateRootQuiz(id, word, correctRoot, distractors, explanation, relatedRoots = []) {
  const options = [correctRoot, ...distractors];
  return {
    id,
    type: "root_extract",
    question: `${word} kelimesinin kökü nedir?`,
    targetWord: word,
    options,
    correct: 0,
    explanation,
    relatedRoots: relatedRoots.length ? relatedRoots : [correctRoot],
  };
}

/**
 * Bâb belirleme quiz'i üretir (bab_identify tipi)
 * @param {string} id
 * @param {string} word - Hedef fiil
 * @param {number} correctBab - Doğru bâb numarası (1-10)
 * @param {string} correctLabel - Ör: "IV. bâb (if'âl): نَزَلَ → أَنزَلَ"
 * @param {string[]} distractorLabels - Yanlış bâb açıklamaları (3 tane)
 * @param {string} explanation
 * @param {string[]} relatedRoots
 */
export function generateBabQuiz(id, word, correctLabel, distractorLabels, explanation, relatedRoots = []) {
  return {
    id,
    type: "bab_identify",
    question: `${word} fiili kaçıncı bâbtandır?`,
    targetWord: word,
    options: [correctLabel, ...distractorLabels],
    correct: 0,
    explanation,
    relatedRoots,
  };
}

/**
 * Kalıp (vezin/wazn) eşleştirme quiz'i
 * @param {string} id
 * @param {string} word
 * @param {string} correctPattern - Ör: "مِفْعَال (âlet ismi)"
 * @param {string[]} distractorPatterns
 * @param {string} explanation
 * @param {string[]} relatedRoots
 */
export function generateWaznQuiz(id, word, correctPattern, distractorPatterns, explanation, relatedRoots = []) {
  return {
    id,
    type: "wazn_match",
    question: `${word} kelimesi hangi kalıptadır?`,
    targetWord: word,
    options: [correctPattern, ...distractorPatterns],
    correct: 0,
    explanation,
    relatedRoots,
  };
}

/**
 * Boşluk doldurma quiz'i (fill_blank tipi)
 * @param {string} id
 * @param {string} sentence - Boşluklu cümle (_____ ile)
 * @param {string} correctWord
 * @param {string[]} distractors
 * @param {string} hint
 * @param {string} explanation
 * @param {string[]} relatedRoots
 */
export function generateFillBlank(id, sentence, correctWord, distractors, hint, explanation, relatedRoots = []) {
  return {
    id,
    type: "fill_blank",
    question: sentence,
    options: [correctWord, ...distractors],
    correct: 0,
    hint,
    explanation,
    relatedRoots,
  };
}

/**
 * Belâgat belirleme quiz'i (balagha_identify tipi)
 * @param {string} id
 * @param {string} question
 * @param {string} correctTechnique
 * @param {string[]} distractorTechniques
 * @param {string} explanation
 */
export function generateBalaghaQuiz(id, question, correctTechnique, distractorTechniques, explanation) {
  return {
    id,
    type: "balagha_identify",
    question,
    options: [correctTechnique, ...distractorTechniques],
    correct: 0,
    explanation,
    relatedRoots: [],
  };
}

/**
 * İ'rab rolü belirleme quiz'i (irab_identify tipi)
 * @param {string} id
 * @param {string} word
 * @param {string} correctRole
 * @param {string[]} distractorRoles
 * @param {string} explanation
 * @param {string[]} relatedRoots
 */
export function generateIrabQuiz(id, word, correctRole, distractorRoles, explanation, relatedRoots = []) {
  return {
    id,
    type: "irab_identify",
    question: `${word} kelimesinin bu cümledeki i'rab rolü nedir?`,
    targetWord: word,
    options: [correctRole, ...distractorRoles],
    correct: 0,
    explanation,
    relatedRoots,
  };
}

/**
 * Yaygın distractor (yanlış cevap) havuzları
 * Quiz üretirken kullanılabilir
 */
export const distractorPools = {
  babs: [
    "I. bâb (fe'ale)",
    "II. bâb (tef'îl)",
    "III. bâb (mufâ'ale)",
    "IV. bâb (if'âl)",
    "V. bâb (tefa''ul)",
    "VI. bâb (tefâ'ul)",
    "VII. bâb (infi'âl)",
    "VIII. bâb (ifti'âl)",
    "IX. bâb (if'ilâl)",
    "X. bâb (istif'âl)",
  ],
  irabRoles: [
    "Fâil (merfû)",
    "Mef'ûl bih (mensûb)",
    "Mübtedâ (merfû)",
    "Haber (merfû)",
    "Hâl (mansûb)",
    "Temyîz (mensûb)",
    "Sıfat",
    "Muzâfun ileyh (mecrûr)",
    "Mef'ûl mutlak (mensûb)",
    "Nâib-i fâil (merfû)",
    "Haber-i kâne (mensûb)",
    "İsm-i inne (mensûb)",
  ],
  balagha: [
    "İsti'âre (metafor)",
    "Teşbîh (benzetme)",
    "Kinâye (dolaylı anlatım)",
    "Tıbâk (tezâd/antitez)",
    "Mukâbele (paralelizm)",
    "Tecâhül-i ârif (bilmezden gelme)",
    "İstifhâm-ı inkârî",
    "İltifât (bakış açısı değişimi)",
    "Îcâz (kısalık)",
    "İtnâb (uzatma/açıklama)",
    "Tekrâr (yineleme)",
    "Teşhîs (kişileştirme)",
  ],
  verbTypes: [
    "Sahîh — Sâlim",
    "Sahîh — Muzâ'af",
    "Mu'tel — Misâl (fâ illet)",
    "Mu'tel — Ecvef (ayn illet)",
    "Mu'tel — Nâkıs (lâm illet)",
    "Mu'tel — Lefîf Mefrûk",
    "Mu'tel — Lefîf Makrûn",
    "Mehmûz — Fâ",
    "Mehmûz — Ayn",
    "Mehmûz — Lâm",
  ],
};

/**
 * Fiil sınıflandırma quiz'i üretir (verb_type tipi)
 * @param {string} id
 * @param {string} word - Hedef fiil (Arapça)
 * @param {string} root - Kök
 * @param {string} correctType - Doğru sınıf (ör: "Mu'tel — Ecvef (ayn illet)")
 * @param {string[]} distractors - Yanlış sınıflar (3 tane)
 * @param {string} explanation
 */
export function generateVerbTypeQuiz(id, word, root, correctType, distractors, explanation) {
  return {
    id,
    type: "verb_type",
    question: `${word} (${root}) fiili hangi sınıfa aittir?`,
    targetWord: word,
    options: [correctType, ...distractors],
    correct: 0,
    explanation,
    relatedRoots: [root],
  };
}

/**
 * Çapraz-sure kök quiz'i (cross_surah_root tipi)
 * @param {string} id
 * @param {string} root - Hedef kök
 * @param {string} exampleWord - Bir örnek kelime (Arapça)
 * @param {string} correctSurah - Doğru sure adı/numarası
 * @param {string[]} distractorSurahs - Yanlış sure adları (3 tane)
 * @param {string} explanation
 */
export function generateCrossSurahRootQuiz(id, root, exampleWord, correctSurah, distractorSurahs, explanation) {
  return {
    id,
    type: "cross_surah_root",
    question: `${root} kökü (ör: ${exampleWord}) aşağıdaki surelerden hangisinde geçer?`,
    targetWord: exampleWord,
    options: [correctSurah, ...distractorSurahs],
    correct: 0,
    explanation,
    relatedRoots: [root],
  };
}

/**
 * Kök ailesi quiz'i (root_family tipi)
 * "Bu kelimelerden hangisi X kökünden türememiştir?"
 * @param {string} id
 * @param {string} root - Hedef kök
 * @param {string} intruder - Doğru cevap (farklı kökten olan kelime)
 * @param {string[]} sameFamily - Aynı kökten olan 3 kelime (distractors)
 * @param {string} explanation
 */
export function generateRootFamilyQuiz(id, root, intruder, sameFamily, explanation) {
  return {
    id,
    type: "root_family",
    question: `Aşağıdakilerden hangisi ${root} kökünden türememiştir?`,
    options: [intruder, ...sameFamily],
    correct: 0,
    explanation,
    relatedRoots: [root],
  };
}
