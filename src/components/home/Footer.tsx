import {
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("Home.footer");

  return (
    <footer className="border-t border-black/[0.06] bg-[#f8f9fc]">
      <div className="mx-auto w-[calc(100%-30px)] max-w-[1240px] py-14 md:w-[calc(100%-48px)]">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}

          <div>
            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#704cff] via-[#6381ff] to-[#36c8e8]">
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>

              <span className="text-[15px] font-extrabold tracking-[-.05em]">
                RoshaSoft
              </span>
            </Link>

            <p className="mt-5 max-w-[330px] text-[11px] leading-[1.8] text-[#858b97]">
              {t("description")}
            </p>
          </div>

          <FooterColumn title={t("company")}>
            <a href="#about">{t("about")}</a>
            <a href="#services">{t("services")}</a>
            <a href="#products">{t("products")}</a>
          </FooterColumn>

          <FooterColumn title={t("services")}>
            <a href="#services">{t("mobile")}</a>
            <a href="#services">{t("web")}</a>
            <a href="#services">{t("design")}</a>
          </FooterColumn>

          <FooterColumn title={t("connect")}>
            <a href="mailto:hello@roshasoft.com">
              <Mail size={13} />
              Email
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="#contact">
              {t("contact")}
              <ArrowUpRight size={13} />
            </a>
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-black/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[9px] text-[#a1a6b0]">
            © {new Date().getFullYear()} RoshaSoft.{" "}
            {t("rights")}
          </span>

          <span className="text-[9px] text-[#b0b5be]">
            Technology · Design · Innovation
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-[9px] font-bold uppercase tracking-[.15em] text-[#555b67]">
        {title}
      </h3>

      <div className="mt-5 flex flex-col items-start gap-3 text-[10px] text-[#858b97]">
        {children}
      </div>
    </div>
  );
}
