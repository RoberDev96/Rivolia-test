"use client";

import { Text } from "../atoms/Text";

interface ComparisonFeature {
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
  features,
  isPositive,
}: ComparisonColumnProps) {
  return (
    <div className="text-center">
      <h3
        className={`${isPositive ? "text-primary" : "text-secondary"} ${
          isPositive ? "type-cinzel-bold-35pt" : "type-cinzel-bold-30pt"
        }`}
      >
        {title}
      </h3>
      <ul className="space-y-3 mt-4">
        {features.map((feature, index) => {
          const isBold = index % 2 === 0;
          return (
            <li key={index} className="flex items-center justify-center gap-3">
              <Text
                variant="small"
                className="type-montserrat-light-19pt text-black"
                style={{ fontWeight: isBold ? 700 : 300 }}
              >
                {feature.text}
              </Text>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
