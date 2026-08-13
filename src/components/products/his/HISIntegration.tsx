"use client";

import {
  Database,
  GitBranch,
  LockKeyhole,
  Network,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function HISIntegration() {
  const t = useTranslations("HIS.integration");

  return (
    <section className="bg-background-soft">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-secondary">
              {t("eyebrow")}
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-primary md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-secondary">
              {t("description")}
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
              <GitBranch size={14} />
              HL7
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-[28px] bg-primary p-7 text-white sm:row-span-2"
            >
              <Network size={23} strokeWidth={1.6} />

              <h3 className="mt-10 text-2xl font-semibold tracking-tight">
                {t("hl7.title")}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                {t("hl7.description")}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-[28px] border border-primary/7 bg-white p-7"
            >
              <LockKeyhole size={20} className="text-primary" />

              <h3 className="mt-7 text-lg font-semibold text-primary">
                {t("privacy.title")}
              </h3>

              <p className="mt-3 text-xs leading-6 text-secondary">
                {t("privacy.description")}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-[28px] border border-primary/7 bg-white p-7"
            >
              <Database size={20} className="text-primary" />

              <h3 className="mt-7 text-lg font-semibold text-primary">
                {t("data.title")}
              </h3>

              <p className="mt-3 text-xs leading-6 text-secondary">
                {t("data.description")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}