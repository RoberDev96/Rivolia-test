"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";

export function QualitySection() {
  return (
    <section id="quality" className="py-16 md:py-24 bg-[#F6EFE7] relative overflow-hidden">
      {/* Decorative image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-90 hidden lg:block">
        <Image
          src="/image/Sección 5 1- No es café rápido..._075012.png"
          alt="foto_cafe"
          fill
          className="object-contain object-right"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            as="h2"
            variant="display"
            className="text-secondary mb-4"
          >
            No es cafe rapido.
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Heading
            as="h2"
            variant="display"
            className="text-secondary mb-8"
          >
            Es cafe bien hecho, rapido.
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Text variant="lead" className="text-secondary !type-cinzel-regular-30pt">
            Como el cafe que tomarias en casa
            <br />
            pero en cualquier lugar.
          </Text>
        </motion.div>
      </div>
    </section>
  );
}
