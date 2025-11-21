import React from "react";
import { Twitter, Music, Linkedin, Mail } from "lucide-react";

const FounderSection = () => {
    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left side - Decorative founder image */}
                            <div className="relative flex justify-center">
                                <div className="relative">
                                    {/* Outer decorative circle */}
                                    <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 p-8 relative">
                                        {/* Inner white ring */}
                                        <div className="w-full h-full rounded-full bg-background p-4 relative">
                                            {/* Founder image placeholder */}
                                            <div className="w-full h-full rounded-full bg-muted/50 flex items-center justify-center overflow-hidden">
                                                <div className="text-muted-foreground text-sm text-center">
                                                    Founder Photo
                                                </div>
                                            </div>
                                        </div>
                                        {/* Small decorative dot */}
                                        <div className="absolute bottom-8 right-0 w-16 h-16 rounded-full bg-primary"></div>
                                    </div>
                                    {/* Decorative leaf element */}
                                    <div className="absolute -left-12 bottom-0 w-24 h-24 opacity-30">
                                        <svg viewBox="0 0 100 100" className="text-accent">
                                            <path
                                                d="M10,80 Q10,20 50,10 Q20,40 10,80 Z"
                                                fill="currentColor"
                                                opacity="0.3"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Right side - Content */}
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-foreground">
                                    Why We Created Zao
                                </h2>
                                <div className="space-y-4 text-muted-foreground">
                                    <p>
                                        I started Zao because farming has always been part of my life.
                                        Growing up in my family's farm showed me both the beauty and the
                                        struggle of agriculture, seeing how hard farmers work and how
                                        often they're left without the right tools or connections.
                                    </p>
                                    <p>
                                        Zao grew from that experience. I want to build something that
                                        helps farmers share knowledge, find markets, and feel supported
                                        in what they do best: growing, and furthermore going to the
                                        lengths required to protect their most cherished asset; their
                                        produce (zao).
                                    </p>
                                </div>

                                <div className="pt-4">
                                    <h3 className="text-2xl font-bold text-foreground mb-1">
                                        Max Muttai
                                    </h3>
                                    <p className="text-sm font-medium text-primary mb-2">
                                        Founder & CEO
                                    </p>
                                    <p className="text-sm text-muted-foreground mb-6">
                                        BEng (Hons) Mechanical Engineering, MSc (Dist) Biomechanics, PhD
                                        Mechanical & Manufacturing Engineering.
                                    </p>

                                    <div>
                                        <p className="text-sm font-medium text-foreground mb-3">
                                            Follow the Founder
                                        </p>
                                        <div className="flex gap-3">
                                            <a
                                                href="https://twitter.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/90 transition-colors"
                                                aria-label="Twitter"
                                            >
                                                <Twitter className="w-5 h-5" />
                                            </a>
                                            <a
                                                href="https://tiktok.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/90 transition-colors"
                                                aria-label="TikTok"
                                            >
                                                <Music className="w-5 h-5" />
                                            </a>
                                            <a
                                                href="https://linkedin.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/90 transition-colors"
                                                aria-label="LinkedIn"
                                            >
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                            <a
                                                href="mailto:founder@zao.com"
                                                className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/90 transition-colors"
                                                aria-label="Email"
                                            >
                                                <Mail className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderSection;
