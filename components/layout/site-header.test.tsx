/* eslint-disable @next/next/no-img-element */
import type React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { SiteHeader } from "./site-header";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

vi.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children, ...props }: React.PropsWithChildren<{ href: string }>) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt }: { alt: string }) => <img alt={alt} />, // Decorative for tests
}));

describe("SiteHeader mobile drawer", () => {
  it("opens above all content and closes when toggled", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    const toggleButton = screen.getByLabelText(/open menu/i);
    const drawer = screen.getByTestId("mobile-drawer");
    const backdrop = screen.getByTestId("mobile-drawer-backdrop");

    expect(drawer.className).toContain("translate-x-full");
    expect(backdrop.className).toContain("opacity-0");

    await user.click(toggleButton);

    expect(toggleButton).toHaveAttribute("aria-expanded", "true");
    expect(drawer.className).toContain("translate-x-0");
    expect(drawer.className).toContain("z-[11995]");
    expect(backdrop.className).toContain("opacity-100");
    expect(backdrop.className).toContain("z-[11990]");

    await user.click(screen.getByLabelText(/close menu/i));

    expect(drawer.className).toContain("translate-x-full");
    expect(backdrop.className).toContain("opacity-0");
  });
});
