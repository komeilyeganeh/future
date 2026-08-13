"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

type TeamMember = {
  name: string;
  role: string;
  group: "executives" | "managers" | "members";
  image?: string;
};

const team: TeamMember[] = [
  {
    name: "Hamed Taghizadeh",
    role: "hamed",
    group: "executives",
    image: "/images/team/hamed.png",
  },
  {
    name: "Zahra Norouzi",
    role: "zahra",
    group: "executives",
    image: "/images/team/zahra.jpg",
  },
  {
    name: "Milad Taghizadeh",
    role: "milad",
    group: "managers",
    image: "/images/team/milad.jpg",
  },
  {
    name: "Komeil Yeganeh",
    role: "komeil",
    group: "members",
    image: "/images/team/komeil.jpg",
  },
  {
    name: "Sina Rostamabadi",
    role: "sina",
    group: "members",
    image: "/images/team/sina.jpeg",
  },
];

export default function TeamSection() {
  const t = useTranslations("About.team");
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#f5f9fa] px-5 py-28 sm:px-8 sm:py-36"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -left-40 top-20 h-105 w-105 rounded-full bg-[#08788c]/6 blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-125 w-125 rounded-full bg-[#164e63]/5 blur-[120px]" />
      <div className="relative mx-auto max-w-310">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-180"
        >
          <span className="text-[10px] font-bold uppercase tracking-[.2em] text-[#08788c]">
            Our Team
          </span>
          <h2 className="mt-4 text-[44px] font-extrabold leading-[.96] tracking-[-.07em] text-primary sm:text-[62px]">
            The people behind <br />
            <span className="text-[#08788c]">RoshaSoft.</span>
          </h2>
          <p className="mt-6 max-w-152.5 text-[14px] leading-[1.9] text-secondary">
            A multidisciplinary team of technology leaders, developers, and
            creative professionals working together to build intelligent digital
            solutions.
          </p>
        </motion.div>
        {/* Team Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.65,
                delay: index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-4xl border border-white/80 bg-white/65 p-3 shadow-[0_25px_70px_rgba(7,47,58,.07)] backdrop-blur-2xl transition-all duration-500 group-hover:shadow-[0_35px_90px_rgba(7,47,58,.15)]">
                {/* ================================================= IMAGE / PROFILE ================================================= */}
                <div className="relative h-107.5 overflow-hidden rounded-[25px] bg-[#e8f0f2]">
                  {/* Image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  {/* Main dark gradient */}
                  <div className=" absolute inset-0 bg-linear-to-b from-[#082f3a]/10 via-transparent to-[#082f3a]/95 opacity-90 transition-all duration-500 group-hover:from-[#082f3a]/20 group-hover:to-[#082f3a] " />
                  {/* Bottom atmospheric glow */}
                  <div className="absolute inset-x-0 bottom-0 h-[65%] bg-linear-to-t from-[#082f3a]/80 via-[#082f3a]/20 to-transparent" />
                  {/* Soft glass highlight */}
                  <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-white/15 to-transparent" />
                  {/* Subtle image grain / glass */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(112,217,228,.15),transparent_25%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  {/* ================================================= TOP META ================================================= */}
                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                    {/* Number */}
                    <span className="flex h-8 min-w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 px-2.5 text-[8px] font-bold tracking-[.16em] text-white/80 backdrop-blur-xl">
                      0{index + 1}
                    </span>
                    {/* Group */}
                    <div className="rounded-full border border-white/20 bg-black/10 px-3 py-2 backdrop-blur-xl">
                      <span className="text-[7px] font-bold uppercase tracking-[.15em] text-white/80">
                        {member.group === "executives"
                          ? "Executive Team"
                          : member.group === "managers"
                            ? "Management"
                            : "Team Member"}
                      </span>
                    </div>
                  </div>
                  {/* ================================================= PROFILE CONTENT ================================================= */}
                  <div className="absolute inset-x-5 bottom-5 z-10">
                    <div className="flex items-end justify-between gap-4">
                      {/* Name / Role */}
                      <div className="min-w-0">
                        <span className="mb-2 inline-flex items-center gap-2 text-[7px] font-bold uppercase tracking-[.18em] text-[#70d9e5]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#70d9e5] shadow-[0_0_12px_rgba(112,217,229,.8)]" />
                          RoshaSoft
                        </span>
                        <h3 className="text-[23px] font-extrabold leading-none tracking-tighter text-white">
                          {member.name}
                        </h3>
                        <p className="mt-2 text-[9px] font-bold uppercase tracking-[.13em] text-white/60">
                          {member.role === "hamed"
                            ? "Chief Executive Officer"
                            : member.role === "zahra"
                              ? "Executive Director"
                              : member.role === "alireza"
                                ? "Chief Technology Officer"
                                : member.role === "milad"
                                  ? "Project Manager"
                                  : member.role === "komeil"
                                    ? "Software Developer"
                                    : member.role === "sina"
                                      ? "Software Developer"
                                      : "Team Member"}
                        </p>
                      </div>
                      {/* Arrow */}
                      <motion.div
                        whileHover={{ rotate: 45 }}
                        className=" flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_10px_30px_rgba(0,0,0,.15)] backdrop-blur-xl transition-all duration-300 group-hover:border-[#70d9e5]/40 group-hover:bg-[#70d9e5] group-hover:text-primary "
                      >
                        <ArrowUpRight size={15} />
                      </motion.div>
                    </div>
                    {/* ================================================= SOCIAL / BOTTOM GLASS BAR ================================================= */}
                    <div className=" mt-5 flex items-center justify-between rounded-[18px] border border-white/15 bg-white/8 px-3 py-2.5 backdrop-blur-xl transition-all duration-500 group-hover:bg-white/12 ">
                      <span className="text-[7px] font-bold uppercase tracking-[.16em] text-white/40">
                        Connect
                      </span>
                      <div className="flex items-center gap-1.5">
                        {/* LinkedIn */}
                        <Link
                          href="#"
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${member.name} LinkedIn`}
                          className=" flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/6 text-white/70 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-white hover:bg-white hover:text-primary "
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.56 20.45h3.56V9H3.56v11.45z" />
                          </svg>
                        </Link>
                        {/* GitHub */}
                        <Link
                          href="#"
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${member.name} GitHub`}
                          className=" flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/6 text-white/70 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-white hover:bg-white hover:text-primary "
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.35-3.87-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1.12-.29.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81.78 1.07.78 2.16v3.19c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                          </svg>
                        </Link>
                        {/* Status */}
                        <div className="ml-1 flex items-center gap-1.5 border-l border-white/10 pl-2">
                          <motion.span
                            animate={{
                              opacity: [0.4, 1, 0.4],
                              scale: [0.9, 1, 0.9],
                            }}
                            transition={{
                              duration: 2.2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="h-1.5 w-1.5 rounded-full bg-[#5ee0a1] shadow-[0_0_10px_rgba(94,224,161,.7)]"
                          />
                          <span className="text-[7px] font-semibold text-white/45">
                            Available
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
