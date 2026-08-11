import { useTranslations } from "next-intl";

export default function Stats() {
  const t = useTranslations("Home");

  const stats = [
    ["20+", t("stats.experience")],
    ["100+", t("stats.projects")],
    ["03", t("stats.services")],
    ["24/7", t("stats.support")],
  ];

  return (
    <section className="bg-[#f5f9fa] px-5 py-10 sm:px-8">
      <div className="mx-auto grid max-w-310 grid-cols-2 rounded-[30px] border border-white bg-white shadow-[0_15px_50px_rgba(7,47,58,.05)] lg:grid-cols-4">
        {stats.map(([value, label], index) => (
          <div
            key={label}
            className={`relative px-5 py-9 text-center sm:px-10 ${
              index < 3
                ? "border-b border-[#082f3a]/5 lg:border-b-0 lg:border-r"
                : ""
            }`}
          >
            <strong className="text-[40px] font-extrabold tracking-[-.07em] text-[#082f3a] sm:text-[48px]">
              {value}
            </strong>

            <span className="mt-2 block text-[9px] font-bold uppercase tracking-[.15em] text-[#9aa9ae]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}