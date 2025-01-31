import { getRecentBlogPosts } from "@/services/fireStoreOperations";
import BlogCard from "./BlogCard";

export default async function RecentBlogPosts() {
  const recentPosts = await getRecentBlogPosts(3);

  return (
    <div className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-newprimary2">
          Recent Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
