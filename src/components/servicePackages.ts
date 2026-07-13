export interface ServicePackage {
  name: string;
  startingPrice: string;
  bestFor: string;
  outcome: string;
  included: readonly [string, string, string];
  boundary: string;
}

export const servicePackages = [
  {
    name: "Custom SaaS Product Build",
    startingPrice: "$12,000",
    bestFor:
      "Founders starting a new SaaS product who need a senior technical partner from scope through launch.",
    outcome:
      "A focused, production-ready SaaS foundation with the essential user journey and a maintainable path for future features.",
    included: [
      "Product scope and architecture",
      "Frontend, backend, accounts, and core workflows",
      "Payments, deployment, and technical handover",
    ],
    boundary:
      "For new products; repairing or scaling an existing application belongs in a dedicated package.",
  },
  {
    name: "Vibe-Coded App Rescue",
    startingPrice: "$2,500",
    bestFor:
      "Founders whose Lovable, Cursor, Replit, Base44, or Claude-built prototype is unstable, unsafe, or blocked from launch.",
    outcome:
      "A safer, more reliable application with business-critical risks diagnosed and addressed in priority order.",
    included: [
      "Code, workflow, security, and deployment audit",
      "Critical authentication, payment, session, and reliability fixes",
      "Production-readiness testing and remaining-risk roadmap",
    ],
    boundary:
      "Stabilizes the current product; it does not provide major growth architecture or build a new product.",
  },
  {
    name: "SaaS Scale & Performance",
    startingPrice: "$3,500",
    bestFor:
      "Teams with a stable, live SaaS product that is becoming slow, fragile, expensive, or difficult to extend as usage grows.",
    outcome:
      "A faster, more observable, and more maintainable system prepared for the product's next growth stage.",
    included: [
      "Performance, database, and architecture diagnosis",
      "Queue, upload, data-processing, and cloud improvements",
      "Monitoring and maintainability recommendations",
    ],
    boundary:
      "Assumes a working product; critical rescue and production-hardening work must happen first.",
  },
  {
    name: "Custom RAG & AI Agent",
    startingPrice: "$4,500",
    bestFor:
      "Businesses that need an intelligent assistant grounded in documents, listings, operational data, or approved tools.",
    outcome:
      "A grounded AI assistant that returns useful answers or actions within clearly defined safety boundaries.",
    included: [
      "RAG, semantic search, live-data, or tool connectivity",
      "Agent workflows, source grounding, and permission controls",
      "Chat interface, logging, evaluation, and guardrails",
    ],
    boundary:
      "The intelligent agent is the central capability; general system automation belongs in the workflow package.",
  },
  {
    name: "Business Workflow Automation & Integration",
    startingPrice: "$2,000",
    bestFor:
      "Businesses whose staff repeatedly move information between forms, email, spreadsheets, CRMs, payments, and admin tools.",
    outcome:
      "A reliable connected workflow that reduces manual work, missed follow-ups, and data-entry errors.",
    included: [
      "Workflow mapping, APIs, and webhook integrations",
      "Automation logic, notifications, and admin controls",
      "Logging, retries, deployment, and operational handover",
    ],
    boundary:
      "Automates an existing process; it does not build a full SaaS platform or a knowledge-based AI agent.",
  },
] as const satisfies readonly ServicePackage[];
