import { Button } from "@/components/ui/button";

const CTASection = () => {
    return (
        <section className="py-12 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <Button className="bg-primary hover:bg-green-dark text-primary-foreground font-semibold px-8 py-6 text-lg">
                        Download Zao App
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
