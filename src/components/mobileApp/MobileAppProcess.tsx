"use client";

import {
  ClipboardList,
  Code2,
  Palette,
  Rocket,
  TestTube2,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function MobileAppProcess() {
  const t = useTranslations("MobileApp.process");

  const steps = [
    {
      key: "planning",
      icon: ClipboardList,
    },
    {
      key: "design",
      icon: Palette,
    },
    {
      key: "development",
      icon: Code2,
    },
    {
      key: "testing",
      icon: TestTube2,
    },
    {
      key: "deployment",
      icon: Rocket,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Subtle gold glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-100 w-100 rounded-full bg-[#c9a45c]/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute right-[-180px] bottom-[-180px] h-100 w-100 rounded-full bg-primary/[0.025] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
          {/* Heading */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#c9a45c]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c7a45d]">
                {t("eyebrow")}
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-secondary">
              {t("description")}
            </p>

            {/* Small decorative line */}
            <div className="mt-8 flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#c9a45c]" />
              <span className="h-px w-12 bg-[#c9a45c]/30" />
              <span className="h-1 w-1 rounded-full bg-[#c9a45c]/40" />
            </div>
          </div>

          {/* Process */}
          <div className="border-t border-primary/8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group relative grid grid-cols-[60px_1fr_auto] items-center gap-5 border-b border-primary/8 py-6 transition-all duration-300"
                >
                  {/* Gold progress indicator */}
                  <div className="absolute left-0 top-0 h-px w-0 bg-[#c9a45c] transition-all duration-500 group-hover:w-full" />

                  {/* Number */}
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-secondary transition-colors duration-300 group-hover:text-[#b28d48]">
                    0{index + 1}
                  </span>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-primary transition-colors duration-300 group-hover:text-[#a98443]">
                      {t(`${step.key}.title`)}
                    </h3>

                    <p className="mt-1 max-w-lg text-xs leading-6 text-secondary">
                      {t(`${step.key}.description`)}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-primary/7 bg-primary/[0.035] text-primary transition-all duration-300 group-hover:border-[#c9a45c]/30 group-hover:bg-[#c9a45c]/10 group-hover:text-[#a98443] group-hover:shadow-[0_8px_25px_rgba(201,164,92,0.12)]">
                    <Icon size={15} strokeWidth={1.8} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}