import React, { useState } from 'react'
import './showblog.css'
const Index = ({blogTitle,blogAuthor, blogImage, blogDescription, blogId, blogLikes,likeBlog, dislikeBlog}) => {
    const [likeChecked, setLikeChecked] = useState(false)
  
    const blog={
        blogTitle:blogTitle,
        blogAuthor:blogAuthor,
        blogDescription:blogDescription,
        blogImage:blogImage,
        blogId: blogId,
        blogLikes:blogLikes,

    }
    return (
    <div className='card rounded-4 m-4 py-4 px-3'>
        <div className='blog-heading-cont'>
            <div className='heading-info-cont'>
            <h2>{blogTitle}</h2>
            <p>Posted by: {blogAuthor}</p>
            </div>
            <div className='px-3'>
                <a><i class="fa-solid fa-ellipsis"></i></a>
            </div>
        </div>
        <div className='py-3 px-2'>
                <p className='ml-2'>{blogDescription}</p>
            </div>
            {

                blogImage?<div style={{ backgroundImage: `url(${blogImage})` }} className='mt-3 newsfeed-body-img-cont'></div>:''
            }
            <div className='show-likes'>
                <p className='likes-on-post'><i class="fa-solid fa-heart"></i> {blogLikes}</p>
            </div>
            <div className='like-comment-cont'>
                <button onClick={()=>{
                    if(!likeChecked){
                        likeBlog(blog)
                        setLikeChecked(true)
                    }
                    else{
                        dislikeBlog(blog)
                        setLikeChecked(false)
                    }
                }} type="button" style={{backgroundColor:likeChecked?'red':'',color:likeChecked?'white':''}} class="btn btn-outline-light" data-mdb-ripple-color="dark"><i class="fa-solid fa-heart"></i> LIKE</button>
            </div>
    </div>
  )
}

export default Index