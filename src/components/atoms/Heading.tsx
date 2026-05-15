"use client";

import { motion } from "framer-motion";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";
type HeadingVariant = "hero" | "display" | "title" | "subtitle" | "section";

interface HeadingProps {
  as?: HeadingLevel;
  variant?: HeadingVariant;
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

const variantStyles: Record<HeadingVariant, string> = {
  hero: "type-montserrat-bold-61pt",
  display: "type-cinzel-bold-44pt",
  title: "type-cinzel-bold-36pt",
  subtitle: "type-cinzel-bold-25pt",
  section: "type-cinzel-regular-20pt",
};

const motionHeadings = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
};

export function Heading({
  as: Tag = "h2",
  variant = "title",
  children,
  className = "",
  animate = true,
}: HeadingProps) {
  if (animate) {
    const MotionTag = motionHeadings[Tag];

    return (
      <MotionTag
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`${variantStyles[variant]} ${className} text-balance`}
      >
        {children}
      </MotionTag>
    );
  }

  return <Tag className={`${variantStyles[variant]} ${className} text-balance`}>{children}</Tag>;
}
