import Navbar from "@/components/global/Navbar";
import { CompanyLogo } from "@/components/global/CompanyLogo";
import Testimonials from "@/components/global/Testimonial";
import TeamSection from "@/components/global/TeamSection";
import StatsSection from "@/components/global/StatsSection";
import PricingSection from "@/components/global/PricingSection";
import FaqSection from "@/components/global/FaqSection";
import FooterSection from "@/components/global/FooterSection";
import HeroSection1 from "@/components/global/HeroSection";
import ProductSection from "@/components/global/ProductSection";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Navbar />
        <HeroSection1 />
        <CompanyLogo />
        <Testimonials />
        <TeamSection />
        <ProductSection />
        <StatsSection />
        <PricingSection />
        <FaqSection />
        <FooterSection />
      </main>
    </div>
  );
}
