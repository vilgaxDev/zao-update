import { Button } from "@/components/ui/button";
import bgImage from "@/assets/hero-tea-plantation.jpg";
import farmerTablet from "@/assets/farmer-tablet.jpg";
import farmersGroup from "@/assets/hero_feature_farmers_1764087841607.png";
import womanPhone from "@/assets/woman_farmer_phone_1764152234465.png";
import cloudTransition from "@/assets/cloud_solid_white_1764159719196.png";

const FeaturesSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Graphics */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Radar Circles */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
              <div className="absolute inset-0 rounded-full border border-green-500/20 animate-pulse" />
              <div className="absolute inset-[50px] rounded-full border border-green-500/30 animate-pulse delay-75" />
              <div className="absolute inset-[100px] rounded-full border border-green-500/40 animate-pulse delay-150" />
              <div className="absolute inset-[150px] rounded-full bg-green-500/10 blur-3xl" />
            </div>

            {/* Main Image - Farmer with Tablet */}
            <div className="relative z-20 w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img
                src={farmerTablet}
                alt="Farmer using tablet"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Left Image - Community */}
            <div className="absolute left-0 bottom-20 z-30 w-48 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <img
                src={farmersGroup}
                alt="Farming community"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Right Image - Mobile App */}
            <div className="absolute right-0 top-20 z-30 w-48 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <img
                src={womanPhone}
                alt="Mobile app usage"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-white space-y-8 max-w-xl">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              Explore Zao's Powerful Features
            </h2>
            <p className="text-xl lg:text-2xl font-medium text-white/90 leading-relaxed">
              Everything you need—insights, connections, learning, shopping, and AI—all in one smart app.
            </p>
            <Button
              size="lg"
              className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-8 py-6 text-lg rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Get Mobile App
            </Button>
          </div>
        </div>
      </div>

      {/* Realistic Cloud Overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none h-[400px]">
        <img
          src={cloudTransition}
          alt=""
          className="w-full h-full object-cover object-bottom opacity-90"
          style={{
            maskImage: 'linear-gradient(to top, white 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, white 60%, transparent 100%)'
          }}
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
