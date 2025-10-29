import HeroSection from "./components/home/HeroSection";
import FeaturesGrid from "./components/home/FeaturesGrid";
import CTABanner from "./components/home/CTABanner";

export default function HomePage() {
  return (
    <div className="bg-[#0d0d0d] text-white">
      <HeroSection />
      <FeaturesGrid />
      <CTABanner />
    </div>
  );
}