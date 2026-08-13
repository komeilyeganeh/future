"use client";

import { ArrowUpRight, Database, Layers3 } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function MMSOverview() {
  const t = useTranslations("MMS.overview");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary shadow-[0_25px_70px_rgba(8,47,58,0.15)]">
              <div className="text-center text-white">
                <Database size={22} className="mx-auto opacity-70" />

                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em]">
                  MMS
                </p>
              </div>
            </div>

            <div className="absolute left-20 top-20 flex h-14 w-14 items-center justify-center rounded-full border border-[#082f3a]/10 bg-background-soft">
              <Layers3 size={17} className="text-primary" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-secondary">
              {t("eyebrow")}
            </span>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-primary md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-secondary">
              {t("description")}
            </p>

            <div className="mt-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary" />
              {t("highlight")}
              <ArrowUpRight size={13} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}