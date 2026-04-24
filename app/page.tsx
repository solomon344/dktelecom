import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Partners from "@/components/Partners";
import AboutSection from "@/components/AboutSection";
import PlansSection from "@/components/PlansSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Partners />
      <AboutSection />
      <PlansSection />
      <ServicesSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </main>
  );
}
