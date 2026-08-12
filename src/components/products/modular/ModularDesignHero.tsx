"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Boxes,
  Layers3,
  Puzzle,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ModularDesignHero() {
  const t = useTranslations("MODULAR.hero");

  return (
    <section className="relative overflow-hidden bg-[#f8faf9]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[55%] -top-45 h-130 w-130 rounded-full bg-[#082f3a]/2.5 blur-3xl" />

        <div className="absolute -bottom-45 -left-30 h-100 w-100 rounded-full bg-[#082f3a]/2 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-40">
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
              className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-[#082f3a] sm:text-6xl lg:text-7xl"
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
                href="#modules"
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
                className="flex items-center gap-2 rounded-full border border-[#082f3a]/10 bg-white px-6 py-3.5 text-[10px] font-semibold text-[#082f3a] transition-all hover:-translate-y-1"
              >
                {t("secondaryButton")}

                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto w-full max-w-130"
          >
            <div className="relative aspect-square">
              {/* Main rings */}
              <div className="absolute inset-[5%] rounded-full border border-[#082f3a]/6" />
              <div className="absolute inset-[15%] rounded-full border border-[#082f3a]/[0.07]" />
              <div className="absolute inset-[25%] rounded-full border border-[#082f3a]/8" />

              {/* Center */}
              <div className="absolute inset-[35%] rounded-4xl bg-[#082f3a] shadow-[0_30px_100px_rgba(8,47,58,0.2)]">
                <div className="flex h-full flex-col items-center justify-center text-center text-white">
                  <Layers3 size={26} strokeWidth={1.4} />

                  <span className="mt-4 text-[9px] uppercase tracking-[0.3em] text-white/40">
                    {t("label")}
                  </span>

                  <span className="mt-2 text-2xl font-semibold tracking-tight">
                    Modular
                  </span>

                  <span className="text-2xl font-semibold tracking-tight text-white/45">
                    ecosystem
                  </span>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute left-[1%] top-[23%] rounded-2xl border border-[#082f3a]/[0.07] bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]">
                <Boxes size={20} className="text-[#082f3a]" />

                <p className="mt-2 text-[9px] font-semibold text-[#082f3a]">
                  {t("card1")}
                </p>
              </div>

              <div className="absolute right-[0%] top-[13%] rounded-2xl border border-[#082f3a]/[0.07] bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]">
                <Puzzle size={20} className="text-[#082f3a]" />

                <p className="mt-2 text-[9px] font-semibold text-[#082f3a]">
                  {t("card2")}
                </p>
              </div>

              <div className="absolute bottom-[15%] right-[8%] rounded-2xl border border-[#082f3a]/[0.07] bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]">
                <Layers3 size={20} className="text-[#082f3a]" />

                <p className="mt-2 text-[9px] font-semibold text-[#082f3a]">
                  {t("card3")}
                </p>
              </div>

              <div className="absolute bottom-[9%] left-[8%]">
                <p className="text-5xl font-semibold tracking-[-0.06em] text-[#082f3a]/10">
                  07
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}