"use client";

import { motion } from "framer-motion";
import { Database, Radio, ScanLine } from "lucide-react";
import { useTranslations } from "next-intl";

export default function RFIDHowItWorks() {
  const t = useTranslations("RFID.howItWorks");

  const steps = [
    {
      number: "01",
      icon: ScanLine,
      title: t("steps.tag.title"),
      description: t("steps.tag.description"),
    },
    {
      number: "02",
      icon: Radio,
      title: t("steps.reader.title"),
      description: t("steps.reader.description"),
    },
    {
      number: "03",
      icon: Database,
      title: t("steps.system.title"),
      description: t("steps.system.description"),
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-background-soft py-24 md:py-32"
    >
      <div className="absolute -left-45 top-1/2 h-112.5 w-[450px] -translate-y-1/2 rounded-full bg-primary/2.5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-secondary">
            {t("eyebrow")}
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-primary md:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-secondary">
            {t("description")}
          </p>
        </div>

        <div className="mt-16 grid gap-0 border-t border-[#082f3a]/8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="group relative border-b border-[#082f3a]/8 py-9 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-secondary">
                    {step.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={16} />
                  </div>
                </div>

                <h3 className="mt-10 text-xl font-semibold tracking-tight text-primary">
                  {step.title}
                </h3>

                <p className="mt-4 text-xs leading-6 text-secondary">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}