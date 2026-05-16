"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heading } from "../atoms/Heading";
import { PreparationStep } from "../molecules/PreparationStep";
import { preparationSteps } from "@/lib/constants";

export function PreparationSection() {
  return (
    <section id="preparation" className="py-16 md:py-24 bg-cream-dark relative overflow-hidden">
      {/* Background decorative image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/image/Sección 7 1- Más formas de disfrutar Rivolia 1_090258.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="hidden sm:block h-px flex-1 bg-white/45" />
            <Heading
              as="h2"
              className="text-white type-cinzel-bold-36pt"
            >
              Mas facil que preparar te
            </Heading>
            <span className="hidden sm:block h-px flex-1 bg-white/45" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <Heading as="h3" className="text-white type-cinzel-bold-25pt">
            Cafe filtrado, fresco y listo.
          </Heading>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {preparationSteps.map((step, index) => (
            <PreparationStep
              key={step.step}
              step={step.step}
              title={step.title}
              image={step.image}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
