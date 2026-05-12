"use client";
import { Hand, ShieldCheck, Globe2, Lock, Gem, Scissors } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const items = [
  { icon: Hand, key: "handmade" },
  { icon: ShieldCheck, key: "authentic" },
  { icon: Globe2, key: "shipping" },
  { icon: Lock, key: "secure" },
  { icon: Gem, key: "materials" },
  { icon: Scissors, key: "custom" },
];

export function WhyUs() {
  const { t } = useI18n();
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-luxe">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-block px-4 py-1 rounded-full glass text-xs uppercase tracking-[0.3em] text-primary mb-5">
            Promise
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gradient-gold">
            {t("section.why")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("section.why.sub")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, key }, i) => (
            <div
              key={key}
              className="group relative p-8 rounded-2xl glass luxe-border hover-tilt animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute -top-6 left-8 h-14 w-14 rounded-2xl bg-gradient-gold grid place-items-center shadow-glow rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-6 font-display text-2xl">{t(`why.${key}`)}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(`why.${key}.d`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
