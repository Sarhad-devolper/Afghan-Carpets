import type { StaticImageData } from "next/image";

import rug1 from "@/assets/rug-1.jpg";
import rug2 from "@/assets/rug-2.jpg";
import rug3 from "@/assets/rug-3.jpg";
import rug4 from "@/assets/rug-4.jpg";
import rug5 from "@/assets/rug-5.jpg";
import rug6 from "@/assets/rug-6.jpg";

export type Category = "traditional" | "persian" | "modern" | "tribal" | "vintage" | "silk";

export type Product = {
  id: string;
  title: { en: string; fa: string; ps: string };
  price: number;
  image: StaticImageData;
  category: Category;
  size: string;
  material: string;
  origin: string;
  rating: number;
  inStock: boolean;
  badge?: "featured" | "new" | "sale";
};

export const products: Product[] = [
  {
    id: "herati-medallion",
    title: { en: "Herati Medallion Crimson", fa: "هراتی مدالیون قرمز", ps: "هراتی مډالیون سور" },
    price: 1890,
    image: rug1,
    category: "traditional",
    size: "240 × 170 cm",
    material: "Hand-knotted wool",
    origin: "Herat, Afghanistan",
    rating: 4.9,
    inStock: true,
    badge: "featured",
  },
  {
    id: "isfahan-royal",
    title: { en: "Isfahan Royal Garden", fa: "اصفهان باغ سلطنتی", ps: "اصفهان شاهي باغ" },
    price: 3450,
    image: rug2,
    category: "persian",
    size: "300 × 200 cm",
    material: "Silk & wool blend",
    origin: "Persian heritage",
    rating: 5.0,
    inStock: true,
    badge: "featured",
  },
  {
    id: "kazak-tribal",
    title: { en: "Kazak Tribal Sun", fa: "کازاک قبیله‌ای خورشید", ps: "کازاک قبیلوي لمر" },
    price: 1290,
    image: rug3,
    category: "tribal",
    size: "200 × 140 cm",
    material: "Pure highland wool",
    origin: "Kunduz, Afghanistan",
    rating: 4.7,
    inStock: true,
  },
  {
    id: "vintage-rose",
    title: { en: "Vintage Rose Patina", fa: "گل رز قدیمی", ps: "زاړه ګلاب" },
    price: 2150,
    image: rug4,
    category: "vintage",
    size: "260 × 180 cm",
    material: "Aged wool, natural dyes",
    origin: "Restored vintage",
    rating: 4.8,
    inStock: true,
    badge: "sale",
  },
  {
    id: "modern-bauhaus",
    title: { en: "Modern Bauhaus Ivory", fa: "مدرن باوهاوس عاج", ps: "اوسنی باوهاوس عاج" },
    price: 1540,
    image: rug5,
    category: "modern",
    size: "240 × 240 cm",
    material: "Hand-tufted wool",
    origin: "Contemporary",
    rating: 4.6,
    inStock: true,
    badge: "new",
  },
  {
    id: "silk-imperial",
    title: { en: "Silk Imperial Gold", fa: "ابریشم امپریال طلایی", ps: "وریښم سلطنتي زرین" },
    price: 4890,
    image: rug6,
    category: "silk",
    size: "Round 200 cm",
    material: "Pure mulberry silk",
    origin: "Master atelier",
    rating: 5.0,
    inStock: true,
    badge: "featured",
  },
];
