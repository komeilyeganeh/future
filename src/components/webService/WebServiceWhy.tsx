"use client";

import {
  ShieldCheck,
  Gauge,
  Headphones,
  Layers3,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const items = [
  {
    key: "reliable",
    icon: ServerIcon,
  },
  {
    key: "secure",
    icon: ShieldCheck,
  },
  {
    key: "performance",
    icon: Gauge,
  },
  {
    key: "support",
    icon: Headphones,
  },
];

function ServerIcon() {
  return <Layers3 size={20} strokeWidth={1.6} />;
}

export default function WebServiceWhy() {
  const t = useTranslations("WebService.why");

  return (
    <section className="bg-[#f8faf9] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#71838a]">
              {t("eyebrow")}
            </span>

            <h2 className="mt-5 max-w-lg text-4xl font-semibold tracking-[-0.04em] text-[#082f3a] md:text-5xl">
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="rounded-[26px] border border-[#082f3a]/[0.07] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(8,47,58,0.06)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#082f3a]/[0.05] text-[#082f3a]">
                    <Icon />
                  </div>

                  <h3 className="mt-7 text-lg font-semibold text-[#082f3a]">
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