"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let frame: number;
    const start = performance.now();
    const duration = 2100;

    const animate = (time: number) => {
      const elapsed = time - start;
      const value = Math.min(elapsed / duration, 1);

      // Smooth progress
      const eased = 1 - Math.pow(1 - value, 3);

      setProgress(Math.round(eased * 100));

      if (value < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setIsExiting(true);

          setTimeout(() => {
            setHidden(true);
          }, 900);
        }, 250);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-99999 overflow-hidden bg-[#f7faf9] transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isExiting ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Soft center glow */}
      <div
        className={`absolute left-1/2 top-1/2 h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0a4654]/4.5 blur-[100px] transition-all duration-1800 ${
          isExiting ? "scale-150 opacity-0" : "scale-100 opacity-100"
        }`}
      />

      {/* Secondary glow */}
      <div className="absolute left-[15%] top-[20%] h-40 w-40 rounded-full bg-[#0a4654]/2.5 blur-[80px]" />
      <div className="absolute bottom-[15%] right-[10%] h-52 w-52 rounded-full bg-[#0a4654]/2.5 blur-[100px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #082f3a 1px, transparent 1px),
            linear-gradient(to bottom, #082f3a 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(247,250,249,0.55)_75%,rgba(247,250,249,0.95)_100%)]" />

      {/* =========================================================
          TOP / BOTTOM DETAILS
      ========================================================= */}

      <div
        className={`absolute left-7 top-7 flex items-center gap-3 transition-all duration-1000 md:left-10 md:top-10 ${
          isExiting ? "-translate-y-4 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#082f3a]" />

        <span className="text-[8px] font-semibold uppercase tracking-[0.35em] text-[#082f3a]/50">
          RoshaSoft
        </span>
      </div>

      <div
        className={`absolute bottom-7 left-7 text-[8px] font-medium uppercase tracking-[0.3em] text-[#71838a]/60 transition-all duration-1000 md:bottom-10 md:left-10 ${
          isExiting ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        Digital Solutions
      </div>

      <div
        className={`absolute bottom-7 right-7 font-mono text-[9px] font-medium tracking-[0.2em] text-[#71838a]/60 transition-all duration-1000 md:bottom-10 md:right-10 ${
          isExiting ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        {String(progress).padStart(3, "0")}%
      </div>

      {/* =========================================================
          CENTER
      ========================================================= */}

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        {/* Orbital system */}
        <div
          className={`relative flex h-42.5 w-42.5 items-center justify-center transition-all duration-1000 ${
            isExiting ? "scale-125 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          {/* Outer orbit */}
          <div className="absolute inset-0 rounded-full border border-[#082f3a]/[0.07] animate-[spin_10s_linear_infinite]" />

          {/* Middle orbit */}
          <div className="absolute inset-3.5 rounded-full border border-dashed border-[#082f3a]/10 animate-[spin_14s_linear_infinite_reverse]" />

          {/* Inner orbit */}
          <div className="absolute inset-7.25 rounded-full border border-[#082f3a]/6" />

          {/* Orbit dot */}
          <div className="absolute inset-0 animate-[spin_5s_linear_infinite]">
            <span className="absolute left-1/2 -top-0.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#082f3a] shadow-[0_0_12px_rgba(8,47,58,0.45)]" />
          </div>

          {/* Logo glow */}
          <div className="absolute h-24 w-24 rounded-full bg-[#082f3a]/[0.07] blur-2xl" />

          {/* Logo container */}
          <div
            className={`relative flex h-20.5 w-20.5 items-center justify-center rounded-[26px] border border-white/80 bg-white/75 shadow-[0_20px_60px_rgba(8,47,58,0.10)] backdrop-blur-xl transition-all duration-500 ${
              progress > 1 ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
          >
            <Image
              src="/images/logo-black.png"
              alt="RoshaSoft"
              width={58}
              height={58}
              priority
              className="h-auto w-auto object-contain"
            />
          </div>
        </div>

        {/* Brand */}
        <div
          className={`mt-9 overflow-hidden transition-all duration-1000 ${
            progress > 20
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center">
            <h1 className="text-[13px] font-semibold uppercase tracking-[0.48em] text-[#082f3a]">
              RoshaSoft
            </h1>

            <div className="mt-2 flex items-center gap-2">
              <span className="h-px w-5 bg-[#082f3a]/20" />

              <span className="text-[7px] font-medium uppercase tracking-[0.3em] text-[#71838a]">
                Technology
              </span>

              <span className="h-px w-5 bg-[#082f3a]/20" />
            </div>
          </div>
        </div>

        {/* Progress */}
        <div
          className={`mt-10 transition-all duration-700 ${
            progress > 30
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-0"
          }`}
        >
          <div className="relative h-0.5 w-45 overflow-hidden rounded-full bg-[#082f3a]/8">
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-[#082f3a] transition-[width] duration-100 ease-out"
              style={{
                width: `${progress}%`,
              }}
            />

            {/* Progress shine */}
            <div
              className="absolute top-0 h-full w-10 bg-white/60 blur-sm transition-[left] duration-100 ease-out"
              style={{
                left: `calc(${Math.max(progress - 10, 0)}% - 20px)`,
              }}
            />
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-[7px] font-medium uppercase tracking-[0.28em] text-[#71838a]">
              Initializing
            </span>

            <span className="font-mono text-[7px] text-[#71838a]">
              {String(progress).padStart(3, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================
          EXIT CURTAIN
      ========================================================= */}

      <div
        className={`pointer-events-none absolute inset-0 bg-[#082f3a] transition-all duration-900 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isExiting ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      />
    </div>
  );
}
