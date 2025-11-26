import { Button } from "@/components/ui/button";
import { Sprout, Sparkles, Download } from "lucide-react";
import womanFarmer from "@/assets/woman_farmer_phone_1764152234465.png";
import farmersGroup from "@/assets/hero_feature_farmers_1764087841607.png";
import cropsField from "@/assets/hero_feature_crops_1764087811274.png";

const AIAssistantSection = () => {
    return (
        <section className="py-16 lg:py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        Zao AI – Grow Together, Farm Smarter
                    </h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto">
                        Connect with experienced farmers, share knowledge, ask questions, and build meaningful relationships that support your farming journey.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">
                                Your Digital Farming Assistant
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Get instant support anytime, anywhere. Zao's AI assistant is available 24/7 to answer your farming questions, provide quick solutions, and guide you through urgent challenges—so help is always just a tap away.
                            </p>
                        </div>

                        <div className="space-y-6 border border-border rounded-3xl p-8 bg-card/50 backdrop-blur-sm">
                            <div className="flex gap-5">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Sprout className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-foreground mb-2">
                                        Smart Farming Assistant
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Get quick answers and guidance tailored to your crops and challenges.
                                    </p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-border/50" />

                            <div className="flex gap-5">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Sparkles className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-foreground mb-2">
                                        Personalized Recommendations
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Receive custom tips on planting, irrigation, and yield improvement.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <Button variant="link" className="text-accent font-semibold p-0 h-auto hover:no-underline flex items-center gap-2">
                                Download Zao App <Download className="w-4 h-4" />
                            </Button>
                            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 rounded-lg">
                                View App Demo
                            </Button>
                        </div>
                    </div>

                    {/* Right Collage */}
                    <div className="relative h-full min-h-[500px] lg:min-h-[600px]">
                        <div className="grid grid-cols-2 gap-4 h-full">
                            {/* Large Left Image */}
                            <div className="col-span-1 row-span-2 h-full">
                                <img
                                    src={womanFarmer}
                                    alt="Farmer using app"
                                    className="w-full h-full object-cover rounded-[2rem] shadow-lg"
                                />
                            </div>

                            {/* Top Right Image */}
                            <div className="col-span-1 h-64">
                                <img
                                    src={cropsField}
                                    alt="Farming field"
                                    className="w-full h-full object-cover rounded-[2rem] shadow-lg"
                                />
                            </div>

                            {/* Bottom Right Image */}
                            <div className="col-span-1 h-64">
                                <img
                                    src={farmersGroup}
                                    alt="Community of farmers"
                                    className="w-full h-full object-cover rounded-[2rem] shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIAssistantSection;
