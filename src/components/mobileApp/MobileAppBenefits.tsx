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
    <section className="bg-[#f8faf9] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#71838a]">
            {t("eyebrow")}
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#082f3a] md:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#71838a]">
            {t("description")}
          </p>
        </div>

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
                className="rounded-[26px] border border-[#082f3a]/[0.07] bg-white p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#082f3a]/5 text-[#082f3a]">
                  <Icon size={17} />
                </div>

                <h3 className="mt-8 text-sm font-semibold text-[#082f3a]">
                  {t(`${benefit.key}.title`)}
                </h3>

                <p className="mt-3 text-[11px] leading-6 text-[#71838a]">
                  {t(`${benefit.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}