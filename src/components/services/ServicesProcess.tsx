"use client";

import {
  ArrowRight,
  Compass,
  PenTool,
  Rocket,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ServicesProcess() {
  const t = useTranslations("Services.process");

  const steps = [
    {
      number: t("steps.discover.number"),
      title: t("steps.discover.title"),
      description: t("steps.discover.description"),
      icon: Compass,
    },
    {
      number: t("steps.design.number"),
      title: t("steps.design.title"),
      description: t("steps.design.description"),
      icon: PenTool,
    },
    {
      number: t("steps.build.number"),
      title: t("steps.build.title"),
      description: t("steps.build.description"),
      icon: Wrench,
    },
    {
      number: t("steps.launch.number"),
      title: t("steps.launch.title"),
      description: t("steps.launch.description"),
      icon: Rocket,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -right-50 top-1/2 h-125 w-125 -translate-y-1/2 rounded-full bg-primary/2.5 blur-3xl" />

      <div className="pointer-events-none absolute -left-45 -top-30 h-80 w-80 rounded-full bg-[#c8a45d]/4 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#c8a45d]" />

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
        <div className="relative mt-16 grid gap-0 border-t border-primary/8 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative border-b border-primary/8 py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0"
              >
                {/* Hover accent */}
                <div className="absolute left-0 top-0 h-px w-0 bg-linear-to-r from-[#08788c] via-[#c8a45d] to-transparent transition-all duration-700 group-hover:w-full" />

                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-secondary transition-colors duration-300 group-hover:text-[#c8a45d]">
                    {step.number}
                  </span>

                  <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary/4 text-primary transition-all duration-300 group-hover:bg-[#c8a45d] group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(200,164,93,.22)]">
                    <Icon size={15} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-10 text-xl font-semibold tracking-tight text-primary transition-transform duration-500 group-hover:translate-x-1">
                  {step.title}
                </h3>

                <p className="mt-4 text-xs leading-6 text-secondary">
                  {step.description}
                </p>

                {/* Step indicator */}
                <div className="mt-7 flex items-center gap-2">
                  <span className="h-px w-5 bg-[#08788c]/20 transition-all duration-500 group-hover:w-8 group-hover:bg-[#c8a45d]" />

                  <span className="h-1.5 w-1.5 rounded-full bg-[#08788c]/30 transition-all duration-500 group-hover:scale-125 group-hover:bg-[#c8a45d]" />
                </div>

                {/* Arrow */}
                {index !== steps.length - 1 && (
                  <ArrowRight
                    size={14}
                    className="absolute bottom-8 right-5 hidden text-primary/15 transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#c8a45d] md:block"
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100%" }}
          viewport={{ once: true }}
          transition={{
            duration: 1.1,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-10 h-px max-w-52 bg-linear-to-r from-[#08788c] via-[#c8a45d] to-transparent"
        />
      </div>
    </section>
  );
}