"use client";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart";
import { useI18n } from "@/lib/i18n";
import Image from "next/image";

export function CartDrawer() {
  const { items, open, setOpen, remove, setQty, total, count } = useCart();
  const { t, dir } = useI18n();

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-background/70 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      <aside
        className={`fixed top-0 ${dir === "rtl" ? "left-0" : "right-0"} z-[70] h-full w-full max-w-md glass-strong shadow-luxe transition-transform duration-500 ${
          open
            ? "translate-x-0"
            : dir === "rtl"
              ? "-translate-x-full"
              : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div>
            <h3 className="font-display text-2xl text-gradient-gold">{t("cart.title")}</h3>
            <p className="text-xs text-muted-foreground">{count} item(s)</p>
          </div>
          <button onClick={() => setOpen(false)} className="h-9 w-9 grid place-items-center rounded-full glass hover:text-primary">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4 max-h-[calc(100vh-220px)]">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">{t("cart.empty")}</p>
          ) : (
            items.map((i) => (
              <div key={i.id} className="flex gap-4 p-3 rounded-xl glass luxe-border">
                <Image src={i.image} alt={i.title} className="h-20 w-20 object-cover rounded-lg" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">{i.title}</div>
                  <div className="text-primary font-semibold">${i.price.toLocaleString()}</div>
                  <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-muted/50 px-1">
                    <button onClick={() => setQty(i.id, i.qty - 1)} className="h-7 w-7 grid place-items-center hover:text-primary">
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="text-xs font-semibold w-5 text-center">{i.qty}</span>
                    <button onClick={() => setQty(i.id, i.qty + 1)} className="h-7 w-7 grid place-items-center hover:text-primary">
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </div>
                <button onClick={() => remove(i.id)} className="self-start text-muted-foreground hover:text-destructive">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="absolute bottom-0 inset-x-0 p-6 border-t border-border glass-strong">
          <div className="flex justify-between text-sm mb-3">
            <span className="text-muted-foreground">{t("cart.total")}</span>
            <span className="font-display text-2xl text-gradient-gold">${total.toLocaleString()}</span>
          </div>
          <button
            disabled={items.length === 0}
            className="w-full py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold tracking-wide shadow-glow disabled:opacity-40 hover:scale-[1.02] transition-transform"
          >
            {t("cart.checkout")}
          </button>
        </div>
      </aside>
    </>
  );
}
