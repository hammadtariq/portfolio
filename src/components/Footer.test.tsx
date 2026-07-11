import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
  it("ends the page with a contact action and social links", () => {
    render(<Footer />);

    expect(
      screen.getByRole("heading", { name: "Have a product worth shipping?" }),
    ).toBeVisible();
    expect(
      screen.getByRole("link", { name: "Start a conversation" }),
    ).toHaveAttribute("href", "mailto:hammadtariq65@gmail.com");
    expect(screen.getByRole("contentinfo")).toHaveAttribute("id", "contact");
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/hammadtariq",
    );
  });
});
