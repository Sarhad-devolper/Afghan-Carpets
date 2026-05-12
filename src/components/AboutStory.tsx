"use client";
import rug4 from "@/assets/insta4.jpg";
import { useI18n } from "@/lib/i18n";
import Image from "next/image";

export function AboutStory() {
  const { t } = useI18n();
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative animate-fade-up">
          <div className="absolute -inset-6 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
          <div className="relative rounded-3xl overflow-hidden luxe-border shadow-luxe">
            <Image src={rug4} alt="Afghan artisan weaving" loading="lazy" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 rtl:right-auto rtl:-left-6 glass-strong rounded-2xl p-5 shadow-luxe luxe-border max-w-[220px]">
            <div className="font-display text-3xl text-gradient-gold">120+</div>
            <div className="text-xs text-muted-foreground tracking-widest uppercase mt-1">Years of heritage</div>
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "150ms" }}>
          <div className="inline-block px-4 py-1 rounded-full glass text-xs uppercase tracking-[0.3em] text-primary mb-5">
            Our Story
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
            <span className="text-gradient-gold">{t("section.about")}</span>
          </h2>
          <p className="mt-6 text-foreground/80 leading-relaxed text-lg">{t("section.about.body")}</p>

          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            {[
              { v: "50K+", l: "Rugs woven" },
              { v: "60+", l: "Countries" },
              { v: "300+", l: "Artisans" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl glass p-4 luxe-border">
                <div className="font-display text-2xl text-gradient-gold">{s.v}</div>
                <div className="text-[10px] tracking-widest uppercase text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
