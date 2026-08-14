"use client";

import {
  ArrowUpRight,
  Globe2,
  Layers3,
  MonitorSmartphone,
  Network,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const integrations = [
  {
    key: "pos",
    icon: MonitorSmartphone,
  },
  {
    key: "ecommerce",
    icon: Globe2,
  },
  {
    key: "erp",
    icon: Layers3,
  },
  {
    key: "custom",
    icon: Network,
  },
];

export default function MMSIntegrations() {
  const t = useTranslations("MMS.integrations");

  return (
    <section className="relative overflow-hidden bg-background-soft">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/[0.025] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        {/* Header */}
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#c7a45d]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c7a45d]">
                {t("eyebrow")}
              </span>
            </div>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-primary md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-secondary md:text-base">
              {t("description")}
            </p>
          </motion.div>

          {/* Integration Cards */}
          <div className="grid gap-3 sm:grid-cols-2">
            {integrations.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.key}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-[28px] border border-primary/7 bg-white p-7 transition-all duration-500 hover:border-primary/12 hover:shadow-[0_25px_70px_rgba(8,47,58,0.08)]"
                >
                  {/* Hover accent */}
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/[0.025] transition-transform duration-700 group-hover:scale-150" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-all duration-300 group-hover:bg-[#c7a45d] group-hover:text-white">
                        <Icon size={19} strokeWidth={1.7} />
                      </div>

                      <ArrowUpRight
                        size={15}
                        className="text-primary/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:rotate-45 group-hover:text-primary/50"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="mt-10 text-xl font-semibold tracking-tight text-primary">
                      {t(`items.${item.key}.title`)}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-secondary">
                      {t(`items.${item.key}.description`)}
                    </p>

                    {/* Bottom indicator */}
                    <div className="mt-7 flex items-center gap-2">
                      <span className="h-px w-5 bg-primary/15 transition-all duration-300 group-hover:w-8 group-hover:bg-primary/40" />

                      <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-primary/30 transition-colors group-hover:text-primary/50">
                        Integration
                      </span>
                    </div>
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