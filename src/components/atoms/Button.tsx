"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "card" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-button-active)] text-white hover:bg-[var(--color-buy-now-hover)] active:bg-[var(--color-button-active)] shadow-lg hover:shadow-xl",
  secondary:
    "bg-[var(--color-pack-20-bg)] text-white hover:bg-[var(--color-pack-20-hover)] active:bg-[var(--color-button-active)]",
  outline:
    "bg-[var(--color-button-bg)] border-2 border-[var(--color-button-bg)] text-white hover:bg-[var(--color-button-hover)] hover:border-[var(--color-button-hover)] active:bg-[var(--color-button-active)] active:border-[var(--color-button-active)]",
  card:
    "bg-[var(--color-card-button)] text-white hover:bg-[var(--color-primary-dark)] active:bg-[var(--color-button-active)]",
  whatsapp:
    "bg-[var(--color-whatsapp-bg)] text-[var(--color-whatsapp-text)] hover:bg-[var(--color-button-hover)] active:bg-[var(--color-button-active)] active:text-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 type-montserrat-regular-22pt",
  md: "px-6 py-3 type-montserrat-regular-22pt",
  lg: "px-8 py-4 type-montserrat-regular-22pt",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`
          rounded-xl transition-all duration-75 cursor-pointer
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
