import React, { useEffect, useState } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { GoMoon, GoSun } from "react-icons/go";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineCode,
  HiOutlineFolder,
  HiOutlineMail,
} from "react-icons/hi";

const NAV_LINKS = [
  { name: "Home", href: "#home", icon: HiOutlineHome },
  { name: "About", href: "#about", icon: HiOutlineUser },
  { name: "Skills", href: "#skills", icon: HiOutlineCode },
  { name: "Projects", href: "#projects", icon: HiOutlineFolder },
  { name: "Contact", href: "#contact", icon: HiOutlineMail },
];

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (openNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openNav]);

  const handleNavClick = () => {
    setOpenNav(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-slate-200/80 bg-white/75 px-3 py-2 shadow-lg shadow-slate-900/5 backdrop-blur-2xl transition-all duration-300 sm:px-4 dark:border-white/10 dark:bg-[#0b0d17]/70 dark:shadow-black/20">
        <a
          href="#home"
          onClick={handleNavClick}
          className="group flex items-center gap-2.5 rounded-full p-1"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-brand to-violet-500 text-sm font-black text-white shadow-md shadow-brand/20 transition-transform duration-300 group-hover:rotate-6">
            B
          </span>

          <span className="hidden text-sm font-bold tracking-tight text-slate-800 sm:block dark:text-white">
            Bapi Barman
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-full px-4 py-2 text-xs font-semibold text-slate-600 transition-all duration-200 hover:bg-brand/10 hover:text-brand dark:text-slate-300 dark:hover:bg-brand/15 dark:hover:text-indigo-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            onClick={() => setDarkMode((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-600 shadow-xs transition-all duration-300 hover:border-brand/40 hover:bg-brand/10 hover:text-brand dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-brand/15 dark:hover:text-indigo-300"
          >
            {darkMode ? (
              <GoSun className="h-4 w-4" />
            ) : (
              <GoMoon className="h-4 w-4" />
            )}
          </button>

          <button
            type="button"
            aria-label={openNav ? "Close navigation" : "Open navigation"}
            aria-expanded={openNav}
            onClick={() => setOpenNav((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-700 transition-all duration-200 hover:border-brand/40 hover:text-brand md:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
          >
            {openNav ? (
              <CgClose className="h-5 w-5" />
            ) : (
              <CgMenuRight className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <div className="md:hidden">
        <div
          className={`mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border bg-white/90 shadow-xl backdrop-blur-2xl transition-all duration-300 dark:bg-[#0b0d17]/95 ${
            openNav
              ? "max-h-96 border-slate-200/80 opacity-100 dark:border-white/10"
              : "pointer-events-none max-h-0 border-transparent opacity-0"
          }`}
        >
          <div className="p-3 space-y-1">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-brand/10 hover:text-brand dark:text-slate-200 dark:hover:bg-brand/15 dark:hover:text-indigo-300"
                >
                  <Icon className="h-5 w-5 text-brand" />
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Navbar);
