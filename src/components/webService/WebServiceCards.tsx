"use client";

import {
  Globe2,
  Server,
  LockKeyhole,
  Wrench,
  Brackets,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const icons = [
  Server,
  Globe2,
  LockKeyhole,
  Wrench,
  Brackets,
];

export default function WebServiceCards() {
  const t = useTranslations("WebService.services");

  const items = [
    "hosting",
    "domain",
    "ssl",
    "maintenance",
    "api",
  ] as const;

  return (
    <section
      id="services"
      className="bg-background-soft px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c7a45d]">
            {t("eyebrow")}
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-secondary">
            {t("description")}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[index];
            const featured = index === 0;

            const features = t.raw(`${item}.features`) as string[];

            return (
              <motion.article
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -7 }}
                className={`group relative overflow-hidden rounded-[30px] border p-7 transition-all duration-500 md:p-8 ${
                  featured
                    ? "border-[#c7a35a]/45 bg-primary text-white shadow-[0_25px_80px_rgba(8,47,58,0.14)]"
                    : "border-[#082f3a]/8 bg-white text-primary hover:border-[#c7a35a]/30 hover:shadow-[0_25px_80px_rgba(8,47,58,0.08)]"
                }`}
              >
                {/* Decorative circle */}
                <div
                  className={`absolute -right-16 -top-16 h-40 w-40 rounded-full transition-all duration-700 group-hover:scale-125 ${
                    featured
                      ? "bg-[#c7a35a]/[0.07]"
                      : "bg-[#c7a35a]/[0.045]"
                  }`}
                />

                {/* Subtle gold glow */}
                <div
                  className={`pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full blur-3xl transition-opacity duration-500 ${
                    featured
                      ? "bg-[#c7a35a]/10 opacity-70"
                      : "bg-[#c7a35a]/10 opacity-0 group-hover:opacity-100"
                  }`}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <span
                      className={`text-[10px] font-semibold tracking-[0.2em] ${
                        featured
                          ? "text-[#d8bd7b]/70"
                          : "text-[#b18b3d]"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 group-hover:rotate-6 ${
                        featured
                          ? "border border-[#d8bd7b]/20 bg-[#d8bd7b]/10 text-[#e0c98e]"
                          : "border border-[#c7a35a]/15 bg-[#c7a35a]/[0.08] text-[#a98032]"
                      }`}
                    >
                      <Icon size={20} strokeWidth={1.6} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-12">
                    <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                      {t(`${item}.title`)}
                    </h3>

                    <p
                      className={`mt-5 text-sm leading-7 ${
                        featured
                          ? "text-white/55"
                          : "text-secondary"
                      }`}
                    >
                      {t(`${item}.description`)}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mt-8 space-y-3">
                    {features.map((feature) => (
                      <div
                        key={feature}
                        className={`flex items-center gap-3 border-b pb-3 last:border-0 ${
                          featured
                            ? "border-white/8"
                            : "border-[#082f3a]/6"
                        }`}
                      >
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            featured
                              ? "bg-[#c7a35a]/15 text-[#dfc27d]"
                              : "bg-[#c7a35a]/10 text-[#a98032]"
                          }`}
                        >
                          <Check size={10} strokeWidth={2.5} />
                        </span>

                        <span
                          className={`text-[11px] font-medium ${
                            featured
                              ? "text-white/70"
                              : "text-primary/70"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom */}
                  <div
                    className={`mt-9 flex items-center justify-between border-t pt-5 ${
                      featured
                        ? "border-white/10"
                        : "border-primary/7"
                    }`}
                  >
                    <span
                      className={`text-[9px] font-semibold uppercase tracking-[0.2em] ${
                        featured
                          ? "text-[#d8bd7b]/60"
                          : "text-[#a98032]"
                      }`}
                    >
                      {t("explore")}
                    </span>

                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 group-hover:rotate-45 ${
                        featured
                          ? "bg-[#d8bd7b] text-primary shadow-[0_8px_25px_rgba(199,163,90,0.22)]"
                          : "bg-primary text-white group-hover:bg-[#b18b3d]"
                      }`}
                    >
                      <ArrowUpRight size={14} />
                    </div>
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