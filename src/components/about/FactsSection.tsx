"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FactsSection() {
  const t = useTranslations("About.facts");

  return (
    <section className="relative overflow-hidden bg-[#f4f9fa] px-5 py-28 sm:px-8 sm:py-36">
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-45 top-[20%] h-125 w-125 rounded-full bg-[#08788c]/4.5 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-45 right-35 h-125 w-125 rounded-full bg-[#164e63]/4 blur-[130px]" />

      {/* Subtle gold atmosphere */}
      <div className="pointer-events-none absolute right-[18%] top-[12%] h-75 w-75 rounded-full bg-[#d4af37]/[0.035] blur-[100px]" />

      <div className="relative mx-auto max-w-310">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-190"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#d4af37]" />

            <span className="text-[10px] font-black uppercase tracking-[.2em] text-[#d4af37]">
              {t("eyebrow")}
            </span>
          </div>

          <h2 className="mt-6 text-[46px] font-black leading-[.92] tracking-[-.075em] text-primary sm:text-[64px]">
            {t("title")}

            <br />

            <span className="text-[#08788c]">{t("accent")}</span>
          </h2>
        </motion.div>

        {/* =========================================================
        DATA WALL
        ========================================================= */}
        <div className="relative mt-20">
          {/* Vertical axis */}
          <div className="pointer-events-none absolute left-4.5 top-0 hidden h-full w-px bg-primary/8 sm:block" />

          {/* Data items */}
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {[
              ["18+", t("experience")],
              ["100+", t("clients")],
              ["1040", t("projects")],
              ["24/7", t("support")],
              ["Turkey", t("office")],
            ].map(([value, label], index) => (
              <motion.div
                key={label}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative border-t border-[#082f3a]/8"
              >
                {/* Connecting node */}
                <div className="absolute left-3 -top-1 hidden h-2 w-2 rounded-full border-2 border-[#f4f9fa] bg-[#08788c] transition-colors duration-300 group-hover:bg-[#d4af37] sm:block" />

                <div
                  className={`
                    relative
                    flex
                    min-h-47.5
                    flex-col
                    justify-between
                    overflow-hidden
                    px-0
                    py-8
                    sm:min-h-55
                    sm:px-10
                    ${
                      index % 2 === 0
                        ? "sm:border-r sm:border-[#082f3a]/8"
                        : ""
                    }
                  `}
                >
                  {/* Hover number */}
                  <span className="absolute right-6 top-7 text-[9px] font-black tracking-[.2em] text-primary/18 transition-all duration-500 group-hover:text-[#d4af37]">
                    0{index + 1}
                  </span>

                  {/* Background giant index */}
                  <span
                    className="
                      pointer-events-none
                      absolute
                      -bottom-10
                      -right-2
                      text-[150px]
                      font-black
                      leading-none
                      tracking-[-.12em]
                      text-primary/2.5
                      transition-all
                      duration-700
                      group-hover:text-[#d4af37]/5
                      group-hover:translate-x-2
                    "
                  >
                    {index + 1}
                  </span>

                  {/* Top label */}
                  <div className="relative flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#08788c] transition-all duration-500 group-hover:scale-[1.8] group-hover:bg-[#d4af37]" />

                    <span className="text-[9px] font-black uppercase tracking-[.17em] text-[#9aa9ae] transition-colors duration-300 group-hover:text-[#d4af37]">
                      {label}
                    </span>
                  </div>

                  {/* Main number */}
                  <div className="relative mt-10 flex items-end justify-between">
                    <strong
                      className="
                        text-[64px]
                        font-black
                        leading-none
                        tracking-[-.09em]
                        text-primary
                        transition-all
                        duration-500
                        group-hover:translate-x-2
                        sm:text-[76px]
                      "
                    >
                      {value}
                    </strong>

                    {/* Arrow */}
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      whileHover={{ scale: 1.1 }}
                      className="
                        mb-2
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#082f3a]/8
                        text-secondary
                        opacity-0
                        transition-all
                        duration-500
                        group-hover:translate-x-0
                        group-hover:opacity-100
                        group-hover:border-[#d4af37]/35
                        group-hover:bg-[#d4af37]
                        group-hover:text-[#082f3a]
                      "
                    >
                      <ArrowUpRight size={14} />
                    </motion.div>
                  </div>

                  {/* Bottom line */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#d4af37] transition-all duration-700 group-hover:w-full" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.35,
            }}
            className="mt-14 flex flex-col justify-between gap-6 border-t border-[#082f3a]/8 pt-7 sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4af37]/40" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d4af37]" />
              </span>

              <span className="text-[9px] font-black uppercase tracking-[.16em] text-secondary">
                Building digital systems that scale
              </span>
            </div>

            <span className="text-[9px] font-bold uppercase tracking-[.16em] text-[#a0afb4]">
              RoshaSoft / 2026
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}