"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";
import { FeatureItem } from "../molecules/FeatureItem";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#F6EFE7] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-[#F8F1E8] via-[#F3E8DC] to-cream" />

      <div className="relative py-4 ">
        <div className="grid lg:grid-cols-12 gap-4 items-center min-h-[80vh]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 lg:col-span-6 pl-8 lg:pl-12 mb-24"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-2"
            >
              <span className="text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                RIVOLIA
              </span>
            </motion.div>

            <Heading
              as="h1"
              variant="title"
              className="text-secondary"
              animate={false}
            >
              Cafe real. Sin maquina.
              <br />
              <span className="text-secondary">
                Sin complicaciones.
              </span>
            </Heading>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-secondary mb-4 type-cinzel-regular-23pt">
                Abre, vierte agua caliente y disfruta.
                <br />
                Asi de simple.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-1 mb-6"
            >
              <FeatureItem
                icon="fire"
                text={
                  <>
                    <strong>Ultimos packs</strong> disponibles hoy
                  </>
                }
                delay={0.6}
                className="text-[20px]!"
              />
              <FeatureItem
                icon="truck"
                text={
                  <>
                    <strong>Entrega rapida</strong> en Peru
                  </>
                }
                delay={0.7}
                className="text-[20px]!"
              />
              <FeatureItem
                icon="clock"
                text={
                  <>
                    <strong>Listo</strong> en 3 minutos
                  </>
                }
                delay={0.8}
                className="text-[20px]!"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col gap-4"
            >
              <Button size="lg" className="rounded-full w-full sm:w-auto sm:max-w-[70%]"><span className="text-2xl sm:text-4xl font-medium">
                Comprar ahora</span></Button>
              <Text variant="small" className="text-secondary text-center w-full sm:w-auto sm:max-w-[70%]">
                Desde $1 por taza
              </Text>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <div className="order-1 lg:order-2 lg:col-span-6 relative">
            <div className="relative w-full aspect-square  ">
              <Image
                src="/image/Hero de Desktop 1_054349.png"
                alt="Rivolia Cafe Premium - Cafe tostado y molido con taza de preparacion drip"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative coffee beans */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-cream to-transparent"
      />
    </section>
  );
}
