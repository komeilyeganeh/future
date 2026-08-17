"use client";

import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  GitBranch,
  Play,
  Settings2,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";

export default function BPMSHero() {
  const t = useTranslations("BPMS.hero");

  return (
    <section className="relative overflow-hidden bg-background-soft">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-45 -top-40 h-125 w-125 rounded-full bg-primary/2.5 blur-3xl" />

        <div className="absolute -right-45 -bottom-45 h-125 w-125 rounded-full bg-primary/2.5 blur-3xl" />

        {/* Gold accent glow */}
        <div className="absolute right-[18%] top-[18%] h-56 w-56 rounded-full bg-accent/[0.035] blur-3xl" />

        {/* Workflow lines */}
        <div className="absolute left-[8%] top-[32%] hidden h-px w-[30%] bg-primary/4 lg:block" />
        <div className="absolute right-[8%] top-[58%] hidden h-px w-[25%] bg-accent/10 lg:block" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-40">
        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 flex items-center gap-3"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-accent">
                <Workflow size={14} />
              </div>

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
                {t("eyebrow")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-2xl text-5xl font-semibold leading-[0.97] tracking-tighter text-primary sm:text-6xl lg:text-7xl"
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

          {/* Workflow Visual */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative mx-auto w-full max-w-162.5"
          >
            <div className="relative rounded-[34px] border border-primary/8 bg-white p-5 shadow-[0_35px_100px_rgba(8,47,58,0.08)] md:p-7">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-primary/7 pb-5">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-secondary">
                    {t("workflowLabel")}
                  </p>

                  <p className="mt-1 text-sm font-semibold text-primary">
                    {t("workflowTitle")}
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-accent/8 px-3 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                  <span className="text-[9px] font-medium text-primary/60">
                    {t("active")}
                  </span>
                </div>
              </div>

              {/* Workflow */}
              <div className="relative py-8">
                <div className="absolute left-[12%] right-[12%] top-15.25 h-px bg-primary/8" />

                <div className="relative grid grid-cols-4 gap-3">
                  <WorkflowNode
                    number="01"
                    icon={Settings2}
                    title={t("steps.request")}
                    active
                  />

                  <WorkflowNode
                    number="02"
                    icon={GitBranch}
                    title={t("steps.review")}
                    active
                  />

                  <WorkflowNode
                    number="03"
                    icon={Workflow}
                    title={t("steps.process")}
                    active
                  />

                  <WorkflowNode
                    number="04"
                    icon={CheckCircle2}
                    title={t("steps.complete")}
                  />
                </div>
              </div>

              {/* Process card */}
              <div className="grid gap-3 md:grid-cols-[1fr_auto]">
                <div className="rounded-[22px] bg-background-soft p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-accent">
                      <Workflow size={17} />
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-secondary">
                        {t("automation")}
                      </p>

                      <p className="mt-1 text-sm font-semibold text-primary">
                        {t("automationTitle")}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-primary/6">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "82%" }}
                      transition={{
                        duration: 1.2,
                        delay: 0.7,
                      }}
                      className="h-full rounded-full bg-accent"
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[9px] text-secondary">
                      {t("progress")}
                    </span>

                    <span className="text-[9px] font-semibold text-accent">
                      82%
                    </span>
                  </div>
                </div>

                <div className="flex min-w-36.25 flex-col justify-between rounded-[22px] bg-primary p-5 text-white">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-primary">
                    <Play size={14} />
                  </div>

                  <div className="mt-6">
                    <p className="text-2xl font-semibold">24/7</p>

                    <p className="mt-1 text-[9px] text-white/45">
                      {t("automationStatus")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating automation label */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-5 top-[25%] hidden rounded-2xl border border-accent/15 bg-white px-4 py-3 shadow-[0_20px_50px_rgba(8,47,58,0.08)] md:block"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-accent" />

                <span className="text-[9px] font-semibold text-primary">
                  {t("smartAutomation")}
                </span>
              </div>
            </motion.div>

            {/* Floating number */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 bottom-[15%] hidden rounded-2xl bg-primary px-5 py-4 text-white shadow-[0_20px_50px_rgba(8,47,58,0.15)] md:block"
            >
              <p className="text-[9px] uppercase tracking-[0.2em] text-accent/70">
                {t("statusLabel")}
              </p>

              <p className="mt-1 text-sm font-semibold">{t("status")}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WorkflowNode({
  number,
  icon: Icon,
  title,
  active = false,
}: {
  number: string;
  icon: React.ElementType;
  title: string;
  active?: boolean;
}) {
  return (
    <div className="relative z-10 text-center">
      <div
        className={`mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 ${
          active
            ? "border-accent bg-accent text-primary shadow-[0_10px_30px_rgba(212,175,55,.18)]"
            : "border-primary/8 bg-white text-primary/30"
        }`}
      >
        <Icon size={17} />
      </div>

      <span
        className={`mt-3 block text-[8px] font-semibold tracking-[0.15em] ${
          active ? "text-accent" : "text-secondary"
        }`}
      >
        {number}
      </span>

      <p
        className={`mt-1 text-[9px] font-semibold ${
          active ? "text-primary" : "text-secondary"
        }`}
      >
        {title}
      </p>
    </div>
  );
}