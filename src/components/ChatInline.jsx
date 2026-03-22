import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2, Sparkles } from "lucide-react";
import { askUstaz } from "../utils/api";

const QUICK_QUESTIONS = [
  "Bu ayetteki gramer yapısı nedir?",
  "Bu kelimenin kökü ne anlama gelir?",
  "Buradaki i'rabı açıklar mısın?",
  "Türkçe'de bu kökten gelen kelimeler var mı?",
];

export default function ChatInline({ apiKey, context = "", initialMessage = null }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const initialSent = useRef(false);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  // Handle initial message from "Ask Ustaz" button in WordPopup
  useEffect(() => {
    if (initialMessage && !initialSent.current) {
      initialSent.current = true;
      handleSend(initialMessage);
    }
  }, [initialMessage]);

  async function handleSend(text) {
    const msg = text || input.trim();
    if (!msg || loading) return;

    const userMsg = { role: "user", content: msg };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    // Build conversation history for API (limit to last 15 messages)
    const historyForApi = newMessages.slice(-15).map((m) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: m.content || m.text,
    }));

    const result = await askUstaz(historyForApi, apiKey, "chat", context);

    const assistantMsg = {
      role: "assistant",
      content: result.text,
      text: result.text,
      fromCache: result.fromCache,
      error: result.error,
    };
    setMessages((prev) => [...prev, assistantMsg]);
    setLoading(false);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="card">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-ustaz-gold/10">
          <Bot size={14} className="text-ustaz-gold" />
        </div>
        <h3 className="text-sm font-semibold text-ustaz-turkish/80">Ustaz'a Sor</h3>
        <span className="text-[10px] text-ustaz-turkish/30">Claude ile</span>
      </div>

      {messages.length > 0 && (
        <div ref={scrollRef} className="mb-3 max-h-80 space-y-3 overflow-y-auto rounded-lg bg-ustaz-bg/50 p-3">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : ""}`}>
              {msg.role === "assistant" && (
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ustaz-gold/10">
                  <Sparkles size={12} className="text-ustaz-gold" />
                </div>
              )}
              <div className={`max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                msg.role === "user" ? "bg-ustaz-gold/10 text-ustaz-turkish" : msg.error ? "bg-red-500/10 text-red-300" : "bg-ov/5 text-ustaz-turkish/80"
              }`}>
                {(msg.content || msg.text || "").split("\n").map((line, j) => (
                  <p key={j} className={j > 0 ? "mt-1.5" : ""}>{line}</p>
                ))}
                {msg.fromCache && <span className="mt-1 block text-[10px] text-ustaz-turkish/20">cache'ten</span>}
              </div>
              {msg.role === "user" && (
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ov/5">
                  <User size={12} className="text-ustaz-turkish/40" />
                </div>
              )}
            </div>
          ))}
          {loading && (
            <div className="flex items-center gap-2 text-xs text-ustaz-turkish/30">
              <Loader2 size={14} className="animate-spin text-ustaz-gold" /> Ustaz düşünüyor...
            </div>
          )}
        </div>
      )}

      {messages.length === 0 && (
        <div className="mb-3 flex flex-wrap gap-1.5">
          {QUICK_QUESTIONS.map((q, i) => (
            <button key={i} onClick={() => handleSend(q)}
              className="rounded-full border border-ov/5 bg-ov/[0.02] px-3 py-1.5 text-[11px] text-ustaz-turkish/40 transition hover:border-ustaz-gold/20 hover:bg-ov/5 hover:text-ustaz-turkish/60">
              {q}
            </button>
          ))}
        </div>
      )}

      <div className="flex gap-2">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown}
          placeholder="Bir soru sor..." disabled={loading || !apiKey}
          className="flex-1 rounded-lg border border-ov/5 bg-ustaz-bg/50 px-3 py-2.5 text-sm text-ustaz-turkish placeholder:text-ustaz-turkish/20 focus:border-ustaz-gold/30 focus:outline-none disabled:opacity-40" />
        <button onClick={() => handleSend()} disabled={loading || !input.trim() || !apiKey}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ustaz-gold/10 text-ustaz-gold transition hover:bg-ustaz-gold/20 disabled:opacity-30">
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
        </button>
      </div>

      {!apiKey && <p className="mt-2 text-[11px] text-red-400/60">Sohbet için Ayarlar'dan Claude API anahtarı gerekli.</p>}
    </div>
  );
}
