import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/hammadtariq",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hammadtariq1",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:hammadtariq65@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gray-950 px-4 pb-5 pt-5 text-white sm:pb-8 sm:pt-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_8%,rgba(37,99,235,0.3),transparent_30%),radial-gradient(circle_at_10%_100%,rgba(14,165,233,0.12),transparent_25%)]"
      />
      <div className="relative container mx-auto">
        <div className="footer-glass rounded-[2rem] px-6 py-10 sm:px-9 md:px-12 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium text-blue-200">Let’s build</p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Have a product worth shipping?
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
                I partner with teams to turn complex product ideas into dependable web experiences.
              </p>
              <a
                href="mailto:hammadtariq65@gmail.com"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition duration-300 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300 active:translate-y-px motion-reduce:transition-none"
              >
                Start a conversation
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>

            <div className="flex flex-col gap-6 lg:items-end">
              <span className="text-sm font-medium text-slate-300">Find me online</span>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition duration-300 hover:-translate-y-0.5 hover:border-blue-300/50 hover:bg-blue-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300 active:translate-y-px motion-reduce:transition-none"
                  >
                    <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Hammad Tariq. All rights reserved.</p>
            <a
              href="#hero"
              className="w-fit font-medium text-slate-300 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
