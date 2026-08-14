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
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Subtle gold ambient glow */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-100 w-100 -translate-y-1/2 rounded-full bg-[#c9a96e]/5 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          {/* Heading */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#c9a96e]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c7a45d]">
                {t("eyebrow")}
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-secondary">
              {t("description")}
            </p>
          </div>

          {/* Platforms */}
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
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[28px] border border-primary/7 bg-background-soft p-7 transition-all duration-500 hover:border-[#c9a96e]/35 hover:bg-white hover:shadow-[0_25px_70px_rgba(8,47,58,0.07)]"
                >
                  {/* Card gold accent */}
                  <div className="absolute right-0 top-0 h-px w-0 bg-[#c9a96e] transition-all duration-500 group-hover:w-full" />

                  {/* Decorative circle */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#c9a96e]/5 transition-transform duration-700 group-hover:scale-150" />

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#c9a96e] group-hover:text-primary">
                      <Icon size={20} strokeWidth={1.7} />
                    </div>

                    <h3 className="mt-12 text-xl font-semibold text-primary">
                      {t(`${platform.key}.title`)}
                    </h3>

                    <p className="mt-4 text-xs leading-6 text-secondary">
                      {t(`${platform.key}.description`)}
                    </p>

                    {/* Small gold indicator */}
                    <div className="mt-7 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#c9a96e] opacity-60 transition-all duration-300 group-hover:scale-150 group-hover:opacity-100" />

                      <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-secondary/60">
                        RoshaSoft
                      </span>
                    </div>
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