import { Users, Sparkles, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import communityImage from "@/assets/community-learning.jpg";
import farmerImage from "@/assets/farmer-phone.jpg";
import farmlandImage from "@/assets/hero-farmland.jpg";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-4">
          Our Comprehensive Features
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
          Discover how Zao's comprehensive platform combines learning, community and 
          marketplace to accelerate your agricultural success
        </p>

        <div className="space-y-20">
          {/* Zao Connect */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={communityImage} alt="Community networking" className="w-full h-auto" />
            </div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Zao Connect - Community Networking
              </h3>
              <p className="text-muted-foreground mb-6">
                Connect with experienced farmers, share knowledge, ask questions, and build 
                meaningful relationships that support your farming journey
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-foreground">
                  <span className="text-success">✓</span>
                  Regional farming discussion groups
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span className="text-success">✓</span>
                  Mentor matching for personalized guidance
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span className="text-success">✓</span>
                  Local farming events and meetups
                </li>
              </ul>
              <div className="flex gap-4">
                <Button variant="outline" className="border-success text-success hover:bg-success hover:text-white">
                  Expert Mentors
                </Button>
                <Button variant="ghost" className="text-foreground">
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* AI Insight */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                AI Insight- Agricultural Learning Platform
              </h3>
              <p className="text-muted-foreground mb-6">
                Leverage tech tools to provide farmers with specialized, integrated insights to manage their farms
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-foreground">
                  <span className="text-success">✓</span>
                  Real-Time Weather Updates
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span className="text-success">✓</span>
                  AI Crop Diagnosis
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span className="text-success">✓</span>
                  Crop Yield Prediction
                </li>
              </ul>
              <div className="flex gap-4">
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                  Modern Farming
                </Button>
                <Button variant="ghost" className="text-foreground">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2">
              <img src={farmerImage} alt="AI farming insights" className="w-full h-auto" />
            </div>
          </div>

          {/* Zao Learn */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={farmlandImage} alt="Agricultural learning" className="w-full h-auto" />
            </div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Zao Learn - Agricultural Learning Platform
              </h3>
              <p className="text-muted-foreground mb-6">
                Access comprehensive course on modern farming techniques, crop management, and 
                sustainable practices designed specifically for African agriculture
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-foreground">
                  <span className="text-success">✓</span>
                  Video based learning with local examples
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span className="text-success">✓</span>
                  Expert-led courses on crop optimizations
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span className="text-success">✓</span>
                  Certification program for course validation
                </li>
              </ul>
              <div className="flex gap-4">
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                  Video Lessons
                </Button>
                <Button variant="ghost" className="text-foreground">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
            View all features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
