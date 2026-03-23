// ═══════════════════════════════════════════════════════════
// SEVİYE 6 — L51 (İhlâs derinlik), L52 (Felak), L53 (Nâs),
//             L54 (Duhâ-İnşirâh birleşik), L55 (Alak tam)
// ═══════════════════════════════════════════════════════════

const level6Lessons = [
  // ═══════════════════════════════════════════════════════════
  // DERS 51 — İHLÂS SURESİ DEERİNLİK (112:1-4)
  // ═══════════════════════════════════════════════════════════
  {
    id: "L51-ihlas-depth",
    title: "İhlâs — Tevhid Derinliği",
    titleAr: "سُورَةُ الإِخْلَاص — تَعَمُّق",
    stage: 2,
    level: 6,
    surah: 112,
    description: "Tevhid akîdesinin dört ayetlik özeti. لَمْ + cezm yapısı, كُفُوًا أَحَدٌ nekira hasr, الصَّمَد semantik derinlik. Seviye 1'deki temel bilginin üzerine ileri gramer ve belâgat inşâsı.",
    verses: [
      {
        surah: 112, ayah: 1,
        arabic: "قُلْ هُوَ ٱللَّهُ أَحَدٌ",
        translation: "De ki: O, Allah'tır, bir tektir.",
        words: [
          { arabic: "قُلْ", transliteration: "kul", root: "ق-و-ل", pos: "fil", meaning_tr: "de, söyle", irab_short: "emr, ecvef-vâvî, meczûm (sukûn)" },
          { arabic: "هُوَ", transliteration: "huve", root: null, pos: "ism", meaning_tr: "O", irab_short: "mübtedâ veya zamîr-i şe'n (konu zamiri)" },
          { arabic: "ٱللَّهُ", transliteration: "Allāhu", root: "أ-ل-ه", pos: "ism", meaning_tr: "Allah", irab_short: "mübtedâ-2 veya haber-1, merfû" },
          { arabic: "أَحَدٌ", transliteration: "aḥadun", root: "و-ح-د", pos: "ism", meaning_tr: "bir tek, eşsiz", irab_short: "haber (son), merfû, tenvîn — nekira: mutlak birlik" },
        ],
      },
      {
        surah: 112, ayah: 2,
        arabic: "ٱللَّهُ ٱلصَّمَدُ",
        translation: "Allah Samed'dir (her şey O'na muhtaç, O hiçbir şeye muhtaç değil).",
        words: [
          { arabic: "ٱللَّهُ", transliteration: "Allāhu", root: "أ-ل-ه", pos: "ism", meaning_tr: "Allah", irab_short: "mübtedâ, merfû" },
          { arabic: "ٱلصَّمَدُ", transliteration: "eṣ-ṣamedu", root: "ص-م-د", pos: "ism", meaning_tr: "Samed, kendine yeten", irab_short: "haber, merfû; فَعَل kalıbı — sıfat-ı müşebbehe" },
        ],
      },
      {
        surah: 112, ayah: 3,
        arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        translation: "Doğurmadı ve doğurulmadı.",
        words: [
          { arabic: "لَمْ", transliteration: "lem", root: null, pos: "harf", meaning_tr: "olmadı (mâzî nefi)", irab_short: "harf-i cezm, muzâriyi mâzî nefine çevirir" },
          { arabic: "يَلِدْ", transliteration: "yelid", root: "و-ل-د", pos: "fil", meaning_tr: "doğurdu", irab_short: "muzâri, meczûm (لَمْ ile); ecvef-vâvî: وَلَدَ → يَلِدُ → يَلِدْ" },
          { arabic: "وَلَمْ", transliteration: "ve lem", root: null, pos: "harf", meaning_tr: "ve olmadı", irab_short: "وَ atıf + لَمْ cezm" },
          { arabic: "يُولَدْ", transliteration: "yūled", root: "و-ل-د", pos: "fil", meaning_tr: "doğuruldu", irab_short: "muzâri mechûl, meczûm; وُلِدَ → يُولَدُ → يُولَدْ" },
        ],
      },
      {
        surah: 112, ayah: 4,
        arabic: "وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌ",
        translation: "Ve hiçbir şey O'nun dengi olmadı.",
        words: [
          { arabic: "وَلَمْ", transliteration: "ve lem", root: null, pos: "harf", meaning_tr: "ve olmadı", irab_short: "وَ atıf + لَمْ cezm" },
          { arabic: "يَكُن", transliteration: "yekun", root: "ك-و-ن", pos: "fil", meaning_tr: "olmak", irab_short: "muzâri nâkıs, meczûm (نون düştü: يَكُونُ → يَكُنْ)" },
          { arabic: "لَّهُۥ", transliteration: "lehū", root: null, pos: "harf", meaning_tr: "onun için, ona", irab_short: "câr-mecrûr, haber-i kâne (takdîm)" },
          { arabic: "كُفُوًا", transliteration: "kufuven", root: "ك-ف-أ", pos: "ism", meaning_tr: "denk, eş", irab_short: "haber-i kâne veya hâl, mansûb; فُعُول kalıbı" },
          { arabic: "أَحَدٌ", transliteration: "aḥadun", root: "و-ح-د", pos: "ism", meaning_tr: "bir kimse, hiç kimse", irab_short: "ism-i kâne, merfû; nekira nefi bağlamında = hiç kimse" },
        ],
      },
    ],
    grammarNotes: [
      { title: "لَمْ + Cezm: Mâzî Nefi", explanation: "لَمْ harf-i cezm olup muzâri fiili meczûm (sakin) yapar ve anlamını mâzî nefine çevirir. يَلِدُ (doğurur) → لَمْ يَلِدْ (doğurmadı). يَكُونُ (olur) → لَمْ يَكُنْ (olmadı — nûn düşer). Bu kullanım 'hiçbir zaman olmadı ve olmayacak' anlamında ezeli/ebedî nefi taşır.", rule: "لَمْ + muzâri → mâzî nefi, fiil meczûm\nEcvef fiilde وَلَدَ/يَلِدُ → يَلِدْ (vâv düşer)\nNâkıs يَكُون → يَكُنْ (nûn düşer)", examples: ["لَمْ يَلِدْ — doğurmadı (112:3)", "لَمْ يُولَدْ — doğurulmadı (112:3)", "لَمْ يَكُنْ — olmadı (112:4)", "لَمْ يَخْلُقُوا — yaratmadılar (7:191)"] },
      { title: "Nekira + Nefi = Hasr", explanation: "أَحَدٌ (nekira: bir kimse) nefi bağlamında (لَمْ يَكُنْ) kullanıldığında 'hiç kimse' anlamını alır. Ayrıca tenvîn ile bitmesi (أَحَدٌ) surenin açılışındaki أَحَدٌ ile çerçeve (inklüzyon) oluşturur: sure أَحَد ile başlar, أَحَد ile biter.", rule: "Nekira + nefi = küllî nefi (hiç kimse/hiçbir şey)\nأَحَدٌ (1. ayet) ↔ أَحَدٌ (4. ayet) = çerçeve yapısı\nTenvîn: nekire vurgusu — 'herhangi bir denk bile yok'", examples: ["لَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ — hiç kimse dengi olmadı (112:4)", "مَا لَكُمْ مِنْ إِلَهٍ غَيْرُهُ — sizin başka ilahınız yok (7:59)"] },
      { title: "Zamîr-i Şe'n: هُوَ", explanation: "هُوَ burada 'konu zamiri' (zamîr-i şe'n/kıssa) olarak da okunabilir. Mercii (dönüş yeri) sonraki cümledir: 'Mesele şu ki: Allah birdir.' Bu okuma, surenin müşriklerin 'Rabbini bize tanıt' sorusuna cevap olduğu rivayetiyle örtüşür.", rule: "هُوَ = zamîr-i şe'n → 'İş/durum şudur ki...'\nAlternatif: mübtedâ → اللّه haber → أحد haber-i sânî\nHer iki okuma da tevhid vurgusunu güçlendirir", examples: ["قُلْ هُوَ اللّهُ أَحَدٌ — 112:1"] },
    ],
    exercises: [
      { id: "L51-Q01", type: "single_choice", question: "لَمْ يَلِدْ fiilinde لَمْ'ın görevi nedir?", options: ["Muzâriyi mâzî nefine çevirir ve meczûm yapar", "Muzâriyi istikbal (gelecek) yapar", "Emr-i hâzır anlamı katar", "İsim cümlesini nefyeder"], correct: 0, explanation: "لَمْ harf-i cezmdir. Muzâri fiili cezm eder (يَلِدُ → يَلِدْ) ve anlamını mâzî nefine çevirir: 'doğurmadı'. Hem geçmiş nefi hem ezeli nefi taşır.", relatedRoots: ["و-ل-د"] },
      { id: "L51-Q02", type: "single_choice", question: "يَكُونُ fiili لَمْ ile birleşince neden يَكُنْ olur?", options: ["Nâkıs fiil: cezm halinde نون düşer (يَكُونُ → يَكُنْ)", "Ecvef fiil: و harfi düşer", "Muzâaf fiil: idgâm olur", "İ'lâl kuralı: vâv yâ'ya dönüşür"], correct: 0, explanation: "كَانَ nâkıs (لفيف مقرون) fiildir. Muzâri يَكُونُ cezm halinde son nûn düşer: لَمْ يَكُنْ. Aynı kural وَلَمْ تَكُ شَيْئًا (19:9) için de geçerlidir.", relatedRoots: ["ك-و-ن"] },
      { id: "L51-Q03", type: "fill_blank", question: "Boşluğu doldurun: لَمْ _____ وَلَمْ يُولَدْ (112:3)", answer: "يَلِدْ", hint: "و-ل-د kökünden muzâri, meczûm", options: ["يَلِدْ", "وَلَدَ", "يَلِدُ", "يُولَدْ"], correct: 0, explanation: "لَمْ يَلِدْ: و-ل-د kökünden I. bâb muzâri, لَمْ ile meczûm (vâv düştü). 'Doğurmadı' anlamında.", relatedRoots: ["و-ل-د"] },
      { id: "L51-Q04", type: "balagha_identify", question: "Surenin أَحَدٌ ile başlayıp أَحَدٌ ile bitmesi hangi edebî sanattır?", options: ["Reddü'l-acüz ale's-sadr (inklüzyon / çerçeve)", "Tıbâk (zıtlık)", "Cinas (sesteşlik)", "Seci' (kafiye uyumu)"], correct: 0, explanation: "Sure أَحَدٌ (1. ayet) ile açılıp أَحَدٌ (4. ayet) ile kapanır. Bu teknik reddü'l-acüz ale's-sadr veya inklüzyon (inclusion) olarak bilinir. Surenin bütünlüğünü ve tevhid mesajının kuşatıcılığını vurgular.", relatedRoots: ["و-ح-د"] },
      { id: "L51-Q05", type: "irab_identify", question: "كُفُوًا أَحَدٌ (112:4) ibaresinde أَحَدٌ'in i'rab rolü nedir?", options: ["İsm-i kâne: يَكُنْ'ın ismi, merfû", "Haber-i kâne: mansûb olmalı", "Mübtedâ: bağımsız cümle başlatır", "Sıfat: كُفُوًا'nın niteleyicisi"], correct: 0, explanation: "لَمْ يَكُنْ أَحَدٌ كُفُوًا لَهُ şeklinde yeniden düzenlenirse: أَحَدٌ = ism-i kâne (merfû), كُفُوًا = haber-i kâne (mansûb). Haber (كُفُوًا لَهُ) isme (أَحَدٌ) takdîm edilmiş → vurgu: 'DENGİ olan hiç kimse'.", relatedRoots: ["ك-ف-أ"] },
      { id: "L51-Q06", type: "matching", question: "İhlâs suresindeki kavramları eşleştirin:", pairs: [{ left: "أَحَدٌ", right: "Eşsiz birlik" }, { left: "الصَّمَدُ", right: "Her şeyin muhtaç olduğu" }, { left: "لَمْ يَلِدْ", right: "Doğurmadı (nesebi nefi)" }, { left: "كُفُوًا", right: "Denk, eş" }], explanation: "Dört ayet dört temel tevhid ilkesini özetler: birlik → mutlak zenginlik → nesep reddi → denklik reddi.", relatedRoots: ["و-ح-د", "ص-م-د", "و-ل-د", "ك-ف-أ"] },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DERS 52 — FELAK SURESİ (113:1-5)
  // ═══════════════════════════════════════════════════════════
  {
    id: "L52-felak",
    title: "Felak Suresi (1-5)",
    titleAr: "سُورَةُ الفَلَق",
    stage: 2,
    level: 6,
    surah: 113,
    description: "İlk muavvize. أَعُوذُ I. bâb muzâri, مِنْ شَرِّ üçlü tekrar yapısı, غَاسِقٍ ism-i fâil, نَفَّاثَات فَعَّالَات mübalağa müennes çoğul, حَاسِدٍ ism-i fâil. Sığınma teolojisi ve kozmik düzen.",
    verses: [
      {
        surah: 113, ayah: 1,
        arabic: "قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ",
        translation: "De ki: Sabahın Rabbine sığınırım.",
        words: [
          { arabic: "قُلْ", transliteration: "kul", root: "ق-و-ل", pos: "fil", meaning_tr: "de", irab_short: "emr, ecvef" },
          { arabic: "أَعُوذُ", transliteration: "eûzu", root: "ع-و-ذ", pos: "fil", meaning_tr: "sığınırım", irab_short: "muzâri, I. bâb, merfû; فَاعِل: müstetir أَنَا" },
          { arabic: "بِرَبِّ", transliteration: "bi-rabbi", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbine", irab_short: "câr-mecrûr, muzâf" },
          { arabic: "ٱلْفَلَقِ", transliteration: "el-feleqi", root: "ف-ل-ق", pos: "ism", meaning_tr: "sabah, yarılma", irab_short: "muzâfun ileyh, mecrûr; فَعَل masdar" },
        ],
      },
      {
        surah: 113, ayah: 2,
        arabic: "مِن شَرِّ مَا خَلَقَ",
        translation: "Yarattığı şeylerin şerrinden,",
        words: [
          { arabic: "مِن", transliteration: "min", root: null, pos: "harf", meaning_tr: "-den, -dan", irab_short: "harf-i cer, teb'îz (kısmîlik)" },
          { arabic: "شَرِّ", transliteration: "şerri", root: "ش-ر-ر", pos: "ism", meaning_tr: "şer, kötülük", irab_short: "mecrûr, muzâf; فَعْل masdar" },
          { arabic: "مَا", transliteration: "mâ", root: null, pos: "ism", meaning_tr: "ne, şey (mevsûle)", irab_short: "ism-i mevsûl, muzâfun ileyh mahallinde" },
          { arabic: "خَلَقَ", transliteration: "ḫaleqa", root: "خ-ل-ق", pos: "fil", meaning_tr: "yarattı", irab_short: "mâzî, I. bâb; sıla cümlesi" },
        ],
      },
      {
        surah: 113, ayah: 3,
        arabic: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
        translation: "Ve karanlığı çöktüğünde gecenin şerrinden,",
        words: [
          { arabic: "وَمِن", transliteration: "ve min", root: null, pos: "harf", meaning_tr: "ve -den", irab_short: "وَ atıf + مِنْ harf-i cer" },
          { arabic: "شَرِّ", transliteration: "şerri", root: "ش-ر-ر", pos: "ism", meaning_tr: "şer", irab_short: "mecrûr, muzâf" },
          { arabic: "غَاسِقٍ", transliteration: "ğâsiqin", root: "غ-س-ق", pos: "ism", meaning_tr: "karanlık, gece", irab_short: "muzâfun ileyh, mecrûr; فَاعِل kalıbı ism-i fâil" },
          { arabic: "إِذَا", transliteration: "izâ", root: null, pos: "harf", meaning_tr: "olduğunda", irab_short: "zaman zarfı, şart" },
          { arabic: "وَقَبَ", transliteration: "veqabe", root: "و-ق-ب", pos: "fil", meaning_tr: "çöktü, girdi", irab_short: "mâzî, I. bâb; مضاف إليه cümlesi" },
        ],
      },
      {
        surah: 113, ayah: 4,
        arabic: "وَمِن شَرِّ ٱلنَّفَّـٰثَـٰتِ فِى ٱلْعُقَدِ",
        translation: "Ve düğümlere üfleyenlerin şerrinden,",
        words: [
          { arabic: "وَمِن", transliteration: "ve min", root: null, pos: "harf", meaning_tr: "ve -den", irab_short: "atıf + cer" },
          { arabic: "شَرِّ", transliteration: "şerri", root: "ش-ر-ر", pos: "ism", meaning_tr: "şer", irab_short: "mecrûr, muzâf" },
          { arabic: "ٱلنَّفَّـٰثَـٰتِ", transliteration: "en-neffâsâti", root: "ن-ف-ث", pos: "ism", meaning_tr: "üfleyenler (kadınlar)", irab_short: "muzâfun ileyh; فَعَّالَات = mübalağa müennes çoğul" },
          { arabic: "فِى", transliteration: "fî", root: null, pos: "harf", meaning_tr: "-de, -da", irab_short: "harf-i cer, zarfiyet" },
          { arabic: "ٱلْعُقَدِ", transliteration: "el-uqedi", root: "ع-ق-د", pos: "ism", meaning_tr: "düğümler", irab_short: "mecrûr; فُعَل cem-i teksîr" },
        ],
      },
      {
        surah: 113, ayah: 5,
        arabic: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
        translation: "Ve haset ettiğinde hasetçinin şerrinden.",
        words: [
          { arabic: "وَمِن", transliteration: "ve min", root: null, pos: "harf", meaning_tr: "ve -den", irab_short: "atıf + cer" },
          { arabic: "شَرِّ", transliteration: "şerri", root: "ش-ر-ر", pos: "ism", meaning_tr: "şer", irab_short: "mecrûr, muzâf" },
          { arabic: "حَاسِدٍ", transliteration: "ḥâsidin", root: "ح-س-د", pos: "ism", meaning_tr: "haset eden", irab_short: "muzâfun ileyh; فَاعِل ism-i fâil, nekira" },
          { arabic: "إِذَا", transliteration: "izâ", root: null, pos: "harf", meaning_tr: "olduğunda", irab_short: "zaman zarfı, şart" },
          { arabic: "حَسَدَ", transliteration: "ḥasede", root: "ح-س-د", pos: "fil", meaning_tr: "haset etti", irab_short: "mâzî, I. bâb" },
        ],
      },
    ],
    grammarNotes: [
      { title: "أَعُوذُ: I. Bâb Muzâri", explanation: "أَعُوذُ: ع-و-ذ kökünden I. bâb muzâri (عَاذَ/يَعُوذُ). Hemze müzâri eki (أَنَا). Ecvef-vâvî fiil: mâzîde وَ elif'e dönüşür (عَاذَ), muzâride وَ kalır (يَعُوذُ). بِ harf-i cerri ile: 'birine sığınmak' (تعدية).", rule: "عَاذَ/يَعُوذُ = sığındı/sığınır\nأَعُوذُ = ben sığınırım\nEcvef-vâvî: mâzî وَ → ا, muzâri وَ kalır", examples: ["أَعُوذُ بِاللَّهِ — Allah'a sığınırım", "فَاسْتَعِذْ بِاللَّهِ — Allah'a sığın (X. bâb emr, 16:98)"] },
      { title: "مِنْ شَرِّ Tekrar Yapısı", explanation: "مِنْ شَرِّ ibaresi surede dört kez tekrarlanır (2-5. ayetler). Her tekrarda farklı bir şer kaynağı zikredilir: genel yaratılış → kozmik (gece) → insanî (sihir) → psikolojik (haset). Bu tedricî yapı (genel → özel) şerrin katmanlarını somutlaştırır.", rule: "مِنْ شَرِّ مَا خَلَقَ — genel\nمِنْ شَرِّ غَاسِقٍ — kozmik\nمِنْ شَرِّ النَّفَّاثَاتِ — sihir/insanî\nمِنْ شَرِّ حَاسِدٍ — psikolojik", examples: ["4 kez مِنْ شَرِّ tekrarı: tedricî tahsîs (genel → özel)"] },
      { title: "النَّفَّاثَات: فَعَّالَات Mübalağa Müennes Çoğul", explanation: "النَّفَّاثَات: ن-ف-ث (üfürmek) kökünden. فَعَّال mübalağa kalıbı + ات müennes çoğul eki. 'Çok üfleyenler (kadınlar).' Mübalağa: sıradan üfürmek değil, ısrarla ve tekrarla yapılan büyü eylemi. عُقَد ise ع-ق-د kökünden فُعَل cem-i teksîr.", rule: "نَفَثَ (üfürdü) → نَفَّاث (çok üfüren)\nنَفَّاثَات = müennes çoğul mübalağa\nعُقَد = düğümler (عُقْدَة'nin cem-i teksîri)", examples: ["النَّفَّاثَاتِ فِي العُقَدِ — 113:4", "خَلَّاق (çok yaratan) — فَعَّال mübalağa (36:81)"] },
    ],
    exercises: [
      { id: "L52-Q01", type: "root_extract", question: "أَعُوذُ fiilinin kökü nedir?", targetWord: "أَعُوذُ", options: ["ع-و-ذ (sığınmak)", "ع-ذ-ب (azap etmek)", "أ-و-ذ (kök yok)", "ع-و-د (dönmek)"], correct: 0, explanation: "عَاذَ/يَعُوذُ: ع-و-ذ kökünden I. bâb ecvef-vâvî. أَعُوذُ'daki أَ birinci tekil muzâri ekidir, kökün parçası değil.", relatedRoots: ["ع-و-ذ"] },
      { id: "L52-Q02", type: "wazn_match", question: "النَّفَّاثَات kelimesinin kalıbı nedir?", targetWord: "النَّفَّاثَات", options: ["فَعَّالَات — mübalağa müennes çoğul", "فَاعِلَات — ism-i fâil çoğul", "مُفَعِّلَات — II. bâb ism-i fâil çoğul", "فَعِيلَات — sıfat çoğul"], correct: 0, explanation: "نَفَّاثَات: ن-ف-ث + فَعَّال (mübalağa) + ات (müennes cem). 'Sürekli ve ısrarla üfleyenler.' فَعَّال kalıbı meslek veya ısrarlı eylem ifade eder.", relatedRoots: ["ن-ف-ث"] },
      { id: "L52-Q03", type: "fill_blank", question: "Boşluğu doldurun: وَمِن شَرِّ _____ إِذَا حَسَدَ (113:5)", answer: "حَاسِدٍ", hint: "ح-س-د kökünden ism-i fâil", options: ["حَاسِدٍ", "حَسُودٍ", "حَسَدٍ", "مَحْسُودٍ"], correct: 0, explanation: "حَاسِدٍ: ح-س-د kökünden فَاعِل kalıbı ism-i fâil. 'Haset eden.' Nekira: herhangi bir hasetçi (تعميم).", relatedRoots: ["ح-س-د"] },
      { id: "L52-Q04", type: "single_choice", question: "Surede مِنْ شَرِّ tekrarı hangi belâgat tekniğidir?", options: ["Tekrar (tikrâr) + tedricî tahsîs (genel → özel)", "Seci' (kafiye)", "Tıbâk (zıtlık)", "Tevriye (iki anlamlılık)"], correct: 0, explanation: "مِنْ شَرِّ dört kez tekrarlanır: (1) genel yaratılış, (2) gece/karanlık, (3) sihir, (4) haset. Her adımda şer daha somut ve spesifik hale gelir. Bu tedricî tahsîs (progressive specification) olarak bilinir.", relatedRoots: [] },
      { id: "L52-Q05", type: "single_choice", question: "الفَلَقِ kelimesinin temel anlamı nedir?", options: ["Yarılma, sabah aydınlığı (karanlığı yaran ışık)", "Gece, karanlık", "Yıldız, gezegen", "Rüzgâr, fırtına"], correct: 0, explanation: "فَلَقَ (yardı) → الفَلَق (yarılma, sabah). Sabah karanlığı yararak gelir. Allah'ın فَالِقُ الإِصْبَاحِ (sabahı yaran, 6:96) sıfatıyla bağlantılı.", relatedRoots: ["ف-ل-ق"] },
      { id: "L52-Q06", type: "matching", question: "Felak suresindeki şer kaynaklarını eşleştirin:", pairs: [{ left: "مَا خَلَقَ", right: "Genel yaratılış" }, { left: "غَاسِقٍ إِذَا وَقَبَ", right: "Kozmik karanlık" }, { left: "النَّفَّاثَاتِ", right: "Sihir/büyü" }, { left: "حَاسِدٍ", right: "Psikolojik kötülük" }], explanation: "Dört şer kaynağı genel → özel sırasıyla: tüm yaratılış → gece/karanlık → sihir → haset.", relatedRoots: ["ش-ر-ر"] },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DERS 53 — NÂS SURESİ (114:1-6)
  // ═══════════════════════════════════════════════════════════
  {
    id: "L53-nas",
    title: "Nâs Suresi (1-6)",
    titleAr: "سُورَةُ النَّاس",
    stage: 2,
    level: 6,
    surah: 114,
    description: "İkinci muavvize. رَبِّ/مَلِكِ/إِلَهِ üçlü ilâhî sıfat tedricî yapısı. الوَسْوَاس الخَنَّاس فَعَّال kalıpları. مِنَ الجِنَّةِ وَالنَّاسِ cinas. İnsanın iç dünyasına yönelik korunma.",
    verses: [
      {
        surah: 114, ayah: 1,
        arabic: "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ",
        translation: "De ki: İnsanların Rabbine sığınırım.",
        words: [
          { arabic: "قُلْ", transliteration: "kul", root: "ق-و-ل", pos: "fil", meaning_tr: "de", irab_short: "emr" },
          { arabic: "أَعُوذُ", transliteration: "eûzu", root: "ع-و-ذ", pos: "fil", meaning_tr: "sığınırım", irab_short: "muzâri, I. bâb" },
          { arabic: "بِرَبِّ", transliteration: "bi-rabbi", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbine", irab_short: "câr-mecrûr, muzâf" },
          { arabic: "ٱلنَّاسِ", transliteration: "en-nâsi", root: "ن-و-س", pos: "ism", meaning_tr: "insanlar", irab_short: "muzâfun ileyh, mecrûr" },
        ],
      },
      {
        surah: 114, ayah: 2,
        arabic: "مَلِكِ ٱلنَّاسِ",
        translation: "İnsanların Melikine (hükümdarına),",
        words: [
          { arabic: "مَلِكِ", transliteration: "meliki", root: "م-ل-ك", pos: "ism", meaning_tr: "melik, hükümdar", irab_short: "bedel veya sıfat, mecrûr; فَعِل kalıbı" },
          { arabic: "ٱلنَّاسِ", transliteration: "en-nâsi", root: "ن-و-س", pos: "ism", meaning_tr: "insanlar", irab_short: "muzâfun ileyh" },
        ],
      },
      {
        surah: 114, ayah: 3,
        arabic: "إِلَـٰهِ ٱلنَّاسِ",
        translation: "İnsanların İlahına (sığınırım),",
        words: [
          { arabic: "إِلَـٰهِ", transliteration: "ilâhi", root: "أ-ل-ه", pos: "ism", meaning_tr: "ilah, mabud", irab_short: "bedel veya sıfat, mecrûr" },
          { arabic: "ٱلنَّاسِ", transliteration: "en-nâsi", root: "ن-و-س", pos: "ism", meaning_tr: "insanlar", irab_short: "muzâfun ileyh" },
        ],
      },
      {
        surah: 114, ayah: 4,
        arabic: "مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ",
        translation: "Sinsi vesvesecinin şerrinden,",
        words: [
          { arabic: "مِن", transliteration: "min", root: null, pos: "harf", meaning_tr: "-den", irab_short: "harf-i cer" },
          { arabic: "شَرِّ", transliteration: "şerri", root: "ش-ر-ر", pos: "ism", meaning_tr: "şer", irab_short: "mecrûr, muzâf" },
          { arabic: "ٱلْوَسْوَاسِ", transliteration: "el-vesvâsi", root: "و-س-و-س", pos: "ism", meaning_tr: "vesveseci", irab_short: "muzâfun ileyh; فَعْلَال kalıbı (tekrar kökten mübalağa)" },
          { arabic: "ٱلْخَنَّاسِ", transliteration: "el-ḫannâsi", root: "خ-ن-س", pos: "ism", meaning_tr: "sinsi, geri çekilen", irab_short: "sıfat; فَعَّال mübalağa" },
        ],
      },
      {
        surah: 114, ayah: 5,
        arabic: "ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ",
        translation: "O ki insanların göğüslerine (kalplerine) vesvese verir,",
        words: [
          { arabic: "ٱلَّذِى", transliteration: "ellezî", root: null, pos: "ism", meaning_tr: "o ki", irab_short: "ism-i mevsûl, sıfat mahallinde" },
          { arabic: "يُوَسْوِسُ", transliteration: "yüvesvisu", root: "و-س-و-س", pos: "fil", meaning_tr: "vesvese verir", irab_short: "muzâri, rubâî (فَعْلَلَ/يُفَعْلِلُ) — tekrar kök" },
          { arabic: "فِى", transliteration: "fî", root: null, pos: "harf", meaning_tr: "-de", irab_short: "harf-i cer" },
          { arabic: "صُدُورِ", transliteration: "ṣudûri", root: "ص-د-ر", pos: "ism", meaning_tr: "göğüsler, kalpler", irab_short: "mecrûr, muzâf; فُعُول cem-i teksîr" },
          { arabic: "ٱلنَّاسِ", transliteration: "en-nâsi", root: "ن-و-س", pos: "ism", meaning_tr: "insanlar", irab_short: "muzâfun ileyh" },
        ],
      },
      {
        surah: 114, ayah: 6,
        arabic: "مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ",
        translation: "(O vesveseci) cinlerden ve insanlardandır.",
        words: [
          { arabic: "مِنَ", transliteration: "mine", root: null, pos: "harf", meaning_tr: "-den", irab_short: "harf-i cer, beyâniyye (açıklama)" },
          { arabic: "ٱلْجِنَّةِ", transliteration: "el-cinneti", root: "ج-ن-ن", pos: "ism", meaning_tr: "cinler", irab_short: "mecrûr; örtülü/gizli varlıklar" },
          { arabic: "وَٱلنَّاسِ", transliteration: "ve'n-nâsi", root: "ن-و-س", pos: "ism", meaning_tr: "ve insanlar", irab_short: "atıf, mecrûr" },
        ],
      },
    ],
    grammarNotes: [
      { title: "Üçlü İlâhî Sıfat: رَبّ → مَلِك → إِلَه", explanation: "Sure üç ayrı ilâhî sıfatı tedricî sırayla sunar: (1) رَبّ = terbiye eden, yetiştiren (yakınlık), (2) مَلِك = hükümdar, otorite (yönetim), (3) إِلَه = ibadet edilen (ulûhiyet). Her sıfat bir üst makama çıkar. Bu üçlü sığınmanın kapsamlılığını gösterir: hem Rabbim hem Melikim hem İlahım olana sığınırım.", rule: "رَبِّ النَّاسِ → terbiye/bakım boyutu\nمَلِكِ النَّاسِ → hâkimiyet/yönetim boyutu\nإِلَهِ النَّاسِ → ibâdet/ulûhiyet boyutu\nTedricî yükseliş (ascending tricolon)", examples: ["رَبّ → مَلِك → إِلَه sıralaması (114:1-3)"] },
      { title: "الوَسْوَاس: Tekrar Kök (Rubâî)", explanation: "وَسْوَسَ/يُوَسْوِسُ rubâî (dört harfli) fiildir. Kökü و-س-و-س: 'ses' kökünün tekrarı ile 'fısıldama, iç sese' anlamı oluşur. فَعْلَال (وَسْوَاس) kalıbı hem masdar (vesvese eylemi) hem sıfat-ı müşebbehe (vesveseci) olabilir. Arapçada kök tekrarı ısrar ve süreklilik ifade eder.", rule: "و-س-و-س = tekrar kök (reduplicated root)\nفَعْلَال kalıbı: وَسْوَاس = vesveseci/vesvese\nيُوَسْوِسُ = rubâî muzâri (يُفَعْلِلُ)", examples: ["الوَسْوَاس الخَنَّاس — 114:4", "وَسْوَسَ لَهُمَا الشَّيْطَانُ — 7:20", "زَلْزَلَة (sarsıntı) — z-l-z-l tekrar kök"] },
      { title: "الخَنَّاس: فَعَّال Mübalağa", explanation: "الخَنَّاس: خ-ن-س (geri çekilmek, sinmek) kökünden فَعَّال mübalağa kalıbı. 'Sürekli geri çekilen, sinsi.' Şeytanın stratejisini özetler: insan Allah'ı anınca geri çekilir (خَنَسَ), gaflete düşünce tekrar yaklaşır. فَعَّال kalıbı bu ısrarlı ileri-geri hareketi vurgular.", rule: "خَنَسَ = geri çekildi, sindi\nخَنَّاس = sürekli geri çekilen (فَعَّال mübalağa)\nDikkat: شَيْطَان kelimesi surede geçmez — sıfatlarıyla tanımlanır", examples: ["الوَسْوَاسِ الخَنَّاسِ — 114:4", "كَذَّاب (çok yalancı), غَفَّار (çok bağışlayan) — فَعَّال"] },
    ],
    exercises: [
      { id: "L53-Q01", type: "single_choice", question: "رَبّ → مَلِك → إِلَه sıralaması hangi belâgat tekniğini yansıtır?", options: ["Tedricî yükseliş (ascending tricolon): yakınlıktan ulûhiyete", "Tedricî iniş: genelden özele", "Tıbâk: zıt kavramlar", "Leff ü neşr: dağıtma ve toplama"], correct: 0, explanation: "Üç sıfat giderek artan bir makam dizisi sunar: terbiye (en yakın) → hâkimiyet (otorite) → ibâdet (en yüce). Bu ascending tricolon / tedricî yükseliş olarak bilinir.", relatedRoots: ["ر-ب-ب", "م-ل-ك", "أ-ل-ه"] },
      { id: "L53-Q02", type: "wazn_match", question: "الخَنَّاس kelimesinin kalıbı ve kök anlamı nedir?", targetWord: "الخَنَّاس", options: ["فَعَّال — خ-ن-س: geri çekilmek (mübalağa: sürekli sinen)", "فَاعِل — خ-ن-س: ism-i fâil", "فَعِيل — خ-ن-س: sıfat-ı müşebbehe", "مُفَعِّل — II. bâb ism-i fâil"], correct: 0, explanation: "خَنَّاس: خ-ن-س kökünden فَعَّال mübalağa. Şeytanın temel stratejisi: zikir duyunca geri çekilir, gaflet gelince sokulur. Sürekli ileri-geri.", relatedRoots: ["خ-ن-س"] },
      { id: "L53-Q03", type: "fill_blank", question: "Boşluğu doldurun: مِن شَرِّ _____ الخَنَّاسِ (114:4)", answer: "الوَسْوَاسِ", hint: "و-س-و-س tekrar kökünden", options: ["الوَسْوَاسِ", "الوَسُوسِ", "المُوَسْوِسِ", "الوَاسِسِ"], correct: 0, explanation: "الوَسْوَاس: و-س-و-س tekrar kökünden فَعْلَال kalıbı. Hem 'vesvese' (masdar) hem 'vesveseci' (sıfat) anlamı taşır.", relatedRoots: ["و-س-و-س"] },
      { id: "L53-Q04", type: "single_choice", question: "مِنَ الجِنَّةِ وَالنَّاسِ (114:6) ifadesindeki الجِنَّة ile النَّاس arasındaki edebî ilişki nedir?", options: ["Cinas-ı nâkıs / tezâd: الجِنَّة (gizli) ↔ النَّاس (görünen) + ses benzerliği", "Tıbâk: yalnızca zıtlık", "Teşbîh: benzetme", "Seci': kafiye uyumu"], correct: 0, explanation: "الجِنَّة (ج-ن-ن: gizli) ve النَّاس (ن-و-س: hareket eden/görünen). Hem anlam zıtlığı (gizli ↔ açık) hem ses yakınlığı (cinas-ı nâkıs). Ayrıca النَّاس kelimesi surede altı kez geçer — surenin anahtar kelimesi.", relatedRoots: ["ج-ن-ن", "ن-و-س"] },
      { id: "L53-Q05", type: "matching", question: "Nâs suresindeki kavramları eşleştirin:", pairs: [{ left: "رَبِّ النَّاسِ", right: "Terbiye boyutu" }, { left: "مَلِكِ النَّاسِ", right: "Yönetim boyutu" }, { left: "إِلَهِ النَّاسِ", right: "İbadet boyutu" }, { left: "الوَسْوَاسِ الخَنَّاسِ", right: "Sinsi vesveseci" }], explanation: "Üç ilâhî sıfat tedricî yükselişle sığınmanın kapsamlılığını, son ibare ise sığınılan tehlikeyi tanımlar.", relatedRoots: ["ر-ب-ب", "م-ل-ك", "أ-ل-ه", "و-س-و-س"] },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DERS 54 — DUHÂ-İNŞİRÂH BİRLEŞİK (93+94)
  // ═══════════════════════════════════════════════════════════
  {
    id: "L54-duha-insirah",
    title: "Duhâ & İnşirâh — İkiz Sureler",
    titleAr: "سُورَتَا الضُّحَى وَالشَّرْح",
    stage: 2,
    level: 6,
    surah: 93,
    description: "Tematik ikiz sureler. Kasem → Nefi → Teselli → Emir kalıbı. مَا وَدَّعَكَ / أَلَمْ نَشْرَحْ paralel yapısı. İstifhâm-ı inkârî, تَكْرِير (مَعَ العُسْرِ يُسْرًا), iltifât analizi. Seviye 2-3'teki temel bilginin karşılaştırmalı derinliği.",
    verses: [
      {
        surah: 93, ayah: 1,
        arabic: "وَٱلضُّحَىٰ",
        translation: "Kuşluk vaktine andolsun,",
        words: [
          { arabic: "وَٱلضُّحَىٰ", transliteration: "ve'd-duḥâ", root: "ض-ح-و", pos: "ism", meaning_tr: "kuşluk vakti", irab_short: "وَ kasem + مُقْسَمٌ بِهِ (yemin edilen); mecrûr" },
        ],
      },
      {
        surah: 93, ayah: 2,
        arabic: "وَٱلَّيْلِ إِذَا سَجَىٰ",
        translation: "Ve karanlığı çöktüğünde geceye,",
        words: [
          { arabic: "وَٱلَّيْلِ", transliteration: "ve'l-leyli", root: "ل-ي-ل", pos: "ism", meaning_tr: "gece", irab_short: "atıf, kasem; mecrûr" },
          { arabic: "إِذَا", transliteration: "izâ", root: null, pos: "harf", meaning_tr: "olduğunda", irab_short: "zaman zarfı" },
          { arabic: "سَجَىٰ", transliteration: "secâ", root: "س-ج-و", pos: "fil", meaning_tr: "örtüldü, karardı", irab_short: "mâzî, nâkıs; sükûnet anlamı da var" },
        ],
      },
      {
        surah: 93, ayah: 3,
        arabic: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ",
        translation: "Rabbin seni terk etmedi ve darılmadı.",
        words: [
          { arabic: "مَا", transliteration: "mâ", root: null, pos: "harf", meaning_tr: "değil (nefi)", irab_short: "harf-i nefi" },
          { arabic: "وَدَّعَكَ", transliteration: "veddeake", root: "و-د-ع", pos: "fil", meaning_tr: "seni terk etti", irab_short: "mâzî, II. bâb (تَفْعِيل → وَدَّعَ); كَ mef'ûl" },
          { arabic: "رَبُّكَ", transliteration: "rabbuke", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbin", irab_short: "fâil, merfû, muzâf + zamîr" },
          { arabic: "وَمَا", transliteration: "ve mâ", root: null, pos: "harf", meaning_tr: "ve olmadı", irab_short: "atıf + nefi" },
          { arabic: "قَلَىٰ", transliteration: "qalâ", root: "ق-ل-ي", pos: "fil", meaning_tr: "darıldı, buğz etti", irab_short: "mâzî, I. bâb, nâkıs; mef'ûl hazf (seni)" },
        ],
      },
      {
        surah: 93, ayah: 11,
        arabic: "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ",
        translation: "Ve Rabbinin nimetine gelince, onu anlat!",
        words: [
          { arabic: "وَأَمَّا", transliteration: "ve emmâ", root: null, pos: "harf", meaning_tr: "gelince", irab_short: "şart-tafṣîl edatı" },
          { arabic: "بِنِعْمَةِ", transliteration: "bi-ni'meti", root: "ن-ع-م", pos: "ism", meaning_tr: "nimetiyle", irab_short: "câr-mecrûr, muzâf" },
          { arabic: "رَبِّكَ", transliteration: "rabbike", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbinin", irab_short: "muzâfun ileyh" },
          { arabic: "فَحَدِّثْ", transliteration: "fe-ḥaddiṡ", root: "ح-د-ث", pos: "fil", meaning_tr: "anlat", irab_short: "emr, II. bâb; فَ cevâb-ı şart" },
        ],
      },
      {
        surah: 94, ayah: 1,
        arabic: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ",
        translation: "Senin göğsünü açmadık mı?",
        words: [
          { arabic: "أَلَمْ", transliteration: "e-lem", root: null, pos: "harf", meaning_tr: "değil mi", irab_short: "أ istifhâm + لَمْ nefi → istifhâm-ı inkârî (takrirî)" },
          { arabic: "نَشْرَحْ", transliteration: "neşraḥ", root: "ش-ر-ح", pos: "fil", meaning_tr: "açtık, genişlettik", irab_short: "muzâri, I. bâb, meczûm (لَمْ ile); نَ = 1. çoğul" },
          { arabic: "لَكَ", transliteration: "leke", root: null, pos: "harf", meaning_tr: "senin için", irab_short: "câr-mecrûr" },
          { arabic: "صَدْرَكَ", transliteration: "ṣadreke", root: "ص-د-ر", pos: "ism", meaning_tr: "göğsünü", irab_short: "mef'ûlun bih, mansûb, muzâf + zamîr" },
        ],
      },
      {
        surah: 94, ayah: 5,
        arabic: "فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
        translation: "Muhakkak ki zorluğun yanında kolaylık vardır.",
        words: [
          { arabic: "فَإِنَّ", transliteration: "fe-inne", root: null, pos: "harf", meaning_tr: "çünkü muhakkak", irab_short: "فَ ta'lîl + إِنَّ te'kîd" },
          { arabic: "مَعَ", transliteration: "mea", root: null, pos: "harf", meaning_tr: "ile birlikte, yanında", irab_short: "zarf, mansûb (mekân zarfı)" },
          { arabic: "ٱلْعُسْرِ", transliteration: "el-usri", root: "ع-س-ر", pos: "ism", meaning_tr: "zorluk", irab_short: "muzâfun ileyh, mecrûr; elif-lâm: ahd (bilinen zorluk)" },
          { arabic: "يُسْرًا", transliteration: "yüsren", root: "ي-س-ر", pos: "ism", meaning_tr: "kolaylık", irab_short: "ism-i inne, mansûb veya mübtedâ; tenvîn: nekira" },
        ],
      },
      {
        surah: 94, ayah: 6,
        arabic: "إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
        translation: "Muhakkak ki zorluğun yanında kolaylık vardır.",
        words: [
          { arabic: "إِنَّ", transliteration: "inne", root: null, pos: "harf", meaning_tr: "muhakkak", irab_short: "te'kîd" },
          { arabic: "مَعَ", transliteration: "mea", root: null, pos: "harf", meaning_tr: "yanında", irab_short: "zarf" },
          { arabic: "ٱلْعُسْرِ", transliteration: "el-usri", root: "ع-س-ر", pos: "ism", meaning_tr: "zorluk", irab_short: "mecrûr; elif-lâm ile marife → aynı zorluk" },
          { arabic: "يُسْرًا", transliteration: "yüsren", root: "ي-س-ر", pos: "ism", meaning_tr: "kolaylık", irab_short: "mansûb; tenvîn ile nekira → farklı kolaylık" },
        ],
      },
    ],
    grammarNotes: [
      { title: "İstifhâm-ı İnkârî: أَلَمْ نَشْرَحْ", explanation: "أَ (soru) + لَمْ (nefi) = olumsuzun olumsuzu → güçlü olumlu: 'Elbette açtık!' İstifhâm-ı inkârî (takrirî) olarak bilinir. Muhatabı düşünmeye ve 'evet' demeye davet eder. İnşirâh suresinin ilk dört ayeti bu kalıpla başlar.", rule: "أَلَمْ + muzâri (meczûm) = retorikal soru\nAnlamı: 'Elbette yaptık, inkâr edemezsin'\nDouble negation → strong affirmation", examples: ["أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ — 94:1", "أَلَمْ يَجِدْكَ يَتِيمًا — 93:6 (benzer kalıp, farklı yapı)"] },
      { title: "العُسْر (Marife) ↔ يُسْرًا (Nekira) Tekrarı", explanation: "5. ve 6. ayetlerde العُسْر elif-lâm ile (marife), يُسْرًا tenvîn ile (nekira) gelir. Kaide: 'Marife tekrar edilince aynı şeye, nekira tekrar edilince farklı şeye işaret eder.' Yani TEK zorluk vardır ama İKİ kolaylık: لَنْ يَغْلِبَ عُسْرٌ يُسْرَيْنِ (bir zorluk iki kolaylığı yenemez).", rule: "العُسْر × 2 (marife) = aynı zorluk (tek)\nيُسْرًا × 2 (nekira) = iki farklı kolaylık\nKaide: marife tekrarı = aynı, nekira tekrarı = farklı", examples: ["فَإِنَّ مَعَ العُسْرِ يُسْرًا — 94:5", "إِنَّ مَعَ العُسْرِ يُسْرًا — 94:6"] },
      { title: "İkiz Sure Yapısı: Duhâ ↔ İnşirâh", explanation: "Bu iki sure tematik ikiz kabul edilir (bazı fakihler namazda birleştirmeyi önerir): Duhâ = dış dünyaya teselli (يتيم → الآخرة خير), İnşirâh = iç dünyaya teselli (صدر → مع العسر يسرا). Her ikisi de (1) geçmiş nimet hatırlatma → (2) şimdiki teselli → (3) gelecek müjde → (4) eylem emri yapısını izler.", rule: "Duhâ: kasem → nefi → nimet → emir (93:1-11)\nİnşirâh: istifhâm → nimet → va'd → emir (94:1-8)\nOrtak yapı: hatırlatma → teselli → müjde → görev", examples: ["وَدَّعَكَ ↔ نَشْرَحْ — paralel nefi + olumlu", "فَحَدِّثْ (93:11) ↔ فَانْصَبْ (94:7) — paralel emir"] },
    ],
    exercises: [
      { id: "L54-Q01", type: "single_choice", question: "أَلَمْ نَشْرَحْ yapısı neden 'Elbette açtık' anlamını verir?", options: ["İstifhâm-ı inkârî: soru + nefi = güçlü olumlu (olumsuzun olumsuzlanması)", "Temenni: 'keşke açsaydık' anlamında", "Şart: 'eğer açtıysak' anlamında", "Nefi: 'açmadık' anlamında"], correct: 0, explanation: "أَ (soru edatı) + لَمْ (nefi) birleşince 'yapmadık mı?' → 'elbette yaptık' anlamını verir. Double negation güçlü onay üretir. Muhatabı tasdike davet eden retorikal soru.", relatedRoots: ["ش-ر-ح"] },
      { id: "L54-Q02", type: "single_choice", question: "94:5-6'da العُسْر (marife) iki kez, يُسْرًا (nekira) iki kez gelir. Bu ne anlama gelir?", options: ["Tek zorluk, iki kolaylık: marife tekrar = aynı, nekira tekrar = farklı", "İki zorluk, iki kolaylık: eşit sayıda", "Tek zorluk, tek kolaylık: tekrar sadece te'kîd", "Sonsuz zorluk, sonsuz kolaylık: mübalağa"], correct: 0, explanation: "Arapça dilbilgisi kuralı: marife tekrarlanınca aynı şeye, nekira tekrarlanınca farklı şeye delâlet eder. Bu yüzden العُسْر (×2) = tek zorluk, يُسْرًا (×2) = iki ayrı kolaylık.", relatedRoots: ["ع-س-ر", "ي-س-ر"] },
      { id: "L54-Q03", type: "fill_blank", question: "Boşluğu doldurun: مَا _____ رَبُّكَ وَمَا قَلَى (93:3)", answer: "وَدَّعَكَ", hint: "و-د-ع kökünden II. bâb mâzî + zamîr", options: ["وَدَّعَكَ", "وَدَعَكَ", "يُوَدِّعُكَ", "تَوْدِيعَكَ"], correct: 0, explanation: "وَدَّعَكَ: و-د-ع kökünden II. bâb (تَوْدِيع = uğurlama, veda → terk etme). مَا وَدَّعَكَ = seni terk etmedi. كَ zamiri doğrudan mef'ûl.", relatedRoots: ["و-د-ع"] },
      { id: "L54-Q04", type: "balagha_identify", question: "Duhâ ve İnşirâh surelerinin 'ikiz sure' sayılmasının temel nedeni nedir?", options: ["Paralel yapı: her ikisi de nimet hatırlatma → teselli → müjde → emir kalıbını izler", "Aynı kelimeler kullanılır", "Aynı sure olarak kabul edilir", "Sadece kafiye benzerliği"], correct: 0, explanation: "Her iki sure de dört aşamalı aynı yapıyı izler: (1) hatırlatma (kasem/istifhâm), (2) nimet/teselli, (3) müjde/va'd, (4) eylem emri (فَحَدِّثْ / فَانْصَبْ). Bu yapısal paralellik 'ikiz sure' tespitinin temelidir.", relatedRoots: [] },
      { id: "L54-Q05", type: "matching", question: "İkiz sure paralelliklerini eşleştirin:", pairs: [{ left: "مَا وَدَّعَكَ (93:3)", right: "أَلَمْ نَشْرَحْ (94:1)" }, { left: "الآخِرَةُ خَيْرٌ (93:4)", right: "مَعَ العُسْرِ يُسْرًا (94:5)" }, { left: "فَحَدِّثْ (93:11)", right: "فَانْصَبْ (94:7)" }], explanation: "Her iki surede paralel yapısal roller: nefi/teselli → müjde/va'd → emr. Duhâ dış dünyaya, İnşirâh iç dünyaya yönelik.", relatedRoots: [] },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DERS 55 — ALAK SURESİ TAM (96:1-19)
  // ═══════════════════════════════════════════════════════════
  {
    id: "L55-alak-full",
    title: "Alak — İlk Vahiy, Tam Analiz",
    titleAr: "سُورَةُ العَلَق — تَحْلِيل شَامِل",
    stage: 2,
    level: 6,
    surah: 96,
    description: "İlk inen 5 ayet (1-5) + sonraki kısım (6-19). اِقْرَأْ emr, خَلَقَ/عَلَّمَ tekrarı, كَلَّا reddi, rü'yet ve nasihat yapısı. Tedricî vahiy bağlamında sure bütünlüğü. Uzun sure analizi becerisi.",
    verses: [
      {
        surah: 96, ayah: 1,
        arabic: "ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ",
        translation: "Yaratan Rabbinin adıyla oku!",
        words: [
          { arabic: "ٱقْرَأْ", transliteration: "iqre'", root: "ق-ر-أ", pos: "fil", meaning_tr: "oku", irab_short: "emr, I. bâb; mehmûz" },
          { arabic: "بِٱسْمِ", transliteration: "bismi", root: "س-م-و", pos: "ism", meaning_tr: "adıyla", irab_short: "câr-mecrûr, muzâf" },
          { arabic: "رَبِّكَ", transliteration: "rabbike", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbinin", irab_short: "muzâfun ileyh" },
          { arabic: "ٱلَّذِى", transliteration: "ellezî", root: null, pos: "ism", meaning_tr: "o ki", irab_short: "ism-i mevsûl, sıfat" },
          { arabic: "خَلَقَ", transliteration: "ḫaleqa", root: "خ-ل-ق", pos: "fil", meaning_tr: "yarattı", irab_short: "mâzî, I. bâb; sıla cümlesi, mef'ûl hazf" },
        ],
      },
      {
        surah: 96, ayah: 2,
        arabic: "خَلَقَ ٱلْإِنسَـٰنَ مِنْ عَلَقٍ",
        translation: "İnsanı alak'tan (asılı embriyodan) yarattı.",
        words: [
          { arabic: "خَلَقَ", transliteration: "ḫaleqa", root: "خ-ل-ق", pos: "fil", meaning_tr: "yarattı", irab_short: "mâzî; tekrar — ilkinde genel, burada özel" },
          { arabic: "ٱلْإِنسَـٰنَ", transliteration: "el-insâne", root: "أ-ن-س", pos: "ism", meaning_tr: "insan", irab_short: "mef'ûlun bih, mansûb" },
          { arabic: "مِنْ", transliteration: "min", root: null, pos: "harf", meaning_tr: "-den (ibtidâ)", irab_short: "harf-i cer" },
          { arabic: "عَلَقٍ", transliteration: "alaqin", root: "ع-ل-ق", pos: "ism", meaning_tr: "asılı kan pıhtısı, embriyo", irab_short: "mecrûr; فَعَل masdar/isim" },
        ],
      },
      {
        surah: 96, ayah: 3,
        arabic: "ٱقْرَأْ وَرَبُّكَ ٱلْأَكْرَمُ",
        translation: "Oku! Rabbin en cömert olandır.",
        words: [
          { arabic: "ٱقْرَأْ", transliteration: "iqre'", root: "ق-ر-أ", pos: "fil", meaning_tr: "oku", irab_short: "emr, tekrar — te'kîd ve yeni bilgi" },
          { arabic: "وَرَبُّكَ", transliteration: "ve rabbuke", root: "ر-ب-ب", pos: "ism", meaning_tr: "ve Rabbin", irab_short: "وَ hâliyye/isti'nâf + mübtedâ" },
          { arabic: "ٱلْأَكْرَمُ", transliteration: "el-ekremu", root: "ك-ر-م", pos: "ism", meaning_tr: "en cömert, en kerem sahibi", irab_short: "haber, merfû; أَفْعَل tafdîl (mutlak)" },
        ],
      },
      {
        surah: 96, ayah: 4,
        arabic: "ٱلَّذِى عَلَّمَ بِٱلْقَلَمِ",
        translation: "Kalemle öğreten,",
        words: [
          { arabic: "ٱلَّذِى", transliteration: "ellezî", root: null, pos: "ism", meaning_tr: "o ki", irab_short: "ism-i mevsûl, sıfat" },
          { arabic: "عَلَّمَ", transliteration: "alleme", root: "ع-ل-م", pos: "fil", meaning_tr: "öğretti", irab_short: "mâzî, II. bâb (ta'lîm); iki mef'ûl alır" },
          { arabic: "بِٱلْقَلَمِ", transliteration: "bil-qalemi", root: "ق-ل-م", pos: "ism", meaning_tr: "kalemle", irab_short: "câr-mecrûr, âlet" },
        ],
      },
      {
        surah: 96, ayah: 5,
        arabic: "عَلَّمَ ٱلْإِنسَـٰنَ مَا لَمْ يَعْلَمْ",
        translation: "İnsana bilmediğini öğretti.",
        words: [
          { arabic: "عَلَّمَ", transliteration: "alleme", root: "ع-ل-م", pos: "fil", meaning_tr: "öğretti", irab_short: "mâzî, II. bâb; tekrar — te'kîd" },
          { arabic: "ٱلْإِنسَـٰنَ", transliteration: "el-insâne", root: "أ-ن-س", pos: "ism", meaning_tr: "insana", irab_short: "mef'ûl 1, mansûb" },
          { arabic: "مَا", transliteration: "mâ", root: null, pos: "ism", meaning_tr: "ne, şey", irab_short: "ism-i mevsûl, mef'ûl 2 mahallinde" },
          { arabic: "لَمْ", transliteration: "lem", root: null, pos: "harf", meaning_tr: "olmadı", irab_short: "harf-i cezm" },
          { arabic: "يَعْلَمْ", transliteration: "ya'lem", root: "ع-ل-م", pos: "fil", meaning_tr: "bildi", irab_short: "muzâri, meczûm (لَمْ ile); sıla" },
        ],
      },
      {
        surah: 96, ayah: 6,
        arabic: "كَلَّآ إِنَّ ٱلْإِنسَـٰنَ لَيَطْغَىٰٓ",
        translation: "Hayır! İnsan mutlaka azar,",
        words: [
          { arabic: "كَلَّآ", transliteration: "kellâ", root: null, pos: "harf", meaning_tr: "hayır, asla", irab_short: "reddi harf, zecr ve intikal (konudan konuya geçiş)" },
          { arabic: "إِنَّ", transliteration: "inne", root: null, pos: "harf", meaning_tr: "muhakkak", irab_short: "te'kîd" },
          { arabic: "ٱلْإِنسَـٰنَ", transliteration: "el-insâne", root: "أ-ن-س", pos: "ism", meaning_tr: "insan", irab_short: "ism-i inne, mansûb" },
          { arabic: "لَيَطْغَىٰٓ", transliteration: "le-yaṭğâ", root: "ط-غ-ي", pos: "fil", meaning_tr: "azar, taşkınlık yapar", irab_short: "لَ te'kîd + muzâri, nâkıs; haber-i inne cümlesi" },
        ],
      },
      {
        surah: 96, ayah: 9,
        arabic: "أَرَءَيْتَ ٱلَّذِى يَنْهَىٰ",
        translation: "Gördün mü o engel olanı,",
        words: [
          { arabic: "أَرَءَيْتَ", transliteration: "ere'eyte", root: "ر-أ-ي", pos: "fil", meaning_tr: "gördün mü", irab_short: "أ istifhâm + mâzî; ta'accüb/inkâr" },
          { arabic: "ٱلَّذِى", transliteration: "ellezî", root: null, pos: "ism", meaning_tr: "o ki", irab_short: "ism-i mevsûl, mef'ûl" },
          { arabic: "يَنْهَىٰ", transliteration: "yenhâ", root: "ن-ه-ي", pos: "fil", meaning_tr: "engel olur", irab_short: "muzâri, I. bâb, nâkıs; sıla" },
        ],
      },
      {
        surah: 96, ayah: 19,
        arabic: "كَلَّا لَا تُطِعْهُ وَٱسْجُدْ وَٱقْتَرِبْ ۩",
        translation: "Hayır! Ona itaat etme, secde et ve yaklaş!",
        words: [
          { arabic: "كَلَّا", transliteration: "kellâ", root: null, pos: "harf", meaning_tr: "hayır, asla", irab_short: "reddi + zecr" },
          { arabic: "لَا", transliteration: "lâ", root: null, pos: "harf", meaning_tr: "yapma", irab_short: "lâ-yı nâhiye (nehi)" },
          { arabic: "تُطِعْهُ", transliteration: "tuṭi'hu", root: "ط-و-ع", pos: "fil", meaning_tr: "ona itaat et", irab_short: "muzâri, IV. bâb (أَطَاعَ), meczûm (لَا ile); ه mef'ûl" },
          { arabic: "وَٱسْجُدْ", transliteration: "ve'scud", root: "س-ج-د", pos: "fil", meaning_tr: "secde et", irab_short: "emr, I. bâb" },
          { arabic: "وَٱقْتَرِبْ", transliteration: "ve'qterib", root: "ق-ر-ب", pos: "fil", meaning_tr: "yaklaş", irab_short: "emr, VIII. bâb (اِفْتَعَلَ); Allah'a yaklaş" },
        ],
      },
    ],
    grammarNotes: [
      { title: "اِقْرَأْ: Mehmûz Emr", explanation: "اِقْرَأْ: ق-ر-أ kökünden I. bâb emr. Mehmûz fiil (son harf hemze). Kur'an'ın ilk emri. İki kez tekrarlanır (1. ve 3. ayet): ilk اِقْرَأْ mutlak emr, ikincisi gerekçeyle birlikte (Rabbin en cömert olduğu için oku).", rule: "قَرَأَ/يَقْرَأُ → اِقْرَأْ (emr)\nMehmûz: hemze korunur (أ)\n1. tekrar: emr, 2. tekrar: ta'lîl ile (وَرَبُّكَ الأَكْرَمُ)", examples: ["اِقْرَأْ بِاسْمِ رَبِّكَ — 96:1", "اِقْرَأْ وَرَبُّكَ الأَكْرَمُ — 96:3"] },
      { title: "كَلَّا: Keskin Red ve Geçiş", explanation: "كَلَّا Kur'an'da 33 kez geçer, sadece Mekkî surelerde bulunur. İki işlevi vardır: (1) Zecr (red/uyarı): 'Hayır, asla!' (2) İntikal: konudan konuya geçiş. Alak suresinde 6. ayetteki كَلَّا nimet anlatımından tuğyan uyarısına geçişi, 19. ayetteki كَلَّا ise tehditten emre geçişi sağlar.", rule: "كَلَّا = red + geçiş edatı\nSadece Mekkî surelerde (33 kez)\nAlak: 6. ayet (nimet → tuğyan) + 19. ayet (tehdit → emr)", examples: ["كَلَّا إِنَّ الإِنْسَانَ لَيَطْغَى — 96:6", "كَلَّا لَا تُطِعْهُ — 96:19", "كَلَّا سَوْفَ تَعْلَمُونَ — 102:3"] },
      { title: "خَلَقَ / عَلَّمَ Tekrar Yapısı", explanation: "Sure iki ana fiili tekrarlar: خَلَقَ (yarattı, 1-2) ve عَلَّمَ (öğretti, 4-5). Yaratma → Öğretme tedricî yapısı: önce fiziksel varlık (عَلَق), sonra bilgi (القَلَم → مَا لَمْ يَعْلَمْ). Bu ikili yapı ilahi pedagojinin özeti: var etmek + donatmak.", rule: "خَلَقَ × 2: genel (1) → özel (2: insanı alak'tan)\nعَلَّمَ × 2: araçla (4: kalemle) → mutlak (5: bilmediğini)\nTedricî yapı: yaratma → donatma", examples: ["خَلَقَ...خَلَقَ الإِنْسَانَ — 96:1-2", "عَلَّمَ بِالقَلَمِ...عَلَّمَ الإِنْسَانَ — 96:4-5"] },
    ],
    exercises: [
      { id: "L55-Q01", type: "single_choice", question: "اِقْرَأْ fiilinin iki kez tekrarlanmasının belâgat hikmeti nedir?", options: ["İlk tekrar: mutlak emr; ikinci tekrar: ta'lîl (gerekçe) ile — 'Rabbin en cömert, o halde oku'", "Sadece te'kîd (vurgu) amaçlı tekrar", "İlki geçmiş, ikincisi gelecek zamanı ifade eder", "Farklı fiillerdir: biri قَرَأَ, diğeri قَرَّأَ"], correct: 0, explanation: "1. اِقْرَأْ (96:1) mutlak emirdir. 3. اِقْرَأْ (96:3) ise وَرَبُّكَ الأَكْرَمُ cümlesiyle gerekçelendirilir: 'Oku, çünkü Rabbin en cömert.' İkinci tekrar yeni bilgi ekler.", relatedRoots: ["ق-ر-أ"] },
      { id: "L55-Q02", type: "bab_identify", question: "عَلَّمَ (öğretti) hangi bâbtandır?", targetWord: "عَلَّمَ", options: ["II. bâb (فَعَّلَ): عَلِمَ → عَلَّمَ (ta'diye: bilgi verme)", "I. bâb: عَلَمَ", "IV. bâb: أَعْلَمَ", "V. bâb: تَعَلَّمَ"], correct: 0, explanation: "عَلَّمَ: ع-ل-م kökünden II. bâb (تَفْعِيل). I. bâb عَلِمَ (bildi) → II. bâb عَلَّمَ (bildirdi, öğretti). Ta'diye (geçişli yapma) ve teksîr (çokluk) anlamı taşır.", relatedRoots: ["ع-ل-م"] },
      { id: "L55-Q03", type: "fill_blank", question: "Boşluğu doldurun: كَلَّا لَا تُطِعْهُ وَاسْجُدْ وَ_____ (96:19)", answer: "اقْتَرِبْ", hint: "ق-ر-ب kökünden VIII. bâb emr", options: ["اقْتَرِبْ", "قَرِّبْ", "تَقَرَّبْ", "أَقْرِبْ"], correct: 0, explanation: "اِقْتَرِبْ: ق-ر-ب kökünden VIII. bâb (اِفْتَعَلَ) emr. 'Allah'a yaklaş.' Secde ile birlikte emredilmesi, secdenin yakınlık aracı olduğunu gösterir (أَقْرَبُ مَا يَكُونُ العَبْدُ مِنْ رَبِّهِ وَهُوَ سَاجِد).", relatedRoots: ["ق-ر-ب"] },
      { id: "L55-Q04", type: "single_choice", question: "كَلَّا edatının Kur'an'daki özel durumu nedir?", options: ["Sadece Mekkî surelerde kullanılır (33 kez), Medenî surelerde hiç geçmez", "Sadece Medenî surelerde bulunur", "Hem Mekkî hem Medenî surelerde eşit dağılır", "Sadece Alak suresine özeldir"], correct: 0, explanation: "كَلَّا yalnızca Mekkî surelerde 33 kez geçer. Bu, onun Mekke dönemindeki inkârcılara yönelik sert üslûbun bir parçası olduğunu gösterir. Medine döneminde üslûp değişir.", relatedRoots: [] },
      { id: "L55-Q05", type: "bab_identify", question: "اقْتَرِبْ (yaklaş) hangi bâbtandır?", targetWord: "اقْتَرِبْ", options: ["VIII. bâb (اِفْتَعَلَ): ق-ر-ب → اِقْتَرَبَ (yaklaştı)", "I. bâb: قَرُبَ", "II. bâb: قَرَّبَ", "V. bâb: تَقَرَّبَ"], correct: 0, explanation: "اِقْتَرَبَ: ق-ر-ب + VIII. bâb (اِفْتَعَلَ). Mutâva'a (kendiliğinden yapma) anlamı taşır: قَرَّبَ (yaklaştırdı) → اِقْتَرَبَ (kendisi yaklaştı). Emr: اِقْتَرِبْ.", relatedRoots: ["ق-ر-ب"] },
      { id: "L55-Q06", type: "matching", question: "Alak suresinin yapısal bölümlerini eşleştirin:", pairs: [{ left: "1-5. ayetler", right: "İlk vahiy: yaratma + öğretme" }, { left: "6-8. ayetler", right: "İnsanın tuğyanı (azgınlık)" }, { left: "9-18. ayetler", right: "Engel olanın kınanması" }, { left: "19. ayet", right: "Red + secde + yakınlık emri" }], explanation: "Sure dört yapısal bölümden oluşur: (1) ilahi nimet ve bilgi, (2) insanın nankörlüğü, (3) engelcinin akıbeti, (4) çözüm: secde ile Allah'a yaklaşma.", relatedRoots: [] },
    ],
  },
];

export default level6Lessons;
