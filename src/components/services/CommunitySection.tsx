import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Network } from "lucide-react";
import communityLearning from "@/assets/community-learning.jpg";

const CommunitySection = () => {
    return (
        <section className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Zao Connect – Grow Together, Farm Smarter
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Connect with experienced farmers, share knowledge, ask questions, and build meaningful relationships that support your farming journey.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <img
                            src={communityLearning}
                            alt="Community learning"
                            className="rounded-3xl shadow-2xl w-full"
                        />
                    </div>

                    <div className="order-1 lg:order-2 space-y-6">
                        <h3 className="text-2xl font-bold text-foreground mb-8">
                            What You Can Do on Zao Connect
                        </h3>

                        <Card className="p-6 border-border bg-card hover:border-primary/50 transition-colors">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Network className="w-7 h-7 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-foreground mb-2">
                                        Farmer-to-Farmer Connections
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Network with farmers, exchange ideas, and gain insights.
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 border-border bg-card hover:border-primary/50 transition-colors">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <MessageSquare className="w-7 h-7 text-accent" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-foreground mb-2">
                                        Farming Posts & Updates
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Post your farm stories, celebrate wins, and learn from the community.
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 border-border bg-card hover:border-primary/50 transition-colors">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-success/10 flex items-center justify-center">
                                    <Users className="w-7 h-7 text-success" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-foreground mb-2">
                                        Discussion Groups & Forums
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Join groups, share ideas, and learn from experienced farmers.
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
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
