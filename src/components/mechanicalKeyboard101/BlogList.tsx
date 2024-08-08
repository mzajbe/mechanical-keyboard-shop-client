import { blogs } from "./blog";
import BlogCard from "./BlogCard";


const BlogList = () => {
    return (
        <div className="container mx-auto my-10">
        <h2 className="text-3xl font-semibold text-center mb-8">Blog Posts</h2>
        <div className="flex flex-wrap justify-center">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    );
};

export default BlogList;