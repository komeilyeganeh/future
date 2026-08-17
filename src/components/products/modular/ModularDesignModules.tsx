"use client";

import { ArrowUpRight, Boxes, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";

const modules = [
  "financial",
  "ticketReservation",
  "projectManagement",
  "resultRanking",
  "customersClub",
  "mailroom",
  "property",
  "paraclinical",
  "automation",
  "welfare",
  "productionFormulation",
  "distribution",
  "logistics",
  "payroll",
  "cashier",
  "production",
  "treasury",
  "pool",
  "ticketing",
  "forum",
  "marketing",
  "jobClassification",
  "acceptor",
  "regionalSales",
  "dataManagement",
  "internalTrade",
  "fuelManagement",
  "personalInformation",
  "hotelManagement",
  "priceCalculator",
  "gymManagement",
  "productTracking",
  "warehouse",
  "transactionManagement",
  "capillaryDistribution",
  "internationalTrading",
];

export default function ModularDesignModules() {
  const t = useTranslations("MODULAR.modules");
  const [search, setSearch] = useState("");

  const filteredModules = useMemo(() => {
    return modules.filter((key) =>
      t(`items.${key}.title`)
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [search, t]);

  return (
    <section id="modules" className="bg-background-soft">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        {/* Heading */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
                {t("eyebrow")}
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-primary md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-secondary">
              {t("description")}
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full md:max-w-xs">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("search")}
              className="h-12 w-full rounded-full border border-primary/8 bg-white pl-11 pr-5 text-xs text-primary outline-none transition focus:border-accent/40 focus:ring-2 focus:ring-accent/10"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredModules.map((key, index) => (
            <motion.article
              key={key}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: Math.min(index * 0.025, 0.3),
              }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-3xl border border-primary/7 bg-white p-5 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_20px_50px_rgba(8,47,58,0.07)]"
            >
              {/* Subtle gold glow */}
              <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-accent/[0.035] blur-2xl transition-transform duration-500 group-hover:scale-150" />

              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary transition-all duration-300 group-hover:bg-accent group-hover:text-primary">
                    <Boxes size={17} strokeWidth={1.7} />
                  </div>

                  <ArrowUpRight
                    size={14}
                    className="text-primary/20 transition-all duration-300 group-hover:rotate-45 group-hover:text-accent"
                  />
                </div>

                <h3 className="mt-7 text-sm font-semibold tracking-tight text-primary">
                  {t(`items.${key}.title`)}
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-secondary">
                  {t(`items.${key}.description`)}
                </p>

                <div className="mt-4 h-px w-6 bg-accent/25 transition-all duration-300 group-hover:w-10 group-hover:bg-accent" />
              </div>
            </motion.article>
          ))}
        </div>

        {filteredModules.length === 0 && (
          <div className="mt-12 rounded-[28px] border border-dashed border-primary/10 bg-white p-12 text-center">
            <p className="text-sm text-secondary">{t("empty")}</p>
          </div>
        )}
      </div>
    </section>
  );
}