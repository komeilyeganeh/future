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
    <section className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c7a45d]">
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
                className="group rounded-3xl border border-white/8 bg-white/3 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/25 hover:bg-white/6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-[#d4af37] transition-all duration-300 group-hover:bg-[#d4af37] group-hover:text-primary">
                  <Icon
                    size={19}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-8 text-sm font-semibold">
                  {t(`items.${key}.title`)}
                </h3>

                <p className="mt-2 text-xs leading-6 text-white/40">
                  {t(`items.${key}.description`)}
                </p>

                <div className="mt-5 h-px w-0 bg-[#d4af37]/50 transition-all duration-500 group-hover:w-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}