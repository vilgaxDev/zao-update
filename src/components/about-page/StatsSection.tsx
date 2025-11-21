import React from "react";

const StatsSection = () => {
    const stats = [
        { value: "15,000+", label: "Active Farmers", color: "text-primary" },
        { value: "400+", label: "Learning Courses", color: "text-accent" },
        { value: "85%", label: "Yield Improvement", color: "text-primary" },
        { value: "12", label: "Countries", color: "text-accent" },
    ];

    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100">
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
            </div>
        </section>
    );
};

export default StatsSection;
