"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type IconName = "clock" | "truck" | "fire" | "check" | "x";

interface IconProps {
  name: IconName;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const iconUrls: Record<IconName, string> = {
  clock: "/image/Iconos-04_074457.png",
  truck: "/image/Iconos-03_074455.png",
  fire: "/image/Iconos-02_074458.png",
  check: "",
  x: "",
};

const sizeClasses = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-12 h-12",
};

export function Icon({ name, size = "md", className = "" }: IconProps) {
  // For check and x, use SVG
  if (name === "check") {
    return (
      <motion.svg
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className={`${sizeClasses[size]} text-[var(--color-primary)] ${className}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </motion.svg>
    );
  }

  if (name === "x") {
    return (
      <motion.svg
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className={`${sizeClasses[size]} text-[var(--color-gray)] ${className}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </motion.svg>
    );
  }

  const iconUrl = iconUrls[name];
  if (!iconUrl) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`${sizeClasses[size]} relative ${className}`}
    >
      <Image src={iconUrl} alt={name} fill className="object-contain" />
    </motion.div>
  );
}
