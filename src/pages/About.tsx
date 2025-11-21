import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsAndTestimonialsSection from "@/components/about-page/StatsAndTestimonialsSection";
import TeamSection from "@/components/about-page/TeamSection";
import FounderSection from "@/components/about-page/FounderSection";
import CTASection from "@/components/about-page/CTASection";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-background pt-20">
        <CTASection />

        <FounderSection />

        <TeamSection />
        <StatsAndTestimonialsSection />

      </main>

      <Footer />
    </div>
  );
};

export default About;
