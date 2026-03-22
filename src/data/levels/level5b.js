// ═══════════════════════════════════════════════════════════
// SEVİYE 5b — L43 (Hümeze), L44 (Fîl), L45 (Kureyş), L46 (Mâ'ûn)
// ═══════════════════════════════════════════════════════════

const level5bLessons = [
  // ═══════════════════════════════════════════════════════════
  // DERS 43 — HÜMEZE SURESİ (104:1-9)
  // ═══════════════════════════════════════════════════════════
  {
    id: "L43-humeze",
    title: "Hümeze Suresi (1-9)",
    titleAr: "سُورَةُ الهُمَزَة",
    stage: 2,
    level: 5,
    surah: 104,
    description: "Gıybet ve mal hırsı uyarısı. هُمَزَة/لُمَزَة فُعَلَة mübalağa, لَيُنبَذَنَّ VII. bâb meçhul + nûn-u te'kîd, وَمَا أَدْرَاكَ ıtnâb sorusu, مُؤْصَدَة ism-i mef'ûl.",
    verses: [
      {
        surah: 104, ayah: 1,
        arabic: "وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ",
        translation: "Her arkadan çekiştirip yüzüne karşı alay edene yazıklar olsun!",
        words: [
          { arabic: "وَيْلٌ", transliteration: "veylun", root: "و-ي-ل", pos: "ism", meaning_tr: "yazıklar, helak", irab_short: "mübtedâ, merfû" },
          { arabic: "لِّكُلِّ", transliteration: "li-kulli", root: "ك-ل-ل", pos: "ism", meaning_tr: "her (biri) için", irab_short: "câr-mecrûr, haber" },
          { arabic: "هُمَزَةٍ", transliteration: "humezetin", root: "ه-م-ز", pos: "ism", meaning_tr: "arkadan çekiştiren", irab_short: "muzâfun ileyh, mecrûr" },
          { arabic: "لُّمَزَةٍ", transliteration: "lumezetin", root: "ل-م-ز", pos: "ism", meaning_tr: "yüze karşı alay eden", irab_short: "bedel/sıfat, mecrûr" },
        ],
      },
      {
        surah: 104, ayah: 2,
        arabic: "ٱلَّذِى جَمَعَ مَالًا وَعَدَّدَهُۥ",
        translation: "O ki mal toplayıp onu sayıp durur.",
        words: [
          { arabic: "ٱلَّذِى", transliteration: "ellezî", root: null, pos: "ism", meaning_tr: "o ki", irab_short: "ism-i mevsûl, sıfat/bedel" },
          { arabic: "جَمَعَ", transliteration: "ceme'a", root: "ج-م-ع", pos: "fil", meaning_tr: "topladı", irab_short: "mâzî, I. bâb" },
          { arabic: "مَالًا", transliteration: "mâlen", root: "م-و-ل", pos: "ism", meaning_tr: "mal", irab_short: "mef'ûlun bih, mansûb" },
          { arabic: "وَعَدَّدَهُۥ", transliteration: "ve-addedehû", root: "ع-د-د", pos: "fil", meaning_tr: "onu saydı (sayıp durdu)", irab_short: "mâzî, II. bâb (tef'îl)" },
        ],
      },
      {
        surah: 104, ayah: 3,
        arabic: "يَحْسَبُ أَنَّ مَالَهُۥٓ أَخْلَدَهُۥ",
        translation: "Malının kendisini ölümsüz kılacağını sanır.",
        words: [
          { arabic: "يَحْسَبُ", transliteration: "yahsebu", root: "ح-س-ب", pos: "fil", meaning_tr: "sanır, zanneder", irab_short: "muzâri, I. bâb" },
          { arabic: "أَنَّ", transliteration: "enne", root: null, pos: "harf", meaning_tr: "(…olduğunu)", irab_short: "harf-i masdarî" },
          { arabic: "مَالَهُۥٓ", transliteration: "mâlehû", root: "م-و-ل", pos: "ism", meaning_tr: "malı(nın)", irab_short: "ism-i enne, mansûb" },
          { arabic: "أَخْلَدَهُۥ", transliteration: "ahledehû", root: "خ-ل-د", pos: "fil", meaning_tr: "onu ölümsüz kıldı", irab_short: "mâzî, IV. bâb (if'âl)" },
        ],
      },
      {
        surah: 104, ayah: 4,
        arabic: "كَلَّا ۖ لَيُنۢبَذَنَّ فِى ٱلْحُطَمَةِ",
        translation: "Hayır! Andolsun ki Hutame'ye atılacaktır.",
        words: [
          { arabic: "كَلَّا", transliteration: "kellâ", root: null, pos: "harf", meaning_tr: "hayır!", irab_short: "zecr/rediye" },
          { arabic: "لَيُنۢبَذَنَّ", transliteration: "le-yunbezenne", root: "ن-ب-ذ", pos: "fil", meaning_tr: "kesinlikle atılacak", irab_short: "muzâri meçhul, VII. bâb + lâm-ı kasem + nûn-u te'kîd" },
          { arabic: "فِى", transliteration: "fî", root: null, pos: "harf", meaning_tr: "içine", irab_short: "harf-i cer" },
          { arabic: "ٱلْحُطَمَةِ", transliteration: "el-hutameti", root: "ح-ط-م", pos: "ism", meaning_tr: "kırıp geçiren (ateş)", irab_short: "mecrûr, فُعَلَة mübalağa" },
        ],
      },
      {
        surah: 104, ayah: 5,
        arabic: "وَمَآ أَدْرَىٰكَ مَا ٱلْحُطَمَةُ",
        translation: "Hutame'nin ne olduğunu sen nereden bileceksin?",
        words: [
          { arabic: "وَمَآ", transliteration: "ve-mâ", root: null, pos: "harf", meaning_tr: "ve ne?", irab_short: "istifhâm" },
          { arabic: "أَدْرَىٰكَ", transliteration: "edrâke", root: "د-ر-ي", pos: "fil", meaning_tr: "sana bildirdi", irab_short: "mâzî, IV. bâb" },
          { arabic: "مَا", transliteration: "mâ", root: null, pos: "harf", meaning_tr: "ne(dir)?", irab_short: "istifhâm" },
          { arabic: "ٱلْحُطَمَةُ", transliteration: "el-hutametu", root: "ح-ط-م", pos: "ism", meaning_tr: "Hutame", irab_short: "mübtedâ/haber, merfû" },
        ],
      },
      {
        surah: 104, ayah: 6,
        arabic: "نَارُ ٱللَّهِ ٱلْمُوقَدَةُ",
        translation: "Allah'ın tutuşturulmuş ateşi.",
        words: [
          { arabic: "نَارُ", transliteration: "nâru", root: "ن-و-ر", pos: "ism", meaning_tr: "ateş", irab_short: "haber/mübtedâ, merfû" },
          { arabic: "ٱللَّهِ", transliteration: "Allâhi", root: null, pos: "ism", meaning_tr: "Allah'ın", irab_short: "muzâfun ileyh, mecrûr" },
          { arabic: "ٱلْمُوقَدَةُ", transliteration: "el-mûkadetu", root: "و-ق-د", pos: "ism", meaning_tr: "tutuşturulmuş", irab_short: "sıfat, merfû; IV. bâb ism-i mef'ûl" },
        ],
      },
      {
        surah: 104, ayah: 7,
        arabic: "ٱلَّتِى تَطَّلِعُ عَلَى ٱلْأَفْـِٔدَةِ",
        translation: "Ki (o ateş) kalplerin ta derinlerine nüfuz eder.",
        words: [
          { arabic: "ٱلَّتِى", transliteration: "elletî", root: null, pos: "ism", meaning_tr: "o ki (dişil)", irab_short: "ism-i mevsûl" },
          { arabic: "تَطَّلِعُ", transliteration: "tattali'u", root: "ط-ل-ع", pos: "fil", meaning_tr: "nüfuz eder/çıkar", irab_short: "muzâri, VIII. bâb (iftı'âl)" },
          { arabic: "عَلَى", transliteration: "alâ", root: null, pos: "harf", meaning_tr: "üzerine", irab_short: "harf-i cer" },
          { arabic: "ٱلْأَفْـِٔدَةِ", transliteration: "el-ef'ideti", root: "ف-أ-د", pos: "ism", meaning_tr: "kalpler/yürekler", irab_short: "mecrûr, أَفْعِلَة cem kırık" },
        ],
      },
      {
        surah: 104, ayah: 8,
        arabic: "إِنَّهَا عَلَيْهِم مُّؤْصَدَةٌ",
        translation: "Şüphesiz o (ateş) onların üzerine kapatılmıştır.",
        words: [
          { arabic: "إِنَّهَا", transliteration: "innehâ", root: null, pos: "harf", meaning_tr: "şüphesiz o", irab_short: "إِنَّ + hâ zamîr" },
          { arabic: "عَلَيْهِم", transliteration: "aleyhim", root: null, pos: "harf", meaning_tr: "onların üzerine", irab_short: "câr-mecrûr, haber mukaddem" },
          { arabic: "مُّؤْصَدَةٌ", transliteration: "mû'sadetun", root: "أ-ص-د", pos: "ism", meaning_tr: "kapatılmış", irab_short: "haber-i inne, merfû; IV. bâb ism-i mef'ûl" },
        ],
      },
      {
        surah: 104, ayah: 9,
        arabic: "فِى عَمَدٍ مُّمَدَّدَةٍ",
        translation: "Uzatılmış sütunlarla (bağlanmış olarak).",
        words: [
          { arabic: "فِى", transliteration: "fî", root: null, pos: "harf", meaning_tr: "içinde", irab_short: "harf-i cer" },
          { arabic: "عَمَدٍ", transliteration: "amedin", root: "ع-م-د", pos: "ism", meaning_tr: "sütunlar/direkler", irab_short: "mecrûr, cem" },
          { arabic: "مُّمَدَّدَةٍ", transliteration: "mumeddedeti", root: "م-د-د", pos: "ism", meaning_tr: "uzatılmış", irab_short: "sıfat, mecrûr; II. bâb ism-i mef'ûl" },
        ],
      },
    ],
    grammarNotes: [
      { title: "فُعَلَة Mübalağa: هُمَزَة / لُمَزَة / حُطَمَة", explanation: "فُعَلَة kalıbı, bir eylemi sürekli ve aşırı yapan kişi/şey anlamı verir. هُمَزَة: çok çekiştiren, لُمَزَة: çok alay eden, حُطَمَة: çok kırıp geçiren. Üçü de aynı kalıpta → paralel yapı.", rule: "فُعَلَة = mübalağa: eylemi aşırı/sürekli yapan\nهُمَزَة ← هَمَزَ (arkadan çekiştirdi)\nلُمَزَة ← لَمَزَ (yüze karşı alay etti)\nحُطَمَة ← حَطَمَ (kırıp geçirdi)", examples: ["هُمَزَة — çok çekiştiren", "لُمَزَة — çok alay eden", "حُطَمَة — çok kırıp geçiren (ateş)"] },
      { title: "VII. Bâb Meçhul + Nûn-u Te'kîd: لَيُنبَذَنَّ", explanation: "نَبَذَ (attı) → VII. bâb: اِنْبَذَ (atıldı, meçhul gibi) → meçhul muzâri: يُنبَذُ → kasem + te'kîd: لَيُنبَذَنَّ. L42'deki لَتَرَوُنَّ ile aynı yapı: لَ + muzâri + نّ.", rule: "نَبَذَ (I) → اِنْبَذَ (VII: atıldı)\nلَ + يُنبَذُ + نَّ = yemin + meçhul + kesinlik\n'Andolsun ki (o) atılacaktır!'", examples: ["لَيُنبَذَنَّ — kesinlikle atılacak", "لَتَرَوُنَّ — kesinlikle göreceksiniz (L42)", "لَتُسْأَلُنَّ — kesinlikle sorulacaksınız (L42)"] },
      { title: "وَمَا أَدْرَاكَ: İdrakin Ötesinde", explanation: "وَمَا أَدْرَاكَ مَا الحُطَمَة: 'Hutame'nin ne olduğunu sana ne bildirdi?' Gerçek soru değil, ıtnâb (ta'zîm sorusu). L41'de القَارِعَة, L37'de لَيْلَةُ القَدْرِ ile aynı yapı.", rule: "وَمَا أَدْرَاكَ مَا X = ıtnâb sorusu\nAnlam: X'in büyüklüğü idrakin ötesinde\nHer zaman cevap gelir (tanım/tasvir)", examples: ["وَمَا أَدْرَاكَ مَا الحُطَمَة — 104:5", "وَمَا أَدْرَاكَ مَا القَارِعَة — 101:3", "وَمَا أَدْرَاكَ مَا لَيْلَةُ القَدْرِ — 97:2"] },
    ],
    exercises: [
      { id: "L43-Q01", type: "wazn_match", question: "هُمَزَة, لُمَزَة, حُطَمَة ortak kalıbı nedir?", options: ["فُعَلَة — mübalağa: çok/sürekli yapan", "فَاعِلَة — ism-i fâil", "فَعِيلَة — sıfat-ı müşebbehe", "مَفْعَلَة — ism-i mekân"], correct: 0, explanation: "فُعَلَة: mübalağa kalıbı. Üçü de aynı kalıpta: çok çekiştiren, çok alay eden, çok kırıp geçiren.", relatedRoots: ["ه-م-ز", "ل-م-ز", "ح-ط-م"] },
      { id: "L43-Q02", type: "bab_identify", question: "أَخْلَدَهُ (onu ölümsüz kıldı) hangi bâbtandır?", options: ["IV. bâb (أَفْعَلَ): خَلَدَ → أَخْلَدَ", "I. bâb: خَلَدَ (kaldı)", "II. bâb: خَلَّدَ", "VII. bâb: اِنْخَلَدَ"], correct: 0, explanation: "أَخْلَدَ = IV. bâb (أَفْعَلَ). خَلَدَ (kaldı, lâzım) → أَخْلَدَ (kalıcı kıldı, müteaddî). IV. bâb geçişli yapar.", relatedRoots: ["خ-ل-د"] },
      { id: "L43-Q03", type: "single_choice", question: "لَيُنبَذَنَّ yapısındaki üç dilsel katman nedir?", options: ["لَ kasem + meçhul muzâri (VII. bâb) + نّ te'kîd nûnu", "لَ nefi + mâzî + نّ te'kîd", "لَ emr + muzâri + نّ hafîfe", "لَ istikbâl + mâzî + هُ zamîr"], correct: 0, explanation: "Üçlü: (1) لَ yemin (2) يُنبَذُ meçhul muzâri VII. bâb (3) نّ ağır te'kîd nûnu. L42'deki لَتَرَوُنَّ ile aynı mekanizma.", relatedRoots: ["ن-ب-ذ"] },
      { id: "L43-Q04", type: "balagha_identify", question: "وَمَا أَدْرَاكَ مَا الحُطَمَة hangi belâgat sanatıdır?", options: ["Itnâb — ta'zîm sorusu: idrakin ötesinde yüceltme", "İstifhâm-ı inkârî", "Iltifât — kişi geçişi", "Tikrâr — tekrar"], correct: 0, explanation: "وَمَا أَدْرَاكَ ile ıtnâb: konuyu tanıtıp 'ne bilirsin ki?' diye idrakin ötesinde olduğunu vurgulama. L41 (القَارِعَة), L37 (لَيْلَةُ القَدْرِ) ile aynı.", relatedRoots: ["ح-ط-م"] },
      { id: "L43-Q05", type: "irab_identify", question: "مُؤْصَدَةٌ (kapatılmış) kelimesi ne tür bir isimdir?", options: ["IV. bâb ism-i mef'ûl: أَوْصَدَ → مُوصَد", "I. bâb ism-i fâil", "Masdar", "Sıfat-ı müşebbehe"], correct: 0, explanation: "مُؤْصَدَة = IV. bâb (أَفْعَلَ) ism-i mef'ûl kalıbı (مُفْعَل). أَوْصَدَ = kapattı → مُوصَد = kapatılmış.", relatedRoots: ["أ-ص-د"] },
      { id: "L43-Q06", type: "single_choice", question: "عَدَّدَهُ (saydı durdu) hangi bâbtandır ve I. bâbdan farkı nedir?", options: ["II. bâb (فَعَّلَ): عَدَّ → عَدَّدَ — tekrar tekrar sayma (mübalağa)", "I. bâb: عَدَّ (saydı)", "IV. bâb: أَعَدَّ (hazırladı)", "III. bâb: عَادَّ"], correct: 0, explanation: "عَدَّدَ = II. bâb. عَدَّ (I: saydı) → عَدَّدَ (II: sayıp durdu, tekrar tekrar saydı). II. bâb burada تكثير (çokluk/mübalağa) ifade eder.", relatedRoots: ["ع-د-د"] },
      { id: "L43-Q07", type: "matching", question: "فُعَلَة kalıbındaki kelimeleri anlamlarıyla eşleştirin:", pairs: [{ left: "هُمَزَة", right: "Çok çekiştiren" }, { left: "لُمَزَة", right: "Çok alay eden" }, { left: "حُطَمَة", right: "Çok kırıp geçiren" }], correct: 0, explanation: "Üçü de فُعَلَة mübalağa kalıbında: aynı yapı, paralel tehdit. هَمَزَ/لَمَزَ/حَطَمَ köklerinden.", relatedRoots: ["ه-م-ز", "ل-م-ز", "ح-ط-م"] },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DERS 44 — FÎL SURESİ (105:1-5)
  // ═══════════════════════════════════════════════════════════
  {
    id: "L44-fil",
    title: "Fîl Suresi (1-5)",
    titleAr: "سُورَةُ الفِيل",
    stage: 2,
    level: 5,
    surah: 105,
    description: "Fil Vak'ası. أَلَمْ تَرَ istifhâm-ı inkârî, أَبَابِيل cem kırık, كَعَصْفٍ مَّأْكُول teşbîh + ism-i mef'ûl. 5 kısa ayet, güçlü anlatım.",
    verses: [
      {
        surah: 105, ayah: 1,
        arabic: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَـٰبِ ٱلْفِيلِ",
        translation: "Görmedin mi Rabbin fil sahiplerine ne yaptı?",
        words: [
          { arabic: "أَلَمْ", transliteration: "elem", root: null, pos: "harf", meaning_tr: "…medi mi?", irab_short: "istifhâm + nefi" },
          { arabic: "تَرَ", transliteration: "tera", root: "ر-أ-ي", pos: "fil", meaning_tr: "görmedin (mi)?", irab_short: "muzâri meczûm (لَمْ ile)" },
          { arabic: "كَيْفَ", transliteration: "keyfe", root: null, pos: "harf", meaning_tr: "nasıl", irab_short: "istifhâm, hâl" },
          { arabic: "فَعَلَ", transliteration: "fe'ale", root: "ف-ع-ل", pos: "fil", meaning_tr: "yaptı", irab_short: "mâzî, I. bâb" },
          { arabic: "رَبُّكَ", transliteration: "rabbuke", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbin", irab_short: "fâil, merfû + kâf zamîr" },
          { arabic: "بِأَصْحَـٰبِ", transliteration: "bi-ashâbi", root: "ص-ح-ب", pos: "ism", meaning_tr: "sahiplerine", irab_short: "câr-mecrûr, أَفْعَال cem" },
          { arabic: "ٱلْفِيلِ", transliteration: "el-fîli", root: "ف-ي-ل", pos: "ism", meaning_tr: "filin", irab_short: "muzâfun ileyh, mecrûr" },
        ],
      },
      {
        surah: 105, ayah: 2,
        arabic: "أَلَمْ يَجْعَلْ كَيْدَهُمْ فِى تَضْلِيلٍ",
        translation: "Onların tuzaklarını boşa çıkarmadı mı?",
        words: [
          { arabic: "أَلَمْ", transliteration: "elem", root: null, pos: "harf", meaning_tr: "…medi mi?", irab_short: "istifhâm + nefi" },
          { arabic: "يَجْعَلْ", transliteration: "yec'al", root: "ج-ع-ل", pos: "fil", meaning_tr: "kılmadı mı?", irab_short: "muzâri meczûm" },
          { arabic: "كَيْدَهُمْ", transliteration: "keydehum", root: "ك-ي-د", pos: "ism", meaning_tr: "tuzaklarını", irab_short: "mef'ûlun bih, mansûb" },
          { arabic: "فِى", transliteration: "fî", root: null, pos: "harf", meaning_tr: "içinde", irab_short: "harf-i cer" },
          { arabic: "تَضْلِيلٍ", transliteration: "tadlîlin", root: "ض-ل-ل", pos: "ism", meaning_tr: "sapıklık/boşa çıkarma", irab_short: "mecrûr, II. bâb masdarı (تَفْعِيل)" },
        ],
      },
      {
        surah: 105, ayah: 3,
        arabic: "وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ",
        translation: "Üzerlerine sürü sürü kuşlar gönderdi.",
        words: [
          { arabic: "وَأَرْسَلَ", transliteration: "ve-ersele", root: "ر-س-ل", pos: "fil", meaning_tr: "gönderdi", irab_short: "mâzî, IV. bâb (أَفْعَلَ)" },
          { arabic: "عَلَيْهِمْ", transliteration: "aleyhim", root: null, pos: "harf", meaning_tr: "onların üzerine", irab_short: "câr-mecrûr" },
          { arabic: "طَيْرًا", transliteration: "tayren", root: "ط-ي-ر", pos: "ism", meaning_tr: "kuşlar", irab_short: "mef'ûlun bih, mansûb" },
          { arabic: "أَبَابِيلَ", transliteration: "ebâbîle", root: null, pos: "ism", meaning_tr: "sürü sürü / gruplar halinde", irab_short: "sıfat, mansûb; cem kırık (tekili tartışmalı)" },
        ],
      },
      {
        surah: 105, ayah: 4,
        arabic: "تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ",
        translation: "Onlara pişkin çamurdan taşlar atıyordu.",
        words: [
          { arabic: "تَرْمِيهِم", transliteration: "termîhim", root: "ر-م-ي", pos: "fil", meaning_tr: "onlara atıyordu", irab_short: "muzâri, I. bâb + hum zamîr" },
          { arabic: "بِحِجَارَةٍ", transliteration: "bi-hicâretin", root: "ح-ج-ر", pos: "ism", meaning_tr: "taşlarla", irab_short: "câr-mecrûr, cem kırık (فِعَالَة)" },
          { arabic: "مِّن", transliteration: "min", root: null, pos: "harf", meaning_tr: "…den (yapılmış)", irab_short: "harf-i cer, beyâniye" },
          { arabic: "سِجِّيلٍ", transliteration: "siccîlin", root: "س-ج-ل", pos: "ism", meaning_tr: "pişkin çamur", irab_short: "mecrûr" },
        ],
      },
      {
        surah: 105, ayah: 5,
        arabic: "فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ",
        translation: "Böylece onları yenilmiş ekin yaprağı gibi kıldı.",
        words: [
          { arabic: "فَجَعَلَهُمْ", transliteration: "fe-ce'alehum", root: "ج-ع-ل", pos: "fil", meaning_tr: "onları kıldı", irab_short: "mâzî + hum zamîr" },
          { arabic: "كَعَصْفٍ", transliteration: "ke-asfin", root: "ع-ص-ف", pos: "ism", meaning_tr: "ekin yaprağı gibi", irab_short: "câr-mecrûr, كَ teşbîh" },
          { arabic: "مَّأْكُولٍ", transliteration: "me'kûlin", root: "أ-ك-ل", pos: "ism", meaning_tr: "yenilmiş", irab_short: "sıfat, mecrûr; I. bâb ism-i mef'ûl (مَفْعُول)" },
        ],
      },
    ],
    grammarNotes: [
      { title: "أَلَمْ تَرَ: İstifhâm-ı İnkârî + Nefi", explanation: "أَلَمْ تَرَ: 'Görmedin mi?' Soru değil, kesinleştirme: 'Elbette gördün!' لَمْ muzâriyi meczûm yapar: تَرَى → تَرَ (yâ düştü). L20'deki أَلَمْ نَشْرَحْ ile aynı yapı.", rule: "أَلَمْ + muzâri = istifhâm-ı inkârî\nAnlam: elbette … yaptı!\nMuzâri meczûm: son harf düşer (تَرَى → تَرَ)", examples: ["أَلَمْ تَرَ — elbette gördün (105:1)", "أَلَمْ نَشْرَحْ — elbette açtık (94:1)", "أَلَمْ يَجِدْكَ — elbette buldu (93:6)"] },
      { title: "أَبَابِيل: Tekili Tartışmalı Cem Kırık", explanation: "أَبَابِيل: sürü sürü, gruplar halinde. Tekili hakkında ihtilaf var: إِبَّالَة, إِبَّوْل veya tekili olmayıp doğrudan çoğul olduğu söylenmiştir. Nadir cem kalıplarından.", rule: "أَبَابِيل = sürü sürü kuşlar\nTekili tartışmalı (إِبَّالَة?)\nKur'an'da yalnız 1 kez geçer (hapax)", examples: ["أَبَابِيل — sürü sürü (105:3)", "حِجَارَة — taşlar (حَجَر'in cemi)", "أَصْحَاب — sahipler (صَاحِب'in أَفْعَال cemi)"] },
      { title: "كَعَصْفٍ مَّأْكُولٍ: Teşbîh", explanation: "كَ harf-i cer teşbîh aracıdır: 'gibi.' عَصْف مَأْكُول = böceklerin yediği ekin yaprağı → delik deşik, içi boş. مَأْكُول: I. bâb ism-i mef'ûl (مَفْعُول). Güçlü imaj: yenilmiş saman gibi.", rule: "كَ + ism = teşbîh (benzetme)\nمَفْعُول = I. bâb ism-i mef'ûl\nأَكَلَ → مَأْكُول = yenilmiş", examples: ["كَعَصْفٍ — ekin yaprağı gibi", "مَأْكُول — yenilmiş (أَكَلَ)", "مَفْعُول kalıbı: مَكْتُوب، مَفْتُوح، مَعْلُوم"] },
    ],
    exercises: [
      { id: "L44-Q01", type: "balagha_identify", question: "أَلَمْ تَرَ (105:1) hangi belâgat sanatıdır?", options: ["İstifhâm-ı inkârî — soru formatında kesinleştirme", "Iltifât — kişi geçişi", "Tikrâr — tekrar", "İsti'âre — metafor"], correct: 0, explanation: "أَلَمْ تَرَ: soru değil, kesinleştirme. 'Elbette gördün!' İstifhâm-ı inkârî. L20 (أَلَمْ نَشْرَحْ), L19 (أَلَمْ يَجِدْكَ) ile aynı.", relatedRoots: ["ر-أ-ي"] },
      { id: "L44-Q02", type: "bab_identify", question: "أَرْسَلَ (gönderdi) hangi bâbtandır?", options: ["IV. bâb (أَفْعَلَ): رَسَلَ → أَرْسَلَ", "I. bâb: رَسَلَ", "II. bâb: رَسَّلَ", "X. bâb: اِسْتَرْسَلَ"], correct: 0, explanation: "أَرْسَلَ = IV. bâb. رَسَلَ → أَرْسَلَ (gönderdi). رَسُول (ism-i fâil benzeri): gönderilen kişi = elçi.", relatedRoots: ["ر-س-ل"] },
      { id: "L44-Q03", type: "single_choice", question: "كَعَصْفٍ مَّأْكُولٍ'deki كَ ne işlev görür?", options: ["Teşbîh harfi: 'gibi' — onları yenilmiş ekin yaprağına benzetti", "Harf-i cer: 'için'", "Tâ'lîl: 'sebebiyle'", "Kasem harfi"], correct: 0, explanation: "كَ = teşbîh (benzetme) harfi. Müşebbeh: onlar (fil ordusu), müşebbehun bih: yenilmiş ekin yaprağı. Güçlü görsel imaj.", relatedRoots: ["ع-ص-ف", "أ-ك-ل"] },
      { id: "L44-Q04", type: "wazn_match", question: "مَأْكُول (yenilmiş) hangi sarf kalıbındadır?", options: ["مَفْعُول — I. bâb ism-i mef'ûl", "فَاعِل — ism-i fâil", "فَعِيل — sıfat-ı müşebbehe", "مُفْعَل — IV. bâb ism-i mef'ûl"], correct: 0, explanation: "مَفْعُول: I. bâb ism-i mef'ûl. أَكَلَ (yedi) → مَأْكُول (yenilmiş). Hemzeli kök: أ-ك-ل.", relatedRoots: ["أ-ك-ل"] },
      { id: "L44-Q05", type: "single_choice", question: "تَضْلِيل (boşa çıkarma) hangi bâb masdarıdır?", options: ["II. bâb masdarı (تَفْعِيل): ضَلَّلَ → تَضْلِيل", "I. bâb masdarı", "IV. bâb masdarı (إِفْعَال)", "VII. bâb masdarı"], correct: 0, explanation: "تَفْعِيل = II. bâb masdarı. ضَلَّ (saptı, I) → ضَلَّلَ (saptırdı/boşa çıkardı, II) → تَضْلِيل (sapıklık/boşa çıkarma).", relatedRoots: ["ض-ل-ل"] },
      { id: "L44-Q06", type: "root_extract", question: "سِجِّيل (pişkin çamur) kelimesinin kökü hangisidir?", options: ["س-ج-ل (kaydetmek/göndermek)", "س-ج-د (secde etmek)", "ج-ل-ل (büyük olmak)", "ج-ع-ل (kılmak)"], correct: 0, explanation: "سِجِّيل: Köken tartışmalı — Arapça س-ج-ل veya Farsça سَنگ + گِل (taş + çamur) olabilir. Kur'an'da pişkin çamur taşı anlamında.", relatedRoots: ["س-ج-ل"] },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DERS 45 — KUREYŞ SURESİ (106:1-4)
  // ═══════════════════════════════════════════════════════════
  {
    id: "L45-qurays",
    title: "Kureyş Suresi (1-4)",
    titleAr: "سُورَةُ قُرَيْش",
    stage: 2,
    level: 5,
    surah: 106,
    description: "Kureyş kabilesinin imtiyazları. لِإِيلَافِ IV. bâb masdar + lâm-ı ta'lîl, فَلْيَعْبُدُوا emr-i gâib, أَطْعَمَ/آمَنَ IV. bâb çifti, الشِّتَاء/الصَّيْف tıbâk.",
    verses: [
      {
        surah: 106, ayah: 1,
        arabic: "لِإِيلَـٰفِ قُرَيْشٍ",
        translation: "Kureyş'in (yolculuklara) alışması için,",
        words: [
          { arabic: "لِإِيلَـٰفِ", transliteration: "li-îlâfi", root: "أ-ل-ف", pos: "ism", meaning_tr: "alışması/ülfeti için", irab_short: "câr-mecrûr; لِ ta'lîl + IV. bâb masdar (إِيلَاف)" },
          { arabic: "قُرَيْشٍ", transliteration: "Kureyşin", root: null, pos: "ism", meaning_tr: "Kureyş (kabilesi)", irab_short: "muzâfun ileyh, mecrûr" },
        ],
      },
      {
        surah: 106, ayah: 2,
        arabic: "إِۦلَـٰفِهِمْ رِحْلَةَ ٱلشِّتَآءِ وَٱلصَّيْفِ",
        translation: "Onların kış ve yaz yolculuklarına (alışması için),",
        words: [
          { arabic: "إِۦلَـٰفِهِمْ", transliteration: "îlâfihim", root: "أ-ل-ف", pos: "ism", meaning_tr: "onların ülfeti/alışması", irab_short: "bedel, mecrûr + hum zamîr" },
          { arabic: "رِحْلَةَ", transliteration: "rihlete", root: "ر-ح-ل", pos: "ism", meaning_tr: "yolculuk", irab_short: "mef'ûlun bih (li-îlâf'ın), mansûb" },
          { arabic: "ٱلشِّتَآءِ", transliteration: "eş-şitâ'i", root: "ش-ت-و", pos: "ism", meaning_tr: "kışın", irab_short: "muzâfun ileyh, mecrûr" },
          { arabic: "وَٱلصَّيْفِ", transliteration: "ve's-sayfi", root: "ص-ي-ف", pos: "ism", meaning_tr: "ve yazın", irab_short: "atıf, mecrûr" },
        ],
      },
      {
        surah: 106, ayah: 3,
        arabic: "فَلْيَعْبُدُوا۟ رَبَّ هَـٰذَا ٱلْبَيْتِ",
        translation: "Bu Ev'in (Kâbe'nin) Rabbine kulluk etsinler.",
        words: [
          { arabic: "فَلْيَعْبُدُوا۟", transliteration: "fel-ya'budû", root: "ع-ب-د", pos: "fil", meaning_tr: "kulluk etsinler", irab_short: "emr-i gâib, مُضارع مجزوم (لِ emr + لَمْ cezm)" },
          { arabic: "رَبَّ", transliteration: "rabbe", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbi(ne)", irab_short: "mef'ûlun bih, mansûb" },
          { arabic: "هَـٰذَا", transliteration: "hâzâ", root: null, pos: "ism", meaning_tr: "bu", irab_short: "ism-i işâret, muzâfun ileyh" },
          { arabic: "ٱلْبَيْتِ", transliteration: "el-beyti", root: "ب-ي-ت", pos: "ism", meaning_tr: "Ev'in (Kâbe)", irab_short: "bedel/atf-ı beyân, mecrûr" },
        ],
      },
      {
        surah: 106, ayah: 4,
        arabic: "ٱلَّذِىٓ أَطْعَمَهُم مِّن جُوعٍ وَءَامَنَهُم مِّنْ خَوْفٍ",
        translation: "Ki O onları açlıktan doyurmuş ve korkudan emin kılmıştır.",
        words: [
          { arabic: "ٱلَّذِىٓ", transliteration: "ellezî", root: null, pos: "ism", meaning_tr: "o ki", irab_short: "ism-i mevsûl, sıfat" },
          { arabic: "أَطْعَمَهُم", transliteration: "at'amehum", root: "ط-ع-م", pos: "fil", meaning_tr: "onları doyurdu", irab_short: "mâzî, IV. bâb (أَفْعَلَ)" },
          { arabic: "مِّن", transliteration: "min", root: null, pos: "harf", meaning_tr: "…den (kurtararak)", irab_short: "harf-i cer, sebebiye" },
          { arabic: "جُوعٍ", transliteration: "cû'in", root: "ج-و-ع", pos: "ism", meaning_tr: "açlık", irab_short: "mecrûr" },
          { arabic: "وَءَامَنَهُم", transliteration: "ve-âmenehum", root: "أ-م-ن", pos: "fil", meaning_tr: "onları emin kıldı", irab_short: "mâzî, IV. bâb (أَفْعَلَ)" },
          { arabic: "مِّنْ", transliteration: "min", root: null, pos: "harf", meaning_tr: "…den (kurtararak)", irab_short: "harf-i cer, sebebiye" },
          { arabic: "خَوْفٍ", transliteration: "havfin", root: "خ-و-ف", pos: "ism", meaning_tr: "korku", irab_short: "mecrûr" },
        ],
      },
    ],
    grammarNotes: [
      { title: "لِإِيلَافِ: Lâm-ı Ta'lîl + IV. Bâb Masdar", explanation: "لِ = ta'lîl (sebep/gaye): 'için'. إِيلَاف = IV. bâb (إِفْعَال) masdarı, أَلِفَ (alıştı, I) → آلَفَ (alıştırdı, IV) → إِيلَاف (alıştırma). 'Kureyş'in alıştırılması için.'", rule: "لِ + masdar = ta'lîl (gaye/sebep)\nإِيلَاف = IV. bâb masdarı (إِفْعَال)\nأَلِفَ (I: alıştı) → آلَفَ (IV: alıştırdı)", examples: ["لِإِيلَافِ — alıştırması için (106:1)", "لِتَعَارَفُوا — tanışmanız için (49:13)", "لِنُرِيَهُ — gösterelim diye (17:1)"] },
      { title: "Emr-i Gâib: فَلْيَعْبُدُوا", explanation: "Lâm-ı emr (لِ / لْ) + muzâri = 3. kişiye emir (gâib). فَ + لْ + يَعْبُدُوا = 'kulluk etsinler!' L01'den beri يَعْبُدُ fiilini biliyoruz; burada emr-i gâib yapısını görüyoruz.", rule: "لِ (لْ) + muzâri = emr-i gâib\nFâ-i ta'kîbiye: فَ → sonuç/sebep bağlantısı\nMuzâri meczûm: نون düşer (يَعْبُدُونَ → يَعْبُدُوا)", examples: ["فَلْيَعْبُدُوا — kulluk etsinler", "لِيَقْضِ — yerine getirsin", "لِنُسَبِّحَكَ — seni tesbih edelim (20:33)"] },
      { title: "IV. Bâb İkili: أَطْعَمَ / آمَنَ", explanation: "İki IV. bâb fiili paralel yapıda: أَطْعَمَ (doyurdu, ط-ع-م) + آمَنَ (emin kıldı, أ-م-ن). مِنْ ile sebep: 'açlıkTAN doyurdu, korkuDAN emin kıldı.' Simetrik yapı: maddi + manevi güvence.", rule: "أَطْعَمَ = IV. bâb (طَعِمَ → أَطْعَمَ: yedirdi)\nآمَنَ = IV. bâb (أَمِنَ → آمَنَ: emin kıldı)\nParalel: مِنْ جُوعٍ ↔ مِنْ خَوْفٍ", examples: ["أَطْعَمَهُم مِن جُوعٍ — açlıktan doyurdu", "آمَنَهُم مِن خَوْفٍ — korkudan emin kıldı", "IV. bâb: lâzım → müteaddî (geçişli yapma)"] },
    ],
    exercises: [
      { id: "L45-Q01", type: "bab_identify", question: "إِيلَاف hangi bâb masdarıdır?", options: ["IV. bâb (إِفْعَال): أَلِفَ → آلَفَ → إِيلَاف", "I. bâb: أُلْفَة", "II. bâb: تَأْلِيف", "III. bâb: مُؤَالَفَة"], correct: 0, explanation: "إِيلَاف = IV. bâb (إِفْعَال) masdarı. أَلِفَ (alıştı) → آلَفَ (alıştırdı/kaynaştırdı). II. bâb: أَلَّفَ → تَأْلِيف (telif) farklı.", relatedRoots: ["أ-ل-ف"] },
      { id: "L45-Q02", type: "single_choice", question: "فَلْيَعْبُدُوا yapısı nedir ve nasıl çözülür?", options: ["فَ + لْ emr + يَعْبُدُوا (muzâri meczûm) = 'kulluk etsinler!'", "فَ + لَ nefi + يَعْبُدُوا", "فَ + لَ kasem + يَعْبُدُوا", "فَ + لَنْ nefi + يَعْبُدُوا"], correct: 0, explanation: "Emr-i gâib: لْ (lâm-ı emr) + muzâri = 3. kişiye emir. فَ bağlaç: sonuç. يَعْبُدُونَ → يَعْبُدُوا (نون düştü, cezm).", relatedRoots: ["ع-ب-د"] },
      { id: "L45-Q03", type: "balagha_identify", question: "جُوعٍ ↔ خَوْفٍ / أَطْعَمَ ↔ آمَنَ yapısında hangi belâgat sanatı vardır?", options: ["Mukâbele — simetrik karşıtlık: maddi nimet ↔ manevi güvence", "Tikrâr — tekrar", "İsti'âre — metafor", "Hazf — düşürme"], correct: 0, explanation: "Mukâbele: açlık↔doyurma (maddi) ‖ korku↔güvence (manevi). İki boyutlu paralel yapı: her biri IV. bâb + مِنْ.", relatedRoots: ["ط-ع-م", "أ-م-ن"] },
      { id: "L45-Q04", type: "bab_identify", question: "أَطْعَمَ (doyurdu) hangi bâbtandır?", options: ["IV. bâb (أَفْعَلَ): طَعِمَ → أَطْعَمَ", "I. bâb: طَعِمَ (yedi/tattı)", "II. bâb: طَعَّمَ (aşıladı)", "V. bâb: تَطَعَّمَ"], correct: 0, explanation: "أَطْعَمَ = IV. bâb. طَعِمَ (yedi, lâzım) → أَطْعَمَ (yedirdi/doyurdu, müteaddî). IV. bâb klasik geçişli yapma.", relatedRoots: ["ط-ع-م"] },
      { id: "L45-Q05", type: "single_choice", question: "لِ (106:1) harfi burada hangi anlama gelir?", options: ["Ta'lîl (gaye/sebep): '…için, …sebebiyle'", "Mülkiyet: '…e ait'", "İstihkak: hakkıdır", "Teb'îziye"], correct: 0, explanation: "لِ ta'lîliye: sebep/gaye bildirir. 'Kureyş'in alıştırılması İÇİN = (kulluk etsinler).' Sure'nin مِنْ + لِ yapısı sebep-sonuç ilişkisi kurar.", relatedRoots: ["أ-ل-ف"] },
      { id: "L45-Q06", type: "single_choice", question: "الشِّتَاء (kış) ile الصَّيْف (yaz) arasındaki ilişki hangi belâgat sanatıdır?", options: ["Tıbâk (zıtlık): kış ↔ yaz mevsim karşıtlığı", "Tikrâr", "İltifât", "Hazf"], correct: 0, explanation: "Tıbâk: zıt anlamlı kelimeler. Kış (الشِّتَاء = güneye yolculuk, Yemen) ↔ yaz (الصَّيْف = kuzeye yolculuk, Şam). L18 (أَحْسَن↔أَسْفَل), L20 (وَضَعْنَا↔رَفَعْنَا) ile aynı sanat.", relatedRoots: ["ش-ت-و", "ص-ي-ف"] },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DERS 46 — MÂ'ÛN SURESİ (107:1-7)
  // ═══════════════════════════════════════════════════════════
  {
    id: "L46-maun",
    title: "Mâ'ûn Suresi (1-7)",
    titleAr: "سُورَةُ المَاعُون",
    stage: 2,
    level: 5,
    surah: 107,
    description: "Din'i yalanlayanın portresi. أَرَأَيْتَ istifhâm-ı ta'accübî, يَدُعُّ şeddeli fiil, المُصَلِّينَ II. bâb ism-i fâil, يُرَاؤُونَ III. bâb (riyâ), مُنَافِقîn davranışları.",
    verses: [
      {
        surah: 107, ayah: 1,
        arabic: "أَرَءَيْتَ ٱلَّذِى يُكَذِّبُ بِٱلدِّينِ",
        translation: "Gördün mü dîni yalanlayanı?",
        words: [
          { arabic: "أَرَءَيْتَ", transliteration: "ere'eyte", root: "ر-أ-ي", pos: "fil", meaning_tr: "gördün mü?", irab_short: "mâzî, istifhâm + II. şahıs" },
          { arabic: "ٱلَّذِى", transliteration: "ellezî", root: null, pos: "ism", meaning_tr: "o ki (…-yı)", irab_short: "ism-i mevsûl, mef'ûlun bih" },
          { arabic: "يُكَذِّبُ", transliteration: "yukezzib", root: "ك-ذ-ب", pos: "fil", meaning_tr: "yalanlar", irab_short: "muzâri, II. bâb (tef'îl)" },
          { arabic: "بِٱلدِّينِ", transliteration: "bi'd-dîni", root: "د-ي-ن", pos: "ism", meaning_tr: "dîni/hesap gününü", irab_short: "câr-mecrûr" },
        ],
      },
      {
        surah: 107, ayah: 2,
        arabic: "فَذَٰلِكَ ٱلَّذِى يَدُعُّ ٱلْيَتِيمَ",
        translation: "İşte o, yetimi iten (horlayan) kişidir.",
        words: [
          { arabic: "فَذَٰلِكَ", transliteration: "fe-zâlike", root: null, pos: "ism", meaning_tr: "işte o", irab_short: "فَ ta'kîb + ism-i işâret, mübtedâ" },
          { arabic: "ٱلَّذِى", transliteration: "ellezî", root: null, pos: "ism", meaning_tr: "o ki", irab_short: "ism-i mevsûl, haber" },
          { arabic: "يَدُعُّ", transliteration: "yedu''u", root: "د-ع-ع", pos: "fil", meaning_tr: "iter/horlar", irab_short: "muzâri, I. bâb (şeddeli/mudâaf)" },
          { arabic: "ٱلْيَتِيمَ", transliteration: "el-yetîme", root: "ي-ت-م", pos: "ism", meaning_tr: "yetimi", irab_short: "mef'ûlun bih, mansûb" },
        ],
      },
      {
        surah: 107, ayah: 3,
        arabic: "وَلَا يَحُضُّ عَلَىٰ طَعَامِ ٱلْمِسْكِينِ",
        translation: "Ve yoksulu doyurmaya teşvik etmez.",
        words: [
          { arabic: "وَلَا", transliteration: "ve-lâ", root: null, pos: "harf", meaning_tr: "ve … değil", irab_short: "atıf + nefi" },
          { arabic: "يَحُضُّ", transliteration: "yahuddu", root: "ح-ض-ض", pos: "fil", meaning_tr: "teşvik eder", irab_short: "muzâri, I. bâb (mudâaf)" },
          { arabic: "عَلَىٰ", transliteration: "alâ", root: null, pos: "harf", meaning_tr: "üzerine/konusunda", irab_short: "harf-i cer" },
          { arabic: "طَعَامِ", transliteration: "ta'âmi", root: "ط-ع-م", pos: "ism", meaning_tr: "yedirmek/yemek", irab_short: "mecrûr, muzâf" },
          { arabic: "ٱلْمِسْكِينِ", transliteration: "el-miskîni", root: "س-ك-ن", pos: "ism", meaning_tr: "yoksulun", irab_short: "muzâfun ileyh, mecrûr; مِفْعِيل kalıbı" },
        ],
      },
      {
        surah: 107, ayah: 4,
        arabic: "فَوَيْلٌ لِّلْمُصَلِّينَ",
        translation: "Yazıklar olsun o namaz kılanlara ki,",
        words: [
          { arabic: "فَوَيْلٌ", transliteration: "fe-veylun", root: "و-ي-ل", pos: "ism", meaning_tr: "yazıklar olsun", irab_short: "mübtedâ, merfû" },
          { arabic: "لِّلْمُصَلِّينَ", transliteration: "lil-musallîne", root: "ص-ل-و", pos: "ism", meaning_tr: "namaz kılanlara", irab_short: "câr-mecrûr, haber; II. bâb ism-i fâil (مُفَعِّل)" },
        ],
      },
      {
        surah: 107, ayah: 5,
        arabic: "ٱلَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ",
        translation: "Ki onlar namazlarından gafildirler.",
        words: [
          { arabic: "ٱلَّذِينَ", transliteration: "ellezîne", root: null, pos: "ism", meaning_tr: "onlar ki", irab_short: "ism-i mevsûl, sıfat" },
          { arabic: "هُمْ", transliteration: "hum", root: null, pos: "ism", meaning_tr: "onlar", irab_short: "zamîr, mübtedâ" },
          { arabic: "عَن", transliteration: "an", root: null, pos: "harf", meaning_tr: "…den (gafil)", irab_short: "harf-i cer" },
          { arabic: "صَلَاتِهِمْ", transliteration: "salâtihim", root: "ص-ل-و", pos: "ism", meaning_tr: "namazlarından", irab_short: "mecrûr, muzâf + hum zamîr" },
          { arabic: "سَاهُونَ", transliteration: "sâhûne", root: "س-ه-و", pos: "ism", meaning_tr: "gafil/dalgın", irab_short: "haber, merfû; I. bâb ism-i fâil (فَاعِل)" },
        ],
      },
      {
        surah: 107, ayah: 6,
        arabic: "ٱلَّذِينَ هُمْ يُرَآءُونَ",
        translation: "Ki onlar gösteriş yaparlar.",
        words: [
          { arabic: "ٱلَّذِينَ", transliteration: "ellezîne", root: null, pos: "ism", meaning_tr: "onlar ki", irab_short: "ism-i mevsûl" },
          { arabic: "هُمْ", transliteration: "hum", root: null, pos: "ism", meaning_tr: "onlar", irab_short: "zamîr, mübtedâ" },
          { arabic: "يُرَآءُونَ", transliteration: "yurâûne", root: "ر-أ-ي", pos: "fil", meaning_tr: "gösteriş yaparlar", irab_short: "muzâri, III. bâb (مُفَاعَلَة)" },
        ],
      },
      {
        surah: 107, ayah: 7,
        arabic: "وَيَمْنَعُونَ ٱلْمَاعُونَ",
        translation: "Ve (en basit) yardımı engellerler.",
        words: [
          { arabic: "وَيَمْنَعُونَ", transliteration: "ve-yemne'ûne", root: "م-ن-ع", pos: "fil", meaning_tr: "engellerler", irab_short: "muzâri, I. bâb" },
          { arabic: "ٱلْمَاعُونَ", transliteration: "el-mâ'ûne", root: "م-ع-ن", pos: "ism", meaning_tr: "basit yardım/eşya", irab_short: "mef'ûlun bih, mansûb; فَاعُول kalıbı" },
        ],
      },
    ],
    grammarNotes: [
      { title: "أَرَأَيْتَ: İstifhâm-ı Ta'accübî", explanation: "أَرَأَيْتَ: 'Gördün mü?' = 'Ne dersin?' formatında, ta'accüb (hayret/dikkat çekme) aracı. Hakiki soru değil; dinleyicinin dikkatini çekme. Fîl'deki أَلَمْ تَرَ'den farklı nüans: orada inkâr, burada ta'accüb.", rule: "أَرَأَيْتَ + ism-i mevsûl = 'şuna bak!'\nHakiki soru değil: dikkat çekme aracı\nأَلَمْ تَرَ = inkâr; أَرَأَيْتَ = ta'accüb", examples: ["أَرَأَيْتَ الَّذِي يُكَذِّبُ — 107:1", "أَرَأَيْتَ إِن كَذَّبَ — 96:13", "أَرَأَيْتَ الَّذِي يَنْهَى — 96:9"] },
      { title: "Mudâaf (Şeddeli Kök) Fiiller: يَدُعُّ / يَحُضُّ", explanation: "يَدُعُّ (د-ع-ع): ikinci ve üçüncü kök harfi aynı → mudâaf fiil. Şedde ile birleşir: دَعَعَ → دَعَّ → يَدُعُّ. يَحُضُّ (ح-ض-ض) aynı yapıda. I. bâb ama şeddeli.", rule: "Mudâaf: 2. ve 3. kök harf aynı\nMâzî: فَعَّ (دَعَّ), Muzâri: يَفُعُّ (يَدُعُّ)\nŞedde = iki harf birleşmiş", examples: ["يَدُعُّ — iter (د-ع-ع)", "يَحُضُّ — teşvik eder (ح-ض-ض)", "يَمُدُّ — uzatır (م-د-د)"] },
      { title: "III. Bâb: يُرَاؤُونَ (Riyâ)", explanation: "يُرَاؤُونَ: III. bâb (مُفَاعَلَة) muzâri, ر-أ-ي kökünden. رَأَى (gördü) → رَاءَى (gösteriş yaptı, karşılıklı gösterme). III. bâb karşılıklılık/yönelme ifade eder. رِيَاء (masdar) = gösteriş.", rule: "III. bâb: فَاعَلَ — karşılıklı eylem\nرَاءَى = insanlara gösterdi (riyâ)\nيُرَاؤُونَ = gösteriş yapıyorlar (çoğul)", examples: ["يُرَاؤُونَ — gösteriş yapıyorlar (107:6)", "يُقَاتِلُونَ — savaşıyorlar (ق-ت-ل)", "يُجَاهِدُونَ — cihat ediyorlar (ج-ه-د)"] },
      { title: "II. Bâb İsm-i Fâil: المُصَلِّينَ", explanation: "المُصَلِّينَ: II. bâb (فَعَّلَ) ism-i fâili. صَلَّى → مُصَلٍّ (namaz kılan). Çoğul: مُصَلُّونَ / مُصَلِّينَ. II. bâb ism-i fâil kalıbı: مُفَعِّل.", rule: "مُفَعِّل = II. bâb ism-i fâil\nصَلَّى (II: namaz kıldı) → مُصَلٍّ\nÇoğul mansûb: مُصَلِّينَ", examples: ["المُصَلِّين — namaz kılanlar (107:4)", "المُكَذِّب — yalanlayan (ك-ذ-ب, II)", "المُعَلِّم — öğretmen (ع-ل-م, II)"] },
    ],
    exercises: [
      { id: "L46-Q01", type: "bab_identify", question: "يُكَذِّبُ (yalanlar) hangi bâbtandır?", options: ["II. bâb (فَعَّلَ): كَذَبَ → كَذَّبَ", "I. bâb: كَذَبَ (yalan söyledi)", "IV. bâb: أَكْذَبَ", "V. bâb: تَكَذَّبَ"], correct: 0, explanation: "كَذَّبَ = II. bâb. كَذَبَ (I: yalan söyledi) → كَذَّبَ (II: yalanladı/reddetti). II. bâb burada تعدية (geçişli yapma).", relatedRoots: ["ك-ذ-ب"] },
      { id: "L46-Q02", type: "single_choice", question: "يَدُعُّ fiilinin kökü nedir ve neden şeddeli?", options: ["د-ع-ع — mudâaf kök: 2. ve 3. harf aynı → birleşip şedde olur", "د-ع-و — nâkıs kök", "د-و-ع — ecvef kök", "ع-د-د — sayma kökü"], correct: 0, explanation: "د-ع-ع: mudâaf fiil. İkinci ve üçüncü harf aynı olduğunda şedde ile birleşir: دَعَعَ → دَعَّ → يَدُعُّ (iter, horlar).", relatedRoots: ["د-ع-ع"] },
      { id: "L46-Q03", type: "bab_identify", question: "يُرَاؤُونَ (gösteriş yaparlar) hangi bâbtandır?", options: ["III. bâb (فَاعَلَ): رَأَى → رَاءَى", "I. bâb: رَأَى", "IV. bâb: أَرَى", "VI. bâb: تَرَاءَى"], correct: 0, explanation: "يُرَاؤُونَ = III. bâb. رَأَى (gördü) → رَاءَى (gösteriş yaptı, karşılıklı gösterme). III. bâb مُشَارَكَة (karşılıklılık) ifade eder.", relatedRoots: ["ر-أ-ي"] },
      { id: "L46-Q04", type: "wazn_match", question: "المُصَلِّينَ kelimesi hangi kalıbın çoğuludur?", options: ["مُفَعِّل — II. bâb ism-i fâil: مُصَلٍّ → المُصَلِّينَ", "فَاعِل — I. bâb ism-i fâil", "مُفَاعِل — III. bâb ism-i fâil", "مُفْعِل — IV. bâb ism-i fâil"], correct: 0, explanation: "مُفَعِّل = II. bâb ism-i fâil. صَلَّى → مُصَلٍّ (namaz kılan). Cem mansûb: مُصَلِّينَ. L43'teki المُوقَدَة ile kıyasla: o ism-i mef'ûl (مُفْعَل).", relatedRoots: ["ص-ل-و"] },
      { id: "L46-Q05", type: "balagha_identify", question: "أَرَأَيْتَ الَّذِي يُكَذِّبُ (107:1) hangi belâgat sanatıdır?", options: ["İstifhâm-ı ta'accübî — hayret/dikkat çekme sorusu", "İstifhâm-ı inkârî — kesinleştirme", "Iltifât", "Itnâb"], correct: 0, explanation: "أَرَأَيْتَ: ta'accüb sorusu. 'Şuna bak!' anlamında dikkat çekme. أَلَمْ تَرَ (L44 Fîl) inkârî iken, أَرَأَيْتَ ta'accübîdir.", relatedRoots: ["ر-أ-ي"] },
      { id: "L46-Q06", type: "single_choice", question: "Suredeki dört olumsuz davranış nedir?", options: ["Dîni yalanlama → yetimi itme → yoksulu doyurmama → namazda gaflet", "Yalnızca namaz kılmamak", "Yalnızca yetimi ezmek", "Sadece gösteriş"], correct: 0, explanation: "Tedricî yapı: (1) يُكَذِّبُ بِالدِّينِ, (2) يَدُعُّ اليَتِيمَ, (3) لَا يَحُضُّ عَلَى طَعَامِ المِسْكِينِ, (4) عَن صَلَاتِهِمْ سَاهُونَ + يُرَاؤُونَ + يَمْنَعُونَ المَاعُونَ. İnanç → davranış → ibadet → toplumsal ahlak.", relatedRoots: ["ك-ذ-ب", "ي-ت-م", "ص-ل-و"] },
      { id: "L46-Q07", type: "matching", question: "Surelerdeki bâb-fiil eşleştirmelerini yapın:", pairs: [{ left: "يُكَذِّبُ", right: "II. bâb (yalanlar)" }, { left: "يُرَاؤُونَ", right: "III. bâb (gösteriş)" }, { left: "يَدُعُّ", right: "I. bâb mudâaf (iter)" }, { left: "يَمْنَعُ", right: "I. bâb (engeller)" }], correct: 0, explanation: "Her fiil farklı bâbta: II (كَذَّبَ yalanladı), III (رَاءَى gösterdi), I mudâaf (دَعَّ itti), I sağlam (مَنَعَ engelledi).", relatedRoots: ["ك-ذ-ب", "ر-أ-ي", "د-ع-ع", "م-ن-ع"] },
    ],
  },
];

export default level5bLessons;
