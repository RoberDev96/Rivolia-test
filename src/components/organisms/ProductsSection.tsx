"use client";

import { motion } from "framer-motion";
import { Heading } from "../atoms/Heading";
import { ProductCard } from "../molecules/ProductCard";
import { products } from "@/lib/constants";

export function ProductsSection() {
  return (
    <section className="py-16 md:py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Heading as="h2" variant="title" className="text-primary">
            Elige como disfrutar Rivolia
          </Heading>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              featured={"featured" in product ? product.featured : false}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
