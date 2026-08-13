"use client";

import {
  ArrowRight,
  BarChart3,
  Boxes,
  PackageCheck,
  ShoppingCart,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const steps = [
  {
    key: "purchase",
    icon: ShoppingCart,
  },
  {
    key: "receive",
    icon: PackageCheck,
  },
  {
    key: "manage",
    icon: Boxes,
  },
  {
    key: "sell",
    icon: ShoppingCart,
  },
  {
    key: "analyze",
    icon: BarChart3,
  },
];

export default function MMSWorkflow() {
  const t = useTranslations("MMS.workflow");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        {/* Heading */}
        <div className="max-w-2xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-secondary">
            {t("eyebrow")}
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-secondary">
            {t("description")}
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-0 border-t border-[#082f3a]/8 md:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative border-b border-[#082f3a]/8 py-8 md:border-b-0 md:border-r md:px-6 md:last:border-r-0"
              >
                {/* Top */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-secondary">
                    {t(`steps.${step.key}.number`)}
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/4 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={15} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-10 text-xl font-semibold tracking-tight text-primary">
                  {t(`steps.${step.key}.title`)}
                </h3>

                <p className="mt-4 text-xs leading-6 text-secondary">
                  {t(`steps.${step.key}.description`)}
                </p>

                {/* Arrow */}
                {index !== steps.length - 1 && (
                  <ArrowRight
                    size={14}
                    className="absolute bottom-8 right-4 hidden text-primary/20 transition-transform duration-300 group-hover:translate-x-1 md:block"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}