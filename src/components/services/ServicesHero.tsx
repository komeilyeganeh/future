"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Globe2,
  Layers3,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Button from "../ui/Button";

export default function ServicesHero() {
  const t = useTranslations("Services");

  return (
    <section className="relative overflow-hidden bg-[#f5f9fa]">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Cyan glow */}
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#08788c]/7 blur-[120px]" />

        {/* Gold glow */}
        <div className="absolute -right-30 top-[12%] h-105 w-105 rounded-full bg-[#c9a45c]/10 blur-[120px]" />

        {/* Bottom glow */}
        <div className="absolute -bottom-45 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/5 blur-[110px]" />

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#082f3a 1px, transparent 1px), linear-gradient(90deg, #082f3a 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* =========================================================
          HERO CONTAINER
      ========================================================= */}
      <div className="relative mx-auto max-w-310 px-5 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-36 lg:pt-40">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_.9fr] lg:gap-20">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="relative z-10">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#c9a45c]" />

              <span className="text-[9px] font-black uppercase tracking-[0.28em] text-accent">
                {t("hero.eyebrow")}
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-[#c9a45c]" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-w-190 text-[48px] font-black leading-[0.91] tracking-[-0.075em] text-primary sm:text-[64px] lg:text-[78px]"
            >
              {t("hero.title")}
            </motion.h1>

            {/* Gold accent */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-7 h-1 w-16 origin-left rounded-full bg-linear-to-r from-[#c9a45c] to-[#e4c982]"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="mt-7 max-w-145 text-[13px] leading-[1.95] text-secondary md:text-[14px]"
            >
              {t("hero.description")}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
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

            {/* Small trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.65,
              }}
              className="mt-12 flex items-center gap-3"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-[#08788c]/40" />
                <span className="relative h-2 w-2 rounded-full bg-[#08788c]" />
              </span>

              <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#9aa9ae]">
                RoshaSoft / Digital Infrastructure
              </span>

              <span className="h-px w-8 bg-[#c9a45c]/50" />
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT VISUAL
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mx-auto w-full max-w-135"
          >
            {/* Main ambient glow */}
            <div className="absolute -inset-12 rounded-[50px] bg-[#08788c]/6 blur-[70px]" />

            <div className="relative overflow-hidden rounded-[38px] border border-white/80 bg-white/55 p-2 shadow-[0_35px_100px_rgba(8,47,58,.10)] backdrop-blur-2xl sm:p-3">
              {/* =================================================
                  DARK PANEL
              ================================================= */}
              <div className="relative min-h-120 overflow-hidden rounded-[30px] bg-primary p-6 sm:min-h-135 sm:p-8">
                {/* Decorative circles */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border border-white/8"
                />

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 45,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="pointer-events-none absolute -bottom-32 -left-32 h-90 w-90 rounded-full border border-[#c9a45c]/10"
                />

                {/* Gold radial glow */}
                <div className="pointer-events-none absolute right-[-80px] top-[20%] h-60 w-60 rounded-full bg-[#c9a45c]/8 blur-[70px]" />

                {/* Cyan radial glow */}
                <div className="pointer-events-none absolute bottom-[-80px] left-[20%] h-60 w-60 rounded-full bg-[#08788c]/15 blur-[70px]" />

                <div className="relative z-10">
                  {/* Panel top bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#c9a45c]" />

                      <span className="text-[8px] font-black uppercase tracking-[0.22em] text-white/35">
                        ROSHASOFT
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#5ee0a1] shadow-[0_0_10px_rgba(94,224,161,.6)]" />

                      <span className="text-[7px] font-bold uppercase tracking-[0.15em] text-white/35">
                        SYSTEM ONLINE
                      </span>
                    </div>
                  </div>

                  {/* Main visual */}
                  <div className="mt-14 flex flex-col items-center">
                    <div className="relative flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48">
                      {/* Orbit 1 */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 18,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 rounded-full border border-white/10"
                      >
                        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#c9a45c] shadow-[0_0_15px_rgba(201,164,92,.8)]" />
                      </motion.div>

                      {/* Orbit 2 */}
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 25,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-5 rounded-full border border-[#70d9e5]/15"
                      >
                        <span className="absolute -right-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#70d9e5]" />
                      </motion.div>

                      {/* Core */}
                      <div className="relative flex h-28 w-28 flex-col items-center justify-center rounded-full border border-white/10 bg-white/6 shadow-[0_20px_70px_rgba(0,0,0,.25)] backdrop-blur-xl sm:h-32 sm:w-32">
                        <Sparkles size={17} className="mb-3 text-[#c9a45c]" />

                        <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/35">
                          Digital
                        </span>

                        <span className="mt-1 text-xl font-black tracking-tighter text-white">
                          Systems
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Service cards */}
                  <div className="mt-12 grid grid-cols-3 gap-2">
                    {[
                      {
                        icon: Globe2,
                        label: "Web",
                      },
                      {
                        icon: Smartphone,
                        label: "Mobile",
                      },
                      {
                        icon: Code2,
                        label: "Software",
                      },
                    ].map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.55 + index * 0.1,
                          }}
                          whileHover={{ y: -4 }}
                          className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl transition-colors duration-300 hover:border-[#c9a45c]/30 hover:bg-white/8"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/8 text-[#70d9e5]">
                            <Icon size={14} />
                          </div>

                          <p className="mt-3 text-[8px] font-bold text-white/60">
                            {item.label}
                          </p>

                          <div className="mt-2 h-px w-full bg-white/8">
                            <div
                              className={`h-full bg-[#c9a45c] ${
                                index === 0
                                  ? "w-[78%]"
                                  : index === 1
                                    ? "w-[62%]"
                                    : "w-[88%]"
                              }`}
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Bottom meta */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-5">
                    <div className="flex items-center gap-2">
                      <Layers3 size={12} className="text-[#c9a45c]" />

                      <span className="text-[7px] font-bold uppercase tracking-[0.16em] text-white/30">
                        Integrated Solutions
                      </span>
                    </div>

                    <span className="text-[8px] font-black tracking-[0.18em] text-white/20">
                      03
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: 1,
                y: [0, -6, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.7,
                  delay: 0.7,
                },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute -bottom-5 -left-3 rounded-2xl border border-white/80 bg-white/85 px-4 py-3 shadow-[0_15px_45px_rgba(8,47,58,.10)] backdrop-blur-xl sm:-left-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#c9a45c]/12 text-[#b28b43]">
                  <Sparkles size={14} />
                </span>

                <div>
                  <span className="block text-[7px] font-black uppercase tracking-[0.16em] text-[#9aa9ae]">
                    Built around
                  </span>

                  <span className="mt-0.5 block text-[10px] font-black text-primary">
                    Your business
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
