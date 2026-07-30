import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Skills from "./Skills";

describe("Skills", () => {
  it("groups the full stack into four dark capability pillars", () => {
    render(<Skills />);

    expect(
      screen.getByRole("region", { name: "The stack behind the work" }),
    ).toHaveClass("bg-[#0c0c0c]");
    expect(
      screen.getByRole("heading", { name: "The stack behind the work" }),
    ).toBeVisible();
    for (const name of [
      "Product interfaces",
      "Backend and data systems",
      "Cloud and delivery",
      "Emerging platforms",
    ]) {
      expect(screen.getByRole("heading", { name })).toBeVisible();
    }
    expect(screen.getByText("React")).toBeVisible();
    expect(screen.getByText("AWS Lambda")).toBeVisible();
    expect(screen.getByText("Ethereum")).toBeVisible();
    expect(
      screen
        .getByRole("heading", { name: "Product interfaces" })
        .closest(".grid"),
    ).not.toHaveClass("opacity-0");
  });
});
