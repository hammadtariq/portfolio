import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import About from "./About";

vi.mock("../hooks/useRevealOnScroll", () => ({
  useRevealOnScroll: () => ({ ref: vi.fn(), isVisible: true }),
}));

describe("About", () => {
  it("positions Hammad as a senior product engineering partner", () => {
    render(<About />);

    expect(
      screen.getByRole("heading", {
        name: "Senior engineering without the handoff gaps",
      }),
    ).toBeVisible();

    ["Product judgment", "Senior ownership", "Clear partnership"].forEach(
      (name) =>
        expect(screen.getByRole("heading", { name, level: 3 })).toBeVisible(),
    );

    expect(screen.getByText(/SaaS products/i)).toBeVisible();
    expect(screen.getByText(/AI systems/i)).toBeVisible();
    expect(screen.getByText(/product rescue/i)).toBeVisible();
    expect(screen.getByText(/10\+ years/i)).toBeVisible();
    expect(
      screen.getByRole("link", { name: "Reach out on WhatsApp" }),
    ).toBeVisible();
    expect(
      screen.getByRole("link", { name: "Book a free consultation" }),
    ).toBeVisible();
  });
});
