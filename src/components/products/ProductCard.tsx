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
          ? "border-[#082f3a] bg-[#082f3a] text-white"
          : "border-[#082f3a]/8 bg-white text-[#082f3a] hover:border-[#082f3a]/20 hover:shadow-[0_25px_80px_rgba(8,47,58,0.08)]"
      }`}
    >
      {/* Decoration */}
      <div
        className={`absolute -right-20 -top-20 h-48 w-48 rounded-full transition-transform duration-700 group-hover:scale-125 ${
          featured ? "bg-white/[0.035]" : "bg-[#082f3a]/2.5"
        }`}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between">
          <span
            className={`text-[10px] font-semibold tracking-[0.25em] ${
              featured ? "text-white/35" : "text-[#71838a]"
            }`}
          >
            {number}
          </span>

          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 group-hover:rotate-6 ${
              featured
                ? "bg-white text-[#082f3a]"
                : "bg-[#082f3a]/5 text-[#082f3a]"
            }`}
          >
            {icon}
          </div>
        </div>

        {/* Product code */}
        <div className="mt-12">
          <span
            className={`text-[10px] font-bold uppercase tracking-[0.3em] ${
              featured ? "text-white/35" : "text-[#71838a]"
            }`}
          >
            {shortName}
          </span>

          <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            {name}
          </h3>

          <p
            className={`mt-5 max-w-md text-sm leading-7 ${
              featured ? "text-white/55" : "text-[#71838a]"
            }`}
          >
            {description}
          </p>
        </div>

        {/* Features */}
        <div className="mt-9 space-y-3">
          {features.map((feature) => (
            <div
              key={feature}
              className={`flex items-center gap-3 border-b pb-3 last:border-0 ${
                featured
                  ? "border-white/8"
                  : "border-[#082f3a]/6"
              }`}
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  featured
                    ? "bg-white/10 text-white"
                    : "bg-[#082f3a]/5 text-[#082f3a]"
                }`}
              >
                <Check size={11} strokeWidth={2.5} />
              </span>

              <span
                className={`text-[11px] font-medium ${
                  featured ? "text-white/70" : "text-[#082f3a]/70"
                }`}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          className={`mt-10 flex items-center justify-between border-t pt-6 ${
            featured ? "border-white/10" : "border-[#082f3a]/[0.07]"
          }`}
        >
          <span
            className={`text-[9px] font-semibold uppercase tracking-[0.2em] ${
              featured ? "text-white/35" : "text-[#71838a]"
            }`}
          >
            Explore product
          </span>

          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:rotate-45 ${
              featured
                ? "bg-white text-[#082f3a]"
                : "bg-[#082f3a] text-white"
            }`}
          >
            <ArrowUpRight size={15} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}