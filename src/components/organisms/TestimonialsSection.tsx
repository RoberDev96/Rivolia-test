"use client";

import { motion } from "framer-motion";
import { Heading } from "../atoms/Heading";
import { TestimonialCard } from "../molecules/TestimonialCard";
import { testimonials } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Heading
            as="h2"
            variant="title"
            className="text-primary type-cinzel-bold-18pt"
          >
            Lo que dicen nuestros clientes
          </Heading>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
