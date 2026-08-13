"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Globe2,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ServicesHero() {
  const t = useTranslations("Services");

  return (
    <section className="relative overflow-hidden bg-background-soft">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 -top-45 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/2.5 blur-3xl" />

        <div className="absolute right-[-120px] top-1/3 h-[300px] w-[300px] rounded-full bg-primary/2 blur-3xl" />
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
                href="#services"
                className="group flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {t("hero.secondaryButton")}

                <ArrowDown
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </Link>

              <Link
                href="#contact"
                className="flex items-center gap-2 rounded-full border border-[#082f3a]/10 bg-white px-6 py-3.5 text-[10px] font-semibold text-primary transition-all hover:-translate-y-1 hover:border-[#082f3a]/20"
              >
                {t("hero.primaryButton")}
                <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto w-full max-w-130"
          >
            <div className="relative aspect-square">
              {/* Main circle */}
              <div className="absolute inset-[12%] rounded-full border border-[#082f3a]/8" />

              <div className="absolute inset-[22%] rounded-full border border-[#082f3a]/8" />

              <div className="absolute inset-[32%] rounded-full bg-primary shadow-[0_30px_100px_rgba(8,47,58,0.2)]">
                <div className="flex h-full flex-col items-center justify-center text-center text-white">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">
                    RoshaSoft
                  </span>

                  <span className="mt-3 text-3xl font-semibold tracking-tight">
                    Digital
                  </span>

                  <span className="text-3xl font-semibold tracking-tight text-white/50">
                    solutions
                  </span>
                </div>
              </div>

              {/* Cards */}
              <div className="absolute left-[2%] top-[22%] rounded-2xl border border-primary/7 bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]">
                <Globe2 size={20} className="text-primary" />

                <p className="mt-2 text-[9px] font-semibold text-primary">
                  Web
                </p>
              </div>

              <div className="absolute right-[2%] top-[14%] rounded-2xl border border-primary/7 bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]">
                <Smartphone size={20} className="text-primary" />

                <p className="mt-2 text-[9px] font-semibold text-primary">
                  Mobile
                </p>
              </div>

              <div className="absolute bottom-[17%] right-[8%] rounded-2xl border border-primary/7 bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]">
                <Code2 size={20} className="text-primary" />

                <p className="mt-2 text-[9px] font-semibold text-primary">
                  Development
                </p>
              </div>

              {/* Floating number */}
              <div className="absolute bottom-[12%] left-[7%]">
                <p className="text-5xl font-semibold tracking-[-0.06em] text-primary/10">
                  03
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}