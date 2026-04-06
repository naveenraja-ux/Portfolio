"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

interface LayoutTextFlipProps {
  text: string;
  words: string[];
  className?: string;
  delay?: number;
}

export const LayoutTextFlip = ({
  text,
  words,
  className,
  delay = 3000,
}: LayoutTextFlipProps) => {
  const [index, setIndex] = useState(0);
  const { theme } = useTheme();
  
  const highlightColor = theme === "dark" ? "white" : "#09090b";

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, delay);
    return () => clearInterval(interval);
  }, [words.length, delay]);

  return (
    <div className={cn("flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 md:gap-4", className)}>
      <span className="text-foreground shrink-0 whitespace-nowrap">{text}</span>
      <div className="relative h-[1.2em] overflow-hidden min-w-[280px] sm:min-w-[200px] md:min-w-[450px] text-center sm:text-left translate-y-0 sm:translate-y-[5px]">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 block font-bold whitespace-nowrap bg-gradient-to-r from-[#0B9EF5] via-[var(--highlight)] to-[#0B9EF5] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
            style={{ "--highlight": highlightColor } as any}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};
