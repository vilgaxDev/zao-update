import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
            toast.error("Please fill in all required fields");
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
        });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 bg-background pt-24">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-6xl mx-auto bg-card rounded-3xl shadow-xl overflow-hidden border border-border">
                        <div className="p-8 md:p-12">
                            <div className="text-center mb-12">
                                <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
                                <p className="text-lg text-muted-foreground">
                                    Any question or remarks? Just write us a message!
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                                {/* Contact Information Card */}
                                <div className="lg:col-span-2 bg-primary rounded-3xl p-8 md:p-12 text-primary-foreground relative overflow-hidden">
                                    <div className="relative z-10">
                                        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                                        <p className="mb-12 opacity-90">
                                            Say something to start a live chat!
                                        </p>

                                        <div className="space-y-6 mb-16">
                                            <a
                                                href="tel:+254713015117"
                                                className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                                            >
                                                <Phone className="h-5 w-5" />
                                                <span>+254713015117</span>
                                            </a>

                                            <a
                                                href="mailto:demo@gmail.com"
                                                className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                                            >
                                                <Mail className="h-5 w-5" />
                                                <span>demo@gmail.com</span>
                                            </a>
                                        </div>

                                        {/* Social Media Icons */}
                                        <div className="flex space-x-4">
                                            <a
                                                href="https://twitter.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/90 transition-colors"
                                                aria-label="Twitter"
                                            >
                                                <svg className="w-5 h-5 text-accent-foreground" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                </svg>
                                            </a>
                                            <a
                                                href="https://instagram.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/90 transition-colors"
                                                aria-label="Instagram"
                                            >
                                                <svg className="w-5 h-5 text-accent-foreground" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                </svg>
                                            </a>
                                            <a
                                                href="https://youtube.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/90 transition-colors"
                                                aria-label="YouTube"
                                            >
                                                <svg className="w-5 h-5 text-accent-foreground" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Decorative circles */}
                                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/30 rounded-full translate-x-8 translate-y-8"></div>
                                    <div className="absolute bottom-16 right-16 w-24 h-24 bg-secondary/20 rounded-full"></div>
                                </div>

                                {/* Contact Form */}
                                <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName" className="text-sm text-muted-foreground">
                                                First Name
                                            </Label>
                                            <Input
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="lastName" className="text-sm text-muted-foreground">
                                                Last Name
                                            </Label>
                                            <Input
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-sm text-muted-foreground">
                                                Email
                                            </Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="text-sm text-muted-foreground">
                                                Phone Number
                                            </Label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-sm text-muted-foreground">
                                            Message
                                        </Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Write your message.."
                                            className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 min-h-[100px] resize-none focus-visible:ring-0 focus-visible:border-primary"
                                            required
                                        />
                                    </div>

                                    <div className="flex justify-end pt-4">
                                        <Button
                                            type="submit"
                                            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8"
                                        >
                                            Send Message
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
