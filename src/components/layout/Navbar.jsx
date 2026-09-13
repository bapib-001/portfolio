import React, { useEffect, useState } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { GoMoon, GoSun } from "react-icons/go";
import { 
    HiOutlineHome, 
    HiOutlineUser, 
    HiOutlineCode, 
    HiOutlineFolder, 
    HiOutlineMail,
    HiOutlineChevronRight
} from "react-icons/hi";

const NAV_LINKS = [
    { name: 'Home', href: '#home', icon: HiOutlineHome },
    { name: 'About', href: '#about', icon: HiOutlineUser },
    { name: 'Skills', href: '#skills', icon: HiOutlineCode },
    { name: 'Projects', href: '#projects', icon: HiOutlineFolder },
    { name: 'Contact', href: '#contact', icon: HiOutlineMail }
];

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);

    const [isDark, setIsDark] = useState(() => {
        if (typeof window === 'undefined') return false;
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setOpenNav(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (openNav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [openNav]);


    const toggleTheme = () => setIsDark(prev => !prev);
    const toggleMobileMenu = () => setOpenNav(prev => !prev);
    const closeMobileMenu = () => setOpenNav(false);

    return (
        <header className="sticky top-0 z-50 w-full px-3 py-3 sm:px-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                
                <a 
                    href="/"
                    className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 dark:bg-[#191920]/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50"
                >
                    <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Bapi
                    </span>
                    <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                </a>

                <ul className="hidden md:flex items-center gap-x-7 text-sm font-medium text-gray-600 dark:text-gray-300 px-6 py-2.5 rounded-full bg-white/80 dark:bg-[#191920]/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50">
                    {NAV_LINKS.map((item) => (
                        <li key={item.name}>
                            <a 
                                href={item.href}
                                className="relative py-1 transition-colors duration-200 hover:text-brand dark:hover:text-brand group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 rounded-full bg-brand transition-all duration-300 group-hover:w-full" />
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-x-2 p-1 rounded-full bg-white/80 dark:bg-[#191920]/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50">
                    <button
                        type="button"
                        aria-label="Toggle theme"
                        className="cursor-pointer rounded-full p-2 text-gray-700 hover:text-brand dark:text-gray-200 dark:hover:text-brand transition-colors"
                        onClick={toggleTheme}
                    >
                        {isDark ? <GoSun size={18} /> : <GoMoon size={18} />}
                    </button>

                    <button 
                        type="button"
                        aria-label="Toggle Navigation"
                        className="block md:hidden p-2 rounded-full text-gray-700 hover:text-brand dark:text-gray-200 dark:hover:text-brand transition-colors cursor-pointer"
                        onClick={toggleMobileMenu}
                    >
                        {openNav ? <CgClose size={18} /> : <CgMenuRight size={18} />}
                    </button>
                </div>
            </div>

            <MobileNav 
                isOpen={openNav} 
                onClose={closeMobileMenu} 
                navLinks={NAV_LINKS} 
            />
        </header>
    );
};

const MobileNav = ({ isOpen, onClose, navLinks }) => {
    return (
        <div 
            className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
                isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
            }`}
        >
            <div 
                className="absolute inset-0 bg-black/20 dark:bg-black/50 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />

            <div className="absolute top-16 left-0 right-0 px-4 flex justify-center">
                <div 
                    className="w-full max-w-md rounded-3xl bg-white/90 dark:bg-[#1f1f28]/90 backdrop-blur-2xl border border-gray-200/60 dark:border-gray-700/60 p-3 transform-gpu"
                    style={{
                        transform: isOpen ? "scale(1)" : "scale(0.85)",
                        opacity: isOpen ? 1 : 0,
                        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
                    }}
                >
                    <ul className="flex flex-col gap-1">
                        {navLinks.map((item) => {
                            const Icon = item.icon;
                            return (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        onClick={onClose}
                                        className="flex items-center justify-between p-3 rounded-2xl hover:bg-brand/10 hover:text-brand dark:hover:bg-brand/20 text-gray-800 dark:text-gray-100 transition-all duration-200 active:scale-98"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-brand">
                                                <Icon size={18} />
                                            </div>
                                            <span className="font-semibold text-sm">{item.name}</span>
                                        </div>
                                        <HiOutlineChevronRight size={16} className="opacity-40" />
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Navbar);