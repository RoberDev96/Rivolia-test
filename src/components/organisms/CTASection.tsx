"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-secondary-dark relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heading
              as="h2"
              variant="title"
              className="text-white mb-4"
            >
              No hay mejor momento para probar Rivolia.
            </Heading>
            <Text className="text-white mb-8">
              Descubre la experiencia del cafe filtrado real, sin complicaciones.
            </Text>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">Comprar ahora</Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Comprar pack 20
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex items-center gap-2"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
              <p className="text-white type-cinzel-bold-20pt">
                Ultimos packs disponibles
              </p>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-md mx-auto aspect-square"
            >
              <Image
                src="/image/Sección_9_1_No_hay_mejor_momento_para_probar_Rivolia_053728.png"
                alt="Rivolia cafe premium"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
