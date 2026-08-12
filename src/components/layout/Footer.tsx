import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-white px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-310">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-[#063b4a] via-[#08788c] to-[#19a4b3]">
                <Image
                  src="/images/logo.png"
                  width={38}
                  height={38}
                  alt="logo image"
                />
              </span>

              <span className="text-[15px] font-extrabold tracking-[-.05em]">
                RoshaSoft
              </span>
            </Link>

            <p className="mt-5 max-w-[330px] text-[11px] leading-[1.8] text-[#85959a]">
              {t("description")}
            </p>
          </div>

          <div>
            <span className="text-[9px] font-bold uppercase tracking-[.18em] text-[#9aa9ae]">
              {t("company")}
            </span>

            <div className="mt-5 flex flex-col gap-3 text-[10px] text-[#71838a]">
              <a href="#about">{t("about")}</a>
              <a href="#services">{t("services")}</a>
              <a href="#products">{t("products")}</a>
            </div>
          </div>

          <div>
            <span className="text-[9px] font-bold uppercase tracking-[.18em] text-[#9aa9ae]">
              {t("services")}
            </span>

            <div className="mt-5 flex flex-col gap-3 text-[10px] text-[#71838a]">
              <Link href="/mobile-app">{t("mobile")}</Link>
              <Link href="/web-service">{t("web")}</Link>
              <Link href="/web-design">{t("design")}</Link>
              <Link href="/careers">{t("careers")}</Link>
              <Link href="/privacy">{t("privacy")}</Link>
            </div>
          </div>

          <div>
            <span className="text-[9px] font-bold uppercase tracking-[.18em] text-[#9aa9ae]">
              {t("products")}
            </span>

            <div className="mt-5 flex flex-col gap-3 text-[10px] text-[#71838a]">
              <Link href="/products/rfid">{t("rfid")}</Link>
              <Link href="/products/erp">{t("erp")}</Link>
              <Link href="/products/mms">{t("mms")}</Link>
              <Link href="/products/crm">{t("crm")}</Link>
              <Link href="/products/his">{t("his")}</Link>
              <Link href="/products/bpms">{t("bpms")}</Link>
              <Link href="/products/modular-design">{t("modularDesign")}</Link>
            </div>
          </div>

          <div>
            <span className="text-[9px] font-bold uppercase tracking-[.18em] text-[#9aa9ae]">
              {t("connect")}
            </span>

            <div className="mt-5 flex flex-col gap-3 text-[10px] text-[#71838a]">
              <a href="mailto:hello@roshasoft.com">Email</a>

              <a href="#" target="_blank" rel="noreferrer">
                LinkedIn
              </a>

              <a href="#contact">{t("contact")}</a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[#082f3a]/6 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[9px] text-[#a1adb1]">
            © {new Date().getFullYear()} RoshaSoft. {t("rights")}
          </span>

          <span className="text-[9px] text-[#b0babd]">
            Technology · Design · Innovation
          </span>
        </div>
      </div>
    </footer>
  );
}
