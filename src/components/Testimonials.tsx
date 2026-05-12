"use client";
import { Star, Quote } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const reviews = [
  {
    name: "Hasib ISMAILI",
    country: "Kabul, Afghanistan",
    text: "An exquisite piece of art. The detail and craftsmanship transformed our living room into a gallery.",
    rating: 5,
  },
  {
    name: "Zahra ARIFI",
    country: "Berlin, Germany",
    text: "The provenance and quality are unmatched. Shipping was secure and arrived beautifully packaged.",
    rating: 5,
  },
  {
    name: "Sophia Tanaka",
    country: "Tokyo, Japan",
    text: "Bought a silk Imperial — it glows differently every hour. Truly a generational heirloom.",
    rating: 5,
  },
];

export function Testimonials() {
  const { t } = useI18n();
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gradient-gold">
            {t("section.testimonials")}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="relative p-8 rounded-2xl glass luxe-border hover-tilt animate-fade-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <Quote className="absolute top-6 right-6 rtl:right-auto rtl:left-6 h-10 w-10 text-primary/20" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/85 leading-relaxed">"{r.text}"</p>
              <div className="mt-6 pt-4 border-t border-border">
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.country}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
