"use client";

import {
  Activity,
  FileHeart,
  MonitorSmartphone,
  Stethoscope,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const items = [
  {
    key: "clinical",
    icon: Stethoscope,
  },
  {
    key: "departments",
    icon: Activity,
  },
  {
    key: "devices",
    icon: MonitorSmartphone,
  },
  {
    key: "patient",
    icon: FileHeart,
  },
];

export default function HISClinical() {
  const t = useTranslations("HIS.clinical");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* Heading */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-accent/70" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
                {t("eyebrow")}
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-primary md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-secondary">
              {t("description")}
            </p>

            {/* Small accent detail */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Activity size={14} />
              </div>

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-primary/50">
                HIS / Clinical Operations
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-3 sm:grid-cols-2">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-[26px] border border-primary/7 bg-background-soft p-6 transition-all duration-300 hover:border-accent/25 hover:bg-white hover:shadow-[0_20px_55px_rgba(8,47,58,0.07)]"
                >
                  {/* Decorative glow */}
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/[0.04] blur-xl transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-sm transition-all duration-300 group-hover:bg-accent group-hover:text-primary group-hover:shadow-[0_8px_22px_rgba(212,175,55,.18)]">
                        <Icon size={17} strokeWidth={1.7} />
                      </div>

                      <span className="text-[9px] font-semibold tracking-[0.18em] text-primary/20 transition-colors duration-300 group-hover:text-accent">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-7 text-base font-semibold text-primary">
                      {t(`items.${item.key}.title`)}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-secondary">
                      {t(`items.${item.key}.description`)}
                    </p>

                    <div className="mt-5 h-px w-8 bg-accent/40 transition-all duration-300 group-hover:w-14 group-hover:bg-accent" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}