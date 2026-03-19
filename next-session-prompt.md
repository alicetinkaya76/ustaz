# Ustaz — Sonraki Oturum Prompt

**Tarih:** 2026-03-20
**Proje:** Ustaz — Kur'an Arapçası Öğrenme Uygulaması
**Son Versiyon:** v0.6.0 (build geçiyor, 13 ders, 305 kelime, 125 quiz, 46 gramer terimi)

---

## v0.6'da Yapılanlar

### Deploy-Ready ✅
- README: POS şeması, 13 ders tablosu, deploy talimatları
- PWA manifest + meta tags (OG, theme-color, apple-mobile-web-app, viewport-fit=cover)
- .env.example, vite base: '/' (Vercel-ready)

### Veri Kalitesi ✅
- 125 quiz sorusunun tamamına `relatedRoots` eklendi
- ExerciseCard: `onRootResult` prop ile soru bazında kök tracking
- Toplu kök güncelleme → granüler quiz bazlı tracking

### Seviye 2: L11–L13 ✅
| Ders | Sure | Kelime | Quiz | Yapılar |
|------|------|--------|------|---------|
| L11 | Fîl (105) | 24 | 10 | أَلَمْ inkârî, cem-i teksîr, VII. bâb tanıtım |
| L12 | Hümeze (104) | 30 | 10 | فُعَلَة mübalağa, VIII. bâb ifti'âl, meçhul, كَلَّا |
| L13 | Tekâsür (102) | 30 | 10 | Mef'ûl mutlak, tikrâr, لَوْ imtinâ', zarf-ı zaman |

### Mobil Arayüz Yeniden Tasarımı ✅
- **Bottom Navigation:** 4 tab (Ders, Dersler, Tekrar, Ayarlar) — iOS safe area desteği
- **Bottom Sheet:** Kelime popup mobilde bottom-sheet olarak açılır, masaüstünde inline
- **Gramer/Vezin Modals:** Mobilde bottom-sheet, masaüstünde centered dialog
- **Tab Bar:** Dört sekmeli ders içi navigasyon (Ayetler, Gramer, Quiz, Sor) — 44px min touch target
- **Lesson Nav Drawer:** Sol kenardan 85vw genişlikte, seviye gruplama, ilerleme çubuğu
- **Kelime kartları:** Daha kompakt, active:scale-[0.97] dokunma geri bildirimi
- **Quiz:** 48px min buton yüksekliği, büyük dokunma alanları
- **Flashcard (QuickReview):** Gradient kart, büyük kök gösterimi
- **Safe areas:** viewport-fit=cover, env(safe-area-inset-*), mb-nav utility
- **Animasyonlar:** fadeSlideUp view geçişleri, bottom-sheet slideUp, audioPulse
- **Tüm butonlar:** min-height 44-48px, active:scale dokunma geri bildirimi
- **CSS:** 33.7KB (Tailwind + custom mobil stiller)
- **JS Bundle:** 429KB (gzip: 132KB)

---

## Sonraki Oturum Hedefleri

### Seçenek A: GitHub Push + Vercel Deploy 🚀
### Seçenek B: Seviye 2 Devam — L14–L17
| Ders | Sure | Yapılar |
|------|------|---------|
| L14 | Kâri'a (101) | مَا أَدْرَاكَ, V. bâb, ism-i tafdîl |
| L15 | Zilzâl (99) | VII. bâb aktif, şart+cevap |
| L16 | Beyyine (98) | كَانَ nâkıs, cümle genişletme |
| L17 | Kadr (97) | خَيْر tafdîl, مِنْ teb'îziye |

### Seçenek C: Mobil Polish
- Swipe ile ders geçişi (touch gesture)
- Pull-to-refresh
- Haptic feedback (navigator.vibrate)
- Dark/Light tema toggle
- Ders arama (LessonNav'da)
- Offline cache (Service Worker)

### Seçenek D: Vezin genişletme (VII-VIII bâb kalıpları)

---

## Bâb Durumu (7/10)
I ✅ | II ✅ | III ✅ | IV ✅ | V ❌ | VI ✅ | VII ✅ | VIII ✅ | IX ❌ | X ✅
