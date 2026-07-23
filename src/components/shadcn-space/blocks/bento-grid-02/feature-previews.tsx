"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CircleStop, ChevronDown, Globe, Plus, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import {
  DropboxIcon,
  SlackIcon,
  FigmaIcon,
} from "@/components/shadcn-space/blocks/bento-grid-02/platform-icons";

const searchPhrases = [
  "Ask or search",
  "Summarize a PDF",
  "Write an email draft",
  "Find client contracts",
  "Search Slack history",
];

export function SmartWorkspacePreview() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % searchPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full translate-x-4 md:translate-x-6 rounded-xl border border-border bg-card p-3 md:p-4 shadow-xs">
      <div className="mb-6 md:mb-6 h-4 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="text-xs md:text-xs font-medium text-muted-foreground"
          >
            {searchPhrases[index]}
          </motion.p>
        </AnimatePresence>
      </div>
      <div className="flex items-center gap-1.5 md:gap-2">
        <div className="flex p-1 shrink-0 items-center justify-center rounded-full border border-border bg-background text-muted-foreground">
          <Plus className="size-3" />
        </div>
        <span className="h-4 w-px shrink-0 bg-border" />

        {/* Search Pill */}
        <div className="flex shrink-0 items-center gap-1.5 md:gap-2 rounded-full border border-border bg-background px-1.5 py-0.5 md:px-2 md:py-1 text-xs md:text-xs text-muted-foreground whitespace-nowrap h-7">
          <div className="flex items-center gap-1">
            <Search className="size-3 text-muted-foreground/70" />
            <span>search</span>
            <div className="flex items-center gap-1">
              <DropboxIcon />
              <SlackIcon />
              <FigmaIcon />
              <span className="text-[9px] md:text-[10px] text-muted-foreground/80 ml-0.5 font-medium">
                +5
              </span>
            </div>
          </div>
          <span className="h-3.5 w-px shrink-0 bg-border" />
          <ChevronDown className="size-3 text-muted-foreground/70" />
        </div>

        {/* Web Search Pill */}
        <div className="flex h-7 shrink-0 items-center gap-1 md:gap-1.5 rounded-full border border-border bg-background px-2 md:px-3 text-xs md:text-xs text-muted-foreground whitespace-nowrap">
          <Globe className="size-3 text-muted-foreground/70" />
          <span>Web search</span>
        </div>
      </div>
    </div>
  );
}

export function CollaborationPreview() {
  return (
    <div className="flex w-full translate-x-4 md:translate-x-6 items-center gap-3 rounded-xl border border-border bg-card p-3 md:p-4 shadow-xs">
      <Avatar>
        <AvatarImage
          src="https://images.shadcnspace.com/assets/profiles/rough.webp"
          alt="Oliver"
        />
        <AvatarFallback>O</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-0.5">
        <p className="text-xs text-muted-foreground">Oliver</p>
        <p className="text-xs">
          <span className="font-semibold text-blue-500">@space </span>
          <span className="text-foreground">
            pull the weekly performance report
          </span>
        </p>
      </div>
    </div>
  );
}

const waveform = [
  6, 4, 2, 10, 4, 10, 4, 4, 6, 4, 12, 4, 10, 14, 10, 16, 12, 4, 6, 4, 4, 10, 4,
  10, 4, 4, 6, 10, 6, 10, 14, 4, 14, 6, 10, 10, 6, 4, 2, 10, 4, 10,
];

export function VoiceAssistantPreview() {
  return (
    <div className="flex w-full translate-x-4 md:translate-x-6 flex-col items-center gap-3 rounded-xl border border-border bg-card p-2 pb-3 shadow-xs">
      <div className="flex h-18 w-full items-center justify-center gap-0.75 rounded-md bg-muted p-3">
        {waveform.map((h, i) => (
          <motion.span
            key={i}
            className="w-0.5 shrink-0 rounded-full bg-muted-foreground"
            initial={{ height: 3 }}
            animate={{ height: [3, h, Math.max(3, h * 0.4), h * 0.8, 3] }}
            transition={{
              duration: 0.9 + (i % 5) * 0.15,
              ease: "easeInOut",
              repeat: Infinity,
              delay: (i % 7) * 0.08,
            }}
          />
        ))}
      </div>
      <span className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-medium text-destructive">
        <CircleStop className="size-3" />
        Stop
      </span>
    </div>
  );
}
