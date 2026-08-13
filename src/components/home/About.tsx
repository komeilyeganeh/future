"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("Home");

  return (
    <section id="about" className="bg-white px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto grid max-w-310 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-0 top-12 h-[360px] w-[360px] rounded-[45px] bg-[#eef4f5]" />

          <div className="relative left-[8%] aspect-square max-w-105 overflow-hidden rounded-[45px] bg-linear-to-br from-[#063b4a] via-[#08788c] to-[#18a1b1] shadow-[0_40px_90px_rgba(8,72,87,.18)]">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />

            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-white/10" />

            <Sparkles
              size={26}
              className="absolute left-9 top-9 text-white/60"
            />

            <div className="absolute bottom-9 left-9 right-9">
              <span className="text-[9px] font-bold uppercase tracking-[.2em] text-white/40">
                RoshaSoft
              </span>

              <div className="mt-4 h-px bg-white/15" />

              <p className="mt-5 max-w-[280px] text-[27px] font-bold leading-tight tracking-[-.045em] text-white">
                {t("about.visualTitle")}
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 rounded-3xl border border-white bg-white p-5 shadow-[0_25px_70px_rgba(7,47,58,.12)]">
            <span className="text-[8px] font-bold uppercase tracking-[.15em] text-[#99a9ae]">
              {t("about.cardLabel")}
            </span>

            <strong className="mt-1 block text-[32px] tracking-[-.06em] text-primary">
              20+
            </strong>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[.18em] text-[#08788c]">
            {t("about.kicker")}
          </span>

          <h2 className="mt-4 max-w-[650px] text-[44px] font-extrabold leading-[.97] tracking-[-.07em] text-primary sm:text-[62px]">
            {t("about.title")}
          </h2>

          <p className="mt-7 max-w-152.5 text-[14px] leading-[1.9] text-secondary">
            {t("about.description")}
          </p>

          <div className="mt-8 space-y-3">
            {[
              t("about.pointOne"),
              t("about.pointTwo"),
              t("about.pointThree"),
            ].map((point) => (
              <div key={point} className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#08788c]/8 text-[#08788c]">
                  <Check size={13} />
                </span>

                <span className="text-[11px] font-semibold text-[#50666e]">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}