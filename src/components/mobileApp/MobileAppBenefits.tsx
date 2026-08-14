"use client";

import {
  HeartHandshake,
  Layers2,
  MousePointer2,
  Target,
  UsersRound,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function MobileAppBenefits() {
  const t = useTranslations("MobileApp.benefits");

  const benefits = [
    {
      key: "experience",
      icon: MousePointer2,
    },
    {
      key: "cost",
      icon: Layers2,
    },
    {
      key: "audience",
      icon: UsersRound,
    },
    {
      key: "business",
      icon: Target,
    },
    {
      key: "loyalty",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background-soft py-24 md:py-32">
      {/* Subtle gold atmosphere */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-[#c6a15b]/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#c6a15b]/[0.025] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Heading */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#c6a15b]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c7a45d]">
              {t("eyebrow")}
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-secondary">
            {t("description")}
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.key}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.25 },
                }}
                className="group relative overflow-hidden rounded-[26px] border border-primary/7 bg-white p-6 transition-all duration-500 hover:border-[#c6a15b]/35 hover:shadow-[0_25px_70px_rgba(8,47,58,0.07)]"
              >
                {/* Gold corner accent */}
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#c6a15b]/[0.045] transition-transform duration-500 group-hover:scale-150" />

                {/* Top accent */}
                <div className="absolute left-6 right-6 top-0 h-px origin-left scale-x-0 bg-[#c6a15b]/60 transition-transform duration-500 group-hover:scale-x-100" />

                <div className="relative z-10">
                  {/* Number */}
                  <span className="text-[9px] font-semibold tracking-[0.25em] text-[#c6a15b]/70">
                    0{index + 1}
                  </span>

                  {/* Icon */}
                  <div className="mt-5 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary transition-all duration-500 group-hover:bg-[#c6a15b]/10 group-hover:text-[#a88443] group-hover:rotate-6">
                    <Icon size={17} strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <h3 className="mt-8 text-sm font-semibold text-primary transition-colors duration-300 group-hover:text-[#a88443]">
                    {t(`${benefit.key}.title`)}
                  </h3>

                  <p className="mt-3 text-[11px] leading-6 text-secondary">
                    {t(`${benefit.key}.description`)}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-6 flex items-center gap-2">
                    <span className="h-px w-5 bg-[#c6a15b]/40 transition-all duration-300 group-hover:w-9 group-hover:bg-[#c6a15b]" />

                    <span className="h-1 w-1 rounded-full bg-[#c6a15b]/60" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}