import React from "react";
import {
  HiArrowUpRight,
  HiOutlineCodeBracket,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-5 py-16 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">

        <div className="flex flex-col justify-between gap-6 border-b border-slate-200/80 pb-8 dark:border-white/10 md:flex-row md:items-end">

          <div>
            <span className="mb-4 inline-block text-sm font-medium tracking-wider text-brand">
              Projects
            </span>

            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              Things I’m{" "}
              <span className="text-brand">building.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
            I’m currently turning what I’ve learned into real-world projects.
            This space will grow as I build, experiment, and ship.
          </p>
        </div>

        <div className="relative py-12 sm:py-16">

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none text-[12rem] font-bold leading-none tracking-[-0.08em] text-slate-900/2.5 dark:text-white/2.5 sm:text-[18rem]"
          >
            01
          </div>

          <div className="relative max-w-2xl">

            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/20 bg-brand/6 text-brand dark:border-brand/25 dark:bg-brand/8">
              <HiOutlineRocketLaunch className="text-xl" />
            </div>
            <div className="mb-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />

              <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                Currently building
              </span>
            </div>

            <h3 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              No finished projects yet.
            </h3>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400">
              I’m focusing on building projects that demonstrate how I think,
              solve problems, and work with modern web technologies. Rather
              than filling this section with unfinished or copied projects,
              I’d rather show work that I’m genuinely proud of.
            </p>

            <div className="mt-10 grid gap-5 border-y border-slate-200/80 py-7 dark:border-white/10 sm:grid-cols-2">

              <div className="flex gap-4">
                <HiOutlineCodeBracket className="mt-0.5 shrink-0 text-lg text-brand" />

                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    Building fundamentals
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-500">
                    Strengthening frontend, backend, database, and Git
                    workflows.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <HiOutlineRocketLaunch className="mt-0.5 shrink-0 text-lg text-brand" />

                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    Preparing to ship
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-500">
                    Turning learning into complete, usable applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-slate-900 transition-colors hover:text-brand dark:text-white dark:hover:text-brand"
              >
                <span className="border-b border-slate-900 pb-1 dark:border-white">
                  Follow my journey
                </span>

                <HiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <span className="text-xs text-slate-400">
                More projects coming soon.
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200/80 pt-6 text-xs text-slate-400 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <span>01 / Projects</span>

          <span>Building. Learning. Shipping.</span>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Projects);