import { ArrowRight } from "lucide-react";
import ScheduleCall from "./Calendly";
import HeroBackgroundVideo from "./HeroBackgroundVideo";

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
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10"
      />

      <div className="relative flex min-h-[100dvh] items-end">
        <div className="container mx-auto px-4 pb-16 pt-32 md:pb-24">
          <div className="max-w-xl">
            <h1
              className="animate-slideIn text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white"
              style={{ animationDelay: "0ms" }}
            >
              I build full-stack products in React, Node, and AWS.
            </h1>
            <p
              className="animate-slideIn mt-6 text-lg text-white/80 leading-relaxed max-w-[48ch]"
              style={{ animationDelay: "120ms" }}
            >
              Ten years shipping production systems for teams at Macy's, Gap,
              Williams-Sonoma, and Prologis.
            </p>
            <div
              className="animate-slideIn mt-10 flex flex-col sm:flex-row gap-3"
              style={{ animationDelay: "220ms" }}
            >
              <button
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-blue-500"
                onClick={onProjectsClick}
              >
                View My Work
                <ArrowRight size={18} />
              </button>
              <ScheduleCall />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
