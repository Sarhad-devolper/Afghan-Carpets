"use client";
import { Instagram } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import rug1 from "@/assets/rughero2.jpg";
import rug2 from "@/assets/insta2.jpg";
import rug3 from "@/assets/insta3.jpg";
import rug4 from "@/assets/insta4.jpg";
import rug5 from "@/assets/insta10.jpg";
import rug6 from "@/assets/insta9.jpg";
import rug7 from "@/assets/insta1.jpg";
import rug8 from "@/assets/insta8.jpg";
import rug9 from "@/assets/insta6.jpg";
import rug10 from "@/assets/insta7.jpg";
import rug11 from "@/assets/insta11.jpg";
import rug12 from "@/assets/insta12.jpg";
import Image from "next/image";

const tiles = [
  { img: rug2, span: "row-span-2" },
  { img: rug10, span: "" },
  { img: rug4, span: "" },
  { img: rug6, span: "row-span-2" },
  { img: rug1, span: "" },
  { img: rug3, span: "" },
  { img: rug5, span: "row-span-2" },
  { img: rug7, span: "" },
  { img: rug8, span: "" },
  { img: rug9, span: "row-span-2" },
  { img: rug11, span: "" },
  { img: rug12, span: "" },
];

export function InstagramGallery() {
  const { t } = useI18n();
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-luxe">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass text-xs uppercase tracking-[0.3em] text-primary mb-5 luxe-border">
            <Instagram className="h-3 w-3" /> @afghancarpets
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gradient-gold">
            {t("section.social")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("section.social.sub")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] sm:auto-rows-[180px] gap-3 sm:gap-4">
          {tiles.map((t, i) => (
            <a
              key={i}
              href="#"
              className={`group relative overflow-hidden rounded-2xl luxe-border ${t.span}`}
            >
              <Image
                src={t.img}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/30 opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center">
                <Instagram className="h-7 w-7 text-primary" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
