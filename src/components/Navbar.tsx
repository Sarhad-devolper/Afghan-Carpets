"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, X, ChevronDown, Globe } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";
import { useCart } from "@/lib/cart";
import { usePathname } from "next/navigation";
import { SearchOverlay } from "@/components/SearchOverlay";

const langLabels: Record<Lang, string> = {
  en: "English",
  fa: "فارسی",
  ps: "پښتو",
};

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const { count, setOpen } = useCart();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/products", label: t("nav.products") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between gap-6 px-5">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative grid h-9 w-9 place-items-center rounded-full bg-gradient-gold shadow-glow">
            <span className="font-display text-xl font-bold text-primary-foreground">
              A
            </span>

            <span className="absolute inset-0 animate-spin-slow rounded-full ring-1 ring-primary/40" />
          </div>

          <div className="leading-tight">
            <div className="font-display text-xl font-semibold tracking-wide text-gradient-gold">
              Afghan Carpets
            </div>

            <div className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:block">
              Heritage · Handmade
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className={`story-link text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                pathname === l.to
                  ? "text-primary"
                  : "text-foreground/85"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search */}
          <button
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-full glass transition hover:text-primary"
          >
            <Search className="h-4 w-4" />
          </button>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              onBlur={() => setTimeout(() => setLangOpen(false), 150)}
              className="flex h-10 items-center gap-1.5 rounded-full glass px-3 text-xs font-medium transition hover:text-primary"
            >
              <Globe className="h-4 w-4" />

              <span className="hidden sm:inline">
                {langLabels[lang]}
              </span>

              <ChevronDown className="h-3 w-3 opacity-70" />
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-40 overflow-hidden rounded-xl glass-strong shadow-luxe animate-scale-in luxe-border rtl:left-0 rtl:right-auto">
                {(Object.keys(langLabels) as Lang[]).map((l) => (
                  <button
                    key={l}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => {
                      setLang(l);
                      setLangOpen(false);
                    }}
                    className={`w-full px-4 py-2.5 text-start text-sm transition hover:bg-primary/10 ${
                      l === lang ? "text-primary" : ""
                    }`}
                  >
                    {langLabels[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Cart */}
          <button
            aria-label={t("nav.cart")}
            onClick={() => setOpen(true)}
            className="relative grid h-10 w-10 place-items-center rounded-full glass transition hover:text-primary"
          >
            <ShoppingBag className="h-4 w-4" />

            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-gradient-gold px-1 text-[10px] font-bold text-primary-foreground shadow rtl:-left-1 rtl:-right-auto">
                {count}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full glass lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mx-5 mt-3 overflow-hidden rounded-2xl glass-strong shadow-luxe animate-scale-in luxe-border lg:hidden">
          <nav className="flex flex-col p-2">
            {links.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-primary/10 ${
                  pathname === l.to
                    ? "bg-primary/5 text-primary"
                    : ""
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <SearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </header>
  );
}