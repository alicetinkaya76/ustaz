# 📖 Ustaz — Kur'an Arapçası Öğrenme Uygulaması

**"Meaning First"** yaklaşımıyla Kur'an Arapçasını öğreten tek sayfa React uygulaması.

Zaten ezberde bildiğin namaz surelerini kelime kelime çözerek başlar, gramer kurallarını canlı metin üzerinden keşfettirir, Claude API ile interaktif soru-cevap sunar.

> **Seviye 2 DEVAM EDİYOR** — 17 ders · 574 kelime · 165 quiz · 53 gramer terimi · 15 vezin kalıbı

## ✨ Özellikler

- **Interlinear Gösterim:** Ayet metni kelime kelime — Arapça, transliterasyon, kök, anlam, i'rab
- **Renk Kodlaması:** İsim (mavi), Fiil (yeşil), Harf (turuncu), Zamîr (mor)
- **Kelime Popup:** Her kelimeye tıkla → tam morfolojik analiz, Türkçe köprü, belâgat notu
- **Gramer Ansiklopedisi:** 53 terimlik interaktif gramer rehberi, terimler arası bağlantılar
- **Vezin Rehberi:** 15 Arapça kalıp — aranabilir, örnekli
- **Hızlı Seviye Belirleme:** 10 soruluk değerlendirme → uygun başlangıç noktası
- **Quiz:** Her ders için 10 soruluk çoktan seçmeli sınav, açıklamalı geri bildirim
- **Hızlı Tekrar (QuickReview):** Spaced repetition mantığıyla kök bazlı flashcard tekrar
- **Ustaz'a Sor:** Claude API ile inline sohbet — kelime, ayet, gramer soruları
- **İlerleme Takibi:** Tamamlanan dersler, öğrenilen kökler, quiz skorları
- **Koyu Tema:** Göz yormayan, İslami estetiğe uygun karanlık tasarım
- **Sıfır Backend:** Tüm veri localStorage'da, API anahtarı tarayıcıda
- **PWA Desteği:** Mobilde ana ekrana eklenebilir

## 🚀 Kurulum

```bash
git clone https://github.com/alicetinkaya76/ustaz.git
cd ustaz
npm install
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini aç.

### Deploy (Vercel)

```bash
npm run build   # dist/ klasörü oluşur
# Vercel'e GitHub repo bağla → otomatik deploy
```

## 🔑 Claude API Anahtarı

"Ustaz'a Sor" özelliği için Claude API anahtarı gereklidir:

1. [console.anthropic.com](https://console.anthropic.com) adresinden API anahtarı al
2. Uygulamada **Ayarlar** (⚙️) → API anahtarını yapıştır
3. Anahtar yalnızca tarayıcının localStorage'ında saklanır, sunucuya gönderilmez

## 📚 Müfredat

### Seviye 1 — Temel (Cüz 30 Kısa Sureler) ✅

| # | Ders | Sure | Kelime | Quiz | Öğretilen Yapılar |
|---|------|------|--------|------|-------------------|
| 01 | Fâtiha | 1:1-7 | 26 | 10 | İsim cümlesi, muzâf-muzâfun ileyh, harf-i cer, sıfat-mevsûf |
| 02 | Kevser | 108:1-3 | 12 | 10 | إنّ yapısı, emir fiili, zamîr-i fasl |
| 03 | Nasr | 110:1-3 | 17 | 10 | İzâfet zinciri, hâl, cümle-i fiiliye, fiil-i mâzî |
| 04 | Tebbet | 111:1-5 | 21 | 10 | Tesniye, sîn-i istikbâl, cümle-i fiiliye genişletme |
| 05 | İhlâs | 112:1-4 | 11 | 10 | Kasem, nefiy, masdar, tef'îl bâbı, ism-i fâil |
| 06 | Felak | 113:1-5 | 18 | 5 | İstiâze, istisna (من شر), muzâri nefiy |
| 07 | Nâs | 114:1-6 | 23 | 10 | X. bâb (istif'âl), VI. bâb (tefa'ul), tekrar belâgatı |
| 08 | Kâfirûn | 109:1-6 | 26 | 10 | لَا nâfiye, hitap zamîrleri, nida (يَا أَيُّهَا), مَا mevsûl |
| 09 | Mâûn | 107:1-7 | 25 | 10 | İstifham (أَرَأَيْتَ), ism-i mevsûl genişletme, III. bâb |
| 10 | Kureyş | 106:1-4 | 17 | 10 | IV. bâb (if'âl), lâm-ı emir, ism-i işâret |

### Seviye 2 — Gelişen (Cüz 30 Orta Sureler) 🔄

| # | Ders | Sure | Kelime | Quiz | Öğretilen Yapılar |
|---|------|------|--------|------|-------------------|
| 11 | Fîl | 105:1-5 | 24 | 10 | أَلَمْ inkârî, cem-i teksîr, VII. bâb tanıtım |
| 12 | Hümeze | 104:1-9 | 30 | 10 | فُعَلَة mübalağa, VIII. bâb ifti'âl, meçhul, كَلَّا |
| 13 | Tekâsür | 102:1-8 | 30 | 10 | Mef'ûl mutlak, tikrâr, لَوْ imtinâ', zarf-ı zaman |
| 14 | Kâri'a | 101:1-11 | 28 | 10 | وَمَا أَدْرَاكَ ta'zîm, أَمَّا…فَ tafṣîl, فَاعِلَة kalıbı |
| 15 | Zilzâl | 99:1-8 | 26 | 10 | إِذَا şart, مَنْ şart+cezâ, meçhul, temyîz, II. bâb aktif |
| 16 | Beyyine | 98:1-8 | 48 | 10 | كَانَ nâkıs, V. bâb (تَفَرَّقَ), hasr (إِلَّا), hâl, ism-i tafdîl |
| 17 | Kadr | 97:1-5 | 24 | 10 | مِنْ tafdîliye, خَيْر ism-i tafdîl, V. bâb (تَنَزَّلَ), ism-i zaman |

### Yol Haritası

- **Seviye 2 (L11–L20):** Gelişen — Cüz 30 orta sureler (L11-L17 tamamlandı, L18-L20 kaldı)
- **Seviye 3 (L21–L30):** Orta — Cüz 30 uzun + Cüz 29
- **Seviye 4 (L31–L40):** İleri — Pasaj bazlı, belâgat sistematik
- **Seviye 5 (L41–L50):** Maharet — Uzun sureler, kıssa yapıları
- **Seviye 6 (L51–L60):** Ustalaşma — Bakara, Âl-i İmrân, Nisâ, ahkâm

## 🏷️ POS Etiketleme Şeması

Her kelimeye atanan `pos` değeri ve karşılık gelen renk kodu:

| POS Etiketi | Açıklama | Renk | CSS Sınıfı | Hex |
|-------------|----------|------|------------|-----|
| `ism` | İsim (noun, adjective, masdar, participle) | 🔵 Mavi | `.pos-ism` | `#60a5fa` |
| `fil` | Fiil (mâzî, muzâri, emir) | 🟢 Yeşil | `.pos-fil` | `#34d399` |
| `harf` | Harf / Edat (cer, atıf, nefiy, istisna, nida) | 🟡 Turuncu | `.pos-harf` | `#fbbf24` |
| `zamir` | Zamîr (müttasıl, münfasıl, mevsûl) | 🟣 Mor | `.pos-zamir` | `#a78bfa` |

