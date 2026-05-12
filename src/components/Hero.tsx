"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import hero1 from "@/assets/rughero1.jpg";
import hero2 from "@/assets/rughero2.jpg";
import hero3 from "@/assets/rughero3.jpg";
import { useI18n } from "@/lib/i18n";
import Image from "next/image";

const slides = [
  { img: hero1, eyebrow: "rughero1.eyebrow", title: "hero.1.title", desc: "hero.1.desc", tint: "from-[oklch(0.20_0.12_25/0.85)] via-background/60 to-background" },
  { img: hero2, eyebrow: "rughero2.eyebrow", title: "hero.2.title", desc: "hero.2.desc", tint: "from-[oklch(0.20_0.12_265/0.85)] via-background/60 to-background" },
  { img: hero3, eyebrow: "rughero3.eyebrow", title: "hero.3.title", desc: "hero.3.desc", tint: "from-[oklch(0.22_0.10_60/0.85)] via-background/60 to-background" },
];

export function Hero() {
  const { t } = useI18n();
  const [idx, setIdx] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] w-full overflow-hidden"
      onMouseMove={(e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setMouse({ x, y });
      }}
    >
      {/* Slide images */}
      {slides.map((s, i) => (
        <div
          key={i}
          aria-hidden={i !== idx}
          className={`absolute inset-0 transition-opacity duration-[1600ms] ease-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.img}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              transform: i === idx
                ? `scale(1.12) translate3d(${mouse.x * -10}px, ${mouse.y * -10}px, 0)`
                : "scale(1.05)",
              transition: "transform 1.6s cubic-bezier(0.22,1,0.36,1)",
            }}
          />
          <div className={`absolute inset-0 bg-gradient-to-tr ${s.tint}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>
      ))}

      {/* Dust particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute block h-1 w-1 rounded-full bg-primary/60"
            style={{
              left: `${(i * 53) % 100}%`,
              bottom: `-${(i * 7) % 30}%`,
              animation: `dust ${10 + (i % 6) * 2}s linear ${i * 0.4}s infinite`,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      {/* Radial gold glow */}
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-5 sm:px-6 min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="max-w-xl lg:max-w-2xl">
          <div key={idx} className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-primary mb-4 sm:mb-6 luxe-border">
              <Sparkles className="h-3 w-3" />
              {t(slides[idx].eyebrow)}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-semibold">
              <span className="text-gradient-gold">{t(slides[idx].title)}</span>
            </h1>
            <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base lg:text-lg text-foreground/80 leading-relaxed">
              {t(slides[idx].desc)}
            </p>
          </div>

          <div className="mt-7 sm:mt-9 flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 px-5 py-3 sm:px-7 sm:py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-semibold tracking-wide text-sm sm:text-base shadow-glow hover:scale-[1.04] transition-transform"
            >
              {t("hero.shop")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-5 py-3 sm:px-7 sm:py-3.5 rounded-full glass luxe-border text-foreground text-sm sm:text-base hover:text-primary transition-colors"
            >
              {t("hero.explore")}
            </Link>
          </div>

          {/* Slide indicators */}
          <div className="mt-8 sm:mt-12 flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Slide ${i + 1}`}
                className="group flex items-center gap-2"
              >
                <span
                  className={`h-[2px] transition-all duration-700 ${
                    i === idx ? "w-12 bg-primary" : "w-6 bg-foreground/30 group-hover:bg-foreground/60"
                  }`}
                />
                <span className={`text-[10px] tracking-widest ${i === idx ? "text-primary" : "text-foreground/40"}`}>
                  0{i + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating ornaments */}
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute top-32 left-10 h-64 w-64 rounded-full bg-secondary/20 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />
    </section>
  );
}
