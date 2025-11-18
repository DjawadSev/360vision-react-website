"use client";

import React, { cloneElement, isValidElement } from "react";

import { cn } from "@/lib/utils";

type NavigationMenuProps = React.HTMLAttributes<HTMLDivElement>;

export function NavigationMenu({ className, children, ...props }: React.PropsWithChildren<NavigationMenuProps>) {
  return (
    <div className={cn("relative flex max-w-max items-center justify-center", className)} {...props}>
      {children}
    </div>
  );
}

type NavigationMenuListProps = React.HTMLAttributes<HTMLUListElement>;

export function NavigationMenuList({ className, children, ...props }: React.PropsWithChildren<NavigationMenuListProps>) {
  return (
    <ul
      className={cn("group flex flex-1 list-none items-center justify-center gap-1 rounded-md p-1 text-white", className)}
      {...props}
    >
      {children}
    </ul>
  );
}

type NavigationMenuItemProps = React.LiHTMLAttributes<HTMLLIElement>;

export function NavigationMenuItem({ className, children, ...props }: React.PropsWithChildren<NavigationMenuItemProps>) {
  return (
    <li className={cn("list-none", className)} {...props}>
      {children}
    </li>
  );
}

type NavigationMenuLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  active?: boolean;
  asChild?: boolean;
};

export function NavigationMenuLink({ className, active, asChild, children, ...props }: React.PropsWithChildren<NavigationMenuLinkProps>) {
  const baseClasses = cn(
    "inline-flex select-none items-center justify-center rounded-md text-sm font-medium outline-none",
    active && "ring-1 ring-[var(--brand-red)]",
    className
  );

  if (asChild && isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return cloneElement(child, {
      ...(props as Record<string, unknown>),
      className: cn(child.props.className, baseClasses),
    });
  }

  return (
    <a className={baseClasses} {...props}>
      {children}
    </a>
  );
}
