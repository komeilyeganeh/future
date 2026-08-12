"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Globe2,
  Lock,
  MousePointer2,
  Wifi,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function WebServiceHero() {
  const t = useTranslations("WebService.hero");

  return (
    <section className="relative overflow-hidden bg-[#f8faf9]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-45 top-[10%] h-[420px] w-[420px] rounded-full bg-[#082f3a]/2.5 blur-3xl" />

        <div className="absolute right-[-140px] top-[30%] h-[420px] w-[420px] rounded-full bg-[#082f3a]/2 blur-3xl" />

        <div className="absolute inset-x-0 bottom-0 h-px bg-[#082f3a]/6" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-40">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#082f3a]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#71838a]">
                {t("eyebrow")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-2xl text-5xl font-semibold leading-[0.96] tracking-tighter text-[#082f3a] sm:text-6xl lg:text-[76px]"
            >
              {t("title")}
              <span className="block text-[#71838a]">
                {t("titleAccent")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 max-w-xl text-sm leading-7 text-[#71838a] md:text-base"
            >
              {t("description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href="#features"
                className="group flex items-center gap-3 rounded-full bg-[#082f3a] px-6 py-3.5 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {t("primaryButton")}

                <ArrowDown
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 rounded-full border border-[#082f3a]/10 bg-white px-6 py-3.5 text-[10px] font-semibold text-[#082f3a] transition-all duration-300 hover:-translate-y-1 hover:border-[#082f3a]/20"
              >
                {t("secondaryButton")}
                <ArrowUpRight size={14} />
              </a>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex items-center gap-8"
            >
              <div>
                <p className="text-lg font-semibold tracking-tight text-[#082f3a]">
                  99.9%
                </p>
                <p className="mt-1 text-[8px] font-medium uppercase tracking-[0.18em] text-[#71838a]">
                  {t("stats.reliability")}
                </p>
              </div>

              <div className="h-8 w-px bg-[#082f3a]/10" />

              <div>
                <p className="text-lg font-semibold tracking-tight text-[#082f3a]">
                  24/7
                </p>
                <p className="mt-1 text-[8px] font-medium uppercase tracking-[0.18em] text-[#71838a]">
                  {t("stats.availability")}
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — BROWSER VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-[650px]">
              {/* Browser shadow */}
              <div className="absolute inset-x-8 bottom-[-25px] h-20 rounded-full bg-[#082f3a]/10 blur-3xl" />

              {/* Browser */}
              <div className="relative overflow-hidden rounded-[26px] border border-[#082f3a]/10 bg-white shadow-[0_35px_100px_rgba(8,47,58,0.13)]">
                {/* Browser bar */}
                <div className="flex h-14 items-center gap-4 border-b border-[#082f3a]/[0.07] px-5">
                  {/* Traffic lights */}
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#082f3a]/15" />
                    <span className="h-2 w-2 rounded-full bg-[#082f3a]/15" />
                    <span className="h-2 w-2 rounded-full bg-[#082f3a]/15" />
                  </div>

                  {/* Address */}
                  <div className="flex h-7 flex-1 items-center gap-2 rounded-lg bg-[#f8faf9] px-3">
                    <Lock size={9} className="text-[#71838a]" />

                    <span className="text-[8px] font-medium text-[#71838a]">
                      app.roshasoft.com
                    </span>
                  </div>

                  <Wifi size={13} className="text-[#082f3a]/30" />
                </div>

                {/* Website */}
                <div className="relative min-h-[390px] bg-[#f8faf9] p-5 md:p-7">
                  {/* Fake nav */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#082f3a]">
                        <Globe2
                          size={13}
                          className="text-white"
                        />
                      </div>

                      <span className="text-[9px] font-bold tracking-tight text-[#082f3a]">
                        ROSHA
                      </span>
                    </div>

                    <div className="hidden gap-5 sm:flex">
                      <span className="text-[7px] font-medium text-[#71838a]">
                        Dashboard
                      </span>

                      <span className="text-[7px] font-medium text-[#71838a]">
                        Analytics
                      </span>

                      <span className="text-[7px] font-medium text-[#082f3a]">
                        Account
                      </span>
                    </div>

                    <div className="h-6 w-6 rounded-full bg-[#082f3a]/10" />
                  </div>

                  {/* Main UI */}
                  <div className="mt-10 grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
                    {/* Main card */}
                    <div className="rounded-2xl bg-[#082f3a] p-6">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-white/40">
                          {t("visual.dashboard")}
                        </span>

                        <span className="flex items-center gap-1.5 text-[7px] text-white/50">
                          <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                          Live
                        </span>
                      </div>

                      <div className="mt-10">
                        <p className="text-[8px] text-white/40">
                          {t("visual.performance")}
                        </p>

                        <p className="mt-2 text-4xl font-semibold tracking-tighter text-white">
                          84.7%
                        </p>
                      </div>

                      {/* Graph */}
                      <div className="mt-8 flex h-20 items-end gap-1.5">
                        {[25, 38, 30, 52, 45, 67, 58, 75, 65, 82, 72, 90].map(
                          (height, index) => (
                            <motion.div
                              key={index}
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{
                                duration: 0.7,
                                delay: 0.7 + index * 0.04,
                              }}
                              className="flex-1 rounded-t-sm bg-white/20"
                            />
                          ),
                        )}
                      </div>
                    </div>

                    {/* Side cards */}
                    <div className="grid gap-4">
                      <div className="rounded-2xl border border-[#082f3a]/[0.07] bg-white p-5">
                        <div className="flex items-center justify-between">
                          <span className="text-[8px] text-[#71838a]">
                            Requests
                          </span>

                          <Globe2
                            size={13}
                            className="text-[#082f3a]/30"
                          />
                        </div>

                        <p className="mt-5 text-2xl font-semibold tracking-tight text-[#082f3a]">
                          24.8K
                        </p>

                        <div className="mt-3 h-1 overflow-hidden rounded-full bg-[#082f3a]/6">
                          <div className="h-full w-[78%] rounded-full bg-[#082f3a]" />
                        </div>
                      </div>

                      <div className="rounded-2xl border border-[#082f3a]/[0.07] bg-white p-5">
                        <span className="text-[8px] text-[#71838a]">
                          System status
                        </span>

                        <div className="mt-5 flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#082f3a]" />

                          <span className="text-[10px] font-semibold text-[#082f3a]">
                            {t("visual.operational")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating cursor */}
                  <motion.div
                    animate={{
                      x: [0, 12, 0],
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-[18%] right-[28%] hidden md:block"
                  >
                    <MousePointer2
                      size={22}
                      fill="#082f3a"
                      className="text-[#082f3a]"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Floating badge — top */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-3 top-[12%] rounded-2xl border border-[#082f3a]/[0.07] bg-white px-4 py-3 shadow-[0_20px_50px_rgba(8,47,58,0.1)] md:-right-8"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#082f3a]" />

                  <span className="text-[8px] font-semibold text-[#082f3a]">
                    {t("visual.connected")}
                  </span>
                </div>
              </motion.div>

              {/* Floating badge — bottom */}
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 left-4 rounded-2xl border border-[#082f3a]/[0.07] bg-white px-4 py-3 shadow-[0_20px_50px_rgba(8,47,58,0.1)] md:-left-7"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#082f3a]/5">
                    <Wifi size={12} className="text-[#082f3a]" />
                  </div>

                  <div>
                    <p className="text-[8px] font-semibold text-[#082f3a]">
                      {t("visual.fastAndReliable")}
                    </p>

                    <p className="mt-0.5 text-[7px] text-[#71838a]">
                      {t("visual.infrastructure")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}