"use client";

import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ContactRound,
  MessageSquare,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function CRMHero() {
  const t = useTranslations("CRM.hero");

  const metrics = [
    {
      label: t("cards.customers"),
      value: "2.4K",
      icon: Users,
    },
    {
      label: t("cards.leads"),
      value: "186",
      icon: ContactRound,
    },
    {
      label: t("cards.analytics"),
      value: "94%",
      icon: BarChart3,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8faf9]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-48 -top-48 h-130 w-130 rounded-full bg-[#082f3a]/2.5 blur-3xl" />

        <div className="absolute -bottom-48 -left-48 h-125 w-125 rounded-full bg-[#082f3a]/2 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#082f3a 1px, transparent 1px), linear-gradient(90deg, #082f3a 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-28 sm:pb-24 md:px-8 md:pb-32 md:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
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

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href="#features"
                className="group inline-flex items-center gap-3 rounded-full bg-[#082f3a] px-6 py-3.5 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {t("primaryButton")}

                <ArrowDown
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#082f3a]/10 bg-white px-6 py-3.5 text-[10px] font-semibold text-[#082f3a] transition-all duration-300 hover:-translate-y-1 hover:border-[#082f3a]/20"
              >
                {t("secondaryButton")}

                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </div>

          {/* CRM Workspace */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative w-full"
          >
            <div className="mx-auto w-full max-w-135">
              {/* Main CRM panel */}
              <div className="overflow-hidden rounded-[28px] border border-[#082f3a]/8 bg-white shadow-[0_30px_100px_rgba(8,47,58,0.10)]">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#082f3a]/[0.07] px-5 py-4 sm:px-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#082f3a] text-white">
                      <Users size={16} />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold text-[#082f3a]">
                        RoshaSoft
                      </p>

                      <p className="text-[8px] uppercase tracking-[0.15em] text-[#71838a]">
                        CRM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#082f3a]" />

                    <span className="text-[8px] font-semibold uppercase tracking-[0.12em] text-[#71838a]">
                      Connected
                    </span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 p-4 sm:gap-3 sm:p-5">
                  {metrics.map((metric, index) => {
                    const Icon = metric.icon;

                    return (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + index * 0.08,
                        }}
                        className="rounded-2xl bg-[#f8faf9] p-3 sm:p-4"
                      >
                        <Icon
                          size={15}
                          className="text-[#082f3a]/60"
                        />

                        <p className="mt-4 text-lg font-semibold tracking-tight text-[#082f3a] sm:text-xl">
                          {metric.value}
                        </p>

                        <p className="mt-1 truncate text-[8px] font-medium text-[#71838a] sm:text-[9px]">
                          {metric.label}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Customer section */}
                <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                  <div className="rounded-2xl border border-[#082f3a]/6 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[8px] uppercase tracking-[0.18em] text-[#71838a]">
                          Customer relationships
                        </p>

                        <p className="mt-1 text-base font-semibold tracking-tight text-[#082f3a]">
                          Active conversations
                        </p>
                      </div>

                      <MessageSquare
                        size={17}
                        className="text-[#082f3a]/40"
                      />
                    </div>

                    {/* Customers */}
                    <div className="mt-5 space-y-3">
                      {[
                        {
                          name: "Customer",
                          status: "Active",
                          width: "88%",
                        },
                        {
                          name: "Lead",
                          status: "In progress",
                          width: "64%",
                        },
                        {
                          name: "Opportunity",
                          status: "New",
                          width: "78%",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.75 + index * 0.1,
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#082f3a]/5">
                                <Users
                                  size={12}
                                  className="text-[#082f3a]"
                                />
                              </div>

                              <span className="text-[9px] font-semibold text-[#082f3a]">
                                {item.name}
                              </span>
                            </div>

                            <span className="text-[8px] text-[#71838a]">
                              {item.status}
                            </span>
                          </div>

                          <div className="mt-2 h-1 overflow-hidden rounded-full bg-[#082f3a]/5">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: item.width }}
                              transition={{
                                duration: 0.8,
                                delay: 1 + index * 0.1,
                              }}
                              className="h-full rounded-full bg-[#082f3a]"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom status */}
                <div className="flex items-center justify-between border-t border-[#082f3a]/[0.07] px-5 py-3 sm:px-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2
                      size={13}
                      className="text-[#082f3a]/50"
                    />

                    <span className="text-[8px] font-medium text-[#71838a]">
                      Customer data organized
                    </span>
                  </div>

                  <BarChart3
                    size={14}
                    className="text-[#082f3a]/30"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}