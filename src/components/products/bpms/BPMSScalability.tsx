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
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
                {t("eyebrow")}
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-primary md:text-5xl">
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
                  className="group relative overflow-hidden rounded-[28px] border border-primary/7 bg-background-soft p-7 transition-all duration-300 hover:border-accent/20 hover:bg-white hover:shadow-[0_20px_55px_rgba(8,47,58,0.07)]"
                >
                  {/* Subtle gold glow */}
                  <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-accent/[0.035] transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white transition-all duration-300 group-hover:bg-accent group-hover:text-primary">
                        <Icon size={19} strokeWidth={1.7} />
                      </div>

                      <ArrowUpRight
                        size={15}
                        className="text-primary/20 transition-all duration-300 group-hover:rotate-45 group-hover:text-accent"
                      />
                    </div>

                    <h3 className="mt-10 text-xl font-semibold tracking-tight text-primary">
                      {t(`items.${item.key}.title`)}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-secondary">
                      {t(`items.${item.key}.description`)}
                    </p>

                    <div className="mt-6 h-px w-8 bg-accent/40 transition-all duration-300 group-hover:w-14" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}