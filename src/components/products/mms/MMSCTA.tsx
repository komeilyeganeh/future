"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function MMSCTA() {
  const t = useTranslations("MMS.cta");

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
        className="group relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-primary px-7 py-16 shadow-[0_30px_100px_rgba(8,47,58,0.12)] md:px-14 md:py-20 lg:px-20"
      >
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-100 w-100 rounded-full border border-white/5 transition-transform duration-1000 group-hover:scale-110" />

        <div className="pointer-events-none absolute -right-20 -top-20 h-62.5 w-62.5 rounded-full border border-white/5 transition-transform duration-1000 group-hover:translate-x-4 group-hover:-translate-y-4" />

        <div className="pointer-events-none absolute -bottom-25 -left-25 h-62.5 w-62.5 rounded-full bg-[#c9a45c]/6 blur-3xl transition-transform duration-1000 group-hover:scale-125" />

        {/* Subtle accent */}
        <div className="pointer-events-none absolute right-[18%] top-1/2 hidden h-32 w-32 -translate-y-1/2 rounded-full bg-[#c9a45c]/5 blur-3xl md:block" />

        {/* Content */}
        <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c9a45c]/15 text-[#d8bd82] transition-transform duration-500 group-hover:rotate-6">
                <Sparkles size={14} />
              </div>

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-accent/70">
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
          <Button
            type="button"
            onClick={() => {}}
            variant="accent"
            icon={ArrowUpRight}
            className="mt-9 px-6 py-4 bg-accent text-[10px] font-black hover:bg-accent hover:shadow-[0_15px_40px_rgba(212,175,55,.18)]"
          >
            {t("button")}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
