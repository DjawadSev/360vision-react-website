/* eslint-disable @next/next/no-img-element */
import type React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import enMessages from "@/messages/en.json";
import { SiteHeader } from "./site-header";
import { NextIntlClientProvider } from "next-intl";

const resolveMessage = (key: string) => key.split(".").reduce((acc: any, part) => (acc ? acc[part] : undefined), enMessages as any) ?? key;

vi.mock(
  "next-intl",
  () => ({
    useTranslations: (namespace?: string) => (key: string) => resolveMessage(namespace ? `${namespace}.${key}` : key),
    useLocale: () => "en",
    NextIntlClientProvider: ({ children }: React.PropsWithChildren) => <>{children}</>,
  }),
  { virtual: true }
);

vi.mock(
  "@/navigation",
  () => ({
    Link: ({ href, children, ...props }: React.PropsWithChildren<{ href: string }>) => (
      <a href={typeof href === "string" ? href : ""} {...props}>
        {children}
      </a>
    ),
    usePathname: () => "/",
    useRouter: () => ({ replace: vi.fn() }),
  }),
  { virtual: true }
);

vi.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt }: { alt: string }) => <img alt={alt} />, // Decorative for tests
}));

describe("SiteHeader mobile drawer", () => {
  it("opens the mobile menu above content and closes after selecting a link", async () => {
    const user = userEvent.setup();
    render(
      <NextIntlClientProvider locale="en" messages={enMessages}>
        <SiteHeader />
      </NextIntlClientProvider>
    );

    const toggleButton = screen.getByTestId("mobile-menu-trigger");

    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();

    await user.click(toggleButton);

    const menu = await screen.findByTestId("mobile-menu");
    expect(toggleButton).toHaveAttribute("aria-expanded", "true");
    expect(menu).toHaveAttribute("role", "dialog");
    expect(screen.getByTestId("mobile-menu-backdrop")).toBeInTheDocument();

    const nav = within(menu).getByRole("navigation", { name: /primary/i });
    const menuLinks = within(nav).getAllByRole("link");
    expect(menuLinks.map((link) => link.textContent?.replace("Active", "").trim())).toEqual(["Home", "Services", "Blog", "Contact"]);

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
