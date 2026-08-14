"use client";

import {
  BarChart3,
  Boxes,
  Check,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const capabilities = [
  {
    key: "inventory",
    icon: Boxes,
    featured: true,
  },
  {
    key: "purchasing",
    icon: ShoppingCart,
    featured: false,
  },
  {
    key: "sales",
    icon: TrendingUp,
    featured: false,
  },
  {
    key: "reporting",
    icon: BarChart3,
    featured: false,
  },
];

export default function MMSCapabilities() {
  const t = useTranslations("MMS.capabilities");

  return (
    <section id="capabilities" className="bg-background-soft">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        {/* Heading */}
        <div className="max-w-2xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c7a45d]">
            {t("eyebrow")}
          </span>

          <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-primary md:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-secondary">
            {t("description")}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            const features = [
              t(`items.${item.key}.item1`),
              t(`items.${item.key}.item2`),
              t(`items.${item.key}.item3`),
              t(`items.${item.key}.item4`),
              t(`items.${item.key}.item5`),
            ];

            return (
              <motion.article
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -7 }}
                className={`group relative overflow-hidden rounded-[30px] border p-7 transition-all duration-500 md:p-9 ${
                  item.featured
                    ? "border-[#c9a45c]/30 bg-primary text-white shadow-[0_25px_80px_rgba(201,164,92,0.08)]"
                    : "border-primary/7 bg-white text-primary hover:border-[#c9a45c]/30 hover:shadow-[0_25px_70px_rgba(201,164,92,0.08)]"
                }`}
              >
                {/* Decorative circle */}
                <div
                  className={`absolute -right-16 -top-16 h-40 w-40 rounded-full transition-all duration-700 group-hover:scale-125 ${
                    item.featured
                      ? "bg-[#c9a45c]/10"
                      : "bg-[#c9a45c]/5"
                  }`}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <span
                      className={`text-[10px] font-semibold tracking-[0.2em] ${
                        item.featured
                          ? "text-[#d8bd82]/70"
                          : "text-[#a98743]"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 group-hover:rotate-3 ${
                        item.featured
                          ? "bg-[#c9a45c] text-primary"
                          : "bg-[#c9a45c]/10 text-[#a98743] group-hover:bg-[#c9a45c] group-hover:text-white"
                      }`}
                    >
                      <Icon size={20} strokeWidth={1.7} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-12 text-2xl font-semibold tracking-tight md:text-3xl">
                    {t(`items.${item.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mt-5 max-w-md text-sm leading-7 ${
                      item.featured ? "text-white/60" : "text-secondary"
                    }`}
                  >
                    {t(`items.${item.key}.description`)}
                  </p>

                  {/* Features */}
                  <div className="mt-9 space-y-3">
                    {features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`flex items-center gap-3 border-b pb-3 last:border-0 ${
                          item.featured
                            ? "border-white/8"
                            : "border-[#082f3a]/6"
                        }`}
                      >
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            item.featured
                              ? "bg-[#c9a45c]/20 text-[#e0c88f]"
                              : "bg-[#c9a45c]/10 text-[#a98743]"
                          }`}
                        >
                          <Check size={11} strokeWidth={2.5} />
                        </span>

                        <span
                          className={`text-[11px] font-medium ${
                            item.featured
                              ? "text-white/75"
                              : "text-primary/70"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
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