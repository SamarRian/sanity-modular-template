import { HeroSection1 } from "@/components/global/HeroSection";
import Navbar from "@/components/global/Navbar";
import { CompanyLogo } from "@/components/global/CompanyLogo";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Navbar />
        <HeroSection1 />
        <CompanyLogo />
      </main>
    </div>
  );
}
