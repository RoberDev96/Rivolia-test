"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heading } from "../atoms/Heading";

export function EnjoySection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-black)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Heading as="h2" variant="title" className="text-[var(--color-cream)]">
            Mas formas de disfrutar Rivolia
          </Heading>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-64 md:h-80 rounded-lg overflow-hidden"
          >
            <Image
              src="/image/Sección 7 1- Más formas de disfrutar Rivolia 1_090258.png"
              alt="Granos de cafe frescos"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-64 md:h-80 rounded-lg overflow-hidden"
          >
            <Image
              src="/image/Sección 7 2- Más formas de disfrutar Rivolia 1_090309.png"
              alt="Preparacion de cafe con especias"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
