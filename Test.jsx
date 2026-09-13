import { useEffect, useState } from "react";
import { GoSun, GoMoon } from "react-icons/go";
import { CgMenuRight, CgClose } from "react-icons/cg";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: 'Skills', href: '#skills' },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];


export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [menuOpen, setMenuOpen] = useState(false);CgMenuRight,

  // Theme
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

  // Close mobile menu when viewport becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/70 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <nav className="flex h-17 items-center justify-between backdrop-blur-xl transition-colors duration-300 ">

          <a href="#home"
            onClick={closeMenu}
            className="group relative flex items-center text-[20px] font-semibold tracking-[-0.04em] text-neutral-950 dark:text-white"
          >
            Bapi
            <span
              className=" ml-0.5 text-neutral-400 transition-transform duration-300 group-hover:-translate-y-0.5 "
            >
              .
            </span>
            <span
              className=" absolute -bottom-1 left-0 h-px w-0 bg-neutral-900 dark:bg-white transition-all duration-300 group-hover:w-full"
            />
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative px-4 py-2 text-[13px] font-medium text-neutral-500 dark:text-neutral-400 transition-colors duration-200 hover:text-neutral-950 dark:hover:text-white"
              >
                {link.name}

                <span
                  className=" absolute bottom-0 left-1/2 h-0.5 w-1 -translate-x-1/2 rounded-full bg-neutral-950 dark:bg-white opacity-0 transition-all duration-300 group-hover:w-5 group-hover:opacity-100 "
                />
              </a>
            ))}

            {/* Divider */}
            <div
              className=" mx-3 h-5 w-px bg-neutral-200 dark:bg-white/10"
            />

            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-gray-400/60"
            >
              <span
                className=""
              >
                {darkMode ? <GoSun /> : <GoMoon />}
              </span>
            </button>
          </div>

          {/* =========================
              MOBILE CONTROLS
          ========================== */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Theme */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className=" flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100/70 dark:bg-white/5 text-neutral-600 dark:text-neutral-300 transition-all duration-300 active:scale-90"
            >
              {darkMode ? <GoSun /> : <GoMoon />}
            </button>

            {/* Menu */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100/70 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 transition-all duration-300 active:scale-90"
            >
              <span
                className="transition-transform duration-300"
              >
                {menuOpen ? <CgClose /> : <CgMenuRight />} 
              </span>
            </button>
          </div>
        </nav>

        {/* =========================
            MOBILE MENU
        ========================== */}
        <div className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${menuOpen? "max-h-90 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="mt-4 border-b border-x border-neutral-200/70 dark:border-white/10 bg-white/90 dark:bg-neutral-950/90 px-3 py-3 shadow-lg shadow-black/3 backdrop-blur-xl ">
            <div className="flex flex-col">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-neutral-600 dark:text-neutral-400 transition-all duration-200 hover:bg-neutral-100 hover:text-neutral-950 dark:hover:bg-white/5 dark:hover:text-white"
                >
                  <span>{link.name}</span>

                  <span className=" text-neutral-300 dark:text-neutral-600 transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}