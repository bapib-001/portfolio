import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { label: "GitHub", icon: FiGithub, href: "https://github.com/bapib-001" },
  { label: "LinkedIn", icon: FiLinkedin, href: "https://www.linkedin.com/in/bapi-barman-3b449b248/" },
  { label: "Twitter", icon: FiTwitter, href: "https://twitter.com" },
];

const Footer = () => {
  return (
    <footer className="relative w-full pt-8 border-t border-gray-200/60 dark:border-gray-800/60  text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -translate-y-12">
        <div className="relative overflow-hidden rounded-3xl bg-white/80 dark:bg-[#090915] backdrop-blur-xl border border-gray-200/80 dark:border-gray-700/60 p-8 sm:p-10 shadow-xl shadow-brand/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-semibold uppercase tracking-wider">
              Get in Touch
            </span>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-gray-950 dark:text-white">
              Have a project in mind? Let's build it together.
            </h3>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand text-white font-semibold text-sm shadow-lg shadow-brand/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand/40 active:scale-95 shrink-0"
          >
            <FiMail size={18} />
            Start a Conversation
            <HiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-200/80 dark:border-gray-800/80">
          
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-gray-950 dark:text-white">
              Bapi<span className="text-brand">.</span>
            </a>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed">
              Full-stack developer focused on building clean digital experiences and solving real problems with modern web technologies.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-brand dark:text-gray-400 dark:hover:text-brand transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
              Connect & Socials
            </h4>
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700/60 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:border-brand hover:text-brand dark:hover:border-brand dark:hover:text-brand transition-all duration-200 active:scale-95 shadow-xs"
                  >
                    <Icon size={16} />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Bapi Barman. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);