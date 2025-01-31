import { getAllBlogPosts } from "@/services/fireStoreOperations";
import BlogCard from "./BlogCard";
import Navbar from "../component/Navbar";

const BlogPageServer = async () => {
  const blogPosts = await getAllBlogPosts();

  return (
    <div className="min-h-screen bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <Navbar />
        <h1 className="text-4xl font-bold text-center mb-12 text-newprimary2">
          My Blogs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPageServer; 