import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ScheduleCall from "./Calendly";

describe("ScheduleCall", () => {
  it("uses its supplied accessible label", () => {
    render(<ScheduleCall label="Book a call" />);

    expect(screen.getByRole("button", { name: "Book a call" })).toBeVisible();
  });
});
