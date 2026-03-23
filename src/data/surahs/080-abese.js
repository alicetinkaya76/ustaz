// ═══════════════════════════════════════════════════════════
// ABESE SURESİ (80) — Surah-Format Ders Dosyası
// v0.23.0: 4 bölüm (S80-B01 … S80-B04), 42 ayet tam kapsam
// ═══════════════════════════════════════════════════════════
//
// Cüz 30 (Amme), Mekkî, 42 ayet
// Tematik: Hz. Peygamber'e uyarı (âmâ hadisesi),
//          Kur'an'ın şerefi, yaratılış + nimet + kıyamet
//
// Yapısal akış:
//   B01 (1-10):  Uyarı — gaib→muhatap iltifâtı, أَمَّا tafṣîli
//   B02 (11-23): Kur'an'ın şerefi + insanın yaratılış safhaları
//   B03 (24-32): Nimetler listesi (yiyecek + bitkiler)
//   B04 (33-42): Sâhha (kıyamet), iki yüz tipi
// ═══════════════════════════════════════════════════════════

import {
  generateRootQuiz,
  generateBabQuiz,
  generateWaznQuiz,
  generateFillBlank,
  generateBalaghaQuiz,
  generateIrabQuiz,
} from "../../utils/quizGenerator.js";

const abeseLessons = [
  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 1 — ABESE 80:1-10 — Hz. Peygamber'e Uyarı
  // ═══════════════════════════════════════════════════════════
  {
    id: "S80-B01-abese",
    title: "Abese (1-10) — Yüzünü Asıp Çevirdi",
    titleAr: "سُورَةُ عَبَسَ ١-١٠",
    stage: 2,
    level: 8,
    surah: 80,
    description:
      "Hz. Peygamber'e uyarı: âmâ gelince yüzünü asmak. Gaib→muhatap iltifâtı, أَمَّا tafṣîli (müstağnî↔samimi karşıtlığı). V. bâb (تَصَدَّى, تَوَلَّى, تَزَكَّى), X. bâb (اِسْتَغْنَى), meçhul fiil.",
    verses: [
      {
        surah: 80, ayah: 1,
        arabic: "عَبَسَ وَتَوَلَّىٰ",
        translation: "Yüzünü asıp çevirdi",
        words: [
          { arabic: "عَبَسَ", transliteration: "ʿabasa", root: "ع-ب-س", pattern: "فَعَلَ", pos: "fil", meaning_tr: "yüzünü astı", irab: "{Fiil-i mâzî}, I. bâb. {Fâil}: hüve (Hz. Peygamber — gaib olarak).", irab_short: "mâzî, gaib", turkish_bridge: "'Abus' (somurtkan) kelimesi bu kökten", balagha_note: "Hz. Peygamber gaib (3. şahıs) olarak anlatılıyor → {iltifat}: doğrudan suçlama yerine dolaylı anlatım → ta'zîm." },
          { arabic: "وَتَوَلَّىٰ", transliteration: "wa tawallā", root: "و-ل-ي", pattern: "تَفَعَّلَ", pos: "fil", meaning_tr: "yüz çevirdi", irab: "وَ {atıf} + تَوَلَّى: {fiil-i mâzî}, V. bâb. و-ل-ي: yakınlaşmak → V. bâb: uzaklaşmak.", irab_short: "mâzî, V. bâb", turkish_bridge: "Veli, velâyet, mevlâ bu kökten", balagha_note: "İki fiil peş peşe: yüzünü astı + yüz çevirdi → eylemin yoğunlaşması (teksîr)." },
        ],
      },
      {
        surah: 80, ayah: 2,
        arabic: "أَن جَآءَهُ ٱلْأَعْمَىٰ",
        translation: "Yanına kör (olan Abdullah) geldi diye",
        words: [
          { arabic: "أَن", transliteration: "an", root: null, pos: "harf", meaning_tr: "…diye, çünkü", irab: "{Harf-i masdarî}: sebebiye.", irab_short: "masdariye, sebebiye", turkish_bridge: null, balagha_note: null },
          { arabic: "جَآءَهُ", transliteration: "jāʾahu", root: "ج-ي-أ", pos: "fil", meaning_tr: "ona geldi", irab: "{Fiil-i mâzî}, I. bâb. هُ: mef'ûl bih (= Hz. Peygamber'e).", irab_short: "mâzî + zamîr", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلْأَعْمَىٰ", transliteration: "al-aʿmā", root: "ع-م-ي", pattern: "أَفْعَل", pos: "ism", meaning_tr: "kör (olan kişi)", irab: "{Fâil}, {merfû}. أَفْعَل: renk-kusur sıfatı.", irab_short: "fâil, merfû", turkish_bridge: "A'mâ (kör) Türkçeye geçmiş", balagha_note: "الأَعْمَى denmesi: ismi değil, sıfatı ile anılıyor → özrünü vurgulayarak 'böyle birine mi yüzünü astın?' mesajı." },
        ],
      },
      {
        surah: 80, ayah: 3,
        arabic: "وَمَا يُدْرِيكَ لَعَلَّهُ يَزَّكَّىٰ",
        translation: "Nereden bileceksin, belki o arınacaktı",
        words: [
          { arabic: "وَمَا", transliteration: "wa mā", root: null, pos: "harf", meaning_tr: "ve ne", irab: "وَ isti'nâf + مَا istifhâm.", irab_short: "istifhâm", turkish_bridge: null, balagha_note: null },
          { arabic: "يُدْرِيكَ", transliteration: "yudrīka", root: "د-ر-ي", pattern: "يُفْعِلُ", pos: "fil", meaning_tr: "sana bildirir", irab: "{Muzâri}, IV. bâb + كَ mef'ûl. 'Sana ne bildirir?' = Nereden bileceksin?", irab_short: "muzâri, IV. bâb", turkish_bridge: null, balagha_note: "Gaib anlatımdan (عَبَسَ) muhatap'a (يُدْرِيكَ) geçiş → {iltifat}: artık doğrudan sesleniyor." },
          { arabic: "لَعَلَّهُ", transliteration: "laʿallahu", root: null, pos: "harf+zamir", meaning_tr: "belki o", irab: "لَعَلَّ: inne kardeşi (tera'ccî = ümit) + هُ ism-i inne.", irab_short: "tera'ccî + zamîr", turkish_bridge: null, balagha_note: null },
          { arabic: "يَزَّكَّىٰ", transliteration: "yazzakkā", root: "ز-ك-و", pattern: "يَتَفَعَّلُ", pos: "fil", meaning_tr: "arınır, temizlenir", irab: "{Muzâri}, V. bâb (تَزَكَّى → يَتَزَكَّى, تاء idğâm olmuş). {Haber-i laʿalla}.", irab_short: "muzâri, V. bâb", turkish_bridge: "Zekât, tezkiye bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 80, ayah: 4,
        arabic: "أَوْ يَذَّكَّرُ فَتَنفَعَهُ ٱلذِّكْرَىٰ",
        translation: "Ya da öğüt alır da hatırlama ona fayda verir",
        words: [
          { arabic: "أَوْ", transliteration: "aw", root: null, pos: "harf", meaning_tr: "veya", irab_short: "atıf", turkish_bridge: null, balagha_note: null },
          { arabic: "يَذَّكَّرُ", transliteration: "yaḏḏakkaru", root: "ذ-ك-ر", pattern: "يَتَفَعَّلُ", pos: "fil", meaning_tr: "hatırlar, öğüt alır", irab: "{Muzâri}, V. bâb (تَذَكَّرَ, تاء idğâm). Haber-i laʿalla.", irab_short: "muzâri, V. bâb", turkish_bridge: "Zikir, tezkire, müzakere bu kökten", balagha_note: null },
          { arabic: "فَتَنفَعَهُ", transliteration: "fa-tanfaʿahu", root: "ن-ف-ع", pos: "fil", meaning_tr: "da ona fayda verir", irab: "فَ sebebiye + تَنْفَعَ {muzâri, mansûb (أَنْ takdîrî)} + هُ mef'ûl.", irab_short: "mansûb muzâri", turkish_bridge: "Nef', menfaat bu kökten", balagha_note: null },
          { arabic: "ٱلذِّكْرَىٰ", transliteration: "aḏ-ḏikrā", root: "ذ-ك-ر", pattern: "فِعْلَى", pos: "ism", meaning_tr: "hatırlama, öğüt", irab: "{Fâil} (تَنفَع'ın), {merfû}.", irab_short: "fâil, merfû", turkish_bridge: null, balagha_note: "İki ihtimal: arınır (يَزَّكَّى) VEYA öğüt alır (يَذَّكَّرُ) — ikisi de değerli, ikisini de kaçırdın." },
        ],
      },
      {
        surah: 80, ayah: 5,
        arabic: "أَمَّا مَنِ ٱسْتَغْنَىٰ",
        translation: "Kendini müstağnî gören kimseye gelince",
        words: [
          { arabic: "أَمَّا", transliteration: "ammā", root: null, pos: "harf", meaning_tr: "…gelince, …ise", irab: "{Tafṣîl edatı}: konuyu gruplara ayırır. İlk grup: müstağnî.", irab_short: "tafṣîl", turkish_bridge: null, balagha_note: "أَمَّا...فَ yapısı: iki grup karşılaştırılıyor. 5-6: müstağnî → ona yöneldin. 8-10: samimi → onu ihmal ettin." },
          { arabic: "مَنِ", transliteration: "mani", root: null, pos: "ism", meaning_tr: "kim, kişi", irab: "İsm-i mevsûl: 'kim ki.' أَمَّا'nın şartı.", irab_short: "ism-i mevsûl", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱسْتَغْنَىٰ", transliteration: "istaġnā", root: "غ-ن-ي", pattern: "اِسْتَفْعَلَ", pos: "fil", meaning_tr: "kendini yeterli gördü", irab: "{Mâzî}, X. bâb. Sıla cümlesi.", irab_short: "mâzî, X. bâb", turkish_bridge: "Ganî, istiğnâ bu kökten", balagha_note: "X. bâb 'kendini öyle zannetme': kendini Allah'tan müstağnî saydı. Alak 96:7'de aynı fiil." },
        ],
      },
      {
        surah: 80, ayah: 6,
        arabic: "فَأَنتَ لَهُ تَصَدَّىٰ",
        translation: "Sen ona yöneliyorsun",
        words: [
          { arabic: "فَأَنتَ", transliteration: "fa-anta", root: null, pos: "harf+zamir", meaning_tr: "sen ise", irab: "فَ: أَمَّا'nın cevabı. أَنْتَ: {mübtedâ}.", irab_short: "cevap + mübtedâ", turkish_bridge: null, balagha_note: null },
          { arabic: "لَهُ", transliteration: "lahu", root: null, pos: "harf+zamir", meaning_tr: "ona", irab: "لِ cer + هُ zamîr.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "تَصَدَّىٰ", transliteration: "taṣaddā", root: "ص-د-ي", pattern: "تَفَعَّلَ", pos: "fil", meaning_tr: "yöneliyorsun", irab: "{Muzâri}, V. bâb. Aslı: تَتَصَدَّى — iki tâ'dan biri hazf. صَدَا (yöneldi) → تَصَدَّى (özenle yöneldi). {Haber} (أَنتَ'nin).", irab_short: "muzâri, V. bâb, haber", turkish_bridge: null, balagha_note: null },
        ],
      },
      {
        surah: 80, ayah: 7,
        arabic: "وَمَا عَلَيْكَ أَلَّا يَزَّكَّىٰ",
        translation: "Onun arınmamasından sana ne?",
        words: [
          { arabic: "وَمَا", transliteration: "wa mā", root: null, pos: "harf", meaning_tr: "ve yok", irab: "وَ hâliye + مَا nâfiye.", irab_short: "nefiy", turkish_bridge: null, balagha_note: null },
          { arabic: "عَلَيْكَ", transliteration: "ʿalayka", root: null, pos: "harf+zamir", meaning_tr: "senin üzerine", irab: "عَلَى cer + كَ zamîr. {Haber} (mahallen merfû).", irab_short: "câr-mecrûr, haber", turkish_bridge: null, balagha_note: null },
          { arabic: "أَلَّا", transliteration: "allā", root: null, pos: "harf", meaning_tr: "…maması", irab: "أَنْ {masdariye} + لَا {nefiy}. 'Arınmaması senin sorumluluğun değil.'", irab_short: "masdariye + nefiy", turkish_bridge: null, balagha_note: "Peygamber'in sorumluluğu tebliğdir, hidayet değil. Müstağnînin arınmaması Peygamber'e yüklenmez." },
          { arabic: "يَزَّكَّىٰ", transliteration: "yazzakkā", root: "ز-ك-و", pattern: "يَتَفَعَّلُ", pos: "fil", meaning_tr: "arınır", irab: "Muzâri, V. bâb (تَزَكَّى). أَنْ masdar cümlesi içinde.", irab_short: "muzâri, V. bâb", turkish_bridge: null, balagha_note: null },
        ],
      },
      {
        surah: 80, ayah: 8,
        arabic: "وَأَمَّا مَن جَآءَكَ يَسْعَىٰ",
        translation: "Ama sana koşarak gelen kimseye gelince",
        words: [
          { arabic: "وَأَمَّا", transliteration: "wa ammā", root: null, pos: "harf", meaning_tr: "ama …gelince", irab: "وَ atıf + أَمَّا tafṣîl. İkinci grup: samimi gelen.", irab_short: "atıf + tafṣîl", turkish_bridge: null, balagha_note: "İkinci أَمَّا: birincisinin (5) tam zıttı. Müstağnî → sen yöneldin; samimi → sen ihmal ettin. Tıbâk." },
          { arabic: "مَن", transliteration: "man", root: null, pos: "ism", meaning_tr: "kim", irab_short: "ism-i mevsûl", turkish_bridge: null, balagha_note: null },
          { arabic: "جَآءَكَ", transliteration: "jāʾaka", root: "ج-ي-أ", pos: "fil", meaning_tr: "sana geldi", irab: "Mâzî + كَ mef'ûl.", irab_short: "mâzî + zamîr", turkish_bridge: null, balagha_note: null },
          { arabic: "يَسْعَىٰ", transliteration: "yasʿā", root: "س-ع-ي", pos: "fil", meaning_tr: "koşarak, çabalayarak", irab: "{Muzâri}, I. bâb, nâkıs. {Hâl} cümlesi: 'koşarak geldi.'", irab_short: "muzâri, hâl", turkish_bridge: "Sa'y (çaba), mes'â (çalışma alanı) bu kökten", balagha_note: "يَسْعَى: koşarak, can atarak geldi. Müstağnî ise çağrılmadan geldi → biri çabalıyor, diğeri umursamıyor." },
        ],
      },
      {
        surah: 80, ayah: 9,
        arabic: "وَهُوَ يَخْشَىٰ",
        translation: "Ve o (Allah'tan) korkarken",
        words: [
          { arabic: "وَهُوَ", transliteration: "wa huwa", root: null, pos: "zamir", meaning_tr: "ve o", irab: "وَ hâliye + هُوَ mübtedâ. 2. hâl cümlesi.", irab_short: "hâl, mübtedâ", turkish_bridge: null, balagha_note: null },
          { arabic: "يَخْشَىٰ", transliteration: "yaḫšā", root: "خ-ش-ي", pos: "fil", meaning_tr: "(Allah'tan) korkar", irab: "{Muzâri}, I. bâb, nâkıs. {Haber} (هُوَ'nun).", irab_short: "muzâri, haber", turkish_bridge: "Haşyet (derin korku, saygı), hâşî bu kökten", balagha_note: "خَشْيَة: sıradan korku değil, bilgiye dayalı saygılı korku. إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ العُلَمَاءُ (35:28)." },
        ],
      },
      {
        surah: 80, ayah: 10,
        arabic: "فَأَنتَ عَنْهُ تَلَهَّىٰ",
        translation: "Sen ondan yüz çeviriyorsun (onu ihmal ediyorsun)",
        words: [
          { arabic: "فَأَنتَ", transliteration: "fa-anta", root: null, pos: "harf+zamir", meaning_tr: "sen ise", irab: "فَ: أَمَّا cevabı + أَنْتَ mübtedâ.", irab_short: "cevap + mübtedâ", turkish_bridge: null, balagha_note: null },
          { arabic: "عَنْهُ", transliteration: "ʿanhu", root: null, pos: "harf+zamir", meaning_tr: "ondan", irab: "عَنْ cer + هُ zamîr.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "تَلَهَّىٰ", transliteration: "talahhā", root: "ل-ه-و", pattern: "تَفَعَّلَ", pos: "fil", meaning_tr: "ilgilenmiyorsun, ihmal ediyorsun", irab: "{Muzâri}, V. bâb (تَلَهَّى). Aslı: تَتَلَهَّى — iki tâ'dan biri hazf edilmiştir. لَهَا (eğlendi, oyalandı) → تَلَهَّى (başka şeyle oyalanıp ihmal etti). {Haber} (أَنتَ'nin).", irab_short: "muzâri, V. bâb, haber", turkish_bridge: "Lehv (oyalanma), lâhî (gafil) bu kökten", balagha_note: "5-6 ↔ 8-10 mükemmel tıbâk: أَمَّا مَنِ اسْتَغْنَى فَأَنتَ لَهُ تَصَدَّى ↔ وَأَمَّا مَن جَاءَكَ يَسْعَى فَأَنتَ عَنْهُ تَلَهَّى. Aynı yapı, zıt içerik." },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "Gaib → Muhatap İltifâtı",
        explanation: "1. ayette عَبَسَ (gaib: yüzünü astı), 3. ayette يُدْرِيكَ (muhatap: sana ne bildirir). Hz. Peygamber önce 3. şahıs olarak anılıp sonra doğrudan muhatap alınıyor → iltifât sanatı. Doğrudan suçlama yerine dolaylı giriş: ta'zîm ve edeb.",
        rule: "عَبَسَ: gaib (3. şahıs) — 'O yüzünü astı'\nيُدْرِيكَ: muhatap (2. şahıs) — 'Sana ne bildirir'\nGaib → muhatap geçişi = iltifât",
        examples: ["عَبَسَ → يُدْرِيكَ (80:1→3)", "إِذَا الشَّمْسُ كُوِّرَتْ → أَيْنَ تَذْهَبُونَ (81:1→26)", "الرَّحْمَـٰنُ → فَبِأَيِّ آلَاءِ رَبِّكُمَا (55:1→13)"],
      },
      {
        title: "أَمَّا...فَ Tafṣîl Yapısı",
        explanation: "أَمَّا bir konuyu gruplara ayıran tafṣîl edatıdır. Cevabı فَ ile gelir. Bu surede ikili tafṣîl: (1) müstağnî → ona yöneldin, (2) samimi gelen → onu ihmal ettin. Duhâ (93), Kâri'a (101), Leyl (92) surelerinde de benzer yapılar var.",
        rule: "أَمَّا + şart + فَ + cevap\nGrup 1: أَمَّا مَنِ اسْتَغْنَى → فَأَنتَ لَهُ تَصَدَّى\nGrup 2: وَأَمَّا مَن جَاءَكَ → فَأَنتَ عَنْهُ تَلَهَّى",
        examples: ["80:5-6 vs 80:8-10 (Abese)", "93:9-11 (Duhâ: üçlü)", "92:5-7 vs 92:8-10 (Leyl: ikili)"],
      },
    ],
    exercises: [
      generateBabQuiz(
        "S80-B01-Q01", "ٱسْتَغْنَىٰ",
        "X. bâb (اِسْتَفْعَلَ): غَنِيَ → اِسْتَغْنَى (kendini müstağnî sandı)",
        ["I. bâb: غَنِيَ", "IV. bâb: أَغْنَى", "V. bâb: تَغَنَّى"],
        "اِسْتَغْنَى: غ-ن-ي kökünden X. bâb. Alak 96:7'de de aynı fiil aynı bağlamda: istiğnâ = tuğyanın sebebi.",
        ["غ-ن-ي"]
      ),
      generateBalaghaQuiz(
        "S80-B01-Q02",
        "1. ayette Hz. Peygamber 3. şahıs (عَبَسَ), 3. ayette 2. şahıs (يُدْرِيكَ) olarak anılır. Bu değişimin adı nedir?",
        "İltifât (bakış açısı değişimi) — gaibden muhataba geçiş → dolaylı giriş, sonra doğrudan hitap",
        ["Tafṣîl (gruplama)", "İcmâl (özetleme)", "Hazf (düşürme)"],
        "عَبَسَ (gaib) → يُدْرِيكَ (muhatap): iltifât sanatı. Önce dolaylı anlatım (ta'zîm), sonra doğrudan sesleniş. Hz. Peygamber'e edepli ama kesin bir uyarı."
      ),
      generateRootQuiz(
        "S80-B01-Q03", "يَزَّكَّىٰ", "ز-ك-و",
        ["ز-ك-ي", "ذ-ك-ر", "ز-ك-م"],
        "يَزَّكَّى: ز-ك-و kökünden V. bâb (تَزَكَّى, تاء idğâm). Zekât, tezkiye, tezakkî bu kökten. Arınma, temizlenme.",
        ["ز-ك-و"]
      ),
      generateFillBlank(
        "S80-B01-Q04",
        "أَمَّا مَنِ اسْتَغْنَى فَأَنتَ لَهُ _____ ・ وَأَمَّا مَن جَاءَكَ يَسْعَى فَأَنتَ عَنْهُ تَلَهَّى",
        "تَصَدَّى", ["تَوَلَّى", "تَصَبَّرَ", "تَعَلَّى"],
        "Müstağnîye 'yöneldin' — hangi fiil?",
        "تَصَدَّى: ص-د-ي kökünden V. bâb. Yüzünü çevirip yönelmek. Zıddı: تَلَهَّى (ihmal etmek). İki أَمَّا cümlesi mükemmel tıbâk oluşturur.",
        ["ص-د-ي"]
      ),
      {
        id: "S80-B01-Q05", type: "single_choice",
        question: "80:2'de الأَعْمَى denmesinin belâgat hikmeti nedir?",
        options: [
          "İsmi yerine sıfatı (körlüğü) anılıyor → özrünü vurgulayarak 'böyle birine mi yüzünü astın?' mesajı",
          "İsminin bilinmediği anlamına gelir",
          "Tüm körleri temsil ettiği için",
          "Manevi körlük kastediliyor",
        ],
        correct: 0,
        explanation: "الأَعْمَى: Abdullah b. Ümmi Mektûm'un ismi değil, sıfatı kullanılmış. Amaç: engelli birine yüz çevirmenin ağırlığını somutlaştırmak. Sıfatın kullanılması kınamayı güçlendiriyor.",
        relatedRoots: ["ع-م-ي"],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 2 — ABESE 80:11-23 — Kur'an'ın Şerefi ve İnsanın Yaratılışı
  // ═══════════════════════════════════════════════════════════
  {
    id: "S80-B02-abese",
    title: "Abese (11-23) — Tezkire ve Yaratılış Safhaları",
    titleAr: "سُورَةُ عَبَسَ ١١-٢٣",
    stage: 2,
    level: 8,
    surah: 80,
    description:
      "كَلَّا: uyarı yeterli, artık prensip. Kur'an'ın 5 sıfatı: tezkire, mükerreme, merfûa, mutahhera, sefere/kiram/berere. İnsanın yaratılış safhaları: nutfe → takdîr → yol kolaylama → ölüm → kabirde bekletme → ba's (diriltme).",
    verses: [
      {
        surah: 80, ayah: 11,
        arabic: "كَلَّآ إِنَّهَا تَذْكِرَةٌ",
        translation: "Hayır! O (ayetler) bir hatırlatmadır (öğüttür)",
        words: [
          { arabic: "كَلَّآ", transliteration: "kallā", root: null, pos: "harf", meaning_tr: "hayır!", irab: "Red + geçiş: kişisel uyarıdan genel prensibe.", irab_short: "red + intikal", turkish_bridge: null, balagha_note: null },
          { arabic: "إِنَّهَا", transliteration: "innahā", root: null, pos: "harf+zamir", meaning_tr: "muhakkak o (ayetler)", irab: "إِنَّ te'kîd + هَا ism-i inne (Kur'an ayetleri).", irab_short: "te'kîd + zamîr", turkish_bridge: null, balagha_note: null },
          { arabic: "تَذْكِرَةٌ", transliteration: "taḏkiratun", root: "ذ-ك-ر", pattern: "تَفْعِلَة", pos: "ism", meaning_tr: "hatırlatma, öğüt", irab: "{Haber-i inne}, {merfû}. Masdar: II. bâb (ذَكَّرَ → تَذْكِرَة).", irab_short: "haber-i inne, merfû", turkish_bridge: "Tezkire, tezkireci bu kökten", balagha_note: "كَلَّا: 1-10 arası kişisel uyarıydı, şimdi genel prensip: bu ayetler tezkire'dir, dileyen alır." },
        ],
      },
      {
        surah: 80, ayah: 12,
        arabic: "فَمَن شَآءَ ذَكَرَهُ",
        translation: "Dileyen onu hatırlar (öğüt alır)",
        words: [
          { arabic: "فَمَن", transliteration: "fa-man", root: null, pos: "harf+ism", meaning_tr: "kim dilerse", irab: "فَ sebebiye + مَنْ şart ismi.", irab_short: "şart", turkish_bridge: null, balagha_note: null },
          { arabic: "شَآءَ", transliteration: "šāʾa", root: "ش-ي-أ", pos: "fil", meaning_tr: "diledi", irab_short: "mâzî, şart fiili", turkish_bridge: null, balagha_note: null },
          { arabic: "ذَكَرَهُ", transliteration: "ḏakarahu", root: "ذ-ك-ر", pos: "fil", meaning_tr: "onu hatırladı", irab: "Mâzî + هُ mef'ûl. Cevâb-ı şart.", irab_short: "mâzî, cevâb-ı şart", turkish_bridge: null, balagha_note: "İnsan iradesi: dileyen alır. Zorlama yok → Kur'an tebliğ eder, hidayet Allah'tandır." },
        ],
      },
      {
        surah: 80, ayah: 13,
        arabic: "فِى صُحُفٍ مُّكَرَّمَةٍ",
        translation: "Değerli sahifelerde (yazılmış)",
        words: [
          { arabic: "فِى", transliteration: "fī", root: null, pos: "harf", meaning_tr: "…de, içinde", irab_short: "harf-i cer", turkish_bridge: null, balagha_note: null },
          { arabic: "صُحُفٍ", transliteration: "ṣuḥufin", root: "ص-ح-ف", pattern: "فُعُل", pos: "ism", meaning_tr: "sahifeler", irab: "{Mecrûr}. صُحُف: صَحِيفَة'nin cem-i teksîri.", irab_short: "mecrûr", turkish_bridge: "Sahife, sahîfe, suhuf bu kökten", balagha_note: null },
          { arabic: "مُّكَرَّمَةٍ", transliteration: "mukarramatin", root: "ك-ر-م", pattern: "مُفَعَّلَة", pos: "ism", meaning_tr: "değerli kılınmış", irab: "{Sıfat}, {mecrûr}. İsm-i mef'ûl, II. bâb: كَرَّمَ → مُكَرَّم.", irab_short: "sıfat, ism-i mef'ûl", turkish_bridge: null, balagha_note: "Sahifelerin 5 sıfatı başlıyor: (1) مُكَرَّمَة (değerli), (2) مَرْفُوعَة (yüce), (3) مُطَهَّرَة (tertemiz), (4) سَفَرَة (elçi melekler), (5) كِرَام بَرَرَة (asil ve iyi)." },
        ],
      },
      {
        surah: 80, ayah: 14,
        arabic: "مَّرْفُوعَةٍ مُّطَهَّرَةٍ",
        translation: "Yüceltilmiş, tertemiz",
        words: [
          { arabic: "مَّرْفُوعَةٍ", transliteration: "marfūʿatin", root: "ر-ف-ع", pattern: "مَفْعُولَة", pos: "ism", meaning_tr: "yüceltilmiş", irab: "{Sıfat 2}, ism-i mef'ûl I. bâb. رَفَعَ: yükseltmek.", irab_short: "sıfat, ism-i mef'ûl", turkish_bridge: "Ref' (yükseltme), merfû bu kökten", balagha_note: null },
          { arabic: "مُّطَهَّرَةٍ", transliteration: "muṭahharatin", root: "ط-ه-ر", pattern: "مُفَعَّلَة", pos: "ism", meaning_tr: "tertemiz (kılınmış)", irab: "{Sıfat 3}, ism-i mef'ûl II. bâb. طَهَّرَ: temizlemek.", irab_short: "sıfat, ism-i mef'ûl", turkish_bridge: "Tahâret, mutahhar bu kökten", balagha_note: "Üç ism-i mef'ûl art arda: مُكَرَّمَة, مَرْفُوعَة, مُطَهَّرَة → her biri Allah tarafından yapılmış bir vasıf (edilgen yapı)." },
        ],
      },
      {
        surah: 80, ayah: 15,
        arabic: "بِأَيْدِى سَفَرَةٍ",
        translation: "Elçi meleklerin elleriyle (yazılmış)",
        words: [
          { arabic: "بِأَيْدِى", transliteration: "bi-aydī", root: "ي-د-ي", pos: "ism", meaning_tr: "elleriyle", irab: "بِ cer + أَيْدِي mecrûr (يَد'in cem'i), muzâf.", irab_short: "câr-mecrûr, muzâf", turkish_bridge: null, balagha_note: null },
          { arabic: "سَفَرَةٍ", transliteration: "safaratin", root: "س-ف-ر", pattern: "فَعَلَة", pos: "ism", meaning_tr: "elçiler, yazıcılar (melekler)", irab: "{Muzâfun ileyh}, {mecrûr}. سَفَرَة: سَافِر'in cem'i (aracı, elçi).", irab_short: "muzâfun ileyh", turkish_bridge: "Sefer, sefir (elçi) bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 80, ayah: 16,
        arabic: "كِرَامٍ بَرَرَةٍ",
        translation: "Değerli, hayırlı (melekler)",
        words: [
          { arabic: "كِرَامٍ", transliteration: "kirāmin", root: "ك-ر-م", pos: "ism", meaning_tr: "değerli, asil", irab: "{Sıfat} (سَفَرَة'nin), {mecrûr}.", irab_short: "sıfat, mecrûr", turkish_bridge: null, balagha_note: "كِرَام: İnfitâr 82:11'de de كِرَامًا كَاتِبِينَ. Melek sıfatı olarak tekrarlanan kelime." },
          { arabic: "بَرَرَةٍ", transliteration: "bararatin", root: "ب-ر-ر", pattern: "فَعَلَة", pos: "ism", meaning_tr: "hayırlı, iyi", irab: "{Sıfat 2}, {mecrûr}. بَرَرَة: بَارّ'ın cem'i. İnfitâr 82:13: أَبْرَار aynı kök.", irab_short: "sıfat, mecrûr", turkish_bridge: "Birr, ebrâr, mebrûr bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 80, ayah: 17,
        arabic: "قُتِلَ ٱلْإِنسَـٰنُ مَآ أَكْفَرَهُ",
        translation: "Kahrolası insan! Ne kadar nankördür!",
        words: [
          { arabic: "قُتِلَ", transliteration: "qutila", root: "ق-ت-ل", pos: "fil", meaning_tr: "kahrolsun, lanetlensin", irab: "{Meçhul mâzî}, I. bâb. Hakiki anlam değil, duâ-i aleyh (beddua/kınama).", irab_short: "meçhul mâzî, duâ-i aleyh", turkish_bridge: "Katl (öldürme) bu kökten", balagha_note: "قُتِلَ: literal 'öldürüldü' değil, 'kahrolsun!' anlamında beddua kalıbı. Kınama ve hayret ifadesi." },
          { arabic: "ٱلْإِنسَـٰنُ", transliteration: "al-insānu", root: "أ-ن-س", pos: "ism", meaning_tr: "insan", irab: "{Nâib-i fâil}, {merfû}.", irab_short: "nâib-i fâil", turkish_bridge: null, balagha_note: null },
          { arabic: "مَآ", transliteration: "mā", root: null, pos: "harf", meaning_tr: "ne kadar!", irab: "İstifhâm (hayret): 'ne kadar!' = مَا أَكْفَرَهُ ta'accübiye.", irab_short: "ta'accüb", turkish_bridge: null, balagha_note: null },
          { arabic: "أَكْفَرَهُ", transliteration: "akfarahu", root: "ك-ف-ر", pattern: "أَفْعَلَ", pos: "fil", meaning_tr: "nankör!", irab: "Ta'accüb kalıbı: مَا أَفْعَلَهُ = 'Ne kadar X!' أَكْفَرَ: küfür/nankörlük.", irab_short: "ta'accüb sîgası", turkish_bridge: "Küfr, küfrân (nankörlük) bu kökten", balagha_note: "مَا أَفْعَلَ: ta'accüb sîgası. 'Ne kadar nankör!' Yaratılış nimetlerine rağmen inkâr → hayret ve kınama." },
        ],
      },
      {
        surah: 80, ayah: 18,
        arabic: "مِنْ أَىِّ شَىْءٍ خَلَقَهُ",
        translation: "Allah onu neden yarattı?",
        words: [
          { arabic: "مِنْ أَىِّ شَىْءٍ", transliteration: "min ayyi šayʾin", root: null, pos: "ism", meaning_tr: "hangi şeyden", irab: "مِنْ cer + أَيِّ mecrûr, muzâf + شَيْءٍ muzâfun ileyh. İstifhâm: 'neden yaratıldı?'", irab_short: "istifhâm + câr-mecrûr", turkish_bridge: null, balagha_note: "Soru retorik: insana başlangıcını hatırlatma → tevâzu dersi." },
          { arabic: "خَلَقَهُ", transliteration: "ḫalaqahu", root: "خ-ل-ق", pos: "fil", meaning_tr: "onu yarattı", irab: "Mâzî + هُ mef'ûl.", irab_short: "mâzî + zamîr", turkish_bridge: null, balagha_note: null },
        ],
      },
      {
        surah: 80, ayah: 19,
        arabic: "مِن نُّطْفَةٍ خَلَقَهُ فَقَدَّرَهُ",
        translation: "Bir nutfeden yarattı da takdir etti (ölçülendirdi)",
        words: [
          { arabic: "مِن نُّطْفَةٍ", transliteration: "min nuṭfatin", root: "ن-ط-ف", pos: "ism", meaning_tr: "bir nutfeden (meniden)", irab: "مِنْ cer + نُطْفَة mecrûr: başlangıç maddesi.", irab_short: "câr-mecrûr", turkish_bridge: "Nutfe (damla, meni) Türkçeye geçmiş", balagha_note: null },
          { arabic: "خَلَقَهُ", transliteration: "ḫalaqahu", root: "خ-ل-ق", pos: "fil", meaning_tr: "onu yarattı", irab_short: "mâzî + zamîr", turkish_bridge: null, balagha_note: null },
          { arabic: "فَقَدَّرَهُ", transliteration: "fa-qaddarahu", root: "ق-د-ر", pattern: "فَعَّلَ", pos: "fil", meaning_tr: "ölçülendirdi, takdir etti", irab: "فَ tertîb + قَدَّرَ II. bâb mâzî + هُ mef'ûl. Her organı, her özelliği ölçüyle belirledi.", irab_short: "mâzî, II. bâb", turkish_bridge: "Kader, takdîr, mukadderat bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 80, ayah: 20,
        arabic: "ثُمَّ ٱلسَّبِيلَ يَسَّرَهُ",
        translation: "Sonra (doğum) yolunu kolaylaştırdı",
        words: [
          { arabic: "ثُمَّ", transliteration: "ṯumma", root: null, pos: "harf", meaning_tr: "sonra", irab: "{Atıf}: terâhî (zaman aralığı).", irab_short: "atıf", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلسَّبِيلَ", transliteration: "as-sabīla", root: "س-ب-ل", pattern: "فَعِيل", pos: "ism", meaning_tr: "yolu", irab: "{Mef'ûl bih}, {mensûb}. Takdîm: السَّبِيلَ يَسَّرَهُ → vurgu 'yol' üzerinde.", irab_short: "mef'ûl bih (mukaddem)", turkish_bridge: "Sebîl, sibâl bu kökten", balagha_note: "السَّبِيل: hem doğum yolu (fiziksel) hem hayat yolu (manevi). Çift anlamlılık." },
          { arabic: "يَسَّرَهُ", transliteration: "yassarahu", root: "ي-س-ر", pattern: "فَعَّلَ", pos: "fil", meaning_tr: "kolaylaştırdı", irab: "II. bâb mâzî + هُ mef'ûl.", irab_short: "mâzî, II. bâb", turkish_bridge: "Yüsr (kolaylık), teysîr bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 80, ayah: 21,
        arabic: "ثُمَّ أَمَاتَهُ فَأَقْبَرَهُ",
        translation: "Sonra onu öldürdü ve kabre koydu",
        words: [
          { arabic: "ثُمَّ أَمَاتَهُ", transliteration: "ṯumma amātahu", root: "م-و-ت", pattern: "أَفْعَلَ", pos: "fil", meaning_tr: "sonra onu öldürdü", irab: "ثُمَّ atıf + أَمَاتَ IV. bâb mâzî + هُ mef'ûl. مَاتَ (öldü, I.) → أَمَاتَ (öldürdü, IV.).", irab_short: "mâzî, IV. bâb", turkish_bridge: "Mevt, îmâte (öldürme) bu kökten", balagha_note: null },
          { arabic: "فَأَقْبَرَهُ", transliteration: "fa-aqbarahu", root: "ق-ب-ر", pattern: "أَفْعَلَ", pos: "fil", meaning_tr: "kabre koydu(rdu)", irab: "فَ tertîb + أَقْبَرَ IV. bâb + هُ mef'ûl. قَبَرَ (gömdü, I.) → أَقْبَرَ (gömülmesini sağladı, IV.).", irab_short: "mâzî, IV. bâb", turkish_bridge: "Kabir, makbere bu kökten", balagha_note: "أَقْبَرَ (IV. bâb) ≠ قَبَرَ (I. bâb). IV. bâb: gömülmesini emretti/sağladı → insana defin şerefi veren Allah'tır." },
        ],
      },
      {
        surah: 80, ayah: 22,
        arabic: "ثُمَّ إِذَا شَآءَ أَنشَرَهُ",
        translation: "Sonra dilediğinde onu diriltir",
        words: [
          { arabic: "ثُمَّ إِذَا شَآءَ", transliteration: "ṯumma iḏā šāʾa", root: "ش-ي-أ", pos: "fil", meaning_tr: "sonra dilediğinde", irab: "ثُمَّ atıf + إِذَا şart zarfı + شَاءَ mâzî.", irab_short: "şart", turkish_bridge: null, balagha_note: null },
          { arabic: "أَنشَرَهُ", transliteration: "anšarahu", root: "ن-ش-ر", pattern: "أَفْعَلَ", pos: "fil", meaning_tr: "onu dirilt(ecekt)ir", irab: "IV. bâb mâzî + هُ. نَشَرَ (yaydı) → أَنْشَرَ (diriltti, hayata döndürdü).", irab_short: "mâzî, IV. bâb", turkish_bridge: "Neşr (yayma), nüşûr (diriliş), menşûr bu kökten", balagha_note: "Yaratılış zinciri: nutfe → takdîr → doğum yolu → ölüm → kabir → diriliş. 6 safha tedricî yapıda." },
        ],
      },
      {
        surah: 80, ayah: 23,
        arabic: "كَلَّا لَمَّا يَقْضِ مَآ أَمَرَهُ",
        translation: "Hayır! Hâlâ ona emredileni yerine getirmedi",
        words: [
          { arabic: "كَلَّا", transliteration: "kallā", root: null, pos: "harf", meaning_tr: "hayır!", irab: "Red: insan hâlâ vazifesini yapmadı.", irab_short: "red", turkish_bridge: null, balagha_note: null },
          { arabic: "لَمَّا", transliteration: "lammā", root: null, pos: "harf", meaning_tr: "henüz, hâlâ …madı", irab: "{Harf-i cezm}: mâzîde başlayıp hâlâ devam eden olumsuzluk. لَمْ'den farkı: devam eden nefiy.", irab_short: "cezm (devam eden nefiy)", turkish_bridge: null, balagha_note: null },
          { arabic: "يَقْضِ", transliteration: "yaqḍi", root: "ق-ض-ي", pos: "fil", meaning_tr: "yerine getirdi", irab: "{Muzâri}, {meczûm} (لَمَّا ile). قَضَى: hüküm verdi, yerine getirdi.", irab_short: "muzâri, meczûm", turkish_bridge: "Kazâ, kadı, iktizâ bu kökten", balagha_note: null },
          { arabic: "مَآ أَمَرَهُ", transliteration: "mā amarahu", root: "أ-م-ر", pos: "fil", meaning_tr: "ona emredileni", irab: "مَا ism-i mevsûl, mef'ûl + أَمَرَ mâzî + هُ zamîr.", irab_short: "ism-i mevsûl + mâzî", turkish_bridge: null, balagha_note: "Tüm bu nimetlere rağmen insan hâlâ emredileni yapmadı. لَمَّا: henüz/hâlâ → ümit kapısı açık: yapabilir ama yapmadı." },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "Ta'accüb Sîgası: مَا أَفْعَلَهُ",
        explanation: "مَا أَكْفَرَهُ (80:17): 'Ne kadar nankör!' Ta'accüb (hayret) kalıbı: مَا أَفْعَلَهُ. مَا: nekre/istifhâm → hayret. أَفْعَلَ: fiil (karşılaştırma yok, mutlak derece). هُ: mef'ûl bih. Bu kalıp Kur'an'da ve Arap dilinde hayret ve kınama ifade eder.",
        rule: "مَا + أَفْعَلَ + ه/ها = 'Ne kadar X!'\nمَا أَكْفَرَهُ = Ne kadar nankör!\nمَا أَصْبَرَهُمْ = Ne kadar sabırlılar! (2:175)",
        examples: ["مَا أَكْفَرَهُ — Ne kadar nankör! (80:17)", "مَا أَصْبَرَهُمْ — Ne kadar sabırlılar! (2:175)", "قُتِلَ الإِنسَانُ — Kahrolası! (beddua kalıbı)"],
      },
      {
        title: "IV. Bâb (أَفْعَلَ) Zinciri: أَمَاتَ → أَقْبَرَ → أَنْشَرَ",
        explanation: "21-22. ayetlerde üç IV. bâb fiil peş peşe: أَمَاتَ (öldürdü), أَقْبَرَ (kabre koydu), أَنْشَرَ (diriltti). IV. bâb burada 'sebebiyet/yapılmasını sağlama' anlamında: Allah öldürür, gömülmesini sağlar, diriltir. Her aşamada fâil Allah.",
        rule: "أَفْعَلَ = sebebiyet / yaptırma / sağlama\nأَمَاتَ: ölümü gerçekleştirdi\nأَقْبَرَ: gömülmesini sağladı (≠ قَبَرَ: gömdü)\nأَنْشَرَ: diriliş gerçekleştirdi",
        examples: ["أَمَاتَ — öldürdü (م-و-ت)", "أَقْبَرَ — kabre koydurdu (ق-ب-ر)", "أَنْشَرَ — diriltti (ن-ش-ر)"],
      },
    ],
    exercises: [
      generateWaznQuiz(
        "S80-B02-Q01", "مُكَرَّمَة",
        "مُفَعَّلَة (ism-i mef'ûl, II. bâb — edilgen: değerli kılınmış)",
        ["مُفَاعِلَة (ism-i fâil, III. bâb)", "مَفْعُولَة (ism-i mef'ûl, I. bâb)", "فَعِيلَة (sıfat-ı müşebbehe)"],
        "مُكَرَّمَة: ك-ر-م + II. bâb ism-i mef'ûl. كَرَّمَ (değerli kıldı) → مُكَرَّم (değerli kılınmış). Müennes: مُكَرَّمَة.",
        ["ك-ر-م"]
      ),
      generateBabQuiz(
        "S80-B02-Q02", "أَقْبَرَهُ",
        "IV. bâb (أَفْعَلَ): قَبَرَ → أَقْبَرَ (kabre koyulmasını sağladı)",
        ["I. bâb: قَبَرَ (gömdü)", "II. bâb: قَبَّرَ", "VII. bâb: اِنْقَبَرَ"],
        "أَقْبَرَ: ق-ب-ر + IV. bâb. I. bâb قَبَرَ = gömdü (insanlar yapar). IV. bâb أَقْبَرَ = gömülmesini emretti/sağladı (Allah yapar). Fark: sebebiyet ve yücelik.",
        ["ق-ب-ر"]
      ),
      {
        id: "S80-B02-Q03", type: "single_choice",
        question: "لَمَّا يَقْضِ (80:23) ile لَمْ يَقْضِ arasındaki fark nedir?",
        options: [
          "لَمَّا: henüz/hâlâ yapmadı (ama yapabilir, ümit var) ↔ لَمْ: yapmadı (salt nefiy)",
          "İkisi aynı anlama gelir",
          "لَمَّا gelecek zaman, لَمْ geçmiş zaman",
          "لَمَّا olumlu, لَمْ olumsuz",
        ],
        correct: 0,
        explanation: "لَمَّا: geçmişte başlayıp hâlâ devam eden olumsuzluk + ümit/beklenti. 'Henüz yapmadı ama yapması bekleniyor.' لَمْ: salt nefiy. Bu ayet ümit kapısını açık bırakır: insan hâlâ emredileni yapabilir.",
        relatedRoots: ["ق-ض-ي"],
      },
      generateRootQuiz(
        "S80-B02-Q04", "أَنشَرَهُ", "ن-ش-ر",
        ["ن-ص-ر", "ن-ش-ز", "ب-ش-ر"],
        "أَنْشَرَ: ن-ش-ر kökünden IV. bâb. Neşr (yayma) → nüşûr (diriliş). Ölümden sonra hayata yeniden 'yayılma/dönme'.",
        ["ن-ش-ر"]
      ),
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 3 — ABESE 80:24-32 — Nimetler: Yiyecek ve Bitkiler
  // ═══════════════════════════════════════════════════════════
  {
    id: "S80-B03-abese",
    title: "Abese (24-32) — Yiyeceğine Baksın!",
    titleAr: "سُورَةُ عَبَسَ ٢٤-٣٢",
    stage: 2,
    level: 8,
    surah: 80,
    description:
      "فَلْيَنظُرِ emri ile nimet listesi başlar: su, toprak, tahıl, üzüm, zeytin, hurma, bahçeler, meyve, ot — insan ve hayvanlar için. Somut nimet tasviri, I. bâb fiil zinciri, hâl ve temyîz.",
    verses: [
      {
        surah: 80, ayah: 24,
        arabic: "فَلْيَنظُرِ ٱلْإِنسَـٰنُ إِلَىٰ طَعَامِهِۦ",
        translation: "İnsan yiyeceğine bir baksın!",
        words: [
          { arabic: "فَلْيَنظُرِ", transliteration: "fal-yanẓuri", root: "ن-ظ-ر", pos: "fil", meaning_tr: "baksın", irab: "فَ sebebiye + لِ lâm-ı emr + يَنْظُرْ muzâri meczûm.", irab_short: "emr (lâm-ı emr)", turkish_bridge: "Nazar (bakış), nazariye, manzara bu kökten", balagha_note: "Emr: 'Yiyeceğine bak!' → somut düşünme daveti. Soyut kavramlardan (yaratılış) somut nimetlere geçiş." },
          { arabic: "ٱلْإِنسَـٰنُ", transliteration: "al-insānu", root: "أ-ن-س", pos: "ism", meaning_tr: "insan", irab: "{Fâil}, {merfû}.", irab_short: "fâil", turkish_bridge: null, balagha_note: null },
          { arabic: "إِلَىٰ طَعَامِهِۦ", transliteration: "ilā ṭaʿāmihī", root: "ط-ع-م", pos: "ism", meaning_tr: "yiyeceğine", irab: "إِلَى cer + طَعَامِ mecrûr, muzâf + هِ muzâfun ileyh.", irab_short: "câr-mecrûr", turkish_bridge: "Ta'âm (yiyecek), ıt'âm (yedirme) bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 80, ayah: 25,
        arabic: "أَنَّا صَبَبْنَا ٱلْمَآءَ صَبًّا",
        translation: "Biz suyu bol bol döktük",
        words: [
          { arabic: "أَنَّا", transliteration: "annā", root: null, pos: "harf", meaning_tr: "muhakkak biz", irab: "أَنَّ masdariye + نَا zamîr (biz). '…diye ki biz'", irab_short: "masdariye + zamîr", turkish_bridge: null, balagha_note: null },
          { arabic: "صَبَبْنَا", transliteration: "ṣababnā", root: "ص-ب-ب", pos: "fil", meaning_tr: "döktük", irab: "Mâzî + نَا fâil zamîri. Muzâaf fiil.", irab_short: "mâzî, I. bâb", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلْمَآءَ", transliteration: "al-māʾa", root: "م-و-ه", pos: "ism", meaning_tr: "suyu", irab: "{Mef'ûl bih}, {mensûb}.", irab_short: "mef'ûl bih", turkish_bridge: null, balagha_note: null },
          { arabic: "صَبًّا", transliteration: "ṣabban", root: "ص-ب-ب", pos: "ism", meaning_tr: "dökme (olarak)", irab: "{Mef'ûl mutlak}, {mensûb}: fiili pekiştiren masdar.", irab_short: "mef'ûl mutlak", turkish_bridge: null, balagha_note: "Mef'ûl mutlak: صَبَبْنَا...صَبًّا → fiil + aynı kökten masdar = vurgu. 'Bol bol, tam anlamıyla döktük.'" },
        ],
      },
      {
        surah: 80, ayah: 26,
        arabic: "ثُمَّ شَقَقْنَا ٱلْأَرْضَ شَقًّا",
        translation: "Sonra toprağı iyice yardık",
        words: [
          { arabic: "ثُمَّ شَقَقْنَا", transliteration: "ṯumma šaqaqnā", root: "ش-ق-ق", pos: "fil", meaning_tr: "sonra yardık", irab: "ثُمَّ atıf + شَقَقْنَا mâzî. Muzâaf fiil.", irab_short: "mâzî, I. bâb", turkish_bridge: "Şakk (yarma), şikâk (ayrılık) bu kökten", balagha_note: null },
          { arabic: "ٱلْأَرْضَ", transliteration: "al-arḍa", root: "أ-ر-ض", pos: "ism", meaning_tr: "toprağı", irab: "Mef'ûl bih, mensûb.", irab_short: "mef'ûl bih", turkish_bridge: null, balagha_note: null },
          { arabic: "شَقًّا", transliteration: "šaqqan", root: "ش-ق-ق", pos: "ism", meaning_tr: "yarma (olarak)", irab: "{Mef'ûl mutlak}: vurgu.", irab_short: "mef'ûl mutlak", turkish_bridge: null, balagha_note: "İkinci mef'ûl mutlak: şَقَقْنَا...شَقًّا. Su + toprak yarılması → bitki çıkışının altyapısı." },
        ],
      },
      {
        surah: 80, ayah: 27, arabic: "فَأَنۢبَتْنَا فِيهَا حَبًّا", translation: "Orada tahıl bitirdik",
        words: [
          { arabic: "فَأَنۢبَتْنَا", transliteration: "fa-anbatnā", root: "ن-ب-ت", pattern: "أَفْعَلَ", pos: "fil", meaning_tr: "bitirdik", irab: "فَ tertîb + أَنْبَتَ IV. bâb + نَا fâil.", irab_short: "mâzî, IV. bâb", turkish_bridge: "Nebât (bitki), inbât bu kökten", balagha_note: null },
          { arabic: "فِيهَا", transliteration: "fīhā", root: null, pos: "harf+zamir", meaning_tr: "orada", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "حَبًّا", transliteration: "ḥabban", root: "ح-ب-ب", pos: "ism", meaning_tr: "tahıl, dane", irab: "Mef'ûl bih, mensûb.", irab_short: "mef'ûl bih", turkish_bridge: "Habb (dane), habîb (sevgili — farklı anlam) bu kökten", balagha_note: "Yedi nimet listesi başlıyor: (1) حَبّ tahıl." },
        ],
      },
      { surah: 80, ayah: 28, arabic: "وَعِنَبًا وَقَضْبًا", translation: "Üzüm ve yonca (yeşillik)",
        words: [
          { arabic: "وَعِنَبًا", transliteration: "wa ʿinaban", root: "ع-ن-ب", pos: "ism", meaning_tr: "üzüm", irab: "Atıf + mef'ûl bih.", irab_short: "mef'ûl bih", turkish_bridge: null, balagha_note: "(2) عِنَب üzüm." },
          { arabic: "وَقَضْبًا", transliteration: "wa qaḍban", root: "ق-ض-ب", pos: "ism", meaning_tr: "yonca, yeşillik", irab: "Atıf + mef'ûl bih. قَضْب: kesilen bitki (yonca/sebze).", irab_short: "mef'ûl bih", turkish_bridge: null, balagha_note: "(3) قَضْب yonca/yeşillik." },
        ],
      },
      { surah: 80, ayah: 29, arabic: "وَزَيْتُونًا وَنَخْلًا", translation: "Zeytin ve hurma ağaçları",
        words: [
          { arabic: "وَزَيْتُونًا", transliteration: "wa zaytūnan", root: "ز-ي-ت", pos: "ism", meaning_tr: "zeytin", irab: "Atıf + mef'ûl bih.", irab_short: "mef'ûl bih", turkish_bridge: "Zeyt (yağ), zeytûn Türkçeye geçmiş", balagha_note: "(4) زَيْتُون zeytin." },
          { arabic: "وَنَخْلًا", transliteration: "wa naḫlan", root: "ن-خ-ل", pos: "ism", meaning_tr: "hurma ağaçları", irab: "Atıf + mef'ûl bih.", irab_short: "mef'ûl bih", turkish_bridge: "Nahl (hurma ağacı), Nahl suresi (16)", balagha_note: "(5) نَخْل hurma." },
        ],
      },
      { surah: 80, ayah: 30, arabic: "وَحَدَآئِقَ غُلْبًا", translation: "Sık ağaçlı bahçeler",
        words: [
          { arabic: "وَحَدَآئِقَ", transliteration: "wa ḥadāʾiqa", root: "ح-د-ق", pos: "ism", meaning_tr: "bahçeler", irab: "Atıf + mef'ûl bih. حَدَائِق: حَدِيقَة'nin cem-i teksîri.", irab_short: "mef'ûl bih", turkish_bridge: "Hadîka (bahçe) bu kökten", balagha_note: "(6) حَدَائِق bahçeler." },
          { arabic: "غُلْبًا", transliteration: "ġulban", root: "غ-ل-ب", pos: "ism", meaning_tr: "sık, gür ağaçlı", irab: "{Sıfat}, {mensûb}. غُلْب: أَغْلَب'in cem'i (kalın gövdeli, sık).", irab_short: "sıfat", turkish_bridge: null, balagha_note: null },
        ],
      },
      { surah: 80, ayah: 31, arabic: "وَفَـٰكِهَةً وَأَبًّا", translation: "Meyve ve otlak",
        words: [
          { arabic: "وَفَـٰكِهَةً", transliteration: "wa fākihatan", root: "ف-ك-ه", pos: "ism", meaning_tr: "meyve", irab: "Atıf + mef'ûl bih.", irab_short: "mef'ûl bih", turkish_bridge: "Fâkihe (meyve), fükâhe (espri) bu kökten", balagha_note: "(7) فَاكِهَة meyve — insan için." },
          { arabic: "وَأَبًّا", transliteration: "wa abban", root: "أ-ب-ب", pos: "ism", meaning_tr: "otlak, çayır", irab: "Atıf + mef'ûl bih. أَبّ: hayvanların yediği ot/çayır.", irab_short: "mef'ûl bih", turkish_bridge: null, balagha_note: "فَاكِهَة (meyve, insanlar için) + أَبّ (otlak, hayvanlar için) → nimet hem insana hem hayvana." },
        ],
      },
      { surah: 80, ayah: 32, arabic: "مَّتَـٰعًا لَّكُمْ وَلِأَنْعَـٰمِكُمْ", translation: "Size ve hayvanlarınıza geçimlik olarak",
        words: [
          { arabic: "مَّتَـٰعًا", transliteration: "matāʿan", root: "م-ت-ع", pos: "ism", meaning_tr: "geçimlik, fayda", irab: "{Hâl} veya mef'ûl li-eclih, {mensûb}. مَتَاع: dünyevi fayda.", irab_short: "hâl / ta'lîl", turkish_bridge: "Meta' (fayda, mal), istimtâ' bu kökten", balagha_note: null },
          { arabic: "لَّكُمْ", transliteration: "lakum", root: null, pos: "harf+zamir", meaning_tr: "sizin için", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "وَلِأَنْعَـٰمِكُمْ", transliteration: "wa li-anʿāmikum", root: "ن-ع-م", pos: "ism", meaning_tr: "ve hayvanlarınız için", irab: "وَ atıf + لِ cer + أَنْعَام mecrûr, muzâf + كُمْ muzâfun ileyh. أَنْعَام: نِعْمَة'nin cem'i (hayvanlar = nimet).", irab_short: "câr-mecrûr", turkish_bridge: "En'âm (hayvanlar), nimet bu kökten", balagha_note: "Nimet listesinin kapanışı: insana + hayvana → tüm canlılara rızık. لَكُمْ وَلِأَنْعَامِكُمْ: insanın sorumluluğu hayvanlara da uzanır." },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "Mef'ûl Mutlak — صَبًّا / شَقًّا",
        explanation: "Mef'ûl mutlak: fiilin aynı kökünden gelen masdar, fiili pekiştirir. صَبَبْنَا الماءَ صَبًّا = 'suyu tam anlamıyla döktük.' شَقَقْنَا الأَرْضَ شَقًّا = 'toprağı gerçekten yardık.' Vurgu ve kesinlik sağlar.",
        rule: "Fiil + aynı kökten masdar = pekiştirme\nصَبَبْنَا...صَبًّا / شَقَقْنَا...شَقًّا\nMef'ûl mutlak her zaman mansûbdur",
        examples: ["صَبَبْنَا الماءَ صَبًّا — 80:25", "كَلَّمَ اللَّهُ مُوسَى تَكْلِيمًا — 4:164", "وَرَتَّلِ القُرْآنَ تَرْتِيلًا — 73:4"],
      },
    ],
    exercises: [
      generateBabQuiz(
        "S80-B03-Q01", "أَنۢبَتْنَا",
        "IV. bâb (أَفْعَلَ): نَبَتَ → أَنْبَتَ (bitki bitirdi/çıkardı)",
        ["I. bâb: نَبَتَ (bitti, çıktı)", "II. bâb: نَبَّتَ", "V. bâb: تَنَبَّتَ"],
        "أَنْبَتَ: ن-ب-ت + IV. bâb. نَبَتَ (bitki çıktı, I.) → أَنْبَتَ (bitki çıkardı, IV.). IV. bâb: sebebiyet. Allah bitkiyi çıkaran (sebep olan).",
        ["ن-ب-ت"]
      ),
      {
        id: "S80-B03-Q02", type: "single_choice",
        question: "25-26. ayetlerdeki صَبَبْنَا...صَبًّا / شَقَقْنَا...شَقًّا yapısının i'rab adı nedir?",
        options: [
          "Mef'ûl mutlak (aynı kökten masdar ile fiili pekiştirme)",
          "Mef'ûl bih (doğrudan nesne)",
          "Hâl (durum bildiren)",
          "Temyîz (açıklayıcı)",
        ],
        correct: 0,
        explanation: "صَبًّا ve شَقًّا mef'ûl mutlaktır: fiilin aynı kökünden gelen masdar, fiili pekiştirir. 'Bol bol döktük, iyice yardık.' Vurgu ve kesinlik sağlar.",
        relatedRoots: ["ص-ب-ب", "ش-ق-ق"],
      },
      generateFillBlank(
        "S80-B03-Q03",
        "فَأَنبَتْنَا فِيهَا حَبًّا وَعِنَبًا وَقَضْبًا وَ_____ وَنَخْلًا",
        "زَيْتُونًا", ["تُفَّاحًا", "رُمَّانًا", "تِينًا"],
        "Tahıl, üzüm, yonca, ..., hurma — hangi bitki?",
        "Yedi nimet sırası: حَبّ (tahıl) → عِنَب (üzüm) → قَضْب (yonca) → زَيْتُون (zeytin) → نَخْل (hurma) → حَدَائِق (bahçeler) → فَاكِهَة+أَبّ (meyve+otlak).",
        ["ز-ي-ت"]
      ),
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // BÖLÜM 4 — ABESE 80:33-42 — Sâhha ve İki Yüz
  // ═══════════════════════════════════════════════════════════
  {
    id: "S80-B04-abese",
    title: "Abese (33-42) — Sâhha Günü: İki Yüz",
    titleAr: "سُورَةُ عَبَسَ ٣٣-٤٢",
    stage: 2,
    level: 8,
    surah: 80,
    description:
      "الصَّاخَّة (kulakları sağır eden kıyamet çığlığı). Herkes birbirinden kaçar: kardeş, ana-baba, eş, çocuklar. İki yüz tipi: (1) parlak, gülen → ebrâr, (2) tozlu, karanlıkla kaplanmış → kefere-fecere. Tıbâk, iltifât.",
    verses: [
      {
        surah: 80, ayah: 33,
        arabic: "فَإِذَا جَآءَتِ ٱلصَّآخَّةُ",
        translation: "O kulak tırmalayan çığlık geldiğinde",
        words: [
          { arabic: "فَإِذَا", transliteration: "fa-iḏā", root: null, pos: "harf", meaning_tr: "…geldiğinde", irab: "فَ isti'nâf + إِذَا şart zarfı.", irab_short: "şart zarfı", turkish_bridge: null, balagha_note: null },
          { arabic: "جَآءَتِ", transliteration: "jāʾati", root: "ج-ي-أ", pos: "fil", meaning_tr: "geldi", irab: "Mâzî + تِ te-i te'nîs.", irab_short: "mâzî", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلصَّآخَّةُ", transliteration: "aṣ-ṣāḫḫatu", root: "ص-خ-خ", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "kulak tırmalayan çığlık", irab: "{Fâil}, {merfû}. صَخَّ: kulağı sağır eden ses. İsm-i fâil + tâ-i merbûta.", irab_short: "fâil, merfû", turkish_bridge: null, balagha_note: "الصَّاخَّة: kıyametin isimlerinden. Ses yoluyla tasvir → işitsel somutlaştırma. القَارِعَة (101), الحَاقَّة (69) gibi." },
        ],
      },
      {
        surah: 80, ayah: 34,
        arabic: "يَوْمَ يَفِرُّ ٱلْمَرْءُ مِنْ أَخِيهِ",
        translation: "O gün kişi kardeşinden kaçar",
        words: [
          { arabic: "يَوْمَ", transliteration: "yawma", root: "ي-و-م", pos: "ism", meaning_tr: "gün(ünde)", irab: "{Zarf}, {mensûb}. Bedel (الصَّاخَّة'den).", irab_short: "zarf", turkish_bridge: null, balagha_note: null },
          { arabic: "يَفِرُّ", transliteration: "yafirru", root: "ف-ر-ر", pos: "fil", meaning_tr: "kaçar", irab: "Muzâri, I. bâb. Muzâaf fiil.", irab_short: "muzâri", turkish_bridge: "Firâr (kaçış), fâr (kaçan) bu kökten", balagha_note: "Kaçış listesi: en yakınlardan başlayıp gidiyor → dramatik etki (tedrîc)." },
          { arabic: "ٱلْمَرْءُ", transliteration: "al-marʾu", root: "م-ر-أ", pos: "ism", meaning_tr: "kişi", irab: "{Fâil}, {merfû}.", irab_short: "fâil", turkish_bridge: null, balagha_note: null },
          { arabic: "مِنْ أَخِيهِ", transliteration: "min aḫīhi", root: "أ-خ-و", pos: "ism", meaning_tr: "kardeşinden", irab: "مِنْ cer + أَخِيهِ mecrûr (esmâ-i hamse: ي ile cer). 1. akraba: kardeş.", irab_short: "câr-mecrûr, esmâ-i hamse", turkish_bridge: "Ah (kardeş), uhuvvet (kardeşlik) bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 80, ayah: 35,
        arabic: "وَأُمِّهِۦ وَأَبِيهِ",
        translation: "Annesinden ve babasından",
        words: [
          { arabic: "وَأُمِّهِۦ", transliteration: "wa ummihī", root: "أ-م-م", pos: "ism", meaning_tr: "annesinden", irab: "Atıf + mecrûr + zamîr. 2. akraba: anne.", irab_short: "mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "وَأَبِيهِ", transliteration: "wa abīhi", root: "أ-ب-و", pos: "ism", meaning_tr: "babasından", irab: "Atıf + mecrûr (esmâ-i hamse: ي ile). 3. akraba: baba.", irab_short: "mecrûr, esmâ-i hamse", turkish_bridge: null, balagha_note: "Yakınlık sırası: kardeş → anne → baba → eş → çocuklar. En yakından en bağlı olana doğru yükseliyor." },
        ],
      },
      {
        surah: 80, ayah: 36,
        arabic: "وَصَـٰحِبَتِهِۦ وَبَنِيهِ",
        translation: "Eşinden ve çocuklarından",
        words: [
          { arabic: "وَصَـٰحِبَتِهِۦ", transliteration: "wa ṣāḥibatihī", root: "ص-ح-ب", pos: "ism", meaning_tr: "eşinden", irab: "Atıf + mecrûr + zamîr. صَاحِبَة: hayat arkadaşı (eş). 4. akraba.", irab_short: "mecrûr", turkish_bridge: "Sahib, sahâbe, sohbet bu kökten", balagha_note: null },
          { arabic: "وَبَنِيهِ", transliteration: "wa banīhi", root: "ب-ن-و", pos: "ism", meaning_tr: "çocuklarından", irab: "Atıf + mecrûr (cem-i müz. sâlim cer: ي ile). 5. ve son: çocuklar — en bağlı olduğu kişiler.", irab_short: "mecrûr, cem'", turkish_bridge: "İbn (oğul), benî (oğulları) bu kökten", balagha_note: "Çocuklar en sonda: climax. İnsanın en çok bağlı olduğu kişilerden bile kaçacak → o günün dehşeti." },
        ],
      },
      {
        surah: 80, ayah: 37,
        arabic: "لِكُلِّ ٱمْرِئٍ مِّنْهُمْ يَوْمَئِذٍ شَأْنٌ يُغْنِيهِ",
        translation: "O gün herkesin kendine yetecek bir derdi vardır",
        words: [
          { arabic: "لِكُلِّ ٱمْرِئٍ", transliteration: "li-kulli-mriʾin", root: "م-ر-أ", pos: "ism", meaning_tr: "her kişi için", irab: "لِ cer + كُلِّ mecrûr, muzâf + امْرِئٍ muzâfun ileyh.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "مِّنْهُمْ", transliteration: "minhum", root: null, pos: "harf+zamir", meaning_tr: "onlardan", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "يَوْمَئِذٍ", transliteration: "yawmaʾiḏin", root: "ي-و-م", pos: "ism", meaning_tr: "o gün", irab_short: "zarf", turkish_bridge: null, balagha_note: null },
          { arabic: "شَأْنٌ", transliteration: "šaʾnun", root: "ش-أ-ن", pos: "ism", meaning_tr: "dert, iş, meşguliyet", irab: "{Mübtedâ (muahhar)}, {merfû}.", irab_short: "mübtedâ", turkish_bridge: "Şe'n (iş, hal) bu kökten", balagha_note: null },
          { arabic: "يُغْنِيهِ", transliteration: "yuġnīhi", root: "غ-ن-ي", pattern: "يُفْعِلُ", pos: "fil", meaning_tr: "onu yeterince meşgul eder", irab: "Muzâri, IV. bâb + هِ zamîr. Sıfat cümlesi (شَأْنٌ'ın sıfatı).", irab_short: "muzâri, IV. bâb, sıfat", turkish_bridge: "İstiğnâ, müstağnî bu kökten", balagha_note: "غ-ن-ي kökü: 80:5 اسْتَغْنَى (kendini müstağnî sandı) ↔ 80:37 يُغْنِيهِ (derdi ona yeter). Dünyada müstağnî sanan, ahirette kendi derdiyle meşgul." },
        ],
      },
      {
        surah: 80, ayah: 38,
        arabic: "وُجُوهٌ يَوْمَئِذٍ مُّسْفِرَةٌ",
        translation: "O gün bazı yüzler parıl parıl parlar",
        words: [
          { arabic: "وُجُوهٌ", transliteration: "wujūhun", root: "و-ج-ه", pos: "ism", meaning_tr: "yüzler", irab: "{Mübtedâ}, {merfû}. Nekre: 'bazı yüzler.'", irab_short: "mübtedâ", turkish_bridge: "Vech, vecîh, teveccüh bu kökten", balagha_note: "İki yüz grubu: 38-39 (parlak) vs 40-42 (karanlık). Tıbâk yapısı." },
          { arabic: "يَوْمَئِذٍ", transliteration: "yawmaʾiḏin", root: "ي-و-م", pos: "ism", meaning_tr: "o gün", irab_short: "zarf", turkish_bridge: null, balagha_note: null },
          { arabic: "مُّسْفِرَةٌ", transliteration: "musfiratun", root: "س-ف-ر", pattern: "مُفْعِلَة", pos: "ism", meaning_tr: "parlayan, aydınlık", irab: "{Haber}, {merfû}. İsm-i fâil, IV. bâb: أَسْفَرَ (parladı, aydınlandı).", irab_short: "haber, ism-i fâil", turkish_bridge: "Sefer, isfâr bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 80, ayah: 39,
        arabic: "ضَاحِكَةٌ مُّسْتَبْشِرَةٌ",
        translation: "Gülen, sevinç dolu",
        words: [
          { arabic: "ضَاحِكَةٌ", transliteration: "ḍāḥikatun", root: "ض-ح-ك", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "gülen", irab: "{Sıfat / haber 2}, {merfû}. İsm-i fâil, I. bâb.", irab_short: "sıfat / haber", turkish_bridge: null, balagha_note: null },
          { arabic: "مُّسْتَبْشِرَةٌ", transliteration: "mustabširatun", root: "ب-ش-ر", pattern: "مُسْتَفْعِلَة", pos: "ism", meaning_tr: "müjdelenmiş, sevinçli", irab: "{Sıfat / haber 3}. İsm-i fâil, X. bâb: اِسْتَبْشَرَ (sevinç duydu).", irab_short: "sıfat, X. bâb ism-i fâil", turkish_bridge: "Beşâret, müjde, istibşâr bu kökten", balagha_note: "3 sıfat: مُسْفِرَة (parlak) → ضَاحِكَة (gülen) → مُسْتَبْشِرَة (müjdelenmiş) = artan sevinç." },
        ],
      },
      {
        surah: 80, ayah: 40,
        arabic: "وَوُجُوهٌ يَوْمَئِذٍ عَلَيْهَا غَبَرَةٌ",
        translation: "Ve o gün bazı yüzleri toz kaplar",
        words: [
          { arabic: "وَوُجُوهٌ", transliteration: "wa wujūhun", root: "و-ج-ه", pos: "ism", meaning_tr: "ve yüzler", irab: "وَ atıf + {mübtedâ}, nekre.", irab_short: "mübtedâ", turkish_bridge: null, balagha_note: null },
          { arabic: "يَوْمَئِذٍ", transliteration: "yawmaʾiḏin", root: null, pos: "ism", meaning_tr: "o gün", irab_short: "zarf", turkish_bridge: null, balagha_note: null },
          { arabic: "عَلَيْهَا", transliteration: "ʿalayhā", root: null, pos: "harf+zamir", meaning_tr: "üzerlerinde", irab_short: "câr-mecrûr, haber", turkish_bridge: null, balagha_note: null },
          { arabic: "غَبَرَةٌ", transliteration: "ġabaratun", root: "غ-ب-ر", pos: "ism", meaning_tr: "toz", irab: "{Mübtedâ 2 / fâil}, {merfû}. غُبَار: toz → yüzleri toz kaplamış.", irab_short: "mübtedâ / fâil", turkish_bridge: "Gubâr (toz) bu kökten", balagha_note: "2. grup: tozlu yüzler — 1. grubun (parlak) tam zıttı → tıbâk." },
        ],
      },
      {
        surah: 80, ayah: 41,
        arabic: "تَرْهَقُهَا قَتَرَةٌ",
        translation: "Onları karanlık (zillet) kaplar",
        words: [
          { arabic: "تَرْهَقُهَا", transliteration: "tarhaquhā", root: "ر-ه-ق", pos: "fil", meaning_tr: "onu kaplar, bürür", irab: "Muzâri + هَا mef'ûl. رَهِقَ: örtmek, bürümek.", irab_short: "muzâri + zamîr", turkish_bridge: null, balagha_note: null },
          { arabic: "قَتَرَةٌ", transliteration: "qataratun", root: "ق-ت-ر", pos: "ism", meaning_tr: "karanlık, zillet", irab: "{Fâil}, {merfû}. قَتَرَة: koyu karanlık, zillet.", irab_short: "fâil", turkish_bridge: null, balagha_note: "غَبَرَة (toz) + قَتَرَة (karanlık): çift katmanlı örtü. Kıyâmet 75:24-25'te de benzer: بَاسِرَة → terhaquhā qaterah." },
        ],
      },
      {
        surah: 80, ayah: 42,
        arabic: "أُوْلَـٰٓئِكَ هُمُ ٱلْكَفَرَةُ ٱلْفَجَرَةُ",
        translation: "İşte onlar, kâfir ve fâcir olanlardır",
        words: [
          { arabic: "أُوْلَـٰٓئِكَ", transliteration: "ulāʾika", root: null, pos: "ism", meaning_tr: "işte onlar", irab: "{Mübtedâ}, uzak işaret zamîri.", irab_short: "mübtedâ", turkish_bridge: null, balagha_note: null },
          { arabic: "هُمُ", transliteration: "humu", root: null, pos: "zamir", meaning_tr: "onlar", irab: "{Zamîr-i fasl}: mübtedâ ile haberi ayırır, vurgular.", irab_short: "zamîr-i fasl", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلْكَفَرَةُ", transliteration: "al-kafaratu", root: "ك-ف-ر", pattern: "فَعَلَة", pos: "ism", meaning_tr: "kâfirler, nankörler", irab: "{Haber 1}, {merfû}. كَفَرَة: كَافِر'in cem-i teksîri.", irab_short: "haber, merfû", turkish_bridge: "Kâfir, küfr, küfrân bu kökten", balagha_note: null },
          { arabic: "ٱلْفَجَرَةُ", transliteration: "al-fajarah", root: "ف-ج-ر", pattern: "فَعَلَة", pos: "ism", meaning_tr: "fâcirler, günahkârlar", irab: "{Haber 2 / sıfat}, {merfû}. فَجَرَة: فَاجِر'in cem-i teksîri.", irab_short: "haber / sıfat", turkish_bridge: "Fücûr, fâcir bu kökten", balagha_note: "الكَفَرَة الفَجَرَة: iki cem-i teksîr, aynı kalıp (فَعَلَة). Ses uyumu (seci') + anlam yoğunluğu. İnfitâr 82:14'te الفُجَّار: aynı kök, farklı cem' kalıbı." },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "Kaçış Listesi: Tedricî Climax (34-36)",
        explanation: "Kıyamet gününde kişinin kaçtığı yakınlar sıralı: أَخِيهِ (kardeş) → أُمِّهِ (anne) → أَبِيهِ (baba) → صَاحِبَتِهِ (eş) → بَنِيهِ (çocuklar). Her biri bir öncekinden daha yakın bağ → artan duygusal yük. Son: çocuklar = en güçlü bağ bile kopar.",
        rule: "Kardeş < Anne-Baba < Eş < Çocuklar\nHer adım duygusal yükü artırır\nSon eleman (çocuklar) en etkili → climax",
        examples: ["مِنْ أَخِيهِ — kardeşten (1. derece)", "وَأُمِّهِ وَأَبِيهِ — anne-babadan (2.)", "وَصَاحِبَتِهِ وَبَنِيهِ — eş ve çocuklardan (3-4.)"],
      },
      {
        title: "İki Yüz Tıbâkı (38-42)",
        explanation: "38-39: parlak yüzler (مُسْفِرَة, ضَاحِكَة, مُسْتَبْشِرَة). 40-42: karanlık yüzler (غَبَرَة, قَتَرَة, الكَفَرَة الفَجَرَة). Aynı yapı (وُجُوهٌ يَوْمَئِذٍ + sıfatlar), zıt içerik → tıbâk + mukâbele.",
        rule: "Grup 1: وُجُوهٌ مُسْفِرَةٌ ضَاحِكَةٌ مُسْتَبْشِرَةٌ\nGrup 2: وُجُوهٌ عَلَيْهَا غَبَرَةٌ تَرْهَقُهَا قَتَرَةٌ\nAynı yapı, zıt sıfatlar = tıbâk",
        examples: ["75:22-24 (Kıyâme: nâzıra↔bâsıra)", "88:2-8 vs 88:8-16 (Ğâşiye: hâşia↔nâima)", "3:106-107 (Âl-i İmrân: beyaz↔siyah yüzler)"],
      },
    ],
    exercises: [
      generateRootQuiz(
        "S80-B04-Q01", "ٱلصَّآخَّةُ", "ص-خ-خ",
        ["ص-ر-خ", "ص-ع-ق", "ص-خ-ر"],
        "الصَّاخَّة: ص-خ-خ kökünden ism-i fâil. Kulağı sağır eden ses. Muzâaf kök (iki harf aynı). Kıyametin isimlerinden: القَارِعَة, الحَاقَّة, الطَّامَّة gibi.",
        ["ص-خ-خ"]
      ),
      generateBalaghaQuiz(
        "S80-B04-Q02",
        "34-36. ayetlerde kaçış listesinin kardeşten çocuklara doğru ilerlemesindeki belâgat sanatı nedir?",
        "Tedrîc / Climax — duygusal bağ arttıkça dehşet katlanır, en yakın (çocuklar) en sonda",
        ["Tıbâk (zıtlık)", "Hazf (düşürme)", "Cinas (söz oyunu)"],
        "Kaçış sırası: kardeş → anne → baba → eş → çocuklar. Her adımda duygusal bağ artar. Son (çocuklar) en güçlü bağın bile kopacağını gösterir → climax (tedrîc / irtikâ)."
      ),
      {
        id: "S80-B04-Q03", type: "single_choice",
        question: "38. ayette مُسْفِرَة kelimesinin bâb ve anlamı nedir?",
        options: [
          "IV. bâb ism-i fâil (أَسْفَرَ): parlayan, aydınlanan — sevinçten yüzü parlak olan",
          "I. bâb ism-i fâil: sefer eden, yolculuk yapan",
          "II. bâb ism-i mef'ûl: yolculuğa çıkarılan",
          "X. bâb ism-i fâil: parlaklık isteyen",
        ],
        correct: 0,
        explanation: "مُسْفِرَة: IV. bâb (أَسْفَرَ) ism-i fâil. أَسْفَرَ: parlamak, aydınlanmak (صُبْح أَسْفَرَ = sabah aydınlandı). Yüzlerin sevinçten parlaması.",
        relatedRoots: ["س-ف-ر"],
      },
      generateFillBlank(
        "S80-B04-Q04",
        "أُولَئِكَ هُمُ _____ الفَجَرَةُ",
        "الكَفَرَةُ", ["الظَّلَمَةُ", "الفَسَقَةُ", "المُنَافِقُونَ"],
        "Surenin son ayetinde iki sıfat: ... ve fâcirler",
        "الكَفَرَة الفَجَرَة: iki cem-i teksîr aynı kalıpta (فَعَلَة). Ses uyumu (seci') + çift katmanlı kınama: hem küfür (inkâr) hem fücur (günahkârlık).",
        ["ك-ف-ر"]
      ),
    ],
  },
];

export default abeseLessons;
