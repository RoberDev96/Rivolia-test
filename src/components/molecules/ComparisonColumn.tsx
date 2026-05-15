"use client";

import { motion } from "framer-motion";
import { Icon } from "../atoms/Icon";
import { Text } from "../atoms/Text";

interface ComparisonFeature {
  icon: "check" | "x";
  text: string;
}

interface ComparisonColumnProps {
  title: string;
  subtitle?: string;
  features: readonly ComparisonFeature[];
  isPositive: boolean;
  delay?: number;
}

export function ComparisonColumn({
  title,
  subtitle,
  features,
  isPositive,
  delay = 0,
}: ComparisonColumnProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`
        p-6 rounded-lg
        ${isPositive ? "bg-[var(--color-cream-light)]" : "bg-[var(--color-cream-dark)]"}
      `}
    >
      <div className="text-center mb-6">
        <h3
          className={`text-[var(--color-primary)] ${
            isPositive ? "type-cinzel-bold-35pt" : "type-cinzel-bold-30pt"
          }`}
        >
          {title}
        </h3>
        {subtitle && (
          <span className="inline-block mt-2 text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-3 py-1 rounded-full type-montserrat-bold-20pt">
            {subtitle}
          </span>
        )}
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: isPositive ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + index * 0.1 }}
            className="flex items-start gap-3"
          >
            <Icon name={feature.icon} size="sm" className="mt-1 shrink-0" />
            <Text
              variant="small"
              className={`type-montserrat-light-19pt ${
                isPositive ? "text-[var(--color-black)]" : "text-[var(--color-gray)]"
              }`}
            >
              {feature.text}
            </Text>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
