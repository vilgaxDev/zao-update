import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";
import HeroSection from "@/components/about/HeroSection";
import MissionSection from "@/components/about/MissionSection";
import FeaturesSection from "@/components/about/FeaturesSection";
import AccessSection from "@/components/about/AccessSection";
import TestimonialsSection from "@/components/about/TestimonialsSection";
import AgenciesSection from "@/components/about/AgenciesSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
        <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <FeaturesSection />
        <AccessSection />
        <TestimonialsSection />
        <AgenciesSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
