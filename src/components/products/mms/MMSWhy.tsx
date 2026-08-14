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
    <section className="bg-background-soft">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#c7a45d]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c7a45d]">
                {t("eyebrow")}
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-primary md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-secondary md:text-base">
              {t("description")}
            </p>
          </motion.div>

          {/* Reasons */}
          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.article
                  key={reason.key}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.07,
                  }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-[28px] border border-primary/7 bg-white p-7 transition-all duration-500 hover:border-primary/12 hover:shadow-[0_25px_70px_rgba(8,47,58,0.07)]"
                >
                  {/* Decorative number */}
                  <span className="absolute right-6 top-5 text-[9px] font-semibold tracking-[0.2em] text-primary/10 transition-colors duration-300 group-hover:text-primary/20">
                    0{index + 1}
                  </span>

                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>

                  {/* Content */}
                  <h3 className="mt-9 text-xl font-semibold tracking-tight text-primary">
                    {t(`items.${reason.key}.title`)}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-secondary">
                    {t(`items.${reason.key}.description`)}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-7 h-px w-8 bg-primary/15 transition-all duration-500 group-hover:w-14 group-hover:bg-primary/40" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}