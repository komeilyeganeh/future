"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Home");

  return (
    <section
      id="contact"
      className="bg-[#f5f9fa] px-5 py-28 sm:px-8 sm:py-36"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-310 overflow-hidden rounded-[40px] bg-[#082f3a] px-7 py-20 text-center sm:px-12"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-150 w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(20,160,175,.25),rgba(6,59,74,.08)_40%,transparent_70%)] blur-3xl" />

        <div className="relative">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-[#77e3ec]">
            <Sparkles size={22} />
          </div>

          <span className="mt-7 block text-[9px] font-bold uppercase tracking-[.2em] text-white/30">
            RoshaSoft
          </span>

          <h2 className="mx-auto mt-4 max-w-[760px] text-[43px] font-extrabold leading-[.96] tracking-[-.07em] text-white sm:text-[64px]">
            {t("cta.title")}
          </h2>

          <p className="mx-auto mt-6 max-w-[590px] text-[13px] leading-[1.9] text-white/45">
            {t("cta.description")}
          </p>

          <a
            href="mailto:hello@roshasoft.com"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-[10px] font-bold text-[#082f3a] transition hover:-translate-y-1"
          >
            {t("cta.button")}

            <ArrowUpRight
              size={14}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
}