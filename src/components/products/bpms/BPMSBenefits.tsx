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
    <section className="bg-[#f8faf9]">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
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
                className="group flex gap-5 border-t border-[#082f3a]/8 py-7"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#082f3a] transition-all duration-300 group-hover:bg-[#082f3a] group-hover:text-white">
                  <Icon size={18} strokeWidth={1.7} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-[#082f3a]">
                    {t(`items.${benefit.key}.title`)}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-[#71838a]">
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