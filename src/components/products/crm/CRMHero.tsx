"use client";

import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  ContactRound,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function CRMHero() {
  const t = useTranslations("CRM.hero");

  return (
    <section className="relative overflow-hidden bg-[#f8faf9]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#082f3a]/[0.025] blur-3xl" />

        <div className="absolute right-[-160px] top-1/3 h-[360px] w-[360px] rounded-full bg-[#082f3a]/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-40">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left */}
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
                className="flex items-center gap-2 rounded-full border border-[#082f3a]/10 bg-white px-6 py-3.5 text-[10px] font-semibold text-[#082f3a] transition-all hover:-translate-y-1 hover:border-[#082f3a]/20"
              >
                {t("secondaryButton")}

                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="relative aspect-square">
              {/* Rings */}
              <div className="absolute inset-[8%] rounded-full border border-[#082f3a]/[0.07]" />

              <div className="absolute inset-[18%] rounded-full border border-[#082f3a]/[0.07]" />

              <div className="absolute inset-[28%] rounded-full border border-[#082f3a]/[0.07]" />

              {/* Main circle */}
              <div className="absolute inset-[35%] rounded-full bg-[#082f3a] shadow-[0_30px_100px_rgba(8,47,58,0.2)]">
                <div className="flex h-full flex-col items-center justify-center text-center text-white">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">
                    {t("label")}
                  </span>

                  <span className="mt-3 text-3xl font-semibold tracking-tight">
                    Customer
                  </span>

                  <span className="text-3xl font-semibold tracking-tight text-white/50">
                    relationships
                  </span>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute left-[1%] top-[20%] rounded-2xl border border-[#082f3a]/[0.07] bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]">
                <Users size={20} className="text-[#082f3a]" />

                <p className="mt-2 text-[9px] font-semibold text-[#082f3a]">
                  {t("cards.customers")}
                </p>
              </div>

              <div className="absolute right-[1%] top-[13%] rounded-2xl border border-[#082f3a]/[0.07] bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]">
                <ContactRound size={20} className="text-[#082f3a]" />

                <p className="mt-2 text-[9px] font-semibold text-[#082f3a]">
                  {t("cards.leads")}
                </p>
              </div>

              <div className="absolute bottom-[14%] right-[7%] rounded-2xl border border-[#082f3a]/[0.07] bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]">
                <BarChart3 size={20} className="text-[#082f3a]" />

                <p className="mt-2 text-[9px] font-semibold text-[#082f3a]">
                  {t("cards.analytics")}
                </p>
              </div>

              <div className="absolute bottom-[9%] left-[7%]">
                <p className="text-5xl font-semibold tracking-[-0.06em] text-[#082f3a]/10">
                  CRM
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}