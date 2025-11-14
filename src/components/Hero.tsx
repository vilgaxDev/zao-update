import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farm.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url(${heroImage})` 
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Learning, Connecting,<br />Growing.
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-2xl">
              Empowering farmers and agribusinesses to thrive, by providing expert learning resources, 
              seamless connections and access to reliable markets that turn every harvest into opportunity.
            </p>
            <Button className="bg-green-accent hover:bg-green-light text-primary-foreground font-semibold text-lg px-8 py-6">
              Get Mobile App
            </Button>
          </div>
          
          <div className="hidden lg:block">
            <div className="bg-background rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Awesome Features</h3>
              <p className="text-muted-foreground mb-4">Explore Zao's comprehensive platforms;</p>
              <div className="flex gap-4 justify-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary">
                  <img src={heroImage} alt="Feature" className="w-full h-full object-cover" />
                </div>
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-accent">
                  <img src={heroImage} alt="Feature" className="w-full h-full object-cover" />
                </div>
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-green-accent">
                  <img src={heroImage} alt="Feature" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-decorative-yellow rounded-full opacity-60 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-decorative-green rounded-full opacity-60 blur-3xl" />
    </section>
  );
};

export default Hero;
