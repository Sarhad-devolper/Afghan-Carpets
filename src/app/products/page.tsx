"use client";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { products, type Category } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
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

function ProductsInner() {
  const { t, lang } = useI18n();
  const sp = useSearchParams();
  const urlQ = sp.get("q") ?? undefined;
  const [active, setActive] = useState<Category | "all">("all");
  const [q, setQ] = useState(urlQ ?? "");
  const [maxPrice, setMaxPrice] = useState(5000);

  useEffect(() => { if (urlQ !== undefined) setQ(urlQ); }, [urlQ]);

  const filtered = useMemo(() => products.filter((p) => {
    if (active !== "all" && p.category !== active) return false;
    if (p.price > maxPrice) return false;
    if (q && !p.title[lang].toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  }), [active, q, maxPrice, lang]);

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="font-display text-5xl sm:text-6xl text-gradient-gold">All Carpets</h1>
          <p className="mt-3 text-muted-foreground">Discover the full Afghan Carpets atelier</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mb-10">
          <div className="flex-1 flex items-center gap-3 px-5 py-3 rounded-full glass luxe-border">
            <Search className="h-4 w-4 text-primary" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t("nav.search")}
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </div>
          <div className="flex items-center gap-3 px-5 py-3 rounded-full glass luxe-border">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Max ${maxPrice}</span>
            <input type="range" min={500} max={5000} step={100} value={maxPrice} onChange={(e)=>setMaxPrice(Number(e.target.value))} className="accent-primary" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {cats.map((c) => (
            <button key={c.key} onClick={() => setActive(c.key)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest transition ${active===c.key?"bg-gradient-gold text-primary-foreground shadow-glow":"glass hover:text-primary"}`}>
              {t(c.label)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (<ProductCard key={p.id} product={p} />))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">No carpets found.</div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (<Suspense fallback={<div className="pt-32 text-center">Loading…</div>}><ProductsInner /></Suspense>);
}
