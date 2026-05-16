"use client";

import { motion } from "framer-motion";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#BFAE9B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="hidden sm:block h-px flex-1 bg-primary/45" />
            <Heading as="h2" variant="title" className="text-primary">
              Que es Rivolia?
            </Heading>
            <span className="hidden sm:block h-px flex-1 bg-primary/45" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <Text variant="lead" className="text-secondary mb-4">
            La forma mas simple de tomar buen cafe en cualquier lugar.
          </Text>
          <Text variant="body" className="text-secondary">
            Cafe filtrado real, en un formato practico.
            <br />
            Diferentes formatos para cada momento.
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <Heading
            as="h3"
            variant="title"
            className="text-primary mb-6"
          >
            Beneficios
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-3"
        >
          <Text variant="body" className="text-secondary">
            Perfecto para oficinas sin cafetera
          </Text>
          <Text variant="body" className="text-secondary">
            Ideal para viajes y carretera
          </Text>
          <Text variant="body" className="text-secondary">
            Solucion rapida sin sacrificar el sabor
          </Text>
        </motion.div>
      </div>
    </section>
  );
}
