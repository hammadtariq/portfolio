import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ContactCTA from "./ContactCTA";

vi.mock("./Calendly", () => ({
  default: ({ label }: { label: string }) => <button>{label}</button>,
}));

describe("ContactCTA", () => {
  it("offers booking and direct email as clear next steps", () => {
    render(<ContactCTA />);

    expect(screen.getByRole("heading", { name: "Bring me the hard part." })).toBeVisible();
    expect(screen.getByRole("button", { name: "Book a free consultation" })).toBeVisible();
    expect(screen.getByRole("link", { name: /Email me instead/ })).toHaveAttribute(
      "href",
      "mailto:hammadtariq65@gmail.com",
    );
  });
});
