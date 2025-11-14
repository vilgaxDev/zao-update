import { Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AccessSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-4">
          Access Zao Your Way
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
          Choose the access method that works best for your situation. Every farmer can 
          participate regardless of their device or connectivity.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Mobile App */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Smartphone className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Mobile App</h3>
            <p className="text-muted-foreground mb-6">
              Full featured app with offline capabilities, perfect for the on the go access to courses, community and marketplace.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-foreground">
                <span className="text-success">✓</span>
                Works offline
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <span className="text-success">✓</span>
                Push notifications
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <span className="text-success">✓</span>
                Camera integration
              </li>
            </ul>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                Apple Store
              </Button>
            </div>
          </div>

          {/* USSD Access */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <span className="text-3xl">📱</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">USSD Access</h3>
            <p className="text-muted-foreground mb-6">
              Use any basic phone to access key farming tips, market prices, and community updates through simple menu navigation.
            </p>
            <div className="bg-muted/50 rounded-lg p-4 mb-6">
              <div className="text-sm text-muted-foreground mb-2">Dial *XYZ*123#</div>
              <div className="space-y-2 text-xs">
                <div className="bg-background p-2 rounded">Registration:<br />(Enter County, Sub-County And Ward)</div>
                <div className="bg-background p-2 rounded">
                  Select<br />
                  1. Crop<br />
                  2. Livestock<br />
                  3. Equipment
                </div>
                <div className="bg-background p-2 rounded">
                  1. Buy<br />
                  2. Sell<br />
                  3. My Account
                </div>
                <div className="bg-background p-2 rounded">
                  Select<br />
                  1. Subscribe to Alerts<br />
                  2. Buy Market<br />
                  3. Edit Profile
                </div>
                <div className="bg-primary text-white p-2 rounded">
                  Select<br />
                  1. Order, Livestock/<br />Equipment - Services
                </div>
              </div>
            </div>
          </div>

          {/* Web Platform */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="w-16 h-16 rounded-xl bg-success/10 flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-success" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Web Platform</h3>
            <p className="text-muted-foreground mb-6">
              Access Zao through any web browsers on desktop or mobile. Quick registration gets you started immediately
            </p>
            <div className="space-y-4 mb-6">
              <Input placeholder="Full Name" />
              <Input placeholder="Phone Number" type="tel" />
              <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                <option>Select your region</option>
              </select>
            </div>
            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;
