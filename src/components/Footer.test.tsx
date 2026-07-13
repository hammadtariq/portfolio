import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
  it("ends the page with identity, social links, and a back-to-top action", () => {
    render(<Footer />);

    expect(screen.getByRole("contentinfo")).toBeVisible();
    expect(screen.getByRole("link", { name: "Hammad Tariq" })).toHaveAttribute("href", "#hero");
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/hammadtariq",
    );
    expect(screen.getByRole("link", { name: "Back to top" })).toHaveAttribute("href", "#hero");
  });
});
