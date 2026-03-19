// Seviye Belirleme Soru Havuzu
// 5 öz-değerlendirme + profil bazlı 5 doğrulama sorusu

export const selfAssessment = [
  {
    id: "SA-01",
    question: "Arap harflerini okuyabiliyor musun?",
    options: [
      { text: "Hayır, hiç bilmiyorum", score: 0 },
      { text: "Bazılarını tanıyorum", score: 1 },
      { text: "Evet, harekeliyse okuyabiliyorum", score: 2 },
      { text: "Evet, harekesiz de okuyabiliyorum", score: 3 },
    ],
  },
  {
    id: "SA-02",
    question: "Daha önce Arapça gramer (sarf/nahiv) eğitimi aldın mı?",
    options: [
      { text: "Hiç almadım", score: 0 },
      { text: "Biraz gördüm ama hatırlamıyorum", score: 1 },
      { text: "Temel seviye bilgim var", score: 2 },
      { text: "Orta-ileri seviye bilgim var", score: 3 },
    ],
  },
  {
    id: "SA-03",
    question: "Kur'an'dan ezbere bildiğin sure/ayet var mı?",
    options: [
      { text: "Hiç yok", score: 0 },
      { text: "Fâtiha + 1-2 kısa sure", score: 1 },
      { text: "Namaz sureleri (5-10 sure)", score: 2 },
      { text: "Amme cüzünün çoğu veya daha fazla", score: 3 },
    ],
  },
  {
    id: "SA-04",
    question: "Okuduğun Arapça metinlerin anlamını ne kadar anlıyorsun?",
    options: [
      { text: "Hiç anlamıyorum", score: 0 },
      { text: "Birkaç kelimeyi tahmin edebiliyorum", score: 1 },
      { text: "Genel konuyu anlıyorum", score: 2 },
      { text: "Kelime bazında çoğunu anlıyorum", score: 3 },
    ],
  },
  {
    id: "SA-05",
    question: "Bu uygulamadan beklentin ne?",
    options: [
      { text: "Sıfırdan Arapça öğrenmek", score: 0 },
      { text: "Namazda ne söylediğimi anlamak", score: 1 },
      { text: "Kur'an'ı tercümesiz okuyabilmek", score: 2 },
      { text: "Gramer bilgimi Kur'an'a uygulamak", score: 3 },
    ],
  },
];

// Profil bazlı doğrulama soruları
export const validationQuestions = {
  A: [
    {
      id: "VA-01",
      question: "Bu harf hangisidir? → بَ",
      options: ["bâ", "tâ", "sâ", "nûn"],
      correct: 0,
    },
    {
      id: "VA-02",
      question: "Bu harf hangisidir? → عَ",
      options: ["ayn", "ğayn", "hâ", "hı"],
      correct: 0,
    },
    {
      id: "VA-03",
      question: "بِسْمِ nasıl okunur?",
      options: ["bismi", "basma", "busmu", "bîsam"],
      correct: 0,
    },
    {
      id: "VA-04",
      question: "كُ hecesindeki hareke nedir?",
      options: ["Damme (ü/u)", "Fetḥa (e/a)", "Kesre (i)", "Sükûn"],
      correct: 0,
    },
    {
      id: "VA-05",
      question: "ٱلْحَمْدُ kelimesi kaç heceden oluşur?",
      options: ["3 (al-ḥam-du)", "2", "4", "1"],
      correct: 0,
    },
  ],
  B: [
    {
      id: "VB-01",
      question: "كِتَاب kelimesinin kökü nedir?",
      options: ["ك-ت-ب", "ك-ت-ف", "ق-ت-ب", "ك-ت-م"],
      correct: 0,
    },
    {
      id: "VB-02",
      question: "رَحْمَة ne demektir?",
      options: ["Rahmet / merhamet", "Gazap / öfke", "İlim / bilgi", "Şükür"],
      correct: 0,
    },
    {
      id: "VB-03",
      question: "عِلْم kelimesinin kökü aşağıdakilerden hangisinde de var?",
      options: ["عَالَم (âlem)", "عَمِلَ (iş yaptı)", "عَلَّقَ (astı)", "عَالَجَ (tedavi etti)"],
      correct: 0,
    },
    {
      id: "VB-04",
      question: "رَسُول ne demektir?",
      options: ["Elçi / peygamber", "Kitap", "Melek", "Dua"],
      correct: 0,
    },
    {
      id: "VB-05",
      question: "يَوْم kelimesiyle aynı kökten olan Türkçe kelime hangisi?",
      options: ["Yevm (gün)", "Yem", "Yüm", "Hiçbiri — Türkçe'de yok"],
      correct: 0,
    },
  ],
  C: [
    {
      id: "VC-01",
      question: "ٱللَّهُ أَكْبَرُ cümlesi hangi türdendir?",
      options: ["İsim cümlesi (mübtedâ + haber)", "Fiil cümlesi", "Şart cümlesi", "Soru cümlesi"],
      correct: 0,
    },
    {
      id: "VC-02",
      question: "بِسْمِ ٱللَّهِ'de اللّه neden mecrûrdur (kesrelidir)?",
      options: ["Muzâfun ileyh olduğu için", "Mübtedâ olduğu için", "Fiil olduğu için", "Mansûb olduğu için"],
      correct: 0,
    },
    {
      id: "VC-03",
      question: "'Merfû' ne demektir?",
      options: ["İsmin ötre (damme) ile gelmesi — özne konumu", "İsmin üstün (fetḥa) ile gelmesi", "İsmin esre (kesre) ile gelmesi", "Fiilin geçmiş zamanda olması"],
      correct: 0,
    },
    {
      id: "VC-04",
      question: "كَتَبَ fiilinin kalıbı nedir?",
      options: ["فَعَلَ", "أَفْعَلَ", "فَعِلَ", "فَعُلَ"],
      correct: 0,
    },
    {
      id: "VC-05",
      question: "الكِتَابَ kelimesinin sonundaki fetḥa (üstün) ne bildirir?",
      options: ["Mansûb — mef'ûlün bih (nesne) konumunda", "Merfû — mübtedâ konumunda", "Mecrûr — harf-i cerden sonra", "Hiçbir şey — rastgele"],
      correct: 0,
    },
  ],
  D: [
    {
      id: "VD-01",
      question: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ cümlesinde رحمةً'nin i'rabı nedir?",
      options: ["Hâl, mansûb", "Mef'ûlün bih", "Mübtedâ", "Fâil"],
      correct: 0,
    },
    {
      id: "VD-02",
      question: "مَا أَرْسَلْنَاكَ إِلَّا yapısının adı nedir?",
      options: ["Nefiy + İstisna → Hasr (sınırlama)", "Şart cümlesi", "Soru cümlesi", "Kasem"],
      correct: 0,
    },
    {
      id: "VD-03",
      question: "يَسْتَغْفِرُونَ fiilinin bâbı hangisidir?",
      options: ["İstif'âl (X. bâb — talep)", "İf'âl (IV. bâb)", "Tef'îl (II. bâb)", "Tefâ'ul (VI. bâb)"],
      correct: 0,
    },
    {
      id: "VD-04",
      question: "إِنَّمَا المُؤْمِنُونَ إِخْوَةٌ'de إنما ne yapar?",
      options: ["Hasr: 'Mü'minler ancak kardeştir'", "Nefiy: 'Mü'minler kardeş değildir'", "Soru: 'Mü'minler kardeş midir?'", "Temenni"],
      correct: 0,
    },
    {
      id: "VD-05",
      question: "قُلْ هُوَ ٱللَّهُ أَحَدٌ'de أحدٌ'ın i'rabı nedir?",
      options: ["Haber-i mübtedâ, merfû (veya bedel)", "Mef'ûlün bih, mansûb", "Muzâfun ileyh, mecrûr", "Fâil"],
      correct: 0,
    },
  ],
};