**Sınır Kararları:**
- Besmele'deki بِسْمِ → `harf` (cer + isim birleşik yazıldığı için edatla etiketlendi)
- İsm-i fâil / mef'ûl → `ism` (fiilden türemiş olsa da isim işlevinde)
- مَا nâfiye → `harf`; مَا mevsûl → `zamir`
- إِيَّاكَ → `zamir` (munfasıl mansûb zamîr)

## 🛠 Teknoloji

| Katman | Teknoloji |
|--------|-----------|
| Frontend | React 18 + Vite 5 |
| Styling | Tailwind CSS 3 |
| Arapça Font | Amiri (Google Fonts) |
| State | useState + localStorage |
| LLM | Claude API (Sonnet) |
| Deploy | Vercel |

## 📁 Proje Yapısı

```
ustaz/
├── src/
│   ├── App.jsx                    # Ana uygulama, view router, grammar+vezin modal
│   ├── main.jsx                   # React entry
│   ├── index.css                  # Tailwind + custom styles
│   ├── components/
│   │   ├── InterlinearVerse.jsx   # Kelime bazlı ayet gösterimi + ses + keyboard
│   │   ├── WordPopup.jsx          # Kelime detay popup
│   │   ├── GrammarCard.jsx        # Gramer terimi modal + vezin bağlantısı
│   │   ├── VezinCard.jsx          # Vezin rehberi modal, aranabilir
│   │   ├── ExerciseCard.jsx       # Quiz + kök bazlı vocab tracking
│   │   ├── ChatInline.jsx         # Claude sohbet
│   │   ├── QuickAssessment.jsx    # Seviye belirleme
│   │   ├── LevelResult.jsx        # Assessment sonuç ekranı
│   │   ├── LessonView.jsx         # Ders sayfası (4 tab)
│   │   ├── LessonNav.jsx          # Ders listesi sidebar
│   │   ├── QuickReview.jsx        # Flashcard tekrar
│   │   └── Settings.jsx           # API key, export, reset
│   ├── data/
│   │   ├── curriculum.js          # Ders içerikleri (kelime bazlı morfoloji + quiz)
│   │   ├── assessment.js          # Seviye belirleme soruları
│   │   ├── grammar.js             # Gramer terimi ansiklopedisi
│   │   └── vezin.js               # Arapça kalıp verisi
│   ├── hooks/
│   │   └── useProgress.js         # localStorage ilerleme yönetimi
│   └── utils/
│       └── api.js                 # Claude API + cache
├── public/
│   └── manifest.json              # PWA manifest
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 📝 Lisans

Kişisel kullanım. Kur'an metni: [Tanzil.net](https://tanzil.net) (CC BY-NC-SA).

---

*"Şüphesiz biz onu Arapça bir Kur'an olarak indirdik ki aklınızı kullanasınız."* — Yûsuf 12:2
