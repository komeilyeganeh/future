"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ProductsCTA() {
  const t = useTranslations("Products");

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
        {/* Background decoration */}
        <div className="absolute -right-32 -top-32 h-100 w-100 rounded-full border border-[#c9a45c]/10" />

        <div className="absolute -right-20 -top-20 h-62.5 w-62.5 rounded-full border border-[#c9a45c]/7" />

        <div className="absolute -bottom-25 -left-25 h-62.5 w-62.5 rounded-full bg-[#c9a45c]/[0.035] blur-3xl" />

        {/* Subtle golden atmosphere */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a45c]/[0.025] blur-[100px]" />

        <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c9a45c]/20 bg-[#c9a45c]/10 text-[#e3c985]">
                <Sparkles size={14} />
              </div>

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#e3c985]/60">
                {t("cta.eyebrow")}
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl">
              {t("cta.title")}

              <span className="block text-[#e3c985]">
                {t("cta.titleAccent")}
              </span>
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-xl text-sm leading-7 text-white/50">
              {t("cta.description")}
            </p>
          </div>

          {/* CTA */}
          <Link
            href="mailto:hello@roshasoft.com"
            className="group inline-flex w-fit items-center gap-4 rounded-full bg-white px-6 py-4 text-[10px] font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(201,164,92,.18)]"
          >
            {t("cta.button")}

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c9a45c] text-primary transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#e3c985]">
              <ArrowUpRight size={14} />
            </span>
          </Link>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 h-px w-1/3 bg-linear-to-r from-[#c9a45c]/70 via-[#c9a45c]/25 to-transparent" />
      </motion.div>
    </section>
  );
}