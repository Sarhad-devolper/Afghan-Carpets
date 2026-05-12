"use client";
import { Sprout, Palette, Scissors, Sparkles, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: Sprout,
    title: "Sourcing the Wool",
    desc: "Highland sheep wool from northern Afghanistan — long-staple, lanolin-rich, hand-spun on traditional spindles.",
    stat: "100%",
    statLabel: "Natural fiber",
  },
  {
    icon: Palette,
    title: "Natural Dyeing",
    desc: "Pomegranate, walnut husk, madder root and indigo simmered in copper vats for colors that age beautifully.",
    stat: "40+",
    statLabel: "Plant dyes",
  },
  {
    icon: Scissors,
    title: "Hand-Knotting",
    desc: "Master weavers tie up to 1 million Persian knots per rug on vertical looms passed down through generations.",
    stat: "8–14",
    statLabel: "Months per rug",
  },
  {
    icon: Sparkles,
    title: "Washing & Finishing",
    desc: "Stone-washed in mountain streams, sun-dried, then sheared by hand to reveal the pile's depth and luster.",
    stat: "7",
    statLabel: "Finishing stages",
  },
  {
    icon: PackageCheck,
    title: "Inspected & Shipped",
    desc: "Each carpet is certified, rolled in breathable muslin and insured worldwide for safe doorstep delivery.",
    stat: "60+",
    statLabel: "Countries served",
  },
];

export function CraftsmanshipProcess() {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-luxe overflow-hidden">
      <div className="absolute inset-0 pattern-ornament opacity-20" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full glass text-xs uppercase tracking-[0.3em] text-primary mb-5">
            Craftsmanship
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gradient-gold leading-tight">
            From loom to your living room
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every Afghan Carpet passes through five centuries-old stages — a slow art that no machine can replicate.
          </p>
        </div>

        <div className="relative">
          {/* connecting golden line */}
          <div
            className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            aria-hidden
          />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map(({ icon: Icon, title, desc, stat, statLabel }, i) => (
              <li
                key={title}
                className="group relative flex flex-col items-center text-center animate-fade-up"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="relative mb-5">
                  <div className="absolute inset-0 rounded-full bg-gradient-gold blur-xl opacity-40 group-hover:opacity-70 transition-opacity" />
                  <div className="relative h-24 w-24 rounded-full bg-gradient-gold grid place-items-center shadow-glow luxe-border">
                    <Icon className="h-9 w-9 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full glass-strong luxe-border grid place-items-center font-display text-sm text-primary">
                    {i + 1}
                  </div>
                </div>

                <h3 className="font-display text-xl mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed px-2">{desc}</p>

                <div className="mt-5 rounded-xl glass luxe-border px-4 py-2.5">
                  <div className="font-display text-2xl text-gradient-gold leading-none">{stat}</div>
                  <div className="text-[10px] tracking-widest uppercase text-muted-foreground mt-1">
                    {statLabel}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
