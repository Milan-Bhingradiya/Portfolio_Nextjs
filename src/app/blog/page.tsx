"use client"
import { getAllBlogPosts } from "@/services/fireStoreOperations";
import BlogCard from "./BlogCard";
import Navbar from "../component/Navbar";
import { useEffect, useState } from "react";
import { BlogPost } from "@/services/fireStoreOperations";

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const posts = await getAllBlogPosts();
      setBlogPosts(posts);
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="min-h-screen bg-primary text-white">
        <Navbar />
      <div className="container mx-auto px-4">
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
}
