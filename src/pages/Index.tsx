import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AccessSection from "@/components/AccessSection";
import MissionSection from "@/components/MissionSection";
import AgenciesPreview from "@/components/AgenciesPreview";
import AboutHeroSection from "@/components/about/HeroSection";
import AboutMissionSection from "@/components/about/MissionSection";
import AboutFeaturesSection from "@/components/about/FeaturesSection";
import AboutAccessSection from "@/components/about/AccessSection";
import TestimonialsSection from "@/components/about/TestimonialsSection";
import AgenciesSection from "@/components/about/AgenciesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Original Homepage Sections */}
      <Hero />
      {/* <MissionSection /> */}
      <AboutMissionSection />


      {/* About Us Page Sections */}
      {/* <AboutHeroSection /> */}

      <AboutFeaturesSection />
      {/* <AccessSection /> */}
      <AboutAccessSection />
      <TestimonialsSection />
      {/* <AgenciesSection /> */}

      {/* Original Homepage Agency Preview */}
      <AgenciesPreview />

      <Footer />
    </div>
  );
};

export default Index;
