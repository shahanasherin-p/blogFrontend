import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; 
import { getAllBlogsAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';

const Home = ({ blogs }) => {
  const [allBlogs,setAllBlogs]=useState([])
  const navigate = useNavigate();


  useEffect(()=>{
    getAllBlogs()
  },[blogs])

  const viewBlog = (id) => { navigate(`/${id}/view`);}

  const getAllBlogs=async()=>{
    try{
      const response=await getAllBlogsAPI()
      // console.log(response);
      setAllBlogs(response.data)
      
    }catch(err){
      
    }
  }

    // Function to truncate blog content
    const previewContent = (content, length) => {
      if (content.length > length) {
        return content.substring(0, length) + '...';
      }
      return content;
    };

  return (
    <>
      <Swiper
        modules={[ Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="h-screen mySwiper" 
      >
        <SwiperSlide>
          <div className="relative h-full">
            <img
              src="https://images.pexels.com/photos/3695297/pexels-photo-3695297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Slide 1"
              className="w-full h-full object-cover" 
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <h2 className="text-3xl font-bold">Think Different, Read Different</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full"> 
            <img
              src="https://images.pexels.com/photos/12410062/pexels-photo-12410062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Slide 2"
              className="w-full h-full object-cover" 
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <h2 className="text-3xl font-bold">Dive into the Deep End of Ideas</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full">
            <img
              src="https://images.pexels.com/photos/5993625/pexels-photo-5993625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Slide 3"
              className="w-full h-full object-cover" 
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <h2 className="text-3xl font-bold">Discover Your Next Favorite Read</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="container mx-auto py-10 px-8">
       
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
       {allBlogs.length === 0 ? (
                        <p>No blogs available.</p>
                    ) : (
                      allBlogs.map((blog, index) => (
                            <div key={index} className="card hover:translate-x-[-10px] transition duration-300 hover:brightness-110 cursor-pointer"
                            onClick={() => viewBlog(blog.id)}>
                                {blog.image && (
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-48 object-cover"
                                    />
                                )}
                                <div className="p-4">
                                    <h3 className="text-xl font-bold">{blog.title}</h3>
                                    <p className="mt-2 text-gray-600">{previewContent(blog.content, 100)}</p>
                                </div>
                            </div>
                        ))
                    )}
       </div>
     </div>
    </>
  );
};

export default Home;