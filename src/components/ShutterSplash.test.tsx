import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import ShutterSplash from "./ShutterSplash";

describe("ShutterSplash", () => {
  afterEach(() => {
    vi.useRealTimers();
    document.documentElement.style.overflow = "";
    document.documentElement.style.scrollbarGutter = "";
  });

  it("covers the page with two panels and locks scrolling initially", () => {
    render(<ShutterSplash />);

    expect(screen.getByTestId("shutter-splash")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
    expect(screen.getAllByTestId("shutter-panel")).toHaveLength(2);
    expect(screen.getByTestId("shutter-exposure")).toBeInTheDocument();
    expect(document.documentElement.style.overflow).toBe("hidden");
    expect(document.documentElement.style.scrollbarGutter).toBe("stable");
  });

  it("removes itself and restores scrolling when the animation completes", () => {
    render(<ShutterSplash />);

    fireEvent.animationEnd(screen.getByTestId("shutter-splash"));

    expect(screen.queryByTestId("shutter-splash")).not.toBeInTheDocument();
    expect(document.documentElement.style.overflow).toBe("");
    expect(document.documentElement.style.scrollbarGutter).toBe("");
  });

  it("removes itself if the animation completion event is missed", () => {
    vi.useFakeTimers();
    render(<ShutterSplash />);

    act(() => {
      vi.advanceTimersByTime(1150);
    });

    expect(screen.getByTestId("shutter-splash")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(screen.queryByTestId("shutter-splash")).not.toBeInTheDocument();
    expect(document.documentElement.style.overflow).toBe("");
  });

  it("restores the previous overflow style when unmounted early", () => {
    document.documentElement.style.overflow = "auto";
    document.documentElement.style.scrollbarGutter = "stable both-edges";
    const { unmount } = render(<ShutterSplash />);

    unmount();

    expect(document.documentElement.style.overflow).toBe("auto");
    expect(document.documentElement.style.scrollbarGutter).toBe(
      "stable both-edges",
    );
  });
});
