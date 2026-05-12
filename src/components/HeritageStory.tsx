"use client";
import { useI18n } from "@/lib/i18n";

const timeline = [
  { year: "500 BC", key: "h1" },
  { year: "1200", key: "h2" },
  { year: "1880", key: "h3" },
  { year: "Today", key: "h4" },
];

const symbols = ["☀", "✦", "❀", "◆", "✧", "❋"];

export function HeritageStory() {
  const { t } = useI18n();
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pattern-ornament opacity-25" />
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div className="container relative mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full glass text-xs uppercase tracking-[0.3em] text-primary mb-5">
            {t("section.heritage.tag")}
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gradient-gold leading-tight">
            {t("section.heritage")}
          </h2>
          <p className="mt-5 text-foreground/75 leading-relaxed text-base sm:text-lg">
            {t("section.heritage.body")}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent hidden md:block" />
          <div className="space-y-10 md:space-y-16">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative md:grid md:grid-cols-2 md:gap-12 items-center animate-fade-up ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className={`md:text-right ${i % 2 ? "md:text-left" : ""}`}>
                  <div className="font-display text-5xl sm:text-6xl text-gradient-gold">{item.year}</div>
                </div>
                <div className="mt-3 md:mt-0 p-6 rounded-2xl glass luxe-border">
                  <h3 className="font-display text-2xl mb-2">{t(`heritage.${item.key}`)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`heritage.${item.key}.d`)}
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-gold shadow-glow ring-4 ring-background" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-3 sm:gap-5 opacity-80">
          {symbols.map((s, i) => (
            <div
              key={i}
              className="h-14 w-14 sm:h-16 sm:w-16 grid place-items-center rounded-2xl glass luxe-border text-2xl sm:text-3xl text-gradient-gold animate-float-slow"
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
