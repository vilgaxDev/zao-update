import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Package, TrendingUp, ChevronLeft, ChevronRight, Truck } from "lucide-react";
import marketProduce from "@/assets/market-produce.jpg";

const marketItems = [
  {
    title: "Farm Inputs Marketplace",
    description: "Buy seeds, fertilizers, machinery, and tools directly from verified suppliers.",
    icon: ShoppingCart,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    tag: "Fair Prices",
    image: marketProduce
  },
  {
    title: "Sell Farm Produce",
    description: "Farmers can list crops and products to reach local and international buyers.",
    icon: Package,
    iconColor: "text-success",
    iconBg: "bg-success/10",
    tag: "Ready market",
    image: marketProduce
  },
  {
    title: "Market Trends & Demand Insights",
    description: "Know which crops are in demand and where the best market opportunities are.",
    icon: TrendingUp,
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    tag: "Data Driven",
    image: marketProduce
  },
  {
    title: "Logistics Support",
    description: "Connect with reliable transport services to get your produce to market on time.",
    icon: Truck,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    tag: "Reliable",
    image: marketProduce
  }
];

const MarketplaceSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Chunk items into groups of 3
  const chunkedItems = [];
  for (let i = 0; i < marketItems.length; i += 3) {
    chunkedItems.push(marketItems.slice(i, i + 3));
  }

  return (
    <section className="py-16 lg:py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Direct Marketplace With Zao Market
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sell your produce directly to buyers, access quality farming inputs, and direct profitable business relationships without middlemen.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto group">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 bg-background/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 bg-background/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {chunkedItems.map((group, groupIndex) => (
              <div key={groupIndex} className="min-w-full grid md:grid-cols-3 gap-8 px-1 snap-center">
                {group.map((item, index) => (
                  <Card key={index} className="min-w-[300px] md:min-w-0 flex-shrink-0 snap-center overflow-hidden border-border hover:shadow-xl transition-shadow flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-start gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-lg ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
                          <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-4 flex-grow">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-4 mt-auto">
                        <span className="text-sm font-medium text-success">{item.tag}</span>
                        <Button variant="link" className="text-accent p-0 h-auto">
                          View Screens →
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
                {/* Fill empty slots to maintain grid layout */}
                {[...Array(3 - group.length)].map((_, i) => (
                  <div key={`empty-${i}`} className="hidden md:block"></div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-x-4 mt-8">
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