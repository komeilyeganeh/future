"use client";

import { ArrowRight, Compass, PenTool, Rocket, Wrench } from "lucide-react";
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
      <div className="absolute right-[-200px] top-1/2 h-125 w-125 -translate-y-1/2 rounded-full bg-primary/2.5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
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
        <div className="mt-16 grid gap-0 border-t border-[#082f3a]/8 md:grid-cols-4">
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
                }}
                className="group relative border-b border-[#082f3a]/8 py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-secondary">
                    {step.number}
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/4 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={15} />
                  </div>
                </div>

                <h3 className="mt-10 text-xl font-semibold tracking-tight text-primary">
                  {step.title}
                </h3>

                <p className="mt-4 text-xs leading-6 text-secondary">
                  {step.description}
                </p>

                {index !== steps.length - 1 && (
                  <ArrowRight
                    size={14}
                    className="absolute bottom-8 right-5 hidden text-primary/20 md:block"
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