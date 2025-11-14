import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/services/HeroSection";
import AIAssistantSection from "@/components/services/AIAssistantSection";
import MarketplaceSection from "@/components/services/MarketplaceSection";
import LearningSection from "@/components/services/LearningSection";
import CommunitySection from "@/components/services/CommunitySection";
import GetStartedSection from "@/components/services/GetStartedSection";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AIAssistantSection />
        <MarketplaceSection />
        <LearningSection />
        <CommunitySection />
        <GetStartedSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;