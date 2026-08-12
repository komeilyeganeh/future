"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function MMSCTA() {
  const t = useTranslations("MMS.cta");

  return (
    <section
      id="contact"
      className="bg-[#f8faf9] px-5 py-6 md:px-8 md:py-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#082f3a] px-7 py-16 md:px-14 md:py-20 lg:px-20"
      >
        {/* Decorative circles */}
        <div className="absolute -right-32 -top-32 h-100 w-100 rounded-full border border-white/5" />

        <div className="absolute -right-20 -top-20 h-62.5 w-62.5 rounded-full border border-white/5" />

        <div className="absolute -bottom-25 -left-25 h-62.5 w-62.5 rounded-full bg-white/2.5 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white">
                <Sparkles size={14} />
              </div>

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/40">
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
          </div>

          {/* CTA */}
          <a
            href="mailto:hello@roshasoft.com"
            className="group inline-flex w-fit items-center gap-4 rounded-full bg-white px-6 py-4 text-[10px] font-semibold text-[#082f3a] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            {t("button")}

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#082f3a] text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={14} />
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}