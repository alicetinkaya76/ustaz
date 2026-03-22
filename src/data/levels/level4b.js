// ═══════════════════════════════════════════════════════════
// SEVİYE 4 DEVAM — L31 (Şems), L32 (Leyl), L33 (Duhâ), L34 (İnşirâh)
// ═══════════════════════════════════════════════════════════

const level4bLessons = [
  // ═══════════════════════════════════════════════════════════
  // DERS 31 — ŞEMS SURESİ (91:1-15)
  // ═══════════════════════════════════════════════════════════
  {
    id: "L31-sems",
    title: "Şems Suresi (1-15)",
    titleAr: "سُورَةُ الشَّمْسِ",
    stage: 2,
    level: 4,
    surah: 91,
    description: "11 ardışık kasem. Nefis tezkiyesi: felâh ve husrân. Semûd-deve helâkı. VII. bâb dönüşlü fiiller, II. bâb tezkiye/tedsiye.",
    verses: [
      {
        surah: 91, ayah: 1,
        arabic: "وَٱلشَّمْسِ وَضُحَىٰهَا",
        translation: "Güneşe ve onun kuşluk aydınlığına andolsun",
        words: [
          {
            arabic: "وَٱلشَّمْسِ", transliteration: "waš-šamsi", root: "ش-م-س", pattern: "فَعْل", pos: "ism",
            meaning_tr: "güneş", irab: "وَ kasem vâv'ı + الشَّمْسِ {mecrûr} (kasem harfi ile).", irab_short: "kasem, mecrûr",
            turkish_bridge: "Şems (güneş), şemsiye bu kökten", balagha_note: "11 kasemlik zincirin başı. Kozmik düzenden başlayıp insanın nefsine iniyor.",
          },
          {
            arabic: "وَضُحَىٰهَا", transliteration: "wa ḍuḥāhā", root: "ض-ح-و", pattern: "فُعَل", pos: "ism",
            meaning_tr: "onun kuşluk aydınlığı", irab: "وَ atıf + ضُحَى {mecrûr} + هَا (muzâfun ileyh zamîr).", irab_short: "kasem, mecrûr + zamîr",
            turkish_bridge: "Duhâ (kuşluk vakti)", balagha_note: "Güneşin en parlak anı → aydınlık, netlik sembolü.",
          },
        ],
      },
      {
        surah: 91, ayah: 7,
        arabic: "وَنَفْسٍ وَمَا سَوَّىٰهَا",
        translation: "Nefse ve onu düzgün biçimlendirene andolsun",
        words: [
          {
            arabic: "وَنَفْسٍ", transliteration: "wa nafsin", root: "ن-ف-س", pattern: "فَعْل", pos: "ism",
            meaning_tr: "nefis, can", irab: "وَ kasem + نَفْسٍ {mecrûr} (tenvîn → nekre: herhangi bir nefis → genelleme).", irab_short: "kasem, mecrûr",
            turkish_bridge: "Nefis, nefes, enfüs bu kökten", balagha_note: "Nekre kullanımı (نَفْسٍ): belirli bir kişi değil, 'her nefis'. Kozmik kasem zinciri nefiste buluşuyor.",
          },
          {
            arabic: "سَوَّىٰهَا", transliteration: "sawwāhā", root: "س-و-ي", pattern: "فَعَّلَ", pos: "fil",
            meaning_tr: "onu düzenledi, dengeli yarattı", irab: "II. bâb {fiil-i mâzî} + هَا (mef'ûl bih). {Fâil}: müstetir هُوَ (Allah).", irab_short: "fiil, mâzî (II. bâb)",
            turkish_bridge: "Tesviye (düzleme, eşitleme) bu kökten", balagha_note: "II. bâb → 'iyice/tamamen düzenledi'. Nefse hem hayır hem şer kapasitesi verdi.",
          },
        ],
      },
      {
        surah: 91, ayah: 8,
        arabic: "فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَىٰهَا",
        translation: "Sonra ona kötülüğünü ve takvâsını ilham etti",
        words: [
          {
            arabic: "فَأَلْهَمَهَا", transliteration: "fa-alhamahā", root: "ل-ه-م", pattern: "أَفْعَلَ", pos: "fil",
            meaning_tr: "ona ilham etti", irab: "فَ atıf + IV. bâb {fiil-i mâzî} + هَا (mef'ûl bih). لَهِمَ (yuttu) → أَلْهَمَ (içine koydu, ilham etti).", irab_short: "fiil, mâzî (IV. bâb)",
            turkish_bridge: "İlham bu kökten", balagha_note: "IV. bâb ta'diye: لَهِمَ (yuttu) → أَلْهَمَ (yutturttu → içine koydu). Nefse iç bilgi yerleştirme.",
          },
          {
            arabic: "فُجُورَهَا", transliteration: "fujūrahā", root: "ف-ج-ر", pattern: "فُعُول", pos: "ism",
            meaning_tr: "onun kötülüğünü", irab: "{Mef'ûl bih sânî}, {mensûb} + هَا (muzâfun ileyh).", irab_short: "mef'ûl bih, mensûb",
            turkish_bridge: "Fücûr (kötülük), fecir (yarılma) bu kökten", balagha_note: null,
          },
          {
            arabic: "وَتَقْوَىٰهَا", transliteration: "wa taqwāhā", root: "و-ق-ي", pattern: null, pos: "ism",
            meaning_tr: "onun takvâsını", irab: "Atıf, {mef'ûl bih}, {mensûb} + هَا.", irab_short: "mef'ûl bih, mensûb",
            turkish_bridge: "Takvâ (korunma), ittikâ bu kökten", balagha_note: "فُجُور → تَقْوَى: önce kötülük sonra takvâ. İnsan her ikisini de bilir → seçim yapmalı.",
          },
        ],
      },
      {
        surah: 91, ayah: 9,
        arabic: "قَدْ أَفْلَحَ مَن زَكَّىٰهَا",
        translation: "Onu arındıran gerçekten kurtuluşa erdi",
        words: [
          {
            arabic: "أَفْلَحَ", transliteration: "aflaḥa", root: "ف-ل-ح", pattern: "أَفْعَلَ", pos: "fil",
            meaning_tr: "kurtuluşa erdi, başardı", irab: "IV. bâb {fiil-i mâzî}. {Fâil}: مَنْ (ism-i mevsûl).", irab_short: "fiil, mâzî (IV. bâb)",
            turkish_bridge: "Felâh (kurtuluş) bu kökten", balagha_note: "قَدْ + mâzî = kesinlik. Kasem cevâbının bir parçası: 11 kasem → sonuç.",
          },
          {
            arabic: "زَكَّىٰهَا", transliteration: "zakkāhā", root: "ز-ك-و", pattern: "فَعَّلَ", pos: "fil",
            meaning_tr: "onu arındırdı", irab: "II. bâb {fiil-i mâzî} + هَا (mef'ûl bih). زَكَا (temiz oldu) → زَكَّى (temizledi).", irab_short: "fiil, mâzî (II. bâb)",
            turkish_bridge: "Zekât, tezkiye (arınma) bu kökten", balagha_note: "II. bâb teksîr: nefsini 'iyice' arındıran. Tek seferlik değil, sürekli çaba.",
          },
        ],
      },
      {
        surah: 91, ayah: 10,
        arabic: "وَقَدْ خَابَ مَن دَسَّىٰهَا",
        translation: "Ve onu (günahla) kirletip gömen hüsrana uğradı",
        words: [
          {
            arabic: "خَابَ", transliteration: "ḫāba", root: "خ-ي-ب", pattern: "فَعَلَ", pos: "fil",
            meaning_tr: "hüsrana uğradı, hayal kırıklığına uğradı", irab: "I. bâb {fiil-i mâzî}. {Fâil}: مَنْ.", irab_short: "fiil, mâzî",
            turkish_bridge: "Haybet (hayal kırıklığı) bu kökten", balagha_note: "أَفْلَحَ (kurtuluş) ↔ خَابَ (hüsrân): mükemmel karşıtlık.",
          },
          {
            arabic: "دَسَّىٰهَا", transliteration: "dassāhā", root: "د-س-و", pattern: "فَعَّلَ", pos: "fil",
            meaning_tr: "onu (karanlığa) gömdü, kirletip gizledi", irab: "II. bâb {fiil-i mâzî} + هَا. دَسَّى: aslı دَسَّسَ → فَعَّلَ kalıbına dönüşmüş.", irab_short: "fiil, mâzî (II. bâb)",
            turkish_bridge: null, balagha_note: "زَكَّى (arındırdı) ↔ دَسَّى (gömdü): II. bâb karşıtlığı. Nefsini ya yüceltirsin ya gömersin.",
          },
        ],
      },
      {
        surah: 91, ayah: 14,
        arabic: "فَدَمْدَمَ عَلَيْهِمْ رَبُّهُم بِذَنۢبِهِمْ فَسَوَّىٰهَا",
        translation: "Rableri günahları yüzünden onları helâk edip dümdüz etti",
        words: [
          {
            arabic: "فَدَمْدَمَ", transliteration: "fa-damdama", root: "د-م-د-م", pattern: "فَعْلَلَ", pos: "fil",
            meaning_tr: "yere batırdı, helâk etti", irab: "Rubâî (dört harfli kök) {fiil-i mâzî}. Onomatope: yıkım sesi.", irab_short: "fiil, mâzî (rubâî)",
            turkish_bridge: null, balagha_note: "دَمْدَمَ: ses taklidi (onomatope). Yıkımın gürültüsünü taklit eder. Rubâî kök: 4 harfli → nadir ve etkileyici.",
          },
          {
            arabic: "فَسَوَّىٰهَا", transliteration: "fa-sawwāhā", root: "س-و-ي", pattern: "فَعَّلَ", pos: "fil",
            meaning_tr: "onu dümdüz etti", irab: "II. bâb {fiil-i mâzî} + هَا. Ayet 7'deki سَوَّى ile aynı kök, farklı anlam.", irab_short: "fiil, mâzî (II. bâb)",
            turkish_bridge: "Tesviye (düzleme) bu kökten", balagha_note: "سَوَّى 7. ayette 'dengeli yarattı', 14. ayette 'dümdüz etti'. Aynı fiil, zıt sonuç: yaratma ↔ yıkma.",
          },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "11 Kasem Zinciri — Kozmikten İnsana",
        explanation: "Şems suresi Kur'an'daki en uzun kasem zinciridir: güneş, ay, gündüz, gece, gök, yer ve nefis. Kozmik düzenden insanın iç dünyasına doğru bir iniş.",
        rule: "Kasem vâv'ı + mecrûr sıralaması:\nوَالشَّمْسِ → وَالْقَمَرِ → وَالنَّهَارِ → وَاللَّيْلِ → وَالسَّمَاءِ → وَالْأَرْضِ → وَنَفْسٍ\nCevâb: قَدْ أَفْلَحَ مَن زَكَّاهَا",
        examples: ["11 kasem → 1 sonuç: nefis tezkiyesi = felâh", "Son kasem nekre (نَفْسٍ): her nefis → evrensel mesaj"],
      },
      {
        title: "II. Bâb Karşıtlığı: زَكَّى ↔ دَسَّى",
        explanation: "Her iki fiil de II. bâbtandır ama zıt anlamlıdır. زَكَّى (arındırdı) ↔ دَسَّى (gömdü/kirletti). İnsan nefsiyle iki şey yapabilir.",
        rule: "زَكَا (temiz oldu) → II. bâb: زَكَّى (iyice temizledi)\nدَسَّ (gizledi) → II. bâb: دَسَّى (iyice gömdü)\nHer ikisi de + هَا: nefsini arındıran / nefsini gömen",
        examples: ["قَدْ أَفْلَحَ مَن زَكَّاهَا (91:9)", "وَقَدْ خَابَ مَن دَسَّاهَا (91:10)"],
      },
    ],
    exercises: [
      { id: "L31-Q01", type: "single_choice", question: "Şems suresindeki kasem sayısı kaçtır?", options: ["11 kasem (güneş, ay, gündüz, gece, gök, yer, nefis vb.)", "7 kasem", "3 kasem", "5 kasem"], correct: 0, explanation: "Kur'an'daki en uzun kasem zinciri: 11 ayet boyunca yemin → cevap 9. ayette.", relatedRoots: ["ش-م-س"] },
      { id: "L31-Q02", type: "bab_identify", question: "زَكَّىٰهَا fiili kaçıncı bâbtandır?", targetWord: "زَكَّىٰهَا", options: ["II. bâb (فَعَّلَ) → زَكَّى (arındırdı)", "I. bâb → زَكَا (temiz oldu)", "IV. bâb → أَزْكَى", "V. bâb → تَزَكَّى"], correct: 0, explanation: "زَكَّى: II. bâb. Aslı زَكَا (temiz oldu) → II. bâb teksîr: 'iyice/tamamen arındırdı'.", relatedRoots: ["ز-ك-و"] },
      { id: "L31-Q03", type: "root_extract", question: "أَفْلَحَ kelimesinin kökü nedir?", targetWord: "أَفْلَحَ", options: ["ف-ل-ح", "ف-ل-ق", "ف-ل-ك", "ف-ت-ح"], correct: 0, explanation: "أَفْلَحَ: ف-ل-ح kökünden IV. bâb. فَلَحَ (toprağı yardı → başardı) → أَفْلَحَ (kurtuluşa erdi).", relatedRoots: ["ف-ل-ح"] },
      { id: "L31-Q04", type: "single_choice", question: "سَوَّى fiili surede hangi iki farklı anlamda kullanılır?", options: ["7. ayet: 'dengeli yarattı' / 14. ayet: 'dümdüz etti' (yıktı)", "Her ikisi de 'yarattı'", "Her ikisi de 'yıktı'", "7. ayet: 'eşitledi' / 14. ayet: 'düzenledi'"], correct: 0, explanation: "Aynı II. bâb fiil zıt bağlamlarda: yaratırken 'dengeli biçimlendirdi', helâk ederken 'dümdüz etti'. Tikrâr-ı maʿnâ.", relatedRoots: ["س-و-ي"] },
      { id: "L31-Q05", type: "irab_identify", question: "وَنَفْسٍ ifadesindeki نَفْسٍ neden nekre (belirsiz)?", targetWord: "نَفْسٍ", options: ["Ta'zîm + ta'mîm: 'her/herhangi bir nefis' → evrensel mesaj", "Belirli bir kişiden bahsediyor", "Gramer zorunluluğu", "Küçümseme (tahkîr)"], correct: 0, explanation: "Nekre kasemde ta'zîm (yüceltme) + genelleme: belirli bir kişi değil, tüm insanlar. 'Öyle yüce bir nefis ki!'", relatedRoots: ["ن-ف-س"] },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DERS 32 — LEYL SURESİ (92:1-21)
  // ═══════════════════════════════════════════════════════════
  {
    id: "L32-leyl",
    title: "Leyl Suresi (1-21)",
    titleAr: "سُورَةُ اللَّيْلِ",
    stage: 2,
    level: 4,
    surah: 92,
    description: "Gece-gündüz, erkek-kadın, veren-cimri: karşıtlık (tıbâk) yapısı. V. bâb تَفَعَّلَ, ism-i tafdîl, إِنَّ + لَ te'kîd.",
    verses: [
      {
        surah: 92, ayah: 1,
        arabic: "وَٱلَّيْلِ إِذَا يَغْشَىٰ",
        translation: "Karanlığıyla örttüğünde geceye andolsun",
        words: [
          {
            arabic: "وَٱلَّيْلِ", transliteration: "wal-layli", root: "ل-ي-ل", pattern: "فَعْل", pos: "ism",
            meaning_tr: "gece", irab: "وَ kasem vâv'ı + اللَّيْلِ {mecrûr}.", irab_short: "kasem, mecrûr",
            turkish_bridge: "Leyl (gece), leylâ bu kökten", balagha_note: "Kasem üçlemesi: gece → gündüz → erkek/kadın yaratma. Kozmik karşıtlıklar.",
          },
          {
            arabic: "يَغْشَىٰ", transliteration: "yaġšā", root: "غ-ش-ي", pattern: "يَفْعَلُ", pos: "fil",
            meaning_tr: "örttüğünde, kapladığında", irab: "I. bâb {fiil-i muzâri}. {Fâil}: müstetir هُوَ (gece).", irab_short: "fiil, muzâri",
            turkish_bridge: "Gışâ (örtü) bu kökten", balagha_note: null,
          },
        ],
      },
      {
        surah: 92, ayah: 5,
        arabic: "فَأَمَّا مَنْ أَعْطَىٰ وَٱتَّقَىٰ",
        translation: "Veren ve sakınan kimse...",
        words: [
          {
            arabic: "أَعْطَىٰ", transliteration: "aʿṭā", root: "ع-ط-و", pattern: "أَفْعَلَ", pos: "fil",
            meaning_tr: "verdi", irab: "IV. bâb {fiil-i mâzî}. {Fâil}: مَنْ (ism-i mevsûl).", irab_short: "fiil, mâzî (IV. bâb)",
            turkish_bridge: "İ'tâ (verme), atiyye (bağış) bu kökten", balagha_note: "Cömertlik → takvâ → tasdîk: üç aşamalı hayır portresi.",
          },
          {
            arabic: "وَٱتَّقَىٰ", transliteration: "wat-taqā", root: "و-ق-ي", pattern: "اِفْتَعَلَ", pos: "fil",
            meaning_tr: "sakındı, korundu", irab: "VIII. bâb {fiil-i mâzî}. {Fâil}: مَنْ. و-ق-ي → اِتَّقَى.", irab_short: "fiil, mâzî (VIII. bâb)",
            turkish_bridge: "Takvâ, ittikâ, muttakî bu kökten", balagha_note: null,
          },
        ],
      },
      {
        surah: 92, ayah: 7,
        arabic: "فَسَنُيَسِّرُهُۥ لِلْيُسْرَىٰ",
        translation: "Biz de onu en kolay yola hazırlarız",
        words: [
          {
            arabic: "فَسَنُيَسِّرُهُۥ", transliteration: "fa-sa-nuyassiruhū", root: "ي-س-ر", pattern: "يُفَعِّلُ", pos: "fil",
            meaning_tr: "onu kolaylaştıracağız", irab: "فَ cevâbiye + سَ istikbal + II. bâb {fiil-i muzâri} + هُ (mef'ûl bih). {Fâil}: نَحْنُ (azamet).", irab_short: "fiil, muzâri (II. bâb)",
            turkish_bridge: "Tesyîr (kolaylaştırma), meyser bu kökten", balagha_note: "II. bâb: يَسُرَ (kolay oldu) → يَسَّرَ (kolaylaştırdı). Allah'ın kolaylaştırması.",
          },
          {
            arabic: "لِلْيُسْرَىٰ", transliteration: "lil-yusrā", root: "ي-س-ر", pattern: "فُعْلَى", pos: "ism",
            meaning_tr: "en kolay yol (hayır yolu)", irab: "لِ harf-i cer + الْيُسْرَى {mecrûr}. İsm-i tafdîl müenneş.", irab_short: "mecrûr (ism-i tafdîl)",
            turkish_bridge: "Yüsrâ (en kolay), musr bu kökten", balagha_note: "الْيُسْرَى ↔ الْعُسْرَى: Şems'teki zıtlık burada da: kolay yol (hayır) ↔ zor yol (şer).",
          },
        ],
      },
      {
        surah: 92, ayah: 8,
        arabic: "وَأَمَّا مَنۢ بَخِلَ وَٱسْتَغْنَىٰ",
        translation: "Cimrilik eden ve kendini müstağni sayan kimse...",
        words: [
          {
            arabic: "بَخِلَ", transliteration: "baḫila", root: "ب-خ-ل", pattern: "فَعِلَ", pos: "fil",
            meaning_tr: "cimrilik etti", irab: "I. bâb {fiil-i mâzî}. {Fâil}: مَنْ.", irab_short: "fiil, mâzî",
            turkish_bridge: "Bahîl (cimri), buhl bu kökten", balagha_note: "أَعْطَى (verdi) ↔ بَخِلَ (cimrilik etti): surenin temel karşıtlığı.",
          },
          {
            arabic: "وَٱسْتَغْنَىٰ", transliteration: "was-taġnā", root: "غ-ن-ي", pattern: "اِسْتَفْعَلَ", pos: "fil",
            meaning_tr: "kendini müstağni saydı", irab: "X. bâb {fiil-i mâzî}. {Fâil}: مَنْ. غَنِيَ (zengin oldu) → اِسْتَغْنَى (zenginlik iddia etti).", irab_short: "fiil, mâzî (X. bâb)",
            turkish_bridge: "İstiğnâ (müstağni olma), ganî (zengin) bu kökten", balagha_note: "X. bâb talep/iddia: zengin olmayı talep etti → Allah'a muhtaç olmadığını sandı.",
          },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "فَأَمَّا ... فَـ Karşıtlık Yapısı (Tıbâk)",
        explanation: "Leyl suresi أَمَّا ... فَـ kalıbıyla iki insan tipini karşılaştırır: veren/sakınan (5-7) ↔ cimri/müstağni (8-10). Belâgatteki tıbâk (karşıtlık) sanatı.",
        rule: "فَأَمَّا مَنْ أَعْطَى ... فَسَنُيَسِّرُهُ لِلْيُسْرَى\nوَأَمَّا مَنْ بَخِلَ ... فَسَنُيَسِّرُهُ لِلْعُسْرَى\nKarşıtlık: أَعْطَى/بَخِلَ, يُسْرَى/عُسْرَى",
        examples: ["أَعْطَى (verdi) ↔ بَخِلَ (cimrilik etti)", "اتَّقَى (sakındı) ↔ اسْتَغْنَى (müstağni gördü)", "اليُسْرَى (kolaylık) ↔ العُسْرَى (zorluk)"],
      },
    ],
    exercises: [
      { id: "L32-Q01", type: "bab_identify", question: "اِسْتَغْنَى fiili kaçıncı bâbtandır?", targetWord: "اِسْتَغْنَى", options: ["X. bâb (اِسْتَفْعَلَ) → kendini zengin/müstağni saydı", "I. bâb → غَنِيَ (zengin oldu)", "IV. bâb → أَغْنَى (zengin kıldı)", "VIII. bâb"], correct: 0, explanation: "X. bâb talep/iddia: غَنِيَ (zengin oldu) → اِسْتَغْنَى (zenginlik iddia etti → Allah'a ihtiyacını inkâr).", relatedRoots: ["غ-ن-ي"] },
      { id: "L32-Q02", type: "single_choice", question: "Surenin temel belâgat sanatı nedir?", options: ["Tıbâk (karşıtlık): veren↔cimri, gece↔gündüz, yüsrâ↔usrâ", "Teşbîh (benzetme)", "İstifhâm (soru)", "Tekrâr (yineleme)"], correct: 0, explanation: "Tıbâk: zıt kavramları yan yana getirerek vurgulama. Gece/gündüz, erkek/kadın, veren/cimri, kolay yol/zor yol.", relatedRoots: ["ل-ي-ل"] },
      { id: "L32-Q03", type: "root_extract", question: "نُيَسِّرُهُ kelimesinin kökü nedir?", targetWord: "نُيَسِّرُهُ", options: ["ي-س-ر", "ن-ص-ر", "ي-س-ع", "و-س-ر"], correct: 0, explanation: "نُيَسِّرُ: II. bâb muzâri (يَسَّرَ/يُيَسِّرُ). ي-س-ر kökünden. Kolaylaştırmak.", relatedRoots: ["ي-س-ر"] },
      { id: "L32-Q04", type: "single_choice", question: "أَعْطَى ve بَخِلَ fiilleri arasındaki bâb farkı ne anlam katar?", options: ["أَعْطَى IV. bâb (ta'diye: başkasına verme), بَخِلَ I. bâb (temel eylem: cimrilik)", "İkisi de I. bâb", "İkisi de IV. bâb", "Bâb farkı yok"], correct: 0, explanation: "أَعْطَى (IV): عَطَا → başkasına vermeyi mümkün kıldı. بَخِلَ (I): temel eylem. IV. bâb geçişli yaparak 'başkasına' boyutunu ekliyor.", relatedRoots: ["ع-ط-و", "ب-خ-ل"] },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DERS 33 — DUHÂ SURESİ (93:1-11)
  // ═══════════════════════════════════════════════════════════
  {
    id: "L33-duha",
    title: "Duhâ Suresi (1-11)",
    titleAr: "سُورَةُ الضُّحَىٰ",
    stage: 2,
    level: 4,
    surah: 93,
    description: "Hz. Peygamber'e teselli. Olumsuz soru tekniği (أَلَمْ), ism-i tafdîl serisi (خَيْر), فَأَمَّا/وَأَمَّا emir-tavsiye çatısı.",
    verses: [
      {
        surah: 93, ayah: 1,
        arabic: "وَٱلضُّحَىٰ",
        translation: "Kuşluk vaktine andolsun",
        words: [
          {
            arabic: "وَٱلضُّحَىٰ", transliteration: "waḍ-ḍuḥā", root: "ض-ح-و", pattern: "فُعَل", pos: "ism",
            meaning_tr: "kuşluk vakti", irab: "وَ kasem + الضُّحَى {mecrûr}.", irab_short: "kasem, mecrûr",
            turkish_bridge: "Duhâ (kuşluk)", balagha_note: "Kuşluk = aydınlık → rahmet. Gece = karanlık → vahyin kesilmesi. Teselli: aydınlık geri gelecek.",
          },
        ],
      },
      {
        surah: 93, ayah: 3,
        arabic: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ",
        translation: "Rabbin seni ne terk etti ne de sana darıldı",
        words: [
          {
            arabic: "وَدَّعَكَ", transliteration: "waddaʿaka", root: "و-د-ع", pattern: "فَعَّلَ", pos: "fil",
            meaning_tr: "seni terk etti", irab: "II. bâb {fiil-i mâzî} + كَ (mef'ûl bih zamîr). {Fâil}: رَبُّكَ. مَا nefiy.", irab_short: "fiil, mâzî (II. bâb)",
            turkish_bridge: "Vedâ, tevdî bu kökten", balagha_note: "II. bâb: وَدَعَ (bıraktı) → وَدَّعَ (iyice terk etti). Ama مَا ile nefiy: terk etmedi!",
          },
          {
            arabic: "قَلَىٰ", transliteration: "qalā", root: "ق-ل-ي", pattern: "فَعَلَ", pos: "fil",
            meaning_tr: "kızdı, darıldı", irab: "I. bâb {fiil-i mâzî}. مَا nefiy. {Mef'ûl bih}: hazf (sana → anlaşılıyor).", irab_short: "fiil, mâzî",
            turkish_bridge: null, balagha_note: "İkinci fiilin mef'ûlü hazfedilmiş: 'sana kızmadı' ama 'sana' denmemiş → îcâz (kısalık) + saygı.",
          },
        ],
      },
      {
        surah: 93, ayah: 4,
        arabic: "وَلَلْـَٔاخِرَةُ خَيْرٌ لَّكَ مِنَ ٱلْأُولَىٰ",
        translation: "Ahiret senin için dünyadan daha hayırlıdır",
        words: [
          {
            arabic: "خَيْرٌ", transliteration: "ḫayrun", root: "خ-ي-ر", pattern: "فَعْل", pos: "ism",
            meaning_tr: "daha hayırlı, daha iyi", irab: "{Haber}, merfû (damme + tenvîn). İsm-i tafdîl: أَخْيَر → خَيْر (kısaltılmış).", irab_short: "haber, merfû",
            turkish_bridge: "Hayr, hayırlı bu kökten", balagha_note: "İsm-i tafdîl serisi başlıyor. Gelecek şimdi'den, sonraki önceki'den daha iyi.",
          },
        ],
      },
      {
        surah: 93, ayah: 6,
        arabic: "أَلَمْ يَجِدْكَ يَتِيمًا فَـَٔاوَىٰ",
        translation: "O seni yetim bulup barındırmadı mı?",
        words: [
          {
            arabic: "يَتِيمًا", transliteration: "yatīman", root: "ي-ت-م", pattern: "فَعِيل", pos: "ism",
            meaning_tr: "yetim", irab: "{Hâl}, {mensûb} (fetha + tenvîn). يَتِيم: فَعِيل kalıbı.", irab_short: "hâl, mensûb",
            turkish_bridge: "Yetim bu kökten", balagha_note: "Üç أَلَمْ sorusu (6, 7, 8): yetimlik → şaşkınlık → yoksulluk. Hz. Peygamber'in hayat serüveni.",
          },
          {
            arabic: "فَـَٔاوَىٰ", transliteration: "fa-āwā", root: "أ-و-ي", pattern: "أَفْعَلَ", pos: "fil",
            meaning_tr: "barındırdı", irab: "IV. bâb {fiil-i mâzî}. {Fâil}: müstetir هُوَ (Allah). أَوَى (sığındı) → آوَى (sığındırdı).", irab_short: "fiil, mâzî (IV. bâb)",
            turkish_bridge: null, balagha_note: "I. bâb (sığındı) → IV. bâb (sığındırdı): geçişli yapma. Allah barındıran.",
          },
        ],
      },
      {
        surah: 93, ayah: 9,
        arabic: "فَأَمَّا ٱلْيَتِيمَ فَلَا تَقْهَرْ",
        translation: "Öyleyse yetime karşı sert davranma",
        words: [
          {
            arabic: "ٱلْيَتِيمَ", transliteration: "al-yatīma", root: "ي-ت-م", pattern: "فَعِيل", pos: "ism",
            meaning_tr: "yetim", irab: "أَمَّا: شرطية + الْيَتِيمَ {mef'ûl bih mukaddem}, {mensûb} (fetha).", irab_short: "mef'ûl bih, mensûb",
            turkish_bridge: null, balagha_note: "6. ayet → 9. ayet bağı: 'Sen yetimdin, barındırıldın → yetime sert davranma.' Nimet → sorumluluk.",
          },
          {
            arabic: "تَقْهَرْ", transliteration: "taqhar", root: "ق-ه-ر", pattern: "تَفْعَلْ", pos: "fil",
            meaning_tr: "sert/hor davranma", irab: "I. bâb {fiil-i muzâri meczûm} (لَا nâhiye ile). {Fâil}: müstetir أَنْتَ.", irab_short: "fiil, meczûm (nehiy)",
            turkish_bridge: "Kahır, kahhâr bu kökten", balagha_note: null,
          },
        ],
      },
      {
        surah: 93, ayah: 11,
        arabic: "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ",
        translation: "Rabbinin nimetini anlat!",
        words: [
          {
            arabic: "فَحَدِّثْ", transliteration: "fa-ḥaddiṯ", root: "ح-د-ث", pattern: "فَعِّلْ", pos: "fil",
            meaning_tr: "anlat, haber ver", irab: "II. bâb {fiil-i emir}. {Fâil}: müstetir أَنْتَ. حَدَثَ (oldu) → حَدَّثَ (haber verdi).", irab_short: "emir (II. bâb)",
            turkish_bridge: "Hadîs (söz, rivayet), tahdîs (anlatma) bu kökten", balagha_note: "Son ayet: nimeti saklamak yok, anlatacaksın! Şükrün en güzel hali.",
          },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "أَلَمْ يَجِدْ — Olumsuz Soru ile Hatırlatma",
        explanation: "أَلَمْ + muzâri meczûm: 'yapmadı mı?' sorusu aslında cevap beklemez, hatırlatma/tasdik ister. Üç kez tekrar: 6, 7, 8. ayetler.",
        rule: "أَلَمْ + muzâri meczûm = inkâri soru → tasdik\nأَلَمْ يَجِدْكَ يَتِيمًا فَآوَى (yetim → barındırdı)\nأَلَمْ يَجِدْكَ ضَالًّا فَهَدَى (şaşırmış → hidayet)\nأَلَمْ يَجِدْكَ عَائِلًا فَأَغْنَى (yoksul → zenginleştirdi)",
        examples: ["أَلَمْ يَجِدْكَ: üç farklı hâl → üç farklı lütuf", "Her satırda فَـ + mâzî: 've (elbette) şunu yaptı'"],
      },
    ],
    exercises: [
      { id: "L33-Q01", type: "single_choice", question: "أَلَمْ يَجِدْكَ yapısındaki sorunun amacı nedir?", options: ["İnkâri istifhâm: hatırlatma/tasdik (elbette buldu!)", "Gerçek bir soru", "Olumsuzlama: 'bulmadı'", "Şüphe ifadesi"], correct: 0, explanation: "أَلَمْ: inkâri soru → 'yapmadı mı?' ama cevap: 'elbette yaptı!' Hatırlatma + minnet.", relatedRoots: [] },
      { id: "L33-Q02", type: "bab_identify", question: "فَحَدِّثْ fiili kaçıncı bâbtandır?", targetWord: "فَحَدِّثْ", options: ["II. bâb (فَعِّلْ emir) → حَدَّثَ (anlattı)", "I. bâb → حَدَثَ (oldu)", "IV. bâb → أَحْدَثَ", "V. bâb → تَحَدَّثَ"], correct: 0, explanation: "حَدِّثْ: II. bâb emir. حَدَثَ (meydana geldi) → حَدَّثَ (haber verdi, anlattı). Teksîr: iyice/herkese anlat.", relatedRoots: ["ح-د-ث"] },
      { id: "L33-Q03", type: "root_extract", question: "تَقْهَرْ kelimesinin kökü nedir?", targetWord: "تَقْهَرْ", options: ["ق-ه-ر", "ق-ح-ر", "ق-هـ-م", "ك-ه-ر"], correct: 0, explanation: "تَقْهَرْ: ق-ه-ر kökünden I. bâb. قَهَرَ: ezdi, hor gördü. el-Kahhâr: Allah'ın ismi.", relatedRoots: ["ق-ه-ر"] },
      { id: "L33-Q04", type: "irab_identify", question: "يَتِيمًا kelimesinin 6. ayetteki i'rab rolü nedir?", targetWord: "يَتِيمًا", options: ["Hâl (mensûb): 'yetim olarak/yetim halde'", "Mef'ûl bih: 'yetimi buldu'", "Mübtedâ", "Haber"], correct: 0, explanation: "يَتِيمًا: hâl → 'seni yetim halde/durumda iken buldu'. يَجِدْكَ'deki كَ mef'ûl bih; يَتِيمًا ise hâl.", relatedRoots: ["ي-ت-م"] },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DERS 34 — İNŞİRÂH SURESİ (94:1-8)
  // ═══════════════════════════════════════════════════════════
  {
    id: "L34-insirah",
    title: "İnşirâh Suresi (1-8)",
    titleAr: "سُورَةُ الشَّرْحِ",
    stage: 2,
    level: 4,
    surah: 94,
    description: "Hz. Peygamber'e teselli devamı. VII. bâb اِنْشَرَحَ, مَعَ العُسْرِ يُسْرًا tekrarı, فَإِذَا فَرَغْتَ emir yapısı.",
    verses: [
      {
        surah: 94, ayah: 1,
        arabic: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ",
        translation: "Senin göğsünü açmadık mı?",
        words: [
          {
            arabic: "نَشْرَحْ", transliteration: "našraḥ", root: "ش-ر-ح", pattern: "نَفْعَلْ", pos: "fil",
            meaning_tr: "açtık, genişlettik", irab: "I. bâb {fiil-i muzâri meczûm} (لَمْ ile). {Fâil}: müstetir نَحْنُ (azamet zamîri).", irab_short: "fiil, meczûm",
            turkish_bridge: "Şerh (açma, açıklama) bu kökten", balagha_note: "Duhâ'nın devamı: أَلَمْ sorusu tekrar → inkâri istifhâm. Göğüs açma: kalbi imana, bilgiye açmak.",
          },
          {
            arabic: "صَدْرَكَ", transliteration: "ṣadraka", root: "ص-د-ر", pattern: "فَعْل", pos: "ism",
            meaning_tr: "senin göğsünü", irab: "{Mef'ûl bih}, {mensûb} + كَ (muzâfun ileyh).", irab_short: "mef'ûl bih, mensûb",
            turkish_bridge: "Sadr (göğüs), sudûr bu kökten", balagha_note: "صَدْر: fiziksel göğüs → mecazen 'kalp, gönül'. Şerh-i sadr: kalbin imanla genişlemesi.",
          },
        ],
      },
      {
        surah: 94, ayah: 5,
        arabic: "فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
        translation: "Şüphesiz zorluğun yanında kolaylık vardır",
        words: [
          {
            arabic: "ٱلْعُسْرِ", transliteration: "al-ʿusri", root: "ع-س-ر", pattern: "فُعْل", pos: "ism",
            meaning_tr: "zorluk", irab: "مَعَ + الْعُسْرِ {muzâfun ileyh, mecrûr}.", irab_short: "muzâfun ileyh, mecrûr",
            turkish_bridge: "Usr (zorluk), muâseret bu kökten", balagha_note: "العُسْر ma'rife (belirli): aynı zorluk. يُسْرًا nekre: farklı kolaylık → zorluk bir, kolaylık iki!",
          },
          {
            arabic: "يُسْرًا", transliteration: "yusran", root: "ي-س-ر", pattern: "فُعْل", pos: "ism",
            meaning_tr: "kolaylık", irab: "إِنَّ'nin haberi konumunda. {Mensûb} veya مَعَ'nin müteallakı.", irab_short: "haber / müteallak",
            turkish_bridge: "Yüsr, tesyîr bu kökten", balagha_note: "Ma'rife ↔ nekre kuralı: العُسْر (ma'rife) tekrarda aynı şeyi gösterir, يُسْرًا (nekre) her tekrarda farklı → iki kolaylık.",
          },
        ],
      },
      {
        surah: 94, ayah: 7,
        arabic: "فَإِذَا فَرَغْتَ فَٱنصَبْ",
        translation: "Boşaldığında (ibadete) koyul",
        words: [
          {
            arabic: "فَرَغْتَ", transliteration: "faraġta", root: "ف-ر-غ", pattern: "فَعَلَ", pos: "fil",
            meaning_tr: "boşaldın, bitirdin", irab: "I. bâb {fiil-i mâzî} + تَ (fâil zamîr: أَنْتَ).", irab_short: "fiil, mâzî",
            turkish_bridge: "Ferâğ (boşluk), ifrag bu kökten", balagha_note: null,
          },
          {
            arabic: "فَٱنصَبْ", transliteration: "fanṣab", root: "ن-ص-ب", pattern: "اِنْفَعِلْ", pos: "fil",
            meaning_tr: "çalış, gayret et, (ibadete) koyul", irab: "{Fiil-i emir}. نَصِبَ/يَنْصَبُ: yoruldu, çabaladı.", irab_short: "emir",
            turkish_bridge: "Nasb (dikme, çaba), mansıb bu kökten", balagha_note: "Bir iş bitince dinlenme yok → yeni ibadete koyul. Sürekli çaba ahlâkı.",
          },
        ],
      },
      {
        surah: 94, ayah: 8,
        arabic: "وَإِلَىٰ رَبِّكَ فَٱرْغَب",
        translation: "Ve yalnız Rabbine yönel",
        words: [
          {
            arabic: "فَٱرْغَب", transliteration: "farġab", root: "ر-غ-ب", pattern: "اِفْعَلْ", pos: "fil",
            meaning_tr: "yönel, arzu et", irab: "{Fiil-i emir}. رَغِبَ إِلَى: birşeye yöneldi, arzuladı.", irab_short: "emir",
            turkish_bridge: "Rağbet (istek, ilgi) bu kökten", balagha_note: "Son ayet: إِلَى رَبِّكَ → yalnızca Rabbine. Câr-mecrûr öne alınmış → hasr (sınırlama): yalnız O'na.",
          },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "مَعَ العُسْرِ يُسْرًا — Ma'rife/Nekre Kuralı",
        explanation: "5-6. ayetlerde aynı cümle tekrarlanır. العُسْر (ma'rife) her iki ayette de aynı zorluğu gösterir. Ama يُسْرًا (nekre) her tekrarda yeni bir kolaylık → 1 zorluk karşısında 2 kolaylık.",
        rule: "Ma'rife tekrar → aynı şey (العُسْر = aynı zorluk)\nNekre tekrar → farklı şey (يُسْرًا = yeni kolaylık)\n∴ 1 zorluk, 2 kolaylık",
        examples: ["فَإِنَّ مَعَ الْعُسْرِ يُسْرًا (94:5)", "إِنَّ مَعَ الْعُسْرِ يُسْرًا (94:6)", "Hadis: 'Bir zorluk iki kolaylığı yenemez'"],
      },
      {
        title: "VII. Bâb: اِنْشَرَحَ — Dönüşlü Açılma",
        explanation: "Sure adı 'eş-Şerh' veya 'el-İnşirâh'. شَرَحَ (açtı, I. bâb) → اِنْشَرَحَ (açıldı, VII. bâb: dönüşlü). Göğüs kendi kendine açılmaz → Allah açar, göğüs açılır.",
        rule: "شَرَحَ (I): açtı → اِنْشَرَحَ (VII): açıldı\nI. bâb: أَلَمْ نَشْرَحْ (Biz açtık)\nVII. bâb: اِنْشَرَحَ (açıldı, genişledi)",
        examples: ["اِنْشَرَحَ صَدْرُهُ: 'göğsü açıldı (genişledi)'", "اِنْكَسَرَ (kırıldı), اِنْفَطَرَ (yarıldı) — aynı VII. bâb kalıbı"],
      },
    ],
    exercises: [
      { id: "L34-Q01", type: "single_choice", question: "مَعَ العُسْرِ يُسْرًا cümlesi neden iki kez tekrarlanır?", options: ["Ma'rife/nekre kuralı: العُسْر (aynı zorluk) + يُسْرًا (farklı kolaylık) → 1 zorluk, 2 kolaylık", "Vurgu için basit tekrar", "Farklı zorluklar kastediliyor", "Birincisi dünya, ikincisi ahiret"], correct: 0, explanation: "Ma'rife tekrarı aynı şeyi, nekre tekrarı farklı şeyi gösterir. Bir zorluk iki kolaylığı yenemez.", relatedRoots: ["ع-س-ر", "ي-س-ر"] },
      { id: "L34-Q02", type: "bab_identify", question: "اِنْشَرَحَ fiili kaçıncı bâbtandır?", targetWord: "اِنْشَرَحَ", options: ["VII. bâb (اِنْفَعَلَ) → dönüşlü: 'açıldı, genişledi'", "I. bâb → شَرَحَ (açtı)", "IV. bâb → أَشْرَحَ", "II. bâb → شَرَّحَ"], correct: 0, explanation: "VII. bâb (infi'âl): شَرَحَ (açtı) → اِنْشَرَحَ (açıldı). Dönüşlü: Allah açar → göğüs açılır.", relatedRoots: ["ش-ر-ح"] },
      { id: "L34-Q03", type: "root_extract", question: "فَٱرْغَب kelimesinin kökü nedir?", targetWord: "فَٱرْغَب", options: ["ر-غ-ب", "ر-غ-د", "ر-ق-ب", "ر-ه-ب"], correct: 0, explanation: "فَارْغَبْ: ر-غ-ب kökünden I. bâb emir. رَغِبَ إِلَى: yöneldi, arzuladı. Rağbet.", relatedRoots: ["ر-غ-ب"] },
      { id: "L34-Q04", type: "irab_identify", question: "8. ayette إِلَى رَبِّكَ neden fiilden önce gelmiştir?", targetWord: "إِلَىٰ رَبِّكَ", options: ["Hasr (taqdîm): 'yalnızca Rabbine' → câr-mecrûr öne alınarak sınırlama", "Rastgele kelime sırası", "Gramer zorunluluğu", "Vurgusuz normal sıra"], correct: 0, explanation: "Câr-mecrûrun fiilden önce gelmesi hasr ifade eder: 'YALNIZCA Rabbine yönel, başka kimseye değil.'", relatedRoots: ["ر-غ-ب"] },
    ],
  },
];

export default level4bLessons;
