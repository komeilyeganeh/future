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

export default function MobileAppHero() {
  const t = useTranslations("MobileApp.hero");

  return (
    <section className="relative overflow-hidden bg-background-soft">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 -top-45 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/2.5 blur-3xl" />

        <div className="absolute -bottom-45 -right-25 h-100 w-100 rounded-full bg-primary/2.5 blur-3xl" />

        <div className="absolute left-[8%] top-[25%] h-px w-[84%] bg-primary/5" />
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
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                <Smartphone size={13} />
              </span>

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

              <span className="block text-secondary">
                {t("titleAccent")}
              </span>
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
              <Link
                href="#development"
                className="group flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {t("primaryButton")}

                <ArrowDown
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </Link>

              <Link
                href="#contact"
                className="flex items-center gap-2 rounded-full border border-[#082f3a]/10 bg-white px-6 py-3.5 text-[10px] font-semibold text-primary transition-all hover:-translate-y-1 hover:border-[#082f3a]/20"
              >
                {t("secondaryButton")}

                <ArrowUpRight size={14} />
              </Link>
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
              <div className="absolute inset-[5%] rounded-full border border-[#082f3a]/6" />

              <div className="absolute inset-[15%] rounded-full border border-[#082f3a]/6" />

              {/* Phone */}
              <div className="absolute left-1/2 top-1/2 h-97.5 w-50 -translate-x-1/2 -translate-y-1/2 rounded-[38px] border-[6px] border-[#082f3a] bg-primary shadow-[0_40px_100px_rgba(8,47,58,0.18)]">
                {/* Screen */}
                <div className="relative h-full overflow-hidden rounded-[30px] bg-background-soft">
                  {/* Notch */}
                  <div className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-primary" />

                  <div className="flex h-full flex-col px-5 pb-6 pt-12">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-semibold tracking-[0.2em] text-secondary">
                        ROSHASOFT
                      </span>

                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
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
                      <Code2 size={16} />

                      <p className="mt-6 text-[9px] font-medium text-white/50">
                        {t("visual.cardLabel")}
                      </p>

                      <p className="mt-1 text-sm font-semibold">
                        {t("visual.cardTitle")}
                      </p>
                    </div>

                    <div className="mt-auto grid grid-cols-3 gap-2">
                      <div className="h-12 rounded-xl bg-primary/5" />
                      <div className="h-12 rounded-xl bg-primary/8" />
                      <div className="h-12 rounded-xl bg-primary/5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute left-[0%] top-[25%] rounded-2xl border border-primary/7 bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]">
                <Smartphone size={18} className="text-primary" />

                <p className="mt-2 text-[9px] font-semibold text-primary">
                  {t("visual.mobile")}
                </p>
              </div>

              <div className="absolute bottom-[20%] right-[0%] rounded-2xl border border-primary/7 bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]">
                <Code2 size={18} className="text-primary" />

                <p className="mt-2 text-[9px] font-semibold text-primary">
                  {t("visual.development")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}