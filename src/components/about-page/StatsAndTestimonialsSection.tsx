import React from "react";
import { Star } from "lucide-react";

const StatsAndTestimonialsSection = () => {
    const stats = [
        { value: "15,000+", label: "Active Farmers", color: "text-primary" },
        { value: "400+", label: "Learning Courses", color: "text-accent" },
        { value: "85%", label: "Yield Improvement", color: "text-primary" },
        { value: "12", label: "Countries", color: "text-accent" },
    ];

    const testimonials = [
        {
            name: "Ann Kome",
            role: "Vegetable farmer, Kenya",
            text: "Through zao, I learned drip irrigation techniques that doubled my tomato harvest. The community support helped me connect with buyers in the city, increasing income by 60%",
            rating: 5,
        },
        {
            name: "James Mano",
            role: "Maize farmer, Nyeri",
            text: "The mobile app work perfectly even in rural area. I can access courses offline and get answers from experienced farmers whenever I have questions about my crops.",
            rating: 5,
            highlight: true,
        },
        {
            name: "Samuel Ochieng",
            role: "Agribusiness Owner, Kisumu",
            text: "Zao market place connected me directly with hundreds of small holders farmers. We've built sustainable partnerships that benefit everyone in the value chain.",
            rating: 5,
        },
    ];

    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100">
                    {/* Stats Part */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
                            Trusted by farmers across Africa
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                                        {stat.value}
                                    </div>
                                    <div className="text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Testimonials Part */}
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className={`p-6 rounded-2xl border-2 ${testimonial.highlight ? "border-accent" : "border-primary"
                                        } relative`}
                                >
                                    <div className="mb-4">
                                        <h3 className="text-lg font-bold text-foreground">
                                            {testimonial.name}
                                        </h3>
                                        <p
                                            className={`text-sm ${testimonial.highlight ? "text-accent" : "text-primary"
                                                }`}
                                        >
                                            {testimonial.role}
                                        </p>
                                    </div>
                                    <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                                    <div className="flex gap-1 absolute top-6 right-6">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsAndTestimonialsSection;
