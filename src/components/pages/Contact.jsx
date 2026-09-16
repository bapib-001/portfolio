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

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "loading") return;

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error(
        "Web3Forms access key is missing. Check your .env file."
      );

      setStatus("error");

      setTimeout(() => {
        setStatus("idle");
      }, 5000);

      return;
    }

    setStatus("loading");

    const data = new FormData();

    data.append("access_key", accessKey);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);

    data.append("subject", `New Portfolio Message from ${formData.name}`);
    data.append("from_name", "Bapi Barmam Portfolio");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        console.error("Web3Forms Error:", result);

        setStatus("error");

        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      }
    } catch (error) {
      console.error("Submission Error:", error);

      setStatus("error");

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
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
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white/40 text-brand backdrop-blur-sm transition-all duration-300 group-hover:border-brand/40 dark:border-white/10 dark:bg-white/5"
                >
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
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white/40 text-brand backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
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
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/40 text-slate-600 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:text-brand dark:border-white/10 dark:bg-white/5 dark:text-slate-400"
                >
                  <FiGithub className="text-lg" />
                </a>

                <a
                  href="https://www.linkedin.com/in/bapi-barman-3b449b248/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/40 text-slate-600 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:text-brand dark:border-white/10 dark:bg-white/5 dark:text-slate-400"
                >
                  <FiLinkedin className="text-lg" />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
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
                autoComplete="name"
                required
                disabled={status === "loading"}
                className="w-full border-b border-slate-300 bg-transparent px-0 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/15 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-brand"
              />
            </div>

            <div>
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
                autoComplete="email"
                required
                disabled={status === "loading"}
                className="w-full border-b border-slate-300 bg-transparent px-0 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/15 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-brand"
              />
            </div>

            <div>
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
                disabled={status === "loading"}
                className="w-full resize-none border-b border-slate-300 bg-transparent px-0 py-3 text-sm leading-6 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/15 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-brand"
              />
            </div>

            <div className="flex flex-col items-start gap-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-900 dark:hover:bg-brand dark:hover:text-white"
              >
                {status === "loading" ? "Sending..." : "Send Message"}

                {status !== "loading" && (
                  <HiArrowUpRight className="text-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                )}
              </button>

              {status === "success" && (
                <p className="text-sm font-medium text-green-600 dark:text-green-400">
                  ✓ Message sent successfully. I’ll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm font-medium text-red-600 dark:text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>

        <div className="mt-20 border-t border-slate-200 pt-8 dark:border-white/10">
          <p className="text-sm text-slate-500">
            Whether it’s a project, collaboration, or just a conversation —
            my inbox is open.
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Contact);
