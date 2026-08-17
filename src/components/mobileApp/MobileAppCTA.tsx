"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Button from "../ui/Button";

export default function MobileAppCTA() {
  const t = useTranslations("MobileApp.cta");

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
        <div className="absolute -right-32 -top-32 h-100 w-100 rounded-full border border-accent/15" />

        <div className="absolute -right-20 -top-20 h-62.5 w-62.5 rounded-full border border-accent/10" />

        <div className="absolute -bottom-25 -left-25 h-62.5 w-62.5 rounded-full bg-accent/5 blur-3xl" />

        {/* Small golden glow */}
        <div className="absolute right-[18%] top-[18%] h-24 w-24 rounded-full bg-accent/8 blur-3xl" />

        <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-accent">
                <Sparkles size={14} />
              </div>

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-accent/75">
                {t("eyebrow")}
              </span>
            </div>

            {/* Title */}
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-6xl">
              {t("title")}

              <span className="block text-accent">{t("titleAccent")}</span>
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

        {/* Bottom golden accent line */}
        <div className="absolute bottom-0 left-[8%] h-px w-[84%] bg-linear-to-r from-transparent via-accent/30 to-transparent" />
      </motion.div>
    </section>
  );
}
