"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heading } from "../atoms/Heading";
import { ComparisonColumn } from "../molecules/ComparisonColumn";
import { comparisonData } from "@/lib/constants";

export function ComparisonSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-cream)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Heading as="h2" variant="title" className="text-[var(--color-primary)]">
            Rivolia vs Cafe Instantaneo
          </Heading>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Rivolia Column */}
          <ComparisonColumn
            title={comparisonData.rivolia.title}
            subtitle={comparisonData.rivolia.subtitle}
            features={comparisonData.rivolia.features}
            isPositive={true}
            delay={0}
          />

          {/* Center Images */}
          <div className="hidden lg:flex flex-col gap-8 items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-48 h-48"
            >
              <Image
                src="/image/Sección 6  1- Rivolia vs Café instantáneo_082839.png"
                alt="Rivolia cafe filtrado"
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative w-48 h-48"
            >
              <Image
                src="/image/Sección 6 2- Rivolia vs Café instantáneo_082854.png"
                alt="Cafe instantaneo"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Instant Coffee Column */}
          <ComparisonColumn
            title={comparisonData.instantaneo.title}
            features={comparisonData.instantaneo.features}
            isPositive={false}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
