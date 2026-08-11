"use client";

import {
  motion,
} from "framer-motion";
import { Building2, Check } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("About.about")

  return (
    <section id="about" className="bg-[#f4f9fa] px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto grid max-w-310 items-center gap-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-10 top-10 h-95 w-95 rounded-full bg-[#08788c]/6 blur-[80px]" />

          <div className="relative overflow-hidden rounded-[42px] border border-white bg-white/45 p-4 shadow-[0_35px_100px_rgba(8,47,58,.08)] backdrop-blur-2xl">
            <div className="relative min-h-125 overflow-hidden rounded-[34px] bg-[#082f3a] p-8">
              <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />

              <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full border border-white/10" />

              <div className="relative flex h-full min-h-107.5 flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-[.2em] text-white/35">
                    ROSHASOFT
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/60">
                    <Building2 size={15} />
                  </span>
                </div>

                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[.2em] text-[#70d8e4]">
                    {t("card")}
                  </span>

                  <h3 className="mt-4 max-w-90 text-[42px] font-black leading-[.95] tracking-[-.065em] text-white">
                    {t("cardAccent")}
                  </h3>

                  <div className="mt-8 h-px bg-white/10" />

                  <div className="mt-6 space-y-3">
                    {[t("point1"), t("point2"), t("point3")].map(
                      (item) => (
                        <div key={item} className="flex items-center gap-3">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[#70d8e4]">
                            <Check size={12} />
                          </span>

                          <span className="text-[10px] font-semibold text-white/60">
                            {item}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] font-black uppercase tracking-[.2em] text-[#08788c]">
            {t("eyebrow")}
          </span>

          <h2 className="mt-5 max-w-175 text-[46px] font-black leading-[.94] tracking-[-.075em] text-[#082f3a] sm:text-[64px]">
            {t("title")}
          </h2>

          <p className="mt-8 max-w-162.5 text-[14px] leading-[1.95] text-[#71838a]">
            {t("description")}
          </p>

          <p className="mt-5 max-w-162.5 text-[14px] leading-[1.95] text-[#71838a]">
            {t("description2")}
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {[t("point1"), t("point2"), t("point3")].map(
              (item, index) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-white bg-white/60 p-5 shadow-[0_15px_45px_rgba(8,47,58,.04)] backdrop-blur-xl"
                >
                  <span className="text-[9px] font-black text-[#b0bdc1]">
                    0{index + 1}
                  </span>

                  <div className="mt-5 text-[11px] font-bold text-[#315d6b]">
                    {item}
                  </div>
                </div>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
