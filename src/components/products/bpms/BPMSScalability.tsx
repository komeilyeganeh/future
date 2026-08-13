"use client";

import {
  ArrowUpRight,
  Building2,
  Factory,
  Landmark,
  Store,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const industries = [
  {
    key: "enterprise",
    icon: Building2,
  },
  {
    key: "manufacturing",
    icon: Factory,
  },
  {
    key: "services",
    icon: Landmark,
  },
  {
    key: "sme",
    icon: Store,
  },
];

export default function BPMSScalability() {
  const t = useTranslations("BPMS.scalability");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
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

          <div className="grid gap-3 sm:grid-cols-2">
            {industries.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -5 }}
                  className="group rounded-[28px] border border-primary/7 bg-background-soft p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-primary">
                      <Icon size={19} strokeWidth={1.7} />
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="text-primary/20 transition-transform group-hover:rotate-45"
                    />
                  </div>

                  <h3 className="mt-10 text-xl font-semibold tracking-tight text-primary">
                    {t(`items.${item.key}.title`)}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-secondary">
                    {t(`items.${item.key}.description`)}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}