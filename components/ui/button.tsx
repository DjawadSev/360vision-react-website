import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "secondary" | "outline" | "ghost";
type ButtonSize = "default" | "sm" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  default:
    "bg-[var(--brand-red)] text-white shadow-[0_0_32px_rgba(155,11,11,0.35)] hover:bg-[var(--brand-red-bright)] focus-visible:ring-[var(--brand-red-bright)]",
  secondary:
    "bg-[var(--brand-gold)] text-black shadow-[0_10px_50px_rgba(212,175,55,0.35)] hover:bg-[#e1c25d] focus-visible:ring-[var(--brand-gold)]",
  outline:
    "border border-white/30 text-white hover:border-[var(--brand-gold)] hover:text-[var(--brand-gold)] hover:bg-white/5 focus-visible:ring-[var(--brand-gold)]",
  ghost:
    "text-white/80 hover:text-white hover:bg-white/10 focus-visible:ring-[var(--brand-red-bright)] focus-visible:ring-1",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "h-12 px-6 text-sm",
  sm: "h-10 px-4 text-sm",
  lg: "h-14 px-8 text-base",
};

export const buttonVariants = ({
  variant = "default",
  size = "default",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
} = {}) => {
  return cn(baseStyles, variantStyles[variant], sizeStyles[size]);
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
