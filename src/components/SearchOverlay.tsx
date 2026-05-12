"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { products } from "@/lib/products";
import { useI18n } from "@/lib/i18n";
import Image from "next/image";

export function SearchOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { t, lang } = useI18n();
  const router = useRouter();
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQ("");
      setTimeout(() => inputRef.current?.focus(), 50);
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      return () => {
        window.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
      };
    }
  }, [open, onClose]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return products.slice(0, 6);
    return products
      .filter(
        (p) =>
          p.title[lang].toLowerCase().includes(term) ||
          p.title.en.toLowerCase().includes(term) ||
          p.category.includes(term) ||
          p.material.toLowerCase().includes(term),
      )
      .slice(0, 8);
  }, [q, lang]);

  const submit = (term?: string) => {
    const value = (term ?? q).trim();
    onClose();
    // navigate({ to: "/products", search: value ? { q: value } : {} });
    router.push(
      value ? `/products?q=${encodeURIComponent(value)}` : "/products",
    );
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] animate-fade-in">
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-xl"
        onClick={onClose}
      />
      <div className="relative mx-auto mt-24 max-w-2xl px-5">
        <div className="rounded-3xl glass-strong luxe-border shadow-luxe overflow-hidden animate-scale-in">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
            className="flex items-center gap-3 px-5 py-4 border-b border-border/40"
          >
            <Search className="h-5 w-5 text-primary" />
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t("nav.search")}
              className="flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
            />
            <button
              type="button"
              onClick={onClose}
              className="h-8 w-8 grid place-items-center rounded-full hover:bg-muted/40 transition"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </form>

          <div className="max-h-[60vh] overflow-y-auto p-3">
            {results.length === 0 ? (
              <div className="px-4 py-10 text-center text-sm text-muted-foreground">
                No carpets found for "{q}"
              </div>
            ) : (
              <ul className="space-y-1">
                {results.map((p) => (
                  <li key={p.id}>
                    <button
                      onClick={() => submit(p.title[lang])}
                      className="w-full flex items-center gap-4 p-2.5 rounded-xl hover:bg-primary/10 transition text-start"
                    >
                      <Image
                        src={p.image}
                        alt={p.title[lang]}
                        className="h-14 w-14 rounded-lg object-cover luxe-border"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">
                          {p.title[lang]}
                        </div>
                        <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-0.5">
                          {p.category} · {p.size}
                        </div>
                      </div>
                      <div className="text-sm font-display text-gradient-gold">
                        ${p.price.toLocaleString()}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="px-5 py-3 border-t border-border/40 text-[11px] uppercase tracking-widest text-muted-foreground flex justify-between">
            <span>Press Enter to search all</span>
            <span>Esc to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
