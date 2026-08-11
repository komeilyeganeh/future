"use client";

import { motion, MotionConfig } from "framer-motion";
import { Target } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HistorySection() {
  const t = useTranslations("About.history");
  return (
    <section
      id="history"
      className="relative overflow-hidden bg-white px-5 py-28 sm:px-8 sm:py-36"
    >
      <div className="pointer-events-none absolute -right-62.5 -top-25 h-150 w-150 rounded-full bg-[#08788c]/5.5 blur-[120px]" />

      <div className="relative mx-auto max-w-310">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_.9fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-black uppercase tracking-[.2em] text-[#08788c]">
              {t("eyebrow")}
            </span>

            <h2 className="mt-5 max-w-175 text-[46px] font-black leading-[.95] tracking-[-.075em] text-[#082f3a] sm:text-[64px]">
              {t("title")}
            </h2>

            <p className="mt-8 max-w-155 text-[14px] leading-[1.95] text-[#71838a]">
              {t("description")}
            </p>

            <div className="mt-9 flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#08788c]/8 text-[#08788c]">
                <Target size={17} />
              </span>

              <span className="max-w-112.5 text-[12px] font-semibold leading-[1.7] text-[#50666e]">
                {t("quote")}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[45px] bg-[#08788c]/[0.07] blur-3xl" />

            <div className="relative overflow-hidden rounded-[42px] border border-white/80 bg-white/55 p-4 shadow-[0_40px_110px_rgba(8,47,58,.10)] backdrop-blur-2xl">
              <div className="relative min-h-112.5 overflow-hidden rounded-[34px] bg-[#082f3a] p-8">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -right-32 -top-32 h-107.5 w-107.5 rounded-full border border-white/10"
                />

                <div className="relative">
                  <span className="text-[9px] font-black uppercase tracking-[.2em] text-white/30">
                    {t("label")}
                  </span>

                  <div className="mt-20">
                    <span className="text-[100px] font-black leading-none -tracking-widest text-white">
                      {t("year")}
                    </span>

                    <div className="mt-3 h-1 w-20 rounded-full bg-[#6ed9e5]" />

                    <p className="mt-7 max-w-75 text-4.75 font-bold leading-[1.2] tracking-[-.035em] text-white/70">
                      {t("yearText")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
