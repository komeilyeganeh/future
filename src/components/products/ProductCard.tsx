"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";

type ProductCardProps = {
  number: string;
  name: string;
  shortName: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  featured?: boolean;
};

export default function ProductCard({
  number,
  name,
  shortName,
  description,
  features,
  icon,
  featured = false,
}: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -8 }}
      className={`group relative overflow-hidden rounded-4xl border p-7 transition-all duration-500 md:p-9 ${
        featured
          ? "border-primary bg-primary text-white"
          : "border-primary/8 bg-white text-primary hover:border-[#c9a45c]/30 hover:shadow-[0_25px_80px_rgba(8,47,58,0.08)]"
      }`}
    >
      {/* =========================================================
          DECORATION
      ========================================================= */}
      <div
        className={`absolute -right-20 -top-20 h-48 w-48 rounded-full transition-all duration-700 group-hover:scale-125 ${
          featured
            ? "bg-[#c9a45c]/[0.06]"
            : "bg-[#c9a45c]/[0.035] group-hover:bg-[#c9a45c]/[0.06]"
        }`}
      />

      {/* Subtle accent glow */}
      <div
        className={`pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full blur-3xl transition-opacity duration-700 ${
          featured
            ? "bg-[#c9a45c]/10 opacity-0 group-hover:opacity-100"
            : "bg-[#08788c]/5 opacity-0 group-hover:opacity-100"
        }`}
      />

      <div className="relative z-10">
        {/* =========================================================
            HEADER
        ========================================================= */}
        <div className="flex items-start justify-between">
          <span
            className={`text-[10px] font-semibold tracking-[0.25em] ${
              featured ? "text-white/35" : "text-secondary"
            }`}
          >
            {number}
          </span>

          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 group-hover:rotate-6 ${
              featured
                ? "bg-[#c9a45c] text-primary shadow-[0_10px_30px_rgba(201,164,92,.18)]"
                : "bg-[#c9a45c]/10 text-[#a98443] group-hover:bg-[#c9a45c] group-hover:text-primary group-hover:shadow-[0_10px_30px_rgba(201,164,92,.16)]"
            }`}
          >
            {icon}
          </div>
        </div>

        {/* =========================================================
            PRODUCT INFO
        ========================================================= */}
        <div className="mt-12">
          <span
            className={`text-[10px] font-bold uppercase tracking-[0.3em] ${
              featured ? "text-[#e3c985]/70" : "text-[#a98443]"
            }`}
          >
            {shortName}
          </span>

          <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            {name}
          </h3>

          <p
            className={`mt-5 max-w-md text-sm leading-7 ${
              featured ? "text-white/55" : "text-secondary"
            }`}
          >
            {description}
          </p>
        </div>

        {/* =========================================================
            FEATURES
        ========================================================= */}
        <div className="mt-9 space-y-3">
          {features.map((feature) => (
            <div
              key={feature}
              className={`flex items-center gap-3 border-b pb-3 last:border-0 ${
                featured
                  ? "border-white/8"
                  : "border-primary/6"
              }`}
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  featured
                    ? "bg-[#c9a45c]/20 text-[#e3c985]"
                    : "bg-[#c9a45c]/10 text-[#a98443]"
                }`}
              >
                <Check size={11} strokeWidth={2.5} />
              </span>

              <span
                className={`text-[11px] font-medium ${
                  featured ? "text-white/70" : "text-primary/70"
                }`}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* =========================================================
            BOTTOM
        ========================================================= */}
        <div
          className={`mt-10 flex items-center justify-between border-t pt-6 ${
            featured ? "border-white/10" : "border-primary/7"
          }`}
        >
          <span
            className={`text-[9px] font-semibold uppercase tracking-[0.2em] ${
              featured ? "text-white/35" : "text-[#a98443]"
            }`}
          >
            Explore product
          </span>

          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:rotate-45 ${
              featured
                ? "bg-[#c9a45c] text-primary shadow-[0_8px_25px_rgba(201,164,92,.18)]"
                : "bg-primary text-white group-hover:bg-[#c9a45c] group-hover:text-primary"
            }`}
          >
            <ArrowUpRight size={15} />
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          className={`absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-700 group-hover:w-full ${
            featured
              ? "bg-linear-to-r from-[#c9a45c] via-[#e3c985] to-transparent"
              : "bg-linear-to-r from-[#08788c] via-[#c9a45c] to-transparent"
          }`}
        />
      </div>
    </motion.article>
  );
}