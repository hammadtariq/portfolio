import { ArrowRight } from "lucide-react";
import ScheduleCall from "./Calendly";

export default function Hero({
  onProjectsClick,
}: {
  onProjectsClick: () => void;
}) {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-16 lg:pt-24 lg:pb-24 min-h-[100dvh] flex items-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[28rem] w-[28rem] rounded-full bg-blue-100/50 blur-3xl"
      />

      <div className="container relative mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        <div className="max-w-xl">
          <h1
            className="animate-slideIn text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-gray-950"
            style={{ animationDelay: "0ms" }}
          >
            I build full-stack products in React, Node, and AWS.
          </h1>
          <p
            className="animate-slideIn mt-6 text-lg text-gray-600 leading-relaxed max-w-[48ch]"
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
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-blue-700"
              onClick={onProjectsClick}
            >
              View My Work
              <ArrowRight size={18} />
            </button>
            <ScheduleCall />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] border-2 border-blue-600/25"
          />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl shadow-gray-900/10">
            <img
              src="/profile-dp.webp"
              alt="Hammad Tariq"
              width={1880}
              height={1880}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-lg">
            <p className="text-2xl font-bold text-gray-950">10+</p>
            <p className="text-sm text-gray-600">years shipping software</p>
          </div>
        </div>
      </div>
    </section>
  );
}
