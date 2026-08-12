"use client";

import { useTranslations } from "next-intl";
import { Code2, Palette, Megaphone } from "lucide-react";

import ServiceCard from "./ServiceCard";

export default function Services() {
  const t = useTranslations("Services");

  const services = [
    {
      number: "01",
      title: t("items.web.title"),
      description: t("items.web.description"),
      services: t.raw("items.web.services") as string[],
      icon: <Code2 size={20} strokeWidth={1.7} />,
      featured: true,
    },
    {
      number: "02",
      title: t("items.design.title"),
      description: t("items.design.description"),
      services: t.raw("items.design.services") as string[],
      icon: <Palette size={20} strokeWidth={1.7} />,
      featured: false,
    },
    {
      number: "03",
      title: t("items.marketing.title"),
      description: t("items.marketing.description"),
      services: t.raw("items.marketing.services") as string[],
      icon: <Megaphone size={20} strokeWidth={1.7} />,
      featured: false,
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#71838a]">
            {t("eyebrow")}
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#082f3a] md:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#71838a]">
            {t("description")}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
              services={service.services}
              icon={service.icon}
              featured={service.featured}
              exploreLabel={t("explore")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}