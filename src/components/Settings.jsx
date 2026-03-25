import { useState } from "react";
import { Download, Upload, Trash2, X, Sun, Moon, Eye, Type } from "lucide-react";

const FONT_LABELS = {
  13: "En Küçük",
  14: "Küçük",
  15: "Orta",
  16: "Normal",
  17: "Büyük",
  18: "Çok Büyük",
  19: "Dev",
  20: "En Büyük",
};

export default function Settings({ onExport, onImport, onReset, onClose, theme, onToggleTheme, highContrast, onToggleContrast, fontSize, onFontSizeChange }) {

  function handleImportFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const success = onImport(ev.target.result);
      if (success) alert("İlerleme başarıyla yüklendi!");
      else alert("Geçersiz dosya formatı.");
    };
    reader.readAsText(file);
  }

  const isDark = theme === "dark";
  const fs = fontSize || 16;

  return (
    <div className="mx-auto max-w-lg">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-bold text-ustaz-arabic">Ayarlar</h2>
        <button onClick={onClose} className="rounded-lg p-1.5 text-ustaz-turkish/30 hover:text-ustaz-turkish"><X size={18} /></button>
      </div>
      <div className="space-y-4">
        {/* Theme Toggle */}
        <div className="card">
          <div className="mb-3 flex items-center gap-2">
            {isDark ? <Moon size={14} className="text-ustaz-gold" /> : <Sun size={14} className="text-ustaz-gold" />}
            <h3 className="text-sm font-semibold text-ustaz-turkish/80">Tema</h3>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-ustaz-turkish/40">{isDark ? "Koyu tema aktif" : "Açık tema aktif"}</p>
            <button onClick={onToggleTheme}
              className="relative flex h-8 w-14 items-center rounded-full border border-ov/10 bg-ustaz-surface p-1 transition-colors"
              aria-label="Tema değiştir">
              <span className={`flex h-6 w-6 items-center justify-center rounded-full shadow transition-all duration-300 ${
                isDark ? "translate-x-0 bg-ustaz-gold" : "translate-x-6 bg-yellow-400"
              }`}>
                {isDark ? <Moon size={12} className="text-ustaz-bg" /> : <Sun size={12} className="text-ustaz-bg" />}
              </span>
            </button>
          </div>
        </div>
        {/* High Contrast */}
        <div className="card">
          <div className="mb-3 flex items-center gap-2">
            <Eye size={14} className="text-ustaz-gold" />
            <h3 className="text-sm font-semibold text-ustaz-turkish/80">Yüksek Kontrast</h3>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-ustaz-turkish/40">{highContrast ? "Yüksek kontrast aktif" : "Normal kontrast"}</p>
            <button onClick={onToggleContrast}
              className="relative flex h-8 w-14 items-center rounded-full border border-ov/10 bg-ustaz-surface p-1 transition-colors"
              role="switch" aria-checked={!!highContrast} aria-label="Yüksek kontrast modu">
              <span className={`flex h-6 w-6 items-center justify-center rounded-full shadow transition-all duration-300 ${
                highContrast ? "translate-x-6 bg-ustaz-gold" : "translate-x-0 bg-ustaz-turkish/20"
              }`}>
                <Eye size={12} className={highContrast ? "text-ustaz-bg" : "text-ustaz-turkish/50"} />
              </span>
            </button>
          </div>
        </div>
        {/* Font Size */}
        <div className="card">
          <div className="mb-3 flex items-center gap-2">
            <Type size={14} className="text-ustaz-gold" />
            <h3 className="text-sm font-semibold text-ustaz-turkish/80">Yazı Boyutu</h3>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-medium text-ustaz-turkish/60">{FONT_LABELS[fs] || "Normal"}</span>
            <span className="rounded-md bg-ov/5 px-2 py-0.5 text-xs font-mono text-ustaz-turkish/30">{fs}px</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-ustaz-turkish/30">A</span>
            <input
              type="range"
              min={13}
              max={20}
              step={1}
              value={fs}
              onChange={(e) => onFontSizeChange(Number(e.target.value))}
              className="h-2 flex-1 cursor-pointer appearance-none rounded-full bg-ustaz-surface accent-ustaz-gold"
            />
            <span className="text-xl font-bold text-ustaz-turkish/30">A</span>
          </div>
          <div className="mt-3 overflow-hidden rounded-xl border border-ov/5 bg-ov/[0.02] p-3">
            <p className="mb-1 font-arabic text-ustaz-arabic" style={{ fontSize: Math.round(fs * 1.4) + "px", lineHeight: "2" }}>
              عَمَّ يَتَسَآءَلُونَ
            </p>
            <p className="text-ustaz-turkish/60" style={{ fontSize: fs + "px" }}>
              Neyi soruyorlar? — Nebe 78:1
            </p>
          </div>
        </div>
        {/* Export */}
        <div className="card">
          <div className="mb-3 flex items-center gap-2"><Download size={14} className="text-pos-ism" /><h3 className="text-sm font-semibold text-ustaz-turkish/80">İlerlemeyi İndir</h3></div>
          <p className="mb-3 text-xs text-ustaz-turkish/40">İlerleme verilerini JSON dosyası olarak yedekle.</p>
          <button onClick={onExport} className="btn-secondary text-xs">JSON İndir</button>
        </div>
        {/* Import */}
        <div className="card">
          <div className="mb-3 flex items-center gap-2"><Upload size={14} className="text-pos-fil" /><h3 className="text-sm font-semibold text-ustaz-turkish/80">İlerlemeyi Yükle</h3></div>
          <p className="mb-3 text-xs text-ustaz-turkish/40">Daha önce indirilen JSON dosyasından ilerlemeyi geri yükle.</p>
          <input type="file" accept=".json" onChange={handleImportFile}
            className="text-xs text-ustaz-turkish/40 file:mr-3 file:rounded-lg file:border-0 file:bg-ov/5 file:px-3 file:py-1.5 file:text-xs file:text-ustaz-turkish/60" />
        </div>
        {/* Reset */}
        <div className="card border-red-500/10">
          <div className="mb-3 flex items-center gap-2"><Trash2 size={14} className="text-red-400" /><h3 className="text-sm font-semibold text-red-400/80">Sıfırla</h3></div>
          <p className="mb-3 text-xs text-ustaz-turkish/40">Tüm ilerlemeyi sil ve baştan başla.</p>
          <button onClick={() => { if (confirm("Tüm ilerleme silinecek. Emin misin?")) onReset(); }}
            className="rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-2 text-xs font-medium text-red-400 transition hover:bg-red-500/10">Her Şeyi Sıfırla</button>
        </div>
      </div>
    </div>
  );
}
