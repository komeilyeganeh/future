"use client";

import { motion } from "framer-motion";
import { Check, Layers3, ScanLine, TimerReset } from "lucide-react";
import { useTranslations } from "next-intl";

export default function RFIDBenefits() {
  const t = useTranslations("RFID.benefits");

  const benefits = [
    {
      icon: ScanLine,
      title: t("visibility.title"),
      description: t("visibility.description"),
    },
    {
      icon: TimerReset,
      title: t("speed.title"),
      description: t("speed.description"),
    },
    {
      icon: Layers3,
      title: t("scalability.title"),
      description: t("scalability.description"),
    },
  ];

  return (
    <section className="bg-background-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
          {/* Left */}
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-secondary">
              {t("eyebrow")}
            </span>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.045em] text-primary md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-secondary">
              {t("description")}
            </p>

            <div className="mt-9 space-y-3">
              {[
                t("points.one"),
                t("points.two"),
                t("points.three"),
                t("points.four"),
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                    <Check size={11} strokeWidth={2.5} />
                  </span>

                  <span className="text-xs font-medium text-primary/70">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="flex gap-5 rounded-[26px] border border-primary/7 bg-white p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
                    <Icon size={18} strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-primary">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-secondary">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}