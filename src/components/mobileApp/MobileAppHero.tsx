"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Button from "../ui/Button";

export default function MobileAppHero() {
  const t = useTranslations("MobileApp.hero");

  return (
    <section className="relative overflow-hidden bg-background-soft">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 -top-45 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/2.5 blur-3xl" />

        <div className="absolute -bottom-45 -right-25 h-100 w-100 rounded-full bg-[#c9a96e]/5 blur-3xl" />

        <div className="absolute left-[8%] top-[25%] h-px w-[84%] bg-primary/5" />

        {/* Subtle gold glow */}
        <div className="absolute right-[12%] top-[18%] h-70 w-70 rounded-full bg-[#c9a96e]/6 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-40">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.85fr]">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c9a96e]/25 bg-[#c9a96e]/10 text-[#b99654]">
                <Smartphone size={13} />
              </span>

              <span className="h-px w-6 bg-[#c9a96e]/50" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-secondary">
                {t("eyebrow")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.055em] text-primary sm:text-6xl md:text-7xl"
            >
              {t("title")}

              <span className="block text-[#b99654]">{t("titleAccent")}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 max-w-xl text-sm leading-7 text-secondary md:text-base"
            >
              {t("description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Button
                href="/#contact"
                icon={ArrowUpRight}
                iconRotate
                className="bg-[#103d4e] px-6 py-4 text-[10px] font-bold shadow-[0_20px_50px_rgba(16,61,78,.18)] hover:shadow-[0_28px_60px_rgba(8,120,140,.25)]"
              >
                {t("primaryButton")}
              </Button>

              <Button
                href="/#services"
                variant="secondary"
                icon={ArrowDown}
                className="border-[#08788c]/15 bg-white/65 px-5 py-4 text-[10px] font-bold text-[#315d6b] shadow-[0_10px_35px_rgba(20,70,85,.04)] backdrop-blur-xl hover:border-accent/40 hover:bg-white"
              >
                {t("secondaryButton")}
              </Button>
            </motion.div>
          </div>

          {/* Phone Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto w-full max-w-110"
          >
            <div className="relative aspect-square">
              {/* Outer rings */}
              <div className="absolute inset-[5%] rounded-full border border-primary/6" />

              <div className="absolute inset-[15%] rounded-full border border-[#c9a96e]/20" />

              <div className="absolute inset-[25%] rounded-full border border-primary/5" />

              {/* Gold orbit accent */}
              <div className="absolute inset-[15%] rounded-full border border-transparent border-t-[#c9a96e]/50 rotate-[-25deg]" />

              {/* Phone */}
              <div className="absolute left-1/2 top-1/2 h-97.5 w-50 -translate-x-1/2 -translate-y-1/2 rounded-[38px] border-[6px] border-primary bg-primary shadow-[0_40px_100px_rgba(8,47,58,0.18)]">
                {/* Gold phone edge */}
                <div className="pointer-events-none absolute inset-[-6px] rounded-[40px] border border-[#c9a96e]/25" />

                {/* Screen */}
                <div className="relative h-full overflow-hidden rounded-[30px] bg-background-soft">
                  {/* Notch */}
                  <div className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-primary" />

                  <div className="flex h-full flex-col px-5 pb-6 pt-12">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-semibold tracking-[0.2em] text-secondary">
                        ROSHASOFT
                      </span>

                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c9a96e] text-primary">
                        <Sparkles size={11} />
                      </div>
                    </div>

                    <div className="mt-10">
                      <span className="text-[8px] uppercase tracking-[0.2em] text-secondary">
                        {t("visual.eyebrow")}
                      </span>

                      <p className="mt-2 text-2xl font-semibold leading-tight tracking-tight text-primary">
                        {t("visual.title")}
                      </p>
                    </div>

                    <div className="mt-7 rounded-2xl bg-primary p-4 text-white">
                      <Code2 size={16} className="text-[#d8bb82]" />

                      <p className="mt-6 text-[9px] font-medium text-white/50">
                        {t("visual.cardLabel")}
                      </p>

                      <p className="mt-1 text-sm font-semibold">
                        {t("visual.cardTitle")}
                      </p>

                      <div className="mt-4 h-px w-1/2 bg-[#c9a96e]/40" />
                    </div>

                    <div className="mt-auto grid grid-cols-3 gap-2">
                      <div className="h-12 rounded-xl bg-primary/5" />

                      <div className="h-12 rounded-xl bg-[#c9a96e]/12" />

                      <div className="h-12 rounded-xl bg-primary/5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute left-[0%] top-[25%] rounded-2xl border border-[#c9a96e]/25 bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)] transition-transform duration-500 hover:-translate-y-1">
                <Smartphone size={18} className="text-[#b99654]" />

                <p className="mt-2 text-[9px] font-semibold text-primary">
                  {t("visual.mobile")}
                </p>
              </div>

              <div className="absolute bottom-[20%] right-[0%] rounded-2xl border border-[#c9a96e]/25 bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)] transition-transform duration-500 hover:-translate-y-1">
                <Code2 size={18} className="text-[#b99654]" />

                <p className="mt-2 text-[9px] font-semibold text-primary">
                  {t("visual.development")}
                </p>
              </div>

              {/* Small gold marker */}
              <div className="absolute bottom-[8%] left-[17%] h-2 w-2 rounded-full bg-[#c9a96e] shadow-[0_0_0_6px_rgba(201,169,110,0.10)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
