"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heading } from "../atoms/Heading";

export function EnjoySection() {
  return (
    <section className="py-16 md:py-24 bg-[#F6EFE7] relative overflow-hidden">
      {/* Background decorative image */}
    
      <div className="relative max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Heading as="h2" variant="title" className="text-secondary">
            Mas formas de disfrutar Rivolia
          </Heading>
        </motion.div>

        <div className="px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-64 sm:h-80 md:h-96 lg:h-[600px] overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to top, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to top, black 80%, transparent 100%)',
            }}
          >
            <Image
              src="/image/Sección 7 2- Más formas de disfrutar Rivolia 1_090309.png"
              alt="Preparacion de cafe con especies"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
