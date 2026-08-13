"use client";

import {
  Activity,
  Boxes,
  BriefcaseBusiness,
  HeartPulse,
  Network,
  Radio,
  UsersRound,
} from "lucide-react";
import { useTranslations } from "next-intl";

import ProductCard from "./ProductCard";

export default function ProductsGrid() {
  const t = useTranslations("Products");

  const products = [
    {
      number: "01",
      key: "rfid",
      icon: <Radio size={20} strokeWidth={1.7} />,
      featured: true,
    },
    {
      number: "02",
      key: "erp",
      icon: <BriefcaseBusiness size={20} strokeWidth={1.7} />,
    },
    {
      number: "03",
      key: "mms",
      icon: <Boxes size={20} strokeWidth={1.7} />,
    },
    {
      number: "04",
      key: "crm",
      icon: <UsersRound size={20} strokeWidth={1.7} />,
    },
    {
      number: "05",
      key: "his",
      icon: <HeartPulse size={20} strokeWidth={1.7} />,
    },
    {
      number: "06",
      key: "bpms",
      icon: <Activity size={20} strokeWidth={1.7} />,
    },
    {
      number: "07",
      key: "modular",
      icon: <Network size={20} strokeWidth={1.7} />,
    },
  ];

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-background-soft py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Heading */}
        <div className="max-w-2xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-secondary">
            {t("catalog.eyebrow")}
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
            {t("catalog.title")}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-secondary">
            {t("catalog.description")}
          </p>
        </div>

        {/* Products */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard
              key={product.key}
              number={product.number}
              name={t(`items.${product.key}.name`)}
              shortName={t(`items.${product.key}.shortName`)}
              description={t(`items.${product.key}.description`)}
              features={
                t.raw(`items.${product.key}.features`) as string[]
              }
              icon={product.icon}
              featured={product.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}