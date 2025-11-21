import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/app-demo/HeroSection";
import ExperienceSection from "@/components/app-demo/ExperienceSection";
import CTASection from "@/components/app-demo/CTASection";

const AppDemo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default AppDemo;
