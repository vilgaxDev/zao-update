import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg-original.png";
import feature1 from "@/assets/hero_feature_crops_1764087811274.png";
import feature2 from "@/assets/hero_feature_farmers_1764087841607.png";
import feature3 from "@/assets/hero-feature-market.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden -mt-[80px] bg-gradient-to-b from-green-50 to-green-100">
      {/* Background Image */}
      <img
        src={heroBackground}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover md:object-contain object-center"
      />

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full flex items-center pt-[80px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-2xl">
          {/* Left Side - Hero Content */}
          {/* <div className="text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Learning, Connecting,<br />Growing.
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-xl opacity-95">
              Empowering farmers and agribusinesses to thrive, by providing expert learning resources, seamless connections and access to reliable markets that turn every harvest into opportunity.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
            >
              Get Mobile App
            </Button>
          </div> */}

          {/* Right Side - Awesome Features Card */}
          {/* <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative bg-white rounded-tl-[120px] px-12 pt-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Awesome Features</h3>
              <div className="flex items-start gap-6">
           
                <div className="flex-shrink-0 bg-white rounded-2xl p-3 shadow-lg border-4 border-white" style={{ marginTop: '-10px' }}>
                  <div className="flex -space-x-3">
                    <div className="w-16 h-16 rounded-full border-3 border-white overflow-hidden shadow-md">
                      <img src={feature1} alt="Tea leaves" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-16 h-16 rounded-full border-3 border-white overflow-hidden shadow-md">
                      <img src={feature2} alt="Farmers working" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-16 h-16 rounded-full border-3 border-white overflow-hidden shadow-md">
                      <img src={feature3} alt="Fresh produce" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
      
                <div className="flex-1">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Explore Zao's comprehensive platforms:
                  </p>
                </div>
              </div>
          
              <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden">
                <svg viewBox="0 0 500 50" className="w-full h-full" preserveAspectRatio="none">
                  <path d="M0,0 Q250,50 500,0 L500,50 L0,50 Z" fill="white" />
                </svg>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
