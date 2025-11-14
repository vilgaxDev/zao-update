import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farmland.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Learning, Connecting,<br />Growing.
          </h1>
          <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
            Empowering farmers and agribusinesses to thrive, by providing expert learning resources, 
            seamless connections and access to reliable markets that turn every harvest into opportunity.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
            Get Mobile App
          </Button>
        </div>

        <div className="absolute right-8 bottom-8 bg-white rounded-2xl p-6 shadow-2xl hidden lg:block">
          <h3 className="text-xl font-bold text-foreground mb-4">Awesome Features</h3>
          <div className="flex gap-4">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
              <span className="text-2xl">🌱</span>
            </div>
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
              <span className="text-2xl">👥</span>
            </div>
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
              <span className="text-2xl">🛒</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Explore Zao's<br />comprehensive<br />platforms:
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
