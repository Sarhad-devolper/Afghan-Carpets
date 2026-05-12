"use client";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export default function ContactPage() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block px-4 py-1 rounded-full glass text-xs uppercase tracking-[0.3em] text-primary mb-5">Contact</div>
          <h1 className="font-display text-5xl sm:text-6xl text-gradient-gold">{t("section.contact")}</h1>
          <p className="mt-3 text-muted-foreground">{t("section.contact.sub")}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            {[
              { I: Phone, l: "Phone", v: "+93 700 000 000" },
              { I: Mail, l: "Email", v: "hello@afghancarpets.com" },
              { I: MapPin, l: "Showroom", v: "Dashti-Barchi, Kabul, Afghanistan" },
              { I: MessageCircle, l: "WhatsApp", v: "+93 700 000 000" },
            ].map((c) => (
              <div key={c.l} className="flex items-center gap-4 p-5 rounded-2xl glass luxe-border hover-tilt">
                <div className="h-12 w-12 grid place-items-center rounded-xl bg-gradient-gold shadow-glow">
                  <c.I className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.l}</div>
                  <div className="font-medium">{c.v}</div>
                </div>
              </div>
            ))}
            <div className="aspect-video rounded-2xl glass luxe-border overflow-hidden">
              <iframe title="Map" className="w-full h-full grayscale-[30%]" src="https://www.google.com/maps?q=Kabul,Afghanistan&output=embed" loading="lazy" />
            </div>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-3xl glass luxe-border p-8 space-y-5 self-start">
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">{t("form.name")}</label>
              <input className="mt-1.5 w-full px-4 py-3 rounded-xl bg-muted/40 focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">{t("form.email")}</label>
              <input type="email" className="mt-1.5 w-full px-4 py-3 rounded-xl bg-muted/40 focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">{t("form.message")}</label>
              <textarea rows={5} className="mt-1.5 w-full px-4 py-3 rounded-xl bg-muted/40 focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
            </div>
            <button className="w-full py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-semibold tracking-wide shadow-glow hover:scale-[1.02] transition-transform">
              {sent ? "✓ Sent" : t("form.send")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
