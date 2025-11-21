import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farmland.jpg";

const HeroSection = () => {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
            </div>

            <div className="container mx-auto px-4 relative z-10 pt-20">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                        Explore Zao's Powerful Features
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                        Everything you need—insights, connections, learning, shopping, and AI—all in one smart app.
                    </p>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
                        Get Mobile App
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
