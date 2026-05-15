"use client";

import { motion } from "framer-motion";
import { ProductImage } from "../atoms/ProductImage";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  featured?: boolean;
  delay?: number;
}

export function ProductCard({
  name,
  description,
  image,
  featured = false,
  delay = 0,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -8 }}
      className={`
        relative flex h-full flex-col overflow-hidden rounded-lg bg-[#F6EFE7]
        border border-secondary/20 shadow-lg shadow-(--color-secondary)/10
        ${featured ? "ring-2 ring-primary" : ""}
      `}
    >
      {featured && (
        <div className="absolute top-3 right-3 z-10 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow-md">
          Mas elegido
        </div>
      )}
      <div className="relative aspect-square bg-linear-to-b from-[#EFE2D4] to-[#CFC3B5] p-4">
        <ProductImage
          src={image}
          alt={name}
          width={300}
          height={300}
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 text-center">
        <Heading
          as="h3"
          variant="section"
          className="text-secondary mb-2 type-cinzel-regular-20pt"
          animate={false}
        >
          {name}
        </Heading>
        <Text
          variant="small"
          className="mb-5 text-secondary/80 type-montserrat-light-18pt"
        >
          {description}
        </Text>
        <Button
          variant="card"
          size="sm"
          fullWidth
          className="mt-auto rounded-full text-primary type-montserrat-regular-22pt"
        >
          Comprar
        </Button>
      </div>
    </motion.div>
  );
}
