"use client";

import { Apple, Globe2, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function MobileAppPlatforms() {
  const t = useTranslations("MobileApp.platforms");

  const platforms = [
    {
      key: "ios",
      icon: Apple,
    },
    {
      key: "android",
      icon: Smartphone,
    },
    {
      key: "pwa",
      icon: Globe2,
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-secondary">
              {t("eyebrow")}
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-secondary">
              {t("description")}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;

              return (
                <motion.div
                  key={platform.key}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group rounded-[28px] border border-primary/7 bg-background-soft p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_25px_70px_rgba(8,47,58,0.07)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white transition-transform duration-500 group-hover:rotate-6">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-12 text-xl font-semibold text-primary">
                    {t(`${platform.key}.title`)}
                  </h3>

                  <p className="mt-4 text-xs leading-6 text-secondary">
                    {t(`${platform.key}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}