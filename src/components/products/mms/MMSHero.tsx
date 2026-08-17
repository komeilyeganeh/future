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
import Link from "next/link";
import Button from "@/components/ui/Button";

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
    <section className="relative overflow-hidden bg-background-soft">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-45 h-125 w-125 rounded-full bg-primary/[0.035] blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-112.5 w-[450px] rounded-full bg-primary/[0.025] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#082f3a 1px, transparent 1px), linear-gradient(90deg, #082f3a 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Soft center glow */}
        <div className="absolute left-[48%] top-1/2 hidden h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.015] blur-3xl lg:block" />
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
              <span className="h-px w-8 bg-[#c7a45d]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c7a45d]">
                {t("eyebrow")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-primary sm:text-6xl lg:text-7xl"
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

            {/* Buttons */}
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
                {t("secondaryButton")}
              </Button>

              <Button
                href="/#services"
                variant="secondary"
                icon={ArrowDown}
                className="border-[#08788c]/15 bg-white/65 px-5 py-4 text-[10px] font-bold text-primary-soft shadow-[0_10px_35px_rgba(20,70,85,.04)] backdrop-blur-xl hover:border-accent/40 hover:bg-white"
              >
                {t("primaryButton")}
              </Button>
            </motion.div>

            {/* Small trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-10 flex items-center gap-3"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#c7a45d]" />

              <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-secondary/55">
                Connected inventory management
              </span>
            </motion.div>
          </div>

          {/* MMS Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative w-full"
          >
            <div className="relative mx-auto w-full max-w-135">
              {/* Outer rings */}
              <div className="pointer-events-none absolute -inset-8 rounded-[42px] border border-primary/[0.025]" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="pointer-events-none absolute -inset-12 rounded-[50px] border border-dashed border-primary/[0.025]"
              />

              {/* Main dashboard */}
              <div className="group/dashboard relative overflow-hidden rounded-[30px] border border-primary/8 bg-white shadow-[0_30px_100px_rgba(8,47,58,0.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_45px_120px_rgba(8,47,58,0.14)]">
                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-primary/7 px-5 py-4 sm:px-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white transition-transform duration-500 group-hover/dashboard:rotate-3">
                      <Boxes size={16} strokeWidth={1.7} />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold text-primary">
                        RoshaSoft
                      </p>

                      <p className="text-[8px] uppercase tracking-[0.15em] text-secondary">
                        MMS
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-primary/6 bg-background-soft px-3 py-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/30" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-primary" />
                    </span>

                    <span className="text-[8px] font-semibold uppercase tracking-[0.15em] text-secondary">
                      {t("status")}
                    </span>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-5 sm:p-6">
                  {/* Stats */}
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
                          className="group/stat rounded-2xl border border-primary/6 bg-background-soft p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/10 hover:bg-white hover:shadow-[0_15px_40px_rgba(8,47,58,0.06)]"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-primary shadow-sm transition-transform duration-300 group-hover/stat:scale-105">
                              <Icon size={15} strokeWidth={1.7} />
                            </div>

                            <span className="text-[8px] font-semibold tracking-[0.15em] text-secondary/40">
                              {stat.value}
                            </span>
                          </div>

                          <p className="mt-5 text-[10px] font-semibold text-primary">
                            {stat.label}
                          </p>

                          <div className="mt-2 h-1 overflow-hidden rounded-full bg-primary/6">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{
                                width: `${55 + index * 10}%`,
                              }}
                              transition={{
                                duration: 0.9,
                                delay: 0.8 + index * 0.08,
                              }}
                              className="h-full rounded-full bg-primary"
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Analytics panel */}
                  <div className="mt-3 rounded-2xl border border-primary/6 bg-white p-4 transition-all duration-300 hover:border-primary/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.18em] text-secondary">
                          Merchandise overview
                        </p>

                        <div className="mt-1 flex items-center gap-2">
                          <p className="text-lg font-semibold tracking-tight text-primary">
                            Connected operations
                          </p>

                          <span className="rounded-full bg-[#c7a45d]/10 px-2 py-0.5 text-[7px] font-semibold text-[#b28f4d]">
                            LIVE
                          </span>
                        </div>
                      </div>

                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-background-soft text-primary">
                        <BarChart3 size={16} />
                      </div>
                    </div>

                    {/* Chart */}
                    <div className="mt-6 flex h-20 items-end gap-2">
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
                            className={`flex-1 rounded-t-md transition-all duration-300 ${
                              index === 9
                                ? "bg-primary"
                                : "bg-primary/[0.07] group-hover/dashboard:bg-primary/[0.12]"
                            }`}
                          />
                        ),
                      )}
                    </div>

                    {/* Chart footer */}
                    <div className="mt-4 flex items-center justify-between border-t border-primary/5 pt-3">
                      <span className="text-[8px] text-secondary">
                        Inventory performance
                      </span>

                      <span className="text-[9px] font-semibold text-primary">
                        +24.8%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating status */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1 }}
                className="absolute -bottom-5 left-4 hidden rounded-2xl border border-primary/7 bg-white px-4 py-3 shadow-[0_20px_50px_rgba(8,47,58,0.10)] transition-transform duration-300 hover:-translate-y-1 sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/30" />
                      <span className="relative h-2 w-2 rounded-full bg-primary" />
                    </span>
                  </div>

                  <div>
                    <p className="text-[8px] uppercase tracking-[0.15em] text-secondary">
                      System
                    </p>

                    <p className="mt-0.5 text-[10px] font-semibold text-primary">
                      Inventory connected
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating MMS label */}
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1.1 }}
                className="absolute -right-4 top-10 hidden rounded-2xl bg-primary px-4 py-3 shadow-[0_20px_50px_rgba(8,47,58,0.18)] sm:block lg:-right-7"
              >
                <p className="text-[8px] uppercase tracking-[0.2em] text-white/40">
                  RoshaSoft
                </p>

                <p className="mt-1 text-sm font-semibold text-white">MMS</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
