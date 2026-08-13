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
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-secondary">
              {t("eyebrow")}
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-secondary">
              {t("description")}
            </p>
          </div>

          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex items-center justify-between rounded-[22px] border border-primary/7 px-6 py-5 transition-all hover:border-[#082f3a]/15 hover:bg-background-soft"
              >
                <div className="flex items-center gap-4">
                  <CheckCircle2
                    size={18}
                    className="text-primary/40"
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
                  className="text-primary/20 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}