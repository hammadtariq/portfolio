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
    <section ref={ref} id="about" className="py-24 md:py-32 bg-white">
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
      <div className="container mx-auto px-4">
        <div
          ref={revealRef}
          className={`grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="lg:sticky lg:top-28">
            <div className="rounded-3xl border border-gray-200 divide-y divide-gray-100">
              {capabilities.map(({ icon: Icon, label, description }) => (
                <div key={label} className="flex items-start gap-4 p-5">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-950">{label}</h3>
                    <p className="mt-1 text-sm text-gray-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
              About Me
            </h2>
            <p className="max-w-[65ch] text-lg leading-relaxed text-gray-600">
              Struggling to find a <strong className="text-gray-950">full stack developer</strong> who truly
              understands your vision? with over <strong className="text-gray-950">10 years</strong> of
              expertise in the <strong className="text-gray-950">Javascript</strong> ecosystem? I’ve delivered
              scalable web applications and enterprise solutions for{" "}
              <strong className="text-gray-950">Fortune 500</strong> companies like{" "}
              <strong className="text-gray-950">Macy’s</strong>, <strong className="text-gray-950">Gap</strong>,{" "}
              <strong className="text-gray-950">Williams-Sonoma</strong>, and{" "}
              <strong className="text-gray-950">Prologis</strong>, building scalable, high-performance systems
              designed to meet diverse business needs. Let’s bring your ideas to life with solutions tailored
              to your unique goals.
            </p>
            <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-gray-600">
              My focus on seamless communication, attention to detail, and results-driven development
              guarantees a stress-free experience from start to finish.
            </p>
            <p className="mt-6 max-w-[65ch] text-lg leading-relaxed text-gray-600">
              Explore my portfolio for a glimpse into my work. Ready to discuss your project?{" "}
              <a
                href="https://wa.me/923312627056"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 underline-offset-4 hover:underline"
              >
                Reach out on WhatsApp
              </a>{" "}
              for a custom order or schedule a{" "}
              <a
                href="https://calendly.com/hammadtariq65"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 underline-offset-4 hover:underline"
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
