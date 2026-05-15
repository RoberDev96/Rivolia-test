"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  author: string;
  delay?: number;
}

export function TestimonialCard({
  quote,
  author,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02 }}
      className="bg-[var(--color-secondary)] p-6 rounded-lg relative border border-[var(--color-primary)]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 0.2 }}
        className="text-6xl text-[var(--color-testimonial-icon)] absolute -top-2 left-4 font-[family-name:var(--font-cinzel)] leading-none"
      >
        &ldquo;
      </motion.div>
      <p className="text-white pl-6 pt-4 mb-4 type-cinzel-bold-20pt">
        {quote}
      </p>
      <p className="text-[var(--color-cream)] pl-6 type-cinzel-bold-18pt">
        - {author}
      </p>
    </motion.div>
  );
}
