import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/hammadtariq", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hammadtariq1", icon: Linkedin },
  { label: "Email", href: "mailto:hammadtariq65@gmail.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808] px-4 py-8 text-white">
      <div className="container mx-auto flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a
            href="#hero"
            className="text-lg font-black tracking-tight text-white transition-colors hover:text-fuchsia-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Hammad Tariq
          </a>
          <p className="mt-1 text-sm text-slate-400">
            Full-stack engineer · Karachi, working worldwide
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
            </a>
          ))}
          <a
            href="#hero"
            aria-label="Back to top"
            className="ml-2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition duration-300 hover:-translate-y-0.5 hover:bg-fuchsia-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
          >
            <ArrowUp size={19} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="container mx-auto mt-8 border-t border-white/10 pt-5 text-sm text-slate-500">
        © {new Date().getFullYear()} Hammad Tariq. Built with care, not a template.
      </div>
    </footer>
  );
}
