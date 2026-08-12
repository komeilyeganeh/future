"use client";

import {
  Layers3,
  MonitorSmartphone,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function MobileAppDevelopment() {
  const t = useTranslations("MobileApp.development");

  const items = [
    {
      key: "native",
      icon: Smartphone,
    },
    {
      key: "hybrid",
      icon: Layers3,
    },
    {
      key: "crossPlatform",
      icon: MonitorSmartphone,
    },
  ];

  return (
    <section
      id="development"
      className="relative overflow-hidden bg-[#f8faf9] py-24 md:py-32"
    >
      <div className="absolute -right-45 top-1/2 h-112.5 w-112.5 -translate-y-1/2 rounded-full bg-[#082f3a]/2.5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#71838a]">
            {t("eyebrow")}
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#082f3a] md:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#71838a]">
            {t("description")}
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-4xl border p-8 ${
                  index === 0
                    ? "border-[#082f3a] bg-[#082f3a] text-white"
                    : "border-[#082f3a]/8 bg-white text-[#082f3a]"
                }`}
              >
                <span
                  className={`text-[10px] font-semibold tracking-[0.25em] ${
                    index === 0
                      ? "text-white/40"
                      : "text-[#71838a]"
                  }`}
                >
                  0{index + 1}
                </span>

                <div
                  className={`mt-10 flex h-12 w-12 items-center justify-center rounded-2xl ${
                    index === 0
                      ? "bg-white text-[#082f3a]"
                      : "bg-[#082f3a]/5 text-[#082f3a]"
                  }`}
                >
                  <Icon size={20} />
                </div>

                <h3 className="mt-10 text-2xl font-semibold tracking-tight">
                  {t(`${item.key}.title`)}
                </h3>

                <p
                  className={`mt-4 text-sm leading-7 ${
                    index === 0
                      ? "text-white/60"
                      : "text-[#71838a]"
                  }`}
                >
                  {t(`${item.key}.description`)}
                </p>

                <div
                  className={`mt-10 border-t pt-5 text-[9px] font-semibold uppercase tracking-[0.2em] ${
                    index === 0
                      ? "border-white/10 text-white/40"
                      : "border-[#082f3a]/[0.07] text-[#71838a]"
                  }`}
                >
                  {t("learnMore")}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}