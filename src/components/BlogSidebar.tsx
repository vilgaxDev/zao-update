import { Link } from "react-router-dom";
import { Search, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface SidebarArticle {
    id: string;
    title: string;
    image?: string;
    date?: string;
}

interface BlogSidebarProps {
    topArticles: SidebarArticle[];
    recentPosts: SidebarArticle[];
}

export const BlogSidebar = ({ topArticles, recentPosts }: BlogSidebarProps) => {
    return (
        <aside className="space-y-8">
            {/* Top Articles */}
            <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4 border-l-4 border-primary pl-3">
                    Top Articles
                </h3>
                <ul className="space-y-4">
                    {topArticles.map((article) => (
                        <li key={article.id}>
                            <Link
                                to={`/blog/${article.id}`}
                                className="text-sm hover:text-primary transition-colors line-clamp-2"
                            >
                                {article.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Card>

            {/* Search */}
            <Card className="p-6">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder="Search..."
                        className="pl-10"
                    />
                </div>
            </Card>

            {/* Recently Blogs */}
            <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Recently Blogs</h3>
                <div className="space-y-4">
                    {recentPosts.map((post) => (
                        <Link
                            key={post.id}
                            to={`/blog/${post.id}`}
                            className="flex gap-3 group"
                        >
                            {post.image && (
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                                />
                            )}
                            <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-sm mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h4>
                                {post.date && (
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                        <Calendar className="w-3 h-3" />
                                        <span>{post.date}</span>
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </Card>
        </aside>
    );
};
