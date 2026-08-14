"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const benefits = [
  "realTime",
  "reduceCosts",
  "customization",
  "deployment",
  "integration",
];

export default function ERPBenefits() {
  const t = useTranslations("ERP.benefits");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c7a45d]">
              {t("eyebrow")}
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-secondary">
              {t("description")}
            </p>

            <div className="mt-7 h-px w-12 bg-[#c9a45c]/50" />
          </div>

          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative flex items-center justify-between overflow-hidden rounded-[22px] border border-primary/7 px-6 py-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-[#c9a45c]/30 hover:bg-background-soft hover:shadow-[0_15px_45px_rgba(201,164,92,0.08)]"
              >
                <div className="absolute inset-y-0 left-0 w-0.5 bg-[#c9a45c]/0 transition-colors duration-500 group-hover:bg-[#c9a45c]/70" />

                <div className="flex items-center gap-4">
                  <CheckCircle2
                    size={18}
                    className="text-primary/40 transition-colors duration-300 group-hover:text-[#b28b42]"
                  />

                  <div>
                    <h3 className="text-sm font-semibold text-primary">
                      {t(`items.${benefit}.title`)}
                    </h3>

                    <p className="mt-1 text-xs text-secondary">
                      {t(`items.${benefit}.description`)}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={16}
                  className="text-primary/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#b28b42]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}