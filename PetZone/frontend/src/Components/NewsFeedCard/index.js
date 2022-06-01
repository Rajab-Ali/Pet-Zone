import React, { useState } from 'react'
import './newsfeed.css'

const Index = ({postAuthor, authorImage, postDescription, postImage, postLikes, like, dislike, postId }) => {
    const [likeChecked,setLikeChecked] = useState(false)
    const post = {
        postId:postId,
        postAuthor:postAuthor,
        authorImage:authorImage,
        postDescription:postDescription,
        postImage:postImage,
        postLikes:postLikes,
    }
    return (
        <div className=' card rounded-4 m-4 py-4 px-3'>
            <div className='user-info-card'>
                <img className='profile-img' src={authorImage} alt='profile img' loading='lazy' />
                <div className=' modal-user-info-cont'>
                    <p className='ms-2'>{postAuthor}</p>
                    <a><i class="fa-solid fa-ellipsis"></i></a>
                </div>
            </div>
            <div className='p-2'>
                <p className='ml-2'>{postDescription}</p>
            </div>

            { postImage? <div style={{ backgroundImage: `url(${postImage})` }} className='mt-3 newsfeed-body-img-cont'></div>:''}
            <div className='show-likes'>
                <p className='likes-on-post'><i class="fa-solid fa-heart"></i> {postLikes}</p>
                <p className='likes-on-post'>3 comments</p>
            </div>
            <div className='like-comment-cont'>
                <button onClick={()=>{
                    if(!likeChecked){
                        like(post)
                        setLikeChecked(true)
                    }
                    else{
                        dislike(post)
                        setLikeChecked(false)
                    }
                }} type="button" style={{backgroundColor:likeChecked?'red':''}} class="btn btn-outline-light" data-mdb-ripple-color="dark"><i class="fa-solid fa-heart"></i> LIKE</button>
                <button type="button" class="btn btn-outline-light" data-mdb-ripple-color="dark"><i class="fa-solid fa-comment-dots"></i> COMMENT</button>
            </div>
        </div>
    )
}

export default Index