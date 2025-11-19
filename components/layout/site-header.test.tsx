/* eslint-disable @next/next/no-img-element */
import type React from "react";
import { render, screen, within } from "@testing-library/react";
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
  it("opens the mobile menu above content and closes after selecting a link", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    const toggleButton = screen.getByTestId("mobile-menu-trigger");

    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();

    await user.click(toggleButton);

    const menu = await screen.findByTestId("mobile-menu");
    expect(toggleButton).toHaveAttribute("aria-expanded", "true");
    expect(menu).toHaveAttribute("role", "dialog");
    expect(screen.getByTestId("mobile-menu-backdrop")).toBeInTheDocument();

    const nav = within(menu).getByRole("navigation", { name: /primary/i });
    const menuLinks = within(nav).getAllByRole("link");
    expect(menuLinks.map((link) => link.textContent?.replace("Active", "").trim())).toEqual(["Home", "Services", "Our Work", "Contact"]);

    await user.click(menuLinks[3]);

    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();

    await user.click(toggleButton);
    expect(await screen.findByTestId("mobile-menu")).toBeInTheDocument();

    await user.click(screen.getByTestId("mobile-menu-close"));
    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();

    await user.click(toggleButton);
    expect(await screen.findByTestId("mobile-menu")).toBeInTheDocument();

    await user.click(screen.getByTestId("mobile-menu-backdrop"));
    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();
  });
});
