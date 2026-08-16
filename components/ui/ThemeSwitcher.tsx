"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Check } from "lucide-react";
import { useTheme, Theme } from "@/src/components/providers/ThemeProvider";
import { cn } from "@/src/lib/utils";

const themes: { id: Theme; name: string; colors: string[] }[] = [
  {
    id: "ocean",
    name: "اقیانوس",
    colors: ["#3b82f6", "#06b6d4", "#8b5cf6"],
  },
  {
    id: "sunset",
    name: "غروب",
    colors: ["#8b5cf6", "#ec4899", "#f97316"],
  },
  {
    id: "forest",
    name: "جنگل",
    colors: ["#10b981", "#14b8a6", "#06b6d4"],
  },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed left-6 bottom-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 left-0 glass rounded-2xl p-3 min-w-[200px] shadow-2xl"
          >
            <p className="text-xs text-foreground-muted mb-3 px-2">انتخاب تم</p>
            <div className="flex flex-col gap-1">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "flex items-center justify-between px-3 py-2.5 rounded-xl",
                    "hover:bg-card-hover transition-colors",
                    "text-sm text-foreground",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-1.5">
                      {t.colors.map((color, i) => (
                        <div
                          key={i}
                          className="w-4 h-4 rounded-full border-2 border-background"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <span>{t.name}</span>
                  </div>
                  {theme === t.id && <Check className="w-4 h-4 text-accent" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "w-14 h-14 rounded-full",
          "bg-card border border-border",
          "flex items-center justify-center",
          "text-accent shadow-lg",
          "hover:shadow-2xl transition-shadow",
          "glow-hover",
        )}
      >
        <Palette className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
