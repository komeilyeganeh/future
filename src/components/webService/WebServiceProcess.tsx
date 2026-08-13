"use client";

import {
  Search,
  Globe2,
  ShieldCheck,
  Settings2,
  Activity,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const icons = [
  Search,
  Globe2,
  ShieldCheck,
  Settings2,
  Activity,
];

const steps = [
  "planning",
  "setup",
  "secure",
  "maintain",
  "optimize",
] as const;

export default function WebServiceProcess() {
  const t = useTranslations("WebService.process");

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute right-[-180px] top-1/2 h-125 w-125 -translate-y-1/2 rounded-full bg-primary/2.5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
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

        <div className="mt-16 grid gap-0 border-t border-[#082f3a]/8 md:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative border-b border-[#082f3a]/8 py-8 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-secondary">
                    0{index + 1}
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/4 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={15} />
                  </div>
                </div>

                <h3 className="mt-9 text-lg font-semibold tracking-tight text-primary">
                  {t(`${step}.title`)}
                </h3>

                <p className="mt-4 text-xs leading-6 text-secondary">
                  {t(`${step}.description`)}
                </p>

                {index !== steps.length - 1 && (
                  <ArrowRight
                    size={13}
                    className="absolute bottom-8 right-4 hidden text-primary/20 md:block"
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