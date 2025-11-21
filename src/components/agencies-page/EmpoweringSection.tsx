import React from "react";
import { Button } from "@/components/ui/button";

const EmpoweringSection = () => {
    return (
        <section className="relative min-h-[500px] flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2070&auto=format&fit=crop"
                    alt="Market background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Circular Image */}
                    <div className="relative flex justify-center lg:justify-start">
                        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-white/20 shadow-2xl relative">
                            <img
                                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2813&auto=format&fit=crop"
                                alt="Farmers at market"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="text-white space-y-6 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Empowering farmers with smart tools, knowledge, and connections.
                        </h2>
                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
                            Zao is an all-in-one platform that helps farmers access weather
                            insights, crop advice, training, marketplaces, and AI-powered
                            tools—making farming easier, smarter, and more profitable.
                        </p>
                        <div className="pt-4">
                            <Button className="bg-[#43A047] hover:bg-[#2E7D32] text-white px-8 py-6 text-lg rounded-md font-semibold transition-colors">
                                Get Mobile App
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmpoweringSection;
