import commomAPI from "./commonAPI";
import SERVER_URL from "./serverUrl";

// uploadBlog Api- api must call by add component

export const uploadBlogApi=async(blog)=>{
    return await commomAPI("POST",`${SERVER_URL}/allBlogs`,blog)
}

// getAllBlogs Api-called by home/myProfile component

export const getAllBlogsAPI=async()=>{
    return await commomAPI("GET",`${SERVER_URL}/allBlogs`,"")
}

// getSingleBlogAPI called by blogView

export const getSingleBlogAPI=async(id)=>{
    return await commomAPI("GET",`${SERVER_URL}/allBlogs/${id}`,"")
}

// removeBlogApi called by history

export const removeBlogApi=async(id)=>{
    return await commomAPI("DELETE",`${SERVER_URL}/allBlogs/${id}`,{})
}

// updateBlogAPI called by edit

export const updateBlogAPI=async(blogId,blogDetails)=>{
    return await commomAPI("PUT",`${SERVER_URL}/allBlogs/${blogId}`,blogDetails)
}