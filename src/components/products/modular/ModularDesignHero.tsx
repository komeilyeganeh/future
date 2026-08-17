"use client";

import { ArrowDown, ArrowUpRight, Boxes, Layers3, Puzzle } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";

export default function ModularDesignHero() {
  const t = useTranslations("MODULAR.hero");

  return (
    <section className="relative overflow-hidden bg-background-soft">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[55%] -top-45 h-130 w-130 rounded-full bg-primary/2.5 blur-3xl" />

        <div className="absolute -bottom-45 -left-30 h-100 w-100 rounded-full bg-primary/2 blur-3xl" />

        {/* Subtle gold glow */}
        <div className="absolute right-[12%] top-[25%] h-72 w-72 rounded-full bg-accent/[0.035] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-40">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-accent" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
                {t("eyebrow")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-primary sm:text-6xl lg:text-7xl"
            >
              {t("title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 max-w-xl text-sm leading-7 text-secondary md:text-base"
            >
              {t("description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Button
                href="/#contact"
                icon={ArrowUpRight}
                iconRotate
                className="bg-primary px-6 py-4 text-[10px] font-bold shadow-[0_20px_50px_rgba(16,61,78,.16)] hover:bg-[#0d3545] hover:shadow-[0_28px_60px_rgba(8,120,140,.22)]"
              >
                {t("primaryButton")}
              </Button>

              <Button
                href="/#services"
                variant="secondary"
                icon={ArrowDown}
                className="border-[#08788c]/15 bg-white/70 px-5 py-4 text-[10px] font-bold text-primary-soft shadow-[0_10px_35px_rgba(20,70,85,.04)] backdrop-blur-xl hover:border-accent/40 hover:bg-white hover:text-primary"
              >
                {t("secondaryButton")}
              </Button>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto w-full max-w-130"
          >
            <div className="relative aspect-square">
              {/* Main rings */}
              <div className="absolute inset-[5%] rounded-full border border-primary/6" />
              <div className="absolute inset-[15%] rounded-full border border-accent/10" />
              <div className="absolute inset-[25%] rounded-full border border-primary/8" />

              {/* Center */}
              <div className="absolute inset-[35%] rounded-4xl bg-primary shadow-[0_30px_100px_rgba(8,47,58,0.2)]">
                <div className="flex h-full flex-col items-center justify-center text-center text-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Layers3 size={26} strokeWidth={1.4} />
                  </div>

                  <span className="mt-4 text-[9px] uppercase tracking-[0.3em] text-accent/70">
                    {t("label")}
                  </span>

                  <span className="mt-2 text-2xl font-semibold tracking-tight">
                    Modular
                  </span>

                  <span className="text-2xl font-semibold tracking-tight text-white/45">
                    ecosystem
                  </span>
                </div>
              </div>

              {/* Floating cards */}
              <div className="group absolute left-[1%] top-[23%] rounded-2xl border border-primary/7 bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/20">
                <Boxes
                  size={20}
                  className="text-primary transition-colors group-hover:text-accent"
                />

                <p className="mt-2 text-[9px] font-semibold text-primary">
                  {t("card1")}
                </p>
              </div>

              <div className="group absolute right-[0%] top-[13%] rounded-2xl border border-primary/7 bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/20">
                <Puzzle
                  size={20}
                  className="text-primary transition-colors group-hover:text-accent"
                />

                <p className="mt-2 text-[9px] font-semibold text-primary">
                  {t("card2")}
                </p>
              </div>

              <div className="group absolute bottom-[15%] right-[8%] rounded-2xl border border-primary/7 bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/20">
                <Layers3
                  size={20}
                  className="text-primary transition-colors group-hover:text-accent"
                />

                <p className="mt-2 text-[9px] font-semibold text-primary">
                  {t("card3")}
                </p>
              </div>

              <div className="absolute bottom-[9%] left-[8%]">
                <p className="text-5xl font-semibold tracking-[-0.06em] text-accent/10">
                  07
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}