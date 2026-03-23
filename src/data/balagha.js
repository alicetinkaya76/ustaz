// balagha.js — Belâgat Veritabanı (البلاغة القرآنية)
// Üç Ana Dal: Me'ânî (المعاني), Beyân (البيان), Bedî' (البديع)

const balaghaDB = {
  taqdim: {
    title: "التقديم والتأخير",
    titleTr: "Takdîm ve Te'hîr",
    branch: "meani",
    branchLabel: "المعاني",
    definition: "Normalde sonra gelen unsuru öne alarak hasr (sınırlandırma) veya vurgu sağlama.",
    examples: [
      { verse: "1:5", text: "إِيَّاكَ نَعْبُدُ", analysis: "Mef'ûl (إِيَّاكَ) fiilden önce → hasr: YALNIZ sana kulluk ederiz", lesson: "L01" },
      { verse: "97:5", text: "سَلَامٌ هِيَ", analysis: "Haber (سَلَامٌ) mübtedâdan önce → vurgu: SELÂMETTİR o gece", lesson: "L17" },
      { verse: "94:8", text: "وَإِلَى رَبِّكَ فَارْغَبْ", analysis: "Câr-mecrûr (إِلَى رَبِّكَ) fiilden önce → hasr: yalnız Rabbine yönel", lesson: "L20" },
      { verse: "1:2", text: "الحَمْدُ لِلَّهِ", analysis: "Mübtedâ (الحَمْدُ) ile başlayan isim cümlesi: hamdin kalıcılığı ve genelliği", lesson: "L01" },
      { verse: "109:6", text: "لَكُمْ دِينُكُمْ", analysis: "Câr-mecrûr (لَكُمْ) mübtedâdan önce → hasr: sizin dininiz SİZE, benim dinim BANA", lesson: "L48" },
    ],
  },
  hazf: {
    title: "الحذف",
    titleTr: "Hazf (Düşürme)",
    branch: "meani",
    branchLabel: "المعاني",
    definition: "Bir unsuru söylemeyerek ta'zîm (yüceltme), îcâz (kısalık) veya genelleme sağlama.",
    subtypes: [
      {
        name: "Mef'ûl hazfi",
        examples: [
          { verse: "97:1", text: "أَنزَلْنَاهُ", analysis: "هُ = Kur'an — adı zikredilmemiş: herkes bilir → ta'zîm", lesson: "L17" },
          { verse: "93:5", text: "فَتَرْضَىٰ", analysis: "Ne ile? Söylenmemiş → o kadar çok ki sayılamaz", lesson: "L19" },
          { verse: "80:9", text: "يَخْشَى", analysis: "Kimden? Allah'tan — söylemeye gerek yok → ta'zîm", lesson: "L21" },
        ],
      },
      {
        name: "Mübtedâ hazfi",
        examples: [
          { verse: "101:10", text: "نَارٌ حَامِيَةٌ", analysis: "Mübtedâ (هِيَ) hazfedilmiş → beklenen cevap birden geliyor", lesson: "L14" },
        ],
      },
    ],
  },
  tibaq: {
    title: "الطباق",
    titleTr: "Tıbâk (Zıtlık)",
    branch: "bedi",
    branchLabel: "البديع",
    definition: "Zıt anlamlı kelimeleri bir arada kullanarak anlamı güçlendirme.",
    examples: [
      { verse: "95:4-5", text: "أَحْسَن ↔ أَسْفَل", analysis: "En güzel zirve ↔ en aşağı dip: insanın iki ucu", lesson: "L18" },
      { verse: "94:2,4", text: "وَضَعْنَا ↔ رَفَعْنَا", analysis: "İndirdik (yükü) ↔ yükselttik (şanı): paralel dönüşüm", lesson: "L20" },
      { verse: "99:7-8", text: "خَيْرًا ↔ شَرًّا", analysis: "Hayır ↔ şer: amel terazisinin iki kefesi", lesson: "L15" },
      { verse: "93:3", text: "مَا وَدَّعَكَ ... وَمَا قَلَى", analysis: "Terk etmedi ↔ darılmadı: iki olumsuzla çift güvence", lesson: "L19" },
      { verse: "87:7", text: "الجَهْرَ ↔ مَا يَخْفَى", analysis: "Açık olan ↔ gizli kalan: Allah'ın bilgisinin kapsamı", lesson: "L23" },
      { verse: "106:2", text: "الشِّتَاءِ ↔ الصَّيْفِ", analysis: "Kış ↔ yaz: mevsim karşıtlığıyla yılın tamamını kapsama", lesson: "L45" },
      { verse: "111:1,3", text: "أَبِي لَهَبٍ ↔ ذَاتَ لَهَبٍ", analysis: "Lakap (alev=övgü) ↔ ceza (alev=azap): aynı kök zıt bağlamda, isim-kader ironisi", lesson: "L50" },
    ],
  },
  tikrar: {
    title: "التكرار",
    titleTr: "Tikrâr (Tekrar)",
    branch: "bedi",
    branchLabel: "البديع",
    definition: "Kasıtlı tekrarla te'kîd (pekiştirme) veya anlam çoğaltma.",
    rules: [
      "Ma'rife tekrarı = aynı şey (العُسْرِ × 2 = aynı zorluk)",
      "Nekre tekrarı = farklı şey (يُسْرًا × 2 = iki farklı kolaylık)",
    ],
    examples: [
      { verse: "94:5-6", text: "إِنَّ مَعَ العُسْرِ يُسْرًا × 2", analysis: "Bir zorluk (marife=aynı), iki kolaylık (nekre=farklı)", lesson: "L20" },
      { verse: "97:1-3", text: "لَيْلَةُ القَدْرِ × 3", analysis: "Tanıtım → soru → cevap: üç tekrar üç katman", lesson: "L17" },
      { verse: "93:6-8", text: "وَجَدَكَ × 3", analysis: "Üç keşif: yetim → yolunu arayan → muhtaç", lesson: "L19" },
      { verse: "101:1-3", text: "القَارِعَة × 3", analysis: "Tanıtım → soru → bırakma: kıyâmet üç kez çınlıyor", lesson: "L14" },
      { verse: "109:2-5", text: "لَا أَعْبُدُ / عَابِدُونَ × 2", analysis: "Fiil cümlesi çifti (anlık) + isim cümlesi çifti (kalıcı): iki perspektiften kesin red", lesson: "L48" },
      { verse: "113:2-5", text: "مِنْ شَرِّ × 4", analysis: "Dört farklı şer kaynağı tedricî sırayla: genel → kozmik → sihir → haset", lesson: "L52" },
      { verse: "114:1-3", text: "النَّاسِ × 3 (رَبّ/مَلِك/إِلَه)", analysis: "Üç ilâhî sıfatla tekrar: terbiye → yönetim → ulûhiyet (ascending tricolon)", lesson: "L53" },
      { verse: "94:5-6", text: "العُسْرِ (marife) × 2, يُسْرًا (nekira) × 2", analysis: "Marife tekrar=aynı zorluk, nekira tekrar=iki kolaylık — dilbilgisi kuralıyla matematik", lesson: "L54" },
    ],
  },
  iltifat: {
    title: "الالتفات",
    titleTr: "İltifât (Kişi Geçişi)",
    branch: "meani",
    branchLabel: "المعاني",
    definition: "Anlatımda kişi değişimi (gaib→muhatap, tekil→çoğul vb.) ile dikkat çekme.",
    examples: [
      { verse: "1:2-5", text: "الحَمْدُ لِلّهِ → إِيَّاكَ", analysis: "Gaib (O'na hamd) → muhatap (SANA kulluk): mesafe kapanıyor", lesson: "L01" },
      { verse: "108:1-2", text: "أَعْطَيْنَاكَ → فَصَلِّ", analysis: "Biz verdik → sen kıl: muhatap odaklı geçiş", lesson: "L08" },
      { verse: "80:1-3", text: "عَبَسَ → يُدْرِيكَ", analysis: "Gaib (o astı) → muhatap (sana ne bildirir): dolaylıdan doğrudan uyarıya", lesson: "L21" },
      { verse: "108:1-2", text: "إِنَّا أَعْطَيْنَاكَ → فَصَلِّ", analysis: "1. çoğul (biz verdik) → 2. tekil (sen kıl): azametten şahsî hitaba iltifât", lesson: "L47" },
    ],
  },
  istiare: {
    title: "الاستعارة",
    titleTr: "İsti'âre (Metafor)",
    branch: "beyan",
    branchLabel: "البيان",
    definition: "Gerçek anlamdan mecâzî anlama taşıma. Bir şeyi başka bir şeyin adıyla anma.",
    examples: [
      { verse: "94:1", text: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ", analysis: "Göğsü açmak = kalbi ferahlatmak, anlayışı genişletmek", lesson: "L20" },
      { verse: "94:3", text: "الَّذِي أَنقَضَ ظَهْرَكَ", analysis: "Sırtı çatırdatmak = ağır yükle ezilmek → mübalağa", lesson: "L20" },
      { verse: "93:1", text: "وَالضُّحَى", analysis: "Kuşluk vakti = Peygamber'in aydınlık dönemi", lesson: "L19" },
    ],
  },
  muqabele: {
    title: "المقابلة",
    titleTr: "Mukâbele (Simetri)",
    branch: "bedi",
    branchLabel: "البديع",
    definition: "İki veya daha fazla unsuru simetrik karşı karşıya koyma. Tıbâk'ın genişletilmiş hali.",
    examples: [
      { verse: "93:6-11", text: "أَلَمْ يَجِدْكَ... → فَأَمَّا... فَلَا", analysis: "3 nimet (yetimlik→hidâyet→zenginlik) ↔ 3 sorumluluk (yetimi ezme→isteyeni kovma→nimeti gizleme)", lesson: "L19" },
      { verse: "101:6-9", text: "أَمَّا... فَ × 2", analysis: "Ağır tartı → cennet ↔ Hafif tartı → cehennem", lesson: "L14" },
      { verse: "80:5-10", text: "أَمَّا مَنِ اسْتَغْنَى ↔ أَمَّا مَن جَاءَكَ", analysis: "Müstağnîye yönelme ↔ samimiye sırt çevirme: yanlış öncelik simetrisi", lesson: "L21" },
      { verse: "106:4", text: "أَطْعَمَهُم مِن جُوعٍ ↔ آمَنَهُم مِن خَوْفٍ", analysis: "Açlık→doyurma ↔ korku→güvence: maddi+manevi paralel nimet çifti", lesson: "L45" },
    ],
  },
  istifham_inkari: {
    title: "الاستفهام الإنكاري",
    titleTr: "İstifhâm-ı İnkârî",
    branch: "meani",
    branchLabel: "المعاني",
    definition: "Soru formatında cevabı belli olan ifade. Gerçek soru değil, kesinleştirme.",
    examples: [
      { verse: "94:1", text: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ", analysis: "Açmadık mı? → Elbette açtık! Üç soru = üç kesin nimet", lesson: "L20" },
      { verse: "95:8", text: "أَلَيْسَ اللّهُ بِأَحْكَمِ الحَاكِمِينَ", analysis: "Allah en adil hâkim değil mi? → Elbette!", lesson: "L18" },
      { verse: "93:6-8", text: "أَلَمْ يَجِدْكَ يَتِيمًا", analysis: "Bulmadı mı? → Elbette buldu! × 3 soru", lesson: "L19" },
      { verse: "105:1", text: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ", analysis: "Görmedin mi? → Elbette gördün! Fil ordusunun helâki", lesson: "L44" },
      { verse: "94:1-4", text: "أَلَمْ نَشْرَحْ / أَلَمْ نَضَعْ / أَلَمْ نَرْفَعْ", analysis: "Üç أَلَمْ ile üç nimet: göğüs açma → yük indirme → şan yükseltme. Duhâ-İnşirâh ikiz yapısı", lesson: "L54" },
    ],
  },
  tafṣil: {
    title: "التفصيل بأمّا",
    titleTr: "Tafṣîl (أَمَّا...فَ Ayrımı)",
    branch: "meani",
    branchLabel: "المعاني",
    definition: "Konuyu gruplara ayırarak detaylandırma. أَمَّا şart, فَ cevap.",
    examples: [
      { verse: "101:6-9", text: "فَأَمَّا... وَأَمَّا...", analysis: "Ağır→cennet ↔ hafif→cehennem: ikili ayrım", lesson: "L14" },
      { verse: "93:9-11", text: "فَأَمَّا... وَأَمَّا... وَأَمَّا...", analysis: "Yetim→ezme | İsteyeni→kovma | Nimeti→anlat: üçlü sorumluluk", lesson: "L19" },
      { verse: "80:5-10", text: "أَمَّا مَنِ اسْتَغْنَى... وَأَمَّا مَن جَاءَكَ", analysis: "Müstağnî→ilgi | samimi→ihmal: iki yanlış tutum", lesson: "L21" },
    ],
  },
  kasem_balagha: {
    title: "بلاغة القسم",
    titleTr: "Kasem Belâgatı",
    branch: "meani",
    branchLabel: "المعاني",
    definition: "Kasem nesnelerinin seçimi ve sayısı ile mesajın ağırlığı arasındaki ilişki.",
    examples: [
      { verse: "95:1-3", text: "وَالتِّينِ وَالزَّيْتُونِ وَطُورِ سِينِينَ وَهَٰذَا البَلَدِ الأَمِينِ", analysis: "4 kasem: incir (şam), zeytin (filistin), Sînâ, Mekke → 4 kutsal mekân = son derece kesin", lesson: "L18" },
      { verse: "93:1-2", text: "وَالضُّحَى وَاللَّيْلِ إِذَا سَجَى", analysis: "2 kasem: ışık ↔ gece = teselli bağlamına uygun", lesson: "L19" },
      { verse: "103:1", text: "وَالعَصْرِ", analysis: "1 kasem: zaman yeterli, mesaj net", lesson: "L03" },
      { verse: "100:1-5", text: "وَالعَادِيَاتِ...فَالمُورِيَاتِ...فَالمُغِيرَاتِ...فَأَثَرْنَ...فَوَسَطْنَ", analysis: "5 kasem: kronolojik savaş sahnesi (koşma→kıvılcım→baskın→toz→dalma). فَ ile sıralı = en uzun kasem zincirlerinden", lesson: "L40" },
    ],
  },
  // ── v0.14 yeni sanatlar ──
  hasr: {
    title: "الحصر",
    titleTr: "Hasr (Sınırlandırma)",
    branch: "meani",
    branchLabel: "المعاني",
    definition: "Bir hükmü belirli bir şeyle sınırlandırma. 'Sadece … / yalnızca …' anlamı.",
    subtypes: [
      {
        name: "إِنَّمَا ile hasr",
        examples: [],
      },
      {
        name: "Takdîm ile hasr (mef'ûl öne alma)",
        examples: [
          { verse: "1:5", text: "إِيَّاكَ نَعْبُدُ", analysis: "Mef'ûl öne → YALNIZ sana kulluk ederiz (başkasına değil)", lesson: "L01" },
        ],
      },
      {
        name: "إِلَّا ile hasr (nefiy + istisnâ)",
        examples: [
          { verse: "95:6", text: "إِلَّا الَّذِينَ آمَنُوا", analysis: "Nefiy (aşağı indirildi) + إِلَّا (ancak iman edenler hariç) → hasr", lesson: "L35" },
        ],
      },
    ],
  },
  itnab: {
    title: "الإطناب",
    titleTr: "Itnâb (Genişletme)",
    branch: "meani",
    branchLabel: "المعاني",
    definition: "Vurgu, açıklama veya pekiştirme amacıyla anlamı gereğinden fazla kelimeyle ifade etme. Gereksiz değil, maksat taşıyan genişletme.",
    subtypes: [
      {
        name: "وَمَا أَدْرَاكَ ile ıtnâb (ta'zîm sorusu)",
        examples: [
          { verse: "101:3", text: "وَمَا أَدْرَاكَ مَا القَارِعَةُ", analysis: "Konuyu tanıtıp 'ne bilirsin ki?' diye idrakin ötesinde olduğunu vurgulama", lesson: "L41" },
          { verse: "97:2", text: "وَمَا أَدْرَاكَ مَا لَيْلَةُ القَدْرِ", analysis: "Kadir gecesini tanıtıp ta'zîm sorusuyla yüceltme", lesson: "L37" },
          { verse: "104:5", text: "وَمَا أَدْرَاكَ مَا الحُطَمَةُ", analysis: "Hutame'nin dehşetini idrakin ötesine taşıma", lesson: "L43" },
        ],
      },
      {
        name: "Tıbâk/mukâbele ile ıtnâb",
        examples: [
          { verse: "99:7-8", text: "فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا... وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا", analysis: "Aynı yapıyı hayır/şer için tam tekrarlama: hiçbir amel kaçmaz vurgusu", lesson: "L39" },
        ],
      },
      {
        name: "كَلَّا tekrarı ile ıtnâb",
        examples: [
          { verse: "102:3-5", text: "كَلَّا سَوْفَ تَعْلَمُونَ ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ كَلَّا", analysis: "Üç كَلَّا: zecr (uyarı) gittikçe şiddetleniyor", lesson: "L42" },
        ],
      },
    ],
  },

  // ── FAZ A-2: EKSIK BELÂGAT SANATLARI (v0.24) ───────────────────────

  // ═══ İLM-İ BEYÂN (البيان) — Tasvir Bilimi ═══

  tesbih: {
    title: "التشبيه",
    titleTr: "Teşbîh (Benzetme)",
    branch: "beyan",
    branchLabel: "البيان",
    definition: "İki şey arasındaki ortak niteliği 'كَ' veya 'كَأَنَّ' gibi edatlarla açıkça ifade etme. Dört unsuru var: müşebbeh (benzeyen), müşebbehün bih (kendisine benzetilen), edat (كَ/كَأَنَّ/مِثْل), vech-i şebeh (benzerlik yönü).",
    subtypes: [
      {
        name: "Teşbîh-i mürsel (edatlı)",
        examples: [
          { verse: "55:24", text: "كَالأَعْلَامِ", analysis: "Gemiler dağlara benzetilmiş: denizde yükselen yelkenliler = su üzerinde dağlar", lesson: "S-Rahman" },
          { verse: "101:4", text: "كَالفَرَاشِ المَبْثُوثِ", analysis: "İnsanlar saçılmış kelebeklere benzetilmiş: kıyâmette şaşkın, dağınık", lesson: "L14" },
          { verse: "74:50", text: "كَأَنَّهُمْ حُمُرٌ مُسْتَنفِرَةٌ", analysis: "Kâfirler ürkmüş yaban eşeklerine benzetilmiş: Kur'an'dan kaçış", lesson: null },
        ],
      },
      {
        name: "Teşbîh-i belîğ (edatsız, en güçlü)",
        examples: [
          { verse: "55:37", text: "فَكَانَتْ وَرْدَةً كَالدِّهَانِ", analysis: "Gökyüzü gül gibi kızarıp yağ gibi erir: çok katmanlı teşbîh (renk + kıvam)", lesson: "S-Rahman" },
        ],
      },
    ],
  },

  mecaz: {
    title: "المجاز",
    titleTr: "Mecâz (Dolaylı Anlam)",
    branch: "beyan",
    branchLabel: "البيان",
    definition: "Bir kelimeyi gerçek anlamı dışında, bir ilgi (alâka) ile kullanma. Mecâz-ı mürsel (benzetme dışı ilgi) ve mecâz-ı aklî (fiilin gerçek fâili dışına isnadı) olmak üzere iki ana türü var.",
    subtypes: [
      {
        name: "Mecâz-ı mürsel (parça-bütün, sebep-sonuç vb.)",
        examples: [
          { verse: "67:1", text: "بِيَدِهِ المُلْكُ", analysis: "'Mülk O'nun elindedir' — يَد (el) → kudret ve tasarruf: parça ile bütünü ifade", lesson: "S-Mulk" },
          { verse: "96:15-16", text: "نَاصِيَةٍ كَاذِبَةٍ خَاطِئَةٍ", analysis: "Alın (nâsiye) yalancı ve günahkâr → mecâz-ı mürsel: parça (alın) ile bütünü (kişi) ifade", lesson: "L29" },
          { verse: "55:27", text: "وَجْهُ رَبِّكَ", analysis: "'Rabbinin yüzü/zâtı' — وَجْه (yüz) ile zât (öz) kastedilmiş: en şerefli uzuvla bütünü ifade", lesson: "S-Rahman" },
        ],
      },
      {
        name: "Mecâz-ı aklî (fiilin alışılmadık fâile isnadı)",
        examples: [
          { verse: "55:6", text: "وَالنَّجْمُ وَالشَّجَرُ يَسْجُدَانِ", analysis: "Bitki ve ağaç 'secde eder' — bilinçli eylemi cansız varlıklara isnat", lesson: "S-Rahman" },
        ],
      },
    ],
  },

  kinaye: {
    title: "الكناية",
    titleTr: "Kinâye (Dolaylı Anlatım)",
    branch: "beyan",
    branchLabel: "البيان",
    definition: "Bir anlamı, o anlamla ilişkili başka bir ifadeyle dolaylı olarak aktarma. Mecâzdan farkı: lafzın gerçek anlamı da kastedilmiş olabilir (ihtimallilik).",
    examples: [
      { verse: "67:13", text: "ذَاتِ الصُّدُورِ", analysis: "'Göğüslerin sahibi/özü' → kinâye: kalplerdeki gizli düşünceler ve niyetler", lesson: "S-Mulk" },
      { verse: "17:29", text: "وَلَا تَجْعَلْ يَدَكَ مَغْلُولَةً إِلَى عُنُقِكَ وَلَا تَبْسُطْهَا كُلَّ الْبَسْطِ", analysis: "'Elini boynuna bağlama (cimrilik), tamamen de açma (israf)' → kinâye: cimrilik ve israftan kaçınma", lesson: null },
      { verse: "111:1", text: "تَبَّتْ يَدَا أَبِي لَهَبٍ", analysis: "'Elleri kurusun' → kinâye: bütün çabaları boşa gitsin", lesson: "L50" },
    ],
  },

  // ═══ İLM-İ BEDÎ' (البديع) — Güzellik Bilimi ═══

  cinas: {
    title: "الجناس",
    titleTr: "Cinas (Söz Oyunu)",
    branch: "bedi",
    branchLabel: "البديع",
    definition: "Lafızları benzer, anlamları farklı kelimelerin bir arada kullanılması. Tam cinas (aynı ses, farklı anlam) ve nâkıs cinas (yakın ses) türleri var.",
    subtypes: [
      {
        name: "Cinas-ı iştikâk (aynı kökten farklı türetmeler)",
        examples: [
          { verse: "96:1-5", text: "عَلَّمَ × 2 + يَعْلَمْ", analysis: "ع-ل-م kökü 3 kez: 'öğretti' (×2) + 'bildi' → bilgi kavramı ses tekrarıyla yoğunlaşıyor", lesson: "L29" },
          { verse: "96:17-18", text: "يَدْعُ / نَدْعُ", analysis: "د-ع-و kökü iki kez: insan kendi topluluğunu çağırır ↔ Biz zebâniyeyi çağırırız → aynı fiil, zıt güç", lesson: "L29" },
          { verse: "55:60", text: "جَزَاءُ الإِحْسَانِ إِلَّا الإِحْسَانُ", analysis: "الإِحْسَان iki kez: (1) kulun ihsanı (güzel amel) (2) Allah'ın ihsanı (cennet) → aynı kelime, farklı fail", lesson: "S-Rahman" },
        ],
      },
      {
        name: "Cinas-ı tâm (tam ses benzerliği, farklı anlam)",
        examples: [
          { verse: "30:55", text: "وَيَوْمَ تَقُومُ السَّاعَةُ يُقْسِمُ المُجْرِمُونَ مَا لَبِثُوا غَيْرَ سَاعَةٍ", analysis: "السَّاعَة (kıyâmet) ↔ سَاعَة (saat/an): aynı kelime, birincisi kıyâmet, ikincisi zaman birimi", lesson: null },
        ],
      },
    ],
  },

  seci: {
    title: "السجع",
    titleTr: "Seci' (Nesir Kafiyesi)",
    branch: "bedi",
    branchLabel: "البديع",
    definition: "Nesir (düz yazı) cümlelerinin sonlarının aynı harflerle/kalıplarla bitmesi. Kur'an'ın fâsılası (ayet sonu uyumu) seci'in en üstün örneğidir.",
    rules: [
      "Fâsıla (فاصلة): Ayet sonlarındaki ses uyumu. Kur'an seci'i şiir kafiyesinden farklı: anlam önce, ses uyumu anlama tâbi.",
      "Mutarraf seci': Cümle uzunlukları farklı, son sesler aynı → يُسْرًا / يُسْرًا (İnşirâh 5-6).",
      "Mütevâzî seci': Cümle uzunlukları ve son sesler uyumlu → التِّينِ / الزَّيْتُونِ / سِينِينَ / الأَمِينِ (Tîn 1-3).",
    ],
    examples: [
      { verse: "80:38-42", text: "مُسْفِرَةٌ ← ضَاحِكَةٌ ← مُسْتَبْشِرَةٌ / غَبَرَةٌ ← قَتَرَةٌ ← الكَفَرَةُ ← الفَجَرَةُ", analysis: "İki grup paralel seci': -a kalıbı tekrar. Yüz tasvirleri ses uyumuyla pekişiyor", lesson: "L21" },
      { verse: "55:1-4", text: "الرَّحْمَنُ / القُرْآنَ / الإِنسَانَ / البَيَانَ", analysis: "-ân fâsılası: Rahmân suresinin temel ses motifi. 78 ayetin çoğu -ân ile biter", lesson: "S-Rahman" },
      { verse: "91:1-10", text: "ضُحَاهَا / تَلَاهَا / جَلَّاهَا / يَغْشَاهَا / بَنَاهَا / طَحَاهَا / سَوَّاهَا / فُجُورَهَا / تَقْوَاهَا / زَكَّاهَا", analysis: "10 kasem aynı -âhâ fâsılasıyla: ritim kasem zincirinin ağırlığını artırır", lesson: null },
    ],
  },

  terakum: {
    title: "التراكم",
    titleTr: "Terâkum (Birikme / Yığılma)",
    branch: "bedi",
    branchLabel: "البديع",
    definition: "Birden fazla unsuru peş peşe sıralayarak dramatik birikme etkisi oluşturma. Her yeni unsur bir öncekinin üzerine eklenir, cevap/sonuç en sona bırakılır.",
    examples: [
      { verse: "82:1-5", text: "إِذَا السَّمَاءُ انفَطَرَتْ × إِذَا الكَوَاكِبُ انتَثَرَتْ × إِذَا البِحَارُ فُجِّرَتْ × إِذَا القُبُورُ بُعْثِرَتْ → عَلِمَتْ نَفْسٌ", analysis: "Dört إِذَا peş peşe: gök → yıldızlar → denizler → kabirler. Her biri bir katman ekler, cevap ancak 5. ayette", lesson: "L22" },
      { verse: "81:1-14", text: "إِذَا الشَّمْسُ كُوِّرَتْ ... إِذَا × 12", analysis: "12 إِذَا ile en uzun kozmik yıkılış dizisi: güneş → yıldızlar → dağlar → hayvanlar → denizler... Cevap 14. ayette", lesson: null },
      { verse: "100:1-5", text: "وَالعَادِيَاتِ × فَالمُورِيَاتِ × فَالمُغِيرَاتِ × فَأَثَرْنَ × فَوَسَطْنَ", analysis: "Beş kasem zinciri فَ ile bağlı: koşma → kıvılcım → baskın → toz → dalma. Kronolojik birikme", lesson: "L40" },
    ],
  },

  tedric: {
    title: "التدريج",
    titleTr: "Tedrîc (Kademelendirme / Climax)",
    branch: "bedi",
    branchLabel: "البديع",
    definition: "Unsurları artan veya azalan bir sırayla dizme (climax / anti-climax). Her adım bir öncekinden daha güçlü/zayıf olarak duygusal etkiyi artırır.",
    examples: [
      { verse: "80:34-36", text: "أَخِيهِ → أُمِّهِ وَأَبِيهِ → صَاحِبَتِهِ وَبَنِيهِ", analysis: "Kaçış sırası: kardeş → anne-baba → eş-çocuklar. Her adımda duygusal bağ artar → en güçlü bağ bile kopar (climax)", lesson: "L21" },
      { verse: "96:1-5", text: "خَلَقَ (genel) → خَلَقَ الإنسَانَ (özel) → عَلَّمَ بِالقَلَمِ (araçla) → عَلَّمَ مَا لَمْ يَعْلَمْ (sınırsız)", analysis: "Genelden özele, araçlıdan mutlaka tedricî geçiş: yaratma → özel yaratma → araçla öğretme → sınırsız öğretme", lesson: "L29" },
      { verse: "114:1-3", text: "رَبِّ النَّاسِ → مَلِكِ النَّاسِ → إِلَٰهِ النَّاسِ", analysis: "Üç ilâhî sıfat artan sırayla: terbiye → yönetim → ulûhiyet (ascending tricolon)", lesson: "L53" },
      { verse: "113:2-5", text: "مِنْ شَرِّ مَا خَلَقَ → غَاسِقٍ → النَّفَّاثَاتِ → حَاسِدٍ", analysis: "Dört şer kaynağı: genel → kozmik → sihir → haset. Dıştan içe, gözle görünenden gizliye", lesson: "L52" },
    ],
  },

  teshis: {
    title: "التشخيص",
    titleTr: "Teşhîs (Kişileştirme)",
    branch: "bedi",
    branchLabel: "البديع",
    definition: "Cansız varlıklara veya soyut kavramlara insan nitelikleri (secde etme, konuşma, öfkelenme vb.) atfetme. Modern edebiyattaki 'personification'.",
    examples: [
      { verse: "55:6", text: "وَالنَّجْمُ وَالشَّجَرُ يَسْجُدَانِ", analysis: "Bitki ve ağaç 'secde eder': cansız varlıklara bilinçli eylem atfetme", lesson: "S-Rahman" },
      { verse: "67:7", text: "سَمِعُوا لَهَا شَهِيقًا وَهِيَ تَفُورُ", analysis: "Cehennem 'inleme sesi çıkarıyor' ve 'kaynıyor': korkutucu kişileştirme — ateş öfkeli bir canavar gibi", lesson: "S-Mulk" },
      { verse: "67:8", text: "تَكَادُ تَمَيَّزُ مِنَ الغَيْظِ", analysis: "Cehennem 'öfkeden neredeyse parçalanacak': öfke (insan duygusu) ateşe atfedilmiş → mübalağa + teşhîs", lesson: "S-Mulk" },
      { verse: "67:4", text: "يَنقَلِبْ إِلَيْكَ البَصَرُ خَاسِئًا", analysis: "Göz 'kovulmuş gibi geri döner': göze insan niteliği verilmiş, arayıp bulamayan bir avcı gibi", lesson: "S-Mulk" },
      { verse: "99:4", text: "يَوْمَئِذٍ تُحَدِّثُ أَخْبَارَهَا", analysis: "Yeryüzü 'haberlerini anlatır': arz canlı bir tanık gibi konuşuyor", lesson: "L15" },
    ],
  },

  // ═══ İLM-İ MEÂNÎ (المعاني) — Ek Sanat ═══

  icaz: {
    title: "الإيجاز",
    titleTr: "Îcâz (Kısalık / Özlülük)",
    branch: "meani",
    branchLabel: "المعاني",
    definition: "Az sözle çok anlam ifade etme. Itnâb'ın (genişletme) zıddı. İki türü: hazf ile îcâz (bir unsuru düşürme) ve kasr ile îcâz (az kelimeyle çok anlam yükleme).",
    subtypes: [
      {
        name: "Hazf ile îcâz (düşürme yoluyla kısaltma)",
        examples: [
          { verse: "12:82", text: "وَاسْأَلِ القَرْيَةَ", analysis: "'Köye sor' — aslında 'köy halkına sor.' Muzâf (أَهْلَ) hazfedilmiş: bir kelime düşmüş, anlam kaybolmamış", lesson: null },
          { verse: "80:17", text: "قُتِلَ الإنسانُ", analysis: "Kim tarafından? Fâil gizli → ilahi kudrete işaret + kısalık", lesson: "L21" },
        ],
      },
      {
        name: "Kasr ile îcâz (az kelimeyle derin anlam)",
        examples: [
          { verse: "103:1-3", text: "وَالعَصْرِ إِنَّ الإنسانَ لَفِي خُسرٍ إِلَّا الَّذِينَ آمَنُوا...", analysis: "3 ayet, 14 kelime — İmam Şâfi'î: 'Sadece bu sure inseydi yeterdi.' Zaman, kayıp, kurtuluş yolu: bütün bir hayat felsefesi", lesson: "L03" },
          { verse: "55:60", text: "هَلْ جَزَاءُ الإِحْسَانِ إِلَّا الإِحْسَانُ", analysis: "5 kelime ile ilahi adalet özetlenmiş: iyiliğin karşılığı iyiliktir", lesson: "S-Rahman" },
        ],
      },
    ],
  },
};
export function getBalaghaForLesson(lessonId) {
  const results = [];
  for (const [key, art] of Object.entries(balaghaDB)) {
    // Check flat examples
    const directExamples = (art.examples || []).filter(ex => ex.lesson === lessonId);
    // Check subtype examples
    const subtypeExamples = [];
    if (art.subtypes) {
      for (const st of art.subtypes) {
        const stExs = st.examples.filter(ex => ex.lesson === lessonId);
        if (stExs.length > 0) {
          subtypeExamples.push({ subtype: st.name, examples: stExs });
        }
      }
    }
    if (directExamples.length > 0 || subtypeExamples.length > 0) {
      results.push({
        key,
        ...art,
        lessonExamples: directExamples,
        lessonSubtypes: subtypeExamples,
      });
    }
  }
  return results;
}

// Helper: tüm sanat anahtarlarını döndür
export function getBalaghaKeys() {
  return Object.keys(balaghaDB);
}

// Helper: belirli bir sanatı getir
export function getBalagha(key) {
  return balaghaDB[key] || null;
}

export default balaghaDB;
