import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Accessibility, X, Type, Contrast, Eye, Link as LinkIcon, RotateCcw, ChevronUp } from "lucide-react";

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.style.fontSize = `${fontSize}%`;
    
    if (highContrast) {
      html.classList.add("high-contrast");
    } else {
      html.classList.remove("high-contrast");
    }

    if (grayscale) {
      html.classList.add("grayscale-mode");
    } else {
      html.classList.remove("grayscale-mode");
    }

    if (highlightLinks) {
      html.classList.add("highlight-links");
    } else {
      html.classList.remove("highlight-links");
    }
  }, [fontSize, highContrast, grayscale, highlightLinks]);

  const reset = () => {
    setFontSize(100);
    setHighContrast(false);
    setGrayscale(false);
    setHighlightLinks(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-24 left-6 z-50 w-12 h-12 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-700 transition-all"
            aria-label="חזרה למעלה"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="תפריט נגישות"
      >
        {isOpen ? <X size={28} /> : <Accessibility size={28} />}
      </button>

      {/* Accessibility Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.95 }}
            className="fixed bottom-24 left-6 z-50 w-72 bg-white rounded-[32px] shadow-2xl border border-slate-100 p-6 overflow-hidden"
            dir="rtl"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Accessibility size={20} className="text-blue-600" />
              תפריט נגישות
            </h3>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {/* Font Size */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-sm flex items-center gap-2">
                    <Type size={16} />
                    גודל גופן
                  </span>
                  <span className="text-xs font-mono">{fontSize}%</span>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setFontSize(prev => Math.max(80, prev - 10))}
                    className="flex-1 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-100"
                  >
                    א-
                  </button>
                  <button 
                    onClick={() => setFontSize(prev => Math.min(150, prev + 10))}
                    className="flex-1 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-100"
                  >
                    א+
                  </button>
                </div>
              </div>

              {/* Toggles */}
              <button 
                onClick={() => setHighContrast(!highContrast)}
                className={`w-full p-4 rounded-2xl border flex items-center gap-3 transition-all ${
                  highContrast ? "bg-blue-600 text-white border-blue-600" : "bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <Contrast size={18} />
                <span className="font-bold text-sm">ניגודיות גבוהה</span>
              </button>

              <button 
                onClick={() => setGrayscale(!grayscale)}
                className={`w-full p-4 rounded-2xl border flex items-center gap-3 transition-all ${
                  grayscale ? "bg-blue-600 text-white border-blue-600" : "bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <Eye size={18} />
                <span className="font-bold text-sm">גווני אפור</span>
              </button>

              <button 
                onClick={() => setHighlightLinks(!highlightLinks)}
                className={`w-full p-4 rounded-2xl border flex items-center gap-3 transition-all ${
                  highlightLinks ? "bg-blue-600 text-white border-blue-600" : "bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <LinkIcon size={18} />
                <span className="font-bold text-sm">הדגשת קישורים</span>
              </button>

              {/* Reset */}
              <button 
                onClick={reset}
                className="w-full p-4 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center gap-2 hover:bg-slate-200 transition-all font-bold text-sm"
              >
                <RotateCcw size={16} />
                איפוס הגדרות
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
