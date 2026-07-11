import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Testimonials from "./Testimonials";

vi.mock("./LazyLoadImg", () => ({
  default: ({ alt }: { alt: string }) => <img alt={alt} src="/avatar.webp" />,
}));

describe("Testimonials", () => {
  it("renders a featured recommendation and original quote disclosures", () => {
    render(<Testimonials />);

    expect(
      screen.getByRole("heading", { name: "Trusted by teams that ship" }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", { name: "Matthew Johnson" }),
    ).toBeVisible();
    expect(screen.getAllByText("Read full recommendation")).toHaveLength(6);
  });
});
