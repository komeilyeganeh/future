"use client";

import {
  Database,
  GitBranch,
  LockKeyhole,
  Network,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function HISIntegration() {
  const t = useTranslations("HIS.integration");

  return (
    <section className="bg-background-soft">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Content */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-accent/60" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
                {t("eyebrow")}
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-primary md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-secondary">
              {t("description")}
            </p>

            {/* HL7 Badge */}
            <motion.div
              whileHover={{ y: -2 }}
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-accent/20 bg-accent/[0.08] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.14] hover:shadow-[0_10px_30px_rgba(212,175,55,.12)]"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-primary">
                <GitBranch size={12} strokeWidth={2} />
              </span>

              HL7

              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </motion.div>
          </div>

          {/* Integration Cards */}
          <div className="grid gap-3 sm:grid-cols-2">
            {/* HL7 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-[28px] bg-primary p-7 text-white shadow-[0_20px_60px_rgba(8,47,58,.08)] transition-shadow duration-500 hover:shadow-[0_25px_70px_rgba(8,47,58,.14)] sm:row-span-2"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-accent/10 transition-transform duration-700 group-hover:scale-125" />

              <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-accent/[0.04] blur-3xl" />

              <div className="relative z-10">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-primary shadow-[0_10px_30px_rgba(212,175,55,.12)]">
                  <Network size={21} strokeWidth={1.6} />
                </div>

                <h3 className="mt-10 text-2xl font-semibold tracking-tight">
                  {t("hl7.title")}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {t("hl7.description")}
                </p>

                <div className="mt-8 h-px w-10 bg-accent/70 transition-all duration-500 group-hover:w-16" />

                <span className="mt-5 inline-block text-[9px] font-semibold uppercase tracking-[0.2em] text-accent/70">
                  Secure interoperability
                </span>
              </div>
            </motion.div>

            {/* Privacy */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-[28px] border border-primary/7 bg-white p-7 transition-all duration-300 hover:border-accent/25 hover:shadow-[0_20px_60px_rgba(8,47,58,.07)]"
            >
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/[0.04] blur-2xl transition-transform duration-500 group-hover:scale-150" />

              <div className="relative z-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary transition-all duration-300 group-hover:bg-accent group-hover:text-primary">
                  <LockKeyhole size={19} />
                </div>

                <h3 className="mt-7 text-lg font-semibold text-primary">
                  {t("privacy.title")}
                </h3>

                <p className="mt-3 text-xs leading-6 text-secondary">
                  {t("privacy.description")}
                </p>
              </div>
            </motion.div>

            {/* Data */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-[28px] border border-primary/7 bg-white p-7 transition-all duration-300 hover:border-accent/25 hover:shadow-[0_20px_60px_rgba(8,47,58,.07)]"
            >
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/[0.04] blur-2xl transition-transform duration-500 group-hover:scale-150" />

              <div className="relative z-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary transition-all duration-300 group-hover:bg-accent group-hover:text-primary">
                  <Database size={19} />
                </div>

                <h3 className="mt-7 text-lg font-semibold text-primary">
                  {t("data.title")}
                </h3>

                <p className="mt-3 text-xs leading-6 text-secondary">
                  {t("data.description")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}