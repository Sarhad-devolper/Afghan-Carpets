"use client";
import { Heart, Star, ShoppingBag, Eye } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { useI18n } from "@/lib/i18n";
import type { Product } from "@/lib/products";
import Image from "next/image";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const { t, lang } = useI18n();
  const [wished, setWished] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 12;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -12;
    setTilt({ x, y });
  };

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="group relative rounded-2xl overflow-hidden glass luxe-border shadow-card transition-shadow duration-500 hover:shadow-luxe"
      style={{
        transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={product.image}
          alt={product.title[lang]}
          fill
          priority={false}
          className="absolute inset-0 object-cover transition-transform duration-[1200ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-90" />

        {product.badge && (
          <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground shadow-glow">
            {product.badge}
          </div>
        )}

        <button
          onClick={() => setWished((v) => !v)}
          aria-label="Wishlist"
          className="absolute top-3 right-3 rtl:right-auto rtl:left-3 h-9 w-9 grid place-items-center rounded-full glass hover:text-primary transition"
        >
          <Heart
            className={`h-4 w-4 transition ${wished ? "fill-primary text-primary" : ""}`}
          />
        </button>

        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="flex gap-2">
            <button
              onClick={() =>
                add({
                  id: product.id,
                  title: product.title[lang],
                  price: product.price,
                  image: product.image,
                })
              }
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-xs font-bold uppercase tracking-wider shadow-glow"
            >
              <ShoppingBag className="h-3.5 w-3.5" /> {t("card.add")}
            </button>
            <button className="h-10 w-10 grid place-items-center rounded-full glass-strong text-foreground hover:text-primary transition">
              <Eye className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-1.5">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-muted-foreground">
          <span>{product.origin}</span>
          <span className="inline-flex items-center gap-1 text-primary">
            <Star className="h-3 w-3 fill-primary" />
            {product.rating.toFixed(1)}
          </span>
        </div>
        <h3 className="font-display text-lg font-semibold leading-tight truncate">
          {product.title[lang]}
        </h3>
        <div className="flex items-center justify-between pt-1">
          <div className="text-xs text-muted-foreground">
            {product.size} · {product.material}
          </div>
          <div className="text-gradient-gold font-display text-xl font-semibold">
            ${product.price.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}
