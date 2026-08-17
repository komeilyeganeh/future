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
    <section
      id="culture"
      className="relative overflow-hidden bg-white"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-accent-light/3 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent-light" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c7a45d]">
                {t("culture.eyebrow")}
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] text-primary md:text-5xl">
              {t("culture.title")}
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-secondary lg:justify-self-end">
            {t("culture.description")}
          </p>
        </motion.div>

        {/* Values */}
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={value.key}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-primary/7 bg-background-soft p-7 transition-all duration-500 hover:border-accent-light/25 hover:shadow-[0_25px_70px_rgba(8,47,58,0.07)]"
              >
                {/* Subtle gold glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-accent-light/0 blur-2xl transition-all duration-700 group-hover:bg-accent-light/8" />

                {/* Top accent */}
                <div className="absolute left-0 top-0 h-px w-0 bg-linear-to-r from-accent-light to-transparent transition-all duration-700 group-hover:w-full" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white transition-all duration-500 group-hover:rotate-6 group-hover:bg-accent-light group-hover:text-primary group-hover:shadow-[0_10px_25px_rgba(214,173,85,.18)]">
                    <Icon
                      size={18}
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3 className="mt-10 text-xl font-semibold tracking-tight text-primary transition-colors duration-300 group-hover:text-[#08788c]">
                    {t(`culture.values.${value.key}.title`)}
                  </h3>

                  <p className="mt-4 text-xs leading-6 text-secondary">
                    {t(`culture.values.${value.key}.description`)}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-7 h-px w-8 bg-accent-light/30 transition-all duration-500 group-hover:w-16 group-hover:bg-accent-light" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}