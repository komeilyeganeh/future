"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ValuesSection() {
    const t = useTranslations("About.values")
  return (
    <section
      id="values"
      className="relative overflow-hidden bg-white px-5 py-28 sm:px-8 sm:py-36"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-64 top-20 h-150 w-150 rounded-full bg-[#08788c]/4.5 blur-[140px]" />

      <div className="pointer-events-none absolute -right-72 bottom-0 h-175 w-175 rounded-full bg-[#082f3a]/2.5 blur-[160px]" />

      <div className="relative mx-auto max-w-310">
        {/* =====================================================
        HEADER
    ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-212.5"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#08788c]" />

            <span className="text-[10px] font-black uppercase tracking-[.22em] text-[#08788c]">
              {t("eyebrow")}
            </span>
          </div>

          <h2 className="mt-6 max-w-205 text-[48px] font-black leading-[.9] tracking-[-.08em] text-[#082f3a] sm:text-[70px]">
            {t("title")}

            <br />

            <span className="text-[#08788c]">{t("accent")}</span>
          </h2>

          <p className="mt-8 max-w-162.5 text-[14px] leading-[1.95] text-[#71838a]">
            {t("description")}
          </p>
        </motion.div>

        {/* =====================================================
        VALUES MANIFESTO
    ===================================================== */}
        <div className="relative mt-24">
          {/* Central timeline */}
          <div className="absolute bottom-0 left-4.75 top-0 w-px bg-linear-to-b from-transparent via-[#08788c]/20 to-transparent sm:left-9.75" />

          <div className="space-y-0">
            {[
              {
                icon: Sparkles,
                number: "01",
                data: t("innovation.title"),
                label: "IDEAS",
              },
              {
                icon: Award,
                number: "02",
                data: t("excellence.title"),
                label: "QUALITY",
              },
              {
                icon: Users,
                number: "03",
                data: t("collaboration.title"),
                label: "TOGETHER",
              },
              {
                icon: Target,
                number: "04",
                data: t("client.title"),
                label: "IMPACT",
              },
              {
                icon: ShieldCheck,
                number: "05",
                data: t("transparency.title"),
                label: "TRUST",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.label}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative"
                >
                  {/* =================================================
                  ITEM
              ================================================= */}
                  <div className="relative grid min-h-52.5 grid-cols-[60px_1fr] gap-6 border-b border-[#082f3a]/6 py-10 sm:grid-cols-[80px_190px_1fr] sm:gap-8 sm:py-14">
                    {/* =================================================
                    NUMBER
                ================================================= */}
                    <div className="relative z-10 flex items-start justify-center">
                      <span
                        className="
                      text-[12px]
                      font-black
                      tracking-widest
                      text-[#b6c3c7]
                      transition-all
                      duration-500
                      group-hover:text-[#08788c]
                    "
                      >
                        {item.number}
                      </span>

                      {/* Timeline node */}
                      <span
                        className="
                      absolute
                      left-1/2
                      top-14.5
                      h-2
                      w-2
                      -translate-x-1/2
                      rounded-full
                      border
                      border-[#08788c]/30
                      bg-white
                      transition-all
                      duration-500
                      group-hover:h-3
                      group-hover:w-3
                      group-hover:border-[#08788c]
                      group-hover:bg-[#70d9e5]
                      group-hover:shadow-[0_0_0_6px_rgba(8,120,140,.07)]
                    "
                      />
                    </div>

                    {/* =================================================
                    ICON / LABEL
                ================================================= */}
                    <div className="hidden sm:block">
                      <div className="flex items-center gap-4">
                        <div
                          className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#082f3a]/[0.07]
                        bg-[#f7fafb]
                        text-[#08788c]
                        transition-all
                        duration-500
                        group-hover:border-[#08788c]/20
                        group-hover:bg-[#08788c]
                        group-hover:text-white
                        group-hover:shadow-[0_15px_35px_rgba(8,120,140,.18)]
                      "
                        >
                          <Icon size={18} />
                        </div>

                        <span
                          className="
                        text-[8px]
                        font-black
                        uppercase
                        tracking-[.18em]
                        text-[#a2b0b5]
                        transition-colors
                        duration-500
                        group-hover:text-[#08788c]
                      "
                        >
                          {item.label}
                        </span>
                      </div>
                    </div>

                    {/* =================================================
                    CONTENT
                ================================================= */}
                    <div className="min-w-0">
                      {/* Mobile icon */}
                      <div className="mb-6 flex items-center gap-3 sm:hidden">
                        <div
                          className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#082f3a]/[0.07]
                        bg-[#f7fafb]
                        text-[#08788c]
                        transition-all
                        duration-500
                        group-hover:bg-[#08788c]
                        group-hover:text-white
                      "
                        >
                          <Icon size={16} />
                        </div>

                        <span className="text-[8px] font-black uppercase tracking-[.18em] text-[#a2b0b5]">
                          {item.label}
                        </span>
                      </div>

                      <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-start lg:gap-16">
                        {/* Title */}
                        <h3
                          className="
                        max-w-105
                        text-[29px]
                        font-black
                        leading-[.95]
                        tracking-[-.06em]
                        text-[#082f3a]
                        transition-all
                        duration-500
                        group-hover:translate-x-2
                        sm:text-[38px]
                      "
                        >
                          {item.label}
                        </h3>

                        {/* Description */}
                        <p
                          className="
                        max-w-130
                        text-[12px]
                        leading-[1.95]
                        text-[#71838a]
                        transition-colors
                        duration-500
                        group-hover:text-[#506870]
                        sm:text-[13px]
                      "
                        >
                          {item.label}
                        </p>
                      </div>
                    </div>

                    {/* =================================================
                    HOVER LINE
                ================================================= */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      className="
                    pointer-events-none
                    absolute
                    -bottom-px
                    left-0
                    h-0.5
                    w-full
                    origin-left
                    bg-linear-to-r
                    from-[#08788c]
                    via-[#70d9e5]
                    to-transparent
                  "
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
        BOTTOM STATEMENT
    ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-center"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#08788c]" />

            <span className="text-[8px] font-black uppercase tracking-[.18em] text-[#9aa9ae]">
              RoshaSoft / Core principles
            </span>
          </div>

          <div className="h-px flex-1 bg-[#082f3a]/6 sm:mx-8" />

          <span className="text-[9px] font-bold uppercase tracking-[.16em] text-[#08788c]">
            Built with purpose.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
