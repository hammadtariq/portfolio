import { forwardRef } from "react";
import { ArrowDownRight, Bot, Layers3, LifeBuoy } from "lucide-react";

const services = [
  {
    icon: Layers3,
    title: "Build the product",
    description:
      "From architecture through launch: responsive interfaces, dependable APIs, cloud infrastructure, and the decisions connecting them.",
    details: "React · Node.js · AWS · mobile",
  },
  {
    icon: Bot,
    title: "Add useful AI",
    description:
      "Integrate agents, model orchestration, computer vision, and workflow automation where they create measurable leverage—not demo theatre.",
    details: "Agents · MCP · multimodal · automation",
  },
  {
    icon: LifeBuoy,
    title: "Rescue what is stuck",
    description:
      "Stabilize inherited or AI-generated code, remove performance bottlenecks, and turn a fragile prototype into software teams can operate.",
    details: "Audit · debug · scale · ship",
  },
];

const Services = forwardRef<HTMLElement>((_props, ref) => (
  <section ref={ref} id="services" className="relative overflow-hidden bg-white py-24 text-slate-950 md:py-32">
    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/70 to-transparent" />
    <div className="container mx-auto px-4">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <h2 className="max-w-[10ch] text-5xl font-black leading-[0.95] tracking-[-0.035em] sm:text-6xl md:text-7xl">
          Engineering where it matters most.
        </h2>
        <p className="max-w-[58ch] text-lg leading-relaxed text-slate-600 lg:justify-self-end">
          I work as a senior hands-on partner for founders and teams that need clarity, momentum, and production-level execution across the stack.
        </p>
      </div>

      <div className="mt-16 border-t border-slate-200">
        {services.map(({ icon: Icon, title, description, details }) => (
          <article key={title} className="group grid gap-5 border-b border-slate-200 py-8 md:grid-cols-[auto_0.75fr_1.25fr_auto] md:items-center md:gap-8 md:py-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-white transition duration-300 group-hover:bg-fuchsia-700 motion-reduce:transition-none">
              <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h3>
            <div>
              <p className="max-w-[58ch] leading-relaxed text-slate-600">{description}</p>
              <p className="mt-3 text-sm font-semibold text-slate-950">{details}</p>
            </div>
            <ArrowDownRight className="hidden text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-fuchsia-700 md:block motion-reduce:transition-none" size={28} aria-hidden="true" />
          </article>
        ))}
      </div>
    </div>
  </section>
));

Services.displayName = "Services";
export default Services;
