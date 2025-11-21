import { useParams, Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BlogSidebar } from "@/components/BlogSidebar";
import { Clock, MessageCircle, Facebook, Twitter, Instagram, Share2 } from "lucide-react";
import { blogPosts } from "@/data/blogData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogDetail = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === id);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Blog post not found</h1>
                    <Link to="/blog">
                        <Button>Back to Blog</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const topArticles = blogPosts.slice(0, 4).map(p => ({
        id: p.id,
        title: p.title
    }));

    const recentPosts = blogPosts.slice(1, 4).map(p => ({
        id: p.id,
        title: p.title,
        image: p.image,
        date: p.date
    }));

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <div className="container mx-auto px-4 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <article className="lg:col-span-2">
                        {/* Hero Image */}
                        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                            {post.category && (
                                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                                    {post.category}
                                </Badge>
                            )}
                        </div>

                        {/* Meta Info */}
                        <div className="flex items-center gap-4 mb-6 flex-wrap">
                            <div className="flex items-center gap-2">
                                <Avatar className="w-8 h-8">
                                    <AvatarImage src={post.author?.avatar} />
                                    <AvatarFallback>
                                        {post.author?.name.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                </Avatar>
                                <span className="text-sm text-foreground">By {post.author?.name}</span>
                            </div>
                            <Separator orientation="vertical" className="h-4" />
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime} read</span>
                            </div>
                            <Separator orientation="vertical" className="h-4" />
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MessageCircle className="w-4 h-4" />
                                <span>65 Comments</span>
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                            {post.title}
                        </h1>

                        {/* Author Info */}
                        <Card className="p-6 mb-8 bg-muted/30">
                            <div className="flex items-start gap-4">
                                <Avatar className="w-12 h-12 flex-shrink-0">
                                    <AvatarImage src={post.author?.avatar} />
                                    <AvatarFallback>
                                        {post.author?.name.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <h3 className="font-semibold">{post.author?.name}</h3>
                                    <p className="text-sm text-muted-foreground">{post.date} • {post.readTime} read</p>
                                </div>
                                <div className="flex gap-2">
                                    <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary">
                                        <Facebook className="w-5 h-5" />
                                    </Button>
                                    <Button size="icon" variant="ghost" className="text-accent hover:text-accent">
                                        <Twitter className="w-5 h-5" />
                                    </Button>
                                    <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary">
                                        <Share2 className="w-5 h-5" />
                                    </Button>
                                    <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary">
                                        <Instagram className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        </Card>

                        {/* Content */}
                        <div
                            className="prose prose-lg max-w-none mb-12 
                prose-headings:font-bold prose-headings:text-foreground
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-img:rounded-xl prose-img:shadow-md"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Image Gallery Sections */}
                        {post.id === "weather-insights" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                <img
                                    src="/src/assets/blog-landscape.jpg"
                                    alt="Sunny farmland"
                                    className="w-full rounded-xl shadow-md"
                                />
                                <img
                                    src="/src/assets/blog-weather.jpg"
                                    alt="Stormy weather over crops"
                                    className="w-full rounded-xl shadow-md"
                                />
                            </div>
                        )}

                        {post.id === "farm-productivity" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                <img
                                    src="/src/assets/blog-farmer-laptop.jpg"
                                    alt="Farmer using laptop in field"
                                    className="w-full rounded-xl shadow-md"
                                />
                                <img
                                    src="/src/assets/blog-crops.jpg"
                                    alt="Productive farmland"
                                    className="w-full rounded-xl shadow-md"
                                />
                            </div>
                        )}

                        {/* CTA Card */}
                        <Card className="p-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <img
                                    src="/src/assets/blog-market.jpg"
                                    alt="Fresh Fruit"
                                    className="w-full md:w-48 rounded-lg"
                                />
                                <div className="flex-1">
                                    <p className="text-sm font-medium mb-2 opacity-90">TOP SALES</p>
                                    <h3 className="text-3xl font-bold mb-2">Fresh Fruit</h3>
                                    <p className="text-lg mb-4">
                                        <span className="text-sm">UP TO</span>
                                        <span className="text-4xl font-bold ml-2">56%</span>
                                    </p>
                                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                                        Download Zao APP →
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </article>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <BlogSidebar
                                topArticles={topArticles}
                                recentPosts={recentPosts}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BlogDetail;
