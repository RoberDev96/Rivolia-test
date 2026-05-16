"use client";

import { motion } from "framer-motion";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "body" | "lead" | "small" | "caption";
  animate?: boolean;
  style?: React.CSSProperties;
}

const variantStyles = {
  body: "type-montserrat-light-24pt",
  lead: "type-montserrat-light-24pt",
  small: "type-montserrat-light-18pt",
  caption: "text-xs uppercase tracking-wider font-[family-name:var(--font-montserrat)]",
};

export function Text({
  children,
  className = "",
  variant = "body",
  animate = false,
  style,
}: TextProps) {
  if (animate) {
    return (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`${variantStyles[variant]} ${className} text-pretty`}
        style={style}
      >
        {children}
      </motion.p>
    );
  }

  return <p className={`${variantStyles[variant]} ${className} text-pretty`} style={style}>{children}</p>;
}
