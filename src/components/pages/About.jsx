import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";

const highlights = [
  {
    value: "2+",
    label: "Years Learning",
  },
  {
    value: "12th",
    label: "Commerce",
  },
  {
    value: "∞",
    label: "Curiosity",
  },
];

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Supabase",
  "Git",
  "GitHub",
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-5 py-16 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 inline-block text-sm font-medium tracking-wider text-brand">
            About Me
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            A developer focused on{" "}
            <span className="text-brand">solving problems.</span>
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            I’m a self-taught full-stack developer who enjoys turning ideas into
            practical, user-friendly digital experiences. I focus on
            understanding the problem first, then building a solution that is
            simple, useful, and reliable.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
          <div>
            <div className="space-y-6 text-[15px] leading-7 text-slate-600 dark:text-slate-400">
              <p>
                My journey into web development has been driven by curiosity and
                consistent self-learning. Instead of following a traditional
                computer science path, I’ve learned by building, experimenting,
                breaking things, and figuring out how to make them work.
              </p>

              <p>
                I’ve worked with modern technologies across the frontend and
                backend, including React, Next.js, Node.js, Express, MongoDB,
                and Supabase.
              </p>

              <p>
                Right now, my focus is on strengthening my fundamentals,
                building meaningful projects, and becoming ready for my first
                professional opportunity.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-y border-slate-200 py-7 dark:border-white/10">
              {highlights.map((item) => (
                <div key={item.label}>
                  <div className="text-2xl font-semibold text-slate-900 dark:text-white">
                    {item.value}
                  </div>

                  <div className="mt-1 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500">
              What I focus on
            </p>

            <ul className="space-y-5">
              {[
                "Building clean and responsive interfaces",
                "Creating practical full-stack applications",
                "Writing maintainable and understandable code",
                "Learning through real-world projects",
              ].map((item, index) => (
                <li key={item} className="group flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brand/30 text-xs text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm leading-6 text-slate-600 transition-colors group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-slate-200 pt-10 dark:border-white/10">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500">
              Technologies I use
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-200 bg-white/40 px-3.5 py-1.5 text-sm text-slate-600 backdrop-blur-sm transition-all duration-300 hover:border-brand/40 hover:text-brand dark:border-white/10 dark:bg-white/3 dark:text-slate-400 dark:hover:border-brand/40 dark:hover:text-brand"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-slate-200 pt-10 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
          <div>
            <p className="text-lg font-medium text-slate-900 dark:text-white">
              Looking for my first opportunity.
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Open to learning, contributing, and growing.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-900 transition-colors hover:text-brand dark:text-white dark:hover:text-brand"
          >
            Let’s Connect
            <HiArrowUpRight className="text-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
