import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { forwardRef } from "react";
import App from "./App";

vi.mock("react-helmet", () => ({ Helmet: ({ children }: { children: React.ReactNode }) => <>{children}</> }));
vi.mock("./components/Header", () => ({ default: () => <header /> }));
vi.mock("./components/Hero", () => ({ default: () => <section id="hero" /> }));
vi.mock("./components/CredibilityBar", () => ({ default: () => <section id="credibility" /> }));
vi.mock("./components/Projects", () => ({ default: forwardRef(() => <section id="projects" />) }));
vi.mock("./components/Services", () => ({ default: forwardRef(() => <section id="services" />) }));
vi.mock("./components/Testimonials", () => ({ default: forwardRef(() => <section id="testimonial" />) }));
vi.mock("./components/Experiences", () => ({ default: forwardRef(() => <section id="experience" />) }));
vi.mock("./components/About", () => ({ default: forwardRef(() => <section id="about" />) }));
vi.mock("./components/Skills", () => ({ default: forwardRef(() => <section id="skills" />) }));
vi.mock("./components/ContactCTA", () => ({ default: () => <section id="contact" /> }));
vi.mock("./components/Footer", () => ({ default: () => <footer /> }));
vi.mock("./components/WhatsApp", () => ({ default: () => null }));

describe("Portfolio section narrative", () => {
  it("renders proof and services before background and capability depth", () => {
    render(<App />);

    const sectionOrder = Array.from(document.querySelectorAll("main > section")).map(
      (section) => section.id,
    );

    expect(sectionOrder).toEqual([
      "hero",
      "credibility",
      "projects",
      "services",
      "testimonial",
      "experience",
      "about",
      "skills",
      "contact",
    ]);
  });
});
