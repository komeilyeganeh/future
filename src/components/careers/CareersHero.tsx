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
import Link from "next/link";
import Button from "../ui/Button";

export default function CareersHero() {
  const t = useTranslations("Careers");

  return (
    <section className="relative overflow-hidden bg-background-soft">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div className="absolute left-[8%] top-[18%] h-px w-[84%] bg-primary/6" />

        <div className="absolute left-[8%] top-[18%] h-[70%] w-px bg-primary/6" />

        <div className="absolute right-[8%] top-[18%] h-[70%] w-px bg-primary/6" />

        {/* Main teal glow */}
        <div className="absolute -bottom-45 left-1/2 h-105 w-105 -translate-x-1/2 rounded-full bg-primary/2.5 blur-3xl" />

        {/* Gold atmosphere */}
        <div className="absolute left-[15%] top-[28%] h-55 w-55 rounded-full bg-[#d6ad55]/5 blur-[100px]" />

        <div className="absolute right-[12%] top-[15%] h-45 w-45 rounded-full bg-[#d6ad55]/4 blur-[90px]" />
      </div>

      {/* =========================================================
          MAIN
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-28 md:px-8 md:pb-14 md:pt-40">
        {/* =======================================================
            TOP META
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex items-center justify-between border-b border-primary/8 pb-5"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
              <BriefcaseBusiness size={13} />

              <span className="absolute inset-0 rounded-full bg-[#d6ad55]/20 blur-md" />
            </span>

            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-secondary">
              {t("hero.eyebrow")}
            </span>
          </div>

          <span className="hidden text-[9px] font-medium uppercase tracking-[0.25em] text-secondary md:block">
            {t("hero.meta")}
          </span>
        </motion.div>

        {/* =======================================================
            MAIN STATEMENT
        ======================================================= */}

        <div className="relative py-16 md:py-24">
          {/* Huge decorative number */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="pointer-events-none absolute -right-3 top-4 select-none text-[180px] font-semibold leading-none tracking-[-0.08em] text-primary/2.5 md:-right-5 md:text-[280px]"
          >
            01
          </motion.div>

          {/* Gold decorative orb */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="pointer-events-none absolute right-[12%] top-[18%] h-3 w-3 rounded-full bg-[#d6ad55] shadow-[0_0_0_7px_rgba(214,173,85,.08),0_0_25px_rgba(214,173,85,.35)]"
          />

          <div className="relative z-10 max-w-6xl">
            {/* Intro */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-7 max-w-xl text-sm leading-7 text-secondary md:text-base"
            >
              {t("hero.intro")}
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-w-5xl text-[clamp(3.5rem,9vw,8.5rem)] font-semibold leading-[0.86] tracking-[-0.065em] text-primary"
            >
              {t("hero.title")}

              {/* Gold accent */}
              <span className="relative block text-primary">
                {t("hero.titleAccent")}

                <motion.span
                  initial={{
                    scaleX: 0,
                  }}
                  animate={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.65,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute -bottom-3 left-0 h-1 w-20 origin-left rounded-full bg-linear-to-r from-[#d6ad55] to-transparent md:w-28"
                />
              </span>
            </motion.h1>
          </div>
        </div>

        {/* =======================================================
            BOTTOM CONTENT
        ======================================================= */}

        <div className="grid gap-8 border-t border-primary/8 pt-8 md:grid-cols-[1fr_auto] md:items-end">
          {/* Left text */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-xl"
          >
            <p className="text-sm leading-7 text-secondary">
              {t("hero.description")}
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-3">
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
                className="border-[#08788c]/15 bg-white/65 px-5 py-4 text-[10px] font-bold text-[#315d6b] shadow-[0_10px_35px_rgba(20,70,85,.04)] backdrop-blur-xl hover:border-accent/40 hover:bg-white"
              >
                {t("hero.secondaryButton")}
              </Button>
            </div>
          </motion.div>

          {/* =====================================================
              HIRING CARD
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full max-w-75 justify-self-start md:justify-self-end"
          >
            <div className="group relative overflow-hidden rounded-[26px] border border-primary/8 bg-white p-5 shadow-[0_25px_80px_rgba(8,47,58,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-[#d6ad55]/25 hover:shadow-[0_30px_90px_rgba(8,47,58,.09)]">
              {/* Card glow */}
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/[0.035] blur-2xl" />

              <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-[#d6ad55]/6 blur-3xl" />

              <div className="relative">
                {/* Card header */}
                <div className="flex items-center justify-between">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                    <Sparkles size={15} />

                    <span className="absolute inset-0 rounded-xl bg-[#d6ad55]/15 blur-md" />
                  </div>

                  <span className="flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-secondary">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inset-0 animate-ping rounded-full bg-[#d6ad55]/50" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-[#d6ad55]" />
                    </span>

                    {t("hero.status")}
                  </span>
                </div>

                <h2 className="mt-8 text-xl font-semibold tracking-tight text-primary">
                  {t("hero.cardTitle")}
                </h2>

                <p className="mt-3 text-xs leading-6 text-secondary">
                  {t("hero.cardDescription")}
                </p>

                {/* People */}
                <div className="mt-7 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-primary text-white">
                      <Code2 size={12} />
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#dfe7e5] text-primary">
                      <Users size={12} />
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-secondary text-white">
                      <Sparkles size={12} />
                    </div>
                  </div>

                  <span className="ml-2 text-[9px] font-medium text-secondary">
                    {t("hero.cardPeople")}
                  </span>
                </div>

                {/* Gold divider */}
                <div className="mt-5 h-px w-10 bg-linear-to-r from-[#d6ad55] to-transparent opacity-70 transition-all duration-500 group-hover:w-20" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            ROLE TICKER
        ======================================================= */}

        <div className="mt-14 overflow-hidden border-y border-primary/7 py-4">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max items-center"
          >
            {[...Array(2)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex items-center">
                <span className="mx-8 text-[9px] font-semibold uppercase tracking-[0.3em] text-primary/40">
                  {t("hero.ticker.development")}
                </span>

                <span className="h-1 w-1 rounded-full bg-[#d6ad55]/60" />

                <span className="mx-8 text-[9px] font-semibold uppercase tracking-[0.3em] text-primary/40">
                  {t("hero.ticker.design")}
                </span>

                <span className="h-1 w-1 rounded-full bg-[#d6ad55]/60" />

                <span className="mx-8 text-[9px] font-semibold uppercase tracking-[0.3em] text-primary/40">
                  {t("hero.ticker.ai")}
                </span>

                <span className="h-1 w-1 rounded-full bg-[#d6ad55]/60" />

                <span className="mx-8 text-[9px] font-semibold uppercase tracking-[0.3em] text-primary/40">
                  {t("hero.ticker.marketing")}
                </span>

                <span className="h-1 w-1 rounded-full bg-[#d6ad55]/60" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
