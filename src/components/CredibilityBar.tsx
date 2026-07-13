import { ArrowUpRight } from "lucide-react";

const companies = ["Macy’s", "GAP", "Williams-Sonoma", "Prologis"];

export default function CredibilityBar() {
  return (
    <section
      id="credibility"
      aria-label="Selected client credibility"
      className="border-y border-white/10 bg-[#0c0c0c] text-white"
    >
      <div className="container mx-auto grid gap-8 px-4 py-9 md:grid-cols-[0.9fr_1.4fr_auto] md:items-center md:py-11">
        <div>
          <p className="text-sm font-medium text-slate-400">Trusted in production</p>
          <p className="mt-1 text-lg font-semibold text-white">From Fortune 500 teams to founder-led products.</p>
        </div>

        <ul className="flex flex-wrap items-center gap-x-7 gap-y-4" aria-label="Companies">
          {companies.map((company) => (
            <li key={company} className="text-base font-bold tracking-tight text-slate-300 sm:text-lg">
              {company}
            </li>
          ))}
        </ul>

        <a
          href="#testimonial"
          className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Read recommendations
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
