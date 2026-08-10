"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Code2,
  LockKeyhole,
  Workflow,
} from "lucide-react";
import { useTranslations } from "next-intl";

const icons = [
  Code2,
  Cloud,
  BrainCircuit,
  LockKeyhole,
  Workflow,
];

const keys = [
  "software",
  "cloud",
  "ai",
  "security",
  "transformation",
] as const;

export default function Services() {
  const t = useTranslations("Home.services");

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-28 sm:py-36"
    >
      <div className="mx-auto w-[calc(100%-30px)] max-w-[1240px] md:w-[calc(100%-48px)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-[700px]"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6c4cff]">
            {t("kicker")}
          </span>

          <h2 className="mt-4 text-[42px] font-extrabold leading-[.98] tracking-[-.065em] text-[#11131a] sm:text-[58px]">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-[610px] text-[14px] leading-[1.9] text-[#737a88]">
            {t("description")}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {keys.map((key, index) => {
            const Icon = icons[index];

            return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.07,
                }}
                whileHover={{ y: -7 }}
                className={`group relative overflow-hidden rounded-[28px] border border-black/[0.06] bg-[#f8f9fc] p-7 transition-shadow duration-500 hover:shadow-[0_25px_70px_rgba(27,31,55,.09)] ${
                  index === 0
                    ? "lg:col-span-2"
                    : ""
                }`}
              >
                <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#6c4cff]/[0.06] blur-3xl transition-all duration-700 group-hover:scale-150" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/[0.06] bg-white shadow-[0_10px_30px_rgba(27,31,55,.06)]">
                      <Icon
                        size={20}
                        strokeWidth={1.7}
                        className="text-[#624cff]"
                      />
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.06] bg-white text-[#9299a6] transition-all duration-300 group-hover:bg-[#11131a] group-hover:text-white">
                      <ArrowUpRight size={15} />
                    </div>
                  </div>

                  <div className="mt-14 max-w-[500px]">
                    <span className="text-[9px] font-bold uppercase tracking-[.15em] text-[#a0a6b1]">
                      0{index + 1}
                    </span>

                    <h3 className="mt-3 text-[22px] font-bold tracking-[-.04em] text-[#171922]">
                      {t(`${key}.title`)}
                    </h3>

                    <p className="mt-3 max-w-[500px] text-[12px] leading-[1.8] text-[#747b88]">
                      {t(`${key}.description`)}
                    </p>
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
