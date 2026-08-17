"use client";

import {
  BarChart3,
  CheckCircle2,
  Gauge,
  PackageSearch,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const benefits = [
  {
    key: "accuracy",
    icon: PackageSearch,
  },
  {
    key: "stockouts",
    icon: Gauge,
  },
  {
    key: "efficiency",
    icon: CheckCircle2,
  },
  {
    key: "sales",
    icon: TrendingUp,
  },
  {
    key: "profitability",
    icon: BarChart3,
  },
  {
    key: "customer",
    icon: ShieldCheck,
  },
];

export default function MMSBenefits() {
  const t = useTranslations("MMS.benefits");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        {/* Heading */}
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

        {/* Benefits */}
        <div className="mt-16 grid gap-x-8 gap-y-0 md:grid-cols-2">
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
                className="group flex gap-5 border-t border-primary/8 py-7 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#c9a45c]/10 text-[#a98743] transition-all duration-300 group-hover:bg-[#c9a45c] group-hover:text-white">
                  <Icon
                    size={18}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold tracking-tight text-primary">
                    {t(`items.${benefit.key}.title`)}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-secondary">
                    {t(`items.${benefit.key}.description`)}
                  </p>

                  <div className="mt-4 h-px w-0 bg-[#c9a45c]/50 transition-all duration-500 group-hover:w-8" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}