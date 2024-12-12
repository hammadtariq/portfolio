import { forwardRef } from "react";
import { TechConfig } from "./TechConfig";

interface TechStackProps {
  tech: string;
  classNames?: string;
}

const TechStack: React.FC<TechStackProps> = forwardRef<HTMLElement, TechStackProps>(
  ({ tech, classNames }) => {
  const techItem = TechConfig[tech];
  const hoverClass = techItem?.hoverClass;
  const icon = techItem?.icon(classNames);

  return (
    <span
      className={`flex justify-center items-center bg-gray-100 border border-gray-300 rounded-full text-xs px-3 py-1 font-semibold cursor-pointer transition-colors duration-200 ${hoverClass} flex-shrink-0`}
    >
      {icon ? (
        <>
          {icon}
          {icon?.props?.src && <span className="ml-1">{tech}</span>}
        </>
      ) : (
        <span className="ml-1">{tech}</span>
      )}
    </span>
  );
});

TechStack.displayName = "TechStack";
export default TechStack;
