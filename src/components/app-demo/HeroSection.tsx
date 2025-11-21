import { Button } from "@/components/ui/button";

const HeroSection = () => {
    return (
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
    );
};

export default HeroSection;
