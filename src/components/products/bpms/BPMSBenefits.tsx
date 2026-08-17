"use client";

import {
  BarChart3,
  CheckCircle2,
  Gauge,
  ShieldCheck,
  TrendingDown,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const benefits = [
  {
    key: "efficiency",
    icon: Gauge,
  },
  {
    key: "consistency",
    icon: CheckCircle2,
  },
  {
    key: "cost",
    icon: TrendingDown,
  },
  {
    key: "visibility",
    icon: BarChart3,
  },
  {
    key: "collaboration",
    icon: Users,
  },
  {
    key: "satisfaction",
    icon: ShieldCheck,
  },
];

export default function BPMSBenefits() {
  const t = useTranslations("BPMS.benefits");

  return (
    <section className="bg-background-soft">
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

        <div className="mt-16 grid gap-x-8 md:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
                className="group relative flex gap-5 border-t border-primary/8 py-7 transition-colors duration-300 hover:border-accent/25"
              >
                {/* Accent detail */}
                <div className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-10" />

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-primary shadow-[0_8px_25px_rgba(8,47,58,0.04)] transition-all duration-300 group-hover:bg-accent group-hover:text-primary group-hover:shadow-[0_10px_30px_rgba(212,175,55,0.16)]">
                  <Icon size={18} strokeWidth={1.7} />
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold tracking-tight text-primary">
                      {t(`items.${benefit.key}.title`)}
                    </h3>

                    <span className="text-[8px] font-semibold tracking-[0.18em] text-primary/15 transition-colors duration-300 group-hover:text-accent">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-6 text-secondary">
                    {t(`items.${benefit.key}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}