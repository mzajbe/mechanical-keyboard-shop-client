import { Link } from 'react-router-dom';
import { Blog } from './blog';

interface BlogCardProps {
    blog: Blog;
  }
const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img className="w-full" src={blog.image} alt={blog.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{blog.title}</div>
          <Link to={`/blog/${blog.id}`} className="text-blue-500 hover:text-blue-700">
            Read more
          </Link>
        </div>
      </div>
    );
};

export default BlogCard;