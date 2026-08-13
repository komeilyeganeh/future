"use client";

import {
  Banknote,
  Boxes,
  Languages,
  LayoutDashboard,
  Network,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const features = [
  {
    key: "financial",
    icon: Banknote,
  },
  {
    key: "infrastructure",
    icon: Network,
  },
  {
    key: "interface",
    icon: LayoutDashboard,
  },
  {
    key: "reporting",
    icon: Boxes,
  },
  {
    key: "multilingual",
    icon: Languages,
  },
  {
    key: "scalable",
    icon: ShieldCheck,
  },
];

export default function HISFeatures() {
  const t = useTranslations("HIS.features");

  return (
    <section id="features" className="bg-background-soft">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="max-w-2xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-secondary">
            {t("eyebrow")}
          </span>

          <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-primary md:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-secondary">
            {t("description")}
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.key}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                }}
                whileHover={{ y: -5 }}
                className="group rounded-[28px] border border-primary/7 bg-white p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon size={19} strokeWidth={1.7} />
                </div>

                <h3 className="mt-9 text-xl font-semibold tracking-tight text-primary">
                  {t(`items.${feature.key}.title`)}
                </h3>

                <p className="mt-3 text-xs leading-6 text-secondary">
                  {t(`items.${feature.key}.description`)}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}