"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { AudioLines, Radar, Sparkles } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-white" />,
  title = "Featured",
  description = "Cinematic stack card",
  date = "Just now",
  iconClassName = "",
  titleClassName = "",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-40 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-[22px] border border-white/15 bg-gradient-to-br from-white/5 via-black/50 to-black/80 px-5 py-4 text-white/80 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-sm",
        "transition-all duration-700 after:absolute after:-right-2 after:top-[-8%] after:h-[120%] after:w-[18rem] after:bg-gradient-to-l after:from-black/80 after:via-transparent after:to-transparent after:content-[''] hover:border-white/30 hover:bg-white/10 [&>*]:flex [&>*]:items-center [&>*]:gap-3",
        className
      )}
    >
      <div>
        <span className={cn("relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-red)]/30", iconClassName)}>{icon}</span>
        <p className={cn("text-lg font-semibold text-white", titleClassName)}>{title}</p>
      </div>
      <p className="text-base text-white/85">{description}</p>
      <p className="text-sm text-white/50">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      icon: <AudioLines className="size-4 text-[var(--brand-gold)]" />,
      title: "Latest signal",
      description: "Cutting-edge drops",
      date: "Today",
      iconClassName: "bg-[var(--brand-red)]/25 text-[var(--brand-gold)]",
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-full before:h-full before:rounded-[22px] before:border before:border-white/10 before:bg-black/40 before:content-[''] before:left-0 before:top-0 before:opacity-100 before:transition-opacity before:duration-700 grayscale hover:before:opacity-0 hover:grayscale-0",
    },
    {
      icon: <Sparkles className="size-4 text-white" />,
      title: "Trending brief",
      description: "Launch playbooks",
      date: "2 days ago",
      className:
        "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-10 before:absolute before:w-full before:h-full before:rounded-[22px] before:border before:border-white/10 before:bg-black/40 before:content-[''] before:left-0 before:top-0 before:opacity-100 before:transition-opacity before:duration-700 grayscale hover:before:opacity-0 hover:grayscale-0",
    },
    {
      icon: <Radar className="size-4 text-white/80" />,
      title: "Dispatch",
      description: "Just booked a discovery session",
      date: "Just now",
      iconClassName: "bg-[var(--brand-gold)]/20 text-[var(--brand-gold)]",
      className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}
