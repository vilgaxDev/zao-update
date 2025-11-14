import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Package, TrendingUp } from "lucide-react";
import marketProduce from "@/assets/market-produce.jpg";

const MarketplaceSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Direct Marketplace With Zao Market
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sell your produce directly to buyers, access quality farming inputs, and direct profitable business relationships without middlemen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <Card className="overflow-hidden border-border hover:shadow-xl transition-shadow">
            <div className="aspect-video overflow-hidden">
              <img 
                src={marketProduce} 
                alt="Farm inputs marketplace" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Farm Inputs Marketplace
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Buy seeds, fertilizers, machinery, and tools directly from verified suppliers.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-success">Fair Prices</span>
                <Button variant="link" className="text-accent p-0 h-auto">
                  View Screens →
                </Button>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden border-border hover:shadow-xl transition-shadow">
            <div className="aspect-video overflow-hidden">
              <img 
                src={marketProduce} 
                alt="Sell farm produce" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Sell Farm Produce
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Farmers can list crops and products to reach local and international buyers.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-success">Ready market</span>
                <Button variant="link" className="text-accent p-0 h-auto">
                  View Screens →
                </Button>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden border-border hover:shadow-xl transition-shadow">
            <div className="aspect-video overflow-hidden">
              <img 
                src={marketProduce} 
                alt="Market trends" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Market Trends & Demand Insights
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Know which crops are in demand and where the best market opportunities are.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-success">Top Selling</span>
                <Button variant="link" className="text-accent p-0 h-auto">
                  View Screens →
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center space-x-4">
          <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
            View App Demo
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Download Zao App
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;