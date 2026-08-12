"use client";

import {
  HeartHandshake,
  Lightbulb,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const icons = [
  Lightbulb,
  HeartHandshake,
  Rocket,
  ShieldCheck,
];

export default function CareersValues() {
  const t = useTranslations("Careers");

  const values = [
    {
      key: "innovation",
      icon: icons[0],
    },
    {
      key: "collaboration",
      icon: icons[1],
    },
    {
      key: "growth",
      icon: icons[2],
    },
    {
      key: "trust",
      icon: icons[3],
    },
  ];

  return (
    <section id="culture" className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#71838a]">
              {t("culture.eyebrow")}
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#082f3a] md:text-5xl">
              {t("culture.title")}
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[#71838a] lg:justify-self-end">
            {t("culture.description")}
          </p>
        </div>

        {/* Values */}
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={value.key}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group rounded-[28px] border border-[#082f3a]/[0.07] bg-[#f8faf9] p-7 transition-all duration-500 hover:border-[#082f3a]/15 hover:shadow-[0_25px_70px_rgba(8,47,58,0.06)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#082f3a] text-white transition-transform duration-500 group-hover:rotate-6">
                  <Icon size={18} strokeWidth={1.7} />
                </div>

                <h3 className="mt-10 text-xl font-semibold tracking-tight text-[#082f3a]">
                  {t(`culture.values.${value.key}.title`)}
                </h3>

                <p className="mt-4 text-xs leading-6 text-[#71838a]">
                  {t(`culture.values.${value.key}.description`)}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}