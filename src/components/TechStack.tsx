import { forwardRef } from "react";
import { TechConfig } from "./TechConfig";

interface TechStackProps {
  tech: string;
  classNames?: string;
  variant?: "light" | "dark";
}

const TechStack = forwardRef<HTMLSpanElement, TechStackProps>(
  ({ tech, classNames = "w-4 h-4", variant = "light" }, ref) => {
  const techItem = TechConfig[tech];
  const icon = techItem?.icon(classNames);
  const palette =
    variant === "dark"
      ? "border-white/15 bg-white/5 text-slate-200 hover:border-blue-300/50 hover:bg-blue-500/20 hover:text-white"
      : "border-gray-200 bg-gray-50 text-gray-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700";

  return (
    <span
      ref={ref}
      className={`inline-flex flex-shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${palette}`}
    >
      {icon}
      <span>{tech}</span>
    </span>
  );
  },
);

TechStack.displayName = "TechStack";
export default TechStack;
