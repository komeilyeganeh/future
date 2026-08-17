"use client";

import { Database, HeartPulse, Network } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function HISOverview() {
  const t = useTranslations("HIS.overview");

  const items = [
    {
      icon: HeartPulse,
      key: "clinical",
    },
    {
      icon: Database,
      key: "information",
    },
    {
      icon: Network,
      key: "coordination",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          {/* Header */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-accent/60" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
                {t("eyebrow")}
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-primary md:text-5xl">
              {t("title")}
            </h2>
          </div>

          {/* Content */}
          <div>
            <p className="max-w-2xl text-sm leading-7 text-secondary">
              {t("description")}
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {items.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    whileHover={{ y: -5 }}
                    className="group relative overflow-hidden rounded-3xl border border-primary/7 bg-background-soft p-6 transition-all duration-300 hover:border-accent/25 hover:bg-white hover:shadow-[0_20px_50px_rgba(8,47,58,.06)]"
                  >
                    {/* Gold glow */}
                    <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-accent/[0.05] blur-2xl transition-transform duration-500 group-hover:scale-150" />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary transition-all duration-300 group-hover:bg-accent group-hover:text-primary group-hover:shadow-[0_8px_20px_rgba(212,175,55,.16)]">
                          <Icon size={18} strokeWidth={1.7} />
                        </div>

                        <span className="text-[9px] font-semibold tracking-[0.2em] text-primary/20 transition-colors duration-300 group-hover:text-accent">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="mt-7 text-sm font-semibold text-primary">
                        {t(`items.${item.key}.title`)}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-secondary">
                        {t(`items.${item.key}.description`)}
                      </p>

                      <div className="mt-5 h-px w-0 bg-accent transition-all duration-500 group-hover:w-8" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative mt-16 overflow-hidden rounded-[30px] bg-primary px-7 py-10 md:px-10"
        >
          {/* Decorative gold elements */}
          <div className="absolute -right-16 -top-20 h-44 w-44 rounded-full border border-accent/10 transition-transform duration-700 group-hover:scale-110" />

          <div className="absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-accent/[0.045] blur-3xl" />

          <div className="relative z-10 flex items-start gap-5">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent shadow-[0_0_15px_rgba(212,175,55,.45)]" />

            <p className="max-w-4xl text-xl font-semibold tracking-tight text-white md:text-2xl">
              {t("highlight")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}