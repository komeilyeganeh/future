"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Compass,
  Layers3,
  Rocket,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";

const steps = [
  {
    key: "discover",
    icon: Compass,
  },
  {
    key: "design",
    icon: Layers3,
  },
  {
    key: "engineer",
    icon: Rocket,
  },
  {
    key: "evolve",
    icon: Sparkles,
  },
] as const;

export default function Process() {
  const t = useTranslations("Home.process");

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#11131a] py-28 text-white sm:py-36"
    >
      <div className="pointer-events-none absolute -right-50 -top-50 h-162.5 w-162.5 rounded-full bg-purple-accent/20 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-75 -left-50 h-150 w-150 rounded-full bg-[#36c8e8]/10 blur-[130px]" />

      <div className="relative mx-auto w-[calc(100%-30px)] max-w-310 md:w-[calc(100%-48px)]">
        <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[.18em] text-[#9e8dff]">
              {t("kicker")}
            </span>

            <h2 className="mt-4 text-[43px] font-extrabold leading-[.98] tracking-[-.065em] sm:text-[60px]">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-107.5 text-[13px] leading-[1.9] text-white/45">
              {t("description")}
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[25px] top-8 hidden h-[calc(100%-60px)] w-px bg-white/8 sm:block" />

            <div className="space-y-4">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.key}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: .2 }}
                    transition={{
                      duration: .65,
                      delay: index * .08,
                    }}
                    className="group relative flex gap-5 rounded-[25px] border border-white/[0.07] bg-white/[0.035] p-5 backdrop-blur-xl transition-colors hover:bg-white/6 sm:p-6"
                  >
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/[0.1] bg-[#1b1e28] text-[#a596ff]">
                      <Icon size={19} strokeWidth={1.6} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-[9px] font-bold uppercase tracking-[.15em] text-white/25">
                          Step 0{index + 1}
                        </span>

                        <ArrowDownRight
                          size={15}
                          className="text-white/20 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                        />
                      </div>

                      <h3 className="mt-3 text-[18px] font-bold tracking-[-.035em]">
                        {t(`${step.key}.title`)}
                      </h3>

                      <p className="mt-2 max-w-[560px] text-[11px] leading-[1.8] text-white/40">
                        {t(`${step.key}.description`)}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
