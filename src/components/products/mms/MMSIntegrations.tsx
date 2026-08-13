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
    <section className="bg-background-soft">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        {/* Header */}
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

          {/* Integration Cards */}
          <div className="grid gap-3 sm:grid-cols-2">
            {integrations.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -5 }}
                  className="group rounded-[28px] border border-primary/7 bg-white p-7 transition-shadow duration-500 hover:shadow-[0_20px_60px_rgba(8,47,58,0.07)]"
                >
                  {/* Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon size={19} strokeWidth={1.7} />
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="text-primary/20 transition-transform duration-300 group-hover:rotate-45"
                    />
                  </div>

                  {/* Content */}
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