import React from "react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="bg-[#ECF7ED] rounded-[40px] overflow-hidden max-w-7xl mx-auto relative">
                    {/* Decorative wave at bottom */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                        <svg
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                            className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]"
                        >
                            <path
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                className="fill-white"
                            ></path>
                        </svg>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center p-8 md:p-16">
                        {/* Image Side */}
                        <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop"
                                alt="Farmer using tablet"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>

                        {/* Content Side */}
                        <div className="space-y-8 relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
                                Empowering farmers with smart tools, knowledge, and connections.
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Zao is an all-in-one platform that helps farmers access weather
                                insights, crop advice, training, marketplaces, and AI-powered
                                tools—making farming easier, smarter, and more profitable.
                            </p>
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

export default CTASection;
