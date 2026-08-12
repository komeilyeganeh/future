"use client";

import {
  Database,
  GitBranch,
  Layers3,
  Settings2,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const reasons = [
  {
    key: "custom",
    icon: Settings2,
  },
  {
    key: "scalable",
    icon: GitBranch,
  },
  {
    key: "integrated",
    icon: Layers3,
  },
  {
    key: "data",
    icon: Database,
  },
];

export default function MMSWhy() {
  const t = useTranslations("MMS.why");

  return (
    <section className="bg-[#f8faf9]">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#71838a]">
              {t("eyebrow")}
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#082f3a] md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#71838a]">
              {t("description")}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.article
                  key={reason.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="rounded-[28px] border border-[#082f3a]/[0.07] bg-white p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#082f3a] text-white">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-9 text-xl font-semibold tracking-tight text-[#082f3a]">
                    {t(`items.${reason.key}.title`)}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-[#71838a]">
                    {t(`items.${reason.key}.description`)}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}