"use client";

import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Sparkles,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function CareersHero() {
  const t = useTranslations("Careers");

  return (
    <section className="relative overflow-hidden bg-[#f8faf9]">
      {/* -------------------------------------------------- */}
      {/* Background */}
      {/* -------------------------------------------------- */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[18%] h-px w-[84%] bg-[#082f3a]/6" />

        <div className="absolute left-[8%] top-[18%] h-[70%] w-px bg-[#082f3a]/6" />

        <div className="absolute right-[8%] top-[18%] h-[70%] w-px bg-[#082f3a]/6" />

        <div className="absolute -bottom-45 left-1/2 h-105 w-105 -translate-x-1/2 rounded-full bg-[#082f3a]/2.5 blur-3xl" />
      </div>

      {/* -------------------------------------------------- */}
      {/* Main */}
      {/* -------------------------------------------------- */}

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-28 md:px-8 md:pb-14 md:pt-40">
        {/* Top meta */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between border-b border-[#082f3a]/8 pb-5"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#082f3a] text-white">
              <BriefcaseBusiness size={13} />
            </span>

            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#71838a]">
              {t("hero.eyebrow")}
            </span>
          </div>

          <span className="hidden text-[9px] font-medium uppercase tracking-[0.25em] text-[#71838a] md:block">
            {t("hero.meta")}
          </span>
        </motion.div>

        {/* ------------------------------------------------ */}
        {/* Statement */}
        {/* ------------------------------------------------ */}

        <div className="relative py-16 md:py-24">
          {/* Huge decorative number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="pointer-events-none absolute -right-3 top-4 select-none text-[180px] font-semibold leading-none -tracking-widest text-[#082f3a]/2.5 md:-right-5 md:text-[280px]"
          >
            01
          </motion.div>

          <div className="relative z-10 max-w-6xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-7 max-w-xl text-sm leading-7 text-[#71838a] md:text-base"
            >
              {t("hero.intro")}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="max-w-5xl text-[clamp(3.5rem,9vw,8.5rem)] font-semibold leading-[0.86] tracking-[-0.065em] text-[#082f3a]"
            >
              {t("hero.title")}
              <span className="block text-[#71838a]">
                {t("hero.titleAccent")}
              </span>
            </motion.h1>
          </div>
        </div>

        {/* ------------------------------------------------ */}
        {/* Bottom content */}
        {/* ------------------------------------------------ */}

        <div className="grid gap-8 border-t border-[#082f3a]/8 pt-8 md:grid-cols-[1fr_auto] md:items-end">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="max-w-xl"
          >
            <p className="text-sm leading-7 text-[#71838a]">
              {t("hero.description")}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#jobs"
                className="group inline-flex items-center gap-3 rounded-full bg-[#082f3a] px-6 py-3.5 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(8,47,58,0.18)]"
              >
                {t("hero.primaryButton")}

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={13} />
                </span>
              </a>

              <a
                href="#culture"
                className="group inline-flex items-center gap-3 rounded-full border border-[#082f3a]/10 bg-white px-6 py-3.5 text-[10px] font-semibold text-[#082f3a] transition-all duration-300 hover:-translate-y-1 hover:border-[#082f3a]/20"
              >
                {t("hero.secondaryButton")}

                <ArrowDown
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>
            </div>
          </motion.div>

          {/* ------------------------------------------------ */}
          {/* Hiring card */}
          {/* ------------------------------------------------ */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="relative w-full max-w-75 justify-self-start md:justify-self-end"
          >
            <div className="group relative overflow-hidden rounded-[26px] border border-[#082f3a]/8 bg-white p-5 shadow-[0_25px_80px_rgba(8,47,58,0.06)]">
              {/* Small glow */}
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#082f3a]/[0.035] blur-2xl" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#082f3a] text-white">
                    <Sparkles size={15} />
                  </div>

                  <span className="flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#71838a]">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#082f3a]" />
                    {t("hero.status")}
                  </span>
                </div>

                <h2 className="mt-8 text-xl font-semibold tracking-tight text-[#082f3a]">
                  {t("hero.cardTitle")}
                </h2>

                <p className="mt-3 text-xs leading-6 text-[#71838a]">
                  {t("hero.cardDescription")}
                </p>

                <div className="mt-7 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#082f3a] text-white">
                      <Code2 size={12} />
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#dfe7e5] text-[#082f3a]">
                      <Users size={12} />
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#71838a] text-white">
                      <Sparkles size={12} />
                    </div>
                  </div>

                  <span className="ml-2 text-[9px] font-medium text-[#71838a]">
                    {t("hero.cardPeople")}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ------------------------------------------------ */}
        {/* Role ticker */}
        {/* ------------------------------------------------ */}

        <div className="mt-14 overflow-hidden border-y border-[#082f3a]/[0.07] py-4">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max items-center"
          >
            {[...Array(2)].map((_, groupIndex) => (
              <div
                key={groupIndex}
                className="flex items-center"
              >
                <span className="mx-8 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#082f3a]/40">
                  {t("hero.ticker.development")}
                </span>

                <span className="h-1 w-1 rounded-full bg-[#082f3a]/20" />

                <span className="mx-8 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#082f3a]/40">
                  {t("hero.ticker.design")}
                </span>

                <span className="h-1 w-1 rounded-full bg-[#082f3a]/20" />

                <span className="mx-8 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#082f3a]/40">
                  {t("hero.ticker.ai")}
                </span>

                <span className="h-1 w-1 rounded-full bg-[#082f3a]/20" />

                <span className="mx-8 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#082f3a]/40">
                  {t("hero.ticker.marketing")}
                </span>

                <span className="h-1 w-1 rounded-full bg-[#082f3a]/20" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}