import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Services from "./Services";

const packageNames = [
  "Custom SaaS Product Build",
  "Vibe-Coded App Rescue",
  "SaaS Scale & Performance",
  "Custom RAG & AI Agent",
  "Business Workflow Automation & Integration",
];

describe("Services", () => {
  it("renders the five distinct packages in the approved order", () => {
    const { container } = render(<Services />);

    const section = container.querySelector("#services");
    expect(section).toBeInTheDocument();

    const articles = within(section as HTMLElement).getAllByRole("article");
    expect(articles).toHaveLength(5);
    expect(
      articles.map((article) =>
        within(article).getByRole("heading", { level: 3 }).textContent,
      ),
    ).toEqual(packageNames);

    articles.forEach((article) => {
      expect(within(article).getByText(/^Best for:/)).toBeVisible();
      expect(within(article).getByText(/^Outcome:/)).toBeVisible();
      expect(within(article).getByText(/^Boundary:/)).toBeVisible();
      expect(within(article).getAllByRole("listitem")).toHaveLength(3);
    });
  });
});
