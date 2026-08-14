"use client";

import {
  ShieldCheck,
  Gauge,
  Headphones,
  Layers3,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const items = [
  {
    key: "reliable",
    icon: ServerIcon,
  },
  {
    key: "secure",
    icon: ShieldCheck,
  },
  {
    key: "performance",
    icon: Gauge,
  },
  {
    key: "support",
    icon: Headphones,
  },
];

function ServerIcon() {
  return <Layers3 size={20} strokeWidth={1.6} />;
}

export default function WebServiceWhy() {
  const t = useTranslations("WebService.why");

  return (
    <section className="relative overflow-hidden bg-background-soft px-5 py-24 md:px-8 md:py-32">
      {/* Subtle gold glow */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-100 w-100 -translate-y-1/2 rounded-full bg-[#c9a45c]/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* Heading */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#c9a45c]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c7a45d]">
                {t("eyebrow")}
              </span>
            </div>

            <h2 className="mt-5 max-w-lg text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-secondary">
              {t("description")}
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
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
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-[26px] border border-primary/7 bg-white p-7 transition-all duration-300 hover:border-[#c9a45c]/30 hover:shadow-[0_20px_60px_rgba(8,47,58,0.06)]"
                >
                  {/* Gold corner glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#c9a45c]/[0.06] blur-2xl transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-all duration-300 group-hover:bg-[#c9a45c]/10 group-hover:text-[#b38b43]">
                      <Icon />
                    </div>

                    {/* Content */}
                    <h3 className="mt-7 text-lg font-semibold text-primary transition-colors duration-300 group-hover:text-[#a9823d]">
                      {t(`${item.key}.title`)}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-secondary">
                      {t(`${item.key}.description`)}
                    </p>

                    {/* Bottom accent */}
                    <div className="mt-6 h-px w-0 bg-[#c9a45c] transition-all duration-500 group-hover:w-10" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}