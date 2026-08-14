"use client";

import { ArrowUpRight, Database, Layers3 } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function MMSOverview() {
  const t = useTranslations("MMS.overview");

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/[0.025] blur-3xl" />

        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/[0.018] blur-3xl" />

        <div className="absolute left-1/2 top-0 hidden h-full w-px bg-primary/[0.02] lg:block" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-45"
          >
            {/* Decorative ring */}
            <div className="absolute left-1 top-1 h-28 w-28 rounded-full border border-primary/[0.06]" />

            {/* Main circle */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative flex h-28 w-28 items-center justify-center rounded-full bg-primary shadow-[0_25px_70px_rgba(8,47,58,0.15)]"
            >
              <div className="text-center text-white">
                <Database
                  size={22}
                  strokeWidth={1.6}
                  className="mx-auto opacity-70"
                />

                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em]">
                  MMS
                </p>
              </div>
            </motion.div>

            {/* Secondary node */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              whileHover={{ y: -3, rotate: 3 }}
              className="absolute left-20 top-20 flex h-14 w-14 items-center justify-center rounded-full border border-[#082f3a]/10 bg-background-soft shadow-[0_15px_40px_rgba(8,47,58,0.06)]"
            >
              <Layers3 size={17} strokeWidth={1.7} className="text-primary" />
            </motion.div>

            {/* Connecting line */}
            <div className="absolute left-24 top-22 h-px w-12 rotate-45 bg-primary/10" />

            {/* Small status marker */}
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="absolute left-2 top-36 flex items-center gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/30" />
                <span className="relative h-2 w-2 rounded-full bg-primary" />
              </span>

              <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-secondary">
                Connected
              </span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#c7a45d]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c7a45d]">
                {t("eyebrow")}
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-primary md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-secondary md:text-base">
              {t("description")}
            </p>

            <motion.div
              whileHover={{ x: 4 }}
              className="mt-9 inline-flex items-center gap-3 rounded-full border border-primary/7 bg-background-soft px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary transition-all duration-300 hover:border-primary/12 hover:shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />

              {t("highlight")}

              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}