// ═══════════════════════════════════════════════════════════
// SEVİYE 5c — L47 (Kevser), L48 (Kâfirûn), L49 (Nasr), L50 (Tebbet)
// ═══════════════════════════════════════════════════════════

const level5cLessons = [
  // ═══════════════════════════════════════════════════════════
  // DERS 47 — KEVSER SURESİ (108:1-3)
  // ═══════════════════════════════════════════════════════════
  {
    id: "L47-kevser",
    title: "Kevser Suresi (1-3)",
    titleAr: "سُورَةُ الكَوْثَر",
    stage: 2,
    level: 5,
    surah: 108,
    description: "Kur'an'ın en kısa suresi. إِنَّا أَعْطَيْنَاكَ IV. bâb (ihsân), فَصَلِّ emr, أَبْتَر sıfat (فَعْلَل). İltifât (biz→sen) ve icâz (3 ayete sığdırılmış müjde-emir-teselli).",
    verses: [
      {
        surah: 108, ayah: 1,
        arabic: "إِنَّآ أَعْطَيْنَـٰكَ ٱلْكَوْثَرَ",
        translation: "Kuşkusuz biz sana Kevser'i verdik.",
        words: [
          { arabic: "إِنَّآ", transliteration: "innâ", root: null, pos: "harf", meaning_tr: "muhakkak ki biz", irab_short: "te'kîd + zamîr (نَا = biz)" },
          { arabic: "أَعْطَيْنَـٰكَ", transliteration: "a'taynâke", root: "ع-ط-ي", pos: "fil", meaning_tr: "sana verdik", irab_short: "mâzî, IV. bâb (أَفْعَلَ); نَا fâil, كَ mef'ûl 1" },
          { arabic: "ٱلْكَوْثَرَ", transliteration: "el-kevsere", root: "ك-ث-ر", pos: "ism", meaning_tr: "Kevser (çokluk, hayır)", irab_short: "mef'ûlun bih 2, mansûb; فَوْعَل kalıbı" },
        ],
      },
      {
        surah: 108, ayah: 2,
        arabic: "فَصَلِّ لِرَبِّكَ وَٱنْحَرْ",
        translation: "O halde Rabbin için namaz kıl ve kurban kes.",
        words: [
          { arabic: "فَصَلِّ", transliteration: "fe-salli", root: "ص-ل-و", pos: "fil", meaning_tr: "namaz kıl", irab_short: "emr, II. bâb (صَلَّى); فَ netice" },
          { arabic: "لِرَبِّكَ", transliteration: "li-rabbike", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbin için", irab_short: "câr-mecrûr, muzâf + zamîr" },
          { arabic: "وَٱنْحَرْ", transliteration: "ve'nhar", root: "ن-ح-ر", pos: "fil", meaning_tr: "kurban kes", irab_short: "emr, I. bâb" },
        ],
      },
      {
        surah: 108, ayah: 3,
        arabic: "إِنَّ شَانِئَكَ هُوَ ٱلْأَبْتَرُ",
        translation: "Kuşkusuz sana buğz eden, asıl soyu kesik olan odur.",
        words: [
          { arabic: "إِنَّ", transliteration: "inne", root: null, pos: "harf", meaning_tr: "muhakkak", irab_short: "harf-i te'kîd" },
          { arabic: "شَانِئَكَ", transliteration: "şâni'eke", root: "ش-ن-أ", pos: "ism", meaning_tr: "sana buğz eden", irab_short: "ism-i inne, mansûb; فَاعِل kalıbı ism-i fâil" },
          { arabic: "هُوَ", transliteration: "huve", root: null, pos: "ism", meaning_tr: "o (zamîr-i fasl)", irab_short: "zamîr-i fasl, hasr ifadesi" },
          { arabic: "ٱلْأَبْتَرُ", transliteration: "el-ebteru", root: "ب-ت-ر", pos: "ism", meaning_tr: "soyu kesik, güdük", irab_short: "haber-i inne, merfû; أَفْعَل kalıbı (sıfat)" },
        ],
      },
    ],
    grammarNotes: [
      { title: "IV. Bâb: أَعْطَى (Verdi)", explanation: "أَعْطَيْنَاكَ: IV. bâb (if'âl). Kök: ع-ط-ي (nâkıs/ecvef). عَطَا (I: yöneldi) → أَعْطَى (IV: verdi, ihsân etti). IV. bâb burada تَعْدِيَة (geçişli yapma): iki mef'ûl alır (كَ sana + الكَوْثَر Kevser'i).", rule: "أَعْطَى = IV. bâb: iki mef'ûl alan fiil\nعَطَا → أَعْطَى (geçişli yapma)\nأَعْطَيْنَاكَ = verdik + sana + onu", examples: ["أَعْطَيْنَاكَ — sana verdik (108:1)", "أَعْطَى كُلَّ شَيْءٍ خَلْقَهُ — her şeye yaratılışını verdi (20:50)", "أَنْزَلْنَاهُ — onu indirdik (97:1, IV. bâb)"] },
      { title: "Zamîr-i Fasl: هُوَ (Hasr)", explanation: "هُوَ burada zamîr-i fasl (ayırma zamiri). Mübtedâ ile haber arasına girerek hasrı (sınırlama) güçlendirir: 'soyu kesik olan SADECE odur.' Ne sıfat ne de haber; muhataba yönelik vurgu aracı.", rule: "Zamîr-i fasl = mübtedâ-haber arası vurgu\nHasr ifade eder: 'SADECE o'\nİ'rabta mahalli yok (sıfatla haber arasını ayırır)", examples: ["إِنَّ شَانِئَكَ هُوَ الأَبْتَرُ — 108:3", "هُمُ المُفْلِحُونَ — asıl onlar kurtulanlar (2:5)", "أُولَئِكَ هُمُ الخَاسِرُونَ — 2:27"] },
      { title: "أَبْتَر: أَفْعَل Sıfat Kalıbı", explanation: "الأَبْتَر: ب-ت-ر kökünden. بَتَرَ (kesti) → أَبْتَر (kuyruksuz, soyu kesik). أَفْعَل burada sıfat (tafdîl değil), renk/kusur/fiziksel özellik bildiren kalıp. أَحْمَر (kırmızı), أَعْمَى (kör) gibi.", rule: "أَفْعَل (sıfat) = renk/kusur/fiziksel durum\nأَبْتَر = soyu kesik (بَتَرَ: kesti)\nTafdîl değil; kalıcı sıfat", examples: ["الأَبْتَر — soyu kesik (108:3)", "أَحْمَر — kırmızı", "أَعْمَى — kör"] },
    ],
    exercises: [
      { id: "L47-Q01", type: "bab_identify", question: "أَعْطَيْنَاكَ (verdik sana) hangi bâbtandır?", options: ["IV. bâb (أَفْعَلَ): عَطَا → أَعْطَى", "I. bâb: عَطَا", "II. bâb: عَطَّى", "VIII. bâb: اِعْتَطَى"], correct: 0, explanation: "أَعْطَى = IV. bâb (if'âl). ع-ط-ي kökünden. I. bâb عَطَا (yöneldi) → IV. bâb أَعْطَى (verdi). İki mef'ûl alır: كَ (sana) + الكَوْثَر.", relatedRoots: ["ع-ط-ي"] },
      { id: "L47-Q02", type: "single_choice", question: "هُوَ (108:3) zamirinin buradaki görevi nedir?", options: ["Zamîr-i fasl: hasr (sınırlama) vurgusu — 'SADECE o'", "Mübtedâ: 'o adam'", "Haber: 'odur'", "Tekrar zamiri, anlamı yok"], correct: 0, explanation: "هُوَ burada zamîr-i fasl. İsm-i inne (شَانِئَكَ) ile haber (الأَبْتَر) arasında hasr vurgusu yapar: 'asıl soyu kesik olan O'dur'.", relatedRoots: [] },
      { id: "L47-Q03", type: "wazn_match", question: "الكَوْثَر kelimesinin kalıbı ve anlamı nedir?", options: ["فَوْعَل — çokluk, bol hayır (ك-ث-ر kökünden)", "فَعْلَل — rubâî kök", "مَفْعَل — ism-i mekân", "فَعُول — mübalağa"], correct: 0, explanation: "الكَوْثَر: ك-ث-ر (çokluk) kökünden فَوْعَل kalıbı. 'Çok bol' anlamında mübalağa/sıfat. كَثِير (çok) ile aynı kökten ama çok daha güçlü.", relatedRoots: ["ك-ث-ر"] },
      { id: "L47-Q04", type: "single_choice", question: "Surenin 3 ayetlik yapısında sıralama ne anlam ifade eder?", options: ["Nimet → Şükür emri → Düşmanın akıbeti (ihsân-emir-teselli)", "Emir → Nimet → Tehdit", "Tehdit → Nimet → Emir", "Sadece kronolojik sıralama"], correct: 0, explanation: "Kevser suresi mükemmel bir icâz örneği: (1) إِنَّا أَعْطَيْنَاكَ = nimet/ihsân, (2) فَصَلِّ = şükür emri, (3) إِنَّ شَانِئَكَ = düşmanı teskin. 3 ayete müjde + emir + teselli sığdırılmış.", relatedRoots: [] },
      { id: "L47-Q05", type: "balagha_identify", question: "Kevser suresindeki 'biz verdik — sen kıl' geçişi hangi sanattır?", options: ["İltifât — birinci çoğuldan ikinci tekile geçiş", "Takdîm-te'hîr", "Tıbâk", "Teşbîh"], correct: 0, explanation: "إِنَّا (biz, 1. çoğul) → فَصَلِّ (sen kıl, 2. tekil) → شَانِئَكَ (senin düşmanın). Allah'ın azametinden (çoğul) Peygamber'e (tekil) iltifât.", relatedRoots: [] },
      { id: "L47-Q06", type: "matching", question: "Kevser suresindeki kelime-kalıp eşleştirmelerini yapın:", pairs: [{ left: "أَعْطَيْنَاكَ", right: "IV. bâb (verdi)" }, { left: "الكَوْثَر", right: "فَوْعَل (bol hayır)" }, { left: "شَانِئ", right: "فَاعِل ism-i fâil" }, { left: "الأَبْتَر", right: "أَفْعَل (sıfat)" }], correct: 0, explanation: "Her kelime farklı kalıptan: أَعْطَى (IV. bâb fiil), كَوْثَر (فَوْعَل mübalağa isim), شَانِئ (فَاعِل ism-i fâil), أَبْتَر (أَفْعَل sıfat).", relatedRoots: ["ع-ط-ي", "ك-ث-ر", "ش-ن-أ", "ب-ت-ر"] },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DERS 48 — KÂFİRÛN SURESİ (109:1-6)
  // ═══════════════════════════════════════════════════════════
  {
    id: "L48-kafirun",
    title: "Kâfirûn Suresi (1-6)",
    titleAr: "سُورَةُ الكَافِرُون",
    stage: 2,
    level: 5,
    surah: 109,
    description: "Tevhid ve berâet suresi. قُلْ emr-i hâzır, لَا nefi tekrarı ile te'kîd, عَابِدُونَ ism-i fâil çoğul, دِين muzâf yapılar. İcâz ile berâet bildirimi.",
    verses: [
      {
        surah: 109, ayah: 1,
        arabic: "قُلْ يَـٰٓأَيُّهَا ٱلْكَـٰفِرُونَ",
        translation: "De ki: Ey kâfirler!",
        words: [
          { arabic: "قُلْ", transliteration: "kul", root: "ق-و-ل", pos: "fil", meaning_tr: "de", irab_short: "emr, I. bâb (ecvef)" },
          { arabic: "يَـٰٓأَيُّهَا", transliteration: "yâ eyyuhe'l", root: null, pos: "harf", meaning_tr: "ey!", irab_short: "nidâ" },
          { arabic: "ٱلْكَـٰفِرُونَ", transliteration: "el-kâfirûne", root: "ك-ف-ر", pos: "ism", meaning_tr: "kâfirler", irab_short: "münâdâ, merfû; فَاعِل ism-i fâil çoğul" },
        ],
      },
      {
        surah: 109, ayah: 2,
        arabic: "لَآ أَعْبُدُ مَا تَعْبُدُونَ",
        translation: "Ben sizin taptıklarınıza tapmam.",
        words: [
          { arabic: "لَآ", transliteration: "lâ", root: null, pos: "harf", meaning_tr: "…-mam", irab_short: "nefi" },
          { arabic: "أَعْبُدُ", transliteration: "a'budu", root: "ع-ب-د", pos: "fil", meaning_tr: "tapmam/ibadet etmem", irab_short: "muzâri, I. bâb" },
          { arabic: "مَا", transliteration: "mâ", root: null, pos: "ism", meaning_tr: "ne/ne şey", irab_short: "ism-i mevsûl, mef'ûlun bih" },
          { arabic: "تَعْبُدُونَ", transliteration: "ta'budûne", root: "ع-ب-د", pos: "fil", meaning_tr: "taptıklarınız", irab_short: "muzâri, I. bâb, 2. çoğul" },
        ],
      },
      {
        surah: 109, ayah: 3,
        arabic: "وَلَآ أَنتُمْ عَـٰبِدُونَ مَآ أَعْبُدُ",
        translation: "Ve siz de benim taptığıma tapmazsınız.",
        words: [
          { arabic: "وَلَآ", transliteration: "ve-lâ", root: null, pos: "harf", meaning_tr: "ve …-mazsınız", irab_short: "atıf + nefi" },
          { arabic: "أَنتُمْ", transliteration: "entum", root: null, pos: "ism", meaning_tr: "siz", irab_short: "zamîr, mübtedâ" },
          { arabic: "عَـٰبِدُونَ", transliteration: "âbidûne", root: "ع-ب-د", pos: "ism", meaning_tr: "ibadet edenler", irab_short: "haber, merfû; فَاعِل ism-i fâil çoğul" },
          { arabic: "مَآ", transliteration: "mâ", root: null, pos: "ism", meaning_tr: "ne (şeye)", irab_short: "ism-i mevsûl" },
          { arabic: "أَعْبُدُ", transliteration: "a'budu", root: "ع-ب-د", pos: "fil", meaning_tr: "taptığım", irab_short: "muzâri, I. bâb, 1. tekil" },
        ],
      },
      {
        surah: 109, ayah: 4,
        arabic: "وَلَآ أَنَا۠ عَابِدٌ مَّا عَبَدتُّمْ",
        translation: "Ben de sizin taptıklarınıza tapacak değilim.",
        words: [
          { arabic: "وَلَآ", transliteration: "ve-lâ", root: null, pos: "harf", meaning_tr: "ve …-değilim", irab_short: "atıf + nefi" },
          { arabic: "أَنَا۠", transliteration: "ene", root: null, pos: "ism", meaning_tr: "ben", irab_short: "zamîr, mübtedâ" },
          { arabic: "عَابِدٌ", transliteration: "âbidun", root: "ع-ب-د", pos: "ism", meaning_tr: "ibadet edecek", irab_short: "haber, merfû; فَاعِل ism-i fâil tekil" },
          { arabic: "مَّا", transliteration: "mâ", root: null, pos: "ism", meaning_tr: "ne şeye", irab_short: "ism-i mevsûl" },
          { arabic: "عَبَدتُّمْ", transliteration: "abed-tum", root: "ع-ب-د", pos: "fil", meaning_tr: "taptığınız", irab_short: "mâzî, I. bâb, 2. çoğul" },
        ],
      },
      {
        surah: 109, ayah: 5,
        arabic: "وَلَآ أَنتُمْ عَـٰبِدُونَ مَآ أَعْبُدُ",
        translation: "Siz de benim taptığıma tapacak değilsiniz.",
        words: [
          { arabic: "وَلَآ", transliteration: "ve-lâ", root: null, pos: "harf", meaning_tr: "ve …-değilsiniz", irab_short: "atıf + nefi" },
          { arabic: "أَنتُمْ", transliteration: "entum", root: null, pos: "ism", meaning_tr: "siz", irab_short: "zamîr, mübtedâ" },
          { arabic: "عَـٰبِدُونَ", transliteration: "âbidûne", root: "ع-ب-د", pos: "ism", meaning_tr: "ibadet edenler", irab_short: "haber, merfû; ism-i fâil çoğul" },
          { arabic: "مَآ", transliteration: "mâ", root: null, pos: "ism", meaning_tr: "ne şeye", irab_short: "ism-i mevsûl" },
          { arabic: "أَعْبُدُ", transliteration: "a'budu", root: "ع-ب-د", pos: "fil", meaning_tr: "taptığım", irab_short: "muzâri, I. bâb" },
        ],
      },
      {
        surah: 109, ayah: 6,
        arabic: "لَكُمْ دِينُكُمْ وَلِىَ دِينِ",
        translation: "Sizin dininiz size, benim dinim bana.",
        words: [
          { arabic: "لَكُمْ", transliteration: "lekum", root: null, pos: "harf", meaning_tr: "sizin (için)", irab_short: "câr-mecrûr, mukaddem haber" },
          { arabic: "دِينُكُمْ", transliteration: "dînukum", root: "د-ي-ن", pos: "ism", meaning_tr: "dininiz", irab_short: "mübtedâ muahhar, merfû; muzâf + zamîr" },
          { arabic: "وَلِىَ", transliteration: "ve-liye", root: null, pos: "harf", meaning_tr: "ve benim (için)", irab_short: "câr-mecrûr, mukaddem haber" },
          { arabic: "دِينِ", transliteration: "dîni", root: "د-ي-ن", pos: "ism", meaning_tr: "dinim", irab_short: "mübtedâ muahhar, merfû takdîren; muzâf + yâ-i mütekellim (hazfedilmiş)" },
        ],
      },
    ],
    grammarNotes: [
      { title: "İsim Cümlesi vs. Fiil Cümlesi Nüansı", explanation: "2. ayet fiil cümlesi (لَا أَعْبُدُ = tapmam), 4. ayet isim cümlesi (وَلَا أَنَا عَابِدٌ = tapacak değilim). Fiil cümlesi: anlık durum/yenilenme. İsim cümlesi: kalıcılık, sabitlik. Kâfirûn suresinde bu nüans: 'şimdi tapmıyorum' + 'gelecekte de asla tapmayacağım'.", rule: "Fiil cümlesi (لَا + muzâri): anlık nefi\nİsim cümlesi (لَا + ism-i fâil): kalıcı nefi\nBirlikte → hem şimdi hem gelecekte reddetme", examples: ["لَا أَعْبُدُ — tapmıyorum (fiil: anlık)", "لَا أَنَا عَابِدٌ — tapacak değilim (isim: kalıcı)", "لَا أَنتُمْ عَابِدُونَ — tapacak değilsiniz"] },
      { title: "Tekrar (التكرار) ve Te'kîd", explanation: "3. ve 5. ayetler aynı: وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ. Arapçada tekrar = kuvvetli te'kîd (pekiştirme). Tekrar gereksiz değil: 2-3 arası fiil cümlesine karşılık, 4-5 arası isim cümlesine karşılık. Zaman perspektifi farklı.", rule: "2 → 3: fiil cümleleri (anlık)\n4 → 5: isim cümleleri (kalıcı)\nHer çift farklı zaman boyutunu kapsıyor", examples: ["لَا أَعْبُدُ ← أَنتُمْ عَابِدُونَ (anlık)", "أَنَا عَابِدٌ ← أَنتُمْ عَابِدُونَ (kalıcı)"] },
      { title: "لَكُمْ دِينُكُمْ: Takdîm-Te'hîr ile Hasr", explanation: "لَكُمْ (câr-mecrûr) + دِينُكُمْ (mübtedâ): haber öne alınmış. Normal: دِينُكُمْ لَكُمْ. Takdîm → hasr: 'SİZE AİT dininiz' (ona karışmıyorum). Son ayet hem berâet hem özgürlük: herkes kendi inancıyla baş başa.", rule: "لَكُمْ (haber, mukaddem) + دِينُكُمْ (mübtedâ, muahhar)\nTakdîm = hasr vurgusu\n'Sizin dininiz SİZE'", examples: ["لَكُمْ دِينُكُمْ وَلِيَ دِينِ — 109:6", "إِيَّاكَ نَعْبُدُ — 1:5 (aynı hasr tekniği)"] },
    ],
    exercises: [
      { id: "L48-Q01", type: "single_choice", question: "2. ve 4. ayet arasındaki temel fark nedir?", options: ["2. ayet fiil cümlesi (anlık nefi), 4. ayet isim cümlesi (kalıcı nefi)", "2. ayet geçmiş, 4. ayet gelecek", "2. ayet olumlu, 4. ayet olumsuz", "Hiçbir fark yok, aynı anlam"], correct: 0, explanation: "لَا أَعْبُدُ (fiil = anlık: şimdi tapmıyorum) vs. وَلَا أَنَا عَابِدٌ (isim = kalıcı: gelecekte de asla tapmayacağım). Bu nüans Arap gramerinde önemli.", relatedRoots: ["ع-ب-د"] },
      { id: "L48-Q02", type: "wazn_match", question: "عَابِدُونَ kelimesinin kalıbı nedir?", options: ["فَاعِلُونَ — I. bâb ism-i fâil çoğul", "مُفَعِّلُونَ — II. bâb ism-i fâil", "مُفَاعِلُونَ — III. bâb ism-i fâil", "مُفْعِلُونَ — IV. bâb ism-i fâil"], correct: 0, explanation: "عَابِد: فَاعِل kalıbı (I. bâb ism-i fâil). عَبَدَ → عَابِد (ibadet eden). Çoğul: عَابِدُونَ / عَابِدِينَ.", relatedRoots: ["ع-ب-د"] },
      { id: "L48-Q03", type: "balagha_identify", question: "لَكُمْ دِينُكُمْ (109:6) hangi belâgat tekniğini kullanır?", options: ["Takdîm-te'hîr: haberi öne alarak hasr", "Hazf: mübtedâ düşürülmüş", "Teşbîh", "Mecâz-ı mürsel"], correct: 0, explanation: "لَكُمْ (haber) + دِينُكُمْ (mübtedâ): haber öne alınmış → hasr. 'SİZE AİT dininiz.' L01'deki إِيَّاكَ نَعْبُدُ ile aynı teknik.", relatedRoots: ["د-ي-ن"] },
      { id: "L48-Q04", type: "single_choice", question: "قُلْ fiilinin kök yapısı nedir?", options: ["ق-و-ل: ecvef kök (وَ düşer) → قُلْ", "ق-ل-ل: mudâaf kök", "ق-ي-ل: ecvef kök", "ق-و-ل: sağlam kök"], correct: 0, explanation: "ق-و-ل: ecvef (ortası و) kök. قَالَ → يَقُولُ. Emir halinde و düşer: قُلْ (de!). Kur'an'da en çok tekrarlanan fiillerden.", relatedRoots: ["ق-و-ل"] },
      { id: "L48-Q05", type: "matching", question: "Surede tekrarlanan yapıları eşleştirin:", pairs: [{ left: "لَا أَعْبُدُ (2)", right: "Fiil cümlesi — anlık nefi" }, { left: "لَا أَنَا عَابِدٌ (4)", right: "İsim cümlesi — kalıcı nefi" }, { left: "عَابِدُونَ (3,5)", right: "İsm-i fâil çoğul" }, { left: "لَكُمْ دِينُكُمْ (6)", right: "Takdîm ile hasr" }], correct: 0, explanation: "Her yapı farklı bir gramer fonksiyonu taşır: fiil cümlesi (anlık), isim cümlesi (kalıcı), ism-i fâil (süreklilik), takdîm (vurgu/sınırlama).", relatedRoots: ["ع-ب-د", "د-ي-ن"] },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DERS 49 — NASR SURESİ (110:1-3)
  // ═══════════════════════════════════════════════════════════
  {
    id: "L49-nasr",
    title: "Nasr Suresi (1-3)",
    titleAr: "سُورَةُ النَّصْر",
    stage: 2,
    level: 5,
    surah: 110,
    description: "Son inen surelerden. إِذَا şart, جَاءَ ecvef fiil, II. bâb سَبِّحْ (tesbîh emri), X. bâb اسْتَغْفِرْ (istiğfâr emri). أَفْوَاجًا cem kırık, تَوَّابًا فَعَّال mübalağa.",
    verses: [
      {
        surah: 110, ayah: 1,
        arabic: "إِذَا جَآءَ نَصْرُ ٱللَّهِ وَٱلْفَتْحُ",
        translation: "Allah'ın yardımı ve fetih geldiğinde,",
        words: [
          { arabic: "إِذَا", transliteration: "izâ", root: null, pos: "harf", meaning_tr: "…-dığında", irab_short: "şart zarfı" },
          { arabic: "جَآءَ", transliteration: "câe", root: "ج-ي-أ", pos: "fil", meaning_tr: "geldi", irab_short: "mâzî, I. bâb (ecvef)" },
          { arabic: "نَصْرُ", transliteration: "nasru", root: "ن-ص-ر", pos: "ism", meaning_tr: "yardım", irab_short: "fâil, merfû; muzâf" },
          { arabic: "ٱللَّهِ", transliteration: "Allâhi", root: null, pos: "ism", meaning_tr: "Allah'ın", irab_short: "muzâfun ileyh, mecrûr" },
          { arabic: "وَٱلْفَتْحُ", transliteration: "ve'l-fethu", root: "ف-ت-ح", pos: "ism", meaning_tr: "ve fetih", irab_short: "ma'tûf, merfû; فَعْل masdar" },
        ],
      },
      {
        surah: 110, ayah: 2,
        arabic: "وَرَأَيْتَ ٱلنَّاسَ يَدْخُلُونَ فِى دِينِ ٱللَّهِ أَفْوَاجًا",
        translation: "Ve insanların bölük bölük Allah'ın dinine girdiklerini gördüğünde,",
        words: [
          { arabic: "وَرَأَيْتَ", transliteration: "ve-raeyte", root: "ر-أ-ي", pos: "fil", meaning_tr: "gördüğünde", irab_short: "mâzî, I. bâb; atıf" },
          { arabic: "ٱلنَّاسَ", transliteration: "en-nâse", root: "ن-و-س", pos: "ism", meaning_tr: "insanları", irab_short: "mef'ûlun bih, mansûb" },
          { arabic: "يَدْخُلُونَ", transliteration: "yedhulûne", root: "د-خ-ل", pos: "fil", meaning_tr: "giriyorlar", irab_short: "muzâri, I. bâb; hâl cümlesi" },
          { arabic: "فِى", transliteration: "fî", root: null, pos: "harf", meaning_tr: "içine", irab_short: "harf-i cer" },
          { arabic: "دِينِ", transliteration: "dîni", root: "د-ي-ن", pos: "ism", meaning_tr: "dinine", irab_short: "mecrûr, muzâf" },
          { arabic: "ٱللَّهِ", transliteration: "Allâhi", root: null, pos: "ism", meaning_tr: "Allah'ın", irab_short: "muzâfun ileyh" },
          { arabic: "أَفْوَاجًا", transliteration: "efvâcen", root: "ف-و-ج", pos: "ism", meaning_tr: "bölük bölük", irab_short: "hâl, mansûb; أَفْعَال cem kırık" },
        ],
      },
      {
        surah: 110, ayah: 3,
        arabic: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَٱسْتَغْفِرْهُ ۚ إِنَّهُۥ كَانَ تَوَّابًا",
        translation: "Rabbini hamd ile tesbih et ve O'ndan mağfiret dile. Şüphesiz O, tövbeleri çok kabul edendir.",
        words: [
          { arabic: "فَسَبِّحْ", transliteration: "fe-sebbih", root: "س-ب-ح", pos: "fil", meaning_tr: "tesbih et", irab_short: "emr, II. bâb (tef'îl); فَ netice" },
          { arabic: "بِحَمْدِ", transliteration: "bi-hamdi", root: "ح-م-د", pos: "ism", meaning_tr: "hamd ile", irab_short: "câr-mecrûr, muzâf" },
          { arabic: "رَبِّكَ", transliteration: "rabbike", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbinin", irab_short: "muzâfun ileyh + zamîr" },
          { arabic: "وَٱسْتَغْفِرْهُ", transliteration: "ve'stağfirhû", root: "غ-ف-ر", pos: "fil", meaning_tr: "O'ndan mağfiret dile", irab_short: "emr, X. bâb (istif'âl); هُ mef'ûl" },
          { arabic: "إِنَّهُۥ", transliteration: "innehû", root: null, pos: "harf", meaning_tr: "muhakkak O", irab_short: "te'kîd + zamîr" },
          { arabic: "كَانَ", transliteration: "kâne", root: "ك-و-ن", pos: "fil", meaning_tr: "idi/dır", irab_short: "mâzî, nâkıs fiil" },
          { arabic: "تَوَّابًا", transliteration: "tevvâben", root: "ت-و-ب", pos: "ism", meaning_tr: "tövbeleri çok kabul eden", irab_short: "haber-i kâne, mansûb; فَعَّال mübalağa" },
        ],
      },
    ],
    grammarNotes: [
      { title: "İzâ (إِذَا) Şart Yapısı", explanation: "إِذَا: zaman zarfı, muhakkak gerçekleşecek olaylar için kullanılır (إِنْ'den farklı: إِنْ şüpheli, إِذَا kesin). Burada: 'Allah'ın yardımı geldiğinde...' → cevap: 'tesbih et.' Şart: 1-2. ayetler. Cevap: 3. ayet (فَسَبِّحْ).", rule: "إِذَا + mâzî = 'kesin olduğunda'\nإِنْ + mâzî = 'belki olursa'\n3 ayet = 1 şart cümlesi (إِذَا...فَ)", examples: ["إِذَا جَاءَ … فَسَبِّحْ — 110:1-3", "إِذَا زُلْزِلَتِ — 99:1", "إِذَا جَاءَتِ الطَّامَّةُ — 79:34"] },
      { title: "II. Bâb Emri: سَبِّحْ (Tesbih Et)", explanation: "سَبِّحْ: II. bâb (فَعِّلْ) emir. Kök: س-ب-ح. سَبَحَ (I: yüzdü) → سَبَّحَ (II: tesbih etti/tenzih etti). II. bâb burada ta'diye ve teksîr: 'Allah'ı sürekli ve çokça tenzih et.' بِحَمْدِ = hamd ile birlikte.", rule: "سَبَّحَ = II. bâb: tesbih/tenzih\nسَبِّحْ = emir formu\nبِحَمْدِ رَبِّكَ = Rabbinin hamd ile", examples: ["فَسَبِّحْ بِحَمْدِ رَبِّكَ — 110:3", "سَبِّحِ اسْمَ رَبِّكَ — 87:1", "يُسَبِّحُونَ — tesbih ediyorlar"] },
      { title: "X. Bâb Emri: اِسْتَغْفِرْ (Mağfiret Dile)", explanation: "اِسْتَغْفِرْ: X. bâb (istif'âl) emir. Kök: غ-ف-ر. غَفَرَ (I: örttü) → اِسْتَغْفَرَ (X: örtülmesini/bağışlanmayı istedi). X. bâb: talep anlamı. 'Allah'tan bağışlanma talep et.'", rule: "اِسْتَفْعَلَ = X. bâb: talep\nغَفَرَ → اِسْتَغْفَرَ = bağışlanma istedi\nاِسْتَغْفِرْ = emir: iste!", examples: ["اِسْتَغْفِرْهُ — O'ndan mağfiret dile (110:3)", "اِسْتَقِمْ — doğru ol (X, ق-و-م)", "اِسْتِغْفَار — istiğfâr (X. bâb masdarı)"] },
      { title: "تَوَّاب: فَعَّال Mübalağa Kalıbı", explanation: "تَوَّاب: فَعَّال kalıbı, ت-و-ب kökünden. تَابَ (I: döndü/tövbe etti) → تَوَّاب (çok tövbe kabul eden, sürekli tövbelere açık). فَعَّال: en güçlü mübalağa kalıplarından. L29'daki غَفَّار ile aynı yapı.", rule: "فَعَّال = mübalağa: çok/sürekli yapan\nتَابَ → تَوَّاب (çok tövbe kabul eden)\nغَفَرَ → غَفَّار (çok bağışlayan)", examples: ["تَوَّابًا — 110:3", "غَفَّار — çok bağışlayan", "فَعَّال لِمَا يُرِيدُ — 85:16"] },
    ],
    exercises: [
      { id: "L49-Q01", type: "bab_identify", question: "سَبِّحْ (tesbih et) hangi bâbtandır?", options: ["II. bâb (فَعَّلَ): سَبَحَ → سَبَّحَ", "I. bâb: سَبَحَ (yüzdü)", "IV. bâb: أَسْبَحَ", "V. bâb: تَسَبَّحَ"], correct: 0, explanation: "سَبَّحَ = II. bâb. سَبَحَ (I: yüzdü) → سَبَّحَ (II: tesbih etti, tenzih etti). II. bâb emir: سَبِّحْ.", relatedRoots: ["س-ب-ح"] },
      { id: "L49-Q02", type: "bab_identify", question: "اِسْتَغْفِرْ (mağfiret dile) hangi bâbtandır?", options: ["X. bâb (اِسْتَفْعَلَ): غَفَرَ → اِسْتَغْفَرَ", "IV. bâb: أَغْفَرَ", "I. bâb: غَفَرَ", "VII. bâb: اِنْغَفَرَ"], correct: 0, explanation: "اِسْتَغْفَرَ = X. bâb (istif'âl). غَفَرَ (örttü) → اِسْتَغْفَرَ (örtülmesini/bağışlanmasını istedi). X. bâb = talep.", relatedRoots: ["غ-ف-ر"] },
      { id: "L49-Q03", type: "wazn_match", question: "تَوَّاب kelimesinin kalıbı ve bâbı nedir?", options: ["فَعَّال — I. bâb mübalağa (çok tövbe kabul eden)", "تَفَعُّل — V. bâb masdar", "مُتَفَعِّل — V. bâb ism-i fâil", "فَعِيل — sıfat-ı müşebbehe"], correct: 0, explanation: "تَوَّاب: ت-و-ب kökünden فَعَّال kalıbı. Mübalağa: çok/sürekli tövbe kabul eden. غَفَّار gibi Allah'ın sıfatlarında çok kullanılır.", relatedRoots: ["ت-و-ب"] },
      { id: "L49-Q04", type: "single_choice", question: "إِذَا ile إِنْ arasındaki fark nedir?", options: ["إِذَا: kesin gerçekleşecek; إِنْ: şüpheli/ihtimalli", "إِذَا: geçmiş; إِنْ: gelecek", "Fark yok, eş anlamlı", "إِذَا: olumsuz; إِنْ: olumlu"], correct: 0, explanation: "إِذَا tahakkuk eden (kesin olacak) durumlar için: 'Allah'ın yardımı geldiğinde (ki gelecek).' إِنْ ihtimalli şart: 'eğer olursa.'", relatedRoots: [] },
      { id: "L49-Q05", type: "single_choice", question: "أَفْوَاج kelimesinin tekili nedir?", options: ["فَوْج (grup) → أَفْوَاج (cem kırık: أَفْعَال)", "أَفْوَج — tekil", "فِئَة — tekil", "مَجْمُوعَة — tekil"], correct: 0, explanation: "فَوْج (ف-و-ج): bir grup insan. Cem kırık: أَفْوَاج (أَفْعَال kalıbı). 'Bölük bölük' = çok sayıda grup halinde.", relatedRoots: ["ف-و-ج"] },
      { id: "L49-Q06", type: "matching", question: "Sure yapısındaki bâb çeşitliliğini eşleştirin:", pairs: [{ left: "سَبِّحْ", right: "II. bâb emri (tesbih)" }, { left: "اِسْتَغْفِرْ", right: "X. bâb emri (talep)" }, { left: "جَاءَ", right: "I. bâb ecvef (geldi)" }, { left: "تَوَّاب", right: "فَعَّال mübalağa" }], correct: 0, explanation: "I. bâb (temel: جَاءَ), II. bâb (tesbih: سَبِّحْ), X. bâb (talep: اِسْتَغْفِرْ), فَعَّال (mübalağa: تَوَّاب). 3 ayetlik surede 3 farklı bâb + mübalağa.", relatedRoots: ["س-ب-ح", "غ-ف-ر", "ج-ي-أ", "ت-و-ب"] },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DERS 50 — TEBBET SURESİ (111:1-5)
  // ═══════════════════════════════════════════════════════════
  {
    id: "L50-tebbet",
    title: "Tebbet Suresi (1-5)",
    titleAr: "سُورَةُ المَسَد",
    stage: 2,
    level: 5,
    surah: 111,
    description: "Tek isim zikrederek kınanan kişi. تَبَّتْ dua/beddua, مَا أَغْنَى istifhâm-ı inkârî + IV. bâb, حَمَّالَة فَعَّالَة mübalağa, مَسَد ism-i âlet. Beddua edebiyatında belâgat.",
    verses: [
      {
        surah: 111, ayah: 1,
        arabic: "تَبَّتْ يَدَآ أَبِى لَهَبٍ وَتَبَّ",
        translation: "Ebû Leheb'in iki eli kurusun, zaten kurudu!",
        words: [
          { arabic: "تَبَّتْ", transliteration: "tebbet", root: "ت-ب-ب", pos: "fil", meaning_tr: "kurusun! (beddua)", irab_short: "mâzî, I. bâb (mudâaf); beddua/haber" },
          { arabic: "يَدَآ", transliteration: "yedâ", root: "ي-د-ي", pos: "ism", meaning_tr: "iki eli", irab_short: "fâil, merfû (tesniye, elif ile); muzâf" },
          { arabic: "أَبِى", transliteration: "ebî", root: "أ-ب-و", pos: "ism", meaning_tr: "babası", irab_short: "muzâfun ileyh, mecrûr (tesniye-i'rab); muzâf" },
          { arabic: "لَهَبٍ", transliteration: "lehebin", root: "ل-ه-ب", pos: "ism", meaning_tr: "alev/ateş", irab_short: "muzâfun ileyh, mecrûr" },
          { arabic: "وَتَبَّ", transliteration: "ve-tebbe", root: "ت-ب-ب", pos: "fil", meaning_tr: "(zaten) kurudu/helak oldu", irab_short: "mâzî, I. bâb; haber (vakıa)" },
        ],
      },
      {
        surah: 111, ayah: 2,
        arabic: "مَآ أَغْنَىٰ عَنْهُ مَالُهُۥ وَمَا كَسَبَ",
        translation: "Ne malı ne de kazandığı onu kurtardı.",
        words: [
          { arabic: "مَآ", transliteration: "mâ", root: null, pos: "harf", meaning_tr: "ne (kurtardı)?", irab_short: "istifhâm-ı inkârî / nefi" },
          { arabic: "أَغْنَىٰ", transliteration: "ağnâ", root: "غ-ن-ي", pos: "fil", meaning_tr: "fayda verdi, kurtardı", irab_short: "mâzî, IV. bâb (if'âl)" },
          { arabic: "عَنْهُ", transliteration: "anhu", root: null, pos: "harf", meaning_tr: "ondan (onu)", irab_short: "câr-mecrûr" },
          { arabic: "مَالُهُۥ", transliteration: "mâluhû", root: "م-و-ل", pos: "ism", meaning_tr: "malı", irab_short: "fâil, merfû; muzâf + zamîr" },
          { arabic: "وَمَا", transliteration: "ve-mâ", root: null, pos: "ism", meaning_tr: "ve ne (ki)", irab_short: "atıf + ism-i mevsûl" },
          { arabic: "كَسَبَ", transliteration: "kesebe", root: "ك-س-ب", pos: "fil", meaning_tr: "kazandı", irab_short: "mâzî, I. bâb" },
        ],
      },
      {
        surah: 111, ayah: 3,
        arabic: "سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ",
        translation: "Alevli bir ateşe girecektir.",
        words: [
          { arabic: "سَيَصْلَىٰ", transliteration: "se-yaslâ", root: "ص-ل-ي", pos: "fil", meaning_tr: "girecektir (ateşe)", irab_short: "muzâri, I. bâb + سَ istikbâl" },
          { arabic: "نَارًا", transliteration: "nâren", root: "ن-و-ر", pos: "ism", meaning_tr: "ateş(e)", irab_short: "mef'ûlun bih, mansûb" },
          { arabic: "ذَاتَ", transliteration: "zâte", root: null, pos: "ism", meaning_tr: "sahip", irab_short: "sıfat, mansûb" },
          { arabic: "لَهَبٍ", transliteration: "lehebin", root: "ل-ه-ب", pos: "ism", meaning_tr: "alev", irab_short: "muzâfun ileyh, mecrûr" },
        ],
      },
      {
        surah: 111, ayah: 4,
        arabic: "وَٱمْرَأَتُهُۥ حَمَّالَةَ ٱلْحَطَبِ",
        translation: "Karısı da; odun hamalı (olarak).",
        words: [
          { arabic: "وَٱمْرَأَتُهُۥ", transliteration: "ve'mraetuhû", root: "م-ر-أ", pos: "ism", meaning_tr: "ve karısı", irab_short: "ma'tûf, merfû; muzâf + zamîr" },
          { arabic: "حَمَّالَةَ", transliteration: "hammâlete", root: "ح-م-ل", pos: "ism", meaning_tr: "taşıyıcısı, hamalı", irab_short: "hâl/sıfat, mansûb; فَعَّالَة mübalağa müennes" },
          { arabic: "ٱلْحَطَبِ", transliteration: "el-hatebi", root: "ح-ط-ب", pos: "ism", meaning_tr: "odun(un)", irab_short: "muzâfun ileyh, mecrûr" },
        ],
      },
      {
        surah: 111, ayah: 5,
        arabic: "فِى جِيدِهَا حَبْلٌ مِّن مَّسَدٍ",
        translation: "Boynunda bükülmüş liften bir ip var.",
        words: [
          { arabic: "فِى", transliteration: "fî", root: null, pos: "harf", meaning_tr: "…de", irab_short: "harf-i cer" },
          { arabic: "جِيدِهَا", transliteration: "cîdihâ", root: "ج-ي-د", pos: "ism", meaning_tr: "boynunda", irab_short: "mecrûr, muzâf + zamîr" },
          { arabic: "حَبْلٌ", transliteration: "hablun", root: "ح-ب-ل", pos: "ism", meaning_tr: "ip", irab_short: "mübtedâ, merfû" },
          { arabic: "مِّن", transliteration: "min", root: null, pos: "harf", meaning_tr: "…den", irab_short: "harf-i cer (beyâniyye)" },
          { arabic: "مَّسَدٍ", transliteration: "mesedin", root: "م-س-د", pos: "ism", meaning_tr: "bükülmüş lif/hurma ipi", irab_short: "mecrûr; فَعَل kalıbı masdar/isim" },
        ],
      },
    ],
    grammarNotes: [
      { title: "Mudâaf Fiil: تَبَّ (ت-ب-ب)", explanation: "تَبَّ: mudâaf kök (2. ve 3. harf aynı: ب-ب). L46'daki يَدُعُّ (د-ع-ع) ile aynı yapı. تَبِبَ → تَبَّ (kurudu, helak oldu). تَبَّتْ: müenneslik tâ'sı ile (يَدَا tesniye müennes muamelesi).", rule: "ت-ب-ب: mudâaf kök\nتَبِبَ → تَبَّ (şedde ile birleşir)\nBeddua + haber: kurusun + kurudu", examples: ["تَبَّتْ يَدَا — iki eli kurusun (111:1)", "وَتَبَّ — (zaten) kurudu (111:1)", "يَدُعُّ — iter (107:2, د-ع-ع mudâaf)"] },
      { title: "مَا أَغْنَى: IV. Bâb + İnkâr", explanation: "أَغْنَى: IV. bâb (if'âl). غَنِيَ (I: zengin oldu) → أَغْنَى (IV: zengin kıldı, fayda verdi). مَا: istifhâm-ı inkârî veya nefi. 'Malı onu hiçbir şekilde kurtarmadı / ne kurtardı ki?'", rule: "أَغْنَى = IV. bâb: fayda verdi\nمَا أَغْنَى = inkârî: hiç fayda vermedi\nIV. bâb ta'diye: geçişli yapma", examples: ["مَا أَغْنَى عَنْهُ مَالُهُ — 111:2", "أَغْنَاهُ — onu zengin kıldı", "مَا أَدْرَاكَ — sana ne bildirdi (IV. bâb, inkâr)"] },
      { title: "حَمَّالَة: فَعَّالَة Mübalağa (Müennes)", explanation: "حَمَّالَة: حَمَلَ (taşıdı) → حَمَّال (çok taşıyan, hamal) + ة müenneslik. فَعَّالَة: müennes mübalağa kalıbı. تَوَّاب (L49), غَفَّار (L29) ile aynı فَعَّال yapısı, artı müenneslik.", rule: "فَعَّالَة = müennes mübalağa\nحَمَلَ → حَمَّال (hamal) → حَمَّالَة\nBenzerleri: عَلَّامَة, فَهَّامَة", examples: ["حَمَّالَةَ الحَطَبِ — odun hamalı (111:4)", "غَفَّار — çok bağışlayan (فَعَّال müzekker)", "تَوَّاب — çok tövbe kabul eden (110:3)"] },
      { title: "Tıbâk: لَهَب (Alev) İsmi ve Cezası", explanation: "Ebû Leheb = 'alev babası' (yüzünün parlaklığından lakap). Cezası: نَارًا ذَاتَ لَهَبٍ (alevli ateş). İsim ile ceza arasında tıbâk (zıtlık): dünyada 'alev' lakabı övgü iken, ahirette aynı 'alev' azap.", rule: "Tıbâk: aynı kökün zıt bağlamda kullanımı\nأَبُو لَهَبٍ (övgü lakabı) ↔ نَارًا ذَاتَ لَهَبٍ (azap)\nİsim-kader ironisi", examples: ["أَبِي لَهَبٍ ↔ ذَاتَ لَهَبٍ (111:1,3)", "الشِّتَاءِ ↔ الصَّيْفِ (106:2, Kureyş)"] },
    ],
    exercises: [
      { id: "L50-Q01", type: "single_choice", question: "تَبَّتْ ve وَتَبَّ arasındaki fark nedir?", options: ["تَبَّتْ = beddua (kurusun!), وَتَبَّ = haber (zaten kurudu)", "İkisi de beddua", "İkisi de geçmiş zaman haberi", "تَبَّتْ haber, وَتَبَّ beddua"], correct: 0, explanation: "تَبَّتْ: beddua/inşâ (kurusun!). وَتَبَّ: haber/ihbâr (zaten kurudu, oldu bitti). Aynı kök, aynı kalıp ama biri istek, diğeri vakıa. Bu hem üslup hem vurgu aracı.", relatedRoots: ["ت-ب-ب"] },
      { id: "L50-Q02", type: "bab_identify", question: "أَغْنَى (fayda verdi) hangi bâbtandır?", options: ["IV. bâb (أَفْعَلَ): غَنِيَ → أَغْنَى", "I. bâb: غَنِيَ (zengin oldu)", "V. bâb: تَغَنَّى", "X. bâb: اِسْتَغْنَى"], correct: 0, explanation: "أَغْنَى = IV. bâb. غَنِيَ (I: zengin oldu) → أَغْنَى (IV: zengin kıldı/fayda verdi). مَا أَغْنَى = hiç fayda vermedi.", relatedRoots: ["غ-ن-ي"] },
      { id: "L50-Q03", type: "wazn_match", question: "حَمَّالَة kelimesinin kalıbı ve türü nedir?", options: ["فَعَّالَة — müennes mübalağa (çok taşıyan kadın)", "فَاعِلَة — I. bâb ism-i fâil müennes", "مُفَعَّلَة — II. bâb ism-i mef'ûl müennes", "فِعَالَة — meslek ismi"], correct: 0, explanation: "حَمَّالَة: حَمَلَ → حَمَّال (فَعَّال mübalağa) + ة (müenneslik). 'Sürekli/çok taşıyan kadın.' تَوَّاب (110:3) ile aynı فَعَّال yapısı.", relatedRoots: ["ح-م-ل"] },
      { id: "L50-Q04", type: "balagha_identify", question: "أَبِي لَهَبٍ (alev babası) ismi ile نَارًا ذَاتَ لَهَبٍ (alevli ateş) arasındaki ilişki hangi sanattır?", options: ["Tıbâk / isim-kader ironisi — aynı 'alev' kökü iki zıt bağlamda", "Teşbîh", "İstifhâm", "Hazf"], correct: 0, explanation: "لَهَب (alev) Ebû Leheb'in lakabında övgü (yüz parlaklığı), cezasında ise azap. Aynı kök zıt bağlamda → tıbâk ve edebî ironi.", relatedRoots: ["ل-ه-ب"] },
      { id: "L50-Q05", type: "single_choice", question: "يَدَا kelimesinin i'rab durumu nedir?", options: ["Tesniye (ikil), fâil olarak merfû (elif ile: يَدَا)", "Tekil, mansûb", "Cem müzekker sâlim", "Tekil, mecrûr"], correct: 0, explanation: "يَد (el) tesniyesi: يَدَان (ref'), يَدَيْ (nasb/cer). Burada يَدَا = ref' hali (elif ile), تَبَّتْ'in fâili. Muzâf olduğu için nûn düşer: يَدَانِ → يَدَا أَبِي.", relatedRoots: ["ي-د-ي"] },
      { id: "L50-Q06", type: "matching", question: "Suredeki kelime-kalıp eşleştirmelerini yapın:", pairs: [{ left: "تَبَّ", right: "I. bâb mudâaf (kurudu)" }, { left: "أَغْنَى", right: "IV. bâb (fayda verdi)" }, { left: "حَمَّالَة", right: "فَعَّالَة mübalağa müennes" }, { left: "مَسَد", right: "فَعَل isim (bükülmüş lif)" }], correct: 0, explanation: "I. bâb mudâaf (تَبَّ), IV. bâb (أَغْنَى), فَعَّالَة mübalağa (حَمَّالَة), فَعَل isim (مَسَد). Her kelime farklı sarf yapısını öğretir.", relatedRoots: ["ت-ب-ب", "غ-ن-ي", "ح-م-ل", "م-س-د"] },
    ],
  },
];

export default level5cLessons;
