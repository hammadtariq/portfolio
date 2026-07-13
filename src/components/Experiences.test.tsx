import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Experiences from "./Experiences";

vi.mock("../hooks/useRevealOnScroll", () => ({
  useRevealOnScroll: () => ({ ref: vi.fn(), isVisible: true }),
}));

describe("Experiences", () => {
  it("renders the refined career heading", () => {
    render(
      <Experiences
        experiences={[
          {
            startDate: "2023",
            title: "Technical Lead",
            companyName: "Talpods",
            companyLocation: "Remote",
          },
        ]}
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Career built in the details" }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", { name: "Technical Lead" }),
    ).toBeVisible();
  });
});
