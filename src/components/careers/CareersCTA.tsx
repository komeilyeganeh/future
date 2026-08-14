"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function CareersCTA() {
  const t = useTranslations("Careers");

  return (
    <section className="bg-background-soft px-5 py-6 md:px-8 md:py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-primary px-7 py-16 md:px-14 md:py-20 lg:px-20"
      >
        {/* Decorative rings */}
        <div className="absolute -right-32 -top-32 h-100 w-100 rounded-full border border-white/5" />

        <div className="absolute -right-20 -top-20 h-62.5 w-62.5 rounded-full border border-white/5" />

        {/* Gold ambient glow */}
        <div className="pointer-events-none absolute -left-20 bottom-[-120px] h-80 w-80 rounded-full bg-[#c9a96e]/10 blur-[100px]" />

        <div className="pointer-events-none absolute right-[18%] top-[-80px] h-60 w-60 rounded-full bg-[#c9a96e]/6 blur-[90px]" />

        <div className="absolute -bottom-25 -left-25 h-62.5 w-62.5 rounded-full bg-white/2.5 blur-3xl" />

        <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c9a96e]/20 bg-[#c9a96e]/10 text-[#d8bb82]">
                <Sparkles size={14} />
              </div>

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#d8bb82]/70">
                {t("cta.eyebrow")}
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl">
              {t("cta.title")}

              <span className="block text-[#e3c985]">
                {t("cta.titleAccent")}
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/50">
              {t("cta.description")}
            </p>
          </div>

          <Link
            href="mailto:careers@roshasoft.com"
            className="group inline-flex w-fit items-center gap-4 rounded-full bg-white px-6 py-4 text-[10px] font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            {t("cta.button")}

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c9a96e] text-primary transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#d8bb82]">
              <ArrowUpRight size={14} />
            </span>
          </Link>
        </div>

        {/* Subtle gold accent line */}
        <div className="absolute bottom-0 left-0 h-px w-1/3 bg-linear-to-r from-[#c9a96e]/60 to-transparent" />
      </motion.div>
    </section>
  );
}