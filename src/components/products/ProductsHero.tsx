"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Boxes,
  Cpu,
  Database,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Button from "../ui/Button";

export default function ProductsHero() {
  const t = useTranslations("Products");

  return (
    <section className="relative overflow-hidden bg-background-soft">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-[-180px] h-130 w-130 rounded-full bg-[#08788c]/6 blur-[100px]" />

        <div className="absolute right-[-180px] top-[20%] h-150 w-150 rounded-full bg-[#c8a45d]/5 blur-[120px]" />

        <div className="absolute bottom-[-180px] left-1/2 h-100 w-100 -translate-x-1/2 rounded-full bg-primary/3 blur-[100px]" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#082f3a 1px, transparent 1px), linear-gradient(90deg, #082f3a 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36 lg:pt-40">
        <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_.98fr] lg:gap-20">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="relative z-10">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#c8a45d]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c7a45d]">
                {t("hero.eyebrow")}
              </span>

              <span className="h-1 w-1 rounded-full bg-[#c8a45d]" />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-w-3xl text-[48px] font-black leading-[0.93] tracking-[-0.065em] text-primary sm:text-[62px] lg:text-[76px]"
            >
              {t("hero.title")}

              <span className="mt-2 block text-[#08788c]">
                {t("hero.titleAccent")}
              </span>
            </motion.h1>

            {/* Accent line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 70, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-7 h-1 rounded-full bg-linear-to-r from-[#08788c] via-[#c8a45d] to-transparent"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="mt-7 max-w-xl text-sm leading-7 text-secondary md:text-[15px]"
            >
              {t("hero.description")}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Button
                href="/#contact"
                icon={ArrowUpRight}
                iconRotate
                className="bg-[#103d4e] px-6 py-4 text-[10px] font-bold shadow-[0_20px_50px_rgba(16,61,78,.18)] hover:shadow-[0_28px_60px_rgba(8,120,140,.25)]"
              >
                {t("hero.primaryButton")}
              </Button>

              <Button
                href="/#services"
                variant="secondary"
                icon={ArrowDown}
                className="border-[#08788c]/15 bg-white/65 px-5 py-4 text-[10px] font-bold text-primary-soft shadow-[0_10px_35px_rgba(20,70,85,.04)] backdrop-blur-xl hover:border-accent/40 hover:bg-white"
              >
                {t("hero.secondaryButton")}
              </Button>
            </motion.div>

            {/* Small metadata */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.6,
              }}
              className="mt-12 flex items-center gap-4"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#c8a45d]/20 bg-[#c8a45d]/7 text-[#a9853e]">
                <Sparkles size={12} />
              </span>

              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#9aa9ae]">
                RoshaSoft / Product ecosystem
              </span>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT PRODUCT SYSTEM VISUAL
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mx-auto w-full max-w-135"
          >
            <div className="relative aspect-square">
              {/* Outer glow */}
              <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#08788c]/7 blur-[80px]" />

              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[5%] rounded-full border border-primary/7"
              >
                <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#c8a45d] shadow-[0_0_15px_rgba(200,164,93,.5)]" />
              </motion.div>

              {/* Second ring */}
              <div className="absolute inset-[15%] rounded-full border border-[#08788c]/10" />

              {/* Connection lines */}
              <div className="absolute left-[23%] top-1/2 h-px w-[54%] bg-linear-to-r from-transparent via-[#08788c]/15 to-transparent" />

              <div className="absolute left-1/2 top-[23%] h-[54%] w-px bg-linear-to-b from-transparent via-[#08788c]/15 to-transparent" />

              {/* Diagonal connections */}
              <div className="absolute left-[28%] top-[28%] h-px w-[44%] rotate-45 bg-[#c8a45d]/15" />

              <div className="absolute bottom-[28%] left-[28%] h-px w-[44%] -rotate-45 bg-[#c8a45d]/15" />

              {/* =================================================
                  CENTER PRODUCT CORE
              ================================================= */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 z-20 flex h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[32px] border border-[#c8a45d]/25 bg-primary shadow-[0_35px_100px_rgba(8,47,58,.22)]"
              >
                <div className="absolute inset-2 rounded-[26px] border border-white/6" />

                <div className="relative flex flex-col items-center text-center text-white">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#c8a45d]/12 text-[#d8b76a]">
                    <Boxes size={21} />
                  </div>

                  <span className="mt-4 text-[8px] font-bold uppercase tracking-[0.28em] text-white/35">
                    {t("hero.centerEyebrow")}
                  </span>

                  <span className="mt-2 text-[20px] font-bold tracking-[-.04em]">
                    {t("hero.centerTitle")}
                  </span>

                  <span className="text-[16px] font-semibold text-[#70d9e5]/60">
                    {t("hero.centerAccent")}
                  </span>
                </div>
              </motion.div>

              {/* =================================================
                  MODULE: ERP
              ================================================= */}
              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                className="absolute left-[2%] top-[22%] z-20 w-28 rounded-[22px] border border-white/80 bg-white/85 p-4 shadow-[0_20px_60px_rgba(8,47,58,.10)] backdrop-blur-xl"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#08788c]/7 text-[#08788c]">
                  <Database size={17} />
                </div>

                <p className="mt-3 text-[9px] font-bold text-primary">ERP</p>

                <span className="mt-1 block text-[7px] uppercase tracking-[.14em] text-secondary">
                  Enterprise
                </span>
              </motion.div>

              {/* =================================================
                  MODULE: AI
              ================================================= */}
              <motion.div
                animate={{
                  y: [0, 7, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute right-[1%] top-[12%] z-20 w-28 rounded-[22px] border border-[#c8a45d]/15 bg-white/90 p-4 shadow-[0_20px_60px_rgba(8,47,58,.10)] backdrop-blur-xl"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#c8a45d]/10 text-[#a9853e]">
                  <Cpu size={17} />
                </div>

                <p className="mt-3 text-[9px] font-bold text-primary">AI</p>

                <span className="mt-1 block text-[7px] uppercase tracking-[.14em] text-secondary">
                  Intelligence
                </span>
              </motion.div>

              {/* =================================================
                  MODULE: SYSTEMS
              ================================================= */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className="absolute bottom-[13%] right-[5%] z-20 w-28 rounded-[22px] border border-white/80 bg-white/85 p-4 shadow-[0_20px_60px_rgba(8,47,58,.10)] backdrop-blur-xl"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/6 text-primary">
                  <Boxes size={17} />
                </div>

                <p className="mt-3 text-[9px] font-bold text-primary">
                  Systems
                </p>

                <span className="mt-1 block text-[7px] uppercase tracking-[.14em] text-secondary">
                  Platforms
                </span>
              </motion.div>

              {/* =================================================
                  STATUS CHIP
              ================================================= */}
              <div className="absolute bottom-[12%] left-[5%] z-20 flex items-center gap-2 rounded-full border border-primary/7 bg-white/75 px-3 py-2 backdrop-blur-xl">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c8a45d]/50" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-[#c8a45d]" />
                </span>

                <span className="text-[7px] font-bold uppercase tracking-[.16em] text-secondary">
                  Connected
                </span>
              </div>

              {/* Index */}
              <span className="absolute bottom-[3%] left-[12%] text-[70px] font-black leading-none tracking-[-.1em] text-primary/[0.035]">
                04
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-[#c8a45d]/20 to-transparent" />
    </section>
  );
}
