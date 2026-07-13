import { ArrowUpRight, Mail } from "lucide-react";
import ScheduleCall from "./Calendly";

export default function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0c0c0c] px-4 py-20 text-white md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(182,0,168,0.22),transparent_30%),radial-gradient(circle_at_85%_75%,rgba(190,76,0,0.18),transparent_28%)]" />
      <div className="relative container mx-auto overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.055] px-6 py-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] sm:px-10 md:rounded-[3rem] md:px-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold text-fuchsia-200">Available for select projects</p>
            <h2 className="mt-5 max-w-[12ch] text-5xl font-black leading-[0.95] tracking-[-0.035em] sm:text-6xl md:text-7xl">
              Bring me the hard part.
            </h2>
            <p className="mt-6 max-w-[55ch] text-lg leading-relaxed text-slate-300">
              Tell me what you’re building, where it’s stuck, and what a successful outcome looks like. We’ll use the first call to find the clearest path forward.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:items-stretch">
            <ScheduleCall label="Book a free consultation" className="w-full" />
            <a
              href="mailto:hammadtariq65@gmail.com"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:border-white/45 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Mail size={18} aria-hidden="true" />
              Email me instead
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
