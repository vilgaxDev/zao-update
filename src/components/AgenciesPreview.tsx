import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const agencies = [
  { name: "KALRO", logo: "🌱" },
  { name: "AFC", logo: "🌽" },
  { name: "AFA", logo: "🌿" },
  { name: "NCPB", logo: "🌾" },
  { name: "KEPHIS", logo: "🌿" },
];

const AgenciesPreview = () => {
  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      <div className="absolute top-20 left-20 w-40 h-40 bg-decorative-yellow rounded-full opacity-40 blur-3xl" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-decorative-pink rounded-full opacity-40 blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Connect with Agencies</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how Zao's comprehensive platform combines learning, community and 
            marketplace to accelerate your agricultural success
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 mb-12">
          {agencies.map((agency) => (
            <div key={agency.name} className="w-32 h-32 bg-background rounded-2xl shadow-lg flex items-center justify-center text-5xl hover:scale-110 transition-transform">
              {agency.logo}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/agencies">
            <Button className="bg-primary hover:bg-green-dark text-primary-foreground font-semibold px-8 py-6">
              View All Agencies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AgenciesPreview;
