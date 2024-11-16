import React, { useState } from 'react';
import { uploadBlogApi } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';

const Add = ({ addBlog }) => {
  const [blogDetails, setBlogDetails] = useState({
    title: "",
    content: "",
    image: ""
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, content, image } = blogDetails;
    if (title && content && image) {
      try {
        const response = await uploadBlogApi(blogDetails);
        console.log(response);
        
        addBlog(blogDetails); 

        if (response.status >= 200 && response.status < 300) {
 
          setBlogDetails({ title: "", content: "", image: "" });
          alert("Blog posted successfully!");
          navigate('/profile')
        }
      } catch (err) {
        console.log(err);
        alert("Failed to post blog. Please try again.");
      }
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-3/4 lg:w-1/2 p-8">
        <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
        <h2 className="text-2xl font-bold mb-4">Add Blog Posts</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input 
            onChange={e => setBlogDetails({ ...blogDetails, title: e.target.value })}
            value={blogDetails.title} 
            type="text" 
            placeholder="Post Title" 
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea 
            onChange={e => setBlogDetails({ ...blogDetails, content: e.target.value })}
            value={blogDetails.content}
            placeholder="Post Content" 
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input 
            onChange={e => setBlogDetails({ ...blogDetails, image: e.target.value })}
            value={blogDetails.image}
            type="text"
            placeholder="Image URL" 
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
