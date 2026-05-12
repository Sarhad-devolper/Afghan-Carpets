"use client";
import { useI18n } from "@/lib/i18n";
import { Leaf, Droplets, Sparkles, Hand } from "lucide-react";

const items = [
  { key: "silk", icon: Sparkles, color: "from-[oklch(0.86_0.10_85)] to-[oklch(0.70_0.15_65)]" },
  { key: "wool", icon: Hand, color: "from-[oklch(0.55_0.18_28)] to-[oklch(0.35_0.15_25)]" },
  { key: "cotton", icon: Leaf, color: "from-[oklch(0.78_0.10_120)] to-[oklch(0.50_0.12_140)]" },
  { key: "dyes", icon: Droplets, color: "from-[oklch(0.45_0.18_265)] to-[oklch(0.30_0.13_260)]" },
];

export function Materials() {
  const { t } = useI18n();
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pattern-ornament opacity-20" />
      <div className="container relative mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-block px-4 py-1 rounded-full glass text-xs uppercase tracking-[0.3em] text-primary mb-5">
            {t("section.materials.tag")}
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gradient-gold">
            {t("section.materials")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("section.materials.sub")}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ key, icon: Icon, color }, i) => (
            <div
              key={key}
              className="group relative rounded-2xl glass luxe-border p-6 sm:p-8 overflow-hidden hover-tilt animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                className={`absolute -top-16 -right-16 h-44 w-44 rounded-full bg-gradient-to-br ${color} opacity-30 blur-2xl group-hover:opacity-60 transition-opacity duration-700`}
              />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-gold grid place-items-center shadow-glow mb-5 group-hover:rotate-6 transition-transform">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl mb-2">{t(`materials.${key}`)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(`materials.${key}.d`)}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: "linear-gradient(120deg, transparent 30%, oklch(0.78 0.14 78 / 0.18) 50%, transparent 70%)", backgroundSize: "200% 100%", animation: "shimmer 2.6s linear infinite" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
