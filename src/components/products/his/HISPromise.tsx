"use client";

import { Layers3, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function HISPromise() {
  const t = useTranslations("HIS.promise");

  return (
    <section className="bg-background-soft">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative overflow-hidden rounded-[34px] bg-primary px-7 py-14 shadow-[0_25px_80px_rgba(8,47,58,.08)] md:px-14 md:py-20"
        >
          {/* Decorative elements */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-accent/10 transition-transform duration-700 group-hover:scale-110" />

          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-accent/[0.06]" />

          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/[0.035] blur-3xl" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              {/* Eyebrow */}
              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-primary shadow-[0_8px_25px_rgba(212,175,55,.18)]">
                  <Sparkles size={14} />
                </div>

                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-accent">
                  {t("eyebrow")}
                </span>
              </div>

              {/* Title */}
              <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl">
                {t("title")}
              </h2>

              {/* Description */}
              <p className="mt-7 max-w-xl text-sm leading-7 text-white/50">
                {t("description")}
              </p>

              {/* Gold accent line */}
              <div className="mt-9 h-px w-10 bg-accent/70 transition-all duration-500 group-hover:w-16" />
            </div>

            {/* Visual */}
            <motion.div
              whileHover={{ y: -5, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-accent/20 bg-accent/[0.08] text-accent shadow-[0_15px_40px_rgba(0,0,0,.08)]"
            >
              <div className="absolute inset-2 rounded-2xl border border-accent/10" />

              <Layers3
                size={32}
                strokeWidth={1.3}
                className="relative z-10"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}