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
    <section className="relative overflow-hidden bg-[#f8faf9]">
      <div className="absolute right-[-180px] top-1/2 h-125 w-125 -translate-y-1/2 rounded-full bg-[#082f3a]/2.5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="max-w-2xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#71838a]">
            {t("eyebrow")}
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#082f3a] md:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#71838a]">
            {t("description")}
          </p>
        </div>

        <div className="mt-16 border-t border-[#082f3a]/8">
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
                className="group grid gap-6 border-b border-[#082f3a]/8 py-7 md:grid-cols-[80px_80px_1fr_auto] md:items-center"
              >
                <span className="text-[10px] font-semibold tracking-[0.2em] text-[#71838a]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#082f3a]/5 text-[#082f3a] transition-all duration-300 group-hover:bg-[#082f3a] group-hover:text-white">
                  <Icon size={16} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-[#082f3a]">
                    {t(`${step}.title`)}
                  </h3>

                  <p className="mt-2 max-w-2xl text-xs leading-6 text-[#71838a]">
                    {t(`${step}.description`)}
                  </p>
                </div>

                <ArrowRight
                  size={16}
                  className="hidden text-[#082f3a]/20 transition-transform duration-300 group-hover:translate-x-1 md:block"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}