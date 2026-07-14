import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Media from "./Media";

class MockIntersectionObserver implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = "";
  readonly thresholds: ReadonlyArray<number> = [];
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn(() => []);
}

// jsdom in this project's version doesn't implement <dialog> at all (it
// parses as HTMLUnknownElement), so showModal/close need a minimal polyfill
// to exercise the native open/close behavior Media.tsx relies on.
if (!("showModal" in HTMLElement.prototype)) {
  Object.defineProperties(HTMLElement.prototype, {
    open: {
      configurable: true,
      get(this: HTMLElement) {
        return this.hasAttribute("open");
      },
      set(this: HTMLElement, value: boolean) {
        if (value) this.setAttribute("open", "");
        else this.removeAttribute("open");
      },
    },
    showModal: {
      configurable: true,
      value(this: HTMLElement) {
        this.setAttribute("open", "");
      },
    },
    close: {
      configurable: true,
      value(this: HTMLElement) {
        this.removeAttribute("open");
        this.dispatchEvent(new Event("close"));
      },
    },
  });
}

beforeEach(() => {
  vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
});

describe("Media", () => {
  it("opens the intro video dialog when the play trigger is clicked", () => {
    render(<Media />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Play intro video" }));

    const dialog = screen.getByRole("dialog", {
      name: "Hammad Tariq's intro video",
    });
    expect(dialog).toBeVisible();
  });

  it("closes the dialog via the close button and restores it to closed state", () => {
    render(<Media />);

    fireEvent.click(screen.getByRole("button", { name: "Play intro video" }));
    expect(screen.getByRole("dialog")).toBeVisible();

    fireEvent.click(screen.getByRole("button", { name: "Close video" }));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
