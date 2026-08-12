"use client";

import {
  Calculator,
  Factory,
  Package,
  UsersRound,
  Truck,
  WalletCards,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const modules = [
  { key: "finance", icon: WalletCards },
  { key: "accounting", icon: Calculator },
  { key: "humanResources", icon: UsersRound },
  { key: "production", icon: Factory },
  { key: "inventory", icon: Package },
  { key: "supplyChain", icon: Truck },
];

export default function ERPModules() {
  const t = useTranslations("ERP.modules");

  return (
    <section className="bg-[#082f3a] text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
              {t("eyebrow")}
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
              {t("description")}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {modules.map(({ key, icon: Icon }, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-300 hover:bg-white/[0.06]"
              >
                <Icon
                  size={20}
                  className="text-white/70 transition-transform group-hover:scale-110"
                />

                <h3 className="mt-8 text-sm font-semibold">
                  {t(`items.${key}.title`)}
                </h3>

                <p className="mt-2 text-xs leading-6 text-white/40">
                  {t(`items.${key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}