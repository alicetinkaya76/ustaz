#!/bin/bash
# ═══════════════════════════════════════════════════════════
# Ustaz Quran Pipeline — Batch Çalıştırma Scripti
# ═══════════════════════════════════════════════════════════
#
# Kullanım:
#   chmod +x scripts/run_batch.sh
#   export ANTHROPIC_API_KEY='sk-ant-api03-...'
#   ./scripts/run_batch.sh
#
# ═══════════════════════════════════════════════════════════

set -e

# API key kontrolü
if [ -z "$ANTHROPIC_API_KEY" ]; then
    echo "❌ ANTHROPIC_API_KEY tanımlı değil!"
    echo ""
    echo "Kullanım:"
    echo "  export ANTHROPIC_API_KEY='sk-ant-api03-...'"
    echo "  ./scripts/run_batch.sh"
    echo ""
    echo "API key almak için: https://console.anthropic.com/settings/keys"
    exit 1
fi

echo "═══════════════════════════════════════════════════════════"
echo "  USTAZ QURAN PIPELINE — Batch Çalıştırma"
echo "═══════════════════════════════════════════════════════════"
echo ""

# ─── ADIM 1: Test — Kevser (108, 10 kelime) ───────────────
echo "📋 ADIM 1: Pilot test — Kevser suresi (108)"
echo "   3 ayet, 10 kelime — tahmini maliyet: ~\$0.01"
echo ""
read -p "   Devam etmek istiyor musun? (e/h): " confirm
if [ "$confirm" != "e" ]; then
    echo "   İptal edildi."
    exit 0
fi

python3 scripts/generate_surah.py 108 --js
echo ""
echo "   ✅ Kevser tamamlandı! Çıktıları kontrol et:"
echo "   - scripts/data/enriched/108.json"
echo "   - src/data/surahs/108-kevser.js"
echo ""

# ─── ADIM 2: Cüz 30 kısa sureler (3-6 ayetlik) ──────────
echo "📋 ADIM 2: Cüz 30 kısa sureler (3-6 ayet)"
echo "   Sureler: 103(Asr), 104(Hümeze), 105(Fîl), 106(Kureyş),"
echo "            107(Mâûn), 109(Kâfirûn), 110(Nasr), 111(Tebbet),"
echo "            112(İhlâs), 113(Felak), 114(Nâs)"
echo "   Toplam: ~11 sure, ~70 kelime — tahmini maliyet: ~\$0.10"
echo ""
read -p "   Devam etmek istiyor musun? (e/h): " confirm
if [ "$confirm" != "e" ]; then
    echo "   Adım 2 atlandı."
    exit 0
fi

python3 scripts/generate_surah.py 103 104 105 106 107 109 110 111 112 113 114 --js
echo ""
echo "   ✅ Kısa sureler tamamlandı!"
echo ""

# ─── ADIM 3: Cüz 30 orta sureler (7-30 ayetlik) ─────────
echo "📋 ADIM 3: Cüz 30 orta sureler"
echo "   97(Kadir), 98(Beyyine), 99(Zilzâl), 100(Âdiyât),"
echo "   101(Kâria), 102(Tekâsür)"
echo ""
read -p "   Devam etmek istiyor musun? (e/h): " confirm
if [ "$confirm" != "e" ]; then
    echo "   Adım 3 atlandı."
    exit 0
fi

python3 scripts/generate_surah.py 97 98 99 100 101 102 --js
echo ""

# ─── ADIM 4: Cüz 30 uzun sureler (30+ ayetlik) ──────────
echo "📋 ADIM 4: Cüz 30 kalan sureler"
echo "   78(Nebe), 79(Nâziât), 81(Tekvîr), 83(Mutaffifîn),"
echo "   84(İnşikâk), 85(Burûc), 86(Târık), 87(A'lâ), 88(Gâşiye),"
echo "   89(Fecr), 90(Beled), 91(Şems), 92(Leyl), 93(Duhâ),"
echo "   94(İnşirâh), 95(Tîn)"
echo "   NOT: 55(Rahmân), 67(Mülk), 80(Abese), 82(İnfitâr), 96(Alak) zaten mevcut — atlanacak"
echo ""
read -p "   Devam etmek istiyor musun? (e/h): " confirm
if [ "$confirm" != "e" ]; then
    echo "   Adım 4 atlandı."
    exit 0
fi

python3 scripts/generate_surah.py 78 79 81 83 84 85 86 87 88 89 90 91 92 93 94 95 --js
echo ""

echo "═══════════════════════════════════════════════════════════"
echo "  ✅ TÜM ADIMLAR TAMAMLANDI"
echo "═══════════════════════════════════════════════════════════"
echo ""
echo "  Zenginleştirilmiş JSON'lar: scripts/data/enriched/"
echo "  JS dosyaları: src/data/surahs/"
echo ""
echo "  Sonraki adım: Kalite kontrolü (QC)"
echo "  1. Birkaç sure aç, elle yazılmış dosyalarla karşılaştır"
echo "  2. İ'rab doğruluğunu kontrol et"
echo "  3. Eksik root/balagha_note tespiti"
echo ""
