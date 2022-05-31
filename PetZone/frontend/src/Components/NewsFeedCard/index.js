import React from 'react'
import ProfileImg from '../../Images/profileImg.jpg'
import './newsfeed.css'
import NewsFeedImg from '../../Images/newsimg.jpg'
const Index = () => {
    return (
        <div className=' card rounded-4 m-4 py-4 px-3'>
            <div className='user-info-card'>
                <img className='profile-img' src={ProfileImg} alt='profile img' loading='lazy' />
                <div className=' modal-user-info-cont'>
                    <p className='ms-2'>CH. Rajab Ali</p>
                    <a><i class="fa-solid fa-ellipsis"></i></a>
                </div>
            </div>
            <div className='p-2'>
                <p className='ml-2'>We are sad to hear about Yaseen Malik.</p>
            </div>
            <div style={{ backgroundImage: `url(${NewsFeedImg})` }} className='mt-3 newsfeed-body-img-cont'></div>
            <div className='show-likes'>
                <p className='likes-on-post'><i class="fa-solid fa-heart"></i> 2</p>
                <p className='likes-on-post'>3 comments</p>
            </div>
            <div className='like-comment-cont'>
                <button type="button" class="btn btn-outline-light" data-mdb-ripple-color="dark"><i class="fa-solid fa-heart"></i> LIKE</button>
                <button type="button" class="btn btn-outline-light" data-mdb-ripple-color="dark"><i class="fa-solid fa-comment-dots"></i> COMMENT</button>
            </div>
        </div>
    )
}

export default Index