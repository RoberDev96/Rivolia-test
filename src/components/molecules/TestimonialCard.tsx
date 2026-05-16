"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
      transition={{ duration: 0.2, delay }}
      whileHover={{ scale: 1.02 }}
      className="bg-[#F6EFE7] p-6 rounded-lg relative border border-primary "
    >
      {/* Profile image - centered at top */}
      <div className="flex justify-center mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <Image
            src="/image/profile.png"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 0.2 }}
        className="text-3x text-testimonial-icon absolute -top-2 left-4 font-(family-name:--font-cinzel) leading-none"
      >
      </motion.div>
      <p className="text-secondary text-center pt-2 mb-4 type-cinzel-bold-20pt">
          &ldquo;{quote}&rdquo; 
      </p>
      <p className="text-secondary text-center type-cinzel-bold-18pt">
        - {author}
      </p>
    </motion.div>
  );
}
