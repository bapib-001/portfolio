import React from "react";

import { HiArrowUpRight, HiOutlineSparkles } from "react-icons/hi2";
import { HiOutlineCode } from "react-icons/hi";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 text-slate-900 sm:px-8 md:pb-24 md:pt-36 lg:px-10"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/4 h-72 w-72 rounded-full bg-brand/[0.07] blur-[120px] dark:bg-brand/10"/>

        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-violet-500/6 blur-[140px] dark:bg-violet-500/8"/>
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">

          <div className="max-w-3xl">

            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-brand/15 bg-white/55 px-3.5 py-2 shadow-sm backdrop-blur-xl dark:border-brand/20 dark:bg-white/4">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-brand/50" />

                <span className="relative h-2 w-2 rounded-full bg-brand" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand sm:text-[11px]">
                Full-Stack Developer
              </span>
            </div>

            <h1 className="text-[3.25rem] font-bold leading-[0.98] tracking-[-0.065em] text-slate-950 sm:text-6xl md:text-7xl lg:text-[5.5rem] dark:text-white">
              I build digital
              <br />
              <span className="bg-linear-to-r from-brand via-violet-500 to-indigo-400 bg-clip-text text-transparent">
                experiences
              </span>
              <br />
              that solve
              <br />
              <span className="bg-linear-to-r from-slate-950 via-slate-700 to-brand bg-clip-text text-transparent dark:from-white dark:via-indigo-100 dark:to-violet-400">
                real problems.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 dark:text-slate-400">
              I'm a self-taught full-stack developer focused on creating clean,
              responsive, and useful web applications with modern technologies.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects"
                className="group inline-flex items-center gap-2.5 rounded-full bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand hover:shadow-brand/20 dark:bg-white dark:text-slate-950 dark:hover:bg-indigo-100">
                View my work
                <HiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/55 px-5 py-3.5 text-sm font-semibold text-slate-700 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:text-brand dark:border-white/10 dark:bg-white/4 dark:text-slate-200 dark:hover:border-brand/40 dark:hover:text-indigo-300">
                Let's talk
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative mx-auto aspect-square max-w-97.5 rounded-4xl border border-white/70 bg-white/35 p-5 shadow-2xl shadow-slate-900/6 backdrop-blur-xl dark:border-white/8 dark:bg-white/2.5">
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/70 bg-white/40 p-6 dark:border-white/[0.07] dark:bg-white/2.5">

                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-brand/10 blur-3xl dark:bg-brand/15"/>

                <div className="relative">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand dark:bg-brand/15">
                    <HiOutlineCode className="h-5 w-5" />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    What I do
                  </p>

                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Turn problems into
                    <span className="text-brand"> working products.</span>
                  </h2>
                </div>

                <div className="relative space-y-3">
                  <MiniFeature
                    icon={HiOutlineSparkles}
                    text="Clean & thoughtful interfaces"
                  />

                  <MiniFeature
                    icon={HiOutlineCode}
                    text="Modern full-stack development"
                  />

                  <MiniFeature
                    icon={HiArrowUpRight}
                    text="Focused on useful solutions"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="mt-16 grid max-w-3xl grid-cols-1 gap-4 border-t border-slate-200/70 pt-6 sm:grid-cols-3 dark:border-white/8">
          <Meta label="Stack" value="React · Node · MongoDB" />
          <Meta label="Focus" value="Problem Solving" />
          <Meta label="Approach" value="Learn · Build · Improve" />
        </div>
      </div>
    </section>
  );
};

const MiniFeature = ({ icon: Icon, text }) => {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200/60 bg-white/50 px-3.5 py-3 dark:border-white/[0.07] dark:bg-white/3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand dark:bg-brand/15">
        <Icon className="h-4 w-4" />
      </span>

      <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
        {text}
      </span>
    </div>
  );
};

const Meta = ({ label, value }) => {
  return (
    <div>
      <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400">
        {label}
      </p>

      <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
        {value}
      </p>
    </div>
  );
};

export default React.memo(Home);
