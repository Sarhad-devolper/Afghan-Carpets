"use client";
import { MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function WhatsAppButton() {
  const { t, dir } = useI18n();
  return (
    <a
      href="https://wa.me/93700000000?text=Hello%20Afghan%20Carpets"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 z-[55] group ${dir === "rtl" ? "left-6" : "right-6"}`}
      aria-label="WhatsApp"
    >
      <span
        className={`absolute top-1/2 -translate-y-1/2 ${
          dir === "rtl" ? "left-full ml-3" : "right-full mr-3"
        } whitespace-nowrap rounded-full glass px-3 py-1.5 text-xs opacity-0 group-hover:opacity-100 transition-opacity`}
      >
        {t("wa.tooltip")}
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full text-white shadow-luxe animate-pulse-gold" style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}>
        <MessageCircle className="h-6 w-6" />
      </span>
    </a>
  );
}
