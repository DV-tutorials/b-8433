import { useState, useEffect } from "react";
import { Calendar, Clock, Eye } from "lucide-react";
import ChatBot from "../components/ChatBot";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  views: number;
}

const Blog = () => {
  const [pageViews, setPageViews] = useState(0);

  useEffect(() => {
    // Simulate page view increment
    setPageViews((prev) => prev + 1);
  }, []);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Getting Started with React and TypeScript",
      excerpt: "Learn how to set up a new project with React and TypeScript, and discover the benefits of using TypeScript in your React applications.",
      date: "2024-02-20",
      readTime: "5 min read",
      views: 156
    },
    {
      id: 2,
      title: "Building Responsive Layouts with Tailwind CSS",
      excerpt: "Explore the power of Tailwind CSS for creating beautiful, responsive layouts without writing custom CSS.",
      date: "2024-02-18",
      readTime: "8 min read",
      views: 243
    },
    {
      id: 3,
      title: "State Management in Modern React Applications",
      excerpt: "A comprehensive guide to managing state in React applications using hooks, context, and popular state management libraries.",
      date: "2024-02-15",
      readTime: "10 min read",
      views: 389
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Blog</h1>
          <div className="flex items-center gap-2 text-gray-400">
            <Eye className="w-4 h-4" />
            <span>{pageViews} page views</span>
          </div>
        </div>

        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-400">
                {post.title}
              </h2>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{post.views} views</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ChatBot />
    </div>
  );
};

export default Blog;