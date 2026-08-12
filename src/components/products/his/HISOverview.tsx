"use client";

import { Database, HeartPulse, Network } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function HISOverview() {
  const t = useTranslations("HIS.overview");

  const items = [
    {
      icon: HeartPulse,
      key: "clinical",
    },
    {
      icon: Database,
      key: "information",
    },
    {
      icon: Network,
      key: "coordination",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#71838a]">
              {t("eyebrow")}
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#082f3a] md:text-5xl">
              {t("title")}
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-sm leading-7 text-[#71838a]">
              {t("description")}
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {items.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    className="rounded-3xl border border-[#082f3a]/[0.07] bg-[#f8faf9] p-6"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#082f3a]/5 text-[#082f3a]">
                      <Icon size={18} strokeWidth={1.7} />
                    </div>

                    <h3 className="mt-7 text-sm font-semibold text-[#082f3a]">
                      {t(`items.${item.key}.title`)}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-[#71838a]">
                      {t(`items.${item.key}.description`)}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[30px] bg-[#082f3a] px-7 py-10 md:px-10">
          <p className="text-xl font-semibold tracking-tight text-white md:text-2xl">
            {t("highlight")}
          </p>
        </div>
      </div>
    </section>
  );
}