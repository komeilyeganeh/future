"use client";

import {
  Activity,
  FileHeart,
  MonitorSmartphone,
  Stethoscope,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const items = [
  {
    key: "clinical",
    icon: Stethoscope,
  },
  {
    key: "departments",
    icon: Activity,
  },
  {
    key: "devices",
    icon: MonitorSmartphone,
  },
  {
    key: "patient",
    icon: FileHeart,
  },
];

export default function HISClinical() {
  const t = useTranslations("HIS.clinical");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
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

          <div className="grid gap-3 sm:grid-cols-2">
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
                  className="rounded-[26px] border border-primary/7 bg-background-soft p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                    <Icon size={17} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-7 text-base font-semibold text-primary">
                    {t(`items.${item.key}.title`)}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-secondary">
                    {t(`items.${item.key}.description`)}
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