import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Smartphone, BookOpen } from "lucide-react";
import farmerPhone from "@/assets/farmer-phone.jpg";

const LearningSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Zao Learn – Grow Knowledge, Grow Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn modern and traditional farming practices through expert-led courses, easy-to-access lessons, practical guides, and real-world insights tailored for every farmer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Here's what you get with Zao Learn:
            </h3>

            <Card className="p-6 border-border bg-card">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    Courses & Tutorials
                  </h4>
                  <p className="text-muted-foreground">
                    Access lessons on modern farming, agribusiness, climate-smart agriculture, and more.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-success/10 flex items-center justify-center">
                  <Smartphone className="w-7 h-7 text-success" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    Learn Anytime, Anywhere
                  </h4>
                  <p className="text-muted-foreground">
                    Mobile-friendly videos, articles, and short lessons made easy for farmers.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    Expert Advice & Best Practices
                  </h4>
                  <p className="text-muted-foreground">
                    Learn from trained professionals and successful farmers across Africa and the world.
                  </p>
                </div>
              </div>
            </Card>

            <Button variant="link" className="text-accent text-lg p-0">
              View App Demo →
            </Button>
          </div>

          <div className="relative">
            <div className="rounded-full overflow-hidden w-full max-w-md mx-auto aspect-square shadow-2xl">
              <img 
                src={farmerPhone} 
                alt="Learning platform" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;