"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Navbar() {
  const t = useTranslations("Home.nav");
  const locale = useLocale();

  const [open, setOpen] = useState(false);

  const nextLocale = locale === "en" ? "tr" : "en";

  const links = [
    {
      href: "/#about",
      label: t("about"),
    },
    {
      href: "/#services",
      label: t("services"),
    },
    {
      href: "/#products",
      label: t("products"),
    },
    {
      href: "/#contact",
      label: t("contact"),
    },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto flex h-[68px] max-w-[1240px] items-center justify-between rounded-full border border-black/[0.06] bg-white/75 px-4 shadow-[0_15px_60px_rgba(28,31,60,.08)] backdrop-blur-2xl sm:px-6"
        >
          {/* Logo */}

          <Link href="/" className="group flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-[13px] bg-gradient-to-br from-[#704cff] via-[#6381ff] to-[#36c9e8] shadow-[0_10px_30px_rgba(103,76,255,.25)]">
              <span className="absolute left-[10px] top-[9px] h-2 w-2 rounded-full bg-white" />

              <span className="absolute bottom-[9px] right-[9px] h-2 w-2 rounded-full bg-white/60" />

              <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.4),transparent_30%)]" />
            </span>

            <span className="text-[15px] font-extrabold tracking-[-.055em]">
              RoshaSoft
            </span>
          </Link>

          {/* Desktop */}

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-[11px] font-semibold text-[#777d89] transition-colors hover:text-[#11131a]"
              >
                {link.label}

                <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-[#684cff] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <div className="flex items-center rounded-full border border-black/[0.06] bg-white/70 p-1 backdrop-blur-xl">
              <Link
                href="/"
                locale="en"
                className={`relative z-10 flex h-8 w-9.5 items-center justify-center rounded-full text-[9px] font-bold tracking-[.08em] transition-colors duration-300 ${locale === "en" ? "bg-[#11131a] text-white shadow-[0_5px_15px_rgba(17,19,26,.14)]" : "text-[#8d939e] hover:text-[#11131a]"}`}
              >
                EN
              </Link>
              <Link
                href="/"
                locale="tr"
                className={`relative z-10 flex h-8 w-9.5 items-center justify-center rounded-full text-[9px] font-bold tracking-[.08em] transition-colors duration-300 ${locale === "tr" ? "bg-[#11131a] text-white shadow-[0_5px_15px_rgba(17,19,26,.14)]" : "text-[#8d939e] hover:text-[#11131a]"}`}
              >
                TR
              </Link>
            </div>

            <Link
              href="/#contact"
              className="group flex items-center gap-2 rounded-full bg-[#11131a] px-5 py-3 text-[10px] font-bold text-white transition hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(17,19,26,.2)]"
            >
              {t("startProject")}

              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Mobile */}

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.04] md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </motion.div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              className="mx-auto mt-2 max-w-[1240px] rounded-[28px] border border-black/[0.06] bg-white/90 p-3 shadow-[0_25px_70px_rgba(28,31,60,.12)] backdrop-blur-2xl md:hidden"
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-[12px] font-semibold text-[#666d79] hover:bg-black/[0.03]"
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-2 flex gap-2">
                <Link
                  href="/"
                  locale={nextLocale}
                  className="flex flex-1 items-center justify-center rounded-2xl border border-black/[0.06] py-3 text-[10px] font-bold"
                >
                  {nextLocale.toUpperCase()}
                </Link>

                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="flex flex-[2] items-center justify-center gap-2 rounded-2xl bg-[#11131a] py-3 text-[10px] font-bold text-white"
                >
                  {t("startProject")}
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
