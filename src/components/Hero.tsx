import { ArrowDown } from "lucide-react";
import ScheduleCall from "./Calendly";

export default function Hero({
  onProjectsClick,
}: {
  onProjectsClick: () => void;
}) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Full-Stack Developer
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Crafting exceptional web and mobile experiences for over a decade
        </p>
        <div className="flex flex-col space-y-3 space-x-0 md:flex-row md:space-y-0 md:space-x-3">
          <button
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold flex items-center hover:bg-blue-100 transition duration-300"
            onClick={onProjectsClick}
          >
            View My Work
            <ArrowDown className="ml-2" size={20} />
          </button>
          <ScheduleCall />
        </div>
      </div>
    </section>
  );
}
