"use client";

import {
  BarChart3,
  Building2,
  Factory,
  Hotel,
  ShoppingCart,
  Truck,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const categories = [
  {
    key: "finance",
    icon: BarChart3,
  },
  {
    key: "commerce",
    icon: ShoppingCart,
  },
  {
    key: "operations",
    icon: Factory,
  },
  {
    key: "logistics",
    icon: Truck,
  },
  {
    key: "enterprise",
    icon: Building2,
  },
  {
    key: "hospitality",
    icon: Hotel,
  },
];

export default function ModularDesignCategories() {
  const t = useTranslations("MODULAR.categories");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="max-w-2xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#71838a]">
            {t("eyebrow")}
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#082f3a] md:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#71838a]">
            {t("description")}
          </p>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                }}
                whileHover={{ y: -5 }}
                className="group rounded-[28px] border border-[#082f3a]/[0.07] bg-[#f8faf9] p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#082f3a] shadow-sm">
                  <Icon size={19} strokeWidth={1.7} />
                </div>

                <h3 className="mt-9 text-lg font-semibold text-[#082f3a]">
                  {t(`items.${category.key}.title`)}
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#71838a]">
                  {t(`items.${category.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}