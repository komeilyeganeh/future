"use client";

import {
  BarChart3,
  CheckCircle2,
  HeartHandshake,
  MessageCircle,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const benefits = [
  {
    key: "satisfaction",
    icon: HeartHandshake,
  },
  {
    key: "relationships",
    icon: UserCheck,
  },
  {
    key: "sales",
    icon: TrendingUp,
  },
  {
    key: "visibility",
    icon: BarChart3,
  },
  {
    key: "efficiency",
    icon: CheckCircle2,
  },
  {
    key: "communication",
    icon: MessageCircle,
  },
];

export default function CRMBenefits() {
  const t = useTranslations("CRM.benefits");

  return (
    <section className="bg-background-soft">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="max-w-2xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-secondary">
            {t("eyebrow")}
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-secondary">
            {t("description")}
          </p>
        </div>

        <div className="mt-16 grid gap-x-8 md:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
                className="group flex gap-5 border-t border-[#082f3a]/8 py-7"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/4 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon size={18} strokeWidth={1.7} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-primary">
                    {t(`items.${benefit.key}.title`)}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-secondary">
                    {t(`items.${benefit.key}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}