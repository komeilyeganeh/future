"use client";

import {
  ArrowRight,
  Database,
  Mail,
  Target,
  UserRound,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const steps = [
  {
    key: "capture",
    icon: UserRound,
  },
  {
    key: "organize",
    icon: Database,
  },
  {
    key: "nurture",
    icon: Mail,
  },
  {
    key: "convert",
    icon: Target,
  },
];

export default function CRMWorkflow() {
  const t = useTranslations("CRM.workflow");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
              {t("eyebrow")}
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-secondary">
            {t("description")}
          </p>
        </div>

        <div className="mt-16 grid gap-0 border-t border-primary/8 md:grid-cols-4">
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
                className="group relative border-b border-primary/8 py-8 md:border-b-0 md:border-r md:px-7 md:last:border-r-0"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-secondary">
                    {t(`steps.${step.key}.number`)}
                  </span>

                  <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-accent/[0.08] text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_8px_25px_rgba(199,164,93,0.22)]">
                    <Icon size={15} />

                    <span className="pointer-events-none absolute inset-0 rounded-full border border-accent/10 transition-transform duration-500 group-hover:scale-125 group-hover:border-accent/20" />
                  </div>
                </div>

                <h3 className="mt-10 text-xl font-semibold tracking-tight text-primary transition-colors duration-300 group-hover:text-accent">
                  {t(`steps.${step.key}.title`)}
                </h3>

                <p className="mt-4 text-xs leading-6 text-secondary">
                  {t(`steps.${step.key}.description`)}
                </p>

                {/* Gold progress line */}
                <div className="mt-7 h-px w-0 bg-accent transition-all duration-500 group-hover:w-12" />

                {index !== steps.length - 1 && (
                  <ArrowRight
                    size={14}
                    className="absolute bottom-8 right-5 hidden text-accent/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent md:block"
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