// Profil belirleme fonksiyonu
export function determineProfile(selfScore) {
  if (selfScore <= 3) return "A";
  if (selfScore <= 6) return "B";
  if (selfScore <= 9) return "C";
  if (selfScore <= 12) return "D";
  return "E";
}

export function determineStartPoint(profile, validationScore) {
  const map = {
    A: { lesson: "L01-fatiha", stage: 0, label: "Sıfırdan başlıyoruz" },
    B: { lesson: "L01-fatiha", stage: 0, label: "Fâtiha'yı çözmeye başlıyoruz" },
    C: { lesson: "L02-kevser", stage: 0, label: "Bazı temel bilgin var, hızlanıyoruz" },
    D: { lesson: "L02-kevser", stage: 1, label: "Gramer bilgin var, Kur'an'a uyguluyoruz" },
    E: { lesson: "L02-kevser", stage: 2, label: "İleri seviye, pratik odaklı ilerliyoruz" },
  };
  return map[profile] || map.B;
}

export const profileDescriptions = {
  A: {
    title: "Başlangıç",
    subtitle: "Harflerden başlıyoruz",
    strengths: ["Motivasyon var — bu en önemli adım!"],
    goals: ["Harf ve harekeleri öğren", "Fâtiha'yı harf harf oku"],
  },
  B: {
    title: "Okuyor ama anlamıyor",
    subtitle: "Fâtiha'yı çözmeye başlıyoruz!",
    strengths: ["Harfleri ve harekeleri okuyabiliyorsun", "Namazda sureleri ezbere biliyorsun"],
    goals: ["İlk 5 ders: Namaz surelerinin anlamı", "Sonra: Kök sistemi ve temel gramer"],
  },
  C: {
    title: "Temel bilgi var",
    subtitle: "Bilgini derinleştiriyoruz",
    strengths: ["Bazı kökleri tanıyorsun", "Temel yapıları fark edebiliyorsun"],
    goals: ["Kelime hazinesini genişlet", "İ'rab temellerini öğren"],
  },
  D: {
    title: "Gramer temeli var",
    subtitle: "Kur'an'a uyguluyoruz",
    strengths: ["Sarf/nahiv temelin var", "Kök sistemini biliyorsun"],
    goals: ["Kur'an ayetlerini bağımsız çözümle", "Belâgat farkındalığı geliştir"],
  },
  E: {
    title: "İleri seviye",
    subtitle: "Derinleşme zamanı",
    strengths: ["Güçlü gramer altyapın var", "Kur'an metnini büyük ölçüde anlıyorsun"],
    goals: ["Sistematik belâgat", "İ'rab incelikleri ve kıraat farkları"],
  },
};
