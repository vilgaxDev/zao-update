const TestimonialsSection = () => {
  const stats = [
    { value: "15,000+", label: "Active Farmers", color: "text-primary" },
    { value: "400+", label: "Learning Courses", color: "text-accent" },
    { value: "85%", label: "Yield Improvement", color: "text-foreground" },
    { value: "12", label: "Countries", color: "text-accent" },
  ];

  const testimonials = [
    {
      name: "Ann Kome",
      role: "Vegetable farmer, Kenya",
      content: "Through zao, I learned drip irrigation techniques that doubled my tomato harvest. The community support helped me connect with buyers in the city, increasing income by 60%",
      rating: 5,
    },
    {
      name: "James Mano",
      role: "Maize farmer, Nyeri",
      content: "The mobile app work perfectly even in rural area. I can access courses offline and get answers from experienced farmers whenever I have questions about my crops.",
      rating: 5,
    },
    {
      name: "Samuel Ochieng",
      role: "Agribusiness Owner, Kisumu",
      content: "Zao market place connected me directly with hundreds of small holders farmers. We've built sustainable partnerships that benefit everyone in the value chain.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-16">
          Trusted by farmers across Africa
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl lg:text-5xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm lg:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background border-2 border-l-4 rounded-2xl p-8"
              style={{
                borderLeftColor: index === 0 ? 'hsl(var(--foreground))' : index === 1 ? 'hsl(var(--accent))' : 'hsl(var(--foreground))',
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
                <div className="flex ml-auto">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent">★</span>
                  ))}
                </div>
              </div>
              <p className={`text-sm mb-4 ${index === 1 ? 'text-accent' : 'text-muted-foreground'}`}>
                {testimonial.role}
              </p>
              <p className="text-foreground leading-relaxed">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
