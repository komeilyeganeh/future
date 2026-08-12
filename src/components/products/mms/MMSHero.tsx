"use client";

import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Boxes,
  ShoppingCart,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function MMSHero() {
  const t = useTranslations("MMS.hero");

  return (
    <section className="relative overflow-hidden bg-[#f8faf9]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-[-220px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#082f3a]/[0.025] blur-3xl" />

        <div className="absolute bottom-[-180px] right-[-150px] h-[450px] w-[450px] rounded-full bg-[#082f3a]/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-28 md:px-8 md:pb-32 md:pt-40">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
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
              className="max-w-3xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-[#082f3a] sm:text-6xl lg:text-7xl"
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
                href="#capabilities"
                className="group flex items-center gap-3 rounded-full bg-[#082f3a] px-6 py-3.5 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {t("secondaryButton")}

                <ArrowDown
                  size={14}
                  className="transition-transform group-hover:translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 rounded-full border border-[#082f3a]/10 bg-white px-6 py-3.5 text-[10px] font-semibold text-[#082f3a] transition-all hover:-translate-y-1 hover:border-[#082f3a]/20"
              >
                {t("primaryButton")}
                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[500px]"
          >
            <div className="relative aspect-square">
              {/* Rings */}
              <div className="absolute inset-[8%] rounded-full border border-[#082f3a]/[0.07]" />

              <div className="absolute inset-[18%] rounded-full border border-[#082f3a]/[0.07]" />

              <div className="absolute inset-[28%] rounded-full border border-[#082f3a]/[0.06]" />

              {/* Core */}
              <div className="absolute inset-[36%] rounded-full bg-[#082f3a] shadow-[0_35px_100px_rgba(8,47,58,0.2)]">
                <div className="flex h-full flex-col items-center justify-center text-center text-white">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">
                    RoshaSoft
                  </span>

                  <span className="mt-3 text-4xl font-semibold tracking-[-0.04em]">
                    MMS
                  </span>

                  <span className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/40">
                    {t("status")}
                  </span>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute left-[0%] top-[22%] rounded-2xl border border-[#082f3a]/[0.07] bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]">
                <Boxes size={20} className="text-[#082f3a]" />

                <p className="mt-2 text-[9px] font-semibold text-[#082f3a]">
                  Inventory
                </p>
              </div>

              <div className="absolute right-[0%] top-[13%] rounded-2xl border border-[#082f3a]/[0.07] bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]">
                <ShoppingCart size={20} className="text-[#082f3a]" />

                <p className="mt-2 text-[9px] font-semibold text-[#082f3a]">
                  Purchasing
                </p>
              </div>

              <div className="absolute bottom-[13%] right-[7%] rounded-2xl border border-[#082f3a]/[0.07] bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]">
                <BarChart3 size={20} className="text-[#082f3a]" />

                <p className="mt-2 text-[9px] font-semibold text-[#082f3a]">
                  Analytics
                </p>
              </div>

              <div className="absolute bottom-[8%] left-[7%]">
                <span className="text-6xl font-semibold tracking-[-0.08em] text-[#082f3a]/[0.07]">
                  02
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}