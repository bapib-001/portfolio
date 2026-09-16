import React, { useEffect, useRef } from "react";
import {
  HiArrowUpRight,
  HiOutlineArrowDown,
  HiOutlineCodeBracket,
  HiOutlineCommandLine,
} from "react-icons/hi2";
import { SiMongodb, SiNodedotjs, SiReact, SiSupabase } from "react-icons/si";

const stack = [
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Supabase", icon: SiSupabase },
];

const Home = () => {
  const sectionRef = useRef(null);
  const cursorGlowRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const glow = cursorGlowRef.current;

    if (!section || !glow) return;

    const handlePointerMove = (event) => {
      const rect = section.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      glow.style.transform = `translate3d(${x - 180}px, ${y - 180}px, 0)`;
      glow.style.opacity = "1";
    };

    const handlePointerLeave = () => {
      glow.style.opacity = "0";
    };

    section.addEventListener("pointermove", handlePointerMove);
    section.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      section.removeEventListener("pointermove", handlePointerMove);
      section.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-10 pt-28 sm:px-8 lg:px-12 lg:pt-24"
    >
      <div
        ref={cursorGlowRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-1 hidden h-90 w-90 rounded-full bg-brand/4.5 opacity-0 blur-[100px] transition-opacity duration-500 md:block dark:bg-brand/8"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 z-1 h-125 w-125 rounded-full bg-indigo-400/4.5 blur-[140px] dark:bg-indigo-500/6"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mb-14 flex items-center justify-between border-b border-slate-200/80 pb-5 dark:border-white/10">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-50" />
              <span className="relative h-2 w-2 rounded-full bg-brand" />
            </span>

            <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Available for opportunities
            </span>
          </div>

          <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-slate-400 sm:block">
            Full-Stack Developer / 01
          </span>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <p className="mb-6 text-sm font-medium text-brand">
              Hello, I’m Bapi Barmam.
            </p>

            <h1 className="max-w-5xl text-[clamp(3.5rem,7vw,7.4rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-slate-950 dark:text-white">
              I build
              <br />
              <span className="relative">
                digital
                <span className="absolute -bottom-1 left-0 h-0.5 w-20 bg-brand sm:w-28" />
              </span>
              <br />
              <span className="text-slate-400 dark:text-slate-600">
                solutions.
              </span>
            </h1>

            <div className="mt-9 max-w-xl">
              <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-400">
                I’m a full-stack developer focused on turning ideas and problems
                into simple, reliable, and thoughtful digital experiences.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 text-sm font-medium text-slate-950 transition-colors duration-300 hover:text-brand dark:text-white dark:hover:text-brand"
              >
                <span className="border-b border-slate-950 pb-1 dark:border-white">
                  View selected work
                </span>

                <HiArrowUpRight className="text-base transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-brand dark:text-slate-400 dark:hover:text-brand"
              >
                Contact me
                <HiArrowUpRight className="text-sm opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
              </a>
            </div>

            <div className="mt-16 grid max-w-lg grid-cols-2 border-y border-slate-200/80 dark:border-white/10 sm:grid-cols-3">
              <div className="border-r border-slate-200/80 py-5 pr-6 dark:border-white/10">
                <p className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                  2+
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-500">
                  Years Learning
                </p>
              </div>

              <div className="border-r border-slate-200/80 px-6 py-5 dark:border-white/10">
                <p className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                  Full
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-500">
                  Stack
                </p>
              </div>

              <div className="hidden py-5 pl-6 sm:block">
                <p className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                  01
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-500">
                  Focus
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative">
            {/* System Label */}
            <div className="mb-8 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                How I approach problems
              </span>

              <span className="font-mono text-[10px] text-slate-400">
                01 — 04
              </span>
            </div>

            {/* System Diagram */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4.5 top-5 h-[calc(100%-40px)] w-px bg-linear-to-b from-brand/50 via-brand/20 to-transparent" />

              <div className="group relative flex gap-7 pb-12">
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-white/70 text-[10px] font-semibold text-brand backdrop-blur-md dark:bg-[#080a12]/70">
                  01
                </div>

                <div className="pt-1">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Understand
                  </p>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Understand the problem, users, and what the product actually
                    needs to achieve.
                  </p>
                </div>
              </div>

              <div className="group relative flex gap-7 pb-12">
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-[10px] font-semibold text-slate-500 backdrop-blur-md transition-colors group-hover:border-brand/30 group-hover:text-brand dark:border-white/15 dark:bg-[#080a12]/70 dark:text-slate-500">
                  02
                </div>

                <div className="pt-1">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Design
                  </p>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Break complexity down into a clear and intuitive experience.
                  </p>
                </div>
              </div>

              <div className="group relative flex gap-7 pb-12">
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-[10px] font-semibold text-slate-500 backdrop-blur-md transition-colors group-hover:border-brand/30 group-hover:text-brand dark:border-white/15 dark:bg-[#080a12]/70 dark:text-slate-500">
                  03
                </div>

                <div className="pt-1">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Build
                  </p>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Turn the solution into clean, responsive, and maintainable
                    code.
                  </p>
                </div>
              </div>

              {/* Step 04 */}
              <div className="group relative flex gap-7">
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand text-[10px] font-semibold text-white shadow-lg shadow-brand/20">
                  04
                </div>

                <div className="pt-1">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Refine
                  </p>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Test, improve, and refine until the experience feels right.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-14 border-t border-slate-200/80 pt-6 dark:border-white/10">
              <div className="flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <HiOutlineCodeBracket className="text-base" />
                  <span>Core stack</span>
                </div>

                <div className="hidden h-4 w-px bg-slate-200 dark:bg-white/10 sm:block" />

                {stack.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.name}
                      className="flex items-center gap-1.5 text-xs text-slate-500 transition-colors duration-300 hover:text-brand dark:text-slate-400 dark:hover:text-brand"
                    >
                      <Icon className="text-sm" />
                      <span>{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 hidden items-center justify-between border-t border-slate-200/80 pt-5 dark:border-white/10 md:flex">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-400">
            <HiOutlineCommandLine className="text-sm" />
            <span>Building with purpose</span>
          </div>

          <a
            href="#about"
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-brand"
          >
            Explore
            <HiOutlineArrowDown className="transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </div>
      </div>
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-ping,
          .animate-pulse {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default React.memo(Home);
