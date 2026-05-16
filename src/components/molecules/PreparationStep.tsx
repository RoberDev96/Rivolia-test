"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heading } from "../atoms/Heading";

interface PreparationStepProps {
  step: number;
  title: string;
  image: string;
  delay?: number;
}

export function PreparationStep({
  step,
  title,
  image,
  delay = 0,
}: PreparationStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative w-48 h-48 md:w-64 md:h-64 mb-4 overflow-hidden"
        style={{
          maskImage: "radial-gradient(circle, black 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle, black 60%, transparent 100%)",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 0.2 }}
        className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-3"
      >
        {step}
      </motion.div>
      <Heading
        as="h4"
        variant="section"
        className="text-black"
        animate={false}
      >
        {title}
      </Heading>
    </motion.div>
  );
}
