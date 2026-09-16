import React, { useState } from "react";
import {
  HiArrowUpRight,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-12 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="mb-4 inline-block text-sm font-medium tracking-wider text-brand">
            Contact
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Let’s build something{" "}
            <span className="text-brand">meaningful.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            Have a project, idea, or opportunity in mind? I’d be happy to hear
            about it. Send me a message and let’s start a conversation.
          </p>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Get in touch
            </p>

            <div className="space-y-6">
              <a
                href="mailto:bapibarman.dev@gmail.com"
                className="group flex items-start gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white/40 text-brand backdrop-blur-sm transition-all duration-300 group-hover:border-brand/40 dark:border-white/10 dark:bg-white/3">
                  <HiOutlineEnvelope className="text-lg" />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-slate-700 transition-colors group-hover:text-brand dark:text-slate-300">
                    bapibarman.dev@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white/40 text-brand backdrop-blur-sm dark:border-white/10 dark:bg-white/3">
                  <HiOutlineMapPin className="text-lg" />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                    India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-slate-200 pt-8 dark:border-white/10">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Find me online
              </p>

              <div className="flex gap-3">
                <a
                  href="https://github.com/bapib-001"
                  target="_blank"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/40 text-slate-600 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:text-brand dark:border-white/10 dark:bg-white/3 dark:text-slate-400"
                >
                  <FiGithub className="text-lg" />
                </a>

                <a
                  href="https://www.linkedin.com/in/bapi-barman-3b449b248/"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/40 text-slate-600 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:text-brand dark:border-white/10 dark:bg-white/3 dark:text-slate-400"
                >
                  <FiLinkedin className="text-lg" />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">

            <div className="group">
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-500"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full border-b border-slate-300 bg-transparent px-0 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand dark:border-white/15 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-brand"
              />
            </div>

            <div className="group">
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-500"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full border-b border-slate-300 bg-transparent px-0 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand dark:border-white/15 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-brand"
              />
            </div>

            <div className="group">
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-500"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                required
                className="w-full resize-none border-b border-slate-300 bg-transparent px-0 py-3 text-sm leading-6 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand dark:border-white/15 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-brand"
              />
            </div>

            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand dark:bg-white dark:text-slate-900 dark:hover:bg-brand dark:hover:text-white"
            >
              Send Message
              <HiArrowUpRight className="text-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>

        <div className="mt-20 border-t border-slate-200 pt-8 dark:border-white/10">
          <p className="text-sm text-slate-500">
            Whether it’s a project, collaboration, or just a conversation — my
            inbox is open.
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Contact);
