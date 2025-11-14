import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import registrationMockup from "@/assets/zao-registration-mockup.png";

const AppDemo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-decorative-yellow rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-10 right-20 w-48 h-48 bg-decorative-pink rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-40 right-40 w-24 h-24 bg-decorative-green rounded-full opacity-20 blur-3xl" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Discover the Future of Farming with Zao
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Your all-in-one farming companion — learn, connect, trade, and grow with
            powerful tools designed for every farmer.
          </p>
          <Button className="bg-primary hover:bg-green-dark text-primary-foreground font-semibold px-8 py-6 text-lg">
            Get Mobile App
          </Button>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-40 left-20 w-40 h-40 bg-decorative-green rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-decorative-pink rounded-full opacity-10 blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Experience Zao in Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Take a visual tour of the Zao app — explore its powerful features, interactive tools, and how it
              helps farmers learn, connect, and grow smarter
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Accordion type="single" collapsible defaultValue="registration" className="space-y-4">
              {/* Zao Registration */}
              <AccordionItem value="registration" className="border border-border rounded-2xl bg-card overflow-hidden">
                <AccordionTrigger className="px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 text-2xl font-bold hover:no-underline">
                  Zao Registration
                </AccordionTrigger>
                <AccordionContent className="px-8 py-8 bg-card">
                  <div className="relative">
                    <img 
                      src={registrationMockup} 
                      alt="Zao Registration Screens" 
                      className="w-full mx-auto mb-6"
                    />
                    <p className="text-center text-muted-foreground mb-4">
                      Log in to Zao Account to view your personalized
                    </p>
                    <p className="text-center text-muted-foreground mb-6">
                      Insight page with real-time weather, crop tips, and smart farm recommendations
                    </p>
                    
                    {/* Carousel Controls */}
                    <div className="flex items-center justify-center gap-4">
                      <button
                        onClick={prevSlide}
                        className="p-2 hover:bg-muted rounded-full transition-colors"
                        aria-label="Previous slide"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      
                      <div className="flex gap-2">
                        {[...Array(totalSlides)].map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                              idx === currentSlide ? "bg-foreground" : "bg-muted-foreground/30"
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                          />
                        ))}
                      </div>
                      
                      <button
                        onClick={nextSlide}
                        className="p-2 hover:bg-muted rounded-full transition-colors"
                        aria-label="Next slide"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Zao Insight */}
              <AccordionItem value="insight" className="border border-border rounded-2xl bg-card overflow-hidden">
                <AccordionTrigger className="px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 text-2xl font-bold hover:no-underline">
                  Zao Insight
                </AccordionTrigger>
                <AccordionContent className="px-8 py-8 bg-card">
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      Get personalized insights with real-time weather updates, AI crop diagnosis, and yield predictions to optimize your farm management.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Zao Connect */}
              <AccordionItem value="connect" className="border border-border rounded-2xl bg-card overflow-hidden">
                <AccordionTrigger className="px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 text-2xl font-bold hover:no-underline">
                  Zao Connect
                </AccordionTrigger>
                <AccordionContent className="px-8 py-8 bg-card">
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      Connect with experienced farmers, join discussion groups, find mentors, and participate in local farming events.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Zao Learn */}
              <AccordionItem value="learn" className="border border-border rounded-2xl bg-card overflow-hidden">
                <AccordionTrigger className="px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 text-2xl font-bold hover:no-underline">
                  Zao Learn
                </AccordionTrigger>
                <AccordionContent className="px-8 py-8 bg-card">
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      Access comprehensive courses on modern farming techniques, crop management, and sustainable practices with video lessons and certifications.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Zao Market */}
              <AccordionItem value="market" className="border border-border rounded-2xl bg-card overflow-hidden">
                <AccordionTrigger className="px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 text-2xl font-bold hover:no-underline">
                  Zao Market
                </AccordionTrigger>
                <AccordionContent className="px-8 py-8 bg-card">
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      Buy and sell agricultural products, access market prices, and connect directly with buyers and suppliers.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Zao AI */}
              <AccordionItem value="ai" className="border border-border rounded-2xl bg-card overflow-hidden">
                <AccordionTrigger className="px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 text-2xl font-bold hover:no-underline">
                  Zao AI
                </AccordionTrigger>
                <AccordionContent className="px-8 py-8 bg-card">
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      Leverage AI-powered tools for crop diagnosis, pest identification, yield optimization, and smart farming recommendations.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-12">
              <Button className="bg-primary hover:bg-green-dark text-primary-foreground font-semibold px-8 py-6 text-lg">
                Download Zao App
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppDemo;
