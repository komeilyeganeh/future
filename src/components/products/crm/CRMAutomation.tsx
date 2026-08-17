"use client";

import {
  CalendarCheck2,
  Check,
  MailCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const automationItems = [
  {
    key: "leadNurturing",
    icon: Target,
  },
  {
    key: "followUp",
    icon: MailCheck,
  },
  {
    key: "appointments",
    icon: CalendarCheck2,
  },
];

export default function CRMAutomation() {
  const t = useTranslations("CRM.automation");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* Text */}
          <div>
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/[0.10] text-accent transition-all duration-300 hover:bg-accent hover:text-primary">
                <Sparkles size={14} />
              </div>

              <span className="h-px w-6 bg-accent/70" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
                {t("eyebrow")}
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-primary md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-secondary">
              {t("description")}
            </p>

            <div className="mt-9 space-y-4">
              {automationItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-4 rounded-2xl border border-primary/7 bg-background-soft p-4 transition-all duration-300 hover:border-accent/25 hover:bg-white hover:shadow-[0_12px_35px_rgba(8,47,58,0.06)]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/[0.10] text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-primary">
                      <Icon size={17} />
                    </div>

                    <span className="text-sm font-semibold text-primary">
                      {t(`items.${item.key}`)}
                    </span>

                    <Check
                      size={16}
                      className="ml-auto text-accent/40 transition-colors duration-300 group-hover:text-accent"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-4xl bg-primary p-8 shadow-[0_30px_90px_rgba(8,47,58,0.14)] md:p-10">
              {/* Gold decorative glow */}
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-accent/15" />

              <div className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-accent/[0.06] blur-3xl" />

              <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-accent/[0.05] blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-accent" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-accent">
                    CRM
                  </span>
                </div>

                <h3 className="mt-6 max-w-md text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {t("visualTitle")}
                </h3>

                <div className="mt-10 space-y-3">
                  {automationItems.map((item, index) => (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.25 + index * 0.08,
                      }}
                      className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/4 p-4 transition-all duration-300 hover:border-accent/20 hover:bg-accent/[0.06]"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[10px] font-bold text-primary transition-colors duration-300 group-hover:bg-accent">
                        0{index + 1}
                      </span>

                      <span className="text-xs font-medium text-white/70 transition-colors duration-300 group-hover:text-white">
                        {t(`items.${item.key}`)}
                      </span>

                      <span className="ml-auto relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/30" />
                        <span className="relative h-2 w-2 rounded-full bg-accent" />
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom status */}
                <div className="mt-7 flex items-center gap-3 border-t border-white/[0.07] pt-5">
                  <span className="h-px w-8 bg-accent" />

                  <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/35">
                    Automated workflow
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}