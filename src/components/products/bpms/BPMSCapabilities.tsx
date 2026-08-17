"use client";

import {
  Bot,
  Check,
  GitBranch,
  Layers3,
  LineChart,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const capabilities = [
  {
    key: "automation",
    icon: Bot,
    featured: true,
  },
  {
    key: "workflow",
    icon: GitBranch,
    featured: false,
  },
  {
    key: "integration",
    icon: Layers3,
    featured: false,
  },
  {
    key: "collaboration",
    icon: Users,
    featured: false,
  },
  {
    key: "monitoring",
    icon: LineChart,
    featured: false,
  },
];

export default function BPMSCapabilities() {
  const t = useTranslations("BPMS.capabilities");

  return (
    <section id="capabilities" className="bg-background-soft">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
              {t("eyebrow")}
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-primary md:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-secondary">
            {t("description")}
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            const features = [
              t(`items.${item.key}.item1`),
              t(`items.${item.key}.item2`),
              t(`items.${item.key}.item3`),
              t(`items.${item.key}.item4`),
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
                className={`group relative overflow-hidden rounded-[30px] border p-7 transition-all duration-300 md:p-9 ${
                  item.featured
                    ? "border-primary bg-primary text-white shadow-[0_25px_70px_rgba(8,47,58,0.12)]"
                    : "border-primary/7 bg-white text-primary hover:border-accent/20 hover:shadow-[0_20px_60px_rgba(8,47,58,0.06)]"
                }`}
              >
                {/* Decorative accent */}
                <div
                  className={`absolute -right-20 -top-20 h-44 w-44 rounded-full transition-transform duration-700 group-hover:scale-125 ${
                    item.featured
                      ? "bg-accent/[0.06]"
                      : "bg-accent/[0.035]"
                  }`}
                />

                {item.featured && (
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-700 group-hover:w-24" />
                )}

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <span
                      className={`text-[10px] font-semibold tracking-[0.2em] ${
                        item.featured
                          ? "text-accent/70"
                          : "text-secondary"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${
                        item.featured
                          ? "bg-accent text-primary shadow-[0_10px_30px_rgba(212,175,55,0.18)]"
                          : "bg-primary/5 text-primary group-hover:bg-accent group-hover:text-primary"
                      }`}
                    >
                      <Icon size={20} strokeWidth={1.7} />
                    </div>
                  </div>

                  <h3 className="mt-12 text-2xl font-semibold tracking-tight md:text-3xl">
                    {t(`items.${item.key}.title`)}
                  </h3>

                  <p
                    className={`mt-5 max-w-md text-sm leading-7 ${
                      item.featured
                        ? "text-white/60"
                        : "text-secondary"
                    }`}
                  >
                    {t(`items.${item.key}.description`)}
                  </p>

                  <div className="mt-9 space-y-3">
                    {features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`flex items-center gap-3 border-b pb-3 last:border-0 ${
                          item.featured
                            ? "border-white/8"
                            : "border-primary/6"
                        }`}
                      >
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                            item.featured
                              ? "bg-accent text-primary"
                              : "bg-primary/5 text-primary group-hover:bg-accent/15 group-hover:text-accent"
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