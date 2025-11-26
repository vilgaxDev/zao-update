import { Button } from "@/components/ui/button";
import { Sprout, User, BarChart3 } from "lucide-react";
import womanFarmerImg from "@/assets/farmer-phone.jpg";

const GetStartedSection = () => {
    return (
        <section className="relative py-20 bg-background overflow-hidden">
            {/* Decorative floating leaves */}
            <div className="absolute top-10 left-10 w-16 h-16 opacity-20">
                <div className="w-full h-full bg-green-400 rounded-full blur-xl"></div>
            </div>
            <div className="absolute top-20 right-20 w-20 h-20 opacity-20">
                <div className="w-full h-full bg-green-400 rounded-full blur-xl"></div>
            </div>
            <div className="absolute bottom-20 left-20 w-24 h-24 opacity-20">
                <div className="w-full h-full bg-green-400 rounded-full blur-xl"></div>
            </div>
            <div className="absolute bottom-10 right-10 w-16 h-16 opacity-20">
                <div className="w-full h-full bg-green-400 rounded-full blur-xl"></div>
            </div>

            <div className="container mx-auto px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Started with Zao</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Register now to access personalized insights, connect with other farmers, and take your farming journey to the next level.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left Side - Woman Farmer with World Map Circle */}
                    <div className="relative flex items-center justify-center">
                        {/* World Map Circle with Glowing Ring */}
                        <div className="relative w-[400px] h-[400px]">
                            {/* Glowing blue ring */}
                            <div className="absolute inset-0 rounded-full border-8 border-blue-400/40 shadow-[0_0_40px_rgba(59,130,246,0.3)]"></div>

                            {/* World map background */}
                            <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-green-600 to-green-700">
                                {/* Simplified world map continents */}
                                <div className="absolute inset-0 opacity-60">
                                    <svg viewBox="0 0 400 400" className="w-full h-full">
                                        {/* Africa */}
                                        <ellipse cx="200" cy="180" rx="60" ry="80" fill="#D4A574" opacity="0.8" />
                                        {/* Europe */}
                                        <ellipse cx="200" cy="100" rx="40" ry="30" fill="#D4A574" opacity="0.8" />
                                        {/* Asia */}
                                        <ellipse cx="280" cy="140" rx="70" ry="60" fill="#D4A574" opacity="0.8" />
                                        {/* Americas */}
                                        <ellipse cx="100" cy="180" rx="50" ry="90" fill="#D4A574" opacity="0.8" />
                                    </svg>
                                </div>
                            </div>

                            {/* Woman farmer image */}
                            <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl">
                                <img src={womanFarmerImg} alt="Woman farmer using phone" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Cards */}
                    <div className="space-y-6">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-2">Create Your Zao Account</h3>
                            <p className="text-muted-foreground">
                                Start your journey by sharing key details that help personalize your experience on Zao.
                            </p>
                        </div>

                        {/* Card 1 - Farm Details */}
                        <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Sprout className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-2">Farm Details</h4>
                                    <p className="text-muted-foreground text-sm">
                                        Provide information about your farm — size, crops, or livestock — to help tailor insights.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 - Experience Level */}
                        <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <User className="w-6 h-6 text-yellow-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-2">Experience Level</h4>
                                    <p className="text-muted-foreground text-sm">
                                        Select whether you're a beginner or experienced farmer to receive customized learning and support.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 - Personalized Insights */}
                        <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <BarChart3 className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-2">Personalized Insights</h4>
                                    <p className="text-muted-foreground text-sm">
                                        Get data, advice, and tools suited to your specific farm and growth stage.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-4">
                            <Button
                                variant="outline"
                                className="text-accent border-accent hover:bg-accent hover:text-accent-foreground"
                            >
                                Download Zao App
                            </Button>
                            <Button
                                className="bg-primary hover:bg-primary/90 text-white"
                            >
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
