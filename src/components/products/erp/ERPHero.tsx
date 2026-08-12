"use client";

import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Boxes,
  Database,
  Layers3,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ERPHero() {
  const t = useTranslations("ERP.hero");

  return (
    <section className="relative overflow-hidden bg-[#f8faf9]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-105 w-105 rounded-full bg-[#082f3a]/[0.035] blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-105 w-105 rounded-full bg-[#082f3a]/2 blur-3xl" />

        <div className="absolute left-1/2 top-0 h-full w-px bg-[#082f3a]/2.5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36 lg:pb-28 lg:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* ========================================================= */}
          {/* LEFT — CONTENT */}
          {/* ========================================================= */}

          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3"
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
              className="max-w-2xl text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-[#082f3a] sm:text-6xl lg:text-7xl"
            >
              {t("title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-7 max-w-xl text-sm leading-7 text-[#71838a] md:text-base"
            >
              {t("description")}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#overview"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#082f3a] px-6 py-3.5 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {t("primaryButton")}

                <ArrowDown
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#082f3a]/10 bg-white px-6 py-3.5 text-[10px] font-semibold text-[#082f3a] transition-all duration-300 hover:-translate-y-1 hover:border-[#082f3a]/20"
              >
                {t("secondaryButton")}

                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT — ERP DASHBOARD VISUAL */}
          {/* ========================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-full"
          >
            <div className="relative mx-auto w-full max-w-155">
              {/* Main Dashboard */}
              <div className="relative overflow-hidden rounded-[28px] border border-[#082f3a]/8 bg-white shadow-[0_30px_100px_rgba(8,47,58,0.10)]">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between border-b border-[#082f3a]/[0.07] px-5 py-4 sm:px-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#082f3a]">
                      <Layers3
                        size={16}
                        strokeWidth={1.8}
                        className="text-white"
                      />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold text-[#082f3a]">
                        RoshaSoft ERP
                      </p>

                      <p className="mt-0.5 text-[8px] text-[#71838a]">
                        {t("visualLabel")}
                      </p>
                    </div>
                  </div>

                  <div className="hidden items-center gap-2 sm:flex">
                    <span className="h-2 w-2 rounded-full bg-[#082f3a]/30" />
                    <span className="text-[8px] font-medium text-[#71838a]">
                      ERP
                    </span>
                  </div>
                </div>

                {/* Dashboard Body */}
                <div className="p-5 sm:p-6">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    <DashboardStat
                      icon={Database}
                      label="Finance"
                      value="98%"
                    />

                    <DashboardStat
                      icon={Boxes}
                      label="Operations"
                      value="94%"
                    />

                    <DashboardStat
                      icon={TrendingUp}
                      label="Growth"
                      value="+24%"
                      className="col-span-2 sm:col-span-1"
                    />
                  </div>

                  {/* Main Chart */}
                  <div className="mt-4 rounded-2xl border border-[#082f3a]/6 bg-[#f8faf9] p-4 sm:p-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#71838a]">
                          Business overview
                        </p>

                        <p className="mt-1 text-lg font-semibold tracking-tight text-[#082f3a] sm:text-xl">
                          Performance
                        </p>
                      </div>

                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-[#082f3a] shadow-sm">
                        <BarChart3 size={15} />
                      </div>
                    </div>

                    {/* Fake Chart */}
                    <div className="mt-6 flex h-32.5 items-end gap-2 sm:h-37.5 sm:gap-3">
                      {[42, 58, 47, 72, 63, 84, 76, 94].map(
                        (height, index) => (
                          <motion.div
                            key={index}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{
                              duration: 0.8,
                              delay: 0.45 + index * 0.05,
                            }}
                            className="flex-1 rounded-t-lg bg-[#082f3a]/10"
                          />
                        )
                      )}
                    </div>
                  </div>

                  {/* Bottom Modules */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <ModuleCard
                      icon={Database}
                      title="Finance"
                      description="Connected"
                    />

                    <ModuleCard
                      icon={Boxes}
                      title="Operations"
                      description="Optimized"
                    />
                  </div>
                </div>
              </div>

              {/* Floating status — desktop only */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="absolute -bottom-5 left-5 hidden rounded-2xl border border-[#082f3a]/[0.07] bg-white px-4 py-3 shadow-[0_20px_50px_rgba(8,47,58,0.10)] sm:block lg:-left-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#082f3a]/5">
                    <span className="h-2 w-2 rounded-full bg-[#082f3a]" />
                  </div>

                  <div>
                    <p className="text-[8px] uppercase tracking-[0.15em] text-[#71838a]">
                      System
                    </p>

                    <p className="mt-0.5 text-[10px] font-semibold text-[#082f3a]">
                      Connected & Ready
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating ERP label — desktop only */}
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="absolute -right-5 top-10 hidden rounded-2xl bg-[#082f3a] px-4 py-3 shadow-[0_20px_50px_rgba(8,47,58,0.18)] sm:block lg:-right-8"
              >
                <p className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                  RoshaSoft
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  ERP
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ========================================================= */
/* STAT */
/* ========================================================= */

function DashboardStat({
  icon: Icon,
  label,
  value,
  className = "",
}: {
  icon: typeof Database;
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-[#082f3a]/6 bg-white p-4 ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#082f3a]/5 text-[#082f3a]">
          <Icon size={14} strokeWidth={1.7} />
        </div>

        <span className="text-[9px] font-semibold text-[#082f3a]/40">
          {value}
        </span>
      </div>

      <p className="mt-4 text-[9px] font-medium text-[#71838a]">
        {label}
      </p>
    </div>
  );
}

/* ========================================================= */
/* MODULE */
/* ========================================================= */

function ModuleCard({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Database;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-[#082f3a]/6 bg-white p-3.5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#082f3a]/5 text-[#082f3a]">
        <Icon size={14} strokeWidth={1.7} />
      </div>

      <div className="min-w-0">
        <p className="truncate text-[9px] font-semibold text-[#082f3a]">
          {title}
        </p>

        <p className="mt-0.5 text-[8px] text-[#71838a]">
          {description}
        </p>
      </div>
    </div>
  );
}