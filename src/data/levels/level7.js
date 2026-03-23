// ═══════════════════════════════════════════════════════════
// SEVİYE 7 — v0.18.0
// L56 (Nebe 78:9-20), L57 (Nebe 78:21-30), L58 (Nebe 78:31-40)
// L59 (Nâzi'ât 79:6-14), L60 (Nâzi'ât 79:15-26),
// L61 (Nâzi'ât 79:27-39), L62 (Nâzi'ât 79:40-46)
// ═══════════════════════════════════════════════════════════

const level7Lessons = [
  // ═══════════════════════════════════════════════════════════
  // DERS 56 — NEBE 78:9-20 — Nimetler + Kıyamet Günü
  // ═══════════════════════════════════════════════════════════
  {
    id: "L56-nebe-2",
    title: "Nebe (9-20) — Nimetler ve Kıyamet",
    titleAr: "سُورَةُ النَّبَإ ٩-٢٠",
    stage: 2,
    level: 7,
    surah: 78,
    description: "Allah'ın yaratılış nimetleri (uyku, gece, gündüz, yedi gök, güneş, yağmur) ve kıyamet sahnesi. جَعَلَ fiili (iki mef'ûl), مِفْعَال kalıbı, mechûl fiil yapısı.",
    verses: [
      {
        surah: 78, ayah: 9,
        arabic: "وَجَعَلْنَا نَوْمَكُمْ سُبَاتًا",
        translation: "Uykunuzu bir dinlenme kıldık",
        words: [
          { arabic: "وَجَعَلْنَا", transliteration: "wa jaʿalnā", root: "ج-ع-ل", pattern: null, pos: "fil", meaning_tr: "kıldık", irab: "وَ {atıf} + جَعَلْنَا {fiil-i mâzî}, I. bâb. İki mef'ûl alan fiil. {Fâil}: نَا (biz → Allah).", irab_short: "fiil-i mâzî, I. bâb", turkish_bridge: null, balagha_note: "جَعَلَ (iki mef'ûllü): 'A'yı B kıldık.' Yaratma + tahsis birlikte. 78:6'dan beri devam eden nimet serisi." },
          { arabic: "نَوْمَكُمْ", transliteration: "nevmekum", root: "ن-و-م", pattern: "فَعْل", pos: "ism", meaning_tr: "uykunuzu", irab: "{Mef'ûl bih} birinci, {mensûb}. نَوْم masdar + كُمْ muzâfun ileyh zamîr.", irab_short: "mef'ûl bih-1, mensûb", turkish_bridge: "Nevm (uyku), menâm (uyku yeri/rüya) bu kökten", balagha_note: null },
          { arabic: "سُبَاتًا", transliteration: "subātan", root: "س-ب-ت", pattern: "فُعَال", pos: "ism", meaning_tr: "dinlenme, kesilme", irab: "{Mef'ûl bih} ikinci, {mensûb}. سَبْت: kesilme → uyku bedensel faaliyetin kesilmesi.", irab_short: "mef'ûl bih-2, mensûb", turkish_bridge: "Sebt (cumartesi) = dinlenme günü, aynı kök", balagha_note: null },
        ],
      },
      {
        surah: 78, ayah: 10,
        arabic: "وَجَعَلْنَا ٱلَّيْلَ لِبَاسًا",
        translation: "Geceyi bir örtü kıldık",
        words: [
          { arabic: "وَجَعَلْنَا", transliteration: "wa jaʿalnā", root: "ج-ع-ل", pos: "fil", meaning_tr: "kıldık", irab_short: "fiil, atıf" },
          { arabic: "ٱلَّيْلَ", transliteration: "al-layla", root: "ل-ي-ل", pattern: "فَعْل", pos: "ism", meaning_tr: "geceyi", irab: "{Mef'ûl bih} birinci, {mensûb}.", irab_short: "mef'ûl bih-1, mensûb", turkish_bridge: "Leyl, leyâlî (geceler) bu kökten", balagha_note: null },
          { arabic: "لِبَاسًا", transliteration: "libāsan", root: "ل-ب-س", pattern: "فِعَال", pos: "ism", meaning_tr: "örtü, elbise", irab: "{Mef'ûl bih} ikinci, {mensûb}.", irab_short: "mef'ûl bih-2, mensûb", turkish_bridge: "Libâs (elbise), telbîs (örtme, aldatma) bu kökten", balagha_note: "İsti'âre (metafor): gece → elbise gibi örter. Karanlık bedenin giydiği bir örtü olarak tasvir ediliyor." },
        ],
      },
      {
        surah: 78, ayah: 11,
        arabic: "وَجَعَلْنَا ٱلنَّهَارَ مَعَاشًا",
        translation: "Gündüzü geçim zamanı kıldık",
        words: [
          { arabic: "وَجَعَلْنَا", transliteration: "wa jaʿalnā", root: "ج-ع-ل", pos: "fil", meaning_tr: "kıldık", irab_short: "fiil, atıf" },
          { arabic: "ٱلنَّهَارَ", transliteration: "an-nahāra", root: "ن-ه-ر", pattern: "فَعَال", pos: "ism", meaning_tr: "gündüzü", irab: "{Mef'ûl bih} birinci, {mensûb}.", irab_short: "mef'ûl bih-1, mensûb", turkish_bridge: "Nehâr (gündüz), nehr (nehir: akan) aynı kökten", balagha_note: null },
          { arabic: "مَعَاشًا", transliteration: "maʿāšan", root: "ع-ي-ش", pattern: "مَفْعَل", pos: "ism", meaning_tr: "geçim, yaşam aracı", irab: "{Mef'ûl bih} ikinci, {mensûb}. مَفْعَل: ism-i zaman/mekân → geçim vakti.", irab_short: "mef'ûl bih-2, mensûb", turkish_bridge: "Maîşet (geçim), yaşam → ayş bu kökten", balagha_note: "Gece/gündüz dengesi: gece = libâs (örtü, istirahat), gündüz = maʿâş (geçim). Mukâbele sanatı." },
        ],
      },
      {
        surah: 78, ayah: 12,
        arabic: "وَبَنَيْنَا فَوْقَكُمْ سَبْعًا شِدَادًا",
        translation: "Üstünüze yedi sağlam (gök) bina ettik",
        words: [
          { arabic: "وَبَنَيْنَا", transliteration: "wa benaynā", root: "ب-ن-ي", pos: "fil", meaning_tr: "bina ettik, yaptık", irab: "وَ {atıf} + بَنَيْنَا {fiil-i mâzî}, I. bâb (nâkıs-yâî).", irab_short: "fiil-i mâzî", turkish_bridge: "Binâ, bünye (yapı) bu kökten", balagha_note: null },
          { arabic: "فَوْقَكُمْ", transliteration: "fevkakum", root: "ف-و-ق", pos: "ism", meaning_tr: "üstünüze", irab: "{Zarf-ı mekân}, {mensûb} + كُمْ muzâfun ileyh.", irab_short: "zarf, mensûb", turkish_bridge: "Fevk (üst), fevkalâde bu kökten", balagha_note: null },
          { arabic: "سَبْعًا", transliteration: "sabʿan", root: "س-ب-ع", pos: "ism", meaning_tr: "yedi (gök)", irab: "{Mef'ûl bih}, {mensûb}. Sayılan (سَمَاوَات) hazfedilmiş.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: null, balagha_note: "İcâz (kısaltma): سَبْعًا deyip سَمَاوَاتٍ dememiş — herkes ne kastedildiğini bilir." },
          { arabic: "شِدَادًا", transliteration: "šidādan", root: "ش-د-د", pattern: "فِعَال", pos: "ism", meaning_tr: "sağlam, güçlü", irab: "{Sıfat}, {mensûb}. شَدِيد'in cem-i teksîri.", irab_short: "sıfat, mensûb", turkish_bridge: "Şedîd (şiddetli), teşdîd bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 78, ayah: 13,
        arabic: "وَجَعَلْنَا سِرَاجًا وَهَّاجًا",
        translation: "Alev alev yanan bir kandil (güneş) yaptık",
        words: [
          { arabic: "وَجَعَلْنَا", transliteration: "wa jaʿalnā", root: "ج-ع-ل", pos: "fil", meaning_tr: "kıldık", irab_short: "fiil, atıf" },
          { arabic: "سِرَاجًا", transliteration: "sirājan", root: "س-ر-ج", pattern: "فِعَال", pos: "ism", meaning_tr: "kandil (güneş)", irab: "{Mef'ûl bih}, {mensûb}.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Sirâc (kandil, lamba) bu kökten", balagha_note: "İsti'âre: güneş → sirâc (kandil). Kur'an güneşe سِرَاج, aya نُور der." },
          { arabic: "وَهَّاجًا", transliteration: "wahhājan", root: "و-ه-ج", pattern: "فَعَّال", pos: "ism", meaning_tr: "alev alev yanan, parıldayan", irab: "{Sıfat}, {mensûb}. فَعَّال: mübalağa kalıbı → aşırı parlaklık.", irab_short: "sıfat, mensûb", turkish_bridge: null, balagha_note: "فَعَّال mübalağa sîgası: sürekli ve güçlü ışık saçma → güneşin enerjisi." },
        ],
      },
      {
        surah: 78, ayah: 14,
        arabic: "وَأَنزَلْنَا مِنَ ٱلْمُعْصِرَ ٰتِ مَآءً ثَجَّاجًا",
        translation: "Yağmur bulutlarından bol bol su indirdik",
        words: [
          { arabic: "وَأَنزَلْنَا", transliteration: "wa anzalnā", root: "ن-ز-ل", pos: "fil", meaning_tr: "indirdik", irab: "IV. bâb (أَفْعَلَ): نَزَلَ (indi) → أَنزَلَ (indirdi). {Fâil}: نَا.", irab_short: "fiil, IV. bâb", turkish_bridge: "İnzâl, münzel bu kökten", balagha_note: null },
          { arabic: "مِنَ", transliteration: "mine", root: null, pos: "harf", meaning_tr: "...den", irab_short: "harf-i cer" },
          { arabic: "ٱلْمُعْصِرَ ٰتِ", transliteration: "al-muʿṣirāti", root: "ع-ص-ر", pattern: "مُفْعِلَات", pos: "ism", meaning_tr: "sıkıp sağan bulutlar", irab: "{Mecrûr}. مُفْعِل: IV. bâb ism-i fâil + ات cem-i müennes.", irab_short: "mecrûr", turkish_bridge: "Asr (sıkma, zaman), ma'sara (pres) bu kökten", balagha_note: "Bulutlar suyu 'sıkan' varlıklar olarak tasvir ediliyor → teşhîs (kişileştirme)." },
          { arabic: "مَآءً", transliteration: "māʾan", root: "م-و-ه", pos: "ism", meaning_tr: "su", irab: "{Mef'ûl bih}, {mensûb}.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: null, balagha_note: null },
          { arabic: "ثَجَّاجًا", transliteration: "ṯajjājan", root: "ث-ج-ج", pattern: "فَعَّال", pos: "ism", meaning_tr: "bol bol akan, şarıl şarıl", irab: "{Sıfat} (مَاء'ın sıfatı), {mensûb}. فَعَّال mübalağa.", irab_short: "sıfat, mensûb", turkish_bridge: null, balagha_note: "فَعَّال: mübalağa → وَهَّاج (13. ayet) ile aynı kalıp. Güneş ışığı ve yağmur suyu paralel → isti'âre zincirleme." },
        ],
      },
      {
        surah: 78, ayah: 15,
        arabic: "لِّنُخْرِجَ بِهِۦ حَبًّا وَنَبَاتًا",
        translation: "Onunla dâne ve bitki çıkaralım diye",
        words: [
          { arabic: "لِّنُخْرِجَ", transliteration: "li-nuḫrija", root: "خ-ر-ج", pos: "fil", meaning_tr: "çıkaralım diye", irab: "لِ {lâm-ı ta'lîl (sebep)} + نُخْرِجَ {muzâri, IV. bâb (أَخْرَجَ), mensûb (لِ ile)}.", irab_short: "muzâri mensûb, IV. bâb", turkish_bridge: "İhrâc, muhric, hurûc bu kökten", balagha_note: null },
          { arabic: "بِهِۦ", transliteration: "bihī", root: null, pos: "harf", meaning_tr: "onunla (su ile)", irab_short: "câr-mecrûr" },
          { arabic: "حَبًّا", transliteration: "ḥabban", root: "ح-ب-ب", pattern: "فَعْل", pos: "ism", meaning_tr: "dâne, tohum", irab: "{Mef'ûl bih}, {mensûb}.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Habbe (tane), habîb (sevgili) farklı kökler: ح-ب-ب", balagha_note: null },
          { arabic: "وَنَبَاتًا", transliteration: "wa nabātan", root: "ن-ب-ت", pattern: "فَعَال", pos: "ism", meaning_tr: "bitki", irab: "{Atıf}, {mensûb}.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Nebât (bitki), nebâtât bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 78, ayah: 16,
        arabic: "وَجَنَّـٰتٍ أَلْفَافًا",
        translation: "Ve (ağaçları) birbirine sarılmış bahçeler",
        words: [
          { arabic: "وَجَنَّـٰتٍ", transliteration: "wa jannātin", root: "ج-ن-ن", pattern: "فَعْلَات", pos: "ism", meaning_tr: "bahçeler", irab: "وَ {atıf} + جَنَّاتٍ {atıf, mecrûr (tenvîn-i kesre)}. Aslı mef'ûl üzerine atıf.", irab_short: "atıf, mecrûr", turkish_bridge: "Cennet (bahçe), cinn, cinnet: örtme anlamı", balagha_note: null },
          { arabic: "أَلْفَافًا", transliteration: "alfāfan", root: "ل-ف-ف", pattern: "أَفْعَال", pos: "ism", meaning_tr: "iç içe sarılmış, gür", irab: "{Sıfat}, {mensûb}. لَفِيف'in çoğulu veya doğrudan çoğul kalıp.", irab_short: "sıfat", turkish_bridge: "Lef ve neşr, leffâfe (sargı) bu kökten", balagha_note: "Yaratılış delilleri burada doruk noktasına ulaşıyor: yer → gök → güneş → yağmur → dâne → bahçe → tam döngü." },
        ],
      },
      {
        surah: 78, ayah: 17,
        arabic: "إِنَّ يَوْمَ ٱلْفَصْلِ كَانَ مِيقَـٰتًا",
        translation: "Şüphesiz hüküm günü belirlenmiş bir zamandır",
        words: [
          { arabic: "إِنَّ", transliteration: "inna", root: null, pos: "harf", meaning_tr: "şüphesiz", irab: "{Harf-i te'kîd}. İsmini mensûb, haberini merfû yapar.", irab_short: "harf-i te'kîd", turkish_bridge: null, balagha_note: "Nimet serisinden kıyamet sahnesine geçiş. إِنَّ ile vurgulu başlangıç → yeni bölüm." },
          { arabic: "يَوْمَ", transliteration: "yevme", root: "ي-و-م", pos: "ism", meaning_tr: "günü", irab: "إِنَّ'nin {ism}i, {mensûb}.", irab_short: "ism-i inne, mensûb", turkish_bridge: "Yevm (gün), yevmî (günlük) bu kökten", balagha_note: null },
          { arabic: "ٱلْفَصْلِ", transliteration: "al-faṣli", root: "ف-ص-ل", pattern: "فَعْل", pos: "ism", meaning_tr: "hükmün, ayırmanın", irab: "{Muzâfun ileyh}, {mecrûr}.", irab_short: "muzâfun ileyh, mecrûr", turkish_bridge: "Fasl (bölüm, ayırma), mufassal bu kökten", balagha_note: null },
          { arabic: "كَانَ", transliteration: "kāne", root: "ك-و-ن", pos: "fil", meaning_tr: "idi, olmaktır", irab: "{Fiil-i nâkıs}. İsmi يَوْمَ'ye dönen zamîr, haberi مِيقَاتًا.", irab_short: "fiil-i nâkıs", turkish_bridge: null, balagha_note: null },
          { arabic: "مِيقَـٰتًا", transliteration: "mīqātan", root: "و-ق-ت", pattern: "مِفْعَال", pos: "ism", meaning_tr: "belirlenmiş zaman, randevu", irab: "{Haber-i kâne}, {mensûb}. مِفْعَال kalıbı: âlet/zaman ismi.", irab_short: "haber-i kâne, mensûb", turkish_bridge: "Vakıt, mîkât bu kökten. Hac mîkâtı ile aynı kelime.", balagha_note: null },
        ],
      },
      {
        surah: 78, ayah: 18,
        arabic: "يَوْمَ يُنفَخُ فِى ٱلصُّورِ فَتَأْتُونَ أَفْوَاجًا",
        translation: "O gün Sûr'a üflenir de bölük bölük gelirsiniz",
        words: [
          { arabic: "يَوْمَ", transliteration: "yevme", root: "ي-و-م", pos: "ism", meaning_tr: "o gün", irab: "{Zarf} veya {bedel}, {mensûb}.", irab_short: "zarf, mensûb" },
          { arabic: "يُنفَخُ", transliteration: "yunfaḫu", root: "ن-ف-خ", pos: "fil", meaning_tr: "üflenir", irab: "{Fiil-i muzâri mechûl}, merfû. Fâil (üfleyen) meçhul bırakılmış (İsrâfîl).", irab_short: "muzâri mechûl", turkish_bridge: "Nefh (üfleme), nefha bu kökten", balagha_note: "Mechûl (edilgen): kim üflediği değil, üfleme olayı vurgulanıyor → eylemin büyüklüğü." },
          { arabic: "فِى", transliteration: "fī", root: null, pos: "harf", meaning_tr: "...de", irab_short: "harf-i cer" },
          { arabic: "ٱلصُّورِ", transliteration: "aṣ-ṣūri", root: "ص-و-ر", pos: "ism", meaning_tr: "Sûr (boru)", irab: "{Mecrûr}.", irab_short: "mecrûr", turkish_bridge: "Sûr (boru), sûret (görüntü) farklı anlamlar, aynı kök", balagha_note: null },
          { arabic: "فَتَأْتُونَ", transliteration: "fa-taʾtūna", root: "أ-ت-ي", pos: "fil", meaning_tr: "gelirsiniz", irab: "فَ {harf-i atıf, sebebiye} + تَأْتُونَ {muzâri, merfû, nûn ile}.", irab_short: "muzâri, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "أَفْوَاجًا", transliteration: "afwājan", root: "ف-و-ج", pattern: "أَفْعَال", pos: "ism", meaning_tr: "bölük bölük, gruplar halinde", irab: "{Hâl}, {mensûb}. فَوْج'un cem-i teksîri.", irab_short: "hâl, mensûb", turkish_bridge: "Fevc (grup, dalga) bu kökten", balagha_note: "Nasr suresinde (110:2) يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا ile aynı kelime — dünyada topluca giriş ↔ âhirette topluca geliş." },
        ],
      },
      {
        surah: 78, ayah: 19,
        arabic: "وَفُتِحَتِ ٱلسَّمَاءُ فَكَانَتْ أَبْوَ ٰبًا",
        translation: "Gök açılır da kapılar haline gelir",
        words: [
          { arabic: "وَفُتِحَتِ", transliteration: "wa futiḥati", root: "ف-ت-ح", pos: "fil", meaning_tr: "açıldı", irab: "{Fiil-i mâzî mechûl}. تْ {tâ-yı te'nîs}.", irab_short: "mâzî mechûl", turkish_bridge: "Feth (açma, fetih), miftâh (anahtar) bu kökten", balagha_note: null },
          { arabic: "ٱلسَّمَاءُ", transliteration: "as-samāʾu", root: "س-م-و", pos: "ism", meaning_tr: "gök", irab: "{Nâib-i fâil}, {merfû}.", irab_short: "nâib-i fâil, merfû", turkish_bridge: "Semâ (gök), semâvî bu kökten", balagha_note: null },
          { arabic: "فَكَانَتْ", transliteration: "fa-kānat", root: "ك-و-ن", pos: "fil", meaning_tr: "oldu", irab_short: "fiil-i nâkıs" },
          { arabic: "أَبْوَ ٰبًا", transliteration: "abwāban", root: "ب-و-ب", pattern: "أَفْعَال", pos: "ism", meaning_tr: "kapılar", irab: "{Haber-i kâne}, {mensûb}. بَاب'ın cem-i teksîri.", irab_short: "haber-i kâne, mensûb", turkish_bridge: "Bâb (kapı), bâb (bölüm) bu kökten", balagha_note: "Kıyamet tasviri: göğün yapısı çözülüyor → katı olan kapılar haline geliyor. Somuttan soyuta değil, soyuttan somuta isti'âre." },
        ],
      },
      {
        surah: 78, ayah: 20,
        arabic: "وَسُيِّرَتِ ٱلْجِبَالُ فَكَانَتْ سَرَابًا",
        translation: "Dağlar yürütülür de serap olur",
        words: [
          { arabic: "وَسُيِّرَتِ", transliteration: "wa suyyirati", root: "س-ي-ر", pos: "fil", meaning_tr: "yürütüldü", irab: "{Fiil-i mâzî mechûl}, II. bâb (سَيَّرَ → سُيِّرَ). تْ te'nîs.", irab_short: "mâzî mechûl, II. bâb", turkish_bridge: "Seyr, seyahat, seyyâr bu kökten", balagha_note: "II. bâb mechûl: dağları kim yürütüyor → fâil belirsiz bırakılmış → Allah'ın mutlak kudreti." },
          { arabic: "ٱلْجِبَالُ", transliteration: "al-jibālu", root: "ج-ب-ل", pos: "ism", meaning_tr: "dağlar", irab: "{Nâib-i fâil}, {merfû}. جَبَل'in cem-i teksîri.", irab_short: "nâib-i fâil, merfû", turkish_bridge: "Cebel (dağ) bu kökten", balagha_note: null },
          { arabic: "فَكَانَتْ", transliteration: "fa-kānat", root: "ك-و-ن", pos: "fil", meaning_tr: "oldu", irab_short: "fiil-i nâkıs" },
          { arabic: "سَرَابًا", transliteration: "sarāban", root: "س-ر-ب", pattern: "فَعَال", pos: "ism", meaning_tr: "serap", irab: "{Haber-i kâne}, {mensûb}.", irab_short: "haber-i kâne, mensûb", turkish_bridge: "Serâb (serap) bu kökten", balagha_note: "En sağlam varlıklar (dağlar) en geçici şeye (serap) dönüşüyor → tezâd sanatı (antitez)." },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "جَعَلَ — İki Mef'ûllü Fiil",
        explanation: "جَعَلَ 'kılmak, yapmak' anlamında iki mef'ûl bih alır: birinci mef'ûl = dönüştürülen, ikinci mef'ûl = dönüştürülen şey. 78:9'dan 78:16'ya kadar altı kez tekrarlanır: uyku→dinlenme, gece→örtü, gündüz→geçim, güneş→kandil...",
        rule: "جَعَلَ + mef'ûl-1 (mensûb) + mef'ûl-2 (mensûb)\nنَوْمَكُمْ (1.) سُبَاتًا (2.) = 'uykunuzu dinlenme kıldık'\nBenzer fiiller: صَيَّرَ, اِتَّخَذَ, ظَنَّ, حَسِبَ",
        examples: ["جَعَلْنَا نَوْمَكُمْ سُبَاتًا — uykunuzu dinlenme kıldık", "جَعَلْنَا اللَّيْلَ لِبَاسًا — geceyi örtü kıldık", "جَعَلْنَا سِرَاجًا وَهَّاجًا — yanan bir kandil kıldık"],
      },
      {
        title: "فَعَّال Mübalağa Kalıbı",
        explanation: "فَعَّال kalıbı, fiili çok ve sürekli yapan anlamı verir. Bu pasajda iki önemli örneği var: وَهَّاج (sürekli parlayan → güneş) ve ثَجَّاج (bol bol dökülen → yağmur). فَعَّال bir ism-i fâil değil, mübalağa sîgasıdır.",
        rule: "فَعَّال: mübalağa → çok ve sürekli yapan\nوَهَجَ → وَهَّاج (çok parlayan)\nثَجَّ → ثَجَّاج (çok dökülen)\nDiğer örnekler: غَفَّار, قَهَّار, رَزَّاق",
        examples: ["وَهَّاج — alev alev yanan (güneş)", "ثَجَّاج — bol bol akan (yağmur)", "غَفَّار — çok bağışlayan (Allah)", "قَهَّار — çok kahreden (Allah)"],
      },
      {
        title: "Mechûl (Edilgen) Fiil — Kıyamet Tasvirleri",
        explanation: "Kıyamet ayetlerinde fiiller sıklıkla mechûl (edilgen) gelir: يُنفَخُ (üflenir), فُتِحَتْ (açıldı), سُيِّرَتْ (yürütüldü). Fâilin gizlenmesi, olayların büyüklüğünü ve Allah'ın mutlak gücünü vurgular.",
        rule: "Ma'lûm → Mechûl:\nنَفَخَ → يُنفَخُ (üflendi)\nفَتَحَ → فُتِحَ (açıldı)\nسَيَّرَ (II) → سُيِّرَ (yürütüldü)\nMechûlde nâib-i fâil merfû olur.",
        examples: ["يُنفَخُ فِي الصُّورِ — Sûr'a üflenir (kim? → İsrâfîl, ama söylenmemiş)", "فُتِحَتِ السَّمَاءُ — gök açıldı", "سُيِّرَتِ الجِبَالُ — dağlar yürütüldü"],
      },
    ],
    exercises: [
      { id: "L56-Q01", type: "single_choice", question: "جَعَلْنَا نَوْمَكُمْ سُبَاتًا cümlesinde جَعَلَ fiili kaç mef'ûl almıştır?", options: ["İki mef'ûl: نَوْمَكُمْ (1.) ve سُبَاتًا (2.)", "Bir mef'ûl: نَوْمَكُمْ", "Üç mef'ûl", "Mef'ûlsüz (lâzım)"], correct: 0, explanation: "جَعَلَ iki mef'ûllü fiildir: birinci = dönüştürülen (نَوْمَكُمْ), ikinci = neye dönüştürüldüğü (سُبَاتًا). 'Uykunuzu dinlenme kıldık.'", relatedRoots: ["ج-ع-ل"] },
      { id: "L56-Q02", type: "balagha_identify", question: "وَجَعَلْنَا ٱلَّيْلَ لِبَاسًا ayetinde gece için 'elbise' denilmesi hangi belâgat sanatıdır?", options: ["İsti'âre (metafor): gece karanlığı elbise gibi örter", "Teşbîh-i belîğ: gece = elbise benzetmesi", "Kinâye: gece üzerinden örtünmeye işaret", "Mecâz-ı mürsel: sebep-sonuç ilişkisi"], correct: 0, explanation: "İsti'âre: gece → libâs. Benzetme edatı ve müşebbeh bih (elbise) doğrudan kullanılıyor ama benzeyen (karanlık) söylenmiyor → isti'âre-i tasrîhiyye.", relatedRoots: ["ل-ب-س"] },
      { id: "L56-Q03", type: "root_extract", question: "وَهَّاج kelimesinin kökü nedir?", targetWord: "وَهَّاجًا", options: ["و-ه-ج", "و-ج-ه", "ه-و-ج", "ه-ج-ج"], correct: 0, explanation: "وَهَّاج: و-ه-ج kökünden فَعَّال mübalağa kalıbı. وَهَجَ = parladı, yandı.", relatedRoots: ["و-ه-ج"] },
      { id: "L56-Q04", type: "wazn_match", question: "مِيقَات kelimesi hangi kalıptadır?", targetWord: "مِيقَـٰتًا", options: ["مِفْعَال (âlet/zaman ismi) — و-ق-ت kökünden", "فِعَال (masdar)", "مَفْعُول (ism-i mef'ûl)", "تَفْعِيل (II. bâb masdarı)"], correct: 0, explanation: "مِيقَات: مِفْعَال kalıbı, و-ق-ت kökünden. Vâv → yâ dönüşmüş (i'lâl). Belirlenmiş zaman/mekân anlamında. Hac mîkâtı da aynı kelimedir.", relatedRoots: ["و-ق-ت"] },
      { id: "L56-Q05", type: "bab_identify", question: "يُنفَخُ fiili hangi bâbtandır ve neden mechûl (edilgen)?", targetWord: "يُنفَخُ", options: ["I. bâb mechûl — fâil (İsrâfîl) gizlenerek olayın büyüklüğü vurgulanır", "IV. bâb mechûl", "II. bâb mechûl", "VII. bâb (mutâva'at)"], correct: 0, explanation: "نَفَخَ / يَنْفُخُ (I. bâb) → يُنفَخُ (mechûl). Kıyamet sahnelerinde fâil gizlenir: kim yaptığı değil, ne olduğu önemlidir.", relatedRoots: ["ن-ف-خ"] },
      { id: "L56-Q06", type: "single_choice", question: "78:9-16 ayetlerinde tekrarlanan yapı hangisidir?", options: ["وَجَعَلْنَا + mef'ûl-1 + mef'ûl-2 (6 kez)", "إِنَّ + ism + haber (3 kez)", "أَلَمْ + muzâri meczûm (4 kez)", "كَلَّا + cümle (3 kez)"], correct: 0, explanation: "78:9-16 arasında جَعَلَ fiili altı kez tekrarlanır: uyku, gece, gündüz, yedi gök, güneş, yağmur. Her biri bir nimet → tikrâr ile vurgulama.", relatedRoots: ["ج-ع-ل"] },
      { id: "L56-Q07", type: "fill_blank", question: "وَسُيِّرَتِ _____ فَكَانَتْ سَرَابًا", options: ["ٱلْجِبَالُ", "ٱلسَّمَاءُ", "ٱلْأَرْضُ", "ٱلنُّجُومُ"], correct: 0, hint: "Serap haline dönüşen en sağlam varlık nedir?", explanation: "الجِبَال (dağlar) yürütülüp serap haline gelir. En sağlam → en geçici: tezâd sanatı.", relatedRoots: ["ج-ب-ل", "س-ر-ب"] },
      { id: "L56-Q08", type: "irab_identify", question: "أَفْوَاجًا kelimesinin i'rab rolü nedir?", targetWord: "أَفْوَاجًا", options: ["Hâl (mansûb) — 'gruplar halinde' geldikleri durumu anlatır", "Mef'ûl bih — fiilin nesnesi", "Temyîz — açıklama", "Haber-i kâne — كَانَ'nin haberi"], correct: 0, explanation: "أَفْوَاجًا: hâl (durum bildiren), mensûb. 'Gelirsiniz → nasıl? → gruplar halinde.' Nasr 110:2'de de aynı kullanım.", relatedRoots: ["ف-و-ج"] },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DERS 57 — NEBE 78:21-30 — Cehennem Tasviri
  // ═══════════════════════════════════════════════════════════
  {
    id: "L57-nebe-3",
    title: "Nebe (21-30) — Cehennem Tasviri",
    titleAr: "سُورَةُ النَّبَإ ٢١-٣٠",
    stage: 2,
    level: 7,
    surah: 78,
    description: "Cehennemin tasviri: mirsâd, ahkâb, hammîm, ğassâk. مِفْعَال kalıbı, لَا يَذُوقُونَ + istisna yapısı, مَفْعَل kalıbı.",
    verses: [
      {
        surah: 78, ayah: 21,
        arabic: "إِنَّ جَهَنَّمَ كَانَتْ مِرْصَادًا",
        translation: "Şüphesiz cehennem gözetleme yeri olmuştur",
        words: [
          { arabic: "إِنَّ", transliteration: "inna", root: null, pos: "harf", meaning_tr: "şüphesiz", irab_short: "harf-i te'kîd" },
          { arabic: "جَهَنَّمَ", transliteration: "jahannama", root: null, pos: "ism", meaning_tr: "cehennem", irab: "{İsm-i inne}, {mensûb}. Gayr-i munsarif (tenvîn almaz).", irab_short: "ism-i inne, mensûb", turkish_bridge: "Cehennem: İbranice Gehinnōm'dan", balagha_note: null },
          { arabic: "كَانَتْ", transliteration: "kānat", root: "ك-و-ن", pos: "fil", meaning_tr: "olmuştur", irab_short: "fiil-i nâkıs" },
          { arabic: "مِرْصَادًا", transliteration: "mirṣādan", root: "ر-ص-د", pattern: "مِفْعَال", pos: "ism", meaning_tr: "pusu yeri, gözetleme noktası", irab: "{Haber-i kâne}, {mensûb}. مِفْعَال: mekân ismi kalıbı.", irab_short: "haber-i kâne, mensûb", turkish_bridge: "Rasad (gözlem), rasathâne bu kökten", balagha_note: "İsti'âre: cehennem bir gözetleme noktası gibi bekliyor → kişileştirme (teşhîs). L56'daki مِيقَات ile aynı kalıp." },
        ],
      },
      {
        surah: 78, ayah: 22,
        arabic: "لِّلطَّـٰغِينَ مَـَٔابًا",
        translation: "Azgınlar için dönüş yeri",
        words: [
          { arabic: "لِّلطَّـٰغِينَ", transliteration: "liṭ-ṭāğīna", root: "ط-غ-ي", pattern: "فَاعِلِين", pos: "ism", meaning_tr: "azgınlar için", irab: "لِ {harf-i cer} + الطَّاغِينَ {ism-i fâil cem-i müzekker, mecrûr (yâ ile)}.", irab_short: "câr-mecrûr", turkish_bridge: "Tâğî (azgın), tuğyân bu kökten", balagha_note: null },
          { arabic: "مَـَٔابًا", transliteration: "maʾāban", root: "أ-و-ب", pattern: "مَفْعَل", pos: "ism", meaning_tr: "dönüş yeri", irab: "{Hâl} veya ikinci haber, {mensûb}. مَفْعَل kalıbı.", irab_short: "mensûb", turkish_bridge: null, balagha_note: null },
        ],
      },
      {
        surah: 78, ayah: 23,
        arabic: "لَـٰبِثِينَ فِيهَا أَحْقَابًا",
        translation: "Orada çağlar boyu kalacaklar",
        words: [
          { arabic: "لَـٰبِثِينَ", transliteration: "lābiṯīna", root: "ل-ب-ث", pattern: "فَاعِلِين", pos: "ism", meaning_tr: "kalanlar", irab: "{Hâl}, {mensûb} (yâ ile). I. bâb ism-i fâil cem-i müzekker.", irab_short: "hâl, mensûb", turkish_bridge: "Lebis (kalma, bekleme) bu kökten", balagha_note: null },
          { arabic: "فِيهَا", transliteration: "fīhā", root: null, pos: "harf", meaning_tr: "orada", irab_short: "câr-mecrûr" },
          { arabic: "أَحْقَابًا", transliteration: "aḥqāban", root: "ح-ق-ب", pattern: "أَفْعَال", pos: "ism", meaning_tr: "çağlar, uzun dönemler", irab: "{Zarf-ı zaman}, {mensûb}. حُقْب (uzun dönem) → أَحْقَاب.", irab_short: "zarf, mensûb", turkish_bridge: null, balagha_note: "أَحْقَاب: her حُقْب = 80 yıl denir, ama biri bitince diğeri başlar → sonsuzluk ifadesi." },
        ],
      },
      {
        surah: 78, ayah: 24,
        arabic: "لَّا يَذُوقُونَ فِيهَا بَرْدًا وَلَا شَرَابًا",
        translation: "Orada ne serinlik tadarlar ne de içecek",
        words: [
          { arabic: "لَّا", transliteration: "lā", root: null, pos: "harf", meaning_tr: "olumsuzluk", irab_short: "harf-i nefi" },
          { arabic: "يَذُوقُونَ", transliteration: "yaḏūqūna", root: "ذ-و-ق", pos: "fil", meaning_tr: "tadarlar", irab: "{Muzâri}, merfû. ذَاقَ ecvef-vâvî.", irab_short: "muzâri, merfû", turkish_bridge: "Zevk (tatma), mezkûk bu kökten", balagha_note: null },
          { arabic: "فِيهَا", transliteration: "fīhā", root: null, pos: "harf", meaning_tr: "orada", irab_short: "câr-mecrûr" },
          { arabic: "بَرْدًا", transliteration: "bardan", root: "ب-ر-د", pos: "ism", meaning_tr: "serinlik", irab: "{Mef'ûl bih}, {mensûb}.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Berd (soğukluk), bârid bu kökten", balagha_note: null },
          { arabic: "وَلَا", transliteration: "wa lā", root: null, pos: "harf", meaning_tr: "ne de", irab_short: "atıf + nefi" },
          { arabic: "شَرَابًا", transliteration: "šarāban", root: "ش-ر-ب", pattern: "فَعَال", pos: "ism", meaning_tr: "içecek", irab: "{Atıf} (بَرْدًا üzerine), {mensûb}.", irab_short: "atıf, mensûb", turkish_bridge: "Şerbet, şarap, meşrûbât bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 78, ayah: 25,
        arabic: "إِلَّا حَمِيمًا وَغَسَّاقًا",
        translation: "Ancak kaynar su ve irin",
        words: [
          { arabic: "إِلَّا", transliteration: "illā", root: null, pos: "harf", meaning_tr: "ancak, sadece", irab: "{Harf-i istisna}.", irab_short: "istisna edatı", turkish_bridge: null, balagha_note: null },
          { arabic: "حَمِيمًا", transliteration: "ḥamīman", root: "ح-م-م", pattern: "فَعِيل", pos: "ism", meaning_tr: "kaynar su", irab: "{Müstesnâ}, {mensûb}.", irab_short: "müstesnâ, mensûb", turkish_bridge: "Hammâm (hamam), hamîm (sıcak dost) bu kökten", balagha_note: null },
          { arabic: "وَغَسَّاقًا", transliteration: "wa ğassāqan", root: "غ-س-ق", pattern: "فَعَّال", pos: "ism", meaning_tr: "irin, iğrenç sıvı", irab: "{Atıf}, {mensûb}. فَعَّال kalıbı.", irab_short: "atıf, mensûb", turkish_bridge: null, balagha_note: "Cehennemde 'içecek' olarak sunulan iki şey: kaynar su + irin → تهكم (alaycı anlatım): bir tür 'ikrâm.'" },
        ],
      },
      {
        surah: 78, ayah: 26,
        arabic: "جَزَاءً وِفَاقًا",
        translation: "Tam uygun bir karşılık olarak",
        words: [
          { arabic: "جَزَاءً", transliteration: "jazāʾan", root: "ج-ز-ي", pattern: "فَعَال", pos: "ism", meaning_tr: "karşılık", irab: "{Mef'ûl mutlak} veya {mef'ûl li-eclih}, {mensûb}.", irab_short: "mef'ûl mutlak, mensûb", turkish_bridge: "Ceza, mücâzât bu kökten", balagha_note: null },
          { arabic: "وِفَاقًا", transliteration: "wifāqan", root: "و-ف-ق", pattern: "فِعَال", pos: "ism", meaning_tr: "tam uygun, denk", irab: "{Sıfat}, {mensûb}.", irab_short: "sıfat, mensûb", turkish_bridge: "Muvâfık, tevfîk, ittifâk bu kökten", balagha_note: "Ceza tam suça denk → adâlet ilkesi. Fazla da yok eksik de yok." },
        ],
      },
      {
        surah: 78, ayah: 27,
        arabic: "إِنَّهُمْ كَانُوا لَا يَرْجُونَ حِسَابًا",
        translation: "Çünkü onlar hesap gününe inanmıyorlardı",
        words: [
          { arabic: "إِنَّهُمْ", transliteration: "innahum", root: null, pos: "harf", meaning_tr: "şüphesiz onlar", irab: "إِنَّ + هُمْ (ism-i inne, zamîr).", irab_short: "inne + zamîr" },
          { arabic: "كَانُوا", transliteration: "kānū", root: "ك-و-ن", pos: "fil", meaning_tr: "idiler", irab_short: "fiil-i nâkıs" },
          { arabic: "لَا", transliteration: "lā", root: null, pos: "harf", meaning_tr: "değil", irab_short: "harf-i nefi" },
          { arabic: "يَرْجُونَ", transliteration: "yarjūna", root: "ر-ج-و", pos: "fil", meaning_tr: "ummak, beklemek", irab: "{Muzâri}, merfû. Haber-i kâne (لَا يَرْجُونَ cümlesi).", irab_short: "muzâri, haber-i kâne", turkish_bridge: "Recâ (umut, beklenti) bu kökten", balagha_note: null },
          { arabic: "حِسَابًا", transliteration: "ḥisāban", root: "ح-س-ب", pattern: "فِعَال", pos: "ism", meaning_tr: "hesap", irab: "{Mef'ûl bih}, {mensûb}.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Hisâb, muhâsebe, hesap bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 78, ayah: 28,
        arabic: "وَكَذَّبُوا بِـَٔايَـٰتِنَا كِذَّابًا",
        translation: "Âyetlerimizi alabildiğine yalanladılar",
        words: [
          { arabic: "وَكَذَّبُوا", transliteration: "wa kaḏḏabū", root: "ك-ذ-ب", pos: "fil", meaning_tr: "yalanladılar", irab: "II. bâb: كَذَبَ (yalan söyledi) → كَذَّبَ (yalanladı).", irab_short: "mâzî, II. bâb", turkish_bridge: "Kizb (yalan), tekzîb bu kökten", balagha_note: null },
          { arabic: "بِـَٔايَـٰتِنَا", transliteration: "bi-āyātinā", root: "أ-ي-ي", pos: "ism", meaning_tr: "âyetlerimizi", irab: "بِ {harf-i cer} + آيَاتِ {mecrûr} + نَا {muzâfun ileyh}.", irab_short: "câr-mecrûr", turkish_bridge: "Âyet (işaret, delil) bu kökten", balagha_note: null },
          { arabic: "كِذَّابًا", transliteration: "kiḏḏāban", root: "ك-ذ-ب", pattern: "فِعَّال", pos: "ism", meaning_tr: "şiddetli yalanlama", irab: "{Mef'ûl mutlak}, {mensûb}. Fiille aynı kökten masdar → pekiştirme.", irab_short: "mef'ûl mutlak, mensûb", turkish_bridge: null, balagha_note: "كِذَّابًا: فِعَّال vezninde masdar → aşırı yalanlama. تَكْذِيب yerine bu form mübalağa ifade eder." },
        ],
      },
      {
        surah: 78, ayah: 29,
        arabic: "وَكُلَّ شَىْءٍ أَحْصَيْنَـٰهُ كِتَـٰبًا",
        translation: "Biz her şeyi yazarak kaydetmişizdir",
        words: [
          { arabic: "وَكُلَّ", transliteration: "wa kulla", root: null, pos: "ism", meaning_tr: "her", irab: "وَ hâliye + كُلَّ {mef'ûl bih mukaddem}, {mensûb}.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: null, balagha_note: null },
          { arabic: "شَىْءٍ", transliteration: "šayʾin", root: "ش-ي-أ", pos: "ism", meaning_tr: "şeyi", irab: "{Muzâfun ileyh}, {mecrûr}.", irab_short: "muzâfun ileyh, mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "أَحْصَيْنَـٰهُ", transliteration: "aḥṣaynāhu", root: "ح-ص-ي", pos: "fil", meaning_tr: "saydık, kaydettik", irab: "IV. bâb: حَصَى → أَحْصَى (saymak, kaydetmek). {Fâil}: نَا + هُ mef'ûl bih.", irab_short: "mâzî, IV. bâb", turkish_bridge: "İhsâ (sayım), istatistik bu kökten", balagha_note: null },
          { arabic: "كِتَـٰبًا", transliteration: "kitāban", root: "ك-ت-ب", pattern: "فِعَال", pos: "ism", meaning_tr: "yazılı kayıt olarak", irab: "{Mef'ûl mutlak} (nev'î) veya hâl, {mensûb}.", irab_short: "mef'ûl mutlak, mensûb", turkish_bridge: "Kitâb, kâtib, mektûb bu kökten", balagha_note: "Her şeyin kaydedildiği vurgusu: kaçış yok." },
        ],
      },
      {
        surah: 78, ayah: 30,
        arabic: "فَذُوقُوا فَلَن نَّزِيدَكُمْ إِلَّا عَذَابًا",
        translation: "Tadın! Size azaptan başka bir şey artırmayacağız!",
        words: [
          { arabic: "فَذُوقُوا", transliteration: "fa-ḏūqū", root: "ذ-و-ق", pos: "fil", meaning_tr: "tadın!", irab: "فَ {fa-yı fa'sîha (açıklayıcı)} + ذُوقُوا {emr, cem}.", irab_short: "fiil-i emr", turkish_bridge: null, balagha_note: "İstihzâ (alaycı emir): 'Tadın!' → gerçek bir zevk değil, azap tattırma." },
          { arabic: "فَلَن", transliteration: "fa-len", root: null, pos: "harf", meaning_tr: "asla ...mayacağız", irab: "فَ {atıf} + لَنْ {harf-i nefi ve nasb: gelecekte kesinlikle olmayacak}.", irab_short: "nefi + nasb", turkish_bridge: null, balagha_note: null },
          { arabic: "نَّزِيدَكُمْ", transliteration: "nazīdakum", root: "ز-ي-د", pos: "fil", meaning_tr: "size artırmayacağız", irab: "{Muzâri mensûb} (لَنْ ile). {Fâil}: müstetir (biz). كُمْ mef'ûl bih.", irab_short: "muzâri mensûb", turkish_bridge: "Ziyâde (artış), mezîd bu kökten", balagha_note: null },
          { arabic: "إِلَّا", transliteration: "illā", root: null, pos: "harf", meaning_tr: "ancak", irab_short: "istisna" },
          { arabic: "عَذَابًا", transliteration: "ʿaḏāban", root: "ع-ذ-ب", pattern: "فَعَال", pos: "ism", meaning_tr: "azap", irab: "{Müstesnâ}, {mensûb}.", irab_short: "müstesnâ, mensûb", turkish_bridge: "Azâb, ta'zîb, mu'azzeb bu kökten", balagha_note: "En dehşet verici ayet: artış yalnız azapta. لَنْ ile kesinlik. Hz. Peygamber'in 'en şiddetli ayet' dediği rivayet edilir." },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "إِلَّا — İstisna (Hasr) Yapısı",
        explanation: "لَا يَذُوقُونَ ... إِلَّا yapısında: menfi cümle + إِلَّا = hasr (sınırlandırma). 'Ancak şunu tadarlar.' Müstesnâ (إِلَّا'dan sonraki) mensûb olur.",
        rule: "لَا + fiil + mef'ûl + إِلَّا + müstesnâ (mensûb)\nلَا يَذُوقُونَ بَرْدًا ... إِلَّا حَمِيمًا\n= Serinlik tatmazlar, ancak kaynar su (tadarlar).",
        examples: ["لَا يَذُوقُونَ فِيهَا بَرْدًا وَلَا شَرَابًا إِلَّا حَمِيمًا — serinlik de içecek de yok, sadece kaynar su", "فَلَنْ نَزِيدَكُمْ إِلَّا عَذَابًا — size azaptan başka bir şey artırmayacağız"],
      },
      {
        title: "Mef'ûl Mutlak — Nev'î vs. Te'kîdî",
        explanation: "Mef'ûl mutlak iki türlü olur: 1) Te'kîdî: fiile salt pekiştirme (ضَرَبَ ضَرْبًا), 2) Nev'î: eylemin çeşidini belirtme (كِذَّابًا = 'şiddetle yalanlama'). Bu surede كِذَّابًا (28) ve كِتَابًا (29) ikisi de mef'ûl mutlak nev'î.",
        rule: "Te'kîdî: fiil + masdar (aynı kök, aynı kalıp)\nNev'î: fiil + masdar (farklı kalıp veya sıfatlı)\nكَذَّبُوا كِذَّابًا → şiddetle yalanladılar (nev'î)",
        examples: ["كِذَّابًا — nev'î: aşırı yalanlama çeşidi", "كِتَابًا — nev'î: yazılı kayıt şeklinde"],
      },
      {
        title: "لَنْ — Gelecekte Kesin Olumsuzluk",
        explanation: "لَنْ muzâriyi mensûb yapar ve gelecekte kesin olumsuzluk ifade eder. لَا (şimdi olmuyor) → لَنْ (gelecekte de asla olmayacak). لَنْ نَزِيدَكُمْ: asla artırmayacağız — ebedîlik vurgusu.",
        rule: "لَنْ + muzâri (mensûb) → gelecekte kesin nefi\nلَنْ نَزِيدَكُمْ = asla artırmayacağız",
        examples: ["لَنْ نَزِيدَكُمْ إِلَّا عَذَابًا", "لَنْ تَرَانِي — beni asla göremeyeceksin (7:143)"],
      },
    ],
    exercises: [
      { id: "L57-Q01", type: "wazn_match", question: "مِرْصَاد kelimesi hangi kalıptadır?", targetWord: "مِرْصَادًا", options: ["مِفْعَال — ism-i mekân (gözetleme yeri)", "فِعَال — masdar", "مَفْعُول — ism-i mef'ûl", "تَفْعِيل — II. bâb masdarı"], correct: 0, explanation: "مِرْصَاد: ر-ص-د kökünden مِفْعَال kalıbı → gözetleme yeri. L56'daki مِيقَات ile aynı kalıp.", relatedRoots: ["ر-ص-د"] },
      { id: "L57-Q02", type: "single_choice", question: "إِلَّا حَمِيمًا وَغَسَّاقًا cümlesinde حَمِيمًا'nın i'rab durumu nedir?", options: ["Müstesnâ, mensûb (إِلَّا'dan sonra)", "Mef'ûl bih, mensûb", "Haber-i kâne, mensûb", "Hâl, mensûb"], correct: 0, explanation: "İstisna yapısında إِلَّا'dan sonraki isim 'müstesnâ' olarak mensûb gelir.", relatedRoots: ["ح-م-م"] },
      { id: "L57-Q03", type: "bab_identify", question: "كَذَّبُوا fiili kaçıncı bâbtandır?", targetWord: "كَذَّبُوا", options: ["II. bâb (tef'îl): كَذَبَ → كَذَّبَ (yalanladı)", "I. bâb: كَذَبَ (yalan söyledi)", "IV. bâb: أَكْذَبَ", "III. bâb: كَاذَبَ"], correct: 0, explanation: "كَذَّبَ: II. bâb. I. bâb كَذَبَ = yalan söyledi → II. bâb كَذَّبَ = yalanladı (başkasını yalancı saydı). Te'diye (geçişli yapma).", relatedRoots: ["ك-ذ-ب"] },
      { id: "L57-Q04", type: "root_extract", question: "أَحْصَيْنَاهُ kelimesinin kökü nedir?", targetWord: "أَحْصَيْنَـٰهُ", options: ["ح-ص-ي", "ح-ص-ن", "ح-ص-ر", "ح-ص-ص"], correct: 0, explanation: "أَحْصَى: ح-ص-ي kökünden IV. bâb. حَصَى (çakıl taşı) → أَحْصَى (tek tek saydı). İhsâ (sayım, istatistik).", relatedRoots: ["ح-ص-ي"] },
      { id: "L57-Q05", type: "fill_blank", question: "فَذُوقُوا فَلَن نَّزِيدَكُمْ إِلَّا _____", options: ["عَذَابًا", "حَمِيمًا", "حِسَابًا", "ثَوَابًا"], correct: 0, hint: "En ağır ayet olarak nitelendirilen kapanış", explanation: "عَذَابًا: 'azaptan başka bir şey artırmayacağız.' لَنْ ile kesinlik + إِلَّا ile hasr.", relatedRoots: ["ع-ذ-ب"] },
      { id: "L57-Q06", type: "single_choice", question: "78:21-30 bölümünün temel belâgat tekniği nedir?", options: ["Tehvîl (korku salma) — cehennemin detaylı tasviri ile sakındırma", "Tergîb (özendirme) — cennet nimetleri", "Kıssa — bir peygamber hikâyesi", "İstidlâl — aklî deliller"], correct: 0, explanation: "Bu bölüm tamamen cehennem tasviri: gözetleme yeri, kaynar su, irin, sonsuz azap → tehvîl (korkutma) yöntemi. Hemen arkasından cennet tasviri (tergîb) gelecek.", relatedRoots: [] },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DERS 58 — NEBE 78:31-40 — Cennet Tasviri + Kapanış
  // ═══════════════════════════════════════════════════════════
  {
    id: "L58-nebe-4",
    title: "Nebe (31-40) — Cennet ve Kapanış",
    titleAr: "سُورَةُ النَّبَإ ٣١-٤٠",
    stage: 2,
    level: 7,
    surah: 78,
    description: "Cennet nimetleri, hesap günü sahnesi, sure kapanışı. Muttakîler vs. tâğîler mukâbelesi. İsm-i tafdîl, مَفَاز kalıbı, Rabb-i semâvât terkibi.",
    verses: [
      {
        surah: 78, ayah: 31,
        arabic: "إِنَّ لِلْمُتَّقِينَ مَفَازًا",
        translation: "Şüphesiz muttakîler için kurtuluş/başarı vardır",
        words: [
          { arabic: "إِنَّ", transliteration: "inna", root: null, pos: "harf", meaning_tr: "şüphesiz", irab_short: "harf-i te'kîd", balagha_note: "Cehennem bölümü إِنَّ جَهَنَّمَ ile açılmıştı → cennet bölümü إِنَّ لِلْمُتَّقِينَ ile açılıyor → mukâbele." },
          { arabic: "لِلْمُتَّقِينَ", transliteration: "lil-muttaqīna", root: "و-ق-ي", pattern: "مُفْتَعِلِين", pos: "ism", meaning_tr: "muttakîler için", irab: "لِ {harf-i cer} + المُتَّقِينَ {VIII. bâb ism-i fâil, mecrûr (yâ ile)}.", irab_short: "câr-mecrûr", turkish_bridge: "Takvâ, ittikâ, muttakî bu kökten", balagha_note: null },
          { arabic: "مَفَازًا", transliteration: "mafāzan", root: "ف-و-ز", pattern: "مَفْعَل", pos: "ism", meaning_tr: "kurtuluş yeri, başarı", irab: "İsm-i inne, {mensûb}. مَفْعَل: ism-i mekân.", irab_short: "ism-i inne, mensûb", turkish_bridge: "Fevz (kurtuluş), fâiz bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 78, ayah: 32,
        arabic: "حَدَائِقَ وَأَعْنَـٰبًا",
        translation: "Bahçeler ve üzüm bağları",
        words: [
          { arabic: "حَدَائِقَ", transliteration: "ḥadāʾiqa", root: "ح-د-ق", pos: "ism", meaning_tr: "bahçeler", irab: "{Bedel} (مَفَازًا'dan) veya {atıf beyânî}, {mensûb}.", irab_short: "bedel, mensûb", turkish_bridge: "Hadîka (bahçe, park) bu kökten", balagha_note: null },
          { arabic: "وَأَعْنَـٰبًا", transliteration: "wa aʿnāban", root: "ع-ن-ب", pattern: "أَفْعَال", pos: "ism", meaning_tr: "üzümler", irab: "{Atıf}, {mensûb}.", irab_short: "atıf, mensûb", turkish_bridge: "İneb, a'nâb (üzümler) bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 78, ayah: 33,
        arabic: "وَكَوَاعِبَ أَتْرَابًا",
        translation: "Ve yaşıt eşler",
        words: [
          { arabic: "وَكَوَاعِبَ", transliteration: "wa kawāʿiba", root: "ك-ع-ب", pos: "ism", meaning_tr: "göğüsleri tomurcuklanmış (genç kadınlar)", irab: "{Atıf}, {mensûb}. كَاعِب'in cem-i teksîri.", irab_short: "atıf, mensûb", turkish_bridge: "Ka'b (topuk), küp (kâ'be) bu kökten", balagha_note: null },
          { arabic: "أَتْرَابًا", transliteration: "atrāban", root: "ت-ر-ب", pattern: "أَفْعَال", pos: "ism", meaning_tr: "yaşıt, akran", irab: "{Sıfat}, {mensûb}. تِرْب (yaşıt) → أَتْرَاب.", irab_short: "sıfat, mensûb", turkish_bridge: "Tirb (yaşıt, arkadaş): toprakta birlikte büyüyen", balagha_note: null },
        ],
      },
      {
        surah: 78, ayah: 34,
        arabic: "وَكَأْسًا دِهَاقًا",
        translation: "Ve dopdolu kadehler",
        words: [
          { arabic: "وَكَأْسًا", transliteration: "wa kaʾsan", root: "ك-أ-س", pos: "ism", meaning_tr: "kadeh", irab: "{Atıf}, {mensûb}.", irab_short: "atıf, mensûb", turkish_bridge: "Ke's (kadeh) bu kökten", balagha_note: null },
          { arabic: "دِهَاقًا", transliteration: "dihāqan", root: "د-ه-ق", pattern: "فِعَال", pos: "ism", meaning_tr: "dopdolu, ağzına kadar", irab: "{Sıfat}, {mensûb}.", irab_short: "sıfat, mensûb", turkish_bridge: null, balagha_note: null },
        ],
      },
      {
        surah: 78, ayah: 35,
        arabic: "لَّا يَسْمَعُونَ فِيهَا لَغْوًا وَلَا كِذَّ ٰبًا",
        translation: "Orada boş söz de yalan da işitmezler",
        words: [
          { arabic: "لَّا يَسْمَعُونَ", transliteration: "lā yasmaʿūna", root: "س-م-ع", pos: "fil", meaning_tr: "işitmezler", irab: "{Muzâri}, merfû.", irab_short: "muzâri, merfû", turkish_bridge: "Sem' (işitme), sâmi' bu kökten", balagha_note: null },
          { arabic: "فِيهَا", transliteration: "fīhā", root: null, pos: "harf", meaning_tr: "orada", irab_short: "câr-mecrûr" },
          { arabic: "لَغْوًا", transliteration: "lağvan", root: "ل-غ-و", pos: "ism", meaning_tr: "boş söz", irab: "{Mef'ûl bih}, {mensûb}.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Lağv (boş, geçersiz sayma) bu kökten", balagha_note: null },
          { arabic: "وَلَا", transliteration: "wa lā", root: null, pos: "harf", meaning_tr: "ne de", irab_short: "atıf + nefi" },
          { arabic: "كِذَّ ٰبًا", transliteration: "kiḏḏāban", root: "ك-ذ-ب", pattern: "فِعَّال", pos: "ism", meaning_tr: "yalanlama, yalan", irab: "{Atıf}, {mensûb}. L57'deki كِذَّابًا ile aynı: tekrar.", irab_short: "atıf, mensûb", turkish_bridge: null, balagha_note: "Cehennemde 'لَا يَذُوقُونَ بَرْدًا وَلَا شَرَابًا' ↔ Cennette 'لَا يَسْمَعُونَ لَغْوًا وَلَا كِذَّابًا' → mukâbele." },
        ],
      },
      {
        surah: 78, ayah: 36,
        arabic: "جَزَاءً مِّن رَّبِّكَ عَطَاءً حِسَابًا",
        translation: "Rabbinden bir karşılık, yeterli bir lütuf olarak",
        words: [
          { arabic: "جَزَاءً", transliteration: "jazāʾan", root: "ج-ز-ي", pos: "ism", meaning_tr: "karşılık", irab: "{Mef'ûl mutlak} veya hâl, {mensûb}.", irab_short: "mef'ûl mutlak, mensûb", turkish_bridge: null, balagha_note: null },
          { arabic: "مِّن رَّبِّكَ", transliteration: "min rabbika", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbinden", irab: "{Câr-mecrûr}, sıfat. كَ muzâfun ileyh.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "عَطَاءً", transliteration: "ʿaṭāʾan", root: "ع-ط-و", pattern: "فَعَال", pos: "ism", meaning_tr: "lütuf, bağış", irab: "{Bedel} (جَزَاءً'dan), {mensûb}.", irab_short: "bedel, mensûb", turkish_bridge: "Atâ (verme, lütuf), atıyye bu kökten", balagha_note: null },
          { arabic: "حِسَابًا", transliteration: "ḥisāban", root: "ح-س-ب", pos: "ism", meaning_tr: "yeterli, hesaplı", irab: "{Sıfat} (عَطَاء'ın sıfatı), {mensûb}. 'Yeterli/bol ölçüde hesaplanmış.'", irab_short: "sıfat, mensûb", turkish_bridge: null, balagha_note: "جَزَاءً وِفَاقًا (26, ceza) ↔ جَزَاءً ... عَطَاءً حِسَابًا (36, mükâfât) → hem ceza hem mükâfât 'karşılık' ama biri denk, diğeri bol." },
        ],
      },
      {
        surah: 78, ayah: 37,
        arabic: "رَّبِّ ٱلسَّمَـٰوَ ٰتِ وَٱلْأَرْضِ وَمَا بَيْنَهُمَا ٱلرَّحْمَـٰنِ ۖ لَا يَمْلِكُونَ مِنْهُ خِطَابًا",
        translation: "Göklerin, yerin ve ikisi arasındakilerin Rabbi, Rahmân; O'ndan bir söz alma gücüne sahip değillerdir",
        words: [
          { arabic: "رَّبِّ", transliteration: "rabbi", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbi", irab: "{Bedel} (رَبِّكَ'den) veya {atıf beyânî}, {mecrûr}.", irab_short: "bedel, mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلسَّمَـٰوَ ٰتِ", transliteration: "as-samāwāti", root: "س-م-و", pos: "ism", meaning_tr: "göklerin", irab: "{Muzâfun ileyh}, {mecrûr}.", irab_short: "muzâfun ileyh, mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "وَٱلْأَرْضِ", transliteration: "wal-arḍi", root: "أ-ر-ض", pos: "ism", meaning_tr: "yerin", irab: "{Atıf}, {mecrûr}.", irab_short: "atıf, mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "وَمَا بَيْنَهُمَا", transliteration: "wa mā baynahumā", root: null, pos: "ism", meaning_tr: "ikisi arasındakilerin", irab: "مَا ism-i mevsûl, بَيْنَ zarf.", irab_short: "atıf, mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلرَّحْمَـٰنِ", transliteration: "ar-raḥmāni", root: "ر-ح-م", pos: "ism", meaning_tr: "Rahmân'ın", irab: "{Sıfat} (رَبِّ'in sıfatı) veya bedel, {mecrûr}.", irab_short: "sıfat, mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "لَا يَمْلِكُونَ", transliteration: "lā yamlikūna", root: "م-ل-ك", pos: "fil", meaning_tr: "güçleri yetmez", irab: "{Muzâri}, merfû. {Fâil}: vâv-ı cemâ'a.", irab_short: "muzâri, merfû", turkish_bridge: "Mülk, melik, mâlik bu kökten", balagha_note: null },
          { arabic: "مِنْهُ", transliteration: "minhu", root: null, pos: "harf", meaning_tr: "O'ndan", irab_short: "câr-mecrûr" },
          { arabic: "خِطَابًا", transliteration: "ḫiṭāban", root: "خ-ط-ب", pattern: "فِعَال", pos: "ism", meaning_tr: "söz, hitap", irab: "{Mef'ûl bih}, {mensûb}.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Hitâb, hatîb, hutbe bu kökten", balagha_note: "O gün hiç kimse Allah'a karşı söz söyleyemez — mutlak sessizlik ve itaat." },
        ],
      },
      {
        surah: 78, ayah: 38,
        arabic: "يَوْمَ يَقُومُ ٱلرُّوحُ وَٱلْمَلَـٰئِكَةُ صَفًّا ۖ لَّا يَتَكَلَّمُونَ إِلَّا مَنْ أَذِنَ لَهُ ٱلرَّحْمَـٰنُ وَقَالَ صَوَابًا",
        translation: "O gün Rûh ve melekler saf saf durur; Rahmân'ın izin verdiği müstesna, kimse konuşamaz — o da doğruyu söyler",
        words: [
          { arabic: "يَوْمَ", transliteration: "yevme", root: "ي-و-م", pos: "ism", meaning_tr: "o gün", irab_short: "zarf, mensûb" },
          { arabic: "يَقُومُ", transliteration: "yaqūmu", root: "ق-و-م", pos: "fil", meaning_tr: "durur", irab: "{Muzâri}, merfû.", irab_short: "muzâri", turkish_bridge: "Kıyâm (ayağa kalkma), kıyâmet bu kökten", balagha_note: null },
          { arabic: "ٱلرُّوحُ", transliteration: "ar-rūḥu", root: "ر-و-ح", pos: "ism", meaning_tr: "Rûh (Cebrâîl)", irab: "{Fâil}, {merfû}.", irab_short: "fâil, merfû", turkish_bridge: "Rûh, rûhânî bu kökten", balagha_note: null },
          { arabic: "وَٱلْمَلَـٰئِكَةُ", transliteration: "wal-malāʾikatu", root: "م-ل-ك", pos: "ism", meaning_tr: "melekler", irab: "{Atıf} (الرُّوح üzerine), {merfû}.", irab_short: "atıf, merfû", turkish_bridge: "Melek, melekût bu kökten", balagha_note: null },
          { arabic: "صَفًّا", transliteration: "ṣaffan", root: "ص-ف-ف", pos: "ism", meaning_tr: "saf halinde", irab: "{Hâl}, {mensûb}.", irab_short: "hâl, mensûb", turkish_bridge: "Saff (sıra), musâff bu kökten", balagha_note: null },
          { arabic: "لَّا يَتَكَلَّمُونَ", transliteration: "lā yatakallam ūna", root: "ك-ل-م", pos: "fil", meaning_tr: "konuşamazlar", irab: "V. bâb: تَكَلَّمَ. Muzâri, merfû.", irab_short: "muzâri, V. bâb", turkish_bridge: "Kelâm, tekellüm, kelime bu kökten", balagha_note: null },
          { arabic: "إِلَّا مَنْ أَذِنَ لَهُ ٱلرَّحْمَـٰنُ", transliteration: "illā man aḏina lahur-raḥmānu", root: "أ-ذ-ن", pos: "fil", meaning_tr: "Rahmân'ın izin verdiği hariç", irab: "مَنْ {ism-i mevsûl}, müstesnâ. أَذِنَ {mâzî, I. bâb}.", irab_short: "müstesnâ", turkish_bridge: "İzin, ezan, me'zûn bu kökten", balagha_note: null },
          { arabic: "وَقَالَ صَوَابًا", transliteration: "wa qāla ṣawāban", root: "ص-و-ب", pos: "ism", meaning_tr: "doğru söyledi", irab: "صَوَابًا {mef'ûl mutlak} veya hâl, {mensûb}.", irab_short: "mef'ûl mutlak, mensûb", turkish_bridge: "Savâb (doğru, isabetli), isâbet bu kökten", balagha_note: "İzin alanlar da yalnız doğruyu söyler → mutlak düzen." },
        ],
      },
      {
        surah: 78, ayah: 39,
        arabic: "ذَ ٰلِكَ ٱلْيَوْمُ ٱلْحَقُّ ۖ فَمَن شَاءَ ٱتَّخَذَ إِلَىٰ رَبِّهِۦ مَـَٔابًا",
        translation: "İşte o, gerçek gündür. Dileyen, Rabbine dönüş yolu tutar",
        words: [
          { arabic: "ذَ ٰلِكَ", transliteration: "ḏālika", root: null, pos: "ism", meaning_tr: "işte o", irab: "{Mübtedâ}, işâret zamiri.", irab_short: "mübtedâ" },
          { arabic: "ٱلْيَوْمُ", transliteration: "al-yevmu", root: "ي-و-م", pos: "ism", meaning_tr: "gün", irab: "{Bedel} (ذَلِكَ'den) veya {haber}, {merfû}.", irab_short: "haber, merfû" },
          { arabic: "ٱلْحَقُّ", transliteration: "al-ḥaqqu", root: "ح-ق-ق", pos: "ism", meaning_tr: "gerçek, hak", irab: "{Sıfat}, {merfû}.", irab_short: "sıfat, merfû", turkish_bridge: "Hak, hakîkat, muhakkak bu kökten", balagha_note: null },
          { arabic: "فَمَن", transliteration: "fa-man", root: null, pos: "ism", meaning_tr: "kim ki, dileyen", irab: "فَ {isti'nâfiyye} + مَنْ {şart edatı / ism-i mevsûl}.", irab_short: "şart" },
          { arabic: "شَاءَ", transliteration: "šāʾa", root: "ش-ي-أ", pos: "fil", meaning_tr: "diledi", irab: "{Mâzî}, şart fiili.", irab_short: "fiil-i şart", turkish_bridge: "Meşîet (dileme), inşâallah bu kökten", balagha_note: null },
          { arabic: "ٱتَّخَذَ", transliteration: "ittaḫaḏa", root: "أ-خ-ذ", pos: "fil", meaning_tr: "edindi, tuttu", irab: "{Cevâb-ı şart}, VIII. bâb: أَخَذَ → اِتَّخَذَ.", irab_short: "mâzî, VIII. bâb", turkish_bridge: "İttihâz (edinme) bu kökten", balagha_note: null },
          { arabic: "إِلَىٰ رَبِّهِۦ", transliteration: "ilā rabbihī", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbine", irab_short: "câr-mecrûr" },
          { arabic: "مَـَٔابًا", transliteration: "maʾāban", root: "أ-و-ب", pattern: "مَفْعَل", pos: "ism", meaning_tr: "dönüş yeri, sığınak", irab: "{Mef'ûl bih}, {mensûb}. 78:22 ile aynı kelime ama burada olumlu.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: null, balagha_note: "مَآبًا iki kez: 22'de cehennem 'azgınlar için dönüş yeri' → 39'da 'Rabbine dönüş yolu' → aynı kelime, zıt bağlam." },
        ],
      },
      {
        surah: 78, ayah: 40,
        arabic: "إِنَّا أَنذَرْنَـٰكُمْ عَذَابًا قَرِيبًا يَوْمَ يَنظُرُ ٱلْمَرْءُ مَا قَدَّمَتْ يَدَاهُ وَيَقُولُ ٱلْكَافِرُ يَـٰلَيْتَنِى كُنتُ تُرَ ٰبًا",
        translation: "Biz sizi yakın bir azapla uyardık. O gün kişi ellerinin önceden gönderdiğine bakar ve kâfir der ki: Keşke toprak olsaydım!",
        words: [
          { arabic: "إِنَّا", transliteration: "innā", root: null, pos: "harf", meaning_tr: "şüphesiz biz", irab: "إِنَّ + نَا (ism-i inne).", irab_short: "inne + zamîr" },
          { arabic: "أَنذَرْنَـٰكُمْ", transliteration: "anḏarnākum", root: "ن-ذ-ر", pos: "fil", meaning_tr: "sizi uyardık", irab: "IV. bâb: أَنْذَرَ (uyardı). كُمْ mef'ûl bih.", irab_short: "mâzî, IV. bâb", turkish_bridge: "İnzâr (uyarı), nezîr (uyarıcı), münzir bu kökten", balagha_note: null },
          { arabic: "عَذَابًا", transliteration: "ʿaḏāban", root: "ع-ذ-ب", pos: "ism", meaning_tr: "azap", irab: "İkinci {mef'ûl bih} veya {mef'ûl bih}, {mensûb}.", irab_short: "mef'ûl bih, mensûb" },
          { arabic: "قَرِيبًا", transliteration: "qarīban", root: "ق-ر-ب", pattern: "فَعِيل", pos: "ism", meaning_tr: "yakın", irab: "{Sıfat}, {mensûb}.", irab_short: "sıfat, mensûb", turkish_bridge: "Karîb (yakın), kurb, akrabâ bu kökten", balagha_note: null },
          { arabic: "يَوْمَ", transliteration: "yevme", root: "ي-و-م", pos: "ism", meaning_tr: "o gün", irab_short: "zarf, mensûb" },
          { arabic: "يَنظُرُ", transliteration: "yanẓuru", root: "ن-ظ-ر", pos: "fil", meaning_tr: "bakar", irab: "{Muzâri}, merfû.", irab_short: "muzâri", turkish_bridge: "Nazar (bakış), nazariyye, manzara bu kökten", balagha_note: null },
          { arabic: "ٱلْمَرْءُ", transliteration: "al-marʾu", root: "م-ر-أ", pos: "ism", meaning_tr: "kişi, insan", irab: "{Fâil}, {merfû}.", irab_short: "fâil, merfû", turkish_bridge: "Mer' (kişi), imrü'l-kays bu kökten", balagha_note: null },
          { arabic: "مَا قَدَّمَتْ يَدَاهُ", transliteration: "mā qaddamat yadāhu", root: "ق-د-م", pos: "fil", meaning_tr: "ellerinin önceden gönderdiğini", irab: "مَا ism-i mevsûl. قَدَّمَ II. bâb: öne sürdü. يَدَاهُ {fâil}, tesniye.", irab_short: "ism-i mevsûl + fiil", turkish_bridge: "Takdîm (öne sürmek), kadîm bu kökten", balagha_note: "Eller → mecâz-ı mürsel: elden maksat bütün ameller." },
          { arabic: "وَيَقُولُ ٱلْكَافِرُ", transliteration: "wa yaqūlu al-kāfiru", root: "ق-و-ل", pos: "fil", meaning_tr: "kâfir der ki", irab_short: "muzâri + fâil" },
          { arabic: "يَـٰلَيْتَنِى", transliteration: "yā laytanī", root: null, pos: "harf", meaning_tr: "keşke ben", irab: "يَا {nidâ edatı, te'essüf} + لَيْتَ {temennî edatı} + نِى {ism-i leytel}.", irab_short: "temennî", turkish_bridge: null, balagha_note: "يَالَيْتَنِي: İmkânsız dilek → hasret ve çaresizlik. Sure böyle pişmanlık nidâsıyla kapanıyor." },
          { arabic: "كُنتُ تُرَ ٰبًا", transliteration: "kuntu turāban", root: "ت-ر-ب", pos: "ism", meaning_tr: "toprak olsaydım", irab: "كُنْتُ {fiil-i nâkıs, mâzî}. تُرَابًا {haber-i kâne}, {mensûb}.", irab_short: "haber-i kâne, mensûb", turkish_bridge: "Türâb (toprak), türbe, mütrib bu kökten", balagha_note: "Sure'nin son kelimesi 'toprak' — en değersiz madde. Kâfirin azabdan kaçmak için toprak olmayı dilemesi: son pişmanlık." },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "Mukâbele Sanatı — Cehennem ↔ Cennet Paralelliği",
        explanation: "78:21-30 (cehennem) ile 78:31-36 (cennet) mükemmel bir mukâbele (paralelizm) oluşturur. Her nimet, önceki cezanın karşılığıdır: cehennem (مِرْصَاد) ↔ cennet (مَفَاز), kaynar su (حَمِيم) ↔ dopdolu kadeh (كَأْس دِهَاق), boş söz yok ↔ yalan yok.",
        rule: "Mukâbele: iki zıt tablo arasında birebir karşılık kurma.\nCehennem → Cennet\nمِرْصَاد → مَفَاز\nحَمِيم → كَأْس دِهَاق\nلَا يَذُوقُونَ → لَا يَسْمَعُونَ\nجَزَاءً وِفَاقًا → جَزَاءً ... عَطَاءً حِسَابًا",
        examples: ["إِنَّ جَهَنَّمَ كَانَتْ مِرْصَادًا (21) ↔ إِنَّ لِلْمُتَّقِينَ مَفَازًا (31)", "لَا يَذُوقُونَ بَرْدًا (24) ↔ لَا يَسْمَعُونَ لَغْوًا (35)"],
      },
      {
        title: "مَآب — Aynı Kelime, Zıt Bağlam",
        explanation: "مَآب (أ-و-ب kökünden مَفْعَل: dönüş yeri) surede iki kez geçer: 78:22'de 'azgınlar için dönüş yeri' (cehennem) → 78:39'da 'Rabbine dönüş yolu' (kurtuluş). Aynı kelime iki zıt bağlamda → tıbâk (tezâd).",
        rule: "مَفْعَل kalıbı: ism-i mekân\nأَوْبَ (döndü) → مَآب (dönüş yeri)\nBağlama göre olumlu veya olumsuz anlam alır.",
        examples: ["لِلطَّاغِينَ مَآبًا — azgınlar için dönüş yeri (cehennem)", "اِتَّخَذَ إِلَى رَبِّهِ مَآبًا — Rabbine dönüş yolu tuttu (kurtuluş)"],
      },
      {
        title: "لَيْتَ — Temennî (Dilek) Edatı",
        explanation: "لَيْتَ: gerçekleşmesi imkânsız veya zor bir dilek ifade eder. İsm + haber alır (إِنَّ gibi ama anlamı farklı). يَا لَيْتَنِي: nidâ + temennî = 'ah keşke!' Te'essüf (hayıflanma) sanatı.",
        rule: "لَيْتَ + ism (mensûb) + haber (merfû veya cümle)\nيَا لَيْتَنِي كُنْتُ تُرَابًا\n= keşke ben toprak olsaydım",
        examples: ["يَا لَيْتَنِي كُنْتُ تُرَابًا — keşke toprak olsaydım", "يَا لَيْتَنِي لَمْ أُوتَ كِتَابِيَهْ — keşke kitabım verilmeseydi (69:25)"],
      },
    ],
    exercises: [
      { id: "L58-Q01", type: "single_choice", question: "Nebe suresinde مَآب (dönüş yeri) hangi iki farklı bağlamda kullanılır?", options: ["22'de cehennem (azgınlara), 39'da Allah'a dönüş yolu (iman edenlere)", "İki yerde de cennet anlamında", "İki yerde de cehennem anlamında", "22'de dünya, 39'da âhiret"], correct: 0, explanation: "Aynı kelime (مَآب) iki zıt bağlamda: cehennem → kurtuluş. Belâgat: tıbâk (antitez).", relatedRoots: ["أ-و-ب"] },
      { id: "L58-Q02", type: "fill_blank", question: "وَيَقُولُ ٱلْكَافِرُ يَـٰلَيْتَنِى كُنتُ _____", options: ["تُرَابًا", "مَاءً", "حَجَرًا", "نَارًا"], correct: 0, hint: "Kâfirin keşke olmayı dilediği en değersiz madde", explanation: "تُرَابًا (toprak): azaptan kurtulmak için en değersiz şey olmayı dilemek → son pişmanlık.", relatedRoots: ["ت-ر-ب"] },
      { id: "L58-Q03", type: "balagha_identify", question: "78:21-30 (cehennem) ile 78:31-36 (cennet) bölümleri arasındaki belâgat tekniği nedir?", options: ["Mukâbele — iki zıt tablo arasında birebir paralellik", "Tıbâk — tek kelimede zıtlık", "İltifât — bakış açısı değişimi", "Tekrâr — aynı cümlenin yinelenmesi"], correct: 0, explanation: "Mukâbele: her cehennem detayının cennet karşılığı var: mirsâd↔mefâz, hamîm↔ke's dihâq, لَا يَذُوقُونَ↔لَا يَسْمَعُونَ.", relatedRoots: [] },
      { id: "L58-Q04", type: "root_extract", question: "مَفَازًا kelimesinin kökü nedir?", targetWord: "مَفَازًا", options: ["ف-و-ز", "ف-ز-ز", "ف-و-ض", "ف-ي-ز"], correct: 0, explanation: "مَفَاز: ف-و-ز kökünden مَفْعَل kalıbı (ism-i mekân). فَازَ = kurtuldu, kazandı.", relatedRoots: ["ف-و-ز"] },
      { id: "L58-Q05", type: "bab_identify", question: "ٱتَّخَذَ fiili kaçıncı bâbtandır?", targetWord: "ٱتَّخَذَ", options: ["VIII. bâb (ifti'âl): أَخَذَ → اِتَّخَذَ (edindi)", "I. bâb: أَخَذَ", "II. bâb: أَخَّذَ", "IV. bâb: آخَذَ"], correct: 0, explanation: "اِتَّخَذَ: VIII. bâb. أَخَذَ (aldı) → اِتَّخَذَ (kendine edindi, benimsedi). Hemzenin tâ'ya idğâmıyla اِتَّخَذَ.", relatedRoots: ["أ-خ-ذ"] },
      { id: "L58-Q06", type: "single_choice", question: "Nebe suresinin genel yapısı nasıldır?", options: ["İstifhâm (1-5) → Nimetler (6-16) → Kıyamet (17-20) → Cehennem (21-30) → Cennet (31-36) → Hesap Günü (37-40)", "Kıssa (1-20) → Hukuk (21-40)", "Kasem (1-10) → Cevap (11-40)", "Soru-cevap diyaloğu (baştan sona)"], correct: 0, explanation: "Nebe altı bölümlü yapıda: soru → nimetler → kıyamet → cehennem → cennet → kapanış. Tam bir mukâbele ve tedric (aşamalı ilerleme).", relatedRoots: [] },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DERS 59 — NÂZİ'ÂT 79:6-14 — Rücfe, Râdife, Mûsâ Girişi
  // ═══════════════════════════════════════════════════════════
  {
    id: "L59-naziat-2",
    title: "Nâzi'ât (6-14) — Sarsıntı ve Mûsâ",
    titleAr: "سُورَةُ النَّازِعَاتِ ٦-١٤",
    stage: 2,
    level: 7,
    surah: 79,
    description: "Kıyamet sarsıntısı (râcife, râdife), kalplerin titreyişi, Mûsâ kıssasının girişi. فَاعِلَة kalıbı, hâl cümlesi, hal istifhâmı.",
    verses: [
      {
        surah: 79, ayah: 6,
        arabic: "يَوْمَ تَرْجُفُ ٱلرَّاجِفَةُ",
        translation: "O gün sarsılan sarsılır (birinci sûr üflemesi)",
        words: [
          { arabic: "يَوْمَ", transliteration: "yevme", root: "ي-و-م", pos: "ism", meaning_tr: "o gün", irab: "Kasemin cevâbına taalluk eden {zarf}, {mensûb}.", irab_short: "zarf, mensûb", turkish_bridge: null, balagha_note: "1-5 ayetlerdeki kasem zincirinin cevâbı burada başlıyor." },
          { arabic: "تَرْجُفُ", transliteration: "tarjufu", root: "ر-ج-ف", pos: "fil", meaning_tr: "sarsar, titrer", irab: "{Muzâri}, merfû.", irab_short: "muzâri", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلرَّاجِفَةُ", transliteration: "ar-rājifatu", root: "ر-ج-ف", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "sarsılan (birinci sûr)", irab: "{Fâil}, {merfû}. فَاعِلَة: I. bâb ism-i fâil müennes.", irab_short: "fâil, merfû", turkish_bridge: null, balagha_note: "Fiil ve fâil aynı kökten: تَرْجُفُ الرَّاجِفَةُ → cinas-ı ictikâk (türetim cinası). Sarsıntı vurgusu katlanıyor." },
        ],
      },
      {
        surah: 79, ayah: 7,
        arabic: "تَتْبَعُهَا ٱلرَّادِفَةُ",
        translation: "Onu ardından gelen izler (ikinci sûr üflemesi)",
        words: [
          { arabic: "تَتْبَعُهَا", transliteration: "tatbaʿuhā", root: "ت-ب-ع", pos: "fil", meaning_tr: "onu takip eder", irab: "{Muzâri}, merfû. هَا mef'ûl bih.", irab_short: "muzâri", turkish_bridge: "Tâbi' (uyan), ittibâ' bu kökten", balagha_note: null },
          { arabic: "ٱلرَّادِفَةُ", transliteration: "ar-rādifatu", root: "ر-د-ف", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "ardından gelen", irab: "{Fâil}, {merfû}. فَاعِلَة kalıbı.", irab_short: "fâil, merfû", turkish_bridge: "Redîf (arkadan gelen), irdâf bu kökten", balagha_note: "İki sûr üflemesi: الرَّاجِفَة (sarsıntı = ölüm) → الرَّادِفَة (takip eden = diriliş). Sıralama kıyametin iki aşamasını gösterir." },
        ],
      },
      {
        surah: 79, ayah: 8,
        arabic: "قُلُوبٌ يَوْمَئِذٍ وَاجِفَةٌ",
        translation: "O gün kalpler (korkudan) titrer",
        words: [
          { arabic: "قُلُوبٌ", transliteration: "qulūbun", root: "ق-ل-ب", pos: "ism", meaning_tr: "kalpler", irab: "{Mübtedâ}, {merfû}. قَلْب'in cem-i teksîri.", irab_short: "mübtedâ, merfû", turkish_bridge: "Kalb, inkılâb (dönüşüm) bu kökten", balagha_note: null },
          { arabic: "يَوْمَئِذٍ", transliteration: "yevmeʾiḏin", root: null, pos: "ism", meaning_tr: "o gün", irab: "{Zarf-ı zaman}. يَوْمَ + إِذْ + تنوين (عِوَض).", irab_short: "zarf", turkish_bridge: null, balagha_note: null },
          { arabic: "وَاجِفَةٌ", transliteration: "wājifatun", root: "و-ج-ف", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "titreyerek çarpan", irab: "{Haber} (قُلُوبٌ'un haberi) veya {sıfat}, {merfû}.", irab_short: "haber, merfû", turkish_bridge: null, balagha_note: "Üçüncü فَاعِلَة: رَاجِفَة (yer sarsılır) → رَادِفَة (takip eden) → وَاجِفَة (kalpler titrer). Dışarıdan içeriye doğru ilerleyen korku." },
        ],
      },
      {
        surah: 79, ayah: 9,
        arabic: "أَبْصَـٰرُهَا خَـٰشِعَةٌ",
        translation: "Gözleri zelil (korkudan yere bakar)",
        words: [
          { arabic: "أَبْصَـٰرُهَا", transliteration: "abṣāruhā", root: "ب-ص-ر", pattern: "أَفْعَال", pos: "ism", meaning_tr: "gözleri (o kalplerin sahiplerinin)", irab: "{Mübtedâ}, {merfû}. بَصَر'in cem-i teksîri + هَا zamîr.", irab_short: "mübtedâ, merfû", turkish_bridge: "Basar (görme), basîret bu kökten", balagha_note: null },
          { arabic: "خَـٰشِعَةٌ", transliteration: "ḫāšiʿatun", root: "خ-ش-ع", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "boyun eğmiş, yere bakan", irab: "{Haber}, {merfû}.", irab_short: "haber, merfû", turkish_bridge: "Huşû' (boyun eğme), hâşi' bu kökten", balagha_note: "Kalp + göz birlikte: iç (kalp) titrer, dış (göz) yere bakar → bütünsel korku tasviri. خَاشِعَة dördüncü فَاعِلَة." },
        ],
      },
      {
        surah: 79, ayah: 10,
        arabic: "يَقُولُونَ أَءِنَّا لَمَرْدُودُونَ فِى ٱلْحَافِرَةِ",
        translation: "(İnkârcılar) diyorlar ki: Biz gerçekten eski halimize mi döndürüleceğiz?",
        words: [
          { arabic: "يَقُولُونَ", transliteration: "yaqūlūna", root: "ق-و-ل", pos: "fil", meaning_tr: "diyorlar", irab_short: "muzâri, merfû" },
          { arabic: "أَءِنَّا", transliteration: "a-innā", root: null, pos: "harf", meaning_tr: "gerçekten biz mi?", irab: "أَ {istifhâm-ı inkârî} + إِنَّ + نَا.", irab_short: "istifhâm + te'kîd", turkish_bridge: null, balagha_note: "İstifhâm-ı inkârî: dirilmeyi inkâr eden soru. 'Yani biz gerçekten mi?!' → alay ve inkâr tonu." },
          { arabic: "لَمَرْدُودُونَ", transliteration: "la-mardūdūna", root: "ر-د-د", pattern: "مَفْعُولُون", pos: "ism", meaning_tr: "geri döndürülenler", irab: "لَ {lâm-ı te'kîd} + مَرْدُودُونَ {ism-i mef'ûl, cem, haber-i inne, merfû}.", irab_short: "haber-i inne, merfû", turkish_bridge: "Redd (geri çevirme), merdûd bu kökten", balagha_note: null },
          { arabic: "فِى ٱلْحَافِرَةِ", transliteration: "fil-ḥāfirati", root: "ح-ف-ر", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "ilk hale, eski duruma", irab: "{Câr-mecrûr}. الحَافِرَة: ilk hal, başlangıç durumu.", irab_short: "câr-mecrûr", turkish_bridge: "Hafr (kazmak), hafîre bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 11,
        arabic: "أَءِذَا كُنَّا عِظَـٰمًا نَّخِرَةً",
        translation: "Biz çürümüş kemikler olduktan sonra mı?",
        words: [
          { arabic: "أَءِذَا", transliteration: "a-iḏā", root: null, pos: "harf", meaning_tr: "...olduğu zaman mı?", irab: "أَ {istifhâm} + إِذَا {zarf-ı şart, zaman}.", irab_short: "istifhâm + şart" },
          { arabic: "كُنَّا", transliteration: "kunnā", root: "ك-و-ن", pos: "fil", meaning_tr: "olduğumuzda", irab_short: "fiil-i nâkıs, mâzî" },
          { arabic: "عِظَـٰمًا", transliteration: "ʿiẓāman", root: "ع-ظ-م", pos: "ism", meaning_tr: "kemikler", irab: "{Haber-i kâne}, {mensûb}. عَظْم'in cem-i teksîri.", irab_short: "haber-i kâne, mensûb", turkish_bridge: "Azm (kemik), azîm (büyük) farklı kökler dikkat!", balagha_note: null },
          { arabic: "نَّخِرَةً", transliteration: "naḫiratan", root: "ن-خ-ر", pattern: "فَعِلَة", pos: "ism", meaning_tr: "çürümüş, ufalanmış", irab: "{Sıfat}, {mensûb}.", irab_short: "sıfat, mensûb", turkish_bridge: null, balagha_note: "İnkârcıların argümanı: çürümüş kemiklerden diriliş imkânsız. Kur'an bunu soru formatında aktararak reddediyor." },
        ],
      },
      {
        surah: 79, ayah: 12,
        arabic: "قَالُوا تِلْكَ إِذًا كَرَّةٌ خَاسِرَةٌ",
        translation: "Dediler: O halde bu, hüsranlı bir dönüş olur!",
        words: [
          { arabic: "قَالُوا", transliteration: "qālū", root: "ق-و-ل", pos: "fil", meaning_tr: "dediler", irab_short: "mâzî" },
          { arabic: "تِلْكَ", transliteration: "tilka", root: null, pos: "ism", meaning_tr: "bu, o", irab: "{İşâret ismi müennes}, {mübtedâ}.", irab_short: "mübtedâ" },
          { arabic: "إِذًا", transliteration: "iḏan", root: null, pos: "harf", meaning_tr: "o halde", irab_short: "cevap edatı" },
          { arabic: "كَرَّةٌ", transliteration: "karratun", root: "ك-ر-ر", pattern: "فَعْلَة", pos: "ism", meaning_tr: "dönüş, tekrar", irab: "{Haber}, {merfû}.", irab_short: "haber, merfû", turkish_bridge: "Kerr (dönme), tekrâr, mükerrer bu kökten", balagha_note: null },
          { arabic: "خَاسِرَةٌ", transliteration: "ḫāsiratun", root: "خ-س-ر", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "hüsranlı, zararlı", irab: "{Sıfat}, {merfû}.", irab_short: "sıfat, merfû", turkish_bridge: "Husrân (zarar), hâsir bu kökten", balagha_note: "İnkârcılar alay ederek: 'Dirilsek bile bu zaten zararlı bir iş!' → istihzâ (alaycılık)." },
        ],
      },
      {
        surah: 79, ayah: 13,
        arabic: "فَإِنَّمَا هِىَ زَجْرَةٌ وَ ٰحِدَةٌ",
        translation: "Oysa o, tek bir haykırıştır (hepsi o kadar)",
        words: [
          { arabic: "فَإِنَّمَا", transliteration: "fa-innamā", root: null, pos: "harf", meaning_tr: "oysa sadece", irab: "فَ {isti'nâfiyye} + إِنَّمَا {hasr edatı: sadece}.", irab_short: "hasr", turkish_bridge: null, balagha_note: "Allah'ın cevabı: onlar imkânsız sanıyor, ama 'sadece tek bir haykırış' yeterli → küçümseme (tahkîr)." },
          { arabic: "هِىَ", transliteration: "hiye", root: null, pos: "ism", meaning_tr: "o (diriliş)", irab: "{Mübtedâ}, zamîr.", irab_short: "mübtedâ" },
          { arabic: "زَجْرَةٌ", transliteration: "zajratun", root: "ز-ج-ر", pos: "ism", meaning_tr: "haykırış, azarlama", irab: "{Haber}, {merfû}.", irab_short: "haber, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "وَ ٰحِدَةٌ", transliteration: "wāḥidatun", root: "و-ح-د", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "tek, bir", irab: "{Sıfat}, {merfû}.", irab_short: "sıfat, merfû", turkish_bridge: "Vâhid (tek), vahdâniyet, tevhîd bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 14,
        arabic: "فَإِذَا هُم بِٱلسَّاهِرَةِ",
        translation: "Bir de bakarlar ki yeryüzündedirler (diriltilmişlerdir)",
        words: [
          { arabic: "فَإِذَا", transliteration: "fa-iḏā", root: null, pos: "harf", meaning_tr: "hemen, bir de", irab: "فَ + إِذَا {fücâiyye (sürpriz) edatı}.", irab_short: "fücâiyye", turkish_bridge: null, balagha_note: "إِذَا الفُجَائِيَّة: aniden, bir bakarsın ki! Hızlı geçiş: tek haykırış → hemen yeryüzünde!" },
          { arabic: "هُم", transliteration: "hum", root: null, pos: "ism", meaning_tr: "onlar", irab: "{Mübtedâ}.", irab_short: "mübtedâ" },
          { arabic: "بِٱلسَّاهِرَةِ", transliteration: "bis-sāhirati", root: "س-ه-ر", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "yeryüzünde, düz arazide", irab: "{Câr-mecrûr}, haber yerine.", irab_short: "câr-mecrûr (haber)", turkish_bridge: "Seher (gece uyanıklığı), sâhire (uyanık yer = yeryüzü)", balagha_note: "Kasem cevabı tamamlandı: sarsıntı → inkâr → tek haykırış → aniden yeryüzünde! Büyük finâl." },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "فَاعِلَة Kalıbının Yoğun Kullanımı",
        explanation: "79:1-14 arasında فَاعِلَة kalıbı 8+ kez geçer: النَّازِعَات, النَّاشِطَات, السَّابِحَات, السَّابِقَات, الرَّاجِفَة, الرَّادِفَة, وَاجِفَة, خَاشِعَة, الحَافِرَة, خَاسِرَة, السَّاهِرَة... Hep فَاعِلَة müennes formu → ritmik birlik.",
        rule: "فَاعِلَة: I. bâb ism-i fâil müennes tekil\nفَاعِلَات: cem-i müennes sâlim\nBu kalıp surenin akustik omurgasını oluşturur.",
        examples: ["الرَّاجِفَة — sarsan (birinci sûr)", "الرَّادِفَة — takip eden (ikinci sûr)", "وَاجِفَة — titreyerek çarpan (kalpler)", "خَاشِعَة — boyun eğmiş (gözler)"],
      },
      {
        title: "إِذَا الفُجَائِيَّة — Sürpriz Edatı",
        explanation: "إِذَا iki türlüdür: 1) Şartiye (zaman): إِذَا جَاءَ = geldiği zaman. 2) Fücâiyye (sürpriz): فَإِذَا هُمْ = bir de bakarsın onlar! İkincisi genelde فَ ile gelir ve isim cümlesi kurar.",
        rule: "Şartiye: إِذَا + fiil (mâzî) + cevap\nFücâiyye: فَإِذَا + mübtedâ + haber\nفَإِذَا هُمْ بِالسَّاهِرَةِ = birdenbire yeryüzündeler!",
        examples: ["فَإِذَا هُمْ بِالسَّاهِرَةِ — bir de bakarlar ki yeryüzündeler", "فَإِذَا هِيَ بَيْضَاءُ — bir de baktı ki bembeyaz (7:108)"],
      },
    ],
    exercises: [
      { id: "L59-Q01", type: "single_choice", question: "الرَّاجِفَة ve الرَّادِفَة neyi temsil eder?", options: ["İki sûr üflemesi: birinci (ölüm) ve ikinci (diriliş)", "İki deprem: biri büyük biri küçük", "İki melek: Cebrâîl ve Mîkâîl", "İki rüzgâr"], correct: 0, explanation: "الرَّاجِفَة: birinci sûr (her şey yıkılır) → الرَّادِفَة: ikinci sûr (diriliş). Sıralama: ölüm → yeniden hayat.", relatedRoots: ["ر-ج-ف", "ر-د-ف"] },
      { id: "L59-Q02", type: "root_extract", question: "وَاجِفَة kelimesinin kökü nedir?", targetWord: "وَاجِفَةٌ", options: ["و-ج-ف", "و-ج-د", "و-ج-ب", "و-ج-ه"], correct: 0, explanation: "وَاجِفَة: و-ج-ف kökünden فَاعِلَة. وَجَفَ = titredi, çarptı. Kalplerin korkudan titremesi.", relatedRoots: ["و-ج-ف"] },
      { id: "L59-Q03", type: "single_choice", question: "فَإِذَا هُمْ بِالسَّاهِرَةِ cümlesindeki إِذَا hangi türdür?", options: ["Fücâiyye (sürpriz): 'bir de bakarlar ki!'", "Şartiye (zaman): 'olduğu zaman'", "Ta'lîliye (sebep)", "İstifhâmiye (soru)"], correct: 0, explanation: "إِذَا الفُجَائِيَّة: فَ ile gelir, isim cümlesi kurar → 'aniden, birdenbire.' Tek haykırış → hemen yeryüzünde!", relatedRoots: [] },
      { id: "L59-Q04", type: "fill_blank", question: "فَإِنَّمَا هِىَ _____ وَاحِدَةٌ", options: ["زَجْرَةٌ", "صَيْحَةٌ", "نَفْخَةٌ", "رَجْفَةٌ"], correct: 0, hint: "Diriliş için yeterli olan tek şey", explanation: "زَجْرَة (haykırış): Allah'ın tek bir emri yeterli. إِنَّمَا ile hasr: sadece tek bir haykırış, o kadar.", relatedRoots: ["ز-ج-ر"] },
      { id: "L59-Q05", type: "balagha_identify", question: "79:10-12'deki inkârcı soruları hangi teknikle aktarılmıştır?", options: ["Hikâye (حكاية): inkârcıların sözlerini aynen aktarma + istifhâm-ı inkârî", "İsti'âre: mecazi anlatım", "Kinâye: dolaylı anlatım", "İcmâl: kısa özetleme"], correct: 0, explanation: "İnkârcıların sözleri doğrudan aktarılıyor (hikâye/muhâkât). أَئِنَّا لَمَرْدُودُونَ: istifhâm-ı inkârî (inkâr sorusu). Kur'an onların argümanını gösterip hemen çürütüyor (13-14).", relatedRoots: [] },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DERS 60 — NÂZİ'ÂT 79:15-26 — Mûsâ-Fir'avn Kıssası
  // ═══════════════════════════════════════════════════════════
  {
    id: "L60-naziat-3",
    title: "Nâzi'ât (15-26) — Mûsâ ve Fir'avn",
    titleAr: "سُورَةُ النَّازِعَاتِ ١٥-٢٦",
    stage: 2,
    level: 7,
    surah: 79,
    description: "Hz. Mûsâ'nın Fir'avn'e gönderilişi, tezekki/tezkiye daveti, asâ mucizesi, Fir'avn'ın inkârı ve Allah'ın cezası. Nidâ yapısı, أَنَا رَبُّكُمُ الأَعْلَى küfrü, ism-i tafdîl.",
    verses: [
      {
        surah: 79, ayah: 15,
        arabic: "هَلْ أَتَىٰكَ حَدِيثُ مُوسَىٰ",
        translation: "Mûsâ'nın haberi sana geldi mi?",
        words: [
          { arabic: "هَلْ", transliteration: "hel", root: null, pos: "harf", meaning_tr: "mı, mi?", irab: "{İstifhâm edatı}.", irab_short: "istifhâm", turkish_bridge: null, balagha_note: "Yeni bölüm: kıyametten Mûsâ kıssasına geçiş. هَلْ أَتَاكَ: dinleyiciyi meraklandırma ve dikkat çekme tekniği." },
          { arabic: "أَتَىٰكَ", transliteration: "atāka", root: "أ-ت-ي", pos: "fil", meaning_tr: "sana geldi", irab: "{Mâzî}. كَ mef'ûl bih (sana = Hz. Peygamber'e).", irab_short: "mâzî", turkish_bridge: null, balagha_note: null },
          { arabic: "حَدِيثُ", transliteration: "ḥadīṯu", root: "ح-د-ث", pattern: "فَعِيل", pos: "ism", meaning_tr: "haberi, hikâyesi", irab: "{Fâil}, {merfû}.", irab_short: "fâil, merfû", turkish_bridge: "Hadîs, hâdise (olay), muhaddis bu kökten", balagha_note: null },
          { arabic: "مُوسَىٰ", transliteration: "Mūsā", root: null, pos: "ism", meaning_tr: "Mûsâ", irab: "{Muzâfun ileyh}, mecrûr (takdîren). Gayr-i munsarif (alem + a'cemî).", irab_short: "muzâfun ileyh", turkish_bridge: null, balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 16,
        arabic: "إِذْ نَادَىٰهُ رَبُّهُۥ بِٱلْوَادِ ٱلْمُقَدَّسِ طُوًى",
        translation: "Hani Rabbi ona kutsal vadide (Tuvâ'da) seslenmişti",
        words: [
          { arabic: "إِذْ", transliteration: "iḏ", root: null, pos: "harf", meaning_tr: "hani, o zaman", irab: "{Zarf-ı zaman}.", irab_short: "zarf" },
          { arabic: "نَادَىٰهُ", transliteration: "nādāhu", root: "ن-د-و", pos: "fil", meaning_tr: "ona seslendi", irab: "III. bâb: نَادَى. هُ mef'ûl bih.", irab_short: "mâzî, III. bâb", turkish_bridge: "Nidâ (seslenme), münâdî bu kökten", balagha_note: null },
          { arabic: "رَبُّهُۥ", transliteration: "rabbuhū", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbi", irab: "{Fâil}, {merfû}.", irab_short: "fâil, merfû" },
          { arabic: "بِٱلْوَادِ", transliteration: "bil-wādi", root: "و-د-ي", pos: "ism", meaning_tr: "vadide", irab: "{Câr-mecrûr}. يَ düşmüş (hafif kıraat).", irab_short: "câr-mecrûr", turkish_bridge: "Vâdî (vadi) bu kökten", balagha_note: null },
          { arabic: "ٱلْمُقَدَّسِ", transliteration: "al-muqaddasi", root: "ق-د-س", pattern: "مُفَعَّل", pos: "ism", meaning_tr: "kutsal", irab: "{Sıfat}, {mecrûr}. II. bâb ism-i mef'ûl: kutsanmış.", irab_short: "sıfat, mecrûr", turkish_bridge: "Kuds, takdîs, Kudüs bu kökten", balagha_note: null },
          { arabic: "طُوًى", transliteration: "Ṭuwan", root: null, pos: "ism", meaning_tr: "Tuvâ (vadinin adı)", irab: "{Bedel} veya atıf beyânî.", irab_short: "bedel", turkish_bridge: null, balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 17,
        arabic: "ٱذْهَبْ إِلَىٰ فِرْعَوْنَ إِنَّهُۥ طَغَىٰ",
        translation: "Fir'avn'a git; çünkü o azmıştır",
        words: [
          { arabic: "ٱذْهَبْ", transliteration: "iḏhab", root: "ذ-ه-ب", pos: "fil", meaning_tr: "git", irab: "{Fiil-i emr}, meczûm.", irab_short: "emr", turkish_bridge: "Zehâb (gitme), mezheb bu kökten", balagha_note: null },
          { arabic: "إِلَىٰ فِرْعَوْنَ", transliteration: "ilā Firʿavna", root: null, pos: "ism", meaning_tr: "Fir'avn'a", irab: "إِلَى {harf-i cer} + فِرْعَوْنَ {mecrûr, gayr-i munsarif}.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: null },
          { arabic: "إِنَّهُۥ", transliteration: "innahū", root: null, pos: "harf", meaning_tr: "çünkü o", irab_short: "inne + zamîr (ta'lîl)" },
          { arabic: "طَغَىٰ", transliteration: "ṭağā", root: "ط-غ-ي", pos: "fil", meaning_tr: "azdı, haddi aştı", irab: "{Mâzî}. Haber-i inne (cümle).", irab_short: "mâzî, haber-i inne", turkish_bridge: "Tuğyân (azgınlık), tâğî bu kökten. L57'deki الطَّاغِين ile aynı kök.", balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 18,
        arabic: "فَقُلْ هَل لَّكَ إِلَىٰ أَن تَزَكَّىٰ",
        translation: "De ki: Arınmaya niyetin var mı?",
        words: [
          { arabic: "فَقُلْ", transliteration: "fa-qul", root: "ق-و-ل", pos: "fil", meaning_tr: "de ki", irab_short: "emr" },
          { arabic: "هَل", transliteration: "hel", root: null, pos: "harf", meaning_tr: "var mı?", irab_short: "istifhâm" },
          { arabic: "لَّكَ", transliteration: "laka", root: null, pos: "harf", meaning_tr: "senin (niyetin)", irab_short: "câr-mecrûr" },
          { arabic: "إِلَىٰ أَن تَزَكَّىٰ", transliteration: "ilā an tazakkā", root: "ز-ك-و", pos: "fil", meaning_tr: "arınmaya", irab: "أَنْ {masdariye} + تَزَكَّى {V. bâb muzâri, mensûb}. زَكَا → تَزَكَّى (kendini arıttı).", irab_short: "muzâri mensûb, V. bâb", turkish_bridge: "Tezkiye (arınma), zekât bu kökten", balagha_note: "Yumuşak davet: 'Arınmak ister misin?' → diplomatik yaklaşım. Emr değil, teklif." },
        ],
      },
      {
        surah: 79, ayah: 19,
        arabic: "وَأَهْدِيَكَ إِلَىٰ رَبِّكَ فَتَخْشَىٰ",
        translation: "Seni Rabbine yönlendireyim de (O'ndan) korkasın",
        words: [
          { arabic: "وَأَهْدِيَكَ", transliteration: "wa ahdiyaka", root: "ه-د-ي", pos: "fil", meaning_tr: "seni yönlendireyim", irab: "IV. bâb: أَهْدَى (hidâyet etti). Muzâri, mensûb (أَنْ takdîri). كَ mef'ûl.", irab_short: "muzâri mensûb, IV. bâb", turkish_bridge: "Hidâyet, hâdî, hediye bu kökten", balagha_note: null },
          { arabic: "إِلَىٰ رَبِّكَ", transliteration: "ilā rabbika", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbine", irab_short: "câr-mecrûr" },
          { arabic: "فَتَخْشَىٰ", transliteration: "fa-taḫšā", root: "خ-ش-ي", pos: "fil", meaning_tr: "korkasın", irab: "فَ {sebebiye} + تَخْشَى {muzâri mensûb}.", irab_short: "muzâri mensûb", turkish_bridge: "Haşyet (derin korku/saygı), haşyetullah bu kökten", balagha_note: "Hidâyetin meyvesi: haşyet (derin Allah korkusu). خَشِيَ, خَوْف'tan daha derin → bilgiye dayalı korku." },
        ],
      },
      {
        surah: 79, ayah: 20,
        arabic: "فَأَرَىٰهُ ٱلْءَايَةَ ٱلْكُبْرَىٰ",
        translation: "Bunun üzerine ona en büyük mucizeyi gösterdi",
        words: [
          { arabic: "فَأَرَىٰهُ", transliteration: "fa-arāhu", root: "ر-أ-ي", pos: "fil", meaning_tr: "ona gösterdi", irab: "IV. bâb: أَرَى (gösterdi). هُ mef'ûl bih birinci.", irab_short: "mâzî, IV. bâb", turkish_bridge: "İrâe (gösterme), rü'yet (görme) bu kökten", balagha_note: null },
          { arabic: "ٱلْءَايَةَ", transliteration: "al-āyata", root: "أ-ي-ي", pos: "ism", meaning_tr: "mucizeyi, âyeti", irab: "{Mef'ûl bih} ikinci, {mensûb}.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلْكُبْرَىٰ", transliteration: "al-kubrā", root: "ك-ب-ر", pattern: "فُعْلَى", pos: "ism", meaning_tr: "en büyük", irab: "{Sıfat}, {mensûb} (takdîren). فُعْلَى: müennes ism-i tafdîl (أَكْبَر → كُبْرَى).", irab_short: "sıfat, ism-i tafdîl", turkish_bridge: "Kübrâ (en büyük), ekber, kibriyâ bu kökten", balagha_note: "الآيَةَ الكُبْرَى: asâ mucizesi ve yed-i beyzâ. ism-i tafdîl müennes → en büyük mucize." },
        ],
      },
      {
        surah: 79, ayah: 21,
        arabic: "فَكَذَّبَ وَعَصَىٰ",
        translation: "Ama (Fir'avn) yalanladı ve isyan etti",
        words: [
          { arabic: "فَكَذَّبَ", transliteration: "fa-kaḏḏaba", root: "ك-ذ-ب", pos: "fil", meaning_tr: "yalanladı", irab: "II. bâb.", irab_short: "mâzî, II. bâb", turkish_bridge: null, balagha_note: null },
          { arabic: "وَعَصَىٰ", transliteration: "wa ʿaṣā", root: "ع-ص-ي", pos: "fil", meaning_tr: "isyan etti", irab: "I. bâb. {Atıf}.", irab_short: "mâzî", turkish_bridge: "İsyân, âsî, ma'siyet bu kökten", balagha_note: "İki kısa fiil: كَذَّبَ + عَصَى. Öz ve kesin → Fir'avn'ın tepkisi tek cümlede özetleniyor → îcâz (kısalık)." },
        ],
      },
      {
        surah: 79, ayah: 22,
        arabic: "ثُمَّ أَدْبَرَ يَسْعَىٰ",
        translation: "Sonra (muhalefete) koşarak arkasını döndü",
        words: [
          { arabic: "ثُمَّ", transliteration: "ṯumma", root: null, pos: "harf", meaning_tr: "sonra", irab_short: "harf-i atıf (terâhî)" },
          { arabic: "أَدْبَرَ", transliteration: "adbara", root: "د-ب-ر", pos: "fil", meaning_tr: "arkasını döndü", irab: "IV. bâb: أَدْبَرَ (sırtını döndü).", irab_short: "mâzî, IV. bâb", turkish_bridge: "Tedbîr, müdebbir bu kökten. L25'teki المُدَبِّرَات ile aynı kök!", balagha_note: null },
          { arabic: "يَسْعَىٰ", transliteration: "yasʿā", root: "س-ع-ي", pos: "fil", meaning_tr: "koşarak, çabalayarak", irab: "{Hâl cümlesi}: arkasını döndüğü sırada koşuyordu.", irab_short: "muzâri, hâl", turkish_bridge: "Sa'y (çabalama), mes'â bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 23,
        arabic: "فَحَشَرَ فَنَادَىٰ",
        translation: "Topladı ve ilan etti",
        words: [
          { arabic: "فَحَشَرَ", transliteration: "fa-ḥašara", root: "ح-ش-ر", pos: "fil", meaning_tr: "topladı", irab_short: "mâzî", turkish_bridge: "Haşr (toplama), mahşer bu kökten", balagha_note: null },
          { arabic: "فَنَادَىٰ", transliteration: "fa-nādā", root: "ن-د-و", pos: "fil", meaning_tr: "seslendi, ilan etti", irab: "III. bâb.", irab_short: "mâzî, III. bâb", turkish_bridge: null, balagha_note: "Hızlı fiil dizisi: كَذَّبَ → عَصَى → أَدْبَرَ → حَشَرَ → نَادَى → her biri tek kelime. Olaylar hızla ilerliyor." },
        ],
      },
      {
        surah: 79, ayah: 24,
        arabic: "فَقَالَ أَنَا۠ رَبُّكُمُ ٱلْأَعْلَىٰ",
        translation: "Dedi ki: Ben sizin en yüce rabbinizim!",
        words: [
          { arabic: "فَقَالَ", transliteration: "fa-qāla", root: "ق-و-ل", pos: "fil", meaning_tr: "dedi", irab_short: "mâzî" },
          { arabic: "أَنَا۠", transliteration: "ana", root: null, pos: "ism", meaning_tr: "ben", irab: "{Mübtedâ}, zamîr.", irab_short: "mübtedâ", turkish_bridge: null, balagha_note: null },
          { arabic: "رَبُّكُمُ", transliteration: "rabbukumu", root: "ر-ب-ب", pos: "ism", meaning_tr: "rabbiniz", irab: "{Haber}, {merfû}.", irab_short: "haber, merfû", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلْأَعْلَىٰ", transliteration: "al-aʿlā", root: "ع-ل-و", pattern: "أَفْعَل", pos: "ism", meaning_tr: "en yüce", irab: "{Sıfat}, {merfû}. İsm-i tafdîl.", irab_short: "ism-i tafdîl, sıfat", turkish_bridge: "A'lâ (en yüce), ulûv, âlî, te'âlâ bu kökten", balagha_note: "Fir'avn'ın küfrünün zirvesi: kendini ilâh ilan etmesi. أَنَا رَبُّكُمُ الأَعْلَى → Sure-i A'lâ (87:1) سَبِّحِ اسْمَ رَبِّكَ الأَعْلَى ile tezâd." },
        ],
      },
      {
        surah: 79, ayah: 25,
        arabic: "فَأَخَذَهُ ٱللَّهُ نَكَالَ ٱلْءَاخِرَةِ وَٱلْأُولَىٰ",
        translation: "Allah da onu âhiret ve dünya azabıyla yakaladı",
        words: [
          { arabic: "فَأَخَذَهُ", transliteration: "fa-aḫaḏahū", root: "أ-خ-ذ", pos: "fil", meaning_tr: "onu yakaladı", irab: "I. bâb: أَخَذَ. هُ mef'ûl bih.", irab_short: "mâzî", turkish_bridge: "Ahz (alma, yakalama), me'hûz bu kökten", balagha_note: null },
          { arabic: "ٱللَّهُ", transliteration: "Allāhu", root: "أ-ل-ه", pos: "ism", meaning_tr: "Allah", irab: "{Fâil}, {merfû}.", irab_short: "fâil, merfû" },
          { arabic: "نَكَالَ", transliteration: "nakāla", root: "ن-ك-ل", pattern: "فَعَال", pos: "ism", meaning_tr: "ibret verici ceza", irab: "{Mef'ûl mutlak} (nev'î), {mensûb}.", irab_short: "mef'ûl mutlak, mensûb", turkish_bridge: "Nekâl (ibret cezası), tenkîl bu kökten", balagha_note: null },
          { arabic: "ٱلْءَاخِرَةِ وَٱلْأُولَىٰ", transliteration: "al-āḫirati wal-ūlā", root: "أ-خ-ر / أ-و-ل", pos: "ism", meaning_tr: "âhiret ve dünyanın", irab: "{Muzâfun ileyh}, {mecrûr}. Hangi sıra? Âhiret önce söylenmiş (takdîm).", irab_short: "muzâfun ileyh, mecrûr", turkish_bridge: null, balagha_note: "الآخِرَة وَالأُولَى: âhiret dünyadan önce söylendi → takdîm: âhiret cezası daha ağır olduğu için önce." },
        ],
      },
      {
        surah: 79, ayah: 26,
        arabic: "إِنَّ فِى ذَ ٰلِكَ لَعِبْرَةً لِّمَن يَخْشَىٰ",
        translation: "Şüphesiz bunda (Allah'tan) korkan için ibret vardır",
        words: [
          { arabic: "إِنَّ", transliteration: "inna", root: null, pos: "harf", meaning_tr: "şüphesiz", irab_short: "harf-i te'kîd" },
          { arabic: "فِى ذَ ٰلِكَ", transliteration: "fī ḏālika", root: null, pos: "harf", meaning_tr: "bunda", irab: "{Câr-mecrûr}, haber-i inne (mukaddem).", irab_short: "câr-mecrûr, haber mukaddem" },
          { arabic: "لَعِبْرَةً", transliteration: "la-ʿibratan", root: "ع-ب-ر", pos: "ism", meaning_tr: "elbette ibret", irab: "لَ {lâm-ı te'kîd} + عِبْرَة {ism-i inne}, {mensûb (zamme olması beklenir ama takdîren)}.", irab_short: "ism-i inne", turkish_bridge: "İbret, i'tibâr, tecrübe bu kökten. عَبَرَ = geçti → ibret = olaylardan ders çıkarmak (geçmişi bugüne taşımak).", balagha_note: null },
          { arabic: "لِّمَن يَخْشَىٰ", transliteration: "li-man yaḫšā", root: "خ-ش-ي", pos: "fil", meaning_tr: "korkan kimse için", irab: "لِ {harf-i cer} + مَنْ {ism-i mevsûl} + يَخْشَى {muzâri, sıla}.", irab_short: "câr-mecrûr + sıla", turkish_bridge: null, balagha_note: "Kıssa kapanışı: ibret ancak haşyet sahibi için. 18. ayetteki فَتَخْشَى ile halka oluşuyor: haşyet → ibret → haşyet." },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "Kıssa İçinde İcâz — Tek Kelimelik Fiiller",
        explanation: "79:21-23'te Fir'avn'ın tepkisi 5 tek kelimelik fiille anlatılır: كَذَّبَ (yalanladı), عَصَى (isyan etti), أَدْبَرَ (arkasını döndü), حَشَرَ (topladı), نَادَى (ilan etti). Her fiil tek kelime → icâz (kısalık, öz anlatım). Olaylar hızla ilerler.",
        rule: "İcâz: az sözle çok anlam.\nفَكَذَّبَ وَعَصَى → iki fiil, bir cümle: tüm inkârı özetler.\nثُمَّ أَدْبَرَ يَسْعَى → arkasını dönüp koşması bir cümlede.",
        examples: ["فَكَذَّبَ وَعَصَى — yalanladı ve isyan etti", "ثُمَّ أَدْبَرَ يَسْعَى — sonra koşarak arkasını döndü", "فَحَشَرَ فَنَادَى — topladı ve ilan etti"],
      },
      {
        title: "İsm-i Tafdîl Müennes: كُبْرَى / أُولَى / أَعْلَى",
        explanation: "İsm-i tafdîl (أَفْعَل) kalıbının müennesi فُعْلَى'dır. Bu pasajda: الكُبْرَى (en büyük, müennes), الأُولَى (ilk/dünya), الأَعْلَى (en yüce). Müzekker: أَكْبَر, أَوَّل, أَعْلَى.",
        rule: "Müzekker: أَفْعَل → Müennes: فُعْلَى\nأَكْبَر → كُبْرَى (en büyük)\nأَعْلَى → عُلْيَا (en yüce)\nأَوَّل → أُولَى (ilk)",
        examples: ["الآيَةَ الكُبْرَى — en büyük mucize (müennes)", "الآخِرَةِ وَالأُولَى — son ve ilk", "رَبُّكُمُ الأَعْلَى — en yüce rabbiniz"],
      },
    ],
    exercises: [
      { id: "L60-Q01", type: "single_choice", question: "أَنَا۠ رَبُّكُمُ الأَعْلَى sözünü kim söylemiştir?", options: ["Fir'avn — kendini en yüce ilâh ilan etti", "Hz. Mûsâ — Allah'ı tanıttı", "Cebrâîl — vahiy getirdi", "Hz. Hârûn — Fir'avn'ı uyardı"], correct: 0, explanation: "Fir'avn'ın küfr-i mutlakı: kendini ilâh ilan etmesi. Kur'an bunu doğrudan aktarıyor (hikâye/muhâkât).", relatedRoots: ["ع-ل-و"] },
      { id: "L60-Q02", type: "root_extract", question: "تَزَكَّى kelimesinin kökü nedir?", targetWord: "تَزَكَّىٰ", options: ["ز-ك-و", "ز-ك-ي", "ذ-ك-ر", "ز-ك-ك"], correct: 0, explanation: "تَزَكَّى: ز-ك-و kökünden V. bâb. زَكَا (arındı, büyüdü) → تَزَكَّى (kendini arıttı). Zekât da aynı kökten.", relatedRoots: ["ز-ك-و"] },
      { id: "L60-Q03", type: "bab_identify", question: "أَدْبَرَ fiili kaçıncı bâbtandır?", targetWord: "أَدْبَرَ", options: ["IV. bâb (if'âl): دَبَرَ → أَدْبَرَ (arkasını döndü)", "I. bâb: دَبَرَ", "II. bâb: دَبَّرَ (tedbîr etti)", "V. bâb: تَدَبَّرَ"], correct: 0, explanation: "أَدْبَرَ: IV. bâb. دَبَرَ (arkasında oldu) → أَدْبَرَ (arkasını döndü). L25'teki المُدَبِّرَات (II. bâb ism-i fâil) ile aynı kök, farklı bâb.", relatedRoots: ["د-ب-ر"] },
      { id: "L60-Q04", type: "fill_blank", question: "فَقَالَ أَنَا۠ _____ الأَعْلَى", options: ["رَبُّكُمُ", "مَلِكُكُمُ", "إِلَـٰهُكُمُ", "سَيِّدُكُمُ"], correct: 0, hint: "Fir'avn'ın küfr sözündeki iddia", explanation: "رَبُّكُمُ: Fir'avn kendini Rab (terbiye eden, sahip) ilan ediyor. En büyük küfr.", relatedRoots: ["ر-ب-ب"] },
      { id: "L60-Q05", type: "single_choice", question: "الآخِرَة وَالأُولَى ifadesinde neden âhiret dünyadan önce söylenmiştir?", options: ["Takdîm: âhiret cezası daha ağır olduğu için öncelik verilmiş", "Alfabetik sıra", "Kronolojik sıra (âhiret sonra gelir ama önce söylenir)", "Rastgele"], correct: 0, explanation: "Takdîm: önce söylenen vurgulanır. Fir'avn'ın âhiret azabı dünya azabından çok daha şiddetli → âhiret önce söyleniyor.", relatedRoots: ["أ-خ-ر"] },
      { id: "L60-Q06", type: "balagha_identify", question: "79:21-23 ayetlerindeki anlatım tekniği nedir?", options: ["İcâz (kısalık): her eylem tek kelimeyle özetlenmiş → hız etkisi", "İtnâb (uzatma): olaylar detaylı anlatılmış", "Tezâd: zıtlıklar", "İltifât: bakış açısı değişimi"], correct: 0, explanation: "Beş kısa fiil: كَذَّبَ, عَصَى, أَدْبَرَ, حَشَرَ, نَادَى → icâz. Her fiil tek kelime, olaylar hızla akıyor → Fir'avn'ın inkârının hızlı tırmanışı.", relatedRoots: [] },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DERS 61 — NÂZİ'ÂT 79:27-39 — Yaratılış Delilleri
  // ═══════════════════════════════════════════════════════════
  {
    id: "L61-naziat-4",
    title: "Nâzi'ât (27-39) — Yaratılış Delilleri",
    titleAr: "سُورَةُ النَّازِعَاتِ ٢٧-٣٩",
    stage: 2,
    level: 7,
    surah: 79,
    description: "Yaratılışın diriliş delili olarak sunulması: gök, yer, dağlar, otlak. İstifhâm-ı inkârî (أَأَنتُمْ أَشَدُّ خَلْقًا), ism-i tafdîl kullanımı, kozmik fiiller.",
    verses: [
      {
        surah: 79, ayah: 27,
        arabic: "أَءَنتُمْ أَشَدُّ خَلْقًا أَمِ ٱلسَّمَاءُ ۚ بَنَىٰهَا",
        translation: "Yaratılışça siz mi daha güçsünüz yoksa gök mü? Onu (Allah) bina etti",
        words: [
          { arabic: "أَءَنتُمْ", transliteration: "a-antum", root: null, pos: "ism", meaning_tr: "siz mi?", irab: "أَ {istifhâm} + أَنْتُمْ {mübtedâ}.", irab_short: "istifhâm + mübtedâ", turkish_bridge: null, balagha_note: "İstifhâm-ı inkârî: 'Sizi yaratmak mı daha zor yoksa göğü mü?' Cevap belli → sizi diriltmek kolay!" },
          { arabic: "أَشَدُّ", transliteration: "ašaddu", root: "ش-د-د", pattern: "أَفْعَل", pos: "ism", meaning_tr: "daha güç, daha zor", irab: "{Haber}, {merfû}. İsm-i tafdîl.", irab_short: "haber, ism-i tafdîl", turkish_bridge: "Eşedd (en şiddetli), şiddet bu kökten", balagha_note: null },
          { arabic: "خَلْقًا", transliteration: "ḫalqan", root: "خ-ل-ق", pos: "ism", meaning_tr: "yaratılışça", irab: "{Temyîz}, {mensûb}.", irab_short: "temyîz, mensûb", turkish_bridge: "Halk (yaratma), mahlûk bu kökten", balagha_note: null },
          { arabic: "أَمِ", transliteration: "ami", root: null, pos: "harf", meaning_tr: "yoksa", irab: "{Harf-i 'atıf}, mu'âdile.", irab_short: "atıf (yoksa)" },
          { arabic: "ٱلسَّمَاءُ", transliteration: "as-samāʾu", root: "س-م-و", pos: "ism", meaning_tr: "gök", irab: "{Mübtedâ} veya atıf.", irab_short: "mübtedâ" },
          { arabic: "بَنَىٰهَا", transliteration: "banāhā", root: "ب-ن-ي", pos: "fil", meaning_tr: "onu bina etti", irab: "{Mâzî}. هَا mef'ûl bih. İsti'nâf (yeni cümle) veya hâl.", irab_short: "mâzî", turkish_bridge: "Binâ (yapı) bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 28,
        arabic: "رَفَعَ سَمْكَهَا فَسَوَّىٰهَا",
        translation: "Tavanını yükseltti ve onu düzgün yaptı",
        words: [
          { arabic: "رَفَعَ", transliteration: "rafaʿa", root: "ر-ف-ع", pos: "fil", meaning_tr: "yükseltti", irab_short: "mâzî", turkish_bridge: "Ref' (kaldırma, yükseltme), merfû bu kökten — nahiv terimi!", balagha_note: null },
          { arabic: "سَمْكَهَا", transliteration: "samkahā", root: "س-م-ك", pos: "ism", meaning_tr: "tavanını, yüksekliğini", irab: "{Mef'ûl bih}, {mensûb}.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Semk (tavan yüksekliği), simâk bu kökten", balagha_note: "Gök → binâ metaforu devam ediyor: tavan yükseltildi → düzlendi." },
          { arabic: "فَسَوَّىٰهَا", transliteration: "fa-sawwāhā", root: "س-و-ي", pos: "fil", meaning_tr: "onu düzgün yaptı", irab: "II. bâb: سَوَّى (düzledi, dengeledi).", irab_short: "mâzî, II. bâb", turkish_bridge: "Tesviye (düzleme), müsâvî (eşit) bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 29,
        arabic: "وَأَغْطَشَ لَيْلَهَا وَأَخْرَجَ ضُحَىٰهَا",
        translation: "Gecesini karanlık kıldı, aydınlığını çıkardı",
        words: [
          { arabic: "وَأَغْطَشَ", transliteration: "wa ağṭaša", root: "غ-ط-ش", pos: "fil", meaning_tr: "karanlık kıldı", irab: "IV. bâb: أَغْطَشَ (karanlığa büründürdü).", irab_short: "mâzî, IV. bâb", turkish_bridge: null, balagha_note: null },
          { arabic: "لَيْلَهَا", transliteration: "laylahā", root: "ل-ي-ل", pos: "ism", meaning_tr: "gecesini", irab: "{Mef'ûl bih}, {mensûb}. هَا: göğün gecesi.", irab_short: "mef'ûl bih, mensûb" },
          { arabic: "وَأَخْرَجَ", transliteration: "wa aḫraja", root: "خ-ر-ج", pos: "fil", meaning_tr: "çıkardı", irab: "IV. bâb: أَخْرَجَ.", irab_short: "mâzî, IV. bâb" },
          { arabic: "ضُحَىٰهَا", transliteration: "ḍuḥāhā", root: "ض-ح-ي", pos: "ism", meaning_tr: "aydınlığını, kuşluğunu", irab: "{Mef'ûl bih}, {mensûb}.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Duhâ (kuşluk), adhâ bu kökten", balagha_note: "Mukâbele: gece (karanlık kıldı) ↔ kuşluk (aydınlığı çıkardı). أَغْطَشَ ↔ أَخْرَجَ zıt IV. bâb fiiller." },
        ],
      },
      {
        surah: 79, ayah: 30,
        arabic: "وَٱلْأَرْضَ بَعْدَ ذَ ٰلِكَ دَحَىٰهَا",
        translation: "Yeryüzünü bundan sonra döşedi (yumurta gibi yaydı)",
        words: [
          { arabic: "وَٱلْأَرْضَ", transliteration: "wal-arḍa", root: "أ-ر-ض", pos: "ism", meaning_tr: "yeryüzünü", irab: "{Mef'ûl bih mukaddem}, {mensûb}.", irab_short: "mef'ûl bih, mensûb" },
          { arabic: "بَعْدَ ذَ ٰلِكَ", transliteration: "baʿda ḏālika", root: "ب-ع-د", pos: "ism", meaning_tr: "bundan sonra", irab: "{Zarf-ı zaman}, {mensûb}.", irab_short: "zarf" },
          { arabic: "دَحَىٰهَا", transliteration: "daḥāhā", root: "د-ح-و", pos: "fil", meaning_tr: "yaydı, döşedi", irab: "I. bâb: دَحَا (yaydı). دَحْو: yumurta biçiminde yayma.", irab_short: "mâzî", turkish_bridge: null, balagha_note: "دَحَا: yumurta biçiminde yayma anlamı. أُدْحِيَّة: devekuşu yumurtası yatağı. Modern bilimle uyum: Dünya'nın elips (yumurta) şekli." },
        ],
      },
      {
        surah: 79, ayah: 31,
        arabic: "أَخْرَجَ مِنْهَا مَاءَهَا وَمَرْعَىٰهَا",
        translation: "Ondan suyunu ve otlağını çıkardı",
        words: [
          { arabic: "أَخْرَجَ", transliteration: "aḫraja", root: "خ-ر-ج", pos: "fil", meaning_tr: "çıkardı", irab: "IV. bâb.", irab_short: "mâzî, IV. bâb" },
          { arabic: "مِنْهَا", transliteration: "minhā", root: null, pos: "harf", meaning_tr: "ondan", irab_short: "câr-mecrûr" },
          { arabic: "مَاءَهَا", transliteration: "māʾahā", root: "م-و-ه", pos: "ism", meaning_tr: "suyunu", irab: "{Mef'ûl bih}, {mensûb}.", irab_short: "mef'ûl bih, mensûb" },
          { arabic: "وَمَرْعَىٰهَا", transliteration: "wa marʿāhā", root: "ر-ع-ي", pattern: "مَفْعَل", pos: "ism", meaning_tr: "otlağını", irab: "{Atıf}, {mensûb}. مَفْعَل: ism-i mekân.", irab_short: "atıf, mensûb", turkish_bridge: "Mer'â (otlak), râ'î (çoban), ri'âyet bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 32,
        arabic: "وَٱلْجِبَالَ أَرْسَىٰهَا",
        translation: "Dağları sağlamca yerleştirdi",
        words: [
          { arabic: "وَٱلْجِبَالَ", transliteration: "wal-jibāla", root: "ج-ب-ل", pos: "ism", meaning_tr: "dağları", irab: "{Mef'ûl bih mukaddem}, {mensûb}.", irab_short: "mef'ûl bih, mensûb" },
          { arabic: "أَرْسَىٰهَا", transliteration: "arsāhā", root: "ر-س-و", pos: "fil", meaning_tr: "sağlamca yerleştirdi", irab: "IV. bâb: أَرْسَى (demirledi, sabitledi).", irab_short: "mâzî, IV. bâb", turkish_bridge: "Mersâ (demir atma yeri), rüsûh bu kökten", balagha_note: "Nebe' 78:7'de وَالجِبَالَ أَوْتَادًا (dağları kazıklar kıldık) ile aynı tema." },
        ],
      },
      {
        surah: 79, ayah: 33,
        arabic: "مَتَـٰعًا لَّكُمْ وَلِأَنْعَـٰمِكُمْ",
        translation: "Sizin ve hayvanlarınız için faydalanma (vesilesi) olarak",
        words: [
          { arabic: "مَتَـٰعًا", transliteration: "matāʿan", root: "م-ت-ع", pos: "ism", meaning_tr: "faydalanma, geçimlik", irab: "{Mef'ûl li-eclih} (sebep bildiren), {mensûb}.", irab_short: "mef'ûl li-eclih, mensûb", turkish_bridge: "Metâ' (eşya), temettü' (yararlanma) bu kökten", balagha_note: null },
          { arabic: "لَّكُمْ", transliteration: "lakum", root: null, pos: "harf", meaning_tr: "sizin için", irab_short: "câr-mecrûr" },
          { arabic: "وَلِأَنْعَـٰمِكُمْ", transliteration: "wa li-anʿāmikum", root: "ن-ع-م", pos: "ism", meaning_tr: "hayvanlarınız için", irab: "أَنْعَام: نِعْمَة kökünden, cem-i teksîr → sığır, koyun, deve, keçi.", irab_short: "câr-mecrûr", turkish_bridge: "Ni'met, en'âm (hayvanlar), na'îm bu kökten", balagha_note: "Yaratılış serisinin amacı: insanlar VE hayvanlar için geçimlik → her şey planlı." },
        ],
      },
      {
        surah: 79, ayah: 34,
        arabic: "فَإِذَا جَاءَتِ ٱلطَّامَّةُ ٱلْكُبْرَىٰ",
        translation: "O en büyük baskın (kıyamet) geldiğinde",
        words: [
          { arabic: "فَإِذَا", transliteration: "fa-iḏā", root: null, pos: "harf", meaning_tr: "geldiğinde", irab: "إِذَا {zarf-ı şart}.", irab_short: "şart" },
          { arabic: "جَاءَتِ", transliteration: "jāʾati", root: "ج-ي-أ", pos: "fil", meaning_tr: "geldi", irab_short: "mâzî" },
          { arabic: "ٱلطَّامَّةُ", transliteration: "aṭ-ṭāmmatu", root: "ط-م-م", pattern: "فَاعِلَة", pos: "ism", meaning_tr: "her şeyi basan felâket", irab: "{Fâil}, {merfû}. طَمَّ = bastı, kapladı.", irab_short: "fâil, merfû", turkish_bridge: "Tamm (kapladı, bastı)", balagha_note: "الطَّامَّة الكُبْرَى: kıyametin adlarından biri. 'Her şeyi basan en büyük felaket.'" },
          { arabic: "ٱلْكُبْرَىٰ", transliteration: "al-kubrā", root: "ك-ب-ر", pattern: "فُعْلَى", pos: "ism", meaning_tr: "en büyük", irab: "{Sıfat}, {merfû}. Müennes ism-i tafdîl.", irab_short: "sıfat, ism-i tafdîl" },
        ],
      },
      {
        surah: 79, ayah: 35,
        arabic: "يَوْمَ يَتَذَكَّرُ ٱلْإِنسَـٰنُ مَا سَعَىٰ",
        translation: "O gün insan ne için çabaladığını hatırlar",
        words: [
          { arabic: "يَوْمَ", transliteration: "yevme", root: "ي-و-م", pos: "ism", meaning_tr: "o gün", irab_short: "zarf" },
          { arabic: "يَتَذَكَّرُ", transliteration: "yataḏakkaru", root: "ذ-ك-ر", pos: "fil", meaning_tr: "hatırlar", irab: "V. bâb: تَذَكَّرَ.", irab_short: "muzâri, V. bâb", turkish_bridge: "Tezekkür (hatırlama), zikr, tezakkur bu kökten", balagha_note: null },
          { arabic: "ٱلْإِنسَـٰنُ", transliteration: "al-insānu", root: "أ-ن-س", pos: "ism", meaning_tr: "insan", irab: "{Fâil}, {merfû}.", irab_short: "fâil" },
          { arabic: "مَا سَعَىٰ", transliteration: "mā saʿā", root: "س-ع-ي", pos: "fil", meaning_tr: "çabaladığı şeyi", irab: "مَا {ism-i mevsûl, mef'ûl bih}. سَعَى {mâzî, sıla}.", irab_short: "ism-i mevsûl", turkish_bridge: "Sa'y (çaba), mes'â bu kökten", balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 36,
        arabic: "وَبُرِّزَتِ ٱلْجَحِيمُ لِمَن يَرَىٰ",
        translation: "Cehennem görebilene apaçık gösterilir",
        words: [
          { arabic: "وَبُرِّزَتِ", transliteration: "wa burrizati", root: "ب-ر-ز", pos: "fil", meaning_tr: "apaçık gösterildi", irab: "II. bâb mechûl: بَرَّزَ → بُرِّزَ (ortaya çıkarıldı, sergilendi).", irab_short: "mâzî mechûl, II. bâb", turkish_bridge: "Bâriz (açık), ibrâz bu kökten", balagha_note: null },
          { arabic: "ٱلْجَحِيمُ", transliteration: "al-jaḥīmu", root: "ج-ح-م", pos: "ism", meaning_tr: "cehennem", irab: "{Nâib-i fâil}, {merfû}.", irab_short: "nâib-i fâil, merfû", turkish_bridge: "Cahîm (cehennem) bu kökten", balagha_note: null },
          { arabic: "لِمَن يَرَىٰ", transliteration: "li-man yarā", root: "ر-أ-ي", pos: "fil", meaning_tr: "görebilene", irab: "لِ {harf-i cer} + مَنْ {ism-i mevsûl} + يَرَى {muzâri}.", irab_short: "câr-mecrûr", turkish_bridge: null, balagha_note: "Herkes görecek — kaçış yok. لِمَنْ يَرَى: 'görebilen herkes için' → evrensel tanıklık." },
        ],
      },
      {
        surah: 79, ayah: 37,
        arabic: "فَأَمَّا مَن طَغَىٰ",
        translation: "Kim azarsa",
        words: [
          { arabic: "فَأَمَّا", transliteration: "fa-ammā", root: null, pos: "harf", meaning_tr: "gelince, ise", irab: "أَمَّا {tafsîl edatı}: iki grubu ayırıyor (37-39 vs 40-41).", irab_short: "tafsîl", turkish_bridge: null, balagha_note: "فَأَمَّا ... وَأَمَّا yapısı: iki zıt grubu karşılaştırma. Burada: azgınlar vs Allah'tan korkanlar." },
          { arabic: "مَن", transliteration: "man", root: null, pos: "ism", meaning_tr: "kim ki", irab: "{İsm-i mevsûl / şart}.", irab_short: "ism-i mevsûl" },
          { arabic: "طَغَىٰ", transliteration: "ṭağā", root: "ط-غ-ي", pos: "fil", meaning_tr: "azdı", irab: "{Mâzî}. Sıla / şart fiili.", irab_short: "mâzî", turkish_bridge: null, balagha_note: null },
        ],
      },
      {
        surah: 79, ayah: 38,
        arabic: "وَءَاثَرَ ٱلْحَيَوٰةَ ٱلدُّنْيَا",
        translation: "Ve dünya hayatını tercih ettiyse",
        words: [
          { arabic: "وَءَاثَرَ", transliteration: "wa āṯara", root: "أ-ث-ر", pos: "fil", meaning_tr: "tercih etti", irab: "IV. bâb: آثَرَ (üstün tuttu).", irab_short: "mâzî, IV. bâb", turkish_bridge: "Îsâr (başkasını yeğleme), eser bu kökten", balagha_note: null },
          { arabic: "ٱلْحَيَوٰةَ", transliteration: "al-ḥayāta", root: "ح-ي-ي", pos: "ism", meaning_tr: "hayatı", irab: "{Mef'ûl bih}, {mensûb}.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Hayât, hayyî bu kökten" },
          { arabic: "ٱلدُّنْيَا", transliteration: "ad-dunyā", root: "د-ن-و", pattern: "فُعْلَى", pos: "ism", meaning_tr: "dünya (yakın olan)", irab: "{Sıfat}, {mensûb}. فُعْلَى: müennes ism-i tafdîl (أَدْنَى → دُنْيَا).", irab_short: "sıfat", turkish_bridge: "Dünya (en yakın), ednâ, denî bu kökten", balagha_note: "الدُّنْيَا: aslı ism-i tafdîl müennes → 'en yakın (hayat).' Âhiret uzak, dünya yakın → adı bile geçiciliğini gösteriyor." },
        ],
      },
      {
        surah: 79, ayah: 39,
        arabic: "فَإِنَّ ٱلْجَحِيمَ هِىَ ٱلْمَأْوَىٰ",
        translation: "Şüphesiz cehennem onun barınağıdır",
        words: [
          { arabic: "فَإِنَّ", transliteration: "fa-inna", root: null, pos: "harf", meaning_tr: "kesinlikle", irab: "فَ {cevap} + إِنَّ {te'kîd}.", irab_short: "inne" },
          { arabic: "ٱلْجَحِيمَ", transliteration: "al-jaḥīma", root: "ج-ح-م", pos: "ism", meaning_tr: "cehennem", irab: "{İsm-i inne}, {mensûb}.", irab_short: "ism-i inne, mensûb" },
          { arabic: "هِىَ", transliteration: "hiye", root: null, pos: "ism", meaning_tr: "o (barınak)", irab: "{Zamîr-i fasl}: mübtedâ ile haberi ayırır, hasr ifade eder.", irab_short: "zamîr-i fasl", turkish_bridge: null, balagha_note: null },
          { arabic: "ٱلْمَأْوَىٰ", transliteration: "al-maʾwā", root: "أ-و-ي", pattern: "مَفْعَل", pos: "ism", meaning_tr: "barınak, sığınak", irab: "{Haber-i inne}, {merfû}. مَفْعَل: ism-i mekân.", irab_short: "haber-i inne, merfû", turkish_bridge: "Me'vâ (barınak), îvâ (barındırma) bu kökten", balagha_note: "المَأْوَى: sığınak. İroni: cehennem 'sığınak' olarak sunuluyor → istihzâ." },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "İstifhâm-ı İnkârî + Temyîz Yapısı",
        explanation: "أَأَنْتُمْ أَشَدُّ خَلْقًا أَمِ السَّمَاءُ: İsm-i tafdîl (أَشَدُّ) + temyîz (خَلْقًا) yapısı. Temyîz, tafdîl'in ne açıdan olduğunu belirtir: 'yaratılışCA daha güç.' İstifhâm-ı inkârî: cevap belli → göğü yaratan sizi de diriltir.",
        rule: "İsm-i tafdîl + temyîz (mensûb):\nأَشَدُّ خَلْقًا = yaratılışça daha güç\nأَكْثَرُ مَالًا = malca daha çok\nأَحْسَنُ قَوْلًا = sözce daha güzel",
        examples: ["أَشَدُّ خَلْقًا — yaratılışça daha güç", "أَكْثَرُ أَمْوَالًا — malca daha çok (9:69)", "أَحْسَنُ عَمَلًا — amelce en güzel (67:2)"],
      },
      {
        title: "فَأَمَّا ... وَأَمَّا — Tafsîl (İki Grup Ayırımı)",
        explanation: "أَمَّا edatı iki veya daha fazla grubu/durumu ayırır. Her أَمَّا'dan sonra فَ ile cevap gelir. Bu surede: فَأَمَّا مَنْ طَغَى ... فَإِنَّ الجَحِيمَ (azgınlar → cehennem) ↔ وَأَمَّا مَنْ خَافَ ... فَإِنَّ الجَنَّةَ (korkanlar → cennet).",
        rule: "فَأَمَّا + durum-1 + فَ + sonuç-1\nوَأَمَّا + durum-2 + فَ + sonuç-2\nNebe' 78'deki cennet↔cehennem mukâbelesinin yapısal karşılığı.",
        examples: ["فَأَمَّا مَنْ طَغَى → فَإِنَّ الجَحِيمَ هِيَ المَأْوَى", "وَأَمَّا مَنْ خَافَ مَقَامَ رَبِّهِ → فَإِنَّ الجَنَّةَ هِيَ المَأْوَى"],
      },
    ],
    exercises: [
      { id: "L61-Q01", type: "single_choice", question: "أَأَنتُمْ أَشَدُّ خَلْقًا أَمِ ٱلسَّمَاءُ sorusunun amacı nedir?", options: ["İstifhâm-ı inkârî: göğü yaratan sizi de diriltir → kolay!", "Gerçek soru: hangisi daha zor?", "Kibir ifadesi", "Dua"], correct: 0, explanation: "Cevap belli bir soru: göğü yaratmak insanı yaratmaktan çok daha büyük iş. Öyleyse diriliş kolaydır → inkârı çürütme.", relatedRoots: ["ش-د-د", "خ-ل-ق"] },
      { id: "L61-Q02", type: "wazn_match", question: "خَلْقًا kelimesi bu cümlede ne tür bir i'rab rolü üstlenir?", targetWord: "خَلْقًا", options: ["Temyîz — tafdîl'in ne açıdan olduğunu belirtir", "Mef'ûl bih — fiilin nesnesi", "Hâl — durum bildiren", "Mef'ûl mutlak — pekiştirme"], correct: 0, explanation: "Temyîz: أَشَدُّ خَلْقًا = 'yaratılışÇA daha güç.' Temyîz, ism-i tafdîl'in hangi açıdan olduğunu açıklar.", relatedRoots: ["خ-ل-ق"] },
      { id: "L61-Q03", type: "root_extract", question: "دَحَاهَا kelimesinin kökü nedir?", targetWord: "دَحَىٰهَا", options: ["د-ح-و", "د-ح-ي", "د-ح-ر", "د-ح-ض"], correct: 0, explanation: "دَحَا: د-ح-و kökünden. Yaymak, yumurta biçiminde açmak. أُدْحِيَّة: devekuşu yumurta yatağı. Dünyanın elips şekline işaret.", relatedRoots: ["د-ح-و"] },
      { id: "L61-Q04", type: "fill_blank", question: "فَأَمَّا مَن _____ وَءَاثَرَ ٱلْحَيَوٰةَ ٱلدُّنْيَا", options: ["طَغَىٰ", "خَافَ", "آمَنَ", "صَبَرَ"], correct: 0, hint: "Cehennemin barınağı olacak kişinin durumu", explanation: "طَغَى (azdı): haddi aşma + dünya hayatını tercih etme → cehennem. L57'deki لِلطَّاغِينَ مَآبًا ile aynı kök.", relatedRoots: ["ط-غ-ي"] },
      { id: "L61-Q05", type: "single_choice", question: "79:27-33 bölümünde yaratılış delilleri hangi sırayla sunulur?", options: ["Gök → gece/gündüz → yer → su/otlak → dağlar → insanlar/hayvanlar için", "Yer → gök → dağ → su", "Su → bitki → hayvan → insan", "Dağ → deniz → rüzgâr → yağmur"], correct: 0, explanation: "Yukarıdan aşağıya: gök (bina) → gece/gündüz → yeryüzü (daha) → su/otlak → dağlar → canlılar için. Kozmik düzenden yeryüzü düzenine iniş.", relatedRoots: [] },
      { id: "L61-Q06", type: "bab_identify", question: "آثَرَ fiili kaçıncı bâbtandır?", targetWord: "وَءَاثَرَ", options: ["IV. bâb (if'âl): أَثَرَ → آثَرَ (tercih etti, üstün tuttu)", "I. bâb: أَثَرَ", "II. bâb: أَثَّرَ", "V. bâb: تَأَثَّرَ"], correct: 0, explanation: "آثَرَ: IV. bâb. أَثَرَ (iz bıraktı) → آثَرَ (birini diğerinden üstün tuttu, tercih etti). Îsâr (fedakârlık) da bu köktendir.", relatedRoots: ["أ-ث-ر"] },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DERS 62 — NÂZİ'ÂT 79:40-46 — Korkan için Cennet + Kapanış
  // ═══════════════════════════════════════════════════════════
  {
    id: "L62-naziat-5",
    title: "Nâzi'ât (40-46) — Haşyet ve Cennet",
    titleAr: "سُورَةُ النَّازِعَاتِ ٤٠-٤٦",
    stage: 2,
    level: 7,
    surah: 79,
    description: "Allah'tan korkanın mükâfâtı, kıyametin zamanı bilgisi, surenin kapanışı. مَقَام/مَأْوَى yapıları, نَهَى fiili, كَأَنَّ + haber cümlesi.",
    verses: [
      {
        surah: 79, ayah: 40,
        arabic: "وَأَمَّا مَنْ خَافَ مَقَامَ رَبِّهِۦ وَنَهَى ٱلنَّفْسَ عَنِ ٱلْهَوَىٰ",
        translation: "Rabbinin huzurunda durmaktan korkan ve nefsini hevâdan alıkoyan",
        words: [
          { arabic: "وَأَمَّا", transliteration: "wa ammā", root: null, pos: "harf", meaning_tr: "ise, gelince", irab: "{Tafsîl edatı}, ikinci grup.", irab_short: "tafsîl" },
          { arabic: "مَنْ", transliteration: "man", root: null, pos: "ism", meaning_tr: "kim ki", irab_short: "ism-i mevsûl" },
          { arabic: "خَافَ", transliteration: "ḫāfa", root: "خ-و-ف", pos: "fil", meaning_tr: "korktu", irab: "I. bâb, ecvef-vâvî.", irab_short: "mâzî", turkish_bridge: "Havf (korku), tehâvüf bu kökten", balagha_note: null },
          { arabic: "مَقَامَ", transliteration: "maqāma", root: "ق-و-م", pattern: "مَفْعَل", pos: "ism", meaning_tr: "huzurunu, makamını", irab: "{Mef'ûl bih}, {mensûb}. مَفْعَل: ism-i mekân.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Makam (durulan yer), kıyâm, kıyâmet bu kökten", balagha_note: null },
          { arabic: "رَبِّهِۦ", transliteration: "rabbihī", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbinin", irab_short: "muzâfun ileyh" },
          { arabic: "وَنَهَى", transliteration: "wa nahā", root: "ن-ه-ي", pos: "fil", meaning_tr: "alıkoydu, yasakladı", irab: "I. bâb.", irab_short: "mâzî", turkish_bridge: "Nehy (yasaklama), münâhî bu kökten", balagha_note: null },
          { arabic: "ٱلنَّفْسَ", transliteration: "an-nafsa", root: "ن-ف-س", pos: "ism", meaning_tr: "nefsi", irab: "{Mef'ûl bih}, {mensûb}.", irab_short: "mef'ûl bih, mensûb", turkish_bridge: "Nefs (benlik), nefis, teneffüs bu kökten", balagha_note: null },
          { arabic: "عَنِ ٱلْهَوَىٰ", transliteration: "ʿanil-hawā", root: "ه-و-ي", pos: "ism", meaning_tr: "hevâdan", irab: "{Câr-mecrûr}.", irab_short: "câr-mecrûr", turkish_bridge: "Hevâ (arzu), heves bu kökten", balagha_note: "İki şart: 1) Allah'tan korkmak, 2) nefsi hevâdan alıkoymak → dış (korku) + iç (disiplin)." },
        ],
      },
      {
        surah: 79, ayah: 41,
        arabic: "فَإِنَّ ٱلْجَنَّةَ هِىَ ٱلْمَأْوَىٰ",
        translation: "Şüphesiz cennet onun barınağıdır",
        words: [
          { arabic: "فَإِنَّ", transliteration: "fa-inna", root: null, pos: "harf", meaning_tr: "kesinlikle", irab_short: "inne" },
          { arabic: "ٱلْجَنَّةَ", transliteration: "al-jannata", root: "ج-ن-ن", pos: "ism", meaning_tr: "cennet", irab: "{İsm-i inne}, {mensûb}.", irab_short: "ism-i inne, mensûb", turkish_bridge: "Cennet (bahçe, gizli yer) bu kökten", balagha_note: null },
          { arabic: "هِىَ", transliteration: "hiye", root: null, pos: "ism", meaning_tr: "o", irab: "{Zamîr-i fasl}.", irab_short: "zamîr-i fasl" },
          { arabic: "ٱلْمَأْوَىٰ", transliteration: "al-maʾwā", root: "أ-و-ي", pattern: "مَفْعَل", pos: "ism", meaning_tr: "barınak", irab: "{Haber-i inne}, {merfû}.", irab_short: "haber-i inne, merfû", turkish_bridge: null, balagha_note: "39 ile 41: yapı aynı, içerik zıt. الجَحِيمَ هِيَ المَأْوَى ↔ الجَنَّةَ هِيَ المَأْوَى → mükemmel mukâbele." },
        ],
      },
      {
        surah: 79, ayah: 42,
        arabic: "يَسْـَٔلُونَكَ عَنِ ٱلسَّاعَةِ أَيَّانَ مُرْسَىٰهَا",
        translation: "Sana kıyametin ne zaman demir atacağını soruyorlar",
        words: [
          { arabic: "يَسْـَٔلُونَكَ", transliteration: "yasʾalūnaka", root: "س-أ-ل", pos: "fil", meaning_tr: "sana soruyorlar", irab: "{Muzâri}, merfû. كَ mef'ûl bih.", irab_short: "muzâri", turkish_bridge: "Suâl (soru) bu kökten", balagha_note: null },
          { arabic: "عَنِ ٱلسَّاعَةِ", transliteration: "ʿanis-sāʿati", root: "س-و-ع", pos: "ism", meaning_tr: "kıyamet hakkında", irab: "{Câr-mecrûr}.", irab_short: "câr-mecrûr", turkish_bridge: "Sâat (an, kıyamet) bu kökten", balagha_note: null },
          { arabic: "أَيَّانَ", transliteration: "ayyāna", root: null, pos: "harf", meaning_tr: "ne zaman?", irab: "{İstifhâm edatı, zaman sorusu}.", irab_short: "istifhâm, zarf", turkish_bridge: null, balagha_note: null },
          { arabic: "مُرْسَىٰهَا", transliteration: "mursāhā", root: "ر-س-و", pattern: "مُفْعَل", pos: "ism", meaning_tr: "demir atması, gerçekleşmesi", irab: "{Mübtedâ}, {merfû}. IV. bâb masdarı mîmî veya ism-i mekân.", irab_short: "mübtedâ, merfû", turkish_bridge: "Mersâ (demir atma) = kıyametin zamanı", balagha_note: "مُرْسَاهَا: gemi metaforu → kıyamet bir gemi gibi 'demir atacak' (gelip duracak)." },
        ],
      },
      {
        surah: 79, ayah: 43,
        arabic: "فِيمَ أَنتَ مِن ذِكْرَىٰهَا",
        translation: "Onun zamanını bilmek sana ne düşer?",
        words: [
          { arabic: "فِيمَ", transliteration: "fīma", root: null, pos: "harf", meaning_tr: "ne ile, neden", irab: "فِي + مَا (istifhâm): L24'teki عَمَّ ile aynı yapı.", irab_short: "harf-i cer + istifhâm", turkish_bridge: null, balagha_note: null },
          { arabic: "أَنتَ", transliteration: "anta", root: null, pos: "ism", meaning_tr: "sen", irab: "{Mübtedâ}.", irab_short: "mübtedâ" },
          { arabic: "مِن ذِكْرَىٰهَا", transliteration: "min ḏikrāhā", root: "ذ-ك-ر", pos: "ism", meaning_tr: "onu hatırlatmaktan", irab: "{Câr-mecrûr}, haber. ذِكْرَى masdar + هَا zamîr.", irab_short: "câr-mecrûr (haber)", turkish_bridge: "Zikrâ (hatırlatma), tezkire bu kökten", balagha_note: "Retorisk soru: 'Senin onunla ne işin var?' → Peygamber bile zamanını bilmez. İnsanlar sormasın." },
        ],
      },
      {
        surah: 79, ayah: 44,
        arabic: "إِلَىٰ رَبِّكَ مُنتَهَىٰهَا",
        translation: "Onun son bilgisi (yalnız) Rabbine aittir",
        words: [
          { arabic: "إِلَىٰ رَبِّكَ", transliteration: "ilā rabbika", root: "ر-ب-ب", pos: "ism", meaning_tr: "Rabbine", irab: "{Câr-mecrûr}, haber mukaddem.", irab_short: "câr-mecrûr (haber)" },
          { arabic: "مُنتَهَىٰهَا", transliteration: "muntahāhā", root: "ن-ه-ي", pattern: "مُفْتَعَل", pos: "ism", meaning_tr: "son noktası, son bilgisi", irab: "{Mübtedâ muahhar}, {merfû}. VIII. bâb ism-i mekân/zaman.", irab_short: "mübtedâ, merfû", turkish_bridge: "Müntehâ (son nokta), intihâ, nihâyet bu kökten", balagha_note: "Hasr: bilgi yalnız Allah'ta → إِلَى رَبِّكَ (haber) + مُنْتَهَاهَا (mübtedâ) → takdîm." },
        ],
      },
      {
        surah: 79, ayah: 45,
        arabic: "إِنَّمَا أَنتَ مُنذِرُ مَن يَخْشَىٰهَا",
        translation: "Sen ancak ondan korkanları uyarıcısın",
        words: [
          { arabic: "إِنَّمَا", transliteration: "innamā", root: null, pos: "harf", meaning_tr: "ancak, sadece", irab: "{Hasr edatı}.", irab_short: "hasr" },
          { arabic: "أَنتَ", transliteration: "anta", root: null, pos: "ism", meaning_tr: "sen", irab: "{Mübtedâ}.", irab_short: "mübtedâ" },
          { arabic: "مُنذِرُ", transliteration: "munḏiru", root: "ن-ذ-ر", pattern: "مُفْعِل", pos: "ism", meaning_tr: "uyarıcı", irab: "{Haber}, {merfû}. IV. bâb ism-i fâil: أَنْذَرَ → مُنْذِر.", irab_short: "haber, merfû", turkish_bridge: "Münzir (uyarıcı), inzâr bu kökten. L58'deki أَنْذَرْنَاكُمْ ile aynı kök.", balagha_note: null },
          { arabic: "مَن يَخْشَىٰهَا", transliteration: "man yaḫšāhā", root: "خ-ش-ي", pos: "fil", meaning_tr: "ondan korkan", irab: "مَنْ {ism-i mevsûl, muzâfun ileyh}. يَخْشَى {muzâri}.", irab_short: "ism-i mevsûl", turkish_bridge: null, balagha_note: "Sure haşyet ile başladı (خَاشِعَة, 9), haşyet ile bitiyor (يَخْشَاهَا, 45) → çerçeve yapısı (inclusio)." },
        ],
      },
      {
        surah: 79, ayah: 46,
        arabic: "كَأَنَّهُمْ يَوْمَ يَرَوْنَهَا لَمْ يَلْبَثُوا إِلَّا عَشِيَّةً أَوْ ضُحَىٰهَا",
        translation: "Onu gördükleri gün, (dünyada) ancak bir akşamüstü ya da kuşluk vakti kalmış gibi olurlar",
        words: [
          { arabic: "كَأَنَّهُمْ", transliteration: "kaʾannahum", root: null, pos: "harf", meaning_tr: "sanki onlar", irab: "كَأَنَّ {teşbîh edatı} + هُمْ {ism}.", irab_short: "teşbîh", turkish_bridge: null, balagha_note: "كَأَنَّ: benzetme edatı. Dünya hayatının kısalığı → akşam veya kuşluk kadar." },
          { arabic: "يَوْمَ يَرَوْنَهَا", transliteration: "yevme yeravnahā", root: "ر-أ-ي", pos: "fil", meaning_tr: "onu gördükleri gün", irab_short: "zarf + muzâri" },
          { arabic: "لَمْ يَلْبَثُوا", transliteration: "lem yelbaṯū", root: "ل-ب-ث", pos: "fil", meaning_tr: "kalmadılar", irab: "لَمْ {harf-i cezm} + يَلْبَثُوا {muzâri meczûm}.", irab_short: "muzâri meczûm", turkish_bridge: "Lebs (kalma, bekleme) bu kökten", balagha_note: null },
          { arabic: "إِلَّا", transliteration: "illā", root: null, pos: "harf", meaning_tr: "ancak", irab_short: "istisna" },
          { arabic: "عَشِيَّةً", transliteration: "ʿašiyyatan", root: "ع-ش-و", pos: "ism", meaning_tr: "akşamüstü", irab: "{Müstesnâ / zarf}, {mensûb}.", irab_short: "zarf, mensûb", turkish_bridge: "Aşiyye (akşamüstü), işâ bu kökten", balagha_note: null },
          { arabic: "أَوْ ضُحَىٰهَا", transliteration: "aw ḍuḥāhā", root: "ض-ح-ي", pos: "ism", meaning_tr: "ya da (o akşamüstünün) kuşluğu", irab: "أَوْ {tahyîr (seçenek)} + ضُحَى {atıf} + هَا zamîr.", irab_short: "atıf", turkish_bridge: "Duhâ (kuşluk vakti) bu kökten", balagha_note: "عَشِيَّة أَوْ ضُحَاهَا: yarım gün bile değil! Dünya hayatının kısalığı → surenin son mesajı." },
        ],
      },
    ],
    grammarNotes: [
      {
        title: "كَأَنَّ — Teşbîh Edatı",
        explanation: "كَأَنَّ: إِنَّ gibi çalışır (ism mensûb, haber merfû) ama anlam farklıdır: 'sanki.' Teşbîh (benzetme) yapar. كَأَنَّهُمْ لَمْ يَلْبَثُوا = 'sanki kalmamışlar.' Dünya hayatı → birkaç saat.",
        rule: "كَأَنَّ + ism (mensûb) + haber (merfû veya cümle)\nكَأَنَّهُمْ (ism: zamîr) + لَمْ يَلْبَثُوا (haber: cümle)\n= sanki onlar kalmamışlar",
        examples: ["كَأَنَّهُمْ لَمْ يَلْبَثُوا إِلَّا عَشِيَّةً — sanki bir akşamüstünden fazla kalmamışlar", "كَأَنَّهُمْ حُمُرٌ مُسْتَنْفِرَةٌ — sanki ürkmüş yaban eşekleri (74:50)"],
      },
      {
        title: "Nâzi'ât Suresi Genel Yapısı",
        explanation: "Sure beş bölümden oluşur: 1) Kasem zinciri (1-5), 2) Kıyamet sahnesi (6-14), 3) Mûsâ-Fir'avn kıssası (15-26), 4) Yaratılış delilleri (27-33), 5) İki grup: azgın ↔ muttakî (34-46). Her bölüm diğerini destekler.",
        rule: "1-5: Kasem (yemin)\n6-14: Kıyamet tasviri + inkârcıların alay\n15-26: Mûsâ kıssası (ibret)\n27-33: Yaratılış delilleri (diriliş mümkün)\n34-46: İki grup sonucu + kapanış",
        examples: ["1-5: وَالنَّازِعَاتِ غَرْقًا (kasem)", "15: هَلْ أَتَاكَ حَدِيثُ مُوسَى (kıssa)", "27: أَأَنْتُمْ أَشَدُّ خَلْقًا (delil)", "40: وَأَمَّا مَنْ خَافَ (sonuç)"],
      },
    ],
    exercises: [
      { id: "L62-Q01", type: "single_choice", question: "وَنَهَى ٱلنَّفْسَ عَنِ ٱلْهَوَىٰ ifadesinde cennet için iki şart nedir?", options: ["1) Allah korkusu (خَافَ مَقَامَ رَبِّهِ), 2) Nefsi dizginleme (نَهَى النَّفْسَ عَنِ الهَوَى)", "1) Namaz, 2) Oruç", "1) Cihad, 2) Hac", "1) Zenginlik, 2) Şöhret"], correct: 0, explanation: "İki boyut: dışsal (Allah'tan korku = haşyet) + içsel (nefsi hevâdan alıkoyma = mücâhede). İkisi birlikte → cennet.", relatedRoots: ["خ-و-ف", "ن-ه-ي", "ه-و-ي"] },
      { id: "L62-Q02", type: "fill_blank", question: "فَإِنَّ _____ هِىَ ٱلْمَأْوَىٰ (41. ayet)", options: ["ٱلْجَنَّةَ", "ٱلْجَحِيمَ", "ٱلْأَرْضَ", "ٱلسَّمَاءَ"], correct: 0, hint: "Allah'tan korkanın barınağı", explanation: "الجَنَّة: 39'da الجَحِيم → 41'de الجَنَّة. Aynı yapı (هِيَ المَأْوَى), zıt içerik → mukâbele.", relatedRoots: ["ج-ن-ن"] },
      { id: "L62-Q03", type: "root_extract", question: "مُنتَهَاهَا kelimesinin kökü nedir?", targetWord: "مُنتَهَىٰهَا", options: ["ن-ه-ي", "ن-ه-ر", "ن-و-ه", "ن-ه-ض"], correct: 0, explanation: "مُنْتَهَى: ن-ه-ي kökünden VIII. bâb (اِنْتَهَى). نَهَى (yasakladı/sona erdi) → اِنْتَهَى (sona ulaştı) → مُنْتَهَى (son nokta). L62'deki نَهَى ile aynı kök!", relatedRoots: ["ن-ه-ي"] },
      { id: "L62-Q04", type: "single_choice", question: "كَأَنَّهُمْ ... لَمْ يَلْبَثُوا إِلَّا عَشِيَّةً أَوْ ضُحَاهَا ne anlatır?", options: ["Dünya hayatının kısalığı: 'sanki yarım gün bile kalmamışlar'", "Cennetin güzelliği", "Cehennemin süresi", "Gece ve gündüzün dönüşümü"], correct: 0, explanation: "كَأَنَّ ile teşbîh: dünya hayatı birkaç saat kadar kısa hissedilecek. Ölümden sonra geriye bakınca → çok kısa.", relatedRoots: ["ل-ب-ث"] },
      { id: "L62-Q05", type: "balagha_identify", question: "Sure haşyet (korku) teması ile başlayıp haşyet ile bitiyor. Bu tekniğin adı nedir?", options: ["Çerçeve yapısı (inclusio/redd-i matla'): açılış ve kapanış aynı tema", "Tıbâk: zıtlık", "İltifât: bakış açısı değişimi", "Tevriye: çift anlamlılık"], correct: 0, explanation: "Redd-i matla' / inclusio: 8-9'da وَاجِفَة, خَاشِعَة (korkuyla titreyen kalpler ve gözler) → 45'te يَخْشَاهَا (kıyametten korkan). Surenin çerçevesi haşyet.", relatedRoots: ["خ-ش-ي"] },
    ],
  },
];

export default level7Lessons;
