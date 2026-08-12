"use client";

import {
  Gauge,
  Layers3,
  Search,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const items = [
  {
    key: "performance",
    icon: Gauge,
  },
  {
    key: "responsive",
    icon: Layers3,
  },
  {
    key: "seo",
    icon: Search,
  },
  {
    key: "reliable",
    icon: ShieldCheck,
  },
];

export default function WebDesignBenefits() {
  const t = useTranslations("WebDesign.benefits");

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#71838a]">
              {t("eyebrow")}
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#082f3a] md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#71838a]">
              {t("description")}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="group rounded-[28px] border border-[#082f3a]/[0.07] bg-[#f8faf9] p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_25px_70px_rgba(8,47,58,0.07)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#082f3a] text-white">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-7 text-lg font-semibold tracking-tight text-[#082f3a]">
                    {t(`${item.key}.title`)}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-[#71838a]">
                    {t(`${item.key}.description`)}
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