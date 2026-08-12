"use client";

import { ArrowUpRight, Layers3, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function HISPromise() {
  const t = useTranslations("HIS.promise");

  return (
    <section className="bg-[#f8faf9]">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[34px] bg-[#082f3a] px-7 py-14 md:px-14 md:py-20"
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/5" />

          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/2 blur-3xl" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white">
                  <Sparkles size={14} />
                </div>

                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/40">
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

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 text-white">
              <Layers3 size={32} strokeWidth={1.3} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}