"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function WebServiceCTA() {
  const t = useTranslations("WebService.cta");

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
        className="group relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-primary px-7 py-16 md:px-14 md:py-20 lg:px-20"
      >
        {/* Background decoration */}
        <div className="absolute -right-32 -top-32 h-100 w-100 rounded-full border border-white/5" />

        <div className="absolute -right-20 -top-20 h-62.5 w-62.5 rounded-full border border-[#d6b36a]/10" />

        <div className="absolute -bottom-25 -left-25 h-62.5 w-62.5 rounded-full bg-[#d6b36a]/6 blur-3xl" />

        {/* Subtle gold glow */}
        <div className="pointer-events-none absolute right-[12%] top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[#d6b36a]/5 blur-3xl transition-all duration-700 group-hover:bg-[#d6b36a]/8" />

        <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d6b36a]/15 text-[#d6b36a] transition-all duration-300 group-hover:bg-[#d6b36a]/20">
                <Sparkles size={14} />
              </div>

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#d6b36a]/70">
                {t("eyebrow")}
              </span>
            </div>

            {/* Title */}
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl">
              {t("title")}

              <span className="block text-[#d6b36a]">
                {t("titleAccent")}
              </span>
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-xl text-sm leading-7 text-white/50">
              {t("description")}
            </p>
          </div>

          {/* CTA Button */}
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

        {/* Bottom gold accent */}
        <div className="absolute bottom-0 left-0 h-px w-0 bg-[#d6b36a]/60 transition-all duration-700 group-hover:w-full" />
      </motion.div>
    </section>
  );
}