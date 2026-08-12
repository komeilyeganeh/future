"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  services: string[];
  icon: ReactNode;
  featured?: boolean;
  exploreLabel: string;
};

export default function ServiceCard({
  number,
  title,
  description,
  services,
  icon,
  featured = false,
  exploreLabel,
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -8 }}
      className={`group relative overflow-hidden rounded-[32px] border p-7 transition-all duration-500 md:p-9 ${
        featured
          ? "border-[#082f3a] bg-[#082f3a] text-white"
          : "border-[#082f3a]/[0.08] bg-white text-[#082f3a] hover:border-[#082f3a]/20 hover:shadow-[0_25px_80px_rgba(8,47,58,0.08)]"
      }`}
    >
      {/* Decorative circle */}
      <div
        className={`absolute -right-16 -top-16 h-40 w-40 rounded-full transition-transform duration-700 group-hover:scale-125 ${
          featured ? "bg-white/[0.04]" : "bg-[#082f3a]/[0.025]"
        }`}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between">
          <span
            className={`text-[11px] font-semibold tracking-[0.2em] ${
              featured ? "text-white/40" : "text-[#71838a]"
            }`}
          >
            {number}
          </span>

          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 group-hover:rotate-6 ${
              featured
                ? "bg-white text-[#082f3a]"
                : "bg-[#082f3a]/[0.05] text-[#082f3a]"
            }`}
          >
            {icon}
          </div>
        </div>

        {/* Content */}
        <div className="mt-12">
          <h3 className="max-w-sm text-2xl font-semibold tracking-tight md:text-3xl">
            {title}
          </h3>

          <p
            className={`mt-5 max-w-md text-sm leading-7 ${
              featured ? "text-white/60" : "text-[#71838a]"
            }`}
          >
            {description}
          </p>
        </div>

        {/* Services */}
        <div className="mt-9 space-y-3">
          {services.map((service) => (
            <div
              key={service}
              className={`flex items-center gap-3 border-b pb-3 last:border-0 ${
                featured
                  ? "border-white/[0.08]"
                  : "border-[#082f3a]/[0.06]"
              }`}
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  featured
                    ? "bg-white/10 text-white"
                    : "bg-[#082f3a]/[0.05] text-[#082f3a]"
                }`}
              >
                <Check size={11} strokeWidth={2.5} />
              </span>

              <span
                className={`text-[11px] font-medium ${
                  featured ? "text-white/75" : "text-[#082f3a]/70"
                }`}
              >
                {service}
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
            className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
              featured ? "text-white/40" : "text-[#71838a]"
            }`}
          >
            {exploreLabel}
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