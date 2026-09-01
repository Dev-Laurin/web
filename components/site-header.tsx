"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/6 bg-[color:var(--background)]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--foreground)]">
          LF
        </Link>

        <button
          type="button"
          className="inline-flex items-center rounded-full border border-black/8 px-4 py-2 text-sm text-[var(--foreground)] md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((open) => !open)}
        >
          Menu
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-full px-4 py-2 text-sm transition-colors",
                  isActive ? "bg-black text-white" : "text-[var(--muted)] hover:bg-black/5 hover:text-[var(--foreground)]",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            Let&apos;s talk
          </Link>
        </nav>
      </div>

      {isOpen ? (
        <nav id="mobile-nav" className="border-t border-black/6 px-6 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-2xl px-4 py-3 text-sm transition-colors",
                    isActive ? "bg-black text-white" : "bg-white/70 text-[var(--foreground)] hover:bg-black/5",
                  ].join(" ")}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}