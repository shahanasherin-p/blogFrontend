import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleBlogAPI, updateBlogAPI } from '../services/allAPI';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogDetails, setBlogDetails] = useState({
    title: "",
    content: "",
    image: ""
  });

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await getSingleBlogAPI(id);
        setBlogDetails(response.data);
      } catch (err) {
        console.error('Failed to fetch blog details:', err);
      }
    };

    fetchBlogDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogDetails({ ...blogDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, content, image } = blogDetails;
    if (title && content && image) {
      try {
        const response = await updateBlogAPI(id, blogDetails);
        if (response.status >= 200 && response.status < 300) {
          alert("Blog updated successfully!");
          navigate('/profile'); // Navigate back to profile after updating
        }
      } catch (err) {
        console.error('Failed to update blog:', err);
        alert("Failed to update blog. Please try again.");
      }
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-3/4 lg:w-1/2 p-8">
        <h1 className="text-3xl font-bold mb-4">Edit Blog Post</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input 
            onChange={handleChange}
            value={blogDetails.title} 
            name="title"
            type="text" 
            placeholder="Post Title" 
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea 
            onChange={handleChange}
            value={blogDetails.content}
            name="content"
            placeholder="Post Content" 
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input 
            onChange={handleChange}
            value={blogDetails.image}
            name="image"
            type="text"
            placeholder="Image URL" 
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button 
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
