"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronRight,
  CloudCog,
  DatabaseZap,
  ScanLine,
  Stethoscope,
  UsersRound,
} from "lucide-react";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Products() {
  const t = useTranslations("Home");
  const locale = useLocale();

  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      key: "his",
      icon: Stethoscope,
      number: "01",
      gradient: "from-[#063b4a] via-[#07566a] to-[#0a8290]",
      stats: ["Hospital Management", "Patient Records", "Medical Workflow"],
    },
    {
      key: "crm",
      icon: UsersRound,
      number: "02",
      gradient: "from-[#073b46] via-[#086576] to-[#1495a3]",
      stats: ["Content Management", "Digital Operations", "Business Workflow"],
    },
    {
      key: "erp",
      icon: DatabaseZap,
      number: "03",
      gradient: "from-[#092f40] via-[#104d63] to-[#147b91]",
      stats: ["Business Management", "Data Integration", "Process Automation"],
    },
    {
      key: "rfid",
      icon: ScanLine,
      number: "04",
      gradient: "from-[#062d3b] via-[#0b5365] to-[#13829a]",
      stats: ["RFID Solutions", "Smart Tracking", "Automation"],
    },
    {
      key: "mms",
      icon: CloudCog,
      number: "05",
      gradient: "from-[#0b3949] via-[#075e73] to-[#1390a6]",
      stats: ["Cloud Infrastructure", "Scalable Systems", "Secure Deployment"],
    },
  ];

  const product = products[activeProduct];
  const ProductIcon = product.icon;

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-white px-5 py-28 sm:px-8 sm:py-36"
    >
      <div className="pointer-events-none absolute -right-50 top-25 h-150 w-150 rounded-full bg-[#08788c]/5.5 blur-[120px]" />

      <div className="relative mx-auto max-w-310">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[.2em] text-[#08788c]">
            {t("products.kicker")}
          </span>

          <h2 className="mt-4 max-w-195 text-[44px] font-extrabold leading-[.97] tracking-[-.07em] text-primary sm:text-[62px]">
            {t("products.title")}
          </h2>

          <p className="mt-6 max-w-155 text-[14px] leading-[1.9] text-secondary">
            {t("products.description")}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 lg:grid-cols-[.72fr_1.28fr]">
          <div className="rounded-[34px] border border-[#082f3a]/6 bg-[#f5f9fa] p-3">
            {products.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeProduct === index;

              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActiveProduct(index)}
                  className="relative mb-2 block w-full text-left last:mb-0"
                >
                  <motion.div
                    animate={{
                      backgroundColor: isActive
                        ? "#ffffff"
                        : "rgba(255,255,255,0)",
                    }}
                    className="relative overflow-hidden rounded-[25px] border border-transparent p-5 transition-all"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeProduct"
                        className="absolute inset-0 rounded-[25px] border border-[#08788c]/10 shadow-[0_15px_45px_rgba(7,47,58,.07)]"
                      />
                    )}

                    <div className="relative flex items-center gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-all ${
                          isActive
                            ? "bg-primary text-white"
                            : "bg-white text-[#66828a]"
                        }`}
                      >
                        <Icon size={19} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[8px] font-bold tracking-[.12em] text-[#a0b0b5]">
                            {item.number}
                          </span>

                          <h3
                            className={`text-[15px] font-bold tracking-tighter ${
                              isActive ? "text-primary" : "text-[#6d8187]"
                            }`}
                          >
                            {t(`products.${item.key}.title`)}
                          </h3>
                        </div>

                        <p
                          className={`mt-1 text-[10px] leading-[1.6] ${
                            isActive ? "text-[#789097]" : "text-[#a0adb1]"
                          }`}
                        >
                          {t(`products.${item.key}.shortDescription`)}
                        </p>
                      </div>

                      <ChevronRight
                        size={17}
                        className={`shrink-0 transition-all ${
                          isActive
                            ? "translate-x-0 text-[#08788c]"
                            : "-translate-x-1 text-[#b4c0c3]"
                        }`}
                      />
                    </div>
                  </motion.div>
                </button>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-[38px] border border-white bg-[#eef5f6] p-3 shadow-[0_30px_90px_rgba(7,47,58,.08)] sm:min-h-[540px] sm:p-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={product.key}
                initial={{
                  opacity: 0,
                  scale: 0.97,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.97,
                  y: -10,
                }}
                transition={{
                  duration: 0.4,
                }}
                className={`relative flex min-h-[680px] flex-col overflow-hidden rounded-[31px] bg-linear-to-br ${product.gradient} sm:min-h-[500px]`}
              >
                {/* Decorative shapes */}
                <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full border border-white/10" />

                <div className="pointer-events-none absolute -bottom-40 -left-32 h-[480px] w-[480px] rounded-full border border-white/10" />

                <div className="pointer-events-none absolute right-20 top-28 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

                {/* Header */}
                <div className="relative z-10 flex items-center justify-between gap-4 p-6 sm:p-9">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white backdrop-blur-xl sm:h-12 sm:w-12">
                      <ProductIcon size={20} />
                    </div>

                    <div className="min-w-0">
                      <span className="block truncate text-[8px] font-bold uppercase tracking-[.2em] text-white/35">
                        RoshaSoft
                      </span>

                      <span className="mt-1 block text-[10px] font-semibold text-white/80 sm:text-[11px]">
                        {product.number} / 05
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`${locale}/products/${product.key}`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/70 backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:bg-accent hover:text-primary hover:rotate-45"
                    aria-label={`View ${product.key}`}
                  >
                    <ArrowUpRight size={15} />
                  </Link>
                </div>

                {/* Main content */}
                <div className="relative z-10 flex-1 px-6 pb-8 sm:px-9">
                  <span className="text-[9px] font-bold uppercase tracking-[.2em] text-white/40">
                    {t("products.solutionLabel")}
                  </span>

                  <h3 className="mt-4 max-w-[95%] text-[38px] font-extrabold leading-[0.96] tracking-[-0.055em] text-white sm:max-w-[600px] sm:text-[58px] sm:leading-[.94] sm:tracking-[-.065em]">
                    {t(`products.${product.key}.title`)}
                  </h3>

                  <p className="mt-6 max-w-[520px] text-[12px] leading-[1.8] text-white/55 sm:text-[13px] sm:leading-[1.9]">
                    {t(`products.${product.key}.description`)}
                  </p>
                </div>

                {/* Preview */}
                <div className="relative z-10 mx-6 mb-6 rounded-[25px] border border-white/10 bg-white/8 p-4 backdrop-blur-xl sm:absolute sm:bottom-9 sm:left-9 sm:right-9 sm:mx-0 sm:mb-0">
                  <div className="flex items-center justify-between gap-4">
                    <span className="truncate text-[8px] font-bold uppercase tracking-[.16em] text-white/35">
                      {t("products.previewLabel")}
                    </span>

                    <span className="flex shrink-0 items-center gap-1.5 text-[8px] font-bold text-white/60">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#75e6d0]" />
                      {t("products.activeStatus")}
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
                    {product.stats.map((stat, index) => (
                      <div
                        key={stat}
                        className="min-w-0 rounded-2xl border border-white/[0.07] bg-white/6 p-3"
                      >
                        <span className="text-[8px] text-white/35">
                          0{index + 1}
                        </span>

                        <span className="mt-2 block break-words text-[9px] font-semibold leading-[1.4] text-white/70">
                          {stat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
