"use client";

import {
  ArrowDown,
  ArrowUpRight,
  LayoutTemplate,
  Monitor,
  MousePointer2,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Button from "../ui/Button";

export default function WebDesignHero() {
  const t = useTranslations("WebDesign.hero");

  return (
    <section className="relative overflow-hidden bg-background-soft">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[8%] top-[20%] h-72 w-72 rounded-full bg-primary/2.5 blur-3xl" />

        <div className="absolute right-[-150px] top-[-150px] h-125 w-125 rounded-full border border-[#c9a45c]/10" />

        <div className="absolute -bottom-45 left-1/2 h-100 w-100 -translate-x-1/2 rounded-full bg-primary/2 blur-3xl" />

        <div className="absolute right-[12%] top-[18%] h-72 w-72 rounded-full bg-[#c9a45c]/4 blur-3xl" />
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
              <span className="h-px w-8 bg-[#c9a45c]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c7a45d]">
                {t("eyebrow")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-3xl text-5xl font-semibold leading-[0.96] tracking-tighter text-primary sm:text-6xl lg:text-7xl"
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
                className="bg-[#103d4e] px-6 py-4 text-[10px] font-bold shadow-[0_20px_50px_rgba(16,61,78,.18)] hover:shadow-[0_28px_60px_rgba(8,120,140,.25)]"
              >
                {t("primaryButton")}
              </Button>

              <Button
                href="/#services"
                variant="secondary"
                icon={ArrowDown}
                className="border-[#08788c]/15 bg-white/65 px-5 py-4 text-[10px] font-bold text-primary-soft shadow-[0_10px_35px_rgba(20,70,85,.04)] backdrop-blur-xl hover:border-accent/40 hover:bg-white"
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
              {/* Browser */}
              <div className="absolute left-[8%] top-[12%] w-[84%] overflow-hidden rounded-[28px] border border-primary/10 bg-white shadow-[0_35px_100px_rgba(8,47,58,0.12)]">
                {/* Browser top */}
                <div className="flex items-center gap-2 border-b border-primary/6 px-5 py-4">
                  <span className="h-2 w-2 rounded-full bg-[#c9a45c]/70" />
                  <span className="h-2 w-2 rounded-full bg-primary/10" />
                  <span className="h-2 w-2 rounded-full bg-primary/10" />

                  <div className="ml-4 h-5 flex-1 rounded-full bg-primary/[0.035]" />
                </div>

                {/* Website preview */}
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-20 rounded-full bg-primary" />

                    <div className="flex gap-2">
                      <span className="h-2 w-8 rounded-full bg-primary/10" />
                      <span className="h-2 w-8 rounded-full bg-primary/10" />
                      <span className="h-2 w-8 rounded-full bg-primary/10" />
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-[1.1fr_0.9fr] gap-5">
                    <div>
                      <div className="h-5 w-[85%] rounded-full bg-primary/10" />
                      <div className="mt-2 h-5 w-[65%] rounded-full bg-primary/10" />

                      <div className="mt-5 h-2 w-[90%] rounded-full bg-primary/5" />
                      <div className="mt-2 h-2 w-[75%] rounded-full bg-primary/5" />

                      <div className="mt-6 h-8 w-24 rounded-full bg-primary" />
                    </div>

                    <div className="rounded-2xl border border-[#c9a45c]/10 bg-[#c9a45c]/5 p-4">
                      <div className="flex h-full items-center justify-center">
                        <LayoutTemplate
                          size={48}
                          strokeWidth={1}
                          className="text-[#c9a45c]/45"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="h-16 rounded-xl bg-primary/[0.035]" />
                    <div className="h-16 rounded-xl bg-[#c9a45c]/5" />
                    <div className="h-16 rounded-xl bg-primary/[0.035]" />
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute left-[0%] top-[30%] rounded-2xl border border-[#c9a45c]/20 bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]">
                <Monitor size={20} className="text-[#b08a45]" />

                <p className="mt-2 text-[9px] font-semibold text-primary">
                  {t("visual.web")}
                </p>
              </div>

              <div className="absolute right-[0%] top-[18%] rounded-2xl border border-primary/7 bg-white p-4 shadow-[0_20px_60px_rgba(8,47,58,0.08)]">
                <MousePointer2 size={20} className="text-primary" />

                <p className="mt-2 text-[9px] font-semibold text-primary">
                  {t("visual.experience")}
                </p>
              </div>

              <div className="absolute bottom-[12%] right-[8%] rounded-2xl border border-[#c9a45c]/20 bg-primary px-5 py-4 text-white shadow-[0_20px_60px_rgba(8,47,58,0.18)]">
                <p className="text-[8px] uppercase tracking-[0.25em] text-white/40">
                  {t("visual.status")}
                </p>

                <p className="mt-2 text-sm font-semibold text-white">
                  {t("visual.performance")}
                </p>

                <div className="mt-2 h-px w-8 bg-[#c9a45c]" />
              </div>

              <div className="absolute bottom-[8%] left-[7%]">
                <p className="text-6xl font-semibold tracking-[-0.08em] text-[#c9a45c]/10">
                  04
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
