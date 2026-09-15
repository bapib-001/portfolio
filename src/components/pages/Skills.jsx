
import React from "react";
import {
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiSupabase,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
  SiCanvas,
  SiNextdotjs,
} from "react-icons/si";
import { FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive and interactive user interfaces.",
    icon: "frontend",
    skills: [
      {
        name: "HTML",
        icon: SiHtml5,
        color: "text-orange-500",
      },
      {
        name: "CSS",
        icon: FaCss3,
        color: "text-blue-500",
      },
      {
        name: "JavaScript",
        icon: IoLogoJavascript,
        color: "text-yellow-400",
      },
      {
        name: "React",
        icon: FaReact,
        color: "text-cyan-400",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-slate-900 dark:text-white",
      },
    ],
  },

  {
    title: "Backend",
    description: "Developing APIs and server-side applications.",
    icon: "backend",
    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-green-500",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "text-slate-700 dark:text-slate-200",
      },
    ],
  },

  {
    title: "Database & Services",
    description:
      "Working with data, authentication, and backend infrastructure.",
    icon: "database",
    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-emerald-500",
      },
      {
        name: "Supabase",
        icon: SiSupabase,
        color: "text-emerald-400",
      },
    ],
  },

  {
    title: "Tools & Workflow",
    description:
      "Tools I use to manage code, projects, and development workflow.",
    icon: "tools",
    skills: [
      {
        name: "Git",
        icon: SiGit,
        color: "text-orange-500",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "text-slate-800 dark:text-white",
      },
      {
        name: "Docker",
        icon: SiDocker,
        color: "text-sky-500",
      },
    ],
  },

  {
    title: "Design & Visual Tools",
    description:
      "Designing interfaces, layouts, prototypes, and visual content.",
    icon: "design",
    skills: [
      {
        name: "Figma",
        icon: SiFigma,
        color: "text-pink-500",
      },
      {
        name: "Canva",
        icon: SiCanvas,
        color: "text-cyan-500",
      },
    ],
  },
];


const Skills = () => {
  return (
    <section
      id="skills"
      className="relative isolate min-h-screen overflow-hidden px-5 py-24 text-slate-900 transition-colors duration-500 sm:px-8 md:py-32 lg:px-10 dark:text-white"
    >

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:gap-24">

          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-2 backdrop-blur-md dark:border-brand/30 dark:bg-brand/8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-brand/50" />

                <span className="relative h-2 w-2 rounded-full bg-brand" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand sm:text-[11px]">
                Skills & Technologies
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-[1.02] tracking-[-0.055em] sm:text-5xl md:text-6xl xl:text-[4.4rem]">
              Tools I use to
              <br />

              <span className="bg-linear-to-r from-brand via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                build amazing
              </span>

              <br />

              things.
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base sm:leading-8">
              A curated set of technologies I use to turn ideas into real,
              scalable, and impactful web applications.
            </p>

            <div className="mt-10 flex max-w-lg divide-x divide-slate-200 dark:divide-white/10" >
              <Stat value="2+" label="Years Learning" />
              <Stat value="14+" label="Technologies" />
              <Stat value="100%" label="Passion" />
            </div>

            {/* CTA */}
            <a
              href="#projects"
              className="group mt-10 inline-flex items-center gap-3 rounded-full border border-brand bg-brand/4 px-6 py-3 text-sm font-semibold text-slate-800 transition-all duration-300 hover:bg-brand hover:text-white hover:shadow-[0_0_35px_rgba(99,102,241,0.25)] dark:text-white"
            >
              Explore My Projects

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/8 blur-[100px] dark:bg-brand/12"/>

            <div className="relative grid gap-4 sm:grid-cols-2">
              {skillGroups.map((group, index) => (
                <SkillGroup
                  key={group.title}
                  group={group}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-slate-200/80 pt-7 dark:border-white/8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/50" />

              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>

            <span className="text-sm text-slate-500 dark:text-slate-400">
              Always learning & improving
            </span>
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400 dark:text-slate-600">
            Full Stack / 2026
          </span>
        </div>
      </div>

    </section>
  );
};


const Stat = ({ value, label }) => {
  return (
    <div className="min-w-0 flex-1 px-4 first:pl-0 last:pr-0">
      <div className="text-2xl font-bold tracking-tight sm:text-3xl">
        {value}
      </div>
      <div className="mt-1 text-[10px] font-medium uppercase tracking-wider text-slate-400 sm:text-xs" >
        {label}
      </div>
    </div>
  );
};


const SkillGroup = ({ group, index }) => {
  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/65 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 dark:border-white/8 dark:bg-[#0d111b]/70 dark:shadow-none dark:hover:border-brand/30  ${index === 4 ? "sm:col-span-2" : ""} sm:p-6`}>

      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-brand/0 blur-3xl transition-all duration-700 group-hover:bg-brand/10" />

      <div className="relative mb-5 flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_10px_rgba(99,102,241,0.7)]" />

            <h3 className="text-lg font-semibold tracking-tight">
              {group.title}
            </h3>
          </div>

          <p className="max-w-sm text-xs leading-5 text-slate-500 dark:text-slate-400 sm:text-sm sm:leading-6">
            {group.description}
          </p>
        </div>

        <span className="shrink-0 font-mono text-[9px] tracking-[0.2em] text-slate-300 dark:text-white/20">
          0{index + 1}
        </span>
      </div>

      <div className="relative flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};



const SkillCard = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <div className="group/skill inline-flex items-center gap-2.5 rounded-full border border-slate-200/80 bg-slate-50/80 px-3 py-2 transition-all duration-300 hover:border-brand/30 hover:bg-white hover:shadow-sm dark:border-white/8 dark:bg-white/[0.035] dark:hover:border-brand/30 dark:hover:bg-white/6">
      <Icon
        className={`h-4 w-4 shrink-0 transition-transform duration-300 group-hover/skill:scale-110 ${skill.color}`}
        aria-hidden="true"
      />

      <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
        {skill.name}
      </span>
    </div>
  );
};

export default React.memo(Skills);
