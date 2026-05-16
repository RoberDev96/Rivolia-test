"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heading } from "../atoms/Heading";
import { ComparisonColumn } from "../molecules/ComparisonColumn";
import { comparisonData } from "@/lib/constants";


export function ComparisonSection() {
  return (
    <section id="comparison" className="py-16 md:py-24 bg-cream relative overflow-hidden px-2.5">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="hidden sm:block h-px flex-1 bg-primary/45" />
            <Heading as="h2" variant="title" className="text-primary">
              Rivolia vs Cafe Instantaneo
            </Heading>
            <span className="hidden sm:block h-px flex-1 bg-primary/45" />
          </div>
        </motion.div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-[-70] top-25 h-full w-64 md:w-80 lg:w-100 opacity-50">
            <Image
              src="/image/Sección 6  1- Rivolia vs Café instantáneo_082839.png"
              alt="Rivolia cafe filtrado"
              fill
              className="object-contain object-left"
            />
          </div>
          
          <div className="absolute right-[-70] top-25 h-full w-64 md:w-80 lg:w-100 opacity-50">
            <Image
              src="/image/Sección 6 2- Rivolia vs Café instantáneo_082854.png"
              alt="Cafe instantaneo"
              fill
              className="object-contain object-right"
            />
          </div>
        </div>

        <div className="flex justify-center  items-start relative z-20">
          <div className="flex justify-center">
            <ComparisonColumn
              title={comparisonData.rivolia.title}
              subtitle={comparisonData.rivolia.subtitle}
              features={comparisonData.rivolia.features}
              isPositive={true}
              delay={0}
            />
          </div>

          <div className="flex justify-center">
            <ComparisonColumn
              title={comparisonData.instantaneo.title}
              features={comparisonData.instantaneo.features}
              isPositive={false}
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
