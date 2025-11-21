import { useState } from "react";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { blogPosts } from "@/data/blogData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const POSTS_PER_PAGE = 6;

const Blog = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const currentPosts = blogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest Blogs</h1>
                        <p className="text-lg text-muted-foreground">
                            Explore stories, ideas, and innovations that educate, inspire, and connect the farming community.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {currentPosts.map((post) => (
                            <BlogCard
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                excerpt={post.excerpt}
                                image={post.image}
                                readTime={post.readTime}
                                category={post.category}
                            />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </Button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <Button
                                key={page}
                                variant={currentPage === page ? "default" : "outline"}
                                size="icon"
                                onClick={() => handlePageChange(page)}
                                className={currentPage === page ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}
                            >
                                {page}
                            </Button>
                        ))}

                        {totalPages > 5 && currentPage < totalPages - 2 && (
                            <span className="px-2">...</span>
                        )}

                        {totalPages > 5 && currentPage < totalPages - 1 && (
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => handlePageChange(totalPages)}
                            >
                                {totalPages}
                            </Button>
                        )}

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Blog;
