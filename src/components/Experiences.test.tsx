import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Experiences from "./Experiences";

describe("Experiences", () => {
  it("renders career history on the dark portfolio canvas", () => {
    render(
      <Experiences
        experiences={[
          {
            startDate: "2023",
            title: "Technical Lead",
            companyName: "Talpods",
            companyLocation: "Remote",
            positions: [
              {
                startDate: "2021",
                endDate: "2023",
                title: "Senior Engineer",
              },
            ],
          },
        ]}
      />,
    );

    expect(
      screen.getByRole("region", { name: "Career built in the details" }),
    ).toHaveClass("bg-[#0c0c0c]");
    expect(
      screen.getByRole("heading", { name: "Career built in the details" }),
    ).toBeVisible();
    expect(
      screen.getByRole("heading", { name: "Technical Lead" }),
    ).toBeVisible();
    expect(screen.getByText("2023 - Present")).toBeVisible();
    expect(screen.getByText("Senior Engineer")).toBeVisible();
    expect(
      screen
        .getByRole("heading", { name: "Technical Lead" })
        .closest(".relative.mt-16"),
    ).not.toHaveClass("opacity-0");
  });

  it("renders nothing when there is no career history", () => {
    const { container } = render(<Experiences experiences={[]} />);

    expect(container).toBeEmptyDOMElement();
  });
});
