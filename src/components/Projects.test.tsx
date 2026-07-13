import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Projects from "./Projects";

vi.mock("./LazyLoadImg", () => ({
  default: ({ alt }: { alt: string }) => <img alt={alt} src="/project.webp" />,
}));

vi.mock("../hooks/useRevealOnScroll", () => ({
  useRevealOnScroll: () => ({ ref: vi.fn(), isVisible: true }),
}));

describe("Projects", () => {
  it("opens the featured project detail dialog", () => {
    render(<Projects />);

    expect(
      screen.getByRole("heading", { name: "Selected product work" }),
    ).toBeVisible();
    fireEvent.click(screen.getAllByRole("button", { name: "Details" })[0]);
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeVisible();
    expect(
      within(dialog).getByRole("heading", {
        name: "Hospitality Inn - QR Menu Service",
      }),
    ).toBeVisible();
  });
});
