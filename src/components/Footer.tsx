import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(142,50%,15%)] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Zao</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Empowering African farmers through accessible learning, meaningful connections, 
              and growth opportunities.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Subscribe to our news letter</h4>
            <Input
              placeholder="Email Address"
              className="mb-4 bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <div className="flex items-start gap-2 mb-4">
              <Checkbox id="terms" className="mt-1 border-white/40" />
              <label htmlFor="terms" className="text-sm text-white/80">
                By entering your email you agree to receive the Zao newsletter
              </label>
            </div>
            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Subscribe
            </Button>
          </div>

          {/* Features & Support */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="text-white/80 hover:text-white">Zao Insight</Link></li>
                <li><Link to="/services" className="text-white/80 hover:text-white">Zao Market</Link></li>
                <li><Link to="/services" className="text-white/80 hover:text-white">Zao Connect</Link></li>
                <li><Link to="/services" className="text-white/80 hover:text-white">Zao Learn</Link></li>
                <li><Link to="/services" className="text-white/80 hover:text-white">Zao AI</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="text-white/80 hover:text-white">Help Center</Link></li>
                <li><Link to="#" className="text-white/80 hover:text-white">USSD Guide</Link></li>
                <li><Link to="#" className="text-white/80 hover:text-white">Privacy Policies</Link></li>
                <li><Link to="#" className="text-white/80 hover:text-white">FAQ</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-white/80">+254 713 015 117</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-white/80">admin@zao.co.ke</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold">Zao</div>
          <div className="text-sm text-white/80">
            Copyright © 2025 Zao.com | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
