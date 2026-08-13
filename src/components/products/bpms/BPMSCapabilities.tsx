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
                className={`group relative overflow-hidden rounded-[30px] border p-7 md:p-9 ${
                  item.featured
                    ? "border-[#082f3a] bg-primary text-white"
                    : "border-primary/7 bg-white text-primary"
                }`}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <span
                      className={`text-[10px] font-semibold tracking-[0.2em] ${
                        item.featured
                          ? "text-white/40"
                          : "text-secondary"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                        item.featured
                          ? "bg-white text-primary"
                          : "bg-primary/5 text-primary"
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
                            : "border-[#082f3a]/6"
                        }`}
                      >
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            item.featured
                              ? "bg-white/10 text-white"
                              : "bg-primary/5 text-primary"
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