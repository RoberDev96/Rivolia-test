"use client";

import { motion } from "framer-motion";
import { Text } from "../atoms/Text";

export function Footer() {
  return (
    <footer className="py-8 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-center md:text-left">
            <span className="text-primary type-cinzel-bold-20pt">
              RIVOLIA
            </span>
            <Text variant="small" className="text-gray-light mt-1">
              Cafe Premium
            </Text>
          </div>

          <Text variant="small" className="text-gray text-center">
            2026 Rivolia. Todos los derechos reservados.
          </Text>
        </motion.div>
      </div>
    </footer>
  );
}
