"use client";

import { motion } from "framer-motion";
import { Icon } from "../atoms/Icon";
import { Text } from "../atoms/Text";

interface FeatureItemProps {
  icon: "clock" | "truck" | "fire";
  text: React.ReactNode;
  delay?: number;
}

export function FeatureItem({ icon, text, delay = 0 }: FeatureItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-3"
    >
      <Icon name={icon} size="md" />
      <Text className="text-secondary">{text}</Text>
    </motion.div>
  );
}
