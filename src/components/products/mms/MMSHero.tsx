"use client";

import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Boxes,
  PackageCheck,
  ShoppingCart,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function MMSHero() {
  const t = useTranslations("MMS.hero");

  const stats = [
    {
      label: "Inventory",
      value: "01",
      icon: Boxes,
    },
    {
      label: "Purchasing",
      value: "02",
      icon: ShoppingCart,
    },
    {
      label: "Operations",
      value: "03",
      icon: PackageCheck,
    },
    {
      label: "Analytics",
      value: "04",
      icon: BarChart3,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8faf9]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-45 h-125 w-125 rounded-full bg-[#082f3a]/2.5 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-112.5 w-[450px] rounded-full bg-[#082f3a]/2 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#082f3a 1px, transparent 1px), linear-gradient(90deg, #082f3a 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-28 sm:pb-24 md:px-8 md:pb-32 md:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Content */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#082f3a]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#71838a]">
                {t("eyebrow")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tighter text-[#082f3a] sm:text-6xl lg:text-7xl"
            >
              {t("title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 max-w-xl text-sm leading-7 text-[#71838a] md:text-base"
            >
              {t("description")}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href="#capabilities"
                className="group inline-flex items-center gap-3 rounded-full bg-[#082f3a] px-6 py-3.5 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {t("secondaryButton")}

                <ArrowDown
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#082f3a]/10 bg-white px-6 py-3.5 text-[10px] font-semibold text-[#082f3a] transition-all duration-300 hover:-translate-y-1 hover:border-[#082f3a]/20"
              >
                {t("primaryButton")}

                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </div>

          {/* MMS Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative w-full"
          >
            <div className="relative mx-auto w-full max-w-135">
              {/* Main dashboard */}
              <div className="relative overflow-hidden rounded-[28px] border border-[#082f3a]/8 bg-white shadow-[0_30px_100px_rgba(8,47,58,0.10)]">
                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-[#082f3a]/[0.07] px-5 py-4 sm:px-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#082f3a] text-white">
                      <Boxes size={16} />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold text-[#082f3a]">
                        RoshaSoft
                      </p>

                      <p className="text-[8px] uppercase tracking-[0.15em] text-[#71838a]">
                        MMS
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-[#082f3a]/4 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.15em] text-[#71838a]">
                    {t("status")}
                  </span>
                </div>

                {/* Dashboard content */}
                <div className="p-5 sm:p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {stats.map((stat, index) => {
                      const Icon = stat.icon;

                      return (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.5 + index * 0.08,
                          }}
                          className="rounded-2xl border border-[#082f3a]/6 bg-[#f8faf9] p-4"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#082f3a] shadow-sm">
                              <Icon size={15} />
                            </div>

                            <span className="text-[8px] font-semibold tracking-[0.15em] text-[#71838a]/50">
                              {stat.value}
                            </span>
                          </div>

                          <p className="mt-5 text-[10px] font-semibold text-[#082f3a]">
                            {stat.label}
                          </p>

                          <div className="mt-2 h-1 overflow-hidden rounded-full bg-[#082f3a]/6">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{
                                width: `${55 + index * 10}%`,
                              }}
                              transition={{
                                duration: 0.9,
                                delay: 0.8 + index * 0.08,
                              }}
                              className="h-full rounded-full bg-[#082f3a]"
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Bottom analytics panel */}
                  <div className="mt-3 rounded-2xl border border-[#082f3a]/6 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.18em] text-[#71838a]">
                          Merchandise overview
                        </p>

                        <p className="mt-1 text-lg font-semibold tracking-tight text-[#082f3a]">
                          Connected operations
                        </p>
                      </div>

                      <BarChart3
                        size={18}
                        className="text-[#082f3a]/40"
                      />
                    </div>

                    {/* Chart */}
                    <div className="mt-5 flex h-20 items-end gap-2">
                      {[35, 48, 42, 65, 55, 76, 62, 88, 72, 94].map(
                        (height, index) => (
                          <motion.div
                            key={index}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{
                              duration: 0.6,
                              delay: 0.8 + index * 0.04,
                            }}
                            className={`flex-1 rounded-t-md ${
                              index === 9
                                ? "bg-[#082f3a]"
                                : "bg-[#082f3a]/8"
                            }`}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Small floating status */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-5 left-4 hidden rounded-2xl border border-[#082f3a]/[0.07] bg-white px-4 py-3 shadow-[0_20px_50px_rgba(8,47,58,0.10)] sm:block"
              >
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#082f3a]" />

                  <span className="text-[9px] font-semibold text-[#082f3a]">
                    Inventory connected
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}