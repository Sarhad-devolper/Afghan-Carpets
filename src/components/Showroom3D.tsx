"use client";
import { useState } from "react";
import rug1 from "@/assets/rug-1.jpg";
import rug2 from "@/assets/rug-2.jpg";
import rug6 from "@/assets/rug-6.jpg";
import Image from "next/image";

const carpets = [rug1, rug2, rug6];

export function Showroom3D() {
  const [active, setActive] = useState(0);
  const [drag, setDrag] = useState(0);
  const [start, setStart] = useState<number | null>(null);

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-luxe overflow-hidden">
      <div className="absolute inset-0 pattern-ornament opacity-20" />
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-block px-4 py-1 rounded-full glass text-xs uppercase tracking-[0.3em] text-primary mb-5">
            Interactive Showroom
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gradient-gold">
            Step inside the atelier
          </h2>
          <p className="mt-4 text-muted-foreground">Drag to rotate. Click thumbnails to explore signature pieces.</p>
        </div>

        <div
          className="relative mx-auto max-w-3xl aspect-square select-none"
          onMouseDown={(e) => setStart(e.clientX)}
          onMouseUp={() => setStart(null)}
          onMouseLeave={() => setStart(null)}
          onMouseMove={(e) => {
            if (start !== null) setDrag((e.clientX - start) * 0.4);
          }}
          onTouchStart={(e) => setStart(e.touches[0].clientX)}
          onTouchEnd={() => setStart(null)}
          onTouchMove={(e) => {
            if (start !== null) setDrag((e.touches[0].clientX - start) * 0.4);
          }}
          style={{ perspective: "1500px" }}
        >
          <div className="absolute inset-0 grid place-items-center">
            <div
              className="relative w-[70%] aspect-square rounded-full bg-gradient-radial-gold"
              style={{
                background: "var(--gradient-radial-gold)",
                transform: "rotateX(70deg)",
              }}
            />
          </div>

          <div
            className="absolute inset-0 grid place-items-center transition-transform duration-700"
            style={{
              transform: `rotateY(${drag}deg) rotateX(8deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src={carpets[active]}
              alt="Showroom carpet"
              className="w-[70%] max-w-[420px] aspect-[3/4] object-cover rounded-2xl shadow-luxe luxe-border animate-float-slow"
              style={{ transform: "translateZ(60px)" }}
            />
          </div>

          {/* floor reflection */}
          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[55%] h-12 rounded-full bg-primary/20 blur-2xl"
            aria-hidden
          />
        </div>

        <div className="mt-10 flex justify-center gap-4">
          {carpets.map((c, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-16 w-16 rounded-xl overflow-hidden luxe-border transition-all ${
                i === active ? "ring-2 ring-primary scale-110 shadow-glow" : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={c} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
