import { Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";

const AccessSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-decorative-yellow rounded-full opacity-40 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-decorative-pink rounded-full opacity-40 blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Access Zao Your Way</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the access method that works best for your situation. Every farmer can 
            participate regardless of their device or connectivity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Mobile App */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6">
              <Smartphone className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Mobile App</h3>
            <p className="text-muted-foreground mb-6">
              Full featured app with offline capabilities, perfect for the on the go access to courses, community and marketplace.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-accent" />
                <span className="text-sm">Works offline</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-accent" />
                <span className="text-sm">Push notifications</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-accent" />
                <span className="text-sm">Camera integration</span>
              </div>
            </div>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start gap-3">
                <img src="https://www.gstatic.com/android/market_images/web/play_prism_hlock_2x.png" alt="Google Play" className="h-6" />
                Google Play
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Apple Store
              </Button>
            </div>
          </div>
          
          {/* USSD Access */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-accent-foreground">*#</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">USSD Access</h3>
            <p className="text-muted-foreground mb-6">
              Use any basic phone to access key farming tips, market prices, and community updates through simple menu navigation.
            </p>
            <div className="bg-muted rounded-xl p-6 mt-8">
              <div className="text-center space-y-4">
                <div className="bg-background rounded-lg p-4">
                  <p className="text-sm font-mono">Dial *XYZ*123#</p>
                </div>
                <div className="text-xs text-muted-foreground">
                  <p>Registration:</p>
                  <p>(Enter County, Sub County And Ward)</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Web Platform */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <div className="w-16 h-16 bg-green-accent rounded-xl flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Web Platform</h3>
            <p className="text-muted-foreground mb-6">
              Access Zao through any web browsers on desktop or mobile. Quick registration gets you started immediately
            </p>
            <div className="space-y-4 mt-8">
              <Input placeholder="Full Name" className="bg-background" />
              <Input placeholder="Phone Number" className="bg-background" />
              <select className="w-full px-4 py-2 border border-input rounded-md bg-background">
                <option>Select your region</option>
              </select>
              <Button className="w-full bg-accent hover:bg-yellow-dark text-accent-foreground font-semibold">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;
