import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sprout, Sparkles } from "lucide-react";
import farmerPhone from "@/assets/farmer-phone.jpg";

const AIAssistantSection = () => {
    return (
        <section className="py-16 lg:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Zao AI – Grow Together, Farm Smarter
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Connect with experienced farmers, share knowledge, ask questions, and build meaningful relationships that support your farming journey.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-foreground mb-8">
                            Your Digital Farming Assistant
                        </h3>
                        <p className="text-muted-foreground mb-8">
                            Get instant support anytime, anywhere. Zao's AI assistant is available 24/7 to answer your farming questions, provide quick solutions, and guide you through urgent challenges—so help is always just a tap away.
                        </p>

                        <Card className="p-6 border-border bg-card hover:shadow-lg transition-shadow">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Sprout className="w-7 h-7 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-foreground mb-2">
                                        Smart Farming Assistant
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Get quick answers and guidance tailored to your crops and challenges.
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 border-border bg-card hover:shadow-lg transition-shadow">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <Sparkles className="w-7 h-7 text-accent" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-foreground mb-2">
                                        Personalized Recommendations
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Receive custom tips on planting, irrigation, and yield improvement.
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <div className="flex gap-4 pt-4">
                            <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                                Download Zao App
                            </Button>
                            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                                View App Demo
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src={farmerPhone}
                            alt="Farmer using Zao app"
                            className="rounded-2xl shadow-lg w-full h-auto object-cover"
                        />
                        <img
                            src={farmerPhone}
                            alt="Farmer using Zao app"
                            className="rounded-2xl shadow-lg w-full h-auto object-cover mt-8"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIAssistantSection;
