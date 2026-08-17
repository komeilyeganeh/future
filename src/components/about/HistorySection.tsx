"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HistorySection() {
  const t = useTranslations("About.history");

  return (
    <section
      id="history"
      className="relative overflow-hidden bg-white px-5 py-28 sm:px-8 sm:py-36"
    >
      {/* Accent glow */}
      <div className="pointer-events-none absolute -right-62.5 -top-25 h-150 w-150 rounded-full bg-accent/[0.035] blur-[120px]" />

      <div className="relative mx-auto max-w-310">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_.9fr] lg:gap-24">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-black uppercase tracking-[.2em] text-accent">
              {t("eyebrow")}
            </span>

            <h2 className="mt-5 max-w-175 text-[46px] font-black leading-[.95] tracking-[-.075em] text-primary sm:text-[64px]">
              {t("title")}
            </h2>

            <p className="mt-8 max-w-155 text-[14px] leading-[1.95] text-secondary">
              {t("description")}
            </p>

            <div className="mt-9 flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-accent">
                <Target size={17} />
              </span>

              <span className="max-w-112.5 text-[12px] font-semibold leading-[1.7] text-[#50666e]">
                {t("quote")}
              </span>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full min-w-0"
          >
            <div className="absolute inset-0 rounded-[45px] bg-[#08788c]/[0.07] blur-3xl" />

            <div className="relative w-full min-w-0 overflow-hidden rounded-[42px] border border-white/80 bg-white/55 p-2.5 shadow-[0_40px_110px_rgba(8,47,58,.10)] backdrop-blur-2xl sm:p-4">
              <div className="relative min-h-90 w-full overflow-hidden rounded-[30px] bg-primary p-6 sm:min-h-112.5 sm:rounded-[34px] sm:p-8 md:min-h-125">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10 sm:-right-32 sm:-top-32 sm:h-107.5 sm:w-107.5"
                />

                {/* Subtle gold ambient light */}
                <div className="absolute right-8 top-8 h-32 w-32 rounded-full bg-accent/[0.055] blur-3xl" />

                <div className="relative z-10 flex h-full min-h-77 flex-col sm:min-h-96.5 md:min-h-109">
                  <span className="text-[8px] font-black uppercase tracking-[.2em] text-white/30 sm:text-[9px]">
                    {t("label")}
                  </span>

                  <div className="mt-auto pt-16 sm:pt-20">
                    <span className="block w-full max-w-full wrap-break-word text-[clamp(2.8rem,10vw,5rem)] font-black leading-[0.9] tracking-[-0.07em] text-white">
                      {t("text")}
                    </span>

                    {/* Gold accent line */}
                    <div className="mt-3 h-1 w-14 rounded-full bg-accent sm:w-20" />

                    <p className="mt-6 max-w-full text-[clamp(1rem,3.5vw,1.1875rem)] font-bold leading-tight tracking-[-.035em] text-white/70 sm:mt-7 sm:max-w-75">
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
