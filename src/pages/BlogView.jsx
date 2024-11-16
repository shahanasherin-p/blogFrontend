import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleBlogAPI } from '../services/allAPI';

const BlogView = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await getSingleBlogAPI(id);
        setBlog(response.data);
      } catch (error) {
        console.error('Failed to fetch blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-14 py-10 px-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-3/4 lg:w-2/3 mx-auto">
        {blog.image && (
          <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
        )}
        <div className="p-6">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">{blog.title}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">{blog.content}</p>
          <div className="flex justify-between items-center text-gray-600">
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
              onClick={() => window.history.back()}
            >
              Back to Blogs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogView;
