"use client";

import React, { cloneElement, createContext, isValidElement, useContext, useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";

type PopoverContextValue = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const PopoverContext = createContext<PopoverContextValue | null>(null);

function usePopoverContext(component: string) {
  const context = useContext(PopoverContext);
  if (!context) {
    throw new Error(`<${component}> must be used within <Popover>.`);
  }
  return context;
}

type PopoverProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
};

export function Popover({ open, onOpenChange, children }: PopoverProps) {
  const contextValue = useMemo(() => ({ open, onOpenChange }), [open, onOpenChange]);
  return <PopoverContext.Provider value={contextValue}>{children}</PopoverContext.Provider>;
}

type PopoverTriggerProps = React.HTMLAttributes<HTMLElement> & {
  asChild?: boolean;
};

export function PopoverTrigger({ children, asChild, ...props }: React.PropsWithChildren<PopoverTriggerProps>) {
  const { open, onOpenChange } = usePopoverContext("PopoverTrigger");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (isValidElement(children)) {
      const child = children as React.ReactElement<{ onClick?: (event: React.MouseEvent<HTMLElement>) => void }>;
      child.props.onClick?.(event);
    }
    onOpenChange(!open);
  };

  if (asChild && isValidElement(children)) {
    const child = children as React.ReactElement<Record<string, unknown>>;
    return cloneElement(child, {
      ...(props as Record<string, unknown>),
      "data-state": open ? "open" : "closed",
      onClick: handleClick,
    });
  }

  return (
    <button type="button" data-state={open ? "open" : "closed"} onClick={handleClick} {...props}>
      {children}
    </button>
  );
}

type PopoverContentProps = React.HTMLAttributes<HTMLDivElement> & {
  sideOffset?: number;
};

export function PopoverContent({ className, children, sideOffset = 8, ...props }: React.PropsWithChildren<PopoverContentProps>) {
  const { open, onOpenChange } = usePopoverContext("PopoverContent");
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open || typeof document === "undefined") return;

    const handlePointer = (event: MouseEvent) => {
      if (!contentRef.current) return;
      if (!contentRef.current.contains(event.target as Node)) {
        onOpenChange(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onOpenChange]);

  useEffect(() => {
    if (!open || !contentRef.current) return;
    const node = contentRef.current;
    const { top, left, width, height } = node.getBoundingClientRect();
    const isOffscreen = top < 0 || left < 0 || width === 0 || height === 0;
    if (isOffscreen) {
      node.style.transform = `translate(${sideOffset}px, ${sideOffset}px)`;
    }
  }, [open, sideOffset]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={contentRef}
      data-state={open ? "open" : "closed"}
      className={cn(
        "z-[20000] w-72 rounded-xl border border-white/10 bg-black/90 p-4 text-white shadow-[0_24px_80px_rgba(0,0,0,0.55)] outline-none backdrop-blur",
        className
      )}
      style={{ transformOrigin: "top left" }}
      {...props}
    >
      {children}
    </div>,
    document.body
  );
}
