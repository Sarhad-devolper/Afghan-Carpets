"use client";
import { useState } from "react";
import { products, type Category } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { useI18n } from "@/lib/i18n";

const cats: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "filter.all" },
  { key: "traditional", label: "filter.traditional" },
  { key: "persian", label: "filter.persian" },
  { key: "modern", label: "filter.modern" },
  { key: "tribal", label: "filter.tribal" },
  { key: "vintage", label: "filter.vintage" },
  { key: "silk", label: "filter.silk" },
];

export function FeaturedCollections() {
  const { t } = useI18n();
  const [active, setActive] = useState<Category | "all">("all");
  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <section id="collections" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 pattern-ornament opacity-30" />
      <div className="container relative mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-block px-4 py-1 rounded-full glass text-xs uppercase tracking-[0.3em] text-primary mb-5">
            Collection
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">
            <span className="text-gradient-gold">{t("section.featured")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">{t("section.featured.sub")}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {cats.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
                active === c.key
                  ? "bg-gradient-gold text-primary-foreground shadow-glow"
                  : "glass text-foreground/70 hover:text-primary"
              }`}
            >
              {t(c.label)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((p, i) => (
            <div key={p.id} className="animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
