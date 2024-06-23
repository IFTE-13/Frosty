"use client";
import { TypewriterEffect } from "../components/ui/typewriter-effect";

export function Footer() {
  const words = [
    {
      text: "All",
    },
    {
      text: "rights",
    },
    {
      text: "reserved",
    },
    {
      text: "by",
    },
    {
      text: "Pixelize.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-start py-2">
      <TypewriterEffect
      words={words} />
    </div>
  );
}
