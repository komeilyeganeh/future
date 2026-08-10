"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="page">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");

        :root {
          --bg: #f7f8fc;
          --white: #ffffff;
          --text: #10131a;
          --text-soft: #5d6472;
          --muted: #8a91a0;
          --line: rgba(16, 19, 26, 0.08);

          --purple: #7357ff;
          --purple-light: #9b87ff;
          --blue: #3b82f6;
          --cyan: #27c8e8;
          --pink: #e879f9;

          --shadow:
            0 25px 80px rgba(31, 35, 60, 0.1);

          --radius: 28px;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: "Inter", sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        body::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 999;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E");
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font: inherit;
        }

        .page {
          overflow: hidden;
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(115, 87, 255, 0.08),
              transparent 25%
            ),
            radial-gradient(
              circle at 90% 25%,
              rgba(39, 200, 232, 0.07),
              transparent 25%
            ),
            var(--bg);
        }

        .container {
          width: min(1240px, calc(100% - 48px));
          margin: 0 auto;
        }

        /* =========================
           NAVBAR
        ========================= */

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 84px;
          z-index: 100;
          display: flex;
          align-items: center;
          transition: 0.35s ease;
        }

        .navbar.scrolled {
          background: rgba(247, 248, 252, 0.78);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          border-bottom: 1px solid rgba(16, 19, 26, 0.06);
        }

        .nav-inner {
          width: min(1240px, calc(100% - 48px));
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.04em;
        }

        .logo strong {
          font-weight: 800;
        }

        .logo span {
          color: #747b88;
          font-weight: 500;
        }

        .logo-mark {
          width: 34px;
          height: 34px;
          border-radius: 11px;
          position: relative;
          background:
            linear-gradient(
              135deg,
              #7357ff,
              #4e8cff 55%,
              #27c8e8
            );
          box-shadow:
            0 10px 30px rgba(115, 87, 255, 0.28);
        }

        .logo-mark::before {
          content: "";
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: white;
          left: 12px;
          top: 12px;
        }

        .nav-links {
          display: flex;
          gap: 34px;
          color: #6e7583;
          font-size: 13px;
          font-weight: 500;
        }

        .nav-links a {
          position: relative;
          transition: 0.2s ease;
        }

        .nav-links a::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -7px;
          height: 2px;
          border-radius: 5px;
          background: var(--purple);
          transform: scaleX(0);
          transform-origin: left;
          transition: 0.25s ease;
        }

        .nav-links a:hover {
          color: var(--text);
        }

        .nav-links a:hover::after {
          transform: scaleX(1);
        }

        .nav-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 17px;
          border-radius: 999px;
          color: white;
          background: #11131a;
          font-size: 12px;
          font-weight: 600;
          box-shadow: 0 10px 25px rgba(16, 19, 26, 0.12);
          transition: 0.25s ease;
        }

        .nav-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(16, 19, 26, 0.18);
        }

        /* =========================
           HERO
        ========================= */

        .hero {
          min-height: 930px;
          padding-top: 84px;
          position: relative;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(
              rgba(16, 19, 26, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(16, 19, 26, 0.035) 1px,
              transparent 1px
            );
          background-size: 70px 70px;
          mask-image: linear-gradient(
            to bottom,
            black 0%,
            rgba(0, 0, 0, 0.8) 50%,
            transparent 90%
          );
        }

        .hero-glow {
          position: absolute;
          width: 700px;
          height: 700px;
          right: -150px;
          top: -150px;
          border-radius: 50%;
          background:
            radial-gradient(
              circle at 35% 40%,
              rgba(115, 87, 255, 0.23),
              transparent 45%
            ),
            radial-gradient(
              circle at 70% 65%,
              rgba(39, 200, 232, 0.18),
              transparent 45%
            );
          filter: blur(20px);
          animation: pulseGlow 7s ease-in-out infinite alternate;
        }

        @keyframes pulseGlow {
          from {
            transform: scale(0.95) translate(0, 0);
          }

          to {
            transform: scale(1.08) translate(-20px, 20px);
          }
        }

        .hero-inner {
          min-height: 845px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-copy {
          padding-bottom: 40px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(16, 19, 26, 0.07);
          box-shadow: 0 10px 35px rgba(16, 19, 26, 0.05);
          color: #646c79;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 5px rgba(34, 197, 94, 0.1);
        }

        .hero h1 {
          max-width: 720px;
          margin-top: 27px;
          font-size: clamp(58px, 7vw, 94px);
          line-height: 0.96;
          letter-spacing: -0.07em;
          font-weight: 800;
        }

        .hero h1 .gradient {
          background:
            linear-gradient(
              100deg,
              #7157ff 5%,
              #4c8df7 48%,
              #27c8e8 90%
            );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-description {
          max-width: 590px;
          margin-top: 32px;
          color: var(--text-soft);
          font-size: 16px;
          line-height: 1.85;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-top: 36px;
        }

        .btn {
          min-height: 53px;
          padding: 0 21px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 12px;
          font-weight: 700;
          transition: 0.3s ease;
        }

        .btn-primary {
          color: white;
          background:
            linear-gradient(
              135deg,
              #7357ff,
              #5279f5
            );
          box-shadow:
            0 15px 35px rgba(94, 88, 235, 0.24);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow:
            0 20px 45px rgba(94, 88, 235, 0.32);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(16, 19, 26, 0.08);
          color: #303540;
        }

        .btn-secondary:hover {
          background: white;
          transform: translateY(-3px);
          box-shadow: var(--shadow);
        }

        .arrow {
          font-size: 16px;
          transition: 0.25s ease;
        }

        .btn:hover .arrow {
          transform: translateX(4px);
        }

        /* =========================
           HERO VISUAL
        ========================= */

        .hero-visual {
          height: 620px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visual-orb {
          width: 470px;
          height: 470px;
          position: relative;
          border-radius: 50%;
          background:
            radial-gradient(
              circle at 32% 25%,
              rgba(255, 255, 255, 0.95),
              rgba(255, 255, 255, 0.4) 15%,
              transparent 34%
            ),
            linear-gradient(
              135deg,
              rgba(115, 87, 255, 0.85),
              rgba(78, 141, 247, 0.75) 45%,
              rgba(39, 200, 232, 0.75)
            );
          box-shadow:
            0 50px 120px rgba(82, 88, 205, 0.22),
            inset -25px -25px 60px rgba(29, 38, 90, 0.16),
            inset 20px 20px 60px rgba(255, 255, 255, 0.25);
          animation: orbFloat 6s ease-in-out infinite;
        }

        @keyframes orbFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-15px) rotate(4deg);
          }
        }

        .orb-ring {
          position: absolute;
          inset: -35px;
          border: 1px solid rgba(115, 87, 255, 0.16);
          border-radius: 50%;
          animation: ringRotate 20s linear infinite;
        }

        .orb-ring::before,
        .orb-ring::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          background: white;
          box-shadow:
            0 0 0 8px rgba(255, 255, 255, 0.25),
            0 0 25px rgba(115, 87, 255, 0.5);
        }

        .orb-ring::before {
          width: 9px;
          height: 9px;
          top: 15px;
          left: 80px;
        }

        .orb-ring::after {
          width: 7px;
          height: 7px;
          bottom: 45px;
          right: 30px;
          background: #27c8e8;
        }

        @keyframes ringRotate {
          to {
            transform: rotate(360deg);
          }
        }

        .orb-core {
          position: absolute;
          width: 200px;
          height: 200px;
          top: 135px;
          left: 135px;
          border-radius: 45px;
          transform: rotate(12deg);
          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.6),
              rgba(255, 255, 255, 0.08)
            );
          border: 1px solid rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(18px);
          box-shadow:
            0 30px 60px rgba(28, 42, 100, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .orb-core::before {
          content: "";
          position: absolute;
          inset: 35px;
          border-radius: 50%;
          background:
            conic-gradient(
              from 90deg,
              #7357ff,
              #27c8e8,
              #e879f9,
              #7357ff
            );
          filter: blur(1px);
          box-shadow:
            0 0 50px rgba(115, 87, 255, 0.35);
        }

        .floating-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.76);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 18px;
          box-shadow:
            0 25px 60px rgba(31, 35, 60, 0.12);
          padding: 16px;
          animation: cardFloat 5s ease-in-out infinite;
        }

        .floating-card small {
          display: block;
          color: #858c98;
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
        }

        .floating-card strong {
          font-size: 17px;
          letter-spacing: -0.04em;
        }

        .card-one {
          top: 80px;
          right: 10px;
        }

        .card-two {
          bottom: 75px;
          left: 0;
          animation-delay: -2s;
        }

        .card-three {
          right: 35px;
          bottom: 35px;
          animation-delay: -3.5s;
        }

        @keyframes cardFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        .mini-chart {
          width: 120px;
          height: 38px;
          margin-top: 10px;
        }

        .mini-chart svg {
          width: 100%;
          height: 100%;
        }

        /* =========================
           STATS
        ========================= */

        .stats {
          position: relative;
          z-index: 4;
          margin-top: -20px;
        }

        .stats-box {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(16, 19, 26, 0.07);
          box-shadow: 0 30px 80px rgba(31, 35, 60, 0.08);
          border-radius: 24px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 12px;
        }

        .stat {
          padding: 25px 30px;
          border-right: 1px solid var(--line);
        }

        .stat:last-child {
          border-right: 0;
        }

        .stat strong {
          display: block;
          font-size: 31px;
          letter-spacing: -0.05em;
        }

        .stat span {
          display: block;
          margin-top: 5px;
          color: #818896;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* =========================
           SECTION
        ========================= */

        .section {
          padding: 155px 0;
        }

        .section-head {
          display: flex;
          justify-content: space-between;
          gap: 50px;
          margin-bottom: 65px;
        }

        .kicker {
          color: var(--purple);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .section-title {
          max-width: 760px;
          font-size: clamp(43px, 5vw, 70px);
          line-height: 1;
          letter-spacing: -0.065em;
        }

        .section-description {
          max-width: 390px;
          align-self: flex-end;
          color: var(--text-soft);
          font-size: 14px;
          line-height: 1.8;
        }

        /* =========================
           BENTO
        ========================= */

        .bento {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 0.8fr;
          grid-template-rows: 270px 270px;
          gap: 16px;
        }

        .bento-card {
          position: relative;
          overflow: hidden;
          padding: 30px;
          border-radius: var(--radius);
          border: 1px solid rgba(16, 19, 26, 0.07);
          background: white;
          box-shadow: 0 20px 70px rgba(31, 35, 60, 0.055);
          transition: 0.4s ease;
        }

        .bento-card:hover {
          transform: translateY(-7px);
          box-shadow:
            0 30px 90px rgba(31, 35, 60, 0.12);
        }

        .bento-main {
          grid-row: span 2;
          background:
            radial-gradient(
              circle at 85% 20%,
              rgba(115, 87, 255, 0.23),
              transparent 30%
            ),
            linear-gradient(
              145deg,
              #ffffff,
              #f0edff
            );
        }

        .bento-cyan {
          background:
            radial-gradient(
              circle at 80% 10%,
              rgba(39, 200, 232, 0.22),
              transparent 35%
            ),
            white;
        }

        .bento-purple {
          background:
            radial-gradient(
              circle at 80% 80%,
              rgba(115, 87, 255, 0.2),
              transparent 38%
            ),
            white;
        }

        .bento-icon {
          width: 43px;
          height: 43px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          background:
            linear-gradient(
              135deg,
              #7357ff,
              #4e8cff
            );
          box-shadow:
            0 12px 25px rgba(115, 87, 255, 0.2);
          font-size: 17px;
        }

        .bento-card h3 {
          margin-top: 80px;
          font-size: 23px;
          letter-spacing: -0.04em;
        }

        .bento-main h3 {
          font-size: 34px;
          max-width: 360px;
        }

        .bento-card p {
          max-width: 330px;
          margin-top: 12px;
          color: #737b89;
          font-size: 12px;
          line-height: 1.7;
        }

        .bento-visual {
          position: absolute;
          width: 280px;
          height: 280px;
          right: -80px;
          bottom: -90px;
          border-radius: 50%;
          border: 1px solid rgba(115, 87, 255, 0.15);
        }

        .bento-visual::before,
        .bento-visual::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(115, 87, 255, 0.12);
        }

        .bento-visual::before {
          inset: 40px;
        }

        .bento-visual::after {
          inset: 80px;
        }

        /* =========================
           PRODUCTS
        ========================= */

        .products-section {
          background: #eef0f7;
          border-top: 1px solid rgba(16, 19, 26, 0.05);
          border-bottom: 1px solid rgba(16, 19, 26, 0.05);
        }

        .product-grid {
          display: grid;
          grid-template-columns: 0.72fr 1.28fr;
          gap: 18px;
        }

        .product-menu {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .product-item {
          border: 1px solid rgba(16, 19, 26, 0.06);
          background: rgba(255, 255, 255, 0.7);
          border-radius: 20px;
          padding: 21px;
          transition: 0.3s ease;
          cursor: pointer;
        }

        .product-item:hover,
        .product-item.active {
          background: white;
          border-color: rgba(115, 87, 255, 0.2);
          box-shadow:
            0 15px 40px rgba(31, 35, 60, 0.08);
          transform: translateX(5px);
        }

        .product-item strong {
          display: block;
          font-size: 14px;
          letter-spacing: -0.02em;
        }

        .product-item span {
          display: block;
          color: #8a91a0;
          font-size: 10px;
          margin-top: 5px;
        }

        .product-preview {
          min-height: 560px;
          position: relative;
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid rgba(16, 19, 26, 0.07);
          background:
            radial-gradient(
              circle at 70% 20%,
              rgba(115, 87, 255, 0.24),
              transparent 30%
            ),
            radial-gradient(
              circle at 25% 75%,
              rgba(39, 200, 232, 0.18),
              transparent 28%
            ),
            #151823;
          box-shadow:
            0 30px 100px rgba(31, 35, 60, 0.14);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dashboard {
          width: 78%;
          aspect-ratio: 1.5;
          background: rgba(255, 255, 255, 0.94);
          border-radius: 18px;
          box-shadow:
            0 40px 100px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          transform:
            perspective(1200px)
            rotateY(-8deg)
            rotateX(5deg)
            rotateZ(-1deg);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .dashboard-top {
          height: 38px;
          border-bottom: 1px solid #eceef2;
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 0 12px;
        }

        .browser-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #d7dbe2;
        }

        .dashboard-body {
          display: grid;
          grid-template-columns: 85px 1fr;
          height: calc(100% - 38px);
        }

        .dashboard-side {
          background: #fafbfc;
          border-right: 1px solid #eceef2;
          padding: 15px 10px;
        }

        .side-item {
          height: 7px;
          border-radius: 5px;
          background: #e7eaf0;
          margin-bottom: 11px;
        }

        .side-item.active {
          background: linear-gradient(
            90deg,
            #7357ff,
            #27c8e8
          );
        }

        .dashboard-main {
          padding: 18px;
        }

        .dashboard-heading {
          width: 130px;
          height: 9px;
          background: #dce0e7;
          border-radius: 4px;
          margin-bottom: 18px;
        }

        .dashboard-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }

        .dash-stat {
          height: 63px;
          border: 1px solid #edf0f4;
          border-radius: 8px;
          padding: 10px;
        }

        .dash-stat small {
          display: block;
          width: 40%;
          height: 5px;
          background: #dce0e7;
          border-radius: 3px;
        }

        .dash-stat strong {
          display: block;
          width: 65%;
          height: 11px;
          margin-top: 9px;
          border-radius: 3px;
          background:
            linear-gradient(
              90deg,
              #7357ff,
              #8fa6ff
            );
        }

        .dashboard-chart {
          margin-top: 10px;
          height: 135px;
          border: 1px solid #edf0f4;
          border-radius: 8px;
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(
              rgba(16, 19, 26, 0.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(16, 19, 26, 0.025) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }

        .dashboard-chart svg {
          position: absolute;
          inset: 15px;
          width: calc(100% - 30px);
          height: calc(100% - 30px);
        }

        /* =========================
           PROCESS
        ========================= */

        .process {
          border-top: 1px solid var(--line);
        }

        .process-row {
          min-height: 150px;
          display: grid;
          grid-template-columns: 100px 1fr 350px;
          align-items: center;
          gap: 45px;
          border-bottom: 1px solid var(--line);
          transition: 0.3s ease;
        }

        .process-row:hover {
          padding-left: 10px;
          background:
            linear-gradient(
              90deg,
              rgba(115, 87, 255, 0.04),
              transparent
            );
        }

        .process-number {
          color: #9aa1ae;
          font-size: 11px;
          font-weight: 700;
        }

        .process-row h3 {
          font-size: 28px;
          letter-spacing: -0.045em;
        }

        .process-row p {
          color: #777f8d;
          font-size: 12px;
          line-height: 1.75;
        }

        /* =========================
           CTA
        ========================= */

        .cta {
          padding: 150px 0;
        }

        .cta-box {
          position: relative;
          overflow: hidden;
          min-height: 500px;
          border-radius: 35px;
          padding: 75px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background:
            radial-gradient(
              circle at 75% 40%,
              rgba(39, 200, 232, 0.45),
              transparent 24%
            ),
            radial-gradient(
              circle at 60% 70%,
              rgba(115, 87, 255, 0.5),
              transparent 35%
            ),
            linear-gradient(
              135deg,
              #111528,
              #202344
            );
          color: white;
          box-shadow:
            0 40px 120px rgba(42, 46, 100, 0.2);
        }

        .cta-box::before {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          right: -120px;
          top: -100px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow:
            0 0 0 50px rgba(255, 255, 255, 0.025),
            0 0 0 100px rgba(255, 255, 255, 0.02);
        }

        .cta-box h2 {
          position: relative;
          z-index: 2;
          max-width: 750px;
          font-size: clamp(48px, 6vw, 78px);
          line-height: 0.98;
          letter-spacing: -0.065em;
        }

        .cta-box p {
          position: relative;
          z-index: 2;
          max-width: 520px;
          margin-top: 25px;
          color: rgba(255, 255, 255, 0.62);
          line-height: 1.8;
          font-size: 14px;
        }

        .cta-box .btn {
          width: fit-content;
          position: relative;
          z-index: 2;
          margin-top: 34px;
          background: white;
          color: #141722;
          box-shadow:
            0 15px 40px rgba(0, 0, 0, 0.18);
        }

        /* =========================
           FOOTER
        ========================= */

        footer {
          border-top: 1px solid var(--line);
          padding: 70px 0 30px;
          background: #f3f4f8;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          gap: 60px;
          padding-bottom: 70px;
        }

        .footer-brand {
          max-width: 320px;
        }

        .footer-brand p {
          color: #818896;
          font-size: 12px;
          line-height: 1.8;
          margin-top: 20px;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 150px);
          gap: 35px;
        }

        .footer-column h4 {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 20px;
        }

        .footer-column a {
          display: block;
          color: #777f8c;
          font-size: 11px;
          margin-bottom: 13px;
          transition: 0.2s ease;
        }

        .footer-column a:hover {
          color: var(--purple);
        }

        .footer-bottom {
          border-top: 1px solid var(--line);
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          color: #999fac;
          font-size: 10px;
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 1050px) {
          .hero-inner {
            grid-template-columns: 1fr;
            padding-top: 70px;
          }

          .hero {
            min-height: auto;
          }

          .hero-copy {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-visual {
            height: 560px;
          }

          .bento {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 300px 300px 300px;
          }

          .bento-main {
            grid-row: span 2;
          }

          .product-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 750px) {
          .container,
          .nav-inner {
            width: calc(100% - 30px);
          }

          .nav-links {
            display: none;
          }

          .hero h1 {
            font-size: 53px;
          }

          .hero-actions {
            flex-direction: column;
            width: 100%;
          }

          .hero-actions .btn {
            width: 100%;
          }

          .hero-visual {
            height: 400px;
          }

          .visual-orb {
            width: 300px;
            height: 300px;
          }

          .orb-core {
            width: 130px;
            height: 130px;
            top: 85px;
            left: 85px;
            border-radius: 32px;
          }

          .floating-card {
            transform: scale(0.82);
          }

          .card-one {
            right: -10px;
            top: 35px;
          }

          .card-two {
            left: -20px;
            bottom: 25px;
          }

          .card-three {
            right: -5px;
            bottom: 0;
          }

          .stats-box {
            grid-template-columns: 1fr 1fr;
          }

          .stat {
            border-bottom: 1px solid var(--line);
          }

          .stat:nth-child(2) {
            border-right: 0;
          }

          .section {
            padding: 100px 0;
          }

          .section-head {
            flex-direction: column;
          }

          .section-description {
            align-self: auto;
          }

          .bento {
            display: flex;
            flex-direction: column;
          }

          .bento-card {
            min-height: 300px;
          }

          .product-preview {
            min-height: 400px;
          }

          .dashboard {
            width: 92%;
            transform: none;
          }

          .process-row {
            grid-template-columns: 55px 1fr;
            gap: 20px;
            padding: 30px 0;
          }

          .process-row p {
            grid-column: 2;
          }

          .cta {
            padding: 100px 0;
          }

          .cta-box {
            padding: 45px 28px;
            min-height: 450px;
          }

          .footer-top {
            flex-direction: column;
          }

          .footer-links {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-bottom {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>

      {/* =========================
          NAVBAR
      ========================= */}

      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#" className="logo">
            <div className="logo-mark" />
            <strong>Future</strong>
            <span>Waves</span>
          </a>

          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#products">Products</a>
            <a href="#process">Approach</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="nav-button">
            Let's talk
            <span>↗</span>
          </a>
        </div>
      </header>

      {/* =========================
          HERO
      ========================= */}

      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-glow" />

        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Technology · Innovation · Security
            </div>

            <h1>
              We build
              <br />
              <span className="gradient">
                what&apos;s next.
              </span>
            </h1>

            <p className="hero-description">
              Future Waves helps ambitious organizations transform complex
              ideas into powerful digital products, enterprise platforms and
              secure technology ecosystems.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Start a project
                <span className="arrow">↗</span>
              </a>

              <a href="#services" className="btn btn-secondary">
                Explore capabilities
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orb">
              <div className="orb-ring" />
              <div className="orb-core" />
            </div>

            <div className="floating-card card-one">
              <small>Digital products</small>
              <strong>01</strong>

              <div className="mini-chart">
                <svg viewBox="0 0 120 38">
                  <defs>
                    <linearGradient
                      id="miniGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#7357ff" />
                      <stop offset="100%" stopColor="#27c8e8" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0 30 C15 28 17 20 30 23 C43 26 48 10 62 17 C78 25 82 8 96 12 C105 14 110 6 120 4"
                    fill="none"
                    stroke="url(#miniGradient)"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>

            <div className="floating-card card-two">
              <small>Enterprise</small>
              <strong>100+</strong>
            </div>

            <div className="floating-card card-three">
              <small>Security</small>
              <strong>24 / 7</strong>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          STATS
      ========================= */}

      <section className="stats">
        <div className="container">
          <div className="stats-box">
            <div className="stat">
              <strong>20+</strong>
              <span>Years of experience</span>
            </div>

            <div className="stat">
              <strong>100+</strong>
              <span>Projects delivered</span>
            </div>

            <div className="stat">
              <strong>06</strong>
              <span>Technology capabilities</span>
            </div>

            <div className="stat">
              <strong>24/7</strong>
              <span>Technology mindset</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SERVICES
      ========================= */}

      <section className="section" id="services">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">Capabilities</div>

              <h2 className="section-title">
                Technology designed
                <br />
                around your business.
              </h2>
            </div>

            <p className="section-description">
              We combine strategy, engineering, design and security to build
              technology that solves real business problems.
            </p>
          </div>

          <div className="bento">
            <div className="bento-card bento-main">
              <div className="bento-icon">✦</div>

              <h3>Digital Product Development</h3>

              <p>
                From first idea to production, we design and engineer digital
                products that people actually want to use.
              </p>

              <div className="bento-visual" />
            </div>

            <div className="bento-card bento-cyan">
              <div className="bento-icon">⌘</div>

              <h3>Enterprise Software</h3>

              <p>
                Connected platforms for complex organizations.
              </p>
            </div>

            <div className="bento-card bento-purple">
              <div className="bento-icon">◈</div>

              <h3>Cyber Security</h3>

              <p>
                Protecting critical systems, infrastructure and data.
              </p>
            </div>

            <div className="bento-card">
              <div className="bento-icon">⌁</div>

              <h3>Cloud & Infrastructure</h3>

              <p>
                Scalable infrastructure built for performance.
              </p>
            </div>

            <div className="bento-card">
              <div className="bento-icon">◎</div>

              <h3>Digital Transformation</h3>

              <p>
                Modernizing legacy processes and operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          PRODUCTS
      ========================= */}

      <section className="section products-section" id="products">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">Products</div>

              <h2 className="section-title">
                Powerful systems.
                <br />
                One ecosystem.
              </h2>
            </div>

            <p className="section-description">
              Enterprise products designed to simplify operations, connect
              information and give organizations a clearer view of their
              business.
            </p>
          </div>

          <div className="product-grid">
            <div className="product-menu">
              <div className="product-item active">
                <strong>Enterprise ERP</strong>
                <span>Enterprise Resource Planning</span>
              </div>

              <div className="product-item">
                <strong>CRM Platform</strong>
                <span>Customer Relationship Management</span>
              </div>

              <div className="product-item">
                <strong>HIS</strong>
                <span>Healthcare Information System</span>
              </div>

              <div className="product-item">
                <strong>BPMS</strong>
                <span>Business Process Management</span>
              </div>

              <div className="product-item">
                <strong>RFID Solutions</strong>
                <span>Identification & Tracking</span>
              </div>
            </div>

            <div className="product-preview">
              <div className="dashboard">
                <div className="dashboard-top">
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                </div>

                <div className="dashboard-body">
                  <aside className="dashboard-side">
                    <div className="side-item active" />
                    <div className="side-item" />
                    <div className="side-item" />
                    <div className="side-item" />
                    <div className="side-item" />
                    <div className="side-item" />
                  </aside>

                  <div className="dashboard-main">
                    <div className="dashboard-heading" />

                    <div className="dashboard-stats">
                      <div className="dash-stat">
                        <small />
                        <strong />
                      </div>

                      <div className="dash-stat">
                        <small />
                        <strong />
                      </div>

                      <div className="dash-stat">
                        <small />
                        <strong />
                      </div>
                    </div>

                    <div className="dashboard-chart">
                      <svg viewBox="0 0 500 160">
                        <defs>
                          <linearGradient
                            id="productChart"
                            x1="0"
                            y1="0"
                            x2="1"
                            y2="0"
                          >
                            <stop offset="0%" stopColor="#7357ff" />
                            <stop offset="100%" stopColor="#27c8e8" />
                          </linearGradient>
                        </defs>

                        <path
                          d="M0 130 C50 125 65 95 110 105 C155 115 170 70 215 80 C255 90 280 40 320 60 C365 83 375 35 415 48 C450 58 470 20 500 25"
                          fill="none"
                          stroke="url(#productChart)"
                          strokeWidth="4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          PROCESS
      ========================= */}

      <section className="section" id="process">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="kicker">Our approach</div>

              <h2 className="section-title">
                From complexity
                <br />
                to clarity.
              </h2>
            </div>

            <p className="section-description">
              A focused process that keeps strategy, design and engineering
              aligned from the first conversation to long-term growth.
            </p>
          </div>

          <div className="process">
            <div className="process-row">
              <div className="process-number">01 / DISCOVER</div>

              <h3>Understand the challenge.</h3>

              <p>
                We learn about your business, users, goals and constraints
                before deciding what to build.
              </p>
            </div>

            <div className="process-row">
              <div className="process-number">02 / DESIGN</div>

              <h3>Shape the experience.</h3>

              <p>
                We turn complex requirements into clear experiences and
                scalable product architecture.
              </p>
            </div>

            <div className="process-row">
              <div className="process-number">03 / BUILD</div>

              <h3>Engineer the solution.</h3>

              <p>
                Modern technology, clean architecture and security-first
                engineering come together.
              </p>
            </div>

            <div className="process-row">
              <div className="process-number">04 / SCALE</div>

              <h3>Keep moving forward.</h3>

              <p>
                Products evolve. We help you continuously improve and scale
                what we build together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================= */}

      <section className="cta" id="contact">
        <div className="container">
          <div className="cta-box">
            <h2>
              Let&apos;s build
              <br />
              something remarkable.
            </h2>

            <p>
              Have a complex challenge, a new product idea or a digital
              transformation ahead? Let&apos;s talk about what comes next.
            </p>

            <a
              href="mailto:info@futurewavesco.com"
              className="btn"
            >
              Start a conversation
              <span className="arrow">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#" className="logo">
                <div className="logo-mark" />
                <strong>Future</strong>
                <span>Waves</span>
              </a>

              <p>
                Building digital products, enterprise systems and secure
                technology for organizations moving forward.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#">About</a>
                <a href="#services">Services</a>
                <a href="#products">Products</a>
                <a href="#contact">Contact</a>
              </div>

              <div className="footer-column">
                <h4>Capabilities</h4>
                <a href="#services">Software</a>
                <a href="#services">Cyber Security</a>
                <a href="#services">Cloud</a>
                <a href="#services">Digital</a>
              </div>

              <div className="footer-column">
                <h4>Connect</h4>
                <a href="#">LinkedIn</a>
                <a href="#">Instagram</a>
                <a href="mailto:info@futurewavesco.com">
                  Email
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © 2026 Future Waves. All rights reserved.
            </span>

            <span>
              Technology for what&apos;s next.
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
