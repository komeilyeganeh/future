"use client";

import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Boxes,
  Database,
  Layers3,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ERPHero() {
  const t = useTranslations("ERP.hero");

  return (
    <section className="relative overflow-hidden bg-[#f8faf9]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[45%] top-[-220px] h-[600px] w-[600px] rounded-full bg-[#082f3a]/[0.025] blur-3xl" />

        <div className="absolute bottom-[-150px] right-[-100px] h-[400px] w-[400px] rounded-full bg-[#082f3a]/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-28 md:px-8 md:pb-32 md:pt-40">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#082f3a]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#71838a]">
                {t("eyebrow")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#082f3a] sm:text-6xl lg:text-7xl"
            >
              {t("title")}
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
                href="#overview"
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
                className="flex items-center gap-2 rounded-full border border-[#082f3a]/10 bg-white px-6 py-3.5 text-[10px] font-semibold text-[#082f3a] transition-all hover:-translate-y-1 hover:border-[#082f3a]/20"
              >
                {t("secondaryButton")}
                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </div>

          {/* ERP Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[500px]"
          >
            <div className="relative aspect-square">
              {/* Outer rings */}
              <div className="absolute inset-[4%] rounded-full border border-[#082f3a]/[0.05]" />
              <div className="absolute inset-[13%] rounded-full border border-[#082f3a]/[0.07]" />
              <div className="absolute inset-[23%] rounded-full border border-[#082f3a]/[0.08]" />

              {/* Core */}
              <div className="absolute inset-[31%] rounded-[32px] bg-[#082f3a] shadow-[0_30px_100px_rgba(8,47,58,0.2)]">
                <div className="flex h-full flex-col items-center justify-center text-center text-white">
                  <span className="text-[9px] uppercase tracking-[0.35em] text-white/40">
                    RoshaSoft
                  </span>

                  <span className="mt-3 text-4xl font-semibold tracking-tight">
                    ERP
                  </span>

                  <span className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/40">
                    {t("visualLabel")}
                  </span>
                </div>
              </div>

              {/* Floating cards */}

              <div className="absolute left-[0%] top-[20%] rounded-2xl border border-[#082f3a]/[0.07] bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]">
                <Database size={19} className="text-[#082f3a]" />

                <p className="mt-2 text-[9px] font-semibold text-[#082f3a]">
                  Finance
                </p>
              </div>

              <div className="absolute right-[0%] top-[14%] rounded-2xl border border-[#082f3a]/[0.07] bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]">
                <BarChart3 size={19} className="text-[#082f3a]" />

                <p className="mt-2 text-[9px] font-semibold text-[#082f3a]">
                  Analytics
                </p>
              </div>

              <div className="absolute bottom-[15%] left-[5%] rounded-2xl border border-[#082f3a]/[0.07] bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]">
                <Boxes size={19} className="text-[#082f3a]" />

                <p className="mt-2 text-[9px] font-semibold text-[#082f3a]">
                  Operations
                </p>
              </div>

              <div className="absolute bottom-[8%] right-[8%] rounded-2xl border border-[#082f3a]/[0.07] bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]">
                <Layers3 size={19} className="text-[#082f3a]" />

                <p className="mt-2 text-[9px] font-semibold text-[#082f3a]">
                  HR
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}