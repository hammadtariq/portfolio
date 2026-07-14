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
  it("renders project cards immediately without scroll-reveal wrappers", () => {
    const { container } = render(<Projects />);

    const interactiveCards = container.querySelectorAll(".project-card");

    expect(container.querySelectorAll(".project-reveal")).toHaveLength(0);
    expect(interactiveCards).toHaveLength(7);
  });

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
        name: "AI Agent on a Live Inventory System | Claude MCP Chatbot + Analytics",
      }),
    ).toBeVisible();
  });

  it("renders the full approved Upwork case-study lineup", () => {
    render(<Projects />);

    fireEvent.click(
      screen.getByRole("button", { name: /Show 5 more projects/ }),
    );

    expect(
      screen.getByRole("heading", {
        name: "AI Document Extraction from Engineering Drawings | Computer Vision",
      }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", {
        name: "Audio Timeline Editor with Live Collaboration | React",
      }),
    ).toBeVisible();
    expect(screen.queryByText("NFT Marketplace")).not.toBeInTheDocument();
  });
});
