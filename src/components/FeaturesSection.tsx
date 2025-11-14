import { Users, Lightbulb, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import communityImg from "@/assets/community.jpg";
import techFarmingImg from "@/assets/tech-farming.jpg";
import learningImg from "@/assets/learning-landscape.jpg";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-decorative-green rounded-full opacity-40 blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Comprehensive Features</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how Zao's comprehensive platform combines learning, community and 
            marketplace to accelerate your agricultural success
          </p>
        </div>
        
        <div className="space-y-20">
          {/* Zao Connect */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={communityImg} 
                alt="Community Networking" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 bg-green-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-accent" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Zao Connect - Community Networking</h3>
              <p className="text-muted-foreground mb-6">
                Connect with experienced farmers, share knowledge, ask questions, and build 
                meaningful relationships that support your farming journey.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-accent" />
                  <span>Regional farming discussion groups</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-accent" />
                  <span>Mentor matching for personalized guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-accent" />
                  <span>Local farming events and meetups</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" className="text-green-accent border-green-accent hover:bg-green-accent hover:text-primary-foreground">
                  Expert Mentors
                </Button>
                <Button variant="link" className="text-foreground">Learn More</Button>
              </div>
            </div>
          </div>
          
          {/* AI Insight */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-3xl font-bold mb-4">AI Insight- Agricultural Learning Platform</h3>
              <p className="text-muted-foreground mb-6">
                Leverage tech tools to provide farmers with specialized, integrated insights to manage their farms.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-accent" />
                  <span>Real-Time Weather Updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-accent" />
                  <span>AI Crop Diagnosis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-accent" />
                  <span>Crop Yield Prediction</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" className="text-accent border-accent hover:bg-accent hover:text-accent-foreground">
                  Modern Farming
                </Button>
                <Button variant="link" className="text-foreground">Learn More</Button>
              </div>
            </div>
            <div>
              <img 
                src={techFarmingImg} 
                alt="Agricultural Technology" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
          
          {/* Zao Learn */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={learningImg} 
                alt="Agricultural Learning" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Zao Learn - Agricultural Learning Platform</h3>
              <p className="text-muted-foreground mb-6">
                Access comprehensive course on modern farming techniques, crop management, and 
                sustainable practices designed specifically for African agriculture.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-accent" />
                  <span>Video based learning with local examples</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-accent" />
                  <span>Expert-led courses on crop optimizations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-accent" />
                  <span>Certification program for course validation</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" className="text-accent border-accent hover:bg-accent hover:text-accent-foreground">
                  Video Lessons
                </Button>
                <Button variant="link" className="text-foreground">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Button className="bg-primary hover:bg-green-dark text-primary-foreground font-semibold px-8 py-6">
            View all features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
