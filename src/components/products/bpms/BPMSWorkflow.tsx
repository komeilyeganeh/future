"use client";

import {
  ArrowRight,
  CheckCircle2,
  GitBranch,
  Play,
  Settings2,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const steps = [
  {
    key: "design",
    icon: Settings2,
  },
  {
    key: "configure",
    icon: GitBranch,
  },
  {
    key: "automate",
    icon: Play,
  },
  {
    key: "monitor",
    icon: Workflow,
  },
  {
    key: "improve",
    icon: CheckCircle2,
  },
];

export default function BPMSWorkflow() {
  const t = useTranslations("BPMS.workflow");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
              {t("eyebrow")}
            </span>
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-secondary">
            {t("description")}
          </p>
        </div>

        <div className="mt-16 grid gap-0 border-t border-primary/8 md:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -3 }}
                className="group relative border-b border-primary/8 py-8 transition-colors duration-300 hover:border-accent/20 md:border-b-0 md:border-r md:px-6 md:last:border-r-0"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-secondary transition-colors duration-300 group-hover:text-accent">
                    {t(`steps.${step.key}.number`)}
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-primary group-hover:shadow-[0_8px_25px_rgba(212,175,55,.18)]">
                    <Icon size={15} />
                  </div>
                </div>

                <h3 className="mt-10 text-xl font-semibold tracking-tight text-primary">
                  {t(`steps.${step.key}.title`)}
                </h3>

                <p className="mt-4 text-xs leading-6 text-secondary">
                  {t(`steps.${step.key}.description`)}
                </p>

                <div className="mt-5 h-px w-7 bg-accent/30 transition-all duration-300 group-hover:w-12 group-hover:bg-accent" />

                {index !== steps.length - 1 && (
                  <ArrowRight
                    size={14}
                    className="absolute bottom-8 right-4 hidden text-primary/15 transition-colors duration-300 group-hover:text-accent md:block"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}