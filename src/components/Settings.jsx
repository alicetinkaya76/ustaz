import { useState } from "react";
import { Key, Download, Upload, Trash2, X, Database, Sun, Moon, Eye } from "lucide-react";
import { clearCache } from "../utils/api";

export default function Settings({ apiKey, onApiKeyChange, onExport, onImport, onReset, onClose, theme, onToggleTheme, highContrast, onToggleContrast }) {
  const [showKey, setShowKey] = useState(false);
  const [cacheMsg, setCacheMsg] = useState("");

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

  function handleClearCache() {
    const count = clearCache();
    setCacheMsg(`${count} cache kaydı silindi.`);
    setTimeout(() => setCacheMsg(""), 3000);
  }

  const isDark = theme === "dark";

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
        <div className="card">
          <div className="mb-3 flex items-center gap-2"><Key size={14} className="text-ustaz-gold" /><h3 className="text-sm font-semibold text-ustaz-turkish/80">Claude API Anahtarı</h3></div>
          <p className="mb-3 text-xs text-ustaz-turkish/40">Ustaz'a Sor için gerekli. Anahtar yalnızca tarayıcında saklanır.</p>
          <div className="flex gap-2">
            <input type={showKey ? "text" : "password"} value={apiKey} onChange={(e) => onApiKeyChange(e.target.value)} placeholder="sk-ant-..."
              className="flex-1 rounded-lg border border-ov/5 bg-ustaz-bg/50 px-3 py-2 text-sm text-ustaz-turkish placeholder:text-ustaz-turkish/20 focus:border-ustaz-gold/30 focus:outline-none" />
            <button onClick={() => setShowKey(!showKey)} className="btn-secondary text-xs">{showKey ? "Gizle" : "Göster"}</button>
          </div>
        </div>
        <div className="card">
          <div className="mb-3 flex items-center gap-2"><Download size={14} className="text-pos-ism" /><h3 className="text-sm font-semibold text-ustaz-turkish/80">İlerlemeyi İndir</h3></div>
          <p className="mb-3 text-xs text-ustaz-turkish/40">İlerleme verilerini JSON dosyası olarak yedekle.</p>
          <button onClick={onExport} className="btn-secondary text-xs">JSON İndir</button>
        </div>
        <div className="card">
          <div className="mb-3 flex items-center gap-2"><Upload size={14} className="text-pos-fil" /><h3 className="text-sm font-semibold text-ustaz-turkish/80">İlerlemeyi Yükle</h3></div>
          <p className="mb-3 text-xs text-ustaz-turkish/40">Daha önce indirilen JSON dosyasından ilerlemeyi geri yükle.</p>
          <input type="file" accept=".json" onChange={handleImportFile}
            className="text-xs text-ustaz-turkish/40 file:mr-3 file:rounded-lg file:border-0 file:bg-ov/5 file:px-3 file:py-1.5 file:text-xs file:text-ustaz-turkish/60" />
        </div>
        <div className="card">
          <div className="mb-3 flex items-center gap-2"><Database size={14} className="text-pos-harf" /><h3 className="text-sm font-semibold text-ustaz-turkish/80">LLM Cache</h3></div>
          <p className="mb-3 text-xs text-ustaz-turkish/40">Claude API cevapları cache'lenir. Sorun yaşarsan temizle.</p>
          <button onClick={handleClearCache} className="btn-secondary text-xs">Cache Temizle</button>
          {cacheMsg && <p className="mt-2 text-xs text-pos-fil">{cacheMsg}</p>}
        </div>
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
