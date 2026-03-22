import { useState, useRef, useCallback } from "react";
import { Scale, Check, X, RotateCcw } from "lucide-react";
import { KNOWN_WORDS } from "../data/wazn";

// Build quiz data from KNOWN_WORDS
function buildQuizItems() {
  const entries = Object.entries(KNOWN_WORDS)
    .filter(([, v]) => v.pattern && v.pattern !== "—")
    .map(([word, info]) => ({ word, pattern: info.pattern, meaning: info.meaning, root: info.root }));

  // Shuffle and take 6 items
  const shuffled = entries.sort(() => Math.random() - 0.5).slice(0, 6);

  // Get unique patterns for these items
  const patterns = [...new Set(shuffled.map(s => s.pattern))];

  return { items: shuffled, patterns };
}

export default function VezinDragQuiz() {
  const [quiz, setQuiz] = useState(() => buildQuizItems());
  const [placed, setPlaced] = useState({}); // word → pattern
  const [checked, setChecked] = useState(false);
  const [dragging, setDragging] = useState(null);
  const [dragPos, setDragPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const dropZonesRef = useRef({});

  const unplacedItems = quiz.items.filter(i => !placed[i.word]);

  const handlePointerDown = useCallback((e, word) => {
    if (checked) return;
    e.preventDefault();
    e.target.setPointerCapture?.(e.pointerId);
    setDragging(word);
    setDragPos({ x: e.clientX, y: e.clientY });
  }, [checked]);

  const handlePointerMove = useCallback((e) => {
    if (!dragging) return;
    e.preventDefault();
    setDragPos({ x: e.clientX, y: e.clientY });
  }, [dragging]);

  const handlePointerUp = useCallback((e) => {
    if (!dragging) return;
    e.preventDefault();

    // Check which drop zone we're over
    const { clientX, clientY } = e;
    let matched = null;

    for (const [pattern, el] of Object.entries(dropZonesRef.current)) {
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom) {
        matched = pattern;
        break;
      }
    }

    if (matched) {
      setPlaced(prev => ({ ...prev, [dragging]: matched }));
    }

    setDragging(null);
  }, [dragging]);

  function removePlacement(word) {
    if (checked) return;
    setPlaced(prev => {
      const next = { ...prev };
      delete next[word];
      return next;
    });
  }

  function handleCheck() {
    setChecked(true);
  }

  function handleRestart() {
    setQuiz(buildQuizItems());
    setPlaced({});
    setChecked(false);
    setDragging(null);
  }

  const allPlaced = Object.keys(placed).length === quiz.items.length;
  const correctCount = checked ? quiz.items.filter(i => placed[i.word] === i.pattern).length : 0;

  return (
    <div className="space-y-4" ref={containerRef}
      onPointerMove={handlePointerMove} onPointerUp={handlePointerUp}
      style={{ touchAction: "none" }}>

      {/* Header */}
      <div className="flex items-center gap-2">
        <Scale size={14} className="text-purple-400" />
        <p className="text-[10px] font-semibold uppercase tracking-wider text-ustaz-turkish/40">
          Vezin Sürükle & Bırak
        </p>
      </div>

      {/* Instructions */}
      <p className="text-xs text-ustaz-turkish/50">
        Kelimeleri doğru kalıba sürükleyip bırakın.
      </p>

      {/* Drop zones (patterns) */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {quiz.patterns.map(pattern => {
          const itemsInZone = quiz.items.filter(i => placed[i.word] === pattern);
          return (
            <div key={pattern}
              ref={el => { dropZonesRef.current[pattern] = el; }}
              className={`min-h-[80px] rounded-xl border-2 border-dashed p-2.5 transition ${
                dragging ? "border-purple-400/30 bg-purple-400/[0.03]" : "border-ov/10 bg-ov/[0.02]"
              }`}>
              <p className="arabic-text text-center text-sm text-purple-400/70 mb-2">{pattern}</p>
              <div className="space-y-1">
                {itemsInZone.map(item => {
                  let chipStyle = "bg-ov/[0.06] border-ov/10";
                  if (checked) {
                    chipStyle = item.pattern === pattern
                      ? "bg-pos-fil/[0.08] border-pos-fil/30"
                      : "bg-red-400/[0.08] border-red-400/30";
                  }
                  return (
                    <button key={item.word}
                      onClick={() => removePlacement(item.word)}
                      className={`flex w-full items-center justify-between rounded-lg border px-2 py-1.5 transition ${chipStyle}`}>
                      <span className="arabic-text text-sm text-ustaz-arabic">{item.word}</span>
                      {checked && (
                        item.pattern === pattern
                          ? <Check size={12} className="text-pos-fil" />
                          : <X size={12} className="text-red-400" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Draggable items */}
      {unplacedItems.length > 0 && (
        <div className="rounded-xl border border-ov/[0.06] bg-ov/[0.02] p-3">
          <p className="text-[10px] text-ustaz-turkish/30 mb-2">Sürükle:</p>
          <div className="flex flex-wrap gap-2">
            {unplacedItems.map(item => (
              <div key={item.word}
                onPointerDown={(e) => handlePointerDown(e, item.word)}
                className={`cursor-grab rounded-xl border border-purple-400/20 bg-purple-400/[0.06] px-3 py-2 select-none transition active:scale-95 ${
                  dragging === item.word ? "opacity-30" : ""
                }`}>
                <span className="arabic-text text-sm text-ustaz-arabic block">{item.word}</span>
                <span className="text-[10px] text-ustaz-turkish/40">{item.meaning}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Floating drag indicator */}
      {dragging && (
        <div className="fixed pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-purple-400/40 bg-ustaz-card/95 px-3 py-2 shadow-xl backdrop-blur"
          style={{ left: dragPos.x, top: dragPos.y }}>
          <span className="arabic-text text-sm text-ustaz-gold">{dragging}</span>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2">
        {!checked && allPlaced && (
          <button onClick={handleCheck}
            className="btn-primary flex flex-1 items-center justify-center gap-2 text-sm">
            <Check size={14} /> Kontrol Et
          </button>
        )}
        {checked && (
          <div className="flex w-full items-center justify-between">
            <p className="text-sm text-ustaz-turkish/60">
              {correctCount}/{quiz.items.length} doğru
              {correctCount === quiz.items.length ? " 🎉" : ""}
            </p>
            <button onClick={handleRestart}
              className="btn-secondary flex items-center gap-2 text-sm">
              <RotateCcw size={14} /> Tekrar
            </button>
          </div>
        )}
      </div>

      {/* Show correct answers after check */}
      {checked && correctCount < quiz.items.length && (
        <div className="rounded-xl border border-ov/[0.06] bg-ov/[0.02] p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-ustaz-turkish/30 mb-2">Doğru eşleşmeler:</p>
          <div className="space-y-1">
            {quiz.items.filter(i => placed[i.word] !== i.pattern).map(item => (
              <div key={item.word} className="flex items-center gap-2 text-xs text-ustaz-turkish/50">
                <span className="arabic-text text-sm text-ustaz-arabic">{item.word}</span>
                <span>→</span>
                <span className="arabic-text text-sm text-purple-400">{item.pattern}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
