"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Boxes,
  Cpu,
  Database,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ProductsHero() {
  const t = useTranslations("Products");

  return (
    <section className="relative overflow-hidden bg-background-soft">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 -top-45 h-130 w-130 -translate-x-1/2 rounded-full bg-primary/2.5 blur-3xl" />

        <div className="absolute right-[-120px] top-1/3 h-[320px] w-[320px] rounded-full bg-primary/2 blur-3xl" />
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
              <span className="h-px w-8 bg-primary" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-secondary">
                {t("hero.eyebrow")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-primary sm:text-6xl lg:text-7xl"
            >
              {t("hero.title")}
              <span className="block text-secondary">
                {t("hero.titleAccent")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 max-w-xl text-sm leading-7 text-secondary md:text-base"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link
                href="#products"
                className="group flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {t("hero.primaryButton")}

                <ArrowDown
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </Link>

              <Link
                href="#contact"
                className="flex items-center gap-2 rounded-full border border-[#082f3a]/10 bg-white px-6 py-3.5 text-[10px] font-semibold text-primary transition-all hover:-translate-y-1 hover:border-[#082f3a]/20"
              >
                {t("hero.secondaryButton")}
                <ArrowUpRight size={14} />
              </Link>
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
              <div className="absolute inset-[8%] rounded-full border border-primary/7" />

              <div className="absolute inset-[18%] rounded-full border border-primary/7" />

              <div className="absolute inset-[28%] rounded-full border border-[#082f3a]/6" />

              <div className="absolute inset-[38%] rounded-full bg-primary shadow-[0_30px_100px_rgba(8,47,58,0.2)]">
                <div className="flex h-full flex-col items-center justify-center text-center text-white">
                  <span className="text-[8px] uppercase tracking-[0.35em] text-white/40">
                    {t("hero.centerEyebrow")}
                  </span>

                  <span className="mt-3 text-3xl font-semibold tracking-tight">
                    {t("hero.centerTitle")}
                  </span>

                  <span className="text-3xl font-semibold tracking-tight text-white/40">
                    {t("hero.centerAccent")}
                  </span>
                </div>
              </div>

              {/* Floating cards */}

              <div className="absolute left-[0%] top-[22%] rounded-2xl border border-primary/7 bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]">
                <Database size={20} className="text-primary" />

                <p className="mt-2 text-[9px] font-semibold text-primary">
                  ERP
                </p>
              </div>

              <div className="absolute right-[0%] top-[12%] rounded-2xl border border-primary/7 bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]">
                <Cpu size={20} className="text-primary" />

                <p className="mt-2 text-[9px] font-semibold text-primary">
                  AI
                </p>
              </div>

              <div className="absolute bottom-[15%] right-[7%] rounded-2xl border border-primary/7 bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]">
                <Boxes size={20} className="text-primary" />

                <p className="mt-2 text-[9px] font-semibold text-primary">
                  Systems
                </p>
              </div>

              <div className="absolute bottom-[10%] left-[8%]">
                <p className="text-5xl font-semibold tracking-[-0.06em] text-primary/10">
                  04
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}