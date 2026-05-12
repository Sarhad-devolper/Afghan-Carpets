"use client";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import rug2 from "@/assets/rug-2.jpg";
import rug4 from "@/assets/rug-4.jpg";
import rug6 from "@/assets/rug-6.jpg";
import rug1 from "@/assets/rug-1.jpg";
import Image from "next/image";

const rooms = [
  { key: "living", img: rug2 },
  { key: "bedroom", img: rug6 },
  { key: "modern", img: rug4 },
  { key: "hotel", img: rug1 },
];

export function InteriorShowcase() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const room = rooms[active];

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-luxe overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="inline-block px-4 py-1 rounded-full glass text-xs uppercase tracking-[0.3em] text-primary mb-5">
              {t("section.interior.tag")}
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gradient-gold leading-tight">
              {t("section.interior")}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {t("section.interior.sub")}
            </p>

            <div className="mt-8 space-y-2">
              {rooms.map((r, i) => (
                <button
                  key={r.key}
                  onClick={() => setActive(i)}
                  className={`group flex items-center justify-between w-full px-5 py-4 rounded-xl text-left transition-all luxe-border ${
                    active === i
                      ? "bg-gradient-gold text-primary-foreground shadow-glow"
                      : "glass hover:text-primary"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`font-display text-sm ${active === i ? "" : "text-primary"}`}
                    >
                      0{i + 1}
                    </span>
                    <span className="font-medium">
                      {t(`interior.${r.key}`)}
                    </span>
                  </span>
                  <span className="text-[10px] uppercase tracking-widest opacity-70">
                    {t("interior.view")}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative aspect-[4/5] sm:aspect-[5/4] rounded-3xl overflow-hidden luxe-border shadow-luxe">
              {rooms.map((r, i) => (
                <Image
                  key={r.key}
                  src={r.img}
                  alt={t(`interior.${r.key}`)}
                  fill
                  priority={i === 0}
                  className={`absolute inset-0 object-cover transition-all duration-[1400ms] ease-out ${
                    active === i
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-110"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 rtl:left-auto rtl:right-6 glass-strong rounded-2xl px-5 py-3 luxe-border max-w-[280px]">
                <div className="text-[10px] tracking-widest uppercase text-primary/80">
                  {t("interior.featured")}
                </div>
                <div className="font-display text-xl text-gradient-gold mt-0.5">
                  {t(`interior.${room.key}`)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
