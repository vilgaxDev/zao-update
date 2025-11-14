import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AccessSection from "@/components/AccessSection";
import FeaturesSection from "@/components/FeaturesSection";
import MissionSection from "@/components/MissionSection";
import AgenciesPreview from "@/components/AgenciesPreview";
import Footer from "@/components/Footer";
 
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AccessSection />
      <FeaturesSection />
      <MissionSection />
      <AgenciesPreview />
      <Footer />
    </div>
  );
};

export default Index;
