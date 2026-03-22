import { useState, useEffect } from "react";
import { WifiOff, X } from "lucide-react";

export default function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const goOffline = () => setIsOffline(true);
    const goOnline = () => { setIsOffline(false); setDismissed(false); };
    window.addEventListener("offline", goOffline);
    window.addEventListener("online", goOnline);
    return () => {
      window.removeEventListener("offline", goOffline);
      window.removeEventListener("online", goOnline);
    };
  }, []);

  if (!isOffline || dismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-2 bg-orange-500/90 px-4 py-2 text-white backdrop-blur-sm">
      <WifiOff size={14} />
      <span className="text-xs font-medium">Çevrimdışısınız — kayıtlı dersler kullanılabilir</span>
      <button onClick={() => setDismissed(true)} className="ml-2 rounded p-0.5 hover:bg-white/20">
        <X size={12} />
      </button>
    </div>
  );
}
