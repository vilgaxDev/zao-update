import { BarChart3, BookOpen, Users, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import communityImage from "@/assets/community-learning.jpg";
import farmerImage from "@/assets/farmer-phone.jpg";
import marketImage from "@/assets/market-produce.jpg";

const MissionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
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
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-success/20 rounded-full blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden">
              <img src={farmerImage} alt="Farmer using mobile app" className="w-full h-auto" />
              <div className="absolute top-4 left-4 bg-white rounded-xl p-3 shadow-lg">
                <img src={communityImage} alt="Community" className="w-24 h-24 object-cover rounded-lg" />
              </div>
              <div className="absolute bottom-4 right-4 bg-white rounded-xl p-3 shadow-lg">
                <img src={marketImage} alt="Market" className="w-32 h-20 object-cover rounded-lg" />
                <p className="text-xs mt-2 font-medium">Access Market</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start bg-card p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">Zao Insight</h4>
                <p className="text-muted-foreground">
                  Leverage tech tools to provide farmers with specialized, integrated insights to manage their farms
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-card p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">Zao Learn</h4>
                <p className="text-muted-foreground">
                  Provide knowledge, training, and tools to help farmers grow and improve their skills
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-card p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-success" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">Zao Connect</h4>
                <p className="text-muted-foreground">
                  Bring farmers, experts, and markets together through a supportive digital platform
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-card p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">Zao Market</h4>
                <p className="text-muted-foreground">
                  Help farmers sell their products, reach buyers, and get fair prices
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-card p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-primary" />
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
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
            Get Zao App Today →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
