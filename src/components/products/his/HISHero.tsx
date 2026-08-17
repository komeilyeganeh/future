"use client";

import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function HISHero() {
  const t = useTranslations("HIS.hero");

  return (
    <section className="relative overflow-hidden bg-background-soft">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-45 -top-45 h-130 w-130 rounded-full bg-primary/2.5 blur-3xl" />
        <div className="absolute -right-40 -bottom-45 h-125 w-125 rounded-full bg-primary/2.5 blur-3xl" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-primary/2.5" />

        {/* Gold ambient glow */}
        <div className="absolute right-[15%] top-[18%] h-64 w-64 rounded-full bg-accent/[0.035] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-40">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 flex items-center gap-3"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                <HeartPulse size={14} />
              </div>

              <span className="h-px w-7 bg-accent/70" />

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
                className="bg-primary px-6 py-4 text-[10px] font-bold shadow-[0_20px_50px_rgba(16,61,78,.16)] hover:bg-[#0d3545] hover:shadow-[0_28px_60px_rgba(8,120,140,.22)]"
              >
                {t("primaryButton")}
              </Button>

              <Button
                href="/#services"
                variant="secondary"
                icon={ArrowDown}
                className="border-[#08788c]/15 bg-white/70 px-5 py-4 text-[10px] font-bold text-[#315d6b] shadow-[0_10px_35px_rgba(20,70,85,.04)] backdrop-blur-xl hover:border-accent/40 hover:bg-white hover:text-primary"
              >
                {t("secondaryButton")}
              </Button>
            </motion.div>
          </div>

          {/* RIGHT — CLINICAL DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative mx-auto w-full max-w-155"
          >
            <div className="relative rounded-[34px] border border-primary/8 bg-white p-4 shadow-[0_35px_100px_rgba(8,47,58,0.08)] md:p-5">
              {/* Dashboard header */}
              <div className="flex items-center justify-between border-b border-primary/7 px-3 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-white">
                    <Stethoscope size={18} />
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-secondary">
                      {t("dashboardLabel")}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-primary">
                      {t("dashboardTitle")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-primary/4 px-3 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                  <span className="text-[9px] font-medium text-secondary">
                    {t("live")}
                  </span>
                </div>
              </div>

              {/* Patient overview */}
              <div className="grid gap-4 pt-5 md:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-3xl bg-background-soft p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-secondary">
                      {t("patientOverview")}
                    </span>

                    <ShieldCheck size={16} className="text-accent" />
                  </div>

                  <div className="mt-6 flex items-center gap-4">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                      <span className="absolute inset-[-5px] rounded-full border border-accent/25" />
                      <Activity size={22} />
                    </div>

                    <div>
                      <p className="text-base font-semibold text-primary">
                        {t("patientName")}
                      </p>

                      <p className="mt-1 text-[10px] text-secondary">
                        {t("patientStatus")}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 grid grid-cols-3 gap-2">
                    <div className="rounded-2xl bg-white p-3">
                      <p className="text-[8px] uppercase tracking-wider text-secondary">
                        {t("heartRate")}
                      </p>

                      <p className="mt-2 text-lg font-semibold text-primary">
                        72
                      </p>

                      <p className="text-[8px] text-secondary">BPM</p>
                    </div>

                    <div className="rounded-2xl bg-white p-3">
                      <p className="text-[8px] uppercase tracking-wider text-secondary">
                        {t("bloodPressure")}
                      </p>

                      <p className="mt-2 text-lg font-semibold text-primary">
                        118
                      </p>

                      <p className="text-[8px] text-secondary">mmHg</p>
                    </div>

                    <div className="rounded-2xl bg-white p-3">
                      <p className="text-[8px] uppercase tracking-wider text-secondary">
                        {t("status")}
                      </p>

                      <div className="mt-3 flex items-center gap-1.5">
                        <CheckCircle2 size={14} className="text-accent" />

                        <span className="text-[9px] font-semibold text-primary">
                          {t("stable")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Schedule */}
                <div className="relative overflow-hidden rounded-3xl bg-primary p-5 text-white">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-accent/20" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <CalendarDays size={17} className="text-accent" />

                      <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                        {t("today")}
                      </span>
                    </div>

                    <p className="mt-8 text-4xl font-semibold tracking-tight">
                      24
                    </p>

                    <p className="mt-1 text-[10px] text-white/45">
                      {t("appointments")}
                    </p>

                    <div className="mt-7 h-px bg-white/8" />

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-[9px] text-white/45">
                        {t("completed")}
                      </span>

                      <span className="text-sm font-semibold">18</span>
                    </div>

                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[75%] rounded-full bg-accent" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity */}
              <div className="mt-4 rounded-3xl border border-primary/7 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-secondary">
                      {t("activity")}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-primary">
                      {t("patientJourney")}
                    </p>
                  </div>

                  <TrendingIndicator />
                </div>

                {/* Timeline */}
                <div className="mt-6 grid grid-cols-4 gap-3">
                  <TimelineItem label={t("registration")} active />
                  <TimelineItem label={t("examination")} active />
                  <TimelineItem label={t("diagnosis")} active />
                  <TimelineItem label={t("followUp")} />
                </div>
              </div>
            </div>

            {/* Floating label */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-4 top-[22%] hidden rounded-2xl border border-primary/7 bg-white px-4 py-3 shadow-[0_20px_50px_rgba(8,47,58,0.08)] md:block"
            >
              <div className="flex items-center gap-2">
                <Activity size={14} className="text-accent" />

                <span className="text-[9px] font-semibold text-primary">
                  {t("connectedCare")}
                </span>
              </div>
            </motion.div>

            {/* Floating status */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 bottom-[17%] hidden rounded-2xl border border-accent/15 bg-primary px-4 py-3 text-white shadow-[0_20px_50px_rgba(8,47,58,0.15)] md:block"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-accent" />

                <span className="text-[9px] font-semibold">
                  {t("systemReady")}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span
          className={`h-2.5 w-2.5 rounded-full ${
            active ? "bg-accent" : "bg-primary/10"
          }`}
        />

        <div
          className={`h-px flex-1 ${
            active ? "bg-accent/30" : "bg-primary/6"
          }`}
        />
      </div>

      <p className="mt-2 text-[8px] font-medium text-secondary">{label}</p>
    </div>
  );
}

function TrendingIndicator() {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/8">
      <Activity size={14} className="text-accent" />
    </div>
  );
}