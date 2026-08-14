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
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -8 }}
      className={`group relative overflow-hidden rounded-[30px] border p-7 transition-all duration-500 md:p-9 ${
        featured
          ? "border-[#c7a45d]/25 bg-[#082f3a] text-white shadow-[0_30px_90px_rgba(8,47,58,.18)]"
          : "border-[#082f3a]/8 bg-white text-primary shadow-[0_15px_50px_rgba(8,47,58,.035)] hover:border-[#c7a45d]/25 hover:shadow-[0_30px_90px_rgba(8,47,58,.10)]"
      }`}
    >
      {/* Ambient glow */}
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full blur-3xl transition-all duration-700 group-hover:scale-150 ${
          featured ? "bg-[#c7a45d]/10" : "bg-[#08788c]/6"
        }`}
      />

      {/* Golden accent */}
      <div
        className={`absolute left-0 top-0 h-px w-0 transition-all duration-700 group-hover:w-full ${
          featured ? "bg-[#d8b76a]" : "bg-[#c7a45d]"
        }`}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between">
          <span
            className={`text-[10px] font-bold tracking-[0.2em] ${
              featured ? "text-white/35" : "text-[#9aa9ae]"
            }`}
          >
            {number}
          </span>

          <div
            className={`relative flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 group-hover:rotate-6 ${
              featured
                ? "border border-[#c7a45d]/20 bg-[#c7a45d]/10 text-[#d8b76a]"
                : "border border-[#c7a45d]/10 bg-[#c7a45d]/7 text-[#a9853e]"
            }`}
          >
            {icon}

            <span
              className={`absolute inset-0 rounded-2xl opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100 ${
                featured ? "bg-[#c7a45d]/10" : "bg-[#c7a45d]/10"
              }`}
            />
          </div>
        </div>

        {/* Content */}
        <div className="mt-12">
          <h3
            className={`max-w-sm text-2xl font-bold tracking-[-.045em] md:text-3xl ${
              featured ? "text-white" : "text-primary"
            }`}
          >
            {title}
          </h3>

          <p
            className={`mt-5 max-w-md text-sm leading-7 ${
              featured ? "text-white/55" : "text-secondary"
            }`}
          >
            {description}
          </p>
        </div>

        {/* Services */}
        <div className="mt-9 space-y-3">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, x: -5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.04,
                duration: 0.4,
              }}
              className={`flex items-center gap-3 border-b pb-3 last:border-0 ${
                featured
                  ? "border-white/8"
                  : "border-[#082f3a]/6"
              }`}
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  featured
                    ? "bg-[#c7a45d]/12 text-[#d8b76a]"
                    : "bg-[#c7a45d]/8 text-[#a9853e]"
                }`}
              >
                <Check size={11} strokeWidth={2.5} />
              </span>

              <span
                className={`text-[11px] font-medium ${
                  featured ? "text-white/70" : "text-primary/70"
                }`}
              >
                {service}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <div
          className={`mt-10 flex items-center justify-between border-t pt-6 ${
            featured
              ? "border-white/10"
              : "border-primary/7"
          }`}
        >
          <span
            className={`text-[9px] font-bold uppercase tracking-[0.2em] ${
              featured ? "text-white/35" : "text-secondary"
            }`}
          >
            {exploreLabel}
          </span>

          <motion.div
            whileHover={{ scale: 1.08 }}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:rotate-45 ${
              featured
                ? "bg-[#d8b76a] text-[#082f3a] shadow-[0_10px_30px_rgba(199,164,93,.2)]"
                : "bg-primary text-white group-hover:bg-[#c7a45d] group-hover:text-[#082f3a]"
            }`}
          >
            <ArrowUpRight size={15} />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}