import React, { forwardRef, Suspense } from "react";
import { Helmet } from "react-helmet";
import { Code, Smartphone, Server } from "lucide-react";
const Media = React.lazy(() => import("./Media"));
const About = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section ref={ref} id="about" className="py-20 bg-white">
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
        {/* Profile Section */}
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <Media />
        </Suspense>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Code size={48} className="mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p>
              Expertise in <strong>React</strong>, <strong>Angular</strong>,{" "}
              <strong>NextJS</strong> and modern JavaScript frameworks.
            </p>
          </div>
          <div className="text-center">
            <Smartphone size={48} className="mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
            <p>
              Creating Hybrid and Native mobile applications using{" "}
              <strong>React Native</strong> and <strong>Ionic</strong>.
            </p>
          </div>
          <div className="text-center">
            <Server size={48} className="mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Backend & Cloud</h3>
            <p>
              Proficient in <strong>NodeJS</strong> and{" "}
              <strong>AWS Cloud Services</strong>.
            </p>
          </div>
        </div>

        <p className="mt-12 text-lg text-center max-w-5xl mx-auto">
          Struggling to find a <strong>full stack developer</strong> who truly
          understands your vision? with over <strong>10 years</strong> of
          expertise in the
          <strong> Javascript </strong>ecosystem? I’ve delivered scalable web
          applications and enterprise solutions for <strong>Fortune 500</strong>{" "}
          companies like <strong>Macy’s</strong>, <strong>Gap</strong>,{" "}
          <strong>Williams-Sonoma</strong>, and <strong>Prologis</strong>,
          building scalable, high-performance systems designed to meet diverse
          business needs. Let’s bring your ideas to life with solutions tailored
          to your unique goals.
          <br />
          <br />
          My focus on seamless communication, attention to detail, and
          results-driven development guarantees a stress-free experience from
          start to finish.
          <br />
          <br />
          Explore my portfolio for a glimpse into my work. Ready to discuss your
          project?{" "}
          <a
            href="https://wa.me/923312627056"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Reach out on WhatsApp
          </a>{" "}
          for a custom order or schedule a{" "}
          <a
            href="https://calendly.com/hammadtariq65"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            free video consultation
          </a>{" "}
          today!
        </p>
      </div>
    </section>
  );
});

About.displayName = "About";
export default About;
