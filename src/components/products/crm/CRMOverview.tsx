"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function CRMOverview() {
  const t = useTranslations("CRM.overview");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#71838a]">
              {t("eyebrow")}
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#082f3a] md:text-5xl">
              {t("title")}
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-sm leading-8 text-[#71838a] md:text-base">
              {t("description")}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8 border-l-2 border-[#082f3a] pl-5"
            >
              <p className="text-lg font-semibold tracking-tight text-[#082f3a]">
                {t("highlight")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}