import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllBlogsAPI, removeBlogApi } from '../services/allAPI';

const MyProfile = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const navigate = useNavigate();

  const handleAddClick = () => { navigate('/addBlog'); };
  const editBlog = (id) => { navigate(`/${id}/edit`);}
 
  useEffect(() => {
    getAllBlogs();
  }, []); 

  const getAllBlogs = async () => {
    try {
      const response = await getAllBlogsAPI();
      setAllBlogs(response.data);
    } catch (err) {
      console.error('Failed to fetch blogs:', err);
    }
  };

  const deleteBlog = async (id) => {
    try {
      await removeBlogApi(id);
      setAllBlogs(allBlogs.filter(blog => blog.id !== id));
    } catch (err) {
      console.error('Failed to delete blog:', err);
      alert('Failed to delete blog. Please try again.'); 
    }
  };

  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-16 mb-14">
  <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-3/4 lg:w-1/2">
    <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-8">
      <img 
        src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D" 
        alt="Profile" 
        className="w-32 h-32 rounded-full mx-auto border-4 border-white"
      />
      <h1 className="text-3xl font-bold mt-4">Olivia</h1>
      <p className="text-lg">I am a passionate blogger who shares her thoughts, experiences, and insights on a variety of topics.</p>
    </div>
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="text-gray-700 mb-6">
        I am a passionate blogger who loves fashion, travel, food, technology, and sports. I enjoy sharing my thoughts and experiences to connect with like-minded individuals. With a keen eye for detail, I aim to create engaging content that inspires and informs. Beyond blogging, I have a passion for photography, volunteering, and I believe in living a balanced life filled with creativity and exploration. Join me on this journey of discovery and self-expression!
      </p>
      <h2 className="text-2xl font-bold mb-4">Add Blog Posts</h2>
      <button onClick={handleAddClick} className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-200 mt-4">
        ADD
      </button>
    </div>
    <h2 className="text-2xl font-bold mb-4 text-center">Recent Blog Posts</h2>
    <div className="p-10">
      {allBlogs.length === 0 ? (
        <p>No recent blog posts available.</p>
      ) : (
        allBlogs.map(blog => (
          <div key={blog.id} className="mb-6 border-b pb-4">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{blog.title}</h3>
              <p className="mt-2 text-gray-600">{blog.content}</p>
              <div className="mt-4 flex space-x-2">
                <button 
                  className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition duration-200 flex items-center"
                  onClick={() => editBlog(blog.id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4l4 4m0 0L8 20H4v-4L16 4z" /></svg>
                  Edit
                </button>
                <button 
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete this blog post?')) {
                      deleteBlog(blog.id);
                    }
                  }}
                  className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition duration-200 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
</div>

  );
};

export default MyProfile;
