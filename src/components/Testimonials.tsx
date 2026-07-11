import { ChevronDown, Quote } from "lucide-react";
import { forwardRef } from "react";
import LazyLoadImg from "./LazyLoadImg";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  excerpt: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Matthew Johnson",
    role: "Product Owner",
    company: "Macys",
    excerpt:
      "Hammad asks the right questions and delivers complex functionality against tight deadlines.",
    content:
      "Hammad was wonderful to work with and provided critical value to the project for which I was the product manager - a Self Checkout application for Macy's customers. He is thorough, asks the right questions, and works collaboratively with team leads, other developers, and QEs to deliver complex functionality against tight deadlines. Do not hesitate to bring Hammad on board to any project!",
    avatar: "/matthew1.webp",
  },
  {
    name: "Taylor Saven",
    role: "Engineering Lead",
    company: "Macys",
    excerpt:
      "He became a go-to UI expert and mentor while helping make self-checkout successful.",
    content:
      "I worked with Hammad for over a year during the development of self-checkout for Macy’s. He was a key engineer in the success of that project. He established himself as a go-to subject expert in the area of UI design and development. He has a high level of experience in single-page apps, React, various JavaScript frameworks, CSS, and other web technologies. He worked well with all members of the team and became a mentor to others, sharing his knowledge and experience. He was timely and accurate with the delivery of everything he worked on. It was great to partner with him on the project.",
    avatar: "/taylor1.webp",
  },
  {
    name: "Kyle Sebrasky",
    role: "Sr. Cloud Applications Developer",
    company: "Sherwin-Williams",
    excerpt:
      "His React knowledge raised our practices and helped the team solve difficult problems.",
    content:
      "I have worked with Hammad for about 2 years on 2 separate projects. Hammad continuously drives for results and goes out of his way to research issues. His knowledge in React exceeded our own, and he was able to teach the team the best practices and coding patterns. His ability to troubleshoot and problem-solve is top-notch. Hammad was an asset to my team, and we would not have been as successful without him.",
    avatar: "/kyle1.webp",
  },
  {
    name: "Gene Plaks",
    role: "Sr. Technical Project Manager",
    company: "RVO Health",
    excerpt:
      "A reliable programmer and team player who works confidently across distributed teams.",
    content:
      "Hammad would make an excellent addition to any software development team. He is a hard worker, an excellent programmer, and, perhaps most importantly, a team player. Hammad is also well-versed in the Scrum methodology and can confidently be relied on by overseas teams. I wholeheartedly recommend him!",
    avatar: "/gene1.webp",
  },
  {
    name: "Kamran Hamid",
    role: "Technical Lead",
    company: "Prog Stream",
    excerpt:
      "His proactive communication brought alignment to a complex project and helped mentor the team.",
    content:
      "Hammad was instrumental in delivering high-quality solutions on our complex project, showcasing exceptional skills in the JavaScript stack and problem-solving. His proactive approach and effective communication ensured alignment among all stakeholders. He went above and beyond to mentor junior team members and consistently exceeded expectations. Hammad is a reliable and talented engineer who would be a tremendous asset to any team.",
    avatar: "/kamran1.webp",
  },
  {
    name: "Zakir Mehmood",
    role: "Software Architect",
    company: "VentureDive",
    excerpt:
      "A dedicated full-stack developer who keeps sharpening his craft with changing technology.",
    content:
      "Hammad is a dedicated, hardworking, and valuable resource in full-stack development. He keeps refining his skills by staying current with the latest trends. I wish him all the best for his future endeavors.",
    avatar: "/zakir1.webp",
  },
];

function Person({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex items-center gap-3">
      <LazyLoadImg
        src={testimonial.avatar}
        alt={testimonial.name}
        classNames="h-12 w-12 rounded-full object-cover ring-1 ring-white/20"
      />
      <div>
        <h3 className="font-semibold text-white">{testimonial.name}</h3>
        <p className="text-sm text-slate-300">
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </div>
  );
}

function FullQuote({ testimonial }: { testimonial: Testimonial }) {
  return (
    <details className="group mt-5 border-t border-white/10 pt-4 text-sm text-slate-300">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-medium text-blue-200 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
        Read full recommendation
        <ChevronDown
          size={16}
          className="shrink-0 transition-transform duration-300 group-open:rotate-180 motion-reduce:transition-none"
        />
      </summary>
      <p className="mt-4 leading-relaxed">{testimonial.content}</p>
    </details>
  );
}

const Testimonials = forwardRef<HTMLElement>((_props, ref) => {
  const [featured, ...supportingTestimonials] = testimonials;

  return (
    <section
      id="testimonial"
      ref={ref}
      className="relative overflow-hidden bg-gray-950 py-24 text-white sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(37,99,235,0.3),transparent_28%),radial-gradient(circle_at_88%_76%,rgba(14,165,233,0.14),transparent_24%)]"
      />
      <div className="container relative mx-auto px-4">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium text-blue-200">Testimonials</p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Trusted by teams that ship
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            Long-term collaborators value the care behind the code, not just the delivery date.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-5 lg:grid-cols-12 lg:gap-6">
          <article className="testimonial-glass relative self-start overflow-hidden rounded-[2rem] p-6 motion-safe:transition motion-safe:duration-500 motion-safe:hover:-translate-y-1 lg:col-span-7 lg:p-9">
            <Quote className="absolute right-7 top-7 text-blue-300/30" size={56} strokeWidth={1.25} aria-hidden="true" />
            <div className="relative flex min-h-full flex-col justify-between gap-10">
              <blockquote className="max-w-2xl text-2xl font-medium leading-snug tracking-tight text-white md:text-3xl">
                “{featured.excerpt}”
              </blockquote>
              <div>
                <Person testimonial={featured} />
                <FullQuote testimonial={featured} />
              </div>
            </div>
          </article>

          <div className="grid items-start gap-5 md:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:gap-6">
            {supportingTestimonials.slice(0, 2).map((testimonial) => (
              <article
                key={testimonial.name}
                className="testimonial-glass self-start rounded-[2rem] p-6 motion-safe:transition motion-safe:duration-500 motion-safe:hover:-translate-y-1"
              >
                <blockquote className="text-lg font-medium leading-relaxed text-white">
                  “{testimonial.excerpt}”
                </blockquote>
                <div className="mt-7">
                  <Person testimonial={testimonial} />
                  <FullQuote testimonial={testimonial} />
                </div>
              </article>
            ))}
          </div>

          <div className="grid items-start gap-5 md:grid-cols-3 lg:col-span-12 lg:gap-6">
            {supportingTestimonials.slice(2).map((testimonial) => (
              <article
                key={testimonial.name}
                className="testimonial-glass self-start rounded-[2rem] p-6 motion-safe:transition motion-safe:duration-500 motion-safe:hover:-translate-y-1"
              >
                <blockquote className="text-lg font-medium leading-relaxed text-white">
                  “{testimonial.excerpt}”
                </blockquote>
                <div className="mt-7">
                  <Person testimonial={testimonial} />
                  <FullQuote testimonial={testimonial} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = "Testimonials";

export default Testimonials;
