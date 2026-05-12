"use client";
import { Plane, Package, Clock, Shield } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const cities = [
  { name: "London", x: 48, y: 30 },
  { name: "New York", x: 25, y: 38 },
  { name: "Tokyo", x: 84, y: 40 },
  { name: "Dubai", x: 60, y: 48 },
  { name: "Sydney", x: 88, y: 75 },
  { name: "São Paulo", x: 33, y: 70 },
  { name: "Kabul", x: 65, y: 40 },
];

export function GlobalShipping() {
  const { t } = useI18n();
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-block px-4 py-1 rounded-full glass text-xs uppercase tracking-[0.3em] text-primary mb-5">
            Worldwide
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gradient-gold">
            {t("section.shipping")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("section.shipping.sub")}</p>
        </div>

        <div className="relative mx-auto max-w-5xl aspect-[2/1] rounded-3xl glass luxe-border overflow-hidden">
          <svg viewBox="0 0 100 50" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <defs>
              <radialGradient id="dot" cx="50%" cy="50%">
                <stop offset="0%" stopColor="oklch(0.78 0.14 78)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            {Array.from({ length: 600 }).map((_, i) => {
              const x = (i % 60) * 1.7 + (Math.floor(i / 60) % 2) * 0.85;
              const y = Math.floor(i / 60) * 5 + 1;
              const inLand = ((x + y) % 7 < 3) && y > 4 && y < 46;
              if (!inLand) return null;
              return <circle key={i} cx={x} cy={y} r="0.25" fill="oklch(0.78 0.14 78 / 0.35)" />;
            })}
            {cities.map((c, i) => (
              <g key={c.name}>
                <circle cx={c.x} cy={c.y} r="3" fill="url(#dot)" />
                <circle cx={c.x} cy={c.y} r="0.6" fill="oklch(0.86 0.12 85)">
                  <animate attributeName="r" values="0.6;1.2;0.6" dur="2.5s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                </circle>
              </g>
            ))}
            {cities.slice(0, -1).map((c, i) => {
              const next = cities[6];
              return (
                <line
                  key={i}
                  x1={next.x}
                  y1={next.y}
                  x2={c.x}
                  y2={c.y}
                  stroke="oklch(0.78 0.14 78 / 0.3)"
                  strokeWidth="0.15"
                  strokeDasharray="0.8 0.8"
                />
              );
            })}
          </svg>

          {cities.map((c) => (
            <div
              key={c.name}
              className="absolute -translate-x-1/2 -translate-y-full text-[10px] uppercase tracking-widest text-primary/80 px-2 py-0.5 rounded glass"
              style={{ left: `${c.x}%`, top: `${c.y}%` }}
            >
              {c.name}
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { i: Plane, t: "Worldwide", d: "60+ countries" },
            { i: Clock, t: "5-12 days", d: "Average delivery" },
            { i: Package, t: "Insured", d: "Premium packaging" },
            { i: Shield, t: "Tracked", d: "Door-to-door" },
          ].map((item) => (
            <div key={item.t} className="p-5 rounded-2xl glass luxe-border text-center">
              <item.i className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="font-semibold">{item.t}</div>
              <div className="text-xs text-muted-foreground">{item.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
