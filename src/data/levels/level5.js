// ═══════════════════════════════════════════════════════════
// SEVİYE 5 — L39 (Zilzâl), L40 (Âdiyât), L41 (Kâri'a), L42 (Tekâsür)
// ═══════════════════════════════════════════════════════════

const level5Lessons = [
  // ═══════════════════════════════════════════════════════════
  // DERS 39 — ZİLZÂL SURESİ (99:1-8)
  // ═══════════════════════════════════════════════════════════
  {
    id: "L39-zilzal",
    title: "Zilzâl Suresi (1-8)",
    titleAr: "سُورَةُ الزِّلْزَالِ",
    stage: 2,
    level: 5,
    surah: 99,
    description: "Kıyamet depremi. زُلْزِلَت rubâî tekrar, مِثْقَال ism-i âlet (ölçü), şart cümlesi (إِذَا...يَوْمَئِذٍ). Yer tanıklığı, amel terazisi.",
    verses: [
      {
        surah: 99, ayah: 1,
        arabic: "إِذَا زُلْزِلَتِ ٱلْأَرْضُ زِلْزَالَهَا",
        translation: "Yer, büyük bir sarsıntıyla sarsıldığında,",
        words: [
          { arabic: "إِذَا", transliteration: "izâ", root: null, pos: "harf", meaning_tr: "…olduğunda (şart)", irab_short: "zarf-ı zaman, şart" },
          { arabic: "زُلْزِلَتِ", transliteration: "zulziletí", root: "ز-ل-ز-ل", pos: "fil", meaning_tr: "sarsıldı", irab_short: "mâzî meçhul, rubâî" },
          { arabic: "ٱلْأَرْضُ", transliteration: "el-ardu", root: "أ-ر-ض", pos: "ism", meaning_tr: "yer", irab_short: "nâibu'l-fâil, merfû" },
          { arabic: "زِلْزَالَهَا", transliteration: "zilzâlehâ", root: "ز-ل-ز-ل", pos: "ism", meaning_tr: "sarsıntısını", irab_short: "mef'ûl-i mutlak, mansûb" },
        ],
      },
      {
        surah: 99, ayah: 2,
        arabic: "وَأَخْرَجَتِ ٱلْأَرْضُ أَثْقَالَهَا",
        translation: "Ve yer ağırlıklarını çıkardığında,",
        words: [
          { arabic: "وَ", transliteration: "wa", root: null, pos: "harf", meaning_tr: "ve", irab_short: "atıf" },
          { arabic: "أَخْرَجَتِ", transliteration: "ahracetí", root: "خ-ر-ج", pos: "fil", meaning_tr: "çıkardı", irab_short: "mâzî, IV. bâb (إِفْعَال)" },
          { arabic: "ٱلْأَرْضُ", transliteration: "el-ardu", root: "أ-ر-ض", pos: "ism", meaning_tr: "yer", irab_short: "fâil, merfû" },
          { arabic: "أَثْقَالَهَا", transliteration: "eskâlehâ", root: "ث-ق-ل", pos: "ism", meaning_tr: "ağırlıklarını", irab_short: "mef'ûlun bih, mansûb" },
        ],
      },
      {
        surah: 99, ayah: 3,
        arabic: "وَقَالَ ٱلْإِنسَـٰنُ مَا لَهَا",
        translation: "Ve insan 'buna ne oluyor' dediğinde,",
        words: [
          { arabic: "وَ", transliteration: "wa", root: null, pos: "harf", meaning_tr: "ve", irab_short: "atıf" },
          { arabic: "قَالَ", transliteration: "kâle", root: "ق-و-ل", pos: "fil", meaning_tr: "dedi", irab_short: "mâzî" },
          { arabic: "ٱلْإِنسَـٰنُ", transliteration: "el-insânu", root: "أ-ن-س", pos: "ism", meaning_tr: "insan", irab_short: "fâil, merfû" },
          { arabic: "مَا", transliteration: "mâ", root: null, pos: "harf", meaning_tr: "ne?", irab_short: "istifhâm" },
          { arabic: "لَهَا", transliteration: "lehâ", root: null, pos: "harf", meaning_tr: "ona (yere)", irab_short: "câr-mecrûr, haber mukaddem" },
        ],
      },
      {
        surah: 99, ayah: 4,
        arabic: "يَوْمَئِذٍ تُحَدِّثُ أَخْبَارَهَا",
        translation: "İşte o gün (yer) haberlerini anlatacaktır,",
        words: [
          { arabic: "يَوْمَئِذٍ", transliteration: "yevmeizin", root: "ي-و-م", pos: "ism", meaning_tr: "o gün", irab_short: "zarf-ı zaman, mansûb" },
          { arabic: "تُحَدِّثُ", transliteration: "tuhaddisu", root: "ح-د-ث", pos: "fil", meaning_tr: "anlatır/haber verir", irab_short: "muzâri, II. bâb (tef'îl)" },
          { arabic: "أَخْبَارَهَا", transliteration: "ahbârehâ", root: "خ-ب-ر", pos: "ism", meaning_tr: "haberlerini", irab_short: "mef'ûlun bih, mansûb" },
        ],
      },
      {
        surah: 99, ayah: 5,
        arabic: "بِأَنَّ رَبَّكَ أَوْحَىٰ لَهَا",
        translation: "Çünkü Rabbin ona (öyle) vahyetmiştir.",
        words: [
          { arabic: "بِأَنَّ", transliteration: "bienne", root: null, pos: "harf", meaning_tr: "çünkü (sebep)", irab_short: "bâ-i sebebiyye + أَنَّ" },
          { arabic: "رَبَّكَ", transliteration: "rabbeke", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbin", irab_short: "ism-i inne, mansûb" },
          { arabic: "أَوْحَىٰ", transliteration: "evhâ", root: "و-ح-ي", pos: "fil", meaning_tr: "vahyetti", irab_short: "mâzî, IV. bâb (أَفْعَلَ)" },
          { arabic: "لَهَا", transliteration: "lehâ", root: null, pos: "harf", meaning_tr: "ona (yere)", irab_short: "câr-mecrûr" },
        ],
      },
      {
        surah: 99, ayah: 6,
        arabic: "يَوْمَئِذٍ يَصْدُرُ ٱلنَّاسُ أَشْتَاتًا لِّيُرَوْا۟ أَعْمَـٰلَهُمْ",
        translation: "O gün insanlar, amellerinin gösterilmesi için bölük bölük gelirler.",
        words: [
          { arabic: "يَوْمَئِذٍ", transliteration: "yevmeizin", root: "ي-و-م", pos: "ism", meaning_tr: "o gün", irab_short: "zarf-ı zaman" },
          { arabic: "يَصْدُرُ", transliteration: "yasduru", root: "ص-د-ر", pos: "fil", meaning_tr: "çıkar/döner", irab_short: "muzâri, merfû" },
          { arabic: "ٱلنَّاسُ", transliteration: "en-nâsu", root: "ن-و-س", pos: "ism", meaning_tr: "insanlar", irab_short: "fâil, merfû" },
          { arabic: "أَشْتَاتًا", transliteration: "eştâten", root: "ش-ت-ت", pos: "ism", meaning_tr: "bölük bölük", irab_short: "hâl, mansûb" },
          { arabic: "لِّيُرَوْا۟", transliteration: "liyurev", root: "ر-أ-ي", pos: "fil", meaning_tr: "gösterilsinler diye", irab_short: "lâm-ı ta'lîl + muzâri meçhul, mansûb" },
          { arabic: "أَعْمَـٰلَهُمْ", transliteration: "a'mâlehum", root: "ع-م-ل", pos: "ism", meaning_tr: "amellerini", irab_short: "mef'ûlun bih, mansûb" },
        ],
      },
      {
        surah: 99, ayah: 7,
        arabic: "فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُۥ",
        translation: "Kim zerre miktarı hayır yapmışsa onu görür.",
        words: [
          { arabic: "فَمَن", transliteration: "femen", root: null, pos: "ism", meaning_tr: "kim … ise", irab_short: "şart ismi" },
          { arabic: "يَعْمَلْ", transliteration: "ya'mel", root: "ع-م-ل", pos: "fil", meaning_tr: "yaparsa", irab_short: "muzâri, şart fiili, meczûm" },
          { arabic: "مِثْقَالَ", transliteration: "miskâle", root: "ث-ق-ل", pos: "ism", meaning_tr: "ağırlığınca", irab_short: "mef'ûlun bih, mansûb" },
          { arabic: "ذَرَّةٍ", transliteration: "zerretin", root: "ذ-ر-ر", pos: "ism", meaning_tr: "zerre", irab_short: "muzâfun ileyh, mecrûr" },
          { arabic: "خَيْرًا", transliteration: "hayren", root: "خ-ي-ر", pos: "ism", meaning_tr: "hayır", irab_short: "temyîz, mansûb" },
          { arabic: "يَرَهُۥ", transliteration: "yerehu", root: "ر-أ-ي", pos: "fil", meaning_tr: "görür onu", irab_short: "muzâri, cevâbu'ş-şart, meczûm" },
        ],
      },
      {
        surah: 99, ayah: 8,
        arabic: "وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُۥ",
        translation: "Kim de zerre miktarı şer yapmışsa onu görür.",
        words: [
          { arabic: "وَمَن", transliteration: "ve men", root: null, pos: "ism", meaning_tr: "ve kim … ise", irab_short: "atıf + şart ismi" },
          { arabic: "يَعْمَلْ", transliteration: "ya'mel", root: "ع-م-ل", pos: "fil", meaning_tr: "yaparsa", irab_short: "muzâri, şart fiili, meczûm" },
          { arabic: "مِثْقَالَ", transliteration: "miskâle", root: "ث-ق-ل", pos: "ism", meaning_tr: "ağırlığınca", irab_short: "mef'ûlun bih, mansûb" },
          { arabic: "ذَرَّةٍ", transliteration: "zerretin", root: "ذ-ر-ر", pos: "ism", meaning_tr: "zerre", irab_short: "muzâfun ileyh, mecrûr" },
          { arabic: "شَرًّا", transliteration: "şerren", root: "ش-ر-ر", pos: "ism", meaning_tr: "şer", irab_short: "temyîz, mansûb" },
          { arabic: "يَرَهُۥ", transliteration: "yerehu", root: "ر-أ-ي", pos: "fil", meaning_tr: "görür onu", irab_short: "muzâri, cevâbu'ş-şart, meczûm" },
        ],
      },
    ],
    grammarNotes: [
      { title: "Rubâî Fiiller (زُلْزِلَ)", explanation: "Sülâsî (3 harfli) değil, rubâî (4 harfli) fiil. ز-ل-ز-ل = sarsma. Arapçada tekrar kalıbı (فَعْلَلَ). Meçhul mâzî: زُلْزِلَتْ.", rule: "فَعْلَلَ → meçhul: فُعْلِلَ\nMef'ûl-i mutlak: fiille aynı kökten masdar → vurgu", examples: ["زُلْزِلَتِ الأَرْضُ زِلْزَالَهَا — 'sarsıntısıyla sarsıldı' (mef'ûl-i mutlak = vurgu)", "دَحْرَجَ/يُدَحْرِجُ = yuvarladı (rubâî örnek)"] },
      { title: "Şart Cümlesi (إِذَا...يَوْمَئِذٍ)", explanation: "إِذَا 'olduğunda': kesin gerçekleşecek şart. Şart fiili (زُلْزِلَت) → cevap (تُحَدِّثُ). يَوْمَئِذٍ = o zaman, izâfet yoluyla şarta geri gönderir.", rule: "إِذَا + mâzî fiil = gelecekte kesin\nيَوْمَئِذٍ = يَوْم + إِذْ + تنوين (o gün)", examples: ["إِذَا زُلْزِلَت ... يَوْمَئِذٍ تُحَدِّثُ", "إِذَا جَاءَ نَصْرُ اللَّه — Nasr 110:1"] },
      { title: "مِثْقَال — İsm-i Âlet/Ölçü", explanation: "ث-ق-ل kökünden مِفْعَال kalıbında. Aslı 'tartı aleti', burada 'ağırlığı kadar miktar' anlamında kullanılmış. Muzâf: مِثْقَالَ ذَرَّةٍ.", rule: "مِفْعَال kalıbı: alet veya araç ismi\nمِثْقَال = tartı/miktar | مِفْتَاح = anahtar | مِيزَان = terazi", examples: ["مِثْقَالَ ذَرَّةٍ خَيْرًا — 'zerre ağırlığınca hayır'", "مِفْتَاح = فَتَحَ kökünden, açma aleti"] },
    ],
    exercises: [
      { id: "L39-Q01", type: "root_extract", question: "زُلْزِلَت fiilinin kökü nedir?", options: ["ز-ل-ز-ل (rubâî)", "ز-ل-ل", "ز-و-ل", "ل-ز-م"], correct: 0, explanation: "Rubâî (4 harfli) fiil. Tekrar kalıbı: ز-ل-ز-ل = şiddetli sarsıntı.", relatedRoots: ["ز-ل-ز-ل"] },
      { id: "L39-Q02", type: "bab_identify", question: "أَخْرَجَتْ hangi bâbtandır?", options: ["IV. bâb (أَفْعَلَ)", "I. bâb (فَعَلَ)", "II. bâb (فَعَّلَ)", "VII. bâb (اِنْفَعَلَ)"], correct: 0, explanation: "أَفْعَلَ = IV. bâb. خَرَجَ (çıktı) → أَخْرَجَ (çıkardı): geçişli yapma.", relatedRoots: ["خ-ر-ج"] },
      { id: "L39-Q03", type: "wazn_match", question: "مِثْقَال hangi vezinde?", options: ["مِفْعَال (ism-i âlet/ölçü)", "مَفْعُول (ism-i mef'ûl)", "فِعَال (masdar)", "تَفْعِيل (II. bâb masdar)"], correct: 0, explanation: "مِفْعَال kalıbı = alet/araç ismi. ث-ق-ل kökünden: tartı, miktar.", relatedRoots: ["ث-ق-ل"] },
      { id: "L39-Q04", type: "single_choice", question: "99:7-8'deki خَيْرًا ve شَرًّا'nın i'rab fonksiyonu nedir?", options: ["Temyîz (mansûb)", "Mef'ûlun bih", "Hâl", "Mübtedâ"], correct: 0, explanation: "Temyîz: neyin zerre kadar olduğunu açıklar. مِثْقَالَ ذَرَّةٍ — neyin? → خَيْرًا / شَرًّا.", relatedRoots: ["خ-ي-ر", "ش-ر-ر"] },
      { id: "L39-Q05", type: "single_choice", question: "تُحَدِّثُ (haber verir) hangi bâb ve kökten?", options: ["II. bâb (فَعَّلَ), kök: ح-د-ث", "I. bâb, kök: ح-د-ث", "IV. bâb, kök: ح-د-ث", "V. bâb, kök: ح-د-ث"], correct: 0, explanation: "حَدَّثَ/يُحَدِّثُ = II. bâb, 'anlatmak, haber vermek'. Hadis kelimesi de bu köktendir.", relatedRoots: ["ح-د-ث"] },
      { id: "L39-Q06", type: "single_choice", question: "زِلْزَالَهَا ifadesi nasıl bir yapıdır?", options: ["Mef'ûl-i mutlak — fiille aynı kökten vurgu", "Mef'ûlun bih — nesne", "Hâl — durum zarfı", "Temyîz — açıklayıcı"], correct: 0, explanation: "Mef'ûl-i mutlak: fiil ve masdar aynı kökten → 'sarsıntısıyla sarstı' = şiddet vurgusu.", relatedRoots: ["ز-ل-ز-ل"] },
      { id: "L39-Q07", type: "single_choice", question: "Surenin belâgat yapısı nasıldır?", options: ["إِذَا şart (1-3) → cevap/tasvir (4-5) → tafṣîl (6-8: فَمَن...)", "Kasem → cevap", "Soru → cevap", "Hikâye → ders"], correct: 0, explanation: "Şart (yer sarsılınca) → cevap (yer tanıklık eder) → tafṣîl (herkes amelini görür: hayır/şer ayrımı).", relatedRoots: ["ز-ل-ز-ل", "ع-م-ل"] },
      { id: "L39-Q08", type: "irab_identify", question: "ٱلْأَرْضُ (99:1) neden merfûdur?", options: ["Nâibu'l-fâil (meçhul fiilin öznesi)", "Fâil (ma'lûm fiilin öznesi)", "Mübtedâ (isim cümlesinin başı)", "Mef'ûlun bih (takdîm)"], correct: 0, explanation: "زُلْزِلَت meçhul fiildir. ٱلْأَرْضُ nâibu'l-fâil olarak merfûdur.", relatedRoots: ["أ-ر-ض"] },
      { id: "L39-Q09", type: "balagha_identify", question: "99:7-8'de aynı yapının hayır/şer için tam tekrarlanması (فَمَن يَعْمَلْ مِثْقَالَ...) hangi sanatı oluşturur?", options: ["Itnâb — tıbâk/mukâbele ile genişletme: hiçbir amel kaçmaz vurgusu", "Tikrâr — basit tekrar", "Hazf — düşürme", "İsti'âre — metafor"], correct: 0, explanation: "Aynı yapıyı خَيْرًا/شَرًّا için tekrarlama = ıtnâb (tıbâk ile mukâbele). Kısaltılabilir ama bilerek genişletilmiş → vurgu.", relatedRoots: ["خ-ي-ر", "ش-ر-ر"] },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DERS 40 — ÂDİYÂT SURESİ (100:1-11)
  // ═══════════════════════════════════════════════════════════
  {
    id: "L40-adiyat",
    title: "Âdiyât Suresi (1-11)",
    titleAr: "سُورَةُ العَادِيَاتِ",
    stage: 2,
    level: 5,
    surah: 100,
    description: "Beş ardışık kasem. Savaş atları tasviri. Kısa ritmik cümleler. VII. bâb edilgenlik. İnsanın nankörlüğü ve âhiret hesabı.",
    verses: [
      {
        surah: 100, ayah: 1,
        arabic: "وَٱلْعَـٰدِيَـٰتِ ضَبْحًا",
        translation: "Soluk soluğa koşan (at)lara andolsun,",
        words: [
          { arabic: "وَ", transliteration: "wa", root: null, pos: "harf", meaning_tr: "and (kasem)", irab_short: "kasem vav'ı" },
          { arabic: "ٱلْعَـٰدِيَـٰتِ", transliteration: "el-'âdiyâti", root: "ع-د-و", pos: "ism", meaning_tr: "koşanlar (atlar)", irab_short: "muksamun bih, mecrûr" },
          { arabic: "ضَبْحًا", transliteration: "dabhan", root: "ض-ب-ح", pos: "ism", meaning_tr: "soluk soluğa", irab_short: "mef'ûl-i mutlak/hâl, mansûb" },
        ],
      },
      {
        surah: 100, ayah: 2,
        arabic: "فَٱلْمُورِيَـٰتِ قَدْحًا",
        translation: "Kıvılcım saçanlara,",
        words: [
          { arabic: "فَ", transliteration: "fe", root: null, pos: "harf", meaning_tr: "sonra", irab_short: "atıf" },
          { arabic: "ٱلْمُورِيَـٰتِ", transliteration: "el-mûriyâti", root: "و-ر-ي", pos: "ism", meaning_tr: "kıvılcım çıkaranlar", irab_short: "atıf, mecrûr; IV. bâb ism-i fâil" },
          { arabic: "قَدْحًا", transliteration: "kadhan", root: "ق-د-ح", pos: "ism", meaning_tr: "çakma", irab_short: "mef'ûl-i mutlak, mansûb" },
        ],
      },
      {
        surah: 100, ayah: 3,
        arabic: "فَٱلْمُغِيرَ ٰتِ صُبْحًا",
        translation: "Sabah baskını yapanlara,",
        words: [
          { arabic: "فَ", transliteration: "fe", root: null, pos: "harf", meaning_tr: "sonra", irab_short: "atıf" },
          { arabic: "ٱلْمُغِيرَ ٰتِ", transliteration: "el-muğîrâti", root: "غ-و-ر", pos: "ism", meaning_tr: "baskın yapanlar", irab_short: "atıf, mecrûr; IV. bâb ism-i fâil" },
          { arabic: "صُبْحًا", transliteration: "subhan", root: "ص-ب-ح", pos: "ism", meaning_tr: "sabah", irab_short: "zarf-ı zaman, mansûb" },
        ],
      },
      {
        surah: 100, ayah: 4,
        arabic: "فَأَثَرْنَ بِهِۦ نَقْعًا",
        translation: "Orada toz kaldıranlara,",
        words: [
          { arabic: "فَ", transliteration: "fe", root: null, pos: "harf", meaning_tr: "böylece", irab_short: "atıf" },
          { arabic: "أَثَرْنَ", transliteration: "eserne", root: "أ-ث-ر", pos: "fil", meaning_tr: "kaldırdılar", irab_short: "mâzî, müennes cem" },
          { arabic: "بِهِۦ", transliteration: "bihî", root: null, pos: "harf", meaning_tr: "onunla/orada", irab_short: "câr-mecrûr" },
          { arabic: "نَقْعًا", transliteration: "nak'an", root: "ن-ق-ع", pos: "ism", meaning_tr: "toz bulutu", irab_short: "mef'ûlun bih, mansûb" },
        ],
      },
      {
        surah: 100, ayah: 5,
        arabic: "فَوَسَطْنَ بِهِۦ جَمْعًا",
        translation: "Böylece topluluğun ortasına dalanlara (and olsun)!",
        words: [
          { arabic: "فَ", transliteration: "fe", root: null, pos: "harf", meaning_tr: "böylece", irab_short: "atıf" },
          { arabic: "وَسَطْنَ", transliteration: "vesatne", root: "و-س-ط", pos: "fil", meaning_tr: "ortasına daldılar", irab_short: "mâzî, müennes cem" },
          { arabic: "بِهِۦ", transliteration: "bihî", root: null, pos: "harf", meaning_tr: "orada", irab_short: "câr-mecrûr" },
          { arabic: "جَمْعًا", transliteration: "cem'an", root: "ج-م-ع", pos: "ism", meaning_tr: "topluluk", irab_short: "mef'ûlun bih, mansûb" },
        ],
      },
      {
        surah: 100, ayah: 6,
        arabic: "إِنَّ ٱلْإِنسَـٰنَ لِرَبِّهِۦ لَكَنُودٌ",
        translation: "Şüphesiz insan Rabbine karşı çok nankördür.",
        words: [
          { arabic: "إِنَّ", transliteration: "inne", root: null, pos: "harf", meaning_tr: "şüphesiz", irab_short: "te'kîd edatı" },
          { arabic: "ٱلْإِنسَـٰنَ", transliteration: "el-insâne", root: "أ-ن-س", pos: "ism", meaning_tr: "insan", irab_short: "ism-i inne, mansûb" },
          { arabic: "لِرَبِّهِۦ", transliteration: "li-rabbihî", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbine karşı", irab_short: "câr-mecrûr" },
          { arabic: "لَكَنُودٌ", transliteration: "le-kenûdun", root: "ك-ن-د", pos: "ism", meaning_tr: "çok nankör", irab_short: "haber-i inne, merfû; lâm-ı te'kîd" },
        ],
      },
      {
        surah: 100, ayah: 7,
        arabic: "وَإِنَّهُۥ عَلَىٰ ذَ ٰلِكَ لَشَهِيدٌ",
        translation: "Ve o buna şahittir.",
        words: [
          { arabic: "وَإِنَّهُۥ", transliteration: "ve-innehu", root: null, pos: "harf", meaning_tr: "ve şüphesiz o", irab_short: "atıf + إنّ + zamîr" },
          { arabic: "عَلَىٰ", transliteration: "alâ", root: null, pos: "harf", meaning_tr: "üzerine", irab_short: "harf-i cer" },
          { arabic: "ذَ ٰلِكَ", transliteration: "zâlike", root: null, pos: "ism", meaning_tr: "buna", irab_short: "ism-i işâret, mecrûr" },
          { arabic: "لَشَهِيدٌ", transliteration: "le-şehîdun", root: "ش-ه-د", pos: "ism", meaning_tr: "şahit", irab_short: "haber-i inne, merfû; lâm-ı te'kîd" },
        ],
      },
      {
        surah: 100, ayah: 8,
        arabic: "وَإِنَّهُۥ لِحُبِّ ٱلْخَيْرِ لَشَدِيدٌ",
        translation: "Ve o, mal sevgisinde çok şiddetlidir.",
        words: [
          { arabic: "وَإِنَّهُۥ", transliteration: "ve-innehu", root: null, pos: "harf", meaning_tr: "ve şüphesiz o", irab_short: "atıf + إنّ + zamîr" },
          { arabic: "لِحُبِّ", transliteration: "li-hubbi", root: "ح-ب-ب", pos: "ism", meaning_tr: "sevgisine", irab_short: "câr-mecrûr" },
          { arabic: "ٱلْخَيْرِ", transliteration: "el-hayri", root: "خ-ي-ر", pos: "ism", meaning_tr: "malın/hayrın", irab_short: "muzâfun ileyh, mecrûr" },
          { arabic: "لَشَدِيدٌ", transliteration: "le-şedîdun", root: "ش-د-د", pos: "ism", meaning_tr: "çok şiddetli", irab_short: "haber-i inne, merfû; lâm-ı te'kîd" },
        ],
      },
      {
        surah: 100, ayah: 9,
        arabic: "أَفَلَا يَعْلَمُ إِذَا بُعْثِرَ مَا فِى ٱلْقُبُورِ",
        translation: "Kabirlerdekiler dışarı çıkarıldığında bilmez mi?",
        words: [
          { arabic: "أَفَلَا", transliteration: "efelâ", root: null, pos: "harf", meaning_tr: "bilmez mi?", irab_short: "hemze-i istifhâm + fâ + lâ nâfiye" },
          { arabic: "يَعْلَمُ", transliteration: "ya'lemu", root: "ع-ل-م", pos: "fil", meaning_tr: "bilir", irab_short: "muzâri, merfû" },
          { arabic: "إِذَا", transliteration: "izâ", root: null, pos: "harf", meaning_tr: "…olduğunda", irab_short: "zarf-ı şart" },
          { arabic: "بُعْثِرَ", transliteration: "bu'sire", root: "ب-ع-ث-ر", pos: "fil", meaning_tr: "altüst edildi", irab_short: "mâzî meçhul, rubâî" },
          { arabic: "مَا", transliteration: "mâ", root: null, pos: "ism", meaning_tr: "ne/şey", irab_short: "nâibu'l-fâil" },
          { arabic: "فِى", transliteration: "fî", root: null, pos: "harf", meaning_tr: "içindeki", irab_short: "harf-i cer" },
          { arabic: "ٱلْقُبُورِ", transliteration: "el-kubûri", root: "ق-ب-ر", pos: "ism", meaning_tr: "kabirler", irab_short: "mecrûr" },
        ],
      },
      {
        surah: 100, ayah: 10,
        arabic: "وَحُصِّلَ مَا فِى ٱلصُّدُورِ",
        translation: "Ve göğüslerdeki (sırlar) ortaya konduğunda,",
        words: [
          { arabic: "وَ", transliteration: "wa", root: null, pos: "harf", meaning_tr: "ve", irab_short: "atıf" },
          { arabic: "حُصِّلَ", transliteration: "hussile", root: "ح-ص-ل", pos: "fil", meaning_tr: "ortaya kondu", irab_short: "mâzî meçhul, II. bâb" },
          { arabic: "مَا", transliteration: "mâ", root: null, pos: "ism", meaning_tr: "ne/şey", irab_short: "nâibu'l-fâil" },
          { arabic: "فِى", transliteration: "fî", root: null, pos: "harf", meaning_tr: "içindeki", irab_short: "harf-i cer" },
          { arabic: "ٱلصُّدُورِ", transliteration: "es-sudûri", root: "ص-د-ر", pos: "ism", meaning_tr: "göğüsler", irab_short: "mecrûr" },
        ],
      },
      {
        surah: 100, ayah: 11,
        arabic: "إِنَّ رَبَّهُم بِهِمْ يَوْمَئِذٍ لَّخَبِيرٌ",
        translation: "Şüphesiz Rableri, o gün onlardan haberdardır.",
        words: [
          { arabic: "إِنَّ", transliteration: "inne", root: null, pos: "harf", meaning_tr: "şüphesiz", irab_short: "te'kîd edatı" },
          { arabic: "رَبَّهُم", transliteration: "rabbehum", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rableri", irab_short: "ism-i inne, mansûb" },
          { arabic: "بِهِمْ", transliteration: "bihim", root: null, pos: "harf", meaning_tr: "onlardan", irab_short: "câr-mecrûr" },
          { arabic: "يَوْمَئِذٍ", transliteration: "yevmeizin", root: "ي-و-م", pos: "ism", meaning_tr: "o gün", irab_short: "zarf-ı zaman" },
          { arabic: "لَّخَبِيرٌ", transliteration: "le-habîrun", root: "خ-ب-ر", pos: "ism", meaning_tr: "haberdar", irab_short: "haber-i inne, merfû; lâm-ı te'kîd" },
        ],
      },
    ],
    grammarNotes: [
      { title: "Kasem Zinciri (5 Kasem)", explanation: "Âdiyât'ta 5 ardışık kasem: hepsi aynı konuyu — savaş atlarını — farklı sahnelerle anlatır. Her kasem فَ ile bağlanır: kronolojik sıra (koşma → kıvılcım → baskın → toz → dalma).", rule: "وَ kasem açar, فَ sıralama (te'kîb) sağlar\n5 kasem = çok güçlü vurgu → cevap: إِنَّ ٱلْإِنسَـٰنَ لِرَبِّهِۦ لَكَنُودٌ", examples: ["وَالعَادِيَاتِ فَالمُورِيَاتِ فَالمُغِيرَاتِ فَأَثَرْنَ فَوَسَطْنَ", "Kasem cevabı: ayet 6 — إِنَّ...لَكَنُودٌ"] },
      { title: "فَعُول Mübalağa: كَنُود", explanation: "فَعُول kalıbı mübalağa ism-i fâildir: çok × yapan. كَنُود = çok nankör. Aynı kalıpta: غَفُور (çok bağışlayan), شَكُور (çok şükreden), صَبُور (çok sabırlı).", rule: "فَعُول = mübalağa ism-i fâil: sürekli ve yoğun eylem\nMüennes gelirse: ة eklenmez (عَدُوّ, صَبُور)", examples: ["كَنُود (çok nankör) — ك-ن-د", "غَفُور (çok bağışlayan) — غ-ف-ر", "شَكُور (çok şükreden) — ش-ك-ر"] },
      { title: "لَ te'kîd (لَكَنُود / لَشَهِيد)", explanation: "إِنَّ...لَ yapısı çift pekiştirmedir. إِنَّ cümle başında pekiştirir, لَ habere tekrar vurgu katar. Âdiyât'ta üç ayette bu çift te'kîd var (6, 7, 8).", rule: "إِنَّ ... لَ = çift te'kîd\nLâm, haberden hemen önce gelir", examples: ["إِنَّ ٱلْإِنسَـٰنَ لِرَبِّهِۦ لَكَنُودٌ — 'kesinlikle nankördür'", "وَإِنَّهُۥ لِحُبِّ ٱلْخَيْرِ لَشَدِيدٌ — 'kesinlikle şiddetlidir'"] },
    ],
    exercises: [
      { id: "L40-Q01", type: "single_choice", question: "Âdiyât suresinde kaç kasem vardır?", options: ["5 (atlar: koşma, kıvılcım, baskın, toz, dalma)", "3", "7", "1"], correct: 0, explanation: "Beş ardışık kasem, فَ ile bağlı, kronolojik savaş sahnesi.", relatedRoots: ["ع-د-و"] },
      { id: "L40-Q02", type: "single_choice", question: "كَنُود kelimesinin vezni ve anlamı nedir?", options: ["فَعُول — mübalağa: çok nankör", "فَعِيل — sıfat-ı müşebbehe", "فَعَّال — mübalağa", "مَفْعُول — ism-i mef'ûl"], correct: 0, explanation: "فَعُول kalıbı mübalağa ism-i fâildir. كَنُود = çok nankör, ك-ن-د kökünden.", relatedRoots: ["ك-ن-د"] },
      { id: "L40-Q03", type: "bab_identify", question: "بُعْثِرَ hangi yapıdadır?", options: ["Rubâî meçhul (4 harfli kök)", "I. bâb meçhul", "VII. bâb (infi'âl)", "II. bâb meçhul"], correct: 0, explanation: "ب-ع-ث-ر rubâî (4 harfli) kök. بُعْثِرَ = altüst edildi (meçhul).", relatedRoots: ["ب-ع-ث-ر"] },
      { id: "L40-Q04", type: "single_choice", question: "إِنَّ ... لَشَهِيدٌ yapısındaki لَ ne işe yarar?", options: ["Çift te'kîd: إِنَّ + لَ birlikte pekiştirir", "Olumsuzluk bildirir", "Lâm-ı ta'lîl (sebep)", "Kasem lâm'ı"], correct: 0, explanation: "إِنَّ...لَ: çift pekiştirme. Hem إِنَّ hem لَ ayrı ayrı vurgular.", relatedRoots: ["ش-ه-د"] },
      { id: "L40-Q05", type: "irab_identify", question: "ضَبْحًا (100:1) ne fonksiyondadır?", options: ["Mef'ûl-i mutlak veya hâl (mansûb)", "Temyîz", "Mef'ûlun bih", "Zarf-ı zaman"], correct: 0, explanation: "ضَبْحًا = koşmanın şeklini anlatan mef'ûl-i mutlak (veya hâl): 'soluk soluğa koşarak'.", relatedRoots: ["ض-ب-ح"] },
      { id: "L40-Q06", type: "single_choice", question: "حُصِّلَ (100:10) hangi bâb ve çatıdadır?", options: ["II. bâb meçhul (فُعِّلَ)", "I. bâb meçhul", "IV. bâb meçhul", "VII. bâb"], correct: 0, explanation: "حَصَّلَ/يُحَصِّلُ II. bâb → meçhul: حُصِّلَ = 'ortaya kondu'. Tahsîl kelimesi de bu kökten.", relatedRoots: ["ح-ص-ل"] },
      { id: "L40-Q07", type: "balagha_identify", question: "Âdiyât'taki 5 kasem zincirinin فَ ile sıralanması hangi belâgat sanatını güçlendirir?", options: ["Kasem belâgatı — kronolojik sıralı çoklu kasem, mesajın ağırlığını artırır", "Tıbâk — zıtlık", "İsti'âre — metafor", "Hazf — düşürme"], correct: 0, explanation: "5 kasem en uzun zincirlerden. فَ ile kronolojik: koşma→kıvılcım→baskın→toz→dalma. Sıra = ağırlık.", relatedRoots: ["ع-د-و"] },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DERS 41 — KÂRİ'A SURESİ (101:1-11)
  // Zaten L14'te QUİZ'de referans var, şimdi tam ders olarak
  // ═══════════════════════════════════════════════════════════
  {
    id: "L41-karia",
    title: "Kâri'a Suresi (1-11)",
    titleAr: "سُورَةُ القَارِعَةِ",
    stage: 2,
    level: 5,
    surah: 101,
    description: "Kapı çalan kıyamet. وَمَا أَدْرَاكَ tekrarı. أَمَّا...فَ tafṣîli. هَاوِيَة — düşülecek yer. Terazisi ağır-hafif mukâbelesi.",
    verses: [
      {
        surah: 101, ayah: 1,
        arabic: "ٱلْقَارِعَةُ",
        translation: "Kapıyı şiddetle çalan!",
        words: [
          { arabic: "ٱلْقَارِعَةُ", transliteration: "el-kâri'atu", root: "ق-ر-ع", pos: "ism", meaning_tr: "kapı çalan (kıyamet)", irab_short: "mübtedâ, merfû; fâil kalıbında" },
        ],
      },
      {
        surah: 101, ayah: 2,
        arabic: "مَا ٱلْقَارِعَةُ",
        translation: "Nedir o kapıyı şiddetle çalan?",
        words: [
          { arabic: "مَا", transliteration: "mâ", root: null, pos: "ism", meaning_tr: "nedir?", irab_short: "istifhâm, mübtedâ" },
          { arabic: "ٱلْقَارِعَةُ", transliteration: "el-kâri'atu", root: "ق-ر-ع", pos: "ism", meaning_tr: "kapı çalan", irab_short: "haber, merfû" },
        ],
      },
      {
        surah: 101, ayah: 3,
        arabic: "وَمَآ أَدْرَىٰكَ مَا ٱلْقَارِعَةُ",
        translation: "Kapıyı çalanı sana ne bildirdi?",
        words: [
          { arabic: "وَمَآ", transliteration: "ve mâ", root: null, pos: "ism", meaning_tr: "ve ne", irab_short: "istifhâm, mübtedâ" },
          { arabic: "أَدْرَىٰكَ", transliteration: "edrâke", root: "د-ر-ي", pos: "fil", meaning_tr: "sana bildirdi", irab_short: "mâzî, IV. bâb (أَفْعَلَ)" },
          { arabic: "مَا", transliteration: "mâ", root: null, pos: "ism", meaning_tr: "nedir?", irab_short: "istifhâm" },
          { arabic: "ٱلْقَارِعَةُ", transliteration: "el-kâri'atu", root: "ق-ر-ع", pos: "ism", meaning_tr: "kapı çalan", irab_short: "haber, merfû" },
        ],
      },
      {
        surah: 101, ayah: 4,
        arabic: "يَوْمَ يَكُونُ ٱلنَّاسُ كَٱلْفَرَاشِ ٱلْمَبْثُوثِ",
        translation: "(O gün) insanlar yayılmış kelebekler gibi olacaktır.",
        words: [
          { arabic: "يَوْمَ", transliteration: "yevme", root: "ي-و-م", pos: "ism", meaning_tr: "gün", irab_short: "zarf-ı zaman, mansûb" },
          { arabic: "يَكُونُ", transliteration: "yekûnu", root: "ك-و-ن", pos: "fil", meaning_tr: "olur", irab_short: "muzâri nâkıs" },
          { arabic: "ٱلنَّاسُ", transliteration: "en-nâsu", root: "ن-و-س", pos: "ism", meaning_tr: "insanlar", irab_short: "ism-i kâne, merfû" },
          { arabic: "كَ", transliteration: "ke", root: null, pos: "harf", meaning_tr: "gibi", irab_short: "harf-i teşbîh" },
          { arabic: "ٱلْفَرَاشِ", transliteration: "el-ferâşi", root: "ف-ر-ش", pos: "ism", meaning_tr: "kelebekler/pervaneler", irab_short: "mecrûr" },
          { arabic: "ٱلْمَبْثُوثِ", transliteration: "el-mebsûsi", root: "ب-ث-ث", pos: "ism", meaning_tr: "yayılmış", irab_short: "sıfat, mecrûr; ism-i mef'ûl" },
        ],
      },
      {
        surah: 101, ayah: 5,
        arabic: "وَتَكُونُ ٱلْجِبَالُ كَٱلْعِهْنِ ٱلْمَنفُوشِ",
        translation: "Ve dağlar atılmış renkli yün gibi olacaktır.",
        words: [
          { arabic: "وَ", transliteration: "wa", root: null, pos: "harf", meaning_tr: "ve", irab_short: "atıf" },
          { arabic: "تَكُونُ", transliteration: "tekûnu", root: "ك-و-ن", pos: "fil", meaning_tr: "olur", irab_short: "muzâri nâkıs" },
          { arabic: "ٱلْجِبَالُ", transliteration: "el-cibâlu", root: "ج-ب-ل", pos: "ism", meaning_tr: "dağlar", irab_short: "ism-i kâne, merfû" },
          { arabic: "كَٱلْعِهْنِ", transliteration: "ke'l-ıhni", root: "ع-ه-ن", pos: "ism", meaning_tr: "yün gibi", irab_short: "haber-i kâne, mecrûr" },
          { arabic: "ٱلْمَنفُوشِ", transliteration: "el-menfûşi", root: "ن-ف-ش", pos: "ism", meaning_tr: "atılmış", irab_short: "sıfat, mecrûr; ism-i mef'ûl" },
        ],
      },
      {
        surah: 101, ayah: 6,
        arabic: "فَأَمَّا مَن ثَقُلَتْ مَوَ ٰزِينُهُۥ",
        translation: "Tartıları ağır gelen ise,",
        words: [
          { arabic: "فَأَمَّا", transliteration: "feemmâ", root: null, pos: "harf", meaning_tr: "…ya gelince", irab_short: "tafṣîl edatı" },
          { arabic: "مَن", transliteration: "men", root: null, pos: "ism", meaning_tr: "kim, kişi", irab_short: "ism-i mevsûl, mübtedâ" },
          { arabic: "ثَقُلَتْ", transliteration: "sekulet", root: "ث-ق-ل", pos: "fil", meaning_tr: "ağır geldi", irab_short: "mâzî, sıla" },
          { arabic: "مَوَ ٰزِينُهُۥ", transliteration: "mevâzînuhu", root: "و-ز-ن", pos: "ism", meaning_tr: "tartıları", irab_short: "fâil, merfû" },
        ],
      },
      {
        surah: 101, ayah: 7,
        arabic: "فَهُوَ فِى عِيشَةٍ رَّاضِيَةٍ",
        translation: "O, hoşnut bir yaşayıştadır.",
        words: [
          { arabic: "فَ", transliteration: "fe", root: null, pos: "harf", meaning_tr: "işte", irab_short: "cevap-ı emmâ" },
          { arabic: "هُوَ", transliteration: "huve", root: null, pos: "ism", meaning_tr: "o", irab_short: "mübtedâ" },
          { arabic: "فِى", transliteration: "fî", root: null, pos: "harf", meaning_tr: "içinde", irab_short: "harf-i cer" },
          { arabic: "عِيشَةٍ", transliteration: "îşetin", root: "ع-ي-ش", pos: "ism", meaning_tr: "yaşayış", irab_short: "mecrûr" },
          { arabic: "رَّاضِيَةٍ", transliteration: "râdiyetin", root: "ر-ض-ي", pos: "ism", meaning_tr: "hoşnut, memnun", irab_short: "sıfat, mecrûr; ism-i fâil" },
        ],
      },
      {
        surah: 101, ayah: 8,
        arabic: "وَأَمَّا مَنْ خَفَّتْ مَوَ ٰزِينُهُۥ",
        translation: "Tartıları hafif gelen ise,",
        words: [
          { arabic: "وَأَمَّا", transliteration: "ve emmâ", root: null, pos: "harf", meaning_tr: "…ya gelince", irab_short: "atıf + tafṣîl" },
          { arabic: "مَنْ", transliteration: "men", root: null, pos: "ism", meaning_tr: "kim", irab_short: "ism-i mevsûl, mübtedâ" },
          { arabic: "خَفَّتْ", transliteration: "haffet", root: "خ-ف-ف", pos: "fil", meaning_tr: "hafif geldi", irab_short: "mâzî, sıla" },
          { arabic: "مَوَ ٰزِينُهُۥ", transliteration: "mevâzînuhu", root: "و-ز-ن", pos: "ism", meaning_tr: "tartıları", irab_short: "fâil, merfû" },
        ],
      },
      {
        surah: 101, ayah: 9,
        arabic: "فَأُمُّهُۥ هَاوِيَةٌ",
        translation: "Onun anası (varacağı yer) Hâviye'dir.",
        words: [
          { arabic: "فَ", transliteration: "fe", root: null, pos: "harf", meaning_tr: "işte", irab_short: "cevap-ı emmâ" },
          { arabic: "أُمُّهُۥ", transliteration: "ummuhu", root: "أ-م-م", pos: "ism", meaning_tr: "anası (varacağı yer)", irab_short: "mübtedâ, merfû" },
          { arabic: "هَاوِيَةٌ", transliteration: "hâviyetun", root: "ه-و-ي", pos: "ism", meaning_tr: "uçurum/cehennem", irab_short: "haber, merfû; ism-i fâil müennes" },
        ],
      },
      {
        surah: 101, ayah: 10,
        arabic: "وَمَآ أَدْرَىٰكَ مَا هِيَهْ",
        translation: "Onun ne olduğunu sana ne bildirdi?",
        words: [
          { arabic: "وَمَآ", transliteration: "ve mâ", root: null, pos: "ism", meaning_tr: "ve ne", irab_short: "istifhâm" },
          { arabic: "أَدْرَىٰكَ", transliteration: "edrâke", root: "د-ر-ي", pos: "fil", meaning_tr: "sana bildirdi", irab_short: "mâzî, IV. bâb" },
          { arabic: "مَا", transliteration: "mâ", root: null, pos: "ism", meaning_tr: "nedir", irab_short: "istifhâm" },
          { arabic: "هِيَهْ", transliteration: "hiyeh", root: null, pos: "ism", meaning_tr: "o", irab_short: "mübtedâ/zamîr, vakıf hâ'sı" },
        ],
      },
      {
        surah: 101, ayah: 11,
        arabic: "نَارٌ حَامِيَةٌ",
        translation: "(O,) kızgın bir ateştir.",
        words: [
          { arabic: "نَارٌ", transliteration: "nârun", root: "ن-و-ر", pos: "ism", meaning_tr: "ateş", irab_short: "haber (mübtedâ hazfedilmiş: هِيَ)" },
          { arabic: "حَامِيَةٌ", transliteration: "hâmiyetun", root: "ح-م-ي", pos: "ism", meaning_tr: "kızgın", irab_short: "sıfat, merfû; ism-i fâil müennes" },
        ],
      },
    ],
    grammarNotes: [
      { title: "وَمَا أَدْرَاكَ Yapısı", explanation: "Kur'an'a has ta'zîm sorusu: 'Sana ne bildirdi ki, (o nedir)?' أَدْرَى = IV. bâb, د-ر-ي kökünden: bildirmek. Bu kalıp, konunun insanın idrakini aştığını gösterir.", rule: "وَمَا أَدْرَاكَ مَا X = 'X'in ne olduğunu ne bildir(ebilir)?'\nKur'an'da 13 kez: konu hep insanüstü/gayb", examples: ["وَمَآ أَدْرَىٰكَ مَا ٱلْقَارِعَةُ — 101:3", "وَمَا أَدْرَاكَ مَا لَيْلَةُ القَدْرِ — 97:2", "وَمَا أَدْرَاكَ مَا الحُطَمَةُ — 104:5"] },
      { title: "أَمَّا...فَ Tafṣîli (Tekrar)", explanation: "Bu yapıyı L14 ve L19'da gördük: koşullu ayrım. Kâri'a'da: ağır tartı → cennet, hafif tartı → cehennem. Simetrik mukâbele.", rule: "فَأَمَّا مَن... فَ (grup 1)\nوَأَمَّا مَن... فَ (grup 2)", examples: ["فَأَمَّا مَن ثَقُلَتْ مَوَازِينُهُ فَهُوَ فِي عِيشَةٍ رَّاضِيَةٍ", "وَأَمَّا مَنْ خَفَّتْ مَوَازِينُهُ فَأُمُّهُۥ هَاوِيَةٌ"] },
      { title: "Hazf: نَارٌ حَامِيَةٌ", explanation: "هِيَ mübtedâsı düşürülmüş: soru (هِيَهْ ne?) → cevap (نَارٌ) aniden geliyor. Mübtedâ hazfi = hızlı, sarsıcı cevap.", rule: "Mübtedâ hazfi → acil, vurgulu cevap\n(هِيَ) نَارٌ حَامِيَةٌ = '[O] kızgın bir ateştir!'", examples: ["نَارٌ حَامِيَةٌ — (هِيَ hazfedilmiş) 101:11", "عِلِّيِّين — (هُوَ hazfedilmiş) — 83:19 bağlamı"] },
    ],
    exercises: [
      { id: "L41-Q01", type: "single_choice", question: "ٱلْقَارِعَةُ kelimesi surede kaç kez tekrarlanır ve bu ne sanatıdır?", options: ["3 kez — tikrâr (tedricî tanıtım)", "1 kez", "5 kez", "2 kez"], correct: 0, explanation: "Üç tekrar: (1) tanıtım, (2) soru, (3) وَمَا أَدْرَاكَ ile ta'zîm. Tıpkı لَيْلَةُ القَدْرِ gibi.", relatedRoots: ["ق-ر-ع"] },
      { id: "L41-Q02", type: "wazn_match", question: "ٱلْمَبْثُوثِ (saçılmış) hangi vezinde?", options: ["مَفْعُول (I. bâb ism-i mef'ûl)", "فَاعِل (ism-i fâil)", "مُفْتَعِل (VIII. bâb)", "تَفْعِيل (II. bâb masdar)"], correct: 0, explanation: "مَبْثُوث = مَفْعُول kalıbında I. bâb ism-i mef'ûl. ب-ث-ث kökünden: saçılmış, yayılmış.", relatedRoots: ["ب-ث-ث"] },
      { id: "L41-Q03", type: "single_choice", question: "فَأُمُّهُ هَاوِيَةٌ cümlesinde أُمّ (ana) ne anlama gelir?", options: ["Varacağı yer, sığınağı (mecaz)", "Gerçek annesi", "Başlangıcı", "Sebebi"], correct: 0, explanation: "أُمّ burada mecazî: çocuğun anasına sığınması gibi, günahkârın varacağı yer = Hâviye (cehennem). İsti'âre.", relatedRoots: ["أ-م-م", "ه-و-ي"] },
      { id: "L41-Q04", type: "single_choice", question: "نَارٌ حَامِيَةٌ (101:11) cümlesinde hangi unsur düşürülmüştür?", options: ["Mübtedâ: هِيَ (O, kızgın bir ateştir)", "Fiil: كَانَتْ", "Haber", "Fâil"], correct: 0, explanation: "Hazf (düşürme): هِيَ mübtedâsı hazfedilmiş. Soru-cevap hızı: 'Nedir o?' → 'Ateş!' Sarsıcı etki.", relatedRoots: ["ن-و-ر", "ح-م-ي"] },
      { id: "L41-Q05", type: "irab_identify", question: "مَوَازِينُهُ (101:6) ne fonksiyondadır?", options: ["Fâil (ثَقُلَتْ fiilinin öznesi)", "Mef'ûlun bih", "Mübtedâ", "Haber"], correct: 0, explanation: "ثَقُلَتْ مَوَازِينُهُ: ağır geldi + tartıları (fâil). مَوَازِين = و-ز-ن kökünden, مِيزَان'ın çoğulu.", relatedRoots: ["و-ز-ن", "ث-ق-ل"] },
      { id: "L41-Q06", type: "single_choice", question: "101:4-5'teki iki teşbîh (benzetme) nedir?", options: ["İnsanlar → yayılmış kelebekler, Dağlar → atılmış yün", "İnsanlar → taşlar, Dağlar → su", "İnsanlar → ateş, Dağlar → toprak", "İnsanlar → deniz, Dağlar → rüzgâr"], correct: 0, explanation: "İki teşbîh: (1) insanlar = saçılmış pervaneler (çaresizlik), (2) dağlar = didilmiş yün (sağlamlığın sonu).", relatedRoots: ["ف-ر-ش", "ع-ه-ن"] },
      { id: "L41-Q07", type: "balagha_identify", question: "وَمَا أَدْرَاكَ مَا القَارِعَةُ (101:3) hangi belâgat sanatıdır?", options: ["Itnâb — ta'zîm sorusu: idrakin ötesinde olduğunu vurgulama", "İstifhâm-ı inkârî", "Tıbâk", "Tikrâr"], correct: 0, explanation: "وَمَا أَدْرَاكَ yapısı ıtnâb (ta'zîm sorusu). 'Ne bilirsin ki?' = bu kavram senin idrakinin ötesinde. L37'de لَيْلَةُ القَدْرِ için de aynı yapı.", relatedRoots: ["ق-ر-ع"] },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DERS 42 — TEKÂSÜR SURESİ (102:1-8)
  // ═══════════════════════════════════════════════════════════
  {
    id: "L42-tekasur",
    title: "Tekâsür Suresi (1-8)",
    titleAr: "سُورَةُ التَّكَاثُرِ",
    stage: 2,
    level: 5,
    surah: 102,
    description: "Çoklukla övünme. كَلَّا سَوْفَ zecr + tehdit tekrarı. لَتَرَوُنَّ te'kîd nûnu. عِلْمَ اليَقِين / عَيْنَ اليَقِين dereceleri. VI. bâb: تَكَاثُر.",
    verses: [
      {
        surah: 102, ayah: 1,
        arabic: "أَلْهَىٰكُمُ ٱلتَّكَاثُرُ",
        translation: "Çoklukla övünme sizi oyaladı.",
        words: [
          { arabic: "أَلْهَىٰكُمُ", transliteration: "elhâkumu", root: "ل-ه-و", pos: "fil", meaning_tr: "sizi oyaladı", irab_short: "mâzî, IV. bâb (أَفْعَلَ)" },
          { arabic: "ٱلتَّكَاثُرُ", transliteration: "et-tekâsuru", root: "ك-ث-ر", pos: "ism", meaning_tr: "çoklukla övünme", irab_short: "fâil, merfû; VI. bâb masdarı" },
        ],
      },
      {
        surah: 102, ayah: 2,
        arabic: "حَتَّىٰ زُرْتُمُ ٱلْمَقَابِرَ",
        translation: "Kabirleri ziyaret edinceye kadar.",
        words: [
          { arabic: "حَتَّىٰ", transliteration: "hattâ", root: null, pos: "harf", meaning_tr: "…kadar", irab_short: "gâye edatı" },
          { arabic: "زُرْتُمُ", transliteration: "zurtumu", root: "ز-و-ر", pos: "fil", meaning_tr: "ziyaret ettiniz", irab_short: "mâzî, muhatap cem" },
          { arabic: "ٱلْمَقَابِرَ", transliteration: "el-makâbire", root: "ق-ب-ر", pos: "ism", meaning_tr: "kabirler", irab_short: "mef'ûlun bih, mansûb" },
        ],
      },
      {
        surah: 102, ayah: 3,
        arabic: "كَلَّا سَوْفَ تَعْلَمُونَ",
        translation: "Hayır! İleride bileceksiniz.",
        words: [
          { arabic: "كَلَّا", transliteration: "kellâ", root: null, pos: "harf", meaning_tr: "hayır! (zecr)", irab_short: "zecr edatı" },
          { arabic: "سَوْفَ", transliteration: "sevfe", root: null, pos: "harf", meaning_tr: "ileride (gelecek)", irab_short: "istikbâl edatı" },
          { arabic: "تَعْلَمُونَ", transliteration: "ta'lemûne", root: "ع-ل-م", pos: "fil", meaning_tr: "bileceksiniz", irab_short: "muzâri, muhatap cem, merfû" },
        ],
      },
      {
        surah: 102, ayah: 4,
        arabic: "ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ",
        translation: "Sonra, hayır! İleride bileceksiniz.",
        words: [
          { arabic: "ثُمَّ", transliteration: "summe", root: null, pos: "harf", meaning_tr: "sonra", irab_short: "atıf, terâhî" },
          { arabic: "كَلَّا", transliteration: "kellâ", root: null, pos: "harf", meaning_tr: "hayır!", irab_short: "zecr edatı" },
          { arabic: "سَوْفَ", transliteration: "sevfe", root: null, pos: "harf", meaning_tr: "ileride", irab_short: "istikbâl edatı" },
          { arabic: "تَعْلَمُونَ", transliteration: "ta'lemûne", root: "ع-ل-م", pos: "fil", meaning_tr: "bileceksiniz", irab_short: "muzâri, muhatap cem" },
        ],
      },
      {
        surah: 102, ayah: 5,
        arabic: "كَلَّا لَوْ تَعْلَمُونَ عِلْمَ ٱلْيَقِينِ",
        translation: "Hayır! Kesin bilgiyle bilseydiniz,",
        words: [
          { arabic: "كَلَّا", transliteration: "kellâ", root: null, pos: "harf", meaning_tr: "hayır!", irab_short: "zecr/isti'nâf" },
          { arabic: "لَوْ", transliteration: "lev", root: null, pos: "harf", meaning_tr: "eğer/keşke", irab_short: "şart, tahzîr" },
          { arabic: "تَعْلَمُونَ", transliteration: "ta'lemûne", root: "ع-ل-م", pos: "fil", meaning_tr: "bilseydiniz", irab_short: "muzâri, şart fiili" },
          { arabic: "عِلْمَ", transliteration: "ılme", root: "ع-ل-م", pos: "ism", meaning_tr: "bilgisi(yle)", irab_short: "mef'ûl-i mutlak, mansûb" },
          { arabic: "ٱلْيَقِينِ", transliteration: "el-yakîni", root: "ي-ق-ن", pos: "ism", meaning_tr: "kesinliğin", irab_short: "muzâfun ileyh, mecrûr" },
        ],
      },
      {
        surah: 102, ayah: 6,
        arabic: "لَتَرَوُنَّ ٱلْجَحِيمَ",
        translation: "Andolsun, cehennemi göreceksiniz.",
        words: [
          { arabic: "لَتَرَوُنَّ", transliteration: "le-terevunne", root: "ر-أ-ي", pos: "fil", meaning_tr: "kesinlikle göreceksiniz", irab_short: "muzâri, lâm-ı kasem + nûn-u te'kîd" },
          { arabic: "ٱلْجَحِيمَ", transliteration: "el-cahîme", root: "ج-ح-م", pos: "ism", meaning_tr: "cehennem", irab_short: "mef'ûlun bih, mansûb" },
        ],
      },
      {
        surah: 102, ayah: 7,
        arabic: "ثُمَّ لَتَرَوُنَّهَا عَيْنَ ٱلْيَقِينِ",
        translation: "Sonra onu kesin gözle göreceksiniz.",
        words: [
          { arabic: "ثُمَّ", transliteration: "summe", root: null, pos: "harf", meaning_tr: "sonra", irab_short: "atıf" },
          { arabic: "لَتَرَوُنَّهَا", transliteration: "le-terevunnehâ", root: "ر-أ-ي", pos: "fil", meaning_tr: "onu kesinlikle göreceksiniz", irab_short: "muzâri, lâm-ı kasem + nûn-u te'kîd + hâ" },
          { arabic: "عَيْنَ", transliteration: "ayne", root: "ع-ي-ن", pos: "ism", meaning_tr: "gözü/ta kendisi", irab_short: "mef'ûl-i mutlak, mansûb" },
          { arabic: "ٱلْيَقِينِ", transliteration: "el-yakîni", root: "ي-ق-ن", pos: "ism", meaning_tr: "kesinliğin", irab_short: "muzâfun ileyh, mecrûr" },
        ],
      },
      {
        surah: 102, ayah: 8,
        arabic: "ثُمَّ لَتُسْـَٔلُنَّ يَوْمَئِذٍ عَنِ ٱلنَّعِيمِ",
        translation: "Sonra o gün nimetlerden sorulacaksınız.",
        words: [
          { arabic: "ثُمَّ", transliteration: "summe", root: null, pos: "harf", meaning_tr: "sonra", irab_short: "atıf" },
          { arabic: "لَتُسْـَٔلُنَّ", transliteration: "le-tus'elunne", root: "س-أ-ل", pos: "fil", meaning_tr: "kesinlikle sorulacaksınız", irab_short: "muzâri meçhul, lâm-ı kasem + nûn-u te'kîd" },
          { arabic: "يَوْمَئِذٍ", transliteration: "yevmeizin", root: "ي-و-م", pos: "ism", meaning_tr: "o gün", irab_short: "zarf-ı zaman" },
          { arabic: "عَنِ", transliteration: "an", root: null, pos: "harf", meaning_tr: "hakkında", irab_short: "harf-i cer" },
          { arabic: "ٱلنَّعِيمِ", transliteration: "en-naîmi", root: "ن-ع-م", pos: "ism", meaning_tr: "nimet(ler)", irab_short: "mecrûr" },
        ],
      },
    ],
    grammarNotes: [
      { title: "VI. Bâb: تَكَاثُر", explanation: "ك-ث-ر kökünden VI. bâb (تَفَاعُل) masdarı: karşılıklı çoklukta yarışma. 'Kim daha çok?' yarışı. تَفَاعُل = karşılıklılık (müşâreket) ifade eder.", rule: "تَفَاعُلٌ = VI. bâb masdarı\nتَفَاعَلَ: karşılıklı / gösterişli eylem\nتَكَاثُر = çoklukla birbirine üstünlük taslama", examples: ["تَكَاثُر — ك-ث-ر: çoklukla övünme", "تَعَاوُن — ع-و-ن: yardımlaşma", "تَوَاصُل — و-ص-ل: iletişim"] },
      { title: "Nûn-u Te'kîd (لَتَرَوُنَّ)", explanation: "لَتَرَوُنَّ: Lâm-ı kasem + muzâri fiil + nûn-u te'kîd-i sakîle (ağır nun). Üç katmanlı vurgu: (1) لَ kasem, (2) fiil muzâri, (3) نّ pekiştirme. 'Kesinlikle göreceksiniz!'", rule: "لَ + muzâri + نَّ = yemin + gelecek + kesinlik\nNûn-u sakîle: شَدّة → daha güçlü vurgu\nNûn-u hafîfe: şeddesiz → daha hafif vurgu", examples: ["لَتَرَوُنَّ = kesinlikle göreceksiniz", "لَتُسْأَلُنَّ = kesinlikle sorulacaksınız", "لَنَسْفَعًا = elbette tutup sürükleriz (Alak 96:15)"] },
      { title: "عِلْمُ اليَقِين / عَيْنُ اليَقِين", explanation: "İki bilgi derecesi: (1) عِلْمُ اليَقِين = haberle/delille kesin bilgi (2) عَيْنُ اليَقِين = gözle görme kesinliği. Üçüncüsü: حَقُّ اليَقِين = bizzat yaşama (Vâkıa 56:95). Tedricî yükselme.", rule: "عِلْمُ اليَقِين = bilgisel kesinlik (haber)\nعَيْنُ اليَقِين = görsel kesinlik (şahitlik)\nحَقُّ اليَقِين = deneyimsel kesinlik (yaşama)", examples: ["لَوْ تَعْلَمُونَ عِلْمَ ٱلْيَقِينِ — 102:5", "ثُمَّ لَتَرَوُنَّهَا عَيْنَ ٱلْيَقِينِ — 102:7", "إِنَّ هَذَا لَهُوَ حَقُّ الْيَقِينِ — 56:95"] },
    ],
    exercises: [
      { id: "L42-Q01", type: "bab_identify", question: "تَكَاثُر hangi bâbın masdarıdır?", options: ["VI. bâb (تَفَاعُل — karşılıklı)", "II. bâb (تَفْعِيل)", "V. bâb (تَفَعُّل)", "I. bâb (فَعْل)"], correct: 0, explanation: "تَفَاعُل = VI. bâb masdarı. Karşılıklılık: birbirinizle çokluk yarışı.", relatedRoots: ["ك-ث-ر"] },
      { id: "L42-Q02", type: "single_choice", question: "لَتَرَوُنَّ'deki üç vurgu katmanı nedir?", options: ["لَ kasem + muzâri fiil + نّ te'kîd nûnu", "إِنَّ + لَ + kasem", "لَ + مَا + kasem", "لَ + قَدْ + نّ"], correct: 0, explanation: "Üçlü pekiştirme: (1) لَ = yemin (2) fiil muzâri = gelecek zaman (3) نّ = ağır te'kîd nûnu.", relatedRoots: ["ر-أ-ي"] },
      { id: "L42-Q03", type: "single_choice", question: "عِلْمَ اليَقِين ile عَيْنَ اليَقِين arasındaki fark nedir?", options: ["İlki haberle bilme, ikincisi gözle görme kesinliği", "Aynı anlam, tekrar", "İlki zayıf, ikincisi orta", "İlki görme, ikincisi duyma"], correct: 0, explanation: "عِلْمُ اليَقِين = delilsel/habersel kesinlik, عَيْنُ اليَقِين = bizzat gözle görme kesinliği. Tedricî artış.", relatedRoots: ["ع-ل-م", "ي-ق-ن"] },
      { id: "L42-Q04", type: "single_choice", question: "كَلَّا سَوْفَ تَعْلَمُونَ iki kez tekrarlanmasının belâgat hikmeti nedir?", options: ["Tikrâr ile tehdidin şiddetini artırma, ثُمَّ ile ikinci aşama", "Sadece anlam pekiştirme", "İlki dünya, ikincisi ahiret (bazı müfessirlere göre) + genel tedrîc", "İlk ve üçüncü şık birlikte doğru"], correct: 3, explanation: "Hem pekiştirme hem bazı müfessirlere göre dünya azabı + âhiret azabı ayrımı. ثُمَّ = mesafe ve tehdit artışı.", relatedRoots: ["ع-ل-م"] },
      { id: "L42-Q05", type: "irab_identify", question: "عِلْمَ (102:5) ne fonksiyondadır?", options: ["Mef'ûl-i mutlak (aynı kökten: تَعْلَمُونَ عِلْمَ)", "Mef'ûlun bih", "Temyîz", "Hâl"], correct: 0, explanation: "Mef'ûl-i mutlak: تَعْلَمُونَ عِلْمَ اليَقِين — 'kesinliğin bilgisiyle bilseydiniz'. Fiille aynı kök: ع-ل-م.", relatedRoots: ["ع-ل-م"] },
      { id: "L42-Q06", type: "bab_identify", question: "أَلْهَاكُمُ hangi bâbtandır?", options: ["IV. bâb (أَفْعَلَ): oyaladı", "I. bâb (فَعَلَ)", "II. bâb (فَعَّلَ)", "V. bâb (تَفَعَّلَ)"], correct: 0, explanation: "أَلْهَى = IV. bâb, ل-ه-و kökünden. لَهَا = oyalandı → أَلْهَى = oyalattı (geçişli yapma).", relatedRoots: ["ل-ه-و"] },
      { id: "L42-Q07", type: "balagha_identify", question: "كَلَّا سَوْفَ تَعْلَمُونَ ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ ثُمَّ كَلَّا yapısındaki sanat nedir?", options: ["Itnâb — كَلَّا tekrarı ile giderek artan uyarı (zecr)", "Tıbâk — zıtlık", "İsti'âre — metafor", "Hazf — düşürme"], correct: 0, explanation: "Üç كَلَّا: zecr (hayır!) giderek şiddetleniyor. ثُمَّ = aralık/mühlet → her seferinde tehdit artışı. Itnâb.", relatedRoots: ["ع-ل-م"] },
    ],
  },
];

export default level5Lessons;
