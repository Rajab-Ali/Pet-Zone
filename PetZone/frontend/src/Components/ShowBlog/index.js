import React from 'react'
import './showblog.css'
const Index = ({heading,postedby,blogImg}) => {
  return (
    <div className='card rounded-4 m-4 py-4 px-3'>
        <div className='blog-heading-cont'>
            <div className='heading-info-cont'>
            <h2>{heading}</h2>
            <p>Posted by: {postedby}</p>
            </div>
            <div className='px-3'>
                <a><i class="fa-solid fa-ellipsis"></i></a>
            </div>
        </div>
        <div className='py-3 px-2'>
                <p className='ml-2'>The Persian cat is a long-haired breed of cat characterized by its round face and short muzzle. It is also known as the "Persian Longhair" in English-speaking countries. The first documented ancestors of Persian cats were imported into Italy from Persia around 1620.</p>
            </div>
            <div style={{ backgroundImage: `url(${blogImg})` }} className='mt-3 newsfeed-body-img-cont'></div>
            <div className='show-likes'>
                <p className='likes-on-post'><i class="fa-solid fa-heart"></i> 24</p>
            </div>
            <div className='like-comment-cont'>
                <button type="button" class="btn btn-outline-light" data-mdb-ripple-color="dark"><i class="fa-solid fa-heart"></i> LIKE</button>
            </div>
    </div>
  )
}

export default Index