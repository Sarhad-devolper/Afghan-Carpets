import type { Metadata } from "next";
import { AboutStory } from "@/components/AboutStory";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "About Us — Afghan Carpets",
  description: "Discover the story of Afghan Carpets — a family of artisans preserving the heritage of hand-knotted rugs.",
};

export default function AboutPage() {
  return (
    <div className="pt-32">
      <div className="container mx-auto px-6 text-center max-w-3xl mb-12">
        <div className="inline-block px-4 py-1 rounded-full glass text-xs uppercase tracking-[0.3em] text-primary mb-5">About</div>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-gradient-gold leading-tight">The art of the loom</h1>
        <p className="mt-5 text-muted-foreground text-lg">
          From the highlands of Afghanistan to homes across the world, every Afghan Carpet is a living
          piece of culture — knotted by hand, dyed with care, and built to outlive generations.
        </p>
      </div>
      <AboutStory />
      <WhyUs />
      <Testimonials />
    </div>
  );
}
