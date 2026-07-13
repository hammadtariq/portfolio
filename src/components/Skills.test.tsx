import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Skills from "./Skills";

vi.mock("./TechStack", () => ({
  default: ({ tech }: { tech: string }) => <span>{tech}</span>,
}));

vi.mock("../hooks/useRevealOnScroll", () => ({
  useRevealOnScroll: () => ({ ref: vi.fn(), isVisible: true }),
}));

describe("Skills", () => {
  it("groups the stack beneath the new capability heading", () => {
    render(<Skills />);

    expect(
      screen.getByRole("heading", { name: "The stack behind the work" }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", { name: "Programming Languages" }),
    ).toBeVisible();
    expect(screen.getByText("React")).toBeVisible();
  });
});
