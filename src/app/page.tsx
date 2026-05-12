import { Hero } from "@/components/Hero";
import { FeaturedCollections } from "@/components/FeaturedCollections";
import { BestSellers } from "@/components/BestSellers";
import { ShopByStyle } from "@/components/ShopByStyle";
import { HeritageStory } from "@/components/HeritageStory";
import { CraftsmanshipProcess } from "@/components/CraftsmanshipProcess";
import { Materials } from "@/components/Materials";
import { InteriorShowcase } from "@/components/InteriorShowcase";
import { NewArrivals } from "@/components/NewArrivals";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { GlobalShipping } from "@/components/GlobalShipping";
import { InstagramGallery } from "@/components/InstagramGallery";
import { QuickContactCTA } from "@/components/QuickContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <BestSellers />
      <ShopByStyle />
      <HeritageStory />
      <CraftsmanshipProcess />
      <Materials />
      <InteriorShowcase />
      <NewArrivals />
      <WhyUs />
      <Testimonials />
      <GlobalShipping />
      <InstagramGallery />
      <QuickContactCTA />
    </>
  );
}
