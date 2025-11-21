import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tractor, Award, BarChart3 } from "lucide-react";
import farmerPhone from "@/assets/farmer-phone.jpg";

const GetStartedSection = () => {
    return (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Get Started with Zao
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Register now to access personalized insights, connect with other farmers, and take your farming journey to the next level.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="rounded-full overflow-hidden w-full max-w-md mx-auto aspect-square shadow-2xl border-8 border-primary/10">
                            <img
                                src={farmerPhone}
                                alt="Get started with Zao"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-foreground mb-8">
                            Create Your Zao Account
                        </h3>
                        <p className="text-muted-foreground mb-8">
                            Start your journey by sharing key details that help personalize your experience on Zao.
                        </p>

                        <Card className="p-6 border-border bg-card">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Tractor className="w-7 h-7 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-foreground mb-2">
                                        Farm Details
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Provide information about your farm — size, crops, or livestock — to help tailor insights.
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 border-border bg-card">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <Award className="w-7 h-7 text-accent" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-foreground mb-2">
                                        Experience Level
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Select whether you're a beginner or experienced farmer to receive customized learning and support.
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 border-border bg-card">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-success/10 flex items-center justify-center">
                                    <BarChart3 className="w-7 h-7 text-success" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-foreground mb-2">
                                        Personalized Insights
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Get data, advice, and tools suited to your specific farm and growth stage.
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

export default GetStartedSection;
