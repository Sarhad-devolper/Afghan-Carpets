"use client";
import Link from "next/link";
import { Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function QuickContactCTA() {
  const { t } = useI18n();
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl glass-strong luxe-border p-8 sm:p-14 lg:p-20">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float-slow" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full glass text-xs uppercase tracking-[0.3em] text-primary mb-5">
                {t("section.cta.tag")}
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-gradient-gold leading-tight">
                {t("section.cta")}
              </h2>
              <p className="mt-4 text-muted-foreground max-w-lg">{t("section.cta.sub")}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold shadow-glow hover:scale-[1.04] transition-transform text-sm"
                >
                  {t("section.cta.btn")}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </Link>
                <a
                  href="https://wa.me/93700000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass luxe-border text-foreground hover:text-primary transition text-sm"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { i: Phone, t: t("section.cta.phone"), v: "+93 700 000 000" },
                { i: Mail, t: t("section.cta.email"), v: "hello@afghancarpets.com" },
                { i: MessageCircle, t: "WhatsApp", v: "+93 700 000 000" },
                { i: ArrowRight, t: t("section.cta.hours"), v: "Sat – Thu · 9–18" },
              ].map((c, i) => (
                <div key={i} className="p-5 rounded-2xl glass luxe-border">
                  <c.i className="h-5 w-5 text-primary mb-3" />
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{c.t}</div>
                  <div className="font-display text-lg mt-1">{c.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
