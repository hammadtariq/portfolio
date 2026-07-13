import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import About from "./About";

vi.mock("../hooks/useRevealOnScroll", () => ({
  useRevealOnScroll: () => ({ ref: vi.fn(), isVisible: true }),
}));

describe("About", () => {
  it("keeps the profile content beneath the refreshed heading", () => {
    render(<About />);

    expect(
      screen.getByRole("heading", {
        name: "A product-minded engineering partner",
      }),
    ).toBeVisible();
    expect(
      screen.getByRole("link", { name: "Reach out on WhatsApp" }),
    ).toBeVisible();
  });
});
