"use client";

import { ArrowDown, ArrowUpRight, Radio, ScanLine } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function RFIDHero() {
  const t = useTranslations("RFID.hero");

  return (
    <section className="relative min-h-190 overflow-hidden bg-background-soft">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-45 -top-45 h-130 w-130 rounded-full bg-primary/2.5 blur-3xl" />

        <div className="absolute -bottom-55 -right-37.5 h-125 w-125 rounded-full bg-primary/[0.035] blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-190 max-w-7xl items-center gap-16 px-5 py-28 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-primary" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-secondary">
              {t("eyebrow")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-2xl text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-primary sm:text-6xl lg:text-7xl"
          >
            {t("title")}
            <span className="mt-2 block text-secondary">
              {t("titleAccent")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 max-w-xl text-sm leading-7 text-secondary md:text-base"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link
              href="#how-it-works"
              className="group flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {t("explore")}

              <ArrowDown
                size={14}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </Link>

            <Link
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-[#082f3a]/10 bg-white px-6 py-3.5 text-[10px] font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:border-[#082f3a]/20"
            >
              {t("button")}

              <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* RFID Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative mx-auto aspect-square w-full max-w-142.5"
        >
          {/* Radar rings */}
          <div className="absolute inset-[8%] rounded-full border border-primary/7" />
          <div className="absolute inset-[18%] rounded-full border border-[#082f3a]/8" />
          <div className="absolute inset-[29%] rounded-full border border-[#082f3a]/9" />

          {/* Center */}
          <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary shadow-[0_30px_100px_rgba(8,47,58,0.2)] md:h-44 md:w-44">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/10 md:h-28 md:w-28">
              <Radio
                size={34}
                strokeWidth={1.2}
                className="text-white"
              />

              <span className="absolute inset-0 animate-ping rounded-full border border-white/20" />
            </div>
          </div>

          {/* Signal */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[12%] rounded-full border border-dashed border-[#082f3a]/10"
          />

          {/* Tag 1 */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute left-[4%] top-[27%] rounded-2xl border border-primary/7 bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]"
          >
            <ScanLine size={19} className="text-primary" />

            <p className="mt-2 text-[9px] font-semibold text-primary">
              {t("tag")}
            </p>
          </motion.div>

          {/* Tag 2 */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              delay: 0.5,
            }}
            className="absolute right-[4%] top-[17%] rounded-2xl border border-primary/7 bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]"
          >
            <Radio size={19} className="text-primary" />

            <p className="mt-2 text-[9px] font-semibold text-primary">
              {t("reader")}
            </p>
          </motion.div>

          {/* Data card */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-[13%] right-[7%] rounded-2xl border border-primary/7 bg-white px-5 py-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />

              <span className="text-[9px] font-semibold text-primary">
                {t("connected")}
              </span>
            </div>

            <div className="mt-3 h-1.5 w-28 overflow-hidden rounded-full bg-primary/10">
              <motion.div
                animate={{ width: ["30%", "90%", "60%", "100%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="h-full rounded-full bg-primary"
              />
            </div>
          </motion.div>

          <div className="absolute bottom-[5%] left-[8%]">
            <span className="text-6xl font-semibold tracking-[-0.08em] text-primary/6">
              RFID
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}