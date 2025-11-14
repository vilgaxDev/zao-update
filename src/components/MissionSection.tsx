import { BarChart3, BookOpen, Users, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import farmerTablet from "@/assets/farmer-tablet.jpg";

const MissionSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-decorative-green rounded-full opacity-30 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-decorative-pink rounded-full opacity-30 blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            To empower farmers through technology, knowledge and market access, while connecting them to tools that 
            unlock sustainable productivity and income growth.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-accent/20 to-accent/20 rounded-full blur-3xl" />
            <div className="relative">
              <div className="w-96 h-96 rounded-full overflow-hidden mx-auto border-8 border-decorative-green shadow-2xl">
                <img 
                  src={farmerTablet} 
                  alt="Farmer using technology" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Small floating images */}
              <div className="absolute top-10 left-0 w-32 h-24 rounded-xl overflow-hidden border-4 border-background shadow-lg">
                <img src={farmerTablet} alt="Feature" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-10 right-0 w-32 h-24 rounded-xl overflow-hidden border-4 border-background shadow-lg">
                <img src={farmerTablet} alt="Feature" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-8">What we aim to achieve</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Zao  Insight</h4>
                  <p className="text-muted-foreground">
                    Leverage tech tools to provide farmers with specialized, integrated insights to manage their farms
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Zao Learn</h4>
                  <p className="text-muted-foreground">
                    Provide knowledge, training, and tools to help farmers grow and improve their skills.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-green-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Zao Connect</h4>
                  <p className="text-muted-foreground">
                    Bring farmers, experts, and markets together through a supportive digital platform
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Zao  Market</h4>
                  <p className="text-muted-foreground">
                    Help farmers sell their products, reach buyers, and get fair prices.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-green-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Zao  AI</h4>
                  <p className="text-muted-foreground">
                    Provide 24/7 AI support to farmers for their urgent farming needs
                  </p>
                </div>
              </div>
            </div>
            
            <Button className="mt-8 bg-accent hover:bg-yellow-dark text-accent-foreground font-semibold">
              Get Zao App Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
