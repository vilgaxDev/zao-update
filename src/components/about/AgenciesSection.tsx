import { Button } from "@/components/ui/button";

const AgenciesSection = () => {
  const agencies = [
    { name: "KALRO", logo: "🌾" },
    { name: "AFC", logo: "🌽" },
    { name: "AFA", logo: "🌍" },
    { name: "NCPB", logo: "🌾" },
    { name: "KEPHIS", logo: "🌱" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-4">
          Connect with Agencies
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
          Discover how Zao's comprehensive platform combines learning, community and 
          marketplace to accelerate your agricultural success
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 mb-12">
          {agencies.map((agency, index) => (
            <div
              key={index}
              className="w-32 h-32 rounded-full bg-muted border border-border flex items-center justify-center text-5xl hover:scale-110 transition-transform"
            >
              {agency.logo}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
            View All Agencies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AgenciesSection;
