"use client";
import { products } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { useI18n } from "@/lib/i18n";
import { Flame } from "lucide-react";

export function BestSellers() {
  const { t } = useI18n();
  const top = [...products].sort((a, b) => b.rating - a.rating).slice(0, 4);
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-luxe">
      <div className="absolute inset-0 pattern-ornament opacity-20" />
      <div className="container relative mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass text-xs uppercase tracking-[0.3em] text-primary mb-5 luxe-border">
              <Flame className="h-3 w-3" /> {t("section.best.tag")}
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gradient-gold leading-tight">
              {t("section.best")}
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl">{t("section.best.sub")}</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="h-px w-12 bg-primary/40" /> {t("section.best.trust")}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {top.map((p, i) => (
            <div key={p.id} className="animate-fade-up" style={{ animationDelay: `${i * 90}ms` }}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
