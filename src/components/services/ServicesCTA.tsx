"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ServicesCTA() {
  const t = useTranslations("Services");

  return (
    <section
      id="contact"
      className="bg-background-soft px-5 py-6 md:px-8 md:py-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="group relative mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-[#c8a45d]/10 bg-primary px-7 py-16 shadow-[0_30px_100px_rgba(8,47,58,.14)] md:px-14 md:py-20 lg:px-20"
      >
        {/* Ambient gold glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-100 w-100 rounded-full bg-[#c8a45d]/5 blur-[90px] transition-transform duration-1000 group-hover:scale-125" />

        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-100 w-100 rounded-full border border-white/5" />

        <div className="pointer-events-none absolute -right-20 -top-20 h-62.5 w-62.5 rounded-full border border-[#c8a45d]/10" />

        <div className="pointer-events-none absolute -bottom-25 -left-25 h-62.5 w-62.5 rounded-full bg-white/2.5 blur-3xl" />

        {/* Gold ring */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute -right-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full border border-[#c8a45d]/8"
        />

        <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#c8a45d]/20 bg-[#c8a45d]/10 text-[#d8b76a]">
                <Sparkles size={14} />

                <span className="absolute inset-0 rounded-full bg-[#c8a45d]/10 blur-md" />
              </div>

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/40">
                {t("cta.eyebrow")}
              </span>
            </div>

            {/* Title */}
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl">
              {t("cta.title")}
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/50">
              {t("cta.description")}
            </p>
          </div>

          {/* CTA */}
          <Link
            href="mailto:hello@roshasoft.com"
            className="group/btn inline-flex w-fit items-center gap-4 rounded-full bg-white px-6 py-4 text-[10px] font-semibold text-primary shadow-[0_15px_40px_rgba(0,0,0,.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            {t("cta.button")}

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c8a45d] text-[#082f3a] transition-all duration-300 group-hover/btn:rotate-45 group-hover/btn:bg-[#d8b76a]">
              <ArrowUpRight size={14} />
            </span>
          </Link>
        </div>

        {/* Bottom accent */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-linear-to-r from-[#08788c] via-[#c8a45d] to-transparent transition-all duration-1000 group-hover:w-full" />
      </motion.div>
    </section>
  );
}