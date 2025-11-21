import React from "react";

const TeamSection = () => {
    const team = [
        { name: "Eli Kemei", role: "Co- Founder" },
        { name: "Ken Mugo", role: "Dev Lead" },
        { name: "Allan Korir", role: "Ops Lead" },
        { name: "Ann Kiama", role: "UI/UX Designer" },
        { name: "Sam Nduba", role: "Eng Dev Team" },
        { name: "Naomi Kichwen", role: "Legal" },
    ];

    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100">
                    <h2 className="text-3xl font-bold text-center text-foreground mb-4">
                        Meet The Founder
                    </h2>
                    <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
                        To empower every farmer with smart, accessible tools and knowledge that
                        boost productivity, income, and sustainable farming.
                    </p>
                    <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="text-center w-full sm:w-[calc(50%-24px)] lg:w-[calc(33%-32px)] xl:w-[calc(25%-36px)] flex flex-col items-center"
                            >
                                <div className="relative mb-6 group">
                                    {/* Outer decorative ring */}
                                    <div className="w-48 h-48 rounded-full bg-green-50 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                                        {/* Inner white border/gap */}
                                        <div className="w-40 h-40 rounded-full bg-background flex items-center justify-center overflow-hidden shadow-sm">
                                            {/* Image placeholder */}
                                            <div className="w-full h-full bg-muted/30 flex items-center justify-center">
                                                <span className="text-4xl font-bold text-muted-foreground/20">
                                                    {member.name.charAt(0)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-muted-foreground font-light">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
