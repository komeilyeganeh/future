"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const t = useTranslations("Home");
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname().split("/")[2] ?? "/";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex h-17.5 max-w-310 items-center justify-between rounded-full border border-white/70 bg-white/75 px-4 shadow-[0_20px_60px_rgba(7,47,58,.08)] backdrop-blur-2xl sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-[13px] bg-linear-to-br from-[#063b4a] via-[#08738a] to-[#19a4b3]">
            <Image
              src="/images/logo.png"
              width={38}
              height={38}
              alt="logo image"
            />
          </span>

          <span className="text-[15px] font-extrabold tracking-[-.055em]">
            RoshaSoft
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/about"
            className="text-[11px] font-semibold text-[#71838a] transition hover:text-[#082f3a]"
          >
            {t("nav.about")}
          </Link>

          <a
            href="#services"
            className="text-[11px] font-semibold text-[#71838a] transition hover:text-[#082f3a]"
          >
            {t("nav.services")}
          </a>

          <a
            href="#products"
            className="text-[11px] font-semibold text-[#71838a] transition hover:text-[#082f3a]"
          >
            {t("nav.products")}
          </a>

          <a
            href="#contact"
            className="text-[11px] font-semibold text-[#71838a] transition hover:text-[#082f3a]"
          >
            {t("nav.contact")}
          </a>
        </nav>

        <div className="hidden items-center gap-1 rounded-full border border-[#082f3a]/10 bg-white/70 p-1 shadow-[0_4px_20px_rgba(8,47,58,0.06)] backdrop-blur-md md:flex">
          <Link
            href={`/${pathname}`}
            locale="en"
            className={`rounded-full px-3.5 py-2 text-[9px] font-bold tracking-[0.12em] transition-all duration-300 ${
              locale === "en"
                ? "bg-[#082f3a] text-white shadow-[0_4px_12px_rgba(8,47,58,0.18)]"
                : "text-[#71838a] hover:bg-[#082f3a]/5 hover:text-[#082f3a]"
            }`}
          >
            EN
          </Link>

          <Link
            href={`/${pathname}`}
            locale="tr"
            className={`rounded-full px-3.5 py-2 text-[9px] font-bold tracking-[0.12em] transition-all duration-300 ${
              locale === "tr"
                ? "bg-[#082f3a] text-white shadow-[0_4px_12px_rgba(8,47,58,0.18)]"
                : "text-[#71838a] hover:bg-[#082f3a]/5 hover:text-[#082f3a]"
            }`}
          >
            TR
          </Link>

          <a
            href="#contact"
            className="ml-1 flex items-center gap-2 rounded-full bg-[#082f3a] px-5 py-3 text-[10px] font-bold text-white shadow-[0_6px_20px_rgba(8,47,58,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b414f] hover:shadow-[0_8px_24px_rgba(8,47,58,0.2)]"
          >
            {t("nav.startProject")}
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#082f3a]/5 md:hidden"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 max-w-310 rounded-[28px] border border-white/70 bg-white/90 p-3 shadow-[0_25px_70px_rgba(7,47,58,.12)] backdrop-blur-2xl md:hidden"
          >
            {[
              ["#about", t("nav.about")],
              ["#services", t("nav.services")],
              ["#products", t("nav.products")],
              ["#contact", t("nav.contact")],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 text-[12px] font-semibold text-[#63747b] hover:bg-[#082f3a]/4"
              >
                {label}
              </a>
            ))}

            <div className="mt-2 flex gap-1 rounded-2xl border border-[#082f3a]/10 bg-white/70 p-1 shadow-[0_4px_20px_rgba(8,47,58,0.05)] backdrop-blur-md">
              <Link
                href="/"
                locale="en"
                className={`flex flex-1 items-center justify-center rounded-xl py-3 text-[10px] font-bold tracking-[0.12em] transition-all duration-300 ${
                  locale === "en"
                    ? "bg-[#082f3a] text-white shadow-[0_4px_12px_rgba(8,47,58,0.18)]"
                    : "text-[#71838a] hover:bg-[#082f3a]/5 hover:text-[#082f3a]"
                }`}
              >
                EN
              </Link>

              <Link
                href="/"
                locale="tr"
                className={`flex flex-1 items-center justify-center rounded-xl py-3 text-[10px] font-bold tracking-[0.12em] transition-all duration-300 ${
                  locale === "tr"
                    ? "bg-[#082f3a] text-white shadow-[0_4px_12px_rgba(8,47,58,0.18)]"
                    : "text-[#71838a] hover:bg-[#082f3a]/5 hover:text-[#082f3a]"
                }`}
              >
                TR
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
