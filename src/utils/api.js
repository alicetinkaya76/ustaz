// Claude API utility — conversation history, caching, .env support

const CACHE_PREFIX = "ustaz-cache-";

const BASE_SYSTEM = `Sen sabırlı bir Kur'an Arapçası öğretmenisin. Adın Ustaz.
Kullanıcı Türkçe soruyor. Kur'an Arapçası hakkında her türlü soruyu cevaplayabilirsin:
- Kelime anlamları ve kökleri
- Gramer kuralları (sarf ve nahiv)
- Ayet çözümlemeleri
- Kalıp ve vezin açıklamaları
- Türkçe-Arapça kelime bağlantıları

Kurallar:
1. Cevapları Türkçe ver, Arapça terimleri parantez içinde göster
2. Basit ve anlaşılır ol, jargondan kaçın
3. Örneklerle açıkla — mümkünse Kur'an'dan
4. Yanlış bilgi vermektense "emin değilim" de
5. Kur'anî Arapça ile Modern Standart Arapça farkını belirt (gerektiğinde)
6. Cevapları kısa tut (3-5 paragraf max)`;

function buildSystemPrompt(context) {
  if (!context) return BASE_SYSTEM;
  return `${BASE_SYSTEM}\n\n[DERS BAĞLAMI: Kullanıcı şu ayetlerle çalışıyor: ${context}]`;
}

function getFromCache(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function setToCache(key, data) {
  try { localStorage.setItem(key, JSON.stringify(data)); } catch {}
}

// Load API key: .env first, then localStorage
function getApiKey(providedKey) {
  if (providedKey) return providedKey;
  try {
    const envKey = import.meta.env?.VITE_ANTHROPIC_API_KEY;
    if (envKey) return envKey;
  } catch {}
  return "";
}

/**
 * @param {Array|string} messagesOrText - Array of {role, content} or single string
 * @param {string} apiKey
 * @param {string} type - "chat" | "word" | "verse"
 * @param {string} context - Current lesson context for system prompt
 */
export async function askUstaz(messagesOrText, apiKey, type = "chat", context = "") {
  const resolvedKey = getApiKey(apiKey);

  // Build messages array
  let messages;
  if (Array.isArray(messagesOrText)) {
    messages = messagesOrText;
  } else {
    messages = [{ role: "user", content: messagesOrText }];
  }

  // Cache check for single non-chat queries
  if (type !== "chat" && messages.length === 1) {
    const cacheKey = `${CACHE_PREFIX}${type}-${messages[0].content?.slice(0, 100)}`;
    const cached = getFromCache(cacheKey);
    if (cached) return { text: cached, fromCache: true };
  }

  if (!resolvedKey) {
    return { text: "API anahtarı gerekli. Ayarlar'dan Claude API anahtarını gir.", error: true };
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": resolvedKey,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1500,
        system: buildSystemPrompt(context),
        messages,
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error?.message || `API error: ${response.status}`);
    }

    const data = await response.json();
    const text = data.content.filter((b) => b.type === "text").map((b) => b.text).join("\n");

    // Cache non-chat single responses
    if (type !== "chat" && messages.length === 1) {
      const cacheKey = `${CACHE_PREFIX}${type}-${messages[0].content?.slice(0, 100)}`;
      setToCache(cacheKey, text);
    }

    return { text, fromCache: false };
  } catch (err) {
    return { text: `Hata: ${err.message}`, error: true };
  }
}

export function clearCache() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith(CACHE_PREFIX)) keys.push(key);
  }
  keys.forEach((k) => localStorage.removeItem(k));
  return keys.length;
}
