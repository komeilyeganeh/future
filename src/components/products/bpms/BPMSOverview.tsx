"use client";

import { ArrowUpRight, GitBranch, Layers3, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function BPMSOverview() {
  const t = useTranslations("BPMS.overview");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#71838a]">
              {t("eyebrow")}
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#082f3a] md:text-5xl">
              {t("title")}
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-sm leading-8 text-[#71838a]">
              {t("description")}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#082f3a] text-white">
                <Workflow size={16} />
              </div>

              <span className="text-sm font-semibold text-[#082f3a]">
                {t("highlight")}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <OverviewCard
            icon={Workflow}
            title={t("cards.automation.title")}
            description={t("cards.automation.description")}
          />

          <OverviewCard
            icon={GitBranch}
            title={t("cards.integration.title")}
            description={t("cards.integration.description")}
          />

          <OverviewCard
            icon={Layers3}
            title={t("cards.visibility.title")}
            description={t("cards.visibility.description")}
          />
        </div>
      </div>
    </section>
  );
}

function OverviewCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="group rounded-[28px] border border-[#082f3a]/[0.07] bg-[#f8faf9] p-7"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#082f3a]">
          <Icon size={18} strokeWidth={1.7} />
        </div>

        <ArrowUpRight
          size={15}
          className="text-[#082f3a]/20 transition-transform group-hover:rotate-45"
        />
      </div>

      <h3 className="mt-10 text-xl font-semibold tracking-tight text-[#082f3a]">
        {title}
      </h3>

      <p className="mt-3 text-xs leading-6 text-[#71838a]">
        {description}
      </p>
    </motion.article>
  );
}