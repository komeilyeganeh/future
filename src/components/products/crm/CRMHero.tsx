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
import Link from "next/link";
import Button from "@/components/ui/Button";

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
    <section className="relative overflow-hidden bg-background-soft">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-48 -top-48 h-130 w-130 rounded-full bg-primary/[0.025] blur-3xl" />
        <div className="absolute -bottom-48 -left-48 h-125 w-125 rounded-full bg-accent/[0.035] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#082f3a 1px, transparent 1px), linear-gradient(90deg, #082f3a 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* subtle gold glow */}
        <div className="absolute right-[35%] top-[25%] h-40 w-40 rounded-full bg-accent/[0.025] blur-3xl" />
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
              <span className="h-px w-8 bg-accent" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
                {t("eyebrow")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tighter text-primary sm:text-6xl lg:text-7xl"
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

            {/* Actions */}
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
                className="bg-[#103d4e] px-6 py-4 text-[10px] font-bold shadow-[0_20px_50px_rgba(16,61,78,.18)] hover:bg-[#0d3545] hover:shadow-[0_28px_60px_rgba(8,120,140,.25)]"
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

          {/* CRM Workspace */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative w-full"
          >
            <div className="relative mx-auto w-full max-w-135">
              {/* subtle gold frame */}
              <div className="pointer-events-none absolute -inset-4 rounded-[34px] border border-accent/[0.06]" />

              {/* Main CRM panel */}
              <div className="group relative overflow-hidden rounded-[28px] border border-primary/8 bg-white shadow-[0_30px_100px_rgba(8,47,58,0.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_120px_rgba(8,47,58,0.13)]">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-primary/7 px-5 py-4 sm:px-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white transition-transform duration-300 group-hover:rotate-2">
                      <Users size={16} />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold text-primary">
                        RoshaSoft
                      </p>

                      <p className="text-[8px] uppercase tracking-[0.15em] text-secondary">
                        CRM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/40" />
                      <span className="relative h-2 w-2 rounded-full bg-accent" />
                    </span>

                    <span className="text-[8px] font-semibold uppercase tracking-[0.12em] text-secondary">
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
                        className="group/stat rounded-2xl bg-background-soft p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_15px_40px_rgba(8,47,58,0.06)]"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-primary shadow-sm transition-all duration-300 group-hover/stat:bg-accent/10 group-hover/stat:text-accent">
                            <Icon size={15} />
                          </div>

                          <span className="text-[8px] font-semibold tracking-[0.15em] text-accent/70">
                            {metric.value}
                          </span>
                        </div>

                        <p className="mt-4 text-lg font-semibold tracking-tight text-primary sm:text-xl">
                          {metric.value}
                        </p>

                        <p className="mt-1 truncate text-[8px] font-medium text-secondary sm:text-[9px]">
                          {metric.label}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Customer section */}
                <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                  <div className="rounded-2xl border border-primary/6 p-4 transition-colors duration-300 hover:border-accent/15">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[8px] uppercase tracking-[0.18em] text-secondary">
                          Customer relationships
                        </p>

                        <p className="mt-1 text-base font-semibold tracking-tight text-primary">
                          Active conversations
                        </p>
                      </div>

                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent/8 text-accent">
                        <MessageSquare size={15} />
                      </div>
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
                              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/5">
                                <Users size={12} className="text-primary" />
                              </div>

                              <span className="text-[9px] font-semibold text-primary">
                                {item.name}
                              </span>
                            </div>

                            <span className="text-[8px] text-secondary">
                              {item.status}
                            </span>
                          </div>

                          <div className="mt-2 h-1 overflow-hidden rounded-full bg-primary/5">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: item.width }}
                              transition={{
                                duration: 0.8,
                                delay: 1 + index * 0.1,
                              }}
                              className="h-full rounded-full bg-accent"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom status */}
                <div className="flex items-center justify-between border-t border-primary/7 px-5 py-3 sm:px-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-accent" />

                    <span className="text-[8px] font-medium text-secondary">
                      Customer data organized
                    </span>
                  </div>

                  <BarChart3 size={14} className="text-primary/30" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}