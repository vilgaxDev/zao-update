import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    readTime: string;
    category?: string;
    featured?: boolean;
}

export const BlogCard = ({
    id,
    title,
    excerpt,
    image,
    readTime,
    category,
    featured = false
}: BlogCardProps) => {
    return (
        <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-border bg-card">
            <Link to={`/blog/${id}`} className="block">
                <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {category && (
                        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                            {category}
                        </Badge>
                    )}
                </div>
                <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Clock className="w-4 h-4" />
                        <span>{readTime}</span>
                    </div>
                    <h3 className={`font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2 ${featured ? 'text-2xl' : 'text-xl'
                        }`}>
                        {title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                        {excerpt}
                    </p>
                    <Button variant="ghost" className="group/btn px-0 text-primary hover:text-primary">
                        Read more
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </Link>
        </Card>
    );
};
