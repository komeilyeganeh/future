"use client";

import { motion } from "framer-motion";
import {
  Building2,
  CircleDollarSign,
  Factory,
  Users,
  Truck,
  BarChart3,
} from "lucide-react";
import { useTranslations } from "next-intl";

const icons = [
  Building2,
  CircleDollarSign,
  Factory,
  Users,
  Truck,
  BarChart3,
];

export default function ERPOverview() {
  const t = useTranslations("ERP.overview");

  const areas = [
    "finance",
    "accounting",
    "production",
    "humanResources",
    "supplyChain",
    "analytics",
  ];

  return (
    <section id="overview" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#71838a]">
              {t("eyebrow")}
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#082f3a] md:text-5xl">
              {t("title")}
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-sm leading-8 text-[#71838a] md:text-base">
              {t("description")}
            </p>

            <div className="mt-10 grid gap-px overflow-hidden rounded-[28px] border border-[#082f3a]/[0.07] bg-[#082f3a]/[0.07] sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area, index) => {
                const Icon = icons[index];

                return (
                  <motion.div
                    key={area}
                    whileHover={{ y: -3 }}
                    className="bg-white p-6 transition-all"
                  >
                    <Icon size={19} className="text-[#082f3a]" />

                    <p className="mt-5 text-sm font-semibold text-[#082f3a]">
                      {t(`areas.${area}`)}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}