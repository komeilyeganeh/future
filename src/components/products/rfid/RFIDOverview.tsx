"use client";

import { motion } from "framer-motion";
import { Radio, ShieldCheck, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

export default function RFIDOverview() {
  const t = useTranslations("RFID.overview");

  const features = [
    {
      icon: Radio,
      title: t("features.identification.title"),
      description: t("features.identification.description"),
    },
    {
      icon: Zap,
      title: t("features.efficiency.title"),
      description: t("features.efficiency.description"),
    },
    {
      icon: ShieldCheck,
      title: t("features.accuracy.title"),
      description: t("features.accuracy.description"),
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c7a45d]">
              {t("eyebrow")}
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-primary md:text-5xl">
              {t("title")}
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-8 text-secondary md:text-base">
            {t("description")}
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-primary/7 bg-background-soft p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#c9a45c]/35 hover:bg-white hover:shadow-[0_25px_70px_rgba(8,47,58,0.07)]"
              >
                {/* Subtle gold accent */}
                <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#c9a45c]/[0.045] blur-2xl transition-transform duration-500 group-hover:scale-150" />

                <div className="relative z-10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white transition-colors duration-300 group-hover:bg-[#c9a45c]">
                    <Icon size={19} strokeWidth={1.6} />
                  </div>

                  <h3 className="mt-8 text-xl font-semibold tracking-tight text-primary">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-xs leading-6 text-secondary">
                    {feature.description}
                  </p>

                  <div className="mt-6 h-px w-8 bg-[#c9a45c]/45 transition-all duration-500 group-hover:w-14" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}