import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Services from "./Services";

const packageNames = [
  "Custom SaaS Product Build",
  "Vibe-Coded App Rescue",
  "SaaS Scale & Performance",
  "Custom RAG & AI Agent",
  "Business Workflow Automation & Integration",
];

const approvedPrices = ["$3,500", "$1,500", "$2,500", "$3,000", "$1,000"];

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

    articles.forEach((article, index) => {
      expect(
        within(article).getByRole("button", {
          name: `View details for ${packageNames[index]}`,
        }),
      ).toHaveAttribute("aria-expanded", "false");
      expect(
        within(article).queryByText(/^Best for:/),
      ).not.toBeInTheDocument();
      expect(
        within(article).queryByText(/^Boundary:/),
      ).not.toBeInTheDocument();
    });
  });

  it("keeps only one package detail panel open at a time", () => {
    render(<Services />);

    const saasToggle = screen.getByRole("button", {
      name: "View details for Custom SaaS Product Build",
    });
    const rescueToggle = screen.getByRole("button", {
      name: "View details for Vibe-Coded App Rescue",
    });

    fireEvent.click(saasToggle);
    expect(saasToggle).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByText(/Founders starting a new SaaS product/),
    ).toBeVisible();

    fireEvent.click(rescueToggle);
    expect(saasToggle).toHaveAttribute("aria-expanded", "false");
    expect(rescueToggle).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.queryByText(/Founders starting a new SaaS product/),
    ).not.toBeInTheDocument();
    expect(screen.getByText(/Lovable, Cursor, Replit/)).toBeVisible();

    fireEvent.click(rescueToggle);
    expect(rescueToggle).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.queryByText(/Lovable, Cursor, Replit/),
    ).not.toBeInTheDocument();
  });

  it("allows only the selected package card to grow", () => {
    const { container } = render(<Services />);

    const articles = within(
      container.querySelector("#services") as HTMLElement,
    ).getAllByRole("article");
    const gallery = articles[0].parentElement;

    expect(gallery).toHaveClass("items-start");
    expect(gallery).not.toHaveClass("lg:grid-rows-2");
    articles.forEach((article) => expect(article).not.toHaveClass("h-full"));
    expect(articles[0]).toHaveClass("lg:min-h-[39.5rem]");
    expect(articles[0]).not.toHaveClass("lg:self-stretch");
    articles.slice(1).forEach((article) =>
      expect(article).toHaveClass("md:min-h-[19.25rem]"),
    );
  });

  it("uses the portfolio blue-slate surface for the featured package", () => {
    render(<Services />);

    const featuredPackage = screen
      .getByRole("heading", { name: "Custom SaaS Product Build" })
      .closest("article");

    expect(featuredPackage).toHaveClass("bg-[#0f172a]");
    expect(featuredPackage).not.toHaveClass("bg-[#090909]");
  });

  it("gives every package a contextual discovery action", () => {
    render(<Services />);

    packageNames.forEach((packageName) => {
      const action = screen.getByRole("link", {
        name: `Discuss ${packageName}`,
      });
      const expectedSubject = encodeURIComponent(
        `Portfolio inquiry: ${packageName}`,
      );

      expect(action).toHaveAttribute(
        "href",
        `mailto:hammadtariq65@gmail.com?subject=${expectedSubject}`,
      );
    });
  });

  it("shows approved starting prices and the flexible hourly option", () => {
    render(<Services />);

    screen.getAllByRole("article").forEach((article, index) =>
      expect(within(article).getByText(approvedPrices[index])).toBeVisible(),
    );
    expect(screen.getByText("$45/hour")).toBeVisible();
    expect(
      screen.getByText(/third-party services and API usage/i),
    ).toBeVisible();
    expect(
      screen.getByRole("link", { name: "Discuss hourly support" }),
    ).toHaveAttribute(
      "href",
      `mailto:hammadtariq65@gmail.com?subject=${encodeURIComponent(
        "Portfolio inquiry: Hourly senior support",
      )}`,
    );
  });
});
