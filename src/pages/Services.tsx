import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/services/HeroSection";
import AIAssistantSection from "@/components/services/AIAssistantSection";
import MarketplaceSection from "@/components/services/MarketplaceSection";
import LearningSection from "@/components/services/LearningSection";
import CommunitySection from "@/components/services/CommunitySection";

import FeaturesSection from "@/components/FeaturesSection";
import GetStartedSection from "@/components/GetStartedSection";


const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
   
      
        <FeaturesSection />
        <GetStartedSection />
        <LearningSection />
        <CommunitySection />
         <MarketplaceSection />
           <AIAssistantSection />
        {/* <GetStartedSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Services;