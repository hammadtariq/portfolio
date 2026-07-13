import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Services from "./Services";

describe("Services", () => {
  it("presents the three core engagement paths", () => {
    render(<Services />);

    expect(screen.getByRole("heading", { name: "Engineering where it matters most." })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Build the product" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Add useful AI" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Rescue what is stuck" })).toBeVisible();
  });
});
