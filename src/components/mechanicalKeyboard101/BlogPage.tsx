import { useParams } from "react-router-dom";
import { blogs } from "./blog";


const BlogPage = () => {
    const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Invalid Blog ID</div>;
  }

  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }
    return (
        <div className="container mx-auto my-10 p-5">
      <button onClick={() => window.history.back()} className="mb-5 text-blue-500 hover:text-blue-700">
        Back to Blogs
      </button>
      <h1 className="text-4xl font-semibold mb-5">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="w-full mb-5" />
      {blog.content.map((paragraph, index) => (
        <p key={index} className="mb-4">
          {paragraph}
        </p>
      ))}
    </div>
    );
};

export default BlogPage;