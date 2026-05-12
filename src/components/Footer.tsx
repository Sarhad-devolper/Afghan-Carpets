"use client";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative bg-gradient-luxe border-t border-border mt-20">
      <div className="absolute inset-0 pattern-ornament opacity-20 pointer-events-none" />
      <div className="container relative mx-auto px-6 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-gold grid place-items-center">
              <span className="font-display text-xl font-bold text-primary-foreground">A</span>
            </div>
            <div className="font-display text-xl text-gradient-gold">Afghan Carpets</div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">{t("footer.tag")}</p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Twitter].map((I, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-full glass hover:text-primary transition">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-gradient-gold">{t("footer.links")}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="story-link text-foreground/70 hover:text-primary">{t("nav.home")}</Link></li>
            <li><Link href="/products" className="story-link text-foreground/70 hover:text-primary">{t("nav.products")}</Link></li>
            <li><Link href="/about" className="story-link text-foreground/70 hover:text-primary">{t("nav.about")}</Link></li>
            <li><Link href="/contact" className="story-link text-foreground/70 hover:text-primary">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-gradient-gold">{t("footer.cats")}</h4>
          <ul className="space-y-2 text-sm">
            {["traditional", "persian", "modern", "tribal", "vintage", "silk"].map((c) => (
              <li key={c}>
                <Link href="/products" className="story-link text-foreground/70 hover:text-primary">
                  {t(`filter.${c}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-gradient-gold">{t("footer.newsletter")}</h4>
          <p className="text-sm text-muted-foreground mb-4">{t("footer.newsletter.d")}</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex glass rounded-full p-1 luxe-border">
            <input
              type="email"
              placeholder="email@example.com"
              className="flex-1 bg-transparent px-4 py-2 text-sm focus:outline-none"
            />
            <button className="h-10 w-10 grid place-items-center rounded-full bg-gradient-gold text-primary-foreground shadow-glow">
              <Send className="h-4 w-4" />
            </button>
          </form>
          <div className="mt-6 flex gap-2 opacity-70 text-[10px] tracking-widest uppercase">
            <span className="px-2 py-1 rounded glass">VISA</span>
            <span className="px-2 py-1 rounded glass">Mastercard</span>
            <span className="px-2 py-1 rounded glass">PayPal</span>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-5 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Afghan Carpets. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
