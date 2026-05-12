"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import rug1 from "@/assets/rug11.jpg"
import rug2 from "@/assets/rug12.jpg";
import rug3 from "@/assets/rug-3.jpg";
import rug4 from "@/assets/rugstyle00.jpg";
import rug5 from "@/assets/rugstyle5.jpg";
import rug6 from "@/assets/rugstyle7.jpg";
import Image from "next/image";

const styles = [
  { key: "traditional", img: rug1 },
  { key: "persian", img: rug2 },
  { key: "modern", img: rug5 },
  { key: "vintage", img: rug4 },
  { key: "tribal", img: rug3 },
  { key: "silk", img: rug6 },
];

export function ShopByStyle() {
  const { t } = useI18n();
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-block px-4 py-1 rounded-full glass text-xs uppercase tracking-[0.3em] text-primary mb-5">
            {t("section.style.tag")}
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gradient-gold">
            {t("section.style")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("section.style.sub")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {styles.map((s, i) => (
            <Link
              href="/products"
              key={s.key}
              className="group relative block aspect-[4/5] overflow-hidden rounded-2xl luxe-border shadow-card hover:shadow-luxe transition-shadow animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Image
                src={s.img}
                alt={t(`filter.${s.key}`)}
                fill
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary/80 mb-1">
                    {t("section.style.collection")}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-gradient-gold">
                    {t(`filter.${s.key}`)}
                  </h3>
                </div>
                <span className="h-10 w-10 grid place-items-center rounded-full glass-strong luxe-border text-primary translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <ArrowUpRight className="h-4 w-4 rtl:rotate-90" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
