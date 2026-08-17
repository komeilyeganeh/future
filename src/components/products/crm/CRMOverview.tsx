"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function CRMOverview() {
  const t = useTranslations("CRM.overview");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
                {t("eyebrow")}
              </span>
            </div>

            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-primary md:text-5xl">
              {t("title")}
            </h2>
          </motion.div>

          <div>
            <p className="max-w-2xl text-sm leading-8 text-secondary md:text-base">
              {t("description")}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group mt-8 flex max-w-2xl items-start gap-4 rounded-2xl border border-accent/15 bg-accent/[0.04] p-5 transition-all duration-300 hover:border-accent/30 hover:bg-accent/[0.07]"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-primary">
                <Sparkles size={14} />
              </div>

              <div>
                <p className="text-lg font-semibold tracking-tight text-primary">
                  {t("highlight")}
                </p>

                <div className="mt-3 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-accent">
                  <span className="h-px w-6 bg-accent transition-all duration-300 group-hover:w-10" />
                  <span>CRM</span>
                  <ArrowUpRight
                    size={12}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}