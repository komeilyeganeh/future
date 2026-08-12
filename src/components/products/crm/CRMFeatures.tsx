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
    <section id="features" className="bg-[#f8faf9]">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="max-w-2xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#71838a]">
            {t("eyebrow")}
          </span>

          <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#082f3a] md:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#71838a]">
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
                className={`group relative overflow-hidden rounded-[28px] border p-7 ${
                  item.featured
                    ? "border-[#082f3a] bg-[#082f3a] text-white md:col-span-2"
                    : "border-[#082f3a]/[0.07] bg-white text-[#082f3a]"
                }`}
              >
                <div
                  className={`absolute -right-16 -top-16 h-40 w-40 rounded-full ${
                    item.featured
                      ? "bg-white/4"
                      : "bg-[#082f3a]/2.5"
                  } transition-transform duration-700 group-hover:scale-125`}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <span
                      className={`text-[10px] font-semibold tracking-[0.2em] ${
                        item.featured
                          ? "text-white/40"
                          : "text-[#71838a]"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                        item.featured
                          ? "bg-white text-[#082f3a]"
                          : "bg-[#082f3a]/5 text-[#082f3a]"
                      }`}
                    >
                      <Icon size={19} strokeWidth={1.7} />
                    </div>
                  </div>

                  <h3 className="mt-10 text-2xl font-semibold tracking-tight">
                    {t(`items.${item.key}.title`)}
                  </h3>

                  <p
                    className={`mt-4 max-w-xl text-sm leading-7 ${
                      item.featured
                        ? "text-white/60"
                        : "text-[#71838a]"
                    }`}
                  >
                    {t(`items.${item.key}.description`)}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}