"use client";

import {
  ContactRound,
  Database,
  Settings2,
  Target,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const features = [
  {
    key: "customers",
    icon: Users,
    featured: true,
  },
  {
    key: "leads",
    icon: Target,
    featured: false,
  },
  {
    key: "interactions",
    icon: ContactRound,
    featured: false,
  },
  {
    key: "data",
    icon: Database,
    featured: false,
  },
  {
    key: "customization",
    icon: Settings2,
    featured: false,
  },
];

export default function CRMFeatures() {
  const t = useTranslations("CRM.features");

  return (
    <section id="features" className="bg-background-soft">
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

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.key}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-[28px] border p-7 transition-all duration-500 ${
                  item.featured
                    ? "border-primary bg-primary text-white md:col-span-2 hover:border-accent/40 hover:shadow-[0_25px_70px_rgba(8,47,58,0.16)]"
                    : "border-primary/7 bg-white text-primary hover:border-accent/20 hover:shadow-[0_20px_60px_rgba(8,47,58,0.07)]"
                }`}
              >
                {/* Decorative gold glow */}
                <div
                  className={`absolute -right-16 -top-16 h-40 w-40 rounded-full transition-all duration-700 group-hover:scale-125 ${
                    item.featured
                      ? "bg-accent/[0.08] blur-xl"
                      : "bg-accent/[0.05] blur-2xl"
                  }`}
                />

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
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300 ${
                        item.featured
                          ? "bg-white text-primary group-hover:bg-accent group-hover:text-primary"
                          : "bg-accent/[0.08] text-accent group-hover:bg-accent group-hover:text-primary group-hover:shadow-[0_8px_25px_rgba(199,164,93,0.2)]"
                      }`}
                    >
                      <Icon size={19} strokeWidth={1.7} />
                    </div>
                  </div>

                  <h3
                    className={`mt-10 text-2xl font-semibold tracking-tight transition-colors duration-300 ${
                      item.featured
                        ? "group-hover:text-accent"
                        : "group-hover:text-accent"
                    }`}
                  >
                    {t(`items.${item.key}.title`)}
                  </h3>

                  <p
                    className={`mt-4 max-w-xl text-sm leading-7 ${
                      item.featured
                        ? "text-white/60"
                        : "text-secondary"
                    }`}
                  >
                    {t(`items.${item.key}.description`)}
                  </p>

                  {/* Gold accent line */}
                  <div
                    className={`mt-7 h-px w-0 bg-accent transition-all duration-500 group-hover:w-14 ${
                      item.featured ? "bg-accent" : ""
                    }`}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}