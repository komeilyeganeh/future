"use client";

import {
  BadgeCheck,
  Globe2,
  Headphones,
  Layers3,
  Settings2,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const features = [
  {
    key: "customizable",
    icon: Settings2,
  },
  {
    key: "infrastructure",
    icon: ShieldCheck,
  },
  {
    key: "reporting",
    icon: BadgeCheck,
  },
  {
    key: "multilingual",
    icon: Globe2,
  },
  {
    key: "expandable",
    icon: Layers3,
  },
  {
    key: "support",
    icon: Headphones,
  },
];

export default function ERPFeatures() {
  const t = useTranslations("ERP.features");

  return (
    <section className="bg-background-soft">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="max-w-2xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-secondary">
            {t("eyebrow")}
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
            {t("title")}
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ key, icon: Icon }, index) => (
            <motion.article
              key={key}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="group rounded-[28px] border border-primary/7 bg-white p-7 transition-all duration-500 hover:shadow-[0_25px_70px_rgba(8,47,58,0.07)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                <Icon size={19} />
              </div>

              <h3 className="mt-8 text-lg font-semibold text-primary">
                {t(`items.${key}.title`)}
              </h3>

              <p className="mt-3 text-xs leading-6 text-secondary">
                {t(`items.${key}.description`)}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}