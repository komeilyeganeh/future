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
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-secondary">
              {t("eyebrow")}
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-secondary">
              {t("description")}
            </p>
          </div>

          <div className="border-t border-[#082f3a]/8">
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
                  className="group grid grid-cols-[60px_1fr_auto] items-center gap-5 border-b border-[#082f3a]/8 py-6"
                >
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-secondary">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold text-primary">
                      {t(`${step.key}.title`)}
                    </h3>

                    <p className="mt-1 max-w-lg text-xs leading-6 text-secondary">
                      {t(`${step.key}.description`)}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/4 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={15} />
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