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

export default function BPMSHero() {
  const t = useTranslations("BPMS.hero");

  return (
    <section className="relative overflow-hidden bg-[#f8faf9]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-45 -top-40 h-125 w-125 rounded-full bg-[#082f3a]/2.5 blur-3xl" />

        <div className="absolute -right-45 -bottom-45 h-125 w-125 rounded-full bg-[#082f3a]/2.5 blur-3xl" />

        {/* Workflow lines */}
        <div className="absolute left-[8%] top-[32%] hidden h-px w-[30%] bg-[#082f3a]/4 lg:block" />
        <div className="absolute right-[8%] top-[58%] hidden h-px w-[25%] bg-[#082f3a]/4 lg:block" />
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
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#082f3a] text-white">
                <Workflow size={14} />
              </div>

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#71838a]">
                {t("eyebrow")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-2xl text-5xl font-semibold leading-[0.97] tracking-tighter text-[#082f3a] sm:text-6xl lg:text-7xl"
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

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href="#capabilities"
                className="group flex items-center gap-3 rounded-full bg-[#082f3a] px-6 py-3.5 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {t("primaryButton")}

                <ArrowDown
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 rounded-full border border-[#082f3a]/10 bg-white px-6 py-3.5 text-[10px] font-semibold text-[#082f3a] transition-all hover:-translate-y-1 hover:border-[#082f3a]/20"
              >
                {t("secondaryButton")}
                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </div>

          {/* Workflow Visual */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative mx-auto w-full max-w-162.5"
          >
            <div className="relative rounded-[34px] border border-[#082f3a]/8 bg-white p-5 shadow-[0_35px_100px_rgba(8,47,58,0.08)] md:p-7">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#082f3a]/[0.07] pb-5">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#71838a]">
                    {t("workflowLabel")}
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#082f3a]">
                    {t("workflowTitle")}
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-[#082f3a]/4 px-3 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                  <span className="text-[9px] font-medium text-[#71838a]">
                    {t("active")}
                  </span>
                </div>
              </div>

              {/* Workflow */}
              <div className="relative py-8">
                <div className="absolute left-[12%] right-[12%] top-15.25 h-px bg-[#082f3a]/8" />

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
                <div className="rounded-[22px] bg-[#f8faf9] p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#082f3a] text-white">
                      <Workflow size={17} />
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-[#71838a]">
                        {t("automation")}
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#082f3a]">
                        {t("automationTitle")}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#082f3a]/6">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "82%" }}
                      transition={{
                        duration: 1.2,
                        delay: 0.7,
                      }}
                      className="h-full rounded-full bg-[#082f3a]"
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[9px] text-[#71838a]">
                      {t("progress")}
                    </span>

                    <span className="text-[9px] font-semibold text-[#082f3a]">
                      82%
                    </span>
                  </div>
                </div>

                <div className="flex min-w-36.25 flex-col justify-between rounded-[22px] bg-[#082f3a] p-5 text-white">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
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
              className="absolute -left-5 top-[25%] hidden rounded-2xl border border-[#082f3a]/[0.07] bg-white px-4 py-3 shadow-[0_20px_50px_rgba(8,47,58,0.08)] md:block"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#082f3a]" />

                <span className="text-[9px] font-semibold text-[#082f3a]">
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
              className="absolute -right-4 bottom-[15%] hidden rounded-2xl bg-[#082f3a] px-5 py-4 text-white shadow-[0_20px_50px_rgba(8,47,58,0.15)] md:block"
            >
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                {t("statusLabel")}
              </p>

              <p className="mt-1 text-sm font-semibold">
                {t("status")}
              </p>
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
        className={`mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border ${
          active
            ? "border-[#082f3a] bg-[#082f3a] text-white"
            : "border-[#082f3a]/8 bg-white text-[#082f3a]/30"
        }`}
      >
        <Icon size={17} />
      </div>

      <span className="mt-3 block text-[8px] font-semibold tracking-[0.15em] text-[#71838a]">
        {number}
      </span>

      <p
        className={`mt-1 text-[9px] font-semibold ${
          active ? "text-[#082f3a]" : "text-[#71838a]"
        }`}
      >
        {title}
      </p>
    </div>
  );
}