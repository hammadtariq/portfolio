import { forwardRef } from "react";
import { Helmet } from "react-helmet";
import { Code, Smartphone, Server } from "lucide-react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const capabilities = [
  {
    icon: Code,
    label: "Web Development",
    description:
      "Expertise in React, Angular, NextJS and modern JavaScript frameworks.",
  },
  {
    icon: Smartphone,
    label: "Mobile Development",
    description:
      "Creating hybrid and native mobile applications using React Native and Ionic.",
  },
  {
    icon: Server,
    label: "Backend & Cloud",
    description: "Proficient in NodeJS and AWS Cloud Services.",
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
        <title>About Me | Hammad Tariq - Full Stack Developer</title>
        <meta name="description" content="Learn about Hammad Tariq, a Full Stack Developer with over 10 years of experience in the web and mobile development industry." />
        <meta property="og:title" content="About Me | Hammad Tariq - Full Stack Developer" />
        <meta property="og:description" content="Learn about Hammad Tariq, a Full Stack Developer with over 10 years of experience in the web and mobile development industry." />
        <meta property="og:image" content="/profile-dp.webp" />
        <meta property="og:url" content="https://tariqhammad.com#about" />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Me | Hammad Tariq - Full Stack Developer" />
        <meta name="twitter:description" content="Learn about Hammad Tariq, a Full Stack Developer with over 10 years of experience in the web and mobile development industry." />
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
              A product-minded engineering partner
            </h2>
            <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-white/75">
              Struggling to find a <strong className="text-white">full stack developer</strong> who truly
              understands your vision? with over <strong className="text-white">10 years</strong> of
              expertise in the <strong className="text-white">Javascript</strong> ecosystem? I’ve delivered
              scalable web applications and enterprise solutions for{" "}
              <strong className="text-white">Fortune 500</strong> companies like{" "}
              <strong className="text-white">Macy’s</strong>, <strong className="text-white">Gap</strong>,{" "}
              <strong className="text-white">Williams-Sonoma</strong>, and{" "}
              <strong className="text-white">Prologis</strong>, building scalable, high-performance systems
              designed to meet diverse business needs. Let’s bring your ideas to life with solutions tailored
              to your unique goals.
            </p>
            <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-white/75">
              My focus on seamless communication, attention to detail, and results-driven development
              guarantees a stress-free experience from start to finish.
            </p>
            <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-white/75">
              Explore my portfolio for a glimpse into my work. Ready to discuss your project?{" "}
              <a
                href="https://wa.me/923312627056"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-fuchsia-200 underline decoration-fuchsia-400/60 underline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Reach out on WhatsApp
              </a>{" "}
              for a custom order or schedule a{" "}
              <a
                href="https://calendly.com/hammadtariq65"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-fuchsia-200 underline decoration-fuchsia-400/60 underline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                free video consultation
              </a>{" "}
              today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";
export default About;
