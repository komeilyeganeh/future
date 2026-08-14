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
      className="relative overflow-hidden bg-background-soft py-24 md:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-45 top-1/2 h-112.5 w-112.5 -translate-y-1/2 rounded-full bg-primary/2.5 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-[-180px] h-100 w-100 rounded-full bg-[#c9a45c]/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Heading */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#c9a45c]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c7a45d]">
              {t("eyebrow")}
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-secondary">
            {t("description")}
          </p>
        </div>

        {/* Development cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            const featured = index === 0;

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
                className={`group relative overflow-hidden rounded-4xl border p-8 transition-all duration-500 ${
                  featured
                    ? "border-[#c9a45c]/40 bg-primary text-white shadow-[0_25px_80px_rgba(8,47,58,0.14)]"
                    : "border-[#082f3a]/8 bg-white text-primary hover:border-[#c9a45c]/35 hover:shadow-[0_25px_80px_rgba(8,47,58,0.08)]"
                }`}
              >
                {/* Decorative glow */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-125 ${
                    featured
                      ? "bg-[#c9a45c]/15"
                      : "bg-[#c9a45c]/[0.06]"
                  }`}
                />

                {/* Small decorative ring */}
                <div
                  className={`pointer-events-none absolute right-[-35px] top-[-35px] h-32 w-32 rounded-full border transition-transform duration-700 group-hover:scale-110 ${
                    featured
                      ? "border-[#c9a45c]/20"
                      : "border-[#c9a45c]/10"
                  }`}
                />

                <div className="relative z-10">
                  {/* Number */}
                  <span
                    className={`text-[10px] font-semibold tracking-[0.25em] ${
                      featured
                        ? "text-[#c9a45c]/80"
                        : "text-secondary"
                    }`}
                  >
                    0{index + 1}
                  </span>

                  {/* Icon */}
                  <div
                    className={`mt-10 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 group-hover:rotate-6 ${
                      featured
                        ? "bg-[#c9a45c] text-primary shadow-[0_10px_30px_rgba(201,164,92,0.25)]"
                        : "bg-primary/5 text-primary group-hover:bg-[#c9a45c]/15 group-hover:text-[#9b7838]"
                    }`}
                  >
                    <Icon size={20} />
                  </div>

                  {/* Content */}
                  <h3 className="mt-10 text-2xl font-semibold tracking-tight">
                    {t(`${item.key}.title`)}
                  </h3>

                  <p
                    className={`mt-4 text-sm leading-7 ${
                      featured
                        ? "text-white/60"
                        : "text-secondary"
                    }`}
                  >
                    {t(`${item.key}.description`)}
                  </p>

                  {/* Bottom */}
                  <div
                    className={`mt-10 flex items-center justify-between border-t pt-5 text-[9px] font-semibold uppercase tracking-[0.2em] ${
                      featured
                        ? "border-white/10 text-white/40"
                        : "border-primary/7 text-secondary"
                    }`}
                  >
                    <span>{t("learnMore")}</span>

                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-all duration-300 group-hover:scale-150 ${
                        featured
                          ? "bg-[#c9a45c]"
                          : "bg-[#c9a45c]/50"
                      }`}
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}