import { forwardRef } from "react";
import { Helmet } from "react-helmet";
import { Compass, MessagesSquare, ShieldCheck } from "lucide-react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const capabilities = [
  {
    icon: Compass,
    label: "Product judgment",
    description:
      "I help narrow broad ideas into the smallest product worth building, with a clear path for what comes next.",
  },
  {
    icon: ShieldCheck,
    label: "Senior ownership",
    description:
      "Architecture, implementation, deployment, and production risk stay connected instead of disappearing between handoffs.",
  },
  {
    icon: MessagesSquare,
    label: "Clear partnership",
    description:
      "Tradeoffs are explained in business terms, decisions stay visible, and progress never depends on guesswork.",
  },
];

const About = forwardRef<HTMLElement>((_props, ref) => {
  const { ref: revealRef, isVisible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <section
      ref={ref}
      id="about"
      className="relative overflow-hidden bg-[#0c0c0c] py-24 text-white md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_18%,rgba(182,0,168,0.18),transparent_28%),radial-gradient(circle_at_92%_84%,rgba(190,76,0,0.14),transparent_24%)]"
      />
      <Helmet>
        <title>About Hammad Tariq | SaaS &amp; AI Engineer</title>
        <meta name="description" content="Meet Hammad Tariq, a senior full-stack engineer with 10+ years building SaaS products, AI systems, and reliable software for startups and enterprise teams." />
        <meta property="og:title" content="About Hammad Tariq | SaaS &amp; AI Engineer" />
        <meta property="og:description" content="Meet Hammad Tariq, a senior full-stack engineer with 10+ years building SaaS products, AI systems, and reliable software for startups and enterprise teams." />
        <meta property="og:image" content="/profile-dp.webp" />
        <meta property="og:url" content="https://tariqhammad.com#about" />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Hammad Tariq | SaaS &amp; AI Engineer" />
        <meta name="twitter:description" content="Meet Hammad Tariq, a senior full-stack engineer with 10+ years building SaaS products, AI systems, and reliable software for startups and enterprise teams." />
        <meta name="twitter:image" content="/profile-dp.webp" />
      </Helmet>
      <div className="container relative mx-auto px-4">
        <div
          ref={revealRef}
          className={`grid items-start gap-10 transition-all duration-700 ease-out lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
              {capabilities.map(({ icon: Icon, label, description }) => (
                <div key={label} className="flex items-start gap-4 border-b border-white/10 p-5 last:border-b-0">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white/15 bg-white/10 text-fuchsia-200">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{label}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/[0.055] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] md:p-9">
            <p className="mb-4 text-sm font-medium text-fuchsia-200">About</p>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Senior engineering without the handoff gaps
            </h2>
            <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-white/75">
              I’m Hammad Tariq, a full-stack JavaScript and TypeScript engineer
              with <strong className="text-white">10+ years</strong> of experience
              turning product ideas, unstable prototypes, and growing software
              into dependable systems. My work spans{" "}
              <strong className="text-white">ground-up SaaS products</strong>,{" "}
              <strong className="text-white">AI systems</strong>, and difficult{" "}
              <strong className="text-white">product rescue</strong> for
              founder-led companies and enterprise teams including Macy’s, Gap,
              Williams-Sonoma, and Prologis.
            </p>
            <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-white/75">
              I work as an engineering partner, not a ticket taker. That means
              challenging unclear scope, explaining technical tradeoffs in plain
              business language, and staying accountable from architecture and
              implementation through launch.
            </p>
            <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-white/75">
              If you have a product to build or a difficult system to untangle,
              tell me where it stands and what needs to change.{" "}
              <a
                href="https://wa.me/923312627056"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-fuchsia-200 underline decoration-fuchsia-400/60 underline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Reach out on WhatsApp
              </a>{" "}
              or{" "}
              <a
                href="https://calendly.com/hammadtariq65"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-fuchsia-200 underline decoration-fuchsia-400/60 underline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Book a free consultation
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";
export default About;
