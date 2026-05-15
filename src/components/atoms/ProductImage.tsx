"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  animate?: boolean;
  width?: number;
  height?: number;
}

export function ProductImage({
  src,
  alt,
  className = "",
  priority = false,
  animate = true,
  width = 400,
  height = 400,
}: ProductImageProps) {
  const imageElement = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={`object-contain ${className}`}
    />
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
        className="relative"
      >
        {imageElement}
      </motion.div>
    );
  }

  return <div className="relative">{imageElement}</div>;
}
