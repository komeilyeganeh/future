"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";

export default function HISCTA() {
  const t = useTranslations("HIS.cta");

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
        {/* Decorative rings */}
        <div className="absolute -right-32 -top-32 h-100 w-100 rounded-full border border-white/5" />

        <div className="absolute -right-20 -top-20 h-62.5 w-62.5 rounded-full border border-accent/10" />

        <div className="absolute -bottom-25 -left-25 h-62.5 w-62.5 rounded-full bg-accent/[0.035] blur-3xl" />

        {/* Gold ambient glow */}
        <div className="absolute right-[20%] top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-accent/[0.025] blur-3xl" />

        <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/15 bg-accent/10 text-accent">
                <Sparkles size={14} />
              </div>

              <span className="h-px w-7 bg-accent/50" />

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