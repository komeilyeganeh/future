"use client";

import {
  ArrowRight,
  Compass,
  Code2,
  PenTool,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const icons = [Compass, PenTool, Code2, ShieldCheck, Rocket];

export default function WebDesignProcess() {
  const t = useTranslations("WebDesign.process");

  const steps = [
    "planning",
    "design",
    "development",
    "testing",
    "launch",
  ];

  return (
    <section className="relative overflow-hidden bg-background-soft">
      <div className="absolute right-[-180px] top-1/2 h-125 w-125 -translate-y-1/2 rounded-full bg-primary/2.5 blur-3xl" />

      {/* Subtle gold glow */}
      <div className="pointer-events-none absolute left-[-120px] top-1/4 h-80 w-80 rounded-full bg-[#c9a227]/[0.025] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="max-w-2xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c7a45d]">
            {t("eyebrow")}
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-secondary">
            {t("description")}
          </p>
        </div>

        <div className="mt-16 border-t border-primary/8">
          {steps.map((step, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative grid gap-6 border-b border-primary/8 py-7 transition-colors duration-300 hover:border-[#c9a227]/20 md:grid-cols-[80px_80px_1fr_auto] md:items-center"
              >
                <span className="text-[10px] font-semibold tracking-[0.2em] text-secondary transition-colors duration-300 group-hover:text-[#a88416]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary transition-all duration-300 group-hover:bg-[#c9a227] group-hover:text-white">
                  <Icon size={16} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-primary transition-colors duration-300 group-hover:text-[#a88416]">
                    {t(`${step}.title`)}
                  </h3>

                  <p className="mt-2 max-w-2xl text-xs leading-6 text-secondary">
                    {t(`${step}.description`)}
                  </p>
                </div>

                <ArrowRight
                  size={16}
                  className="hidden text-[#c9a227]/35 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#a88416] md:block"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}