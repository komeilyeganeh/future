"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ERPCTA() {
  const t = useTranslations("ERP.cta");

  return (
    <section
      id="contact"
      className="bg-background-soft px-5 py-6 md:px-8 md:py-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-primary px-7 py-16 md:px-14 md:py-20 lg:px-20"
      >
        {/* Subtle gold accents */}
        <div className="absolute -right-32 -top-32 h-100 w-100 rounded-full border border-[#c9a45c]/10" />

        <div className="absolute -right-20 -top-20 h-62.5 w-62.5 rounded-full border border-[#c9a45c]/8" />

        <div className="absolute -bottom-25 -left-25 h-62.5 w-62.5 rounded-full bg-[#c9a45c]/[0.035] blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#c9a45c]/40 to-transparent" />

        <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c9a45c]/15 text-[#d8b96a]">
                <Sparkles size={14} />
              </div>

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#d6b36a]/70">
                {t("eyebrow")}
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl">
              {t("title")}
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/50">
              {t("description")}
            </p>
          </div>

          <Link
            href="mailto:hello@roshasoft.com"
            className="group/button inline-flex w-fit items-center gap-4 rounded-full bg-[#d6b36a] px-6 py-4 text-[10px] font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-[#e0c27d] hover:shadow-[0_15px_45px_rgba(214,179,106,0.25)]"
          >
            {t("button")}

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-[#d6b36a] transition-all duration-300 group-hover/button:rotate-45 group-hover/button:bg-white">
              <ArrowUpRight size={14} />
            </span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}