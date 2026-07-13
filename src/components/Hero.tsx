import { ArrowRight, Briefcase, Clock } from "lucide-react";
import ScheduleCall from "./Calendly";
import HeroBackgroundVideo from "./HeroBackgroundVideo";
import Media from "./Media";

const badgeClass =
  "inline-flex min-h-11 items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md sm:text-sm";

export default function Hero({
  onProjectsClick,
}: {
  onProjectsClick: () => void;
}) {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] w-full overflow-hidden bg-gray-950"
    >
      <div className="absolute inset-0">
        <HeroBackgroundVideo />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,8,0.94)_0%,rgba(5,5,8,0.7)_52%,rgba(5,5,8,0.3)_100%),linear-gradient(0deg,rgba(5,5,8,0.94)_0%,transparent_65%)]"
      />

      <div className="relative flex min-h-[100dvh] items-end">
        <div className="container mx-auto px-4 pb-12 pt-24 md:pb-24 lg:pt-32">
          <div className="flex flex-col gap-8 lg:flex-row-reverse lg:items-end lg:justify-between lg:gap-12">
            <div
              className="animate-slideIn flex items-center gap-3 lg:flex-col lg:items-end lg:gap-4 lg:mb-16"
              style={{ animationDelay: "60ms" }}
            >
              <Media />
              <div className="flex flex-wrap gap-2 lg:flex-col lg:items-end">
                <span className={badgeClass}>
                  <Clock size={14} className="flex-none" />
                  10+ Years Experience
                </span>
                <span className={badgeClass}>
                  <Briefcase size={14} className="flex-none" />
                  Founder & CEO, True Refined Solutions
                </span>
              </div>
            </div>

            <div className="max-w-3xl">
              <p
                className="animate-slideIn mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-200"
                style={{ animationDelay: "0ms" }}
              >
                Full-stack engineering · AI systems · product rescue
              </p>
              <h1
                className="animate-slideIn max-w-[15ch] text-5xl font-black leading-[0.98] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl"
                style={{ animationDelay: "40ms" }}
              >
                I turn ambitious products into dependable software.
              </h1>
              <p
                className="animate-slideIn mt-6 text-lg text-white/80 leading-relaxed max-w-[48ch]"
                style={{ animationDelay: "120ms" }}
              >
                Ten years shipping production systems, rescuing difficult
                codebases, and building AI products that hold up under real use.
              </p>
              <div
                className="animate-slideIn mt-10 flex flex-col sm:flex-row gap-3"
                style={{ animationDelay: "220ms" }}
              >
                <ScheduleCall label="Book a free consultation" />
                <button
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:border-white/70 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-px motion-reduce:transition-none"
                  onClick={onProjectsClick}
                >
                  Explore selected work
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
