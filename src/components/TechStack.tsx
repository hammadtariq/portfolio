import { forwardRef } from "react";
import { TechConfig } from "./TechConfig";

interface TechStackProps {
  tech: string;
  classNames?: string;
}

const TechStack: React.FC<TechStackProps> = forwardRef<HTMLElement, TechStackProps>(
  ({ tech, classNames = "w-4 h-4" }) => {
  const techItem = TechConfig[tech];
  const icon = techItem?.icon(classNames);

  return (
    <span className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">
      {icon}
      <span>{tech}</span>
    </span>
  );
});

TechStack.displayName = "TechStack";
export default TechStack;
