"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const t = useTranslations("Home");
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      href: "/about",
      label: t("nav.about"),
    },
    {
      href: "/services",
      label: t("nav.services"),
    },
    {
      href: "/products",
      label: t("nav.products"),
    },
    {
      href: "#contact",
      label: t("nav.contact"),
    },
  ];

  // Close mobile menu when viewport becomes desktop.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevent body scrolling while mobile menu is open.
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100] px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="mx-auto w-full max-w-310">
        {/* =========================================================
            NAVBAR
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            z-110
            flex
            h-16
            w-full
            items-center
            rounded-[20px]
            border
            border-white/80
            bg-white/70
            px-3
            shadow-[0_18px_55px_rgba(8,47,58,0.09)]
            backdrop-blur-2xl
            supports-[backdrop-filter]:bg-white/60

            sm:h-17
            sm:rounded-full
            sm:px-4

            md:px-5
          "
        >
          {/* Glass highlight */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-6
              top-0
              h-px
              sm:inset-x-10
            "
          />

          {/* =====================================================
              LOGO
          ===================================================== */}
          <Link
            href="/"
            onClick={closeMenu}
            className="
              group
              relative
              z-20
              flex
              shrink-0
              items-center
              gap-2.5
            "
          >
            <span
              className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                overflow-hidden
                rounded-[12px]
                bg-linear-to-br
                from-[#063b4a]
                via-[#08738a]
                to-[#19a4b3]
                shadow-[0_7px_22px_rgba(8,115,138,0.18)]
                transition-all
                duration-300
                group-hover:scale-[1.03]
              "
            >
              <Image
                src="/images/logo.png"
                width={38}
                height={38}
                alt="RoshaSoft"
                priority
                className="object-contain"
              />
            </span>

            <span
              className="
                hidden
                text-[15px]
                font-extrabold
                tracking-[-0.055em]
                text-primary
                sm:block
              "
            >
              RoshaSoft
            </span>
          </Link>

          {/* =====================================================
              DESKTOP NAV
              md = 768px+
          ===================================================== */}
          <nav
            className="
              absolute
              left-1/2
              hidden
              -translate-x-1/2
              items-center
              gap-1
              md:flex
              lg:gap-2
            "
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  group
                  relative
                  rounded-full
                  px-3
                  py-2
                  text-[10px]
                  font-semibold
                  text-[#64777e]
                  transition-all
                  duration-300

                  lg:px-4
                  lg:text-[11px]

                  hover:bg-white/80
                  hover:text-primary
                "
              >
                <span className="relative z-10 whitespace-nowrap">
                  {item.label}
                </span>

                {/* Gold detail */}
                <span
                  className="
                    absolute
                    bottom-1
                    left-1/2
                    h-0.5
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-[#c9a227]
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:w-3
                    group-hover:opacity-100
                  "
                />
              </Link>
            ))}
          </nav>

          {/* =====================================================
              DESKTOP LANGUAGE
          ===================================================== */}
          <div
            className="
              relative
              z-20
              ml-auto
              hidden
              items-center
              rounded-full
              border
              border-primary/8
              bg-white/55
              p-1
              shadow-[0_4px_18px_rgba(8,47,58,0.04)]
              backdrop-blur-xl
              md:flex
            "
          >
            <Language active={locale === "en"} locale="en">
              EN
            </Language>

            <Language active={locale === "tr"} locale="tr">
              TR
            </Language>
          </div>

          {/* =====================================================
              MOBILE HAMBURGER
              < 768px
          ===================================================== */}
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="
              relative
              z-[120]
              ml-auto
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-primary/10
              bg-white/65
              text-primary
              shadow-[0_6px_20px_rgba(8,47,58,0.07)]
              backdrop-blur-xl
              transition-all
              duration-300

              hover:border-[#c9a227]/30
              hover:bg-[#c9a227]/10
              hover:text-[#9b791b]

              active:scale-95

              md:hidden
            "
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.7,
                  }}
                  transition={{ duration: 0.18 }}
                  className="flex"
                >
                  <X size={19} strokeWidth={1.8} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.7,
                  }}
                  transition={{ duration: 0.18 }}
                  className="flex"
                >
                  <Menu size={19} strokeWidth={1.8} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.div>

        {/* =========================================================
            MOBILE MENU
        ========================================================= */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeMenu}
                className="
                  fixed
                  inset-0
                  z-[90]
                  bg-primary/10
                  backdrop-blur-[3px]
                  md:hidden
                "
              />

              {/* Menu Panel */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: -14,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  z-[105]
                  mt-2
                  w-full
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-white/80
                  bg-white/78
                  p-2
                  shadow-[0_28px_80px_rgba(8,47,58,0.16)]
                  backdrop-blur-2xl
                  supports-[backdrop-filter]:bg-white/65

                  md:hidden
                "
              >
                {/* Inner glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-[#c9a227]/8
                    blur-3xl
                  "
                />

                <nav className="relative space-y-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{
                        opacity: 0,
                        x: -12,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.055,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="
                          group
                          flex
                          min-h-12
                          items-center
                          justify-between
                          rounded-[18px]
                          px-4
                          py-3
                          text-[12px]
                          font-semibold
                          text-[#64777e]
                          transition-all
                          duration-300

                          hover:bg-white
                          hover:text-primary
                          hover:shadow-[0_8px_24px_rgba(8,47,58,0.06)]
                        "
                      >
                        <span>{item.label}</span>

                        <ArrowUpRight
                          size={14}
                          strokeWidth={1.8}
                          className="
                            text-primary/20
                            transition-all
                            duration-300
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                            group-hover:text-[#c9a227]
                          "
                        />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Divider */}
                <div className="relative my-2 h-px bg-primary/6" />

                {/* Language switcher */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.25,
                  }}
                  className="
                    relative
                    flex
                    items-center
                    justify-between
                    rounded-[18px]
                    bg-white/55
                    p-2
                  "
                >
                  <span
                    className="
                      pl-2
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-secondary
                    "
                  >
                    Language
                  </span>

                  <div
                    className="
                      flex
                      items-center
                      rounded-full
                      border
                      border-primary/8
                      bg-white/70
                      p-1
                    "
                  >
                    <Language active={locale === "en"} locale="en">
                      EN
                    </Language>

                    <Language active={locale === "tr"} locale="tr">
                      TR
                    </Language>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function Language({
  active,
  locale,
  children,
}: {
  active: boolean;
  locale: "en" | "tr";
  children: React.ReactNode;
}) {
  return (
    <Link
      href="/"
      locale={locale}
      className={`
        rounded-full
        px-3
        py-1.5
        text-[8px]
        font-bold
        tracking-[0.12em]
        transition-all
        duration-300

        ${
          active
            ? "bg-primary text-white shadow-[0_3px_10px_rgba(8,47,58,0.15)]"
            : "text-secondary hover:bg-[#c9a227]/10 hover:text-[#9b791b]"
        }
      `}
    >
      {children}
    </Link>
  );
}