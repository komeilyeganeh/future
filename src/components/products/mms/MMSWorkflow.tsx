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
    <section className="relative overflow-hidden bg-white">
      {/* Subtle gold accent */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-[#c7a45d]/40" />

      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#c7a45d]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c7a45d]">
              {t("eyebrow")}
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-secondary">
            {t("description")}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-16 border-t border-[#082f3a]/8 md:grid md:grid-cols-5">
          {/* Gold progress line */}
          <div className="pointer-events-none absolute left-0 right-0 top-0 hidden h-px bg-gradient-to-r from-transparent via-[#c7a45d]/50 to-transparent md:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

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
                {/* Step number + icon */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-semibold tracking-[0.2em] transition-colors duration-300 ${
                      index === 0
                        ? "text-[#c7a45d]"
                        : "text-secondary group-hover:text-[#c7a45d]"
                    }`}
                  >
                    {t(`steps.${step.key}.number`)}
                  </span>

                  <div className="relative">
                    {/* Gold glow on hover */}
                    <div className="absolute inset-0 rounded-full bg-[#c7a45d]/10 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-primary/7 bg-primary/[0.025] text-primary transition-all duration-300 group-hover:border-[#c7a45d]/30 group-hover:bg-[#c7a45d] group-hover:text-white">
                      <Icon size={15} strokeWidth={1.8} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-10 text-xl font-semibold tracking-tight text-primary transition-colors duration-300 group-hover:text-[#a88745]">
                  {t(`steps.${step.key}.title`)}
                </h3>

                <p className="mt-4 text-xs leading-6 text-secondary">
                  {t(`steps.${step.key}.description`)}
                </p>

                {/* Active indicator */}
                <div className="mt-7 h-px w-0 bg-[#c7a45d] transition-all duration-500 group-hover:w-10" />

                {/* Arrow */}
                {!isLast && (
                  <ArrowRight
                    size={14}
                    className="absolute bottom-8 right-4 hidden text-primary/15 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#c7a45d] md:block"
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