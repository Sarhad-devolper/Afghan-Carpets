"use client";
import { useRef } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { useI18n } from "@/lib/i18n";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function NewArrivals() {
  const { t } = useI18n();
  const scroller = useRef<HTMLDivElement>(null);
  const items = [...products].reverse();

  const scroll = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-block px-4 py-1 rounded-full glass text-xs uppercase tracking-[0.3em] text-primary mb-5">
              {t("section.new.tag")}
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gradient-gold leading-tight">
              {t("section.new")}
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous"
              className="h-11 w-11 grid place-items-center rounded-full glass luxe-border hover:text-primary transition"
            >
              <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next"
              className="h-11 w-11 grid place-items-center rounded-full glass luxe-border hover:text-primary transition"
            >
              <ChevronRight className="h-5 w-5 rtl:rotate-180" />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((p, i) => (
            <div
              key={p.id}
              className="snap-start shrink-0 w-[78%] sm:w-[46%] lg:w-[30%] xl:w-[24%] animate-fade-up"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
