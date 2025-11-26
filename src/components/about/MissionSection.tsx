import { BarChart3, BookOpen, Users, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import communityImage from "@/assets/community-learning.jpg";
import farmerImage from "@/assets/farmer-phone.jpg";
import marketImage from "@/assets/market-produce.jpg";

const MissionSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Leaf Shapes - Very Faint */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <ellipse cx="100" cy="100" rx="80" ry="100" fill="#4CAF50" transform="rotate(-30 100 100)" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-72 h-72 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <ellipse cx="100" cy="100" rx="90" ry="110" fill="#4CAF50" transform="rotate(20 100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-20 w-56 h-56 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <ellipse cx="100" cy="100" rx="70" ry="90" fill="#4CAF50" transform="rotate(45 100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-10 w-80 h-80 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <ellipse cx="100" cy="100" rx="95" ry="115" fill="#4CAF50" transform="rotate(-15 100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-6">
          Our Mission
        </h2>
        <p className="text-lg text-center text-muted-foreground max-w-4xl mx-auto mb-16">
          To empower farmers through technology, knowledge and market access, while connecting them to tools that
          unlock sustainable productivity and income growth.
        </p>

        <h3 className="text-2xl lg:text-3xl font-bold text-center text-foreground mb-12">
          What we aim to achieve
        </h3>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Farmer with Green Circle Background */}
          <div className="relative flex items-center justify-center">
            {/* Green circular background */}
            <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-br from-green-300/40 to-green-400/40 blur-sm"></div>

            {/* Main farmer image container */}
            <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden shadow-2xl">
              <img src={farmerImage} alt="Farmer using mobile app" className="w-full h-full object-cover" />
            </div>

            {/* Floating inset image - Community (bottom left) */}
            <div className="absolute bottom-8 left-0 bg-white rounded-2xl p-3 shadow-xl border-4 border-white z-10">
              <img src={communityImage} alt="Community" className="w-32 h-24 object-cover rounded-lg" />
            </div>

            {/* Floating inset card - Market (bottom right) */}
            <div className="absolute bottom-16 right-0 bg-white rounded-2xl p-4 shadow-xl border-4 border-white z-10 min-w-[180px]">
              <img src={marketImage} alt="Market" className="w-full h-20 object-cover rounded-lg mb-2" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <p className="text-xs font-semibold">Access Market</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Connect directly with buyers</p>
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="space-y-6">
            <div className="flex gap-4 items-start bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">Zao Insight</h4>
                <p className="text-muted-foreground">
                  Leverage tech tools to provide farmers with specialized, integrated insights to manage their farms
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">Zao Learn</h4>
                <p className="text-muted-foreground">
                  Provide knowledge, training, and tools to help farmers grow and improve their skills
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">Zao Connect</h4>
                <p className="text-muted-foreground">
                  Bring farmers, experts, and markets together through a supportive digital platform
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">Zao Market</h4>
                <p className="text-muted-foreground">
                  Help farmers sell their products, reach buyers, and get fair prices
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">Zao AI</h4>
                <p className="text-muted-foreground">
                  Provide 24/7 AI support to farmers for their urgent farming needs
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg">
            Get Zao App Today →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
